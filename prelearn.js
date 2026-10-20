/* ═══════════════════════════════════════════
   L1 온라인 사전 선행학습 (다중 설비군 지원)
═══════════════════════════════════════════ */
// ↓↓↓ Code-Prelearn.gs를 별도 Google Sheet에 배포한 뒤 나오는 /exec URL로 교체하세요.
var PRELEARN_SHEETS_URL='https://script.google.com/macros/s/AKfycbytVgXC5ZG8NvkYhHYdvPEk4tQKmSCy6pND7l11as057tMIS5LC0WXuNFJNI4o-ij2l/exec';
var PL_ID_KEY='prelearn_id';
var PASS_RATIO=0.8; // 섹션별 퀴즈 통과 기준 (80% 이상 정답)

var COURSE_DATA={
  smtv:{chapters:(typeof PRELEARN_CHAPTERS_SMTV!=='undefined')?PRELEARN_CHAPTERS_SMTV:null,quiz:(typeof PRELEARN_QUIZ_SMTV!=='undefined')?PRELEARN_QUIZ_SMTV:null},
  nbga:{chapters:(typeof PRELEARN_CHAPTERS_NBGA!=='undefined')?PRELEARN_CHAPTERS_NBGA:null,quiz:(typeof PRELEARN_QUIZ_NBGA!=='undefined')?PRELEARN_QUIZ_NBGA:null}
};
/* 관리자가 "퀴즈 관리"에서 수정한 문제은행 (설비/섹션별). 있으면 코드 내장 기본 문제 대신 이걸 사용한다. */
var QUIZ_OVERRIDES={};
function quizPoolFor(equip,code){
  var ov=QUIZ_OVERRIDES&&QUIZ_OVERRIDES[equip]&&QUIZ_OVERRIDES[equip][code];
  if(ov&&ov.length)return ov;
  return (COURSE_DATA[equip]&&COURSE_DATA[equip].quiz&&COURSE_DATA[equip].quiz[code])||[];
}

var PL={record:null,equip:null,ci:0,si:0,li:0,mode:'pick',quizPick:{},allowedEquip:null,tid:null};

