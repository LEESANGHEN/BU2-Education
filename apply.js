/* ═══════════════════════════════════════════
   교육 신청서 (외부 공개 페이지)
═══════════════════════════════════════════ */
// ↓↓↓ Code-Applications.gs를 별도 Google Sheet에 배포한 뒤 나오는 /exec URL로 교체하세요.
var APPLY_SHEETS_URL='https://script.google.com/macros/s/AKfycbz2IHQCJE1YzGTwtatQtwolUIrZ1FzmykqLCG8bhIFTTkNPlYbMiIkKdvQsegE1VInF/exec';

function esc(s){return String(s==null?'':s).replace(/[&<>"']/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c];});}
function todayStr(){var d=new Date();return d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0');}
function pd(s){var d=new Date(s);d.setHours(0,0,0,0);return d;}

function initTheme(){
  var saved=localStorage.getItem('edu_theme')||'dark';
  document.documentElement.setAttribute('data-theme',saved);
  var btn=document.getElementById('themeToggle');
  if(btn)btn.textContent=saved==='dark'?'🌙':'☀️';
}
function toggleTheme(){
  var cur=document.documentElement.getAttribute('data-theme')||'dark';
  var next=cur==='dark'?'light':'dark';
  document.documentElement.setAttribute('data-theme',next);
  localStorage.setItem('edu_theme',next);
  var btn=document.getElementById('themeToggle');
  if(btn)btn.textContent=next==='dark'?'🌙':'☀️';
}

function renderForm(){
  var root=document.getElementById('formRoot');
  if(!APPLY_SHEETS_URL){
    root.innerHTML='<div class="apf-warn">⚠ 이 신청서 페이지는 아직 연결 설정이 완료되지 않았습니다. 관리자에게 문의해주세요. (apply.js의 APPLY_SHEETS_URL 미설정)</div>';
    return;
  }
  var orgOpts=ORG_TYPES.map(function(o){return '<option value="'+o.id+'">'+o.label+'</option>';}).join('');
  var countryOpts=COUNTRIES.map(function(c){return '<option value="'+c+'">'+c+'</option>';}).join('');
  var visitCatOpts=VISIT_CATS.map(function(v){return '<option value="'+v.id+'">'+v.label+'</option>';}).join('');
  var levelOpts=[0,1,2,3].map(function(n){return '<option value="'+n+'">Level '+n+'</option>';}).join('');

  var assessRows=DEF_MODULES.slice().sort(function(a,b){return a.level-b.level||a.code.localeCompare(b.code);}).map(function(m){
    return '<tr>'
      +'<td>'+m.code+'</td>'
      +'<td>Level '+m.level+'</td>'
      +'<td>'+esc(m.name)+'<div class="apf-hint">'+esc(m.detail)+'</div></td>'
      +'<td><select data-mod="'+m.id+'" class="apf-has"><option value="N">N (없음)</option><option value="partial">일부</option><option value="Y">Y (보유)</option></select></td>'
      +'<td><input type="text" data-mod-note="'+m.id+'" placeholder="관련 경력·이전 교육 이력 등"></td>'
    +'</tr>';
  }).join('');

  root.innerHTML=
    '<div class="apf-card">'
    +'<h1>해외지사 · Agent · 고객사 담당자 교육 신청서</h1>'
    +'<p class="apf-sub">BU2 FCBGA Substrate 검사 장비 Level 0~3 교육 · Training Application Form</p>'

    +'<div class="apf-sec"><h2>1. 신청 정보</h2>'
      +'<div class="apf-row3">'
        +field('신청일자','applyDate','<input type="date" id="f_applyDate" value="'+todayStr()+'">')
        +field('소속 유형','orgType','<select id="f_orgType">'+orgOpts+'</select>')
        +field('지사 · Agent · 고객사명','org','<input type="text" id="f_org" required>')
      +'</div>'
      +'<div class="apf-row3">'
        +field('신청자(작성자)','applicantName','<input type="text" id="f_applicantName" required>')
        +field('직책/직급','applicantPosition','<input type="text" id="f_applicantPosition">')
        +field('연락처 / 이메일','applicantContact','<input type="text" id="f_applicantContact" required>')
      +'</div>'
      +field('국가','country','<select id="f_country">'+countryOpts+'</select>')
    +'</div>'

    +'<div class="apf-sec"><h2>2. 교육 대상자 정보</h2>'
      +'<div class="apf-row3">'
        +field('성명','traineeName','<input type="text" id="f_traineeName" required>')
        +field('직책/직급','traineePosition','<input type="text" id="f_traineePosition">')
        +field('담당 업무','traineeTask','<input type="text" id="f_traineeTask">')
      +'</div>'
      +'<div class="apf-row3">'
        +field('방문 구분','visitCategory','<select id="f_visitCategory">'+visitCatOpts+'</select>')
        +field('재방문 시 이전 이수 Level','priorLevel','<select id="f_priorLevel"><option value="">-</option>'+levelOpts+'</select>')
        +field('현 업무 경력(년)','experienceYears','<input type="text" id="f_experienceYears">')
      +'</div>'
    +'</div>'

    +'<div class="apf-sec"><h2>3. 방문 계획 및 희망 Level</h2>'
      +'<div class="apf-row3">'
        +field('희망 Level','desiredLevel','<select id="f_desiredLevel">'+levelOpts+'</select>')
        +field('방문 희망 시작일','desiredStart','<input type="date" id="f_desiredStart" onchange="calcDays()">')
        +field('방문 희망 종료일','desiredEnd','<input type="date" id="f_desiredEnd" onchange="calcDays()">')
      +'</div>'
      +'<div class="apf-row2">'
        +field('총 방문일수','totalDays','<input type="text" id="f_totalDays" readonly>')
        +field('대안 가능 기간 / 비고','altNote','<input type="text" id="f_altNote">')
      +'</div>'
    +'</div>'

    +'<div class="apf-sec"><h2>4. 사전 역량 자가진단</h2>'
      +'<p class="apf-hint">이미 보유한 역량은 방문 중 교육에서 스킵하고, 부족한 영역에 집중 배정합니다.</p>'
      +'<div class="apf-tblwrap"><table class="apf-tbl"><thead><tr><th>코드</th><th>Level</th><th>교육 영역(모듈)</th><th style="width:110px">보유 여부</th><th>비고</th></tr></thead><tbody>'+assessRows+'</tbody></table></div>'
    +'</div>'

    +'<div class="apf-sec"><h2>5. 사전 선행학습 이수 확인 (방문 전 필수)</h2>'
      +'<div class="apf-row2">'
        +'<div class="apf-field"><label><input type="checkbox" id="f_pre0Done"> Level 0 이론 선행학습(Manual) 이수</label><input type="text" id="f_pre0Method" placeholder="학습 방법" style="margin-top:6px"></div>'
        +'<div class="apf-field"><label><input type="checkbox" id="f_pre1Done"> Level 1 SW 조작 기초 선행학습(Manual) 이수</label><input type="text" id="f_pre1Method" placeholder="학습 방법" style="margin-top:6px"></div>'
      +'</div>'
      +'<p class="apf-hint">※ 미이수 시 방문 중 Level 0부터 교육을 시작하며, 전체 방문 기간이 연장될 수 있습니다.</p>'
    +'</div>'

    +'<div class="apf-sec"><h2>6. 특이사항 및 요청사항</h2>'
      +field('','specialNotes','<textarea id="f_specialNotes" rows="3" placeholder="언어 · 비자 · 숙소 · 안전/알레르기 등"></textarea>')
    +'</div>'

    +'<div class="apf-sec"><h2>7. 신청자 확인</h2>'
      +'<div class="apf-row2">'
        +field('지사장 / Agent 대표 승인자명','branchApproverName','<input type="text" id="f_branchApproverName">')
        +field('제출일자','submitDate','<input type="text" value="'+todayStr()+'" readonly>')
      +'</div>'
      +'<p class="apf-hint">본 신청서는 방문 최소 4주 전 제출을 권장합니다. 제출된 자가진단 결과에 따라 최종 Level·Plan·방문 일정이 조정될 수 있습니다.</p>'
    +'</div>'

    +'<div id="apf_msg" class="apf-msg"></div>'
    +'<button class="apf-submit" id="apf_submit_btn" onclick="submitApplication()">신청서 제출</button>'
    +'</div>';
}
function field(label,name,inputHtml){
  return '<div class="apf-field">'+(label?('<label>'+label+'</label>'):'')+inputHtml+'</div>';
}
function calcDays(){
  var s=document.getElementById('f_desiredStart').value,e=document.getElementById('f_desiredEnd').value;
  var out=document.getElementById('f_totalDays');
  if(!s||!e){out.value='';return;}
  var days=Math.round((pd(e)-pd(s))/86400000)+1;
  out.value=(days>0?days:0)+'일';
}
function val(id){var el=document.getElementById(id);return el?el.value.trim():'';}
function checked(id){var el=document.getElementById(id);return el?el.checked:false;}

function submitApplication(){
  var required=[['f_org','지사/Agent/고객사명'],['f_applicantName','신청자(작성자)'],['f_applicantContact','연락처/이메일'],['f_traineeName','대상자 성명'],['f_desiredStart','방문 희망 시작일'],['f_desiredEnd','방문 희망 종료일']];
  for(var i=0;i<required.length;i++){
    if(!val(required[i][0])){
      alert(required[i][1]+'을(를) 입력해주세요.');
      document.getElementById(required[i][0]).focus();
      return;
    }
  }
  if(val('f_desiredEnd')<val('f_desiredStart')){
    alert('방문 희망 종료일이 시작일보다 빠를 수 없습니다.');
    return;
  }

  var selfAssessment=DEF_MODULES.map(function(m){
    var hasEl=document.querySelector('[data-mod="'+m.id+'"]');
    var noteEl=document.querySelector('[data-mod-note="'+m.id+'"]');
    return {moduleId:m.id,code:m.code,name:m.name,level:m.level,has:hasEl?hasEl.value:'N',note:noteEl?noteEl.value.trim():''};
  });

  var app={
    applyDate:val('f_applyDate'),
    orgType:val('f_orgType'),org:val('f_org'),country:val('f_country'),
    applicantName:val('f_applicantName'),applicantPosition:val('f_applicantPosition'),applicantContact:val('f_applicantContact'),
    traineeName:val('f_traineeName'),traineePosition:val('f_traineePosition'),traineeTask:val('f_traineeTask'),
    visitCategory:val('f_visitCategory'),priorLevel:val('f_priorLevel'),experienceYears:val('f_experienceYears'),
    desiredLevel:Number(val('f_desiredLevel')),desiredStart:val('f_desiredStart'),desiredEnd:val('f_desiredEnd'),
    totalDays:val('f_totalDays'),altNote:val('f_altNote'),
    selfAssessment:selfAssessment,
    pre0Done:checked('f_pre0Done'),pre0Method:val('f_pre0Method'),
    pre1Done:checked('f_pre1Done'),pre1Method:val('f_pre1Method'),
    specialNotes:val('f_specialNotes'),
    branchApproverName:val('f_branchApproverName'),
    // 응답이 유실돼도 서버가 같은 토큰의 중복 저장을 막아주므로 재시도가 안전해진다
    clientToken:'ct_'+Date.now()+'_'+Math.random().toString(36).slice(2,10)
  };

  var btn=document.getElementById('apf_submit_btn');
  btn.disabled=true;btn.textContent='제출 중...';
  submitWithRetry(app,2);
}
function submitWithRetry(app,retriesLeft){
  var btn=document.getElementById('apf_submit_btn');
  fetch(APPLY_SHEETS_URL,{method:'POST',headers:{'Content-Type':'text/plain'},body:JSON.stringify({action:'submitApplication',application:app})})
    .then(function(r){return r.text();})
    .then(function(text){
      var data;
      try{data=JSON.parse(text);}catch(e){throw new Error('invalid-response');}
      if(data.error)throw new Error(data.error);
      document.getElementById('formRoot').innerHTML='<div class="apf-card apf-done">'
        +'<h1>✅ 신청이 접수되었습니다</h1>'
        +'<p>담당자 검토 후 방문 일정과 확정 Level을 별도로 안내드립니다.<br>문의사항은 본사 교육 담당자에게 연락해주세요.</p>'
        +'</div>';
    })
    .catch(function(err){
      // Apps Script는 배포 직후 첫 요청에서 간헐적으로 정상 응답 대신 리다이렉트 HTML을
      // 반환하는 경우가 있다 (저장 자체는 이미 서버에서 처리됨). clientToken 덕분에
      // 재시도해도 신청이 중복 저장되지 않으므로, 잠시 대기 후 자동으로 다시 시도한다.
      if(retriesLeft>0&&err.message==='invalid-response'){
        setTimeout(function(){submitWithRetry(app,retriesLeft-1);},1500);
        return;
      }
      btn.disabled=false;btn.textContent='신청서 제출';
      document.getElementById('apf_msg').textContent='제출 중 오류가 발생했습니다: '+err.message+' (잠시 후 다시 시도해주세요)';
    });
}
}

document.addEventListener('DOMContentLoaded',function(){
  initTheme();
  renderForm();
});
