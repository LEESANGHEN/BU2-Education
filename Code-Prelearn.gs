/**
 * BU2 사전 선행학습 — Apps Script 백엔드
 * =====================================
 * Level 0~1 온라인 사전 선행학습(prelearn.html)의 학습자별 진도/퀴즈 결과를 저장합니다.
 * 교육관리 본 데이터(Code.gs), 신청서(Code-Applications.gs)와는 완전히 별도의
 * Google Sheet에 배포하세요 (동일한 이유 — 노출 범위 최소화).
 *
 * ── 배포 방법 (Code.gs / Code-Applications.gs와 동일한 절차) ──────────────
 * 1. sheet.new 로 새 Google Sheet 생성 (이름 예: "BU2 사전학습 DATA")
 * 2. 확장 프로그램 → Apps Script → 기본 코드 전부 지우고 이 파일 내용 붙여넣기
 * 3. 저장 → 배포 → 새 배포 → 웹 앱 / 실행 사용자: 나 / 액세스 권한: 전체 → 배포
 * 4. 나오는 웹 앱 URL을 복사해서:
 *    - prelearn.js 의 PRELEARN_SHEETS_URL 값으로 붙여넣기
 *    - 관리자 앱의 "🧑‍🎓 사전학습 현황" 탭 → "⚙ 사전학습 Sheets 설정"에 붙여넣기
 *
 * ── 공개/관리자 액션 구분 ─────────────────────────────────────────────────
 * 공개(로그인 없이): learner(본인 기록 1건 조회), quizOverrides, upsertProgress, submitExam
 * 관리자(idToken 필요): load(전체 목록), deleteRecords, deleteExamResults, saveQuizOverrides, translate
 * 학습자는 전체 목록을 내려받지 못한다 — 다른 학습자의 이름·연락처·고유 ID가 노출되지 않게 한다.
 */

var SHEET_NAME = 'BU2_PRELEARN_DATA';
var CHUNK_SIZE = 40000;
var PASS_RATIO = 0.8;

var FIREBASE_WEB_API_KEY = 'AIzaSyBUiaNYIToY3I3iphbZ1SMkAaA9Z1B4zkE';
var ALLOWED_EMAIL_DOMAIN = '@intekplus.com';

/* 로그인 검증 스위치 — 임원 보고(시연) 기간에만 false로 두고, 정식 운영 시 true로 되돌린 뒤
 * 새 버전으로 재배포한다. false인 동안은 이 URL을 아는 누구나 관리자 액션(전체 목록 조회·삭제·
 * 퀴즈 수정·번역)을 실행할 수 있다. 클라이언트의 firebase-config.js REQUIRE_LOGIN과 같은 값으로 맞춘다. */
var REQUIRE_LOGIN = false;

/* Firebase ID 토큰을 서버에서 검증한다. 도메인(@intekplus.com)뿐 아니라 이메일 인증 완료
 * (emailVerified)도 요구한다 — Firebase Web API 키는 공개값이라 누구나 가입해 토큰을 받을 수 있기 때문. */
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

/* 상태를 읽고-고치고-쓰는 모든 요청을 한 번에 하나씩만 처리한다(동시 저장 시 서로 덮어써 데이터가 사라지는 것 방지) */
function _withLock_(fn) {
  var lock = LockService.getScriptLock();
  lock.waitLock(20000);
  try { return fn(); } finally { lock.releaseLock(); }
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

function _emptyState_() { return {records: [], quizOverrides: {}, examResults: []}; }

/* 저장된 JSON이 깨져 있으면 빈 상태로 취급하지 않고 예외를 던진다 — 빈 상태로 보고 다음 저장이
 * 들어오면 남아 있던 전체 데이터를 덮어써 버리기 때문이다. */
function _readState_() {
  var sh = _getSheet_();
  var lastRow = sh.getLastRow();
  if (lastRow < 1) return _emptyState_();
  var vals = sh.getRange(1, 1, lastRow, 1).getValues();
  var raw = vals.map(function (r) { return r[0] || ''; }).join('');
  if (!raw) return _emptyState_();
  var state;
  try { state = JSON.parse(raw); } catch (e) { throw new Error('state_corrupt'); }
  if (!state.records) state.records = [];
  if (!state.quizOverrides) state.quizOverrides = {};
  if (!state.examResults) state.examResults = [];
  return state;
}

/* 새 내용을 먼저 덮어쓰고 남는 행만 지운다(clearContents 후 쓰면 그 사이 읽는 요청이 빈 목록을 본다) */
function _writeState_(obj) {
  var sh = _getSheet_();
  var raw = JSON.stringify(obj);
  var rows = [];
  for (var i = 0; i < raw.length; i += CHUNK_SIZE) {
    rows.push([raw.substring(i, i + CHUNK_SIZE)]);
  }
  if (!rows.length) rows.push(['']);
  var prevLast = sh.getLastRow();
  sh.getRange(1, 1, rows.length, 1).setValues(rows);
  if (prevLast > rows.length) sh.getRange(rows.length + 1, 1, prevLast - rows.length, 1).clearContent();
}

function _json_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}

