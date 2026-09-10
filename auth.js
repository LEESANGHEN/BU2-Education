/* ═══════════════════════════════════════════
   로그인 게이트 (Firebase Authentication, 이메일/비밀번호)
   — index.html(교육 관리 관리자 콘솔) 전용. apply.html/prelearn.html/exam.html은
   이메일로 받은 링크로 로그인 없이 접근해야 하므로 이 파일을 쓰지 않는다.
   기존 "관리자 모드"(app.js의 toggleAdminMode 등)는 이 로그인과 별개로 그대로 둔다 —
   로그인은 "이 콘솔에 들어올 수 있는가"이고, 관리자 모드는 "콘솔 안에서 추가 버튼을
   보여줄 것인가"라는 서로 다른 층이다.
═══════════════════════════════════════════ */
firebase.initializeApp(FIREBASE_CONFIG);

/* 로그인 화면 5개국어(한국어/영어/중국어 간체·번체/일본어) — i18n.js의 LANGS/getLang·setLang을
   그대로 재사용해 언어 선택이 앱 전체와 일관되게 저장된다. apply.js용 I18N 객체와는
   무관한 로그인 전용 문구라 별도 딕셔너리(AUTH_I18N)로 둔다. */
var AUTH_I18N = {
  ko: { appName:'BU2 교육 관리', login:'로그인', signup:'회원가입', emailLabel:'이메일', pwLabel:'비밀번호',
    toSignup:'처음이신가요? 회원가입', toLogin:'이미 계정이 있으신가요? 로그인',
    loginBtn:'로그인', signupBtn:'가입하기', forgotPw:'비밀번호를 잊으셨나요?',
    domainSignupErr:'{domain} 이메일만 가입할 수 있습니다.', pwLenErr:'비밀번호는 6자 이상이어야 합니다.',
    domainOnlyErr:'{domain} 계정만 사용할 수 있습니다.', resetPwNeedEmail:'먼저 이메일을 입력해주세요.',
    resetPwSent:'비밀번호 재설정 메일을 발송했습니다.', resetPwFailPrefix:'실패: ' },
  en: { appName:'BU2 Training Management', login:'Login', signup:'Sign Up', emailLabel:'Email', pwLabel:'Password',
    toSignup:'New here? Sign up', toLogin:'Already have an account? Log in',
    loginBtn:'Log In', signupBtn:'Sign Up', forgotPw:'Forgot your password?',
    domainSignupErr:'Only {domain} email addresses can sign up.', pwLenErr:'Password must be at least 6 characters.',
    domainOnlyErr:'Only {domain} accounts can be used.', resetPwNeedEmail:'Please enter your email first.',
    resetPwSent:'Password reset email sent.', resetPwFailPrefix:'Failed: ' },
  'zh-CN': { appName:'BU2 培训管理', login:'登录', signup:'注册', emailLabel:'邮箱', pwLabel:'密码',
    toSignup:'初次使用？注册', toLogin:'已有账号？登录',
    loginBtn:'登录', signupBtn:'注册', forgotPw:'忘记密码了吗？',
    domainSignupErr:'仅限 {domain} 邮箱注册。', pwLenErr:'密码必须至少6位。',
    domainOnlyErr:'仅限使用 {domain} 账号。', resetPwNeedEmail:'请先输入邮箱。',
    resetPwSent:'密码重置邮件已发送。', resetPwFailPrefix:'失败：' },
  'zh-TW': { appName:'BU2 培訓管理', login:'登入', signup:'註冊', emailLabel:'電子郵件', pwLabel:'密碼',
    toSignup:'初次使用？註冊', toLogin:'已有帳號？登入',
    loginBtn:'登入', signupBtn:'註冊', forgotPw:'忘記密碼了嗎？',
    domainSignupErr:'僅限 {domain} 電子郵件註冊。', pwLenErr:'密碼必須至少6位。',
    domainOnlyErr:'僅限使用 {domain} 帳號。', resetPwNeedEmail:'請先輸入電子郵件。',
    resetPwSent:'密碼重設郵件已發送。', resetPwFailPrefix:'失敗：' },
  ja: { appName:'BU2 研修管理', login:'ログイン', signup:'新規登録', emailLabel:'メールアドレス', pwLabel:'パスワード',
    toSignup:'初めてですか？新規登録', toLogin:'アカウントをお持ちですか？ログイン',
    loginBtn:'ログイン', signupBtn:'登録する', forgotPw:'パスワードをお忘れですか？',
    domainSignupErr:'{domain} のメールアドレスのみ登録できます。', pwLenErr:'パスワードは6文字以上で入力してください。',
    domainOnlyErr:'{domain} アカウントのみ使用できます。', resetPwNeedEmail:'先にメールアドレスを入力してください。',
    resetPwSent:'パスワード再設定メールを送信しました。', resetPwFailPrefix:'失敗：' }
};
function _at(key){
  var lang=getLang();
  var d=(AUTH_I18N[lang]&&AUTH_I18N[lang][key]!==undefined)?AUTH_I18N[lang][key]:AUTH_I18N.ko[key];
  return String(d||'').split('{domain}').join(ALLOWED_EMAIL_DOMAIN);
}
function _authSetLang(l){
  setLang(l);
  try{firebase.auth().languageCode=l;}catch(e){}
  renderAuthGate(_authMode);
}

