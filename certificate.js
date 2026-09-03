/* ═══════════════════════════════════════════
   🎓 교육 이수증 발급 (인쇄 / PDF 저장 / 다국어 전환)
═══════════════════════════════════════════ */
function openCertificate(traineeId,level){
  var t=trainee(traineeId);
  var appr=approvalOf(traineeId,level);
  if(!t||!appr||appr.status!=='approved'){alert('승인이 완료된 Level만 이수증을 발급할 수 있습니다.');return;}
  var lv=levelDef(level)||{};
  var ot=orgType(t.orgType||'branch');
  var prog=levelProgress(traineeId,level);
  var roles=(APPROVAL_ROLES.find(function(r){return r.level===level;})||{roles:[]}).roles;
  var lvTitle=ctLevel(level,'title')||lv.title||'';
  var lvCompetency=ctLevel(level,'competency')||lv.competency||'';

  var signHtml=roles.map(function(r){
    return '<div class="cert-sign"><div class="cert-signname">'+esc(appr[r]||'')+'</div><div class="cert-signline"></div><div class="cert-role">'+esc(ctRole(r))+'</div></div>';
  }).join('');

  var items=checklistFor(level,'onsite');
  var itemRows=items.map(function(it){
    var c=completionOf(traineeId,it.id)||{};
    var modTxt=ctItem(it.id,'module')||it.module;
    var itemTxt=ctItem(it.id,'item')||it.item;
    return '<tr><td>'+esc(modTxt)+'</td><td>'+esc(itemTxt)+'</td><td class="ctr">'+(c.done==='Y'?'✅':'—')+'</td><td>'+esc(c.date||'-')+'</td><td>'+esc(c.note||'-')+'</td></tr>';
  }).join('');
  var itemsHtml='<div class="cert-items-title">'+esc(ctd('itemsTitle'))+'</div>'
    +'<table class="cert-items"><thead><tr><th>'+esc(ctd('thModule'))+'</th><th>'+esc(ctd('thItem'))+'</th><th>'+esc(ctd('thDone'))+'</th><th>'+esc(ctd('thDate'))+'</th><th>'+esc(ctd('thNote'))+'</th></tr></thead><tbody>'+itemRows+'</tbody></table>';

  var followUp='';
  if(level===3&&appr.followUpDone){
    followUp='<div class="cert-row"><div class="cert-lbl">'+esc(ctd('followUp'))+'</div><div class="cert-val">'+esc(ctd('followUpDone'))+' · '+esc(appr.followUpDate||'')+'</div></div>';
  }

  var langSel='<select id="cert_lang_sel" class="btn" onchange="certChangeLang(\''+traineeId+'\','+level+',this.value)">'
    +LANGS.map(function(l){return '<option value="'+l.id+'"'+(l.id===getCertLang()?' selected':'')+'>🌐 '+l.label+'</option>';}).join('')
    +'</select>';

  var html='<div class="cert-page" id="certPrintArea">'
    +'<div class="cert-border">'
      +'<div class="cert-header">'
        +'<div class="cert-co">BU2 · INTEKPLUS</div>'
        +'<div class="cert-title">'+esc(ctd('title'))+'</div>'
        +'<div class="cert-titleen">CERTIFICATE OF COMPLETION</div>'
      +'</div>'
      +'<div class="cert-no">'+esc(ctd('certNo'))+' '+esc(appr.id||('CERT-'+traineeId+'-L'+level))+'</div>'
      +'<div class="cert-row"><div class="cert-lbl">'+esc(ctd('name'))+'</div><div class="cert-val">'+esc(t.name)+'</div><div class="cert-lbl">'+esc(ctd('org'))+'</div><div class="cert-val">'+esc(ot.label)+' · '+esc(t.org||'')+'</div></div>'
      +'<div class="cert-row"><div class="cert-lbl">'+esc(ctd('position'))+'</div><div class="cert-val">'+esc(t.position||'-')+'</div><div class="cert-lbl">'+esc(ctd('country'))+'</div><div class="cert-val">'+esc(t.country||'-')+'</div></div>'
      +'<div class="cert-statement">'+esc(ctd('statement1'))+'<br><b>Level '+level+' · '+esc(lvTitle)+'</b> '+esc(ctd('statement2'))+'</div>'
      +'<div class="cert-comp"><div class="cert-comp-title">'+esc(ctd('competencyTitle'))+' (Level '+level+')</div><div class="cert-comp-text">'+esc(lvCompetency)+'</div></div>'
      +'<div class="cert-row"><div class="cert-lbl">'+esc(ctd('itemsDone'))+'</div><div class="cert-val">'+prog.done+' / '+prog.total+' ('+prog.pct+'%)</div><div class="cert-lbl">'+esc(ctd('approvalDate'))+'</div><div class="cert-val">'+esc(appr.approvalDate||'')+'</div></div>'
      +itemsHtml
      +followUp
      +'<div class="cert-issuedate">'+esc(ctd('issueDate'))+' '+todayStr()+'</div>'
      +'<div class="cert-signs">'+signHtml+'</div>'
      +'<div class="cert-footer">'+esc(ctd('footer'))+'</div>'
    +'</div>'
    +'<div class="cert-actions no-print">'
      +langSel
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
function certChangeLang(traineeId,level,lang){
  setCertLang(lang);
  openCertificate(traineeId,level);
}
function closeCertificate(){
  document.body.classList.remove('cert-mode');
  var ov=document.getElementById('certOverlay');
  ov.style.display='none';
  ov.innerHTML='';
}
/* 화면의 이수증과 동일한 정보(현재 선택된 언어 기준)를 신청서 백엔드(MailApp)를 통해 대상자 이메일로 발송한다 */
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
  var signatures=roles.map(function(r){return {role:ctRole(r),name:appr[r]||''};});
  var items=checklistFor(level,'onsite').map(function(it){
    var c=completionOf(traineeId,it.id)||{};
    return {module:ctItem(it.id,'module')||it.module,item:ctItem(it.id,'item')||it.item,done:c.done==='Y',date:c.date||'',note:c.note||''};
  });
  var labels={
    title:ctd('title'),certNo:ctd('certNo'),name:ctd('name'),org:ctd('org'),position:ctd('position'),country:ctd('country'),
    statement1:ctd('statement1'),statement2:ctd('statement2'),competencyTitle:ctd('competencyTitle'),
    itemsDone:ctd('itemsDone'),approvalDate:ctd('approvalDate'),itemsTitle:ctd('itemsTitle'),
    thModule:ctd('thModule'),thItem:ctd('thItem'),thDone:ctd('thDone'),thDate:ctd('thDate'),thNote:ctd('thNote'),
    followUp:ctd('followUp'),followUpDone:ctd('followUpDone'),issueDate:ctd('issueDate'),footer:ctd('footer')
  };
  var btn=document.getElementById('cert_email_btn');
  if(btn){btn.disabled=true;btn.textContent='전송 중...';}
  fetch(url,{method:'POST',headers:{'Content-Type':'text/plain'},body:JSON.stringify({
    action:'sendCertificateEmail',to:t.email,
    traineeName:t.name,org:ot.label+' · '+(t.org||''),position:t.position||'',country:t.country||'',
    level:level,levelTitle:ctLevel(level,'title')||lv.title||'',competency:ctLevel(level,'competency')||lv.competency||'',
    doneCount:prog.done,totalCount:prog.total,pct:prog.pct,
    approvalDate:appr.approvalDate||'',issueDate:todayStr(),
    certNo:appr.id||('CERT-'+traineeId+'-L'+level),
    signatures:signatures,items:items,labels:labels,
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