function esc(s){return String(s==null?'':s).replace(/[&<>"']/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c];});}
function uid(p){return p+'_'+Date.now().toString(36)+Math.random().toString(36).slice(2,7);}
function tx(obj){ // {ko,en,zhCN,zhTW,ja} 중 현재 언어 텍스트, 없으면 en
  if(!obj)return '';
  var k=langKey();
  return obj[k]||obj.en||'';
}
// replace에 함수를 넘겨, 값에 $& 같은 패턴이 있어도 그대로 들어가게 한다
function fmtQuizMsg(tpl,pct){return tpl.replace('{0}',function(){return pct;});}
/* 저장소가 차단된 환경(사파리 프라이빗 모드, 일부 인앱 브라우저)에서는 localStorage 접근이 예외를 던진다 —
   그대로 두면 학습 시작 버튼이나 페이지 로딩이 멈추므로 try/catch로 감싼다. */
function lsGet(k){try{return localStorage.getItem(k);}catch(e){return null;}}
function lsSet(k,v){try{localStorage.setItem(k,v);}catch(e){}}

/* 학습자 x 설비 x 섹션 별로 결정론적인(같은 사람은 항상 같은 결과) 시드 기반 난수.
   같은 학습자는 재접속/재응시해도 항상 같은 문제 조합을 받고, 서로 다른 학습자는
   (대개) 서로 다른 문제 조합을 받는다. */
function seededPRNG(seedStr){
  var h=1779033703^seedStr.length;
  for(var i=0;i<seedStr.length;i++){
    h=Math.imul(h^seedStr.charCodeAt(i),3432918353);
    h=h<<13|h>>>19;
  }
  return function(){
    h=Math.imul(h^h>>>16,2246822507);
    h=Math.imul(h^h>>>13,3266489909);
    h^=h>>>16;
    return (h>>>0)/4294967296;
  };
}
/* 보기 순서를 학습자별로 고정된 방식으로 섞는다. 원본 데이터는 정답이 1번인 문항이 대부분이라 섞지 않으면
   "항상 1번"만 찍어도 합격선에 근접한다. 보기와 정답 번호를 함께 바꾼 복사본을 돌려주므로 화면·채점·확인 화면은
   그대로 복사본 기준으로 동작한다. 이 기능이 도입되기 전에 만든 기록(shuf 없음)은 저장된 선택과 어긋나지 않게 섞지 않는다. */
function shuffleChoices(q,seedStr){
  var rand=seededPRNG(seedStr);
  var order=q.choices.map(function(_,i){return i;});
  for(var i=order.length-1;i>0;i--){
    var j=Math.floor(rand()*(i+1));
    var tmp=order[i];order[i]=order[j];order[j]=tmp;
  }
  return {q:q.q,choices:order.map(function(i){return q.choices[i];}),answer:order.indexOf(q.answer)};
}
/* 섹션 문제은행(pool)에서 학습자별로 고정된 1~2문항을 뽑는다 (pool이 2개 이하면 그대로 전부 사용) */
function pickSectionQuiz(pool,sec){
  if(!pool||!pool.length)return [];
  var n=Math.min(2,pool.length);
  var learnerId=(PL.record&&PL.record.id)||'anon';
  var idxs=pool.map(function(_,i){return i;});
  if(pool.length>n){
    var rand=seededPRNG(learnerId+'|'+PL.equip+'|'+sec.code);
    for(var i=idxs.length-1;i>0;i--){
      var j=Math.floor(rand()*(i+1));
      var tmp=idxs[i];idxs[i]=idxs[j];idxs[j]=tmp;
    }
    idxs=idxs.slice(0,n).sort(function(a,b){return a-b;});
  }
  var shuf=PL.record&&PL.record.shuf;
  return idxs.map(function(i){
    return shuf?shuffleChoices(pool[i],learnerId+'|'+PL.equip+'|'+sec.code+'|c'+i):pool[i];
  });
}

function initTheme(){
  var saved=lsGet('edu_theme')||'dark';
  document.documentElement.setAttribute('data-theme',saved);
  var btn=document.getElementById('themeToggle');
  if(btn)btn.textContent=saved==='dark'?'🌙':'☀️';
}
function toggleTheme(){
  var cur=document.documentElement.getAttribute('data-theme')||'dark';
  var next=cur==='dark'?'light':'dark';
  document.documentElement.setAttribute('data-theme',next);
  lsSet('edu_theme',next);
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
  var lbl=document.getElementById('langLabelText');
  if(lbl)lbl.textContent=pt('langLabel');
  if(PL.mode==='pick')renderPick();
  else if(PL.mode==='gate')renderGate();
  else renderViewer();
}

/* ── 설비 선택 ── */
function renderPick(){
  var root=document.getElementById('plRoot');
  var list=(PL.allowedEquip&&PL.allowedEquip.length)?EQUIPMENT_LIST.filter(function(e){return PL.allowedEquip.indexOf(e.id)>=0;}):EQUIPMENT_LIST;
  if(!list.length)list=EQUIPMENT_LIST; // 신청서의 설비 id가 현재 목록과 안 맞으면 전체를 보여준다(안전장치)
  root.innerHTML='<div class="apf-card pl-gate">'
    +'<h1>🎓 '+esc(pt('pickTitle'))+'</h1>'
    +'<p class="apf-sub">'+esc(pt('pickSub'))+'</p>'
    +'<div class="pl-equip-grid">'
    +list.map(function(e){
      var has=COURSE_DATA[e.id]&&COURSE_DATA[e.id].chapters;
      return '<div class="pl-equip-card'+(has?'':' disabled')+'" '+(has?('onclick="pickEquipment(\''+e.id+'\')"'):'')+'>'
        +'<div class="pl-equip-name">'+esc(equipmentName(e.id,langKey()))+'</div>'
        +(has?'':'<div class="pl-equip-soon">Coming soon</div>')
      +'</div>';
    }).join('')
    +'</div>'
  +'</div>';
}
function pickEquipment(id){
  if(!confirm(pt('equipConfirmMsg')))return;
  enterEquip(id);
}
/* 신청서 승인 시 발송되는 링크에는 대상자 고유 ID(tid)가 실려 있다 — 이 ID로 기존 기록을
   찾으면 이름/소속을 다시 입력할 필요 없이 바로 이어서 진행(또는 완료 후 재접속 시 본인의
   기존 결과 확인)할 수 있다. 링크에 tid가 없거나(과거에 발송된 링크) 아직 기록이 없으면
   기존처럼 이름/소속 입력 화면(Gate)으로 보낸다. */
function enterEquip(id){
  PL.equip=id;
  if(PL.tid){
    fetchLearner({tid:PL.tid},function(found,ok){
      // 서버 오류를 "기록 없음"으로 착각해 Gate로 보내면 완료자가 새 기록을 만들어 처음부터 다시 응시하게 된다
      if(!ok){showLoadError(function(){enterEquip(id);});return;}
      if(found){
        PL.record=found;
        lsSet(PL_ID_KEY,found.id);
        enterCourse();
        return;
      }
      PL.mode='gate';renderGate();
    });
    return;
  }
  PL.mode='gate';renderGate();
}
/* 서버에서 학습 기록을 불러오지 못했을 때 — 새 기록을 만들지 않고 재시도만 안내한다 */
function showLoadError(retryFn){
  var root=document.getElementById('plRoot');
  window._plRetry=retryFn;
  root.innerHTML='<div class="apf-card pl-gate"><div class="apf-warn">'+esc(pt('loadFail'))+'</div>'
    +'<button class="apf-submit" style="margin-top:16px" onclick="window._plRetry&&window._plRetry()">'+esc(pt('startBtn'))+'</button></div>';
}

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
      +'<div class="apf-field"><label>'+esc(pt('orgType'))+'</label><input type="text" id="pl_orgtype" list="plOrgTypeDatalist"><datalist id="plOrgTypeDatalist">'+ORG_TYPES.map(function(o){return '<option value="'+esc(tOrgType(o.id))+'">';}).join('')+'</datalist></div>'
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

  var btn=document.querySelector('.pl-gate .apf-submit');
  if(btn)btn.disabled=true;
  // 서버가 링크의 대상자 고유 ID(tid) → (이 브라우저에 저장된 ID + 입력한 이름 일치) → 이름+소속 순으로
  // 본인 기록을 찾아 돌려준다. 저장된 ID만 믿으면 같은 브라우저로 예전에 다른 사람 이름으로 학습한 경우
  // 엉뚱한 사람의 기록에 새 이름이 덮어씌워지므로 이름 일치를 함께 확인한다.
  fetchLearner({tid:PL.tid,id:lsGet(PL_ID_KEY),name:name,org:org},function(found,ok){
    if(btn)btn.disabled=false;
    if(!ok){alert(pt('loadFail'));return;} // 서버 오류를 "기록 없음"으로 착각해 새 기록을 만들지 않는다
    if(found){
      PL.record=found;
      PL.record.name=name;PL.record.org=org;
      PL.record.orgType=orgType||PL.record.orgType||'';
      PL.record.contact=contact||PL.record.contact||''; // 비워 둔 연락처가 기존 값을 지우지 않게
      if(PL.tid)PL.record.traineeId=PL.tid;
      lsSet(PL_ID_KEY,found.id);
      enterCourse();
    }else{
      // 새 기록 — 서버가 발급한 최종 id를 받은 뒤에 학습을 시작한다(문항 선택·보기 섞기의 시드가 id에서 나오므로
      // 도중에 id가 바뀌면 같은 섹션의 문항이 달라진다)
      PL.record={id:uid('pl'),name:name,org:org,orgType:orgType,contact:contact,traineeId:PL.tid||undefined,shuf:1,startedAt:new Date().toISOString(),courses:{}};
      saveProgress(function(saved){
        if(!saved){PL.record=null;alert(pt('saveFail'));return;}
        enterCourse();
      });
    }
  });
}
/* 대상자 고유 ID(tid) 매칭으로 이미 찾은 기록, 또는 방금 Gate에서 입력받아 찾거나 새로 만든
   기록(PL.record)을 가지고 실제 학습 화면으로 들어간다 — 이미 이 설비를 최종 완료한 기록이면
   resumePosition()이 모든 섹션에 진행 기록이 있음을 감지해 자동으로 완료(review) 화면으로
   보내므로, 완료자가 재접속해도 퀴즈를 다시 풀지 않고 본인의 기존 결과만 보게 된다. */
function enterCourse(){
  if(!PL.record.courses)PL.record.courses={};
  if(!PL.record.courses[PL.equip])PL.record.courses[PL.equip]={progress:{},startedAt:new Date().toISOString()};
  resumePosition();
  if(PL.mode!=='done'){PL.mode='slide';}
  else if(!PL.record.courses[PL.equip].completedAt){
    // 모든 섹션 퀴즈를 제출했는데 마지막 "다음" 버튼을 누르기 전에 창을 닫아 완료 시각이 비어 있던 기록을 메운다
    PL.record.courses[PL.equip].completedAt=new Date().toISOString();
  }
  renderViewer();
  saveProgress();
}

/* ── 진행 상태 저장/불러오기 ── */
function courseProgress(){return PL.record.courses[PL.equip].progress;}

/* 저장은 한 번에 하나씩 순서대로 보내고(연속 호출이 서로 추월해 오래된 상태가 최종본이 되는 것 방지),
   실패하면 자동으로 재시도한 뒤에도 안 되면 사용자에게 알린다. 서버 응답은 서버가 보존한 기존 제출 결과를
   로컬에 반영한다(같은 섹션을 다른 탭에서 먼저 제출했다면 그 결과가 우선). cb(ok)는 저장 성공 여부를 받는다. */
var _saveBusy=false,_savePending=false,_saveWaiters=[],_saveFailShown=false;
function flushSaveWaiters(ok){
  var w=_saveWaiters;_saveWaiters=[];
  w.forEach(function(f){try{f(ok);}catch(e){}});
}
function saveProgress(cb){
  if(cb)_saveWaiters.push(cb);
  if(!PRELEARN_SHEETS_URL||!PL.record){flushSaveWaiters(true);return;}
  if(_saveBusy){_savePending=true;return;}
  doSaveProgress(0);
}
function reconcileFromServer(rec){
  if(!rec||!rec.courses)return;
  if(rec.shuf!==undefined)PL.record.shuf=rec.shuf;
  if(rec.traineeId)PL.record.traineeId=rec.traineeId;
  Object.keys(rec.courses).forEach(function(eq){
    var sc=rec.courses[eq];
    if(!PL.record.courses[eq])PL.record.courses[eq]={progress:{},startedAt:sc.startedAt};
    var lc=PL.record.courses[eq];
    if(sc.startedAt)lc.startedAt=sc.startedAt;
    if(sc.completedAt&&!lc.completedAt)lc.completedAt=sc.completedAt;
    Object.keys(sc.progress||{}).forEach(function(code){lc.progress[code]=sc.progress[code];});
  });
}
function doSaveProgress(attempt){
  _saveBusy=true;_savePending=false;
  PL.record.lastActivityAt=new Date().toISOString();
  fetch(PRELEARN_SHEETS_URL,{method:'POST',headers:{'Content-Type':'text/plain'},
    body:JSON.stringify({action:'upsertProgress',record:PL.record})})
    .then(function(r){return r.text();})
    .then(function(text){
      var data;
      try{data=JSON.parse(text);}catch(e){throw new Error('invalid-response');}
      if(data.error)throw new Error(data.error);
      if(data.id){PL.record.id=data.id;lsSet(PL_ID_KEY,data.id);}
      reconcileFromServer(data.record);
      _saveFailShown=false;_saveBusy=false;
      if(_savePending){doSaveProgress(0);return;}
      flushSaveWaiters(true);
    })
    .catch(function(err){
      if(attempt<2&&err.message!=='forbidden'&&err.message!=='invalid_record'){
        setTimeout(function(){doSaveProgress(attempt+1);},1500*(attempt+1));
        return;
      }
      _saveBusy=false;_savePending=false;
      if(!_saveFailShown){_saveFailShown=true;alert(pt('saveFail'));}
      flushSaveWaiters(false);
    });
}
/* 본인 기록 1건 조회 — 서버가 tid → (저장된 id + 이름 일치) → 이름+소속 순으로 찾아 돌려준다(전체 목록은 받지 않는다).
   cb(record|null, ok): ok=false는 네트워크/서버 오류로, "기록 없음"(ok=true, record=null)과 구분한다. */
function fetchLearner(q,cb){
  if(!PRELEARN_SHEETS_URL){cb(null,true);return;}
  var qs='?action=learner';
  Object.keys(q).forEach(function(k){if(q[k])qs+='&'+k+'='+encodeURIComponent(q[k]);});
  fetch(PRELEARN_SHEETS_URL+qs)
    .then(function(r){return r.json();})
    .then(function(data){
      if(data.error)throw new Error(data.error);
      QUIZ_OVERRIDES=data.quizOverrides||{};if(typeof plViPatch==="function")plViPatch(QUIZ_OVERRIDES);
      cb(data.record||null,true);
    })
    .catch(function(){cb(null,false);});
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
    // 퀴즈를 제출(시도)한 적 있는 섹션은 통과 여부와 무관하게 완료로 보고 다음 섹션부터 재개한다
    if(!p){PL.ci=secs[i].ci;PL.si=secs[i].si;PL.li=0;return;}
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
        var cls='pl-toc-sec'+((ci===PL.ci&&si===PL.si)?' on':'')+(p?(p.passed?' done':' failed'):'');
        var mark=p?(p.passed?' ✓':' ✗'):'';
        return '<div class="'+cls+'" onclick="plJump('+ci+','+si+')"><span class="pl-toc-code">'+sec.code+'</span> '+esc(tx(sec.title))+mark+'</div>';
      }).join('');
  }).join('');
}
function plJump(ci,si){
  // 퀴즈를 풀고 있는 동안(아직 제출 전)에는 목차로 빠져나가 다른 섹션으로 건너뛸 수 없다
  if(PL.mode==='quiz'&&!courseProgress()[curSection().code])return;
  PL.ci=ci;PL.si=si;PL.li=0;PL.mode='slide';renderViewer();
}
function plPrev(){
  if(PL.li>0){PL.li--;renderViewer();return;}
  if(PL.si>0){PL.si--;PL.li=curChapter().sections[PL.si].slides.length-1;renderViewer();return;}
  if(PL.ci>0){PL.ci--;PL.si=curChapter().sections.length-1;PL.li=curChapter().sections[PL.si].slides.length-1;renderViewer();return;}
}
function plNext(){
  var sec=curSection();
  if(PL.li<sec.slides.length-1){PL.li++;renderViewer();return;}
  // 이미 제출한 섹션이면 renderQuiz()가 자동으로 확인용(읽기전용) 화면을 보여준다
  PL.mode='quiz';PL.quizPick={};
  renderViewer();
}
function advanceSection(){
  var ch=curChapter();
  if(PL.si<ch.sections.length-1){PL.si++;PL.li=0;PL.mode='slide';renderViewer();return;}
  if(PL.ci<chapters().length-1){PL.ci++;PL.si=0;PL.li=0;PL.mode='slide';renderViewer();return;}
  // 마지막 섹션에서 "다음"을 눌렀더라도, 퀴즈를 제출하지 않은 섹션이 남아 있으면 완료 처리하지 않고 그 섹션으로 보낸다
  var missing=allSections().filter(function(s){return !courseProgress()[s.code];})[0];
  if(missing){
    alert(pt('sectionsMissing'));
    PL.ci=missing.ci;PL.si=missing.si;PL.li=0;PL.mode='slide';renderViewer();return;
  }
  PL.mode='done';
  if(!PL.record.courses[PL.equip].completedAt)PL.record.courses[PL.equip].completedAt=new Date().toISOString();
  saveProgress();
  renderViewer();
}

