/* ===============================================
   사전 선행학습 콘텐츠 데이터 (SMTV)
   출처: iSIS-SMTV_Level 00~01 Training Manual_EN.pptx (116 slides)
=============================================== */
function pnS(n){return 'prelearn-slides/smtv/slide-'+String(n).padStart(3,'0')+'.jpg';}
function slS(n,tx){return {n:n,img:pnS(n),tx:tx};}
function dividerS(n){return {n:n,img:pnS(n),tx:null,isDivider:true};}
var IMG_ONLY_TX_SMTV={ko:'위 이미지에 표시된 부품 명칭을 확인하세요.',en:'Refer to the labeled parts in the image above.',zhCN:'请参考上方图片中标注的部件名称。',zhTW:'請參考上方圖片中標註的零件名稱。',ja:'上の画像に表示された部品名称を確認してください。'};
function imgOnlyS(n,suffix){
  if(!suffix){return {ko:IMG_ONLY_TX_SMTV.ko,en:IMG_ONLY_TX_SMTV.en,zhCN:IMG_ONLY_TX_SMTV.zhCN,zhTW:IMG_ONLY_TX_SMTV.zhTW,ja:IMG_ONLY_TX_SMTV.ja};}
  return {ko:IMG_ONLY_TX_SMTV.ko+' '+suffix.ko,en:IMG_ONLY_TX_SMTV.en+' '+suffix.en,zhCN:IMG_ONLY_TX_SMTV.zhCN+' '+suffix.zhCN,zhTW:IMG_ONLY_TX_SMTV.zhTW+' '+suffix.zhTW,ja:IMG_ONLY_TX_SMTV.ja+' '+suffix.ja};
}