/* ── 입력 정리 (공개 엔드포인트라 클라이언트가 보낸 값을 그대로 저장하지 않는다) ── */
function _str_(v, n) { return String(v == null ? '' : v).slice(0, n || 200); }
function _int_(v, min, max) {
  var n = parseInt(v, 10);
  if (isNaN(n)) return min;
  return Math.max(min, Math.min(max, n));
}
function _key_(v, re, n) {
  var s = _str_(v, n || 40);
  return re.test(s) ? s : '';
}
var EQUIP_RE = /^[a-z0-9_-]{1,20}$/;
var CODE_RE = /^[0-9A-Za-z._-]{1,20}$/;
var ID_RE = /^[A-Za-z0-9_-]{1,60}$/;

function _cleanProgress_(p) {
  if (!p || typeof p !== 'object') return null;
  var total = _int_(p.quizTotal, 0, 100);
  var score = Math.min(_int_(p.quizScore, 0, 100), total);
  var out = {
    viewed: !!p.viewed,
    quizScore: score,
    quizTotal: total,
    passed: total > 0 && (score / total) >= PASS_RATIO, // 합격 여부는 클라이언트 값을 믿지 않고 점수로 다시 계산
    attempts: _int_(p.attempts, 0, 50),
    picks: {}
  };
  if (p.picks && typeof p.picks === 'object') {
    Object.keys(p.picks).slice(0, 10).forEach(function (k) {
      out.picks[_str_(k, 5)] = _int_(p.picks[k], 0, 20);
    });
  }
  return out;
}

function _cleanCourse_(c) {
  var out = { progress: {}, startedAt: _str_(c && c.startedAt, 40) };
  if (c && c.completedAt) out.completedAt = _str_(c.completedAt, 40);
  var prog = (c && c.progress && typeof c.progress === 'object') ? c.progress : {};
  Object.keys(prog).slice(0, 60).forEach(function (code) {
    if (!CODE_RE.test(code)) return;
    var cp = _cleanProgress_(prog[code]);
    if (cp) out.progress[code] = cp;
  });
  return out;
}

function _cleanRecord_(rec) {
  var out = {
    name: _str_(rec.name, 100),
    org: _str_(rec.org, 150),
    orgType: _str_(rec.orgType, 60),
    contact: _str_(rec.contact, 60),
    traineeId: _key_(rec.traineeId, ID_RE, 60),
    startedAt: _str_(rec.startedAt, 40),
    shuf: rec.shuf ? 1 : 0,
    courses: {}
  };
  var courses = (rec.courses && typeof rec.courses === 'object') ? rec.courses : {};
  Object.keys(courses).slice(0, 10).forEach(function (eq) {
    if (EQUIP_RE.test(eq)) out.courses[eq] = _cleanCourse_(courses[eq]);
  });
  return out;
}

/* 기존 기록에 새 기록을 합친다 — 이미 제출된 섹션 결과와 시작/완료 시각은 어떤 요청으로도 바뀌지 않는다
 * (같은 문항을 두 탭에서 따로 제출해 먼저 제출한 결과를 덮어쓰거나 재응시하는 것을 막는다). */
function _mergeRecord_(existing, incoming) {
  var out = {
    id: existing.id,
    name: incoming.name || existing.name,
    org: incoming.org || existing.org,
    orgType: incoming.orgType || existing.orgType || '',
    contact: incoming.contact || existing.contact || '',
    traineeId: existing.traineeId || incoming.traineeId || '',
    startedAt: existing.startedAt || incoming.startedAt,
    shuf: existing.shuf ? 1 : 0,
    courses: {}
  };
  var eqs = {};
  Object.keys(existing.courses || {}).forEach(function (k) { eqs[k] = 1; });
  Object.keys(incoming.courses || {}).forEach(function (k) { eqs[k] = 1; });
  Object.keys(eqs).forEach(function (eq) {
    var oc = (existing.courses || {})[eq], ic = (incoming.courses || {})[eq];
    if (!oc) { out.courses[eq] = ic; return; }
    var course = { progress: {}, startedAt: oc.startedAt || (ic && ic.startedAt) || '' };
    var prog = {};
    Object.keys((ic && ic.progress) || {}).forEach(function (k) { prog[k] = ic.progress[k]; });
    Object.keys(oc.progress || {}).forEach(function (k) { prog[k] = oc.progress[k]; }); // 기존 제출 결과 우선
    course.progress = prog;
    var done = oc.completedAt || (ic && ic.completedAt);
    if (done) course.completedAt = done;
    out.courses[eq] = course;
  });
  return out;
}

