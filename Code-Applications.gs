/**
 * BU2 교육관리 — 교육 신청서 전용 Apps Script 백엔드
 * =====================================
 * 외부(해외지사·Agent·고객사)에서 접속하는 공개 신청서 페이지(apply.html)와
 * 관리자 앱의 "신청 접수함" 탭이 공용으로 쓰는 백엔드입니다.
 *
 * 반드시 교육관리 본 데이터(Code.gs)와는 "별도의" Google Sheet + 배포로 만드세요.
 * 신청서는 URL만 알면 누구나 제출할 수 있어야 하므로 액세스 권한을 "전체"로 열어야
 * 하는데, 본 데이터(대상자 명단·연락처·이수 이력)와 같은 백엔드를 쓰면 그 URL로
 * 전체 데이터가 함께 노출됩니다. 신청서 데이터만 별도로 분리해 그 노출 범위를
 * 최소화합니다.
 *
 * ── 배포 방법 (Code.gs와 동일한 절차) ──────────────────────────
 * 1. sheet.new 로 새 Google Sheet 생성 (이름 예: "BU2 교육관리 신청서 DATA")
 * 2. 확장 프로그램 → Apps Script → 기본 코드 전부 지우고 이 파일 내용 붙여넣기
 * 3. 저장 → 배포 → 새 배포 → 웹 앱 / 실행 사용자: 나 / 액세스 권한: 전체 → 배포
 * 4. 나오는 웹 앱 URL을 복사해서:
 *    - apply.js 의 APPLY_SHEETS_URL 값으로 붙여넣기 (공개 신청서 페이지용)
 *    - 관리자 앱의 "신청 접수함" 탭 → "⚙ 신청서 Sheets 설정"에 붙여넣기 (검토용)
 */

var SHEET_NAME = 'BU2_EDU_APPLICATIONS';
var CHUNK_SIZE = 40000;

/* ── 로그인 게이트 ── 공개 신청서 제출(submitApplication)은 로그인 없이 열어두고,
 * 관리자 전용 액션(신청 목록 조회·상태 저장·각종 이메일 발송)만 검증한다.
 * firebase-config.js의 apiKey와 동일한 값으로 채우세요. 비밀값이 아닙니다.
 */
var FIREBASE_WEB_API_KEY = 'AIzaSyBUiaNYIToY3I3iphbZ1SMkAaA9Z1B4zkE';
var ALLOWED_EMAIL_DOMAIN = '@intekplus.com';

/* 로그인 검증 스위치 — 임원 보고(시연) 기간에만 false로 두고, 정식 운영 시 true로 되돌린 뒤
 * 새 버전으로 재배포한다. false인 동안은 이 URL을 아는 누구나 신청 목록을 조회·수정하고
 * 안내 메일 발송을 실행할 수 있다. 클라이언트의 firebase-config.js REQUIRE_LOGIN과 같은 값으로 맞춘다. */
var REQUIRE_LOGIN = false;

/* Firebase ID 토큰을 서버에서 검증한다. 도메인(@intekplus.com)뿐 아니라 이메일 인증 완료(emailVerified)도
 * 요구한다 — Firebase Web API 키는 공개값이라 누구나 가입해 토큰을 받을 수 있기 때문. */
function _verifyIdToken_(idToken) {
  if (!REQUIRE_LOGIN) return '(로그인 해제)';
  if (!idToken) return null;
  try {
    var resp = UrlFetchApp.fetch(
      'https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=' + FIREBASE_WEB_API_KEY,
      { method: 'post', contentType: 'application/json',
        payload: JSON.stringify({ idToken: idToken }), muteHttpExceptions: true }
    );
    var data = JSON.parse(resp.getContentText());
    if (!data.users || !data.users.length) return null;
    var u = data.users[0];
    if (u.emailVerified !== true) return null;
    var email = String(u.email || '').toLowerCase();
    if (email.slice(-ALLOWED_EMAIL_DOMAIN.length) !== ALLOWED_EMAIL_DOMAIN) return null;
    return email;
  } catch (e) {
    return null;
  }
}

/* 상태를 읽고-고치고-쓰는 모든 요청을 한 번에 하나씩만 처리한다(동시 제출 시 한 건이 다른 건에 덮여 사라지는 것 방지) */
function _withLock_(fn) {
  var lock = LockService.getScriptLock();
  lock.waitLock(20000);
  try { return fn(); } finally { lock.releaseLock(); }
}

