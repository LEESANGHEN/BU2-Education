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
  if (lastRow < 1) return {applications: []};
  var vals = sh.getRange(1, 1, lastRow, 1).getValues();
  var raw = vals.map(function (r) { return r[0] || ''; }).join('');
  if (!raw) return {applications: []};
  try {
    var state = JSON.parse(raw);
    if (!state.applications) state.applications = [];
    return state;
  } catch (e) {
    return {applications: []};
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

function _esc_(s) {
  return String(s == null ? '' : s)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
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
    return _json_({ applications: state.applications || [] });
  }
  return _json_({ error: 'unknown action: ' + action });
}

function doPost(e) {
  try {
    var body = JSON.parse(e.postData.contents);

    // 공개 신청서 페이지 전용 — 기존 신청 목록을 읽어올 필요 없이 새 신청 1건만 추가
    // clientToken으로 중복 제출을 방지한다 (응답이 유실돼 클라이언트가 자동 재시도해도 안전)
    if (body.action === 'submitApplication') {
      var state = _readState_();
      var rec = body.application || {};
      if (rec.clientToken) {
        var dup = state.applications.filter(function (a) { return a.clientToken === rec.clientToken; })[0];
        if (dup) return _json_({ ok: true, id: dup.id });
      }
      rec.id = 'app_' + new Date().getTime() + '_' + Math.floor(Math.random() * 10000);
      rec.submittedAt = new Date().toISOString();
      rec.status = 'pending';
      state.applications.push(rec);
      _writeState_(state);
      return _json_({ ok: true, id: rec.id });
    }

    // 관리자 앱 전용 — 신청 접수함 검토/등록/반려 상태를 통째로 갱신
    if (body.action === 'save') {
      var state2 = { applications: body.applications || [] };
      _writeState_(state2);
      return _json_({ ok: true });
    }

    // 관리자가 "대상자로 등록" 클릭 시 — 대상자 이메일로 사전 선행학습 링크 발송
    // (Apps Script 배포 계정의 Gmail로 발송됩니다. 별도 SMS/이메일 서비스 가입·API 키가 필요 없습니다.)
    if (body.action === 'sendPrelearnEmail') {
      var to = body.to;
      if (!to) return _json_({ error: 'missing recipient email' });
      var subject = '[BU2] Online Pre-Learning — ' + (body.equipmentName || body.equipment || '') +
        ' (' + (body.traineeName || '') + ')';
      var htmlBody =
        '<div style="font-family:Arial,sans-serif;font-size:14px;color:#222;line-height:1.7">' +
        '<p>Dear ' + _esc_(body.traineeName || '') + ',</p>' +
        '<p>Your training application for <b>' + _esc_(body.equipmentName || body.equipment || '') + '</b> has been received and registered.</p>' +
        '<p>Please complete the online pre-learning course below <b>before your visit</b>:</p>' +
        '<p style="margin:20px 0"><a href="' + body.link + '" style="background:#1a6bbf;color:#fff;padding:10px 18px;border-radius:6px;text-decoration:none;font-weight:600">Start Pre-Learning</a></p>' +
        '<p style="font-size:12px;color:#888">' + body.link + '</p>' +
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
      var eTo = body.to;
      if (!eTo) return _json_({ error: 'missing recipient email' });
      var eSubject = '[BU2] Written Exam — ' + (body.equipmentName || '') + ' (' + (body.traineeName || '') + ')';
      var eHtml =
        '<div style="font-family:Arial,sans-serif;font-size:14px;color:#222;line-height:1.7">' +
        '<p>Dear ' + _esc_(body.traineeName || '') + ',</p>' +
        '<p>Please complete the <b>' + _esc_(body.equipmentName || '') + ' written exam</b> using the link below:</p>' +
        '<p style="margin:20px 0"><a href="' + body.link + '" style="background:#1a6bbf;color:#fff;padding:10px 18px;border-radius:6px;text-decoration:none;font-weight:600">Start Written Exam</a></p>' +
        '<p style="font-size:12px;color:#888">' + body.link + '</p>' +
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
      var cTo = body.to;
      if (!cTo) return _json_({ error: 'missing recipient email' });
      var cLevel = (body.level != null) ? body.level : '';
      var cSubject = '[BU2] Certificate of Completion — Level ' + cLevel + ' (' + (body.traineeName || '') + ')';
      var signsHtml = (body.signatures || []).map(function (s) {
        return '<div style="display:inline-block;text-align:center;margin:0 16px 10px;min-width:100px">' +
          '<div style="font-weight:600">' + _esc_(s.name || '') + '</div>' +
          '<div style="border-top:1px solid #999;margin:6px 0 4px;width:100px"></div>' +
          '<div style="font-size:11px;color:#888">' + _esc_(s.role || '') + '</div>' +
          '</div>';
      }).join('');
      var followUpHtml = body.followUp
        ? ('<div style="font-size:12px;color:#555;margin-bottom:10px">Follow-Up 확인: 완료 · ' + _esc_(body.followUpDate || '') + '</div>')
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
        ? ('<div style="font-weight:700;color:#7a5a1e;font-size:12px;margin:16px 0 4px">세부 이수 항목</div>' +
          '<table style="width:100%;border-collapse:collapse;font-size:12px"><thead><tr>' +
          '<th style="border:1px solid #e2e2ea;padding:5px 8px;background:#f8f8fb">모듈</th>' +
          '<th style="border:1px solid #e2e2ea;padding:5px 8px;background:#f8f8fb">이수 항목</th>' +
          '<th style="border:1px solid #e2e2ea;padding:5px 8px;background:#f8f8fb">이수</th>' +
          '<th style="border:1px solid #e2e2ea;padding:5px 8px;background:#f8f8fb">확인일자</th>' +
          '<th style="border:1px solid #e2e2ea;padding:5px 8px;background:#f8f8fb">비고</th>' +
          '</tr></thead><tbody>' + itemRowsHtml + '</tbody></table>')
        : '';
      var cHtml =
        '<div style="font-family:Arial,sans-serif;font-size:14px;color:#222;border:2px solid #b8860b;padding:28px;max-width:640px;margin:0 auto">' +
        '<div style="text-align:center;margin-bottom:16px">' +
        '<div style="font-size:12px;letter-spacing:2px;color:#888">BU2 · INTEKPLUS</div>' +
        '<div style="font-size:24px;font-weight:700;margin-top:6px">교육 이수증</div>' +
        '<div style="font-size:12px;color:#888">CERTIFICATE OF COMPLETION</div>' +
        '</div>' +
        '<div style="font-size:11px;color:#888;text-align:right">발급번호 ' + _esc_(body.certNo || '') + '</div>' +
        '<table style="width:100%;font-size:13px;margin:14px 0"><tr>' +
        '<td style="color:#888;width:70px">성명</td><td style="font-weight:600">' + _esc_(body.traineeName || '') + '</td>' +
        '<td style="color:#888;width:70px">소속</td><td style="font-weight:600">' + _esc_(body.org || '') + '</td>' +
        '</tr><tr>' +
        '<td style="color:#888">직책</td><td>' + _esc_(body.position || '-') + '</td>' +
        '<td style="color:#888">국가</td><td>' + _esc_(body.country || '-') + '</td>' +
        '</tr></table>' +
        '<p style="line-height:1.8">위 사람은 BU2 FCBGA Substrate 검사 장비 교육 과정 중<br><b>Level ' + cLevel + ' · ' + _esc_(body.levelTitle || '') + '</b> 과정을 성실히 이수하였음을 증명합니다.</p>' +
        '<div style="background:#f7f5ef;padding:12px 16px;margin:14px 0;border-radius:4px">' +
        '<div style="font-weight:600;margin-bottom:4px">핵심 역량 (Level ' + cLevel + ')</div>' +
        '<div style="font-size:12px;color:#555">' + _esc_(body.competency || '') + '</div>' +
        '</div>' +
        '<table style="width:100%;font-size:13px;margin:14px 0"><tr>' +
        '<td style="color:#888;width:100px">이수 항목</td><td>' + (body.doneCount != null ? body.doneCount : '') + ' / ' + (body.totalCount != null ? body.totalCount : '') + ' (' + (body.pct != null ? body.pct : '') + '%)</td>' +
        '<td style="color:#888;width:100px">이수(승인)일자</td><td>' + _esc_(body.approvalDate || '') + '</td>' +
        '</tr></table>' +
        itemsHtml +
        followUpHtml +
        '<div style="text-align:right;font-size:11px;color:#888;margin-bottom:16px">발급일 ' + _esc_(body.issueDate || '') + '</div>' +
        '<div style="text-align:center">' + signsHtml + '</div>' +
        '<div style="text-align:center;font-size:11px;color:#888;margin-top:10px">BU2 기술운영1그룹 · 교육 담당자</div>' +
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
      var rTo = body.to;
      if (!rTo) return _json_({ error: 'missing recipient email' });
      var rSubject = '[BU2] Training Application Declined — ' + (body.traineeName || body.applicantName || '');
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
        (body.reviewerEmail ? ('<br>' + _esc_(body.reviewerEmail)) : '') +
        '</p>' +
        '<p style="margin-top:24px;color:#888;font-size:12px">BU2 Training Coordinator</p>' +
        '</div>';
      try {
        MailApp.sendEmail({ to: rTo, subject: rSubject, htmlBody: rHtml, replyTo: body.reviewerEmail || undefined });
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