function _findLearner_(state, q) {
  var tid = String(q.tid || '').trim();
  var id = String(q.id || '').trim();
  var name = String(q.name || '').trim().toLowerCase();
  var org = String(q.org || '').trim().toLowerCase();
  var recs = state.records;
  var i;
  if (tid) {
    for (i = 0; i < recs.length; i++) if (recs[i].traineeId === tid) return recs[i];
  }
  // 이 브라우저에 저장된 ID는 입력한 이름이 그 기록의 이름과 같을 때만 신뢰한다(다른 사람 기록 가로채기 방지)
  if (id && name) {
    for (i = 0; i < recs.length; i++) {
      if (recs[i].id === id && String(recs[i].name || '').trim().toLowerCase() === name) return recs[i];
    }
  }
  if (name && org) {
    for (i = 0; i < recs.length; i++) {
      if (String(recs[i].name || '').trim().toLowerCase() === name && String(recs[i].org || '').trim().toLowerCase() === org) return recs[i];
    }
  }
  return null;
}

function doGet(e) {
  try {
    var p = (e && e.parameter) || {};
    var action = p.action;
    if (action === 'ping') return _json_({ ok: true });

    // 학습자 페이지 — 본인 기록 1건과 퀴즈 오버라이드만 반환한다(전체 목록은 내려주지 않는다)
    if (action === 'learner') {
      return _withLock_(function () {
        var state = _readState_();
        return _json_({ quizOverrides: state.quizOverrides || {}, record: _findLearner_(state, p) });
      });
    }
    // 필기평가 페이지 — 퀴즈 오버라이드만
    if (action === 'quizOverrides') {
      var st = _readState_();
      return _json_({ quizOverrides: st.quizOverrides || {} });
    }
    // 관리자 앱 — 전체 목록(학습자 개인정보·시험 결과 포함)
    if (action === 'load') {
      if (!_verifyIdToken_(p.idToken)) return _json_({ error: 'unauthorized' });
      var state2 = _readState_();
      return _json_({ records: state2.records || [], quizOverrides: state2.quizOverrides || {}, examResults: state2.examResults || [] });
    }
    return _json_({ error: 'unknown action: ' + action });
  } catch (err) {
    return _json_({ error: String(err) });
  }
}

function doPost(e) {
  try {
    var body = JSON.parse(e.postData.contents);
    return _withLock_(function () { return _handlePost_(body); });
  } catch (err) {
    return _json_({ error: String(err) });
  }
}

