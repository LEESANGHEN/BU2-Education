/* ===============================================
   사전 선행학습 콘텐츠 데이터 (NBGA)
   출처: iSIS-NBGA Level 00~01 Training Manual_EN_20230619.pptx (133 slides)
=============================================== */
function pnN(n){return 'prelearn-slides/nbga/slide-'+String(n).padStart(3,'0')+'.jpg';}
function slN(n,tx){return {n:n,img:pnN(n),tx:tx};}
function dividerN(n){return {n:n,img:pnN(n),tx:null,isDivider:true};}
var IMG_ONLY_TX_NBGA={ko:'위 이미지에 표시된 부품 명칭을 확인하세요.',en:'Refer to the labeled parts in the image above.',zhCN:'请参考上方图片中标注的部件名称。',zhTW:'請參考上方圖片中標註的零件名稱。',ja:'上の画像に表示された部品名称を確認してください。'};
function imgOnlyN(n,suffix){
  if(!suffix){return {ko:IMG_ONLY_TX_NBGA.ko,en:IMG_ONLY_TX_NBGA.en,zhCN:IMG_ONLY_TX_NBGA.zhCN,zhTW:IMG_ONLY_TX_NBGA.zhTW,ja:IMG_ONLY_TX_NBGA.ja};}
  return {ko:IMG_ONLY_TX_NBGA.ko+' '+suffix.ko,en:IMG_ONLY_TX_NBGA.en+' '+suffix.en,zhCN:IMG_ONLY_TX_NBGA.zhCN+' '+suffix.zhCN,zhTW:IMG_ONLY_TX_NBGA.zhTW+' '+suffix.zhTW,ja:IMG_ONLY_TX_NBGA.ja+' '+suffix.ja};
}

