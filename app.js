/* ═══════════════════════════════════════════
   상태 / 유틸
═══════════════════════════════════════════ */
var S={trainees:[],visits:[],levels:[],modules:[],checklistItems:[],completions:[],approvals:[]};

function uid(p){return p+'_'+Date.now().toString(36)+Math.random().toString(36).slice(2,7);}
/* onclick="fn('+jarg(id)+')" 형태로 쓰면 id가 null이어도 문자열 "null"로 뭉개지지 않고 실제 null이 전달된다 */
function jarg(id){return id?("'"+id+"'"):'null';}
function deepCopy(o){return JSON.parse(JSON.stringify(o));}

/* ═══════════════════════════════════════════
   관리자 모드 (BU2 Portal과 동일한 방식 — 제목 Ctrl+클릭으로 전환)
   Sheets 설정류 버튼은 관리자 모드일 때만 노출한다.
═══════════════════════════════════════════ */
var ADMIN_MODE_KEY='edu_admin_mode';
function isAdminMode(){try{return localStorage.getItem(ADMIN_MODE_KEY)==='1';}catch(e){return false;}}
function setAdminMode(v){try{localStorage.setItem(ADMIN_MODE_KEY,v?'1':'0');}catch(e){}}
function toggleAdminMode(e){
  if(!e||(!e.ctrlKey&&!e.metaKey))return;
  var next=!isAdminMode();
  setAdminMode(next);
  applyAdminModeUI();
  alert(next?'🔓 관리자 모드로 전환되었습니다.':'🔒 일반 모드로 전환되었습니다.');
}
function applyAdminModeUI(){
  var on=isAdminMode();
  document.querySelectorAll('.admin-only-btn').forEach(function(el){el.style.display=on?'':'none';});
}
function esc(s){return String(s==null?'':s).replace(/[&<>"']/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c];});}
function normDate(s){
  if(!s)return '';
  if(/^\d{4}-\d{2}-\d{2}$/.test(String(s).trim()))return String(s).trim();
  var d=new Date(s);
  if(isNaN(d.getTime()))return s;
  return d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0');
}
function todayStr(){return normDate(new Date());}
function pd(s){var d=new Date(s);d.setHours(0,0,0,0);return d;}
/* id('branch' 등 기존 코드값) 또는 자유 입력 텍스트(자사 신입사원 등) 둘 다 지원한다.
   알려진 소속 유형이 아니면 입력한 텍스트를 그대로 라벨로 보여준다(기본값으로 잘못 표시하지 않기 위함) */
function orgType(v){return ORG_TYPES.find(function(o){return o.id===v||o.label===v;})||{id:v||'',label:v||'-',color:'#6b6b8a'};}
function visitStatus(id){return VISIT_STATUS.find(function(v){return v.id===id;})||VISIT_STATUS[0];}
function trainee(id){return S.trainees.find(function(t){return t.id===id;});}
function levelDef(n){return S.levels.find(function(l){return l.level===Number(n);});}

/* 기존에 저장된 데이터(Google Sheet 캐시 등)에는 checklistItems에 moduleId가 없을 수 있으므로,
   불러올 때마다 DEF_CHECKLIST를 기준으로 누락된 moduleId만 채워 넣는다(이미 값이 있으면 건드리지 않음).
   이 연결이 있어야 교육 과정 관리 탭에서 모듈을 편집했을 때 대상자별 이수 현황 모달에도 반영된다.
   반환값 true면 데이터가 실제로 바뀐 것이므로 호출부에서 saveData()로 반영해야 한다. */
function ensureChecklistModuleIds(){
  var defById={};
  DEF_CHECKLIST.forEach(function(d){defById[d.id]=d.moduleId;});
  var changed=false;
  (S.checklistItems||[]).forEach(function(it){
    if(!('moduleId' in it)&&defById.hasOwnProperty(it.id)){it.moduleId=defById[it.id];changed=true;}
  });
  return changed;
}
/* 모듈 하나에 연결된(moduleId 일치) 체크리스트 항목들을 그 모듈의 현재 name/detail/level로 맞춘다.
   교육 과정 관리에서 모듈을 편집·저장할 때(course.js saveModule)와, 데이터를 불러올 때마다(즉시 반영되도록)
   모두 호출한다. 연결된 항목이 정확히 1개인 모듈은 항목명(module)뿐 아니라 세부 문구(item)도 모듈의
   세부 교육내용과 동일하게 맞춘다 — 그 모듈을 그대로 대표하는 항목이라 문구를 그대로 반영해도 안전하다.
   연결된 항목이 여러 개인 모듈(A/B/C/D 등)은 각 항목이 서로 다른 세부 작업을 나타내므로 item 문구는
   건드리지 않고 module 표시명·level만 맞춘다. 반환값 true면 실제로 값이 바뀐 것이다. */
function syncChecklistFromModule(m){
  var linked=S.checklistItems.filter(function(it){return it.moduleId===m.id;});
  var changed=false;
  linked.forEach(function(it){
    if(it.module!==m.name){it.module=m.name;changed=true;}
    if(it.level!==m.level){it.level=m.level;changed=true;}
    if(linked.length===1&&it.item!==m.detail){it.item=m.detail;changed=true;}
  });
  return changed;
}
function syncAllChecklistFromModules(){
  var changed=false;
  (S.modules||[]).forEach(function(m){if(syncChecklistFromModule(m))changed=true;});
  return changed;
}

/* ── 조회 헬퍼 ── */
function checklistFor(level,phase){
  return S.checklistItems.filter(function(c){return c.level===Number(level)&&c.phase===phase;})
    .sort(function(a,b){return a.order-b.order;});
}
function completionOf(traineeId,itemId){
  return S.completions.find(function(c){return c.traineeId===traineeId&&c.itemId===itemId;});
}
function approvalOf(traineeId,level){
  return S.approvals.find(function(a){return a.traineeId===traineeId&&a.level===Number(level);});
}
function levelProgress(traineeId,level){
  var items=checklistFor(level,'onsite');
  if(!items.length)return {done:0,total:0,pct:0};
  var done=items.filter(function(it){var c=completionOf(traineeId,it.id);return c&&c.done==='Y';}).length;
  return {done:done,total:items.length,pct:Math.round(done/items.length*100)};
}
function currentApprovedLevel(traineeId){
  var lv=-1;
  S.approvals.forEach(function(a){
    if(a.traineeId===traineeId&&a.status==='approved'&&a.level>lv)lv=a.level;
  });
  return lv;
}
function traineeVisits(traineeId){
  return S.visits.filter(function(v){return v.traineeId===traineeId;})
    .sort(function(a,b){return a.startDate<b.startDate?-1:1;});
}

/* ═══════════════════════════════════════════
   데이터 저장/로드 (Google Apps Script + Google Sheets)
═══════════════════════════════════════════ */
var SHEETS_LS_KEY='edu_sheets_url';
var CACHE_KEY='edu_data_cache';
var FIELDS=['trainees','visits','levels','modules','checklistItems','completions','approvals'];
// ↓↓↓ Code.gs를 새 Google Sheet에 배포한 뒤 나오는 /exec URL로 교체하세요. (INSTRUCTIONS.md 참고)
var DEFAULT_SHEETS_URL='https://script.google.com/macros/s/AKfycbwl8JLDnO7Q2n249zqhKmS5OLRjSzhcO1Vcl_aTWNRc6d-7TwHz0k-7FmEY4m7GyzYSFw/exec';
(function(){try{if(DEFAULT_SHEETS_URL&&!localStorage.getItem(SHEETS_LS_KEY))localStorage.setItem(SHEETS_LS_KEY,DEFAULT_SHEETS_URL);}catch(e){}})();
function getSheetsUrl(){try{return localStorage.getItem(SHEETS_LS_KEY)||'';}catch(e){return '';}}
function setSheetsUrl(u){try{localStorage.setItem(SHEETS_LS_KEY,u);}catch(e){}}

function loadData(){
  try{
    var cached=localStorage.getItem(CACHE_KEY);
    if(cached){
      var d=JSON.parse(cached);
      if(d){
        FIELDS.forEach(function(f){S[f]=(d[f]!==undefined)?d[f]:deepCopy(DEF[f]);});
        if(!S.levels.length)S.levels=deepCopy(DEF_LEVELS);
        if(!S.modules.length)S.modules=deepCopy(DEF_MODULES);
        if(!S.checklistItems.length)S.checklistItems=deepCopy(DEF_CHECKLIST);
        ensureChecklistModuleIds();
        syncAllChecklistFromModules();
        return;
      }
    }
  }catch(e){}
  FIELDS.forEach(function(f){S[f]=deepCopy(DEF[f]);});
  ensureChecklistModuleIds();
  syncAllChecklistFromModules();
}
function saveCache(){
  try{
    var snap={};FIELDS.forEach(function(f){snap[f]=S[f];});
    localStorage.setItem(CACHE_KEY,JSON.stringify(snap));
  }catch(e){}
}
function saveData(){
  saveCache();
  var url=getSheetsUrl();
  if(!url||location.protocol==='file:')return;
  var body={action:'save'};FIELDS.forEach(function(f){body[f]=S[f];});
  authedPost(url,body)
    .then(function(r){return r.json();})
    .then(function(data){
      if(data.error){console.warn('저장 실패:',data.error);updateConnStatus('err');}
      else updateConnStatus('ok');
    })
    .catch(function(err){console.warn('저장 실패:',err.message);updateConnStatus('err');});
}
function loadFromSheets(callback){
  var url=getSheetsUrl();
  if(!url||location.protocol==='file:'){if(callback)callback();return;}
  var led=document.getElementById('connLed'),txt=document.getElementById('connTxt');
  if(led){led.className='conn-led chk';txt.textContent='동기화 중...';}
  authedGet(url+'?action=load')
    .then(function(r){if(!r.ok)throw new Error('HTTP '+r.status);return r.json();})
    .then(function(data){
      if(data.error)throw new Error(data.error);
      FIELDS.forEach(function(f){
        if(data[f]!==undefined&&(Array.isArray(data[f])?data[f].length:true))S[f]=data[f];
      });
      if(!S.levels.length)S.levels=deepCopy(DEF_LEVELS);
      if(!S.modules.length)S.modules=deepCopy(DEF_MODULES);
      if(!S.checklistItems.length)S.checklistItems=deepCopy(DEF_CHECKLIST);
      /* moduleId 백필과, 커리큘럼 매트릭스 모듈 내용과의 동기화로 실제 데이터가 바뀐 경우,
         캐시에만 남기지 않고 Sheet에도 즉시 반영해 다음 사용자·기기에서도 같은 값을 보도록 한다
         (loadData의 캐시 전용 경로에서는 저장하지 않음 — 네트워크 데이터보다 먼저 그려지는
         임시 화면이라 여기서만 확정 저장한다) */
      var idsFilled=ensureChecklistModuleIds();
      var synced=syncAllChecklistFromModules();
      if(idsFilled||synced)saveData();
      saveCache();
      if(led){led.className='conn-led ok';txt.textContent='연결 정상';}
      if(callback)callback();
    })
    .catch(function(err){
      console.warn('불러오기 실패:',err.message);
      if(led){led.className='conn-led err';txt.textContent='연결 실패';}
      if(callback)callback();
    });
}
function updateConnStatus(state){
  var led=document.getElementById('connLed'),txt=document.getElementById('connTxt');
  if(!led)return;
  if(state==='ok'){
    led.className='conn-led ok';
    var now=new Date();
    txt.textContent='저장됨 '+String(now.getHours()).padStart(2,'0')+':'+String(now.getMinutes()).padStart(2,'0');
  }else if(state==='err'){led.className='conn-led err';txt.textContent='저장 실패';}
}
function checkConn(){loadFromSheets(function(){renderAll();});}

function openSheetsSettings(){
  var cur=getSheetsUrl();
  mw('<div class="mtit">⚙ Sheets 설정</div>'
    +'<div style="font-size:12px;color:var(--tx-second);margin-bottom:12px">Apps Script 웹앱 URL을 입력하세요. (INSTRUCTIONS.md 참고)</div>'
    +'<div class="fg"><label class="fl">URL</label>'
    +'<input type="text" id="sheets_url" value="'+esc(cur)+'" style="font-size:11px" placeholder="https://script.google.com/macros/s/xxxx/exec"></div>'
    +'<div class="mfoot">'
    +'<button class="btn sm" onclick="cm()">취소</button>'
    +'<button class="btn sm pri" onclick="saveSheetsUrl()">저장</button>'
    +'</div>');
}
function saveSheetsUrl(){
  var u=document.getElementById('sheets_url').value.trim();
  if(!u){alert('URL을 입력해주세요.');return;}
  setSheetsUrl(u);cm();checkConn();
}

/* ═══════════════════════════════════════════
   모달 헬퍼
═══════════════════════════════════════════ */
/* 모달 바깥(배경) 클릭으로는 닫히지 않는다 — 각 모달 하단의 "닫기" 버튼(cm())으로만 닫을 수 있다 */
function mw(inner,wide){document.getElementById('mc').innerHTML='<div class="mover"><div class="modal'+(wide?' wide':'')+'">'+inner+'</div></div>';}
function cm(){document.getElementById('mc').innerHTML='';}

/* ═══════════════════════════════════════════
   테마
═══════════════════════════════════════════ */
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

/* ── 바로가기 드롭다운 ── */
function toggleShortcut(e){e.stopPropagation();document.getElementById('shortcutMenu').classList.toggle('open');}
document.addEventListener('click',function(e){
  var wrap=document.getElementById('shortcutWrap');
  if(wrap&&!wrap.contains(e.target))document.getElementById('shortcutMenu').classList.remove('open');
});

/* ═══════════════════════════════════════════
   탭 전환
═══════════════════════════════════════════ */
var _activeTab='home';
function switchTab(tab){
  _activeTab=tab;
  ['home','apply','schedule','trainee','course','history','prelearn'].forEach(function(t){
    document.getElementById('view_'+t).style.display=(t===tab)?'flex':'none';
    document.getElementById('tab_'+t).className='nav-item'+(t===tab?' on':'');
    var tools=document.getElementById('tools_'+t);
    if(tools)tools.style.display=(t===tab)?'flex':'none';
  });
  if(tab==='home')renderHomeTab();
  if(tab==='apply')renderApplyTab();
  if(tab==='schedule')renderScheduleTab();
  if(tab==='trainee')renderTraineeTab();
  if(tab==='course')renderCourseTab();
  if(tab==='history')renderHistoryTab();
  if(tab==='prelearn')renderPrelearnTab();
}
/* 홈 탭 — 로그인 직후 보이는 대시보드. 인사말/오늘 날짜, 신청 현황 요약 카드,
   다가오는 교육 일정, 빠른 작업 바로가기로 구성한다. 데이터는 각 탭이 이미 쓰는
   APPS.list/S.visits/S.trainees를 그대로 재사용하고, 새 데이터를 만들지 않는다. */
function homeUserLabel(){
  try{
    var u=firebase.auth().currentUser;
    if(u&&u.email)return u.email.split('@')[0];
  }catch(e){}
  return '관리자';
}
function renderHomeTab(){
  var wrap=document.getElementById('home_wrap');
  if(!wrap)return;
  var today=new Date();
  var dateLbl=today.getFullYear()+'년 '+(today.getMonth()+1)+'월 '+today.getDate()+'일';

  var counts={pending:0,registered:0,rejected:0};
  var appTotal=(typeof APPS!=='undefined'&&APPS.list)?APPS.list.length:0;
  if(typeof APPS!=='undefined'&&APPS.list)APPS.list.forEach(function(a){if(counts[a.status]!==undefined)counts[a.status]++;});

  var cards='<div class="sum-card" style="cursor:pointer" onclick="switchTab(\'apply\')"><div class="sum-n">'+appTotal+'</div><div class="sum-l">전체 신청</div></div>'
    +'<div class="sum-card" style="cursor:pointer" onclick="switchTab(\'apply\')"><div class="sum-n" style="color:#e0a838">'+counts.pending+'</div><div class="sum-l">대기중</div></div>'
    +'<div class="sum-card" style="cursor:pointer" onclick="switchTab(\'apply\')"><div class="sum-n" style="color:#4ade9a">'+counts.registered+'</div><div class="sum-l">등록완료</div></div>'
    +'<div class="sum-card" style="cursor:pointer" onclick="switchTab(\'apply\')"><div class="sum-n" style="color:#e07070">'+counts.rejected+'</div><div class="sum-l">반려</div></div>';

  var todayStr0=todayStr();
  var upcoming=(S.visits||[]).filter(function(v){return (v.endDate||v.startDate)>=todayStr0&&v.status!=='cancelled';})
    .sort(function(a,b){return a.startDate<b.startDate?-1:1;}).slice(0,5);
  var schedRows=upcoming.length?upcoming.map(function(v){
    var t=trainee(v.traineeId)||{};
    var st=visitStatus(v.status);
    var d=new Date(v.startDate);
    return '<div class="home-sched-row" style="cursor:pointer" onclick="switchTab(\'schedule\')">'
      +'<div class="home-sched-date"><div class="m">'+(d.getMonth()+1)+'월</div><div class="d">'+d.getDate()+'</div></div>'
      +'<div style="min-width:0;flex:1"><div style="font-size:12px;color:var(--tx-primary)">'+esc(t.name||'-')+' · Level '+(v.targetLevel||'-')+'</div>'
      +'<div style="font-size:11px;color:var(--tx-second)">'+esc(v.startDate)+' ~ '+esc(v.endDate||v.startDate)+'</div></div>'
      +'<span class="grpbadge" style="background:'+st.color+'">'+esc(st.label)+'</span>'
    +'</div>';
  }).join(''):'<div style="font-size:12px;color:var(--tx-dim);padding:8px 0">예정된 교육 일정이 없습니다.</div>';

  wrap.innerHTML='<div class="home-greet">안녕하세요, '+esc(homeUserLabel())+'님</div>'
    +'<div class="home-greet-sub">'+dateLbl+' · 대기중인 신청 '+counts.pending+'건이 있습니다</div>'
    +'<div class="sum-row" style="margin-top:16px">'+cards+'</div>'
    +'<div class="home-grid">'
      +'<div class="home-card"><div class="home-card-title">다가오는 교육 일정</div>'+schedRows+'</div>'
      +'<div class="home-card"><div class="home-card-title">빠른 작업</div>'
        +'<div class="home-quick-btn" onclick="openApplyLinkInfo()">🔗 신청서 링크 복사</div>'
        +'<div class="home-quick-btn" onclick="switchTab(\'schedule\');openVisitModal(null)">📅 교육 방문 등록</div>'
        +'<div class="home-quick-btn" onclick="switchTab(\'course\')" style="margin-bottom:0">📚 교육 자료 보기</div>'
      +'</div>'
    +'</div>';
}
function renderAll(){
  if(_activeTab==='home')renderHomeTab();
  if(_activeTab==='apply')renderApplyTab();
  renderScheduleTab();
  if(_activeTab==='trainee')renderTraineeTab();
  if(_activeTab==='course')renderCourseTab();
  if(_activeTab==='history')renderHistoryTab();
  if(_activeTab==='prelearn')renderPrelearnTab();
}

/* ═══════════════════════════════════════════
   시작
═══════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded',function(){
  initTheme();
  applyAdminModeUI();
});

/* 로그인(auth.js의 onAuthStateChanged)이 @intekplus.com 계정을 확인한 뒤에만 호출된다.
   인증 확인 전에 데이터를 불러오면 아직 게이트되지 않은 화면에 잠깐이라도 데이터가
   그려지거나, 백엔드가 idToken 없는 요청을 거부하는 시점에 빈 화면이 뜰 수 있어서
   기존 DOMContentLoaded 핸들러에서 이 부분만 분리했다. */
function startApp(){
  loadData();
  switchTab('home');
  loadFromSheets(function(){renderAll();});
  loadApplications(function(){renderAll();});
  // 대상자별 이수 현황(사전학습 연동 표시)에서 쓸 수 있도록 활성 탭과 무관하게 미리 불러온다
  if(typeof loadPrelearn==='function')loadPrelearn(function(){renderAll();});
  (function bgRefresh(){
    var url=getSheetsUrl();
    if(!url||location.protocol==='file:')return;
    setInterval(function(){
      var mc=document.getElementById('mc');
      if(mc&&mc.innerHTML&&mc.innerHTML.length>0)return;
      loadFromSheets(function(){renderAll();});
      loadApplications(function(){renderAll();});
    },5*60*1000);
  })();
}