var PRELEARN_CHAPTERS_SMTV=[
{code:'1',title:{ko:'1장. 설비 소개 (Level 0)',en:'Chapter 1. Introduce',zhCN:'第1章 设备介绍 (Level 0)',zhTW:'第1章 設備介紹 (Level 0)',ja:'第1章 設備紹介 (Level 0)'},
 sections:[
  {code:'1.1.1',title:{ko:'설비 소개 및 검사 항목',en:'Introduction & Inspection Items',zhCN:'设备介绍及检测项目',zhTW:'設備介紹及檢測項目',ja:'設備紹介及び検査項目'},slides:[
    dividerS(4),
    slS(5,{
      en:'iSIS-SMTV is a Bump-AOI equipment. For thickness valuation inspection, 3D is measured on a suction jig with precise flatness.\n\nInspection target: FC-BGA, FC-CSP\nInspection items: Bump Height, Bump Area, Warpage, Bump Coplanarity, Bump Diameter, Bump Missing, Bump Bridge, Foreign material, Scratch, Thickness Valuation, Etc.',
      ko:'iSIS-SMTV는 Bump-AOI 설비입니다. Thickness Valuation 검사를 위해, 3D는 정밀한 평탄도의 Suction Jig 위에서 측정됩니다.\n\n검사 대상: FC-BGA, FC-CSP\n검사 항목: Bump Height, Bump Area, Warpage, Bump Coplanarity, Bump Diameter, Bump Missing, Bump Bridge, 이물, 스크래치, Thickness Valuation 등',
      zhCN:'iSIS-SMTV是一款Bump-AOI(凸块外观检测)设备。为进行Thickness Valuation(厚度评估)检测,需在具有精密平面度的Suction Jig(吸附治具)上测量3D数据。\n\n检测对象:FC-BGA、FC-CSP\n检测项目:Bump Height(凸块高度)、Bump Area(凸块面积)、Warpage(翘曲)、Bump Coplanarity(凸块共面度)、Bump Diameter(凸块直径)、Bump Missing(凸块缺失)、Bump Bridge(凸块桥连)、异物、划伤、Thickness Valuation(厚度评估)等',
      zhTW:'iSIS-SMTV是一款Bump-AOI(凸塊外觀檢測)設備。為進行Thickness Valuation(厚度評估)檢測,需在具有精密平面度的Suction Jig(吸附治具)上測量3D資料。\n\n檢測對象:FC-BGA、FC-CSP\n檢測項目:Bump Height(凸塊高度)、Bump Area(凸塊面積)、Warpage(翹曲)、Bump Coplanarity(凸塊共面度)、Bump Diameter(凸塊直徑)、Bump Missing(凸塊缺失)、Bump Bridge(凸塊橋接)、異物、刮傷、Thickness Valuation(厚度評估)等',
      ja:'iSIS-SMTVはBump-AOI設備です。Thickness Valuation検査のため、精密な平面度を持つSuction Jig(吸着治具)上で3Dを測定します。\n\n検査対象:FC-BGA、FC-CSP\n検査項目:Bump Height、Bump Area、Warpage、Bump Coplanarity、Bump Diameter、Bump Missing、Bump Bridge、異物、スクラッチ、Thickness Valuation等'
    })
  ]},
  {code:'1.1.2',title:{ko:'검사 원리 (WSI 간섭계측)',en:'Inspection Principle',zhCN:'检测原理 (WSI干涉测量)',zhTW:'檢測原理 (WSI干涉測量)',ja:'検査原理 (WSI干渉計測)'},slides:[
    dividerS(6),
    slS(7,{
      en:'A light source for inspection using WSI is suitable for light having single frequency and coherent. If you use inconsistent light, you cannot see interference.',
      ko:'WSI를 이용한 검사를 하기 위한 광원은 단일 파장과 일관성을 갖는 빛이 적합하다. 만약 일관성 없는 빛을 사용한다면, 우리는 간섭을 볼 수 없다.',
      zhCN:'使用WSI进行检测的光源应为单一波长且具有相干性的光。若使用不相干的光,则无法观察到干涉现象。',
      zhTW:'使用WSI進行檢測的光源應為單一波長且具有相干性的光。若使用不相干的光,則無法觀察到干涉現象。',
      ja:'WSIを利用した検査を行うための光源は、単一波長かつ可干渉性(コヒーレント)を持つ光が適している。もし一貫性のない光を使用すると、干渉を確認することができない。'
    }),
    slS(8,{
      en:'In the interference experiment using monochromatic light as a light source, the light becomes stronger where the crests overlap, and weaker where the crest and trough overlap. As a result, the lightest and darkest parts alternately appear, resulting in an interference pattern.',
      ko:'단색광을 광원으로 사용해서 간섭 실험을 하면, 마루와 마루가 겹치는 곳에서는 빛이 강해지고, 골과 골이 겹치는 곳에서는 빛이 약해진다. 그 결과, 빛이 가장 밝은 부분과 가장 어두운 부분이 번갈아 나타나게 되어 간섭 무늬가 생긴다.',
      zhCN:'使用单色光作为光源进行干涉实验时,波峰与波峰重叠处光会增强,波峰与波谷重叠处光会减弱。因此,最亮和最暗的部分交替出现,形成干涉条纹。',
      zhTW:'使用單色光作為光源進行干涉實驗時,波峰與波峰重疊處光會增強,波峰與波谷重疊處光會減弱。因此,最亮和最暗的部分交替出現,形成干涉條紋。',
      ja:'単色光を光源として干渉実験を行うと、山と山が重なる箇所では光が強くなり、山と谷が重なる箇所では光が弱くなる。その結果、最も明るい部分と最も暗い部分が交互に現れ、干渉縞が生じる。'
    }),
    slS(9,{
      en:'Use a single light source (LED, Laser) to generate a beam and split it into two beams via a beam splitter. When the beams reflected at the same distance (d1=d2) are synthesized into one beam, an interference pattern due to constructive and destructive interference may be checked. This method can obtain data by performing contactless measurement on the sample surface.',
      ko:'단일 광원(LED, Laser)을 사용하여 빔을 생성하고, B/S를 통해 두 개의 빔을 생성한다. 동일한 거리(d1=d2)에서 반사된 빔을 한 개의 빔으로 합성하였을 때 보강·상쇄 간섭에 의한 간섭무늬를 확인할 수 있다. 이 방법은 시료 표면에 대한 비접촉 측정을 하여 데이터를 얻을 수 있다.',
      zhCN:'使用单一光源(LED、激光)产生光束,并通过分光镜(B/S)生成两束光。当在相同距离(d1=d2)反射的光束合成为一束时,可确认由相长与相消干涉产生的干涉条纹。此方法可对试样表面进行非接触测量以获取数据。',
      zhTW:'使用單一光源(LED、雷射)產生光束,並透過分光鏡(B/S)生成兩束光。當在相同距離(d1=d2)反射的光束合成為一束時,可確認由相長與相消干涉產生的干涉條紋。此方法可對試樣表面進行非接觸測量以獲取數據。',
      ja:'単一光源(LED、レーザー)を使用してビームを生成し、B/S(ビームスプリッター)を通じて2つのビームを生成する。同一距離(d1=d2)で反射したビームを1つのビームに合成すると、建設的・破壊的干渉による干渉縞を確認できる。この方法は試料表面に対して非接触測定を行うことでデータを得ることができる。'
    }),
    slS(10,{
      en:'It is an interference pattern with the inspection method. 3D Z-map is made through the signal strength of the pattern.',
      ko:'검사 방법과 실제 간섭무늬 패턴이다. 패턴의 신호 세기를 통해 3D Z-Map을 생성한다.',
      zhCN:'这是检测方法所对应的干涉条纹图案。通过条纹的信号强度生成3D Z-Map。',
      zhTW:'這是檢測方法所對應的干涉條紋圖案。透過條紋的訊號強度生成3D Z-Map。',
      ja:'検査方法と実際の干渉縞パターンである。パターンの信号強度を通じて3D Z-Mapを生成する。'
    })
  ]},
  {code:'1.2.1',title:{ko:'설비 사양',en:'Machine Spec',zhCN:'设备规格',zhTW:'設備規格',ja:'設備仕様'},slides:[
    dividerS(11),
    slS(12,{
      en:'Specification #1 — Electric Phase: Three phase / Electric Voltage: AC 220V or 208V / Electric Current: 50/60A / Electric KVA: 22.8KVA / UPS: Host PC only / Certification: CE Mark / Air(CDA): Dry air 5~6kgf/cm2, Air Hose 12Φ x 2ea / Air consumption: 1500 L/min / Weight: 4800kg(4.8 ton) / Size: 3880(W) x 2010(D) x 2480(H) mm.',
      ko:'규격 #1 — 전기 상: 3상 / 전압: AC 220V 또는 208V / 전류: 50/60A / 용량: 22.8KVA / UPS: Host PC 전용 / 인증: CE Mark / 공압(CDA): 5~6kgf/cm2, 에어호스 12Φ x 2ea / 공압 소모량: 1500 L/min / 중량: 4800kg / 크기: 3880(W)x2010(D)x2480(H)mm',
      zhCN:'规格#1 — 电源相数:三相 / 电压:AC 220V或208V / 电流:50/60A / 容量:22.8KVA / UPS:仅供Host PC使用 / 认证:CE Mark / 空压(CDA):干燥空气5~6kgf/cm2,气管12Φ x 2个 / 空气消耗量:1500 L/min / 重量:4800kg(4.8吨) / 尺寸:3880(W) x 2010(D) x 2480(H) mm。',
      zhTW:'規格#1 — 電源相數:三相 / 電壓:AC 220V或208V / 電流:50/60A / 容量:22.8KVA / UPS:僅供Host PC使用 / 認證:CE Mark / 空壓(CDA):乾燥空氣5~6kgf/cm2,氣管12Φ x 2個 / 空氣消耗量:1500 L/min / 重量:4800kg(4.8噸) / 尺寸:3880(W) x 2010(D) x 2480(H) mm。',
      ja:'仕様#1 — 電源相数:三相 / 電圧:AC 220Vまたは208V / 電流:50/60A / 容量:22.8KVA / UPS:Host PC専用 / 認証:CE Mark / air(CDA):ドライエア5~6kgf/cm2、エアホース12Φ x 2本 / エア消費量:1500 L/min / 重量:4800kg(4.8トン) / サイズ:3880(W) x 2010(D) x 2480(H) mm。'
    }),
    slS(13,{
      en:'Specification #2 — Rail: 7 Rail System (Input: Loader/Empty/Reject Empty, Output: Good/Buffer/Reject1,2) / Tray Stacker: Input Tray 45장(JEDEC 규격) / Number of Vision: 3D Vision 2 SET, 2D Vision 1 SET / Tray Indexer: Dual Loader Index / Tray Transfer: Tray stack 상태 확인 / Loading·Unloading Picker: 6 Picker / Sorting Picker: 2-Picker.',
      ko:'규격 #2 — Rail: 7 Rail 시스템(Input: Loader/Empty/Reject Empty, Output: Good/Buffer/Reject1,2) / Tray Stacker: 45장(JEDEC 규격) / Vision 수량: 3D Vision 2식, 2D Vision 1식 / Tray Indexer: Dual Loader Index / Loading·Unloading Picker: 6 Picker / Sorting Picker: 2-Picker',
      zhCN:'规格#2 — Rail(轨道):7 Rail系统(Input:Loader/Empty/Reject Empty,Output:Good/Buffer/Reject1,2) / Tray Stacker(托盘堆栈器):45片(JEDEC规格) / Vision数量:3D Vision 2组,2D Vision 1组 / Tray Indexer:Dual Loader Index(双Loader分度器) / Loading·Unloading Picker:6 Picker / Sorting Picker:2-Picker。',
      zhTW:'規格#2 — Rail(軌道):7 Rail系統(Input:Loader/Empty/Reject Empty,Output:Good/Buffer/Reject1,2) / Tray Stacker(托盤堆疊器):45片(JEDEC規格) / Vision數量:3D Vision 2組,2D Vision 1組 / Tray Indexer:Dual Loader Index(雙Loader分度器) / Loading·Unloading Picker:6 Picker / Sorting Picker:2-Picker。',
      ja:'仕様#2 — Rail:7 Railシステム(Input:Loader/Empty/Reject Empty、Output:Good/Buffer/Reject1,2) / Tray Stacker:45枚(JEDEC規格) / Vision数量:3D Vision 2セット、2D Vision 1セット / Tray Indexer:Dual Loader Index / Loading·Unloading Picker:6 Picker / Sorting Picker:2-Picker。'
    }),
    slS(14,{
      en:'Dimensions (Front/Right view) — Customer: ATNS, NANYA. W3880 x D2010 x H2118/2390/2070mm.',
      ko:'치수(정면/우측면) — 고객사: ATNS, NANYA',
      zhCN:'尺寸(正视图/右视图) — 客户:ATNS、NANYA。W3880 x D2010 x H2118/2390/2070mm。',
      zhTW:'尺寸(正視圖/右視圖) — 客戶:ATNS、NANYA。W3880 x D2010 x H2118/2390/2070mm。',
      ja:'寸法(正面図/右側面図) — 顧客:ATNS、NANYA。W3880 x D2010 x H2118/2390/2070mm。'
    }),
    slS(15,{
      en:'Dimensions (Front/Right view) — Customer: SEMV, SEMCO. W3880 x D2010 x H2550/2390/2070mm.',
      ko:'치수(정면/우측면) — 고객사: SEMV, SEMCO',
      zhCN:'尺寸(正视图/右视图) — 客户:SEMV、SEMCO。W3880 x D2010 x H2550/2390/2070mm。',
      zhTW:'尺寸(正視圖/右視圖) — 客戶:SEMV、SEMCO。W3880 x D2010 x H2550/2390/2070mm。',
      ja:'寸法(正面図/右側面図) — 顧客:SEMV、SEMCO。W3880 x D2010 x H2550/2390/2070mm。'
    })
  ]},
  {code:'1.2.2',title:{ko:'카메라 사양',en:'Camera Spec',zhCN:'相机规格',zhTW:'相機規格',ja:'カメラ仕様'},slides:[
    dividerS(16),
    slS(17,{
      en:'3D Vision Specification (12M, Cube B/S type) — Camera: 12M Pixel(4K x 3K) 330fps CXP / Lens: x1.0 Telecentric(5.5um) / F.O.V: 22x16.5mm / Scan Range: 250um(PZT, PI) or 300um(NanoFaktur), 5mm(Z-Axis) / AF: Optical Triangulation / Accuracy: <1um / Repeatability: <1um.',
      ko:'3D Vision 사양(12M, Cube B/S 타입) — 카메라 12M Pixel(4Kx3K) 330fps CXP, 렌즈 x1.0 Telecentric(5.5um), F.O.V 22x16.5mm, 정확도 <1um',
      zhCN:'3D Vision规格(12M,Cube B/S型) — 相机:12M像素(4K x 3K) 330fps CXP / 镜头:x1.0远心镜头(5.5um) / F.O.V:22x16.5mm / 扫描范围:250um(PZT, PI)或300um(NanoFaktur),5mm(Z轴) / AF:光学三角测量法 / 精度:<1um / 重复精度:<1um。',
      zhTW:'3D Vision規格(12M,Cube B/S型) — 相機:12M像素(4K x 3K) 330fps CXP / 鏡頭:x1.0遠心鏡頭(5.5um) / F.O.V:22x16.5mm / 掃描範圍:250um(PZT, PI)或300um(NanoFaktur),5mm(Z軸) / AF:光學三角測量法 / 精度:<1um / 重複精度:<1um。',
      ja:'3D Vision仕様(12M、Cube B/Sタイプ) — カメラ:12M Pixel(4K x 3K) 330fps CXP / レンズ:x1.0テレセントリック(5.5um) / F.O.V:22x16.5mm / スキャン範囲:250um(PZT, PI)または300um(NanoFaktur)、5mm(Z軸) / AF:光学三角測量方式 / 精度:<1um / 再現性:<1um。'
    }),
    slS(18,{
      en:'3D Vision Specification (12M, Flat B/S type) — same core spec as Cube type (12M Pixel, x1.0 Telecentric Lens, F.O.V 22x16.5mm), different beam-splitter mechanical form.',
      ko:'3D Vision 사양(12M, Flat B/S 타입) — Cube 타입과 핵심 사양은 동일하며 Beam Splitter 형태만 다릅니다.',
      zhCN:'3D Vision规格(12M,Flat B/S型) — 核心规格与Cube型相同(12M像素、x1.0远心镜头、F.O.V 22x16.5mm),仅分光镜(Beam Splitter)结构形式不同。',
      zhTW:'3D Vision規格(12M,Flat B/S型) — 核心規格與Cube型相同(12M像素、x1.0遠心鏡頭、F.O.V 22x16.5mm),僅分光鏡(Beam Splitter)結構形式不同。',
      ja:'3D Vision仕様(12M、Flat B/Sタイプ) — Cubeタイプと核心仕様は同一(12M Pixel、x1.0テレセントリックレンズ、F.O.V 22x16.5mm)で、ビームスプリッターの形状のみ異なります。'
    }),
    slS(19,{
      en:'3D Vision Specification (25M, Cube B/S type) — Camera: 25M Pixel(5K x 5K) 150fps CXP / Lens: x0.75 Telecentric(3.3um) / F.O.V: 17.1x17.1mm.',
      ko:'3D Vision 사양(25M, Cube B/S 타입) — 카메라 25M Pixel(5Kx5K) 150fps CXP, 렌즈 x0.75 Telecentric(3.3um), F.O.V 17.1x17.1mm',
      zhCN:'3D Vision规格(25M,Cube B/S型) — 相机:25M像素(5K x 5K) 150fps CXP / 镜头:x0.75远心镜头(3.3um) / F.O.V:17.1x17.1mm。',
      zhTW:'3D Vision規格(25M,Cube B/S型) — 相機:25M像素(5K x 5K) 150fps CXP / 鏡頭:x0.75遠心鏡頭(3.3um) / F.O.V:17.1x17.1mm。',
      ja:'3D Vision仕様(25M、Cube B/Sタイプ) — カメラ:25M Pixel(5K x 5K) 150fps CXP / レンズ:x0.75テレセントリック(3.3um) / F.O.V:17.1x17.1mm。'
    }),
    slS(20,{
      en:'2D Vision Specification (12M) — Camera: 12M Pixel(4K x 3K) 180fps CXP, BNC Type / Lens: x1.0 Telecentric(5.5um) / F.O.V: 22x16.5mm / Inspection Item: Diameter, Top Diameter, Bridge, FM, SC.',
      ko:'2D Vision 사양(12M) — 카메라 12M Pixel(4Kx3K) 180fps CXP, 검사 항목: Diameter, Top Diameter, Bridge, FM, SC',
      zhCN:'2D Vision规格(12M) — 相机:12M像素(4K x 3K) 180fps CXP,BNC类型 / 镜头:x1.0远心镜头(5.5um) / F.O.V:22x16.5mm / 检测项目:Diameter(直径)、Top Diameter(顶部直径)、Bridge(桥连)、FM(异物)、SC(划伤)。',
      zhTW:'2D Vision規格(12M) — 相機:12M像素(4K x 3K) 180fps CXP,BNC類型 / 鏡頭:x1.0遠心鏡頭(5.5um) / F.O.V:22x16.5mm / 檢測項目:Diameter(直徑)、Top Diameter(頂部直徑)、Bridge(橋接)、FM(異物)、SC(刮傷)。',
      ja:'2D Vision仕様(12M) — カメラ:12M Pixel(4K x 3K) 180fps CXP、BNCタイプ / レンズ:x1.0テレセントリック(5.5um) / F.O.V:22x16.5mm / 検査項目:Diameter、Top Diameter、Bridge、FM、SC。'
    })
  ]},
  {code:'1.2.3',title:{ko:'안전 스티커',en:'Safety Sticker',zhCN:'安全标签',zhTW:'安全標籤',ja:'安全ステッカー'},slides:[
    dividerS(21),
    slS(22,{
      en:'Safety stickers are attached according to the customer\'s request.',
      ko:'안전 스티커는 고객사의 요청에 따라 부착합니다.',
      zhCN:'安全标签根据客户要求粘贴。',
      zhTW:'安全標籤根據客戶要求黏貼。',
      ja:'安全ステッカーは顧客の要請に応じて貼付します。'
    })
  ]},
  {code:'1.3.1',title:{ko:'레이아웃 및 구성품',en:'Layout & Component',zhCN:'布局及组成部件',zhTW:'佈局及組成部件',ja:'レイアウト及び構成品'},slides:[
    dividerS(23),
    slS(24,{
      en:'External layout (Front) — Main machine, ISO machine, Tower lamp, EMS, Monitor, EFU, Operation panel, Keyboard & mouse. Configuration and installation locations vary depending on equipment specifications.',
      ko:'외형 레이아웃(정면) — 구성 및 설치 위치는 장비 사양에 따라 다릅니다.',
      zhCN:'外观布局(正面) — Main machine、ISO machine、Tower lamp、EMS、显示器、EFU、操作面板、键盘鼠标。组成及安装位置根据设备规格而有所不同。',
      zhTW:'外觀佈局(正面) — Main machine、ISO machine、Tower lamp、EMS、顯示器、EFU、操作面板、鍵盤滑鼠。組成及安裝位置根據設備規格而有所不同。',
      ja:'外形レイアウト(正面) — Main machine、ISO machine、Tower lamp、EMS、モニター、EFU、操作パネル、キーボード・マウス。構成及び設置位置は設備仕様により異なります。'
    }),
    slS(25,{
      en:'External layout (Rear) — Main machine, ISO machine, Main power switch, EMS. Configuration and installation locations vary depending on equipment specifications.',
      ko:'외형 레이아웃(후면) — 구성 및 설치 위치는 장비 사양에 따라 다릅니다.',
      zhCN:'外观布局(背面) — Main machine、ISO machine、主电源开关、EMS。组成及安装位置根据设备规格而有所不同。',
      zhTW:'外觀佈局(背面) — Main machine、ISO machine、主電源開關、EMS。組成及安裝位置根據設備規格而有所不同。',
      ja:'外形レイアウト(背面) — Main machine、ISO machine、主電源スイッチ、EMS。構成及び設置位置は設備仕様により異なります。'
    }),
    slS(26,{
      en:'Internal layout (Front) — 3D Vision #1/#2 PC, 2D Vision PC, Host PC, KVM, HUB, LED controllers, UPS, MSM.',
      ko:'내부 레이아웃(정면) — 각 PC, KVM, HUB, LED 컨트롤러, UPS, MSM 위치',
      zhCN:'内部布局(正面) — 3D Vision #1/#2 PC、2D Vision PC、Host PC、KVM、HUB、LED控制器、UPS、MSM的位置。',
      zhTW:'內部佈局(正面) — 3D Vision #1/#2 PC、2D Vision PC、Host PC、KVM、HUB、LED控制器、UPS、MSM的位置。',
      ja:'内部レイアウト(正面) — 3D Vision #1/#2 PC、2D Vision PC、Host PC、KVM、HUB、LEDコントローラー、UPS、MSMの位置。'
    }),
    slS(27,{
      en:'Internal layout (Rear) — 3D Vision #1/#2 AF/PZT controller, TTM, Air regulator, 3D Vision modules.',
      ko:'내부 레이아웃(후면) — AF/PZT 컨트롤러, TTM, 에어 레귤레이터, 3D Vision 모듈 위치',
      zhCN:'内部布局(背面) — 3D Vision #1/#2的AF/PZT控制器、TTM、空气调节器、3D Vision模块的位置。',
      zhTW:'內部佈局(背面) — 3D Vision #1/#2的AF/PZT控制器、TTM、空氣調節器、3D Vision模組的位置。',
      ja:'内部レイアウト(背面) — 3D Vision #1/#2のAF/PZTコントローラー、TTM、エアレギュレーター、3D Visionモジュールの位置。'
    }),
    slS(28,{
      en:'Internal layout (Top) — Main machine, ISO machine, 3D Vision module #1/#2, TTM, MSM, 2D Vision module, Loader/Unloader multi picker, Jig#1/#2 multi picker.',
      ko:'내부 레이아웃(상단) — 각 비전 모듈, TTM, MSM, 피커 배치',
      zhCN:'内部布局(顶部) — Main machine、ISO machine、3D Vision模块#1/#2、TTM、MSM、2D Vision模块、Loader/Unloader multi picker、Jig#1/#2 multi picker的配置。',
      zhTW:'內部佈局(頂部) — Main machine、ISO machine、3D Vision模組#1/#2、TTM、MSM、2D Vision模組、Loader/Unloader multi picker、Jig#1/#2 multi picker的配置。',
      ja:'内部レイアウト(上部) — Main machine、ISO machine、3D Visionモジュール#1/#2、TTM、MSM、2D Visionモジュール、Loader/Unloader multi picker、Jig#1/#2 multi pickerの配置。'
    }),
    slS(29,{
      en:'Internal layout (Top, indexers) — Align #1/#2 indexer, Jig #1/#2 indexer, Loader indexer, Empty/Reject empty indexer, Good/Buffer/Reject indexer.',
      ko:'내부 레이아웃(상단, 인덱서) — 각 인덱서 배치',
      zhCN:'内部布局(顶部,分度器) — Align #1/#2 indexer、Jig #1/#2 indexer、Loader indexer、Empty/Reject empty indexer、Good/Buffer/Reject indexer的配置。',
      zhTW:'內部佈局(頂部,分度器) — Align #1/#2 indexer、Jig #1/#2 indexer、Loader indexer、Empty/Reject empty indexer、Good/Buffer/Reject indexer的配置。',
      ja:'内部レイアウト(上部、インデクサー) — Align #1/#2 indexer、Jig #1/#2 indexer、Loader indexer、Empty/Reject empty indexer、Good/Buffer/Reject indexerの配置。'
    }),
    slS(30,imgOnlyS(30,{ko:'(Elevator Z축, 4EA — 모터 방향)',en:'(Elevator Z-axis, 4EA — motor direction)',zhCN:'(Elevator Z轴,4EA — 电机方向)',zhTW:'(Elevator Z軸,4EA — 馬達方向)',ja:'(Elevator Z軸、4EA — モーター方向)'})),
    slS(31,imgOnlyS(31,{ko:'(Load multi picker X/Z축)',en:'(Load multi picker X/Z-axis)',zhCN:'(Load multi picker X/Z轴)',zhTW:'(Load multi picker X/Z軸)',ja:'(Load multi picker X/Z軸)'})),
    slS(32,imgOnlyS(32,{ko:'(Jig multi picker #1/#2 X/Z축)',en:'(Jig multi picker #1/#2 X/Z-axis)',zhCN:'(Jig multi picker #1/#2 X/Z轴)',zhTW:'(Jig multi picker #1/#2 X/Z軸)',ja:'(Jig multi picker #1/#2 X/Z軸)'})),
    slS(33,imgOnlyS(33,{ko:'(Aligner #1/#2 X/Y축)',en:'(Aligner #1/#2 X/Y-axis)',zhCN:'(Aligner #1/#2 X/Y轴)',zhTW:'(Aligner #1/#2 X/Y軸)',ja:'(Aligner #1/#2 X/Y軸)'})),
    slS(34,imgOnlyS(34,{ko:'(3D Vision #1/#2 X/Z축)',en:'(3D Vision #1/#2 X/Z-axis)',zhCN:'(3D Vision #1/#2 X/Z轴)',zhTW:'(3D Vision #1/#2 X/Z軸)',ja:'(3D Vision #1/#2 X/Z軸)'})),
    slS(35,imgOnlyS(35,{ko:'(Unload multi picker X/Z축)',en:'(Unload multi picker X/Z-axis)',zhCN:'(Unload multi picker X/Z轴)',zhTW:'(Unload multi picker X/Z軸)',ja:'(Unload multi picker X/Z軸)'})),
    slS(36,imgOnlyS(36,{ko:'(Dual tray transfer module X/Z축)',en:'(Dual tray transfer module X/Z-axis)',zhCN:'(Dual tray transfer module X/Z轴)',zhTW:'(Dual tray transfer module X/Z軸)',ja:'(Dual tray transfer module X/Z軸)'})),
    slS(37,imgOnlyS(37,{ko:'(2D Vision X/Z축)',en:'(2D Vision X/Z-axis)',zhCN:'(2D Vision X/Z轴)',zhTW:'(2D Vision X/Z軸)',ja:'(2D Vision X/Z軸)'})),
    slS(38,imgOnlyS(38,{ko:'(Multi sorter module X/Z축, gap X축)',en:'(Multi sorter module X/Z-axis, gap X-axis)',zhCN:'(Multi sorter module X/Z轴,gap X轴)',zhTW:'(Multi sorter module X/Z軸,gap X軸)',ja:'(Multi sorter module X/Z軸、gap X軸)'})),
    slS(39,imgOnlyS(39,{ko:'(각 Indexer Y축)',en:'(Indexer Y-axis — Align/Jig/Loader/Empty/Good/Buffer/Reject indexers)',zhCN:'(各Indexer Y轴 — Align/Jig/Loader/Empty/Good/Buffer/Reject indexer)',zhTW:'(各Indexer Y軸 — Align/Jig/Loader/Empty/Good/Buffer/Reject indexer)',ja:'(各Indexer Y軸 — Align/Jig/Loader/Empty/Good/Buffer/Reject indexer)'})),
    slS(40,imgOnlyS(40,{ko:'(2D Vision 모듈 25M 카메라 구성)',en:'(2D Vision module, 25M camera — main camera, lens, coaxial light, Z-axis motor, sensors)',zhCN:'(2D Vision模块,25M相机 — 主相机、镜头、同轴光源、Z轴电机、传感器)',zhTW:'(2D Vision模組,25M相機 — 主相機、鏡頭、同軸光源、Z軸馬達、感測器)',ja:'(2D Visionモジュール、25Mカメラ — メインカメラ、レンズ、同軸照明、Z軸モーター、センサー)'})),
    slS(41,imgOnlyS(41,{ko:'(3D Vision 모듈 B/S 타입 구성)',en:'(3D Vision module, B/S type — camera, aperture, Z-axis motor, sensors)',zhCN:'(3D Vision模块,B/S型 — 相机、光圈、Z轴电机、传感器)',zhTW:'(3D Vision模組,B/S型 — 相機、光圈、Z軸馬達、感測器)',ja:'(3D Visionモジュール、B/Sタイプ — カメラ、絞り、Z軸モーター、センサー)'})),
    slS(42,imgOnlyS(42,{ko:'(3D Vision 모듈 B/S 타입 광학계 상세)',en:'(3D Vision module, B/S type — beam splitter, laser, reference mirror, PZT stage optics detail)',zhCN:'(3D Vision模块,B/S型 — 分光镜、激光器、参考反射镜、PZT载台光学系统详情)',zhTW:'(3D Vision模組,B/S型 — 分光鏡、雷射、參考反射鏡、PZT載台光學系統詳情)',ja:'(3D Visionモジュール、B/Sタイプ — ビームスプリッター、レーザー、参照ミラー、PZTステージ光学系詳細)'})),
    slS(43,imgOnlyS(43,{ko:'(3D Vision 모듈 Cube 타입 구성)',en:'(3D Vision module, Cube type — camera, aperture, Z-axis motor, sensors)',zhCN:'(3D Vision模块,Cube型 — 相机、光圈、Z轴电机、传感器)',zhTW:'(3D Vision模組,Cube型 — 相機、光圈、Z軸馬達、感測器)',ja:'(3D Visionモジュール、Cubeタイプ — カメラ、絞り、Z軸モーター、センサー)'})),
    slS(44,imgOnlyS(44,{ko:'(3D Vision 모듈 Cube 타입 광학계 상세)',en:'(3D Vision module, Cube type — cube beam splitter, laser, reference mirror, PZT stage optics detail)',zhCN:'(3D Vision模块,Cube型 — 立方分光镜、激光器、参考反射镜、PZT载台光学系统详情)',zhTW:'(3D Vision模組,Cube型 — 立方分光鏡、雷射、參考反射鏡、PZT載台光學系統詳情)',ja:'(3D Visionモジュール、Cubeタイプ — キューブビームスプリッター、レーザー、参照ミラー、PZTステージ光学系詳細)'})),
    slS(45,imgOnlyS(45,{ko:'(TTM: Tray transfer module 구성)',en:'(TTM: Tray transfer module — gripper, Z-axis motor, sensors, ejector)',zhCN:'(TTM:Tray transfer module — 夹爪、Z轴电机、传感器、顶出器)',zhTW:'(TTM:Tray transfer module — 夾爪、Z軸馬達、感測器、頂出器)',ja:'(TTM:Tray transfer module — グリッパー、Z軸モーター、センサー、エジェクター)'})),
    slS(46,{
      en:'MSM: Multi sorter module — picker, gap motor, vacuum ejector, solenoid valve, sensors. Configuration and installation locations vary depending on equipment specifications.',
      ko:'MSM: Multi sorter module 구성 — 구성 및 설치 위치는 장비 사양에 따라 다릅니다.',
      zhCN:'MSM:Multi sorter module — picker、间隙电机、真空排出器、电磁阀、传感器。组成及安装位置根据设备规格而有所不同。',
      zhTW:'MSM:Multi sorter module — picker、間隙馬達、真空排出器、電磁閥、感測器。組成及安裝位置根據設備規格而有所不同。',
      ja:'MSM:Multi sorter module — ピッカー、ギャップモーター、真空エジェクター、ソレノイドバルブ、センサー。構成及び設置位置は設備仕様により異なります。'
    }),
    slS(47,imgOnlyS(47,{ko:'(Loader & unloader multi picker 구성)',en:'(Loader & unloader multi picker — picker, vacuum generator, Z-axis motor, sensors)',zhCN:'(Loader & unloader multi picker — 拾取器、真空发生器、Z轴电机、传感器)',zhTW:'(Loader & unloader multi picker — 拾取器、真空產生器、Z軸馬達、感測器)',ja:'(Loader & unloader multi picker — ピッカー、真空発生器、Z軸モーター、センサー)'})),
    slS(48,imgOnlyS(48,{ko:'(Jig multi picker 구성)',en:'(Jig multi picker — picker, vacuum generator, Z-axis motor, sensors)',zhCN:'(Jig multi picker — 拾取器、真空发生器、Z轴电机、传感器)',zhTW:'(Jig multi picker — 拾取器、真空產生器、Z軸馬達、感測器)',ja:'(Jig multi picker — ピッカー、真空発生器、Z軸モーター、センサー)'})),
    slS(49,imgOnlyS(49,{ko:'(Jig module 구성)',en:'(Jig module — LTS target, Y-axis motor, cableveyor, home/limit sensors)',zhCN:'(Jig module — LTS目标、Y轴电机、拖链、原点/限位传感器)',zhTW:'(Jig module — LTS目標、Y軸馬達、拖鏈、原點/限位感測器)',ja:'(Jig module — LTSターゲット、Y軸モーター、ケーブルベヤ、原点/リミットセンサー)'})),
    slS(50,imgOnlyS(50,{ko:'(Indexer 구성)',en:'(Indexer — finger clamps, cableveyor, push cylinder, sensors)',zhCN:'(Indexer — 手指夹爪、拖链、推动气缸、传感器)',zhTW:'(Indexer — 手指夾爪、拖鏈、推動氣缸、感測器)',ja:'(Indexer — フィンガークランプ、ケーブルベヤ、プッシュシリンダー、センサー)'})),
    slS(51,imgOnlyS(51,{ko:'(Elevator 모터 타입/실린더 타입 구성)',en:'(Elevator — motor type vs. cylinder type; belt, pulley, ball screw, sensors)',zhCN:'(Elevator — 电机型与气缸型对比;皮带、皮带轮、滚珠丝杠、传感器)',zhTW:'(Elevator — 馬達型與氣缸型對比;皮帶、皮帶輪、滾珠螺桿、感測器)',ja:'(Elevator — モータータイプとシリンダータイプの比較;ベルト、プーリー、ボールねじ、センサー)'})),
    slS(52,imgOnlyS(52,{ko:'(Stacker 구성)',en:'(Stacker — load/empty stacker speed controllers, tray check/clamp sensors)',zhCN:'(Stacker — load/empty stacker速度控制器、托盘检测/夹紧传感器)',zhTW:'(Stacker — load/empty stacker速度控制器、托盤檢測/夾緊感測器)',ja:'(Stacker — load/empty stacker速度コントローラー、トレイ検知/クランプセンサー)'})),
    slS(53,imgOnlyS(53,{ko:'(PC KVM 8포트 — 모니터 연결)',en:'(PC KVM, 8 port — monitor connection)',zhCN:'(PC KVM,8端口 — 显示器连接)',zhTW:'(PC KVM,8埠 — 顯示器連接)',ja:'(PC KVM、8ポート — モニター接続)'})),
    slS(54,{
      en:'KVM keyboard & mouse connection diagram.',
      ko:'KVM 키보드·마우스 연결도',
      zhCN:'KVM键盘·鼠标连接图。',
      zhTW:'KVM鍵盤·滑鼠連接圖。',
      ja:'KVMキーボード・マウス接続図。'
    }),
    slS(55,imgOnlyS(55,{ko:'(HUB — Host/3D#1/3D#2/2D PC 및 AF 컨트롤러 연결)',en:'(HUB — Netgear multi-switch connecting Host/3D#1/3D#2/2D PCs, AF controllers)',zhCN:'(HUB — Netgear多口交换机连接Host/3D#1/3D#2/2D PC及AF控制器)',zhTW:'(HUB — Netgear多埠交換器連接Host/3D#1/3D#2/2D PC及AF控制器)',ja:'(HUB — NetgearマルチスイッチによるHost/3D#1/3D#2/2D PC及びAFコントローラー接続)'})),
    slS(56,imgOnlyS(56,{ko:'(PI PZT 컨트롤러 배선도)',en:'(PI PZT Controller E-754 wiring — PZT stage, 3D LED controller, sync board)',zhCN:'(PI PZT Controller E-754接线图 — PZT载台、3D LED控制器、同步板)',zhTW:'(PI PZT Controller E-754接線圖 — PZT載台、3D LED控制器、同步板)',ja:'(PI PZT Controller E-754配線図 — PZTステージ、3D LEDコントローラー、同期ボード)'})),
    slS(57,imgOnlyS(57,{ko:'(nanoFaktur PZT 컨트롤러 배선도)',en:'(nanoFaktur PZT Controller EBD-120210 wiring)',zhCN:'(nanoFaktur PZT Controller EBD-120210接线图)',zhTW:'(nanoFaktur PZT Controller EBD-120210接線圖)',ja:'(nanoFaktur PZT Controller EBD-120210配線図)'})),
    slS(58,imgOnlyS(58,{ko:'(Host PC 배선도 #1)',en:'(Host PC wiring #1 — AF serial/LAN cards, powermeter LAN, HUB, KVM switch)',zhCN:'(Host PC接线图#1 — AF串口/LAN卡、功率计LAN、HUB、KVM切换器)',zhTW:'(Host PC接線圖#1 — AF序列/LAN卡、功率計LAN、HUB、KVM切換器)',ja:'(Host PC配線図#1 — AFシリアル/LANカード、パワーメーターLAN、HUB、KVMスイッチ)'})),
    slS(59,imgOnlyS(59,{ko:'(Host PC 배선도 #2)',en:'(Host PC wiring #2 — KVM/graphic card, motor/IO module, ACS license key, motor driver)',zhCN:'(Host PC接线图#2 — KVM/显卡、电机/IO模块、ACS许可密钥、电机驱动器)',zhTW:'(Host PC接線圖#2 — KVM/顯示卡、馬達/IO模組、ACS授權金鑰、馬達驅動器)',ja:'(Host PC配線図#2 — KVM/グラフィックカード、モーター/IOモジュール、ACSライセンスキー、モータードライバー)'})),
    slS(60,imgOnlyS(60,{ko:'(2D Vision PC 배선도)',en:'(2D Vision PC wiring — vision camera, grab board, LED controller sync)',zhCN:'(2D Vision PC接线图 — 视觉相机、采集卡、LED控制器同步)',zhTW:'(2D Vision PC接線圖 — 視覺相機、採集卡、LED控制器同步)',ja:'(2D Vision PC配線図 — ビジョンカメラ、グラブボード、LEDコントローラー同期)'})),
    slS(61,{
      en:'3D Vision PC wiring — vision camera, grab board, PZT/AF controller connections. Optical system cables may vary depending on specification.',
      ko:'3D Vision PC 배선도 — 광학시스템 케이블은 사양에 따라 다를 수 있습니다.',
      zhCN:'3D Vision PC接线图 — 视觉相机、采集卡、PZT/AF控制器连接。光学系统电缆可能因规格而异。',
      zhTW:'3D Vision PC接線圖 — 視覺相機、採集卡、PZT/AF控制器連接。光學系統電纜可能因規格而異。',
      ja:'3D Vision PC配線図 — ビジョンカメラ、グラブボード、PZT/AFコントローラー接続。光学システムケーブルは仕様により異なる場合があります。'
    })
  ]},
  {code:'1.3.2',title:{ko:'인터록 시스템',en:'Interlock System',zhCN:'联锁系统',zhTW:'連鎖系統',ja:'インターロックシステム'},slides:[
    dividerS(62),
    slS(63,{
      en:'Auto Mode: Motor power can be supplied only when the upper doors are all closed and locked. If an alarm occurs during automatic operation: 1) click Reset, 2) release the Door Interlock, 3) open the door and resolve the alarm point, 4) close the door and lock, 5) push Start to resume.\nTeach Mode: Motor power can be supplied even when the upper door is open or unlocked. Auto/Teach mode can be changed via the Handler program I/O.',
      ko:'Auto Mode: 상부 도어가 모두 닫히고 잠겼을 때만 모터 전원을 공급할 수 있습니다. 자동운전 중 알람 발생 시: 1)Reset 클릭 2)도어 인터록 해제 3)문을 열고 알람 해결 4)문을 닫고 Lock 5)Start로 재개.\nTeach Mode: 상부 도어가 열려있거나 잠금 해제된 상태에서도 모터 전원을 공급할 수 있습니다.',
      zhCN:'Auto Mode:仅当上部门全部关闭并锁定时,才能供给电机电源。自动运行中发生报警时:1)点击Reset 2)解除Door Interlock 3)打开门解决报警点 4)关门并Lock 5)按Start恢复运行。\nTeach Mode:即使上部门处于打开或解锁状态,也可以供给电机电源。Auto/Teach模式可通过Handler程序I/O切换。',
      zhTW:'Auto Mode:僅當上部門全部關閉並鎖定時,才能供給馬達電源。自動運行中發生警報時:1)點擊Reset 2)解除Door Interlock 3)開門排除警報點 4)關門並Lock 5)按Start恢復運行。\nTeach Mode:即使上部門處於開啟或解鎖狀態,也可以供給馬達電源。Auto/Teach模式可透過Handler程式I/O切換。',
      ja:'Auto Mode:上部ドアがすべて閉じてロックされた場合のみモーター電源を供給できます。自動運転中にアラームが発生した場合:1)Resetをクリック 2)Door Interlockを解除 3)ドアを開けてアラームを解決 4)ドアを閉めてLock 5)Startを押して再開。\nTeach Mode:上部ドアが開いている、またはロック解除された状態でもモーター電源を供給できます。Auto/TeachモードはHandlerプログラムのI/Oで切り替えられます。'
    }),
    slS(64,{
      en:'6 EMS (Emergency Stop Switch) buttons are installed. All 6 must be in the released (pull) state to supply motor power — if even one is pushed, motor power is cut off. EMS is used to cut off motor power in an emergency.',
      ko:'설비에 6개의 EMS 버튼이 설치되어 있습니다. 6개 모두 pull 상태여야 모터 전원 공급이 가능하며, 1개라도 push되면 전원이 차단됩니다. 비상 시 모터 전원 차단 용도입니다.',
      zhCN:'设备安装了6个EMS(紧急停止开关)按钮。必须6个全部处于释放(pull)状态才能供给电机电源,只要有1个被按下(push),电源就会被切断。EMS用于紧急情况下切断电机电源。',
      zhTW:'設備安裝了6個EMS(緊急停止開關)按鈕。必須6個全部處於釋放(pull)狀態才能供給馬達電源,只要有1個被按下(push),電源就會被切斷。EMS用於緊急情況下切斷馬達電源。',
      ja:'設備には6個のEMS(非常停止スイッチ)ボタンが設置されています。6個すべてがpull(解除)状態のときのみモーター電源を供給でき、1個でもpush(押下)されると電源が遮断されます。EMSは緊急時にモーター電源を遮断するために使用します。'
    }),
    slS(65,{
      en:'A door interlock system is installed on the upper door to prevent the operator from opening it while the equipment is running. Only engineers authorized by Intekplus may release the interlock for maintenance.',
      ko:'상부 도어에는 도어 인터록 시스템이 설치되어 있어 설비 작동 중 작업자가 문을 열지 못하도록 합니다. 유지보수를 위한 인터락 해제는 Intekplus가 허용한 엔지니어만 가능합니다.',
      zhCN:'上部门安装了门联锁系统,以防止设备运行期间操作人员打开该门。仅经Intekplus授权的工程师才可为维护解除联锁。',
      zhTW:'上部門安裝了門連鎖系統,以防止設備運行期間操作人員開啟該門。僅經Intekplus授權的工程師才可為維護解除連鎖。',
      ja:'上部ドアにはドアインターロックシステムが設置されており、設備稼働中に作業者がドアを開けられないようになっています。メンテナンスのためのインターロック解除はIntekplusが許可したエンジニアのみ可能です。'
    }),
    slS(66,{
      en:'All lower doors must be closed to supply power to the lower door cooling fan. This fan power is supplied automatically and cannot be turned on manually.',
      ko:'하부 도어에 설치된 방열팬에 전원을 공급하려면 모든 하부 도어가 닫혀 있어야 합니다. 방열팬 전원은 자동 공급되며 수동으로 켤 수 없습니다.',
      zhCN:'要为下部门的散热风扇供电,必须所有下部门都处于关闭状态。该风扇电源为自动供给,无法手动开启。',
      zhTW:'要為下部門的散熱風扇供電,必須所有下部門都處於關閉狀態。該風扇電源為自動供給,無法手動開啟。',
      ja:'下部ドアに設置された冷却ファンに電源を供給するには、すべての下部ドアが閉じている必要があります。このファン電源は自動供給されるもので、手動でオンにすることはできません。'
    })
  ]},
  {code:'1.3.3',title:{ko:'설비 자동 동작 순서',en:'Equipment Automatic Sequence',zhCN:'设备自动动作顺序',zhTW:'設備自動動作順序',ja:'設備自動動作順序'},slides:[
    dividerS(67),
    slS(68,{
      en:'Overview of the 10-step automatic sequence: 1)Load tray 2)Unit pick up & move to aligner 3)Unit align 4)Place unit on the Jig 5)3D inspection 6)Unit transfer to tray 7)Transfer tray (Good/Buffer rail) 8)2D inspection 9)Unit sorting 10)Unload tray — plus pre-steps a)Load empty tray b)Load reject empty tray c)Transfer empty tray.',
      ko:'자동 동작 10단계 개요: 1)트레이 투입 2)유닛 픽업 후 얼라이너 이동 3)유닛 정렬 4)Jig에 안착 5)3D 검사 6)트레이로 유닛 이송 7)트레이 이송(Good/Buffer) 8)2D 검사 9)유닛 소팅 10)트레이 배출',
      zhCN:'自动动作10个步骤概述:1)投入托盘 2)拾取Unit并移动至Aligner 3)Unit对位 4)放置于Jig上 5)3D检测 6)将Unit转移至托盘 7)转移托盘(Good/Buffer) 8)2D检测 9)Unit分选 10)排出托盘 — 另有前置步骤a)投入空托盘 b)投入不良品用空托盘 c)转移空托盘。',
      zhTW:'自動動作10個步驟概述:1)投入托盤 2)拾取Unit並移動至Aligner 3)Unit對位 4)放置於Jig上 5)3D檢測 6)將Unit轉移至托盤 7)轉移托盤(Good/Buffer) 8)2D檢測 9)Unit分選 10)排出托盤 — 另有前置步驟a)投入空托盤 b)投入不良品用空托盤 c)轉移空托盤。',
      ja:'自動動作10ステップの概要:1)トレイ投入 2)ユニットピックアップ後アライナーへ移動 3)ユニット整列 4)Jigに搭載 5)3D検査 6)トレイへユニット移送 7)トレイ移送(Good/Buffer) 8)2D検査 9)ユニットソーティング 10)トレイ排出 — 前段階としてa)空トレイ投入 b)リジェクト用空トレイ投入 c)空トレイ移送。'
    }),
    slS(69,{
      en:'Empty tray: Prepare the empty tray. Use the Elevator and Stacker to separate each tray. The indexer moves the tray to the TTM, which moves the empty tray to the reject rail.',
      ko:'Empty tray: Empty Tray를 준비합니다. Elevator와 Stacker로 한 장씩 분리하고, Indexer가 TTM으로, TTM이 Reject Rail로 이동시킵니다.',
      zhCN:'Empty tray:准备空托盘。使用Elevator和Stacker将托盘逐张分离,Indexer将其移至TTM,再由TTM移至Reject Rail。',
      zhTW:'Empty tray:準備空托盤。使用Elevator和Stacker將托盤逐張分離,Indexer將其移至TTM,再由TTM移至Reject Rail。',
      ja:'Empty tray:空トレイを準備します。ElevatorとStackerで1枚ずつ分離し、IndexerがTTMへ、TTMがReject Railへ移動させます。'
    }),
    slS(70,{
      en:'Load tray: Place the tray with units in the loader. Use the Elevator and Stacker to separate each tray.',
      ko:'Load tray: Unit이 담긴 Tray를 Loader에 올려놓고, Elevator와 Stacker로 한 장씩 분리합니다.',
      zhCN:'Load tray:将装有Unit的托盘放置在Loader上,使用Elevator和Stacker将托盘逐张分离。',
      zhTW:'Load tray:將裝有Unit的托盤放置在Loader上,使用Elevator和Stacker將托盤逐張分離。',
      ja:'Load tray:Unitが入ったトレイをLoaderに載せ、ElevatorとStackerで1枚ずつ分離します。'
    }),
    slS(71,{
      en:'Tray Unit Pick & Align Place (Loading): The Loader Multi Picker catches the unit injected from the loader and places it on the aligner.',
      ko:'Tray Unit Pick & Align Place(Loading): Loader Multi Picker가 투입된 Unit을 잡아 Align에 내려놓습니다.',
      zhCN:'Tray Unit Pick & Align Place(Loading):Loader Multi Picker抓取从Loader投入的Unit,并将其放置于Align上。',
      zhTW:'Tray Unit Pick & Align Place(Loading):Loader Multi Picker抓取從Loader投入的Unit,並將其放置於Align上。',
      ja:'Tray Unit Pick & Align Place(Loading):Loader Multi Pickerが投入されたUnitをつかみ、Alignに降ろします。'
    }),
    slS(72,{
      en:'Aligner Pick & Jig Place: After aligning, the unit is moved to the jig table using the Jig Multi Picker.',
      ko:'Aligner Pick & Jig Place: 정렬 후 Jig Multi Picker로 Jig 테이블에 이동합니다.',
      zhCN:'Aligner Pick & Jig Place:对位完成后,使用Jig Multi Picker将Unit移动至Jig工作台。',
      zhTW:'Aligner Pick & Jig Place:對位完成後,使用Jig Multi Picker將Unit移動至Jig工作台。',
      ja:'Aligner Pick & Jig Place:整列後、Jig Multi PickerでJigテーブルへ移動します。'
    }),
    slS(73,{
      en:'3D inspection: Inspect the bump area of the unit. If the bump area is larger than the F.O.V, divide the inspection area into two or more.',
      ko:'3D inspection: Unit의 Bump Area를 검사합니다. Bump Area가 F.O.V보다 크면 검사 영역을 2개 이상으로 나눕니다.',
      zhCN:'3D inspection:检测Unit的Bump Area。若Bump Area大于F.O.V,则将检测区域划分为2个以上。',
      zhTW:'3D inspection:檢測Unit的Bump Area。若Bump Area大於F.O.V,則將檢測區域劃分為2個以上。',
      ja:'3D inspection:UnitのBump Areaを検査します。Bump AreaがF.O.Vより大きい場合、検査領域を2つ以上に分割します。'
    }),
    slS(74,{
      en:'JIG Pick & Tray Unit Place (Unloading): Transfer the unit that completed 3D inspection to a tray.',
      ko:'JIG Pick & Tray Unit Place(Unloading): 3D 검사가 끝난 Unit을 Tray로 이송합니다.',
      zhCN:'JIG Pick & Tray Unit Place(Unloading):将完成3D检测的Unit转移至托盘。',
      zhTW:'JIG Pick & Tray Unit Place(Unloading):將完成3D檢測的Unit轉移至托盤。',
      ja:'JIG Pick & Tray Unit Place(Unloading):3D検査が完了したUnitをトレイへ移送します。'
    }),
    slS(75,{
      en:'Tray sorting: Move the tray to Buffer or Good in the order in which inspection is completed.',
      ko:'Tray sorting: 검사 완료 순서대로 트레이를 Buffer 또는 Good으로 이송합니다.',
      zhCN:'Tray sorting:按检测完成的顺序,将托盘转移至Buffer或Good。',
      zhTW:'Tray sorting:按檢測完成的順序,將托盤轉移至Buffer或Good。',
      ja:'Tray sorting:検査完了順にトレイをBufferまたはGoodへ移送します。'
    }),
    slS(76,{
      en:'Read the barcode of unit: Move to the unit for inspection and read the barcode of the R.O.I area (OCR or Matrix barcode).',
      ko:'Read the barcode of unit: 검사할 Unit으로 이동하여 R.O.I 영역의 Barcode를 읽습니다.',
      zhCN:'Read the barcode of unit:移动至待检测的Unit,读取R.O.I区域的Barcode(OCR或Matrix barcode)。',
      zhTW:'Read the barcode of unit:移動至待檢測的Unit,讀取R.O.I區域的Barcode(OCR或Matrix barcode)。',
      ja:'Read the barcode of unit:検査対象のUnitへ移動し、R.O.I領域のBarcode(OCRまたはMatrix barcode)を読み取ります。'
    }),
    slS(77,{
      en:'2D inspection: Inspect the bump area of the unit. If larger than the F.O.V, divide into two or more inspection areas.',
      ko:'2D inspection: Unit의 Bump Area를 검사합니다. Bump Area가 F.O.V보다 크면 검사 영역을 2개 이상으로 나눕니다.',
      zhCN:'2D inspection:检测Unit的Bump Area。若大于F.O.V,则划分为2个以上检测区域。',
      zhTW:'2D inspection:檢測Unit的Bump Area。若大於F.O.V,則劃分為2個以上檢測區域。',
      ja:'2D inspection:UnitのBump Areaを検査します。F.O.Vより大きい場合、検査領域を2つ以上に分割します。'
    }),
    slS(78,{
      en:'Unit sorting: Units inspected are classified as Good or Reject.',
      ko:'Unit sorting: 검사가 끝난 Unit을 양품/불량으로 분류합니다.',
      zhCN:'Unit sorting:将检测完成的Unit分类为Good(良品)或Reject(不良品)。',
      zhTW:'Unit sorting:將檢測完成的Unit分類為Good(良品)或Reject(不良品)。',
      ja:'Unit sorting:検査済みのUnitをGood(良品)またはReject(不良品)に分類します。'
    }),
    slS(79,{
      en:'Unload tray: Unload the classified tray.',
      ko:'Unload tray: 분류가 끝난 Tray를 배출합니다.',
      zhCN:'Unload tray:排出已分类完成的托盘。',
      zhTW:'Unload tray:排出已分類完成的托盤。',
      ja:'Unload tray:分類が完了したトレイを排出します。'
    })
  ]}
 ]},
{code:'2',title:{ko:'2장. 설비 조작 (Level 1)',en:'Chapter 2. Operation',zhCN:'第2章 设备操作 (Level 1)',zhTW:'第2章 設備操作 (Level 1)',ja:'第2章 設備操作 (Level 1)'},
 sections:[
  {code:'2.1.1',title:{ko:'전원 투입 순서',en:'Electrical Turn-on Sequence',zhCN:'电源开启顺序',zhTW:'電源開啟順序',ja:'電源投入順序'},slides:[
    dividerS(80),
    slS(81,{
      en:'Rear view ports: External LAN port, Air 1~4 (Main equipment air socket, 12Φ), Main power cable socket.',
      ko:'후면 포트: 외부 LAN 포트, Air 1~4(설비 메인 공압 소켓 12Φ), 메인 전원 케이블 소켓',
      zhCN:'背面端口:外部LAN端口、Air 1~4(设备主气压接口,12Φ)、主电源电缆插座。',
      zhTW:'背面端口:外部LAN端口、Air 1~4(設備主氣壓接口,12Φ)、主電源電纜插座。',
      ja:'背面ポート:外部LANポート、Air 1~4(設備メインエアソケット、12Φ)、メイン電源ケーブルソケット。'
    }),
    slS(82,{
      en:'Adjust the regulator so each air regulator maintains 4~6bar. Air1: Indexer/Stacker/Elevator/Picker/Air Gun. Air2: ISO Jig Pocket Vacuum. Air3: Multi Sorter/ISO Picker Vacuum. Air4: ISO Main Air.',
      ko:'각 Air Regulator가 4~6bar를 유지하도록 조절합니다. Air1: Indexer/Stacker/Elevator/Picker/Air Gun. Air2: ISO Jig Pocket Vacuum. Air3: Multi Sorter/ISO Picker Vacuum. Air4: ISO Main Air.',
      zhCN:'调节各Air Regulator使其维持在4~6bar。Air1:Indexer/Stacker/Elevator/Picker/Air Gun。Air2:ISO Jig Pocket Vacuum。Air3:Multi Sorter/ISO Picker Vacuum。Air4:ISO Main Air。',
      zhTW:'調節各Air Regulator使其維持在4~6bar。Air1:Indexer/Stacker/Elevator/Picker/Air Gun。Air2:ISO Jig Pocket Vacuum。Air3:Multi Sorter/ISO Picker Vacuum。Air4:ISO Main Air。',
      ja:'各Air Regulatorが4~6barを維持するように調整します。Air1:Indexer/Stacker/Elevator/Picker/Air Gun。Air2:ISO Jig Pocket Vacuum。Air3:Multi Sorter/ISO Picker Vacuum。Air4:ISO Main Air。'
    }),
    slS(83,{
      en:'To supply power to the SMTV, check: main breaker On/Off, circuit breaker inside the electric panel, utility panel lamp, upper door lock/unlock per Auto/Teach mode, EMS push/pull state, lower door closed (for fan), UPS On/Off (Host PC), power strip On/Off (PC/LED controller), main air supplied, air regulator 4~6bar, operation panel button lamp status.',
      ko:'SMTV에 전원을 공급하려면: Main 차단기, 전장 판넬 내부 차단기, Utility panel 수전 lamp, Auto/Teach에 따른 상부 도어 lock/unlock, EMS push/pull 상태, 하부 도어 닫힘(방열팬용), UPS On/Off, 멀티탭 On/Off, Main Air 공급, 각 Regulator 4~6bar, Operation Panel 램프 상태를 확인합니다.',
      zhCN:'要为SMTV供电,请确认:主断路器On/Off、电气面板内部断路器、Utility panel受电灯、Auto/Teach模式对应的上部门lock/unlock状态、EMS push/pull状态、下部门关闭(用于风扇)、UPS On/Off(Host PC)、插座排插On/Off(PC/LED控制器)、主气源是否供应、各Regulator是否为4~6bar、操作面板按钮灯状态。',
      zhTW:'要為SMTV供電,請確認:主斷路器On/Off、電氣面板內部斷路器、Utility panel受電燈、Auto/Teach模式對應的上部門lock/unlock狀態、EMS push/pull狀態、下部門關閉(用於風扇)、UPS On/Off(Host PC)、插座排插On/Off(PC/LED控制器)、主氣源是否供應、各Regulator是否為4~6bar、操作面板按鈕燈狀態。',
      ja:'SMTVに電源を供給するには:メインブレーカーのOn/Off、電気パネル内部の遮断器、Utility panelの受電ランプ、Auto/Teachモードに応じた上部ドアのlock/unlock状態、EMSのpush/pull状態、下部ドアが閉まっているか(ファン用)、UPSのOn/Off(Host PC)、電源タップのOn/Off(PC/LEDコントローラー)、メインエア供給、各Regulatorが4~6barか、操作パネルボタンのランプ状態を確認します。'
    }),
    slS(84,{
      en:'Turn on the main circuit breaker installed in the main panel. The release key is used to open the door.',
      ko:'장비 메인 패널의 메인 회로 차단기를 켭니다. Release Key는 문을 열 때 사용합니다.',
      zhCN:'打开设备主面板上安装的主断路器。Release Key用于开门。',
      zhTW:'開啟設備主面板上安裝的主斷路器。Release Key用於開門。',
      ja:'設備のメインパネルに設置されたメイン回路遮断器をオンにします。Release Keyはドアを開ける際に使用します。'
    }),
    slS(85,{
      en:'Turn on all circuit protectors (CP) inside the electric panel (main + sub panel).',
      ko:'전장 판넬(메인+서브) 내부의 모든 CP를 켭니다.',
      zhCN:'打开电气面板(主+副面板)内所有CP(断路保护器)。',
      zhTW:'開啟電氣面板(主+副面板)內所有CP(斷路保護器)。',
      ja:'電気パネル(メイン+サブ)内のすべてのCP(回路保護器)をオンにします。'
    }),
    slS(86,{
      en:'The utility panel power lamp should turn on only when the CP01 power lamp breaker is turned on. Intel equipment do not have a power lamp.',
      ko:'CP01 Power Lamp 차단기를 On 해야 Utility panel 수전 lamp가 켜집니다. Intel향 설비에는 수전 lamp가 없습니다.',
      zhCN:'只有打开CP01 Power Lamp断路器,Utility panel受电灯才会亮起。Intel用设备没有受电灯。',
      zhTW:'只有開啟CP01 Power Lamp斷路器,Utility panel受電燈才會亮起。Intel用設備沒有受電燈。',
      ja:'CP01 Power Lampブレーカーをオンにして初めてUtility panelの受電ランプが点灯します。Intel向け設備には受電ランプがありません。'
    }),
    slS(87,{
      en:'To supply power to the Host PC, the UPS must be turned on. Turn off UPS power during power-related work. Intel equipment do not have a UPS.',
      ko:'Host PC 전원 공급을 위해 UPS를 켭니다. 전원 관련 작업 시 반드시 UPS를 끕니다. Intel향 설비는 UPS가 없습니다.',
      zhCN:'要为Host PC供电,须打开UPS。进行电源相关作业时必须关闭UPS电源。Intel用设备没有UPS。',
      zhTW:'要為Host PC供電,須開啟UPS。進行電源相關作業時必須關閉UPS電源。Intel用設備沒有UPS。',
      ja:'Host PCに電源を供給するためにUPSをオンにします。電源関連の作業時は必ずUPSをオフにします。Intel向け設備にはUPSがありません。'
    }),
    slS(88,{
      en:'To supply power to controllers such as PC and LED controller, the power strip must be turned on.',
      ko:'PC 및 LED Controller 등에 전원을 공급하려면 Multi Tap을 켜야 합니다.',
      zhCN:'要为PC及LED Controller等控制器供电,必须打开Multi Tap(电源排插)。',
      zhTW:'要為PC及LED Controller等控制器供電,必須開啟Multi Tap(電源排插)。',
      ja:'PC及びLED Controllerなどのコントローラーに電源を供給するには、Multi Tap(電源タップ)をオンにする必要があります。'
    }),
    slS(89,{
      en:'When all breakers are on, the power-off button lamp should be on and the Reset button lamp flashes ~500ms cycle. Pushing Power-on turns that lamp on and the power-off lamp off. In Teach mode, pushing Reset with all EMS pulled supplies motor power. In Auto mode, motor power requires all EMS pulled AND all upper doors locked — unlocking the upper door in Auto mode cuts motor power.',
      ko:'모든 차단기 On 시 Power off 버튼 램프 On, Reset 버튼은 약 500ms 주기로 점멸합니다. Teach mode는 EMS가 모두 pull 상태에서 Reset을 누르면 모터 전원이 공급됩니다. Auto mode는 EMS pull + 상부 도어 모두 lock 상태여야 하며, Auto mode에서 상부 도어를 unlock하면 모터 전원이 차단됩니다.',
      zhCN:'所有断路器打开时,Power off按钮灯应亮起,Reset按钮以约500ms周期闪烁。按下Power-on后该灯亮起,Power off灯熄灭。Teach mode下,在所有EMS均为pull状态时按下Reset即可供给电机电源。Auto mode下,需EMS全部pull且所有上部门均为lock状态才能供电——在Auto mode下将上部门unlock会切断电机电源。',
      zhTW:'所有斷路器開啟時,Power off按鈕燈應亮起,Reset按鈕以約500ms週期閃爍。按下Power-on後該燈亮起,Power off燈熄滅。Teach mode下,在所有EMS均為pull狀態時按下Reset即可供給馬達電源。Auto mode下,需EMS全部pull且所有上部門均為lock狀態才能供電——在Auto mode下將上部門unlock會切斷馬達電源。',
      ja:'すべてのブレーカーがオンのとき、Power offボタンランプが点灯し、Resetボタンは約500ms周期で点滅します。Power-onを押すとそのランプが点灯し、Power offランプが消灯します。Teach modeでは、EMSがすべてpull状態でResetを押すとモーター電源が供給されます。Auto modeでは、EMSがすべてpullかつ上部ドアがすべてlock状態である必要があり、Auto modeで上部ドアをunlockするとモーター電源が遮断されます。'
    })
  ]},
  {code:'2.1.2',title:{ko:'PC·컨트롤러·카메라 전원',en:'PC, Controller, Camera',zhCN:'PC、控制器、相机电源',zhTW:'PC、控制器、相機電源',ja:'PC・コントローラー・カメラ電源'},slides:[
    dividerS(90),
    slS(91,{
      en:'Turn on the PCs (HOST, 2D, 3D#1, 3D#2) and LED controllers (2D, 3D#1, 3D#2). Host PC turns on after the UPS (except when there is no UPS). Turning on the LED controller also turns on the camera (varies by camera spec).',
      ko:'PC(HOST, 2D, 3D#1, 3D#2)와 LED Controller(2D, 3D#1, 3D#2)를 켭니다. HOST PC는 UPS를 켠 후에 켭니다. LED controller를 켜면 카메라도 켜집니다(사양에 따라 다름).',
      zhCN:'打开PC(HOST、2D、3D#1、3D#2)与LED Controller(2D、3D#1、3D#2)。HOST PC须在打开UPS之后再打开(无UPS的情况除外)。打开LED controller时相机也会随之开启(依相机规格而异)。',
      zhTW:'開啟PC(HOST、2D、3D#1、3D#2)與LED Controller(2D、3D#1、3D#2)。HOST PC須在開啟UPS之後再開啟(無UPS的情況除外)。開啟LED controller時相機也會隨之開啟(依相機規格而異)。',
      ja:'PC(HOST、2D、3D#1、3D#2)とLED Controller(2D、3D#1、3D#2)をオンにします。HOST PCはUPSをオンにした後にオンにします(UPSがない場合を除く)。LED controllerをオンにするとカメラもオンになります(カメラ仕様により異なります)。'
    }),
    slS(92,{
      en:'Turn on the PZT and AF Controllers (3D#1, 3D#2). Raising equipment power while the controller power button is already on may damage the controller due to overvoltage.',
      ko:'3D#1, 3D#2의 PZT, AF Controller 전원을 켭니다. 전원 버튼이 켜진 상태에서 장비 전원을 올리면 과전압으로 컨트롤러가 손상될 수 있습니다.',
      zhCN:'打开3D#1、3D#2的PZT、AF Controller电源。若在控制器电源按钮已开启的状态下再升高设备电源,可能因过电压而损坏控制器。',
      zhTW:'開啟3D#1、3D#2的PZT、AF Controller電源。若在控制器電源按鈕已開啟的狀態下再升高設備電源,可能因過電壓而損壞控制器。',
      ja:'3D#1、3D#2のPZT、AF Controllerの電源をオンにします。コントローラーの電源ボタンが既にオンの状態で設備電源を上げると、過電圧によりコントローラーが破損するおそれがあります。'
    })
  ]},
  {code:'2.1.3',title:{ko:'전원 차단 순서',en:'Equipment Turn-off Sequence',zhCN:'电源关闭顺序',zhTW:'電源關閉順序',ja:'電源遮断順序'},slides:[
    dividerS(93),
    slS(94,{
      en:'Turn off in the reverse order of the turn-on sequence: Controller(AF,LED,PZT,PC) → Operation panel power-off → Power strip off → UPS off → CP off → Main panel off. Failure to follow this order may damage electrical components.',
      ko:'켤 때의 반대 순서로 끕니다: 컨트롤러(AF,LED,PZT,PC) → 조작반 전원오프 → 멀티탭 오프 → UPS 오프 → CP 오프 → 메인 패널 오프. 순서를 지키지 않으면 전기 부품이 손상될 수 있습니다.',
      zhCN:'按开启顺序的相反顺序关闭:控制器(AF、LED、PZT、PC) → 操作面板电源关闭 → 电源排插关闭 → UPS关闭 → CP关闭 → 主面板关闭。若不遵守该顺序,可能损坏电气部件。',
      zhTW:'按開啟順序的相反順序關閉:控制器(AF、LED、PZT、PC) → 操作面板電源關閉 → 電源排插關閉 → UPS關閉 → CP關閉 → 主面板關閉。若不遵守該順序,可能損壞電氣部件。',
      ja:'オンにする順序と逆の順序でオフにします:コントローラー(AF、LED、PZT、PC) → 操作パネル電源オフ → 電源タップオフ → UPSオフ → CPオフ → メインパネルオフ。この順序を守らないと電気部品が破損するおそれがあります。'
    })
  ]},
  {code:'2.2.1',title:{ko:'Host 및 Vision 메인 소프트웨어',en:'Host & Vision Main Software',zhCN:'Host及Vision主软件',zhTW:'Host及Vision主軟體',ja:'Host及びVisionメインソフトウェア'},slides:[
    dividerS(95),
    slS(96,{
      en:'Switch screens with Ctrl+Ctrl+1~4 (1:HOST, 2:3D Vision1, 3:3D Vision2, 4:2D Vision). Switch to HOST and run the iSMTV_Host program.',
      ko:'Ctrl+Ctrl+1~4로 화면을 전환합니다(1:HOST, 2:3D Vision1, 3:3D Vision2, 4:2D Vision). HOST로 전환 후 iSMTV_Host 프로그램을 실행합니다.',
      zhCN:'通过Ctrl+Ctrl+1~4切换画面(1:HOST、2:3D Vision1、3:3D Vision2、4:2D Vision)。切换至HOST后运行iSMTV_Host程序。',
      zhTW:'透過Ctrl+Ctrl+1~4切換畫面(1:HOST、2:3D Vision1、3:3D Vision2、4:2D Vision)。切換至HOST後執行iSMTV_Host程式。',
      ja:'Ctrl+Ctrl+1~4で画面を切り替えます(1:HOST、2:3D Vision1、3:3D Vision2、4:2D Vision)。HOSTに切り替えた後、iSMTV_Hostプログラムを実行します。'
    }),
    slS(97,{
      en:'Switch to 3D Vision1 (Vision2, 2D Vision) and run the VisionTray program.',
      ko:'3D Vision1(Vision2, 2D Vision)으로 전환 후 VisionTray 프로그램을 실행합니다.',
      zhCN:'切换至3D Vision1(Vision2、2D Vision)后运行VisionTray程序。',
      zhTW:'切換至3D Vision1(Vision2、2D Vision)後執行VisionTray程式。',
      ja:'3D Vision1(Vision2、2D Vision)に切り替えた後、VisionTrayプログラムを実行します。'
    })
  ]},
  {code:'2.2.2',title:{ko:'Host 시스템 상태',en:'Host System Status',zhCN:'Host系统状态',zhTW:'Host系統狀態',ja:'Hostシステム状態'},slides:[
    dividerS(98),
    slS(99,{
      en:'Check the system status at the top of the HOST program. Inspection can proceed only when all statuses show ready (green).',
      ko:'HOST 프로그램 상단의 시스템 상태를 확인합니다. 모든 상태가 준비(녹색)일 때만 검사를 진행할 수 있습니다.',
      zhCN:'查看HOST程序上方的系统状态。仅当所有状态均显示为就绪(绿色)时,才能进行检测。',
      zhTW:'查看HOST程式上方的系統狀態。僅當所有狀態均顯示為就緒(綠色)時,才能進行檢測。',
      ja:'HOSTプログラム上部のシステム状態を確認します。すべての状態が準備完了(緑色)のときのみ検査を進めることができます。'
    }),
    slS(100,{
      en:'If not ready, check: Handler (run initialization), Vision (click Connect Vision — if it fails, check Vision PC IP, program version match, Vision program status), AF1/AF2 (LAN connection), Motor (OP panel power / EMS state), Interlock (all doors closed, click Interlock to lock).',
      ko:'준비되지 않았다면: Handler(초기화 진행), Vision(Connect Vision 클릭 — 실패 시 IP, 버전, 프로그램 상태 확인), AF1/AF2(LAN 연결 확인), Motor(OP Panel 전원/EMS 상태 확인), Interlock(모든 도어 닫힘 확인 후 Interlock 클릭).',
      zhCN:'若未就绪,请检查:Handler(执行初始化)、Vision(点击Connect Vision——失败时检查Vision PC的IP、程序版本是否一致、Vision程序状态)、AF1/AF2(检查LAN连接)、Motor(检查OP Panel电源/EMS状态)、Interlock(确认所有门已关闭后点击Interlock)。',
      zhTW:'若未就緒,請檢查:Handler(執行初始化)、Vision(點擊Connect Vision——失敗時檢查Vision PC的IP、程式版本是否一致、Vision程式狀態)、AF1/AF2(檢查LAN連接)、Motor(檢查OP Panel電源/EMS狀態)、Interlock(確認所有門已關閉後點擊Interlock)。',
      ja:'準備完了でない場合は次を確認します:Handler(初期化を実行)、Vision(Connect Visionをクリック——失敗時はVision PCのIP、プログラムバージョンの一致、Visionプログラムの状態を確認)、AF1/AF2(LAN接続を確認)、Motor(OP Panel電源/EMS状態を確認)、Interlock(すべてのドアが閉まっていることを確認しInterlockをクリック)。'
    })
  ]},
  {code:'2.2.3',title:{ko:'Host 운영 화면(UI)',en:'Host Operation UI',zhCN:'Host操作界面(UI)',zhTW:'Host操作介面(UI)',ja:'Host運用画面(UI)'},slides:[
    dividerS(101),
    slS(102,{
      en:'Host main program window areas: Log In & Save, Run Menu, System Status, Unit Status, Lot Info, Inspection Results, Safety Status, Sorting Information, Log.',
      ko:'Host 메인 화면 구성: 로그인&저장, Run 메뉴, 시스템 상태, 유닛 상태, Lot 정보, 검사 결과, 안전 상태, 소팅 정보, 로그',
      zhCN:'Host主程序画面区域构成:Log In & Save、Run菜单、系统状态、Unit状态、Lot信息、检测结果、安全状态、分选信息、日志。',
      zhTW:'Host主程式畫面區域構成:Log In & Save、Run選單、系統狀態、Unit狀態、Lot資訊、檢測結果、安全狀態、分選資訊、日誌。',
      ja:'Hostメインプログラム画面の構成:Log In & Save、Runメニュー、システム状態、Unit状態、Lot情報、検査結果、Safety状態、ソーティング情報、ログ。'
    }),
    slS(103,{
      en:'Buttons: Log In(access rights), Job Open(select recipe), Job Save, Process(status), Save Log, Start(create inspection info window), Resume, Pause, Lot Cancel, LTS V1/V2, Tray LTS, Empty Handler(auto-remove trays), Init Handler(equipment init).',
      ko:'버튼: 로그인(접근권한), Job Open(레시피 선택), Job Save, Process(상태확인), Save Log, Start(검사정보 입력창 생성), Resume, Pause, Lot Cancel, LTS V1/V2, Tray LTS, Empty Handler(트레이 자동제거), Init Handler(설비 초기화)',
      zhCN:'按钮:Log In(访问权限)、Job Open(选择配方)、Job Save、Process(状态确认)、Save Log、Start(生成检测信息输入窗口)、Resume、Pause、Lot Cancel、LTS V1/V2、Tray LTS、Empty Handler(自动清除托盘)、Init Handler(设备初始化)。',
      zhTW:'按鈕:Log In(存取權限)、Job Open(選擇配方)、Job Save、Process(狀態確認)、Save Log、Start(產生檢測資訊輸入視窗)、Resume、Pause、Lot Cancel、LTS V1/V2、Tray LTS、Empty Handler(自動清除托盤)、Init Handler(設備初始化)。',
      ja:'ボタン:Log In(アクセス権限)、Job Open(レシピ選択)、Job Save、Process(状態確認)、Save Log、Start(検査情報入力ウィンドウ作成)、Resume、Pause、Lot Cancel、LTS V1/V2、Tray LTS、Empty Handler(トレイ自動除去)、Init Handler(設備初期化)。'
    }),
    slS(104,{
      en:'Status areas: Unit Status(current position), Inspection status(per-vision result), Safety Status(door open/lock), Vision(switch to vision PC screen / monitor inspection images / check connection), Yield(per-vision inspection yield), Log(detailed equipment log).',
      ko:'상태 영역: Unit Status(현재 위치), Inspection status(비전별 결과), Safety Status(도어 열림/잠김), Vision(비전PC 전환/이미지 모니터링/연결 상태 확인), Yield(비전별 수율), Log(상세 로그)',
      zhCN:'状态区域:Unit Status(当前位置)、Inspection status(各Vision的检测结果)、Safety Status(门开启/锁定状态)、Vision(切换至Vision PC画面/监控检测影像/确认连接状态)、Yield(各Vision的检测良率)、Log(详细日志)。',
      zhTW:'狀態區域:Unit Status(目前位置)、Inspection status(各Vision的檢測結果)、Safety Status(門開啟/鎖定狀態)、Vision(切換至Vision PC畫面/監控檢測影像/確認連接狀態)、Yield(各Vision的檢測良率)、Log(詳細日誌)。',
      ja:'状態エリア:Unit Status(現在位置)、Inspection status(Vision別結果)、Safety Status(ドア開閉/ロック状態)、Vision(Vision PC画面への切替/検査画像モニタリング/接続状態確認)、Yield(Vision別検査歩留まり)、Log(詳細ログ)。'
    }),
    slS(105,{
      en:'Info fields: Lot ID, Part Number, Recipe Name, Operator, Cycle Time 1/2(per-vision inspect time), Start Time, Run Time, Yield, UPH, Total/Pass/Fail count, Sorting Tray(status by rail).',
      ko:'정보 항목: Lot ID, Part Number, Recipe Name, Operator, Cycle Time 1/2, Start Time, Run Time, Yield, UPH, Total/Pass/Fail 수량, Sorting Tray(레일별 상태)',
      zhCN:'信息项目:Lot ID、Part Number、Recipe Name、Operator、Cycle Time 1/2(各Vision检测时间)、Start Time、Run Time、Yield、UPH、Total/Pass/Fail数量、Sorting Tray(各Rail状态)。',
      zhTW:'資訊項目:Lot ID、Part Number、Recipe Name、Operator、Cycle Time 1/2(各Vision檢測時間)、Start Time、Run Time、Yield、UPH、Total/Pass/Fail數量、Sorting Tray(各Rail狀態)。',
      ja:'情報項目:Lot ID、Part Number、Recipe Name、Operator、Cycle Time 1/2(Vision別検査時間)、Start Time、Run Time、Yield、UPH、Total/Pass/Fail数、Sorting Tray(Rail別状態)。'
    })
  ]},
  {code:'2.2.4',title:{ko:'핸들러 초기화',en:'Handler Initialize',zhCN:'Handler初始化',zhTW:'Handler初始化',ja:'ハンドラー初期化'},slides:[
    dividerS(106),
    slS(107,{
      en:'Click \'Init Handler\'.',
      ko:'[Init Handler]를 클릭합니다.',
      zhCN:'点击[Init Handler]。',
      zhTW:'點擊[Init Handler]。',
      ja:'[Init Handler]をクリックします。'
    }),
    slS(108,{
      en:'The icon in front of the Handler changes from red to green when equipment initialization is complete.',
      ko:'설비 초기화가 완료되면 Handler 앞의 아이콘이 빨간색에서 녹색으로 바뀝니다.',
      zhCN:'设备初始化完成后,Handler前的图标会由红色变为绿色。',
      zhTW:'設備初始化完成後,Handler前的圖示會由紅色變為綠色。',
      ja:'設備の初期化が完了すると、Handler前のアイコンが赤色から緑色に変わります。'
    })
  ]},
  {code:'2.3.1',title:{ko:'검사 실행',en:'Run Inspection',zhCN:'运行检测',zhTW:'執行檢測',ja:'検査実行'},slides:[
    dividerS(109),
    slS(110,{
      en:'Click \'Log In\'. Select access level \'Operator\', fill in User ID and Password, and click OK.',
      ko:'[Log In]을 클릭합니다. [Operator] 접근 단계를 선택하고 User ID/Password 입력 후 [확인]을 누릅니다.',
      zhCN:'点击[Log In]。选择[Operator]访问权限,输入User ID/Password后点击[OK]。',
      zhTW:'點擊[Log In]。選擇[Operator]存取權限,輸入User ID/Password後點擊[OK]。',
      ja:'[Log In]をクリックします。[Operator]アクセスレベルを選択し、User ID/Passwordを入力後[OK]を押します。'
    }),
    slS(111,{
      en:'Place the unit tray on the first (leftmost) loader stacker. Place empty trays on the 2nd/3rd empty and reject-empty stackers. The \'Lot Start\' button cannot be clicked with nothing loaded — at least 6 empty trays must be placed in the Empty Stacker to proceed.',
      ko:'검사할 unit tray를 좌측 첫번째 loader stacker에, empty tray를 두번째·세번째 empty/reject empty stacker에 올려놓습니다. 아무것도 없으면 Lot Start를 클릭할 수 없으며, Empty Stacker에 최소 6개 이상의 Empty Tray가 있어야 진행됩니다.',
      zhCN:'将待检测的unit tray放置在最左侧第一个loader stacker上,将empty tray放置在第二、第三个empty/reject empty stacker上。若未放置任何托盘,则无法点击Lot Start;Empty Stacker中至少须放置6个以上Empty Tray才能进行。',
      zhTW:'將待檢測的unit tray放置在最左側第一個loader stacker上,將empty tray放置在第二、第三個empty/reject empty stacker上。若未放置任何托盤,則無法點擊Lot Start;Empty Stacker中至少須放置6個以上Empty Tray才能進行。',
      ja:'検査対象のunit trayを左側の1番目のloader stackerに、empty trayを2番目・3番目のempty/reject empty stackerに載せます。何も載っていない状態ではLot Startをクリックできず、Empty Stackerに最低6枚以上のEmpty Trayが必要です。'
    }),
    slS(112,{
      en:'Click the \'Job Open\' button, select the Job file, and click OK.',
      ko:'[Job Open] 버튼을 클릭하여 Job 파일을 선택하고 [확인]을 클릭합니다.',
      zhCN:'点击[Job Open]按钮,选择Job文件后点击[OK]。',
      zhTW:'點擊[Job Open]按鈕,選擇Job檔案後點擊[OK]。',
      ja:'[Job Open]ボタンをクリックしてJobファイルを選択し、[OK]をクリックします。'
    }),
    slS(113,{
      en:'After clicking Start, input the Lot ID and choose options: All Tray Are Loaded (inspect and end Lot vs. allow adding more trays), Sorting (use/don\'t use result-based sorting), Send 3D (store/don\'t store 3D debug data).',
      ko:'[Start] 클릭 후 Lot ID를 입력하고 옵션을 선택합니다: All Tray Are Loaded(검사 후 Lot 종료 여부), Sorting(결과 기반 소팅 사용 여부), Send 3D(디버그용 3D 데이터 저장 여부).',
      zhCN:'点击[Start]后输入Lot ID并选择选项:All Tray Are Loaded(检测后是否结束Lot)、Sorting(是否使用基于结果的分选)、Send 3D(是否保存调试用3D数据)。',
      zhTW:'點擊[Start]後輸入Lot ID並選擇選項:All Tray Are Loaded(檢測後是否結束Lot)、Sorting(是否使用基於結果的分選)、Send 3D(是否保存除錯用3D資料)。',
      ja:'[Start]をクリックした後、Lot IDを入力しオプションを選択します:All Tray Are Loaded(検査後にLotを終了するか)、Sorting(結果に基づくソーティングを使用するか)、Send 3D(デバッグ用3Dデータを保存するか)。'
    }),
    slS(114,{
      en:'When the Loader Stacker tray sensor triggers, a pop-up appears. [Yes]: end the Lot without inserting more trays. [No]: insert more trays into the Loader Stacker, then click No to keep the Lot running.',
      ko:'Loader Stacker의 트레이 센서가 감지되면 팝업이 나타납니다. [Yes]: 트레이 추가 투입 없이 Lot 종료. [No]: 트레이를 추가 투입 후 [No]를 클릭하여 Lot을 유지합니다.',
      zhCN:'当Loader Stacker的托盘传感器检测到时,会弹出提示窗口。[Yes]:不追加投入托盘,直接结束Lot。[No]:追加投入托盘后点击[No]以继续维持Lot运行。',
      zhTW:'當Loader Stacker的托盤感測器偵測到時,會彈出提示視窗。[Yes]:不追加投入托盤,直接結束Lot。[No]:追加投入托盤後點擊[No]以繼續維持Lot運行。',
      ja:'Loader Stackerのトレイセンサーが検知するとポップアップが表示されます。[Yes]:トレイを追加投入せずLotを終了します。[No]:トレイを追加投入した後[No]をクリックしてLotを継続します。'
    }),
    slS(115,{
      en:'Click the \'Lot Cancel\' button to end the Lot. Confirm by clicking \'Yes\' in the pop-up window.',
      ko:'Lot을 종료하려면 [Lot Cancel] 버튼을 클릭하고, 팝업에서 [Yes]를 클릭하여 종료합니다.',
      zhCN:'如需结束Lot,请点击[Lot Cancel]按钮,并在弹出窗口中点击[Yes]确认结束。',
      zhTW:'如需結束Lot,請點擊[Lot Cancel]按鈕,並在彈出視窗中點擊[Yes]確認結束。',
      ja:'Lotを終了するには[Lot Cancel]ボタンをクリックし、ポップアップで[Yes]をクリックして終了します。'
    }),
    slS(116,{
      en:'Empty Handler Start automatically removes trays remaining inside the equipment. UnClamp is used when removing a module\'s tray manually. Modules shown in green have a tray detected by the sensor.',
      ko:'Empty Handler Start는 설비 내부에 남은 트레이를 자동으로 제거합니다. UnClamp는 모듈의 트레이를 수동 제거할 때 사용합니다. 녹색으로 표시된 모듈은 센서에 트레이가 감지된 상태입니다.',
      zhCN:'Empty Handler Start会自动清除设备内部残留的托盘。UnClamp用于手动移除模块中的托盘。显示为绿色的模块表示传感器已检测到托盘。',
      zhTW:'Empty Handler Start會自動清除設備內部殘留的托盤。UnClamp用於手動移除模組中的托盤。顯示為綠色的模組表示感測器已偵測到托盤。',
      ja:'Empty Handler Startは設備内部に残っているトレイを自動的に除去します。UnClampはモジュールのトレイを手動で除去する際に使用します。緑色で表示されているモジュールは、センサーにトレイが検知されている状態です。'
    })
  ]}
 ]}
];