function _handlePost_(body) {
  // 학습자 페이지 전용 — 자기 진도 1건을 새로 만들거나 갱신한다(서버가 id를 발급하고, 기존 제출 결과는 보존)
  if (body.action === 'upsertProgress') {
    var state = _readState_();
    var raw = body.record || {};
    if (JSON.stringify(raw).length > 60000) return _json_({ error: 'too_large' });
    var inc = _cleanRecord_(raw);
    if (!inc.name || !inc.org) return _json_({ error: 'invalid_record' });
    var idx = -1, i;
    var reqId = _key_(raw.id, ID_RE, 60);
    if (reqId) {
      for (i = 0; i < state.records.length; i++) if (state.records[i].id === reqId) { idx = i; break; }
    }
    // 같은 대상자 고유 ID(tid)의 기록이 이미 있으면 새로 만들지 않고 그 기록에 합친다(중복 기록 방지)
    if (idx < 0 && inc.traineeId) {
      for (i = 0; i < state.records.length; i++) if (state.records[i].traineeId === inc.traineeId) { idx = i; break; }
    }
    var saved;
    if (idx >= 0) {
      var ex = state.records[idx];
      // 대상자 ID가 지정된 기록은 같은 ID를 가진 요청만 수정할 수 있다
      if (ex.traineeId && ex.traineeId !== inc.traineeId) return _json_({ error: 'forbidden' });
      saved = _mergeRecord_(ex, inc);
      saved.lastActivityAt = new Date().toISOString();
      state.records[idx] = saved;
    } else {
      saved = inc;
      saved.id = 'pl_' + Utilities.getUuid().replace(/-/g, '').slice(0, 20);
      saved.lastActivityAt = new Date().toISOString();
      if (!saved.startedAt) saved.startedAt = saved.lastActivityAt;
      state.records.push(saved);
    }
    _writeState_(state);
    return _json_({ ok: true, id: saved.id, record: saved });
  }

  // 관리자 앱 전용 — 학습자 기록 삭제(id 목록). 전체 목록을 통째로 덮어쓰지 않으므로 그 사이 들어온 기록이 사라지지 않는다.
  if (body.action === 'deleteRecords') {
    if (!_verifyIdToken_(body.idToken)) return _json_({ error: 'unauthorized' });
    if (!Array.isArray(body.ids)) return _json_({ error: 'invalid_ids' });
    var del = {};
    body.ids.forEach(function (x) { del[String(x)] = 1; });
    var s2 = _readState_();
    s2.records = s2.records.filter(function (r) { return !del[r.id]; });
    _writeState_(s2);
    return _json_({ ok: true });
  }

  // 관리자 앱 전용 — 퀴즈 문제 커스텀(설비/섹션별 관리자 수정본) 전체 갱신. records는 보존한다.
  if (body.action === 'saveQuizOverrides') {
    if (!_verifyIdToken_(body.idToken)) return _json_({ error: 'unauthorized' });
    var qo = body.quizOverrides;
    if (!qo || typeof qo !== 'object' || Array.isArray(qo)) return _json_({ error: 'invalid_quizOverrides' });
    if (JSON.stringify(qo).length > 400000) return _json_({ error: 'too_large' });
    var s3 = _readState_();
    s3.quizOverrides = qo;
    _writeState_(s3);
    return _json_({ ok: true });
  }

  // 필기평가(exam.html) 전용 — 응시 결과 1건 추가. 합격 여부·정답률은 점수로 서버가 다시 계산한다.
  if (body.action === 'submitExam') {
    var s6 = _readState_();
    var r6 = body.examResult || {};
    var total = _int_(r6.total, 0, 500);
    var score = Math.min(_int_(r6.score, 0, 500), total);
    var eq6 = _key_(r6.equipment, EQUIP_RE, 20);
    var nm6 = _str_(r6.traineeName, 100), og6 = _str_(r6.traineeOrg, 150);
    if (!eq6 || !nm6 || !og6 || total < 1) return _json_({ error: 'invalid_result' });
    if (s6.examResults.length >= 5000) return _json_({ error: 'storage_full' });
    var res6 = {
      equipment: eq6, traineeName: nm6, traineeOrg: og6,
      traineeOrgType: _str_(r6.traineeOrgType, 60), traineeContact: _str_(r6.traineeContact, 60),
      score: score, total: total,
      pct: Math.round(score / total * 100),
      passed: (score / total) >= PASS_RATIO,
      id: 'exam_' + Utilities.getUuid().replace(/-/g, '').slice(0, 20),
      submittedAt: new Date().toISOString()
    };
    s6.examResults.push(res6);
    _writeState_(s6);
    return _json_({ ok: true, id: res6.id });
  }

  // 관리자 앱 전용 — 필기평가 응시 결과 삭제(id 목록). records/quizOverrides는 보존한다.
  if (body.action === 'deleteExamResults') {
    if (!_verifyIdToken_(body.idToken)) return _json_({ error: 'unauthorized' });
    if (!Array.isArray(body.ids)) return _json_({ error: 'invalid_ids' });
    var del7 = {};
    body.ids.forEach(function (x) { del7[String(x)] = 1; });
    var s7 = _readState_();
    s7.examResults = s7.examResults.filter(function (r) { return !del7[r.id]; });
    _writeState_(s7);
    return _json_({ ok: true });
  }

  // 관리자 앱 "퀴즈 관리" 전용 — 한국어 텍스트 여러 개를 다른 언어로 일괄 번역
  // (Apps Script 내장 LanguageApp 사용 — 별도 API 키·가입 필요 없음. 남용 방지를 위해 개수·길이 제한)
  if (body.action === 'translate') {
    if (!_verifyIdToken_(body.idToken)) return _json_({ error: 'unauthorized' });
    var texts = Array.isArray(body.texts) ? body.texts.slice(0, 10) : [];
    var source = (body.source === 'en') ? 'en' : 'ko';
    var allowed = ['en', 'zh-CN', 'zh-TW', 'ja', 'vi', 'ko'];
    var targets = (Array.isArray(body.targets) ? body.targets : ['en', 'zh-CN', 'zh-TW', 'ja', 'vi'])
      .filter(function (tg) { return allowed.indexOf(tg) >= 0; }).slice(0, 6);
    var results = texts.map(function (t) {
      var s = String(t == null ? '' : t).slice(0, 500);
      var out = {};
      targets.forEach(function (tg) {
        try { out[tg] = LanguageApp.translate(s, source, tg); }
        catch (err) { out[tg] = ''; }
      });
      return out;
    });
    return _json_({ ok: true, results: results });
  }

  return _json_({ error: 'unknown action: ' + body.action });
}
