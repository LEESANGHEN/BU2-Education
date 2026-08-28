/* ═══════════════════════════════════════════
   📥 신청 접수함 (관리자 — 외부 신청서 검토 및 대상자 등록)
═══════════════════════════════════════════ */
var APPLY_LS_KEY='edu_apply_sheets_url';
var APPS={list:[],filter:'pending'};

function getApplySheetsUrl(){try{return localStorage.getItem(APPLY_LS_KEY)||'';}catch(e){return '';}}
function setApplySheetsUrl(u){try{localStorage.setItem(APPLY_LS_KEY,u);}catch(e){}}

function openApplySheetsSettings(){
  var cur=getApplySheetsUrl();
  mw('<div class="mtit">⚙ 신청서 Sheets 설정</div>'
    +'<div style="font-size:12px;color:var(--tx-second);margin-bottom:12px">교육 신청서(apply.html) 전용 Apps Script 웹앱 URL입니다. 본 데이터 백엔드와는 별도의 Google Sheet여야 합니다. (INSTRUCTIONS.md 참고)</div>'
    +'<div class="fg"><label class="fl">URL</label>'
    +'<input type="text" id="apply_sheets_url" value="'+esc(cur)+'" style="font-size:11px" placeholder="https://script.google.com/macros/s/xxxx/exec"></div>'
    +'<div class="mfoot">'
    +'<button class="btn sm" onclick="cm()">취소</button>'
    +'<button class="btn sm pri" onclick="saveApplySheetsUrl()">저장</button>'
    +'</div>');
}
function saveApplySheetsUrl(){
  var u=document.getElementById('apply_sheets_url').value.trim();
  if(!u){alert('URL을 입력해주세요.');return;}
  setApplySheetsUrl(u);cm();
  loadApplications(function(){renderApplyTab();});
}

function loadApplications(callback){
  var url=getApplySheetsUrl();
  if(!url){if(callback)callback();return;}
  fetch(url+'?action=load')
    .then(function(r){if(!r.ok)throw new Error('HTTP '+r.status);return r.json();})
    .then(function(data){
      if(data.error)throw new Error(data.error);
      APPS.list=data.applications||[];
      if(callback)callback();
    })
    .catch(function(err){
      console.warn('신청서 불러오기 실패:',err.message);
      if(callback)callback();
    });
}
function saveApplications(){
  var url=getApplySheetsUrl();
  if(!url)return;
  fetch(url,{method:'POST',headers:{'Content-Type':'text/plain'},body:JSON.stringify({action:'save',applications:APPS.list})})
    .catch(function(err){console.warn('신청서 저장 실패:',err.message);});
}

