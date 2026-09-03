/* ── 참조 데이터 (BU2 FCBGA Substrate_Branch & Agent Education Curriculum.xlsx 기준으로 시딩) ── */
var ORG_TYPES=[
  {id:'branch',  label:'해외지사',      color:'#1a6bbf'},
  {id:'agent',   label:'Agent(협력사)', color:'#b8720a'},
  {id:'customer',label:'고객사',        color:'#1a6b3a'}
];
var COUNTRIES=['한국','중국','대만','일본','베트남','말레이시아','싱가폴','태국','필리핀','인도','미국','유럽','기타'];
var VISIT_CATS=[{id:'new',label:'신규'},{id:'revisit',label:'재방문'}];
var PLAN_TYPES=[
  {id:'A',label:'Plan A · 2주 (재방문/경력 엔지니어)'},
  {id:'B',label:'Plan B · 4주+ (신규 엔지니어)'},
  {id:'custom',label:'커스텀 일정'}
];
var VISIT_STATUS=[
  {id:'planned',  label:'예정',   color:'#0f9e6e'},
  {id:'confirmed',label:'확정',   color:'#1a6bbf'},
  {id:'ongoing',  label:'진행중', color:'#cc8010'},
  {id:'done',     label:'완료',   color:'#4a4a6a'},
  {id:'cancelled',label:'취소',   color:'#b52020'}
];

var DEF_LEVELS=[
  {id:'lv0',level:0,title:'설비 기초 이해',
   target:'전 방문자 공통(필수)',
   competency:'설비군 분류, 각 설비군의 역할 설명 · 기본 HW/SW 구성 및 주요 구성 명칭 인지 (※ 독자적 조작 불가)',
   evalMethod:'필기평가(객관식 20문항) · 합격기준 80% 이상 정답',
   duration:'1~2일'},
  {id:'lv1',level:1,title:'기본 기능 조작 (Basic Operator)',
   target:'전 방문자 공통(필수)',
   competency:'설비 동작/정지 절차 수행 · SW 조작(실행, Main UI 조작, Recipe Open/Run) · 동작 관련 기본 알람 확인 및 리셋 · 검사/Log Data 저장/백업',
   evalMethod:'실기평가(체크리스트 기반 시연) · 합격기준 전 항목 Pass',
   duration:'3~5일'},
  {id:'lv2',level:2,title:'독립 운영 및 기본 유지보수 (Field Engineer)',
   target:'1개월 이상 상주 신규 엔지니어 · 재방문 엔지니어',
   competency:'정기 PM(청소/캘리브레이션/소모품 교체) 독립 수행 · 대표 알람 원인분석 및 1차 조치 · Recipe Vision Parameter 기본 수정',
   evalMethod:'실기시험(고장 시나리오 2종 이상) · 독립 수행 관찰 평가 2회 이상 통과',
   duration:'2~3주'},
  {id:'lv3',level:3,title:'전문 엔지니어 / 트레이너 (Technical Advanced Engineer)',
   target:'지사·Agent 내 기술 리더 육성 대상(선발)',
   competency:'고급 트러블슈팅(HW 교체, 광학계 정렬) · HW 구성 Module(PC, Controller, Camera) 설정 · 2D/3D Vision 광학 Module Tuning 및 검증 · 신규 레시피 개발/Data 최적화 · 근본원인분석(RCA) 보고서 작성 · 타 엔지니어 교육 수행',
   evalMethod:'종합실기 · 타 엔지니어 교육 시연 · 승인위원회 심사 · 3개월 현장 Follow-Up 확인',
   duration:'방문 3주 이상 · 귀임 후 3개월 Follow-Up'}
];

