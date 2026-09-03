/* ═══════════════════════════════════════════
   👤 대상자별 이수 현황
═══════════════════════════════════════════ */
var TR={orgFilter:'all',country:'all',search:''};

function renderTraineeTab(){
  var wrap=document.getElementById('tr_wrap');
  if(!wrap)return;
  if(!S.trainees.length){
    wrap.innerHTML='<div class="empty">등록된 교육 대상자가 없습니다.<br><br>상단 "+ 대상자 등록" 버튼으로 첫 대상자를 등록하세요.</div>';
    return;
  }
  var list=S.trainees.filter(function(t){
    if(TR.orgFilter!=='all'&&t.orgType!==TR.orgFilter)return false;
    if(TR.country!=='all'&&t.country!==TR.country)return false;
    if(TR.search){
      var hay=(t.name+' '+(t.org||'')+' '+(t.position||'')).toLowerCase();
      if(hay.indexOf(TR.search.toLowerCase())<0)return false;
    }
    return true;
  }).sort(function(a,b){return a.name<b.name?-1:1;});

  var byCountry={};
  S.trainees.forEach(function(t){byCountry[t.country||'기타']=(byCountry[t.country||'기타']||0)+1;});
  var cards='<div class="sum-card"><div class="sum-n">'+S.trainees.length+'</div><div class="sum-l">전체 대상자</div></div>'
    +ORG_TYPES.map(function(o){
      var n=S.trainees.filter(function(t){return t.orgType===o.id;}).length;
      return '<div class="sum-card"><div class="sum-n" style="color:'+o.color+'">'+n+'</div><div class="sum-l">'+esc(o.label)+'</div></div>';
    }).join('')
    +'<div class="sum-card"><div class="sum-n">'+Object.keys(byCountry).length+'</div><div class="sum-l">진출 국가/지역 수</div></div>';

  var rows=list.map(function(t){
    var ot=orgType(t.orgType);
    var curLv=currentApprovedLevel(t.id);
    var visits=traineeVisits(t.id);
    var lastVisit=visits.length?visits[visits.length-1]:null;
    return '<tr onclick="openTraineeDetail(\''+t.id+'\')">'
      +'<td><b>'+esc(t.name)+'</b></td>'
      +'<td><span class="grpbadge" style="background:'+ot.color+'">'+esc(ot.label)+'</span></td>'
      +'<td>'+esc(t.org||'-')+'</td>'
      +'<td>'+esc(t.country||'-')+(t.region?(' · '+esc(t.region)):'')+'</td>'
      +'<td>'+esc(t.position||'-')+'</td>'
      +'<td>'+[0,1,2,3].map(function(lv){return levelChip(t.id,lv);}).join('')+'</td>'
      +'<td>'+(curLv>=0?('<span class="lv-cur-badge">Level '+curLv+' 승인</span>'):'<span class="lv-cur-badge none">미승인</span>')+'</td>'
      +'<td>'+(lastVisit?esc(lastVisit.startDate+' ~ '+lastVisit.endDate):'-')+'</td>'
      +'<td onclick="event.stopPropagation()"><button class="btn sm" onclick="openTraineeModal(\''+t.id+'\')">편집</button> <button class="btn sm red" onclick="deleteTrainee(\''+t.id+'\')">삭제</button></td>'
    +'</tr>';
  }).join('');

  wrap.innerHTML='<div class="sum-row">'+cards+'</div>'
    +'<div class="tbl-wrap"><table class="dtbl"><thead><tr>'
      +'<th>이름</th><th>구분</th><th>소속</th><th>국가/지역</th><th>직책</th>'
      +'<th>Level 진행률 (L0 · L1 · L2 · L3)</th><th>현재 승인 Level</th><th>최근 방문</th><th>관리</th>'
    +'</tr></thead><tbody>'+rows+'</tbody></table></div>';
}
function levelChip(traineeId,level){
  var prog=levelProgress(traineeId,level);
  var appr=approvalOf(traineeId,level);
  var cls='lvchip';
  if(appr&&appr.status==='approved')cls+=' done';
  else if(prog.pct===100)cls+=' wait';
  else if(prog.pct>0)cls+=' going';
  return '<span class="'+cls+'" title="Level '+level+' · '+prog.done+'/'+prog.total+' ('+prog.pct+'%)">L'+level+' '+prog.pct+'%</span>';
}
function trFilterOrg(id){TR.orgFilter=id;renderTraineeTab();}
function trFilterCountry(v){TR.country=v;renderTraineeTab();}
function trSearch(v){TR.search=v;renderTraineeTab();}