function renderApplyTab(){
  var wrap=document.getElementById('apply_wrap');
  if(!wrap)return;
  if(!getApplySheetsUrl()){
    wrap.innerHTML='<div class="empty">신청서 Sheets가 아직 연결되지 않았습니다.<br><br>상단 "⚙ 신청서 Sheets 설정"에서 Code-Applications.gs 배포 URL을 입력해주세요.</div>';
    return;
  }
  var list=APPS.list.filter(function(a){return APPS.filter==='all'||a.status===APPS.filter;})
    .sort(function(a,b){return (b.submittedAt||'')<(a.submittedAt||'')?-1:1;});

  var counts={pending:0,registered:0,rejected:0};
  APPS.list.forEach(function(a){if(counts[a.status]!==undefined)counts[a.status]++;});
  var cards='<div class="sum-card" onclick="appSetFilter(\'all\')" style="cursor:pointer"><div class="sum-n">'+APPS.list.length+'</div><div class="sum-l">전체 신청</div></div>'
    +'<div class="sum-card" onclick="appSetFilter(\'pending\')" style="cursor:pointer"><div class="sum-n" style="color:#e0a838">'+counts.pending+'</div><div class="sum-l">대기중</div></div>'
    +'<div class="sum-card" onclick="appSetFilter(\'registered\')" style="cursor:pointer"><div class="sum-n" style="color:#4ade9a">'+counts.registered+'</div><div class="sum-l">등록완료</div></div>'
    +'<div class="sum-card" onclick="appSetFilter(\'rejected\')" style="cursor:pointer"><div class="sum-n" style="color:#e07070">'+counts.rejected+'</div><div class="sum-l">반려</div></div>';

  if(!list.length){
    wrap.innerHTML='<div class="sum-row">'+cards+'</div><div class="empty">해당 조건의 신청서가 없습니다.</div>';
    return;
  }
  var rows=list.map(function(a){
    var ot=orgType(a.orgType||'branch');
    var stLbl={pending:'대기중',registered:'등록완료',rejected:'반려'}[a.status]||a.status;
    return '<tr onclick="openApplicationDetail(\''+a.id+'\')">'
      +'<td>'+esc((a.submittedAt||'').slice(0,10))+'</td>'
      +'<td><b>'+esc(a.traineeName||'')+'</b></td>'
      +'<td><span class="grpbadge" style="background:'+ot.color+'">'+esc(ot.label)+'</span></td>'
      +'<td>'+esc(a.org||'')+'</td>'
      +'<td>'+esc(equipmentName(a.equipment||'smtv','ko'))+'</td>'
      +'<td>Level '+a.desiredLevel+'</td>'
      +'<td>'+esc(a.desiredStart||'')+' ~ '+esc(a.desiredEnd||'')+'</td>'
      +'<td>'+esc(a.applicantName||'')+'</td>'
      +'<td><span class="app-status '+a.status+'">'+stLbl+'</span></td>'
    +'</tr>';
  }).join('');

  wrap.innerHTML='<div class="sum-row">'+cards+'</div>'
    +'<div class="tbl-wrap"><table class="dtbl"><thead><tr>'
      +'<th>신청일</th><th>대상자</th><th>구분</th><th>소속</th><th>설비</th><th>희망Level</th><th>희망 방문기간</th><th>신청자</th><th>상태</th>'
    +'</tr></thead><tbody>'+rows+'</tbody></table></div>';
}
function appSetFilter(f){APPS.filter=f;renderApplyTab();}
function refreshApplications(){loadApplications(function(){renderApplyTab();});}

function openApplyLinkInfo(){
  var url=location.origin+location.pathname.replace(/index\.html$/,'').replace(/\/$/,'')+'/apply.html';
  mw('<div class="mtit">🔗 교육 신청서 링크</div>'
    +'<div style="font-size:12px;color:var(--tx-second);margin-bottom:12px">해외지사 · Agent · 고객사 담당자에게 아래 주소를 공유하면 직접 신청서를 작성해 제출할 수 있습니다. (관리자 로그인 불필요, 조회 권한 없음 — 제출만 가능)</div>'
    +'<div class="fg"><input type="text" value="'+esc(url)+'" readonly onclick="this.select()" style="font-size:11px"></div>'
    +'<div class="mfoot"><button class="btn sm" onclick="cm()">닫기</button></div>');
}

