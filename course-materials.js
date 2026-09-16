/* ═══════════════════════════════════════════
   교육 과정 관리 탭 — "교육 자료" 열 전용 슬라이드 뷰어 데이터
   trainee용 사전학습(prelearn.js)과는 완전히 별개다 — 이건 로그인한 관리자/강사가
   교육 현장에서 커리큘럼 매트릭스의 "교육 자료" 버튼을 눌러 슬라이드를 펼쳐 보여주는 용도.
   모듈 코드(course.js의 m.code, 예: 'F')로 조회한다. 아직 자료가 없는 모듈(코드)은 그냥
   COURSE_MATERIALS에 키가 없으면 되고, 커리큘럼 매트릭스 쪽에서 "준비중"으로 표시된다.
   폴더 구조: course-materials/<모듈코드>/<설비id>/slide-NNN.jpg — 설비군이 늘어나거나
   다른 모듈(G/I/J 등) 자료가 추가되어도 이 구조 그대로 항목만 추가하면 된다.
═══════════════════════════════════════════ */
var CM_EQUIP_LABEL={smtv:'iSIS-SMTV',nbga:'iSIS-NBGA'};
var CM_LANG_LABEL={ko:'언어',en:'Language',zhCN:'语言',zhTW:'語言',ja:'言語',vi:'Ngôn ngữ'};

/* 설비군(iSIS-SMTV, iSIS-NBGA, ...)이 앞으로 계속 늘어날 예정이라, 최상위 "관련 자료" 폴더
   바로 아래에 설비군별 폴더를 두고 그 안에 모듈별 폴더를 두는 구조로 정리한다:
   관련 자료/<설비군명>/<모듈코드>/slide-NNN.jpg */
function cmImg(code,equip,n){return '관련 자료/'+(CM_EQUIP_LABEL[equip]||equip)+'/'+code+'/slide-'+String(n).padStart(3,'0')+'.jpg';}

var COURSE_MATERIALS={
  B:{
    smtv:{
      title:{ko:'B. 광학 검사 이론 기초',en:'B. Optical Inspection Theory Basics',zhCN:'B. 光学检测理论基础',zhTW:'B. 光學檢測理論基礎',ja:'B. 光学検査理論基礎',vi:'B. Cơ bản lý thuyết kiểm tra quang học'},
      slides:[
        {img:cmImg('B','smtv',1),tx:{
          en:'Level 01 Contents\n\nOverview of this training course: Introduce (iSIS-SMTV, Introduction & Inspection Items, Inspection Principle) ▸ Dimension & Specification (Machine Spec, Camera Spec, Safety Stickers) ▸ Hardware Configuration & System (Layout & Component, Interlock System, Equipment Automatic Sequence) ▸ Operation (Power On & Off, Program Execute & Quit, Run Inspection).',
          ko:'Level 01 Contents\n\n본 교육과정 개요: Introduce(iSIS-SMTV, Introduction & Inspection Items, Inspection Principle) ▸ Dimension & Specification(Machine Spec, Camera Spec, Safety Stickers) ▸ Hardware Configuration & System(Layout & Component, Interlock System, Equipment Automatic Sequence) ▸ Operation(Power On & Off, Program Execute & Quit, Run Inspection).',
          zhCN:'Level 01 Contents\n\n本培训课程概览:Introduce(iSIS-SMTV、Introduction & Inspection Items、Inspection Principle)▸ Dimension & Specification(Machine Spec、Camera Spec、Safety Stickers)▸ Hardware Configuration & System(Layout & Component、Interlock System、Equipment Automatic Sequence)▸ Operation(Power On & Off、Program Execute & Quit、Run Inspection)。',
          zhTW:'Level 01 Contents\n\n本培訓課程概覽:Introduce(iSIS-SMTV、Introduction & Inspection Items、Inspection Principle)▸ Dimension & Specification(Machine Spec、Camera Spec、Safety Stickers)▸ Hardware Configuration & System(Layout & Component、Interlock System、Equipment Automatic Sequence)▸ Operation(Power On & Off、Program Execute & Quit、Run Inspection)。',
          ja:'Level 01 Contents\n\n本教育課程の概要:Introduce(iSIS-SMTV、Introduction & Inspection Items、Inspection Principle)▸ Dimension & Specification(Machine Spec、Camera Spec、Safety Stickers)▸ Hardware Configuration & System(Layout & Component、Interlock System、Equipment Automatic Sequence)▸ Operation(Power On & Off、Program Execute & Quit、Run Inspection)。',
          vi:'Level 01 Contents\n\nTổng quan khóa đào tạo này: Introduce (iSIS-SMTV, Introduction & Inspection Items, Inspection Principle) ▸ Dimension & Specification (Machine Spec, Camera Spec, Safety Stickers) ▸ Hardware Configuration & System (Layout & Component, Interlock System, Equipment Automatic Sequence) ▸ Operation (Power On & Off, Program Execute & Quit, Run Inspection).'
        }},
        {img:cmImg('B','smtv',2),tx:{
          en:'Introduce iSIS-SMTV — this section covers Introduction & Inspection Items and Inspection Principle.',
          ko:'Introduce iSIS-SMTV — Introduction & Inspection Items, Inspection Principle을 다룹니다.',
          zhCN:'Introduce iSIS-SMTV——本节介绍Introduction & Inspection Items、Inspection Principle。',
          zhTW:'Introduce iSIS-SMTV——本節介紹Introduction & Inspection Items、Inspection Principle。',
          ja:'Introduce iSIS-SMTV——本節ではIntroduction & Inspection Items、Inspection Principleを扱います。',
          vi:'Introduce iSIS-SMTV — phần này đề cập đến Introduction & Inspection Items và Inspection Principle.'
        }},
        {img:cmImg('B','smtv',3),tx:{
          en:'1.1.1. Introduction & Inspection Item\n\niSIS-SMTV is a Bump-AOI (Automated Optical Inspection) machine. For thickness (height) inspection, 3D measurement is performed on a suction jig with precise flatness.',
          ko:'1.1.1. Introduction & Inspection Item\n\niSIS-SMTV는 Bump-AOI(자동 광학 검사) 장비입니다. 두께(높이) 검사를 위해, 정밀한 평탄도를 가진 흡착 Jig 위에서 3D 측정을 수행합니다.',
          zhCN:'1.1.1. Introduction & Inspection Item\n\niSIS-SMTV是Bump-AOI(自动光学检测)设备。为进行厚度(高度)检测,在具有精密平面度的吸附Jig上进行3D测量。',
          zhTW:'1.1.1. Introduction & Inspection Item\n\niSIS-SMTV是Bump-AOI(自動光學檢測)設備。為進行厚度(高度)檢測,在具有精密平面度的吸附Jig上進行3D測量。',
          ja:'1.1.1. Introduction & Inspection Item\n\niSIS-SMTVはBump-AOI(自動光学検査)装置です。厚さ(高さ)検査のため、精密な平面度を持つ吸着Jig上で3D測定を行います。',
          vi:'1.1.1. Introduction & Inspection Item\n\niSIS-SMTV là thiết bị Bump-AOI (kiểm tra quang học tự động). Để kiểm tra độ dày (chiều cao), phép đo 3D được thực hiện trên Jig hút chân không có độ phẳng chính xác cao.'
        }},
        {img:cmImg('B','smtv',4),tx:{
          en:'Introduce iSIS-SMTV — this section covers Introduction & Inspection Items and Inspection Principle.',
          ko:'Introduce iSIS-SMTV — Introduction & Inspection Items, Inspection Principle을 다룹니다.',
          zhCN:'Introduce iSIS-SMTV——本节介绍Introduction & Inspection Items、Inspection Principle。',
          zhTW:'Introduce iSIS-SMTV——本節介紹Introduction & Inspection Items、Inspection Principle。',
          ja:'Introduce iSIS-SMTV——本節ではIntroduction & Inspection Items、Inspection Principleを扱います。',
          vi:'Introduce iSIS-SMTV — phần này đề cập đến Introduction & Inspection Items và Inspection Principle.'
        }},
        {img:cmImg('B','smtv',5),tx:{
          en:'1.1.2. Inspection Principle\n\nA light source used for WSI (White-light Scanning Interferometry) inspection must have a single frequency and be coherent. With inconsistent (non-coherent) light, interference cannot be observed.',
          ko:'1.1.2. Inspection Principle\n\nWSI(백색광 주사 간섭계) 검사에 사용하는 광원은 단일 주파수이면서 결맞음(Coherent)이어야 합니다. 일관되지 않은(비결맞음) 광을 사용하면 간섭 현상을 볼 수 없습니다.',
          zhCN:'1.1.2. Inspection Principle\n\nWSI(白光扫描干涉法)检测所用光源必须是单一频率且相干(Coherent)的。若使用不一致(非相干)的光,则无法观察到干涉现象。',
          zhTW:'1.1.2. Inspection Principle\n\nWSI(白光掃描干涉法)檢測所用光源必須是單一頻率且相干(Coherent)的。若使用不一致(非相干)的光,則無法觀察到干涉現象。',
          ja:'1.1.2. Inspection Principle\n\nWSI(白色光走査干渉法)検査に用いる光源は単一周波数かつコヒーレント(Coherent)である必要があります。一貫性のない(非コヒーレントな)光を使うと干渉現象を見ることができません。',
          vi:'1.1.2. Inspection Principle\n\nNguồn sáng dùng cho kiểm tra WSI (giao thoa quét ánh sáng trắng) phải có tần số đơn và kết hợp (Coherent). Nếu dùng ánh sáng không nhất quán (không kết hợp), sẽ không quan sát được hiện tượng giao thoa.'
        }},
        {img:cmImg('B','smtv',6),tx:{
          en:'1.1.2. Inspection Principle\n\n< Constructive Interference > / < Destructive Interference >\n\nIn an interference experiment using monochromatic light, the light becomes stronger where wave crests overlap (constructive) and weaker where a crest overlaps a trough (destructive). This produces alternating bright and dark regions — an interference pattern.',
          ko:'1.1.2. Inspection Principle\n\n< Constructive Interference(보강 간섭) > / < Destructive Interference(상쇄 간섭) >\n\n단색광을 광원으로 한 간섭 실험에서, 마루와 마루가 겹치는 곳은 빛이 강해지고(보강 간섭), 마루와 골이 겹치는 곳은 빛이 약해집니다(상쇄 간섭). 그 결과 밝은 부분과 어두운 부분이 번갈아 나타나는 간섭무늬(Interference Pattern)가 생성됩니다.',
          zhCN:'1.1.2. Inspection Principle\n\n< Constructive Interference(相长干涉) > / < Destructive Interference(相消干涉) >\n\n在以单色光为光源的干涉实验中,波峰与波峰重叠处光变强(相长干涉),波峰与波谷重叠处光变弱(相消干涉)。结果产生明暗交替的干涉图案(Interference Pattern)。',
          zhTW:'1.1.2. Inspection Principle\n\n< Constructive Interference(相長干涉) > / < Destructive Interference(相消干涉) >\n\n在以單色光為光源的干涉實驗中,波峰與波峰重疊處光變強(相長干涉),波峰與波谷重疊處光變弱(相消干涉)。結果產生明暗交替的干涉圖案(Interference Pattern)。',
          ja:'1.1.2. Inspection Principle\n\n< Constructive Interference(強め合う干渉) > / < Destructive Interference(弱め合う干渉) >\n\n単色光を光源とした干渉実験では、山と山が重なる場所で光が強まり(強め合う干渉)、山と谷が重なる場所で光が弱まります(弱め合う干渉)。その結果、明部と暗部が交互に現れる干渉縞(Interference Pattern)が生じます。',
          vi:'1.1.2. Inspection Principle\n\n< Constructive Interference (giao thoa tăng cường) > / < Destructive Interference (giao thoa triệt tiêu) >\n\nTrong thí nghiệm giao thoa dùng ánh sáng đơn sắc, nơi đỉnh sóng chồng lên đỉnh sóng ánh sáng mạnh lên (giao thoa tăng cường), nơi đỉnh chồng lên đáy ánh sáng yếu đi (giao thoa triệt tiêu). Kết quả tạo ra vùng sáng và tối xen kẽ — vân giao thoa (Interference Pattern).'
        }},
        {img:cmImg('B','smtv',7),tx:{
          en:'1.1.2. Inspection Principle\n\nA single light source (LED or Laser) generates a beam, which is split into two beams by a beam splitter. When the beams reflected at equal distances (d1 = d2) — one from the Sample, one from the Reference Mirror — recombine into one beam, an interference pattern from constructive/destructive interference can be observed. This method enables contactless measurement of the sample surface.',
          ko:'1.1.2. Inspection Principle\n\n단일 광원(LED, Laser)으로 빔을 생성하고, Beam Splitter를 통해 두 개의 빔으로 분리합니다. Sample과 Reference Mirror에서 각각 반사되어 동일한 거리(d1=d2)를 이동한 두 빔이 하나로 합쳐질 때, 보강·상쇄 간섭에 의한 간섭무늬를 확인할 수 있습니다. 이 방식으로 Sample 표면을 비접촉으로 측정할 수 있습니다.',
          zhCN:'1.1.2. Inspection Principle\n\n用单一光源(LED、Laser)产生光束,通过Beam Splitter分成两束光。当分别在Sample与Reference Mirror反射、行进相同距离(d1=d2)的两束光重新合成一束时,可观察到相长·相消干涉产生的干涉图案。通过此方法可对Sample表面进行非接触式测量。',
          zhTW:'1.1.2. Inspection Principle\n\n用單一光源(LED、Laser)產生光束,透過Beam Splitter分成兩束光。當分別在Sample與Reference Mirror反射、行進相同距離(d1=d2)的兩束光重新合成一束時,可觀察到相長·相消干涉產生的干涉圖案。透過此方法可對Sample表面進行非接觸式測量。',
          ja:'1.1.2. Inspection Principle\n\n単一の光源(LED、Laser)でビームを生成し、Beam Splitterで2つのビームに分割します。SampleとReference Mirrorでそれぞれ反射し同じ距離(d1=d2)を進んだビームが1つに合成されると、強め合う・弱め合う干渉による干渉縞を確認できます。この方式によりSample表面を非接触で測定できます。',
          vi:'1.1.2. Inspection Principle\n\nMột nguồn sáng đơn (LED, Laser) tạo ra chùm tia, được tách thành hai chùm qua Beam Splitter. Khi hai chùm phản xạ từ Sample và Reference Mirror ở cùng khoảng cách (d1=d2) hợp lại thành một, có thể quan sát được vân giao thoa tăng cường/triệt tiêu. Phương pháp này cho phép đo không tiếp xúc bề mặt Sample.'
        }},
        {img:cmImg('B','smtv',8),tx:{
          en:'1.1.2. Inspection Principle\n\n< Inspection Method >\n\nThe method produces an interference pattern; the 3D Z-Map is built from the signal strength of that pattern. As the PZT Stage scans (Scan Start → Scan End), each pixel\'s intensity peaks at its point of best focus/interference — this peak position is converted into a height (Bump Top vs. Substrate) to build the 3D Z-Map image.',
          ko:'1.1.2. Inspection Principle\n\n< Inspection Method >\n\n이 방식은 간섭무늬(Interference Pattern)를 만들어내며, 그 무늬의 신호 세기로부터 3D Z-Map을 생성합니다. PZT Stage가 Scan Start→Scan End로 스캔하는 동안, 각 Pixel의 밝기(Intensity)는 초점·간섭이 가장 잘 맞는 지점에서 최대가 되며 — 이 최대 지점의 위치를 높이(Bump Top vs. Substrate)로 환산해 3D Z-Map 이미지를 만듭니다.',
          zhCN:'1.1.2. Inspection Principle\n\n< Inspection Method >\n\n该方法产生干涉图案(Interference Pattern),并根据该图案的信号强度生成3D Z-Map。PZT Stage从Scan Start扫描到Scan End的过程中,每个Pixel的亮度(Intensity)在对焦·干涉最佳的位置达到最大——将该峰值位置换算为高度(Bump Top vs. Substrate),从而生成3D Z-Map图像。',
          zhTW:'1.1.2. Inspection Principle\n\n< Inspection Method >\n\n該方法產生干涉圖案(Interference Pattern),並根據該圖案的訊號強度生成3D Z-Map。PZT Stage從Scan Start掃描到Scan End的過程中,每個Pixel的亮度(Intensity)在對焦·干涉最佳的位置達到最大——將該峰值位置換算為高度(Bump Top vs. Substrate),從而生成3D Z-Map影像。',
          ja:'1.1.2. Inspection Principle\n\n< Inspection Method >\n\nこの方式は干渉縞(Interference Pattern)を作り出し、その模様の信号強度から3D Z-Mapを生成します。PZT StageがScan StartからScan Endへスキャンする間、各Pixelの明るさ(Intensity)は焦点・干渉が最も合う地点で最大となり——この最大点の位置を高さ(Bump Top vs. Substrate)に換算して3D Z-Map画像を作成します。',
          vi:'1.1.2. Inspection Principle\n\n< Inspection Method >\n\nPhương pháp này tạo ra vân giao thoa (Interference Pattern), và 3D Z-Map được dựng từ cường độ tín hiệu của vân đó. Trong khi PZT Stage quét từ Scan Start đến Scan End, độ sáng (Intensity) của mỗi Pixel đạt đỉnh tại điểm hội tụ/giao thoa tốt nhất — vị trí đỉnh này được quy đổi thành chiều cao (Bump Top so với Substrate) để dựng ảnh 3D Z-Map.'
        }}
      ]
    },
    nbga:{
      title:{ko:'B. 광학 검사 이론 기초',en:'B. Optical Inspection Theory Basics',zhCN:'B. 光学检测理论基础',zhTW:'B. 光學檢測理論基礎',ja:'B. 光学検査理論基礎',vi:'B. Cơ bản lý thuyết kiểm tra quang học'},
      slides:[
        {img:cmImg('B','nbga',1),tx:{
          en:'Level 01 Contents\n\nOverview of this training course: Introduce (iSIS-NBGA, Introduction & Inspection Items, Inspection Principle) ▸ Dimension & Specification (by customer: SEMCO/Kyocera, SEMV, AT&S/Intel/Nanya) ▸ Hardware Configuration & System (Layout & Component, Safety Sticker, Power Supply & Interlock, Equipment Automatic Sequence) ▸ Operation (Power On & Off, Program Execute & Quit, Run Inspection).',
          ko:'Level 01 Contents\n\n본 교육과정 개요: Introduce(iSIS-NBGA, Introduction & Inspection Items, Inspection Principle) ▸ Dimension & Specification(고객사별: SEMCO/Kyocera, SEMV, AT&S/Intel/Nanya) ▸ Hardware Configuration & System(Layout & Component, Safety Sticker, Power Supply & Interlock, Equipment Automatic Sequence) ▸ Operation(Power On & Off, Program Execute & Quit, Run Inspection).',
          zhCN:'Level 01 Contents\n\n本培训课程概览:Introduce(iSIS-NBGA、Introduction & Inspection Items、Inspection Principle)▸ Dimension & Specification(按客户:SEMCO/Kyocera、SEMV、AT&S/Intel/Nanya)▸ Hardware Configuration & System(Layout & Component、Safety Sticker、Power Supply & Interlock、Equipment Automatic Sequence)▸ Operation(Power On & Off、Program Execute & Quit、Run Inspection)。',
          zhTW:'Level 01 Contents\n\n本培訓課程概覽:Introduce(iSIS-NBGA、Introduction & Inspection Items、Inspection Principle)▸ Dimension & Specification(按客戶:SEMCO/Kyocera、SEMV、AT&S/Intel/Nanya)▸ Hardware Configuration & System(Layout & Component、Safety Sticker、Power Supply & Interlock、Equipment Automatic Sequence)▸ Operation(Power On & Off、Program Execute & Quit、Run Inspection)。',
          ja:'Level 01 Contents\n\n本教育課程の概要:Introduce(iSIS-NBGA、Introduction & Inspection Items、Inspection Principle)▸ Dimension & Specification(顧客別:SEMCO/Kyocera、SEMV、AT&S/Intel/Nanya)▸ Hardware Configuration & System(Layout & Component、Safety Sticker、Power Supply & Interlock、Equipment Automatic Sequence)▸ Operation(Power On & Off、Program Execute & Quit、Run Inspection)。',
          vi:'Level 01 Contents\n\nTổng quan khóa đào tạo này: Introduce (iSIS-NBGA, Introduction & Inspection Items, Inspection Principle) ▸ Dimension & Specification (theo khách hàng: SEMCO/Kyocera, SEMV, AT&S/Intel/Nanya) ▸ Hardware Configuration & System (Layout & Component, Safety Sticker, Power Supply & Interlock, Equipment Automatic Sequence) ▸ Operation (Power On & Off, Program Execute & Quit, Run Inspection).'
        }},
        {img:cmImg('B','nbga',2),tx:{
          en:'Introduce iSIS-NBGA — this section covers Introduction & Inspection Items and Inspection Principle.',
          ko:'Introduce iSIS-NBGA — Introduction & Inspection Items, Inspection Principle을 다룹니다.',
          zhCN:'Introduce iSIS-NBGA——本节介绍Introduction & Inspection Items、Inspection Principle。',
          zhTW:'Introduce iSIS-NBGA——本節介紹Introduction & Inspection Items、Inspection Principle。',
          ja:'Introduce iSIS-NBGA——本節ではIntroduction & Inspection Items、Inspection Principleを扱います。',
          vi:'Introduce iSIS-NBGA — phần này đề cập đến Introduction & Inspection Items và Inspection Principle.'
        }},
        {img:cmImg('B','nbga',3),tx:{
          en:'1.1.1. Introduction & Inspection Item\n\niSIS-NBGA is a Bump-AOI (Automated Optical Inspection) machine. The tray containing the unit is loaded into the Loader, automatically sorted after inspection, and ejected into the Unloader.',
          ko:'1.1.1. Introduction & Inspection Item\n\niSIS-NBGA는 Bump-AOI(자동 광학 검사) 장비입니다. Unit이 담긴 Tray가 Loader에 투입되면, 검사 후 자동으로 Sorting되어 Unloader로 배출됩니다.',
          zhCN:'1.1.1. Introduction & Inspection Item\n\niSIS-NBGA是Bump-AOI(自动光学检测)设备。装有Unit的Tray投入Loader后,检测完成会自动Sorting并从Unloader排出。',
          zhTW:'1.1.1. Introduction & Inspection Item\n\niSIS-NBGA是Bump-AOI(自動光學檢測)設備。裝有Unit的Tray投入Loader後,檢測完成會自動Sorting並從Unloader排出。',
          ja:'1.1.1. Introduction & Inspection Item\n\niSIS-NBGAはBump-AOI(自動光学検査)装置です。Unitが入ったTrayがLoaderに投入されると、検査後に自動でSortingされUnloaderへ排出されます。',
          vi:'1.1.1. Introduction & Inspection Item\n\niSIS-NBGA là thiết bị Bump-AOI (kiểm tra quang học tự động). Tray chứa Unit được nạp vào Loader, sau khi kiểm tra sẽ tự động Sorting và đẩy ra Unloader.'
        }},
        {img:cmImg('B','nbga',4),tx:{
          en:'Introduce iSIS-NBGA — this section covers Introduction & Inspection Items and Inspection Principle.',
          ko:'Introduce iSIS-NBGA — Introduction & Inspection Items, Inspection Principle을 다룹니다.',
          zhCN:'Introduce iSIS-NBGA——本节介绍Introduction & Inspection Items、Inspection Principle。',
          zhTW:'Introduce iSIS-NBGA——本節介紹Introduction & Inspection Items、Inspection Principle。',
          ja:'Introduce iSIS-NBGA——本節ではIntroduction & Inspection Items、Inspection Principleを扱います。',
          vi:'Introduce iSIS-NBGA — phần này đề cập đến Introduction & Inspection Items và Inspection Principle.'
        }},
        {img:cmImg('B','nbga',5),tx:{
          en:'1.1.2. Inspection Principle\n\nA light source used for WSI (White-light Scanning Interferometry) inspection must have a single frequency and be coherent. With inconsistent (non-coherent) light, interference cannot be observed.',
          ko:'1.1.2. Inspection Principle\n\nWSI(백색광 주사 간섭계) 검사에 사용하는 광원은 단일 주파수이면서 결맞음(Coherent)이어야 합니다. 일관되지 않은(비결맞음) 광을 사용하면 간섭 현상을 볼 수 없습니다.',
          zhCN:'1.1.2. Inspection Principle\n\nWSI(白光扫描干涉法)检测所用光源必须是单一频率且相干(Coherent)的。若使用不一致(非相干)的光,则无法观察到干涉现象。',
          zhTW:'1.1.2. Inspection Principle\n\nWSI(白光掃描干涉法)檢測所用光源必須是單一頻率且相干(Coherent)的。若使用不一致(非相干)的光,則無法觀察到干涉現象。',
          ja:'1.1.2. Inspection Principle\n\nWSI(白色光走査干渉法)検査に用いる光源は単一周波数かつコヒーレント(Coherent)である必要があります。一貫性のない(非コヒーレントな)光を使うと干渉現象を見ることができません。',
          vi:'1.1.2. Inspection Principle\n\nNguồn sáng dùng cho kiểm tra WSI (giao thoa quét ánh sáng trắng) phải có tần số đơn và kết hợp (Coherent). Nếu dùng ánh sáng không nhất quán (không kết hợp), sẽ không quan sát được hiện tượng giao thoa.'
        }},
        {img:cmImg('B','nbga',6),tx:{
          en:'1.1.2. Inspection Principle\n\n< Constructive Interference > / < Destructive Interference >\n\nIn an interference experiment using monochromatic light, the light becomes stronger where wave crests overlap (constructive) and weaker where a crest overlaps a trough (destructive). This produces alternating bright and dark regions — an interference pattern.',
          ko:'1.1.2. Inspection Principle\n\n< Constructive Interference(보강 간섭) > / < Destructive Interference(상쇄 간섭) >\n\n단색광을 광원으로 한 간섭 실험에서, 마루와 마루가 겹치는 곳은 빛이 강해지고(보강 간섭), 마루와 골이 겹치는 곳은 빛이 약해집니다(상쇄 간섭). 그 결과 밝은 부분과 어두운 부분이 번갈아 나타나는 간섭무늬(Interference Pattern)가 생성됩니다.',
          zhCN:'1.1.2. Inspection Principle\n\n< Constructive Interference(相长干涉) > / < Destructive Interference(相消干涉) >\n\n在以单色光为光源的干涉实验中,波峰与波峰重叠处光变强(相长干涉),波峰与波谷重叠处光变弱(相消干涉)。结果产生明暗交替的干涉图案(Interference Pattern)。',
          zhTW:'1.1.2. Inspection Principle\n\n< Constructive Interference(相長干涉) > / < Destructive Interference(相消干涉) >\n\n在以單色光為光源的干涉實驗中,波峰與波峰重疊處光變強(相長干涉),波峰與波谷重疊處光變弱(相消干涉)。結果產生明暗交替的干涉圖案(Interference Pattern)。',
          ja:'1.1.2. Inspection Principle\n\n< Constructive Interference(強め合う干渉) > / < Destructive Interference(弱め合う干渉) >\n\n単色光を光源とした干渉実験では、山と山が重なる場所で光が強まり(強め合う干渉)、山と谷が重なる場所で光が弱まります(弱め合う干渉)。その結果、明部と暗部が交互に現れる干渉縞(Interference Pattern)が生じます。',
          vi:'1.1.2. Inspection Principle\n\n< Constructive Interference (giao thoa tăng cường) > / < Destructive Interference (giao thoa triệt tiêu) >\n\nTrong thí nghiệm giao thoa dùng ánh sáng đơn sắc, nơi đỉnh sóng chồng lên đỉnh sóng ánh sáng mạnh lên (giao thoa tăng cường), nơi đỉnh chồng lên đáy ánh sáng yếu đi (giao thoa triệt tiêu). Kết quả tạo ra vùng sáng và tối xen kẽ — vân giao thoa (Interference Pattern).'
        }},
        {img:cmImg('B','nbga',7),tx:{
          en:'1.1.2. Inspection Principle\n\nA single light source (LED or Laser) generates a beam, which is split into two beams by a beam splitter. When the beams reflected at equal distances (d1 = d2) — one from the Sample, one from the Reference Mirror — recombine into one beam, an interference pattern from constructive/destructive interference can be observed. This method enables contactless measurement of the sample surface.',
          ko:'1.1.2. Inspection Principle\n\n단일 광원(LED, Laser)으로 빔을 생성하고, Beam Splitter를 통해 두 개의 빔으로 분리합니다. Sample과 Reference Mirror에서 각각 반사되어 동일한 거리(d1=d2)를 이동한 두 빔이 하나로 합쳐질 때, 보강·상쇄 간섭에 의한 간섭무늬를 확인할 수 있습니다. 이 방식으로 Sample 표면을 비접촉으로 측정할 수 있습니다.',
          zhCN:'1.1.2. Inspection Principle\n\n用单一光源(LED、Laser)产生光束,通过Beam Splitter分成两束光。当分别在Sample与Reference Mirror反射、行进相同距离(d1=d2)的两束光重新合成一束时,可观察到相长·相消干涉产生的干涉图案。通过此方法可对Sample表面进行非接触式测量。',
          zhTW:'1.1.2. Inspection Principle\n\n用單一光源(LED、Laser)產生光束,透過Beam Splitter分成兩束光。當分別在Sample與Reference Mirror反射、行進相同距離(d1=d2)的兩束光重新合成一束時,可觀察到相長·相消干涉產生的干涉圖案。透過此方法可對Sample表面進行非接觸式測量。',
          ja:'1.1.2. Inspection Principle\n\n単一の光源(LED、Laser)でビームを生成し、Beam Splitterで2つのビームに分割します。SampleとReference Mirrorでそれぞれ反射し同じ距離(d1=d2)を進んだビームが1つに合成されると、強め合う・弱め合う干渉による干渉縞を確認できます。この方式によりSample表面を非接触で測定できます。',
          vi:'1.1.2. Inspection Principle\n\nMột nguồn sáng đơn (LED, Laser) tạo ra chùm tia, được tách thành hai chùm qua Beam Splitter. Khi hai chùm phản xạ từ Sample và Reference Mirror ở cùng khoảng cách (d1=d2) hợp lại thành một, có thể quan sát được vân giao thoa tăng cường/triệt tiêu. Phương pháp này cho phép đo không tiếp xúc bề mặt Sample.'
        }},
        {img:cmImg('B','nbga',8),tx:{
          en:'1.1.2. Inspection Principle\n\n< Inspection Method >\n\nThe method produces an interference pattern; the 3D Z-Map is built from the signal strength of that pattern. As the PZT Stage scans (Scan Start → Scan End), each pixel\'s intensity peaks at its point of best focus/interference — this peak position is converted into a height (Bump Top vs. Substrate) to build the 3D Z-Map image.',
          ko:'1.1.2. Inspection Principle\n\n< Inspection Method >\n\n이 방식은 간섭무늬(Interference Pattern)를 만들어내며, 그 무늬의 신호 세기로부터 3D Z-Map을 생성합니다. PZT Stage가 Scan Start→Scan End로 스캔하는 동안, 각 Pixel의 밝기(Intensity)는 초점·간섭이 가장 잘 맞는 지점에서 최대가 되며 — 이 최대 지점의 위치를 높이(Bump Top vs. Substrate)로 환산해 3D Z-Map 이미지를 만듭니다.',
          zhCN:'1.1.2. Inspection Principle\n\n< Inspection Method >\n\n该方法产生干涉图案(Interference Pattern),并根据该图案的信号强度生成3D Z-Map。PZT Stage从Scan Start扫描到Scan End的过程中,每个Pixel的亮度(Intensity)在对焦·干涉最佳的位置达到最大——将该峰值位置换算为高度(Bump Top vs. Substrate),从而生成3D Z-Map图像。',
          zhTW:'1.1.2. Inspection Principle\n\n< Inspection Method >\n\n該方法產生干涉圖案(Interference Pattern),並根據該圖案的訊號強度生成3D Z-Map。PZT Stage從Scan Start掃描到Scan End的過程中,每個Pixel的亮度(Intensity)在對焦·干涉最佳的位置達到最大——將該峰值位置換算為高度(Bump Top vs. Substrate),從而生成3D Z-Map影像。',
          ja:'1.1.2. Inspection Principle\n\n< Inspection Method >\n\nこの方式は干渉縞(Interference Pattern)を作り出し、その模様の信号強度から3D Z-Mapを生成します。PZT StageがScan StartからScan Endへスキャンする間、各Pixelの明るさ(Intensity)は焦点・干渉が最も合う地点で最大となり——この最大点の位置を高さ(Bump Top vs. Substrate)に換算して3D Z-Map画像を作成します。',
          vi:'1.1.2. Inspection Principle\n\n< Inspection Method >\n\nPhương pháp này tạo ra vân giao thoa (Interference Pattern), và 3D Z-Map được dựng từ cường độ tín hiệu của vân đó. Trong khi PZT Stage quét từ Scan Start đến Scan End, độ sáng (Intensity) của mỗi Pixel đạt đỉnh tại điểm hội tụ/giao thoa tốt nhất — vị trí đỉnh này được quy đổi thành chiều cao (Bump Top so với Substrate) để dựng ảnh 3D Z-Map.'
        }}
      ]
    }
  },
  A:{
    smtv:{
      title:{ko:'A. 설비 기본 구성',en:'A. Basic Equipment Configuration',zhCN:'A. 设备基本构成',zhTW:'A. 設備基本構成',ja:'A. 設備基本構成',vi:'A. Cấu hình cơ bản thiết bị'},
      chapters:[
        {from:1,title:{ko:'A. Dimension & Specification',en:'A. Dimension & Specification',zhCN:'A. Dimension & Specification',zhTW:'A. Dimension & Specification',ja:'A. Dimension & Specification',vi:'A. Dimension & Specification'}},
        {from:13,title:{ko:'B. Layout & Component',en:'B. Layout & Component',zhCN:'B. Layout & Component',zhTW:'B. Layout & Component',ja:'B. Layout & Component',vi:'B. Layout & Component'}},
        {from:52,title:{ko:'C. Interlock System',en:'C. Interlock System',zhCN:'C. Interlock System',zhTW:'C. Interlock System',ja:'C. Interlock System',vi:'C. Interlock System'}},
        {from:57,title:{ko:'D. Equipment Automatic Sequence',en:'D. Equipment Automatic Sequence',zhCN:'D. Equipment Automatic Sequence',zhTW:'D. Equipment Automatic Sequence',ja:'D. Equipment Automatic Sequence',vi:'D. Equipment Automatic Sequence'}},
        {from:70,title:{ko:'E. Power On & Off',en:'E. Power On & Off',zhCN:'E. Power On & Off',zhTW:'E. Power On & Off',ja:'E. Power On & Off',vi:'E. Power On & Off'}}
      ],
      slides:[
        {img:cmImg('A','smtv',1),tx:{
          en:'Introduce — this section covers Dimension & Specification: Machine Spec, Camera Spec, and Safety Stickers.',
          ko:'Introduce — Dimension & Specification: Machine Spec, Camera Spec, Safety Stickers를 다룹니다.',
          zhCN:'Introduce——本节介绍Dimension & Specification:Machine Spec、Camera Spec、Safety Stickers。',
          zhTW:'Introduce——本節介紹Dimension & Specification:Machine Spec、Camera Spec、Safety Stickers。',
          ja:'Introduce——本節ではDimension & Specification:Machine Spec、Camera Spec、Safety Stickersを扱います。',
          vi:'Introduce — phần này đề cập đến Dimension & Specification: Machine Spec, Camera Spec, Safety Stickers.'
        }},
        {img:cmImg('A','smtv',2),tx:{
          en:'1.2.1. Machine Spec — Specification #1\n\nOverall equipment footprint shown from the Front, Left, and Right views.',
          ko:'1.2.1. Machine Spec — Specification #1\n\nFront·Left·Right View 기준 설비 전체 외형 치수입니다.',
          zhCN:'1.2.1. Machine Spec — Specification #1\n\n以Front·Left·Right View展示设备整体外形尺寸。',
          zhTW:'1.2.1. Machine Spec — Specification #1\n\n以Front·Left·Right View展示設備整體外形尺寸。',
          ja:'1.2.1. Machine Spec — Specification #1\n\nFront·Left·Right View基準の設備全体外形寸法です。',
          vi:'1.2.1. Machine Spec — Specification #1\n\nKích thước tổng thể của thiết bị theo góc nhìn Front, Left, Right.'
        }},
        {img:cmImg('A','smtv',3),tx:{
          en:'1.2.1. Machine Spec — Specification #2\n\nDetailed footprint dimensions, which vary slightly by customer configuration (see following slides).',
          ko:'1.2.1. Machine Spec — Specification #2\n\n세부 설치 치수이며, 고객사 구성에 따라 다음 슬라이드처럼 값이 약간씩 달라집니다.',
          zhCN:'1.2.1. Machine Spec — Specification #2\n\n详细安装尺寸,依客户配置不同会有如后续幻灯片所示的差异。',
          zhTW:'1.2.1. Machine Spec — Specification #2\n\n詳細安裝尺寸,依客戶配置不同會有如後續投影片所示的差異。',
          ja:'1.2.1. Machine Spec — Specification #2\n\n詳細設置寸法で、顧客構成により以降のスライドのように多少異なります。',
          vi:'1.2.1. Machine Spec — Specification #2\n\nKích thước lắp đặt chi tiết, có thể khác nhau đôi chút tùy theo cấu hình khách hàng (xem các slide tiếp theo).'
        }},
        {img:cmImg('A','smtv',4),tx:{
          en:'1.2.1. Machine Spec — Specification #2 (Customer: ATNS, NANYA)\n\nFootprint dimensions for this customer configuration: width 3880mm, depth 2010mm, height 2118mm (Front View); 2390mm / 2070mm (Right View).',
          ko:'1.2.1. Machine Spec — Specification #2 (고객사: ATNS, NANYA)\n\n해당 고객사 구성 기준 치수: 폭 3880mm, 깊이 2010mm, 높이 2118mm(Front View); 2390mm / 2070mm(Right View).',
          zhCN:'1.2.1. Machine Spec — Specification #2(客户:ATNS、NANYA)\n\n该客户配置尺寸:宽3880mm、深2010mm、高2118mm(Front View);2390mm / 2070mm(Right View)。',
          zhTW:'1.2.1. Machine Spec — Specification #2(客戶:ATNS、NANYA)\n\n該客戶配置尺寸:寬3880mm、深2010mm、高2118mm(Front View);2390mm / 2070mm(Right View)。',
          ja:'1.2.1. Machine Spec — Specification #2(顧客:ATNS、NANYA)\n\n当該顧客構成の寸法:幅3880mm、奥行2010mm、高さ2118mm(Front View);2390mm / 2070mm(Right View)。',
          vi:'1.2.1. Machine Spec — Specification #2 (Khách hàng: ATNS, NANYA)\n\nKích thước theo cấu hình khách hàng này: rộng 3880mm, sâu 2010mm, cao 2118mm (Front View); 2390mm / 2070mm (Right View).'
        }},
        {img:cmImg('A','smtv',5),tx:{
          en:'1.2.1. Machine Spec — Specification #2 (Customer: SEMV, SEMCO)\n\nFootprint dimensions for this customer configuration: width 3880mm, depth 2010mm, height 2550mm (Front View); 2390mm / 2070mm (Right View).',
          ko:'1.2.1. Machine Spec — Specification #2 (고객사: SEMV, SEMCO)\n\n해당 고객사 구성 기준 치수: 폭 3880mm, 깊이 2010mm, 높이 2550mm(Front View); 2390mm / 2070mm(Right View).',
          zhCN:'1.2.1. Machine Spec — Specification #2(客户:SEMV、SEMCO)\n\n该客户配置尺寸:宽3880mm、深2010mm、高2550mm(Front View);2390mm / 2070mm(Right View)。',
          zhTW:'1.2.1. Machine Spec — Specification #2(客戶:SEMV、SEMCO)\n\n該客戶配置尺寸:寬3880mm、深2010mm、高2550mm(Front View);2390mm / 2070mm(Right View)。',
          ja:'1.2.1. Machine Spec — Specification #2(顧客:SEMV、SEMCO)\n\n当該顧客構成の寸法:幅3880mm、奥行2010mm、高さ2550mm(Front View);2390mm / 2070mm(Right View)。',
          vi:'1.2.1. Machine Spec — Specification #2 (Khách hàng: SEMV, SEMCO)\n\nKích thước theo cấu hình khách hàng này: rộng 3880mm, sâu 2010mm, cao 2550mm (Front View); 2390mm / 2070mm (Right View).'
        }},
        {img:cmImg('A','smtv',6),tx:{
          en:'Introduce — this section covers Dimension & Specification: Machine Spec, Camera Spec, and Safety Stickers.',
          ko:'Introduce — Dimension & Specification: Machine Spec, Camera Spec, Safety Stickers를 다룹니다.',
          zhCN:'Introduce——本节介绍Dimension & Specification:Machine Spec、Camera Spec、Safety Stickers。',
          zhTW:'Introduce——本節介紹Dimension & Specification:Machine Spec、Camera Spec、Safety Stickers。',
          ja:'Introduce——本節ではDimension & Specification:Machine Spec、Camera Spec、Safety Stickersを扱います。',
          vi:'Introduce — phần này đề cập đến Dimension & Specification: Machine Spec, Camera Spec, Safety Stickers.'
        }},
        {img:cmImg('A','smtv',7),tx:{
          en:'1.2.2. Camera Spec — 3D Vision Specification (12M, Cube B/S type)\n\nDetailed camera/optics specifications are customer-confidential and not shown here.',
          ko:'1.2.2. Camera Spec — 3D Vision Specification (12M, Cube B/S type)\n\n세부 Camera·광학계 Spec은 고객사 기밀 사항으로 본 자료에는 표기하지 않습니다.',
          zhCN:'1.2.2. Camera Spec — 3D Vision Specification (12M, Cube B/S type)\n\n详细Camera·光学系统Spec属客户保密事项,本资料不列出。',
          zhTW:'1.2.2. Camera Spec — 3D Vision Specification (12M, Cube B/S type)\n\n詳細Camera·光學系統Spec屬客戶保密事項,本資料不列出。',
          ja:'1.2.2. Camera Spec — 3D Vision Specification (12M, Cube B/S type)\n\n詳細なCamera・光学系Specは顧客機密事項のため、本資料には記載しません。',
          vi:'1.2.2. Camera Spec — 3D Vision Specification (12M, Cube B/S type)\n\nThông số chi tiết Camera·hệ quang học thuộc bảo mật khách hàng nên không nêu trong tài liệu này.'
        }},
        {img:cmImg('A','smtv',8),tx:{
          en:'1.2.2. Camera Spec — 3D Vision Specification (12M, Flat B/S type)\n\nDetailed camera/optics specifications are customer-confidential and not shown here.',
          ko:'1.2.2. Camera Spec — 3D Vision Specification (12M, Flat B/S type)\n\n세부 Camera·광학계 Spec은 고객사 기밀 사항으로 본 자료에는 표기하지 않습니다.',
          zhCN:'1.2.2. Camera Spec — 3D Vision Specification (12M, Flat B/S type)\n\n详细Camera·光学系统Spec属客户保密事项,本资料不列出。',
          zhTW:'1.2.2. Camera Spec — 3D Vision Specification (12M, Flat B/S type)\n\n詳細Camera·光學系統Spec屬客戶保密事項,本資料不列出。',
          ja:'1.2.2. Camera Spec — 3D Vision Specification (12M, Flat B/S type)\n\n詳細なCamera・光学系Specは顧客機密事項のため、本資料には記載しません。',
          vi:'1.2.2. Camera Spec — 3D Vision Specification (12M, Flat B/S type)\n\nThông số chi tiết Camera·hệ quang học thuộc bảo mật khách hàng nên không nêu trong tài liệu này.'
        }},
        {img:cmImg('A','smtv',9),tx:{
          en:'1.2.2. Camera Spec — 3D Vision Specification (25M, Cube B/S type)\n\nDetailed camera/optics specifications are customer-confidential and not shown here.',
          ko:'1.2.2. Camera Spec — 3D Vision Specification (25M, Cube B/S type)\n\n세부 Camera·광학계 Spec은 고객사 기밀 사항으로 본 자료에는 표기하지 않습니다.',
          zhCN:'1.2.2. Camera Spec — 3D Vision Specification (25M, Cube B/S type)\n\n详细Camera·光学系统Spec属客户保密事项,本资料不列出。',
          zhTW:'1.2.2. Camera Spec — 3D Vision Specification (25M, Cube B/S type)\n\n詳細Camera·光學系統Spec屬客戶保密事項,本資料不列出。',
          ja:'1.2.2. Camera Spec — 3D Vision Specification (25M, Cube B/S type)\n\n詳細なCamera・光学系Specは顧客機密事項のため、本資料には記載しません。',
          vi:'1.2.2. Camera Spec — 3D Vision Specification (25M, Cube B/S type)\n\nThông số chi tiết Camera·hệ quang học thuộc bảo mật khách hàng nên không nêu trong tài liệu này.'
        }},
        {img:cmImg('A','smtv',10),tx:{
          en:'1.2.2. Camera Spec — 2D Vision Specification (12M)\n\nDetailed camera specifications are customer-confidential and not shown here.',
          ko:'1.2.2. Camera Spec — 2D Vision Specification (12M)\n\n세부 Camera Spec은 고객사 기밀 사항으로 본 자료에는 표기하지 않습니다.',
          zhCN:'1.2.2. Camera Spec — 2D Vision Specification (12M)\n\n详细Camera Spec属客户保密事项,本资料不列出。',
          zhTW:'1.2.2. Camera Spec — 2D Vision Specification (12M)\n\n詳細Camera Spec屬客戶保密事項,本資料不列出。',
          ja:'1.2.2. Camera Spec — 2D Vision Specification (12M)\n\n詳細なCamera Specは顧客機密事項のため、本資料には記載しません。',
          vi:'1.2.2. Camera Spec — 2D Vision Specification (12M)\n\nThông số chi tiết Camera thuộc bảo mật khách hàng nên không nêu trong tài liệu này.'
        }},
        {img:cmImg('A','smtv',11),tx:{
          en:'Introduce — this section covers Dimension & Specification: Machine Spec, Camera Spec, and Safety Stickers.',
          ko:'Introduce — Dimension & Specification: Machine Spec, Camera Spec, Safety Stickers를 다룹니다.',
          zhCN:'Introduce——本节介绍Dimension & Specification:Machine Spec、Camera Spec、Safety Stickers。',
          zhTW:'Introduce——本節介紹Dimension & Specification:Machine Spec、Camera Spec、Safety Stickers。',
          ja:'Introduce——本節ではDimension & Specification:Machine Spec、Camera Spec、Safety Stickersを扱います。',
          vi:'Introduce — phần này đề cập đến Dimension & Specification: Machine Spec, Camera Spec, Safety Stickers.'
        }},
        {img:cmImg('A','smtv',12),tx:{
          en:'1.2.3. Safety Sticker\n\nSafety warning stickers attached to the equipment (attached per customer request — exact set/placement may vary).',
          ko:'1.2.3. Safety Sticker\n\n설비에 부착되는 안전 경고 스티커입니다 (고객사 요청에 따라 부착 — 세부 종류·위치는 다를 수 있음).',
          zhCN:'1.2.3. Safety Sticker\n\n设备上贴附的安全警示贴纸(依客户要求贴附——具体种类·位置可能不同)。',
          zhTW:'1.2.3. Safety Sticker\n\n設備上貼附的安全警示貼紙(依客戶要求貼附——具體種類·位置可能不同)。',
          ja:'1.2.3. Safety Sticker\n\n設備に貼付される安全警告ステッカーです(顧客の要請に応じて貼付——種類・位置は異なる場合があります)。',
          vi:'1.2.3. Safety Sticker\n\nNhãn cảnh báo an toàn dán trên thiết bị (dán theo yêu cầu khách hàng — chủng loại/vị trí cụ thể có thể khác nhau).'
        }},
        {img:cmImg('A','smtv',13),tx:{
          en:'Introduce — this section covers Hardware Configuration & System: Layout & Component, Interlock System, and Equipment Automatic Sequence.',
          ko:'Introduce — Hardware Configuration & System: Layout & Component, Interlock System, Equipment Automatic Sequence를 다룹니다.',
          zhCN:'Introduce——本节介绍Hardware Configuration & System:Layout & Component、Interlock System、Equipment Automatic Sequence。',
          zhTW:'Introduce——本節介紹Hardware Configuration & System:Layout & Component、Interlock System、Equipment Automatic Sequence。',
          ja:'Introduce——本節ではHardware Configuration & System:Layout & Component、Interlock System、Equipment Automatic Sequenceを扱います。',
          vi:'Introduce — phần này đề cập đến Hardware Configuration & System: Layout & Component, Interlock System, Equipment Automatic Sequence.'
        }},
        {img:cmImg('A','smtv',14),tx:{
          en:'1.3.1. Layout & Component (External, Front)\n\nFront view of the equipment: Main Machine, ISO Machine, Tower Lamp, EMS (Emergency Stop Switch), Monitor, EFU (Equipment Fan Filter Unit), Operation Panel, Keyboard & Mouse. (Exact configuration/placement varies by equipment spec.)',
          ko:'1.3.1. Layout & Component (External, Front)\n\n설비 정면 구성: Main Machine, ISO Machine, Tower Lamp, EMS(Emergency Stop Switch), Monitor, EFU(Equipment Fan Filter Unit), Operation Panel, Keyboard & Mouse. (세부 구성·위치는 설비 사양에 따라 다를 수 있음)',
          zhCN:'1.3.1. Layout & Component (External, Front)\n\n设备正面构成:Main Machine、ISO Machine、Tower Lamp、EMS(Emergency Stop Switch)、Monitor、EFU(Equipment Fan Filter Unit)、Operation Panel、Keyboard & Mouse。(具体構成·位置依设备规格而异)',
          zhTW:'1.3.1. Layout & Component (External, Front)\n\n設備正面構成:Main Machine、ISO Machine、Tower Lamp、EMS(Emergency Stop Switch)、Monitor、EFU(Equipment Fan Filter Unit)、Operation Panel、Keyboard & Mouse。(具體構成·位置依設備規格而異)',
          ja:'1.3.1. Layout & Component (External, Front)\n\n設備正面の構成:Main Machine、ISO Machine、Tower Lamp、EMS(Emergency Stop Switch)、Monitor、EFU(Equipment Fan Filter Unit)、Operation Panel、Keyboard & Mouse。(詳細構成・位置は設備仕様により異なります)',
          vi:'1.3.1. Layout & Component (External, Front)\n\nCấu hình mặt trước thiết bị: Main Machine, ISO Machine, Tower Lamp, EMS (Emergency Stop Switch), Monitor, EFU (Equipment Fan Filter Unit), Operation Panel, Keyboard & Mouse. (Cấu hình/vị trí cụ thể tùy theo spec thiết bị)'
        }},
        {img:cmImg('A','smtv',15),tx:{
          en:'1.3.1. Layout & Component (External, Rear)\n\nRear view of the equipment: Main Machine, ISO Machine, Main Power Switch, EMS (Emergency Stop Switch). (Exact configuration/placement varies by equipment spec.)',
          ko:'1.3.1. Layout & Component (External, Rear)\n\n설비 후면 구성: Main Machine, ISO Machine, Main Power Switch, EMS(Emergency Stop Switch). (세부 구성·위치는 설비 사양에 따라 다를 수 있음)',
          zhCN:'1.3.1. Layout & Component (External, Rear)\n\n设备背面构成:Main Machine、ISO Machine、Main Power Switch、EMS(Emergency Stop Switch)。(具体构成·位置依设备规格而异)',
          zhTW:'1.3.1. Layout & Component (External, Rear)\n\n設備背面構成:Main Machine、ISO Machine、Main Power Switch、EMS(Emergency Stop Switch)。(具體構成·位置依設備規格而異)',
          ja:'1.3.1. Layout & Component (External, Rear)\n\n設備背面の構成:Main Machine、ISO Machine、Main Power Switch、EMS(Emergency Stop Switch)。(詳細構成・位置は設備仕様により異なります)',
          vi:'1.3.1. Layout & Component (External, Rear)\n\nCấu hình mặt sau thiết bị: Main Machine, ISO Machine, Main Power Switch, EMS (Emergency Stop Switch). (Cấu hình/vị trí cụ thể tùy theo spec thiết bị)'
        }},
        {img:cmImg('A','smtv',16),tx:{
          en:'1.3.1. Layout & Component (Internal, Front)\n\nInternal front-side layout: 3D Vision #1/#2 PC, HOST PC, 2D Vision PC, KVM, HUB, 3D/2D LED Controllers, UPS, MSM (Multi Sorter Module). (Exact configuration/placement varies by equipment spec.)',
          ko:'1.3.1. Layout & Component (Internal, Front)\n\n내부 정면 배치: 3D Vision #1/#2 PC, HOST PC, 2D Vision PC, KVM, HUB, 3D/2D LED Controller, UPS, MSM(Multi Sorter Module). (세부 구성·위치는 설비 사양에 따라 다를 수 있음)',
          zhCN:'1.3.1. Layout & Component (Internal, Front)\n\n内部正面配置:3D Vision #1/#2 PC、HOST PC、2D Vision PC、KVM、HUB、3D/2D LED Controller、UPS、MSM(Multi Sorter Module)。(具体构成·位置依设备规格而异)',
          zhTW:'1.3.1. Layout & Component (Internal, Front)\n\n內部正面配置:3D Vision #1/#2 PC、HOST PC、2D Vision PC、KVM、HUB、3D/2D LED Controller、UPS、MSM(Multi Sorter Module)。(具體構成·位置依設備規格而異)',
          ja:'1.3.1. Layout & Component (Internal, Front)\n\n内部正面配置:3D Vision #1/#2 PC、HOST PC、2D Vision PC、KVM、HUB、3D/2D LED Controller、UPS、MSM(Multi Sorter Module)。(詳細構成・位置は設備仕様により異なります)',
          vi:'1.3.1. Layout & Component (Internal, Front)\n\nBố trí bên trong mặt trước: 3D Vision #1/#2 PC, HOST PC, 2D Vision PC, KVM, HUB, 3D/2D LED Controller, UPS, MSM (Multi Sorter Module). (Cấu hình/vị trí cụ thể tùy theo spec thiết bị)'
        }},
        {img:cmImg('A','smtv',17),tx:{
          en:'1.3.1. Layout & Component (Internal, Rear)\n\nInternal rear-side layout: 3D Vision #1/#2 AF Controller, 3D Vision #1/#2 PZT Controller, TTM (Tray Transfer Module), Air Regulator, 3D Vision #1/#2 Module. (Exact configuration/placement varies by equipment spec.)',
          ko:'1.3.1. Layout & Component (Internal, Rear)\n\n내부 후면 배치: 3D Vision #1/#2 AF Controller, 3D Vision #1/#2 PZT Controller, TTM(Tray Transfer Module), Air Regulator, 3D Vision #1/#2 Module. (세부 구성·위치는 설비 사양에 따라 다를 수 있음)',
          zhCN:'1.3.1. Layout & Component (Internal, Rear)\n\n内部背面配置:3D Vision #1/#2 AF Controller、3D Vision #1/#2 PZT Controller、TTM(Tray Transfer Module)、Air Regulator、3D Vision #1/#2 Module。(具体构成·位置依设备规格而异)',
          zhTW:'1.3.1. Layout & Component (Internal, Rear)\n\n內部背面配置:3D Vision #1/#2 AF Controller、3D Vision #1/#2 PZT Controller、TTM(Tray Transfer Module)、Air Regulator、3D Vision #1/#2 Module。(具體構成·位置依設備規格而異)',
          ja:'1.3.1. Layout & Component (Internal, Rear)\n\n内部背面配置:3D Vision #1/#2 AF Controller、3D Vision #1/#2 PZT Controller、TTM(Tray Transfer Module)、Air Regulator、3D Vision #1/#2 Module。(詳細構成・位置は設備仕様により異なります)',
          vi:'1.3.1. Layout & Component (Internal, Rear)\n\nBố trí bên trong mặt sau: 3D Vision #1/#2 AF Controller, 3D Vision #1/#2 PZT Controller, TTM (Tray Transfer Module), Air Regulator, 3D Vision #1/#2 Module. (Cấu hình/vị trí cụ thể tùy theo spec thiết bị)'
        }},
        {img:cmImg('A','smtv',18),tx:{
          en:'1.3.1. Layout & Component (Internal, Top)\n\nTop-down layout of the Main and ISO Machine: 3D Vision Module #1/#2, TTM, MSM, 2D Vision Module, Loader/Unloader Multi Picker, Jig #1/#2 Multi Picker. (Exact configuration/placement varies by equipment spec.)',
          ko:'1.3.1. Layout & Component (Internal, Top)\n\nMain·ISO Machine 상면 배치: 3D Vision Module #1/#2, TTM, MSM, 2D Vision Module, Loader/Unloader Multi Picker, Jig #1/#2 Multi Picker. (세부 구성·위치는 설비 사양에 따라 다를 수 있음)',
          zhCN:'1.3.1. Layout & Component (Internal, Top)\n\nMain·ISO Machine俯视配置:3D Vision Module #1/#2、TTM、MSM、2D Vision Module、Loader/Unloader Multi Picker、Jig #1/#2 Multi Picker。(具体构成·位置依设备规格而异)',
          zhTW:'1.3.1. Layout & Component (Internal, Top)\n\nMain·ISO Machine俯視配置:3D Vision Module #1/#2、TTM、MSM、2D Vision Module、Loader/Unloader Multi Picker、Jig #1/#2 Multi Picker。(具體構成·位置依設備規格而異)',
          ja:'1.3.1. Layout & Component (Internal, Top)\n\nMain·ISO Machine上面配置:3D Vision Module #1/#2、TTM、MSM、2D Vision Module、Loader/Unloader Multi Picker、Jig #1/#2 Multi Picker。(詳細構成・位置は設備仕様により異なります)',
          vi:'1.3.1. Layout & Component (Internal, Top)\n\nBố trí nhìn từ trên của Main·ISO Machine: 3D Vision Module #1/#2, TTM, MSM, 2D Vision Module, Loader/Unloader Multi Picker, Jig #1/#2 Multi Picker. (Cấu hình/vị trí cụ thể tùy theo spec thiết bị)'
        }},
        {img:cmImg('A','smtv',19),tx:{
          en:'1.3.1. Layout & Component (Internal, Top — Indexers)\n\nTop-down view of all Indexers: Align #1/#2, Jig #1/#2, Loader 1/2, Empty, Reject Empty, Good 1/2, Buffer, Reject 1, Reject 2. (Exact configuration/placement varies by equipment spec.)',
          ko:'1.3.1. Layout & Component (Internal, Top — Indexers)\n\n모든 Indexer 상면 배치: Align #1/#2, Jig #1/#2, Loader 1/2, Empty, Reject Empty, Good 1/2, Buffer, Reject 1, Reject 2. (세부 구성·위치는 설비 사양에 따라 다를 수 있음)',
          zhCN:'1.3.1. Layout & Component (Internal, Top — Indexers)\n\n所有Indexer俯视配置:Align #1/#2、Jig #1/#2、Loader 1/2、Empty、Reject Empty、Good 1/2、Buffer、Reject 1、Reject 2。(具体构成·位置依设备规格而异)',
          zhTW:'1.3.1. Layout & Component (Internal, Top — Indexers)\n\n所有Indexer俯視配置:Align #1/#2、Jig #1/#2、Loader 1/2、Empty、Reject Empty、Good 1/2、Buffer、Reject 1、Reject 2。(具體構成·位置依設備規格而異)',
          ja:'1.3.1. Layout & Component (Internal, Top — Indexers)\n\n全Indexerの上面配置:Align #1/#2、Jig #1/#2、Loader 1/2、Empty、Reject Empty、Good 1/2、Buffer、Reject 1、Reject 2。(詳細構成・位置は設備仕様により異なります)',
          vi:'1.3.1. Layout & Component (Internal, Top — Indexers)\n\nBố trí nhìn từ trên của mọi Indexer: Align #1/#2, Jig #1/#2, Loader 1/2, Empty, Reject Empty, Good 1/2, Buffer, Reject 1, Reject 2. (Cấu hình/vị trí cụ thể tùy theo spec thiết bị)'
        }},
        {img:cmImg('A','smtv',20),tx:{
          en:'1.3.1. Layout & Component (Motor Direction) — Elevator\n\nShows the +/− motor direction convention for the 4 Elevator Z-axes (Front view).',
          ko:'1.3.1. Layout & Component (Motor Direction) — Elevator\n\nElevator Z-axis 4개 축의 +/− 방향 기준을 보여줍니다 (Front view).',
          zhCN:'1.3.1. Layout & Component (Motor Direction) — Elevator\n\n显示Elevator Z-axis 4个轴的+/−方向基准(Front view)。',
          zhTW:'1.3.1. Layout & Component (Motor Direction) — Elevator\n\n顯示Elevator Z-axis 4個軸的+/−方向基準(Front view)。',
          ja:'1.3.1. Layout & Component (Motor Direction) — Elevator\n\nElevator Z-axis 4軸の+/−方向基準を示します(Front view)。',
          vi:'1.3.1. Layout & Component (Motor Direction) — Elevator\n\nHiển thị chuẩn hướng +/− của 4 trục Z Elevator (Front view).'
        }},
        {img:cmImg('A','smtv',21),tx:{
          en:'1.3.1. Layout & Component (Motor Direction) — Load Multi Picker\n\nShows the +/− motor direction convention for the Load Multi Picker\'s X-axis and Z-axis (Top view).',
          ko:'1.3.1. Layout & Component (Motor Direction) — Load Multi Picker\n\nLoad Multi Picker X-axis·Z-axis의 +/− 방향 기준을 보여줍니다 (Top view).',
          zhCN:'1.3.1. Layout & Component (Motor Direction) — Load Multi Picker\n\n显示Load Multi Picker X-axis·Z-axis的+/−方向基准(Top view)。',
          zhTW:'1.3.1. Layout & Component (Motor Direction) — Load Multi Picker\n\n顯示Load Multi Picker X-axis·Z-axis的+/−方向基準(Top view)。',
          ja:'1.3.1. Layout & Component (Motor Direction) — Load Multi Picker\n\nLoad Multi Picker X-axis・Z-axisの+/−方向基準を示します(Top view)。',
          vi:'1.3.1. Layout & Component (Motor Direction) — Load Multi Picker\n\nHiển thị chuẩn hướng +/− của trục X, Z Load Multi Picker (Top view).'
        }},
        {img:cmImg('A','smtv',22),tx:{
          en:'1.3.1. Layout & Component (Motor Direction) — Jig Multi Picker\n\nShows the +/− motor direction convention for Jig Multi Picker #1/#2\'s X-axis and Z-axis (Top view).',
          ko:'1.3.1. Layout & Component (Motor Direction) — Jig Multi Picker\n\nJig Multi Picker #1/#2 X-axis·Z-axis의 +/− 방향 기준을 보여줍니다 (Top view).',
          zhCN:'1.3.1. Layout & Component (Motor Direction) — Jig Multi Picker\n\n显示Jig Multi Picker #1/#2 X-axis·Z-axis的+/−方向基准(Top view)。',
          zhTW:'1.3.1. Layout & Component (Motor Direction) — Jig Multi Picker\n\n顯示Jig Multi Picker #1/#2 X-axis·Z-axis的+/−方向基準(Top view)。',
          ja:'1.3.1. Layout & Component (Motor Direction) — Jig Multi Picker\n\nJig Multi Picker #1/#2 X-axis・Z-axisの+/−方向基準を示します(Top view)。',
          vi:'1.3.1. Layout & Component (Motor Direction) — Jig Multi Picker\n\nHiển thị chuẩn hướng +/− của trục X, Z Jig Multi Picker #1/#2 (Top view).'
        }},
        {img:cmImg('A','smtv',23),tx:{
          en:'1.3.1. Layout & Component (Motor Direction) — Aligner\n\nShows the +/− motor direction convention for Aligner #1/#2\'s X-axis and Y-axis (Top view).',
          ko:'1.3.1. Layout & Component (Motor Direction) — Aligner\n\nAligner #1/#2 X-axis·Y-axis의 +/− 방향 기준을 보여줍니다 (Top view).',
          zhCN:'1.3.1. Layout & Component (Motor Direction) — Aligner\n\n显示Aligner #1/#2 X-axis·Y-axis的+/−方向基准(Top view)。',
          zhTW:'1.3.1. Layout & Component (Motor Direction) — Aligner\n\n顯示Aligner #1/#2 X-axis·Y-axis的+/−方向基準(Top view)。',
          ja:'1.3.1. Layout & Component (Motor Direction) — Aligner\n\nAligner #1/#2 X-axis・Y-axisの+/−方向基準を示します(Top view)。',
          vi:'1.3.1. Layout & Component (Motor Direction) — Aligner\n\nHiển thị chuẩn hướng +/− của trục X, Y Aligner #1/#2 (Top view).'
        }},
        {img:cmImg('A','smtv',24),tx:{
          en:'1.3.1. Layout & Component (Motor Direction) — 3D Vision Module\n\nShows the +/− motor direction convention for 3D Vision Module #1/#2\'s X-axis and Z-axis (Top view).',
          ko:'1.3.1. Layout & Component (Motor Direction) — 3D Vision Module\n\n3D Vision Module #1/#2 X-axis·Z-axis의 +/− 방향 기준을 보여줍니다 (Top view).',
          zhCN:'1.3.1. Layout & Component (Motor Direction) — 3D Vision Module\n\n显示3D Vision Module #1/#2 X-axis·Z-axis的+/−方向基准(Top view)。',
          zhTW:'1.3.1. Layout & Component (Motor Direction) — 3D Vision Module\n\n顯示3D Vision Module #1/#2 X-axis·Z-axis的+/−方向基準(Top view)。',
          ja:'1.3.1. Layout & Component (Motor Direction) — 3D Vision Module\n\n3D Vision Module #1/#2 X-axis・Z-axisの+/−方向基準を示します(Top view)。',
          vi:'1.3.1. Layout & Component (Motor Direction) — 3D Vision Module\n\nHiển thị chuẩn hướng +/− của trục X, Z 3D Vision Module #1/#2 (Top view).'
        }},
        {img:cmImg('A','smtv',25),tx:{
          en:'1.3.1. Layout & Component (Motor Direction) — Unload Multi Picker\n\nShows the +/− motor direction convention for the Unload Multi Picker\'s X-axis and Z-axis (Top view).',
          ko:'1.3.1. Layout & Component (Motor Direction) — Unload Multi Picker\n\nUnload Multi Picker X-axis·Z-axis의 +/− 방향 기준을 보여줍니다 (Top view).',
          zhCN:'1.3.1. Layout & Component (Motor Direction) — Unload Multi Picker\n\n显示Unload Multi Picker X-axis·Z-axis的+/−方向基准(Top view)。',
          zhTW:'1.3.1. Layout & Component (Motor Direction) — Unload Multi Picker\n\n顯示Unload Multi Picker X-axis·Z-axis的+/−方向基準(Top view)。',
          ja:'1.3.1. Layout & Component (Motor Direction) — Unload Multi Picker\n\nUnload Multi Picker X-axis・Z-axisの+/−方向基準を示します(Top view)。',
          vi:'1.3.1. Layout & Component (Motor Direction) — Unload Multi Picker\n\nHiển thị chuẩn hướng +/− của trục X, Z Unload Multi Picker (Top view).'
        }},
        {img:cmImg('A','smtv',26),tx:{
          en:'1.3.1. Layout & Component (Motor Direction) — Dual Tray Transfer Module\n\nShows the +/− motor direction convention for the Dual Tray Transfer Module\'s X-axis and Z-axis (Top view).',
          ko:'1.3.1. Layout & Component (Motor Direction) — Dual Tray Transfer Module\n\nDual Tray Transfer Module X-axis·Z-axis의 +/− 방향 기준을 보여줍니다 (Top view).',
          zhCN:'1.3.1. Layout & Component (Motor Direction) — Dual Tray Transfer Module\n\n显示Dual Tray Transfer Module X-axis·Z-axis的+/−方向基准(Top view)。',
          zhTW:'1.3.1. Layout & Component (Motor Direction) — Dual Tray Transfer Module\n\n顯示Dual Tray Transfer Module X-axis·Z-axis的+/−方向基準(Top view)。',
          ja:'1.3.1. Layout & Component (Motor Direction) — Dual Tray Transfer Module\n\nDual Tray Transfer Module X-axis・Z-axisの+/−方向基準を示します(Top view)。',
          vi:'1.3.1. Layout & Component (Motor Direction) — Dual Tray Transfer Module\n\nHiển thị chuẩn hướng +/− của trục X, Z Dual Tray Transfer Module (Top view).'
        }},
        {img:cmImg('A','smtv',27),tx:{
          en:'1.3.1. Layout & Component (Motor Direction) — 2D Vision\n\nShows the +/− motor direction convention for the 2D Vision module\'s X-axis and Z-axis (Top view).',
          ko:'1.3.1. Layout & Component (Motor Direction) — 2D Vision\n\n2D Vision Module X-axis·Z-axis의 +/− 방향 기준을 보여줍니다 (Top view).',
          zhCN:'1.3.1. Layout & Component (Motor Direction) — 2D Vision\n\n显示2D Vision Module X-axis·Z-axis的+/−方向基准(Top view)。',
          zhTW:'1.3.1. Layout & Component (Motor Direction) — 2D Vision\n\n顯示2D Vision Module X-axis·Z-axis的+/−方向基準(Top view)。',
          ja:'1.3.1. Layout & Component (Motor Direction) — 2D Vision\n\n2D Vision Module X-axis・Z-axisの+/−方向基準を示します(Top view)。',
          vi:'1.3.1. Layout & Component (Motor Direction) — 2D Vision\n\nHiển thị chuẩn hướng +/− của trục X, Z 2D Vision Module (Top view).'
        }},
        {img:cmImg('A','smtv',28),tx:{
          en:'1.3.1. Layout & Component (Motor Direction) — Multi Sorter Module\n\nShows the +/− motor direction convention for the Multi Sorter Module\'s X-axis, Z-axis, and Gap X-axis (Top view).',
          ko:'1.3.1. Layout & Component (Motor Direction) — Multi Sorter Module\n\nMulti Sorter Module X-axis·Z-axis·Gap X-axis의 +/− 방향 기준을 보여줍니다 (Top view).',
          zhCN:'1.3.1. Layout & Component (Motor Direction) — Multi Sorter Module\n\n显示Multi Sorter Module X-axis·Z-axis·Gap X-axis的+/−方向基准(Top view)。',
          zhTW:'1.3.1. Layout & Component (Motor Direction) — Multi Sorter Module\n\n顯示Multi Sorter Module X-axis·Z-axis·Gap X-axis的+/−方向基準(Top view)。',
          ja:'1.3.1. Layout & Component (Motor Direction) — Multi Sorter Module\n\nMulti Sorter Module X-axis・Z-axis・Gap X-axisの+/−方向基準を示します(Top view)。',
          vi:'1.3.1. Layout & Component (Motor Direction) — Multi Sorter Module\n\nHiển thị chuẩn hướng +/− của trục X, Z, Gap X Multi Sorter Module (Top view).'
        }},
        {img:cmImg('A','smtv',29),tx:{
          en:'1.3.1. Layout & Component (Motor Direction) — Indexer\n\nShows the +/− motor direction convention for every Indexer\'s Y-axis: Align #1/#2, Jig #1/#2, Loader 1/2, Empty, Reject Empty, Good 1/2, Buffer, Reject 1/2 (Top view).',
          ko:'1.3.1. Layout & Component (Motor Direction) — Indexer\n\n모든 Indexer Y-axis의 +/− 방향 기준을 보여줍니다: Align #1/#2, Jig #1/#2, Loader 1/2, Empty, Reject Empty, Good 1/2, Buffer, Reject 1/2 (Top view).',
          zhCN:'1.3.1. Layout & Component (Motor Direction) — Indexer\n\n显示所有Indexer Y-axis的+/−方向基准:Align #1/#2、Jig #1/#2、Loader 1/2、Empty、Reject Empty、Good 1/2、Buffer、Reject 1/2(Top view)。',
          zhTW:'1.3.1. Layout & Component (Motor Direction) — Indexer\n\n顯示所有Indexer Y-axis的+/−方向基準:Align #1/#2、Jig #1/#2、Loader 1/2、Empty、Reject Empty、Good 1/2、Buffer、Reject 1/2(Top view)。',
          ja:'1.3.1. Layout & Component (Motor Direction) — Indexer\n\n全Indexer Y-axisの+/−方向基準を示します:Align #1/#2、Jig #1/#2、Loader 1/2、Empty、Reject Empty、Good 1/2、Buffer、Reject 1/2(Top view)。',
          vi:'1.3.1. Layout & Component (Motor Direction) — Indexer\n\nHiển thị chuẩn hướng +/− trục Y của mọi Indexer: Align #1/#2, Jig #1/#2, Loader 1/2, Empty, Reject Empty, Good 1/2, Buffer, Reject 1/2 (Top view).'
        }},
        {img:cmImg('A','smtv',30),tx:{
          en:'1.3.1. Layout & Component (2D Vision Module, 25M Camera)\n\nKey components: Main Camera, Lens, Aperture, Coaxial Light, Z-axis Motor, Up/Down Limit Sensor, Sensor Object, Photo Sensor, Camera Power, CL Cable, LED Cable/Power.',
          ko:'1.3.1. Layout & Component (2D Vision Module, 25M Camera)\n\n주요 구성: Main Camera, Lens, Aperture, Coaxial Light, Z-axis Motor, Up/Down Limit Sensor, Sensor Object, Photo Sensor, Camera Power, CL Cable, LED Cable/Power.',
          zhCN:'1.3.1. Layout & Component (2D Vision Module, 25M Camera)\n\n主要构成:Main Camera、Lens、Aperture、Coaxial Light、Z-axis Motor、Up/Down Limit Sensor、Sensor Object、Photo Sensor、Camera Power、CL Cable、LED Cable/Power。',
          zhTW:'1.3.1. Layout & Component (2D Vision Module, 25M Camera)\n\n主要構成:Main Camera、Lens、Aperture、Coaxial Light、Z-axis Motor、Up/Down Limit Sensor、Sensor Object、Photo Sensor、Camera Power、CL Cable、LED Cable/Power。',
          ja:'1.3.1. Layout & Component (2D Vision Module, 25M Camera)\n\n主要構成:Main Camera、Lens、Aperture、Coaxial Light、Z-axis Motor、Up/Down Limit Sensor、Sensor Object、Photo Sensor、Camera Power、CL Cable、LED Cable/Power。',
          vi:'1.3.1. Layout & Component (2D Vision Module, 25M Camera)\n\nThành phần chính: Main Camera, Lens, Aperture, Coaxial Light, Z-axis Motor, Up/Down Limit Sensor, Sensor Object, Photo Sensor, Camera Power, CL Cable, LED Cable/Power.'
        }},
        {img:cmImg('A','smtv',31),tx:{
          en:'1.3.1. Layout & Component (3D Vision Module, B/S type) — Camera side\n\nKey components: Main Camera, Aperture, CXP Cable, Z-axis Motor, Up/Down Limit Sensor, Sensor Object, Photo Sensor, Camera Power.',
          ko:'1.3.1. Layout & Component (3D Vision Module, B/S type) — Camera 측\n\n주요 구성: Main Camera, Aperture, CXP Cable, Z-axis Motor, Up/Down Limit Sensor, Sensor Object, Photo Sensor, Camera Power.',
          zhCN:'1.3.1. Layout & Component (3D Vision Module, B/S type) — Camera侧\n\n主要构成:Main Camera、Aperture、CXP Cable、Z-axis Motor、Up/Down Limit Sensor、Sensor Object、Photo Sensor、Camera Power。',
          zhTW:'1.3.1. Layout & Component (3D Vision Module, B/S type) — Camera側\n\n主要構成:Main Camera、Aperture、CXP Cable、Z-axis Motor、Up/Down Limit Sensor、Sensor Object、Photo Sensor、Camera Power。',
          ja:'1.3.1. Layout & Component (3D Vision Module, B/S type) — Camera側\n\n主要構成:Main Camera、Aperture、CXP Cable、Z-axis Motor、Up/Down Limit Sensor、Sensor Object、Photo Sensor、Camera Power。',
          vi:'1.3.1. Layout & Component (3D Vision Module, B/S type) — Phía Camera\n\nThành phần chính: Main Camera, Aperture, CXP Cable, Z-axis Motor, Up/Down Limit Sensor, Sensor Object, Photo Sensor, Camera Power.'
        }},
        {img:cmImg('A','smtv',32),tx:{
          en:'1.3.1. Layout & Component (3D Vision Module, B/S type) — Optics side\n\nKey components: Coaxial Light, Oblique Light, B/S (Beam Splitter), Laser, Laser Mirror, Laser Camera, Reference Mirror (with angle dial), PZT Stage, Micrometer, Lens.',
          ko:'1.3.1. Layout & Component (3D Vision Module, B/S type) — 광학계 측\n\n주요 구성: Coaxial Light, Oblique Light, B/S(Beam Splitter), Laser, Laser Mirror, Laser Camera, Reference Mirror(각도 Dial 포함), PZT Stage, Micrometer, Lens.',
          zhCN:'1.3.1. Layout & Component (3D Vision Module, B/S type) — 光学侧\n\n主要构成:Coaxial Light、Oblique Light、B/S(Beam Splitter)、Laser、Laser Mirror、Laser Camera、Reference Mirror(含角度Dial)、PZT Stage、Micrometer、Lens。',
          zhTW:'1.3.1. Layout & Component (3D Vision Module, B/S type) — 光學側\n\n主要構成:Coaxial Light、Oblique Light、B/S(Beam Splitter)、Laser、Laser Mirror、Laser Camera、Reference Mirror(含角度Dial)、PZT Stage、Micrometer、Lens。',
          ja:'1.3.1. Layout & Component (3D Vision Module, B/S type) — 光学系側\n\n主要構成:Coaxial Light、Oblique Light、B/S(Beam Splitter)、Laser、Laser Mirror、Laser Camera、Reference Mirror(角度Dial付き)、PZT Stage、Micrometer、Lens。',
          vi:'1.3.1. Layout & Component (3D Vision Module, B/S type) — Phía quang học\n\nThành phần chính: Coaxial Light, Oblique Light, B/S (Beam Splitter), Laser, Laser Mirror, Laser Camera, Reference Mirror (kèm Angle Dial), PZT Stage, Micrometer, Lens.'
        }},
        {img:cmImg('A','smtv',33),tx:{
          en:'1.3.1. Layout & Component (3D Vision Module, Cube type) — Camera side\n\nKey components: Main Camera, Aperture, CXP Cable, Z-axis Motor, Up/Down Limit Sensor, Sensor Object, Photo Sensor, Camera Power.',
          ko:'1.3.1. Layout & Component (3D Vision Module, Cube type) — Camera 측\n\n주요 구성: Main Camera, Aperture, CXP Cable, Z-axis Motor, Up/Down Limit Sensor, Sensor Object, Photo Sensor, Camera Power.',
          zhCN:'1.3.1. Layout & Component (3D Vision Module, Cube type) — Camera侧\n\n主要构成:Main Camera、Aperture、CXP Cable、Z-axis Motor、Up/Down Limit Sensor、Sensor Object、Photo Sensor、Camera Power。',
          zhTW:'1.3.1. Layout & Component (3D Vision Module, Cube type) — Camera側\n\n主要構成:Main Camera、Aperture、CXP Cable、Z-axis Motor、Up/Down Limit Sensor、Sensor Object、Photo Sensor、Camera Power。',
          ja:'1.3.1. Layout & Component (3D Vision Module, Cube type) — Camera側\n\n主要構成:Main Camera、Aperture、CXP Cable、Z-axis Motor、Up/Down Limit Sensor、Sensor Object、Photo Sensor、Camera Power。',
          vi:'1.3.1. Layout & Component (3D Vision Module, Cube type) — Phía Camera\n\nThành phần chính: Main Camera, Aperture, CXP Cable, Z-axis Motor, Up/Down Limit Sensor, Sensor Object, Photo Sensor, Camera Power.'
        }},
        {img:cmImg('A','smtv',34),tx:{
          en:'1.3.1. Layout & Component (3D Vision Module, Cube type) — Optics side\n\nKey components: Coaxial Light, Oblique Light, Cube B/S (Beam Splitter), Laser, Laser Mirror, Laser Camera, Reference Mirror (with angle dial), PZT Stage, Micrometer, Lens.',
          ko:'1.3.1. Layout & Component (3D Vision Module, Cube type) — 광학계 측\n\n주요 구성: Coaxial Light, Oblique Light, Cube B/S(Beam Splitter), Laser, Laser Mirror, Laser Camera, Reference Mirror(각도 Dial 포함), PZT Stage, Micrometer, Lens.',
          zhCN:'1.3.1. Layout & Component (3D Vision Module, Cube type) — 光学侧\n\n主要构成:Coaxial Light、Oblique Light、Cube B/S(Beam Splitter)、Laser、Laser Mirror、Laser Camera、Reference Mirror(含角度Dial)、PZT Stage、Micrometer、Lens。',
          zhTW:'1.3.1. Layout & Component (3D Vision Module, Cube type) — 光學側\n\n主要構成:Coaxial Light、Oblique Light、Cube B/S(Beam Splitter)、Laser、Laser Mirror、Laser Camera、Reference Mirror(含角度Dial)、PZT Stage、Micrometer、Lens。',
          ja:'1.3.1. Layout & Component (3D Vision Module, Cube type) — 光学系側\n\n主要構成:Coaxial Light、Oblique Light、Cube B/S(Beam Splitter)、Laser、Laser Mirror、Laser Camera、Reference Mirror(角度Dial付き)、PZT Stage、Micrometer、Lens。',
          vi:'1.3.1. Layout & Component (3D Vision Module, Cube type) — Phía quang học\n\nThành phần chính: Coaxial Light, Oblique Light, Cube B/S (Beam Splitter), Laser, Laser Mirror, Laser Camera, Reference Mirror (kèm Angle Dial), PZT Stage, Micrometer, Lens.'
        }},
        {img:cmImg('A','smtv',35),tx:{
          en:'1.3.1. Layout & Component (TTM: Tray Transfer Module)\n\nKey components: Z-axis Motor, Coupler, Speed Controller, Up/Down Cylinder, Shaft & Spring, Ball Bushing, Stopper, Ejector, Gripper (with Cylinder & Auto Switch Sensor), PCB Board, Tray Check Sensor, Photo/Magnetic Sensor, Damper.',
          ko:'1.3.1. Layout & Component (TTM: Tray Transfer Module)\n\n주요 구성: Z-axis Motor, Coupler, Speed Controller, Up/Down Cylinder, Shaft & Spring, Ball Bushing, Stopper, Ejector, Gripper(Cylinder & Auto Switch Sensor 포함), PCB Board, Tray Check Sensor, Photo/Magnetic Sensor, Damper.',
          zhCN:'1.3.1. Layout & Component (TTM: Tray Transfer Module)\n\n主要构成:Z-axis Motor、Coupler、Speed Controller、Up/Down Cylinder、Shaft & Spring、Ball Bushing、Stopper、Ejector、Gripper(含Cylinder & Auto Switch Sensor)、PCB Board、Tray Check Sensor、Photo/Magnetic Sensor、Damper。',
          zhTW:'1.3.1. Layout & Component (TTM: Tray Transfer Module)\n\n主要構成:Z-axis Motor、Coupler、Speed Controller、Up/Down Cylinder、Shaft & Spring、Ball Bushing、Stopper、Ejector、Gripper(含Cylinder & Auto Switch Sensor)、PCB Board、Tray Check Sensor、Photo/Magnetic Sensor、Damper。',
          ja:'1.3.1. Layout & Component (TTM: Tray Transfer Module)\n\n主要構成:Z-axis Motor、Coupler、Speed Controller、Up/Down Cylinder、Shaft & Spring、Ball Bushing、Stopper、Ejector、Gripper(Cylinder & Auto Switch Sensor含む)、PCB Board、Tray Check Sensor、Photo/Magnetic Sensor、Damper。',
          vi:'1.3.1. Layout & Component (TTM: Tray Transfer Module)\n\nThành phần chính: Z-axis Motor, Coupler, Speed Controller, Up/Down Cylinder, Shaft & Spring, Ball Bushing, Stopper, Ejector, Gripper (kèm Cylinder & Auto Switch Sensor), PCB Board, Tray Check Sensor, Photo/Magnetic Sensor, Damper.'
        }},
        {img:cmImg('A','smtv',36),tx:{
          en:'1.3.1. Layout & Component (MSM: Multi Sorter Module)\n\nKey components: Z-axis Motor, X-axis Motor (Picker Gap Motor), Picker (with Cylinder & Auto Switch Sensor), Coupler, PCB Board, Speed Controller, Vacuum Ejector, Solenoid Valve, Air Filter, Photo/Magnetic Sensor.',
          ko:'1.3.1. Layout & Component (MSM: Multi Sorter Module)\n\n주요 구성: Z-axis Motor, X-axis Motor(Picker Gap Motor), Picker(Cylinder & Auto Switch Sensor 포함), Coupler, PCB Board, Speed Controller, Vacuum Ejector, Solenoid Valve, Air Filter, Photo/Magnetic Sensor.',
          zhCN:'1.3.1. Layout & Component (MSM: Multi Sorter Module)\n\n主要构成:Z-axis Motor、X-axis Motor(Picker Gap Motor)、Picker(含Cylinder & Auto Switch Sensor)、Coupler、PCB Board、Speed Controller、Vacuum Ejector、Solenoid Valve、Air Filter、Photo/Magnetic Sensor。',
          zhTW:'1.3.1. Layout & Component (MSM: Multi Sorter Module)\n\n主要構成:Z-axis Motor、X-axis Motor(Picker Gap Motor)、Picker(含Cylinder & Auto Switch Sensor)、Coupler、PCB Board、Speed Controller、Vacuum Ejector、Solenoid Valve、Air Filter、Photo/Magnetic Sensor。',
          ja:'1.3.1. Layout & Component (MSM: Multi Sorter Module)\n\n主要構成:Z-axis Motor、X-axis Motor(Picker Gap Motor)、Picker(Cylinder & Auto Switch Sensor含む)、Coupler、PCB Board、Speed Controller、Vacuum Ejector、Solenoid Valve、Air Filter、Photo/Magnetic Sensor。',
          vi:'1.3.1. Layout & Component (MSM: Multi Sorter Module)\n\nThành phần chính: Z-axis Motor, X-axis Motor (Picker Gap Motor), Picker (kèm Cylinder & Auto Switch Sensor), Coupler, PCB Board, Speed Controller, Vacuum Ejector, Solenoid Valve, Air Filter, Photo/Magnetic Sensor.'
        }},
        {img:cmImg('A','smtv',37),tx:{
          en:'1.3.1. Layout & Component (Loader & Unloader Multi Picker)\n\nKey components: Z-axis Motor, Picker (with Cylinder & Auto Switch Sensor), Vacuum Generator, Coupler, PCB Board, Speed Controller, Solenoid Valve, Air Filter, Photo/Magnetic Sensor.',
          ko:'1.3.1. Layout & Component (Loader & Unloader Multi Picker)\n\n주요 구성: Z-axis Motor, Picker(Cylinder & Auto Switch Sensor 포함), Vacuum Generator, Coupler, PCB Board, Speed Controller, Solenoid Valve, Air Filter, Photo/Magnetic Sensor.',
          zhCN:'1.3.1. Layout & Component (Loader & Unloader Multi Picker)\n\n主要构成:Z-axis Motor、Picker(含Cylinder & Auto Switch Sensor)、Vacuum Generator、Coupler、PCB Board、Speed Controller、Solenoid Valve、Air Filter、Photo/Magnetic Sensor。',
          zhTW:'1.3.1. Layout & Component (Loader & Unloader Multi Picker)\n\n主要構成:Z-axis Motor、Picker(含Cylinder & Auto Switch Sensor)、Vacuum Generator、Coupler、PCB Board、Speed Controller、Solenoid Valve、Air Filter、Photo/Magnetic Sensor。',
          ja:'1.3.1. Layout & Component (Loader & Unloader Multi Picker)\n\n主要構成:Z-axis Motor、Picker(Cylinder & Auto Switch Sensor含む)、Vacuum Generator、Coupler、PCB Board、Speed Controller、Solenoid Valve、Air Filter、Photo/Magnetic Sensor。',
          vi:'1.3.1. Layout & Component (Loader & Unloader Multi Picker)\n\nThành phần chính: Z-axis Motor, Picker (kèm Cylinder & Auto Switch Sensor), Vacuum Generator, Coupler, PCB Board, Speed Controller, Solenoid Valve, Air Filter, Photo/Magnetic Sensor.'
        }},
        {img:cmImg('A','smtv',38),tx:{
          en:'1.3.1. Layout & Component (Jig Multi Picker)\n\nKey components: Z-axis Motor, Picker, Vacuum Generator, Coupler, PCB Board, Speed Controller, Air Filter, Photo Sensor, Up/Down Limit Sensor, Sensor Object.',
          ko:'1.3.1. Layout & Component (Jig Multi Picker)\n\n주요 구성: Z-axis Motor, Picker, Vacuum Generator, Coupler, PCB Board, Speed Controller, Air Filter, Photo Sensor, Up/Down Limit Sensor, Sensor Object.',
          zhCN:'1.3.1. Layout & Component (Jig Multi Picker)\n\n主要构成:Z-axis Motor、Picker、Vacuum Generator、Coupler、PCB Board、Speed Controller、Air Filter、Photo Sensor、Up/Down Limit Sensor、Sensor Object。',
          zhTW:'1.3.1. Layout & Component (Jig Multi Picker)\n\n主要構成:Z-axis Motor、Picker、Vacuum Generator、Coupler、PCB Board、Speed Controller、Air Filter、Photo Sensor、Up/Down Limit Sensor、Sensor Object。',
          ja:'1.3.1. Layout & Component (Jig Multi Picker)\n\n主要構成:Z-axis Motor、Picker、Vacuum Generator、Coupler、PCB Board、Speed Controller、Air Filter、Photo Sensor、Up/Down Limit Sensor、Sensor Object。',
          vi:'1.3.1. Layout & Component (Jig Multi Picker)\n\nThành phần chính: Z-axis Motor, Picker, Vacuum Generator, Coupler, PCB Board, Speed Controller, Air Filter, Photo Sensor, Up/Down Limit Sensor, Sensor Object.'
        }},
        {img:cmImg('A','smtv',39),tx:{
          en:'1.3.1. Layout & Component (Jig Module)\n\nKey components: LTS Target (Long Term Stability), Y-axis Motor, Cableveyor, (+)/(−) Limit Sensor, Home Sensor, Photo Sensor.',
          ko:'1.3.1. Layout & Component (Jig Module)\n\n주요 구성: LTS Target(Long Term Stability), Y-axis Motor, Cableveyor, (+)/(−) Limit Sensor, Home Sensor, Photo Sensor.',
          zhCN:'1.3.1. Layout & Component (Jig Module)\n\n主要构成:LTS Target(Long Term Stability)、Y-axis Motor、Cableveyor、(+)/(−) Limit Sensor、Home Sensor、Photo Sensor。',
          zhTW:'1.3.1. Layout & Component (Jig Module)\n\n主要構成:LTS Target(Long Term Stability)、Y-axis Motor、Cableveyor、(+)/(−) Limit Sensor、Home Sensor、Photo Sensor。',
          ja:'1.3.1. Layout & Component (Jig Module)\n\n主要構成:LTS Target(Long Term Stability)、Y-axis Motor、Cableveyor、(+)/(−) Limit Sensor、Home Sensor、Photo Sensor。',
          vi:'1.3.1. Layout & Component (Jig Module)\n\nThành phần chính: LTS Target (Long Term Stability), Y-axis Motor, Cableveyor, (+)/(−) Limit Sensor, Home Sensor, Photo Sensor.'
        }},
        {img:cmImg('A','smtv',40),tx:{
          en:'1.3.1. Layout & Component (Indexer)\n\nKey components: Forward/Backward Finger Clamp, Push Cylinder, Speed Controller, Cableveyor, Finger Clamp Sensor, Auto Switch/Photo/Magnetic Sensor.',
          ko:'1.3.1. Layout & Component (Indexer)\n\n주요 구성: Forward/Backward Finger Clamp, Push Cylinder, Speed Controller, Cableveyor, Finger Clamp Sensor, Auto Switch/Photo/Magnetic Sensor.',
          zhCN:'1.3.1. Layout & Component (Indexer)\n\n主要构成:Forward/Backward Finger Clamp、Push Cylinder、Speed Controller、Cableveyor、Finger Clamp Sensor、Auto Switch/Photo/Magnetic Sensor。',
          zhTW:'1.3.1. Layout & Component (Indexer)\n\n主要構成:Forward/Backward Finger Clamp、Push Cylinder、Speed Controller、Cableveyor、Finger Clamp Sensor、Auto Switch/Photo/Magnetic Sensor。',
          ja:'1.3.1. Layout & Component (Indexer)\n\n主要構成:Forward/Backward Finger Clamp、Push Cylinder、Speed Controller、Cableveyor、Finger Clamp Sensor、Auto Switch/Photo/Magnetic Sensor。',
          vi:'1.3.1. Layout & Component (Indexer)\n\nThành phần chính: Forward/Backward Finger Clamp, Push Cylinder, Speed Controller, Cableveyor, Finger Clamp Sensor, Auto Switch/Photo/Magnetic Sensor.'
        }},
        {img:cmImg('A','smtv',41),tx:{
          en:'1.3.1. Layout & Component (Elevator)\n\nKey components (Motor-type and Cylinder-type variants shown): Z-axis Motor, Plate, Belt, Pulley, Ball Bearing, Ball Screw, (+)/(−) Limit Sensor, Speed Controller, Auto Switch/Magnetic/Photo Sensor.',
          ko:'1.3.1. Layout & Component (Elevator)\n\n주요 구성(Motor 방식·Cylinder 방식 모두 표시): Z-axis Motor, Plate, Belt, Pulley, Ball Bearing, Ball Screw, (+)/(−) Limit Sensor, Speed Controller, Auto Switch/Magnetic/Photo Sensor.',
          zhCN:'1.3.1. Layout & Component (Elevator)\n\n主要构成(同时展示Motor型·Cylinder型):Z-axis Motor、Plate、Belt、Pulley、Ball Bearing、Ball Screw、(+)/(−) Limit Sensor、Speed Controller、Auto Switch/Magnetic/Photo Sensor。',
          zhTW:'1.3.1. Layout & Component (Elevator)\n\n主要構成(同時展示Motor型·Cylinder型):Z-axis Motor、Plate、Belt、Pulley、Ball Bearing、Ball Screw、(+)/(−) Limit Sensor、Speed Controller、Auto Switch/Magnetic/Photo Sensor。',
          ja:'1.3.1. Layout & Component (Elevator)\n\n主要構成(Motorタイプ・Cylinderタイプ両方表示):Z-axis Motor、Plate、Belt、Pulley、Ball Bearing、Ball Screw、(+)/(−) Limit Sensor、Speed Controller、Auto Switch/Magnetic/Photo Sensor。',
          vi:'1.3.1. Layout & Component (Elevator)\n\nThành phần chính (hiển thị cả loại Motor và loại Cylinder): Z-axis Motor, Plate, Belt, Pulley, Ball Bearing, Ball Screw, (+)/(−) Limit Sensor, Speed Controller, Auto Switch/Magnetic/Photo Sensor.'
        }},
        {img:cmImg('A','smtv',42),tx:{
          en:'1.3.1. Layout & Component (Stacker)\n\nKey components: Stacker, Load Stacker Speed Controller, Empty Stacker Speed Controller, Tray Check Sensor, Photo/Magnetic Sensor, Stacker Clamp Sensor.',
          ko:'1.3.1. Layout & Component (Stacker)\n\n주요 구성: Stacker, Load Stacker Speed Controller, Empty Stacker Speed Controller, Tray Check Sensor, Photo/Magnetic Sensor, Stacker Clamp Sensor.',
          zhCN:'1.3.1. Layout & Component (Stacker)\n\n主要构成:Stacker、Load Stacker Speed Controller、Empty Stacker Speed Controller、Tray Check Sensor、Photo/Magnetic Sensor、Stacker Clamp Sensor。',
          zhTW:'1.3.1. Layout & Component (Stacker)\n\n主要構成:Stacker、Load Stacker Speed Controller、Empty Stacker Speed Controller、Tray Check Sensor、Photo/Magnetic Sensor、Stacker Clamp Sensor。',
          ja:'1.3.1. Layout & Component (Stacker)\n\n主要構成:Stacker、Load Stacker Speed Controller、Empty Stacker Speed Controller、Tray Check Sensor、Photo/Magnetic Sensor、Stacker Clamp Sensor。',
          vi:'1.3.1. Layout & Component (Stacker)\n\nThành phần chính: Stacker, Load Stacker Speed Controller, Empty Stacker Speed Controller, Tray Check Sensor, Photo/Magnetic Sensor, Stacker Clamp Sensor.'
        }},
        {img:cmImg('A','smtv',43),tx:{
          en:'1.3.1. Layout & Component (PC KVM — Monitor)\n\nWiring diagram for the shared PC KVM switch (8-port), connecting the Monitor across Host/2D/3D PCs. Refer to the image for exact cable routing.',
          ko:'1.3.1. Layout & Component (PC KVM — Monitor)\n\nHost/2D/3D PC 간 Monitor를 공유하는 PC KVM Switch(8포트) 배선도입니다. 정확한 배선 경로는 그림을 참고하세요.',
          zhCN:'1.3.1. Layout & Component (PC KVM — Monitor)\n\n用于Host/2D/3D PC共享Monitor的PC KVM Switch(8端口)接线图。具体走线请参考图示。',
          zhTW:'1.3.1. Layout & Component (PC KVM — Monitor)\n\n用於Host/2D/3D PC共享Monitor的PC KVM Switch(8埠)接線圖。具體走線請參考圖示。',
          ja:'1.3.1. Layout & Component (PC KVM — Monitor)\n\nHost/2D/3D PC間でMonitorを共有するPC KVM Switch(8ポート)の配線図です。正確な配線経路は図を参照してください。',
          vi:'1.3.1. Layout & Component (PC KVM — Monitor)\n\nSơ đồ đấu dây PC KVM Switch (8 cổng) chia sẻ Monitor giữa Host/2D/3D PC. Tham khảo hình để biết đường dây chính xác.'
        }},
        {img:cmImg('A','smtv',44),tx:{
          en:'1.3.1. Layout & Component (PC KVM — Keyboard, Mouse Connection Diagram)\n\nWiring diagram for sharing the Keyboard and Mouse across Host/2D/3D PCs via the KVM switch. Refer to the image for exact cable routing.',
          ko:'1.3.1. Layout & Component (PC KVM — Keyboard, Mouse Connection Diagram)\n\nKVM Switch를 통해 Host/2D/3D PC 간 Keyboard·Mouse를 공유하는 배선도입니다. 정확한 배선 경로는 그림을 참고하세요.',
          zhCN:'1.3.1. Layout & Component (PC KVM — Keyboard, Mouse Connection Diagram)\n\n透过KVM Switch在Host/2D/3D PC间共享Keyboard·Mouse的接线图。具体走线请参考图示。',
          zhTW:'1.3.1. Layout & Component (PC KVM — Keyboard, Mouse Connection Diagram)\n\n透過KVM Switch在Host/2D/3D PC間共享Keyboard·Mouse的接線圖。具體走線請參考圖示。',
          ja:'1.3.1. Layout & Component (PC KVM — Keyboard, Mouse Connection Diagram)\n\nKVM Switchを介してHost/2D/3D PC間でKeyboard・Mouseを共有する配線図です。正確な配線経路は図を参照してください。',
          vi:'1.3.1. Layout & Component (PC KVM — Keyboard, Mouse Connection Diagram)\n\nSơ đồ đấu dây chia sẻ Keyboard·Mouse giữa Host/2D/3D PC qua KVM Switch. Tham khảo hình để biết đường dây chính xác.'
        }},
        {img:cmImg('A','smtv',45),tx:{
          en:'1.3.1. Layout & Component (HUB)\n\nNetwork wiring diagram via the Netgear XS508M multi-switch hub (10G), connecting Host/3D#1/3D#2/2D PCs and the AF Controllers. Refer to the image for exact cable routing.',
          ko:'1.3.1. Layout & Component (HUB)\n\nNetgear XS508M Multi-Switch Hub(10G)를 통한 Host/3D#1/3D#2/2D PC 및 AF Controller 네트워크 배선도입니다. 정확한 배선 경로는 그림을 참고하세요.',
          zhCN:'1.3.1. Layout & Component (HUB)\n\n透过Netgear XS508M Multi-Switch Hub(10G)连接Host/3D#1/3D#2/2D PC及AF Controller的网络接线图。具体走线请参考图示。',
          zhTW:'1.3.1. Layout & Component (HUB)\n\n透過Netgear XS508M Multi-Switch Hub(10G)連接Host/3D#1/3D#2/2D PC及AF Controller的網路接線圖。具體走線請參考圖示。',
          ja:'1.3.1. Layout & Component (HUB)\n\nNetgear XS508M Multi-Switch Hub(10G)を介したHost/3D#1/3D#2/2D PC及びAF Controllerのネットワーク配線図です。正確な配線経路は図を参照してください。',
          vi:'1.3.1. Layout & Component (HUB)\n\nSơ đồ đấu dây mạng qua Netgear XS508M Multi-Switch Hub (10G), kết nối Host/3D#1/3D#2/2D PC và AF Controller. Tham khảo hình để biết đường dây chính xác.'
        }},
        {img:cmImg('A','smtv',46),tx:{
          en:'1.3.1. Layout & Component (PI PZT Controller, PZT E-754)\n\nWiring diagram: PZT Stage ↔ 3D LED Controller #1/#2 ↔ 3D Vision PC #1/#2, via the SYNC Board and 3D TRG Cables. Refer to the image for exact cable routing.',
          ko:'1.3.1. Layout & Component (PI PZT Controller, PZT E-754)\n\nPZT Stage ↔ 3D LED Controller #1/#2 ↔ 3D Vision PC #1/#2 배선도입니다(SYNC Board, 3D TRG Cable 경유). 정확한 배선 경로는 그림을 참고하세요.',
          zhCN:'1.3.1. Layout & Component (PI PZT Controller, PZT E-754)\n\nPZT Stage ↔ 3D LED Controller #1/#2 ↔ 3D Vision PC #1/#2的接线图(经由SYNC Board、3D TRG Cable)。具体走线请参考图示。',
          zhTW:'1.3.1. Layout & Component (PI PZT Controller, PZT E-754)\n\nPZT Stage ↔ 3D LED Controller #1/#2 ↔ 3D Vision PC #1/#2的接線圖(經由SYNC Board、3D TRG Cable)。具體走線請參考圖示。',
          ja:'1.3.1. Layout & Component (PI PZT Controller, PZT E-754)\n\nPZT Stage ↔ 3D LED Controller #1/#2 ↔ 3D Vision PC #1/#2の配線図です(SYNC Board、3D TRG Cable経由)。正確な配線経路は図を参照してください。',
          vi:'1.3.1. Layout & Component (PI PZT Controller, PZT E-754)\n\nSơ đồ đấu dây PZT Stage ↔ 3D LED Controller #1/#2 ↔ 3D Vision PC #1/#2 (qua SYNC Board, 3D TRG Cable). Tham khảo hình để biết đường dây chính xác.'
        }},
        {img:cmImg('A','smtv',47),tx:{
          en:'1.3.1. Layout & Component (nanoFaktur PZT Controller, EBD-120210)\n\nWiring diagram: PZT Stage ↔ 3D LED Controller #1/#2 ↔ 3D Vision PC #1/#2, via the SYNC Board and 3D TRG Cables. Refer to the image for exact cable routing.',
          ko:'1.3.1. Layout & Component (nanoFaktur PZT Controller, EBD-120210)\n\nPZT Stage ↔ 3D LED Controller #1/#2 ↔ 3D Vision PC #1/#2 배선도입니다(SYNC Board, 3D TRG Cable 경유). 정확한 배선 경로는 그림을 참고하세요.',
          zhCN:'1.3.1. Layout & Component (nanoFaktur PZT Controller, EBD-120210)\n\nPZT Stage ↔ 3D LED Controller #1/#2 ↔ 3D Vision PC #1/#2的接线图(经由SYNC Board、3D TRG Cable)。具体走线请参考图示。',
          zhTW:'1.3.1. Layout & Component (nanoFaktur PZT Controller, EBD-120210)\n\nPZT Stage ↔ 3D LED Controller #1/#2 ↔ 3D Vision PC #1/#2的接線圖(經由SYNC Board、3D TRG Cable)。具體走線請參考圖示。',
          ja:'1.3.1. Layout & Component (nanoFaktur PZT Controller, EBD-120210)\n\nPZT Stage ↔ 3D LED Controller #1/#2 ↔ 3D Vision PC #1/#2の配線図です(SYNC Board、3D TRG Cable経由)。正確な配線経路は図を参照してください。',
          vi:'1.3.1. Layout & Component (nanoFaktur PZT Controller, EBD-120210)\n\nSơ đồ đấu dây PZT Stage ↔ 3D LED Controller #1/#2 ↔ 3D Vision PC #1/#2 (qua SYNC Board, 3D TRG Cable). Tham khảo hình để biết đường dây chính xác.'
        }},
        {img:cmImg('A','smtv',48),tx:{
          en:'1.3.1. Layout & Component (Host PC) — AF/Power Meter Serial Wiring\n\nWiring diagram for the Host PC\'s serial/LAN connections to AF Controller #1/#2 (RS232, COM3/COM4) and the Power Meter. Refer to the image for exact cable routing.',
          ko:'1.3.1. Layout & Component (Host PC) — AF·Power Meter 직렬 배선\n\nHost PC와 AF Controller #1/#2(RS232, COM3/COM4) 및 Power Meter 간 직렬·LAN 연결 배선도입니다. 정확한 배선 경로는 그림을 참고하세요.',
          zhCN:'1.3.1. Layout & Component (Host PC) — AF·Power Meter串行接线\n\nHost PC与AF Controller #1/#2(RS232、COM3/COM4)及Power Meter之间的串行·LAN连接接线图。具体走线请参考图示。',
          zhTW:'1.3.1. Layout & Component (Host PC) — AF·Power Meter序列接線\n\nHost PC與AF Controller #1/#2(RS232、COM3/COM4)及Power Meter之間的序列·LAN連接接線圖。具體走線請參考圖示。',
          ja:'1.3.1. Layout & Component (Host PC) — AF・Power Meterシリアル配線\n\nHost PCとAF Controller #1/#2(RS232、COM3/COM4)及びPower Meter間のシリアル・LAN接続配線図です。正確な配線経路は図を参照してください。',
          vi:'1.3.1. Layout & Component (Host PC) — Đấu dây nối tiếp AF·Power Meter\n\nSơ đồ đấu dây nối tiếp·LAN giữa Host PC với AF Controller #1/#2 (RS232, COM3/COM4) và Power Meter. Tham khảo hình để biết đường dây chính xác.'
        }},
        {img:cmImg('A','smtv',49),tx:{
          en:'1.3.1. Layout & Component (Host PC) — Motor/IO Module Wiring\n\nWiring diagram for the Host PC\'s connections to the Motor Driver and IO Modules (via PCIe-R3205 cards), plus KVM switch. Refer to the image for exact cable routing.',
          ko:'1.3.1. Layout & Component (Host PC) — Motor/IO Module 배선\n\nHost PC와 Motor Driver·IO Module(PCIe-R3205 카드 경유) 및 KVM Switch 간 배선도입니다. 정확한 배선 경로는 그림을 참고하세요.',
          zhCN:'1.3.1. Layout & Component (Host PC) — Motor/IO Module接线\n\nHost PC与Motor Driver·IO Module(经由PCIe-R3205卡)及KVM Switch之间的接线图。具体走线请参考图示。',
          zhTW:'1.3.1. Layout & Component (Host PC) — Motor/IO Module接線\n\nHost PC與Motor Driver·IO Module(經由PCIe-R3205卡)及KVM Switch之間的接線圖。具體走線請參考圖示。',
          ja:'1.3.1. Layout & Component (Host PC) — Motor/IO Module配線\n\nHost PCとMotor Driver・IO Module(PCIe-R3205カード経由)及びKVM Switch間の配線図です。正確な配線経路は図を参照してください。',
          vi:'1.3.1. Layout & Component (Host PC) — Đấu dây Motor/IO Module\n\nSơ đồ đấu dây giữa Host PC với Motor Driver·IO Module (qua card PCIe-R3205) và KVM Switch. Tham khảo hình để biết đường dây chính xác.'
        }},
        {img:cmImg('A','smtv',50),tx:{
          en:'1.3.1. Layout & Component (2D Vision PC)\n\nWiring diagram for the 2D Vision PC: Vision Camera ↔ Grab Board, LED Controller ↔ Sync Board, KVM Switch. Refer to the image for exact cable routing.',
          ko:'1.3.1. Layout & Component (2D Vision PC)\n\n2D Vision PC 배선도입니다: Vision Camera ↔ Grab Board, LED Controller ↔ Sync Board, KVM Switch. 정확한 배선 경로는 그림을 참고하세요.',
          zhCN:'1.3.1. Layout & Component (2D Vision PC)\n\n2D Vision PC接线图:Vision Camera ↔ Grab Board、LED Controller ↔ Sync Board、KVM Switch。具体走线请参考图示。',
          zhTW:'1.3.1. Layout & Component (2D Vision PC)\n\n2D Vision PC接線圖:Vision Camera ↔ Grab Board、LED Controller ↔ Sync Board、KVM Switch。具體走線請參考圖示。',
          ja:'1.3.1. Layout & Component (2D Vision PC)\n\n2D Vision PC配線図です:Vision Camera ↔ Grab Board、LED Controller ↔ Sync Board、KVM Switch。正確な配線経路は図を参照してください。',
          vi:'1.3.1. Layout & Component (2D Vision PC)\n\nSơ đồ đấu dây 2D Vision PC: Vision Camera ↔ Grab Board, LED Controller ↔ Sync Board, KVM Switch. Tham khảo hình để biết đường dây chính xác.'
        }},
        {img:cmImg('A','smtv',51),tx:{
          en:'1.3.1. Layout & Component (3D Vision PC)\n\nWiring diagram for the 3D Vision PC: Vision Camera ↔ Grab Board, LED Controller/PZT Controller ↔ Sync Board, KVM Switch. Optical-system cables may vary by specification — refer to the image for exact routing.',
          ko:'1.3.1. Layout & Component (3D Vision PC)\n\n3D Vision PC 배선도입니다: Vision Camera ↔ Grab Board, LED Controller/PZT Controller ↔ Sync Board, KVM Switch. 광학계 Cable은 Spec에 따라 다를 수 있으니 정확한 배선 경로는 그림을 참고하세요.',
          zhCN:'1.3.1. Layout & Component (3D Vision PC)\n\n3D Vision PC接线图:Vision Camera ↔ Grab Board、LED Controller/PZT Controller ↔ Sync Board、KVM Switch。光学系统Cable可能依Spec而异,具体走线请参考图示。',
          zhTW:'1.3.1. Layout & Component (3D Vision PC)\n\n3D Vision PC接線圖:Vision Camera ↔ Grab Board、LED Controller/PZT Controller ↔ Sync Board、KVM Switch。光學系統Cable可能依Spec而異,具體走線請參考圖示。',
          ja:'1.3.1. Layout & Component (3D Vision PC)\n\n3D Vision PC配線図です:Vision Camera ↔ Grab Board、LED Controller/PZT Controller ↔ Sync Board、KVM Switch。光学系Cableは仕様により異なる場合があるため、正確な配線経路は図を参照してください。',
          vi:'1.3.1. Layout & Component (3D Vision PC)\n\nSơ đồ đấu dây 3D Vision PC: Vision Camera ↔ Grab Board, LED Controller/PZT Controller ↔ Sync Board, KVM Switch. Cáp hệ quang học có thể khác nhau tùy Spec — tham khảo hình để biết đường dây chính xác.'
        }},
        {img:cmImg('A','smtv',52),tx:{
          en:'Introduce — this section covers Hardware Configuration & System: Layout & Component, Interlock System, and Equipment Automatic Sequence.',
          ko:'Introduce — Hardware Configuration & System: Layout & Component, Interlock System, Equipment Automatic Sequence를 다룹니다.',
          zhCN:'Introduce——本节介绍Hardware Configuration & System:Layout & Component、Interlock System、Equipment Automatic Sequence。',
          zhTW:'Introduce——本節介紹Hardware Configuration & System:Layout & Component、Interlock System、Equipment Automatic Sequence。',
          ja:'Introduce——本節ではHardware Configuration & System:Layout & Component、Interlock System、Equipment Automatic Sequenceを扱います。',
          vi:'Introduce — phần này đề cập đến Hardware Configuration & System: Layout & Component, Interlock System, Equipment Automatic Sequence.'
        }},
        {img:cmImg('A','smtv',53),tx:{
          en:'1.3.2. Interlock System\n\nAuto Mode: motor power is supplied only when all upper doors are closed and locked. On an alarm during automatic operation: (1) click Reset, (2) release the Door Interlock, (3) open the door and resolve the alarm, (4) close the door and switch the interlock to Lock, (5) click Start to resume. Teach Mode: motor power can be supplied even with the upper door open/unlocked. Auto/Teach mode can be switched via the Handler program\'s I/O.',
          ko:'1.3.2. Interlock System\n\nAuto Mode: 모든 상부 도어가 닫히고 잠겼을 때만 Motor 전원이 공급됩니다. 자동 운전 중 알람 발생 시: (1) Reset 클릭, (2) Door Interlock 해제, (3) 도어를 열고 알람 지점 해결, (4) 도어를 닫고 Interlock을 Lock으로 전환, (5) Start를 눌러 재개. Teach Mode: 상부 도어가 열려 있거나 잠겨 있지 않아도 Motor 전원이 공급됩니다. Auto/Teach 모드는 Handler Program의 I/O로 전환할 수 있습니다.',
          zhCN:'1.3.2. Interlock System\n\nAuto Mode:仅当所有上部门都关闭并锁定时才供应Motor电源。自动运行中发生报警时:(1)点击Reset,(2)解除Door Interlock,(3)打开门解决报警点,(4)关门并将Interlock切换为Lock,(5)点击Start恢复运行。Teach Mode:即使上部门打开或未锁定,也可供应Motor电源。Auto/Teach模式可通过Handler Program的I/O切换。',
          zhTW:'1.3.2. Interlock System\n\nAuto Mode:僅當所有上部門都關閉並鎖定時才供應Motor電源。自動運行中發生警報時:(1)點擊Reset,(2)解除Door Interlock,(3)開門解決警報點,(4)關門並將Interlock切換為Lock,(5)點擊Start恢復運行。Teach Mode:即使上部門開啟或未鎖定,也可供應Motor電源。Auto/Teach模式可透過Handler Program的I/O切換。',
          ja:'1.3.2. Interlock System\n\nAuto Mode:上部ドアがすべて閉じてロックされた時のみMotor電源が供給されます。自動運転中にアラームが発生した場合:(1)Resetをクリック、(2)Door Interlockを解除、(3)ドアを開けてアラーム箇所を解決、(4)ドアを閉めてInterlockをLockに切替、(5)Startを押して再開。Teach Mode:上部ドアが開いている・ロックされていなくてもMotor電源を供給できます。Auto/TeachモードはHandler ProgramのI/Oで切り替え可能です。',
          vi:'1.3.2. Interlock System\n\nAuto Mode: chỉ cấp nguồn Motor khi mọi cửa trên đã đóng và khóa. Khi có cảnh báo trong lúc vận hành tự động: (1) nhấn Reset, (2) mở khóa Door Interlock, (3) mở cửa và xử lý điểm cảnh báo, (4) đóng cửa và chuyển Interlock sang Lock, (5) nhấn Start để tiếp tục. Teach Mode: vẫn cấp nguồn Motor được dù cửa trên mở/chưa khóa. Chế độ Auto/Teach có thể chuyển qua I/O của Handler Program.'
        }},
        {img:cmImg('A','smtv',54),tx:{
          en:'1.3.2. Interlock System — EMS Buttons\n\nTo supply motor power, all 6 EMS (Emergency Stop Switch) buttons on the equipment must remain in the released (pulled-out) state — pushing even one cuts motor power. EMS buttons are the emergency motor-power cutoff.',
          ko:'1.3.2. Interlock System — EMS Buttons\n\nMotor 전원을 공급하려면 설비의 EMS(Emergency Stop Switch) 버튼 6개가 모두 풀린(당겨진) 상태여야 합니다 — 하나라도 눌리면 Motor 전원이 차단됩니다. EMS 버튼은 비상 시 Motor 전원을 차단하는 용도입니다.',
          zhCN:'1.3.2. Interlock System — EMS Buttons\n\n要供应Motor电源,设备上6个EMS(Emergency Stop Switch)按钮都必须处于释放(拉出)状态——只要有一个被按下,Motor电源就会被切断。EMS按钮用于紧急情况下切断Motor电源。',
          zhTW:'1.3.2. Interlock System — EMS Buttons\n\n要供應Motor電源,設備上6個EMS(Emergency Stop Switch)按鈕都必須處於釋放(拉出)狀態——只要有一個被按下,Motor電源就會被切斷。EMS按鈕用於緊急情況下切斷Motor電源。',
          ja:'1.3.2. Interlock System — EMS Buttons\n\nMotor電源を供給するには、設備の6個のEMS(Emergency Stop Switch)ボタンがすべて解放(引き出された)状態である必要があります——1つでも押されるとMotor電源が遮断されます。EMSボタンは緊急時にMotor電源を遮断するためのものです。',
          vi:'1.3.2. Interlock System — EMS Buttons\n\nĐể cấp nguồn Motor, cả 6 nút EMS (Emergency Stop Switch) trên thiết bị phải ở trạng thái nhả (kéo ra) — chỉ cần một nút bị nhấn, nguồn Motor sẽ bị cắt. Nút EMS dùng để cắt khẩn cấp nguồn Motor.'
        }},
        {img:cmImg('A','smtv',55),tx:{
          en:'1.3.2. Interlock System — Door Interlock\n\nThe Door Interlock system is installed on the upper door to prevent the operator from opening it while the equipment is running. Only engineers authorized by Intekplus may release the interlock for maintenance.',
          ko:'1.3.2. Interlock System — Door Interlock\n\nDoor Interlock 시스템은 상부 도어에 설치되어, 설비 운전 중 작업자가 도어를 여는 것을 방지합니다. 정비를 위한 Interlock 해제는 Intekplus가 허가한 엔지니어만 가능합니다.',
          zhCN:'1.3.2. Interlock System — Door Interlock\n\nDoor Interlock系统安装于上部门,用于防止设备运行中操作人员打开门。仅限Intekplus授权的工程师才能为维护解除Interlock。',
          zhTW:'1.3.2. Interlock System — Door Interlock\n\nDoor Interlock系統安裝於上部門,用於防止設備運行中操作人員打開門。僅限Intekplus授權的工程師才能為維護解除Interlock。',
          ja:'1.3.2. Interlock System — Door Interlock\n\nDoor Interlockシステムは上部ドアに設置され、設備運転中に作業者がドアを開けるのを防止します。メンテナンスのためのInterlock解除はIntekplusが許可したエンジニアのみ可能です。',
          vi:'1.3.2. Interlock System — Door Interlock\n\nHệ thống Door Interlock được lắp trên cửa trên, ngăn người vận hành mở cửa khi thiết bị đang chạy. Chỉ kỹ sư được Intekplus cho phép mới được mở khóa Interlock để bảo trì.'
        }},
        {img:cmImg('A','smtv',56),tx:{
          en:'1.3.2. Interlock System — Lower-Door Fan\n\nTo power the cooling fan installed in the lower door, all lower doors must be closed. The fan\'s power is supplied automatically (via a magnetic proximity sensor) and cannot be turned on manually.',
          ko:'1.3.2. Interlock System — 하부 도어 Fan\n\n하부 도어에 설치된 냉각 Fan에 전원을 공급하려면 모든 하부 도어가 닫혀 있어야 합니다. Fan 전원은 자동으로 공급되며(Magnetic Proximity Sensor 이용) 수동으로 켤 수 없습니다.',
          zhCN:'1.3.2. Interlock System — 下部門風扇\n\n要为下部門安装的散热风扇供电,所有下部門都必须关闭。风扇电源自动供应(利用Magnetic Proximity Sensor),无法手动开启。',
          zhTW:'1.3.2. Interlock System — 下部門風扇\n\n要為下部門安裝的散熱風扇供電,所有下部門都必須關閉。風扇電源自動供應(利用Magnetic Proximity Sensor),無法手動開啟。',
          ja:'1.3.2. Interlock System — 下部ドアFan\n\n下部ドアに設置された冷却Fanに電源を供給するには、すべての下部ドアが閉まっている必要があります。Fan電源は自動供給され(Magnetic Proximity Sensor利用)、手動でオンにはできません。',
          vi:'1.3.2. Interlock System — Quạt cửa dưới\n\nĐể cấp nguồn cho quạt làm mát lắp ở cửa dưới, tất cả cửa dưới phải đóng. Nguồn quạt được cấp tự động (qua Magnetic Proximity Sensor) và không thể bật thủ công.'
        }},
        {img:cmImg('A','smtv',57),tx:{
          en:'Introduce — this section covers Hardware Configuration & System: Layout & Component, Interlock System, and Equipment Automatic Sequence.',
          ko:'Introduce — Hardware Configuration & System: Layout & Component, Interlock System, Equipment Automatic Sequence를 다룹니다.',
          zhCN:'Introduce——本节介绍Hardware Configuration & System:Layout & Component、Interlock System、Equipment Automatic Sequence。',
          zhTW:'Introduce——本節介紹Hardware Configuration & System:Layout & Component、Interlock System、Equipment Automatic Sequence。',
          ja:'Introduce——本節ではHardware Configuration & System:Layout & Component、Interlock System、Equipment Automatic Sequenceを扱います。',
          vi:'Introduce — phần này đề cập đến Hardware Configuration & System: Layout & Component, Interlock System, Equipment Automatic Sequence.'
        }},
        {img:cmImg('A','smtv',58),tx:{
          en:'1.3.3. Equipment Automatic Sequence — Overview (Top View)\n\nThe full cycle: 1. Load tray (a. load empty tray once at run start, b. load reject-empty tray, c. transfer empty tray) → 2. Pick up unit & move to aligner → 3. Align unit → 4. Place unit on the Jig (Pedestal) → 5. 3D inspection → 6. Transfer unit onto tray → 7. Transfer tray to Good/Buffer rail → 8. 2D inspection (Good/Buffer rail) → 9. Unit sorting → 10. Unload tray.',
          ko:'1.3.3. Equipment Automatic Sequence — 전체 개요 (Top View)\n\n전체 사이클: 1. Tray Load(a. 가동 시작 시 1회 Empty Tray Load, b. Reject Empty Tray Load, c. Empty Tray 이송) → 2. Unit Pick-up 후 Aligner로 이동 → 3. Unit Align → 4. Jig(Pedestal)에 Unit 안착 → 5. 3D Inspection → 6. Unit을 Tray로 이송 → 7. Tray를 Good/Buffer Rail로 이송 → 8. 2D Inspection(Good/Buffer Rail) → 9. Unit Sorting → 10. Tray Unload.',
          zhCN:'1.3.3. Equipment Automatic Sequence — 整体概览(Top View)\n\n完整循环:1. Tray Load(a. 启动时1次Empty Tray Load,b. Reject Empty Tray Load,c. Empty Tray传送) → 2. Pick-up Unit后移至Aligner → 3. Unit Align → 4. 将Unit放置于Jig(Pedestal) → 5. 3D Inspection → 6. 将Unit传送至Tray → 7. 将Tray传送至Good/Buffer Rail → 8. 2D Inspection(Good/Buffer Rail) → 9. Unit Sorting → 10. Tray Unload。',
          zhTW:'1.3.3. Equipment Automatic Sequence — 整體概覽(Top View)\n\n完整循環:1. Tray Load(a. 啟動時1次Empty Tray Load,b. Reject Empty Tray Load,c. Empty Tray傳送) → 2. Pick-up Unit後移至Aligner → 3. Unit Align → 4. 將Unit放置於Jig(Pedestal) → 5. 3D Inspection → 6. 將Unit傳送至Tray → 7. 將Tray傳送至Good/Buffer Rail → 8. 2D Inspection(Good/Buffer Rail) → 9. Unit Sorting → 10. Tray Unload。',
          ja:'1.3.3. Equipment Automatic Sequence — 全体概要(Top View)\n\n全サイクル:1. Tray Load(a. 起動時に1回Empty Tray Load、b. Reject Empty Tray Load、c. Empty Tray移送) → 2. UnitをPick-upしAlignerへ移動 → 3. Unit Align → 4. Jig(Pedestal)にUnit配置 → 5. 3D Inspection → 6. UnitをTrayへ移送 → 7. TrayをGood/Buffer Railへ移送 → 8. 2D Inspection(Good/Buffer Rail) → 9. Unit Sorting → 10. Tray Unload。',
          vi:'1.3.3. Equipment Automatic Sequence — Tổng quan (Top View)\n\nChu trình đầy đủ: 1. Load tray (a. Load Empty Tray 1 lần khi bắt đầu chạy, b. Load Reject Empty Tray, c. chuyển Empty Tray) → 2. Pick-up Unit và chuyển đến Aligner → 3. Align Unit → 4. Đặt Unit lên Jig (Pedestal) → 5. 3D Inspection → 6. Chuyển Unit lên Tray → 7. Chuyển Tray đến Rail Good/Buffer → 8. 2D Inspection (Rail Good/Buffer) → 9. Unit Sorting → 10. Unload Tray.'
        }},
        {img:cmImg('A','smtv',59),tx:{
          en:'1.3.3. Equipment Automatic Sequence — Empty Tray\n\nPrepare the Empty Tray: the Elevator and Stacker separate each tray, the Indexer moves it to the TTM, and the TTM moves the Empty Tray to the Reject Rail.',
          ko:'1.3.3. Equipment Automatic Sequence — Empty Tray\n\nEmpty Tray 준비: Elevator·Stacker로 Tray를 한 장씩 분리하고, Indexer가 TTM으로 이송하며, TTM이 Empty Tray를 Reject Rail로 이동시킵니다.',
          zhCN:'1.3.3. Equipment Automatic Sequence — Empty Tray\n\n准备Empty Tray:用Elevator·Stacker逐张分离Tray,由Indexer移送至TTM,TTM将Empty Tray移至Reject Rail。',
          zhTW:'1.3.3. Equipment Automatic Sequence — Empty Tray\n\n準備Empty Tray:用Elevator·Stacker逐張分離Tray,由Indexer移送至TTM,TTM將Empty Tray移至Reject Rail。',
          ja:'1.3.3. Equipment Automatic Sequence — Empty Tray\n\nEmpty Trayの準備:Elevator・Stackerで1枚ずつTrayを分離し、IndexerがTTMへ移送、TTMがEmpty TrayをReject Railへ移動させます。',
          vi:'1.3.3. Equipment Automatic Sequence — Empty Tray\n\nChuẩn bị Empty Tray: Elevator·Stacker tách từng Tray, Indexer chuyển đến TTM, TTM chuyển Empty Tray đến Reject Rail.'
        }},
        {img:cmImg('A','smtv',60),tx:{
          en:'1.3.3. Equipment Automatic Sequence — Load Tray\n\nPlace the tray with units in the Loader; the Elevator and Stacker separate each tray.',
          ko:'1.3.3. Equipment Automatic Sequence — Load Tray\n\nUnit이 담긴 Tray를 Loader에 투입하고, Elevator·Stacker로 Tray를 한 장씩 분리합니다.',
          zhCN:'1.3.3. Equipment Automatic Sequence — Load Tray\n\n将装有Unit的Tray投入Loader,用Elevator·Stacker逐张分离Tray。',
          zhTW:'1.3.3. Equipment Automatic Sequence — Load Tray\n\n將裝有Unit的Tray投入Loader,用Elevator·Stacker逐張分離Tray。',
          ja:'1.3.3. Equipment Automatic Sequence — Load Tray\n\nUnitの入ったTrayをLoaderに投入し、Elevator・Stackerで1枚ずつ分離します。',
          vi:'1.3.3. Equipment Automatic Sequence — Load Tray\n\nNạp Tray chứa Unit vào Loader, Elevator·Stacker tách từng Tray.'
        }},
        {img:cmImg('A','smtv',61),tx:{
          en:'1.3.3. Equipment Automatic Sequence — Tray Unit Pick & Align Place (Loading)\n\nThe Loader Multi Picker picks up the unit from the loaded tray and places it on the Aligner.',
          ko:'1.3.3. Equipment Automatic Sequence — Tray Unit Pick & Align Place (Loading)\n\nLoader Multi Picker가 투입된 Tray에서 Unit을 Pick하여 Aligner에 Place합니다.',
          zhCN:'1.3.3. Equipment Automatic Sequence — Tray Unit Pick & Align Place (Loading)\n\nLoader Multi Picker从投入的Tray中Pick取Unit,并Place到Aligner上。',
          zhTW:'1.3.3. Equipment Automatic Sequence — Tray Unit Pick & Align Place (Loading)\n\nLoader Multi Picker從投入的Tray中Pick取Unit,並Place到Aligner上。',
          ja:'1.3.3. Equipment Automatic Sequence — Tray Unit Pick & Align Place (Loading)\n\nLoader Multi Pickerが投入されたTrayからUnitをPickし、AlignerへPlaceします。',
          vi:'1.3.3. Equipment Automatic Sequence — Tray Unit Pick & Align Place (Loading)\n\nLoader Multi Picker Pick Unit từ Tray đã nạp và Place lên Aligner.'
        }},
        {img:cmImg('A','smtv',62),tx:{
          en:'1.3.3. Equipment Automatic Sequence — Aligner Pick & Jig Place\n\nAfter alignment, the Jig Multi Picker moves the unit onto the Jig table.',
          ko:'1.3.3. Equipment Automatic Sequence — Aligner Pick & Jig Place\n\nAlign이 끝나면 Jig Multi Picker를 이용해 Jig Table로 이동시킵니다.',
          zhCN:'1.3.3. Equipment Automatic Sequence — Aligner Pick & Jig Place\n\nAlign完成后,利用Jig Multi Picker移动到Jig Table。',
          zhTW:'1.3.3. Equipment Automatic Sequence — Aligner Pick & Jig Place\n\nAlign完成後,利用Jig Multi Picker移動到Jig Table。',
          ja:'1.3.3. Equipment Automatic Sequence — Aligner Pick & Jig Place\n\nAlign完了後、Jig Multi Pickerを使ってJig Tableへ移動させます。',
          vi:'1.3.3. Equipment Automatic Sequence — Aligner Pick & Jig Place\n\nSau khi Align xong, dùng Jig Multi Picker để chuyển đến Jig Table.'
        }},
        {img:cmImg('A','smtv',63),tx:{
          en:'1.3.3. Equipment Automatic Sequence — 3D Inspection\n\nInspects the bump area of the unit; if the bump area is larger than one F.O.V. (Field of View), the inspection area is divided into two or more R.O.I. (Region of Interest) sections.',
          ko:'1.3.3. Equipment Automatic Sequence — 3D Inspection\n\nUnit의 Bump 영역을 검사합니다. Bump 영역이 F.O.V.(Field of View) 1개보다 크면 검사 영역을 2개 이상의 R.O.I.(Region of Interest)로 나눕니다.',
          zhCN:'1.3.3. Equipment Automatic Sequence — 3D Inspection\n\n检测Unit的Bump区域。若Bump区域大于1个F.O.V.(Field of View),则将检测区域划分为2个以上的R.O.I.(Region of Interest)。',
          zhTW:'1.3.3. Equipment Automatic Sequence — 3D Inspection\n\n檢測Unit的Bump區域。若Bump區域大於1個F.O.V.(Field of View),則將檢測區域劃分為2個以上的R.O.I.(Region of Interest)。',
          ja:'1.3.3. Equipment Automatic Sequence — 3D Inspection\n\nUnitのBump領域を検査します。Bump領域がF.O.V.(Field of View)1つより大きい場合、検査領域を2つ以上のR.O.I.(Region of Interest)に分割します。',
          vi:'1.3.3. Equipment Automatic Sequence — 3D Inspection\n\nKiểm tra vùng Bump của Unit. Nếu vùng Bump lớn hơn 1 F.O.V. (Field of View), vùng kiểm tra được chia thành 2 R.O.I. (Region of Interest) trở lên.'
        }},
        {img:cmImg('A','smtv',64),tx:{
          en:'1.3.3. Equipment Automatic Sequence — Jig Pick & Tray Unit Place (Unloading)\n\nTransfers the unit that has completed 3D inspection back onto a tray.',
          ko:'1.3.3. Equipment Automatic Sequence — Jig Pick & Tray Unit Place (Unloading)\n\n3D Inspection이 끝난 Unit을 Tray로 이송하는 동작입니다.',
          zhCN:'1.3.3. Equipment Automatic Sequence — Jig Pick & Tray Unit Place (Unloading)\n\n将完成3D Inspection的Unit传送回Tray的动作。',
          zhTW:'1.3.3. Equipment Automatic Sequence — Jig Pick & Tray Unit Place (Unloading)\n\n將完成3D Inspection的Unit傳送回Tray的動作。',
          ja:'1.3.3. Equipment Automatic Sequence — Jig Pick & Tray Unit Place (Unloading)\n\n3D Inspectionが完了したUnitをTrayへ移送する動作です。',
          vi:'1.3.3. Equipment Automatic Sequence — Jig Pick & Tray Unit Place (Unloading)\n\nThao tác chuyển Unit đã hoàn tất 3D Inspection trở lại Tray.'
        }},
        {img:cmImg('A','smtv',65),tx:{
          en:'1.3.3. Equipment Automatic Sequence — Tray Sorting\n\nMoves the tray to the Buffer or Good rail in the order inspection is completed.',
          ko:'1.3.3. Equipment Automatic Sequence — Tray Sorting\n\n검사 완료 순서대로 Tray를 Buffer·Good Rail로 이동시킵니다.',
          zhCN:'1.3.3. Equipment Automatic Sequence — Tray Sorting\n\n按检测完成顺序将Tray移至Buffer·Good Rail。',
          zhTW:'1.3.3. Equipment Automatic Sequence — Tray Sorting\n\n按檢測完成順序將Tray移至Buffer·Good Rail。',
          ja:'1.3.3. Equipment Automatic Sequence — Tray Sorting\n\n検査完了順にTrayをBuffer・Good Railへ移動させます。',
          vi:'1.3.3. Equipment Automatic Sequence — Tray Sorting\n\nDi chuyển Tray đến Rail Buffer·Good theo thứ tự hoàn tất kiểm tra.'
        }},
        {img:cmImg('A','smtv',66),tx:{
          en:'1.3.3. Equipment Automatic Sequence — Read Barcode of Unit\n\nMoves to the unit under inspection and reads the barcode within the R.O.I. area (supports both OCR Barcode and Matrix Barcode reading).',
          ko:'1.3.3. Equipment Automatic Sequence — Read Barcode of Unit\n\n검사 대상 Unit으로 이동해 R.O.I. 영역의 Barcode를 읽습니다 (OCR Barcode·Matrix Barcode 모두 지원).',
          zhCN:'1.3.3. Equipment Automatic Sequence — Read Barcode of Unit\n\n移动到检测对象Unit并读取R.O.I.区域的Barcode(支持OCR Barcode·Matrix Barcode)。',
          zhTW:'1.3.3. Equipment Automatic Sequence — Read Barcode of Unit\n\n移動到檢測對象Unit並讀取R.O.I.區域的Barcode(支援OCR Barcode·Matrix Barcode)。',
          ja:'1.3.3. Equipment Automatic Sequence — Read Barcode of Unit\n\n検査対象のUnitへ移動し、R.O.I.領域のBarcodeを読み取ります(OCR Barcode・Matrix Barcodeいずれも対応)。',
          vi:'1.3.3. Equipment Automatic Sequence — Read Barcode of Unit\n\nDi chuyển đến Unit cần kiểm tra và đọc Barcode trong vùng R.O.I. (hỗ trợ cả OCR Barcode và Matrix Barcode).'
        }},
        {img:cmImg('A','smtv',67),tx:{
          en:'1.3.3. Equipment Automatic Sequence — 2D Inspection\n\nInspects the bump area of the unit; if the bump area is larger than one F.O.V., the inspection area is divided into two or more R.O.I. sections.',
          ko:'1.3.3. Equipment Automatic Sequence — 2D Inspection\n\nUnit의 Bump 영역을 검사합니다. Bump 영역이 F.O.V. 1개보다 크면 검사 영역을 2개 이상의 R.O.I.로 나눕니다.',
          zhCN:'1.3.3. Equipment Automatic Sequence — 2D Inspection\n\n检测Unit的Bump区域。若Bump区域大于1个F.O.V.,则将检测区域划分为2个以上的R.O.I.。',
          zhTW:'1.3.3. Equipment Automatic Sequence — 2D Inspection\n\n檢測Unit的Bump區域。若Bump區域大於1個F.O.V.,則將檢測區域劃分為2個以上的R.O.I.。',
          ja:'1.3.3. Equipment Automatic Sequence — 2D Inspection\n\nUnitのBump領域を検査します。Bump領域がF.O.V.1つより大きい場合、検査領域を2つ以上のR.O.I.に分割します。',
          vi:'1.3.3. Equipment Automatic Sequence — 2D Inspection\n\nKiểm tra vùng Bump của Unit. Nếu vùng Bump lớn hơn 1 F.O.V., vùng kiểm tra được chia thành 2 R.O.I. trở lên.'
        }},
        {img:cmImg('A','smtv',68),tx:{
          en:'1.3.3. Equipment Automatic Sequence — Unit Sorting\n\nInspected units are classified as Good or Reject.',
          ko:'1.3.3. Equipment Automatic Sequence — Unit Sorting\n\n검사된 Unit을 Good·Reject로 분류합니다.',
          zhCN:'1.3.3. Equipment Automatic Sequence — Unit Sorting\n\n将已检测的Unit分类为Good·Reject。',
          zhTW:'1.3.3. Equipment Automatic Sequence — Unit Sorting\n\n將已檢測的Unit分類為Good·Reject。',
          ja:'1.3.3. Equipment Automatic Sequence — Unit Sorting\n\n検査済みのUnitをGood・Rejectに分類します。',
          vi:'1.3.3. Equipment Automatic Sequence — Unit Sorting\n\nPhân loại Unit đã kiểm tra thành Good·Reject.'
        }},
        {img:cmImg('A','smtv',69),tx:{
          en:'1.3.3. Equipment Automatic Sequence — Unload Tray\n\nUnloads the sorted tray from the equipment.',
          ko:'1.3.3. Equipment Automatic Sequence — Unload Tray\n\nSorting이 끝난 Tray를 설비에서 배출합니다.',
          zhCN:'1.3.3. Equipment Automatic Sequence — Unload Tray\n\n将Sorting完成的Tray从设备排出。',
          zhTW:'1.3.3. Equipment Automatic Sequence — Unload Tray\n\n將Sorting完成的Tray從設備排出。',
          ja:'1.3.3. Equipment Automatic Sequence — Unload Tray\n\nSortingが完了したTrayを設備から排出します。',
          vi:'1.3.3. Equipment Automatic Sequence — Unload Tray\n\nĐẩy Tray đã Sorting ra khỏi thiết bị.'
        }},
        {img:cmImg('A','smtv',70),tx:{
          en:'Operation — this section covers Power On & Off: Electrical Turn-on Sequence, Controller/PC/Camera Power, and Equipment Turn-off Sequence.',
          ko:'Operation — Power on & off: Electrical Turn-on Sequence, Controller/PC/Camera, Equipment Turn-off Sequence를 다룹니다.',
          zhCN:'Operation——本节介绍Power on & off:Electrical Turn-on Sequence、Controller/PC/Camera、Equipment Turn-off Sequence。',
          zhTW:'Operation——本節介紹Power on & off:Electrical Turn-on Sequence、Controller/PC/Camera、Equipment Turn-off Sequence。',
          ja:'Operation——本節ではPower on & off:Electrical Turn-on Sequence、Controller/PC/Camera、Equipment Turn-off Sequenceを扱います。',
          vi:'Operation — phần này đề cập đến Power on & off: Electrical Turn-on Sequence, Controller/PC/Camera, Equipment Turn-off Sequence.'
        }},
        {img:cmImg('A','smtv',71),tx:{
          en:'2.1.1. Electrical Turn-on Sequence\n\nRear-panel sockets: External LAN Port, Air 1–4 (Main equipment air sockets, 12Ф), Main Power Cable Socket.',
          ko:'2.1.1. Electrical Turn-on Sequence\n\n후면 패널 소켓: External LAN Port, Air 1~4(Main 설비 Air 소켓, 12Ф), Main Power Cable Socket.',
          zhCN:'2.1.1. Electrical Turn-on Sequence\n\n后面板插座:External LAN Port、Air 1~4(Main设备Air插座,12Ф)、Main Power Cable Socket。',
          zhTW:'2.1.1. Electrical Turn-on Sequence\n\n後面板插座:External LAN Port、Air 1~4(Main設備Air插座,12Ф)、Main Power Cable Socket。',
          ja:'2.1.1. Electrical Turn-on Sequence\n\n背面パネルソケット:External LAN Port、Air 1~4(Main設備Airソケット、12Ф)、Main Power Cable Socket。',
          vi:'2.1.1. Electrical Turn-on Sequence\n\nCác ổ cắm mặt sau: External LAN Port, Air 1–4 (ổ khí nén chính, 12Ф), Main Power Cable Socket.'
        }},
        {img:cmImg('A','smtv',72),tx:{
          en:'2.1.1. Electrical Turn-on Sequence — Main Air Regulator\n\nAdjust each Air Regulator so pressure is maintained at 4–6bar. The regulator on the main facility\'s utility panel is monitored via an input signal. Air 1: Indexer/Stacker/Elevator/Picker Up-Down/Air Gun/Vacuum Tweezers. Air 2: ISO Jig #1/#2 Pocket Vacuum. Air 3: Multi Sorter/ISO Picker Vacuum. Air 4: ISO Main Air.',
          ko:'2.1.1. Electrical Turn-on Sequence — Main Air Regulator\n\n각 Air Regulator의 압력이 4~6bar로 유지되도록 조정합니다. 본 설비 Utility Panel의 Regulator는 입력 신호로 모니터링됩니다. Air 1: Indexer·Stacker·Elevator·Picker Up-Down·Air Gun·Vacuum Tweezers. Air 2: ISO Jig #1/#2 Pocket Vacuum. Air 3: Multi Sorter·ISO Picker Vacuum. Air 4: ISO Main Air.',
          zhCN:'2.1.1. Electrical Turn-on Sequence — Main Air Regulator\n\n调整各Air Regulator使压力维持在4~6bar。主设备Utility Panel上的Regulator通过输入信号监控。Air 1:Indexer·Stacker·Elevator·Picker Up-Down·Air Gun·Vacuum Tweezers。Air 2:ISO Jig #1/#2 Pocket Vacuum。Air 3:Multi Sorter·ISO Picker Vacuum。Air 4:ISO Main Air。',
          zhTW:'2.1.1. Electrical Turn-on Sequence — Main Air Regulator\n\n調整各Air Regulator使壓力維持在4~6bar。主設備Utility Panel上的Regulator透過輸入訊號監控。Air 1:Indexer·Stacker·Elevator·Picker Up-Down·Air Gun·Vacuum Tweezers。Air 2:ISO Jig #1/#2 Pocket Vacuum。Air 3:Multi Sorter·ISO Picker Vacuum。Air 4:ISO Main Air。',
          ja:'2.1.1. Electrical Turn-on Sequence — Main Air Regulator\n\n各Air Regulatorの圧力が4~6barに維持されるよう調整します。主設備Utility Panel上のRegulatorは入力信号でモニタリングされます。Air 1:Indexer・Stacker・Elevator・Picker Up-Down・Air Gun・Vacuum Tweezers。Air 2:ISO Jig #1/#2 Pocket Vacuum。Air 3:Multi Sorter・ISO Picker Vacuum。Air 4:ISO Main Air。',
          vi:'2.1.1. Electrical Turn-on Sequence — Main Air Regulator\n\nChỉnh mỗi Air Regulator giữ áp suất 4–6bar. Regulator trên Utility Panel của thiết bị chính được giám sát qua tín hiệu đầu vào. Air 1: Indexer/Stacker/Elevator/Picker Up-Down/Air Gun/Vacuum Tweezers. Air 2: ISO Jig #1/#2 Pocket Vacuum. Air 3: Multi Sorter/ISO Picker Vacuum. Air 4: ISO Main Air.'
        }},
        {img:cmImg('A','smtv',73),tx:{
          en:'2.1.1. Electrical Turn-on Sequence — Power Supply Checklist\n\nBefore powering the SMTV, check: Main Breaker On/Off; circuit breakers inside the electric panel; Utility Panel lamp (not present on Intel-spec equipment); upper-door lock/unlock per Auto/Teach mode; EMS button push/pull; lower-door closed (for the lower fan); UPS On/Off for the Host PC (absent for Intel); Power Strip On/Off for PC/LED Controller (absent for Intel); Main Air supply and 4–6bar regulator pressure; Operation Panel button lamp status.',
          ko:'2.1.1. Electrical Turn-on Sequence — Power Supply Checklist\n\nSMTV 전원 공급 전 확인 사항: Main Breaker On/Off; 전장 판넬 내부 Breaker; Utility Panel Lamp(Intel Spec은 없음); Auto/Teach 모드에 따른 상부 도어 Lock/Unlock; EMS 버튼 Push/Pull; 하부 도어 닫힘(하부 Fan용); Host PC용 UPS On/Off(Intel은 없음); PC·LED Controller용 Power Strip On/Off(Intel은 없음); Main Air 공급 및 Regulator 4~6bar 유지; Operation Panel 버튼 Lamp 상태.',
          zhCN:'2.1.1. Electrical Turn-on Sequence — Power Supply Checklist\n\n为SMTV供电前需确认:Main Breaker On/Off;电气面板内部Breaker;Utility Panel Lamp(Intel Spec无);依Auto/Teach模式的上部門Lock/Unlock;EMS按钮Push/Pull;下部門关闭(供下部Fan用);Host PC用UPS On/Off(Intel无);PC·LED Controller用Power Strip On/Off(Intel无);Main Air供应及Regulator保持4~6bar;Operation Panel按钮Lamp状态。',
          zhTW:'2.1.1. Electrical Turn-on Sequence — Power Supply Checklist\n\n為SMTV供電前需確認:Main Breaker On/Off;電氣面板內部Breaker;Utility Panel Lamp(Intel Spec無);依Auto/Teach模式的上部門Lock/Unlock;EMS按鈕Push/Pull;下部門關閉(供下部Fan用);Host PC用UPS On/Off(Intel無);PC·LED Controller用Power Strip On/Off(Intel無);Main Air供應及Regulator保持4~6bar;Operation Panel按鈕Lamp狀態。',
          ja:'2.1.1. Electrical Turn-on Sequence — Power Supply Checklist\n\nSMTVへの電源供給前に確認する項目:Main Breaker On/Off;電装パネル内部のBreaker;Utility Panel Lamp(Intel仕様には無し);Auto/Teachモードによる上部ドアLock/Unlock;EMSボタンPush/Pull;下部ドアが閉じているか(下部Fan用);Host PC用UPS On/Off(Intelには無し);PC・LED Controller用Power Strip On/Off(Intelには無し);Main Air供給及びRegulatorの4~6bar維持;Operation Panelボタンランプ状態。',
          vi:'2.1.1. Electrical Turn-on Sequence — Power Supply Checklist\n\nTrước khi cấp nguồn cho SMTV, kiểm tra: Main Breaker On/Off; Breaker bên trong tủ điện; đèn Utility Panel (không có ở bản Intel); khóa/mở cửa trên theo chế độ Auto/Teach; nút EMS Push/Pull; cửa dưới đã đóng (cho quạt dưới); UPS On/Off cho Host PC (không có ở bản Intel); Power Strip On/Off cho PC·LED Controller (không có ở bản Intel); nguồn Main Air và áp suất Regulator 4–6bar; trạng thái đèn nút Operation Panel.'
        }},
        {img:cmImg('A','smtv',74),tx:{
          en:'2.1.1. Electrical Turn-on Sequence — Main Breaker\n\nTurn on the main circuit breaker (N30C-S) on the equipment\'s main panel. The Release Key is used to open the door.',
          ko:'2.1.1. Electrical Turn-on Sequence — Main Breaker\n\n설비 Main Panel의 주 Breaker(N30C-S)를 켭니다. Release Key는 도어를 여는 데 사용됩니다.',
          zhCN:'2.1.1. Electrical Turn-on Sequence — Main Breaker\n\n开启设备Main Panel的主Breaker(N30C-S)。Release Key用于开门。',
          zhTW:'2.1.1. Electrical Turn-on Sequence — Main Breaker\n\n開啟設備Main Panel的主Breaker(N30C-S)。Release Key用於開門。',
          ja:'2.1.1. Electrical Turn-on Sequence — Main Breaker\n\n設備Main Panelの主Breaker(N30C-S)をオンにします。Release Keyはドアを開けるために使用します。',
          vi:'2.1.1. Electrical Turn-on Sequence — Main Breaker\n\nBật Breaker chính (N30C-S) trên Main Panel của thiết bị. Release Key dùng để mở cửa.'
        }},
        {img:cmImg('A','smtv',75),tx:{
          en:'2.1.1. Electrical Turn-on Sequence — Circuit Protectors\n\nTurn on all circuit protectors inside the Main and Sub Electric Panels.',
          ko:'2.1.1. Electrical Turn-on Sequence — Circuit Protectors\n\nMain·Sub Electric Panel 내부의 모든 Circuit Protector를 켭니다.',
          zhCN:'2.1.1. Electrical Turn-on Sequence — Circuit Protectors\n\n开启Main·Sub Electric Panel内部所有Circuit Protector。',
          zhTW:'2.1.1. Electrical Turn-on Sequence — Circuit Protectors\n\n開啟Main·Sub Electric Panel內部所有Circuit Protector。',
          ja:'2.1.1. Electrical Turn-on Sequence — Circuit Protectors\n\nMain・Sub Electric Panel内部のすべてのCircuit Protectorをオンにします。',
          vi:'2.1.1. Electrical Turn-on Sequence — Circuit Protectors\n\nBật tất cả Circuit Protector bên trong Main·Sub Electric Panel.'
        }},
        {img:cmImg('A','smtv',76),tx:{
          en:'2.1.1. Electrical Turn-on Sequence — Utility Panel Lamp\n\nThe Power Lamp on the Utility Panel should light once the CP01 Power Lamp breaker is on. Intel-spec equipment has no power lamp.',
          ko:'2.1.1. Electrical Turn-on Sequence — Utility Panel Lamp\n\nCP01 Power Lamp Breaker를 켜면 Utility Panel의 Power Lamp가 켜집니다. Intel Spec 설비는 Power Lamp가 없습니다.',
          zhCN:'2.1.1. Electrical Turn-on Sequence — Utility Panel Lamp\n\n开启CP01 Power Lamp Breaker后,Utility Panel的Power Lamp应亮起。Intel Spec设备无Power Lamp。',
          zhTW:'2.1.1. Electrical Turn-on Sequence — Utility Panel Lamp\n\n開啟CP01 Power Lamp Breaker後,Utility Panel的Power Lamp應亮起。Intel Spec設備無Power Lamp。',
          ja:'2.1.1. Electrical Turn-on Sequence — Utility Panel Lamp\n\nCP01 Power Lamp Breakerをオンにすると、Utility PanelのPower Lampが点灯します。Intel仕様設備にはPower Lampはありません。',
          vi:'2.1.1. Electrical Turn-on Sequence — Utility Panel Lamp\n\nĐèn Power Lamp trên Utility Panel sẽ sáng khi bật Breaker CP01 Power Lamp. Thiết bị bản Intel không có đèn Power Lamp.'
        }},
        {img:cmImg('A','smtv',77),tx:{
          en:'2.1.1. Electrical Turn-on Sequence — UPS\n\nTo power the Host PC, the UPS must be on. Turn the UPS off during shipping or power-related work. Intel-spec equipment has no UPS (installation and specification vary by customer).',
          ko:'2.1.1. Electrical Turn-on Sequence — UPS\n\nHost PC에 전원을 공급하려면 UPS가 켜져 있어야 합니다. 출하·전원 관련 작업 시에는 UPS 전원을 꺼야 합니다. Intel Spec 설비는 UPS가 없습니다(설치 유무·Spec은 고객사마다 다름).',
          zhCN:'2.1.1. Electrical Turn-on Sequence — UPS\n\n要为Host PC供电,UPS必须开启。出货·电源相关作业时应关闭UPS电源。Intel Spec设备无UPS(是否安装及Spec因客户而异)。',
          zhTW:'2.1.1. Electrical Turn-on Sequence — UPS\n\n要為Host PC供電,UPS必須開啟。出貨·電源相關作業時應關閉UPS電源。Intel Spec設備無UPS(是否安裝及Spec因客戶而異)。',
          ja:'2.1.1. Electrical Turn-on Sequence — UPS\n\nHost PCに電源を供給するにはUPSがオンである必要があります。出荷・電源関連作業時はUPS電源をオフにします。Intel仕様設備にはUPSはありません(設置有無・仕様は顧客により異なります)。',
          vi:'2.1.1. Electrical Turn-on Sequence — UPS\n\nĐể cấp nguồn cho Host PC, UPS phải bật. Khi xuất xưởng hoặc làm việc liên quan đến nguồn, phải tắt UPS. Thiết bị bản Intel không có UPS (tình trạng lắp đặt/Spec khác nhau tùy khách hàng).'
        }},
        {img:cmImg('A','smtv',78),tx:{
          en:'2.1.1. Electrical Turn-on Sequence — Power Strip\n\nTo power controllers such as the PC and LED Controller, the Power Strip must be turned on.',
          ko:'2.1.1. Electrical Turn-on Sequence — Power Strip\n\nPC·LED Controller 등 Controller에 전원을 공급하려면 Power Strip을 켜야 합니다.',
          zhCN:'2.1.1. Electrical Turn-on Sequence — Power Strip\n\n要为PC·LED Controller等Controller供电,必须开启Power Strip。',
          zhTW:'2.1.1. Electrical Turn-on Sequence — Power Strip\n\n要為PC·LED Controller等Controller供電,必須開啟Power Strip。',
          ja:'2.1.1. Electrical Turn-on Sequence — Power Strip\n\nPC・LED Controller等のControllerに電源を供給するにはPower Stripをオンにする必要があります。',
          vi:'2.1.1. Electrical Turn-on Sequence — Power Strip\n\nĐể cấp nguồn cho các Controller như PC·LED Controller, phải bật Power Strip.'
        }},
        {img:cmImg('A','smtv',79),tx:{
          en:'2.1.1. Electrical Turn-on Sequence — Operation Panel\n\nWith all breakers on, the Power Off lamp lights, and the Reset lamp blinks every ~500ms. Pressing Power On lights that lamp and turns off Power Off\'s lamp. In Teach mode, pressing Reset with all EMS pulled supplies motor power; in Auto mode, this also requires all upper doors locked (unlocking cuts motor power). Buttons: POWER ON = IO/Driver power on; POWER OFF = IO/Driver power off; START = run start; STOP = run stop; RESET = motor power on (while Reset flashes).',
          ko:'2.1.1. Electrical Turn-on Sequence — Operation Panel\n\n모든 Breaker가 켜지면 Power Off Lamp가 켜지고, Reset Lamp는 약 500ms 주기로 깜빡입니다. Power On을 누르면 해당 Lamp가 켜지고 Power Off Lamp는 꺼집니다. Teach Mode에서는 모든 EMS가 당겨진 상태에서 Reset을 누르면 Motor 전원이 공급되며, Auto Mode에서는 추가로 모든 상부 도어가 잠겨 있어야 합니다(잠금 해제 시 Motor 전원 차단). 버튼: POWER ON=IO·Driver 전원 On; POWER OFF=IO·Driver 전원 Off; START=운전 시작; STOP=운전 정지; RESET=Motor 전원 On(Reset 점멸 중).',
          zhCN:'2.1.1. Electrical Turn-on Sequence — Operation Panel\n\n所有Breaker开启后,Power Off Lamp亮起,Reset Lamp以约500ms周期闪烁。按下Power On后该Lamp亮起,Power Off Lamp熄灭。Teach Mode下,所有EMS拉出状态按Reset供应Motor电源;Auto Mode下还需所有上部門锁定(解锁则切断Motor电源)。按钮:POWER ON=IO·Driver电源开;POWER OFF=IO·Driver电源关;START=运行开始;STOP=运行停止;RESET=Motor电源开(Reset闪烁时)。',
          zhTW:'2.1.1. Electrical Turn-on Sequence — Operation Panel\n\n所有Breaker開啟後,Power Off Lamp亮起,Reset Lamp以約500ms週期閃爍。按下Power On後該Lamp亮起,Power Off Lamp熄滅。Teach Mode下,所有EMS拉出狀態按Reset供應Motor電源;Auto Mode下還需所有上部門鎖定(解鎖則切斷Motor電源)。按鈕:POWER ON=IO·Driver電源開;POWER OFF=IO·Driver電源關;START=運行開始;STOP=運行停止;RESET=Motor電源開(Reset閃爍時)。',
          ja:'2.1.1. Electrical Turn-on Sequence — Operation Panel\n\nすべてのBreakerがオンになるとPower Off Lampが点灯し、Reset Lampは約500ms周期で点滅します。Power Onを押すとそのLampが点灯しPower Off Lampは消灯します。Teach Modeでは全EMSが引かれた状態でResetを押すとMotor電源が供給され、Auto Modeではさらに上部ドアがすべてロックされている必要があります(解錠するとMotor電源が遮断)。ボタン:POWER ON=IO・Driver電源On;POWER OFF=IO・Driver電源Off;START=運転開始;STOP=運転停止;RESET=Motor電源On(Reset点滅中)。',
          vi:'2.1.1. Electrical Turn-on Sequence — Operation Panel\n\nKhi mọi Breaker đã bật, đèn Power Off sáng, đèn Reset nhấp nháy mỗi ~500ms. Nhấn Power On làm đèn đó sáng và đèn Power Off tắt. Ở Teach Mode, nhấn Reset khi mọi EMS đã kéo ra sẽ cấp nguồn Motor; ở Auto Mode còn cần mọi cửa trên đã khóa (mở khóa sẽ cắt nguồn Motor). Nút: POWER ON = bật nguồn IO·Driver; POWER OFF = tắt nguồn IO·Driver; START = bắt đầu chạy; STOP = dừng chạy; RESET = bật nguồn Motor (khi đèn Reset nhấp nháy).'
        }},
        {img:cmImg('A','smtv',80),tx:{
          en:'Operation — this section covers Power On & Off: Electrical Turn-on Sequence, PC/Controller/Camera, and Equipment Turn-off Sequence.',
          ko:'Operation — Power on & off: Electrical Turn-on Sequence, PC/Controller/Camera, Equipment Turn-off Sequence를 다룹니다.',
          zhCN:'Operation——本节介绍Power on & off:Electrical Turn-on Sequence、PC/Controller/Camera、Equipment Turn-off Sequence。',
          zhTW:'Operation——本節介紹Power on & off:Electrical Turn-on Sequence、PC/Controller/Camera、Equipment Turn-off Sequence。',
          ja:'Operation——本節ではPower on & off:Electrical Turn-on Sequence、PC/Controller/Camera、Equipment Turn-off Sequenceを扱います。',
          vi:'Operation — phần này đề cập đến Power on & off: Electrical Turn-on Sequence, PC/Controller/Camera, Equipment Turn-off Sequence.'
        }},
        {img:cmImg('A','smtv',81),tx:{
          en:'2.1.2. PC, Controller, Camera\n\nTurn on the PCs (Host, 2D, 3D#1, 3D#2) and LED Controllers (2D, 3D#1, 3D#2) — the Host PC turns on after the UPS (except where there\'s no UPS). Turning on the LED Controller also turns on its camera (behavior varies by camera spec).',
          ko:'2.1.2. PC, Controller, Camera\n\nPC(Host, 2D, 3D#1, 3D#2)와 LED Controller(2D, 3D#1, 3D#2)를 켭니다 — Host PC는 UPS가 켜진 후 켜집니다(UPS 없는 경우 제외). LED Controller를 켜면 Camera도 함께 켜집니다(Camera Spec에 따라 다름).',
          zhCN:'2.1.2. PC, Controller, Camera\n\n开启PC(Host、2D、3D#1、3D#2)和LED Controller(2D、3D#1、3D#2)——Host PC在UPS开启后开启(无UPS时除外)。开启LED Controller也会一并开启Camera(依Camera Spec而异)。',
          zhTW:'2.1.2. PC, Controller, Camera\n\n開啟PC(Host、2D、3D#1、3D#2)和LED Controller(2D、3D#1、3D#2)——Host PC在UPS開啟後開啟(無UPS時除外)。開啟LED Controller也會一併開啟Camera(依Camera Spec而異)。',
          ja:'2.1.2. PC, Controller, Camera\n\nPC(Host、2D、3D#1、3D#2)とLED Controller(2D、3D#1、3D#2)をオンにします——Host PCはUPSがオンになった後にオンにします(UPSがない場合を除く)。LED Controllerをオンにすると Cameraも一緒にオンになります(Camera仕様により異なります)。',
          vi:'2.1.2. PC, Controller, Camera\n\nBật PC (Host, 2D, 3D#1, 3D#2) và LED Controller (2D, 3D#1, 3D#2) — Host PC bật sau khi UPS đã bật (trừ trường hợp không có UPS). Bật LED Controller cũng đồng thời bật Camera (tùy theo Spec Camera).'
        }},
        {img:cmImg('A','smtv',82),tx:{
          en:'2.1.2. PC, Controller, Camera — PZT, AF Controller\n\nTurn on the PZT and AF Controllers (3D#1, 3D#2). Caution: raising equipment power with the controller\'s own power button already on may damage it from overvoltage.',
          ko:'2.1.2. PC, Controller, Camera — PZT, AF Controller\n\nPZT·AF Controller(3D#1, 3D#2)를 켭니다. 주의: Controller 전원 버튼이 이미 켜진 상태에서 설비 전원을 올리면 과전압으로 손상될 수 있습니다.',
          zhCN:'2.1.2. PC, Controller, Camera — PZT, AF Controller\n\n开启PZT·AF Controller(3D#1、3D#2)。注意:若Controller电源按钮已开启的状态下提升设备电源,可能因过电压而损坏。',
          zhTW:'2.1.2. PC, Controller, Camera — PZT, AF Controller\n\n開啟PZT·AF Controller(3D#1、3D#2)。注意:若Controller電源按鈕已開啟的狀態下提升設備電源,可能因過電壓而損壞。',
          ja:'2.1.2. PC, Controller, Camera — PZT, AF Controller\n\nPZT・AF Controller(3D#1、3D#2)をオンにします。注意:Controllerの電源ボタンが既にオンの状態で設備電源を上げると、過電圧により破損する恐れがあります。',
          vi:'2.1.2. PC, Controller, Camera — PZT, AF Controller\n\nBật PZT·AF Controller (3D#1, 3D#2). Lưu ý: nếu nút nguồn Controller đã bật sẵn khi nâng nguồn thiết bị, có thể hỏng do quá áp.'
        }},
        {img:cmImg('A','smtv',83),tx:{
          en:'Operation — this section covers Power On & Off: Electrical Turn-on Sequence, Controller/PC/Camera, and Equipment Turn-off Sequence.',
          ko:'Operation — Power on & off: Electrical Turn-on Sequence, Controller/PC/Camera, Equipment Turn-off Sequence를 다룹니다.',
          zhCN:'Operation——本节介绍Power on & off:Electrical Turn-on Sequence、Controller/PC/Camera、Equipment Turn-off Sequence。',
          zhTW:'Operation——本節介紹Power on & off:Electrical Turn-on Sequence、Controller/PC/Camera、Equipment Turn-off Sequence。',
          ja:'Operation——本節ではPower on & off:Electrical Turn-on Sequence、Controller/PC/Camera、Equipment Turn-off Sequenceを扱います。',
          vi:'Operation — phần này đề cập đến Power on & off: Electrical Turn-on Sequence, Controller/PC/Camera, Equipment Turn-off Sequence.'
        }},
        {img:cmImg('A','smtv',84),tx:{
          en:'2.1.3. Equipment Turn-off Sequence\n\nTurn off in the reverse order of turn-on: Controller (AF, LED, PZT, PC) → Operation Panel power off → Power Strip off → UPS off → CP off → Main Panel off. Turning off out of order may damage electrical components.',
          ko:'2.1.3. Equipment Turn-off Sequence\n\n켤 때의 역순으로 끕니다: Controller(AF, LED, PZT, PC) → Operation Panel 전원 Off → Power Strip Off → UPS Off → CP Off → Main Panel Off. 순서를 지키지 않으면 전장 부품이 손상될 수 있습니다.',
          zhCN:'2.1.3. Equipment Turn-off Sequence\n\n按开启时的相反顺序关闭:Controller(AF、LED、PZT、PC) → Operation Panel电源关闭 → Power Strip关闭 → UPS关闭 → CP关闭 → Main Panel关闭。未按顺序关闭可能损坏电气元件。',
          zhTW:'2.1.3. Equipment Turn-off Sequence\n\n按開啟時的相反順序關閉:Controller(AF、LED、PZT、PC) → Operation Panel電源關閉 → Power Strip關閉 → UPS關閉 → CP關閉 → Main Panel關閉。未按順序關閉可能損壞電氣元件。',
          ja:'2.1.3. Equipment Turn-off Sequence\n\nオンにした時の逆順でオフにします:Controller(AF、LED、PZT、PC) → Operation Panel電源オフ → Power Stripオフ → UPSオフ → CPオフ → Main Panelオフ。順序を守らないと電装部品が故障する恐れがあります。',
          vi:'2.1.3. Equipment Turn-off Sequence\n\nTắt theo thứ tự ngược lại lúc bật: Controller (AF, LED, PZT, PC) → tắt nguồn Operation Panel → tắt Power Strip → tắt UPS → tắt CP → tắt Main Panel. Tắt sai thứ tự có thể làm hỏng linh kiện điện.'
        }},
      ]
    },
    nbga:{
      title:{ko:'A. 설비 기본 구성',en:'A. Basic Equipment Configuration',zhCN:'A. 设备基本构成',zhTW:'A. 設備基本構成',ja:'A. 設備基本構成',vi:'A. Cấu hình cơ bản thiết bị'},
      chapters:[
        {from:1,title:{ko:'A. Dimension & Specification',en:'A. Dimension & Specification',zhCN:'A. Dimension & Specification',zhTW:'A. Dimension & Specification',ja:'A. Dimension & Specification',vi:'A. Dimension & Specification'}},
        {from:25,title:{ko:'B. Layout & Component',en:'B. Layout & Component',zhCN:'B. Layout & Component',zhTW:'B. Layout & Component',ja:'B. Layout & Component',vi:'B. Layout & Component'}},
        {from:55,title:{ko:'C. Safety Sticker',en:'C. Safety Sticker',zhCN:'C. Safety Sticker',zhTW:'C. Safety Sticker',ja:'C. Safety Sticker',vi:'C. Safety Sticker'}},
        {from:57,title:{ko:'D. Power Supply & Interlock',en:'D. Power Supply & Interlock',zhCN:'D. Power Supply & Interlock',zhTW:'D. Power Supply & Interlock',ja:'D. Power Supply & Interlock',vi:'D. Power Supply & Interlock'}},
        {from:73,title:{ko:'E. Equipment Automatic Sequence',en:'E. Equipment Automatic Sequence',zhCN:'E. Equipment Automatic Sequence',zhTW:'E. Equipment Automatic Sequence',ja:'E. Equipment Automatic Sequence',vi:'E. Equipment Automatic Sequence'}},
        {from:85,title:{ko:'F. Power On & Off',en:'F. Power On & Off',zhCN:'F. Power On & Off',zhTW:'F. Power On & Off',ja:'F. Power On & Off',vi:'F. Power On & Off'}}
      ],
      slides:[
        {img:cmImg('A','nbga',1),tx:{
          en:'Introduce — this section covers Dimension & Specification for each customer configuration: SEMCO/Kyocera, SEMV, and AT&S/Intel/Nanya.',
          ko:'Introduce — 고객사별 Dimension & Specification: SEMCO/Kyocera, SEMV, AT&S/Intel/Nanya를 다룹니다.',
          zhCN:'Introduce——本节介绍各客户配置的Dimension & Specification:SEMCO/Kyocera、SEMV、AT&S/Intel/Nanya。',
          zhTW:'Introduce——本節介紹各客戶配置的Dimension & Specification:SEMCO/Kyocera、SEMV、AT&S/Intel/Nanya。',
          ja:'Introduce——本節では顧客別Dimension & Specification:SEMCO/Kyocera、SEMV、AT&S/Intel/Nanyaを扱います。',
          vi:'Introduce — phần này đề cập đến Dimension & Specification theo từng cấu hình khách hàng: SEMCO/Kyocera, SEMV, AT&S/Intel/Nanya.'
        }},
        {img:cmImg('A','nbga',2),tx:{
          en:'1.2.1. SEMCO, Kyocera — Dimension\n\nEquipment footprint for this customer configuration (Front/Right views).',
          ko:'1.2.1. SEMCO, Kyocera — Dimension\n\n해당 고객사 구성의 설비 외형 치수입니다 (Front/Right View).',
          zhCN:'1.2.1. SEMCO, Kyocera — Dimension\n\n该客户配置的设备外形尺寸(Front/Right View)。',
          zhTW:'1.2.1. SEMCO, Kyocera — Dimension\n\n該客戶配置的設備外形尺寸(Front/Right View)。',
          ja:'1.2.1. SEMCO, Kyocera — Dimension\n\n当該顧客構成の設備外形寸法です(Front/Right View)。',
          vi:'1.2.1. SEMCO, Kyocera — Dimension\n\nKích thước tổng thể thiết bị theo cấu hình khách hàng này (Front/Right View).'
        }},
        {img:cmImg('A','nbga',3),tx:{
          en:'1.2.1. SEMCO, Kyocera — Utility & Electric Spec\n\nDetailed utility/electrical specifications are customer-confidential and not shown here.',
          ko:'1.2.1. SEMCO, Kyocera — Utility & Electric Spec\n\n세부 Utility·전기 Spec은 고객사 기밀 사항으로 본 자료에는 표기하지 않습니다.',
          zhCN:'1.2.1. SEMCO, Kyocera — Utility & Electric Spec\n\n详细Utility·电气Spec属客户保密事项,本资料不列出。',
          zhTW:'1.2.1. SEMCO, Kyocera — Utility & Electric Spec\n\n詳細Utility·電氣Spec屬客戶保密事項,本資料不列出。',
          ja:'1.2.1. SEMCO, Kyocera — Utility & Electric Spec\n\n詳細なUtility・電気Specは顧客機密事項のため、本資料には記載しません。',
          vi:'1.2.1. SEMCO, Kyocera — Utility & Electric Spec\n\nThông số chi tiết Utility·điện thuộc bảo mật khách hàng nên không nêu trong tài liệu này.'
        }},
        {img:cmImg('A','nbga',4),tx:{
          en:'1.2.1. SEMCO, Kyocera — Handler Spec\n\nDetailed handler specifications are customer-confidential and not shown here.',
          ko:'1.2.1. SEMCO, Kyocera — Handler Spec\n\n세부 Handler Spec은 고객사 기밀 사항으로 본 자료에는 표기하지 않습니다.',
          zhCN:'1.2.1. SEMCO, Kyocera — Handler Spec\n\n详细Handler Spec属客户保密事项,本资料不列出。',
          zhTW:'1.2.1. SEMCO, Kyocera — Handler Spec\n\n詳細Handler Spec屬客戶保密事項,本資料不列出。',
          ja:'1.2.1. SEMCO, Kyocera — Handler Spec\n\n詳細なHandler Specは顧客機密事項のため、本資料には記載しません。',
          vi:'1.2.1. SEMCO, Kyocera — Handler Spec\n\nThông số chi tiết Handler thuộc bảo mật khách hàng nên không nêu trong tài liệu này.'
        }},
        {img:cmImg('A','nbga',5),tx:{
          en:'1.2.1. SEMCO, Kyocera — 2D Vision Module Spec (25M Camera)\n\nDetailed camera specifications are customer-confidential and not shown here.',
          ko:'1.2.1. SEMCO, Kyocera — 2D Vision Module Spec (25M Camera)\n\n세부 Camera Spec은 고객사 기밀 사항으로 본 자료에는 표기하지 않습니다.',
          zhCN:'1.2.1. SEMCO, Kyocera — 2D Vision Module Spec (25M Camera)\n\n详细Camera Spec属客户保密事项,本资料不列出。',
          zhTW:'1.2.1. SEMCO, Kyocera — 2D Vision Module Spec (25M Camera)\n\n詳細Camera Spec屬客戶保密事項,本資料不列出。',
          ja:'1.2.1. SEMCO, Kyocera — 2D Vision Module Spec (25M Camera)\n\n詳細なCamera Specは顧客機密事項のため、本資料には記載しません。',
          vi:'1.2.1. SEMCO, Kyocera — 2D Vision Module Spec (25M Camera)\n\nThông số chi tiết Camera thuộc bảo mật khách hàng nên không nêu trong tài liệu này.'
        }},
        {img:cmImg('A','nbga',6),tx:{
          en:'1.2.1. SEMCO, Kyocera — 2D Vision Module Spec (67M Camera)\n\nDetailed camera specifications are customer-confidential and not shown here.',
          ko:'1.2.1. SEMCO, Kyocera — 2D Vision Module Spec (67M Camera)\n\n세부 Camera Spec은 고객사 기밀 사항으로 본 자료에는 표기하지 않습니다.',
          zhCN:'1.2.1. SEMCO, Kyocera — 2D Vision Module Spec (67M Camera)\n\n详细Camera Spec属客户保密事项,本资料不列出。',
          zhTW:'1.2.1. SEMCO, Kyocera — 2D Vision Module Spec (67M Camera)\n\n詳細Camera Spec屬客戶保密事項,本資料不列出。',
          ja:'1.2.1. SEMCO, Kyocera — 2D Vision Module Spec (67M Camera)\n\n詳細なCamera Specは顧客機密事項のため、本資料には記載しません。',
          vi:'1.2.1. SEMCO, Kyocera — 2D Vision Module Spec (67M Camera)\n\nThông số chi tiết Camera thuộc bảo mật khách hàng nên không nêu trong tài liệu này.'
        }},
        {img:cmImg('A','nbga',7),tx:{
          en:'1.2.1. SEMCO, Kyocera — 3D Vision Module Spec (Single Optics)\n\nDetailed optics specifications are customer-confidential and not shown here.',
          ko:'1.2.1. SEMCO, Kyocera — 3D Vision Module Spec (Single Optics)\n\n세부 광학계 Spec은 고객사 기밀 사항으로 본 자료에는 표기하지 않습니다.',
          zhCN:'1.2.1. SEMCO, Kyocera — 3D Vision Module Spec (Single Optics)\n\n详细光学系统Spec属客户保密事项,本资料不列出。',
          zhTW:'1.2.1. SEMCO, Kyocera — 3D Vision Module Spec (Single Optics)\n\n詳細光學系統Spec屬客戶保密事項,本資料不列出。',
          ja:'1.2.1. SEMCO, Kyocera — 3D Vision Module Spec (Single Optics)\n\n詳細な光学系Specは顧客機密事項のため、本資料には記載しません。',
          vi:'1.2.1. SEMCO, Kyocera — 3D Vision Module Spec (Single Optics)\n\nThông số chi tiết hệ quang học thuộc bảo mật khách hàng nên không nêu trong tài liệu này.'
        }},
        {img:cmImg('A','nbga',8),tx:{
          en:'1.2.1. SEMCO, Kyocera — 3D Vision Module Spec (Turret Optics)\n\nDetailed optics specifications are customer-confidential and not shown here.',
          ko:'1.2.1. SEMCO, Kyocera — 3D Vision Module Spec (Turret Optics)\n\n세부 광학계 Spec은 고객사 기밀 사항으로 본 자료에는 표기하지 않습니다.',
          zhCN:'1.2.1. SEMCO, Kyocera — 3D Vision Module Spec (Turret Optics)\n\n详细光学系统Spec属客户保密事项,本资料不列出。',
          zhTW:'1.2.1. SEMCO, Kyocera — 3D Vision Module Spec (Turret Optics)\n\n詳細光學系統Spec屬客戶保密事項,本資料不列出。',
          ja:'1.2.1. SEMCO, Kyocera — 3D Vision Module Spec (Turret Optics)\n\n詳細な光学系Specは顧客機密事項のため、本資料には記載しません。',
          vi:'1.2.1. SEMCO, Kyocera — 3D Vision Module Spec (Turret Optics)\n\nThông số chi tiết hệ quang học thuộc bảo mật khách hàng nên không nêu trong tài liệu này.'
        }},
        {img:cmImg('A','nbga',9),tx:{
          en:'Introduce — this section covers Dimension & Specification for each customer configuration: SEMCO/Kyocera, SEMV, and AT&S/Intel/Nanya.',
          ko:'Introduce — 고객사별 Dimension & Specification: SEMCO/Kyocera, SEMV, AT&S/Intel/Nanya를 다룹니다.',
          zhCN:'Introduce——本节介绍各客户配置的Dimension & Specification:SEMCO/Kyocera、SEMV、AT&S/Intel/Nanya。',
          zhTW:'Introduce——本節介紹各客戶配置的Dimension & Specification:SEMCO/Kyocera、SEMV、AT&S/Intel/Nanya。',
          ja:'Introduce——本節では顧客別Dimension & Specification:SEMCO/Kyocera、SEMV、AT&S/Intel/Nanyaを扱います。',
          vi:'Introduce — phần này đề cập đến Dimension & Specification theo từng cấu hình khách hàng: SEMCO/Kyocera, SEMV, AT&S/Intel/Nanya.'
        }},
        {img:cmImg('A','nbga',10),tx:{
          en:'1.2.2. SEMV — Dimension\n\nEquipment footprint for this customer configuration (Front/Right views).',
          ko:'1.2.2. SEMV — Dimension\n\n해당 고객사 구성의 설비 외형 치수입니다 (Front/Right View).',
          zhCN:'1.2.2. SEMV — Dimension\n\n该客户配置的设备外形尺寸(Front/Right View)。',
          zhTW:'1.2.2. SEMV — Dimension\n\n該客戶配置的設備外形尺寸(Front/Right View)。',
          ja:'1.2.2. SEMV — Dimension\n\n当該顧客構成の設備外形寸法です(Front/Right View)。',
          vi:'1.2.2. SEMV — Dimension\n\nKích thước tổng thể thiết bị theo cấu hình khách hàng này (Front/Right View).'
        }},
        {img:cmImg('A','nbga',11),tx:{
          en:'1.2.2. SEMV — Utility & Electric Spec\n\nDetailed utility/electrical specifications are customer-confidential and not shown here.',
          ko:'1.2.2. SEMV — Utility & Electric Spec\n\n세부 Utility·전기 Spec은 고객사 기밀 사항으로 본 자료에는 표기하지 않습니다.',
          zhCN:'1.2.2. SEMV — Utility & Electric Spec\n\n详细Utility·电气Spec属客户保密事项,本资料不列出。',
          zhTW:'1.2.2. SEMV — Utility & Electric Spec\n\n詳細Utility·電氣Spec屬客戶保密事項,本資料不列出。',
          ja:'1.2.2. SEMV — Utility & Electric Spec\n\n詳細なUtility・電気Specは顧客機密事項のため、本資料には記載しません。',
          vi:'1.2.2. SEMV — Utility & Electric Spec\n\nThông số chi tiết Utility·điện thuộc bảo mật khách hàng nên không nêu trong tài liệu này.'
        }},
        {img:cmImg('A','nbga',12),tx:{
          en:'1.2.2. SEMV — Handler Spec\n\nDetailed handler specifications are customer-confidential and not shown here.',
          ko:'1.2.2. SEMV — Handler Spec\n\n세부 Handler Spec은 고객사 기밀 사항으로 본 자료에는 표기하지 않습니다.',
          zhCN:'1.2.2. SEMV — Handler Spec\n\n详细Handler Spec属客户保密事项,本资料不列出。',
          zhTW:'1.2.2. SEMV — Handler Spec\n\n詳細Handler Spec屬客戶保密事項,本資料不列出。',
          ja:'1.2.2. SEMV — Handler Spec\n\n詳細なHandler Specは顧客機密事項のため、本資料には記載しません。',
          vi:'1.2.2. SEMV — Handler Spec\n\nThông số chi tiết Handler thuộc bảo mật khách hàng nên không nêu trong tài liệu này.'
        }},
        {img:cmImg('A','nbga',13),tx:{
          en:'1.2.2. SEMV — 2D Vision Module Spec (25M Camera)\n\nDetailed camera specifications are customer-confidential and not shown here.',
          ko:'1.2.2. SEMV — 2D Vision Module Spec (25M Camera)\n\n세부 Camera Spec은 고객사 기밀 사항으로 본 자료에는 표기하지 않습니다.',
          zhCN:'1.2.2. SEMV — 2D Vision Module Spec (25M Camera)\n\n详细Camera Spec属客户保密事项,本资料不列出。',
          zhTW:'1.2.2. SEMV — 2D Vision Module Spec (25M Camera)\n\n詳細Camera Spec屬客戶保密事項,本資料不列出。',
          ja:'1.2.2. SEMV — 2D Vision Module Spec (25M Camera)\n\n詳細なCamera Specは顧客機密事項のため、本資料には記載しません。',
          vi:'1.2.2. SEMV — 2D Vision Module Spec (25M Camera)\n\nThông số chi tiết Camera thuộc bảo mật khách hàng nên không nêu trong tài liệu này.'
        }},
        {img:cmImg('A','nbga',14),tx:{
          en:'1.2.2. SEMV — 2D Vision Module Spec (67M Camera)\n\nDetailed camera specifications are customer-confidential and not shown here.',
          ko:'1.2.2. SEMV — 2D Vision Module Spec (67M Camera)\n\n세부 Camera Spec은 고객사 기밀 사항으로 본 자료에는 표기하지 않습니다.',
          zhCN:'1.2.2. SEMV — 2D Vision Module Spec (67M Camera)\n\n详细Camera Spec属客户保密事项,本资料不列出。',
          zhTW:'1.2.2. SEMV — 2D Vision Module Spec (67M Camera)\n\n詳細Camera Spec屬客戶保密事項,本資料不列出。',
          ja:'1.2.2. SEMV — 2D Vision Module Spec (67M Camera)\n\n詳細なCamera Specは顧客機密事項のため、本資料には記載しません。',
          vi:'1.2.2. SEMV — 2D Vision Module Spec (67M Camera)\n\nThông số chi tiết Camera thuộc bảo mật khách hàng nên không nêu trong tài liệu này.'
        }},
        {img:cmImg('A','nbga',15),tx:{
          en:'1.2.2. SEMV — 3D Vision Module Spec (Single Optics)\n\nDetailed optics specifications are customer-confidential and not shown here.',
          ko:'1.2.2. SEMV — 3D Vision Module Spec (Single Optics)\n\n세부 광학계 Spec은 고객사 기밀 사항으로 본 자료에는 표기하지 않습니다.',
          zhCN:'1.2.2. SEMV — 3D Vision Module Spec (Single Optics)\n\n详细光学系统Spec属客户保密事项,本资料不列出。',
          zhTW:'1.2.2. SEMV — 3D Vision Module Spec (Single Optics)\n\n詳細光學系統Spec屬客戶保密事項,本資料不列出。',
          ja:'1.2.2. SEMV — 3D Vision Module Spec (Single Optics)\n\n詳細な光学系Specは顧客機密事項のため、本資料には記載しません。',
          vi:'1.2.2. SEMV — 3D Vision Module Spec (Single Optics)\n\nThông số chi tiết hệ quang học thuộc bảo mật khách hàng nên không nêu trong tài liệu này.'
        }},
        {img:cmImg('A','nbga',16),tx:{
          en:'1.2.2. SEMV — 3D Vision Module Spec (Turret Optics)\n\nDetailed optics specifications are customer-confidential and not shown here.',
          ko:'1.2.2. SEMV — 3D Vision Module Spec (Turret Optics)\n\n세부 광학계 Spec은 고객사 기밀 사항으로 본 자료에는 표기하지 않습니다.',
          zhCN:'1.2.2. SEMV — 3D Vision Module Spec (Turret Optics)\n\n详细光学系统Spec属客户保密事项,本资料不列出。',
          zhTW:'1.2.2. SEMV — 3D Vision Module Spec (Turret Optics)\n\n詳細光學系統Spec屬客戶保密事項,本資料不列出。',
          ja:'1.2.2. SEMV — 3D Vision Module Spec (Turret Optics)\n\n詳細な光学系Specは顧客機密事項のため、本資料には記載しません。',
          vi:'1.2.2. SEMV — 3D Vision Module Spec (Turret Optics)\n\nThông số chi tiết hệ quang học thuộc bảo mật khách hàng nên không nêu trong tài liệu này.'
        }},
        {img:cmImg('A','nbga',17),tx:{
          en:'Introduce — this section covers Dimension & Specification for each customer configuration: SEMCO/Kyocera, SEMV, and AT&S/Intel/Nanya.',
          ko:'Introduce — 고객사별 Dimension & Specification: SEMCO/Kyocera, SEMV, AT&S/Intel/Nanya를 다룹니다.',
          zhCN:'Introduce——本节介绍各客户配置的Dimension & Specification:SEMCO/Kyocera、SEMV、AT&S/Intel/Nanya。',
          zhTW:'Introduce——本節介紹各客戶配置的Dimension & Specification:SEMCO/Kyocera、SEMV、AT&S/Intel/Nanya。',
          ja:'Introduce——本節では顧客別Dimension & Specification:SEMCO/Kyocera、SEMV、AT&S/Intel/Nanyaを扱います。',
          vi:'Introduce — phần này đề cập đến Dimension & Specification theo từng cấu hình khách hàng: SEMCO/Kyocera, SEMV, AT&S/Intel/Nanya.'
        }},
        {img:cmImg('A','nbga',18),tx:{
          en:'1.2.3. AT&S, Intel, Nanya — Dimension\n\nEquipment footprint for this customer configuration (Front/Right views).',
          ko:'1.2.3. AT&S, Intel, Nanya — Dimension\n\n해당 고객사 구성의 설비 외형 치수입니다 (Front/Right View).',
          zhCN:'1.2.3. AT&S, Intel, Nanya — Dimension\n\n该客户配置的设备外形尺寸(Front/Right View)。',
          zhTW:'1.2.3. AT&S, Intel, Nanya — Dimension\n\n該客戶配置的設備外形尺寸(Front/Right View)。',
          ja:'1.2.3. AT&S, Intel, Nanya — Dimension\n\n当該顧客構成の設備外形寸法です(Front/Right View)。',
          vi:'1.2.3. AT&S, Intel, Nanya — Dimension\n\nKích thước tổng thể thiết bị theo cấu hình khách hàng này (Front/Right View).'
        }},
        {img:cmImg('A','nbga',19),tx:{
          en:'1.2.3. AT&S, Intel, Nanya — Utility & Electric Spec\n\nDetailed utility/electrical specifications are customer-confidential and not shown here.',
          ko:'1.2.3. AT&S, Intel, Nanya — Utility & Electric Spec\n\n세부 Utility·전기 Spec은 고객사 기밀 사항으로 본 자료에는 표기하지 않습니다.',
          zhCN:'1.2.3. AT&S, Intel, Nanya — Utility & Electric Spec\n\n详细Utility·电气Spec属客户保密事项,本资料不列出。',
          zhTW:'1.2.3. AT&S, Intel, Nanya — Utility & Electric Spec\n\n詳細Utility·電氣Spec屬客戶保密事項,本資料不列出。',
          ja:'1.2.3. AT&S, Intel, Nanya — Utility & Electric Spec\n\n詳細なUtility・電気Specは顧客機密事項のため、本資料には記載しません。',
          vi:'1.2.3. AT&S, Intel, Nanya — Utility & Electric Spec\n\nThông số chi tiết Utility·điện thuộc bảo mật khách hàng nên không nêu trong tài liệu này.'
        }},
        {img:cmImg('A','nbga',20),tx:{
          en:'1.2.3. AT&S, Intel, Nanya — Handler Spec\n\nDetailed handler specifications are customer-confidential and not shown here.',
          ko:'1.2.3. AT&S, Intel, Nanya — Handler Spec\n\n세부 Handler Spec은 고객사 기밀 사항으로 본 자료에는 표기하지 않습니다.',
          zhCN:'1.2.3. AT&S, Intel, Nanya — Handler Spec\n\n详细Handler Spec属客户保密事项,本资料不列出。',
          zhTW:'1.2.3. AT&S, Intel, Nanya — Handler Spec\n\n詳細Handler Spec屬客戶保密事項,本資料不列出。',
          ja:'1.2.3. AT&S, Intel, Nanya — Handler Spec\n\n詳細なHandler Specは顧客機密事項のため、本資料には記載しません。',
          vi:'1.2.3. AT&S, Intel, Nanya — Handler Spec\n\nThông số chi tiết Handler thuộc bảo mật khách hàng nên không nêu trong tài liệu này.'
        }},
        {img:cmImg('A','nbga',21),tx:{
          en:'1.2.3. AT&S, Intel, Nanya — 2D Vision Module Spec (25M Camera)\n\nDetailed camera specifications are customer-confidential and not shown here.',
          ko:'1.2.3. AT&S, Intel, Nanya — 2D Vision Module Spec (25M Camera)\n\n세부 Camera Spec은 고객사 기밀 사항으로 본 자료에는 표기하지 않습니다.',
          zhCN:'1.2.3. AT&S, Intel, Nanya — 2D Vision Module Spec (25M Camera)\n\n详细Camera Spec属客户保密事项,本资料不列出。',
          zhTW:'1.2.3. AT&S, Intel, Nanya — 2D Vision Module Spec (25M Camera)\n\n詳細Camera Spec屬客戶保密事項,本資料不列出。',
          ja:'1.2.3. AT&S, Intel, Nanya — 2D Vision Module Spec (25M Camera)\n\n詳細なCamera Specは顧客機密事項のため、本資料には記載しません。',
          vi:'1.2.3. AT&S, Intel, Nanya — 2D Vision Module Spec (25M Camera)\n\nThông số chi tiết Camera thuộc bảo mật khách hàng nên không nêu trong tài liệu này.'
        }},
        {img:cmImg('A','nbga',22),tx:{
          en:'1.2.3. AT&S, Intel, Nanya — 2D Vision Module Spec (67M Camera)\n\nDetailed camera specifications are customer-confidential and not shown here.',
          ko:'1.2.3. AT&S, Intel, Nanya — 2D Vision Module Spec (67M Camera)\n\n세부 Camera Spec은 고객사 기밀 사항으로 본 자료에는 표기하지 않습니다.',
          zhCN:'1.2.3. AT&S, Intel, Nanya — 2D Vision Module Spec (67M Camera)\n\n详细Camera Spec属客户保密事项,本资料不列出。',
          zhTW:'1.2.3. AT&S, Intel, Nanya — 2D Vision Module Spec (67M Camera)\n\n詳細Camera Spec屬客戶保密事項,本資料不列出。',
          ja:'1.2.3. AT&S, Intel, Nanya — 2D Vision Module Spec (67M Camera)\n\n詳細なCamera Specは顧客機密事項のため、本資料には記載しません。',
          vi:'1.2.3. AT&S, Intel, Nanya — 2D Vision Module Spec (67M Camera)\n\nThông số chi tiết Camera thuộc bảo mật khách hàng nên không nêu trong tài liệu này.'
        }},
        {img:cmImg('A','nbga',23),tx:{
          en:'1.2.3. AT&S, Intel, Nanya — 3D Vision Module Spec (Single Optics)\n\nDetailed optics specifications are customer-confidential and not shown here.',
          ko:'1.2.3. AT&S, Intel, Nanya — 3D Vision Module Spec (Single Optics)\n\n세부 광학계 Spec은 고객사 기밀 사항으로 본 자료에는 표기하지 않습니다.',
          zhCN:'1.2.3. AT&S, Intel, Nanya — 3D Vision Module Spec (Single Optics)\n\n详细光学系统Spec属客户保密事项,本资料不列出。',
          zhTW:'1.2.3. AT&S, Intel, Nanya — 3D Vision Module Spec (Single Optics)\n\n詳細光學系統Spec屬客戶保密事項,本資料不列出。',
          ja:'1.2.3. AT&S, Intel, Nanya — 3D Vision Module Spec (Single Optics)\n\n詳細な光学系Specは顧客機密事項のため、本資料には記載しません。',
          vi:'1.2.3. AT&S, Intel, Nanya — 3D Vision Module Spec (Single Optics)\n\nThông số chi tiết hệ quang học thuộc bảo mật khách hàng nên không nêu trong tài liệu này.'
        }},
        {img:cmImg('A','nbga',24),tx:{
          en:'1.2.3. AT&S, Intel, Nanya — 3D Vision Module Spec (Turret Optics)\n\nDetailed optics specifications are customer-confidential and not shown here.',
          ko:'1.2.3. AT&S, Intel, Nanya — 3D Vision Module Spec (Turret Optics)\n\n세부 광학계 Spec은 고객사 기밀 사항으로 본 자료에는 표기하지 않습니다.',
          zhCN:'1.2.3. AT&S, Intel, Nanya — 3D Vision Module Spec (Turret Optics)\n\n详细光学系统Spec属客户保密事项,本资料不列出。',
          zhTW:'1.2.3. AT&S, Intel, Nanya — 3D Vision Module Spec (Turret Optics)\n\n詳細光學系統Spec屬客戶保密事項,本資料不列出。',
          ja:'1.2.3. AT&S, Intel, Nanya — 3D Vision Module Spec (Turret Optics)\n\n詳細な光学系Specは顧客機密事項のため、本資料には記載しません。',
          vi:'1.2.3. AT&S, Intel, Nanya — 3D Vision Module Spec (Turret Optics)\n\nThông số chi tiết hệ quang học thuộc bảo mật khách hàng nên không nêu trong tài liệu này.'
        }},
        {img:cmImg('A','nbga',25),tx:{
          en:'Introduce — this section covers Hardware Configuration & System: Layout & Component, Safety Sticker, Power Supply & Interlock System, and Equipment Automatic Sequence.',
          ko:'Introduce — Hardware Configuration & System: Layout & Component, Safety Sticker, Power Supply & Interlock System, Equipment Automatic Sequence를 다룹니다.',
          zhCN:'Introduce——本节介绍Hardware Configuration & System:Layout & Component、Safety Sticker、Power Supply & Interlock System、Equipment Automatic Sequence。',
          zhTW:'Introduce——本節介紹Hardware Configuration & System:Layout & Component、Safety Sticker、Power Supply & Interlock System、Equipment Automatic Sequence。',
          ja:'Introduce——本節ではHardware Configuration & System:Layout & Component、Safety Sticker、Power Supply & Interlock System、Equipment Automatic Sequenceを扱います。',
          vi:'Introduce — phần này đề cập đến Hardware Configuration & System: Layout & Component, Safety Sticker, Power Supply & Interlock System, Equipment Automatic Sequence.'
        }},
        {img:cmImg('A','nbga',26),tx:{
          en:'1.3.1. Layout & Component (External, Front)\n\nFront view of the equipment: Main Machine, ISO Machine, Monitor, Keyboard & Mouse, EFU (Equipment Fan Filter Unit), Tower Lamp, EMS (Emergency Stop Switch), Area Curtain, Operation Panel. (Exact configuration/placement varies by equipment spec.)',
          ko:'1.3.1. Layout & Component (External, Front)\n\n설비 정면 구성: Main Machine, ISO Machine, Monitor, Keyboard & Mouse, EFU(Equipment Fan Filter Unit), Tower Lamp, EMS(Emergency Stop Switch), Area Curtain, Operation Panel. (세부 구성·위치는 설비 사양에 따라 다를 수 있음)',
          zhCN:'1.3.1. Layout & Component (External, Front)\n\n设备正面构成:Main Machine、ISO Machine、Monitor、Keyboard & Mouse、EFU(Equipment Fan Filter Unit)、Tower Lamp、EMS(Emergency Stop Switch)、Area Curtain、Operation Panel。(具体构成·位置依设备规格而异)',
          zhTW:'1.3.1. Layout & Component (External, Front)\n\n設備正面構成:Main Machine、ISO Machine、Monitor、Keyboard & Mouse、EFU(Equipment Fan Filter Unit)、Tower Lamp、EMS(Emergency Stop Switch)、Area Curtain、Operation Panel。(具體構成·位置依設備規格而異)',
          ja:'1.3.1. Layout & Component (External, Front)\n\n設備正面の構成:Main Machine、ISO Machine、Monitor、Keyboard & Mouse、EFU(Equipment Fan Filter Unit)、Tower Lamp、EMS(Emergency Stop Switch)、Area Curtain、Operation Panel。(詳細構成・位置は設備仕様により異なります)',
          vi:'1.3.1. Layout & Component (External, Front)\n\nCấu hình mặt trước thiết bị: Main Machine, ISO Machine, Monitor, Keyboard & Mouse, EFU (Equipment Fan Filter Unit), Tower Lamp, EMS (Emergency Stop Switch), Area Curtain, Operation Panel. (Cấu hình/vị trí cụ thể tùy theo spec thiết bị)'
        }},
        {img:cmImg('A','nbga',27),tx:{
          en:'1.3.1. Layout & Component (External, Rear)\n\nRear view of the equipment: Main Machine, ISO Machine, EMS (Emergency Stop Switch), Main Power Switch, Pressure Gauge. (Exact configuration/placement varies by equipment spec.)',
          ko:'1.3.1. Layout & Component (External, Rear)\n\n설비 후면 구성: Main Machine, ISO Machine, EMS(Emergency Stop Switch), Main Power Switch, Pressure Gauge. (세부 구성·위치는 설비 사양에 따라 다를 수 있음)',
          zhCN:'1.3.1. Layout & Component (External, Rear)\n\n设备背面构成:Main Machine、ISO Machine、EMS(Emergency Stop Switch)、Main Power Switch、Pressure Gauge。(具体构成·位置依设备规格而异)',
          zhTW:'1.3.1. Layout & Component (External, Rear)\n\n設備背面構成:Main Machine、ISO Machine、EMS(Emergency Stop Switch)、Main Power Switch、Pressure Gauge。(具體構成·位置依設備規格而異)',
          ja:'1.3.1. Layout & Component (External, Rear)\n\n設備背面の構成:Main Machine、ISO Machine、EMS(Emergency Stop Switch)、Main Power Switch、Pressure Gauge。(詳細構成・位置は設備仕様により異なります)',
          vi:'1.3.1. Layout & Component (External, Rear)\n\nCấu hình mặt sau thiết bị: Main Machine, ISO Machine, EMS (Emergency Stop Switch), Main Power Switch, Pressure Gauge. (Cấu hình/vị trí cụ thể tùy theo spec thiết bị)'
        }},
        {img:cmImg('A','nbga',28),tx:{
          en:'1.3.1. Layout & Component (Internal, Front)\n\nInternal front-side layout: MSM (Multi Sorter Module), 2D Vision Module, UPS (excluded for Intel), HUB & KVM, 2D LED Controller, 2D Vision PC, HOST PC, AF/PZT Controller #2/#3, 3D LED Controller #2, 3D Vision PC #2, 3D Vision #2 Module. (Exact configuration/placement varies by equipment spec.)',
          ko:'1.3.1. Layout & Component (Internal, Front)\n\n내부 정면 배치: MSM(Multi Sorter Module), 2D Vision Module, UPS(Intel 제외), HUB & KVM, 2D LED Controller, 2D Vision PC, HOST PC, AF/PZT Controller #2/#3, 3D LED Controller #2, 3D Vision PC #2, 3D Vision #2 Module. (세부 구성·위치는 설비 사양에 따라 다를 수 있음)',
          zhCN:'1.3.1. Layout & Component (Internal, Front)\n\n内部正面配置:MSM(Multi Sorter Module)、2D Vision Module、UPS(Intel除外)、HUB & KVM、2D LED Controller、2D Vision PC、HOST PC、AF/PZT Controller #2/#3、3D LED Controller #2、3D Vision PC #2、3D Vision #2 Module。(具体构成·位置依设备规格而异)',
          zhTW:'1.3.1. Layout & Component (Internal, Front)\n\n內部正面配置:MSM(Multi Sorter Module)、2D Vision Module、UPS(Intel除外)、HUB & KVM、2D LED Controller、2D Vision PC、HOST PC、AF/PZT Controller #2/#3、3D LED Controller #2、3D Vision PC #2、3D Vision #2 Module。(具體構成·位置依設備規格而異)',
          ja:'1.3.1. Layout & Component (Internal, Front)\n\n内部正面配置:MSM(Multi Sorter Module)、2D Vision Module、UPS(Intelは除く)、HUB & KVM、2D LED Controller、2D Vision PC、HOST PC、AF/PZT Controller #2/#3、3D LED Controller #2、3D Vision PC #2、3D Vision #2 Module。(詳細構成・位置は設備仕様により異なります)',
          vi:'1.3.1. Layout & Component (Internal, Front)\n\nBố trí bên trong mặt trước: MSM (Multi Sorter Module), 2D Vision Module, UPS (không có ở bản Intel), HUB & KVM, 2D LED Controller, 2D Vision PC, HOST PC, AF/PZT Controller #2/#3, 3D LED Controller #2, 3D Vision PC #2, 3D Vision #2 Module. (Cấu hình/vị trí cụ thể tùy theo spec thiết bị)'
        }},
        {img:cmImg('A','nbga',29),tx:{
          en:'1.3.1. Layout & Component (Internal, Rear)\n\nInternal rear-side layout: 3D LED Controller #1, 3D Vision #1 PC, AF Controller #1, PZT Controller #1, TTM (Tray Transfer Module), Air Regulator. (Exact configuration/placement varies by equipment spec.)',
          ko:'1.3.1. Layout & Component (Internal, Rear)\n\n내부 후면 배치: 3D LED Controller #1, 3D Vision #1 PC, AF Controller #1, PZT Controller #1, TTM(Tray Transfer Module), Air Regulator. (세부 구성·위치는 설비 사양에 따라 다를 수 있음)',
          zhCN:'1.3.1. Layout & Component (Internal, Rear)\n\n内部背面配置:3D LED Controller #1、3D Vision #1 PC、AF Controller #1、PZT Controller #1、TTM(Tray Transfer Module)、Air Regulator。(具体构成·位置依设备规格而异)',
          zhTW:'1.3.1. Layout & Component (Internal, Rear)\n\n內部背面配置:3D LED Controller #1、3D Vision #1 PC、AF Controller #1、PZT Controller #1、TTM(Tray Transfer Module)、Air Regulator。(具體構成·位置依設備規格而異)',
          ja:'1.3.1. Layout & Component (Internal, Rear)\n\n内部背面配置:3D LED Controller #1、3D Vision #1 PC、AF Controller #1、PZT Controller #1、TTM(Tray Transfer Module)、Air Regulator。(詳細構成・位置は設備仕様により異なります)',
          vi:'1.3.1. Layout & Component (Internal, Rear)\n\nBố trí bên trong mặt sau: 3D LED Controller #1, 3D Vision #1 PC, AF Controller #1, PZT Controller #1, TTM (Tray Transfer Module), Air Regulator. (Cấu hình/vị trí cụ thể tùy theo spec thiết bị)'
        }},
        {img:cmImg('A','nbga',30),tx:{
          en:'1.3.1. Layout & Component (Internal, Top)\n\nTop-down layout of the Main and ISO Machine: JIG #1/#2, TSM (Tray Sorter Module), TTM, MSM, 3D Vision Module #1/#2, 2D Vision Module, PZT Controller #2. (Exact configuration/placement varies by equipment spec.)',
          ko:'1.3.1. Layout & Component (Internal, Top)\n\nMain·ISO Machine 상면 배치: JIG #1/#2, TSM(Tray Sorter Module), TTM, MSM, 3D Vision Module #1/#2, 2D Vision Module, PZT Controller #2. (세부 구성·위치는 설비 사양에 따라 다를 수 있음)',
          zhCN:'1.3.1. Layout & Component (Internal, Top)\n\nMain·ISO Machine俯视配置:JIG #1/#2、TSM(Tray Sorter Module)、TTM、MSM、3D Vision Module #1/#2、2D Vision Module、PZT Controller #2。(具体构成·位置依设备规格而异)',
          zhTW:'1.3.1. Layout & Component (Internal, Top)\n\nMain·ISO Machine俯視配置:JIG #1/#2、TSM(Tray Sorter Module)、TTM、MSM、3D Vision Module #1/#2、2D Vision Module、PZT Controller #2。(具體構成·位置依設備規格而異)',
          ja:'1.3.1. Layout & Component (Internal, Top)\n\nMain·ISO Machine上面配置:JIG #1/#2、TSM(Tray Sorter Module)、TTM、MSM、3D Vision Module #1/#2、2D Vision Module、PZT Controller #2。(詳細構成・位置は設備仕様により異なります)',
          vi:'1.3.1. Layout & Component (Internal, Top)\n\nBố trí nhìn từ trên của Main·ISO Machine: JIG #1/#2, TSM (Tray Sorter Module), TTM, MSM, 3D Vision Module #1/#2, 2D Vision Module, PZT Controller #2. (Cấu hình/vị trí cụ thể tùy theo spec thiết bị)'
        }},
        {img:cmImg('A','nbga',31),tx:{
          en:'1.3.1. Layout & Component (Motor Direction) — X-axis Overview\n\nShows the +/− motor direction convention for every X/Y-axis: TTM, Multi Sorter, 2D Vision Module, TSM, 3D Vision Module #1/#2, Turret #1/#2, and each Indexer (Load/Empty/Good/Buffer/Reject/Jig) Y-axis (Top view).',
          ko:'1.3.1. Layout & Component (Motor Direction) — X-axis 개요\n\n모든 X/Y-axis의 +/− 방향 기준을 보여줍니다: TTM, Multi Sorter, 2D Vision Module, TSM, 3D Vision Module #1/#2, Turret #1/#2, 각 Indexer(Load/Empty/Good/Buffer/Reject/Jig) Y-axis (Top view).',
          zhCN:'1.3.1. Layout & Component (Motor Direction) — X-axis概览\n\n显示所有X/Y-axis的+/−方向基准:TTM、Multi Sorter、2D Vision Module、TSM、3D Vision Module #1/#2、Turret #1/#2、各Indexer(Load/Empty/Good/Buffer/Reject/Jig)Y-axis(Top view)。',
          zhTW:'1.3.1. Layout & Component (Motor Direction) — X-axis概覽\n\n顯示所有X/Y-axis的+/−方向基準:TTM、Multi Sorter、2D Vision Module、TSM、3D Vision Module #1/#2、Turret #1/#2、各Indexer(Load/Empty/Good/Buffer/Reject/Jig)Y-axis(Top view)。',
          ja:'1.3.1. Layout & Component (Motor Direction) — X-axis概要\n\n全X/Y-axisの+/−方向基準を示します:TTM、Multi Sorter、2D Vision Module、TSM、3D Vision Module #1/#2、Turret #1/#2、各Indexer(Load/Empty/Good/Buffer/Reject/Jig)Y-axis(Top view)。',
          vi:'1.3.1. Layout & Component (Motor Direction) — Tổng quan trục X\n\nHiển thị chuẩn hướng +/− của mọi trục X/Y: TTM, Multi Sorter, 2D Vision Module, TSM, 3D Vision Module #1/#2, Turret #1/#2, và trục Y của mỗi Indexer (Load/Empty/Good/Buffer/Reject/Jig) (Top view).'
        }},
        {img:cmImg('A','nbga',32),tx:{
          en:'1.3.1. Layout & Component (Motor Direction) — Z-axis Overview\n\nShows the Up/Down motor direction convention for each Z-axis: Elevator, MSM, 2D Vision Module, TTM, 3D Vision Module #1/#2, TSM (Top view).',
          ko:'1.3.1. Layout & Component (Motor Direction) — Z-axis 개요\n\n각 Z-axis의 Up/Down 방향 기준을 보여줍니다: Elevator, MSM, 2D Vision Module, TTM, 3D Vision Module #1/#2, TSM (Top view).',
          zhCN:'1.3.1. Layout & Component (Motor Direction) — Z-axis概览\n\n显示各Z-axis的Up/Down方向基准:Elevator、MSM、2D Vision Module、TTM、3D Vision Module #1/#2、TSM(Top view)。',
          zhTW:'1.3.1. Layout & Component (Motor Direction) — Z-axis概覽\n\n顯示各Z-axis的Up/Down方向基準:Elevator、MSM、2D Vision Module、TTM、3D Vision Module #1/#2、TSM(Top view)。',
          ja:'1.3.1. Layout & Component (Motor Direction) — Z-axis概要\n\n各Z-axisのUp/Down方向基準を示します:Elevator、MSM、2D Vision Module、TTM、3D Vision Module #1/#2、TSM(Top view)。',
          vi:'1.3.1. Layout & Component (Motor Direction) — Tổng quan trục Z\n\nHiển thị chuẩn hướng Up/Down của mỗi trục Z: Elevator, MSM, 2D Vision Module, TTM, 3D Vision Module #1/#2, TSM (Top view).'
        }},
        {img:cmImg('A','nbga',33),tx:{
          en:'1.3.1. Layout & Component (2D Vision Module, 25M Camera)\n\nKey components: Main Camera, Lens, Aperture, Coaxial/Oblique Light, Z-axis Motor, Up/Down Limit Sensor, Sensor Object, Photo Sensor, Camera Power, CL/LED Cable.',
          ko:'1.3.1. Layout & Component (2D Vision Module, 25M Camera)\n\n주요 구성: Main Camera, Lens, Aperture, Coaxial/Oblique Light, Z-axis Motor, Up/Down Limit Sensor, Sensor Object, Photo Sensor, Camera Power, CL/LED Cable.',
          zhCN:'1.3.1. Layout & Component (2D Vision Module, 25M Camera)\n\n主要构成:Main Camera、Lens、Aperture、Coaxial/Oblique Light、Z-axis Motor、Up/Down Limit Sensor、Sensor Object、Photo Sensor、Camera Power、CL/LED Cable。',
          zhTW:'1.3.1. Layout & Component (2D Vision Module, 25M Camera)\n\n主要構成:Main Camera、Lens、Aperture、Coaxial/Oblique Light、Z-axis Motor、Up/Down Limit Sensor、Sensor Object、Photo Sensor、Camera Power、CL/LED Cable。',
          ja:'1.3.1. Layout & Component (2D Vision Module, 25M Camera)\n\n主要構成:Main Camera、Lens、Aperture、Coaxial/Oblique Light、Z-axis Motor、Up/Down Limit Sensor、Sensor Object、Photo Sensor、Camera Power、CL/LED Cable。',
          vi:'1.3.1. Layout & Component (2D Vision Module, 25M Camera)\n\nThành phần chính: Main Camera, Lens, Aperture, Coaxial/Oblique Light, Z-axis Motor, Up/Down Limit Sensor, Sensor Object, Photo Sensor, Camera Power, CL/LED Cable.'
        }},
        {img:cmImg('A','nbga',34),tx:{
          en:'1.3.1. Layout & Component (2D Vision Module, 67M Camera)\n\nKey components: Main Camera, Laser, Laser Camera, Laser Mirror, Aperture, Coaxial/Oblique Light, Z-axis Motor, Up/Down Limit Sensor, Sensor Object, Photo Sensor, Camera Power, CXPin/LED Cable.',
          ko:'1.3.1. Layout & Component (2D Vision Module, 67M Camera)\n\n주요 구성: Main Camera, Laser, Laser Camera, Laser Mirror, Aperture, Coaxial/Oblique Light, Z-axis Motor, Up/Down Limit Sensor, Sensor Object, Photo Sensor, Camera Power, CXPin/LED Cable.',
          zhCN:'1.3.1. Layout & Component (2D Vision Module, 67M Camera)\n\n主要构成:Main Camera、Laser、Laser Camera、Laser Mirror、Aperture、Coaxial/Oblique Light、Z-axis Motor、Up/Down Limit Sensor、Sensor Object、Photo Sensor、Camera Power、CXPin/LED Cable。',
          zhTW:'1.3.1. Layout & Component (2D Vision Module, 67M Camera)\n\n主要構成:Main Camera、Laser、Laser Camera、Laser Mirror、Aperture、Coaxial/Oblique Light、Z-axis Motor、Up/Down Limit Sensor、Sensor Object、Photo Sensor、Camera Power、CXPin/LED Cable。',
          ja:'1.3.1. Layout & Component (2D Vision Module, 67M Camera)\n\n主要構成:Main Camera、Laser、Laser Camera、Laser Mirror、Aperture、Coaxial/Oblique Light、Z-axis Motor、Up/Down Limit Sensor、Sensor Object、Photo Sensor、Camera Power、CXPin/LED Cable。',
          vi:'1.3.1. Layout & Component (2D Vision Module, 67M Camera)\n\nThành phần chính: Main Camera, Laser, Laser Camera, Laser Mirror, Aperture, Coaxial/Oblique Light, Z-axis Motor, Up/Down Limit Sensor, Sensor Object, Photo Sensor, Camera Power, CXPin/LED Cable.'
        }},
        {img:cmImg('A','nbga',35),tx:{
          en:'1.3.1. Layout & Component (3D Vision Module, Single Optics) — Camera side\n\nKey components: Main Camera, Aperture, CXPin Cable, Z-axis Motor, Up/Down Limit Sensor, Sensor Object, Photo Sensor, Camera Power.',
          ko:'1.3.1. Layout & Component (3D Vision Module, Single Optics) — Camera 측\n\n주요 구성: Main Camera, Aperture, CXPin Cable, Z-axis Motor, Up/Down Limit Sensor, Sensor Object, Photo Sensor, Camera Power.',
          zhCN:'1.3.1. Layout & Component (3D Vision Module, Single Optics) — Camera侧\n\n主要构成:Main Camera、Aperture、CXPin Cable、Z-axis Motor、Up/Down Limit Sensor、Sensor Object、Photo Sensor、Camera Power。',
          zhTW:'1.3.1. Layout & Component (3D Vision Module, Single Optics) — Camera側\n\n主要構成:Main Camera、Aperture、CXPin Cable、Z-axis Motor、Up/Down Limit Sensor、Sensor Object、Photo Sensor、Camera Power。',
          ja:'1.3.1. Layout & Component (3D Vision Module, Single Optics) — Camera側\n\n主要構成:Main Camera、Aperture、CXPin Cable、Z-axis Motor、Up/Down Limit Sensor、Sensor Object、Photo Sensor、Camera Power。',
          vi:'1.3.1. Layout & Component (3D Vision Module, Single Optics) — Phía Camera\n\nThành phần chính: Main Camera, Aperture, CXPin Cable, Z-axis Motor, Up/Down Limit Sensor, Sensor Object, Photo Sensor, Camera Power.'
        }},
        {img:cmImg('A','nbga',36),tx:{
          en:'1.3.1. Layout & Component (3D Vision Module, Single Optics) — Optics side\n\nKey components: Coaxial/Oblique Light, B/S (Beam Splitter), Laser, Laser Mirror, Laser Camera, Reference Mirror (with angle dial), PZT Stage, Micrometer, Lens.',
          ko:'1.3.1. Layout & Component (3D Vision Module, Single Optics) — 광학계 측\n\n주요 구성: Coaxial/Oblique Light, B/S(Beam Splitter), Laser, Laser Mirror, Laser Camera, Reference Mirror(각도 Dial 포함), PZT Stage, Micrometer, Lens.',
          zhCN:'1.3.1. Layout & Component (3D Vision Module, Single Optics) — 光学侧\n\n主要构成:Coaxial/Oblique Light、B/S(Beam Splitter)、Laser、Laser Mirror、Laser Camera、Reference Mirror(含角度Dial)、PZT Stage、Micrometer、Lens。',
          zhTW:'1.3.1. Layout & Component (3D Vision Module, Single Optics) — 光學側\n\n主要構成:Coaxial/Oblique Light、B/S(Beam Splitter)、Laser、Laser Mirror、Laser Camera、Reference Mirror(含角度Dial)、PZT Stage、Micrometer、Lens。',
          ja:'1.3.1. Layout & Component (3D Vision Module, Single Optics) — 光学系側\n\n主要構成:Coaxial/Oblique Light、B/S(Beam Splitter)、Laser、Laser Mirror、Laser Camera、Reference Mirror(角度Dial付き)、PZT Stage、Micrometer、Lens。',
          vi:'1.3.1. Layout & Component (3D Vision Module, Single Optics) — Phía quang học\n\nThành phần chính: Coaxial/Oblique Light, B/S (Beam Splitter), Laser, Laser Mirror, Laser Camera, Reference Mirror (kèm Angle Dial), PZT Stage, Micrometer, Lens.'
        }},
        {img:cmImg('A','nbga',37),tx:{
          en:'1.3.1. Layout & Component (3D Vision Module, Turret Optics) — Camera side\n\nKey components: Main Camera, Aperture, CXPin Cable, Z-axis Motor, Up/Down Limit Sensor, Sensor Object, Photo Sensor, Camera Power.',
          ko:'1.3.1. Layout & Component (3D Vision Module, Turret Optics) — Camera 측\n\n주요 구성: Main Camera, Aperture, CXPin Cable, Z-axis Motor, Up/Down Limit Sensor, Sensor Object, Photo Sensor, Camera Power.',
          zhCN:'1.3.1. Layout & Component (3D Vision Module, Turret Optics) — Camera侧\n\n主要构成:Main Camera、Aperture、CXPin Cable、Z-axis Motor、Up/Down Limit Sensor、Sensor Object、Photo Sensor、Camera Power。',
          zhTW:'1.3.1. Layout & Component (3D Vision Module, Turret Optics) — Camera側\n\n主要構成:Main Camera、Aperture、CXPin Cable、Z-axis Motor、Up/Down Limit Sensor、Sensor Object、Photo Sensor、Camera Power。',
          ja:'1.3.1. Layout & Component (3D Vision Module, Turret Optics) — Camera側\n\n主要構成:Main Camera、Aperture、CXPin Cable、Z-axis Motor、Up/Down Limit Sensor、Sensor Object、Photo Sensor、Camera Power。',
          vi:'1.3.1. Layout & Component (3D Vision Module, Turret Optics) — Phía Camera\n\nThành phần chính: Main Camera, Aperture, CXPin Cable, Z-axis Motor, Up/Down Limit Sensor, Sensor Object, Photo Sensor, Camera Power.'
        }},
        {img:cmImg('A','nbga',38),tx:{
          en:'1.3.1. Layout & Component (3D Vision Module, Turret Optics) — Optics side\n\nKey components: Coaxial/Oblique Light, B/S (Beam Splitter), Laser, Laser Mirror, Laser Camera, Reference Mirror (with angle dial), Turret Motor, Objective Lens, PZT Stage, Micrometer, Lens (multiple magnifications: X5.5, X4.8/X6.7).',
          ko:'1.3.1. Layout & Component (3D Vision Module, Turret Optics) — 광학계 측\n\n주요 구성: Coaxial/Oblique Light, B/S(Beam Splitter), Laser, Laser Mirror, Laser Camera, Reference Mirror(각도 Dial 포함), Turret Motor, Objective Lens, PZT Stage, Micrometer, Lens(X5.5, X4.8/X6.7 등 배율별).',
          zhCN:'1.3.1. Layout & Component (3D Vision Module, Turret Optics) — 光学侧\n\n主要构成:Coaxial/Oblique Light、B/S(Beam Splitter)、Laser、Laser Mirror、Laser Camera、Reference Mirror(含角度Dial)、Turret Motor、Objective Lens、PZT Stage、Micrometer、Lens(X5.5、X4.8/X6.7等倍率)。',
          zhTW:'1.3.1. Layout & Component (3D Vision Module, Turret Optics) — 光學側\n\n主要構成:Coaxial/Oblique Light、B/S(Beam Splitter)、Laser、Laser Mirror、Laser Camera、Reference Mirror(含角度Dial)、Turret Motor、Objective Lens、PZT Stage、Micrometer、Lens(X5.5、X4.8/X6.7等倍率)。',
          ja:'1.3.1. Layout & Component (3D Vision Module, Turret Optics) — 光学系側\n\n主要構成:Coaxial/Oblique Light、B/S(Beam Splitter)、Laser、Laser Mirror、Laser Camera、Reference Mirror(角度Dial付き)、Turret Motor、Objective Lens、PZT Stage、Micrometer、Lens(X5.5、X4.8/X6.7等倍率)。',
          vi:'1.3.1. Layout & Component (3D Vision Module, Turret Optics) — Phía quang học\n\nThành phần chính: Coaxial/Oblique Light, B/S (Beam Splitter), Laser, Laser Mirror, Laser Camera, Reference Mirror (kèm Angle Dial), Turret Motor, Objective Lens, PZT Stage, Micrometer, Lens (nhiều độ phóng đại: X5.5, X4.8/X6.7).'
        }},
        {img:cmImg('A','nbga',39),tx:{
          en:'1.3.1. Layout & Component (TSM: Tray Sorter Module)\n\nKey components: Z-axis Motor, Coupler, Speed Controller, Up/Down Cylinder, Shaft & Spring, Ball Bushing, Stopper, Ejector, Gripper (with Cylinder & Auto Switch Sensor), PCB Board, Tray Check Sensor, Photo/Magnetic Sensor, Damper.',
          ko:'1.3.1. Layout & Component (TSM: Tray Sorter Module)\n\n주요 구성: Z-axis Motor, Coupler, Speed Controller, Up/Down Cylinder, Shaft & Spring, Ball Bushing, Stopper, Ejector, Gripper(Cylinder & Auto Switch Sensor 포함), PCB Board, Tray Check Sensor, Photo/Magnetic Sensor, Damper.',
          zhCN:'1.3.1. Layout & Component (TSM: Tray Sorter Module)\n\n主要构成:Z-axis Motor、Coupler、Speed Controller、Up/Down Cylinder、Shaft & Spring、Ball Bushing、Stopper、Ejector、Gripper(含Cylinder & Auto Switch Sensor)、PCB Board、Tray Check Sensor、Photo/Magnetic Sensor、Damper。',
          zhTW:'1.3.1. Layout & Component (TSM: Tray Sorter Module)\n\n主要構成:Z-axis Motor、Coupler、Speed Controller、Up/Down Cylinder、Shaft & Spring、Ball Bushing、Stopper、Ejector、Gripper(含Cylinder & Auto Switch Sensor)、PCB Board、Tray Check Sensor、Photo/Magnetic Sensor、Damper。',
          ja:'1.3.1. Layout & Component (TSM: Tray Sorter Module)\n\n主要構成:Z-axis Motor、Coupler、Speed Controller、Up/Down Cylinder、Shaft & Spring、Ball Bushing、Stopper、Ejector、Gripper(Cylinder & Auto Switch Sensor含む)、PCB Board、Tray Check Sensor、Photo/Magnetic Sensor、Damper。',
          vi:'1.3.1. Layout & Component (TSM: Tray Sorter Module)\n\nThành phần chính: Z-axis Motor, Coupler, Speed Controller, Up/Down Cylinder, Shaft & Spring, Ball Bushing, Stopper, Ejector, Gripper (kèm Cylinder & Auto Switch Sensor), PCB Board, Tray Check Sensor, Photo/Magnetic Sensor, Damper.'
        }},
        {img:cmImg('A','nbga',40),tx:{
          en:'1.3.1. Layout & Component (TTM: Tray Transfer Module)\n\nKey components: Z-axis Motor, Gripper (with Cylinder & Auto Switch Sensor), Speed Controller, Plate, Coupler, Cross Roller Guide, Ball Bushing, Shaft & Spring, Stopper, Tray Check Sensor, Photo/Magnetic Sensor.',
          ko:'1.3.1. Layout & Component (TTM: Tray Transfer Module)\n\n주요 구성: Z-axis Motor, Gripper(Cylinder & Auto Switch Sensor 포함), Speed Controller, Plate, Coupler, Cross Roller Guide, Ball Bushing, Shaft & Spring, Stopper, Tray Check Sensor, Photo/Magnetic Sensor.',
          zhCN:'1.3.1. Layout & Component (TTM: Tray Transfer Module)\n\n主要构成:Z-axis Motor、Gripper(含Cylinder & Auto Switch Sensor)、Speed Controller、Plate、Coupler、Cross Roller Guide、Ball Bushing、Shaft & Spring、Stopper、Tray Check Sensor、Photo/Magnetic Sensor。',
          zhTW:'1.3.1. Layout & Component (TTM: Tray Transfer Module)\n\n主要構成:Z-axis Motor、Gripper(含Cylinder & Auto Switch Sensor)、Speed Controller、Plate、Coupler、Cross Roller Guide、Ball Bushing、Shaft & Spring、Stopper、Tray Check Sensor、Photo/Magnetic Sensor。',
          ja:'1.3.1. Layout & Component (TTM: Tray Transfer Module)\n\n主要構成:Z-axis Motor、Gripper(Cylinder & Auto Switch Sensor含む)、Speed Controller、Plate、Coupler、Cross Roller Guide、Ball Bushing、Shaft & Spring、Stopper、Tray Check Sensor、Photo/Magnetic Sensor。',
          vi:'1.3.1. Layout & Component (TTM: Tray Transfer Module)\n\nThành phần chính: Z-axis Motor, Gripper (kèm Cylinder & Auto Switch Sensor), Speed Controller, Plate, Coupler, Cross Roller Guide, Ball Bushing, Shaft & Spring, Stopper, Tray Check Sensor, Photo/Magnetic Sensor.'
        }},
        {img:cmImg('A','nbga',41),tx:{
          en:'1.3.1. Layout & Component (MSM: Multi Sorter Module)\n\nKey components: Z-axis Motor, X-axis Motor (Picker Gap Motor), Picker (with Cylinder & Auto Switch Sensor), Coupler, PCB Board, Speed Controller, Vacuum Ejector, Solenoid Valve, Air Filter, Photo/Magnetic Sensor.',
          ko:'1.3.1. Layout & Component (MSM: Multi Sorter Module)\n\n주요 구성: Z-axis Motor, X-axis Motor(Picker Gap Motor), Picker(Cylinder & Auto Switch Sensor 포함), Coupler, PCB Board, Speed Controller, Vacuum Ejector, Solenoid Valve, Air Filter, Photo/Magnetic Sensor.',
          zhCN:'1.3.1. Layout & Component (MSM: Multi Sorter Module)\n\n主要构成:Z-axis Motor、X-axis Motor(Picker Gap Motor)、Picker(含Cylinder & Auto Switch Sensor)、Coupler、PCB Board、Speed Controller、Vacuum Ejector、Solenoid Valve、Air Filter、Photo/Magnetic Sensor。',
          zhTW:'1.3.1. Layout & Component (MSM: Multi Sorter Module)\n\n主要構成:Z-axis Motor、X-axis Motor(Picker Gap Motor)、Picker(含Cylinder & Auto Switch Sensor)、Coupler、PCB Board、Speed Controller、Vacuum Ejector、Solenoid Valve、Air Filter、Photo/Magnetic Sensor。',
          ja:'1.3.1. Layout & Component (MSM: Multi Sorter Module)\n\n主要構成:Z-axis Motor、X-axis Motor(Picker Gap Motor)、Picker(Cylinder & Auto Switch Sensor含む)、Coupler、PCB Board、Speed Controller、Vacuum Ejector、Solenoid Valve、Air Filter、Photo/Magnetic Sensor。',
          vi:'1.3.1. Layout & Component (MSM: Multi Sorter Module)\n\nThành phần chính: Z-axis Motor, X-axis Motor (Picker Gap Motor), Picker (kèm Cylinder & Auto Switch Sensor), Coupler, PCB Board, Speed Controller, Vacuum Ejector, Solenoid Valve, Air Filter, Photo/Magnetic Sensor.'
        }},
        {img:cmImg('A','nbga',42),tx:{
          en:'1.3.1. Layout & Component (Jig Module)\n\nKey components: LTS Target (Long Term Stability), Y-axis Motor, JIG Back Side, PCB Board, Inner Clamp, Tray Check Sensor, Push Cylinder & Auto Switch Sensor, Cableveyor, (+)/(−) Limit Sensor, Home Sensor, Photo/Magnetic Sensor.',
          ko:'1.3.1. Layout & Component (Jig Module)\n\n주요 구성: LTS Target(Long Term Stability), Y-axis Motor, JIG Back Side, PCB Board, Inner Clamp, Tray Check Sensor, Push Cylinder & Auto Switch Sensor, Cableveyor, (+)/(−) Limit Sensor, Home Sensor, Photo/Magnetic Sensor.',
          zhCN:'1.3.1. Layout & Component (Jig Module)\n\n主要构成:LTS Target(Long Term Stability)、Y-axis Motor、JIG Back Side、PCB Board、Inner Clamp、Tray Check Sensor、Push Cylinder & Auto Switch Sensor、Cableveyor、(+)/(−) Limit Sensor、Home Sensor、Photo/Magnetic Sensor。',
          zhTW:'1.3.1. Layout & Component (Jig Module)\n\n主要構成:LTS Target(Long Term Stability)、Y-axis Motor、JIG Back Side、PCB Board、Inner Clamp、Tray Check Sensor、Push Cylinder & Auto Switch Sensor、Cableveyor、(+)/(−) Limit Sensor、Home Sensor、Photo/Magnetic Sensor。',
          ja:'1.3.1. Layout & Component (Jig Module)\n\n主要構成:LTS Target(Long Term Stability)、Y-axis Motor、JIG Back Side、PCB Board、Inner Clamp、Tray Check Sensor、Push Cylinder & Auto Switch Sensor、Cableveyor、(+)/(−) Limit Sensor、Home Sensor、Photo/Magnetic Sensor。',
          vi:'1.3.1. Layout & Component (Jig Module)\n\nThành phần chính: LTS Target (Long Term Stability), Y-axis Motor, JIG Back Side, PCB Board, Inner Clamp, Tray Check Sensor, Push Cylinder & Auto Switch Sensor, Cableveyor, (+)/(−) Limit Sensor, Home Sensor, Photo/Magnetic Sensor.'
        }},
        {img:cmImg('A','nbga',43),tx:{
          en:'1.3.1. Layout & Component (Indexer)\n\nKey components: Forward/Backward Finger Clamp, Push Cylinder, Speed Controller, Cableveyor, Finger Clamp Sensor, Auto Switch/Photo/Magnetic Sensor.',
          ko:'1.3.1. Layout & Component (Indexer)\n\n주요 구성: Forward/Backward Finger Clamp, Push Cylinder, Speed Controller, Cableveyor, Finger Clamp Sensor, Auto Switch/Photo/Magnetic Sensor.',
          zhCN:'1.3.1. Layout & Component (Indexer)\n\n主要构成:Forward/Backward Finger Clamp、Push Cylinder、Speed Controller、Cableveyor、Finger Clamp Sensor、Auto Switch/Photo/Magnetic Sensor。',
          zhTW:'1.3.1. Layout & Component (Indexer)\n\n主要構成:Forward/Backward Finger Clamp、Push Cylinder、Speed Controller、Cableveyor、Finger Clamp Sensor、Auto Switch/Photo/Magnetic Sensor。',
          ja:'1.3.1. Layout & Component (Indexer)\n\n主要構成:Forward/Backward Finger Clamp、Push Cylinder、Speed Controller、Cableveyor、Finger Clamp Sensor、Auto Switch/Photo/Magnetic Sensor。',
          vi:'1.3.1. Layout & Component (Indexer)\n\nThành phần chính: Forward/Backward Finger Clamp, Push Cylinder, Speed Controller, Cableveyor, Finger Clamp Sensor, Auto Switch/Photo/Magnetic Sensor.'
        }},
        {img:cmImg('A','nbga',44),tx:{
          en:'1.3.1. Layout & Component (Elevator)\n\nKey components (Motor-type and Cylinder-type variants shown): Z-axis Motor, Plate, Belt, Pulley, Ball Bearing, Ball Screw, (+)/(−) Limit Sensor, Speed Controller, Auto Switch/Magnetic/Photo Sensor.',
          ko:'1.3.1. Layout & Component (Elevator)\n\n주요 구성(Motor 방식·Cylinder 방식 모두 표시): Z-axis Motor, Plate, Belt, Pulley, Ball Bearing, Ball Screw, (+)/(−) Limit Sensor, Speed Controller, Auto Switch/Magnetic/Photo Sensor.',
          zhCN:'1.3.1. Layout & Component (Elevator)\n\n主要构成(同时展示Motor型·Cylinder型):Z-axis Motor、Plate、Belt、Pulley、Ball Bearing、Ball Screw、(+)/(−) Limit Sensor、Speed Controller、Auto Switch/Magnetic/Photo Sensor。',
          zhTW:'1.3.1. Layout & Component (Elevator)\n\n主要構成(同時展示Motor型·Cylinder型):Z-axis Motor、Plate、Belt、Pulley、Ball Bearing、Ball Screw、(+)/(−) Limit Sensor、Speed Controller、Auto Switch/Magnetic/Photo Sensor。',
          ja:'1.3.1. Layout & Component (Elevator)\n\n主要構成(Motorタイプ・Cylinderタイプ両方表示):Z-axis Motor、Plate、Belt、Pulley、Ball Bearing、Ball Screw、(+)/(−) Limit Sensor、Speed Controller、Auto Switch/Magnetic/Photo Sensor。',
          vi:'1.3.1. Layout & Component (Elevator)\n\nThành phần chính (hiển thị cả loại Motor và loại Cylinder): Z-axis Motor, Plate, Belt, Pulley, Ball Bearing, Ball Screw, (+)/(−) Limit Sensor, Speed Controller, Auto Switch/Magnetic/Photo Sensor.'
        }},
        {img:cmImg('A','nbga',45),tx:{
          en:'1.3.1. Layout & Component (Stacker)\n\nKey components: Stacker, Load Stacker Speed Controller, Empty Stacker Speed Controller, Tray Check Sensor, Photo/Magnetic Sensor, Stacker Clamp Sensor.',
          ko:'1.3.1. Layout & Component (Stacker)\n\n주요 구성: Stacker, Load Stacker Speed Controller, Empty Stacker Speed Controller, Tray Check Sensor, Photo/Magnetic Sensor, Stacker Clamp Sensor.',
          zhCN:'1.3.1. Layout & Component (Stacker)\n\n主要构成:Stacker、Load Stacker Speed Controller、Empty Stacker Speed Controller、Tray Check Sensor、Photo/Magnetic Sensor、Stacker Clamp Sensor。',
          zhTW:'1.3.1. Layout & Component (Stacker)\n\n主要構成:Stacker、Load Stacker Speed Controller、Empty Stacker Speed Controller、Tray Check Sensor、Photo/Magnetic Sensor、Stacker Clamp Sensor。',
          ja:'1.3.1. Layout & Component (Stacker)\n\n主要構成:Stacker、Load Stacker Speed Controller、Empty Stacker Speed Controller、Tray Check Sensor、Photo/Magnetic Sensor、Stacker Clamp Sensor。',
          vi:'1.3.1. Layout & Component (Stacker)\n\nThành phần chính: Stacker, Load Stacker Speed Controller, Empty Stacker Speed Controller, Tray Check Sensor, Photo/Magnetic Sensor, Stacker Clamp Sensor.'
        }},
        {img:cmImg('A','nbga',46),tx:{
          en:'1.3.1. Layout & Component (KVM, TN-UCNV-104D-PES)\n\nWiring diagram for the shared KVM unit connecting the Front Monitor/Keyboard/Mouse across Host/2D/3D#1/3D#2 PCs via the Docking Panel. Refer to the image for exact cable routing.',
          ko:'1.3.1. Layout & Component (KVM, TN-UCNV-104D-PES)\n\nDocking Panel을 통해 Host/2D/3D#1/3D#2 PC 간 Front Monitor·Keyboard·Mouse를 공유하는 KVM 배선도입니다. 정확한 배선 경로는 그림을 참고하세요.',
          zhCN:'1.3.1. Layout & Component (KVM, TN-UCNV-104D-PES)\n\n透过Docking Panel在Host/2D/3D#1/3D#2 PC间共享Front Monitor·Keyboard·Mouse的KVM接线图。具体走线请参考图示。',
          zhTW:'1.3.1. Layout & Component (KVM, TN-UCNV-104D-PES)\n\n透過Docking Panel在Host/2D/3D#1/3D#2 PC間共享Front Monitor·Keyboard·Mouse的KVM接線圖。具體走線請參考圖示。',
          ja:'1.3.1. Layout & Component (KVM, TN-UCNV-104D-PES)\n\nDocking Panelを介してHost/2D/3D#1/3D#2 PC間でFront Monitor・Keyboard・Mouseを共有するKVM配線図です。正確な配線経路は図を参照してください。',
          vi:'1.3.1. Layout & Component (KVM, TN-UCNV-104D-PES)\n\nSơ đồ đấu dây KVM chia sẻ Front Monitor·Keyboard·Mouse giữa Host/2D/3D#1/3D#2 PC qua Docking Panel. Tham khảo hình để biết đường dây chính xác.'
        }},
        {img:cmImg('A','nbga',47),tx:{
          en:'1.3.1. Layout & Component (KVM, MAAG-Z114-4CH-DIO)\n\nWiring diagram for the KVM-to-Monitor direct connections across Host/2D/3D#1/3D#2 PCs, including HDMI and USB cabling. Refer to the image for exact cable routing.',
          ko:'1.3.1. Layout & Component (KVM, MAAG-Z114-4CH-DIO)\n\nHost/2D/3D#1/3D#2 PC 간 KVM-Monitor 직결 배선도입니다(HDMI, USB Cable 포함). 정확한 배선 경로는 그림을 참고하세요.',
          zhCN:'1.3.1. Layout & Component (KVM, MAAG-Z114-4CH-DIO)\n\nHost/2D/3D#1/3D#2 PC间KVM-Monitor直连接线图(含HDMI、USB Cable)。具体走线请参考图示。',
          zhTW:'1.3.1. Layout & Component (KVM, MAAG-Z114-4CH-DIO)\n\nHost/2D/3D#1/3D#2 PC間KVM-Monitor直連接線圖(含HDMI、USB Cable)。具體走線請參考圖示。',
          ja:'1.3.1. Layout & Component (KVM, MAAG-Z114-4CH-DIO)\n\nHost/2D/3D#1/3D#2 PC間のKVM-Monitor直結配線図です(HDMI、USB Cable含む)。正確な配線経路は図を参照してください。',
          vi:'1.3.1. Layout & Component (KVM, MAAG-Z114-4CH-DIO)\n\nSơ đồ đấu dây kết nối trực tiếp KVM-Monitor giữa Host/2D/3D#1/3D#2 PC (gồm cáp HDMI, USB). Tham khảo hình để biết đường dây chính xác.'
        }},
        {img:cmImg('A','nbga',48),tx:{
          en:'1.3.1. Layout & Component (HUB)\n\nNetwork wiring diagram via the HP 1408-8G switch (8-port), connecting Host/3D#1/3D#2/2D PCs and AF Controllers #1/#2. Refer to the image for exact cable routing.',
          ko:'1.3.1. Layout & Component (HUB)\n\nHP 1408-8G Switch(8포트)를 통한 Host/3D#1/3D#2/2D PC 및 AF Controller #1/#2 네트워크 배선도입니다. 정확한 배선 경로는 그림을 참고하세요.',
          zhCN:'1.3.1. Layout & Component (HUB)\n\n透过HP 1408-8G Switch(8端口)连接Host/3D#1/3D#2/2D PC及AF Controller #1/#2的网络接线图。具体走线请参考图示。',
          zhTW:'1.3.1. Layout & Component (HUB)\n\n透過HP 1408-8G Switch(8埠)連接Host/3D#1/3D#2/2D PC及AF Controller #1/#2的網路接線圖。具體走線請參考圖示。',
          ja:'1.3.1. Layout & Component (HUB)\n\nHP 1408-8G Switch(8ポート)を介したHost/3D#1/3D#2/2D PC及びAF Controller #1/#2のネットワーク配線図です。正確な配線経路は図を参照してください。',
          vi:'1.3.1. Layout & Component (HUB)\n\nSơ đồ đấu dây mạng qua HP 1408-8G Switch (8 cổng), kết nối Host/3D#1/3D#2/2D PC và AF Controller #1/#2. Tham khảo hình để biết đường dây chính xác.'
        }},
        {img:cmImg('A','nbga',49),tx:{
          en:'1.3.1. Layout & Component (PI PZT Controller, PZT E-754)\n\nWiring diagram: PZT Stage ↔ 3D LED Controller #1/#2 ↔ 3D Vision PC #1/#2, via the SYNC Board and 3D TRG Cables. Refer to the image for exact cable routing.',
          ko:'1.3.1. Layout & Component (PI PZT Controller, PZT E-754)\n\nPZT Stage ↔ 3D LED Controller #1/#2 ↔ 3D Vision PC #1/#2 배선도입니다(SYNC Board, 3D TRG Cable 경유). 정확한 배선 경로는 그림을 참고하세요.',
          zhCN:'1.3.1. Layout & Component (PI PZT Controller, PZT E-754)\n\nPZT Stage ↔ 3D LED Controller #1/#2 ↔ 3D Vision PC #1/#2的接线图(经由SYNC Board、3D TRG Cable)。具体走线请参考图示。',
          zhTW:'1.3.1. Layout & Component (PI PZT Controller, PZT E-754)\n\nPZT Stage ↔ 3D LED Controller #1/#2 ↔ 3D Vision PC #1/#2的接線圖(經由SYNC Board、3D TRG Cable)。具體走線請參考圖示。',
          ja:'1.3.1. Layout & Component (PI PZT Controller, PZT E-754)\n\nPZT Stage ↔ 3D LED Controller #1/#2 ↔ 3D Vision PC #1/#2の配線図です(SYNC Board、3D TRG Cable経由)。正確な配線経路は図を参照してください。',
          vi:'1.3.1. Layout & Component (PI PZT Controller, PZT E-754)\n\nSơ đồ đấu dây PZT Stage ↔ 3D LED Controller #1/#2 ↔ 3D Vision PC #1/#2 (qua SYNC Board, 3D TRG Cable). Tham khảo hình để biết đường dây chính xác.'
        }},
        {img:cmImg('A','nbga',50),tx:{
          en:'1.3.1. Layout & Component (Nanofaktur PZT Controller, EBD-120210)\n\nWiring diagram: PZT Stage ↔ 3D LED Controller #1/#2 ↔ 3D Vision PC #1/#2, via the SYNC Board and 3D TRG Cables. Refer to the image for exact cable routing.',
          ko:'1.3.1. Layout & Component (Nanofaktur PZT Controller, EBD-120210)\n\nPZT Stage ↔ 3D LED Controller #1/#2 ↔ 3D Vision PC #1/#2 배선도입니다(SYNC Board, 3D TRG Cable 경유). 정확한 배선 경로는 그림을 참고하세요.',
          zhCN:'1.3.1. Layout & Component (Nanofaktur PZT Controller, EBD-120210)\n\nPZT Stage ↔ 3D LED Controller #1/#2 ↔ 3D Vision PC #1/#2的接线图(经由SYNC Board、3D TRG Cable)。具体走线请参考图示。',
          zhTW:'1.3.1. Layout & Component (Nanofaktur PZT Controller, EBD-120210)\n\nPZT Stage ↔ 3D LED Controller #1/#2 ↔ 3D Vision PC #1/#2的接線圖(經由SYNC Board、3D TRG Cable)。具體走線請參考圖示。',
          ja:'1.3.1. Layout & Component (Nanofaktur PZT Controller, EBD-120210)\n\nPZT Stage ↔ 3D LED Controller #1/#2 ↔ 3D Vision PC #1/#2の配線図です(SYNC Board、3D TRG Cable経由)。正確な配線経路は図を参照してください。',
          vi:'1.3.1. Layout & Component (Nanofaktur PZT Controller, EBD-120210)\n\nSơ đồ đấu dây PZT Stage ↔ 3D LED Controller #1/#2 ↔ 3D Vision PC #1/#2 (qua SYNC Board, 3D TRG Cable). Tham khảo hình để biết đường dây chính xác.'
        }},
        {img:cmImg('A','nbga',51),tx:{
          en:'1.3.1. Layout & Component (Host PC) — AF/Barcode/KVM Wiring\n\nWiring diagram for the Host PC\'s serial connections to AF Controller #1/#2 (RS232, COM1/COM2), Barcode reader, and KVM Switch. Refer to the image for exact cable routing.',
          ko:'1.3.1. Layout & Component (Host PC) — AF·Barcode·KVM 배선\n\nHost PC와 AF Controller #1/#2(RS232, COM1/COM2), Barcode 리더, KVM Switch 간 직렬 배선도입니다. 정확한 배선 경로는 그림을 참고하세요.',
          zhCN:'1.3.1. Layout & Component (Host PC) — AF·Barcode·KVM接线\n\nHost PC与AF Controller #1/#2(RS232、COM1/COM2)、Barcode读取器、KVM Switch之间的串行接线图。具体走线请参考图示。',
          zhTW:'1.3.1. Layout & Component (Host PC) — AF·Barcode·KVM接線\n\nHost PC與AF Controller #1/#2(RS232、COM1/COM2)、Barcode讀取器、KVM Switch之間的序列接線圖。具體走線請參考圖示。',
          ja:'1.3.1. Layout & Component (Host PC) — AF・Barcode・KVM配線\n\nHost PCとAF Controller #1/#2(RS232、COM1/COM2)、Barcodeリーダー、KVM Switch間のシリアル配線図です。正確な配線経路は図を参照してください。',
          vi:'1.3.1. Layout & Component (Host PC) — Đấu dây AF·Barcode·KVM\n\nSơ đồ đấu dây nối tiếp giữa Host PC với AF Controller #1/#2 (RS232, COM1/COM2), đầu đọc Barcode, KVM Switch. Tham khảo hình để biết đường dây chính xác.'
        }},
        {img:cmImg('A','nbga',52),tx:{
          en:'1.3.1. Layout & Component (Host PC) — IO Module/Motor Driver Wiring\n\nWiring diagram for the Host PC\'s connections to IO Modules and Motor Drivers (via PCIRTEXIO/PCI-R3204 cards), plus LAN to AF Controller #1/#2 and VRS. Refer to the image for exact cable routing.',
          ko:'1.3.1. Layout & Component (Host PC) — IO Module·Motor Driver 배선\n\nHost PC와 IO Module·Motor Driver(PCIRTEXIO/PCI-R3204 카드 경유) 및 AF Controller #1/#2·VRS로의 LAN 배선도입니다. 정확한 배선 경로는 그림을 참고하세요.',
          zhCN:'1.3.1. Layout & Component (Host PC) — IO Module·Motor Driver接线\n\nHost PC与IO Module·Motor Driver(经由PCIRTEXIO/PCI-R3204卡)及至AF Controller #1/#2·VRS的LAN接线图。具体走线请参考图示。',
          zhTW:'1.3.1. Layout & Component (Host PC) — IO Module·Motor Driver接線\n\nHost PC與IO Module·Motor Driver(經由PCIRTEXIO/PCI-R3204卡)及至AF Controller #1/#2·VRS的LAN接線圖。具體走線請參考圖示。',
          ja:'1.3.1. Layout & Component (Host PC) — IO Module・Motor Driver配線\n\nHost PCとIO Module・Motor Driver(PCIRTEXIO/PCI-R3204カード経由)及びAF Controller #1/#2・VRSへのLAN配線図です。正確な配線経路は図を参照してください。',
          vi:'1.3.1. Layout & Component (Host PC) — Đấu dây IO Module·Motor Driver\n\nSơ đồ đấu dây giữa Host PC với IO Module·Motor Driver (qua card PCIRTEXIO/PCI-R3204) và LAN đến AF Controller #1/#2·VRS. Tham khảo hình để biết đường dây chính xác.'
        }},
        {img:cmImg('A','nbga',53),tx:{
          en:'1.3.1. Layout & Component (2D Vision PC)\n\nWiring diagram for the 2D Vision PC: Vision Camera ↔ Grab Board, LED Controller ↔ Sync Board, IO Module, KVM Switch. Refer to the image for exact cable routing.',
          ko:'1.3.1. Layout & Component (2D Vision PC)\n\n2D Vision PC 배선도입니다: Vision Camera ↔ Grab Board, LED Controller ↔ Sync Board, IO Module, KVM Switch. 정확한 배선 경로는 그림을 참고하세요.',
          zhCN:'1.3.1. Layout & Component (2D Vision PC)\n\n2D Vision PC接线图:Vision Camera ↔ Grab Board、LED Controller ↔ Sync Board、IO Module、KVM Switch。具体走线请参考图示。',
          zhTW:'1.3.1. Layout & Component (2D Vision PC)\n\n2D Vision PC接線圖:Vision Camera ↔ Grab Board、LED Controller ↔ Sync Board、IO Module、KVM Switch。具體走線請參考圖示。',
          ja:'1.3.1. Layout & Component (2D Vision PC)\n\n2D Vision PC配線図です:Vision Camera ↔ Grab Board、LED Controller ↔ Sync Board、IO Module、KVM Switch。正確な配線経路は図を参照してください。',
          vi:'1.3.1. Layout & Component (2D Vision PC)\n\nSơ đồ đấu dây 2D Vision PC: Vision Camera ↔ Grab Board, LED Controller ↔ Sync Board, IO Module, KVM Switch. Tham khảo hình để biết đường dây chính xác.'
        }},
        {img:cmImg('A','nbga',54),tx:{
          en:'1.3.1. Layout & Component (3D Vision PC)\n\nWiring diagram for the 3D Vision PC: Vision Camera ↔ Grab Board, LED Controller/PZT Controller ↔ Sync Board, IO Module, KVM Switch. The number/type of cables depends on the Grab Board or Camera used — refer to the image for exact routing.',
          ko:'1.3.1. Layout & Component (3D Vision PC)\n\n3D Vision PC 배선도입니다: Vision Camera ↔ Grab Board, LED Controller/PZT Controller ↔ Sync Board, IO Module, KVM Switch. Cable 수량·방식은 사용하는 Grab Board·Camera에 따라 다르니 정확한 배선 경로는 그림을 참고하세요.',
          zhCN:'1.3.1. Layout & Component (3D Vision PC)\n\n3D Vision PC接线图:Vision Camera ↔ Grab Board、LED Controller/PZT Controller ↔ Sync Board、IO Module、KVM Switch。Cable数量·方式依所用Grab Board·Camera而异,具体走线请参考图示。',
          zhTW:'1.3.1. Layout & Component (3D Vision PC)\n\n3D Vision PC接線圖:Vision Camera ↔ Grab Board、LED Controller/PZT Controller ↔ Sync Board、IO Module、KVM Switch。Cable數量·方式依所用Grab Board·Camera而異,具體走線請參考圖示。',
          ja:'1.3.1. Layout & Component (3D Vision PC)\n\n3D Vision PC配線図です:Vision Camera ↔ Grab Board、LED Controller/PZT Controller ↔ Sync Board、IO Module、KVM Switch。Cableの本数・方式は使用するGrab Board・Cameraにより異なるため、正確な配線経路は図を参照してください。',
          vi:'1.3.1. Layout & Component (3D Vision PC)\n\nSơ đồ đấu dây 3D Vision PC: Vision Camera ↔ Grab Board, LED Controller/PZT Controller ↔ Sync Board, IO Module, KVM Switch. Số lượng/loại cáp tùy theo Grab Board·Camera sử dụng — tham khảo hình để biết đường dây chính xác.'
        }},
        {img:cmImg('A','nbga',55),tx:{
          en:'Introduce — this section covers Hardware Configuration & System: Layout & Component, Safety Sticker, Power Supply & Interlock System, and Equipment Automatic Sequence.',
          ko:'Introduce — Hardware Configuration & System: Layout & Component, Safety Sticker, Power Supply & Interlock System, Equipment Automatic Sequence를 다룹니다.',
          zhCN:'Introduce——本节介绍Hardware Configuration & System:Layout & Component、Safety Sticker、Power Supply & Interlock System、Equipment Automatic Sequence。',
          zhTW:'Introduce——本節介紹Hardware Configuration & System:Layout & Component、Safety Sticker、Power Supply & Interlock System、Equipment Automatic Sequence。',
          ja:'Introduce——本節ではHardware Configuration & System:Layout & Component、Safety Sticker、Power Supply & Interlock System、Equipment Automatic Sequenceを扱います。',
          vi:'Introduce — phần này đề cập đến Hardware Configuration & System: Layout & Component, Safety Sticker, Power Supply & Interlock System, Equipment Automatic Sequence.'
        }},
        {img:cmImg('A','nbga',56),tx:{
          en:'1.3.2. Safety Sticker\n\nSafety warning stickers attached to the equipment (attached per customer request — exact set/placement may vary).',
          ko:'1.3.2. Safety Sticker\n\n설비에 부착되는 안전 경고 스티커입니다 (고객사 요청에 따라 부착 — 세부 종류·위치는 다를 수 있음).',
          zhCN:'1.3.2. Safety Sticker\n\n设备上贴附的安全警示贴纸(依客户要求贴附——具体种类·位置可能不同)。',
          zhTW:'1.3.2. Safety Sticker\n\n設備上貼附的安全警示貼紙(依客戶要求貼附——具體種類·位置可能不同)。',
          ja:'1.3.2. Safety Sticker\n\n設備に貼付される安全警告ステッカーです(顧客の要請に応じて貼付——種類・位置は異なる場合があります)。',
          vi:'1.3.2. Safety Sticker\n\nNhãn cảnh báo an toàn dán trên thiết bị (dán theo yêu cầu khách hàng — chủng loại/vị trí cụ thể có thể khác nhau).'
        }},
        {img:cmImg('A','nbga',57),tx:{
          en:'Introduce — this section covers Hardware Configuration & System: Layout & Component, Safety Sticker, Power Supply & Interlock System, and Equipment Automatic Sequence.',
          ko:'Introduce — Hardware Configuration & System: Layout & Component, Safety Sticker, Power Supply & Interlock System, Equipment Automatic Sequence를 다룹니다.',
          zhCN:'Introduce——本节介绍Hardware Configuration & System:Layout & Component、Safety Sticker、Power Supply & Interlock System、Equipment Automatic Sequence。',
          zhTW:'Introduce——本節介紹Hardware Configuration & System:Layout & Component、Safety Sticker、Power Supply & Interlock System、Equipment Automatic Sequence。',
          ja:'Introduce——本節ではHardware Configuration & System:Layout & Component、Safety Sticker、Power Supply & Interlock System、Equipment Automatic Sequenceを扱います。',
          vi:'Introduce — phần này đề cập đến Hardware Configuration & System: Layout & Component, Safety Sticker, Power Supply & Interlock System, Equipment Automatic Sequence.'
        }},
        {img:cmImg('A','nbga',58),tx:{
          en:'1.3.3. Power Supply & Interlock — Rear Sockets\n\nRear-panel sockets: External LAN Port, Air 1/2 (Main equipment air sockets, 10Ф), Main Power Cable Socket.',
          ko:'1.3.3. Power Supply & Interlock — 후면 소켓\n\n후면 패널 소켓: External LAN Port, Air 1/2(Main 설비 Air 소켓, 10Ф), Main Power Cable Socket.',
          zhCN:'1.3.3. Power Supply & Interlock — 后面板插座\n\n后面板插座:External LAN Port、Air 1/2(Main设备Air插座,10Ф)、Main Power Cable Socket。',
          zhTW:'1.3.3. Power Supply & Interlock — 後面板插座\n\n後面板插座:External LAN Port、Air 1/2(Main設備Air插座,10Ф)、Main Power Cable Socket。',
          ja:'1.3.3. Power Supply & Interlock — 背面パネルソケット\n\n背面パネルソケット:External LAN Port、Air 1/2(Main設備Airソケット、10Ф)、Main Power Cable Socket。',
          vi:'1.3.3. Power Supply & Interlock — Ổ cắm mặt sau\n\nCác ổ cắm mặt sau: External LAN Port, Air 1/2 (ổ khí nén chính, 10Ф), Main Power Cable Socket.'
        }},
        {img:cmImg('A','nbga',59),tx:{
          en:'1.3.3. Power Supply & Interlock — Checklist\n\nBefore powering the NBGA, check: Main Breaker On/Off; circuit protector inside the electric panel; Utility Panel lamp (absent on Intel); upper-door lock/unlock per Auto/Teach mode; EMS button push/pull; lower-door closed (for the lower fan); UPS On/Off for the Host PC (absent on Intel); Power Strip On/Off for PC/LED Controller (absent on Intel); Main Air supply and 4–6bar regulator pressure; Operation Panel button lamp status.',
          ko:'1.3.3. Power Supply & Interlock — Checklist\n\nNBGA 전원 공급 전 확인 사항: Main Breaker On/Off; 전장 판넬 내부 Circuit Protector; Utility Panel Lamp(Intel은 없음); Auto/Teach 모드에 따른 상부 도어 Lock/Unlock; EMS 버튼 Push/Pull; 하부 도어 닫힘(하부 Fan용); Host PC용 UPS On/Off(Intel은 없음); PC·LED Controller용 Power Strip On/Off(Intel은 없음); Main Air 공급 및 Regulator 4~6bar 유지; Operation Panel 버튼 Lamp 상태.',
          zhCN:'1.3.3. Power Supply & Interlock — Checklist\n\n为NBGA供电前需确认:Main Breaker On/Off;电气面板内部Circuit Protector;Utility Panel Lamp(Intel无);依Auto/Teach模式的上部門Lock/Unlock;EMS按钮Push/Pull;下部門关闭(供下部Fan用);Host PC用UPS On/Off(Intel无);PC·LED Controller用Power Strip On/Off(Intel无);Main Air供应及Regulator保持4~6bar;Operation Panel按钮Lamp状态。',
          zhTW:'1.3.3. Power Supply & Interlock — Checklist\n\n為NBGA供電前需確認:Main Breaker On/Off;電氣面板內部Circuit Protector;Utility Panel Lamp(Intel無);依Auto/Teach模式的上部門Lock/Unlock;EMS按鈕Push/Pull;下部門關閉(供下部Fan用);Host PC用UPS On/Off(Intel無);PC·LED Controller用Power Strip On/Off(Intel無);Main Air供應及Regulator保持4~6bar;Operation Panel按鈕Lamp狀態。',
          ja:'1.3.3. Power Supply & Interlock — Checklist\n\nNBGAへの電源供給前に確認する項目:Main Breaker On/Off;電装パネル内部のCircuit Protector;Utility Panel Lamp(Intelには無し);Auto/Teachモードによる上部ドアLock/Unlock;EMSボタンPush/Pull;下部ドアが閉じているか(下部Fan用);Host PC用UPS On/Off(Intelには無し);PC・LED Controller用Power Strip On/Off(Intelには無し);Main Air供給及びRegulatorの4~6bar維持;Operation Panelボタンランプ状態。',
          vi:'1.3.3. Power Supply & Interlock — Checklist\n\nTrước khi cấp nguồn cho NBGA, kiểm tra: Main Breaker On/Off; Circuit Protector bên trong tủ điện; đèn Utility Panel (không có ở bản Intel); khóa/mở cửa trên theo chế độ Auto/Teach; nút EMS Push/Pull; cửa dưới đã đóng (cho quạt dưới); UPS On/Off cho Host PC (không có ở bản Intel); Power Strip On/Off cho PC·LED Controller (không có ở bản Intel); nguồn Main Air và áp suất Regulator 4–6bar; trạng thái đèn nút Operation Panel.'
        }},
        {img:cmImg('A','nbga',60),tx:{
          en:'1.3.3. Power Supply & Interlock — Main Sub Electric Panel\n\nTurn on the main circuit breaker on the equipment\'s main panel, then turn on all circuit breakers inside the electric panel (example: Motor Driver, Terminal Block, IO Module).',
          ko:'1.3.3. Power Supply & Interlock — Main Sub Electric Panel\n\n설비 Main Panel의 주 Breaker를 켠 뒤, 전장 판넬 내부의 모든 Breaker를 켭니다 (예: Motor Driver, Terminal Block, IO Module).',
          zhCN:'1.3.3. Power Supply & Interlock — Main Sub Electric Panel\n\n开启设备Main Panel的主Breaker后,再开启电气面板内部所有Breaker(例:Motor Driver、Terminal Block、IO Module)。',
          zhTW:'1.3.3. Power Supply & Interlock — Main Sub Electric Panel\n\n開啟設備Main Panel的主Breaker後,再開啟電氣面板內部所有Breaker(例:Motor Driver、Terminal Block、IO Module)。',
          ja:'1.3.3. Power Supply & Interlock — Main Sub Electric Panel\n\n設備Main Panelの主Breakerをオンにした後、電装パネル内部のすべてのBreakerをオンにします(例:Motor Driver、Terminal Block、IO Module)。',
          vi:'1.3.3. Power Supply & Interlock — Main Sub Electric Panel\n\nBật Breaker chính trên Main Panel của thiết bị, sau đó bật tất cả Breaker bên trong tủ điện (VD: Motor Driver, Terminal Block, IO Module).'
        }},
        {img:cmImg('A','nbga',61),tx:{
          en:'1.3.3. Power Supply & Interlock — Main Electric Panel (Rear)\n\nSame breaker turn-on procedure at the Main Electric Panel (rear): CP, MC, Noise Filter, Terminal Block, Earth Bar, SMPS/PLC.',
          ko:'1.3.3. Power Supply & Interlock — Main Electric Panel (Rear)\n\nMain Electric Panel(후면)에서도 동일하게 Breaker를 켭니다: CP, MC, Noise Filter, Terminal Block, Earth Bar, SMPS/PLC.',
          zhCN:'1.3.3. Power Supply & Interlock — Main Electric Panel (Rear)\n\n在Main Electric Panel(背面)以相同方式开启Breaker:CP、MC、Noise Filter、Terminal Block、Earth Bar、SMPS/PLC。',
          zhTW:'1.3.3. Power Supply & Interlock — Main Electric Panel (Rear)\n\n在Main Electric Panel(背面)以相同方式開啟Breaker:CP、MC、Noise Filter、Terminal Block、Earth Bar、SMPS/PLC。',
          ja:'1.3.3. Power Supply & Interlock — Main Electric Panel (Rear)\n\nMain Electric Panel(背面)でも同様にBreakerをオンにします:CP、MC、Noise Filter、Terminal Block、Earth Bar、SMPS/PLC。',
          vi:'1.3.3. Power Supply & Interlock — Main Electric Panel (Rear)\n\nBật Breaker theo cùng cách tại Main Electric Panel (phía sau): CP, MC, Noise Filter, Terminal Block, Earth Bar, SMPS/PLC.'
        }},
        {img:cmImg('A','nbga',62),tx:{
          en:'1.3.3. Power Supply & Interlock — ISO Sub Electric Panel\n\nSame breaker turn-on procedure at the ISO Sub Electric Panel (left): Motor Driver, IO/PM Module.',
          ko:'1.3.3. Power Supply & Interlock — ISO Sub Electric Panel\n\nISO Sub Electric Panel(좌측)에서도 동일하게 Breaker를 켭니다: Motor Driver, IO/PM Module.',
          zhCN:'1.3.3. Power Supply & Interlock — ISO Sub Electric Panel\n\n在ISO Sub Electric Panel(左侧)以相同方式开启Breaker:Motor Driver、IO/PM Module。',
          zhTW:'1.3.3. Power Supply & Interlock — ISO Sub Electric Panel\n\n在ISO Sub Electric Panel(左側)以相同方式開啟Breaker:Motor Driver、IO/PM Module。',
          ja:'1.3.3. Power Supply & Interlock — ISO Sub Electric Panel\n\nISO Sub Electric Panel(左側)でも同様にBreakerをオンにします:Motor Driver、IO/PM Module。',
          vi:'1.3.3. Power Supply & Interlock — ISO Sub Electric Panel\n\nBật Breaker theo cùng cách tại ISO Sub Electric Panel (bên trái): Motor Driver, IO/PM Module.'
        }},
        {img:cmImg('A','nbga',63),tx:{
          en:'1.3.3. Power Supply & Interlock — Utility Panel Lamp\n\nThe Utility Panel lamp lights only when the CP01 Power Lamp breaker is on. Not included for Intel-spec equipment.',
          ko:'1.3.3. Power Supply & Interlock — Utility Panel Lamp\n\nCP01 Power Lamp Breaker를 켜야만 Utility Panel Lamp가 켜집니다. Intel Spec 설비는 포함되지 않습니다.',
          zhCN:'1.3.3. Power Supply & Interlock — Utility Panel Lamp\n\n只有开启CP01 Power Lamp Breaker,Utility Panel Lamp才会亮起。Intel Spec设备不包含此项。',
          zhTW:'1.3.3. Power Supply & Interlock — Utility Panel Lamp\n\n只有開啟CP01 Power Lamp Breaker,Utility Panel Lamp才會亮起。Intel Spec設備不包含此項。',
          ja:'1.3.3. Power Supply & Interlock — Utility Panel Lamp\n\nCP01 Power Lamp Breakerをオンにした場合のみUtility Panel Lampが点灯します。Intel仕様設備には含まれません。',
          vi:'1.3.3. Power Supply & Interlock — Utility Panel Lamp\n\nĐèn Utility Panel chỉ sáng khi bật Breaker CP01 Power Lamp. Không có ở thiết bị bản Intel.'
        }},
        {img:cmImg('A','nbga',64),tx:{
          en:'1.3.3. Power Supply & Interlock — Auto/Teach Mode\n\nAuto Mode: motor power is supplied only when all upper doors are closed and locked. On an alarm during automatic operation: (1) click Reset, (2) release the Door Interlock, (3) open the door and resolve the alarm, (4) close the door and switch the interlock to Lock, (5) click Lot Start to resume. Teach Mode: motor power can be supplied even with the upper door open/unlocked. Auto/Teach mode can be switched via the Handler program\'s output.',
          ko:'1.3.3. Power Supply & Interlock — Auto/Teach Mode\n\nAuto Mode: 모든 상부 도어가 닫히고 잠겼을 때만 Motor 전원이 공급됩니다. 자동 운전 중 알람 발생 시: (1) Reset 클릭, (2) Door Interlock 해제, (3) 도어를 열고 알람 지점 해결, (4) 도어를 닫고 Interlock을 Lock으로 전환, (5) Lot Start를 눌러 재개. Teach Mode: 상부 도어가 열려 있거나 잠겨 있지 않아도 Motor 전원이 공급됩니다. Auto/Teach 모드는 Handler Program의 출력으로 전환할 수 있습니다.',
          zhCN:'1.3.3. Power Supply & Interlock — Auto/Teach Mode\n\nAuto Mode:仅当所有上部門都关闭并锁定时才供应Motor电源。自动运行中发生报警时:(1)点击Reset,(2)解除Door Interlock,(3)打开门解决报警点,(4)关门并将Interlock切换为Lock,(5)点击Lot Start恢复运行。Teach Mode:即使上部門打开或未锁定,也可供应Motor电源。Auto/Teach模式可通过Handler Program的输出切换。',
          zhTW:'1.3.3. Power Supply & Interlock — Auto/Teach Mode\n\nAuto Mode:僅當所有上部門都關閉並鎖定時才供應Motor電源。自動運行中發生警報時:(1)點擊Reset,(2)解除Door Interlock,(3)開門解決警報點,(4)關門並將Interlock切換為Lock,(5)點擊Lot Start恢復運行。Teach Mode:即使上部門開啟或未鎖定,也可供應Motor電源。Auto/Teach模式可透過Handler Program的輸出切換。',
          ja:'1.3.3. Power Supply & Interlock — Auto/Teach Mode\n\nAuto Mode:上部ドアがすべて閉じてロックされた時のみMotor電源が供給されます。自動運転中にアラームが発生した場合:(1)Resetをクリック、(2)Door Interlockを解除、(3)ドアを開けてアラーム箇所を解決、(4)ドアを閉めてInterlockをLockに切替、(5)Lot Startを押して再開。Teach Mode:上部ドアが開いている・ロックされていなくてもMotor電源を供給できます。Auto/TeachモードはHandler Programの出力で切り替え可能です。',
          vi:'1.3.3. Power Supply & Interlock — Auto/Teach Mode\n\nAuto Mode: chỉ cấp nguồn Motor khi mọi cửa trên đã đóng và khóa. Khi có cảnh báo trong lúc vận hành tự động: (1) nhấn Reset, (2) mở khóa Door Interlock, (3) mở cửa và xử lý điểm cảnh báo, (4) đóng cửa và chuyển Interlock sang Lock, (5) nhấn Lot Start để tiếp tục. Teach Mode: vẫn cấp nguồn Motor được dù cửa trên mở/chưa khóa. Chế độ Auto/Teach có thể chuyển qua đầu ra của Handler Program.'
        }},
        {img:cmImg('A','nbga',65),tx:{
          en:'1.3.3. Power Supply & Interlock — EMS Buttons (SEMCO, SEMV, Kyocera)\n\nTo supply motor power, all 4 EMS (Emergency Stop Switch) buttons on the equipment must remain in the pulled (released) state — pushing even one cuts motor power. EMS buttons are the emergency motor-power cutoff.',
          ko:'1.3.3. Power Supply & Interlock — EMS Buttons (SEMCO, SEMV, Kyocera)\n\nMotor 전원을 공급하려면 설비의 EMS(Emergency Stop Switch) 버튼 4개가 모두 당겨진(풀린) 상태여야 합니다 — 하나라도 눌리면 Motor 전원이 차단됩니다. EMS 버튼은 비상 시 Motor 전원을 차단하는 용도입니다.',
          zhCN:'1.3.3. Power Supply & Interlock — EMS Buttons (SEMCO, SEMV, Kyocera)\n\n要供应Motor电源,设备上4个EMS(Emergency Stop Switch)按钮都必须处于拉出(释放)状态——只要有一个被按下,Motor电源就会被切断。EMS按钮用于紧急情况下切断Motor电源。',
          zhTW:'1.3.3. Power Supply & Interlock — EMS Buttons (SEMCO, SEMV, Kyocera)\n\n要供應Motor電源,設備上4個EMS(Emergency Stop Switch)按鈕都必須處於拉出(釋放)狀態——只要有一個被按下,Motor電源就會被切斷。EMS按鈕用於緊急情況下切斷Motor電源。',
          ja:'1.3.3. Power Supply & Interlock — EMS Buttons (SEMCO, SEMV, Kyocera)\n\nMotor電源を供給するには、設備の4個のEMS(Emergency Stop Switch)ボタンがすべて引かれた(解放された)状態である必要があります——1つでも押されるとMotor電源が遮断されます。EMSボタンは緊急時にMotor電源を遮断するためのものです。',
          vi:'1.3.3. Power Supply & Interlock — EMS Buttons (SEMCO, SEMV, Kyocera)\n\nĐể cấp nguồn Motor, cả 4 nút EMS (Emergency Stop Switch) trên thiết bị phải ở trạng thái kéo ra (nhả) — chỉ cần một nút bị nhấn, nguồn Motor sẽ bị cắt. Nút EMS dùng để cắt khẩn cấp nguồn Motor.'
        }},
        {img:cmImg('A','nbga',66),tx:{
          en:'1.3.3. Power Supply & Interlock — EMS Buttons (AT&S, Intel, Nanya)\n\nSame as above: all 4 EMS buttons must remain pulled to supply motor power — pushing even one cuts motor power.',
          ko:'1.3.3. Power Supply & Interlock — EMS Buttons (AT&S, Intel, Nanya)\n\n위와 동일: Motor 전원 공급을 위해 EMS 버튼 4개가 모두 당겨져 있어야 하며, 하나라도 눌리면 Motor 전원이 차단됩니다.',
          zhCN:'1.3.3. Power Supply & Interlock — EMS Buttons (AT&S, Intel, Nanya)\n\n与上述相同:要供应Motor电源,4个EMS按钮都必须保持拉出状态,只要有一个被按下,Motor电源就会被切断。',
          zhTW:'1.3.3. Power Supply & Interlock — EMS Buttons (AT&S, Intel, Nanya)\n\n與上述相同:要供應Motor電源,4個EMS按鈕都必須保持拉出狀態,只要有一個被按下,Motor電源就會被切斷。',
          ja:'1.3.3. Power Supply & Interlock — EMS Buttons (AT&S, Intel, Nanya)\n\n上記と同様:Motor電源を供給するには4個のEMSボタンがすべて引かれた状態を保つ必要があり、1つでも押されるとMotor電源が遮断されます。',
          vi:'1.3.3. Power Supply & Interlock — EMS Buttons (AT&S, Intel, Nanya)\n\nGiống như trên: để cấp nguồn Motor, cả 4 nút EMS phải giữ trạng thái kéo ra — chỉ cần một nút bị nhấn, nguồn Motor sẽ bị cắt.'
        }},
        {img:cmImg('A','nbga',67),tx:{
          en:'1.3.3. Power Supply & Interlock — Lower-Door Fan\n\nTo power the fan in the lower door, all lower doors must be closed. The main-equipment fan and dust-suppression-equipment fan switch independently, and power is supplied automatically via a magnetic proximity sensor (cannot be turned on manually).',
          ko:'1.3.3. Power Supply & Interlock — 하부 도어 Fan\n\n하부 도어의 Fan에 전원을 공급하려면 모든 하부 도어가 닫혀 있어야 합니다. Main 설비 Fan과 제진 설비 Fan은 독립적으로 On/Off되며, 전원은 Magnetic Proximity Sensor를 통해 자동으로 공급됩니다(수동 On 불가).',
          zhCN:'1.3.3. Power Supply & Interlock — 下部門風扇\n\n要为下部門的风扇供电,所有下部門都必须关闭。Main设备风扇与防振设备风扇各自独立开关,电源通过Magnetic Proximity Sensor自动供应(无法手动开启)。',
          zhTW:'1.3.3. Power Supply & Interlock — 下部門風扇\n\n要為下部門的風扇供電,所有下部門都必須關閉。Main設備風扇與防震設備風扇各自獨立開關,電源透過Magnetic Proximity Sensor自動供應(無法手動開啟)。',
          ja:'1.3.3. Power Supply & Interlock — 下部ドアFan\n\n下部ドアのFanに電源を供給するには、すべての下部ドアが閉まっている必要があります。Main設備FanとDust Suppression設備Fanは独立してオン/オフし、電源はMagnetic Proximity Sensorを介して自動供給されます(手動オン不可)。',
          vi:'1.3.3. Power Supply & Interlock — Quạt cửa dưới\n\nĐể cấp nguồn cho quạt ở cửa dưới, tất cả cửa dưới phải đóng. Quạt thiết bị chính và quạt thiết bị chống rung bật/tắt độc lập, nguồn được cấp tự động qua Magnetic Proximity Sensor (không thể bật thủ công).'
        }},
        {img:cmImg('A','nbga',68),tx:{
          en:'1.3.3. Power Supply & Interlock — UPS\n\nTo power the Host PC, the UPS must be on. Turn the UPS off during shipping or power-related work. No UPS for Intel-spec equipment (installation status and specification vary by customer).',
          ko:'1.3.3. Power Supply & Interlock — UPS\n\nHost PC에 전원을 공급하려면 UPS가 켜져 있어야 합니다. 출하·전원 관련 작업 시에는 UPS 전원을 꺼야 합니다. Intel Spec 설비는 UPS가 없습니다(설치 유무·Spec은 고객사마다 다름).',
          zhCN:'1.3.3. Power Supply & Interlock — UPS\n\n要为Host PC供电,UPS必须开启。出货·电源相关作业时应关闭UPS电源。Intel Spec设备无UPS(是否安装及Spec因客户而异)。',
          zhTW:'1.3.3. Power Supply & Interlock — UPS\n\n要為Host PC供電,UPS必須開啟。出貨·電源相關作業時應關閉UPS電源。Intel Spec設備無UPS(是否安裝及Spec因客戶而異)。',
          ja:'1.3.3. Power Supply & Interlock — UPS\n\nHost PCに電源を供給するにはUPSがオンである必要があります。出荷・電源関連作業時はUPS電源をオフにします。Intel仕様設備にはUPSはありません(設置有無・仕様は顧客により異なります)。',
          vi:'1.3.3. Power Supply & Interlock — UPS\n\nĐể cấp nguồn cho Host PC, UPS phải bật. Khi xuất xưởng hoặc làm việc liên quan đến nguồn, phải tắt UPS. Thiết bị bản Intel không có UPS (tình trạng lắp đặt/Spec khác nhau tùy khách hàng).'
        }},
        {img:cmImg('A','nbga',69),tx:{
          en:'1.3.3. Power Supply & Interlock — Power Strip\n\nTo power controllers such as the PC and LED Controller, the Power Strip must be turned on.',
          ko:'1.3.3. Power Supply & Interlock — Power Strip\n\nPC·LED Controller 등 Controller에 전원을 공급하려면 Power Strip을 켜야 합니다.',
          zhCN:'1.3.3. Power Supply & Interlock — Power Strip\n\n要为PC·LED Controller等Controller供电,必须开启Power Strip。',
          zhTW:'1.3.3. Power Supply & Interlock — Power Strip\n\n要為PC·LED Controller等Controller供電,必須開啟Power Strip。',
          ja:'1.3.3. Power Supply & Interlock — Power Strip\n\nPC・LED Controller等のControllerに電源を供給するにはPower Stripをオンにする必要があります。',
          vi:'1.3.3. Power Supply & Interlock — Power Strip\n\nĐể cấp nguồn cho các Controller như PC·LED Controller, phải bật Power Strip.'
        }},
        {img:cmImg('A','nbga',70),tx:{
          en:'1.3.3. Power Supply & Interlock — Main Air Regulator #1\n\nAdjust the regulator so each air regulator\'s pressure stays at 4–6bar (monitored via input signal). Supplies: Indexer Finger, Stacker, Elevator, Multi Sorter, Air Gun, TTM.',
          ko:'1.3.3. Power Supply & Interlock — Main Air Regulator #1\n\n각 Air Regulator 압력이 4~6bar로 유지되도록 조정합니다(입력 신호로 모니터링). 공급 대상: Indexer Finger, Stacker, Elevator, Multi Sorter, Air Gun, TTM.',
          zhCN:'1.3.3. Power Supply & Interlock — Main Air Regulator #1\n\n调整使各Air Regulator压力维持在4~6bar(以输入信号监控)。供应对象:Indexer Finger、Stacker、Elevator、Multi Sorter、Air Gun、TTM。',
          zhTW:'1.3.3. Power Supply & Interlock — Main Air Regulator #1\n\n調整使各Air Regulator壓力維持在4~6bar(以輸入訊號監控)。供應對象:Indexer Finger、Stacker、Elevator、Multi Sorter、Air Gun、TTM。',
          ja:'1.3.3. Power Supply & Interlock — Main Air Regulator #1\n\n各Air Regulatorの圧力が4~6barに維持されるよう調整します(入力信号でモニタリング)。供給先:Indexer Finger、Stacker、Elevator、Multi Sorter、Air Gun、TTM。',
          vi:'1.3.3. Power Supply & Interlock — Main Air Regulator #1\n\nChỉnh để mỗi Air Regulator giữ áp suất 4–6bar (giám sát qua tín hiệu đầu vào). Cấp cho: Indexer Finger, Stacker, Elevator, Multi Sorter, Air Gun, TTM.'
        }},
        {img:cmImg('A','nbga',71),tx:{
          en:'1.3.3. Power Supply & Interlock — Main Air Regulator #2\n\nAdjust the regulator so each air regulator\'s pressure stays at 4–6bar (monitored via input signal). Supplies: JIG Align/Clamp, TSM, ISOlator.',
          ko:'1.3.3. Power Supply & Interlock — Main Air Regulator #2\n\n각 Air Regulator 압력이 4~6bar로 유지되도록 조정합니다(입력 신호로 모니터링). 공급 대상: JIG Align·Clamp, TSM, ISOlator.',
          zhCN:'1.3.3. Power Supply & Interlock — Main Air Regulator #2\n\n调整使各Air Regulator压力维持在4~6bar(以输入信号监控)。供应对象:JIG Align·Clamp、TSM、ISOlator。',
          zhTW:'1.3.3. Power Supply & Interlock — Main Air Regulator #2\n\n調整使各Air Regulator壓力維持在4~6bar(以輸入訊號監控)。供應對象:JIG Align·Clamp、TSM、ISOlator。',
          ja:'1.3.3. Power Supply & Interlock — Main Air Regulator #2\n\n各Air Regulatorの圧力が4~6barに維持されるよう調整します(入力信号でモニタリング)。供給先:JIG Align・Clamp、TSM、ISOlator。',
          vi:'1.3.3. Power Supply & Interlock — Main Air Regulator #2\n\nChỉnh để mỗi Air Regulator giữ áp suất 4–6bar (giám sát qua tín hiệu đầu vào). Cấp cho: JIG Align·Clamp, TSM, ISOlator.'
        }},
        {img:cmImg('A','nbga',72),tx:{
          en:'1.3.3. Power Supply & Interlock — Operation Panel\n\nWith all breakers on, the Power Off lamp lights, and the Reset lamp blinks every ~500ms. Pressing Power On lights that lamp and turns off Power Off\'s lamp. In Teach mode, pressing Reset with all EMS pulled supplies motor power; in Auto mode, this also requires all upper doors locked (unlocking cuts motor power). Buttons: POWER ON = IO/Driver power on; POWER OFF = IO/Driver power off; START = run start; STOP = run stop; RESET = motor power on (while Reset flashes).',
          ko:'1.3.3. Power Supply & Interlock — Operation Panel\n\n모든 Breaker가 켜지면 Power Off Lamp가 켜지고, Reset Lamp는 약 500ms 주기로 깜빡입니다. Power On을 누르면 해당 Lamp가 켜지고 Power Off Lamp는 꺼집니다. Teach Mode에서는 모든 EMS가 당겨진 상태에서 Reset을 누르면 Motor 전원이 공급되며, Auto Mode에서는 추가로 모든 상부 도어가 잠겨 있어야 합니다(잠금 해제 시 Motor 전원 차단). 버튼: POWER ON=IO·Driver 전원 On; POWER OFF=IO·Driver 전원 Off; START=운전 시작; STOP=운전 정지; RESET=Motor 전원 On(Reset 점멸 중).',
          zhCN:'1.3.3. Power Supply & Interlock — Operation Panel\n\n所有Breaker开启后,Power Off Lamp亮起,Reset Lamp以约500ms周期闪烁。按下Power On后该Lamp亮起,Power Off Lamp熄灭。Teach Mode下,所有EMS拉出状态按Reset供应Motor电源;Auto Mode下还需所有上部門锁定(解锁则切断Motor电源)。按钮:POWER ON=IO·Driver电源开;POWER OFF=IO·Driver电源关;START=运行开始;STOP=运行停止;RESET=Motor电源开(Reset闪烁时)。',
          zhTW:'1.3.3. Power Supply & Interlock — Operation Panel\n\n所有Breaker開啟後,Power Off Lamp亮起,Reset Lamp以約500ms週期閃爍。按下Power On後該Lamp亮起,Power Off Lamp熄滅。Teach Mode下,所有EMS拉出狀態按Reset供應Motor電源;Auto Mode下還需所有上部門鎖定(解鎖則切斷Motor電源)。按鈕:POWER ON=IO·Driver電源開;POWER OFF=IO·Driver電源關;START=運行開始;STOP=運行停止;RESET=Motor電源開(Reset閃爍時)。',
          ja:'1.3.3. Power Supply & Interlock — Operation Panel\n\nすべてのBreakerがオンになるとPower Off Lampが点灯し、Reset Lampは約500ms周期で点滅します。Power Onを押すとそのLampが点灯しPower Off Lampは消灯します。Teach Modeでは全EMSが引かれた状態でResetを押すとMotor電源が供給され、Auto Modeではさらに上部ドアがすべてロックされている必要があります(解錠するとMotor電源が遮断)。ボタン:POWER ON=IO・Driver電源On;POWER OFF=IO・Driver電源Off;START=運転開始;STOP=運転停止;RESET=Motor電源On(Reset点滅中)。',
          vi:'1.3.3. Power Supply & Interlock — Operation Panel\n\nKhi mọi Breaker đã bật, đèn Power Off sáng, đèn Reset nhấp nháy mỗi ~500ms. Nhấn Power On làm đèn đó sáng và đèn Power Off tắt. Ở Teach Mode, nhấn Reset khi mọi EMS đã kéo ra sẽ cấp nguồn Motor; ở Auto Mode còn cần mọi cửa trên đã khóa (mở khóa sẽ cắt nguồn Motor). Nút: POWER ON = bật nguồn IO·Driver; POWER OFF = tắt nguồn IO·Driver; START = bắt đầu chạy; STOP = dừng chạy; RESET = bật nguồn Motor (khi đèn Reset nhấp nháy).'
        }},
        {img:cmImg('A','nbga',73),tx:{
          en:'Introduce — this section covers Hardware Configuration & System: Layout & Component, Safety Sticker, Power Supply & Interlock System, and Equipment Automatic Sequence.',
          ko:'Introduce — Hardware Configuration & System: Layout & Component, Safety Sticker, Power Supply & Interlock System, Equipment Automatic Sequence를 다룹니다.',
          zhCN:'Introduce——本节介绍Hardware Configuration & System:Layout & Component、Safety Sticker、Power Supply & Interlock System、Equipment Automatic Sequence。',
          zhTW:'Introduce——本節介紹Hardware Configuration & System:Layout & Component、Safety Sticker、Power Supply & Interlock System、Equipment Automatic Sequence。',
          ja:'Introduce——本節ではHardware Configuration & System:Layout & Component、Safety Sticker、Power Supply & Interlock System、Equipment Automatic Sequenceを扱います。',
          vi:'Introduce — phần này đề cập đến Hardware Configuration & System: Layout & Component, Safety Sticker, Power Supply & Interlock System, Equipment Automatic Sequence.'
        }},
        {img:cmImg('A','nbga',74),tx:{
          en:'1.3.4. Equipment Automatic Sequence — Overview\n\nThe full cycle: 1. Load tray → 2. Read the barcode of the unit → 3. 2D inspection → 4. Place & Pick tray → 5. 3D inspection → 6. Tray sorting → 7. Unit sorting → 8. Unload tray.',
          ko:'1.3.4. Equipment Automatic Sequence — 전체 개요\n\n전체 사이클: 1. Tray Load → 2. Unit Barcode 읽기 → 3. 2D Inspection → 4. Tray Place & Pick → 5. 3D Inspection → 6. Tray Sorting → 7. Unit Sorting → 8. Tray Unload.',
          zhCN:'1.3.4. Equipment Automatic Sequence — 整体概览\n\n完整循环:1. Tray Load → 2. 读取Unit Barcode → 3. 2D Inspection → 4. Tray Place & Pick → 5. 3D Inspection → 6. Tray Sorting → 7. Unit Sorting → 8. Tray Unload。',
          zhTW:'1.3.4. Equipment Automatic Sequence — 整體概覽\n\n完整循環:1. Tray Load → 2. 讀取Unit Barcode → 3. 2D Inspection → 4. Tray Place & Pick → 5. 3D Inspection → 6. Tray Sorting → 7. Unit Sorting → 8. Tray Unload。',
          ja:'1.3.4. Equipment Automatic Sequence — 全体概要\n\n全サイクル:1. Tray Load → 2. UnitのBarcode読み取り → 3. 2D Inspection → 4. Tray Place & Pick → 5. 3D Inspection → 6. Tray Sorting → 7. Unit Sorting → 8. Tray Unload。',
          vi:'1.3.4. Equipment Automatic Sequence — Tổng quan\n\nChu trình đầy đủ: 1. Load tray → 2. Đọc Barcode của Unit → 3. 2D Inspection → 4. Place & Pick tray → 5. 3D Inspection → 6. Tray Sorting → 7. Unit Sorting → 8. Unload Tray.'
        }},
        {img:cmImg('A','nbga',75),tx:{
          en:'1.3.4. Equipment Automatic Sequence — Empty Tray\n\nPrepare the Empty Tray: the Elevator and Stacker separate each tray, the Indexer moves it to the TSM, and the TSM moves the Empty Tray to the Reject Rail.',
          ko:'1.3.4. Equipment Automatic Sequence — Empty Tray\n\nEmpty Tray 준비: Elevator·Stacker로 Tray를 한 장씩 분리하고, Indexer가 TSM으로 이송하며, TSM이 Empty Tray를 Reject Rail로 이동시킵니다.',
          zhCN:'1.3.4. Equipment Automatic Sequence — Empty Tray\n\n准备Empty Tray:用Elevator·Stacker逐张分离Tray,由Indexer移送至TSM,TSM将Empty Tray移至Reject Rail。',
          zhTW:'1.3.4. Equipment Automatic Sequence — Empty Tray\n\n準備Empty Tray:用Elevator·Stacker逐張分離Tray,由Indexer移送至TSM,TSM將Empty Tray移至Reject Rail。',
          ja:'1.3.4. Equipment Automatic Sequence — Empty Tray\n\nEmpty Trayの準備:Elevator・Stackerで1枚ずつTrayを分離し、IndexerがTSMへ移送、TSMがEmpty TrayをReject Railへ移動させます。',
          vi:'1.3.4. Equipment Automatic Sequence — Empty Tray\n\nChuẩn bị Empty Tray: Elevator·Stacker tách từng Tray, Indexer chuyển đến TSM, TSM chuyển Empty Tray đến Reject Rail.'
        }},
        {img:cmImg('A','nbga',76),tx:{
          en:'1.3.4. Equipment Automatic Sequence — Load Tray\n\nPlace the tray with units in the Loader; the Elevator and Stacker separate each tray, then move the separated tray to the 2D inspection position.',
          ko:'1.3.4. Equipment Automatic Sequence — Load Tray\n\nUnit이 담긴 Tray를 Loader에 투입하고, Elevator·Stacker로 Tray를 한 장씩 분리한 뒤 2D Inspection 위치로 이동시킵니다.',
          zhCN:'1.3.4. Equipment Automatic Sequence — Load Tray\n\n将装有Unit的Tray投入Loader,用Elevator·Stacker逐张分离Tray,再移至2D Inspection位置。',
          zhTW:'1.3.4. Equipment Automatic Sequence — Load Tray\n\n將裝有Unit的Tray投入Loader,用Elevator·Stacker逐張分離Tray,再移至2D Inspection位置。',
          ja:'1.3.4. Equipment Automatic Sequence — Load Tray\n\nUnitの入ったTrayをLoaderに投入し、Elevator・Stackerで1枚ずつ分離した後、2D Inspection位置へ移動させます。',
          vi:'1.3.4. Equipment Automatic Sequence — Load Tray\n\nNạp Tray chứa Unit vào Loader, Elevator·Stacker tách từng Tray, sau đó chuyển đến vị trí 2D Inspection.'
        }},
        {img:cmImg('A','nbga',77),tx:{
          en:'1.3.4. Equipment Automatic Sequence — Read Barcode of Unit\n\nMoves to the unit under inspection and reads the barcode within the R.O.I. area (supports both OCR Barcode and Matrix Barcode reading).',
          ko:'1.3.4. Equipment Automatic Sequence — Read Barcode of Unit\n\n검사 대상 Unit으로 이동해 R.O.I. 영역의 Barcode를 읽습니다 (OCR Barcode·Matrix Barcode 모두 지원).',
          zhCN:'1.3.4. Equipment Automatic Sequence — Read Barcode of Unit\n\n移动到检测对象Unit并读取R.O.I.区域的Barcode(支持OCR Barcode·Matrix Barcode)。',
          zhTW:'1.3.4. Equipment Automatic Sequence — Read Barcode of Unit\n\n移動到檢測對象Unit並讀取R.O.I.區域的Barcode(支援OCR Barcode·Matrix Barcode)。',
          ja:'1.3.4. Equipment Automatic Sequence — Read Barcode of Unit\n\n検査対象のUnitへ移動し、R.O.I.領域のBarcodeを読み取ります(OCR Barcode・Matrix Barcodeいずれも対応)。',
          vi:'1.3.4. Equipment Automatic Sequence — Read Barcode of Unit\n\nDi chuyển đến Unit cần kiểm tra và đọc Barcode trong vùng R.O.I. (hỗ trợ cả OCR Barcode và Matrix Barcode).'
        }},
        {img:cmImg('A','nbga',78),tx:{
          en:'1.3.4. Equipment Automatic Sequence — 2D Inspection\n\nInspects the bump area of the unit; if the bump area is larger than one F.O.V., the inspection area is divided into two or more R.O.I. sections.',
          ko:'1.3.4. Equipment Automatic Sequence — 2D Inspection\n\nUnit의 Bump 영역을 검사합니다. Bump 영역이 F.O.V. 1개보다 크면 검사 영역을 2개 이상의 R.O.I.로 나눕니다.',
          zhCN:'1.3.4. Equipment Automatic Sequence — 2D Inspection\n\n检测Unit的Bump区域。若Bump区域大于1个F.O.V.,则将检测区域划分为2个以上的R.O.I.。',
          zhTW:'1.3.4. Equipment Automatic Sequence — 2D Inspection\n\n檢測Unit的Bump區域。若Bump區域大於1個F.O.V.,則將檢測區域劃分為2個以上的R.O.I.。',
          ja:'1.3.4. Equipment Automatic Sequence — 2D Inspection\n\nUnitのBump領域を検査します。Bump領域がF.O.V.1つより大きい場合、検査領域を2つ以上のR.O.I.に分割します。',
          vi:'1.3.4. Equipment Automatic Sequence — 2D Inspection\n\nKiểm tra vùng Bump của Unit. Nếu vùng Bump lớn hơn 1 F.O.V., vùng kiểm tra được chia thành 2 R.O.I. trở lên.'
        }},
        {img:cmImg('A','nbga',79),tx:{
          en:'1.3.4. Equipment Automatic Sequence — Place & Pick Tray (Loading)\n\nAfter 2D inspection completes, transfers the tray to the 3D inspection position (moved to Jig1 or Jig2).',
          ko:'1.3.4. Equipment Automatic Sequence — Place & Pick Tray (Loading)\n\n2D Inspection이 끝나면 Tray를 3D Inspection 위치로 이송합니다 (Jig1 또는 Jig2로 이동).',
          zhCN:'1.3.4. Equipment Automatic Sequence — Place & Pick Tray (Loading)\n\n2D Inspection完成后,将Tray传送至3D Inspection位置(移至Jig1或Jig2)。',
          zhTW:'1.3.4. Equipment Automatic Sequence — Place & Pick Tray (Loading)\n\n2D Inspection完成後,將Tray傳送至3D Inspection位置(移至Jig1或Jig2)。',
          ja:'1.3.4. Equipment Automatic Sequence — Place & Pick Tray (Loading)\n\n2D Inspection完了後、Trayを3D Inspection位置へ移送します(Jig1またはJig2へ移動)。',
          vi:'1.3.4. Equipment Automatic Sequence — Place & Pick Tray (Loading)\n\nSau khi hoàn tất 2D Inspection, chuyển Tray đến vị trí 3D Inspection (chuyển đến Jig1 hoặc Jig2).'
        }},
        {img:cmImg('A','nbga',80),tx:{
          en:'1.3.4. Equipment Automatic Sequence — 3D Inspection\n\nInspects the bump area of the unit; if the bump area is larger than one F.O.V., the inspection area is divided into two or more R.O.I. sections.',
          ko:'1.3.4. Equipment Automatic Sequence — 3D Inspection\n\nUnit의 Bump 영역을 검사합니다. Bump 영역이 F.O.V. 1개보다 크면 검사 영역을 2개 이상의 R.O.I.로 나눕니다.',
          zhCN:'1.3.4. Equipment Automatic Sequence — 3D Inspection\n\n检测Unit的Bump区域。若Bump区域大于1个F.O.V.,则将检测区域划分为2个以上的R.O.I.。',
          zhTW:'1.3.4. Equipment Automatic Sequence — 3D Inspection\n\n檢測Unit的Bump區域。若Bump區域大於1個F.O.V.,則將檢測區域劃分為2個以上的R.O.I.。',
          ja:'1.3.4. Equipment Automatic Sequence — 3D Inspection\n\nUnitのBump領域を検査します。Bump領域がF.O.V.1つより大きい場合、検査領域を2つ以上のR.O.I.に分割します。',
          vi:'1.3.4. Equipment Automatic Sequence — 3D Inspection\n\nKiểm tra vùng Bump của Unit. Nếu vùng Bump lớn hơn 1 F.O.V., vùng kiểm tra được chia thành 2 R.O.I. trở lên.'
        }},
        {img:cmImg('A','nbga',81),tx:{
          en:'1.3.4. Equipment Automatic Sequence — Place & Pick Tray (Unloading)\n\nTransfers the tray that has completed 3D inspection to the TTM.',
          ko:'1.3.4. Equipment Automatic Sequence — Place & Pick Tray (Unloading)\n\n3D Inspection이 끝난 Tray를 TTM 위치로 이송하는 동작입니다.',
          zhCN:'1.3.4. Equipment Automatic Sequence — Place & Pick Tray (Unloading)\n\n将完成3D Inspection的Tray传送至TTM位置的动作。',
          zhTW:'1.3.4. Equipment Automatic Sequence — Place & Pick Tray (Unloading)\n\n將完成3D Inspection的Tray傳送至TTM位置的動作。',
          ja:'1.3.4. Equipment Automatic Sequence — Place & Pick Tray (Unloading)\n\n3D Inspectionが完了したTrayをTTM位置へ移送する動作です。',
          vi:'1.3.4. Equipment Automatic Sequence — Place & Pick Tray (Unloading)\n\nThao tác chuyển Tray đã hoàn tất 3D Inspection đến vị trí TTM.'
        }},
        {img:cmImg('A','nbga',82),tx:{
          en:'1.3.4. Equipment Automatic Sequence — Tray Sorting\n\nMoves the tray to the Buffer or Good rail in the order inspection is completed.',
          ko:'1.3.4. Equipment Automatic Sequence — Tray Sorting\n\n검사 완료 순서대로 Tray를 Buffer·Good Rail로 이동시킵니다.',
          zhCN:'1.3.4. Equipment Automatic Sequence — Tray Sorting\n\n按检测完成顺序将Tray移至Buffer·Good Rail。',
          zhTW:'1.3.4. Equipment Automatic Sequence — Tray Sorting\n\n按檢測完成順序將Tray移至Buffer·Good Rail。',
          ja:'1.3.4. Equipment Automatic Sequence — Tray Sorting\n\n検査完了順にTrayをBuffer・Good Railへ移動させます。',
          vi:'1.3.4. Equipment Automatic Sequence — Tray Sorting\n\nDi chuyển Tray đến Rail Buffer·Good theo thứ tự hoàn tất kiểm tra.'
        }},
        {img:cmImg('A','nbga',83),tx:{
          en:'1.3.4. Equipment Automatic Sequence — Unit Sorting\n\nInspected units are classified as Good or Reject.',
          ko:'1.3.4. Equipment Automatic Sequence — Unit Sorting\n\n검사된 Unit을 Good·Reject로 분류합니다.',
          zhCN:'1.3.4. Equipment Automatic Sequence — Unit Sorting\n\n将已检测的Unit分类为Good·Reject。',
          zhTW:'1.3.4. Equipment Automatic Sequence — Unit Sorting\n\n將已檢測的Unit分類為Good·Reject。',
          ja:'1.3.4. Equipment Automatic Sequence — Unit Sorting\n\n検査済みのUnitをGood・Rejectに分類します。',
          vi:'1.3.4. Equipment Automatic Sequence — Unit Sorting\n\nPhân loại Unit đã kiểm tra thành Good·Reject.'
        }},
        {img:cmImg('A','nbga',84),tx:{
          en:'1.3.4. Equipment Automatic Sequence — Unload Tray\n\nUnloads the sorted tray from the equipment.',
          ko:'1.3.4. Equipment Automatic Sequence — Unload Tray\n\nSorting이 끝난 Tray를 설비에서 배출합니다.',
          zhCN:'1.3.4. Equipment Automatic Sequence — Unload Tray\n\n将Sorting完成的Tray从设备排出。',
          zhTW:'1.3.4. Equipment Automatic Sequence — Unload Tray\n\n將Sorting完成的Tray從設備排出。',
          ja:'1.3.4. Equipment Automatic Sequence — Unload Tray\n\nSortingが完了したTrayを設備から排出します。',
          vi:'1.3.4. Equipment Automatic Sequence — Unload Tray\n\nĐẩy Tray đã Sorting ra khỏi thiết bị.'
        }},
        {img:cmImg('A','nbga',85),tx:{
          en:'Operation — this section covers Power On & Off: Electric Power On Sequence, Controller/PC/Camera Power, and Turn Off Sequence.',
          ko:'Operation — Power On & Off: Electric Power On Sequence, Controller/PC/Camera Power, Turn Off Sequence를 다룹니다.',
          zhCN:'Operation——本节介绍Power On & Off:Electric Power On Sequence、Controller/PC/Camera Power、Turn Off Sequence。',
          zhTW:'Operation——本節介紹Power On & Off:Electric Power On Sequence、Controller/PC/Camera Power、Turn Off Sequence。',
          ja:'Operation——本節ではPower On & Off:Electric Power On Sequence、Controller/PC/Camera Power、Turn Off Sequenceを扱います。',
          vi:'Operation — phần này đề cập đến Power On & Off: Electric Power On Sequence, Controller/PC/Camera Power, Turn Off Sequence.'
        }},
        {img:cmImg('A','nbga',86),tx:{
          en:'2.1.1. Electric Power On & Off Sequence — Main Breaker\n\nTurn on the main circuit breaker on the equipment\'s main panel. Failure to follow the On sequence may damage electrical components. The Release Key opens the door without powering off (Intel-oriented breakers use a different model, so the key location differs).',
          ko:'2.1.1. Electric Power On & Off Sequence — Main Breaker\n\n설비 Main Panel의 주 Breaker를 켭니다. On Sequence를 따르지 않으면 전장 부품이 손상될 수 있습니다. Release Key는 전원을 끄지 않고 도어를 여는 데 사용됩니다(Intel향 주 Breaker는 모델이 달라 Release Key 위치가 다름).',
          zhCN:'2.1.1. Electric Power On & Off Sequence — Main Breaker\n\n開啟設備Main Panel的主Breaker。若不遵循On Sequence,可能損壞電氣元件。Release Key用於在不斷電的情況下開門(Intel向主Breaker型號不同,Release Key位置也不同)。',
          zhTW:'2.1.1. Electric Power On & Off Sequence — Main Breaker\n\n開啟設備Main Panel的主Breaker。若不遵循On Sequence,可能損壞電氣元件。Release Key用於在不斷電的情況下開門(Intel向主Breaker型號不同,Release Key位置也不同)。',
          ja:'2.1.1. Electric Power On & Off Sequence — Main Breaker\n\n設備Main Panelの主Breakerをオンにします。On Sequenceに従わないと電装部品が故障する恐れがあります。Release Keyは電源を切らずにドアを開けるために使用します(Intel向け主Breakerは型番が異なるためRelease Keyの位置も異なります)。',
          vi:'2.1.1. Electric Power On & Off Sequence — Main Breaker\n\nBật Breaker chính trên Main Panel của thiết bị. Không tuân theo On Sequence có thể làm hỏng linh kiện điện. Release Key dùng để mở cửa mà không cần tắt nguồn (Breaker chính bản Intel dùng model khác nên vị trí Release Key cũng khác).'
        }},
        {img:cmImg('A','nbga',87),tx:{
          en:'2.1.1. Electric Power On & Off Sequence — Circuit Breakers\n\nTurn on all breakers inside the facility: Main Sub Electric Panel, Main Electric Panel, ISO Sub Electric Panel.',
          ko:'2.1.1. Electric Power On & Off Sequence — Circuit Breakers\n\n설비 내부의 모든 Breaker를 켭니다: Main Sub Electric Panel, Main Electric Panel, ISO Sub Electric Panel.',
          zhCN:'2.1.1. Electric Power On & Off Sequence — Circuit Breakers\n\n开启设备内部所有Breaker:Main Sub Electric Panel、Main Electric Panel、ISO Sub Electric Panel。',
          zhTW:'2.1.1. Electric Power On & Off Sequence — Circuit Breakers\n\n開啟設備內部所有Breaker:Main Sub Electric Panel、Main Electric Panel、ISO Sub Electric Panel。',
          ja:'2.1.1. Electric Power On & Off Sequence — Circuit Breakers\n\n設備内部のすべてのBreakerをオンにします:Main Sub Electric Panel、Main Electric Panel、ISO Sub Electric Panel。',
          vi:'2.1.1. Electric Power On & Off Sequence — Circuit Breakers\n\nBật tất cả Breaker bên trong thiết bị: Main Sub Electric Panel, Main Electric Panel, ISO Sub Electric Panel.'
        }},
        {img:cmImg('A','nbga',88),tx:{
          en:'2.1.1. Electric Power On & Off Sequence — UPS\n\nTurn on the UPS: (1) press the power button and select the power-on option, (2) pressing the Power button for 2–3 seconds turns it on or off. Installation status and specifications vary by customer.',
          ko:'2.1.1. Electric Power On & Off Sequence — UPS\n\nUPS를 켭니다: (1) 전원 버튼을 눌러 Power On 옵션 선택, (2) Power 버튼을 2~3초간 누르면 On/Off 전환됩니다. 설치 유무·Spec은 고객사마다 다릅니다.',
          zhCN:'2.1.1. Electric Power On & Off Sequence — UPS\n\n开启UPS:(1)按电源按钮并选择开机选项,(2)按住Power按钮2~3秒即可开/关。是否安装及Spec因客户而异。',
          zhTW:'2.1.1. Electric Power On & Off Sequence — UPS\n\n開啟UPS:(1)按電源按鈕並選擇開機選項,(2)按住Power按鈕2~3秒即可開/關。是否安裝及Spec因客戶而異。',
          ja:'2.1.1. Electric Power On & Off Sequence — UPS\n\nUPSをオンにします:(1)電源ボタンを押しPower On オプションを選択、(2)Powerボタンを2~3秒押すとOn/Offが切り替わります。設置有無・仕様は顧客により異なります。',
          vi:'2.1.1. Electric Power On & Off Sequence — UPS\n\nBật UPS: (1) nhấn nút nguồn và chọn tùy chọn bật nguồn, (2) nhấn giữ nút Power 2–3 giây để bật/tắt. Tình trạng lắp đặt/Spec khác nhau tùy khách hàng.'
        }},
        {img:cmImg('A','nbga',89),tx:{
          en:'2.1.1. Electric Power On & Off Sequence — Power Strip\n\nTurn on the power strip. No power strip on NBGA facilities for Intel.',
          ko:'2.1.1. Electric Power On & Off Sequence — Power Strip\n\nPower Strip을 켭니다. Intel향 NBGA 설비는 Power Strip이 없습니다.',
          zhCN:'2.1.1. Electric Power On & Off Sequence — Power Strip\n\n开启Power Strip。Intel向NBGA设备无Power Strip。',
          zhTW:'2.1.1. Electric Power On & Off Sequence — Power Strip\n\n開啟Power Strip。Intel向NBGA設備無Power Strip。',
          ja:'2.1.1. Electric Power On & Off Sequence — Power Strip\n\nPower Stripをオンにします。Intel向けNBGA設備にはPower Stripはありません。',
          vi:'2.1.1. Electric Power On & Off Sequence — Power Strip\n\nBật Power Strip. Thiết bị NBGA bản Intel không có Power Strip.'
        }},
        {img:cmImg('A','nbga',90),tx:{
          en:'2.1.1. Electric Power On & Off Sequence — Operation Panel\n\nTurn on the power of the Operation Panel.',
          ko:'2.1.1. Electric Power On & Off Sequence — Operation Panel\n\nOperation Panel의 전원을 켭니다.',
          zhCN:'2.1.1. Electric Power On & Off Sequence — Operation Panel\n\n開啟Operation Panel的电源。',
          zhTW:'2.1.1. Electric Power On & Off Sequence — Operation Panel\n\n開啟Operation Panel的電源。',
          ja:'2.1.1. Electric Power On & Off Sequence — Operation Panel\n\nOperation Panelの電源をオンにします。',
          vi:'2.1.1. Electric Power On & Off Sequence — Operation Panel\n\nBật nguồn Operation Panel.'
        }},
        {img:cmImg('A','nbga',91),tx:{
          en:'Operation — this section covers Power On & Off: Electric Power On Sequence, Controller/PC/Camera Power, and Turn Off Sequence.',
          ko:'Operation — Power On & Off: Electric Power On Sequence, Controller/PC/Camera Power, Turn Off Sequence를 다룹니다.',
          zhCN:'Operation——本节介绍Power On & Off:Electric Power On Sequence、Controller/PC/Camera Power、Turn Off Sequence。',
          zhTW:'Operation——本節介紹Power On & Off:Electric Power On Sequence、Controller/PC/Camera Power、Turn Off Sequence。',
          ja:'Operation——本節ではPower On & Off:Electric Power On Sequence、Controller/PC/Camera Power、Turn Off Sequenceを扱います。',
          vi:'Operation — phần này đề cập đến Power On & Off: Electric Power On Sequence, Controller/PC/Camera Power, Turn Off Sequence.'
        }},
        {img:cmImg('A','nbga',92),tx:{
          en:'2.1.2. PC Power\n\nTurn on the Host, 2D, 3D#1, and 3D#2 PCs.',
          ko:'2.1.2. PC Power\n\nHost, 2D, 3D#1, 3D#2 PC를 켭니다.',
          zhCN:'2.1.2. PC Power\n\n开启Host、2D、3D#1、3D#2 PC。',
          zhTW:'2.1.2. PC Power\n\n開啟Host、2D、3D#1、3D#2 PC。',
          ja:'2.1.2. PC Power\n\nHost、2D、3D#1、3D#2 PCをオンにします。',
          vi:'2.1.2. PC Power\n\nBật PC Host, 2D, 3D#1, 3D#2.'
        }},
        {img:cmImg('A','nbga',93),tx:{
          en:'2.1.2. LED Controller Power\n\nTurn on the 2D, 3D#1, and 3D#2 LED Controllers.',
          ko:'2.1.2. LED Controller Power\n\n2D, 3D#1, 3D#2 LED Controller를 켭니다.',
          zhCN:'2.1.2. LED Controller Power\n\n开启2D、3D#1、3D#2 LED Controller。',
          zhTW:'2.1.2. LED Controller Power\n\n開啟2D、3D#1、3D#2 LED Controller。',
          ja:'2.1.2. LED Controller Power\n\n2D、3D#1、3D#2 LED Controllerをオンにします。',
          vi:'2.1.2. LED Controller Power\n\nBật LED Controller 2D, 3D#1, 3D#2.'
        }},
        {img:cmImg('A','nbga',94),tx:{
          en:'2.1.2. PZT Controller Power\n\nTurn on the 3D#1 and 3D#2 PZT Controllers (PI PZT Controller and Nanofaktur PZT Controller variants shown).',
          ko:'2.1.2. PZT Controller Power\n\n3D#1, 3D#2 PZT Controller를 켭니다 (PI PZT Controller·Nanofaktur PZT Controller 모두 표시).',
          zhCN:'2.1.2. PZT Controller Power\n\n开启3D#1、3D#2 PZT Controller(同时展示PI PZT Controller·Nanofaktur PZT Controller)。',
          zhTW:'2.1.2. PZT Controller Power\n\n開啟3D#1、3D#2 PZT Controller(同時展示PI PZT Controller·Nanofaktur PZT Controller)。',
          ja:'2.1.2. PZT Controller Power\n\n3D#1、3D#2 PZT Controllerをオンにします(PI PZT Controller・Nanofaktur PZT Controller両方表示)。',
          vi:'2.1.2. PZT Controller Power\n\nBật PZT Controller 3D#1, 3D#2 (hiển thị cả PI PZT Controller và Nanofaktur PZT Controller).'
        }},
        {img:cmImg('A','nbga',95),tx:{
          en:'2.1.2. AF Controller Power\n\nTurn on the 3D#1 and 3D#2 AF Controllers (Old-version and New-version AF Controller variants shown).',
          ko:'2.1.2. AF Controller Power\n\n3D#1, 3D#2 AF Controller를 켭니다 (구버전·신버전 AF Controller 모두 표시).',
          zhCN:'2.1.2. AF Controller Power\n\n开启3D#1、3D#2 AF Controller(同时展示旧版·新版AF Controller)。',
          zhTW:'2.1.2. AF Controller Power\n\n開啟3D#1、3D#2 AF Controller(同時展示舊版·新版AF Controller)。',
          ja:'2.1.2. AF Controller Power\n\n3D#1、3D#2 AF Controllerをオンにします(旧バージョン・新バージョンAF Controller両方表示)。',
          vi:'2.1.2. AF Controller Power\n\nBật AF Controller 3D#1, 3D#2 (hiển thị cả phiên bản cũ và mới của AF Controller).'
        }},
        {img:cmImg('A','nbga',96),tx:{
          en:'Operation — this section covers Power On & Off: Electric Power On Sequence, Controller/PC/Camera Power, and Turn Off Sequence.',
          ko:'Operation — Power On & Off: Electric Power On Sequence, Controller/PC/Camera Power, Turn Off Sequence를 다룹니다.',
          zhCN:'Operation——本节介绍Power On & Off:Electric Power On Sequence、Controller/PC/Camera Power、Turn Off Sequence。',
          zhTW:'Operation——本節介紹Power On & Off:Electric Power On Sequence、Controller/PC/Camera Power、Turn Off Sequence。',
          ja:'Operation——本節ではPower On & Off:Electric Power On Sequence、Controller/PC/Camera Power、Turn Off Sequenceを扱います。',
          vi:'Operation — phần này đề cập đến Power On & Off: Electric Power On Sequence, Controller/PC/Camera Power, Turn Off Sequence.'
        }},
        {img:cmImg('A','nbga',97),tx:{
          en:'2.1.3. Turn Off Sequence\n\nTurn off in the reverse order of turn-on: Controller (AF, LED, PZT, PC) → Operation Panel power off → Power Strip off → UPS off → CP off → Main Panel off. Turning off out of order may damage electrical components.',
          ko:'2.1.3. Turn Off Sequence\n\n켤 때의 역순으로 끕니다: Controller(AF, LED, PZT, PC) → Operation Panel 전원 Off → Power Strip Off → UPS Off → CP Off → Main Panel Off. 순서를 지키지 않으면 전장 부품이 손상될 수 있습니다.',
          zhCN:'2.1.3. Turn Off Sequence\n\n按开启时的相反顺序关闭:Controller(AF、LED、PZT、PC) → Operation Panel电源关闭 → Power Strip关闭 → UPS关闭 → CP关闭 → Main Panel关闭。未按顺序关闭可能损坏电气元件。',
          zhTW:'2.1.3. Turn Off Sequence\n\n按開啟時的相反順序關閉:Controller(AF、LED、PZT、PC) → Operation Panel電源關閉 → Power Strip關閉 → UPS關閉 → CP關閉 → Main Panel關閉。未按順序關閉可能損壞電氣元件。',
          ja:'2.1.3. Turn Off Sequence\n\nオンにした時の逆順でオフにします:Controller(AF、LED、PZT、PC) → Operation Panel電源オフ → Power Stripオフ → UPSオフ → CPオフ → Main Panelオフ。順序を守らないと電装部品が故障する恐れがあります。',
          vi:'2.1.3. Turn Off Sequence\n\nTắt theo thứ tự ngược lại lúc bật: Controller (AF, LED, PZT, PC) → tắt nguồn Operation Panel → tắt Power Strip → tắt UPS → tắt CP → tắt Main Panel. Tắt sai thứ tự có thể làm hỏng linh kiện điện.'
        }}
      ]
    }
  },

  G:{
    smtv:{
      title:{ko:'G. Handler Teaching',en:'G. Handler Teaching',zhCN:'G. Handler Teaching',zhTW:'G. Handler Teaching',ja:'G. Handler Teaching'},
      chapters:[
        {from:1,title:{ko:'A. Elevator',en:'A. Elevator',zhCN:'A. Elevator',zhTW:'A. Elevator',ja:'A. Elevator'}},
        {from:25,title:{ko:'B. Load Multi Picker Pick Pos',en:'B. Load Multi Picker Pick Pos',zhCN:'B. Load Multi Picker Pick Pos',zhTW:'B. Load Multi Picker Pick Pos',ja:'B. Load Multi Picker Pick Pos'}},
        {from:34,title:{ko:'C. Unload Multi Picker Place Pos',en:'C. Unload Multi Picker Place Pos',zhCN:'C. Unload Multi Picker Place Pos',zhTW:'C. Unload Multi Picker Place Pos',ja:'C. Unload Multi Picker Place Pos'}},
        {from:43,title:{ko:'D. Aligner',en:'D. Aligner',zhCN:'D. Aligner',zhTW:'D. Aligner',ja:'D. Aligner'}},
        {from:62,title:{ko:'E. Pedestal',en:'E. Pedestal',zhCN:'E. Pedestal',zhTW:'E. Pedestal',ja:'E. Pedestal'}},
        {from:77,title:{ko:'F. Tray Transfer Module (TTM)',en:'F. Tray Transfer Module (TTM)',zhCN:'F. Tray Transfer Module (TTM)',zhTW:'F. Tray Transfer Module (TTM)',ja:'F. Tray Transfer Module (TTM)'}},
        {from:88,title:{ko:'G. Multi Sorter Module (MSM)',en:'G. Multi Sorter Module (MSM)',zhCN:'G. Multi Sorter Module (MSM)',zhTW:'G. Multi Sorter Module (MSM)',ja:'G. Multi Sorter Module (MSM)'}},
        {from:96,title:{ko:'H. 3D Inspector',en:'H. 3D Inspector',zhCN:'H. 3D Inspector',zhTW:'H. 3D Inspector',ja:'H. 3D Inspector'}},
        {from:103,title:{ko:'I. 2D Inspector',en:'I. 2D Inspector',zhCN:'I. 2D Inspector',zhTW:'I. 2D Inspector',ja:'I. 2D Inspector'}},
        {from:113,title:{ko:'J. LTS Target Position',en:'J. LTS Target Position',zhCN:'J. LTS Target Position',zhTW:'J. LTS Target Position',ja:'J. LTS Target Position'}}
      ],
      slides:[
        {img:cmImg('F','smtv',1),tx:{
          vi:'Chương này giới thiệu Handler Teaching cho iSIS-SMTV — quy trình Teaching vị trí cho Elevator, Load Multi Picker, Unload Multi Picker, Aligner, Pedestal, Tray Transfer Module (TTM), Multi Sorter Module (MSM), 3D Inspector và 2D Inspector.',
          en:'This chapter covers Handler Teaching for iSIS-SMTV — the position-teaching sequence for the Elevator, Load Multi Picker, Unload Multi Picker, Aligner, Pedestal, Tray Transfer Module (TTM), Multi Sorter Module (MSM), 3D Inspector, and 2D Inspector.',
          ko:'본 챕터에서는 iSIS-SMTV의 Handler Teaching — Elevator, Load Multi Picker, Unload Multi Picker, Aligner, Pedestal, Tray Transfer Module(TTM), Multi Sorter Module(MSM), 3D Inspector, 2D Inspector의 Position Teaching 절차를 다룹니다.',
          zhCN:'本章介绍iSIS-SMTV的Handler Teaching——Elevator、Load Multi Picker、Unload Multi Picker、Aligner、Pedestal、Tray Transfer Module(TTM)、Multi Sorter Module(MSM)、3D Inspector、2D Inspector的Position Teaching流程。',
          zhTW:'本章介紹iSIS-SMTV的Handler Teaching——Elevator、Load Multi Picker、Unload Multi Picker、Aligner、Pedestal、Tray Transfer Module(TTM)、Multi Sorter Module(MSM)、3D Inspector、2D Inspector的Position Teaching流程。',
          ja:'本章ではiSIS-SMTVのHandler Teaching——Elevator、Load Multi Picker、Unload Multi Picker、Aligner、Pedestal、Tray Transfer Module(TTM)、Multi Sorter Module(MSM)、3D Inspector、2D InspectorのPosition Teaching手順を扱います。'
        }},
        {img:cmImg('F','smtv',2),tx:{
          vi:'A. Elevator — phần này đề cập đến Elevator Z Up Position, Elevator Z One Position, Elevator Z Wait Position và Indexer Y Front Position.',
          en:'A. Elevator — this section covers the Elevator Z Up Position, Elevator Z One Position, Elevator Z Wait Position, and Indexer Y Front Position.',
          ko:'A. Elevator — Elevator Z Up Position, Elevator Z One Position, Elevator Z Wait Position, Indexer Y Front Position을 다룹니다.',
          zhCN:'A. Elevator——本节介绍Elevator Z Up Position、Elevator Z One Position、Elevator Z Wait Position、Indexer Y Front Position。',
          zhTW:'A. Elevator——本節介紹Elevator Z Up Position、Elevator Z One Position、Elevator Z Wait Position、Indexer Y Front Position。',
          ja:'A. Elevator——本節ではElevator Z Up Position、Elevator Z One Position、Elevator Z Wait Position、Indexer Y Front Positionを扱います。'
        }},
        {img:cmImg('F','smtv',3),tx:{
          vi:'A-1. Elevator — Up Position\n\nUp Position là độ cao của Elevator khi nâng Tray lên. Đặt một Tray lên Stacker như hình, sau đó Teaching Up Position cho Load, Empty và Reject Empty Elevator theo cùng cách.',
          en:'A-1. Elevator — Up Position\n\nThe Up Position is the elevator height reached when lifting the tray. Place a tray on the stacker as shown, then teach the Up Position of the Load, Empty, and Reject Empty Elevators the same way.',
          ko:'A-1. Elevator — Up Position\n\nUp Position은 Tray를 들어올리는 Elevator의 높이입니다. 그림과 같이 Stacker에 Tray를 올린 뒤, Load·Empty·Reject Empty Elevator의 Up Position을 동일한 방식으로 Teaching합니다.',
          zhCN:'A-1. Elevator — Up Position\n\nUp Position是抬起Tray时Elevator到达的高度。如图所示将Tray放在Stacker上,然后以相同方式对Load、Empty、Reject Empty Elevator进行Up Position的Teaching。',
          zhTW:'A-1. Elevator — Up Position\n\nUp Position是抬起Tray時Elevator到達的高度。如圖所示將Tray放在Stacker上,然後以相同方式對Load、Empty、Reject Empty Elevator進行Up Position的Teaching。',
          ja:'A-1. Elevator — Up Position\n\nUp PositionはTrayを持ち上げる際のElevatorの高さです。図のようにStacker上にTrayを置き、Load・Empty・Reject Empty ElevatorのUp Positionを同じ方法でTeachingします。'
        }},
        {img:cmImg('F','smtv',4),tx:{
          vi:'Host P/G ▸ Handler ▸ Map ▸ Elevator. Di chuyển vị trí Z của Elevator sao cho khoảng cách giữa Stacker và Tray là 2mm, như hình. (Stacker loại Spring cũng Teaching theo cách tương tự.)',
          en:'Host P/G ▸ Handler ▸ Map ▸ Elevator. Move the Elevator Z position so the gap between the Stacker and Tray becomes 2mm, as shown. (Spring-type Stackers are taught the same way.)',
          ko:'Host P/G ▸ Handler ▸ Map ▸ Elevator 선택. 그림처럼 Stacker와 Tray 사이 간격이 2mm가 되도록 Elevator Z Position을 이동합니다. (Spring 타입 Stacker도 동일한 방식으로 Teaching)',
          zhCN:'Host P/G ▸ Handler ▸ Map ▸ 选择Elevator。如图移动Elevator Z Position,使Stacker与Tray之间的间隙为2mm。(Spring类型的Stacker也以相同方式进行Teaching)',
          zhTW:'Host P/G ▸ Handler ▸ Map ▸ 選擇Elevator。如圖移動Elevator Z Position,使Stacker與Tray之間的間隙為2mm。(Spring類型的Stacker也以相同方式進行Teaching)',
          ja:'Host P/G ▸ Handler ▸ Map ▸ Elevatorを選択。図のようにStackerとTrayの間隔が2mmになるようElevator Z Positionを移動します。(SpringタイプのStackerも同じ方法でTeaching)'
        }},
        {img:cmImg('F','smtv',5),tx:{
          vi:'Teach & Save vị trí hiện tại làm Up Position.',
          en:'Teach & Save the current position as the Up Position.',
          ko:'현재 위치를 Teach & Save 하여 Up Position으로 저장합니다.',
          zhCN:'将当前位置Teach & Save,保存为Up Position。',
          zhTW:'將目前位置Teach & Save,儲存為Up Position。',
          ja:'現在の位置をTeach & SaveしてUp Positionとして保存します。'
        }},
        {img:cmImg('F','smtv',6),tx:{
          vi:'< Elevator Z Up Position — Stacker (trái) / Stacker loại Spring (phải) >',
          en:'< Elevator Z Up Position — Stacker (left) / Spring-type Stacker (right) >',
          ko:'< Elevator Z Up Position — Stacker(좌) / Spring 타입 Stacker(우) >',
          zhCN:'< Elevator Z Up Position — Stacker(左)/ Spring类型Stacker(右) >',
          zhTW:'< Elevator Z Up Position — Stacker(左)/ Spring類型Stacker(右) >',
          ja:'< Elevator Z Up Position — Stacker(左)/ Springタイプ Stacker(右) >'
        }},
        {img:cmImg('F','smtv',7),tx:{
          vi:'A. Elevator — phần này đề cập đến Elevator Z Up Position, Elevator Z One Position, Elevator Z Wait Position và Indexer Y Front Position.',
          en:'A. Elevator — this section covers the Elevator Z Up Position, Elevator Z One Position, Elevator Z Wait Position, and Indexer Y Front Position.',
          ko:'A. Elevator — Elevator Z Up Position, Elevator Z One Position, Elevator Z Wait Position, Indexer Y Front Position을 다룹니다.',
          zhCN:'A. Elevator——本节介绍Elevator Z Up Position、Elevator Z One Position、Elevator Z Wait Position、Indexer Y Front Position。',
          zhTW:'A. Elevator——本節介紹Elevator Z Up Position、Elevator Z One Position、Elevator Z Wait Position、Indexer Y Front Position。',
          ja:'A. Elevator——本節ではElevator Z Up Position、Elevator Z One Position、Elevator Z Wait Position、Indexer Y Front Positionを扱います。'
        }},
        {img:cmImg('F','smtv',8),tx:{
          vi:'A-2. Elevator — One Position\n\nOne Position là độ cao mà Stacker lọt vào giữa hai Tray. Đặt hai Tray lên Stacker như hình.',
          en:'A-2. Elevator — One Position\n\nThe One Position is the height at which the Stacker slots in between two trays. Place two trays on the stacker as shown.',
          ko:'A-2. Elevator — One Position\n\nOne Position은 Tray 2장 사이로 Stacker가 들어가는 높이입니다. 그림처럼 Stacker에 Tray 2장을 올립니다.',
          zhCN:'A-2. Elevator — One Position\n\nOne Position是Stacker插入两张Tray之间的高度。如图所示在Stacker上放置2张Tray。',
          zhTW:'A-2. Elevator — One Position\n\nOne Position是Stacker插入兩張Tray之間的高度。如圖所示在Stacker上放置2張Tray。',
          ja:'A-2. Elevator — One Position\n\nOne PositionはTray2枚の間にStackerが入る高さです。図のようにStackerの上にTrayを2枚載せます。'
        }},
        {img:cmImg('F','smtv',9),tx:{
          vi:'Host P/G ▸ Handler ▸ Map ▸ Elevator. Di chuyển đến Up Position, sau đó Unclamp Stacker.',
          en:'Host P/G ▸ Handler ▸ Map ▸ Elevator. Move to the Up Position, then unclamp the Stacker.',
          ko:'Host P/G ▸ Handler ▸ Map ▸ Elevator. Up Position으로 이동한 뒤 Stacker를 Unclamp 합니다.',
          zhCN:'Host P/G ▸ Handler ▸ Map ▸ Elevator。移动到Up Position后,将Stacker Unclamp。',
          zhTW:'Host P/G ▸ Handler ▸ Map ▸ Elevator。移動到Up Position後,將Stacker Unclamp。',
          ja:'Host P/G ▸ Handler ▸ Map ▸ Elevator。Up Positionへ移動した後、StackerをUnclampします。'
        }},
        {img:cmImg('F','smtv',10),tx:{
          vi:'Hạ vị trí Z để Stacker nằm giữa hai Tray.',
          en:'Lower the Z position so the Stacker is located between the trays.',
          ko:'Z Position을 낮춰 Stacker가 Tray 사이에 위치하도록 합니다.',
          zhCN:'降低Z Position,使Stacker位于两张Tray之间。',
          zhTW:'降低Z Position,使Stacker位於兩張Tray之間。',
          ja:'Z Positionを下げ、Stackerが2枚のTrayの間に位置するようにします。'
        }},
        {img:cmImg('F','smtv',11),tx:{
          vi:'Đẩy Stacker vào như hình để xác nhận nó nằm giữa hai Tray. Clamp Stacker và xác nhận mọi Stacker đều nằm giữa các Tray.',
          en:'Push the Stacker in as shown, to confirm it is located between the trays. Clamp the Stacker and confirm every Stacker is positioned between the trays.',
          ko:'그림처럼 Stacker를 밀어 넣어 Tray 사이에 위치하는지 확인합니다. Stacker를 Clamp 하여 모든 Stacker가 Tray 사이에 위치하는지 확인합니다.',
          zhCN:'如图推入Stacker,确认其位于两张Tray之间。将Stacker Clamp,确认所有Stacker都位于Tray之间。',
          zhTW:'如圖推入Stacker,確認其位於兩張Tray之間。將Stacker Clamp,確認所有Stacker都位於Tray之間。',
          ja:'図のようにStackerを押し入れ、Trayの間に位置するか確認します。StackerをClampし、すべてのStackerがTrayの間に位置するか確認します。'
        }},
        {img:cmImg('F','smtv',12),tx:{
          vi:'Teach & Save vị trí hiện tại làm One Position.',
          en:'Teach & Save the current position as the One Position.',
          ko:'현재 위치를 Teach & Save 하여 One Position으로 저장합니다.',
          zhCN:'将当前位置Teach & Save,保存为One Position。',
          zhTW:'將目前位置Teach & Save,儲存為One Position。',
          ja:'現在の位置をTeach & SaveしてOne Positionとして保存します。'
        }},
        {img:cmImg('F','smtv',13),tx:{
          vi:'< One Position — Good: Stacker nằm giữa hai Tray không có va chạm. Bad: xảy ra va chạm giữa Stacker và Tray. >',
          en:'< One Position — Good: the Stacker sits between tray and tray with no interference. Bad: interference occurs between the Stacker and Tray. >',
          ko:'< One Position — Good: Stacker가 Tray와 Tray 사이에 간섭 없이 위치. Bad: Stacker와 Tray 사이 간섭 발생 >',
          zhCN:'< One Position — Good:Stacker无干涉地位于Tray与Tray之间。Bad:Stacker与Tray之间发生干涉 >',
          zhTW:'< One Position — Good:Stacker無干涉地位於Tray與Tray之間。Bad:Stacker與Tray之間發生干涉 >',
          ja:'< One Position — Good:StackerがTrayとTrayの間に干渉なく位置する。Bad:StackerとTrayの間に干渉が発生する >'
        }},
        {img:cmImg('F','smtv',14),tx:{
          vi:'A. Elevator — phần này đề cập đến Elevator Z Up Position, Elevator Z One Position, Elevator Z Wait Position và Indexer Y Front Position.',
          en:'A. Elevator — this section covers the Elevator Z Up Position, Elevator Z One Position, Elevator Z Wait Position, and Indexer Y Front Position.',
          ko:'A. Elevator — Elevator Z Up Position, Elevator Z One Position, Elevator Z Wait Position, Indexer Y Front Position을 다룹니다.',
          zhCN:'A. Elevator——本节介绍Elevator Z Up Position、Elevator Z One Position、Elevator Z Wait Position、Indexer Y Front Position。',
          zhTW:'A. Elevator——本節介紹Elevator Z Up Position、Elevator Z One Position、Elevator Z Wait Position、Indexer Y Front Position。',
          ja:'A. Elevator——本節ではElevator Z Up Position、Elevator Z One Position、Elevator Z Wait Position、Indexer Y Front Positionを扱います。'
        }},
        {img:cmImg('F','smtv',15),tx:{
          vi:'A-3. Elevator — Wait Position\n\nWait Position là nơi Tray đã tách được đặt lên Rail. Teaching Wait Position cho Load, Empty và Good Elevator theo cùng cách.',
          en:'A-3. Elevator — Wait Position\n\nThe Wait Position is where the separated tray is placed on the rail. Teach the Wait Position of the Load, Empty, and Good Elevators the same way.',
          ko:'A-3. Elevator — Wait Position\n\nWait Position은 분리된 Tray가 Rail 위에 놓이는 위치입니다. Load·Empty·Good Elevator의 Wait Position을 동일한 방식으로 Teaching합니다.',
          zhCN:'A-3. Elevator — Wait Position\n\nWait Position是分离后的Tray放置于Rail上的位置。Load、Empty、Good Elevator也以相同方式进行Wait Position的Teaching。',
          zhTW:'A-3. Elevator — Wait Position\n\nWait Position是分離後的Tray放置於Rail上的位置。Load、Empty、Good Elevator也以相同方式進行Wait Position的Teaching。',
          ja:'A-3. Elevator — Wait Position\n\nWait Positionは分離されたTrayがRail上に置かれる位置です。Load・Empty・Good Elevatorも同じ方法でWait PositionをTeachingします。'
        }},
        {img:cmImg('F','smtv',16),tx:{
          vi:'Host P/G ▸ Handler ▸ Map ▸ Elevator ▸ chọn Wait Position. Nhấn Home để khởi tạo vị trí Z, sau đó Teach & Save vị trí Z hiện tại (0mm).',
          en:'Host P/G ▸ Handler ▸ Map ▸ Elevator ▸ select Wait Position. Click Home to initialize the Z position, then Teach & Save the current Z position (0mm).',
          ko:'Host P/G ▸ Handler ▸ Map ▸ Elevator ▸ Wait Position 선택. Home을 클릭해 Z Position을 초기화한 뒤, 현재 Z Position(0mm)을 Teach & Save 합니다.',
          zhCN:'Host P/G ▸ Handler ▸ Map ▸ Elevator ▸ 选择Wait Position。点击Home将Z Position初始化,然后将当前Z Position(0mm)Teach & Save。',
          zhTW:'Host P/G ▸ Handler ▸ Map ▸ Elevator ▸ 選擇Wait Position。點擊Home將Z Position初始化,然後將目前Z Position(0mm)Teach & Save。',
          ja:'Host P/G ▸ Handler ▸ Map ▸ Elevator ▸ Wait Positionを選択。Homeをクリックして Z Positionを初期化した後、現在のZ Position(0mm)をTeach & Saveします。'
        }},
        {img:cmImg('F','smtv',17),tx:{
          vi:'⚠ Lưu ý — Nếu vị trí Home quá cao, có thể xảy ra va chạm với Elevator khi Tray di chuyển. Với loại Motor, hãy hiệu chỉnh bằng vị trí Sensor/vật thể.',
          en:'⚠ Caution — If the Home position is too high, collision with the elevator may occur when the tray moves. For motor-type units, correct using the sensor/object position.',
          ko:'⚠ 주의 — Home 위치가 너무 높으면 Tray 이동 중 Elevator와 충돌할 수 있습니다. Motor 방식일 경우 Sensor/오브젝트 위치로 보정합니다.',
          zhCN:'⚠ 注意——Home位置过高时,Tray移动过程中可能与Elevator发生碰撞。若为Motor方式,请以Sensor/物体位置进行校正。',
          zhTW:'⚠ 注意——Home位置過高時,Tray移動過程中可能與Elevator發生碰撞。若為Motor方式,請以Sensor/物體位置進行校正。',
          ja:'⚠ 注意 — Home位置が高すぎるとTray移動中にElevatorと衝突する可能性があります。Motor方式の場合はSensor/オブジェクト位置で補正します。'
        }},
        {img:cmImg('F','smtv',18),tx:{
          vi:'A. Elevator — phần này đề cập đến Elevator Z Up Position, Elevator Z One Position, Elevator Z Wait Position và Indexer Y Front Position.',
          en:'A. Elevator — this section covers the Elevator Z Up Position, Elevator Z One Position, Elevator Z Wait Position, and Indexer Y Front Position.',
          ko:'A. Elevator — Elevator Z Up Position, Elevator Z One Position, Elevator Z Wait Position, Indexer Y Front Position을 다룹니다.',
          zhCN:'A. Elevator——本节介绍Elevator Z Up Position、Elevator Z One Position、Elevator Z Wait Position、Indexer Y Front Position。',
          zhTW:'A. Elevator——本節介紹Elevator Z Up Position、Elevator Z One Position、Elevator Z Wait Position、Indexer Y Front Position。',
          ja:'A. Elevator——本節ではElevator Z Up Position、Elevator Z One Position、Elevator Z Wait Position、Indexer Y Front Positionを扱います。'
        }},
        {img:cmImg('F','smtv',19),tx:{
          vi:'A-4. Elevator — Indexer Y Front Position\n\nFront Position là nơi Indexer Load hoặc Unload Tray. Đặt Tray lên Rail như hình.',
          en:'A-4. Elevator — Indexer Y Front Position\n\nThe Front Position is where the indexer loads or unloads the tray. Place the tray on the rail as shown.',
          ko:'A-4. Elevator — Indexer Y Front Position\n\nFront Position은 Indexer가 Tray를 Load·Unload 하는 위치입니다. 그림처럼 Tray를 Rail 위에 올립니다.',
          zhCN:'A-4. Elevator — Indexer Y Front Position\n\nFront Position是Indexer装载/卸载Tray的位置。如图将Tray放到Rail上。',
          zhTW:'A-4. Elevator — Indexer Y Front Position\n\nFront Position是Indexer裝載/卸載Tray的位置。如圖將Tray放到Rail上。',
          ja:'A-4. Elevator — Indexer Y Front Position\n\nFront PositionはIndexerがTrayをロード・アンロードする位置です。図のようにTrayをRailの上に載せます。'
        }},
        {img:cmImg('F','smtv',20),tx:{
          vi:'Host P/G ▸ Handler ▸ Map ▸ Indexer. Bật B/W Clamp và F/W Clamp để cố định Tray. (F/W = Forward Finger Clamp, B/W = Backward Finger Clamp)',
          en:'Host P/G ▸ Handler ▸ Map ▸ Indexer. Turn on the B/W Clamp and F/W Clamp to fasten the tray. (F/W = Forward Finger Clamp, B/W = Backward Finger Clamp)',
          ko:'Host P/G ▸ Handler ▸ Map ▸ Indexer. B/W Clamp와 F/W Clamp를 켜서 Tray를 고정합니다. (F/W=Forward Finger Clamp, B/W=Backward Finger Clamp)',
          zhCN:'Host P/G ▸ Handler ▸ Map ▸ Indexer。开启B/W Clamp与F/W Clamp,固定Tray。(F/W=Forward Finger Clamp,B/W=Backward Finger Clamp)',
          zhTW:'Host P/G ▸ Handler ▸ Map ▸ Indexer。開啟B/W Clamp與F/W Clamp,固定Tray。(F/W=Forward Finger Clamp,B/W=Backward Finger Clamp)',
          ja:'Host P/G ▸ Handler ▸ Map ▸ Indexer。B/W ClampとF/W Clampをオンにし、Trayを固定します。(F/W=Forward Finger Clamp、B/W=Backward Finger Clamp)'
        }},
        {img:cmImg('F','smtv',21),tx:{
          vi:'Di chuyển Indexer sao cho Tray khớp với Tray Guide như hình, sau đó Unclamp theo thứ tự: F/W Clamp rồi đến B/W Clamp.',
          en:'Move the Indexer so the tray matches the Tray Guide as shown, then unclamp in order: F/W Clamp, then B/W Clamp.',
          ko:'그림처럼 Indexer를 움직여 Tray가 Tray Guide에 맞도록 한 뒤, F/W Clamp → B/W Clamp 순서로 Unclamp 합니다.',
          zhCN:'如图移动Indexer,使Tray对准Tray Guide,然后按F/W Clamp、B/W Clamp的顺序Unclamp。',
          zhTW:'如圖移動Indexer,使Tray對準Tray Guide,然後按F/W Clamp、B/W Clamp的順序Unclamp。',
          ja:'図のようにIndexerを動かし、TrayがTray Guideに合うようにした後、F/W Clamp、B/W Clampの順にUnclampします。'
        }},
        {img:cmImg('F','smtv',22),tx:{
          vi:'Unclamp Elevator Stacker, sau đó di chuyển Elevator đến Up Position để xác nhận Tray nâng lên không va chạm. ⚠ Chú ý tránh làm hỏng Tray do Stacker khi Elevator nâng lên.',
          en:'Unclamp the Elevator Stacker, then move the Elevator to the Up Position to confirm the tray rises without interference. ⚠ Be careful of tray damage caused by the Stacker when the elevator is raised.',
          ko:'Elevator Stacker를 Unclamp 한 뒤, Elevator를 Up Position으로 이동시켜 Tray가 간섭 없이 올라가는지 확인합니다. ⚠ Elevator 상승 시 Stacker에 의한 Tray 손상에 주의합니다.',
          zhCN:'将Elevator Stacker Unclamp后,将Elevator移动到Up Position,确认Tray能否无干涉地升起。⚠ Elevator上升时,注意Stacker可能造成的Tray损伤。',
          zhTW:'將Elevator Stacker Unclamp後,將Elevator移動到Up Position,確認Tray能否無干涉地升起。⚠ Elevator上升時,注意Stacker可能造成的Tray損傷。',
          ja:'Elevator StackerをUnclampした後、ElevatorをUp Positionへ移動させ、Trayが干渉なく上がるか確認します。⚠ Elevator上昇時、Stackerによる Tray損傷に注意します。'
        }},
        {img:cmImg('F','smtv',23),tx:{
          vi:'Teach & Save vị trí Indexer hiện tại làm Front Tray Position. Teaching Front Tray Position cho mọi Indexer theo cùng cách.',
          en:'Teach & Save the current Indexer position as the Front Tray Position. Teach the Front Tray Position of every Indexer the same way.',
          ko:'현재 Indexer 위치를 Teach & Save 하여 Front Tray Position으로 저장합니다. 모든 Indexer의 Front Tray Position을 동일한 방식으로 Teaching합니다.',
          zhCN:'将当前Indexer位置Teach & Save,保存为Front Tray Position。所有Indexer的Front Tray Position也以相同方式进行Teaching。',
          zhTW:'將目前Indexer位置Teach & Save,儲存為Front Tray Position。所有Indexer的Front Tray Position也以相同方式進行Teaching。',
          ja:'現在のIndexer位置をTeach & SaveしてFront Tray Positionとして保存します。すべてのIndexerのFront Tray Positionも同じ方法でTeachingします。'
        }},
        {img:cmImg('F','smtv',24),tx:{
          vi:'< Front Position — Good (trái) / Bad (phải) >',
          en:'< Front Position — Good (left) / Bad (right) >',
          ko:'< Front Position — Good(좌) / Bad(우) >',
          zhCN:'< Front Position — Good(左)/ Bad(右) >',
          zhTW:'< Front Position — Good(左)/ Bad(右) >',
          ja:'< Front Position — Good(左)/ Bad(右) >'
        }},
        {img:cmImg('F','smtv',25),tx:{
          vi:'Chương này giới thiệu Handler Teaching cho iSIS-SMTV — quy trình Teaching vị trí cho Elevator, Load Multi Picker, Unload Multi Picker, Aligner, Pedestal, Tray Transfer Module (TTM), Multi Sorter Module (MSM), 3D Inspector và 2D Inspector.',
          en:'This chapter covers Handler Teaching for iSIS-SMTV — the position-teaching sequence for the Elevator, Load Multi Picker, Unload Multi Picker, Aligner, Pedestal, Tray Transfer Module (TTM), Multi Sorter Module (MSM), 3D Inspector, and 2D Inspector.',
          ko:'본 챕터에서는 iSIS-SMTV의 Handler Teaching — Elevator, Load Multi Picker, Unload Multi Picker, Aligner, Pedestal, Tray Transfer Module(TTM), Multi Sorter Module(MSM), 3D Inspector, 2D Inspector의 Position Teaching 절차를 다룹니다.',
          zhCN:'本章介绍iSIS-SMTV的Handler Teaching——Elevator、Load Multi Picker、Unload Multi Picker、Aligner、Pedestal、Tray Transfer Module(TTM)、Multi Sorter Module(MSM)、3D Inspector、2D Inspector的Position Teaching流程。',
          zhTW:'本章介紹iSIS-SMTV的Handler Teaching——Elevator、Load Multi Picker、Unload Multi Picker、Aligner、Pedestal、Tray Transfer Module(TTM)、Multi Sorter Module(MSM)、3D Inspector、2D Inspector的Position Teaching流程。',
          ja:'本章ではiSIS-SMTVのHandler Teaching——Elevator、Load Multi Picker、Unload Multi Picker、Aligner、Pedestal、Tray Transfer Module(TTM)、Multi Sorter Module(MSM)、3D Inspector、2D InspectorのPosition Teaching手順を扱います。'
        }},
        {img:cmImg('F','smtv',26),tx:{
          vi:'B. Load Multi Picker — Pick Position\n\nVị trí Load Multi Picker Pick Sample từ Tray trên Load Rail. Vị trí chuẩn được đặt tại Pin-hole ở đáy Reference Tray.',
          en:'B. Load Multi Picker — Pick Position\n\nThe position where the Load Multi Picker picks samples from the tray on the load rail. The reference position is set at the pin-hole on the bottom of the reference tray.',
          ko:'B. Load Multi Picker — Pick Position\n\nLoad Rail의 Tray에서 Load Multi Picker가 Sample을 Pick하는 위치입니다. 기준 위치는 Reference Tray 바닥의 Pin-hole에 설정합니다.',
          zhCN:'B. Load Multi Picker — Pick Position\n\n是Load Multi Picker从Load Rail的Tray上抓取Sample的位置。基准位置设定在Reference Tray底部的Pin-hole。',
          zhTW:'B. Load Multi Picker — Pick Position\n\n是Load Multi Picker從Load Rail的Tray上抓取Sample的位置。基準位置設定在Reference Tray底部的Pin-hole。',
          ja:'B. Load Multi Picker — Pick Position\n\nLoad RailのTrayからLoad Multi PickerがSampleをPickする位置です。基準位置はReference Tray底面のPin-holeに設定します。'
        }},
        {img:cmImg('F','smtv',27),tx:{
          vi:'Gắn Teaching Pin vào Picker 6 như hình, và bật Picker 6 Down Solenoid.',
          en:'Attach the Teaching Pin to Picker 6 as shown, and turn on the Picker 6 Down Solenoid.',
          ko:'그림처럼 Picker 6에 Teaching Pin을 장착하고, Picker 6 Down Solenoid를 켭니다.',
          zhCN:'如图在Picker 6上安装Teaching Pin,并开启Picker 6 Down Solenoid。',
          zhTW:'如圖在Picker 6上安裝Teaching Pin,並開啟Picker 6 Down Solenoid。',
          ja:'図のようにPicker 6にTeaching Pinを装着し、Picker 6 Down Solenoidをオンにします。'
        }},
        {img:cmImg('F','smtv',28),tx:{
          vi:'Host P/G ▸ Handler ▸ Map ▸ chọn Load Multi Picker → di chuyển đến X Load Pick Reference Position.',
          en:'Host P/G ▸ Handler ▸ Map ▸ select Load Multi Picker → move to the X Load Pick Reference Position.',
          ko:'Host P/G ▸ Handler ▸ Map ▸ Load Multi Picker 선택 → X Load Pick Reference Position으로 이동합니다.',
          zhCN:'Host P/G ▸ Handler ▸ Map ▸ 选择Load Multi Picker → 移动到X Load Pick Reference Position。',
          zhTW:'Host P/G ▸ Handler ▸ Map ▸ 選擇Load Multi Picker → 移動到X Load Pick Reference Position。',
          ja:'Host P/G ▸ Handler ▸ Map ▸ Load Multi Pickerを選択 → X Load Pick Reference Positionへ移動します。'
        }},
        {img:cmImg('F','smtv',29),tx:{
          vi:'Host P/G ▸ Handler ▸ Map ▸ chọn Load Indexer → bật B/W và F/W Clamp để cố định Reference Tray (Load Rail), sau đó di chuyển Indexer đến vị trí Multi Picker.',
          en:'Host P/G ▸ Handler ▸ Map ▸ select Load Indexer → turn on the B/W and F/W Clamps to fasten the reference tray (Load Rail), then move the Indexer to the Multi Picker position.',
          ko:'Host P/G ▸ Handler ▸ Map ▸ Load Indexer 선택 → B/W·F/W Clamp를 켜서 Reference Tray(Load Rail)를 고정하고, Indexer를 Multi Picker 위치로 이동합니다.',
          zhCN:'Host P/G ▸ Handler ▸ Map ▸ 选择Load Indexer → 开启B/W·F/W Clamp固定Reference Tray(Load Rail),并将Indexer移动到Multi Picker位置。',
          zhTW:'Host P/G ▸ Handler ▸ Map ▸ 選擇Load Indexer → 開啟B/W·F/W Clamp固定Reference Tray(Load Rail),並將Indexer移動到Multi Picker位置。',
          ja:'Host P/G ▸ Handler ▸ Map ▸ Load Indexerを選択 → B/W・F/W ClampをオンにしてReference Tray(Load Rail)を固定し、IndexerをMulti Picker位置へ移動します。'
        }},
        {img:cmImg('F','smtv',30),tx:{
          vi:'Hạ Z-axis đến vị trí Teaching Pin chạm Reference Tray. Di chuyển X-axis của Load Multi Picker và Load Indexer sao cho Teaching Pin khớp với Pin-hole. ⚠ Di chuyển X-axis khi Z-axis đang hạ có thể gây hư hỏng.',
          en:'Lower the Z-axis to the position where the Teaching Pin touches the reference tray. Move the Load Multi Picker\'s X-axis and the Load Indexer so the Teaching Pin aligns with the Pin-hole. ⚠ Moving the X-axis while the Z-axis is lowered may cause damage.',
          ko:'Z-axis(Z축)를 Teaching Pin이 Reference Tray에 닿는 위치까지 낮춥니다. Load Multi Picker의 X-axis(X축)와 Load Indexer를 움직여 Teaching Pin이 Pin-hole과 일치하도록 맞춥니다. ⚠ Z-axis(Z축)를 내린 상태에서 X-axis(X축)를 움직이면 파손될 수 있습니다.',
          zhCN:'将Z-axis降低至Teaching Pin接触Reference Tray的位置。移动Load Multi Picker的X-axis与Load Indexer,使Teaching Pin与Pin-hole对齐。⚠ 在Z-axis下降状态下移动X-axis可能造成损坏。',
          zhTW:'將Z-axis降低至Teaching Pin接觸Reference Tray的位置。移動Load Multi Picker的X-axis與Load Indexer,使Teaching Pin與Pin-hole對齊。⚠ 在Z-axis下降狀態下移動X-axis可能造成損壞。',
          ja:'Z-axis(Z軸)をTeaching PinがReference Trayに接触する位置まで下げます。Load Multi PickerのX-axis(X軸)とLoad Indexerを動かし、Teaching PinがPin-holeと一致するように合わせます。⚠ Z-axis(Z軸)を下げた状態でX-axis(X軸)を動かすと破損する恐れがあります。'
        }},
        {img:cmImg('F','smtv',31),tx:{
          vi:'Teach & Save X Load Pick Reference Position. Vị trí Multi Picker của Load Indexer cũng được lưu cùng.',
          en:'Teach & Save the X Load Pick Reference Position. The Load Indexer\'s Multi Picker position is saved together.',
          ko:'X Load Pick Reference Position을 Teach & Save 합니다. Load Indexer의 Multi Picker 위치도 함께 저장됩니다.',
          zhCN:'将X Load Pick Reference Position Teach & Save。Load Indexer的Multi Picker位置也一并保存。',
          zhTW:'將X Load Pick Reference Position Teach & Save。Load Indexer的Multi Picker位置也一併儲存。',
          ja:'X Load Pick Reference PositionをTeach & Saveします。Load IndexerのMulti Picker位置も一緒に保存されます。'
        }},
        {img:cmImg('F','smtv',32),tx:{
          vi:'Di chuyển vị trí X thêm 5mm, sau đó hạ lại vị trí Z đến khi Teaching Pin chạm Reference Tray, rồi hạ thêm 1mm nữa.',
          en:'Move the X position by 5mm, then lower the Z position again to where the Teaching Pin touches the reference tray, and lower it an additional 1mm.',
          ko:'X Position을 5mm 이동한 뒤, Z Position을 다시 낮춰 Teaching Pin이 Reference Tray에 닿는 위치를 찾고, 거기서 1mm 더 낮춥니다.',
          zhCN:'将X Position移动5mm,再次降低Z Position找到Teaching Pin接触Reference Tray的位置,并在此基础上再下降1mm。',
          zhTW:'將X Position移動5mm,再次降低Z Position找到Teaching Pin接觸Reference Tray的位置,並在此基礎上再下降1mm。',
          ja:'X Positionを5mm移動した後、Z Positionを再度下げてTeaching PinがReference Trayに接触する位置を見つけ、そこからさらに1mm下げます。'
        }},
        {img:cmImg('F','smtv',33),tx:{
          vi:'Teach & Save vị trí Z hiện tại làm Z Load Pick Position.',
          en:'Teach & Save the current Z position as the Z Load Pick Position.',
          ko:'현재 Z Position을 Teach & Save 하여 Z Load Pick Position으로 저장합니다.',
          zhCN:'将当前Z Position Teach & Save,保存为Z Load Pick Position。',
          zhTW:'將目前Z Position Teach & Save,儲存為Z Load Pick Position。',
          ja:'現在のZ PositionをTeach & SaveしてZ Load Pick Positionとして保存します。'
        }},
        {img:cmImg('F','smtv',34),tx:{
          vi:'Chương này giới thiệu Handler Teaching cho iSIS-SMTV — quy trình Teaching vị trí cho Elevator, Load Multi Picker, Unload Multi Picker, Aligner, Pedestal, Tray Transfer Module (TTM), Multi Sorter Module (MSM), 3D Inspector và 2D Inspector.',
          en:'This chapter covers Handler Teaching for iSIS-SMTV — the position-teaching sequence for the Elevator, Load Multi Picker, Unload Multi Picker, Aligner, Pedestal, Tray Transfer Module (TTM), Multi Sorter Module (MSM), 3D Inspector, and 2D Inspector.',
          ko:'본 챕터에서는 iSIS-SMTV의 Handler Teaching — Elevator, Load Multi Picker, Unload Multi Picker, Aligner, Pedestal, Tray Transfer Module(TTM), Multi Sorter Module(MSM), 3D Inspector, 2D Inspector의 Position Teaching 절차를 다룹니다.',
          zhCN:'本章介绍iSIS-SMTV的Handler Teaching——Elevator、Load Multi Picker、Unload Multi Picker、Aligner、Pedestal、Tray Transfer Module(TTM)、Multi Sorter Module(MSM)、3D Inspector、2D Inspector的Position Teaching流程。',
          zhTW:'本章介紹iSIS-SMTV的Handler Teaching——Elevator、Load Multi Picker、Unload Multi Picker、Aligner、Pedestal、Tray Transfer Module(TTM)、Multi Sorter Module(MSM)、3D Inspector、2D Inspector的Position Teaching流程。',
          ja:'本章ではiSIS-SMTVのHandler Teaching——Elevator、Load Multi Picker、Unload Multi Picker、Aligner、Pedestal、Tray Transfer Module(TTM)、Multi Sorter Module(MSM)、3D Inspector、2D InspectorのPosition Teaching手順を扱います。'
        }},
        {img:cmImg('F','smtv',35),tx:{
          vi:'C. Unload Multi Picker — Place Position\n\nVị trí Unload Multi Picker Place Sample đã kiểm tra lên Empty Rail. Vị trí chuẩn được đặt tại Pin-hole ở đáy Reference Tray.',
          en:'C. Unload Multi Picker — Place Position\n\nThe position where the Unload Multi Picker places the inspected sample on the empty rail. The reference position is set at the pin-hole on the bottom of the reference tray.',
          ko:'C. Unload Multi Picker — Place Position\n\nUnload Multi Picker가 검사가 끝난 Sample을 Empty Rail에 Place하는 위치입니다. 기준 위치는 Reference Tray 바닥의 Pin-hole에 설정합니다.',
          zhCN:'C. Unload Multi Picker — Place Position\n\n是Unload Multi Picker将检验完成的Sample放置到Empty Rail的位置。基准位置设定在Reference Tray底部的Pin-hole。',
          zhTW:'C. Unload Multi Picker — Place Position\n\n是Unload Multi Picker將檢驗完成的Sample放置到Empty Rail的位置。基準位置設定在Reference Tray底部的Pin-hole。',
          ja:'C. Unload Multi Picker — Place Position\n\n検査済みのSampleをUnload Multi PickerがEmpty Railに置く位置です。基準位置はReference Tray底面のPin-holeに設定します。'
        }},
        {img:cmImg('F','smtv',36),tx:{
          vi:'Gắn Teaching Pin vào Picker 6 như hình, và bật Picker 6 Down Solenoid.',
          en:'Attach the Teaching Pin to Picker 6 as shown, and turn on the Picker 6 Down Solenoid.',
          ko:'그림처럼 Picker 6에 Teaching Pin을 장착하고, Picker 6 Down Solenoid를 켭니다.',
          zhCN:'如图在Picker 6上安装Teaching Pin,并开启Picker 6 Down Solenoid。',
          zhTW:'如圖在Picker 6上安裝Teaching Pin,並開啟Picker 6 Down Solenoid。',
          ja:'図のようにPicker 6にTeaching Pinを装着し、Picker 6 Down Solenoidをオンにします。'
        }},
        {img:cmImg('F','smtv',37),tx:{
          vi:'Host P/G ▸ Handler ▸ Map ▸ chọn Unload Multi Picker → di chuyển đến X Empty Indexer Place Position.',
          en:'Host P/G ▸ Handler ▸ Map ▸ select Unload Multi Picker → move to the X Empty Indexer Place Position.',
          ko:'Host P/G ▸ Handler ▸ Map ▸ Unload Multi Picker 선택 → X Empty Indexer Place Position으로 이동합니다.',
          zhCN:'Host P/G ▸ Handler ▸ Map ▸ 选择Unload Multi Picker → 移动到X Empty Indexer Place Position。',
          zhTW:'Host P/G ▸ Handler ▸ Map ▸ 選擇Unload Multi Picker → 移動到X Empty Indexer Place Position。',
          ja:'Host P/G ▸ Handler ▸ Map ▸ Unload Multi Pickerを選択 → X Empty Indexer Place Positionへ移動します。'
        }},
        {img:cmImg('F','smtv',38),tx:{
          vi:'Host P/G ▸ Handler ▸ Map ▸ chọn Empty Indexer → bật B/W và F/W Clamp để cố định Reference Tray (Empty Rail), sau đó di chuyển Indexer đến vị trí nhận Multi Picker.',
          en:'Host P/G ▸ Handler ▸ Map ▸ select Empty Indexer → turn on the B/W and F/W Clamps to fasten the reference tray (Empty Rail), then move the Indexer to the Multi Picker unit-receiving position.',
          ko:'Host P/G ▸ Handler ▸ Map ▸ Empty Indexer 선택 → B/W·F/W Clamp를 켜서 Reference Tray(Empty Rail)를 고정하고, Indexer를 Multi Picker 유닛 수령 위치로 이동합니다.',
          zhCN:'Host P/G ▸ Handler ▸ Map ▸ 选择Empty Indexer → 开启B/W·F/W Clamp固定Reference Tray(Empty Rail),并将Indexer移动到Multi Picker接收位置。',
          zhTW:'Host P/G ▸ Handler ▸ Map ▸ 選擇Empty Indexer → 開啟B/W·F/W Clamp固定Reference Tray(Empty Rail),並將Indexer移動到Multi Picker接收位置。',
          ja:'Host P/G ▸ Handler ▸ Map ▸ Empty Indexerを選択 → B/W・F/W ClampをオンにしてReference Tray(Empty Rail)を固定し、IndexerをMulti Picker受け取り位置へ移動します。'
        }},
        {img:cmImg('F','smtv',39),tx:{
          vi:'Hạ Z-axis đến vị trí Teaching Pin chạm Reference Tray. Di chuyển X-axis của Unload Multi Picker và Empty Indexer sao cho Teaching Pin khớp với Pin-hole. ⚠ Di chuyển X-axis khi Z-axis đang hạ có thể gây hư hỏng.',
          en:'Lower the Z-axis to the position where the Teaching Pin touches the reference tray. Move the Unload Multi Picker\'s X-axis and the Empty Indexer so the Teaching Pin aligns with the Pin-hole. ⚠ Moving the X-axis while the Z-axis is lowered may cause damage.',
          ko:'Z-axis(Z축)를 Teaching Pin이 Reference Tray에 닿는 위치까지 낮춥니다. Unload Multi Picker의 X-axis(X축)와 Empty Indexer를 움직여 Teaching Pin이 Pin-hole과 일치하도록 맞춥니다. ⚠ Z-axis(Z축)를 내린 상태에서 X-axis(X축)를 움직이면 파손될 수 있습니다.',
          zhCN:'将Z-axis降低至Teaching Pin接触Reference Tray的位置。移动Unload Multi Picker的X-axis与Empty Indexer,使Teaching Pin与Pin-hole对齐。⚠ 在Z-axis下降状态下移动X-axis可能造成损坏。',
          zhTW:'將Z-axis降低至Teaching Pin接觸Reference Tray的位置。移動Unload Multi Picker的X-axis與Empty Indexer,使Teaching Pin與Pin-hole對齊。⚠ 在Z-axis下降狀態下移動X-axis可能造成損壞。',
          ja:'Z-axis(Z軸)をTeaching PinがReference Trayに接触する位置まで下げます。Unload Multi PickerのX-axis(X軸)とEmpty Indexerを動かし、Teaching PinがPin-holeと一致するように合わせます。⚠ Z-axis(Z軸)を下げた状態でX-axis(X軸)を動かすと破損する恐れがあります。'
        }},
        {img:cmImg('F','smtv',40),tx:{
          vi:'Teach & Save X Empty Indexer Place Position. Vị trí nhận Multi Picker của Empty Indexer cũng được lưu cùng.',
          en:'Teach & Save the X Empty Indexer Place Position. The Empty Indexer\'s Multi Picker unit-receiving position is saved together.',
          ko:'X Empty Indexer Place Position을 Teach & Save 합니다. Empty Indexer의 Multi Picker 유닛 수령 위치도 함께 저장됩니다.',
          zhCN:'将X Empty Indexer Place Position Teach & Save。Empty Indexer的Multi Picker接收位置也一并保存。',
          zhTW:'將X Empty Indexer Place Position Teach & Save。Empty Indexer的Multi Picker接收位置也一併儲存。',
          ja:'X Empty Indexer Place PositionをTeach & Saveします。Empty IndexerのMulti Picker受け取り位置も一緒に保存されます。'
        }},
        {img:cmImg('F','smtv',41),tx:{
          vi:'Di chuyển vị trí X thêm 5mm, sau đó hạ lại vị trí Z đến khi Teaching Pin chạm Reference Tray, rồi nâng lên 1mm từ đó.',
          en:'Move the X position by 5mm, then lower the Z position again to where the Teaching Pin touches the reference tray, and raise it 1mm from there.',
          ko:'X Position을 5mm 이동한 뒤, Z Position을 다시 낮춰 Teaching Pin이 Reference Tray에 닿는 위치를 찾고, 거기서 1mm 올립니다.',
          zhCN:'将X Position移动5mm,再次降低Z Position找到Teaching Pin接触Reference Tray的位置,并从该处上升1mm。',
          zhTW:'將X Position移動5mm,再次降低Z Position找到Teaching Pin接觸Reference Tray的位置,並從該處上升1mm。',
          ja:'X Positionを5mm移動した後、Z Positionを再度下げてTeaching PinがReference Trayに接触する位置を見つけ、そこから1mm上げます。'
        }},
        {img:cmImg('F','smtv',42),tx:{
          vi:'Teach & Save vị trí Z hiện tại làm Z Empty Indexer Place Position.',
          en:'Teach & Save the current Z position as the Z Empty Indexer Place Position.',
          ko:'현재 Z Position을 Teach & Save 하여 Z Empty Indexer Place Position으로 저장합니다.',
          zhCN:'将当前Z Position Teach & Save,保存为Z Empty Indexer Place Position。',
          zhTW:'將目前Z Position Teach & Save,儲存為Z Empty Indexer Place Position。',
          ja:'現在のZ PositionをTeach & SaveしてZ Empty Indexer Place Positionとして保存します。'
        }},
        {img:cmImg('F','smtv',43),tx:{
          vi:'Chương này giới thiệu Handler Teaching cho iSIS-SMTV — quy trình Teaching vị trí cho Elevator, Load Multi Picker, Unload Multi Picker, Aligner, Pedestal, Tray Transfer Module (TTM), Multi Sorter Module (MSM), 3D Inspector và 2D Inspector.',
          en:'This chapter covers Handler Teaching for iSIS-SMTV — the position-teaching sequence for the Elevator, Load Multi Picker, Unload Multi Picker, Aligner, Pedestal, Tray Transfer Module (TTM), Multi Sorter Module (MSM), 3D Inspector, and 2D Inspector.',
          ko:'본 챕터에서는 iSIS-SMTV의 Handler Teaching — Elevator, Load Multi Picker, Unload Multi Picker, Aligner, Pedestal, Tray Transfer Module(TTM), Multi Sorter Module(MSM), 3D Inspector, 2D Inspector의 Position Teaching 절차를 다룹니다.',
          zhCN:'本章介绍iSIS-SMTV的Handler Teaching——Elevator、Load Multi Picker、Unload Multi Picker、Aligner、Pedestal、Tray Transfer Module(TTM)、Multi Sorter Module(MSM)、3D Inspector、2D Inspector的Position Teaching流程。',
          zhTW:'本章介紹iSIS-SMTV的Handler Teaching——Elevator、Load Multi Picker、Unload Multi Picker、Aligner、Pedestal、Tray Transfer Module(TTM)、Multi Sorter Module(MSM)、3D Inspector、2D Inspector的Position Teaching流程。',
          ja:'本章ではiSIS-SMTVのHandler Teaching——Elevator、Load Multi Picker、Unload Multi Picker、Aligner、Pedestal、Tray Transfer Module(TTM)、Multi Sorter Module(MSM)、3D Inspector、2D InspectorのPosition Teaching手順を扱います。'
        }},
        {img:cmImg('F','smtv',44),tx:{
          vi:'D. Aligner — phần này đề cập đến Aligner Jig Multi Picker Position, Aligner Load Multi Picker Position và Aligner Adapter at Home.',
          en:'D. Aligner — this section covers the Aligner Jig Multi Picker Position, Aligner Load Multi Picker Position, and Aligner Adapter at Home.',
          ko:'D. Aligner — Aligner Jig Multi Picker Position, Aligner Load Multi Picker Position, Aligner Adapter at Home을 다룹니다.',
          zhCN:'D. Aligner——本节介绍Aligner Jig Multi Picker Position、Aligner Load Multi Picker Position、Aligner Adapter at Home。',
          zhTW:'D. Aligner——本節介紹Aligner Jig Multi Picker Position、Aligner Load Multi Picker Position、Aligner Adapter at Home。',
          ja:'D. Aligner——本節ではAligner Jig Multi Picker Position、Aligner Load Multi Picker Position、Aligner Adapter at Homeを扱います。'
        }},
        {img:cmImg('F','smtv',45),tx:{
          vi:'D-1. Aligner — Jig Multi Picker Position\n\nVị trí Jig Multi Picker lấy Unit đã căn chỉnh từ Aligner. Lắp Aligner Jig lên Aligner.',
          en:'D-1. Aligner — Jig Multi Picker Position\n\nThe position where the Jig Multi Picker picks up aligned units from the Aligner. Install the Aligner Jig on the Aligner.',
          ko:'D-1. Aligner — Jig Multi Picker Position\n\nAligner에서 정렬이 끝난 Unit을 Jig Multi Picker가 Pick-up하는 위치입니다. Aligner에 Aligner Jig를 설치합니다.',
          zhCN:'D-1. Aligner — Jig Multi Picker Position\n\n是Jig Multi Picker从Aligner取出已对准Unit的位置。在Aligner上安装Aligner Jig。',
          zhTW:'D-1. Aligner — Jig Multi Picker Position\n\n是Jig Multi Picker從Aligner取出已對準Unit的位置。在Aligner上安裝Aligner Jig。',
          ja:'D-1. Aligner — Jig Multi Picker Position\n\nAlignerで整列済みのUnitをJig Multi Pickerが取り出す位置です。AlignerにAligner Jigを設置します。'
        }},
        {img:cmImg('F','smtv',46),tx:{
          vi:'Gắn Teaching Pin vào Picker 6 như hình, và bật Picker 6 Down Solenoid.',
          en:'Attach the Teaching Pin to Picker 6 as shown, and turn on the Picker 6 Down Solenoid.',
          ko:'그림처럼 Picker 6에 Teaching Pin을 장착하고, Picker 6 Down Solenoid를 켭니다.',
          zhCN:'如图在Picker 6上安装Teaching Pin,并开启Picker 6 Down Solenoid。',
          zhTW:'如圖在Picker 6上安裝Teaching Pin,並開啟Picker 6 Down Solenoid。',
          ja:'図のようにPicker 6にTeaching Pinを装着し、Picker 6 Down Solenoidをオンにします。'
        }},
        {img:cmImg('F','smtv',47),tx:{
          vi:'Host P/G ▸ Handler ▸ Map ▸ chọn Jig Multi Picker & Aligner → di chuyển đến X Align Pick Position & Y Align Multi Picker Position.',
          en:'Host P/G ▸ Handler ▸ Map ▸ select Jig Multi Picker & Aligner → move to the X Align Pick Position & Y Align Multi Picker Position.',
          ko:'Host P/G ▸ Handler ▸ Map ▸ Jig Multi Picker & Aligner 선택 → X Align Pick Position & Y Align Multi Picker Position으로 이동합니다.',
          zhCN:'Host P/G ▸ Handler ▸ Map ▸ 选择Jig Multi Picker & Aligner → 移动到X Align Pick Position & Y Align Multi Picker Position。',
          zhTW:'Host P/G ▸ Handler ▸ Map ▸ 選擇Jig Multi Picker & Aligner → 移動到X Align Pick Position & Y Align Multi Picker Position。',
          ja:'Host P/G ▸ Handler ▸ Map ▸ Jig Multi Picker & Alignerを選択 → X Align Pick Position & Y Align Multi Picker Positionへ移動します。'
        }},
        {img:cmImg('F','smtv',48),tx:{
          vi:'Di chuyển vị trí X, Y, Z sao cho Pin-hole của Aligner khớp với Teaching Pin.',
          en:'Move the X, Y, and Z positions so the Aligner\'s Pin-hole aligns with the Teaching Pin.',
          ko:'X, Y, Z Position을 움직여 Aligner의 Pin-hole과 Teaching Pin이 일치하도록 맞춥니다.',
          zhCN:'移动X、Y、Z Position,使Aligner的Pin-hole与Teaching Pin对齐。',
          zhTW:'移動X、Y、Z Position,使Aligner的Pin-hole與Teaching Pin對齊。',
          ja:'X、Y、Z Positionを動かし、AlignerのPin-holeとTeaching Pinが一致するように合わせます。'
        }},
        {img:cmImg('F','smtv',49),tx:{
          vi:'Teach & Save vị trí Pin-hole và Teaching Pin khớp nhau.',
          en:'Teach & Save the position where the Pin-hole and Teaching Pin align.',
          ko:'Pin-hole과 Teaching Pin이 일치하는 위치를 Teach & Save 합니다.',
          zhCN:'将Pin-hole与Teaching Pin对齐的位置Teach & Save。',
          zhTW:'將Pin-hole與Teaching Pin對齊的位置Teach & Save。',
          ja:'Pin-holeとTeaching Pinが一致する位置をTeach & Saveします。'
        }},
        {img:cmImg('F','smtv',50),tx:{
          vi:'Di chuyển Teaching Pin đến vị trí mặt phẳng của Aligner và hạ xuống đến khi chạm mặt phẳng. Khi chạm, hạ thêm vị trí Z 1mm và Teach & Save làm Z Align Pick Position.',
          en:'Move the Teaching Pin to the Aligner\'s flat surface position and lower it until it touches the surface. Once it touches, lower the Z position a further 1mm and Teach & Save as the Z Align Pick Position.',
          ko:'Teaching Pin을 Aligner 평면 위치로 이동시켜, 평면에 닿을 때까지 내립니다. 닿으면 Z Position을 1mm 더 낮춰 Z Align Pick Position으로 Teach & Save 합니다.',
          zhCN:'将Teaching Pin移动到Aligner平面位置,下降直至接触平面。接触后,将Z Position再下降1mm,并Teach & Save为Z Align Pick Position。',
          zhTW:'將Teaching Pin移動到Aligner平面位置,下降直至接觸平面。接觸後,將Z Position再下降1mm,並Teach & Save為Z Align Pick Position。',
          ja:'Teaching PinをAligner平面位置へ移動させ、平面に触れるまで下げます。触れたらZ Positionをさらに1mm下げ、Z Align Pick PositionとしてTeach & Saveします。'
        }},
        {img:cmImg('F','smtv',51),tx:{
          vi:'D. Aligner — phần này đề cập đến Aligner Jig Multi Picker Position, Aligner Load Multi Picker Position và Aligner Adapter at Home.',
          en:'D. Aligner — this section covers the Aligner Jig Multi Picker Position, Aligner Load Multi Picker Position, and Aligner Adapter at Home.',
          ko:'D. Aligner — Aligner Jig Multi Picker Position, Aligner Load Multi Picker Position, Aligner Adapter at Home을 다룹니다.',
          zhCN:'D. Aligner——本节介绍Aligner Jig Multi Picker Position、Aligner Load Multi Picker Position、Aligner Adapter at Home。',
          zhTW:'D. Aligner——本節介紹Aligner Jig Multi Picker Position、Aligner Load Multi Picker Position、Aligner Adapter at Home。',
          ja:'D. Aligner——本節ではAligner Jig Multi Picker Position、Aligner Load Multi Picker Position、Aligner Adapter at Homeを扱います。'
        }},
        {img:cmImg('F','smtv',52),tx:{
          vi:'D-2. Aligner — Load Multi Picker Position\n\nVị trí Load Multi Picker đặt Unit lên Aligner. Lắp Aligner Jig lên Aligner.',
          en:'D-2. Aligner — Load Multi Picker Position\n\nThe position where the Load Multi Picker places the unit on the Aligner. Install the Aligner Jig on the Aligner.',
          ko:'D-2. Aligner — Load Multi Picker Position\n\nLoad Multi Picker가 Unit을 Aligner에 Place하는 위치입니다. Aligner에 Aligner Jig를 설치합니다.',
          zhCN:'D-2. Aligner — Load Multi Picker Position\n\n是Load Multi Picker将Unit放置到Aligner上的位置。在Aligner上安装Aligner Jig。',
          zhTW:'D-2. Aligner — Load Multi Picker Position\n\n是Load Multi Picker將Unit放置到Aligner上的位置。在Aligner上安裝Aligner Jig。',
          ja:'D-2. Aligner — Load Multi Picker Position\n\nLoad Multi PickerがUnitをAlignerに置く位置です。AlignerにAligner Jigを設置します。'
        }},
        {img:cmImg('F','smtv',53),tx:{
          vi:'Gắn Teaching Pin vào Picker 6 như hình, và bật Picker 6 Down Solenoid.',
          en:'Attach the Teaching Pin to Picker 6 as shown, and turn on the Picker 6 Down Solenoid.',
          ko:'그림처럼 Picker 6에 Teaching Pin을 장착하고, Picker 6 Down Solenoid를 켭니다.',
          zhCN:'如图在Picker 6上安装Teaching Pin,并开启Picker 6 Down Solenoid。',
          zhTW:'如圖在Picker 6上安裝Teaching Pin,並開啟Picker 6 Down Solenoid。',
          ja:'図のようにPicker 6にTeaching Pinを装着し、Picker 6 Down Solenoidをオンにします。'
        }},
        {img:cmImg('F','smtv',54),tx:{
          vi:'Host P/G ▸ Handler ▸ Map ▸ chọn Load Multi Picker & Aligner → di chuyển đến X Align Place Position & Y Load Multi Picker Position.',
          en:'Host P/G ▸ Handler ▸ Map ▸ select Load Multi Picker & Aligner → move to the X Align Place Position & Y Load Multi Picker Position.',
          ko:'Host P/G ▸ Handler ▸ Map ▸ Load Multi Picker & Aligner 선택 → X Align Place Position & Y Load Multi Picker Position으로 이동합니다.',
          zhCN:'Host P/G ▸ Handler ▸ Map ▸ 选择Load Multi Picker & Aligner → 移动到X Align Place Position & Y Load Multi Picker Position。',
          zhTW:'Host P/G ▸ Handler ▸ Map ▸ 選擇Load Multi Picker & Aligner → 移動到X Align Place Position & Y Load Multi Picker Position。',
          ja:'Host P/G ▸ Handler ▸ Map ▸ Load Multi Picker & Alignerを選択 → X Align Place Position & Y Load Multi Picker Positionへ移動します。'
        }},
        {img:cmImg('F','smtv',55),tx:{
          vi:'Di chuyển vị trí X, Y, Z sao cho Pin-hole của Aligner khớp với Teaching Pin.',
          en:'Move the X, Y, and Z positions so the Aligner\'s Pin-hole aligns with the Teaching Pin.',
          ko:'X, Y, Z Position을 움직여 Aligner의 Pin-hole과 Teaching Pin이 일치하도록 맞춥니다.',
          zhCN:'移动X、Y、Z Position,使Aligner的Pin-hole与Teaching Pin对齐。',
          zhTW:'移動X、Y、Z Position,使Aligner的Pin-hole與Teaching Pin對齊。',
          ja:'X、Y、Z Positionを動かし、AlignerのPin-holeとTeaching Pinが一致するように合わせます。'
        }},
        {img:cmImg('F','smtv',56),tx:{
          vi:'Teach & Save vị trí Pin-hole và Teaching Pin khớp nhau.',
          en:'Teach & Save the position where the Pin-hole and Teaching Pin align.',
          ko:'Pin-hole과 Teaching Pin이 일치하는 위치를 Teach & Save 합니다.',
          zhCN:'将Pin-hole与Teaching Pin对齐的位置Teach & Save。',
          zhTW:'將Pin-hole與Teaching Pin對齊的位置Teach & Save。',
          ja:'Pin-holeとTeaching Pinが一致する位置をTeach & Saveします。'
        }},
        {img:cmImg('F','smtv',57),tx:{
          vi:'Di chuyển Teaching Pin đến vị trí mặt phẳng của Aligner và hạ xuống đến khi chạm mặt phẳng. Khi chạm, nâng vị trí Z lên 1mm và Teach & Save làm Z Aligner Place Position.',
          en:'Move the Teaching Pin to the Aligner\'s flat surface position and lower it until it touches the surface. Once it touches, raise the Z position 1mm and Teach & Save as the Z Aligner Place Position.',
          ko:'Teaching Pin을 Aligner 평면 위치로 이동시켜, 평면에 닿을 때까지 내립니다. 닿으면 Z Position을 1mm 올려 Z Aligner Place Position으로 Teach & Save 합니다.',
          zhCN:'将Teaching Pin移动到Aligner平面位置,下降直至接触平面。接触后,将Z Position上升1mm,并Teach & Save为Z Aligner Place Position。',
          zhTW:'將Teaching Pin移動到Aligner平面位置,下降直至接觸平面。接觸後,將Z Position上升1mm,並Teach & Save為Z Aligner Place Position。',
          ja:'Teaching PinをAligner平面位置へ移動させ、平面に触れるまで下げます。触れたらZ Positionを1mm上げ、Z Aligner Place PositionとしてTeach & Saveします。'
        }},
        {img:cmImg('F','smtv',58),tx:{
          vi:'D. Aligner — phần này đề cập đến Aligner Jig Multi Picker Position, Aligner Load Multi Picker Position và Aligner Adapter at Home.',
          en:'D. Aligner — this section covers the Aligner Jig Multi Picker Position, Aligner Load Multi Picker Position, and Aligner Adapter at Home.',
          ko:'D. Aligner — Aligner Jig Multi Picker Position, Aligner Load Multi Picker Position, Aligner Adapter at Home을 다룹니다.',
          zhCN:'D. Aligner——本节介绍Aligner Jig Multi Picker Position、Aligner Load Multi Picker Position、Aligner Adapter at Home。',
          zhTW:'D. Aligner——本節介紹Aligner Jig Multi Picker Position、Aligner Load Multi Picker Position、Aligner Adapter at Home。',
          ja:'D. Aligner——本節ではAligner Jig Multi Picker Position、Aligner Load Multi Picker Position、Aligner Adapter at Homeを扱います。'
        }},
        {img:cmImg('F','smtv',59),tx:{
          vi:'D-3. Aligner — Adapter at Home\n\nHost P/G ▸ Handler ▸ Map ▸ chọn Align X at Home & Align Y at Home → nhấn Home.',
          en:'D-3. Aligner — Adapter at Home\n\nHost P/G ▸ Handler ▸ Map ▸ select Align X at Home & Align Y at Home → click Home.',
          ko:'D-3. Aligner — Adapter at Home\n\nHost P/G ▸ Handler ▸ Map ▸ Align X at Home & Align Y at Home 선택 → Home을 클릭합니다.',
          zhCN:'D-3. Aligner — Adapter at Home\n\nHost P/G ▸ Handler ▸ Map ▸ 选择Align X at Home & Align Y at Home → 点击Home。',
          zhTW:'D-3. Aligner — Adapter at Home\n\nHost P/G ▸ Handler ▸ Map ▸ 選擇Align X at Home & Align Y at Home → 點擊Home。',
          ja:'D-3. Aligner — Adapter at Home\n\nHost P/G ▸ Handler ▸ Map ▸ Align X at Home & Align Y at Homeを選択 → Homeをクリックします。'
        }},
        {img:cmImg('F','smtv',60),tx:{
          vi:'X At Home — đo khoảng cách bằng thước như hình.',
          en:'X At Home — measure the distance using a ruler as shown.',
          ko:'X At Home — 그림처럼 자(ruler)로 거리를 측정합니다.',
          zhCN:'X At Home——如图用尺(ruler)测量距离。',
          zhTW:'X At Home——如圖用尺(ruler)測量距離。',
          ja:'X At Home — 図のように定規(ruler)で距離を測定します。'
        }},
        {img:cmImg('F','smtv',61),tx:{
          vi:'Nhập khoảng cách đã đo và nhấn Apply.',
          en:'Enter the measured distance and click Apply.',
          ko:'측정된 거리를 입력하고 Apply 합니다.',
          zhCN:'输入测得的距离并点击Apply。',
          zhTW:'輸入測得的距離並點擊Apply。',
          ja:'測定した距離を入力しApplyします。'
        }},
        {img:cmImg('F','smtv',62),tx:{
          vi:'Chương này giới thiệu Handler Teaching cho iSIS-SMTV — quy trình Teaching vị trí cho Elevator, Load Multi Picker, Unload Multi Picker, Aligner, Pedestal, Tray Transfer Module (TTM), Multi Sorter Module (MSM), 3D Inspector và 2D Inspector.',
          en:'This chapter covers Handler Teaching for iSIS-SMTV — the position-teaching sequence for the Elevator, Load Multi Picker, Unload Multi Picker, Aligner, Pedestal, Tray Transfer Module (TTM), Multi Sorter Module (MSM), 3D Inspector, and 2D Inspector.',
          ko:'본 챕터에서는 iSIS-SMTV의 Handler Teaching — Elevator, Load Multi Picker, Unload Multi Picker, Aligner, Pedestal, Tray Transfer Module(TTM), Multi Sorter Module(MSM), 3D Inspector, 2D Inspector의 Position Teaching 절차를 다룹니다.',
          zhCN:'本章介绍iSIS-SMTV的Handler Teaching——Elevator、Load Multi Picker、Unload Multi Picker、Aligner、Pedestal、Tray Transfer Module(TTM)、Multi Sorter Module(MSM)、3D Inspector、2D Inspector的Position Teaching流程。',
          zhTW:'本章介紹iSIS-SMTV的Handler Teaching——Elevator、Load Multi Picker、Unload Multi Picker、Aligner、Pedestal、Tray Transfer Module(TTM)、Multi Sorter Module(MSM)、3D Inspector、2D Inspector的Position Teaching流程。',
          ja:'本章ではiSIS-SMTVのHandler Teaching——Elevator、Load Multi Picker、Unload Multi Picker、Aligner、Pedestal、Tray Transfer Module(TTM)、Multi Sorter Module(MSM)、3D Inspector、2D InspectorのPosition Teaching手順を扱います。'
        }},
        {img:cmImg('F','smtv',63),tx:{
          vi:'E. Pedestal — phần này đề cập đến Pedestal Jig Multi Picker Position và Pedestal Unload Multi Picker Position.',
          en:'E. Pedestal — this section covers the Pedestal Jig Multi Picker Position and Pedestal Unload Multi Picker Position.',
          ko:'E. Pedestal — Pedestal Jig Multi Picker Position, Pedestal Unload Multi Picker Position을 다룹니다.',
          zhCN:'E. Pedestal——本节介绍Pedestal Jig Multi Picker Position、Pedestal Unload Multi Picker Position。',
          zhTW:'E. Pedestal——本節介紹Pedestal Jig Multi Picker Position、Pedestal Unload Multi Picker Position。',
          ja:'E. Pedestal——本節ではPedestal Jig Multi Picker Position、Pedestal Unload Multi Picker Positionを扱います。'
        }},
        {img:cmImg('F','smtv',64),tx:{
          vi:'E-1. Pedestal — Jig Multi Picker Position\n\nVị trí Jig Multi Picker đặt Unit lên Pedestal. Lắp Pedestal.',
          en:'E-1. Pedestal — Jig Multi Picker Position\n\nThe position where the Jig Multi Picker places the unit on the Pedestal. Install the Pedestal.',
          ko:'E-1. Pedestal — Jig Multi Picker Position\n\nJig Multi Picker가 Unit을 Pedestal에 Place하는 위치입니다. Pedestal을 설치합니다.',
          zhCN:'E-1. Pedestal — Jig Multi Picker Position\n\n是Jig Multi Picker将Unit放置到Pedestal上的位置。安装Pedestal。',
          zhTW:'E-1. Pedestal — Jig Multi Picker Position\n\n是Jig Multi Picker將Unit放置到Pedestal上的位置。安裝Pedestal。',
          ja:'E-1. Pedestal — Jig Multi Picker Position\n\nJig Multi PickerがUnitをPedestalに置く位置です。Pedestalを設置します。'
        }},
        {img:cmImg('F','smtv',65),tx:{
          vi:'Gắn Teaching Pin vào Picker 6 như hình, và bật Picker 6 Down Solenoid.',
          en:'Attach the Teaching Pin to Picker 6 as shown, and turn on the Picker 6 Down Solenoid.',
          ko:'그림처럼 Picker 6에 Teaching Pin을 장착하고, Picker 6 Down Solenoid를 켭니다.',
          zhCN:'如图在Picker 6上安装Teaching Pin,并开启Picker 6 Down Solenoid。',
          zhTW:'如圖在Picker 6上安裝Teaching Pin,並開啟Picker 6 Down Solenoid。',
          ja:'図のようにPicker 6にTeaching Pinを装着し、Picker 6 Down Solenoidをオンにします。'
        }},
        {img:cmImg('F','smtv',66),tx:{
          vi:'Host P/G ▸ Handler ▸ Map ▸ chọn Jig Multi Picker & Pedestal → di chuyển đến X Pedestal Place Position & Loading Position.',
          en:'Host P/G ▸ Handler ▸ Map ▸ select Jig Multi Picker & Pedestal → move to the X Pedestal Place Position & Loading Position.',
          ko:'Host P/G ▸ Handler ▸ Map ▸ Jig Multi Picker & Pedestal 선택 → X Pedestal Place Position & Loading Position으로 이동합니다.',
          zhCN:'Host P/G ▸ Handler ▸ Map ▸ 选择Jig Multi Picker & Pedestal → 移动到X Pedestal Place Position & Loading Position。',
          zhTW:'Host P/G ▸ Handler ▸ Map ▸ 選擇Jig Multi Picker & Pedestal → 移動到X Pedestal Place Position & Loading Position。',
          ja:'Host P/G ▸ Handler ▸ Map ▸ Jig Multi Picker & Pedestalを選択 → X Pedestal Place Position & Loading Positionへ移動します。'
        }},
        {img:cmImg('F','smtv',67),tx:{
          vi:'Di chuyển vị trí X, Y, Z sao cho Pin-hole của Pedestal khớp với Teaching Pin.',
          en:'Move the X, Y, and Z positions so the Pedestal\'s Pin-hole aligns with the Teaching Pin.',
          ko:'X, Y, Z Position을 움직여 Pedestal의 Pin-hole과 Teaching Pin이 일치하도록 맞춥니다.',
          zhCN:'移动X、Y、Z Position,使Pedestal的Pin-hole与Teaching Pin对齐。',
          zhTW:'移動X、Y、Z Position,使Pedestal的Pin-hole與Teaching Pin對齊。',
          ja:'X、Y、Z Positionを動かし、PedestalのPin-holeとTeaching Pinが一致するように合わせます。'
        }},
        {img:cmImg('F','smtv',68),tx:{
          vi:'Teach & Save vị trí Pin-hole và Teaching Pin khớp nhau.',
          en:'Teach & Save the position where the Pin-hole and Teaching Pin align.',
          ko:'Pin-hole과 Teaching Pin이 일치하는 위치를 Teach & Save 합니다.',
          zhCN:'将Pin-hole与Teaching Pin对齐的位置Teach & Save。',
          zhTW:'將Pin-hole與Teaching Pin對齊的位置Teach & Save。',
          ja:'Pin-holeとTeaching Pinが一致する位置をTeach & Saveします。'
        }},
        {img:cmImg('F','smtv',69),tx:{
          vi:'Di chuyển Teaching Pin đến vị trí mặt phẳng của Pedestal và hạ xuống đến khi chạm mặt phẳng. Khi chạm, hạ thêm vị trí Z 1mm và Teach & Save làm Z Jig Place Position.',
          en:'Move the Teaching Pin to the Pedestal\'s flat surface position and lower it until it touches the surface. Once it touches, lower the Z position a further 1mm and Teach & Save as the Z Jig Place Position.',
          ko:'Teaching Pin을 Pedestal 평면 위치로 이동시켜, 평면에 닿을 때까지 내립니다. 닿으면 Z Position을 1mm 더 낮춰 Z Jig Place Position으로 Teach & Save 합니다.',
          zhCN:'将Teaching Pin移动到Pedestal平面位置,下降直至接触平面。接触后,将Z Position再下降1mm,并Teach & Save为Z Jig Place Position。',
          zhTW:'將Teaching Pin移動到Pedestal平面位置,下降直至接觸平面。接觸後,將Z Position再下降1mm,並Teach & Save為Z Jig Place Position。',
          ja:'Teaching PinをPedestal平面位置へ移動させ、平面に触れるまで下げます。触れたらZ Positionをさらに1mm下げ、Z Jig Place PositionとしてTeach & Saveします。'
        }},
        {img:cmImg('F','smtv',70),tx:{
          vi:'E. Pedestal — phần này đề cập đến Pedestal Jig Multi Picker Position và Pedestal Unload Multi Picker Position.',
          en:'E. Pedestal — this section covers the Pedestal Jig Multi Picker Position and Pedestal Unload Multi Picker Position.',
          ko:'E. Pedestal — Pedestal Jig Multi Picker Position, Pedestal Unload Multi Picker Position을 다룹니다.',
          zhCN:'E. Pedestal——本节介绍Pedestal Jig Multi Picker Position、Pedestal Unload Multi Picker Position。',
          zhTW:'E. Pedestal——本節介紹Pedestal Jig Multi Picker Position、Pedestal Unload Multi Picker Position。',
          ja:'E. Pedestal——本節ではPedestal Jig Multi Picker Position、Pedestal Unload Multi Picker Positionを扱います。'
        }},
        {img:cmImg('F','smtv',71),tx:{
          vi:'E-2. Pedestal — Unload Multi Picker Position\n\nVị trí Unload Multi Picker lấy Unit từ Pedestal. Lắp Pedestal.',
          en:'E-2. Pedestal — Unload Multi Picker Position\n\nThe position where the Unload Multi Picker picks up the unit on the Pedestal. Install the Pedestal.',
          ko:'E-2. Pedestal — Unload Multi Picker Position\n\nUnload Multi Picker가 Pedestal 위의 Unit을 Pick-up하는 위치입니다. Pedestal을 설치합니다.',
          zhCN:'E-2. Pedestal — Unload Multi Picker Position\n\n是Unload Multi Picker从Pedestal取出Unit的位置。安装Pedestal。',
          zhTW:'E-2. Pedestal — Unload Multi Picker Position\n\n是Unload Multi Picker從Pedestal取出Unit的位置。安裝Pedestal。',
          ja:'E-2. Pedestal — Unload Multi Picker Position\n\nUnload Multi PickerがPedestal上のUnitを取り出す位置です。Pedestalを設置します。'
        }},
        {img:cmImg('F','smtv',72),tx:{
          vi:'Gắn Teaching Pin vào Picker 6 như hình, và bật Picker 6 Down Solenoid.',
          en:'Attach the Teaching Pin to Picker 6 as shown, and turn on the Picker 6 Down Solenoid.',
          ko:'그림처럼 Picker 6에 Teaching Pin을 장착하고, Picker 6 Down Solenoid를 켭니다.',
          zhCN:'如图在Picker 6上安装Teaching Pin,并开启Picker 6 Down Solenoid。',
          zhTW:'如圖在Picker 6上安裝Teaching Pin,並開啟Picker 6 Down Solenoid。',
          ja:'図のようにPicker 6にTeaching Pinを装着し、Picker 6 Down Solenoidをオンにします。'
        }},
        {img:cmImg('F','smtv',73),tx:{
          vi:'Host P/G ▸ Handler ▸ Map ▸ chọn Unload Multi Picker & Pedestal → di chuyển đến X Pedestal Pick Position & Unload Multi Picker Position.',
          en:'Host P/G ▸ Handler ▸ Map ▸ select Unload Multi Picker & Pedestal → move to the X Pedestal Pick Position & Unload Multi Picker Position.',
          ko:'Host P/G ▸ Handler ▸ Map ▸ Unload Multi Picker & Pedestal 선택 → X Pedestal Pick Position & Unload Multi Picker Position으로 이동합니다.',
          zhCN:'Host P/G ▸ Handler ▸ Map ▸ 选择Unload Multi Picker & Pedestal → 移动到X Pedestal Pick Position & Unload Multi Picker Position。',
          zhTW:'Host P/G ▸ Handler ▸ Map ▸ 選擇Unload Multi Picker & Pedestal → 移動到X Pedestal Pick Position & Unload Multi Picker Position。',
          ja:'Host P/G ▸ Handler ▸ Map ▸ Unload Multi Picker & Pedestalを選択 → X Pedestal Pick Position & Unload Multi Picker Positionへ移動します。'
        }},
        {img:cmImg('F','smtv',74),tx:{
          vi:'Di chuyển vị trí X, Y, Z sao cho Pin-hole của Pedestal khớp với Teaching Pin.',
          en:'Move the X, Y, and Z positions so the Pedestal\'s Pin-hole aligns with the Teaching Pin.',
          ko:'X, Y, Z Position을 움직여 Pedestal의 Pin-hole과 Teaching Pin이 일치하도록 맞춥니다.',
          zhCN:'移动X、Y、Z Position,使Pedestal的Pin-hole与Teaching Pin对齐。',
          zhTW:'移動X、Y、Z Position,使Pedestal的Pin-hole與Teaching Pin對齊。',
          ja:'X、Y、Z Positionを動かし、PedestalのPin-holeとTeaching Pinが一致するように合わせます。'
        }},
        {img:cmImg('F','smtv',75),tx:{
          vi:'Teach & Save vị trí Pin-hole và Teaching Pin khớp nhau.',
          en:'Teach & Save the position where the Pin-hole and Teaching Pin align.',
          ko:'Pin-hole과 Teaching Pin이 일치하는 위치를 Teach & Save 합니다.',
          zhCN:'将Pin-hole与Teaching Pin对齐的位置Teach & Save。',
          zhTW:'將Pin-hole與Teaching Pin對齊的位置Teach & Save。',
          ja:'Pin-holeとTeaching Pinが一致する位置をTeach & Saveします。'
        }},
        {img:cmImg('F','smtv',76),tx:{
          vi:'Di chuyển Teaching Pin đến vị trí mặt phẳng của Pedestal và hạ xuống đến khi chạm mặt phẳng. Khi chạm, hạ thêm vị trí Z 1mm và Teach & Save làm Z Pedestal Pick Position.',
          en:'Move the Teaching Pin to the Pedestal\'s flat surface position and lower it until it touches the surface. Once it touches, lower the Z position a further 1mm and Teach & Save as the Z Pedestal Pick Position.',
          ko:'Teaching Pin을 Pedestal 평면 위치로 이동시켜, 평면에 닿을 때까지 내립니다. 닿으면 Z Position을 1mm 더 낮춰 Z Pedestal Pick Position으로 Teach & Save 합니다.',
          zhCN:'将Teaching Pin移动到Pedestal平面位置,下降直至接触平面。接触后,将Z Position再下降1mm,并Teach & Save为Z Pedestal Pick Position。',
          zhTW:'將Teaching Pin移動到Pedestal平面位置,下降直至接觸平面。接觸後,將Z Position再下降1mm,並Teach & Save為Z Pedestal Pick Position。',
          ja:'Teaching PinをPedestal平面位置へ移動させ、平面に触れるまで下げます。触れたらZ Positionをさらに1mm下げ、Z Pedestal Pick PositionとしてTeach & Saveします。'
        }},
        {img:cmImg('F','smtv',77),tx:{
          vi:'Chương này giới thiệu Handler Teaching cho iSIS-SMTV — quy trình Teaching vị trí cho Elevator, Load Multi Picker, Unload Multi Picker, Aligner, Pedestal, Tray Transfer Module (TTM), Multi Sorter Module (MSM), 3D Inspector và 2D Inspector.',
          en:'This chapter covers Handler Teaching for iSIS-SMTV — the position-teaching sequence for the Elevator, Load Multi Picker, Unload Multi Picker, Aligner, Pedestal, Tray Transfer Module (TTM), Multi Sorter Module (MSM), 3D Inspector, and 2D Inspector.',
          ko:'본 챕터에서는 iSIS-SMTV의 Handler Teaching — Elevator, Load Multi Picker, Unload Multi Picker, Aligner, Pedestal, Tray Transfer Module(TTM), Multi Sorter Module(MSM), 3D Inspector, 2D Inspector의 Position Teaching 절차를 다룹니다.',
          zhCN:'本章介绍iSIS-SMTV的Handler Teaching——Elevator、Load Multi Picker、Unload Multi Picker、Aligner、Pedestal、Tray Transfer Module(TTM)、Multi Sorter Module(MSM)、3D Inspector、2D Inspector的Position Teaching流程。',
          zhTW:'本章介紹iSIS-SMTV的Handler Teaching——Elevator、Load Multi Picker、Unload Multi Picker、Aligner、Pedestal、Tray Transfer Module(TTM)、Multi Sorter Module(MSM)、3D Inspector、2D Inspector的Position Teaching流程。',
          ja:'本章ではiSIS-SMTVのHandler Teaching——Elevator、Load Multi Picker、Unload Multi Picker、Aligner、Pedestal、Tray Transfer Module(TTM)、Multi Sorter Module(MSM)、3D Inspector、2D InspectorのPosition Teaching手順を扱います。'
        }},
        {img:cmImg('F','smtv',78),tx:{
          vi:'F. Tray Transfer Module (TTM)\n\nTTM Left: lấy Tray từ Loader Rail và đặt lên Empty Rail. TTM Right: lấy Tray từ Empty Rail và đặt lên Rail Reject Empty, Good, Buffer, Reject1 hoặc Reject2.',
          en:'F. Tray Transfer Module (TTM)\n\nTTM Left: picks up a tray from the Loader Rail and places it on the Empty Rail. TTM Right: picks up a tray from the Empty Rail and places it on the Reject Empty, Good, Buffer, Reject1, or Reject2 rail.',
          ko:'F. Tray Transfer Module (TTM)\n\nTTM Left = Loader Rail에서 Tray를 Pick-up하여 Empty Rail에 Place. TTM Right = Empty Rail에서 Tray를 Pick-up하여 Reject Empty·Good·Buffer·Reject1·Reject2 Rail에 Place.',
          zhCN:'F. Tray Transfer Module (TTM)\n\nTTM Left:从Loader Rail取出Tray并放置到Empty Rail。TTM Right:从Empty Rail取出Tray并放置到Reject Empty、Good、Buffer、Reject1、Reject2 Rail。',
          zhTW:'F. Tray Transfer Module (TTM)\n\nTTM Left:從Loader Rail取出Tray並放置到Empty Rail。TTM Right:從Empty Rail取出Tray並放置到Reject Empty、Good、Buffer、Reject1、Reject2 Rail。',
          ja:'F. Tray Transfer Module (TTM)\n\nTTM Left:Loader RailからTrayを取り出しEmpty Railへ置く。TTM Right:Empty RailからTrayを取り出しReject Empty・Good・Buffer・Reject1・Reject2 Railへ置く。'
        }},
        {img:cmImg('F','smtv',79),tx:{
          vi:'Vị trí Rail Left/Right của TTM (tham khảo hình): X Load Pos, X Empty Place Pos, X Reject Empty Pos, X Good Pos, X Buffer Pos, X Reject1 Pos, X Reject2 Pos, X Empty Pick Pos.',
          en:'TTM Left/Right rail positions (refer to the picture): X Load Pos, X Empty Place Pos, X Reject Empty Pos, X Good Pos, X Buffer Pos, X Reject1 Pos, X Reject2 Pos, X Empty Pick Pos.',
          ko:'TTM Left/Right Rail 위치(그림 참고): X Load Pos, X Empty Place Pos, X Reject Empty Pos, X Good Pos, X Buffer Pos, X Reject1 Pos, X Reject2 Pos, X Empty Pick Pos.',
          zhCN:'TTM Left/Right Rail位置(参照图示):X Load Pos、X Empty Place Pos、X Reject Empty Pos、X Good Pos、X Buffer Pos、X Reject1 Pos、X Reject2 Pos、X Empty Pick Pos。',
          zhTW:'TTM Left/Right Rail位置(參照圖示):X Load Pos、X Empty Place Pos、X Reject Empty Pos、X Good Pos、X Buffer Pos、X Reject1 Pos、X Reject2 Pos、X Empty Pick Pos。',
          ja:'TTM Left/Right Rail位置(図参照):X Load Pos、X Empty Place Pos、X Reject Empty Pos、X Good Pos、X Buffer Pos、X Reject1 Pos、X Reject2 Pos、X Empty Pick Pos。'
        }},
        {img:cmImg('F','smtv',80),tx:{
          vi:'Host P/G ▸ Handler ▸ Map ▸ chọn Load Indexer 1 hoặc 2 → di chuyển đến Rear Tray Position với Tray đang Clamp.',
          en:'Host P/G ▸ Handler ▸ Map ▸ select Load Indexer 1 or 2 → move to the Rear Tray Position with the tray clamped.',
          ko:'Host P/G ▸ Handler ▸ Map ▸ Load Indexer 1 또는 2 선택 → Tray를 Clamp한 채로 Rear Tray Position으로 이동합니다.',
          zhCN:'Host P/G ▸ Handler ▸ Map ▸ 选择Load Indexer 1或2 → 在Tray保持Clamp的状态下移动到Rear Tray Position。',
          zhTW:'Host P/G ▸ Handler ▸ Map ▸ 選擇Load Indexer 1或2 → 在Tray保持Clamp的狀態下移動到Rear Tray Position。',
          ja:'Host P/G ▸ Handler ▸ Map ▸ Load Indexer 1または2を選択 → TrayをClampしたままRear Tray Positionへ移動します。'
        }},
        {img:cmImg('F','smtv',81),tx:{
          vi:'Host P/G ▸ Handler ▸ Map ▸ chọn TTM → di chuyển TTM đến X Load Position, sau đó hạ TTM Left Cylinder.',
          en:'Host P/G ▸ Handler ▸ Map ▸ select TTM → move the TTM to the X Load Position, then lower the TTM Left Cylinder.',
          ko:'Host P/G ▸ Handler ▸ Map ▸ TTM 선택 → TTM을 X Load Position으로 이동시키고, TTM Left Cylinder를 내립니다.',
          zhCN:'Host P/G ▸ Handler ▸ Map ▸ 选择TTM → 将TTM移动到X Load Position,并放下TTM Left Cylinder。',
          zhTW:'Host P/G ▸ Handler ▸ Map ▸ 選擇TTM → 將TTM移動到X Load Position,並放下TTM Left Cylinder。',
          ja:'Host P/G ▸ Handler ▸ Map ▸ TTMを選択 → TTMをX Load Positionへ移動させ、TTM Left Cylinderを下げます。'
        }},
        {img:cmImg('F','smtv',82),tx:{
          vi:'Hạ Z-axis từ từ để xác nhận vị trí X của Left Cylinder nằm giữa Load Rail. ⚠ Chú ý để TTM không va chạm với Rail.',
          en:'Slowly lower the Z-axis to confirm the Left Cylinder\'s X position is centered on the Load Rail. ⚠ Be careful that the TTM does not interfere with the rails.',
          ko:'Z-axis(Z축)를 천천히 내리며, Left Cylinder의 X Position이 Load Rail 중앙에 위치하는지 확인합니다. ⚠ TTM이 Rail과 간섭하지 않도록 주의합니다.',
          zhCN:'缓慢降低Z-axis,确认Left Cylinder的X Position是否位于Load Rail中央。⚠ 注意TTM不要与Rail发生干涉。',
          zhTW:'緩慢降低Z-axis,確認Left Cylinder的X Position是否位於Load Rail中央。⚠ 注意TTM不要與Rail發生干涉。',
          ja:'Z-axis(Z軸)をゆっくり下げながら、Left CylinderのX PositionがLoad Railの中央に位置するか確認します。⚠ TTMがRailと干渉しないよう注意します。'
        }},
        {img:cmImg('F','smtv',83),tx:{
          vi:'Teach & Save vị trí X hiện tại làm X Load Position. Teaching mọi vị trí X (theo từng Rail) của TTM theo cùng cách. ⚠ Left/Right Cylinder khác nhau theo từng Rail, cần lưu ý.',
          en:'Teach & Save the current X position as the X Load Position. Teach every X position (per rail) of the TTM the same way. ⚠ The Left/Right Cylinder differs per rail — take care.',
          ko:'현재 X Position을 Teach & Save 하여 X Load Position으로 저장합니다. TTM의 모든 X Position(Rail별)을 동일한 방식으로 Teaching합니다. ⚠ Rail마다 Left/Right Cylinder가 다르므로 주의합니다.',
          zhCN:'将当前X Position Teach & Save,保存为X Load Position。TTM的所有X Position(按Rail)均以相同方式进行Teaching。⚠ 每个Rail对应的Left/Right Cylinder不同,请注意。',
          zhTW:'將目前X Position Teach & Save,儲存為X Load Position。TTM的所有X Position(按Rail)均以相同方式進行Teaching。⚠ 每個Rail對應的Left/Right Cylinder不同,請注意。',
          ja:'現在のX PositionをTeach & SaveしてX Load Positionとして保存します。TTMのすべてのX Position(Railごと)を同じ方法でTeachingします。⚠ Railごとに Left/Right Cylinderが異なるため注意します。'
        }},
        {img:cmImg('F','smtv',84),tx:{
          vi:'Hạ TTM sao cho khoảng cách giữa Ball Bushing và Stopper là 1–2mm như hình.',
          en:'Lower the TTM so the gap between the Ball Bushing and Stopper is 1–2mm as shown.',
          ko:'그림처럼 Ball Bushing과 Stopper 사이 간격이 1~2mm가 되도록 TTM을 내립니다.',
          zhCN:'如图降低TTM,使Ball Bushing与Stopper之间的间隙达到1~2mm。',
          zhTW:'如圖降低TTM,使Ball Bushing與Stopper之間的間隙達到1~2mm。',
          ja:'図のようにBall BushingとStopperの間隔が1~2mmになるようTTMを下げます。'
        }},
        {img:cmImg('F','smtv',85),tx:{
          vi:'Teach & Save vị trí Z hiện tại làm Z Load Position. Teaching mọi vị trí Z của TTM theo cùng cách. ⚠ Left/Right Cylinder khác nhau theo từng Rail, cần lưu ý.',
          en:'Teach & Save the current Z position as the Z Load Position. Teach every Z position of the TTM the same way. ⚠ The Left/Right Cylinder differs per rail — take care.',
          ko:'현재 Z Position을 Teach & Save 하여 Z Load Position으로 저장합니다. TTM의 모든 Z Position도 동일한 방식으로 Teaching합니다. ⚠ Rail마다 Left/Right Cylinder가 다르므로 주의합니다.',
          zhCN:'将当前Z Position Teach & Save,保存为Z Load Position。TTM的所有Z Position也以相同方式进行Teaching。⚠ 每个Rail对应的Left/Right Cylinder不同,请注意。',
          zhTW:'將目前Z Position Teach & Save,儲存為Z Load Position。TTM的所有Z Position也以相同方式進行Teaching。⚠ 每個Rail對應的Left/Right Cylinder不同,請注意。',
          ja:'現在のZ PositionをTeach & SaveしてZ Load Positionとして保存します。TTMのすべてのZ Positionも同じ方法でTeachingします。⚠ Railごとに Left/Right Cylinderが異なるため注意します。'
        }},
        {img:cmImg('F','smtv',86),tx:{
          vi:'Di chuyển Indexer sao cho đầu Plate khớp với đầu Tray như hình.',
          en:'Move the Indexer so the end of the plate matches the end of the tray as shown.',
          ko:'그림처럼 Indexer를 움직여 Plate 끝과 Tray 끝이 일치하도록 합니다.',
          zhCN:'如图移动Indexer,使Plate边缘与Tray边缘对齐。',
          zhTW:'如圖移動Indexer,使Plate邊緣與Tray邊緣對齊。',
          ja:'図のようにIndexerを動かし、Plateの端とTrayの端が一致するようにします。'
        }},
        {img:cmImg('F','smtv',87),tx:{
          vi:'Teach & Save vị trí Y hiện tại làm Y Rear Tray Position. Teaching mọi vị trí Y của TTM theo cùng cách.',
          en:'Teach & Save the current Y position as the Y Rear Tray Position. Teach every Y position of the TTM the same way.',
          ko:'현재 Y Position을 Teach & Save 하여 Y Rear Tray Position으로 저장합니다. TTM의 모든 Y Position도 동일한 방식으로 Teaching합니다.',
          zhCN:'将当前Y Position Teach & Save,保存为Y Rear Tray Position。TTM的所有Y Position也以相同方式进行Teaching。',
          zhTW:'將目前Y Position Teach & Save,儲存為Y Rear Tray Position。TTM的所有Y Position也以相同方式進行Teaching。',
          ja:'現在のY PositionをTeach & SaveしてY Rear Tray Positionとして保存します。TTMのすべてのY Positionも同じ方法でTeachingします。'
        }},
        {img:cmImg('F','smtv',88),tx:{
          vi:'Chương này giới thiệu Handler Teaching cho iSIS-SMTV — quy trình Teaching vị trí cho Elevator, Load Multi Picker, Unload Multi Picker, Aligner, Pedestal, Tray Transfer Module (TTM), Multi Sorter Module (MSM), 3D Inspector và 2D Inspector.',
          en:'This chapter covers Handler Teaching for iSIS-SMTV — the position-teaching sequence for the Elevator, Load Multi Picker, Unload Multi Picker, Aligner, Pedestal, Tray Transfer Module (TTM), Multi Sorter Module (MSM), 3D Inspector, and 2D Inspector.',
          ko:'본 챕터에서는 iSIS-SMTV의 Handler Teaching — Elevator, Load Multi Picker, Unload Multi Picker, Aligner, Pedestal, Tray Transfer Module(TTM), Multi Sorter Module(MSM), 3D Inspector, 2D Inspector의 Position Teaching 절차를 다룹니다.',
          zhCN:'本章介绍iSIS-SMTV的Handler Teaching——Elevator、Load Multi Picker、Unload Multi Picker、Aligner、Pedestal、Tray Transfer Module(TTM)、Multi Sorter Module(MSM)、3D Inspector、2D Inspector的Position Teaching流程。',
          zhTW:'本章介紹iSIS-SMTV的Handler Teaching——Elevator、Load Multi Picker、Unload Multi Picker、Aligner、Pedestal、Tray Transfer Module(TTM)、Multi Sorter Module(MSM)、3D Inspector、2D Inspector的Position Teaching流程。',
          ja:'本章ではiSIS-SMTVのHandler Teaching——Elevator、Load Multi Picker、Unload Multi Picker、Aligner、Pedestal、Tray Transfer Module(TTM)、Multi Sorter Module(MSM)、3D Inspector、2D InspectorのPosition Teaching手順を扱います。'
        }},
        {img:cmImg('F','smtv',89),tx:{
          vi:'G. Multi Sorter Module (MSM)\n\nVị trí X của MSM để Sorting Unit Good hoặc Bad. Cần Reference Tray và Teaching Pin.',
          en:'G. Multi Sorter Module (MSM)\n\nThe MSM X position for sorting Good or Bad units. A Reference Tray and Teaching Pin are needed.',
          ko:'G. Multi Sorter Module (MSM)\n\nGood 또는 Bad Unit을 Sorting하기 위한 MSM X Position입니다. Reference Tray와 Teaching Pin이 필요합니다.',
          zhCN:'G. Multi Sorter Module (MSM)\n\n用于对Good或Bad Unit进行Sorting的MSM X Position。需要Reference Tray与Teaching Pin。',
          zhTW:'G. Multi Sorter Module (MSM)\n\n用於對Good或Bad Unit進行Sorting的MSM X Position。需要Reference Tray與Teaching Pin。',
          ja:'G. Multi Sorter Module (MSM)\n\nGoodまたはBad UnitをSortingするためのMSM X Positionです。Reference TrayとTeaching Pinが必要です。'
        }},
        {img:cmImg('F','smtv',90),tx:{
          vi:'Gắn Teaching Pin vào Left Picker của Multi Sorter. Host P/G ▸ Handler ▸ Map ▸ chọn Indexer (Good1, Good2, Buffer, Reject1, Reject2) → đặt Reference Tray lên Rail và Clamp, sau đó di chuyển Indexer đến vị trí Multi Sorter.',
          en:'Attach the Teaching Pin to the Multi Sorter\'s Left Picker. Host P/G ▸ Handler ▸ Map ▸ select Indexer (Good1, Good2, Buffer, Reject1, Reject2) → place the reference tray on the rail and clamp it, then move the Indexer to the Multi Sorter position.',
          ko:'Multi Sorter Left Picker에 Teaching Pin을 장착합니다. Host P/G ▸ Handler ▸ Map ▸ Indexer(Good1, Good2, Buffer, Reject1, Reject2) 선택 → Reference Tray를 Rail에 놓고 Clamp한 뒤, Indexer를 Multi Sorter 위치로 이동합니다.',
          zhCN:'在Multi Sorter Left Picker上安装Teaching Pin。Host P/G ▸ Handler ▸ Map ▸ 选择Indexer(Good1、Good2、Buffer、Reject1、Reject2) → 将Reference Tray放到Rail上并Clamp,然后将Indexer移动到Multi Sorter位置。',
          zhTW:'在Multi Sorter Left Picker上安裝Teaching Pin。Host P/G ▸ Handler ▸ Map ▸ 選擇Indexer(Good1、Good2、Buffer、Reject1、Reject2) → 將Reference Tray放到Rail上並Clamp,然後將Indexer移動到Multi Sorter位置。',
          ja:'Multi Sorter Left PickerにTeaching Pinを装着します。Host P/G ▸ Handler ▸ Map ▸ Indexer(Good1、Good2、Buffer、Reject1、Reject2)を選択 → Reference TrayをRailに載せてClampした後、IndexerをMulti Sorter位置へ移動します。'
        }},
        {img:cmImg('F','smtv',91),tx:{
          vi:'Host P/G ▸ Handler ▸ Map ▸ chọn MSM → di chuyển MSM đến vị trí X cần Teaching, và bật Left Picker Down Solenoid.',
          en:'Host P/G ▸ Handler ▸ Map ▸ select MSM → move the MSM to the X position to be taught, and turn on the Left Picker Down Solenoid.',
          ko:'Host P/G ▸ Handler ▸ Map ▸ MSM 선택 → Teaching할 X Position으로 MSM을 이동시키고, Left Picker Down Solenoid를 켭니다.',
          zhCN:'Host P/G ▸ Handler ▸ Map ▸ 选择MSM → 将MSM移动到要Teaching的X Position,并开启Left Picker Down Solenoid。',
          zhTW:'Host P/G ▸ Handler ▸ Map ▸ 選擇MSM → 將MSM移動到要Teaching的X Position,並開啟Left Picker Down Solenoid。',
          ja:'Host P/G ▸ Handler ▸ Map ▸ MSMを選択 → TeachingするX PositionへMSMを移動させ、Left Picker Down Solenoidをオンにします。'
        }},
        {img:cmImg('F','smtv',92),tx:{
          vi:'Hạ Z-axis để Teaching Pin chạm Reference Tray, sau đó di chuyển vị trí X của MSM và vị trí Y của Indexer sao cho Pin khớp với Pin-hole. ⚠ Khi Z-axis đang hạ, X-axis không di chuyển được.',
          en:'Lower the Z-axis to move the Teaching Pin to the position where it touches the reference tray. Move the MSM\'s X position and the Indexer\'s Y position so the Pin aligns with the Pin-hole. ⚠ The X-axis does not move while the Z-axis is lowered.',
          ko:'Z-axis(Z축)를 낮춰 Teaching Pin이 Reference Tray에 닿는 위치로 이동시킵니다. MSM의 X Position과 Indexer의 Y Position을 움직여 Pin과 Pin-hole이 일치하도록 맞춥니다. ⚠ Z-axis(Z축)가 내려간 상태에서는 X-axis(X축)가 움직이지 않습니다.',
          zhCN:'降低Z-axis,使Teaching Pin移动到接触Reference Tray的位置。移动MSM的X Position与Indexer的Y Position,使Pin与Pin-hole对齐。⚠ Z-axis下降状态下,X-axis不会移动。',
          zhTW:'降低Z-axis,使Teaching Pin移動到接觸Reference Tray的位置。移動MSM的X Position與Indexer的Y Position,使Pin與Pin-hole對齊。⚠ Z-axis下降狀態下,X-axis不會移動。',
          ja:'Z-axis(Z軸)を下げてTeaching PinがReference Trayに接触する位置へ移動させます。MSMのX PositionとIndexerのY Positionを動かし、PinとPin-holeが一致するように合わせます。⚠ Z-axis(Z軸)が下がった状態ではX-axis(X軸)は動きません。'
        }},
        {img:cmImg('F','smtv',93),tx:{
          vi:'Khi Teaching Pin và Pin-hole khớp nhau, Teach & Save vị trí Rail của MSM và Indexer. Teaching Good1, Good2, Buffer, Reject1, Reject2 theo cùng cách.',
          en:'Once the Teaching Pin and Pin-hole align, Teach & Save the rail position of the MSM & Indexer. Teach Good1, Good2, Buffer, Reject1, and Reject2 the same way.',
          ko:'Teaching Pin과 Pin-hole이 일치하면, MSM과 Indexer의 Rail 위치를 Teach & Save 합니다. Good1·Good2·Buffer·Reject1·Reject2도 동일한 방식으로 Teaching합니다.',
          zhCN:'当Teaching Pin与Pin-hole对齐后,将MSM与Indexer的Rail位置Teach & Save。Good1、Good2、Buffer、Reject1、Reject2也以相同方式进行Teaching。',
          zhTW:'當Teaching Pin與Pin-hole對齊後,將MSM與Indexer的Rail位置Teach & Save。Good1、Good2、Buffer、Reject1、Reject2也以相同方式進行Teaching。',
          ja:'Teaching PinとPin-holeが一致したら、MSMとIndexerのRail位置をTeach & Saveします。Good1・Good2・Buffer・Reject1・Reject2も同じ方法でTeachingします。'
        }},
        {img:cmImg('F','smtv',94),tx:{
          vi:'Di chuyển vị trí Teaching Pin đến mặt phẳng của Reference Tray và hạ xuống đến khi chạm mặt phẳng.',
          en:'Move the Teaching Pin to the reference tray\'s flat surface position and lower it until it touches the surface.',
          ko:'Teaching Pin 위치를 Reference Tray 평면으로 이동시켜, 평면에 닿을 때까지 내립니다.',
          zhCN:'将Teaching Pin移动到Reference Tray平面位置,下降直至接触平面。',
          zhTW:'將Teaching Pin移動到Reference Tray平面位置,下降直至接觸平面。',
          ja:'Teaching PinをReference Tray平面位置へ移動させ、平面に触れるまで下げます。'
        }},
        {img:cmImg('F','smtv',95),tx:{
          vi:'Nếu vị trí chạm là Z 16mm chẳng hạn, Teach & Save Z Pick Position là 17mm (chạm+1mm) và Z Place Position là 15mm (chạm−1mm). Teaching Good, Buffer, Reject1, Reject2 theo cùng cách.',
          en:'If the Z contact position is, for example, 16mm, Teach & Save the Z Pick Position as 17mm (contact +1mm) and the Z Place Position as 15mm (contact −1mm). Teach Good, Buffer, Reject1, and Reject2 the same way.',
          ko:'접촉 위치가 예를 들어 Z 16mm라면, Z Pick Position은 17mm(접촉+1mm), Z Place Position은 15mm(접촉−1mm)로 Teach & Save 합니다. Good·Buffer·Reject1·Reject2도 동일한 방식으로 Teaching합니다.',
          zhCN:'若接触位置例如为Z 16mm,则将Z Pick Position设为17mm(接触+1mm),Z Place Position设为15mm(接触−1mm)并Teach & Save。Good、Buffer、Reject1、Reject2也以相同方式进行Teaching。',
          zhTW:'若接觸位置例如為Z 16mm,則將Z Pick Position設為17mm(接觸+1mm),Z Place Position設為15mm(接觸−1mm)並Teach & Save。Good、Buffer、Reject1、Reject2也以相同方式進行Teaching。',
          ja:'接触位置が例えばZ 16mmの場合、Z Pick Positionは17mm(接触+1mm)、Z Place Positionは15mm(接触−1mm)としてTeach & Saveします。Good・Buffer・Reject1・Reject2も同じ方法でTeachingします。'
        }},
        {img:cmImg('F','smtv',96),tx:{
          vi:'Chương này giới thiệu Handler Teaching cho iSIS-SMTV — quy trình Teaching vị trí cho Elevator, Load Multi Picker, Unload Multi Picker, Aligner, Pedestal, Tray Transfer Module (TTM), Multi Sorter Module (MSM), 3D Inspector và 2D Inspector.',
          en:'This chapter covers Handler Teaching for iSIS-SMTV — the position-teaching sequence for the Elevator, Load Multi Picker, Unload Multi Picker, Aligner, Pedestal, Tray Transfer Module (TTM), Multi Sorter Module (MSM), 3D Inspector, and 2D Inspector.',
          ko:'본 챕터에서는 iSIS-SMTV의 Handler Teaching — Elevator, Load Multi Picker, Unload Multi Picker, Aligner, Pedestal, Tray Transfer Module(TTM), Multi Sorter Module(MSM), 3D Inspector, 2D Inspector의 Position Teaching 절차를 다룹니다.',
          zhCN:'本章介绍iSIS-SMTV的Handler Teaching——Elevator、Load Multi Picker、Unload Multi Picker、Aligner、Pedestal、Tray Transfer Module(TTM)、Multi Sorter Module(MSM)、3D Inspector、2D Inspector的Position Teaching流程。',
          zhTW:'本章介紹iSIS-SMTV的Handler Teaching——Elevator、Load Multi Picker、Unload Multi Picker、Aligner、Pedestal、Tray Transfer Module(TTM)、Multi Sorter Module(MSM)、3D Inspector、2D Inspector的Position Teaching流程。',
          ja:'本章ではiSIS-SMTVのHandler Teaching——Elevator、Load Multi Picker、Unload Multi Picker、Aligner、Pedestal、Tray Transfer Module(TTM)、Multi Sorter Module(MSM)、3D Inspector、2D InspectorのPosition Teaching手順を扱います。'
        }},
        {img:cmImg('F','smtv',97),tx:{
          vi:'H. 3D Inspector — Inspector X,Y Reference Position\n\nVị trí chuẩn X,Y của 3D Inspector. Lắp Pedestal — như hình, Pin-hole phía trên Pedestal là chuẩn.',
          en:'H. 3D Inspector — Inspector X,Y Reference Position\n\nThe X,Y reference position of the 3D Inspector. Install the Pedestal — the upper Pin-hole of the Pedestal is the reference, as shown.',
          ko:'H. 3D Inspector — Inspector X,Y Reference Position\n\n3D Inspector의 X,Y 기준 위치입니다. Pedestal을 설치합니다 — 그림처럼 Pedestal 상단 Pin-hole이 기준이 됩니다.',
          zhCN:'H. 3D Inspector — Inspector X,Y Reference Position\n\n是3D Inspector的X,Y基准位置。安装Pedestal——如图所示,Pedestal上部的Pin-hole为基准。',
          zhTW:'H. 3D Inspector — Inspector X,Y Reference Position\n\n是3D Inspector的X,Y基準位置。安裝Pedestal——如圖所示,Pedestal上部的Pin-hole為基準。',
          ja:'H. 3D Inspector — Inspector X,Y Reference Position\n\n3D InspectorのX,Y基準位置です。Pedestalを設置します——図のようにPedestal上部のPin-holeが基準になります。'
        }},
        {img:cmImg('F','smtv',98),tx:{
          vi:'Từ Host PC, kết nối remote desktop đến 3D Vision PC. (IP 3D Vision1 PC: 10.10.1.11, IP 3D Vision2 PC: 10.10.1.21)',
          en:'From the Host PC, remote desktop into the 3D Vision PC. (3D Vision1 PC IP: 10.10.1.11, 3D Vision2 PC IP: 10.10.1.21)',
          ko:'Host PC에서 원격 데스크톱으로 3D Vision PC에 접속합니다. (3D Vision1 PC IP: 10.10.1.11, 3D Vision2 PC IP: 10.10.1.21)',
          zhCN:'从Host PC通过远程桌面连接到3D Vision PC。(3D Vision1 PC IP:10.10.1.11,3D Vision2 PC IP:10.10.1.21)',
          zhTW:'從Host PC透過遠端桌面連接到3D Vision PC。(3D Vision1 PC IP:10.10.1.11,3D Vision2 PC IP:10.10.1.21)',
          ja:'Host PCからリモートデスクトップで3D Vision PCへ接続します。(3D Vision1 PC IP:10.10.1.11、3D Vision2 PC IP:10.10.1.21)'
        }},
        {img:cmImg('F','smtv',99),tx:{
          vi:'Trên 3D Vision PC, chạy Vision Program và nhấn Illumination Control, sau đó bật đèn (2D hoặc 3D).',
          en:'On the 3D Vision PC, run the Vision Program and click Illumination Control, then turn on the lighting (2D or 3D).',
          ko:'3D Vision PC에서 Vision Program을 실행하고 Illumination Control을 클릭한 뒤, 조명(2D 또는 3D)을 켭니다.',
          zhCN:'在3D Vision PC上运行Vision Program,点击Illumination Control后开启照明(2D或3D)。',
          zhTW:'在3D Vision PC上執行Vision Program,點擊Illumination Control後開啟照明(2D或3D)。',
          ja:'3D Vision PCでVision Programを実行し、Illumination Controlをクリックした後、照明(2Dまたは3D)を点けます。'
        }},
        {img:cmImg('F','smtv',100),tx:{
          vi:'Di chuyển đến vị trí chuẩn X, Y. Dùng AF Program hạ vị trí Z đến khi ảnh rõ nét nhất.',
          en:'Move to the X, Y reference position. Use the AF Program to lower the Z position until the image is sharpest.',
          ko:'X, Y 기준 위치로 이동합니다. AF Program을 이용해 이미지가 가장 선명하게 보이도록 Z Position을 낮춥니다.',
          zhCN:'移动到X、Y基准位置。利用AF Program降低Z Position,使图像显示最清晰。',
          zhTW:'移動到X、Y基準位置。利用AF Program降低Z Position,使影像顯示最清晰。',
          ja:'X、Y基準位置へ移動します。AF Programを利用し、画像が最も鮮明に見えるようZ Positionを下げます。'
        }},
        {img:cmImg('F','smtv',101),tx:{
          vi:'Nhấp chuột phải vào ảnh để bật Show Image Center Line. Chỉnh vị trí X, Y của 3D Inspector sao cho đường tâm ảnh khớp với tâm Pin-hole.',
          en:'Right-click the image to enable Show Image Center Line. Modify the X, Y positions of the 3D Inspector so the image center line aligns with the Pin-hole center.',
          ko:'화면을 우클릭해 Show Image Center Line을 활성화합니다. 3D Inspector의 X, Y Position을 움직여 이미지 중심선과 Pin-hole 중심이 일치하도록 합니다.',
          zhCN:'右键点击画面以启用Show Image Center Line。移动3D Inspector的X、Y Position,使图像中心线与Pin-hole中心对齐。',
          zhTW:'右鍵點擊畫面以啟用Show Image Center Line。移動3D Inspector的X、Y Position,使影像中心線與Pin-hole中心對齊。',
          ja:'画面を右クリックしてShow Image Center Lineを有効にします。3D InspectorのX、Y Positionを動かし、画像中心線とPin-hole中心が一致するようにします。'
        }},
        {img:cmImg('F','smtv',102),tx:{
          vi:'Teach & Save vị trí X, Y hiện tại làm Jig X,Y Reference Position.',
          en:'Teach & Save the current X, Y position as the Jig X,Y Reference Position.',
          ko:'현재 X, Y Position을 Teach & Save 하여 Jig X,Y Reference Position으로 저장합니다.',
          zhCN:'将当前X、Y Position Teach & Save,保存为Jig X,Y Reference Position。',
          zhTW:'將目前X、Y Position Teach & Save,儲存為Jig X,Y Reference Position。',
          ja:'現在のX、Y PositionをTeach & SaveしてJig X,Y Reference Positionとして保存します。'
        }},
        {img:cmImg('F','smtv',103),tx:{
          vi:'Chương này giới thiệu Handler Teaching cho iSIS-SMTV — quy trình Teaching vị trí cho Elevator, Load Multi Picker, Unload Multi Picker, Aligner, Pedestal, Tray Transfer Module (TTM), Multi Sorter Module (MSM), 3D Inspector và 2D Inspector.',
          en:'This chapter covers Handler Teaching for iSIS-SMTV — the position-teaching sequence for the Elevator, Load Multi Picker, Unload Multi Picker, Aligner, Pedestal, Tray Transfer Module (TTM), Multi Sorter Module (MSM), 3D Inspector, and 2D Inspector.',
          ko:'본 챕터에서는 iSIS-SMTV의 Handler Teaching — Elevator, Load Multi Picker, Unload Multi Picker, Aligner, Pedestal, Tray Transfer Module(TTM), Multi Sorter Module(MSM), 3D Inspector, 2D Inspector의 Position Teaching 절차를 다룹니다.',
          zhCN:'本章介绍iSIS-SMTV的Handler Teaching——Elevator、Load Multi Picker、Unload Multi Picker、Aligner、Pedestal、Tray Transfer Module(TTM)、Multi Sorter Module(MSM)、3D Inspector、2D Inspector的Position Teaching流程。',
          zhTW:'本章介紹iSIS-SMTV的Handler Teaching——Elevator、Load Multi Picker、Unload Multi Picker、Aligner、Pedestal、Tray Transfer Module(TTM)、Multi Sorter Module(MSM)、3D Inspector、2D Inspector的Position Teaching流程。',
          ja:'本章ではiSIS-SMTVのHandler Teaching——Elevator、Load Multi Picker、Unload Multi Picker、Aligner、Pedestal、Tray Transfer Module(TTM)、Multi Sorter Module(MSM)、3D Inspector、2D InspectorのPosition Teaching手順を扱います。'
        }},
        {img:cmImg('F','smtv',104),tx:{
          vi:'I. 2D Inspector — Inspector X,Y Reference Position\n\nVị trí chuẩn X,Y của 2D Inspector. Chuẩn bị Reference Tray.',
          en:'I. 2D Inspector — Inspector X,Y Reference Position\n\nThe X,Y reference position of the 2D Inspector. Prepare a Reference Tray.',
          ko:'I. 2D Inspector — Inspector X,Y Reference Position\n\n2D Inspector의 X,Y 기준 위치입니다. Reference Tray를 준비합니다.',
          zhCN:'I. 2D Inspector — Inspector X,Y Reference Position\n\n是2D Inspector的X,Y基准位置。准备Reference Tray。',
          zhTW:'I. 2D Inspector — Inspector X,Y Reference Position\n\n是2D Inspector的X,Y基準位置。準備Reference Tray。',
          ja:'I. 2D Inspector — Inspector X,Y Reference Position\n\n2D InspectorのX,Y基準位置です。Reference Trayを準備します。'
        }},
        {img:cmImg('F','smtv',105),tx:{
          vi:'Từ Host PC, kết nối remote desktop đến 2D Vision PC. (IP 2D Vision PC: 10.10.1.31)',
          en:'From the Host PC, remote desktop into the 2D Vision PC. (2D Vision PC IP: 10.10.1.31)',
          ko:'Host PC에서 원격 데스크톱으로 2D Vision PC에 접속합니다. (2D Vision PC IP: 10.10.1.31)',
          zhCN:'从Host PC通过远程桌面连接到2D Vision PC。(2D Vision PC IP:10.10.1.31)',
          zhTW:'從Host PC透過遠端桌面連接到2D Vision PC。(2D Vision PC IP:10.10.1.31)',
          ja:'Host PCからリモートデスクトップで2D Vision PCへ接続します。(2D Vision PC IP:10.10.1.31)'
        }},
        {img:cmImg('F','smtv',106),tx:{
          vi:'Đặt Reference Tray lên Good Rail như hình. Host P/G ▸ Handler ▸ Map ▸ chọn Good Indexer 1 → bật B/W và F/W Clamp để cố định Reference Tray, và di chuyển đến Indexer Y Top Inspection Position.',
          en:'Place the reference tray on the Good Rail as shown. Host P/G ▸ Handler ▸ Map ▸ select Good Indexer 1 → turn on the B/W and F/W Clamps to fasten the reference tray, and move to the Indexer Y Top Inspection Position.',
          ko:'그림처럼 Reference Tray를 Good Rail에 올립니다. Host P/G ▸ Handler ▸ Map ▸ Good Indexer 1 선택 → B/W·F/W Clamp를 켜서 Reference Tray를 고정하고, Indexer Y Top Inspection Position으로 이동합니다.',
          zhCN:'如图将Reference Tray放到Good Rail上。Host P/G ▸ Handler ▸ Map ▸ 选择Good Indexer 1 → 开启B/W·F/W Clamp固定Reference Tray,并移动到Indexer Y Top Inspection Position。',
          zhTW:'如圖將Reference Tray放到Good Rail上。Host P/G ▸ Handler ▸ Map ▸ 選擇Good Indexer 1 → 開啟B/W·F/W Clamp固定Reference Tray,並移動到Indexer Y Top Inspection Position。',
          ja:'図のようにReference TrayをGood Railに載せます。Host P/G ▸ Handler ▸ Map ▸ Good Indexer 1を選択 → B/W・F/W ClampをオンにしてReference Trayを固定し、Indexer Y Top Inspection Positionへ移動します。'
        }},
        {img:cmImg('F','smtv',107),tx:{
          vi:'Host P/G ▸ Handler ▸ Map ▸ chọn 2D Inspector → di chuyển đến Inspector X Reference Position.',
          en:'Host P/G ▸ Handler ▸ Map ▸ select 2D Inspector → move to the Inspector X Reference Position.',
          ko:'Host P/G ▸ Handler ▸ Map ▸ 2D Inspector 선택 → Inspector X Reference Position으로 이동합니다.',
          zhCN:'Host P/G ▸ Handler ▸ Map ▸ 选择2D Inspector → 移动到Inspector X Reference Position。',
          zhTW:'Host P/G ▸ Handler ▸ Map ▸ 選擇2D Inspector → 移動到Inspector X Reference Position。',
          ja:'Host P/G ▸ Handler ▸ Map ▸ 2D Inspectorを選択 → Inspector X Reference Positionへ移動します。'
        }},
        {img:cmImg('F','smtv',108),tx:{
          vi:'Hạ vị trí Z đến khi ảnh rõ nét nhất.',
          en:'Lower the Z position until the image is sharpest.',
          ko:'이미지가 가장 선명하게 보이도록 Z Position을 낮춥니다.',
          zhCN:'降低Z Position,使图像显示最清晰。',
          zhTW:'降低Z Position,使影像顯示最清晰。',
          ja:'画像が最も鮮明に見えるようZ Positionを下げます。'
        }},
        {img:cmImg('F','smtv',109),tx:{
          vi:'Teach & Save vị trí Z hiện tại làm Inspection Z Position.',
          en:'Teach & Save the current Z position as the Inspection Z Position.',
          ko:'현재 Z Position을 Teach & Save 하여 Inspection Z Position으로 저장합니다.',
          zhCN:'将当前Z Position Teach & Save,保存为Inspection Z Position。',
          zhTW:'將目前Z Position Teach & Save,儲存為Inspection Z Position。',
          ja:'現在のZ PositionをTeach & SaveしてInspection Z Positionとして保存します。'
        }},
        {img:cmImg('F','smtv',110),tx:{
          vi:'Nhấp chuột phải vào ảnh để bật Show Image Center Line. Chỉnh vị trí X của 2D Inspector và vị trí Y của Good Indexer 1 sao cho Pin-hole của Reference Tray khớp với tâm dấu thập ảnh Live.',
          en:'Right-click the image to enable Show Image Center Line. Modify the X position of the 2D Inspector and the Y position of Good Indexer 1 so the reference tray\'s Pin-hole aligns with the live image\'s crosshair center.',
          ko:'화면을 우클릭해 Show Image Center Line을 활성화합니다. 2D Inspector의 X Position과 Good Indexer 1의 Y Position을 움직여, Reference Tray의 Pin-hole과 Live 영상 십자선 중심이 일치하도록 합니다.',
          zhCN:'右键点击画面以启用Show Image Center Line。移动2D Inspector的X Position与Good Indexer 1的Y Position,使Reference Tray的Pin-hole与Live画面十字线中心对齐。',
          zhTW:'右鍵點擊畫面以啟用Show Image Center Line。移動2D Inspector的X Position與Good Indexer 1的Y Position,使Reference Tray的Pin-hole與Live畫面十字線中心對齊。',
          ja:'画面を右クリックしてShow Image Center Lineを有効にします。2D InspectorのX PositionとGood Indexer 1のY Positionを動かし、Reference TrayのPin-holeとLive映像の十字線中心が一致するようにします。'
        }},
        {img:cmImg('F','smtv',111),tx:{
          vi:'Teach & Save vị trí X hiện tại của 2D Inspector làm Inspector X Good Rail Position.',
          en:'Teach & Save the current 2D Inspector X position as the Inspector X Good Rail Position.',
          ko:'현재 2D Inspector X Position을 Teach & Save 하여 Inspector X Good Rail Position으로 저장합니다.',
          zhCN:'将当前2D Inspector X Position Teach & Save,保存为Inspector X Good Rail Position。',
          zhTW:'將目前2D Inspector X Position Teach & Save,儲存為Inspector X Good Rail Position。',
          ja:'現在の2D Inspector X PositionをTeach & SaveしてInspector X Good Rail Positionとして保存します。'
        }},
        {img:cmImg('F','smtv',112),tx:{
          vi:'Teach & Save vị trí Y hiện tại của Good Indexer 1 làm Top Inspection Position. Teaching Good Indexer 2, Buffer Indexer theo cùng cách. Teaching vị trí X, Y, Z của Gray Target, Matrix Target cũng theo cùng cách.',
          en:'Teach & Save the current Y position of Good Indexer 1 as the Top Inspection Position. Teach Good Indexer 2 and Buffer Indexer the same way. Teach the Gray Target and Matrix Target X, Y, Z positions the same way as well.',
          ko:'현재 Good Indexer 1의 Y Position을 Teach & Save 하여 Top Inspection Position으로 저장합니다. Good Indexer 2, Buffer Indexer도 같은 방식으로 Teaching합니다. Gray Target, Matrix Target의 X, Y, Z Position도 동일한 방식으로 Teaching합니다.',
          zhCN:'将当前Good Indexer 1的Y Position Teach & Save,保存为Top Inspection Position。Good Indexer 2、Buffer Indexer也以相同方式进行Teaching。Gray Target、Matrix Target的X、Y、Z Position也以相同方式进行Teaching。',
          zhTW:'將目前Good Indexer 1的Y Position Teach & Save,儲存為Top Inspection Position。Good Indexer 2、Buffer Indexer也以相同方式進行Teaching。Gray Target、Matrix Target的X、Y、Z Position也以相同方式進行Teaching。',
          ja:'現在のGood Indexer 1のY PositionをTeach & SaveしてTop Inspection Positionとして保存します。Good Indexer 2、Buffer Indexerも同じ方法でTeachingします。Gray Target、Matrix TargetのX、Y、Z Positionも同じ方法でTeachingします。'
        }},
        {img:cmImg('F','smtv',113),tx:{
          vi:'J. LTS Target Position\n\nPhần này đề cập đến Teaching Target Long Term Stability (LTS): Job Open, Gray Target Setting, Matrix Target Setting và Step Height Target Setting.',
          en:'J. LTS Target Position\n\nThis section covers Long Term Stability (LTS) target teaching: Job Open, Gray Target Setting, Matrix Target Setting, and Step Height Target Setting.',
          ko:'J. LTS Target Position\n\nLong Term Stability(LTS) 타겟 Teaching — Job Open, Gray Target Setting, Matrix Target Setting, Step Height Target Setting을 다룹니다.',
          zhCN:'J. LTS Target Position\n\n本节介绍Long Term Stability(LTS)目标Teaching——Job Open、Gray Target Setting、Matrix Target Setting、Step Height Target Setting。',
          zhTW:'J. LTS Target Position\n\n本節介紹Long Term Stability(LTS)目標Teaching——Job Open、Gray Target Setting、Matrix Target Setting、Step Height Target Setting。',
          ja:'J. LTS Target Position\n\n本節ではLong Term Stability(LTS)ターゲットTeaching——Job Open、Gray Target Setting、Matrix Target Setting、Step Height Target Settingを扱います。'
        }},
        {img:cmImg('F','smtv',114),tx:{
          vi:'LTS Target Position — phần này đề cập đến Job Open, Gray Target Setting, Matrix Target Setting và Step Height Target Setting.',
          en:'LTS Target Position — this section covers Job Open, Gray Target Setting, Matrix Target Setting, and Step Height Target Setting.',
          ko:'LTS Target Position — Job Open, Gray Target Setting, Matrix Target Setting, Step Height Target Setting을 다룹니다.',
          zhCN:'LTS Target Position——本节介绍Job Open、Gray Target Setting、Matrix Target Setting、Step Height Target Setting。',
          zhTW:'LTS Target Position——本節介紹Job Open、Gray Target Setting、Matrix Target Setting、Step Height Target Setting。',
          ja:'LTS Target Position——本節ではJob Open、Gray Target Setting、Matrix Target Setting、Step Height Target Settingを扱います。'
        }},
        {img:cmImg('F','smtv',115),tx:{
          vi:'J-1. LTS Job Open\n\nNhấn Job Open và chọn file Job LTS.',
          en:'J-1. LTS Job Open\n\nClick Job Open and select the LTS job file.',
          ko:'J-1. LTS Job Open\n\nJob Open을 클릭하고 LTS Job 파일을 선택합니다.',
          zhCN:'J-1. LTS Job Open\n\n点击Job Open,选择LTS Job文件。',
          zhTW:'J-1. LTS Job Open\n\n點擊Job Open,選擇LTS Job檔案。',
          ja:'J-1. LTS Job Open\n\nJob Openをクリックし、LTS Jobファイルを選択します。'
        }},
        {img:cmImg('F','smtv',116),tx:{
          vi:'LTS Target Position — phần này đề cập đến Job Open, Gray Target Setting, Matrix Target Setting và Step Height Target Setting.',
          en:'LTS Target Position — this section covers Job Open, Gray Target Setting, Matrix Target Setting, and Step Height Target Setting.',
          ko:'LTS Target Position — Job Open, Gray Target Setting, Matrix Target Setting, Step Height Target Setting을 다룹니다.',
          zhCN:'LTS Target Position——本节介绍Job Open、Gray Target Setting、Matrix Target Setting、Step Height Target Setting。',
          zhTW:'LTS Target Position——本節介紹Job Open、Gray Target Setting、Matrix Target Setting、Step Height Target Setting。',
          ja:'LTS Target Position——本節ではJob Open、Gray Target Setting、Matrix Target Setting、Step Height Target Settingを扱います。'
        }},
        {img:cmImg('F','smtv',117),tx:{
          vi:'J-2. Gray Target Setting\n\nVị trí Gray Target của mỗi Vision (3D 1&2, 2D) như hình. 3D 1&2: di chuyển vị trí X của 3D Inspector và vị trí Y của Pedestal đến vị trí trong hình. 2D: di chuyển vị trí X của 2D Inspector và vị trí Y của Indexer đến vị trí trong hình.',
          en:'J-2. Gray Target Setting\n\nThe Gray Target position for each vision (3D 1&2, 2D) is shown in the figure. 3D 1&2: move the 3D Inspector\'s X position and the Pedestal\'s Y position to the position shown. 2D: move the 2D Inspector\'s X position and the Indexer Y position to the position shown.',
          ko:'J-2. Gray Target Setting\n\n각 Vision(3D 1&2, 2D)의 Gray Target 위치는 그림과 같습니다. 3D 1&2: 3D Inspector의 X Position과 Pedestal의 Y Position을 그림에 표시된 위치로 이동합니다. 2D: 2D Inspector의 X Position과 Indexer Y Position을 그림에 표시된 위치로 이동합니다.',
          zhCN:'J-2. Gray Target Setting\n\n各Vision(3D 1&2、2D)的Gray Target位置如图所示。3D 1&2:将3D Inspector的X Position与Pedestal的Y Position移动到图中标示的位置。2D:将2D Inspector的X Position与Indexer Y Position移动到图中标示的位置。',
          zhTW:'J-2. Gray Target Setting\n\n各Vision(3D 1&2、2D)的Gray Target位置如圖所示。3D 1&2:將3D Inspector的X Position與Pedestal的Y Position移動到圖中標示的位置。2D:將2D Inspector的X Position與Indexer Y Position移動到圖中標示的位置。',
          ja:'J-2. Gray Target Setting\n\n各Vision(3D 1&2、2D)のGray Target位置は図の通りです。3D 1&2:3D InspectorのX PositionとPedestalのY Positionを、図に示された位置へ移動します。2D:2D InspectorのX PositionとIndexer Y Positionを、図に示された位置へ移動します。'
        }},
        {img:cmImg('F','smtv',118),tx:{
          vi:'3D 1&2: dùng AF Program di chuyển Z-axis để lấy nét, sau đó lưu vị trí Z hiện tại của 3D Inspector làm Gray Target Z Auto Focus Reference Value. 2D: di chuyển Z-axis để lấy nét, sau đó lưu vị trí Z hiện tại của 2D Inspector làm Gray Target Inspect Z.',
          en:'3D 1&2: use the AF Program to move the Z-axis and focus, then save the current 3D Inspector Z position as the Gray Target Z Auto Focus Reference Value. 2D: move the Z-axis to focus, then save the current 2D Inspector Z position as the Gray Target Inspect Z.',
          ko:'3D 1&2: AF Program으로 Z-axis(Z축)를 움직여 Focus를 맞추고, 현재 3D Inspector Z Position을 Gray Target Z Auto Focus Reference Value로 저장합니다. 2D: Z-axis(Z축)를 움직여 Focus를 맞추고, 현재 2D Inspector Z Position을 Gray Target Inspect Z로 저장합니다.',
          zhCN:'3D 1&2:用AF Program移动Z-axis对焦,并将当前3D Inspector Z Position保存为Gray Target Z Auto Focus Reference Value。2D:移动Z-axis对焦,并将当前2D Inspector Z Position保存为Gray Target Inspect Z。',
          zhTW:'3D 1&2:用AF Program移動Z-axis對焦,並將目前3D Inspector Z Position儲存為Gray Target Z Auto Focus Reference Value。2D:移動Z-axis對焦,並將目前2D Inspector Z Position儲存為Gray Target Inspect Z。',
          ja:'3D 1&2:AF ProgramでZ-axis(Z軸)を動かしFocusを合わせ、現在の3D Inspector Z PositionをGray Target Z Auto Focus Reference Valueとして保存します。2D:Z-axis(Z軸)を動かしFocusを合わせ、現在の2D Inspector Z PositionをGray Target Inspect Zとして保存します。'
        }},
        {img:cmImg('F','smtv',119),tx:{
          vi:'Di chuyển vị trí X, Y của Inspector sao cho Gray Target nằm giữa màn hình Live, sau đó Teach & Save làm Gray Target Position.',
          en:'Move the Inspector\'s X, Y positions so the Gray Target is centered in the live view, then Teach & Save as the Gray Target Position.',
          ko:'Inspector의 X, Y Position을 움직여 Gray Target이 Live 화면 중심에 오도록 하고, Teach & Save 하여 Gray Target Position으로 저장합니다.',
          zhCN:'移动Inspector的X、Y Position,使Gray Target位于Live画面中心,并Teach & Save,保存为Gray Target Position。',
          zhTW:'移動Inspector的X、Y Position,使Gray Target位於Live畫面中心,並Teach & Save,儲存為Gray Target Position。',
          ja:'InspectorのX、Y Positionを動かし、Gray TargetがLive画面中心に来るようにし、Teach & SaveしてGray Target Positionとして保存します。'
        }},
        {img:cmImg('F','smtv',120),tx:{
          vi:'LTS Target Position — phần này đề cập đến Job Open, Gray Target Setting, Matrix Target Setting và Step Height Target Setting.',
          en:'LTS Target Position — this section covers Job Open, Gray Target Setting, Matrix Target Setting, and Step Height Target Setting.',
          ko:'LTS Target Position — Job Open, Gray Target Setting, Matrix Target Setting, Step Height Target Setting을 다룹니다.',
          zhCN:'LTS Target Position——本节介绍Job Open、Gray Target Setting、Matrix Target Setting、Step Height Target Setting。',
          zhTW:'LTS Target Position——本節介紹Job Open、Gray Target Setting、Matrix Target Setting、Step Height Target Setting。',
          ja:'LTS Target Position——本節ではJob Open、Gray Target Setting、Matrix Target Setting、Step Height Target Settingを扱います。'
        }},
        {img:cmImg('F','smtv',121),tx:{
          vi:'J-3. Matrix Target Setting\n\nVị trí Matrix Target của mỗi Vision (3D 1&2, 2D) như hình. 3D 1&2: di chuyển vị trí X của 3D Inspector và vị trí Y của Pedestal đến vị trí trong hình. 2D: di chuyển vị trí X của 2D Inspector và vị trí Y của Indexer đến vị trí trong hình.',
          en:'J-3. Matrix Target Setting\n\nThe Matrix Target position for each vision (3D 1&2, 2D) is shown in the figure. 3D 1&2: move the 3D Inspector\'s X position and the Pedestal\'s Y position to the position shown. 2D: move the 2D Inspector\'s X position and the Indexer Y position to the position shown.',
          ko:'J-3. Matrix Target Setting\n\n각 Vision(3D 1&2, 2D)의 Matrix Target 위치는 그림과 같습니다. 3D 1&2: 3D Inspector의 X Position과 Pedestal의 Y Position을 그림에 표시된 위치로 이동합니다. 2D: 2D Inspector의 X Position과 Indexer Y Position을 그림에 표시된 위치로 이동합니다.',
          zhCN:'J-3. Matrix Target Setting\n\n各Vision(3D 1&2、2D)的Matrix Target位置如图所示。3D 1&2:将3D Inspector的X Position与Pedestal的Y Position移动到图中标示的位置。2D:将2D Inspector的X Position与Indexer Y Position移动到图中标示的位置。',
          zhTW:'J-3. Matrix Target Setting\n\n各Vision(3D 1&2、2D)的Matrix Target位置如圖所示。3D 1&2:將3D Inspector的X Position與Pedestal的Y Position移動到圖中標示的位置。2D:將2D Inspector的X Position與Indexer Y Position移動到圖中標示的位置。',
          ja:'J-3. Matrix Target Setting\n\n各Vision(3D 1&2、2D)のMatrix Target位置は図の通りです。3D 1&2:3D InspectorのX PositionとPedestalのY Positionを、図に示された位置へ移動します。2D:2D InspectorのX PositionとIndexer Y Positionを、図に示された位置へ移動します。'
        }},
        {img:cmImg('F','smtv',122),tx:{
          vi:'3D 1&2: dùng AF Program di chuyển Z-axis để lấy nét, sau đó lưu vị trí Z hiện tại của 3D Inspector làm Matrix Target Z Auto Focus Reference Value. 2D: di chuyển Z-axis để lấy nét, sau đó lưu vị trí Z hiện tại của 2D Inspector làm Matrix Target Inspect Z.',
          en:'3D 1&2: use the AF Program to move the Z-axis and focus, then save the current 3D Inspector Z position as the Matrix Target Z Auto Focus Reference Value. 2D: move the Z-axis to focus, then save the current 2D Inspector Z position as the Matrix Target Inspect Z.',
          ko:'3D 1&2: AF Program으로 Z-axis(Z축)를 움직여 Focus를 맞추고, 현재 3D Inspector Z Position을 Matrix Target Z Auto Focus Reference Value로 저장합니다. 2D: Z-axis(Z축)를 움직여 Focus를 맞추고, 현재 2D Inspector Z Position을 Matrix Target Inspect Z로 저장합니다.',
          zhCN:'3D 1&2:用AF Program移动Z-axis对焦,并将当前3D Inspector Z Position保存为Matrix Target Z Auto Focus Reference Value。2D:移动Z-axis对焦,并将当前2D Inspector Z Position保存为Matrix Target Inspect Z。',
          zhTW:'3D 1&2:用AF Program移動Z-axis對焦,並將目前3D Inspector Z Position儲存為Matrix Target Z Auto Focus Reference Value。2D:移動Z-axis對焦,並將目前2D Inspector Z Position儲存為Matrix Target Inspect Z。',
          ja:'3D 1&2:AF ProgramでZ-axis(Z軸)を動かしFocusを合わせ、現在の3D Inspector Z PositionをMatrix Target Z Auto Focus Reference Valueとして保存します。2D:Z-axis(Z軸)を動かしFocusを合わせ、現在の2D Inspector Z PositionをMatrix Target Inspect Zとして保存します。'
        }},
        {img:cmImg('F','smtv',123),tx:{
          vi:'Di chuyển vị trí X, Y của Inspector sao cho Matrix Target nằm giữa màn hình Live, sau đó Teach & Save làm Matrix Target Position.',
          en:'Move the Inspector\'s X, Y positions so the Matrix Target is centered in the live view, then Teach & Save as the Matrix Target Position.',
          ko:'Inspector의 X, Y Position을 움직여 Matrix Target이 Live 화면 중심에 오도록 하고, Teach & Save 하여 Matrix Target Position으로 저장합니다.',
          zhCN:'移动Inspector的X、Y Position,使Matrix Target位于Live画面中心,并Teach & Save,保存为Matrix Target Position。',
          zhTW:'移動Inspector的X、Y Position,使Matrix Target位於Live畫面中心,並Teach & Save,儲存為Matrix Target Position。',
          ja:'InspectorのX、Y Positionを動かし、Matrix TargetがLive画面中心に来るようにし、Teach & SaveしてMatrix Target Positionとして保存します。'
        }},
        {img:cmImg('F','smtv',124),tx:{
          vi:'LTS Target Position — phần này đề cập đến Job Open, Gray Target Setting, Matrix Target Setting và Step Height Target Setting.',
          en:'LTS Target Position — this section covers Job Open, Gray Target Setting, Matrix Target Setting, and Step Height Target Setting.',
          ko:'LTS Target Position — Job Open, Gray Target Setting, Matrix Target Setting, Step Height Target Setting을 다룹니다.',
          zhCN:'LTS Target Position——本节介绍Job Open、Gray Target Setting、Matrix Target Setting、Step Height Target Setting。',
          zhTW:'LTS Target Position——本節介紹Job Open、Gray Target Setting、Matrix Target Setting、Step Height Target Setting。',
          ja:'LTS Target Position——本節ではJob Open、Gray Target Setting、Matrix Target Setting、Step Height Target Settingを扱います。'
        }},
        {img:cmImg('F','smtv',125),tx:{
          vi:'J-4. Step Height Target Setting (chỉ dành cho 3D 1&2)\n\nVị trí Step Height Target của mỗi Vision 3D (3D 1&2) như hình. Di chuyển vị trí X của 3D Inspector và vị trí Y của Pedestal đến vị trí trong hình.',
          en:'J-4. Step Height Target Setting (3D 1&2 only)\n\nThe Step Height Target position of each 3D vision (3D 1&2) is shown in the figure. Move the 3D Inspector\'s X position and the Pedestal\'s Y position to the position shown.',
          ko:'J-4. Step Height Target Setting (3D 1&2 전용)\n\n각 3D Vision(3D 1&2)의 Step Height Target 위치는 그림과 같습니다. 3D Inspector의 X Position과 Pedestal의 Y Position을 그림에 표시된 위치로 이동합니다.',
          zhCN:'J-4. Step Height Target Setting(仅限3D 1&2)\n\n各3D Vision(3D 1&2)的Step Height Target位置如图所示。将3D Inspector的X Position与Pedestal的Y Position移动到图中标示的位置。',
          zhTW:'J-4. Step Height Target Setting(僅限3D 1&2)\n\n各3D Vision(3D 1&2)的Step Height Target位置如圖所示。將3D Inspector的X Position與Pedestal的Y Position移動到圖中標示的位置。',
          ja:'J-4. Step Height Target Setting(3D 1&2専用)\n\n各3D Vision(3D 1&2)のStep Height Target位置は図の通りです。3D InspectorのX PositionとPedestalのY Positionを、図に示された位置へ移動します。'
        }},
        {img:cmImg('F','smtv',126),tx:{
          vi:'3D 1&2: dùng AF Program di chuyển Z-axis để lấy nét, sau đó lưu vị trí Z hiện tại của 3D Inspector làm Step Height Target Z Auto Focus Reference Value.',
          en:'3D 1&2: use the AF Program to move the Z-axis and focus, then save the current 3D Inspector Z position as the Step Height Target Z Auto Focus Reference Value.',
          ko:'3D 1&2: AF Program으로 Z-axis(Z축)를 움직여 Focus를 맞추고, 현재 3D Inspector Z Position을 Step Height Target Z Auto Focus Reference Value로 저장합니다.',
          zhCN:'3D 1&2:用AF Program移动Z-axis对焦,并将当前3D Inspector Z Position保存为Step Height Target Z Auto Focus Reference Value。',
          zhTW:'3D 1&2:用AF Program移動Z-axis對焦,並將目前3D Inspector Z Position儲存為Step Height Target Z Auto Focus Reference Value。',
          ja:'3D 1&2:AF ProgramでZ-axis(Z軸)を動かしFocusを合わせ、現在の3D Inspector Z PositionをStep Height Target Z Auto Focus Reference Valueとして保存します。'
        }},
        {img:cmImg('F','smtv',127),tx:{
          vi:'Di chuyển vị trí X, Y của Inspector sao cho Step Height Target nằm giữa màn hình Live, sau đó Teach & Save.',
          en:'Move the Inspector\'s X, Y positions so the Step Height Target is centered in the live view, then Teach & Save.',
          ko:'Inspector의 X, Y Position을 움직여 Step Height Target이 Live 화면 중심에 오도록 한 뒤, Teach & Save 합니다.',
          zhCN:'移动Inspector的X、Y Position,使Step Height Target位于Live画面中心,然后Teach & Save。',
          zhTW:'移動Inspector的X、Y Position,使Step Height Target位於Live畫面中心,然後Teach & Save。',
          ja:'InspectorのX、Y Positionを動かし、Step Height TargetがLive画面中心に来るようにした後、Teach & Saveします。'
        }}
      ]
    },
    nbga:{
      title:{ko:'G. Handler Teaching',en:'G. Handler Teaching',zhCN:'G. Handler Teaching',zhTW:'G. Handler Teaching',ja:'G. Handler Teaching'},
      chapters:[
        {from:1,title:{ko:'A. Elevator',en:'A. Elevator',zhCN:'A. Elevator',zhTW:'A. Elevator',ja:'A. Elevator'}},
        {from:29,title:{ko:'B. Tray Sorter Module',en:'B. Tray Sorter Module',zhCN:'B. Tray Sorter Module',zhTW:'B. Tray Sorter Module',ja:'B. Tray Sorter Module'}},
        {from:65,title:{ko:'C. Tray Transfer Module',en:'C. Tray Transfer Module',zhCN:'C. Tray Transfer Module',zhTW:'C. Tray Transfer Module',ja:'C. Tray Transfer Module'}},
        {from:76,title:{ko:'D. Multi Sorter',en:'D. Multi Sorter',zhCN:'D. Multi Sorter',zhTW:'D. Multi Sorter',ja:'D. Multi Sorter'}},
        {from:84,title:{ko:'E. 3D Inspector',en:'E. 3D Inspector',zhCN:'E. 3D Inspector',zhTW:'E. 3D Inspector',ja:'E. 3D Inspector'}},
        {from:107,title:{ko:'F. 2D Inspector',en:'F. 2D Inspector',zhCN:'F. 2D Inspector',zhTW:'F. 2D Inspector',ja:'F. 2D Inspector'}},
        {from:117,title:{ko:'LTS Target Position',en:'LTS Target Position',zhCN:'LTS Target Position',zhTW:'LTS Target Position',ja:'LTS Target Position'}}
      ],
      slides:[
        {img:cmImg('F','nbga',1),tx:{
          vi:'Chương này giới thiệu Handler Teaching — quy trình Teaching vị trí cho Elevator, Tray Sorter Module (TSM), Tray Transfer Module (TTM), Multi Sorter, 3D Inspector và 2D Inspector.',
          en:'This chapter covers Handler Teaching — the position-teaching sequence for the Elevator, Tray Sorter Module (TSM), Tray Transfer Module (TTM), Multi Sorter, 3D Inspector, and 2D Inspector.',
          ko:'본 챕터에서는 Handler Teaching — Elevator, Tray Sorter Module(TSM), Tray Transfer Module(TTM), Multi Sorter, 3D Inspector, 2D Inspector의 Position Teaching 절차를 다룹니다.',
          zhCN:'本章介绍Handler Teaching——Elevator、Tray Sorter Module(TSM)、Tray Transfer Module(TTM)、Multi Sorter、3D Inspector、2D Inspector的Position Teaching流程。',
          zhTW:'本章介紹Handler Teaching——Elevator、Tray Sorter Module(TSM)、Tray Transfer Module(TTM)、Multi Sorter、3D Inspector、2D Inspector的Position Teaching流程。',
          ja:'本章ではHandler Teaching——Elevator、Tray Sorter Module(TSM)、Tray Transfer Module(TTM)、Multi Sorter、3D Inspector、2D InspectorのPosition Teaching手順を扱います。'
        }},
        {img:cmImg('F','nbga',2),tx:{
          vi:'A. Elevator — phần này đề cập đến Elevator Z Up Position, Elevator Z One Position, Elevator Z Wait Position và Indexer Y Front Position.',
          en:'A. Elevator — this section covers the Elevator Z Up Position, Elevator Z One Position, Elevator Z Wait Position, and Indexer Y Front Position.',
          ko:'A. Elevator — Elevator Z Up Position, Elevator Z One Position, Elevator Z Wait Position, Indexer Y Front Position을 다룹니다.',
          zhCN:'A. Elevator——本节介绍Elevator Z Up Position、Elevator Z One Position、Elevator Z Wait Position、Indexer Y Front Position。',
          zhTW:'A. Elevator——本節介紹Elevator Z Up Position、Elevator Z One Position、Elevator Z Wait Position、Indexer Y Front Position。',
          ja:'A. Elevator——本節ではElevator Z Up Position、Elevator Z One Position、Elevator Z Wait Position、Indexer Y Front Positionを扱います。'
        }},
        {img:cmImg('F','nbga',3),tx:{
          vi:'F-1. Elevator — Up Position\n\nUp Position là độ cao của Elevator khi nâng Tray lên. Đặt một Tray lên Stacker như hình, sau đó Teaching Up Position cho Load, Empty và Good Elevator theo cùng cách.',
          en:'F-1. Elevator — Up Position\n\nThe Up Position is the elevator height reached when lifting the tray. Place a tray on the stacker as shown, then teach the Up Position for the Load, Empty, and Good Elevators the same way.',
          ko:'F-1. Elevator — Up Position\n\nUp Position은 Tray를 들어올리는 Elevator의 높이입니다. 그림과 같이 Stacker에 Tray를 올린 뒤, Load·Empty·Good Elevator의 Up Position을 동일한 방식으로 Teaching합니다.',
          zhCN:'F-1. Elevator — Up Position\n\nUp Position是抬起Tray时Elevator到达的高度。如图所示将Tray放在Stacker上,然后以相同方式对Load、Empty、Good Elevator进行Up Position的Teaching。',
          zhTW:'F-1. Elevator — Up Position\n\nUp Position是抬起Tray時Elevator到達的高度。如圖所示將Tray放在Stacker上,然後以相同方式對Load、Empty、Good Elevator進行Up Position的Teaching。',
          ja:'F-1. Elevator — Up Position\n\nUp PositionはTrayを持ち上げる際のElevatorの高さです。図のようにStacker上にTrayを置き、Load・Empty・Good ElevatorのUp Positionを同じ方法でTeachingします。'
        }},
        {img:cmImg('F','nbga',4),tx:{
          vi:'Host P/G ▸ Handler ▸ Map ▸ chọn Elevator. Di chuyển vị trí Z của Elevator sao cho khoảng cách giữa Stacker và Tray là 2mm, như hình. (Stacker loại Spring cũng Teaching theo cách tương tự.)',
          en:'Host P/G ▸ Handler ▸ Map ▸ select Elevator. Move the Elevator Z position so the gap between the Stacker and Tray becomes 2mm, as shown. (Spring-type Stackers are taught the same way.)',
          ko:'Host P/G ▸ Handler ▸ Map ▸ Elevator 선택. 그림처럼 Stacker와 Tray 사이 간격이 2mm가 되도록 Elevator Z Position을 이동합니다. (Spring 타입 Stacker도 동일한 방식으로 Teaching)',
          zhCN:'Host P/G ▸ Handler ▸ Map ▸ 选择Elevator。如图移动Elevator Z Position,使Stacker与Tray之间的间隙为2mm。(Spring类型的Stacker也以相同方式进行Teaching)',
          zhTW:'Host P/G ▸ Handler ▸ Map ▸ 選擇Elevator。如圖移動Elevator Z Position,使Stacker與Tray之間的間隙為2mm。(Spring類型的Stacker也以相同方式進行Teaching)',
          ja:'Host P/G ▸ Handler ▸ Map ▸ Elevatorを選択。図のようにStackerとTrayの間隔が2mmになるようElevator Z Positionを移動します。(SpringタイプのStackerも同じ方法でTeaching)'
        }},
        {img:cmImg('F','nbga',5),tx:{
          vi:'Teach và Save vị trí hiện tại làm Up Position.',
          en:'Teach and save the current position as the Up Position.',
          ko:'현재 위치를 Teach & Save하여 Up Position으로 저장합니다.',
          zhCN:'将当前位置Teach & Save,保存为Up Position。',
          zhTW:'將目前位置Teach & Save,儲存為Up Position。',
          ja:'現在の位置をTeach & SaveしてUp Positionとして保存します。'
        }},
        {img:cmImg('F','nbga',6),tx:{
          vi:'Với Elevator loại Air Cylinder (Buffer, Reject1, Reject2), di chuyển vị trí Z theo cách tương tự sao cho khoảng cách Stacker-Tray là 2mm, và xác nhận Tray không bị vướng vào Stacker khi nâng lên.',
          en:'For an Air Cylinder-type elevator (Buffer, Reject1, Reject2), move the Z position the same way so the Stacker-Tray gap is 2mm, and confirm the tray does not catch on the stacker while rising.',
          ko:'Air Cylinder 타입 Elevator(Buffer, Reject1, Reject2)의 경우도 동일하게 Stacker-Tray 간격이 2mm가 되도록 Z Position을 이동하고, 상승 동작 중 Tray가 Stacker에 걸리지 않는지 확인합니다.',
          zhCN:'对于Air Cylinder类型的Elevator(Buffer、Reject1、Reject2),同样移动Z Position使Stacker与Tray间隙为2mm,并确认上升过程中Tray不会卡在Stacker上。',
          zhTW:'對於Air Cylinder類型的Elevator(Buffer、Reject1、Reject2),同樣移動Z Position使Stacker與Tray間隙為2mm,並確認上升過程中Tray不會卡在Stacker上。',
          ja:'Air CylinderタイプのElevator(Buffer、Reject1、Reject2)も同様にStacker-Trayの間隔が2mmになるようZ Positionを移動し、上昇動作中にTrayがStackerに引っかからないか確認します。'
        }},
        {img:cmImg('F','nbga',7),tx:{
          vi:'Teach và Save vị trí hiện tại làm Up Position cho loại Elevator này.',
          en:'Teach and save the current position as the Up Position for this elevator type as well.',
          ko:'이 Elevator 타입도 현재 위치를 Teach & Save하여 Up Position으로 저장합니다.',
          zhCN:'该类型的Elevator同样将当前位置Teach & Save,保存为Up Position。',
          zhTW:'該類型的Elevator同樣將目前位置Teach & Save,儲存為Up Position。',
          ja:'このタイプのElevatorも現在の位置をTeach & SaveしてUp Positionとして保存します。'
        }},
        {img:cmImg('F','nbga',8),tx:{
          vi:'Ảnh tham khảo — Elevator Z Up Position đúng cho Stacker thường và Stacker loại Spring.',
          en:'Reference images — correct Elevator Z Up Position for a standard Stacker and for a Spring-type Stacker.',
          ko:'참고 이미지 — 일반 Stacker와 Spring 타입 Stacker의 Elevator Z Up Position 예시.',
          zhCN:'参考图片——一般Stacker与Spring类型Stacker的Elevator Z Up Position示例。',
          zhTW:'參考圖片——一般Stacker與Spring類型Stacker的Elevator Z Up Position範例。',
          ja:'参考画像 — 一般StackerとSpringタイプStackerのElevator Z Up Position例。'
        }},
        {img:cmImg('F','nbga',9),tx:{
          vi:'A. Elevator (tiếp theo) — Elevator Z Up Position, Elevator Z One Position, Elevator Z Wait Position, Indexer Y Front Position.',
          en:'A. Elevator (continued) — Elevator Z Up Position, Elevator Z One Position, Elevator Z Wait Position, Indexer Y Front Position.',
          ko:'A. Elevator (계속) — Elevator Z Up Position, Elevator Z One Position, Elevator Z Wait Position, Indexer Y Front Position.',
          zhCN:'A. Elevator(续)——Elevator Z Up Position、Elevator Z One Position、Elevator Z Wait Position、Indexer Y Front Position。',
          zhTW:'A. Elevator(續)——Elevator Z Up Position、Elevator Z One Position、Elevator Z Wait Position、Indexer Y Front Position。',
          ja:'A. Elevator(続き)——Elevator Z Up Position、Elevator Z One Position、Elevator Z Wait Position、Indexer Y Front Position。'
        }},
        {img:cmImg('F','nbga',10),tx:{
          vi:'F-2. Elevator — One Position\n\nOne Position là độ cao Elevator tách các Tray ở phía dưới. Đặt hai Tray lên Stacker như hình, sau đó Teaching One Position cho Load và Empty Elevator.',
          en:'F-2. Elevator — One Position\n\nThe One Position is the elevator height that separates the trays at the bottom. Place two trays on the stacker as shown, then teach the One Position for the Load and Empty Elevators.',
          ko:'F-2. Elevator — One Position\n\nOne Position은 하단에서 Tray를 한 장씩 분리하는 Elevator 높이입니다. 그림처럼 Stacker에 Tray 두 장을 올린 뒤 Load·Empty Elevator의 One Position을 Teaching합니다.',
          zhCN:'F-2. Elevator — One Position\n\nOne Position是在底部将Tray逐张分离的Elevator高度。如图在Stacker上放置两张Tray,然后对Load、Empty Elevator进行One Position的Teaching。',
          zhTW:'F-2. Elevator — One Position\n\nOne Position是在底部將Tray逐張分離的Elevator高度。如圖在Stacker上放置兩張Tray,然後對Load、Empty Elevator進行One Position的Teaching。',
          ja:'F-2. Elevator — One Position\n\nOne Positionは下部でTrayを1枚ずつ分離するElevatorの高さです。図のようにStackerにTrayを2枚置き、Load・Empty ElevatorのOne PositionをTeachingします。'
        }},
        {img:cmImg('F','nbga',11),tx:{
          vi:'Host P/G ▸ Handler ▸ Map ▸ chọn Elevator, di chuyển đến Up Position, sau đó Unclamp Stacker.',
          en:'Host P/G ▸ Handler ▸ Map ▸ select Elevator, move to the Up Position, then unclamp the stacker.',
          ko:'Host P/G ▸ Handler ▸ Map ▸ Elevator 선택 후 Up Position으로 이동하고 Stacker를 Unclamp합니다.',
          zhCN:'Host P/G ▸ Handler ▸ Map ▸ 选择Elevator,移动到Up Position后将Stacker Unclamp。',
          zhTW:'Host P/G ▸ Handler ▸ Map ▸ 選擇Elevator,移動到Up Position後將Stacker Unclamp。',
          ja:'Host P/G ▸ Handler ▸ Map ▸ Elevatorを選択し、Up Positionへ移動してStackerをUnclampします。'
        }},
        {img:cmImg('F','nbga',12),tx:{
          vi:'Hạ vị trí Z để Stacker nằm giữa hai Tray.',
          en:'Lower the Z position so the stacker sits between the two trays.',
          ko:'Stacker가 두 Tray 사이에 위치하도록 Z Position을 내립니다.',
          zhCN:'降低Z Position,使Stacker位于两张Tray之间。',
          zhTW:'降低Z Position,使Stacker位於兩張Tray之間。',
          ja:'StackerがTrayとTrayの間に位置するようZ Positionを下げます。'
        }},
        {img:cmImg('F','nbga',13),tx:{
          vi:'Đẩy Stacker vào như hình để nó nằm giữa hai Tray, sau đó Clamp lại — đảm bảo mọi Stacker đều nằm giữa các Tray.',
          en:'Push the stacker in as shown so it sits between the trays, then clamp it — make sure all stackers are positioned between the trays.',
          ko:'그림처럼 Stacker를 밀어 넣어 Tray 사이에 위치시키고 Clamp합니다 — 모든 Stacker가 Tray 사이에 위치했는지 확인합니다.',
          zhCN:'如图将Stacker推入,使其位于Tray之间并进行Clamp——确认所有Stacker都位于Tray之间。',
          zhTW:'如圖將Stacker推入,使其位於Tray之間並進行Clamp——確認所有Stacker都位於Tray之間。',
          ja:'図のようにStackerを押し込みTrayの間に位置させてClampします——すべてのStackerがTrayの間に位置しているか確認します。'
        }},
        {img:cmImg('F','nbga',14),tx:{
          vi:'Teach và Save vị trí Z hiện tại làm One Position.',
          en:'Teach and save the current Z position as the One Position.',
          ko:'현재 Z Position을 Teach & Save하여 One Position으로 저장합니다.',
          zhCN:'将当前Z Position进行Teach & Save,保存为One Position。',
          zhTW:'將目前Z Position進行Teach & Save,儲存為One Position。',
          ja:'現在のZ PositionをTeach & SaveしてOne Positionとして保存します。'
        }},
        {img:cmImg('F','nbga',15),tx:{
          vi:'GOOD: Stacker nằm giữa các Tray không va chạm. BAD: Stacker va chạm với Tray.',
          en:'GOOD: the stacker sits between the trays without interference. BAD: the stacker interferes with a tray.',
          ko:'GOOD: Stacker가 Tray와 Tray 사이에 위치하여 간섭이 없는 상태. BAD: Stacker가 Tray와 간섭하는 상태.',
          zhCN:'GOOD:Stacker位于Tray与Tray之间,无干涉。BAD:Stacker与Tray发生干涉。',
          zhTW:'GOOD:Stacker位於Tray與Tray之間,無干涉。BAD:Stacker與Tray發生干涉。',
          ja:'GOOD:StackerがTrayとTrayの間に位置し干渉がない状態。BAD:StackerがTrayと干渉している状態。'
        }},
        {img:cmImg('F','nbga',16),tx:{
          vi:'A. Elevator (tiếp theo) — Elevator Z Up Position, Elevator Z One Position, Elevator Z Wait Position, Indexer Y Front Position.',
          en:'A. Elevator (continued) — Elevator Z Up Position, Elevator Z One Position, Elevator Z Wait Position, Indexer Y Front Position.',
          ko:'A. Elevator (계속) — Elevator Z Up Position, Elevator Z One Position, Elevator Z Wait Position, Indexer Y Front Position.',
          zhCN:'A. Elevator(续)——Elevator Z Up Position、Elevator Z One Position、Elevator Z Wait Position、Indexer Y Front Position。',
          zhTW:'A. Elevator(續)——Elevator Z Up Position、Elevator Z One Position、Elevator Z Wait Position、Indexer Y Front Position。',
          ja:'A. Elevator(続き)——Elevator Z Up Position、Elevator Z One Position、Elevator Z Wait Position、Indexer Y Front Position。'
        }},
        {img:cmImg('F','nbga',17),tx:{
          vi:'F-3. Elevator — Wait Position\n\nWait Position là nơi Tray đã tách được đặt lên Rail. Teaching Wait Position cho Load, Empty và Good Elevator theo cùng cách.',
          en:'F-3. Elevator — Wait Position\n\nThe Wait Position is where a separated tray is placed on the rail. Teach the Wait Position for the Load, Empty, and Good Elevators the same way.',
          ko:'F-3. Elevator — Wait Position\n\nWait Position은 분리된 Tray가 Rail 위에 놓이는 위치입니다. Load·Empty·Good Elevator의 Wait Position을 동일한 방식으로 Teaching합니다.',
          zhCN:'F-3. Elevator — Wait Position\n\nWait Position是分离后的Tray放置在Rail上的位置。以相同方式对Load、Empty、Good Elevator进行Wait Position的Teaching。',
          zhTW:'F-3. Elevator — Wait Position\n\nWait Position是分離後的Tray放置在Rail上的位置。以相同方式對Load、Empty、Good Elevator進行Wait Position的Teaching。',
          ja:'F-3. Elevator — Wait Position\n\nWait Positionは分離されたTrayがRail上に置かれる位置です。Load・Empty・Good ElevatorのWait Positionを同じ方法でTeachingします。'
        }},
        {img:cmImg('F','nbga',18),tx:{
          vi:'Host P/G ▸ Handler ▸ Map ▸ chọn Elevator ▸ Wait Position. Nhấn Home để khởi tạo vị trí Z, sau đó Teach và Save vị trí Z hiện tại (0mm).',
          en:'Host P/G ▸ Handler ▸ Map ▸ select Elevator ▸ Wait Position. Click Home to initialize the Z position, then teach and save the current Z position (0mm).',
          ko:'Host P/G ▸ Handler ▸ Map ▸ Elevator ▸ Wait Position 선택. Home을 클릭해 Z Position을 초기화한 뒤, 현재 Z Position(0mm)을 Teach & Save합니다.',
          zhCN:'Host P/G ▸ Handler ▸ Map ▸ 选择Elevator ▸ Wait Position。点击Home将Z Position初始化,然后将当前Z Position(0mm)进行Teach & Save。',
          zhTW:'Host P/G ▸ Handler ▸ Map ▸ 選擇Elevator ▸ Wait Position。點擊Home將Z Position初始化,然後將目前Z Position(0mm)進行Teach & Save。',
          ja:'Host P/G ▸ Handler ▸ Map ▸ Elevator ▸ Wait Positionを選択。Homeをクリックして Z Positionを初期化し、現在のZ Position(0mm)をTeach & Saveします。'
        }},
        {img:cmImg('F','nbga',19),tx:{
          vi:'Lưu ý: nếu vị trí Home quá cao, Elevator có thể va chạm khi Tray di chuyển. Với Elevator dạng Motor, hiệu chỉnh vị trí Sensor/vật thể; với Elevator dạng Air, điều chỉnh vị trí Sensor từ.',
          en:'Caution: if the Home position is too high, the Elevator may collide when the tray moves. For a motor-driven elevator, correct the sensor/object positions; for an air elevator, adjust the magnetic sensor position.',
          ko:'주의: Home Position이 너무 높으면 Tray 이동 시 Elevator와 충돌할 수 있습니다. Motor 방식은 Sensor와 Object 위치를 보정하고, Air 방식 Elevator는 Magnetic Sensor 위치를 조정합니다.',
          zhCN:'注意:若Home Position过高,Tray移动时可能与Elevator发生碰撞。Motor方式需校正Sensor与Object位置;Air方式的Elevator需调整Magnetic Sensor位置。',
          zhTW:'注意:若Home Position過高,Tray移動時可能與Elevator發生碰撞。Motor方式需校正Sensor與Object位置;Air方式的Elevator需調整Magnetic Sensor位置。',
          ja:'注意:Home Positionが高すぎると、Tray移動時にElevatorと衝突する恐れがあります。Motor方式はSensorとObjectの位置を補正し、Air方式のElevatorはMagnetic Sensorの位置を調整します。'
        }},
        {img:cmImg('F','nbga',20),tx:{
          vi:'Ảnh tham khảo — vị trí Home & Wait của Elevator, nhìn từ trên và nhìn từ trái.',
          en:'Reference images — Elevator Home & Wait position, top view and left view.',
          ko:'참고 이미지 — Elevator Home & Wait Position의 상면도·좌측면도.',
          zhCN:'参考图片——Elevator Home & Wait Position的俯视图与左视图。',
          zhTW:'參考圖片——Elevator Home & Wait Position的俯視圖與左視圖。',
          ja:'参考画像 — Elevator Home & Wait Positionの上面図・左側面図。'
        }},
        {img:cmImg('F','nbga',21),tx:{
          vi:'A. Elevator (tiếp theo) — Elevator Z Up Position, Elevator Z One Position, Elevator Z Wait Position, Indexer Y Front Position.',
          en:'A. Elevator (continued) — Elevator Z Up Position, Elevator Z One Position, Elevator Z Wait Position, Indexer Y Front Position.',
          ko:'A. Elevator (계속) — Elevator Z Up Position, Elevator Z One Position, Elevator Z Wait Position, Indexer Y Front Position.',
          zhCN:'A. Elevator(续)——Elevator Z Up Position、Elevator Z One Position、Elevator Z Wait Position、Indexer Y Front Position。',
          zhTW:'A. Elevator(續)——Elevator Z Up Position、Elevator Z One Position、Elevator Z Wait Position、Indexer Y Front Position。',
          ja:'A. Elevator(続き)——Elevator Z Up Position、Elevator Z One Position、Elevator Z Wait Position、Indexer Y Front Position。'
        }},
        {img:cmImg('F','nbga',22),tx:{
          vi:'F-4. Elevator — Indexer Y Front Position\n\nFront Position là nơi Indexer Load hoặc Unload Tray. Đặt Tray lên Rail như hình.',
          en:'F-4. Elevator — Indexer Y Front Position\n\nThe Front Position is where the Indexer loads or unloads the tray. Place a tray on the rail as shown.',
          ko:'F-4. Elevator — Indexer Y Front Position\n\nFront Position은 Indexer가 Tray를 Load·Unload하는 위치입니다. 그림처럼 Rail 위에 Tray를 올립니다.',
          zhCN:'F-4. Elevator — Indexer Y Front Position\n\nFront Position是Indexer装载·卸载Tray的位置。如图将Tray放在Rail上。',
          zhTW:'F-4. Elevator — Indexer Y Front Position\n\nFront Position是Indexer裝載·卸載Tray的位置。如圖將Tray放在Rail上。',
          ja:'F-4. Elevator — Indexer Y Front Position\n\nFront PositionはIndexerがTrayをLoad・Unloadする位置です。図のようにRail上にTrayを置きます。'
        }},
        {img:cmImg('F','nbga',23),tx:{
          vi:'Host P/G ▸ Handler ▸ Map ▸ chọn Indexer, bật B/W Clamp và F/W Clamp để cố định Tray. (F/W Clamp = Forward Finger Clamp, B/W Clamp = Backward Finger Clamp)',
          en:'Host P/G ▸ Handler ▸ Map ▸ select Indexer, turn on the B/W Clamp and F/W Clamp to fasten the tray. (F/W Clamp = Forward Finger Clamp, B/W Clamp = Backward Finger Clamp)',
          ko:'Host P/G ▸ Handler ▸ Map ▸ Indexer 선택 후 B/W Clamp와 F/W Clamp를 켜서 Tray를 고정합니다. (F/W Clamp = Forward Finger Clamp, B/W Clamp = Backward Finger Clamp)',
          zhCN:'Host P/G ▸ Handler ▸ Map ▸ 选择Indexer,开启B/W Clamp与F/W Clamp以固定Tray。(F/W Clamp = Forward Finger Clamp,B/W Clamp = Backward Finger Clamp)',
          zhTW:'Host P/G ▸ Handler ▸ Map ▸ 選擇Indexer,開啟B/W Clamp與F/W Clamp以固定Tray。(F/W Clamp = Forward Finger Clamp,B/W Clamp = Backward Finger Clamp)',
          ja:'Host P/G ▸ Handler ▸ Map ▸ Indexerを選択し、B/W ClampとF/W ClampをONにしてTrayを固定します。(F/W Clamp = Forward Finger Clamp、B/W Clamp = Backward Finger Clamp)'
        }},
        {img:cmImg('F','nbga',24),tx:{
          vi:'Di chuyển Indexer sao cho Tray khớp với Tray Guide như hình, sau đó Unclamp theo thứ tự: F/W Clamp rồi đến B/W Clamp.',
          en:'Move the Indexer so the tray aligns with the Tray Guide as shown, then unclamp in the order: F/W Clamp, then B/W Clamp.',
          ko:'그림처럼 Tray가 Tray Guide에 맞도록 Indexer를 이동시킨 뒤, F/W Clamp → B/W Clamp 순서로 Unclamp합니다.',
          zhCN:'如图移动Indexer,使Tray与Tray Guide对齐,然后按F/W Clamp、B/W Clamp的顺序进行Unclamp。',
          zhTW:'如圖移動Indexer,使Tray與Tray Guide對齊,然後按F/W Clamp、B/W Clamp的順序進行Unclamp。',
          ja:'図のようにTrayがTray Guideに合うようIndexerを移動させ、F/W Clamp → B/W Clampの順にUnclampします。'
        }},
        {img:cmImg('F','nbga',25),tx:{
          vi:'Unclamp Elevator Stacker, sau đó di chuyển Elevator đến Up Position để xác nhận Tray nâng lên không va chạm. (Lưu ý: chú ý tránh làm hỏng Tray do Stacker khi Elevator nâng lên.)',
          en:'Unclamp the elevator stacker, then move the Elevator to the Up Position to confirm the tray rises without interference. (Caution: watch for tray damage from the stacker while the elevator rises.)',
          ko:'Elevator Stacker를 Unclamp한 뒤 Elevator를 Up Position으로 이동시켜 Tray가 간섭 없이 상승하는지 확인합니다. (주의: 상승 중 Stacker에 의한 Tray 손상에 유의)',
          zhCN:'将Elevator Stacker进行Unclamp,然后将Elevator移动到Up Position,确认Tray上升过程中无干涉。(注意:上升过程中留意Stacker造成的Tray损伤)',
          zhTW:'將Elevator Stacker進行Unclamp,然後將Elevator移動到Up Position,確認Tray上升過程中無干涉。(注意:上升過程中留意Stacker造成的Tray損傷)',
          ja:'Elevator StackerをUnclampした後、ElevatorをUp Positionへ移動させ、Trayが干渉なく上昇するか確認します。(注意:上昇中のStackerによるTray損傷に注意)'
        }},
        {img:cmImg('F','nbga',26),tx:{
          vi:'Teach và Save vị trí Indexer hiện tại làm Front Tray Position. Teaching Front Tray Position cho mọi Indexer theo cùng cách.',
          en:'Teach and save the current Indexer position as the Front Tray Position. Teach every Indexer\'s Front Tray Position the same way.',
          ko:'현재 Indexer 위치를 Teach & Save하여 Front Tray Position으로 저장합니다. 모든 Indexer의 Front Tray Position을 동일한 방식으로 Teaching합니다.',
          zhCN:'将当前Indexer位置进行Teach & Save,保存为Front Tray Position。以相同方式对所有Indexer进行Front Tray Position的Teaching。',
          zhTW:'將目前Indexer位置進行Teach & Save,儲存為Front Tray Position。以相同方式對所有Indexer進行Front Tray Position的Teaching。',
          ja:'現在のIndexer位置をTeach & SaveしてFront Tray Positionとして保存します。すべてのIndexerのFront Tray Positionを同じ方法でTeachingします。'
        }},
        {img:cmImg('F','nbga',27),tx:{
          vi:'Ảnh tham khảo GOOD / BAD cho Front Position.',
          en:'GOOD / BAD reference images for the Front Position.',
          ko:'Front Position의 GOOD/BAD 참고 이미지.',
          zhCN:'Front Position的GOOD/BAD参考图片。',
          zhTW:'Front Position的GOOD/BAD參考圖片。',
          ja:'Front PositionのGOOD/BAD参考画像。'
        }},
        {img:cmImg('F','nbga',28),tx:{
          vi:'Tiếp theo: B. Tray Sorter Module (TSM) — TSM X/Z Loader Pick/Place, Indexer Y Tray Sorting, TSM X/Z Jig Left Place, TSM X/Z Jig Right Pick.',
          en:'Next: B. Tray Sorter Module (TSM) — TSM X/Z Loader Pick/Place, Indexer Y Tray Sorting, TSM X/Z Jig Left Place, TSM X/Z Jig Right Pick.',
          ko:'다음: B. Tray Sorter Module(TSM) — TSM X/Z Loader Pick/Place, Indexer Y Tray Sorting, TSM X/Z Jig Left Place, TSM X/Z Jig Right Pick.',
          zhCN:'接下来:B. Tray Sorter Module(TSM)——TSM X/Z Loader Pick/Place、Indexer Y Tray Sorting、TSM X/Z Jig Left Place、TSM X/Z Jig Right Pick。',
          zhTW:'接下來:B. Tray Sorter Module(TSM)——TSM X/Z Loader Pick/Place、Indexer Y Tray Sorting、TSM X/Z Jig Left Place、TSM X/Z Jig Right Pick。',
          ja:'次へ:B. Tray Sorter Module(TSM)——TSM X/Z Loader Pick/Place、Indexer Y Tray Sorting、TSM X/Z Jig Left Place、TSM X/Z Jig Right Pick。'
        }},
        {img:cmImg('F','nbga',29),tx:{
          vi:'B. Tray Sorter Module — TSM X/Z Loader Pick/Place, Indexer Y Tray Sorting, TSM X/Z Jig Left Place, TSM X/Z Jig Right Pick.',
          en:'B. Tray Sorter Module — TSM X/Z Loader Pick/Place, Indexer Y Tray Sorting, TSM X/Z Jig Left Place, TSM X/Z Jig Right Pick.',
          ko:'B. Tray Sorter Module — TSM X/Z Loader Pick/Place, Indexer Y Tray Sorting, TSM X/Z Jig Left Place, TSM X/Z Jig Right Pick.',
          zhCN:'B. Tray Sorter Module——TSM X/Z Loader Pick/Place、Indexer Y Tray Sorting、TSM X/Z Jig Left Place、TSM X/Z Jig Right Pick。',
          zhTW:'B. Tray Sorter Module——TSM X/Z Loader Pick/Place、Indexer Y Tray Sorting、TSM X/Z Jig Left Place、TSM X/Z Jig Right Pick。',
          ja:'B. Tray Sorter Module——TSM X/Z Loader Pick/Place、Indexer Y Tray Sorting、TSM X/Z Jig Left Place、TSM X/Z Jig Right Pick。'
        }},
        {img:cmImg('F','nbga',30),tx:{
          vi:'F-5. Tray Sorter Module — TSM X, Z Loader Pick/Place\n\nLoader Pick_Place Position là nơi TSM Pick hoặc Place Tray trên Load Rail, như hình.',
          en:'F-5. Tray Sorter Module — TSM X, Z Loader Pick/Place\n\nThe Loader Pick_Place Position is where the TSM picks or places a tray on the Load Rail, as shown.',
          ko:'F-5. Tray Sorter Module — TSM X, Z Loader Pick/Place\n\nLoader Pick_Place Position은 그림처럼 TSM이 Load Rail에서 Tray를 Pick·Place하는 위치입니다.',
          zhCN:'F-5. Tray Sorter Module — TSM X, Z Loader Pick/Place\n\nLoader Pick_Place Position是如图所示TSM在Load Rail上Pick·Place Tray的位置。',
          zhTW:'F-5. Tray Sorter Module — TSM X, Z Loader Pick/Place\n\nLoader Pick_Place Position是如圖所示TSM在Load Rail上Pick·Place Tray的位置。',
          ja:'F-5. Tray Sorter Module — TSM X, Z Loader Pick/Place\n\nLoader Pick_Place Positionは図のようにTSMがLoad Rail上でTrayをPick・Placeする位置です。'
        }},
        {img:cmImg('F','nbga',31),tx:{
          vi:'Host P/G ▸ Handler ▸ Map ▸ chọn TSM, di chuyển đến X Loader Pick_Place Position.',
          en:'Host P/G ▸ Handler ▸ Map ▸ select TSM, move to the X Loader Pick_Place Position.',
          ko:'Host P/G ▸ Handler ▸ Map ▸ TSM 선택 후 X Loader Pick_Place Position으로 이동합니다.',
          zhCN:'Host P/G ▸ Handler ▸ Map ▸ 选择TSM,移动到X Loader Pick_Place Position。',
          zhTW:'Host P/G ▸ Handler ▸ Map ▸ 選擇TSM,移動到X Loader Pick_Place Position。',
          ja:'Host P/G ▸ Handler ▸ Map ▸ TSMを選択し、X Loader Pick_Place Positionへ移動します。'
        }},
        {img:cmImg('F','nbga',32),tx:{
          vi:'Đặt Tray lên Rail như hình, sau đó bật Left Picker Down Sol và Right Picker Down Sol.',
          en:'Place the tray on the rail as shown, then turn on the Left Picker Down Sol and Right Picker Down Sol.',
          ko:'그림처럼 Rail에 Tray를 올린 뒤 Left Picker Down Sol과 Right Picker Down Sol을 켭니다.',
          zhCN:'如图将Tray放在Rail上,然后开启Left Picker Down Sol与Right Picker Down Sol。',
          zhTW:'如圖將Tray放在Rail上,然後開啟Left Picker Down Sol與Right Picker Down Sol。',
          ja:'図のようにRailにTrayを置き、Left Picker Down SolとRight Picker Down SolをONにします。'
        }},
        {img:cmImg('F','nbga',33),tx:{
          vi:'Hạ vị trí Z để xác nhận Left Picker nằm giữa Load Rail và Right Picker nằm giữa Empty Rail. Nếu lệch tâm, quay lại Z Safety Position và chỉnh X; khi đã canh giữa, Clamp Tray và quay lại Safety Position để kiểm tra va chạm với Rail.',
          en:'Lower the Z position to confirm the Left Picker is centered on the Load Rail and the Right Picker on the Empty Rail. If off-center, return to the Z Safety Position and adjust X; once centered, clamp the tray and return to Safety Position to check for rail interference.',
          ko:'Z Position을 내려 Left Picker가 Load Rail 중앙에, Right Picker가 Empty Rail 중앙에 위치하는지 확인합니다. 중앙이 아니면 Z Safety Position으로 복귀 후 X를 조정하고, 중앙에 위치했으면 Tray를 Clamp한 뒤 Safety Position으로 복귀해 Rail과의 간섭을 확인합니다.',
          zhCN:'降低Z Position,确认Left Picker位于Load Rail中央、Right Picker位于Empty Rail中央。若不在中央,返回Z Safety Position调整X;若已居中,将Tray Clamp后返回Safety Position确认与Rail是否干涉。',
          zhTW:'降低Z Position,確認Left Picker位於Load Rail中央、Right Picker位於Empty Rail中央。若不在中央,返回Z Safety Position調整X;若已置中,將Tray Clamp後返回Safety Position確認與Rail是否干涉。',
          ja:'Z Positionを下げ、Left PickerがLoad Rail中央に、Right PickerがEmpty Rail中央に位置しているか確認します。中央でなければZ Safety Positionに戻りXを調整し、中央であればTrayをClampした後Safety Positionに戻りRailとの干渉を確認します。'
        }},
        {img:cmImg('F','nbga',34),tx:{
          vi:'Teach và Save TSM X Load Pick_Place Position.',
          en:'Teach and save the TSM X Load Pick_Place Position.',
          ko:'TSM X Load Pick_Place Position을 Teach & Save합니다.',
          zhCN:'将TSM X Load Pick_Place Position进行Teach & Save。',
          zhTW:'將TSM X Load Pick_Place Position進行Teach & Save。',
          ja:'TSM X Load Pick_Place PositionをTeach & Saveします。'
        }},
        {img:cmImg('F','nbga',35),tx:{
          vi:'Z Loader Pick_Place Position là chiều cao Clamp của Picker. Hạ vị trí Z sao cho khoảng cách giữa Stopper và Ball Bushing là 1–2mm với Plate và Tray chồng lên nhau, như hình.',
          en:'The Z Loader Pick_Place Position is the picker\'s clamp height. Lower the Z position so the gap between the stopper and ball bushing is 1–2mm with the plate and tray overlapping, as shown.',
          ko:'Z Loader Pick_Place Position은 Picker가 Tray를 Clamp하는 높이입니다. 그림처럼 Plate와 Tray가 겹친 상태에서 Stopper와 Ball Bushing 사이 간격이 1~2mm가 되도록 Z Position을 내립니다.',
          zhCN:'Z Loader Pick_Place Position是Picker夹持Tray的高度。如图在Plate与Tray重叠状态下,降低Z Position使Stopper与Ball Bushing之间间隙为1~2mm。',
          zhTW:'Z Loader Pick_Place Position是Picker夾持Tray的高度。如圖在Plate與Tray重疊狀態下,降低Z Position使Stopper與Ball Bushing之間間隙為1~2mm。',
          ja:'Z Loader Pick_Place PositionはPickerがTrayをClampする高さです。図のようにPlateとTrayが重なった状態でStopperとBall Bushingの間隔が1~2mmになるようZ Positionを下げます。'
        }},
        {img:cmImg('F','nbga',36),tx:{
          vi:'Teach và Save vị trí Z hiện tại làm TSM Z Load Pick_Place Position.',
          en:'Teach and save the current Z position as the TSM Z Load Pick_Place Position.',
          ko:'현재 Z Position을 Teach & Save하여 TSM Z Load Pick_Place Position으로 저장합니다.',
          zhCN:'将当前Z Position进行Teach & Save,保存为TSM Z Load Pick_Place Position。',
          zhTW:'將目前Z Position進行Teach & Save,儲存為TSM Z Load Pick_Place Position。',
          ja:'現在のZ PositionをTeach & SaveしてTSM Z Load Pick_Place Positionとして保存します。'
        }},
        {img:cmImg('F','nbga',37),tx:{
          vi:'B. Tray Sorter Module — TSM X/Z Loader Pick/Place, Indexer Y Tray Sorting, TSM X/Z Jig Left Place, TSM X/Z Jig Right Pick.',
          en:'B. Tray Sorter Module — TSM X/Z Loader Pick/Place, Indexer Y Tray Sorting, TSM X/Z Jig Left Place, TSM X/Z Jig Right Pick.',
          ko:'B. Tray Sorter Module — TSM X/Z Loader Pick/Place, Indexer Y Tray Sorting, TSM X/Z Jig Left Place, TSM X/Z Jig Right Pick.',
          zhCN:'B. Tray Sorter Module——TSM X/Z Loader Pick/Place、Indexer Y Tray Sorting、TSM X/Z Jig Left Place、TSM X/Z Jig Right Pick。',
          zhTW:'B. Tray Sorter Module——TSM X/Z Loader Pick/Place、Indexer Y Tray Sorting、TSM X/Z Jig Left Place、TSM X/Z Jig Right Pick。',
          ja:'B. Tray Sorter Module——TSM X/Z Loader Pick/Place、Indexer Y Tray Sorting、TSM X/Z Jig Left Place、TSM X/Z Jig Right Pick。'
        }},
        {img:cmImg('F','nbga',38),tx:{
          vi:'F-6. Tray Sorter Module — Indexer Y Tray Sorting\n\nIndexer Y Tray Sorting Position gửi Tray đến vị trí TSM. Đặt Tray lên Load Rail như hình.',
          en:'F-6. Tray Sorter Module — Indexer Y Tray Sorting\n\nThe Indexer Y Tray Sorting Position sends the tray to the TSM location. Place the tray on the Load Rail as shown.',
          ko:'F-6. Tray Sorter Module — Indexer Y Tray Sorting\n\nIndexer Y Tray Sorting Position은 Tray를 TSM 위치로 보내는 위치입니다. 그림처럼 Load Rail에 Tray를 올립니다.',
          zhCN:'F-6. Tray Sorter Module — Indexer Y Tray Sorting\n\nIndexer Y Tray Sorting Position是将Tray送到TSM位置的位置。如图将Tray放在Load Rail上。',
          zhTW:'F-6. Tray Sorter Module — Indexer Y Tray Sorting\n\nIndexer Y Tray Sorting Position是將Tray送到TSM位置的位置。如圖將Tray放在Load Rail上。',
          ja:'F-6. Tray Sorter Module — Indexer Y Tray Sorting\n\nIndexer Y Tray Sorting PositionはTrayをTSM位置へ送る位置です。図のようにLoad RailにTrayを置きます。'
        }},
        {img:cmImg('F','nbga',39),tx:{
          vi:'Host P/G ▸ Handler ▸ Map ▸ chọn TSM, di chuyển đến X và Z Load Pick_Place Position.',
          en:'Host P/G ▸ Handler ▸ Map ▸ select TSM, move to the X and Z Load Pick_Place Positions.',
          ko:'Host P/G ▸ Handler ▸ Map ▸ TSM 선택 후 X, Z Load Pick_Place Position으로 이동합니다.',
          zhCN:'Host P/G ▸ Handler ▸ Map ▸ 选择TSM,移动到X、Z Load Pick_Place Position。',
          zhTW:'Host P/G ▸ Handler ▸ Map ▸ 選擇TSM,移動到X、Z Load Pick_Place Position。',
          ja:'Host P/G ▸ Handler ▸ Map ▸ TSMを選択し、X、Z Load Pick_Place Positionへ移動します。'
        }},
        {img:cmImg('F','nbga',40),tx:{
          vi:'Host P/G ▸ Handler ▸ Map ▸ chọn Load Indexer 1, bật B/W Clamp của nó, và di chuyển đến Tray Sorting Position.',
          en:'Host P/G ▸ Handler ▸ Map ▸ select Load Indexer 1, turn on its B/W Clamp, and move it to the Tray Sorting Position.',
          ko:'Host P/G ▸ Handler ▸ Map ▸ Load Indexer 1 선택 후 B/W Clamp를 켜고 Tray Sorting Position으로 이동시킵니다.',
          zhCN:'Host P/G ▸ Handler ▸ Map ▸ 选择Load Indexer 1,开启其B/W Clamp并移动到Tray Sorting Position。',
          zhTW:'Host P/G ▸ Handler ▸ Map ▸ 選擇Load Indexer 1,開啟其B/W Clamp並移動到Tray Sorting Position。',
          ja:'Host P/G ▸ Handler ▸ Map ▸ Load Indexer 1を選択し、B/W ClampをONにしてTray Sorting Positionへ移動させます。'
        }},
        {img:cmImg('F','nbga',41),tx:{
          vi:'Di chuyển Indexer sao cho Plate và Tray khớp nhau, như hình.',
          en:'Move the indexer so the plate and tray align, as shown.',
          ko:'그림처럼 Plate와 Tray가 맞도록 Indexer를 이동합니다.',
          zhCN:'如图移动Indexer,使Plate与Tray对齐。',
          zhTW:'如圖移動Indexer,使Plate與Tray對齊。',
          ja:'図のようにPlateとTrayが合うようIndexerを移動します。'
        }},
        {img:cmImg('F','nbga',42),tx:{
          vi:'Teach và Save Indexer Y Tray Sorting Position. Teaching Load Indexer 1, Load Indexer 2 và Empty Indexer theo cùng cách.',
          en:'Teach and save the Indexer Y Tray Sorting Position. Teach Load Indexer 1, Load Indexer 2, and Empty Indexer the same way.',
          ko:'Indexer Y Tray Sorting Position을 Teach & Save합니다. Load Indexer 1·Load Indexer 2·Empty Indexer 모두 동일한 방식으로 Teaching합니다.',
          zhCN:'将Indexer Y Tray Sorting Position进行Teach & Save。Load Indexer 1、Load Indexer 2、Empty Indexer均以相同方式进行Teaching。',
          zhTW:'將Indexer Y Tray Sorting Position進行Teach & Save。Load Indexer 1、Load Indexer 2、Empty Indexer均以相同方式進行Teaching。',
          ja:'Indexer Y Tray Sorting PositionをTeach & Saveします。Load Indexer 1・Load Indexer 2・Empty Indexerすべて同じ方法でTeachingします。'
        }},
        {img:cmImg('F','nbga',43),tx:{
          vi:'B. Tray Sorter Module — TSM X/Z Loader Pick/Place, Indexer Y Tray Sorting, TSM X/Z Jig Left Place, TSM X/Z Jig Right Pick.',
          en:'B. Tray Sorter Module — TSM X/Z Loader Pick/Place, Indexer Y Tray Sorting, TSM X/Z Jig Left Place, TSM X/Z Jig Right Pick.',
          ko:'B. Tray Sorter Module — TSM X/Z Loader Pick/Place, Indexer Y Tray Sorting, TSM X/Z Jig Left Place, TSM X/Z Jig Right Pick.',
          zhCN:'B. Tray Sorter Module——TSM X/Z Loader Pick/Place、Indexer Y Tray Sorting、TSM X/Z Jig Left Place、TSM X/Z Jig Right Pick。',
          zhTW:'B. Tray Sorter Module——TSM X/Z Loader Pick/Place、Indexer Y Tray Sorting、TSM X/Z Jig Left Place、TSM X/Z Jig Right Pick。',
          ja:'B. Tray Sorter Module——TSM X/Z Loader Pick/Place、Indexer Y Tray Sorting、TSM X/Z Jig Left Place、TSM X/Z Jig Right Pick。'
        }},
        {img:cmImg('F','nbga',44),tx:{
          vi:'F-7. Tray Sorter Module — TSM X, Z Jig Left Place\n\nTSM X Jig Left Place Position là vị trí X để đặt Tray lên JIG. Đặt Tray lên Rail như hình.',
          en:'F-7. Tray Sorter Module — TSM X, Z Jig Left Place\n\nThe TSM X Jig Left Place Position is the X position for placing the tray on the JIG. Place the tray on the rail as shown.',
          ko:'F-7. Tray Sorter Module — TSM X, Z Jig Left Place\n\nTSM X Jig Left Place Position은 Tray를 JIG에 놓는 X 위치입니다. 그림처럼 Rail에 Tray를 올립니다.',
          zhCN:'F-7. Tray Sorter Module — TSM X, Z Jig Left Place\n\nTSM X Jig Left Place Position是将Tray放置到JIG上的X位置。如图将Tray放在Rail上。',
          zhTW:'F-7. Tray Sorter Module — TSM X, Z Jig Left Place\n\nTSM X Jig Left Place Position是將Tray放置到JIG上的X位置。如圖將Tray放在Rail上。',
          ja:'F-7. Tray Sorter Module — TSM X, Z Jig Left Place\n\nTSM X Jig Left Place PositionはTrayをJIGに置くX位置です。図のようにRailにTrayを置きます。'
        }},
        {img:cmImg('F','nbga',45),tx:{
          vi:'Host P/G ▸ Handler ▸ Map ▸ chọn Load Indexer 1, cố định Tray bằng B/W và F/W Clamp, di chuyển đến Tray Sorter Position, sau đó nhả cả hai Clamp.',
          en:'Host P/G ▸ Handler ▸ Map ▸ select Load Indexer 1, fasten the tray with the B/W and F/W Clamps, move to the Tray Sorter Position, then release both clamps.',
          ko:'Host P/G ▸ Handler ▸ Map ▸ Load Indexer 1 선택 후 B/W Clamp·F/W Clamp로 Tray를 고정하고 Tray Sorter Position으로 이동한 뒤 두 Clamp를 모두 해제합니다.',
          zhCN:'Host P/G ▸ Handler ▸ Map ▸ 选择Load Indexer 1,用B/W Clamp、F/W Clamp固定Tray,移动到Tray Sorter Position后解除两个Clamp。',
          zhTW:'Host P/G ▸ Handler ▸ Map ▸ 選擇Load Indexer 1,用B/W Clamp、F/W Clamp固定Tray,移動到Tray Sorter Position後解除兩個Clamp。',
          ja:'Host P/G ▸ Handler ▸ Map ▸ Load Indexer 1を選択し、B/W Clamp・F/W ClampでTrayを固定してTray Sorter Positionへ移動後、両方のClampを解除します。'
        }},
        {img:cmImg('F','nbga',46),tx:{
          vi:'Host P/G ▸ Handler ▸ Map ▸ chọn TSM, di chuyển đến Load Pick_Place Position, và bật Left Picker Down Sol.',
          en:'Host P/G ▸ Handler ▸ Map ▸ select TSM, move to the Load Pick_Place Position, and turn on the Left Picker Down Sol.',
          ko:'Host P/G ▸ Handler ▸ Map ▸ TSM 선택 후 Load Pick_Place Position으로 이동하고 Left Picker Down Sol을 켭니다.',
          zhCN:'Host P/G ▸ Handler ▸ Map ▸ 选择TSM,移动到Load Pick_Place Position并开启Left Picker Down Sol。',
          zhTW:'Host P/G ▸ Handler ▸ Map ▸ 選擇TSM,移動到Load Pick_Place Position並開啟Left Picker Down Sol。',
          ja:'Host P/G ▸ Handler ▸ Map ▸ TSMを選択し、Load Pick_Place Positionへ移動してLeft Picker Down SolをONにします。'
        }},
        {img:cmImg('F','nbga',47),tx:{
          vi:'Di chuyển đến Z Load Pick_Place Position và Clamp Left Picker.',
          en:'Move to the Z Load Pick_Place Position and clamp the Left Picker.',
          ko:'Z Load Pick_Place Position으로 이동한 뒤 Left Picker를 Clamp합니다.',
          zhCN:'移动到Z Load Pick_Place Position后Clamp Left Picker。',
          zhTW:'移動到Z Load Pick_Place Position後Clamp Left Picker。',
          ja:'Z Load Pick_Place Positionへ移動し、Left PickerをClampします。'
        }},
        {img:cmImg('F','nbga',48),tx:{
          vi:'Di chuyển đến Z Safety Position, sau đó đến X Jig1 Left Place Position.',
          en:'Move to the Z Safety Position, then to the X Jig1 Left Place Position.',
          ko:'Z Safety Position으로 이동한 뒤 X Jig1 Left Place Position으로 이동합니다.',
          zhCN:'移动到Z Safety Position后,再移动到X Jig1 Left Place Position。',
          zhTW:'移動到Z Safety Position後,再移動到X Jig1 Left Place Position。',
          ja:'Z Safety Positionへ移動した後、X Jig1 Left Place Positionへ移動します。'
        }},
        {img:cmImg('F','nbga',49),tx:{
          vi:'Host P/G ▸ Handler ▸ Map ▸ chọn JIG1, di chuyển đến Tray Loading Position, và xác nhận mọi Clamp đã tắt.',
          en:'Host P/G ▸ Handler ▸ Map ▸ select JIG1, move to the Tray Loading Position, and confirm all clamps are off.',
          ko:'Host P/G ▸ Handler ▸ Map ▸ JIG1 선택 후 Tray Loading Position으로 이동하고 모든 Clamp가 꺼져 있는지 확인합니다.',
          zhCN:'Host P/G ▸ Handler ▸ Map ▸ 选择JIG1,移动到Tray Loading Position并确认所有Clamp均已关闭。',
          zhTW:'Host P/G ▸ Handler ▸ Map ▸ 選擇JIG1,移動到Tray Loading Position並確認所有Clamp均已關閉。',
          ja:'Host P/G ▸ Handler ▸ Map ▸ JIG1を選択し、Tray Loading Positionへ移動してすべてのClampがOFFになっているか確認します。'
        }},
        {img:cmImg('F','nbga',50),tx:{
          vi:'Host P/G ▸ Handler ▸ Map ▸ chọn TSM, hạ vị trí Z, và đặt Tray lên JIG1 — chỉnh vị trí X của TSM và Y của JIG sao cho khoảng cách giữa Pin JIG và Tray là 1mm. (Cẩn thận không làm hỏng kết cấu khi hạ xuống.)',
          en:'Host P/G ▸ Handler ▸ Map ▸ select TSM, lower the Z position, and place the tray on JIG1 — adjust the TSM X and JIG Y positions so the gap between the JIG pin and tray is 1mm. (Be careful not to damage the structure while lowering.)',
          ko:'Host P/G ▸ Handler ▸ Map ▸ TSM 선택 후 Z Position을 내려 JIG1에 Tray를 올립니다 — JIG Pin과 Tray 사이 간격이 1mm가 되도록 TSM X, JIG Y 위치를 조정합니다. (Z Position을 내릴 때 구조물 손상에 주의)',
          zhCN:'Host P/G ▸ Handler ▸ Map ▸ 选择TSM,降低Z Position将Tray放到JIG1上——调整TSM X、JIG Y位置使JIG Pin与Tray之间间隙为1mm。(降低Z Position时注意不要损坏结构)',
          zhTW:'Host P/G ▸ Handler ▸ Map ▸ 選擇TSM,降低Z Position將Tray放到JIG1上——調整TSM X、JIG Y位置使JIG Pin與Tray之間間隙為1mm。(降低Z Position時注意不要損壞結構)',
          ja:'Host P/G ▸ Handler ▸ Map ▸ TSMを選択し、Z Positionを下げてJIG1にTrayを置きます——JIG PinとTrayの間隔が1mmになるようTSM X、JIG Y位置を調整します。(Z Position降下時に構造物の破損に注意)'
        }},
        {img:cmImg('F','nbga',51),tx:{
          vi:'Di chuyển vị trí Z sao cho khoảng cách giữa Ball Bushing và Stopper là 1–2mm, như hình.',
          en:'Move the Z position so the gap between the ball bushing and stopper is 1–2mm, as shown.',
          ko:'그림처럼 Ball Bushing과 Stopper 사이 간격이 1~2mm가 되도록 Z Position을 이동합니다.',
          zhCN:'如图移动Z Position,使Ball Bushing与Stopper之间间隙为1~2mm。',
          zhTW:'如圖移動Z Position,使Ball Bushing與Stopper之間間隙為1~2mm。',
          ja:'図のようにBall BushingとStopperの間隔が1~2mmになるようZ Positionを移動します。'
        }},
        {img:cmImg('F','nbga',52),tx:{
          vi:'Teach và Save vị trí X hiện tại làm X Jig1 Left Place Position. Teaching X Jig2 Left Place Position theo cùng cách.',
          en:'Teach and save the current X position as the X Jig1 Left Place Position. Teach the X Jig2 Left Place Position the same way.',
          ko:'현재 X Position을 Teach & Save하여 X Jig1 Left Place Position으로 저장합니다. X Jig2 Left Place Position도 동일하게 Teaching합니다.',
          zhCN:'将当前X Position进行Teach & Save,保存为X Jig1 Left Place Position。X Jig2 Left Place Position也以相同方式进行Teaching。',
          zhTW:'將目前X Position進行Teach & Save,儲存為X Jig1 Left Place Position。X Jig2 Left Place Position也以相同方式進行Teaching。',
          ja:'現在のX PositionをTeach & SaveしてX Jig1 Left Place Positionとして保存します。X Jig2 Left Place Positionも同様にTeachingします。'
        }},
        {img:cmImg('F','nbga',53),tx:{
          vi:'Teach và Save vị trí Z hiện tại làm Z Jig1 Place Position. Teaching Z Jig2 Place Position theo cùng cách.',
          en:'Teach and save the current Z position as the Z Jig1 Place Position. Teach the Z Jig2 Place Position the same way.',
          ko:'현재 Z Position을 Teach & Save하여 Z Jig1 Place Position으로 저장합니다. Z Jig2 Place Position도 동일하게 Teaching합니다.',
          zhCN:'将当前Z Position进行Teach & Save,保存为Z Jig1 Place Position。Z Jig2 Place Position也以相同方式进行Teaching。',
          zhTW:'將目前Z Position進行Teach & Save,儲存為Z Jig1 Place Position。Z Jig2 Place Position也以相同方式進行Teaching。',
          ja:'現在のZ PositionをTeach & SaveしてZ Jig1 Place Positionとして保存します。Z Jig2 Place Positionも同様にTeachingします。'
        }},
        {img:cmImg('F','nbga',54),tx:{
          vi:'Host P/G ▸ Handler ▸ Map ▸ chọn JIG1, Teach và Save vị trí Y hiện tại làm Tray Loading Position. Teaching Tray Loading Position của JIG2 theo cùng cách.',
          en:'Host P/G ▸ Handler ▸ Map ▸ select JIG1, teach and save its current Y position as the Tray Loading Position. Teach JIG2\'s Tray Loading Position the same way.',
          ko:'Host P/G ▸ Handler ▸ Map ▸ JIG1 선택 후 현재 Y Position을 Teach & Save하여 Tray Loading Position으로 저장합니다. JIG2도 동일하게 Teaching합니다.',
          zhCN:'Host P/G ▸ Handler ▸ Map ▸ 选择JIG1,将当前Y Position进行Teach & Save,保存为Tray Loading Position。JIG2也以相同方式进行Teaching。',
          zhTW:'Host P/G ▸ Handler ▸ Map ▸ 選擇JIG1,將目前Y Position進行Teach & Save,儲存為Tray Loading Position。JIG2也以相同方式進行Teaching。',
          ja:'Host P/G ▸ Handler ▸ Map ▸ JIG1を選択し、現在のY PositionをTeach & SaveしてTray Loading Positionとして保存します。JIG2も同様にTeachingします。'
        }},
        {img:cmImg('F','nbga',55),tx:{
          vi:'B. Tray Sorter Module — TSM X/Z Loader Pick/Place, Indexer Y Tray Sorting, TSM X/Z Jig Left Place, TSM X/Z Jig Right Pick.',
          en:'B. Tray Sorter Module — TSM X/Z Loader Pick/Place, Indexer Y Tray Sorting, TSM X/Z Jig Left Place, TSM X/Z Jig Right Pick.',
          ko:'B. Tray Sorter Module — TSM X/Z Loader Pick/Place, Indexer Y Tray Sorting, TSM X/Z Jig Left Place, TSM X/Z Jig Right Pick.',
          zhCN:'B. Tray Sorter Module——TSM X/Z Loader Pick/Place、Indexer Y Tray Sorting、TSM X/Z Jig Left Place、TSM X/Z Jig Right Pick。',
          zhTW:'B. Tray Sorter Module——TSM X/Z Loader Pick/Place、Indexer Y Tray Sorting、TSM X/Z Jig Left Place、TSM X/Z Jig Right Pick。',
          ja:'B. Tray Sorter Module——TSM X/Z Loader Pick/Place、Indexer Y Tray Sorting、TSM X/Z Jig Left Place、TSM X/Z Jig Right Pick。'
        }},
        {img:cmImg('F','nbga',56),tx:{
          vi:'F-8. Tray Sorter Module — TSM X, Z Jig Right Pick\n\nTSM X Jig Right Pick Position là vị trí X để Right Picker lấy Tray đã đặt trên JIG. Đặt Tray lên JIG1 như hình.',
          en:'F-8. Tray Sorter Module — TSM X, Z Jig Right Pick\n\nThe TSM X Jig Right Pick Position is the X position where the Right Picker picks up the tray placed on the JIG. Place the tray on JIG1 as shown.',
          ko:'F-8. Tray Sorter Module — TSM X, Z Jig Right Pick\n\nTSM X Jig Right Pick Position은 JIG에 놓인 Tray를 Right Picker가 집어 올리는 X 위치입니다. 그림처럼 JIG1에 Tray를 올립니다.',
          zhCN:'F-8. Tray Sorter Module — TSM X, Z Jig Right Pick\n\nTSM X Jig Right Pick Position是Right Picker拾取JIG上Tray的X位置。如图将Tray放在JIG1上。',
          zhTW:'F-8. Tray Sorter Module — TSM X, Z Jig Right Pick\n\nTSM X Jig Right Pick Position是Right Picker拾取JIG上Tray的X位置。如圖將Tray放在JIG1上。',
          ja:'F-8. Tray Sorter Module — TSM X, Z Jig Right Pick\n\nTSM X Jig Right PositionはJIGに置かれたTrayをRight Pickerが拾い上げるX位置です。図のようにJIG1にTrayを置きます。'
        }},
        {img:cmImg('F','nbga',57),tx:{
          vi:'Host P/G ▸ Handler ▸ Map ▸ chọn JIG1, bật X Clamp và Y Clamp để giữ Tray áp sát Pin JIG (tắt Inner Clamp), sau đó di chuyển JIG1 đến Tray Loading Position.',
          en:'Host P/G ▸ Handler ▸ Map ▸ select JIG1, turn on its X Clamp and Y Clamp to hold the tray against the JIG pin (Inner Clamp off), then move JIG1 to the Tray Loading Position.',
          ko:'Host P/G ▸ Handler ▸ Map ▸ JIG1 선택 후 X Clamp·Y Clamp를 켜서 Tray를 JIG Pin에 밀착시키고(Inner Clamp는 Off) JIG1을 Tray Loading Position으로 이동합니다.',
          zhCN:'Host P/G ▸ Handler ▸ Map ▸ 选择JIG1,开启X Clamp、Y Clamp使Tray贴紧JIG Pin(Inner Clamp关闭),然后将JIG1移动到Tray Loading Position。',
          zhTW:'Host P/G ▸ Handler ▸ Map ▸ 選擇JIG1,開啟X Clamp、Y Clamp使Tray貼緊JIG Pin(Inner Clamp關閉),然後將JIG1移動到Tray Loading Position。',
          ja:'Host P/G ▸ Handler ▸ Map ▸ JIG1を選択し、X Clamp・Y ClampをONにしてTrayをJIG Pinに密着させ(Inner ClampはOff)、JIG1をTray Loading Positionへ移動します。'
        }},
        {img:cmImg('F','nbga',58),tx:{
          vi:'Di chuyển đến Tray Loading Position.',
          en:'Move to the Tray Loading Position.',
          ko:'Tray Loading Position으로 이동합니다.',
          zhCN:'移动到Tray Loading Position。',
          zhTW:'移動到Tray Loading Position。',
          ja:'Tray Loading Positionへ移動します。'
        }},
        {img:cmImg('F','nbga',59),tx:{
          vi:'Host P/G ▸ Handler ▸ Map ▸ chọn TSM, di chuyển đến X Jig1 Right Pick Position, và bật Right Picker Down Sol.',
          en:'Host P/G ▸ Handler ▸ Map ▸ select TSM, move to the X Jig1 Right Pick Position, and turn on the Right Picker Down Sol.',
          ko:'Host P/G ▸ Handler ▸ Map ▸ TSM 선택 후 X Jig1 Right Pick Position으로 이동하고 Right Picker Down Sol을 켭니다.',
          zhCN:'Host P/G ▸ Handler ▸ Map ▸ 选择TSM,移动到X Jig1 Right Pick Position并开启Right Picker Down Sol。',
          zhTW:'Host P/G ▸ Handler ▸ Map ▸ 選擇TSM,移動到X Jig1 Right Pick Position並開啟Right Picker Down Sol。',
          ja:'Host P/G ▸ Handler ▸ Map ▸ TSMを選択し、X Jig1 Right Pick Positionへ移動してRight Picker Down SolをONにします。'
        }},
        {img:cmImg('F','nbga',60),tx:{
          vi:'Hạ vị trí Z sao cho Tray áp sát Pin Guide của bàn Jig — kiểm tra kỹ vị trí để tránh va chạm.',
          en:'Lower the Z position so the tray is in close contact with the jig table guide pin — check the position carefully to avoid a crash.',
          ko:'JIG Table Guide Pin에 Tray가 밀착되도록 Z Position을 내립니다 — 충돌하지 않도록 위치를 주의 깊게 확인합니다.',
          zhCN:'降低Z Position使Tray与JIG Table Guide Pin紧密贴合——请仔细确认位置以避免碰撞。',
          zhTW:'降低Z Position使Tray與JIG Table Guide Pin緊密貼合——請仔細確認位置以避免碰撞。',
          ja:'JIG Table Guide PinにTrayが密着するようZ Positionを下げます——衝突しないよう位置を注意深く確認します。'
        }},
        {img:cmImg('F','nbga',61),tx:{
          vi:'Di chuyển vị trí Z sao cho khoảng cách giữa Ball Bushing và Stopper là 1–2mm, như hình.',
          en:'Move the Z position so the gap between the ball bushing and stopper is 1–2mm, as shown.',
          ko:'그림처럼 Ball Bushing과 Stopper 사이 간격이 1~2mm가 되도록 Z Position을 이동합니다.',
          zhCN:'如图移动Z Position,使Ball Bushing与Stopper之间间隙为1~2mm。',
          zhTW:'如圖移動Z Position,使Ball Bushing與Stopper之間間隙為1~2mm。',
          ja:'図のようにBall BushingとStopperの間隔が1~2mmになるようZ Positionを移動します。'
        }},
        {img:cmImg('F','nbga',62),tx:{
          vi:'Teach và Save vị trí X hiện tại làm X Jig1 Right Pick Position. Teaching X Jig2 Right Pick Position theo cùng cách.',
          en:'Teach and save the current X position as the X Jig1 Right Pick Position. Teach the X Jig2 Right Pick Position the same way.',
          ko:'현재 X Position을 Teach & Save하여 X Jig1 Right Pick Position으로 저장합니다. X Jig2 Right Pick Position도 동일하게 Teaching합니다.',
          zhCN:'将当前X Position进行Teach & Save,保存为X Jig1 Right Pick Position。X Jig2 Right Pick Position也以相同方式进行Teaching。',
          zhTW:'將目前X Position進行Teach & Save,儲存為X Jig1 Right Pick Position。X Jig2 Right Pick Position也以相同方式進行Teaching。',
          ja:'現在のX PositionをTeach & SaveしてX Jig1 Right Pick Positionとして保存します。X Jig2 Right Pick Positionも同様にTeachingします。'
        }},
        {img:cmImg('F','nbga',63),tx:{
          vi:'Teach và Save vị trí Z hiện tại làm Z Jig1 Pick Position. Teaching Z Jig2 Pick Position theo cùng cách.',
          en:'Teach and save the current Z position as the Z Jig1 Pick Position. Teach the Z Jig2 Pick Position the same way.',
          ko:'현재 Z Position을 Teach & Save하여 Z Jig1 Pick Position으로 저장합니다. Z Jig2 Pick Position도 동일하게 Teaching합니다.',
          zhCN:'将当前Z Position进行Teach & Save,保存为Z Jig1 Pick Position。Z Jig2 Pick Position也以相同方式进行Teaching。',
          zhTW:'將目前Z Position進行Teach & Save,儲存為Z Jig1 Pick Position。Z Jig2 Pick Position也以相同方式進行Teaching。',
          ja:'現在のZ PositionをTeach & SaveしてZ Jig1 Pick Positionとして保存します。Z Jig2 Pick Positionも同様にTeachingします。'
        }},
        {img:cmImg('F','nbga',64),tx:{
          vi:'Chương này giới thiệu Handler Teaching — quy trình Teaching vị trí cho Elevator, Tray Sorter Module (TSM), Tray Transfer Module (TTM), Multi Sorter, 3D Inspector và 2D Inspector.',
          en:'This chapter covers Handler Teaching — the position-teaching sequence for the Elevator, Tray Sorter Module (TSM), Tray Transfer Module (TTM), Multi Sorter, 3D Inspector, and 2D Inspector.',
          ko:'본 챕터에서는 Handler Teaching — Elevator, Tray Sorter Module(TSM), Tray Transfer Module(TTM), Multi Sorter, 3D Inspector, 2D Inspector의 Position Teaching 절차를 다룹니다.',
          zhCN:'本章介绍Handler Teaching——Elevator、Tray Sorter Module(TSM)、Tray Transfer Module(TTM)、Multi Sorter、3D Inspector、2D Inspector的Position Teaching流程。',
          zhTW:'本章介紹Handler Teaching——Elevator、Tray Sorter Module(TSM)、Tray Transfer Module(TTM)、Multi Sorter、3D Inspector、2D Inspector的Position Teaching流程。',
          ja:'本章ではHandler Teaching——Elevator、Tray Sorter Module(TSM)、Tray Transfer Module(TTM)、Multi Sorter、3D Inspector、2D InspectorのPosition Teaching手順を扱います。'
        }},
        {img:cmImg('F','nbga',65),tx:{
          vi:'C. Tray Transfer Module (TTM) — phần này đề cập đến TTM X, Y, Z Position.',
          en:'C. Tray Transfer Module (TTM) — this section covers the TTM X, Y, Z Position.',
          ko:'C. Tray Transfer Module(TTM) — TTM X, Y, Z Position을 다룹니다.',
          zhCN:'C. Tray Transfer Module(TTM)——本节介绍TTM X, Y, Z Position。',
          zhTW:'C. Tray Transfer Module(TTM)——本節介紹TTM X, Y, Z Position。',
          ja:'C. Tray Transfer Module(TTM)——本節ではTTM X, Y, Z Positionを扱います。'
        }},
        {img:cmImg('F','nbga',66),tx:{
          vi:'TTM X Rail Position là vị trí X để vận chuyển Tray đã kiểm tra đến các Rail Good, Buffer, Reject2, Reject3. Host P/G ▸ Handler ▸ Map ▸ chọn TTM, di chuyển đến X Empty Position.',
          en:'TTM X Rail Position is the X position for transporting inspected trays to the Good, Buffer, Reject2, and Reject3 rails. Host P/G ▸ Handler ▸ Map ▸ select TTM, move to the X Empty Position.',
          ko:'TTM X Rail Position은 검사 완료된 Tray를 Good·Buffer·Reject2·Reject3 Rail로 이송하는 X 위치입니다. Host P/G ▸ Handler ▸ Map ▸ TTM 선택 후 X Empty Position으로 이동합니다.',
          zhCN:'TTM X Rail Position是将检验完成的Tray搬运到Good、Buffer、Reject2、Reject3 Rail的X位置。Host P/G ▸ Handler ▸ Map ▸ 选择TTM,移动到X Empty Position。',
          zhTW:'TTM X Rail Position是將檢驗完成的Tray搬運到Good、Buffer、Reject2、Reject3 Rail的X位置。Host P/G ▸ Handler ▸ Map ▸ 選擇TTM,移動到X Empty Position。',
          ja:'TTM X Rail Positionは検査済みのTrayをGood・Buffer・Reject2・Reject3 Railへ搬送するX位置です。Host P/G ▸ Handler ▸ Map ▸ TTMを選択し、X Empty Positionへ移動します。'
        }},
        {img:cmImg('F','nbga',67),tx:{
          vi:'Đặt Tray ở phía sau Empty Rail như hình, di chuyển TTM đến giữa Rail, sau đó hạ trục Z để kiểm tra va chạm với Rail.',
          en:'Place the tray at the rear of the Empty Rail as shown, move the TTM to the center of the rail, then lower the Z-axis to check for interference with the rail.',
          ko:'그림처럼 Empty Rail 후방에 Tray를 놓고 TTM을 Rail 중앙으로 이동시킨 뒤, Z축을 내려 Rail과의 간섭을 확인합니다.',
          zhCN:'如图将Tray放在Empty Rail后方,将TTM移动到Rail中央,然后降低Z轴确认与Rail是否干涉。',
          zhTW:'如圖將Tray放在Empty Rail後方,將TTM移動到Rail中央,然後降低Z軸確認與Rail是否干涉。',
          ja:'図のようにEmpty Rail後方にTrayを置き、TTMをRail中央へ移動させた後、Z軸を下げてRailとの干渉を確認します。'
        }},
        {img:cmImg('F','nbga',68),tx:{
          vi:'Teach và Save vị trí X hiện tại làm TTM X Empty Position. Teaching vị trí X của Rail Good, Buffer, Reject2, Reject3 theo cùng cách.',
          en:'Teach and save the current X position as the TTM X Empty Position. Teach the Good, Buffer, Reject2, and Reject3 Rail X positions the same way.',
          ko:'현재 X Position을 Teach & Save하여 TTM X Empty Position으로 저장합니다. Good·Buffer·Reject2·Reject3 Rail의 X Position도 동일하게 Teaching합니다.',
          zhCN:'将当前X Position进行Teach & Save,保存为TTM X Empty Position。Good、Buffer、Reject2、Reject3 Rail的X Position也以相同方式进行Teaching。',
          zhTW:'將目前X Position進行Teach & Save,儲存為TTM X Empty Position。Good、Buffer、Reject2、Reject3 Rail的X Position也以相同方式進行Teaching。',
          ja:'現在のX PositionをTeach & SaveしてTTM X Empty Positionとして保存します。Good・Buffer・Reject2・Reject3 RailのX Positionも同様にTeachingします。'
        }},
        {img:cmImg('F','nbga',69),tx:{
          vi:'Host P/G ▸ Handler ▸ Map ▸ chọn Empty Indexer, bật B/W Clamp, và di chuyển đến Rear Tray Position. (Kiểm tra va chạm Tray trước khi tiếp tục.)',
          en:'Host P/G ▸ Handler ▸ Map ▸ select Empty Indexer, turn on the B/W Clamp, and move to the Rear Tray Position. (Check for tray interference before proceeding.)',
          ko:'Host P/G ▸ Handler ▸ Map ▸ Empty Indexer 선택 후 B/W Clamp를 켜고 Rear Tray Position으로 이동합니다. (진행 전 Tray 간섭 여부 확인)',
          zhCN:'Host P/G ▸ Handler ▸ Map ▸ 选择Empty Indexer,开启B/W Clamp并移动到Rear Tray Position。(操作前请先确认Tray是否干涉)',
          zhTW:'Host P/G ▸ Handler ▸ Map ▸ 選擇Empty Indexer,開啟B/W Clamp並移動到Rear Tray Position。(操作前請先確認Tray是否干涉)',
          ja:'Host P/G ▸ Handler ▸ Map ▸ Empty Indexerを選択し、B/W ClampをONにしてRear Tray Positionへ移動します。(進行前にTrayの干渉を確認)'
        }},
        {img:cmImg('F','nbga',70),tx:{
          vi:'Di chuyển Indexer sao cho Plate và Tray khớp nhau, như hình.',
          en:'Move the indexer so the plate and tray align, as shown.',
          ko:'그림처럼 Plate와 Tray가 맞도록 Indexer를 이동합니다.',
          zhCN:'如图移动Indexer,使Plate与Tray对齐。',
          zhTW:'如圖移動Indexer,使Plate與Tray對齊。',
          ja:'図のようにPlateとTrayが合うようIndexerを移動します。'
        }},
        {img:cmImg('F','nbga',71),tx:{
          vi:'Teach và Save vị trí Y hiện tại làm Rear Tray Position. Teaching cho Rail Good, Buffer, Reject2, Reject3 theo cùng cách.',
          en:'Teach and save the current Y position as the Rear Tray Position. Teach the Good, Buffer, Reject2, and Reject3 Rail the same way.',
          ko:'현재 Y Position을 Teach & Save하여 Rear Tray Position으로 저장합니다. Good·Buffer·Reject2·Reject3 Rail도 동일하게 Teaching합니다.',
          zhCN:'将当前Y Position进行Teach & Save,保存为Rear Tray Position。Good、Buffer、Reject2、Reject3 Rail也以相同方式进行Teaching。',
          zhTW:'將目前Y Position進行Teach & Save,儲存為Rear Tray Position。Good、Buffer、Reject2、Reject3 Rail也以相同方式進行Teaching。',
          ja:'現在のY PositionをTeach & SaveしてRear Tray Positionとして保存します。Good・Buffer・Reject2・Reject3 Railも同様にTeachingします。'
        }},
        {img:cmImg('F','nbga',72),tx:{
          vi:'Hạ TTM sao cho khoảng cách giữa Ball Bushing và Stopper là 1–2mm, như hình.',
          en:'Lower the TTM so the gap between the ball bushing and stopper is 1–2mm, as shown.',
          ko:'그림처럼 Ball Bushing과 Stopper 사이 간격이 1~2mm가 되도록 TTM을 내립니다.',
          zhCN:'如图降低TTM,使Ball Bushing与Stopper之间间隙为1~2mm。',
          zhTW:'如圖降低TTM,使Ball Bushing與Stopper之間間隙為1~2mm。',
          ja:'図のようにBall BushingとStopperの間隔が1~2mmになるようTTMを下げます。'
        }},
        {img:cmImg('F','nbga',73),tx:{
          vi:'Teach và Save vị trí Z hiện tại làm Z Empty Position. Teaching vị trí Z của Rail Good, Buffer, Reject2, Reject3 theo cùng cách.',
          en:'Teach and save the current Z position as the Z Empty Position. Teach the Good, Buffer, Reject2, and Reject3 Rail Z positions the same way.',
          ko:'현재 Z Position을 Teach & Save하여 Z Empty Position으로 저장합니다. Good·Buffer·Reject2·Reject3 Rail의 Z Position도 동일하게 Teaching합니다.',
          zhCN:'将当前Z Position进行Teach & Save,保存为Z Empty Position。Good、Buffer、Reject2、Reject3 Rail的Z Position也以相同方式进行Teaching。',
          zhTW:'將目前Z Position進行Teach & Save,儲存為Z Empty Position。Good、Buffer、Reject2、Reject3 Rail的Z Position也以相同方式進行Teaching。',
          ja:'現在のZ PositionをTeach & SaveしてZ Empty Positionとして保存します。Good・Buffer・Reject2・Reject3 RailのZ Positionも同様にTeachingします。'
        }},
        {img:cmImg('F','nbga',74),tx:{
          vi:'Clamp Tray, sau đó di chuyển đến Safety Position để kiểm tra va chạm.',
          en:'Clamp the tray, then move to the Safety Position to check for interference.',
          ko:'Tray를 Clamp한 뒤 Safety Position으로 이동해 간섭 여부를 확인합니다.',
          zhCN:'Clamp Tray后移动到Safety Position确认是否干涉。',
          zhTW:'Clamp Tray後移動到Safety Position確認是否干涉。',
          ja:'TrayをClampした後、Safety Positionへ移動して干渉の有無を確認します。'
        }},
        {img:cmImg('F','nbga',75),tx:{
          vi:'Chương này giới thiệu Handler Teaching — quy trình Teaching vị trí cho Elevator, Tray Sorter Module (TSM), Tray Transfer Module (TTM), Multi Sorter, 3D Inspector và 2D Inspector.',
          en:'This chapter covers Handler Teaching — the position-teaching sequence for the Elevator, Tray Sorter Module (TSM), Tray Transfer Module (TTM), Multi Sorter, 3D Inspector, and 2D Inspector.',
          ko:'본 챕터에서는 Handler Teaching — Elevator, Tray Sorter Module(TSM), Tray Transfer Module(TTM), Multi Sorter, 3D Inspector, 2D Inspector의 Position Teaching 절차를 다룹니다.',
          zhCN:'本章介绍Handler Teaching——Elevator、Tray Sorter Module(TSM)、Tray Transfer Module(TTM)、Multi Sorter、3D Inspector、2D Inspector的Position Teaching流程。',
          zhTW:'本章介紹Handler Teaching——Elevator、Tray Sorter Module(TSM)、Tray Transfer Module(TTM)、Multi Sorter、3D Inspector、2D Inspector的Position Teaching流程。',
          ja:'本章ではHandler Teaching——Elevator、Tray Sorter Module(TSM)、Tray Transfer Module(TTM)、Multi Sorter、3D Inspector、2D InspectorのPosition Teaching手順を扱います。'
        }},
        {img:cmImg('F','nbga',76),tx:{
          vi:'D. Multi Sorter — phần này đề cập đến Multi Sorter X, Y, Z Position.',
          en:'D. Multi Sorter — this section covers the Multi Sorter X, Y, Z Position.',
          ko:'D. Multi Sorter — Multi Sorter X, Y, Z Position을 다룹니다.',
          zhCN:'D. Multi Sorter——本节介绍Multi Sorter X, Y, Z Position。',
          zhTW:'D. Multi Sorter——本節介紹Multi Sorter X, Y, Z Position。',
          ja:'D. Multi Sorter——本節ではMulti Sorter X, Y, Z Positionを扱います。'
        }},
        {img:cmImg('F','nbga',77),tx:{
          vi:'Multi Sorter X Position dùng để Sorting thiết bị bình thường hoặc lỗi — cần Reference Tray và Teaching Pin.',
          en:'The Multi Sorter X Position is used for sorting normal or defective devices — a reference tray and a teaching pin are needed.',
          ko:'Multi Sorter X Position은 정상·불량 소자를 분류하는 위치입니다 — Reference Tray와 Teaching Pin이 필요합니다.',
          zhCN:'Multi Sorter X Position用于分拣正常或不良器件——需要Reference Tray和Teaching Pin。',
          zhTW:'Multi Sorter X Position用於分類正常或不良元件——需要Reference Tray和Teaching Pin。',
          ja:'Multi Sorter X Positionは正常品・不良品を選別する位置です——Reference TrayとTeaching Pinが必要です。'
        }},
        {img:cmImg('F','nbga',78),tx:{
          vi:'Gắn Teaching Pin vào Left Picker của Multi Sorter như hình. Host P/G ▸ Handler ▸ Map ▸ chọn Indexer, đặt Reference Tray lên Rail, Clamp lại, sau đó di chuyển đến Multi Sorter Position.',
          en:'Attach the teaching pin to the Multi Sorter\'s left picker as shown. Host P/G ▸ Handler ▸ Map ▸ select Indexer, place the reference tray on the rail, clamp it, then move to the Multi Sorter Position.',
          ko:'그림처럼 Multi Sorter의 Left Picker에 Teaching Pin을 부착합니다. Host P/G ▸ Handler ▸ Map ▸ Indexer 선택 후 Reference Tray를 Rail에 올려 Clamp하고 Multi Sorter Position으로 이동합니다.',
          zhCN:'如图将Teaching Pin安装到Multi Sorter的Left Picker上。Host P/G ▸ Handler ▸ Map ▸ 选择Indexer,将Reference Tray放到Rail上并Clamp,然后移动到Multi Sorter Position。',
          zhTW:'如圖將Teaching Pin安裝到Multi Sorter的Left Picker上。Host P/G ▸ Handler ▸ Map ▸ 選擇Indexer,將Reference Tray放到Rail上並Clamp,然後移動到Multi Sorter Position。',
          ja:'図のようにMulti SorterのLeft PickerにTeaching Pinを取り付けます。Host P/G ▸ Handler ▸ Map ▸ Indexerを選択し、Reference TrayをRailに置いてClampし、Multi Sorter Positionへ移動します。'
        }},
        {img:cmImg('F','nbga',79),tx:{
          vi:'Host P/G ▸ Handler ▸ Map ▸ chọn Multi Sorter, di chuyển đến vị trí X cần Teaching, và bật Left Picker Down Sol.',
          en:'Host P/G ▸ Handler ▸ Map ▸ select Multi Sorter, move to the X Position to teach, and turn on the Left Picker Down Sol.',
          ko:'Host P/G ▸ Handler ▸ Map ▸ Multi Sorter 선택 후 Teaching할 X Position으로 이동하고 Left Picker Down Sol을 켭니다.',
          zhCN:'Host P/G ▸ Handler ▸ Map ▸ 选择Multi Sorter,移动到要Teaching的X Position并开启Left Picker Down Sol。',
          zhTW:'Host P/G ▸ Handler ▸ Map ▸ 選擇Multi Sorter,移動到要Teaching的X Position並開啟Left Picker Down Sol。',
          ja:'Host P/G ▸ Handler ▸ Map ▸ Multi Sorterを選択し、TeachingするX Positionへ移動してLeft Picker Down SolをONにします。'
        }},
        {img:cmImg('F','nbga',80),tx:{
          vi:'Hạ trục Z đến khi Teaching Pin chạm Reference Tray, sau đó di chuyển Multi Sorter X và Indexer sao cho Pin khớp với đường Cross Line. (Lưu ý: khi trục Z đang hạ, trục X không di chuyển được.)',
          en:'Lower the Z-axis until the teaching pin touches the reference tray, then move the Multi Sorter X and Indexer so the pin matches the cross line. (Note: while the Z-axis is lowered, the X-axis does not move.)',
          ko:'Teaching Pin이 Reference Tray에 닿을 때까지 Z축을 내린 뒤, Pin이 십자선(Cross Line)에 맞도록 Multi Sorter X와 Indexer를 이동합니다. (Z축을 내리는 동안 X축은 움직이지 않음)',
          zhCN:'降低Z轴直到Teaching Pin接触Reference Tray,然后移动Multi Sorter X与Indexer使Pin对准十字线(Cross Line)。(降低Z轴期间X轴不会移动)',
          zhTW:'降低Z軸直到Teaching Pin接觸Reference Tray,然後移動Multi Sorter X與Indexer使Pin對準十字線(Cross Line)。(降低Z軸期間X軸不會移動)',
          ja:'Teaching PinがReference Trayに接触するまでZ軸を下げた後、PinがCross Lineに合うようMulti Sorter XとIndexerを移動します。(Z軸降下中はX軸が動きません)'
        }},
        {img:cmImg('F','nbga',81),tx:{
          vi:'Teach và Save vị trí X, Y của Rail. Teaching vị trí Multi Sorter X và Indexer Y cho Rail Good, Buffer, Reject2, Reject3 theo cùng cách.',
          en:'Teach and save the X, Y position of the rail. Teach the Multi Sorter X and Indexer Y positions of the Good, Buffer, Reject2, and Reject3 Rail the same way.',
          ko:'Rail의 X, Y Position을 Teach & Save합니다. Good·Buffer·Reject2·Reject3 Rail의 Multi Sorter X, Indexer Y Position도 동일하게 Teaching합니다.',
          zhCN:'将Rail的X、Y Position进行Teach & Save。Good、Buffer、Reject2、Reject3 Rail的Multi Sorter X、Indexer Y Position也以相同方式进行Teaching。',
          zhTW:'將Rail的X、Y Position進行Teach & Save。Good、Buffer、Reject2、Reject3 Rail的Multi Sorter X、Indexer Y Position也以相同方式進行Teaching。',
          ja:'RailのX、Y PositionをTeach & Saveします。Good・Buffer・Reject2・Reject3 RailのMulti Sorter X、Indexer Y Positionも同様にTeachingします。'
        }},
        {img:cmImg('F','nbga',82),tx:{
          vi:'Teaching Pin không được tạo áp lực lên Tray. (VD: nếu vị trí Z hiện tại là 11.5mm, Z Pick Position là 12.5mm và Z Place Position là 10.5mm.) Teaching vị trí Z cho Good, Buffer, Reject2, Reject3 theo cùng cách.',
          en:'The teaching pin must apply no pressure to the tray. (E.g., if the current Z position is 11.5mm, the Z Pick Position is 12.5mm and the Z Place Position is 10.5mm.) Teach the Good, Buffer, Reject2, and Reject3 Z positions the same way.',
          ko:'Teaching Pin은 Tray에 압력이 가해지지 않는 위치여야 합니다. (예: 현재 Z Position이 11.5mm이면 Z Pick Position은 12.5mm, Z Place Position은 10.5mm) Good·Buffer·Reject2·Reject3의 Z Position도 동일하게 Teaching합니다.',
          zhCN:'Teaching Pin须处于不对Tray施加压力的位置。(例如:当前Z Position为11.5mm时,Z Pick Position为12.5mm,Z Place Position为10.5mm)Good、Buffer、Reject2、Reject3的Z Position也以相同方式进行Teaching。',
          zhTW:'Teaching Pin須處於不對Tray施加壓力的位置。(例如:目前Z Position為11.5mm時,Z Pick Position為12.5mm,Z Place Position為10.5mm)Good、Buffer、Reject2、Reject3的Z Position也以相同方式進行Teaching。',
          ja:'Teaching PinはTrayに圧力がかからない位置である必要があります。(例:現在のZ Positionが11.5mmの場合、Z Pick Positionは12.5mm、Z Place Positionは10.5mm)Good・Buffer・Reject2・Reject3のZ Positionも同様にTeachingします。'
        }},
        {img:cmImg('F','nbga',83),tx:{
          vi:'Chương này giới thiệu Handler Teaching — quy trình Teaching vị trí cho Elevator, Tray Sorter Module (TSM), Tray Transfer Module (TTM), Multi Sorter, 3D Inspector và 2D Inspector.',
          en:'This chapter covers Handler Teaching — the position-teaching sequence for the Elevator, Tray Sorter Module (TSM), Tray Transfer Module (TTM), Multi Sorter, 3D Inspector, and 2D Inspector.',
          ko:'본 챕터에서는 Handler Teaching — Elevator, Tray Sorter Module(TSM), Tray Transfer Module(TTM), Multi Sorter, 3D Inspector, 2D Inspector의 Position Teaching 절차를 다룹니다.',
          zhCN:'本章介绍Handler Teaching——Elevator、Tray Sorter Module(TSM)、Tray Transfer Module(TTM)、Multi Sorter、3D Inspector、2D Inspector的Position Teaching流程。',
          zhTW:'本章介紹Handler Teaching——Elevator、Tray Sorter Module(TSM)、Tray Transfer Module(TTM)、Multi Sorter、3D Inspector、2D Inspector的Position Teaching流程。',
          ja:'本章ではHandler Teaching——Elevator、Tray Sorter Module(TSM)、Tray Transfer Module(TTM)、Multi Sorter、3D Inspector、2D InspectorのPosition Teaching手順を扱います。'
        }},
        {img:cmImg('F','nbga',84),tx:{
          vi:'E. 3D Inspector — phần này đề cập đến Inspector X,Y Reference Position, Turret X (Left/Right), và Turret X,Y Reference Offset.',
          en:'E. 3D Inspector — this section covers the Inspector X,Y Reference Position, Turret X (Left/Right), and Turret X,Y Reference Offset.',
          ko:'E. 3D Inspector — Inspector X,Y Reference Position, Turret X(Left/Right), Turret X,Y Reference Offset을 다룹니다.',
          zhCN:'E. 3D Inspector——本节介绍Inspector X,Y Reference Position、Turret X(Left/Right)、Turret X,Y Reference Offset。',
          zhTW:'E. 3D Inspector——本節介紹Inspector X,Y Reference Position、Turret X(Left/Right)、Turret X,Y Reference Offset。',
          ja:'E. 3D Inspector——本節ではInspector X,Y Reference Position、Turret X(Left/Right)、Turret X,Y Reference Offsetを扱います。'
        }},
        {img:cmImg('F','nbga',85),tx:{
          vi:'Đây là Teaching vị trí chuẩn X/Y cho hệ quang học 3D. Đặt Reference Tray lên JIG.',
          en:'This is the X/Y reference-position teaching for the 3D optical system. Place a reference tray on the JIG.',
          ko:'3D 광학계의 X/Y Reference Position Teaching입니다. JIG에 Reference Tray를 올립니다.',
          zhCN:'这是3D光学系统的X/Y Reference Position Teaching。将Reference Tray放在JIG上。',
          zhTW:'這是3D光學系統的X/Y Reference Position Teaching。將Reference Tray放在JIG上。',
          ja:'3D光学系のX/Y Reference Position Teachingです。JIGにReference Trayを置きます。'
        }},
        {img:cmImg('F','nbga',86),tx:{
          vi:'Host P/G ▸ Handler ▸ Map ▸ chọn JIG1, bật X Push Sol, Y Push Sol và Inner Clamp, và xác nhận Reference Tray áp sát Pin Jig như hình.',
          en:'Host P/G ▸ Handler ▸ Map ▸ select JIG1, turn on the X Push Sol, Y Push Sol, and Inner Clamp, and confirm the reference tray is in close contact with the jig pin as shown.',
          ko:'Host P/G ▸ Handler ▸ Map ▸ JIG1 선택 후 X Push Sol·Y Push Sol·Inner Clamp를 켜고, 그림처럼 Reference Tray가 JIG Pin에 밀착되었는지 확인합니다.',
          zhCN:'Host P/G ▸ Handler ▸ Map ▸ 选择JIG1,开启X Push Sol、Y Push Sol、Inner Clamp,并如图确认Reference Tray与JIG Pin紧密贴合。',
          zhTW:'Host P/G ▸ Handler ▸ Map ▸ 選擇JIG1,開啟X Push Sol、Y Push Sol、Inner Clamp,並如圖確認Reference Tray與JIG Pin緊密貼合。',
          ja:'Host P/G ▸ Handler ▸ Map ▸ JIG1を選択し、X Push Sol・Y Push Sol・Inner ClampをONにして、図のようにReference TrayがJIG Pinに密着しているか確認します。'
        }},
        {img:cmImg('F','nbga',87),tx:{
          vi:'Kết nối đến 3D Vision PC từ Host PC bằng chương trình Remote Desktop. (IP 3D Vision#1 PC: 10.10.1.11, IP 3D Vision#2 PC: 10.10.1.21)',
          en:'Connect to the 3D Vision PC from the Host PC using a remote desktop program. (3D Vision#1 PC IP: 10.10.1.11, 3D Vision#2 PC IP: 10.10.1.21)',
          ko:'Host PC에서 원격 데스크톱 프로그램으로 3D Vision PC에 접속합니다. (3D Vision#1 PC IP: 10.10.1.11, 3D Vision#2 PC IP: 10.10.1.21)',
          zhCN:'从Host PC使用远程桌面程序连接3D Vision PC。(3D Vision#1 PC IP:10.10.1.11,3D Vision#2 PC IP:10.10.1.21)',
          zhTW:'從Host PC使用遠端桌面程式連接3D Vision PC。(3D Vision#1 PC IP:10.10.1.11,3D Vision#2 PC IP:10.10.1.21)',
          ja:'Host PCからリモートデスクトッププログラムで3D Vision PCに接続します。(3D Vision#1 PC IP:10.10.1.11、3D Vision#2 PC IP:10.10.1.21)'
        }},
        {img:cmImg('F','nbga',88),tx:{
          vi:'Chạy Vision Program trên 3D Vision PC và nhấn Illumination Control.',
          en:'Run the vision program on the 3D Vision PC and click Illumination Control.',
          ko:'3D Vision PC에서 Vision 프로그램을 실행하고 Illumination Control을 클릭합니다.',
          zhCN:'在3D Vision PC上运行Vision程序并点击Illumination Control。',
          zhTW:'在3D Vision PC上執行Vision程式並點擊Illumination Control。',
          ja:'3D Vision PCでVisionプログラムを実行し、Illumination Controlをクリックします。'
        }},
        {img:cmImg('F','nbga',89),tx:{
          vi:'Bật đèn.',
          en:'Turn on the light.',
          ko:'조명(Light)을 켭니다.',
          zhCN:'打开照明(Light)。',
          zhTW:'打開照明(Light)。',
          ja:'照明(Light)をONにします。'
        }},
        {img:cmImg('F','nbga',90),tx:{
          vi:'Di chuyển đến X, Y Reference Position, chạy AF Program, và hạ vị trí Z đến khi ảnh rõ nét nhất.',
          en:'Move to the X, Y Reference Position, run the AF Program, and lower the Z position until the image is sharpest.',
          ko:'X, Y Reference Position으로 이동한 뒤 AF Program을 실행하고, 화면이 가장 선명하게 보이도록 Z Position을 내립니다.',
          zhCN:'移动到X、Y Reference Position后运行AF Program,降低Z Position直至画面最清晰。',
          zhTW:'移動到X、Y Reference Position後執行AF Program,降低Z Position直至畫面最清晰。',
          ja:'X、Y Reference Positionへ移動後AF Programを実行し、画像が最も鮮明になるようZ Positionを下げます。'
        }},
        {img:cmImg('F','nbga',91),tx:{
          vi:'Nhấp chuột phải vào ảnh để bật "Show image center line", sau đó chỉnh vị trí X, Y của Module quang học 3D sao cho đường tâm khớp với đường Cross Line của Reference Tray.',
          en:'Right-click the image to enable "Show image center line", then adjust the 3D optical module\'s X and Y position so the center cross line matches the reference tray\'s cross line.',
          ko:'화면을 우클릭하여 "Show image center line" 옵션을 켠 뒤, 3D 광학 모듈의 X, Y 위치를 조정해 Center Cross Line과 Reference Tray의 십자선을 일치시킵니다.',
          zhCN:'右键点击画面启用"Show image center line"选项,然后调整3D光学模块的X、Y位置,使中心十字线与Reference Tray的十字线对齐。',
          zhTW:'右鍵點擊畫面啟用「Show image center line」選項,然後調整3D光學模組的X、Y位置,使中心十字線與Reference Tray的十字線對齊。',
          ja:'画像を右クリックして「Show image center line」オプションをONにし、3D光学モジュールのX、Y位置を調整して中心十字線とReference Trayの十字線を一致させます。'
        }},
        {img:cmImg('F','nbga',92),tx:{
          vi:'Teach và Save vị trí X hiện tại làm JIG X Reference Position.',
          en:'Teach and save the current X position as the JIG X Reference Position.',
          ko:'현재 X Position을 Teach & Save하여 JIG X Reference Position으로 저장합니다.',
          zhCN:'将当前X Position进行Teach & Save,保存为JIG X Reference Position。',
          zhTW:'將目前X Position進行Teach & Save,儲存為JIG X Reference Position。',
          ja:'現在のX PositionをTeach & SaveしてJIG X Reference Positionとして保存します。'
        }},
        {img:cmImg('F','nbga',93),tx:{
          vi:'Teach và Save vị trí Y hiện tại làm JIG Y Reference Position.',
          en:'Teach and save the current Y position as the JIG Y Reference Position.',
          ko:'현재 Y Position을 Teach & Save하여 JIG Y Reference Position으로 저장합니다.',
          zhCN:'将当前Y Position进行Teach & Save,保存为JIG Y Reference Position。',
          zhTW:'將目前Y Position進行Teach & Save,儲存為JIG Y Reference Position。',
          ja:'現在のY PositionをTeach & SaveしてJIG Y Reference Positionとして保存します。'
        }},
        {img:cmImg('F','nbga',94),tx:{
          vi:'E. 3D Inspector — phần này đề cập đến Inspector X,Y Reference Position, Turret X (Left/Right), và Turret X,Y Reference Offset.',
          en:'E. 3D Inspector — this section covers the Inspector X,Y Reference Position, Turret X (Left/Right), and Turret X,Y Reference Offset.',
          ko:'E. 3D Inspector — Inspector X,Y Reference Position, Turret X(Left/Right), Turret X,Y Reference Offset을 다룹니다.',
          zhCN:'E. 3D Inspector——本节介绍Inspector X,Y Reference Position、Turret X(Left/Right)、Turret X,Y Reference Offset。',
          zhTW:'E. 3D Inspector——本節介紹Inspector X,Y Reference Position、Turret X(Left/Right)、Turret X,Y Reference Offset。',
          ja:'E. 3D Inspector——本節ではInspector X,Y Reference Position、Turret X(Left/Right)、Turret X,Y Reference Offsetを扱います。'
        }},
        {img:cmImg('F','nbga',95),tx:{
          vi:'Turret X canh chỉnh trục quang của hệ quang học 3D loại Turret. Quang học Turret có vị trí độ phóng đại 1.0x và vị trí 1.2x/0.8x (hệ quang học đơn Teaching theo cách giống vị trí 1.0x).',
          en:'Turret X aligns the optical axis of a turret-type 3D optical system. Turret optics have a 1.0x magnification position and a 1.2x/0.8x magnification position (single-optics systems are taught the same way as the 1.0x position).',
          ko:'Turret X는 Turret 타입 3D 광학계의 광축을 정렬하는 위치입니다. Turret 광학계는 1.0x 배율 위치와 1.2x/0.8x 배율 위치를 가지며(Single 광학계는 1.0x 위치와 동일한 방식으로 Teaching), 각각 Teaching합니다.',
          zhCN:'Turret X用于对准Turret型3D光学系统的光轴。Turret光学系统具有1.0x倍率位置与1.2x/0.8x倍率位置(Single光学系统按1.0x位置相同方式进行Teaching)。',
          zhTW:'Turret X用於對準Turret型3D光學系統的光軸。Turret光學系統具有1.0x倍率位置與1.2x/0.8x倍率位置(Single光學系統按1.0x位置相同方式進行Teaching)。',
          ja:'Turret XはTurretタイプ3D光学系の光軸を合わせる位置です。Turret光学系には1.0x倍率位置と1.2x/0.8x倍率位置があり(Single光学系は1.0x位置と同じ方法でTeaching)、それぞれTeachingします。'
        }},
        {img:cmImg('F','nbga',96),tx:{
          vi:'Kết nối đến 3D Vision PC từ Host PC bằng chương trình Remote Desktop. (Cùng IP như trước.)',
          en:'Connect to the 3D Vision PC from the Host PC using a remote desktop program. (Same IPs as before.)',
          ko:'Host PC에서 원격 데스크톱 프로그램으로 3D Vision PC에 접속합니다. (앞서와 동일한 IP)',
          zhCN:'从Host PC使用远程桌面程序连接3D Vision PC。(IP与前述相同)',
          zhTW:'從Host PC使用遠端桌面程式連接3D Vision PC。(IP與前述相同)',
          ja:'Host PCからリモートデスクトッププログラムで3D Vision PCに接続します。(IPは前述と同じ)'
        }},
        {img:cmImg('F','nbga',97),tx:{
          vi:'Chạy Vision Program, nhấn Illumination Control, và bật đèn 3D.',
          en:'Run the vision program, click Illumination Control, and turn on the 3D light.',
          ko:'Vision 프로그램을 실행하고 Illumination Control을 클릭한 뒤 3D Light를 켭니다.',
          zhCN:'运行Vision程序,点击Illumination Control,然后打开3D Light。',
          zhTW:'執行Vision程式,點擊Illumination Control,然後打開3D Light。',
          ja:'Visionプログラムを実行し、Illumination Controlをクリックして3D LightをONにします。'
        }},
        {img:cmImg('F','nbga',98),tx:{
          vi:'Host P/G ▸ Handler ▸ Map ▸ chọn FINS (3D Vision#1) hoặc SINS (3D Vision#2), sau đó di chuyển vị trí X của Turret đến khi thấy cạnh Lens độ phóng đại 1.0x trong ảnh.',
          en:'Host P/G ▸ Handler ▸ Map ▸ select FINS (3D Vision#1) or SINS (3D Vision#2), then move the turret X position until the edge of the 1.0x magnification lens is visible in the image.',
          ko:'Host P/G ▸ Handler ▸ Map ▸ FINS(3D Vision#1) 또는 SINS(3D Vision#2) 선택 후, 1.0x 배율 렌즈의 가장자리가 화면에 보일 때까지 Turret X Position을 이동합니다.',
          zhCN:'Host P/G ▸ Handler ▸ Map ▸ 选择FINS(3D Vision#1)或SINS(3D Vision#2),移动Turret X Position直至1.0x倍率镜头边缘出现在画面中。',
          zhTW:'Host P/G ▸ Handler ▸ Map ▸ 選擇FINS(3D Vision#1)或SINS(3D Vision#2),移動Turret X Position直至1.0x倍率鏡頭邊緣出現在畫面中。',
          ja:'Host P/G ▸ Handler ▸ Map ▸ FINS(3D Vision#1)またはSINS(3D Vision#2)を選択し、1.0x倍率レンズの端が画面に見えるまでTurret X Positionを移動します。'
        }},
        {img:cmImg('F','nbga',99),tx:{
          vi:'Bắt đầu từ vị trí cạnh Lens xuất hiện ở một bên ảnh, di chuyển vị trí X của Turret đến khi nó xuất hiện ở bên đối diện. Nếu góc nhìn trên và dưới khác nhau, phải điều chỉnh lại vị trí Lens.',
          en:'Starting from where the lens edge appears on one side of the image, move the turret X position until it appears on the opposite side. If the top and bottom views differ, the lens position itself must be adjusted.',
          ko:'렌즈 가장자리가 화면 한쪽에 나타난 지점에서 시작해 반대쪽에 나타날 때까지 Turret X Position을 이동합니다. 상단·하단 View가 다르면 렌즈 위치 자체를 조정해야 합니다.',
          zhCN:'从镜头边缘出现在画面一侧的位置开始,移动Turret X Position直至出现在相反一侧。若上、下View不同,则需直接调整镜头位置。',
          zhTW:'從鏡頭邊緣出現在畫面一側的位置開始,移動Turret X Position直至出現在相反一側。若上、下View不同,則需直接調整鏡頭位置。',
          ja:'レンズの端が画面の片側に現れた位置から始め、反対側に現れるまでTurret X Positionを移動します。上下のViewが異なる場合はレンズ位置自体を調整する必要があります。'
        }},
        {img:cmImg('F','nbga',100),tx:{
          vi:'Nới lỏng các Bolt ① giữ Lens để có thể di chuyển, sau đó chỉnh Bolt ② sao cho vùng ③ trên và dưới của video Live bên phải khớp nhau.',
          en:'Loosen the ① bolts holding the lens so it can move, then adjust the ② bolts so the top and bottom ③ areas of the right live video match.',
          ko:'렌즈를 고정하는 ①번 볼트를 풀어 움직일 수 있게 한 뒤, ②번 볼트로 우측 Live 영상의 상·하 ③번 영역이 같아지도록 조정합니다.',
          zhCN:'松开固定镜头的①号螺栓使其可移动,然后调整②号螺栓,使右侧Live影像的上下③号区域一致。',
          zhTW:'鬆開固定鏡頭的①號螺栓使其可移動,然後調整②號螺栓,使右側Live影像的上下③號區域一致。',
          ja:'レンズを固定する①のボルトを緩めて動かせるようにし、②のボルトで右側Live映像の上下③の領域が同じになるよう調整します。'
        }},
        {img:cmImg('F','nbga',101),tx:{
          vi:'Tính khoảng cách di chuyển và Teaching làm vị trí giữa rồi Save. (Vị trí giữa là −(khoảng cách di chuyển/2) nếu X di chuyển theo [+], hoặc +(khoảng cách di chuyển/2) nếu di chuyển theo [−].) Teaching Turret X Position 1.2x theo cùng cách.',
          en:'Calculate the move distance and teach it as the middle position and save it. (The middle position is −(move distance/2) if X moved in [+], or +(move distance/2) if it moved in [−].) Teach the 1.2x Turret X Position the same way.',
          ko:'이동 거리를 계산해 중간 위치로 Teaching하여 저장합니다. (X가 [+]로 이동했다면 중간 위치는 −(이동거리/2), [−]로 이동했다면 +(이동거리/2)) 1.2x Turret X Position도 동일하게 Teaching합니다.',
          zhCN:'计算移动距离,将其作为中间位置进行Teaching并保存。(若X向[+]方向移动,中间位置为−(移动距离/2);若向[−]方向移动,则为+(移动距离/2))1.2x Turret X Position也以相同方式进行Teaching。',
          zhTW:'計算移動距離,將其作為中間位置進行Teaching並儲存。(若X向[+]方向移動,中間位置為−(移動距離/2);若向[−]方向移動,則為+(移動距離/2))1.2x Turret X Position也以相同方式進行Teaching。',
          ja:'移動距離を計算し、中間位置としてTeachingして保存します。(Xが[+]方向に移動した場合、中間位置は−(移動距離/2)、[−]方向の場合は+(移動距離/2))1.2x Turret X Positionも同様にTeachingします。'
        }},
        {img:cmImg('F','nbga',102),tx:{
          vi:'E. 3D Inspector — phần này đề cập đến Inspector X,Y Reference Position, Turret X (Left/Right), và Turret X,Y Reference Offset.',
          en:'E. 3D Inspector — this section covers the Inspector X,Y Reference Position, Turret X (Left/Right), and Turret X,Y Reference Offset.',
          ko:'E. 3D Inspector — Inspector X,Y Reference Position, Turret X(Left/Right), Turret X,Y Reference Offset을 다룹니다.',
          zhCN:'E. 3D Inspector——本节介绍Inspector X,Y Reference Position、Turret X(Left/Right)、Turret X,Y Reference Offset。',
          zhTW:'E. 3D Inspector——本節介紹Inspector X,Y Reference Position、Turret X(Left/Right)、Turret X,Y Reference Offset。',
          ja:'E. 3D Inspector——本節ではInspector X,Y Reference Position、Turret X(Left/Right)、Turret X,Y Reference Offsetを扱います。'
        }},
        {img:cmImg('F','nbga',103),tx:{
          vi:'Di chuyển đến Turret X Position 1.2x/0.8x.',
          en:'Move to the Turret X 1.2x/0.8x Position.',
          ko:'Turret X 1.2x/0.8x Position으로 이동합니다.',
          zhCN:'移动到Turret X 1.2x/0.8x Position。',
          zhTW:'移動到Turret X 1.2x/0.8x Position。',
          ja:'Turret X 1.2x/0.8x Positionへ移動します。'
        }},
        {img:cmImg('F','nbga',104),tx:{
          vi:'Tính khoảng cách X và Y mà đường tâm cần di chuyển để đến vị trí chuẩn.',
          en:'Calculate the X and Y distances the centerline needs to travel to reach the reference.',
          ko:'중심선이 Reference까지 이동해야 할 X, Y 거리를 계산합니다.',
          zhCN:'计算中心线到达Reference所需移动的X、Y距离。',
          zhTW:'計算中心線到達Reference所需移動的X、Y距離。',
          ja:'中心線がReferenceまで移動すべきX、Y距離を計算します。'
        }},
        {img:cmImg('F','nbga',105),tx:{
          vi:'Nhập giá trị đã tính vào Host P/G ▸ Setup ▸ System Option ▸ Jig Reference Offset.',
          en:'Enter the calculated value into Host P/G ▸ Setup ▸ System Option ▸ Jig Reference Offset.',
          ko:'계산된 값을 Host P/G ▸ Setup ▸ System Option ▸ Jig Reference Offset에 입력합니다.',
          zhCN:'将计算出的值输入到Host P/G ▸ Setup ▸ System Option ▸ Jig Reference Offset中。',
          zhTW:'將計算出的值輸入到Host P/G ▸ Setup ▸ System Option ▸ Jig Reference Offset中。',
          ja:'計算した値をHost P/G ▸ Setup ▸ System Option ▸ Jig Reference Offsetに入力します。'
        }},
        {img:cmImg('F','nbga',106),tx:{
          vi:'Chương này giới thiệu Handler Teaching — quy trình Teaching vị trí cho Elevator, Tray Sorter Module (TSM), Tray Transfer Module (TTM), Multi Sorter, 3D Inspector và 2D Inspector.',
          en:'This chapter covers Handler Teaching — the position-teaching sequence for the Elevator, Tray Sorter Module (TSM), Tray Transfer Module (TTM), Multi Sorter, 3D Inspector, and 2D Inspector.',
          ko:'본 챕터에서는 Handler Teaching — Elevator, Tray Sorter Module(TSM), Tray Transfer Module(TTM), Multi Sorter, 3D Inspector, 2D Inspector의 Position Teaching 절차를 다룹니다.',
          zhCN:'本章介绍Handler Teaching——Elevator、Tray Sorter Module(TSM)、Tray Transfer Module(TTM)、Multi Sorter、3D Inspector、2D Inspector的Position Teaching流程。',
          zhTW:'本章介紹Handler Teaching——Elevator、Tray Sorter Module(TSM)、Tray Transfer Module(TTM)、Multi Sorter、3D Inspector、2D Inspector的Position Teaching流程。',
          ja:'本章ではHandler Teaching——Elevator、Tray Sorter Module(TSM)、Tray Transfer Module(TTM)、Multi Sorter、3D Inspector、2D InspectorのPosition Teaching手順を扱います。'
        }},
        {img:cmImg('F','nbga',107),tx:{
          vi:'F. 2D Inspector — phần này đề cập đến Inspector X, Y, Z Load Rail.',
          en:'F. 2D Inspector — this section covers the Inspector X, Y, Z Load Rail.',
          ko:'F. 2D Inspector — Inspector X, Y, Z Load Rail을 다룹니다.',
          zhCN:'F. 2D Inspector——本节介绍Inspector X, Y, Z Load Rail。',
          zhTW:'F. 2D Inspector——本節介紹Inspector X, Y, Z Load Rail。',
          ja:'F. 2D Inspector——本節ではInspector X, Y, Z Load Railを扱います。'
        }},
        {img:cmImg('F','nbga',108),tx:{
          vi:'Inspector X Reference Position canh tâm Camera khớp với đường Cross Line của Reference Tray. Chuẩn bị Reference Tray.',
          en:'The Inspector X Reference Position matches the camera center with the reference tray\'s cross line. Prepare a reference tray.',
          ko:'Inspector X Reference Position은 Camera 중심과 Reference Tray의 십자선을 일치시키는 위치입니다. Reference Tray를 준비합니다.',
          zhCN:'Inspector X Reference Position是使Camera中心与Reference Tray十字线对齐的位置。请准备Reference Tray。',
          zhTW:'Inspector X Reference Position是使Camera中心與Reference Tray十字線對齊的位置。請準備Reference Tray。',
          ja:'Inspector X Reference PositionはCamera中心とReference Trayの十字線を一致させる位置です。Reference Trayを準備します。'
        }},
        {img:cmImg('F','nbga',109),tx:{
          vi:'Đặt Reference Tray lên Load Rail như hình. Host P/G ▸ Handler ▸ Map ▸ chọn Load Indexer 1, bật B/W và F/W Clamp để cố định Tray, sau đó di chuyển đến Indexer Y Top Inspection Position.',
          en:'Place the reference tray on the Load Rail as shown. Host P/G ▸ Handler ▸ Map ▸ select Load Indexer 1, turn on the B/W and F/W Clamps to fasten the tray, then move to the Indexer Y Top Inspection Position.',
          ko:'그림처럼 Reference Tray를 Load Rail에 올립니다. Host P/G ▸ Handler ▸ Map ▸ Load Indexer 1 선택 후 B/W·F/W Clamp를 켜서 Tray를 고정하고 Indexer Y Top Inspection Position으로 이동합니다.',
          zhCN:'如图将Reference Tray放在Load Rail上。Host P/G ▸ Handler ▸ Map ▸ 选择Load Indexer 1,开启B/W、F/W Clamp固定Tray,然后移动到Indexer Y Top Inspection Position。',
          zhTW:'如圖將Reference Tray放在Load Rail上。Host P/G ▸ Handler ▸ Map ▸ 選擇Load Indexer 1,開啟B/W、F/W Clamp固定Tray,然後移動到Indexer Y Top Inspection Position。',
          ja:'図のようにReference TrayをLoad Railに置きます。Host P/G ▸ Handler ▸ Map ▸ Load Indexer 1を選択し、B/W・F/W ClampをONにしてTrayを固定し、Indexer Y Top Inspection Positionへ移動します。'
        }},
        {img:cmImg('F','nbga',110),tx:{
          vi:'Host P/G ▸ Handler ▸ Map ▸ chọn Top 2D Inspector, sau đó di chuyển đến Inspector X Reference Position.',
          en:'Host P/G ▸ Handler ▸ Map ▸ select Top 2D Inspector, then move to the Inspector X Reference Position.',
          ko:'Host P/G ▸ Handler ▸ Map ▸ Top 2D Inspector 선택 후 Inspector X Reference Position으로 이동합니다.',
          zhCN:'Host P/G ▸ Handler ▸ Map ▸ 选择Top 2D Inspector,移动到Inspector X Reference Position。',
          zhTW:'Host P/G ▸ Handler ▸ Map ▸ 選擇Top 2D Inspector,移動到Inspector X Reference Position。',
          ja:'Host P/G ▸ Handler ▸ Map ▸ Top 2D Inspectorを選択し、Inspector X Reference Positionへ移動します。'
        }},
        {img:cmImg('F','nbga',111),tx:{
          vi:'Hạ vị trí Z đến khi ảnh rõ nét nhất.',
          en:'Lower the Z position until the image is sharpest.',
          ko:'화면이 가장 선명해질 때까지 Z Position을 내립니다.',
          zhCN:'降低Z Position直至画面最清晰。',
          zhTW:'降低Z Position直至畫面最清晰。',
          ja:'画像が最も鮮明になるまでZ Positionを下げます。'
        }},
        {img:cmImg('F','nbga',112),tx:{
          vi:'Teach và Save vị trí Z hiện tại làm Inspection Z Position.',
          en:'Teach and save the current Z position as the Inspection Z Position.',
          ko:'현재 Z Position을 Teach & Save하여 Inspection Z Position으로 저장합니다.',
          zhCN:'将当前Z Position进行Teach & Save,保存为Inspection Z Position。',
          zhTW:'將目前Z Position進行Teach & Save,儲存為Inspection Z Position。',
          ja:'現在のZ PositionをTeach & SaveしてInspection Z Positionとして保存します。'
        }},
        {img:cmImg('F','nbga',113),tx:{
          vi:'Nhấp chuột phải vào ảnh để bật đường tâm, sau đó di chuyển X của Top 2D Inspector và Y của Load Indexer 1 sao cho đường Cross Line của Reference Tray khớp với đường tâm ảnh Live.',
          en:'Right-click the image to enable the center line, then move the Top 2D Inspector\'s X and Load Indexer 1\'s Y so the reference tray\'s cross line matches the live image\'s center cross line.',
          ko:'화면을 우클릭해 중심선(Center Line)을 켠 뒤, Top 2D Inspector의 X와 Load Indexer 1의 Y를 이동시켜 Reference Tray 십자선과 Live 화면 중심선을 일치시킵니다.',
          zhCN:'右键点击画面启用中心线,然后移动Top 2D Inspector的X与Load Indexer 1的Y,使Reference Tray十字线与Live画面中心线对齐。',
          zhTW:'右鍵點擊畫面啟用中心線,然後移動Top 2D Inspector的X與Load Indexer 1的Y,使Reference Tray十字線與Live畫面中心線對齊。',
          ja:'画像を右クリックして中心線を有効にし、Top 2D InspectorのXとLoad Indexer 1のYを動かして、Reference Trayの十字線とLive画面の中心線を一致させます。'
        }},
        {img:cmImg('F','nbga',114),tx:{
          vi:'Teach và Save vị trí X hiện tại làm Inspector X Reference Position.',
          en:'Teach and save the current X position as the Inspector X Reference Position.',
          ko:'현재 X Position을 Teach & Save하여 Inspector X Reference Position으로 저장합니다.',
          zhCN:'将当前X Position进行Teach & Save,保存为Inspector X Reference Position。',
          zhTW:'將目前X Position進行Teach & Save,儲存為Inspector X Reference Position。',
          ja:'現在のX PositionをTeach & SaveしてInspector X Reference Positionとして保存します。'
        }},
        {img:cmImg('F','nbga',115),tx:{
          vi:'Host P/G ▸ Handler ▸ Map ▸ chọn Load Indexer 1, Teach và Save vị trí Y hiện tại làm Top Inspection Position; Teaching Load Indexer 2 theo cùng cách, cùng với vị trí X, Y, Z của Gray Target và Grid Target. (Tuân theo lưu ý khi Teaching vị trí Y.)',
          en:'Host P/G ▸ Handler ▸ Map ▸ select Load Indexer 1, teach and save the current Y position as the Top Inspection Position; teach Load Indexer 2 the same way, along with the Gray Target and Grid Target X, Y, Z Positions. (Follow the noted precautions when teaching the Y position.)',
          ko:'Host P/G ▸ Handler ▸ Map ▸ Load Indexer 1 선택 후 현재 Y Position을 Teach & Save하여 Top Inspection Position으로 저장합니다. Load Indexer 2, 그리고 Gray Target·Grid Target의 X, Y, Z Position도 동일하게 Teaching합니다. (Y Position Teaching 시 주의사항 준수)',
          zhCN:'Host P/G ▸ Handler ▸ Map ▸ 选择Load Indexer 1,将当前Y Position进行Teach & Save,保存为Top Inspection Position。Load Indexer 2以及Gray Target、Grid Target的X、Y、Z Position也以相同方式进行Teaching。(Teaching Y Position时请遵守相关注意事项)',
          zhTW:'Host P/G ▸ Handler ▸ Map ▸ 選擇Load Indexer 1,將目前Y Position進行Teach & Save,儲存為Top Inspection Position。Load Indexer 2以及Gray Target、Grid Target的X、Y、Z Position也以相同方式進行Teaching。(Teaching Y Position時請遵守相關注意事項)',
          ja:'Host P/G ▸ Handler ▸ Map ▸ Load Indexer 1を選択し、現在のY PositionをTeach & SaveしてTop Inspection Positionとして保存します。Load Indexer 2、およびGray Target・Grid TargetのX、Y、Z Positionも同様にTeachingします。(Y Position Teaching時の注意事項を遵守)'
        }},
        {img:cmImg('F','nbga',116),tx:{
          vi:'Tiếp theo: LTS Target Position — Teaching các Target dùng để xác minh Long Term Stability.',
          en:'Next: LTS Target Position — teaching the targets used for Long Term Stability verification.',
          ko:'다음: LTS Target Position — Long Term Stability 검증에 사용하는 Target들의 Teaching을 다룹니다.',
          zhCN:'接下来:LTS Target Position——介绍用于Long Term Stability验证的Target的Teaching。',
          zhTW:'接下來:LTS Target Position——介紹用於Long Term Stability驗證的Target的Teaching。',
          ja:'次へ:LTS Target Position——Long Term Stability検証に使用するTargetのTeachingを扱います。'
        }},
        {img:cmImg('F','nbga',117),tx:{
          vi:'LTS Target Position — LTS Job Open, Gray Target Setting, Grid Target Setting, Step Height Target Setting.',
          en:'LTS Target Position — LTS Job Open, Gray Target Setting, Grid Target Setting, Step Height Target Setting.',
          ko:'LTS Target Position — LTS Job Open, Gray Target Setting, Grid Target Setting, Step Height Target Setting.',
          zhCN:'LTS Target Position——LTS Job Open、Gray Target Setting、Grid Target Setting、Step Height Target Setting。',
          zhTW:'LTS Target Position——LTS Job Open、Gray Target Setting、Grid Target Setting、Step Height Target Setting。',
          ja:'LTS Target Position——LTS Job Open、Gray Target Setting、Grid Target Setting、Step Height Target Setting。'
        }},
        {img:cmImg('F','nbga',118),tx:{
          vi:'1.3.2.A LTS Job Open — nhấn Setup ▸ Job Open, sau đó chọn file Job \'LTS\'.',
          en:'1.3.2.A LTS Job Open — click Setup ▸ Job Open, then choose the \'LTS\' job file.',
          ko:'1.3.2.A LTS Job Open — Setup ▸ Job Open을 클릭하고 \'LTS\' Job File을 선택합니다.',
          zhCN:'1.3.2.A LTS Job Open——点击Setup ▸ Job Open,选择\'LTS\' Job File。',
          zhTW:'1.3.2.A LTS Job Open——點擊Setup ▸ Job Open,選擇\'LTS\' Job File。',
          ja:'1.3.2.A LTS Job Open——Setup ▸ Job Openをクリックし、\'LTS\' Job Fileを選択します。'
        }},
        {img:cmImg('F','nbga',119),tx:{
          vi:'LTS Target Position — LTS Job Open, Gray Target Setting, Grid Target Setting, Step Height Target Setting.',
          en:'LTS Target Position — LTS Job Open, Gray Target Setting, Grid Target Setting, Step Height Target Setting.',
          ko:'LTS Target Position — LTS Job Open, Gray Target Setting, Grid Target Setting, Step Height Target Setting.',
          zhCN:'LTS Target Position——LTS Job Open、Gray Target Setting、Grid Target Setting、Step Height Target Setting。',
          zhTW:'LTS Target Position——LTS Job Open、Gray Target Setting、Grid Target Setting、Step Height Target Setting。',
          ja:'LTS Target Position——LTS Job Open、Gray Target Setting、Grid Target Setting、Step Height Target Setting。'
        }},
        {img:cmImg('F','nbga',120),tx:{
          vi:'Gray Target — di chuyển Jig Table (Y-axis) và Vision Module (X-axis) sao cho Gray Target nằm giữa màn hình Module quang học. Đặt vị trí X,Y của Gray Target trên mỗi Vision Map. (FINS: 3D V1, SINS: 3D V2)',
          en:'Gray Target — move the Jig table (Y-axis) and Vision Module (X-axis) so the Gray Target is centered on the optical module\'s screen. Set the Gray Target X,Y position on each vision map. (FINS: 3D V1, SINS: 3D V2)',
          ko:'Gray Target — Jig Table(Y축)과 Vision Module(X축)을 이동시켜 Gray Target이 광학 모듈 화면 중앙에 오도록 맞춥니다. 각 Vision Map(FINS: 3D V1, SINS: 3D V2)에서 Gray Target X,Y 위치를 설정합니다.',
          zhCN:'Gray Target——移动Jig Table(Y轴)与Vision Module(X轴),使Gray Target位于光学模块画面中央。在各Vision Map(FINS:3D V1,SINS:3D V2)上设置Gray Target X,Y位置。',
          zhTW:'Gray Target——移動Jig Table(Y軸)與Vision Module(X軸),使Gray Target位於光學模組畫面中央。在各Vision Map(FINS:3D V1,SINS:3D V2)上設定Gray Target X,Y位置。',
          ja:'Gray Target——Jig Table(Y軸)とVision Module(X軸)を動かし、Gray Targetが光学モジュール画面中央に来るよう合わせます。各Vision Map(FINS:3D V1、SINS:3D V2)でGray Target X,Y位置を設定します。'
        }},
        {img:cmImg('F','nbga',121),tx:{
          vi:'Dùng AF Program để lấy nét trục Z, sau đó lưu vị trí hiện tại làm Gray Target Z Reference Pos.',
          en:'Use the AF program to focus the Z-axis, then save the current position as the Gray Target Z Reference Pos.',
          ko:'AF Program으로 Z축 초점을 맞춘 뒤 현재 위치를 Gray Target Z Reference Pos로 저장합니다.',
          zhCN:'使用AF Program对Z轴进行对焦,然后将当前位置保存为Gray Target Z Reference Pos。',
          zhTW:'使用AF Program對Z軸進行對焦,然後將目前位置儲存為Gray Target Z Reference Pos。',
          ja:'AF ProgramでZ軸のピントを合わせ、現在の位置をGray Target Z Reference Posとして保存します。'
        }},
        {img:cmImg('F','nbga',122),tx:{
          vi:'Chọn Frame \'3D_Img2\' trong cửa sổ thiết lập Illumination, sau đó nhấp chuột phải màn hình Live và chọn \'Show pixel info\'.',
          en:'Select the \'3D_Img2\' frame in the Illumination settings window, then right-click the live screen and select \'Show pixel info\'.',
          ko:'Illumination 설정 창에서 \'3D_Img2\' Frame을 선택하고, Live 화면을 우클릭해 \'Show pixel info\'를 선택합니다.',
          zhCN:'在Illumination设置窗口选择\'3D_Img2\' Frame,然后右键点击Live画面选择\'Show pixel info\'。',
          zhTW:'在Illumination設定視窗選擇\'3D_Img2\' Frame,然後右鍵點擊Live畫面選擇\'Show pixel info\'。',
          ja:'Illumination設定ウィンドウで\'3D_Img2\' Frameを選択し、Live画面を右クリックして\'Show pixel info\'を選択します。'
        }},
        {img:cmImg('F','nbga',123),tx:{
          vi:'Di chuyển chuột trên màn hình LIVE sẽ hiện giá trị RGB. Nếu cao hơn hoặc thấp hơn 160, dùng Intensity Control trong thiết lập chiếu sáng 3D để hiệu chỉnh về khoảng 160.',
          en:'Moving the mouse over the LIVE screen shows the RGB value. If it is above or below 160, use Intensity Control in the 3D lighting settings to correct it to about 160.',
          ko:'LIVE 화면 위에서 마우스를 움직이면 RGB 값을 확인할 수 있습니다. 값이 160보다 높거나 낮으면 3D 조명 설정의 Intensity Control로 보정하여 약 160이 되도록 맞춥니다.',
          zhCN:'在LIVE画面上移动鼠标可查看RGB值。若数值高于或低于160,请在3D照明设置中使用Intensity Control校正,使其约为160。',
          zhTW:'在LIVE畫面上移動滑鼠可查看RGB值。若數值高於或低於160,請在3D照明設定中使用Intensity Control校正,使其約為160。',
          ja:'LIVE画面上でマウスを動かすとRGB値を確認できます。値が160より高いか低い場合は、3D照明設定のIntensity Controlで補正し、約160になるよう調整します。'
        }},
        {img:cmImg('F','nbga',124),tx:{
          vi:'Nhấn Utility ▸ Display, áp dụng Grid Count Setting như hình, đặt Illum ROI như hình, sau đó nhấn Apply.',
          en:'Click Utility ▸ Display, apply the Grid Count Setting as shown, set the Illum ROI as shown, then click Apply.',
          ko:'Utility ▸ Display를 클릭하고 그림처럼 Grid Count Setting을 적용, Illum ROI를 설정한 뒤 Apply를 클릭합니다.',
          zhCN:'点击Utility ▸ Display,如图应用Grid Count Setting,设置Illum ROI后点击Apply。',
          zhTW:'點擊Utility ▸ Display,如圖套用Grid Count Setting,設定Illum ROI後點擊Apply。',
          ja:'Utility ▸ Displayをクリックし、図のようにGrid Count Settingを適用、Illum ROIを設定してApplyをクリックします。'
        }},
        {img:cmImg('F','nbga',125),tx:{
          vi:'LTS Target Position — LTS Job Open, Gray Target Setting, Grid Target Setting, Step Height Target Setting.',
          en:'LTS Target Position — LTS Job Open, Gray Target Setting, Grid Target Setting, Step Height Target Setting.',
          ko:'LTS Target Position — LTS Job Open, Gray Target Setting, Grid Target Setting, Step Height Target Setting.',
          zhCN:'LTS Target Position——LTS Job Open、Gray Target Setting、Grid Target Setting、Step Height Target Setting。',
          zhTW:'LTS Target Position——LTS Job Open、Gray Target Setting、Grid Target Setting、Step Height Target Setting。',
          ja:'LTS Target Position——LTS Job Open、Gray Target Setting、Grid Target Setting、Step Height Target Setting。'
        }},
        {img:cmImg('F','nbga',126),tx:{
          vi:'Grid Target Setting — di chuyển Jig Table (Y-axis) và Vision Module (X-axis) sao cho Matrix Target nằm giữa màn hình Module quang học. Đặt vị trí X,Y của Grid Target trên mỗi Vision Map. (FINS: 3D V1, SINS: 3D V2)',
          en:'Grid Target Setting — move the Jig table (Y-axis) and Vision Module (X-axis) so the Matrix Target is centered on the optical module\'s screen. Set the Grid Target X,Y position on each vision map. (FINS: 3D V1, SINS: 3D V2)',
          ko:'Grid Target Setting — Jig Table(Y축)과 Vision Module(X축)을 이동시켜 Matrix Target이 광학 모듈 화면 중앙에 오도록 맞춥니다. 각 Vision Map(FINS: 3D V1, SINS: 3D V2)에서 Grid Target X,Y 위치를 설정합니다.',
          zhCN:'Grid Target Setting——移动Jig Table(Y轴)与Vision Module(X轴),使Matrix Target位于光学模块画面中央。在各Vision Map(FINS:3D V1,SINS:3D V2)上设置Grid Target X,Y位置。',
          zhTW:'Grid Target Setting——移動Jig Table(Y軸)與Vision Module(X軸),使Matrix Target位於光學模組畫面中央。在各Vision Map(FINS:3D V1,SINS:3D V2)上設定Grid Target X,Y位置。',
          ja:'Grid Target Setting——Jig Table(Y軸)とVision Module(X軸)を動かし、Matrix Targetが光学モジュール画面中央に来るよう合わせます。各Vision Map(FINS:3D V1、SINS:3D V2)でGrid Target X,Y位置を設定します。'
        }},
        {img:cmImg('F','nbga',127),tx:{
          vi:'Dùng AF Program để lấy nét trục Z và lưu vị trí hiện tại làm Grid Target Z Reference Pos, sau đó Teaching vị trí X và Y.',
          en:'Use the AF program to focus the Z-axis and save the current position as the Grid Target Z Reference Pos, then teach the X and Y positions.',
          ko:'AF Program으로 Z축 초점을 맞춰 현재 위치를 Grid Target Z Reference Pos로 저장하고, X, Y 위치도 Teaching합니다.',
          zhCN:'使用AF Program对Z轴进行对焦,将当前位置保存为Grid Target Z Reference Pos,并对X、Y位置进行Teaching。',
          zhTW:'使用AF Program對Z軸進行對焦,將目前位置儲存為Grid Target Z Reference Pos,並對X、Y位置進行Teaching。',
          ja:'AF ProgramでZ軸のピントを合わせ、現在の位置をGrid Target Z Reference Posとして保存し、X、Y位置もTeachingします。'
        }},
        {img:cmImg('F','nbga',128),tx:{
          vi:'Chỉnh giá trị \'2D_Img1\' như hình. Đặt vị trí tâm trong khi xem ảnh Live của Grid Target (X,Y), và xác nhận Target đã lấy nét (Z).',
          en:'Adjust the \'2D_Img1\' value as shown. Set the center position while watching the grid target live image (X,Y), and confirm the target is in focus (Z).',
          ko:'그림처럼 \'2D_Img1\' 값을 조정합니다. Grid Target Live 화면을 보며 중심 위치(X,Y)를 맞추고, 초점이 맞았는지(Z) 확인합니다.',
          zhCN:'如图调整\'2D_Img1\'的值。观察Grid Target Live画面设置中心位置(X,Y),并确认对焦(Z)。',
          zhTW:'如圖調整\'2D_Img1\'的值。觀察Grid Target Live畫面設定中心位置(X,Y),並確認對焦(Z)。',
          ja:'図のように\'2D_Img1\'の値を調整します。Grid Target Live画面を見ながら中心位置(X,Y)を合わせ、ピントが合っているか(Z)確認します。'
        }},
        {img:cmImg('F','nbga',129),tx:{
          vi:'LTS Target Position — LTS Job Open, Gray Target Setting, Grid Target Setting, Step Height Target Setting.',
          en:'LTS Target Position — LTS Job Open, Gray Target Setting, Grid Target Setting, Step Height Target Setting.',
          ko:'LTS Target Position — LTS Job Open, Gray Target Setting, Grid Target Setting, Step Height Target Setting.',
          zhCN:'LTS Target Position——LTS Job Open、Gray Target Setting、Grid Target Setting、Step Height Target Setting。',
          zhTW:'LTS Target Position——LTS Job Open、Gray Target Setting、Grid Target Setting、Step Height Target Setting。',
          ja:'LTS Target Position——LTS Job Open、Gray Target Setting、Grid Target Setting、Step Height Target Setting。'
        }},
        {img:cmImg('F','nbga',130),tx:{
          vi:'Step Height Target Setting — di chuyển Jig Table (Y-axis) và Vision Module (X-axis) sao cho Step Height Target nằm giữa màn hình Module quang học. Đặt vị trí X,Y trên mỗi Vision Map. (FINS: 3D V1, SINS: 3D V2)',
          en:'Step Height Target Setting — move the Jig table (Y-axis) and Vision Module (X-axis) so the Step Height Target is centered on the optical module\'s screen. Set its X,Y position on each vision map. (FINS: 3D V1, SINS: 3D V2)',
          ko:'Step Height Target Setting — Jig Table(Y축)과 Vision Module(X축)을 이동시켜 Step Height Target이 광학 모듈 화면 중앙에 오도록 맞춥니다. 각 Vision Map(FINS: 3D V1, SINS: 3D V2)에서 X,Y 위치를 설정합니다.',
          zhCN:'Step Height Target Setting——移动Jig Table(Y轴)与Vision Module(X轴),使Step Height Target位于光学模块画面中央。在各Vision Map(FINS:3D V1,SINS:3D V2)上设置X,Y位置。',
          zhTW:'Step Height Target Setting——移動Jig Table(Y軸)與Vision Module(X軸),使Step Height Target位於光學模組畫面中央。在各Vision Map(FINS:3D V1,SINS:3D V2)上設定X,Y位置。',
          ja:'Step Height Target Setting——Jig Table(Y軸)とVision Module(X軸)を動かし、Step Height Targetが光学モジュール画面中央に来るよう合わせます。各Vision Map(FINS:3D V1、SINS:3D V2)でX,Y位置を設定します。'
        }},
        {img:cmImg('F','nbga',131),tx:{
          vi:'Dùng AF Program để lấy nét trục Z và lưu vị trí hiện tại làm Step Height Target Z Reference Pos, sau đó Teaching vị trí X và Y.',
          en:'Use the AF program to focus the Z-axis and save the current position as the Step Height Target Z Reference Pos, then teach the X and Y positions.',
          ko:'AF Program으로 Z축 초점을 맞춰 현재 위치를 Step Height Target Z Reference Pos로 저장하고, X, Y 위치도 Teaching합니다.',
          zhCN:'使用AF Program对Z轴进行对焦,将当前位置保存为Step Height Target Z Reference Pos,并对X、Y位置进行Teaching。',
          zhTW:'使用AF Program對Z軸進行對焦,將目前位置儲存為Step Height Target Z Reference Pos,並對X、Y位置進行Teaching。',
          ja:'AF ProgramでZ軸のピントを合わせ、現在の位置をStep Height Target Z Reference Posとして保存し、X、Y位置もTeachingします。'
        }},
        {img:cmImg('F','nbga',132),tx:{
          vi:'Mở cửa sổ thiết lập Illum Control và xác nhận \'UseMultiZMap\' đã đặt là TRUE (đổi từ FALSE nếu cần). Chọn \'3D_Img1\' và đặt Intensity 4–5 sao cho Fringe hiện rõ ở Height Target — Fringe KHÔNG được xuất hiện ở Start Pos, nhưng PHẢI xuất hiện ở Fringe Pos. Lưu và đóng cửa sổ khi hoàn tất.',
          en:'Open the Illum Control settings window and confirm \'UseMultiZMap\' is set to TRUE (change it from FALSE if needed). Select \'3D_Img1\' and set Intensity to 4–5 so the fringe is clearly visible in the Height Target — it should NOT appear at the Start Pos, but SHOULD appear at the Fringe Pos. Save and close the window when done.',
          ko:'Illum Control 설정 창을 열어 \'UseMultiZMap\'이 TRUE인지 확인합니다(FALSE면 TRUE로 변경). \'3D_Img1\'을 선택하고 Height Target에서 Fringe가 선명히 보이도록 Intensity를 4~5로 설정합니다 — Start Pos.에서는 Fringe가 보이지 않아야 하고, Fringe Pos.에서는 보여야 합니다. 설정 완료 후 저장하고 창을 닫습니다.',
          zhCN:'打开Illum Control设置窗口,确认\'UseMultiZMap\'为TRUE(若为FALSE则改为TRUE)。选择\'3D_Img1\',将Intensity设为4~5,使Fringe在Height Target中清晰可见——Start Pos.不应出现Fringe,Fringe Pos.则应出现。设置完成后保存并关闭窗口。',
          zhTW:'開啟Illum Control設定視窗,確認\'UseMultiZMap\'為TRUE(若為FALSE則改為TRUE)。選擇\'3D_Img1\',將Intensity設為4~5,使Fringe在Height Target中清晰可見——Start Pos.不應出現Fringe,Fringe Pos.則應出現。設定完成後儲存並關閉視窗。',
          ja:'Illum Control設定ウィンドウを開き、\'UseMultiZMap\'がTRUEになっているか確認します(FALSEの場合はTRUEに変更)。\'3D_Img1\'を選択し、Height TargetでFringeがはっきり見えるようIntensityを4~5に設定します——Start Pos.ではFringeが見えず、Fringe Pos.では見える必要があります。設定完了後、保存してウィンドウを閉じます。'
        }}
      ]
    }
  },
  F:{
    smtv:{
      title:{ko:'F. Consumables Inspection/Replacement',en:'F. Consumables Inspection/Replacement',zhCN:'F. Consumables Inspection/Replacement',zhTW:'F. Consumables Inspection/Replacement',ja:'F. Consumables Inspection/Replacement'},
      slides:[
        {img:cmImg('G','smtv',1),tx:{
          vi:'Đề cập đến việc kiểm tra và thay thế vật tư tiêu hao như Camera, đèn chiếu sáng, Controller, PC Board, Motor và Driver.',
          ko:'Camera, 조명, Controller, PC Board, Motor, Driver 등 소모품 점검 및 교체를 다룹니다.',
          en:'Covers inspecting and replacing consumables such as the Camera, lighting, Controller, PC Board, Motor, and Driver.',
          zhCN:'涵盖Camera、照明、Controller、PC Board、Motor、Driver等消耗品的检查与更换。',
          zhTW:'涵蓋Camera、照明、Controller、PC Board、Motor、Driver等消耗品的檢查與更換。',
          ja:'Camera、照明、Controller、PC Board、Motor、Driverなど消耗品の点検・交換を扱います。'
        }},
        {img:cmImg('G','smtv',2),tx:{
          vi:'Xác nhận vị trí vật lý của các bộ phận chính\n\n1. Kiểm tra vị trí của 3D#1·3D#2 LED Controller, 3D#1·3D#2 PC, Host PC, Macro PC/LED Controller, HUB&KVM, UPS, v.v. trên bản vẽ layout.\n2. Trước khi thay thế bất kỳ bộ phận nào, luôn xác nhận chính xác vị trí và dây cáp kết nối (nguồn/tín hiệu) trước tiên.',
          en:'Confirming the physical locations of key parts\n\n1. Check the locations of the 3D#1·3D#2 LED Controller, 3D#1·3D#2 PC, Host PC, Macro PC/LED Controller, HUB&KVM, UPS, etc. on the layout drawing.\n2. Before replacing any part, always confirm its exact location and connected cables (power/signal) first.',
          ko:'주요 부품 물리적 위치 확인\n\n1. 3D#1·3D#2 LED Controller, 3D#1·3D#2 PC, Host PC, Macro PC/LED Controller, HUB&KVM, UPS 등 위치를 도면으로 확인.\n2. 교체 전 반드시 해당 부품의 정확한 위치와 연결 Cable(전원/신호)을 먼저 확인한다.',
          zhCN:'确认主要部件的物理位置\n\n1. 通过图纸确认3D#1·3D#2 LED Controller、3D#1·3D#2 PC、Host PC、Macro PC/LED Controller、HUB&KVM、UPS等的位置。\n2. 更换前必须先确认该部件的准确位置及连接的Cable(电源/信号)。',
          zhTW:'確認主要零件的物理位置\n\n1. 透過圖面確認3D#1·3D#2 LED Controller、3D#1·3D#2 PC、Host PC、Macro PC/LED Controller、HUB&KVM、UPS等的位置。\n2. 更換前必須先確認該零件的準確位置及連接的Cable(電源/訊號)。',
          ja:'主要部品の物理的位置を確認\n\n1. 3D#1・3D#2 LED Controller、3D#1・3D#2 PC、Host PC、Macro PC/LED Controller、HUB&KVM、UPSなどの位置を図面で確認する。\n2. 交換前に必ず該当部品の正確な位置と接続Cable(電源/信号)を先に確認する。'
        }},
        {img:cmImg('G','smtv',3),tx:{
          vi:'Main/ISO Machine Motion Name\n\n1. Xác định Motor/Driver theo tên trục trên Main Machine (Rear/Front View).\n2. Xác định theo tên trục trên ISO Machine (Rear/Front/Left/Top View). VD: Elevator Z-axis, Multi-Sorter X-axis/Z-axis, Indexer Y-axis, Picker X-axis/Z-axis, Aligner X-axis/Y-axis, v.v.\n3. Trước khi thay thế, phải xác định chính xác Motor/Driver mục tiêu theo tên trục để tránh thao tác sai.',
          en:'Main/ISO Machine Motion Name\n\n1. Identify the Motor/Driver by the axis name on the Main Machine (Rear/Front View).\n2. Identify by the axis name on the ISO Machine (Rear/Front/Left/Top View). E.g., Elevator Z-axis, Multi-Sorter X-axis/Z-axis, Indexer Y-axis, Picker X-axis/Z-axis, Aligner X-axis/Y-axis, etc.\n3. Before replacement, you must identify the target Motor/Driver by its exact axis name to prevent mis-operation.',
          ko:'Main/ISO Machine Motion Name\n\n1. Motor/Driver는 Main Machine(Rear/Front View)의 축 명칭으로 식별한다.\n2. ISO Machine(Rear/Front/Left/Top View)의 축 명칭으로 식별한다. 예: Elevator Z-axis(Z축), Multi-Sorter X-axis(X축)/Z-axis(Z축), Indexer Y-axis(Y축), Picker X-axis(X축)/Z-axis(Z축), Aligner X-axis(X축)/Y-axis(Y축) 등.\n3. 교체 작업 전 정확한 축 이름으로 대상 Motor/Driver를 특정해야 오조작을 방지할 수 있다.',
          zhCN:'Main/ISO Machine Motion Name\n\n1. 通过Main Machine(Rear/Front View)的轴名称识别Motor/Driver。\n2. 通过ISO Machine(Rear/Front/Left/Top View)的轴名称识别。例如:Elevator Z-axis、Multi-Sorter X-axis/Z-axis、Indexer Y-axis、Picker X-axis/Z-axis、Aligner X-axis/Y-axis等。\n3. 更换作业前必须以准确的轴名称确定目标Motor/Driver,以防止误操作。',
          zhTW:'Main/ISO Machine Motion Name\n\n1. 透過Main Machine(Rear/Front View)的軸名稱識別Motor/Driver。\n2. 透過ISO Machine(Rear/Front/Left/Top View)的軸名稱識別。例如:Elevator Z-axis、Multi-Sorter X-axis/Z-axis、Indexer Y-axis、Picker X-axis/Z-axis、Aligner X-axis/Y-axis等。\n3. 更換作業前必須以準確的軸名稱確定目標Motor/Driver,以防止誤操作。',
          ja:'Main/ISO Machine Motion Name\n\n1. Motor/DriverはMain Machine(Rear/Front View)の軸名称で識別する。\n2. ISO Machine(Rear/Front/Left/Top View)の軸名称で識別する。例:Elevator Z-axis、Multi-Sorter X-axis/Z-axis、Indexer Y-axis、Picker X-axis/Z-axis、Aligner X-axis/Y-axis等。\n3. 交換作業前に正確な軸名称で対象のMotor/Driverを特定しないと誤操作の恐れがある。'
        }},
        {img:cmImg('G','smtv',4),tx:{
          vi:'Chu kỳ kiểm tra/vệ sinh/điều chỉnh/bôi trơn theo tên bộ phận\n\n1. Quản lý chu kỳ Inspection, Cleaning, Adjustment, Lubricant theo từng Part Name trên cơ sở D/W/M/3M/6M/Y.\n2. VD: LM Guide và Ball Screw: kiểm tra mỗi 3 tháng, vệ sinh hàng tháng, bôi trơn 1 lần/năm. Vacuum: kiểm tra mỗi 3 tháng, vệ sinh mỗi 6 tháng, điều chỉnh khi cần.',
          en:'Inspection/cleaning/adjustment/lubrication cycle by Part Name\n\n1. Manage the Inspection, Cleaning, Adjustment, and Lubricant cycles per Part Name on a D/W/M/3M/6M/Y basis.\n2. E.g., LM Guide and Ball Screw: inspect every 3 months, clean monthly, lubricate once a year. Vacuum: inspect every 3 months, clean every 6 months, adjust as needed.',
          ko:'Part Name별 점검·청소·조정·윤활 주기\n\n1. Part Name별로 Inspection(점검)·Cleaning(청소)·Adjustment(조정)·Lubricant(윤활) 주기를 D/W/M/3M/6M/Y 기준으로 관리.\n2. 예: LM Guide·Ball Screw는 3개월 점검·매월 청소·연 1회 윤활 / Vacuum은 3개월 점검·6개월 청소·필요시 조정.',
          zhCN:'按Part Name管理点检·清洁·调整·润滑周期\n\n1. 按Part Name以D/W/M/3M/6M/Y为基准管理Inspection(点检)、Cleaning(清洁)、Adjustment(调整)、Lubricant(润滑)周期。\n2. 例如:LM Guide、Ball Screw为每3个月点检、每月清洁、每年润滑1次;Vacuum为每3个月点检、每6个月清洁、必要时调整。',
          zhTW:'按Part Name管理點檢·清潔·調整·潤滑週期\n\n1. 按Part Name以D/W/M/3M/6M/Y為基準管理Inspection(點檢)、Cleaning(清潔)、Adjustment(調整)、Lubricant(潤滑)週期。\n2. 例如:LM Guide、Ball Screw為每3個月點檢、每月清潔、每年潤滑1次;Vacuum為每3個月點檢、每6個月清潔、必要時調整。',
          ja:'Part Nameごとの点検・清掃・調整・潤滑周期\n\n1. Part Nameごとに Inspection(点検)・Cleaning(清掃)・Adjustment(調整)・Lubricant(潤滑)の周期をD/W/M/3M/6M/Y基準で管理する。\n2. 例:LM Guide・Ball Screwは3ヶ月点検・毎月清掃・年1回潤滑/Vacuumは3ヶ月点検・6ヶ月清掃・必要時調整。'
        }},
        {img:cmImg('G','smtv',5),tx:{
          vi:'Dựa trên hạng mục kiểm tra khuyến nghị của THK\n\n1. Vệ sinh nội thất Robot: mở nắp trên và loại bỏ dị vật bằng máy hút bụi. (Chu kỳ: khi cần)\n2. Xử lý hư hỏng cáp: nếu lớp vỏ cáp bong thành bột, bôi một lượng nhỏ mỡ giữa các dây cáp; thay thế nếu hư hỏng nặng.\n3. Bolt cố định bàn lắp đặt/giá đỡ: kiểm tra tình trạng siết chặt sau 1 tháng lắp đặt và siết lại.\n\nĐiểm cần kiểm tra — Không trộn lẫn các loại mỡ khác nhau',
          en:'Based on THK\'s recommended inspection items\n\n1. Robot interior cleaning: open the upper cover and remove foreign matter with a vacuum cleaner. (Period: as needed)\n2. Cable damage care: if the cable skin flakes into powder, apply a small amount of grease between cables; replace if severely damaged.\n3. Installation platform/bracket fastening bolts: check the fastening state one month after installation and re-fasten.\n\nCheck point — Do not mix different kinds of grease',
          ko:'THK 권고 점검 항목 기준\n\n1. Robot 내부 청소: 상부 Cover를 열고 진공청소기로 이물을 제거한다. (주기: 수시로)\n2. Cable 손상 관리: 피복이 가루로 벗겨지면 Cable 사이에 소량 Grease를 도포하고, 심하게 손상되었으면 교체한다.\n3. 설치대/Bracket 체결 Bolt: 설치 1개월 후 체결 상태를 확인하고 재체결한다.\n\n확인 포인트 — 서로 다른 종류의 Grease는 섞지 않는다',
          zhCN:'基于THK推荐的点检项目\n\n1. Robot内部清洁:打开上盖,用真空吸尘器清除异物。(周期:随时)\n2. Cable损伤管理:若外皮粉化脱落,在Cable之间涂抹少量Grease;若损伤严重则更换。\n3. 安装台/Bracket紧固Bolt:安装1个月后确认紧固状态并重新紧固。\n\n确认要点——不同种类的Grease不可混用',
          zhTW:'基於THK建議的點檢項目\n\n1. Robot內部清潔:打開上蓋,用真空吸塵器清除異物。(週期:隨時)\n2. Cable損傷管理:若外皮粉化脫落,在Cable之間塗抹少量Grease;若損傷嚴重則更換。\n3. 安裝台/Bracket緊固Bolt:安裝1個月後確認緊固狀態並重新緊固。\n\n確認要點——不同種類的Grease不可混用',
          ja:'THK推奨点検項目基準\n\n1. Robot内部清掃:上部Coverを開け、掃除機で異物を除去する。(周期:随時)\n2. Cable損傷管理:被覆が粉状に剥がれた場合はCable間に少量のGreaseを塗布し、著しく損傷している場合は交換する。\n3. 設置台/Bracket締結Bolt:設置1ヶ月後に締結状態を確認し、再締結する。\n\n確認ポイント — 異なる種類のGreaseは混ぜない'
        }},
        {img:cmImg('G','smtv',6),tx:{
          vi:'Tháo Cover → bơm vào lỗ bơm của LM Block\n\n1. Không trộn lẫn các loại mỡ khác nhau.\n2. Tháo Cover.\n3. Bơm mỡ vào lỗ bơm mỡ của LM Block.\n\nĐiểm cần kiểm tra — Dụng cụ chuyên dùng — Grease Gun (MG70), Grease (THK AFA-70)',
          en:'Remove the Cover → inject into the LM Block inlet\n\n1. Do not mix different kinds of grease.\n2. Remove the Cover.\n3. Inject grease into the LM Block\'s grease inlet.\n\nCheck point — Dedicated tools — Grease Gun (MG70), Grease (THK AFA-70)',
          ko:'Cover 분리 → LM Block 주입구에 주입\n\n1. 서로 다른 종류의 Grease는 섞지 않는다.\n2. Cover를 분리한다.\n3. LM Block의 Grease 주입구에 Grease를 주입한다.\n\n확인 포인트 — 전용 공구 — Grease Gun(MG70), Grease(THK AFA-70)',
          zhCN:'拆下Cover → 注入LM Block注入口\n\n1. 不同种类的Grease不可混用。\n2. 拆下Cover。\n3. 向LM Block的Grease注入口注入Grease。\n\n确认要点——专用工具——Grease Gun(MG70)、Grease(THK AFA-70)',
          zhTW:'拆下Cover → 注入LM Block注入口\n\n1. 不同種類的Grease不可混用。\n2. 拆下Cover。\n3. 向LM Block的Grease注入口注入Grease。\n\n確認要點——專用工具——Grease Gun(MG70)、Grease(THK AFA-70)',
          ja:'Cover取り外し → LM Block注入口に注入\n\n1. 異なる種類のGreaseは混ぜない。\n2. Coverを取り外す。\n3. LM BlockのGrease注入口にGreaseを注入する。\n\n確認ポイント — 専用工具 — Grease Gun(MG70)、Grease(THK AFA-70)'
        }},
        {img:cmImg('G','smtv',7),tx:{
          vi:'Chu kỳ 12 tháng, loại bỏ dị vật trước khi bơm\n\n1. Không trộn lẫn các loại mỡ khác nhau.\n2. Luôn loại bỏ bụi·dị vật trước khi bơm.\n3. Bơm mỡ vào lỗ bơm mỡ của Main Vision LM Block mỗi 12 tháng.\n\nĐiểm cần kiểm tra — Dụng cụ chuyên dùng — Grease Gun (MG70), Grease (THK AFA-70)',
          en:'12-month cycle, remove foreign matter before injecting\n\n1. Do not mix different kinds of grease.\n2. Always remove dust/foreign matter before injecting.\n3. Inject grease into the Main Vision LM Block\'s grease inlet every 12 months.\n\nCheck point — Dedicated tools — Grease Gun (MG70), Grease (THK AFA-70)',
          ko:'12개월 주기·이물 제거 후 주입\n\n1. 서로 다른 종류의 Grease는 섞지 않는다.\n2. 주입 전 반드시 먼지·이물질을 제거한다.\n3. Main Vision LM Block Grease 주입구에 12개월 주기로 Grease를 주입한다.\n\n확인 포인트 — 전용 공구 — Grease Gun(MG70), Grease(THK AFA-70)',
          zhCN:'12个月周期·清除异物后注入\n\n1. 不同种类的Grease不可混用。\n2. 注入前必须先清除灰尘·异物。\n3. 每12个月向Main Vision LM Block的Grease注入口注入Grease。\n\n确认要点——专用工具——Grease Gun(MG70)、Grease(THK AFA-70)',
          zhTW:'12個月週期·清除異物後注入\n\n1. 不同種類的Grease不可混用。\n2. 注入前必須先清除灰塵·異物。\n3. 每12個月向Main Vision LM Block的Grease注入口注入Grease。\n\n確認要點——專用工具——Grease Gun(MG70)、Grease(THK AFA-70)',
          ja:'12ヶ月周期・異物除去後に注入\n\n1. 異なる種類のGreaseは混ぜない。\n2. 注入前に必ず埃・異物を除去する。\n3. Main Vision LM BlockのGrease注入口に12ヶ月周期でGreaseを注入する。\n\n確認ポイント — 専用工具 — Grease Gun(MG70)、Grease(THK AFA-70)'
        }},
        {img:cmImg('G','smtv',8),tx:{
          vi:'Checklist reset/xác minh lại\n\n1. Sau khi thay Camera / AF·PZT Controller, phải kiểm tra phiên bản Firmware và reset lại Parameter → xem Module J (Advanced Troubleshooting).\n2. Sau khi thay Motor / Driver, kiểm tra lại Dial (Step Angle) và Parameter tốc độ → xem Module F·J.\n3. Sau khi thay thế, khuyến nghị điều chỉnh lại Vision (Camera angle/Scale) và xác minh lại LTS → xem LTS Target Setting của Module F.',
          en:'Reset/re-verification checklist\n\n1. After replacing the Camera / AF·PZT Controller, you must check the Firmware version and reset Parameters → see Module J (Advanced Troubleshooting).\n2. After replacing the Motor / Driver, recheck the Dial (Step Angle) and speed Parameters → see Module F·J.\n3. After replacement, Vision re-adjustment (Camera angle/Scale) and LTS re-verification are recommended → see Module F\'s LTS Target Setting.',
          ko:'재설정·재검증 체크리스트\n\n1. Camera / AF·PZT Controller 교체 후에는 반드시 Firmware 버전 확인 및 Parameter 재설정이 필요 → Module J(고급 트러블슈팅) 참고.\n2. Motor / Driver 교체 후 Dial(Step Angle)·속도 Parameter 재확인 → Module F·J 참고.\n3. 교체 후 Vision 재조정(Camera angle/Scale) 및 LTS 재검증 권장 → Module F의 LTS Target Setting 참고.',
          zhCN:'重设·再验证检查清单\n\n1. 更换Camera / AF·PZT Controller后,必须确认Firmware版本并重新设定Parameter → 参考Module J(高级故障排查)。\n2. 更换Motor / Driver后,重新确认Dial(Step Angle)·速度Parameter → 参考Module F·J。\n3. 更换后建议进行Vision再调整(Camera angle/Scale)及LTS再验证 → 参考Module F的LTS Target Setting。',
          zhTW:'重設·再驗證檢查清單\n\n1. 更換Camera / AF·PZT Controller後,必須確認Firmware版本並重新設定Parameter → 參考Module J(進階故障排除)。\n2. 更換Motor / Driver後,重新確認Dial(Step Angle)·速度Parameter → 參考Module F·J。\n3. 更換後建議進行Vision再調整(Camera angle/Scale)及LTS再驗證 → 參考Module F的LTS Target Setting。',
          ja:'再設定・再検証チェックリスト\n\n1. Camera / AF・PZT Controller交換後は必ずFirmwareバージョン確認及びParameter再設定が必要 → Module J(高度なトラブルシューティング)参照。\n2. Motor / Driver交換後はDial(Step Angle)・速度Parameterを再確認 → Module F・J参照。\n3. 交換後はVision再調整(Camera angle/Scale)及びLTS再検証を推奨 → Module FのLTS Target Setting参照。'
        }}
      ]
    },
    nbga:{
      title:{ko:'F. Preventive Maintenance',en:'F. Preventive Maintenance',zhCN:'F. Preventive Maintenance',zhTW:'F. Preventive Maintenance',ja:'F. Preventive Maintenance'},
      slides:[
        {img:cmImg('G','nbga',1),tx:{
          vi:'Preventive Maintenance Schedule #1 — checklist trước/trong/sau vận hành. Trước vận hành: kiểm tra áp suất khí (0.49MPa) và rò rỉ, kiểm tra dị vật trên Vision Stage Motor Part, kiểm tra dây cáp có bị xoắn, và kiểm tra tiếng ồn·rung động bất thường khi Warm-up. Trong vận hành: theo dõi tiếng ồn, rung động, nhiệt độ hoặc mùi bất thường. Sau vận hành: kiểm tra hiện tượng kẹt (Jam) thường xuyên, vệ sinh bụi trên X&Y Table và Robot Motor, và vệ sinh bề mặt trên của Jig.',
          en:'Preventive Maintenance Schedule #1 — before/during/after operation checklist. Before operation: check air pressure (0.49MPa) and leaks, check for foreign substances on the Vision Stage Motor Part, check cables for twisting, and check for abnormal noise or vibration during warm-up. During operation: watch for abnormal noise, vibration, heat, or smell. After operation: check for frequent jamming, clean dust from the X&Y Table and Robot Motor, and clean the Jig top surface.',
          ko:'예방 정비 점검표 #1 — 가동 전/중/후 점검 항목. 가동 전: 에어 압력(0.49MPa) 및 누기 확인, Vision Stage Motor Part의 이물질 유무 확인, 케이블 꼬임 확인, 워밍업 중 이상 소음·진동 확인. 가동 중: 이상 소음·진동·발열·냄새 확인. 가동 후: 특정 부위의 잦은 잼(Jam) 발생 확인, X&Y Table 및 Robot Motor 부위 먼지 제거, Jig 상면 청소.',
          zhCN:'预防性维护检查表 #1 — 运行前/中/后检查项目。运行前:检查气压(0.49MPa)及漏气情况、检查 Vision Stage Motor Part 是否有异物、检查线缆是否缠绕、预热时检查异常噪音或振动。运行中:检查异常噪音、振动、发热或异味。运行后:检查特定部位是否频繁卡料(Jam)、清除 X&Y Table 及 Robot Motor 部位的灰尘、清洁 Jig 上表面。',
          zhTW:'預防性維護檢查表 #1 — 運轉前/中/後檢查項目。運轉前:確認氣壓(0.49MPa)及漏氣情形、確認 Vision Stage Motor Part 是否有異物、確認纜線是否扭結、暖機時確認異常噪音或震動。運轉中:確認異常噪音、震動、發熱或異味。運轉後:確認特定部位是否頻繁卡料(Jam)、清除 X&Y Table 及 Robot Motor 部位的灰塵、清潔 Jig 上表面。',
          ja:'予防保全チェックリスト #1 — 稼働前/中/後の点検項目。稼働前:エア圧(0.49MPa)および漏れの確認、Vision Stage Motor Partの異物の有無確認、ケーブルのねじれ確認、ウォームアップ中の異音・振動確認。稼働中:異音・振動・発熱・異臭の確認。稼働後:特定箇所での頻繁なジャム(Jam)発生の確認、X&Y TableおよびRobot Motor部の粉じん除去、Jig上面の清掃。'
        }},
        {img:cmImg('G','nbga',2),tx:{
          vi:'Preventive Maintenance Schedule #2 — chu kỳ kiểm tra/vệ sinh/điều chỉnh/bôi trơn theo từng bộ phận. LM Guide: kiểm tra mỗi 3 tháng, vệ sinh hàng tháng, bôi trơn hàng năm. Vacuum: kiểm tra mỗi 3 tháng, vệ sinh mỗi 6 tháng, điều chỉnh khi cần. Ball Screw: kiểm tra mỗi 3 tháng, vệ sinh hàng tháng, bôi trơn hàng năm. (D=hàng ngày, W=hàng tuần, M=hàng tháng, 3M=mỗi 3 tháng, 6M=mỗi 6 tháng, Y=hàng năm)',
          en:'Preventive Maintenance Schedule #2 — part-by-part inspection/cleaning/adjustment/lubrication cycle. LM Guide: inspect every 3 months, clean monthly, lubricate yearly. Vacuum: inspect every 3 months, clean every 6 months, adjust when necessary. Ball Screw: inspect every 3 months, clean monthly, lubricate yearly. (D=daily, W=weekly, M=monthly, 3M=every 3 months, 6M=every 6 months, Y=yearly)',
          ko:'예방 정비 점검표 #2 — 부품별 점검/청소/조정/윤활 주기. LM Guide: 점검 3개월, 청소 1개월, 윤활 1년. Vacuum: 점검 3개월, 청소 6개월, 필요시 조정. Ball Screw: 점검 3개월, 청소 1개월, 윤활 1년. (D=매일, W=매주, M=매월, 3M=3개월마다, 6M=6개월마다, Y=매년)',
          zhCN:'预防性维护检查表 #2 — 各部件的检查/清洁/调整/润滑周期。LM Guide:检查每3个月一次,清洁每月一次,润滑每年一次。Vacuum:检查每3个月一次,清洁每6个月一次,必要时调整。Ball Screw:检查每3个月一次,清洁每月一次,润滑每年一次。(D=每日,W=每周,M=每月,3M=每3个月,6M=每6个月,Y=每年)',
          zhTW:'預防性維護檢查表 #2 — 各零件的檢查/清潔/調整/潤滑週期。LM Guide:檢查每3個月一次,清潔每月一次,潤滑每年一次。Vacuum:檢查每3個月一次,清潔每6個月一次,必要時調整。Ball Screw:檢查每3個月一次,清潔每月一次,潤滑每年一次。(D=每日,W=每週,M=每月,3M=每3個月,6M=每6個月,Y=每年)',
          ja:'予防保全チェックリスト #2 — 部品ごとの点検/清掃/調整/給油周期。LM Guide:点検3ヶ月ごと、清掃1ヶ月ごと、給油1年ごと。Vacuum:点検3ヶ月ごと、清掃6ヶ月ごと、必要時調整。Ball Screw:点検3ヶ月ごと、清掃1ヶ月ごと、給油1年ごと。(D=毎日、W=毎週、M=毎月、3M=3ヶ月ごと、6M=6ヶ月ごと、Y=毎年)'
        }},
        {img:cmImg('G','nbga',3),tx:{
          vi:'Lưu ý khi bơm mỡ. Ball Screw: bôi mỡ Shell Alvania vào trục và núm bơm mỗi 6 tháng. LM Guide: bôi mỡ Shell Alvania vào Rail và núm bơm mỗi năm một lần. Lưu ý: không được trộn lẫn các loại mỡ khác nhau. Vệ sinh nội thất Robot: tháo nắp trên và hút dị vật thường xuyên bằng máy hút bụi. Cáp Robot: nếu lớp vỏ ngoài bong tróc thành bột, bôi một lượng nhỏ mỡ giữa các dây cáp; thay cáp nếu hư hỏng nặng. Ngoài ra kiểm tra bàn lắp đặt và Bolt cố định giá đỡ đã siết chặt chưa, siết lại sau 1 tháng lắp đặt. (Dựa theo hạng mục kiểm tra do THK cung cấp.)',
          en:'Precautions for grease injection. Ball Screw: apply Shell Alvania grease to the shaft and nipple every 6 months. LM Guide: apply Shell Alvania grease to the LM rail and nipple once a year. Note: never mix different kinds of grease. Robot interior cleaning: remove the upper cover and vacuum out foreign substances frequently. Robot cable: if the outer skin powders off, apply a small amount of grease between cables; replace the cable if damage is severe. Also check that the installation platform and bracket fixing bolts are tightened, re-tightening one month after installation. (Based on inspection items provided by THK.)',
          ko:'그리스 주입 시 주의사항. Ball Screw: Shaft와 Nipple에 Shell Alvania 그리스를 6개월에 1회 주입. LM Guide: LM Rail과 Nipple에 Shell Alvania 그리스를 1년에 1회 주입. 주의: 서로 다른 종류의 그리스를 섞어 사용하지 말 것. Robot 내부 청소: 상부 커버를 분리하고 진공청소기로 이물질을 자주 제거. Robot 케이블: 외피가 가루처럼 벗겨지면 케이블 사이에 그리스를 소량 도포하고, 손상이 심하면 교체. 설치 플랫폼과 브라켓 고정 볼트의 체결 상태도 확인하며, 설치 후 1개월 뒤 재체결. (THK에서 제공한 점검 항목을 기반으로 작성됨)',
          zhCN:'注脂注意事项。Ball Screw:每6个月在Shaft和Nipple处涂抹一次Shell Alvania润滑脂。LM Guide:每年在LM Rail和Nipple处涂抹一次Shell Alvania润滑脂。注意:切勿混用不同种类的润滑脂。机器人内部清洁:拆下上盖,经常用吸尘器清除内部异物。机器人电缆:若外皮出现粉状脱落,可在电缆之间少量涂抹润滑脂;若损伤严重则需更换。此外还需确认安装平台及支架固定螺栓的紧固状态,并在安装1个月后重新紧固一次。(依据THK提供的检查项目编写)',
          zhTW:'注脂注意事項。Ball Screw:每6個月在Shaft與Nipple處塗抹一次Shell Alvania潤滑脂。LM Guide:每年在LM Rail與Nipple處塗抹一次Shell Alvania潤滑脂。注意:切勿混用不同種類的潤滑脂。機器人內部清潔:拆下上蓋,經常用吸塵器清除內部異物。機器人纜線:若外皮出現粉狀剝落,可在纜線之間少量塗抹潤滑脂;若損傷嚴重則需更換。此外也需確認安裝平台及支架固定螺栓的鎖緊狀態,並於安裝1個月後重新鎖緊一次。(依據THK提供的檢查項目編寫)',
          ja:'グリス注入時の注意事項。Ball Screw:Shaft と Nipple に Shell Alvania グリスを6ヶ月に1回注入。LM Guide:LM Rail と Nipple に Shell Alvania グリスを1年に1回注入。注意:異なる種類のグリスを混用しないこと。ロボット内部清掃:上部カバーを外し、掃除機で内部の異物を頻繁に除去する。ロボットケーブル:被覆が粉状に剥がれた場合はケーブルの間に少量のグリスを塗布し、損傷が激しい場合は交換する。また設置プラットフォームおよびブラケット固定ボルトの締結状態を確認し、設置1ヶ月後に増し締めを行う。(THK提供の点検項目に基づき作成)'
        }}
      ]
    }
  },
  H:{
    smtv:{
      title:{ko:'H. Recipe Vision Parameter',en:'H. Recipe Vision Parameter',zhCN:'H. Recipe Vision Parameter',zhTW:'H. Recipe Vision Parameter',ja:'H. Recipe Vision Parameter'},
      chapters:[
        {from:1,title:{ko:'A. Global Parameter',en:'A. Global Parameter',zhCN:'A. Global Parameter',zhTW:'A. Global Parameter',ja:'A. Global Parameter'}},
        {from:7,title:{ko:'B. Illumination Control',en:'B. Illumination Control',zhCN:'B. Illumination Control',zhTW:'B. Illumination Control',ja:'B. Illumination Control'}},
        {from:15,title:{ko:'C. Alignment',en:'C. Alignment',zhCN:'C. Alignment',zhTW:'C. Alignment',ja:'C. Alignment'}},
        {from:25,title:{ko:'D. 3D Inspection',en:'D. 3D Inspection',zhCN:'D. 3D Inspection',zhTW:'D. 3D Inspection',ja:'D. 3D Inspection'}},
        {from:45,title:{ko:'E. 2D Inspection',en:'E. 2D Inspection',zhCN:'E. 2D Inspection',zhTW:'E. 2D Inspection',ja:'E. 2D Inspection'}},
        {from:57,title:{ko:'F. Barcode & OCR',en:'F. Barcode & OCR',zhCN:'F. Barcode & OCR',zhTW:'F. Barcode & OCR',ja:'F. Barcode & OCR'}}
      ],
      slides:[
        {img:cmImg('I','smtv',1),tx:{
          vi:'Software Inspection Parameter — phần này đề cập đến Global Parameter, Illumination Control, Alignment, 3D Inspection, 2D Inspection và Barcode & OCR.',
          en:'Software Inspection Parameter — this section covers Global Parameter, Illumination Control, Alignment, 3D Inspection, 2D Inspection, and Barcode & OCR.',
          ko:'Software Inspection Parameter — Global Parameter, Illumination Control, Alignment, 3D Inspection, 2D Inspection, Barcode & OCR를 다룹니다.',
          zhCN:'Software Inspection Parameter——本节介绍Global Parameter、Illumination Control、Alignment、3D Inspection、2D Inspection、Barcode & OCR。',
          zhTW:'Software Inspection Parameter——本節介紹Global Parameter、Illumination Control、Alignment、3D Inspection、2D Inspection、Barcode & OCR。',
          ja:'Software Inspection Parameter——本節ではGlobal Parameter、Illumination Control、Alignment、3D Inspection、2D Inspection、Barcode & OCRを扱います。'
        }},
        {img:cmImg('I','smtv',2),tx:{
          vi:'2.1.1. Global Parameter\n\nTùy theo cấu hình Global Parameter, hệ thống Vision này có thể kiểm tra 2D hoặc 3D, và chọn Hardware hoặc Non-Hardware. Hoạt động của Vision Application Program phụ thuộc vào cấu hình này, nên để chỉnh sửa Global Parameter, trước tiên phải chạy IntekPlus.Smtv.Apple.exe (tại C:\\SMTV\\Vision\\Bin).',
          en:'2.1.1. Global Parameter\n\nDepending on the Global Parameter configuration, this vision system can inspect 2D or 3D, and select Hardware or Non-Hardware. The Vision application program\'s operation depends on this configuration, so you must first run IntekPlus.Smtv.Apple.exe (located in C:\\SMTV\\Vision\\Bin) to edit these Global Parameters.',
          ko:'2.1.1. Global Parameter\n\nGlobal Parameter 설정에 따라 이 Vision System은 2D 또는 3D 검사, Hardware 또는 Non-Hardware를 선택할 수 있습니다. Vision Application Program의 동작은 이 설정에 따라 달라지므로, Global Parameter를 수정하려면 먼저 "C:\\SMTV\\Vision\\Bin"에 있는 IntekPlus.Smtv.Apple.exe를 실행해야 합니다.',
          zhCN:'2.1.1. Global Parameter\n\n根据Global Parameter设置,该Vision System可以检测2D或3D,并选择Hardware或Non-Hardware。Vision Application Program的运行取决于此设置,因此如需编辑Global Parameter,必须先运行位于"C:\\SMTV\\Vision\\Bin"的IntekPlus.Smtv.Apple.exe。',
          zhTW:'2.1.1. Global Parameter\n\n根據Global Parameter設定,該Vision System可以檢測2D或3D,並選擇Hardware或Non-Hardware。Vision Application Program的運作取決於此設定,因此如需編輯Global Parameter,必須先執行位於"C:\\SMTV\\Vision\\Bin"的IntekPlus.Smtv.Apple.exe。',
          ja:'2.1.1. Global Parameter\n\nGlobal Parameterの設定により、このVision Systemは2Dまたは3D検査、Hardwareまたは Non-Hardwareを選択できます。Vision Application Programの動作はこの設定に依存するため、Global Parameterを編集するにはまず"C:\\SMTV\\Vision\\Bin"にあるIntekPlus.Smtv.Apple.exeを実行する必要があります。'
        }},
        {img:cmImg('I','smtv',3),tx:{
          vi:'2.1.1. Global Parameter\n\nMàn hình mô tả từng mục Global Parameter.',
          en:'2.1.1. Global Parameter\n\nDescription of each Global Parameter item, shown on screen.',
          ko:'2.1.1. Global Parameter\n\n각 Global Parameter 항목에 대한 설명 화면입니다.',
          zhCN:'2.1.1. Global Parameter\n\n各Global Parameter项目的说明画面。',
          zhTW:'2.1.1. Global Parameter\n\n各Global Parameter項目的說明畫面。',
          ja:'2.1.1. Global Parameter\n\n各Global Parameter項目についての説明画面です。'
        }},
        {img:cmImg('I','smtv',4),tx:{
          vi:'2.1.1. Global Parameter\n\nMàn hình mô tả từng mục Global Parameter (tiếp theo).',
          en:'2.1.1. Global Parameter\n\nDescription of each Global Parameter item, shown on screen (continued).',
          ko:'2.1.1. Global Parameter\n\n각 Global Parameter 항목에 대한 설명 화면입니다 (계속).',
          zhCN:'2.1.1. Global Parameter\n\n各Global Parameter项目的说明画面(续)。',
          zhTW:'2.1.1. Global Parameter\n\n各Global Parameter項目的說明畫面(續)。',
          ja:'2.1.1. Global Parameter\n\n各Global Parameter項目についての説明画面です(続き)。'
        }},
        {img:cmImg('I','smtv',5),tx:{
          vi:'2.1.1. Global Parameter\n\nMàn hình mô tả từng mục Global Parameter (tiếp theo).',
          en:'2.1.1. Global Parameter\n\nDescription of each Global Parameter item, shown on screen (continued).',
          ko:'2.1.1. Global Parameter\n\n각 Global Parameter 항목에 대한 설명 화면입니다 (계속).',
          zhCN:'2.1.1. Global Parameter\n\n各Global Parameter项目的说明画面(续)。',
          zhTW:'2.1.1. Global Parameter\n\n各Global Parameter項目的說明畫面(續)。',
          ja:'2.1.1. Global Parameter\n\n各Global Parameter項目についての説明画面です(続き)。'
        }},
        {img:cmImg('I','smtv',6),tx:{
          vi:'Software Inspection Parameter — phần này đề cập đến Global Parameter, Illumination Control, Alignment, 3D Inspection, 2D Inspection và Barcode & OCR.',
          en:'Software Inspection Parameter — this section covers Global Parameter, Illumination Control, Alignment, 3D Inspection, 2D Inspection, and Barcode & OCR.',
          ko:'Software Inspection Parameter — Global Parameter, Illumination Control, Alignment, 3D Inspection, 2D Inspection, Barcode & OCR를 다룹니다.',
          zhCN:'Software Inspection Parameter——本节介绍Global Parameter、Illumination Control、Alignment、3D Inspection、2D Inspection、Barcode & OCR。',
          zhTW:'Software Inspection Parameter——本節介紹Global Parameter、Illumination Control、Alignment、3D Inspection、2D Inspection、Barcode & OCR。',
          ja:'Software Inspection Parameter——本節ではGlobal Parameter、Illumination Control、Alignment、3D Inspection、2D Inspection、Barcode & OCRを扱います。'
        }},
        {img:cmImg('I','smtv',7),tx:{
          vi:'2.1.2. Illumination Control\n\nLighting Controls thiết lập tham số liên quan đến quét ảnh và giá trị chiếu sáng cho từng ảnh, xem được theo thời gian thực. Màn hình Illumination Control được cấu tạo như sau.',
          en:'2.1.2. Illumination Control\n\nLighting Controls set parameters related to image scanning and the lighting value for each image, viewable in real time. The Illumination Control screen is laid out as follows.',
          ko:'2.1.2. Illumination Control\n\nLighting Controls는 이미지 스캔과 관련된 Parameter, 그리고 각 이미지의 조명 값을 설정하며, 실시간으로 확인할 수 있습니다. Illumination Control 화면은 다음과 같이 구성됩니다.',
          zhCN:'2.1.2. Illumination Control\n\nLighting Controls用于设置与图像扫描相关的Parameter以及各图像的照明值,可实时确认。Illumination Control画面结构如下。',
          zhTW:'2.1.2. Illumination Control\n\nLighting Controls用於設定與影像掃描相關的Parameter以及各影像的照明值,可即時確認。Illumination Control畫面結構如下。',
          ja:'2.1.2. Illumination Control\n\nLighting Controlsは画像スキャンに関するParameterと各画像の照明値を設定し、リアルタイムで確認できます。Illumination Control画面は以下のように構成されます。'
        }},
        {img:cmImg('I','smtv',8),tx:{
          vi:'2.1.2. Illumination Control\n\n① Scan Parameter: thiết lập tham số liên quan quét ảnh. ② Illumination Parameter: thiết lập tham số chiếu sáng. ③ Image: xem ảnh theo thời gian thực. ④ Motor Control: di chuyển vị trí.',
          en:'2.1.2. Illumination Control\n\n① Scan Parameter: sets parameters related to image scanning. ② Illumination Parameter: sets lighting-related parameters. ③ Image: view images in real time. ④ Motor Control: move the position.',
          ko:'2.1.2. Illumination Control\n\n① Scan Parameter: 이미지 스캔 관련 Parameter 설정. ② Illumination Parameter: 조명 관련 Parameter 설정. ③ Image: 실시간 이미지 확인. ④ Motor Control: 위치 이동.',
          zhCN:'2.1.2. Illumination Control\n\n① Scan Parameter:设置与图像扫描相关的参数。② Illumination Parameter:设置照明相关参数。③ Image:实时查看图像。④ Motor Control:移动位置。',
          zhTW:'2.1.2. Illumination Control\n\n① Scan Parameter:設定與影像掃描相關的參數。② Illumination Parameter:設定照明相關參數。③ Image:即時查看影像。④ Motor Control:移動位置。',
          ja:'2.1.2. Illumination Control\n\n① Scan Parameter:画像スキャン関連のParameterを設定。② Illumination Parameter:照明関連のParameterを設定。③ Image:リアルタイムで画像確認。④ Motor Control:位置移動。'
        }},
        {img:cmImg('I','smtv',9),tx:{
          vi:'2.1.2. Illumination Control\n\nScan Parameter thiết lập Camera Parameter, Scan Parameter, số Frame và tham số thuật toán LCSI: Default Frame Period, Optimal Frame Period (tính theo thời gian tải ảnh từng phần), Illumination Delay (độ trễ từ khi nhận tín hiệu đến khi đèn sáng), Central Wavelength (khoảng 630nm với ánh sáng đỏ; tính được qua menu Utility ▸ Wave Length Calculation), Scan Order (chia bước sóng thành bao nhiêu phần), Scan Step (= Central Wavelength × Scan Order / 8, khoảng cách PZT di chuyển mỗi ảnh).',
          en:'2.1.2. Illumination Control\n\nScan Parameters set Camera Parameters, Scan Parameters, frame count, and LCSI algorithm parameters: Default Frame Period, Optimal Frame Period (calculated for the partial-image load time), Illumination Delay (time from signal to lighting-on), Central Wavelength (~630nm for red light; calculable via Utility ▸ Wave Length Calculation), Scan Order (how many divisions the wavelength splits into), and Scan Step (= Central Wavelength × Scan Order / 8, the PZT movement distance per image).',
          ko:'2.1.2. Illumination Control\n\nScan Parameter는 Camera Parameter, Scan Parameter, Frame Count, LCSI 알고리즘 Parameter를 설정합니다: Default Frame Period, Optimal Frame Period(부분 이미지 로드 시간을 고려해 계산), Illumination Delay(신호 수신부터 조명 점등까지 지연 시간), Central Wavelength(적색광 기준 약 630nm, Utility ▸ Wave Length Calculation 메뉴로 계산 가능), Scan Order(파장을 몇 등분할지), Scan Step(= Central Wavelength × Scan Order / 8, 이미지당 PZT 이동 거리).',
          zhCN:'2.1.2. Illumination Control\n\nScan Parameter用于设置Camera Parameter、Scan Parameter、Frame Count及LCSI算法参数:Default Frame Period、Optimal Frame Period(根据部分图像加载时间计算)、Illumination Delay(从接收信号到点亮照明的延迟时间)、Central Wavelength(红光约630nm,可通过Utility ▸ Wave Length Calculation菜单计算)、Scan Order(波长划分的等分数)、Scan Step(= Central Wavelength × Scan Order / 8,每张图像PZT移动距离)。',
          zhTW:'2.1.2. Illumination Control\n\nScan Parameter用於設定Camera Parameter、Scan Parameter、Frame Count及LCSI演算法參數:Default Frame Period、Optimal Frame Period(依部分影像載入時間計算)、Illumination Delay(從接收訊號到點亮照明的延遲時間)、Central Wavelength(紅光約630nm,可透過Utility ▸ Wave Length Calculation選單計算)、Scan Order(波長劃分的等分數)、Scan Step(= Central Wavelength × Scan Order / 8,每張影像PZT移動距離)。',
          ja:'2.1.2. Illumination Control\n\nScan Parameterは Camera Parameter、Scan Parameter、Frame Count、LCSIアルゴリズムParameterを設定します:Default Frame Period、Optimal Frame Period(部分画像のロード時間を考慮して計算)、Illumination Delay(信号受信から照明点灯までの遅延時間)、Central Wavelength(赤色光基準で約630nm、Utility ▸ Wave Length Calculationメニューで計算可能)、Scan Order(波長を何等分するか)、Scan Step(= Central Wavelength × Scan Order / 8、1画像あたりのPZT移動距離)。'
        }},
        {img:cmImg('I','smtv',10),tx:{
          vi:'2.1.2. Illumination Control\n\nCác Scan Parameter khác: Coherent Length (độ dài tín hiệu Fringe), Best Visi Grab Count (số lần Grab dùng Pixel V-Map tốt nhất), 2D/3D Frame Count, Cuda Delay Frame Count·Last No Calc Frame Count (liên quan tính Z-Map trên CUDA/GPU), Noise Threshold, Bad Pixel Threshold, Visibility Threshold, Filtering Count, Use Dual Switch (dùng 2 giá trị độ sáng chiếu sáng 3D trong 1 lần Scan), Use Surface Detection, Scan Offset.',
          en:'2.1.2. Illumination Control\n\nAdditional Scan Parameters: Coherent Length (fringe signal length), Best Visi Grab Count (grabs using the best V-Map pixel), 2D/3D Frame Count, Cuda Delay Frame Count and Last No Calc Frame Count (Z-Map calc on CUDA/GPU), Noise Threshold, Bad Pixel Threshold, Visibility Threshold, Filtering Count, Use Dual Switch (two 3D illumination brightness values per scan), Use Surface Detection, and Scan Offset.',
          ko:'2.1.2. Illumination Control\n\n추가 Scan Parameter: Coherent Length(Fringe 신호 길이), Best Visi Grab Count(최적 V-Map Pixel 사용 Grab 횟수), 2D/3D Frame Count, Cuda Delay Frame Count·Last No Calc Frame Count(CUDA/GPU Z-Map 계산 관련), Noise Threshold, Bad Pixel Threshold, Visibility Threshold, Filtering Count, Use Dual Switch(한 Scan에서 2개의 3D 조명 밝기값 사용), Use Surface Detection, Scan Offset.',
          zhCN:'2.1.2. Illumination Control\n\n其他Scan Parameter:Coherent Length(Fringe信号长度)、Best Visi Grab Count(使用最佳V-Map Pixel的抓取次数)、2D/3D Frame Count、Cuda Delay Frame Count·Last No Calc Frame Count(CUDA/GPU Z-Map计算相关)、Noise Threshold、Bad Pixel Threshold、Visibility Threshold、Filtering Count、Use Dual Switch(单次Scan使用两个3D照明亮度值)、Use Surface Detection、Scan Offset。',
          zhTW:'2.1.2. Illumination Control\n\n其他Scan Parameter:Coherent Length(Fringe訊號長度)、Best Visi Grab Count(使用最佳V-Map Pixel的抓取次數)、2D/3D Frame Count、Cuda Delay Frame Count·Last No Calc Frame Count(CUDA/GPU Z-Map計算相關)、Noise Threshold、Bad Pixel Threshold、Visibility Threshold、Filtering Count、Use Dual Switch(單次Scan使用兩個3D照明亮度值)、Use Surface Detection、Scan Offset。',
          ja:'2.1.2. Illumination Control\n\nその他のScan Parameter:Coherent Length(Fringe信号長)、Best Visi Grab Count(最適なV-Map Pixelを使用するGrab回数)、2D/3D Frame Count、Cuda Delay Frame Count・Last No Calc Frame Count(CUDA/GPU Z-Map計算関連)、Noise Threshold、Bad Pixel Threshold、Visibility Threshold、Filtering Count、Use Dual Switch(1回のScanで2つの3D照明輝度値を使用)、Use Surface Detection、Scan Offset。'
        }},
        {img:cmImg('I','smtv',11),tx:{
          vi:'2.1.2. Illumination Control\n\nLighting Parameter thiết lập chiếu sáng theo từng ảnh. Để chỉnh sửa/kiểm tra chiếu sáng trong Image List, chọn ảnh và chỉnh giá trị chiếu sáng ở bên phải; xem trực tiếp trong Image Window.',
          en:'2.1.2. Illumination Control\n\nLighting Parameters configure illumination per image. To edit/verify lighting in the image list, select an image and edit its lighting value on the right; verify live in the Image window.',
          ko:'2.1.2. Illumination Control\n\nLighting Parameter는 이미지별 조명을 설정합니다. Image List에서 이미지를 선택하고 오른쪽에서 조명 값을 수정·확인할 수 있으며, Image Window에서 실시간으로 확인합니다.',
          zhCN:'2.1.2. Illumination Control\n\nLighting Parameter用于设置各图像的照明。在Image List中选择图像后,可在右侧编辑·确认照明值,并在Image Window中实时查看。',
          zhTW:'2.1.2. Illumination Control\n\nLighting Parameter用於設定各影像的照明。在Image List中選擇影像後,可在右側編輯·確認照明值,並在Image Window中即時查看。',
          ja:'2.1.2. Illumination Control\n\nLighting Parameterは画像ごとの照明を設定します。Image Listで画像を選択し、右側で照明値を編集・確認でき、Image Windowでリアルタイムに確認します。'
        }},
        {img:cmImg('I','smtv',12),tx:{
          vi:'2.1.2. Illumination Control\n\nBottom Diameter/Bump Alignment: dùng Low Angle (Ch1~3) và High Angle (Ch8~10) làm toàn bộ ảnh Bump trắng, đồng thời làm SR (Shadow Region) tối nhất có thể. Top Diameter: dùng High Angle (Ch8~10) chỉ làm phần trên Bump trắng, giữ SR tối. Custom Bump Inspection: không có giá trị khuyến nghị — tự thiết lập bằng ảnh lỗi rõ ràng.',
          en:'2.1.2. Illumination Control\n\nBottom Diameter/Bump Alignment: using low angle (Ch1-3) and high angle (Ch8-10), fill the whole bump image white while darkening the SR (Shadow Region) as much as possible. Top Diameter: use high angle (Ch8-10) to whiten only the top of the bump, keeping the SR dark. Custom Bump Inspection: no recommended defaults — set up using clear defect images.',
          ko:'2.1.2. Illumination Control\n\nBottom Diameter/Bump Alignment: Low Angle(Ch1~3)와 High Angle(Ch8~10)을 이용해 Bump 이미지 전체를 하얗게, SR(Shadow Region)은 최대한 어둡게 만듭니다. Top Diameter: High Angle(Ch8~10)로 Bump 상단만 하얗게, SR은 어둡게 유지합니다. Custom Bump Inspection: 권장값 없음 — 명확한 불량 이미지로 직접 설정합니다.',
          zhCN:'2.1.2. Illumination Control\n\nBottom Diameter/Bump Alignment:利用Low Angle(Ch1~3)与High Angle(Ch8~10),使Bump图像整体呈白色,同时使SR(Shadow Region)尽量变暗。Top Diameter:用High Angle(Ch8~10)仅使Bump顶部呈白色,SR保持暗。Custom Bump Inspection:无推荐值——需使用清晰的缺陷图像自行设置。',
          zhTW:'2.1.2. Illumination Control\n\nBottom Diameter/Bump Alignment:利用Low Angle(Ch1~3)與High Angle(Ch8~10),使Bump影像整體呈白色,同時使SR(Shadow Region)盡量變暗。Top Diameter:用High Angle(Ch8~10)僅使Bump頂部呈白色,SR保持暗。Custom Bump Inspection:無建議值——需使用清晰的缺陷影像自行設定。',
          ja:'2.1.2. Illumination Control\n\nBottom Diameter/Bump Alignment:Low Angle(Ch1~3)とHigh Angle(Ch8~10)を使い、Bump画像全体を白くしつつSR(Shadow Region)をできるだけ暗くします。Top Diameter:High Angle(Ch8~10)でBump上部のみ白くし、SRは暗いままにします。Custom Bump Inspection:推奨値なし — 明確な不良画像を使って自ら設定します。'
        }},
        {img:cmImg('I','smtv',13),tx:{
          vi:'2.1.2. Illumination Control\n\nMàn hình Motor Control: chọn trục cần di chuyển từ Axis Combo Box, nhấn nút −/+ để di chuyển theo hướng đó, và điều chỉnh Move Step để đặt khoảng cách di chuyển mỗi lần.',
          en:'2.1.2. Illumination Control\n\nMotor Control screen: select the axis to move from the axis combo box, click the −/+ buttons to move it in that direction, and adjust Move Step to set the single-move distance.',
          ko:'2.1.2. Illumination Control\n\nMotor Control 화면: Axis Combo Box에서 이동할 축을 선택하고, −/+ 버튼으로 해당 방향으로 이동시키며, Move Step으로 1회 이동 거리를 조정합니다.',
          zhCN:'2.1.2. Illumination Control\n\nMotor Control画面:在Axis Combo Box中选择要移动的轴,点击−/+按钮朝该方向移动,并通过Move Step调整单次移动距离。',
          zhTW:'2.1.2. Illumination Control\n\nMotor Control畫面:在Axis Combo Box中選擇要移動的軸,點擊−/+按鈕朝該方向移動,並透過Move Step調整單次移動距離。',
          ja:'2.1.2. Illumination Control\n\nMotor Control画面:Axis Combo Boxで移動する軸を選択し、−/+ボタンでその方向へ移動させ、Move Stepで1回の移動距離を調整します。'
        }},
        {img:cmImg('I','smtv',14),tx:{
          vi:'Software Inspection Parameter — phần này đề cập đến Global Parameter, Illumination Control, Alignment, 3D Inspection, 2D Inspection và Barcode & OCR.',
          en:'Software Inspection Parameter — this section covers Global Parameter, Illumination Control, Alignment, 3D Inspection, 2D Inspection, and Barcode & OCR.',
          ko:'Software Inspection Parameter — Global Parameter, Illumination Control, Alignment, 3D Inspection, 2D Inspection, Barcode & OCR를 다룹니다.',
          zhCN:'Software Inspection Parameter——本节介绍Global Parameter、Illumination Control、Alignment、3D Inspection、2D Inspection、Barcode & OCR。',
          zhTW:'Software Inspection Parameter——本節介紹Global Parameter、Illumination Control、Alignment、3D Inspection、2D Inspection、Barcode & OCR。',
          ja:'Software Inspection Parameter——本節ではGlobal Parameter、Illumination Control、Alignment、3D Inspection、2D Inspection、Barcode & OCRを扱います。'
        }},
        {img:cmImg('I','smtv',15),tx:{
          vi:'2.1.3. Alignment\n\nAlignment so sánh tọa độ Gerber với ảnh thực tế để tính vị trí Bump thực, sau đó dùng trong kiểm tra 2D/3D. Cấu trúc: ① Parameter — thiết lập cần thiết cho tính toán Alignment. ② Debug Info — chọn nội dung hiển thị ở Image Window/Text Debug/Profile. ③ Image Window — hiển thị ảnh. ④ Text Debug/Profile — hiển thị kết quả Debug·Profile.',
          en:'2.1.3. Alignment\n\nAlignment compares Gerber coordinates with the actual image to calculate the real Bump positions, which are then used during 2D/3D inspection. Structure: ① Parameter — settings needed for alignment calculation. ② Debug Info — choose content shown in the image window/text debug/profile. ③ Image Window — displays images. ④ Text Debug/Profile — shows debug and profile results.',
          ko:'2.1.3. Alignment\n\nAlignment는 Gerber 좌표와 실제 이미지를 비교해 실제 Bump 위치를 계산하며, 이 값은 2D/3D 검사에 사용됩니다. 구성: ① Parameter — Alignment 계산에 필요한 설정. ② Debug Info — Image Window/Text Debug/Profile에 표시할 내용 선택. ③ Image Window — 이미지 표시. ④ Text Debug/Profile — Debug·Profile 결과 표시.',
          zhCN:'2.1.3. Alignment\n\nAlignment通过比较Gerber坐标与实际图像来计算真实的Bump位置,该值用于2D/3D检测。结构:① Parameter——Alignment计算所需的设置。② Debug Info——选择在Image Window/Text Debug/Profile中显示的内容。③ Image Window——显示图像。④ Text Debug/Profile——显示Debug·Profile结果。',
          zhTW:'2.1.3. Alignment\n\nAlignment透過比較Gerber座標與實際影像來計算真實的Bump位置,該值用於2D/3D檢測。結構:① Parameter——Alignment計算所需的設定。② Debug Info——選擇在Image Window/Text Debug/Profile中顯示的內容。③ Image Window——顯示影像。④ Text Debug/Profile——顯示Debug·Profile結果。',
          ja:'2.1.3. Alignment\n\nAlignmentはGerber座標と実際の画像を比較して実際のBump位置を計算し、この値は2D/3D検査に使用されます。構成:① Parameter — Alignment計算に必要な設定。② Debug Info — Image Window/Text Debug/Profileに表示する内容を選択。③ Image Window — 画像表示。④ Text Debug/Profile — Debug・Profile結果表示。'
        }},
        {img:cmImg('I','smtv',16),tx:{
          vi:'2.1.3. Alignment\n\nThreshold Offset: giá trị bù thêm vào Threshold tự động phát hiện — nếu đặt −256, ảnh đó sẽ bị loại khỏi Alignment. Global Search Offset: điều chỉnh kích thước vùng tìm kiếm Alignment (Bump Blob chỉ xuất hiện trong phạm vi này). Global Search Offset Corner Align: điều chỉnh kích thước vùng tìm kiếm cho Corner Alignment.',
          en:'2.1.3. Alignment\n\nThreshold Offset: additional offset added to the auto-detected threshold — if set to −256, that image is excluded from alignment. Global Search Offset: adjusts the alignment search-area size (bump blobs only occur within this size). Global Search Offset Corner Align: adjusts the search-area size for corner alignment.',
          ko:'2.1.3. Alignment\n\nThreshold Offset: 자동 감지된 Threshold에 더해지는 추가 Offset — −256으로 설정 시 해당 이미지는 Alignment에서 제외. Global Search Offset: Alignment 검색 영역 크기 조정(이 범위 내에서만 Bump Blob 발생). Global Search Offset Corner Align: Corner Alignment용 검색 영역 크기 조정.',
          zhCN:'2.1.3. Alignment\n\nThreshold Offset:自动检测到的Threshold之上追加的偏移值——设为−256时,该图像将被排除在Alignment之外。Global Search Offset:调整Alignment搜索区域大小(仅在此范围内产生Bump Blob)。Global Search Offset Corner Align:调整Corner Alignment用的搜索区域大小。',
          zhTW:'2.1.3. Alignment\n\nThreshold Offset:自動偵測到的Threshold之上追加的偏移值——設為−256時,該影像將被排除在Alignment之外。Global Search Offset:調整Alignment搜尋區域大小(僅在此範圍內產生Bump Blob)。Global Search Offset Corner Align:調整Corner Alignment用的搜尋區域大小。',
          ja:'2.1.3. Alignment\n\nThreshold Offset:自動検出されたThresholdに追加されるOffset値 — −256に設定するとその画像はAlignment対象から除外される。Global Search Offset:Alignment検索エリアのサイズを調整(この範囲内のみでBump Blobが発生)。Global Search Offset Corner Align:Corner Alignment用の検索エリアサイズを調整。'
        }},
        {img:cmImg('I','smtv',17),tx:{
          vi:'2.1.3. Alignment\n\nEach Bump Threshold Offset: Threshold Offset áp dụng riêng cho từng Bump. Distance to Bump Center: xác định vùng SR (Shadow Region) là hình chữ nhật lấy tâm Bump làm chuẩn.',
          en:'2.1.3. Alignment\n\nEach Bump Threshold Offset: threshold offset applied per bump. Distance to Bump Center: defines the bump SR (Shadow Region) area as a rectangle centered on the bump\'s center.',
          ko:'2.1.3. Alignment\n\nEach Bump Threshold Offset: Bump별로 적용되는 Threshold Offset. Distance to Bump Center: Bump 중심을 기준으로 한 사각형으로 SR(Shadow Region) 영역을 정의.',
          zhCN:'2.1.3. Alignment\n\nEach Bump Threshold Offset:按每个Bump应用的Threshold Offset。Distance to Bump Center:以Bump中心为基准的矩形来定义SR(Shadow Region)区域。',
          zhTW:'2.1.3. Alignment\n\nEach Bump Threshold Offset:按每個Bump套用的Threshold Offset。Distance to Bump Center:以Bump中心為基準的矩形來定義SR(Shadow Region)區域。',
          ja:'2.1.3. Alignment\n\nEach Bump Threshold Offset:Bumpごとに適用されるThreshold Offset。Distance to Bump Center:Bump中心を基準にした四角形でSR(Shadow Region)領域を定義。'
        }},
        {img:cmImg('I','smtv',18),tx:{
          vi:'2.1.3. Alignment\n\nSampling Max Ratio: tỷ lệ Bump tối đa dùng cho Alignment (Max Count = Tổng số Bump × Sampling Max Ratio). Sampling Min Count: số Bump tối thiểu dùng cho Alignment.',
          en:'2.1.3. Alignment\n\nSampling Max Ratio: maximum proportion of bumps used for alignment (Max Count = Total Bumps × Sampling Max Ratio). Sampling Min Count: minimum number of bumps used for alignment.',
          ko:'2.1.3. Alignment\n\nSampling Max Ratio: Alignment에 사용할 Bump의 최대 비율(Max Count = 전체 Bump 수 × Sampling Max Ratio). Sampling Min Count: Alignment에 사용할 최소 Bump 개수.',
          zhCN:'2.1.3. Alignment\n\nSampling Max Ratio:用于Alignment的Bump最大比例(Max Count = 总Bump数 × Sampling Max Ratio)。Sampling Min Count:用于Alignment的最少Bump数量。',
          zhTW:'2.1.3. Alignment\n\nSampling Max Ratio:用於Alignment的Bump最大比例(Max Count = 總Bump數 × Sampling Max Ratio)。Sampling Min Count:用於Alignment的最少Bump數量。',
          ja:'2.1.3. Alignment\n\nSampling Max Ratio:Alignmentに使用するBumpの最大比率(Max Count = 全Bump数 × Sampling Max Ratio)。Sampling Min Count:Alignmentに使用する最小Bump数。'
        }},
        {img:cmImg('I','smtv',19),tx:{
          vi:'2.1.3. Alignment\n\nShow Empty Check ROI: hiển thị UI để điều chỉnh Empty Check ROI. Use Empty Check: bật/tắt chức năng Empty Check. Empty Check Threshold: nếu độ sáng vùng C4 thấp hơn giá trị này, xác định là Empty. Empty Check ROI Left/Right/Top/Bottom: tọa độ ROI (tự động cập nhật khi chỉnh UI). Empty Check Index: số thứ tự ảnh dùng cho Empty Check (mặc định Frame 1).',
          en:'2.1.3. Alignment\n\nShow Empty Check ROI: opens the UI for adjusting the Empty Check ROI. Use Empty Check: enables the empty-check feature. Empty Check Threshold: if the C4-area brightness is below this value, it\'s classified as empty. Empty Check ROI Left/Right/Top/Bottom: ROI coordinates, auto-adjusted from UI changes. Empty Check Index: image number used for the check (default frame 1).',
          ko:'2.1.3. Alignment\n\nShow Empty Check ROI: Empty Check ROI 조정용 UI를 표시. Use Empty Check: Empty Check 기능 사용 여부. Empty Check Threshold: C4 영역 밝기가 이 값보다 낮으면 Empty로 판정. Empty Check ROI Left/Right/Top/Bottom: ROI 좌표(UI 조정 시 자동 반영). Empty Check Index: Empty Check에 사용할 이미지 번호(기본값 Frame 1).',
          zhCN:'2.1.3. Alignment\n\nShow Empty Check ROI:显示用于调整Empty Check ROI的UI。Use Empty Check:是否启用Empty Check功能。Empty Check Threshold:C4区域亮度低于此值时判定为Empty。Empty Check ROI Left/Right/Top/Bottom:ROI坐标(随UI调整自动反映)。Empty Check Index:用于Empty Check的图像编号(默认Frame 1)。',
          zhTW:'2.1.3. Alignment\n\nShow Empty Check ROI:顯示用於調整Empty Check ROI的UI。Use Empty Check:是否啟用Empty Check功能。Empty Check Threshold:C4區域亮度低於此值時判定為Empty。Empty Check ROI Left/Right/Top/Bottom:ROI座標(隨UI調整自動反映)。Empty Check Index:用於Empty Check的影像編號(預設Frame 1)。',
          ja:'2.1.3. Alignment\n\nShow Empty Check ROI:Empty Check ROI調整用UIを表示。Use Empty Check:Empty Check機能の使用可否。Empty Check Threshold:C4領域の輝度がこの値より低い場合はEmptyと判定。Empty Check ROI Left/Right/Top/Bottom:ROI座標(UI調整時に自動反映)。Empty Check Index:Empty Checkに使用する画像番号(デフォルトFrame 1)。'
        }},
        {img:cmImg('I','smtv',20),tx:{
          vi:'2.1.3. Alignment\n\nKhi khoảng cách giữa các Bump trông có vẻ xa (hình ①), có thể bị nhận nhầm là "không có Bump lân cận", gây lỗi Alignment. Lúc này dùng Anti Bump Gap để mở rộng khoảng cách tìm kiếm Bump lân cận, và tính Alignment dựa trên khoảng cách mở rộng đó.',
          en:'2.1.3. Alignment\n\nWhen the distance between bumps looks far apart (image ①), it can be mistaken for "no nearby bumps," causing misalignment. Anti Bump Gap extends the search distance around a bump so alignment is calculated based on that extended distance.',
          ko:'2.1.3. Alignment\n\n그림 ①처럼 Bump 사이 거리가 멀어 보이면 "주변에 Bump 없음"으로 잘못 인식되어 Alignment 오류가 발생할 수 있습니다. 이때 Anti Bump Gap을 사용해 주변 Bump 탐색 거리를 확장, 이 확장된 거리를 기준으로 Alignment를 계산합니다.',
          zhCN:'2.1.3. Alignment\n\n如图①所示,若Bump之间距离显得较远,可能被误判为"周围无Bump",从而导致Alignment错误。此时可使用Anti Bump Gap扩展周围Bump的搜索距离,并以该扩展距离为基准计算Alignment。',
          zhTW:'2.1.3. Alignment\n\n如圖①所示,若Bump之間距離顯得較遠,可能被誤判為「周圍無Bump」,從而導致Alignment錯誤。此時可使用Anti Bump Gap擴展周圍Bump的搜尋距離,並以該擴展距離為基準計算Alignment。',
          ja:'2.1.3. Alignment\n\n画像①のようにBump間の距離が離れて見えると、「周辺にBumpなし」と誤認識されAlignmentエラーが発生することがあります。この場合、Anti Bump Gapを使って周辺Bumpの探索距離を拡張し、その拡張距離を基準にAlignmentを計算します。'
        }},
        {img:cmImg('I','smtv',21),tx:{
          vi:'2.1.3. Alignment',
          en:'2.1.3. Alignment',
          ko:'2.1.3. Alignment',
          zhCN:'2.1.3. Alignment',
          zhTW:'2.1.3. Alignment',
          ja:'2.1.3. Alignment'
        }},
        {img:cmImg('I','smtv',22),tx:{
          vi:'2.1.3. Alignment\n\nNhấn Debug Info để hiển thị kết quả trung gian ở Text Debug, Image Window, Profile, xác nhận Test đã chạy đúng.',
          en:'2.1.3. Alignment\n\nClick Debug Info to display intermediate results in Text Debug, Image Window, and Profile, verifying the test executed correctly.',
          ko:'2.1.3. Alignment\n\nDebug Info를 클릭하면 Text Debug, Image Window, Profile에 중간 결과가 표시되어 테스트가 올바르게 실행되었는지 확인할 수 있습니다.',
          zhCN:'2.1.3. Alignment\n\n点击Debug Info后,Text Debug、Image Window、Profile中会显示中间结果,可确认测试是否正确执行。',
          zhTW:'2.1.3. Alignment\n\n點擊Debug Info後,Text Debug、Image Window、Profile中會顯示中間結果,可確認測試是否正確執行。',
          ja:'2.1.3. Alignment\n\nDebug Infoをクリックすると、Text Debug、Image Window、Profileに中間結果が表示され、テストが正しく実行されたか確認できます。'
        }},
        {img:cmImg('I','smtv',23),tx:{
          vi:'2.1.3. Alignment\n\nAlignment được tính đúng khi tất cả Bump nằm trong vùng ngoài của Search ROI trong ảnh.',
          en:'2.1.3. Alignment\n\nAlignment is correctly calculated when every bump is contained within the outer area of the search ROI in the image.',
          ko:'2.1.3. Alignment\n\n이미지 내 Search ROI 외곽 영역 안에 모든 Bump가 포함되어 있으면 Alignment가 올바르게 계산된 것입니다.',
          zhCN:'2.1.3. Alignment\n\n当图像中所有Bump都包含在Search ROI外围区域内时,表示Alignment计算正确。',
          zhTW:'2.1.3. Alignment\n\n當影像中所有Bump都包含在Search ROI外圍區域內時,表示Alignment計算正確。',
          ja:'2.1.3. Alignment\n\n画像内のSearch ROI外周エリア内にすべてのBumpが含まれていれば、Alignmentが正しく計算されています。'
        }},
        {img:cmImg('I','smtv',24),tx:{
          vi:'Software Inspection Parameter — phần này đề cập đến Global Parameter, Illumination Control, Alignment, 3D Inspection, 2D Inspection và Barcode & OCR.',
          en:'Software Inspection Parameter — this section covers Global Parameter, Illumination Control, Alignment, 3D Inspection, 2D Inspection, and Barcode & OCR.',
          ko:'Software Inspection Parameter — Global Parameter, Illumination Control, Alignment, 3D Inspection, 2D Inspection, Barcode & OCR를 다룹니다.',
          zhCN:'Software Inspection Parameter——本节介绍Global Parameter、Illumination Control、Alignment、3D Inspection、2D Inspection、Barcode & OCR。',
          zhTW:'Software Inspection Parameter——本節介紹Global Parameter、Illumination Control、Alignment、3D Inspection、2D Inspection、Barcode & OCR。',
          ja:'Software Inspection Parameter——本節ではGlobal Parameter、Illumination Control、Alignment、3D Inspection、2D Inspection、Barcode & OCRを扱います。'
        }},
        {img:cmImg('I','smtv',25),tx:{
          vi:'2.1.4. 3D Inspection\n\n3D Inspection tính chiều cao của từng vùng Bump và vùng SR (Shadow Region) xung quanh, dùng vị trí Bump đã tính ở Alignment. Cấu trúc: ① Parameter — thiết lập cần thiết cho tính toán 3D. ② Debug Info — chọn nội dung hiển thị ở Image Window/Text Debug/Profile. ③ Image Window — hiển thị ảnh. ④ Text Debug/Profile — hiển thị kết quả Debug·Profile.',
          en:'2.1.4. 3D Inspection\n\n3D Inspection calculates the height of each bump area and its surrounding SR (Shadow Region) using the bump positions computed during Alignment. Structure: ① Parameter — settings needed for 3D calculation. ② Debug Info — choose content shown in the image window/text debug/profile. ③ Image Window — displays images. ④ Text Debug/Profile — shows debug and profile results.',
          ko:'2.1.4. 3D Inspection\n\n3D Inspection은 Alignment에서 계산된 Bump 위치를 이용해 각 Bump 영역과 주변 SR(Shadow Region) 영역의 높이를 계산합니다. 구성: ① Parameter — 3D 계산에 필요한 설정. ② Debug Info — Image Window/Text Debug/Profile에 표시할 내용 선택. ③ Image Window — 이미지 표시. ④ Text Debug/Profile — Debug·Profile 결과 표시.',
          zhCN:'2.1.4. 3D Inspection\n\n3D Inspection利用Alignment计算出的Bump位置,计算各Bump区域及周边SR(Shadow Region)区域的高度。结构:① Parameter——3D计算所需设置。② Debug Info——选择在Image Window/Text Debug/Profile中显示的内容。③ Image Window——显示图像。④ Text Debug/Profile——显示Debug·Profile结果。',
          zhTW:'2.1.4. 3D Inspection\n\n3D Inspection利用Alignment計算出的Bump位置,計算各Bump區域及周邊SR(Shadow Region)區域的高度。結構:① Parameter——3D計算所需設定。② Debug Info——選擇在Image Window/Text Debug/Profile中顯示的內容。③ Image Window——顯示影像。④ Text Debug/Profile——顯示Debug·Profile結果。',
          ja:'2.1.4. 3D Inspection\n\n3D InspectionはAlignmentで計算されたBump位置を用いて、各Bump領域と周辺SR(Shadow Region)領域の高さを計算します。構成:① Parameter — 3D計算に必要な設定。② Debug Info — Image Window/Text Debug/Profileに表示する内容を選択。③ Image Window — 画像表示。④ Text Debug/Profile — Debug・Profile結果表示。'
        }},
        {img:cmImg('I','smtv',26),tx:{
          vi:'2.1.4. 3D Inspection\n\nTham số kiểm tra chiều cao gồm tham số cơ bản và tham số riêng theo SRO (tham số Bump Type·Substrate). Khi tính vùng Bump Top, áp dụng trọng số theo độ hiển thị của từng Pixel.',
          en:'2.1.4. 3D Inspection\n\nHeight-inspection parameters include basic parameters and SRO-specific parameters (bump-type and substrate parameters). When computing the bump top area, weighting is applied based on each pixel\'s visibility.',
          ko:'2.1.4. 3D Inspection\n\n높이 검사 Parameter는 기본 Parameter와 SRO별 Parameter(Bump Type·Substrate Parameter)로 구성됩니다. Bump Top 영역 계산 시 Pixel 시인성에 따라 가중치를 적용합니다.',
          zhCN:'2.1.4. 3D Inspection\n\n高度检测Parameter由基本Parameter及SRO专属Parameter(Bump Type·Substrate Parameter)构成。计算Bump Top区域时,依Pixel可视性施加权重。',
          zhTW:'2.1.4. 3D Inspection\n\n高度檢測Parameter由基本Parameter及SRO專屬Parameter(Bump Type·Substrate Parameter)構成。計算Bump Top區域時,依Pixel可視性施加權重。',
          ja:'2.1.4. 3D Inspection\n\n高さ検査Parameterは基本ParameterとSRO別Parameter(Bump Type・Substrate Parameter)で構成されます。Bump Top領域の計算時、Pixelの視認性に応じて重み付けを行います。'
        }},
        {img:cmImg('I','smtv',27),tx:{
          vi:'2.1.4. 3D Inspection\n\nBump Position Definition — định nghĩa tâm Bump: Aligned Gerber Bump Center (tâm theo chuẩn Alignment Gerber), 2D Blob Mass Center (trọng tâm Blob trên ảnh 2D), 3D Blob Mass Center (trọng tâm Blob trên ảnh 3D).',
          en:'2.1.4. 3D Inspection\n\nBump Position Definition — defines the bump\'s center point: Aligned Gerber Bump Center (center per gerber alignment), 2D Blob Mass Center (mass center in the 2D image), 3D Blob Mass Center (mass center in the 3D image).',
          ko:'2.1.4. 3D Inspection\n\nBump Position Definition — Bump 중심점 정의: Aligned Gerber Bump Center(Gerber 정렬 기준 중심), 2D Blob Mass Center(2D 이미지상 Blob 무게중심), 3D Blob Mass Center(3D 이미지상 Blob 무게중심).',
          zhCN:'2.1.4. 3D Inspection\n\nBump Position Definition——定义Bump中心点:Aligned Gerber Bump Center(按Gerber对准的中心)、2D Blob Mass Center(2D图像中Blob的质心)、3D Blob Mass Center(3D图像中Blob的质心)。',
          zhTW:'2.1.4. 3D Inspection\n\nBump Position Definition——定義Bump中心點:Aligned Gerber Bump Center(依Gerber對準的中心)、2D Blob Mass Center(2D影像中Blob的質心)、3D Blob Mass Center(3D影像中Blob的質心)。',
          ja:'2.1.4. 3D Inspection\n\nBump Position Definition — Bumpの中心点を定義:Aligned Gerber Bump Center(Gerber整列基準の中心)、2D Blob Mass Center(2D画像上のBlob重心)、3D Blob Mass Center(3D画像上のBlob重心)。'
        }},
        {img:cmImg('I','smtv',28),tx:{
          vi:'2.1.4. 3D Inspection\n\nSR Data Fitting: có dùng phương trình mặt phẳng khi tính chiều cao vùng SR (Shadow Region) hay không.',
          en:'2.1.4. 3D Inspection\n\nSR Data Fitting: whether to use a plane equation when calculating the SR (Shadow Region) area\'s height.',
          ko:'2.1.4. 3D Inspection\n\nSR Data Fitting: SR(Shadow Region) 영역 높이 계산 시 평면 방정식 사용 여부.',
          zhCN:'2.1.4. 3D Inspection\n\nSR Data Fitting:计算SR(Shadow Region)区域高度时是否使用平面方程式。',
          zhTW:'2.1.4. 3D Inspection\n\nSR Data Fitting:計算SR(Shadow Region)區域高度時是否使用平面方程式。',
          ja:'2.1.4. 3D Inspection\n\nSR Data Fitting:SR(Shadow Region)領域の高さ計算時に平面方程式を使用するかどうか。'
        }},
        {img:cmImg('I','smtv',29),tx:{
          vi:'2.1.4. 3D Inspection\n\nOuter Diameter Ratio: tỷ lệ vùng Bump dùng để tính chiều cao (vòng ngoài). Inner Diameter Ratio: tỷ lệ tính theo vòng trong.',
          en:'2.1.4. 3D Inspection\n\nOuter Diameter Ratio: proportion of the bump area used in the height calculation (outer circle). Inner Diameter Ratio: proportion used for the inner circle.',
          ko:'2.1.4. 3D Inspection\n\nOuter Diameter Ratio: 높이 계산에 사용할 Bump 영역 비율(외곽 원). Inner Diameter Ratio: 내곽 원 기준 비율.',
          zhCN:'2.1.4. 3D Inspection\n\nOuter Diameter Ratio:用于高度计算的Bump区域比例(外圆)。Inner Diameter Ratio:内圆基准比例。',
          zhTW:'2.1.4. 3D Inspection\n\nOuter Diameter Ratio:用於高度計算的Bump區域比例(外圓)。Inner Diameter Ratio:內圓基準比例。',
          ja:'2.1.4. 3D Inspection\n\nOuter Diameter Ratio:高さ計算に使用するBump領域の比率(外周円)。Inner Diameter Ratio:内周円基準の比率。'
        }},
        {img:cmImg('I','smtv',30),tx:{
          vi:'2.1.4. 3D Inspection\n\nCalculation Algorithm — chọn cách tổng hợp chiều cao Pixel: Top Percent Average (giảm dần, theo tỷ lệ %), Bottom Percent Average (tăng dần, theo tỷ lệ %), Top Count Average (giảm dần, theo số Pixel), Bottom Count Average (tăng dần, theo số Pixel).',
          en:'2.1.4. 3D Inspection\n\nCalculation Algorithm — choose how pixel heights are aggregated: Top Percent Average (descending order, by percentage), Bottom Percent Average (ascending order, by percentage), Top Count Average (descending order, by pixel count), Bottom Count Average (ascending order, by pixel count).',
          ko:'2.1.4. 3D Inspection\n\nCalculation Algorithm — Pixel 높이 집계 방식 선택: Top Percent Average(내림차순, 비율 기준), Bottom Percent Average(오름차순, 비율 기준), Top Count Average(내림차순, Pixel 수 기준), Bottom Count Average(오름차순, Pixel 수 기준).',
          zhCN:'2.1.4. 3D Inspection\n\nCalculation Algorithm——选择Pixel高度汇总方式:Top Percent Average(降序,按比例)、Bottom Percent Average(升序,按比例)、Top Count Average(降序,按Pixel数)、Bottom Count Average(升序,按Pixel数)。',
          zhTW:'2.1.4. 3D Inspection\n\nCalculation Algorithm——選擇Pixel高度彙總方式:Top Percent Average(降序,依比例)、Bottom Percent Average(升序,依比例)、Top Count Average(降序,依Pixel數)、Bottom Count Average(升序,依Pixel數)。',
          ja:'2.1.4. 3D Inspection\n\nCalculation Algorithm — Pixel高さの集計方法を選択:Top Percent Average(降順、割合基準)、Bottom Percent Average(昇順、割合基準)、Top Count Average(降順、Pixel数基準)、Bottom Count Average(昇順、Pixel数基準)。'
        }},
        {img:cmImg('I','smtv',31),tx:{
          vi:'2.1.4. 3D Inspection\n\nCalculation Algorithm (tiếp theo) — ví dụ minh họa cách tính trung bình Top Count / Bottom Count.',
          en:'2.1.4. 3D Inspection\n\nCalculation Algorithm (continued) — illustration of Top Count / Bottom Count averaging.',
          ko:'2.1.4. 3D Inspection\n\nCalculation Algorithm(계속) — Top Count / Bottom Count 평균 방식 예시.',
          zhCN:'2.1.4. 3D Inspection\n\nCalculation Algorithm(续)——Top Count / Bottom Count平均方式示例。',
          zhTW:'2.1.4. 3D Inspection\n\nCalculation Algorithm(續)——Top Count / Bottom Count平均方式範例。',
          ja:'2.1.4. 3D Inspection\n\nCalculation Algorithm(続き)— Top Count / Bottom Count平均方式の例。'
        }},
        {img:cmImg('I','smtv',32),tx:{
          vi:'2.1.4. 3D Inspection\n\nUse Damage Recalc: nếu True, tính lại Bump bị hỏng. Damage Height Upper/Lower: khoảng chiều cao xác định là Bump bị hỏng. Damage Recalc Percent: tỷ lệ dữ liệu tham gia tính lại Bump Top.',
          en:'2.1.4. 3D Inspection\n\nUse Damage Recalc: if true, recalculates a damaged bump. Damage Height Upper/Lower: height range considered a damaged bump. Damage Recalc Percent: percentage of data used in the recalculated bump-top calculation.',
          ko:'2.1.4. 3D Inspection\n\nUse Damage Recalc: True 시 손상 Bump 재계산. Damage Height Upper/Lower: 손상 Bump로 판단하는 높이 범위. Damage Recalc Percent: 재계산 시 Bump Top 계산에 참여하는 데이터 비율.',
          zhCN:'2.1.4. 3D Inspection\n\nUse Damage Recalc:为True时对受损Bump进行重新计算。Damage Height Upper/Lower:判定为受损Bump的高度范围。Damage Recalc Percent:重新计算时参与Bump Top计算的数据比例。',
          zhTW:'2.1.4. 3D Inspection\n\nUse Damage Recalc:為True時對受損Bump進行重新計算。Damage Height Upper/Lower:判定為受損Bump的高度範圍。Damage Recalc Percent:重新計算時參與Bump Top計算的資料比例。',
          ja:'2.1.4. 3D Inspection\n\nUse Damage Recalc:Trueの場合、損傷Bumpを再計算。Damage Height Upper/Lower:損傷Bumpと判定する高さ範囲。Damage Recalc Percent:再計算時にBump Top計算に参加するデータの割合。'
        }},
        {img:cmImg('I','smtv',33),tx:{
          vi:'2.1.4. 3D Inspection\n\nBump Type: POR (hình dạng giống Dome), Dome (hình bán nguyệt), Recess (tâm lõm xuống).',
          en:'2.1.4. 3D Inspection\n\nBump Type: POR (same shape as the dome), Dome (semicircular shape), Recess (concave center).',
          ko:'2.1.4. 3D Inspection\n\nBump Type: POR(Dome과 동일 형상), Dome(반원 형상), Recess(중앙이 오목한 형상).',
          zhCN:'2.1.4. 3D Inspection\n\nBump Type:POR(与Dome形状相同)、Dome(半圆形状)、Recess(中央凹陷形状)。',
          zhTW:'2.1.4. 3D Inspection\n\nBump Type:POR(與Dome形狀相同)、Dome(半圓形狀)、Recess(中央凹陷形狀)。',
          ja:'2.1.4. 3D Inspection\n\nBump Type:POR(Domeと同じ形状)、Dome(半円形状)、Recess(中央が凹んだ形状)。'
        }},
        {img:cmImg('I','smtv',34),tx:{
          vi:'2.1.4. 3D Inspection\n\nBump Ignore Diameter Ratio: tỷ lệ vùng Bump bị loại khỏi tính toán. Calculation Diameter Ratio: tỷ lệ vùng dùng để tính — đường kính cuối cùng = Ignore Diameter Ratio × đường kính vùng Bump.',
          en:'2.1.4. 3D Inspection\n\nBump Ignore Diameter Ratio: proportion of the bump area excluded from calculation. Calculation Diameter Ratio: proportion of the area used — the final diameter is Ignore Diameter Ratio × bump-area diameter.',
          ko:'2.1.4. 3D Inspection\n\nBump Ignore Diameter Ratio: 계산에서 제외할 Bump 영역 비율. Calculation Diameter Ratio: 계산에 사용할 영역 비율 — 최종 지름은 Ignore Diameter Ratio × Bump 영역 지름으로 산출.',
          zhCN:'2.1.4. 3D Inspection\n\nBump Ignore Diameter Ratio:计算中排除的Bump区域比例。Calculation Diameter Ratio:计算所用区域比例——最终直径由Ignore Diameter Ratio × Bump区域直径得出。',
          zhTW:'2.1.4. 3D Inspection\n\nBump Ignore Diameter Ratio:計算中排除的Bump區域比例。Calculation Diameter Ratio:計算所用區域比例——最終直徑由Ignore Diameter Ratio × Bump區域直徑得出。',
          ja:'2.1.4. 3D Inspection\n\nBump Ignore Diameter Ratio:計算から除外するBump領域の比率。Calculation Diameter Ratio:計算に使用する領域の比率 — 最終的な直径はIgnore Diameter Ratio × Bump領域の直径で求める。'
        }},
        {img:cmImg('I','smtv',35),tx:{
          vi:'2.1.4. 3D Inspection\n\nChiều dài vùng cuối cùng = Calculation Diameter Ratio × đường kính vùng Bump. Khi tính Substrate, vùng tính được chia thành Block X Count × Block X Count Block.',
          en:'2.1.4. 3D Inspection\n\nThe final area length = Calculation Diameter Ratio × Bump area diameter. When calculating the substrate, the calculation area is divided into Block X Count × Block X Count blocks.',
          ko:'2.1.4. 3D Inspection\n\n최종 영역 길이 = Calculation Diameter Ratio × Bump 영역 지름. Substrate 계산 시 계산 영역을 Block X Count × Block X Count개의 Block으로 분할합니다.',
          zhCN:'2.1.4. 3D Inspection\n\n最终区域长度 = Calculation Diameter Ratio × Bump区域直径。计算Substrate时,将计算区域划分为Block X Count × Block X Count个Block。',
          zhTW:'2.1.4. 3D Inspection\n\n最終區域長度 = Calculation Diameter Ratio × Bump區域直徑。計算Substrate時,將計算區域劃分為Block X Count × Block X Count個Block。',
          ja:'2.1.4. 3D Inspection\n\n最終エリア長 = Calculation Diameter Ratio × Bump領域直径。Substrate計算時、計算エリアをBlock X Count × Block X Count個のBlockに分割します。'
        }},
        {img:cmImg('I','smtv',36),tx:{
          vi:'2.1.4. 3D Inspection\n\nUse Relative Top Z: nếu True, dùng chiều cao trung bình của Bump lân cận khi tính chiều cao vùng SR (chủ yếu dùng cho Bump Coreless có độ phản xạ thấp). Relative Top Z Offset: giá trị bù dùng trong tính toán đó (nhập thủ công sau khi kiểm tra VM Log). Relative Top Z Area: vùng sử dụng — tối thiểu gấp 2 lần đường kính Bump nhỏ nhất. Relative SR Z Under Limit: dữ liệu nhỏ hơn giá trị này bị loại khỏi tính toán vùng SR.',
          en:'2.1.4. 3D Inspection\n\nUse Relative Top Z: if true, uses the average height of surrounding bumps when calculating the SR area height (mainly for low-reflectivity coreless bumps). Relative Top Z Offset: offset value used in that calculation (input manually after checking VM logs). Relative Top Z Area: the area used — should be at least twice the minimum bump diameter. Relative SR Z Under Limit: excludes data below this value from SR-area calculation.',
          ko:'2.1.4. 3D Inspection\n\nUse Relative Top Z: True 시 SR 영역 높이 계산에 주변 Bump 평균 높이 사용(반사율 낮은 Coreless Bump에 주로 사용). Relative Top Z Offset: 해당 계산의 Offset 값(VM Log 확인 후 수동 입력). Relative Top Z Area: 사용할 영역 — 최소 Bump 지름의 2배 이상. Relative SR Z Under Limit: 이 값보다 작은 데이터는 SR 영역 계산에서 제외.',
          zhCN:'2.1.4. 3D Inspection\n\nUse Relative Top Z:为True时,在计算SR区域高度时使用周边Bump的平均高度(主要用于反射率低的Coreless Bump)。Relative Top Z Offset:该计算所用的偏移值(需查看VM Log后手动输入)。Relative Top Z Area:使用的区域——至少为最小Bump直径的2倍。Relative SR Z Under Limit:小于该值的数据将从SR区域计算中排除。',
          zhTW:'2.1.4. 3D Inspection\n\nUse Relative Top Z:為True時,在計算SR區域高度時使用周邊Bump的平均高度(主要用於反射率低的Coreless Bump)。Relative Top Z Offset:該計算所用的偏移值(需查看VM Log後手動輸入)。Relative Top Z Area:使用的區域——至少為最小Bump直徑的2倍。Relative SR Z Under Limit:小於該值的資料將從SR區域計算中排除。',
          ja:'2.1.4. 3D Inspection\n\nUse Relative Top Z:Trueの場合、SR領域の高さ計算に周辺Bumpの平均高さを使用(反射率の低いCoreless Bumpに主に使用)。Relative Top Z Offset:その計算に使うOffset値(VM Log確認後に手動入力)。Relative Top Z Area:使用する領域 — 最小Bump直径の2倍以上。Relative SR Z Under Limit:この値より小さいデータはSR領域計算から除外。'
        }},
        {img:cmImg('I','smtv',37),tx:{
          vi:'2.1.4. 3D Inspection\n\nUse Substrate Fitting: có dùng phương trình mặt phẳng khi tính chiều cao Substrate hay không. Ratio of Substrate Fitting Area / Bump Ignore Diameter Ratio of Substrate / Remove Ratio of Substrate Fitting: tỷ lệ vùng SR dùng·loại·bỏ cho phương trình mặt phẳng. Use Substrate Block Max Range: dùng giá trị lớn nhất mỗi Block làm chiều cao SR. Substrate Block X Count: chia vùng SR thành n×n Block. Substrate Block Remove Count: số Block loại bỏ ở trên/dưới (nếu là 1 thì loại 1 Block cao nhất và 1 Block thấp nhất, tổng 2 Block).',
          en:'2.1.4. 3D Inspection\n\nUse Substrate Fitting: whether to use a plane equation for substrate height. Ratio of Substrate Fitting Area / Bump Ignore Diameter Ratio of Substrate / Remove Ratio of Substrate Fitting: proportions of the SR area used/excluded/removed for that equation. Use Substrate Block Max Range: use each block\'s max value as the SR height. Substrate Block X Count: divides the SR area into n×n blocks. Substrate Block Remove Count: number of top/bottom blocks removed (e.g. 1 removes the top-1 and bottom-1, 2 blocks total).',
          ko:'2.1.4. 3D Inspection\n\nUse Substrate Fitting: Substrate 높이 계산에 평면 방정식 사용 여부. Ratio of Substrate Fitting Area / Bump Ignore Diameter Ratio of Substrate / Remove Ratio of Substrate Fitting: 평면 방정식에 사용·제외·제거할 SR 영역 비율. Use Substrate Block Max Range: 각 Block의 최댓값을 SR 높이로 사용. Substrate Block X Count: SR 영역을 n×n Block으로 분할. Substrate Block Remove Count: 상하위 제거할 Block 수(1이면 상위1·하위1 총 2개 제거).',
          zhCN:'2.1.4. 3D Inspection\n\nUse Substrate Fitting:计算Substrate高度时是否使用平面方程式。Ratio of Substrate Fitting Area / Bump Ignore Diameter Ratio of Substrate / Remove Ratio of Substrate Fitting:平面方程式所用·排除·移除的SR区域比例。Use Substrate Block Max Range:以各Block最大值作为SR高度。Substrate Block X Count:将SR区域划分为n×n个Block。Substrate Block Remove Count:上下移除的Block数量(为1时移除最高1个、最低1个,共2个)。',
          zhTW:'2.1.4. 3D Inspection\n\nUse Substrate Fitting:計算Substrate高度時是否使用平面方程式。Ratio of Substrate Fitting Area / Bump Ignore Diameter Ratio of Substrate / Remove Ratio of Substrate Fitting:平面方程式所用·排除·移除的SR區域比例。Use Substrate Block Max Range:以各Block最大值作為SR高度。Substrate Block X Count:將SR區域劃分為n×n個Block。Substrate Block Remove Count:上下移除的Block數量(為1時移除最高1個、最低1個,共2個)。',
          ja:'2.1.4. 3D Inspection\n\nUse Substrate Fitting:Substrate高さ計算に平面方程式を使用するかどうか。Ratio of Substrate Fitting Area / Bump Ignore Diameter Ratio of Substrate / Remove Ratio of Substrate Fitting:平面方程式に使用・除外・除去するSR領域の比率。Use Substrate Block Max Range:各Blockの最大値をSR高さとして使用。Substrate Block X Count:SR領域をn×n個のBlockに分割。Substrate Block Remove Count:上下で除去するBlock数(1なら上位1・下位1の計2個を除去)。'
        }},
        {img:cmImg('I','smtv',38),tx:{
          vi:'2.1.4. 3D Inspection\n\nUse Inspection: có dùng kiểm tra đường kính hay không. Select Image: ảnh sử dụng. Image Operator: phép toán (cộng/trừ/nhân/trung bình) giữa Image1 và Image2. Center Point Type: Align Center (tâm theo chuẩn Alignment) / Point Center (trọng tâm Edge Point phát hiện được) / Filter Center (trọng tâm sau khi lọc Edge Point). Distance Noise Min/Max: sau khi sắp xếp độ dài từ tâm đến Edge Point, giá trị ngoài phạm vi Min/Max quanh trung vị bị coi là Noise và lọc bỏ.',
          en:'2.1.4. 3D Inspection\n\nUse Inspection: whether to use diameter inspection. Select Image: the image used. Image Operator: operation (add/subtract/multiply/average) between Image1 and Image2. Center Point Type: Align Center (aligned-bump center) / Point Center (detected edge-point centroid) / Filter Center (centroid after filtering edge points). Distance Noise Min/Max: after sorting center-to-edge lengths, values outside the min/max range around the median are treated as noise and filtered out.',
          ko:'2.1.4. 3D Inspection\n\nUse Inspection: 지름 검사 사용 여부. Select Image: 사용할 이미지. Image Operator: Image1·Image2 간 연산(덧셈/뺄셈/곱셈/평균). Center Point Type: Align Center(정렬 기준 중심) / Point Center(검출된 Edge Point 무게중심) / Filter Center(Edge Point 필터링 후 무게중심). Distance Noise Min/Max: 중심-Edge Point 거리를 정렬 후, 중앙값 기준 Min/Max 범위 밖 값은 Noise로 필터링.',
          zhCN:'2.1.4. 3D Inspection\n\nUse Inspection:是否使用直径检测。Select Image:使用的图像。Image Operator:Image1与Image2之间的运算(加/减/乘/平均)。Center Point Type:Align Center(对准基准中心)/ Point Center(检测到的Edge Point质心)/ Filter Center(Edge Point过滤后的质心)。Distance Noise Min/Max:对中心到Edge Point的距离排序后,中位数周围Min/Max范围外的值视为Noise并过滤。',
          zhTW:'2.1.4. 3D Inspection\n\nUse Inspection:是否使用直徑檢測。Select Image:使用的影像。Image Operator:Image1與Image2之間的運算(加/減/乘/平均)。Center Point Type:Align Center(對準基準中心)/ Point Center(偵測到的Edge Point質心)/ Filter Center(Edge Point過濾後的質心)。Distance Noise Min/Max:對中心到Edge Point的距離排序後,中位數周圍Min/Max範圍外的值視為Noise並過濾。',
          ja:'2.1.4. 3D Inspection\n\nUse Inspection:直径検査を使用するかどうか。Select Image:使用する画像。Image Operator:Image1とImage2間の演算(加算/減算/乗算/平均)。Center Point Type:Align Center(整列基準の中心)/ Point Center(検出したEdge Pointの重心)/ Filter Center(Edge Pointフィルタリング後の重心)。Distance Noise Min/Max:中心からEdge Pointまでの距離をソート後、中央値周辺のMin/Max範囲外の値はNoiseとしてフィルタリング。'
        }},
        {img:cmImg('I','smtv',39),tx:{
          vi:'2.1.4. 3D Inspection\n\nDeviation Spec: dùng để tính đường kính — xác định phạm vi hợp lệ bằng cách cộng/trừ giá trị này với độ dài trung bình từ tâm đến Edge Point.',
          en:'2.1.4. 3D Inspection\n\nDeviation Spec: used in diameter calculation — defines the acceptable range around the average center-to-edge length by adding/subtracting this value.',
          ko:'2.1.4. 3D Inspection\n\nDeviation Spec: 지름 계산에 사용 — 중심-Edge Point 평균 거리에 이 값을 가감한 범위를 유효 범위로 지정.',
          zhCN:'2.1.4. 3D Inspection\n\nDeviation Spec:用于直径计算——以中心到Edge Point的平均距离为基准,加减该值所得范围为有效范围。',
          zhTW:'2.1.4. 3D Inspection\n\nDeviation Spec:用於直徑計算——以中心到Edge Point的平均距離為基準,加減該值所得範圍為有效範圍。',
          ja:'2.1.4. 3D Inspection\n\nDeviation Spec:直径計算に使用 — 中心からEdge Pointまでの平均距離にこの値を加減した範囲を有効範囲とする。'
        }},
        {img:cmImg('I','smtv',40),tx:{
          vi:'2.1.4. 3D Inspection\n\nIntonation: loại Edge Point chọn theo thay đổi độ sáng — Rising (độ sáng tăng), Falling (độ sáng giảm), Both (dùng cả hai). Edge Direction: Out to In (từ ngoài vào trong Bump) hoặc In to Out (từ trong ra ngoài).',
          en:'2.1.4. 3D Inspection\n\nIntonation: which edge-point type to select based on brightness change — Rising (brightness increasing), Falling (brightness decreasing), Both (uses both). Edge Direction: Out to In (outside→inside of the bump) or In to Out (inside→outside).',
          ko:'2.1.4. 3D Inspection\n\nIntonation: 밝기 변화 기준으로 선택할 Edge Point 유형 — Rising(밝기 증가), Falling(밝기 감소), Both(둘 다 사용). Edge Direction: Out to In(Bump 바깥→안쪽) 또는 In to Out(안쪽→바깥).',
          zhCN:'2.1.4. 3D Inspection\n\nIntonation:根据亮度变化选择的Edge Point类型——Rising(亮度上升)、Falling(亮度下降)、Both(两者皆用)。Edge Direction:Out to In(Bump外→内)或In to Out(内→外)。',
          zhTW:'2.1.4. 3D Inspection\n\nIntonation:根據亮度變化選擇的Edge Point類型——Rising(亮度上升)、Falling(亮度下降)、Both(兩者皆用)。Edge Direction:Out to In(Bump外→內)或In to Out(內→外)。',
          ja:'2.1.4. 3D Inspection\n\nIntonation:輝度変化に基づき選択するEdge Pointの種類 — Rising(輝度上昇)、Falling(輝度下降)、Both(両方使用)。Edge Direction:Out to In(Bump外側→内側)またはIn to Out(内側→外側)。'
        }},
        {img:cmImg('I','smtv',41),tx:{
          vi:'2.1.4. 3D Inspection\n\nEdge Outer Length: phạm vi phát hiện Edge (Diameter Spec + Edge Outer Length tính từ tâm). Edge Threshold: mức thay đổi độ sáng tối thiểu để nhận là Edge Point. Edge Count: số Edge Point cần phát hiện. Gain/Offset: tham số hiệu chỉnh giá trị kết quả.',
          en:'2.1.4. 3D Inspection\n\nEdge Outer Length: range around the center point for edge detection (Diameter Spec + Edge Outer Length from center). Edge Threshold: minimum brightness change to register an edge point. Edge Count: number of edge points to detect. Gain/Offset: parameters for adjusting the resulting values.',
          ko:'2.1.4. 3D Inspection\n\nEdge Outer Length: Edge 검출 범위(중심점 기준 Diameter Spec + Edge Outer Length). Edge Threshold: Edge Point로 인식할 최소 밝기 변화량. Edge Count: 검출할 Edge Point 개수. Gain/Offset: 결과값 보정용 Parameter.',
          zhCN:'2.1.4. 3D Inspection\n\nEdge Outer Length:Edge检测范围(以中心点为基准的Diameter Spec + Edge Outer Length)。Edge Threshold:判定为Edge Point所需的最小亮度变化量。Edge Count:要检测的Edge Point数量。Gain/Offset:用于校正结果值的Parameter。',
          zhTW:'2.1.4. 3D Inspection\n\nEdge Outer Length:Edge偵測範圍(以中心點為基準的Diameter Spec + Edge Outer Length)。Edge Threshold:判定為Edge Point所需的最小亮度變化量。Edge Count:要偵測的Edge Point數量。Gain/Offset:用於校正結果值的Parameter。',
          ja:'2.1.4. 3D Inspection\n\nEdge Outer Length:Edge検出範囲(中心点基準のDiameter Spec + Edge Outer Length)。Edge Threshold:Edge Pointと判定する最小輝度変化量。Edge Count:検出するEdge Point数。Gain/Offset:結果値を補正するためのParameter。'
        }},
        {img:cmImg('I','smtv',42),tx:{
          vi:'2.1.4. 3D Inspection\n\nNhấn Debug Info để hiển thị kết quả trung gian ở Text Debug, Image Window, Profile, xác nhận Test đã chạy đúng.',
          en:'2.1.4. 3D Inspection\n\nClick Debug Info to display intermediate results in Text Debug, Image Window, and Profile, verifying the test executed correctly.',
          ko:'2.1.4. 3D Inspection\n\nDebug Info를 클릭하면 Text Debug, Image Window, Profile에 중간 결과가 표시되어 테스트가 올바르게 실행되었는지 확인할 수 있습니다.',
          zhCN:'2.1.4. 3D Inspection\n\n点击Debug Info后,Text Debug、Image Window、Profile中会显示中间结果,可确认测试是否正确执行。',
          zhTW:'2.1.4. 3D Inspection\n\n點擊Debug Info後,Text Debug、Image Window、Profile中會顯示中間結果,可確認測試是否正確執行。',
          ja:'2.1.4. 3D Inspection\n\nDebug Infoをクリックすると、Text Debug、Image Window、Profileに中間結果が表示され、テストが正しく実行されたか確認できます。'
        }},
        {img:cmImg('I','smtv',43),tx:{
          vi:'2.1.4. 3D Inspection\n\nNhấn Debug Info để hiển thị kết quả trung gian ở Text Debug, Image Window, Profile, xác nhận Test đã chạy đúng.',
          en:'2.1.4. 3D Inspection\n\nClick Debug Info to display intermediate results in Text Debug, Image Window, and Profile, verifying the test executed correctly.',
          ko:'2.1.4. 3D Inspection\n\nDebug Info를 클릭하면 Text Debug, Image Window, Profile에 중간 결과가 표시되어 테스트가 올바르게 실행되었는지 확인할 수 있습니다.',
          zhCN:'2.1.4. 3D Inspection\n\n点击Debug Info后,Text Debug、Image Window、Profile中会显示中间结果,可确认测试是否正确执行。',
          zhTW:'2.1.4. 3D Inspection\n\n點擊Debug Info後,Text Debug、Image Window、Profile中會顯示中間結果,可確認測試是否正確執行。',
          ja:'2.1.4. 3D Inspection\n\nDebug Infoをクリックすると、Text Debug、Image Window、Profileに中間結果が表示され、テストが正しく実行されたか確認できます。'
        }},
        {img:cmImg('I','smtv',44),tx:{
          vi:'Software Inspection Parameter — phần này đề cập đến Global Parameter, Illumination Control, Alignment, 3D Inspection, 2D Inspection và Barcode & OCR.',
          en:'Software Inspection Parameter — this section covers Global Parameter, Illumination Control, Alignment, 3D Inspection, 2D Inspection, and Barcode & OCR.',
          ko:'Software Inspection Parameter — Global Parameter, Illumination Control, Alignment, 3D Inspection, 2D Inspection, Barcode & OCR를 다룹니다.',
          zhCN:'Software Inspection Parameter——本节介绍Global Parameter、Illumination Control、Alignment、3D Inspection、2D Inspection、Barcode & OCR。',
          zhTW:'Software Inspection Parameter——本節介紹Global Parameter、Illumination Control、Alignment、3D Inspection、2D Inspection、Barcode & OCR。',
          ja:'Software Inspection Parameter——本節ではGlobal Parameter、Illumination Control、Alignment、3D Inspection、2D Inspection、Barcode & OCRを扱います。'
        }},
        {img:cmImg('I','smtv',45),tx:{
          vi:'2.1.5. 2D Inspection\n\nDùng vị trí Bump tính từ Alignment, 2D Inspection kiểm tra lỗi 2D ở từng vùng Bump và vùng Board xung quanh mỗi Bump. Cấu trúc: ① Custom Bump Inspection Count. ② Parameters — thiết lập tính toán 2D. ③ Result/Debug Info — chọn nội dung hiển thị Image Window/Text Debug/Profile. ④ Image Window — hiển thị ảnh. ⑤ Text Debug/Profile — hiển thị kết quả Debug·Profile.',
          en:'2.1.5. 2D Inspection\n\nUsing the bump positions from Alignment, 2D Inspection detects 2D defects on each bump area and on the board area around each bump. Structure: ① Custom Bump Inspection Count. ② Parameters — settings for 2D calculation. ③ Result/Debug Info — choose content for image window/text debug/profile. ④ Image Window — displays images. ⑤ Text Debug/Profile — shows debug and profile results.',
          ko:'2.1.5. 2D Inspection\n\nAlignment에서 계산된 Bump 위치를 이용해, 각 Bump 영역과 주변 Board 영역의 2D 결함을 검사합니다. 구성: ① Custom Bump Inspection Count. ② Parameters — 2D 계산 설정. ③ Result/Debug Info — Image Window/Text Debug/Profile 표시 내용 선택. ④ Image Window — 이미지 표시. ⑤ Text Debug/Profile — Debug·Profile 결과 표시.',
          zhCN:'2.1.5. 2D Inspection\n\n利用Alignment计算出的Bump位置,检测各Bump区域及周边Board区域的2D缺陷。结构:① Custom Bump Inspection Count。② Parameters——2D计算设置。③ Result/Debug Info——选择Image Window/Text Debug/Profile显示内容。④ Image Window——显示图像。⑤ Text Debug/Profile——显示Debug·Profile结果。',
          zhTW:'2.1.5. 2D Inspection\n\n利用Alignment計算出的Bump位置,檢測各Bump區域及周邊Board區域的2D缺陷。結構:① Custom Bump Inspection Count。② Parameters——2D計算設定。③ Result/Debug Info——選擇Image Window/Text Debug/Profile顯示內容。④ Image Window——顯示影像。⑤ Text Debug/Profile——顯示Debug·Profile結果。',
          ja:'2.1.5. 2D Inspection\n\nAlignmentで計算されたBump位置を用いて、各Bump領域と周辺Board領域の2D欠陥を検査します。構成:① Custom Bump Inspection Count。② Parameters — 2D計算設定。③ Result/Debug Info — Image Window/Text Debug/Profile表示内容の選択。④ Image Window — 画像表示。⑤ Text Debug/Profile — Debug・Profile結果表示。'
        }},
        {img:cmImg('I','smtv',46),tx:{
          vi:'2.1.5. 2D Inspection\n\nTham số Diameter/Top Diameter tương tự 3D Inspection, ngoài ra Custom Bump Inspection cho phép thiết lập nhiều hạng mục kiểm tra như Bridge, Scratch. Diameter Inspection là cách tìm Edge Point của Bump, lọc chúng, rồi tính đường kính hình elip chứa các điểm đã lọc.',
          en:'2.1.5. 2D Inspection\n\nParameters include Diameter/Top Diameter (similar to their 3D-Inspection counterparts) plus, via Custom Bump Inspection, settings for Bridge, Scratch, and other inspection items. Diameter Inspection finds bump edge points, filters them, then computes the diameter of the ellipse enclosing the filtered points.',
          ko:'2.1.5. 2D Inspection\n\nDiameter/Top Diameter Parameter는 3D Inspection과 유사하며, 추가로 Custom Bump Inspection을 통해 Bridge·Scratch 등 다양한 검사 항목을 설정할 수 있습니다. Diameter Inspection은 Bump Edge Point를 찾아 필터링한 뒤, 해당 점들을 포함하는 타원의 지름을 계산하는 방식입니다.',
          zhCN:'2.1.5. 2D Inspection\n\nDiameter/Top Diameter Parameter与3D Inspection类似,此外可通过Custom Bump Inspection设置Bridge、Scratch等多种检测项目。Diameter Inspection的方式是查找Bump的Edge Point并过滤,再计算包含这些点的椭圆直径。',
          zhTW:'2.1.5. 2D Inspection\n\nDiameter/Top Diameter Parameter與3D Inspection類似,此外可透過Custom Bump Inspection設定Bridge、Scratch等多種檢測項目。Diameter Inspection的方式是尋找Bump的Edge Point並過濾,再計算包含這些點的橢圓直徑。',
          ja:'2.1.5. 2D Inspection\n\nDiameter/Top Diameter Parameterは3D Inspectionと類似しており、さらにCustom Bump Inspectionを通じてBridge・Scratchなど様々な検査項目を設定できます。Diameter InspectionはBumpのEdge Pointを探してフィルタリングした後、その点を含む楕円の直径を計算する方式です。'
        }},
        {img:cmImg('I','smtv',47),tx:{
          vi:'2.1.5. 2D Inspection\n\nNoise Filtering: sắp xếp độ dài từ tâm đến Edge Point, chỉ giữ giá trị trong phạm vi Distance Noise Min/Max ở bước lọc đầu; sau đó lọc lần hai loại bỏ giá trị lệch trung bình quá Deviation Spec, dùng dữ liệu còn lại.',
          en:'2.1.5. 2D Inspection\n\nNoise Filtering: first sorts center-to-edge-point lengths and keeps only values within Distance Noise Min/Max; a second pass then discards values that deviate from the average by more than Deviation Spec, keeping the rest.',
          ko:'2.1.5. 2D Inspection\n\nNoise Filtering: 중심-Edge Point 거리를 정렬해 Distance Noise Min/Max 범위 내 값만 1차 필터링, 이후 평균에서 Deviation Spec 이상 벗어난 값을 2차로 제거하고 나머지 데이터를 사용합니다.',
          zhCN:'2.1.5. 2D Inspection\n\nNoise Filtering:先对中心到Edge Point的长度排序,仅保留Distance Noise Min/Max范围内的值作为初次过滤;随后二次过滤剔除偏离平均值超过Deviation Spec的数值,使用剩余数据。',
          zhTW:'2.1.5. 2D Inspection\n\nNoise Filtering:先對中心到Edge Point的長度排序,僅保留Distance Noise Min/Max範圍內的值作為初次過濾;隨後二次過濾剔除偏離平均值超過Deviation Spec的數值,使用剩餘資料。',
          ja:'2.1.5. 2D Inspection\n\nNoise Filtering:中心からEdge Pointまでの長さをソートし、Distance Noise Min/Max範囲内の値のみを一次フィルタリング。その後、平均からDeviation Spec以上外れた値を二次的に除去し、残ったデータを使用します。'
        }},
        {img:cmImg('I','smtv',48),tx:{
          vi:'2.1.5. 2D Inspection\n\nVới Small Bump Diameter, cần tính lại (do sai số điểm phát hiện Edge, kết quả nhiều đường gần như giống nhau). Lúc này tính lại bằng vùng Pixel phản xạ đỉnh (Top Reflection Pixel).',
          en:'2.1.5. 2D Inspection\n\nFor a Small Bump Diameter, recalculation is needed (imprecise edge-detection points make multiple lines yield nearly identical results). In this case, recalculation uses the area of the top-reflection pixel instead.',
          ko:'2.1.5. 2D Inspection\n\nSmall Bump Diameter의 경우 재계산이 필요합니다(Edge 검출점 오차로 여러 선의 결과가 거의 같게 나오기 때문). 이때는 Top Reflection Pixel 영역을 이용해 재계산합니다.',
          zhCN:'2.1.5. 2D Inspection\n\n对于Small Bump Diameter,需要重新计算(因Edge检测点误差,多条线的结果几乎相同)。此时改用Top Reflection Pixel区域进行重新计算。',
          zhTW:'2.1.5. 2D Inspection\n\n對於Small Bump Diameter,需要重新計算(因Edge偵測點誤差,多條線的結果幾乎相同)。此時改用Top Reflection Pixel區域進行重新計算。',
          ja:'2.1.5. 2D Inspection\n\nSmall Bump Diameterの場合は再計算が必要です(Edge検出点の誤差により複数のラインの結果がほぼ同じになるため)。この場合、Top Reflection Pixelの領域を用いて再計算します。'
        }},
        {img:cmImg('I','smtv',49),tx:{
          vi:'2.1.5. 2D Inspection — Custom Bump Inspection Parameter\n\nCombine Image: thiết lập tổ hợp ảnh dùng để kiểm tra. Show Combine Image: hiển thị ảnh tổ hợp. Filter: áp dụng Smooth/Median/Top Hat/Black Hat, v.v. Contrast Image: dựng ảnh chiếu sáng làm chuẩn. Key Area for Contrast: kích thước vùng Contrast. Criteria Type: dựa trên Blob hoặc ROI. Up/Down: thay đổi thứ tự áp dụng Filter.',
          en:'2.1.5. 2D Inspection — Custom Bump Inspection Parameter\n\nCombine Image: sets which images combine for inspection. Show Combine Image: displays the combined image. Filter: applies Smooth/Median/Top Hat/Black Hat etc. Contrast Image: builds the illumination image used as the criteria. Key Area for Contrast: size of the contrast area. Criteria Type: Blob-based or ROI-based. Up/Down: changes filter order.',
          ko:'2.1.5. 2D Inspection — Custom Bump Inspection Parameter\n\nCombine Image: 검사에 사용할 이미지 조합 설정. Show Combine Image: 조합 이미지 표시. Filter: Smooth/Median/Top Hat/Black Hat 등 적용. Contrast Image: 기준이 되는 조명 이미지 구성. Key Area for Contrast: Contrast 영역 크기. Criteria Type: Blob 기반 또는 ROI 기반. Up/Down: Filter 적용 순서 변경.',
          zhCN:'2.1.5. 2D Inspection — Custom Bump Inspection Parameter\n\nCombine Image:设置用于检测的图像组合。Show Combine Image:显示组合图像。Filter:应用Smooth/Median/Top Hat/Black Hat等。Contrast Image:构建作为基准的照明图像。Key Area for Contrast:Contrast区域大小。Criteria Type:基于Blob或基于ROI。Up/Down:变更Filter应用顺序。',
          zhTW:'2.1.5. 2D Inspection — Custom Bump Inspection Parameter\n\nCombine Image:設定用於檢測的影像組合。Show Combine Image:顯示組合影像。Filter:套用Smooth/Median/Top Hat/Black Hat等。Contrast Image:建構作為基準的照明影像。Key Area for Contrast:Contrast區域大小。Criteria Type:基於Blob或基於ROI。Up/Down:變更Filter套用順序。',
          ja:'2.1.5. 2D Inspection — Custom Bump Inspection Parameter\n\nCombine Image:検査に使用する画像の組み合わせを設定。Show Combine Image:組み合わせ画像を表示。Filter:Smooth/Median/Top Hat/Black Hat等を適用。Contrast Image:基準となる照明画像を構成。Key Area for Contrast:Contrast領域サイズ。Criteria Type:Blobベースまたは ROIベース。Up/Down:Filter適用順序を変更。'
        }},
        {img:cmImg('I','smtv',50),tx:{
          vi:'2.1.5. 2D Inspection — Custom Bump Inspection ROI\n\nAdd/Delete: thêm/xóa vùng ROI. Show Mask Image: hiển thị ảnh Mask ROI đã tạo. ROI Operation: chọn cách tính ảnh ROI. ROI Target: Aligned Bump / Measured Bottom Diameter / Measured Top Diameter / SR. ROI Shape: Ellipse hoặc Rectangle.',
          en:'2.1.5. 2D Inspection — Custom Bump Inspection ROI\n\nAdd/Delete: add/remove ROI regions. Show Mask Image: display the generated ROI mask image. ROI Operation: method of ROI image calculation. ROI Target: Aligned Bump / Measured Bottom Diameter / Measured Top Diameter / SR. ROI Shape: Ellipse or Rectangle.',
          ko:'2.1.5. 2D Inspection — Custom Bump Inspection ROI\n\nAdd/Delete: ROI 영역 추가/삭제. Show Mask Image: 생성된 ROI Mask 이미지 표시. ROI Operation: ROI 이미지 계산 방식 선택. ROI Target: Aligned Bump / Measured Bottom Diameter / Measured Top Diameter / SR. ROI Shape: Ellipse 또는 Rectangle.',
          zhCN:'2.1.5. 2D Inspection — Custom Bump Inspection ROI\n\nAdd/Delete:新增/刪除ROI区域。Show Mask Image:显示生成的ROI Mask图像。ROI Operation:选择ROI图像计算方式。ROI Target:Aligned Bump / Measured Bottom Diameter / Measured Top Diameter / SR。ROI Shape:Ellipse或Rectangle。',
          zhTW:'2.1.5. 2D Inspection — Custom Bump Inspection ROI\n\nAdd/Delete:新增/刪除ROI區域。Show Mask Image:顯示產生的ROI Mask影像。ROI Operation:選擇ROI影像計算方式。ROI Target:Aligned Bump / Measured Bottom Diameter / Measured Top Diameter / SR。ROI Shape:Ellipse或Rectangle。',
          ja:'2.1.5. 2D Inspection — Custom Bump Inspection ROI\n\nAdd/Delete:ROI領域の追加/削除。Show Mask Image:生成されたROI Mask画像を表示。ROI Operation:ROI画像の計算方式を選択。ROI Target:Aligned Bump / Measured Bottom Diameter / Measured Top Diameter / SR。ROI Shape:EllipseまたはRectangle。'
        }},
        {img:cmImg('I','smtv',51),tx:{
          vi:'2.1.5. 2D Inspection — Custom Bump Inspection Threshold\n\nThreshold Type: Normal (0~255), SR Bump Ratio (0~100), SR Gain (0~10)/SR Offset (-255~255), Bump Gain (0~10)/Bump Offset (-255~255) — kiểu Gain·Offset áp dụng lên độ sáng trung bình vùng Bump hoặc SR để tính Threshold. Threshold: đặt giá trị. Reverse: đảo ngược ảnh Threshold.',
          en:'2.1.5. 2D Inspection — Custom Bump Inspection Threshold\n\nThreshold Type: Normal (0-255), SR Bump Ratio (0-100), SR Gain (0-10)/SR Offset (-255-255), Bump Gain (0-10)/Bump Offset (-255-255) — gain/offset variants apply to the average intensity of the bump or SR area to derive the threshold. Threshold: sets the value. Reverse: inverts the thresholded image.',
          ko:'2.1.5. 2D Inspection — Custom Bump Inspection Threshold\n\nThreshold Type: Normal(0~255), SR Bump Ratio(0~100), SR Gain(0~10)/SR Offset(-255~255), Bump Gain(0~10)/Bump Offset(-255~255) — Gain·Offset 방식은 Bump 또는 SR 영역 평균 밝기에 적용해 Threshold 산출. Threshold: 값 설정. Reverse: Threshold 이미지 반전.',
          zhCN:'2.1.5. 2D Inspection — Custom Bump Inspection Threshold\n\nThreshold Type:Normal(0~255)、SR Bump Ratio(0~100)、SR Gain(0~10)/SR Offset(-255~255)、Bump Gain(0~10)/Bump Offset(-255~255)——Gain·Offset方式作用于Bump或SR区域的平均亮度以求出Threshold。Threshold:设置数值。Reverse:反转Threshold图像。',
          zhTW:'2.1.5. 2D Inspection — Custom Bump Inspection Threshold\n\nThreshold Type:Normal(0~255)、SR Bump Ratio(0~100)、SR Gain(0~10)/SR Offset(-255~255)、Bump Gain(0~10)/Bump Offset(-255~255)——Gain·Offset方式作用於Bump或SR區域的平均亮度以求出Threshold。Threshold:設定數值。Reverse:反轉Threshold影像。',
          ja:'2.1.5. 2D Inspection — Custom Bump Inspection Threshold\n\nThreshold Type:Normal(0~255)、SR Bump Ratio(0~100)、SR Gain(0~10)/SR Offset(-255~255)、Bump Gain(0~10)/Bump Offset(-255~255)— Gain・Offset方式はBumpまたはSR領域の平均輝度に適用してThresholdを算出。Threshold:数値設定。Reverse:Threshold画像を反転。'
        }},
        {img:cmImg('I','smtv',52),tx:{
          vi:'2.1.5. 2D Inspection — Custom Bump Inspection Blob\n\nTab Blob chỉ kích hoạt khi Criteria Type = Blob. Max Blob Num: số Blob tối đa. Initial Blob Filtering / Blob Filtering After Merge: loại Blob nhỏ hơn Area·X Size·Y Size đã đặt trước/sau khi Merge. Use Blob Merge: có dùng Merge hay không. Ignore Blobs on the Boundary: loại Blob chạm biên. Only Blobs on Multi Bumps: loại Blob chạm dưới 2 Bump. Merge Distance: khoảng cách tối đa để Merge. Show Blob Image: hiển thị Blob cuối cùng trên ảnh.',
          en:'2.1.5. 2D Inspection — Custom Bump Inspection Blob\n\nThe Blob tab is active only when Criteria Type = Blob. Max Blob Num: max blob count. Initial Blob Filtering / Blob Filtering After Merge: remove blobs below the set area/X-size/Y-size before/after merging. Use Blob Merge: enable merging. Ignore Blobs on the Boundary: exclude boundary blobs. Only Blobs on Multi Bumps: exclude blobs spanning fewer than 2 bumps. Merge Distance: max distance for merging. Show Blob Image: overlay final blobs on the image.',
          ko:'2.1.5. 2D Inspection — Custom Bump Inspection Blob\n\nBlob 탭은 Criteria Type = Blob일 때만 활성화됩니다. Max Blob Num: 최대 Blob 개수. Initial Blob Filtering / Blob Filtering After Merge: 병합 전/후 설정된 Area·X Size·Y Size 미만 Blob 제거. Use Blob Merge: 병합 사용 여부. Ignore Blobs on the Boundary: 경계에 걸친 Blob 제외. Only Blobs on Multi Bumps: 2개 미만 Bump에 걸친 Blob 제외. Merge Distance: 병합 최대 거리. Show Blob Image: 최종 Blob을 이미지에 표시.',
          zhCN:'2.1.5. 2D Inspection — Custom Bump Inspection Blob\n\n仅当Criteria Type = Blob时,Blob标签页才会启用。Max Blob Num:最大Blob数量。Initial Blob Filtering / Blob Filtering After Merge:合并前/后移除低于设定Area·X Size·Y Size的Blob。Use Blob Merge:是否启用合并。Ignore Blobs on the Boundary:排除边界处的Blob。Only Blobs on Multi Bumps:排除跨越不足2个Bump的Blob。Merge Distance:合并的最大距离。Show Blob Image:在图像上显示最终Blob。',
          zhTW:'2.1.5. 2D Inspection — Custom Bump Inspection Blob\n\n僅當Criteria Type = Blob時,Blob標籤頁才會啟用。Max Blob Num:最大Blob數量。Initial Blob Filtering / Blob Filtering After Merge:合併前/後移除低於設定Area·X Size·Y Size的Blob。Use Blob Merge:是否啟用合併。Ignore Blobs on the Boundary:排除邊界處的Blob。Only Blobs on Multi Bumps:排除跨越不足2個Bump的Blob。Merge Distance:合併的最大距離。Show Blob Image:在影像上顯示最終Blob。',
          ja:'2.1.5. 2D Inspection — Custom Bump Inspection Blob\n\nBlobタブはCriteria Type = Blobの場合のみ有効です。Max Blob Num:最大Blob数。Initial Blob Filtering / Blob Filtering After Merge:マージ前/後に設定したArea·X Size·Y Size未満のBlobを除去。Use Blob Merge:マージ使用可否。Ignore Blobs on the Boundary:境界にかかるBlobを除外。Only Blobs on Multi Bumps:2個未満のBumpにかかるBlobを除外。Merge Distance:マージの最大距離。Show Blob Image:最終Blobを画像上に表示。'
        }},
        {img:cmImg('I','smtv',53),tx:{
          vi:'2.1.5. 2D Inspection — Custom Bump Inspection Criteria\n\nInsert/Remove Criteria: thêm/xóa tiêu chí. Width, Length(µm), Length X/Y (kích thước hình chữ nhật ngoại tiếp), Thickness, Locus (độ dài đường đi), Area(µm²), A Ratio (tỷ lệ dài/rộng = Length/Width), Edge Energy (độ sáng trung bình quanh Blob).',
          en:'2.1.5. 2D Inspection — Custom Bump Inspection Criteria\n\nInsert/Remove Criteria: add/remove a criterion. Width, Length(µm), Length X/Y (bounding-rectangle dimensions), Thickness, Locus (path length), Area(µm²), A Ratio (Aspect ratio = Length/Width), Edge Energy (average brightness around the blob).',
          ko:'2.1.5. 2D Inspection — Custom Bump Inspection Criteria\n\nInsert/Remove Criteria: 기준 추가/삭제. Width, Length(µm), Length X/Y(외접 사각형 크기), Thickness, Locus(경로 길이), Area(µm²), A Ratio(가로세로비 = Length/Width), Edge Energy(Blob 주변 평균 밝기).',
          zhCN:'2.1.5. 2D Inspection — Custom Bump Inspection Criteria\n\nInsert/Remove Criteria:新增/删除基准。Width、Length(µm)、Length X/Y(外接矩形尺寸)、Thickness、Locus(路径长度)、Area(µm²)、A Ratio(长宽比 = Length/Width)、Edge Energy(Blob周边平均亮度)。',
          zhTW:'2.1.5. 2D Inspection — Custom Bump Inspection Criteria\n\nInsert/Remove Criteria:新增/刪除基準。Width、Length(µm)、Length X/Y(外接矩形尺寸)、Thickness、Locus(路徑長度)、Area(µm²)、A Ratio(長寬比 = Length/Width)、Edge Energy(Blob周邊平均亮度)。',
          ja:'2.1.5. 2D Inspection — Custom Bump Inspection Criteria\n\nInsert/Remove Criteria:基準の追加/削除。Width、Length(µm)、Length X/Y(外接矩形サイズ)、Thickness、Locus(経路長)、Area(µm²)、A Ratio(縦横比 = Length/Width)、Edge Energy(Blob周辺の平均輝度)。'
        }},
        {img:cmImg('I','smtv',54),tx:{
          vi:'2.1.5. 2D Inspection — Custom Bump Inspection Result\n\nNút Update Result làm mới kết quả cuối cùng khi điều kiện kiểm tra thay đổi, ví dụ như chỉnh Parameter.',
          en:'2.1.5. 2D Inspection — Custom Bump Inspection Result\n\nThe Update Result button refreshes the final results after inspection conditions are changed, such as editing a parameter.',
          ko:'2.1.5. 2D Inspection — Custom Bump Inspection Result\n\nUpdate Result 버튼은 Parameter 수정 등 검사 조건이 바뀌었을 때 최종 결과를 새로고침합니다.',
          zhCN:'2.1.5. 2D Inspection — Custom Bump Inspection Result\n\n当修改Parameter等检测条件发生变化时,Update Result按钮会刷新最终结果。',
          zhTW:'2.1.5. 2D Inspection — Custom Bump Inspection Result\n\n當修改Parameter等檢測條件發生變化時,Update Result按鈕會重新整理最終結果。',
          ja:'2.1.5. 2D Inspection — Custom Bump Inspection Result\n\nParameter変更など検査条件が変わった際、Update Resultボタンで最終結果を更新します。'
        }},
        {img:cmImg('I','smtv',55),tx:{
          vi:'2.1.5. 2D Inspection\n\nNhấn Debug Info để hiển thị kết quả trung gian ở Text Debug, Image Window, Profile, xác nhận Test đã chạy đúng.',
          en:'2.1.5. 2D Inspection\n\nClick Debug Info to display intermediate results in Text Debug, Image Window, and Profile, verifying the test executed correctly.',
          ko:'2.1.5. 2D Inspection\n\nDebug Info를 클릭하면 Text Debug, Image Window, Profile에 중간 결과가 표시되어 테스트가 올바르게 실행되었는지 확인할 수 있습니다.',
          zhCN:'2.1.5. 2D Inspection\n\n点击Debug Info后,Text Debug、Image Window、Profile中会显示中间结果,可确认测试是否正确执行。',
          zhTW:'2.1.5. 2D Inspection\n\n點擊Debug Info後,Text Debug、Image Window、Profile中會顯示中間結果,可確認測試是否正確執行。',
          ja:'2.1.5. 2D Inspection\n\nDebug Infoをクリックすると、Text Debug、Image Window、Profileに中間結果が表示され、テストが正しく実行されたか確認できます。'
        }},
        {img:cmImg('I','smtv',56),tx:{
          vi:'Software Inspection Parameter — phần này đề cập đến Global Parameter, Illumination Control, Alignment, 3D Inspection, 2D Inspection và Barcode & OCR.',
          en:'Software Inspection Parameter — this section covers Global Parameter, Illumination Control, Alignment, 3D Inspection, 2D Inspection, and Barcode & OCR.',
          ko:'Software Inspection Parameter — Global Parameter, Illumination Control, Alignment, 3D Inspection, 2D Inspection, Barcode & OCR를 다룹니다.',
          zhCN:'Software Inspection Parameter——本节介绍Global Parameter、Illumination Control、Alignment、3D Inspection、2D Inspection、Barcode & OCR。',
          zhTW:'Software Inspection Parameter——本節介紹Global Parameter、Illumination Control、Alignment、3D Inspection、2D Inspection、Barcode & OCR。',
          ja:'Software Inspection Parameter——本節ではGlobal Parameter、Illumination Control、Alignment、3D Inspection、2D Inspection、Barcode & OCRを扱います。'
        }},
        {img:cmImg('I','smtv',57),tx:{
          vi:'2.1.6. Barcode & OCR\n\nBarcode/OCR nhận ảnh Barcode hoặc OCR làm đầu vào và xuất ra văn bản tương ứng. Cấu trúc: ① Parameter — thiết lập kiểm tra Barcode/OCR. ② Debug Info — chọn nội dung hiển thị ở Image Window/Text Debug/Profile. ③ Image Window — hiển thị ảnh. ④ Text Debug/Profile — hiển thị kết quả Debug·Profile.',
          en:'2.1.6. Barcode & OCR\n\nBarcode/OCR takes a Barcode or OCR image as input and outputs the corresponding text. Structure: ① Parameter — settings for Barcode/OCR inspection. ② Debug Info — choose content shown in image window/text debug/profile. ③ Image Window — displays images. ④ Text Debug/Profile — shows debug and profile results.',
          ko:'2.1.6. Barcode & OCR\n\nBarcode/OCR는 Barcode 또는 OCR 이미지를 입력받아 해당 텍스트를 출력합니다. 구성: ① Parameter — Barcode/OCR 검사 설정. ② Debug Info — Image Window/Text Debug/Profile 표시 내용 선택. ③ Image Window — 이미지 표시. ④ Text Debug/Profile — Debug·Profile 결과 표시.',
          zhCN:'2.1.6. Barcode & OCR\n\nBarcode/OCR接收Barcode或OCR图像作为输入,输出相应文本。结构:① Parameter——Barcode/OCR检测设置。② Debug Info——选择Image Window/Text Debug/Profile显示内容。③ Image Window——显示图像。④ Text Debug/Profile——显示Debug·Profile结果。',
          zhTW:'2.1.6. Barcode & OCR\n\nBarcode/OCR接收Barcode或OCR影像作為輸入,輸出對應文字。結構:① Parameter——Barcode/OCR檢測設定。② Debug Info——選擇Image Window/Text Debug/Profile顯示內容。③ Image Window——顯示影像。④ Text Debug/Profile——顯示Debug·Profile結果。',
          ja:'2.1.6. Barcode & OCR\n\nBarcode/OCRはBarcodeまたはOCR画像を入力として受け取り、対応するテキストを出力します。構成:① Parameter — Barcode/OCR検査設定。② Debug Info — Image Window/Text Debug/Profile表示内容の選択。③ Image Window — 画像表示。④ Text Debug/Profile — Debug・Profile結果表示。'
        }},
        {img:cmImg('I','smtv',58),tx:{
          vi:'2.1.6. Barcode & OCR\n\nChọn "Easy Matrix" để tính Barcode/Matrix Code, hoặc "OCR" để tính OCR — cửa sổ Parameter thay đổi tương ứng. Select Image: thiết lập tổ hợp ảnh dùng làm đầu vào. Reverse Threshold: đảo ngược ảnh Threshold. Insp. Test: chạy kiểm tra Barcode hoặc OCR.',
          en:'2.1.6. Barcode & OCR\n\nSelect "Easy Matrix" for barcode/matrix-code calculation, or "OCR" for OCR calculation — the parameter window changes accordingly. Select Image: sets the combination of images used as input. Reverse Threshold: inverts the threshold image. Insp. Test: runs the Barcode or OCR inspection.',
          ko:'2.1.6. Barcode & OCR\n\nBarcode·Matrix Code 계산은 "Easy Matrix", OCR 계산은 "OCR"을 선택합니다 — 선택에 따라 Parameter 창이 변경됩니다. Select Image: 입력 이미지로 사용할 이미지 조합 설정. Reverse Threshold: Threshold 이미지 반전. Insp. Test: Barcode 또는 OCR 검사 실행.',
          zhCN:'2.1.6. Barcode & OCR\n\n条码/矩阵码计算选择"Easy Matrix",OCR计算选择"OCR"——Parameter窗口会随之变化。Select Image:设置作为输入图像使用的图像组合。Reverse Threshold:反转Threshold图像。Insp. Test:执行Barcode或OCR检测。',
          zhTW:'2.1.6. Barcode & OCR\n\n條碼/矩陣碼計算選擇"Easy Matrix",OCR計算選擇"OCR"——Parameter視窗會隨之變化。Select Image:設定作為輸入影像使用的影像組合。Reverse Threshold:反轉Threshold影像。Insp. Test:執行Barcode或OCR檢測。',
          ja:'2.1.6. Barcode & OCR\n\nバーコード・マトリクスコード計算は"Easy Matrix"、OCR計算は"OCR"を選択します — 選択によりParameterウィンドウが変わります。Select Image:入力画像として使う画像の組み合わせを設定。Reverse Threshold:Threshold画像を反転。Insp. Test:BarcodeまたはOCR検査を実行。'
        }},
        {img:cmImg('I','smtv',59),tx:{
          vi:'2.1.6. Barcode & OCR\n\n① Chỉnh ROI trong Image Window để bao gồm Barcode. ② Áp dụng Filter để tìm ảnh tối ưu khi có Noise. ③ Cửa sổ hiển thị các Filter đã áp dụng theo thứ tự từ trên xuống — xóa bằng nút "Del". ④ Thiết lập Barcode Type·xác định Empty·Timeout: nếu độ sáng thấp hơn Empty Threshold thì xác định là Empty, nếu kiểm tra vượt quá Timeout thì chuyển sang kiểm tra tiếp theo.',
          en:'2.1.6. Barcode & OCR\n\n① Adjust the ROI in the image window to include the barcode. ② Apply filters to find the optimal image under noise. ③ A window lists applied filters in sequence, top to bottom — remove one with the "Del" button. ④ Set barcode type, empty judgment, and timeout: if brightness is below the empty threshold, it\'s classified as empty; if inspection exceeds the timeout, it moves to the next inspection.',
          ko:'2.1.6. Barcode & OCR\n\n① Image Window에서 ROI를 조정해 Barcode가 포함되도록 함. ② Noise가 있을 경우 최적 이미지를 찾기 위해 Filter 적용. ③ 적용된 Filter가 위에서 아래로 순서대로 표시되는 창 — "Del" 버튼으로 제거 가능. ④ Barcode Type·Empty 판정·Timeout 설정: 밝기가 Empty Threshold보다 낮으면 Empty로 분류, 검사가 Timeout을 초과하면 다음 검사로 진행.',
          zhCN:'2.1.6. Barcode & OCR\n\n① 在Image Window中调整ROI,使其包含Barcode。② 若存在Noise,应用Filter以寻找最佳图像。③ 显示已套用Filter的顺序窗口(由上而下)——可用"Del"按钮移除。④ 设置Barcode Type·Empty判定·Timeout:亮度低于Empty Threshold时判定为Empty,检测超过Timeout时进入下一次检测。',
          zhTW:'2.1.6. Barcode & OCR\n\n① 在Image Window中調整ROI,使其包含Barcode。② 若存在Noise,套用Filter以尋找最佳影像。③ 顯示已套用Filter的順序視窗(由上而下)——可用"Del"按鈕移除。④ 設定Barcode Type·Empty判定·Timeout:亮度低於Empty Threshold時判定為Empty,檢測超過Timeout時進入下一次檢測。',
          ja:'2.1.6. Barcode & OCR\n\n① Image WindowでROIを調整しBarcodeが含まれるようにする。② Noiseがある場合、最適な画像を探すためFilterを適用。③ 適用したFilterを上から順に表示するウィンドウ — "Del"ボタンで削除可能。④ Barcode Type・Empty判定・Timeoutを設定:輝度がEmpty Thresholdより低ければEmptyと判定、検査がTimeoutを超えると次の検査へ進む。'
        }},
        {img:cmImg('I','smtv',60),tx:{
          vi:'2.1.6. Barcode & OCR\n\nChọn file Font dùng để kiểm tra trong cửa sổ Font Path. Nếu ảnh kiểm tra bị xoay, dùng Rotating Angle. Nhập Character Count là số ký tự cần kiểm tra. Chỉnh Threshold để ký tự hiện rõ. Chỉnh Search ROI thành vùng phát hiện ký tự. Thiết lập Retry Threshold Range·Step để thử lại khi kiểm tra thất bại ở Threshold hiện tại.',
          en:'2.1.6. Barcode & OCR\n\nSelect the font file to use in the Font Path window. If the inspection image is rotated, use Rotating Angle. Enter Character Count for the number of characters to inspect. Adjust the Threshold so characters are clearly visible. Adjust the Search ROI to the character-detection area. Set the Retry Threshold Range and Step for retries when inspection fails at the current threshold.',
          ko:'2.1.6. Barcode & OCR\n\nFont Path 창에서 검사에 사용할 Font 파일을 선택합니다. 검사 이미지가 회전되어 있으면 Rotating Angle을 사용합니다. Character Count에 검사할 문자 수를 입력합니다. 문자가 명확히 보이도록 Threshold를 조정합니다. Search ROI를 문자 검출 영역으로 조정합니다. 지정된 Threshold에서 검사가 실패할 경우 재시도할 Retry Threshold Range·Step을 설정합니다.',
          zhCN:'2.1.6. Barcode & OCR\n\n在Font Path窗口中选择检测使用的Font文件。若检测图像发生旋转,使用Rotating Angle。在Character Count中输入要检测的字符数。调整Threshold使字符清晰可见。调整Search ROI至字符检测区域。设定当前Threshold检测失败时重试用的Retry Threshold Range·Step。',
          zhTW:'2.1.6. Barcode & OCR\n\n在Font Path視窗中選擇檢測使用的Font檔案。若檢測影像發生旋轉,使用Rotating Angle。在Character Count中輸入要檢測的字元數。調整Threshold使字元清晰可見。調整Search ROI至字元檢測區域。設定目前Threshold檢測失敗時重試用的Retry Threshold Range·Step。',
          ja:'2.1.6. Barcode & OCR\n\nFont Pathウィンドウで検査に使用するFontファイルを選択します。検査画像が回転している場合はRotating Angleを使用します。Character Countに検査する文字数を入力します。文字がはっきり見えるようThresholdを調整します。Search ROIを文字検出エリアに調整します。指定Thresholdで検査が失敗した場合に再試行するRetry Threshold Range・Stepを設定します。'
        }},
        {img:cmImg('I','smtv',61),tx:{
          vi:'2.1.6. Barcode & OCR\n\nRotating Angle: xoay ảnh ngược chiều kim đồng hồ (0°, 90°, 180°, 270°). Nếu thất bại ở Threshold đã đặt, thử lại bằng cách dịch Retry Threshold Range theo từng bước Retry Threshold Step (VD: Range ±10 thì lặp lại số lần bằng Range chia cho Step). ⚠ Step quá nhỏ so với Range sẽ khiến thử lại quá nhiều, có nguy cơ Timeout.',
          en:'2.1.6. Barcode & OCR\n\nRotating Angle: rotates the image counterclockwise (0°, 90°, 180°, 270°). On failure at the set Threshold, retry by stepping through Retry Threshold Range by Retry Threshold Step (e.g. a range of ±10 with a given step repeats the inspection that many times across that span). ⚠ Too small a step relative to the range risks timeouts from excessive retries.',
          ko:'2.1.6. Barcode & OCR\n\nRotating Angle: 이미지를 반시계 방향으로 회전(0˚, 90˚, 180˚, 270˚). 지정 Threshold에서 실패하면 Retry Threshold Range를 Retry Threshold Step만큼씩 이동하며 재시도(예: Range ±10이면 그 범위를 Step만큼 나눈 횟수만큼 반복). ⚠ Range 대비 Step이 너무 작으면 재시도가 과도해져 Timeout 위험.',
          zhCN:'2.1.6. Barcode & OCR\n\nRotating Angle:将图像逆时针旋转(0°、90°、180°、270°)。在指定Threshold下失败时,按Retry Threshold Step逐步调整Retry Threshold Range进行重试(例如Range为±10时,按Step划分该范围的次数重复检测)。⚠ Step相对Range过小会导致重试次数过多,有Timeout风险。',
          zhTW:'2.1.6. Barcode & OCR\n\nRotating Angle:將影像逆時針旋轉(0°、90°、180°、270°)。在指定Threshold下失敗時,按Retry Threshold Step逐步調整Retry Threshold Range進行重試(例如Range為±10時,按Step劃分該範圍的次數重複檢測)。⚠ Step相對Range過小會導致重試次數過多,有Timeout風險。',
          ja:'2.1.6. Barcode & OCR\n\nRotating Angle:画像を反時計回りに回転(0°、90°、180°、270°)。指定したThresholdで失敗した場合、Retry Threshold StepずつRetry Threshold Rangeを移動しながら再試行(例:Range ±10であれば、その範囲をStepで割った回数だけ繰り返す)。⚠ Rangeに対してStepが小さすぎると再試行が過多になりTimeoutの恐れがある。'
        }},
        {img:cmImg('I','smtv',62),tx:{
          vi:'2.1.6. Barcode & OCR — Tạo Font OCR\n\n1. Khởi động Open eVision Studio.\n2. Nhấn nút OCR ở phía trên.',
          en:'2.1.6. Barcode & OCR — Creating an OCR Font\n\n1. Launch Open eVision Studio.\n2. Click the OCR button at the top.',
          ko:'2.1.6. Barcode & OCR — OCR Font 생성\n\n1. Open eVision Studio를 실행합니다.\n2. 상단의 OCR 버튼을 클릭합니다.',
          zhCN:'2.1.6. Barcode & OCR — 建立OCR Font\n\n1. 启动Open eVision Studio。\n2. 点击上方的OCR按钮。',
          zhTW:'2.1.6. Barcode & OCR — 建立OCR Font\n\n1. 啟動Open eVision Studio。\n2. 點擊上方的OCR按鈕。',
          ja:'2.1.6. Barcode & OCR — OCR Font作成\n\n1. Open eVision Studioを起動する。\n2. 上部のOCRボタンをクリックする。'
        }},
        {img:cmImg('I','smtv',63),tx:{
          vi:'2.1.6. Barcode & OCR\n\nTải file Font có sẵn, hoặc tạo file Font mới.',
          en:'2.1.6. Barcode & OCR\n\nLoad an existing font file, or create a new one.',
          ko:'2.1.6. Barcode & OCR\n\n기존 Font 파일을 불러오거나, 새 Font 파일을 생성합니다.',
          zhCN:'2.1.6. Barcode & OCR\n\n加载现有Font文件,或建立新的Font文件。',
          zhTW:'2.1.6. Barcode & OCR\n\n載入現有Font檔案,或建立新的Font檔案。',
          ja:'2.1.6. Barcode & OCR\n\n既存のFontファイルを読み込むか、新規Fontファイルを作成します。'
        }},
        {img:cmImg('I','smtv',64),tx:{
          vi:'2.1.6. Barcode & OCR\n\nSau khi tạo·tải file Font, nhập ảnh dùng để huấn luyện Font: nhấn biểu tượng ảnh mới ở tab Source Image, sau đó nhấp chuột phải vào Image Window để tải.',
          en:'2.1.6. Barcode & OCR\n\nAfter creating or loading the font file, import the image to use for font training: click the new-image icon in the Source Image tab, then right-click the image window to load it.',
          ko:'2.1.6. Barcode & OCR\n\nFont 파일을 생성·로드한 뒤, Font 학습에 사용할 이미지를 불러옵니다: Source Image 탭의 새 이미지 아이콘을 클릭하고, Image Window에서 우클릭해 이미지를 로드합니다.',
          zhCN:'2.1.6. Barcode & OCR\n\n创建·载入Font文件后,导入用于Font训练的图像:点击Source Image标签页的新图像图标,然后在Image Window中右键载入。',
          zhTW:'2.1.6. Barcode & OCR\n\n建立·載入Font檔案後,匯入用於Font訓練的影像:點擊Source Image標籤頁的新影像圖示,然後在Image Window中右鍵載入。',
          ja:'2.1.6. Barcode & OCR\n\nFontファイルを作成・読み込んだ後、Font学習に使用する画像を取り込みます:Source Imageタブの新規画像アイコンをクリックし、Image Windowで右クリックして読み込みます。'
        }},
        {img:cmImg('I','smtv',65),tx:{
          vi:'2.1.6. Barcode & OCR\n\nSau khi tải ảnh, chỉnh Threshold để phân biệt ký tự và nền — dùng ảnh có độ sáng ổn định vì điều kiện chiếu sáng có thể thay đổi. Sau khi áp dụng Threshold, chỉ định màu ký tự qua Chars Color: White on Black (chữ trắng nền đen) hoặc Black on White (chữ đen nền trắng).',
          en:'2.1.6. Barcode & OCR\n\nAfter loading the image, adjust the Threshold to distinguish characters from the background — use images with consistent brightness, since lighting can vary. After applying the threshold, specify the character color via Chars Color: White on Black (white characters on a black background) or Black on White (black characters on a white background).',
          ko:'2.1.6. Barcode & OCR\n\n이미지 로드 후 Threshold를 조정해 문자와 배경을 구분합니다 — 조명 조건이 변할 수 있으므로 밝기가 일정한 이미지를 사용합니다. Threshold 적용 후 Chars Color로 문자 색상을 지정합니다: White on Black(검은 배경에 흰 문자) 또는 Black on White(흰 배경에 검은 문자).',
          zhCN:'2.1.6. Barcode & OCR\n\n载入图像后调整Threshold以区分字符与背景——由于照明条件可能变化,请使用亮度一致的图像。应用Threshold后,通过Chars Color指定字符颜色:White on Black(黑底白字)或Black on White(白底黑字)。',
          zhTW:'2.1.6. Barcode & OCR\n\n載入影像後調整Threshold以區分字元與背景——由於照明條件可能變化,請使用亮度一致的影像。套用Threshold後,透過Chars Color指定字元顏色:White on Black(黑底白字)或Black on White(白底黑字)。',
          ja:'2.1.6. Barcode & OCR\n\n画像読み込み後、ThresholdでキャラクターとBackgroundを区別します — 照明条件が変わる可能性があるため、輝度が一定の画像を使用します。Threshold適用後、Chars Colorで文字色を指定します:White on Black(黒背景に白文字)またはBlack on White(白背景に黒文字)。'
        }},
        {img:cmImg('I','smtv',66),tx:{
          vi:'2.1.6. Barcode & OCR\n\nSau khi đặt Threshold, thiết lập phạm vi kích thước ký tự: Min Height/Min Width — ký tự nhỏ hơn giá trị này sẽ không được nhận diện (thường lấy chuẩn từ ký tự mảnh nhất như "1"·"I"). Max Height/Max Width — ký tự lớn hơn giá trị này sẽ không được nhận diện (thường lấy chuẩn từ ký tự dày nhất như "8"·"D"). Noise Area coi các đối tượng có phân bố giá trị Pixel không đều là Noise — thường 50~100, nếu ảnh không sạch có thể dùng trên 130.',
          en:'2.1.6. Barcode & OCR\n\nAfter setting the Threshold, set the character size range: Min Height/Min Width — characters smaller than this aren\'t recognized (typically based on the thinnest character, e.g. "1" or "I"). Max Height/Max Width — characters larger than this aren\'t recognized (typically based on the thickest character, e.g. "8" or "D"). Noise Area treats objects with uneven pixel-value distribution as noise — usually 50-100, or above 130 for a less-clean image.',
          ko:'2.1.6. Barcode & OCR\n\nThreshold 설정 후 문자 크기 범위를 설정합니다: Min Height/Min Width — 이보다 작은 문자는 인식되지 않음(보통 "1"·"I"처럼 가장 얇은 문자 기준). Max Height/Max Width — 이보다 큰 문자는 인식되지 않음(보통 "8"·"D"처럼 가장 두꺼운 문자 기준). Noise Area는 Pixel 값 분포가 고르지 않은 객체를 Noise로 처리 — 보통 50~100, 이미지가 깨끗하지 않으면 130 이상 사용.',
          zhCN:'2.1.6. Barcode & OCR\n\n设置Threshold后,设定字符大小范围:Min Height/Min Width——小于此值的字符不被识别(通常以最细字符如"1"·"I"为基准)。Max Height/Max Width——大于此值的字符不被识别(通常以最粗字符如"8"·"D"为基准)。Noise Area将Pixel值分布不均的物体视为Noise——通常为50~100,若图像不够干净可使用130以上。',
          zhTW:'2.1.6. Barcode & OCR\n\n設定Threshold後,設定字元大小範圍:Min Height/Min Width——小於此值的字元不被識別(通常以最細字元如"1"·"I"為基準)。Max Height/Max Width——大於此值的字元不被識別(通常以最粗字元如"8"·"D"為基準)。Noise Area將Pixel值分佈不均的物體視為Noise——通常為50~100,若影像不夠乾淨可使用130以上。',
          ja:'2.1.6. Barcode & OCR\n\nThreshold設定後、文字サイズの範囲を設定します:Min Height/Min Width — これより小さい文字は認識されない(通常"1"・"I"のような最も細い文字基準)。Max Height/Max Width — これより大きい文字は認識されない(通常"8"・"D"のような最も太い文字基準)。Noise AreaはPixel値の分布が不均一なオブジェクトをNoiseとして扱う — 通常50~100、画像がクリーンでない場合は130以上を使用。'
        }},
        {img:cmImg('I','smtv',67),tx:{
          vi:'2.1.6. Barcode & OCR\n\nSau khi thiết lập vùng·Parameter ký tự, chỉ định ký tự là số hay chữ hoa/thường: trong Image Window chọn ký tự và đặt lớp ở tab Learn — EOcrClass_Digit (số), EOcrClass_Upper (chữ hoa), EOcrClass_Lower (chữ thường). Sau đó nhấn Execute ở tab Recognition để kiểm tra.',
          en:'2.1.6. Barcode & OCR\n\nAfter configuring character regions and parameters, specify whether characters are digits or upper/lowercase letters: in the Image window, select the characters and set their class in the Learn tab — EOcrClass_Digit (numbers), EOcrClass_Upper (uppercase), EOcrClass_Lower (lowercase). Then click Execute in the Recognition tab to test.',
          ko:'2.1.6. Barcode & OCR\n\n문자 영역·Parameter 설정 후, 문자가 숫자인지 대·소문자인지 지정합니다: Image Window에서 문자를 선택하고 Learn 탭에서 클래스를 설정 — EOcrClass_Digit(숫자), EOcrClass_Upper(대문자), EOcrClass_Lower(소문자). 이후 Recognition 탭의 Execute 버튼으로 테스트합니다.',
          zhCN:'2.1.6. Barcode & OCR\n\n设置字符区域·Parameter后,指定字符为数字还是大小写字母:在Image Window中选择字符,在Learn标签页设置类别——EOcrClass_Digit(数字)、EOcrClass_Upper(大写)、EOcrClass_Lower(小写)。之后在Recognition标签页点击Execute进行测试。',
          zhTW:'2.1.6. Barcode & OCR\n\n設定字元區域·Parameter後,指定字元為數字還是大小寫字母:在Image Window中選擇字元,在Learn標籤頁設定類別——EOcrClass_Digit(數字)、EOcrClass_Upper(大寫)、EOcrClass_Lower(小寫)。之後在Recognition標籤頁點擊Execute進行測試。',
          ja:'2.1.6. Barcode & OCR\n\n文字領域・Parameter設定後、文字が数字か大文字・小文字かを指定します:Image Windowで文字を選択し、Learnタブでクラスを設定 — EOcrClass_Digit(数字)、EOcrClass_Upper(大文字)、EOcrClass_Lower(小文字)。その後、RecognitionタブのExecuteボタンでテストします。'
        }},
        {img:cmImg('I','smtv',68),tx:{
          vi:'2.1.6. Barcode & OCR\n\nSau khi hoàn tất huấn luyện·kiểm tra ký tự, lưu file Font: ở tab Font File nhấn Save As, chọn ghi đè file cũ hoặc nhập tên file mới rồi lưu. Lặp lại quá trình trên cho từng bộ ký tự cần thiết, lưu mỗi bộ phù hợp để dùng sau này.',
          en:'2.1.6. Barcode & OCR\n\nAfter completing character training and testing, save the Font file: in the Font File tab, click Save As, choose to overwrite the existing file or enter a new file name, then save. Repeat as needed for each character set, saving each appropriately for future use.',
          ko:'2.1.6. Barcode & OCR\n\n문자 학습·테스트 완료 후 Font 파일을 저장합니다: Font File 탭에서 Save As를 클릭해 기존 파일을 덮어쓰거나 새 파일명을 입력한 뒤 저장합니다. 필요한 문자 세트마다 위 과정을 반복하며, 각각을 향후 사용을 위해 적절히 저장합니다.',
          zhCN:'2.1.6. Barcode & OCR\n\n完成字符训练·测试后保存Font文件:在Font File标签页点击Save As,选择覆盖现有文件或输入新文件名后保存。对每个字符集重复上述过程,并妥善保存以供后续使用。',
          zhTW:'2.1.6. Barcode & OCR\n\n完成字元訓練·測試後儲存Font檔案:在Font File標籤頁點擊Save As,選擇覆蓋現有檔案或輸入新檔名後儲存。對每個字元集重複上述過程,並妥善儲存以供後續使用。',
          ja:'2.1.6. Barcode & OCR\n\n文字の学習・テスト完了後、Fontファイルを保存します:Font FileタブでSave Asをクリックし、既存ファイルを上書きするか新しいファイル名を入力して保存します。必要な文字セットごとに上記手順を繰り返し、それぞれ今後の使用のために適切に保存します。'
        }},
        {img:cmImg('I','smtv',69),tx:{
          vi:'2.1.6. Barcode & OCR\n\nNhấn Debug Info để hiển thị kết quả trung gian ở Text Debug, Image Window, Profile, xác nhận Test đã chạy đúng.',
          en:'2.1.6. Barcode & OCR\n\nClick Debug Info to display intermediate results in Text Debug, Image Window, and Profile, verifying the test executed correctly.',
          ko:'2.1.6. Barcode & OCR\n\nDebug Info를 클릭하면 Text Debug, Image Window, Profile에 중간 결과가 표시되어 테스트가 올바르게 실행되었는지 확인할 수 있습니다.',
          zhCN:'2.1.6. Barcode & OCR\n\n点击Debug Info后,Text Debug、Image Window、Profile中会显示中间结果,可确认测试是否正确执行。',
          zhTW:'2.1.6. Barcode & OCR\n\n點擊Debug Info後,Text Debug、Image Window、Profile中會顯示中間結果,可確認測試是否正確執行。',
          ja:'2.1.6. Barcode & OCR\n\nDebug Infoをクリックすると、Text Debug、Image Window、Profileに中間結果が表示され、テストが正しく実行されたか確認できます。'
        }}
      ]
    },
    nbga:{
      title:{ko:'H. Recipe Vision Parameter',en:'H. Recipe Vision Parameter',zhCN:'H. Recipe Vision Parameter',zhTW:'H. Recipe Vision Parameter',ja:'H. Recipe Vision Parameter'},
      chapters:[
        {from:1,title:{ko:'Illum Control',en:'Illum Control',zhCN:'Illum Control',zhTW:'Illum Control',ja:'Illum Control'}},
        {from:16,title:{ko:'Align',en:'Align',zhCN:'Align',zhTW:'Align',ja:'Align'}},
        {from:29,title:{ko:'2D Barcode & OCR',en:'2D Barcode & OCR',zhCN:'2D Barcode & OCR',zhTW:'2D Barcode & OCR',ja:'2D Barcode & OCR'}},
        {from:50,title:{ko:'2D Inspection',en:'2D Inspection',zhCN:'2D Inspection',zhTW:'2D Inspection',ja:'2D Inspection'}},
        {from:80,title:{ko:'3D Inspection',en:'3D Inspection',zhCN:'3D Inspection',zhTW:'3D Inspection',ja:'3D Inspection'}},
        {from:118,title:{ko:'LTS Target',en:'LTS Target',zhCN:'LTS Target',zhTW:'LTS Target',ja:'LTS Target'}}
      ],
      slides:[
        {img:cmImg('I','nbga',1),tx:{
          vi:'Software Inspection Parameter — phần này đề cập đến Illum Control, Align, 2D Barcode & OCR, 2D Inspection, 3D Inspection và LTS Target.',
          en:'Software Inspection Parameter — this section covers Illum Control, Align, 2D Barcode & OCR, 2D Inspection, 3D Inspection, and LTS Target.',
          ko:'Software Inspection Parameter — Illum Control, Align, 2D Barcode & OCR, 2D Inspection, 3D Inspection, LTS Target를 다룹니다.',
          zhCN:'Software Inspection Parameter——本节介绍Illum Control、Align、2D Barcode & OCR、2D Inspection、3D Inspection、LTS Target。',
          zhTW:'Software Inspection Parameter——本節介紹Illum Control、Align、2D Barcode & OCR、2D Inspection、3D Inspection、LTS Target。',
          ja:'Software Inspection Parameter——本節ではIllum Control、Align、2D Barcode & OCR、2D Inspection、3D Inspection、LTS Targetを扱います。'
        }},
        {img:cmImg('I','nbga',2),tx:{
          vi:'2.1.1. Illum Control — thiết lập Parameter Illumination, Camera/PTZ và Grab. Các giá trị này được lưu vào Job File và gửi đến phần cứng qua Sync Board.',
          en:'2.1.1. Illum Control — sets Illumination, Camera/PTZ, and Grab parameters. These values are saved to the Job File and sent to the hardware through the Sync Board.',
          ko:'2.1.1. Illum Control — Illumination, Camera/PTZ, Grab Parameter를 설정합니다. 설정값은 Job File에 저장되고 Sync Board를 통해 하드웨어로 전달됩니다.',
          zhCN:'2.1.1. Illum Control——设置Illumination、Camera/PTZ、Grab Parameter。设置值保存到Job File,并通过Sync Board传送到硬件。',
          zhTW:'2.1.1. Illum Control——設定Illumination、Camera/PTZ、Grab Parameter。設定值儲存到Job File,並透過Sync Board傳送到硬體。',
          ja:'2.1.1. Illum Control——Illumination、Camera/PTZ、Grab Parameterを設定します。設定値はJob Fileに保存され、Sync Boardを通してハードウェアに伝達されます。'
        }},
        {img:cmImg('I','nbga',3),tx:{
          vi:'Trang thuộc tính Camera — Frame Period (thời gian chụp một ảnh, VD ~3.1ms ở 330fps), Illumination Delay (bù độ trễ giữa Grab và chiếu sáng, thường 0.4–1.0ms), và Exposure Time (thời gian Camera thu sáng).',
          en:'Camera property page — Frame Period (time to capture one image, e.g. ~3.1ms at 330fps), Illumination Delay (compensates the timing gap between grab and illumination, typically 0.4–1.0ms), and Exposure Time (how long the camera takes in light).',
          ko:'Camera 속성 — Frame Period(1장 촬영에 걸리는 시간, 예: 330fps면 약 3.1ms), Illumination Delay(Grab과 조명 시점의 오차 보정, 보통 0.4~1.0ms), Exposure Time(카메라가 빛을 받아들이는 시간).',
          zhCN:'Camera属性——Frame Period(拍摄一张图像所需时间,例如330fps约3.1ms)、Illumination Delay(校正Grab与照明时序的偏差,通常0.4~1.0ms)、Exposure Time(相机接收光的时间)。',
          zhTW:'Camera屬性——Frame Period(拍攝一張影像所需時間,例如330fps約3.1ms)、Illumination Delay(校正Grab與照明時序的偏差,通常0.4~1.0ms)、Exposure Time(相機接收光的時間)。',
          ja:'Camera プロパティ——Frame Period(1枚撮影にかかる時間、例:330fpsで約3.1ms)、Illumination Delay(GrabとIlluminationのタイミング差を補正、通常0.4~1.0ms)、Exposure Time(カメラが光を取り込む時間)。'
        }},
        {img:cmImg('I','nbga',4),tx:{
          vi:'Partial Image Size — thu nhỏ ảnh đã Grab (từ ảnh board đầy đủ 2048×2048px) để tăng tốc kiểm tra các mục tiêu nhỏ. UsePartialImage bật chức năng này, PartialImageSizeX/Y đặt kích thước thu nhỏ, và Partial Frame Period được tự động tính lại.',
          en:'Partial Image Size — shrinks the grabbed image (from the full 2048×2048px board image) to speed up inspection of small targets. UsePartialImage enables it, PartialImageSizeX/Y set the reduced size, and Partial Frame Period is recalculated automatically.',
          ko:'Partial Image Size — 작은 대상 검사 속도를 높이기 위해 Grab한 이미지(원본 2048×2048px)를 축소합니다. UsePartialImage로 사용 여부를 설정하고, PartialImageSizeX/Y로 축소 크기를 지정하며, Partial Frame Period는 자동으로 재계산됩니다.',
          zhCN:'Partial Image Size——为提高小尺寸目标的检测速度,将Grab图像(原始2048×2048px)缩小。通过UsePartialImage设置是否使用,PartialImageSizeX/Y设置缩小尺寸,Partial Frame Period会自动重新计算。',
          zhTW:'Partial Image Size——為提高小尺寸目標的檢測速度,將Grab影像(原始2048×2048px)縮小。透過UsePartialImage設定是否使用,PartialImageSizeX/Y設定縮小尺寸,Partial Frame Period會自動重新計算。',
          ja:'Partial Image Size——小さい対象の検査速度を上げるため、Grab画像(元は2048×2048px)を縮小します。UsePartialImageで使用有無を設定し、PartialImageSizeX/Yで縮小サイズを指定、Partial Frame Periodは自動的に再計算されます。'
        }},
        {img:cmImg('I','nbga',5),tx:{
          vi:'Thuộc tính PZT (1) — Pzt Scan Step (khoảng cách di chuyển mỗi lần của Motor PZT, tự đặt theo bước sóng), Pzt Scan Range (hành trình tối đa, cố định theo loại sản phẩm PZT), ScanRangeHigh/Low (phạm vi quét kiểm tra), và biến thể Retry của chúng (phạm vi quét dùng khi kiểm tra lại).',
          en:'PZT property (1) — Pzt Scan Step (the PZT motor\'s per-move distance, auto-set by wavelength), Pzt Scan Range (max travel, fixed by the PZT product type), ScanRangeHigh/Low (inspection scan range), and their Retry variants (scan range used on re-inspection).',
          ko:'PZT 속성(1) — Pzt Scan Step(PZT Motor의 1회 이동 거리, 파장에 따라 자동 설정), Pzt Scan Range(PZT Motor 최대 이동 거리, PZT 제품 유형에 따라 고정), ScanRangeHigh/Low(검사용 Scan 범위), 그리고 재검사용 Retry 값들.',
          zhCN:'PZT属性(1)——Pzt Scan Step(PZT Motor单次移动距离,依波长自动设定)、Pzt Scan Range(PZT Motor最大移动距离,依PZT产品类型固定)、ScanRangeHigh/Low(检测用Scan范围)及其重新检测用的Retry值。',
          zhTW:'PZT屬性(1)——Pzt Scan Step(PZT Motor單次移動距離,依波長自動設定)、Pzt Scan Range(PZT Motor最大移動距離,依PZT產品類型固定)、ScanRangeHigh/Low(檢測用Scan範圍)及其重新檢測用的Retry值。',
          ja:'PZTプロパティ(1)——Pzt Scan Step(PZT Motorの1回移動距離、波長により自動設定)、Pzt Scan Range(PZT Motorの最大移動距離、PZT製品種別により固定)、ScanRangeHigh/Low(検査用Scan範囲)、および再検査用のRetry値。'
        }},
        {img:cmImg('I','nbga',6),tx:{
          vi:'Thuộc tính PZT (2) — Wavelength (bước sóng kiểm tra, đo được qua Utility ▸ Wavelength Calibration; ánh sáng đỏ ≈ 630nm), Scan Order (số lần chia dạng sóng), JumpRangeBegin/End (phạm vi quét PZT cần bỏ qua), và ScaleFactor (hệ số chia tỷ lệ đầu vào Motor, thường là 1).',
          en:'PZT property (2) — Wavelength (inspection wavelength, measurable via Utility ▸ Wavelength Calibration; red light ≈ 630nm), Scan Order (waveform division count), JumpRangeBegin/End (a PZT scan range to skip), and ScaleFactor (motor input scaling, usually 1).',
          ko:'PZT 속성(2) — Wavelength(검사 파장, Utility ▸ Wavelength Calibration으로 측정 가능, 적색광 약 630nm), Scan Order(파형 분할 개수), JumpRangeBegin/End(건너뛸 PZT Scan 구간), ScaleFactor(Motor 입력 계수, 보통 1 사용).',
          zhCN:'PZT属性(2)——Wavelength(检测波长,可通过Utility ▸ Wavelength Calibration测量,红光约630nm)、Scan Order(波形分割数)、JumpRangeBegin/End(要跳过的PZT Scan区间)、ScaleFactor(Motor输入系数,通常使用1)。',
          zhTW:'PZT屬性(2)——Wavelength(檢測波長,可透過Utility ▸ Wavelength Calibration測量,紅光約630nm)、Scan Order(波形分割數)、JumpRangeBegin/End(要跳過的PZT Scan區間)、ScaleFactor(Motor輸入係數,通常使用1)。',
          ja:'PZTプロパティ(2)——Wavelength(検査波長、Utility ▸ Wavelength Calibrationで測定可能、赤色光は約630nm)、Scan Order(波形分割数)、JumpRangeBegin/End(スキップするPZT Scan区間)、ScaleFactor(Motor入力係数、通常1を使用)。'
        }},
        {img:cmImg('I','nbga',7),tx:{
          vi:'Frame Count — đặt số ảnh 2D/3D được Grab. 3D Frame Num (thường là 1, hoặc 2 khi bật UseMultiZmap), 2D Frame Num, Cuda Delay Frame Num (làm trễ tính toán CUDA N Frame), và Last No Calc Frame Num (loại N Frame cuối khỏi tính toán CUDA).',
          en:'Frame Count — sets how many 2D/3D images are grabbed. 3D Frame Num (usually 1, or 2 when UseMultiZmap is on), 2D Frame Num, Cuda Delay Frame Num (delays the CUDA calculation by N frames), and Last No Calc Frame Num (excludes the last N frames from the CUDA calculation).',
          ko:'Frame Count — 2D·3D 이미지 획득 장수를 설정합니다. 3D Frame Num(보통 1장, UseMultiZmap 사용 시 2장), 2D Frame Num, Cuda Delay Frame Num(CUDA 연산을 N Frame만큼 지연), Last No Calc Frame Num(마지막 N Frame을 CUDA 연산에서 제외).',
          zhCN:'Frame Count——设置2D、3D图像的采集张数。3D Frame Num(通常1张,UseMultiZmap开启时为2张)、2D Frame Num、Cuda Delay Frame Num(将CUDA运算延迟N帧)、Last No Calc Frame Num(将最后N帧从CUDA运算中排除)。',
          zhTW:'Frame Count——設定2D、3D影像的擷取張數。3D Frame Num(通常1張,UseMultiZmap開啟時為2張)、2D Frame Num、Cuda Delay Frame Num(將CUDA運算延遲N幀)、Last No Calc Frame Num(將最後N幀從CUDA運算中排除)。',
          ja:'Frame Count——2D・3D画像の取得枚数を設定します。3D Frame Num(通常1枚、UseMultiZmap使用時は2枚)、2D Frame Num、Cuda Delay Frame Num(CUDA演算をNフレーム遅延)、Last No Calc Frame Num(最後のNフレームをCUDA演算から除外)。'
        }},
        {img:cmImg('I','nbga',8),tx:{
          vi:'WSI Param (1) — NoiseThreshold (thay đổi tín hiệu Fringe dưới giá trị này bị coi là Noise và bỏ qua), UseMultiZMap (chuyển đổi giữa hai Frame 3D khi không thể chụp tốt cả dữ liệu SR và Bump ở cùng một cường độ sáng), và CoherentLength (kích thước đầu/cuối của tín hiệu Fringe).',
          en:'WSI Param (1) — NoiseThreshold (fringe signal changes below this are ignored as noise), UseMultiZMap (alternates between two 3D frames when SR and bump data can\'t both be captured well at one light intensity), and CoherentLength (the fringe signal\'s start/end size).',
          ko:'WSI Param(1) — NoiseThreshold(이 값보다 작은 Fringe 신호 변화는 Noise로 간주해 제외), UseMultiZMap(하나의 조명 강도로 SR과 Bump 데이터를 동시에 얻기 어려울 때 3D Frame 2장을 번갈아 획득), CoherentLength(Fringe 신호의 시작·끝 크기).',
          zhCN:'WSI Param(1)——NoiseThreshold(低于此值的Fringe信号变化视为Noise并排除)、UseMultiZMap(当一种光强难以同时获取SR与Bump数据时,交替获取两张3D Frame)、CoherentLength(Fringe信号的起止大小)。',
          zhTW:'WSI Param(1)——NoiseThreshold(低於此值的Fringe訊號變化視為Noise並排除)、UseMultiZMap(當一種光強難以同時獲取SR與Bump資料時,交替獲取兩張3D Frame)、CoherentLength(Fringe訊號的起止大小)。',
          ja:'WSI Param(1)——NoiseThreshold(この値未満のFringe信号変化はNoiseとみなし除外)、UseMultiZMap(一つの照明強度でSRとBumpデータを同時に得にくい場合、3D Frameを2枚交互に取得)、CoherentLength(Fringe信号の開始・終了サイズ)。'
        }},
        {img:cmImg('I','nbga',9),tx:{
          vi:'WSI Param (2) — BadPixelThreshold đặt ngưỡng dữ liệu Pixel lỗi; IntervalStep và IntervalTime hiện đang bị vô hiệu hóa.',
          en:'WSI Param (2) — BadPixelThreshold sets the bad-pixel data threshold; IntervalStep and IntervalTime are currently disabled.',
          ko:'WSI Param(2) — BadPixelThreshold는 불량 픽셀 데이터의 임계값을 설정합니다. IntervalStep, IntervalTime은 현재 비활성화되어 있습니다.',
          zhCN:'WSI Param(2)——BadPixelThreshold用于设置不良像素数据的阈值。IntervalStep、IntervalTime目前处于停用状态。',
          zhTW:'WSI Param(2)——BadPixelThreshold用於設定不良像素資料的閾值。IntervalStep、IntervalTime目前處於停用狀態。',
          ja:'WSI Param(2)——BadPixelThresholdは不良ピクセルデータの閾値を設定します。IntervalStep、IntervalTimeは現在無効化されています。'
        }},
        {img:cmImg('I','nbga',10),tx:{
          vi:'Thuộc tính Grab — MultiCount (tổng số ảnh Grab 3D, xác định bởi Scan Range và Scan Step của PZT), TimeOut (thời gian chờ kết quả Grab), và FirstTimeOut (Timeout cho lần Grab đầu tiên); ImageSaved và MultiTimeOut hiện đang bị vô hiệu hóa.',
          en:'Grab property — MultiCount (total 3D grab image count, determined by the PZT Scan Range and Scan Step), TimeOut (grab result wait time), and FirstTimeOut (timeout for the first grab); ImageSaved and MultiTimeOut are currently disabled.',
          ko:'Grab 속성 — MultiCount(3D Grab 이미지 총 장수, PZT ScanRange·Scan Step으로 결정), TimeOut(Grab 결과 대기 시간), FirstTimeOut(첫 Grab의 Timeout). ImageSaved, MultiTimeOut은 현재 비활성화.',
          zhCN:'Grab属性——MultiCount(3D Grab图像总张数,由PZT ScanRange与Scan Step决定)、TimeOut(等待Grab结果的时间)、FirstTimeOut(首次Grab的超时时间)。ImageSaved、MultiTimeOut目前处于停用状态。',
          zhTW:'Grab屬性——MultiCount(3D Grab影像總張數,由PZT ScanRange與Scan Step決定)、TimeOut(等待Grab結果的時間)、FirstTimeOut(首次Grab的超時時間)。ImageSaved、MultiTimeOut目前處於停用狀態。',
          ja:'Grabプロパティ——MultiCount(3D Grab画像の総枚数、PZT ScanRangeとScan Stepで決定)、TimeOut(Grab結果の待機時間)、FirstTimeOut(最初のGrabのタイムアウト)。ImageSaved、MultiTimeOutは現在無効化されています。'
        }},
        {img:cmImg('I','nbga',11),tx:{
          vi:'Intensity Control (2D) — điều chỉnh chiếu sáng theo từng Channel. Channel C01–C10 điều khiển chiếu sáng Dome (Oblique); C11/C12 điều khiển chiếu sáng Coaxial.',
          en:'Intensity Control (2D) — regulates lighting per channel. Channels C01–C10 control the dome-light (oblique) illumination; C11/C12 control coaxial illumination.',
          ko:'Intensity Control(2D) — 채널별로 조명 강도를 조절합니다. C01~C10 채널은 Dome Light(경사 조명), C11/C12 채널은 동축(Coaxial) 조명을 제어합니다.',
          zhCN:'Intensity Control(2D)——按通道调节照明强度。C01~C10通道控制Dome Light(斜射照明),C11/C12通道控制Coaxial(同轴)照明。',
          zhTW:'Intensity Control(2D)——按通道調節照明強度。C01~C10通道控制Dome Light(斜射照明),C11/C12通道控制Coaxial(同軸)照明。',
          ja:'Intensity Control(2D)——チャンネルごとに照明強度を調整します。C01~C10チャンネルはDome Light(斜方照明)、C11/C12チャンネルはCoaxial(同軸)照明を制御します。'
        }},
        {img:cmImg('I','nbga',12),tx:{
          vi:'Chiếu sáng Oblique chiếu vào mặt bên của Bump; chiếu sáng Coaxial chiếu vào mặt trên. Round Bump có mặt trên hẹp (bề mặt phản xạ hẹp ngay cả dưới ánh sáng Coaxial, nên cần thiết lập sáng hơn), trong khi Flat Bump có mặt trên rộng (phản xạ tốt dưới ánh sáng Coaxial).',
          en:'Oblique illumination lights the side of a bump; coaxial illumination lights its top. A Round Bump has a narrow top (a narrow reflective surface even under coaxial light, so brighter settings are needed), while a Flat Bump has a wide top (reflects well under coaxial light).',
          ko:'Oblique 조명은 Bump 측면을, Coaxial 조명은 Bump 상단을 비춥니다. Round Bump는 상단 면적이 좁아 Coaxial 조명을 써도 반사면이 좁으므로 더 밝은 설정이 필요하고, Flat Bump는 상단이 넓어 Coaxial 조명 시 반사면을 넓게 볼 수 있습니다.',
          zhCN:'Oblique照明照射Bump侧面,Coaxial照明照射Bump顶部。Round Bump顶部面积小,即使使用Coaxial照明反射面也较窄,需要更亮的设置;Flat Bump顶部较宽,使用Coaxial照明时可看到较大的反射面。',
          zhTW:'Oblique照明照射Bump側面,Coaxial照明照射Bump頂部。Round Bump頂部面積小,即使使用Coaxial照明反射面也較窄,需要更亮的設定;Flat Bump頂部較寬,使用Coaxial照明時可看到較大的反射面。',
          ja:'Oblique照明はBumpの側面を、Coaxial照明はBumpの上面を照らします。Round Bumpは上面が狭くCoaxial照明でも反射面が狭いため明るめの設定が必要で、Flat Bumpは上面が広くCoaxial照明で広い反射面が見えます。'
        }},
        {img:cmImg('I','nbga',13),tx:{
          vi:'Intensity Control (3D) — trong Frame 2D của hệ quang học 3D, C01–C03 điều khiển chiếu sáng Oblique; trong Frame 3D (WSI), C01 điều khiển chiếu sáng Coaxial.',
          en:'Intensity Control (3D) — in the 3D optical system\'s 2D frame, C01–C03 control oblique lighting; in its 3D (WSI) frame, C01 controls coaxial lighting.',
          ko:'Intensity Control(3D) — 3D 광학계의 2D Frame에서는 C01~C03이 Oblique 조명을, 3D Frame(WSI)에서는 C01이 Coaxial 조명을 제어합니다.',
          zhCN:'Intensity Control(3D)——3D光学系统的2D Frame中C01~C03控制Oblique照明,3D Frame(WSI)中C01控制Coaxial照明。',
          zhTW:'Intensity Control(3D)——3D光學系統的2D Frame中C01~C03控制Oblique照明,3D Frame(WSI)中C01控制Coaxial照明。',
          ja:'Intensity Control(3D)——3D光学系の2D FrameではC01~C03がOblique照明を、3D Frame(WSI)ではC01がCoaxial照明を制御します。'
        }},
        {img:cmImg('I','nbga',14),tx:{
          vi:'Nguyên lý chiếu sáng Oblique/Coaxial áp dụng cho Round và Flat Bump trong hệ quang học 3D cũng giống như hệ 2D.',
          en:'The same oblique/coaxial lighting principle applies to Round and Flat bumps in the 3D optical system as in the 2D system.',
          ko:'3D 광학계에서도 Round Bump·Flat Bump에 대한 Oblique/Coaxial 조명 원리는 2D 광학계와 동일하게 적용됩니다.',
          zhCN:'3D光学系统中Round Bump、Flat Bump的Oblique/Coaxial照明原理与2D光学系统相同。',
          zhTW:'3D光學系統中Round Bump、Flat Bump的Oblique/Coaxial照明原理與2D光學系統相同。',
          ja:'3D光学系におけるRound Bump・Flat BumpへのOblique/Coaxial照明の原理は2D光学系と同様に適用されます。'
        }},
        {img:cmImg('I','nbga',15),tx:{
          vi:'Software Inspection Parameter — phần này đề cập đến Illum Control, Align, 2D Barcode & OCR, 2D Inspection, 3D Inspection và LTS Target.',
          en:'Software Inspection Parameter — this section covers Illum Control, Align, 2D Barcode & OCR, 2D Inspection, 3D Inspection, and LTS Target.',
          ko:'Software Inspection Parameter — Illum Control, Align, 2D Barcode & OCR, 2D Inspection, 3D Inspection, LTS Target를 다룹니다.',
          zhCN:'Software Inspection Parameter——本节介绍Illum Control、Align、2D Barcode & OCR、2D Inspection、3D Inspection、LTS Target。',
          zhTW:'Software Inspection Parameter——本節介紹Illum Control、Align、2D Barcode & OCR、2D Inspection、3D Inspection、LTS Target。',
          ja:'Software Inspection Parameter——本節ではIllum Control、Align、2D Barcode & OCR、2D Inspection、3D Inspection、LTS Targetを扱います。'
        }},
        {img:cmImg('I','nbga',16),tx:{
          vi:'2.1.2. Align — thiết lập Parameter để đối chiếu ảnh kiểm tra với Pattern Gerber. Cũng kiểm tra xem Pocket của Tray có rỗng không, và tạo \'Blob\' ở nơi mức xám của ảnh vượt ngưỡng (biểu thị có sản phẩm).',
          en:'2.1.2. Align — sets the parameters for matching the inspected image against the Gerber pattern. It also checks whether a tray pocket is empty, and forms a \'Blob\' wherever the image\'s gray level exceeds a threshold (indicating a product).',
          ko:'2.1.2. Align — 검사 이미지와 Gerber 패턴을 비교하기 위한 Parameter를 설정합니다. Tray Pocket이 비어 있는지도 확인하며, 이미지에서 Gray Level이 일정 기준을 넘는 부분에 \'Blob\'을 형성합니다(Product로 판단).',
          zhCN:'2.1.2. Align——设置用于比较检测图像与Gerber图案的参数。同时确认Tray Pocket是否为空,并在图像中Gray Level超过一定基准的区域形成\'Blob\'(判定为Product)。',
          zhTW:'2.1.2. Align——設定用於比較檢測影像與Gerber圖案的參數。同時確認Tray Pocket是否為空,並在影像中Gray Level超過一定基準的區域形成\'Blob\'(判定為Product)。',
          ja:'2.1.2. Align——検査画像とGerberパターンを比較するためのParameterを設定します。Tray Pocketが空かどうかも確認し、画像内でGray Levelが一定基準を超える部分に\'Blob\'を形成します(Productと判定)。'
        }},
        {img:cmImg('I','nbga',17),tx:{
          vi:'Top Bump Image (1) — chọn Frame Illum Control nào để dùng cho Align Bump. Chọn ảnh mà hình dạng Bump rõ ràng nhất.',
          en:'Top Bump Image (1) — select which Illum Control frame to use for bump alignment. Choose an image where the bump shape is clearly distinguishable.',
          ko:'Top Bump Image(1) — Bump Alignment에 사용할 Illum Control Frame을 선택합니다. Bump 형상이 뚜렷이 구분되는 이미지를 선택해야 합니다.',
          zhCN:'Top Bump Image(1)——选择用于Bump Alignment的Illum Control Frame。应选择能清楚区分Bump形状的图像。',
          zhTW:'Top Bump Image(1)——選擇用於Bump Alignment的Illum Control Frame。應選擇能清楚區分Bump形狀的影像。',
          ja:'Top Bump Image(1)——Bump Alignmentに使用するIllum Control Frameを選択します。Bump形状がはっきり区別できる画像を選ぶ必要があります。'
        }},
        {img:cmImg('I','nbga',18),tx:{
          vi:'Top Bump Image (2) — kết hợp hai ảnh Frame bằng +, −, ×, hoặc trung bình khi một ảnh không đủ để phân biệt rõ Bump.',
          en:'Top Bump Image (2) — combine two frame images using +, −, ×, or average when a single image isn\'t enough to distinguish bumps clearly.',
          ko:'Top Bump Image(2) — 이미지 한 장으로 Bump 구분이 어려울 때, 두 Frame 이미지를 +, −, ×, 평균 연산으로 조합해 사용합니다.',
          zhCN:'Top Bump Image(2)——当单张图像难以区分Bump时,可将两张Frame图像以+、−、×、平均等运算方式组合使用。',
          zhTW:'Top Bump Image(2)——當單張影像難以區分Bump時,可將兩張Frame影像以+、−、×、平均等運算方式組合使用。',
          ja:'Top Bump Image(2)——1枚の画像ではBumpの区別が難しい場合、2枚のFrame画像を+、−、×、平均の演算で組み合わせて使用します。'
        }},
        {img:cmImg('I','nbga',19),tx:{
          vi:'Top Threshold — mức nhị phân hóa để tách Bump khỏi nền. Giảm giá trị này sẽ làm ảnh trắng hơn. Đặt sao cho đường viền Bump vẫn mượt trong khi giữ kích thước Bump hiển thị đúng.',
          en:'Top Threshold — the binarization level that separates the bump from the background. Lowering it turns more of the image white. Set it so the bump outline stays smooth while keeping the apparent bump size correct.',
          ko:'Top Threshold — Bump과 배경을 흑백으로 구분하는 이진화 기준값입니다. 값을 낮추면 흰색으로 표시되는 영역이 늘어납니다. Bump 크기를 유지하면서 윤곽선이 매끄럽게 보이도록 설정합니다.',
          zhCN:'Top Threshold——将Bump与背景以黑白方式区分的二值化基准值。数值降低时显示为白色的区域会增加。设置时应在保持Bump尺寸的同时使轮廓保持平滑。',
          zhTW:'Top Threshold——將Bump與背景以黑白方式區分的二值化基準值。數值降低時顯示為白色的區域會增加。設定時應在保持Bump尺寸的同時使輪廓保持平滑。',
          ja:'Top Threshold——BumpとBackgroundを白黒で区別する二値化基準値です。値を下げると白く表示される領域が増えます。Bumpサイズを維持しつつ輪郭が滑らかに見えるよう設定します。'
        }},
        {img:cmImg('I','nbga',20),tx:{
          vi:'BoxFilter & Equalization — BoxFilter áp dụng làm mờ kiểu Gaussian để giảm Noise; Equalization phân bố lại giá trị Pixel lệch để độ sáng đồng đều hơn.',
          en:'BoxFilter & Equalization — BoxFilter applies a Gaussian-style blur to reduce noise; Equalization redistributes skewed pixel values for a more even brightness distribution.',
          ko:'BoxFilter & Equalization — BoxFilter는 Gaussian 방식의 Blur를 적용해 Noise를 줄이고, Equalization은 치우친 픽셀 값을 재분배해 밝기 분포를 고르게 만듭니다.',
          zhCN:'BoxFilter & Equalization——BoxFilter采用Gaussian方式的模糊处理以降低Noise,Equalization则重新分配偏斜的像素值,使亮度分布更均匀。',
          zhTW:'BoxFilter & Equalization——BoxFilter採用Gaussian方式的模糊處理以降低Noise,Equalization則重新分配偏斜的像素值,使亮度分佈更均勻。',
          ja:'BoxFilter & Equalization——BoxFilterはGaussian方式のぼかしを適用してNoiseを減らし、Equalizationは偏ったピクセル値を再分配して明るさの分布を均一にします。'
        }},
        {img:cmImg('I','nbga',21),tx:{
          vi:'Bump Area — \'Bump Search Size\' đặt vùng C4 được tìm Bump; Blob chỉ được tạo cho Bump tìm thấy trong vùng này.',
          en:'Bump Area — \'Bump Search Size\' sets the C4 area searched for bumps; a Blob is only formed for bumps found inside this area.',
          ko:'Bump Area — \'Bump Search Size\'는 Bump를 탐색할 C4 영역을 설정합니다. 이 영역 내에서만 Bump의 \'Blob\'이 형성됩니다.',
          zhCN:'Bump Area——\'Bump Search Size\'用于设置搜索Bump的C4区域,只有在此区域内才会形成Bump的\'Blob\'。',
          zhTW:'Bump Area——\'Bump Search Size\'用於設定搜尋Bump的C4區域,只有在此區域內才會形成Bump的\'Blob\'。',
          ja:'Bump Area——\'Bump Search Size\'はBumpを探索するC4領域を設定します。この領域内でのみBumpの\'Blob\'が形成されます。'
        }},
        {img:cmImg('I','nbga',22),tx:{
          vi:'Each Bump Search Size — kích thước Blob riêng cho từng Bump, áp dụng theo [Bump Spec Size + Each Bump Search Size]; không được lấn sang vùng của Bump lân cận.',
          en:'Each Bump Search Size — the per-bump blob size, applied as [Bump Spec Size + Each Bump Search Size]; it must not extend into a neighboring bump\'s area.',
          ko:'Each Bump Search Size — 개별 Bump를 검사할 Blob 크기이며, [Bump Spec Size + Each Bump Search Size] 값으로 적용됩니다. 주변 다른 Bump 영역을 침범하지 않아야 합니다.',
          zhCN:'Each Bump Search Size——检测单个Bump所用的Blob尺寸,以[Bump Spec Size + Each Bump Search Size]的值套用。不得侵入周围其他Bump的区域。',
          zhTW:'Each Bump Search Size——檢測單一Bump所用的Blob尺寸,以[Bump Spec Size + Each Bump Search Size]的值套用。不得侵入周圍其他Bump的區域。',
          ja:'Each Bump Search Size——個々のBumpを検査するBlobサイズで、[Bump Spec Size + Each Bump Search Size]の値が適用されます。周囲の他のBump領域を侵してはいけません。'
        }},
        {img:cmImg('I','nbga',23),tx:{
          vi:'Sampling — đối chiếu Pattern Gerber với Pattern Bump thực tế bằng một số lượng Bump mẫu nhất định (Sample Number). Càng nhiều mẫu càng tăng độ chính xác nhưng làm chậm Sorting, nên dùng giá trị cân bằng (thường 300–500).',
          en:'Sampling — matches the Gerber pattern to the actual bump pattern using a set number of sample bumps (Sample Number). More samples improve matching accuracy but slow down sorting, so a balanced value (typically 300–500) is used.',
          ko:'Sampling — 지정한 Bump 개수(Sample Number)만큼 표본을 사용해 Gerber 패턴과 실제 Bump 패턴을 매칭합니다. 표본 수가 많을수록 매칭 정확도는 높아지지만 Sorting 속도가 느려지므로 적절한 값(보통 300~500)을 사용합니다.',
          zhCN:'Sampling——使用指定数量的Bump样本(Sample Number)将Gerber图案与实际Bump图案进行匹配。样本数越多匹配精度越高,但Sorting速度会变慢,因此需使用适当的数值(通常300~500)。',
          zhTW:'Sampling——使用指定數量的Bump樣本(Sample Number)將Gerber圖案與實際Bump圖案進行匹配。樣本數越多匹配精度越高,但Sorting速度會變慢,因此需使用適當的數值(通常300~500)。',
          ja:'Sampling——指定したBump数(Sample Number)分のサンプルを使用してGerberパターンと実際のBumpパターンをマッチングします。サンプル数が多いほどマッチング精度は上がりますがSorting速度が遅くなるため、適切な値(通常300~500)を使用します。'
        }},
        {img:cmImg('I','nbga',24),tx:{
          vi:'Empty Pocket Check (1) — nếu cường độ trung bình trong Empty Check ROI thấp hơn Empty Check Threshold, Pocket được xác định là rỗng. Empty Check Frame chọn ảnh dùng để kiểm tra, và Use Empty Check bật/tắt chức năng.',
          en:'Empty Pocket Check (1) — if the average intensity inside the Empty Check ROI is below the Empty Check Threshold, the pocket is judged empty. Empty Check Frame selects the image used, and Use Empty Check toggles the feature.',
          ko:'Empty Pocket Check(1) — Empty Check ROI 영역의 평균 Intensity가 Empty Check Threshold보다 낮으면 빈 Pocket으로 판단합니다. Empty Check Frame은 사용할 이미지를 지정하고, Use Empty Check는 기능 사용 여부를 설정합니다.',
          zhCN:'Empty Pocket Check(1)——若Empty Check ROI区域的平均Intensity低于Empty Check Threshold,则判定为空Pocket。Empty Check Frame指定所用图像,Use Empty Check设置是否启用此功能。',
          zhTW:'Empty Pocket Check(1)——若Empty Check ROI區域的平均Intensity低於Empty Check Threshold,則判定為空Pocket。Empty Check Frame指定所用影像,Use Empty Check設定是否啟用此功能。',
          ja:'Empty Pocket Check(1)——Empty Check ROI領域の平均IntensityがEmpty Check Thresholdより低い場合、空のPocketと判定します。Empty Check Frameは使用する画像を指定し、Use Empty Checkは機能の使用有無を設定します。'
        }},
        {img:cmImg('I','nbga',25),tx:{
          vi:'Empty Pocket Check (2) — ví dụ: Threshold 10 với cường độ ROI 67.31 → "Not Empty" (tiếp tục Alignment); Threshold 70 với cùng cường độ → "Empty" (bỏ qua Alignment). Đặt ngưỡng bằng cách so sánh cường độ thực tế của Pocket rỗng và Pocket có sản phẩm.',
          en:'Empty Pocket Check (2) — example: Threshold 10 with ROI intensity 67.31 → "Not Empty" (alignment proceeds); Threshold 70 with the same intensity → "Empty" (alignment skipped). Set the threshold by comparing the real empty-pocket and product-pocket intensities.',
          ko:'Empty Pocket Check(2) — 예: Threshold 10, ROI Intensity 67.31 → "Not Empty"(정렬 진행). Threshold 70, 동일 Intensity → "Empty"(정렬 진행 안 함). 실제 빈 Pocket과 Product Pocket의 Intensity를 비교하여 Threshold를 설정합니다.',
          zhCN:'Empty Pocket Check(2)——示例:Threshold为10、ROI Intensity为67.31 → "Not Empty"(继续对位);Threshold为70、相同Intensity → "Empty"(不进行对位)。请比较实际空Pocket与产品Pocket的Intensity来设置Threshold。',
          zhTW:'Empty Pocket Check(2)——範例:Threshold為10、ROI Intensity為67.31 → "Not Empty"(繼續對位);Threshold為70、相同Intensity → "Empty"(不進行對位)。請比較實際空Pocket與產品Pocket的Intensity來設定Threshold。',
          ja:'Empty Pocket Check(2)——例:Threshold 10、ROI Intensity 67.31 → "Not Empty"(アライメント続行)。Threshold 70、同じIntensity → "Empty"(アライメント未実施)。実際の空PocketとProduct PocketのIntensityを比較してThresholdを設定します。'
        }},
        {img:cmImg('I','nbga',26),tx:{
          vi:'Blob Pixel Size (1) — đặt kích thước Pixel Min/Max (chuyển đổi và hiển thị theo µm) để được coi là \'Blob\'. Kích thước tối thiểu chủ yếu lọc các hạt dị vật nhỏ để không bị nhầm là Bump, giúp tăng tốc độ kiểm tra.',
          en:'Blob Pixel Size (1) — sets the min/max pixel size (converted and shown in µm) that qualifies as a \'Blob\'. The minimum size mainly filters out small foreign particles so they aren\'t mistaken for bumps, improving inspection speed.',
          ko:'Blob Pixel Size(1) — \'Blob\'로 인정할 최소·최대 Pixel 크기(µm 단위로 환산 표시)를 설정합니다. 최소 크기는 주로 작은 이물이 Bump로 오인되지 않도록 걸러내며, 검사 속도 향상에도 도움이 됩니다.',
          zhCN:'Blob Pixel Size(1)——设置被判定为\'Blob\'的最小·最大Pixel尺寸(以µm换算显示)。最小尺寸主要用于过滤微小异物,避免被误判为Bump,同时也有助于提升检测速度。',
          zhTW:'Blob Pixel Size(1)——設定被判定為\'Blob\'的最小·最大Pixel尺寸(以µm換算顯示)。最小尺寸主要用於過濾微小異物,避免被誤判為Bump,同時也有助於提升檢測速度。',
          ja:'Blob Pixel Size(1)——\'Blob\'と認識する最小・最大Pixelサイズ(µm換算で表示)を設定します。最小サイズは主に小さな異物がBumpと誤認識されないようフィルタリングし、検査速度の向上にも役立ちます。'
        }},
        {img:cmImg('I','nbga',27),tx:{
          vi:'Blob Pixel Size (2) — Blob Size đặt sai có thể loại cả Bump bình thường khỏi kiểm tra. Nếu không chỉ định, phạm vi mặc định là 2–2560px; Bump lớn hơn Max Blob Size sẽ bị loại, như hình.',
          en:'Blob Pixel Size (2) — an incorrectly set Blob Size can exclude even normal bumps from inspection. If unspecified, the default range is 2–2560px; bumps larger than Max Blob Size are excluded, as shown.',
          ko:'Blob Pixel Size(2) — Blob Size를 잘못 설정하면 정상 Bump도 검사에서 제외될 수 있습니다. 별도 지정이 없으면 기본 범위는 2~2560px이며, Max Blob Size보다 큰 Bump는 그림처럼 제외됩니다.',
          zhCN:'Blob Pixel Size(2)——若Blob Size设置不当,正常的Bump也可能被排除在检测之外。若未另行指定,默认范围为2~2560px;如图所示,大于Max Blob Size的Bump会被排除。',
          zhTW:'Blob Pixel Size(2)——若Blob Size設定不當,正常的Bump也可能被排除在檢測之外。若未另行指定,預設範圍為2~2560px;如圖所示,大於Max Blob Size的Bump會被排除。',
          ja:'Blob Pixel Size(2)——Blob Sizeの設定を誤ると、正常なBumpも検査から除外される恐れがあります。特に指定がない場合の既定範囲は2~2560pxで、図のようにMax Blob Sizeより大きいBumpは除外されます。'
        }},
        {img:cmImg('I','nbga',28),tx:{
          vi:'Software Inspection Parameter — phần này đề cập đến Illum Control, Align, 2D Barcode & OCR, 2D Inspection, 3D Inspection và LTS Target.',
          en:'Software Inspection Parameter — this section covers Illum Control, Align, 2D Barcode & OCR, 2D Inspection, 3D Inspection, and LTS Target.',
          ko:'Software Inspection Parameter — Illum Control, Align, 2D Barcode & OCR, 2D Inspection, 3D Inspection, LTS Target를 다룹니다.',
          zhCN:'Software Inspection Parameter——本节介绍Illum Control、Align、2D Barcode & OCR、2D Inspection、3D Inspection、LTS Target。',
          zhTW:'Software Inspection Parameter——本節介紹Illum Control、Align、2D Barcode & OCR、2D Inspection、3D Inspection、LTS Target。',
          ja:'Software Inspection Parameter——本節ではIllum Control、Align、2D Barcode & OCR、2D Inspection、3D Inspection、LTS Targetを扱います。'
        }},
        {img:cmImg('I','nbga',29),tx:{
          vi:'2.1.3. 2D Barcode & OCR — kiểm tra các loại Barcode khác nhau in trên Unit: OCR (nhận diện ký tự), QR Code, và 2D Matrix.',
          en:'2.1.3. 2D Barcode & OCR — checks the various barcodes printed on the unit: OCR (character recognition), QR Code, and 2D Matrix.',
          ko:'2.1.3. 2D Barcode & OCR — Unit에 표기된 다양한 Barcode를 확인하는 기능입니다: OCR(문자 인식), QR Code, 2D Matrix.',
          zhCN:'2.1.3. 2D Barcode & OCR——检查Unit上标示的各种Barcode的功能:OCR(字符识别)、QR Code、2D Matrix。',
          zhTW:'2.1.3. 2D Barcode & OCR——檢查Unit上標示的各種Barcode的功能:OCR(文字辨識)、QR Code、2D Matrix。',
          ja:'2.1.3. 2D Barcode & OCR——Unitに表示された各種Barcodeを確認する機能です:OCR(文字認識)、QR Code、2D Matrix。'
        }},
        {img:cmImg('I','nbga',30),tx:{
          vi:'Select Image — chọn Frame nào dùng để kiểm tra Barcode.',
          en:'Select Image — chooses which frame to use for barcode inspection.',
          ko:'Select Image — Barcode 검사에 사용할 Frame을 선택합니다.',
          zhCN:'Select Image——选择用于Barcode检测的Frame。',
          zhTW:'Select Image——選擇用於Barcode檢測的Frame。',
          ja:'Select Image——Barcode検査に使用するFrameを選択します。'
        }},
        {img:cmImg('I','nbga',31),tx:{
          vi:'Compare First Char / Compare Length — so sánh kết quả Barcode với tên Lot, bắt đầu từ một ký tự cho trước qua một độ dài cho trước (0 = không so sánh), để xác nhận Unit thuộc Lot hiện tại.',
          en:'Compare First Char / Compare Length — compares the barcode result against the Lot name, starting from a given character over a given length (0 = no comparison), to confirm the unit belongs to the current lot.',
          ko:'Compare First Char / Compare Length — Barcode 결과와 Lot 명을 지정한 시작 문자부터 지정한 길이만큼 비교합니다(0이면 비교 안 함). 검사 중인 Unit이 해당 Lot의 제품인지 확인하는 용도입니다.',
          zhCN:'Compare First Char / Compare Length——从指定的起始字符开始,以指定长度比较Barcode结果与Lot名称(为0则不比较),用于确认检测中的Unit是否属于该Lot的产品。',
          zhTW:'Compare First Char / Compare Length——從指定的起始字元開始,以指定長度比較Barcode結果與Lot名稱(為0則不比較),用於確認檢測中的Unit是否屬於該Lot的產品。',
          ja:'Compare First Char / Compare Length——指定した開始文字から指定した長さ分、Barcode結果とLot名を比較します(0の場合は比較なし)。検査中のUnitがそのLotの製品かを確認する用途です。'
        }},
        {img:cmImg('I','nbga',32),tx:{
          vi:'2D Matrix (engine nội bộ) — đặt Barcode ROI (khung bao quanh Matrix 2D) và Search ROI (vùng tìm kiếm) trong cửa sổ xem. Nếu Barcode ROI lớn hơn Search ROI, kiểm tra sẽ bị bỏ qua.',
          en:'2D Matrix (internal engine) — set the Barcode ROI (the box enclosing the 2D matrix) and Search ROI (search area) in the view window. If the Barcode ROI is larger than the Search ROI, inspection is skipped.',
          ko:'2D Matrix(내장 엔진) — View 창에서 Barcode ROI(2D Matrix를 둘러싸는 영역)와 Search ROI(탐색 영역)의 위치·크기를 설정합니다. Barcode ROI가 Search ROI보다 크면 검사가 수행되지 않습니다.',
          zhCN:'2D Matrix(内建引擎)——在View窗口中设置Barcode ROI(包围2D Matrix的区域)与Search ROI(搜索区域)的位置·大小。若Barcode ROI大于Search ROI,则不执行检测。',
          zhTW:'2D Matrix(內建引擎)——在View視窗中設定Barcode ROI(包圍2D Matrix的區域)與Search ROI(搜尋區域)的位置·大小。若Barcode ROI大於Search ROI,則不執行檢測。',
          ja:'2D Matrix(内蔵エンジン)——View画面でBarcode ROI(2D Matrixを囲む領域)とSearch ROI(探索領域)の位置・サイズを設定します。Barcode ROIがSearch ROIより大きい場合、検査は実行されません。'
        }},
        {img:cmImg('I','nbga',33),tx:{
          vi:'Với thiết lập bình thường, nhấn nút Inspection sẽ xuất ra kết quả đọc Barcode.',
          en:'Under normal settings, clicking the Inspection button outputs the barcode read result.',
          ko:'정상 설정 상태에서 Inspection 버튼을 클릭하면 Barcode 판독 결과가 출력됩니다.',
          zhCN:'在正常设置状态下,点击Inspection按钮即可输出Barcode读取结果。',
          zhTW:'在正常設定狀態下,點擊Inspection按鈕即可輸出Barcode讀取結果。',
          ja:'正常な設定状態でInspectionボタンをクリックすると、Barcode判読結果が出力されます。'
        }},
        {img:cmImg('I','nbga',34),tx:{
          vi:'Angle — hiệu chỉnh độ xoay của Barcode; nhập góc quay theo chiều kim đồng hồ cần bù.',
          en:'Angle — corrects for barcode rotation; enter the clockwise angle needed to compensate.',
          ko:'Angle — Barcode 회전을 보정하는 값입니다. 시계 방향으로 회전시킬 각도를 입력합니다.',
          zhCN:'Angle——用于校正Barcode旋转角度的参数,输入需要顺时针旋转的角度。',
          zhTW:'Angle——用於校正Barcode旋轉角度的參數,輸入需要順時針旋轉的角度。',
          ja:'Angle——Barcodeの回転を補正するパラメータです。時計回りに回転させる角度を入力します。'
        }},
        {img:cmImg('I','nbga',35),tx:{
          vi:'Easy Matrix — bộ đọc Matrix 2D hiệu năng cao hơn dùng Open Vision Library. Không dùng Barcode ROI, nên Search ROI phải bao trọn Barcode với một biên độ dư (quá sát có thể khiến không nhận diện được).',
          en:'Easy Matrix — a higher-performance 2D matrix reader using the Open Vision Library. It doesn\'t use Barcode ROI, so the Search ROI must fully contain the barcode with some free margin (too tight a fit can prevent recognition).',
          ko:'Easy Matrix — Open Vision Library를 이용한 고성능 2D Matrix 판독 기능입니다. Barcode ROI를 사용하지 않으므로, Search ROI가 Barcode 영역을 여유 있게 포함하도록 설정해야 합니다(너무 딱 맞으면 인식이 안 될 수 있음).',
          zhCN:'Easy Matrix——使用Open Vision Library的高性能2D Matrix读取功能。由于不使用Barcode ROI,需将Search ROI设置为充分包含Barcode区域(设置得过于贴合可能导致无法识别)。',
          zhTW:'Easy Matrix——使用Open Vision Library的高效能2D Matrix讀取功能。由於不使用Barcode ROI,需將Search ROI設定為充分包含Barcode區域(設定得過於貼合可能導致無法辨識)。',
          ja:'Easy Matrix——Open Vision Libraryを利用した高性能な2D Matrix読み取り機能です。Barcode ROIを使用しないため、Search ROIはBarcode領域に余裕を持たせて含める必要があります(ぴったりすぎると認識できないことがあります)。'
        }},
        {img:cmImg('I','nbga',36),tx:{
          vi:'Empty Threshold (Easy Matrix) — nếu độ sáng trung bình trong Search ROI thấp hơn ngưỡng này, Pocket được xác định là rỗng và bỏ qua kiểm tra Barcode. Đặt bằng cách so sánh giá trị đọc thực tế của Pocket rỗng và Pocket có sản phẩm.',
          en:'Empty Threshold (Easy Matrix) — if the average brightness in the Search ROI is below this threshold, the pocket is judged empty and the barcode check is skipped. Set it by comparing real empty-pocket and product readings.',
          ko:'Empty Threshold(Easy Matrix) — Search ROI의 평균 밝기가 이 값보다 낮으면 빈 Pocket으로 판단해 Barcode 검사를 하지 않습니다. 실제 빈 Pocket과 Product의 밝기를 비교하여 설정합니다.',
          zhCN:'Empty Threshold(Easy Matrix)——若Search ROI的平均亮度低于此值,则判定为空Pocket,不进行Barcode检测。请比较实际空Pocket与产品的亮度来设置。',
          zhTW:'Empty Threshold(Easy Matrix)——若Search ROI的平均亮度低於此值,則判定為空Pocket,不進行Barcode檢測。請比較實際空Pocket與產品的亮度來設定。',
          ja:'Empty Threshold(Easy Matrix)——Search ROIの平均輝度がこの値より低い場合、空のPocketと判定しBarcode検査を行いません。実際の空PocketとProductの輝度を比較して設定します。'
        }},
        {img:cmImg('I','nbga',37),tx:{
          vi:'Timeout (Easy Matrix) — giới hạn thời gian kiểm tra để chương trình không chờ vô hạn nếu việc đọc Barcode bị trễ do lỗi.',
          en:'Timeout (Easy Matrix) — caps the inspection time so the program doesn\'t wait indefinitely if a barcode read is delayed by an error.',
          ko:'Timeout(Easy Matrix) — 오류로 판독이 지연될 경우 프로그램이 무한 대기하지 않도록 검사 시간을 제한하는 값입니다.',
          zhCN:'Timeout(Easy Matrix)——限制检测时间的参数,防止因错误导致判读延迟时程序无限等待。',
          zhTW:'Timeout(Easy Matrix)——限制檢測時間的參數,防止因錯誤導致判讀延遲時程式無限等待。',
          ja:'Timeout(Easy Matrix)——エラーで判読が遅延した際にプログラムが無限に待機しないよう、検査時間を制限するパラメータです。'
        }},
        {img:cmImg('I','nbga',38),tx:{
          vi:'Với thiết lập bình thường (Easy Matrix), nhấn nút Inspection sẽ xuất ra kết quả đọc Barcode.',
          en:'Under normal settings (Easy Matrix), clicking the Inspection button outputs the barcode read result.',
          ko:'정상 설정 상태(Easy Matrix)에서 Inspection 버튼을 클릭하면 Barcode 판독 결과가 출력됩니다.',
          zhCN:'在正常设置状态下(Easy Matrix),点击Inspection按钮即可输出Barcode读取结果。',
          zhTW:'在正常設定狀態下(Easy Matrix),點擊Inspection按鈕即可輸出Barcode讀取結果。',
          ja:'正常な設定状態(Easy Matrix)でInspectionボタンをクリックすると、Barcode判読結果が出力されます。'
        }},
        {img:cmImg('I','nbga',39),tx:{
          vi:'Easy Character — đọc ký tự kiểu 2D-matrix bằng Open Vision Library. Cũng không dùng Barcode ROI, nên Search ROI cần đủ lớn để cho phép Unit di chuyển trong Pocket mà ký tự không trôi ra ngoài phạm vi.',
          en:'Easy Character — 2D-matrix-style character reading via the Open Vision Library. It also doesn\'t use Barcode ROI, so the Search ROI must be sized to allow for unit movement within the pocket without the characters drifting out of range.',
          ko:'Easy Character — Open Vision Library를 이용한 문자 판독 기능입니다. 역시 Barcode ROI를 사용하지 않으므로, Pocket 내에서 Unit이 조금 움직여도 문자가 범위를 벗어나지 않도록 Search ROI를 적절히 설정해야 합니다.',
          zhCN:'Easy Character——使用Open Vision Library的字符判读功能。同样不使用Barcode ROI,因此需将Search ROI设置得足够大,即使Unit在Pocket内略有移动,字符也不会超出范围。',
          zhTW:'Easy Character——使用Open Vision Library的文字判讀功能。同樣不使用Barcode ROI,因此需將Search ROI設定得足夠大,即使Unit在Pocket內略有移動,文字也不會超出範圍。',
          ja:'Easy Character——Open Vision Libraryを利用した文字判読機能です。こちらもBarcode ROIを使用しないため、Pocket内でUnitが多少動いても文字が範囲外に出ないようSearch ROIを適切に設定する必要があります。'
        }},
        {img:cmImg('I','nbga',40),tx:{
          vi:'OCR cần một Font File mô tả hình dạng từng ký tự. Tạo hoặc chỉnh sửa trong Open eVision Studio — nhấn Load cho Font File có sẵn, hoặc New để tạo mới.',
          en:'OCR requires a Font File describing each character\'s shape. Create or edit one in Open eVision Studio — click Load for an existing Font File, or New to start one.',
          ko:'OCR을 위해서는 각 문자 형태가 저장된 Font File이 필요합니다. Open eVision Studio에서 생성·수정할 수 있으며, 기존 Font File이 있으면 Load, 없으면 New로 새로 만듭니다.',
          zhCN:'OCR需要保存各字符形态的Font File。可在Open eVision Studio中创建或修改——已有Font File时点击Load,没有则点击New新建。',
          zhTW:'OCR需要儲存各文字形態的Font File。可在Open eVision Studio中建立或修改——已有Font File時點擊Load,沒有則點擊New新建。',
          ja:'OCRには各文字の形状を保存したFont Fileが必要です。Open eVision Studioで作成・編集でき、既存のFont FileがあればLoad、なければNewで新規作成します。'
        }},
        {img:cmImg('I','nbga',41),tx:{
          vi:'Sau khi mở hoặc tạo Font File, nạp ảnh huấn luyện: nhấn New Image trong tab Source Image, sau đó nhấp chuột phải và chọn Load để đưa vào ảnh dùng cho huấn luyện Font.',
          en:'After opening or creating the Font File, load a training image: click New Image in the Source Image tab, then right-click and select Load to bring in the image used for font learning.',
          ko:'Font File을 열거나 만든 뒤, 학습용 이미지를 불러옵니다: Source Image 탭에서 New Image를 클릭하고, 우클릭 후 Load로 폰트 학습에 사용할 이미지를 불러옵니다.',
          zhCN:'打开或建立Font File后,载入学习用图像:在Source Image标签中点击New Image,然后右键点击选择Load,载入用于字体学习的图像。',
          zhTW:'開啟或建立Font File後,載入學習用影像:在Source Image標籤中點擊New Image,然後右鍵點擊選擇Load,載入用於字型學習的影像。',
          ja:'Font Fileを開くか作成した後、学習用画像を読み込みます:Source ImageタブでNew Imageをクリックし、右クリックしてLoadを選択、フォント学習に使用する画像を読み込みます。'
        }},
        {img:cmImg('I','nbga',42),tx:{
          vi:'Sau khi nạp ảnh, chỉnh Threshold để ký tự nổi bật so với nền — dùng ảnh có độ sáng tiêu biểu. Chars Color đặt ký tự là White-on-Black hay Black-on-White.',
          en:'After loading the image, adjust the Threshold so characters stand out from the background — use an image with representative brightness. Chars Color sets whether characters are White-on-Black or Black-on-White.',
          ko:'이미지를 불러온 뒤, 문자가 배경과 잘 구분되도록 Threshold를 조정합니다(대표 밝기의 이미지 사용). Chars Color는 문자가 White-on-Black인지 Black-on-White인지 지정합니다.',
          zhCN:'载入图像后,调整Threshold使字符与背景清楚区分(使用代表性亮度的图像)。Chars Color用于指定字符是White-on-Black还是Black-on-White。',
          zhTW:'載入影像後,調整Threshold使文字與背景清楚區分(使用代表性亮度的影像)。Chars Color用於指定文字是White-on-Black還是Black-on-White。',
          ja:'画像を読み込んだ後、文字が背景とはっきり区別できるようThresholdを調整します(代表的な明るさの画像を使用)。Chars Colorは文字がWhite-on-BlackかBlack-on-Whiteかを指定します。'
        }},
        {img:cmImg('I','nbga',43),tx:{
          vi:'(Tiếp theo) Chọn Chars Color phù hợp với việc ký tự sáng trên nền tối hay tối trên nền sáng.',
          en:'(Continued) Select Chars Color to match whether the characters are light-on-dark or dark-on-light.',
          ko:'(계속) 문자가 어두운 배경 위 밝은 문자인지, 밝은 배경 위 어두운 문자인지에 맞춰 Chars Color를 선택합니다.',
          zhCN:'(续)根据字符是暗背景亮字或亮背景暗字,选择相应的Chars Color。',
          zhTW:'(續)根據文字是暗背景亮字或亮背景暗字,選擇相應的Chars Color。',
          ja:'(続き)文字が暗い背景に明るい文字か、明るい背景に暗い文字かに合わせてChars Colorを選択します。'
        }},
        {img:cmImg('I','nbga',44),tx:{
          vi:'Sau khi đặt Threshold, đặt Min/Max Height & Width của ký tự (thường hiệu chỉnh theo ký tự mảnh nhất như \'I\'/\'1\' và dày nhất như \'D\'/\'8\') và Noise Area (lọc Noise Pixel không đều để không bị đọc thành ký tự; thường 50–100, hoặc 130+ với ảnh nhiễu).',
          en:'After setting the Threshold, set the character\'s Min/Max Height & Width (typically calibrated on the thinnest character like \'I\'/\'1\' and the thickest like \'D\'/\'8\') and the Noise Area (filters out uneven-pixel noise so it isn\'t read as a character; typically 50–100, or 130+ for noisy images).',
          ko:'Threshold 설정 후, 문자의 Min/Max Height & Width(보통 가장 얇은 문자인 \'I\'/\'1\'과 가장 두꺼운 문자인 \'D\'/\'8\' 기준으로 설정)와 Noise Area(픽셀 분포가 불균일한 이물을 문자로 오인하지 않도록 필터링, 보통 50~100, 화질이 나쁘면 130 이상)를 설정합니다.',
          zhCN:'设置Threshold后,设置字符的Min/Max Height & Width(通常以最细字符\'I\'/\'1\'与最粗字符\'D\'/\'8\'为基准设置)以及Noise Area(过滤像素分布不均的杂讯,避免被误判为字符,通常为50~100,图像质量较差时使用130以上)。',
          zhTW:'設定Threshold後,設定文字的Min/Max Height & Width(通常以最細文字\'I\'/\'1\'與最粗文字\'D\'/\'8\'為基準設定)以及Noise Area(過濾像素分佈不均的雜訊,避免被誤判為文字,通常為50~100,影像品質較差時使用130以上)。',
          ja:'Threshold設定後、文字のMin/Max Height & Width(通常最も細い文字\'I\'/\'1\'と最も太い文字\'D\'/\'8\'を基準に設定)およびNoise Area(ピクセル分布が不均一なノイズが文字と誤認識されないようフィルタリング、通常50~100、画質が悪い場合は130以上)を設定します。'
        }},
        {img:cmImg('I','nbga',45),tx:{
          vi:'Huấn luyện ký tự — ở tab Learn, phân loại từng ký tự (EOcrClass Light cho số, Upper/Lower cho chữ), nhập giá trị đúng, sau đó nhấn Execute ở tab Recognition để kiểm tra kết quả.',
          en:'Character learning — on the Learn tab, classify each character (EOcrClass Light for digits, Upper/Lower for letters), enter its correct value, then click Execute on the Recognition tab to check the result.',
          ko:'문자 학습 — Learn 탭에서 각 문자를 분류하고(숫자는 EOcrClass Light, 대문자는 Upper, 소문자는 Lower), 정답 값을 입력한 뒤 Recognition 탭의 Execute를 클릭해 인식 결과를 확인합니다.',
          zhCN:'字符学习——在Learn标签中对各字符进行分类(数字用EOcrClass Light,大写字母用Upper,小写字母用Lower),输入正确值后,点击Recognition标签的Execute确认识别结果。',
          zhTW:'文字學習——在Learn標籤中對各文字進行分類(數字用EOcrClass Light,大寫字母用Upper,小寫字母用Lower),輸入正確值後,點擊Recognition標籤的Execute確認辨識結果。',
          ja:'文字学習——Learnタブで各文字を分類し(数字はEOcrClass Light、大文字はUpper、小文字はLower)、正解値を入力した後、RecognitionタブのExecuteをクリックして認識結果を確認します。'
        }},
        {img:cmImg('I','nbga',46),tx:{
          vi:'Lưu Font đã huấn luyện bằng \'Save As\' ở tab Font File (ghi đè file hiện có hoặc lưu tên mới) — lặp lại quá trình huấn luyện cho mọi ký tự 0–9 và A–Z.',
          en:'Save the learned font using \'Save As\' in the Font File tab (overwrite the existing file or save under a new name) — repeat the learning process for every character 0–9 and A–Z.',
          ko:'Font File 탭의 \'Save As\'로 학습된 폰트를 저장합니다(기존 파일에 덮어쓰거나 새 이름으로 저장). 0~9, A~Z 모든 문자에 대해 위 과정을 반복합니다.',
          zhCN:'在Font File标签中使用\'Save As\'保存已学习的字体(可覆盖既有文件或另存新名称)。需对0~9、A~Z所有字符重复上述学习过程。',
          zhTW:'在Font File標籤中使用\'Save As\'儲存已學習的字型(可覆蓋既有檔案或另存新名稱)。需對0~9、A~Z所有文字重複上述學習過程。',
          ja:'Font Fileタブの\'Save As\'で学習したフォントを保存します(既存ファイルに上書き、または新しい名前で保存)。0~9、A~Zすべての文字についてこの学習過程を繰り返します。'
        }},
        {img:cmImg('I','nbga',47),tx:{
          vi:'Font Path chọn vị trí Font File đã tạo trong Open eVision Studio. Rotating Angle xoay ảnh kiểm tra ngược chiều kim đồng hồ để khớp với Barcode hoặc ký tự bị xoay.',
          en:'Font Path selects the Font File location created in Open eVision Studio. Rotating Angle rotates the inspection image counter-clockwise to match a rotated barcode or character.',
          ko:'Font Path는 Open eVision Studio에서 만든 Font File의 위치를 지정합니다. Rotating Angle은 검사 이미지가 회전되어 있을 때 반시계 방향으로 회전시켜 맞추는 기능입니다.',
          zhCN:'Font Path用于指定在Open eVision Studio中建立的Font File位置。Rotating Angle用于在检测图像发生旋转时,以逆时针方向旋转以进行对位。',
          zhTW:'Font Path用於指定在Open eVision Studio中建立的Font File位置。Rotating Angle用於在檢測影像發生旋轉時,以逆時針方向旋轉以進行對位。',
          ja:'Font PathはOpen eVision Studioで作成したFont Fileの場所を指定します。Rotating Angleは検査画像が回転している場合に反時計回りに回転させて合わせる機能です。'
        }},
        {img:cmImg('I','nbga',48),tx:{
          vi:'Retry — nếu không phát hiện giá trị trong ngưỡng, Retry Threshold Range sẽ dịch chuyển theo Retry Threshold Step để thử kiểm tra lại. Nếu Step quá nhỏ so với Range, số lần thử lại tăng và có thể xảy ra Timeout.',
          en:'Retry — if no value is detected within the threshold, the Retry Threshold Range shifts by the Retry Threshold Step to re-attempt inspection. If the step is too small relative to the range, retries increase and a timeout may occur.',
          ko:'Retry — 지정된 Threshold 내에서 값이 검출되지 않으면, Retry Threshold Step만큼 Retry Threshold Range를 이동시켜 재검사를 시도합니다. Step이 Range에 비해 너무 작으면 재검사 횟수가 늘어나 Timeout이 발생할 수 있습니다.',
          zhCN:'Retry——若在指定Threshold内未检测到数值,则以Retry Threshold Step移动Retry Threshold Range重新尝试检测。若Step相对Range过小,重试次数增多,可能导致Timeout。',
          zhTW:'Retry——若在指定Threshold內未檢測到數值,則以Retry Threshold Step移動Retry Threshold Range重新嘗試檢測。若Step相對Range過小,重試次數增多,可能導致Timeout。',
          ja:'Retry——指定したThreshold内で値が検出されない場合、Retry Threshold StepぶんRetry Threshold Rangeを移動して再検査を試みます。StepがRangeに対して小さすぎると再検査回数が増え、Timeoutが発生する恐れがあります。'
        }},
        {img:cmImg('I','nbga',49),tx:{
          vi:'Software Inspection Parameter — phần này đề cập đến Illum Control, Align, 2D Barcode & OCR, 2D Inspection, 3D Inspection và LTS Target.',
          en:'Software Inspection Parameter — this section covers Illum Control, Align, 2D Barcode & OCR, 2D Inspection, 3D Inspection, and LTS Target.',
          ko:'Software Inspection Parameter — Illum Control, Align, 2D Barcode & OCR, 2D Inspection, 3D Inspection, LTS Target를 다룹니다.',
          zhCN:'Software Inspection Parameter——本节介绍Illum Control、Align、2D Barcode & OCR、2D Inspection、3D Inspection、LTS Target。',
          zhTW:'Software Inspection Parameter——本節介紹Illum Control、Align、2D Barcode & OCR、2D Inspection、3D Inspection、LTS Target。',
          ja:'Software Inspection Parameter——本節ではIllum Control、Align、2D Barcode & OCR、2D Inspection、3D Inspection、LTS Targetを扱います。'
        }},
        {img:cmImg('I','nbga',50),tx:{
          vi:'2D Inspection — Missing (1): kiểm tra xem Bump có tồn tại trong vùng tìm kiếm hay không. Nếu số Pixel phát hiện thấp hơn Spec (VD dưới 20px), Bump được xác định là Missing.',
          en:'2D Inspection — Missing (1): checks whether a bump exists within the search area. If the detected pixel count is below spec (e.g. fewer than 20px), the bump is judged Missing.',
          ko:'2D Inspection — Missing(1): 탐색 영역 내에 Bump가 존재하는지 확인합니다. 검출된 Pixel 수가 기준치(예: 20px 미만)에 미달하면 \'Missing\'으로 판정합니다.',
          zhCN:'2D Inspection——Missing(1):检查搜索区域内是否存在Bump。若检测到的Pixel数低于基准值(如低于20px),则判定为\'Missing\'。',
          zhTW:'2D Inspection——Missing(1):檢查搜尋區域內是否存在Bump。若檢測到的Pixel數低於基準值(如低於20px),則判定為\'Missing\'。',
          ja:'2D Inspection——Missing(1):探索領域内にBumpが存在するか確認します。検出されたPixel数が基準値(例:20px未満)に満たない場合、\'Missing\'と判定します。'
        }},
        {img:cmImg('I','nbga',51),tx:{
          vi:'Missing (2) — Reverse Threshold đảo ngược Threshold khi Bump hiện tối dưới ánh sáng đã chọn. Search Size đặt phạm vi Pixel quanh tâm Bump đã Align dùng để phát hiện — kết quả dưới Spec trong vùng đó được xác định là Missing.',
          en:'Missing (2) — Reverse Threshold inverts the threshold when the bump appears dark under the chosen lighting. Search Size sets the pixel range around the aligned bump center used for detection — a below-spec result in that area is judged Missing.',
          ko:'Missing(2) — Reverse Threshold는 조명 설정상 Bump가 어둡게 나타날 때 임계값을 반전시켜 사용합니다. Search Size는 Alignment로 결정된 Bump 중심 기준 탐색 Pixel 범위이며, 이 영역의 검출값이 기준 미달이면 \'Missing\'으로 처리됩니다.',
          zhCN:'Missing(2)——Reverse Threshold用于当Bump在所选照明下显示为暗色时,反转阈值使用。Search Size是以Alignment确定的Bump中心为基准的检测像素范围,若该区域检测值低于基准则判定为\'Missing\'。',
          zhTW:'Missing(2)——Reverse Threshold用於當Bump在所選照明下顯示為暗色時,反轉閾值使用。Search Size是以Alignment確定的Bump中心為基準的檢測像素範圍,若該區域檢測值低於基準則判定為\'Missing\'。',
          ja:'Missing(2)——Reverse Thresholdは照明設定によりBumpが暗く映る場合に閾値を反転させて使用します。Search SizeはAlignmentで決定されたBump中心を基準とする検出Pixel範囲で、この領域の検出値が基準未満であれば\'Missing\'と判定されます。'
        }},
        {img:cmImg('I','nbga',52),tx:{
          vi:'Kiểm tra Diameter đo đường kính Bump bằng ba nhóm Parameter — Edge Detect, Point Filter và Result Correction — dựa trên ảnh chiếu sáng Oblique.',
          en:'Diameter inspection measures bump diameter using three parameter groups — Edge Detect, Point Filter, and Result Correction — based on obliquely-lit images.',
          ko:'Diameter 검사는 Oblique 조명 이미지를 기반으로 Edge Detect·Point Filter·Result Correction 세 가지 Parameter로 Bump 직경을 측정합니다.',
          zhCN:'Diameter检测基于Oblique照明图像,以Edge Detect、Point Filter、Result Correction三种参数测量Bump直径。',
          zhTW:'Diameter檢測基於Oblique照明影像,以Edge Detect、Point Filter、Result Correction三種參數測量Bump直徑。',
          ja:'Diameter検査はOblique照明画像を基に、Edge Detect・Point Filter・Result Correctionの3種類のParameterでBump直径を測定します。'
        }},
        {img:cmImg('I','nbga',53),tx:{
          vi:'Edge Outer Length đặt phạm vi tìm kiếm Diameter Edge tính từ tâm Bump ra ngoài (In-to-Out hoặc Out-to-In). Không được chạm vào Bump lân cận, nếu không có thể phát hiện sai Edge.',
          en:'Edge Outer Length sets how far out from the bump center the Diameter Edge search extends (In-to-Out or Out-to-In). It must not reach into a neighboring bump, or the wrong edge may be detected.',
          ko:'Edge Outer Length는 Bump 중심을 기준으로 Diameter Edge를 탐색할 거리를 설정합니다(In-to-Out 또는 Out-to-In 방향). 주변 Bump 영역을 침범하면 다른 Bump의 Edge를 잘못 검출할 위험이 있습니다.',
          zhCN:'Edge Outer Length设置以Bump中心为基准搜索Diameter Edge的距离(In-to-Out或Out-to-In方向)。若侵入周围Bump区域,可能误检测到其他Bump的Edge。',
          zhTW:'Edge Outer Length設定以Bump中心為基準搜尋Diameter Edge的距離(In-to-Out或Out-to-In方向)。若侵入周圍Bump區域,可能誤檢測到其他Bump的Edge。',
          ja:'Edge Outer LengthはBump中心を基準にDiameter Edgeを探索する距離を設定します(In-to-OutまたはOut-to-In方向)。周囲のBump領域を侵すと、他のBumpのEdgeを誤検出する恐れがあります。'
        }},
        {img:cmImg('I','nbga',54),tx:{
          vi:'Edge Count & Direction — số điểm lấy mẫu để tìm Edge của Bump (thường là 24, tức 360°/15°, để cân bằng tốc độ/độ chính xác) và hướng quét (Out-to-In hoặc In-to-Out).',
          en:'Edge Count & Direction — the number of points sampled to find the bump edge (commonly 24, i.e. 360°/15°, for a good speed/accuracy balance) and the scan direction (Out-to-In or In-to-Out).',
          ko:'Edge Count & Direction — Bump Edge를 찾기 위해 샘플링할 점의 개수(속도·정확도를 고려해 보통 360°를 15°씩 나눈 24개 사용)와 Scan 방향(Out-to-In 또는 In-to-Out)을 설정합니다.',
          zhCN:'Edge Count & Direction——设置搜索Bump Edge所需的采样点数量(考虑速度与精度,通常使用360°除以15°得到的24个点)以及Scan方向(Out-to-In或In-to-Out)。',
          zhTW:'Edge Count & Direction——設定搜尋Bump Edge所需的取樣點數量(考量速度與精度,通常使用360°除以15°得到的24個點)以及Scan方向(Out-to-In或In-to-Out)。',
          ja:'Edge Count & Direction——Bump Edgeを探索するためのサンプリング点数(速度と精度を考慮し、通常は360°を15°ずつに分けた24点を使用)とScan方向(Out-to-InまたはIn-to-Out)を設定します。'
        }},
        {img:cmImg('I','nbga',55),tx:{
          vi:'Intonation — Rising chọn Edge tại điểm tăng độ sáng dốc nhất tìm thấy trong quét Out-to-In; Falling chọn tại điểm giảm dốc nhất tìm thấy trong quét In-to-Out.',
          en:'Intonation — Rising selects the edge at the steepest brightness increase found in an Out-to-In scan; Falling selects it at the steepest decrease found in an In-to-Out scan.',
          ko:'Intonation — Rising는 Out-to-In Scan에서 밝기 변화(미분값)가 가장 크게 증가하는 지점을, Falling은 In-to-Out Scan에서 가장 크게 감소하는 지점을 Edge로 선택합니다.',
          zhCN:'Intonation——Rising在Out-to-In Scan中选取亮度变化(微分值)增幅最大的点作为Edge,Falling则在In-to-Out Scan中选取减幅最大的点。',
          zhTW:'Intonation——Rising在Out-to-In Scan中選取亮度變化(微分值)增幅最大的點作為Edge,Falling則在In-to-Out Scan中選取減幅最大的點。',
          ja:'Intonation——RisingはOut-to-In Scanで輝度変化(微分値)が最も大きく増加する点を、FallingはIn-to-Out Scanで最も大きく減少する点をEdgeとして選択します。'
        }},
        {img:cmImg('I','nbga',56),tx:{
          vi:'Threshold (Diameter Edge Detect) — độ dốc thay đổi độ sáng tối thiểu được tính là Edge. Giá trị thấp (VD 4) phát hiện nhiều điểm Edge hơn; giá trị cao (VD 42) phát hiện ít hơn. Đặt cao hơn mức độ dốc Noise tìm thấy trong vùng SR.',
          en:'Threshold (Diameter Edge Detect) — the minimum brightness-change gradient counted as an edge. A low value (e.g. 4) detects more edge points; a high value (e.g. 42) detects fewer. Set it above the noise-level gradient found in the SR area.',
          ko:'Threshold(Diameter Edge Detect) — Edge로 인정할 최소 밝기 변화 기울기입니다. 값이 낮으면(예: 4) 더 많은 Edge Point가 검출되고, 값이 높으면(예: 42) 더 적게 검출됩니다. SR 영역의 Noise 수준 기울기보다 크게 설정합니다.',
          zhCN:'Threshold(Diameter Edge Detect)——判定为Edge所需的最小亮度变化梯度。数值较低时(如4)检测到的Edge Point较多,数值较高时(如42)检测到的较少。应设置为高于SR区域Noise水平的梯度值。',
          zhTW:'Threshold(Diameter Edge Detect)——判定為Edge所需的最小亮度變化梯度。數值較低時(如4)檢測到的Edge Point較多,數值較高時(如42)檢測到的較少。應設定為高於SR區域Noise水準的梯度值。',
          ja:'Threshold(Diameter Edge Detect)——Edgeと認識する最小の輝度変化勾配です。値が低いと(例:4)検出されるEdge Pointが多くなり、値が高いと(例:42)少なくなります。SR領域のNoiseレベルの勾配より大きく設定します。'
        }},
        {img:cmImg('I','nbga',57),tx:{
          vi:'Distance Noise Filter — sắp xếp các điểm Edge của Diameter theo độ dài từ tâm, sau đó loại bỏ các giá trị ngoại lai độ dài thấp nhất và cao nhất, chỉ giữ lại các điểm còn lại để tính toán.',
          en:'Distance Noise Filter — sorts the diameter\'s edge points by length from the center, then discards the lowest and highest length outliers, keeping only the remaining points for the calculation.',
          ko:'Distance Noise Filter — Diameter의 Edge Point를 중심으로부터의 길이 순으로 정렬한 뒤, 가장 짧거나 가장 긴 이상치를 제거하고 남은 Point만 계산에 사용합니다.',
          zhCN:'Distance Noise Filter——将Diameter的Edge Point按距中心的长度排序,去除长度最短与最长的离群点,仅使用剩余的点进行计算。',
          zhTW:'Distance Noise Filter——將Diameter的Edge Point按距中心的長度排序,去除長度最短與最長的離群點,僅使用剩餘的點進行計算。',
          ja:'Distance Noise Filter——Diameterの Edge Pointを中心からの長さ順に並べ替え、最も短い・長い外れ値を除去し、残ったPointのみを計算に使用します。'
        }},
        {img:cmImg('I','nbga',58),tx:{
          vi:'Stdev Max — lọc các điểm Edge có độ dài "Edge-tới-tâm" nằm ngoài ± Stdev so với trung bình, để các điểm ngoại lai không được dùng trong việc khớp Diameter/Ellipse.',
          en:'Stdev Max — filters out edge points whose "edge-to-center" length falls outside ± Stdev of the mean, so outlier points aren\'t used in the diameter/ellipse fit.',
          ko:'Stdev Max — Edge Point의 "Edge→중심" 길이가 평균의 ±Stdev 범위를 벗어나면 필터링합니다. 이상치 Point가 Diameter·Ellipse 계산에 포함되지 않도록 합니다.',
          zhCN:'Stdev Max——若Edge Point的"Edge→中心"长度超出平均值的±Stdev范围,则予以过滤,避免离群点被计入Diameter、Ellipse的计算。',
          zhTW:'Stdev Max——若Edge Point的「Edge→中心」長度超出平均值的±Stdev範圍,則予以過濾,避免離群點被計入Diameter、Ellipse的計算。',
          ja:'Stdev Max——Edge Pointの「Edge→中心」の長さが平均の±Stdev範囲を外れる場合はフィルタリングし、外れ値がDiameter・Ellipseの計算に含まれないようにします。'
        }},
        {img:cmImg('I','nbga',59),tx:{
          vi:'First & Second Setting — ngăn kết quả sai khi xuất hiện Bump nhỏ hoặc lớn bất thường. Chỉ dùng Coaxial Illumination kiểm tra đúng Small Bump nhưng có thể đo thiếu Large Bump (nguy cơ bỏ sót); thêm Sub-Coaxial Illumination kiểm tra đúng Large Bump nhưng có thể đo dư Small Bump (nguy cơ bỏ sót) — nên cả hai được kiểm tra cùng nhau.',
          en:'First & Second Setting — prevents wrong results when abnormally small or large bumps appear. Coaxial Illumination alone inspects Small Bumps correctly but can undersize Large Bumps (risk of missing them); adding Sub-Coaxial Illumination inspects Large Bumps correctly but can oversize Small Bumps (risk of missing them) — so both are checked together.',
          ko:'First & Second Setting — 비정상적으로 작거나 큰 Bump가 발생했을 때 오판정을 막습니다. Coaxial Illumination만 쓰면 Small Bump는 정상 검사되지만 Large Bump는 실제보다 작게 측정될 수 있고(미검출 위험), Sub-Coaxial Illumination을 추가하면 Large Bump는 정상 검사되지만 Small Bump가 실제보다 크게 측정될 수 있어(미검출 위험) 두 조건을 함께 확인합니다.',
          zhCN:'First & Second Setting——防止出现异常小或异常大的Bump时产生误判。仅使用Coaxial Illumination时Small Bump检测正常,但Large Bump可能测得比实际小(存在漏检风险);加入Sub-Coaxial Illumination后Large Bump检测正常,但Small Bump可能测得比实际大(存在漏检风险),因此需同时确认两种条件。',
          zhTW:'First & Second Setting——防止出現異常小或異常大的Bump時產生誤判。僅使用Coaxial Illumination時Small Bump檢測正常,但Large Bump可能測得比實際小(存在漏檢風險);加入Sub-Coaxial Illumination後Large Bump檢測正常,但Small Bump可能測得比實際大(存在漏檢風險),因此需同時確認兩種條件。',
          ja:'First & Second Setting——異常に小さい、または大きいBumpが発生した際の誤判定を防ぎます。Coaxial Illuminationのみだと Small Bumpは正常に検査されますが、Large Bumpは実際より小さく測定される恐れ(未検出リスク)があり、Sub-Coaxial Illuminationを加えるとLarge Bumpは正常ですがSmall Bumpが実際より大きく測定される恐れ(未検出リスク)があるため、両方を併用して確認します。'
        }},
        {img:cmImg('I','nbga',60),tx:{
          vi:'Áp dụng First/Second cho hai ảnh khác nhau (chỉ Oblique so với Oblique + Coaxial) cho kết quả Diameter khác nhau — Diameter đọc lớn hơn khi thêm ánh sáng Coaxial.',
          en:'Applying First/Second to two different images (Oblique only vs. Oblique + Coaxial) gives different diameter results — the diameter reads larger when coaxial light is added.',
          ko:'First/Second를 서로 다른 두 이미지(Oblique 단독 vs. Oblique+Coaxial)에 적용하면 Diameter 결과가 달라집니다 — Coaxial 조명을 추가하면 Diameter가 더 크게 측정됩니다.',
          zhCN:'将First/Second应用于两种不同图像(仅Oblique vs. Oblique+Coaxial)时,Diameter结果会不同——加入Coaxial照明后Diameter测得更大。',
          zhTW:'將First/Second套用於兩種不同影像(僅Oblique vs. Oblique+Coaxial)時,Diameter結果會不同——加入Coaxial照明後Diameter測得更大。',
          ja:'First/Secondを2種類の異なる画像(Obliqueのみ vs. Oblique+Coaxial)に適用すると、Diameter結果が異なります——Coaxial照明を加えるとDiameterはより大きく測定されます。'
        }},
        {img:cmImg('I','nbga',61),tx:{
          vi:'Ví dụ — với cùng một Bump, First Parameter (chỉ Coaxial) cho 31.124µm trong khi Second Parameter (Coaxial + Sub-Coaxial) cho 60.452µm.',
          en:'Example — for the same bump, the First Parameter (Coaxial only) gives 31.124µm while the Second Parameter (Coaxial + Sub-Coaxial) gives 60.452µm.',
          ko:'예시 — 동일한 Bump에서 First Parameter(Coaxial 단독)는 31.124µm, Second Parameter(Coaxial+Sub-Coaxial)는 60.452µm로 측정됩니다.',
          zhCN:'示例——对同一个Bump,First Parameter(仅Coaxial)测得31.124µm,Second Parameter(Coaxial+Sub-Coaxial)测得60.452µm。',
          zhTW:'範例——對同一個Bump,First Parameter(僅Coaxial)測得31.124µm,Second Parameter(Coaxial+Sub-Coaxial)測得60.452µm。',
          ja:'例——同一のBumpでFirst Parameter(Coaxialのみ)は31.124µm、Second Parameter(Coaxial+Sub-Coaxial)は60.452µmと測定されます。'
        }},
        {img:cmImg('I','nbga',62),tx:{
          vi:'Để kết hợp kết quả First/Second, các giá trị của First Parameter được sắp xếp theo kích thước và Median Value của chúng được dùng làm chuẩn cho No Check Range. (Dùng Median thay vì trung bình để vài giá trị đọc sai không làm lệch chuẩn.)',
          en:'To combine the First/Second results, the First Parameter\'s values are sorted by size and their Median Value is used as the reference for the No Check Range. (A median, not an average, is used so a few bad readings don\'t skew the reference.)',
          ko:'First/Second 결과를 조합하기 위해, First Parameter 결과값을 크기순으로 정렬하고 그 Median Value를 No Check Range의 기준으로 사용합니다. (평균이 아닌 중앙값을 쓰는 이유는 이상값이 섞여도 기준이 왜곡되지 않도록 하기 위함)',
          zhCN:'为整合First/Second结果,将First Parameter的结果值按大小排序,并以其Median Value作为No Check Range的基准。(不使用平均值而使用中位数,是为了避免异常值使基准产生偏差)',
          zhTW:'為整合First/Second結果,將First Parameter的結果值按大小排序,並以其Median Value作為No Check Range的基準。(不使用平均值而使用中位數,是為了避免異常值使基準產生偏差)',
          ja:'First/Secondの結果を組み合わせるため、First Parameterの結果値をサイズ順に並べ、そのMedian ValueをNo Check Rangeの基準として使用します。(平均ではなく中央値を使うのは、異常値が混ざっても基準が歪まないようにするためです)'
        }},
        {img:cmImg('I','nbga',63),tx:{
          vi:'Logic chọn kết quả cuối cùng — nếu chỉ một trong First/Second nằm trong No Check Range, giá trị nằm ngoài được dùng; nếu cả hai nằm trong, dùng giá trị Second; nếu cả hai nằm ngoài, dùng giá trị xa Median Value nhất.',
          en:'Final-result selection logic — if only one of First/Second falls inside the No Check Range, the one outside it is used; if both fall inside, the Second value is used; if both fall outside, whichever is farthest from the Median Value is used.',
          ko:'최종 결과 선택 로직 — First/Second 중 하나만 No Check Range 안에 있으면 범위 밖의 값을 사용, 둘 다 범위 안이면 Second 값을 사용, 둘 다 범위 밖이면 Median Value에서 더 먼 값을 최종 결과로 사용합니다.',
          zhCN:'最终结果选择逻辑——若First/Second中只有一个落在No Check Range内,则使用范围外的值;若两者都在范围内,则使用Second值;若两者都在范围外,则使用离Median Value较远的值作为最终结果。',
          zhTW:'最終結果選擇邏輯——若First/Second中只有一個落在No Check Range內,則使用範圍外的值;若兩者都在範圍內,則使用Second值;若兩者都在範圍外,則使用離Median Value較遠的值作為最終結果。',
          ja:'最終結果選択ロジック——First/Secondのうち一方だけがNo Check Range内であれば範囲外の値を使用し、両方とも範囲内であればSecondの値を使用、両方とも範囲外であればMedian Valueからより遠い値を最終結果として使用します。'
        }},
        {img:cmImg('I','nbga',64),tx:{
          vi:'Center Distance — kiểm tra khoảng cách giữa tâm kiểm tra (VD Align Center) và tâm Ellipse tìm được qua phát hiện Edge. Nếu vượt quá giá trị Center Distance (thường bằng nửa Diameter Spec), kết quả Diameter bị coi là không đáng tin và đặt về 0.',
          en:'Center Distance — checks the gap between the inspection center (e.g. Align Center) and the ellipse center found by edge detection. If it exceeds the Center Distance value (usually half the Diameter Spec), the Diameter result is treated as unreliable and set to 0.',
          ko:'Center Distance — 검사 기준 Center Point(예: Align Center)와 Edge Detection으로 찾은 Ellipse Center 사이의 거리를 확인합니다. Center Distance 값(보통 Diameter Spec의 절반)을 초과하면 Diameter 결과를 신뢰할 수 없다고 보고 0으로 처리합니다.',
          zhCN:'Center Distance——检查检测基准Center Point(如Align Center)与Edge Detection所得Ellipse Center之间的距离。若超过Center Distance值(通常为Diameter Spec的一半),则判定Diameter结果不可靠并处理为0。',
          zhTW:'Center Distance——檢查檢測基準Center Point(如Align Center)與Edge Detection所得Ellipse Center之間的距離。若超過Center Distance值(通常為Diameter Spec的一半),則判定Diameter結果不可靠並處理為0。',
          ja:'Center Distance——検査基準のCenter Point(例:Align Center)とEdge Detectionで求めたEllipse Centerとの距離を確認します。Center Distance値(通常Diameter Specの半分)を超えるとDiameter結果は信頼できないと判断し0として処理します。'
        }},
        {img:cmImg('I','nbga',65),tx:{
          vi:'Bridge — phát hiện hai hoặc nhiều Bump dính liền nhau. Select Image chọn Frame; đặt Threshold sao cho hình dạng Bump vẫn hiện rõ trong khi các điểm Bridge hiện ở vùng tối hơn. Spec thường là Bump Diameter Spec + 20µm (Use Max).',
          en:'Bridge — detects two or more bumps fused together. Select Image picks the frame; set Threshold so the bump shape stays visible while showing bridge points in darker areas. The spec is typically the Bump Diameter Spec + 20µm (Use Max).',
          ko:'Bridge — 두 개 이상의 Bump가 서로 붙어있는 상태를 검출합니다. Select Image로 사용할 Frame을 지정하고, Bump 형상은 유지하면서 어두운 영역의 연결 지점이 보이도록 Threshold를 설정합니다. Spec은 보통 Bump Diameter Spec + 20µm(Use Max)를 사용합니다.',
          zhCN:'Bridge——检测两个以上Bump相连的情况。以Select Image指定所用Frame,设置Threshold使Bump形状保持可见的同时显示较暗区域的连接点。规格通常使用Bump Diameter Spec + 20µm(Use Max)。',
          zhTW:'Bridge——檢測兩個以上Bump相連的情況。以Select Image指定所用Frame,設定Threshold使Bump形狀保持可見的同時顯示較暗區域的連接點。規格通常使用Bump Diameter Spec + 20µm(Use Max)。',
          ja:'Bridge——2つ以上のBumpが繋がっている状態を検出します。Select Imageで使用するFrameを指定し、Bump形状を保ちつつ暗い領域の接続点が見えるようThresholdを設定します。Specは通常Bump Diameter Spec + 20µm(Use Max)を使用します。'
        }},
        {img:cmImg('I','nbga',66),tx:{
          vi:'Bridge Minimum/Maximum Blob Size — đặt phạm vi kích thước Pixel được tính là Blob Bridge. Vì kích thước Bridge không thể dự đoán trước, phạm vi này cần rộng rãi.',
          en:'Bridge Minimum/Maximum Blob Size — sets the pixel-size range counted as a bridge blob. Since a bridge\'s size can\'t be predicted in advance, this range must be generous.',
          ko:'Bridge Minimum/Maximum Blob Size — Bridge Blob로 인정할 Pixel 크기 범위를 설정합니다. Bridge의 크기는 미리 예측할 수 없으므로 충분히 넓은 범위로 설정해야 합니다.',
          zhCN:'Bridge Minimum/Maximum Blob Size——设置被判定为Bridge Blob的Pixel尺寸范围。由于Bridge的大小无法预先预测,该范围须设置得足够宽。',
          zhTW:'Bridge Minimum/Maximum Blob Size——設定被判定為Bridge Blob的Pixel尺寸範圍。由於Bridge的大小無法預先預測,該範圍須設定得足夠寬。',
          ja:'Bridge Minimum/Maximum Blob Size——Bridge Blobと認識するPixelサイズ範囲を設定します。Bridgeのサイズは事前に予測できないため、十分に広い範囲で設定する必要があります。'
        }},
        {img:cmImg('I','nbga',67),tx:{
          vi:'SC (Scratch) — Bump bị trầy hiện cường độ sáng hơn Bump bình thường. Đặt Threshold (dùng ảnh Coaxial) sao cho Bump bình thường vẫn không hiện trong khi vùng trầy xước hiện rõ, và đặt Search Size để không lấn sang Bump lân cận.',
          en:'SC (Scratch) — a scratched bump shows brighter intensity than a normal bump. Set Threshold (using a Coaxial image) so normal bumps stay invisible while the scratched area appears, and set Search Size so it doesn\'t encroach on neighboring bumps.',
          ko:'SC(Scratch) — 스크래치가 있는 Bump는 정상 Bump보다 밝게 Intensity가 나타납니다. Coaxial 이미지 기준으로 정상 Bump는 보이지 않고 스크래치 영역만 보이도록 Threshold를 설정하며, 주변 Bump를 침범하지 않도록 Search Size를 설정합니다.',
          zhCN:'SC(Scratch)——有划痕的Bump其Intensity会比正常Bump更亮。以Coaxial图像为基准设置Threshold,使正常Bump不可见而只显示划痕区域,并设置Search Size以避免侵入周围的Bump。',
          zhTW:'SC(Scratch)——有刮痕的Bump其Intensity會比正常Bump更亮。以Coaxial影像為基準設定Threshold,使正常Bump不可見而只顯示刮痕區域,並設定Search Size以避免侵入周圍的Bump。',
          ja:'SC(Scratch)——傷のあるBumpは正常なBumpより明るいIntensityで表示されます。Coaxial画像を基準に正常なBumpは見えず傷部分だけが見えるようThresholdを設定し、周囲のBumpを侵さないようSearch Sizeを設定します。'
        }},
        {img:cmImg('I','nbga',68),tx:{
          vi:'So với Bump bình thường, Bump SC (trầy xước) có bề mặt mịn hơn nên phản xạ sáng hơn dưới cùng ánh sáng — điều chỉnh Threshold để lộ độ sáng đó là cách xác định vết trầy.',
          en:'Compared to a normal bump, an SC (scratch) bump has a smoother surface and so reflects brighter under the same light — adjusting Threshold to reveal that brightness is how a scratch is judged.',
          ko:'정상 Bump보다 SC(Scratch) Bump는 표면이 매끄러워 동일한 조명에서도 더 밝게 반사됩니다. 이 밝기 차이가 드러나도록 Threshold를 조정해 스크래치 여부를 판정합니다.',
          zhCN:'与正常Bump相比,SC(Scratch)Bump表面更光滑,即使在相同照明下也会反射得更亮。通过调整Threshold使这种亮度差异显现出来,以此判定划痕。',
          zhTW:'與正常Bump相比,SC(Scratch)Bump表面更光滑,即使在相同照明下也會反射得更亮。透過調整Threshold使這種亮度差異顯現出來,以此判定刮痕。',
          ja:'正常なBumpと比べSC(Scratch)Bumpは表面が滑らかで、同じ照明でもより明るく反射します。この明るさの違いが現れるようThresholdを調整して傷の有無を判定します。'
        }},
        {img:cmImg('I','nbga',69),tx:{
          vi:'FM (Foreign Material) — kiểm tra dị vật trong vùng SR của khu vực C4, dùng ảnh kết hợp ánh sáng Coaxial và Oblique. Đặt Threshold để phân biệt Bump với dị vật.',
          en:'FM (Foreign Material) — inspects for foreign matter in the SR area of the C4 zone, using an image combining coaxial and oblique light. Set Threshold to distinguish bumps from foreign matter.',
          ko:'FM(Foreign Material) — C4 영역 SR 부분의 이물질을 검사합니다. Coaxial과 Oblique 조명을 결합한 이미지를 사용하며, Bump와 이물질을 구분할 수 있도록 Threshold를 설정합니다.',
          zhCN:'FM(Foreign Material)——检查C4区域SR部分的异物。使用结合Coaxial与Oblique照明的图像,并设置Threshold以区分Bump与异物。',
          zhTW:'FM(Foreign Material)——檢查C4區域SR部分的異物。使用結合Coaxial與Oblique照明的影像,並設定Threshold以區分Bump與異物。',
          ja:'FM(Foreign Material)——C4領域SR部分の異物を検査します。CoaxialとOblique照明を組み合わせた画像を使用し、BumpとForeign Materialを区別できるようThresholdを設定します。'
        }},
        {img:cmImg('I','nbga',70),tx:{
          vi:'Bump Ignore Size — loại vùng của chính Bump khỏi kiểm tra FM. Giá trị quá lớn có nguy cơ bỏ sót dị vật gần Bump, nên giữ trong phạm vi Bump Diameter Spec.',
          en:'Bump Ignore Size — excludes the bump\'s own area from FM inspection. Too large a value risks missing foreign matter close to the bump, so keep it within the Bump Diameter Spec.',
          ko:'Bump Ignore Size — FM 검사에서 Bump 자체 영역을 제외하는 값입니다. 값이 너무 크면 Bump 근처 이물질을 놓칠 위험이 있으므로 Bump Diameter Spec 범위 내에서 설정해야 합니다.',
          zhCN:'Bump Ignore Size——在FM检测中排除Bump本身区域的数值。数值过大会有漏检Bump附近异物的风险,须设置在Bump Diameter Spec范围内。',
          zhTW:'Bump Ignore Size——在FM檢測中排除Bump本身區域的數值。數值過大會有漏檢Bump附近異物的風險,須設定在Bump Diameter Spec範圍內。',
          ja:'Bump Ignore Size——FM検査からBump自体の領域を除外する値です。値が大きすぎるとBump近傍の異物を見逃す恐れがあるため、Bump Diameter Spec範囲内で設定する必要があります。'
        }},
        {img:cmImg('I','nbga',71),tx:{
          vi:'FM Minimum/Maximum Blob Size — đặt phạm vi kích thước Blob được xác định là dị vật. VD ở 5.6µm/pixel, đặt tối thiểu 6px sẽ loại một hạt kích thước 5px khỏi phát hiện.',
          en:'FM Minimum/Maximum Blob Size — sets the blob-size range judged as foreign matter. For example at 5.6µm/pixel, setting the minimum to 6px excludes a 5px-sized particle from detection.',
          ko:'FM Minimum/Maximum Blob Size — 이물질로 판정할 Blob 크기 범위입니다. 예를 들어 1 Pixel = 5.6µm일 때 최소 크기를 6 Pixel로 설정하면 5 Pixel 크기의 이물은 검출 대상에서 제외됩니다.',
          zhCN:'FM Minimum/Maximum Blob Size——判定为异物的Blob尺寸范围。例如1 Pixel = 5.6µm时,若将最小尺寸设为6 Pixel,则5 Pixel大小的异物会被排除在检测对象之外。',
          zhTW:'FM Minimum/Maximum Blob Size——判定為異物的Blob尺寸範圍。例如1 Pixel = 5.6µm時,若將最小尺寸設為6 Pixel,則5 Pixel大小的異物會被排除在檢測對象之外。',
          ja:'FM Minimum/Maximum Blob Size——異物と判定するBlobサイズ範囲です。例えば1 Pixel = 5.6µmの場合、最小サイズを6 Pixelに設定すると5 Pixelサイズの異物は検出対象から除外されます。'
        }},
        {img:cmImg('I','nbga',72),tx:{
          vi:'Trình tự kiểm tra FM — vùng Ignore Bump Size bị loại khỏi ảnh đã Threshold, sau đó bất kỳ Blob nào lớn hơn giá trị Use Max trong ảnh còn lại được xác định là Foreign Material.',
          en:'FM inspection sequence — the Ignore Bump Size area is excluded from the thresholded image, then any blob larger than the Use Max value in the remaining image is judged Foreign Material.',
          ko:'FM 검사 순서 — Threshold 이미지에서 Ignore Bump Size 영역을 제외한 뒤, 남은 이미지에서 Use Max 값보다 큰 Blob을 Foreign Material로 판정합니다.',
          zhCN:'FM检测流程——从Threshold图像中排除Ignore Bump Size区域后,在剩余图像中将大于Use Max值的Blob判定为Foreign Material。',
          zhTW:'FM檢測流程——從Threshold影像中排除Ignore Bump Size區域後,在剩餘影像中將大於Use Max值的Blob判定為Foreign Material。',
          ja:'FM検査手順——Threshold画像からIgnore Bump Size領域を除外した後、残った画像でUse Max値より大きいBlobをForeign Materialと判定します。'
        }},
        {img:cmImg('I','nbga',73),tx:{
          vi:'Top Diameter (Flat Bump) — kiểm tra đường kính bề mặt trên của Flat Bump. Dùng cùng Parameter và phương pháp như kiểm tra Diameter, nhưng với ảnh chiếu sáng Coaxial thay thế.',
          en:'Top Diameter (Flat Bump) — inspects the top-surface diameter of a Flat Bump. Uses the same parameters and method as Diameter inspection, but with a Coaxial-Illumination image instead.',
          ko:'Top Diameter(Flat Bump) — Flat Bump의 상면 직경을 검사합니다. Parameter와 검사 방식은 Diameter 검사와 동일하지만, 사용하는 이미지는 Coaxial 조명 이미지입니다.',
          zhCN:'Top Diameter(Flat Bump)——检查Flat Bump的顶面直径。参数与检测方式与Diameter检测相同,但所使用的图像为Coaxial照明图像。',
          zhTW:'Top Diameter(Flat Bump)——檢查Flat Bump的頂面直徑。參數與檢測方式與Diameter檢測相同,但所使用的影像為Coaxial照明影像。',
          ja:'Top Diameter(Flat Bump)——Flat Bumpの上面直径を検査します。ParameterとInspection方式はDiameter検査と同じですが、使用する画像はCoaxial照明画像です。'
        }},
        {img:cmImg('I','nbga',74),tx:{
          vi:'Redundant — cho phép lỗi ở Bump ít quan trọng trong vùng C4 vẫn Pass như một ngoại lệ. Cần thiết lập thêm Redundant Gerber File trong Design Spec.',
          en:'Redundant — lets a defect on a low-importance bump in the C4 area still Pass as an exception. Requires a Redundant Gerber File to be additionally set in Design Spec.',
          ko:'Redundant — C4 영역에서 중요도가 낮은 Bump는 불량이 발생해도 예외적으로 Pass 처리합니다. Design Spec에 Redundant Gerber File을 추가로 설정해야 사용할 수 있습니다.',
          zhCN:'Redundant——对C4区域中重要度较低的Bump,即使发生不良也可例外判定为Pass。需在Design Spec中额外设置Redundant Gerber File方可使用。',
          zhTW:'Redundant——對C4區域中重要度較低的Bump,即使發生不良也可例外判定為Pass。需在Design Spec中額外設定Redundant Gerber File方可使用。',
          ja:'Redundant——C4領域内で重要度の低いBumpは不良が発生しても例外的にPass扱いとします。Design SpecにRedundant Gerber Fileを追加設定する必要があります。'
        }},
        {img:cmImg('I','nbga',75),tx:{
          vi:'Thiết lập Redundant — Select Die (thiết lập theo từng Die), Redundant Filtering (bật/tắt, áp dụng cho mọi Die), IgnoreRedundantToReject (bỏ qua xử lý Redundant khi Bump bình thường vốn đã Reject), và Copy All (sao chép thiết lập của Die này sang Die khác).',
          en:'Redundant settings — Select Die (per-die settings), Redundant Filtering (on/off, applied to all dies), IgnoreRedundantToReject (skip redundant handling when a normal bump would reject anyway), and Copy All (copy this die\'s settings to another die).',
          ko:'Redundant 설정 — Select Die(Die별 개별 설정), Redundant Filtering(사용 여부, 전체 Die에 공통 적용), IgnoreRedundantToReject(정상 Bump도 Reject 대상이면 Redundant 처리 생략), Copy All(현재 설정을 다른 Die에 복사).',
          zhCN:'Redundant设置——Select Die(按Die个别设置)、Redundant Filtering(是否使用,套用于所有Die)、IgnoreRedundantToReject(即使是正常Bump若为Reject对象则跳过Redundant处理)、Copy All(将目前设置复制到其他Die)。',
          zhTW:'Redundant設定——Select Die(按Die個別設定)、Redundant Filtering(是否使用,套用於所有Die)、IgnoreRedundantToReject(即使是正常Bump若為Reject對象則跳過Redundant處理)、Copy All(將目前設定複製到其他Die)。',
          ja:'Redundant設定——Select Die(Die別個別設定)、Redundant Filtering(使用有無、全Die共通適用)、IgnoreRedundantToReject(正常なBumpでもReject対象ならRedundant処理を省略)、Copy All(現在の設定を他のDieへコピー)。'
        }},
        {img:cmImg('I','nbga',76),tx:{
          vi:'Redundant (tiếp theo) — chọn hạng mục kiểm tra nào được xử lý Redundant (mục không chọn sẽ Reject bình thường); đặt Spec Reject Diameter Low/High áp dụng cho Redundant Bump; và chọn xét Reject theo từng hạng mục (Each) hay kết hợp giữa các hạng mục (Public).',
          en:'Redundant (continued) — choose which inspection items get Redundant handling (unselected items reject normally); set the Diameter Low/High reject spec applied to Redundant Bumps; and choose whether reject judgment is calculated per item (Each) or combined across items (Public).',
          ko:'Redundant(계속) — Redundant를 적용할 검사 항목을 선택(선택 안 하면 정상적으로 Reject 처리), Redundant Bump에 적용할 Diameter Low/High Reject 기준값 설정, Reject 판정을 항목별(Each)로 할지 통합(Public)으로 할지 선택합니다.',
          zhCN:'Redundant(续)——选择要套用Redundant的检测项目(未选择项目将正常判定Reject)、设置套用于Redundant Bump的Diameter Low/High Reject基准值、选择Reject判定是按项目个别计算(Each)还是合并计算(Public)。',
          zhTW:'Redundant(續)——選擇要套用Redundant的檢測項目(未選擇項目將正常判定Reject)、設定套用於Redundant Bump的Diameter Low/High Reject基準值、選擇Reject判定是按項目個別計算(Each)還是合併計算(Public)。',
          ja:'Redundant(続き)——Redundantを適用する検査項目を選択(未選択の項目は通常どおりReject判定)、Redundant Bumpに適用するDiameter Low/High Reject基準値を設定、Reject判定を項目ごと(Each)か合算(Public)かを選択します。'
        }},
        {img:cmImg('I','nbga',77),tx:{
          vi:'Quy tắc Reject Redundant — Reject nếu số lượng lỗi vượt Number hoặc Percent đã đặt. Redundant Reject Distance cũng Reject Unit nếu các lỗi Redundant Bump tập trung quá gần nhau, dù điều kiện Redundant vốn đã thỏa mãn.',
          en:'Redundant reject rule — reject if the defect count exceeds a set Number or Percent. Redundant Reject Distance also rejects the unit if redundant-bump defects cluster too closely together, even if the redundant condition was otherwise satisfied.',
          ko:'Redundant Reject 판정 방식 — 불량 개수가 설정한 Number 또는 Percent를 초과하면 Reject합니다. Redundant Reject Distance는 Redundant 조건을 만족해도 불량 Bump 간 거리가 설정값보다 가까우면 Reject 처리합니다.',
          zhCN:'Redundant Reject判定方式——若不良数量超过设定的Number或Percent,则判定为Reject。Redundant Reject Distance则是即使满足Redundant条件,若不良Bump之间的距离比设定值更近,仍会判定为Reject。',
          zhTW:'Redundant Reject判定方式——若不良數量超過設定的Number或Percent,則判定為Reject。Redundant Reject Distance則是即使滿足Redundant條件,若不良Bump之間的距離比設定值更近,仍會判定為Reject。',
          ja:'Redundant Reject判定方式——不良数が設定したNumberまたはPercentを超えるとRejectします。Redundant Reject Distanceは、Redundant条件を満たしていても不良Bump間の距離が設定値より近い場合にRejectとします。'
        }},
        {img:cmImg('I','nbga',78),tx:{
          vi:'Stain FM — phát hiện một loại dị vật khác, dạng vết bẩn, dùng bộ Parameter riêng (cùng mục đích với FM nhưng tính toán độc lập). Dùng ảnh tương đối tối (ánh sáng Coaxial + Quasi-Coaxial) và Reverse Threshold để đảo đen/trắng khi phát hiện.',
          en:'Stain FM — detects a different, stained type of foreign material, using its own separate parameter set (same purpose as FM but calculated independently). It uses a relatively dark image (coaxial + quasi-coaxial light) and Reverse Threshold to invert black/white for detection.',
          ko:'Stain FM — 일반 이물질과 다른 얼룩(Stain) 형태의 이물질을 검출하며, FM과 목적은 같지만 별도의 설정값으로 독립적으로 계산됩니다. 비교적 어두운 이미지(Coaxial+Quasi-Coaxial 조명)를 사용하며, Reverse Threshold로 흑백을 반전시켜 검출합니다.',
          zhCN:'Stain FM——检测与一般异物不同的污渍(Stain)型异物,目的与FM相同但使用独立的设置值单独计算。使用较暗的图像(Coaxial+Quasi-Coaxial照明),并以Reverse Threshold反转黑白以进行检测。',
          zhTW:'Stain FM——檢測與一般異物不同的污漬(Stain)型異物,目的與FM相同但使用獨立的設定值單獨計算。使用較暗的影像(Coaxial+Quasi-Coaxial照明),並以Reverse Threshold反轉黑白以進行檢測。',
          ja:'Stain FM——一般的な異物とは異なるシミ(Stain)状の異物を検出し、FMと目的は同じですが別の設定値で独立して計算します。比較的暗い画像(Coaxial+Quasi-Coaxial照明)を使用し、Reverse Thresholdで白黒を反転させて検出します。'
        }},
        {img:cmImg('I','nbga',79),tx:{
          vi:'Software Inspection Parameter — phần này đề cập đến Illum Control, Align, 2D Barcode & OCR, 2D Inspection, 3D Inspection và LTS Target.',
          en:'Software Inspection Parameter — this section covers Illum Control, Align, 2D Barcode & OCR, 2D Inspection, 3D Inspection, and LTS Target.',
          ko:'Software Inspection Parameter — Illum Control, Align, 2D Barcode & OCR, 2D Inspection, 3D Inspection, LTS Target를 다룹니다.',
          zhCN:'Software Inspection Parameter——本节介绍Illum Control、Align、2D Barcode & OCR、2D Inspection、3D Inspection、LTS Target。',
          zhTW:'Software Inspection Parameter——本節介紹Illum Control、Align、2D Barcode & OCR、2D Inspection、3D Inspection、LTS Target。',
          ja:'Software Inspection Parameter——本節ではIllum Control、Align、2D Barcode & OCR、2D Inspection、3D Inspection、LTS Targetを扱います。'
        }},
        {img:cmImg('I','nbga',80),tx:{
          vi:'3D Inspection — Image Display: một lần "Image Grab" trong 3D Vision trả về 8 Frame (hai ảnh 2D, một Frame 3D, ảnh GV Z-Map/Visibility-Map, ảnh GV Height, ảnh Z-Map, và ảnh Visibility-Map). Số ảnh 2D/3D phụ thuộc thiết lập Lighting Control; phần còn lại cố định. Ảnh Visibility/Z-Map được dựng từ giá trị thô Visibility (cường độ tín hiệu) và Z (chiều cao); mỗi phiên bản "GV" có áp dụng hiệu chỉnh.',
          en:'3D Inspection — Image Display: one "Image Grab" in 3D Vision returns 8 frames (two 2D images, a 3D frame, Z-Map/Visibility-Map GV images, a Height GV image, a Z-Map image, and a Visibility-Map image). The 2D/3D image counts depend on the Lighting Control setting; the rest are fixed. The Visibility/Z-Map images are built from raw Visibility (signal strength) and Z (height) values; each "GV" version has a correction applied.',
          ko:'3D Inspection — Image Display: 3D Vision에서 한 번 Image Grab하면 8장의 Frame이 생성됩니다(2D Image 2장, 3D Frame, Z Map·Visibility Map GV Image, Height GV Image, Z Map Image, Visibility Map Image). 2D·3D Image 장수는 Lighting Control 설정에 따라 달라지고 나머지는 고정입니다. Visibility·Z Map Image는 원본 Visibility(신호 세기)·Z(높이) 값으로 만들어지며, GV Image는 각각 보정값이 적용된 버전입니다.',
          zhCN:'3D Inspection——Image Display:在3D Vision中执行一次Image Grab会产生8张Frame(2张2D Image、1张3D Frame、Z Map与Visibility Map的GV Image、Height GV Image、Z Map Image、Visibility Map Image)。2D、3D Image的张数依Lighting Control设置而定,其余固定不变。Visibility、Z Map Image由原始Visibility(信号强度)、Z(高度)值生成,各GV Image则是套用了校正值的版本。',
          zhTW:'3D Inspection——Image Display:在3D Vision中執行一次Image Grab會產生8張Frame(2張2D Image、1張3D Frame、Z Map與Visibility Map的GV Image、Height GV Image、Z Map Image、Visibility Map Image)。2D、3D Image的張數依Lighting Control設定而定,其餘固定不變。Visibility、Z Map Image由原始Visibility(訊號強度)、Z(高度)值產生,各GV Image則是套用了校正值的版本。',
          ja:'3D Inspection——Image Display:3D Visionで1回Image Grabすると8枚のFrameが生成されます(2D Image 2枚、3D Frame、Z Map・Visibility MapのGV Image、Height GV Image、Z Map Image、Visibility Map Image)。2D・3D Imageの枚数はLighting Control設定によって変わり、残りは固定です。Visibility・Z Map Imageは元のVisibility(信号強度)・Z(高さ)値から作られ、各GV Imageは補正値を適用したバージョンです。'
        }},
        {img:cmImg('I','nbga',81),tx:{
          vi:'Tổng quan Parameter Bump — đặt vùng kiểm tra/tùy chọn Center Point; tùy chọn trọng số Visibility (chỉ New Algorithm) cho độ tin cậy Z của Pixel ngoài biên; bộ lọc theo phân vị Visibility; bộ lọc Top/Count loại N Pixel cao nhất rồi dùng số lượng đã đặt; bộ lọc phân vị Min/Max quanh Median; bộ lọc phạm vi ± quanh trung bình; và tính toán Weight Factor cho giá trị Z cuối cùng.',
          en:'Bump parameters overview — set the inspection area/Center Point option; a Visibility-weighting option (New Algorithm only) for outer-pixel Z reliability; a filter by Visibility percentile; a Top/Count filter that drops the highest N pixels then uses a set count; a Min/Max percentile filter around the median; a ± range filter around the mean; and a Weight Factor calculation for the final Z value.',
          ko:'Bump Parameter 개요 — 검사 영역·Center Point 옵션 설정, 외곽 Pixel의 Z값 신뢰도를 위한 Visibility 가중치 옵션(New Algorithm 전용), Visibility 백분위 기준 필터, 상위 N개 Pixel 제외 후 지정 개수만 사용하는 Top/Count 필터, 중앙값 기준 Min/Max % 필터, 평균 기준 ± 범위 필터, 최종 Z값 계산을 위한 Weight Factor로 구성됩니다.',
          zhCN:'Bump Parameter概述——设置检测区域·Center Point选项、用于外围Pixel Z值可靠性的Visibility加权选项(仅New Algorithm)、按Visibility百分位过滤、排除最高N个Pixel后仅使用指定数量的Top/Count过滤、以中位数为基准的Min/Max %过滤、以平均值为基准的±范围过滤,以及计算最终Z值的Weight Factor。',
          zhTW:'Bump Parameter概述——設定檢測區域·Center Point選項、用於外圍Pixel Z值可靠性的Visibility加權選項(僅New Algorithm)、按Visibility百分位過濾、排除最高N個Pixel後僅使用指定數量的Top/Count過濾、以中位數為基準的Min/Max %過濾、以平均值為基準的±範圍過濾,以及計算最終Z值的Weight Factor。',
          ja:'Bump Parameter概要——検査領域・Center Pointオプションの設定、外側PixelのZ値信頼性のためのVisibility重み付けオプション(New Algorithm専用)、Visibilityパーセンタイルによるフィルタ、上位N個のPixelを除外後に指定数のみ使用するTop/Countフィルタ、中央値基準のMin/Max %フィルタ、平均値基準の±範囲フィルタ、最終Z値算出のためのWeight Factorで構成されます。'
        }},
        {img:cmImg('I','nbga',82),tx:{
          vi:'Valid Radius Max — đặt tỷ lệ % của Bump Spec Radius được dùng để kiểm tra. Giá trị lớn hơn (VD 100% so với 80%) bao gồm nhiều diện tích Pixel của Bump hơn, tăng số Pixel sử dụng.',
          en:'Valid Radius Max — sets what percentage of the Bump Spec Radius is used for inspection. A larger value (e.g. 100% vs. 80%) includes more of the bump\'s pixel area, increasing the pixel count used.',
          ko:'Valid Radius Max — Bump Spec Radius 중 검사에 사용할 비율(%)을 설정합니다. 값이 클수록(예: 80%→100%) Bump Pixel 영역이 더 넓게 포함되어 사용되는 Pixel 수가 늘어납니다.',
          zhCN:'Valid Radius Max——设置Bump Spec Radius中用于检测的比例(%)。数值越大(如80%→100%),纳入的Bump Pixel区域越广,使用的Pixel数也随之增加。',
          zhTW:'Valid Radius Max——設定Bump Spec Radius中用於檢測的比例(%)。數值越大(如80%→100%),納入的Bump Pixel區域越廣,使用的Pixel數也隨之增加。',
          ja:'Valid Radius Max——Bump Spec Radiusのうち検査に使用する割合(%)を設定します。値が大きいほど(例:80%→100%)Bump Pixel領域がより広く含まれ、使用されるPixel数が増加します。'
        }},
        {img:cmImg('I','nbga',83),tx:{
          vi:'Valid Center Point — chọn cách xác định tâm kiểm tra của Bump: 2D Blob (từ Alignment 2D), 2D Blob→3D (tinh chỉnh theo giá trị Z), 3D (xác định trực tiếp từ giá trị Z), hoặc Gerber→3D (từ vị trí Gerber, tinh chỉnh theo giá trị Z).',
          en:'Valid Center Point — chooses how the bump\'s inspection center is found: 2D Blob (from 2D alignment), 2D Blob→3D (refined by Z value), 3D (found directly from Z value), or Gerber→3D (from the Gerber position, refined by Z value).',
          ko:'Valid Center Point — Bump 검사 기준 Center를 찾는 방식을 선택합니다: 2D Blob(2D Alignment 기준), 2D Blob→3D(2D 기준점을 Z값으로 재보정), 3D(Z값만으로 직접 탐색), Gerber→3D(Gerber 위치를 Z값으로 재보정).',
          zhCN:'Valid Center Point——选择寻找Bump检测基准Center的方式:2D Blob(以2D Alignment为准)、2D Blob→3D(以Z值对2D基准点再校正)、3D(仅以Z值直接搜索)、Gerber→3D(以Z值对Gerber位置再校正)。',
          zhTW:'Valid Center Point——選擇尋找Bump檢測基準Center的方式:2D Blob(以2D Alignment為準)、2D Blob→3D(以Z值對2D基準點再校正)、3D(僅以Z值直接搜尋)、Gerber→3D(以Z值對Gerber位置再校正)。',
          ja:'Valid Center Point——Bump検査の基準Centerを求める方式を選択します:2D Blob(2D Alignment基準)、2D Blob→3D(2D基準点をZ値で再補正)、3D(Z値のみで直接探索)、Gerber→3D(Gerber位置をZ値で再補正)。'
        }},
        {img:cmImg('I','nbga',84),tx:{
          vi:'So sánh 4 tùy chọn Valid Center Point: 2D Blob / 2D Blob→3D / Gerber→3D cho vị trí hơi khác nhau nhưng vẫn hợp lệ; tùy chọn chỉ dùng 3D có thể lệch về góc Bump khi có Pixel giá trị Z bất thường trong ROI — nên khuyến nghị dùng 2D Blob→3D.',
          en:'Comparing the four Valid Center Point options: 2D Blob / 2D Blob→3D / Gerber→3D land in slightly different but still-valid spots; the 3D-only option can drift to a corner of the bump when abnormal Z-value pixels exist in the ROI — so 2D Blob→3D is the recommended choice.',
          ko:'4가지 Valid Center Point 옵션 비교 — 2D Blob·2D Blob→3D·Gerber→3D는 위치가 조금씩 달라도 모두 Bump 영역 안에 있어 검사 가능합니다. 3D 단독 옵션은 ROI 내 비정상 Z값 Pixel이 있으면 Center가 Bump 모서리로 치우칠 수 있어, 2D Blob→3D 옵션 사용을 권장합니다.',
          zhCN:'4种Valid Center Point选项比较——2D Blob、2D Blob→3D、Gerber→3D的位置虽略有不同,但都位于Bump区域内,可正常检测。仅使用3D选项时,若ROI内存在异常Z值Pixel,Center可能会偏向Bump边角,因此建议使用2D Blob→3D选项。',
          zhTW:'4種Valid Center Point選項比較——2D Blob、2D Blob→3D、Gerber→3D的位置雖略有不同,但都位於Bump區域內,可正常檢測。僅使用3D選項時,若ROI內存在異常Z值Pixel,Center可能會偏向Bump邊角,因此建議使用2D Blob→3D選項。',
          ja:'4つのValid Center Pointオプションの比較——2D Blob・2D Blob→3D・Gerber→3Dは位置が多少異なりますがすべてBump領域内にあり検査可能です。3D単独オプションはROI内に異常なZ値のPixelがあるとCenterがBumpの角へ偏る恐れがあるため、2D Blob→3Dオプションの使用が推奨されます。'
        }},
        {img:cmImg('I','nbga',85),tx:{
          vi:'Bump Noise Filter — Top & Count: Top loại bỏ N Pixel Z cao nhất (mặc định 1), sau đó Count đặt số Pixel còn lại (sắp theo Z) thực sự dùng để kiểm tra (mặc định 10).',
          en:'Bump Noise Filter — Top & Count: Top removes the N highest-Z pixels (default 1), then Count sets how many of the remaining pixels (sorted by Z) are actually used for inspection (default 10).',
          ko:'Bump Noise Filter — Top & Count: Top은 Z값이 가장 높은 상위 N개 Pixel을 제거(기본값 1), Count는 남은 Pixel 중 실제 검사에 사용할 개수를 설정합니다(기본값 10).',
          zhCN:'Bump Noise Filter——Top & Count:Top用于去除Z值最高的前N个Pixel(默认值1),Count则设置从剩余Pixel中实际用于检测的数量(默认值10)。',
          zhTW:'Bump Noise Filter——Top & Count:Top用於去除Z值最高的前N個Pixel(預設值1),Count則設定從剩餘Pixel中實際用於檢測的數量(預設值10)。',
          ja:'Bump Noise Filter——Top & Count:TopはZ値が最も高い上位N個のPixelを除去し(既定値1)、Countは残ったPixelのうち実際の検査に使用する数を設定します(既定値10)。'
        }},
        {img:cmImg('I','nbga',86),tx:{
          vi:'Khi bật Top & Count, Final Bump Pixel Count luôn bằng giá trị Count; khi tắt, Final Bump Pixel Count bằng Initial Bump Pixel Count (không lọc).',
          en:'With Top & Count enabled, the Final Bump Pixel Count always equals the Count value; with it disabled, the Final Bump Pixel Count equals the Initial Bump Pixel Count (no filtering).',
          ko:'Top & Count를 사용하면 Final Bump Pixel Count는 항상 Count 값과 같아집니다. 사용하지 않으면 Final Bump Pixel Count는 필터링 없이 Initial Bump Pixel Count와 동일합니다.',
          zhCN:'使用Top & Count时,Final Bump Pixel Count始终等于Count设定值。不使用时,Final Bump Pixel Count在未经过滤的情况下与Initial Bump Pixel Count相同。',
          zhTW:'使用Top & Count時,Final Bump Pixel Count始終等於Count設定值。不使用時,Final Bump Pixel Count在未經過濾的情況下與Initial Bump Pixel Count相同。',
          ja:'Top & Countを使用するとFinal Bump Pixel Countは常にCount設定値と同じになります。使用しない場合、Final Bump Pixel Countはフィルタリングなしでinitial Bump Pixel Countと同じになります。'
        }},
        {img:cmImg('I','nbga',87),tx:{
          vi:'Weight Factor (chỉ New Algorithm, cần ZMap Visibility) — giảm ảnh hưởng của Pixel có Visibility thấp lên chiều cao Bump cuối cùng bằng cách gán trọng số cho giá trị Z của mỗi Pixel theo Visibility. Pixel dưới giới hạn Low nhận trọng số 0; Pixel trên giới hạn High nhận trọng số đầy đủ (255).',
          en:'Weight Factor (New Algorithm only, requires ZMap Visibility) — reduces the influence of low-Visibility pixels on the final bump height by weighting each pixel\'s Z value by its Visibility. Pixels below the Low bound get weight 0; pixels above the High bound get full weight (255).',
          ko:'Weight Factor(New Algorithm 전용, ZMap Visibility 체크 필요) — 각 Pixel의 Z값에 Visibility 기반 가중치를 곱해, Visibility가 낮은 Pixel이 최종 Bump 높이에 미치는 영향을 줄입니다. Visibility가 Low 미만이면 가중치 0, High 초과면 가중치 255(최대)를 적용합니다.',
          zhCN:'Weight Factor(仅New Algorithm,需勾选ZMap Visibility)——对各Pixel的Z值乘以基于Visibility的权重,以降低低Visibility Pixel对最终Bump高度的影响。Visibility低于Low时权重为0,高于High时权重为255(最大值)。',
          zhTW:'Weight Factor(僅New Algorithm,需勾選ZMap Visibility)——對各Pixel的Z值乘以基於Visibility的權重,以降低低Visibility Pixel對最終Bump高度的影響。Visibility低於Low時權重為0,高於High時權重為255(最大值)。',
          ja:'Weight Factor(New Algorithm専用、ZMap Visibilityのチェックが必要)——各PixelのZ値にVisibilityに基づく重みを掛け、Visibilityが低いPixelが最終的なBump高さに与える影響を減らします。VisibilityがLow未満なら重み0、High超過なら重み255(最大)を適用します。'
        }},
        {img:cmImg('I','nbga',88),tx:{
          vi:'Ví dụ minh họa cách tính Weight Factor, cho thấy giá trị Z, Visibility và trọng số tính toán của mỗi Pixel kết hợp thành chiều cao trung bình có trọng số cuối cùng như thế nào.',
          en:'A worked example of the Weight Factor calculation, showing how each pixel\'s Z value, Visibility, and computed weight combine into the final weighted-average height.',
          ko:'Weight Factor 계산 예시 — 각 Pixel의 Z값·Visibility·계산된 가중치가 어떻게 결합되어 최종 가중평균 높이가 산출되는지 보여줍니다.',
          zhCN:'Weight Factor计算示例——展示各Pixel的Z值、Visibility与计算所得权重如何结合,得出最终的加权平均高度。',
          zhTW:'Weight Factor計算範例——展示各Pixel的Z值、Visibility與計算所得權重如何結合,得出最終的加權平均高度。',
          ja:'Weight Factor計算例——各PixelのZ値・Visibility・算出された重みがどのように組み合わさって最終的な加重平均高さになるかを示します。'
        }},
        {img:cmImg('I','nbga',89),tx:{
          vi:'DataDiffThreshold (chỉ New Algorithm) — loại Pixel hỏng/biến dạng của Round Bump bằng cách sắp xếp giá trị Z và bỏ bất kỳ Pixel nào có chênh lệch chiều cao với Pixel lân cận vượt ngưỡng. (Chênh lệch bình thường điển hình: 0.01–0.03 với Flat Bump, 0.1–1.5 với Round Bump.)',
          en:'DataDiffThreshold (New Algorithm only) — excludes a Round Bump\'s damaged/distorted pixels by sorting Z values and discarding any pixel whose neighboring height difference exceeds the threshold. (Typical normal-bump differences: 0.01–0.03 for Flat Bump, 0.1–1.5 for Round Bump.)',
          ko:'DataDiffThreshold(New Algorithm 전용) — Round Bump의 파손·왜곡된 Pixel을 배제하기 위해 Z값을 정렬한 뒤 인접 Pixel 간 높이 차가 설정값을 초과하면 제외합니다. (정상 Bump 기준 차이값: Flat Bump 0.01~0.03, Round Bump 0.1~1.5)',
          zhCN:'DataDiffThreshold(仅New Algorithm)——为排除Round Bump损坏、变形的Pixel,将Z值排序后,若相邻Pixel间的高度差超过设定值则予以排除。(正常Bump的差值基准:Flat Bump为0.01~0.03,Round Bump为0.1~1.5)',
          zhTW:'DataDiffThreshold(僅New Algorithm)——為排除Round Bump損壞、變形的Pixel,將Z值排序後,若相鄰Pixel間的高度差超過設定值則予以排除。(正常Bump的差值基準:Flat Bump為0.01~0.03,Round Bump為0.1~1.5)',
          ja:'DataDiffThreshold(New Algorithm専用)——Round Bumpの破損・歪んだPixelを除外するため、Z値を並べ替えた後、隣接Pixel間の高さの差が設定値を超えると除外します。(正常なBumpの差の目安:Flat Bumpは0.01~0.03、Round Bumpは0.1~1.5)'
        }},
        {img:cmImg('I','nbga',90),tx:{
          vi:'Ví dụ — ở DataDiffThreshold 3.5, không có cặp Pixel nào trên Flat Bump này vượt khoảng cách, nên mọi Pixel đều được dùng; ở 0.1, một số cặp vượt ngưỡng nên bị lọc bỏ trước khi kiểm tra.',
          en:'Example — at DataDiffThreshold 3.5, no pixel pair on this Flat Bump exceeds the gap, so every pixel is used; at 0.1, some pairs do exceed it, so those get filtered out before inspection.',
          ko:'예시 — DataDiffThreshold가 3.5일 때는 이 Flat Bump에서 인접 Pixel 차이가 이를 초과하는 경우가 없어 모든 Pixel이 사용됩니다. 0.1일 때는 초과하는 Pixel 쌍이 있어 해당 Pixel이 검사에서 제외됩니다.',
          zhCN:'示例——当DataDiffThreshold为3.5时,此Flat Bump中相邻Pixel差值没有超过该值的情况,因此所有Pixel都会被使用。为0.1时,存在超过该值的Pixel对,这些Pixel会在检测前被过滤掉。',
          zhTW:'範例——當DataDiffThreshold為3.5時,此Flat Bump中相鄰Pixel差值沒有超過該值的情況,因此所有Pixel都會被使用。為0.1時,存在超過該值的Pixel對,這些Pixel會在檢測前被過濾掉。',
          ja:'例——DataDiffThresholdが3.5の場合、このFlat Bumpでは隣接Pixelの差がこれを超えるものがないため全Pixelが使用されます。0.1の場合は超過するPixelのペアがあり、それらは検査前にフィルタリングされます。'
        }},
        {img:cmImg('I','nbga',91),tx:{
          vi:'Use Visibility Filtering — chỉ giữ N% Pixel Bump cao nhất theo Visibility (mặc định 99%). Pixel có Visibility thấp được coi là kém tin cậy và bị loại — VD ở 60%, chỉ 60% Pixel Visibility cao nhất được dùng.',
          en:'Use Visibility Filtering — keeps only the top N% of bump pixels by Visibility (default 99%). Low-Visibility pixels are considered less reliable and dropped — e.g. at 60%, only the top 60% highest-Visibility pixels are used.',
          ko:'Use Visibility Filtering — Visibility 기준 상위 N%의 Bump Pixel만 사용합니다(기본값 99%). Visibility가 낮은 Pixel은 신뢰도가 낮다고 보고 제외합니다 — 예: 60%로 설정하면 Visibility 상위 60% Pixel만 사용됩니다.',
          zhCN:'Use Visibility Filtering——仅使用Visibility排名前N%的Bump Pixel(默认值99%)。Visibility较低的Pixel被视为可靠性较低而予以排除——例如设为60%时,仅使用Visibility前60%的Pixel。',
          zhTW:'Use Visibility Filtering——僅使用Visibility排名前N%的Bump Pixel(預設值99%)。Visibility較低的Pixel被視為可靠性較低而予以排除——例如設為60%時,僅使用Visibility前60%的Pixel。',
          ja:'Use Visibility Filtering——Visibility基準で上位N%のBump Pixelのみを使用します(既定値99%)。Visibilityが低いPixelは信頼度が低いとみなし除外します——例:60%に設定すると、Visibility上位60%のPixelのみ使用されます。'
        }},
        {img:cmImg('I','nbga',92),tx:{
          vi:'So sánh Visibility Filtering 100% và 60% cho thấy Initial Bump Pixel Count giảm ra sao, dù Final Bump Pixel Count có thể tương tự vì việc lọc Z bất thường vẫn áp dụng ở cả hai trường hợp.',
          en:'Comparing 100% vs. 60% Visibility Filtering shows how the Initial Bump Pixel Count shrinks, though the Final Bump Pixel Count can end up similar since abnormal-Z filtering still applies either way.',
          ko:'Visibility Filtering 100%와 60% 비교 — Initial Bump Pixel Count는 크게 줄어들지만, 비정상 Z값 필터링이 어느 쪽이든 적용되므로 Final Bump Pixel Count는 비슷하게 나올 수 있습니다.',
          zhCN:'比较Visibility Filtering 100%与60%——Initial Bump Pixel Count会明显减少,但由于两者都会套用异常Z值过滤,Final Bump Pixel Count可能相近。',
          zhTW:'比較Visibility Filtering 100%與60%——Initial Bump Pixel Count會明顯減少,但由於兩者都會套用異常Z值過濾,Final Bump Pixel Count可能相近。',
          ja:'Visibility Filtering 100%と60%の比較——Initial Bump Pixel Countは大きく減りますが、どちらの場合も異常なZ値のフィルタリングが適用されるため、Final Bump Pixel Countは近い値になることがあります。'
        }},
        {img:cmImg('I','nbga',93),tx:{
          vi:'Valid Ratio — chỉ giữ Pixel trong dải Min%/Max% quanh giá trị Z trung bình. Dải hẹp hơn (VD 60/60 so với 90/90) dùng ít Pixel hơn trong tính toán cuối cùng.',
          en:'Valid Ratio — keeps only pixels within a Min%/Max% band around the Z-value Mean. A narrower band (e.g. 60/60 vs. 90/90) uses fewer pixels in the final calculation.',
          ko:'Valid Ratio — Z값 평균(Mean) 기준 Min%~Max% 범위 내 Pixel만 사용합니다. 범위가 좁을수록(예: 90/90→60/60) 최종 계산에 사용되는 Pixel 수가 줄어듭니다.',
          zhCN:'Valid Ratio——仅使用以Z值Mean为基准、位于Min%~Max%范围内的Pixel。范围越窄(如90/90→60/60),最终计算所用的Pixel数越少。',
          zhTW:'Valid Ratio——僅使用以Z值Mean為基準、位於Min%~Max%範圍內的Pixel。範圍越窄(如90/90→60/60),最終計算所用的Pixel數越少。',
          ja:'Valid Ratio——Z値のMeanを基準にMin%~Max%範囲内のPixelのみを使用します。範囲が狭いほど(例:90/90→60/60)最終計算に使用されるPixel数が減ります。'
        }},
        {img:cmImg('I','nbga',94),tx:{
          vi:'Low & High (Mean Difference) — lọc bỏ Pixel có giá trị Z nằm ngoài (Mean − Low) đến (Mean + High). Pixel Flat Bump điển hình nằm trong ±1; Pixel Round Bump nằm trong khoảng Mean ±5µm tùy theo Valid Radius Max.',
          en:'Low & High (Mean Difference) — filters out pixels whose Z value falls outside (Mean − Low) to (Mean + High). Typical Flat Bump pixels stay within ±1; Round Bump pixels stay within roughly Mean ±5µm depending on Valid Radius Max.',
          ko:'Low & High(Mean Difference) — Z값이 (Mean-Low)~(Mean+High) 범위를 벗어난 Pixel을 필터링합니다. 일반적으로 Flat Bump는 Mean ±1 이내, Round Bump는 Valid Radius Max 설정값에 따라 대략 Mean ±5µm 이내입니다.',
          zhCN:'Low & High(Mean Difference)——过滤Z值超出(Mean-Low)~(Mean+High)范围的Pixel。一般Flat Bump在Mean ±1以内,Round Bump则依Valid Radius Max设定值大致在Mean ±5µm以内。',
          zhTW:'Low & High(Mean Difference)——過濾Z值超出(Mean-Low)~(Mean+High)範圍的Pixel。一般Flat Bump在Mean ±1以內,Round Bump則依Valid Radius Max設定值大致在Mean ±5µm以內。',
          ja:'Low & High(Mean Difference)——Z値が(Mean-Low)~(Mean+High)の範囲を外れたPixelをフィルタリングします。一般的にFlat BumpはMean ±1以内、Round BumpはValid Radius Maxの設定によりおおよそMean ±5µm以内です。'
        }},
        {img:cmImg('I','nbga',95),tx:{
          vi:'Khi tắt New Algorithm, Parameter Weight Factor không được dùng cho kiểm tra, và nếu Top & Count của Bump Noise Filter đang bật, Valid Ratio bị ép về 100% bất kể giá trị đã đặt.',
          en:'When New Algorithm is off, Weight Factor parameters aren\'t used for inspection, and if the Bump Noise Filter\'s Top & Count is active, Valid Ratio is forced to 100% regardless of its set value.',
          ko:'New Algorithm을 사용하지 않으면 Weight Factor Parameter는 검사에 사용되지 않고, Bump Noise Filter의 Top & Count가 활성화된 경우 Valid Ratio는 설정값과 무관하게 100%로 적용됩니다.',
          zhCN:'不使用New Algorithm时,Weight Factor参数不会用于检测;若Bump Noise Filter的Top & Count已启用,则Valid Ratio会强制以100%套用,与设定值无关。',
          zhTW:'不使用New Algorithm時,Weight Factor參數不會用於檢測;若Bump Noise Filter的Top & Count已啟用,則Valid Ratio會強制以100%套用,與設定值無關。',
          ja:'New Algorithmを使用しない場合、Weight Factor Parameterは検査に使用されず、Bump Noise FilterのTop & Countが有効な場合、Valid Ratioは設定値に関わらず100%として適用されます。'
        }},
        {img:cmImg('I','nbga',96),tx:{
          vi:'SR — SpecDiffmean kích hoạt kiểm tra lại (ngay cả sau khi Pass ban đầu) khi độ lệch chiều cao trung bình của Pixel vùng SR vượt giá trị này — VD đặt 5 nghĩa là thử lại khi độ lệch trung bình vượt 5µm.',
          en:'SR — SpecDiffmean triggers a re-inspection (even after an initial Pass) when the average height deviation of SR-area pixels exceeds this value — e.g. a setting of 5 means retry when the average deviation exceeds 5µm.',
          ko:'SR — SpecDiffmean은 SR 영역 Pixel의 평균 높이 편차가 이 값을 초과하면(1차 Pass 판정이어도) 재검사를 시도합니다 — 예: 값이 5이면 평균 편차가 5µm를 초과할 때 재검사합니다.',
          zhCN:'SR——SpecDiffmean是当SR区域Pixel的平均高度偏差超过此值时(即使初判为Pass)也会触发再检测——例如设为5,表示平均偏差超过5µm时进行重新检测。',
          zhTW:'SR——SpecDiffmean是當SR區域Pixel的平均高度偏差超過此值時(即使初判為Pass)也會觸發再檢測——例如設為5,表示平均偏差超過5µm時進行重新檢測。',
          ja:'SR——SpecDiffmeanはSR領域PixelのHeight平均偏差がこの値を超えると(初回Pass判定でも)再検査を行います——例:値が5の場合、平均偏差が5µmを超えると再検査します。'
        }},
        {img:cmImg('I','nbga',97),tx:{
          vi:'Ví dụ minh họa cách chênh lệch chiều cao SR theo từng Pixel được lấy trung bình thành DiffMean cho mỗi SR, sau đó kết hợp thành Total DiffMean cho Unit, và so sánh với SpecDiffmean để quyết định PASS hay Retry.',
          en:'A worked example of how per-pixel SR height differences are averaged into a DiffMean per SR, then combined into a Total DiffMean for the unit, which is compared against SpecDiffmean to decide PASS vs. Retry.',
          ko:'각 Pixel의 SR 높이 편차를 SR 단위의 DiffMean으로 평균낸 뒤, Unit 전체의 Total DiffMean으로 합산하여 SpecDiffmean과 비교해 PASS 또는 재검사를 판정하는 계산 예시입니다.',
          zhCN:'展示各Pixel的SR高度偏差如何平均为每个SR的DiffMean,再合并为整个Unit的Total DiffMean,并与SpecDiffmean比较以判定PASS或Retry的计算示例。',
          zhTW:'展示各Pixel的SR高度偏差如何平均為每個SR的DiffMean,再合併為整個Unit的Total DiffMean,並與SpecDiffmean比較以判定PASS或Retry的計算範例。',
          ja:'各PixelのSR高さ偏差をSR単位のDiffMeanとして平均化し、Unit全体のTotal DiffMeanに合算した後、SpecDiffmeanと比較してPASSか再検査かを判定する計算例です。'
        }},
        {img:cmImg('I','nbga',98),tx:{
          vi:'Valid ROI Max — đặt vùng kiểm tra SR theo bội số của Bump Spec Diameter. Hệ số lớn hơn (VD 2.8 so với 2.0) bao phủ diện tích lớn hơn và bao gồm nhiều Pixel hơn.',
          en:'Valid ROI Max — sets the SR inspection area as a multiple of the Bump Spec Diameter. A larger multiplier (e.g. 2.8 vs. 2.0) covers more area and includes more pixels.',
          ko:'Valid ROI Max — SR 검사 영역을 Bump Spec Diameter의 배수로 설정합니다. 배수가 클수록(예: 2.0→2.8) 더 넓은 영역이 포함되어 Pixel 수가 늘어납니다.',
          zhCN:'Valid ROI Max——将SR检测区域设置为Bump Spec Diameter的倍数。倍数越大(如2.0→2.8),涵盖的区域越广,Pixel数也随之增加。',
          zhTW:'Valid ROI Max——將SR檢測區域設定為Bump Spec Diameter的倍數。倍數越大(如2.0→2.8),涵蓋的區域越廣,Pixel數也隨之增加。',
          ja:'Valid ROI Max——SR検査領域をBump Spec Diameterの倍数として設定します。倍率が大きいほど(例:2.0→2.8)より広い範囲が含まれ、Pixel数が増加します。'
        }},
        {img:cmImg('I','nbga',99),tx:{
          vi:'Giá trị Valid ROI Max lớn hơn làm tăng số Pixel SR cuối cùng dùng trong tính toán, như dữ liệu so sánh cho thấy.',
          en:'A larger Valid ROI Max value increases the final SR pixel count used in the calculation, as shown by the comparison data.',
          ko:'Valid ROI Max 값이 클수록 최종 계산에 사용되는 SR Pixel 수가 늘어남을 비교 데이터로 확인할 수 있습니다.',
          zhCN:'比较数据显示,Valid ROI Max值越大,最终计算所用的SR Pixel数也越多。',
          zhTW:'比較資料顯示,Valid ROI Max值越大,最終計算所用的SR Pixel數也越多。',
          ja:'Valid ROI Maxの値が大きいほど、最終計算に使用されるSR Pixel数が増えることが比較データから確認できます。'
        }},
        {img:cmImg('I','nbga',100),tx:{
          vi:'Ignore Radius — loại vùng của chính Bump khỏi vùng SR, tính theo Ignore Radius × Bump Spec Radius. Giá trị quá nhỏ (VD 1.0) có thể để sót Pixel Bump trong vùng SR (làm lệch tính toán chiều cao SR), trong khi giá trị lớn hơn (VD 1.8) loại bỏ hoàn toàn Bump.',
          en:'Ignore Radius — excludes the bump\'s own area from the SR region, calculated as Ignore Radius × Bump Spec Radius. Too small a value (e.g. 1.0) can leave bump pixels inside the SR area (skewing the SR height calculation), while a larger value (e.g. 1.8) fully removes the bump.',
          ko:'Ignore Radius — SR 영역에서 Bump 자체 영역을 제외하는 값이며, Ignore Radius × Bump Spec Radius로 계산됩니다. 값이 너무 작으면(예: 1.0) Bump Pixel이 SR 영역에 남아 SR 높이 계산이 왜곡될 수 있고, 값이 크면(예: 1.8) Bump 영역이 완전히 제외됩니다.',
          zhCN:'Ignore Radius——用于从SR区域中排除Bump本身区域的数值,以Ignore Radius × Bump Spec Radius计算。数值过小(如1.0)会使Bump Pixel残留在SR区域内,导致SR高度计算失真;数值较大(如1.8)则可完全排除Bump区域。',
          zhTW:'Ignore Radius——用於從SR區域中排除Bump本身區域的數值,以Ignore Radius × Bump Spec Radius計算。數值過小(如1.0)會使Bump Pixel殘留在SR區域內,導致SR高度計算失真;數值較大(如1.8)則可完全排除Bump區域。',
          ja:'Ignore Radius——SR領域からBump自体の領域を除外する値で、Ignore Radius × Bump Spec Radiusで計算されます。値が小さすぎると(例:1.0)Bump PixelがSR領域内に残りSR高さ計算が歪む恐れがあり、値が大きいと(例:1.8)Bump領域が完全に除外されます。'
        }},
        {img:cmImg('I','nbga',101),tx:{
          vi:'Ignore Radius lớn hơn loại bỏ nhiều diện tích Bump hơn, giảm số Pixel SR cuối cùng sử dụng.',
          en:'A larger Ignore Radius removes more of the bump area, reducing the final SR pixel count used.',
          ko:'Ignore Radius 값이 클수록 제외되는 Bump 영역이 넓어져 최종 SR Pixel 수가 줄어듭니다.',
          zhCN:'Ignore Radius值越大,被排除的Bump区域越广,最终使用的SR Pixel数也随之减少。',
          zhTW:'Ignore Radius值越大,被排除的Bump區域越廣,最終使用的SR Pixel數也隨之減少。',
          ja:'Ignore Radiusの値が大きいほど除外されるBump領域が広くなり、最終的なSR Pixel数が減少します。'
        }},
        {img:cmImg('I','nbga',102),tx:{
          vi:'SR Noise Filter — Top & Count: Top loại N Pixel Z cao nhất (mặc định 1), Count sau đó đặt số Pixel còn lại được dùng (mặc định 10) — cùng nguyên lý như Bump Noise Filter.',
          en:'SR Noise Filter — Top & Count: Top removes the N highest-Z pixels (default 1), Count then sets how many of the remainder are used (default 10) — the same principle as the Bump Noise Filter.',
          ko:'SR Noise Filter — Top & Count: Top은 Z값 상위 N개 Pixel을 제거하고(기본값 1), Count는 남은 Pixel 중 사용할 개수를 설정합니다(기본값 10). Bump Noise Filter와 동일한 원리입니다.',
          zhCN:'SR Noise Filter——Top & Count:Top用于去除Z值最高的N个Pixel(默认值1),Count设置从剩余Pixel中实际使用的数量(默认值10)。原理与Bump Noise Filter相同。',
          zhTW:'SR Noise Filter——Top & Count:Top用於去除Z值最高的N個Pixel(預設值1),Count設定從剩餘Pixel中實際使用的數量(預設值10)。原理與Bump Noise Filter相同。',
          ja:'SR Noise Filter——Top & Count:TopはZ値上位N個のPixelを除去し(既定値1)、Countは残ったPixelのうち使用する数を設定します(既定値10)。Bump Noise Filterと同じ原理です。'
        }},
        {img:cmImg('I','nbga',103),tx:{
          vi:'SR Valid Ratio — cùng khái niệm như phiên bản Bump: chỉ dùng Pixel trong dải Min%/Max% quanh Z trung bình; dải hẹp hơn dùng ít Pixel hơn.',
          en:'SR Valid Ratio — the same concept as the Bump version: only pixels within a Min%/Max% band around the mean Z are used; a narrower band uses fewer pixels.',
          ko:'SR Valid Ratio — Bump과 동일한 개념으로, 평균 Z값 기준 Min%~Max% 범위 내 Pixel만 사용합니다. 범위가 좁을수록 사용 Pixel 수가 줄어듭니다.',
          zhCN:'SR Valid Ratio——与Bump的概念相同,仅使用以平均Z值为基准、位于Min%~Max%范围内的Pixel。范围越窄,使用的Pixel数越少。',
          zhTW:'SR Valid Ratio——與Bump的概念相同,僅使用以平均Z值為基準、位於Min%~Max%範圍內的Pixel。範圍越窄,使用的Pixel數越少。',
          ja:'SR Valid Ratio——Bumpと同じ概念で、平均Z値を基準にMin%~Max%範囲内のPixelのみを使用します。範囲が狭いほど使用Pixel数が減ります。'
        }},
        {img:cmImg('I','nbga',104),tx:{
          vi:'SR Low & High (Mean Difference) — lọc bỏ Pixel SR có giá trị Z nằm ngoài (Mean − Low) đến (Mean + High). Giá trị Z Pixel SR điển hình nằm trong khoảng ± 5 so với trung bình.',
          en:'SR Low & High (Mean Difference) — filters out SR pixels whose Z value falls outside (Mean − Low) to (Mean + High). Typical SR pixel Z values stay within about ± 5 of the mean.',
          ko:'SR Low & High(Mean Difference) — Z값이 (Mean-Low)~(Mean+High) 범위를 벗어난 SR Pixel을 필터링합니다. 일반적으로 SR Pixel의 Z값은 평균 ±5 이내입니다.',
          zhCN:'SR Low & High(Mean Difference)——过滤Z值超出(Mean-Low)~(Mean+High)范围的SR Pixel。一般SR Pixel的Z值大致在平均值±5以内。',
          zhTW:'SR Low & High(Mean Difference)——過濾Z值超出(Mean-Low)~(Mean+High)範圍的SR Pixel。一般SR Pixel的Z值大致在平均值±5以內。',
          ja:'SR Low & High(Mean Difference)——Z値が(Mean-Low)~(Mean+High)の範囲を外れたSR Pixelをフィルタリングします。一般的にSR PixelのZ値は平均±5以内です。'
        }},
        {img:cmImg('I','nbga',105),tx:{
          vi:'SR Fitting — nếu không dùng, mặt phẳng SR chỉ đơn giản là trung bình dữ liệu Pixel. Khi bật, mặt phẳng SR được tính qua phương trình khớp mặt phẳng (xác định bởi một điểm và vector pháp tuyến). Chênh lệch kết quả nhỏ, nên tùy chọn này không bắt buộc.',
          en:'SR Fitting — without it, the SR plane is simply the mean of the pixel data. With it enabled, the SR plane is computed via a plane-fitting equation (defined by a point and its normal vector). The difference in result is small, so this option isn\'t mandatory.',
          ko:'SR Fitting — 사용하지 않으면 SR Plane은 Pixel 데이터의 평균값으로 계산됩니다. 사용하면 점과 법선 벡터로 정의되는 평면 방정식(Plane Fitting)으로 SR Plane을 계산합니다. 결과 차이가 크지 않아 필수 사용 Parameter는 아닙니다.',
          zhCN:'SR Fitting——不使用时,SR Plane以Pixel数据的平均值计算。启用后,则以点与法向量定义的平面方程式(Plane Fitting)计算SR Plane。由于结果差异不大,并非必须使用的参数。',
          zhTW:'SR Fitting——不使用時,SR Plane以Pixel資料的平均值計算。啟用後,則以點與法向量定義的平面方程式(Plane Fitting)計算SR Plane。由於結果差異不大,並非必須使用的參數。',
          ja:'SR Fitting——使用しない場合、SR PlaneはPixelデータの平均値で計算されます。使用すると、点と法線ベクトルで定義される平面方程式(Plane Fitting)でSR Planeを計算します。結果の差は大きくないため、必須のParameterではありません。'
        }},
        {img:cmImg('I','nbga',106),tx:{
          vi:'Redundant (3D) — cùng khái niệm xử lý ngoại lệ như phiên bản 2D: một Bump ít quan trọng vẫn có thể Pass dù có kết quả mức Reject, nếu được đánh dấu Redundant. Cần thêm Redundant Gerber vào Design Spec.',
          en:'Redundant (3D) — the same exception-handling concept as the 2D version: a low-importance bump can still Pass even with a Reject-level result, if flagged Redundant. Requires a Redundant Gerber added to Design Spec.',
          ko:'Redundant(3D) — 2D와 동일한 예외 처리 개념으로, 중요도가 낮은 Bump는 Reject 수준의 결과가 나와도 Redundant로 지정되면 Pass 처리됩니다. Design Spec에 Redundant Gerber를 추가해야 사용 가능합니다.',
          zhCN:'Redundant(3D)——与2D相同的例外处理概念,重要度较低的Bump即使出现Reject级别的结果,只要被指定为Redundant即可判定为Pass。需在Design Spec中新增Redundant Gerber方可使用。',
          zhTW:'Redundant(3D)——與2D相同的例外處理概念,重要度較低的Bump即使出現Reject等級的結果,只要被指定為Redundant即可判定為Pass。需在Design Spec中新增Redundant Gerber方可使用。',
          ja:'Redundant(3D)——2Dと同じ例外処理の概念で、重要度の低いBumpはReject相当の結果が出てもRedundantに指定されていればPass扱いとなります。Design SpecにRedundant Gerberを追加する必要があります。'
        }},
        {img:cmImg('I','nbga',107),tx:{
          vi:'Thiết lập Redundant (3D) — chọn theo từng Die, công tắc bật/tắt toàn cục áp dụng cho mọi Die, tùy chọn bỏ qua xử lý Redundant khi Bump bình thường vốn đã Reject, và nút Copy-All để sao chép thiết lập sang các Die khác.',
          en:'Redundant (3D) settings — per-die selection, a global on/off toggle applied to all dies, an option to skip redundant handling when a normal bump would reject anyway, and a Copy-All button to replicate settings across dies.',
          ko:'Redundant(3D) 설정 — Die별 선택, 전체 Die 공통 사용 여부, 정상 Bump도 Reject 대상이면 Redundant 처리를 생략하는 옵션, 설정을 다른 Die로 복사하는 Copy All 버튼으로 구성됩니다.',
          zhCN:'Redundant(3D)设置——包含按Die个别选择、套用于全部Die的整体使用与否、正常Bump若为Reject对象时跳过Redundant处理的选项,以及将设置复制到其他Die的Copy All按钮。',
          zhTW:'Redundant(3D)設定——包含按Die個別選擇、套用於全部Die的整體使用與否、正常Bump若為Reject對象時跳過Redundant處理的選項,以及將設定複製到其他Die的Copy All按鈕。',
          ja:'Redundant(3D)設定——Die別選択、全Die共通の使用有無、正常なBumpでもReject対象ならRedundant処理を省略するオプション、設定を他のDieへ複製するCopy Allボタンで構成されます。'
        }},
        {img:cmImg('I','nbga',108),tx:{
          vi:'Chọn hạng mục kiểm tra nào được xử lý Redundant; đặt Spec Reject Height Low/High áp dụng cho Redundant Bump; và chọn xét Reject theo từng hạng mục (Each) hay kết hợp giữa các hạng mục (Public).',
          en:'Choose which inspection items get Redundant handling; set the Height Low/High reject spec applied to Redundant Bumps; and choose whether reject judgment is calculated per item (Each) or combined across items (Public).',
          ko:'Redundant를 적용할 검사 항목을 선택하고, Redundant Bump에 적용할 Height Low/High Reject 기준값을 설정하며, Reject 판정을 항목별(Each)로 할지 통합(Public)으로 할지 선택합니다.',
          zhCN:'选择要套用Redundant的检测项目,设置套用于Redundant Bump的Height Low/High Reject基准值,并选择Reject判定是按项目个别计算(Each)还是合并计算(Public)。',
          zhTW:'選擇要套用Redundant的檢測項目,設定套用於Redundant Bump的Height Low/High Reject基準值,並選擇Reject判定是按項目個別計算(Each)還是合併計算(Public)。',
          ja:'Redundantを適用する検査項目を選択し、Redundant Bumpに適用するHeight Low/High Reject基準値を設定、Reject判定を項目ごと(Each)か合算(Public)かを選択します。'
        }},
        {img:cmImg('I','nbga',109),tx:{
          vi:'Quy tắc Reject Redundant (3D) — Reject theo số lượng hoặc tỷ lệ % lỗi. Redundant Reject Distance cũng Reject Unit nếu các lỗi Redundant Bump quá gần nhau, dù điều kiện Redundant vốn đã thỏa mãn.',
          en:'Redundant reject rule (3D) — reject by count or percentage of defects. Redundant Reject Distance also rejects the unit if redundant-bump defects are too close together, even if the redundant condition was otherwise satisfied.',
          ko:'Redundant Reject 판정 방식(3D) — 불량 개수 또는 비율(%) 기준으로 Reject합니다. Redundant Reject Distance는 Redundant 조건을 만족해도 불량 Bump 간 거리가 가까우면 Reject 처리합니다.',
          zhCN:'Redundant Reject判定方式(3D)——依不良数量或比例(%)判定Reject。Redundant Reject Distance则是即使满足Redundant条件,若不良Bump间距过近仍会判定为Reject。',
          zhTW:'Redundant Reject判定方式(3D)——依不良數量或比例(%)判定Reject。Redundant Reject Distance則是即使滿足Redundant條件,若不良Bump間距過近仍會判定為Reject。',
          ja:'Redundant Reject判定方式(3D)——不良数または比率(%)を基準にRejectします。Redundant Reject Distanceは、Redundant条件を満たしていても不良Bump間の距離が近い場合にRejectとします。'
        }},
        {img:cmImg('I','nbga',110),tx:{
          vi:'Gain + Offset — căn chỉnh kết quả kiểm tra của thiết bị này khớp với thiết bị hãng khác khi có chênh lệch hệ thống. VD thêm +5 vào Offset để sửa khoảng cách chiều cao Bump −5µm, hoặc áp dụng Gain 2 để sửa chênh lệch khoảng 2 lần.',
          en:'Gain + Offset — aligns this equipment\'s inspection results with another vendor\'s equipment when there\'s a systematic difference. E.g. add +5 to Offset to correct a −5µm bump-height gap, or apply a Gain of 2 to correct a roughly 2× difference.',
          ko:'Gain + Offset — 자사 설비와 타사 설비의 검사 결과가 다를 때 기준을 맞추는 Parameter입니다. 예1) Bump Height 결과가 -5µm 차이나면 Offset +5를 적용해 보정. 예2) 결과가 약 2배 차이나면 Gain 2를 적용해 보정.',
          zhCN:'Gain + Offset——当自家设备与其他厂商设备的检测结果存在差异时,用于统一基准的参数。例1:若Bump Height结果相差约-5µm,可套用Offset +5进行校正。例2:若结果相差约2倍,可套用Gain 2进行校正。',
          zhTW:'Gain + Offset——當自家設備與其他廠商設備的檢測結果存在差異時,用於統一基準的參數。例1:若Bump Height結果相差約-5µm,可套用Offset +5進行校正。例2:若結果相差約2倍,可套用Gain 2進行校正。',
          ja:'Gain + Offset——自社設備と他社設備の検査結果に差がある場合に基準を合わせるParameterです。例1)Bump Height結果が-5µm差の場合、Offset +5を適用して補正。例2)結果が約2倍差の場合、Gain 2を適用して補正。'
        }},
        {img:cmImg('I','nbga',111),tx:{
          vi:'Coplanarity là độ phẳng của đỉnh Bump; CAW là độ cong vênh của mặt phẳng SR; Height Copl là Coplanarity đã hiệu chỉnh theo độ cong vênh CAW đó. Gain/Offset áp dụng hiệu chỉnh nhân/cộng cho từng hạng mục kiểm tra (Gain không được bằng 0).',
          en:'Coplanarity is the flatness of the bump tops; CAW is the warpage of the SR plane; Height Copl is Coplanarity corrected for that CAW warpage. Gain/Offset apply a multiply/add correction per inspection item (Gain cannot be 0).',
          ko:'Coplanarity는 Bump 상단의 평탄도, CAW는 SR Plane의 휨(Warpage), Height Copl은 CAW 휨을 보정한 기준의 Coplanarity를 의미합니다. Gain/Offset은 각 검사 항목에 곱셈/덧셈 방식의 보정을 적용합니다(Gain은 0이 될 수 없음).',
          zhCN:'Coplanarity指Bump顶部的平坦度,CAW指SR Plane的翘曲(Warpage),Height Copl指以CAW翘曲校正后的基准所计算的Coplanarity。Gain/Offset对各检测项目分别套用乘法/加法方式的校正(Gain不可为0)。',
          zhTW:'Coplanarity指Bump頂部的平坦度,CAW指SR Plane的翹曲(Warpage),Height Copl指以CAW翹曲校正後的基準所計算的Coplanarity。Gain/Offset對各檢測項目分別套用乘法/加法方式的校正(Gain不可為0)。',
          ja:'CoplanarityはBump上面の平坦度、CAWはSR Planeの反り(Warpage)、Height CoplはそのCAWの反りを補正した基準でのCoplanarityを意味します。Gain/Offsetは各検査項目に乗算/加算方式の補正を適用します(Gainは0にできません)。'
        }},
        {img:cmImg('I','nbga',112),tx:{
          vi:'Height Average Ignore — đặt tỷ lệ % Pixel (sắp theo Z) dùng để tính trung bình chiều cao Bump. Mặc định 99%, vì thiết lập này ít ảnh hưởng thực tế đến kết quả.',
          en:'Height Average Ignore — sets what percentage of pixels (sorted by Z) are used to average the bump height. Default is 99%, since this setting has little practical effect on the result.',
          ko:'Height Average Ignore — Bump 높이 평균 계산에 사용할 Pixel의 비율(%)을 설정합니다. 결과에 큰 영향을 주지 않아 기본값 99%를 그대로 사용합니다.',
          zhCN:'Height Average Ignore——设置用于计算Bump高度平均值的Pixel比例(%)。由于对结果影响不大,通常沿用默认值99%。',
          zhTW:'Height Average Ignore——設定用於計算Bump高度平均值的Pixel比例(%)。由於對結果影響不大,通常沿用預設值99%。',
          ja:'Height Average Ignore——Bump高さの平均計算に使用するPixelの割合(%)を設定します。結果への影響が小さいため既定値の99%をそのまま使用します。'
        }},
        {img:cmImg('I','nbga',113),tx:{
          vi:'Error Bump — một Bump được đánh dấu là Error Bump nếu số Pixel Z hợp lệ thấp hơn Valid Count trong Bump Pixel tối thiểu, hoặc tổng trọng số Visibility của các Pixel đã kiểm tra thấp hơn tổng yêu cầu — cả hai đều báo hiệu dữ liệu không đáng tin.',
          en:'Error Bump — a bump is flagged as an Error Bump if either its valid-Z pixel count falls below the Valid Count in Bump Pixel minimum, or the summed Visibility weight of its inspected pixels falls below the required sum — both signal unreliable data.',
          ko:'Error Bump — Bump의 유효 Z Pixel 수가 Valid Count in Bump Pixel 최소값에 미달하거나, 검사에 사용된 Pixel의 Visibility 가중합이 요구 기준에 미달하면 Error Bump로 판정합니다. 둘 다 데이터 신뢰도가 낮음을 의미합니다.',
          zhCN:'Error Bump——若Bump有效Z Pixel数低于Valid Count in Bump Pixel的最小值,或检测所用Pixel的Visibility加权总和低于要求基准,则判定为Error Bump。两者都代表数据可靠性不足。',
          zhTW:'Error Bump——若Bump有效Z Pixel數低於Valid Count in Bump Pixel的最小值,或檢測所用Pixel的Visibility加權總和低於要求基準,則判定為Error Bump。兩者都代表資料可靠性不足。',
          ja:'Error Bump——Bumpの有効Z Pixel数がValid Count in Bump Pixelの最小値に満たない場合、または検査に使用したPixelのVisibility加重合計が要求基準に満たない場合、Error Bumpと判定されます。いずれもデータの信頼性が低いことを意味します。'
        }},
        {img:cmImg('I','nbga',114),tx:{
          vi:'Error Bump loại Bump kể cả khi giá trị chiều cao trông bình thường, nếu dữ liệu Pixel gốc không đáng tin cậy — xét theo cùng hai điều kiện (số Pixel và tổng trọng số Visibility) đã mô tả ở trên.',
          en:'Error Bump rejects a bump even when its height value looks normal, if the underlying pixel data isn\'t trustworthy — judged by the same two conditions (pixel count and Visibility-weight sum) described previously.',
          ko:'Error Bump는 높이 값이 정상으로 보여도 기반 데이터의 신뢰도가 낮으면 불량 처리합니다 — 앞서 설명한 두 조건(Pixel 수, Visibility 가중합)으로 판정합니다.',
          zhCN:'Error Bump即使高度值看似正常,只要底层数据可靠性不足也会判定为不良——依前述两个条件(Pixel数、Visibility加权总和)进行判定。',
          zhTW:'Error Bump即使高度值看似正常,只要底層資料可靠性不足也會判定為不良——依前述兩個條件(Pixel數、Visibility加權總和)進行判定。',
          ja:'Error Bumpは高さの値が正常に見えても、元データの信頼性が低ければ不良として扱います——前述の2条件(Pixel数、Visibility加重合計)で判定します。'
        }},
        {img:cmImg('I','nbga',115),tx:{
          vi:'Damage Bump Recalc — Height Upper/Lower xác định phạm vi chiều cao mà Bump được coi là có thể bị hỏng. Nếu chiều cao đo được nằm trong dải đó, Bump sẽ được kiểm tra lại chỉ dùng X% Pixel cao nhất (theo giá trị Z).',
          en:'Damage Bump Recalc — Height Upper/Lower define the height range in which a bump is considered possibly damaged. If the measured height falls in that band, it is re-inspected using only the top X% of its pixel data (by Z value).',
          ko:'Damage Bump Recalc — Height Upper/Lower는 손상 의심 구간을 정의합니다. 측정된 Bump 높이가 이 구간에 해당하면, Z값 기준 상위 X% Pixel 데이터만으로 재검사합니다.',
          zhCN:'Damage Bump Recalc——Height Upper/Lower定义可能损坏的高度区间。若测得的Bump高度落在此区间,则仅使用Z值排序前X%的Pixel数据重新检测。',
          zhTW:'Damage Bump Recalc——Height Upper/Lower定義可能損壞的高度區間。若測得的Bump高度落在此區間,則僅使用Z值排序前X%的Pixel資料重新檢測。',
          ja:'Damage Bump Recalc——Height Upper/Lowerは損傷の疑いがある高さ区間を定義します。測定されたBump高さがこの区間に該当する場合、Z値上位X%のPixelデータのみで再検査します。'
        }},
        {img:cmImg('I','nbga',116),tx:{
          vi:'Việc tính lại đo chiều cao bằng Pixel từ giá trị Z cao nhất xuống đến ngưỡng Recalc Top Percent. Nếu giá trị tính lại đó đạt Height Spec, Bump được coi là Pass.',
          en:'The recalculation re-measures height using pixels from the highest Z value down to the Recalc Top Percent cutoff. If that recalculated value meets the Height Spec, the bump is treated as Pass.',
          ko:'재계산은 Z값이 가장 높은 Pixel부터 Recalc Top Percent 비율까지의 데이터로 높이를 다시 측정합니다. 재계산 결과가 Height Spec을 만족하면 해당 Bump는 Pass로 처리됩니다.',
          zhCN:'重新计算是使用从Z值最高的Pixel到Recalc Top Percent比例范围内的数据重新测量高度。若重新计算的结果满足Height Spec,该Bump即判定为Pass。',
          zhTW:'重新計算是使用從Z值最高的Pixel到Recalc Top Percent比例範圍內的資料重新測量高度。若重新計算的結果滿足Height Spec,該Bump即判定為Pass。',
          ja:'再計算はZ値が最も高いPixelからRecalc Top Percentの割合までのデータで高さを再測定します。再計算の結果がHeight Specを満たせば、そのBumpはPass扱いとなります。'
        }},
        {img:cmImg('I','nbga',117),tx:{
          vi:'Tiếp theo: LTS Target — xác minh hiệu năng của hệ quang học kiểm tra 3D duy trì ổn định theo thời gian.',
          en:'Next: LTS Target — verifying that the 3D inspection optical system\'s performance stays consistent over time.',
          ko:'다음: LTS Target — 3D 검사 광학계의 성능이 시간에 따라 일정하게 유지되는지 검증하는 항목을 다룹니다.',
          zhCN:'接下来:LTS Target——验证3D检测光学系统的性能是否随时间保持一致。',
          zhTW:'接下來:LTS Target——驗證3D檢測光學系統的效能是否隨時間保持一致。',
          ja:'次へ:LTS Target——3D検査光学系の性能が時間の経過とともに一定に保たれているかを検証する項目を扱います。'
        }},
        {img:cmImg('I','nbga',118),tx:{
          vi:'2.1.6. LTS Target — chức năng 3D LTS kiểm tra xem hiệu năng của hệ quang học kiểm tra có duy trì ổn định theo thời gian hay không, chủ yếu dùng mẫu bậc LTS đã xác minh làm Target chuẩn.',
          en:'2.1.6. LTS Target — the 3D LTS function checks whether the inspection optical system\'s performance stays consistent over time, mainly using a verified LTS step specimen as the reference target.',
          ko:'2.1.6. LTS Target — 3D LTS 기능은 검사 광학계의 성능이 시간에 따라 일정하게 유지되는지 확인합니다. 주로 검증된 LTS Step Specimen을 기준 Target으로 사용합니다.',
          zhCN:'2.1.6. LTS Target——3D LTS功能用于确认检测光学系统的性能是否随时间保持一致,主要使用经过验证的LTS Step Specimen作为基准Target。',
          zhTW:'2.1.6. LTS Target——3D LTS功能用於確認檢測光學系統的效能是否隨時間保持一致,主要使用經過驗證的LTS Step Specimen作為基準Target。',
          ja:'2.1.6. LTS Target——3D LTS機能は検査光学系の性能が時間の経過とともに一定に保たれているかを確認します。主に検証済みのLTS Step Specimenを基準Targetとして使用します。'
        }},
        {img:cmImg('I','nbga',119),tx:{
          vi:'Parameter LTS Target — ① khoảng cách giữa ROI Top và Bottom, dựa trên Top ROI; ② tọa độ trên/dưới/trái/phải hiện tại của ROI Top và Bottom; ③ định vị Bottom ROI tương đối so với Top ROI.',
          en:'LTS Target parameters — ① the distance between the Top and Bottom ROI, based on the Top ROI; ② the current up/down/left/right coordinates of the Top and Bottom ROI; ③ positions the Bottom ROI relative to the Top ROI.',
          ko:'LTS Target Parameter — ① Top ROI 기준 Bottom ROI까지의 거리, ② Top·Bottom ROI의 현재 상하좌우 좌표, ③ Top ROI 대비 Bottom ROI의 위치 지정.',
          zhCN:'LTS Target Parameter——①以Top ROI为基准到Bottom ROI的距离,②Top、Bottom ROI目前的上下左右座标,③以Top ROI为基准设定Bottom ROI的位置。',
          zhTW:'LTS Target Parameter——①以Top ROI為基準到Bottom ROI的距離,②Top、Bottom ROI目前的上下左右座標,③以Top ROI為基準設定Bottom ROI的位置。',
          ja:'LTS Target Parameter——①Top ROI基準でBottom ROIまでの距離、②Top・Bottom ROIの現在の上下左右座標、③Top ROIを基準にBottom ROIの位置を指定。'
        }}
      ]
    }
  },
  I:{
    smtv:{
      title:{ko:'I. Advanced Troubleshooting / Data Verification',en:'I. Advanced Troubleshooting / Data Verification',zhCN:'I. Advanced Troubleshooting / Data Verification',zhTW:'I. Advanced Troubleshooting / Data Verification',ja:'I. Advanced Troubleshooting / Data Verification'},
      slides:[
        {img:cmImg('J','smtv',1),tx:{
          vi:'Đề cập đến thiết lập HW (PC, Camera, Controller), tinh chỉnh Module quang học 2D/3D, và xác minh Data.',
          ko:'HW(PC, Camera, Controller) 설정, 2D/3D 광학 Module Tuning, Data 검증을 다룹니다.',
          en:'Covers HW (PC, Camera, Controller) setup, 2D/3D optical Module Tuning, and Data verification.',
          zhCN:'涵盖HW(PC、Camera、Controller)设置、2D/3D光学Module Tuning、Data验证。',
          zhTW:'涵蓋HW(PC、Camera、Controller)設定、2D/3D光學Module Tuning、Data驗證。',
          ja:'HW(PC、Camera、Controller)設定、2D/3D光学Module Tuning、Data検証を扱います。'
        }},
        {img:cmImg('J','smtv',2),tx:{
          vi:'Tốc độ·Parameter theo từng trục\n\n1. Trong tab Host P/G ▸ Handler ▸ Motor, thiết lập tốc độ 3 cấp Low/Middle/High và gia/giảm tốc.\n2. Giá trị tốc độ mặc định khác nhau theo thiết bị/khách hàng — tham khảo giá trị mặc định của SMTV và điều chỉnh theo hiện trường khi cần.\n3. Trong Handler ▸ Map, kiểm tra và điều chỉnh riêng Parameter theo từng Module: Elevator/Picker/Aligner/JIG/FINS·SINS/Inspector/Multi Sorter/Indexer, v.v.',
          en:'Speed·Parameter per axis\n\n1. In Host P/G ▸ Handler ▸ Motor tab, set the Low/Middle/High 3-stage speed and acceleration/deceleration.\n2. Default speed values differ per equipment/customer — refer to the SMTV default and adjust to the site as needed.\n3. In Handler ▸ Map, individually check and adjust Parameters per module: Elevator/Picker/Aligner/JIG/FINS·SINS/Inspector/Multi Sorter/Indexer, etc.',
          ko:'축별 속도·Parameter\n\n1. Host P/G ▸ Handler ▸ Motor 탭에서 Low/Middle/High 3단계 속도·가감속 설정.\n2. 기본 속도값은 설비/고객사마다 다름 — SMTV 기본값 참고 후 현장에 맞게 조정.\n3. Handler ▸ Map에서 Elevator/Picker/Aligner/JIG/FINS·SINS/Inspector/Multi Sorter/Indexer 등 모듈별 Parameter 개별 확인·조정.',
          zhCN:'按轴设置速度·Parameter\n\n1. 在Host P/G ▸ Handler ▸ Motor标签页设置Low/Middle/High三段速度·加减速。\n2. 默认速度值因设备/客户而异——参考SMTV默认值后依现场情况调整。\n3. 在Handler ▸ Map中逐一确认·调整Elevator/Picker/Aligner/JIG/FINS·SINS/Inspector/Multi Sorter/Indexer等各模块Parameter。',
          zhTW:'依軸設定速度·Parameter\n\n1. 在Host P/G ▸ Handler ▸ Motor標籤頁設定Low/Middle/High三段速度·加減速。\n2. 預設速度值因設備/客戶而異——參考SMTV預設值後依現場情況調整。\n3. 在Handler ▸ Map中逐一確認·調整Elevator/Picker/Aligner/JIG/FINS·SINS/Inspector/Multi Sorter/Indexer等各模組Parameter。',
          ja:'軸別速度·Parameter\n\n1. Host P/G ▸ Handler ▸ MotorタブでLow/Middle/Highの3段階速度・加減速を設定する。\n2. デフォルト速度値は設備/顧客ごとに異なる — SMTVデフォルト値を参考にし現場に合わせて調整する。\n3. Handler ▸ MapでElevator/Picker/Aligner/JIG/FINS・SINS/Inspector/Multi Sorter/Indexerなどモジュールごとのパラメータを個別に確認・調整する。'
        }},
        {img:cmImg('J','smtv',3),tx:{
          vi:'Nguyên lý điều khiển Step Motor·tính Pulse/um trục Z\n\n1. CW = tín hiệu tốc độ/góc quay, CCW = tín hiệu thuận/nghịch, dùng để điều khiển Step Motor.\n2. Function Setting Switch (SW1): No.1 (R1/R2) đặt Step Angle, No.2 (2P/1P) đặt kiểu nhập Pulse, No.3 (OFF/FIL) đặt Command Filter.\n3. Ngoài STEP Dial, cũng cần đặt Dial RUN (dòng điện chạy) và STOP (dòng điện dừng).\n4. Kiểm tra Ball Screw Pitch của trục Z (khoảng cách di chuyển mỗi vòng quay). (VD: 5mm/vòng)\n5. Dial 9 (trước Reducer) → Step Angle 0.018° → cần 20.000 pulse mỗi vòng (=360°/0.018°). Dial 6 (sau) → Step Angle 0.072° → cần 5.000 pulse mỗi vòng.\n6. Dùng tỷ lệ (Ball Screw Pitch : độ phân giải Motor = 1um : χ) để tính số Pulse (χ) cần để di chuyển 1um.\n7. Với Dial 9: χ = 1um×20.000pulse / 5mm(5.000um) = 4pulse/um → với Reducer 10:1, thành 40pulse/um.\n8. Với Dial 6: χ = 1um×5.000pulse / 5mm(5.000um) = 1pulse/um → với Reducer 10:1, thành 10pulse/um.',
          en:'Step Motor driving principle·Z-axis Pulse/um calculation\n\n1. CW = rotation speed/angle signal, CCW = forward/reverse signal, drive the Step Motor.\n2. Function Setting Switch (SW1): No.1 (R1/R2) sets the Step Angle, No.2 (2P/1P) sets the pulse input mode, No.3 (OFF/FIL) sets the Command Filter.\n3. Besides the STEP Dial, also set the RUN (drive current) and STOP (standstill current) Dials.\n4. Check the Z-axis Ball Screw Pitch (distance moved per rotation). (E.g., 5mm/rotation)\n5. Dial 9 (before Reducer) → Step Angle 0.018° → needs 20,000 pulses per rotation (=360°/0.018°). Dial 6 (after) → Step Angle 0.072° → needs 5,000 pulses per rotation.\n6. Using the ratio (Ball Screw Pitch : Motor Resolution = 1um : χ), calculate the number of pulses (χ) needed to move 1um.\n7. For Dial 9: χ = 1um×20,000pulse / 5mm(5,000um) = 4pulse/um → with a 10:1 Reducer, 40pulse/um.\n8. For Dial 6: χ = 1um×5,000pulse / 5mm(5,000um) = 1pulse/um → with a 10:1 Reducer, 10pulse/um.',
          ko:'Step Motor 구동 원리·Z-axis(Z축) Pulse/um 계산\n\n1. CW=회전속도·각도 신호, CCW=정/역방향 신호로 Step Motor를 구동한다.\n2. Function Setting Switch(SW1)의 No.1(R1/R2)로 Step Angle을, No.2(2P/1P)로 Pulse 입력 방식을, No.3(OFF/FIL)으로 Command Filter를 설정한다.\n3. STEP Dial 외에 RUN(구동 전류)·STOP(정지 전류) Dial도 함께 설정한다.\n4. Z-axis(Z축) Ball Screw Pitch(1회전당 이동 거리)를 확인한다. (예: 5mm/회전)\n5. Dial 9(Reducer 적용 전) → Step Angle 0.018° → 1회전당 20,000pulse(=360°/0.018°) 필요. Dial 6(적용 후) → Step Angle 0.072° → 1회전당 5,000pulse 필요.\n6. 비례식(Ball Screw Pitch : Motor 분해능 = 1um : χ)으로 1um 이동에 필요한 Pulse수(χ)를 계산한다.\n7. Dial 9 기준: χ = 1um×20,000pulse / 5mm(5,000um) = 4pulse/um → Reducer(10:1) 적용 시 40pulse/um.\n8. Dial 6 기준: χ = 1um×5,000pulse / 5mm(5,000um) = 1pulse/um → Reducer(10:1) 적용 시 10pulse/um.',
          zhCN:'Step Motor驱动原理·Z-axis Pulse/um计算\n\n1. CW=转速·角度信号,CCW=正/反方向信号,驱动Step Motor。\n2. Function Setting Switch(SW1)的No.1(R1/R2)设置Step Angle,No.2(2P/1P)设置Pulse输入方式,No.3(OFF/FIL)设置Command Filter。\n3. 除STEP Dial外,还需一并设置RUN(驱动电流)·STOP(停止电流)Dial。\n4. 确认Z-axis Ball Screw Pitch(每转移动距离)。(例:5mm/转)\n5. Dial 9(应用Reducer前)→ Step Angle 0.018°→ 每转需20,000pulse(=360°/0.018°)。Dial 6(应用后)→ Step Angle 0.072°→ 每转需5,000pulse。\n6. 通过比例式(Ball Screw Pitch : Motor分辨率 = 1um : χ)计算移动1um所需的Pulse数(χ)。\n7. 以Dial 9为准:χ = 1um×20,000pulse / 5mm(5,000um) = 4pulse/um → 应用Reducer(10:1)后为40pulse/um。\n8. 以Dial 6为准:χ = 1um×5,000pulse / 5mm(5,000um) = 1pulse/um → 应用Reducer(10:1)后为10pulse/um。',
          zhTW:'Step Motor驅動原理·Z-axis Pulse/um計算\n\n1. CW=轉速·角度訊號,CCW=正/反方向訊號,驅動Step Motor。\n2. Function Setting Switch(SW1)的No.1(R1/R2)設定Step Angle,No.2(2P/1P)設定Pulse輸入方式,No.3(OFF/FIL)設定Command Filter。\n3. 除STEP Dial外,還需一併設定RUN(驅動電流)·STOP(停止電流)Dial。\n4. 確認Z-axis Ball Screw Pitch(每轉移動距離)。(例:5mm/轉)\n5. Dial 9(套用Reducer前)→ Step Angle 0.018°→ 每轉需20,000pulse(=360°/0.018°)。Dial 6(套用後)→ Step Angle 0.072°→ 每轉需5,000pulse。\n6. 透過比例式(Ball Screw Pitch : Motor解析度 = 1um : χ)計算移動1um所需的Pulse數(χ)。\n7. 以Dial 9為準:χ = 1um×20,000pulse / 5mm(5,000um) = 4pulse/um → 套用Reducer(10:1)後為40pulse/um。\n8. 以Dial 6為準:χ = 1um×5,000pulse / 5mm(5,000um) = 1pulse/um → 套用Reducer(10:1)後為10pulse/um。',
          ja:'Step Motor駆動原理・Z-axis Pulse/um計算\n\n1. CW=回転速度・角度信号、CCW=正/逆方向信号でStep Motorを駆動する。\n2. Function Setting Switch(SW1)のNo.1(R1/R2)でStep Angleを、No.2(2P/1P)でPulse入力方式を、No.3(OFF/FIL)でCommand Filterを設定する。\n3. STEP Dialのほか、RUN(駆動電流)・STOP(停止電流)Dialも併せて設定する。\n4. Z-axis(Z軸) Ball Screw Pitch(1回転あたりの移動距離)を確認する。(例:5mm/回転)\n5. Dial 9(Reducer適用前)→ Step Angle 0.018°→ 1回転あたり20,000pulse(=360°/0.018°)必要。Dial 6(適用後)→ Step Angle 0.072°→ 1回転あたり5,000pulse必要。\n6. 比例式(Ball Screw Pitch:Motor分解能=1um:χ)で1um移動に必要なPulse数(χ)を計算する。\n7. Dial 9基準:χ=1um×20,000pulse / 5mm(5,000um)=4pulse/um → Reducer(10:1)適用時40pulse/um。\n8. Dial 6基準:χ=1um×5,000pulse / 5mm(5,000um)=1pulse/um → Reducer(10:1)適用時10pulse/um。'
        }},
        {img:cmImg('J','smtv',4),tx:{
          vi:'Nguyên lý duy trì Focus\n\n1. Make0 = chỉ định vị trí Motor hiện tại làm vị trí Focus chuẩn — tiếp tục lấy ảnh bằng Sensor Camera để duy trì khoảng cách đã chỉ định.\n2. Phương pháp tam giác quang học, Capture Range ±1500um, Focus Update Rate 2KHz.\n3. Kiểm tra khác biệt đấu dây giữa phiên bản mới/cũ (Laser Camera Link/Power, Ethernet, RS232, Motor Driver/Limit Sensor Connector).',
          en:'Focus maintenance principle\n\n1. Make0 = designates the current Motor position as the reference Focus position — continues acquiring images with the Sensor Camera to maintain the specified distance.\n2. Optical triangulation method, Capture Range ±1500um, Focus Update Rate 2KHz.\n3. Check the wiring differences between new/old versions (Laser Camera Link/Power, Ethernet, RS232, Motor Driver/Limit Sensor Connector).',
          ko:'Focus 유지 원리\n\n1. Make0 = 현재 Motor 위치를 기준 Focus 위치로 지정 — Sensor Camera로 이미지를 계속 획득하며 지정 거리 유지.\n2. 광학 삼각측량 방식, Capture Range ±1500um, Focus Update Rate 2KHz.\n3. 신/구버전 배선 차이 확인(Laser Camera Link/Power, Ethernet, RS232, Motor Driver/Limit Sensor Connector).',
          zhCN:'Focus维持原理\n\n1. Make0 = 将当前Motor位置指定为基准Focus位置——持续用Sensor Camera获取影像以维持指定距离。\n2. 光学三角测量方式,Capture Range ±1500um,Focus Update Rate 2KHz。\n3. 确认新/旧版本的接线差异(Laser Camera Link/Power、Ethernet、RS232、Motor Driver/Limit Sensor Connector)。',
          zhTW:'Focus維持原理\n\n1. Make0 = 將目前Motor位置指定為基準Focus位置——持續用Sensor Camera取得影像以維持指定距離。\n2. 光學三角測量方式,Capture Range ±1500um,Focus Update Rate 2KHz。\n3. 確認新/舊版本的接線差異(Laser Camera Link/Power、Ethernet、RS232、Motor Driver/Limit Sensor Connector)。',
          ja:'Focus維持原理\n\n1. Make0 = 現在のMotor位置を基準Focus位置として指定——Sensor Cameraで画像を取得し続け指定距離を維持する。\n2. 光学三角測量方式、Capture Range ±1500um、Focus Update Rate 2KHz。\n3. 新/旧バージョンの配線の違いを確認する(Laser Camera Link/Power、Ethernet、RS232、Motor Driver/Limit Sensor Connector)。'
        }},
        {img:cmImg('J','smtv',5),tx:{
          vi:'Parameter iAFCTRL/CLCtrl2\n\n1. Kiểm tra phiên bản Firmware của AF1·AF2(·AF3) bằng iSAFProgram và cập nhật nếu cần.\n2. Qua iAFCTRL (kết nối Ethernet) → CLCtrl2, Read & điều chỉnh Camera Parameter như Trigger Mode·Shutter·Gain·Partial Lines.\n3. AF1·AF2 (và AF3 cho đơn vị 67M 2D-only) nên đặt cùng giá trị; sau khi thay đổi, lưu qua Register→EEPROM.',
          en:'iAFCTRL/CLCtrl2 Parameters\n\n1. Check the AF1·AF2(·AF3) Firmware version with iSAFProgram and update if needed.\n2. Via iAFCTRL (Ethernet connection) → CLCtrl2, Read & adjust Camera Parameters such as Trigger Mode·Shutter·Gain·Partial Lines.\n3. AF1·AF2 (and AF3 for the 67M 2D-only unit) should be set to the same values; after changes, save via Register→EEPROM.',
          ko:'iAFCTRL/CLCtrl2 Parameter\n\n1. iSAFProgram으로 AF1·AF2(·AF3) Firmware 버전 확인 후 필요시 업데이트.\n2. iAFCTRL(Ethernet 연결) → CLCtrl2로 Trigger Mode·Shutter·Gain·Partial Lines 등 Camera Parameter Read & 조정.\n3. AF1·AF2(·67M 2D 전용 AF3)는 동일 값으로 설정, 변경 후 Register→EEPROM으로 저장.',
          zhCN:'iAFCTRL/CLCtrl2 Parameter\n\n1. 用iSAFProgram确认AF1·AF2(·AF3)的Firmware版本,必要时更新。\n2. 通过iAFCTRL(Ethernet连接)→CLCtrl2对Trigger Mode·Shutter·Gain·Partial Lines等Camera Parameter进行Read及调整。\n3. AF1·AF2(·仅67M 2D专用的AF3)应设为相同值,变更后通过Register→EEPROM保存。',
          zhTW:'iAFCTRL/CLCtrl2 Parameter\n\n1. 用iSAFProgram確認AF1·AF2(·AF3)的Firmware版本,必要時更新。\n2. 透過iAFCTRL(Ethernet連接)→CLCtrl2對Trigger Mode·Shutter·Gain·Partial Lines等Camera Parameter進行Read及調整。\n3. AF1·AF2(·僅67M 2D專用的AF3)應設為相同值,變更後透過Register→EEPROM儲存。',
          ja:'iAFCTRL/CLCtrl2 Parameter\n\n1. iSAFProgramでAF1·AF2(·AF3)のFirmwareバージョンを確認し、必要に応じて更新する。\n2. iAFCTRL(Ethernet接続)→CLCtrl2でTrigger Mode·Shutter·Gain·Partial LinesなどのCamera ParameterをRead&調整する。\n3. AF1·AF2(・67M 2D専用のAF3)は同一値に設定し、変更後Register→EEPROMで保存する。'
        }},
        {img:cmImg('J','smtv',6),tx:{
          vi:'Khởi tạo·tinh chỉnh Servo E-754\n\n1. Kết nối PC-PZT qua USB Mini B → chạy PIMikroMove → khởi tạo bằng Auto Zero·Servo On·Home.\n2. Dao động Current Position 2~30nm là bình thường; nếu vượt 100nm cần Dynamic Tune.\n3. Trong Dynamic Tuner, đặt Notch Frequency/Rejection, xác nhận không rung qua Step Response, sau đó lưu vào EEPROM.',
          en:'E-754 servo initialization·tuning\n\n1. Connect PC-PZT via USB Mini B → run PIMikroMove → initialize with Auto Zero·Servo On·Home.\n2. Current Position fluctuation of 2~30nm is normal; if it exceeds 100nm, Dynamic Tune is needed.\n3. In the Dynamic Tuner, set the Notch Frequency/Rejection, confirm no vibration via Step Response, then save to EEPROM.',
          ko:'E-754 서보 초기화·튜닝\n\n1. USB Mini B로 PC-PZT 연결 → PIMikroMove 실행 → Auto Zero·Servo On·Home으로 초기화.\n2. Current Position 흔들림 2~30nm는 정상, 100nm 초과 시 Dynamic Tune 필요.\n3. Dynamic Tuner에서 Notch Frequency/Rejection 설정 후 Step Response로 진동 없음 확인, EEPROM 저장.',
          zhCN:'E-754伺服初始化·调谐\n\n1. 用USB Mini B连接PC-PZT → 运行PIMikroMove → 通过Auto Zero·Servo On·Home初始化。\n2. Current Position波动2~30nm为正常,超过100nm则需要Dynamic Tune。\n3. 在Dynamic Tuner中设置Notch Frequency/Rejection,通过Step Response确认无振动,保存至EEPROM。',
          zhTW:'E-754伺服初始化·調諧\n\n1. 用USB Mini B連接PC-PZT → 執行PIMikroMove → 透過Auto Zero·Servo On·Home初始化。\n2. Current Position波動2~30nm為正常,超過100nm則需要Dynamic Tune。\n3. 在Dynamic Tuner中設定Notch Frequency/Rejection,透過Step Response確認無振動,儲存至EEPROM。',
          ja:'E-754サーボ初期化・チューニング\n\n1. USB Mini BでPC-PZTを接続 → PIMikroMoveを実行 → Auto Zero・Servo On・Homeで初期化する。\n2. Current Positionの揺れ2~30nmは正常、100nmを超える場合はDynamic Tuneが必要。\n3. Dynamic TunerでNotch Frequency/Rejectionを設定後、Step Responseで振動がないことを確認し、EEPROMに保存する。'
        }},
        {img:cmImg('J','smtv',7),tx:{
          vi:'PID Tuning\n\n1. Sau khi Servo On qua nFControl, xác nhận hoạt động bình thường tại từng vị trí Stage. (Cần Closed-loop soft-high-limit=300/600; nếu =0 sẽ không hoạt động.)\n2. PID-Tuning: kiểm tra LP-Filter (IIR 200Hz) → vừa xem đồ thị vừa tìm giá trị tối ưu, theo thứ tự P-term(0.01~0.1)·I-term(~100, không dùng D-term).\n3. Mục tiêu: đến đích nhanh, không rung, không Overshoot — sau khi hoàn tất, Save parameter as default.',
          en:'PID Tuning\n\n1. After Servo On via nFControl, confirm normal operation at each Stage position. (Closed-loop soft-high-limit=300/600 is required; 0 means it won\'t operate.)\n2. PID-Tuning: check the LP-Filter (IIR 200Hz) → find the optimal value while watching the graph, in the order P-term(0.01~0.1)·I-term(~100, don\'t use D-term).\n3. Goal: reach the target quickly, without vibration, without overshoot — once done, Save parameter as default.',
          ko:'PID 튜닝\n\n1. nFControl로 Servo On 후 Stage 위치별 정상 동작 확인 (Closed-loop soft-high-limit=300/600 필수, 0이면 미동작).\n2. PID-Tuning: LP-Filter(IIR 200Hz) 확인 → P-term(0.01~0.1)·I-term(~100, D-term 사용금지) 순으로 그래프 보며 최적값 탐색.\n3. 목표: 빠르게·진동없이·오버슈트없이 도달 — 완료 후 Save parameter as default.',
          zhCN:'PID调谐\n\n1. 通过nFControl执行Servo On后,确认各Stage位置正常动作。(Closed-loop soft-high-limit=300/600为必需,若为0则不动作)\n2. PID-Tuning:确认LP-Filter(IIR 200Hz)→按P-term(0.01~0.1)·I-term(~100,禁止使用D-term)的顺序,边看图表边寻找最佳值。\n3. 目标:快速·无振动·无过冲到达——完成后Save parameter as default。',
          zhTW:'PID調諧\n\n1. 透過nFControl執行Servo On後,確認各Stage位置正常動作。(Closed-loop soft-high-limit=300/600為必需,若為0則不動作)\n2. PID-Tuning:確認LP-Filter(IIR 200Hz)→按P-term(0.01~0.1)·I-term(~100,禁止使用D-term)的順序,邊看圖表邊尋找最佳值。\n3. 目標:快速·無振動·無過衝到達——完成後Save parameter as default。',
          ja:'PIDチューニング\n\n1. nFControlでServo On後、Stage位置ごとに正常動作を確認する。(Closed-loop soft-high-limit=300/600必須、0だと動作しない)\n2. PID-Tuning:LP-Filter(IIR 200Hz)を確認 → P-term(0.01~0.1)・I-term(~100、D-termは使用禁止)の順にグラフを見ながら最適値を探る。\n3. 目標:速く・振動なく・オーバーシュートなく到達——完了後Save parameter as defaultする。'
        }},
        {img:cmImg('J','smtv',8),tx:{
          vi:'Cập nhật Board Firmware và kiểm tra chiếu sáng\n\n1. Program→Verify riêng biệt bằng AVR Studio (2D/3D Board) và Quartus Prime (EPM1270).\n2. Xác nhận điều khiển bình thường của chiếu sáng Oblique/Coaxial theo từng Channel bằng synctestpgm.\n\n⚠ Lưu ý — Flat Cable dây đỏ = Pin 1 — nguy cơ hư hỏng nếu đấu ngược',
          en:'Board Firmware update and illumination check\n\n1. Program→Verify separately with AVR Studio (2D/3D Board) and Quartus Prime (EPM1270).\n2. Confirm normal control of the Oblique/Coaxial illumination per channel with synctestpgm.\n\n⚠ Caution — Flat Cable red wire = Pin 1 — risk of damage if connected in reverse',
          ko:'Board Firmware 갱신 및 조명 확인\n\n1. AVR Studio(2D/3D Board)와 Quartus Prime(EPM1270)으로 각각 Program→Verify 진행.\n2. synctestpgm으로 Oblique/Coaxial 조명 Channel별 정상 제어 확인.\n\n⚠ 주의 — Flat Cable 빨간선=1번핀 — 반대로 연결 시 손상 위험',
          zhCN:'Board Firmware更新及照明确认\n\n1. 分别用AVR Studio(2D/3D Board)和Quartus Prime(EPM1270)进行Program→Verify。\n2. 用synctestpgm确认Oblique/Coaxial照明各Channel正常控制。\n\n⚠ 注意——Flat Cable红线=1号Pin——反向连接有损坏风险',
          zhTW:'Board Firmware更新及照明確認\n\n1. 分別用AVR Studio(2D/3D Board)和Quartus Prime(EPM1270)進行Program→Verify。\n2. 用synctestpgm確認Oblique/Coaxial照明各Channel正常控制。\n\n⚠ 注意——Flat Cable紅線=1號Pin——反向連接有損壞風險',
          ja:'Board Firmware更新及び照明確認\n\n1. AVR Studio(2D/3D Board)とQuartus Prime(EPM1270)でそれぞれProgram→Verifyを行う。\n2. synctestpgmでOblique/Coaxial照明のChannelごとの正常制御を確認する。\n\n⚠ 注意 — Flat Cableの赤線=1番ピン — 逆に接続すると破損の危険'
        }},
        {img:cmImg('J','smtv',9),tx:{
          vi:'Thiết lập Firmware·Channel dòng iGrab\n\n1. Cập nhật Firmware bằng iGrabXEProgrammer → đặt Channel (Ch_x4/x8) và Memory (50MB) bằng iGrabGConfig → Apply/Reboot.\n2. Kết nối qua Xml bằng iCamCommXE và áp dụng Guru Mode Parameter.\n3. Trong iGrabXECompact, tải Master.XCF và xác nhận Live FPS khớp Spec bằng F/G Trigger.',
          en:'iGrab-series Firmware·Channel settings\n\n1. Update Firmware with iGrabXEProgrammer → set Channel (Ch_x4/x8) and Memory (50MB) with iGrabGConfig → Apply/Reboot.\n2. Connect via Xml with iCamCommXE and apply Guru Mode Parameters.\n3. In iGrabXECompact, load Master.XCF and confirm the Live FPS matches spec using the F/G Trigger.',
          ko:'iGrab 계열 Firmware·Channel 설정\n\n1. iGrabXEProgrammer로 Firmware 최신화 → iGrabGConfig로 Channel(Ch_x4/x8) 및 Memory(50MB) 설정 → Apply/Reboot.\n2. iCamCommXE로 Xml 연결, Guru Mode Parameter 적용.\n3. iGrabXECompact에서 Master.XCF 로드, F/G Trigger로 Live FPS가 Spec과 일치하는지 확인.',
          zhCN:'iGrab系列Firmware·Channel设置\n\n1. 用iGrabXEProgrammer更新Firmware → 用iGrabGConfig设置Channel(Ch_x4/x8)及Memory(50MB) → Apply/Reboot。\n2. 用iCamCommXE进行Xml连接,应用Guru Mode Parameter。\n3. 在iGrabXECompact中加载Master.XCF,用F/G Trigger确认Live FPS是否与Spec一致。',
          zhTW:'iGrab系列Firmware·Channel設定\n\n1. 用iGrabXEProgrammer更新Firmware → 用iGrabGConfig設定Channel(Ch_x4/x8)及Memory(50MB) → Apply/Reboot。\n2. 用iCamCommXE進行Xml連接,套用Guru Mode Parameter。\n3. 在iGrabXECompact中載入Master.XCF,用F/G Trigger確認Live FPS是否與Spec一致。',
          ja:'iGrabシリーズFirmware·Channel設定\n\n1. iGrabXEProgrammerでFirmwareを最新化 → iGrabGConfigでChannel(Ch_x4/x8)及びMemory(50MB)を設定 → Apply/Reboot。\n2. iCamCommXEでXml接続し、Guru Mode Parameterを適用する。\n3. iGrabXECompactでMaster.XCFをロードし、F/G TriggerでLive FPSがSpecと一致するか確認する。'
        }},
        {img:cmImg('J','smtv',10),tx:{
          vi:'Căn chỉnh đường chuẩn với Center Cross Mark (Spec: trong 10um)\n\n1. Đặt Reference Tray lên Good Rail.\n2. Trong 2D Vision Program, nhấn Illumination 1st....\n3. Bật chiếu sáng và điều chỉnh vị trí Tray để thấy được Reference Line.\n4. Nhấp chuột phải vào màn hình để kích hoạt Center Cross Mark.\n5. Phóng to để kiểm tra khoảng cách giữa Reference Line và Center Cross Mark. (Spec: trong 10um)',
          en:'Align the reference line with the Center Cross Mark (Spec: within 10um)\n\n1. Place the Reference Tray on the Good Rail.\n2. In the 2D Vision Program, click Illumination 1st....\n3. Turn on the illumination and adjust the Tray position so the Reference Line is visible.\n4. Right-click the screen to activate the Center Cross Mark.\n5. Zoom in to check the gap between the Reference Line and the Center Cross Mark. (Spec: within 10um)',
          ko:'기준선-Center Cross Mark 정렬 (Spec 10um 이내)\n\n1. Good Rail에 Reference Tray를 올린다.\n2. 2D Vision Program에서 Illumination 1st...를 클릭한다.\n3. 조명을 켜고, 기준선(Reference Line)이 보이도록 Tray 위치를 맞춘다.\n4. 화면을 우클릭해 Center Cross Mark를 활성화한다.\n5. 화면을 확대하여 기준선과 Center Cross Mark 사이 간격을 확인한다. (Spec: 10um 이내)',
          zhCN:'對準基准线与Center Cross Mark(Spec 10um以内)\n\n1. 在Good Rail上放置Reference Tray。\n2. 在2D Vision Program中点击Illumination 1st...。\n3. 打开照明,调整Tray位置使Reference Line可见。\n4. 右键点击画面激活Center Cross Mark。\n5. 放大画面确认Reference Line与Center Cross Mark间的间距。(Spec:10um以内)',
          zhTW:'對準基準線與Center Cross Mark(Spec 10um以內)\n\n1. 在Good Rail上放置Reference Tray。\n2. 在2D Vision Program中點擊Illumination 1st...。\n3. 開啟照明,調整Tray位置使Reference Line可見。\n4. 右鍵點擊畫面啟動Center Cross Mark。\n5. 放大畫面確認Reference Line與Center Cross Mark間的間距。(Spec:10um以內)',
          ja:'基準線とCenter Cross Markの整列(Spec 10um以内)\n\n1. Good RailにReference Trayを載せる。\n2. 2D Vision ProgramでIllumination 1st...をクリックする。\n3. 照明を点け、基準線(Reference Line)が見えるようTray位置を合わせる。\n4. 画面を右クリックしてCenter Cross Markを有効化する。\n5. 画面を拡大し、基準線とCenter Cross Markの間隔を確認する。(Spec:10um以内)'
        }},
        {img:cmImg('J','smtv',11),tx:{
          vi:'Illumination Frame ↔ đỉnh Object: 11mm\n\n1. Với 2D Camera (12M), đảm bảo khoảng cách từ Illumination Frame đến đỉnh Object (Unit) là 11mm.\n2. Di chuyển chiều cao Illumination Frame bằng trục Z để khớp.\n3. Sau khi chỉnh chiều cao, điều chỉnh lại vị trí Camera đến khi Focus của Unit đúng.',
          en:'Illumination Frame ↔ Object top: 11mm\n\n1. For the 2D Camera (12M), ensure the distance from the Illumination Frame to the top of the Object (Unit) is 11mm.\n2. Move the Illumination Frame height with the Z-axis to match.\n3. After adjusting the height, re-adjust the Camera position to where the Unit\'s Focus is correct.',
          ko:'Illumination Frame ↔ Object 상단 11mm\n\n1. 2D Camera(12M) 기준, Illumination Frame에서 Object(Unit) 상단까지 거리가 11mm가 되도록 한다.\n2. Z-axis(Z축)로 Illumination Frame 높이를 움직여 맞춘다.\n3. 높이 조정이 끝나면, Unit의 Focus(초점)가 맞는 위치로 Camera 위치를 다시 조정한다.',
          zhCN:'Illumination Frame与Object上端间距11mm\n\n1. 以2D Camera(12M)为基准,使Illumination Frame到Object(Unit)上端的距离为11mm。\n2. 用Z-axis移动Illumination Frame高度以对准。\n3. 高度调整完成后,重新调整Camera位置至Unit对焦准确的位置。',
          zhTW:'Illumination Frame與Object上端間距11mm\n\n1. 以2D Camera(12M)為基準,使Illumination Frame到Object(Unit)上端的距離為11mm。\n2. 用Z-axis移動Illumination Frame高度以對準。\n3. 高度調整完成後,重新調整Camera位置至Unit對焦準確的位置。',
          ja:'Illumination FrameとObject上端の距離11mm\n\n1. 2D Camera(12M)基準で、Illumination FrameからObject(Unit)上端までの距離が11mmになるようにする。\n2. Z-axis(Z軸)でIllumination Frameの高さを動かして合わせる。\n3. 高さ調整が終わったら、UnitのFocus(焦点)が合う位置にCamera位置を再調整する。'
        }},
        {img:cmImg('J','smtv',12),tx:{
          vi:'Điều chỉnh lại Bolt Lens-Camera\n\n1. Nới lỏng Bolt cố định Lens và Camera.\n2. Di chuyển Camera và Lens đến vị trí Focus đúng.\n3. Siết lại Bolt để vị trí Camera không bị lệch.\n\nĐiểm cần kiểm tra — Ảnh có Focus lệch lên hoặc xuống đều là Bad — phải đúng chính xác mới là Good',
          en:'Re-adjust the Lens-Camera Bolt\n\n1. Loosen the Bolt that secures the Lens and Camera.\n2. Move the Camera and Lens to the position where Focus is correct.\n3. Re-fasten the Bolt so the Camera position doesn\'t shift.\n\nCheck point — Images with the focus skewed up or down are all Bad — it must be exactly right to be Good',
          ko:'Lens-Camera Bolt 재조정\n\n1. Lens와 Camera를 고정하는 Bolt를 푼다.\n2. Camera와 Lens를 Focus(초점)가 맞는 위치로 이동한다.\n3. Camera 위치가 변하지 않도록 Bolt를 다시 체결한다.\n\n확인 포인트 — 위/아래로 초점이 치우친 이미지는 모두 Bad — 정확히 맞아야 Good',
          zhCN:'重新调整Lens-Camera的Bolt\n\n1. 松开固定Lens与Camera的Bolt。\n2. 将Camera与Lens移动到Focus(焦点)对准的位置。\n3. 重新锁紧Bolt,使Camera位置不再变动。\n\n确认要点——焦点上下偏移的影像均为Bad——需精确对准才是Good',
          zhTW:'重新調整Lens-Camera的Bolt\n\n1. 鬆開固定Lens與Camera的Bolt。\n2. 將Camera與Lens移動到Focus(焦點)對準的位置。\n3. 重新鎖緊Bolt,使Camera位置不再變動。\n\n確認要點——焦點上下偏移的影像均為Bad——需精確對準才是Good',
          ja:'Lens-Camera Boltの再調整\n\n1. LensとCameraを固定するBoltを緩める。\n2. CameraとLensをFocus(焦点)が合う位置に移動する。\n3. Camera位置が変わらないようBoltを再度締結する。\n\n確認ポイント — 上下にピントがずれた画像はすべてBad — 正確に合っていればGood'
        }},
        {img:cmImg('J','smtv',13),tx:{
          vi:'2D Scale Calibration dựa trên Grid(Matrix) Target\n\n1. Đặt Reference Tray lên Good Rail và di chuyển để thấy tâm Grid(Matrix) Target.\n2. Đặt vị trí dựa trên 4 điểm tại tâm Grid(Matrix) Target.\n3. Chạy Vision Manager ▸ Calibration & Analysis ▸ V3 2D Scale Calibration.\n4. Điều chỉnh chiếu sáng để hiện Target, nhấn Calibrate, và kiểm tra kết quả tính toán.\n5. Nhấn Apply Calibration để lưu giá trị.\n6. Mở file System trong thư mục config để xác nhận kết quả đã áp dụng đúng.',
          en:'2D Scale Calibration based on the Grid(Matrix) Target\n\n1. Place the Reference Tray on the Good Rail and move it so the Grid(Matrix) Target center is visible.\n2. Set the position based on 4 points on the Grid(Matrix) Target center.\n3. Run Vision Manager ▸ Calibration & Analysis ▸ V3 2D Scale Calibration.\n4. Adjust the illumination so the Target is displayed, click Calibrate, and check the calculated result.\n5. Click Apply Calibration to save the value.\n6. Open the System file in the config folder to confirm the result was applied correctly.',
          ko:'Grid(Matrix) Target 기준 2D Scale Calibration\n\n1. Good Rail에 Reference Tray를 올리고, Grid(Matrix) Target 중심이 보이도록 Tray 위치를 이동한다.\n2. Grid(Matrix) Target 중심 위 4개 지점을 기준으로 위치를 설정한다.\n3. Vision Manager ▸ Calibration & Analysis ▸ V3 2D Scale Calibration을 실행한다.\n4. 조명값을 조정해 Target이 표시되도록 하고, Calibrate 클릭 후 계산 결과를 확인한다.\n5. Apply Calibration을 클릭해 값을 저장한다.\n6. config 폴더의 System 파일을 열어 결과값이 정상 반영되었는지 확인한다.',
          zhCN:'以Grid(Matrix) Target为基准的2D Scale Calibration\n\n1. 在Good Rail上放置Reference Tray,移动Tray使Grid(Matrix) Target中心可见。\n2. 以Grid(Matrix) Target中心上的4个点为基准设置位置。\n3. 执行Vision Manager ▸ Calibration & Analysis ▸ V3 2D Scale Calibration。\n4. 调整照明值使Target显示,点击Calibrate后确认计算结果。\n5. 点击Apply Calibration保存数值。\n6. 打开config文件夹中的System文件,确认结果是否正常反映。',
          zhTW:'以Grid(Matrix) Target為基準的2D Scale Calibration\n\n1. 在Good Rail上放置Reference Tray,移動Tray使Grid(Matrix) Target中心可見。\n2. 以Grid(Matrix) Target中心上的4個點為基準設定位置。\n3. 執行Vision Manager ▸ Calibration & Analysis ▸ V3 2D Scale Calibration。\n4. 調整照明值使Target顯示,點擊Calibrate後確認計算結果。\n5. 點擊Apply Calibration儲存數值。\n6. 開啟config資料夾中的System檔案,確認結果是否正常反映。',
          ja:'Grid(Matrix) Target基準の2D Scale Calibration\n\n1. Good RailにReference Trayを載せ、Grid(Matrix) Targetの中心が見えるようTray位置を移動する。\n2. Grid(Matrix) Target中心上の4地点を基準に位置を設定する。\n3. Vision Manager ▸ Calibration & Analysis ▸ V3 2D Scale Calibrationを実行する。\n4. 照明値を調整しTargetが表示されるようにし、Calibrateをクリックして計算結果を確認する。\n5. Apply Calibrationをクリックして値を保存する。\n6. configフォルダのSystemファイルを開き、結果が正常に反映されたか確認する。'
        }},
        {img:cmImg('J','smtv',14),tx:{
          vi:'Căn chỉnh đường chuẩn với Center Cross Mark (dựa trên Pedestal, Spec 10um)\n\n1. Lắp Pedestal lên Jig Indexer.\n2. Trong 3D Vision Program, nhấn Illumination 1st....\n3. Bật chiếu sáng và điều chỉnh vị trí Pedestal để thấy được đường chuẩn.\n4. Nhấp chuột phải vào màn hình để kích hoạt Center Cross Mark.\n5. Phóng to để kiểm tra khoảng cách giữa đường chuẩn và Center Cross Mark. (Spec: trong 10um)',
          en:'Align the reference line with the Center Cross Mark (Pedestal-based, Spec 10um)\n\n1. Install the Pedestal on the Jig Indexer.\n2. In the 3D Vision Program, click Illumination 1st....\n3. Turn on the illumination and adjust the Pedestal position so the reference line is visible.\n4. Right-click the screen to activate the Center Cross Mark.\n5. Zoom in to check the gap between the reference line and the Center Cross Mark. (Spec: within 10um)',
          ko:'기준선-Center Cross Mark 정렬 (Pedestal 기준, Spec 10um)\n\n1. Jig Indexer에 Pedestal을 설치한다.\n2. 3D Vision Program에서 Illumination 1st...를 클릭한다.\n3. 조명을 켜고, 기준선이 보이도록 Pedestal 위치를 맞춘다.\n4. 화면을 우클릭해 Center Cross Mark를 활성화한다.\n5. 화면을 확대하여 기준선과 Center Cross Mark 사이 간격을 확인한다. (Spec: 10um 이내)',
          zhCN:'對準基准线与Center Cross Mark(以Pedestal为基准,Spec 10um)\n\n1. 在Jig Indexer上安装Pedestal。\n2. 在3D Vision Program中点击Illumination 1st...。\n3. 打开照明,调整Pedestal位置使基准线可见。\n4. 右键点击画面激活Center Cross Mark。\n5. 放大画面确认基准线与Center Cross Mark间的间距。(Spec:10um以内)',
          zhTW:'對準基準線與Center Cross Mark(以Pedestal為基準,Spec 10um)\n\n1. 在Jig Indexer上安裝Pedestal。\n2. 在3D Vision Program中點擊Illumination 1st...。\n3. 開啟照明,調整Pedestal位置使基準線可見。\n4. 右鍵點擊畫面啟動Center Cross Mark。\n5. 放大畫面確認基準線與Center Cross Mark間的間距。(Spec:10um以內)',
          ja:'基準線とCenter Cross Markの整列(Pedestal基準、Spec 10um)\n\n1. Jig IndexerにPedestalを設置する。\n2. 3D Vision ProgramでIllumination 1st...をクリックする。\n3. 照明を点け、基準線が見えるようPedestal位置を合わせる。\n4. 画面を右クリックしてCenter Cross Markを有効化する。\n5. 画面を拡大し、基準線とCenter Cross Markの間隔を確認する。(Spec:10um以内)'
        }},
        {img:cmImg('J','smtv',15),tx:{
          vi:'Lens-Cube B/S 7.7mm·Illumination Frame-Object 11mm\n\n1. Dùng khoảng cách 7.7mm từ Lens đến đỉnh Cube B/S (Beam Splitter) làm chuẩn.\n2. Dùng khoảng cách 11mm từ Illumination Frame đến đỉnh Object (Unit) làm chuẩn.\n3. Hoàn thành Main Camera Focus trước, sau đó điều chỉnh chiều cao Illumination Frame.\n4. Camera Focus được điều chỉnh bằng trục Z của Vision Module.',
          en:'Lens-Cube B/S 7.7mm·Illumination Frame-Object 11mm\n\n1. Use a distance of 7.7mm from the Lens to the top of the Cube B/S (Beam Splitter) as the standard.\n2. Use a distance of 11mm from the Illumination Frame to the top of the Object (Unit) as the standard.\n3. Complete the Main Camera Focus first, then adjust the Illumination Frame height.\n4. Camera Focus is adjusted using the Vision Module\'s Z-axis.',
          ko:'Lens-Cube B/S 7.7mm·Illumination Frame-Object 11mm\n\n1. Lens에서 Cube B/S(Beam Splitter) 상단까지 거리 7.7mm를 기준으로 한다.\n2. Illumination Frame에서 Object(Unit) 상단까지 거리 11mm를 기준으로 한다.\n3. Main Camera Focus 작업을 먼저 완료한 뒤, Illumination Frame 높이를 조정한다.\n4. Camera Focus는 Vision Module의 Z-axis(Z축)를 사용해 맞춘다.',
          zhCN:'Lens-Cube B/S 7.7mm·Illumination Frame-Object 11mm\n\n1. 以Lens到Cube B/S(Beam Splitter)上端的距离7.7mm为基准。\n2. 以Illumination Frame到Object(Unit)上端的距离11mm为基准。\n3. 先完成Main Camera Focus作业,再调整Illumination Frame高度。\n4. Camera Focus使用Vision Module的Z-axis进行对准。',
          zhTW:'Lens-Cube B/S 7.7mm·Illumination Frame-Object 11mm\n\n1. 以Lens到Cube B/S(Beam Splitter)上端的距離7.7mm為基準。\n2. 以Illumination Frame到Object(Unit)上端的距離11mm為基準。\n3. 先完成Main Camera Focus作業,再調整Illumination Frame高度。\n4. Camera Focus使用Vision Module的Z-axis進行對準。',
          ja:'Lens-Cube B/S 7.7mm・Illumination Frame-Object 11mm\n\n1. LensからCube B/S(Beam Splitter)上端までの距離7.7mmを基準とする。\n2. Illumination FrameからObject(Unit)上端までの距離11mmを基準とする。\n3. Main Camera Focus作業を先に完了させた後、Illumination Frameの高さを調整する。\n4. Camera FocusはVision ModuleのZ-axis(Z軸)を使って合わせる。'
        }},
        {img:cmImg('J','smtv',16),tx:{
          vi:'Căn chỉnh điểm Laser → Calibration → lưu\n\n1. Trong BAOI Program, chọn AF để chuyển sang chế độ Tuning, ngắt kết nối, sau đó kết nối iAFCTRL qua Ethernet (AF1: 192.168.1.11 / AF2: 192.168.1.12). (Không thể kết nối đồng thời với Host P/G.)\n2. Trong Handler ▸ Map ▸ JIG1, đặt Unit vào tâm Pedestal, dùng trục X·Y để canh Laser vào tâm Unit Bump, và dùng trục Z của AF để lấy nét.\n3. Xác nhận Laser Camera Live qua kết nối Camera Sync → nhấn LIVE trong Tuning Guide ▸ Align Laser ROI.\n4. Chuyển LED Controller sang chế độ MANUAL và đặt độ sáng CH1 tối đa, sau đó nới lỏng Bolt và di chuyển Lens sang trái/phải để canh vùng sáng vào giữa màn hình rồi siết lại. (Khi xong: Camera Default Set → APPLY ROI & EXIT, và trả LED Controller về chế độ REMOTE.)\n5. Di chuyển JIG Table để Laser nằm trên Unit SR, sau đó nhấn auto trong Tuning Guide ▸ Align Laser Beam.\n6. Điều chỉnh Laser Intensity·Angle&Width·Position bằng Bolt. Chuẩn: Angle 0~±0.1, Intensity 180~200, Width 7 trở xuống là Good.\n7. Trong AF Program, nhấn Make0 để chỉ định vị trí hiện tại làm vị trí Focus.\n8. Trong cửa sổ Calibration, đặt Scan Start=-100um/Scan End=100um/Scan Num=20/Scan Step=10um/Scan Delay=100ms, sau đó Scan Start. Đường cong đi lên = bình thường (Fitting); đường cong đi xuống = cần xoay Laser Camera 180 độ.\n9. Sau khi Homing, lưu thiết lập bằng Save Param.',
          en:'Align the Laser Point → Calibration → save\n\n1. In the BAOI Program, select AF to switch to tuning mode, disconnect, then connect iAFCTRL via Ethernet (AF1: 192.168.1.11 / AF2: 192.168.1.12). (Cannot be connected simultaneously with Host P/G.)\n2. In Handler ▸ Map ▸ JIG1, place the Unit at the center of the Pedestal, use the X-axis·Y-axis to center the Laser on the Unit Bump, and use the AF Z-axis to focus.\n3. Confirm Laser Camera Live via the Camera Sync connection → click LIVE in Tuning Guide ▸ Align Laser ROI.\n4. Switch the LED Controller to MANUAL mode and set CH1 brightness to maximum, then loosen the Bolt and move the Lens left/right to center the bright area on the screen and re-fasten. (When done: Camera Default Set → APPLY ROI & EXIT, and return the LED Controller to REMOTE mode.)\n5. Move the JIG Table so the Laser is over the Unit SR, then click auto in Tuning Guide ▸ Align Laser Beam.\n6. Adjust the Laser Intensity·Angle&Width·Position with the Bolt. Standard: Angle 0~±0.1, Intensity 180~200, Width 7 or less is Good.\n7. In the AF Program, click Make0 to designate the current position as the Focus position.\n8. In the Calibration window, set Scan Start=-100um/Scan End=100um/Scan Num=20/Scan Step=10um/Scan Delay=100ms, then Scan Start. A rising curve = normal (Fitting); a falling curve = the Laser Camera needs to be rotated 180 degrees.\n9. After Homing, save the settings with Save Param.',
          ko:'Laser Point 정렬 → Calibration → 저장\n\n1. BAOI Program에서 AF를 선택해 튜닝 모드로 전환하고 연결 해제 후, iAFCTRL을 Ethernet(AF1: 192.168.1.11 / AF2: 192.168.1.12)으로 연결한다. (Host P/G와 동시 연결 불가)\n2. Handler ▸ Map ▸ JIG1에서 Unit을 Pedestal 중앙에 놓고, X-axis(X축)·Y-axis(Y축)로 Laser를 Unit Bump 중앙에, AF Z-axis(Z축)로 Focus를 맞춘다.\n3. Camera Sync 연결로 Laser Camera Live 확인 → Tuning Guide ▸ Align Laser ROI에서 LIVE 클릭.\n4. LED Controller를 MANUAL 모드로 전환해 CH1 밝기를 최대로 조정한 뒤, Bolt를 풀고 Lens를 좌우로 움직여 밝은 부분을 화면 중앙에 맞추고 재고정한다. (완료 후 Camera Default Set → APPLY ROI & EXIT, LED Controller는 REMOTE 모드로 복귀)\n5. JIG Table을 이동해 Laser가 Unit SR 위에 오도록 한 뒤, Tuning Guide ▸ Align Laser Beam에서 auto를 클릭한다.\n6. Bolt로 Laser Intensity·Angle&Width·Position을 조정한다. 기준: Angle 0~±0.1, Intensity 180~200, Width 7 이하가 Good.\n7. AF Program에서 Make0을 클릭해 현재 위치를 Focus 위치로 지정한다.\n8. Calibration 창에서 Scan Start=-100um/Scan End=100um/Scan Num=20/Scan Step=10um/Scan Delay=100ms 설정 후 Scan Start. 상승곡선=정상(Fitting), 하강곡선=Laser Camera 180도 회전 필요.\n9. Homing 후 Save Param으로 설정을 저장한다.',
          zhCN:'Laser Point对准 → Calibration → 保存\n\n1. 在BAOI Program中选择AF切换到调谐模式并断开连接,然后将iAFCTRL通过Ethernet(AF1:192.168.1.11 / AF2:192.168.1.12)连接。(不可与Host P/G同时连接)\n2. 在Handler ▸ Map ▸ JIG1中将Unit置于Pedestal中央,用X-axis·Y-axis将Laser对准Unit Bump中心,用AF Z-axis对焦。\n3. 通过Camera Sync连接确认Laser Camera Live → 在Tuning Guide ▸ Align Laser ROI中点击LIVE。\n4. 将LED Controller切换为MANUAL模式,将CH1亮度调至最大,然后松开Bolt左右移动Lens使亮部对准画面中央并重新固定。(完成后Camera Default Set → APPLY ROI & EXIT,LED Controller恢复REMOTE模式)\n5. 移动JIG Table使Laser位于Unit SR上方,然后在Tuning Guide ▸ Align Laser Beam中点击auto。\n6. 用Bolt调整Laser Intensity·Angle&Width·Position。基准:Angle 0~±0.1,Intensity 180~200,Width 7以下为Good。\n7. 在AF Program中点击Make0将当前位置指定为Focus位置。\n8. 在Calibration窗口设置Scan Start=-100um/Scan End=100um/Scan Num=20/Scan Step=10um/Scan Delay=100ms后Scan Start。上升曲线=正常(Fitting),下降曲线=需将Laser Camera旋转180度。\n9. Homing后用Save Param保存设置。',
          zhTW:'Laser Point對準 → Calibration → 儲存\n\n1. 在BAOI Program中選擇AF切換到調諧模式並斷開連接,然後將iAFCTRL透過Ethernet(AF1:192.168.1.11 / AF2:192.168.1.12)連接。(不可與Host P/G同時連接)\n2. 在Handler ▸ Map ▸ JIG1中將Unit置於Pedestal中央,用X-axis·Y-axis將Laser對準Unit Bump中心,用AF Z-axis對焦。\n3. 透過Camera Sync連接確認Laser Camera Live → 在Tuning Guide ▸ Align Laser ROI中點擊LIVE。\n4. 將LED Controller切換為MANUAL模式,將CH1亮度調至最大,然後鬆開Bolt左右移動Lens使亮部對準畫面中央並重新固定。(完成後Camera Default Set → APPLY ROI & EXIT,LED Controller恢復REMOTE模式)\n5. 移動JIG Table使Laser位於Unit SR上方,然後在Tuning Guide ▸ Align Laser Beam中點擊auto。\n6. 用Bolt調整Laser Intensity·Angle&Width·Position。基準:Angle 0~±0.1,Intensity 180~200,Width 7以下為Good。\n7. 在AF Program中點擊Make0將目前位置指定為Focus位置。\n8. 在Calibration視窗設定Scan Start=-100um/Scan End=100um/Scan Num=20/Scan Step=10um/Scan Delay=100ms後Scan Start。上升曲線=正常(Fitting),下降曲線=需將Laser Camera旋轉180度。\n9. Homing後用Save Param儲存設定。',
          ja:'Laser Point整列 → Calibration → 保存\n\n1. BAOI ProgramでAFを選択しチューニングモードに切り替え接続を解除した後、iAFCTRLをEthernet(AF1:192.168.1.11 / AF2:192.168.1.12)で接続する。(Host P/Gとの同時接続不可)\n2. Handler ▸ Map ▸ JIG1でUnitをPedestal中央に置き、X-axis・Y-axisでLaserをUnit Bump中心に、AF Z-axisでFocusを合わせる。\n3. Camera Sync接続でLaser Camera Liveを確認 → Tuning Guide ▸ Align Laser ROIでLIVEをクリックする。\n4. LED ControllerをMANUALモードに切り替えCH1輝度を最大に調整した後、Boltを緩めLensを左右に動かして明るい部分を画面中央に合わせ再固定する。(完了後Camera Default Set → APPLY ROI & EXIT、LED ControllerはREMOTEモードに戻す)\n5. JIG Tableを移動しLaserがUnit SR上に来るようにした後、Tuning Guide ▸ Align Laser Beamでautoをクリックする。\n6. BoltでLaser Intensity・Angle&Width・Positionを調整する。基準:Angle 0~±0.1、Intensity 180~200、Width 7以下がGood。\n7. AF ProgramでMake0をクリックし現在位置をFocus位置に指定する。\n8. Calibrationウィンドウで Scan Start=-100um/Scan End=100um/Scan Num=20/Scan Step=10um/Scan Delay=100msを設定後Scan Startする。上昇曲線=正常(Fitting)、下降曲線=Laser Cameraを180度回転させる必要あり。\n9. Homing後、Save Paramで設定を保存する。'
        }},
        {img:cmImg('J','smtv',17),tx:{
          vi:'Điều chỉnh độ phẳng dựa trên Tilt Block (Total Average=0)\n\n1. Nhấp chuột phải ở đầu Vision Manager ▸ Tool ▸ chạy công cụ V1,2 TiltCheck và chuẩn bị Tilt Block.\n2. Trong tab Illum, đặt Channel chiếu sáng (CH01~CH03 cho 3D); trong tab Spec, đặt Scan Step=10, Scan Count=30, Block size=256(16x16).\n3. Đặt Tilt Block vào tâm Pedestal với mặt bóng hướng lên trên.\n4. Vừa xem ảnh Live, vừa di chuyển Jig (Y-axis) Table và Vision Module (X-axis) đến khi thấy Tilt Block.\n5. Di chuyển Motor trục Z đến vị trí In Focus và tìm tâm Focus bằng Single Tracking.\n6. Nhấn nút Scan để kiểm tra giá trị Total Average. Nếu (+), hạ trục Z; nếu (-), nâng lên — lặp lại đến khi đạt 0, sau đó nhấn Make0.\n7. Vừa xem Boundary Plane Image Map, vừa điều chỉnh Module quang học tiến/lùi. (Dùng Bolt+Micrometer; màu trên/dưới phải khớp mới là Good.)\n8. Vừa xem Raw Image Map, vừa điều chỉnh Module quang học trái/phải. (Dựa theo giá trị Range, dùng Bolt+Micrometer.)\n9. Thực hiện quét xác minh lại ít nhất 2 lần nữa cho đến khi đạt tiêu chuẩn cuối cùng (Total Average trong ±2, Range trong 5).\n\nĐiểm cần kiểm tra — Tiêu chuẩn dung sai — Total Average trong ±5, Range trong 10',
          en:'Adjust flatness based on the Tilt Block (Total Average=0)\n\n1. Right-click at the top of Vision Manager ▸ Tool ▸ run the V1,2 TiltCheck Tool and prepare the Tilt Block.\n2. In the Illum tab, set the illumination channel (CH01~CH03 for 3D); in the Spec tab, set Scan Step=10, Scan Count=30, Block size=256(16x16).\n3. Place the Tilt Block at the center of the Pedestal with the glossy side facing up.\n4. Watching the live image, move the Jig (Y-axis) Table and Vision Module (X-axis) to where the Tilt Block is visible.\n5. Move the Z-axis Motor to the In Focus position and find the focus center with Single Tracking.\n6. Click the Scan button to check the Total Average value. If (+), lower the Z-axis; if (-), raise it — repeat until it reaches 0, then click Make0.\n7. Watching the Boundary Plane Image Map, adjust the optical module back and forth. (Using Bolt+Micrometer; the colors above/below must align to be Good.)\n8. Watching the Raw Image Map, adjust the optical module left and right. (Based on the Range value, using Bolt+Micrometer.)\n9. Perform re-verification scans at least twice more until the final criteria are met (Total Average within ±2, Range within 5).\n\nCheck point — Tolerance criteria — Total Average within ±5, Range within 10',
          ko:'Tilt Block 기준 평탄도 조정 (Total Average=0)\n\n1. Vision Manager 상단 우클릭 ▸ Tool ▸ V1,2 TiltCheck Tool을 실행하고 Tilt Block을 준비한다.\n2. Illum 탭에서 조명 채널(3D는 CH01~CH03) 설정, Spec 탭에서 Scan Step=10, Scan Count=30, Block size=256(16x16)으로 설정한다.\n3. Tilt Block을 Pedestal 중앙에 광택면이 위로 오도록 배치한다.\n4. Live 화면을 보며 Jig(Y-axis(Y축)) Table과 Vision Module(X-axis(X축))을 움직여 Tilt Block이 보이는 위치로 이동한다.\n5. Z-axis(Z축) Motor를 In Focus 위치로 이동하고 Single Tracking으로 초점 중심을 찾는다.\n6. Scan 버튼을 클릭해 Total Average 값을 확인한다. (+)면 Z-axis(Z축)를 내리고 (-)면 올려서 0이 되도록 반복 조정 후 Make0을 클릭한다.\n7. Boundary Plane Image Map을 보며 광학계 모듈을 전후로 조정한다. (Bolt+Micrometer, 상하 색상 정렬되어야 Good)\n8. Raw Image Map을 보며 광학계 모듈을 좌우로 조정한다. (Range 값 기준, Bolt+Micrometer 사용)\n9. 최종 기준(Total Average ±2 이내, Range 5 이내)을 만족할 때까지 2회 이상 재확인 Scan을 수행한다.\n\n확인 포인트 — 여유 기준 — Total Average ±5 이내, Range 10 이내',
          zhCN:'以Tilt Block为基准调整平坦度(Total Average=0)\n\n1. 在Vision Manager顶部右键 ▸ Tool ▸ 执行V1,2 TiltCheck Tool并准备Tilt Block。\n2. 在Illum标签页设置照明通道(3D为CH01~CH03),在Spec标签页设置Scan Step=10、Scan Count=30、Block size=256(16x16)。\n3. 将Tilt Block光泽面朝上放置于Pedestal中央。\n4. 观看Live画面,移动Jig(Y-axis)Table与Vision Module(X-axis)至可看见Tilt Block的位置。\n5. 将Z-axis Motor移至In Focus位置,用Single Tracking寻找对焦中心。\n6. 点击Scan按钮确认Total Average值。若为(+)则降低Z-axis,若为(-)则升高,反复调整至0后点击Make0。\n7. 观看Boundary Plane Image Map,前后调整光学模块。(使用Bolt+Micrometer,上下颜色需对齐才是Good)\n8. 观看Raw Image Map,左右调整光学模块。(以Range值为基准,使用Bolt+Micrometer)\n9. 反复进行2次以上确认Scan,直到满足最终标准(Total Average ±2以内,Range 5以内)。\n\n确认要点——容许标准——Total Average ±5以内,Range 10以内',
          zhTW:'以Tilt Block為基準調整平坦度(Total Average=0)\n\n1. 在Vision Manager頂部右鍵 ▸ Tool ▸ 執行V1,2 TiltCheck Tool並準備Tilt Block。\n2. 在Illum標籤頁設定照明通道(3D為CH01~CH03),在Spec標籤頁設定Scan Step=10、Scan Count=30、Block size=256(16x16)。\n3. 將Tilt Block光澤面朝上放置於Pedestal中央。\n4. 觀看Live畫面,移動Jig(Y-axis)Table與Vision Module(X-axis)至可看見Tilt Block的位置。\n5. 將Z-axis Motor移至In Focus位置,用Single Tracking尋找對焦中心。\n6. 點擊Scan按鈕確認Total Average值。若為(+)則降低Z-axis,若為(-)則升高,反覆調整至0後點擊Make0。\n7. 觀看Boundary Plane Image Map,前後調整光學模組。(使用Bolt+Micrometer,上下顏色需對齊才是Good)\n8. 觀看Raw Image Map,左右調整光學模組。(以Range值為基準,使用Bolt+Micrometer)\n9. 反覆進行2次以上確認Scan,直到滿足最終標準(Total Average ±2以內,Range 5以內)。\n\n確認要點——容許標準——Total Average ±5以內,Range 10以內',
          ja:'Tilt Block基準の平坦度調整(Total Average=0)\n\n1. Vision Manager上部右クリック ▸ Tool ▸ V1,2 TiltCheck Toolを実行しTilt Blockを準備する。\n2. Illumタブで照明チャンネル(3DはCH01~CH03)を設定、Specタブで Scan Step=10、Scan Count=30、Block size=256(16x16)に設定する。\n3. Tilt Blockを光沢面が上になるようPedestal中央に配置する。\n4. Live画面を見ながらJig(Y-axis)TableとVision Module(X-axis)を動かしTilt Blockが見える位置へ移動する。\n5. Z-axis Motorを In Focus位置へ移動しSingle Trackingで焦点中心を探す。\n6. Scanボタンをクリックして Total Average値を確認する。(+)ならZ-axisを下げ、(-)なら上げて0になるよう繰り返し調整後Make0をクリックする。\n7. Boundary Plane Image Mapを見ながら光学系モジュールを前後に調整する。(Bolt+Micrometer使用、上下の色が揃うとGood)\n8. Raw Image Mapを見ながら光学系モジュールを左右に調整する。(Range値基準、Bolt+Micrometer使用)\n9. 最終基準(Total Average ±2以内、Range 5以内)を満たすまで2回以上再確認Scanを行う。\n\n確認ポイント — 余裕基準 — Total Average ±5以内、Range 10以内'
        }},
        {img:cmImg('J','smtv',18),tx:{
          vi:'Điều chỉnh khẩu độ dựa trên Optical Mirror (Intensity 1.6 / RGB 160)\n\n1. Đặt Optical Mirror vào tâm Pedestal.\n2. Vừa xem ảnh Live, vừa di chuyển Jig (Y-axis) Table và Vision Module (X-axis) đến khi thấy Optical Mirror.\n3. Di chuyển Motor trục Z đến vị trí In Focus và tìm tâm Focus bằng Single Tracking.\n4. Trong Vision Program, chạy Illumination 1st....\n5. Chọn 3D Image Frame và đặt Intensity là 1.6.\n6. Nhấp chuột phải màn hình ▸ chọn Show pixel info, sau đó điều chỉnh khẩu độ để giá trị RGB ở đầu màn hình là 160.',
          en:'Adjust the aperture based on the Optical Mirror (Intensity 1.6 / RGB 160)\n\n1. Place the Optical Mirror at the center of the Pedestal.\n2. Watching the live image, move the Jig (Y-axis) Table and Vision Module (X-axis) to where the Optical Mirror is visible.\n3. Move the Z-axis Motor to the In Focus position and find the focus center with Single Tracking.\n4. In the Vision Program, run Illumination 1st....\n5. Select the 3D Image Frame and set the Intensity to 1.6.\n6. Right-click the screen ▸ select Show pixel info, then adjust the aperture so the RGB value at the top of the screen is 160.',
          ko:'Optical Mirror 기준 조리개 조정 (Intensity 1.6 / RGB 160)\n\n1. Optical Mirror를 Pedestal 중앙에 놓는다.\n2. Live 화면을 보며 Jig(Y-axis(Y축)) Table과 Vision Module(X-axis(X축))을 움직여 Optical Mirror가 보이는 위치로 이동한다.\n3. Z-axis(Z축) Motor를 In Focus 위치로 이동하고 Single Tracking으로 초점 중심을 찾는다.\n4. Vision Program에서 Illumination 1st...를 실행한다.\n5. 3D Image Frame을 선택하고 Intensity를 1.6으로 설정한다.\n6. 화면 우클릭 ▸ Show pixel info 선택 후, 화면 상단 RGB 값이 160이 되도록 조리개(Aperture)를 조정한다.',
          zhCN:'以Optical Mirror为基准调整光圈(Intensity 1.6 / RGB 160)\n\n1. 将Optical Mirror放置于Pedestal中央。\n2. 观看Live画面,移动Jig(Y-axis)Table与Vision Module(X-axis)至可看见Optical Mirror的位置。\n3. 将Z-axis Motor移至In Focus位置,用Single Tracking寻找对焦中心。\n4. 在Vision Program中执行Illumination 1st...。\n5. 选择3D Image Frame,将Intensity设为1.6。\n6. 右键点击画面 ▸ 选择Show pixel info后,调整光圈(Aperture)使画面顶部RGB值为160。',
          zhTW:'以Optical Mirror為基準調整光圈(Intensity 1.6 / RGB 160)\n\n1. 將Optical Mirror放置於Pedestal中央。\n2. 觀看Live畫面,移動Jig(Y-axis)Table與Vision Module(X-axis)至可看見Optical Mirror的位置。\n3. 將Z-axis Motor移至In Focus位置,用Single Tracking尋找對焦中心。\n4. 在Vision Program中執行Illumination 1st...。\n5. 選擇3D Image Frame,將Intensity設為1.6。\n6. 右鍵點擊畫面 ▸ 選擇Show pixel info後,調整光圈(Aperture)使畫面頂部RGB值為160。',
          ja:'Optical Mirror基準の絞り調整(Intensity 1.6 / RGB 160)\n\n1. Optical MirrorをPedestal中央に置く。\n2. Live画面を見ながらJig(Y-axis)TableとVision Module(X-axis)を動かしOptical Mirrorが見える位置へ移動する。\n3. Z-axis Motorを In Focus位置へ移動しSingle Trackingで焦点中心を探す。\n4. Vision ProgramでIllumination 1st...を実行する。\n5. 3D Image Frameを選択しIntensityを1.6に設定する。\n6. 画面右クリック ▸ Show pixel infoを選択後、画面上部のRGB値が160になるよう絞り(Aperture)を調整する。'
        }},
        {img:cmImg('J','smtv',19),tx:{
          vi:'Loại bỏ dị vật khỏi Reference Mirror\n\n1. Di chuyển Jig Indexer ra khỏi tầm nhìn của Camera.\n2. Trong Vision Program, chạy Illumination 1st....\n3. Điều chỉnh 3D Image Frame Intensity sang Bright và phóng to ảnh Live — bất cứ thứ gì hiện rõ ở độ cao ngoài Focus đều là dị vật.\n4. Reference Mirror nằm ở vị trí như trong sơ đồ — mở Cover để kiểm tra dị vật.\n5. Vệ sinh Mirror đến khi không còn thấy dị vật. (Cẩn thận tránh trầy xước khi vệ sinh.)\n6. Sau khi vệ sinh, đóng tất cả Cover ngoài của Reference Mirror Module để ngăn bụi xâm nhập.',
          en:'Remove foreign matter from the Reference Mirror\n\n1. Move the Jig Indexer out of the Camera\'s field of view.\n2. In the Vision Program, run Illumination 1st....\n3. Adjust the 3D Image Frame Intensity to Bright and zoom in on the live image — anything that appears sharp at an out-of-focus height is foreign matter.\n4. The Reference Mirror is located as shown in the diagram — open the Cover to check for foreign matter.\n5. Clean the Mirror until no foreign matter is visible. (Be careful of scratches while cleaning.)\n6. After cleaning, close all external Covers on the Reference Mirror Module to prevent dust ingress.',
          ko:'Reference Mirror 이물 제거\n\n1. Jig Indexer를 Camera 시야 밖으로 이동시킨다.\n2. Vision Program에서 Illumination 1st...를 실행한다.\n3. 3D Image Frame Intensity를 Bright로 조정해 Live 화면을 확대하면, 초점 밖 높이에서 선명하게 보이는 것이 이물질이다.\n4. Reference Mirror 위치는 그림과 같다 — Cover를 열어 이물을 확인한다.\n5. 이물이 보이지 않을 때까지 Mirror를 세척한다. (세척 중 Scratch 주의)\n6. 세척 후 먼지 유입 방지를 위해 Reference Mirror Module의 모든 외부 Cover를 닫는다.',
          zhCN:'清除Reference Mirror上的异物\n\n1. 将Jig Indexer移出Camera视野。\n2. 在Vision Program中执行Illumination 1st...。\n3. 将3D Image Frame Intensity调整为Bright并放大Live画面,在离焦高度仍清晰可见的即为异物。\n4. Reference Mirror位置如图所示——打开Cover确认异物。\n5. 清洁Mirror直至看不到异物为止。(清洁时注意Scratch)\n6. 清洁后为防止灰尘进入,关闭Reference Mirror Module的所有外部Cover。',
          zhTW:'清除Reference Mirror上的異物\n\n1. 將Jig Indexer移出Camera視野。\n2. 在Vision Program中執行Illumination 1st...。\n3. 將3D Image Frame Intensity調整為Bright並放大Live畫面,在離焦高度仍清晰可見的即為異物。\n4. Reference Mirror位置如圖所示——開啟Cover確認異物。\n5. 清潔Mirror直至看不到異物為止。(清潔時注意Scratch)\n6. 清潔後為防止灰塵進入,關閉Reference Mirror Module的所有外部Cover。',
          ja:'Reference Mirrorの異物除去\n\n1. Jig IndexerをCamera視野外へ移動させる。\n2. Vision ProgramでIllumination 1st...を実行する。\n3. 3D Image Frame IntensityをBrightに調整しLive画面を拡大すると、ピント外の高さで鮮明に見えるものが異物である。\n4. Reference Mirrorの位置は図の通り——Coverを開けて異物を確認する。\n5. 異物が見えなくなるまでMirrorを清掃する。(清掃中Scratchに注意)\n6. 清掃後、埃の侵入防止のためReference Mirror Moduleのすべての外部Coverを閉じる。'
        }},
        {img:cmImg('J','smtv',20),tx:{
          vi:'Cố định độ rộng Fringe bằng Micrometer, cố định chiếu sáng ở 1.6us\n\n1. Đặt Optical Mirror vào tâm Jig Table.\n2. Vừa xem ảnh Live, vừa di chuyển Jig (Y-axis) Table và Vision Module (X-axis) đến khi thấy Optical Mirror.\n3. Di chuyển Motor trục Z đến vị trí In Focus và tìm tâm Focus bằng Single Tracking.\n4. Điều chỉnh Micrometer trên Reference Mirror Module để tìm Fringe (các vân mỏng). (Kiểm tra trong ảnh Live của cửa sổ Illum Control.)\n5. Mở rộng Fringe bằng cần chỉnh Mirror Tilt, sau đó tinh chỉnh bằng Micrometer để tìm trạng thái sáng nhất.\n6. Cố định giá trị chiếu sáng ở 1.6us và đóng cửa sổ Illum Control.',
          en:'Secure the Fringe width with the Micrometer, fix the illumination at 1.6us\n\n1. Place the Optical Mirror at the center of the Jig Table.\n2. Watching the live image, move the Jig (Y-axis) Table and Vision Module (X-axis) to where the Optical Mirror is visible.\n3. Move the Z-axis Motor to the In Focus position and find the focus center with Single Tracking.\n4. Adjust the Micrometer on the Reference Mirror Module to find the Fringe (fine stripes). (Check in the live image of the Illum Control window.)\n5. Widen the Fringe with the Mirror Tilt adjustment lever, then fine-tune with the Micrometer to find the brightest state.\n6. Fix the illumination value at 1.6us and close the Illum Control window.',
          ko:'Micrometer로 Fringe 폭 확보·조명값 1.6us 고정\n\n1. Optical Mirror를 Jig Table 중앙에 놓는다.\n2. Live 화면을 보며 Jig(Y-axis(Y축)) Table과 Vision Module(X-axis(X축))을 움직여 Optical Mirror가 보이는 위치로 이동한다.\n3. Z-axis(Z축) Motor를 In Focus 위치로 이동하고 Single Tracking으로 초점 중심을 찾는다.\n4. Reference Mirror Module의 Micrometer를 조정해 Fringe(가는 줄무늬)를 찾는다. (Illum Control 창의 Live 화면에서 확인)\n5. Mirror Tilt 조정 Lever로 Fringe 폭을 넓힌 뒤, Micrometer로 미세조정하여 가장 밝은 상태를 찾는다.\n6. 조명값을 1.6us로 고정하고 Illum Control 창을 닫는다.',
          zhCN:'用Micrometer确保Fringe宽度·照明值固定为1.6us\n\n1. 将Optical Mirror放置于Jig Table中央。\n2. 观看Live画面,移动Jig(Y-axis)Table与Vision Module(X-axis)至可看见Optical Mirror的位置。\n3. 将Z-axis Motor移至In Focus位置,用Single Tracking寻找对焦中心。\n4. 调整Reference Mirror Module的Micrometer寻找Fringe(细条纹)。(在Illum Control窗口的Live画面中确认)\n5. 用Mirror Tilt调整杆扩大Fringe宽度后,用Micrometer微调找到最亮状态。\n6. 将照明值固定为1.6us并关闭Illum Control窗口。',
          zhTW:'用Micrometer確保Fringe寬度·照明值固定為1.6us\n\n1. 將Optical Mirror放置於Jig Table中央。\n2. 觀看Live畫面,移動Jig(Y-axis)Table與Vision Module(X-axis)至可看見Optical Mirror的位置。\n3. 將Z-axis Motor移至In Focus位置,用Single Tracking尋找對焦中心。\n4. 調整Reference Mirror Module的Micrometer尋找Fringe(細條紋)。(在Illum Control視窗的Live畫面中確認)\n5. 用Mirror Tilt調整桿擴大Fringe寬度後,用Micrometer微調找到最亮狀態。\n6. 將照明值固定為1.6us並關閉Illum Control視窗。',
          ja:'Micrometerで Fringe幅を確保・照明値1.6usに固定\n\n1. Optical MirrorをJig Table中央に置く。\n2. Live画面を見ながらJig(Y-axis)TableとVision Module(X-axis)を動かしOptical Mirrorが見える位置へ移動する。\n3. Z-axis Motorを In Focus位置へ移動しSingle Trackingで焦点中心を探す。\n4. Reference Mirror ModuleのMicrometerを調整しFringe(細い縞模様)を探す。(Illum ControlウィンドウのLive画面で確認)\n5. Mirror Tilt調整レバーでFringe幅を広げた後、Micrometerで微調整して最も明るい状態を探す。\n6. 照明値を1.6usに固定しIllum Controlウィンドウを閉じる。'
        }},
        {img:cmImg('J','smtv',21),tx:{
          vi:'Áp dụng kết quả Wave Length Calibration 620~640 (khuyến nghị 630)\n\n1. Trong chức năng Utility của Vision Window, chọn Wave Length Calibration: 20x và chờ kết quả.\n2. Khi kết quả hiện ở giữa Vision Window, đóng bằng OK. (Thường 620~640; càng gần 630 càng tốt.)\n3. Xác nhận giá trị Wave Length trong cửa sổ Illum Control khớp với kết quả đo được, sau đó đóng cửa sổ.',
          en:'Apply the Wave Length Calibration result 620~640 (630 recommended)\n\n1. In the Vision Window\'s Utility function, select Wave Length Calibration: 20x and wait for the result.\n2. When the result appears in the center of the Vision Window, close with OK. (Typically 620~640; the closer to 630 the better.)\n3. Confirm the Wave Length value in the Illum Control window matches the measured result, then close the window.',
          ko:'Wave Length Calibration 결과 620~640(630 권장) 반영\n\n1. Vision Window의 Utility 기능에서 Wave Length Calibration : 20x를 선택하고 결과를 기다린다.\n2. Vision Window 중앙에 결과값이 나타나면 OK로 종료한다. (일반적으로 620~640, 630에 가까울수록 Good)\n3. Illum Control 창의 Wave Length 값이 측정 결과와 동일하게 저장되었는지 확인한 뒤 창을 닫는다.',
          zhCN:'反映Wave Length Calibration结果620~640(建议630)\n\n1. 在Vision Window的Utility功能中选择Wave Length Calibration:20x,等待结果。\n2. 结果显示在Vision Window中央后,点击OK结束。(通常为620~640,越接近630越Good)\n3. 确认Illum Control窗口的Wave Length值与测量结果一致后关闭窗口。',
          zhTW:'反映Wave Length Calibration結果620~640(建議630)\n\n1. 在Vision Window的Utility功能中選擇Wave Length Calibration:20x,等待結果。\n2. 結果顯示在Vision Window中央後,點擊OK結束。(通常為620~640,越接近630越Good)\n3. 確認Illum Control視窗的Wave Length值與測量結果一致後關閉視窗。',
          ja:'Wave Length Calibration結果620~640(630推奨)を反映\n\n1. Vision WindowのUtility機能でWave Length Calibration:20xを選択し結果を待つ。\n2. Vision Window中央に結果値が表示されたらOKで終了する。(通常620~640、630に近いほどGood)\n3. Illum ControlウィンドウのWave Length値が測定結果と同じに保存されているか確認しウィンドウを閉じる。'
        }},
        {img:cmImg('J','smtv',22),tx:{
          vi:'Zmap Compensation On → xoay 90° ba lần → tính Distortion Map\n\n1. Đặt Optical Mirror vào tâm Jig Table.\n2. Vừa xem ảnh Live, vừa di chuyển Jig (Y-axis) Table và Vision Module (X-axis) đến khi thấy Optical Mirror, và lấy nét bằng trục Z.\n3. Kiểm tra Fringe trong cửa sổ Illum Control.\n4. Trong menu Inspection của Vision Window, chạy Distortion, tích Zmap Compensation On, sau đó chọn Calculate Zmap compensation.\n5. Khi thông báo "Set optical flat mirror" hiện ra, xác nhận đã sẵn sàng và nhấn OK.\n6. Trong quá trình Get ZMap, khi thông báo "Rotate mirror 90 degrees" hiện ra, xoay Optical Mirror 90° mỗi lần, tổng cộng ba lần, luôn theo cùng một hướng.\n7. Sau khi Accumulate ZMap hoàn tất và tính toán Calculate Distortion Map xong, nhấn OK ở thông báo hoàn tất.',
          en:'Zmap Compensation On → rotate 90° three times → calculate the Distortion Map\n\n1. Place the Optical Mirror at the center of the Jig Table.\n2. Watching the live image, move the Jig (Y-axis) Table and Vision Module (X-axis) to where the Optical Mirror is visible, and focus using the Z-axis.\n3. Check the Fringe in the Illum Control window.\n4. In the Vision Window\'s Inspection menu, run Distortion, check Zmap Compensation On, then select Calculate Zmap compensation.\n5. When the "Set optical flat mirror" message appears, confirm readiness and click OK.\n6. During Get ZMap, when the "Rotate mirror 90 degrees" message appears, rotate the Optical Mirror 90° at a time, three times total, always in the same direction.\n7. After Accumulate ZMap completes and the Calculate Distortion Map computation finishes, click OK on the completion message.',
          ko:'Zmap Compensation On → 90도 3회 회전 → Distortion Map 계산\n\n1. Optical Mirror를 Jig Table 중앙에 놓는다.\n2. Live 화면을 보며 Jig(Y-axis(Y축)) Table과 Vision Module(X-axis(X축))을 움직여 Optical Mirror가 보이는 위치로 이동하고, Z-axis(Z축)로 초점을 맞춘다.\n3. Illum Control 창에서 Fringe를 확인한다.\n4. Vision Window의 Inspection 메뉴에서 Distortion을 실행하고, Zmap Compensation On을 체크한 뒤 Calculate Zmap compensation을 선택한다.\n5. Set optical flat mirror 메시지가 뜨면 준비 상태를 확인하고 OK를 클릭한다.\n6. Get ZMap 진행 중 Rotate mirror 90 degrees 메시지가 나오면 Optical Mirror를 90도씩 총 3회, 항상 같은 방향으로 회전시킨다.\n7. Accumulate ZMap 완료 후 Calculate Distortion Map 계산이 끝나면 완료 메시지에서 OK를 클릭한다.',
          zhCN:'Zmap Compensation On → 旋转90度3次 → 计算Distortion Map\n\n1. 将Optical Mirror放置于Jig Table中央。\n2. 观看Live画面,移动Jig(Y-axis)Table与Vision Module(X-axis)至可看见Optical Mirror的位置,并用Z-axis对焦。\n3. 在Illum Control窗口确认Fringe。\n4. 在Vision Window的Inspection菜单中执行Distortion,勾选Zmap Compensation On后选择Calculate Zmap compensation。\n5. 出现Set optical flat mirror讯息时,确认准备状态后点击OK。\n6. Get ZMap过程中出现Rotate mirror 90 degrees讯息时,将Optical Mirror每次旋转90度,共3次,始终朝同一方向旋转。\n7. Accumulate ZMap完成后,Calculate Distortion Map计算结束时,在完成讯息中点击OK。',
          zhTW:'Zmap Compensation On → 旋轉90度3次 → 計算Distortion Map\n\n1. 將Optical Mirror放置於Jig Table中央。\n2. 觀看Live畫面,移動Jig(Y-axis)Table與Vision Module(X-axis)至可看見Optical Mirror的位置,並用Z-axis對焦。\n3. 在Illum Control視窗確認Fringe。\n4. 在Vision Window的Inspection選單中執行Distortion,勾選Zmap Compensation On後選擇Calculate Zmap compensation。\n5. 出現Set optical flat mirror訊息時,確認準備狀態後點擊OK。\n6. Get ZMap過程中出現Rotate mirror 90 degrees訊息時,將Optical Mirror每次旋轉90度,共3次,始終朝同一方向旋轉。\n7. Accumulate ZMap完成後,Calculate Distortion Map計算結束時,在完成訊息中點擊OK。',
          ja:'Zmap Compensation On → 90度3回回転 → Distortion Map計算\n\n1. Optical MirrorをJig Table中央に置く。\n2. Live画面を見ながらJig(Y-axis)TableとVision Module(X-axis)を動かしOptical Mirrorが見える位置へ移動し、Z-axisで焦点を合わせる。\n3. Illum Controlウィンドウで Fringeを確認する。\n4. Vision WindowのInspectionメニューでDistortionを実行し、Zmap Compensation Onにチェックした後Calculate Zmap compensationを選択する。\n5. Set optical flat mirrorメッセージが表示されたら準備状態を確認しOKをクリックする。\n6. Get ZMap進行中にRotate mirror 90 degreesメッセージが出たら、Optical Mirrorを90度ずつ計3回、常に同じ方向へ回転させる。\n7. Accumulate ZMap完了後、Calculate Distortion Mapの計算が終わったら完了メッセージでOKをクリックする。'
        }},
        {img:cmImg('J','smtv',23),tx:{
          vi:'2D Scale Calibration dựa trên Matrix/Grid Target\n\n1. Di chuyển Jig (Y-axis) Table và Vision Module (X-axis) sao cho Matrix Target nằm giữa màn hình Module quang học.\n2. Di chuyển trục Z của Module quang học để lấy nét vào Matrix Target.\n3. Di chuyển trục X, Y, Z để Grid Target hiện rõ.\n4. Chạy Vision Manager ▸ Calibration & Analysis ▸ Vision 2D Scale Calibration.\n5. Điều chỉnh chiếu sáng để hiện Target, nhấn Calibrate để kiểm tra kết quả tính toán, và lưu bằng Apply Calibration.\n6. Mở file System3D trong thư mục config để xác nhận kết quả đã áp dụng đúng.',
          en:'2D Scale Calibration based on the Matrix/Grid Target\n\n1. Move the Jig (Y-axis) Table and Vision Module (X-axis) so the Matrix Target is centered in the optical module screen.\n2. Move the optical module\'s Z-axis to focus on the Matrix Target.\n3. Move the X-axis, Y-axis, and Z-axis so the Grid Target appears clearly.\n4. Run Vision Manager ▸ Calibration & Analysis ▸ Vision 2D Scale Calibration.\n5. Adjust the illumination to display the Target, click Calibrate to check the calculated result, and save with Apply Calibration.\n6. Open the System3D file in the config folder to confirm the result was applied correctly.',
          ko:'Matrix/Grid Target 기준 2D Scale Calibration\n\n1. Jig(Y-axis(Y축)) Table과 Vision Module(X-axis(X축))을 움직여 Matrix Target이 광학 모듈 화면 중앙에 오도록 한다.\n2. 광학계 모듈의 Z-axis(Z축)를 움직여 Matrix Target에 초점을 맞춘다.\n3. X-axis(X축), Y-axis(Y축), Z-axis(Z축)를 움직여 Grid Target이 선명하게 보이도록 한다.\n4. Vision Manager ▸ Calibration & Analysis ▸ Vision 2D Scale Calibration을 실행한다.\n5. 조명값을 조정해 Target을 표시하고, Calibrate 클릭 후 계산 결과를 확인, Apply Calibration으로 저장한다.\n6. config 폴더의 System3D 파일을 열어 결과값이 정상 반영되었는지 확인한다.',
          zhCN:'以Matrix/Grid Target为基准的2D Scale Calibration\n\n1. 移动Jig(Y-axis)Table与Vision Module(X-axis)使Matrix Target位于光学模块画面中央。\n2. 移动光学模块的Z-axis对Matrix Target对焦。\n3. 移动X-axis、Y-axis、Z-axis使Grid Target清晰可见。\n4. 执行Vision Manager ▸ Calibration & Analysis ▸ Vision 2D Scale Calibration。\n5. 调整照明值显示Target,点击Calibrate确认计算结果,并用Apply Calibration保存。\n6. 打开config文件夹中的System3D文件,确认结果是否正常反映。',
          zhTW:'以Matrix/Grid Target為基準的2D Scale Calibration\n\n1. 移動Jig(Y-axis)Table與Vision Module(X-axis)使Matrix Target位於光學模組畫面中央。\n2. 移動光學模組的Z-axis對Matrix Target對焦。\n3. 移動X-axis、Y-axis、Z-axis使Grid Target清晰可見。\n4. 執行Vision Manager ▸ Calibration & Analysis ▸ Vision 2D Scale Calibration。\n5. 調整照明值顯示Target,點擊Calibrate確認計算結果,並用Apply Calibration儲存。\n6. 開啟config資料夾中的System3D檔案,確認結果是否正常反映。',
          ja:'Matrix/Grid Target基準の2D Scale Calibration\n\n1. Jig(Y-axis)TableとVision Module(X-axis)を動かしMatrix Targetが光学モジュール画面中央に来るようにする。\n2. 光学系モジュールのZ-axisを動かしMatrix Targetに焦点を合わせる。\n3. X-axis、Y-axis、Z-axisを動かしGrid Targetが鮮明に見えるようにする。\n4. Vision Manager ▸ Calibration & Analysis ▸ Vision 2D Scale Calibrationを実行する。\n5. 照明値を調整しTargetを表示させ、Calibrateをクリックして計算結果を確認し、Apply Calibrationで保存する。\n6. configフォルダのSystem3Dファイルを開き、結果が正常に反映されたか確認する。'
        }}
      ]
    },
    nbga:{
      title:{ko:'I. Advanced Troubleshooting / Data Verification',en:'I. Advanced Troubleshooting / Data Verification',zhCN:'I. Advanced Troubleshooting / Data Verification',zhTW:'I. Advanced Troubleshooting / Data Verification',ja:'I. Advanced Troubleshooting / Data Verification'},
      chapters:[
        {from:1,title:{ko:'1.1.1 전원 불량',en:'1.1.1 Power Failure',zhCN:'1.1.1 电源不良',zhTW:'1.1.1 電源不良',ja:'1.1.1 電源不良'}},
        {from:17,title:{ko:'1.1.2 Motor 전원 불량',en:'1.1.2 Motor Power Failure',zhCN:'1.1.2 Motor电源不良',zhTW:'1.1.2 Motor電源不良',ja:'1.1.2 Motor電源不良'}},
        {from:19,title:{ko:'1.1.3 Auto/Teach mode 변경',en:'1.1.3 Switching Auto/Teach Mode',zhCN:'1.1.3 Auto/Teach mode切换',zhTW:'1.1.3 Auto/Teach mode切換',ja:'1.1.3 Auto/Teach mode変更'}},
        {from:22,title:{ko:'1.1.4 Multi Meter 전원 측정',en:'1.1.4 Measuring Power with a Multimeter',zhCN:'1.1.4 使用Multi Meter测量电源',zhTW:'1.1.4 使用Multi Meter測量電源',ja:'1.1.4 Multi Meterでの電源測定'}},
        {from:29,title:{ko:'1.2.1 I/O 감지 불량',en:'1.2.1 I/O Detection Failure',zhCN:'1.2.1 I/O检测不良',zhTW:'1.2.1 I/O檢測不良',ja:'1.2.1 I/O検知不良'}},
        {from:34,title:{ko:'1.2.2 연결 불량(CLCtrl)',en:'1.2.2 Connection Failure (CLCtrl)',zhCN:'1.2.2 连接不良(CLCtrl)',zhTW:'1.2.2 連接不良(CLCtrl)',ja:'1.2.2 接続不良(CLCtrl)'}},
        {from:37,title:{ko:'1.2.3 연결 불량(AF program)',en:'1.2.3 Connection Failure (AF program)',zhCN:'1.2.3 连接不良(AF program)',zhTW:'1.2.3 連接不良(AF program)',ja:'1.2.3 接続不良(AFプログラム)'}},
        {from:45,title:{ko:'1.2.4 Camera 연결불량',en:'1.2.4 Camera Connection Failure',zhCN:'1.2.4 Camera连接不良',zhTW:'1.2.4 Camera連接不良',ja:'1.2.4 Camera接続不良'}},
        {from:51,title:{ko:'1.2.5 Grab time out',en:'1.2.5 Grab Timeout',zhCN:'1.2.5 Grab time out',zhTW:'1.2.5 Grab time out',ja:'1.2.5 Grab time out'}},
        {from:58,title:{ko:'1.3.1 Motion 이동 불량',en:'1.3.1 Motion Movement Failure',zhCN:'1.3.1 Motion移动不良',zhTW:'1.3.1 Motion移動不良',ja:'1.3.1 Motion移動不良'}},
        {from:65,title:{ko:'1.3.2 Interlock 동작 불량',en:'1.3.2 Interlock Malfunction',zhCN:'1.3.2 Interlock動作不良',zhTW:'1.3.2 Interlock動作不良',ja:'1.3.2 Interlock動作不良'}},
        {from:67,title:{ko:'1.4.1 조명 불량',en:'1.4.1 Lighting Failure',zhCN:'1.4.1 照明不良',zhTW:'1.4.1 照明不良',ja:'1.4.1 照明不良'}},
        {from:78,title:{ko:'1.4.2 PZT 연결 불가',en:'1.4.2 PZT Connection Failure',zhCN:'1.4.2 PZT无法连接',zhTW:'1.4.2 PZT無法連接',ja:'1.4.2 PZT接続不可'}},
        {from:86,title:{ko:'1.4.3 PZT 진동 발생',en:'1.4.3 PZT Vibration',zhCN:'1.4.3 PZT产生振动',zhTW:'1.4.3 PZT產生振動',ja:'1.4.3 PZT振動発生'}},
        {from:103,title:{ko:'2.2.1 Jig Table Flatness',en:'2.2.1 Jig Table Flatness',zhCN:'2.2.1 Jig Table Flatness',zhTW:'2.2.1 Jig Table Flatness',ja:'2.2.1 Jig Table Flatness'}},
        {from:109,title:{ko:'2.2.2 Illumination Uniformity',en:'2.2.2 Illumination Uniformity',zhCN:'2.2.2 Illumination Uniformity',zhTW:'2.2.2 Illumination Uniformity',ja:'2.2.2 Illumination Uniformity'}},
        {from:123,title:{ko:'2.2.3 2D ID(Barcode&OCR)',en:'2.2.3 2D ID (Barcode & OCR)',zhCN:'2.2.3 2D ID(Barcode&OCR)',zhTW:'2.2.3 2D ID(Barcode&OCR)',ja:'2.2.3 2D ID(Barcode&OCR)'}},
        {from:131,title:{ko:'2.2.4 Dry Run',en:'2.2.4 Dry Run',zhCN:'2.2.4 Dry Run',zhTW:'2.2.4 Dry Run',ja:'2.2.4 Dry Run'}},
        {from:136,title:{ko:'2.2.5 MTBI',en:'2.2.5 MTBI',zhCN:'2.2.5 MTBI',zhTW:'2.2.5 MTBI',ja:'2.2.5 MTBI'}},
        {from:140,title:{ko:'2.2.6 Accuracy',en:'2.2.6 Accuracy',zhCN:'2.2.6 Accuracy',zhTW:'2.2.6 Accuracy',ja:'2.2.6 Accuracy'}},
        {from:152,title:{ko:'2.2.7 Repeatability',en:'2.2.7 Repeatability',zhCN:'2.2.7 Repeatability',zhTW:'2.2.7 Repeatability',ja:'2.2.7 Repeatability'}},
        {from:159,title:{ko:'2.2.8 Reproducibility',en:'2.2.8 Reproducibility',zhCN:'2.2.8 Reproducibility',zhTW:'2.2.8 Reproducibility',ja:'2.2.8 Reproducibility'}},
        {from:166,title:{ko:'2.2.9 Correlation',en:'2.2.9 Correlation',zhCN:'2.2.9 Correlation',zhTW:'2.2.9 Correlation',ja:'2.2.9 Correlation'}},
        {from:169,title:{ko:'2.2.10 Takt Time',en:'2.2.10 Takt Time',zhCN:'2.2.10 Takt Time',zhTW:'2.2.10 Takt Time',ja:'2.2.10 Takt Time'}},
        {from:170,title:{ko:'3. Outgoing Report',en:'3. Outgoing Report',zhCN:'3. Outgoing Report',zhTW:'3. Outgoing Report',ja:'3. Outgoing Report'}}
      ],
      slides:[
        {img:cmImg('J','nbga',1),tx:{
          vi:'H/W Troubleshooting Manual, phiên bản 1.0.1 (cập nhật lần cuối 2024-06-26).',
          en:'H/W Troubleshooting Manual, Version 1.0.1 (last updated 2024-06-26).',
          ko:'H/W Trouble Shooting Manual, Ver 1.0.1 (최종 수정일: 2024-06-26).',
          zhCN:'H/W Trouble Shooting Manual,版本1.0.1(最后更新:2024-06-26)。',
          zhTW:'H/W Trouble Shooting Manual,版本1.0.1(最後更新:2024-06-26)。',
          ja:'H/W Trouble Shooting Manual、バージョン1.0.1(最終更新日:2024-06-26)。'
        }},
        {img:cmImg('J','nbga',2),tx:{
          vi:'Lịch sử sửa đổi — v1.0.0 (2023-12-21): hoàn thành cấu trúc cơ bản; v1.0.1 (2024-06-26): cập nhật.',
          en:'Revision history — v1.0.0 (2023-12-21): basic structure completed; v1.0.1 (2024-06-26): updated.',
          ko:'개정 이력 — v1.0.0(2023-12-21): 기본 구성 완료, v1.0.1(2024-06-26): 업데이트.',
          zhCN:'修订履历——v1.0.0(2023-12-21):完成基本结构;v1.0.1(2024-06-26):更新。',
          zhTW:'修訂履歷——v1.0.0(2023-12-21):完成基本結構;v1.0.1(2024-06-26):更新。',
          ja:'改訂履歴——v1.0.0(2023-12-21):基本構成完了、v1.0.1(2024-06-26):更新。'
        }},
        {img:cmImg('J','nbga',3),tx:{
          vi:'Nội dung Troubleshooting — liệt kê từng vấn đề theo Group/Part/Module cùng số mục để tham khảo, và thiết bị nào áp dụng (N=NBGA, F=FCB3D, S=SMTV, Q=QPM, C=CSP). Bao gồm: lỗi mất nguồn, lỗi mất nguồn Motor, chuyển đổi chế độ Auto/Teach, đo nguồn bằng đồng hồ vạn năng, lỗi phát hiện I/O, sự cố kết nối Camera Sentech (chương trình CLCtrl/AF), lỗi kết nối Camera, Grab Timeout, sự cố chuyển động Handler, lỗi Interlock, và lỗi chiếu sáng.',
          en:'Troubleshooting contents — lists each issue by Group/Part/Module with the section number to reference, and which equipment it applies to (N=NBGA, F=FCB3D, S=SMTV, Q=QPM, C=CSP). Covers: power failure, motor power failure, Auto/Teach mode switching, multimeter power measurement, I/O detection failure, Sentech camera connection issues (CLCtrl/AF program), camera connection failure, grab timeout, handler motion issues, interlock malfunction, and lighting failure.',
          ko:'트러블슈팅 목차 — Group/Part/Module별로 문제 항목과 참고할 절 번호, 해당 설비(N=NBGA, F=FCB3D, S=SMTV, Q=QPM, C=CSP)를 정리한 표입니다. 전원 불량, Motor 전원 불량, Auto/Teach mode 변경, Multi Meter 전원 측정, I/O 감지 불량, Sentech Camera 연결 불량(CLCtrl/AF program), Camera 연결 불량, Grab Time Out, Handler 이동 불량, Interlock 동작 불량, 조명 불량을 다룹니다.',
          zhCN:'故障排除目录——按Group/Part/Module整理各故障项目、参考章节编号及适用设备(N=NBGA、F=FCB3D、S=SMTV、Q=QPM、C=CSP)的表格。涵盖:电源不良、Motor电源不良、Auto/Teach mode切换、Multi Meter电源测量、I/O检测不良、Sentech Camera连接不良(CLCtrl/AF program)、Camera连接不良、Grab Time Out、Handler动作不良、Interlock动作不良、照明不良。',
          zhTW:'故障排除目錄——按Group/Part/Module整理各故障項目、參考章節編號及適用設備(N=NBGA、F=FCB3D、S=SMTV、Q=QPM、C=CSP)的表格。涵蓋:電源不良、Motor電源不良、Auto/Teach mode切換、Multi Meter電源測量、I/O檢測不良、Sentech Camera連接不良(CLCtrl/AF program)、Camera連接不良、Grab Time Out、Handler動作不良、Interlock動作不良、照明不良。',
          ja:'トラブルシューティング目次——Group/Part/Moduleごとに問題項目、参照する節番号、該当設備(N=NBGA、F=FCB3D、S=SMTV、Q=QPM、C=CSP)を整理した表です。電源不良、Motor電源不良、Auto/Teach mode変更、Multi Meter電源測定、I/O検知不良、Sentechカメラ接続不良(CLCtrl/AFプログラム)、カメラ接続不良、Grab Time Out、Handler動作不良、Interlock動作不良、照明不良を扱います。'
        }},
        {img:cmImg('J','nbga',4),tx:{
          vi:'1.1.1 Lỗi mất nguồn',
          en:'1.1.1 Power Failure',
          ko:'1.1.1 전원 불량',
          zhCN:'1.1.1 电源不良',
          zhTW:'1.1.1 電源不良',
          ja:'1.1.1 電源不良'
        }},
        {img:cmImg('J','nbga',5),tx:{
          vi:'Để cấp nguồn cho thiết bị, kiểm tra các mục sau: trạng thái On/Off của Main Breaker; các Breaker bên trong tủ điện; đèn Utility panel có sáng không (một số thiết bị bỏ theo yêu cầu khách hàng); trạng thái khóa/mở cửa trên theo chế độ Auto/Teach; trạng thái nhấn/kéo nút EMS; cửa dưới đã đóng (cần cho quạt dưới); UPS On/Off (cần cho nguồn Host PC, không có ở một số thiết bị); Power Strip On/Off (cần cho nguồn PC/LED Controller, không có ở một số thiết bị); nguồn Main Air và mỗi Air Regulator giữ 4–6bar; trạng thái OP (Operation) panel; và kết nối dây cáp/Pin Connector/hư hỏng cáp — nếu một bộ phận vẫn không có nguồn sau khi bật hết Breaker, truy ngược dây cáp của nó để tìm nguyên nhân.',
          en:'To supply power to the equipment, check the following: Main breaker On/Off status; breakers inside the electric panel; whether the Utility panel lamp is on (some equipment omits it per customer request); upper door lock/unlock status per Auto/Teach mode; EMS button push/pull status; lower doors closed (needed for the lower fan); UPS On/Off (needed for Host PC power, absent on some equipment); Power Strip On/Off (needed for PC/LED Controller power, absent on some equipment); Main Air supply and that each Air Regulator holds 4–6bar; OP (Operation) panel status; and cable connections/connector pins/cable damage — if a component still has no power after all breakers are on, trace its cable wiring to find the cause.',
          ko:'설비 전원 공급을 위해 확인할 항목: Main 차단기 On/Off 상태, 전장 판넬 내부 차단기 On/Off 상태, Utility panel Lamp On/Off 여부(고객 요청 시 일부 설비는 미장착), Auto/Teach mode에 따른 상부 Door lock/unlock 상태, EMS button push/pull 상태, 하부 Fan 동작을 위한 하부 Door 닫힘 상태, Host PC 전원을 위한 UPS On/Off(일부 설비 미장착), Controller 전원을 위한 Power strip On/Off(일부 설비 미장착), Main Air 공급 여부 및 각 Air Regulator의 4~6bar 압력 유지, OP(Operation) panel 상태, Cable 연결 상태·Connector Pin 쇼트·Cable 손상 여부 — 모든 차단기를 On했음에도 특정 부위에 전원이 안 들어오면 해당 Cable 배선을 역추적하여 원인을 파악합니다.',
          zhCN:'为设备供电需确认的项目:Main断路器On/Off状态、电装面板内部断路器On/Off状态、Utility panel灯是否On/Off(依客户要求部分设备未安装)、依Auto/Teach mode决定的上部Door lock/unlock状态、EMS按钮push/pull状态、下部Fan运作所需的下部Door关闭状态、Host PC电源所需的UPS On/Off(部分设备未安装)、Controller电源所需的Power strip On/Off(部分设备未安装)、Main Air供应及各Air Regulator保持4~6bar压力、OP(Operation)panel状态、Cable连接状态·Connector Pin短路·Cable损伤情况——即使所有断路器均已On,若特定部位仍无电,需回溯该Cable配线以查明原因。',
          zhTW:'為設備供電需確認的項目:Main斷路器On/Off狀態、電裝面板內部斷路器On/Off狀態、Utility panel燈是否On/Off(依客戶要求部分設備未安裝)、依Auto/Teach mode決定的上部Door lock/unlock狀態、EMS按鈕push/pull狀態、下部Fan運作所需的下部Door關閉狀態、Host PC電源所需的UPS On/Off(部分設備未安裝)、Controller電源所需的Power strip On/Off(部分設備未安裝)、Main Air供應及各Air Regulator保持4~6bar壓力、OP(Operation)panel狀態、Cable連接狀態·Connector Pin短路·Cable損傷情況——即使所有斷路器均已On,若特定部位仍無電,需回溯該Cable配線以查明原因。',
          ja:'設備への電源供給のために確認する項目:Main遮断器のOn/Off状態、電装パネル内部の遮断器On/Off状態、Utility panelのLampがOn/Offしているか(顧客要望により一部設備は非搭載)、Auto/Teach modeに応じた上部Door lock/unlock状態、EMSボタンのpush/pull状態、下部Fan動作に必要な下部Doorの閉状態、Host PC電源に必要なUPSのOn/Off(一部設備は非搭載)、Controller電源に必要なPower strip のOn/Off(一部設備は非搭載)、Main Airの供給および各Air Regulatorが4~6barを維持しているか、OP(Operation)panelの状態、Cable接続状態・Connector Pinのショート・Cable損傷の有無——すべての遮断器をOnにしても特定箇所に電源が入らない場合は、該当Cable配線を逆にたどって原因を特定します。'
        }},
        {img:cmImg('J','nbga',6),tx:{
          vi:'Bật Main Breaker trên Main panel của thiết bị, sau đó bật tất cả Breaker bên trong tủ điện. (Ví dụ: Main Sub Electric Panel, Right — Motor Driver, Terminal Block, IO Module)',
          en:'Turn on the Main breaker on the equipment\'s Main panel, then turn on all breakers inside the electric panel. (Example: Main Sub Electric Panel, Right — Motor Driver, Terminal Block, IO Module)',
          ko:'설비 Main panel의 Main 차단기를 On하고, 전장 판넬 내부 차단기를 모두 On합니다. (예시: Main Sub Electric Panel, Right — Motor Driver, Terminal Block, IO Module)',
          zhCN:'打开设备Main panel的Main断路器,并打开电装面板内所有断路器。(示例:Main Sub Electric Panel, Right——Motor Driver、Terminal Block、IO Module)',
          zhTW:'打開設備Main panel的Main斷路器,並打開電裝面板內所有斷路器。(範例:Main Sub Electric Panel, Right——Motor Driver、Terminal Block、IO Module)',
          ja:'設備のMain panelのMain遮断器をOnにし、電装パネル内部の遮断器をすべてOnにします。(例:Main Sub Electric Panel, Right——Motor Driver、Terminal Block、IO Module)'
        }},
        {img:cmImg('J','nbga',7),tx:{
          vi:'Cùng quy trình tại Main Electric Panel (phía sau) — CP, MC, Noise filter, Terminal block, Earth bar, SMPS/PLC.',
          en:'Same procedure at the Main Electric Panel (rear) — CP, MC, Noise filter, Terminal block, Earth bar, SMPS/PLC.',
          ko:'Main Electric Panel(Rear)에서도 동일하게 진행합니다 — CP, MC, Noise filter, Terminal block, Earth bar, SMPS/PLC.',
          zhCN:'在Main Electric Panel(Rear)执行相同操作——CP、MC、Noise filter、Terminal block、Earth bar、SMPS/PLC。',
          zhTW:'在Main Electric Panel(Rear)執行相同操作——CP、MC、Noise filter、Terminal block、Earth bar、SMPS/PLC。',
          ja:'Main Electric Panel(Rear)でも同様に行います——CP、MC、Noise filter、Terminal block、Earth bar、SMPS/PLC。'
        }},
        {img:cmImg('J','nbga',8),tx:{
          vi:'Cùng quy trình tại ISO Sub Electric Panel (bên trái) — Motor driver, IO/PM module.',
          en:'Same procedure at the ISO Sub Electric Panel (left) — Motor driver, IO/PM module.',
          ko:'ISO Sub Electric Panel(Left)에서도 동일하게 진행합니다 — Motor driver, IO/PM module.',
          zhCN:'在ISO Sub Electric Panel(Left)执行相同操作——Motor driver、IO/PM module。',
          zhTW:'在ISO Sub Electric Panel(Left)執行相同操作——Motor driver、IO/PM module。',
          ja:'ISO Sub Electric Panel(Left)でも同様に行います——Motor driver、IO/PM module。'
        }},
        {img:cmImg('J','nbga',9),tx:{
          vi:'Đèn Utility panel sẽ sáng khi Breaker CP01 Power Lamp được bật. (Không có ở thiết bị theo chuẩn Intel.)',
          en:'The Utility panel lamp should turn on once the CP01 Power Lamp breaker is switched on. (Not included on Intel-spec equipment.)',
          ko:'Utility panel의 Lamp는 CP01 Power Lamp 차단기를 On해야 켜집니다. (Intel향 설비에는 미포함)',
          zhCN:'Utility panel的灯需在CP01 Power Lamp断路器On后才会亮起。(Intel规格设备不包含此灯)',
          zhTW:'Utility panel的燈需在CP01 Power Lamp斷路器On後才會亮起。(Intel規格設備不包含此燈)',
          ja:'Utility panelのLampはCP01 Power Lamp遮断器をOnにすると点灯します。(Intel向け設備には含まれません)'
        }},
        {img:cmImg('J','nbga',10),tx:{
          vi:'Auto Mode — nguồn Motor chỉ được cấp khi tất cả cửa trên đã đóng và khóa. Nếu xảy ra cảnh báo trong khi vận hành tự động: (A) nhấn Reset, (B) mở khóa Door Interlock, (C) mở cửa và xử lý điểm cảnh báo, (D) đóng cửa và khóa Interlock, (E) nhấn Reset để khôi phục nguồn Motor, (F) nhấn Lot Start để tiếp tục. Teach Mode — nguồn Motor có thể được cấp ngay cả khi cửa trên mở/chưa khóa. Chế độ Auto/Teach cũng có thể chuyển qua thiết lập I/O của chương trình Handler.',
          en:'Auto Mode — motor power is supplied only once all upper doors are closed and locked. If an alarm occurs during automatic operation: (A) press Reset, (B) release the door interlock, (C) open the door and resolve the alarm point, (D) close the door and lock the interlock, (E) press Reset to restore motor power, (F) click Lot Start to resume. Teach Mode — motor power can be supplied even with the upper doors open/unlocked. Auto/Teach mode can also be switched via the Handler program\'s I/O settings.',
          ko:'Auto Mode — 상부 Door가 모두 닫히고 잠겨야 Motor 전원이 공급됩니다. 자동 운전 중 알람 발생 시: (A) Reset 버튼 클릭, (B) Door Interlock 해제, (C) Door를 열고 알람 지점 조치, (D) Door를 닫고 Interlock을 Lock으로 전환, (E) Reset 클릭해 Motor 전원 재공급, (F) Lot Start 클릭해 자동 운전 재개. Teach Mode — 상부 Door를 열고 잠금을 해제한 상태에서도 Motor 전원 공급이 가능합니다. Auto/Teach mode는 Handler 프로그램의 I/O 설정으로도 전환할 수 있습니다.',
          zhCN:'Auto Mode——须待上部Door全部关闭并锁定后才会供应Motor电源。自动运转中发生警报时:(A)点击Reset按钮,(B)解除Door Interlock,(C)打开Door并处理警报点,(D)关闭Door并将Interlock切换为Lock,(E)点击Reset恢复Motor电源,(F)点击Lot Start恢复自动运转。Teach Mode——即使上部Door开启且解锁,也可供应Motor电源。Auto/Teach mode也可透过Handler程序的I/O设置切换。',
          zhTW:'Auto Mode——須待上部Door全部關閉並鎖定後才會供應Motor電源。自動運轉中發生警報時:(A)點擊Reset按鈕,(B)解除Door Interlock,(C)打開Door並處理警報點,(D)關閉Door並將Interlock切換為Lock,(E)點擊Reset恢復Motor電源,(F)點擊Lot Start恢復自動運轉。Teach Mode——即使上部Door開啟且解鎖,也可供應Motor電源。Auto/Teach mode也可透過Handler程式的I/O設定切換。',
          ja:'Auto Mode——上部Doorがすべて閉じて施錠された場合のみMotor電源が供給されます。自動運転中にアラームが発生した場合:(A)Resetボタンを押す、(B)Door Interlockを解除、(C)Doorを開けアラーム箇所を処置、(D)Doorを閉めInterlockをLockに切替、(E)Resetを押しMotor電源を再供給、(F)Lot Startをクリックし自動運転を再開。Teach Mode——上部Doorを開けて施錠を解除した状態でもMotor電源を供給できます。Auto/Teach modeはHandlerプログラムのI/O設定でも切り替え可能です。'
        }},
        {img:cmImg('J','nbga',11),tx:{
          vi:'Để cấp nguồn Motor, tất cả nút EMS trên thiết bị phải ở trạng thái kéo ra; nhấn dù chỉ một nút cũng cắt nguồn Motor. Nút EMS là công tắc ngắt khẩn cấp nguồn Motor và vị trí khác nhau tùy thiết bị.',
          en:'To supply motor power, all EMS buttons on the equipment must be in the pulled-out state; pushing even one cuts motor power. EMS buttons are the emergency motor-power cutoff and their positions vary by equipment.',
          ko:'Motor 전원을 공급하려면 설비에 설치된 모든 EMS button이 Pull 상태여야 합니다. 1개라도 Push되면 Motor 전원이 차단됩니다. EMS button은 비상 시 Motor 전원을 차단하는 용도이며 위치는 설비마다 다를 수 있습니다.',
          zhCN:'要供应Motor电源,设备上安装的所有EMS按钮都必须处于Pull(拉出)状态。只要有一个被Push(按下),Motor电源就会被切断。EMS按钮用于紧急情况下切断Motor电源,位置因设备而异。',
          zhTW:'要供應Motor電源,設備上安裝的所有EMS按鈕都必須處於Pull(拉出)狀態。只要有一個被Push(按下),Motor電源就會被切斷。EMS按鈕用於緊急情況下切斷Motor電源,位置因設備而異。',
          ja:'Motor電源を供給するには、設備に設置されたすべてのEMSボタンがPull状態である必要があります。1つでもPushされるとMotor電源が遮断されます。EMSボタンは非常時にMotor電源を遮断する目的で使用され、位置は設備によって異なります。'
        }},
        {img:cmImg('J','nbga',12),tx:{
          vi:'Để cấp nguồn cho Fan cửa dưới, tất cả cửa dưới phải đóng. Fan của thiết bị chính và thiết bị chống rung bật/tắt độc lập, và nguồn được cấp tự động — không thể bật thủ công.',
          en:'To power the lower-door Fan, all lower doors must be closed. The Main equipment fan and the dust-suppression equipment fan switch on/off independently, and their power is supplied automatically — it cannot be turned on manually.',
          ko:'하부 Door의 Fan에 전원을 공급하려면 하부 Door가 모두 닫혀 있어야 합니다. Main 설비와 제진 설비의 Fan은 각각 독립적으로 On/Off되며, 전원은 자동으로 공급되는 구조라 수동으로 켤 수 없습니다.',
          zhCN:'要为下部Door的Fan供电,下部Door必须全部关闭。Main设备与除振设备的Fan各自独立On/Off,其电源为自动供应结构,无法手动开启。',
          zhTW:'要為下部Door的Fan供電,下部Door必須全部關閉。Main設備與除振設備的Fan各自獨立On/Off,其電源為自動供應結構,無法手動開啟。',
          ja:'下部DoorのFanに電源を供給するには、下部Doorがすべて閉じている必要があります。Main設備と除振設備のFanはそれぞれ独立してOn/Offし、電源は自動供給される構造のため手動でONにはできません。'
        }},
        {img:cmImg('J','nbga',13),tx:{
          vi:'Nếu Fan vẫn không chạy dù đã đóng hết cửa dưới, kiểm tra: khoảng cách giữa GLS-M1 và GLS-S1 bằng cách di chuyển cơ cấu như hình (để xác nhận Fan hoạt động), và kết nối cáp của Sensor từ (GLS-S1).',
          en:'If the Fan still doesn\'t run with all lower doors closed, check: the gap between GLS-M1 and GLS-S1 by moving the mechanism as shown (to verify Fan operation), and the cable connection of the magnetic sensor (GLS-S1).',
          ko:'하부 Door를 모두 닫았는데도 Fan이 동작하지 않으면: 그림처럼 기구물을 이동시켜 GLS-M1과 GLS-S1 간 거리를 조절하며 Fan 동작을 확인하고, Magnetic Sensor(GLS-S1)의 Cable 연결 상태를 확인합니다.',
          zhCN:'若下部Door已全部关闭但Fan仍不运转,请:如图移动机构调整GLS-M1与GLS-S1之间的距离以确认Fan动作,并检查Magnetic Sensor(GLS-S1)的Cable连接状态。',
          zhTW:'若下部Door已全部關閉但Fan仍不運轉,請:如圖移動機構調整GLS-M1與GLS-S1之間的距離以確認Fan動作,並檢查Magnetic Sensor(GLS-S1)的Cable連接狀態。',
          ja:'下部Doorをすべて閉じてもFanが動作しない場合:図のように機構を動かしGLS-M1とGLS-S1間の距離を調整しながらFan動作を確認し、Magnetic Sensor(GLS-S1)のCable接続状態を確認します。'
        }},
        {img:cmImg('J','nbga',14),tx:{
          vi:'Để cấp nguồn cho Host PC, nguồn UPS phải bật. Trong quá trình vận chuyển hoặc công việc liên quan đến nguồn, luôn phải tắt nguồn UPS. (Không có UPS ở thiết bị theo chuẩn Intel.)',
          en:'To power the Host PC, the UPS power must be on. During shipping or power-related work, the UPS power must always be turned off. (No UPS on Intel-spec equipment.)',
          ko:'Host PC의 전원을 공급하려면 UPS 전원이 On되어 있어야 합니다. 설비 출하 및 전원 관련 작업 시에는 반드시 UPS 전원을 Off해야 합니다. (Intel향 설비에는 UPS 없음)',
          zhCN:'要为Host PC供电,UPS电源必须处于On状态。设备出货及电源相关作业时,必须务必将UPS电源关闭(Off)。(Intel规格设备无UPS)',
          zhTW:'要為Host PC供電,UPS電源必須處於On狀態。設備出貨及電源相關作業時,必須務必將UPS電源關閉(Off)。(Intel規格設備無UPS)',
          ja:'Host PCに電源を供給するにはUPS電源がOnである必要があります。設備出荷および電源関連作業の際は必ずUPS電源をOffにしてください。(Intel向け設備にはUPSがありません)'
        }},
        {img:cmImg('J','nbga',15),tx:{
          vi:'Để cấp nguồn cho các Controller như PC và LED Controller, Power Strip phải được bật. (3D#1, 3D#2 / Host, 2D Vision) Vị trí/sự hiện diện của Power Strip có phần khác nhau tùy thiết bị.',
          en:'To power controllers such as the PC and LED Controller, the Power Strip must be switched on. (3D#1, 3D#2 / Host, 2D Vision) Power strip location/presence varies somewhat by equipment.',
          ko:'PC나 LED Controller 같은 Controller에 전원을 공급하려면 Power Strip이 켜져 있어야 합니다. (3D#1, 3D#2 / Host, 2D Vision) Power Strip의 위치는 설비마다 일부 다르거나 없을 수 있습니다.',
          zhCN:'要为PC、LED Controller等控制器供电,Power Strip必须开启。(3D#1、3D#2 / Host、2D Vision)Power Strip的位置因设备而异,部分设备可能没有。',
          zhTW:'要為PC、LED Controller等控制器供電,Power Strip必須開啟。(3D#1、3D#2 / Host、2D Vision)Power Strip的位置因設備而異,部分設備可能沒有。',
          ja:'PCやLED Controllerなどのコントローラに電源を供給するにはPower Strip がONになっている必要があります。(3D#1、3D#2 / Host、2D Vision)Power Strip の位置は設備によって多少異なるか、無い場合もあります。'
        }},
        {img:cmImg('J','nbga',16),tx:{
          vi:'OP (Operation) panel — khi mọi Breaker trong thiết bị đã bật, đèn Power Off phải sáng, và đèn Reset phải nhấp nháy On/Off khoảng mỗi 500ms. Nhấn POWER ON làm đèn đó sáng; đèn POWER OFF khi đó phải tắt. Ở chế độ Teach, nhấn Reset khi mọi EMS đã kéo ra sẽ cấp nguồn Motor; ở chế độ Auto, nhấn Reset chỉ cấp nguồn Motor khi mọi EMS đã kéo ra và mọi cửa trên đã khóa (mở khóa một cửa trên ở chế độ Auto sẽ cắt nguồn Motor). Chú thích nút: POWER ON = bật nguồn IO/Sensor & Driver; POWER OFF = tắt nguồn IO/Sensor & Driver; START = bắt đầu chạy; STOP = dừng chạy; RESET = bật nguồn Motor (khi Reset đang nhấp nháy).',
          en:'OP (Operation) panel — once every breaker in the equipment is on, the Power Off lamp should be lit, and the Reset lamp should blink on/off roughly every 500ms. Pressing POWER ON lights that lamp; POWER OFF\'s lamp should then go out. In Teach mode, pressing Reset with all EMS pulled supplies motor power; in Auto mode, pressing Reset supplies motor power only when all EMS are pulled and all upper doors are locked (unlocking an upper door in Auto mode cuts motor power). Button legend: POWER ON = power on IO/sensors & drivers; POWER OFF = power off IO/sensors & drivers; START = start run; STOP = stop run; RESET = power on the motor (while Reset is blinking).',
          ko:'OP(Operation) panel — 설비 내 모든 차단기를 On하면 Power Off Lamp가 켜지고, Reset Lamp는 약 500ms 주기로 점멸합니다. POWER ON을 누르면 해당 Lamp가 켜지고, POWER OFF Lamp는 꺼져야 합니다. Teach mode에서는 모든 EMS가 Pull 상태일 때 Reset을 누르면 Motor 전원이 공급되고, Auto mode에서는 모든 EMS가 Pull 상태이고 상부 Door가 모두 Lock 상태일 때 Reset을 누르면 Motor 전원이 공급됩니다(Auto mode에서 상부 Door를 Unlock하면 Motor 전원 차단). 버튼 설명: POWER ON=IO(센서)·드라이버 전원 켜기, POWER OFF=IO(센서)·드라이버 전원 끄기, START=시작 실행, STOP=중지 실행, RESET=모터 전원 켜기(Reset 점멸 시).',
          zhCN:'OP(Operation)panel——设备内所有断路器On后,Power Off灯会亮起,Reset灯则约以500ms周期闪烁。按下POWER ON该灯亮起,POWER OFF灯应熄灭。Teach mode下,所有EMS处于Pull状态时按Reset即可供应Motor电源;Auto mode下,须所有EMS处于Pull状态且上部Door全部Lock时按Reset才会供应Motor电源(Auto mode下若上部Door变为Unlock,Motor电源将被切断)。按钮说明:POWER ON=开启IO(传感器)·驱动器电源,POWER OFF=关闭IO(传感器)·驱动器电源,START=开始运转,STOP=停止运转,RESET=开启马达电源(Reset闪烁时)。',
          zhTW:'OP(Operation)panel——設備內所有斷路器On後,Power Off燈會亮起,Reset燈則約以500ms週期閃爍。按下POWER ON該燈亮起,POWER OFF燈應熄滅。Teach mode下,所有EMS處於Pull狀態時按Reset即可供應Motor電源;Auto mode下,須所有EMS處於Pull狀態且上部Door全部Lock時按Reset才會供應Motor電源(Auto mode下若上部Door變為Unlock,Motor電源將被切斷)。按鈕說明:POWER ON=開啟IO(感測器)·驅動器電源,POWER OFF=關閉IO(感測器)·驅動器電源,START=開始運轉,STOP=停止運轉,RESET=開啟馬達電源(Reset閃爍時)。',
          ja:'OP(Operation)panel——設備内のすべての遮断器をOnにするとPower Offランプが点灯し、Resetランプは約500ms周期で点滅します。POWER ONを押すとそのランプが点灯し、POWER OFFランプは消灯するはずです。Teach modeではすべてのEMSがPull状態でResetを押すとMotor電源が供給され、Auto modeではすべてのEMSがPull状態かつ上部DoorがすべてLock状態のときにResetを押すとMotor電源が供給されます(Auto modeで上部DoorをUnlockするとMotor電源は遮断されます)。ボタン説明:POWER ON=IO(センサー)・ドライバー電源ON、POWER OFF=IO(センサー)・ドライバー電源OFF、START=開始実行、STOP=停止実行、RESET=モーター電源ON(Reset点滅時)。'
        }},
        {img:cmImg('J','nbga',17),tx:{
          vi:'1.1.2 Lỗi nguồn Motor',
          en:'1.1.2 Motor Power Failure',
          ko:'1.1.2 Motor 전원 불량',
          zhCN:'1.1.2 Motor电源不良',
          zhTW:'1.1.2 Motor電源不良',
          ja:'1.1.2 Motor電源不良'
        }},
        {img:cmImg('J','nbga',18),tx:{
          vi:'Kiểm tra các bộ phận sau và trạng thái của chúng: trạng thái nguồn Breaker — CP (Circuit Protector), MCB (Miniature Circuit Breaker), ELB (Earth Leakage Breaker); MCCB/ELCB thường là Breaker chính chủ (nguồn bật khi cần gạt xanh hiện đỏ). Hoạt động MC (Magnetic Contactor)/Relay — bình thường chỉ báo thụt vào trong khi hoạt động đúng. Hoạt động Safety PLC/Safety Relay — các bộ này điều khiển hệ thống Interlock của thiết bị (EMS, khóa cửa, màn chắn ánh sáng, v.v.); đèn LED xanh sáng khi bình thường (đèn LED đỏ khi lỗi). Ngoài ra kiểm tra: phát hiện Light Curtain, nút EMS đã nhả, cửa đã đóng (nếu chế độ Safety là Auto), và trạng thái nguồn/Reset của OP panel.',
          en:'Check the following parts and their status: Breaker power status — CP (Circuit Protector), MCB (Miniature Circuit Breaker), ELB (Earth Leakage Breaker); MCCB/ELCB is typically the main primary breaker (power is on when the blue lever shows red). MC (Magnetic Contactor)/Relay operation — normally the indicator retracts inward when working correctly. Safety PLC/Safety Relay operation — these control the equipment\'s Interlock system (EMS, door lock, light curtain, etc.); a green LED lights when normal (red LED on error). Also check: Light Curtain detection, EMS button released, door closed (if Safety mode is Auto), and the OP panel\'s power-on/Reset state.',
          ko:'아래 부품 및 동작 상태를 확인합니다: 차단기 전원 상태 — CP(Circuit Protector), MCB(Miniature Circuit Breaker), ELB(Earth Leakage Breaker); MCCB·ELCB는 주로 Main 1차 차단기로 사용되며 파란 레버가 적색으로 바뀌면 전원 On 상태. MC(Magnetic Contactor)·Relay 동작 유무 — 정상 동작 시 표시부가 안쪽으로 삽입됨. Safety PLC·Safety Relay 동작 유무 — 설비 Interlock System(EMS, Door Lock, Light Curtain 등)을 제어·모니터링하며 정상 시 녹색 LED 점등(Error 시 적색). 그 외 Light Curtain 감지 여부, EMS 눌림 해제 여부, Safety mode가 Auto일 때 문 닫힘 상태, OP panel의 전원 On 또는 Reset 상태를 확인합니다.',
          zhCN:'请确认以下部件及运作状态:断路器电源状态——CP(Circuit Protector)、MCB(Miniature Circuit Breaker)、ELB(Earth Leakage Breaker);MCCB、ELCB通常作为Main一次断路器使用,蓝色扳杆变红表示电源On状态。MC(Magnetic Contactor)、Relay动作与否——正常动作时指示部会向内缩入。Safety PLC、Safety Relay动作与否——控制并监控设备Interlock System(EMS、Door Lock、Light Curtain等),正常时绿灯亮起(异常时红灯)。此外还需确认Light Curtain检测状态、EMS是否已解除按下、Safety mode为Auto时门是否关闭,以及OP panel的电源On或Reset状态。',
          zhTW:'請確認以下零件及運作狀態:斷路器電源狀態——CP(Circuit Protector)、MCB(Miniature Circuit Breaker)、ELB(Earth Leakage Breaker);MCCB、ELCB通常作為Main一次斷路器使用,藍色扳桿變紅表示電源On狀態。MC(Magnetic Contactor)、Relay動作與否——正常動作時指示部會向內縮入。Safety PLC、Safety Relay動作與否——控制並監控設備Interlock System(EMS、Door Lock、Light Curtain等),正常時綠燈亮起(異常時紅燈)。此外還需確認Light Curtain檢測狀態、EMS是否已解除按下、Safety mode為Auto時門是否關閉,以及OP panel的電源On或Reset狀態。',
          ja:'以下の部品と動作状態を確認します:遮断器の電源状態——CP(Circuit Protector)、MCB(Miniature Circuit Breaker)、ELB(Earth Leakage Breaker);MCCB・ELCBは主にMain一次遮断器として使用され、青いレバーが赤に変わると電源On状態。MC(Magnetic Contactor)・Relayの動作有無——正常動作時は表示部が内側に入り込む。Safety PLC・Safety Relayの動作有無——設備のInterlock System(EMS、Door Lock、Light Curtainなど)を制御・監視し、正常時は緑LEDが点灯(エラー時は赤)。その他Light Curtainの検知有無、EMSの押し込み解除、Safety modeがAutoの場合のドア閉状態、OP panelの電源ONまたはReset状態を確認します。'
        }},
        {img:cmImg('J','nbga',19),tx:{
          vi:'1.1.3 Chuyển đổi chế độ Auto/Teach',
          en:'1.1.3 Switching Auto/Teach Mode',
          ko:'1.1.3 Auto/Teach mode 변경',
          zhCN:'1.1.3 Auto/Teach mode切换',
          zhTW:'1.1.3 Auto/Teach mode切換',
          ja:'1.1.3 Auto/Teach mode変更'
        }},
        {img:cmImg('J','nbga',20),tx:{
          vi:'Cách mở cửa sau khi đã chuyển sang chế độ Auto: khi thiết bị đã có nguồn, một khi công tắc chìa khóa có Solenoid được đặt ở chế độ Auto, tất cả cửa trên sẽ khóa. Tháo nắp bảo vệ chống thao tác tay của Interlock (nắp thép hoặc cao su) phía trên cửa, sau đó dùng dụng cụ khớp hình dạng Dial để chuyển sang Unlock. (Lưu ý: dùng lực quá mạnh có thể làm hỏng.)',
          en:'How to open a door once it has switched to Auto mode: with equipment power on, once the solenoid-equipped key switch is set to Auto mode, all upper doors lock. Remove the interlock manual-operation prevention cover (steel or rubber cap) on top of the door, then use a tool matching the dial shape to switch it to Unlock. (Caution: excessive force may damage it.)',
          ko:'Auto mode로 전환된 뒤 Door를 여는 방법: 설비 전원이 On된 상태에서 솔레노이드 부착형 키 스위치가 Auto mode가 되면 모든 상부 Door가 잠깁니다. Door 상부의 Interlock 수동 조작 방지 커버(스틸마개 또는 고무마개)를 제거한 뒤, 다이얼 모양에 맞는 공구로 Unlock 상태로 변경합니다. (주의: 과도한 힘으로 조작 시 파손될 수 있음)',
          zhCN:'切换为Auto mode后开门的方法:设备电源On的状态下,当带电磁阀的钥匙开关切换为Auto mode时,所有上部Door都会锁定。先拆下Door上部的Interlock手动操作防止盖(钢盖或橡胶盖),再用与拨盘形状相符的工具切换为Unlock状态。(注意:操作力道过大可能导致损坏)',
          zhTW:'切換為Auto mode後開門的方法:設備電源On的狀態下,當帶電磁閥的鑰匙開關切換為Auto mode時,所有上部Door都會鎖定。先拆下Door上部的Interlock手動操作防止蓋(鋼蓋或橡膠蓋),再用與撥盤形狀相符的工具切換為Unlock狀態。(注意:操作力道過大可能導致損壞)',
          ja:'Auto modeに切り替わった後にDoorを開ける方法:設備電源がONの状態でソレノイド付きキースイッチがAuto modeになると、すべての上部Doorがロックされます。Door上部のInterlock手動操作防止カバー(スチール製またはゴム製)を外し、ダイヤル形状に合った工具でUnlock状態に変更します。(注意:過度な力で操作すると破損する恐れがあります)'
        }},
        {img:cmImg('J','nbga',21),tx:{
          vi:'Sau khi cửa mở, tháo nắp bảo vệ Terminal của công tắc. Đấu tắt N24V với OUT tại Terminal công tắc sẽ kích hoạt Solenoid, cho phép xoay chìa khóa sang chế độ Teach. Với thiết bị không có công tắc chìa khóa Solenoid, chế độ Teach/Auto có thể chuyển qua I/O Map của chương trình Host thay thế.',
          en:'After the door opens, remove the switch-terminal protective cover. Shorting N24V to OUT at the switch terminal triggers the solenoid, letting the key turn to Teach mode. On equipment without a solenoid key switch, Teach/Auto mode can be switched from the Host program\'s I/O Map instead.',
          ko:'Door가 열리면 스위치 단자 보호 커버를 제거합니다. 스위치 단자에서 N24V를 OUT에 쇼트시키면 솔레노이드가 동작하며, 그때 키를 돌려 Teach mode로 변경할 수 있습니다. 솔레노이드 부착형 키 스위치가 없는 설비는 Host 프로그램의 I/O Map에서 Teach/Auto mode를 전환할 수 있습니다.',
          zhCN:'Door打开后,拆下开关端子保护盖。将开关端子的N24V与OUT短接即可使电磁阀动作,此时可转动钥匙切换为Teach mode。未配备电磁阀式钥匙开关的设备,可在Host程序的I/O Map中切换Teach/Auto mode。',
          zhTW:'Door打開後,拆下開關端子保護蓋。將開關端子的N24V與OUT短接即可使電磁閥動作,此時可轉動鑰匙切換為Teach mode。未配備電磁閥式鑰匙開關的設備,可在Host程式的I/O Map中切換Teach/Auto mode。',
          ja:'Doorが開いたら、スイッチ端子保護カバーを外します。スイッチ端子でN24VをOUTにショートさせるとソレノイドが動作し、その際にキーを回してTeach modeに変更できます。ソレノイド付きキースイッチが搭載されていない設備は、HostプログラムのI/O MapでTeach/Auto modeを切り替えられます。'
        }},
        {img:cmImg('J','nbga',22),tx:{
          vi:'1.1.4 Đo nguồn bằng đồng hồ vạn năng',
          en:'1.1.4 Measuring Power with a Multimeter',
          ko:'1.1.4 Multi Meter를 이용한 전원 측정 방법',
          zhCN:'1.1.4 使用Multi Meter测量电源的方法',
          zhTW:'1.1.4 使用Multi Meter測量電源的方法',
          ja:'1.1.4 Multi Meterを利用した電源測定方法'
        }},
        {img:cmImg('J','nbga',23),tx:{
          vi:'Chương này đề cập đến đo điện áp và kiểm tra thông mạch bằng đồng hồ vạn năng. Cần chuyên môn về điện, và có nguy cơ giật điện do điện áp cao hoặc xung điện — mang thiết bị bảo hộ và nắm quy trình trước khi bắt đầu. Lưu ý: kiểm tra trạng thái pin của đồng hồ trước (để không hết pin giữa chừng); kiểm tra thông mạch của que đo ở thang đo thông mạch trước (đo với que đo bị hỏng rất nguy hiểm); và kiểm tra lớp cách điện của que đo có hư hỏng không (kim loại lộ ra có nguy cơ giật điện).',
          en:'This chapter covers voltage measurement and continuity checking with a multimeter. It requires electrical expertise, and carries a shock risk from high voltage or surge — wear protective gear and know the procedure before starting. Precautions: check the tester\'s own battery status first (so it doesn\'t die mid-measurement); continuity-check the test leads on the continuity range first (measuring with a broken lead is very dangerous); and check the leads\' insulation for damage (exposed metal risks electric shock).',
          ko:'이번 챕터에서는 Multi Meter를 사용한 전압 측정 및 단선 여부 확인 방법을 다룹니다. 전기·전장에 대한 전문성과 이해가 필요하며, 고전압이나 서지로 인한 감전 위험이 있으므로 방호 도구를 착용하고 사용법을 숙지한 뒤 시작합니다. 주의사항: 측정 도중 배터리가 꺼지지 않도록 테스터기 배터리 상태를 먼저 확인, 도통 레인지로 테스트 리드를 먼저 도통 체크(단선된 채로 계측하면 매우 위험), 테스트 리드의 피복 손상 여부 확인(금속 부분 노출 시 감전 위험).',
          zhCN:'本章介绍使用Multi Meter进行电压测量及断线确认的方法。需要具备电气·电装方面的专业知识,且存在高压或突波(Surge)导致触电的风险,请先穿戴防护用具并熟悉使用方法后再开始。注意事项:先确认测试器本身的电池状态,避免测量过程中电池耗尽;先以导通挡对测试棒进行导通检查(在断线状态下测量非常危险);检查测试棒的绝缘皮是否损坏(金属部分外露有触电风险)。',
          zhTW:'本章介紹使用Multi Meter進行電壓測量及斷線確認的方法。需要具備電氣·電裝方面的專業知識,且存在高壓或突波(Surge)導致觸電的風險,請先穿戴防護用具並熟悉使用方法後再開始。注意事項:先確認測試器本身的電池狀態,避免測量過程中電池耗盡;先以導通檔對測試棒進行導通檢查(在斷線狀態下測量非常危險);檢查測試棒的絕緣皮是否損壞(金屬部分外露有觸電風險)。',
          ja:'本章ではMulti Meterを使用した電圧測定および断線確認の方法を扱います。電気・電装に関する専門性と理解が必要で、高電圧やサージによる感電の危険があるため、防護具を着用し使用方法を熟知してから開始してください。注意事項:測定中にバッテリーが切れないようテスター本体のバッテリー状態を先に確認、導通レンジでテストリードを先に導通チェック(断線したまま計測するのは非常に危険)、テストリードの被覆の損傷有無を確認(金属部分が露出していると感電の危険)。'
        }},
        {img:cmImg('J','nbga',24),tx:{
          vi:'Thêm lưu ý về đồng hồ vạn năng: nếu đầu kim loại lộ ra của que đo quá dài, có nguy cơ chập mạch khi đo điện áp; và không bao giờ đo điện áp vượt quá dải định mức của đồng hồ.',
          en:'More multimeter precautions: if the test lead\'s exposed metal tip is too long, it risks a short circuit during voltage measurement; and never measure a voltage exceeding the meter\'s rated range.',
          ko:'Multi Meter 사용 시 추가 주의사항: 테스트 리드 앞쪽 금속 부분이 길면 전압 측정 시 단락 사고가 발생할 수 있습니다. 측정기의 측정 허용치 이상의 전원은 측정하지 않습니다.',
          zhCN:'使用Multi Meter的其他注意事项:若测试棒前端外露金属部分过长,电压测量时可能发生短路事故。请勿测量超过测量器额定测量范围的电源。',
          zhTW:'使用Multi Meter的其他注意事項:若測試棒前端外露金屬部分過長,電壓測量時可能發生短路事故。請勿測量超過測量器額定測量範圍的電源。',
          ja:'Multi Meter使用時の追加注意事項:テストリード先端の露出金属部分が長いと、電圧測定時に短絡事故が発生する恐れがあります。測定器の許容測定範囲を超える電源は測定しないでください。'
        }},
        {img:cmImg('J','nbga',25),tx:{
          vi:'Tham khảo loại dây đấu: 1 pha — L (Live), N (Neutral), G (Ground); 3 pha — R/S/T (ba dây pha), N (Neutral). Loại kết nối nguồn khác nhau tùy thiết bị, nên đo tương ứng.',
          en:'Reference for wiring types: Single-phase — L (Live), N (Neutral), G (Ground); 3-phase — R/S/T (three-phase lines), N (Neutral). Power connection type varies by equipment, so measure accordingly.',
          ko:'배선 방식 참고: 단상 — L(활성선/Live), N(중성선/Neutral), G(접지선/Ground); 3상 — R/S/T(3상 전선), N(중성선/Neutral). 설비마다 전원 연결 방식이 다르므로 확인 후 측정합니다.',
          zhCN:'配线方式参考:单相——L(活线/Live)、N(中性线/Neutral)、G(接地线/Ground);三相——R/S/T(三相电线)、N(中性线/Neutral)。设备的电源连接方式各异,请先确认再进行测量。',
          zhTW:'配線方式參考:單相——L(火線/Live)、N(中性線/Neutral)、G(接地線/Ground);三相——R/S/T(三相電線)、N(中性線/Neutral)。設備的電源連接方式各異,請先確認再進行測量。',
          ja:'配線方式の参考:単相——L(活性線/Live)、N(中性線/Neutral)、G(接地線/Ground);3相——R/S/T(3相電線)、N(中性線/Neutral)。設備によって電源接続方式が異なるため、確認の上測定します。'
        }},
        {img:cmImg('J','nbga',26),tx:{
          vi:'Tham khảo cách đo dây đấu của MC (Magnetic Contactor): nguồn có thể đấu như (A1,A2), (A1,A4), (A2,A3), hoặc (A3,A4); tiếp điểm chính đấu từ trên xuống dưới, và Terminal #4 đấu theo NC/NO.',
          en:'Reference for measuring an MC (Magnetic Contactor)\'s wiring: power can be connected as (A1,A2), (A1,A4), (A2,A3), or (A3,A4); the main contacts connect top-to-bottom, and terminal #4 connects according to NC/NO.',
          ko:'MC(Magnetic Contactor) 배선 측정 참고: 전원은 (A1,A2), (A1,A4), (A2,A3), (A3,A4) 방식으로 연결될 수 있으며, 주접점은 위아래로 연결되고 4번은 NC/NO에 따라 연결됩니다.',
          zhCN:'MC(Magnetic Contactor)接线测量参考:电源可以(A1,A2)、(A1,A4)、(A2,A3)、(A3,A4)的方式连接,主接点上下连接,4号则依NC/NO连接。',
          zhTW:'MC(Magnetic Contactor)接線測量參考:電源可以(A1,A2)、(A1,A4)、(A2,A3)、(A3,A4)的方式連接,主接點上下連接,4號則依NC/NO連接。',
          ja:'MC(Magnetic Contactor)配線測定の参考:電源は(A1,A2)、(A1,A4)、(A2,A3)、(A3,A4)の方式で接続され得ます。主接点は上下に接続され、4番はNC/NOに応じて接続されます。'
        }},
        {img:cmImg('J','nbga',27),tx:{
          vi:'Cách kiểm tra đầu vào/ra nguồn SMPS: kiểm tra là ACV hay DCV, đặt Dial đồng hồ tương ứng, và đo (VD ở 220V).',
          en:'How to check SMPS power input/output: check whether it\'s ACV or DCV, set the meter dial accordingly, and measure (e.g. at 220V).',
          ko:'SMPS 전원 입출력 확인 방법: ACV인지 DCV인지 확인 후 다이얼을 맞추고 측정합니다 (예: 220V).',
          zhCN:'确认SMPS电源输入输出的方法:先确认是ACV还是DCV,调整档位后进行测量(例如:220V)。',
          zhTW:'確認SMPS電源輸入輸出的方法:先確認是ACV還是DCV,調整檔位後進行測量(例如:220V)。',
          ja:'SMPS電源の入出力確認方法:ACVかDCVかを確認しダイヤルを合わせて測定します(例:220V)。'
        }},
        {img:cmImg('J','nbga',28),tx:{
          vi:'Hai ví dụ xử lý sự cố DC Fan bằng đồng hồ vạn năng. Ví dụ 1 (Fan không chạy): AC OK, DC OK, MC-hoạt động AC OK → phân tích: đấu dây MC sai hoặc MC hỏng. Ví dụ 2 (Fan không chạy): AC OK qua MC, nhưng DC lỗi ngay tại Fan (không phát hiện DC tại đó) → phân tích: DC Fan hỏng, hoặc Connector/cáp DC Fan hỏng.',
          en:'Two DC Fan troubleshooting examples using a multimeter. Example 1 (Fan not running): AC OK, DC OK, MC-operating AC OK → analysis: wrong MC wiring or a bad MC. Example 2 (Fan not running): AC OK through MC, but DC fails at the Fan itself (DC not detected there) → analysis: bad DC Fan, or a bad DC Fan connector/cable.',
          ko:'Multi Meter를 이용한 DC Fan 트러블슈팅 예시 2가지. 예시1(Fan 미동작): AC 측정 O, DC 측정 O, MC 작동 시 AC 측정 O → 분석: MC 배선 오류 또는 MC 불량. 예시2(Fan 미동작): MC까지는 AC 측정 O이나 Fan 자체에서 DC 측정 X → 분석: DC Fan 불량 또는 DC Fan 커넥터/케이블 불량.',
          zhCN:'使用Multi Meter进行DC Fan故障排查的2个示例。示例1(Fan不动作):AC测量O、DC测量O、MC动作时AC测量O→分析:MC接线错误或MC不良。示例2(Fan不动作):到MC为止AC测量O,但Fan本身DC测量X→分析:DC Fan不良,或DC Fan连接器/线缆不良。',
          zhTW:'使用Multi Meter進行DC Fan故障排查的2個範例。範例1(Fan不動作):AC測量O、DC測量O、MC動作時AC測量O→分析:MC接線錯誤或MC不良。範例2(Fan不動作):到MC為止AC測量O,但Fan本身DC測量X→分析:DC Fan不良,或DC Fan連接器/線纜不良。',
          ja:'Multi MeterによるDC Fanトラブルシューティング例2つ。例1(Fan不動作):AC測定O、DC測定O、MC動作時AC測定O→分析:MC配線誤りまたはMC不良。例2(Fan不動作):MCまではAC測定Oだが、Fan自体でDC測定X→分析:DC Fan不良、またはDC Fanコネクタ/ケーブル不良。'
        }},
        {img:cmImg('J','nbga',29),tx:{
          vi:'1.2.1 Lỗi phát hiện I/O',
          en:'1.2.1 I/O Detection Failure',
          ko:'1.2.1 I/O 감지 불량',
          zhCN:'1.2.1 I/O检测不良',
          zhTW:'1.2.1 I/O檢測不良',
          ja:'1.2.1 I/O検知不良'
        }},
        {img:cmImg('J','nbga',30),tx:{
          vi:'Kiểm tra trạng thái nguồn của Sensor (kết nối Connector, hư hỏng cáp, nguồn I/O Module), và xác nhận Sensor kích hoạt đúng theo hành động của nó — nếu không, điều chỉnh vị trí (qua Bolt hoặc giá đỡ gắn) và xác minh lại. Nếu Sensor kích hoạt nhưng tín hiệu Input đọc bị đảo ngược, kiểm tra thứ tự Pin của Connector, hoặc thử đảo thiết lập NC/NO của Sensor đó trong chương trình Pear và xác nhận tín hiệu đã đúng.',
          en:'Check the sensor\'s power status (connector connection, cable damage, I/O module power), and confirm the sensor triggers correctly for its action — if not, adjust its position (via its mounting bolt or bracket) and re-verify. If the sensor triggers but the Input signal reads inverted, check the connector\'s pin order, or try reversing that sensor\'s NC/NO setting in the Pear program and confirm the signal is now correct.',
          ko:'Sensor의 전원 상태(Connector 연결, Cable 손상 여부, I/O Module 전원 상태)를 확인하고, 동작에 맞게 Sensor가 감지되는지 확인합니다 — 감지되지 않으면 고정 볼트나 브라켓 위치를 조정해 다시 확인합니다. 감지는 되나 Input 신호가 반대로 읽히면 Connector Pin 순서를 확인하거나, Pear 프로그램에서 해당 Sensor의 NC/NO를 반대로 설정한 뒤 정상 신호가 들어오는지 확인합니다.',
          zhCN:'确认Sensor的电源状态(Connector连接、Cable损伤与否、I/O Module电源状态),并确认Sensor是否随动作正常感应——若未感应,调整固定螺栓或支架位置后再次确认。若已感应但Input信号读取相反,请确认Connector的Pin顺序,或在Pear程序中将该Sensor的NC/NO反向设置后确认信号是否恢复正常。',
          zhTW:'確認Sensor的電源狀態(Connector連接、Cable損傷與否、I/O Module電源狀態),並確認Sensor是否隨動作正常感應——若未感應,調整固定螺栓或支架位置後再次確認。若已感應但Input訊號讀取相反,請確認Connector的Pin順序,或在Pear程式中將該Sensor的NC/NO反向設定後確認訊號是否恢復正常。',
          ja:'Sensorの電源状態(Connector接続、Cable損傷有無、I/O Module電源状態)を確認し、動作に応じてSensorが検知されるか確認します——検知されない場合は固定ボルトやブラケット位置を調整して再確認します。検知はされるがInput信号が逆に読み取られる場合は、ConnectorのPin順序を確認するか、Pearプログラムで該当SensorのNC/NOを反転設定し正常な信号が入るか確認します。'
        }},
        {img:cmImg('J','nbga',31),tx:{
          vi:'Cách kiểm tra tín hiệu Input qua chương trình Host: chạy chương trình Host, vào Handler ▸ I/O, và theo dõi tín hiệu Input của Sensor trong khi thực hiện hành động lẽ ra kích hoạt nó (ví dụ: Grip Output=On → Input=On; Grip Output=Off → Ungrip Input=On).',
          en:'How to check the Input signal via the Host program: run the Host program, go to Handler ▸ I/O, and watch the sensor\'s Input signal while performing the action that should trigger it (examples: Grip Output=On → Input=On; Grip Output=Off → Ungrip Input=On).',
          ko:'Host 프로그램으로 Input 신호 확인하는 방법: Host 프로그램 실행 후 Handler ▸ I/O에 진입해 해당 Sensor의 동작(예1: Grip Output On → Input On, 예2: Grip Output Off → Ungrip Input On)을 수행하며 Input 신호를 확인합니다.',
          zhCN:'透过Host程序确认Input信号的方法:执行Host程序后进入Handler ▸ I/O,执行该Sensor对应的动作(例1:Grip Output On → Input On;例2:Grip Output Off → Ungrip Input On)并确认Input信号。',
          zhTW:'透過Host程式確認Input訊號的方法:執行Host程式後進入Handler ▸ I/O,執行該Sensor對應的動作(例1:Grip Output On → Input On;例2:Grip Output Off → Ungrip Input On)並確認Input訊號。',
          ja:'Hostプログラムで Input信号を確認する方法:Hostプログラムを実行後Handler ▸ I/Oに入り、該当Sensorの動作(例1:Grip Output On → Input On、例2:Grip Output Off → Ungrip Input On)を行いながらInput信号を確認します。'
        }},
        {img:cmImg('J','nbga',32),tx:{
          vi:'Bạn cũng có thể kiểm tra tín hiệu Input qua đèn LED của I/O Module trong tủ điện: thực hiện hành động của Sensor và xem đèn LED tương ứng có sáng không. (Số nhãn và số I/O Module khác nhau vì nhãn bắt đầu từ 0 trong khi số I/O Module bắt đầu từ 1 — VD IN3-07 sáng đèn LED #8 của I/O Module, IN3-08 sáng đèn LED #9.)',
          en:'You can also check the Input signal via the I/O Module LEDs in the electric panel: perform the sensor\'s action and watch for the corresponding LED to light up. (Label numbers and I/O Module numbers differ because labels start at 0 while I/O module numbering starts at 1 — e.g. IN3-07 lights I/O module LED #8, IN3-08 lights LED #9.)',
          ko:'전장 판넬의 I/O Module LED로도 Input 신호를 확인할 수 있습니다: Sensor 동작을 수행하며 해당 LED가 점등되는지 확인합니다. (Label 번호는 0부터, I/O module 번호는 1부터 시작하여 번호가 다르게 표시됩니다 — 예: IN3-07은 I/O module 8번 LED, IN3-08은 9번 LED 점등.)',
          zhCN:'也可透过电装面板的I/O Module LED确认Input信号:执行Sensor动作并确认对应LED是否点亮。(Label编号从0开始、I/O module编号从1开始,因此两者编号不同——例如:IN3-07会点亮I/O module的8号LED,IN3-08会点亮9号LED。)',
          zhTW:'也可透過電裝面板的I/O Module LED確認Input訊號:執行Sensor動作並確認對應LED是否點亮。(Label編號從0開始、I/O module編號從1開始,因此兩者編號不同——例如:IN3-07會點亮I/O module的8號LED,IN3-08會點亮9號LED。)',
          ja:'電装パネルのI/O Module LEDでもInput信号を確認できます:Sensor動作を行いながら該当LEDが点灯するか確認します。(Label番号は0から、I/O module番号は1から始まるため番号が異なります——例:IN3-07はI/O moduleの8番LED、IN3-08は9番LEDが点灯。)'
        }},
        {img:cmImg('J','nbga',33),tx:{
          vi:'Để kiểm tra một Input cụ thể (VD #19) có hoạt động không, bạn có thể tạm thời chuyển Pin tín hiệu Input khác sang đó để kiểm tra (luôn khôi phục lại sau đó). Nếu cả thao tác thực tế của Sensor lẫn việc cấp trực tiếp N24V tại Socket đều không làm sáng đèn LED I/O Module, khả năng cao Module đó bị lỗi; nếu cấp N24V làm đèn sáng, nghi ngờ đường dây Input hoặc Sensor.',
          en:'To test whether a specific Input (e.g. #19) works, you can temporarily move another Input signal pin onto it to check (always restore it afterward). If neither the sensor\'s process nor a direct N24V injection at the socket lights the I/O Module LED, the module itself is likely faulty; if injecting N24V does light it, suspect the Input line wiring or the sensor.',
          ko:'특정 Input(예: 19번)이 정상 동작하는지 확인하려면 다른 Input 신호 Pin을 임시로 옮겨 확인할 수 있습니다(확인 후 반드시 원복). Sensor 동작 프로세스를 수행해도 LED가 점등되지 않고, 해당 Socket에 N24V를 직접 인가해도 LED가 점등되지 않으면 I/O Module 불량을 의심하고, N24V 인가 시 LED가 점등되면 Input Line 배선 또는 Sensor 불량을 의심합니다.',
          zhCN:'若要确认特定Input(如19号)是否正常动作,可暂时移动其他Input信号Pin进行确认(确认后务必复原)。若执行Sensor动作流程后LED不亮,且直接对该Socket施加N24V后LED仍不亮,可怀疑I/O Module不良;若施加N24V后LED点亮,则可怀疑Input Line配线或Sensor不良。',
          zhTW:'若要確認特定Input(如19號)是否正常動作,可暫時移動其他Input訊號Pin進行確認(確認後務必復原)。若執行Sensor動作流程後LED不亮,且直接對該Socket施加N24V後LED仍不亮,可懷疑I/O Module不良;若施加N24V後LED點亮,則可懷疑Input Line配線或Sensor不良。',
          ja:'特定のInput(例:19番)が正常動作するか確認するには、別のInput信号Pinを一時的に移動して確認できます(確認後は必ず元に戻します)。Sensorの動作プロセスを行ってもLEDが点灯せず、該当SocketにN24Vを直接印加してもLEDが点灯しない場合はI/O Moduleの不良を疑い、N24V印加でLEDが点灯する場合はInput Lineの配線またはSensorの不良を疑います。'
        }},
        {img:cmImg('J','nbga',34),tx:{
          vi:'1.2.2 Lỗi kết nối (chương trình CLCtrl)',
          en:'1.2.2 Connection Failure (CLCtrl program)',
          ko:'1.2.2 연결 불량(CLCtrl program)',
          zhCN:'1.2.2 连接不良(CLCtrl program)',
          zhTW:'1.2.2 連接不良(CLCtrl program)',
          ja:'1.2.2 接続不良(CLCtrl program)'
        }},
        {img:cmImg('J','nbga',35),tx:{
          vi:'Kiểm tra Camera và AF controller đã bật nguồn. Sau đó tắt hoàn toàn nguồn Camera Sentech và Host PC, chờ hơn 1 phút để xả điện hoàn toàn, rồi khởi động/kết nối lại.',
          en:'Check that the Camera and AF controller are powered on. Then fully power down the Sentech camera and Host PC, wait over 1 minute for it to fully discharge, and reboot/reconnect.',
          ko:'Camera 전원이 On되어 있는지, AF Controller 전원이 On되어 있는지 확인합니다. Sentech Camera와 Host PC의 전원을 해체하고 1분 이상 완전 방전시킨 뒤 재부팅하여 재연결합니다.',
          zhCN:'确认Camera电源是否为On、AF Controller电源是否为On。将Sentech Camera与Host PC断电,完全放电1分钟以上后重新开机并重新连接。',
          zhTW:'確認Camera電源是否為On、AF Controller電源是否為On。將Sentech Camera與Host PC斷電,完全放電1分鐘以上後重新開機並重新連接。',
          ja:'Camera電源がOnになっているか、AF Controller電源がOnになっているか確認します。Sentech CameraとHost PCの電源を落とし、1分以上完全放電させた後、再起動して再接続します。'
        }},
        {img:cmImg('J','nbga',36),tx:{
          vi:'Trong chương trình AF, chọn chế độ Camera và bỏ chọn Camera Sync (để tránh xung đột truy cập). Kiểm tra CL Cable kết nối Camera với cổng Base của AF controller, và kiểm tra kết nối cổng, chập Pin Connector, và hư hỏng cáp.',
          en:'In the AF program, select Camera mode and uncheck Camera Sync (to avoid an access conflict). Check that the CL Cable connects the Camera to the AF controller\'s Base port, and check the port connection, connector pin shorts, and cable damage.',
          ko:'AF Program에서 Camera Mode를 선택하고 Camera Sync 체크를 해제합니다(액세스 충돌 방지). CL Cable이 Camera↔AF Controller의 Base 단자에 연결되었는지, Port 연결 상태·Connector Pin 쇼트·Cable 손상 여부를 확인합니다.',
          zhCN:'在AF Program中选择Camera Mode并取消勾选Camera Sync(避免存取冲突)。确认CL Cable是否连接于Camera↔AF Controller的Base端子,并检查Port连接状态·Connector Pin短路·Cable损伤情况。',
          zhTW:'在AF Program中選擇Camera Mode並取消勾選Camera Sync(避免存取衝突)。確認CL Cable是否連接於Camera↔AF Controller的Base端子,並檢查Port連接狀態·Connector Pin短路·Cable損傷情況。',
          ja:'AF ProgramでCamera Modeを選択し、Camera Syncのチェックを外します(アクセス競合防止)。CL CableがCamera↔AF ControllerのBase端子に接続されているか、Port接続状態・Connector Pinのショート・Cable損傷の有無を確認します。'
        }},
        {img:cmImg('J','nbga',37),tx:{
          vi:'1.2.3 Lỗi kết nối (chương trình AF)',
          en:'1.2.3 Connection Failure (AF program)',
          ko:'1.2.3 연결 불량(AF program)',
          zhCN:'1.2.3 连接不良(AF program)',
          zhTW:'1.2.3 連接不良(AF program)',
          ja:'1.2.3 接続不良(AF program)'
        }},
        {img:cmImg('J','nbga',38),tx:{
          vi:'Kiểm tra AF controller đã bật nguồn, và kiểm tra kết nối cổng, chập Pin Connector, và hư hỏng cáp.',
          en:'Check that the AF controller is powered on, and check the port connection, connector pin shorts, and cable damage.',
          ko:'AF Controller 전원이 On되어 있는지 확인하고, Port 연결 상태·Connector Pin 쇼트·Cable 손상 여부를 확인합니다.',
          zhCN:'确认AF Controller电源是否为On,并检查Port连接状态·Connector Pin短路·Cable损伤情况。',
          zhTW:'確認AF Controller電源是否為On,並檢查Port連接狀態·Connector Pin短路·Cable損傷情況。',
          ja:'AF Controllerの電源がOnになっているか確認し、Port接続状態・Connector Pinのショート・Cable損傷の有無を確認します。'
        }},
        {img:cmImg('J','nbga',39),tx:{
          vi:'Trong chương trình AF, chuyển giao diện Main sang Ethernet, nhập địa chỉ IP của AF controller, và nhấn Connect — nếu thất bại, xác minh địa chỉ IP đã nhập đúng.',
          en:'In the AF program, switch the Main interface to Ethernet, enter the AF controller\'s IP address, and click Connect — if it fails, verify the IP address was entered correctly.',
          ko:'AF Program에서 Main Interface를 Ethernet으로 변경하고, 해당 AF Controller의 IP 주소를 입력한 뒤 Connect합니다 — 연결되지 않으면 IP 주소가 올바르게 입력되었는지 확인합니다.',
          zhCN:'在AF Program中将Main Interface切换为Ethernet,输入该AF Controller的IP位址后点击Connect——若无法连接,请确认IP位址是否输入正确。',
          zhTW:'在AF Program中將Main Interface切換為Ethernet,輸入該AF Controller的IP位址後點擊Connect——若無法連接,請確認IP位址是否輸入正確。',
          ja:'AF ProgramでMain InterfaceをEthernetに変更し、該当AF ControllerのIPアドレスを入力後Connectします——接続できない場合はIPアドレスが正しく入力されているか確認します。'
        }},
        {img:cmImg('J','nbga',40),tx:{
          vi:'Kiểm tra cáp LAN đã kết nối vào cổng Ethernet, và kiểm tra kết nối cổng, chập Pin Connector, và hư hỏng cáp.',
          en:'Check that a LAN cable is connected to the Ethernet port, and check the port connection, connector pin shorts, and cable damage.',
          ko:'Ethernet Port에 LAN Cable이 연결되었는지 확인하고, Port 연결 상태·Connector Pin 쇼트·Cable 손상 여부를 확인합니다.',
          zhCN:'确认LAN Cable是否连接至Ethernet Port,并检查Port连接状态·Connector Pin短路·Cable损伤情况。',
          zhTW:'確認LAN Cable是否連接至Ethernet Port,並檢查Port連接狀態·Connector Pin短路·Cable損傷情況。',
          ja:'Ethernet PortにLAN Cableが接続されているか確認し、Port接続状態・Connector Pinのショート・Cable損傷の有無を確認します。'
        }},
        {img:cmImg('J','nbga',41),tx:{
          vi:'Xác minh cáp LAN giữa Host PC và mỗi AF controller khớp với tên mạng của chúng (AF01, AF02, AF03) — kiểm tra bằng cách rút cáp LAN của một AF controller và xác nhận đúng kết nối mạng đó bị mất. Cũng kiểm tra thiết lập IP của AF trong Network & Internet settings của Host PC.',
          en:'Verify the LAN cables between Host PC and each AF controller match their network names (AF01, AF02, AF03) — check by unplugging an AF controller\'s LAN cable and confirming that specific network connection drops. Also check the AF IP settings in the Host PC\'s Network & Internet settings.',
          ko:'Host PC ↔ AF Controller의 LAN Cable이 네트워크 이름(AF01, AF02, AF03)에 맞게 연결되었는지 확인합니다 — AF Controller의 LAN Cable을 뽑아 해당 네트워크 연결이 끊어지는지로 확인 가능합니다. Host PC의 <네트워크 및 인터넷 설정>에서 AF IP 설정도 확인합니다.',
          zhCN:'确认Host PC↔AF Controller的LAN Cable是否依网络名称(AF01、AF02、AF03)正确连接——可透过拔除AF Controller的LAN Cable、确认对应网络连接是否中断来验证。同时在Host PC的〈网络和网际网路设置〉中确认AF IP设置。',
          zhTW:'確認Host PC↔AF Controller的LAN Cable是否依網路名稱(AF01、AF02、AF03)正確連接——可透過拔除AF Controller的LAN Cable、確認對應網路連接是否中斷來驗證。同時在Host PC的〈網路和網際網路設定〉中確認AF IP設定。',
          ja:'Host PC↔AF ControllerのLAN Cableがネットワーク名(AF01、AF02、AF03)通りに接続されているか確認します——AF ControllerのLAN Cableを抜いて該当ネットワーク接続が切れるかで確認できます。Host PCの〈ネットワークとインターネットの設定〉でAF IP設定も確認します。'
        }},
        {img:cmImg('J','nbga',42),tx:{
          vi:'Trong chương trình AF, chuyển giao diện Main sang RS232, chọn đúng số cổng COM kết nối với AF controller, và Connect. Tắt hoàn toàn nguồn và kết nối lại Camera Sentech + Host PC (xả điện hơn 1 phút) nếu cần; nếu vẫn thất bại, thử chuyển kết nối sang cổng COM khác trước khi Connect.',
          en:'In the AF program, switch the Main interface to RS232, select the correct COM port number connected to the AF controller, and Connect. Fully power down and reconnect the Sentech camera + Host PC (discharge over 1 minute) if needed; if it still fails, try moving the connection to a different COM port before connecting.',
          ko:'AF Program에서 Main Interface를 RS232로 변경하고, AF Controller와 연결된 COM Port 번호를 선택 후 Connect합니다. 필요 시 Sentech Camera와 Host PC 전원을 해체하고 1분 이상 완전 방전 후 재부팅하여 재연결합니다 — 그래도 연결되지 않으면 다른 COM Port로 옮겨 Connect를 시도합니다.',
          zhCN:'在AF Program中将Main Interface切换为RS232,选择与AF Controller连接的COM Port编号后Connect。必要时将Sentech Camera与Host PC断电,完全放电1分钟以上后重新开机并重新连接——若仍无法连接,可尝试改接其他COM Port后再Connect。',
          zhTW:'在AF Program中將Main Interface切換為RS232,選擇與AF Controller連接的COM Port編號後Connect。必要時將Sentech Camera與Host PC斷電,完全放電1分鐘以上後重新開機並重新連接——若仍無法連接,可嘗試改接其他COM Port後再Connect。',
          ja:'AF ProgramでMain InterfaceをRS232に変更し、AF Controllerに接続されたCOM Port番号を選択後Connectします。必要に応じてSentech CameraとHost PCの電源を落とし、1分以上完全放電後に再起動して再接続します——それでも接続できない場合は別のCOM Portに繋ぎ替えてConnectを試みます。'
        }},
        {img:cmImg('J','nbga',43),tx:{
          vi:'Kiểm tra cáp đã kết nối vào cổng RS-232 của AF controller, và kiểm tra kết nối cổng, cáp bị đấu chéo (xác minh không kết nối nhầm sang AF controller khác), chập Pin Connector, và hư hỏng cáp.',
          en:'Check that a cable is connected to the AF controller\'s RS-232 port, and check the port connection, cable crossing (verify it isn\'t connected to a different AF controller), connector pin shorts, and cable damage.',
          ko:'AF Controller의 RS-232 Port에 Cable이 연결되었는지 확인하고, Port 연결 상태·Cable Cross 여부(다른 AF Controller와 연결되지 않았는지)·Connector Pin 쇼트·Cable 손상 여부를 확인합니다.',
          zhCN:'确认AF Controller的RS-232 Port是否已连接Cable,并检查Port连接状态·Cable Cross情况(是否误接至其他AF Controller)·Connector Pin短路·Cable损伤情况。',
          zhTW:'確認AF Controller的RS-232 Port是否已連接Cable,並檢查Port連接狀態·Cable Cross情況(是否誤接至其他AF Controller)·Connector Pin短路·Cable損傷情況。',
          ja:'AF ControllerのRS-232 PortにCableが接続されているか確認し、Port接続状態・Cable Cross(別のAF Controllerに接続されていないか)・Connector Pinのショート・Cable損傷の有無を確認します。'
        }},
        {img:cmImg('J','nbga',44),tx:{
          vi:'Kiểm tra phiên bản chương trình AF có tương thích với chương trình Host — phiên bản có thể xác nhận trên màn hình hiện ra khi nhấn Connect sau khi chạy chương trình AF.',
          en:'Check that the AF program version is compatible with the Host program — the version can be confirmed on the screen shown when Connect is clicked after running the AF program.',
          ko:'Host Program과 호환되는 AF Program 버전인지 확인합니다 — AF Program 실행 후 Connect 시 표시되는 화면에서 버전을 확인할 수 있습니다.',
          zhCN:'确认AF Program版本是否与Host Program相容——执行AF Program后点击Connect时显示的画面即可确认版本。',
          zhTW:'確認AF Program版本是否與Host Program相容——執行AF Program後點擊Connect時顯示的畫面即可確認版本。',
          ja:'Host Programと互換性のあるAF Programバージョンか確認します——AF Program実行後Connect時に表示される画面でバージョンを確認できます。'
        }},
        {img:cmImg('J','nbga',45),tx:{
          vi:'1.2.4 Lỗi kết nối Camera',
          en:'1.2.4 Camera Connection Failure',
          ko:'1.2.4 Camera 연결불량',
          zhCN:'1.2.4 Camera连接不良',
          zhTW:'1.2.4 Camera連接不良',
          ja:'1.2.4 Camera接続不良'
        }},
        {img:cmImg('J','nbga',46),tx:{
          vi:'Kiểm tra LED Controller đã bật nguồn, kiểm tra Camera đã bật nguồn (vị trí đèn báo nguồn/LED khác nhau tùy loại Camera), và kiểm tra kết nối cáp (cáp Power, cáp CXP, hoặc cáp CL).',
          en:'Check that the LED Controller is powered on, check that the Camera is powered on (power/LED indicator position varies by camera spec), and check the cable connections (Power cable, CXP cable, or CL cable).',
          ko:'LED Controller 전원이 켜져 있는지, Camera 전원이 켜져 있는지 확인합니다(Camera 사양에 따라 전원·LED 표시등 위치가 다를 수 있음). Cable 연결 상태(Power Cable, CXP Cable 또는 CL Cable)를 점검합니다.',
          zhCN:'确认LED Controller电源是否开启、Camera电源是否开启(依Camera规格不同,电源·LED指示灯位置可能不同)。检查Cable连接状态(Power Cable、CXP Cable或CL Cable)。',
          zhTW:'確認LED Controller電源是否開啟、Camera電源是否開啟(依Camera規格不同,電源·LED指示燈位置可能不同)。檢查Cable連接狀態(Power Cable、CXP Cable或CL Cable)。',
          ja:'LED Controllerの電源が入っているか、Cameraの電源が入っているか確認します(Camera仕様により電源・LED表示灯の位置が異なる場合があります)。Cable接続状態(Power Cable、CXP Cable、またはCL Cable)を点検します。'
        }},
        {img:cmImg('J','nbga',47),tx:{
          vi:'Kiểm tra thiết lập Channel và bộ nhớ DMA của chương trình cấu hình iGrab (khác nhau tùy loại Camera). Sau khi thay đổi thiết lập, nhấn Reboot để áp dụng.',
          en:'Check the iGrab config program\'s Channel and DMA memory settings (these vary by camera spec). After changing a setting, click Reboot to apply it.',
          ko:'iGrab Config 프로그램의 Channel, DMA Memory 설정을 확인합니다(Camera 사양에 따라 설정값이 다름). 설정 변경 후 Reboot을 클릭해 적용합니다.',
          zhCN:'确认iGrab Config程序的Channel、DMA Memory设置(依Camera规格不同设置值也不同)。变更设置后点击Reboot以套用。',
          zhTW:'確認iGrab Config程式的Channel、DMA Memory設定(依Camera規格不同設定值也不同)。變更設定後點擊Reboot以套用。',
          ja:'iGrab Config プログラムのChannel、DMA Memory設定を確認します(Camera仕様により設定値が異なります)。設定変更後はRebootをクリックして適用します。'
        }},
        {img:cmImg('J','nbga',48),tx:{
          vi:'Kiểm tra board iGrab đã cắm đúng vị trí (phải nằm ở khe x16 màu xanh), và kiểm tra phiên bản F/W và Library của nó khớp với Spec H/W & S/W của thiết bị.',
          en:'Check that the iGrab board is properly seated (it must be in the blue x16 slot), and check that its F/W and Library version matches the equipment\'s H/W & S/W spec.',
          ko:'iGrab Board의 장착 상태를 점검합니다(파란색 x16 슬롯에 장착되어야 함). iGrab Program의 F/W 및 Library 버전이 설비 사양(H/W·S/W)에 맞게 적용되었는지 확인합니다.',
          zhCN:'检查iGrab Board的安装状态(须安装于蓝色x16插槽)。确认iGrab Program的F/W及Library版本是否符合设备规格(H/W·S/W)。',
          zhTW:'檢查iGrab Board的安裝狀態(須安裝於藍色x16插槽)。確認iGrab Program的F/W及Library版本是否符合設備規格(H/W·S/W)。',
          ja:'iGrab Boardの装着状態を点検します(青色のx16スロットに装着されている必要があります)。iGrab ProgramのF/WおよびLibraryバージョンが設備仕様(H/W・S/W)に適合しているか確認します。'
        }},
        {img:cmImg('J','nbga',49),tx:{
          vi:'Kiểm tra thiết lập chương trình comm iGrab: chạy chương trình, nhấn Connect, và tải thông tin Camera.',
          en:'Check the iGrab comm program settings: run the program, click Connect, and load the camera information.',
          ko:'iGrab Comm 프로그램 설정을 확인합니다 — 프로그램 실행 후 Connect를 클릭해 Camera 정보를 불러오고 연결합니다.',
          zhCN:'确认iGrab Comm程序的设置——执行程序后点击Connect,读取Camera信息并连接。',
          zhTW:'確認iGrab Comm程式的設定——執行程式後點擊Connect,讀取Camera資訊並連接。',
          ja:'iGrab Comm プログラムの設定を確認します——プログラム実行後Connectをクリックし、Cameraの情報を読み込み接続します。'
        }},
        {img:cmImg('J','nbga',50),tx:{
          vi:'Thiết lập chi tiết chương trình comm iGrab — chọn Guru trong Combo Box ở đáy cửa sổ thiết lập và cấu hình như hình (AcquisitionControl: TriggerSelector=Exposure Start, TriggerMode=On, TriggerSource=CXPin, TriggerActivation=Rising Edge, ExposureMode=Trigger Width; TransportLayerControl ▸ CoaXPress: CxpLinkConfiguration=CXP6_X4). Sau khi đặt xong, nhấn Acquisition Start để chạy Camera.',
          en:'Detailed iGrab comm program settings — select Guru in the combo box at the bottom of the settings window and configure as shown (AcquisitionControl: TriggerSelector=Exposure Start, TriggerMode=On, TriggerSource=CXPin, TriggerActivation=Rising Edge, ExposureMode=Trigger Width; TransportLayerControl ▸ CoaXPress: CxpLinkConfiguration=CXP6_X4). Once set, click Acquisition Start to run the camera.',
          ko:'iGrab Comm 프로그램 상세 설정 — 설정창 하단 콤보박스를 Guru로 선택 후 그림처럼 설정합니다(AcquisitionControl: TriggerSelector=Exposure Start, TriggerMode=On, TriggerSource=CXPin, TriggerActivation=Rising Edge, ExposureMode=Trigger Width; TransportLayerControl ▸ CoaXPress: CxpLinkConfiguration=CXP6_X4). 설정 완료 후 Acquisition Start를 클릭해 Camera를 동작시킵니다.',
          zhCN:'iGrab Comm程序详细设置——将设置窗口下方的下拉框选为Guru后如图设置(AcquisitionControl:TriggerSelector=Exposure Start、TriggerMode=On、TriggerSource=CXPin、TriggerActivation=Rising Edge、ExposureMode=Trigger Width;TransportLayerControl ▸ CoaXPress:CxpLinkConfiguration=CXP6_X4)。设置完成后点击Acquisition Start使Camera运作。',
          zhTW:'iGrab Comm程式詳細設定——將設定視窗下方的下拉選單選為Guru後如圖設定(AcquisitionControl:TriggerSelector=Exposure Start、TriggerMode=On、TriggerSource=CXPin、TriggerActivation=Rising Edge、ExposureMode=Trigger Width;TransportLayerControl ▸ CoaXPress:CxpLinkConfiguration=CXP6_X4)。設定完成後點擊Acquisition Start使Camera運作。',
          ja:'iGrab Commプログラムの詳細設定——設定ウィンドウ下部のコンボボックスをGuruに選択後、図のように設定します(AcquisitionControl:TriggerSelector=Exposure Start、TriggerMode=On、TriggerSource=CXPin、TriggerActivation=Rising Edge、ExposureMode=Trigger Width;TransportLayerControl ▸ CoaXPress:CxpLinkConfiguration=CXP6_X4)。設定完了後Acquisition Startをクリックしカメラを動作させます。'
        }},
        {img:cmImg('J','nbga',51),tx:{
          vi:'1.2.5 Grab Timeout',
          en:'1.2.5 Grab Timeout',
          ko:'1.2.5 Grab time out',
          zhCN:'1.2.5 Grab time out',
          zhTW:'1.2.5 Grab time out',
          ja:'1.2.5 Grab time out'
        }},
        {img:cmImg('J','nbga',52),tx:{
          vi:'Mở Device Manager và kiểm tra Graphic card, Grab board (board iGrab), và Sync board (INTEKPLUS SyncPci) đều được nhận diện đúng.',
          en:'Open Device Manager and check that the Graphic card, Grab board (iGrab board), and Sync board (INTEKPLUS SyncPci) are all recognized correctly.',
          ko:'장치관리자를 열고 Graphic Card, Grab Board(iGrab Board), Sync Board(INTEKPLUS SyncPci)가 정상적으로 인식되는지 확인합니다.',
          zhCN:'打开设备管理器,确认Graphic Card、Grab Board(iGrab Board)、Sync Board(INTEKPLUS SyncPci)是否被正常识别。',
          zhTW:'打開裝置管理員,確認Graphic Card、Grab Board(iGrab Board)、Sync Board(INTEKPLUS SyncPci)是否被正常識別。',
          ja:'デバイスマネージャーを開き、Graphic Card、Grab Board(iGrab Board)、Sync Board(INTEKPLUS SyncPci)が正常に認識されているか確認します。'
        }},
        {img:cmImg('J','nbga',53),tx:{
          vi:'Kiểm tra LED Controller đã bật nguồn, kiểm tra Camera đã bật nguồn (vị trí khác nhau tùy Spec), và kiểm tra kết nối cáp (cáp Power, thứ tự Channel cáp CXP, cáp CXP, hoặc cáp CL).',
          en:'Check that the LED Controller is powered on, check that the Camera is powered on (position varies by spec), and check the cable connections (Power cable, CXP cable channel order, CXP cable, or CL cable).',
          ko:'LED Controller 전원이 켜져 있는지, Camera 전원이 켜져 있는지 확인합니다(사양에 따라 위치가 다를 수 있음). Cable 연결 상태(Power Cable, CXP Cable 채널 순서, CXP Cable 또는 CL Cable)를 점검합니다.',
          zhCN:'确认LED Controller电源是否开启、Camera电源是否开启(依规格不同位置可能不同)。检查Cable连接状态(Power Cable、CXP Cable通道顺序、CXP Cable或CL Cable)。',
          zhTW:'確認LED Controller電源是否開啟、Camera電源是否開啟(依規格不同位置可能不同)。檢查Cable連接狀態(Power Cable、CXP Cable通道順序、CXP Cable或CL Cable)。',
          ja:'LED Controllerの電源が入っているか、Cameraの電源が入っているか確認します(仕様により位置が異なる場合があります)。Cable接続状態(Power Cable、CXP Cableのチャンネル順、CXP CableまたはCL Cable)を点検します。'
        }},
        {img:cmImg('J','nbga',54),tx:{
          vi:'Mở nắp PC và kiểm tra Flat cable có hư hỏng, và Grab board đã kết nối nguồn đúng cách. (Một số model Grab board có cáp nguồn và công tắc nguồn riêng.)',
          en:'Open the PC cover and check the Flat cable for damage, and that the Grab board is properly connected to power. (Some Grab board models have their own power cable and power switch.)',
          ko:'PC 커버를 열고 Flat Cable 손상 유무 및 Grab Board에 전원이 연결되어 있는지 확인합니다. (일부 Grab Board는 전원 케이블·전원 스위치가 별도로 있는 모델도 있음)',
          zhCN:'打开PC机盖,确认Flat Cable是否损坏,以及Grab Board是否已连接电源。(部分Grab Board型号具有独立的电源线·电源开关)',
          zhTW:'打開PC機殼,確認Flat Cable是否損壞,以及Grab Board是否已連接電源。(部分Grab Board型號具有獨立的電源線·電源開關)',
          ja:'PCのカバーを開け、Flat Cableの損傷有無、およびGrab Boardに電源が接続されているか確認します。(一部のGrab Boardには専用の電源ケーブル・電源スイッチを持つモデルもあります)'
        }},
        {img:cmImg('J','nbga',55),tx:{
          vi:'Chạy iCamCom: File ▸ Connect ▸ chọn Camera ▸ Connect ▸ nhấn Acquisition Start, sau đó đóng chương trình.',
          en:'Run iCamCom: File ▸ Connect ▸ select the Camera ▸ Connect ▸ click Acquisition Start, then close the program.',
          ko:'iCamCom을 실행합니다: File ▸ Connect ▸ Camera 선택 후 Connect ▸ Acquisition Start를 클릭한 뒤 프로그램을 닫습니다.',
          zhCN:'执行iCamCom:File ▸ Connect ▸ 选择Camera后Connect ▸ 点击Acquisition Start后关闭程序。',
          zhTW:'執行iCamCom:File ▸ Connect ▸ 選擇Camera後Connect ▸ 點擊Acquisition Start後關閉程式。',
          ja:'iCamComを実行します:File ▸ Connect ▸ Cameraを選択後Connect ▸ Acquisition Startをクリックした後プログラムを閉じます。'
        }},
        {img:cmImg('J','nbga',56),tx:{
          vi:'Chạy Vision PC ▸ ổ C: ▸ Vision ▸ Bin ▸ *.Apple, và kiểm tra thiết lập Apple (Spec Camera, Frame period, Illumination delay, Spec PZT, v.v.) đã cấu hình đúng.',
          en:'Run Vision PC ▸ C: drive ▸ Vision ▸ Bin ▸ *.Apple, and check that the Apple settings (camera spec, Frame period, Illumination delay, PZT spec, etc.) are correctly configured.',
          ko:'Vision PC의 C드라이브 ▸ Vision ▸ Bin ▸ *.Apple을 실행합니다. Apple 설정이 Camera 사양·Frame Period·Illumination Delay·PZT 사양 등에 맞게 설정되어 있는지 확인합니다.',
          zhCN:'执行Vision PC的C磁盘机 ▸ Vision ▸ Bin ▸ *.Apple。确认Apple设置是否符合Camera规格·Frame Period·Illumination Delay·PZT规格等。',
          zhTW:'執行Vision PC的C磁碟機 ▸ Vision ▸ Bin ▸ *.Apple。確認Apple設定是否符合Camera規格·Frame Period·Illumination Delay·PZT規格等。',
          ja:'Vision PCのCドライブ ▸ Vision ▸ Bin ▸ *.Appleを実行します。Apple設定がCamera仕様・Frame Period・Illumination Delay・PZT仕様などに合わせて設定されているか確認します。'
        }},
        {img:cmImg('J','nbga',57),tx:{
          vi:'Firmware Sync board bị thiếu cũng có thể gây Grab fail hoặc Grab timeout — có thể khắc phục bằng cách làm theo quy trình "1.4.1 Lỗi chiếu sáng – Cập nhật F/W Sync Board" trong tài liệu này.',
          en:'A missing Sync board firmware can also cause a Grab fail or Grab timeout — this can be resolved by following the "1.4.1 Lighting Failure – Sync Board F/W Update" procedure in this manual.',
          ko:'Sync Board에 Firmware가 없어도 Grab Fail 또는 Grab Time Out이 발생할 수 있습니다 — 본 문서의 "1.4.1 조명 불량 – Sync Board F/W Update 방법"을 참조해 조치할 수 있습니다.',
          zhCN:'即使Sync Board没有Firmware,也可能发生Grab Fail或Grab Time Out——可参考本文档"1.4.1 照明不良 – Sync Board F/W Update方法"进行处理。',
          zhTW:'即使Sync Board沒有Firmware,也可能發生Grab Fail或Grab Time Out——可參考本文件「1.4.1 照明不良 – Sync Board F/W Update方法」進行處理。',
          ja:'Sync BoardにFirmwareがない場合もGrab FailやGrab Time Outが発生することがあります——本書の「1.4.1 照明不良 – Sync Board F/W Update方法」を参照して対処できます。'
        }},
        {img:cmImg('J','nbga',58),tx:{
          vi:'1.3.1 Lỗi chuyển động',
          en:'1.3.1 Motion Movement Failure',
          ko:'1.3.1 Motion 이동 불량',
          zhCN:'1.3.1 Motion移动不良',
          zhTW:'1.3.1 Motion移動不良',
          ja:'1.3.1 Motion移動不良'
        }},
        {img:cmImg('J','nbga',59),tx:{
          vi:'Nếu có khoảng lệch giữa giá trị di chuyển yêu cầu và lượng di chuyển thực tế, kiểm tra Motor Driver Setting. (Chỉ áp dụng cho một số Motor nhất định: AF Step Motor đặt ở vị trí Dial 1P, Motor kết nối với PM Module đặt ở 2P.)',
          en:'If a gap appears between the commanded move value and the actual move amount, check the Motor Driver Setting. (Applies only to certain motors: the AF Step Motor is set to dial position 1P, and motors connected to a PM Module are set to 2P.)',
          ko:'이동 명령값과 실제 이동량에 차이가 발생하면 Motor Driver Setting 상태를 확인합니다. (일부 Motor에만 해당되는 내용이며, AF Step Motor는 1P, PM Module과 연결되는 Motor는 2P로 설정)',
          zhCN:'若移动指令值与实际移动量出现差异,请确认Motor Driver Setting状态。(仅适用于部分Motor;AF Step Motor设为1P,与PM Module连接的Motor设为2P)',
          zhTW:'若移動指令值與實際移動量出現差異,請確認Motor Driver Setting狀態。(僅適用於部分Motor;AF Step Motor設為1P,與PM Module連接的Motor設為2P)',
          ja:'移動指令値と実際の移動量に差が生じた場合はMotor Driver Settingの状態を確認します。(一部のMotorのみ該当する内容で、AF Step Motorは1P、PM Moduleに接続されるMotorは2Pに設定)'
        }},
        {img:cmImg('J','nbga',60),tx:{
          vi:'Coupler kết nối trục Motor với trục vít (rod) để truyền lực. Kiểm tra Bolt cố định của Coupler có bị lỏng không.',
          en:'The Coupler connects the motor shaft to the screw (rod) to transmit power. Check that the Coupler\'s fixing bolt hasn\'t come loose.',
          ko:'Coupler는 Motor Shaft와 Screw(Rod)를 연결시켜 동력을 전달하는 역할을 합니다. Coupler의 고정 볼트가 느슨해지지 않았는지 확인합니다.',
          zhCN:'Coupler的作用是连接Motor Shaft与Screw(Rod)以传递动力。请确认Coupler的固定螺栓是否松动。',
          zhTW:'Coupler的作用是連接Motor Shaft與Screw(Rod)以傳遞動力。請確認Coupler的固定螺栓是否鬆動。',
          ja:'CouplerはMotor ShaftとScrew(Rod)を連結し動力を伝達する役割を果たします。Couplerの固定ボルトが緩んでいないか確認します。'
        }},
        {img:cmImg('J','nbga',61),tx:{
          vi:'Đặt Step Dial dựa theo có dùng Reducer hay không, Ball Screw Pitch, và giá trị AF Pulse cố định (10 Pulse/µm).',
          en:'Set the Step Dial based on whether a reducer is used, the Ball Screw Pitch, and the fixed AF Pulse value (10 Pulse/µm).',
          ko:'감속기 적용 여부, Ball Screw Pitch, 고정값인 AF Pulse값(10 Pulse/um)을 고려하여 Step Dial을 설정합니다.',
          zhCN:'需考虑是否使用减速机、Ball Screw Pitch,以及固定值AF Pulse值(10 Pulse/um)来设置Step Dial。',
          zhTW:'需考慮是否使用減速機、Ball Screw Pitch,以及固定值AF Pulse值(10 Pulse/um)來設定Step Dial。',
          ja:'減速機の適用有無、Ball Screw Pitch、固定値であるAF Pulse値(10 Pulse/um)を考慮してStep Dialを設定します。'
        }},
        {img:cmImg('J','nbga',62),tx:{
          vi:'Ví dụ tính toán Step Dial: kiểm tra Ball Screw Pitch trục Z (VD 5mm mỗi vòng quay) và độ phân giải của Stepping Motor Driver (Dial 9 → góc bước 0.018° → 20.000 pulse/vòng; Dial 6 → 0.072° → 5.000 pulse/vòng). Dùng tỷ lệ "Ball Screw Pitch : độ phân giải Motor = 1µm : χ", Dial 9 cho χ=4 pulse/µm (40 pulse/µm khi áp dụng Reducer 10:1), và Dial 6 cho χ=1 pulse/µm (10 pulse/µm khi áp dụng Reducer).',
          en:'Worked calculation of the Step Dial: check the Z-axis ball screw pitch (e.g. 5mm per revolution) and the Stepping Motor Driver\'s resolution (Dial 9 → 0.018° step angle → 20,000 pulse/rev; Dial 6 → 0.072° → 5,000 pulse/rev). Using the proportion "ball screw pitch : motor resolution = 1µm : χ", Dial 9 gives χ=4 pulse/µm (40 pulse/µm with a 10:1 reducer applied), and Dial 6 gives χ=1 pulse/µm (10 pulse/µm with the reducer).',
          ko:'Step Dial 계산 예시: Z축 Ball Screw Pitch(예: 1회전당 5mm 이동) 확인, Z축을 구동하는 Stepping Motor Driver의 해상도 확인(Dial 9 → Step Angle 0.018° → 1회전당 20,000pulse; Dial 6 → 0.072° → 5,000pulse). "Ball Screw Pitch : Motor 해상도 = 1um : χ" 비례식으로, Dial 9는 χ=4pulse/um(10:1 감속기 적용 시 40pulse/um), Dial 6은 χ=1pulse/um(감속기 적용 시 10pulse/um)이 됩니다.',
          zhCN:'Step Dial计算示例:确认Z轴Ball Screw Pitch(如每转5mm),确认驱动Z轴的Stepping Motor Driver分辨率(Dial 9→Step Angle 0.018°→每转20,000pulse;Dial 6→0.072°→5,000pulse)。以"Ball Screw Pitch:Motor分辨率=1um:χ"的比例式,Dial 9得χ=4pulse/um(套用10:1减速机后为40pulse/um),Dial 6得χ=1pulse/um(套用减速机后为10pulse/um)。',
          zhTW:'Step Dial計算範例:確認Z軸Ball Screw Pitch(如每轉5mm),確認驅動Z軸的Stepping Motor Driver解析度(Dial 9→Step Angle 0.018°→每轉20,000pulse;Dial 6→0.072°→5,000pulse)。以「Ball Screw Pitch:Motor解析度=1um:χ」的比例式,Dial 9得χ=4pulse/um(套用10:1減速機後為40pulse/um),Dial 6得χ=1pulse/um(套用減速機後為10pulse/um)。',
          ja:'Step Dial計算例:Z軸のBall Screw Pitch(例:1回転あたり5mm移動)を確認、Z軸を駆動するStepping Motor Driverの分解能を確認(Dial 9 → Step Angle 0.018° → 1回転20,000pulse;Dial 6 → 0.072° → 5,000pulse)。「Ball Screw Pitch:Motor分解能=1um:χ」の比例式で、Dial 9はχ=4pulse/um(10:1減速機適用時40pulse/um)、Dial 6はχ=1pulse/um(減速機適用時10pulse/um)となります。'
        }},
        {img:cmImg('J','nbga',63),tx:{
          vi:'Kiểm tra giá trị Motor Parameter đã đặt đúng trong Host Program ▸ Handler ▸ Motor.',
          en:'Check that the Motor Parameter values are set correctly in Host Program ▸ Handler ▸ Motor.',
          ko:'Host Program ▸ Handler ▸ Motor에서 Motor Parameter의 설정값이 알맞게 설정되었는지 확인합니다.',
          zhCN:'在Host Program ▸ Handler ▸ Motor中确认Motor Parameter的设置值是否正确。',
          zhTW:'在Host Program ▸ Handler ▸ Motor中確認Motor Parameter的設定值是否正確。',
          ja:'Host Program ▸ Handler ▸ MotorでMotor Parameterの設定値が正しく設定されているか確認します。'
        }},
        {img:cmImg('J','nbga',64),tx:{
          vi:'Đối với di chuyển chỉ theo một hướng, kiểm tra giá trị Pulse trong Motor Parameter (Host Program ▸ Handler ▸ Motor) đã đặt đúng.',
          en:'For movement in only one direction, check that the Pulse value in Motor Parameter (Host Program ▸ Handler ▸ Motor) is set correctly.',
          ko:'한쪽 방향으로만 움직이는 경우, Host Program ▸ Handler ▸ Motor에서 Motor Parameter의 Pulse 값이 알맞게 설정되었는지 확인합니다.',
          zhCN:'若只朝单一方向移动,请在Host Program ▸ Handler ▸ Motor中确认Motor Parameter的Pulse值是否设置正确。',
          zhTW:'若只朝單一方向移動,請在Host Program ▸ Handler ▸ Motor中確認Motor Parameter的Pulse值是否設定正確。',
          ja:'一方向にしか動かない場合、Host Program ▸ Handler ▸ MotorでMotor ParameterのPulse値が正しく設定されているか確認します。'
        }},
        {img:cmImg('J','nbga',65),tx:{
          vi:'1.3.2 Lỗi Interlock',
          en:'1.3.2 Interlock Malfunction',
          ko:'1.3.2 Interlock 동작 불량',
          zhCN:'1.3.2 Interlock動作不良',
          zhTW:'1.3.2 Interlock動作不良',
          ja:'1.3.2 Interlock動作不良'
        }},
        {img:cmImg('J','nbga',66),tx:{
          vi:'Nếu cửa mở ra trong khi chạy Auto, hoặc không đóng được dù đã đóng qua I/O trong chương trình Host, kiểm tra xem Dial Interlock có bị chuyển về Unlock không — tháo nắp bảo vệ chống thao tác tay của Interlock (nắp thép hoặc cao su) phía trên cửa, sau đó dùng dụng cụ khớp hình dạng Dial để chuyển lại Lock. (Lưu ý: dùng lực quá mạnh có thể làm hỏng.) Nếu cửa vẫn không đóng dù Dial hiện Lock, kiểm tra đấu dây I/O hoặc đấu dây nội bộ của Interlock (tham khảo sơ đồ mạch).',
          en:'If a door opens during Auto run, or won\'t close even after closing it via I/O in the Host program, check whether the Interlock dial has reverted to Unlock — remove the interlock manual-operation prevention cover (steel or rubber cap) on top of the door, then use a tool matching the dial shape to switch it back to Lock. (Caution: excessive force may damage it.) If the door still won\'t close while the dial shows Lock, check the I/O wiring or the interlock\'s internal wiring (refer to the circuit diagram).',
          ko:'Auto Run 동작 중 문이 열리거나, Host 프로그램에서 I/O로 문을 닫았는데도 문이 열리면 Interlock의 Dial 상태가 Unlock으로 돌아가 있는지 확인합니다 — Door 상부의 Interlock 수동 조작 방지 커버(스틸마개 또는 고무마개)를 제거한 뒤, 다이얼 모양에 맞는 공구로 Lock 상태로 변경합니다(주의: 과도한 힘으로 조작 시 파손될 수 있음). Dial이 Lock 상태임에도 문이 닫히지 않으면 I/O 배선 또는 Interlock 내부 배선을 확인합니다(내부 배선은 회로도 참조).',
          zhCN:'若Auto Run运转中门开启,或在Host程序中透过I/O关门后门仍开启,请确认Interlock的Dial状态是否又回到Unlock——拆下Door上部的Interlock手动操作防止盖(钢盖或橡胶盖)后,用与拨盘形状相符的工具切换为Lock状态(注意:操作力道过大可能导致损坏)。若Dial已为Lock状态但门仍无法关闭,请确认I/O配线或Interlock内部配线(内部配线请参考电路图)。',
          zhTW:'若Auto Run運轉中門開啟,或在Host程式中透過I/O關門後門仍開啟,請確認Interlock的Dial狀態是否又回到Unlock——拆下Door上部的Interlock手動操作防止蓋(鋼蓋或橡膠蓋)後,用與撥盤形狀相符的工具切換為Lock狀態(注意:操作力道過大可能導致損壞)。若Dial已為Lock狀態但門仍無法關閉,請確認I/O配線或Interlock內部配線(內部配線請參考電路圖)。',
          ja:'Auto Run動作中にドアが開いたり、Hostプログラムで I/Oによりドアを閉めても開いてしまう場合は、Interlockのダイヤル状態がUnlockに戻っていないか確認します——Door上部のInterlock手動操作防止カバー(スチール製またはゴム製)を外し、ダイヤル形状に合った工具でLock状態に変更します(注意:過度な力で操作すると破損する恐れがあります)。ダイヤルがLock状態でもドアが閉まらない場合は、I/O配線またはInterlock内部配線を確認します(内部配線は回路図を参照)。'
        }},
        {img:cmImg('J','nbga',67),tx:{
          vi:'1.4.1 Lỗi chiếu sáng',
          en:'1.4.1 Lighting Failure',
          ko:'1.4.1 조명 불량',
          zhCN:'1.4.1 照明不良',
          zhTW:'1.4.1 照明不良',
          ja:'1.4.1 照明不良'
        }},
        {img:cmImg('J','nbga',68),tx:{
          vi:'Khi đèn không sáng: kiểm tra trạng thái nguồn của LED Controller, và kiểm tra nhãn có khớp với Spec Vision 2D hay 3D. Có thể là Controller bị lỗi, nhưng đôi khi nhãn đúng trong khi bộ phận bên trong lại không khớp Spec đó — nên cũng cần kiểm tra điều này.',
          en:'When lighting won\'t turn on: check the LED Controller\'s power status, and check it matches the 2D or 3D Vision spec by its label. It may be a faulty Controller, but occasionally the label is correct while the part inside doesn\'t actually match that spec — so check for that too.',
          ko:'조명이 안 켜질 경우: LED Controller의 전원 상태를 확인하고, 2D Vision 또는 3D Vision 사양에 맞는 LED Controller인지 Label로 확인합니다. Controller 자체가 불량일 수도 있지만, 간혹 Label은 맞게 붙어있으나 내부에 해당 사양의 부품이 들어있지 않은 경우도 있으니 함께 확인합니다.',
          zhCN:'当照明无法点亮时:确认LED Controller的电源状态,并透过标签确认其是否为符合2D Vision或3D Vision规格的LED Controller。可能是Controller本身不良,但偶尔也会出现标签正确、但内部零件并非对应规格的情况,请一并确认。',
          zhTW:'當照明無法點亮時:確認LED Controller的電源狀態,並透過標籤確認其是否為符合2D Vision或3D Vision規格的LED Controller。可能是Controller本身不良,但偶爾也會出現標籤正確、但內部零件並非對應規格的情況,請一併確認。',
          ja:'照明が点灯しない場合:LED Controllerの電源状態を確認し、2D Visionまたは3D Vision仕様に合ったLED Controllerかをラベルで確認します。Controller自体の不良の可能性もありますが、まれにラベルは正しく貼られていても内部に該当仕様の部品が入っていない場合もあるため、あわせて確認します。'
        }},
        {img:cmImg('J','nbga',69),tx:{
          vi:'Với đèn chiếu xuống (phía trên), bạn có thể tự kiểm tra thủ công từng Channel để tìm lỗi chiếu sáng (3D Vision dùng CH1–3, 2D Vision dùng CH1–9, 11, 12): bật đèn thủ công cho một Channel, đặt gương phía dưới, và kiểm tra đèn chiếu đúng cách.',
          en:'For downward-shining (top) lights, you can manually test each channel to check for a lighting fault (3D Vision uses CH1–3, 2D Vision uses CH1–9, 11, 12): turn on the light manually for a channel, place a mirror underneath it, and check that it shines properly.',
          ko:'낙사조명(위에서 아래로 비추는 조명)의 경우 수동 조작(Manual)으로 각 채널별 조명 불량 여부를 확인할 수 있습니다(3D Vision은 1~3CH, 2D Vision은 1~9, 11, 12CH 사용) — 수동으로 조명을 켠 뒤 조명 아래에 거울을 놓고 조명이 잘 나오는지 확인합니다.',
          zhCN:'对于俯照式照明(由上往下照射的照明),可透过手动操作(Manual)确认各通道的照明是否不良(3D Vision使用1~3CH,2D Vision使用1~9、11、12CH)——手动开启照明后,在照明下方放置镜子确认光线是否正常输出。',
          zhTW:'對於俯照式照明(由上往下照射的照明),可透過手動操作(Manual)確認各通道的照明是否不良(3D Vision使用1~3CH,2D Vision使用1~9、11、12CH)——手動開啟照明後,在照明下方放置鏡子確認光線是否正常輸出。',
          ja:'落射照明(上から下を照らす照明)の場合、手動操作(Manual)で各チャンネルごとの照明不良を確認できます(3D Visionは1~3CH、2D Visionは1~9、11、12CHを使用)——手動で照明を点灯させた後、照明の下に鏡を置いて光がきちんと出ているか確認します。'
        }},
        {img:cmImg('J','nbga',70),tx:{
          vi:'Bạn cũng có thể kiểm tra chiếu sáng qua Sync Test Program (chạy với quyền Administrator): Illum Test ▸ OK ▸ tích ISIS-CSPW ▸ Sync All Para Download ▸ Open (tải file Sync) ▸ Download ▸ nhấn LED On/intel_on và di chuyển thanh cuộn để kiểm tra bật/tắt và điều chỉnh độ sáng từng Channel. Nếu đèn vẫn không sáng sau bước này, cập nhật F/W của Sync Board trước, sau đó kiểm tra lại chiếu sáng.',
          en:'You can also test the lighting via the Sync Test Program (run it as administrator): Illum Test ▸ OK ▸ check ISIS-CSPW ▸ Sync All Para Download ▸ Open (load the sync file) ▸ Download ▸ click LED On/intel_on and move the scrollbar to check each channel\'s on/off and brightness control. If the light still won\'t turn on after this, update the Sync Board\'s F/W first, then test the lighting again.',
          ko:'Sync Test Program을 실행해 조명 Test를 진행할 수도 있습니다(관리자 권한으로 실행) — Illum Test ▸ OK ▸ ISIS-CSPW 체크 ▸ Sync All Para Download ▸ Open(Sync 파일 불러오기) ▸ Download ▸ LED On/intel_on 클릭 후 스크롤바를 움직이며 채널별 On/Off·광량 조절 여부를 확인합니다. 그래도 조명이 켜지지 않으면 Sync Board의 F/W를 먼저 Update한 후 조명 Test를 다시 진행합니다.',
          zhCN:'也可执行Sync Test Program进行照明测试(以系统管理员权限执行)——Illum Test ▸ OK ▸ 勾选ISIS-CSPW ▸ Sync All Para Download ▸ Open(载入Sync文件) ▸ Download ▸ 点击LED On/intel_on后移动卷轴确认各通道On/Off·亮度调整是否正常。若照明仍未点亮,请先Update Sync Board的F/W,再重新进行照明测试。',
          zhTW:'也可執行Sync Test Program進行照明測試(以系統管理員權限執行)——Illum Test ▸ OK ▸ 勾選ISIS-CSPW ▸ Sync All Para Download ▸ Open(載入Sync檔案) ▸ Download ▸ 點擊LED On/intel_on後移動捲軸確認各通道On/Off·亮度調整是否正常。若照明仍未點亮,請先Update Sync Board的F/W,再重新進行照明測試。',
          ja:'Sync Test Programを実行して照明テストを行うこともできます(管理者権限で実行)——Illum Test ▸ OK ▸ ISIS-CSPWにチェック ▸ Sync All Para Download ▸ Open(Syncファイルを読み込み) ▸ Download ▸ LED On/intel_onをクリックしスクロールバーを動かしながら各チャンネルのOn/Off・光量調整を確認します。それでも照明が点灯しない場合は、先にSync BoardのF/WをUpdateしてから照明テストを再度行います。'
        }},
        {img:cmImg('J','nbga',71),tx:{
          vi:'Quy trình này cập nhật Firmware của Sync Board để LED Controller có thể điều khiển chiếu sáng. Tải và cài đặt AVR Studio 4 và Intel FPGA 17.1.0.590 từ File Server nội bộ, và chuẩn bị AVR/FPGA Firmware Downloader cùng cáp USB Type-B.',
          en:'This procedure updates the Sync Board\'s firmware so the LED Controller can control lighting. Download and install AVR Studio 4 and Intel FPGA 17.1.0.590 from the internal file server, and prepare the AVR/FPGA Firmware Downloader and a USB Type-B cable.',
          ko:'LED Controller가 조명을 컨트롤할 수 있도록 Sync Board에 Firmware를 업데이트하는 과정입니다. 사내 파일 서버에서 AVR Studio 4와 Intel FPGA 17.1.0.590을 다운로드하여 설치하고, AVR/FPGA Firmware Downloader와 USB Type B Cable을 준비합니다.',
          zhCN:'这是为使LED Controller能够控制照明,而对Sync Board进行Firmware更新的流程。从内部文件服务器下载并安装AVR Studio 4与Intel FPGA 17.1.0.590,并准备AVR/FPGA Firmware Downloader及USB Type B Cable。',
          zhTW:'這是為使LED Controller能夠控制照明,而對Sync Board進行Firmware更新的流程。從內部檔案伺服器下載並安裝AVR Studio 4與Intel FPGA 17.1.0.590,並準備AVR/FPGA Firmware Downloader及USB Type B Cable。',
          ja:'LED Controllerが照明をコントロールできるようSync BoardにFirmwareをアップデートする手順です。社内ファイルサーバーからAVR Studio 4とIntel FPGA 17.1.0.590をダウンロードしてインストールし、AVR/FPGA Firmware DownloaderとUSB Type B Cableを準備します。'
        }},
        {img:cmImg('J','nbga',72),tx:{
          vi:'Ảnh chụp PC đã mở nắp, cho thấy vị trí lắp Sync Board (vị trí Vision PC & Sync Board).',
          en:'Photo of the PC with its cover removed, showing the Sync Board\'s mounting location (Vision PC & Sync Board placement).',
          ko:'PC 커버를 탈거한 모습입니다. Sync Board의 설치 위치는 사진과 같습니다(Vision PC & Sync Board 장착 위치).',
          zhCN:'拆下PC机盖后的样子。Sync Board的安装位置如照片所示(Vision PC & Sync Board安装位置)。',
          zhTW:'拆下PC機殼後的樣子。Sync Board的安裝位置如照片所示(Vision PC & Sync Board安裝位置)。',
          ja:'PCのカバーを外した様子です。Sync Boardの設置位置は写真の通りです(Vision PC & Sync Board装着位置)。'
        }},
        {img:cmImg('J','nbga',73),tx:{
          vi:'Lưu ý: kết nối Flat Cable với dây đỏ ở bên trái (đỏ đánh dấu Pin 1). Chỉ kết nối các Downloader khi PC đã tắt nguồn — kết nối AVR Downloader và FPGA Downloader như hình, sau đó bật nguồn PC.',
          en:'Caution: connect the Flat Cable with its red wire on the left (red marks pin 1). Connect the downloaders only while the PC is powered off — connect the AVR Downloader and FPGA Downloader as shown, then power the PC on.',
          ko:'주의: Flat Cable의 빨간색 선이 왼쪽에 위치하도록 연결합니다(빨간색=1번 핀). Downloader는 PC 전원이 꺼진 상태에서 연결합니다 — 그림처럼 AVR Downloader와 FPGA Downloader를 연결한 뒤 PC 전원을 켭니다.',
          zhCN:'注意:连接Flat Cable时须使红色线位于左侧(红色代表1号Pin)。请在PC电源关闭的状态下连接Downloader——如图连接AVR Downloader与FPGA Downloader后再开启PC电源。',
          zhTW:'注意:連接Flat Cable時須使紅色線位於左側(紅色代表1號Pin)。請在PC電源關閉的狀態下連接Downloader——如圖連接AVR Downloader與FPGA Downloader後再開啟PC電源。',
          ja:'注意:Flat Cableは赤い線が左側に来るよう接続します(赤=1番ピン)。DownloaderはPCの電源が切れた状態で接続します——図のようにAVR DownloaderとFPGA Downloaderを接続した後、PCの電源を入れます。'
        }},
        {img:cmImg('J','nbga',74),tx:{
          vi:'Kết nối AVR Downloader vào PC qua cáp USB Type-B, chạy AVR Studio 4, và nhấn nút AVR để kết nối với Sync Board.',
          en:'Connect the AVR Downloader to the PC via a USB Type-B cable, run AVR Studio 4, and click the AVR button to connect to the Sync Board.',
          ko:'USB Type B Cable로 AVR Downloader와 PC를 연결합니다. AVR Studio 4를 실행하고 AVR 버튼을 클릭해 Sync Board와 연결합니다.',
          zhCN:'使用USB Type B Cable连接AVR Downloader与PC。执行AVR Studio 4,点击AVR按钮与Sync Board连接。',
          zhTW:'使用USB Type B Cable連接AVR Downloader與PC。執行AVR Studio 4,點擊AVR按鈕與Sync Board連接。',
          ja:'USB Type B CableでAVR DownloaderとPCを接続します。AVR Studio 4を実行し、AVRボタンをクリックしてSync Boardと接続します。'
        }},
        {img:cmImg('J','nbga',75),tx:{
          vi:'Nhấn […] để tải file Firmware cần Upload (đường dẫn chỉ được chứa tên file tiếng Anh — tải file Firmware Vision 2D/3D từ File Server nội bộ). Nhấn [Program] và chờ thông báo hoàn tất khớp; làm tương tự với [Verify]; sau đó đóng AVR Studio 4.',
          en:'Click […] to load the firmware file to upload (the path must contain only English filenames — download the 2D/3D Vision firmware files from the internal file server). Click [Program] and wait for the matching completion message; do the same with [Verify]; then close AVR Studio 4.',
          ko:'[...]을 클릭해 업로드할 펌웨어 파일을 불러옵니다(해당 경로에는 영문 파일명만 있어야 함 — 사내 파일 서버에서 2D/3D Vision 펌웨어 파일 다운로드). [Program]을 클릭하고 하단에 완료 메시지가 출력되면 완료, [Verify]도 동일하게 진행한 뒤 AVR Studio 4를 종료합니다.',
          zhCN:'点击[...]载入要上传的Firmware档案(该路径下只能有英文档名——从内部文件服务器下载2D/3D Vision的Firmware文件)。点击[Program]并等待底部出现完成讯息即完成,[Verify]也以相同方式进行,之后关闭AVR Studio 4。',
          zhTW:'點擊[...]載入要上傳的Firmware檔案(該路徑下只能有英文檔名——從內部檔案伺服器下載2D/3D Vision的Firmware檔案)。點擊[Program]並等待底部出現完成訊息即完成,[Verify]也以相同方式進行,之後關閉AVR Studio 4。',
          ja:'[...]をクリックしアップロードするFirmwareファイルを読み込みます(そのパスには英字ファイル名のみが入っている必要があります——社内ファイルサーバーから2D/3D Vision用Firmwareファイルをダウンロード)。[Program]をクリックし、下部に完了メッセージが出れば完了、[Verify]も同様に行った後AVR Studio 4を終了します。'
        }},
        {img:cmImg('J','nbga',76),tx:{
          vi:'Kết nối FPGA Downloader vào PC qua cáp USB Type-B, chạy Programmer (Quartus Prime 17.1), nhấn [Hardware Setup…] và chọn USB-Blaster, sau đó nhấn [Auto Detect] để kết nối với Sync Board.',
          en:'Connect the FPGA Downloader to the PC via a USB Type-B cable, run the Programmer (Quartus Prime 17.1), click [Hardware Setup…] and select USB-Blaster, then click [Auto Detect] to connect to the Sync Board.',
          ko:'USB Type B Cable로 FPGA Downloader와 PC를 연결합니다. Programmer(Quartus Prime 17.1)를 실행하고 [Hardware Setup…]을 클릭해 USB-Blaster를 선택한 뒤, [Auto Detect]를 클릭해 Sync Board와 연결합니다.',
          zhCN:'使用USB Type B Cable连接FPGA Downloader与PC。执行Programmer(Quartus Prime 17.1),点击[Hardware Setup…]选择USB-Blaster,再点击[Auto Detect]与Sync Board连接。',
          zhTW:'使用USB Type B Cable連接FPGA Downloader與PC。執行Programmer(Quartus Prime 17.1),點擊[Hardware Setup…]選擇USB-Blaster,再點擊[Auto Detect]與Sync Board連接。',
          ja:'USB Type B CableでFPGA DownloaderとPCを接続します。Programmer(Quartus Prime 17.1)を実行し、[Hardware Setup…]をクリックしUSB-Blasterを選択後、[Auto Detect]をクリックしてSync Boardと接続します。'
        }},
        {img:cmImg('J','nbga',77),tx:{
          vi:'Nhấp đúp <none> cạnh thiết bị EPM1270 để tải file Firmware cần cập nhật (tải file Firmware Vision 2D/3D từ File Server nội bộ). Xác nhận EPM1270T144 đã kích hoạt như hình; chọn cả Program/Configure và Verify cho EPM1270; nhấn [Start] và chờ cập nhật hoàn tất (Progress 100%); sau đó đóng Programmer (Quartus Prime 17.1).',
          en:'Double-click <none> next to the EPM1270 device to load the firmware file to update (download the 2D/3D Vision firmware files from the internal file server). Confirm EPM1270T144 is activated as shown; select both Program/Configure and Verify for the EPM1270; click [Start] and wait for the update to complete (Progress 100%); then close the Programmer (Quartus Prime 17.1).',
          ko:'EPM1270 Device의 <none>을 더블클릭해 업데이트할 펌웨어 파일을 불러옵니다(사내 파일 서버에서 2D/3D Vision 펌웨어 파일 다운로드). 사진처럼 EPM1270T144가 활성화되었는지 확인하고, EPM1270의 Program/Configure와 Verify를 모두 선택합니다. [Start]를 클릭해 펌웨어 업데이트를 완료(Progress 100%)하고, Programmer(Quartus Prime 17.1)를 종료합니다.',
          zhCN:'双击EPM1270 Device旁的<none>载入要更新的Firmware文件(从内部文件服务器下载2D/3D Vision的Firmware文件)。如照片确认EPM1270T144已启用,并勾选EPM1270的Program/Configure与Verify两项。点击[Start]完成Firmware更新(Progress 100%),然后关闭Programmer(Quartus Prime 17.1)。',
          zhTW:'雙擊EPM1270 Device旁的<none>載入要更新的Firmware檔案(從內部檔案伺服器下載2D/3D Vision的Firmware檔案)。如照片確認EPM1270T144已啟用,並勾選EPM1270的Program/Configure與Verify兩項。點擊[Start]完成Firmware更新(Progress 100%),然後關閉Programmer(Quartus Prime 17.1)。',
          ja:'EPM1270 Deviceの<none>をダブルクリックし更新するFirmwareファイルを読み込みます(社内ファイルサーバーから2D/3D Vision用Firmwareファイルをダウンロード)。写真のようにEPM1270T144が有効になっているか確認し、EPM1270のProgram/ConfigureとVerifyを両方選択します。[Start]をクリックしFirmwareアップデートを完了(Progress 100%)させ、Programmer(Quartus Prime 17.1)を終了します。'
        }},
        {img:cmImg('J','nbga',78),tx:{
          vi:'1.4.2 Lỗi kết nối PZT',
          en:'1.4.2 PZT Connection Failure',
          ko:'1.4.2 PZT 연결 불가',
          zhCN:'1.4.2 PZT无法连接',
          zhTW:'1.4.2 PZT無法連接',
          ja:'1.4.2 PZT接続不可'
        }},
        {img:cmImg('J','nbga',79),tx:{
          vi:'Kiểm tra nguồn và kết nối cáp của PZT Controller, và xác nhận thiết lập IP PZT Controller trên Vision PC đã cấu hình đúng chỉ định (thể hiện cho cả PI PZT Controller và Nanofaktur PZT Controller).',
          en:'Check the PZT Controller\'s power and cable connection, and confirm the Vision PC\'s PZT Controller IP setting is configured as specified (shown for both the PI PZT Controller and Nanofaktur PZT Controller).',
          ko:'PZT Controller의 전원과 Cable 연결 상태를 확인하고, Vision PC의 PZT Controller IP 설정이 지정된 대로 되어 있는지 확인합니다(PI PZT Controller, Nanofaktur PZT Controller 모두 해당).',
          zhCN:'确认PZT Controller的电源与Cable连接状态,并确认Vision PC的PZT Controller IP设置是否依规定设置(PI PZT Controller、Nanofaktur PZT Controller皆适用)。',
          zhTW:'確認PZT Controller的電源與Cable連接狀態,並確認Vision PC的PZT Controller IP設定是否依規定設定(PI PZT Controller、Nanofaktur PZT Controller皆適用)。',
          ja:'PZT Controllerの電源とCable接続状態を確認し、Vision PCのPZT Controller IP設定が規定通りになっているか確認します(PI PZT Controller、Nanofaktur PZT Controllerともに該当)。'
        }},
        {img:cmImg('J','nbga',80),tx:{
          vi:'Kiểm tra cáp LAN đã kết nối vào đúng mạng — xác minh bằng cách cắm/rút và xác nhận kết nối mạng xuất hiện/biến mất tương ứng (áp dụng cho cả PI PZT Controller và Nanofaktur PZT Controller).',
          en:'Check that the LAN cable is connected to the correct network — verify by plugging/unplugging it and confirming the network connection appears/disappears accordingly (applies to both the PI PZT Controller and Nanofaktur PZT Controller).',
          ko:'LAN Cable이 해당 네트워크에 연결되었는지 확인합니다 — LAN Cable을 연결/해제했을 때 해당 네트워크가 연결/해제되는지로 확인 가능합니다(PI PZT Controller, Nanofaktur PZT Controller 모두 해당).',
          zhCN:'确认LAN Cable是否连接至对应网络——可透过连接/拔除LAN Cable时对应网络是否随之连接/中断来确认(PI PZT Controller、Nanofaktur PZT Controller皆适用)。',
          zhTW:'確認LAN Cable是否連接至對應網路——可透過連接/拔除LAN Cable時對應網路是否隨之連接/中斷來確認(PI PZT Controller、Nanofaktur PZT Controller皆適用)。',
          ja:'LAN Cableが該当ネットワークに接続されているか確認します——LAN Cableを接続/取り外しした際に該当ネットワークが接続/切断されるかで確認できます(PI PZT Controller、Nanofaktur PZT Controllerともに該当)。'
        }},
        {img:cmImg('J','nbga',81),tx:{
          vi:'Cách thiết lập IP cho PI PZT Controller: kết nối PI PZT Controller với Vision PC bằng cáp USB Mini-B.',
          en:'How to configure the PI PZT Controller\'s IP setting: connect the PI PZT Controller to the Vision PC using a Mini-B USB cable.',
          ko:'PI PZT Controller의 IP Setting을 진행하는 방법입니다. Mini B Type USB Cable로 PI PZT Controller와 Vision PC를 연결합니다.',
          zhCN:'PI PZT Controller的IP设置方法。使用Mini B Type USB Cable连接PI PZT Controller与Vision PC。',
          zhTW:'PI PZT Controller的IP設定方法。使用Mini B Type USB Cable連接PI PZT Controller與Vision PC。',
          ja:'PI PZT ControllerのIP Setting手順です。Mini B Type USB CableでPI PZT ControllerとVision PCを接続します。'
        }},
        {img:cmImg('J','nbga',82),tx:{
          vi:'Chạy chương trình PI, chọn đúng Model Controller, và kết nối qua USB.',
          en:'Run the PI program, select the correct Controller model, and connect via USB.',
          ko:'PI 프로그램을 실행합니다. 해당 Controller 모델을 선택하고 USB로 Connect합니다.',
          zhCN:'执行PI程序。选择对应的Controller型号后以USB Connect。',
          zhTW:'執行PI程式。選擇對應的Controller型號後以USB Connect。',
          ja:'PIプログラムを実行します。該当するControllerモデルを選択し、USBでConnectします。'
        }},
        {img:cmImg('J','nbga',83),tx:{
          vi:'Trong Tools ▸ Command entry, nhập theo thứ tự: "ifs 100 ipstart 0", "ifs 100 ipmask 255.255.255.0", "ifs 100 ipadr 192.168.0.1:50000". Sau đó đóng chương trình, tắt nguồn PZT Controller ít nhất 10 phút, và khởi động lại.',
          en:'In Tools ▸ Command entry, enter the following in order: "ifs 100 ipstart 0", "ifs 100 ipmask 255.255.255.0", "ifs 100 ipadr 192.168.0.1:50000". Then close the program, power off the PZT Controller for at least 10 minutes, and reboot it.',
          ko:'Tools ▸ Command entry 순서로 다음 명령을 입력합니다: "ifs 100 ipstart 0", "ifs 100 ipmask 255.255.255.0", "ifs 100 ipadr 192.168.0.1:50000". 프로그램 종료 후 PZT Controller의 전원을 10분 이상 끄고 재부팅합니다.',
          zhCN:'依Tools ▸ Command entry顺序输入以下指令:"ifs 100 ipstart 0"、"ifs 100 ipmask 255.255.255.0"、"ifs 100 ipadr 192.168.0.1:50000"。程序结束后将PZT Controller断电10分钟以上后再重新开机。',
          zhTW:'依Tools ▸ Command entry順序輸入以下指令:"ifs 100 ipstart 0"、"ifs 100 ipmask 255.255.255.0"、"ifs 100 ipadr 192.168.0.1:50000"。程式結束後將PZT Controller斷電10分鐘以上後再重新開機。',
          ja:'Tools ▸ Command entryの順に以下のコマンドを入力します:「ifs 100 ipstart 0」「ifs 100 ipmask 255.255.255.0」「ifs 100 ipadr 192.168.0.1:50000」。プログラム終了後、PZT Controllerの電源を10分以上切ってから再起動します。'
        }},
        {img:cmImg('J','nbga',84),tx:{
          vi:'Chạy lại chương trình, xác nhận PZT Controller được nhận diện ở tab TCP/IP, sau đó Connect.',
          en:'Run the program again, confirm the PZT Controller is recognized on the TCP/IP tab, then Connect.',
          ko:'프로그램을 다시 실행합니다. TCP/IP 탭에서 PZT Controller가 인식되는지 확인 후 Connect합니다.',
          zhCN:'重新执行程序。在TCP/IP标签中确认PZT Controller是否被识别,再Connect。',
          zhTW:'重新執行程式。在TCP/IP標籤中確認PZT Controller是否被識別,再Connect。',
          ja:'プログラムを再度実行します。TCP/IPタブでPZT Controllerが認識されるか確認後Connectします。'
        }},
        {img:cmImg('J','nbga',85),tx:{
          vi:'Cách thiết lập IP cho Nanofaktur PZT Controller: chạy nFControl.exe, chọn Ethernet <TCP/IP> (địa chỉ IP 192.168.168.168), sau đó nhấn Connect.',
          en:'How to configure the Nanofaktur PZT Controller\'s IP setting: run nFControl.exe, select Ethernet <TCP/IP> (IP address 192.168.168.168), then click Connect.',
          ko:'Nanofaktur PZT Controller의 IP 설정 방법입니다. nFControl.exe를 실행하고 이더넷 <TCP/IP>를 선택합니다(IP 주소: 192.168.168.168). Connect 버튼을 클릭합니다.',
          zhCN:'Nanofaktur PZT Controller的IP设置方法。执行nFControl.exe,选择Ethernet<TCP/IP>(IP位址:192.168.168.168)。点击Connect按钮。',
          zhTW:'Nanofaktur PZT Controller的IP設定方法。執行nFControl.exe,選擇Ethernet<TCP/IP>(IP位址:192.168.168.168)。點擊Connect按鈕。',
          ja:'Nanofaktur PZT ControllerのIP設定方法です。nFControl.exeを実行し、イーサネット<TCP/IP>を選択します(IPアドレス:192.168.168.168)。Connectボタンをクリックします。'
        }},
        {img:cmImg('J','nbga',86),tx:{
          vi:'1.4.3 Rung động PZT',
          en:'1.4.3 PZT Vibration',
          ko:'1.4.3 PZT 진동 발생',
          zhCN:'1.4.3 PZT产生振动',
          zhTW:'1.4.3 PZT產生振動',
          ja:'1.4.3 PZT振動発生'
        }},
        {img:cmImg('J','nbga',87),tx:{
          vi:'PI PZT — từ menu trên cùng, chọn Tools ▸ Show dynamic tuner.',
          en:'PI PZT — from the top menu, select Tools ▸ Show dynamic tuner.',
          ko:'PI PZT — 상단 메뉴에서 Tools ▸ Show dynamic tuner를 선택합니다.',
          zhCN:'PI PZT——在上方菜单选择Tools ▸ Show dynamic tuner。',
          zhTW:'PI PZT——在上方選單選擇Tools ▸ Show dynamic tuner。',
          ja:'PI PZT——上部メニューでTools ▸ Show dynamic tunerを選択します。'
        }},
        {img:cmImg('J','nbga',88),tx:{
          vi:'Bỏ chọn checkbox Servo/Closed Loop để tắt Servo. Đặt giá trị Step: Offset = 0, Amplitude = 10–15% biên độ dịch chuyển tối đa của Piezo.',
          en:'Uncheck the Servo/Closed Loop checkbox to turn Servo off. Set the Step values: Offset = 0, Amplitude = 10–15% of the Piezo\'s full displacement.',
          ko:'Servo/Closed Loop 체크박스를 해제해 Servo를 Off합니다. Step 값을 다음과 같이 설정합니다: Offset = 0, Amplitude = Piezo 전체 변위의 10~15%.',
          zhCN:'取消勾选Servo/Closed Loop使Servo为Off。设置Step值如下:Offset=0,Amplitude=Piezo总位移的10~15%。',
          zhTW:'取消勾選Servo/Closed Loop使Servo為Off。設定Step值如下:Offset=0,Amplitude=Piezo總位移的10~15%。',
          ja:'Servo/Closed Loopのチェックを外しServoをOffにします。Step値を次のように設定します:Offset=0、AmplitudeはPiezo全体変位の10~15%。'
        }},
        {img:cmImg('J','nbga',89),tx:{
          vi:'Kiểm tra giá trị Cursor 1, sau đó nhấp chuột phải vào ô Notch Frequency 1 và đặt bằng giá trị Cursor 1 đó (Servo-Loop I-Term tự động cập nhật). Nếu được hỏi đổi CCL Level, gõ "advanced". Đặt Notch Rejection 1 là 0.04 hoặc 0.05.',
          en:'Check the Cursor 1 value, then right-click the Notch Frequency 1 field and set it to that Cursor 1 value (the Servo-Loop I-Term updates automatically). If prompted to change the CCL Level, type "advanced". Set Notch Rejection 1 to 0.04 or 0.05.',
          ko:'Cursor 1의 값을 확인합니다. Notch Frequency 1 입력란을 우클릭해 Cursor 1 값으로 변경합니다(Servo-Loop I-Term 값도 자동 변경). CCL Level 변경 문구가 나오면 "advanced"를 입력합니다. Notch Rejection 1 값을 0.04 또는 0.05로 설정합니다.',
          zhCN:'确认Cursor 1的值。右键点击Notch Frequency 1输入栏,将其改为Cursor 1的值(Servo-Loop I-Term值也会自动变更)。若出现要求变更CCL Level的提示,请输入"advanced"。将Notch Rejection 1的值设为0.04或0.05。',
          zhTW:'確認Cursor 1的值。右鍵點擊Notch Frequency 1輸入欄,將其改為Cursor 1的值(Servo-Loop I-Term值也會自動變更)。若出現要求變更CCL Level的提示,請輸入"advanced"。將Notch Rejection 1的值設為0.04或0.05。',
          ja:'Cursor 1の値を確認します。Notch Frequency 1の入力欄を右クリックしCursor 1の値に変更します(Servo-Loop I-Termの値も自動変更)。CCL Level変更を求めるメッセージが出たら「advanced」と入力します。Notch Rejection 1の値を0.04または0.05に設定します。'
        }},
        {img:cmImg('J','nbga',90),tx:{
          vi:'Nhấn Save as Default (EEPROM) để lưu thay đổi.',
          en:'Click Save as Default (EEPROM) to save the changes.',
          ko:'Save as Default(EEPROM)을 클릭해 변경 사항을 저장합니다.',
          zhCN:'点击Save as Default(EEPROM)以保存变更内容。',
          zhTW:'點擊Save as Default(EEPROM)以儲存變更內容。',
          ja:'Save as Default(EEPROM)をクリックして変更内容を保存します。'
        }},
        {img:cmImg('J','nbga',91),tx:{
          vi:'Chọn Servo/Close Loop và nhấn Step Response để xem đồ thị — xác nhận Piezo không rung sau khi đạt vị trí mục tiêu. (Nếu chênh lệch max−min sau khi ổn định vượt 30nm, tinh chỉnh lại, hoặc kiểm tra PZT Stage/Controller.) Tinh chỉnh tốt: tăng nhanh, không rung. Tinh chỉnh kém: tăng chậm, có rung, hoặc Overshoot.',
          en:'Select Servo/Close Loop and click Step Response to view the graph — confirm the Piezo shows no vibration after reaching the target position. (If the max−min variation after settling exceeds 30nm, re-tune, or inspect the PZT Stage/Controller.) Good tuning: fast rise, no vibration. Poor tuning: slow rise, vibration present, or overshoot.',
          ko:'Servo/Close Loop를 선택하고 Step Response를 클릭해 그래프를 확인합니다 — Piezo가 목표 지점 도달 후 진동이 없는지 확인합니다(목표 지점 도달 후 변화량의 최댓값-최솟값이 30nm를 초과하면 다시 Tune하거나 PZT Stage·PZT Controller를 점검). Tune 양호: 빠른 상승·진동 없음. Tune 불량: 느린 상승·진동 있음·Overshoot 발생.',
          zhCN:'选择Servo/Close Loop并点击Step Response查看图表——确认Piezo到达目标点后是否无振动。(若稳定后变化量的最大值-最小值超过30nm,请重新Tune或检查PZT Stage、PZT Controller。)Tune良好:上升快、无振动。Tune不良:上升慢、有振动、发生Overshoot。',
          zhTW:'選擇Servo/Close Loop並點擊Step Response查看圖表——確認Piezo到達目標點後是否無振動。(若穩定後變化量的最大值-最小值超過30nm,請重新Tune或檢查PZT Stage、PZT Controller。)Tune良好:上升快、無振動。Tune不良:上升慢、有振動、發生Overshoot。',
          ja:'Servo/Close Loopを選択しStep Responseをクリックしてグラフを確認します——Piezoが目標地点到達後に振動がないか確認します(到達後の変化量の最大値-最小値が30nmを超える場合は再Tuneするか、PZT StageまたはPZT Controllerを点検)。Tune良好:速い上昇・振動なし。Tune不良:遅い上昇・振動あり・Overshoot発生。'
        }},
        {img:cmImg('J','nbga',92),tx:{
          vi:'Khi Servo bật, kiểm tra độ rung Current Value/Position nằm trong phạm vi bình thường (±0.015µm so với vị trí nghỉ). Ví dụ so sánh trường hợp bình thường (chênh lệch max/min nhỏ, VD ~28µm) với trường hợp bất thường (chênh lệch lớn hơn, VD ~42µm).',
          en:'With Servo on, check that the Current Value/Position jitter falls within the normal range (±0.015µm from the resting position). Examples compare a normal-range case (small max/min gap, e.g. ~28µm difference) against an abnormal-range case (larger gap, e.g. ~42µm difference).',
          ko:'Servo를 켜고 Current Value/Position의 떨림이 정상 범위(정지 상태 위치 기준 ±0.015um) 안에 들어오는지 확인합니다. 예시로 정상 범위(최댓값-최솟값 차이 약 28um)와 비정상 범위(차이 약 42um)를 비교합니다.',
          zhCN:'开启Servo后,确认Current Value/Position的抖动是否落在正常范围内(以静止位置为基准±0.015um)。示例比较正常范围(最大值-最小值差约28um)与异常范围(差约42um)的情形。',
          zhTW:'開啟Servo後,確認Current Value/Position的抖動是否落在正常範圍內(以靜止位置為基準±0.015um)。範例比較正常範圍(最大值-最小值差約28um)與異常範圍(差約42um)的情形。',
          ja:'Servoを入れ、Current Value/Positionの揺れが正常範囲(静止位置基準±0.015um)に収まっているか確認します。例として正常範囲(最大値-最小値の差約28um)と異常範囲(差約42um)を比較します。'
        }},
        {img:cmImg('J','nbga',93),tx:{
          vi:'Nanofaktur PZT — nhấn PID-Tuning.',
          en:'Nanofaktur PZT — click PID-Tuning.',
          ko:'Nanofaktur PZT — PID-Tuning을 클릭합니다.',
          zhCN:'Nanofaktur PZT——点击PID-Tuning。',
          zhTW:'Nanofaktur PZT——點擊PID-Tuning。',
          ja:'Nanofaktur PZT——PID-Tuningをクリックします。'
        }},
        {img:cmImg('J','nbga',94),tx:{
          vi:'Tắt Servo và đặt LP-Filter là None.',
          en:'Turn Servo off and set LP-Filter to None.',
          ko:'Servo를 Off하고 LP-Filter를 None으로 선택합니다.',
          zhCN:'关闭Servo,并将LP-Filter选为None。',
          zhTW:'關閉Servo,並將LP-Filter選為None。',
          ja:'ServoをOffにし、LP-FilterをNoneに選択します。'
        }},
        {img:cmImg('J','nbga',95),tx:{
          vi:'Nhập From=0V, Amplitude=3V và nhấn Check. Dùng công cụ phóng đại để zoom vào đỉnh, nhấn (x;y), và di chuyển chuột đến đỉnh để đọc giá trị Freq[Hz].',
          en:'Enter From=0V, Amplitude=3V and click Check. Use the magnifier tool to zoom into the peak, click (x;y), and move the mouse to the peak to read its Freq[Hz] value.',
          ko:'From 0V, Amplitude 3V를 입력하고 Check를 클릭합니다. 돋보기를 사용해 Peak 지점을 확대한 뒤, (x;y)를 클릭하고 마우스를 꼭짓점으로 이동해 Freq[Hz] 수치를 확인합니다.',
          zhCN:'输入From 0V、Amplitude 3V后点击Check。使用放大镜工具放大Peak位置,点击(x;y)并将鼠标移到峰值点确认Freq[Hz]数值。',
          zhTW:'輸入From 0V、Amplitude 3V後點擊Check。使用放大鏡工具放大Peak位置,點擊(x;y)並將滑鼠移到峰值點確認Freq[Hz]數值。',
          ja:'From 0V、Amplitude 3Vを入力しCheckをクリックします。虫眼鏡ツールでPeak地点を拡大し、(x;y)をクリックしてマウスを頂点へ移動しFreq[Hz]の数値を確認します。'
        }},
        {img:cmImg('J','nbga',96),tx:{
          vi:'Chuyển Notch-Filter1 từ Disabled sang Enabled, nhập giá trị Freq[Hz] vừa tìm được, và nhấn Check. Lặp lại quá trình này để tìm giá trị FFT[dB] tối ưu — xác nhận vị trí đỉnh dịch chuyển như mong đợi (① trước so với ② sau).',
          en:'Switch Notch-Filter1 from Disabled to Enabled, enter the Freq[Hz] value just found, and click Check. Repeat this process to find the optimal FFT[dB] value — confirm the peak position shifts as expected (① before vs. ② after).',
          ko:'Notch-Filter1을 Disabled → Enabled로 변경한 뒤 확인한 Freq[Hz] 값을 입력하고 Check를 클릭합니다. 이 작업을 반복해 FFT[dB] 최적값을 찾습니다 — ①과 같은 그래프가 ②처럼 Peak 지점이 변화하는지 확인합니다.',
          zhCN:'将Notch-Filter1由Disabled改为Enabled,输入刚才确认的Freq[Hz]值后点击Check。重复此操作以寻找FFT[dB]最佳值——确认①的图形如②般Peak位置发生变化。',
          zhTW:'將Notch-Filter1由Disabled改為Enabled,輸入剛才確認的Freq[Hz]值後點擊Check。重複此操作以尋找FFT[dB]最佳值——確認①的圖形如②般Peak位置發生變化。',
          ja:'Notch-Filter1をDisabled→Enabledに変更し、確認したFreq[Hz]値を入力してCheckをクリックします。この作業を繰り返しFFT[dB]の最適値を探します——①のグラフが②のようにPeak地点が変化するか確認します。'
        }},
        {img:cmImg('J','nbga',97),tx:{
          vi:'Đổi LP-Filter sang IIR và Frequency(Hz) thành 200, sau đó nhấn Check. Xác nhận sau khi bật IIR, độ dày biên độ đồ thị thay đổi như hình (trạng thái ② IIR-None so với trạng thái ① IIR-enabled).',
          en:'Change LP-Filter to IIR and Frequency(Hz) to 200, then click Check. Confirm that once IIR is enabled, the graph\'s amplitude thickness changes as shown (② IIR-None state vs. ① IIR-enabled state).',
          ko:'LP-Filter를 IIR로 변경하고 Frequency(Hz)를 200으로 설정한 뒤 Check를 클릭합니다. IIR 활성화 시 ②(IIR None 상태) 그래프의 진폭 두께가 ①처럼 바뀌었는지 확인합니다.',
          zhCN:'将LP-Filter改为IIR,Frequency(Hz)设为200后点击Check。确认启用IIR后,②(IIR None状态)图形的振幅粗细是否变成①的样子。',
          zhTW:'將LP-Filter改為IIR,Frequency(Hz)設為200後點擊Check。確認啟用IIR後,②(IIR None狀態)圖形的振幅粗細是否變成①的樣子。',
          ja:'LP-FilterをIIRに変更し、Frequency(Hz)を200に設定してCheckをクリックします。IIR有効化時に②(IIR None状態)のグラフの振幅の太さが①のように変わったか確認します。'
        }},
        {img:cmImg('J','nbga',98),tx:{
          vi:'Bật Servo ON, đặt From=0µm / Amplitude=3µm, và nhấn Check.',
          en:'Turn Servo ON, set From=0µm / Amplitude=3µm, and click Check.',
          ko:'Servo를 ON하고 From 0[um], Amplitude 3[um]로 설정한 뒤 Check를 클릭합니다.',
          zhCN:'开启Servo,设置From 0[um]、Amplitude 3[um]后点击Check。',
          zhTW:'開啟Servo,設定From 0[um]、Amplitude 3[um]後點擊Check。',
          ja:'ServoをONにし、From 0[um]、Amplitude 3[um]に設定してCheckをクリックします。'
        }},
        {img:cmImg('J','nbga',99),tx:{
          vi:'Thay đổi giá trị Amplitude và quan sát đồ thị (ví dụ ở 50µm và 100µm). Mục tiêu của PID tuning là: tăng nhanh, không rung, không Overshoot.',
          en:'Vary the Amplitude value and observe the graph (examples shown at 50µm and 100µm). The goal of PID tuning is: quick rise, no vibration, no overshoot.',
          ko:'Amplitude 값을 변경하며 그래프를 확인합니다(예시: Amplitude 50[um], 100[um]). PID-Tuning의 목표는 빠른 상승·진동 없음·Overshoot 없음입니다.',
          zhCN:'变更Amplitude值并观察图形(示例:Amplitude 50[um]、100[um])。PID-Tuning的目标为:快速上升、无振动、无Overshoot。',
          zhTW:'變更Amplitude值並觀察圖形(範例:Amplitude 50[um]、100[um])。PID-Tuning的目標為:快速上升、無振動、無Overshoot。',
          ja:'Amplitude値を変更しながらグラフを確認します(例:Amplitude 50[um]、100[um])。PID-Tuningの目標は、素早い上昇・振動なし・Overshootなしです。'
        }},
        {img:cmImg('J','nbga',100),tx:{
          vi:'Cách đặt P-term: tăng dần theo bước 0.01 tối đa đến 0.1 (giá trị khuyến nghị), tìm giá trị tối ưu trong phạm vi đó. So sánh ①②③, giá trị P-term ở ③ cho dạng sóng tốt nhất (giảm Overshoot ở đoạn tăng). Đặt P-term tối ưu trước khi chuyển sang I-term.',
          en:'How to set P-term: increase in steps of 0.01 up to a maximum of 0.1 (the recommended value), finding the optimal value within that range. Comparing ①②③, the ③ P-term value gives the best waveform (reduced overshoot in the rising section). Set the optimal P-term before moving on to I-term.',
          ko:'P-term 설정 방법: 0.01씩 증가시켜 최대 0.1(권장값)까지, 그 범위 안에서 값을 변경하며 최적값을 찾습니다. ①②③ 그래프를 비교하면 ③의 P-term 값 그래프가 파형이 양호합니다(상승 구간 Overshoot 감소). P-term 최적값 설정 후 I-term을 진행합니다.',
          zhCN:'P-term设置方法:以0.01为单位递增至最大0.1(建议值),在此范围内变更数值寻找最佳值。比较①②③图形可知③的P-term值波形较佳(上升区间Overshoot减少)。设置P-term最佳值后再进行I-term。',
          zhTW:'P-term設定方法:以0.01為單位遞增至最大0.1(建議值),在此範圍內變更數值尋找最佳值。比較①②③圖形可知③的P-term值波形較佳(上升區間Overshoot減少)。設定P-term最佳值後再進行I-term。',
          ja:'P-termの設定方法:0.01ずつ増加させ最大0.1(推奨値)まで、その範囲内で値を変更しながら最適値を探します。①②③のグラフを比較すると③のP-term値の波形が良好です(上昇区間のOvershoot減少)。P-term最適値設定後、I-termへ進みます。'
        }},
        {img:cmImg('J','nbga',101),tx:{
          vi:'Cách đặt I-term: tăng dần theo bước 5–10 tối đa đến 100 (giá trị khuyến nghị), tìm giá trị tối ưu trong phạm vi đó. So sánh ①②③, giá trị I-term ở ③ cho dạng sóng tốt nhất (giảm Overshoot và rung sau khi đạt mục tiêu). Lưu ý: không dùng D-term (dùng D-term đã gây cộng hưởng).',
          en:'How to set I-term: increase in steps of 5–10 up to a maximum of 100 (the recommended value), finding the optimal value within that range. Comparing ①②③, the ③ I-term value gives the best waveform (reduced overshoot and vibration after reaching the target). Caution: do not use D-term (using it caused resonance).',
          ko:'I-term 설정 방법: 5~10씩 증가시켜 최대 100(권장값)까지, 그 범위 안에서 값을 변경하며 최적값을 찾습니다. ①②③ 그래프를 비교하면 ③의 I-term 값 그래프가 파형이 양호합니다(목표 지점 도달 후 Overshoot·진동 감소). 주의: D-term은 사용하지 않습니다(사용 시 공진 발생).',
          zhCN:'I-term设置方法:以5~10为单位递增至最大100(建议值),在此范围内变更数值寻找最佳值。比较①②③图形可知③的I-term值波形较佳(到达目标点后Overshoot、振动减少)。注意:请勿使用D-term(使用时曾发生共振)。',
          zhTW:'I-term設定方法:以5~10為單位遞增至最大100(建議值),在此範圍內變更數值尋找最佳值。比較①②③圖形可知③的I-term值波形較佳(到達目標點後Overshoot、振動減少)。注意:請勿使用D-term(使用時曾發生共振)。',
          ja:'I-termの設定方法:5~10ずつ増加させ最大100(推奨値)まで、その範囲内で値を変更しながら最適値を探します。①②③のグラフを比較すると③のI-term値の波形が良好です(目標地点到達後のOvershoot・振動が減少)。注意:D-termは使用しません(使用時に共振が発生)。'
        }},
        {img:cmImg('J','nbga',102),tx:{
          vi:'Sau khi hoàn tất PID-Tuning, nhấn Save parameter as default, sau đó Close.',
          en:'Once PID-Tuning is complete, click Save parameter as default, then Close.',
          ko:'PID-Tuning이 완료되면 Save parameter as default 하고 Close 합니다.',
          zhCN:'PID-Tuning完成后,点击Save parameter as default,然后Close。',
          zhTW:'PID-Tuning完成後,點擊Save parameter as default,然後Close。',
          ja:'PID-Tuningが完了したらSave parameter as defaultを行い、Closeします。'
        }},
        {img:cmImg('J','nbga',103),tx:{
          vi:'Product Verification Progress — phần này đề cập đến Jig Table Flatness, Illumination Uniformity, 2D ID (Barcode/OCR), Dry Run, MTBI, Accuracy, Repeatability, Reproducibility, Correlation, và Takt Time.',
          en:'Product Verification Progress — this section covers Jig Table Flatness, Illumination Uniformity, 2D ID (Barcode/OCR), Dry Run, MTBI, Accuracy, Repeatability, Reproducibility, Correlation, and Takt Time.',
          ko:'Product Verification Progress — Jig Table Flatness, Illumination Uniformity, 2D ID(Barcode/OCR), Dry Run, MTBI, Accuracy, Repeatability, Reproducibility, Correlation, Takt Time를 다룹니다.',
          zhCN:'Product Verification Progress——本节介绍Jig Table Flatness、Illumination Uniformity、2D ID(Barcode/OCR)、Dry Run、MTBI、Accuracy、Repeatability、Reproducibility、Correlation、Takt Time。',
          zhTW:'Product Verification Progress——本節介紹Jig Table Flatness、Illumination Uniformity、2D ID(Barcode/OCR)、Dry Run、MTBI、Accuracy、Repeatability、Reproducibility、Correlation、Takt Time。',
          ja:'Product Verification Progress——本節ではJig Table Flatness、Illumination Uniformity、2D ID(Barcode/OCR)、Dry Run、MTBI、Accuracy、Repeatability、Reproducibility、Correlation、Takt Timeを扱います。'
        }},
        {img:cmImg('J','nbga',104),tx:{
          vi:'2.2.1. Jig Table Flatness – Dùng Dial Gauge: đo độ phẳng bằng đồng hồ đo chính xác 1µm. Đặt lên bề mặt, đặt về 0 tại điểm chuẩn, sau đó di chuyển qua bề mặt và ghi lại độ lệch chiều cao tại mỗi điểm đã chỉ định.',
          en:'2.2.1. Jig Table Flatness – Using a Dial Gauge: measure flatness with a gauge accurate to 1µm. Place it on the surface, zero it at a reference point, then move it across the surface and record the height variation at each designated point.',
          ko:'2.2.1. Jig Table Flatness – Dial Gauge 사용: 1um 단위까지 측정 가능한 Indicator로 평탄도를 측정합니다. Dial Gauge를 측정면에 올려 기준점에서 0으로 맞춘 뒤, 표면을 따라 이동시키며 지정된 지점의 높이 편차를 기록합니다.',
          zhCN:'2.2.1. Jig Table Flatness – 使用Dial Gauge:以可测量至1um的Indicator测量平坦度。将Dial Gauge放在测量面上,于基准点归零后沿表面移动,记录各指定点的高度偏差。',
          zhTW:'2.2.1. Jig Table Flatness – 使用Dial Gauge:以可測量至1um的Indicator測量平坦度。將Dial Gauge放在測量面上,於基準點歸零後沿表面移動,記錄各指定點的高度偏差。',
          ja:'2.2.1. Jig Table Flatness – Dial Gauge使用:1umまで測定可能なIndicatorで平坦度を測定します。Dial Gaugeを測定面に置き、基準点でゼロ合わせした後、表面に沿って移動させながら指定地点の高さ偏差を記録します。'
        }},
        {img:cmImg('J','nbga',105),tx:{
          vi:'Ví dụ Báo cáo Jig Flatness — đo 9 điểm chuẩn (VD 7, 6, 21, 9, −9, 15, 23, 0, 21 µm). Chênh lệch tối đa (Max−Min) trên toàn bộ điểm đo không được vượt quá 50µm.',
          en:'Jig Flatness Report example — 9 reference points measured (e.g. 7, 6, 21, 9, −9, 15, 23, 0, 21 µm). The maximum difference (Max−Min) across all measured points must not exceed 50µm.',
          ko:'Jig Flatness Report 예시 — 9개 기준점 측정값(예: 7, 6, 21, 9, -9, 15, 23, 0, 21um). 측정값 간 최대-최소 차이는 50um를 초과하면 안 됩니다.',
          zhCN:'Jig Flatness Report示例——9个基准点的测量值(如7、6、21、9、-9、15、23、0、21um)。所有测量值的最大值-最小值差不得超过50um。',
          zhTW:'Jig Flatness Report範例——9個基準點的測量值(如7、6、21、9、-9、15、23、0、21um)。所有測量值的最大值-最小值差不得超過50um。',
          ja:'Jig Flatness Report例——9つの基準点の測定値(例:7、6、21、9、-9、15、23、0、21um)。すべての測定値の最大-最小の差は50umを超えてはいけません。'
        }},
        {img:cmImg('J','nbga',106),tx:{
          vi:'2.2.1. Jig Table Flatness – Dùng Optical Mirror: đặt Optical Mirror lên bề mặt, đặt 3D Inspector phía trên, sau đó dùng chương trình 3D Vision và AF để Single-Track đến độ cao thấy được vân Fringe, và ghi lại giá trị trục Z của chương trình AF tại mỗi 9 điểm.',
          en:'2.2.1. Jig Table Flatness – Using an Optical Mirror: place the Optical Mirror on the surface, position the 3D Inspector over it, then use the 3D Vision and AF programs to Single-Track to the height where fringes are visible, and record the AF program\'s Z-axis value at each of the 9 points.',
          ko:'2.2.1. Jig Table Flatness – Optical Mirror 사용: Optical Mirror를 측정면에 올리고 3D Inspector를 그 위에 위치시킨 뒤, 3D Vision·AF Program으로 Fringe가 보이는 높이까지 Single Tracking하여 AF Program에 표시된 Z축 값을 각 9개 지점마다 기록합니다.',
          zhCN:'2.2.1. Jig Table Flatness – 使用Optical Mirror:将Optical Mirror放在测量面上,并将3D Inspector置于其上方,以3D Vision、AF Program进行Single Tracking至Fringe可见的高度,记录AF Program显示的Z轴值,每处共9个点。',
          zhTW:'2.2.1. Jig Table Flatness – 使用Optical Mirror:將Optical Mirror放在測量面上,並將3D Inspector置於其上方,以3D Vision、AF Program進行Single Tracking至Fringe可見的高度,記錄AF Program顯示的Z軸值,每處共9個點。',
          ja:'2.2.1. Jig Table Flatness – Optical Mirror使用:Optical Mirrorを測定面に置き、3D Inspectorをその上に配置した後、3D Vision・AF ProgramでFringeが見える高さまでSingle Trackingし、AF Programに表示されたZ軸値を9箇所それぞれで記録します。'
        }},
        {img:cmImg('J','nbga',107),tx:{
          vi:'Ví dụ báo cáo độ phẳng bằng Optical-Mirror — đo 9 điểm (khoảng −11887 đến −11895µm). Cũng vậy, chênh lệch tối đa (Max−Min) trên toàn bộ điểm không được vượt quá 50µm.',
          en:'Optical-Mirror flatness report example — 9 points measured (roughly −11887 to −11895µm). Again, the maximum difference (Max−Min) across all points must not exceed 50µm.',
          ko:'Optical Mirror 방식 평탄도 리포트 예시 — 9개 지점 측정값(약 -11887~-11895um). 이 경우도 측정값 간 최대-최소 차이는 50um를 초과하면 안 됩니다.',
          zhCN:'Optical Mirror方式的平坦度报告示例——9个点的测量值(约-11887~-11895um)。此情况下最大值-最小值差同样不得超过50um。',
          zhTW:'Optical Mirror方式的平坦度報告範例——9個點的測量值(約-11887~-11895um)。此情況下最大值-最小值差同樣不得超過50um。',
          ja:'Optical Mirror方式の平坦度レポート例——9箇所の測定値(約-11887~-11895um)。この場合も最大-最小の差は50umを超えてはいけません。'
        }},
        {img:cmImg('J','nbga',108),tx:{
          vi:'Product Verification Progress — phần này đề cập đến Jig Table Flatness, Illumination Uniformity, 2D ID (Barcode/OCR), Dry Run, MTBI, Accuracy, Repeatability, Reproducibility, Correlation, và Takt Time.',
          en:'Product Verification Progress — this section covers Jig Table Flatness, Illumination Uniformity, 2D ID (Barcode/OCR), Dry Run, MTBI, Accuracy, Repeatability, Reproducibility, Correlation, and Takt Time.',
          ko:'Product Verification Progress — Jig Table Flatness, Illumination Uniformity, 2D ID(Barcode/OCR), Dry Run, MTBI, Accuracy, Repeatability, Reproducibility, Correlation, Takt Time를 다룹니다.',
          zhCN:'Product Verification Progress——本节介绍Jig Table Flatness、Illumination Uniformity、2D ID(Barcode/OCR)、Dry Run、MTBI、Accuracy、Repeatability、Reproducibility、Correlation、Takt Time。',
          zhTW:'Product Verification Progress——本節介紹Jig Table Flatness、Illumination Uniformity、2D ID(Barcode/OCR)、Dry Run、MTBI、Accuracy、Repeatability、Reproducibility、Correlation、Takt Time。',
          ja:'Product Verification Progress——本節ではJig Table Flatness、Illumination Uniformity、2D ID(Barcode/OCR)、Dry Run、MTBI、Accuracy、Repeatability、Reproducibility、Correlation、Takt Timeを扱います。'
        }},
        {img:cmImg('J','nbga',109),tx:{
          vi:'2.2.2. Illumination Uniformity – 3D: nhấn Job Open trên màn hình chính chương trình Host và chọn \'LTS\' — thông báo xác nhận Job File đã mở. Nếu chưa có Job LTS, tạo mới qua Save As (cần vì một số Parameter phải thay đổi để tiến hành LTS).',
          en:'2.2.2. Illumination Uniformity – 3D: click Job Open in the Host program\'s main window and select \'LTS\' — a message confirms the Job File is opened. If no LTS job exists yet, create one via Save As (needed because certain parameters must be changed to proceed with LTS).',
          ko:'2.2.2. Illumination Uniformity – 3D: Host Program 메인 화면에서 Job Open을 클릭하고 \'LTS\'를 선택하면 Job File이 열렸다는 메시지가 나타납니다. 기존 LTS Job이 없다면 Save As로 새로 만듭니다(LTS 진행을 위해 일부 Parameter를 변경해야 하므로 필요).',
          zhCN:'2.2.2. Illumination Uniformity – 3D:在Host Program主画面点击Job Open并选择\'LTS\',会出现Job File已开启的提示。若尚无既有的LTS Job,可透过Save As新建(因为进行LTS需变更部分参数)。',
          zhTW:'2.2.2. Illumination Uniformity – 3D:在Host Program主畫面點擊Job Open並選擇\'LTS\',會出現Job File已開啟的提示。若尚無既有的LTS Job,可透過Save As新建(因為進行LTS需變更部分參數)。',
          ja:'2.2.2. Illumination Uniformity – 3D:Host Programのメイン画面でJob Openをクリックし\'LTS\'を選択すると、Job Fileが開かれたことを示すメッセージが表示されます。既存のLTS Jobがない場合はSave Asで新規作成します(LTSを進めるために一部Parameterの変更が必要なため)。'
        }},
        {img:cmImg('J','nbga',110),tx:{
          vi:'Đo Gray Target trong Block LTS của Jig 30 lần: vừa xem ảnh Live trong chương trình Vision, di chuyển Jig (Y-axis) Table và Vision Module (X-axis) đến Gray Target Pos, di chuyển Motor trục Z đến vị trí In-Focus, Single-Track để tìm tâm Focus, và kiểm tra hình Live trong cửa sổ Illum Control.',
          en:'Measure the Gray Target in the Jig\'s LTS block 30 times: while watching the live image in the Vision program, move the Jig (Y-axis) table and Vision Module (X-axis) to the Gray Target Pos, move the Z-axis motor to the In-Focus position, Single-Track to find the center of focus, and check the live view in the Illum Control window.',
          ko:'Jig의 LTS Block에 있는 \'Gray Target\'을 30회 측정합니다: Vision Program의 Live 화면을 보며 Jig(Y축) Table과 Vision Module(X축)을 Gray Target Pos 위치로 이동, Z축 Motor를 In Focus 위치로 이동 후 Single Tracking으로 초점 중심을 찾고, Vision Program의 Illum Control 창에서 Live 영상을 확인합니다.',
          zhCN:'对Jig的LTS Block内的\'Gray Target\'测量30次:观看Vision Program的Live画面,将Jig(Y轴)Table与Vision Module(X轴)移动到Gray Target Pos位置,将Z轴Motor移至In Focus位置后以Single Tracking寻找对焦中心,并在Vision Program的Illum Control窗口确认Live影像。',
          zhTW:'對Jig的LTS Block內的\'Gray Target\'測量30次:觀看Vision Program的Live畫面,將Jig(Y軸)Table與Vision Module(X軸)移動到Gray Target Pos位置,將Z軸Motor移至In Focus位置後以Single Tracking尋找對焦中心,並在Vision Program的Illum Control視窗確認Live影像。',
          ja:'JigのLTS Blockにある\'Gray Target\'を30回測定します:Vision ProgramのLive画面を見ながらJig(Y軸)TableとVision Module(X軸)をGray Target Pos位置へ移動、Z軸MotorをIn Focus位置へ移動後Single Trackingで焦点中心を探し、Vision ProgramのIllum Controlウィンドウでライブ映像を確認します。'
        }},
        {img:cmImg('J','nbga',111),tx:{
          vi:'Chọn \'3D_Img2\' và điều chỉnh Intensity của đèn 3D (VD thành 460) sao cho giá trị Pixel Live của Gray Target đọc gần RGB[160,160,160]. Sau khi lưu, đóng Illum Control và chọn Utility ▸ Display Illum LTS từ menu trên cùng của chương trình Vision chính.',
          en:'Select \'3D_Img2\' and adjust the 3D light\'s Intensity (e.g. to 460) so the Gray Target\'s live pixel value reads close to RGB[160,160,160]. After saving, close Illum Control and select Utility ▸ Display Illum LTS from the vision main program\'s top menu.',
          ko:'\'3D_Img2\'를 선택하고, Gray Target의 Live 화면 픽셀값이 RGB[160,160,160]에 가깝도록 3D Light Intensity 값을 조정합니다(예: 460). 저장 후 Illum Control 창을 닫고, Vision Main Program 상단 메뉴의 Utility에서 \'Display Illum LTS\'를 선택합니다.',
          zhCN:'选择\'3D_Img2\',并调整3D Light的Intensity值(例如460),使Gray Target的Live画面像素值接近RGB[160,160,160]。保存后关闭Illum Control窗口,在Vision Main Program上方菜单的Utility中选择\'Display Illum LTS\'。',
          zhTW:'選擇\'3D_Img2\',並調整3D Light的Intensity值(例如460),使Gray Target的Live畫面像素值接近RGB[160,160,160]。儲存後關閉Illum Control視窗,在Vision Main Program上方選單的Utility中選擇\'Display Illum LTS\'。',
          ja:'\'3D_Img2\'を選択し、Gray TargetのLive画面のピクセル値がRGB[160,160,160]に近づくよう3D LightのIntensity値を調整します(例:460)。保存後Illum Controlウィンドウを閉じ、Vision Main Programの上部メニューのUtilityから\'Display Illum LTS\'を選択します。'
        }},
        {img:cmImg('J','nbga',112),tx:{
          vi:'Đặt ROI để tổng hợp giá trị chiếu sáng như hình, nhấn Grab + Insp để chạy kiểm tra và xem kết quả. Sau khi xác nhận, nhấn ROI Apply và Grid Apply.',
          en:'Set the ROI to sum the illumination value as shown, click Grab + Insp to run the inspection, and check the results. Once confirmed, click ROI Apply and Grid Apply.',
          ko:'그림처럼 조명값을 합산할 ROI를 설정하고, Grab + Insp 버튼을 클릭해 검사를 진행한 뒤 결과를 확인합니다. 결과 확인 후 ROI Apply와 Grid Apply를 클릭합니다.',
          zhCN:'如图设置用于加总照明值的ROI,点击Grab + Insp进行检测后确认结果。确认结果后点击ROI Apply与Grid Apply。',
          zhTW:'如圖設定用於加總照明值的ROI,點擊Grab + Insp進行檢測後確認結果。確認結果後點擊ROI Apply與Grid Apply。',
          ja:'図のように照明値を合算するROIを設定し、Grab + Inspボタンをクリックして検査を行い結果を確認します。結果確認後、ROI ApplyとGrid Applyをクリックします。'
        }},
        {img:cmImg('J','nbga',113),tx:{
          vi:'Nhấn Tray LTS để mở cửa sổ thiết lập LTS (Long Term Stability).',
          en:'Press Tray LTS to open the LTS (Long Term Stability) setup window.',
          ko:'\'Tray LTS\'를 눌러 LTS(Long Term Stability) 설정 창을 엽니다.',
          zhCN:'按下\'Tray LTS\'打开LTS(Long Term Stability)设置窗口。',
          zhTW:'按下\'Tray LTS\'開啟LTS(Long Term Stability)設定視窗。',
          ja:'\'Tray LTS\'を押しLTS(Long Term Stability)設定ウィンドウを開きます。'
        }},
        {img:cmImg('J','nbga',114),tx:{
          vi:'Tích checkbox \'Gray\', đặt giá trị Reference V1 & V2 là 160, và nhập Repeat Count.',
          en:'Check the \'Gray\' checkbox, set the V1 & V2 Reference value to 160, and enter the Repeat Count.',
          ko:'\'Gray\' 체크박스를 선택하고, V1 & V2 Reference 값을 160으로 설정한 뒤 Repeat Count를 입력합니다.',
          zhCN:'勾选\'Gray\'复选框,将V1 & V2 Reference值设为160,并输入Repeat Count。',
          zhTW:'勾選\'Gray\'核取方塊,將V1 & V2 Reference值設為160,並輸入Repeat Count。',
          ja:'\'Gray\'チェックボックスを選択し、V1 & V2 Reference値を160に設定した後、Repeat Countを入力します。'
        }},
        {img:cmImg('J','nbga',115),tx:{
          vi:'Nhấn Start để chạy kiểm tra; khi hoàn tất, một loạt thông báo hiện ra và kiểm tra kết thúc.',
          en:'Click Start to run the inspection; upon completion, a sequence of messages appears and the inspection ends.',
          ko:'\'Start\'를 클릭해 검사를 진행하며, 완료되면 순서대로 메시지가 표시되고 검사가 종료됩니다.',
          zhCN:'点击\'Start\'进行检测,完成后会依序显示讯息并结束检测。',
          zhTW:'點擊\'Start\'進行檢測,完成後會依序顯示訊息並結束檢測。',
          ja:'\'Start\'をクリックして検査を進め、完了すると順にメッセージが表示され検査が終了します。'
        }},
        {img:cmImg('J','nbga',116),tx:{
          vi:'Gray Target Report (V1) — file kết quả lưu tại This PC ▸ Local Disk (D:) ▸ LTS ▸ Date. Score tính toán (= {(Mean − Worst) / Mean} × 100%) không được vượt quá 10.',
          en:'Gray Target Report (V1) — the result file is saved under This PC ▸ Local Disk (D:) ▸ LTS ▸ Date. The calculated Score (= {(Mean − Worst) / Mean} × 100%) must not exceed 10.',
          ko:'Gray Target Report(V1) — 결과 파일은 This PC ▸ Local Disk(D:) ▸ LTS ▸ Date 경로에 저장됩니다. 계산된 Score(={(Mean-Worst)/Mean}*100%)는 10을 초과하면 안 됩니다.',
          zhCN:'Gray Target Report(V1)——结果文件保存于This PC ▸ Local Disk(D:) ▸ LTS ▸ Date路径。计算出的Score(={(Mean-Worst)/Mean}*100%)不得超过10。',
          zhTW:'Gray Target Report(V1)——結果檔案儲存於This PC ▸ Local Disk(D:) ▸ LTS ▸ Date路徑。計算出的Score(={(Mean-Worst)/Mean}*100%)不得超過10。',
          ja:'Gray Target Report(V1)——結果ファイルはThis PC ▸ Local Disk(D:) ▸ LTS ▸ Dateのパスに保存されます。算出されたScore(={(Mean-Worst)/Mean}*100%)は10を超えてはいけません。'
        }},
        {img:cmImg('J','nbga',117),tx:{
          vi:'2.2.2. Illumination Uniformity – 2D: đo Gray Target trên Reference Tray 30 lần, theo cùng cách — di chuyển đến Gray Target Pos trong khi xem ảnh Live, di chuyển Z đến In-Focus, Single-Track để tìm tâm Focus, và kiểm tra hình Live trong Illum Control.',
          en:'2.2.2. Illumination Uniformity – 2D: measure the Gray Target on the reference tray 30 times, the same way — move to the Gray Target Pos while watching the live image, move Z to In-Focus, Single-Track to find the focus center, and check the live view in Illum Control.',
          ko:'2.2.2. Illumination Uniformity – 2D: Reference Tray의 \'Gray Target\'을 동일한 방식으로 30회 측정합니다 — Live 화면을 보며 Gray Target Pos로 이동, Z를 In Focus로 이동 후 Single Tracking으로 초점 중심을 찾고 Illum Control에서 Live 영상을 확인합니다.',
          zhCN:'2.2.2. Illumination Uniformity – 2D:以相同方式对Reference Tray的\'Gray Target\'测量30次——观看Live画面移动至Gray Target Pos,将Z移至In Focus后以Single Tracking寻找对焦中心,并在Illum Control确认Live影像。',
          zhTW:'2.2.2. Illumination Uniformity – 2D:以相同方式對Reference Tray的\'Gray Target\'測量30次——觀看Live畫面移動至Gray Target Pos,將Z移至In Focus後以Single Tracking尋找對焦中心,並在Illum Control確認Live影像。',
          ja:'2.2.2. Illumination Uniformity – 2D:Reference Trayの\'Gray Target\'を同様の方法で30回測定します——Live画面を見ながらGray Target Posへ移動、ZをIn Focusへ移動後Single Trackingで焦点中心を探し、Illum ControlでLive映像を確認します。'
        }},
        {img:cmImg('J','nbga',118),tx:{
          vi:'Đặt Parameter và giá trị chiếu sáng như hình, và điều chỉnh khẩu độ Lens Camera 2D sao cho giá trị RGB đọc là 160.',
          en:'Set the parameters and lighting values as shown, and adjust the 2D camera lens\'s aperture so the RGB value reads 160.',
          ko:'그림처럼 Parameter와 조명값을 설정하고, 2D Camera 렌즈의 Aperture를 조정해 RGB 값이 160이 되도록 맞춥니다.',
          zhCN:'如图设置参数与照明值,并调整2D Camera镜头的Aperture,使RGB值达到160。',
          zhTW:'如圖設定參數與照明值,並調整2D Camera鏡頭的Aperture,使RGB值達到160。',
          ja:'図のようにパラメータと照明値を設定し、2D CameraレンズのApertureを調整してRGB値が160になるよう合わせます。'
        }},
        {img:cmImg('J','nbga',119),tx:{
          vi:'Cũng như 3D: lưu, đóng Illum Control, chọn Display Illum LTS từ Utility, đặt ROI tổng hợp như hình, nhấn Grab + Insp để kiểm tra và xem kết quả, sau đó nhấn ROI Apply và Grid Apply.',
          en:'Just as with 3D: save, close Illum Control, select Display Illum LTS from Utility, set the summing ROI as shown, click Grab + Insp to inspect and check results, then click ROI Apply and Grid Apply.',
          ko:'3D와 동일하게: 저장 후 Illum Control을 닫고 Utility에서 Display Illum LTS를 선택, 그림처럼 조명값 합산용 ROI 설정 후 Grab + Insp로 검사·결과 확인, ROI Apply와 Grid Apply를 클릭합니다.',
          zhCN:'与3D相同:保存后关闭Illum Control,在Utility中选择Display Illum LTS,如图设置照明值加总用ROI后以Grab + Insp检测并确认结果,点击ROI Apply与Grid Apply。',
          zhTW:'與3D相同:儲存後關閉Illum Control,在Utility中選擇Display Illum LTS,如圖設定照明值加總用ROI後以Grab + Insp檢測並確認結果,點擊ROI Apply與Grid Apply。',
          ja:'3Dと同様に:保存後Illum Controlを閉じUtilityからDisplay Illum LTSを選択、図のように照明値合算用ROIを設定後Grab + Insp で検査・結果確認、ROI ApplyとGrid Applyをクリックします。'
        }},
        {img:cmImg('J','nbga',120),tx:{
          vi:'Sau khi đặt Parameter như hình, nhấn Start để chạy kiểm tra; thông báo hoàn tất hiện ra khi xong.',
          en:'After setting the parameters as shown, click Start to run the inspection; a completion message appears once it finishes.',
          ko:'그림처럼 Parameter 설정 후 \'Start\'를 클릭해 검사를 진행하며, 완료되면 완료 메시지가 표시됩니다.',
          zhCN:'如图设置参数后点击\'Start\'进行检测,完成后会显示完成讯息。',
          zhTW:'如圖設定參數後點擊\'Start\'進行檢測,完成後會顯示完成訊息。',
          ja:'図のようにパラメータ設定後\'Start\'をクリックして検査を進め、完了すると完了メッセージが表示されます。'
        }},
        {img:cmImg('J','nbga',121),tx:{
          vi:'Gray Target Report (2D Vision) — file kết quả lưu tại This PC ▸ Local Disk (D:) ▸ LTS ▸ Date. Score tính toán không được vượt quá 10 (cùng công thức như trường hợp 3D).',
          en:'Gray Target Report (2D Vision) — the result file is saved under This PC ▸ Local Disk (D:) ▸ LTS ▸ Date. The calculated Score must not exceed 10 (same formula as the 3D case).',
          ko:'Gray Target Report(2D Vision) — 결과 파일은 This PC ▸ Local Disk(D:) ▸ LTS ▸ Date 경로에 저장됩니다. 계산된 Score는 10을 초과하면 안 됩니다(3D와 동일한 계산식).',
          zhCN:'Gray Target Report(2D Vision)——结果文件保存于This PC ▸ Local Disk(D:) ▸ LTS ▸ Date路径。计算出的Score不得超过10(计算公式与3D相同)。',
          zhTW:'Gray Target Report(2D Vision)——結果檔案儲存於This PC ▸ Local Disk(D:) ▸ LTS ▸ Date路徑。計算出的Score不得超過10(計算公式與3D相同)。',
          ja:'Gray Target Report(2D Vision)——結果ファイルはThis PC ▸ Local Disk(D:) ▸ LTS ▸ Dateのパスに保存されます。算出されたScoreは10を超えてはいけません(3Dと同じ計算式)。'
        }},
        {img:cmImg('J','nbga',122),tx:{
          vi:'Product Verification Progress — phần này đề cập đến Jig Table Flatness, Illumination Uniformity, 2D ID (Barcode/OCR), Dry Run, MTBI, Accuracy, Repeatability, Reproducibility, Correlation, và Takt Time.',
          en:'Product Verification Progress — this section covers Jig Table Flatness, Illumination Uniformity, 2D ID (Barcode/OCR), Dry Run, MTBI, Accuracy, Repeatability, Reproducibility, Correlation, and Takt Time.',
          ko:'Product Verification Progress — Jig Table Flatness, Illumination Uniformity, 2D ID(Barcode/OCR), Dry Run, MTBI, Accuracy, Repeatability, Reproducibility, Correlation, Takt Time를 다룹니다.',
          zhCN:'Product Verification Progress——本节介绍Jig Table Flatness、Illumination Uniformity、2D ID(Barcode/OCR)、Dry Run、MTBI、Accuracy、Repeatability、Reproducibility、Correlation、Takt Time。',
          zhTW:'Product Verification Progress——本節介紹Jig Table Flatness、Illumination Uniformity、2D ID(Barcode/OCR)、Dry Run、MTBI、Accuracy、Repeatability、Reproducibility、Correlation、Takt Time。',
          ja:'Product Verification Progress——本節ではJig Table Flatness、Illumination Uniformity、2D ID(Barcode/OCR)、Dry Run、MTBI、Accuracy、Repeatability、Reproducibility、Correlation、Takt Timeを扱います。'
        }},
        {img:cmImg('J','nbga',123),tx:{
          vi:'2.2.3. 2D ID (Barcode & OCR): mở Job của sản phẩm có 2D ID hoặc Barcode. (Sản phẩm C2 được dùng làm ví dụ.)',
          en:'2.2.3. 2D ID (Barcode & OCR): open the Job for a product that carries a 2D ID or barcode. (The C2 product is used as the example.)',
          ko:'2.2.3. 2D ID(Barcode & OCR): 2D ID나 Barcode가 있는 Product의 Job을 엽니다(예시로 C2 Product 사용).',
          zhCN:'2.2.3. 2D ID(Barcode & OCR):打开具有2D ID或Barcode的Product的Job(以C2 Product为例)。',
          zhTW:'2.2.3. 2D ID(Barcode & OCR):開啟具有2D ID或Barcode的Product的Job(以C2 Product為例)。',
          ja:'2.2.3. 2D ID(Barcode & OCR):2D IDまたはBarcodeを持つProductのJobを開きます(例としてC2 Productを使用)。'
        }},
        {img:cmImg('J','nbga',124),tx:{
          vi:'Đặt một Tray đầy lên Load Rail như hình. Nhấn \'2D Vision\' sẽ khiến Indexer Clamp Tray — Tray đặt sai vị trí có nguy cơ hư hỏng.',
          en:'Place a full tray on the Load Rail as shown. Clicking \'2D Vision\' makes the indexer clamp the tray — a wrongly-positioned tray risks damage.',
          ko:'그림처럼 Full Tray를 Load Rail에 놓습니다. \'2D Vision\'을 클릭하면 Indexer가 Tray를 Clamp합니다 — Tray가 잘못된 위치에 놓이면 손상 위험이 있습니다.',
          zhCN:'如图将Full Tray放置在Load Rail上。点击\'2D Vision\'后Indexer会Clamp该Tray——若Tray放置位置错误,有损坏风险。',
          zhTW:'如圖將Full Tray放置在Load Rail上。點擊\'2D Vision\'後Indexer會Clamp該Tray——若Tray放置位置錯誤,有損壞風險。',
          ja:'図のようにFull TrayをLoad Railに置きます。\'2D Vision\'をクリックするとIndexerがTrayをClampします——Trayの位置が誤っていると損傷の危険があります。'
        }},
        {img:cmImg('J','nbga',125),tx:{
          vi:'Nhấn để di chuyển đến Pocket mục tiêu, và đặt giá trị chiếu sáng sao cho sản phẩm hiện rõ.',
          en:'Click to move to the target pocket, and set the illumination value so the product is clearly visible.',
          ko:'클릭하여 해당 Pocket으로 이동합니다. Product가 잘 보이도록 조명값을 설정합니다.',
          zhCN:'点击移动至该Pocket。设置照明值使Product清晰可见。',
          zhTW:'點擊移動至該Pocket。設定照明值使Product清晰可見。',
          ja:'クリックして該当Pocketへ移動します。Productがよく見えるよう照明値を設定します。'
        }},
        {img:cmImg('J','nbga',126),tx:{
          vi:'Chọn \'Barcode\' từ menu dưới cùng của chương trình Vision để mở cửa sổ thiết lập.',
          en:'Select \'Barcode\' from the vision program\'s bottom menu to open its settings window.',
          ko:'Vision Program 하단 메뉴에서 \'Barcode\'를 선택해 설정 창을 엽니다.',
          zhCN:'在Vision Program下方菜单选择\'Barcode\'以打开设置窗口。',
          zhTW:'在Vision Program下方選單選擇\'Barcode\'以開啟設定視窗。',
          ja:'Vision Programの下部メニューで\'Barcode\'を選択し設定ウィンドウを開きます。'
        }},
        {img:cmImg('J','nbga',127),tx:{
          vi:'Đặt ROI (Region of Interest) lấy tâm là Barcode (Search ROI và Barcode ROI). Nhấn Inspect để chạy và xem kết quả như hình, sau đó nhấn Apply khi đã xác nhận.',
          en:'Set a ROI (Region of Interest) centered on the barcode (Search ROI and Barcode ROI). Click Inspect to run and check the results as shown, then click Apply once confirmed.',
          ko:'Barcode를 중심으로 ROI(Region of Interest)를 설정합니다(Search ROI, Barcode ROI). \'Inspect\' 버튼을 클릭해 검사를 진행하고 결과를 확인한 뒤, \'Apply\'를 클릭합니다.',
          zhCN:'以Barcode为中心设置ROI(Region of Interest)(Search ROI、Barcode ROI)。点击\'Inspect\'按钮进行检测并确认结果后,点击\'Apply\'。',
          zhTW:'以Barcode為中心設定ROI(Region of Interest)(Search ROI、Barcode ROI)。點擊\'Inspect\'按鈕進行檢測並確認結果後,點擊\'Apply\'。',
          ja:'Barcodeを中心にROI(Region of Interest)を設定します(Search ROI、Barcode ROI)。\'Inspect\'ボタンをクリックして検査を行い結果を確認した後、\'Apply\'をクリックします。'
        }},
        {img:cmImg('J','nbga',128),tx:{
          vi:'Nhấn Start để chạy kiểm tra; thông báo "Inspection Complete" hiện ra khi hoàn tất.',
          en:'Click Start to run the inspection; an "Inspection Complete" message appears once it finishes.',
          ko:'\'Start\'를 클릭해 검사를 진행하며, 완료되면 \'Inspection Complete\' 메시지가 표시됩니다.',
          zhCN:'点击\'Start\'进行检测,完成后会显示\'Inspection Complete\'讯息。',
          zhTW:'點擊\'Start\'進行檢測,完成後會顯示\'Inspection Complete\'訊息。',
          ja:'\'Start\'をクリックして検査を進め、完了すると\'Inspection Complete\'メッセージが表示されます。'
        }},
        {img:cmImg('J','nbga',129),tx:{
          vi:'Báo cáo Barcode — file kết quả lưu tại This PC ▸ Local Disk (D:) ▸ S_REPORT ▸ Date ▸ Manual. Barcode trên mọi sản phẩm đều phải được kiểm tra.',
          en:'Barcode report — the result file is saved under This PC ▸ Local Disk (D:) ▸ S_REPORT ▸ Date ▸ Manual. Barcodes on all products must be inspected.',
          ko:'Barcode Report — 결과 파일은 This PC ▸ Local Disk(D:) ▸ S_REPORT ▸ Date ▸ Manual 경로에 저장됩니다. 모든 Product의 Barcode를 검사해야 합니다.',
          zhCN:'Barcode Report——结果文件保存于This PC ▸ Local Disk(D:) ▸ S_REPORT ▸ Date ▸ Manual路径。须对所有Product的Barcode进行检测。',
          zhTW:'Barcode Report——結果檔案儲存於This PC ▸ Local Disk(D:) ▸ S_REPORT ▸ Date ▸ Manual路徑。須對所有Product的Barcode進行檢測。',
          ja:'Barcode Report——結果ファイルはThis PC ▸ Local Disk(D:) ▸ S_REPORT ▸ Date ▸ Manualのパスに保存されます。すべてのProductのBarcodeを検査する必要があります。'
        }},
        {img:cmImg('J','nbga',130),tx:{
          vi:'Product Verification Progress — phần này đề cập đến Jig Table Flatness, Illumination Uniformity, 2D ID (Barcode/OCR), Dry Run, MTBI, Accuracy, Repeatability, Reproducibility, Correlation, và Takt Time.',
          en:'Product Verification Progress — this section covers Jig Table Flatness, Illumination Uniformity, 2D ID (Barcode/OCR), Dry Run, MTBI, Accuracy, Repeatability, Reproducibility, Correlation, and Takt Time.',
          ko:'Product Verification Progress — Jig Table Flatness, Illumination Uniformity, 2D ID(Barcode/OCR), Dry Run, MTBI, Accuracy, Repeatability, Reproducibility, Correlation, Takt Time를 다룹니다.',
          zhCN:'Product Verification Progress——本节介绍Jig Table Flatness、Illumination Uniformity、2D ID(Barcode/OCR)、Dry Run、MTBI、Accuracy、Repeatability、Reproducibility、Correlation、Takt Time。',
          zhTW:'Product Verification Progress——本節介紹Jig Table Flatness、Illumination Uniformity、2D ID(Barcode/OCR)、Dry Run、MTBI、Accuracy、Repeatability、Reproducibility、Correlation、Takt Time。',
          ja:'Product Verification Progress——本節ではJig Table Flatness、Illumination Uniformity、2D ID(Barcode/OCR)、Dry Run、MTBI、Accuracy、Repeatability、Reproducibility、Correlation、Takt Timeを扱います。'
        }},
        {img:cmImg('J','nbga',131),tx:{
          vi:'2.2.4. Dry Run — di chuyển phần cứng mà không thực hiện kiểm tra thực tế. Tray Available Run Mode dùng Sensor kiểm tra; Probe Available Run Mode dùng hệ quang học.',
          en:'2.2.4. Dry Run — moves the hardware without performing an actual inspection. Tray Available Run Mode uses the check sensor; Probe Available Run Mode uses the optical system.',
          ko:'2.2.4. Dry Run — 실제 검사는 하지 않고 하드웨어만 동작시킵니다. Tray Available Run Mode는 Check Sensor를 사용하고, Probe Available Run Mode는 광학계를 사용합니다.',
          zhCN:'2.2.4. Dry Run——不进行实际检测,仅使硬件动作。Tray Available Run Mode使用Check Sensor,Probe Available Run Mode使用光学系统。',
          zhTW:'2.2.4. Dry Run——不進行實際檢測,僅使硬體動作。Tray Available Run Mode使用Check Sensor,Probe Available Run Mode使用光學系統。',
          ja:'2.2.4. Dry Run——実際の検査は行わずハードウェアのみ動作させます。Tray Available Run ModeはCheck Sensorを使用し、Probe Available Run Modeは光学系を使用します。'
        }},
        {img:cmImg('J','nbga',132),tx:{
          vi:'Sau khi hoàn tất thiết lập System Option, quay lại màn hình chính và nhấn Lot Start.',
          en:'Once the System Option settings are complete, return to the main screen and click Lot Start.',
          ko:'System Option 설정이 완료되면 Main 화면으로 돌아가 \'Lot Start\'를 클릭합니다.',
          zhCN:'System Option设置完成后返回Main画面,点击\'Lot Start\'。',
          zhTW:'System Option設定完成後返回Main畫面,點擊\'Lot Start\'。',
          ja:'System Optionの設定が完了したらMain画面に戻り、\'Lot Start\'をクリックします。'
        }},
        {img:cmImg('J','nbga',133),tx:{
          vi:'Không được xảy ra cảnh báo trong hơn 36 giờ chạy liên tục. File Log lưu tại This PC ▸ Local Disk (D:) ▸ Log ▸ Mars ▸ Date.',
          en:'No alarm should occur over more than 36 hours of continuous run. The log file is saved under This PC ▸ Local Disk (D:) ▸ Log ▸ Mars ▸ Date.',
          ko:'36시간 이상 연속 운전 동안 알람이 발생하지 않아야 합니다. Log 파일은 This PC ▸ Local Disk(D:) ▸ Log ▸ Mars ▸ Date 경로에 저장됩니다.',
          zhCN:'连续运转36小时以上不应发生警报。Log文件保存于This PC ▸ Local Disk(D:) ▸ Log ▸ Mars ▸ Date路径。',
          zhTW:'連續運轉36小時以上不應發生警報。Log檔案儲存於This PC ▸ Local Disk(D:) ▸ Log ▸ Mars ▸ Date路徑。',
          ja:'36時間以上の連続運転中、アラームが発生してはいけません。LogファイルはThis PC ▸ Local Disk(D:) ▸ Log ▸ Mars ▸ Dateのパスに保存されます。'
        }},
        {img:cmImg('J','nbga',134),tx:{
          vi:'Nhấn Stop, sau đó nhấn Lot Cancel, để dừng Dry Run.',
          en:'Click Stop, then click Lot Cancel, to halt the Dry Run.',
          ko:'\'Stop\'을 클릭한 뒤 \'Lot Cancel\'을 클릭하면 Dry Run을 중지할 수 있습니다.',
          zhCN:'点击\'Stop\'后再点击\'Lot Cancel\',即可中止Dry Run。',
          zhTW:'點擊\'Stop\'後再點擊\'Lot Cancel\',即可中止Dry Run。',
          ja:'\'Stop\'をクリックした後\'Lot Cancel\'をクリックするとDry Runを中止できます。'
        }},
        {img:cmImg('J','nbga',135),tx:{
          vi:'Product Verification Progress — phần này đề cập đến Jig Table Flatness, Illumination Uniformity, 2D ID (Barcode/OCR), Dry Run, MTBI, Accuracy, Repeatability, Reproducibility, Correlation, và Takt Time.',
          en:'Product Verification Progress — this section covers Jig Table Flatness, Illumination Uniformity, 2D ID (Barcode/OCR), Dry Run, MTBI, Accuracy, Repeatability, Reproducibility, Correlation, and Takt Time.',
          ko:'Product Verification Progress — Jig Table Flatness, Illumination Uniformity, 2D ID(Barcode/OCR), Dry Run, MTBI, Accuracy, Repeatability, Reproducibility, Correlation, Takt Time를 다룹니다.',
          zhCN:'Product Verification Progress——本节介绍Jig Table Flatness、Illumination Uniformity、2D ID(Barcode/OCR)、Dry Run、MTBI、Accuracy、Repeatability、Reproducibility、Correlation、Takt Time。',
          zhTW:'Product Verification Progress——本節介紹Jig Table Flatness、Illumination Uniformity、2D ID(Barcode/OCR)、Dry Run、MTBI、Accuracy、Repeatability、Reproducibility、Correlation、Takt Time。',
          ja:'Product Verification Progress——本節ではJig Table Flatness、Illumination Uniformity、2D ID(Barcode/OCR)、Dry Run、MTBI、Accuracy、Repeatability、Reproducibility、Correlation、Takt Timeを扱います。'
        }},
        {img:cmImg('J','nbga',136),tx:{
          vi:'2.2.5. MTBI = Mean Time Between Interrupt. Tray Available Run Mode dùng Sensor kiểm tra; Probe Available Run Mode dùng hệ quang học.',
          en:'2.2.5. MTBI = Mean Time Between Interrupt. Tray Available Run Mode uses the check sensor; Probe Available Run Mode uses the optical system.',
          ko:'2.2.5. MTBI = Mean Time Between Interrupt. Tray Available Run Mode는 Check Sensor를 사용하고, Probe Available Run Mode는 광학계를 사용합니다.',
          zhCN:'2.2.5. MTBI = Mean Time Between Interrupt。Tray Available Run Mode使用Check Sensor,Probe Available Run Mode使用光学系统。',
          zhTW:'2.2.5. MTBI = Mean Time Between Interrupt。Tray Available Run Mode使用Check Sensor,Probe Available Run Mode使用光學系統。',
          ja:'2.2.5. MTBI = Mean Time Between Interrupt。Tray Available Run ModeはCheck Sensorを使用し、Probe Available Run Modeは光学系を使用します。'
        }},
        {img:cmImg('J','nbga',137),tx:{
          vi:'Thiết lập MTBI được kiểm tra từ màn hình Main của chương trình Host theo cùng cách. (Cùng khái niệm MTBI như trước.)',
          en:'MTBI setup is checked from the Host program\'s Main screen the same way. (Same MTBI concept as before.)',
          ko:'MTBI 설정은 Host Program의 Main 화면에서도 동일하게 확인할 수 있습니다. (앞선 MTBI 개념과 동일)',
          zhCN:'MTBI设置也可在Host Program的Main画面以相同方式确认。(与前述MTBI概念相同)',
          zhTW:'MTBI設定也可在Host Program的Main畫面以相同方式確認。(與前述MTBI概念相同)',
          ja:'MTBI設定はHost ProgramのMain画面でも同様に確認できます。(前述のMTBI概念と同じ)'
        }},
        {img:cmImg('J','nbga',138),tx:{
          vi:'Thời gian chạy phải ít nhất 1 giờ. File Log lưu tại D:\\Log\\Mars\\Date, và Log Jam tại D:\\Log\\Log\\Jam_date. Log phải không có lịch sử cảnh báo.',
          en:'The run must last at least 1 hour. The log file is saved under D:\\Log\\Mars\\Date, and the jam log under D:\\Log\\Log\\Jam_date. The log must show no alarm history.',
          ko:'Run Time은 최소 1시간 이상이어야 합니다. Log 파일은 D:\\Log\\Mars\\Date, Jam Log는 D:\\Log\\Log\\Jam_date 경로에 저장됩니다. Log에 알람 이력이 없어야 합니다.',
          zhCN:'Run Time须至少1小时以上。Log文件保存于D:\\Log\\Mars\\Date,Jam Log保存于D:\\Log\\Log\\Jam_date路径。Log中不得有警报纪录。',
          zhTW:'Run Time須至少1小時以上。Log檔案儲存於D:\\Log\\Mars\\Date,Jam Log儲存於D:\\Log\\Log\\Jam_date路徑。Log中不得有警報紀錄。',
          ja:'Run Timeは最低1時間以上である必要があります。LogファイルはD:\\Log\\Mars\\Date、Jam LogはD:\\Log\\Log\\Jam_dateのパスに保存されます。Logにアラーム履歴があってはいけません。'
        }},
        {img:cmImg('J','nbga',139),tx:{
          vi:'Product Verification Progress — phần này đề cập đến Jig Table Flatness, Illumination Uniformity, 2D ID (Barcode/OCR), Dry Run, MTBI, Accuracy, Repeatability, Reproducibility, Correlation, và Takt Time.',
          en:'Product Verification Progress — this section covers Jig Table Flatness, Illumination Uniformity, 2D ID (Barcode/OCR), Dry Run, MTBI, Accuracy, Repeatability, Reproducibility, Correlation, and Takt Time.',
          ko:'Product Verification Progress — Jig Table Flatness, Illumination Uniformity, 2D ID(Barcode/OCR), Dry Run, MTBI, Accuracy, Repeatability, Reproducibility, Correlation, Takt Time를 다룹니다.',
          zhCN:'Product Verification Progress——本节介绍Jig Table Flatness、Illumination Uniformity、2D ID(Barcode/OCR)、Dry Run、MTBI、Accuracy、Repeatability、Reproducibility、Correlation、Takt Time。',
          zhTW:'Product Verification Progress——本節介紹Jig Table Flatness、Illumination Uniformity、2D ID(Barcode/OCR)、Dry Run、MTBI、Accuracy、Repeatability、Reproducibility、Correlation、Takt Time。',
          ja:'Product Verification Progress——本節ではJig Table Flatness、Illumination Uniformity、2D ID(Barcode/OCR)、Dry Run、MTBI、Accuracy、Repeatability、Reproducibility、Correlation、Takt Timeを扱います。'
        }},
        {img:cmImg('J','nbga',140),tx:{
          vi:'2.2.6. Accuracy: nhấn Job Open trên màn hình chính chương trình Host và chọn \'LTS\'. Nếu chưa có Job LTS, tạo mới qua Save As (cần vì một số Parameter phải thay đổi để tiến hành LTS).',
          en:'2.2.6. Accuracy: click Job Open in the Host program\'s main window and select \'LTS\'. If no LTS job exists, create one via Save As (needed because certain parameters must be changed to proceed with LTS).',
          ko:'2.2.6. Accuracy: Host Program 메인 화면에서 Job Open을 클릭하고 \'LTS\'를 선택합니다. 기존 LTS Job이 없다면 Save As로 새로 만듭니다(LTS 진행을 위해 일부 Parameter 변경 필요).',
          zhCN:'2.2.6. Accuracy:在Host Program主画面点击Job Open并选择\'LTS\'。若尚无既有的LTS Job,可透过Save As新建(因进行LTS需变更部分参数)。',
          zhTW:'2.2.6. Accuracy:在Host Program主畫面點擊Job Open並選擇\'LTS\'。若尚無既有的LTS Job,可透過Save As新建(因進行LTS需變更部分參數)。',
          ja:'2.2.6. Accuracy:Host Programのメイン画面でJob Openをクリックし\'LTS\'を選択します。既存のLTS Jobがない場合はSave Asで新規作成します(LTSを進めるため一部Parameterの変更が必要)。'
        }},
        {img:cmImg('J','nbga',141),tx:{
          vi:'Đo từng chiều cao riêng lẻ của Height Target (10µm, 30µm, 50µm) trong Block LTS của Jig 30 lần mỗi loại: di chuyển đến Step Height Target Pos trong khi xem ảnh Live, di chuyển Z đến In-Focus, Single-Track để tìm tâm Focus, và kiểm tra Fringe.',
          en:'Measure each individual height of the Height Target (10µm, 30µm, 50µm) in the Jig\'s LTS block 30 times each: move to the Step Height Target Pos while watching the live image, move Z to In-Focus, Single-Track to find the focus center, and check for the Fringe.',
          ko:'Jig LTS Block의 \'Height Target\' 개별 높이(10um, 30um, 50um)를 각각 30회 측정합니다: Live 화면을 보며 Step Height Target Pos로 이동, Z를 In Focus로 이동 후 Single Tracking으로 초점 중심을 찾고 Fringe를 확인합니다.',
          zhCN:'对Jig LTS Block中\'Height Target\'的各个高度(10um、30um、50um)分别测量30次:观看Live画面移动至Step Height Target Pos,将Z移至In Focus后以Single Tracking寻找对焦中心并确认Fringe。',
          zhTW:'對Jig LTS Block中\'Height Target\'的各個高度(10um、30um、50um)分別測量30次:觀看Live畫面移動至Step Height Target Pos,將Z移至In Focus後以Single Tracking尋找對焦中心並確認Fringe。',
          ja:'Jig LTS Blockの\'Height Target\'の各高さ(10um、30um、50um)をそれぞれ30回測定します:Live画面を見ながらStep Height Target Posへ移動、ZをIn Focusへ移動後Single Trackingで焦点中心を探しFringeを確認します。'
        }},
        {img:cmImg('J','nbga',142),tx:{
          vi:'Mở Illum Control và xác nhận \'UseMultiZMap\' là TRUE (đổi từ FALSE nếu cần). Chọn \'3D_Img1\' và đặt Intensity 4–5 sao cho Fringe hiện rõ ở Height Target — Fringe KHÔNG được xuất hiện ở Start Pos, nhưng PHẢI xuất hiện ở Fringe Pos. Lưu và đóng khi hoàn tất.',
          en:'Open Illum Control and confirm \'UseMultiZMap\' is TRUE (change it from FALSE if needed). Select \'3D_Img1\' and set Intensity to 4–5 so the fringe is clearly visible in the Height Target — it should NOT appear at the Start Pos, but SHOULD appear at the Fringe Pos. Save and close when done.',
          ko:'Illum Control을 열어 \'UseMultiZMap\'이 TRUE인지 확인합니다(FALSE면 TRUE로 변경). \'3D_Img1\'을 선택하고 Height Target에서 Fringe가 선명히 보이도록 Intensity를 4~5로 설정합니다 — Start Pos.에서는 보이지 않아야 하고 Fringe Pos.에서는 보여야 합니다. 설정 완료 후 저장하고 닫습니다.',
          zhCN:'打开Illum Control确认\'UseMultiZMap\'为TRUE(若为FALSE则改为TRUE)。选择\'3D_Img1\',将Intensity设为4~5,使Fringe在Height Target中清晰可见——Start Pos.不应出现,Fringe Pos.应出现。设置完成后保存并关闭。',
          zhTW:'開啟Illum Control確認\'UseMultiZMap\'為TRUE(若為FALSE則改為TRUE)。選擇\'3D_Img1\',將Intensity設為4~5,使Fringe在Height Target中清晰可見——Start Pos.不應出現,Fringe Pos.應出現。設定完成後儲存並關閉。',
          ja:'Illum Controlを開き\'UseMultiZMap\'がTRUEか確認します(FALSEならTRUEに変更)。\'3D_Img1\'を選択し、Height TargetでFringeがはっきり見えるようIntensityを4~5に設定します——Start Pos.では見えず、Fringe Pos.では見える必要があります。設定完了後保存して閉じます。'
        }},
        {img:cmImg('J','nbga',143),tx:{
          vi:'Chọn \'3D LTS Target\' từ menu dưới cùng của chương trình Vision để mở cửa sổ thiết lập.',
          en:'Select \'3D LTS Target\' from the vision program\'s bottom menu to open its settings window.',
          ko:'Vision Program 하단 메뉴에서 \'3D LTS Target\'을 선택해 설정 창을 엽니다.',
          zhCN:'在Vision Program下方菜单选择\'3D LTS Target\'以打开设置窗口。',
          zhTW:'在Vision Program下方選單選擇\'3D LTS Target\'以開啟設定視窗。',
          ja:'Vision Programの下部メニューで\'3D LTS Target\'を選択し設定ウィンドウを開きます。'
        }},
        {img:cmImg('J','nbga',144),tx:{
          vi:'Đặt ROI lấy tâm ở mỗi Step Height, cộng thêm một ROI ở mặt phẳng SR xung quanh, như hình (ROI đỏ = Height Target, ROI xanh = SR xung quanh). Sau khi đặt xong, nhấn ROI Apply để lưu vị trí.',
          en:'Set a ROI centered on each Step Height, plus one on the surrounding SR plane, as shown (red ROI = Height Target, green ROI = surrounding SR). Once set, click ROI Apply to save the positions.',
          ko:'그림처럼 각 Step Height 중심에 ROI를, 주변 SR 평면에도 ROI를 설정합니다(빨간 ROI=Height Target, 초록 ROI=주변 SR). 설정 완료 후 \'ROI Apply\'를 클릭해 위치를 저장합니다.',
          zhCN:'如图在各Step Height中心设置ROI,并在周围SR平面也设置ROI(红色ROI=Height Target,绿色ROI=周围SR)。设置完成后点击\'ROI Apply\'保存位置。',
          zhTW:'如圖在各Step Height中心設定ROI,並在周圍SR平面也設定ROI(紅色ROI=Height Target,綠色ROI=周圍SR)。設定完成後點擊\'ROI Apply\'儲存位置。',
          ja:'図のように各Step Heightの中心にROIを、周囲のSR平面にもROIを設定します(赤ROI=Height Target、緑ROI=周囲SR)。設定完了後\'ROI Apply\'をクリックし位置を保存します。'
        }},
        {img:cmImg('J','nbga',145),tx:{
          vi:'Nhấn Inspect để chạy kiểm tra và xem kết quả như hình.',
          en:'Click Inspect to run the inspection and check the results as shown.',
          ko:'\'Inspect\' 버튼을 클릭해 검사를 진행하고 결과를 확인합니다.',
          zhCN:'点击\'Inspect\'按钮进行检测并确认结果。',
          zhTW:'點擊\'Inspect\'按鈕進行檢測並確認結果。',
          ja:'\'Inspect\'ボタンをクリックして検査を行い、結果を確認します。'
        }},
        {img:cmImg('J','nbga',146),tx:{
          vi:'Sau khi kiểm tra kết quả, đóng cửa sổ thiết lập và lưu Job File.',
          en:'After checking the result, close the settings window and save the Job File.',
          ko:'결과 확인 후, 설정 창을 닫고 Job File을 저장합니다.',
          zhCN:'确认结果后,关闭设置窗口并保存Job File。',
          zhTW:'確認結果後,關閉設定視窗並儲存Job File。',
          ja:'結果確認後、設定ウィンドウを閉じJob Fileを保存します。'
        }},
        {img:cmImg('J','nbga',147),tx:{
          vi:'Nhấn Tray LTS để mở cửa sổ LTS. Tích checkbox \'Step Height\', đặt giá trị Reference V1 & V2 cho mỗi Step Height (10, 30, 50), và nhập Repeat Count.',
          en:'Press Tray LTS to open the LTS window. Check the \'Step Height\' checkbox, set the V1 & V2 Reference value for each Step Height (10, 30, 50), and enter the Repeat Count.',
          ko:'\'Tray LTS\'를 눌러 LTS 창을 엽니다. \'Step Height\' 체크박스를 선택하고, 각 Step Height(10, 30, 50)별 V1 & V2 Reference 값을 설정한 뒤 Repeat Count를 입력합니다.',
          zhCN:'按下\'Tray LTS\'打开LTS窗口。勾选\'Step Height\'复选框,设置各Step Height(10、30、50)的V1 & V2 Reference值后输入Repeat Count。',
          zhTW:'按下\'Tray LTS\'開啟LTS視窗。勾選\'Step Height\'核取方塊,設定各Step Height(10、30、50)的V1 & V2 Reference值後輸入Repeat Count。',
          ja:'\'Tray LTS\'を押しLTSウィンドウを開きます。\'Step Height\'チェックボックスを選択し、各Step Height(10、30、50)ごとのV1 & V2 Reference値を設定した後Repeat Countを入力します。'
        }},
        {img:cmImg('J','nbga',148),tx:{
          vi:'Dùng giá trị chứng chỉ hiệu chuẩn của mỗi Step Height làm chuẩn tham chiếu (V1 và V2 khác nhau vì áp dụng cho các Height Target khác nhau). Nhập giá trị đo đã chứng nhận làm chuẩn và hoàn tất thiết lập.',
          en:'Use each Step Height\'s calibration-certificate value as its reference standard (V1 and V2 differ because they apply to different Height Targets). Enter the certified measurement values as the standard and complete the setup.',
          ko:'각 Step Height의 표준값은 기관 검증을 통해 발급받은 인증서 값을 사용합니다(V1과 V2는 서로 다른 Height Target을 적용하므로 값이 다름). 인증서의 측정값을 표준값으로 입력해 설정을 완료합니다.',
          zhCN:'各Step Height的标准值使用经机构验证核发的证书数值(V1与V2因套用不同的Height Target而数值不同)。请输入证书上的测量值作为标准值以完成设置。',
          zhTW:'各Step Height的標準值使用經機構驗證核發的證書數值(V1與V2因套用不同的Height Target而數值不同)。請輸入證書上的測量值作為標準值以完成設定。',
          ja:'各Step Heightの標準値は機関の検証を経て発行された証明書の値を使用します(V1とV2は適用するHeight Targetが異なるため値も異なります)。証明書の測定値を標準値として入力し設定を完了します。'
        }},
        {img:cmImg('J','nbga',149),tx:{
          vi:'Nhấn Start để chạy kiểm tra; khi hoàn tất, một loạt thông báo hiện ra và kiểm tra kết thúc. File kết quả lưu tại This PC ▸ Local Disk (D:) ▸ LTS ▸ Date.',
          en:'Click Start to run the inspection; upon completion, a sequence of messages appears and the inspection ends. The result file is saved under This PC ▸ Local Disk (D:) ▸ LTS ▸ Date.',
          ko:'\'Start\'를 클릭해 검사를 진행하며, 완료되면 순서대로 메시지가 표시되고 검사가 종료됩니다. 결과 파일은 This PC ▸ Local Disk(D:) ▸ LTS ▸ Date 경로에 저장됩니다.',
          zhCN:'点击\'Start\'进行检测,完成后会依序显示讯息并结束检测。结果文件保存于This PC ▸ Local Disk(D:) ▸ LTS ▸ Date路径。',
          zhTW:'點擊\'Start\'進行檢測,完成後會依序顯示訊息並結束檢測。結果檔案儲存於This PC ▸ Local Disk(D:) ▸ LTS ▸ Date路徑。',
          ja:'\'Start\'をクリックして検査を進め、完了すると順にメッセージが表示され検査が終了します。結果ファイルはThis PC ▸ Local Disk(D:) ▸ LTS ▸ Dateのパスに保存されます。'
        }},
        {img:cmImg('J','nbga',150),tx:{
          vi:'Báo cáo Step Height — kết quả đọc là PASS nếu dưới 1µm, hoặc REJECT nếu từ 1µm trở lên (thể hiện cho cả V1 và V2).',
          en:'Step Height report — the result reads PASS if under 1µm, or REJECT if 1µm or more (shown for both V1 and V2).',
          ko:'Step Height Report — 결과값이 1um 미만이면 \'PASS\', 1um 이상이면 \'REJECT\'로 기록됩니다(V1, V2 모두 동일하게 판정).',
          zhCN:'Step Height Report——结果值若低于1um则记录为\'PASS\',达到或超过1um则记录为\'REJECT\'(V1、V2均同样判定)。',
          zhTW:'Step Height Report——結果值若低於1um則記錄為\'PASS\',達到或超過1um則記錄為\'REJECT\'(V1、V2均同樣判定)。',
          ja:'Step Height Report——結果値が1um未満なら\'PASS\'、1um以上なら\'REJECT\'として記録されます(V1、V2とも同様に判定)。'
        }},
        {img:cmImg('J','nbga',151),tx:{
          vi:'Product Verification Progress — phần này đề cập đến Jig Table Flatness, Illumination Uniformity, 2D ID (Barcode/OCR), Dry Run, MTBI, Accuracy, Repeatability, Reproducibility, Correlation, và Takt Time.',
          en:'Product Verification Progress — this section covers Jig Table Flatness, Illumination Uniformity, 2D ID (Barcode/OCR), Dry Run, MTBI, Accuracy, Repeatability, Reproducibility, Correlation, and Takt Time.',
          ko:'Product Verification Progress — Jig Table Flatness, Illumination Uniformity, 2D ID(Barcode/OCR), Dry Run, MTBI, Accuracy, Repeatability, Reproducibility, Correlation, Takt Time를 다룹니다.',
          zhCN:'Product Verification Progress——本节介绍Jig Table Flatness、Illumination Uniformity、2D ID(Barcode/OCR)、Dry Run、MTBI、Accuracy、Repeatability、Reproducibility、Correlation、Takt Time。',
          zhTW:'Product Verification Progress——本節介紹Jig Table Flatness、Illumination Uniformity、2D ID(Barcode/OCR)、Dry Run、MTBI、Accuracy、Repeatability、Reproducibility、Correlation、Takt Time。',
          ja:'Product Verification Progress——本節ではJig Table Flatness、Illumination Uniformity、2D ID(Barcode/OCR)、Dry Run、MTBI、Accuracy、Repeatability、Reproducibility、Correlation、Takt Timeを扱います。'
        }},
        {img:cmImg('J','nbga',152),tx:{
          vi:'2.2.7. Repeatability – 3D: chọn Job của sản phẩm cần kiểm tra (sản phẩm AMD được dùng làm ví dụ). Kiểm tra cả Pocket ở cạnh Tray bị cong vênh nặng và Pocket ở giữa Tray.',
          en:'2.2.7. Repeatability – 3D: choose the Job for the product under test (the AMD product is used as the example). Inspect both a severely-warped tray-edge pocket and a pocket at the tray\'s center.',
          ko:'2.2.7. Repeatability – 3D: 검사할 Product의 Job을 선택합니다(예시로 AMD Product 사용). Tray 가장자리 중 변형이 심한 부분과 Tray 중앙의 Product를 검사합니다.',
          zhCN:'2.2.7. Repeatability – 3D:选择要检测的Product的Job(以AMD Product为例)。检测Tray边缘中变形严重的部位及Tray中央的Product。',
          zhTW:'2.2.7. Repeatability – 3D:選擇要檢測的Product的Job(以AMD Product為例)。檢測Tray邊緣中變形嚴重的部位及Tray中央的Product。',
          ja:'2.2.7. Repeatability – 3D:検査するProductのJobを選択します(例としてAMD Productを使用)。Tray端の中で変形が激しい部分とTray中央のProductを検査します。'
        }},
        {img:cmImg('J','nbga',153),tx:{
          vi:'Manual ▸ 3D Vision ▸ Inspection Mode ▸ Multi Pocket (chọn Pocket cần kiểm tra) ▸ Static ▸ Option ▸ Repeat Count = 30 ▸ Start. Thông báo "Inspection Complete" hiện ra khi hoàn tất; kết quả lưu tại This PC ▸ Local Disk (D:) ▸ S_REPORT ▸ Date ▸ Manual.',
          en:'Manual ▸ 3D Vision ▸ Inspection Mode ▸ Multi Pocket (select the pockets to inspect) ▸ Static ▸ Option ▸ Repeat Count = 30 ▸ Start. An "Inspection Complete" message appears when it finishes; the result is saved under This PC ▸ Local Disk (D:) ▸ S_REPORT ▸ Date ▸ Manual.',
          ko:'Manual ▸ 3D Vision ▸ Inspection Mode ▸ Multi Pocket(검사할 Pocket 선택) ▸ Static ▸ Option ▸ Repeat Count \'30\' ▸ Start. 완료되면 \'Inspection Complete\' 메시지가 표시되고, 결과 파일은 This PC ▸ Local Disk(D:) ▸ S_REPORT ▸ Date ▸ Manual 경로에 저장됩니다.',
          zhCN:'Manual ▸ 3D Vision ▸ Inspection Mode ▸ Multi Pocket(选择要检测的Pocket) ▸ Static ▸ Option ▸ Repeat Count\'30\' ▸ Start。完成后会显示\'Inspection Complete\'讯息,结果文件保存于This PC ▸ Local Disk(D:) ▸ S_REPORT ▸ Date ▸ Manual路径。',
          zhTW:'Manual ▸ 3D Vision ▸ Inspection Mode ▸ Multi Pocket(選擇要檢測的Pocket) ▸ Static ▸ Option ▸ Repeat Count\'30\' ▸ Start。完成後會顯示\'Inspection Complete\'訊息,結果檔案儲存於This PC ▸ Local Disk(D:) ▸ S_REPORT ▸ Date ▸ Manual路徑。',
          ja:'Manual ▸ 3D Vision ▸ Inspection Mode ▸ Multi Pocket(検査するPocketを選択) ▸ Static ▸ Option ▸ Repeat Count\'30\' ▸ Start。完了すると\'Inspection Complete\'メッセージが表示され、結果ファイルはThis PC ▸ Local Disk(D:) ▸ S_REPORT ▸ Date ▸ Manualのパスに保存されます。'
        }},
        {img:cmImg('J','nbga',154),tx:{
          vi:'Báo cáo Pocket 1 Bump Height — 3Sigma = 3×stdev①, 3Sigma-of-3Sigma = 3×stdev②, Average = trung bình②, Score = 3Sigma-of-3Sigma + Average; tỷ lệ PT = 6×stdev①/20×100, PT MAX = tỷ lệ PT lớn nhất. Spec: Score ≤ 1, PT MAX ≤ 20. (Lưu ý: công thức tỷ lệ PT có thể khác nhau tùy khách hàng.)',
          en:'Pocket 1 Bump Height report — 3Sigma = 3×stdev①, 3Sigma-of-3Sigma = 3×stdev②, Average = average②, Score = 3Sigma-of-3Sigma + Average; PT ratio = 6×stdev①/20×100, PT MAX = the maximum PT ratio. Spec: Score ≤ 1, PT MAX ≤ 20. (Note: the PT ratio formula may vary by customer.)',
          ko:'Pocket 1 Bump Height Report — 3Sigma=3*stdev①, 3Sigma of 3Sigma=3*stdev②, Average=average②, Score=3Sigma of 3Sigma+Average; PT ratio=6*stdev①/20*100, PT MAX=PT ratio 중 최댓값. Spec: Score 1 이하, PT MAX 20 이하. (※ PT ratio 계산 방식은 고객사마다 다를 수 있음)',
          zhCN:'Pocket 1 Bump Height Report——3Sigma=3*stdev①,3Sigma of 3Sigma=3*stdev②,Average=average②,Score=3Sigma of 3Sigma+Average;PT ratio=6*stdev①/20*100,PT MAX=PT ratio中的最大值。规格:Score需1以下,PT MAX需20以下。(※PT ratio计算方式依客户而异)',
          zhTW:'Pocket 1 Bump Height Report——3Sigma=3*stdev①,3Sigma of 3Sigma=3*stdev②,Average=average②,Score=3Sigma of 3Sigma+Average;PT ratio=6*stdev①/20*100,PT MAX=PT ratio中的最大值。規格:Score需1以下,PT MAX需20以下。(※PT ratio計算方式依客戶而異)',
          ja:'Pocket 1 Bump Height Report——3Sigma=3*stdev①、3Sigma of 3Sigma=3*stdev②、Average=average②、Score=3Sigma of 3Sigma+Average;PT ratio=6*stdev①/20*100、PT MAX=PT ratioの最大値。Spec:Score 1以下、PT MAX 20以下。(※PT ratioの計算方式は顧客により異なる場合があります)'
        }},
        {img:cmImg('J','nbga',155),tx:{
          vi:'2.2.7. Repeatability – 2D: cùng cách chọn Job (sản phẩm AMD; Pocket cạnh bị cong vênh nặng và Pocket giữa).',
          en:'2.2.7. Repeatability – 2D: the same job-selection approach (AMD product; a severely-warped edge pocket and a center pocket).',
          ko:'2.2.7. Repeatability – 2D: 동일한 방식으로 검사할 Product의 Job을 선택합니다(AMD Product, Tray 가장자리 변형 부위와 중앙 Product).',
          zhCN:'2.2.7. Repeatability – 2D:以相同方式选择要检测的Product的Job(AMD Product,Tray边缘变形部位与中央Product)。',
          zhTW:'2.2.7. Repeatability – 2D:以相同方式選擇要檢測的Product的Job(AMD Product,Tray邊緣變形部位與中央Product)。',
          ja:'2.2.7. Repeatability – 2D:同様の方法で検査するProductのJobを選択します(AMD Product、Tray端の変形部位と中央のProduct)。'
        }},
        {img:cmImg('J','nbga',156),tx:{
          vi:'Cùng quy trình: Manual ▸ 3D Vision ▸ Inspection Mode ▸ Multi Pocket ▸ Static ▸ Option ▸ Repeat Count = 30 ▸ Start; kết quả lưu tại This PC ▸ Local Disk (D:) ▸ S_REPORT ▸ Date ▸ Manual.',
          en:'Same flow: Manual ▸ 3D Vision ▸ Inspection Mode ▸ Multi Pocket ▸ Static ▸ Option ▸ Repeat Count = 30 ▸ Start; result saved under This PC ▸ Local Disk (D:) ▸ S_REPORT ▸ Date ▸ Manual.',
          ko:'동일한 흐름: Manual ▸ 3D Vision ▸ Inspection Mode ▸ Multi Pocket ▸ Static ▸ Option ▸ Repeat Count \'30\' ▸ Start; 결과는 This PC ▸ Local Disk(D:) ▸ S_REPORT ▸ Date ▸ Manual 경로에 저장됩니다.',
          zhCN:'相同流程:Manual ▸ 3D Vision ▸ Inspection Mode ▸ Multi Pocket ▸ Static ▸ Option ▸ Repeat Count\'30\' ▸ Start;结果保存于This PC ▸ Local Disk(D:) ▸ S_REPORT ▸ Date ▸ Manual路径。',
          zhTW:'相同流程:Manual ▸ 3D Vision ▸ Inspection Mode ▸ Multi Pocket ▸ Static ▸ Option ▸ Repeat Count\'30\' ▸ Start;結果儲存於This PC ▸ Local Disk(D:) ▸ S_REPORT ▸ Date ▸ Manual路徑。',
          ja:'同じ流れ:Manual ▸ 3D Vision ▸ Inspection Mode ▸ Multi Pocket ▸ Static ▸ Option ▸ Repeat Count\'30\' ▸ Start;結果はThis PC ▸ Local Disk(D:) ▸ S_REPORT ▸ Date ▸ Manualのパスに保存されます。'
        }},
        {img:cmImg('J','nbga',157),tx:{
          vi:'Báo cáo Pocket 1 Diameter — tỷ lệ PT = 6×stdev①/60×100, PT MAX = tỷ lệ PT lớn nhất. Spec: Score ≤ 1, PT MAX ≤ 20. (Lưu ý: công thức tỷ lệ PT có thể khác nhau tùy khách hàng.)',
          en:'Pocket 1 Diameter report — PT ratio = 6×stdev①/60×100, PT MAX = the maximum PT ratio. Spec: Score ≤ 1, PT MAX ≤ 20. (Note: the PT ratio formula may vary by customer.)',
          ko:'Pocket 1 Diameter Report — PT ratio=6*stdev①/60*100, PT MAX=PT ratio 중 최댓값. Spec: Score 1 이하, PT MAX 20 이하. (※ PT ratio 계산 방식은 고객사마다 다를 수 있음)',
          zhCN:'Pocket 1 Diameter Report——PT ratio=6*stdev①/60*100,PT MAX=PT ratio中的最大值。规格:Score需1以下,PT MAX需20以下。(※PT ratio计算方式依客户而异)',
          zhTW:'Pocket 1 Diameter Report——PT ratio=6*stdev①/60*100,PT MAX=PT ratio中的最大值。規格:Score需1以下,PT MAX需20以下。(※PT ratio計算方式依客戶而異)',
          ja:'Pocket 1 Diameter Report——PT ratio=6*stdev①/60*100、PT MAX=PT ratioの最大値。Spec:Score 1以下、PT MAX 20以下。(※PT ratioの計算方式は顧客により異なる場合があります)'
        }},
        {img:cmImg('J','nbga',158),tx:{
          vi:'Product Verification Progress — phần này đề cập đến Jig Table Flatness, Illumination Uniformity, 2D ID (Barcode/OCR), Dry Run, MTBI, Accuracy, Repeatability, Reproducibility, Correlation, và Takt Time.',
          en:'Product Verification Progress — this section covers Jig Table Flatness, Illumination Uniformity, 2D ID (Barcode/OCR), Dry Run, MTBI, Accuracy, Repeatability, Reproducibility, Correlation, and Takt Time.',
          ko:'Product Verification Progress — Jig Table Flatness, Illumination Uniformity, 2D ID(Barcode/OCR), Dry Run, MTBI, Accuracy, Repeatability, Reproducibility, Correlation, Takt Time를 다룹니다.',
          zhCN:'Product Verification Progress——本节介绍Jig Table Flatness、Illumination Uniformity、2D ID(Barcode/OCR)、Dry Run、MTBI、Accuracy、Repeatability、Reproducibility、Correlation、Takt Time。',
          zhTW:'Product Verification Progress——本節介紹Jig Table Flatness、Illumination Uniformity、2D ID(Barcode/OCR)、Dry Run、MTBI、Accuracy、Repeatability、Reproducibility、Correlation、Takt Time。',
          ja:'Product Verification Progress——本節ではJig Table Flatness、Illumination Uniformity、2D ID(Barcode/OCR)、Dry Run、MTBI、Accuracy、Repeatability、Reproducibility、Correlation、Takt Timeを扱います。'
        }},
        {img:cmImg('J','nbga',159),tx:{
          vi:'2.2.8. Reproducibility – 3D: cùng cách chọn Job (sản phẩm AMD; Pocket cạnh bị cong vênh nặng và Pocket giữa). Reproducibility được đánh giá từ 6 lần kiểm tra mỗi ngày trong 3 ngày (tổng 18 lần).',
          en:'2.2.8. Reproducibility – 3D: the same job-selection approach (AMD product; a severely-warped edge pocket and a center pocket). Reproducibility is judged from 6 tests per day over 3 days (18 total).',
          ko:'2.2.8. Reproducibility – 3D: 동일한 방식으로 검사할 Product의 Job을 선택합니다(AMD Product, Tray 가장자리 변형 부위와 중앙 Product). Reproducibility는 하루 6회씩 3일간 진행한 결과(총 18회)로 판정합니다.',
          zhCN:'2.2.8. Reproducibility – 3D:以相同方式选择要检测的Product的Job(AMD Product,Tray边缘变形部位与中央Product)。Reproducibility依每天6次、共3天(总计18次)的结果判定。',
          zhTW:'2.2.8. Reproducibility – 3D:以相同方式選擇要檢測的Product的Job(AMD Product,Tray邊緣變形部位與中央Product)。Reproducibility依每天6次、共3天(總計18次)的結果判定。',
          ja:'2.2.8. Reproducibility – 3D:同様の方法で検査するProductのJobを選択します(AMD Product、Tray端の変形部位と中央のProduct)。Reproducibilityは1日6回×3日間(計18回)の結果で判定します。'
        }},
        {img:cmImg('J','nbga',160),tx:{
          vi:'Manual ▸ 3D Vision ▸ Inspection Mode ▸ Multi Pocket ▸ Static ▸ Option ▸ Repeat Count = 6 ▸ Start; thông báo "Inspection Complete" hiện ra khi xong, kết quả lưu tại This PC ▸ Local Disk (D:) ▸ S_REPORT ▸ Date ▸ Manual.',
          en:'Manual ▸ 3D Vision ▸ Inspection Mode ▸ Multi Pocket ▸ Static ▸ Option ▸ Repeat Count = 6 ▸ Start; an "Inspection Complete" message appears when done, with the result saved under This PC ▸ Local Disk (D:) ▸ S_REPORT ▸ Date ▸ Manual.',
          ko:'Manual ▸ 3D Vision ▸ Inspection Mode ▸ Multi Pocket ▸ Static ▸ Option ▸ Repeat Count \'6\' ▸ Start. 완료되면 \'Inspection Complete\' 메시지가 표시되고, 결과는 This PC ▸ Local Disk(D:) ▸ S_REPORT ▸ Date ▸ Manual 경로에 저장됩니다.',
          zhCN:'Manual ▸ 3D Vision ▸ Inspection Mode ▸ Multi Pocket ▸ Static ▸ Option ▸ Repeat Count\'6\' ▸ Start。完成后会显示\'Inspection Complete\'讯息,结果保存于This PC ▸ Local Disk(D:) ▸ S_REPORT ▸ Date ▸ Manual路径。',
          zhTW:'Manual ▸ 3D Vision ▸ Inspection Mode ▸ Multi Pocket ▸ Static ▸ Option ▸ Repeat Count\'6\' ▸ Start。完成後會顯示\'Inspection Complete\'訊息,結果儲存於This PC ▸ Local Disk(D:) ▸ S_REPORT ▸ Date ▸ Manual路徑。',
          ja:'Manual ▸ 3D Vision ▸ Inspection Mode ▸ Multi Pocket ▸ Static ▸ Option ▸ Repeat Count\'6\' ▸ Start。完了すると\'Inspection Complete\'メッセージが表示され、結果はThis PC ▸ Local Disk(D:) ▸ S_REPORT ▸ Date ▸ Manualのパスに保存されます。'
        }},
        {img:cmImg('J','nbga',161),tx:{
          vi:'Báo cáo Reproducibility Pocket 1 Bump Height — cùng công thức như Repeatability (3Sigma, 3Sigma-of-3Sigma, Average, Score), nhưng tỷ lệ PT = 6×stdev①/30×100. Spec: Score ≤ 1, PT MAX ≤ 30.',
          en:'Pocket 1 Bump Height Reproducibility report — same formula as Repeatability (3Sigma, 3Sigma-of-3Sigma, Average, Score), but PT ratio = 6×stdev①/30×100. Spec: Score ≤ 1, PT MAX ≤ 30.',
          ko:'Pocket 1 Bump Height Reproducibility Report — Repeatability와 동일한 계산식(3Sigma, 3Sigma of 3Sigma, Average, Score)을 사용하되, PT ratio=6*stdev①/30*100. Spec: Score 1 이하, PT MAX 30 이하.',
          zhCN:'Pocket 1 Bump Height Reproducibility Report——采用与Repeatability相同的计算式(3Sigma、3Sigma of 3Sigma、Average、Score),但PT ratio=6*stdev①/30*100。规格:Score需1以下,PT MAX需30以下。',
          zhTW:'Pocket 1 Bump Height Reproducibility Report——採用與Repeatability相同的計算式(3Sigma、3Sigma of 3Sigma、Average、Score),但PT ratio=6*stdev①/30*100。規格:Score需1以下,PT MAX需30以下。',
          ja:'Pocket 1 Bump Height Reproducibility Report——Repeatabilityと同じ計算式(3Sigma、3Sigma of 3Sigma、Average、Score)を使用しますが、PT ratio=6*stdev①/30*100です。Spec:Score 1以下、PT MAX 30以下。'
        }},
        {img:cmImg('J','nbga',162),tx:{
          vi:'2.2.8. Reproducibility – 2D: cùng cách chọn Job (sản phẩm AMD; Pocket cạnh bị cong vênh nặng và Pocket giữa).',
          en:'2.2.8. Reproducibility – 2D: the same job-selection approach (AMD product; a severely-warped edge pocket and a center pocket).',
          ko:'2.2.8. Reproducibility – 2D: 동일한 방식으로 검사할 Product의 Job을 선택합니다(AMD Product, Tray 가장자리 변형 부위와 중앙 Product).',
          zhCN:'2.2.8. Reproducibility – 2D:以相同方式选择要检测的Product的Job(AMD Product,Tray边缘变形部位与中央Product)。',
          zhTW:'2.2.8. Reproducibility – 2D:以相同方式選擇要檢測的Product的Job(AMD Product,Tray邊緣變形部位與中央Product)。',
          ja:'2.2.8. Reproducibility – 2D:同様の方法で検査するProductのJobを選択します(AMD Product、Tray端の変形部位と中央のProduct)。'
        }},
        {img:cmImg('J','nbga',163),tx:{
          vi:'Cùng quy trình: Manual ▸ 3D Vision ▸ Inspection Mode ▸ Multi Pocket ▸ Static ▸ Option ▸ Repeat Count = 30 ▸ Start; kết quả lưu tại This PC ▸ Local Disk (D:) ▸ S_REPORT ▸ Date ▸ Manual.',
          en:'Same flow: Manual ▸ 3D Vision ▸ Inspection Mode ▸ Multi Pocket ▸ Static ▸ Option ▸ Repeat Count = 30 ▸ Start; result saved under This PC ▸ Local Disk (D:) ▸ S_REPORT ▸ Date ▸ Manual.',
          ko:'동일한 흐름: Manual ▸ 3D Vision ▸ Inspection Mode ▸ Multi Pocket ▸ Static ▸ Option ▸ Repeat Count \'30\' ▸ Start; 결과는 This PC ▸ Local Disk(D:) ▸ S_REPORT ▸ Date ▸ Manual 경로에 저장됩니다.',
          zhCN:'相同流程:Manual ▸ 3D Vision ▸ Inspection Mode ▸ Multi Pocket ▸ Static ▸ Option ▸ Repeat Count\'30\' ▸ Start;结果保存于This PC ▸ Local Disk(D:) ▸ S_REPORT ▸ Date ▸ Manual路径。',
          zhTW:'相同流程:Manual ▸ 3D Vision ▸ Inspection Mode ▸ Multi Pocket ▸ Static ▸ Option ▸ Repeat Count\'30\' ▸ Start;結果儲存於This PC ▸ Local Disk(D:) ▸ S_REPORT ▸ Date ▸ Manual路徑。',
          ja:'同じ流れ:Manual ▸ 3D Vision ▸ Inspection Mode ▸ Multi Pocket ▸ Static ▸ Option ▸ Repeat Count\'30\' ▸ Start;結果はThis PC ▸ Local Disk(D:) ▸ S_REPORT ▸ Date ▸ Manualのパスに保存されます。'
        }},
        {img:cmImg('J','nbga',164),tx:{
          vi:'Báo cáo Reproducibility Pocket 1 Diameter — tỷ lệ PT = 6×stdev①/60×100. Spec: Score ≤ 1, PT MAX ≤ 30.',
          en:'Pocket 1 Diameter Reproducibility report — PT ratio = 6×stdev①/60×100. Spec: Score ≤ 1, PT MAX ≤ 30.',
          ko:'Pocket 1 Diameter Reproducibility Report — PT ratio=6*stdev①/60*100. Spec: Score 1 이하, PT MAX 30 이하.',
          zhCN:'Pocket 1 Diameter Reproducibility Report——PT ratio=6*stdev①/60*100。规格:Score需1以下,PT MAX需30以下。',
          zhTW:'Pocket 1 Diameter Reproducibility Report——PT ratio=6*stdev①/60*100。規格:Score需1以下,PT MAX需30以下。',
          ja:'Pocket 1 Diameter Reproducibility Report——PT ratio=6*stdev①/60*100。Spec:Score 1以下、PT MAX 30以下。'
        }},
        {img:cmImg('J','nbga',165),tx:{
          vi:'Product Verification Progress — phần này đề cập đến Jig Table Flatness, Illumination Uniformity, 2D ID (Barcode/OCR), Dry Run, MTBI, Accuracy, Repeatability, Reproducibility, Correlation, và Takt Time.',
          en:'Product Verification Progress — this section covers Jig Table Flatness, Illumination Uniformity, 2D ID (Barcode/OCR), Dry Run, MTBI, Accuracy, Repeatability, Reproducibility, Correlation, and Takt Time.',
          ko:'Product Verification Progress — Jig Table Flatness, Illumination Uniformity, 2D ID(Barcode/OCR), Dry Run, MTBI, Accuracy, Repeatability, Reproducibility, Correlation, Takt Time를 다룹니다.',
          zhCN:'Product Verification Progress——本节介绍Jig Table Flatness、Illumination Uniformity、2D ID(Barcode/OCR)、Dry Run、MTBI、Accuracy、Repeatability、Reproducibility、Correlation、Takt Time。',
          zhTW:'Product Verification Progress——本節介紹Jig Table Flatness、Illumination Uniformity、2D ID(Barcode/OCR)、Dry Run、MTBI、Accuracy、Repeatability、Reproducibility、Correlation、Takt Time。',
          ja:'Product Verification Progress——本節ではJig Table Flatness、Illumination Uniformity、2D ID(Barcode/OCR)、Dry Run、MTBI、Accuracy、Repeatability、Reproducibility、Correlation、Takt Timeを扱います。'
        }},
        {img:cmImg('J','nbga',166),tx:{
          vi:'2.2.9. Correlation: vì không có báo cáo riêng cho mục này, dùng chức năng biểu đồ phân tán của Excel thay thế. Khi khách hàng cung cấp kết quả tham chiếu chuẩn cho một sản phẩm, phân tích tương quan được thực hiện so với chuẩn đó (Standard so với 3D V1 / 2D / 3D V2). Spec: giá trị R² ≥ 75%.',
          en:'2.2.9. Correlation: since no dedicated report is generated for this, Excel\'s scatter-plot function is used instead. When the customer provides standard reference results for a product, correlation is analyzed against them (Standard vs. 3D V1 / 2D / 3D V2). Spec: R² value ≥ 75%.',
          ko:'2.2.9. Correlation: 별도의 검사 Report가 생성되지 않으므로 Excel의 산점도(Scatter Plot) 기능을 사용합니다. 고객사가 특정 Product의 표준(Standard) 결과를 제공한 경우, 이를 기준으로 상관관계 분석을 진행합니다(Standard vs. 3D V1 / 2D / 3D V2). Spec: R² 값 75% 이상.',
          zhCN:'2.2.9. Correlation:由于不会生成专门的检测Report,因此使用Excel的散点图(Scatter Plot)功能。若客户提供某Product的标准(Standard)结果,则以此为基准进行相关性分析(Standard vs. 3D V1 / 2D / 3D V2)。规格:R²值须75%以上。',
          zhTW:'2.2.9. Correlation:由於不會產生專門的檢測Report,因此使用Excel的散佈圖(Scatter Plot)功能。若客戶提供某Product的標準(Standard)結果,則以此為基準進行相關性分析(Standard vs. 3D V1 / 2D / 3D V2)。規格:R²值須75%以上。',
          ja:'2.2.9. Correlation:専用の検査Reportが生成されないため、Excelの散布図(Scatter Plot)機能を使用します。顧客が特定ProductのStandard(標準)結果を提供した場合、それを基準に相関分析を行います(Standard vs. 3D V1 / 2D / 3D V2)。Spec:R²値75%以上。'
        }},
        {img:cmImg('J','nbga',167),tx:{
          vi:'Khi không có giá trị Standard, dùng cùng phương pháp biểu đồ phân tán Excel để phân tích tương quan thay thế. Spec: giá trị R² ≥ 95%.',
          en:'When no Standard values are available, the same Excel scatter-plot method is used to run the correlation analysis instead. Spec: R² value ≥ 95%.',
          ko:'Standard 값이 없는 경우에도 동일하게 Excel 산점도 방식으로 상관관계 분석을 진행합니다. Spec: R² 값 95% 이상.',
          zhCN:'即使没有Standard值,也同样以Excel散点图方式进行相关性分析。规格:R²值须95%以上。',
          zhTW:'即使沒有Standard值,也同樣以Excel散佈圖方式進行相關性分析。規格:R²值須95%以上。',
          ja:'Standard値がない場合も同様にExcel散布図方式で相関分析を行います。Spec:R²値95%以上。'
        }},
        {img:cmImg('J','nbga',168),tx:{
          vi:'Product Verification Progress — phần này đề cập đến Jig Table Flatness, Illumination Uniformity, 2D ID (Barcode/OCR), Dry Run, MTBI, Accuracy, Repeatability, Reproducibility, Correlation, và Takt Time.',
          en:'Product Verification Progress — this section covers Jig Table Flatness, Illumination Uniformity, 2D ID (Barcode/OCR), Dry Run, MTBI, Accuracy, Repeatability, Reproducibility, Correlation, and Takt Time.',
          ko:'Product Verification Progress — Jig Table Flatness, Illumination Uniformity, 2D ID(Barcode/OCR), Dry Run, MTBI, Accuracy, Repeatability, Reproducibility, Correlation, Takt Time를 다룹니다.',
          zhCN:'Product Verification Progress——本节介绍Jig Table Flatness、Illumination Uniformity、2D ID(Barcode/OCR)、Dry Run、MTBI、Accuracy、Repeatability、Reproducibility、Correlation、Takt Time。',
          zhTW:'Product Verification Progress——本節介紹Jig Table Flatness、Illumination Uniformity、2D ID(Barcode/OCR)、Dry Run、MTBI、Accuracy、Repeatability、Reproducibility、Correlation、Takt Time。',
          ja:'Product Verification Progress——本節ではJig Table Flatness、Illumination Uniformity、2D ID(Barcode/OCR)、Dry Run、MTBI、Accuracy、Repeatability、Reproducibility、Correlation、Takt Timeを扱います。'
        }},
        {img:cmImg('J','nbga',169),tx:{
          vi:'2.2.10. Takt Time: tính UPH bằng cách đo Takt Time từ Tray xuất ra thứ 1 đến Tray thứ 10, sau đó lấy trung bình kết quả.',
          en:'2.2.10. Takt Time: calculate UPH by measuring the Takt Time from the 1st discharged tray through the 10th tray, then averaging the results.',
          ko:'2.2.10. Takt Time: 1번째 Tray 배출부터 10번째 Tray까지 Takt Time을 측정한 뒤 평균값을 계산하여 UPH를 산출합니다.',
          zhCN:'2.2.10. Takt Time:测量从第1个Tray排出到第10个Tray的Takt Time,取平均值后计算UPH。',
          zhTW:'2.2.10. Takt Time:測量從第1個Tray排出到第10個Tray的Takt Time,取平均值後計算UPH。',
          ja:'2.2.10. Takt Time:1枚目のTray排出から10枚目のTrayまでTakt Timeを測定し、平均値を算出してUPHを計算します。'
        }},
        {img:cmImg('J','nbga',170),tx:{
          vi:'3. Phụ lục — Outgoing Report',
          en:'3. Supplement — Outgoing Report',
          ko:'3. Supplement — Outgoing Report',
          zhCN:'3. Supplement——Outgoing Report',
          zhTW:'3. Supplement——Outgoing Report',
          ja:'3. Supplement——Outgoing Report'
        }},
        {img:cmImg('J','nbga',171),tx:{
          vi:'Bảng Outgoing Report — xác minh tình trạng thiết bị và chất lượng trước khi xuất xưởng (các hạng mục/tiêu chuẩn chính xác có thể khác nhau tùy khách hàng). Các hạng mục gồm: 3D Table 1/2 Flatness (Spec ≤50µm, đo 9 điểm bằng AF Program + Dial Gauge); 3D V1/V2 Illumination Uniformity (≤10%, kiểm tra bằng Gray Target trong một FOV); OCR hoặc 2D ID (100%, kiểm tra toàn bộ mẫu); Dry Run (≥36 giờ không cảnh báo, xác minh qua file Log); MTBI (chạy liên tục ≥60 phút không cảnh báo); Accuracy (≤1µm, từ sai số chuẩn hiệu chuẩn Step Height); Repeatability (≤20%, 1 Unit tại 3 Pocket đo 30 lần, tỷ lệ PT tính từ kết quả); Reproducibility (≤30%, 1 Unit tại 5 Pocket đo 18 lần trong 3 ngày); Correlation (≥75%, so sánh 30 phép đo mẫu hiệu chuẩn với thiết bị tham chiếu của khách hàng, hoặc so sánh V1 với V2 nếu không có); và Tact Time (≤2.8 giây, UPH tính từ thời gian xuất Tray 1 đến 10). Mọi dữ liệu thu thập trong quá trình Product Verification Progress (mục 2.2) đều được ghi lại tại đây.',
          en:'Outgoing Report table — verifies equipment condition and quality before shipment (the exact items/criteria can vary by customer). Items include: 3D Table 1/2 Flatness (spec ≤50µm, 9-point measurement with the AF Program + Dial Gauge); 3D V1/V2 Illumination Uniformity (≤10%, checked with the Gray Target in one FOV); OCR or 2D ID (100%, full inspection of all samples); Dry Run (≥36hr with no alarms, verified via the log file); MTBI (≥60min continuous run with no alarm); Accuracy (≤1µm, from the Step Height calibration reference error); Repeatability (≤20%, 1 unit in 3 pockets measured 30 times, PT ratio calculated from the results); Reproducibility (≤30%, 1 unit in 5 pockets measured 18 times over 3 days); Correlation (≥75%, comparing 30 calibration-sample measurements against the customer\'s reference equipment, or against V1 vs. V2 if none exists); and Tact Time (≤2.8 sec, UPH calculated from the time to discharge trays 1 through 10). All data gathered during the Product Verification Progress process (section 2.2) is recorded here.',
          ko:'Outgoing Report 표 — 출하 전 설비의 상태와 품질을 검증하는 표입니다(세부 항목·기준은 고객사에 따라 달라질 수 있음). 항목: 3D Table 1·2 Flatness(Spec ≤50µm, AF Program+Dial Gauge로 9개 지점 측정); 3D V1·V2 Illumination Uniformity(≤10%, Gray Target으로 1개 FOV 내 균일도 확인); OCR or 2D ID(100%, 전수 검사); Dry Run(≥36hr, Log File로 무알람 확인); MTBI(≥60min 무알람 연속 가동); Accuracy(≤1µm, Step Height 교정값 기준 오차); Repeatability(≤20%, 1개 Unit을 3개 Pocket에서 30회 측정해 PT ratio 산출); Reproducibility(≤30%, 1개 Unit을 5개 Pocket에서 3일간 18회 측정); Correlation(≥75%, 교정 샘플 30개를 측정해 고객사 기준 설비와 비교, 없으면 V1·V2 상호 비교); Tact Time(≤2.8초, Tray 1~10번째 배출 시간으로 UPH 산출). 2.2. Product Verification Progress 과정에서 얻은 각종 데이터가 여기에 기록됩니다.',
          zhCN:'Outgoing Report表——出货前验证设备状态与品质的表格(具体项目·基准可能因客户而异)。项目:3D Table 1·2 Flatness(规格≤50µm,以AF Program+Dial Gauge测量9个点);3D V1·V2 Illumination Uniformity(≤10%,以Gray Target确认单一FOV内的均匀度);OCR or 2D ID(100%,全数检测);Dry Run(≥36hr,以Log File确认无警报);MTBI(≥60min无警报连续运转);Accuracy(≤1µm,以Step Height校正值基准误差);Repeatability(≤20%,将1个Unit置于3个Pocket测量30次计算PT ratio);Reproducibility(≤30%,将1个Unit置于5个Pocket于3天内测量18次);Correlation(≥75%,测量30个校正样本并与客户基准设备比较,若无则比较V1、V2);Tact Time(≤2.8秒,以第1~10个Tray的排出时间计算UPH)。2.2. Product Verification Progress过程中获得的各项数据均记录于此。',
          zhTW:'Outgoing Report表——出貨前驗證設備狀態與品質的表格(具體項目·基準可能因客戶而異)。項目:3D Table 1·2 Flatness(規格≤50µm,以AF Program+Dial Gauge測量9個點);3D V1·V2 Illumination Uniformity(≤10%,以Gray Target確認單一FOV內的均勻度);OCR or 2D ID(100%,全數檢測);Dry Run(≥36hr,以Log File確認無警報);MTBI(≥60min無警報連續運轉);Accuracy(≤1µm,以Step Height校正值基準誤差);Repeatability(≤20%,將1個Unit置於3個Pocket測量30次計算PT ratio);Reproducibility(≤30%,將1個Unit置於5個Pocket於3天內測量18次);Correlation(≥75%,測量30個校正樣本並與客戶基準設備比較,若無則比較V1、V2);Tact Time(≤2.8秒,以第1~10個Tray的排出時間計算UPH)。2.2. Product Verification Progress過程中獲得的各項資料均記錄於此。',
          ja:'Outgoing Report表——出荷前に設備の状態と品質を検証する表です(具体的な項目・基準は顧客により異なる場合があります)。項目:3D Table 1・2 Flatness(規格≤50µm、AF Program+Dial Gaugeで9点測定);3D V1・V2 Illumination Uniformity(≤10%、Gray Targetで単一FOV内の均一性を確認);OCR or 2D ID(100%、全数検査);Dry Run(≥36hr、Log Fileで無アラームを確認);MTBI(≥60min無アラーム連続稼働);Accuracy(≤1µm、Step Height校正値基準の誤差);Repeatability(≤20%、1UnitをPocket3箇所で30回測定しPT ratioを算出);Reproducibility(≤30%、1UnitをPocket5箇所で3日間に18回測定);Correlation(≥75%、校正サンプル30個を測定し顧客基準設備と比較、なければV1・V2を相互比較);Tact Time(≤2.8秒、Tray 1~10番目の排出時間からUPHを算出)。2.2. Product Verification Progress工程で得られた各種データがここに記録されます。'
        }}
      ]
    }
  },
  J:{
    nbga:{
      title:{ko:'J. 근본원인분석 및 검증 Report 작성',en:'J. Root Cause Analysis & Verification Report Writing',zhCN:'J. 根本原因分析及验证报告撰写',zhTW:'J. 根本原因分析及驗證報告撰寫',ja:'J. 根本原因分析および検証レポート作成'},
      slides:[
        {img:cmImg('J','nbga',170),tx:{
          vi:'3. Phụ lục — Outgoing Report',
          en:'3. Supplement — Outgoing Report',
          ko:'3. Supplement — Outgoing Report',
          zhCN:'3. Supplement——Outgoing Report',
          zhTW:'3. Supplement——Outgoing Report',
          ja:'3. Supplement——Outgoing Report'
        }},
        {img:cmImg('J','nbga',171),tx:{
          vi:'Bảng Outgoing Report — xác minh tình trạng thiết bị và chất lượng trước khi xuất xưởng (các hạng mục/tiêu chuẩn chính xác có thể khác nhau tùy khách hàng). Các hạng mục gồm: 3D Table 1/2 Flatness (Spec ≤50µm, đo 9 điểm bằng AF Program + Dial Gauge); 3D V1/V2 Illumination Uniformity (≤10%, kiểm tra bằng Gray Target trong một FOV); OCR hoặc 2D ID (100%, kiểm tra toàn bộ mẫu); Dry Run (≥36 giờ không cảnh báo, xác minh qua file Log); MTBI (chạy liên tục ≥60 phút không cảnh báo); Accuracy (≤1µm, từ sai số chuẩn hiệu chuẩn Step Height); Repeatability (≤20%, 1 Unit tại 3 Pocket đo 30 lần, tỷ lệ PT tính từ kết quả); Reproducibility (≤30%, 1 Unit tại 5 Pocket đo 18 lần trong 3 ngày); Correlation (≥75%, so sánh 30 phép đo mẫu hiệu chuẩn với thiết bị tham chiếu của khách hàng, hoặc so sánh V1 với V2 nếu không có); và Tact Time (≤2.8 giây, UPH tính từ thời gian xuất Tray 1 đến 10). Mọi dữ liệu thu thập trong quá trình Product Verification Progress (mục 2.2) đều được ghi lại tại đây.',
          en:'Outgoing Report table — verifies equipment condition and quality before shipment (the exact items/criteria can vary by customer). Items include: 3D Table 1/2 Flatness (spec ≤50µm, 9-point measurement with the AF Program + Dial Gauge); 3D V1/V2 Illumination Uniformity (≤10%, checked with the Gray Target in one FOV); OCR or 2D ID (100%, full inspection of all samples); Dry Run (≥36hr with no alarms, verified via the log file); MTBI (≥60min continuous run with no alarm); Accuracy (≤1µm, from the Step Height calibration reference error); Repeatability (≤20%, 1 unit in 3 pockets measured 30 times, PT ratio calculated from the results); Reproducibility (≤30%, 1 unit in 5 pockets measured 18 times over 3 days); Correlation (≥75%, comparing 30 calibration-sample measurements against the customer\'s reference equipment, or against V1 vs. V2 if none exists); and Tact Time (≤2.8 sec, UPH calculated from the time to discharge trays 1 through 10). All data gathered during the Product Verification Progress process (section 2.2) is recorded here. This is the report that documents the equipment\'s final condition — the same table module H\'s Recipe Vision Parameter results and module I\'s troubleshooting/data-verification results ultimately feed into.',
          ko:'Outgoing Report 표 — 출하 전 설비의 상태와 품질을 검증하는 표입니다(세부 항목·기준은 고객사에 따라 달라질 수 있음). 항목: 3D Table 1·2 Flatness(Spec ≤50µm, AF Program+Dial Gauge로 9개 지점 측정); 3D V1·V2 Illumination Uniformity(≤10%, Gray Target으로 1개 FOV 내 균일도 확인); OCR or 2D ID(100%, 전수 검사); Dry Run(≥36hr, Log File로 무알람 확인); MTBI(≥60min 무알람 연속 가동); Accuracy(≤1µm, Step Height 교정값 기준 오차); Repeatability(≤20%, 1개 Unit을 3개 Pocket에서 30회 측정해 PT ratio 산출); Reproducibility(≤30%, 1개 Unit을 5개 Pocket에서 3일간 18회 측정); Correlation(≥75%, 교정 샘플 30개를 측정해 고객사 기준 설비와 비교, 없으면 V1·V2 상호 비교); Tact Time(≤2.8초, Tray 1~10번째 배출 시간으로 UPH 산출). 2.2. Product Verification Progress 과정에서 얻은 각종 데이터가 여기에 기록됩니다. 결국 H(Recipe Vision Parameter)와 I(트러블슈팅/Data 검증) 과정에서 나온 결과가 최종적으로 모이는, 설비의 최종 상태를 문서화하는 Report입니다.',
          zhCN:'Outgoing Report表——出货前验证设备状态与品质的表格(具体项目·基准可能因客户而异)。项目:3D Table 1·2 Flatness(规格≤50µm,以AF Program+Dial Gauge测量9个点);3D V1·V2 Illumination Uniformity(≤10%,以Gray Target确认单一FOV内的均匀度);OCR or 2D ID(100%,全数检测);Dry Run(≥36hr,以Log File确认无警报);MTBI(≥60min无警报连续运转);Accuracy(≤1µm,以Step Height校正值基准误差);Repeatability(≤20%,将1个Unit置于3个Pocket测量30次计算PT ratio);Reproducibility(≤30%,将1个Unit置于5个Pocket于3天内测量18次);Correlation(≥75%,测量30个校正样本并与客户基准设备比较,若无则比较V1、V2);Tact Time(≤2.8秒,以第1~10个Tray的排出时间计算UPH)。2.2. Product Verification Progress过程中获得的各项数据均记录于此。最终,H(Recipe Vision Parameter)与I(故障排查/数据验证)过程中得出的结果都会汇总到这份记录设备最终状态的Report中。',
          zhTW:'Outgoing Report表——出貨前驗證設備狀態與品質的表格(具體項目·基準可能因客戶而異)。項目:3D Table 1·2 Flatness(規格≤50µm,以AF Program+Dial Gauge測量9個點);3D V1·V2 Illumination Uniformity(≤10%,以Gray Target確認單一FOV內的均勻度);OCR or 2D ID(100%,全數檢測);Dry Run(≥36hr,以Log File確認無警報);MTBI(≥60min無警報連續運轉);Accuracy(≤1µm,以Step Height校正值基準誤差);Repeatability(≤20%,將1個Unit置於3個Pocket測量30次計算PT ratio);Reproducibility(≤30%,將1個Unit置於5個Pocket於3天內測量18次);Correlation(≥75%,測量30個校正樣本並與客戶基準設備比較,若無則比較V1、V2);Tact Time(≤2.8秒,以第1~10個Tray的排出時間計算UPH)。2.2. Product Verification Progress過程中獲得的各項資料均記錄於此。最終,H(Recipe Vision Parameter)與I(故障排除/數據驗證)過程中得出的結果都會匯總到這份記錄設備最終狀態的Report中。',
          ja:'Outgoing Report表——出荷前に設備の状態と品質を検証する表です(具体的な項目・基準は顧客により異なる場合があります)。項目:3D Table 1・2 Flatness(規格≤50µm、AF Program+Dial Gaugeで9点測定);3D V1・V2 Illumination Uniformity(≤10%、Gray Targetで単一FOV内の均一性を確認);OCR or 2D ID(100%、全数検査);Dry Run(≥36hr、Log Fileで無アラームを確認);MTBI(≥60min無アラーム連続稼働);Accuracy(≤1µm、Step Height校正値基準の誤差);Repeatability(≤20%、1UnitをPocket3箇所で30回測定しPT ratioを算出);Reproducibility(≤30%、1UnitをPocket5箇所で3日間に18回測定);Correlation(≥75%、校正サンプル30個を測定し顧客基準設備と比較、なければV1・V2を相互比較);Tact Time(≤2.8秒、Tray 1~10番目の排出時間からUPHを算出)。2.2. Product Verification Progress工程で得られた各種データがここに記録されます。最終的にH(Recipe Vision Parameter)とI(トラブルシューティング・データ検証)工程で得られた結果が集約される、設備の最終状態を文書化するレポートです。'
        }}
      ]
    }
  },
  C:{
    smtv:{
      title:{ko:'C. Software 조작(Main UI)',en:'C. Software Operation (Main UI)',zhCN:'C. Software操作(Main UI)',zhTW:'C. Software操作(Main UI)',ja:'C. Software操作(Main UI)'},
      slides:[
        {img:cmImg('C','smtv',1),tx:{
          vi:'Operation — phần này đề cập đến Main Program: Host & Vision Main Software, Host System Status, Host Operation UI và Handler Initialize.',
          en:'Operation — this section covers the Main Program: Host & Vision Main Software, Host System Status, Host Operation UI, and Handler Initialize.',
          ko:'Operation — Main Program: Host & Vision Main Software, Host System Status, Host Operation UI, Handler Initialize를 다룹니다.',
          zhCN:'Operation——本节介绍Main Program:Host & Vision Main Software、Host System Status、Host Operation UI、Handler Initialize。',
          zhTW:'Operation——本節介紹Main Program:Host & Vision Main Software、Host System Status、Host Operation UI、Handler Initialize。',
          ja:'Operation——本節ではMain Program:Host & Vision Main Software、Host System Status、Host Operation UI、Handler Initializeを扱います。'
        }},
        {img:cmImg('C','smtv',2),tx:{
          vi:'2.2.1. Host & Vision Main Software — chuyển màn hình bằng Ctrl+Ctrl+1~4 (1: HOST, 2: 3D Vision 1, 3: 3D Vision 2, 4: 2D Vision). Chuyển sang HOST và chạy chương trình iSMTV_Host.',
          en:'2.2.1. Host & Vision Main Software — switch screens with Ctrl+Ctrl+1~4 (1: HOST, 2: 3D Vision 1, 3: 3D Vision 2, 4: 2D Vision). Switch to HOST and run the iSMTV_Host program.',
          ko:'2.2.1. Host & Vision Main Software — Ctrl+Ctrl+1~4 입력으로 화면을 전환합니다(1: HOST, 2: 3D Vision 1, 3: 3D Vision 2, 4: 2D Vision). HOST로 전환해 iSMTV_Host 프로그램을 실행합니다.',
          zhCN:'2.2.1. Host & Vision Main Software——通过输入Ctrl+Ctrl+1~4切换画面(1:HOST,2:3D Vision 1,3:3D Vision 2,4:2D Vision)。切换到HOST并运行iSMTV_Host程序。',
          zhTW:'2.2.1. Host & Vision Main Software——透過輸入Ctrl+Ctrl+1~4切換畫面(1:HOST,2:3D Vision 1,3:3D Vision 2,4:2D Vision)。切換到HOST並執行iSMTV_Host程式。',
          ja:'2.2.1. Host & Vision Main Software——Ctrl+Ctrl+1~4を入力して画面を切り替えます(1:HOST、2:3D Vision 1、3:3D Vision 2、4:2D Vision)。HOSTに切り替えiSMTV_Hostプログラムを実行します。'
        }},
        {img:cmImg('C','smtv',3),tx:{
          vi:'Chuyển sang 3D Vision 1 (hoặc Vision 2, 2D Vision) và chạy chương trình VisionTray.',
          en:'Switch to 3D Vision 1 (or Vision 2, 2D Vision) and run the VisionTray program.',
          ko:'3D Vision 1(또는 Vision 2, 2D Vision)로 전환해 VisionTray 프로그램을 실행합니다.',
          zhCN:'切换到3D Vision 1(或Vision 2、2D Vision)并运行VisionTray程序。',
          zhTW:'切換到3D Vision 1(或Vision 2、2D Vision)並執行VisionTray程式。',
          ja:'3D Vision 1(またはVision 2、2D Vision)に切り替えVisionTrayプログラムを実行します。'
        }},
        {img:cmImg('C','smtv',4),tx:{
          vi:'Operation — phần này đề cập đến Main Program: Host & Vision Main Software, Host System Status, Host Operation UI và Handler Initialize.',
          en:'Operation — this section covers the Main Program: Host & Vision Main Software, Host System Status, Host Operation UI, and Handler Initialize.',
          ko:'Operation — Main Program: Host & Vision Main Software, Host System Status, Host Operation UI, Handler Initialize를 다룹니다.',
          zhCN:'Operation——本节介绍Main Program:Host & Vision Main Software、Host System Status、Host Operation UI、Handler Initialize。',
          zhTW:'Operation——本節介紹Main Program:Host & Vision Main Software、Host System Status、Host Operation UI、Handler Initialize。',
          ja:'Operation——本節ではMain Program:Host & Vision Main Software、Host System Status、Host Operation UI、Handler Initializeを扱います。'
        }},
        {img:cmImg('C','smtv',5),tx:{
          vi:'2.2.2. Host System Status — kiểm tra trạng thái hệ thống hiển thị ở đầu chương trình HOST. Chỉ có thể tiến hành kiểm tra khi tất cả trạng thái đều sẵn sàng (hiển thị màu xanh).',
          en:'2.2.2. Host System Status — check the system status shown at the top of the HOST program. Inspection can proceed only once all statuses show ready (displayed in green).',
          ko:'2.2.2. Host System Status — HOST 프로그램 상단의 System Status를 확인합니다. 모든 상태가 Ready(녹색 표시)일 때만 검사를 진행할 수 있습니다.',
          zhCN:'2.2.2. Host System Status——确认HOST程序上方的System Status。只有所有状态均为Ready(显示绿色)时才能进行检测。',
          zhTW:'2.2.2. Host System Status——確認HOST程式上方的System Status。只有所有狀態均為Ready(顯示綠色)時才能進行檢測。',
          ja:'2.2.2. Host System Status——HOSTプログラム上部のSystem Statusを確認します。すべての状態がReady(緑色表示)のときのみ検査を進めることができます。'
        }},
        {img:cmImg('C','smtv',6),tx:{
          vi:'Nếu hệ thống chưa sẵn sàng, kiểm tra: Handler (chạy Initialization); Vision (nhấn Connect Vision — nếu không kết nối được, kiểm tra ① IP Vision PC, ② phiên bản Host P/G / Vision Manager P/G / Vision P/G có khớp nhau, ③ trạng thái Vision P/G); AF1/AF2 (kiểm tra kết nối LAN đến AF); Motor (xác nhận OP panel có nguồn, hoặc công tắc EMS ở trạng thái bình thường); Interlock (đóng tất cả cửa của thiết bị, sau đó nhấn Interlock để khóa cửa).',
          en:'If the system isn\'t ready, check: Handler (run initialization); Vision (click Connect Vision — if it won\'t connect, check ① Vision PC IP, ② Host P/G / Vision Manager P/G / Vision P/G version match, ③ Vision P/G status); AF1/AF2 (check the LAN connection to AF); Motor (confirm the OP panel is powered, or that the EMS switch is in a normal state); Interlock (close all doors in the facility, then click Interlock to lock the doors).',
          ko:'System이 Ready 상태가 아니면 다음을 확인합니다: Handler(초기화 진행), Vision(Connect Vision 클릭 — 연결 안 되면 ① Vision PC IP 확인, ② Host P/G·Vision Manager P/G·Vision P/G 버전 확인, ③ Vision P/G 상태 확인), AF1·AF2(AF와의 LAN 연결 상태 확인), Motor(OP Panel 전원 확인 또는 EMS Switch 정상 상태 확인), Interlock(설비 내 모든 Door를 닫고 Interlock 버튼 클릭해 Door Lock).',
          zhCN:'若System未处于Ready状态,请确认以下项目:Handler(进行初始化)、Vision(点击Connect Vision——若无法连接,确认①Vision PC IP、②Host P/G·Vision Manager P/G·Vision P/G版本、③Vision P/G状态)、AF1·AF2(确认与AF的LAN连接状态)、Motor(确认OP Panel电源或EMS Switch是否正常)、Interlock(关闭设备内所有Door后点击Interlock按钮上锁)。',
          zhTW:'若System未處於Ready狀態,請確認以下項目:Handler(進行初始化)、Vision(點擊Connect Vision——若無法連接,確認①Vision PC IP、②Host P/G·Vision Manager P/G·Vision P/G版本、③Vision P/G狀態)、AF1·AF2(確認與AF的LAN連接狀態)、Motor(確認OP Panel電源或EMS Switch是否正常)、Interlock(關閉設備內所有Door後點擊Interlock按鈕上鎖)。',
          ja:'Systemがready状態でない場合、以下を確認します:Handler(初期化実行)、Vision(Connect Visionをクリック——接続できない場合は①Vision PC IP確認、②Host P/G・Vision Manager P/G・Vision P/Gバージョン確認、③Vision P/G状態確認)、AF1・AF2(AFとのLAN接続状態確認)、Motor(OP Panel電源確認、またはEMS Switchが正常状態か確認)、Interlock(設備内すべてのDoorを閉じ、Interlockボタンをクリックしてロック)。'
        }},
        {img:cmImg('C','smtv',7),tx:{
          vi:'Operation — phần này đề cập đến Main Program: Host & Vision Main Software, Host System Status, Host Operation UI và Handler Initialize.',
          en:'Operation — this section covers the Main Program: Host & Vision Main Software, Host System Status, Host Operation UI, and Handler Initialize.',
          ko:'Operation — Main Program: Host & Vision Main Software, Host System Status, Host Operation UI, Handler Initialize를 다룹니다.',
          zhCN:'Operation——本节介绍Main Program:Host & Vision Main Software、Host System Status、Host Operation UI、Handler Initialize。',
          zhTW:'Operation——本節介紹Main Program:Host & Vision Main Software、Host System Status、Host Operation UI、Handler Initialize。',
          ja:'Operation——本節ではMain Program:Host & Vision Main Software、Host System Status、Host Operation UI、Handler Initializeを扱います。'
        }},
        {img:cmImg('C','smtv',8),tx:{
          vi:'Tổng quan cửa sổ chương trình chính Host — Log In & Save, Run Menu, System Status, Unit Status, Lot Info, Inspection Results, Safety Status, Sorting Information, Log.',
          en:'Host main program window overview — Log In & Save, Run Menu, System Status, Unit Status, Lot Info, Inspection Results, Safety Status, Sorting Information, and Log.',
          ko:'Host 메인 프로그램 화면 구성 — Log In & Save, Run Menu, System Status, Unit Status, Lot Info, Inspection Results, Safety Status, Sorting Information, Log.',
          zhCN:'Host主程序画面构成——Log In & Save、Run Menu、System Status、Unit Status、Lot Info、Inspection Results、Safety Status、Sorting Information、Log。',
          zhTW:'Host主程式畫面構成——Log In & Save、Run Menu、System Status、Unit Status、Lot Info、Inspection Results、Safety Status、Sorting Information、Log。',
          ja:'Hostメインプログラム画面構成——Log In & Save、Run Menu、System Status、Unit Status、Lot Info、Inspection Results、Safety Status、Sorting Information、Log。'
        }},
        {img:cmImg('C','smtv',9),tx:{
          vi:'Các nút Host Operation UI — Log In (quyền truy cập thiết bị), Job Open (chọn Recipe đã lưu), Job Save (lưu Job hiện tại), Process (kiểm tra trạng thái thiết bị), Save Log (lưu trạng thái thiết bị hiện tại), Start (mở cửa sổ nhập cho kiểm tra sản phẩm), Resume (tiếp tục kiểm tra), Pause (tạm dừng kiểm tra), Lot Cancel (hủy toàn bộ thao tác Lot), LTS V1 / LTS V2 (nút kiểm tra LTS), Tray LTS (nút kiểm tra), Empty Handler (tự động lấy Tray ra khỏi thiết bị), Init Handler (khởi tạo thiết bị).',
          en:'Host Operation UI buttons — Log In (device access rights), Job Open (select a saved Recipe), Job Save (save the current job), Process (check equipment status), Save Log (save the current device status), Start (open the input window for product inspection), Resume (continue inspection), Pause (pause inspection), Lot Cancel (cancel all lot operations), LTS V1 / LTS V2 (LTS check buttons), Tray LTS (check button), Empty Handler (automatically remove trays inside the equipment), Init Handler (initialize the equipment).',
          ko:'Host Operation UI 버튼 — Log In(장비 접근 권한 설정), Job Open(저장된 Recipe 선택), Job Save(현재 작업 저장), Process(설비 현재 상태 확인), Save Log(장비 현재 상태 저장), Start(제품 검사용 정보 입력창 생성), Resume(제품 검사 재개), Pause(제품 검사 일시정지), Lot Cancel(진행 중인 Lot 모두 취소), LTS V1·LTS V2(LTS 확인 버튼), Tray LTS(Tray LTS 확인 버튼), Empty Handler(설비 내 Tray 자동 제거), Init Handler(설비 초기화 버튼).',
          zhCN:'Host Operation UI按钮——Log In(设备访问权限设置)、Job Open(选择已保存的Recipe)、Job Save(保存当前作业)、Process(确认设备当前状态)、Save Log(保存设备当前状态)、Start(生成产品检测信息输入窗口)、Resume(继续产品检测)、Pause(暂停产品检测)、Lot Cancel(取消所有进行中的Lot)、LTS V1·LTS V2(LTS确认按钮)、Tray LTS(Tray LTS确认按钮)、Empty Handler(自动清除设备内Tray)、Init Handler(设备初始化按钮)。',
          zhTW:'Host Operation UI按鈕——Log In(設備存取權限設定)、Job Open(選擇已儲存的Recipe)、Job Save(儲存目前作業)、Process(確認設備目前狀態)、Save Log(儲存設備目前狀態)、Start(產生產品檢測資訊輸入視窗)、Resume(繼續產品檢測)、Pause(暫停產品檢測)、Lot Cancel(取消所有進行中的Lot)、LTS V1·LTS V2(LTS確認按鈕)、Tray LTS(Tray LTS確認按鈕)、Empty Handler(自動清除設備內Tray)、Init Handler(設備初始化按鈕)。',
          ja:'Host Operation UIボタン——Log In(機器アクセス権限設定)、Job Open(保存済みRecipeの選択)、Job Save(現在の作業を保存)、Process(設備の現在状態を確認)、Save Log(機器の現在状態を保存)、Start(製品検査用の情報入力ウィンドウを生成)、Resume(製品検査を再開)、Pause(製品検査を一時停止)、Lot Cancel(進行中のLotをすべてキャンセル)、LTS V1・LTS V2(LTS確認ボタン)、Tray LTS(Tray LTS確認ボタン)、Empty Handler(設備内のTrayを自動除去)、Init Handler(設備初期化ボタン)。'
        }},
        {img:cmImg('C','smtv',10),tx:{
          vi:'Unit Status (vị trí Unit hiện tại), Inspection Status (kết quả kiểm tra theo từng Vision), Safety Status (trạng thái mở/khóa cửa hiện tại), khu vực Vision (chuyển màn hình Vision PC / theo dõi ảnh kiểm tra / kiểm tra kết nối chương trình Vision), Yield (tỷ lệ Yield kiểm tra theo từng Vision), Log (chi tiết Log thiết bị).',
          en:'Unit Status (current unit position), Inspection Status (per-vision inspection result), Safety Status (current door open/lock state), Vision area (switch the vision PC screen / monitor the inspection image / check the vision program connection), Yield (per-vision inspection yield), Log (detailed equipment log).',
          ko:'Unit Status(현재 Unit 위치), Inspection Status(각 Vision별 검사 결과), Safety Status(현재 Door Open/Lock 상태), Vision 영역(Vision PC 화면 전환·검사 이미지 모니터링·Vision Program 연결 상태 확인), Yield(각 Vision별 검사 수율), Log(설비 상세 Log).',
          zhCN:'Unit Status(当前Unit位置)、Inspection Status(各Vision的检测结果)、Safety Status(目前Door Open/Lock状态)、Vision区域(切换Vision PC画面·监控检测影像·确认Vision Program连接状态)、Yield(各Vision的检测良率)、Log(设备详细Log)。',
          zhTW:'Unit Status(目前Unit位置)、Inspection Status(各Vision的檢測結果)、Safety Status(目前Door Open/Lock狀態)、Vision區域(切換Vision PC畫面·監控檢測影像·確認Vision Program連接狀態)、Yield(各Vision的檢測良率)、Log(設備詳細Log)。',
          ja:'Unit Status(現在のUnit位置)、Inspection Status(各Visionの検査結果)、Safety Status(現在のDoor Open/Lock状態)、Vision領域(Vision PC画面切替・検査画像モニタリング・Vision Program接続状態確認)、Yield(各Visionの検査歩留まり)、Log(設備詳細Log)。'
        }},
        {img:cmImg('C','smtv',11),tx:{
          vi:'Lot ID, Part Number (mã quản lý của khách hàng), Recipe Name (Job đang áp dụng), Operator, Cycle Time 1/2 (thời gian kiểm tra theo từng Vision trên mỗi Pedestal), Start Time, Run Time, Yield, UPH, số lượng Total/Pass/Fail, và Sorting Tray (trạng thái theo từng Rail).',
          en:'Lot ID, Part Number (customer management number), Recipe Name (currently applied job), Operator, Cycle Time 1/2 (per-vision inspection time per Pedestal), Start Time, Run Time, Yield, UPH, Total/Pass/Fail counts, and Sorting Tray (status per rail).',
          ko:'Lot ID, Part Number(고객사 관리 번호), Recipe Name(현재 적용 중인 Job), Operator, Cycle Time 1·2(Pedestal 1개 기준 각 Vision 검사 시간), Start Time, Run Time, Yield, UPH, Total·Pass·Fail 수량, Sorting Tray(Rail별 상태).',
          zhCN:'Lot ID、Part Number(客户管理编号)、Recipe Name(目前套用的Job)、Operator、Cycle Time 1·2(以1个Pedestal为基准的各Vision检测时间)、Start Time、Run Time、Yield、UPH、Total·Pass·Fail数量、Sorting Tray(各Rail状态)。',
          zhTW:'Lot ID、Part Number(客戶管理編號)、Recipe Name(目前套用的Job)、Operator、Cycle Time 1·2(以1個Pedestal為基準的各Vision檢測時間)、Start Time、Run Time、Yield、UPH、Total·Pass·Fail數量、Sorting Tray(各Rail狀態)。',
          ja:'Lot ID、Part Number(顧客管理番号)、Recipe Name(現在適用中のJob)、Operator、Cycle Time 1・2(Pedestal1個基準の各Vision検査時間)、Start Time、Run Time、Yield、UPH、Total・Pass・Fail数、Sorting Tray(Rail別状態)。'
        }},
        {img:cmImg('C','smtv',12),tx:{
          vi:'Operation — phần này đề cập đến Main Program: Host & Vision Main Software, Host System Status, Host Operation UI và Handler Initialize.',
          en:'Operation — this section covers the Main Program: Host & Vision Main Software, Host System Status, Host Operation UI, and Handler Initialize.',
          ko:'Operation — Main Program: Host & Vision Main Software, Host System Status, Host Operation UI, Handler Initialize를 다룹니다.',
          zhCN:'Operation——本节介绍Main Program:Host & Vision Main Software、Host System Status、Host Operation UI、Handler Initialize。',
          zhTW:'Operation——本節介紹Main Program:Host & Vision Main Software、Host System Status、Host Operation UI、Handler Initialize。',
          ja:'Operation——本節ではMain Program:Host & Vision Main Software、Host System Status、Host Operation UI、Handler Initializeを扱います。'
        }},
        {img:cmImg('C','smtv',13),tx:{
          vi:'2.2.4. Handler Initialize — nhấn Init Handler.',
          en:'2.2.4. Handler Initialize — click Init Handler.',
          ko:'2.2.4. Handler Initialize — Init Handler를 클릭합니다.',
          zhCN:'2.2.4. Handler Initialize——点击Init Handler。',
          zhTW:'2.2.4. Handler Initialize——點擊Init Handler。',
          ja:'2.2.4. Handler Initialize——Init Handlerをクリックします。'
        }},
        {img:cmImg('C','smtv',14),tx:{
          vi:'Khi khởi tạo thiết bị hoàn tất, biểu tượng Handler chuyển từ đỏ sang xanh.',
          en:'Once equipment initialization is complete, the Handler icon changes from red to green.',
          ko:'설비 초기화가 완료되면 Handler 아이콘이 빨간색에서 초록색으로 바뀝니다.',
          zhCN:'设备初始化完成后,Handler图标会从红色变为绿色。',
          zhTW:'設備初始化完成後,Handler圖示會從紅色變為綠色。',
          ja:'設備の初期化が完了すると、Handlerアイコンが赤から緑に変わります。'
        }}
      ]
    },
    nbga:{
      title:{ko:'C. Software 조작(Main UI)',en:'C. Software Operation (Main UI)',zhCN:'C. Software操作(Main UI)',zhTW:'C. Software操作(Main UI)',ja:'C. Software操作(Main UI)'},
      slides:[
        {img:cmImg('C','nbga',1),tx:{
          vi:'Operation — phần này đề cập đến Main Program: Host & Vision Main Software, Host & Vision Check Items, Host Operation UI và Handler Initialize.',
          en:'Operation — this section covers the Main Program: Host & Vision Main Software, Host & Vision Check Items, Host Operation UI, and Handler Initialize.',
          ko:'Operation — Main Program: Host & Vision Main Software, Host & Vision Check Items, Host Operation UI, Handler Initialize를 다룹니다.',
          zhCN:'Operation——本节介绍Main Program:Host & Vision Main Software、Host & Vision Check Items、Host Operation UI、Handler Initialize。',
          zhTW:'Operation——本節介紹Main Program:Host & Vision Main Software、Host & Vision Check Items、Host Operation UI、Handler Initialize。',
          ja:'Operation——本節ではMain Program:Host & Vision Main Software、Host & Vision Check Items、Host Operation UI、Handler Initializeを扱います。'
        }},
        {img:cmImg('C','nbga',2),tx:{
          vi:'2.2.1. Host & Vision Main Software — chuyển màn hình bằng Ctrl+Ctrl+1~4 (1: HOST, 2: 3D Vision 1, 3: 3D Vision 2, 4: 2D Vision). Chuyển sang HOST và chạy chương trình BAOI.',
          en:'2.2.1. Host & Vision Main Software — switch screens with Ctrl+Ctrl+1~4 (1: HOST, 2: 3D Vision 1, 3: 3D Vision 2, 4: 2D Vision). Switch to HOST and run the BAOI program.',
          ko:'2.2.1. Host & Vision Main Software — Ctrl+Ctrl+1~4 입력으로 화면을 전환합니다(1: HOST, 2: 3D Vision 1, 3: 3D Vision 2, 4: 2D Vision). HOST로 전환해 BAOI 프로그램을 실행합니다.',
          zhCN:'2.2.1. Host & Vision Main Software——通过输入Ctrl+Ctrl+1~4切换画面(1:HOST,2:3D Vision 1,3:3D Vision 2,4:2D Vision)。切换到HOST并运行BAOI程序。',
          zhTW:'2.2.1. Host & Vision Main Software——透過輸入Ctrl+Ctrl+1~4切換畫面(1:HOST,2:3D Vision 1,3:3D Vision 2,4:2D Vision)。切換到HOST並執行BAOI程式。',
          ja:'2.2.1. Host & Vision Main Software——Ctrl+Ctrl+1~4を入力して画面を切り替えます(1:HOST、2:3D Vision 1、3:3D Vision 2、4:2D Vision)。HOSTに切り替えBAOIプログラムを実行します。'
        }},
        {img:cmImg('C','nbga',3),tx:{
          vi:'Chuyển sang 3D Vision 1 (hoặc Vision 2, 2D Vision) và chạy chương trình VisionTray.',
          en:'Switch to 3D Vision 1 (or Vision 2, 2D Vision) and run the VisionTray program.',
          ko:'3D Vision 1(또는 Vision 2, 2D Vision)로 전환해 VisionTray 프로그램을 실행합니다.',
          zhCN:'切换到3D Vision 1(或Vision 2、2D Vision)并运行VisionTray程序。',
          zhTW:'切換到3D Vision 1(或Vision 2、2D Vision)並執行VisionTray程式。',
          ja:'3D Vision 1(またはVision 2、2D Vision)に切り替えVisionTrayプログラムを実行します。'
        }},
        {img:cmImg('C','nbga',4),tx:{
          vi:'Operation — phần này đề cập đến Main Program: Host & Vision Main Software, Host & Vision Check Items, Host Operation UI và Handler Initialize.',
          en:'Operation — this section covers the Main Program: Host & Vision Main Software, Host & Vision Check Items, Host Operation UI, and Handler Initialize.',
          ko:'Operation — Main Program: Host & Vision Main Software, Host & Vision Check Items, Host Operation UI, Handler Initialize를 다룹니다.',
          zhCN:'Operation——本节介绍Main Program:Host & Vision Main Software、Host & Vision Check Items、Host Operation UI、Handler Initialize。',
          zhTW:'Operation——本節介紹Main Program:Host & Vision Main Software、Host & Vision Check Items、Host Operation UI、Handler Initialize。',
          ja:'Operation——本節ではMain Program:Host & Vision Main Software、Host & Vision Check Items、Host Operation UI、Handler Initializeを扱います。'
        }},
        {img:cmImg('C','nbga',5),tx:{
          vi:'2.2.2. Host & Vision Check Items — kiểm tra trạng thái hệ thống hiển thị ở đầu chương trình HOST. Chỉ có thể tiến hành kiểm tra khi tất cả trạng thái đều sẵn sàng (hiển thị màu xanh).',
          en:'2.2.2. Host & Vision Check Items — check the system status shown at the top of the HOST program. Inspection can proceed only once all statuses show ready (displayed in green).',
          ko:'2.2.2. Host & Vision Check Items — HOST 프로그램 상단의 System Status를 확인합니다. 모든 상태가 Ready(녹색 표시)일 때만 검사를 진행할 수 있습니다.',
          zhCN:'2.2.2. Host & Vision Check Items——确认HOST程序上方的System Status。只有所有状态均为Ready(显示绿色)时才能进行检测。',
          zhTW:'2.2.2. Host & Vision Check Items——確認HOST程式上方的System Status。只有所有狀態均為Ready(顯示綠色)時才能進行檢測。',
          ja:'2.2.2. Host & Vision Check Items——HOSTプログラム上部のSystem Statusを確認します。すべての状態がReady(緑色表示)のときのみ検査を進めることができます。'
        }},
        {img:cmImg('C','nbga',6),tx:{
          vi:'Nếu chưa sẵn sàng, kiểm tra: Handler (chạy Initialization); Vision (nhấn Connect Vision — nếu không kết nối được, kiểm tra 1) IP Vision PC, 2) phiên bản Host P/G và Vision P/G có khớp nhau, 3) trạng thái Vision P/G); AF1/AF2 (kiểm tra kết nối LAN đến AF); Motor (xác nhận OP panel có nguồn, hoặc công tắc EMS ở trạng thái bình thường); Interlock (đóng tất cả cửa của thiết bị, sau đó nhấn Interlock để khóa cửa).',
          en:'If not ready, check: Handler (run initialization); Vision (click Connect Vision — if it won\'t connect, check 1) Vision PC IP, 2) Host P/G vs. Vision P/G version match, 3) Vision P/G status); AF1/AF2 (check the LAN connection to AF); Motor (confirm the OP panel is powered, or that the EMS switch is in a normal state); Interlock (close all doors in the facility, then click Interlock to lock the doors).',
          ko:'Ready 상태가 아니면 다음을 확인합니다: Handler(초기화 진행), Vision(Connect Vision 클릭 — 연결 안 되면 1) Vision PC IP 확인, 2) Host P/G·Vision P/G 버전 확인, 3) Vision P/G 상태 확인), AF1·AF2(AF와의 LAN 연결 상태 확인), Motor(OP Panel 전원 확인 또는 EMS Switch 정상 상태 확인), Interlock(설비 내 모든 Door를 닫고 Interlock 버튼 클릭해 Door Lock).',
          zhCN:'若未处于Ready状态,请确认以下项目:Handler(进行初始化)、Vision(点击Connect Vision——若无法连接,确认1)Vision PC IP、2)Host P/G·Vision P/G版本、3)Vision P/G状态)、AF1·AF2(确认与AF的LAN连接状态)、Motor(确认OP Panel电源或EMS Switch是否正常)、Interlock(关闭设备内所有Door后点击Interlock按钮上锁)。',
          zhTW:'若未處於Ready狀態,請確認以下項目:Handler(進行初始化)、Vision(點擊Connect Vision——若無法連接,確認1)Vision PC IP、2)Host P/G·Vision P/G版本、3)Vision P/G狀態)、AF1·AF2(確認與AF的LAN連接狀態)、Motor(確認OP Panel電源或EMS Switch是否正常)、Interlock(關閉設備內所有Door後點擊Interlock按鈕上鎖)。',
          ja:'Ready状態でない場合、以下を確認します:Handler(初期化実行)、Vision(Connect Visionをクリック——接続できない場合は1)Vision PC IP確認、2)Host P/G・Vision P/Gバージョン確認、3)Vision P/G状態確認)、AF1・AF2(AFとのLAN接続状態確認)、Motor(OP Panel電源確認、またはEMS Switchが正常状態か確認)、Interlock(設備内すべてのDoorを閉じ、Interlockボタンをクリックしてロック)。'
        }},
        {img:cmImg('C','nbga',7),tx:{
          vi:'Operation — phần này đề cập đến Main Program: Host & Vision Main Software, Host & Vision Check Items, Host Operation UI và Handler Initialize.',
          en:'Operation — this section covers the Main Program: Host & Vision Main Software, Host & Vision Check Items, Host Operation UI, and Handler Initialize.',
          ko:'Operation — Main Program: Host & Vision Main Software, Host & Vision Check Items, Host Operation UI, Handler Initialize를 다룹니다.',
          zhCN:'Operation——本节介绍Main Program:Host & Vision Main Software、Host & Vision Check Items、Host Operation UI、Handler Initialize。',
          zhTW:'Operation——本節介紹Main Program:Host & Vision Main Software、Host & Vision Check Items、Host Operation UI、Handler Initialize。',
          ja:'Operation——本節ではMain Program:Host & Vision Main Software、Host & Vision Check Items、Host Operation UI、Handler Initializeを扱います。'
        }},
        {img:cmImg('C','nbga',8),tx:{
          vi:'Tổng quan cửa sổ chương trình chính Host — Log In & Save, Run Menu, System State, Lot Information, Inspection State, Sorting Information & Door Status, Inspection Yield, Log.',
          en:'Host main program window overview — Log In & Save, Run Menu, System State, Lot Information, Inspection State, Sorting Information & Door Status, Inspection Yield, Log.',
          ko:'Host 메인 프로그램 화면 구성 — Log In & Save, Run Menu, System State, Lot Information, Inspection State, Sorting Information & Door status, Inspection Yield, Log.',
          zhCN:'Host主程序画面构成——Log In & Save、Run Menu、System State、Lot Information、Inspection State、Sorting Information & Door status、Inspection Yield、Log。',
          zhTW:'Host主程式畫面構成——Log In & Save、Run Menu、System State、Lot Information、Inspection State、Sorting Information & Door status、Inspection Yield、Log。',
          ja:'Hostメインプログラム画面構成——Log In & Save、Run Menu、System State、Lot Information、Inspection State、Sorting Information & Door status、Inspection Yield、Log。'
        }},
        {img:cmImg('C','nbga',9),tx:{
          vi:'Các nút Host Operation UI — Log In (quyền truy cập thiết bị), Job Save (lưu Job hiện tại), Process (kiểm tra trạng thái thiết bị), Save Log (lưu trạng thái thiết bị hiện tại), Lot Start (mở cửa sổ nhập cho kiểm tra sản phẩm), Lot Cancel (hủy toàn bộ thao tác Lot), Start (tiếp tục từ trạng thái dừng), Stop (dừng thiết bị đang chạy), Job Open (chọn Recipe đã lưu), LTS / Tray LTS (nút kiểm tra), Picker Change Pos (di chuyển đến vị trí thay Picker), Empty Handler (tự động lấy Tray ra khỏi thiết bị), Init Handler (khởi tạo thiết bị).',
          en:'Host Operation UI buttons — Log In (device access rights), Job Save (save the current job), Process (check equipment status), Save Log (save the current device status), Lot Start (open the input window for product inspection), Lot Cancel (cancel all lot operations), Start (resume from stop), Stop (stop the running equipment), Job Open (select a saved Recipe), LTS / Tray LTS (check buttons), Picker Change Pos (move to the picker-change position), Empty Handler (automatically remove trays inside the equipment), Init Handler (initialize the equipment).',
          ko:'Host Operation UI 버튼 — Log In(장비 접근 권한 설정), Job Save(현재 작업 저장), Process(설비 현재 상태 확인), Save Log(장비 현재 상태 저장), Lot Start(제품 검사용 정보 입력창 생성), Lot Cancel(진행 중인 Lot 모두 취소), Start(정지 상태에서 재시작), Stop(가동 중인 설비 정지), Job Open(저장된 Recipe 선택), LTS·Tray LTS(확인 버튼), Picker Change Pos(Picker Change 위치로 이동), Empty Handler(설비 내 Tray 자동 제거), Init Handler(설비 초기화 버튼).',
          zhCN:'Host Operation UI按钮——Log In(设备访问权限设置)、Job Save(保存当前作业)、Process(确认设备当前状态)、Save Log(保存设备当前状态)、Lot Start(生成产品检测信息输入窗口)、Lot Cancel(取消所有进行中的Lot)、Start(从停止状态重新启动)、Stop(停止运行中的设备)、Job Open(选择已保存的Recipe)、LTS·Tray LTS(确认按钮)、Picker Change Pos(移动到Picker Change位置)、Empty Handler(自动清除设备内Tray)、Init Handler(设备初始化按钮)。',
          zhTW:'Host Operation UI按鈕——Log In(設備存取權限設定)、Job Save(儲存目前作業)、Process(確認設備目前狀態)、Save Log(儲存設備目前狀態)、Lot Start(產生產品檢測資訊輸入視窗)、Lot Cancel(取消所有進行中的Lot)、Start(從停止狀態重新啟動)、Stop(停止運行中的設備)、Job Open(選擇已儲存的Recipe)、LTS·Tray LTS(確認按鈕)、Picker Change Pos(移動到Picker Change位置)、Empty Handler(自動清除設備內Tray)、Init Handler(設備初始化按鈕)。',
          ja:'Host Operation UIボタン——Log In(機器アクセス権限設定)、Job Save(現在の作業を保存)、Process(設備の現在状態を確認)、Save Log(機器の現在状態を保存)、Lot Start(製品検査用の情報入力ウィンドウを生成)、Lot Cancel(進行中のLotをすべてキャンセル)、Start(停止状態から再開)、Stop(稼働中の設備を停止)、Job Open(保存済みRecipeの選択)、LTS・Tray LTS(確認ボタン)、Picker Change Pos(Picker Change位置へ移動)、Empty Handler(設備内のTrayを自動除去)、Init Handler(設備初期化ボタン)。'
        }},
        {img:cmImg('C','nbga',10),tx:{
          vi:'Job Name (tên Job đã chọn), Lot ID, Operator ID, Cycle Time (thời gian kiểm tra Tray của 3D Vision 1), Start Time, Running Time, Yield, UPH, và số lượng Total/Pass/Fail.',
          en:'Job Name (selected job name), Lot ID, Operator ID, Cycle Time (3D Vision 1 tray inspection time), Start Time, Running Time, Yield, UPH, and Total/Pass/Fail counts.',
          ko:'Job Name(선택된 Job 이름), Lot ID, Operator ID, Cycle Time(3D Vision 1 Tray 검사 시간), Start Time, Running Time, Yield, UPH, Total·Pass·Fail 수량.',
          zhCN:'Job Name(所选Job名称)、Lot ID、Operator ID、Cycle Time(3D Vision 1 Tray检测时间)、Start Time、Running Time、Yield、UPH、Total·Pass·Fail数量。',
          zhTW:'Job Name(所選Job名稱)、Lot ID、Operator ID、Cycle Time(3D Vision 1 Tray檢測時間)、Start Time、Running Time、Yield、UPH、Total·Pass·Fail數量。',
          ja:'Job Name(選択されたJob名)、Lot ID、Operator ID、Cycle Time(3D Vision 1 Tray検査時間)、Start Time、Running Time、Yield、UPH、Total・Pass・Fail数。'
        }},
        {img:cmImg('C','nbga',11),tx:{
          vi:'Tray (tiến độ Sorting theo thời gian thực), Door Status (trạng thái cửa hiện tại), Log (chi tiết Log thiết bị).',
          en:'Tray (real-time sorting progress), Door Status (current door state), Log (equipment log details).',
          ko:'Tray(실시간 Sorting 진행 상태), Door Status(현재 Door 상태), Log(설비 Log 상세).',
          zhCN:'Tray(实时Sorting进度)、Door Status(目前Door状态)、Log(设备Log详情)。',
          zhTW:'Tray(即時Sorting進度)、Door Status(目前Door狀態)、Log(設備Log詳情)。',
          ja:'Tray(リアルタイムSorting進捗)、Door Status(現在のDoor状態)、Log(設備Log詳細)。'
        }},
        {img:cmImg('C','nbga',12),tx:{
          vi:'Khu vực Vision — chuyển màn hình PC theo từng Vision, kiểm tra trạng thái kết nối chương trình Vision, và theo dõi ảnh kiểm tra; kết quả kiểm tra từng Pocket trên Tray; Vision Summary Yield (kết quả tổng hợp của 3D Vision 1, 3D Vision 2, 2D Vision); và Yield riêng của 3D Vision 1 / 3D Vision 2 / 2D Vision.',
          en:'Vision area — switch the PC screen per vision, check the vision program connection status, and monitor the inspection image; each pocket\'s inspection result on the tray; Vision Summary Yield (combined result of 3D Vision 1, 3D Vision 2, and 2D Vision); and individual 3D Vision 1 / 3D Vision 2 / 2D Vision Yield.',
          ko:'Vision 영역 — Vision별 PC 화면 전환, Vision Program 연결 상태 확인, 검사 이미지 모니터링; Tray의 Pocket별 검사 결과; Vision Summary Yield(3D Vision 1·3D Vision 2·2D Vision 결과 통합 표시); 3D Vision 1·3D Vision 2·2D Vision 개별 Yield.',
          zhCN:'Vision区域——切换各Vision的PC画面、确认Vision Program连接状态、监控检测影像;Tray各Pocket的检测结果;Vision Summary Yield(整合显示3D Vision 1、3D Vision 2、2D Vision的结果);3D Vision 1、3D Vision 2、2D Vision各自的Yield。',
          zhTW:'Vision區域——切換各Vision的PC畫面、確認Vision Program連接狀態、監控檢測影像;Tray各Pocket的檢測結果;Vision Summary Yield(整合顯示3D Vision 1、3D Vision 2、2D Vision的結果);3D Vision 1、3D Vision 2、2D Vision各自的Yield。',
          ja:'Vision領域——各VisionのPC画面切替、Vision Program接続状態確認、検査画像モニタリング;Tray各PocketのInspection結果;Vision Summary Yield(3D Vision 1・3D Vision 2・2D Visionの結果を統合表示);3D Vision 1・3D Vision 2・2D Visionそれぞれの個別Yield。'
        }},
        {img:cmImg('C','nbga',13),tx:{
          vi:'Operation — phần này đề cập đến Main Program: Host & Vision Main Software, Host & Vision Check Items, Host Operation UI và Handler Initialize.',
          en:'Operation — this section covers the Main Program: Host & Vision Main Software, Host & Vision Check Items, Host Operation UI, and Handler Initialize.',
          ko:'Operation — Main Program: Host & Vision Main Software, Host & Vision Check Items, Host Operation UI, Handler Initialize를 다룹니다.',
          zhCN:'Operation——本节介绍Main Program:Host & Vision Main Software、Host & Vision Check Items、Host Operation UI、Handler Initialize。',
          zhTW:'Operation——本節介紹Main Program:Host & Vision Main Software、Host & Vision Check Items、Host Operation UI、Handler Initialize。',
          ja:'Operation——本節ではMain Program:Host & Vision Main Software、Host & Vision Check Items、Host Operation UI、Handler Initializeを扱います。'
        }},
        {img:cmImg('C','nbga',14),tx:{
          vi:'Nhấn [Init Handler], sau đó nhấn [OK] để khởi tạo thiết bị.',
          en:'Click [Init Handler], then click [OK] to initialize the equipment.',
          ko:'[Init Handler]를 클릭하고 [OK]를 클릭해 설비를 초기화합니다.',
          zhCN:'点击[Init Handler],再点击[OK]以初始化设备。',
          zhTW:'點擊[Init Handler],再點擊[OK]以初始化設備。',
          ja:'[Init Handler]をクリックし、[OK]をクリックして設備を初期化します。'
        }},
        {img:cmImg('C','nbga',15),tx:{
          vi:'Đây là màn hình hoàn tất khởi tạo.',
          en:'This is the initialization-complete screen.',
          ko:'초기화 완료 화면입니다.',
          zhCN:'这是初始化完成画面。',
          zhTW:'這是初始化完成畫面。',
          ja:'初期化完了画面です。'
        }},
        {img:cmImg('C','nbga',16),tx:{
          vi:'Trước khi tiếp tục, hãy đảm bảo Tray đã được cố định vào TTM và TSM — có nguy cơ rơi khi Unclamp TTM/TSM. Cảnh báo xảy ra khi Picker của TSM hoặc TTM đang Clamp; nhấn Yes để Unclamp.',
          en:'Before proceeding, make sure the tray is secured to the TTM and TSM — there is a risk it could fall during a TTM/TSM unclamp. An alarm occurs when the TSM or TTM Picker is clamped; click Yes to unclamp.',
          ko:'진행 전 Tray가 TTM·TSM에 고정되어 있는지 확인합니다 — TTM·TSM Unclamp 시 Tray가 떨어질 위험이 있습니다. TSM 또는 TTM Picker가 Clamp된 상태에서 Alarm이 발생하면 Yes를 클릭해 Unclamp합니다.',
          zhCN:'进行前请确认Tray是否固定于TTM、TSM——TTM、TSM Unclamp时Tray有掉落风险。若TSM或TTM Picker处于Clamp状态而发生Alarm,请点击Yes进行Unclamp。',
          zhTW:'進行前請確認Tray是否固定於TTM、TSM——TTM、TSM Unclamp時Tray有掉落風險。若TSM或TTM Picker處於Clamp狀態而發生Alarm,請點擊Yes進行Unclamp。',
          ja:'進める前にTrayがTTM・TSMに固定されているか確認します——TTM・TSMのUnclamp時にTrayが落下する恐れがあります。TSMまたはTTM PickerがClamp状態でAlarmが発生した場合はYesをクリックしUnclampします。'
        }}
      ]
    }
  },
  D:{
    smtv:{
      title:{ko:'D. Recipe 운용',en:'D. Recipe Operation',zhCN:'D. Recipe運用',zhTW:'D. Recipe運用',ja:'D. Recipe運用'},
      slides:[
        {img:cmImg('D','smtv',1),tx:{
          vi:'Operation — phần này đề cập đến Run Inspection.',
          en:'Operation — this section covers Run Inspection.',
          ko:'Operation — Run Inspection을 다룹니다.',
          zhCN:'Operation——本节介绍Run Inspection。',
          zhTW:'Operation——本節介紹Run Inspection。',
          ja:'Operation——本節ではRun Inspectionを扱います。'
        }},
        {img:cmImg('D','smtv',2),tx:{
          vi:'2.3.1. Run Inspection — nhấn Log In, chọn cấp truy cập Operator, điền User ID và Password, sau đó nhấn OK.',
          en:'2.3.1. Run Inspection — click Log In, select the access level Operator, fill in the User ID and Password, then click OK.',
          ko:'2.3.1. Run Inspection — Log In을 클릭하고, Access Level을 Operator로 선택한 뒤 User ID·Password를 입력하고 OK를 클릭합니다.',
          zhCN:'2.3.1. Run Inspection——点击Log In,将Access Level选择为Operator,输入User ID、Password后点击OK。',
          zhTW:'2.3.1. Run Inspection——點擊Log In,將Access Level選擇為Operator,輸入User ID、Password後點擊OK。',
          ja:'2.3.1. Run Inspection——Log Inをクリックし、Access LevelをOperatorに選択、User ID・Passwordを入力してOKをクリックします。'
        }},
        {img:cmImg('D','smtv',3),tx:{
          vi:'Đặt Tray Unit cần kiểm tra lên Loader Stacker đầu tiên (ngoài cùng bên trái) như hình, và đặt Tray rỗng lên Stacker Empty thứ 2, thứ 3 và Reject Empty Stacker tính từ trái sang. Do trình tự của Handler, không thể nhấn Lot Start khi chưa nạp gì — hãy đặt sản phẩm lên Loader/Empty Stacker trước (phải đặt tối thiểu 6 Empty Tray vào Empty Stacker).',
          en:'Place the unit tray to be inspected on the first (leftmost) Loader Stacker as shown, and place empty trays on the 2nd and 3rd Empty Stackers and the Reject Empty Stacker from the left. Due to the Handler sequence, Lot Start cannot be clicked with nothing loaded — place product on the Loader/Empty Stacker first (at least 6 Empty Trays must be placed in the Empty Stacker).',
          ko:'그림처럼 검사할 Unit Tray를 맨 왼쪽 첫 번째 Loader Stacker에 놓고, Empty Tray는 왼쪽에서 2·3번째 Empty Stacker와 Reject Empty Stacker에 놓습니다. Handler Sequence 특성상 아무것도 없으면 Lot Start를 클릭할 수 없으므로, Loader·Empty Stacker에 제품을 올린 뒤 Lot Start를 클릭해야 합니다(Empty Stacker에 최소 6장의 Empty Tray 필요).',
          zhCN:'如图将待检测的Unit Tray放在最左侧第一个Loader Stacker上,Empty Tray则放在左侧第2、3个Empty Stacker及Reject Empty Stacker上。由于Handler Sequence的特性,若无任何物品则无法点击Lot Start——须先将产品放上Loader、Empty Stacker后才能点击Lot Start(Empty Stacker须放置至少6张Empty Tray)。',
          zhTW:'如圖將待檢測的Unit Tray放在最左側第一個Loader Stacker上,Empty Tray則放在左側第2、3個Empty Stacker及Reject Empty Stacker上。由於Handler Sequence的特性,若無任何物品則無法點擊Lot Start——須先將產品放上Loader、Empty Stacker後才能點擊Lot Start(Empty Stacker須放置至少6張Empty Tray)。',
          ja:'図のように検査対象のUnit Trayを一番左の最初のLoader Stackerに置き、Empty Trayは左から2・3番目のEmpty StackerとReject Empty Stackerに置きます。Handler Sequenceの特性上、何もない状態ではLot Startをクリックできません——Loader・Empty Stackerに製品を載せてからLot Startをクリックする必要があります(Empty Stackerには最低6枚のEmpty Trayが必要)。'
        }},
        {img:cmImg('D','smtv',4),tx:{
          vi:'Nhấn nút Job Open, chọn file Job, sau đó nhấn OK.',
          en:'Click the Job Open button, select the Job file, then click OK.',
          ko:'Job Open 버튼을 클릭해 Job File을 선택하고 OK를 클릭합니다.',
          zhCN:'点击Job Open按钮,选择Job File后点击OK。',
          zhTW:'點擊Job Open按鈕,選擇Job File後點擊OK。',
          ja:'Job Openボタンをクリックし、Job Fileを選択してOKをクリックします。'
        }},
        {img:cmImg('D','smtv',5),tx:{
          vi:'Sau khi nhấn Start, nhập Lot ID. Các tùy chọn gồm: kiểm tra Unit đã nạp sẵn và kết thúc Lot, hoặc cho phép nạp thêm Tray/tiếp tục; Sorting Unit theo kết quả kiểm tra hay không; và có lưu dữ liệu Debug 3D hay không.',
          en:'After clicking Start, enter the Lot ID. Options include: inspecting units already loaded and ending the Lot vs. allowing more trays to be inserted / continuing; sorting units by inspection result vs. not; and storing 3D debug data vs. not.',
          ko:'Start 클릭 후 Lot ID를 입력합니다. 옵션: Loader에 투입된 Unit만 검사하고 Lot 종료 vs. Tray 추가 투입 가능, 검사 결과에 따른 Unit Sorting 사용 vs. 미사용, 3D Debug Data 저장 vs. 미저장.',
          zhCN:'点击Start后输入Lot ID。选项包括:仅检测已投入Loader的Unit并结束Lot,或允许追加投入Tray;依检测结果进行Unit Sorting或不使用;保存3D Debug Data或不保存。',
          zhTW:'點擊Start後輸入Lot ID。選項包括:僅檢測已投入Loader的Unit並結束Lot,或允許追加投入Tray;依檢測結果進行Unit Sorting或不使用;儲存3D Debug Data或不儲存。',
          ja:'Startクリック後、Lot IDを入力します。オプション:Loaderに投入済みのUnitのみ検査してLotを終了 vs. Trayの追加投入を可能にする、検査結果によるUnit Sortingを使用 vs. 不使用、3D Debug Dataを保存 vs. 保存しない。'
        }},
        {img:cmImg('D','smtv',6),tx:{
          vi:'Khi Sensor phát hiện Tray của Loader Stacker kích hoạt, cửa sổ Pop-up này hiện ra: Yes = kết thúc Lot mà không nạp thêm Tray; No = nạp thêm Tray vào Loader Stacker, sau đó nhấn No để tiếp tục Lot.',
          en:'When the Loader Stacker\'s tray-sensing sensor triggers, this pop-up appears: Yes = end the Lot without inserting more trays; No = insert more trays into the Loader Stacker, then click No to keep the Lot running.',
          ko:'Loader Stacker의 Tray 감지 센서가 On되면 위 팝업이 나타납니다. [Yes]: 더 이상 Tray를 넣지 않고 Lot 종료. [No]: Loader Stacker에 Tray를 추가로 넣은 뒤 No를 클릭해 Lot을 유지.',
          zhCN:'当Loader Stacker的Tray感应传感器触发时,会出现此弹窗。[Yes]:不再放入Tray并结束Lot。[No]:向Loader Stacker追加放入Tray后点击No以维持Lot。',
          zhTW:'當Loader Stacker的Tray感應感測器觸發時,會出現此彈窗。[Yes]:不再放入Tray並結束Lot。[No]:向Loader Stacker追加放入Tray後點擊No以維持Lot。',
          ja:'Loader StackerのTray検知センサーがONになるとこのポップアップが表示されます。[Yes]:これ以上Trayを入れずLotを終了。[No]:Loader StackerにTrayを追加投入した後Noをクリックしてlotを継続。'
        }},
        {img:cmImg('D','smtv',7),tx:{
          vi:'Nhấn Lot Cancel để kết thúc Lot; xác nhận bằng cách nhấn Yes trong Pop-up nếu thực sự muốn kết thúc.',
          en:'Click Lot Cancel to end the Lot; confirm by clicking Yes in the pop-up if you really want to end it.',
          ko:'Lot을 종료하려면 Lot Cancel 버튼을 클릭합니다. 정말 종료하려면 팝업에서 Yes를 클릭합니다.',
          zhCN:'若要结束Lot,请点击Lot Cancel按钮。若确定要结束,请在弹窗中点击Yes。',
          zhTW:'若要結束Lot,請點擊Lot Cancel按鈕。若確定要結束,請在彈窗中點擊Yes。',
          ja:'Lotを終了するにはLot Cancelボタンをクリックします。本当に終了する場合はポップアップでYesをクリックします。'
        }},
        {img:cmImg('D','smtv',8),tx:{
          vi:'Empty Handler Start tự động lấy Tray còn sót lại trong thiết bị ra ngoài. Unclamp dùng để lấy Tray ra khỏi Module bằng chức năng Unclamp — Module hiển thị màu xanh là Module có Tray được Sensor phát hiện.',
          en:'Empty Handler Start automatically removes trays remaining in the equipment. Unclamp is used to remove a tray from a module via the unclamp function — modules shown in green have a tray detected by the sensor.',
          ko:'Empty Handler Start는 설비 내 남아있는 Tray를 자동으로 제거하는 기능입니다. Unclamp는 Unclamp 기능으로 특정 Module의 Tray를 제거할 때 사용하며, 녹색으로 표시된 Module은 센서에 Tray가 감지된 상태입니다.',
          zhCN:'Empty Handler Start是自动清除设备内残留Tray的功能。Unclamp用于以Unclamp功能移除特定Module上的Tray,绿色标示的Module表示传感器已侦测到Tray。',
          zhTW:'Empty Handler Start是自動清除設備內殘留Tray的功能。Unclamp用於以Unclamp功能移除特定Module上的Tray,綠色標示的Module表示感測器已偵測到Tray。',
          ja:'Empty Handler Startは設備内に残っているTrayを自動的に除去する機能です。Unclampは特定のModuleのTrayをUnclamp機能で取り除く際に使用し、緑色で表示されたModuleはセンサーがTrayを検知している状態です。'
        }}
      ]
    },
    nbga:{
      title:{ko:'D. Recipe 운용',en:'D. Recipe Operation',zhCN:'D. Recipe運用',zhTW:'D. Recipe運用',ja:'D. Recipe運用'},
      slides:[
        {img:cmImg('D','nbga',1),tx:{
          vi:'Operation — phần này đề cập đến Run Inspection.',
          en:'Operation — this section covers Run Inspection.',
          ko:'Operation — Run Inspection을 다룹니다.',
          zhCN:'Operation——本节介绍Run Inspection。',
          zhTW:'Operation——本節介紹Run Inspection。',
          ja:'Operation——本節ではRun Inspectionを扱います。'
        }},
        {img:cmImg('D','nbga',2),tx:{
          vi:'Nhấn [Log In], chọn cấp truy cập [operator], điền User ID và Password, sau đó nhấn OK.',
          en:'Click [Log In], select the access level [operator], fill in the User ID and Password, then click OK.',
          ko:'[Log In]을 클릭하고, Access Level을 [operator]로 선택한 뒤 User ID·Password를 입력하고 OK를 클릭합니다.',
          zhCN:'点击[Log In],将Access Level选择为[operator],输入User ID、Password后点击OK。',
          zhTW:'點擊[Log In],將Access Level選擇為[operator],輸入User ID、Password後點擊OK。',
          ja:'[Log In]をクリックし、Access Levelを[operator]に選択、User ID・Passwordを入力してOKをクリックします。'
        }},
        {img:cmImg('D','nbga',3),tx:{
          vi:'Nhấn [Init Handler], sau đó nhấn [OK] để khởi tạo thiết bị.',
          en:'Click [Init Handler], then click [OK] to initialize the equipment.',
          ko:'[Init Handler]를 클릭하고 [OK]를 클릭해 설비를 초기화합니다.',
          zhCN:'点击[Init Handler],再点击[OK]以初始化设备。',
          zhTW:'點擊[Init Handler],再點擊[OK]以初始化設備。',
          ja:'[Init Handler]をクリックし、[OK]をクリックして設備を初期化します。'
        }},
        {img:cmImg('D','nbga',4),tx:{
          vi:'Sau khi khởi tạo hoàn tất, kiểm tra trạng thái khởi tạo của Handler. Đóng tất cả cửa của thiết bị và nhấn [Inter Lock] để xác nhận cửa đã khóa.',
          en:'Once initialization is complete, check the Handler\'s initialization status. Close all doors on the equipment and click [Inter Lock] to confirm the doors are locked.',
          ko:'초기화가 완료되면 Handler의 초기화 상태를 확인합니다. 설비의 모든 Door를 닫고 [Inter Lock]을 클릭해 Door가 Lock되었는지 확인합니다.',
          zhCN:'初始化完成后,确认Handler的初始化状态。关闭设备所有Door后点击[Inter Lock],确认Door已锁定。',
          zhTW:'初始化完成後,確認Handler的初始化狀態。關閉設備所有Door後點擊[Inter Lock],確認Door已鎖定。',
          ja:'初期化が完了したら、Handlerの初期化状態を確認します。設備のすべてのDoorを閉め[Inter Lock]をクリックし、Doorがロックされているか確認します。'
        }},
        {img:cmImg('D','nbga',5),tx:{
          vi:'Đặt Tray Unit cần kiểm tra lên Loader Stacker đầu tiên (ngoài cùng bên trái) như hình, và Tray rỗng lên Empty Stacker thứ 2 tính từ trái sang. Do trình tự của Handler, không thể nhấn Lot Start khi chưa nạp gì — phải đặt tối thiểu 6 Empty Tray vào Empty Stacker.',
          en:'Place the unit tray to be inspected on the first (leftmost) Loader Stacker as shown, and the empty tray on the second Empty Stacker from the left. Due to the Handler sequence, Lot Start cannot be clicked with nothing loaded — at least 6 Empty Trays must be placed in the Empty Stacker.',
          ko:'그림처럼 검사할 Unit Tray를 맨 왼쪽 첫 번째 Loader Stacker에 놓고, Empty Tray는 왼쪽에서 두 번째 Empty Stacker에 놓습니다. Handler Sequence 특성상 아무것도 없으면 Lot Start를 클릭할 수 없으며, Empty Stacker에 최소 6장의 Empty Tray가 필요합니다.',
          zhCN:'如图将待检测的Unit Tray放在最左侧第一个Loader Stacker上,Empty Tray则放在左侧第二个Empty Stacker上。由于Handler Sequence的特性,若无任何物品则无法点击Lot Start,且Empty Stacker须放置至少6张Empty Tray。',
          zhTW:'如圖將待檢測的Unit Tray放在最左側第一個Loader Stacker上,Empty Tray則放在左側第二個Empty Stacker上。由於Handler Sequence的特性,若無任何物品則無法點擊Lot Start,且Empty Stacker須放置至少6張Empty Tray。',
          ja:'図のように検査対象のUnit Trayを一番左の最初のLoader Stackerに置き、Empty Trayは左から2番目のEmpty Stackerに置きます。Handler Sequenceの特性上、何もない状態ではLot Startをクリックできず、Empty Stackerには最低6枚のEmpty Trayが必要です。'
        }},
        {img:cmImg('D','nbga',6),tx:{
          vi:'Nhấn nút Job Open, chọn Job File, sau đó nhấn OK.',
          en:'Click the Job Open button, select the Job File, then click OK.',
          ko:'Job Open 버튼을 클릭해 Job File을 선택하고 OK를 클릭합니다.',
          zhCN:'点击Job Open按钮,选择Job File后点击OK。',
          zhTW:'點擊Job Open按鈕,選擇Job File後點擊OK。',
          ja:'Job Openボタンをクリックし、Job Fileを選択してOKをクリックします。'
        }},
        {img:cmImg('D','nbga',7),tx:{
          vi:'Sau khi nhấn Lot Start, nhập Lot ID. Các tùy chọn gồm: kiểm tra Unit đã nạp sẵn và kết thúc Lot, hoặc cho phép nạp thêm Tray/tiếp tục.',
          en:'After clicking Lot Start, enter the Lot ID. Options include: inspecting units already loaded and ending the Lot vs. allowing more trays to be inserted / continuing.',
          ko:'Lot Start 클릭 후 Lot ID를 입력합니다. 옵션: Loader에 투입된 Unit만 검사하고 Lot 종료 vs. Tray 추가 투입 가능.',
          zhCN:'点击Lot Start后输入Lot ID。选项包括:仅检测已投入Loader的Unit并结束Lot,或允许追加投入Tray。',
          zhTW:'點擊Lot Start後輸入Lot ID。選項包括:僅檢測已投入Loader的Unit並結束Lot,或允許追加投入Tray。',
          ja:'Lot Startクリック後、Lot IDを入力します。オプション:Loaderに投入済みのUnitのみ検査してLotを終了 vs. Trayの追加投入を可能にする。'
        }},
        {img:cmImg('D','nbga',8),tx:{
          vi:'Khi Sensor phát hiện Tray của Loader Stacker kích hoạt, cửa sổ Pop-up này hiện ra: Yes = kết thúc Lot mà không nạp thêm Tray; No = nạp thêm Tray vào Loader Stacker, sau đó nhấn No để tiếp tục Lot.',
          en:'When the Loader Stacker\'s tray-sensing sensor triggers, this pop-up appears: Yes = end the Lot without inserting more trays; No = insert more trays into the Loader Stacker, then click No to keep the Lot running.',
          ko:'Loader Stacker의 Tray 감지 센서가 On되면 위 팝업이 나타납니다. [Yes]: 더 이상 Tray를 넣지 않고 Lot 종료. [No]: Loader Stacker에 Tray를 추가로 넣은 뒤 No를 클릭해 Lot을 유지.',
          zhCN:'当Loader Stacker的Tray感应传感器触发时,会出现此弹窗。[Yes]:不再放入Tray并结束Lot。[No]:向Loader Stacker追加放入Tray后点击No以维持Lot。',
          zhTW:'當Loader Stacker的Tray感應感測器觸發時,會出現此彈窗。[Yes]:不再放入Tray並結束Lot。[No]:向Loader Stacker追加放入Tray後點擊No以維持Lot。',
          ja:'Loader StackerのTray検知センサーがONになるとこのポップアップが表示されます。[Yes]:これ以上Trayを入れずLotを終了。[No]:Loader StackerにTrayを追加投入した後Noをクリックしてlotを継続。'
        }},
        {img:cmImg('D','nbga',9),tx:{
          vi:'Nhấn nút Lot Cancel ở trên khi cần kết thúc Lot; xác nhận bằng cách nhấn Yes trong Pop-up nếu thực sự muốn dừng.',
          en:'Click the Lot Cancel button above when the Lot must be terminated; confirm by clicking Yes in the pop-up if you really want to quit.',
          ko:'Lot을 종료해야 하는 상황이면 위의 Lot Cancel 버튼을 클릭합니다. 정말 종료하려면 팝업에서 Yes를 클릭합니다.',
          zhCN:'若须结束Lot,请点击上方的Lot Cancel按钮。若确定要结束,请在弹窗中点击Yes。',
          zhTW:'若須結束Lot,請點擊上方的Lot Cancel按鈕。若確定要結束,請在彈窗中點擊Yes。',
          ja:'Lotを終了しなければならない場合は上のLot Cancelボタンをクリックします。本当に終了する場合はポップアップでYesをクリックします。'
        }},
        {img:cmImg('D','nbga',10),tx:{
          vi:'Empty Handler tự động lấy Tray còn sót lại trong thiết bị ra ngoài. Unclamp dùng để lấy Tray ra khỏi Module bằng chức năng Unclamp (áp dụng cho Tray Sorter và Tray Transfer) — Module hiển thị màu xanh là Module có Tray được phát hiện.',
          en:'Empty Handler automatically removes trays remaining in the equipment. Unclamp is used to remove a tray from a module via the unclamp function (applies to Tray Sorter and Tray Transfer) — modules shown in green have a tray detected.',
          ko:'Empty Handler는 설비 내 남아있는 Tray를 자동으로 제거합니다. Unclamp는 Unclamp 기능으로 Module의 Tray를 제거할 때 사용하며(Tray Sorter·Tray Transfer 해당), 녹색으로 표시된 Module은 Tray가 감지된 상태입니다.',
          zhCN:'Empty Handler会自动清除设备内残留的Tray。Unclamp用于以Unclamp功能移除Module上的Tray(适用于Tray Sorter、Tray Transfer),绿色标示的Module表示已侦测到Tray。',
          zhTW:'Empty Handler會自動清除設備內殘留的Tray。Unclamp用於以Unclamp功能移除Module上的Tray(適用於Tray Sorter、Tray Transfer),綠色標示的Module表示已偵測到Tray。',
          ja:'Empty Handlerは設備内に残っているTrayを自動的に除去します。UnclampはUnclamp機能でModuleのTrayを取り除く際に使用し(Tray Sorter・Tray Transferが該当)、緑色で表示されたModuleはTrayが検知されている状態です。'
        }}
      ]
    }
  }
  /* NBGA 등 다른 설비군 자료는 아래에 이어서 추가 */
};

/* ── 뷰어 상태 및 렌더링 ── mw()/cm()(app.js)와 기존 prelearn용 슬라이드 CSS(style.css의
   .pl-slidewrap/.pl-slideimg/.pl-explain/.pl-en/.pl-nav)를 그대로 재사용한다. */
var CM={code:null,equip:null,idx:0};
function _cmTx(obj){if(!obj)return '';var k=langKey();return obj[k]||obj.en||'';}

/* ── 음성 설명(TTS) — Google Cloud Text-to-Speech로 미리 생성해둔 mp3 파일을 재생한다
   (관련 자료/<설비군>/<모듈코드>/audio/slide-NNN-<언어>.mp3, 슬라이드 순번 NNN은 1부터
   시작하는 slides 배열 인덱스+1과 그대로 대응). 브라우저가 그때그때 기계 합성음을 읽어주는
   방식이 아니라, 미리 만들어둔 자연스러운 음성 파일을 재생만 하는 방식이라 품질이 좋다. */
var CM_SPEAK_LABEL={ko:'🔊 읽어주기',en:'🔊 Read Aloud',zhCN:'🔊 朗读',zhTW:'🔊 朗讀',ja:'🔊 読み上げ',vi:'🔊 Đọc to'};
var CM_STOP_LABEL={ko:'⏹ 정지',en:'⏹ Stop',zhCN:'⏹ 停止',zhTW:'⏹ 停止',ja:'⏹ 停止',vi:'⏹ Dừng'};
/* ── 챕터 네비게이션 — 슬라이드 단위 이전/다음과 별개로, 특정 챕터로 바로 이동하거나
   이전/다음 챕터로 건너뛸 수 있다. mat.chapters가 없는 모듈(자료가 짧아 챕터 구분이
   필요 없는 경우)은 자동으로 "전체" 챕터 1개로 취급되어 네비 UI 자체가 숨겨진다. */
var CM_CHAPTER_NAV_LABEL={
  ko:{prev:'◀ 이전 챕터',next:'다음 챕터 ▶'},
  en:{prev:'◀ Prev Chapter',next:'Next Chapter ▶'},
  zhCN:{prev:'◀ 上一章',next:'下一章 ▶'},
  zhTW:{prev:'◀ 上一章',next:'下一章 ▶'},
  ja:{prev:'◀ 前の章',next:'次の章 ▶'},
  vi:{prev:'◀ Chương trước',next:'Chương tiếp ▶'}
};
function cmChapterList(mat){
  if(mat.chapters&&mat.chapters.length)return mat.chapters;
  return [{title:{ko:'전체',en:'All',zhCN:'全部',zhTW:'全部',ja:'すべて',vi:'Tất cả'},from:1}];
}
function cmChapterIdxAt(mat,slideIdx){
  var chs=cmChapterList(mat),found=0;
  for(var i=0;i<chs.length;i++){if(chs[i].from-1<=slideIdx)found=i;else break;}
  return found;
}
function cmGotoChapter(fromIdx){CM.idx=fromIdx-1;renderMaterialViewer();}
function cmPrevChapter(){
  var mat=COURSE_MATERIALS[CM.code]&&COURSE_MATERIALS[CM.code][CM.equip];
  if(!mat)return;
  var chs=cmChapterList(mat),ci=cmChapterIdxAt(mat,CM.idx);
  if(ci>0)cmGotoChapter(chs[ci-1].from);
}
function cmNextChapter(){
  var mat=COURSE_MATERIALS[CM.code]&&COURSE_MATERIALS[CM.code][CM.equip];
  if(!mat)return;
  var chs=cmChapterList(mat),ci=cmChapterIdxAt(mat,CM.idx);
  if(ci<chs.length-1)cmGotoChapter(chs[ci+1].from);
}
var CM_SPEAKING=false;
var CM_AUDIO_EL=null;
function cmAudioPath(code,equip,n,lang){return '관련 자료/'+(CM_EQUIP_LABEL[equip]||equip)+'/'+code+'/audio/slide-'+String(n).padStart(3,'0')+'-'+lang+'.mp3';}
function cmToggleSpeak(){
  if(CM_SPEAKING){cmStopSpeak();return;}
  cmPlay(false);
}
/* silent=true: 슬라이드 진입 시 자동 재생용 — 파일이 없어도 alert로 방해하지 않는다.
   silent=false: 버튼을 직접 눌러서 재생하는 경우 — 실패하면 alert로 알려준다. */
function cmPlay(silent){
  var path=cmAudioPath(CM.code,CM.equip,CM.idx+1,langKey());
  CM_AUDIO_EL=new Audio(path);
  CM_AUDIO_EL.onended=function(){CM_SPEAKING=false;_cmUpdateSpeakBtn();};
  CM_AUDIO_EL.onerror=function(){
    CM_SPEAKING=false;_cmUpdateSpeakBtn();
    if(!silent)alert('음성 파일을 찾을 수 없거나 재생할 수 없습니다.');
  };
  CM_AUDIO_EL.play().catch(function(){CM_SPEAKING=false;_cmUpdateSpeakBtn();});
  CM_SPEAKING=true;
  _cmUpdateSpeakBtn();
}
function cmStopSpeak(){
  if(CM_AUDIO_EL){CM_AUDIO_EL.pause();CM_AUDIO_EL.currentTime=0;CM_AUDIO_EL=null;}
  CM_SPEAKING=false;
  _cmUpdateSpeakBtn();
}
function _cmUpdateSpeakBtn(){
  var btn=document.getElementById('cmSpeakBtn');
  if(!btn)return;
  btn.textContent=CM_SPEAKING?(CM_STOP_LABEL[langKey()]||CM_STOP_LABEL.en):(CM_SPEAK_LABEL[langKey()]||CM_SPEAK_LABEL.en);
}
function cmClose(){cmStopSpeak();cm();}

function openMaterialViewer(code,equip){
  CM.code=code;CM.equip=equip;CM.idx=0;
  renderMaterialViewer();
}
function renderMaterialViewer(){
  cmStopSpeak(); // 슬라이드/언어가 바뀌면 재생 중이던 음성은 멈춘다
  var mat=COURSE_MATERIALS[CM.code]&&COURSE_MATERIALS[CM.code][CM.equip];
  if(!mat)return;
  var slide=mat.slides[CM.idx];
  var langOpts=LANGS.map(function(l){return '<option value="'+l.id+'"'+(l.id===getLang()?' selected':'')+'>'+esc(l.label)+'</option>';}).join('');
  var chs=cmChapterList(mat);
  var curCh=cmChapterIdxAt(mat,CM.idx);
  var chNavLbl=CM_CHAPTER_NAV_LABEL[langKey()]||CM_CHAPTER_NAV_LABEL.en;
  mw(
    '<div style="display:flex;justify-content:space-between;align-items:center;gap:16px">'
      +'<div class="mtit" style="margin-bottom:0;flex:1 1 auto">'+esc(_cmTx(mat.title))+' — '+esc(CM_EQUIP_LABEL[CM.equip]||CM.equip.toUpperCase())+'</div>'
      +'<div style="display:flex;align-items:center;gap:6px;flex-shrink:0;white-space:nowrap">'
        +'<span style="font-size:12px;color:var(--tx-second)">'+esc(CM_LANG_LABEL[langKey()]||CM_LANG_LABEL.en)+':</span>'
        +'<select onchange="cmSetLang(this.value)" style="width:auto">'+langOpts+'</select>'
      +'</div>'
    +'</div>'
    +'<div class="pl-slidewrap" style="margin-top:14px"><img src="'+slide.img+'" class="pl-slideimg" alt="slide"></div>'
    +(_cmTx(slide.tx)?('<div class="pl-explain"><div class="pl-en">'+esc(_cmTx(slide.tx)).replace(/\n/g,'<br>')+'</div></div>'):'')
    +(_cmTx(slide.tx)?('<div style="margin:10px 0;text-align:center"><button class="btn sm" id="cmSpeakBtn" onclick="cmToggleSpeak()">'+esc(CM_SPEAK_LABEL[langKey()]||CM_SPEAK_LABEL.en)+'</button></div>'):'')
    +'<div class="pl-nav">'
      +'<button class="btn" onclick="cmPrev()" '+(CM.idx===0?'disabled':'')+'>← 이전</button>'
      +'<span style="font-size:11px;color:var(--tx-faint)">'+(CM.idx+1)+' / '+mat.slides.length+'</span>'
      +'<button class="btn" onclick="cmNext()" '+(CM.idx===mat.slides.length-1?'disabled':'')+'>다음 →</button>'
    +'</div>'
    +(chs.length>1?(
      '<div class="pl-nav" style="margin-top:6px;flex-wrap:wrap">'
        +'<button class="btn sm" onclick="cmPrevChapter()" '+(curCh===0?'disabled':'')+'>'+esc(chNavLbl.prev)+'</button>'
        +'<select onchange="cmGotoChapter(parseInt(this.value))" style="width:auto;max-width:240px">'
          +chs.map(function(ch,i){return '<option value="'+ch.from+'"'+(i===curCh?' selected':'')+'>'+esc(_cmTx(ch.title))+'</option>';}).join('')
        +'</select>'
        +'<button class="btn sm" onclick="cmNextChapter()" '+(curCh===chs.length-1?'disabled':'')+'>'+esc(chNavLbl.next)+'</button>'
      +'</div>'
    ):'')
    +'<div class="mfoot"><button class="btn pri" onclick="cmClose()">닫기</button></div>'
  ,true);
  // 슬라이드에 진입/이동할 때마다 현재 언어로 자동 재생 (이전 슬라이드 음성은 위 cmStopSpeak()로 이미 정지됨)
  if(_cmTx(slide.tx))cmPlay(true);
}
function cmPrev(){if(CM.idx>0){CM.idx--;renderMaterialViewer();}}
function cmNext(){
  var mat=COURSE_MATERIALS[CM.code]&&COURSE_MATERIALS[CM.code][CM.equip];
  if(mat&&CM.idx<mat.slides.length-1){CM.idx++;renderMaterialViewer();}
}
function cmSetLang(l){setLang(l);renderMaterialViewer();}
