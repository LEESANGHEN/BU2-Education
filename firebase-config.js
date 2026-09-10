/* Firebase 프로젝트 설정값 — 비밀값 아님(공개 웹 API 키), 그대로 커밋해도 안전합니다.
   INSTRUCTIONS.md "0단계"를 따라 Firebase 콘솔에서 값을 복사해 아래에 붙여넣으세요. */
var FIREBASE_CONFIG = {
  apiKey: "AIzaSyBUiaNYIToY3I3iphbZ1SMkAaA9Z1B4zkE",
  authDomain: "bu2-education.firebaseapp.com",
  projectId: "bu2-education",
  appId: "1:362992739593:web:6451194ab46eaffe89fd8"
};
/* 이 도메인의 이메일만 회원가입/로그인을 허용합니다. Firebase 자체에는 도메인 제한
   기능이 없어서, 앱 코드(auth.js)와 세 개의 .gs 백엔드가 각각 이 값을 직접 검사합니다. */
var ALLOWED_EMAIL_DOMAIN = '@intekplus.com';