/* ── 대상자 등록/수정 ── */
function openTraineeModal(id,afterSave){
  var t=id?trainee(id):{id:'',name:'',orgType:'branch',org:'',country:'한국',region:'',position:'',task:'',contact:'',email:'',visitCategory:'new',priorLevel:'',experienceYears:'',equipment:'',note:''};
  mw('<div class="mtit">'+(id?'대상자 정보 수정':'+ 대상자 등록')+'</div>'
    +'<div class="fr">'
      +'<div class="fg"><label class="fl">이름</label><input type="text" id="t_name" value="'+esc(t.name)+'"></div>'
      +'<div class="fg"><label class="fl">소속 구분</label><input type="text" id="t_orgtype" list="orgTypeDatalistAdmin" value="'+esc(orgType(t.orgType).label)+'" placeholder="예: 해외지사, Agent, 고객사, 자사 신입사원 등"><datalist id="orgTypeDatalistAdmin">'+ORG_TYPES.map(function(o){return '<option value="'+esc(o.label)+'">';}).join('')+'</datalist></div>'
    +'</div>'
    +'<div class="fr">'
      +'<div class="fg"><label class="fl">소속명 (지사/Agent/고객사)</label><input type="text" id="t_org" value="'+esc(t.org)+'"></div>'
      +'<div class="fg"><label class="fl">국가</label><select id="t_country">'+COUNTRIES.map(function(c){return '<option value="'+c+'"'+(t.country===c?' selected':'')+'>'+c+'</option>';}).join('')+'</select></div>'
    +'</div>'
    +'<div class="fr">'
      +'<div class="fg"><label class="fl">세부 지역 (선택)</label><input type="text" id="t_region" value="'+esc(t.region||'')+'"></div>'
      +'<div class="fg"><label class="fl">직책/직급</label><input type="text" id="t_position" value="'+esc(t.position||'')+'"></div>'
    +'</div>'
    +'<div class="fg"><label class="fl">담당 업무</label><input type="text" id="t_task" value="'+esc(t.task||'')+'"></div>'
    +'<div class="fr">'
      +'<div class="fg"><label class="fl">연락처</label><input type="text" id="t_contact" value="'+esc(t.contact||'')+'"></div>'
      +'<div class="fg"><label class="fl">이메일</label><input type="text" id="t_email" value="'+esc(t.email||'')+'"></div>'
    +'</div>'
    +'<div class="fr" style="grid-template-columns:1fr 1fr 1fr">'
      +'<div class="fg"><label class="fl">교육 설비</label><select id="t_equipment"><option value="">-</option>'+EQUIPMENT_LIST.map(function(e){return '<option value="'+e.id+'"'+(t.equipment===e.id?' selected':'')+'>'+esc(e.name)+'</option>';}).join('')+'</select></div>'
      +'<div class="fg"><label class="fl">방문 구분</label><select id="t_visitcat">'+VISIT_CATS.map(function(v){return '<option value="'+v.id+'"'+(t.visitCategory===v.id?' selected':'')+'>'+v.label+'</option>';}).join('')+'</select></div>'
      +'<div class="fg"><label class="fl">현 업무 경력(년)</label><input type="text" id="t_exp" value="'+esc(t.experienceYears||'')+'"></div>'
    +'</div>'
    +'<div class="fg"><label class="fl">비고</label><input type="text" id="t_note" value="'+esc(t.note||'')+'"></div>'
    +'<div class="mfoot">'
      +(id?'<button class="btn sm red" onclick="deleteTrainee(\''+id+'\')" style="margin-right:auto">삭제</button>':'')
      +'<button class="btn sm" onclick="cm()">취소</button>'
      +'<button class="btn sm pri" onclick="saveTrainee('+jarg(id)+','+(afterSave?'true':'false')+')">저장</button>'
    +'</div>');
  window._trAfterSave=afterSave;
}
function saveTrainee(id,hasCallback){
  var name=document.getElementById('t_name').value.trim();
  if(!name){alert('이름을 입력해주세요.');return;}
  var rec={
    id:id||uid('tr'),name:name,
    orgType:document.getElementById('t_orgtype').value.trim(),
    org:document.getElementById('t_org').value.trim(),
    country:document.getElementById('t_country').value,
    region:document.getElementById('t_region').value.trim(),
    position:document.getElementById('t_position').value.trim(),
    task:document.getElementById('t_task').value.trim(),
    contact:document.getElementById('t_contact').value.trim(),
    email:document.getElementById('t_email').value.trim(),
    visitCategory:document.getElementById('t_visitcat').value,
    experienceYears:document.getElementById('t_exp').value.trim(),
    equipment:document.getElementById('t_equipment').value,
    note:document.getElementById('t_note').value.trim()
  };
  if(id){
    var i=S.trainees.findIndex(function(x){return x.id===id;});
    S.trainees[i]=Object.assign({},S.trainees[i],rec);
  }else S.trainees.push(rec);
  saveData();cm();
  if(hasCallback&&window._trAfterSave)window._trAfterSave(rec.id);
  renderTraineeTab();
}
function deleteTrainee(id){
  if(!confirm('이 대상자와 관련된 방문 일정·이수 기록을 모두 삭제할까요?'))return;
  S.trainees=S.trainees.filter(function(t){return t.id!==id;});
  S.visits=S.visits.filter(function(v){return v.traineeId!==id;});
  S.completions=S.completions.filter(function(c){return c.traineeId!==id;});
  S.approvals=S.approvals.filter(function(a){return a.traineeId!==id;});
  saveData();cm();renderTraineeTab();
}