var DEF_MODULES=[
  {id:'md_a',code:'A',name:'설비 기본 구성',detail:'설비 HW, 전장 구성 소개',level:0,method:'이론',hours:4,resources:'교육 자료, 본사 설비'},
  {id:'md_b',code:'B',name:'광학 검사 이론 기초',detail:'2D/3D 검사 원리, 조명·카메라·이미지 처리 개념',level:0,method:'이론',hours:4,resources:'교육 자료, 본사 설비'},
  {id:'md_c',code:'C',name:'Software 조작(Main UI)',detail:'실행 절차, 로그인, 화면 구성, 기능 설명',level:1,method:'이론+실습',hours:8,resources:'교육 자료, 본사 설비'},
  {id:'md_d',code:'D',name:'Recipe 운용',detail:'Recipe Open/Run, 검사 결과 확인, Data Report&Log 저장/백업',level:1,method:'이론+실습',hours:16,resources:'교육 자료, 본사 설비, PCB 샘플'},
  {id:'md_e',code:'E',name:'기본 알람 대응',detail:'대표 알람 확인/리셋, 알람 로그 확인',level:1,method:'이론+실습',hours:8,resources:'교육 자료, 본사 설비'},
  {id:'md_f',code:'F',name:'정기 유지 보수(PM)',detail:'일일/주간/월간 PM, 청소, LTS 검증',level:2,method:'이론+실습',hours:4,resources:'교육 자료, 본사 설비'},
  {id:'md_g',code:'G',name:'소모품 점검/교체',detail:'Camera, 조명, Controller, PC Board, Motor, Driver 등 소모품 점검 및 교체',level:2,method:'이론+실습',hours:8,resources:'교육 자료, 본사 설비 or 소모품 세트'},
  {id:'md_h',code:'H',name:'기초 트러블슈팅',detail:'대표 고장 Module 3종 이상에 대한 원인 분석 및 1차 조치',level:2,method:'이론+실습',hours:12,resources:'본사 설비, 고장 부품'},
  {id:'md_i',code:'I',name:'Recipe Vision Parameter 수정',detail:'Gerber File, 조명/Camera/PZT, Alignment, 검사 Parameter 수정',level:2,method:'이론+실습',hours:16,resources:'교육 자료, 본사 설비, PCB 샘플'},
  {id:'md_j',code:'J',name:'고급 트러블슈팅/Data 검증',detail:'HW(PC, Camera, Controller) 설정, 2D/3D 광학 Module Tuning, Data 검증',level:3,method:'이론+실습',hours:40,resources:'교육 자료, 본사 설비, 설정 부품'},
  {id:'md_k',code:'K',name:'근본원인분석 및 검증 Report 작성',detail:'고장 이력 분석 및 보고서 작성, Data 검증 후 Report 작성 방법',level:3,method:'이론+실습',hours:8,resources:'교육 자료, 본사 설비, 보고서 양식'},
  {id:'md_l',code:'L',name:'Recipe 생성/검사 최적화',detail:'신규 검사 Recipe(Job) 생성, 검출률/오검율/UPH 최적화',level:3,method:'실습',hours:24,resources:'다양한 결함 샘플'},
  {id:'md_m',code:'M',name:'교육 스킬(Train-the-Trainer)',detail:'모의 교육 상황 시연, 교육 자료 활용법',level:3,method:'이론+시연',hours:8,resources:'교육자료 템플릿'}
];

