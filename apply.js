/* ═══════════════════════════════════════════
   교육 신청서 (외부 공개 페이지)
═══════════════════════════════════════════ */
// ↓↓↓ Code-Applications.gs를 별도 Google Sheet에 배포한 뒤 나오는 /exec URL로 교체하세요.
var APPLY_SHEETS_URL='https://script.google.com/macros/s/AKfycbz2IHQCJE1YzGTwtatQtwolUIrZ1FzmykqLCG8bhIFTTkNPlYbMiIkKdvQsegE1VInF/exec';

function esc(s){return String(s==null?'':s).replace(/[&<>"']/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c];});}
function todayStr(){var d=new Date();return d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0');}
/* 'YYYY-MM-DD' 문자열은 new Date(s)가 UTC 자정으로 해석해, UTC보다 늦은 시간대 반대편(미국 등)에서는
   하루 전 날짜로 보인다 — 날짜만 있는 문자열은 항상 로컬 날짜로 만든다 */
function pd(s){
  var m=/^(\d{4})-(\d{2})-(\d{2})/.exec(String(s||''));
  var d=m?new Date(Number(m[1]),Number(m[2])-1,Number(m[3])):new Date(s);
  d.setHours(0,0,0,0);return d;
}

/* 저장소가 차단된 환경(사파리 프라이빗 모드, 일부 인앱 브라우저)에서는 localStorage 접근 자체가
   예외를 던지므로 try/catch로 감싼다 — 그렇지 않으면 첫 줄에서 멈춰 신청서가 아예 표시되지 않는다. */
function initTheme(){
  var saved='dark';
  try{saved=localStorage.getItem('edu_theme')||'dark';}catch(e){}
  document.documentElement.setAttribute('data-theme',saved);
  var btn=document.getElementById('themeToggle');
  if(btn)btn.textContent=saved==='dark'?'🌙':'☀️';
}
function toggleTheme(){
  var cur=document.documentElement.getAttribute('data-theme')||'dark';
  var next=cur==='dark'?'light':'dark';
  document.documentElement.setAttribute('data-theme',next);
  try{localStorage.setItem('edu_theme',next);}catch(e){}
  var btn=document.getElementById('themeToggle');
  if(btn)btn.textContent=next==='dark'?'🌙':'☀️';
}

function renderLangSelect(){
  var sel=document.getElementById('langSelect');
  if(!sel)return;
  sel.innerHTML=LANGS.map(function(l){return '<option value="'+l.id+'"'+(l.id===getLang()?' selected':'')+'>'+l.label+'</option>';}).join('');
}
var _submitted=false,_lastKey='',_clientToken='';
/* 언어를 바꾸면 폼을 통째로 다시 그리므로, 입력값·체크·자가진단 선택을 미리 읽어 두었다가 복원한다 */
function captureFormState(){
  var st={fields:{},eq:[],mod:{},note:{}};
  Array.prototype.slice.call(document.querySelectorAll('#formRoot [id^="f_"]')).forEach(function(el){
    st.fields[el.id]=(el.type==='checkbox')?{c:el.checked}:{v:el.value};
  });
  Array.prototype.slice.call(document.querySelectorAll('.f_equipment_cb:checked')).forEach(function(el){st.eq.push(el.value);});
  Array.prototype.slice.call(document.querySelectorAll('[data-mod]')).forEach(function(el){st.mod[el.getAttribute('data-mod')]=el.value;});
  Array.prototype.slice.call(document.querySelectorAll('[data-mod-note]')).forEach(function(el){st.note[el.getAttribute('data-mod-note')]=el.value;});
  return st;
}
function restoreFormState(st){
  Object.keys(st.fields).forEach(function(id){
    var el=document.getElementById(id);if(!el)return;
    if(st.fields[id].c!==undefined)el.checked=st.fields[id].c;else el.value=st.fields[id].v;
  });
  Array.prototype.slice.call(document.querySelectorAll('.f_equipment_cb')).forEach(function(el){el.checked=st.eq.indexOf(el.value)>=0;});
  Object.keys(st.mod).forEach(function(k){var el=document.querySelector('[data-mod="'+k+'"]');if(el)el.value=st.mod[k];});
  Object.keys(st.note).forEach(function(k){var el=document.querySelector('[data-mod-note="'+k+'"]');if(el)el.value=st.note[k];});
  if(document.getElementById('f_desiredStart'))calcDays();
}
function applyLangChrome(){
  document.documentElement.lang=getLang();
  document.title=t('formTitle');
  document.getElementById('pageTitle').textContent=t('pageTitle');
  var lbl=document.getElementById('langLabelText');
  if(lbl)lbl.textContent=t('langLabel');
}
function changeLang(v){
  var st=_submitted?null:captureFormState();
  setLang(v);
  applyLangChrome();
  if(_submitted){renderDone();return;}
  renderForm();
  restoreFormState(st);
}
function renderDone(){
  document.getElementById('formRoot').innerHTML='<div class="apf-card apf-done">'
    +'<h1>'+t('doneTitle')+'</h1>'
    +'<p>'+t('doneMsg')+'</p>'
    +'</div>';
}

function renderForm(){
  var root=document.getElementById('formRoot');
  if(!APPLY_SHEETS_URL){
    root.innerHTML='<div class="apf-warn">'+t('warnMsg')+'</div>';
    return;
  }
  var orgTypeSuggestions=ORG_TYPES.map(function(o){return '<option value="'+esc(tOrgType(o.id))+'">';}).join('');
  var countryOpts='<option value="">-</option>'+COUNTRIES.map(function(c){return '<option value="'+c+'">'+esc(tCountry(c))+'</option>';}).join('');
  var visitCatOpts='<option value="">-</option>'+VISIT_CATS.map(function(v){return '<option value="'+v.id+'">'+esc(tVisitCat(v.id))+'</option>';}).join('');
  var levelOpts=[0,1,2,3].map(function(n){return '<option value="'+n+'">Level '+n+'</option>';}).join('');

  var assessRows=DEF_MODULES.slice().sort(function(a,b){return a.level-b.level||a.code.localeCompare(b.code);}).map(function(m){
    return '<tr>'
      +'<td>'+m.code+'</td>'
      +'<td>Level '+m.level+'</td>'
      +'<td>'+esc(tModule(m.id,'name'))+'<div class="apf-hint">'+esc(tModule(m.id,'detail'))+'</div></td>'
      +'<td><select data-mod="'+m.id+'" class="apf-has"><option value="N">'+esc(t('hasN'))+'</option><option value="partial">'+esc(t('hasPartial'))+'</option><option value="Y">'+esc(t('hasY'))+'</option></select></td>'
      +'<td><input type="text" data-mod-note="'+m.id+'" placeholder="'+esc(t('assessNotePh'))+'"></td>'
    +'</tr>';
  }).join('');

  root.innerHTML=
    '<div class="apf-card">'
    +'<h1>'+esc(t('formTitle'))+'</h1>'
    +'<p class="apf-sub">'+esc(t('formSub'))+'</p>'

    +'<div class="apf-sec"><h2>'+esc(t('sec1'))+'</h2>'
      +'<div class="apf-row3">'
        +field(t('applyDate'),'applyDate','<input type="date" id="f_applyDate" value="'+todayStr()+'">')
        +field(t('orgType'),'orgType','<input type="text" id="f_orgType" list="orgTypeDatalist" placeholder="'+esc(t('orgTypePh'))+'"><datalist id="orgTypeDatalist">'+orgTypeSuggestions+'</datalist>')
        +field(t('org'),'org','<input type="text" id="f_org" required>')
      +'</div>'
      +'<div class="apf-row3">'
        +field(t('applicantName'),'applicantName','<input type="text" id="f_applicantName" required oninput="syncTraineeFromApplicant()">')
        +field(t('applicantPosition'),'applicantPosition','<input type="text" id="f_applicantPosition" oninput="syncTraineeFromApplicant()">')
        +field(t('applicantContact'),'applicantContact','<input type="text" id="f_applicantContact" required oninput="syncTraineeFromApplicant()">')
      +'</div>'
      +'<div class="apf-row2">'
        +field(t('applicantEmail'),'applicantEmail','<input type="text" id="f_applicantEmail" required placeholder="name@example.com" oninput="syncTraineeFromApplicant()">')
        +field(t('country'),'country','<select id="f_country">'+countryOpts+'</select>')
      +'</div>'
    +'</div>'

    +'<div class="apf-sec"><h2>'+esc(t('sec2'))+'</h2>'
      +'<label class="apf-samechk"><input type="checkbox" id="f_samePerson" onchange="toggleSamePerson(this.checked)"> '+esc(t('samePersonLbl'))+'</label>'
      +'<div class="apf-row3">'
        +field(t('traineeName'),'traineeName','<input type="text" id="f_traineeName" required>')
        +field(t('traineePosition'),'traineePosition','<input type="text" id="f_traineePosition">')
        +field(t('traineeTask'),'traineeTask','<input type="text" id="f_traineeTask">')
      +'</div>'
      +'<div class="apf-row3">'
        +field(t('visitCategory'),'visitCategory','<select id="f_visitCategory">'+visitCatOpts+'</select>')
        +field(t('priorLevel'),'priorLevel','<select id="f_priorLevel"><option value="">'+esc(t('priorLevelNone'))+'</option>'+levelOpts+'</select>')
        +field(t('experienceYears'),'experienceYears','<input type="text" id="f_experienceYears">')
      +'</div>'
      +'<div class="apf-row2">'
        +field(t('traineeContact'),'traineeContact','<input type="text" id="f_traineeContact">')
        +field(t('traineeEmail'),'traineeEmail','<input type="text" id="f_traineeEmail" required placeholder="name@example.com">')
      +'</div>'
    +'</div>'

    +'<div class="apf-sec"><h2>'+esc(t('sec3'))+'</h2>'
      +'<div class="apf-row2">'
        +field(t('equipment'),'equipment','<div class="apf-checkgrp">'+EQUIPMENT_LIST.map(function(e){return '<label class="apf-checkitem"><input type="checkbox" class="f_equipment_cb" value="'+e.id+'"> '+esc(equipmentName(e.id,langKey()))+'</label>';}).join('')+'</div>')
        +field(t('desiredLevel'),'desiredLevel','<select id="f_desiredLevel"><option value="">-</option>'+levelOpts+'</select>')
      +'</div>'
      +'<div class="apf-row3">'
        +field(t('desiredStart'),'desiredStart','<input type="date" id="f_desiredStart" onchange="calcDays()">')
        +field(t('desiredEnd'),'desiredEnd','<input type="date" id="f_desiredEnd" onchange="calcDays()">')
        +field(t('totalDays'),'totalDays','<input type="text" id="f_totalDays" readonly>')
      +'</div>'
    +'</div>'

    +'<div class="apf-sec"><h2>'+esc(t('sec4'))+'</h2>'
      +'<p class="apf-hint">'+esc(t('sec4hint'))+'</p>'
      +'<div class="apf-tblwrap"><table class="apf-tbl"><thead><tr><th>'+esc(t('thCode'))+'</th><th>'+esc(t('thLevel'))+'</th><th>'+esc(t('thModule'))+'</th><th style="width:110px">'+esc(t('thHas'))+'</th><th>'+esc(t('thNote'))+'</th></tr></thead><tbody>'+assessRows+'</tbody></table></div>'
    +'</div>'

    +'<div class="apf-sec"><h2>'+esc(t('sec6'))+'</h2>'
      +field('','specialNotes','<textarea id="f_specialNotes" rows="3" placeholder="'+esc(t('sec6ph'))+'"></textarea>')
    +'</div>'

    +'<div class="apf-sec"><h2>'+esc(t('sec7'))+'</h2>'
      +'<div class="apf-row2">'
        +field(t('branchApprover'),'branchApproverName','<input type="text" id="f_branchApproverName">')
        +field(t('submitDate'),'submitDate','<input type="text" value="'+todayStr()+'" readonly>')
      +'</div>'
      +'<p class="apf-hint">'+esc(t('sec7hint'))+'</p>'
    +'</div>'

    +'<div id="apf_msg" class="apf-msg"></div>'
    +'<button class="apf-submit" id="apf_submit_btn" onclick="submitApplication()">'+esc(t('submitBtn'))+'</button>'
    +'</div>';
}
function field(label,name,inputHtml){
  // 라벨을 입력창과 연결(클릭 시 포커스, 스크린리더 낭독) — 해당 id의 입력창이 있을 때만 for를 단다
  var forAttr=(label&&inputHtml.indexOf('id="f_'+name+'"')>=0)?(' for="f_'+name+'"'):'';
  return '<div class="apf-field">'+(label?('<label'+forAttr+'>'+esc(label)+'</label>'):'')+inputHtml+'</div>';
}
function daysBetweenInclusive(s,e){
  if(!s||!e)return 0;
  var days=Math.round((pd(e)-pd(s))/86400000)+1;
  return days>0?days:0;
}
function calcDays(){
  var out=document.getElementById('f_totalDays');
  var days=daysBetweenInclusive(document.getElementById('f_desiredStart').value,document.getElementById('f_desiredEnd').value);
  // 종료일이 시작일보다 빠른 경우 "0일"로 보이지 않도록 비운다(제출 시 날짜 순서 오류로 안내)
  out.value=days>0?(days+t('daysUnit')):'';
}
/* 소속 유형은 자유 입력(datalist)이라 현지어 라벨이 그대로 들어올 수 있다 — 관리자 앱은 id 또는 한국어
   라벨만 알아보므로, 어느 언어 라벨이든 일치하면 한국어 라벨로 통일한다(일치 항목이 없으면 원문 유지) */
function normalizeOrgType(raw){
  var s=String(raw||'').trim().toLowerCase();
  if(!s)return '';
  for(var i=0;i<ORG_TYPES.length;i++){
    var o=ORG_TYPES[i];
    if(s===o.id.toLowerCase()||s===String(o.label).toLowerCase())return o.label;
    for(var k=0;k<LANGS.length;k++){
      var lbl=I18N[LANGS[k].id]&&I18N[LANGS[k].id].orgTypeLbl&&I18N[LANGS[k].id].orgTypeLbl[o.id];
      if(lbl&&s===String(lbl).toLowerCase())return o.label;
    }
  }
  return String(raw).trim();
}
function val(id){var el=document.getElementById(id);return el?el.value.trim():'';}
function checked(id){var el=document.getElementById(id);return el?el.checked:false;}
/* '신청자와 대상자가 동일합니다' 체크 시 신청자 정보를 대상자 필드로 복사하고,
   체크된 상태에서 신청자 정보를 계속 고치면 대상자 필드도 함께 갱신된다 */
function toggleSamePerson(isChecked){
  if(isChecked)syncTraineeFromApplicant();
}
function syncTraineeFromApplicant(){
  if(!checked('f_samePerson'))return;
  document.getElementById('f_traineeName').value=val('f_applicantName');
  document.getElementById('f_traineePosition').value=val('f_applicantPosition');
  document.getElementById('f_traineeContact').value=val('f_applicantContact');
  document.getElementById('f_traineeEmail').value=val('f_applicantEmail');
}

function submitApplication(){
  var required=[['f_orgType',t('orgType')],['f_org',t('reqOrg')],['f_applicantName',t('reqApplicant')],['f_applicantContact',t('reqContact')],['f_applicantEmail',t('applicantEmail')],['f_country',t('country')],['f_traineeName',t('reqTrainee')],['f_traineeEmail',t('reqEmail')],['f_visitCategory',t('visitCategory')],['f_desiredLevel',t('desiredLevel')],['f_desiredStart',t('reqStart')],['f_desiredEnd',t('reqEnd')]];
  for(var i=0;i<required.length;i++){
    if(!val(required[i][0])){
      alert(required[i][1]+t('reqSuffix'));
      document.getElementById(required[i][0]).focus();
      return;
    }
  }
  if(val('f_desiredEnd')<val('f_desiredStart')){
    alert(t('dateOrderErr'));
    return;
  }
  // 연락처(전화번호)가 실수로 이 필드에 섞여 들어와도 걸러지도록, 이메일에 흔히 쓰이는 문자만 허용한다
  var EMAIL_RE=/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  if(!EMAIL_RE.test(val('f_traineeEmail'))){
    alert(t('reqEmail')+t('emailInvalid'));
    document.getElementById('f_traineeEmail').focus();
    return;
  }
  if(!EMAIL_RE.test(val('f_applicantEmail'))){
    alert(t('applicantEmail')+t('emailInvalid'));
    document.getElementById('f_applicantEmail').focus();
    return;
  }
  var equipmentIds=Array.prototype.slice.call(document.querySelectorAll('.f_equipment_cb:checked')).map(function(el){return el.value;});
  if(!equipmentIds.length){
    alert(t('reqEquipment'));
    return;
  }

  // 자가진단 항목명은 한국어 원문으로 저장(관리자 앱은 한국어 전용) — 화면 표시만 언어별로 다르게 보여준다
  var selfAssessment=DEF_MODULES.map(function(m){
    var hasEl=document.querySelector('[data-mod="'+m.id+'"]');
    var noteEl=document.querySelector('[data-mod-note="'+m.id+'"]');
    return {moduleId:m.id,code:m.code,name:m.name,level:m.level,has:hasEl?hasEl.value:'N',note:noteEl?noteEl.value.trim():''};
  });

  // 총 교육일수는 화면 언어와 무관하게 날짜에서 다시 계산해 한국어 형식으로 저장한다(관리자 앱은 한국어 전용)
  var totalDaysN=daysBetweenInclusive(val('f_desiredStart'),val('f_desiredEnd'));
  var app={
    applyDate:val('f_applyDate'),
    orgType:normalizeOrgType(val('f_orgType')),org:val('f_org'),country:val('f_country'),
    applicantName:val('f_applicantName'),applicantPosition:val('f_applicantPosition'),applicantContact:val('f_applicantContact'),applicantEmail:val('f_applicantEmail'),
    traineeName:val('f_traineeName'),traineePosition:val('f_traineePosition'),traineeTask:val('f_traineeTask'),
    traineeContact:val('f_traineeContact'),traineeEmail:val('f_traineeEmail'),
    visitCategory:val('f_visitCategory'),priorLevel:val('f_priorLevel'),experienceYears:val('f_experienceYears'),
    equipment:equipmentIds,
    desiredLevel:Number(val('f_desiredLevel')),desiredStart:val('f_desiredStart'),desiredEnd:val('f_desiredEnd'),
    totalDays:totalDaysN+'일',
    selfAssessment:selfAssessment,
    specialNotes:val('f_specialNotes'),
    branchApproverName:val('f_branchApproverName'),
    submitLang:getLang()
  };
  // 응답이 유실돼도 서버가 같은 토큰의 중복 저장을 막아주므로 재제출이 안전해진다. 토큰은 제출 내용이
  // 같은 동안 재사용하고(네트워크 오류 후 사용자가 다시 눌러도 중복 접수 방지), 내용이 바뀌면 새로 만든다.
  var key=JSON.stringify(app);
  if(key!==_lastKey||!_clientToken){
    _lastKey=key;
    _clientToken='ct_'+Date.now()+'_'+Math.random().toString(36).slice(2,10);
  }
  app.clientToken=_clientToken;

  var btn=document.getElementById('apf_submit_btn');
  btn.disabled=true;btn.textContent=t('submitting');
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
      _submitted=true;
      renderDone();
    })
    .catch(function(err){
      // Apps Script는 배포 직후 첫 요청에서 간헐적으로 정상 응답 대신 리다이렉트 HTML을
      // 반환하는 경우가 있다 (저장 자체는 이미 서버에서 처리됨). clientToken 덕분에
      // 재시도해도 신청이 중복 저장되지 않으므로, 잠시 대기 후 자동으로 다시 시도한다.
      // 네트워크 오류(fetch 실패)도 같은 이유로 자동 재시도한다 — 응답만 유실됐을 수 있다.
      var isNet=(err&&err.name==='TypeError');
      if(retriesLeft>0&&(err.message==='invalid-response'||isNet)){
        setTimeout(function(){submitWithRetry(app,retriesLeft-1);},1500);
        return;
      }
      btn.disabled=false;btn.textContent=t('submitBtn');
      document.getElementById('apf_msg').textContent=t('errPrefix')+err.message+t('errSuffix');
    });
}

document.addEventListener('DOMContentLoaded',function(){
  initTheme();
  renderLangSelect();
  applyLangChrome();
  renderForm();
});
