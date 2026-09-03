/* ═══════════════════════════════════════════
   📅 교육 일정 (방문 타임라인 · 월 단위 / 일 단위)
═══════════════════════════════════════════ */
var SCH=(function(){
  var d=new Date();
  return {statusFilter:VISIT_STATUS.map(function(v){return v.id;}),search:'',viewMode:'month',dayYear:d.getFullYear(),dayMonth:d.getMonth()};
})();

function renderScheduleTab(){
  var wrap=document.getElementById('sch_wrap');
  if(!wrap)return;
  var mBtn=document.getElementById('schViewMonthBtn'),dBtn=document.getElementById('schViewDayBtn'),nav=document.getElementById('schDayNav');
  if(mBtn)mBtn.classList.toggle('active',SCH.viewMode!=='day');
  if(dBtn)dBtn.classList.toggle('active',SCH.viewMode==='day');
  if(nav)nav.style.display=SCH.viewMode==='day'?'flex':'none';

  if(SCH.viewMode==='day'){renderScheduleDayView(wrap);return;}
  renderScheduleMonthView(wrap);
}

function schVisibleVisits(){
  return S.visits.filter(function(v){
    if(SCH.statusFilter.indexOf(v.status)<0)return false;
    if(SCH.search){
      var t=trainee(v.traineeId);
      var hay=((t?t.name+' '+t.org:'')+' '+(v.note||'')).toLowerCase();
      if(hay.indexOf(SCH.search.toLowerCase())<0)return false;
    }
    return true;
  });
}

function renderScheduleMonthView(wrap){
  var visits=schVisibleVisits();

  if(!S.visits.length){
    wrap.innerHTML='<div class="empty">등록된 교육 방문 일정이 없습니다.<br><br>상단 "+ 교육 방문 등록" 버튼으로 첫 일정을 등록하세요.</div>';
    return;
  }
  if(!visits.length){
    wrap.innerHTML='<div class="empty">조건에 맞는 일정이 없습니다.</div>';
    return;
  }

  var starts=visits.map(function(v){return pd(v.startDate).getTime();});
  var ends=visits.map(function(v){return pd(v.endDate||v.startDate).getTime();});
  var today=pd(todayStr()).getTime();
  var rangeStart=new Date(Math.min.apply(null,starts.concat([today-30*86400000])));
  var rangeEnd=new Date(Math.max.apply(null,ends.concat([today+120*86400000])));
  rangeStart.setDate(1);
  var totalDays=Math.round((rangeEnd-rangeStart)/86400000)+1;

  function pctOf(d){return Math.max(0,Math.min(100,(pd(d)-rangeStart)/86400000/totalDays*100));}

  // 월 헤더
  var months=[],cur=new Date(rangeStart);
  while(cur<=rangeEnd){
    months.push({label:(cur.getMonth()+1)+'월',left:pctOf(cur)});
    cur=new Date(cur.getFullYear(),cur.getMonth()+1,1);
  }
  // 주차 헤더(일요일 시작 기준 — 일 단위 보기의 주차 계산과 동일한 방식)
  var weekTicks=[],curW=new Date(rangeStart);
  curW.setDate(curW.getDate()-curW.getDay());
  while(curW<=rangeEnd){
    if(curW>=rangeStart){
      var firstOfM=new Date(curW.getFullYear(),curW.getMonth(),1);
      var wom=Math.ceil((curW.getDate()+firstOfM.getDay())/7);
      weekTicks.push({label:wom+'주',left:pctOf(curW)});
    }
    curW=new Date(curW.getFullYear(),curW.getMonth(),curW.getDate()+7);
  }
  var todayPct=pctOf(today);

  var rows=visits.sort(function(a,b){return a.startDate<b.startDate?-1:1;}).map(function(v){
    var t=trainee(v.traineeId)||{name:'(삭제된 대상자)',org:'',orgType:'branch'};
    var st=visitStatus(v.status);
    var ot=orgType(t.orgType);
    var left=pctOf(v.startDate),right=pctOf(v.endDate||v.startDate);
    var width=Math.max(right-left,0.6);
    var planLbl=PLAN_TYPES.find(function(p){return p.id===v.planType;});
    return '<div class="sch-row" onclick="openVisitModal(\''+v.id+'\')">'
      +'<div class="sch-fix">'
        +'<span class="grpbadge" style="background:'+ot.color+'">'+esc(ot.label)+'</span>'
        +'<div class="sch-name">'+esc(t.name)+'<span class="sch-org">'+esc(t.org||'')+'</span>'+(v.coordinatorName?('<span class="sch-coord">👤 '+esc(v.coordinatorName)+'</span>'):'')+'</div>'
      +'</div>'
      +'<div class="sch-track">'
        +'<div class="sch-bar" style="left:'+left+'%;width:'+width+'%;background:'+st.color+'" title="'+esc(t.name)+' · '+v.startDate+' ~ '+v.endDate+' · '+st.label+(v.coordinatorName?(' · 담당: '+esc(v.coordinatorName)):'')+'">'
          +'<span class="sch-barlbl">Lv'+(v.targetLevel!=null?v.targetLevel:'-')+' · '+esc(st.label)+(planLbl?(' · '+planLbl.id):'')+(v.coordinatorName?(' · 👤'+esc(v.coordinatorName)):'')+'</span>'
        +'</div>'
      +'</div>'
    +'</div>';
  }).join('');

  wrap.innerHTML=
    '<div class="sch-head">'
      +'<div class="sch-fix sch-headfix">대상자</div>'
      +'<div class="sch-track sch-headtrack">'
        +months.map(function(m){return '<div class="sch-monthtick" style="left:'+m.left+'%">'+m.label+'</div>';}).join('')
        +weekTicks.map(function(w){return '<div class="sch-weektick" style="left:'+w.left+'%">'+w.label+'</div>';}).join('')
        +(todayPct>=0&&todayPct<=100?'<div class="sch-todayline" style="left:'+todayPct+'%"></div>':'')
      +'</div>'
    +'</div>'
    +'<div class="sch-body">'+rows+'</div>';
}

