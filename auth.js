/* ═══════════════════════════════════════════
   로그인 게이트 (Firebase Authentication, ID/비밀번호)
   — index.html(교육 관리 관리자 콘솔) 전용. apply.html/prelearn.html/exam.html은
   이메일로 받은 링크로 로그인 없이 접근해야 하므로 이 파일을 쓰지 않는다.
   기존 "관리자 모드"(app.js의 toggleAdminMode 등)는 이 로그인과 별개로 그대로 둔다 —
   로그인은 "이 콘솔에 들어올 수 있는가"이고, 관리자 모드는 "콘솔 안에서 추가 버튼을
   보여줄 것인가"라는 서로 다른 층이다.

   실제 인증(비밀번호 확인)은 여전히 전부 Firebase Auth가 담당한다 — 다만 로그인 화면에는
   이메일 대신 자체 발급 ID를 입력받고, applications.js의 Apps Script 백엔드(Code-Applications.gs)
   에 새로 추가한 "계정 디렉터리"(ID↔이메일↔이름/전화번호, 비밀번호는 저장 안 함)에서
   ID→이메일을 역조회한 뒤 그 이메일로 signInWithEmailAndPassword를 호출하는 방식이다.
   회원가입 시 Firebase의 이메일 인증(sendEmailVerification)을 "가입 승인" 절차로 사용한다 —
   @intekplus.com 이메일을 실제로 소유한 사람만 인증 링크를 클릭할 수 있으므로, 이메일 인증
   통과 = 가입 승인 완료로 처리한다(관리자 별도 승인 없음).
═══════════════════════════════════════════ */
firebase.initializeApp(FIREBASE_CONFIG);

var ID_PATTERN = /^[a-zA-Z0-9_]{4,20}$/;
var PW_PATTERN = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/;

/* 로그인 화면 5개국어(한국어/영어/중국어 간체·번체/일본어) + 베트남어 — i18n.js의 LANGS/getLang·setLang을
   그대로 재사용해 언어 선택이 앱 전체와 일관되게 저장된다. apply.js용 I18N 객체와는
   무관한 로그인 전용 문구라 별도 딕셔너리(AUTH_I18N)로 둔다. */
