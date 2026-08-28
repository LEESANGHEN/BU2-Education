/* ═══════════════════════════════════════════
   🧑‍🎓 사전학습 현황 (관리자 — 설비별 학습자 진도/퀴즈 결과 조회)
═══════════════════════════════════════════ */
var PRELEARN_LS_KEY='edu_prelearn_sheets_url';
var PLA={list:[],equipFilter:'all'};

var ADMIN_COURSE_CHAPTERS={
  smtv:(typeof PRELEARN_CHAPTERS_SMTV!=='undefined')?PRELEARN_CHAPTERS_SMTV:null,
  nbga:(typeof PRELEARN_CHAPTERS_NBGA!=='undefined')?PRELEARN_CHAPTERS_NBGA:null
};

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
      if(cb)cb();
    })
    .catch(function(err){console.warn('사전학습 불러오기 실패:',err.message);if(cb)cb();});
}
function refreshPrelearn(){loadPrelearn(function(){renderPrelearnTab();});}
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
