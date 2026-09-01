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
function orgType(id){return ORG_TYPES.find(function(o){return o.id===id;})||ORG_TYPES[0];}
function visitStatus(id){return VISIT_STATUS.find(function(v){return v.id===id;})||VISIT_STATUS[0];}
function trainee(id){return S.trainees.find(function(t){return t.id===id;});}
function levelDef(n){return S.levels.find(function(l){return l.level===Number(n);});}

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
        return;
      }
    }
  }catch(e){}
  FIELDS.forEach(function(f){S[f]=deepCopy(DEF[f]);});
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
  fetch(url,{method:'POST',headers:{'Content-Type':'text/plain'},body:JSON.stringify(body)})
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
  fetch(url+'?action=load')
    .then(function(r){if(!r.ok)throw new Error('HTTP '+r.status);return r.json();})
    .then(function(data){
      if(data.error)throw new Error(data.error);
      FIELDS.forEach(function(f){
        if(data[f]!==undefined&&(Array.isArray(data[f])?data[f].length:true))S[f]=data[f];
      });
      if(!S.levels.length)S.levels=deepCopy(DEF_LEVELS);
      if(!S.modules.length)S.modules=deepCopy(DEF_MODULES);
      if(!S.checklistItems.length)S.checklistItems=deepCopy(DEF_CHECKLIST);
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
function mw(inner,wide){document.getElementById('mc').innerHTML='<div class="mover" onmousedown="if(event.target===this)cm()"><div class="modal'+(wide?' wide':'')+'">'+inner+'</div></div>';}
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
var _activeTab='apply';
function switchTab(tab){
  _activeTab=tab;
  ['apply','schedule','trainee','course','history','prelearn'].forEach(function(t){
    document.getElementById('view_'+t).style.display=(t===tab)?'flex':'none';
    document.getElementById('tab_'+t).className='tab-btn'+(t===tab?' on':'');
    var tools=document.getElementById('tools_'+t);
    if(tools)tools.style.display=(t===tab)?'flex':'none';
  });
  if(tab==='apply')renderApplyTab();
  if(tab==='schedule')renderScheduleTab();
  if(tab==='trainee')renderTraineeTab();
  if(tab==='course')renderCourseTab();
  if(tab==='history')renderHistoryTab();
  if(tab==='prelearn')renderPrelearnTab();
}
function renderAll(){
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
  loadData();
  switchTab('apply');
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
});