function openApplicationDetail(id){
  var a=APPS.list.find(function(x){return x.id===id;});
  if(!a)return;
  var ot=orgType(a.orgType||'branch');
  var assessRows=(a.selfAssessment||[]).map(function(s){
    var hasLbl={Y:'Y (보유)',N:'N (없음)',partial:'일부'}[s.has]||s.has;
    return '<tr><td>'+esc(s.code)+'</td><td>Level '+s.level+'</td><td>'+esc(s.name)+'</td><td>'+hasLbl+'</td><td style="font-size:11px;color:var(--tx-second)">'+esc(s.note||'')+'</td></tr>';
  }).join('');
  var stLbl={pending:'대기중',registered:'등록완료',rejected:'반려'}[a.status]||a.status;

  mw('<div class="mtit">'+esc(a.traineeName||'')+' 교육 신청서 <span class="app-status '+a.status+'">'+stLbl+'</span></div>'

    +'<div class="td-section"><div class="td-sectitle">1. 신청 정보</div>'
      +'<div class="fr" style="grid-template-columns:repeat(3,1fr)">'
        +infoBox('신청일자',a.applyDate)+infoBox('소속 유형',ot.label)+infoBox('소속',a.org)
        +infoBox('신청자',a.applicantName)+infoBox('직책',a.applicantPosition)+infoBox('연락처',a.applicantContact)
      +'</div></div>'

    +'<div class="td-section"><div class="td-sectitle">2. 교육 대상자 정보</div>'
      +'<div class="fr" style="grid-template-columns:repeat(3,1fr)">'
        +infoBox('성명',a.traineeName)+infoBox('직책',a.traineePosition)+infoBox('담당업무',a.traineeTask)
        +infoBox('방문구분',(VISIT_CATS.find(function(v){return v.id===a.visitCategory;})||{}).label)
        +infoBox('이전 이수 Level',a.priorLevel!==''&&a.priorLevel!=null?('Level '+a.priorLevel):'-')
        +infoBox('경력(년)',a.experienceYears)
        +infoBox('대상자 이메일 (사전학습 링크 발송)',a.traineeEmail)
      +'</div></div>'

    +'<div class="td-section"><div class="td-sectitle">3. 방문 계획 및 희망 Level</div>'
      +'<div class="fr" style="grid-template-columns:repeat(3,1fr)">'
        +infoBox('교육 희망 설비',equipmentName(a.equipment||'smtv','ko'))+infoBox('희망 Level','Level '+a.desiredLevel)+infoBox('방문 희망 시작일',a.desiredStart)
        +infoBox('방문 희망 종료일',a.desiredEnd)+infoBox('총 방문일수',a.totalDays)+infoBox('대안 가능기간/비고',a.altNote)
        +infoBox('국가',a.country)
      +'</div></div>'

    +'<div class="td-section"><div class="td-sectitle">4. 사전 역량 자가진단</div>'
      +'<table class="dtbl sm"><thead><tr><th>코드</th><th>Level</th><th>모듈</th><th>보유여부</th><th>비고</th></tr></thead><tbody>'+assessRows+'</tbody></table>'
    +'</div>'

    +'<div class="td-section"><div class="td-sectitle">5. 사전 선행학습 이수 확인</div>'
      +'<div class="fr">'
        +infoBox('Level 0 이론 선행학습',(a.pre0Done?'✅ 이수 · '+esc(a.pre0Method||''):'❌ 미이수'))
        +infoBox('Level 1 SW조작 기초 선행학습',(a.pre1Done?'✅ 이수 · '+esc(a.pre1Method||''):'❌ 미이수'))
      +'</div></div>'

    +'<div class="td-section"><div class="td-sectitle">6. 특이사항 및 요청사항</div>'
      +'<div class="dbox">'+esc(a.specialNotes||'(없음)')+'</div></div>'

    +'<div class="td-section"><div class="td-sectitle">7. 신청자 확인</div>'
      +'<div class="fr">'+infoBox('지사장/Agent대표 승인자명',a.branchApproverName)+infoBox('접수 시각',(a.submittedAt||'').replace('T',' ').slice(0,19))+'</div></div>'

    +(a.status==='registered'?('<div style="font-size:11px;color:var(--tx-second);margin-bottom:8px">'+(a.prelearnEmailSentAt?('📧 사전학습 링크 발송됨 · '+esc(a.prelearnEmailSentAt.replace('T',' ').slice(0,16))):'⚠ 사전학습 링크 발송 기록 없음')+'</div>'):'')
    +'<div class="mfoot">'
      +'<button class="btn sm red" onclick="deleteApplication(\''+id+'\')" style="margin-right:auto">삭제</button>'
      +(a.status==='pending'?('<button class="btn sm warn" onclick="rejectApplication(\''+id+'\')">반려</button>'):'')
      +(a.status==='registered'?('<button class="btn sm" onclick="resendPrelearnEmail(\''+id+'\')">📧 링크 재발송</button>'):'')
      +'<button class="btn sm" onclick="cm()">닫기</button>'
      +(a.status==='pending'?('<button class="btn sm pri" onclick="registerFromApplication(\''+id+'\')">대상자로 등록</button>'):'')
    +'</div>',true);
}
function infoBox(label,val){
  return '<div class="fg"><label class="fl">'+esc(label)+'</label><div class="dbox" style="margin-bottom:0">'+(val?esc(val):'-')+'</div></div>';
}