/* 새 내용을 먼저 덮어쓰고 남는 행만 지운다(clearContents 후 쓰면 그 사이 읽는 요청이 빈 목록을 본다) */
function _writeSheetRows_(sh, raw) {
  var rows = [];
  for (var i = 0; i < raw.length; i += CHUNK_SIZE) {
    rows.push([raw.substring(i, i + CHUNK_SIZE)]);
  }
  if (!rows.length) rows.push(['']);
  var prevLast = sh.getLastRow();
  sh.getRange(1, 1, rows.length, 1).setValues(rows);
  if (prevLast > rows.length) sh.getRange(rows.length + 1, 1, prevLast - rows.length, 1).clearContent();
}

function _getSheet_() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sh = ss.getSheetByName(SHEET_NAME);
  if (!sh) {
    sh = ss.insertSheet(SHEET_NAME);
    try { sh.hideSheet(); } catch (e) {}
  }
  return sh;
}

/* 저장된 JSON이 깨져 있으면 빈 목록으로 취급하지 않고 예외를 던진다 — 빈 목록으로 보고 다음 제출이
 * 들어오면 남아 있던 전체 신청서를 1건으로 덮어써 버리기 때문이다. */
function _readState_() {
  var sh = _getSheet_();
  var lastRow = sh.getLastRow();
  if (lastRow < 1) return {applications: []};
  var vals = sh.getRange(1, 1, lastRow, 1).getValues();
  var raw = vals.map(function (r) { return r[0] || ''; }).join('');
  if (!raw) return {applications: []};
  var state;
  try { state = JSON.parse(raw); } catch (e) { throw new Error('state_corrupt'); }
  if (!state.applications) state.applications = [];
  return state;
}

function _writeState_(obj) {
  _writeSheetRows_(_getSheet_(), JSON.stringify(obj));
}

/* ── 계정 디렉터리 (ID/PW 로그인용) ──
 * 이 스프레드시트 안에 별도 시트 탭을 하나 더 둔다. 신청서 데이터와 마찬가지로 로그인 전
 * (비인증) 상태에서 호출되는 액션이므로, 대상자 명단 등 민감 데이터가 있는 메인 백엔드
 * (Code.gs)가 아니라 이미 공개 접근이 전제된 이 백엔드에 둔다. 비밀번호는 저장하지 않는다 —
 * 실제 인증은 Firebase Auth가 전담하고, 여기는 순수 ID↔이메일↔프로필 조회용 디렉터리다.
 */
var ACCOUNTS_SHEET_NAME = 'BU2_EDU_ACCOUNTS';

function _getAccountsSheet_() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sh = ss.getSheetByName(ACCOUNTS_SHEET_NAME);
  if (!sh) {
    sh = ss.insertSheet(ACCOUNTS_SHEET_NAME);
    try { sh.hideSheet(); } catch (e) {}
  }
  return sh;
}

function _readAccountsState_() {
  var sh = _getAccountsSheet_();
  var lastRow = sh.getLastRow();
  if (lastRow < 1) return {accounts: []};
  var vals = sh.getRange(1, 1, lastRow, 1).getValues();
  var raw = vals.map(function (r) { return r[0] || ''; }).join('');
  if (!raw) return {accounts: []};
  var state;
  try { state = JSON.parse(raw); } catch (e) { throw new Error('state_corrupt'); }
  if (!state.accounts) state.accounts = [];
  return state;
}

function _writeAccountsState_(obj) {
  _writeSheetRows_(_getAccountsSheet_(), JSON.stringify(obj));
}

var ACCOUNT_ID_PATTERN = /^[a-zA-Z0-9_]{4,20}$/;
var EMAIL_PATTERN = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
/* 안내 메일에 넣을 수 있는 링크 접두사 — 이 웹앱 URL이 새어 나가도 임의 링크가 든 메일을 우리 계정으로
 * 보내지 못하게 한다. 사이트 주소가 바뀌면 여기에도 추가한다. */
var ALLOWED_LINK_PREFIXES = ['https://leesanghen.github.io/BU2-Education/'];
var MAX_APPLICATIONS = 5000;

