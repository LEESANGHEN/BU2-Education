/* ═══════════════════════════════════════════
   📋 이력 관리
═══════════════════════════════════════════ */
var HIST={from:'',to:'',orgFilter:'all',country:'all',level:'all'};

function historyApprovals(){
  return S.approvals.filter(function(a){return a.status==='approved';}).map(function(a){
    var t=trainee(a.traineeId)||{};
    return {a:a,t:t};
  }).filter(function(r){
    if(HIST.from&&(r.a.approvalDate||'')<HIST.from)return false;
    if(HIST.to&&(r.a.approvalDate||'')>HIST.to)return false;
    if(HIST.orgFilter!=='all'&&r.t.orgType!==HIST.orgFilter)return false;
    if(HIST.country!=='all'&&r.t.country!==HIST.country)return false;
    if(HIST.level!=='all'&&String(r.a.level)!==HIST.level)return false;
    return true;
  }).sort(function(x,y){return (y.a.approvalDate||'')<(x.a.approvalDate||'')?-1:1;});
}
function historyVisits(){
  return S.visits.filter(function(v){return v.status==='done'||v.status==='cancelled';}).map(function(v){
    var t=trainee(v.traineeId)||{};
    return {v:v,t:t};
  }).filter(function(r){
    if(HIST.from&&r.v.startDate<HIST.from)return false;
    if(HIST.to&&r.v.endDate>HIST.to)return false;
    if(HIST.orgFilter!=='all'&&r.t.orgType!==HIST.orgFilter)return false;
    if(HIST.country!=='all'&&r.t.country!==HIST.country)return false;
    return true;
  }).sort(function(x,y){return y.v.startDate<x.v.startDate?-1:1;});
}

function renderHistoryTab(){
  var wrap=document.getElementById('hist_wrap');
  if(!wrap)return;
  var apprList=historyApprovals();
  var visitList=historyVisits();

  var apprRows=apprList.map(function(r){
    var ot=orgType(r.t.orgType||'branch');
    return '<tr>'
      +'<td>'+esc(r.a.approvalDate||'')+'</td>'
      +'<td>'+esc(r.t.name||'(삭제된 대상자)')+'</td>'
      +'<td><span class="grpbadge" style="background:'+ot.color+'">'+esc(ot.label)+'</span></td>'
      +'<td>'+esc(r.t.org||'')+'</td>'
      +'<td>'+esc(r.t.country||'')+'</td>'
      +'<td>Level '+r.a.level+'</td>'
      +'<td style="font-size:11px">'+esc(r.a.trainerSign||'')+'</td>'
      +'<td style="font-size:11px">'+esc(r.a.partLeadSign||'')+'</td>'
      +'<td style="font-size:11px">'+(r.a.level===3?(r.a.followUpDone?('완료 · '+esc(r.a.followUpDate||'')):'대기'):'-')+'</td>'
      +'<td>'+(r.t.name?('<button class="btn sm gsh" onclick="openCertificate(\''+r.a.traineeId+'\','+r.a.level+')">🎓 이수증</button>'):'-')+'</td>'
    +'</tr>';
  }).join('');

  var visitRows=visitList.map(function(r){
    var st=visitStatus(r.v.status);
    return '<tr>'
      +'<td>'+esc(r.v.startDate)+' ~ '+esc(r.v.endDate)+'</td>'
      +'<td>'+esc(r.t.name||'(삭제된 대상자)')+'</td>'
      +'<td>'+esc(r.t.org||'')+'</td>'
      +'<td>Lv'+r.v.targetLevel+(r.v.confirmedLevel!==''?(' → '+r.v.confirmedLevel+' 확정'):'')+'</td>'
      +'<td><span style="color:'+st.color+'">●</span> '+st.label+'</td>'
      +'<td style="font-size:11px;color:var(--tx-second)">'+esc(r.v.note||'')+'</td>'
    +'</tr>';
  }).join('');

  var countryOpts='<option value="all">전체 국가</option>'+COUNTRIES.map(function(c){return '<option value="'+c+'"'+(HIST.country===c?' selected':'')+'>'+c+'</option>';}).join('');

  wrap.innerHTML=
    '<div class="hist-filters">'
      +'<input type="date" value="'+HIST.from+'" onchange="histSet(\'from\',this.value)" title="시작일">'
      +'<span style="color:var(--tx-faint)">~</span>'
      +'<input type="date" value="'+HIST.to+'" onchange="histSet(\'to\',this.value)" title="종료일">'
      +'<select onchange="histSet(\'orgFilter\',this.value)"><option value="all">전체 구분</option>'+ORG_TYPES.map(function(o){return '<option value="'+o.id+'"'+(HIST.orgFilter===o.id?' selected':'')+'>'+o.label+'</option>';}).join('')+'</select>'
      +'<select onchange="histSet(\'country\',this.value)">'+countryOpts+'</select>'
      +'<select onchange="histSet(\'level\',this.value)"><option value="all">전체 Level</option>'+[0,1,2,3].map(function(n){return '<option value="'+n+'"'+(HIST.level===String(n)?' selected':'')+'>Level '+n+'</option>';}).join('')+'</select>'
      +'<button class="btn sm" onclick="histReset()">필터 초기화</button>'
    +'</div>'
    +'<div class="td-section"><div class="td-sectitle" style="display:flex;justify-content:space-between">'
      +'<span>Level 승인 이력 ('+apprList.length+'건)</span>'
      +'<button class="btn sm" onclick="exportApprovalsCSV()">⬇ CSV 내보내기</button>'
    +'</div>'
      +'<table class="dtbl sm"><thead><tr><th style="width:100px">승인일자</th><th>이름</th><th>구분</th><th>소속</th><th>국가</th><th style="width:70px">Level</th><th style="width:100px">교육담당자</th><th style="width:100px">파트장</th><th style="width:120px">Follow-Up(L3)</th><th style="width:90px">이수증</th></tr></thead><tbody>'+(apprRows||'<tr><td colspan="10" class="empty">이력이 없습니다.</td></tr>')+'</tbody></table>'
    +'</div>'
    +'<div class="td-section"><div class="td-sectitle" style="display:flex;justify-content:space-between">'
      +'<span>방문 이력 (완료/취소, '+visitList.length+'건)</span>'
      +'<button class="btn sm" onclick="exportVisitsCSV()">⬇ CSV 내보내기</button>'
    +'</div>'
      +'<table class="dtbl sm"><thead><tr><th style="width:170px">방문 기간</th><th>이름</th><th>소속</th><th style="width:110px">Level</th><th style="width:80px">상태</th><th>비고</th></tr></thead><tbody>'+(visitRows||'<tr><td colspan="6" class="empty">이력이 없습니다.</td></tr>')+'</tbody></table>'
    +'</div>';
}
function histSet(k,v){HIST[k]=v;renderHistoryTab();}
function histReset(){HIST={from:'',to:'',orgFilter:'all',country:'all',level:'all'};renderHistoryTab();}

