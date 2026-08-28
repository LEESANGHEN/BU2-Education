/* ═══════════════════════════════════════════
   사전 선행학습 — 설비군 레지스트리
   (신청서 폼, 사전학습 사이트, 관리자 앱이 공용으로 참조)
   새 설비군이 추가되면 이 배열에 한 줄 추가 + prelearn-data-XXX.js 파일만 새로 만들면 됩니다.
═══════════════════════════════════════════ */
var EQUIPMENT_LIST=[
  {id:'smtv',name:{ko:'iSIS-SMTV (Bump-AOI)',en:'iSIS-SMTV (Bump-AOI)',zhCN:'iSIS-SMTV (Bump-AOI)',zhTW:'iSIS-SMTV (Bump-AOI)',ja:'iSIS-SMTV (Bump-AOI)'}},
  {id:'nbga',name:{ko:'iSIS-NBGA',en:'iSIS-NBGA',zhCN:'iSIS-NBGA',zhTW:'iSIS-NBGA',ja:'iSIS-NBGA'}}
];
function equipmentById(id){return EQUIPMENT_LIST.find(function(e){return e.id===id;});}
function equipmentName(id,lang){
  var e=equipmentById(id);
  if(!e)return id;
  return (e.name&&e.name[lang])||e.name.en||id;
}