var PRELEARN_CHAPTERS_NBGA=[
{code:'1',title:{en:'Chapter 1. Introduce',ko:'1장. 설비 소개 (Level 0)',zhCN:'第1章. 设备介绍 (Level 0)',zhTW:'第1章. 設備介紹 (Level 0)',ja:'第1章 設備紹介 (Level 0)'},
 sections:[
  {code:'1.1.1',title:{en:'Introduction & Inspection Items',ko:'설비 소개 및 검사 항목',zhCN:'设备介绍及检验项目',zhTW:'設備介紹及檢驗項目',ja:'設備紹介及び検査項目'},slides:[
    dividerN(4),
    slN(5,{
      en:'iSIS-NBGA is a Bump-AOI equipment. The tray containing the unit is loaded into the loader and automatically sorted after inspection and ejected into the unloader.\n\nInspection target: FC-BGA, FC-CSP\nInspection items: Bump Height, Bump Area, Warpage, Bump Coplanarity, Bump Diameter, Bump Missing, Bump Bridge, Foreign material, Scratch, Thickness Valuation, Etc.',
      ko:'iSIS-NBGA는 Bump-AOI 설비입니다. Unit이 담긴 Tray를 Loader에 적재, 검사 후 자동 Sorting 되어 Unloader로 배출됩니다.\n\n검사 대상: FC-BGA, FC-CSP\n검사 항목: Bump Height, Bump Area, Warpage, Bump Coplanarity, Bump Diameter, Bump Missing, Bump Bridge, 이물, 스크래치, Thickness Valuation 등',
      zhCN:'iSIS-NBGA是一款Bump-AOI(凸块外观检测)设备。装有产品的托盘放入Loader后,经检测自动分选并从Unloader排出。\n\n检测对象:FC-BGA、FC-CSP\n检测项目:Bump Height(凸块高度)、Bump Area(凸块面积)、Warpage(翘曲)、Bump Coplanarity(凸块共面度)、Bump Diameter(凸块直径)、Bump Missing(凸块缺失)、Bump Bridge(凸块桥连)、异物、划伤、Thickness Valuation(厚度评估)等',
      zhTW:'iSIS-NBGA是一款Bump-AOI(凸塊外觀檢測)設備。裝有產品的托盤放入Loader後,經檢測自動分選並從Unloader排出。\n\n檢測對象:FC-BGA、FC-CSP\n檢測項目:Bump Height(凸塊高度)、Bump Area(凸塊面積)、Warpage(翹曲)、Bump Coplanarity(凸塊共面度)、Bump Diameter(凸塊直徑)、Bump Missing(凸塊缺失)、Bump Bridge(凸塊橋接)、異物、刮傷、Thickness Valuation(厚度評估)等',
      ja:'iSIS-NBGAはBump-AOI設備です。Unitが入ったTrayをLoaderに投入すると、検査後自動的にSortingされ、Unloaderへ排出されます。\n\n検査対象:FC-BGA、FC-CSP\n検査項目:Bump Height、Bump Area、Warpage、Bump Coplanarity、Bump Diameter、Bump Missing、Bump Bridge、異物、スクラッチ、Thickness Valuation等'
    })
  ]},
  {code:'1.1.2',title:{en:'Inspection Principle',ko:'검사 원리',zhCN:'检测原理',zhTW:'檢測原理',ja:'検査原理'},slides:[
    dividerN(6),
    slN(7,{
      en:'A light source for inspection using WSI is suitable for light having single frequency and coherent. If you use inconsistent light, you cannot see interference.',
      ko:'WSI를 이용한 검사를 하기 위한 광원은 단일 파장과 일관성을 갖는 빛이 적합하다. 만약 우리가 일관성 없는 빛을 사용한다면, 우리는 간섭을 볼 수 없다.',
      zhCN:'使用WSI进行检测的光源应为单一波长且具有相干性的光。若使用不相干的光,则无法观察到干涉现象。',
      zhTW:'使用WSI進行檢測的光源應為單一波長且具有相干性的光。若使用不相干的光,則無法觀察到干涉現象。',
      ja:'WSIを利用した検査を行うための光源は、単一波長かつ可干渉性(コヒーレント)を持つ光が適している。もし一貫性のない光を使用すると、干渉を確認することができない。'
    }),
    slN(8,{
      en:'In the interference experiment using monochromatic light as a light source, the light becomes stronger where the crest overlap, and the light becomes weaker where the crest and trough overlap. As a result, the lightest part and the darkest part alternately appear, resulting in an interference pattern.',
      ko:'단색광을 광원으로 사용해서 간섭 실험을 하면, 마루와 마루가 겹치는 곳에서는 빛이 강해지고, 골과 골이 겹치는 곳에서는 빛이 약해진다. 그 결과, 빛이 가장 밝은 부분과 가장 어두운 부분이 번갈아 나타나게 되어 간섭 무늬가 생긴다.',
      zhCN:'使用单色光作为光源进行干涉实验时,波峰与波峰重叠处光会增强,波峰与波谷重叠处光会减弱。因此,最亮和最暗的部分交替出现,形成干涉条纹。',
      zhTW:'使用單色光作為光源進行干涉實驗時,波峰與波峰重疊處光會增強,波峰與波谷重疊處光會減弱。因此,最亮和最暗的部分交替出現,形成干涉條紋。',
      ja:'単色光を光源として干渉実験を行うと、山と山が重なる箇所では光が強くなり、山と谷が重なる箇所では光が弱くなる。その結果、最も明るい部分と最も暗い部分が交互に現れ、干渉縞が生じる。'
    }),
    slN(9,{
      en:'Use a single light source LED, Laser to generate a beam and two beams via beam splitter. When the beam reflected at the same distance(d1=d2) is synthesized into one beam, an interference pattern due to constructive and destructive interference may be checked. This method can obtain data by performing contactless measurements on the sample surface.',
      ko:'단일 광원(LED, Laser)을 사용하여 빔을 생성하고, B/S를 통해 두 개의 빔을 생성한다. 동일한 거리(d1=d2)에서 반사된 빔을 한 개의 빔으로 합성하였을 때 보강, 상쇄 간섭에 의한 간섭무늬를 확인할 수 있다. 이 방법은 시료 표면의 대한 비 접촉 측정을 하여 데이터를 얻을 수 있다.',
      zhCN:'使用单一光源(LED、激光)产生光束,并通过分光镜(B/S)生成两束光。当在相同距离(d1=d2)反射的光束合成为一束时,可确认由相长与相消干涉产生的干涉条纹。此方法可对试样表面进行非接触测量以获取数据。',
      zhTW:'使用單一光源(LED、雷射)產生光束,並透過分光鏡(B/S)生成兩束光。當在相同距離(d1=d2)反射的光束合成為一束時,可確認由相長與相消干涉產生的干涉條紋。此方法可對試樣表面進行非接觸測量以獲取數據。',
      ja:'単一光源(LED、レーザー)を使用してビームを生成し、B/S(ビームスプリッター)を通じて2つのビームを生成する。同一距離(d1=d2)で反射したビームを1つのビームに合成すると、建設的・破壊的干渉による干渉縞を確認できる。この方法は試料表面に対して非接触測定を行うことでデータを得ることができる。'
    }),
    slN(10,{
      en:'It is an interference pattern with the inspection method. 3D Z-Map is made through the signal strength of the pattern.',
      ko:'검사 방법과 실제 간섭무늬 패턴이다. 패턴의 신호 세기를 통해 3D Z-Map을 생성한 모습이다.',
      zhCN:'这是检测方法所对应的干涉条纹图案。通过条纹的信号强度生成3D Z-Map。',
      zhTW:'這是檢測方法所對應的干涉條紋圖案。透過條紋的訊號強度生成3D Z-Map。',
      ja:'検査方法と実際の干渉縞パターンである。パターンの信号強度を通じて3D Z-Mapを生成した様子である。'
    })
  ]},
  {code:'1.2.1',title:{en:'SEMCO, Kyocera Spec',ko:'SEMCO, Kyocera 사양',zhCN:'SEMCO、京瓷规格',zhTW:'SEMCO、京瓷規格',ja:'SEMCO、京セラ仕様'},slides:[
    dividerN(11),
    slN(12,imgOnlyN(12,{en:'(SEMCO, Kyocera dimensions — Front view 2580 x 2410mm, Right view 1710 x 1810mm)',ko:'(SEMCO, Kyocera 치수 — 정면 2580 x 2410mm, 우측면 1710 x 1810mm)',zhCN:'(SEMCO、京瓷尺寸 — 正视图2580 x 2410mm,右视图1710 x 1810mm)',zhTW:'(SEMCO、京瓷尺寸 — 正視圖2580 x 2410mm,右視圖1710 x 1810mm)',ja:'(SEMCO、京セラ寸法 — 正面図2580 x 2410mm、右側面図1710 x 1810mm)'})),
    slN(13,{
      en:'Utility & Electric Spec (SEMCO, Kyocera) — Electric Phase: Three phase / Voltage: AC 220V or 208V / Current: 50A / KVA: 19KVA / UPS: Host PC only / Certification: SEMCO CE Mark, Kyocera N/A / Air(CDA): Dry air 5~6kgf/cm2, Air Hose 12Φ x 2ea / Air consumption: 500 L/min / Weight: 3000kg(3 ton) / Size: 2580(W) x 1710(D) x 2410(H) mm.',
      ko:'Utility & Electric 사양(SEMCO, Kyocera) — 전기 상: 3상 / 전압: AC 220V 또는 208V / 전류: 50A / 용량: 19KVA / UPS: Host PC 전용 / 인증: SEMCO CE Mark, Kyocera 해당없음 / 공압(CDA): 5~6kgf/cm2, 에어호스 12Φ x 2ea / 공압 소모량: 500 L/min / 중량: 3000kg(3톤) / 크기: 2580(W) x 1710(D) x 2410(H) mm',
      zhCN:'公用设施与电气规格(SEMCO、京瓷) — 电相:三相 / 电压:AC 220V或208V / 电流:50A / 容量:19KVA / UPS:仅Host PC / 认证:SEMCO CE Mark,京瓷不适用 / 空压(CDA):干燥空气5~6kgf/cm2,气管12Φ x 2条 / 耗气量:500 L/min / 重量:3000kg(3吨) / 尺寸:2580(W) x 1710(D) x 2410(H) mm',
      zhTW:'公用設施與電氣規格(SEMCO、京瓷) — 電相:三相 / 電壓:AC 220V或208V / 電流:50A / 容量:19KVA / UPS:僅Host PC / 認證:SEMCO CE Mark,京瓷不適用 / 空壓(CDA):乾燥空氣5~6kgf/cm2,氣管12Φ x 2條 / 耗氣量:500 L/min / 重量:3000kg(3噸) / 尺寸:2580(W) x 1710(D) x 2410(H) mm',
      ja:'ユーティリティ・電気仕様(SEMCO、京セラ) — 電気相:三相 / 電圧:AC 220Vまたは208V / 電流:50A / 容量:19KVA / UPS:Host PCのみ / 認証:SEMCO CE Mark、京セラ該当なし / エア(CDA):ドライエア5~6kgf/cm2、エアホース12Φ x 2本 / 空気消費量:500 L/min / 重量:3000kg(3トン) / サイズ:2580(W) x 1710(D) x 2410(H) mm'
    }),
    slN(14,{
      en:'Handler Spec (SEMCO, Kyocera) — Rail: 6 Rail System (Input: Loader/Empty, Output: Good/Buffer/Reject1,2) / Tray Stacker: Input Tray 40 trays(7.62mm), JEDEC/EIAJ standard / Number of Vision: 3D Vision 2 SET, 2D Vision 1 SET / Tray Indexer: Dual Loader Index, Roller Guide Block, Rail Tray check sensor / Tray Sorter: Tray Check Sensor / Tray Transfer: Tray Check Sensor / Sorting Picker: 2-Picker with Reject Unit Sorting function, Gap Motor installed.',
      ko:'Handler 사양(SEMCO, Kyocera) — Rail: 6 Rail 시스템(Input: Loader/Empty, Output: Good/Buffer/Reject1,2) / Tray Stacker: Input Tray 40장(7.62mm), JEDEC/EIAJ 규격 / Vision 수량: 3D Vision 2식, 2D Vision 1식 / Tray Indexer: Dual Loader Index, Roller Guide Block, Rail Tray check sensor 적용 / Tray Sorter: Tray Check Sensor / Tray Transfer: Tray Check Sensor / Sorting Picker: 2-Picker, Reject Unit Sorting 기능, Gap Motor 장착',
      zhCN:'Handler规格(SEMCO、京瓷) — Rail:6轨系统(输入:Loader/Empty,输出:Good/Buffer/Reject1,2) / Tray Stacker:输入托盘40片(7.62mm),JEDEC/EIAJ标准 / Vision数量:3D Vision 2套,2D Vision 1套 / Tray Indexer:配备Dual Loader Index、导轨滑块、Rail Tray检测传感器 / Tray Sorter:Tray检测传感器 / Tray Transfer:Tray检测传感器 / Sorting Picker:2-Picker,具备不良品分选功能,配备Gap Motor',
      zhTW:'Handler規格(SEMCO、京瓷) — Rail:6軌系統(輸入:Loader/Empty,輸出:Good/Buffer/Reject1,2) / Tray Stacker:輸入托盤40片(7.62mm),JEDEC/EIAJ標準 / Vision數量:3D Vision 2套,2D Vision 1套 / Tray Indexer:配備Dual Loader Index、導軌滑塊、Rail Tray檢測感測器 / Tray Sorter:Tray檢測感測器 / Tray Transfer:Tray檢測感測器 / Sorting Picker:2-Picker,具備不良品分選功能,配備Gap Motor',
      ja:'Handler仕様(SEMCO、京セラ) — Rail:6レールシステム(入力:Loader/Empty、出力:Good/Buffer/Reject1,2) / Tray Stacker:入力Tray 40枚(7.62mm)、JEDEC/EIAJ規格 / Vision数量:3D Vision 2セット、2D Vision 1セット / Tray Indexer:Dual Loader Index、Roller Guide Block、Rail Tray checkセンサー搭載 / Tray Sorter:Tray Checkセンサー / Tray Transfer:Tray Checkセンサー / Sorting Picker:2-Picker、Reject Unit Sorting機能、Gap Motor搭載'
    }),
    slN(15,{
      en:'2D Vision Module Spec, 25M Camera (SEMCO, Kyocera) — Camera: CLF-C5180M-IF000(25M) / Lens: x0.8 Telecentric Lens(Pixel Resolution 5.5um) / F.O.V: 27.5mm x 27.5mm / Scan Range: N/A / AF Module: N/A / Inspection Item: Diameter, Top Diameter, Bridge, FM, SC / Accuracy: N/A / Repeatability: <1um(@Diameter 3σ Max), <20(@PT Max) / Reproducibility: <2um(@Diameter 3σ Max), <30(@PT Max).',
      ko:'2D Vision Module 사양, 25M 카메라(SEMCO, Kyocera) — 카메라: CLF-C5180M-IF000(25M) / 렌즈: x0.8 Telecentric Lens(픽셀 분해능 5.5um) / F.O.V: 27.5mm x 27.5mm / Scan Range: 해당없음 / AF Module: 해당없음 / 검사 항목: Diameter, Top Diameter, Bridge, FM, SC / Accuracy: 해당없음 / Repeatability: <1um(@Diameter 3σ Max), <20(@PT Max) / Reproducibility: <2um(@Diameter 3σ Max), <30(@PT Max)',
      zhCN:'2D Vision模块规格,25M相机(SEMCO、京瓷) — 相机:CLF-C5180M-IF000(25M) / 镜头:x0.8远心镜头(像素分辨率5.5um) / F.O.V:27.5mm x 27.5mm / 扫描范围:不适用 / AF模块:不适用 / 检测项目:Diameter、Top Diameter、Bridge、FM、SC / 精度:不适用 / 重复性:<1um(@Diameter 3σ Max),<20(@PT Max) / 再现性:<2um(@Diameter 3σ Max),<30(@PT Max)',
      zhTW:'2D Vision模組規格,25M相機(SEMCO、京瓷) — 相機:CLF-C5180M-IF000(25M) / 鏡頭:x0.8遠心鏡頭(像素解析度5.5um) / F.O.V:27.5mm x 27.5mm / 掃描範圍:不適用 / AF模組:不適用 / 檢測項目:Diameter、Top Diameter、Bridge、FM、SC / 精度:不適用 / 重複性:<1um(@Diameter 3σ Max),<20(@PT Max) / 再現性:<2um(@Diameter 3σ Max),<30(@PT Max)',
      ja:'2D Visionモジュール仕様、25Mカメラ(SEMCO、京セラ) — カメラ:CLF-C5180M-IF000(25M) / レンズ:x0.8テレセントリックレンズ(画素分解能5.5um) / F.O.V:27.5mm x 27.5mm / スキャン範囲:該当なし / AFモジュール:該当なし / 検査項目:Diameter、Top Diameter、Bridge、FM、SC / 精度:該当なし / 繰返し性:<1um(@Diameter 3σ Max)、<20(@PT Max) / 再現性:<2um(@Diameter 3σ Max)、<30(@PT Max)'
    }),
    slN(16,{
      en:'2D Vision Module Spec, 67M Camera (SEMCO, Kyocera) — Camera: G3-XM01-M8205(67M, 8K x 8K), 30fps, CXP6 / Lens: x0.8 Telecentric Lens(Pixel Resolution 2.5um) / F.O.V: 20mm x 20mm / AF Module: Optical Triangulation Based Autofocusing, Ball Screw Pitch 2mm, Reducer Rate 5:1 / Inspection Item: Diameter, Top Diameter, Bridge, FM, SC / Repeatability: <1um(@Diameter 3σ Max), <20(@PT Max) / Reproducibility: <2um(@Diameter 3σ Max), <30(@PT Max).',
      ko:'2D Vision Module 사양, 67M 카메라(SEMCO, Kyocera) — 카메라: G3-XM01-M8205(67M, 8K x 8K), 30fps, CXP6 / 렌즈: x0.8 Telecentric Lens(픽셀 분해능 2.5um) / F.O.V: 20mm x 20mm / AF Module: 광학 삼각측량 방식 오토포커싱, Ball Screw Pitch 2mm, 감속비 5:1 / 검사 항목: Diameter, Top Diameter, Bridge, FM, SC / Repeatability: <1um(@Diameter 3σ Max), <20(@PT Max) / Reproducibility: <2um(@Diameter 3σ Max), <30(@PT Max)',
      zhCN:'2D Vision模块规格,67M相机(SEMCO、京瓷) — 相机:G3-XM01-M8205(67M,8K x 8K),30fps,CXP6 / 镜头:x0.8远心镜头(像素分辨率2.5um) / F.O.V:20mm x 20mm / AF模块:基于光学三角测量的自动对焦,滚珠丝杠螺距2mm,减速比5:1 / 检测项目:Diameter、Top Diameter、Bridge、FM、SC / 重复性:<1um(@Diameter 3σ Max),<20(@PT Max) / 再现性:<2um(@Diameter 3σ Max),<30(@PT Max)',
      zhTW:'2D Vision模組規格,67M相機(SEMCO、京瓷) — 相機:G3-XM01-M8205(67M,8K x 8K),30fps,CXP6 / 鏡頭:x0.8遠心鏡頭(像素解析度2.5um) / F.O.V:20mm x 20mm / AF模組:基於光學三角測量的自動對焦,滾珠螺桿螺距2mm,減速比5:1 / 檢測項目:Diameter、Top Diameter、Bridge、FM、SC / 重複性:<1um(@Diameter 3σ Max),<20(@PT Max) / 再現性:<2um(@Diameter 3σ Max),<30(@PT Max)',
      ja:'2D Visionモジュール仕様、67Mカメラ(SEMCO、京セラ) — カメラ:G3-XM01-M8205(67M、8K x 8K)、30fps、CXP6 / レンズ:x0.8テレセントリックレンズ(画素分解能2.5um) / F.O.V:20mm x 20mm / AFモジュール:光学式三角測量方式オートフォーカス、ボールネジピッチ2mm、減速比5:1 / 検査項目:Diameter、Top Diameter、Bridge、FM、SC / 繰返し性:<1um(@Diameter 3σ Max)、<20(@PT Max) / 再現性:<2um(@Diameter 3σ Max)、<30(@PT Max)'
    }),
    slN(17,{
      en:'3D Vision Module Spec, Single optics (SEMCO, Kyocera) — Camera: 12M Pixel(4K x 3K), 320fps, CXP / Lens: x1.0 Telecentric Lens(Pixel Resolution 5.5um) / F.O.V: 22mm x 16.5mm / Scan Range: 500um(PZT, PI type) or 600um(NanoFaktur type), 5mm(Z-Axis) / AF Module: Optical Triangulation Based Autofocusing, Ball Screw Pitch 5mm, Reducer Rate 10:1 / Inspection Item: Bump Height, Coplanarity, CAW / Accuracy: <1um(@10/30/50um Standard Height unit) / Repeatability: <1um(Bump Level, Bump Height), <1um(Unit Level 3Sigma, Coplanarity/CAW), <20(Bump Level PT) / Reproducibility: <1.5um(Bump Level), <1.5um(Unit Level, Coplanarity/CAW), <30(Bump Level PT).',
      ko:'3D Vision Module 사양, Single optics(SEMCO, Kyocera) — 카메라: 12M Pixel(4K x 3K), 320fps, CXP / 렌즈: x1.0 Telecentric Lens(픽셀 분해능 5.5um) / F.O.V: 22mm x 16.5mm / Scan Range: 500um(PZT, PI 타입) 또는 600um(NanoFaktur 타입), 5mm(Z축) / AF Module: 광학 삼각측량 방식 오토포커싱, Ball Screw Pitch 5mm, 감속비 10:1 / 검사 항목: Bump Height, Coplanarity, CAW / Accuracy: <1um(@10/30/50um 표준 높이 유닛) / Repeatability: <1um(Bump Level, Bump Height), <1um(Unit Level 3Sigma, Coplanarity/CAW), <20(Bump Level PT) / Reproducibility: <1.5um(Bump Level), <1.5um(Unit Level, Coplanarity/CAW), <30(Bump Level PT)',
      zhCN:'3D Vision模块规格,单光路(SEMCO、京瓷) — 相机:12M Pixel(4K x 3K),320fps,CXP / 镜头:x1.0远心镜头(像素分辨率5.5um) / F.O.V:22mm x 16.5mm / 扫描范围:500um(PZT,PI型)或600um(NanoFaktur型),5mm(Z轴) / AF模块:基于光学三角测量的自动对焦,滚珠丝杠螺距5mm,减速比10:1 / 检测项目:Bump Height、Coplanarity、CAW / 精度:<1um(@10/30/50um标准高度单元) / 重复性:<1um(Bump级,Bump Height),<1um(单元级3Sigma,Coplanarity/CAW),<20(Bump级PT) / 再现性:<1.5um(Bump级),<1.5um(单元级,Coplanarity/CAW),<30(Bump级PT)',
      zhTW:'3D Vision模組規格,單光路(SEMCO、京瓷) — 相機:12M Pixel(4K x 3K),320fps,CXP / 鏡頭:x1.0遠心鏡頭(像素解析度5.5um) / F.O.V:22mm x 16.5mm / 掃描範圍:500um(PZT,PI型)或600um(NanoFaktur型),5mm(Z軸) / AF模組:基於光學三角測量的自動對焦,滾珠螺桿螺距5mm,減速比10:1 / 檢測項目:Bump Height、Coplanarity、CAW / 精度:<1um(@10/30/50um標準高度單元) / 重複性:<1um(Bump級,Bump Height),<1um(單元級3Sigma,Coplanarity/CAW),<20(Bump級PT) / 再現性:<1.5um(Bump級),<1.5um(單元級,Coplanarity/CAW),<30(Bump級PT)',
      ja:'3D Visionモジュール仕様、シングル光学系(SEMCO、京セラ) — カメラ:12M Pixel(4K x 3K)、320fps、CXP / レンズ:x1.0テレセントリックレンズ(画素分解能5.5um) / F.O.V:22mm x 16.5mm / スキャン範囲:500um(PZT、PIタイプ)または600um(NanoFakturタイプ)、5mm(Z軸) / AFモジュール:光学式三角測量方式オートフォーカス、ボールネジピッチ5mm、減速比10:1 / 検査項目:Bump Height、Coplanarity、CAW / 精度:<1um(@10/30/50um標準高さユニット) / 繰返し性:<1um(Bumpレベル、Bump Height)、<1um(Unitレベル3Sigma、Coplanarity/CAW)、<20(Bumpレベル PT) / 再現性:<1.5um(Bumpレベル)、<1.5um(Unitレベル、Coplanarity/CAW)、<30(Bumpレベル PT)'
    }),
    slN(18,{
      en:'3D Vision Module Spec, Turret optics (SEMCO, Kyocera) — Camera: 12M Pixel(4K x 3K), 320fps, CXP / Lens: x0.8, x1.0 Telecentric Lens(Pixel Resolution 5.5, 6.7um), x1.0, x1.2 Telecentric Lens(Pixel Resolution 5.5, 4.8um) / F.O.V: 22mm x 16.5mm, 27mm x 20mm / Scan Range: 500um(PZT, PI type) or 600um(NanoFaktur type), 5mm(Z-Axis) / AF Module: Optical Triangulation Based Autofocusing, Ball Screw Pitch 5mm, Reducer Rate 10:1 / Inspection Item: Bump Height, Coplanarity, CAW / Accuracy: <1um(@10/30/50um Standard Height unit) / Repeatability and Reproducibility: same as single-optics spec.',
      ko:'3D Vision Module 사양, Turret optics(SEMCO, Kyocera) — 카메라: 12M Pixel(4K x 3K), 320fps, CXP / 렌즈: x0.8, x1.0 Telecentric Lens(픽셀 분해능 5.5, 6.7um), x1.0, x1.2 Telecentric Lens(픽셀 분해능 5.5, 4.8um) / F.O.V: 22mm x 16.5mm, 27mm x 20mm / Scan Range: 500um(PZT, PI 타입) 또는 600um(NanoFaktur 타입), 5mm(Z축) / AF Module: 광학 삼각측량 방식 오토포커싱, Ball Screw Pitch 5mm, 감속비 10:1 / 검사 항목: Bump Height, Coplanarity, CAW / Accuracy: <1um(@10/30/50um 표준 높이 유닛) / Repeatability, Reproducibility: Single optics 사양과 동일',
      zhCN:'3D Vision模块规格,转塔光路(SEMCO、京瓷) — 相机:12M Pixel(4K x 3K),320fps,CXP / 镜头:x0.8、x1.0远心镜头(像素分辨率5.5、6.7um),x1.0、x1.2远心镜头(像素分辨率5.5、4.8um) / F.O.V:22mm x 16.5mm、27mm x 20mm / 扫描范围:500um(PZT,PI型)或600um(NanoFaktur型),5mm(Z轴) / AF模块:基于光学三角测量的自动对焦,滚珠丝杠螺距5mm,减速比10:1 / 检测项目:Bump Height、Coplanarity、CAW / 精度:<1um(@10/30/50um标准高度单元) / 重复性、再现性:与单光路规格相同',
      zhTW:'3D Vision模組規格,轉塔光路(SEMCO、京瓷) — 相機:12M Pixel(4K x 3K),320fps,CXP / 鏡頭:x0.8、x1.0遠心鏡頭(像素解析度5.5、6.7um),x1.0、x1.2遠心鏡頭(像素解析度5.5、4.8um) / F.O.V:22mm x 16.5mm、27mm x 20mm / 掃描範圍:500um(PZT,PI型)或600um(NanoFaktur型),5mm(Z軸) / AF模組:基於光學三角測量的自動對焦,滾珠螺桿螺距5mm,減速比10:1 / 檢測項目:Bump Height、Coplanarity、CAW / 精度:<1um(@10/30/50um標準高度單元) / 重複性、再現性:與單光路規格相同',
      ja:'3D Visionモジュール仕様、タレット光学系(SEMCO、京セラ) — カメラ:12M Pixel(4K x 3K)、320fps、CXP / レンズ:x0.8、x1.0テレセントリックレンズ(画素分解能5.5、6.7um)、x1.0、x1.2テレセントリックレンズ(画素分解能5.5、4.8um) / F.O.V:22mm x 16.5mm、27mm x 20mm / スキャン範囲:500um(PZT、PIタイプ)または600um(NanoFakturタイプ)、5mm(Z軸) / AFモジュール:光学式三角測量方式オートフォーカス、ボールネジピッチ5mm、減速比10:1 / 検査項目:Bump Height、Coplanarity、CAW / 精度:<1um(@10/30/50um標準高さユニット) / 繰返し性・再現性:シングル光学系仕様と同一'
    })
  ]},
  {code:'1.2.2',title:{en:'SEMV Spec',ko:'SEMV 사양',zhCN:'SEMV 规格',zhTW:'SEMV 規格',ja:'SEMV 仕様'},slides:[
    dividerN(19),
    slN(20,imgOnlyN(20,{en:'(SEMV dimensions — Front view 2580 x 2227mm, Right view 1680 x 1809mm)',ko:'(SEMV 치수 — 정면 2580 x 2227mm, 우측면 1680 x 1809mm)',zhCN:'(SEMV尺寸 — 正视图2580 x 2227mm,右视图1680 x 1809mm)',zhTW:'(SEMV尺寸 — 正視圖2580 x 2227mm,右視圖1680 x 1809mm)',ja:'(SEMV寸法 — 正面図2580 x 2227mm、右側面図1680 x 1809mm)'})),
    slN(21,{
      en:'Utility & Electric Spec (SEMV) — Electric Phase: Three phase / Voltage: AC 220V or 208V / Current: 50A / KVA: 19KVA / UPS: All PC / Certification: SEMCO CE Mark, Kyocera N/A / Air(CDA): Dry air 5~6kgf/cm2, Air Hose 12Φ x 2ea / Air consumption: 500 L/min / Weight: 3000kg(3 ton) / Size: 2580(W) x 1680(D) x 2227(H) mm.',
      ko:'Utility & Electric 사양(SEMV) — 전기 상: 3상 / 전압: AC 220V 또는 208V / 전류: 50A / 용량: 19KVA / UPS: All PC / 인증: SEMCO CE Mark, Kyocera 해당없음 / 공압(CDA): 5~6kgf/cm2, 에어호스 12Φ x 2ea / 공압 소모량: 500 L/min / 중량: 3000kg(3톤) / 크기: 2580(W) x 1680(D) x 2227(H) mm',
      zhCN:'公用设施与电气规格(SEMV) — 电相:三相 / 电压:AC 220V或208V / 电流:50A / 容量:19KVA / UPS:全部PC / 认证:SEMCO CE Mark,京瓷不适用 / 空压(CDA):干燥空气5~6kgf/cm2,气管12Φ x 2条 / 耗气量:500 L/min / 重量:3000kg(3吨) / 尺寸:2580(W) x 1680(D) x 2227(H) mm',
      zhTW:'公用設施與電氣規格(SEMV) — 電相:三相 / 電壓:AC 220V或208V / 電流:50A / 容量:19KVA / UPS:全部PC / 認證:SEMCO CE Mark,京瓷不適用 / 空壓(CDA):乾燥空氣5~6kgf/cm2,氣管12Φ x 2條 / 耗氣量:500 L/min / 重量:3000kg(3噸) / 尺寸:2580(W) x 1680(D) x 2227(H) mm',
      ja:'ユーティリティ・電気仕様(SEMV) — 電気相:三相 / 電圧:AC 220Vまたは208V / 電流:50A / 容量:19KVA / UPS:全PC / 認証:SEMCO CE Mark、京セラ該当なし / エア(CDA):ドライエア5~6kgf/cm2、エアホース12Φ x 2本 / 空気消費量:500 L/min / 重量:3000kg(3トン) / サイズ:2580(W) x 1680(D) x 2227(H) mm'
    }),
    slN(22,{
      en:'Handler Spec (SEMV) — Rail: 6 Rail System (Input: Loader/Empty, Output: Good/Buffer/Reject1,2) / Tray Stacker: Input Tray 40 trays(7.62mm), JEDEC/EIAJ standard / Number of Vision: 3D Vision 2 SET, 2D Vision 1 SET / Tray Indexer: Dual Loader Index, Roller Guide Block, Rail Tray check sensor / Tray Sorter: Tray Check Sensor / Tray Transfer: Tray Check Sensor / Sorting Picker: 2-Picker with Reject Unit Sorting function.',
      ko:'Handler 사양(SEMV) — Rail: 6 Rail 시스템(Input: Loader/Empty, Output: Good/Buffer/Reject1,2) / Tray Stacker: Input Tray 40장(7.62mm), JEDEC/EIAJ 규격 / Vision 수량: 3D Vision 2식, 2D Vision 1식 / Tray Indexer: Dual Loader Index, Roller Guide Block, Rail Tray check sensor 적용 / Tray Sorter: Tray Check Sensor / Tray Transfer: Tray Check Sensor / Sorting Picker: 2-Picker, Reject Unit Sorting 기능',
      zhCN:'Handler规格(SEMV) — Rail:6轨系统(输入:Loader/Empty,输出:Good/Buffer/Reject1,2) / Tray Stacker:输入托盘40片(7.62mm),JEDEC/EIAJ标准 / Vision数量:3D Vision 2套,2D Vision 1套 / Tray Indexer:配备Dual Loader Index、导轨滑块、Rail Tray检测传感器 / Tray Sorter:Tray检测传感器 / Tray Transfer:Tray检测传感器 / Sorting Picker:2-Picker,具备不良品分选功能',
      zhTW:'Handler規格(SEMV) — Rail:6軌系統(輸入:Loader/Empty,輸出:Good/Buffer/Reject1,2) / Tray Stacker:輸入托盤40片(7.62mm),JEDEC/EIAJ標準 / Vision數量:3D Vision 2套,2D Vision 1套 / Tray Indexer:配備Dual Loader Index、導軌滑塊、Rail Tray檢測感測器 / Tray Sorter:Tray檢測感測器 / Tray Transfer:Tray檢測感測器 / Sorting Picker:2-Picker,具備不良品分選功能',
      ja:'Handler仕様(SEMV) — Rail:6レールシステム(入力:Loader/Empty、出力:Good/Buffer/Reject1,2) / Tray Stacker:入力Tray 40枚(7.62mm)、JEDEC/EIAJ規格 / Vision数量:3D Vision 2セット、2D Vision 1セット / Tray Indexer:Dual Loader Index、Roller Guide Block、Rail Tray checkセンサー搭載 / Tray Sorter:Tray Checkセンサー / Tray Transfer:Tray Checkセンサー / Sorting Picker:2-Picker、Reject Unit Sorting機能'
    }),
    slN(23,{
      en:'2D Vision Module Spec, 25M Camera (SEMV) — Camera: CLF-C5180M-IF000(25M) / Lens: x0.8 Telecentric Lens(Pixel Resolution 5.5um) / F.O.V: 27.5mm x 27.5mm / Inspection Item: Diameter, Top Diameter, Bridge, FM, SC / Repeatability: <1um(@Diameter 3σ Max), <20(@PT Max) / Reproducibility: <2um(@Diameter 3σ Max), <30(@PT Max).',
      ko:'2D Vision Module 사양, 25M 카메라(SEMV) — 카메라: CLF-C5180M-IF000(25M) / 렌즈: x0.8 Telecentric Lens(픽셀 분해능 5.5um) / F.O.V: 27.5mm x 27.5mm / 검사 항목: Diameter, Top Diameter, Bridge, FM, SC / Repeatability: <1um(@Diameter 3σ Max), <20(@PT Max) / Reproducibility: <2um(@Diameter 3σ Max), <30(@PT Max)',
      zhCN:'2D Vision模块规格,25M相机(SEMV) — 相机:CLF-C5180M-IF000(25M) / 镜头:x0.8远心镜头(像素分辨率5.5um) / F.O.V:27.5mm x 27.5mm / 检测项目:Diameter、Top Diameter、Bridge、FM、SC / 重复性:<1um(@Diameter 3σ Max),<20(@PT Max) / 再现性:<2um(@Diameter 3σ Max),<30(@PT Max)',
      zhTW:'2D Vision模組規格,25M相機(SEMV) — 相機:CLF-C5180M-IF000(25M) / 鏡頭:x0.8遠心鏡頭(像素解析度5.5um) / F.O.V:27.5mm x 27.5mm / 檢測項目:Diameter、Top Diameter、Bridge、FM、SC / 重複性:<1um(@Diameter 3σ Max),<20(@PT Max) / 再現性:<2um(@Diameter 3σ Max),<30(@PT Max)',
      ja:'2D Visionモジュール仕様、25Mカメラ(SEMV) — カメラ:CLF-C5180M-IF000(25M) / レンズ:x0.8テレセントリックレンズ(画素分解能5.5um) / F.O.V:27.5mm x 27.5mm / 検査項目:Diameter、Top Diameter、Bridge、FM、SC / 繰返し性:<1um(@Diameter 3σ Max)、<20(@PT Max) / 再現性:<2um(@Diameter 3σ Max)、<30(@PT Max)'
    }),
    slN(24,{
      en:'2D Vision Module Spec, 67M Camera (SEMV) — Camera: G3-XM01-M8205(67M, 8K x 8K), 30fps, CXP6 / Lens: x0.8 Telecentric Lens(Pixel Resolution 2.5um) / F.O.V: 20mm x 20mm / AF Module: Optical Triangulation Based Autofocusing, Ball Screw Pitch 2mm, Reducer Rate 5:1 / Inspection Item: Diameter, Top Diameter, Bridge, FM, SC / Repeatability: <1um(@Diameter 3σ Max), <20(@PT Max) / Reproducibility: <2um(@Diameter 3σ Max), <30(@PT Max).',
      ko:'2D Vision Module 사양, 67M 카메라(SEMV) — 카메라: G3-XM01-M8205(67M, 8K x 8K), 30fps, CXP6 / 렌즈: x0.8 Telecentric Lens(픽셀 분해능 2.5um) / F.O.V: 20mm x 20mm / AF Module: 광학 삼각측량 방식 오토포커싱, Ball Screw Pitch 2mm, 감속비 5:1 / 검사 항목: Diameter, Top Diameter, Bridge, FM, SC / Repeatability: <1um(@Diameter 3σ Max), <20(@PT Max) / Reproducibility: <2um(@Diameter 3σ Max), <30(@PT Max)',
      zhCN:'2D Vision模块规格,67M相机(SEMV) — 相机:G3-XM01-M8205(67M,8K x 8K),30fps,CXP6 / 镜头:x0.8远心镜头(像素分辨率2.5um) / F.O.V:20mm x 20mm / AF模块:基于光学三角测量的自动对焦,滚珠丝杠螺距2mm,减速比5:1 / 检测项目:Diameter、Top Diameter、Bridge、FM、SC / 重复性:<1um(@Diameter 3σ Max),<20(@PT Max) / 再现性:<2um(@Diameter 3σ Max),<30(@PT Max)',
      zhTW:'2D Vision模組規格,67M相機(SEMV) — 相機:G3-XM01-M8205(67M,8K x 8K),30fps,CXP6 / 鏡頭:x0.8遠心鏡頭(像素解析度2.5um) / F.O.V:20mm x 20mm / AF模組:基於光學三角測量的自動對焦,滾珠螺桿螺距2mm,減速比5:1 / 檢測項目:Diameter、Top Diameter、Bridge、FM、SC / 重複性:<1um(@Diameter 3σ Max),<20(@PT Max) / 再現性:<2um(@Diameter 3σ Max),<30(@PT Max)',
      ja:'2D Visionモジュール仕様、67Mカメラ(SEMV) — カメラ:G3-XM01-M8205(67M、8K x 8K)、30fps、CXP6 / レンズ:x0.8テレセントリックレンズ(画素分解能2.5um) / F.O.V:20mm x 20mm / AFモジュール:光学式三角測量方式オートフォーカス、ボールネジピッチ2mm、減速比5:1 / 検査項目:Diameter、Top Diameter、Bridge、FM、SC / 繰返し性:<1um(@Diameter 3σ Max)、<20(@PT Max) / 再現性:<2um(@Diameter 3σ Max)、<30(@PT Max)'
    }),
    slN(25,{
      en:'3D Vision Module Spec, Single optics (SEMV) — Camera: 12M Pixel(4K x 3K), 320fps, CXP / Lens: x1.0 Telecentric Lens(Pixel Resolution 5.5um) / F.O.V: 22mm x 16.5mm / Scan Range: 500um(PZT, PI type) or 600um(NanoFaktur type), 5mm(Z-Axis) / AF Module: Optical Triangulation Based Autofocusing, Ball Screw Pitch 5mm, Reducer Rate 10:1 / Inspection Item: Bump Height, Coplanarity, CAW / Accuracy: <1um(@10/30/50um Standard Height unit) / Repeatability: <1um(Bump Level, Bump Height), <1um(Unit Level 3Sigma, Coplanarity/CAW), <20(Bump Level PT) / Reproducibility: <1.5um(Bump Level), <1.5um(Unit Level, Coplanarity/CAW), <30(Bump Level PT).',
      ko:'3D Vision Module 사양, Single optics(SEMV) — 카메라: 12M Pixel(4K x 3K), 320fps, CXP / 렌즈: x1.0 Telecentric Lens(픽셀 분해능 5.5um) / F.O.V: 22mm x 16.5mm / Scan Range: 500um(PZT, PI 타입) 또는 600um(NanoFaktur 타입), 5mm(Z축) / AF Module: 광학 삼각측량 방식 오토포커싱, Ball Screw Pitch 5mm, 감속비 10:1 / 검사 항목: Bump Height, Coplanarity, CAW / Accuracy: <1um(@10/30/50um 표준 높이 유닛) / Repeatability: <1um(Bump Level, Bump Height), <1um(Unit Level 3Sigma, Coplanarity/CAW), <20(Bump Level PT) / Reproducibility: <1.5um(Bump Level), <1.5um(Unit Level, Coplanarity/CAW), <30(Bump Level PT)',
      zhCN:'3D Vision模块规格,单光路(SEMV) — 相机:12M Pixel(4K x 3K),320fps,CXP / 镜头:x1.0远心镜头(像素分辨率5.5um) / F.O.V:22mm x 16.5mm / 扫描范围:500um(PZT,PI型)或600um(NanoFaktur型),5mm(Z轴) / AF模块:基于光学三角测量的自动对焦,滚珠丝杠螺距5mm,减速比10:1 / 检测项目:Bump Height、Coplanarity、CAW / 精度:<1um(@10/30/50um标准高度单元) / 重复性:<1um(Bump级,Bump Height),<1um(单元级3Sigma,Coplanarity/CAW),<20(Bump级PT) / 再现性:<1.5um(Bump级),<1.5um(单元级,Coplanarity/CAW),<30(Bump级PT)',
      zhTW:'3D Vision模組規格,單光路(SEMV) — 相機:12M Pixel(4K x 3K),320fps,CXP / 鏡頭:x1.0遠心鏡頭(像素解析度5.5um) / F.O.V:22mm x 16.5mm / 掃描範圍:500um(PZT,PI型)或600um(NanoFaktur型),5mm(Z軸) / AF模組:基於光學三角測量的自動對焦,滾珠螺桿螺距5mm,減速比10:1 / 檢測項目:Bump Height、Coplanarity、CAW / 精度:<1um(@10/30/50um標準高度單元) / 重複性:<1um(Bump級,Bump Height),<1um(單元級3Sigma,Coplanarity/CAW),<20(Bump級PT) / 再現性:<1.5um(Bump級),<1.5um(單元級,Coplanarity/CAW),<30(Bump級PT)',
      ja:'3D Visionモジュール仕様、シングル光学系(SEMV) — カメラ:12M Pixel(4K x 3K)、320fps、CXP / レンズ:x1.0テレセントリックレンズ(画素分解能5.5um) / F.O.V:22mm x 16.5mm / スキャン範囲:500um(PZT、PIタイプ)または600um(NanoFakturタイプ)、5mm(Z軸) / AFモジュール:光学式三角測量方式オートフォーカス、ボールネジピッチ5mm、減速比10:1 / 検査項目:Bump Height、Coplanarity、CAW / 精度:<1um(@10/30/50um標準高さユニット) / 繰返し性:<1um(Bumpレベル、Bump Height)、<1um(Unitレベル3Sigma、Coplanarity/CAW)、<20(Bumpレベル PT) / 再現性:<1.5um(Bumpレベル)、<1.5um(Unitレベル、Coplanarity/CAW)、<30(Bumpレベル PT)'
    }),
    slN(26,{
      en:'3D Vision Module Spec, Turret optics (SEMV) — Camera: 12M Pixel(4K x 3K), 320fps, CXP / Lens: x0.8, x1.0 Telecentric Lens(Pixel Resolution 5.5, 6.7um), x1.0, x1.2 Telecentric Lens(Pixel Resolution 5.5, 4.8um) / F.O.V: 22mm x 16.5mm, 27mm x 20mm / Scan Range: 500um(PZT, PI type) or 600um(NanoFaktur type), 5mm(Z-Axis) / AF Module: Optical Triangulation Based Autofocusing, Ball Screw Pitch 5mm, Reducer Rate 10:1 / Inspection Item: Bump Height, Coplanarity, CAW / Accuracy: <1um(@10/30/50um Standard Height unit) / Repeatability and Reproducibility: same as single-optics spec.',
      ko:'3D Vision Module 사양, Turret optics(SEMV) — 카메라: 12M Pixel(4K x 3K), 320fps, CXP / 렌즈: x0.8, x1.0 Telecentric Lens(픽셀 분해능 5.5, 6.7um), x1.0, x1.2 Telecentric Lens(픽셀 분해능 5.5, 4.8um) / F.O.V: 22mm x 16.5mm, 27mm x 20mm / Scan Range: 500um(PZT, PI 타입) 또는 600um(NanoFaktur 타입), 5mm(Z축) / AF Module: 광학 삼각측량 방식 오토포커싱, Ball Screw Pitch 5mm, 감속비 10:1 / 검사 항목: Bump Height, Coplanarity, CAW / Accuracy: <1um(@10/30/50um 표준 높이 유닛) / Repeatability, Reproducibility: Single optics 사양과 동일',
      zhCN:'3D Vision模块规格,转塔光路(SEMV) — 相机:12M Pixel(4K x 3K),320fps,CXP / 镜头:x0.8、x1.0远心镜头(像素分辨率5.5、6.7um),x1.0、x1.2远心镜头(像素分辨率5.5、4.8um) / F.O.V:22mm x 16.5mm、27mm x 20mm / 扫描范围:500um(PZT,PI型)或600um(NanoFaktur型),5mm(Z轴) / AF模块:基于光学三角测量的自动对焦,滚珠丝杠螺距5mm,减速比10:1 / 检测项目:Bump Height、Coplanarity、CAW / 精度:<1um(@10/30/50um标准高度单元) / 重复性、再现性:与单光路规格相同',
      zhTW:'3D Vision模組規格,轉塔光路(SEMV) — 相機:12M Pixel(4K x 3K),320fps,CXP / 鏡頭:x0.8、x1.0遠心鏡頭(像素解析度5.5、6.7um),x1.0、x1.2遠心鏡頭(像素解析度5.5、4.8um) / F.O.V:22mm x 16.5mm、27mm x 20mm / 掃描範圍:500um(PZT,PI型)或600um(NanoFaktur型),5mm(Z軸) / AF模組:基於光學三角測量的自動對焦,滾珠螺桿螺距5mm,減速比10:1 / 檢測項目:Bump Height、Coplanarity、CAW / 精度:<1um(@10/30/50um標準高度單元) / 重複性、再現性:與單光路規格相同',
      ja:'3D Visionモジュール仕様、タレット光学系(SEMV) — カメラ:12M Pixel(4K x 3K)、320fps、CXP / レンズ:x0.8、x1.0テレセントリックレンズ(画素分解能5.5、6.7um)、x1.0、x1.2テレセントリックレンズ(画素分解能5.5、4.8um) / F.O.V:22mm x 16.5mm、27mm x 20mm / スキャン範囲:500um(PZT、PIタイプ)または600um(NanoFakturタイプ)、5mm(Z軸) / AFモジュール:光学式三角測量方式オートフォーカス、ボールネジピッチ5mm、減速比10:1 / 検査項目:Bump Height、Coplanarity、CAW / 精度:<1um(@10/30/50um標準高さユニット) / 繰返し性・再現性:シングル光学系仕様と同一'
    })
  ]},
  {code:'1.2.3',title:{en:'AT&S, Intel, Nanya Spec',ko:'AT&S, Intel, Nanya 사양',zhCN:'AT&S、Intel、Nanya 规格',zhTW:'AT&S、Intel、Nanya 規格',ja:'AT&S、Intel、Nanya 仕様'},slides:[
    dividerN(27),
    slN(28,imgOnlyN(28,{en:'(AT&S, Intel, Nanya equipment — Front/Right view; overall size per spec table is 2580 x 1710 x 1810mm)',ko:'(AT&S, Intel, Nanya 설비 — 정면/우측면도, 규격표 기준 전체 크기 2580 x 1710 x 1810mm)',zhCN:'(AT&S、Intel、Nanya设备 — 正视图/右视图,规格表整体尺寸2580 x 1710 x 1810mm)',zhTW:'(AT&S、Intel、Nanya設備 — 正視圖/右視圖,規格表整體尺寸2580 x 1710 x 1810mm)',ja:'(AT&S、Intel、Nanya設備 — 正面図/右側面図、仕様表による全体寸法2580 x 1710 x 1810mm)'})),
    slN(29,{
      en:'Utility & Electric Spec (AT&S, Intel, Nanya) — Electric Phase: Single / Voltage: AC 220V or 208V / Current: 60A / KVA: 13.2KVA / UPS: Host PC only (Excluding Intel) / Certification: ATNS CE Mark, Nanya N/A, Intel SEMI S2/S8, NFPA79, F47 / Air(CDA): Dry air 5~6kgf/cm2, Air Hose 12Φ x 2ea / Air consumption: 500 L/min / Weight: 3000kg(3 ton) / Size: 2580(W) x 1710(D) x 1810(H) mm.',
      ko:'Utility & Electric 사양(AT&S, Intel, Nanya) — 전기 상: 단상 / 전압: AC 220V 또는 208V / 전류: 60A / 용량: 13.2KVA / UPS: Host PC 전용(Intel 제외) / 인증: ATNS CE Mark, Nanya 해당없음, Intel SEMI S2/S8, NFPA79, F47 / 공압(CDA): 5~6kgf/cm2, 에어호스 12Φ x 2ea / 공압 소모량: 500 L/min / 중량: 3000kg(3톤) / 크기: 2580(W) x 1710(D) x 1810(H) mm',
      zhCN:'公用设施与电气规格(AT&S、Intel、Nanya) — 电相:单相 / 电压:AC 220V或208V / 电流:60A / 容量:13.2KVA / UPS:仅Host PC(Intel除外) / 认证:ATNS CE Mark,Nanya不适用,Intel SEMI S2/S8、NFPA79、F47 / 空压(CDA):干燥空气5~6kgf/cm2,气管12Φ x 2条 / 耗气量:500 L/min / 重量:3000kg(3吨) / 尺寸:2580(W) x 1710(D) x 1810(H) mm',
      zhTW:'公用設施與電氣規格(AT&S、Intel、Nanya) — 電相:單相 / 電壓:AC 220V或208V / 電流:60A / 容量:13.2KVA / UPS:僅Host PC(Intel除外) / 認證:ATNS CE Mark,Nanya不適用,Intel SEMI S2/S8、NFPA79、F47 / 空壓(CDA):乾燥空氣5~6kgf/cm2,氣管12Φ x 2條 / 耗氣量:500 L/min / 重量:3000kg(3噸) / 尺寸:2580(W) x 1710(D) x 1810(H) mm',
      ja:'ユーティリティ・電気仕様(AT&S、Intel、Nanya) — 電気相:単相 / 電圧:AC 220Vまたは208V / 電流:60A / 容量:13.2KVA / UPS:Host PCのみ(Intel除く) / 認証:ATNS CE Mark、Nanya該当なし、Intel SEMI S2/S8、NFPA79、F47 / エア(CDA):ドライエア5~6kgf/cm2、エアホース12Φ x 2本 / 空気消費量:500 L/min / 重量:3000kg(3トン) / サイズ:2580(W) x 1710(D) x 1810(H) mm'
    }),
    slN(30,{
      en:'Handler Spec (AT&S, Intel, Nanya) — Rail: 6 Rail System (Input: Loader/Empty, Output: Good/Buffer/Reject1,2) / Tray Stacker: Input Tray 40 trays(7.62mm), JEDEC/EIAJ standard / Number of Vision: 3D Vision 2 SET, 2D Vision 1 SET / Tray Indexer: Dual Loader Index, Roller Guide Block, Rail Tray check sensor / Tray Sorter: Tray Check Sensor / Tray Transfer: Tray Check Sensor / Sorting Picker: 2-Picker with Reject Unit Sorting function.',
      ko:'Handler 사양(AT&S, Intel, Nanya) — Rail: 6 Rail 시스템(Input: Loader/Empty, Output: Good/Buffer/Reject1,2) / Tray Stacker: Input Tray 40장(7.62mm), JEDEC/EIAJ 규격 / Vision 수량: 3D Vision 2식, 2D Vision 1식 / Tray Indexer: Dual Loader Index, Roller Guide Block, Rail Tray check sensor 적용 / Tray Sorter: Tray Check Sensor / Tray Transfer: Tray Check Sensor / Sorting Picker: 2-Picker, Reject Unit Sorting 기능',
      zhCN:'Handler规格(AT&S、Intel、Nanya) — Rail:6轨系统(输入:Loader/Empty,输出:Good/Buffer/Reject1,2) / Tray Stacker:输入托盘40片(7.62mm),JEDEC/EIAJ标准 / Vision数量:3D Vision 2套,2D Vision 1套 / Tray Indexer:配备Dual Loader Index、导轨滑块、Rail Tray检测传感器 / Tray Sorter:Tray检测传感器 / Tray Transfer:Tray检测传感器 / Sorting Picker:2-Picker,具备不良品分选功能',
      zhTW:'Handler規格(AT&S、Intel、Nanya) — Rail:6軌系統(輸入:Loader/Empty,輸出:Good/Buffer/Reject1,2) / Tray Stacker:輸入托盤40片(7.62mm),JEDEC/EIAJ標準 / Vision數量:3D Vision 2套,2D Vision 1套 / Tray Indexer:配備Dual Loader Index、導軌滑塊、Rail Tray檢測感測器 / Tray Sorter:Tray檢測感測器 / Tray Transfer:Tray檢測感測器 / Sorting Picker:2-Picker,具備不良品分選功能',
      ja:'Handler仕様(AT&S、Intel、Nanya) — Rail:6レールシステム(入力:Loader/Empty、出力:Good/Buffer/Reject1,2) / Tray Stacker:入力Tray 40枚(7.62mm)、JEDEC/EIAJ規格 / Vision数量:3D Vision 2セット、2D Vision 1セット / Tray Indexer:Dual Loader Index、Roller Guide Block、Rail Tray checkセンサー搭載 / Tray Sorter:Tray Checkセンサー / Tray Transfer:Tray Checkセンサー / Sorting Picker:2-Picker、Reject Unit Sorting機能'
    }),
    slN(31,{
      en:'2D Vision Module Spec, 25M Camera (AT&S, Intel, Nanya) — Camera: CLF-C5180M-IF000(25M) / Lens: x0.8 Telecentric Lens(Pixel Resolution 5.5um) / F.O.V: 27.5mm x 27.5mm / Inspection Item: Diameter, Top Diameter, Bridge, FM, SC / Repeatability: <1um(@Diameter 3σ Max), <20(@PT Max) / Reproducibility: <2um(@Diameter 3σ Max), <30(@PT Max).',
      ko:'2D Vision Module 사양, 25M 카메라(AT&S, Intel, Nanya) — 카메라: CLF-C5180M-IF000(25M) / 렌즈: x0.8 Telecentric Lens(픽셀 분해능 5.5um) / F.O.V: 27.5mm x 27.5mm / 검사 항목: Diameter, Top Diameter, Bridge, FM, SC / Repeatability: <1um(@Diameter 3σ Max), <20(@PT Max) / Reproducibility: <2um(@Diameter 3σ Max), <30(@PT Max)',
      zhCN:'2D Vision模块规格,25M相机(AT&S、Intel、Nanya) — 相机:CLF-C5180M-IF000(25M) / 镜头:x0.8远心镜头(像素分辨率5.5um) / F.O.V:27.5mm x 27.5mm / 检测项目:Diameter、Top Diameter、Bridge、FM、SC / 重复性:<1um(@Diameter 3σ Max),<20(@PT Max) / 再现性:<2um(@Diameter 3σ Max),<30(@PT Max)',
      zhTW:'2D Vision模組規格,25M相機(AT&S、Intel、Nanya) — 相機:CLF-C5180M-IF000(25M) / 鏡頭:x0.8遠心鏡頭(像素解析度5.5um) / F.O.V:27.5mm x 27.5mm / 檢測項目:Diameter、Top Diameter、Bridge、FM、SC / 重複性:<1um(@Diameter 3σ Max),<20(@PT Max) / 再現性:<2um(@Diameter 3σ Max),<30(@PT Max)',
      ja:'2D Visionモジュール仕様、25Mカメラ(AT&S、Intel、Nanya) — カメラ:CLF-C5180M-IF000(25M) / レンズ:x0.8テレセントリックレンズ(画素分解能5.5um) / F.O.V:27.5mm x 27.5mm / 検査項目:Diameter、Top Diameter、Bridge、FM、SC / 繰返し性:<1um(@Diameter 3σ Max)、<20(@PT Max) / 再現性:<2um(@Diameter 3σ Max)、<30(@PT Max)'
    }),
    slN(32,{
      en:'2D Vision Module Spec, 67M Camera (AT&S, Intel, Nanya) — Camera: G3-XM01-M8205(67M, 8K x 8K), 30fps, CXP6 / Lens: x0.8 Telecentric Lens(Pixel Resolution 2.5um) / F.O.V: 20mm x 20mm / AF Module: Optical Triangulation Based Autofocusing, Ball Screw Pitch 2mm, Reducer Rate 5:1 / Inspection Item: Diameter, Top Diameter, Bridge, FM, SC / Repeatability: <1um(@Diameter 3σ Max), <20(@PT Max) / Reproducibility: <2um(@Diameter 3σ Max), <30(@PT Max).',
      ko:'2D Vision Module 사양, 67M 카메라(AT&S, Intel, Nanya) — 카메라: G3-XM01-M8205(67M, 8K x 8K), 30fps, CXP6 / 렌즈: x0.8 Telecentric Lens(픽셀 분해능 2.5um) / F.O.V: 20mm x 20mm / AF Module: 광학 삼각측량 방식 오토포커싱, Ball Screw Pitch 2mm, 감속비 5:1 / 검사 항목: Diameter, Top Diameter, Bridge, FM, SC / Repeatability: <1um(@Diameter 3σ Max), <20(@PT Max) / Reproducibility: <2um(@Diameter 3σ Max), <30(@PT Max)',
      zhCN:'2D Vision模块规格,67M相机(AT&S、Intel、Nanya) — 相机:G3-XM01-M8205(67M,8K x 8K),30fps,CXP6 / 镜头:x0.8远心镜头(像素分辨率2.5um) / F.O.V:20mm x 20mm / AF模块:基于光学三角测量的自动对焦,滚珠丝杠螺距2mm,减速比5:1 / 检测项目:Diameter、Top Diameter、Bridge、FM、SC / 重复性:<1um(@Diameter 3σ Max),<20(@PT Max) / 再现性:<2um(@Diameter 3σ Max),<30(@PT Max)',
      zhTW:'2D Vision模組規格,67M相機(AT&S、Intel、Nanya) — 相機:G3-XM01-M8205(67M,8K x 8K),30fps,CXP6 / 鏡頭:x0.8遠心鏡頭(像素解析度2.5um) / F.O.V:20mm x 20mm / AF模組:基於光學三角測量的自動對焦,滾珠螺桿螺距2mm,減速比5:1 / 檢測項目:Diameter、Top Diameter、Bridge、FM、SC / 重複性:<1um(@Diameter 3σ Max),<20(@PT Max) / 再現性:<2um(@Diameter 3σ Max),<30(@PT Max)',
      ja:'2D Visionモジュール仕様、67Mカメラ(AT&S、Intel、Nanya) — カメラ:G3-XM01-M8205(67M、8K x 8K)、30fps、CXP6 / レンズ:x0.8テレセントリックレンズ(画素分解能2.5um) / F.O.V:20mm x 20mm / AFモジュール:光学式三角測量方式オートフォーカス、ボールネジピッチ2mm、減速比5:1 / 検査項目:Diameter、Top Diameter、Bridge、FM、SC / 繰返し性:<1um(@Diameter 3σ Max)、<20(@PT Max) / 再現性:<2um(@Diameter 3σ Max)、<30(@PT Max)'
    }),
    slN(33,{
      en:'3D Vision Module Spec, Single optics (AT&S, Intel, Nanya) — Camera: 12M Pixel(4K x 3K), 320fps, CXP / Lens: x1.0 Telecentric Lens(Pixel Resolution 5.5um) / F.O.V: 22mm x 16.5mm / Scan Range: 500um(PZT, PI type) or 600um(NanoFaktur type), 5mm(Z-Axis) / AF Module: Optical Triangulation Based Autofocusing, Ball Screw Pitch 5mm, Reducer Rate 10:1 / Inspection Item: Bump Height, Coplanarity, CAW / Accuracy: <1um(@10/30/50um Standard Height unit) / Repeatability: <1um(Bump Level, Bump Height), <1um(Unit Level 3Sigma, Coplanarity/CAW), <20(Bump Level PT) / Reproducibility: <1.5um(Bump Level), <1.5um(Unit Level, Coplanarity/CAW), <30(Bump Level PT).',
      ko:'3D Vision Module 사양, Single optics(AT&S, Intel, Nanya) — 카메라: 12M Pixel(4K x 3K), 320fps, CXP / 렌즈: x1.0 Telecentric Lens(픽셀 분해능 5.5um) / F.O.V: 22mm x 16.5mm / Scan Range: 500um(PZT, PI 타입) 또는 600um(NanoFaktur 타입), 5mm(Z축) / AF Module: 광학 삼각측량 방식 오토포커싱, Ball Screw Pitch 5mm, 감속비 10:1 / 검사 항목: Bump Height, Coplanarity, CAW / Accuracy: <1um(@10/30/50um 표준 높이 유닛) / Repeatability: <1um(Bump Level, Bump Height), <1um(Unit Level 3Sigma, Coplanarity/CAW), <20(Bump Level PT) / Reproducibility: <1.5um(Bump Level), <1.5um(Unit Level, Coplanarity/CAW), <30(Bump Level PT)',
      zhCN:'3D Vision模块规格,单光路(AT&S、Intel、Nanya) — 相机:12M Pixel(4K x 3K),320fps,CXP / 镜头:x1.0远心镜头(像素分辨率5.5um) / F.O.V:22mm x 16.5mm / 扫描范围:500um(PZT,PI型)或600um(NanoFaktur型),5mm(Z轴) / AF模块:基于光学三角测量的自动对焦,滚珠丝杠螺距5mm,减速比10:1 / 检测项目:Bump Height、Coplanarity、CAW / 精度:<1um(@10/30/50um标准高度单元) / 重复性:<1um(Bump级,Bump Height),<1um(单元级3Sigma,Coplanarity/CAW),<20(Bump级PT) / 再现性:<1.5um(Bump级),<1.5um(单元级,Coplanarity/CAW),<30(Bump级PT)',
      zhTW:'3D Vision模組規格,單光路(AT&S、Intel、Nanya) — 相機:12M Pixel(4K x 3K),320fps,CXP / 鏡頭:x1.0遠心鏡頭(像素解析度5.5um) / F.O.V:22mm x 16.5mm / 掃描範圍:500um(PZT,PI型)或600um(NanoFaktur型),5mm(Z軸) / AF模組:基於光學三角測量的自動對焦,滾珠螺桿螺距5mm,減速比10:1 / 檢測項目:Bump Height、Coplanarity、CAW / 精度:<1um(@10/30/50um標準高度單元) / 重複性:<1um(Bump級,Bump Height),<1um(單元級3Sigma,Coplanarity/CAW),<20(Bump級PT) / 再現性:<1.5um(Bump級),<1.5um(單元級,Coplanarity/CAW),<30(Bump級PT)',
      ja:'3D Visionモジュール仕様、シングル光学系(AT&S、Intel、Nanya) — カメラ:12M Pixel(4K x 3K)、320fps、CXP / レンズ:x1.0テレセントリックレンズ(画素分解能5.5um) / F.O.V:22mm x 16.5mm / スキャン範囲:500um(PZT、PIタイプ)または600um(NanoFakturタイプ)、5mm(Z軸) / AFモジュール:光学式三角測量方式オートフォーカス、ボールネジピッチ5mm、減速比10:1 / 検査項目:Bump Height、Coplanarity、CAW / 精度:<1um(@10/30/50um標準高さユニット) / 繰返し性:<1um(Bumpレベル、Bump Height)、<1um(Unitレベル3Sigma、Coplanarity/CAW)、<20(Bumpレベル PT) / 再現性:<1.5um(Bumpレベル)、<1.5um(Unitレベル、Coplanarity/CAW)、<30(Bumpレベル PT)'
    }),
    slN(34,{
      en:'3D Vision Module Spec, Turret optics (AT&S, Intel, Nanya) — Camera: 12M Pixel(4K x 3K), 320fps, CXP / Lens: x0.8, x1.0 Telecentric Lens(Pixel Resolution 5.5, 6.7um), x1.0, x1.2 Telecentric Lens(Pixel Resolution 5.5, 4.8um) / F.O.V: 22mm x 16.5mm, 27mm x 20mm / Scan Range: 500um(PZT, PI type) or 600um(NanoFaktur type), 5mm(Z-Axis) / AF Module: Optical Triangulation Based Autofocusing, Ball Screw Pitch 5mm, Reducer Rate 10:1 / Inspection Item: Bump Height, Coplanarity, CAW / Accuracy: <1um(@10/30/50um Standard Height unit) / Repeatability and Reproducibility: same as single-optics spec.',
      ko:'3D Vision Module 사양, Turret optics(AT&S, Intel, Nanya) — 카메라: 12M Pixel(4K x 3K), 320fps, CXP / 렌즈: x0.8, x1.0 Telecentric Lens(픽셀 분해능 5.5, 6.7um), x1.0, x1.2 Telecentric Lens(픽셀 분해능 5.5, 4.8um) / F.O.V: 22mm x 16.5mm, 27mm x 20mm / Scan Range: 500um(PZT, PI 타입) 또는 600um(NanoFaktur 타입), 5mm(Z축) / AF Module: 광학 삼각측량 방식 오토포커싱, Ball Screw Pitch 5mm, 감속비 10:1 / 검사 항목: Bump Height, Coplanarity, CAW / Accuracy: <1um(@10/30/50um 표준 높이 유닛) / Repeatability, Reproducibility: Single optics 사양과 동일',
      zhCN:'3D Vision模块规格,转塔光路(AT&S、Intel、Nanya) — 相机:12M Pixel(4K x 3K),320fps,CXP / 镜头:x0.8、x1.0远心镜头(像素分辨率5.5、6.7um),x1.0、x1.2远心镜头(像素分辨率5.5、4.8um) / F.O.V:22mm x 16.5mm、27mm x 20mm / 扫描范围:500um(PZT,PI型)或600um(NanoFaktur型),5mm(Z轴) / AF模块:基于光学三角测量的自动对焦,滚珠丝杠螺距5mm,减速比10:1 / 检测项目:Bump Height、Coplanarity、CAW / 精度:<1um(@10/30/50um标准高度单元) / 重复性、再现性:与单光路规格相同',
      zhTW:'3D Vision模組規格,轉塔光路(AT&S、Intel、Nanya) — 相機:12M Pixel(4K x 3K),320fps,CXP / 鏡頭:x0.8、x1.0遠心鏡頭(像素解析度5.5、6.7um),x1.0、x1.2遠心鏡頭(像素解析度5.5、4.8um) / F.O.V:22mm x 16.5mm、27mm x 20mm / 掃描範圍:500um(PZT,PI型)或600um(NanoFaktur型),5mm(Z軸) / AF模組:基於光學三角測量的自動對焦,滾珠螺桿螺距5mm,減速比10:1 / 檢測項目:Bump Height、Coplanarity、CAW / 精度:<1um(@10/30/50um標準高度單元) / 重複性、再現性:與單光路規格相同',
      ja:'3D Visionモジュール仕様、タレット光学系(AT&S、Intel、Nanya) — カメラ:12M Pixel(4K x 3K)、320fps、CXP / レンズ:x0.8、x1.0テレセントリックレンズ(画素分解能5.5、6.7um)、x1.0、x1.2テレセントリックレンズ(画素分解能5.5、4.8um) / F.O.V:22mm x 16.5mm、27mm x 20mm / スキャン範囲:500um(PZT、PIタイプ)または600um(NanoFakturタイプ)、5mm(Z軸) / AFモジュール:光学式三角測量方式オートフォーカス、ボールネジピッチ5mm、減速比10:1 / 検査項目:Bump Height、Coplanarity、CAW / 精度:<1um(@10/30/50um標準高さユニット) / 繰返し性・再現性:シングル光学系仕様と同一'
    })
  ]},
  {code:'1.3.1',title:{en:'Layout & Component',ko:'레이아웃 및 구성품',zhCN:'布局与组件',zhTW:'佈局與元件',ja:'レイアウト及び構成品'},slides:[
    dividerN(35),
    slN(36,{
      en:'External layout (Front) — Main Machine, ISO Machine, Monitor, Keyboard & Mouse, EFU(Equipment Fan Filter Unit), Tower Lamp, EMS(Emergency Stop Switch), Area Curtain, Operation Panel. Configuration and installation locations vary depending on equipment specifications.',
      ko:'외형 레이아웃(정면) — Main Machine, ISO Machine, Monitor, Keyboard & Mouse, EFU(설비 팬 필터 유닛), Tower Lamp, EMS(비상정지 스위치), Area Curtain, Operation Panel. 구성 및 설치 위치는 장비 사양에 따라 다릅니다.',
      zhCN:'外观布局(正面) — Main Machine、ISO Machine、Monitor、Keyboard & Mouse、EFU(设备风扇过滤单元)、Tower Lamp、EMS(紧急停止开关)、Area Curtain、Operation Panel。构成及安装位置依设备规格而异。',
      zhTW:'外觀佈局(正面) — Main Machine、ISO Machine、Monitor、Keyboard & Mouse、EFU(設備風扇過濾單元)、Tower Lamp、EMS(緊急停止開關)、Area Curtain、Operation Panel。構成及安裝位置依設備規格而異。',
      ja:'外形レイアウト(正面) — Main Machine、ISO Machine、Monitor、Keyboard & Mouse、EFU(設備ファンフィルターユニット)、Tower Lamp、EMS(非常停止スイッチ)、Area Curtain、Operation Panel。構成及び設置位置は設備仕様により異なります。'
    }),
    slN(37,{
      en:'External layout (Rear) — ISO Machine, Main Machine, EMS(Emergency Stop Switch), Main Power Switch, Pressure Gauge. Configuration and installation locations vary depending on equipment specifications.',
      ko:'외형 레이아웃(후면) — ISO Machine, Main Machine, EMS(비상정지 스위치), Main Power Switch, Pressure Gauge. 구성 및 설치 위치는 장비 사양에 따라 다릅니다.',
      zhCN:'外观布局(后面) — ISO Machine、Main Machine、EMS(紧急停止开关)、Main Power Switch、Pressure Gauge。构成及安装位置依设备规格而异。',
      zhTW:'外觀佈局(後面) — ISO Machine、Main Machine、EMS(緊急停止開關)、Main Power Switch、Pressure Gauge。構成及安裝位置依設備規格而異。',
      ja:'外形レイアウト(後面) — ISO Machine、Main Machine、EMS(非常停止スイッチ)、Main Power Switch、Pressure Gauge。構成及び設置位置は設備仕様により異なります。'
    }),
    slN(38,{
      en:'Internal layout (Front) — MSM(Multi Sorter Module), 2D Vision Module, UPS(Intel excludes UPS), HUB & KVM, 2D LED Controller, 2D Vision PC, HOST PC, AF Controller #3, 3D LED Controller #2, 3D Vision PC #2, 3D Vision #2 Module, PZT Controller #2, AF Controller #2. Configuration and installation locations vary depending on equipment specifications.',
      ko:'내부 레이아웃(정면) — MSM(Multi Sorter Module), 2D Vision Module, UPS(Intel은 UPS 제외), HUB & KVM, 2D LED Controller, 2D Vision PC, HOST PC, AF Controller #3, 3D LED Controller #2, 3D Vision PC #2, 3D Vision #2 Module, PZT Controller #2, AF Controller #2. 구성 및 설치 위치는 장비 사양에 따라 다릅니다.',
      zhCN:'内部布局(正面) — MSM(多分选模块)、2D Vision模块、UPS(Intel不含UPS)、HUB & KVM、2D LED Controller、2D Vision PC、HOST PC、AF Controller #3、3D LED Controller #2、3D Vision PC #2、3D Vision #2模块、PZT Controller #2、AF Controller #2。构成及安装位置依设备规格而异。',
      zhTW:'內部佈局(正面) — MSM(多分選模組)、2D Vision模組、UPS(Intel不含UPS)、HUB & KVM、2D LED Controller、2D Vision PC、HOST PC、AF Controller #3、3D LED Controller #2、3D Vision PC #2、3D Vision #2模組、PZT Controller #2、AF Controller #2。構成及安裝位置依設備規格而異。',
      ja:'内部レイアウト(正面) — MSM(マルチソーターモジュール)、2D Visionモジュール、UPS(Intel向けはUPSなし)、HUB & KVM、2D LED Controller、2D Vision PC、HOST PC、AF Controller #3、3D LED Controller #2、3D Vision PC #2、3D Vision #2モジュール、PZT Controller #2、AF Controller #2。構成及び設置位置は設備仕様により異なります。'
    }),
    slN(39,{
      en:'Internal layout (Rear) — 3D LED Controller #1, 3D Vision #1 PC, AF Controller #1, PZT Controller #1, TTM(Tray Transfer Module), Air Regulator. Configuration and installation locations vary depending on equipment specifications.',
      ko:'내부 레이아웃(후면) — 3D LED Controller #1, 3D Vision #1 PC, AF Controller #1, PZT Controller #1, TTM(Tray Transfer Module), Air Regulator. 구성 및 설치 위치는 장비 사양에 따라 다릅니다.',
      zhCN:'内部布局(后面) — 3D LED Controller #1、3D Vision #1 PC、AF Controller #1、PZT Controller #1、TTM(托盘传送模块)、Air Regulator。构成及安装位置依设备规格而异。',
      zhTW:'內部佈局(後面) — 3D LED Controller #1、3D Vision #1 PC、AF Controller #1、PZT Controller #1、TTM(托盤傳送模組)、Air Regulator。構成及安裝位置依設備規格而異。',
      ja:'内部レイアウト(後面) — 3D LED Controller #1、3D Vision #1 PC、AF Controller #1、PZT Controller #1、TTM(トレイ搬送モジュール)、Air Regulator。構成及び設置位置は設備仕様により異なります。'
    }),
    slN(40,imgOnlyN(40,{en:'(Internal layout, Top view — Main Machine, ISO Machine, JIG#1/#2, TSM, PZT Controller#2, 3D Vision Module#1/#2, TTM, MSM, 2D Vision Module)',ko:'(내부 레이아웃, 상단 — Main Machine, ISO Machine, JIG#1/#2, TSM, PZT Controller#2, 3D Vision Module#1/#2, TTM, MSM, 2D Vision Module)',zhCN:'(内部布局,俯视图 — Main Machine、ISO Machine、JIG#1/#2、TSM、PZT Controller#2、3D Vision Module#1/#2、TTM、MSM、2D Vision Module)',zhTW:'(內部佈局,俯視圖 — Main Machine、ISO Machine、JIG#1/#2、TSM、PZT Controller#2、3D Vision Module#1/#2、TTM、MSM、2D Vision Module)',ja:'(内部レイアウト、上面図 — Main Machine、ISO Machine、JIG#1/#2、TSM、PZT Controller#2、3D Vision Module#1/#2、TTM、MSM、2D Vision Module)'})),
    slN(41,imgOnlyN(41,{en:'(Motor direction diagram, Top view — X/Y axis polarity for TTM, Multi Sorter, 2D Vision Module, TSM, and Jig/Load/Empty/Good/Buffer/Reject tray indexers)',ko:'(모터 방향 다이어그램, 상단 — TTM, Multi Sorter, 2D Vision Module, TSM 및 Jig/Load/Empty/Good/Buffer/Reject 인덱서의 X/Y축 극성)',zhCN:'(电机方向图,俯视图 — TTM、Multi Sorter、2D Vision Module、TSM及Jig/Load/Empty/Good/Buffer/Reject индексер的X/Y轴极性)',zhTW:'(馬達方向圖,俯視圖 — TTM、Multi Sorter、2D Vision Module、TSM及Jig/Load/Empty/Good/Buffer/Reject indexer的X/Y軸極性)',ja:'(モーター方向図、上面図 — TTM、Multi Sorter、2D Vision Module、TSM及びJig/Load/Empty/Good/Buffer/Reject各インデクサーのX/Y軸極性)'})),
    slN(42,imgOnlyN(42,{en:'(Motor direction diagram, Z-axis — Elevator Up(+)/Down(-), MSM Up(-)/Down(+), 2D Vision Module Up(-)/Down(+), TTM Up(-)/Down(+), 3D Vision Module#1 Up(+)/Down(-), TSM Up(-)/Down(+), 3D Vision Module#2 Up(+)/Down(-))',ko:'(모터 방향 다이어그램, Z축 — Elevator Up(+)/Down(-), MSM Up(-)/Down(+), 2D Vision Module Up(-)/Down(+), TTM Up(-)/Down(+), 3D Vision Module#1 Up(+)/Down(-), TSM Up(-)/Down(+), 3D Vision Module#2 Up(+)/Down(-))',zhCN:'(电机方向图,Z轴 — Elevator Up(+)/Down(-)、MSM Up(-)/Down(+)、2D Vision Module Up(-)/Down(+)、TTM Up(-)/Down(+)、3D Vision Module#1 Up(+)/Down(-)、TSM Up(-)/Down(+)、3D Vision Module#2 Up(+)/Down(-))',zhTW:'(馬達方向圖,Z軸 — Elevator Up(+)/Down(-)、MSM Up(-)/Down(+)、2D Vision Module Up(-)/Down(+)、TTM Up(-)/Down(+)、3D Vision Module#1 Up(+)/Down(-)、TSM Up(-)/Down(+)、3D Vision Module#2 Up(+)/Down(-))',ja:'(モーター方向図、Z軸 — Elevator Up(+)/Down(-)、MSM Up(-)/Down(+)、2D Vision Module Up(-)/Down(+)、TTM Up(-)/Down(+)、3D Vision Module#1 Up(+)/Down(-)、TSM Up(-)/Down(+)、3D Vision Module#2 Up(+)/Down(-))'})),
    slN(43,imgOnlyN(43,{en:'(2D Vision Module, 25M camera — main camera, lens, coaxial/oblique light, up/down limit sensors, Z-axis motor, aperture)',ko:'(2D Vision Module, 25M 카메라 — 메인 카메라, 렌즈, 동축/사각 조명, 상하한 센서, Z축 모터, 조리개)',zhCN:'(2D Vision Module,25M相机 — 主相机、镜头、同轴/斜射光源、上下限位传感器、Z轴电机、光圈)',zhTW:'(2D Vision Module,25M相機 — 主相機、鏡頭、同軸/斜射光源、上下限位感測器、Z軸馬達、光圈)',ja:'(2D Vision Module、25Mカメラ — メインカメラ、レンズ、同軸/斜光照明、上下限センサー、Z軸モーター、アパーチャ)'})),
    slN(44,imgOnlyN(44,{en:'(2D Vision Module, 67M camera — laser, laser camera, main camera, coaxial/oblique light, laser mirrors, aperture, Z-axis motor)',ko:'(2D Vision Module, 67M 카메라 — 레이저, 레이저 카메라, 메인 카메라, 동축/사각 조명, 레이저 미러, 조리개, Z축 모터)',zhCN:'(2D Vision Module,67M相机 — 激光器、激光相机、主相机、同轴/斜射光源、激光反射镜、光圈、Z轴电机)',zhTW:'(2D Vision Module,67M相機 — 雷射、雷射相機、主相機、同軸/斜射光源、雷射反射鏡、光圈、Z軸馬達)',ja:'(2D Vision Module、67Mカメラ — レーザー、レーザーカメラ、メインカメラ、同軸/斜光照明、レーザーミラー、アパーチャ、Z軸モーター)'})),
    slN(45,imgOnlyN(45,{en:'(3D Vision Module, Single optics — main camera, aperture, Z-axis motor, up/down limit sensors)',ko:'(3D Vision Module, Single optics — 메인 카메라, 조리개, Z축 모터, 상하한 센서)',zhCN:'(3D Vision Module,单光路 — 主相机、光圈、Z轴电机、上下限位传感器)',zhTW:'(3D Vision Module,單光路 — 主相機、光圈、Z軸馬達、上下限位感測器)',ja:'(3D Vision Module、シングル光学系 — メインカメラ、アパーチャ、Z軸モーター、上下限センサー)'})),
    slN(46,imgOnlyN(46,{en:'(3D Vision Module, Single optics — beam splitter, laser camera, laser, laser mirror, reference mirror and angle dial, PZT stage, micrometer)',ko:'(3D Vision Module, Single optics — B/S(빔 스플리터), 레이저 카메라, 레이저, 레이저 미러, Reference Mirror 및 각도 다이얼, PZT Stage, 마이크로미터)',zhCN:'(3D Vision Module,单光路 — 分光镜(B/S)、激光相机、激光器、激光反射镜、参考镜及角度旋钮、PZT Stage、千分尺)',zhTW:'(3D Vision Module,單光路 — 分光鏡(B/S)、雷射相機、雷射、雷射反射鏡、參考鏡及角度旋鈕、PZT Stage、千分尺)',ja:'(3D Vision Module、シングル光学系 — ビームスプリッター(B/S)、レーザーカメラ、レーザー、レーザーミラー、リファレンスミラー及び角度ダイヤル、PZTステージ、マイクロメーター)'})),
    slN(47,imgOnlyN(47,{en:'(3D Vision Module, Turret optics — main camera, aperture, Z-axis motor, up/down limit sensors, CXPin cable)',ko:'(3D Vision Module, Turret optics — 메인 카메라, 조리개, Z축 모터, 상하한 센서, CXPin 케이블)',zhCN:'(3D Vision Module,转塔光路 — 主相机、光圈、Z轴电机、上下限位传感器、CXPin电缆)',zhTW:'(3D Vision Module,轉塔光路 — 主相機、光圈、Z軸馬達、上下限位感測器、CXPin電纜)',ja:'(3D Vision Module、タレット光学系 — メインカメラ、アパーチャ、Z軸モーター、上下限センサー、CXPinケーブル)'})),
    slN(48,imgOnlyN(48,{en:'(3D Vision Module, Turret optics — turret motor, objective lens, interchangeable lenses(x5.5/x4.8/x6.7), beam splitter, laser, laser mirror, reference mirror and angle dial, PZT stage)',ko:'(3D Vision Module, Turret optics — Turret Motor, Objective Lens, 교환렌즈(x5.5/x4.8/x6.7), B/S, 레이저, 레이저 미러, Reference Mirror 및 각도 다이얼, PZT Stage)',zhCN:'(3D Vision Module,转塔光路 — 转塔电机、物镜、可换镜头(x5.5/x4.8/x6.7)、分光镜、激光器、激光反射镜、参考镜及角度旋钮、PZT Stage)',zhTW:'(3D Vision Module,轉塔光路 — 轉塔馬達、物鏡、可換鏡頭(x5.5/x4.8/x6.7)、分光鏡、雷射、雷射反射鏡、參考鏡及角度旋鈕、PZT Stage)',ja:'(3D Vision Module、タレット光学系 — タレットモーター、対物レンズ、交換レンズ(x5.5/x4.8/x6.7)、ビームスプリッター、レーザー、レーザーミラー、リファレンスミラー及び角度ダイヤル、PZTステージ)'})),
    slN(49,imgOnlyN(49,{en:'(TSM: Tray Sorter Module — gripper, ejector, Z-axis motor, up/down cylinder, ball bushing, shaft & spring, damper, coupler, up/down limit sensors, gripper cylinder & auto switch sensor)',ko:'(TSM: Tray Sorter Module — Gripper, Ejector, Z축 모터, Up & Down Cylinder, Ball Bushing, Shaft & Spring, Damper, Coupler, 상하한 센서, Gripper Cylinder & Auto Switch Sensor)',zhCN:'(TSM:托盘分选模块 — 夹爪、顶出器、Z轴电机、升降气缸、直线轴承、轴与弹簧、阻尼器、联轴器、上下限位传感器、夹爪气缸及自动开关传感器)',zhTW:'(TSM:托盤分選模組 — 夾爪、頂出器、Z軸馬達、升降氣缸、直線軸承、軸與彈簧、阻尼器、聯軸器、上下限位感測器、夾爪氣缸及自動開關感測器)',ja:'(TSM:トレイソーターモジュール — グリッパー、エジェクター、Z軸モーター、昇降シリンダー、ボールブッシュ、シャフト&スプリング、ダンパー、カプラー、上下限センサー、グリッパーシリンダー&オートスイッチセンサー)'})),
    slN(50,imgOnlyN(50,{en:'(TTM: Tray Transfer Module — gripper, Z-axis motor, cross roller guide, ball bushing, shaft & spring, coupler, up/down limit sensors, gripper cylinder & auto switch sensor, tray check sensor)',ko:'(TTM: Tray Transfer Module — Gripper, Z축 모터, Cross Roller Guide, Ball Bushing, Shaft & Spring, Coupler, 상하한 센서, Gripper Cylinder & Auto Switch Sensor, Tray Check Sensor)',zhCN:'(TTM:托盘传送模块 — 夹爪、Z轴电机、交叉滚子导轨、直线轴承、轴与弹簧、联轴器、上下限位传感器、夹爪气缸及自动开关传感器、托盘检测传感器)',zhTW:'(TTM:托盤傳送模組 — 夾爪、Z軸馬達、交叉滾子導軌、直線軸承、軸與彈簧、聯軸器、上下限位感測器、夾爪氣缸及自動開關感測器、托盤檢測感測器)',ja:'(TTM:トレイ搬送モジュール — グリッパー、Z軸モーター、クロスローラーガイド、ボールブッシュ、シャフト&スプリング、カプラー、上下限センサー、グリッパーシリンダー&オートスイッチセンサー、トレイチェックセンサー)'})),
    slN(51,{
      en:'MSM (Multi Sorter Module) — Picker, Picker Cylinder & Auto Switch Sensor, X-Axis Motor(Picker Gap Motor), Gap Limit Sensor, Air Filter, Vacuum Ejector, Solenoid Valve, Z-axis motor, up/down limit sensors, coupler. Configuration and installation locations vary depending on equipment specifications.',
      ko:'MSM(Multi Sorter Module) — Picker, Picker Cylinder & Auto Switch Sensor, X축 모터(Picker Gap Motor), Gap Limit Sensor, Air Filter, Vacuum Ejector, Solenoid Valve, Z축 모터, 상하한 센서, Coupler. 구성 및 설치 위치는 장비 사양에 따라 다릅니다.',
      zhCN:'MSM(多分选模块) — Picker、Picker气缸及自动开关传感器、X轴电机(Picker间距电机)、间距限位传感器、空气过滤器、真空发生器、电磁阀、Z轴电机、上下限位传感器、联轴器。构成及安装位置依设备规格而异。',
      zhTW:'MSM(多分選模組) — Picker、Picker氣缸及自動開關感測器、X軸馬達(Picker間距馬達)、間距限位感測器、空氣過濾器、真空發生器、電磁閥、Z軸馬達、上下限位感測器、聯軸器。構成及安裝位置依設備規格而異。',
      ja:'MSM(マルチソーターモジュール) — Picker、Pickerシリンダー&オートスイッチセンサー、X軸モーター(Pickerギャップモーター)、ギャップ限界センサー、エアフィルター、バキュームエジェクター、ソレノイドバルブ、Z軸モーター、上下限センサー、カプラー。構成及び設置位置は設備仕様により異なります。'
    }),
    slN(52,imgOnlyN(52,{en:'(Jig Module — LTS Target(Long Term Stability), Y-axis motor, JIG back side, inner clamp, push cylinder & auto switch sensor, cableveyor, home/limit sensors, tray check sensor)',ko:'(Jig Module — LTS Target(Long Term Stability), Y축 모터, JIG Back Side, Inner Clamp, Push Cylinder & Auto Switch Sensor, Cableveyor, Home/Limit 센서, Tray Check Sensor)',zhCN:'(Jig Module — LTS Target(长期稳定性)、Y轴电机、JIG背面、内夹爪、推动气缸及自动开关传感器、拖链、原点/限位传感器、托盘检测传感器)',zhTW:'(Jig Module — LTS Target(長期穩定性)、Y軸馬達、JIG背面、內夾爪、推動氣缸及自動開關感測器、拖鏈、原點/限位感測器、托盤檢測感測器)',ja:'(Jig Module — LTS Target(長期安定性)、Y軸モーター、JIG裏側、インナークランプ、プッシュシリンダー&オートスイッチセンサー、ケーブルベア、原点/リミットセンサー、トレイチェックセンサー)'})),
    slN(53,imgOnlyN(53,{en:'(Indexer — forward/backward finger clamp, push cylinder, cableveyor, finger clamp sensor, auto switch sensor)',ko:'(Indexer — Forward/Backward Finger Clamp, Push Cylinder, Cableveyor, Finger Clamp Sensor, Auto Switch Sensor)',zhCN:'(Indexer — 前后指爪夹持器、推动气缸、拖链、指爪夹持传感器、自动开关传感器)',zhTW:'(Indexer — 前後指爪夾持器、推動氣缸、拖鏈、指爪夾持感測器、自動開關感測器)',ja:'(Indexer — 前後フィンガークランプ、プッシュシリンダー、ケーブルベア、フィンガークランプセンサー、オートスイッチセンサー)'})),
    slN(54,imgOnlyN(54,{en:'(Elevator, Motor type vs Cylinder type — plate, Z-axis motor, belt, pulley, ball bearing, ball screw, up/down limit sensors, speed controller, auto switch sensor)',ko:'(Elevator, Motor Type / Cylinder Type — Plate, Z축 모터, Belt, Pulley, Ball Bearing, Ball Screw, 상하한 센서, Speed Controller, Auto Switch Sensor)',zhCN:'(Elevator,电机型/气缸型 — 平板、Z轴电机、皮带、皮带轮、滚珠轴承、滚珠丝杠、上下限位传感器、调速阀、自动开关传感器)',zhTW:'(Elevator,馬達型/氣缸型 — 平板、Z軸馬達、皮帶、皮帶輪、滾珠軸承、滾珠螺桿、上下限位感測器、調速閥、自動開關感測器)',ja:'(Elevator、モータータイプ/シリンダータイプ — プレート、Z軸モーター、ベルト、プーリー、ボールベアリング、ボールネジ、上下限センサー、スピードコントローラー、オートスイッチセンサー)'})),
    slN(55,imgOnlyN(55,{en:'(Stacker — Load Stacker speed controller, Empty Stacker speed controller, photo sensor, tray check sensor, magnetic sensor, stacker clamp sensor)',ko:'(Stacker — Load Stacker Speed Controller, Empty Stacker Speed Controller, Photo Sensor, Tray Check Sensor, Magnetic Sensor, Stacker Clamp Sensor)',zhCN:'(Stacker — Load Stacker调速器、Empty Stacker调速器、光电传感器、托盘检测传感器、磁性传感器、堆栈夹持传感器)',zhTW:'(Stacker — Load Stacker調速器、Empty Stacker調速器、光電感測器、托盤檢測感測器、磁性感測器、堆疊夾持感測器)',ja:'(Stacker — Load Stackerスピードコントローラー、Empty Stackerスピードコントローラー、フォトセンサー、トレイチェックセンサー、磁気センサー、スタッカークランプセンサー)'})),
    slN(56,imgOnlyN(56,{en:'(KVM wiring diagram, TN-UCNV-104D-PES — Front K/V/M, Docking Panel, HOST/2D/3D#1/3D#2 PC connections via RGB and USB cables)',ko:'(KVM 배선도, TN-UCNV-104D-PES — Front K/V/M, Docking Panel, HOST/2D/3D#1/3D#2 PC 간 RGB 및 USB 케이블 연결)',zhCN:'(KVM接线图,TN-UCNV-104D-PES — Front K/V/M、Docking Panel,通过RGB及USB线连接HOST/2D/3D#1/3D#2 PC)',zhTW:'(KVM接線圖,TN-UCNV-104D-PES — Front K/V/M、Docking Panel,透過RGB及USB線連接HOST/2D/3D#1/3D#2 PC)',ja:'(KVM配線図、TN-UCNV-104D-PES — Front K/V/M、Docking Panel、HOST/2D/3D#1/3D#2 PC間をRGB及びUSBケーブルで接続)'})),
    slN(57,imgOnlyN(57,{en:'(KVM wiring diagram, MAAG-Z114-4CH-DIO — Front Monitor, Docking Panel, HOST/2D/3D#1/3D#2 PC connections via HDMI and USB cables)',ko:'(KVM 배선도, MAAG-Z114-4CH-DIO — Front Monitor, Docking Panel, HOST/2D/3D#1/3D#2 PC 간 HDMI 및 USB 케이블 연결)',zhCN:'(KVM接线图,MAAG-Z114-4CH-DIO — Front Monitor、Docking Panel,通过HDMI及USB线连接HOST/2D/3D#1/3D#2 PC)',zhTW:'(KVM接線圖,MAAG-Z114-4CH-DIO — Front Monitor、Docking Panel,透過HDMI及USB線連接HOST/2D/3D#1/3D#2 PC)',ja:'(KVM配線図、MAAG-Z114-4CH-DIO — Front Monitor、Docking Panel、HOST/2D/3D#1/3D#2 PC間をHDMI及びUSBケーブルで接続)'})),
    slN(58,imgOnlyN(58,{en:'(HUB wiring diagram — HP 1408-8G switch(8 port) connecting HOST/2D/3D#1/3D#2 PC, AF Controller#1/#2, Docking Panel via CAT6 cables)',ko:'(HUB 배선도 — HP 1408-8G 스위치(8포트)가 CAT6 케이블로 HOST/2D/3D#1/3D#2 PC, AF Controller#1/#2, Docking Panel을 연결)',zhCN:'(HUB接线图 — HP 1408-8G交换机(8口)通过CAT6线缆连接HOST/2D/3D#1/3D#2 PC、AF Controller#1/#2、Docking Panel)',zhTW:'(HUB接線圖 — HP 1408-8G交換器(8埠)透過CAT6線材連接HOST/2D/3D#1/3D#2 PC、AF Controller#1/#2、Docking Panel)',ja:'(HUB配線図 — HP 1408-8Gスイッチ(8ポート)がCAT6ケーブルでHOST/2D/3D#1/3D#2 PC、AF Controller#1/#2、Docking Panelを接続)'})),
    slN(59,imgOnlyN(59,{en:'(PI PZT Controller wiring, PZT E-754 — PZT Stage, 3D LED Controller#1/#2, Sync Board, 3D Vision PC#1/#2, 3D TRG cables)',ko:'(PI PZT Controller 배선도, PZT E-754 — PZT Stage, 3D LED Controller#1/#2, Sync Board, 3D Vision PC#1/#2, 3D TRG 케이블)',zhCN:'(PI PZT Controller接线图,PZT E-754 — PZT Stage、3D LED Controller#1/#2、Sync Board、3D Vision PC#1/#2、3D TRG电缆)',zhTW:'(PI PZT Controller接線圖,PZT E-754 — PZT Stage、3D LED Controller#1/#2、Sync Board、3D Vision PC#1/#2、3D TRG電纜)',ja:'(PI PZT Controller配線図、PZT E-754 — PZT Stage、3D LED Controller#1/#2、Sync Board、3D Vision PC#1/#2、3D TRGケーブル)'})),
    slN(60,imgOnlyN(60,{en:'(Nanofaktur PZT Controller wiring, EBD-120210 — PZT Stage, 3D LED Controller#1/#2, Sync Board, 3D Vision PC#1/#2, 3D TRG cables)',ko:'(Nanofaktur PZT Controller 배선도, EBD-120210 — PZT Stage, 3D LED Controller#1/#2, Sync Board, 3D Vision PC#1/#2, 3D TRG 케이블)',zhCN:'(Nanofaktur PZT Controller接线图,EBD-120210 — PZT Stage、3D LED Controller#1/#2、Sync Board、3D Vision PC#1/#2、3D TRG电缆)',zhTW:'(Nanofaktur PZT Controller接線圖,EBD-120210 — PZT Stage、3D LED Controller#1/#2、Sync Board、3D Vision PC#1/#2、3D TRG電纜)',ja:'(Nanofaktur PZT Controller配線図、EBD-120210 — PZT Stage、3D LED Controller#1/#2、Sync Board、3D Vision PC#1/#2、3D TRGケーブル)'})),
    slN(61,imgOnlyN(61,{en:'(Host PC wiring — AF Controller#1/#2 RS232 to COM1/COM2, KVM Switch, barcode scanner, printer cable, HUB/LAN, graphic card HDMI)',ko:'(Host PC 배선도 — AF Controller#1/#2 RS232 to COM1/COM2, KVM Switch, Barcode 스캐너, 프린트 케이블, HUB/LAN, 그래픽카드 HDMI)',zhCN:'(Host PC接线图 — AF Controller#1/#2 RS232接COM1/COM2、KVM Switch、条码扫描器、打印电缆、HUB/LAN、显卡HDMI)',zhTW:'(Host PC接線圖 — AF Controller#1/#2 RS232接COM1/COM2、KVM Switch、條碼掃描器、列印電纜、HUB/LAN、顯卡HDMI)',ja:'(Host PC配線図 — AF Controller#1/#2 RS232をCOM1/COM2へ接続、KVM Switch、バーコードスキャナー、プリントケーブル、HUB/LAN、グラフィックカードHDMI)'})),
    slN(62,imgOnlyN(62,{en:'(Host PC wiring, continued — IO Module TX/RX, Motor Driver TX/RX via CAT5E-SFTP and PCI cards, AF Controller#1/#2 LAN cards, VRS connection)',ko:'(Host PC 배선도, 계속 — IO Module TX/RX, Motor Driver TX/RX (CAT5E-SFTP 및 PCI 카드), AF Controller#1/#2 LAN 카드, VRS 연결)',zhCN:'(Host PC接线图,续 — IO Module TX/RX、Motor Driver TX/RX(经CAT5E-SFTP及PCI板卡)、AF Controller#1/#2 LAN卡、VRS连接)',zhTW:'(Host PC接線圖,續 — IO Module TX/RX、Motor Driver TX/RX(經CAT5E-SFTP及PCI卡)、AF Controller#1/#2 LAN卡、VRS連接)',ja:'(Host PC配線図、続き — IO Module TX/RX、Motor Driver TX/RX(CAT5E-SFTP及びPCIカード経由)、AF Controller#1/#2 LANカード、VRS接続)'})),
    slN(63,{
      en:'2D Vision PC wiring — Vision Camera (via CL cable) to Grab Board, LED Controller Data In (Sync Board 44P), KVM Switch, HUB/LAN, graphic card HDMI. The number and method of cables depends on the type of Grab Board or Camera.',
      ko:'2D Vision PC 배선도 — Vision Camera(CL 케이블)와 Grab Board 연결, LED Controller Data In(Sync Board 44P), KVM Switch, HUB/LAN, 그래픽카드 HDMI. 케이블의 수량과 방식은 Grab Board 또는 Camera 종류에 따라 다릅니다.',
      zhCN:'2D Vision PC接线图 — Vision Camera(经CL电缆)连接Grab Board、LED Controller Data In(Sync Board 44P)、KVM Switch、HUB/LAN、显卡HDMI。电缆的数量及方式依Grab Board或Camera种类而异。',
      zhTW:'2D Vision PC接線圖 — Vision Camera(經CL電纜)連接Grab Board、LED Controller Data In(Sync Board 44P)、KVM Switch、HUB/LAN、顯卡HDMI。電纜的數量及方式依Grab Board或Camera種類而異。',
      ja:'2D Vision PC配線図 — Vision Camera(CLケーブル)とGrab Boardの接続、LED Controller Data In(Sync Board 44P)、KVM Switch、HUB/LAN、グラフィックカードHDMI。ケーブルの本数と方式はGrab BoardまたはCameraの種類により異なります。'
    }),
    slN(64,{
      en:'3D Vision PC wiring — Vision Camera (via CXP cable) to Grab Board, LED Controller 3D TRG (Sync Board), PZT Controller sync connection, KVM Switch, HUB/LAN, graphic card HDMI. Optical system cables may vary depending on specification.',
      ko:'3D Vision PC 배선도 — Vision Camera(CXP 케이블)와 Grab Board 연결, LED Controller 3D TRG(Sync Board), PZT Controller 동기화 연결, KVM Switch, HUB/LAN, 그래픽카드 HDMI. 광학시스템 케이블은 사양에 따라 다를 수 있습니다.',
      zhCN:'3D Vision PC接线图 — Vision Camera(经CXP电缆)连接Grab Board、LED Controller 3D TRG(Sync Board)、PZT Controller同步连接、KVM Switch、HUB/LAN、显卡HDMI。光学系统电缆可能依规格而异。',
      zhTW:'3D Vision PC接線圖 — Vision Camera(經CXP電纜)連接Grab Board、LED Controller 3D TRG(Sync Board)、PZT Controller同步連接、KVM Switch、HUB/LAN、顯卡HDMI。光學系統電纜可能依規格而異。',
      ja:'3D Vision PC配線図 — Vision Camera(CXPケーブル)とGrab Boardの接続、LED Controller 3D TRG(Sync Board)、PZT Controller同期接続、KVM Switch、HUB/LAN、グラフィックカードHDMI。光学システムのケーブルは仕様により異なる場合があります。'
    })
  ]},
  {code:'1.3.2',title:{en:'Safety Sticker',ko:'안전 스티커',zhCN:'安全标签',zhTW:'安全標籤',ja:'安全ステッカー'},slides:[
    dividerN(65),
    slN(66,imgOnlyN(66,{en:'(safety sticker locations on the equipment)',ko:'(설비에 부착된 안전 스티커 위치)',zhCN:'(设备上安全标签的贴附位置)',zhTW:'(設備上安全標籤的貼附位置)',ja:'(設備に貼付された安全ステッカーの位置)'}))
  ]},
  {code:'1.3.3',title:{en:'Power Supply & Interlock',ko:'전원 공급 및 인터록',zhCN:'电源供应与联锁',zhTW:'電源供應與聯鎖',ja:'電源供給及びインターロック'},slides:[
    dividerN(67),
    slN(68,{
      en:'Rear panel connections — External LAN Port; Air 1, 2: Main Equipment Air Socket(10Φ); Main Power Cable Socket.',
      ko:'외부 LAN 포트, Air 1, 2: 설비 메인 공압 소켓(10Φ), 메인 전원 케이블 소켓',
      zhCN:'后面板接口 — 外部LAN端口;Air 1、2:设备主气压接口(10Φ);主电源电缆插座。',
      zhTW:'後面板接口 — 外部LAN埠;Air 1、2:設備主氣壓接口(10Φ);主電源電纜插座。',
      ja:'背面パネル接続 — 外部LANポート、Air1・2:設備メイン空圧ソケット(10Φ)、メイン電源ケーブルソケット。'
    }),
    slN(69,{
      en:'In order to supply power to the NBGA, the following items should be checked: main breaker On/Off status; On/Off status of the circuit protector inside the electric panel; whether the utility panel lamp is on/off (no lamp in NBGA for Intel); upper door lock/unlock status according to Auto/Teach mode; EMS button push/pull status; lower door close state (for lower fan operation); On/Off status of the UPS power for the Host PC (no UPS in NBGA for Intel); On/Off status of the power strip for controllers such as PC and LED controller (no power strip in NBGA for Intel); that the main air of the machine is supplied; that the air pressure of each air regulator is maintained at 4~6bar; Operation Panel button lamp status.',
      ko:'NBGA설비의 전원을 공급하기 위해서는 아래 항목을 확인 해야 한다. Main 차단기 On/Off 상태 확인, 전장 판넬 내부 차단기 On/Off 상태 확인, Utility panel의 수전 lamp가 On/Off 되어 있는지 확인(단 Intel향의 NBGA 설비에는 수전 lamp가 없음), Auto/teach mode에 따라 상부 door lock/unlock 상태 확인, EMS button push/pull 상태 확인, 하부 Fan 동작을 위해서는 하부 door close 상태 확인, Host PC의 전원을 공급하기 위해서는 UPS 전원의 On/Off 상태 확인(단, Intel향 NBGA 설비에는 UPS가 없음), PC 및 LED Controller등의 controller 전원 공급을 위해서는 power strip의 On/Off 상태 확인(단, Intel향 NBGA 설비에는 power strip가 없음), 설비의 Main Air가 공급되는지 확인, 각 Air Regulator의 air pressure가 4~6bar로 유지 되는지 확인, Operation Panel Button Lamp 상태 확인.',
      zhCN:'为向NBGA设备供电,需确认以下项目:主断路器开/关状态;电控柜内断路器开/关状态;Utility panel受电指示灯是否点亮(Intel机型无此指示灯);根据Auto/Teach模式确认上门锁定/解锁状态;EMS按钮按下/拉出状态;为使下部风扇运行需确认下门关闭状态;为向Host PC供电需确认UPS开/关状态(Intel机型无UPS);为向PC及LED Controller等控制器供电需确认电源排插开/关状态(Intel机型无电源排插);确认设备主气源已供应;确认各Air Regulator气压维持在4~6bar;确认操作面板按钮指示灯状态。',
      zhTW:'為向NBGA設備供電,需確認以下項目:主斷路器開/關狀態;電控櫃內斷路器開/關狀態;Utility panel受電指示燈是否點亮(Intel機型無此指示燈);根據Auto/Teach模式確認上門鎖定/解鎖狀態;EMS按鈕按下/拉出狀態;為使下部風扇運行需確認下門關閉狀態;為向Host PC供電需確認UPS開/關狀態(Intel機型無UPS);為向PC及LED Controller等控制器供電需確認電源排插開/關狀態(Intel機型無電源排插);確認設備主氣源已供應;確認各Air Regulator氣壓維持在4~6bar;確認操作面板按鈕指示燈狀態。',
      ja:'NBGA設備に電源を供給するには、次の項目を確認する必要がある。Main遮断機のOn/Off状態確認、電装パネル内部の遮断機On/Off状態確認、Utility panelの受電ランプがOn/Offされているか確認(ただしIntel向けNBGA設備には受電ランプなし)、Auto/Teachモードに応じた上部doorのlock/unlock状態確認、EMSボタンのpush/pull状態確認、下部Fan動作のためには下部doorのclose状態確認、Host PCの電源供給のためにはUPS電源のOn/Off状態確認(ただしIntel向けNBGA設備にはUPSなし)、PC及びLED Controller等コントローラーの電源供給のためにはpower stripのOn/Off状態確認(ただしIntel向けNBGA設備にはpower stripなし)、設備のMain Airが供給されているか確認、各Air Regulatorのair pressureが4~6barに維持されているか確認、Operation Panel Button Lampの状態確認。'
    }),
    slN(70,{
      en:'Turn on the main circuit breaker installed on the equipment main panel. Turn on all circuit breakers inside the electric panel.',
      ko:'설비 Main panel에 설치된 Main 차단기를 On 한다. 전장 판넬 내부의 차단기를 모두 On 한다.',
      zhCN:'打开安装在设备Main panel上的主断路器。打开电控柜内部的所有断路器。',
      zhTW:'打開安裝在設備Main panel上的主斷路器。打開電控櫃內部的所有斷路器。',
      ja:'設備のMain panelに設置されたMain遮断機をOnにする。電装パネル内部の遮断機をすべてOnにする。'
    }),
    slN(71,{
      en:'Turn on the main circuit breaker installed on the equipment main panel. Turn on all circuit breakers inside the electric panel. (Main Electric Panel, Rear — CP, MC, Noise Filter, Terminal Block, Earth Bar, SMPS/PLC.)',
      ko:'설비 Main panel에 설치된 Main 차단기를 On 한다. 전장 판넬 내부의 차단기를 모두 On 한다. (Main Electric Panel, Rear — CP, MC, Noise Filter, Terminal Block, Earth Bar, SMPS/PLC)',
      zhCN:'打开安装在设备Main panel上的主断路器。打开电控柜内部的所有断路器。(Main Electric Panel,后视图 — CP、MC、噪声滤波器、端子台、接地排、SMPS/PLC)',
      zhTW:'打開安裝在設備Main panel上的主斷路器。打開電控櫃內部的所有斷路器。(Main Electric Panel,後視圖 — CP、MC、雜訊濾波器、端子台、接地排、SMPS/PLC)',
      ja:'設備のMain panelに設置されたMain遮断機をOnにする。電装パネル内部の遮断機をすべてOnにする。(Main Electric Panel、背面 — CP、MC、ノイズフィルター、端子台、アースバー、SMPS/PLC)'
    }),
    slN(72,{
      en:'Turn on the main circuit breaker installed on the equipment main panel. Turn on all circuit breakers inside the electric panel. (ISO Sub Electric Panel, Left — Motor Driver, IO/PM Module.)',
      ko:'설비 Main panel에 설치된 Main 차단기를 On 한다. 전장 판넬 내부의 차단기를 모두 On 한다. (ISO Sub Electric Panel, Left — Motor Driver, IO/PM Module)',
      zhCN:'打开安装在设备Main panel上的主断路器。打开电控柜内部的所有断路器。(ISO Sub Electric Panel,左视图 — 电机驱动器、IO/PM模块)',
      zhTW:'打開安裝在設備Main panel上的主斷路器。打開電控櫃內部的所有斷路器。(ISO Sub Electric Panel,左視圖 — 馬達驅動器、IO/PM模組)',
      ja:'設備のMain panelに設置されたMain遮断機をOnにする。電装パネル内部の遮断機をすべてOnにする。(ISO Sub Electric Panel、左側 — Motor Driver、IO/PM Module)'
    }),
    slN(73,{
      en:'The lamp on the Utility panel should be on. The lamp is turned on only when the CP01 Power Lamp breaker is turned on. The lamp is not included for Intel.',
      ko:'Utility panel의 수전 lamp가 On 되어야 함. CP01 Power Lamp 차단기를 On 해야 수전 Lamp가 On 됨. Intel향에는 수전 Lamp가 포함되어 있지 않음.',
      zhCN:'Utility panel的受电指示灯应点亮。仅当CP01 Power Lamp断路器打开时该指示灯才会点亮。Intel机型不含此指示灯。',
      zhTW:'Utility panel的受電指示燈應點亮。僅當CP01 Power Lamp斷路器打開時該指示燈才會點亮。Intel機型不含此指示燈。',
      ja:'Utility panelの受電ランプが点灯している必要がある。CP01 Power Lamp遮断機をOnにして初めて受電ランプが点灯する。Intel向けには受電ランプは含まれていない。'
    }),
    slN(74,{
      en:'Auto Mode — Motor power can be supplied only when the upper doors are all closed and locked. When an alarm occurs during automatic operation: 1) click the \'Reset\' button, 2) release the Door Interlock, 3) open the door and resolve the point where the alarm occurred, 4) close the door and switch the door interlock to Lock, 5) click the \'Lot Start\' button to start automatic operation. Teach Mode — Motor power can be supplied even when the upper door is open and unlocked. Auto/Teach mode can be changed via handler program output.',
      ko:'Auto Mode- 상부 도어가 모두 닫히고 잠겼을 때만 모터 전원을 공급할 수 있습니다. 자동운전 중 알람이 발생할 경우 조치사항은 다음과 같습니다. A. 알람이 발생하면 \'Reset\' 버튼을 클릭합니다. B. 도어 인터록을 해제합니다. C. 문을 열고 알람이 발생한 지점을 해결합니다. D. 도어를 닫고 도어 인터락을 Lock으로 전환합니다. E. \'Lot Start\' 버튼을 클릭하여 자동 운전을 시작합니다. Teach Mode- 상부 도어를 열고 잠금을 해제한 상태에서도 모터 전원을 공급할 수 있습니다. Auto/Teach Mode를 Handler 프로그램 I/O 설정으로 변경할 수 있습니다.',
      zhCN:'Auto Mode — 仅当上部所有门均关闭并锁定时才能供应马达电源。自动运转中发生警报时的处理步骤如下:A.发生警报时点击"Reset"按钮;B.解除门联锁;C.打开门解决警报发生的位置;D.关闭门并将门联锁切换为Lock;E.点击"Lot Start"按钮开始自动运转。Teach Mode — 即使上部门打开且解锁,也可供应马达电源。可通过Handler程序I/O设置切换Auto/Teach模式。',
      zhTW:'Auto Mode — 僅當上部所有門均關閉並鎖定時才能供應馬達電源。自動運轉中發生警報時的處理步驟如下:A.發生警報時點擊"Reset"按鈕;B.解除門聯鎖;C.打開門解決警報發生的位置;D.關閉門並將門聯鎖切換為Lock;E.點擊"Lot Start"按鈕開始自動運轉。Teach Mode — 即使上部門打開且解鎖,也可供應馬達電源。可透過Handler程式I/O設定切換Auto/Teach模式。',
      ja:'Auto Mode — 上部ドアがすべて閉じられロックされている場合のみモーター電源を供給できます。自動運転中にアラームが発生した場合の対応は次の通りです。A. アラーム発生時に「Reset」ボタンをクリックします。B. ドアインターロックを解除します。C. ドアを開けアラーム発生箇所を解決します。D. ドアを閉じドアインターロックをLockに切り替えます。E. 「Lot Start」ボタンをクリックして自動運転を開始します。Teach Mode — 上部ドアが開いてロック解除された状態でもモーター電源を供給できます。Auto/Teach ModeはHandlerプログラムI/O設定で切り替え可能です。'
    }),
    slN(75,{
      en:'In order to supply motor power, the 4 EMS Buttons installed in the facility (SEMCO, SEMV, Kyocera) must be kept in the pull state. If even one of the four EMS Buttons is pushed, the motor power cannot be supplied. The EMS button is used to cut off the motor power in case of emergency.',
      ko:'Motor power 를 공급하기 위해서는 설비에 설치된 4개의 EMS Button(SEMCO, SEMV, Kyocera)이 pull 상태로 유지 되야 함. 4개의 EMS Button중 1개라도 push 되어 있을 경우, motor power를 공급할 수 없음. EMS button은 비상 시 Motor의 power를 차단하는 용도로 사용 함.',
      zhCN:'为供应马达电源,设备(SEMCO、SEMV、Kyocera)所安装的4个EMS按钮必须保持在拉出状态。若4个EMS按钮中有1个被按下,则无法供应马达电源。EMS按钮用于紧急情况下切断马达电源。',
      zhTW:'為供應馬達電源,設備(SEMCO、SEMV、Kyocera)所安裝的4個EMS按鈕必須保持在拉出狀態。若4個EMS按鈕中有1個被按下,則無法供應馬達電源。EMS按鈕用於緊急情況下切斷馬達電源。',
      ja:'モーター電源を供給するためには、設備(SEMCO、SEMV、Kyocera)に設置された4つのEMSボタンがpull状態を維持している必要がある。4つのEMSボタンのうち1つでもpushされている場合、モーター電源は供給できない。EMSボタンは非常時にモーター電源を遮断する用途で使用される。'
    }),
    slN(76,{
      en:'In order to supply motor power, the 4 EMS Buttons installed in the facility (AT&S, Intel, Nanya) must be kept in the pull state. If even one of the four EMS Buttons is pushed, the motor power cannot be supplied. The EMS button is used to cut off the motor power in case of emergency.',
      ko:'Motor power 를 공급하기 위해서는 설비에 설치된 4개의 EMS Button(AT&S, Intel, Nanya)이 pull 상태로 유지 되야 함. 4개의 EMS Button중 1개라도 push 되어 있을 경우, motor power를 공급할 수 없음. EMS button은 비상 시 Motor의 power를 차단하는 용도로 사용 함.',
      zhCN:'为供应马达电源,设备(AT&S、Intel、Nanya)所安装的4个EMS按钮必须保持在拉出状态。若4个EMS按钮中有1个被按下,则无法供应马达电源。EMS按钮用于紧急情况下切断马达电源。',
      zhTW:'為供應馬達電源,設備(AT&S、Intel、Nanya)所安裝的4個EMS按鈕必須保持在拉出狀態。若4個EMS按鈕中有1個被按下,則無法供應馬達電源。EMS按鈕用於緊急情況下切斷馬達電源。',
      ja:'モーター電源を供給するためには、設備(AT&S、Intel、Nanya)に設置された4つのEMSボタンがpull状態を維持している必要がある。4つのEMSボタンのうち1つでもpushされている場合、モーター電源は供給できない。EMSボタンは非常時にモーター電源を遮断する用途で使用される。'
    }),
    slN(77,{
      en:'In order to supply power to the fan installed in the lower door, all lower doors must be closed. The fans of the main equipment and the dust suppression equipment are turned on/off independently of each other. The power of the fan installed in the lower door is automatically supplied, so it is not possible to supply power manually.',
      ko:'하부 door에 설치된 Fan에 전원을 공급하기 위해서는 하부 door가 모두 close 되어야 함. Main 설비와 제진 설비의 Fan은 각각 독립적으로 On/Off 함. 하부 Door에 설치된 Fan의 전원은 자동으로 공급되는 구조로, 수동으로 전원을 공급할 수 없음.',
      zhCN:'为向安装在下门的风扇供电,所有下门必须关闭。主设备与除振设备的风扇各自独立开/关。安装在下门的风扇电源为自动供应结构,无法手动供电。',
      zhTW:'為向安裝在下門的風扇供電,所有下門必須關閉。主設備與除振設備的風扇各自獨立開/關。安裝在下門的風扇電源為自動供應結構,無法手動供電。',
      ja:'下部ドアに設置されたFanに電源を供給するには、下部ドアがすべてcloseされている必要がある。Main設備と除振設備のFanはそれぞれ独立してOn/Offする。下部Doorに設置されたFanの電源は自動供給される構造のため、手動で電源を供給することはできない。'
    }),
    slN(78,{
      en:'In order to supply power to the Host PC, the power of the UPS must be turned on. When shipping equipment and doing power-related work, the UPS power must be turned off. No UPS for Intel.',
      ko:'Host PC의 전원을 공급하기 위해서는 UPS의 power를 On 해야 함. 설비 출하 및 전원 관련 작업 시, 반드시 UPS 전원을 Off 해야 함. Intel향에는 UPS가 없음.',
      zhCN:'为向Host PC供电,必须打开UPS的电源。设备出货及电源相关作业时,必须关闭UPS电源。Intel机型无UPS。',
      zhTW:'為向Host PC供電,必須打開UPS的電源。設備出貨及電源相關作業時,必須關閉UPS電源。Intel機型無UPS。',
      ja:'Host PCに電源を供給するためにはUPSの電源をOnにする必要がある。設備出荷及び電源関連作業時には、必ずUPS電源をOffにしなければならない。Intel向けにはUPSがない。'
    }),
    slN(79,{
      en:'In order to supply power to controllers such as PC and LED controller (3D#1, 3D#2, Host, 2D Vision), the power strip must be turned on. Please refer to the image below for the location of the power strip.',
      ko:'PC 및 LED 컨트롤러와 같은 컨트롤러(3D#1, 3D#2, Host, 2D Vision)에 전원을 공급하려면 전원 스트립이 켜져 있어야 합니다. 파워 스트립의 위치는 아래 이미지를 참조하십시오.',
      zhCN:'为向PC及LED Controller等控制器(3D#1、3D#2、Host、2D Vision)供电,电源排插必须处于开启状态。电源排插的位置请参照下方图片。',
      zhTW:'為向PC及LED Controller等控制器(3D#1、3D#2、Host、2D Vision)供電,電源排插必須處於開啟狀態。電源排插的位置請參照下方圖片。',
      ja:'PC及びLED Controllerなどのコントローラー(3D#1、3D#2、Host、2D Vision)に電源を供給するには、電源ストリップがOnになっている必要がある。パワーストリップの位置は下記画像を参照してください。'
    }),
    slN(80,{
      en:'Adjust the regulator so that the air pressure of each air regulator is maintained at 4~6bar. The pressure of the regulator installed on the utility panel of the main facility is monitored with an input signal. (Main Air Regulator #1 — Indexer Finger, Stacker, Elevator, Multi Sorter, Air Gun, TTM.)',
      ko:'각 Air Regulator의 air pressure가 4~6bar로 유지 되도록 regulator를 조절 해야 함. Main 설비 Utility panel에 설치된 regulator의 압력은 Input signal로 상태를 모니터링 함. (Main Air Regulator #1 — Indexer Finger, Stacker, Elevator, Multi Sorter, Air Gun, TTM)',
      zhCN:'必须调整调压器,使各Air Regulator的气压维持在4~6bar。安装在主设备Utility panel上的调压器压力以输入信号进行状态监控。(Main Air Regulator #1 — Indexer Finger、Stacker、Elevator、Multi Sorter、Air Gun、TTM)',
      zhTW:'必須調整調壓器,使各Air Regulator的氣壓維持在4~6bar。安裝在主設備Utility panel上的調壓器壓力以輸入訊號進行狀態監控。(Main Air Regulator #1 — Indexer Finger、Stacker、Elevator、Multi Sorter、Air Gun、TTM)',
      ja:'各Air Regulatorのair pressureが4~6barに維持されるようにレギュレーターを調整する必要がある。Main設備のUtility panelに設置されたレギュレーターの圧力はInput signalで状態を監視する。(Main Air Regulator #1 — Indexer Finger、Stacker、Elevator、Multi Sorter、Air Gun、TTM)'
    }),
    slN(81,{
      en:'Adjust the regulator so that the air pressure of each air regulator is maintained at 4~6bar. The pressure of the regulator installed on the utility panel of the main facility is monitored with an input signal. (Main Air Regulator #2 — JIG Align/Clamp, TSM, ISO Rotator.)',
      ko:'각 Air Regulator의 air pressure가 4~6bar로 유지 되도록 regulator를 조절 해야 함. Main 설비 Utility panel에 설치된 regulator의 압력은 Input signal로 상태를 모니터링 함. (Main Air Regulator #2 — JIG Align/Clamp, TSM, ISO Rotator)',
      zhCN:'必须调整调压器,使各Air Regulator的气压维持在4~6bar。安装在主设备Utility panel上的调压器压力以输入信号进行状态监控。(Main Air Regulator #2 — JIG Align/Clamp、TSM、ISO Rotator)',
      zhTW:'必須調整調壓器,使各Air Regulator的氣壓維持在4~6bar。安裝在主設備Utility panel上的調壓器壓力以輸入訊號進行狀態監控。(Main Air Regulator #2 — JIG Align/Clamp、TSM、ISO Rotator)',
      ja:'各Air Regulatorのair pressureが4~6barに維持されるようにレギュレーターを調整する必要がある。Main設備のUtility panelに設置されたレギュレーターの圧力はInput signalで状態を監視する。(Main Air Regulator #2 — JIG Align/Clamp、TSM、ISO Rotator)'
    }),
    slN(82,{
      en:'Operation Panel — POWER ON: turns on IO(Sensor)/Driver power. POWER OFF: turns off IO(Sensor)/Driver power. START: runs Start. STOP: runs Stop. RESET: supplies motor power (when the Reset button flashes). 1) When all circuit breakers in the facility are turned on, the lamp of the power-off button should be on. 2) The lamp of the Reset button repeats on/off in about a 500ms cycle. 3) When the Power-on button is pushed, that lamp turns on and the power-off button lamp turns off. 4) In Teach mode, when all EMS buttons are in the pull state, pushing the Reset button supplies motor power. 5) In Auto mode, when all EMS buttons are pull and all upper doors are locked, pushing Reset supplies motor power. 6) However, if the upper door is unlocked in Auto mode, the motor power is cut off.',
      ko:'Operation Panel — POWER ON: IO(Sensor), Driver Power on. POWER OFF: IO(Sensor), Driver Power off. START: Run 시작. STOP: Run 중지. RESET: Motor Power on(Reset 버튼이 깜박일 때). 1. 설비내 모든 차단기를 On 했을 때, power off button의 lamp가 On 되어 야 함. 2. Reset button의 lamp는 약 500ms 주기로 on/off를 반복 함. 3. Power on button을 push 했을 때 Lamp on, power off button의 lamp는 off 되어야 함. 4. Teach mode일 경우, 모든 EMS button이 pull 상태 일 때, reset button을 push 하면 motor power가 공급 됨. 5. auto mode일 경우, 모든 EMS button이 pull 상태, 상부 Door가 모두 lock 상태 일 때, reset button을 push 하면 motor power가 공급 됨. 6. 단, auto mode에서 상부 door를 unlock하면 motor power는 차단 됨.',
      zhCN:'Operation Panel — POWER ON:开启IO(传感器)、驱动器电源。POWER OFF:关闭IO(传感器)、驱动器电源。START:运行开始。STOP:运行停止。RESET:供应马达电源(Reset按钮闪烁时)。1.设备内所有断路器打开时,power off按钮指示灯应点亮。2.Reset按钮指示灯以约500ms周期反复闪烁。3.按下Power on按钮时指示灯点亮,power off按钮指示灯应熄灭。4.Teach模式下,所有EMS按钮处于拉出状态时,按下reset按钮即可供应马达电源。5.Auto模式下,所有EMS按钮处于拉出状态且上部所有门均为锁定状态时,按下reset按钮即可供应马达电源。6.但Auto模式下若解锁上部门,马达电源将被切断。',
      zhTW:'Operation Panel — POWER ON:開啟IO(感測器)、驅動器電源。POWER OFF:關閉IO(感測器)、驅動器電源。START:運行開始。STOP:運行停止。RESET:供應馬達電源(Reset按鈕閃爍時)。1.設備內所有斷路器打開時,power off按鈕指示燈應點亮。2.Reset按鈕指示燈以約500ms週期反覆閃爍。3.按下Power on按鈕時指示燈點亮,power off按鈕指示燈應熄滅。4.Teach模式下,所有EMS按鈕處於拉出狀態時,按下reset按鈕即可供應馬達電源。5.Auto模式下,所有EMS按鈕處於拉出狀態且上部所有門均為鎖定狀態時,按下reset按鈕即可供應馬達電源。6.但Auto模式下若解鎖上部門,馬達電源將被切斷。',
      ja:'Operation Panel — POWER ON:IO(センサー)、Driver電源On。POWER OFF:IO(センサー)、Driver電源Off。START:運転開始。STOP:運転停止。RESET:モーター電源On(Resetボタン点滅時)。1.設備内のすべての遮断機をOnにしたとき、power offボタンのランプがOnになる必要がある。2.Resetボタンのランプは約500ms周期でOn/Offを繰り返す。3.Power onボタンを押すとランプがOnになり、power offボタンのランプはOffになる必要がある。4.Teach modeの場合、すべてのEMSボタンがpull状態のとき、resetボタンを押すとモーター電源が供給される。5.auto modeの場合、すべてのEMSボタンがpull状態かつ上部Doorがすべてlock状態のとき、resetボタンを押すとモーター電源が供給される。6.ただし、auto modeで上部doorをunlockするとモーター電源は遮断される。'
    })
  ]},
  {code:'1.3.4',title:{en:'Equipment Automatic Sequence',ko:'설비 자동 동작 순서',zhCN:'设备自动运行顺序',zhTW:'設備自動運行順序',ja:'設備自動動作シーケンス'},slides:[
    dividerN(83),
    slN(84,imgOnlyN(84,{en:'(automatic sequence overview — 1.Load tray 2.Read the barcode of unit 3.2D inspection 4.Place & Pick tray 5.3D inspection 6.Tray sorting 7.Unit sorting 8.Unload tray)',ko:'(자동 동작 순서 개요 — 1.Load tray 2.Read the barcode of unit 3.2D inspection 4.Place & Pick tray 5.3D inspection 6.Tray sorting 7.Unit sorting 8.Unload tray)',zhCN:'(自动运行顺序概要 — 1.Load tray 2.读取产品条码 3.2D检测 4.Place & Pick tray 5.3D检测 6.Tray分选 7.产品分选 8.Unload tray)',zhTW:'(自動運行順序概要 — 1.Load tray 2.讀取產品條碼 3.2D檢測 4.Place & Pick tray 5.3D檢測 6.Tray分選 7.產品分選 8.Unload tray)',ja:'(自動動作シーケンス概要 — 1.Load tray 2.Unitのバーコード読取 3.2D検査 4.Place & Pick tray 5.3D検査 6.Trayソーティング 7.Unitソーティング 8.Unload tray)'})),
    slN(85,{
      en:'Empty tray — Prepare the Empty Tray. Use the Elevator and Stacker to separate each Tray. The indexer moves the tray to the TSM. TSM moves Empty Tray to Reject Rail.',
      ko:'Empty tray- Empty Tray를 준비한다.- Elevator와 Stacker를 사용하여 한 장씩 분리한다.- Indexer가 트레이를 TSM으로 이동시킨다.- TSM이 Empty Tray를 Reject Rail로 이동시킨다.',
      zhCN:'Empty tray — 准备Empty Tray。使用Elevator和Stacker逐张分离。Indexer将托盘移至TSM。TSM将Empty Tray移至Reject Rail。',
      zhTW:'Empty tray — 準備Empty Tray。使用Elevator和Stacker逐張分離。Indexer將托盤移至TSM。TSM將Empty Tray移至Reject Rail。',
      ja:'Empty tray — Empty Trayを準備する。ElevatorとStackerを使用して一枚ずつ分離する。IndexerがトレイをTSMへ移動させる。TSMがEmpty TrayをReject Railへ移動させる。'
    }),
    slN(86,{
      en:'Load tray — Place the tray with the unit in the loader. Use Elevator and Stacker to separate each tray. Move the separated tray to the 2D inspection position.',
      ko:'Load tray- Unit이 담긴 Tray를 Loader에 올려놓는다.- Elevator와 Stacker를 사용하여 한 장씩 분리한다.- Indexer가 분리된 트레이를 2D 검사 위치로 이동시킨다.',
      zhCN:'Load tray — 将装有产品的托盘放入Loader。使用Elevator和Stacker逐张分离。Indexer将分离后的托盘移至2D检测位置。',
      zhTW:'Load tray — 將裝有產品的托盤放入Loader。使用Elevator和Stacker逐張分離。Indexer將分離後的托盤移至2D檢測位置。',
      ja:'Load tray — Unitが入ったTrayをLoaderに載せる。ElevatorとStackerを使用して一枚ずつ分離する。Indexerが分離されたトレイを2D検査位置へ移動させる。'
    }),
    slN(87,{
      en:'Read the barcode of unit — Move to the unit for the inspection. Read the barcode of the R.O.I area (supports both OCR barcode and Matrix barcode).',
      ko:'Read the barcode of unit- 검사할 Unit으로 이동한다.- R.O.I 영역의 Barcode를 읽는다. (OCR Barcode, Matrix Barcode 모두 지원)',
      zhCN:'Read the barcode of unit — 移动至待检测的Unit。读取R.O.I区域的条码(支持OCR条码及Matrix条码)。',
      zhTW:'Read the barcode of unit — 移動至待檢測的Unit。讀取R.O.I區域的條碼(支援OCR條碼及Matrix條碼)。',
      ja:'Read the barcode of unit — 検査対象のUnitへ移動する。R.O.I領域のバーコードを読み取る(OCRバーコード、Matrixバーコードいずれにも対応)。'
    }),
    slN(88,{
      en:'2D inspection — Inspect the bump area of the unit. If the bump area is larger than F.O.V., divide the inspection area into two or more.',
      ko:'2D inspection- Unit의 Bump Area를 검사한다.- 만약 Bump Area가 F.O.V보다 크다면 검사 영역을 2개 이상으로 나누어 검사한다.',
      zhCN:'2D inspection — 检测Unit的Bump Area。若Bump Area大于F.O.V.,则将检测区域分为2个以上进行检测。',
      zhTW:'2D inspection — 檢測Unit的Bump Area。若Bump Area大於F.O.V.,則將檢測區域分為2個以上進行檢測。',
      ja:'2D inspection — UnitのBump Areaを検査する。もしBump AreaがF.O.V.より大きい場合、検査領域を2つ以上に分割して検査する。'
    }),
    slN(89,{
      en:'Place & Pick tray (Loading) — Transferring the tray to the 3D inspection position after the 2D inspection has been completed.',
      ko:'Place & Pick tray(Loading)- 2D 검사가 끝난 Tray를 3D 검사 위치로 이송하는 동작이다.',
      zhCN:'Place & Pick tray(Loading) — 将完成2D检测的Tray移送至3D检测位置的动作。',
      zhTW:'Place & Pick tray(Loading) — 將完成2D檢測的Tray移送至3D檢測位置的動作。',
      ja:'Place & Pick tray(Loading) — 2D検査が終わったTrayを3D検査位置へ移送する動作である。'
    }),
    slN(90,{
      en:'3D inspection — Inspect the bump area of the unit. If the bump area is larger than F.O.V., divide the inspection area into two or more.',
      ko:'3D inspection- Unit의 Bump Area를 검사한다.- 만약 Bump Area가 F.O.V보다 크다면 검사 영역을 2개 이상으로 나누어 검사한다.',
      zhCN:'3D inspection — 检测Unit的Bump Area。若Bump Area大于F.O.V.,则将检测区域分为2个以上进行检测。',
      zhTW:'3D inspection — 檢測Unit的Bump Area。若Bump Area大於F.O.V.,則將檢測區域分為2個以上進行檢測。',
      ja:'3D inspection — UnitのBump Areaを検査する。もしBump AreaがF.O.V.より大きい場合、検査領域を2つ以上に分割して検査する。'
    }),
    slN(91,{
      en:'Place & Pick tray (Unloading) — The operation of transferring the 3D inspected tray to the TTM location.',
      ko:'Place & Pick tray(Unloading)- 3D 검사가 끝난 Tray를 TTM 위치로 이송하는 동작이다.',
      zhCN:'Place & Pick tray(Unloading) — 将完成3D检测的Tray移送至TTM位置的动作。',
      zhTW:'Place & Pick tray(Unloading) — 將完成3D檢測的Tray移送至TTM位置的動作。',
      ja:'Place & Pick tray(Unloading) — 3D検査が終わったTrayをTTM位置へ移送する動作である。'
    }),
    slN(92,{
      en:'Tray sorting — Move the tray to Buffer or Good rail in the order in which the inspection is completed.',
      ko:'Tray sorting- 검사를 완료한 후 트레이를 굿 또는 버퍼 레일로 이송한다.',
      zhCN:'Tray sorting — 按检测完成的顺序将托盘移送至Buffer或Good轨道。',
      zhTW:'Tray sorting — 按檢測完成的順序將托盤移送至Buffer或Good軌道。',
      ja:'Tray sorting — 検査完了の順にトレイをGoodまたはBufferレールへ移送する。'
    }),
    slN(93,{
      en:'Unit sorting — The units inspected are classified as Good and Reject.',
      ko:'Unit sorting- 검사가 끝난 Unit을 양품과 불량으로 분류한다.',
      zhCN:'Unit sorting — 将检测完成的Unit分类为良品与不良品。',
      zhTW:'Unit sorting — 將檢測完成的Unit分類為良品與不良品。',
      ja:'Unit sorting — 検査が終わったUnitを良品と不良品に分類する。'
    }),
    slN(94,{
      en:'Unload tray — Unload the classified tray.',
      ko:'Unload tray- 분류가 끝난 Tray를 배출한다.',
      zhCN:'Unload tray — 排出已分类的托盘。',
      zhTW:'Unload tray — 排出已分類的托盤。',
      ja:'Unload tray — 分類が終わったTrayを排出する。'
    })
  ]}
 ]},
{code:'2',title:{en:'Chapter 2. Operation',ko:'2장. 설비 조작 (Level 1)',zhCN:'第2章. 设备操作 (Level 1)',zhTW:'第2章. 設備操作 (Level 1)',ja:'第2章 設備操作 (Level 1)'},
 sections:[
  {code:'2.1.1',title:{en:'Electric Power On & Off Sequence',ko:'전원 투입/차단 순서',zhCN:'电源开关顺序',zhTW:'電源開關順序',ja:'電源投入/遮断順序'},slides:[
    dividerN(95),
    slN(96,{
      en:'Release Key — Failure to turn on according to the On Sequence may result in electrical component failure. Turn on the main circuit breaker installed on the equipment main panel. The Release Key is used to open the door without turning off power. (Intel-oriented main circuit breaker uses a different model, so the release key location is different.)',
      ko:'Release Key- On Sequence에 따라 켜지지 않으면 전기 구성 요소에 고장이 발생할 수 있습니다.- 장비 메인 패널에 설치된 메인 회로 차단기를 켭니다.- 해제 키는 전원을 끄지 않고 도어를 여는 데 사용됩니다.(Intel향 Main 차단기는 다른 모델을 사용하기에 Release Key 위치가 다름.)',
      zhCN:'Release Key — 若不按On Sequence开机,可能导致电气元件故障。打开设备主面板上安装的主断路器。Release Key用于在不关闭电源的情况下打开门。(Intel机型主断路器使用不同型号,因此Release Key位置不同。)',
      zhTW:'Release Key — 若不按On Sequence開機,可能導致電氣元件故障。打開設備主面板上安裝的主斷路器。Release Key用於在不關閉電源的情況下打開門。(Intel機型主斷路器使用不同型號,因此Release Key位置不同。)',
      ja:'Release Key — On Sequenceに従って電源を入れないと電気部品に故障が発生する可能性がある。設備メインパネルに設置されたメイン回路遮断機をOnにする。Release Keyは電源を切らずにドアを開けるために使用する。(Intel向けMain遮断機は異なるモデルを使用するため、Release Keyの位置が異なる。)'
    }),
    slN(97,{
      en:'Turn on all breakers inside the facility. (Main Sub Electric Panel, Main Electric Panel, ISO Sub Electric Panel — Right/Rear/Left views.)',
      ko:'설비 내부의 차단기를 모두 On 한다. (Main Sub Electric Panel, Main Electric Panel, ISO Sub Electric Panel — 우측/후면/좌측)',
      zhCN:'打开设备内部的所有断路器。(Main Sub Electric Panel、Main Electric Panel、ISO Sub Electric Panel — 右视图/后视图/左视图)',
      zhTW:'打開設備內部的所有斷路器。(Main Sub Electric Panel、Main Electric Panel、ISO Sub Electric Panel — 右視圖/後視圖/左視圖)',
      ja:'設備内部の遮断機をすべてOnにする。(Main Sub Electric Panel、Main Electric Panel、ISO Sub Electric Panel — 右側/背面/左側)'
    }),
    slN(98,{
      en:'Turn on the UPS. 1) Press the power button and select the power-on option. 2) When the \'Power\' button is pressed for 2~3 seconds, the power is turned on or off. (UPS installation status and specifications vary from customer to customer.)',
      ko:'UPS를 켭니다. ① 전원 버튼을 누르고 전원 켜기 옵션을 선택합니다. ② \'전원\' 버튼을 2~3초간 누르면 전원이 켜지거나 꺼집니다. (UPS 설치 여부 및 사양은 고객사마다 다릅니다.)',
      zhCN:'开启UPS。①按下电源按钮并选择开机选项。②按住"电源"按钮2~3秒,电源即会开启或关闭。(UPS的安装情况及规格因客户而异。)',
      zhTW:'開啟UPS。①按下電源按鈕並選擇開機選項。②按住「電源」按鈕2~3秒,電源即會開啟或關閉。(UPS的安裝情況及規格因客戶而異。)',
      ja:'UPSの電源を入れる。①電源ボタンを押し、電源投入オプションを選択する。②「電源」ボタンを2~3秒間押すと電源がOn/Offされる。(UPSの設置有無及び仕様は顧客ごとに異なる。)'
    }),
    slN(99,{
      en:'Turn on the power strip. There is no power strip for NBGA facilities for Intel.',
      ko:'파워 스트립의 전원을 On한다. Intel향 설비에는 파워 스트립이 없다.',
      zhCN:'开启电源排插。Intel机型的NBGA设备无电源排插。',
      zhTW:'開啟電源排插。Intel機型的NBGA設備無電源排插。',
      ja:'パワーストリップの電源をOnにする。Intel向け設備にはパワーストリップがない。'
    }),
    slN(100,{
      en:'Turn on the power of the Operation Panel.',
      ko:'OP Panel의 전원을 On한다.',
      zhCN:'开启OP Panel的电源。',
      zhTW:'開啟OP Panel的電源。',
      ja:'OP Panelの電源をOnにする。'
    })
  ]},
  {code:'2.1.2',title:{en:'Controller, PC, Camera Power',ko:'컨트롤러·PC·카메라 전원',zhCN:'控制器、PC、相机电源',zhTW:'控制器、PC、相機電源',ja:'コントローラー・PC・カメラ電源'},slides:[
    dividerN(101),
    slN(102,{
      en:'PC Power — Turn on the HOST, 2D, 3D#1, 3D#2 PC.',
      ko:'PC Power- HOST, 2D, 3D#1, 3D#2 PC의 전원을 On한다.',
      zhCN:'PC Power — 开启HOST、2D、3D#1、3D#2 PC的电源。',
      zhTW:'PC Power — 開啟HOST、2D、3D#1、3D#2 PC的電源。',
      ja:'PC Power — HOST、2D、3D#1、3D#2 PCの電源をOnにする。'
    }),
    slN(103,{
      en:'LED Controller Power — Turn on the 2D, 3D#1, 3D#2 LED Controller.',
      ko:'LED Controller Power- 2D, 3D#1, 3D#2의 LED Controller 전원을 On한다.',
      zhCN:'LED Controller Power — 开启2D、3D#1、3D#2的LED Controller电源。',
      zhTW:'LED Controller Power — 開啟2D、3D#1、3D#2的LED Controller電源。',
      ja:'LED Controller Power — 2D、3D#1、3D#2のLED Controller電源をOnにする。'
    }),
    slN(104,{
      en:'PZT Controller Power — Turn on the 3D#1, 3D#2 PZT Controller. (PI PZT Controller or Nanofaktur PZT Controller depending on optics type.)',
      ko:'PZT Controller Power- 3D#1, 3D#2의 PZT Controller 전원을 On한다. (광학계 종류에 따라 PI PZT Controller 또는 Nanofaktur PZT Controller)',
      zhCN:'PZT Controller Power — 开启3D#1、3D#2的PZT Controller电源。(依光学系统种类为PI PZT Controller或Nanofaktur PZT Controller)',
      zhTW:'PZT Controller Power — 開啟3D#1、3D#2的PZT Controller電源。(依光學系統種類為PI PZT Controller或Nanofaktur PZT Controller)',
      ja:'PZT Controller Power — 3D#1、3D#2のPZT Controller電源をOnにする。(光学系の種類によりPI PZT ControllerまたはNanofaktur PZT Controller)'
    }),
    slN(105,{
      en:'AF Controller Power — Turn on the 3D#1, 3D#2 AF Controller. (Old Version AF Controller or New Version AF Controller.)',
      ko:'AF Controller Power- 3D#1, 3D#2의 AF Controller 전원을 On한다. (Old Version AF Controller 또는 New Version AF Controller)',
      zhCN:'AF Controller Power — 开启3D#1、3D#2的AF Controller电源。(旧型AF Controller或新型AF Controller)',
      zhTW:'AF Controller Power — 開啟3D#1、3D#2的AF Controller電源。(舊型AF Controller或新型AF Controller)',
      ja:'AF Controller Power — 3D#1、3D#2のAF Controller電源をOnにする。(旧バージョンAF Controllerまたは新バージョンAF Controller)'
    })
  ]},
  {code:'2.1.3',title:{en:'Turn Off Sequence',ko:'전원 차단 순서',zhCN:'关机顺序',zhTW:'關機順序',ja:'電源オフ順序'},slides:[
    dividerN(106),
    slN(107,{
      en:'Turn Off Sequence — Controller(AF, LED, PZT, PC) Turn Off, then Operation Panel Power Off, then Power strip Turn Off, then UPS Turn Off, then CP Turn Off, then Main Panel Turn Off. When turning off the equipment, proceed in the opposite order from when turning on. Failure to turn off in order may cause electrical components to fail.',
      ko:'전원 차단 순서 — Controller(AF, LED, PZT, PC) Turn Off → Operation Panel Power Off → Power strip Turn Off → UPS Turn Off → CP Turn Off → Main Panel Turn Off. 장비를 끌 때는 켤 때와 반대의 순서로 진행합니다. 순서대로 끄지 않으면 전기 구성 요소에 고장이 발생할 수 있습니다.',
      zhCN:'关机顺序 — Controller(AF、LED、PZT、PC)关闭 → Operation Panel电源关闭 → Power strip关闭 → UPS关闭 → CP关闭 → Main Panel关闭。关闭设备时,应按开机的相反顺序进行。若不按顺序关闭,可能导致电气元件故障。',
      zhTW:'關機順序 — Controller(AF、LED、PZT、PC)關閉 → Operation Panel電源關閉 → Power strip關閉 → UPS關閉 → CP關閉 → Main Panel關閉。關閉設備時,應按開機的相反順序進行。若不按順序關閉,可能導致電氣元件故障。',
      ja:'電源オフ順序 — Controller(AF、LED、PZT、PC)Turn Off → Operation Panel Power Off → Power strip Turn Off → UPS Turn Off → CP Turn Off → Main Panel Turn Off。設備の電源を切る際は、電源を入れる時と逆の順序で進める。順序通りに切らないと電気部品に故障が発生する可能性がある。'
    })
  ]},
  {code:'2.2.1',title:{en:'Host & Vision Main Software',ko:'Host 및 Vision 메인 소프트웨어',zhCN:'Host 及 Vision 主软件',zhTW:'Host 及 Vision 主軟體',ja:'Host及びVisionメインソフトウェア'},slides:[
    dividerN(108),
    slN(109,{
      en:'You can switch the screen by entering Ctrl+Ctrl+1~4 commands (1: HOST, 2: 3D Vision 1, 3: 3D Vision 2, 4: 2D Vision). Switch to HOST and run the BAOI program.',
      ko:'Ctrl+Ctrl+1~4 커맨드를 입력하여 화면을 전환할 수 있다. (1: HOST, 2: 3D Vision 1, 3: 3D Vision 2, 4: 2D Vision) HOST로 전환하고 BAOI 프로그램을 실행한다.',
      zhCN:'可通过输入Ctrl+Ctrl+1~4命令切换画面。(1:HOST,2:3D Vision 1,3:3D Vision 2,4:2D Vision)切换至HOST并运行BAOI程序。',
      zhTW:'可透過輸入Ctrl+Ctrl+1~4指令切換畫面。(1:HOST,2:3D Vision 1,3:3D Vision 2,4:2D Vision)切換至HOST並執行BAOI程式。',
      ja:'Ctrl+Ctrl+1~4コマンドを入力して画面を切り替えられる。(1:HOST、2:3D Vision 1、3:3D Vision 2、4:2D Vision)HOSTに切り替えBAOIプログラムを実行する。'
    }),
    slN(110,{
      en:'You can switch the screen by entering Ctrl+Ctrl+1~4 commands (1: HOST, 2: 3D Vision 1, 3: 3D Vision 2, 4: 2D Vision). Switch to 3D Vision 1(Vision2, 2D Vision) and run the VisionTray program.',
      ko:'Ctrl+Ctrl+1~4 커맨드를 입력하여 화면을 전환할 수 있다. (1: HOST, 2: 3D Vision 1, 3: 3D Vision 2, 4: 2D Vision) 3D Vision 1(Vision2, 2D Vision)로 전환하고 VisionTray 프로그램을 실행한다.',
      zhCN:'可通过输入Ctrl+Ctrl+1~4命令切换画面。(1:HOST,2:3D Vision 1,3:3D Vision 2,4:2D Vision)切换至3D Vision 1(Vision2、2D Vision)并运行VisionTray程序。',
      zhTW:'可透過輸入Ctrl+Ctrl+1~4指令切換畫面。(1:HOST,2:3D Vision 1,3:3D Vision 2,4:2D Vision)切換至3D Vision 1(Vision2、2D Vision)並執行VisionTray程式。',
      ja:'Ctrl+Ctrl+1~4コマンドを入力して画面を切り替えられる。(1:HOST、2:3D Vision 1、3:3D Vision 2、4:2D Vision)3D Vision 1(Vision2、2D Vision)に切り替えVisionTrayプログラムを実行する。'
    })
  ]},
  {code:'2.2.2',title:{en:'Host & Vision Check Items',ko:'Host 및 Vision 점검 항목',zhCN:'Host 及 Vision 检查项目',zhTW:'Host 及 Vision 檢查項目',ja:'Host及びVisionチェック項目'},slides:[
    dividerN(111),
    slN(112,{
      en:'Check the system status at the top of the HOST program. The inspection can proceed only when the system status is all ready (displayed in green).',
      ko:'HOST 프로그램 상단의 시스템 상태창을 확인한다. 시스템 상태가 모두 녹색으로 표시되어야 검사를 진행할 수 있다.',
      zhCN:'确认HOST程序上方的系统状态窗口。仅当系统状态全部显示为绿色时才能进行检测。',
      zhTW:'確認HOST程式上方的系統狀態窗口。僅當系統狀態全部顯示為綠色時才能進行檢測。',
      ja:'HOSTプログラム上部のシステム状態ウィンドウを確認する。システム状態がすべて緑色で表示されて初めて検査を進めることができる。'
    }),
    slN(113,{
      en:'If the system is not ready, check the following: Handler — proceed with initialization. Vision — click the Connect Vision button; if it does not connect, check 1) Vision PC IP, 2) Host P/G Ver <-> Vision P/G Ver match, 3) Vision P/G status. AF1, AF2 — check LAN connection status with AF. Motor — make sure the OP panel is powered on, or verify that the EMS switch is in a normal state. Interlock — make sure all doors in the facility are closed and click the Interlock button to lock the door.',
      ko:'만약 시스템 상태가 준비되지 않았다면 아래의 내용을 확인한다. - Handler : Initialize를 진행한다. - Vision : Connect Vision Button을 클릭한다. 만약 연결되지 않는다면 1) Vision PC IP를 체크한다. 2) Host P/G version과 Vision P/G version이 알맞게 설치되었는지 확인한다. 3) Vision P/G 실행 상태를 확인한다. - AF1, AF2 : AF Controller의 전원이 켜져 있는지 확인하고 Disconnect 후 다시 연결한다. - Motor : OP Panel의 전원이 On되어 있는지 확인한다. 또는 EMS 스위치가 정상 상태인지 확인한다. - Interlock : 설비의 모든 도어가 닫혀 있는지 확인하고 Interlock 버튼을 클릭하여 도어를 잠근다.',
      zhCN:'若系统状态未就绪,请确认以下内容。- Handler:进行Initialize。- Vision:点击Connect Vision按钮。若无法连接,请1)检查Vision PC IP;2)确认Host P/G版本与Vision P/G版本是否匹配;3)确认Vision P/G运行状态。- AF1、AF2:确认AF Controller电源是否开启,断开后重新连接。- Motor:确认OP Panel电源是否为On,或确认EMS开关是否处于正常状态。- Interlock:确认设备所有门是否关闭,并点击Interlock按钮锁门。',
      zhTW:'若系統狀態未就緒,請確認以下內容。- Handler:進行Initialize。- Vision:點擊Connect Vision按鈕。若無法連接,請1)檢查Vision PC IP;2)確認Host P/G版本與Vision P/G版本是否匹配;3)確認Vision P/G運行狀態。- AF1、AF2:確認AF Controller電源是否開啟,斷開後重新連接。- Motor:確認OP Panel電源是否為On,或確認EMS開關是否處於正常狀態。- Interlock:確認設備所有門是否關閉,並點擊Interlock按鈕鎖門。',
      ja:'システム状態が準備できていない場合は以下を確認する。- Handler:Initializeを行う。- Vision:Connect Visionボタンをクリックする。接続できない場合は1)Vision PCのIPを確認する。2)Host P/GバージョンとVision P/Gバージョンが正しくインストールされているか確認する。3)Vision P/Gの実行状態を確認する。- AF1、AF2:AF Controllerの電源が入っているか確認し、Disconnect後に再接続する。- Motor:OP Panelの電源がOnになっているか確認する。またはEMSスイッチが正常状態か確認する。- Interlock:設備のすべてのドアが閉じているか確認し、Interlockボタンをクリックしてドアをロックする。'
    })
  ]},
  {code:'2.2.3',title:{en:'Host Operation UI',ko:'Host 운영 화면(UI)',zhCN:'Host 操作界面(UI)',zhTW:'Host 操作介面(UI)',ja:'Host操作画面(UI)'},slides:[
    dividerN(114),
    slN(115,{
      en:'Host main program window areas: Log In & Save, Run Menu, System State, Lot Information, Inspection State, Sorting Information & Door status, Inspection Yield, Log.',
      ko:'Host 메인 프로그램 화면 구성: Log In & save, Run Menu, System State, Lot Information, Inspection State, Sorting Information & Door status, Inspection Yield, Log',
      zhCN:'Host主程序画面构成:Log In & Save、Run Menu、System State、Lot Information、Inspection State、Sorting Information & Door status、Inspection Yield、Log。',
      zhTW:'Host主程式畫面構成:Log In & Save、Run Menu、System State、Lot Information、Inspection State、Sorting Information & Door status、Inspection Yield、Log。',
      ja:'Hostメインプログラム画面構成:Log In & Save、Run Menu、System State、Lot Information、Inspection State、Sorting Information & Door status、Inspection Yield、Log。'
    }),
    slN(116,{
      en:'① Log In: Device access right setting. ② Job Save: Save the current job. ③ Process: Check the current status of equipment. ④ Save Log: Save the current status of the device. ⑤ Lot Start: Create information input window for product inspection. ⑥ Lot Cancel: Cancel all operation of the lot in operation. ⑦ Start: Restart operation from stop. ⑧ Stop: Stop the running equipment. ⑨ Job Open: Select the saved Recipe. ⑩ LTS: LTS check button. ⑪ Tray LTS: Button to check Tray LTS. ⑫ Picker Change Pos: Move Picker Change Pos. ⑬ Empty Handler: Automatically removes the tray inside the equipment. ⑭ Init Handler: Equipment initialization button.',
      ko:'① 로그인 : 기기 접근 권한 설정 ② Job Save : 현재 작업 저장 ③ 프로세스: 장비의 현재 상태 확인 ④ Save Log : 기기의 현재 상태 저장 ⑤ Lot Start : 상품검사를 위한 정보입력창을 만듭니다 ⑥ Lot Cancel : 운영중인 Lot의 모든 운영을 취소합니다 ⑦ Start : 정지상태에서 다시 시작 ⑧ Stop : 작동 중인 장비를 중지합니다. ⑨ Job Open : 저장된 Recipe를 선택합니다 ⑩ LTS : LTS 확인 버튼 ⑪ 트레이 LTS : 트레이 LTS 확인 버튼 ⑫ 피커 변경 위치 : 이동 피커 변경 위치 ⑬ 빈 핸들러: 장비 내부의 트레이를 자동으로 제거합니다. ⑭ Init Handler : 장비 초기화 버튼',
      zhCN:'①Log In:设备访问权限设置。②Job Save:保存当前作业。③Process:确认设备当前状态。④Save Log:保存设备当前状态。⑤Lot Start:创建产品检测信息输入窗口。⑥Lot Cancel:取消正在运行的Lot的所有操作。⑦Start:从停止状态重新开始。⑧Stop:停止运行中的设备。⑨Job Open:选择已保存的Recipe。⑩LTS:LTS确认按钮。⑪Tray LTS:确认Tray LTS的按钮。⑫Picker Change Pos:移动Picker变更位置。⑬Empty Handler:自动移除设备内部的托盘。⑭Init Handler:设备初始化按钮。',
      zhTW:'①Log In:設備存取權限設定。②Job Save:儲存目前作業。③Process:確認設備目前狀態。④Save Log:儲存設備目前狀態。⑤Lot Start:建立產品檢測資訊輸入視窗。⑥Lot Cancel:取消運行中Lot的所有操作。⑦Start:從停止狀態重新開始。⑧Stop:停止運行中的設備。⑨Job Open:選擇已儲存的Recipe。⑩LTS:LTS確認按鈕。⑪Tray LTS:確認Tray LTS的按鈕。⑫Picker Change Pos:移動Picker變更位置。⑬Empty Handler:自動移除設備內部的托盤。⑭Init Handler:設備初始化按鈕。',
      ja:'①Log In:機器アクセス権限設定 ②Job Save:現在の作業を保存 ③Process:設備の現在の状態を確認 ④Save Log:機器の現在の状態を保存 ⑤Lot Start:製品検査のための情報入力ウィンドウを作成 ⑥Lot Cancel:運用中のLotのすべての運用を取消 ⑦Start:停止状態から再開 ⑧Stop:稼働中の設備を停止 ⑨Job Open:保存されたRecipeを選択 ⑩LTS:LTS確認ボタン ⑪Tray LTS:Tray LTS確認ボタン ⑫Picker Change Pos:Picker変更位置へ移動 ⑬Empty Handler:設備内部のトレイを自動で除去 ⑭Init Handler:設備初期化ボタン'
    }),
    slN(117,{
      en:'① Job Name: Shows the selected Job Name. ② Lot ID: Shows the currently applied Lot ID. ③ Operator ID: Shows the operator ID. ④ Cycle Time: Shows the inspection time of 3D Vision 1 Tray. ⑤ Start Time: Shows the start time of equipment inspection. ⑥ Running Time: Shows the equipment running time. ⑦ Yield: Shows the ratio of good products out of total production. ⑧ UPH: Shows the output of units per hour. ⑨ Total: Shows the total number of units. ⑩ Pass: Shows the number of units passed. ⑪ Fail: Shows the number of failed units.',
      ko:'① 작업 이름: 선택한 작업 이름을 표시합니다. ② Lot ID: 현재 적용된 Lot ID를 표시합니다. ③ 연산자 ID: 연산자 ID를 표시합니다. ④ 사이클 시간: 3D 비전 1 트레이의 검사 시간을 표시합니다. ⑤ 시작 시간: 장비 검사 시작 시간을 표시합니다. ⑥ 실행 시간: 장비 실행 시간을 표시합니다. ⑦ 수율: 전체 생산 중 양품의 비율을 표시합니다. ⑧ UPH: 시간당 유닛 생산량을 표시합니다. ⑨ Total: 총 유닛 수를 표시합니다. ⑩ Pass: 합격한 유닛 수를 표시합니다. ⑪ Fail: 불합격한 유닛 수를 표시합니다.',
      zhCN:'①Job Name:显示所选作业名称。②Lot ID:显示当前应用的Lot ID。③Operator ID:显示操作员ID。④Cycle Time:显示3D Vision 1托盘的检测时间。⑤Start Time:显示设备检测开始时间。⑥Running Time:显示设备运行时间。⑦Yield:显示总产量中良品的比例。⑧UPH:显示每小时产出的单位数。⑨Total:显示总单位数。⑩Pass:显示合格单位数。⑪Fail:显示不合格单位数。',
      zhTW:'①Job Name:顯示所選作業名稱。②Lot ID:顯示目前套用的Lot ID。③Operator ID:顯示操作員ID。④Cycle Time:顯示3D Vision 1托盤的檢測時間。⑤Start Time:顯示設備檢測開始時間。⑥Running Time:顯示設備運行時間。⑦Yield:顯示總產量中良品的比例。⑧UPH:顯示每小時產出的單位數。⑨Total:顯示總單位數。⑩Pass:顯示合格單位數。⑪Fail:顯示不合格單位數。',
      ja:'①Job Name:選択したJob Nameを表示 ②Lot ID:現在適用されているLot IDを表示 ③Operator ID:オペレーターIDを表示 ④Cycle Time:3D Vision 1トレイの検査時間を表示 ⑤Start Time:設備検査の開始時刻を表示 ⑥Running Time:設備の稼働時間を表示 ⑦Yield:全体生産に対する良品の比率を表示 ⑧UPH:1時間あたりのユニット生産数を表示 ⑨Total:総ユニット数を表示 ⑩Pass:合格ユニット数を表示 ⑪Fail:不合格ユニット数を表示'
    }),
    slN(118,{
      en:'① Tray: Shows the sorting progress in real time. ② Door Status: Shows the current state of the door. ③ Log: Shows equipment log details.',
      ko:'① 트레이: 실시간으로 정렬 진행 상황을 보여줍니다. ② 도어 상태: 도어의 현재 상태를 표시합니다. ③ Log: 장비 로그 세부 정보를 표시합니다.',
      zhCN:'①Tray:实时显示分选进度。②Door Status:显示门的当前状态。③Log:显示设备日志详情。',
      zhTW:'①Tray:即時顯示分選進度。②Door Status:顯示門的目前狀態。③Log:顯示設備日誌詳情。',
      ja:'①Tray:ソーティングの進行状況をリアルタイムで表示 ②Door Status:ドアの現在の状態を表示 ③Log:設備ログの詳細を表示'
    }),
    slN(119,{
      en:'① Change the PC screen of the vision. ② Check the vision program connection status. ③ Monitoring the inspection image of the corresponding vision. ④ Pocket inspection result of the tray. ⑤ Vision Summary Yield: Shows the results of 3D Vision 1, 3D Vision 2, and 2D Vision in an integrated way. ⑥ 3D Vision 1 Yield: Shows the result of the corresponding Vision. ⑦ 3D Vision 2 Yield: Shows the result of the corresponding vision. ⑧ 2D Vision Yield: Shows the result of the corresponding vision.',
      ko:'① 비전의 PC 화면 변경 ② 비전 프로그램 연결 상태를 점검하십시오 ③ 해당 비전의 검사 영상 모니터링 ④ 트레이의 포켓 검사 결과 ⑤ Vision Summary Yield : 3D Vision 1, 3D Vision 2, 2D Vision의 결과를 통합적으로 보여줍니다. ⑥ 3D Vision 1 Yield : 해당 Vision의 결과를 보여줍니다. ⑦ 3D Vision 2 Yield : 해당 비전의 결과를 표시합니다. ⑧ 2D Vision Yield : 해당 비전의 결과를 표시합니다.',
      zhCN:'①切换Vision的PC画面。②检查Vision程序连接状态。③监控相应Vision的检测影像。④托盘的Pocket检测结果。⑤Vision Summary Yield:综合显示3D Vision 1、3D Vision 2、2D Vision的结果。⑥3D Vision 1 Yield:显示对应Vision的结果。⑦3D Vision 2 Yield:显示对应Vision的结果。⑧2D Vision Yield:显示对应Vision的结果。',
      zhTW:'①切換Vision的PC畫面。②檢查Vision程式連接狀態。③監控相應Vision的檢測影像。④托盤的Pocket檢測結果。⑤Vision Summary Yield:綜合顯示3D Vision 1、3D Vision 2、2D Vision的結果。⑥3D Vision 1 Yield:顯示對應Vision的結果。⑦3D Vision 2 Yield:顯示對應Vision的結果。⑧2D Vision Yield:顯示對應Vision的結果。',
      ja:'①VisionのPC画面を切り替える ②Visionプログラムの接続状態を確認する ③該当Visionの検査映像をモニタリングする ④トレイのPocket検査結果 ⑤Vision Summary Yield:3D Vision 1、3D Vision 2、2D Visionの結果を統合的に表示 ⑥3D Vision 1 Yield:該当Visionの結果を表示 ⑦3D Vision 2 Yield:該当Visionの結果を表示 ⑧2D Vision Yield:該当Visionの結果を表示'
    })
  ]},
  {code:'2.2.4',title:{en:'Handler Initialize',ko:'핸들러 초기화',zhCN:'Handler 初始化',zhTW:'Handler 初始化',ja:'ハンドラー初期化'},slides:[
    dividerN(120),
    slN(121,{
      en:'Click [Init Handler], click [OK] to initialize the equipment.',
      ko:'[Init Handler]를 클릭하고, [OK]를 클릭하여 설비를 초기화한다.',
      zhCN:'点击[Init Handler],再点击[OK]以初始化设备。',
      zhTW:'點擊[Init Handler],再點擊[OK]以初始化設備。',
      ja:'[Init Handler]をクリックし、[OK]をクリックして設備を初期化する。'
    }),
    slN(122,{
      en:'This is the initialization complete screen.',
      ko:'설비 초기화 완료 후 Handler의 초기화 상태를 확인할 수 있다.',
      zhCN:'这是初始化完成画面。设备初始化完成后可确认Handler的初始化状态。',
      zhTW:'這是初始化完成畫面。設備初始化完成後可確認Handler的初始化狀態。',
      ja:'これは初期化完了画面である。設備初期化完了後、Handlerの初期化状態を確認できる。'
    }),
    slN(123,{
      en:'Make sure the tray is secured to the TTM and TSM before proceeding — there is a possibility that the tray will fall during TTM and TSM unclamp. This is the alarm that occurs when TSM or TTM Picker Clamp is engaged; click Yes to unclamp.',
      ko:'예를 클릭하기 전에 Tray가 TTM 및 TSM에 고정되어 있는지 확인한다. TTM 및 TSM Unclamp 시 Tray가 떨어질 가능성이 있기 때문이다. TSM 또는 TTM Picker가 Clamp 시 발생하는 알람이다. 예를 클릭하여 Clamp를 해제한다.',
      zhCN:'点击是之前,请确认Tray是否固定在TTM及TSM上,因为TTM及TSM Unclamp时Tray有掉落的可能性。这是TSM或TTM Picker处于Clamp状态时发生的警报。点击Yes以解除Clamp。',
      zhTW:'點擊是之前,請確認Tray是否固定在TTM及TSM上,因為TTM及TSM Unclamp時Tray有掉落的可能性。這是TSM或TTM Picker處於Clamp狀態時發生的警報。點擊Yes以解除Clamp。',
      ja:'Yesをクリックする前にTrayがTTM及びTSMに固定されているか確認する。TTM及びTSM Unclamp時にTrayが落下する可能性があるためである。これはTSMまたはTTM PickerがClamp状態のときに発生するアラームである。Yesをクリックしてclampを解除する。'
    })
  ]},
  {code:'2.3.1',title:{en:'Run Inspection',ko:'검사 실행',zhCN:'运行检测',zhTW:'執行檢測',ja:'検査実行'},slides:[
    dividerN(124),
    slN(125,{
      en:'Click [Log In]. Select the access level as [operator], fill in the User ID and Password, and click OK.',
      ko:'[Log In]을 클릭한다. [operator]로 접근 단계를 선택하고 사용자 ID와 비밀번호를 입력한 후 [확인]을 누릅니다.',
      zhCN:'点击[Log In]。选择[operator]作为访问级别,输入User ID和Password后点击[OK]。',
      zhTW:'點擊[Log In]。選擇[operator]作為存取層級,輸入User ID和Password後點擊[OK]。',
      ja:'[Log In]をクリックする。アクセスレベルを[operator]で選択し、User IDとPasswordを入力後[OK]をクリックする。'
    }),
    slN(126,{
      en:'Click [Init Handler], click [OK] to initialize the equipment.',
      ko:'[Init Handler]를 클릭하고, [OK]를 클릭하여 설비를 초기화한다.',
      zhCN:'点击[Init Handler],再点击[OK]以初始化设备。',
      zhTW:'點擊[Init Handler],再點擊[OK]以初始化設備。',
      ja:'[Init Handler]をクリックし、[OK]をクリックして設備を初期化する。'
    }),
    slN(127,{
      en:'After equipment initialization is complete, you can check the initialization status of the handler. Close all doors on the equipment and click [Inter Lock] to make sure the doors are locked.',
      ko:'설비 초기화 완료 후 Handler의 초기화 상태를 확인할 수 있다. 설비의 Door를 모두 닫고 [Inter Lock]을 클릭하면 Door가 잠기는 것을 확인할 수 있다.',
      zhCN:'设备初始化完成后,可确认Handler的初始化状态。关闭设备所有门后点击[Inter Lock],即可确认门已上锁。',
      zhTW:'設備初始化完成後,可確認Handler的初始化狀態。關閉設備所有門後點擊[Inter Lock],即可確認門已上鎖。',
      ja:'設備初期化完了後、Handlerの初期化状態を確認できる。設備のドアをすべて閉め[Inter Lock]をクリックすると、ドアがロックされることを確認できる。'
    }),
    slN(128,{
      en:'Place the Unit Tray to be inspected on the first Loader Stacker on the left as shown in the image above. Place the Empty Tray on top of the second Empty Stacker from the left as shown in the image above. Due to the handler sequence, you cannot click the \'Lot Start\' button when there is nothing loaded — the button is able to be clicked only after putting trays onto the Loader/Empty Stacker. It is only possible to proceed when putting at least 6 Empty trays onto the Empty Stacker.',
      ko:'검사할 Unit Tray를 위 이미지와 같이 좌측 첫번째 Loader Stacker 위에 올려준다. Empty Tray를 위 이미지와 같이 좌측 두번째 Empty Stacker 위에 올려준다. Handler 시퀀스 특성상 아무것도 없는 상태에서 Lot Start 버튼을 클릭 할 수 없다. 반드시 제품을 Loader/Empty Stacker 위에 Tray를 투입 후 Lot Start 버튼 클릭이 가능하다. Empty Stacker에 Empty Tray가 최소 6개 이상 투입되어야 진행이 가능하다.',
      zhCN:'如上图所示,将待检测的Unit Tray放置在左侧第一个Loader Stacker上。如上图所示,将Empty Tray放置在左侧第二个Empty Stacker上方。由于Handler流程特性,在没有投入任何托盘的状态下无法点击Lot Start按钮,必须先将Tray投入Loader/Empty Stacker后才能点击Lot Start按钮。Empty Stacker中至少需投入6个以上的Empty Tray才能进行。',
      zhTW:'如上圖所示,將待檢測的Unit Tray放置在左側第一個Loader Stacker上。如上圖所示,將Empty Tray放置在左側第二個Empty Stacker上方。由於Handler流程特性,在沒有投入任何托盤的狀態下無法點擊Lot Start按鈕,必須先將Tray投入Loader/Empty Stacker後才能點擊Lot Start按鈕。Empty Stacker中至少需投入6個以上的Empty Tray才能進行。',
      ja:'上の画像のように、検査するUnit Trayを左側1番目のLoader Stacker上に載せる。上の画像のように、Empty Trayを左側2番目のEmpty Stacker上に載せる。Handlerシーケンスの特性上、何も投入されていない状態ではLot Startボタンをクリックできない。必ずLoader/Empty StackerにTrayを投入した後にLot Startボタンのクリックが可能になる。Empty StackerにEmpty Trayが最低6個以上投入されて初めて進行が可能である。'
    }),
    slN(129,{
      en:'Click the \'Job Open\' button, select the Job File, and click the \'OK\' button.',
      ko:'\'Job Open\' 버튼을 클릭한 후, Job File을 선택하고 \'OK\' 버튼을 클릭합니다.',
      zhCN:'点击"Job Open"按钮后,选择Job File并点击"OK"按钮。',
      zhTW:'點擊「Job Open」按鈕後,選擇Job File並點擊「OK」按鈕。',
      ja:'「Job Open」ボタンをクリックした後、Job Fileを選択し「OK」ボタンをクリックする。'
    }),
    slN(130,{
      en:'After clicking \'Lot Start\', input the Lot ID. All Tray Are Loaded: inspect the units inserted into the Loader and end the Lot. If not all tray are loaded: you can insert an additional tray into the Loader or select Lot End.',
      ko:'\'Lot Start\'를 클릭한 후 Lot ID를 입력합니다. All Tray Are Loaded : Loader에 투입된 Unit을 검사한 후 Lot End합니다. All Tray Are Loaded 미선택 시 : Loader에 Tray를 추가 삽입 또는 Lot End를 선택할 수 있습니다.',
      zhCN:'点击"Lot Start"后输入Lot ID。All Tray Are Loaded:检测投入Loader的Unit后结束Lot。未选择All Tray Are Loaded时:可向Loader追加投入Tray,或选择Lot End。',
      zhTW:'點擊「Lot Start」後輸入Lot ID。All Tray Are Loaded:檢測投入Loader的Unit後結束Lot。未選擇All Tray Are Loaded時:可向Loader追加投入Tray,或選擇Lot End。',
      ja:'「Lot Start」をクリックした後Lot IDを入力する。All Tray Are Loaded:Loaderに投入されたUnitを検査した後Lot Endする。All Tray Are Loadedを選択しない場合:LoaderにTrayを追加投入するか、Lot Endを選択できる。'
    }),
    slN(131,{
      en:'When the Tray sensing sensor of the Loader Stacker is on, the above pop-up window will appear. [Yes]: end the Lot without inserting any more trays. [No]: insert more trays onto the Loader Stacker and then click the \'No\' button to keep the Lot running.',
      ko:'Loader Stacker의 트레이 센서가 감지되면 위의 팝업 창이 나타납니다. [Yes] : Tray를 더 이상 투입하지 않고 Lot End합니다. [No] : Loader Stacker에 트레이를 더 투입한 후 Lot을 유지하기 위해 \'No\' 버튼을 클릭합니다.',
      zhCN:'当Loader Stacker的托盘感应传感器检测到时,会出现上述弹出窗口。[Yes]:不再投入Tray,结束Lot。[No]:向Loader Stacker追加投入托盘后,点击"No"按钮以维持Lot运行。',
      zhTW:'當Loader Stacker的托盤感應感測器偵測到時,會出現上述彈出視窗。[Yes]:不再投入Tray,結束Lot。[No]:向Loader Stacker追加投入托盤後,點擊「No」按鈕以維持Lot運行。',
      ja:'Loader Stackerのトレイ感知センサーが検知すると、上のポップアップウィンドウが表示される。[Yes]:これ以上Trayを投入せずLot Endする。[No]:Loader Stackerにトレイを追加投入した後、Lotを維持するために「No」ボタンをクリックする。'
    }),
    slN(132,{
      en:'Click the \'Lot Cancel\' button above in a situation where you must terminate the Lot. If you really want to quit, click \'Yes\' in the pop-up window to quit.',
      ko:'Lot을 종료해야 하는 상황에서는 위의 \'Lot Cancel\' 버튼을 클릭합니다. 종료하려면 팝업 창에서 \'Yes\'를 클릭하여 종료합니다.',
      zhCN:'需要终止Lot的情况下,点击上方的"Lot Cancel"按钮。若确实要终止,请在弹出窗口中点击"Yes"以结束。',
      zhTW:'需要終止Lot的情況下,點擊上方的「Lot Cancel」按鈕。若確實要終止,請在彈出視窗中點擊「Yes」以結束。',
      ja:'Lotを終了しなければならない状況では上の「Lot Cancel」ボタンをクリックする。本当に終了する場合はポップアップウィンドウで「Yes」をクリックして終了する。'
    }),
    slN(133,{
      en:'Empty Handler — Ability to automatically remove trays existing in the equipment. UnClamp — Used when removing the tray of a module using the unclamp function; \'Tray Sorter\' and \'Tray Transfer\' are applicable. The green-marked module has a tray.',
      ko:'Empty Handler- 장비에 안에 있는 Tray를 자동으로 제거하는 기능. Unclamp- Unclamp 기능을 사용하여 모듈의 트레이를 제거할 때 사용합니다. - \'Tray Sorter\' 및 \'Tray Transfer\'이 해당됩니다. 녹색으로 표시된 모듈에는 Tray가 있습니다.',
      zhCN:'Empty Handler — 自动移除设备内部存在的托盘的功能。UnClamp — 使用Unclamp功能移除模块托盘时使用;适用于"Tray Sorter"及"Tray Transfer"。绿色标记的模块表示有托盘。',
      zhTW:'Empty Handler — 自動移除設備內部存在的托盤的功能。UnClamp — 使用Unclamp功能移除模組托盤時使用;適用於「Tray Sorter」及「Tray Transfer」。綠色標記的模組表示有托盤。',
      ja:'Empty Handler — 設備内部にあるTrayを自動的に除去する機能。UnClamp — Unclamp機能を使用してモジュールのトレイを除去する際に使用する。「Tray Sorter」及び「Tray Transfer」が該当する。緑色で表示されたモジュールにはTrayがある。'
    })
  ]}
 ]}
];

