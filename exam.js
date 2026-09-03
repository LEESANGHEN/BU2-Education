/* ═══════════════════════════════════════════
   📝 Level 0 필기평가 (온사이트, 별도 공개 페이지)
   — 사전 선행학습(prelearn.html)과 같은 Google Sheet 백엔드를 사용하지만,
     섹션당 1~2문항이 아니라 "퀴즈 관리"에 등록된 그 설비의 전체 문항을 한 번에 응시한다.
═══════════════════════════════════════════ */
var PRELEARN_SHEETS_URL='https://script.google.com/macros/s/AKfycbytVgXC5ZG8NvkYhHYdvPEk4tQKmSCy6pND7l11as057tMIS5LC0WXuNFJNI4o-ij2l/exec';
var PASS_RATIO=0.8;

var EXAM_COURSE_DATA={
  smtv:{chapters:(typeof PRELEARN_CHAPTERS_SMTV!=='undefined')?PRELEARN_CHAPTERS_SMTV:null,quiz:(typeof PRELEARN_QUIZ_SMTV!=='undefined')?PRELEARN_QUIZ_SMTV:null},
  nbga:{chapters:(typeof PRELEARN_CHAPTERS_NBGA!=='undefined')?PRELEARN_CHAPTERS_NBGA:null,quiz:(typeof PRELEARN_QUIZ_NBGA!=='undefined')?PRELEARN_QUIZ_NBGA:null}
};

var EX={equip:null,quizOverrides:{},pool:[],picks:{},mode:'pick'};

