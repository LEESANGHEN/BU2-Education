/* ═══════════════════════════════════════════
   🎓 교육 이수증 발급 (인쇄 / PDF 저장)
═══════════════════════════════════════════ */
function openCertificate(traineeId,level){
  var t=trainee(traineeId);
  var appr=approvalOf(traineeId,level);
  if(!t||!appr||appr.status!=='approved'){alert('승인이 완료된 Level만 이수증을 발급할 수 있습니다.');return;}
  var lv=levelDef(level)||{};
  var ot=orgType(t.orgType||'branch');
  var prog=levelProgress(traineeId,level);
  var roles=(APPROVAL_ROLES.find(function(r){return r.level===level;})||{roles:[]}).roles;

  var signHtml=roles.map(function(r){
    return '<div class="cert-sign"><div class="cert-signname">'+esc(appr[r]||'')+'</div><div class="cert-signline"></div><div class="cert-role">'+esc(ROLE_LBL[r])+'</div></div>';
  }).join('');

  var followUp='';
  if(level===3&&appr.followUpDone){
    followUp='<div class="cert-row"><div class="cert-lbl">Follow-Up 확인</div><div class="cert-val">완료 · '+esc(appr.followUpDate||'')+'</div></div>';
  }

  var html='<div class="cert-page" id="certPrintArea">'
    +'<div class="cert-border">'
      +'<div class="cert-header">'
        +'<div class="cert-co">BU2 · INTEKPLUS</div>'
        +'<div class="cert-title">교육 이수증</div>'
        +'<div class="cert-titleen">CERTIFICATE OF COMPLETION</div>'
      +'</div>'
      +'<div class="cert-no">발급번호 '+esc(appr.id||('CERT-'+traineeId+'-L'+level))+'</div>'
      +'<div class="cert-row"><div class="cert-lbl">성명</div><div class="cert-val">'+esc(t.name)+'</div><div class="cert-lbl">소속</div><div class="cert-val">'+esc(ot.label)+' · '+esc(t.org||'')+'</div></div>'
      +'<div class="cert-row"><div class="cert-lbl">직책</div><div class="cert-val">'+esc(t.position||'-')+'</div><div class="cert-lbl">국가</div><div class="cert-val">'+esc(t.country||'-')+'</div></div>'
      +'<div class="cert-statement">위 사람은 BU2 FCBGA Substrate 검사 장비 교육 과정 중<br><b>Level '+level+' · '+esc(lv.title||'')+'</b> 과정을 성실히 이수하였음을 증명합니다.</div>'
      +'<div class="cert-comp"><div class="cert-comp-title">핵심 역량 (Level '+level+')</div><div class="cert-comp-text">'+esc(lv.competency||'')+'</div></div>'
      +'<div class="cert-row"><div class="cert-lbl">이수 항목</div><div class="cert-val">'+prog.done+' / '+prog.total+' ('+prog.pct+'%)</div><div class="cert-lbl">이수(승인)일자</div><div class="cert-val">'+esc(appr.approvalDate||'')+'</div></div>'
      +followUp
      +'<div class="cert-issuedate">발급일 '+todayStr()+'</div>'
      +'<div class="cert-signs">'+signHtml+'</div>'
      +'<div class="cert-footer">BU2 기술운영1그룹 · 교육 담당자</div>'
    +'</div>'
    +'<div class="cert-actions no-print">'
      +'<button class="btn pri" onclick="window.print()">🖨 인쇄 / PDF 저장</button>'
      +(t.email?('<button class="btn" id="cert_email_btn" onclick="sendCertificateEmailFor(\''+traineeId+'\','+level+')">📧 이메일로 전송</button>'):'')
      +'<button class="btn" onclick="closeCertificate()">닫기</button>'
    +'</div>'
  +'</div>';

  var ov=document.getElementById('certOverlay');
  ov.innerHTML=html;
  ov.style.display='flex';
  document.body.classList.add('cert-mode');
}
function closeCertificate(){
  document.body.classList.remove('cert-mode');
  var ov=document.getElementById('certOverlay');
  ov.style.display='none';
  ov.innerHTML='';
}
/* 화면의 이수증과 동일한 정보를 신청서 백엔드(MailApp)를 통해 대상자 이메일로 발송한다 */
function sendCertificateEmailFor(traineeId,level){
  var t=trainee(traineeId);
  var appr=approvalOf(traineeId,level);
  if(!t||!appr||appr.status!=='approved')return;
  if(!t.email){alert('대상자 이메일이 등록되어 있지 않습니다.');return;}
  var url=(typeof getApplySheetsUrl==='function')?getApplySheetsUrl():'';
  if(!url){alert('신청서 Sheets가 연결되어 있지 않아 이메일을 보낼 수 없습니다. 상단 "⚙ 신청서 Sheets 설정"을 먼저 확인해주세요.');return;}
  var lv=levelDef(level)||{};
  var ot=orgType(t.orgType||'branch');
  var prog=levelProgress(traineeId,level);
  var roles=(APPROVAL_ROLES.find(function(r){return r.level===level;})||{roles:[]}).roles;
  var signatures=roles.map(function(r){return {role:ROLE_LBL[r],name:appr[r]||''};});
  var btn=document.getElementById('cert_email_btn');
  if(btn){btn.disabled=true;btn.textContent='전송 중...';}
  fetch(url,{method:'POST',headers:{'Content-Type':'text/plain'},body:JSON.stringify({
    action:'sendCertificateEmail',to:t.email,
    traineeName:t.name,org:ot.label+' · '+(t.org||''),position:t.position||'',country:t.country||'',
    level:level,levelTitle:lv.title||'',competency:lv.competency||'',
    doneCount:prog.done,totalCount:prog.total,pct:prog.pct,
    approvalDate:appr.approvalDate||'',issueDate:todayStr(),
    certNo:appr.id||('CERT-'+traineeId+'-L'+level),
    signatures:signatures,
    followUp:(level===3&&appr.followUpDone)?true:false,followUpDate:appr.followUpDate||''
  })})
    .then(function(r){return r.text();})
    .then(function(text){
      var data;try{data=JSON.parse(text);}catch(e){data={error:'invalid response'};}
      if(btn){btn.disabled=false;btn.textContent='📧 이메일로 전송';}
      if(data.error){alert('발송 실패: '+data.error);return;}
      alert('대상자 이메일('+t.email+')로 이수증을 발송했습니다.');
    })
    .catch(function(err){
      if(btn){btn.disabled=false;btn.textContent='📧 이메일로 전송';}
      alert('발송 실패: '+err.message);
    });
}