/* ── 섹션 퀴즈 ──
   섹션당 퀴즈 제출은 1회뿐이다. 이미 제출한 섹션이면(prog 존재) 항상 확인용(읽기전용)
   화면을 보여주고, 아직 제출 전이면 답을 고를 수 있는 화면을 보여준다. */
function renderQuiz(){
  var sec=curSection();
  var prog=courseProgress()[sec.code];
  if(prog){renderQuizReview(sec,prog);return;}
  renderQuizFresh(sec);
}
function renderQuizFresh(sec){
  var root=document.getElementById('plRoot');
  var qs=pickSectionQuiz(quizPoolFor(PL.equip,sec.code),sec);
  var rows=qs.map(function(q,qi){
    return '<div class="pl-qrow" id="pl_qrow_'+qi+'">'
      +'<div class="pl-qtext" id="pl_qtext_'+qi+'">'+(qi+1)+'. '+esc(tx(q.q))+'</div>'
      +q.choices.map(function(c,idx){
        // 언어를 바꿔 화면을 다시 그려도 이미 고른 답이 유지되도록 checked를 복원한다
        return '<label class="pl-choice" id="pl_choice_'+qi+'_'+idx+'"><input type="radio" name="q'+qi+'" value="'+idx+'" onchange="plPick('+qi+','+idx+')"'+(PL.quizPick[qi]===idx?' checked':'')+'> '+esc(tx(c))+'</label>';
      }).join('')
    +'</div>';
  }).join('');

  // 답을 제출하기 전까지는 슬라이드/다른 섹션으로 빠져나갈 방법을 주지 않는다(제출만 가능)
  root.innerHTML='<div class="pl-layout">'
    +'<div class="pl-side">'+renderToc()+'</div>'
    +'<div class="pl-main">'
      +'<div class="pl-crumb">'+esc(sec.code)+' '+esc(tx(sec.title))+' — '+esc(pt('quizTitle'))+'</div>'
      +'<div class="apf-card">'
      +rows
      +'<div class="mfoot"><button class="btn pri" id="pl_submit_btn" onclick="submitQuiz()">'+esc(pt('submitBtn'))+'</button></div>'
      +'</div>'
    +'</div>'
  +'</div>';
}
function plPick(qi,idx){PL.quizPick[qi]=idx;}
function submitQuiz(){
  var sec=curSection();
  var qs=pickSectionQuiz(quizPoolFor(PL.equip,sec.code),sec);
  if(Object.keys(PL.quizPick).length<qs.length){alert(pt('quizAnswerAll'));return;}
  if(!confirm(pt('submitConfirm')))return;
  var correct=0,picks={};
  qs.forEach(function(q,qi){
    picks[qi]=PL.quizPick[qi];
    if(PL.quizPick[qi]===q.answer)correct++;
  });
  var passed=(correct/qs.length)>=PASS_RATIO;
  var prog=courseProgress();
  prog[sec.code]={viewed:true,quizScore:correct,quizTotal:qs.length,passed:passed,attempts:((prog[sec.code]&&prog[sec.code].attempts)||0)+1,picks:picks};
  // 이 제출로 모든 섹션 퀴즈가 끝났다면 완료 시각을 바로 기록한다(마지막 "다음" 버튼을 누르기 전에 창을 닫아도 완료로 남게)
  if(allSections().every(function(s){return courseProgress()[s.code];})&&!PL.record.courses[PL.equip].completedAt){
    PL.record.courses[PL.equip].completedAt=new Date().toISOString();
  }
  saveProgress();
  renderQuizReview(sec,prog[sec.code]);
}
/* 이미 제출한 섹션의 퀴즈를 다시 보여준다 — 어떤 문항을 맞고 틀렸는지 확인용이며 수정은 불가하다 */
function renderQuizReview(sec,prog){
  var root=document.getElementById('plRoot');
  var qs=pickSectionQuiz(quizPoolFor(PL.equip,sec.code),sec);
  var picks=prog.picks||{};
  var rows=qs.map(function(q,qi){
    var pickedIdx=picks[qi];
    var ok=pickedIdx===q.answer;
    var choicesHtml=q.choices.map(function(c,idx){
      var extra='';
      if(idx===pickedIdx)extra=ok?' pl-correct-choice':' pl-wrong-choice';
      else if(idx===q.answer&&!ok)extra=' pl-correct-choice';
      return '<label class="pl-choice'+extra+'"><input type="radio" disabled '+(idx===pickedIdx?'checked':'')+'> '+esc(tx(c))+'</label>';
    }).join('');
    return '<div class="pl-qrow '+(ok?'pl-qrow-ok':'pl-qrow-bad')+'">'
      +'<div class="pl-qtext">'+(qi+1)+'. '+esc(tx(q.q))+' <span class="pl-qmark">'+(ok?pt('markCorrect'):fmtQuizMsg(pt('markWrong'),esc(tx(q.choices[q.answer]))))+'</span></div>'
      +choicesHtml
    +'</div>';
  }).join('');
  var passed=prog.passed;
  var msg=passed
    ?('<div style="color:#4ade9a;font-weight:600;margin-top:10px">✅ '+Number(prog.quizScore)+'/'+Number(prog.quizTotal)+' '+esc(pt('quizPass'))+'</div>')
    :('<div style="color:#e07070;font-weight:600;margin-top:10px">❌ '+Number(prog.quizScore)+'/'+Number(prog.quizTotal)+' '+esc(fmtQuizMsg(pt('quizFail'),Math.round(PASS_RATIO*100)))+'</div>');
  root.innerHTML='<div class="pl-layout">'
    +'<div class="pl-side">'+renderToc()+'</div>'
    +'<div class="pl-main">'
      +'<div class="pl-crumb">'+esc(sec.code)+' '+esc(tx(sec.title))+' — '+esc(pt('quizTitle'))+' · '+esc(pt('reviewOnlyLbl'))+'</div>'
      +'<div class="apf-card">'
      +rows
      +msg
      +'<div class="mfoot"><button class="btn" onclick="PL.mode=\'slide\';PL.li=0;renderViewer()">'+esc(pt('reviewBtn'))+'</button>'
      +'<button class="btn pri" onclick="advanceSection()">'+esc(pt('nextSectionBtn'))+'</button>'
      +'</div>'
      +'</div>'
    +'</div>'
  +'</div>';
}