function _domainOk(email){
  return !!email && String(email).toLowerCase().endsWith(ALLOWED_EMAIL_DOMAIN);
}

var _authMode='login';
function renderAuthGate(mode, errMsg){
  _authMode=mode;
  var overlay=document.getElementById('authOverlay');
  if(!overlay)return;
  overlay.style.display='flex';
  var appEl=document.querySelector('.app');
  if(appEl)appEl.style.display='none';
  var isSignup=mode==='signup';
  var langOpts=LANGS.map(function(l){return '<option value="'+l.id+'"'+(l.id===getLang()?' selected':'')+'>'+esc(l.label)+'</option>';}).join('');
  overlay.innerHTML='<div class="auth-box">'
    +'<div class="auth-langbar"><select onchange="_authSetLang(this.value)">'+langOpts+'</select></div>'
    +'<div class="mtit">🎓 '+esc(_at('appName'))+' — '+(isSignup?esc(_at('signup')):esc(_at('login')))+'</div>'
    +(errMsg?'<div class="auth-err">'+esc(errMsg)+'</div>':'')
    +'<div class="fg"><label class="fl">'+esc(_at('emailLabel'))+' ('+esc(ALLOWED_EMAIL_DOMAIN)+')</label>'
      +'<input type="email" id="auth_email" placeholder="name'+esc(ALLOWED_EMAIL_DOMAIN)+'" autocomplete="off"></div>'
    +'<div class="fg"><label class="fl">'+esc(_at('pwLabel'))+'</label>'
      +'<input type="password" id="auth_pw" autocomplete="off" onkeydown="if(event.key===\'Enter\')'+(isSignup?'doSignup()':'doLogin()')+'"></div>'
    +'<div class="mfoot" style="justify-content:space-between;align-items:center">'
      +'<a href="javascript:void(0)" onclick="renderAuthGate(\''+(isSignup?'login':'signup')+'\')" style="color:var(--tx-second)">'
        +(isSignup?esc(_at('toLogin')):esc(_at('toSignup')))
      +'</a>'
      +'<button class="btn sm pri" onclick="'+(isSignup?'doSignup()':'doLogin()')+'">'+(isSignup?esc(_at('signupBtn')):esc(_at('loginBtn')))+'</button>'
    +'</div>'
    +(isSignup?'':'<div style="text-align:center;margin-top:20px"><a href="javascript:void(0)" onclick="doResetPw()" style="font-size:20px;color:var(--tx-second)">'+esc(_at('forgotPw'))+'</a></div>');
  /* 브라우저(Chrome 등)가 이전에 저장해둔 로그인 정보를 이 빈 입력창에 자동으로 채워 넣는
     경우가 있는데, 그 시점이 렌더링 직후일 수도, 페이지 로드가 다 끝난 뒤일 수도 있어
     한두 번의 지연 실행만으로는 못 막는 경우가 있었다. 그래서 "사용자가 실제로 이 입력창을
     건드리기 전까지"는 짧은 간격으로 계속 비워서, 자동입력이 언제 끼어들든 화면엔 항상
     빈 칸으로 보이게 한다. 사용자가 직접 클릭/입력한 순간부터는 더 이상 건드리지 않는다. */
  var _e=document.getElementById('auth_email'), _p=document.getElementById('auth_pw');
  var _touched=false;
  function _markTouched(){_touched=true;}
  if(_e){_e.addEventListener('focus',_markTouched);_e.addEventListener('keydown',_markTouched);}
  if(_p){_p.addEventListener('focus',_markTouched);_p.addEventListener('keydown',_markTouched);}
  var _clears=0;
  var _clearTimer=setInterval(function(){
    _clears++;
    if(_touched||_clears>20){clearInterval(_clearTimer);return;}
    var e=document.getElementById('auth_email'), p=document.getElementById('auth_pw');
    if(e&&document.activeElement!==e)e.value='';
    if(p&&document.activeElement!==p)p.value='';
  },100);
}

function doSignup(){
  var email=(document.getElementById('auth_email').value||'').trim();
  var pw=document.getElementById('auth_pw').value||'';
  if(!_domainOk(email)){renderAuthGate('signup',_at('domainSignupErr'));return;}
  if(pw.length<6){renderAuthGate('signup',_at('pwLenErr'));return;}
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
  if(!email){alert(_at('resetPwNeedEmail'));return;}
  firebase.auth().sendPasswordResetEmail(email)
    .then(function(){alert(_at('resetPwSent'));})
    .catch(function(err){alert(_at('resetPwFailPrefix')+err.message);});
}
function doLogout(){firebase.auth().signOut();}

try{firebase.auth().languageCode=getLang();}catch(e){}

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
    renderAuthGate('login',_at('domainOnlyErr'));
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
