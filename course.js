/* ═══════════════════════════════════════════
   📚 교육 과정(커리큘럼) 관리
═══════════════════════════════════════════ */
function renderCourseTab(){
  var wrap=document.getElementById('course_wrap');
  if(!wrap)return;

  var levelRows=S.levels.slice().sort(function(a,b){return a.level-b.level;}).map(function(l){
    return '<tr>'
      +'<td><b>Level '+l.level+'</b></td>'
      +'<td>'+esc(l.title)+'</td>'
      +'<td style="font-size:11px;color:var(--tx-second)">'+esc(l.target)+'</td>'
      +'<td style="font-size:11px">'+esc(l.competency)+'</td>'
      +'<td style="font-size:11px;color:var(--tx-second)">'+esc(l.evalMethod)+'</td>'
      +'<td>'+esc(l.duration)+'</td>'
      +'<td><button class="btn sm admin-only-btn" style="display:none" onclick="openLevelModal(\''+l.id+'\')">편집</button></td>'
    +'</tr>';
  }).join('');

  var hoursByLevel={};
  S.modules.forEach(function(m){hoursByLevel[m.level]=(hoursByLevel[m.level]||0)+Number(m.hours||0);});
  var moduleRows=S.modules.slice().sort(function(a,b){return a.level-b.level||a.code.localeCompare(b.code);}).map(function(m){
    return '<tr>'
      +'<td><b>'+esc(m.code)+'</b></td>'
      +'<td>'+esc(m.name)+'</td>'
      +'<td style="font-size:11px;color:var(--tx-second)">'+esc(m.detail)+'</td>'
      +'<td>Level '+m.level+'</td>'
      +'<td>'+esc(m.method)+'</td>'
      +'<td>'+m.hours+'h</td>'
      +'<td><div style="display:flex;flex-wrap:wrap;gap:4px">'+(function(){
          var mat=(typeof COURSE_MATERIALS!=='undefined')?COURSE_MATERIALS[m.code]:null;
          if(!mat)return '<span style="color:var(--tx-faint);font-size:11px">준비중</span>';
          return Object.keys(mat).map(function(eq){
            return '<button class="btn sm" onclick="openMaterialViewer(\''+m.code+'\',\''+eq+'\')">'+esc(CM_EQUIP_LABEL[eq]||eq.toUpperCase())+'</button>';
          }).join('');
        })()+'</div></td>'
      +'<td style="font-size:11px;color:var(--tx-second)">'+esc(m.resources||'')+'</td>'
      +'<td><button class="btn sm admin-only-btn" style="display:none" onclick="openModuleModal(\''+m.id+'\')">편집</button> <button class="btn sm red admin-only-btn" style="display:none" onclick="deleteModule(\''+m.id+'\')">삭제</button></td>'
    +'</tr>';
  }).join('');
  var hoursSummary=[0,1,2,3].map(function(lv){
    var h=hoursByLevel[lv]||0;
    return '<div class="sum-card"><div class="sum-n">'+h+'h</div><div class="sum-l">Level '+lv+' 합계 ('+(h/8).toFixed(1)+'일)</div></div>';
  }).join('');

  var moduleOptLabel={};
  S.modules.forEach(function(m){moduleOptLabel[m.id]=m.code+'. '+m.name;});
  var phaseLbl={pre:'사전학습',onsite:'온사이트'};
  var ciRows=S.checklistItems.slice().sort(function(a,b){
    return (a.phase===b.phase?0:(a.phase==='pre'?-1:1))||a.level-b.level||a.order-b.order;
  }).map(function(it){
    var modLbl=it.moduleId?(moduleOptLabel[it.moduleId]||'(연결된 모듈 없음)'):'';
    return '<tr>'
      +'<td>'+(phaseLbl[it.phase]||it.phase)+'</td>'
      +'<td>Level '+it.level+'</td>'
      +'<td style="font-size:11px">'+esc(it.module)+(modLbl?'<br><span style="color:var(--tx-second)">🔗 '+esc(modLbl)+'</span>':'')+'</td>'
      +'<td style="font-size:11px">'+esc(it.item)+'</td>'
      +'<td>'+it.order+'</td>'
      +'<td><button class="btn sm admin-only-btn" style="display:none" onclick="openChecklistItemModal(\''+it.id+'\')">편집</button> <button class="btn sm red admin-only-btn" style="display:none" onclick="deleteChecklistItem(\''+it.id+'\')">삭제</button></td>'
    +'</tr>';
  }).join('');

  var evalRows=S.levels.slice().sort(function(a,b){return a.level-b.level;}).map(function(l){
    var fb=evalCritFallback(l.level);
    var pass=(l.evalPass!=null&&l.evalPass!=='')?l.evalPass:fb.pass;
    var evaluator=(l.evalEvaluator!=null&&l.evalEvaluator!=='')?l.evalEvaluator:fb.evaluator;
    var retry=(l.evalRetry!=null&&l.evalRetry!=='')?l.evalRetry:fb.retry;
    return '<tr><td>Level '+l.level+'</td><td style="font-size:11px">'+esc(l.evalMethod||'')+'</td><td style="font-size:11px">'+esc(pass||'')+'</td><td style="font-size:11px">'+esc(evaluator||'')+'</td><td style="font-size:11px;color:var(--tx-second)">'+esc(retry||'')+'</td></tr>';
  }).join('');

  wrap.innerHTML=
    '<div class="td-section"><div class="td-sectitle">Level 0~3 정의</div>'
      +'<table class="dtbl sm"><thead><tr><th style="width:60px">Level</th><th style="width:170px">교육 목표</th><th style="width:150px">주요 대상</th><th>핵심 역량</th><th style="width:160px">평가 방법</th><th style="width:90px">예상 소요기간</th><th style="width:60px"></th></tr></thead><tbody>'+levelRows+'</tbody></table>'
    +'</div>'
    +'<div class="td-section">'
      +'<div class="td-sectitle" style="display:flex;justify-content:space-between;align-items:center">'
        +'<span>커리큘럼 매트릭스 (교육 모듈)</span>'
        +'<button class="btn sm pri admin-only-btn" style="display:none" onclick="openModuleModal(null)">+ 모듈 추가</button>'
      +'</div>'
      +'<div class="sum-row">'+hoursSummary+'</div>'
      +'<table class="dtbl sm"><thead><tr><th style="width:36px">No</th><th style="width:160px">모듈명</th><th>세부 교육내용</th><th style="width:70px">Level</th><th style="width:90px">교육방법</th><th style="width:60px">시간</th><th style="width:120px">교육 자료</th><th style="width:140px">필요 자료/장비</th><th style="width:110px"></th></tr></thead><tbody>'+moduleRows+'</tbody></table>'
    +'</div>'
    +'<div class="td-section">'
      +'<div class="td-sectitle" style="display:flex;justify-content:space-between;align-items:center">'
        +'<span>이수 체크리스트 관리 (사전학습·온사이트)</span>'
        +'<button class="btn sm pri admin-only-btn" style="display:none" onclick="openChecklistItemModal(null)">+ 항목 추가</button>'
      +'</div>'
      +'<div class="dbox" style="margin-bottom:10px;font-size:11.5px;color:var(--tx-second)">대상자별 이수 현황 모달에 표시되는 개별 체크 항목입니다. 🔗로 표시된 항목은 커리큘럼 매트릭스의 모듈과 연결되어 있어 그 모듈을 편집하면 모듈명·Level(및 항목이 1개뿐이면 문구까지)이 자동으로 따라 바뀝니다.</div>'
      +'<table class="dtbl sm"><thead><tr><th style="width:70px">구분</th><th style="width:70px">Level</th><th style="width:160px">모듈</th><th>세부 이수 항목</th><th style="width:50px">순서</th><th style="width:110px"></th></tr></thead><tbody>'+ciRows+'</tbody></table>'
    +'</div>'
    +'<div class="td-section"><div class="td-sectitle">Level별 평가 기준 및 재평가 규정 (참고)</div>'
      +'<table class="dtbl sm"><thead><tr><th style="width:60px">Level</th><th>평가 방법</th><th>합격 기준</th><th style="width:150px">평가자</th><th>불합격 시 조치</th></tr></thead><tbody>'+evalRows+'</tbody></table>'
    +'</div>';

  applyAdminModeUI(); // innerHTML로 새로 삽입된 편집/삭제 버튼(.admin-only-btn)에 현재 모드를 즉시 반영
}

