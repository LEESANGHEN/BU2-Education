/* ═══════════════════════════════════════════
   🎓 교육 이수증(certificate.js) 문서 내용 다국어 지원
   (i18n.js의 LANGS(ko/en/zh-CN/zh-TW/ja) 언어셋을 그대로 사용 — 이수증 문서 전용 별도 선택값)
═══════════════════════════════════════════ */
var CERT_LANG_LS_KEY='edu_cert_lang';
function getCertLang(){try{return localStorage.getItem(CERT_LANG_LS_KEY)||'ko';}catch(e){return 'ko';}}
function setCertLang(l){try{localStorage.setItem(CERT_LANG_LS_KEY,l);}catch(e){}}
function ctd(key){var lang=getCertLang();var d=CERT_I18N[lang]&&CERT_I18N[lang].doc;return (d&&d[key]!==undefined)?d[key]:CERT_I18N.ko.doc[key];}
function ctRole(role){var lang=getCertLang();var d=CERT_I18N[lang]&&CERT_I18N[lang].roles;return (d&&d[role])||CERT_I18N.ko.roles[role]||role;}
function ctLevel(level,field){var lang=getCertLang();var d=(CERT_I18N[lang]&&CERT_I18N[lang].levels[level])||CERT_I18N.ko.levels[level];return d?d[field]:'';}
function ctItem(id,field){var lang=getCertLang();var d=(CERT_I18N[lang]&&CERT_I18N[lang].items[id])||CERT_I18N.ko.items[id];return d?d[field]:'';}
/* trainee.js의 applyExamResultToChecklist()가 자동 기입하는 "온라인 필기평가 자동반영 (54/54, 100%)" 형식의 비고를
   선택된 언어로 재구성한다. 이 패턴과 일치하지 않는 자유 기입 비고는 번역하지 않고 그대로 둔다. */
function ctNote(note){
  if(!note)return note;
  var m=/^온라인 필기평가 자동반영 \((\d+)\/(\d+),\s*(\d+)%\)$/.exec(note);
  if(!m)return note;
  return ctd('examAutoNote')+' ('+m[1]+'/'+m[2]+', '+m[3]+'%)';
}

