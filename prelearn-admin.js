/* ═══════════════════════════════════════════
   🧑‍🎓 사전학습 현황 (관리자 — 설비별 학습자 진도/퀴즈 결과 조회)
═══════════════════════════════════════════ */
var PRELEARN_LS_KEY='edu_prelearn_sheets_url';
var PLA={list:[],equipFilter:'all',viewMode:'progress'};

var ADMIN_COURSE_CHAPTERS={
  smtv:(typeof PRELEARN_CHAPTERS_SMTV!=='undefined')?PRELEARN_CHAPTERS_SMTV:null,
  nbga:(typeof PRELEARN_CHAPTERS_NBGA!=='undefined')?PRELEARN_CHAPTERS_NBGA:null
};
var ADMIN_COURSE_QUIZ={
  smtv:(typeof PRELEARN_QUIZ_SMTV!=='undefined')?PRELEARN_QUIZ_SMTV:{},
  nbga:(typeof PRELEARN_QUIZ_NBGA!=='undefined')?PRELEARN_QUIZ_NBGA:{}
};
/* 퀴즈 관리 화면 상태 */
var QA={equip:null,code:null,pool:[],overrides:{}};

function getPrelearnSheetsUrl(){try{return localStorage.getItem(PRELEARN_LS_KEY)||'';}catch(e){return '';}}
function setPrelearnSheetsUrl(u){try{localStorage.setItem(PRELEARN_LS_KEY,u);}catch(e){}}

function plSectionsFor(eq){
  var chapters=ADMIN_COURSE_CHAPTERS[eq];
  if(!chapters)return [];
  var out=[];
  chapters.forEach(function(ch){ch.sections.forEach(function(sec){out.push({code:sec.code,title:sec.title});});});
  return out;
}
function plPassedCount(course,eq){
  if(!course||!course.progress)return 0;
  var n=0;
  plSectionsFor(eq).forEach(function(s){if(course.progress[s.code]&&course.progress[s.code].passed)n++;});
  return n;
}

function openPrelearnSheetsSettings(){
  var cur=getPrelearnSheetsUrl();
  mw('<div class="mtit">⚙ 사전학습 Sheets 설정</div>'
    +'<div style="font-size:12px;color:var(--tx-second);margin-bottom:12px">사전 선행학습(prelearn.html) 전용 Apps Script 웹앱 URL입니다. 본 데이터·신청서 백엔드와는 별도의 Google Sheet여야 합니다.</div>'
    +'<div class="fg"><label class="fl">URL</label>'
    +'<input type="text" id="prelearn_sheets_url" value="'+esc(cur)+'" style="font-size:11px" placeholder="https://script.google.com/macros/s/xxxx/exec"></div>'
    +'<div class="mfoot">'
    +'<button class="btn sm" onclick="cm()">취소</button>'
    +'<button class="btn sm pri" onclick="savePrelearnSheetsUrl()">저장</button>'
    +'</div>');
}
function savePrelearnSheetsUrl(){
  var u=document.getElementById('prelearn_sheets_url').value.trim();
  if(!u){alert('URL을 입력해주세요.');return;}
  setPrelearnSheetsUrl(u);cm();
  loadPrelearn(function(){renderPrelearnTab();});
}
function openPrelearnLinkInfo(){
  var url=location.origin+location.pathname.replace(/index\.html$/,'').replace(/\/$/,'')+'/prelearn.html';
  mw('<div class="mtit">🔗 사전 선행학습 링크</div>'
    +'<div style="font-size:12px;color:var(--tx-second);margin-bottom:12px">본사 방문 예정자에게 아래 주소를 공유하면 설비를 선택하고 Level 0~1 온라인 사전 학습을 진행할 수 있습니다. (신청서 등록 시에는 해당 설비로 바로 연결되는 링크가 자동으로 이메일 발송됩니다.)</div>'
    +'<div class="fg"><input type="text" value="'+esc(url)+'" readonly onclick="this.select()" style="font-size:11px"></div>'
    +'<div class="mfoot"><button class="btn sm" onclick="cm()">닫기</button></div>');
}