/* ── 일 단위(캘린더) 보기 ── */
function schSetView(mode){SCH.viewMode=mode;renderScheduleTab();}
function schMoveMonth(delta){
  var d=new Date(SCH.dayYear,SCH.dayMonth+delta,1);
  SCH.dayYear=d.getFullYear();SCH.dayMonth=d.getMonth();
  renderScheduleTab();
}
function schGotoToday(){
  var d=new Date();
  SCH.dayYear=d.getFullYear();SCH.dayMonth=d.getMonth();
  renderScheduleTab();
}

function renderScheduleDayView(wrap){
  var y=SCH.dayYear,m=SCH.dayMonth;
  var navLbl=document.getElementById('schDayNavLbl');
  if(navLbl)navLbl.textContent=y+'년 '+(m+1)+'월';

  var visits=schVisibleVisits();
  var daysInMonth=new Date(y,m+1,0).getDate();
  var firstOfMonth=new Date(y,m,1);
  var lastOfMonth=new Date(y,m,daysInMonth);
  var gridStart=new Date(y,m,1-firstOfMonth.getDay());
  var gridEnd=new Date(y,m,daysInMonth+(6-lastOfMonth.getDay()));

  var weeks=[],cur=new Date(gridStart);
  while(cur<=gridEnd){
    var row=[];
    for(var i=0;i<7;i++){row.push(new Date(cur));cur.setDate(cur.getDate()+1);}
    weeks.push(row);
  }
  var todayS=todayStr();
  var dowLbl=['일','월','화','수','목','금','토'];

  var rowsHtml=weeks.map(function(row,wi){
    var cellsHtml=row.map(function(d){
      var ds=normDate(d);
      var inMonth=d.getMonth()===m;
      var dow=d.getDay();
      var isHoliday=KR_HOLIDAYS.indexOf(ds)>=0;
      var numCls=(dow===6?'sat':((dow===0||isHoliday)?'sun':''));
      var dayVisits=visits.filter(function(v){return ds>=v.startDate&&ds<=(v.endDate||v.startDate);});
      var chips=dayVisits.map(function(v){
        var t=trainee(v.traineeId)||{name:'(삭제된 대상자)'};
        var st=(v.dayStatus&&v.dayStatus[ds])||'';
        return '<span class="sch-cal-chip'+(st?(' '+st):'')+'" title="'+esc(t.name)+' · 클릭할 때마다 미표시→진행(초록)→미진행(노랑) 순으로 바뀝니다" onclick="event.stopPropagation();toggleVisitDay(\''+v.id+'\',\''+ds+'\')">'+esc(t.name)+'</span>';
      }).join('');
      return '<td class="'+(inMonth?'':'sch-cal-out')+(ds===todayS?' sch-cal-today':'')+'">'
        +'<div class="sch-cal-daynum '+numCls+'">'+d.getDate()+'</div>'
        +chips
      +'</td>';
    }).join('');
    return '<tr><td class="sch-cal-wk">'+(wi+1)+'주</td>'+cellsHtml+'</tr>';
  }).join('');

  wrap.innerHTML='<table class="sch-cal"><thead><tr><th></th>'
    +dowLbl.map(function(l,i){return '<th style="'+(i===6?'color:#3d8bff':(i===0?'color:#e04040':''))+'">'+l+'</th>';}).join('')
    +'</tr></thead><tbody>'+rowsHtml+'</tbody></table>';
}