function toCSV(rows){
  return rows.map(function(r){
    return r.map(function(c){
      var s=String(c==null?'':c).replace(/"/g,'""');
      return /[",\n]/.test(s)?('"'+s+'"'):s;
    }).join(',');
  }).join('\r\n');
}
function downloadCSV(filename,csv){
  var blob=new Blob(['﻿'+csv],{type:'text/csv;charset=utf-8'});
  var url=URL.createObjectURL(blob);
  var a=document.createElement('a');
  a.href=url;a.download=filename;document.body.appendChild(a);a.click();
  document.body.removeChild(a);URL.revokeObjectURL(url);
}
function exportApprovalsCSV(){
  var head=['승인일자','이름','구분','소속','국가','Level','교육담당자','파트장','그룹장','심사위원','Follow-Up완료','Follow-Up일자'];
  var rows=[head].concat(historyApprovals().map(function(r){
    return [r.a.approvalDate,r.t.name,orgType(r.t.orgType||'branch').label,r.t.org,r.t.country,r.a.level,r.a.trainerSign,r.a.partLeadSign,r.a.groupLeadSign||'',r.a.committeeSign||'',r.a.level===3?(r.a.followUpDone?'Y':'N'):'',r.a.level===3?(r.a.followUpDate||''):''];
  }));
  downloadCSV('교육이력_Level승인_'+todayStr()+'.csv',toCSV(rows));
}
function exportVisitsCSV(){
  var head=['시작일','종료일','이름','소속','국가','희망Level','확정Level','상태','비고'];
  var rows=[head].concat(historyVisits().map(function(r){
    return [r.v.startDate,r.v.endDate,r.t.name,r.t.org,r.t.country,r.v.targetLevel,r.v.confirmedLevel,visitStatus(r.v.status).label,r.v.note];
  }));
  downloadCSV('교육이력_방문_'+todayStr()+'.csv',toCSV(rows));
}