var AUTH_I18N = {
  ko: { appName:'BU2 교육 관리', login:'로그인', signup:'회원가입', idLabel:'아이디', pwLabel:'비밀번호',
    toSignup:'처음이신가요? 회원가입', toLogin:'이미 계정이 있으신가요? 로그인',
    loginBtn:'로그인', signupBtn:'가입하기', forgotPw:'비밀번호를 잊으셨나요?',
    domainSignupErr:'{domain} 이메일만 가입할 수 있습니다.',
    domainOnlyErr:'{domain} 계정만 사용할 수 있습니다.', resetPwNeedId:'먼저 아이디를 입력해주세요.',
    resetPwSent:'비밀번호 재설정 메일을 발송했습니다.', resetPwFailPrefix:'실패: ',
    rememberId:'아이디 저장', staySignedIn:'이 기기에서 로그인 상태 유지',
    nameLabel:'이름', emailLabel:'이메일', phoneLabel:'전화번호', pwConfirmLabel:'비밀번호 확인',
    checkIdBtn:'중복확인', idAvailable:'사용 가능한 아이디입니다.', idTaken:'이미 사용 중인 아이디입니다.',
    idInvalid:'아이디는 영문/숫자/밑줄 4~20자여야 합니다.', idNotCheckedErr:'아이디 중복확인을 먼저 진행해주세요.',
    pwRuleHint:'영문, 숫자, 특수문자를 포함해 8자 이상 입력해주세요.', pwRuleErr:'비밀번호는 영문+숫자+특수문자를 포함해 8자 이상이어야 합니다.',
    pwMismatchErr:'비밀번호가 일치하지 않습니다.', nameNeedErr:'이름을 입력해주세요.', phoneNeedErr:'전화번호를 입력해주세요.',
    signupSuccessInfo:'{email}로 발송된 인증 메일의 링크를 클릭해 인증을 완료해주세요. 인증 후 로그인할 수 있습니다.',
    idNotFoundErr:'존재하지 않는 아이디입니다.',
    emailNotVerifiedInfo:'이메일 인증이 완료되지 않았습니다. 메일함을 확인해 인증을 완료해주세요. (인증 메일을 다시 보냈습니다)' },
  en: { appName:'BU2 Training Management', login:'Login', signup:'Sign Up', idLabel:'ID', pwLabel:'Password',
    toSignup:'New here? Sign up', toLogin:'Already have an account? Log in',
    loginBtn:'Log In', signupBtn:'Sign Up', forgotPw:'Forgot your password?',
    domainSignupErr:'Only {domain} email addresses can sign up.',
    domainOnlyErr:'Only {domain} accounts can be used.', resetPwNeedId:'Please enter your ID first.',
    resetPwSent:'Password reset email sent.', resetPwFailPrefix:'Failed: ',
    rememberId:'Remember ID', staySignedIn:'Stay signed in on this device',
    nameLabel:'Name', emailLabel:'Email', phoneLabel:'Phone Number', pwConfirmLabel:'Confirm Password',
    checkIdBtn:'Check', idAvailable:'This ID is available.', idTaken:'This ID is already taken.',
    idInvalid:'ID must be 4-20 letters, numbers, or underscores.', idNotCheckedErr:'Please check ID availability first.',
    pwRuleHint:'At least 8 characters, including letters, numbers, and a special character.', pwRuleErr:'Password must be at least 8 characters and include letters, numbers, and a special character.',
    pwMismatchErr:'Passwords do not match.', nameNeedErr:'Please enter your name.', phoneNeedErr:'Please enter your phone number.',
    signupSuccessInfo:'A verification email was sent to {email}. Click the link to verify, then log in.',
    idNotFoundErr:'This ID does not exist.',
    emailNotVerifiedInfo:'Your email is not verified yet. Please check your inbox to complete verification. (We resent the verification email.)' },
  'zh-CN': { appName:'BU2 培训管理', login:'登录', signup:'注册', idLabel:'账号', pwLabel:'密码',
    toSignup:'初次使用？注册', toLogin:'已有账号？登录',
    loginBtn:'登录', signupBtn:'注册', forgotPw:'忘记密码了吗？',
    domainSignupErr:'仅限 {domain} 邮箱注册。',
    domainOnlyErr:'仅限使用 {domain} 账号。', resetPwNeedId:'请先输入账号。',
    resetPwSent:'密码重置邮件已发送。', resetPwFailPrefix:'失败：',
    rememberId:'记住账号', staySignedIn:'在此设备保持登录状态',
    nameLabel:'姓名', emailLabel:'邮箱', phoneLabel:'电话号码', pwConfirmLabel:'确认密码',
    checkIdBtn:'查重', idAvailable:'该账号可用。', idTaken:'该账号已被使用。',
    idInvalid:'账号需为4-20位英文字母、数字或下划线。', idNotCheckedErr:'请先进行账号查重。',
    pwRuleHint:'至少8位，需包含字母、数字和特殊字符。', pwRuleErr:'密码至少8位，需包含字母、数字和特殊字符。',
    pwMismatchErr:'两次密码不一致。', nameNeedErr:'请输入姓名。', phoneNeedErr:'请输入电话号码。',
    signupSuccessInfo:'验证邮件已发送至 {email}，请点击邮件中的链接完成验证后再登录。',
    idNotFoundErr:'该账号不存在。',
    emailNotVerifiedInfo:'邮箱尚未完成验证，请查收邮件完成验证。（验证邮件已重新发送）' },
  'zh-TW': { appName:'BU2 培訓管理', login:'登入', signup:'註冊', idLabel:'帳號', pwLabel:'密碼',
    toSignup:'初次使用？註冊', toLogin:'已有帳號？登入',
    loginBtn:'登入', signupBtn:'註冊', forgotPw:'忘記密碼了嗎？',
    domainSignupErr:'僅限 {domain} 電子郵件註冊。',
    domainOnlyErr:'僅限使用 {domain} 帳號。', resetPwNeedId:'請先輸入帳號。',
    resetPwSent:'密碼重設郵件已發送。', resetPwFailPrefix:'失敗：',
    rememberId:'記住帳號', staySignedIn:'在此裝置保持登入狀態',
    nameLabel:'姓名', emailLabel:'電子郵件', phoneLabel:'電話號碼', pwConfirmLabel:'確認密碼',
    checkIdBtn:'查重', idAvailable:'該帳號可用。', idTaken:'該帳號已被使用。',
    idInvalid:'帳號需為4-20位英文字母、數字或底線。', idNotCheckedErr:'請先進行帳號查重。',
    pwRuleHint:'至少8位，需包含字母、數字和特殊字元。', pwRuleErr:'密碼至少8位，需包含字母、數字和特殊字元。',
    pwMismatchErr:'兩次密碼不一致。', nameNeedErr:'請輸入姓名。', phoneNeedErr:'請輸入電話號碼。',
    signupSuccessInfo:'驗證郵件已發送至 {email}，請點擊郵件中的連結完成驗證後再登入。',
    idNotFoundErr:'該帳號不存在。',
    emailNotVerifiedInfo:'電子郵件尚未完成驗證，請查收郵件完成驗證。（驗證郵件已重新發送）' },
  ja: { appName:'BU2 研修管理', login:'ログイン', signup:'新規登録', idLabel:'ID', pwLabel:'パスワード',
    toSignup:'初めてですか？新規登録', toLogin:'アカウントをお持ちですか？ログイン',
    loginBtn:'ログイン', signupBtn:'登録する', forgotPw:'パスワードをお忘れですか？',
    domainSignupErr:'{domain} のメールアドレスのみ登録できます。',
    domainOnlyErr:'{domain} アカウントのみ使用できます。', resetPwNeedId:'先にIDを入力してください。',
    resetPwSent:'パスワード再設定メールを送信しました。', resetPwFailPrefix:'失敗：',
    rememberId:'IDを保存', staySignedIn:'この端末でログイン状態を保持',
    nameLabel:'氏名', emailLabel:'メールアドレス', phoneLabel:'電話番号', pwConfirmLabel:'パスワード確認',
    checkIdBtn:'重複確認', idAvailable:'使用可能なIDです。', idTaken:'このIDは既に使用されています。',
    idInvalid:'IDは英数字とアンダースコアで4〜20文字にしてください。', idNotCheckedErr:'先にID重複確認を行ってください。',
    pwRuleHint:'英字・数字・記号を含む8文字以上で入力してください。', pwRuleErr:'パスワードは英字・数字・記号を含む8文字以上にしてください。',
    pwMismatchErr:'パスワードが一致しません。', nameNeedErr:'氏名を入力してください。', phoneNeedErr:'電話番号を入力してください。',
    signupSuccessInfo:'{email} に送信された認証メールのリンクをクリックして認証を完了してください。認証後にログインできます。',
    idNotFoundErr:'このIDは存在しません。',
    emailNotVerifiedInfo:'メール認証が完了していません。受信箱をご確認の上、認証を完了してください。（認証メールを再送信しました）' },
  vi: { appName:'Quản lý đào tạo BU2', login:'Đăng nhập', signup:'Đăng ký', idLabel:'Tên đăng nhập', pwLabel:'Mật khẩu',
    toSignup:'Lần đầu sử dụng? Đăng ký', toLogin:'Đã có tài khoản? Đăng nhập',
    loginBtn:'Đăng nhập', signupBtn:'Đăng ký', forgotPw:'Quên mật khẩu?',
    domainSignupErr:'Chỉ email {domain} mới có thể đăng ký.',
    domainOnlyErr:'Chỉ có thể dùng tài khoản {domain}.', resetPwNeedId:'Vui lòng nhập ID trước.',
    resetPwSent:'Đã gửi email đặt lại mật khẩu.', resetPwFailPrefix:'Thất bại: ',
    rememberId:'Lưu ID', staySignedIn:'Duy trì đăng nhập trên thiết bị này',
    nameLabel:'Họ tên', emailLabel:'Email', phoneLabel:'Số điện thoại', pwConfirmLabel:'Xác nhận mật khẩu',
    checkIdBtn:'Kiểm tra', idAvailable:'ID này có thể sử dụng.', idTaken:'ID này đã được sử dụng.',
    idInvalid:'ID phải gồm 4-20 ký tự chữ, số hoặc gạch dưới.', idNotCheckedErr:'Vui lòng kiểm tra ID trước.',
    pwRuleHint:'Tối thiểu 8 ký tự, gồm chữ, số và ký tự đặc biệt.', pwRuleErr:'Mật khẩu phải có ít nhất 8 ký tự, gồm chữ, số và ký tự đặc biệt.',
    pwMismatchErr:'Mật khẩu không khớp.', nameNeedErr:'Vui lòng nhập họ tên.', phoneNeedErr:'Vui lòng nhập số điện thoại.',
    signupSuccessInfo:'Email xác minh đã được gửi đến {email}. Nhấp vào liên kết để xác minh rồi đăng nhập.',
    idNotFoundErr:'ID này không tồn tại.',
    emailNotVerifiedInfo:'Email chưa được xác minh. Vui lòng kiểm tra hộp thư để hoàn tất xác minh. (Đã gửi lại email xác minh)' }
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

var _idCheckState={id:'',ok:false};
var _signupInProgress=false;
function _onIdInput(){
  _idCheckState={id:'',ok:false};
  var m=document.getElementById('idCheckMsg');
  if(m)m.textContent='';
}
function checkIdDup(){
  var idInp=document.getElementById('auth_id');
  var id=(idInp.value||'').trim();
  var msgEl=document.getElementById('idCheckMsg');
  if(!ID_PATTERN.test(id)){
    _idCheckState={id:'',ok:false};
    if(msgEl){msgEl.textContent='⚠ '+_at('idInvalid');msgEl.style.color='#e07070';}
    return;
  }
  if(msgEl){msgEl.textContent='...';msgEl.style.color='var(--tx-second)';}
  fetch(getApplySheetsUrl()+'?action=checkId&id='+encodeURIComponent(id))
    .then(function(r){return r.json();})
    .then(function(data){
      if(!msgEl)return;
      if(data.available){
        _idCheckState={id:id.toLowerCase(),ok:true};
        msgEl.textContent='✅ '+_at('idAvailable');msgEl.style.color='#4ade9a';
      }else{
        _idCheckState={id:'',ok:false};
        msgEl.textContent='⚠ '+_at('idTaken');msgEl.style.color='#e07070';
      }
    })
    .catch(function(){
      _idCheckState={id:'',ok:false};
      if(msgEl){msgEl.textContent='⚠ '+_at('idInvalid');msgEl.style.color='#e07070';}
    });
}

var _authMode='login';
function renderAuthGate(mode, errMsg, infoMsg, prefill){
  _authMode=mode;
  prefill=prefill||{};
  var overlay=document.getElementById('authOverlay');
  if(!overlay)return;
  overlay.style.display='flex';
  overlay.className='auth-overlay'+(mode==='signup'?' auth-overlay-center':'');
  var appEl=document.querySelector('.app');
  if(appEl)appEl.style.display='none';
  var isSignup=mode==='signup';
  var langOpts=LANGS.map(function(l){return '<option value="'+l.id+'"'+(l.id===getLang()?' selected':'')+'>'+esc(l.label)+'</option>';}).join('');
  var banners=(errMsg?'<div class="auth-err">'+esc(errMsg)+'</div>':'')+(infoMsg?'<div class="auth-info">'+esc(infoMsg)+'</div>':'');
  var fields;
  if(isSignup){
    fields=
      '<div class="fg"><label class="fl">'+esc(_at('nameLabel'))+'</label>'
        +'<input type="text" id="auth_name" value="'+esc(prefill.name||'')+'" autocomplete="off" readonly onfocus="this.removeAttribute(\'readonly\')"></div>'
      +'<div class="fg"><label class="fl">'+esc(_at('idLabel'))+'</label>'
        +'<div style="display:flex;gap:8px;align-items:center">'
          +'<input type="text" id="auth_id" value="'+esc(prefill.id||'')+'" autocomplete="off" readonly onfocus="this.removeAttribute(\'readonly\')" oninput="_onIdInput()" style="flex:1">'
          +'<button type="button" class="btn sm" onclick="checkIdDup()">'+esc(_at('checkIdBtn'))+'</button>'
        +'</div>'
        +'<div id="idCheckMsg" style="font-size:18px;margin-top:8px;min-height:1.2em;color:var(--tx-second)"></div>'
      +'</div>'
      +'<div class="fg"><label class="fl">'+esc(_at('pwLabel'))+'</label>'
        +'<input type="password" id="auth_pw" autocomplete="off" readonly onfocus="this.removeAttribute(\'readonly\')">'
        +'<div style="font-size:16px;color:var(--tx-second);margin-top:8px">'+esc(_at('pwRuleHint'))+'</div>'
      +'</div>'
      +'<div class="fg"><label class="fl">'+esc(_at('pwConfirmLabel'))+'</label>'
        +'<input type="password" id="auth_pw2" autocomplete="off" readonly onfocus="this.removeAttribute(\'readonly\')" onkeydown="if(event.key===\'Enter\')doSignupNew()"></div>'
      +'<div class="fg"><label class="fl">'+esc(_at('emailLabel'))+' ('+esc(ALLOWED_EMAIL_DOMAIN)+')</label>'
        +'<input type="email" id="auth_email" placeholder="name'+esc(ALLOWED_EMAIL_DOMAIN)+'" value="'+esc(prefill.email||'')+'" autocomplete="off" readonly onfocus="this.removeAttribute(\'readonly\')"></div>'
      +'<div class="fg"><label class="fl">'+esc(_at('phoneLabel'))+'</label>'
        +'<input type="tel" id="auth_phone" value="'+esc(prefill.phone||'')+'" autocomplete="off" readonly onfocus="this.removeAttribute(\'readonly\')"></div>';
  }else{
    fields=
      '<div class="fg"><label class="fl">'+esc(_at('idLabel'))+'</label>'
        +'<input type="text" id="auth_id" value="'+esc(prefill.id||'')+'" autocomplete="off" readonly onfocus="this.removeAttribute(\'readonly\')"></div>'
      +'<div class="fg"><label class="fl">'+esc(_at('pwLabel'))+'</label>'
        +'<input type="password" id="auth_pw" autocomplete="off" readonly onfocus="this.removeAttribute(\'readonly\')" onkeydown="if(event.key===\'Enter\')doLogin()"></div>'
      +'<div style="display:flex;flex-direction:column;gap:6px;margin:-4px 0 4px">'
        +'<label class="chkrow" style="font-size:12px"><input type="checkbox" id="auth_remember_id"> '+esc(_at('rememberId'))+'</label>'
        +'<label class="chkrow" style="font-size:12px"><input type="checkbox" id="auth_stay_signed_in"> '+esc(_at('staySignedIn'))+'</label>'
      +'</div>';
  }
  overlay.innerHTML='<div class="auth-box">'
    +'<div class="auth-topbar">'
      +'<img class="auth-logo" src="Images/intekplus-logo.png" alt="INTEK PLUS">'
      +'<select onchange="_authSetLang(this.value)">'+langOpts+'</select>'
    +'</div>'
    +'<div class="mtit">'+esc(_at('appName'))+' — '+(isSignup?esc(_at('signup')):esc(_at('login')))+'</div>'
    +banners
    +fields
    +'<div class="mfoot" style="justify-content:space-between;align-items:center">'
      +'<a href="javascript:void(0)" onclick="'+(isSignup?'_idCheckState={id:\'\',ok:false};renderAuthGate(\'login\')':'renderAuthGate(\'signup\')')+'" style="color:var(--tx-second)">'
        +(isSignup?esc(_at('toLogin')):esc(_at('toSignup')))
      +'</a>'
      +'<button class="btn sm pri" onclick="'+(isSignup?'doSignupNew()':'doLogin()')+'">'+(isSignup?esc(_at('signupBtn')):esc(_at('loginBtn')))+'</button>'
    +'</div>'
    +(isSignup?'':'<div style="text-align:center;margin-top:20px"><a href="javascript:void(0)" onclick="doResetPw()" style="font-size:20px;color:var(--tx-second)">'+esc(_at('forgotPw'))+'</a></div>');
  /* 브라우저(Chrome 등)가 이전에 저장해둔 로그인 정보를 자동으로 채워 넣는 시점은
     페이지마다 제각각이라 setTimeout/setInterval로는 정확히 못 맞춘다. 대신 CSS의
     :-webkit-autofill 의사 클래스가 켜지는 순간 빈 애니메이션이 시작되도록 만들어두고
     (style.css의 onAutoFillStart), 그 animationstart 이벤트를 감지해서 자동입력되는
     바로 그 순간 값을 비운다 — 타이밍에 의존하지 않아 항상 정확히 동작한다. */
  ['auth_id','auth_pw','auth_pw2','auth_name','auth_email','auth_phone'].forEach(function(id){
    var inp=document.getElementById(id);
    if(!inp)return;
    inp.addEventListener('animationstart',function(ev){
      if(ev.animationName==='onAutoFillStart')inp.value='';
    });
  });
  /* "아이디 저장"을 체크했던 적이 있으면 아이디 칸을 미리 채우고 체크박스도 켜둔다.
     비밀번호는 저장하지 않는다 — 평문으로 브라우저에 남기는 것 자체가 보안 위험이라,
     "로그인 상태 유지"는 아래 doLogin()에서 Firebase의 Persistence(LOCAL)로 처리한다. */
  if(!isSignup&&!prefill.id){
    try{
      var savedId=localStorage.getItem('edu_auth_remember_id');
      if(savedId){
        var idInp2=document.getElementById('auth_id');
        if(idInp2)idInp2.value=savedId;
        var rememberChk=document.getElementById('auth_remember_id');
        if(rememberChk)rememberChk.checked=true;
      }
    }catch(e){}
  }
}

function doSignupNew(){
  var name=(document.getElementById('auth_name').value||'').trim();
  var id=(document.getElementById('auth_id').value||'').trim();
  var pw=document.getElementById('auth_pw').value||'';
  var pw2=document.getElementById('auth_pw2').value||'';
  var email=(document.getElementById('auth_email').value||'').trim();
  var phone=(document.getElementById('auth_phone').value||'').trim();
  var prefill={name:name,id:id,email:email,phone:phone};
  if(!name){renderAuthGate('signup',_at('nameNeedErr'),null,prefill);return;}
  if(!ID_PATTERN.test(id)){renderAuthGate('signup',_at('idInvalid'),null,prefill);return;}
  if(!(_idCheckState.ok&&_idCheckState.id===id.toLowerCase())){renderAuthGate('signup',_at('idNotCheckedErr'),null,prefill);return;}
  if(!PW_PATTERN.test(pw)){renderAuthGate('signup',_at('pwRuleErr'),null,prefill);return;}
  if(pw!==pw2){renderAuthGate('signup',_at('pwMismatchErr'),null,prefill);return;}
  if(!_domainOk(email)){renderAuthGate('signup',_at('domainSignupErr'),null,prefill);return;}
  if(!phone){renderAuthGate('signup',_at('phoneNeedErr'),null,prefill);return;}

  _signupInProgress=true;
  var createdUser=null;
  firebase.auth().createUserWithEmailAndPassword(email,pw)
    .then(function(cred){
      createdUser=cred.user;
      return cred.user.sendEmailVerification({url:location.origin+location.pathname});
    })
    .then(function(){
      return fetch(getApplySheetsUrl(),{method:'POST',headers:{'Content-Type':'text/plain'},
        body:JSON.stringify({action:'registerAccount',account:{id:id,email:email,name:name,phone:phone}})});
    })
    .then(function(r){return r.json();})
    .then(function(data){
      if(data.error){
        var msg=data.error==='id_taken'?_at('idTaken'):(data.error==='invalid_domain'?_at('domainSignupErr'):_at('idInvalid'));
        if(createdUser)return createdUser.delete().catch(function(){}).then(function(){throw new Error(msg);});
        throw new Error(msg);
      }
      return firebase.auth().signOut();
    })
    .then(function(){
      _signupInProgress=false;
      _idCheckState={id:'',ok:false};
      renderAuthGate('login',null,_at('signupSuccessInfo').split('{email}').join(email));
    })
    .catch(function(err){
      _signupInProgress=false;
      renderAuthGate('signup',err.message,null,prefill);
    });
}

function doLogin(){
  var id=(document.getElementById('auth_id').value||'').trim();
  var pw=document.getElementById('auth_pw').value||'';
  var rememberId=!!(document.getElementById('auth_remember_id')||{}).checked;
  var staySignedIn=!!(document.getElementById('auth_stay_signed_in')||{}).checked;
  try{
    if(rememberId)localStorage.setItem('edu_auth_remember_id',id);
    else localStorage.removeItem('edu_auth_remember_id');
  }catch(e){}
  /* "로그인 상태 유지"를 체크하면 Firebase Persistence를 LOCAL로 설정해 브라우저를 껐다 켜도
     로그인이 유지되게 하고(재방문 시 로그인 화면 자체를 건너뜀), 체크 안 하면 SESSION으로
     설정해 탭/브라우저를 닫으면 로그아웃되게 한다. 비밀번호 자체는 어떤 경우에도 저장하지 않는다. */
  var persistence=staySignedIn?firebase.auth.Auth.Persistence.LOCAL:firebase.auth.Auth.Persistence.SESSION;
  fetch(getApplySheetsUrl()+'?action=lookupEmail&id='+encodeURIComponent(id))
    .then(function(r){return r.json();})
    .then(function(data){
      if(!data.email){renderAuthGate('login',_at('idNotFoundErr'),null,{id:id});return;}
      return firebase.auth().setPersistence(persistence)
        .then(function(){return firebase.auth().signInWithEmailAndPassword(data.email,pw);})
        .catch(function(err){renderAuthGate('login',err.message,null,{id:id});});
    })
    .catch(function(err){renderAuthGate('login',err.message,null,{id:id});});
}
function doResetPw(){
  var id=((document.getElementById('auth_id')||{}).value||'').trim();
  if(!id){alert(_at('resetPwNeedId'));return;}
  fetch(getApplySheetsUrl()+'?action=lookupEmail&id='+encodeURIComponent(id))
    .then(function(r){return r.json();})
    .then(function(data){
      if(!data.email){alert(_at('idNotFoundErr'));return;}
      return firebase.auth().sendPasswordResetEmail(data.email).then(function(){alert(_at('resetPwSent'));});
    })
    .catch(function(err){alert(_at('resetPwFailPrefix')+err.message);});
}
function doLogout(){firebase.auth().signOut();}

try{firebase.auth().languageCode=getLang();}catch(e){}

firebase.auth().onAuthStateChanged(function(user){
  if(_signupInProgress)return; // doSignupNew()가 회원가입 뒷정리(인증메일 발송/디렉터리 등록/로그아웃)를 진행 중 — 이 훅이 끼어들지 않게 한다
  if(user&&_domainOk(user.email)&&user.emailVerified){
    var overlay=document.getElementById('authOverlay');
    if(overlay)overlay.style.display='none';
    var appEl=document.querySelector('.app');
    if(appEl)appEl.style.display='';
    if(typeof startApp==='function')startApp();
  }else if(user&&_domainOk(user.email)&&!user.emailVerified){
    /* 이메일 인증 전이면 앱에 들어오지 못하게 막는다 — 링크 만료/분실 대비로 인증 메일을
       한 번 더 재발송해준다(중복 발송돼도 무해하다). */
    try{user.sendEmailVerification({url:location.origin+location.pathname});}catch(e){}
    firebase.auth().signOut();
    renderAuthGate('login',null,_at('emailNotVerifiedInfo'));
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
