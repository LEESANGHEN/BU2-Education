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

function renderLangSelect(){
  var sel=document.getElementById('langSelect');
  if(!sel)return;
  sel.innerHTML=LANGS.map(function(l){return '<option value="'+l.id+'"'+(l.id===getLang()?' selected':'')+'>'+l.label+'</option>';}).join('');
}
function changeLang(v){
  setLang(v);
  document.getElementById('pageTitle').textContent=t('pageTitle');
  renderForm();
}

function renderForm(){
  var root=document.getElementById('formRoot');
  if(!APPLY_SHEETS_URL){
    root.innerHTML='<div class="apf-warn">'+t('warnMsg')+'</div>';
    return;
  }
  var orgOpts=ORG_TYPES.map(function(o){return '<option value="'+o.id+'">'+esc(tOrgType(o.id))+'</option>';}).join('');
  var countryOpts=COUNTRIES.map(function(c){return '<option value="'+c+'">'+esc(tCountry(c))+'</option>';}).join('');
  var visitCatOpts=VISIT_CATS.map(function(v){return '<option value="'+v.id+'">'+esc(tVisitCat(v.id))+'</option>';}).join('');
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
        +field(t('orgType'),'orgType','<select id="f_orgType">'+orgOpts+'</select>')
        +field(t('org'),'org','<input type="text" id="f_org" required>')
      +'</div>'
      +'<div class="apf-row3">'
        +field(t('applicantName'),'applicantName','<input type="text" id="f_applicantName" required>')
        +field(t('applicantPosition'),'applicantPosition','<input type="text" id="f_applicantPosition">')
        +field(t('applicantContact'),'applicantContact','<input type="text" id="f_applicantContact" required>')
      +'</div>'
      +field(t('country'),'country','<select id="f_country">'+countryOpts+'</select>')
    +'</div>'

    +'<div class="apf-sec"><h2>'+esc(t('sec2'))+'</h2>'
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
      +field(t('traineeEmail'),'traineeEmail','<input type="text" id="f_traineeEmail" required placeholder="name@example.com">')
    +'</div>'

    +'<div class="apf-sec"><h2>'+esc(t('sec3'))+'</h2>'
      +'<div class="apf-row3">'
        +field(t('equipment'),'equipment','<select id="f_equipment">'+EQUIPMENT_LIST.map(function(e){return '<option value="'+e.id+'">'+esc(equipmentName(e.id,langKey()))+'</option>';}).join('')+'</select>')
        +field(t('desiredLevel'),'desiredLevel','<select id="f_desiredLevel">'+levelOpts+'</select>')
        +field(t('desiredStart'),'desiredStart','<input type="date" id="f_desiredStart" onchange="calcDays()">')
      +'</div>'
      +'<div class="apf-row2">'
        +field(t('desiredEnd'),'desiredEnd','<input type="date" id="f_desiredEnd" onchange="calcDays()">')
        +field(t('totalDays'),'totalDays','<input type="text" id="f_totalDays" readonly>')
      +'</div>'
      +field(t('altNote'),'altNote','<input type="text" id="f_altNote">')
    +'</div>'

    +'<div class="apf-sec"><h2>'+esc(t('sec4'))+'</h2>'
      +'<p class="apf-hint">'+esc(t('sec4hint'))+'</p>'
      +'<div class="apf-tblwrap"><table class="apf-tbl"><thead><tr><th>'+esc(t('thCode'))+'</th><th>'+esc(t('thLevel'))+'</th><th>'+esc(t('thModule'))+'</th><th style="width:110px">'+esc(t('thHas'))+'</th><th>'+esc(t('thNote'))+'</th></tr></thead><tbody>'+assessRows+'</tbody></table></div>'
    +'</div>'

    +'<div class="apf-sec"><h2>'+esc(t('sec5'))+'</h2>'
      +'<div class="apf-row2">'
        +'<div class="apf-field"><label><input type="checkbox" id="f_pre0Done"> '+esc(t('pre0'))+'</label><input type="text" id="f_pre0Method" placeholder="'+esc(t('methodPh'))+'" style="margin-top:6px"></div>'
        +'<div class="apf-field"><label><input type="checkbox" id="f_pre1Done"> '+esc(t('pre1'))+'</label><input type="text" id="f_pre1Method" placeholder="'+esc(t('methodPh'))+'" style="margin-top:6px"></div>'
      +'</div>'
      +'<p class="apf-hint">'+esc(t('sec5hint'))+'</p>'
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
  return '<div class="apf-field">'+(label?('<label>'+esc(label)+'</label>'):'')+inputHtml+'</div>';
}
function calcDays(){
  var s=document.getElementById('f_desiredStart').value,e=document.getElementById('f_desiredEnd').value;
  var out=document.getElementById('f_totalDays');
  if(!s||!e){out.value='';return;}
  var days=Math.round((pd(e)-pd(s))/86400000)+1;
  out.value=(days>0?days:0)+t('daysUnit');
}
function val(id){var el=document.getElementById(id);return el?el.value.trim():'';}
function checked(id){var el=document.getElementById(id);return el?el.checked:false;}

function submitApplication(){
  var required=[['f_org',t('reqOrg')],['f_applicantName',t('reqApplicant')],['f_applicantContact',t('reqContact')],['f_traineeName',t('reqTrainee')],['f_traineeEmail',t('reqEmail')],['f_desiredStart',t('reqStart')],['f_desiredEnd',t('reqEnd')]];
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
  if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val('f_traineeEmail'))){
    alert(t('reqEmail')+t('emailInvalid'));
    document.getElementById('f_traineeEmail').focus();
    return;
  }

  // 자가진단 항목명은 한국어 원문으로 저장(관리자 앱은 한국어 전용) — 화면 표시만 언어별로 다르게 보여준다
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
    traineeEmail:val('f_traineeEmail'),
    visitCategory:val('f_visitCategory'),priorLevel:val('f_priorLevel'),experienceYears:val('f_experienceYears'),
    equipment:val('f_equipment'),
    desiredLevel:Number(val('f_desiredLevel')),desiredStart:val('f_desiredStart'),desiredEnd:val('f_desiredEnd'),
    totalDays:val('f_totalDays'),altNote:val('f_altNote'),
    selfAssessment:selfAssessment,
    pre0Done:checked('f_pre0Done'),pre0Method:val('f_pre0Method'),
    pre1Done:checked('f_pre1Done'),pre1Method:val('f_pre1Method'),
    specialNotes:val('f_specialNotes'),
    branchApproverName:val('f_branchApproverName'),
    submitLang:getLang(),
    // 응답이 유실돼도 서버가 같은 토큰의 중복 저장을 막아주므로 재시도가 안전해진다
    clientToken:'ct_'+Date.now()+'_'+Math.random().toString(36).slice(2,10)
  };

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
      document.getElementById('formRoot').innerHTML='<div class="apf-card apf-done">'
        +'<h1>'+t('doneTitle')+'</h1>'
        +'<p>'+t('doneMsg')+'</p>'
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
      btn.disabled=false;btn.textContent=t('submitBtn');
      document.getElementById('apf_msg').textContent=t('errPrefix')+err.message+t('errSuffix');
    });
}

document.addEventListener('DOMContentLoaded',function(){
  initTheme();
  renderLangSelect();
  document.getElementById('pageTitle').textContent=t('pageTitle');
  renderForm();
});