/* ── 대상자 상세: 사전학습 + Level별 체크리스트 + 승인 서명 ── */
var _detailOpenLevel=0;
function openTraineeDetail(id,openLevel){
  var t=trainee(id);
  if(!t)return;
  window._curDetailTrainee=id;
  if(openLevel!=null)_detailOpenLevel=openLevel;
  var ot=orgType(t.orgType);
  var pre=checklistFor(0,'pre').concat(checklistFor(1,'pre'));
  var preRows=pre.map(function(it){return preItemRow(t.id,it);}).join('');

  var levelSections=[0,1,2,3].map(function(lv){return levelSection(t.id,lv);}).join('');

  mw('<div class="mtit">'+esc(t.name)+' <span class="grpbadge" style="background:'+ot.color+'">'+esc(ot.label)+'</span> <span style="color:var(--tx-second);font-size:12px;font-weight:400">'+esc(t.org||'')+' · '+esc(t.country||'')+'</span></div>'
    +'<div class="td-section"><div class="td-sectitle">사전 선행학습 (Level 0~1, 방문 전 자가학습)</div>'
      +renderPrelearnSummary(t)
      +'<table class="dtbl sm"><thead><tr><th style="width:60px">Level</th><th>학습 항목</th><th style="width:70px">이수</th><th style="width:120px">학습일자</th><th>비고</th></tr></thead><tbody>'+preRows+'</tbody></table>'
    +'</div>'
    +levelSections
    +'<div class="mfoot"><button class="btn sm" onclick="cm()">닫기</button></div>',true);
}
/* 온라인 사전학습(prelearn) 기록을 이름·소속으로 매칭해 이 대상자의 이수 현황 화면에 요약으로 보여준다 */
function renderPrelearnSummary(t){
  if(typeof findPrelearnRecord!=='function')return '';
  var rec=findPrelearnRecord(t.name,t.org);
  if(!rec){
    return '<div class="dbox" style="margin-bottom:10px;font-size:11.5px;color:var(--tx-second)">온라인 사전학습 기록 없음 (이름·소속 일치 기준 — 교육 신청서 등록 시 자동 발송된 링크로 학습을 완료하면 여기에 표시됩니다)</div>';
  }
  var courses=rec.courses||{};
  var eqIds=Object.keys(courses);
  if(!eqIds.length){
    return '<div class="dbox" style="margin-bottom:10px;font-size:11.5px;color:var(--tx-second)">온라인 사전학습을 시작했지만 아직 진행한 설비가 없습니다.</div>';
  }
  var rows=eqIds.map(function(eq){
    var course=courses[eq];
    var total=plSectionsFor(eq).length,passed=plPassedCount(course,eq);
    var pct=total?Math.round(passed/total*100):0;
    var qs=plQuizStats(course,eq);
    var verdict=!course.completedAt
      ?('<span style="color:var(--tx-second)">진행중</span>')
      :(plCourseAllPassed(course,eq)?'<span style="color:#4ade9a">✅ 인증기준 충족('+qs.pct+'%)</span>':'<span style="color:#e07070">⚠ 인증기준 미충족('+qs.pct+'%) · Level0 재교육 필요</span>');
    return '<div style="display:flex;align-items:center;gap:8px;margin-bottom:6px;font-size:12px">'
      +'<b style="min-width:110px">'+esc(equipmentName(eq,'ko'))+'</b>'
      +'<div class="lv-progbar" style="width:100px"><div class="lv-progfill" style="width:'+pct+'%"></div></div>'
      +'<span style="min-width:40px">'+passed+'/'+total+'</span>'
      +'<span style="min-width:80px;color:var(--tx-second)">퀴즈 '+qs.correct+'/'+qs.total+'</span>'+verdict
    +'</div>';
  }).join('');
  return '<div class="dbox" style="margin-bottom:10px">'+rows
    +'<button class="btn sm pri" style="margin-top:6px" onclick="applyPrelearnToChecklist(\''+t.id+'\')">✅ 사전학습 결과 반영</button>'
  +'</div>';
}
function applyPrelearnToChecklist(traineeId){
  var t=trainee(traineeId);
  if(!t)return;
  var rec=findPrelearnRecord(t.name,t.org);
  if(!rec){alert('매칭되는 온라인 사전학습 기록을 찾을 수 없습니다 (이름·소속 기준).');return;}
  var courses=rec.courses||{};
  var passedEq=Object.keys(courses).find(function(eq){return courses[eq].completedAt&&plCourseAllPassed(courses[eq],eq);});
  if(!passedEq){alert('전체 섹션을 통과한 사전학습 기록이 없습니다. 방문 중 Level 0부터 교육을 진행해야 합니다.');return;}
  if(!confirm('사전학습('+equipmentName(passedEq,'ko')+') 통과 결과를 이수 체크리스트(Level 0~1, 7개 항목)에 반영할까요?'))return;
  var pre=checklistFor(0,'pre').concat(checklistFor(1,'pre'));
  var today=todayStr();
  pre.forEach(function(it){
    var c=completionOf(traineeId,it.id);
    if(!c){c={id:uid('cp'),traineeId:traineeId,itemId:it.id,done:'N',trainer:'',date:'',note:''};S.completions.push(c);}
    c.done='Y';c.date=today;c.note='온라인 사전학습 자동반영 ('+equipmentName(passedEq,'ko')+')';
  });
  saveData();
  window._curDetailTrainee=traineeId;
  openTraineeDetail(traineeId);
  renderTraineeTab();
}
/* Level 0 전용 — 온사이트 별도 페이지(exam.html)에서 응시한 필기평가 결과를 보여주고,
   합격 시 "os6: Level0 필기평가 합격" 항목에 반영하는 버튼을 제공한다 */