var CERT_I18N={
ko:{
  doc:{
    title:'교육 이수증',certNo:'발급번호',name:'성명',org:'소속',position:'직책',country:'국가',
    statement1:'위 사람은 BU2 FCBGA Substrate 검사 장비 교육 과정 중',statement2:'과정을 성실히 이수하였음을 증명합니다.',
    competencyTitle:'핵심 역량',itemsDone:'이수 항목',approvalDate:'이수(승인)일자',
    itemsTitle:'세부 이수 항목',thModule:'모듈',thItem:'이수 항목',thDone:'이수',thDate:'확인일자',thNote:'비고',
    followUp:'Follow-Up 확인',followUpDone:'완료',issueDate:'발급일',
    footer:'BU2 기술운영1그룹 · 교육 담당자',
    examAutoNote:'온라인 필기평가 자동반영'
  },
  roles:{trainerSign:'교육담당자',partLeadSign:'파트장',groupLeadSign:'그룹장',committeeSign:'심사위원'},
  levels:{
    0:{title:'설비 기초 이해',competency:'설비군 분류, 각 설비군의 역할 설명 · 기본 HW/SW 구성 및 주요 구성 명칭 인지 (※ 독자적 조작 불가)'},
    1:{title:'기본 기능 조작 (Basic Operator)',competency:'설비 동작/정지 절차 수행 · SW 조작(실행, Main UI 조작, Recipe Open/Run) · 동작 관련 기본 알람 확인 및 리셋 · 검사/Log Data 저장/백업'},
    2:{title:'독립 운영 및 기본 유지보수 (Field Engineer)',competency:'정기 PM(청소/캘리브레이션/소모품 교체) 독립 수행 · 대표 알람 원인분석 및 1차 조치 · Recipe Vision Parameter 기본 수정'},
    3:{title:'전문 엔지니어 / 트레이너 (Technical Advanced Engineer)',competency:'고급 트러블슈팅(HW 교체, 광학계 정렬) · HW 구성 Module(PC, Controller, Camera) 설정 · 2D/3D Vision 광학 Module Tuning 및 검증 · 신규 레시피 개발/Data 최적화 · 근본원인분석(RCA) 보고서 작성 · 타 엔지니어 교육 수행'}
  },
  items:{
    os1:{module:'설비 기본 구성',item:'HW Module 구성 및 구조의 이해'},
    os2:{module:'설비 기본 구성',item:'전장 구성 및 구조의 이해'},
    os3:{module:'광학검사 이론',item:'2D/3D 광학 원리의 이해'},
    os4:{module:'광학검사 이론',item:'PC, Board, Controller, Camera 연동 원리의 이해'},
    os5:{module:'검사 개념',item:'Image 처리의 개념'},
    os6:{module:'평가',item:'Level0 필기평가 합격 (80% 이상 정답)'},
    os7:{module:'SW 조작',item:'SW 설치, 실행, 로그인'},
    os8:{module:'SW 조작',item:'Main UI 구성, 기능 이해, 조작 방법'},
    os9:{module:'Recipe 운용(Job)',item:'제품 Recipe(Job) Open 및 Run 실행'},
    os10:{module:'기본 알람 대응',item:'기본 알람 확인 및 리셋 조치'},
    os11:{module:'Recipe 운용(Job)',item:'검사 및 Log Data 저장/백업 절차 수행'},
    os12:{module:'평가',item:'Level1 실기평가 합격 (체크리스트 전 항목 Pass)'},
    os13:{module:'정기 유지보수',item:'정기 PM 절차(청소/Calibration) 독립 수행'},
    os14:{module:'정기 유지보수',item:'소모품(조명/Controller 등) 점검 및 교체'},
    os15:{module:'기초 트러블슈팅',item:'대표 고장 Module 3종 이상에 대한 원인 분석 및 1차 조치'},
    os16:{module:'Recipe 운용(검사)',item:'Gerber File, 조명/Camera/PZT, Alignment, 검사 Parameter 수정'},
    os17:{module:'평가',item:'Level2 실기시험(고장 시나리오 2종 이상) 합격'},
    os18:{module:'평가',item:'독립수행 관찰평가 2회 이상 통과'},
    os19:{module:'고급 트러블슈팅',item:'HW(PC, Camera, Controller) 설정, 2D/3D 광학 Module Tuning, Data 검증'},
    os20:{module:'레시피 개발',item:'신규 검사 Recipe 생성, 검출률/오검율/UPH 최적화'},
    os21:{module:'근본원인분석',item:'고장 이력 분석 및 보고서 작성, Data 검증 후 Report 작성 방법'},
    os22:{module:'교육 스킬',item:'모의 교육 상황 시연, 교육 자료 활용법'},
    os23:{module:'평가',item:'Level3 종합실기 + 승인위원회 심사 합격'},
    os24:{module:'평가',item:'3개월 현장 Follow-Up 결과 확인 (최종 승인조건)'}
  }
},
en:{
  doc:{
    title:'Certificate of Completion',certNo:'Certificate No.',name:'Name',org:'Organization',position:'Position',country:'Country',
    statement1:'This is to certify that the above person has successfully completed',statement2:'of the BU2 FCBGA Substrate Inspection Equipment training program.',
    competencyTitle:'Core Competency',itemsDone:'Completed Items',approvalDate:'Completion (Approval) Date',
    itemsTitle:'Detailed Completion Items',thModule:'Module',thItem:'Item',thDone:'Done',thDate:'Date',thNote:'Notes',
    followUp:'Follow-Up Confirmation',followUpDone:'Completed',issueDate:'Issue Date',
    footer:'BU2 Technical Operations Group 1 · Training Coordinator',
    examAutoNote:'Auto-applied from online written exam'
  },
  roles:{trainerSign:'Training Coordinator',partLeadSign:'Part Leader',groupLeadSign:'Group Leader',committeeSign:'Committee Member'},
  levels:{
    0:{title:'Basic Equipment Understanding',competency:'Classification of equipment groups, explaining the role of each group · Recognizing basic HW/SW configuration and key component names (※ Independent operation not permitted)'},
    1:{title:'Basic Function Operation (Basic Operator)',competency:'Performing equipment start/stop procedures · SW operation (launch, Main UI operation, Recipe Open/Run) · Checking and resetting basic operation-related alarms · Inspection/Log Data save/backup'},
    2:{title:'Independent Operation & Basic Maintenance (Field Engineer)',competency:'Independently performing regular PM (cleaning/calibration/consumable replacement) · Root cause analysis and initial response for common alarms · Basic modification of Recipe Vision Parameters'},
    3:{title:'Advanced Engineer / Trainer (Technical Advanced Engineer)',competency:'Advanced troubleshooting (HW replacement, optical system alignment) · HW configuration module (PC, Controller, Camera) setup · 2D/3D Vision optical module tuning and verification · New recipe development/data optimization · Root Cause Analysis (RCA) report writing · Training of other engineers'}
  },
  items:{
    os1:{module:'Basic Equipment Configuration',item:'Understanding HW module configuration and structure'},
    os2:{module:'Basic Equipment Configuration',item:'Understanding electrical panel configuration and structure'},
    os3:{module:'Optical Inspection Theory',item:'Understanding 2D/3D optical principles'},
    os4:{module:'Optical Inspection Theory',item:'Understanding the interoperation principle of PC, Board, Controller, and Camera'},
    os5:{module:'Inspection Concepts',item:'Concept of image processing'},
    os6:{module:'Evaluation',item:'Passed Level 0 written exam (80% or higher correct)'},
    os7:{module:'Software Operation',item:'SW installation, launch, login'},
    os8:{module:'Software Operation',item:'Main UI layout, function understanding, operation method'},
    os9:{module:'Recipe Operation (Job)',item:'Opening and running the product Recipe (Job)'},
    os10:{module:'Basic Alarm Response',item:'Checking and resetting basic alarms'},
    os11:{module:'Recipe Operation (Job)',item:'Performing inspection and Log Data save/backup procedures'},
    os12:{module:'Evaluation',item:'Passed Level 1 practical evaluation (all checklist items passed)'},
    os13:{module:'Regular Maintenance',item:'Independently performing regular PM procedures (cleaning/calibration)'},
    os14:{module:'Regular Maintenance',item:'Inspection and replacement of consumables (lighting/Controller, etc.)'},
    os15:{module:'Basic Troubleshooting',item:'Root cause analysis and initial response for 3+ common failure modules'},
    os16:{module:'Recipe Operation (Inspection)',item:'Modifying Gerber File, lighting/Camera/PZT, Alignment, inspection parameters'},
    os17:{module:'Evaluation',item:'Passed Level 2 practical test (2+ failure scenarios)'},
    os18:{module:'Evaluation',item:'Passed independent-performance observation evaluation 2+ times'},
    os19:{module:'Advanced Troubleshooting',item:'HW (PC, Camera, Controller) setup, 2D/3D optical module tuning, data verification'},
    os20:{module:'Recipe Development',item:'Creating new inspection recipes, optimizing detection rate/false-call rate/UPH'},
    os21:{module:'Root Cause Analysis',item:'Failure history analysis and report writing, report writing method after data verification'},
    os22:{module:'Training Skills',item:'Mock training demonstration, how to use training materials'},
    os23:{module:'Evaluation',item:'Passed Level 3 comprehensive practical exam + approval committee review'},
    os24:{module:'Evaluation',item:'3-month on-site Follow-Up result confirmation (final approval condition)'}
  }
},
'zh-CN':{
  doc:{
    title:'培训结业证书',certNo:'证书编号',name:'姓名',org:'所属',position:'职务',country:'国家',
    statement1:'兹证明上述人员已完成BU2 FCBGA Substrate检测设备培训课程中的',statement2:'课程，特此证明。',
    competencyTitle:'核心能力',itemsDone:'完成项目',approvalDate:'完成(批准)日期',
    itemsTitle:'详细完成项目',thModule:'模块',thItem:'项目',thDone:'完成',thDate:'日期',thNote:'备注',
    followUp:'Follow-Up确认',followUpDone:'已完成',issueDate:'发证日期',
    footer:'BU2技术运营1组 · 培训负责人',
    examAutoNote:'在线笔试自动反映'
  },
  roles:{trainerSign:'培训负责人',partLeadSign:'部长',groupLeadSign:'组长',committeeSign:'评审委员'},
  levels:{
    0:{title:'设备基础理解',competency:'设备群分类，说明各设备群的作用 · 认知基本HW/SW构成及主要构成名称 (※ 不可独立操作)'},
    1:{title:'基本功能操作 (Basic Operator)',competency:'执行设备启动/停止流程 · SW操作(启动、Main UI操作、Recipe Open/Run) · 确认并复位与运行相关的基本报警 · 检测/日志数据保存/备份'},
    2:{title:'独立运营及基本维护保养 (Field Engineer)',competency:'独立执行定期PM(清洁/校准/耗材更换) · 代表性报警原因分析及初步处理 · Recipe Vision参数基本修改'},
    3:{title:'专业工程师/培训师 (Technical Advanced Engineer)',competency:'高级故障排除(HW更换、光学系统校准) · HW构成模块(PC、Controller、Camera)设置 · 2D/3D Vision光学模块调优及验证 · 新配方开发/数据优化 · 根本原因分析(RCA)报告撰写 · 对其他工程师进行培训'}
  },
  items:{
    os1:{module:'设备基本构成',item:'理解HW模块构成及结构'},
    os2:{module:'设备基本构成',item:'理解电气系统构成及结构'},
    os3:{module:'光学检测理论',item:'理解2D/3D光学原理'},
    os4:{module:'光学检测理论',item:'理解PC、Board、Controller、Camera的联动原理'},
    os5:{module:'检测概念',item:'图像处理的概念'},
    os6:{module:'评价',item:'通过Level0笔试(正确率80%以上)'},
    os7:{module:'软件操作',item:'SW安装、启动、登录'},
    os8:{module:'软件操作',item:'主界面构成、功能理解、操作方法'},
    os9:{module:'Recipe运用(Job)',item:'打开并运行产品Recipe(Job)'},
    os10:{module:'基本报警应对',item:'确认并复位基本报警'},
    os11:{module:'Recipe运用(Job)',item:'执行检测及日志数据保存/备份流程'},
    os12:{module:'评价',item:'通过Level1实操评价(检查表全部项目Pass)'},
    os13:{module:'定期维护保养',item:'独立执行定期PM流程(清洁/校准)'},
    os14:{module:'定期维护保养',item:'检查及更换耗材(照明/Controller等)'},
    os15:{module:'基础故障排除',item:'针对3种以上代表性故障模块的原因分析及初步处理'},
    os16:{module:'Recipe运用(检测)',item:'修改Gerber File、照明/Camera/PZT、Alignment、检测参数'},
    os17:{module:'评价',item:'通过Level2实操考试(2种以上故障情境)'},
    os18:{module:'评价',item:'独立操作观察评价通过2次以上'},
    os19:{module:'高级故障排除',item:'HW(PC、Camera、Controller)设置，2D/3D光学模块调优，数据验证'},
    os20:{module:'配方开发',item:'新建检测Recipe，优化检出率/误判率/UPH'},
    os21:{module:'根本原因分析',item:'故障历史分析及报告撰写，数据验证后的报告撰写方法'},
    os22:{module:'培训技能',item:'模拟培训情境演示，培训资料使用方法'},
    os23:{module:'评价',item:'通过Level3综合实操+批准委员会审查'},
    os24:{module:'评价',item:'确认3个月现场Follow-Up结果(最终批准条件)'}
  }
},
'zh-TW':{
  doc:{
    title:'教育結業證書',certNo:'證書編號',name:'姓名',org:'所屬',position:'職務',country:'國家',
    statement1:'茲證明上述人員已完成BU2 FCBGA Substrate檢測設備教育課程中的',statement2:'課程，特此證明。',
    competencyTitle:'核心能力',itemsDone:'完成項目',approvalDate:'完成(核准)日期',
    itemsTitle:'詳細完成項目',thModule:'模組',thItem:'項目',thDone:'完成',thDate:'日期',thNote:'備註',
    followUp:'Follow-Up確認',followUpDone:'已完成',issueDate:'發證日期',
    footer:'BU2技術運營1組 · 教育負責人',
    examAutoNote:'線上筆試自動反映'
  },
  roles:{trainerSign:'教育負責人',partLeadSign:'部長',groupLeadSign:'組長',committeeSign:'評審委員'},
  levels:{
    0:{title:'設備基礎理解',competency:'設備群分類，說明各設備群的作用 · 認知基本HW/SW構成及主要構成名稱 (※ 不可獨立操作)'},
    1:{title:'基本功能操作 (Basic Operator)',competency:'執行設備啟動/停止流程 · SW操作(啟動、Main UI操作、Recipe Open/Run) · 確認並重置與運行相關的基本警報 · 檢測/日誌資料儲存/備份'},
    2:{title:'獨立運營及基本維護保養 (Field Engineer)',competency:'獨立執行定期PM(清潔/校準/耗材更換) · 代表性警報原因分析及初步處理 · Recipe Vision參數基本修改'},
    3:{title:'專業工程師/教育訓練師 (Technical Advanced Engineer)',competency:'高級故障排除(HW更換、光學系統校準) · HW構成模組(PC、Controller、Camera)設定 · 2D/3D Vision光學模組調校及驗證 · 新配方開發/數據優化 · 根本原因分析(RCA)報告撰寫 · 對其他工程師進行教育訓練'}
  },
  items:{
    os1:{module:'設備基本構成',item:'理解HW模組構成及結構'},
    os2:{module:'設備基本構成',item:'理解電氣系統構成及結構'},
    os3:{module:'光學檢測理論',item:'理解2D/3D光學原理'},
    os4:{module:'光學檢測理論',item:'理解PC、Board、Controller、Camera的連動原理'},
    os5:{module:'檢測概念',item:'影像處理的概念'},
    os6:{module:'評價',item:'通過Level0筆試(正確率80%以上)'},
    os7:{module:'軟體操作',item:'SW安裝、啟動、登入'},
    os8:{module:'軟體操作',item:'主介面構成、功能理解、操作方法'},
    os9:{module:'Recipe運用(Job)',item:'開啟並執行產品Recipe(Job)'},
    os10:{module:'基本警報應對',item:'確認並重置基本警報'},
    os11:{module:'Recipe運用(Job)',item:'執行檢測及日誌資料儲存/備份流程'},
    os12:{module:'評價',item:'通過Level1實操評價(檢查表全部項目Pass)'},
    os13:{module:'定期維護保養',item:'獨立執行定期PM流程(清潔/校準)'},
    os14:{module:'定期維護保養',item:'檢查及更換耗材(照明/Controller等)'},
    os15:{module:'基礎故障排除',item:'針對3種以上代表性故障模組的原因分析及初步處理'},
    os16:{module:'Recipe運用(檢測)',item:'修改Gerber File、照明/Camera/PZT、Alignment、檢測參數'},
    os17:{module:'評價',item:'通過Level2實操考試(2種以上故障情境)'},
    os18:{module:'評價',item:'獨立操作觀察評價通過2次以上'},
    os19:{module:'高級故障排除',item:'HW(PC、Camera、Controller)設定，2D/3D光學模組調校，數據驗證'},
    os20:{module:'配方開發',item:'新建檢測Recipe，優化檢出率/誤判率/UPH'},
    os21:{module:'根本原因分析',item:'故障歷史分析及報告撰寫，數據驗證後的報告撰寫方法'},
    os22:{module:'教育技能',item:'模擬教育情境演示，教育資料使用方法'},
    os23:{module:'評價',item:'通過Level3綜合實操+核准委員會審查'},
    os24:{module:'評價',item:'確認3個月現場Follow-Up結果(最終核准條件)'}
  }
},
ja:{
  doc:{
    title:'教育修了証',certNo:'発行番号',name:'氏名',org:'所属',position:'役職',country:'国',
    statement1:'上記の者はBU2 FCBGA Substrate検査装置教育課程のうち',statement2:'課程を誠実に修了したことを証明します。',
    competencyTitle:'コアコンピテンシー',itemsDone:'修了項目',approvalDate:'修了(承認)日',
    itemsTitle:'詳細修了項目',thModule:'モジュール',thItem:'項目',thDone:'完了',thDate:'確認日',thNote:'備考',
    followUp:'フォローアップ確認',followUpDone:'完了',issueDate:'発行日',
    footer:'BU2技術運営1グループ・教育担当者',
    examAutoNote:'オンライン筆記評価自動反映'
  },
  roles:{trainerSign:'教育担当者',partLeadSign:'パート長',groupLeadSign:'グループ長',committeeSign:'審査委員'},
  levels:{
    0:{title:'設備基礎理解',competency:'設備群の分類、各設備群の役割説明・基本HW/SW構成及び主要構成名称の認知(※独自操作不可)'},
    1:{title:'基本機能操作 (Basic Operator)',competency:'設備動作/停止手順の実施・SW操作(実行、Main UI操作、Recipe Open/Run)・動作関連の基本アラーム確認及びリセット・検査/Log Data保存/バックアップ'},
    2:{title:'独立運用及び基本メンテナンス (Field Engineer)',competency:'定期PM(清掃/キャリブレーション/消耗品交換)の独立実施・代表アラームの原因分析及び初期対応・Recipe Vision Parameterの基本修正'},
    3:{title:'専門エンジニア/トレーナー (Technical Advanced Engineer)',competency:'高度なトラブルシューティング(HW交換、光学系アライメント)・HW構成モジュール(PC、Controller、Camera)設定・2D/3D Vision光学モジュールチューニング及び検証・新規レシピ開発/データ最適化・根本原因分析(RCA)レポート作成・他エンジニアへの教育実施'}
  },
  items:{
    os1:{module:'設備基本構成',item:'HWモジュール構成及び構造の理解'},
    os2:{module:'設備基本構成',item:'電装構成及び構造の理解'},
    os3:{module:'光学検査理論',item:'2D/3D光学原理の理解'},
    os4:{module:'光学検査理論',item:'PC、Board、Controller、Cameraの連動原理の理解'},
    os5:{module:'検査概念',item:'Image処理の概念'},
    os6:{module:'評価',item:'Level0筆記評価合格(正答率80%以上)'},
    os7:{module:'SW操作',item:'SWインストール、起動、ログイン'},
    os8:{module:'SW操作',item:'Main UI構成、機能理解、操作方法'},
    os9:{module:'Recipe運用(Job)',item:'製品Recipe(Job)のOpen及びRun実行'},
    os10:{module:'基本アラーム対応',item:'基本アラームの確認及びリセット対応'},
    os11:{module:'Recipe運用(Job)',item:'検査及びLog Data保存/バックアップ手順の実施'},
    os12:{module:'評価',item:'Level1実技評価合格(チェックリスト全項目Pass)'},
    os13:{module:'定期メンテナンス',item:'定期PM手順(清掃/キャリブレーション)の独立実施'},
    os14:{module:'定期メンテナンス',item:'消耗品(照明/Controller等)の点検及び交換'},
    os15:{module:'基礎トラブルシューティング',item:'代表的な故障モジュール3種以上の原因分析及び初期対応'},
    os16:{module:'Recipe運用(検査)',item:'Gerber File、照明/Camera/PZT、Alignment、検査パラメータの修正'},
    os17:{module:'評価',item:'Level2実技試験(故障シナリオ2種以上)合格'},
    os18:{module:'評価',item:'独立遂行観察評価2回以上合格'},
    os19:{module:'高度なトラブルシューティング',item:'HW(PC、Camera、Controller)設定、2D/3D光学モジュールチューニング、データ検証'},
    os20:{module:'レシピ開発',item:'新規検査Recipe生成、検出率/誤検率/UPH最適化'},
    os21:{module:'根本原因分析',item:'故障履歴分析及びレポート作成、データ検証後のレポート作成方法'},
    os22:{module:'教育スキル',item:'模擬教育状況のデモンストレーション、教育資料活用法'},
    os23:{module:'評価',item:'Level3総合実技+承認委員会審査合格'},
    os24:{module:'評価',item:'3ヶ月現場フォローアップ結果確認(最終承認条件)'}
  }
}
};