function esc(s){return String(s==null?'':s).replace(/[&<>"']/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c];});}
function tx(obj){if(!obj)return '';var k=langKey();return obj[k]||obj.en||'';}

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
  document.getElementById('pageTitle').textContent=pt('examPageTitle');
  var lbl=document.getElementById('langLabelText');
  if(lbl)lbl.textContent=pt('langLabel');
  if(EX.mode==='pick')renderPick();
  else if(EX.mode==='gate')renderGate();
  else if(EX.mode==='exam')renderExam();
  else renderResult(EX.lastResult);
}

/* ── 설비 선택 (링크에 ?eq= 가 없을 때만 표시) ── */
function renderPick(){
  var root=document.getElementById('exRoot');
  var list=EQUIPMENT_LIST.filter(function(e){return EXAM_COURSE_DATA[e.id]&&EXAM_COURSE_DATA[e.id].chapters;});
  root.innerHTML='<div class="apf-card pl-gate">'
    +'<h1>📝 '+esc(pt('examPickTitle'))+'</h1>'
    +'<div class="pl-equip-grid">'
    +list.map(function(e){
      return '<div class="pl-equip-card" onclick="pickExamEquip(\''+e.id+'\')"><div class="pl-equip-name">'+esc(e.name)+'</div></div>';
    }).join('')
    +'</div>'
  +'</div>';
}
function pickExamEquip(id){EX.equip=id;EX.mode='gate';renderGate();}

/* ── 응시자 정보 입력 ── */
function renderGate(){
  var root=document.getElementById('exRoot');
  root.innerHTML='<div class="apf-card pl-gate">'
    +'<h1>📝 '+esc(equipmentName(EX.equip))+' '+esc(pt('examGateTitle'))+'</h1>'
    +'<p style="font-size:12px;color:var(--tx-second);line-height:1.7;margin:14px 0">'+esc(pt('examGateIntro'))+'</p>'
    +'<div class="apf-row2">'
      +'<div class="apf-field"><label>'+esc(pt('name'))+'</label><input type="text" id="ex_name"></div>'
      +'<div class="apf-field"><label>'+esc(pt('orgType'))+'</label><input type="text" id="ex_orgtype" list="exOrgTypeDatalist"><datalist id="exOrgTypeDatalist">'+ORG_TYPES.map(function(o){return '<option value="'+esc(tOrgType(o.id))+'">';}).join('')+'</datalist></div>'
    +'</div>'
    +'<div class="apf-row2">'
      +'<div class="apf-field"><label>'+esc(pt('org'))+'</label><input type="text" id="ex_org"></div>'
      +'<div class="apf-field"><label>'+esc(pt('contact'))+'</label><input type="text" id="ex_contact"></div>'
    +'</div>'
    +'<button class="apf-submit" onclick="startExam()">'+esc(pt('examStartBtn'))+'</button>'
  +'</div>';
}
function startExam(){
  var name=document.getElementById('ex_name').value.trim();
  var org=document.getElementById('ex_org').value.trim();
  if(!name||!org){alert(pt('needNameOrg'));return;}
  EX.name=name;EX.org=org;
  EX.orgType=document.getElementById('ex_orgtype').value.trim();
  EX.contact=document.getElementById('ex_contact').value.trim();
  EX.pool=examFullPool(EX.equip);
  EX.picks={};
  EX.mode='exam';
  renderExam();
}

/* ── 설비의 전체 등록 문항(섹션별 1~2개 랜덤이 아니라 전부)을 모은다 ── */
function examSectionsFor(equip){
  var chapters=EXAM_COURSE_DATA[equip]&&EXAM_COURSE_DATA[equip].chapters;
  if(!chapters)return [];
  var out=[];
  chapters.forEach(function(ch){ch.sections.forEach(function(sec){out.push({code:sec.code,title:sec.title});});});
  return out;
}
function examFullPool(equip){
  var pool=[];
  examSectionsFor(equip).forEach(function(s){
    var ov=EX.quizOverrides[equip]&&EX.quizOverrides[equip][s.code];
    var base=(EXAM_COURSE_DATA[equip]&&EXAM_COURSE_DATA[equip].quiz&&EXAM_COURSE_DATA[equip].quiz[s.code])||[];
    var qs=(ov&&ov.length)?ov:base;
    qs.forEach(function(q){pool.push({sectionCode:s.code,sectionTitle:s.title,q:q});});
  });
  return pool;
}

/* ── 시험 화면 ── */
function renderExam(){
  var root=document.getElementById('exRoot');
  var rows=EX.pool.map(function(item,qi){
    var q=item.q;
    return '<div class="pl-qrow">'
      +'<div style="font-size:11px;color:var(--tx-second);margin-bottom:2px">'+esc(item.sectionCode)+' '+esc(tx(item.sectionTitle))+'</div>'
      +'<div class="pl-qtext">'+(qi+1)+'. '+esc(tx(q.q))+'</div>'
      +q.choices.map(function(c,idx){
        return '<label class="pl-choice"><input type="radio" name="eq'+qi+'" value="'+idx+'" onchange="examPick('+qi+','+idx+')"> '+esc(tx(c))+'</label>';
      }).join('')
    +'</div>';
  }).join('');
  root.innerHTML='<div class="pl-layout">'
    +'<div class="pl-main" style="max-width:820px;margin:0 auto">'
      +'<div class="pl-crumb">'+esc(equipmentName(EX.equip))+' — '+esc(pt('examTitle'))+' ('+EX.pool.length+esc(pt('examQuestionsUnit'))+')</div>'
      +'<div class="apf-card">'
      +rows
      +'<div class="mfoot"><button class="btn pri" id="ex_submit_btn" onclick="submitExam()">'+esc(pt('examSubmitBtn'))+'</button></div>'
      +'</div>'
    +'</div>'
  +'</div>';
}
function examPick(qi,idx){EX.picks[qi]=idx;}
function submitExam(){
  if(Object.keys(EX.picks).length<EX.pool.length){alert(pt('quizAnswerAll'));return;}
  if(!confirm(pt('examSubmitConfirm')))return;
  var correct=0;
  EX.pool.forEach(function(item,qi){if(EX.picks[qi]===item.q.answer)correct++;});
  var total=EX.pool.length;
  var pct=total?Math.round(correct/total*100):0;
  var passed=(correct/total)>=PASS_RATIO;
  EX.lastResult={equip:EX.equip,name:EX.name,org:EX.org,correct:correct,total:total,pct:pct,passed:passed};
  EX.mode='result';
  var btn=document.getElementById('ex_submit_btn');
  if(btn){btn.disabled=true;btn.textContent=pt('examSubmitting');}
  var url=PRELEARN_SHEETS_URL;
  fetch(url,{method:'POST',headers:{'Content-Type':'text/plain'},body:JSON.stringify({
    action:'submitExam',
    examResult:{equipment:EX.equip,traineeName:EX.name,traineeOrg:EX.org,traineeOrgType:EX.orgType,traineeContact:EX.contact,score:correct,total:total,pct:pct,passed:passed}
  })})
    .then(function(r){return r.text();})
    .then(function(){renderResult(EX.lastResult);})
    .catch(function(){renderResult(EX.lastResult);});
}

/* ── 결과 화면 ── */
function renderResult(res){
  var root=document.getElementById('exRoot');
  if(!res){renderPick();return;}
  root.innerHTML='<div class="apf-card apf-done">'
    +'<h1>'+(res.passed?'🎉 ':'')+esc(pt('examResultTitle'))+'</h1>'
    +'<p>'+esc(res.name)+' ('+esc(res.org)+') — '+esc(equipmentName(res.equip))+'</p>'
    +'<div style="margin-top:14px;font-weight:700;font-size:20px;color:'+(res.passed?'#4ade9a':'#e07070')+'">'+res.correct+'/'+res.total+' ('+res.pct+'%)</div>'
    +'<div style="margin-top:8px;color:'+(res.passed?'#4ade9a':'#e07070')+'">'+esc(res.passed?pt('examPassMsg'):pt('examFailMsg'))+'</div>'
    +'<p style="margin-top:20px;font-size:12px;color:var(--tx-second)">'+esc(pt('examThanks'))+'</p>'
  +'</div>';
}

document.addEventListener('DOMContentLoaded',function(){
  initTheme();
  renderLangSelect();
  document.getElementById('pageTitle').textContent=pt('examPageTitle');
  document.getElementById('langLabelText').textContent=pt('langLabel');
  if(!PRELEARN_SHEETS_URL){
    document.getElementById('exRoot').innerHTML='<div class="apf-warn">'+esc(pt('warnMsg'))+'</div>';
    return;
  }
  var params=new URLSearchParams(location.search);
  var eq=params.get('eq');
  fetch(PRELEARN_SHEETS_URL+'?action=load')
    .then(function(r){return r.json();})
    .then(function(data){EX.quizOverrides=data.quizOverrides||{};})
    .catch(function(){})
    .then(function(){
      if(eq&&equipmentById(eq)&&EXAM_COURSE_DATA[eq]&&EXAM_COURSE_DATA[eq].chapters){
        EX.equip=eq;EX.mode='gate';renderGate();
      }else{
        renderPick();
      }
    });
});
