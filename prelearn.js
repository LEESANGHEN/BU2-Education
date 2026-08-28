/* ═══════════════════════════════════════════
   Level 0~1 온라인 사전 선행학습 (다중 설비군 지원)
═══════════════════════════════════════════ */
// ↓↓↓ Code-Prelearn.gs를 별도 Google Sheet에 배포한 뒤 나오는 /exec URL로 교체하세요.
var PRELEARN_SHEETS_URL='https://script.google.com/macros/s/AKfycbytVgXC5ZG8NvkYhHYdvPEk4tQKmSCy6pND7l11as057tMIS5LC0WXuNFJNI4o-ij2l/exec';
var PL_ID_KEY='prelearn_id';
var PASS_RATIO=0.8; // 섹션별 퀴즈 통과 기준 (80% 이상 정답)

var COURSE_DATA={
  smtv:{chapters:(typeof PRELEARN_CHAPTERS_SMTV!=='undefined')?PRELEARN_CHAPTERS_SMTV:null,quiz:(typeof PRELEARN_QUIZ_SMTV!=='undefined')?PRELEARN_QUIZ_SMTV:null},
  nbga:{chapters:(typeof PRELEARN_CHAPTERS_NBGA!=='undefined')?PRELEARN_CHAPTERS_NBGA:null,quiz:(typeof PRELEARN_QUIZ_NBGA!=='undefined')?PRELEARN_QUIZ_NBGA:null}
};

var PL={record:null,equip:null,ci:0,si:0,li:0,mode:'pick',quizPick:{}};