function _esc_(s) {
  return String(s == null ? '' : s)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function _clip_(v, n) { return String(v == null ? '' : v).substring(0, n); }
function _singleLine_(v, n) { return _clip_(v, n).replace(/[\r\n]+/g, ' '); }
function _validLink_(link) {
  link = String(link || '');
  if (/["'<>\s]/.test(link)) return false;
  return ALLOWED_LINK_PREFIXES.some(function (p) { return link.indexOf(p) === 0; });
}
/* 메일 발송 전 공통 검사 — 수신자는 이메일 주소 1개만 허용(쉼표로 여러 명 지정 불가) */
function _mailPrecheck_(to, link, needLink) {
  if (!to) return 'missing recipient email';
  if (!EMAIL_PATTERN.test(String(to))) return 'invalid recipient email';
  if (needLink && !_validLink_(link)) return 'invalid link';
  return '';
}

/* 공개 신청서 입력을 신청서가 실제로 쓰는 필드만 골라 길이를 제한해 저장한다(임의 필드·초대형 데이터 차단) */
function _cleanApplication_(src) {
  if (!src || typeof src !== 'object' || Array.isArray(src)) return null;
  var o = {};
  ['applyDate', 'orgType', 'org', 'country', 'applicantName', 'applicantPosition', 'applicantContact', 'applicantEmail',
   'traineeName', 'traineePosition', 'traineeTask', 'traineeContact', 'traineeEmail', 'visitCategory', 'priorLevel',
   'experienceYears', 'desiredStart', 'desiredEnd', 'totalDays', 'branchApproverName', 'submitLang'
  ].forEach(function (k) { o[k] = _singleLine_(src[k], 200); });
  o.specialNotes = _clip_(src.specialNotes, 3000);
  o.desiredLevel = Number(src.desiredLevel) || 0;
  o.equipment = (Array.isArray(src.equipment) ? src.equipment : []).slice(0, 30).map(function (x) { return _singleLine_(x, 40); });
  o.selfAssessment = (Array.isArray(src.selfAssessment) ? src.selfAssessment : []).slice(0, 60).map(function (m) {
    m = m || {};
    return { moduleId: _singleLine_(m.moduleId, 40), code: _singleLine_(m.code, 20), name: _singleLine_(m.name, 120),
             level: Number(m.level) || 0, has: m.has === 'Y' ? 'Y' : 'N', note: _clip_(m.note, 500) };
  });
  o.clientToken = _singleLine_(src.clientToken, 80);
  if (!o.traineeName || !o.org || !EMAIL_PATTERN.test(o.traineeEmail) || !EMAIL_PATTERN.test(o.applicantEmail)) return null;
  return o;
}

function _json_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}

function doGet(e) {
  try { return _doGet_(e); } catch (err) { return _json_({ error: String(err) }); }
}

function _doGet_(e) {
  var action = e && e.parameter && e.parameter.action;
  if (action === 'ping') return _json_({ ok: true });
  if (action === 'load') {
    if (!_verifyIdToken_(e.parameter.idToken)) return _json_({ error: 'unauthorized' });
    var state = _readState_();
    return _json_({ applications: state.applications || [] });
  }
  // 회원가입 화면의 "중복확인" 버튼 전용 — 로그인 전에 호출되므로 비인증
  if (action === 'checkId') {
    var wantId = String(e.parameter.id || '').trim().toLowerCase();
    if (!wantId) return _json_({ error: 'missing id' });
    var accSt = _readAccountsState_();
    var taken = accSt.accounts.some(function (a) { return String(a.id || '').toLowerCase() === wantId; });
    return _json_({ available: !taken });
  }
  // ID/PW 로그인, 비밀번호 재설정에서 ID→이메일 역조회 전용 — 로그인 전에 호출되므로 비인증
  if (action === 'lookupEmail') {
    var lookId = String(e.parameter.id || '').trim().toLowerCase();
    var accSt2 = _readAccountsState_();
    var found = accSt2.accounts.filter(function (a) { return String(a.id || '').toLowerCase() === lookId; })[0];
    return _json_({ email: found ? found.email : null });
  }
  return _json_({ error: 'unknown action: ' + action });
}

function doPost(e) {
  try {
    var body = JSON.parse(e.postData.contents);

    // 공개 신청서 페이지 전용 — 기존 신청 목록을 읽어올 필요 없이 새 신청 1건만 추가
    // clientToken으로 중복 제출을 방지한다 (응답이 유실돼 클라이언트가 자동 재시도해도 안전)
    if (body.action === 'submitApplication') {
      var rec = _cleanApplication_(body.application);
      if (!rec) return _json_({ error: 'invalid application' });
      return _withLock_(function () {
        var state = _readState_();
        if (rec.clientToken) {
          var dup = state.applications.filter(function (a) { return a.clientToken === rec.clientToken; })[0];
          if (dup) return _json_({ ok: true, id: dup.id });
        }
        if (state.applications.length >= MAX_APPLICATIONS) return _json_({ error: 'capacity' });
        rec.id = 'app_' + new Date().getTime() + '_' + Math.floor(Math.random() * 100000);
        rec.submittedAt = new Date().toISOString();
        rec.status = 'pending';
        state.applications.push(rec);
        _writeState_(state);
        return _json_({ ok: true, id: rec.id });
      });
    }

    // 회원가입 화면 전용 — Firebase 계정 생성 직후 호출. 비밀번호는 절대 받지 않는다(Firebase가
    // 전담). ID 형식·이메일 도메인을 서버에서도 재검증해 클라이언트 우회를 막는다.
    if (body.action === 'registerAccount') {
      var acc = body.account || {};
      var accId = String(acc.id || '').trim();
      var accEmail = String(acc.email || '').trim().toLowerCase();
      if (!ACCOUNT_ID_PATTERN.test(accId)) return _json_({ error: 'invalid_id' });
      if (!EMAIL_PATTERN.test(accEmail) || accEmail.slice(-ALLOWED_EMAIL_DOMAIN.length) !== ALLOWED_EMAIL_DOMAIN) return _json_({ error: 'invalid_domain' });
      return _withLock_(function () {
        var accState = _readAccountsState_();
        var accTaken = accState.accounts.some(function (a) { return String(a.id || '').toLowerCase() === accId.toLowerCase(); });
        if (accTaken) return _json_({ error: 'id_taken' });
        accState.accounts.push({
          id: accId,
          email: accEmail,
          name: _singleLine_(acc.name, 100),
          phone: _singleLine_(acc.phone, 50),
          createdAt: new Date().toISOString()
        });
        _writeAccountsState_(accState);
        return _json_({ ok: true });
      });
    }

    // 관리자 앱 전용 — 신청 접수함 검토/등록/반려 상태 저장. 서버 목록과 id 기준으로 합친다:
    // 관리자가 화면을 열어둔 사이에 접수된 새 신청서가 이 저장으로 지워지지 않게 하기 위함이다.
    // (클라이언트가 보낸 신청서는 그 id의 서버본을 대체, 삭제는 deletedIds로만 반영)
    if (body.action === 'save') {
      if (!_verifyIdToken_(body.idToken)) return _json_({ error: 'unauthorized' });
      if (!Array.isArray(body.applications)) return _json_({ error: 'invalid applications' });
      var sent = body.applications.filter(function (a) { return a && typeof a === 'object' && a.id; });
      if (JSON.stringify(sent).length > 2000000) return _json_({ error: 'too large' });
      var deleted = {};
      (Array.isArray(body.deletedIds) ? body.deletedIds : []).slice(0, 5000).forEach(function (id) { deleted[String(id)] = true; });
      return _withLock_(function () {
        var cur = _readState_();
        var sentIds = {};
        sent.forEach(function (a) { sentIds[a.id] = true; });
        var keep = cur.applications.filter(function (a) { return a && !sentIds[a.id] && !deleted[a.id]; });
        var merged = sent.filter(function (a) { return !deleted[a.id]; }).concat(keep);
        _writeState_({ applications: merged });
        return _json_({ ok: true, applications: merged });
      });
    }

    // 관리자가 "대상자로 등록" 클릭 시 — 대상자 이메일로 사전 선행학습 링크 발송
    // (Apps Script 배포 계정의 Gmail로 발송됩니다. 별도 SMS/이메일 서비스 가입·API 키가 필요 없습니다.)
    if (body.action === 'sendPrelearnEmail') {
      if (!_verifyIdToken_(body.idToken)) return _json_({ error: 'unauthorized' });
      var to = body.to;
      var preErr = _mailPrecheck_(to, body.link, true);
      if (preErr) return _json_({ error: preErr });
      var subject = '[BU2] Online Pre-Learning — ' + _singleLine_(body.equipmentName || body.equipment, 100) +
        ' (' + _singleLine_(body.traineeName, 60) + ')';
      var htmlBody =
        '<div style="font-family:Arial,sans-serif;font-size:14px;color:#222;line-height:1.7">' +
        '<p>Dear ' + _esc_(body.traineeName || '') + ',</p>' +
        '<p>Your training application for <b>' + _esc_(body.equipmentName || body.equipment || '') + '</b> has been received and registered.</p>' +
        '<p>Please complete the online pre-learning course below <b>before your visit</b>:</p>' +
        '<p style="margin:20px 0"><a href="' + _esc_(body.link) + '" style="background:#1a6bbf;color:#fff;padding:10px 18px;border-radius:6px;text-decoration:none;font-weight:600">Start Pre-Learning</a></p>' +
        '<p style="font-size:12px;color:#888">' + _esc_(body.link) + '</p>' +
        '<p style="margin-top:24px">담당자 검토 후 등록되었습니다. 방문 전 위 링크에서 사전 선행학습을 완료해주세요.<br>(같은 이름/소속으로 다시 접속하면 이어서 학습할 수 있습니다.)</p>' +
        '<p style="margin-top:24px;color:#888;font-size:12px">BU2 Training Coordinator</p>' +
        '</div>';
      try {
        MailApp.sendEmail({ to: to, subject: subject, htmlBody: htmlBody });
        return _json_({ ok: true });
      } catch (mailErr) {
        return _json_({ error: 'mail failed: ' + String(mailErr) });
      }
    }

    // 관리자가 "대상자별 이수 현황"에서 "📧 이메일로 전송" 클릭 시 — 대상자 이메일로 필기평가(exam.html) 링크 발송
    if (body.action === 'sendExamEmail') {
      if (!_verifyIdToken_(body.idToken)) return _json_({ error: 'unauthorized' });
      var eTo = body.to;
      var exErr = _mailPrecheck_(eTo, body.link, true);
      if (exErr) return _json_({ error: exErr });
      var eSubject = '[BU2] Written Exam — ' + _singleLine_(body.equipmentName, 100) + ' (' + _singleLine_(body.traineeName, 60) + ')';
      var eHtml =
        '<div style="font-family:Arial,sans-serif;font-size:14px;color:#222;line-height:1.7">' +
        '<p>Dear ' + _esc_(body.traineeName || '') + ',</p>' +
        '<p>Please complete the <b>' + _esc_(body.equipmentName || '') + ' written exam</b> using the link below:</p>' +
        '<p style="margin:20px 0"><a href="' + _esc_(body.link) + '" style="background:#1a6bbf;color:#fff;padding:10px 18px;border-radius:6px;text-decoration:none;font-weight:600">Start Written Exam</a></p>' +
        '<p style="font-size:12px;color:#888">' + _esc_(body.link) + '</p>' +
        '<p style="margin-top:24px">이 링크로 접속하면 등록된 전체 문항이 출제됩니다. 감독 하에 응시해주세요.</p>' +
        '<p style="margin-top:24px;color:#888;font-size:12px">BU2 Training Coordinator</p>' +
        '</div>';
      try {
        MailApp.sendEmail({ to: eTo, subject: eSubject, htmlBody: eHtml });
        return _json_({ ok: true });
      } catch (mailErr) {
        return _json_({ error: 'mail failed: ' + String(mailErr) });
      }
    }

    // 관리자가 이수증 화면에서 "📧 이메일로 전송" 클릭 시 — 화면에 보이는 이수증과 동일한 내용을 대상자 이메일로 발송
    if (body.action === 'sendCertificateEmail') {
      if (!_verifyIdToken_(body.idToken)) return _json_({ error: 'unauthorized' });
      var cTo = body.to;
      var ceErr = _mailPrecheck_(cTo, '', false);
      if (ceErr) return _json_({ error: ceErr });
      var cLevel = (body.level != null) ? _esc_(_singleLine_(body.level, 10)) : '';
      var cSubject = '[BU2] Certificate of Completion — Level ' + _singleLine_(body.level, 10) + ' (' + _singleLine_(body.traineeName, 60) + ')';
      // 이수증 화면(certificate.js)에서 이미 선택된 언어로 번역해 전달한 라벨 — 없으면 한국어 기본값 사용
      var L = body.labels || {};
      var lbl = function (key, fallback) { return (L[key] != null && L[key] !== '') ? L[key] : fallback; };
      var signsHtml = (body.signatures || []).map(function (s) {
        return '<div style="display:inline-block;text-align:center;margin:0 16px 10px;min-width:100px">' +
          '<div style="font-weight:600">' + _esc_(s.name || '') + '</div>' +
          '<div style="border-top:1px solid #999;margin:6px 0 4px;width:100px"></div>' +
          '<div style="font-size:11px;color:#888">' + _esc_(s.role || '') + '</div>' +
          '</div>';
      }).join('');
      var followUpHtml = body.followUp
        ? ('<div style="font-size:12px;color:#555;margin-bottom:10px">' + _esc_(lbl('followUp', 'Follow-Up 확인')) + ': ' + _esc_(lbl('followUpDone', '완료')) + ' · ' + _esc_(body.followUpDate || '') + '</div>')
        : '';
      var itemRowsHtml = (body.items || []).map(function (it) {
        return '<tr>' +
          '<td style="border:1px solid #e2e2ea;padding:5px 8px">' + _esc_(it.module || '') + '</td>' +
          '<td style="border:1px solid #e2e2ea;padding:5px 8px">' + _esc_(it.item || '') + '</td>' +
          '<td style="border:1px solid #e2e2ea;padding:5px 8px;text-align:center">' + (it.done ? '✅' : '—') + '</td>' +
          '<td style="border:1px solid #e2e2ea;padding:5px 8px">' + _esc_(it.date || '-') + '</td>' +
          '<td style="border:1px solid #e2e2ea;padding:5px 8px">' + _esc_(it.note || '-') + '</td>' +
          '</tr>';
      }).join('');
      var itemsHtml = itemRowsHtml
        ? ('<div style="font-weight:700;color:#7a5a1e;font-size:12px;margin:16px 0 4px">' + _esc_(lbl('itemsTitle', '세부 이수 항목')) + '</div>' +
          '<table style="width:100%;border-collapse:collapse;font-size:12px"><thead><tr>' +
          '<th style="border:1px solid #e2e2ea;padding:5px 8px;background:#f8f8fb">' + _esc_(lbl('thModule', '모듈')) + '</th>' +
          '<th style="border:1px solid #e2e2ea;padding:5px 8px;background:#f8f8fb">' + _esc_(lbl('thItem', '이수 항목')) + '</th>' +
          '<th style="border:1px solid #e2e2ea;padding:5px 8px;background:#f8f8fb">' + _esc_(lbl('thDone', '이수')) + '</th>' +
          '<th style="border:1px solid #e2e2ea;padding:5px 8px;background:#f8f8fb">' + _esc_(lbl('thDate', '확인일자')) + '</th>' +
          '<th style="border:1px solid #e2e2ea;padding:5px 8px;background:#f8f8fb">' + _esc_(lbl('thNote', '비고')) + '</th>' +
          '</tr></thead><tbody>' + itemRowsHtml + '</tbody></table>')
        : '';
      var cHtml =
        '<div style="font-family:Arial,sans-serif;font-size:14px;color:#222;border:2px solid #b8860b;padding:28px;max-width:640px;margin:0 auto">' +
        '<div style="text-align:center;margin-bottom:16px">' +
        '<div style="font-size:12px;letter-spacing:2px;color:#888">BU2 · INTEKPLUS</div>' +
        '<div style="font-size:24px;font-weight:700;margin-top:6px">' + _esc_(lbl('title', '교육 이수증')) + '</div>' +
        '<div style="font-size:12px;color:#888">CERTIFICATE OF COMPLETION</div>' +
        '</div>' +
        '<div style="font-size:11px;color:#888;text-align:right">' + _esc_(lbl('certNo', '발급번호')) + ' ' + _esc_(body.certNo || '') + '</div>' +
        '<table style="width:100%;font-size:13px;margin:14px 0"><tr>' +
        '<td style="color:#888;width:70px">' + _esc_(lbl('name', '성명')) + '</td><td style="font-weight:600">' + _esc_(body.traineeName || '') + '</td>' +
        '<td style="color:#888;width:70px">' + _esc_(lbl('org', '소속')) + '</td><td style="font-weight:600">' + _esc_(body.org || '') + '</td>' +
        '</tr><tr>' +
        '<td style="color:#888">' + _esc_(lbl('position', '직책')) + '</td><td>' + _esc_(body.position || '-') + '</td>' +
        '<td style="color:#888">' + _esc_(lbl('country', '국가')) + '</td><td>' + _esc_(body.country || '-') + '</td>' +
        '</tr></table>' +
        '<p style="line-height:1.8">' + _esc_(lbl('statement1', '위 사람은 BU2 FCBGA Substrate 검사 장비 교육 과정 중')) + '<br><b>Level ' + cLevel + ' · ' + _esc_(body.levelTitle || '') + '</b> ' + _esc_(lbl('statement2', '과정을 성실히 이수하였음을 증명합니다.')) + '</p>' +
        '<div style="background:#f7f5ef;padding:12px 16px;margin:14px 0;border-radius:4px">' +
        '<div style="font-weight:600;margin-bottom:4px">' + _esc_(lbl('competencyTitle', '핵심 역량')) + ' (Level ' + cLevel + ')</div>' +
        '<div style="font-size:12px;color:#555">' + _esc_(body.competency || '') + '</div>' +
        '</div>' +
        '<table style="width:100%;font-size:13px;margin:14px 0"><tr>' +
        '<td style="color:#888;width:100px">' + _esc_(lbl('itemsDone', '이수 항목')) + '</td><td>' + _esc_(body.doneCount != null ? body.doneCount : '') + ' / ' + _esc_(body.totalCount != null ? body.totalCount : '') + ' (' + _esc_(body.pct != null ? body.pct : '') + '%)</td>' +
        '<td style="color:#888;width:100px">' + _esc_(lbl('approvalDate', '이수(승인)일자')) + '</td><td>' + _esc_(body.approvalDate || '') + '</td>' +
        '</tr></table>' +
        itemsHtml +
        followUpHtml +
        '<div style="text-align:right;font-size:11px;color:#888;margin-bottom:16px">' + _esc_(lbl('issueDate', '발급일')) + ' ' + _esc_(body.issueDate || '') + '</div>' +
        '<div style="text-align:center">' + signsHtml + '</div>' +
        '<div style="text-align:center;font-size:11px;color:#888;margin-top:10px">' + _esc_(lbl('footer', 'BU2 기술운영1그룹 · 교육 담당자')) + '</div>' +
        '</div>';
      try {
        MailApp.sendEmail({ to: cTo, subject: cSubject, htmlBody: cHtml });
        return _json_({ ok: true });
      } catch (mailErr) {
        return _json_({ error: 'mail failed: ' + String(mailErr) });
      }
    }

    // 관리자가 "반려" 제출 시 — 신청자 이메일로 반려 사유 안내 메일 발송
    // (담당자 이메일을 회신 주소로 지정해, 신청자가 바로 답장으로 문의할 수 있게 한다)
    if (body.action === 'sendRejectionEmail') {
      if (!_verifyIdToken_(body.idToken)) return _json_({ error: 'unauthorized' });
      var rTo = body.to;
      var reErr = _mailPrecheck_(rTo, '', false);
      if (reErr) return _json_({ error: reErr });
      var reviewerEmail = EMAIL_PATTERN.test(String(body.reviewerEmail || '')) ? String(body.reviewerEmail) : '';
      var rSubject = '[BU2] Training Application Declined — ' + _singleLine_(body.traineeName || body.applicantName, 60);
      var rHtml =
        '<div style="font-family:Arial,sans-serif;font-size:14px;color:#222;line-height:1.7">' +
        '<p>Dear ' + _esc_(body.applicantName || body.traineeName || '') + ',</p>' +
        '<p>Unfortunately, your training application (' + _esc_(body.traineeName || '') + ') has been <b>declined</b>.</p>' +
        '<p style="margin:16px 0;padding:12px 16px;background:#f5f5f5;border-left:3px solid #b52020">' +
        '<b>Reason:</b><br>' + _esc_(body.reason || '').replace(/\n/g, '<br>') +
        '</p>' +
        '<p>If you have any questions, please contact the reviewer below.</p>' +
        '<p style="margin-top:20px">' +
        _esc_(body.reviewerName || '') +
        (body.reviewerOrg ? (' · ' + _esc_(body.reviewerOrg)) : '') +
        (reviewerEmail ? ('<br>' + _esc_(reviewerEmail)) : '') +
        '</p>' +
        '<p style="margin-top:24px;color:#888;font-size:12px">BU2 Training Coordinator</p>' +
        '</div>';
      try {
        MailApp.sendEmail({ to: rTo, subject: rSubject, htmlBody: rHtml, replyTo: reviewerEmail || undefined });
        return _json_({ ok: true });
      } catch (mailErr) {
        return _json_({ error: 'mail failed: ' + String(mailErr) });
      }
    }

    return _json_({ error: 'unknown action: ' + body.action });
  } catch (err) {
    return _json_({ error: String(err) });
  }
}