/* S.levels에 evalPass/evalEvaluator/evalRetry가 없는 구버전 캐시 데이터를 위한 대체값 */
function evalCritFallback(level){return EVAL_CRITERIA.find(function(e){return e.level===level;})||{};}
function openLevelModal(id){
  var l=S.levels.find(function(x){return x.id===id;});
  if(!l)return;
  var fb=evalCritFallback(l.level);
  var pass=(l.evalPass!=null&&l.evalPass!=='')?l.evalPass:(fb.pass||'');
  var evaluator=(l.evalEvaluator!=null&&l.evalEvaluator!=='')?l.evalEvaluator:(fb.evaluator||'');
  var retry=(l.evalRetry!=null&&l.evalRetry!=='')?l.evalRetry:(fb.retry||'');
  mw('<div class="mtit">Level '+l.level+' 정의 편집</div>'
    +'<div class="fg"><label class="fl">교육 목표</label><input type="text" id="l_title" value="'+esc(l.title)+'"></div>'
    +'<div class="fg"><label class="fl">주요 대상</label><input type="text" id="l_target" value="'+esc(l.target)+'"></div>'
    +'<div class="fg"><label class="fl">핵심 역량</label><textarea id="l_comp" rows="3">'+esc(l.competency)+'</textarea></div>'
    +'<div class="fg"><label class="fl">평가 방법</label><input type="text" id="l_eval" value="'+esc(l.evalMethod)+'"></div>'
    +'<div class="fg"><label class="fl">예상 소요기간</label><input type="text" id="l_dur" value="'+esc(l.duration)+'"></div>'
    +'<div class="td-sectitle" style="margin:14px 0 6px;font-size:12px">하단 "Level별 평가 기준" 표에 반영되는 항목</div>'
    +'<div class="fg"><label class="fl">합격 기준</label><input type="text" id="l_pass" value="'+esc(pass)+'"></div>'
    +'<div class="fg"><label class="fl">평가자</label><input type="text" id="l_evaluator" value="'+esc(evaluator)+'"></div>'
    +'<div class="fg"><label class="fl">불합격 시 조치(재평가 규정)</label><input type="text" id="l_retry" value="'+esc(retry)+'"></div>'
    +'<div class="mfoot"><button class="btn sm" onclick="cm()">취소</button><button class="btn sm pri" onclick="saveLevel(\''+id+'\')">저장</button></div>');
}
function saveLevel(id){
  var l=S.levels.find(function(x){return x.id===id;});
  l.title=document.getElementById('l_title').value.trim();
  l.target=document.getElementById('l_target').value.trim();
  l.competency=document.getElementById('l_comp').value.trim();
  l.evalMethod=document.getElementById('l_eval').value.trim();
  l.duration=document.getElementById('l_dur').value.trim();
  l.evalPass=document.getElementById('l_pass').value.trim();
  l.evalEvaluator=document.getElementById('l_evaluator').value.trim();
  l.evalRetry=document.getElementById('l_retry').value.trim();
  saveData();cm();renderCourseTab();
}