function loadPrelearn(cb){
  var url=getPrelearnSheetsUrl();
  if(!url){if(cb)cb();return;}
  fetch(url+'?action=load')
    .then(function(r){if(!r.ok)throw new Error('HTTP '+r.status);return r.json();})
    .then(function(data){
      if(data.error)throw new Error(data.error);
      PLA.list=data.records||[];
      QA.overrides=data.quizOverrides||{};
      if(cb)cb();
    })
    .catch(function(err){console.warn('사전학습 불러오기 실패:',err.message);if(cb)cb();});
}
function refreshPrelearn(){
  loadPrelearn(function(){
    if(PLA.viewMode==='quiz'){qaLoadPool();renderQuizAdminView();}
    else renderPrelearnTab();
  });
}
function savePrelearnRecords(){
  var url=getPrelearnSheetsUrl();
  if(!url)return;
  fetch(url,{method:'POST',headers:{'Content-Type':'text/plain'},body:JSON.stringify({action:'save',records:PLA.list})})
    .catch(function(err){console.warn('사전학습 저장 실패:',err.message);});
}

/* 학습자 x 설비 조합으로 평탄화 (한 사람이 여러 설비를 학습할 수 있으므로) */
function plFlattenRows(){
  var rows=[];
  PLA.list.forEach(function(r){
    var courses=r.courses||{};
    Object.keys(courses).forEach(function(eq){
      rows.push({r:r,eq:eq,course:courses[eq]});
    });
  });
  return rows;
}

function renderPrelearnTab(){
  var wrap=document.getElementById('prelearn_wrap');
  if(!wrap)return;
  if(PLA.viewMode==='quiz'){renderQuizAdminView();return;}
  if(!getPrelearnSheetsUrl()){
    wrap.innerHTML='<div class="empty">사전학습 Sheets가 아직 연결되지 않았습니다.<br><br>상단 "⚙ 사전학습 Sheets 설정"에서 Code-Prelearn.gs 배포 URL을 입력해주세요.</div>';
    return;
  }
  var allRows=plFlattenRows();
  var rows=allRows.filter(function(x){return PLA.equipFilter==='all'||x.eq===PLA.equipFilter;});
  var completed=allRows.filter(function(x){return x.course.completedAt;}).length;
  var avgPct=allRows.length?Math.round(allRows.reduce(function(s,x){var total=plSectionsFor(x.eq).length;return s+(total?plPassedCount(x.course,x.eq)/total:0);},0)/allRows.length*100):0;

  var cards='<div class="sum-card" onclick="plSetEquipFilter(\'all\')" style="cursor:pointer"><div class="sum-n">'+PLA.list.length+'</div><div class="sum-l">전체 학습자</div></div>'
    +EQUIPMENT_LIST.map(function(e){
      var n=allRows.filter(function(x){return x.eq===e.id;}).length;
      return '<div class="sum-card" onclick="plSetEquipFilter(\''+e.id+'\')" style="cursor:pointer"><div class="sum-n">'+n+'</div><div class="sum-l">'+esc(equipmentName(e.id,'ko'))+'</div></div>';
    }).join('')
    +'<div class="sum-card"><div class="sum-n" style="color:#4ade9a">'+completed+'</div><div class="sum-l">과정 완료(설비별)</div></div>'
    +'<div class="sum-card"><div class="sum-n">'+avgPct+'%</div><div class="sum-l">평균 진행률</div></div>';

  if(!rows.length){
    wrap.innerHTML='<div class="sum-row">'+cards+'</div><div class="empty">아직 학습을 시작한 사람이 없습니다.</div>';
    return;
  }

  var trows=rows.slice().sort(function(a,b){return (b.r.lastActivityAt||'')<(a.r.lastActivityAt||'')?-1:1;}).map(function(x){
    var r=x.r,eq=x.eq,course=x.course;
    var ot=orgType(r.orgType||'branch');
    var total=plSectionsFor(eq).length;
    var passed=plPassedCount(course,eq);
    var pct=total?Math.round(passed/total*100):0;
    return '<tr onclick="openPrelearnDetail(\''+r.id+'\',\''+eq+'\')">'
      +'<td><b>'+esc(r.name||'')+'</b></td>'
      +'<td><span class="grpbadge" style="background:'+ot.color+'">'+esc(ot.label)+'</span></td>'
      +'<td>'+esc(r.org||'')+'</td>'
      +'<td>'+esc(r.contact||'-')+'</td>'
      +'<td>'+esc(equipmentName(eq,'ko'))+'</td>'
      +'<td><div class="lv-progbar" style="width:100px;display:inline-block;vertical-align:middle;margin-right:6px"><div class="lv-progfill" style="width:'+pct+'%"></div></div>'+passed+'/'+total+'</td>'
      +'<td style="font-size:11px">'+esc((course.startedAt||'').slice(0,10))+'</td>'
      +'<td style="font-size:11px">'+esc((r.lastActivityAt||'').replace('T',' ').slice(0,16))+'</td>'
      +'<td>'+(course.completedAt?'<span class="lv-cur-badge">완료</span>':'<span class="lv-cur-badge none">진행중</span>')+'</td>'
    +'</tr>';
  }).join('');

  wrap.innerHTML='<div class="sum-row">'+cards+'</div>'
    +'<div class="tbl-wrap"><table class="dtbl"><thead><tr>'
      +'<th>이름</th><th>구분</th><th>소속</th><th>연락처</th><th>설비</th><th style="width:150px">진행률</th><th>시작일</th><th>최근 활동</th><th>상태</th>'
    +'</tr></thead><tbody>'+trows+'</tbody></table></div>';
}
function plSetEquipFilter(eq){PLA.equipFilter=eq;renderPrelearnTab();}

