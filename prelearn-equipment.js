/* ═══════════════════════════════════════════
   사전 선행학습 — 설비군 레지스트리
   (신청서 폼, 사전학습 사이트, 관리자 앱이 공용으로 참조)
   새 설비군이 추가되면 이 배열에 한 줄 추가 + prelearn-data-XXX.js 파일만 새로 만들면 됩니다.
═══════════════════════════════════════════ */
/* name은 언어와 무관하게 고정된 고유명사(제품명)이므로 언어별 번역을 두지 않습니다.
   (언어 드롭다운을 바꿔도 장비 이름은 항상 이 값 그대로 표시됩니다.) */
var EQUIPMENT_LIST=[
  {id:'smtv',name:'iSIS-SMTV(NTV)'},
  {id:'nbga',name:'iSIS-NBGA'}
];
function equipmentById(id){return EQUIPMENT_LIST.find(function(e){return e.id===id;});}
function equipmentName(id){
  var e=equipmentById(id);
  return e?e.name:id;
}