function toggleVisitDay(visitId,dateStr){
  var v=S.visits.find(function(x){return x.id===visitId;});
  if(!v)return;
  if(!v.dayStatus)v.dayStatus={};
  var cur=v.dayStatus[dateStr];
  if(cur==='done')v.dayStatus[dateStr]='skip';
  else if(cur==='skip')delete v.dayStatus[dateStr];
  else v.dayStatus[dateStr]='done';
  saveData();
  renderScheduleTab();
}

function toggleSchStatus(id,checked){
  var i=SCH.statusFilter.indexOf(id);
  if(checked&&i<0)SCH.statusFilter.push(id);
  if(!checked&&i>=0)SCH.statusFilter.splice(i,1);
  renderScheduleTab();
}
function schSearch(v){SCH.search=v;renderScheduleTab();}

/* ── 교육 방문 등록/수정 모달 ── */
function openVisitModal(id){
  var v=id?S.visits.find(function(x){return x.id===id;}):{id:'',traineeId:'',planType:'A',startDate:todayStr(),endDate:todayStr(),targetLevel:1,confirmedLevel:'',status:'planned',note:''};
  var traineeOpts=S.trainees.slice().sort(function(a,b){return a.name<b.name?-1:1;})
    .map(function(t){return '<option value="'+t.id+'"'+(v.traineeId===t.id?' selected':'')+'>'+esc(t.name)+' ('+esc(t.org||'')+')</option>';}).join('');
  mw('<div class="mtit">'+(id?'교육 방문 수정':'+ 교육 방문 등록')+'</div>'
    +'<div class="fg"><label class="fl">대상자</label>'
      +'<div style="display:flex;gap:6px">'
      +'<select id="v_trainee" style="flex:1">'+(traineeOpts||'<option value="">대상자를 먼저 등록하세요</option>')+'</select>'
      +'<button class="btn sm" onclick="cm();openTraineeModal(null,function(newId){openVisitModal(null);setTimeout(function(){document.getElementById(\'v_trainee\').value=newId;},0);})">+ 신규</button>'
      +'</div></div>'
    +'<div class="fr">'
      +'<div class="fg"><label class="fl">방문 시작일</label><input type="date" id="v_start" value="'+v.startDate+'"></div>'
      +'<div class="fg"><label class="fl">방문 종료일</label><input type="date" id="v_end" value="'+v.endDate+'"></div>'
    +'</div>'
    +'<div class="fr">'
      +'<div class="fg"><label class="fl">Plan</label><select id="v_plan">'+PLAN_TYPES.map(function(p){return '<option value="'+p.id+'"'+(v.planType===p.id?' selected':'')+'>'+p.label+'</option>';}).join('')+'</select></div>'
      +'<div class="fg"><label class="fl">상태</label><select id="v_status">'+VISIT_STATUS.map(function(s){return '<option value="'+s.id+'"'+(v.status===s.id?' selected':'')+'>'+s.label+'</option>';}).join('')+'</select></div>'
    +'</div>'
    +'<div class="fr">'
      +'<div class="fg"><label class="fl">희망 Level</label><select id="v_target">'+[0,1,2,3].map(function(n){return '<option value="'+n+'"'+(Number(v.targetLevel)===n?' selected':'')+'>Level '+n+'</option>';}).join('')+'</select></div>'
      +'<div class="fg"><label class="fl">확정 Level (선택)</label><select id="v_confirmed"><option value="">-</option>'+[0,1,2,3].map(function(n){return '<option value="'+n+'"'+(String(v.confirmedLevel)===String(n)?' selected':'')+'>Level '+n+'</option>';}).join('')+'</select></div>'
    +'</div>'
    +'<div class="fr" style="grid-template-columns:1fr 1fr 1fr">'
      +'<div class="fg"><label class="fl">담당자 이름</label><input type="text" id="v_coord_name" value="'+esc(v.coordinatorName||'')+'"></div>'
      +'<div class="fg"><label class="fl">담당자 소속</label><input type="text" id="v_coord_org" value="'+esc(v.coordinatorOrg||'')+'"></div>'
      +'<div class="fg"><label class="fl">담당자 직책</label><input type="text" id="v_coord_position" value="'+esc(v.coordinatorPosition||'')+'"></div>'
    +'</div>'
    +'<div class="fg"><label class="fl">비고</label><input type="text" id="v_note" value="'+esc(v.note||'')+'"></div>'
    +'<div class="mfoot">'
      +(id?'<button class="btn sm red" onclick="deleteVisit(\''+id+'\')" style="margin-right:auto">삭제</button>':'')
      +'<button class="btn sm" onclick="cm()">취소</button>'
      +'<button class="btn sm pri" onclick="saveVisit('+jarg(id)+')">저장</button>'
    +'</div>',true);
}
function saveVisit(id){
  var traineeId=document.getElementById('v_trainee').value;
  if(!traineeId){alert('대상자를 선택하거나 먼저 등록해주세요.');return;}
  var start=document.getElementById('v_start').value,end=document.getElementById('v_end').value;
  if(!start||!end){alert('방문 시작일/종료일을 입력해주세요.');return;}
  if(end<start){alert('종료일이 시작일보다 빠를 수 없습니다.');return;}
  var existing=id?S.visits.find(function(x){return x.id===id;}):null;
  var rec={
    id:id||uid('vis'),traineeId:traineeId,
    planType:document.getElementById('v_plan').value,
    startDate:start,endDate:end,
    targetLevel:Number(document.getElementById('v_target').value),
    confirmedLevel:document.getElementById('v_confirmed').value,
    status:document.getElementById('v_status').value,
    coordinatorName:document.getElementById('v_coord_name').value.trim(),
    coordinatorOrg:document.getElementById('v_coord_org').value.trim(),
    coordinatorPosition:document.getElementById('v_coord_position').value.trim(),
    note:document.getElementById('v_note').value.trim(),
    dayStatus:(existing&&existing.dayStatus)?existing.dayStatus:{}
  };
  if(id){
    var i=S.visits.findIndex(function(x){return x.id===id;});
    S.visits[i]=rec;
  }else S.visits.push(rec);
  saveData();cm();renderScheduleTab();
}
function deleteVisit(id){
  if(!confirm('이 교육 방문 일정을 삭제할까요?'))return;
  S.visits=S.visits.filter(function(v){return v.id!==id;});
  saveData();cm();renderScheduleTab();
}