function openPrelearnDetail(id,eq){
  var r=PLA.list.find(function(x){return x.id===id;});
  if(!r)return;
  var course=(r.courses||{})[eq];
  if(!course)return;
  var ot=orgType(r.orgType||'branch');
  var rows=plSectionsFor(eq).map(function(s){
    var p=course.progress&&course.progress[s.code];
    return '<tr><td>'+s.code+'</td><td>'+esc((s.title&&s.title.ko)||'')+'</td><td>'+(p?(p.quizScore+'/'+p.quizTotal):'-')+'</td><td>'+(p?(p.attempts||1):'-')+'</td><td>'+(p&&p.passed?'<span style="color:#4ade9a">통과</span>':(p?'<span style="color:#e07070">미통과</span>':'<span style="color:var(--tx-faint)">미학습</span>'))+'</td></tr>';
  }).join('');
  mw('<div class="mtit">'+esc(r.name)+' <span class="grpbadge" style="background:'+ot.color+'">'+esc(ot.label)+'</span> <span style="font-size:12px;color:var(--tx-second);font-weight:400">'+esc(r.org||'')+' · '+esc(equipmentName(eq,'ko'))+'</span></div>'
    +'<div class="fr" style="grid-template-columns:repeat(3,1fr);margin-bottom:14px">'
      +'<div class="fg"><label class="fl">연락처</label><div class="dbox" style="margin-bottom:0">'+esc(r.contact||'-')+'</div></div>'
      +'<div class="fg"><label class="fl">시작일</label><div class="dbox" style="margin-bottom:0">'+esc((course.startedAt||'').slice(0,10))+'</div></div>'
      +'<div class="fg"><label class="fl">완료일</label><div class="dbox" style="margin-bottom:0">'+(course.completedAt?esc(course.completedAt.slice(0,10)):'-')+'</div></div>'
    +'</div>'
    +'<table class="dtbl sm"><thead><tr><th style="width:70px">섹션</th><th>제목</th><th style="width:70px">점수</th><th style="width:60px">시도</th><th style="width:80px">결과</th></tr></thead><tbody>'+rows+'</tbody></table>'
    +'<div class="mfoot"><button class="btn sm red" onclick="deletePrelearnRecord(\''+id+'\')" style="margin-right:auto">전체 기록 삭제</button><button class="btn sm" onclick="cm()">닫기</button></div>',true);
}
function deletePrelearnRecord(id){
  if(!confirm('이 학습자의 모든 설비 학습 기록을 삭제할까요?'))return;
  PLA.list=PLA.list.filter(function(r){return r.id!==id;});
  savePrelearnRecords();
  cm();renderPrelearnTab();
}