/* phase: 'pre'(방문 전 사전 선행학습, Level0~1만) / 'onsite'(본사 방문 중 이수 체크리스트, Level0~3) */
var DEF_CHECKLIST=[
  {id:'pre1',no:1,phase:'pre',level:0,module:'HW 기초',item:'HW Module 구성 및 구조의 이해',order:0},
  {id:'pre2',no:2,phase:'pre',level:0,module:'전장 기초',item:'전장 구성 및 구조의 이해',order:1},
  {id:'pre3',no:3,phase:'pre',level:0,module:'광학 기초',item:'2D/3D 광학 원리의 이해',order:2},
  {id:'pre4',no:4,phase:'pre',level:0,module:'시스템 구성',item:'PC, Board, Controller, Camera 연동 원리의 이해',order:3},
  {id:'pre5',no:5,phase:'pre',level:0,module:'검사 개념',item:'Image 처리의 개념',order:4},
  {id:'pre6',no:6,phase:'pre',level:1,module:'SW 조작',item:'SW 설치, 실행, 로그인',order:5},
  {id:'pre7',no:7,phase:'pre',level:1,module:'SW 조작',item:'Main UI 구성 및 기능 이해(개념)',order:6},

  {id:'os1', no:1, phase:'onsite',level:0,module:'설비 기본 구성',   item:'HW Module 구성 및 구조의 이해',order:0},
  {id:'os2', no:2, phase:'onsite',level:0,module:'설비 기본 구성',   item:'전장 구성 및 구조의 이해',order:1},
  {id:'os3', no:3, phase:'onsite',level:0,module:'광학검사 이론',    item:'2D/3D 광학 원리의 이해',order:2},
  {id:'os4', no:4, phase:'onsite',level:0,module:'광학검사 이론',    item:'PC, Board, Controller, Camera 연동 원리의 이해',order:3},
  {id:'os5', no:5, phase:'onsite',level:0,module:'검사 개념',        item:'Image 처리의 개념',order:4},
  {id:'os6', no:6, phase:'onsite',level:0,module:'평가',            item:'Level0 필기평가 합격 (80% 이상 정답)',order:5},
  {id:'os7', no:7, phase:'onsite',level:1,module:'SW 조작',          item:'SW 설치, 실행, 로그인',order:6},
  {id:'os8', no:8, phase:'onsite',level:1,module:'SW 조작',          item:'Main UI 구성, 기능 이해, 조작 방법',order:7},
  {id:'os9', no:9, phase:'onsite',level:1,module:'Recipe 운용(Job)', item:'제품 Recipe(Job) Open 및 Run 실행',order:8},
  {id:'os10',no:10,phase:'onsite',level:1,module:'기본 알람 대응',   item:'기본 알람 확인 및 리셋 조치',order:9},
  {id:'os11',no:11,phase:'onsite',level:1,module:'Recipe 운용(Job)', item:'검사 및 Log Data 저장/백업 절차 수행',order:10},
  {id:'os12',no:12,phase:'onsite',level:1,module:'평가',            item:'Level1 실기평가 합격 (체크리스트 전 항목 Pass)',order:11},
  {id:'os13',no:13,phase:'onsite',level:2,module:'정기 유지보수',    item:'정기 PM 절차(청소/Calibration) 독립 수행',order:12},
  {id:'os14',no:14,phase:'onsite',level:2,module:'정기 유지보수',    item:'소모품(조명/Controller 등) 점검 및 교체',order:13},
  {id:'os15',no:15,phase:'onsite',level:2,module:'기초 트러블슈팅',  item:'대표 고장 Module 3종 이상에 대한 원인 분석 및 1차 조치',order:14},
  {id:'os16',no:16,phase:'onsite',level:2,module:'Recipe 운용(검사)',item:'Gerber File, 조명/Camera/PZT, Alignment, 검사 Parameter 수정',order:15},
  {id:'os17',no:17,phase:'onsite',level:2,module:'평가',            item:'Level2 실기시험(고장 시나리오 2종 이상) 합격',order:16},
  {id:'os18',no:18,phase:'onsite',level:2,module:'평가',            item:'독립수행 관찰평가 2회 이상 통과',order:17},
  {id:'os19',no:19,phase:'onsite',level:3,module:'고급 트러블슈팅',  item:'HW(PC, Camera, Controller) 설정, 2D/3D 광학 Module Tuning, Data 검증',order:18},
  {id:'os20',no:20,phase:'onsite',level:3,module:'레시피 개발',      item:'신규 검사 Recipe 생성, 검출률/오검율/UPH 최적화',order:19},
  {id:'os21',no:21,phase:'onsite',level:3,module:'근본원인분석',     item:'고장 이력 분석 및 보고서 작성, Data 검증 후 Report 작성 방법',order:20},
  {id:'os22',no:22,phase:'onsite',level:3,module:'교육 스킬',        item:'모의 교육 상황 시연, 교육 자료 활용법',order:21},
  {id:'os23',no:23,phase:'onsite',level:3,module:'평가',            item:'Level3 종합실기 + 승인위원회 심사 합격',order:22},
  {id:'os24',no:24,phase:'onsite',level:3,module:'평가',            item:'3개월 현장 Follow-Up 결과 확인 (최종 승인조건)',order:23}
];

/* Level별 평가기준/재평가 규정 · 승인 절차 참고 자료 (읽기전용 — 커리큘럼 관리 탭에 표시) */
var EVAL_CRITERIA=[
  {level:0,method:'필기평가(객관식 20문항)',pass:'80% 이상 정답',evaluator:'교육 담당자',retry:'당일 재교육 후 즉시 재시험 (1회 무료 재시험)'},
  {level:1,method:'실기평가(체크리스트 기반 시연)',pass:'체크리스트 전 항목 Pass',evaluator:'교육 담당자',retry:'미흡 항목만 보충실습 후 익일 재평가 (1회 허용)'},
  {level:2,method:'실기시험(고장 시나리오 2종 이상) · 독립 수행 관찰 평가 2회 이상',pass:'고장 시나리오 전부 해결 · 관찰 2회 모두 통과',evaluator:'교육 담당자 + 팀장',retry:'미흡 영역 추가 OJT(1~2일) 후 재평가, 팀장 확인 필요'},
  {level:3,method:'종합실기 · 타 엔지니어 교육 시연 · 심사위원 심사 · 3개월 현장 Follow-Up',pass:'평가자+심사위원 과반 이상 승인 · Follow-Up 결과 이상無',evaluator:'교육 담당자 + 파트장 + 그룹장 + 심사위원',retry:'보완 요구사항 이행 후 재심사, 또는 차기 방문 시 재도전'}
];
var APPROVAL_ROLES=[
  {level:0,roles:['trainerSign','partLeadSign','groupLeadSign']},
  {level:1,roles:['trainerSign','partLeadSign','groupLeadSign']},
  {level:2,roles:['trainerSign','partLeadSign','groupLeadSign']},
  {level:3,roles:['trainerSign','partLeadSign','groupLeadSign','committeeSign']}
];
var ROLE_LBL={trainerSign:'교육담당자',partLeadSign:'파트장',groupLeadSign:'그룹장',committeeSign:'심사위원'};

var DEF={trainees:[],visits:[],levels:DEF_LEVELS,modules:DEF_MODULES,checklistItems:DEF_CHECKLIST,completions:[],approvals:[]};