/* 코스 전체(모든 섹션)의 퀴즈 문항 합산 점수/정답률 — "인증기준 충족" 여부(80% 이상)에 쓰인다 */
function courseQuizStats(){
  var correct=0,total=0;
  allSections().forEach(function(s){
    var p=courseProgress()[sectionAt(s.ci,s.si).code];
    if(p){correct+=(p.quizScore||0);total+=(p.quizTotal||0);}
  });
  return {correct:correct,total:total,pct:total?Math.round(correct/total*100):0};
}

/* ── 완료 화면 ── */
function renderDone(){
  var root=document.getElementById('plRoot');
  var secs=allSections();
  var stats=courseQuizStats();
  var allPassed=stats.total>0&&stats.pct>=80;
  var rows=secs.map(function(s){
    var sec=sectionAt(s.ci,s.si);
    var p=courseProgress()[sec.code];
    return '<tr><td>'+sec.code+'</td><td>'+esc(tx(sec.title))+'</td><td>'+(p?(Number(p.quizScore)+'/'+Number(p.quizTotal)):'-')+'</td><td>'+(p&&p.passed?('<span style="color:#4ade9a">'+esc(pt('passLbl'))+'</span>'):('<span style="color:#e07070">'+esc(pt('failLbl'))+'</span>'))+'</td></tr>';
  }).join('');
  root.innerHTML='<div class="apf-card apf-done">'
    +'<h1>'+esc(pt('doneTitle'))+'</h1>'
    +'<p>'+esc(PL.record.name)+' ('+esc(PL.record.org)+') — '+esc(equipmentName(PL.equip,langKey()))+'<br>'+esc(pt('doneMsg1'))+' '+esc(pt('doneMsg2'))+'</p>'
    +'<div style="margin-top:14px;font-weight:600;color:'+(allPassed?'#4ade9a':'#e07070')+'">'+esc(allPassed?pt('allPassedMsg'):pt('notAllPassedMsg'))+' ('+stats.correct+'/'+stats.total+', '+stats.pct+'%)</div>'
    +'<table class="dtbl sm" style="margin-top:20px;text-align:left"><thead><tr><th>'+esc(pt('colSection'))+'</th><th>'+esc(pt('colTitle'))+'</th><th>'+esc(pt('colScore'))+'</th><th>'+esc(pt('colResult'))+'</th></tr></thead><tbody>'+rows+'</tbody></table>'
    +'<div style="margin-top:16px"><button class="btn" onclick="PL.mode=\'pick\';renderPick()">'+esc(pt('endLearningBtn'))+'</button></div>'
  +'</div>';
}

document.addEventListener('DOMContentLoaded',function(){
  initTheme();
  renderLangSelect();
  document.getElementById('pageTitle').textContent=pt('pageTitle');
  document.getElementById('langLabelText').textContent=pt('langLabel');
  var params=new URLSearchParams(location.search);
  var eqParam=params.get('eq');
  PL.tid=params.get('tid')||null;
  var allowed=eqParam?eqParam.split(',').map(function(s){return s.trim();}).filter(function(id){return equipmentById(id)&&COURSE_DATA[id]&&COURSE_DATA[id].chapters;}):[];
  PL.allowedEquip=allowed.length?allowed:null;
  if(allowed.length===1){
    enterEquip(allowed[0]);
  }else{
    renderPick();
  }
});