/* ═══════════════════════════════════════════
   📝 퀴즈 관리 (설비/섹션별 문제·보기·정답 확인/수정/삭제/추가)
═══════════════════════════════════════════ */
function openQuizAdmin(){
  var url=getPrelearnSheetsUrl();
  if(!url){alert('먼저 상단 "⚙ 사전학습 Sheets 설정"에서 URL을 입력해주세요.');return;}
  PLA.viewMode='quiz';
  var wrap=document.getElementById('prelearn_wrap');
  if(wrap)wrap.innerHTML='<div class="empty">불러오는 중...</div>';
  fetch(url+'?action=load')
    .then(function(r){if(!r.ok)throw new Error('HTTP '+r.status);return r.json();})
    .then(function(data){
      if(data.error)throw new Error(data.error);
      QA.overrides=data.quizOverrides||{};
      if(!QA.equip)QA.equip=EQUIPMENT_LIST[0].id;
      qaEnsureValidSection();
      qaLoadPool();
      renderQuizAdminView();
    })
    .catch(function(err){alert('불러오기 실패: '+err.message);PLA.viewMode='progress';renderPrelearnTab();});
}
function closeQuizAdmin(){PLA.viewMode='progress';renderPrelearnTab();}
function qaEnsureValidSection(){
  var secs=plSectionsFor(QA.equip);
  if(!QA.code||!secs.some(function(s){return s.code===QA.code;}))QA.code=secs.length?secs[0].code:null;
}
function qaLoadPool(){
  var ov=QA.overrides[QA.equip]&&QA.overrides[QA.equip][QA.code];
  var base=(ADMIN_COURSE_QUIZ[QA.equip]&&ADMIN_COURSE_QUIZ[QA.equip][QA.code])||[];
  QA.pool=deepCopy((ov&&ov.length)?ov:base);
}
function qaSwitchEquip(v){QA.equip=v;qaEnsureValidSection();qaLoadPool();renderQuizAdminView();}
function qaSwitchSection(v){QA.code=v;qaLoadPool();renderQuizAdminView();}
function qaSetQ(qi,langK,val){QA.pool[qi].q[langK]=val;}
function qaSetChoice(qi,ci,langK,val){QA.pool[qi].choices[ci][langK]=val;}
function qaSetAnswer(qi,ci){QA.pool[qi].answer=ci;}
/* 한국어 입력을 기준으로 영/중간/중번/일 4개 언어를 Apps Script LanguageApp으로 일괄 번역해 채워넣는다 */
function qaTranslateAll(qi){
  var koQ=(document.getElementById('qa_q_'+qi+'_ko')||{}).value||'';
  if(!koQ.trim()){alert('한국어 문항 내용을 먼저 입력해주세요.');return;}
  var koChoices=[0,1,2,3].map(function(ci){return (document.getElementById('qa_c_'+qi+'_'+ci+'_ko')||{}).value||'';});
  var texts=[koQ].concat(koChoices);
  var url=getPrelearnSheetsUrl();
  if(!url)return;
  var btn=document.getElementById('qa_translate_btn_'+qi);
  if(btn){btn.disabled=true;btn.textContent='번역 중...';}
  var realKeys={en:'en',zhCN:'zh-CN',zhTW:'zh-TW',ja:'ja'};
  fetch(url,{method:'POST',headers:{'Content-Type':'text/plain'},body:JSON.stringify({action:'translate',texts:texts,source:'ko',targets:['en','zh-CN','zh-TW','ja']})})
    .then(function(r){return r.json();})
    .then(function(data){
      if(!data.ok){alert('번역 실패: '+(data.error||''));return;}
      var res=data.results||[];
      if(res[0]){
        Object.keys(realKeys).forEach(function(k){
          var val=res[0][realKeys[k]];
          if(val){
            QA.pool[qi].q[k]=val;
            var el=document.getElementById('qa_q_'+qi+'_'+k);
            if(el)el.value=val;
          }
        });
      }
      [0,1,2,3].forEach(function(ci){
        var cr=res[ci+1];
        if(!cr)return;
        Object.keys(realKeys).forEach(function(k){
          var val=cr[realKeys[k]];
          if(val){
            QA.pool[qi].choices[ci][k]=val;
            var el=document.getElementById('qa_c_'+qi+'_'+ci+'_'+k);
            if(el)el.value=val;
          }
        });
      });
    })
    .catch(function(err){alert('번역 요청 실패: '+err.message);})
    .then(function(){if(btn){btn.disabled=false;btn.textContent='🌐 한국어 기준 전체 번역';}});
}
function qaDeleteQ(qi){
  if(!confirm('이 문항을 삭제할까요? (하단 "변경사항 저장"을 눌러야 실제로 반영됩니다)'))return;
  QA.pool.splice(qi,1);
  renderQuizAdminView();
}
function qaAddQ(){
  QA.pool.push({q:{ko:'',en:'',zhCN:'',zhTW:'',ja:''},choices:[0,1,2,3].map(function(){return {ko:'',en:'',zhCN:'',zhTW:'',ja:''};}),answer:0});
  renderQuizAdminView();
  var el=document.getElementById('qa_card_'+(QA.pool.length-1));
  if(el)el.scrollIntoView({behavior:'smooth',block:'center'});
}
function qaValidatePool(){
  for(var i=0;i<QA.pool.length;i++){
    var q=QA.pool[i];
    if(!q.q.en&&!q.q.ko){alert('문항 '+(i+1)+': 문제 내용을 최소 1개 언어 이상 입력해주세요.');return false;}
    for(var c=0;c<q.choices.length;c++){
      if(!q.choices[c].en&&!q.choices[c].ko){alert('문항 '+(i+1)+' 보기 '+(c+1)+': 내용을 최소 1개 언어 이상 입력해주세요.');return false;}
    }
  }
  return true;
}
function saveQuizOverridesForSection(){
  if(!qaValidatePool())return;
  QA.overrides[QA.equip]=QA.overrides[QA.equip]||{};
  QA.overrides[QA.equip][QA.code]=QA.pool;
  var url=getPrelearnSheetsUrl();
  fetch(url,{method:'POST',headers:{'Content-Type':'text/plain'},body:JSON.stringify({action:'saveQuizOverrides',quizOverrides:QA.overrides})})
    .then(function(r){return r.json();})
    .then(function(data){
      if(data.ok){alert('저장되었습니다.');renderQuizAdminView();}
      else alert('저장 실패: '+(data.error||''));
    })
    .catch(function(err){alert('저장 실패: '+err.message);});
}
function resetQuizSection(){
  if(!confirm('이 섹션의 문제를 기본값으로 되돌릴까요? (관리자가 수정한 내용이 사라집니다)'))return;
  if(QA.overrides[QA.equip])delete QA.overrides[QA.equip][QA.code];
  var url=getPrelearnSheetsUrl();
  fetch(url,{method:'POST',headers:{'Content-Type':'text/plain'},body:JSON.stringify({action:'saveQuizOverrides',quizOverrides:QA.overrides})})
    .then(function(r){return r.json();})
    .then(function(){qaLoadPool();renderQuizAdminView();})
    .catch(function(err){alert('실패: '+err.message);});
}
function renderQuizAdminView(){
  var wrap=document.getElementById('prelearn_wrap');
  if(!wrap)return;
  var secs=plSectionsFor(QA.equip);
  var hasOverride=!!(QA.overrides[QA.equip]&&QA.overrides[QA.equip][QA.code]&&QA.overrides[QA.equip][QA.code].length);
  var html='<div style="margin-bottom:12px"><a href="javascript:void(0)" onclick="closeQuizAdmin()" style="font-size:12px;color:var(--tx-second)">← 사전학습 현황으로</a></div>'
    +'<div style="display:flex;gap:8px;align-items:center;flex-wrap:wrap;margin-bottom:6px">'
      +'<select onchange="qaSwitchEquip(this.value)">'+EQUIPMENT_LIST.map(function(e){return '<option value="'+e.id+'"'+(e.id===QA.equip?' selected':'')+'>'+esc(e.name)+'</option>';}).join('')+'</select>'
      +'<select onchange="qaSwitchSection(this.value)">'+secs.map(function(s){return '<option value="'+s.code+'"'+(s.code===QA.code?' selected':'')+'>'+s.code+' '+esc((s.title&&s.title.ko)||'')+'</option>';}).join('')+'</select>'
      +'<span style="font-size:12px;color:'+(hasOverride?'#f0ad4e':'var(--tx-second)')+'">'+(hasOverride?'⚠ 관리자가 수정한 문제 사용 중':'● 기본값(자동 생성) 사용 중')+'</span>'
      +(hasOverride?'<button class="btn sm" onclick="resetQuizSection()">기본값으로 초기화</button>':'')
    +'</div>'
    +'<div style="font-size:11.5px;color:var(--tx-second);margin-bottom:14px">학습 사이트는 섹션마다 이 문제은행 중 1~2개를 학습자별로 고정 랜덤 선택해 보여줍니다. 내용을 확인하고 필요하면 직접 수정·삭제·추가하세요.</div>'
    +QA.pool.map(function(q,qi){return qaRenderQuestion(q,qi);}).join('')
    +'<div style="display:flex;gap:8px;margin-top:6px">'
      +'<button class="btn" onclick="qaAddQ()">+ 문제 추가</button>'
      +'<button class="btn pri" onclick="saveQuizOverridesForSection()" style="margin-left:auto">💾 변경사항 저장</button>'
    +'</div>';
  wrap.innerHTML=html;
}
function qaFieldRow(id,val,label,onInputCall){
  return '<input type="text" id="'+id+'" value="'+esc(val||'')+'" placeholder="'+label+'" oninput="'+onInputCall+'" style="font-size:inherit;width:100%;box-sizing:border-box">';
}
function qaRenderQuestion(q,qi){
  var qLangs=LANGS.map(function(l){
    var k=langKey(l.id);
    return '<div style="margin-bottom:4px;font-size:11.5px">'+qaFieldRow('qa_q_'+qi+'_'+k,q.q[k],l.label,"qaSetQ("+qi+",'"+k+"',this.value)")+'</div>';
  }).join('');
  var choicesHtml=q.choices.map(function(c,ci){
    var cLangs=LANGS.map(function(l){
      var k=langKey(l.id);
      return '<div style="margin-bottom:3px;font-size:11px">'+qaFieldRow('qa_c_'+qi+'_'+ci+'_'+k,c[k],l.label,"qaSetChoice("+qi+","+ci+",'"+k+"',this.value)")+'</div>';
    }).join('');
    return '<div style="display:flex;gap:8px;align-items:flex-start;margin-bottom:6px;padding:6px;border-radius:6px;background:'+(q.answer===ci?'rgba(74,222,154,.1)':'transparent')+'">'
      +'<label style="display:flex;align-items:center;gap:4px;font-size:11px;color:var(--tx-second);white-space:nowrap;padding-top:4px"><input type="radio" name="qa_ans_'+qi+'" '+(q.answer===ci?'checked':'')+' onchange="qaSetAnswer('+qi+','+ci+')"> 정답</label>'
      +'<div style="flex:1">'+cLangs+'</div>'
    +'</div>';
  }).join('');
  return '<div class="apf-card" id="qa_card_'+qi+'" style="margin-bottom:14px">'
    +'<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px">'
      +'<b style="font-size:12px">문항 '+(qi+1)+'</b>'
      +'<div style="display:flex;gap:6px">'
        +'<button class="btn sm" id="qa_translate_btn_'+qi+'" onclick="qaTranslateAll('+qi+')">🌐 한국어 기준 전체 번역</button>'
        +'<button class="btn sm red" onclick="qaDeleteQ('+qi+')">🗑 삭제</button>'
      +'</div>'
    +'</div>'
    +'<div style="margin-bottom:10px">'+qLangs+'</div>'
    +choicesHtml
  +'</div>';
}