function esc(s){return String(s==null?'':s).replace(/[&<>"']/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c];});}
function uid(p){return p+'_'+Date.now().toString(36)+Math.random().toString(36).slice(2,7);}
function tx(obj){ // {ko,en,zhCN,zhTW,ja} 중 현재 언어 텍스트, 없으면 en
  if(!obj)return '';
  var k=langKey();
  return obj[k]||obj.en||'';
}
function fmtQuizMsg(tpl,pct){return tpl.replace('{0}',pct);}

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
function changeLang(v){setLang(v);renderCurrentMode();}
function renderCurrentMode(){
  document.getElementById('pageTitle').textContent=pt('pageTitle');
  if(PL.mode==='pick')renderPick();
  else if(PL.mode==='gate')renderGate();
  else renderViewer();
}

/* ── 설비 선택 ── */
function renderPick(){
  var root=document.getElementById('plRoot');
  root.innerHTML='<div class="apf-card pl-gate">'
    +'<h1>🎓 '+esc(pt('pickTitle'))+'</h1>'
    +'<p class="apf-sub">'+esc(pt('pickSub'))+'</p>'
    +'<div class="pl-equip-grid">'
    +EQUIPMENT_LIST.map(function(e){
      var has=COURSE_DATA[e.id]&&COURSE_DATA[e.id].chapters;
      return '<div class="pl-equip-card'+(has?'':' disabled')+'" '+(has?('onclick="pickEquipment(\''+e.id+'\')"'):'')+'>'
        +'<div class="pl-equip-name">'+esc(equipmentName(e.id,langKey()))+'</div>'
        +(has?'':'<div class="pl-equip-soon">Coming soon</div>')
      +'</div>';
    }).join('')
    +'</div>'
  +'</div>';
}
function pickEquipment(id){PL.equip=id;PL.mode='gate';renderGate();}

/* ── 시작 화면(Gate) ── */
function renderGate(){
  var root=document.getElementById('plRoot');
  if(!PRELEARN_SHEETS_URL){
    root.innerHTML='<div class="apf-warn">'+esc(pt('warnMsg'))+' (prelearn.js의 PRELEARN_SHEETS_URL 미설정)</div>';
    return;
  }
  var total=totalSections();
  root.innerHTML='<div class="apf-card pl-gate">'
    +'<div style="margin-bottom:10px"><a href="javascript:void(0)" onclick="PL.mode=\'pick\';renderPick()" style="font-size:12px;color:var(--tx-second)">← '+esc(pt('changeEquip'))+'</a></div>'
    +'<h1>🎓 '+esc(equipmentName(PL.equip,langKey()))+' '+esc(pt('gateTitle'))+'</h1>'
    +'<p style="font-size:12px;color:var(--tx-second);line-height:1.7;margin:14px 0">'+esc(pt('gateIntro1'))+' '+total+' '+esc(pt('gateIntro2'))+' '+esc(pt('gateIntro3'))+'</p>'
    +'<div class="apf-row2">'
      +'<div class="apf-field"><label>'+esc(pt('name'))+'</label><input type="text" id="pl_name"></div>'
      +'<div class="apf-field"><label>'+esc(pt('orgType'))+'</label><select id="pl_orgtype">'+ORG_TYPES.map(function(o){return '<option value="'+o.id+'">'+esc(tOrgType(o.id))+'</option>';}).join('')+'</select></div>'
    +'</div>'
    +'<div class="apf-row2">'
      +'<div class="apf-field"><label>'+esc(pt('org'))+'</label><input type="text" id="pl_org"></div>'
      +'<div class="apf-field"><label>'+esc(pt('contact'))+'</label><input type="text" id="pl_contact"></div>'
    +'</div>'
    +'<button class="apf-submit" onclick="startLearning()">'+esc(pt('startBtn'))+'</button>'
  +'</div>';
}
function startLearning(){
  var name=document.getElementById('pl_name').value.trim();
  var org=document.getElementById('pl_org').value.trim();
  if(!name||!org){alert(pt('needNameOrg'));return;}
  var orgType=document.getElementById('pl_orgtype').value;
  var contact=document.getElementById('pl_contact').value.trim();

  var savedId=localStorage.getItem(PL_ID_KEY);
  loadAllRecords(function(records){
    var found=null;
    if(savedId)found=records.find(function(r){return r.id===savedId;});
    if(!found){
      found=records.find(function(r){return r.name&&r.org&&r.name.toLowerCase()===name.toLowerCase()&&r.org.toLowerCase()===org.toLowerCase();});
    }
    if(found){
      PL.record=found;
      PL.record.name=name;PL.record.org=org;PL.record.orgType=orgType;PL.record.contact=contact;
      localStorage.setItem(PL_ID_KEY,found.id);
    }else{
      PL.record={id:uid('pl'),name:name,org:org,orgType:orgType,contact:contact,startedAt:new Date().toISOString(),courses:{}};
    }
    if(!PL.record.courses)PL.record.courses={};
    if(!PL.record.courses[PL.equip])PL.record.courses[PL.equip]={progress:{},startedAt:new Date().toISOString()};
    resumePosition();
    if(PL.mode!=='done'){PL.mode='slide';}
    renderViewer();
    saveProgress();
  });
}

/* ── 진행 상태 저장/불러오기 ── */
function courseProgress(){return PL.record.courses[PL.equip].progress;}
function saveProgress(cb){
  if(!PRELEARN_SHEETS_URL||!PL.record){if(cb)cb();return;}
  PL.record.lastActivityAt=new Date().toISOString();
  fetch(PRELEARN_SHEETS_URL,{method:'POST',headers:{'Content-Type':'text/plain'},
    body:JSON.stringify({action:'upsertProgress',record:PL.record})})
    .then(function(r){return r.text();})
    .then(function(text){
      try{var data=JSON.parse(text);if(data.id){PL.record.id=data.id;localStorage.setItem(PL_ID_KEY,data.id);}}catch(e){}
      if(cb)cb();
    })
    .catch(function(){if(cb)cb();});
}
function loadAllRecords(cb){
  if(!PRELEARN_SHEETS_URL){cb([]);return;}
  fetch(PRELEARN_SHEETS_URL+'?action=load')
    .then(function(r){return r.json();})
    .then(function(data){cb(data.records||[]);})
    .catch(function(){cb([]);});
}

/* ── 섹션/챕터 헬퍼 ── */
function chapters(){return COURSE_DATA[PL.equip].chapters;}
function allSections(){
  var out=[];
  chapters().forEach(function(ch,ci){ch.sections.forEach(function(sec,si){out.push({ci:ci,si:si,code:sec.code});});});
  return out;
}
function sectionAt(ci,si){return chapters()[ci].sections[si];}
function totalSections(){return chapters()?allSections().length:0;}
function passedCount(){
  var prog=courseProgress();
  var n=0;
  allSections().forEach(function(s){if(prog[s.code]&&prog[s.code].passed)n++;});
  return n;
}
function resumePosition(){
  var prog=courseProgress();
  var secs=allSections();
  for(var i=0;i<secs.length;i++){
    var p=prog[secs[i].code];
    if(!p||!p.passed){PL.ci=secs[i].ci;PL.si=secs[i].si;PL.li=0;return;}
  }
  PL.mode='done';
}

/* ── 뷰어 ── */
function curChapter(){return chapters()[PL.ci];}
function curSection(){return curChapter().sections[PL.si];}
function curSlide(){return curSection().slides[PL.li];}

function renderViewer(){
  var root=document.getElementById('plRoot');
  if(PL.mode==='done'){renderDone();return;}
  if(PL.mode==='quiz'){renderQuiz();return;}

  var ch=curChapter(),sec=curSection(),slide=curSlide();
  var pct=Math.round(passedCount()/totalSections()*100);

  root.innerHTML='<div class="pl-layout">'
    +'<div class="pl-side">'+renderToc()+'</div>'
    +'<div class="pl-main">'
      +'<div class="pl-progwrap"><div class="lv-progbar" style="max-width:none"><div class="lv-progfill" style="width:'+pct+'%"></div></div><span style="font-size:11px;color:var(--tx-second)">'+esc(pt('progressOf'))+' '+pct+'% ('+passedCount()+'/'+totalSections()+' '+esc(pt('sectionsUnit'))+')</span></div>'
      +'<div class="pl-crumb">'+esc(tx(ch.title))+' &raquo; '+esc(sec.code)+' '+esc(tx(sec.title))+'</div>'
      +'<div class="pl-slidewrap"><img src="'+slide.img+'" class="pl-slideimg" alt="slide"></div>'
      +(tx(slide.tx)?(
        '<div class="pl-explain"><div class="pl-en">'+esc(tx(slide.tx)).replace(/\n/g,'<br>')+'</div></div>'
      ):'')
      +'<div class="pl-nav">'
        +'<button class="btn" onclick="plPrev()" '+((PL.ci===0&&PL.si===0&&PL.li===0)?'disabled':'')+'>'+esc(pt('prevBtn'))+'</button>'
        +'<span style="font-size:11px;color:var(--tx-faint)">'+(PL.li+1)+' / '+sec.slides.length+'</span>'
        +'<button class="btn pri" onclick="plNext()">'+(PL.li===sec.slides.length-1?esc(pt('quizBtn')):esc(pt('nextBtn')))+'</button>'
      +'</div>'
    +'</div>'
  +'</div>';
}
function renderToc(){
  var prog=courseProgress();
  return chapters().map(function(ch,ci){
    return '<div class="pl-toc-ch">'+esc(tx(ch.title))+'</div>'
      +ch.sections.map(function(sec,si){
        var p=prog[sec.code];
        var cls='pl-toc-sec'+((ci===PL.ci&&si===PL.si)?' on':'')+(p&&p.passed?' done':'');
        return '<div class="'+cls+'" onclick="plJump('+ci+','+si+')"><span class="pl-toc-code">'+sec.code+'</span> '+esc(tx(sec.title))+(p&&p.passed?' ✓':'')+'</div>';
      }).join('');
  }).join('');
}
function plJump(ci,si){PL.ci=ci;PL.si=si;PL.li=0;PL.mode='slide';renderViewer();}
function plPrev(){
  if(PL.li>0){PL.li--;renderViewer();return;}
  if(PL.si>0){PL.si--;PL.li=curChapter().sections[PL.si].slides.length-1;renderViewer();return;}
  if(PL.ci>0){PL.ci--;PL.si=curChapter().sections.length-1;PL.li=curChapter().sections[PL.si].slides.length-1;renderViewer();return;}
}
function plNext(){
  var sec=curSection();
  if(PL.li<sec.slides.length-1){PL.li++;renderViewer();return;}
  var p=courseProgress()[sec.code];
  if(p&&p.passed){advanceSection();return;}
  PL.mode='quiz';PL.quizPick={};
  renderViewer();
}
function advanceSection(){
  var ch=curChapter();
  if(PL.si<ch.sections.length-1){PL.si++;PL.li=0;PL.mode='slide';renderViewer();return;}
  if(PL.ci<chapters().length-1){PL.ci++;PL.si=0;PL.li=0;PL.mode='slide';renderViewer();return;}
  PL.mode='done';
  PL.record.courses[PL.equip].completedAt=new Date().toISOString();
  saveProgress();
  renderViewer();
}

/* ── 섹션 퀴즈 ── */
function renderQuiz(){
  var root=document.getElementById('plRoot');
  var sec=curSection();
  var qs=COURSE_DATA[PL.equip].quiz[sec.code]||[];
  var rows=qs.map(function(q,qi){
    return '<div class="pl-qrow">'
      +'<div class="pl-qtext">'+(qi+1)+'. '+esc(tx(q.q))+'</div>'
      +q.choices.map(function(c,idx){
        return '<label class="pl-choice"><input type="radio" name="q'+qi+'" value="'+idx+'" onchange="plPick('+qi+','+idx+')"> '+esc(tx(c))+'</label>';
      }).join('')
    +'</div>';
  }).join('');

  root.innerHTML='<div class="pl-layout">'
    +'<div class="pl-side">'+renderToc()+'</div>'
    +'<div class="pl-main">'
      +'<div class="pl-crumb">'+esc(sec.code)+' '+esc(tx(sec.title))+' — '+esc(pt('quizTitle'))+'</div>'
      +'<div class="apf-card">'
      +rows
      +'<div id="pl_quiz_result"></div>'
      +'<div class="mfoot"><button class="btn" onclick="PL.mode=\'slide\';renderViewer()">'+esc(pt('backToSlide'))+'</button><button class="btn pri" onclick="submitQuiz()">'+esc(pt('submitBtn'))+'</button></div>'
      +'</div>'
    +'</div>'
  +'</div>';
}
function plPick(qi,idx){PL.quizPick[qi]=idx;}
function submitQuiz(){
  var sec=curSection();
  var qs=COURSE_DATA[PL.equip].quiz[sec.code]||[];
  if(Object.keys(PL.quizPick).length<qs.length){alert(pt('quizAnswerAll'));return;}
  var correct=0;
  qs.forEach(function(q,qi){if(PL.quizPick[qi]===q.answer)correct++;});
  var passed=(correct/qs.length)>=PASS_RATIO;
  var prog=courseProgress();
  prog[sec.code]={viewed:true,quizScore:correct,quizTotal:qs.length,passed:passed,attempts:((prog[sec.code]&&prog[sec.code].attempts)||0)+1};
  saveProgress();
  var msg=passed
    ?('<div style="color:#4ade9a;font-weight:600;margin-top:10px">✅ '+correct+'/'+qs.length+' '+esc(pt('quizPass'))+'</div>')
    :('<div style="color:#e07070;font-weight:600;margin-top:10px">❌ '+correct+'/'+qs.length+' '+esc(fmtQuizMsg(pt('quizFail'),Math.round(PASS_RATIO*100)))+'</div>');
  document.getElementById('pl_quiz_result').innerHTML=msg
    +'<div class="mfoot"><button class="btn" onclick="PL.mode=\'slide\';PL.li=0;renderViewer()">'+esc(pt('reviewBtn'))+'</button>'
    +(passed?('<button class="btn pri" onclick="advanceSection()">'+esc(pt('nextSectionBtn'))+'</button>'):('<button class="btn pri" onclick="PL.quizPick={};renderQuiz()">'+esc(pt('retryBtn'))+'</button>'))
    +'</div>';
}

/* ── 완료 화면 ── */
function renderDone(){
  var root=document.getElementById('plRoot');
  var rows=allSections().map(function(s){
    var sec=sectionAt(s.ci,s.si);
    var p=courseProgress()[sec.code];
    return '<tr><td>'+sec.code+'</td><td>'+esc(tx(sec.title))+'</td><td>'+(p?(p.quizScore+'/'+p.quizTotal):'-')+'</td><td>'+(p&&p.passed?('<span style="color:#4ade9a">'+esc(pt('passLbl'))+'</span>'):('<span style="color:#e07070">'+esc(pt('failLbl'))+'</span>'))+'</td></tr>';
  }).join('');
  root.innerHTML='<div class="apf-card apf-done">'
    +'<h1>'+esc(pt('doneTitle'))+'</h1>'
    +'<p>'+esc(PL.record.name)+' ('+esc(PL.record.org)+') — '+esc(equipmentName(PL.equip,langKey()))+'<br>'+esc(pt('doneMsg1'))+' '+esc(pt('doneMsg2'))+'</p>'
    +'<table class="dtbl sm" style="margin-top:20px;text-align:left"><thead><tr><th>'+esc(pt('colSection'))+'</th><th>'+esc(pt('colTitle'))+'</th><th>'+esc(pt('colScore'))+'</th><th>'+esc(pt('colResult'))+'</th></tr></thead><tbody>'+rows+'</tbody></table>'
    +'<div style="margin-top:16px"><a href="javascript:void(0)" onclick="PL.mode=\'pick\';renderPick()" style="font-size:12px;color:var(--tx-second)">← '+esc(pt('changeEquip'))+'</a></div>'
  +'</div>';
}

document.addEventListener('DOMContentLoaded',function(){
  initTheme();
  renderLangSelect();
  document.getElementById('pageTitle').textContent=pt('pageTitle');
  var params=new URLSearchParams(location.search);
  var eq=params.get('eq');
  if(eq&&equipmentById(eq)&&COURSE_DATA[eq]&&COURSE_DATA[eq].chapters){
    PL.equip=eq;PL.mode='gate';renderGate();
  }else{
    renderPick();
  }
});