function openModuleModal(id){
  var m=id?S.modules.find(function(x){return x.id===id;}):{id:'',code:'',name:'',detail:'',level:0,method:'이론',hours:4,resources:''};
  mw('<div class="mtit">'+(id?'모듈 편집':'+ 모듈 추가')+'</div>'
    +'<div class="fr">'
      +'<div class="fg"><label class="fl">코드</label><input type="text" id="m_code" value="'+esc(m.code)+'" maxlength="3"></div>'
      +'<div class="fg"><label class="fl">Level</label><select id="m_level">'+[0,1,2,3].map(function(n){return '<option value="'+n+'"'+(m.level===n?' selected':'')+'>Level '+n+'</option>';}).join('')+'</select></div>'
    +'</div>'
    +'<div class="fg"><label class="fl">모듈명</label><input type="text" id="m_name" value="'+esc(m.name)+'"></div>'
    +'<div class="fg"><label class="fl">세부 교육내용</label><textarea id="m_detail" rows="2">'+esc(m.detail)+'</textarea></div>'
    +'<div class="fr">'
      +'<div class="fg"><label class="fl">교육방법</label><select id="m_method"><option'+(m.method==='이론'?' selected':'')+'>이론</option><option'+(m.method==='실습'?' selected':'')+'>실습</option><option'+(m.method==='이론+실습'?' selected':'')+'>이론+실습</option><option'+(m.method==='이론+시연'?' selected':'')+'>이론+시연</option></select></div>'
      +'<div class="fg"><label class="fl">소요시간(h)</label><input type="text" id="m_hours" value="'+m.hours+'"></div>'
    +'</div>'
    +'<div class="fg"><label class="fl">필요 자료/장비</label><input type="text" id="m_res" value="'+esc(m.resources||'')+'"></div>'
    +'<div class="mfoot">'
      +(id?'<button class="btn sm red" onclick="deleteModule(\''+id+'\')" style="margin-right:auto">삭제</button>':'')
      +'<button class="btn sm" onclick="cm()">취소</button><button class="btn sm pri" onclick="saveModule('+jarg(id)+')">저장</button>'
    +'</div>');
}
function saveModule(id){
  var rec={
    id:id||uid('md'),
    code:document.getElementById('m_code').value.trim().toUpperCase(),
    name:document.getElementById('m_name').value.trim(),
    detail:document.getElementById('m_detail').value.trim(),
    level:Number(document.getElementById('m_level').value),
    method:document.getElementById('m_method').value,
    hours:Number(document.getElementById('m_hours').value)||0,
    resources:document.getElementById('m_res').value.trim()
  };
  if(!rec.name){alert('모듈명을 입력해주세요.');return;}
  if(id){
    var i=S.modules.findIndex(function(x){return x.id===id;});
    S.modules[i]=rec;
    syncChecklistFromModule(rec);
  }else S.modules.push(rec);
  saveData();cm();renderCourseTab();
}
/* syncChecklistFromModule()는 app.js에 정의되어 있다(데이터 로드 시 자동 재동기화와 공유하기 위함) */
function deleteModule(id){
  if(!confirm('이 모듈을 삭제할까요?'))return;
  S.modules=S.modules.filter(function(m){return m.id!==id;});
  saveData();cm();renderCourseTab();
}

