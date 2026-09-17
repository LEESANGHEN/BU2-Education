/**
 * BU2 교육관리 — Apps Script 백엔드
 * =====================================
 * 이 파일은 새로 만든 Google Sheet에 붙여넣어서 "웹 앱"으로 배포하는 용도입니다.
 * BU2 교육관리 앱(index.html 등)의 데이터 저장소 역할을 합니다.
 * BU2-trip과 동일한 구조(전체 데이터 통째 저장/불러오기)를 사용하며,
 * BU2-trip과는 완전히 별도의 Google Sheet에 저장해야 합니다.
 *
 * ── 배포 방법 ──────────────────────────────────────────────
 * 1. sheet.new 로 새 Google Sheet를 만듭니다. (제목 예: "BU2 교육관리 DATA")
 * 2. 상단 메뉴 [확장 프로그램] > [Apps Script] 클릭
 * 3. 기본으로 열려있는 Code.gs 안의 내용을 전부 지우고, 이 파일 내용을 통째로 붙여넣기
 * 4. 저장(💾) 후, 상단 [배포] > [새 배포] 클릭
 *    - 유형 선택(⚙️)에서 "웹 앱" 선택
 *    - 실행할 사용자: "나(내 계정)"
 *    - 액세스 권한이 있는 사용자: "전체"  ← 반드시 "전체"로 설정해야 로그인 없이 앱에서 접근 가능합니다
 * 5. [배포] 클릭 → 권한 승인(본인 계정으로 로그인 필요) → 완료되면 나오는
 *    웹 앱 URL (https://script.google.com/macros/s/xxxx/exec) 을 복사
 * 6. 이 URL을 교육관리 앱의 app.js 안 DEFAULT_SHEETS_URL 값으로 붙여넣고
 *    GitHub Pages에 반영하면, 이 앱을 처음 여는 모든 사용자에게 자동 적용됩니다.
 *    (또는 각자 브라우저에서 "⚙ Sheets 설정"으로 URL을 넣어도 됩니다.)
 *
 * ── 참고 ──────────────────────────────────────────────────
 * 이 백엔드는 저장할 때마다 전체 데이터를 통째로 저장/불러오는 단순한 방식입니다.
 * 소수 인원이 순차적으로 입력하는 규모에서는 안전하게 동작하지만, 여러 사람이
 * "정확히 동시에" 각자 다른 PC에서 저장을 누르는 극히 드문 경우에는 마지막에
 * 저장한 내용이 우선합니다.
 */

var SHEET_NAME = 'BU2_EDU_DATA';
var CHUNK_SIZE = 40000; // Google Sheets 셀 1개 최대 5만자 제한보다 여유있게 설정

var FIELDS = ['trainees', 'visits', 'levels', 'modules', 'checklistItems', 'completions', 'approvals', 'auditLog'];

/* ── 로그인 게이트 (index.html 전용 백엔드 — 이 파일의 모든 실제 액션이 관리자 전용) ──
 * firebase-config.js의 apiKey와 동일한 값으로 채우세요. 비밀값이 아닙니다(공개 웹 API 키).
 */
var FIREBASE_WEB_API_KEY = 'AIzaSyBUiaNYIToY3I3iphbZ1SMkAaA9Z1B4zkE';
var ALLOWED_EMAIL_DOMAIN = '@intekplus.com';

/* Firebase ID 토큰을 Identity Toolkit REST API로 서버 검증한다.
   Apps Script는 커스텀 헤더를 못 받으므로 토큰은 파라미터(GET) 또는 body(POST)로 전달받는다.
   { email, reason } 형태로 반환한다 — 유효하면 email이 채워지고, 실패하면 email이 null이며
   reason에 대략적인 실패 분류만 담는다(익명 요청자에게 노출되는 응답이므로 토큰 원문·응답 본문 등
   민감할 수 있는 상세 내용은 담지 않는다 — 진단에 필요한 최소 분류만). */
function _verifyIdToken_(idToken) {
  if (!idToken) return { email: null, reason: 'no_token' };
  try {
    var resp = UrlFetchApp.fetch(
      'https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=' + FIREBASE_WEB_API_KEY,
      { method: 'post', contentType: 'application/json',
        payload: JSON.stringify({ idToken: idToken }), muteHttpExceptions: true }
    );
    var code = resp.getResponseCode();
    var data = JSON.parse(resp.getContentText());
    if (code !== 200 || !data.users || !data.users.length) {
      return { email: null, reason: 'lookup_failed_http' + code };
    }
    var email = String(data.users[0].email || '').toLowerCase();
    if (email.slice(-ALLOWED_EMAIL_DOMAIN.length) !== ALLOWED_EMAIL_DOMAIN) {
      return { email: null, reason: 'domain_mismatch' };
    }
    return { email: email, reason: 'ok' };
  } catch (e) {
    return { email: null, reason: 'exception' };
  }
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

function _readState_() {
  var sh = _getSheet_();
  var lastRow = sh.getLastRow();
  if (lastRow < 1) return {};
  var vals = sh.getRange(1, 1, lastRow, 1).getValues();
  var raw = vals.map(function (r) { return r[0] || ''; }).join('');
  if (!raw) return {};
  try {
    return JSON.parse(raw);
  } catch (e) {
    return {};
  }
}

function _writeState_(obj) {
  var sh = _getSheet_();
  sh.clearContents();
  var raw = JSON.stringify(obj);
  var rows = [];
  for (var i = 0; i < raw.length; i += CHUNK_SIZE) {
    rows.push([raw.substring(i, i + CHUNK_SIZE)]);
  }
  if (!rows.length) rows.push(['']);
  sh.getRange(1, 1, rows.length, 1).setValues(rows);
}

function _json_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}

function doGet(e) {
  var action = e && e.parameter && e.parameter.action;
  if (action === 'ping') return _json_({ ok: true });
  if (action === 'load') {
    var v = _verifyIdToken_(e.parameter.idToken);
    if (!v.email) return _json_({ error: 'unauthorized', reason: v.reason });
    var state = _readState_();
    var out = {};
    FIELDS.forEach(function (f) {
      out[f] = (state[f] !== undefined) ? state[f] : [];
    });
    return _json_(out);
  }
  return _json_({ error: 'unknown action: ' + action });
}

function doPost(e) {
  try {
    var body = JSON.parse(e.postData.contents);
    if (body.action === 'save') {
      var v = _verifyIdToken_(body.idToken);
      if (!v.email) return _json_({ error: 'unauthorized', reason: v.reason });
      var state = _readState_();
      FIELDS.forEach(function (f) {
        if (body[f] !== undefined) state[f] = body[f];
      });
      _writeState_(state);
      return _json_({ ok: true });
    }
    return _json_({ error: 'unknown action: ' + body.action });
  } catch (err) {
    return _json_({ error: String(err) });
  }
}
