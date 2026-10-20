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
 */

var SHEET_NAME = 'BU2_PRELEARN_DATA';
var CHUNK_SIZE = 40000;

/* ── 로그인 게이트 ── 공개 학습자 액션(load/upsertProgress/submitExam)은 절대 게이트하지
 * 않는다 — prelearn.html/exam.js가 이름+소속으로 재개·조회할 때 로그인 없이 호출한다.
 * 관리자 전용 액션(저장/퀴즈 수정/번역)만 검증한다.
 * firebase-config.js의 apiKey와 동일한 값으로 채우세요. 비밀값이 아닙니다.
 */
var FIREBASE_WEB_API_KEY = 'AIzaSyBUiaNYIToY3I3iphbZ1SMkAaA9Z1B4zkE';
var ALLOWED_EMAIL_DOMAIN = '@intekplus.com';

/* 로그인 검증 스위치 — 임원 보고(시연) 기간에만 false로 두고, 정식 운영 시 true로 되돌린 뒤
 * 새 버전으로 재배포한다. false인 동안은 이 URL을 아는 누구나 학습자 기록·퀴즈를 수정하고
 * 번역 기능을 사용할 수 있다. 클라이언트의 firebase-config.js REQUIRE_LOGIN과 같은 값으로 맞춘다. */
var REQUIRE_LOGIN = false;

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
    var email = String(data.users[0].email || '').toLowerCase();
    if (email.slice(-ALLOWED_EMAIL_DOMAIN.length) !== ALLOWED_EMAIL_DOMAIN) return null;
    return email;
  } catch (e) {
    return null;
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
  if (lastRow < 1) return {records: [], quizOverrides: {}, examResults: []};
  var vals = sh.getRange(1, 1, lastRow, 1).getValues();
  var raw = vals.map(function (r) { return r[0] || ''; }).join('');
  if (!raw) return {records: [], quizOverrides: {}, examResults: []};
  try {
    var state = JSON.parse(raw);
    if (!state.records) state.records = [];
    if (!state.quizOverrides) state.quizOverrides = {};
    if (!state.examResults) state.examResults = [];
    return state;
  } catch (e) {
    return {records: [], quizOverrides: {}, examResults: []};
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
    var state = _readState_();
    return _json_({ records: state.records || [], quizOverrides: state.quizOverrides || {}, examResults: state.examResults || [] });
  }
  return _json_({ error: 'unknown action: ' + action });
}

function doPost(e) {
  try {
    var body = JSON.parse(e.postData.contents);

    // 학습자 페이지 전용 — 자기 진도 1건만 새로 만들거나 갱신 (전체 목록을 읽어올 필요 없음)
    if (body.action === 'upsertProgress') {
      var state = _readState_();
      var rec = body.record || {};
      var idx = -1;
      if (rec.id) {
        for (var i = 0; i < state.records.length; i++) {
          if (state.records[i].id === rec.id) { idx = i; break; }
        }
      }
      if (!rec.id) {
        rec.id = 'pl_' + new Date().getTime() + '_' + Math.floor(Math.random() * 10000);
      }
      rec.lastActivityAt = new Date().toISOString();
      if (idx >= 0) state.records[idx] = rec; else state.records.push(rec);
      _writeState_(state);
      return _json_({ ok: true, id: rec.id });
    }

    // 관리자 앱 전용 — 학습자 진도 전체 목록 갱신(삭제 등). quizOverrides는 보존한다.
    if (body.action === 'save') {
      if (!_verifyIdToken_(body.idToken)) return _json_({ error: 'unauthorized' });
      var state2 = _readState_();
      state2.records = body.records || [];
      _writeState_(state2);
      return _json_({ ok: true });
    }

    // 관리자 앱 전용 — 퀴즈 문제 커스텀(설비/섹션별 관리자 수정본) 전체 갱신. records는 보존한다.
    if (body.action === 'saveQuizOverrides') {
      if (!_verifyIdToken_(body.idToken)) return _json_({ error: 'unauthorized' });
      var state3 = _readState_();
      state3.quizOverrides = body.quizOverrides || {};
      _writeState_(state3);
      return _json_({ ok: true });
    }

    // 필기평가(exam.html) 전용 — 응시 결과 1건 추가 (전체 목록을 읽어올 필요 없음)
    if (body.action === 'submitExam') {
      var state6 = _readState_();
      var rec6 = body.examResult || {};
      rec6.id = 'exam_' + new Date().getTime() + '_' + Math.floor(Math.random() * 10000);
      rec6.submittedAt = new Date().toISOString();
      state6.examResults.push(rec6);
      _writeState_(state6);
      return _json_({ ok: true, id: rec6.id });
    }

    // 관리자 앱 전용 — 필기평가 응시 결과 전체 목록 갱신(삭제 등). records/quizOverrides는 보존한다.
    if (body.action === 'saveExamResults') {
      if (!_verifyIdToken_(body.idToken)) return _json_({ error: 'unauthorized' });
      var state7 = _readState_();
      state7.examResults = body.examResults || [];
      _writeState_(state7);
      return _json_({ ok: true });
    }

    // 관리자 앱 "퀴즈 관리" 전용 — 한국어 텍스트 여러 개를 다른 언어로 일괄 번역
    // (Apps Script 내장 LanguageApp 사용 — 별도 API 키·가입 필요 없음)
    if (body.action === 'translate') {
      if (!_verifyIdToken_(body.idToken)) return _json_({ error: 'unauthorized' });
      var texts = body.texts || [];
      var source = body.source || 'ko';
      var targets = body.targets || ['en', 'zh-CN', 'zh-TW', 'ja'];
      var results = texts.map(function (t) {
        var out = {};
        targets.forEach(function (tg) {
          try { out[tg] = LanguageApp.translate(t, source, tg); }
          catch (err) { out[tg] = ''; }
        });
        return out;
      });
      return _json_({ ok: true, results: results });
    }

    return _json_({ error: 'unknown action: ' + body.action });
  } catch (err) {
    return _json_({ error: String(err) });
  }
}