function renderExamBlock(traineeId){
  var t=trainee(traineeId);
  if(!t)return '';
  var eq=t.equipment;
  var results=(typeof findExamResults==='function'&&eq)?findExamResults(t.name,t.org,eq):[];
  var latest=results[0];
  var latestHtml=latest
    ?('<div style="font-size:12px;margin-bottom:6px">최근 응시: '+latest.score+'/'+latest.total+' ('+latest.pct+'%) · '+esc((latest.submittedAt||'').replace('T',' ').slice(0,16))+' — '+(latest.passed?'<span style="color:#4ade9a">합격</span>':'<span style="color:#e07070">미달</span>')+'</div>')
    :('<div style="font-size:12px;color:var(--tx-second);margin-bottom:6px">'+(eq?'응시 기록 없음':'대상자 정보에 교육 설비가 설정되어 있지 않습니다 — 대상자 수정에서 먼저 지정해주세요.')+'</div>');
  return '<div class="td-approve" style="margin-bottom:12px">'
    +'<div style="font-weight:600;font-size:12px;margin-bottom:8px">📝 필기평가 (온사이트 별도 페이지 — 해당 설비 전체 문항 출제)</div>'
    +latestHtml
    +'<div style="display:flex;gap:8px;flex-wrap:wrap">'
    +(eq?('<button class="btn sm" onclick="event.stopPropagation();openExamLinkInfo(\''+traineeId+'\')">🔗 필기평가 링크</button>'):'')
    +(latest?('<button class="btn sm pri" onclick="event.stopPropagation();applyExamResultToChecklist(\''+traineeId+'\')">✅ 필기평가 결과 반영</button>'):'')
    +'</div>'
  +'</div>';
}
function openExamLinkInfo(traineeId){
  var t=trainee(traineeId);
  if(!t||!t.equipment){alert('대상자 정보에 교육 설비를 먼저 설정해주세요.');return;}
  var url=location.origin+location.pathname.replace(/index\.html$/,'').replace(/\/$/,'')+'/exam.html?eq='+encodeURIComponent(t.equipment);
  mw('<div class="mtit">📝 '+esc(t.name)+' 필기평가 링크</div>'
    +'<div style="font-size:12px;color:var(--tx-second);margin-bottom:12px">방문 당일 현장 PC에서 이 주소를 열어 감독 하에 응시하게 하세요. '+esc(equipmentName(t.equipment,'ko'))+'에 등록된 전체 문항이 출제됩니다 (섹션별 랜덤 1~2개가 아닌 전체 문항).</div>'
    +'<div class="fg"><input type="text" value="'+esc(url)+'" readonly onclick="this.select()" style="font-size:11px"></div>'
    +'<div class="mfoot"><button class="btn sm" onclick="cm()">닫기</button><button class="btn sm pri" onclick="sendExamEmailFor(\''+traineeId+'\')">📧 이메일로 전송</button></div>');
}
/* 필기평가 링크를 대상자 이메일로 발송한다 — 사전학습 링크 발송과 동일하게 신청서 백엔드(MailApp)를 사용한다 */
function sendExamEmailFor(traineeId){
  var t=trainee(traineeId);
  if(!t||!t.equipment)return;
  if(!t.email){alert('대상자 이메일이 등록되어 있지 않습니다. 대상자 정보 수정에서 먼저 입력해주세요.');return;}
  var url=(typeof getApplySheetsUrl==='function')?getApplySheetsUrl():'';
  if(!url){alert('신청서 Sheets가 연결되어 있지 않아 이메일을 보낼 수 없습니다. 상단 "⚙ 신청서 Sheets 설정"을 먼저 확인해주세요.');return;}
  var link=location.origin+location.pathname.replace(/index\.html$/,'').replace(/\/$/,'')+'/exam.html?eq='+encodeURIComponent(t.equipment);
  fetch(url,{method:'POST',headers:{'Content-Type':'text/plain'},body:JSON.stringify({
    action:'sendExamEmail',to:t.email,traineeName:t.name,equipmentName:equipmentName(t.equipment,'ko'),link:link
  })})
    .then(function(r){return r.text();})
    .then(function(text){
      var data;try{data=JSON.parse(text);}catch(e){data={error:'invalid response'};}
      if(data.error){alert('발송 실패: '+data.error);return;}
      alert('대상자 이메일('+t.email+')로 필기평가 링크를 발송했습니다.');
    })
    .catch(function(err){alert('발송 실패: '+err.message);});
}
function applyExamResultToChecklist(traineeId){
  var t=trainee(traineeId);
  if(!t)return;
  var results=findExamResults(t.name,t.org,t.equipment);
  var latest=results[0];
  if(!latest){alert('응시 기록이 없습니다.');return;}
  if(!latest.passed){alert('최근 응시 결과가 합격 기준(80%)에 미달합니다 ('+latest.pct+'%). 반영할 수 없습니다.');return;}
  if(!confirm('필기평가 결과('+latest.score+'/'+latest.total+', '+latest.pct+'%)를 "Level0 필기평가 합격" 항목에 반영할까요?'))return;
  var c=completionOf(traineeId,'os6');
  if(!c){c={id:uid('cp'),traineeId:traineeId,itemId:'os6',done:'N',trainer:'',date:'',note:''};S.completions.push(c);}
  c.done='Y';c.date=todayStr();c.note='온라인 필기평가 자동반영 ('+latest.score+'/'+latest.total+', '+latest.pct+'%)';
  saveData();
  window._curDetailTrainee=traineeId;
  openTraineeDetail(traineeId,0);
  renderTraineeTab();
}
function preItemRow(traineeId,it){
  var c=completionOf(traineeId,it.id)||{};
  return '<tr>'
    +'<td>L'+it.level+'</td>'
    +'<td>'+esc(it.item)+'</td>'
    +'<td><input type="checkbox" '+(c.done==='Y'?'checked':'')+' onchange="setPreDone(\''+traineeId+'\',\''+it.id+'\',this.checked)"></td>'
    +'<td><input type="date" value="'+esc(c.date||'')+'" onchange="setCompField(\''+traineeId+'\',\''+it.id+'\',\'date\',this.value)"></td>'
    +'<td><input type="text" value="'+esc(c.note||'')+'" onchange="setCompField(\''+traineeId+'\',\''+it.id+'\',\'note\',this.value)"></td>'
  +'</tr>';
}
function levelSection(traineeId,level){
  var items=checklistFor(level,'onsite');
  var prog=levelProgress(traineeId,level);
  var appr=approvalOf(traineeId,level);
  var lv=levelDef(level)||{};
  var roles=(APPROVAL_ROLES.find(function(r){return r.level===level;})||{roles:[]}).roles;
  var open=(_detailOpenLevel===level);

  var rows=items.map(function(it){
    var c=completionOf(traineeId,it.id)||{};
    return '<tr>'
      +'<td>'+esc(it.module)+'</td>'
      +'<td>'+esc(it.item)+'</td>'
      +'<td><input type="checkbox" '+(c.done==='Y'?'checked':'')+' onchange="setOnsiteDone(\''+traineeId+'\',\''+it.id+'\','+level+',this.checked)"></td>'
      +'<td><input type="text" placeholder="트레이너" value="'+esc(c.trainer||'')+'" onchange="setCompField(\''+traineeId+'\',\''+it.id+'\',\'trainer\',this.value)"></td>'
      +'<td><input type="date" value="'+esc(c.date||'')+'" onchange="setCompField(\''+traineeId+'\',\''+it.id+'\',\'date\',this.value)"></td>'
      +'<td><input type="text" value="'+esc(c.note||'')+'" onchange="setCompField(\''+traineeId+'\',\''+it.id+'\',\'note\',this.value)"></td>'
    +'</tr>';
  }).join('');

  var signRows=roles.map(function(r){
    var v=appr?(appr[r]||''):'';
    return '<div class="fg"><label class="fl">'+ROLE_LBL[r]+'</label><input type="text" id="appr_'+level+'_'+r+'" value="'+esc(v)+'" placeholder="서명/이름"></div>';
  }).join('');

  var followUp='';
  if(level===3){
    followUp='<div class="fg" style="grid-column:1/-1"><label class="fl">귀임 후 3개월 Follow-Up</label>'
      +'<div style="display:flex;gap:10px;align-items:center;flex-wrap:wrap">'
      +'<label class="chkrow"><input type="checkbox" id="appr_3_followUpDone" '+(appr&&appr.followUpDone?'checked':'')+'>Follow-Up 완료</label>'
      +'<input type="date" id="appr_3_followUpDate" value="'+esc(appr&&appr.followUpDate||'')+'" style="width:150px">'
      +'<input type="text" id="appr_3_followUpNote" value="'+esc(appr&&appr.followUpNote||'')+'" placeholder="Follow-Up 결과 비고" style="flex:1;min-width:160px">'
      +'</div></div>';
  }

  var statusBadge=appr&&appr.status==='approved'
    ?('<span class="lv-cur-badge">승인 완료 · '+esc(appr.approvalDate||'')+'</span>'
      +'<button class="btn sm gsh" onclick="event.stopPropagation();openCertificate(\''+traineeId+'\','+level+')">🎓 이수증 발급</button>')
    :(prog.pct===100?'<span class="lv-cur-badge wait">전 항목 이수 · 승인 대기</span>':'<span class="lv-cur-badge none">진행중</span>');

  return '<div class="td-section">'
    +'<div class="td-sectitle" onclick="toggleLevelSection('+level+')" style="cursor:pointer;display:flex;align-items:center;gap:8px">'
      +'<span>'+(open?'▾':'▸')+'</span><span>Level '+level+' · '+esc(lv.title||'')+'</span>'
      +'<div class="lv-progbar" style="flex:1;max-width:160px"><div class="lv-progfill" style="width:'+prog.pct+'%"></div></div>'
      +'<span style="font-size:11px;color:var(--tx-second)">'+prog.done+'/'+prog.total+' ('+prog.pct+'%)</span>'
      +statusBadge
    +'</div>'
    +(open?(
      '<table class="dtbl sm"><thead><tr><th>모듈</th><th>세부 이수 항목</th><th style="width:60px">이수</th><th style="width:110px">확인 트레이너</th><th style="width:120px">확인일자</th><th>비고</th></tr></thead><tbody>'+rows+'</tbody></table>'
      +(level===0?renderExamBlock(traineeId):'')
      +'<div class="td-approve">'
        +'<div class="fr" style="grid-template-columns:repeat('+Math.max(roles.length,1)+',1fr)">'+signRows+'</div>'
        +'<div class="fr">'
          +'<div class="fg"><label class="fl">승인일자</label><input type="date" id="apprdate_'+level+'" value="'+esc(appr&&appr.approvalDate||todayStr())+'"></div>'
          +followUp
        +'</div>'
        +'<div style="text-align:right"><button class="btn sm pri" onclick="approveLevel(\''+traineeId+'\','+level+')">Level '+level+' 승인 저장</button></div>'
      +'</div>'
    ):'')
  +'</div>';
}
function toggleLevelSection(level){
  _detailOpenLevel=(_detailOpenLevel===level)?-1:level;
  var t=window._curDetailTrainee;
  if(t)openTraineeDetail(t);
}
/* 이수 체크를 하면 확인일자를 체크한 날짜로 자동 기입하고, 체크를 풀면 날짜도 함께 비운다 */
function setPreDone(traineeId,itemId,checked){
  setDoneWithDate(traineeId,itemId,checked);
  window._curDetailTrainee=traineeId;
  openTraineeDetail(traineeId);
}
function setOnsiteDone(traineeId,itemId,level,checked){
  setDoneWithDate(traineeId,itemId,checked);
  window._curDetailTrainee=traineeId;
  openTraineeDetail(traineeId,level);
}
function setDoneWithDate(traineeId,itemId,checked){
  window._curDetailTrainee=traineeId;
  var c=completionOf(traineeId,itemId);
  if(!c){
    c={id:uid('cp'),traineeId:traineeId,itemId:itemId,done:'N',trainer:'',date:'',note:''};
    S.completions.push(c);
  }
  c.done=checked?'Y':'N';
  c.date=checked?todayStr():'';
  saveData();
  renderTraineeTab();
}
function setCompField(traineeId,itemId,field,value){
  window._curDetailTrainee=traineeId;
  var c=completionOf(traineeId,itemId);
  if(!c){
    c={id:uid('cp'),traineeId:traineeId,itemId:itemId,done:'N',trainer:'',date:'',note:''};
    S.completions.push(c);
  }
  c[field]=value;
  saveData();
  renderTraineeTab();
}
function approveLevel(traineeId,level){
  var roles=(APPROVAL_ROLES.find(function(r){return r.level===level;})||{roles:[]}).roles;
  var rec=approvalOf(traineeId,level);
  if(!rec){rec={id:uid('ap'),traineeId:traineeId,level:level};S.approvals.push(rec);}
  roles.forEach(function(r){
    var el=document.getElementById('appr_'+level+'_'+r);
    if(el)rec[r]=el.value.trim();
  });
  var missing=roles.filter(function(r){return !rec[r];});
  if(missing.length){
    if(!confirm('서명(승인자) 미입력 항목이 있습니다 ('+missing.map(function(r){return ROLE_LBL[r];}).join(', ')+'). 그래도 저장할까요?'))return;
  }
  rec.approvalDate=document.getElementById('apprdate_'+level).value||todayStr();
  rec.status='approved';
  if(level===3){
    var fEl=document.getElementById('appr_3_followUpDone');
    rec.followUpDone=fEl?fEl.checked:false;
    rec.followUpDate=(document.getElementById('appr_3_followUpDate')||{}).value||'';
    rec.followUpNote=(document.getElementById('appr_3_followUpNote')||{}).value||'';
  }
  saveData();
  window._curDetailTrainee=traineeId;
  openTraineeDetail(traineeId,level);
  renderTraineeTab();
}
