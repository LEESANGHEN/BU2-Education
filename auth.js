/* ═══════════════════════════════════════════
   로그인 게이트 (Firebase Authentication, 이메일/비밀번호)
   — index.html(교육 관리 관리자 콘솔) 전용. apply.html/prelearn.html/exam.html은
   이메일로 받은 링크로 로그인 없이 접근해야 하므로 이 파일을 쓰지 않는다.
   기존 "관리자 모드"(app.js의 toggleAdminMode 등)는 이 로그인과 별개로 그대로 둔다 —
   로그인은 "이 콘솔에 들어올 수 있는가"이고, 관리자 모드는 "콘솔 안에서 추가 버튼을
   보여줄 것인가"라는 서로 다른 층이다.
═══════════════════════════════════════════ */
firebase.initializeApp(FIREBASE_CONFIG);

function _domainOk(email){
  return !!email && String(email).toLowerCase().endsWith(ALLOWED_EMAIL_DOMAIN);
}

function renderAuthGate(mode, errMsg){
  var overlay=document.getElementById('authOverlay');
  if(!overlay)return;
  overlay.style.display='flex';
  var appEl=document.querySelector('.app');
  if(appEl)appEl.style.display='none';
  var isSignup=mode==='signup';
  overlay.innerHTML='<div class="auth-box">'
    +'<div class="mtit">🎓 BU2 교육 관리 — '+(isSignup?'회원가입':'로그인')+'</div>'
    +(errMsg?'<div class="auth-err">'+esc(errMsg)+'</div>':'')
    +'<div class="fg"><label class="fl">이메일 ('+esc(ALLOWED_EMAIL_DOMAIN)+')</label>'
      +'<input type="email" id="auth_email" placeholder="name'+esc(ALLOWED_EMAIL_DOMAIN)+'" autocomplete="username"></div>'
    +'<div class="fg"><label class="fl">비밀번호</label>'
      +'<input type="password" id="auth_pw" autocomplete="'+(isSignup?'new-password':'current-password')+'" onkeydown="if(event.key===\'Enter\')'+(isSignup?'doSignup()':'doLogin()')+'"></div>'
    +'<div class="mfoot" style="justify-content:space-between;align-items:center">'
      +'<a href="javascript:void(0)" onclick="renderAuthGate(\''+(isSignup?'login':'signup')+'\')" style="font-size:12px;color:var(--tx-second)">'
        +(isSignup?'이미 계정이 있으신가요? 로그인':'처음이신가요? 회원가입')
      +'</a>'
      +'<button class="btn sm pri" onclick="'+(isSignup?'doSignup()':'doLogin()')+'">'+(isSignup?'가입하기':'로그인')+'</button>'
    +'</div>'
    +(isSignup?'':'<div style="text-align:center;margin-top:10px"><a href="javascript:void(0)" onclick="doResetPw()" style="font-size:11px;color:var(--tx-second)">비밀번호를 잊으셨나요?</a></div>');
}

function doSignup(){
  var email=(document.getElementById('auth_email').value||'').trim();
  var pw=document.getElementById('auth_pw').value||'';
  if(!_domainOk(email)){renderAuthGate('signup',ALLOWED_EMAIL_DOMAIN+' 이메일만 가입할 수 있습니다.');return;}
  if(pw.length<6){renderAuthGate('signup','비밀번호는 6자 이상이어야 합니다.');return;}
  firebase.auth().createUserWithEmailAndPassword(email,pw)
    .catch(function(err){renderAuthGate('signup',err.message);});
}
function doLogin(){
  var email=(document.getElementById('auth_email').value||'').trim();
  var pw=document.getElementById('auth_pw').value||'';
  firebase.auth().signInWithEmailAndPassword(email,pw)
    .catch(function(err){renderAuthGate('login',err.message);});
}
function doResetPw(){
  var email=((document.getElementById('auth_email')||{}).value||'').trim();
  if(!email){alert('먼저 이메일을 입력해주세요.');return;}
  firebase.auth().sendPasswordResetEmail(email)
    .then(function(){alert('비밀번호 재설정 메일을 발송했습니다.');})
    .catch(function(err){alert('실패: '+err.message);});
}
function doLogout(){firebase.auth().signOut();}

firebase.auth().onAuthStateChanged(function(user){
  if(user&&_domainOk(user.email)){
    var overlay=document.getElementById('authOverlay');
    if(overlay)overlay.style.display='none';
    var appEl=document.querySelector('.app');
    if(appEl)appEl.style.display='';
    if(typeof startApp==='function')startApp();
  }else if(user){
    /* Firebase 자체는 가입 도메인을 제한하지 않으므로(devtools로 직접 가입 가능),
       로그인 후에도 다시 한번 확인해 잘못된 도메인 세션은 즉시 로그아웃시킨다.
       실제 데이터 보호는 각 .gs 백엔드의 서버측 재검사가 담당한다. */
    firebase.auth().signOut();
    renderAuthGate('login',ALLOWED_EMAIL_DOMAIN+' 계정만 사용할 수 있습니다.');
  }else{
    renderAuthGate('login');
  }
});

/* ── 관리자 전용 fetch에 Firebase ID 토큰을 실어 보내는 헬퍼 ──
   Apps Script 웹앱은 커스텀 헤더를 안정적으로 받지 못하므로, GET은 쿼리파라미터,
   POST는 JSON body에 idToken을 싣는다. */
function getIdToken(){
  var u=firebase.auth().currentUser;
  return u?u.getIdToken():Promise.resolve('');
}
function authedGet(url){
  return getIdToken().then(function(tok){
    var sep=url.indexOf('?')>-1?'&':'?';
    return fetch(url+sep+'idToken='+encodeURIComponent(tok));
  });
}
function authedPost(url,bodyObj){
  return getIdToken().then(function(tok){
    bodyObj.idToken=tok;
    return fetch(url,{method:'POST',headers:{'Content-Type':'text/plain'},body:JSON.stringify(bodyObj)});
  });
}