/* ── 이수 체크리스트(사전학습/온사이트) 항목 관리 ── */
function openChecklistItemModal(id){
  var it=id?S.checklistItems.find(function(x){return x.id===id;}):null;
  if(id&&!it)return;
  if(!it)it={id:'',phase:'onsite',level:2,moduleId:'',module:'',item:'',order:S.checklistItems.filter(function(x){return x.phase==='onsite'&&x.level===2;}).length};
  var modOpts='<option value=""'+(!it.moduleId?' selected':'')+'>(연결 안 됨 — 모듈 표시명 직접 입력)</option>'
    +S.modules.slice().sort(function(a,b){return a.code.localeCompare(b.code);}).map(function(m){
      return '<option value="'+m.id+'"'+(it.moduleId===m.id?' selected':'')+'>'+esc(m.code+'. '+m.name)+'</option>';
    }).join('');
  mw('<div class="mtit">'+(id?'이수 체크리스트 항목 편집':'+ 이수 체크리스트 항목 추가')+'</div>'
    +'<div class="fr">'
      +'<div class="fg"><label class="fl">구분</label><select id="ci_phase"><option value="pre"'+(it.phase==='pre'?' selected':'')+'>사전학습(pre)</option><option value="onsite"'+(it.phase==='onsite'?' selected':'')+'>온사이트(onsite)</option></select></div>'
      +'<div class="fg"><label class="fl">Level (사전학습은 0~1만 사용)</label><select id="ci_level">'+[0,1,2,3].map(function(n){return '<option value="'+n+'"'+(it.level===n?' selected':'')+'>Level '+n+'</option>';}).join('')+'</select></div>'
    +'</div>'
    +'<div class="fg"><label class="fl">모듈 연결</label><select id="ci_moduleId">'+modOpts+'</select></div>'
    +'<div class="fg"><label class="fl">모듈 표시명 (연결 안 할 경우에만 직접 입력 — 연결했으면 저장 시 그 모듈의 현재 이름으로 자동 대체됩니다)</label><input type="text" id="ci_module" value="'+esc(it.module||'')+'"></div>'
    +'<div class="fg"><label class="fl">세부 이수 항목</label><textarea id="ci_item" rows="2">'+esc(it.item||'')+'</textarea></div>'
    +'<div class="fg"><label class="fl">정렬 순서 (같은 구분·Level 내에서 낮을수록 위에 표시)</label><input type="text" id="ci_order" value="'+(it.order!=null?it.order:0)+'"></div>'
    +'<div class="mfoot">'
      +(id?'<button class="btn sm red" onclick="deleteChecklistItem(\''+id+'\')" style="margin-right:auto">삭제</button>':'')
      +'<button class="btn sm" onclick="cm()">취소</button><button class="btn sm pri" onclick="saveChecklistItem('+jarg(id)+')">저장</button>'
    +'</div>');
}
function saveChecklistItem(id){
  var moduleId=document.getElementById('ci_moduleId').value||null;
  var rec={
    id:id||uid('ci'),
    no:0,
    phase:document.getElementById('ci_phase').value,
    level:Number(document.getElementById('ci_level').value),
    moduleId:moduleId,
    module:document.getElementById('ci_module').value.trim(),
    item:document.getElementById('ci_item').value.trim(),
    order:Number(document.getElementById('ci_order').value)||0
  };
  if(!rec.item){alert('세부 이수 항목 내용을 입력해주세요.');return;}
  var linkedModule=moduleId?S.modules.find(function(x){return x.id===moduleId;}):null;
  if(linkedModule)rec.module=linkedModule.name;
  else if(!rec.module){alert('모듈을 연결하지 않을 경우 모듈 표시명을 입력해주세요.');return;}
  if(id){
    var i=S.checklistItems.findIndex(function(x){return x.id===id;});
    rec.no=S.checklistItems[i].no;
    S.checklistItems[i]=rec;
  }else{
    rec.no=S.checklistItems.filter(function(x){return x.phase===rec.phase;}).length+1;
    S.checklistItems.push(rec);
  }
  if(linkedModule)syncChecklistFromModule(linkedModule);
  saveData();cm();renderCourseTab();
}
function deleteChecklistItem(id){
  if(!confirm('이 이수 체크리스트 항목을 삭제할까요? (이미 기록된 이수 체크 데이터도 함께 삭제됩니다)'))return;
  S.checklistItems=S.checklistItems.filter(function(x){return x.id!==id;});
  S.completions=S.completions.filter(function(c){return c.itemId!==id;});
  saveData();cm();renderCourseTab();
}
