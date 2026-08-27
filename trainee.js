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
  var t=id?trainee(id):{id:'',name:'',orgType:'branch',org:'',country:'한국',region:'',position:'',task:'',contact:'',email:'',visitCategory:'new',priorLevel:'',experienceYears:'',note:''};
  mw('<div class="mtit">'+(id?'대상자 정보 수정':'+ 대상자 등록')+'</div>'
    +'<div class="fr">'
      +'<div class="fg"><label class="fl">이름</label><input type="text" id="t_name" value="'+esc(t.name)+'"></div>'
      +'<div class="fg"><label class="fl">소속 구분</label><select id="t_orgtype">'+ORG_TYPES.map(function(o){return '<option value="'+o.id+'"'+(t.orgType===o.id?' selected':'')+'>'+o.label+'</option>';}).join('')+'</select></div>'
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
    +'<div class="fr">'
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
    orgType:document.getElementById('t_orgtype').value,
    org:document.getElementById('t_org').value.trim(),
    country:document.getElementById('t_country').value,
    region:document.getElementById('t_region').value.trim(),
    position:document.getElementById('t_position').value.trim(),
    task:document.getElementById('t_task').value.trim(),
    contact:document.getElementById('t_contact').value.trim(),
    email:document.getElementById('t_email').value.trim(),
    visitCategory:document.getElementById('t_visitcat').value,
    experienceYears:document.getElementById('t_exp').value.trim(),
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
      +'<table class="dtbl sm"><thead><tr><th style="width:60px">Level</th><th>학습 항목</th><th style="width:70px">이수</th><th style="width:120px">학습일자</th><th>비고</th></tr></thead><tbody>'+preRows+'</tbody></table>'
    +'</div>'
    +levelSections
    +'<div class="mfoot"><button class="btn sm" onclick="cm()">닫기</button></div>',true);
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
    ?'<span class="lv-cur-badge">승인 완료 · '+esc(appr.approvalDate||'')+'</span>'
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
function setPreDone(traineeId,itemId,checked){
  setCompField(traineeId,itemId,'done',checked?'Y':'N');
}
function setOnsiteDone(traineeId,itemId,level,checked){
  setCompField(traineeId,itemId,'done',checked?'Y':'N');
  window._curDetailTrainee=traineeId;
  openTraineeDetail(traineeId,level);
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