var PRELEARN_QUIZ_SMTV={
'1.1.1':[
  {q:{en:'What type of equipment is iSIS-SMTV?',ko:'iSIS-SMTV는 어떤 종류의 설비입니까?',zhCN:'iSIS-SMTV是什么类型的设备?',zhTW:'iSIS-SMTV是什麼類型的設備?',ja:'iSIS-SMTVはどのような種類の設備ですか?'},
   choices:[{en:'Bump-AOI equipment',ko:'Bump-AOI equipment',zhCN:'Bump-AOI设备',zhTW:'Bump-AOI設備',ja:'Bump-AOI設備'},{en:'Wire-bonding equipment',ko:'Wire-bonding equipment',zhCN:'引线键合设备',zhTW:'打線接合設備',ja:'ワイヤーボンディング設備'},{en:'Reflow oven',ko:'Reflow oven',zhCN:'回流焊炉',zhTW:'回流焊爐',ja:'リフロー炉'},{en:'Wafer prober',ko:'Wafer prober',zhCN:'晶圆探针台',zhTW:'晶圓探針台',ja:'ウェハプローバー'}],
   answer:0},
  {q:{en:'Where is 3D thickness valuation inspection measured on?',ko:'Thickness Valuation 3D 검사는 어디에서 측정됩니까?',zhCN:'Thickness Valuation的3D检测在何处测量?',zhTW:'Thickness Valuation的3D檢測在何處測量?',ja:'Thickness Valuationの3D検査はどこで測定されますか?'},
   choices:[{en:'A moving conveyor belt',ko:'이동하는 컨베이어 벨트',zhCN:'移动的传送带',zhTW:'移動的輸送帶',ja:'移動するコンベアベルト'},{en:'A suction jig with precise flatness',ko:'정밀한 평탄도의 Suction Jig',zhCN:'具有精密平面度的吸附治具(Suction Jig)',zhTW:'具有精密平面度的吸附治具(Suction Jig)',ja:'精密な平面度を持つ吸着治具(Suction Jig)'},{en:'A rotating turntable',ko:'회전하는 턴테이블',zhCN:'旋转的转台',zhTW:'旋轉的轉台',ja:'回転するターンテーブル'},{en:'A water bath',ko:'수조',zhCN:'水槽',zhTW:'水槽',ja:'水槽'}],
   answer:1}
],
'1.1.2':[
  {q:{en:'What kind of light source is suitable for WSI inspection?',ko:'WSI 검사에 적합한 광원의 특성은?',zhCN:'适合WSI检测的光源具有什么特性?',zhTW:'適合WSI檢測的光源具有什麼特性?',ja:'WSI検査に適した光源の特性は?'},
   choices:[{en:'Single frequency and coherent light',ko:'단일 파장과 일관성을 갖는 빛',zhCN:'单一波长且具有相干性的光',zhTW:'單一波長且具有相干性的光',ja:'単一波長かつ可干渉性(コヒーレント)を持つ光'},{en:'Broadband white light',ko:'광대역 백색광',zhCN:'宽频白光',zhTW:'寬頻白光',ja:'広帯域の白色光'},{en:'Any ambient light',ko:'임의의 주변광',zhCN:'任意环境光',zhTW:'任意環境光',ja:'任意の環境光'},{en:'Ultraviolet light only',ko:'자외선만',zhCN:'仅紫外光',zhTW:'僅紫外光',ja:'紫外光のみ'}],
   answer:0},
  {q:{en:'What creates the interference pattern used to build the 3D Z-map?',ko:'3D Z-map을 만드는 데 사용되는 것은?',zhCN:'用于生成3D Z-map的是什么?',zhTW:'用於生成3D Z-map的是什麼?',ja:'3D Z-mapを作成するために使用されるものは?'},
   choices:[{en:'Signal strength of the interference pattern',ko:'간섭무늬의 신호 세기',zhCN:'干涉条纹的信号强度',zhTW:'干涉條紋的訊號強度',ja:'干渉縞の信号強度'},{en:'Camera exposure time',ko:'카메라 노출 시간',zhCN:'相机曝光时间',zhTW:'相機曝光時間',ja:'カメラの露光時間'},{en:'Motor encoder position',ko:'모터 엔코더 위치',zhCN:'电机编码器位置',zhTW:'馬達編碼器位置',ja:'モーターエンコーダーの位置'},{en:'Tray barcode data',ko:'트레이 바코드 데이터',zhCN:'托盘条码数据',zhTW:'托盤條碼資料',ja:'トレイのバーコードデータ'}],
   answer:0}
],
'1.2.1':[
  {q:{en:'How many rails does the standard Rail System have?',ko:'표준 Rail System의 레일 수는?',zhCN:'标准Rail System共有多少条Rail?',zhTW:'標準Rail System共有多少條Rail?',ja:'標準Rail Systemのレール数は?'},
   choices:[{en:'3 Rail',ko:'3 Rail',zhCN:'3 Rail',zhTW:'3 Rail',ja:'3 Rail'},{en:'5 Rail',ko:'5 Rail',zhCN:'5 Rail',zhTW:'5 Rail',ja:'5 Rail'},{en:'7 Rail',ko:'7 Rail',zhCN:'7 Rail',zhTW:'7 Rail',ja:'7 Rail'},{en:'9 Rail',ko:'9 Rail',zhCN:'9 Rail',zhTW:'9 Rail',ja:'9 Rail'}],
   answer:2},
  {q:{en:'How many sets of 3D Vision does the machine have?',ko:'설비의 3D Vision 세트 수는?',zhCN:'该设备共有几组3D Vision?',zhTW:'該設備共有幾組3D Vision?',ja:'設備の3D Visionセット数は?'},
   choices:[{en:'1 SET',ko:'1 SET',zhCN:'1 SET',zhTW:'1 SET',ja:'1 SET'},{en:'2 SET',ko:'2 SET',zhCN:'2 SET',zhTW:'2 SET',ja:'2 SET'},{en:'3 SET',ko:'3 SET',zhCN:'3 SET',zhTW:'3 SET',ja:'3 SET'},{en:'4 SET',ko:'4 SET',zhCN:'4 SET',zhTW:'4 SET',ja:'4 SET'}],
   answer:1}
],
'1.2.2':[
  {q:{en:'What is the F.O.V of the 12M 3D Vision camera?',ko:'12M 3D Vision 카메라의 F.O.V는?',zhCN:'12M 3D Vision相机的F.O.V是多少?',zhTW:'12M 3D Vision相機的F.O.V是多少?',ja:'12M 3D VisionカメラのF.O.Vは?'},
   choices:[{en:'17.1 x 17.1 mm',ko:'17.1 x 17.1 mm',zhCN:'17.1 x 17.1 mm',zhTW:'17.1 x 17.1 mm',ja:'17.1 x 17.1 mm'},{en:'22 x 16.5 mm',ko:'22 x 16.5 mm',zhCN:'22 x 16.5 mm',zhTW:'22 x 16.5 mm',ja:'22 x 16.5 mm'},{en:'10 x 10 mm',ko:'10 x 10 mm',zhCN:'10 x 10 mm',zhTW:'10 x 10 mm',ja:'10 x 10 mm'},{en:'30 x 30 mm',ko:'30 x 30 mm',zhCN:'30 x 30 mm',zhTW:'30 x 30 mm',ja:'30 x 30 mm'}],
   answer:1},
  {q:{en:'What AF method does the 3D Vision module use?',ko:'3D Vision 모듈이 사용하는 AF 방식은?',zhCN:'3D Vision模块使用的AF方式是什么?',zhTW:'3D Vision模組使用的AF方式是什麼?',ja:'3D VisionモジュールのAF方式は?'},
   choices:[{en:'Contact-based autofocusing',ko:'접촉식 오토포커싱',zhCN:'基于接触式的自动对焦',zhTW:'基於接觸式的自動對焦',ja:'接触式のオートフォーカス'},{en:'Optical Triangulation Based Autofocusing',ko:'광학 삼각측량 방식 오토포커싱',zhCN:'基于光学三角测量法的自动对焦',zhTW:'基於光學三角測量法的自動對焦',ja:'光学三角測量方式のオートフォーカス'},{en:'Manual focus only',ko:'수동 포커스만',zhCN:'仅手动对焦',zhTW:'僅手動對焦',ja:'マニュアルフォーカスのみ'},{en:'Sonar-based ranging',ko:'소나 방식 거리측정',zhCN:'基于声纳的测距',zhTW:'基於聲納的測距',ja:'ソナー方式の測距'}],
   answer:1}
],
'1.2.3':[
  {q:{en:'When are safety stickers attached?',ko:'안전 스티커는 언제 부착합니까?',zhCN:'安全标签在何时粘贴?',zhTW:'安全標籤在何時黏貼?',ja:'安全ステッカーはいつ貼付しますか?'},
   choices:[{en:'Always in a fixed standard position',ko:'항상 고정된 표준 위치에',zhCN:'始终贴在固定的标准位置',zhTW:'始終貼在固定的標準位置',ja:'常に固定の標準位置に'},{en:'According to the customer\'s request',ko:'고객사의 요청에 따라',zhCN:'根据客户的要求',zhTW:'根據客戶的要求',ja:'顧客の要請に応じて'},{en:'Only for export equipment',ko:'수출용 설비에만',zhCN:'仅限出口设备',zhTW:'僅限出口設備',ja:'輸出向け設備のみ'},{en:'Never — they are optional',ko:'부착하지 않음 — 선택 사항',zhCN:'从不粘贴——为选配项',zhTW:'從不黏貼——為選配項',ja:'貼付しない——任意項目である'}],
   answer:1}
],
'1.3.1':[
  {q:{en:'Which PC is only turned on after the UPS is turned on?',ko:'UPS를 켠 후에만 켜는 PC는?',zhCN:'哪台PC必须在UPS开启后才能开启?',zhTW:'哪台PC必須在UPS開啟後才能開啟?',ja:'UPSをオンにした後にのみオンにするPCは?'},
   choices:[{en:'2D Vision PC',ko:'2D Vision PC',zhCN:'2D Vision PC',zhTW:'2D Vision PC',ja:'2D Vision PC'},{en:'3D Vision PC',ko:'3D Vision PC',zhCN:'3D Vision PC',zhTW:'3D Vision PC',ja:'3D Vision PC'},{en:'Host PC',ko:'Host PC',zhCN:'Host PC',zhTW:'Host PC',ja:'Host PC'},{en:'MSM controller',ko:'MSM controller',zhCN:'MSM控制器',zhTW:'MSM控制器',ja:'MSMコントローラー'}],
   answer:2},
  {q:{en:'What does TTM stand for?',ko:'TTM은 무엇의 약자입니까?',zhCN:'TTM是什么的缩写?',zhTW:'TTM是什麼的縮寫?',ja:'TTMは何の略ですか?'},
   choices:[{en:'Tray Transfer Module',ko:'Tray Transfer Module',zhCN:'Tray Transfer Module(托盘传送模块)',zhTW:'Tray Transfer Module(托盤傳送模組)',ja:'Tray Transfer Module(トレイ搬送モジュール)'},{en:'Total Test Machine',ko:'Total Test Machine',zhCN:'Total Test Machine(全测试机)',zhTW:'Total Test Machine(全測試機)',ja:'Total Test Machine(トータルテストマシン)'},{en:'Tool Torque Monitor',ko:'Tool Torque Monitor',zhCN:'Tool Torque Monitor(工具扭矩监视器)',zhTW:'Tool Torque Monitor(工具扭矩監視器)',ja:'Tool Torque Monitor(工具トルクモニター)'},{en:'Test Track Manager',ko:'Test Track Manager',zhCN:'Test Track Manager(测试轨道管理器)',zhTW:'Test Track Manager(測試軌道管理器)',ja:'Test Track Manager(テストトラックマネージャー)'}],
   answer:0}
],
'1.3.2':[
  {q:{en:'How many EMS (Emergency Stop) buttons are installed on the equipment?',ko:'설비에 설치된 EMS(비상정지) 버튼의 개수는?',zhCN:'设备上安装了多少个EMS(紧急停止)按钮?',zhTW:'設備上安裝了多少個EMS(緊急停止)按鈕?',ja:'設備に設置されているEMS(非常停止)ボタンの数は?'},
   choices:[{en:'2',ko:'2',zhCN:'2',zhTW:'2',ja:'2'},{en:'4',ko:'4',zhCN:'4',zhTW:'4',ja:'4'},{en:'6',ko:'6',zhCN:'6',zhTW:'6',ja:'6'},{en:'8',ko:'8',zhCN:'8',zhTW:'8',ja:'8'}],
   answer:2},
  {q:{en:'In Auto Mode, when does motor power get cut off?',ko:'Auto Mode에서 모터 전원이 차단되는 경우는?',zhCN:'在Auto Mode下,电机电源何时被切断?',zhTW:'在Auto Mode下,馬達電源何時被切斷?',ja:'Auto Modeでは、どのようなときにモーター電源が遮断されますか?'},
   choices:[{en:'When the upper door is unlocked',ko:'상부 도어가 unlock될 때',zhCN:'当上部门被解锁(unlock)时',zhTW:'當上部門被解鎖(unlock)時',ja:'上部ドアがunlockされたとき'},{en:'When the Reset button is pressed',ko:'Reset 버튼을 누를 때',zhCN:'当按下Reset按钮时',zhTW:'當按下Reset按鈕時',ja:'Resetボタンが押されたとき'},{en:'When Teach Mode is selected',ko:'Teach Mode를 선택할 때',zhCN:'当选择Teach Mode时',zhTW:'當選擇Teach Mode時',ja:'Teach Modeが選択されたとき'},{en:'When the Job is saved',ko:'Job을 저장할 때',zhCN:'当保存Job时',zhTW:'當儲存Job時',ja:'Jobが保存されたとき'}],
   answer:0}
],
'1.3.3':[
  {q:{en:'What must happen if the bump area is larger than the F.O.V during 3D inspection?',ko:'3D 검사 시 Bump Area가 F.O.V보다 크면 어떻게 합니까?',zhCN:'在3D检测时,若Bump Area大于F.O.V,应如何处理?',zhTW:'在3D檢測時,若Bump Area大於F.O.V,應如何處理?',ja:'3D検査時にBump AreaがF.O.Vより大きい場合、どうしますか?'},
   choices:[{en:'Skip the inspection',ko:'검사를 생략한다',zhCN:'跳过该检测',zhTW:'跳過該檢測',ja:'検査をスキップする'},{en:'Divide the inspection area into two or more',ko:'검사 영역을 2개 이상으로 나눈다',zhCN:'将检测区域划分为2个以上',zhTW:'將檢測區域劃分為2個以上',ja:'検査領域を2つ以上に分割する'},{en:'Reduce camera resolution',ko:'카메라 해상도를 낮춘다',zhCN:'降低相机分辨率',zhTW:'降低相機解析度',ja:'カメラの解像度を下げる'},{en:'Stop the equipment',ko:'설비를 정지시킨다',zhCN:'停止设备运行',zhTW:'停止設備運行',ja:'設備を停止する'}],
   answer:1},
  {q:{en:'What happens to units after inspection in the Unit Sorting step?',ko:'Unit Sorting 단계에서 검사 후 유닛은 어떻게 됩니까?',zhCN:'在Unit Sorting步骤中,检测完成后的Unit会如何处理?',zhTW:'在Unit Sorting步驟中,檢測完成後的Unit會如何處理?',ja:'Unit Sortingステップでは、検査後のユニットはどうなりますか?'},
   choices:[{en:'They are classified as Good or Reject',ko:'양품/불량으로 분류된다',zhCN:'被分类为Good(良品)或Reject(不良品)',zhTW:'被分類為Good(良品)或Reject(不良品)',ja:'Good(良品)またはReject(不良品)に分類される'},{en:'They are re-inspected automatically',ko:'자동으로 재검사된다',zhCN:'自动重新检测',zhTW:'自動重新檢測',ja:'自動的に再検査される'},{en:'They are discarded',ko:'폐기된다',zhCN:'被丢弃',zhTW:'被丟棄',ja:'廃棄される'},{en:'They are relabeled with a new barcode',ko:'새 바코드가 재부착된다',zhCN:'重新贴上新的条码',zhTW:'重新貼上新的條碼',ja:'新しいバーコードが再付与される'}],
   answer:0}
],
'2.1.1':[
  {q:{en:'What air pressure should each air regulator maintain?',ko:'각 Air Regulator가 유지해야 하는 압력은?',zhCN:'各Air Regulator应维持的气压是多少?',zhTW:'各Air Regulator應維持的氣壓是多少?',ja:'各Air Regulatorが維持すべき気圧は?'},
   choices:[{en:'1~2 bar',ko:'1~2 bar',zhCN:'1~2 bar',zhTW:'1~2 bar',ja:'1~2 bar'},{en:'4~6 bar',ko:'4~6 bar',zhCN:'4~6 bar',zhTW:'4~6 bar',ja:'4~6 bar'},{en:'10~12 bar',ko:'10~12 bar',zhCN:'10~12 bar',zhTW:'10~12 bar',ja:'10~12 bar'},{en:'20~25 bar',ko:'20~25 bar',zhCN:'20~25 bar',zhTW:'20~25 bar',ja:'20~25 bar'}],
   answer:1},
  {q:{en:'In Teach mode, what is required to supply motor power when Reset is pushed?',ko:'Teach mode에서 Reset을 눌러 모터 전원을 공급하려면?',zhCN:'在Teach mode下,按下Reset以供给电机电源需要满足什么条件?',zhTW:'在Teach mode下,按下Reset以供給馬達電源需要滿足什麼條件?',ja:'Teach modeでResetを押してモーター電源を供給するために必要な条件は?'},
   choices:[{en:'All EMS buttons must be in the pull (released) state',ko:'모든 EMS 버튼이 pull(해제) 상태여야 함',zhCN:'所有EMS按钮必须处于pull(释放)状态',zhTW:'所有EMS按鈕必須處於pull(釋放)狀態',ja:'すべてのEMSボタンがpull(解除)状態であること'},{en:'The main breaker must be off',ko:'메인 차단기가 꺼져 있어야 함',zhCN:'主断路器必须处于关闭状态',zhTW:'主斷路器必須處於關閉狀態',ja:'メインブレーカーがオフであること'},{en:'The Job file must be open',ko:'Job 파일이 열려 있어야 함',zhCN:'必须打开Job文件',zhTW:'必須開啟Job檔案',ja:'Jobファイルが開かれていること'},{en:'The UPS must be off',ko:'UPS가 꺼져 있어야 함',zhCN:'UPS必须处于关闭状态',zhTW:'UPS必須處於關閉狀態',ja:'UPSがオフであること'}],
   answer:0}
],
'2.1.2':[
  {q:{en:'What happens automatically when the LED controller is turned on?',ko:'LED Controller를 켜면 자동으로 일어나는 일은?',zhCN:'打开LED Controller时会自动发生什么?',zhTW:'開啟LED Controller時會自動發生什麼?',ja:'LED Controllerをオンにすると自動的に起こることは?'},
   choices:[{en:'The camera also turns on (varies by spec)',ko:'카메라도 함께 켜짐(사양에 따라 다름)',zhCN:'相机也会随之开启(依规格而异)',zhTW:'相機也會隨之開啟(依規格而異)',ja:'カメラも連動してオンになる(仕様により異なる)'},{en:'The Host PC shuts down',ko:'Host PC가 종료됨',zhCN:'Host PC关机',zhTW:'Host PC關機',ja:'Host PCがシャットダウンする'},{en:'The PZT controller resets',ko:'PZT 컨트롤러가 리셋됨',zhCN:'PZT控制器重置',zhTW:'PZT控制器重置',ja:'PZTコントローラーがリセットされる'},{en:'The tray ejects',ko:'트레이가 배출됨',zhCN:'托盘排出',zhTW:'托盤排出',ja:'トレイが排出される'}],
   answer:0}
],
'2.1.3':[
  {q:{en:'In what order should the equipment be turned off?',ko:'설비를 끌 때의 올바른 순서는?',zhCN:'关闭设备时应遵循什么顺序?',zhTW:'關閉設備時應遵循什麼順序?',ja:'設備をオフにする際の正しい順序は?'},
   choices:[{en:'Same order as turning on',ko:'켤 때와 동일한 순서',zhCN:'与开启时相同的顺序',zhTW:'與開啟時相同的順序',ja:'オンにするときと同じ順序'},{en:'Reverse order of turning on',ko:'켤 때의 반대 순서',zhCN:'与开启时相反的顺序',zhTW:'與開啟時相反的順序',ja:'オンにするときと逆の順序'},{en:'Any order is fine',ko:'순서는 상관없음',zhCN:'顺序无所谓',zhTW:'順序無所謂',ja:'順序はどうでもよい'},{en:'Main panel first, then controllers',ko:'메인 패널을 먼저, 그 다음 컨트롤러',zhCN:'先关主面板,再关控制器',zhTW:'先關主面板,再關控制器',ja:'メインパネルを先に、その後コントローラー'}],
   answer:1}
],
'2.2.1':[
  {q:{en:'Which key combination switches between HOST/Vision PC screens?',ko:'HOST/Vision PC 화면 전환 단축키는?',zhCN:'切换HOST/Vision PC画面的快捷键是什么?',zhTW:'切換HOST/Vision PC畫面的快捷鍵是什麼?',ja:'HOST/Vision PC画面を切り替えるキー操作は?'},
   choices:[{en:'Alt+Tab',ko:'Alt+Tab',zhCN:'Alt+Tab',zhTW:'Alt+Tab',ja:'Alt+Tab'},{en:'Ctrl+Ctrl+1~4',ko:'Ctrl+Ctrl+1~4',zhCN:'Ctrl+Ctrl+1~4',zhTW:'Ctrl+Ctrl+1~4',ja:'Ctrl+Ctrl+1~4'},{en:'Ctrl+Alt+Del',ko:'Ctrl+Alt+Del',zhCN:'Ctrl+Alt+Del',zhTW:'Ctrl+Alt+Del',ja:'Ctrl+Alt+Del'},{en:'F1~F4',ko:'F1~F4',zhCN:'F1~F4',zhTW:'F1~F4',ja:'F1~F4'}],
   answer:1}
],
'2.2.2':[
  {q:{en:'When can inspection proceed based on the system status?',ko:'검사를 진행할 수 있는 시스템 상태 조건은?',zhCN:'根据系统状态,何时可以进行检测?',zhTW:'根據系統狀態,何時可以進行檢測?',ja:'システム状態に基づき、いつ検査を開始できますか?'},
   choices:[{en:'When all statuses show ready (green)',ko:'모든 상태가 준비(녹색)일 때',zhCN:'所有状态均显示为就绪(绿色)时',zhTW:'所有狀態均顯示為就緒(綠色)時',ja:'すべての状態が準備完了(緑色)のとき'},{en:'When only Vision is ready',ko:'Vision만 준비된 상태일 때',zhCN:'仅Vision就绪时',zhTW:'僅Vision就緒時',ja:'Visionのみ準備完了のとき'},{en:'As soon as the Host PC boots',ko:'Host PC가 부팅되는 즉시',zhCN:'Host PC启动后立即',zhTW:'Host PC啟動後立即',ja:'Host PC起動直後'},{en:'After 5 minutes of warm-up',ko:'5분 예열 후',zhCN:'预热5分钟后',zhTW:'預熱5分鐘後',ja:'5分間のウォームアップ後'}],
   answer:0}
],
'2.2.3':[
  {q:{en:'Which button creates the information input window for product inspection?',ko:'제품 검사 정보 입력창을 생성하는 버튼은?',zhCN:'哪个按钮会生成产品检测信息输入窗口?',zhTW:'哪個按鈕會產生產品檢測資訊輸入視窗?',ja:'製品検査情報の入力ウィンドウを作成するボタンは?'},
   choices:[{en:'Job Save',ko:'Job Save',zhCN:'Job Save',zhTW:'Job Save',ja:'Job Save'},{en:'Start',ko:'Start',zhCN:'Start',zhTW:'Start',ja:'Start'},{en:'Pause',ko:'Pause',zhCN:'Pause',zhTW:'Pause',ja:'Pause'},{en:'Log',ko:'Log',zhCN:'Log',zhTW:'Log',ja:'Log'}],
   answer:1},
  {q:{en:'What does the UPH field on the Host UI represent?',ko:'Host UI의 UPH 항목이 의미하는 것은?',zhCN:'Host UI中的UPH项目代表什么?',zhTW:'Host UI中的UPH項目代表什麼?',ja:'Host UIのUPH項目が意味するものは?'},
   choices:[{en:'Units produced per hour',ko:'시간당 생산되는 Unit 수',zhCN:'每小时生产的Unit数量',zhTW:'每小時生產的Unit數量',ja:'1時間あたりの生産Unit数'},{en:'Total unit count',ko:'전체 Unit 수량',zhCN:'Unit总数量',zhTW:'Unit總數量',ja:'Unit総数'},{en:'Unit pass rate',ko:'Unit 합격률',zhCN:'Unit合格率',zhTW:'Unit合格率',ja:'Unit合格率'},{en:'Upload history',ko:'업로드 이력',zhCN:'上传历史记录',zhTW:'上傳歷史記錄',ja:'アップロード履歴'}],
   answer:0}
],
'2.2.4':[
  {q:{en:'What color change indicates the Handler has completed initialization?',ko:'Handler 초기화 완료 시 아이콘 색상 변화는?',zhCN:'Handler完成初始化时,图标颜色会如何变化?',zhTW:'Handler完成初始化時,圖示顏色會如何變化?',ja:'Handlerの初期化完了時、アイコンの色はどう変化しますか?'},
   choices:[{en:'Green to red',ko:'녹색에서 빨간색으로',zhCN:'绿色变红色',zhTW:'綠色變紅色',ja:'緑色から赤色へ'},{en:'Red to green',ko:'빨간색에서 녹색으로',zhCN:'红色变绿色',zhTW:'紅色變綠色',ja:'赤色から緑色へ'},{en:'Yellow to blue',ko:'노란색에서 파란색으로',zhCN:'黄色变蓝色',zhTW:'黃色變藍色',ja:'黄色から青色へ'},{en:'No color change',ko:'색상 변화 없음',zhCN:'颜色不变',zhTW:'顏色不變',ja:'色は変わらない'}],
   answer:1}
],
'2.3.1':[
  {q:{en:'What is the minimum number of empty trays required in the Empty Stacker to start a Lot?',ko:'Lot을 시작하기 위해 Empty Stacker에 필요한 최소 Empty Tray 수는?',zhCN:'启动Lot时,Empty Stacker中所需的最少Empty Tray数量是多少?',zhTW:'啟動Lot時,Empty Stacker中所需的最少Empty Tray數量是多少?',ja:'Lotを開始するためにEmpty Stackerに必要な最小Empty Tray数は?'},
   choices:[{en:'2',ko:'2',zhCN:'2',zhTW:'2',ja:'2'},{en:'4',ko:'4',zhCN:'4',zhTW:'4',ja:'4'},{en:'6',ko:'6',zhCN:'6',zhTW:'6',ja:'6'},{en:'10',ko:'10',zhCN:'10',zhTW:'10',ja:'10'}],
   answer:2},
  {q:{en:'What does clicking \'Lot Cancel\' followed by \'Yes\' do?',ko:'[Lot Cancel] 후 [Yes]를 클릭하면?',zhCN:'点击[Lot Cancel]后再点击[Yes]会执行什么操作?',zhTW:'點擊[Lot Cancel]後再點擊[Yes]會執行什麼操作?',ja:'[Lot Cancel]の後に[Yes]をクリックすると何が起こりますか?'},
   choices:[{en:'Pauses the Lot temporarily',ko:'Lot을 일시 정지함',zhCN:'暂时暂停Lot',zhTW:'暫時暫停Lot',ja:'Lotを一時的に一時停止する'},{en:'Ends the Lot',ko:'Lot을 종료함',zhCN:'结束Lot',zhTW:'結束Lot',ja:'Lotを終了する'},{en:'Restarts the equipment',ko:'설비를 재시작함',zhCN:'重新启动设备',zhTW:'重新啟動設備',ja:'設備を再起動する'},{en:'Saves the current Job',ko:'현재 Job을 저장함',zhCN:'保存当前Job',zhTW:'儲存目前Job',ja:'現在のJobを保存する'}],
   answer:1}
]
};