function registerFromApplication(id){
  var a=APPS.list.find(function(x){return x.id===id;});
  if(!a)return;
  if(!confirm(esc(a.traineeName)+' 님을 대상자로 등록하고 방문 일정을 생성할까요?'))return;

  var t={
    id:uid('tr'),name:a.traineeName,orgType:a.orgType||'branch',org:a.org||'',
    country:a.country||'한국',region:'',position:a.traineePosition||'',task:a.traineeTask||'',
    contact:a.applicantContact||'',email:a.traineeEmail||'',visitCategory:a.visitCategory||'new',
    experienceYears:a.experienceYears||'',note:'교육 신청서 기반 자동 등록 ('+(a.applyDate||'')+')'
  };
  S.trainees.push(t);

  var v={
    id:uid('vis'),traineeId:t.id,planType:'custom',
    startDate:a.desiredStart,endDate:a.desiredEnd,
    targetLevel:Number(a.desiredLevel)||0,confirmedLevel:'',status:'planned',
    note:'신청서 기반 자동 등록'+(a.altNote?(' · 대안기간: '+a.altNote):'')
  };
  S.visits.push(v);
  saveData();

  a.status='registered';
  saveApplications();

  cm();
  renderApplyTab();
  sendPrelearnEmailFor(a,function(ok,msg){
    if(ok)alert('등록되었습니다. 대상자 이메일로 사전 선행학습 링크를 발송했습니다.');
    else alert('등록되었습니다. (사전학습 링크 이메일 발송 실패: '+msg+' — "이메일 재발송" 버튼으로 다시 시도할 수 있습니다.)');
  });
}

function sendPrelearnEmailFor(a,cb){
  var url=getApplySheetsUrl();
  if(!url||!a.traineeEmail){if(cb)cb(false,'이메일 주소 없음');return;}
  var eqId=a.equipment||'smtv';
  var link=location.origin+location.pathname.replace(/index\.html$/,'').replace(/\/$/,'')+'/prelearn.html?eq='+encodeURIComponent(eqId);
  fetch(url,{method:'POST',headers:{'Content-Type':'text/plain'},body:JSON.stringify({
    action:'sendPrelearnEmail',to:a.traineeEmail,traineeName:a.traineeName,
    equipment:eqId,equipmentName:equipmentName(eqId,'en'),link:link
  })})
    .then(function(r){return r.text();})
    .then(function(text){
      var data;try{data=JSON.parse(text);}catch(e){data={error:'invalid response'};}
      if(data.error){if(cb)cb(false,data.error);return;}
      a.prelearnEmailSentAt=new Date().toISOString();
      saveApplications();
      if(cb)cb(true);
    })
    .catch(function(err){if(cb)cb(false,err.message);});
}
function resendPrelearnEmail(id){
  var a=APPS.list.find(function(x){return x.id===id;});
  if(!a)return;
  if(!a.traineeEmail){alert('대상자 이메일이 없습니다.');return;}
  if(!confirm(esc(a.traineeEmail)+'(으)로 사전학습 링크를 재발송할까요?'))return;
  sendPrelearnEmailFor(a,function(ok,msg){
    alert(ok?'발송했습니다.':('발송 실패: '+msg));
    if(ok){cm();openApplicationDetail(id);}
  });
}
function rejectApplication(id){
  var a=APPS.list.find(function(x){return x.id===id;});
  if(!a)return;
  if(!confirm('이 신청서를 반려 처리할까요?'))return;
  a.status='rejected';
  saveApplications();
  cm();renderApplyTab();
}
function deleteApplication(id){
  if(!confirm('이 신청서를 완전히 삭제할까요?'))return;
  APPS.list=APPS.list.filter(function(a){return a.id!==id;});
  saveApplications();
  cm();renderApplyTab();
}