/* ── 섹션별 이해도 확인 퀴즈 (객관식, 2문항) ── */
var PRELEARN_QUIZ_NBGA={
'1.1.1':[
  {q:{en:'What type of equipment is iSIS-NBGA?',ko:'iSIS-NBGA는 어떤 종류의 설비입니까?',zhCN:'iSIS-NBGA是哪种设备?',zhTW:'iSIS-NBGA是哪種設備?',ja:'iSIS-NBGAはどのような設備ですか?'},
   choices:[{en:'Bump-AOI equipment',ko:'Bump-AOI 설비',zhCN:'Bump-AOI设备',zhTW:'Bump-AOI設備',ja:'Bump-AOI設備'},{en:'Wire-bonding equipment',ko:'와이어본딩 설비',zhCN:'打线设备',zhTW:'打線設備',ja:'ワイヤーボンディング設備'},{en:'Reflow oven',ko:'리플로우 오븐',zhCN:'回流焊炉',zhTW:'迴流焊爐',ja:'リフロー炉'},{en:'Wafer prober',ko:'웨이퍼 프로버',zhCN:'晶圆探针台',zhTW:'晶圓探針台',ja:'ウェハプローバー'}],
   answer:0},
  {q:{en:'What are the inspection targets of iSIS-NBGA?',ko:'iSIS-NBGA의 검사 대상은 무엇입니까?',zhCN:'iSIS-NBGA的检测对象是什么?',zhTW:'iSIS-NBGA的檢測對象是什麼?',ja:'iSIS-NBGAの検査対象は何ですか?'},
   choices:[{en:'FC-BGA, FC-CSP',ko:'FC-BGA, FC-CSP',zhCN:'FC-BGA、FC-CSP',zhTW:'FC-BGA、FC-CSP',ja:'FC-BGA、FC-CSP'},{en:'Wire-bonded packages',ko:'와이어본딩 패키지',zhCN:'打线封装件',zhTW:'打線封裝件',ja:'ワイヤーボンディングパッケージ'},{en:'SMT PCB boards',ko:'SMT PCB 기판',zhCN:'SMT PCB板',zhTW:'SMT PCB板',ja:'SMT基板'},{en:'Bare silicon wafers',ko:'베어 실리콘 웨이퍼',zhCN:'裸硅晶圆',zhTW:'裸矽晶圓',ja:'ベアシリコンウェハ'}],
   answer:0}
],
'1.1.2':[
  {q:{en:'What kind of light source is suitable for WSI inspection?',ko:'WSI 검사에 적합한 광원의 특성은?',zhCN:'适合WSI检测的光源特性是什么?',zhTW:'適合WSI檢測的光源特性是什麼?',ja:'WSI検査に適した光源の特性は?'},
   choices:[{en:'Single frequency and coherent light',ko:'단일 파장이며 일관성(coherent)을 갖는 빛',zhCN:'单一波长且具有相干性的光',zhTW:'單一波長且具有相干性的光',ja:'単一波長かつ可干渉性を持つ光'},{en:'Broadband white light',ko:'광대역 백색광',zhCN:'宽带白光',zhTW:'寬頻白光',ja:'広帯域白色光'},{en:'Any ambient light',ko:'임의의 주변광',zhCN:'任意环境光',zhTW:'任意環境光',ja:'任意の環境光'},{en:'Ultraviolet light only',ko:'자외선만',zhCN:'仅紫外光',zhTW:'僅紫外光',ja:'紫外線のみ'}],
   answer:0},
  {q:{en:'What is used to split a single light source into two beams?',ko:'단일 광원을 두 개의 빔으로 나누는 데 사용되는 것은?',zhCN:'用于将单一光源分成两束光的是什么?',zhTW:'用於將單一光源分成兩束光的是什麼?',ja:'単一光源を2つのビームに分けるために使用されるものは?'},
   choices:[{en:'Beam splitter (B/S)',ko:'빔 스플리터(B/S)',zhCN:'分光镜(B/S)',zhTW:'分光鏡(B/S)',ja:'ビームスプリッター(B/S)'},{en:'PZT stage',ko:'PZT 스테이지',zhCN:'PZT工作台',zhTW:'PZT工作台',ja:'PZTステージ'},{en:'Reference mirror alone',ko:'레퍼런스 미러 단독',zhCN:'仅参考镜',zhTW:'僅參考鏡',ja:'リファレンスミラー単独'},{en:'Camera sensor',ko:'카메라 센서',zhCN:'相机传感器',zhTW:'相機感測器',ja:'カメラセンサー'}],
   answer:0}
],
'1.2.1':[
  {q:{en:'What is the electric current rating of the SEMCO/Kyocera equipment?',ko:'SEMCO, Kyocera 설비의 전류 정격은?',zhCN:'SEMCO、京瓷设备的额定电流是多少?',zhTW:'SEMCO、京瓷設備的額定電流是多少?',ja:'SEMCO、京セラ設備の定格電流は?'},
   choices:[{en:'30A',ko:'30A',zhCN:'30A',zhTW:'30A',ja:'30A'},{en:'50A',ko:'50A',zhCN:'50A',zhTW:'50A',ja:'50A'},{en:'60A',ko:'60A',zhCN:'60A',zhTW:'60A',ja:'60A'},{en:'100A',ko:'100A',zhCN:'100A',zhTW:'100A',ja:'100A'}],
   answer:1},
  {q:{en:'How many rails does the Handler have for SEMCO, Kyocera?',ko:'SEMCO, Kyocera 향 Handler의 Rail 수는?',zhCN:'SEMCO、京瓷用Handler的Rail数是多少?',zhTW:'SEMCO、京瓷用Handler的Rail數是多少?',ja:'SEMCO、京セラ向けHandlerのRail数は?'},
   choices:[{en:'4 Rail',ko:'4 Rail',zhCN:'4条',zhTW:'4條',ja:'4レール'},{en:'6 Rail',ko:'6 Rail',zhCN:'6条',zhTW:'6條',ja:'6レール'},{en:'7 Rail',ko:'7 Rail',zhCN:'7条',zhTW:'7條',ja:'7レール'},{en:'8 Rail',ko:'8 Rail',zhCN:'8条',zhTW:'8條',ja:'8レール'}],
   answer:1}
],
'1.2.2':[
  {q:{en:'What PCs does the UPS cover for SEMV equipment?',ko:'SEMV 설비에서 UPS가 커버하는 PC 범위는?',zhCN:'SEMV设备中UPS覆盖的PC范围是?',zhTW:'SEMV設備中UPS覆蓋的PC範圍是?',ja:'SEMV設備でUPSがカバーするPCの範囲は?'},
   choices:[{en:'Host PC only',ko:'Host PC 전용',zhCN:'仅Host PC',zhTW:'僅Host PC',ja:'Host PCのみ'},{en:'All PC',ko:'All PC(전체 PC)',zhCN:'全部PC',zhTW:'全部PC',ja:'全PC'},{en:'2D Vision PC only',ko:'2D Vision PC 전용',zhCN:'仅2D Vision PC',zhTW:'僅2D Vision PC',ja:'2D Vision PCのみ'},{en:'No PC (no UPS installed)',ko:'없음(UPS 미설치)',zhCN:'无(未安装UPS)',zhTW:'無(未安裝UPS)',ja:'なし(UPS未設置)'}],
   answer:1},
  {q:{en:'What is the overall height of the SEMV equipment (Front view)?',ko:'SEMV 설비의 전체 높이(정면 기준)는?',zhCN:'SEMV设备的整体高度(正视图)是多少?',zhTW:'SEMV設備的整體高度(正視圖)是多少?',ja:'SEMV設備の全体高さ(正面基準)は?'},
   choices:[{en:'1810mm',ko:'1810mm',zhCN:'1810mm',zhTW:'1810mm',ja:'1810mm'},{en:'2227mm',ko:'2227mm',zhCN:'2227mm',zhTW:'2227mm',ja:'2227mm'},{en:'2410mm',ko:'2410mm',zhCN:'2410mm',zhTW:'2410mm',ja:'2410mm'},{en:'2580mm',ko:'2580mm',zhCN:'2580mm',zhTW:'2580mm',ja:'2580mm'}],
   answer:1}
],
'1.2.3':[
  {q:{en:'What electric phase does the AT&S/Intel/Nanya equipment use?',ko:'AT&S, Intel, Nanya 향 설비의 전기 상은?',zhCN:'AT&S、Intel、Nanya用设备使用的电相是?',zhTW:'AT&S、Intel、Nanya用設備使用的電相是?',ja:'AT&S、Intel、Nanya向け設備の電気相は?'},
   choices:[{en:'Three phase',ko:'3상',zhCN:'三相',zhTW:'三相',ja:'三相'},{en:'Single phase',ko:'단상',zhCN:'单相',zhTW:'單相',ja:'単相'},{en:'Two phase',ko:'2상',zhCN:'两相',zhTW:'兩相',ja:'二相'},{en:'DC power only',ko:'DC 전원만',zhCN:'仅直流电源',zhTW:'僅直流電源',ja:'直流電源のみ'}],
   answer:1},
  {q:{en:'Which certification standards apply to the Intel-spec equipment?',ko:'Intel향 설비에 적용되는 인증 규격은?',zhCN:'Intel机型设备适用的认证标准是?',zhTW:'Intel機型設備適用的認證標準是?',ja:'Intel向け設備に適用される認証規格は?'},
   choices:[{en:'CE Mark only',ko:'CE Mark만',zhCN:'仅CE Mark',zhTW:'僅CE Mark',ja:'CE Markのみ'},{en:'SEMI S2/S8, NFPA79, F47',ko:'SEMI S2/S8, NFPA79, F47',zhCN:'SEMI S2/S8、NFPA79、F47',zhTW:'SEMI S2/S8、NFPA79、F47',ja:'SEMI S2/S8、NFPA79、F47'},{en:'ISO 9001 only',ko:'ISO 9001만',zhCN:'仅ISO 9001',zhTW:'僅ISO 9001',ja:'ISO 9001のみ'},{en:'No certification required',ko:'인증 불필요',zhCN:'无需认证',zhTW:'無需認證',ja:'認証不要'}],
   answer:1}
],
'1.3.1':[
  {q:{en:'What does TTM stand for?',ko:'TTM은 무엇의 약자입니까?',zhCN:'TTM是什么的缩写?',zhTW:'TTM是什麼的縮寫?',ja:'TTMは何の略ですか?'},
   choices:[{en:'Tray Transfer Module',ko:'Tray Transfer Module',zhCN:'Tray Transfer Module',zhTW:'Tray Transfer Module',ja:'Tray Transfer Module'},{en:'Total Test Machine',ko:'Total Test Machine',zhCN:'Total Test Machine',zhTW:'Total Test Machine',ja:'Total Test Machine'},{en:'Tool Torque Monitor',ko:'Tool Torque Monitor',zhCN:'Tool Torque Monitor',zhTW:'Tool Torque Monitor',ja:'Tool Torque Monitor'},{en:'Test Track Manager',ko:'Test Track Manager',zhCN:'Test Track Manager',zhTW:'Test Track Manager',ja:'Test Track Manager'}],
   answer:0},
  {q:{en:'What does MSM stand for?',ko:'MSM은 무엇의 약자입니까?',zhCN:'MSM是什么的缩写?',zhTW:'MSM是什麼的縮寫?',ja:'MSMは何の略ですか?'},
   choices:[{en:'Multi Sorter Module',ko:'Multi Sorter Module',zhCN:'Multi Sorter Module',zhTW:'Multi Sorter Module',ja:'Multi Sorter Module'},{en:'Main Sensor Module',ko:'Main Sensor Module',zhCN:'Main Sensor Module',zhTW:'Main Sensor Module',ja:'Main Sensor Module'},{en:'Motor Speed Monitor',ko:'Motor Speed Monitor',zhCN:'Motor Speed Monitor',zhTW:'Motor Speed Monitor',ja:'Motor Speed Monitor'},{en:'Machine Status Manager',ko:'Machine Status Manager',zhCN:'Machine Status Manager',zhTW:'Machine Status Manager',ja:'Machine Status Manager'}],
   answer:0}
],
'1.3.2':[
  {q:{en:'What does the content covered in this section concern?',ko:'이 섹션에서 다루는 내용은 무엇에 관한 것입니까?',zhCN:'本节内容涉及什么?',zhTW:'本節內容涉及什麼?',ja:'このセクションで扱う内容は何に関するものですか?'},
   choices:[{en:'Safety sticker locations attached on the equipment',ko:'설비에 부착된 안전 스티커의 위치',zhCN:'设备上安全标签的贴附位置',zhTW:'設備上安全標籤的貼附位置',ja:'設備に貼付された安全ステッカーの位置'},{en:'Network cable wiring',ko:'네트워크 케이블 배선',zhCN:'网络电缆布线',zhTW:'網路電纜佈線',ja:'ネットワークケーブル配線'},{en:'Vision camera specifications',ko:'비전 카메라 사양',zhCN:'视觉相机规格',zhTW:'視覺相機規格',ja:'ビジョンカメラ仕様'},{en:'Recipe backup procedure',ko:'레시피 백업 절차',zhCN:'配方备份程序',zhTW:'配方備份程序',ja:'レシピバックアップ手順'}],
   answer:0}
],
'1.3.3':[
  {q:{en:'How many EMS buttons must be in the pull state to supply motor power?',ko:'모터 전원을 공급하기 위해 pull 상태로 유지해야 하는 EMS 버튼의 개수는?',zhCN:'为供应马达电源,必须保持拉出状态的EMS按钮数量是?',zhTW:'為供應馬達電源,必須保持拉出狀態的EMS按鈕數量是?',ja:'モーター電源を供給するためにpull状態を維持しなければならないEMSボタンの数は?'},
   choices:[{en:'2',ko:'2',zhCN:'2',zhTW:'2',ja:'2'},{en:'4',ko:'4',zhCN:'4',zhTW:'4',ja:'4'},{en:'6',ko:'6',zhCN:'6',zhTW:'6',ja:'6'},{en:'8',ko:'8',zhCN:'8',zhTW:'8',ja:'8'}],
   answer:1},
  {q:{en:'What air pressure should each air regulator maintain?',ko:'각 Air Regulator가 유지해야 하는 압력은?',zhCN:'各Air Regulator应维持的气压是?',zhTW:'各Air Regulator應維持的氣壓是?',ja:'各Air Regulatorが維持すべき圧力は?'},
   choices:[{en:'1~2 bar',ko:'1~2 bar',zhCN:'1~2 bar',zhTW:'1~2 bar',ja:'1~2 bar'},{en:'4~6 bar',ko:'4~6 bar',zhCN:'4~6 bar',zhTW:'4~6 bar',ja:'4~6 bar'},{en:'10~12 bar',ko:'10~12 bar',zhCN:'10~12 bar',zhTW:'10~12 bar',ja:'10~12 bar'},{en:'20~25 bar',ko:'20~25 bar',zhCN:'20~25 bar',zhTW:'20~25 bar',ja:'20~25 bar'}],
   answer:1}
],
'1.3.4':[
  {q:{en:'Which step comes immediately after \'2D inspection\' in the NBGA automatic sequence?',ko:'NBGA 자동 동작 순서에서 \'2D inspection\' 바로 다음 단계는?',zhCN:'在NBGA自动运行顺序中,紧接在"2D inspection"之后的步骤是?',zhTW:'在NBGA自動運行順序中,緊接在「2D inspection」之後的步驟是?',ja:'NBGA自動動作シーケンスで「2D inspection」の直後の工程は?'},
   choices:[{en:'Place & Pick tray',ko:'Place & Pick tray',zhCN:'Place & Pick tray',zhTW:'Place & Pick tray',ja:'Place & Pick tray'},{en:'Load tray',ko:'Load tray',zhCN:'Load tray',zhTW:'Load tray',ja:'Load tray'},{en:'Unload tray',ko:'Unload tray',zhCN:'Unload tray',zhTW:'Unload tray',ja:'Unload tray'},{en:'Unit sorting',ko:'Unit sorting',zhCN:'Unit sorting',zhTW:'Unit sorting',ja:'Unit sorting'}],
   answer:0},
  {q:{en:'If the bump area is larger than the F.O.V during inspection, what should be done?',ko:'검사 시 Bump Area가 F.O.V보다 크면 어떻게 합니까?',zhCN:'检测时若Bump Area大于F.O.V,应如何处理?',zhTW:'檢測時若Bump Area大於F.O.V,應如何處理?',ja:'検査時にBump AreaがF.O.Vより大きい場合はどうしますか?'},
   choices:[{en:'Skip the inspection',ko:'검사를 건너뛴다',zhCN:'跳过检测',zhTW:'跳過檢測',ja:'検査を省略する'},{en:'Divide the inspection area into two or more',ko:'검사 영역을 2개 이상으로 나눈다',zhCN:'将检测区域分为2个以上',zhTW:'將檢測區域分為2個以上',ja:'検査領域を2つ以上に分割する'},{en:'Reduce camera resolution',ko:'카메라 해상도를 낮춘다',zhCN:'降低相机分辨率',zhTW:'降低相機解析度',ja:'カメラの解像度を下げる'},{en:'Stop the equipment',ko:'설비를 정지한다',zhCN:'停止设备',zhTW:'停止設備',ja:'設備を停止する'}],
   answer:1}
],
'2.1.1':[
  {q:{en:'What is used to open the door without turning off power?',ko:'전원을 끄지 않고 도어를 여는 데 사용되는 것은?',zhCN:'在不关闭电源的情况下打开门所使用的是?',zhTW:'在不關閉電源的情況下打開門所使用的是?',ja:'電源を切らずにドアを開けるために使用されるものは?'},
   choices:[{en:'Release Key',ko:'Release Key',zhCN:'Release Key',zhTW:'Release Key',ja:'Release Key'},{en:'Reset Button',ko:'Reset Button',zhCN:'Reset Button',zhTW:'Reset Button',ja:'Reset Button'},{en:'EMS Button',ko:'EMS Button',zhCN:'EMS Button',zhTW:'EMS Button',ja:'EMS Button'},{en:'Job Open Button',ko:'Job Open Button',zhCN:'Job Open Button',zhTW:'Job Open Button',ja:'Job Open Button'}],
   answer:0},
  {q:{en:'What is the last step in the Electric Power On sequence covered in this section?',ko:'본 섹션에서 다루는 전원 투입 순서의 마지막 단계는?',zhCN:'本节所述电源投入顺序的最后一步是?',zhTW:'本節所述電源投入順序的最後一步是?',ja:'本セクションで扱う電源投入順序の最後の工程は?'},
   choices:[{en:'Turn on the power of the Operation Panel',ko:'Operation Panel의 전원을 켠다',zhCN:'开启Operation Panel的电源',zhTW:'開啟Operation Panel的電源',ja:'Operation Panelの電源を入れる'},{en:'Turn on the main circuit breaker',ko:'Main 차단기를 켠다',zhCN:'开启主断路器',zhTW:'開啟主斷路器',ja:'メイン遮断機を入れる'},{en:'Turn on the UPS',ko:'UPS를 켠다',zhCN:'开启UPS',zhTW:'開啟UPS',ja:'UPSを入れる'},{en:'Turn on the power strip',ko:'파워 스트립을 켠다',zhCN:'开启电源排插',zhTW:'開啟電源排插',ja:'パワーストリップを入れる'}],
   answer:0}
],
'2.1.2':[
  {q:{en:'Which four PCs are turned on in this power sequence step?',ko:'이 전원 순서 단계에서 켜는 4종의 PC는?',zhCN:'此电源顺序步骤中开启的4种PC是?',zhTW:'此電源順序步驟中開啟的4種PC是?',ja:'この電源順序の工程でOnにする4種のPCは?'},
   choices:[{en:'HOST, 2D, 3D#1, 3D#2',ko:'HOST, 2D, 3D#1, 3D#2',zhCN:'HOST、2D、3D#1、3D#2',zhTW:'HOST、2D、3D#1、3D#2',ja:'HOST、2D、3D#1、3D#2'},{en:'HOST, Server, Backup, Client',ko:'HOST, Server, Backup, Client',zhCN:'HOST、Server、Backup、Client',zhTW:'HOST、Server、Backup、Client',ja:'HOST、Server、Backup、Client'},{en:'Only HOST PC',ko:'HOST PC만',zhCN:'仅HOST PC',zhTW:'僅HOST PC',ja:'HOST PCのみ'},{en:'2D and 3D#1 only',ko:'2D와 3D#1만',zhCN:'仅2D和3D#1',zhTW:'僅2D和3D#1',ja:'2Dと3D#1のみ'}],
   answer:0},
  {q:{en:'Which controllers are powered on for 3D#1 and 3D#2 in addition to PC and LED controller?',ko:'PC 및 LED Controller 외에 3D#1, 3D#2에 대해 전원을 켜는 컨트롤러는?',zhCN:'除PC及LED Controller外,针对3D#1、3D#2还需开启电源的控制器是?',zhTW:'除PC及LED Controller外,針對3D#1、3D#2還需開啟電源的控制器是?',ja:'PC及びLED Controllerの他に3D#1、3D#2に対して電源を入れるコントローラーは?'},
   choices:[{en:'PZT Controller and AF Controller',ko:'PZT Controller와 AF Controller',zhCN:'PZT Controller与AF Controller',zhTW:'PZT Controller與AF Controller',ja:'PZT ControllerとAF Controller'},{en:'HUB and KVM only',ko:'HUB와 KVM만',zhCN:'仅HUB与KVM',zhTW:'僅HUB與KVM',ja:'HUBとKVMのみ'},{en:'UPS only',ko:'UPS만',zhCN:'仅UPS',zhTW:'僅UPS',ja:'UPSのみ'},{en:'Operation Panel only',ko:'Operation Panel만',zhCN:'仅Operation Panel',zhTW:'僅Operation Panel',ja:'Operation Panelのみ'}],
   answer:0}
],
'2.1.3':[
  {q:{en:'In what order should the equipment be turned off?',ko:'설비를 끌 때의 올바른 순서는?',zhCN:'关闭设备时的正确顺序是?',zhTW:'關閉設備時的正確順序是?',ja:'設備を切るときの正しい順序は?'},
   choices:[{en:'Same order as turning on',ko:'켤 때와 같은 순서',zhCN:'与开机相同的顺序',zhTW:'與開機相同的順序',ja:'電源を入れるときと同じ順序'},{en:'Reverse order of turning on',ko:'켤 때와 반대의 순서',zhCN:'与开机相反的顺序',zhTW:'與開機相反的順序',ja:'電源を入れるときと逆の順序'},{en:'Any order is fine',ko:'순서 무관',zhCN:'顺序无关',zhTW:'順序無關',ja:'順序は問わない'},{en:'Main panel first, then controllers',ko:'Main Panel을 먼저, 그 다음 컨트롤러',zhCN:'先关Main Panel,再关控制器',zhTW:'先關Main Panel,再關控制器',ja:'まずMain Panel、次にコントローラー'}],
   answer:1},
  {q:{en:'What is turned off immediately before the UPS in the Turn Off Sequence?',ko:'전원 차단 순서에서 UPS 바로 직전에 끄는 것은?',zhCN:'关机顺序中紧接在UPS之前关闭的是?',zhTW:'關機順序中緊接在UPS之前關閉的是?',ja:'電源オフ順序でUPSの直前に切るものは?'},
   choices:[{en:'Power strip',ko:'Power strip(파워 스트립)',zhCN:'Power strip(电源排插)',zhTW:'Power strip(電源排插)',ja:'Power strip(パワーストリップ)'},{en:'Main Panel',ko:'Main Panel',zhCN:'Main Panel',zhTW:'Main Panel',ja:'Main Panel'},{en:'CP',ko:'CP',zhCN:'CP',zhTW:'CP',ja:'CP'},{en:'Operation Panel',ko:'Operation Panel',zhCN:'Operation Panel',zhTW:'Operation Panel',ja:'Operation Panel'}],
   answer:0}
],
'2.2.1':[
  {q:{en:'Which key combination switches between HOST/Vision PC screens?',ko:'HOST/Vision PC 화면 전환 단축키는?',zhCN:'切换HOST/Vision PC画面的快捷键是?',zhTW:'切換HOST/Vision PC畫面的快捷鍵是?',ja:'HOST/Vision PC画面切替のショートカットキーは?'},
   choices:[{en:'Alt+Tab',ko:'Alt+Tab',zhCN:'Alt+Tab',zhTW:'Alt+Tab',ja:'Alt+Tab'},{en:'Ctrl+Ctrl+1~4',ko:'Ctrl+Ctrl+1~4',zhCN:'Ctrl+Ctrl+1~4',zhTW:'Ctrl+Ctrl+1~4',ja:'Ctrl+Ctrl+1~4'},{en:'Ctrl+Alt+Del',ko:'Ctrl+Alt+Del',zhCN:'Ctrl+Alt+Del',zhTW:'Ctrl+Alt+Del',ja:'Ctrl+Alt+Del'},{en:'F1~F4',ko:'F1~F4',zhCN:'F1~F4',zhTW:'F1~F4',ja:'F1~F4'}],
   answer:1},
  {q:{en:'What program is run after switching to HOST?',ko:'HOST로 전환한 후 실행하는 프로그램은?',zhCN:'切换至HOST后运行的程序是?',zhTW:'切換至HOST後執行的程式是?',ja:'HOSTに切り替えた後に実行するプログラムは?'},
   choices:[{en:'BAOI program',ko:'BAOI 프로그램',zhCN:'BAOI程序',zhTW:'BAOI程式',ja:'BAOIプログラム'},{en:'VisionTray program',ko:'VisionTray 프로그램',zhCN:'VisionTray程序',zhTW:'VisionTray程式',ja:'VisionTrayプログラム'},{en:'Excel',ko:'Excel',zhCN:'Excel',zhTW:'Excel',ja:'Excel'},{en:'CAD viewer',ko:'CAD 뷰어',zhCN:'CAD查看器',zhTW:'CAD檢視器',ja:'CADビューア'}],
   answer:0}
],
'2.2.2':[
  {q:{en:'When can inspection proceed based on the system status?',ko:'검사를 진행할 수 있는 시스템 상태 조건은?',zhCN:'可进行检测的系统状态条件是?',zhTW:'可進行檢測的系統狀態條件是?',ja:'検査を進めることができるシステム状態の条件は?'},
   choices:[{en:'When all statuses show ready (green)',ko:'모든 상태가 준비(녹색)로 표시될 때',zhCN:'所有状态显示为就绪(绿色)时',zhTW:'所有狀態顯示為就緒(綠色)時',ja:'すべての状態が準備完了(緑色)で表示されたとき'},{en:'When only Vision is ready',ko:'Vision만 준비되었을 때',zhCN:'仅Vision就绪时',zhTW:'僅Vision就緒時',ja:'Visionのみ準備完了のとき'},{en:'As soon as the Host PC boots',ko:'Host PC 부팅 직후',zhCN:'Host PC启动后立即',zhTW:'Host PC啟動後立即',ja:'Host PC起動直後'},{en:'After 5 minutes of warm-up',ko:'5분 예열 후',zhCN:'预热5分钟后',zhTW:'預熱5分鐘後',ja:'5分間のウォームアップ後'}],
   answer:0},
  {q:{en:'If Vision status is not ready, what should you check first?',ko:'Vision 상태가 준비되지 않았다면 가장 먼저 무엇을 확인해야 합니까?',zhCN:'若Vision状态未就绪,首先应确认什么?',zhTW:'若Vision狀態未就緒,首先應確認什麼?',ja:'Vision状態が準備できていない場合、最初に何を確認すべきですか?'},
   choices:[{en:'Click the Connect Vision button',ko:'Connect Vision 버튼을 클릭한다',zhCN:'点击Connect Vision按钮',zhTW:'點擊Connect Vision按鈕',ja:'Connect Visionボタンをクリックする'},{en:'Restart the entire equipment',ko:'설비 전체를 재부팅한다',zhCN:'重启整个设备',zhTW:'重啟整個設備',ja:'設備全体を再起動する'},{en:'Replace the camera',ko:'카메라를 교체한다',zhCN:'更换相机',zhTW:'更換相機',ja:'カメラを交換する'},{en:'Call the barcode scanner vendor',ko:'바코드 스캐너 업체에 연락한다',zhCN:'联系条码扫描器厂商',zhTW:'聯繫條碼掃描器廠商',ja:'バーコードスキャナーの業者に連絡する'}],
   answer:0}
],
'2.2.3':[
  {q:{en:'Which button creates the information input window for product inspection?',ko:'제품 검사 정보 입력창을 생성하는 버튼은?',zhCN:'创建产品检测信息输入窗口的按钮是?',zhTW:'建立產品檢測資訊輸入視窗的按鈕是?',ja:'製品検査情報入力ウィンドウを作成するボタンは?'},
   choices:[{en:'Job Save',ko:'Job Save',zhCN:'Job Save',zhTW:'Job Save',ja:'Job Save'},{en:'Lot Start',ko:'Lot Start',zhCN:'Lot Start',zhTW:'Lot Start',ja:'Lot Start'},{en:'Stop',ko:'Stop',zhCN:'Stop',zhTW:'Stop',ja:'Stop'},{en:'Save Log',ko:'Save Log',zhCN:'Save Log',zhTW:'Save Log',ja:'Save Log'}],
   answer:1},
  {q:{en:'What does the UPH field on the Host UI represent?',ko:'Host UI의 UPH 항목이 의미하는 것은?',zhCN:'Host UI中UPH项目所代表的是?',zhTW:'Host UI中UPH項目所代表的是?',ja:'Host UIのUPH項目が示すものは?'},
   choices:[{en:'Units produced per hour',ko:'시간당 유닛 생산량',zhCN:'每小时产出的单位数',zhTW:'每小時產出的單位數',ja:'1時間あたりのユニット生産数'},{en:'Total unit count',ko:'총 유닛 수',zhCN:'总单位数',zhTW:'總單位數',ja:'総ユニット数'},{en:'Unit pass rate',ko:'유닛 합격률',zhCN:'单位合格率',zhTW:'單位合格率',ja:'ユニット合格率'},{en:'Upload history',ko:'업로드 이력',zhCN:'上传历史',zhTW:'上傳歷史',ja:'アップロード履歴'}],
   answer:0}
],
'2.2.4':[
  {q:{en:'What must you click after \'Init Handler\' to initialize the equipment?',ko:'설비를 초기화하려면 [Init Handler] 클릭 후 무엇을 눌러야 합니까?',zhCN:'要初始化设备,点击[Init Handler]后必须点击什么?',zhTW:'要初始化設備,點擊[Init Handler]後必須點擊什麼?',ja:'設備を初期化するには[Init Handler]をクリックした後、何をクリックする必要がありますか?'},
   choices:[{en:'OK',ko:'OK',zhCN:'OK',zhTW:'OK',ja:'OK'},{en:'Cancel',ko:'Cancel',zhCN:'Cancel',zhTW:'Cancel',ja:'Cancel'},{en:'Job Open',ko:'Job Open',zhCN:'Job Open',zhTW:'Job Open',ja:'Job Open'},{en:'Lot Cancel',ko:'Lot Cancel',zhCN:'Lot Cancel',zhTW:'Lot Cancel',ja:'Lot Cancel'}],
   answer:0},
  {q:{en:'Before clicking \'Yes\' to unclamp, what should be confirmed?',ko:'Unclamp를 위해 \'예\'를 클릭하기 전에 확인해야 하는 것은?',zhCN:'点击"是"进行Unclamp之前,应确认什么?',zhTW:'點擊「是」進行Unclamp之前,應確認什麼?',ja:'Unclampのために「はい」をクリックする前に確認すべきことは?'},
   choices:[{en:'That the tray is secured to the TTM and TSM',ko:'Tray가 TTM 및 TSM에 고정되어 있는지',zhCN:'Tray是否固定在TTM及TSM上',zhTW:'Tray是否固定在TTM及TSM上',ja:'TrayがTTM及びTSMに固定されているか'},{en:'That the Host PC is rebooted',ko:'Host PC가 재부팅되었는지',zhCN:'Host PC是否已重启',zhTW:'Host PC是否已重啟',ja:'Host PCが再起動されたか'},{en:'That the barcode scanner is connected',ko:'바코드 스캐너가 연결되었는지',zhCN:'条码扫描器是否已连接',zhTW:'條碼掃描器是否已連接',ja:'バーコードスキャナーが接続されているか'},{en:'That the Job file is saved',ko:'Job 파일이 저장되었는지',zhCN:'Job文件是否已保存',zhTW:'Job檔案是否已保存',ja:'Jobファイルが保存されているか'}],
   answer:0}
],
'2.3.1':[
  {q:{en:'What access level should be selected when logging in for normal inspection operation?',ko:'일반 검사 운영을 위해 로그인 시 선택해야 하는 접근 단계는?',zhCN:'为进行常规检测操作登录时应选择的访问级别是?',zhTW:'為進行常規檢測操作登入時應選擇的存取層級是?',ja:'通常の検査運用のためログイン時に選択すべきアクセスレベルは?'},
   choices:[{en:'Operator',ko:'Operator',zhCN:'Operator',zhTW:'Operator',ja:'Operator'},{en:'Administrator only',ko:'관리자 전용',zhCN:'仅限管理员',zhTW:'僅限管理員',ja:'管理者のみ'},{en:'Guest',ko:'Guest',zhCN:'Guest',zhTW:'Guest',ja:'Guest'},{en:'No login required',ko:'로그인 불필요',zhCN:'无需登录',zhTW:'無需登入',ja:'ログイン不要'}],
   answer:0},
  {q:{en:'What is the minimum number of Empty Trays required in the Empty Stacker to proceed?',ko:'진행을 위해 Empty Stacker에 필요한 최소 Empty Tray 수는?',zhCN:'进行操作所需Empty Stacker中最少的Empty Tray数量是?',zhTW:'進行操作所需Empty Stacker中最少的Empty Tray數量是?',ja:'進行のためにEmpty Stackerに必要な最低Empty Tray数は?'},
   choices:[{en:'2',ko:'2',zhCN:'2',zhTW:'2',ja:'2'},{en:'4',ko:'4',zhCN:'4',zhTW:'4',ja:'4'},{en:'6',ko:'6',zhCN:'6',zhTW:'6',ja:'6'},{en:'10',ko:'10',zhCN:'10',zhTW:'10',ja:'10'}],
   answer:2}
]
};
