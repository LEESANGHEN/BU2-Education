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
var CM_LANG_LABEL={ko:'언어',en:'Language',zhCN:'语言',zhTW:'語言',ja:'言語'};

/* 설비군(iSIS-SMTV, iSIS-NBGA, ...)이 앞으로 계속 늘어날 예정이라, 최상위 "관련 자료" 폴더
   바로 아래에 설비군별 폴더를 두고 그 안에 모듈별 폴더를 두는 구조로 정리한다:
   관련 자료/<설비군명>/<모듈코드>/slide-NNN.jpg */
function cmImg(code,equip,n){return '관련 자료/'+(CM_EQUIP_LABEL[equip]||equip)+'/'+code+'/slide-'+String(n).padStart(3,'0')+'.jpg';}

var COURSE_MATERIALS={
  F:{
    smtv:{
      title:{ko:'F. Handle Teaching',en:'F. Handle Teaching',zhCN:'F. Handle Teaching',zhTW:'F. Handle Teaching',ja:'F. Handle Teaching'},
      slides:[
        {img:cmImg('F','smtv',1),tx:{
          ko:'각 Module 축의 이동 위치(Position) Teaching 방법을 다룹니다.',
          en:'Covers how to teach the position of each module\'s motion axis.',
          zhCN:'介绍各Module轴的位置(Position)Teaching方法。',
          zhTW:'介紹各Module軸的位置(Position)Teaching方法。',
          ja:'各モジュール軸の位置(Position)Teaching方法を扱います。'
        }},
        {img:cmImg('F','smtv',2),tx:{
          en:'For each module (Picker, Aligner, Pedestal, etc.) to actually pick and place a unit precisely, its motion axes (X-axis, Y-axis, Z-axis) must know the physical reference coordinates. Teaching is how those reference coordinates are created — you physically align a pointed Teaching Pin with the fixed Pin-hole on the bottom of the Reference Tray, then save that as "this is the correct position" in the software (Teach & Save).\n\nThe Z-axis reference is the contact position where the Pin touches the Tray surface. For Pick, the axis is lowered further than the contact position (+1mm) to grip securely; for Place, it is offset in the opposite direction so it doesn\'t press too hard. This one principle applies to every Teaching Position below.',
          ko:'설비의 각 Module(Picker·Aligner·Pedestal 등)이 실제로 Unit을 정확히 집고 놓으려면, 그 Module의 이동축(X-axis(X축)·Y-axis(Y축)·Z-axis(Z축))이 기준이 되는 물리적 좌표를 알고 있어야 합니다. 이 기준 좌표를 만드는 방법이 Teaching입니다 — 뾰족한 Teaching Pin을 Reference Tray 바닥의 정해진 Pin-hole에 실제로 맞춰본 뒤, "지금 이 위치가 맞는 위치다"라고 소프트웨어에 저장(Teach & Save)시키는 것입니다.\n\nZ-axis(Z축)는 Pin이 Tray 면에 닿는 접촉 위치를 기준으로, Pick(집는 동작)할 때는 확실히 잡히도록 접촉 위치보다 더 내리고(+1mm), Place(내려놓는 동작)할 때는 너무 세게 누르지 않도록 반대 방향으로 보정합니다. 이 원리 하나가 아래 모든 Teaching Position에 그대로 적용됩니다.',
          zhCN:'要让设备的每个模块(Picker、Aligner、Pedestal等)能够真正准确地抓取和放置Unit,该模块的移动轴(X-axis、Y-axis、Z-axis)必须掌握作为基准的物理坐标。建立这个基准坐标的方法就是Teaching——将尖头的Teaching Pin实际对准Reference Tray底部固定的Pin-hole,然后在软件中保存(Teach & Save)"当前位置即为正确位置"。\n\nZ-axis以Pin接触Tray表面的接触位置为基准:Pick(抓取动作)时,为确保夹取牢固,会比接触位置再下降(+1mm);Place(放下动作)时,为避免按压过重,则朝相反方向进行补偿。这一个原理将原样应用于以下所有Teaching Position。',
          zhTW:'要讓設備的每個模組(Picker、Aligner、Pedestal等)能夠真正準確地抓取和放置Unit,該模組的移動軸(X-axis、Y-axis、Z-axis)必須掌握作為基準的物理座標。建立這個基準座標的方法就是Teaching——將尖頭的Teaching Pin實際對準Reference Tray底部固定的Pin-hole,然後在軟體中儲存(Teach & Save)「目前位置即為正確位置」。\n\nZ-axis以Pin接觸Tray表面的接觸位置為基準:Pick(抓取動作)時,為確保夾取牢固,會比接觸位置再下降(+1mm);Place(放下動作)時,為避免按壓過重,則朝相反方向進行補償。這一個原理將原樣套用於以下所有Teaching Position。',
          ja:'設備の各モジュール(Picker・Aligner・Pedestalなど)が実際にUnitを正確に掴んで置くためには、そのモジュールの移動軸(X-axis・Y-axis・Z-axis)が基準となる物理座標を把握している必要があります。この基準座標を作る方法がTeachingです——尖ったTeaching PinをReference Tray底面の決まったPin-holeに実際に合わせた後、「今のこの位置が正しい位置だ」とソフトウェアに保存(Teach & Save)することです。\n\nZ-axis(Z軸)はPinがTray面に接触する位置を基準にし、Pick(掴む動作)の際は確実に掴めるよう接触位置よりさらに下げ(+1mm)、Place(置く動作)の際は強く押しすぎないよう反対方向に補正します。この一つの原理が、以下のすべてのTeaching Positionにそのまま適用されます。'
        }},
        {img:cmImg('F','smtv',3),tx:{
          en:'F-1. Elevator — Up Position\n\nSecure a 2mm gap between the Stacker and Tray\n\n1. Place a Tray on the Stacker.\n2. In Handler ▸ Map ▸ Elevator, move the Z-axis position so the gap between the Stacker and Tray becomes 2mm. (Do the same for Spring-type Stackers.)\n3. Teach & Save the current position as the Up Position.\n4. Teach the Load, Empty, and Reject Empty Elevators the same way.',
          ko:'F-1. Elevator — Up Position\n\nStacker·Tray 간격 2mm 확보\n\n1. Tray를 Stacker 위에 올린다.\n2. Handler ▸ Map ▸ Elevator에서 Z-axis(Z축) 위치를 움직여, Stacker와 Tray 사이 간격이 2mm가 되도록 맞춘다. (Spring 타입 Stacker도 같은 방식으로 진행)\n3. 현재 위치를 Teach & Save 하여 Up Position으로 저장한다.\n4. Load·Empty·Reject Empty Elevator도 동일한 방식으로 각각 Teaching한다.',
          zhCN:'F-1. Elevator — Up Position\n\n确保Stacker与Tray之间间隙为2mm\n\n1. 将Tray放到Stacker上。\n2. 在Handler ▸ Map ▸ Elevator中移动Z-axis位置,使Stacker与Tray之间的间隙达到2mm。(Spring类型的Stacker也按相同方式进行)\n3. 将当前位置Teach & Save,保存为Up Position。\n4. Load、Empty、Reject Empty Elevator也按相同方式分别进行Teaching。',
          zhTW:'F-1. Elevator — Up Position\n\n確保Stacker與Tray之間間隙為2mm\n\n1. 將Tray放到Stacker上。\n2. 在Handler ▸ Map ▸ Elevator中移動Z-axis位置,使Stacker與Tray之間的間隙達到2mm。(Spring類型的Stacker也按相同方式進行)\n3. 將目前位置Teach & Save,儲存為Up Position。\n4. Load、Empty、Reject Empty Elevator也按相同方式分別進行Teaching。',
          ja:'F-1. Elevator — Up Position\n\nStacker・Tray間隔2mmを確保\n\n1. TrayをStackerの上に載せる。\n2. Handler ▸ Map ▸ ElevatorでZ-axis(Z軸)位置を動かし、StackerとTrayの間隔が2mmになるように合わせる。(Springタイプのstackerも同じ方法で行う)\n3. 現在の位置をTeach & SaveしてUp Positionとして保存する。\n4. Load・Empty・Reject Empty Elevatorも同じ方法でそれぞれTeachingする。'
        }},
        {img:cmImg('F','smtv',4),tx:{
          en:'F-2. Elevator — One Position\n\nThe height at which the Stacker slots in between two Trays\n\n1. Place two Trays on the Stacker.\n2. In Handler ▸ Map ▸ Elevator, move to the Up Position.\n3. Unclamp the Stacker.\n4. Lower the Z-axis position so the Stacker sits between the two Trays.\n5. Push the Stacker in and confirm it actually sits between the two Trays.\n6. Clamp the Stacker and confirm every Stacker spans between the Trays.\n7. Teach & Save the current Z-axis position as the One Position.\n8. Teach the Load and Empty Elevators the same way.\n\nCheck point — Good if it goes in without interference; Bad if it collides (readjust).',
          ko:'F-2. Elevator — One Position\n\nTray 2장 사이로 Stacker가 들어가는 높이\n\n1. Stacker 위에 Tray 2장을 올린다.\n2. Handler ▸ Map ▸ Elevator에서 Up Position으로 이동한다.\n3. Stacker를 Unclamp 한다.\n4. Z-axis(Z축) 위치를 낮춰 Stacker가 두 Tray 사이에 위치하도록 한다.\n5. Stacker를 밀어 넣어 실제로 두 Tray 사이에 위치하는지 확인한다.\n6. Stacker를 Clamp 해서 모든 Stacker가 Tray 사이에 걸쳐 있는지 확인한다.\n7. 현재 Z-axis(Z축) 위치를 Teach & Save 하여 One Position으로 저장한다.\n8. Load·Empty Elevator도 동일한 방식으로 Teaching한다.\n\n확인 포인트 — 간섭 없이 들어가면 Good, 부딪히면 Bad(재조정)',
          zhCN:'F-2. Elevator — One Position\n\nStacker插入两张Tray之间的高度\n\n1. 在Stacker上放置2张Tray。\n2. 在Handler ▸ Map ▸ Elevator中移动到Up Position。\n3. 将Stacker Unclamp。\n4. 降低Z-axis位置,使Stacker位于两张Tray之间。\n5. 推入Stacker,确认其确实位于两张Tray之间。\n6. 将Stacker Clamp,确认所有Stacker都夹在Tray之间。\n7. 将当前Z-axis位置Teach & Save,保存为One Position。\n8. Load、Empty Elevator也按相同方式进行Teaching。\n\n确认要点——无干涉插入为Good,发生碰撞为Bad(需重新调整)',
          zhTW:'F-2. Elevator — One Position\n\nStacker插入兩張Tray之間的高度\n\n1. 在Stacker上放置2張Tray。\n2. 在Handler ▸ Map ▸ Elevator中移動到Up Position。\n3. 將Stacker Unclamp。\n4. 降低Z-axis位置,使Stacker位於兩張Tray之間。\n5. 推入Stacker,確認其確實位於兩張Tray之間。\n6. 將Stacker Clamp,確認所有Stacker都夾在Tray之間。\n7. 將目前Z-axis位置Teach & Save,儲存為One Position。\n8. Load、Empty Elevator也按相同方式進行Teaching。\n\n確認要點——無干涉插入為Good,發生碰撞為Bad(需重新調整)',
          ja:'F-2. Elevator — One Position\n\nTray2枚の間にStackerが入る高さ\n\n1. Stackerの上にTrayを2枚載せる。\n2. Handler ▸ Map ▸ ElevatorでUp Positionへ移動する。\n3. StackerをUnclampする。\n4. Z-axis(Z軸)位置を下げ、Stackerが2枚のTrayの間に位置するようにする。\n5. Stackerを押し入れ、実際に2枚のTrayの間に位置するか確認する。\n6. StackerをClampして、すべてのStackerがTrayの間に掛かっているか確認する。\n7. 現在のZ-axis(Z軸)位置をTeach & SaveしてOne Positionとして保存する。\n8. Load・Empty Elevatorも同じ方法でTeachingする。\n\n確認ポイント — 干渉なく入ればGood、ぶつかればBad(再調整)'
        }},
        {img:cmImg('F','smtv',5),tx:{
          en:'F-3. Elevator — Wait Position\n\nHome = Wait Position (Z-axis 0mm)\n\n1. In Handler ▸ Map ▸ Elevator, select Wait Position.\n2. Click Home to reset the Z-axis position.\n3. Teach & Save the current Z-axis position (0mm).\n4. Teach the Load, Empty, and Good Elevators the same way.\n\n⚠ Caution — If the Home position is too high, trays may collide while moving. For motor-type units, correct using the sensor/object position.',
          ko:'F-3. Elevator — Wait Position\n\nHome = 대기 위치 (Z-axis(Z축) 0mm)\n\n1. Handler ▸ Map ▸ Elevator에서 Wait Position을 선택한다.\n2. Home을 클릭해 Z-axis(Z축) 위치를 초기화한다.\n3. 현재 Z-axis(Z축) 위치(0mm)를 Teach & Save 한다.\n4. Load·Empty·Good Elevator도 동일한 방식으로 Teaching한다.\n\n⚠ 주의 — Home 위치가 너무 높으면 Tray 이동 중 충돌 가능 — Motor 방식이면 Sensor/오브젝트 위치로 보정',
          zhCN:'F-3. Elevator — Wait Position\n\nHome = 待机位置(Z-axis 0mm)\n\n1. 在Handler ▸ Map ▸ Elevator中选择Wait Position。\n2. 点击Home,将Z-axis位置初始化。\n3. 将当前Z-axis位置(0mm)Teach & Save。\n4. Load、Empty、Good Elevator也按相同方式进行Teaching。\n\n⚠ 注意——Home位置过高时,Tray移动过程中可能发生碰撞——Motor方式时,请以Sensor/物体位置进行校正',
          zhTW:'F-3. Elevator — Wait Position\n\nHome = 待機位置(Z-axis 0mm)\n\n1. 在Handler ▸ Map ▸ Elevator中選擇Wait Position。\n2. 點擊Home,將Z-axis位置初始化。\n3. 將目前Z-axis位置(0mm)Teach & Save。\n4. Load、Empty、Good Elevator也按相同方式進行Teaching。\n\n⚠ 注意——Home位置過高時,Tray移動過程中可能發生碰撞——Motor方式時,請以Sensor/物體位置進行校正',
          ja:'F-3. Elevator — Wait Position\n\nHome = 待機位置(Z-axis(Z軸) 0mm)\n\n1. Handler ▸ Map ▸ ElevatorでWait Positionを選択する。\n2. Homeをクリックして Z-axis(Z軸)位置を初期化する。\n3. 現在のZ-axis(Z軸)位置(0mm)をTeach & Saveする。\n4. Load・Empty・Good Elevatorも同じ方法でTeachingする。\n\n⚠ 注意 — Home位置が高すぎるとTray移動中に衝突する可能性がある — Motor方式の場合はSensor/オブジェクト位置で補正する'
        }},
        {img:cmImg('F','smtv',6),tx:{
          en:'F-4. Elevator — Indexer Y Front Position\n\nTray load/unload position\n\n1. Place a Tray on the Rail.\n2. In Handler ▸ Map ▸ Indexer, turn on B/W Clamp and F/W Clamp to secure the Tray. (F/W = Forward Finger Clamp, B/W = Backward Finger Clamp)\n3. Move the Indexer so the Tray aligns with the Tray Guide.\n4. Unclamp in order: F/W Clamp, then B/W Clamp.\n5. Unclamp the Elevator Stacker.\n6. Move the Elevator to the Up Position and confirm the Tray rises without interference.\n7. Teach & Save the current Indexer position as the Front Tray Position.\n8. Repeat the same way for every Indexer.\n\n⚠ Caution — Make sure the Tray isn\'t damaged by the Stacker while the Elevator rises.',
          ko:'F-4. Elevator — Indexer Y Front Position\n\nTray 로드/언로드 위치\n\n1. Tray를 Rail 위에 올린다.\n2. Handler ▸ Map ▸ Indexer에서 B/W Clamp와 F/W Clamp를 켜서 Tray를 고정한다. (F/W=Forward Finger Clamp, B/W=Backward Finger Clamp)\n3. Indexer를 움직여 Tray가 Tray Guide에 맞도록 위치시킨다.\n4. F/W Clamp, B/W Clamp 순서로 Unclamp 한다.\n5. Elevator Stacker를 Unclamp 한다.\n6. Elevator를 Up Position으로 이동시켜, Tray가 간섭 없이 올라가는지 확인한다.\n7. 현재 Indexer 위치를 Teach & Save 하여 Front Tray Position으로 저장한다.\n8. 모든 Indexer에 대해 같은 방식으로 반복한다.\n\n⚠ 주의 — Elevator가 올라갈 때 Stacker에 의해 Tray가 손상되지 않도록 주의',
          zhCN:'F-4. Elevator — Indexer Y Front Position\n\nTray装载/卸载位置\n\n1. 将Tray放到Rail上。\n2. 在Handler ▸ Map ▸ Indexer中开启B/W Clamp与F/W Clamp,固定Tray。(F/W=Forward Finger Clamp,B/W=Backward Finger Clamp)\n3. 移动Indexer,使Tray对准Tray Guide。\n4. 按F/W Clamp、B/W Clamp的顺序Unclamp。\n5. 将Elevator Stacker Unclamp。\n6. 将Elevator移动到Up Position,确认Tray能无干涉地升起。\n7. 将当前Indexer位置Teach & Save,保存为Front Tray Position。\n8. 对所有Indexer按相同方式重复操作。\n\n⚠ 注意——Elevator上升时,注意不要让Stacker损伤Tray',
          zhTW:'F-4. Elevator — Indexer Y Front Position\n\nTray裝載/卸載位置\n\n1. 將Tray放到Rail上。\n2. 在Handler ▸ Map ▸ Indexer中開啟B/W Clamp與F/W Clamp,固定Tray。(F/W=Forward Finger Clamp,B/W=Backward Finger Clamp)\n3. 移動Indexer,使Tray對準Tray Guide。\n4. 按F/W Clamp、B/W Clamp的順序Unclamp。\n5. 將Elevator Stacker Unclamp。\n6. 將Elevator移動到Up Position,確認Tray能無干涉地升起。\n7. 將目前Indexer位置Teach & Save,儲存為Front Tray Position。\n8. 對所有Indexer按相同方式重複操作。\n\n⚠ 注意——Elevator上升時,注意不要讓Stacker損傷Tray',
          ja:'F-4. Elevator — Indexer Y Front Position\n\nTrayロード/アンロード位置\n\n1. TrayをRailの上に載せる。\n2. Handler ▸ Map ▸ IndexerでB/W ClampとF/W Clampをオンにし、Trayを固定する。(F/W=Forward Finger Clamp、B/W=Backward Finger Clamp)\n3. Indexerを動かし、TrayがTray Guideに合うように位置させる。\n4. F/W Clamp、B/W Clampの順にUnclampする。\n5. Elevator StackerをUnclampする。\n6. ElevatorをUp Positionへ移動させ、Trayが干渉なく上がるか確認する。\n7. 現在のIndexer位置をTeach & SaveしてFront Tray Positionとして保存する。\n8. すべてのIndexerについて同じ方法で繰り返す。\n\n⚠ 注意 — Elevatorが上がる際、StackerによってTrayが損傷しないよう注意する'
        }},
        {img:cmImg('F','smtv',7),tx:{
          en:'F-5. Load Multi Picker — Pick Position\n\nAlign with the Reference Tray Pin-hole\n\n1. Mount the Teaching Pin on Reference Picker (#6) and turn on the Picker 6 Down Solenoid.\n2. Handler ▸ Map ▸ select Load Multi Picker → move to the X Load Pick Reference Position.\n3. Handler ▸ Map ▸ select Load Indexer → turn on B/W·F/W Clamp to secure the Reference Tray (Load Rail), and move the Indexer to the Multi Picker position.\n4. Lower the Z-axis and confirm the position where the Teaching Pin touches the Reference Tray.\n5. Move the Load Multi Picker\'s X-axis and the Load Indexer so the Teaching Pin aligns with the Reference Tray\'s Pin-hole.\n6. Once aligned, Teach & Save the X-axis position. (The Load Indexer\'s Multi Picker position is saved together.)\n7. Move the X-axis position by 5mm. Lower the Z-axis again to find the point where the Pin touches the Reference Tray, then lower it a further 1mm.\n8. Teach & Save the current Z-axis position as the Z Load Pick Position.\n\n⚠ Caution — Moving the X-axis while the Z-axis is lowered can cause damage.',
          ko:'F-5. Load Multi Picker — Pick Position\n\nReference Tray Pin-hole 정렬\n\n1. Reference Picker(#6)에 Teaching Pin을 장착하고, Picker 6 Down Solenoid를 켠다.\n2. Handler ▸ Map ▸ Load Multi Picker 선택 → X Load Pick Reference Position으로 이동한다.\n3. Handler ▸ Map ▸ Load Indexer 선택 → B/W·F/W Clamp를 켜서 Reference Tray(Load Rail)를 고정하고, Indexer를 Multi Picker 위치로 이동한다.\n4. Z-axis(Z축)를 낮춰 Teaching Pin이 Reference Tray에 닿는 위치를 확인한다.\n5. Load Multi Picker의 X-axis(X축)와 Load Indexer를 움직여, Teaching Pin이 Reference Tray의 Pin-hole과 일치하도록 맞춘다.\n6. 일치하면 X-axis(X축) 위치를 Teach & Save 한다. (Load Indexer의 Multi Picker 위치도 함께 저장된다)\n7. X-axis(X축) 위치를 5mm 이동한다. Z-axis(Z축) 위치를 다시 낮춰 Pin이 Reference Tray에 닿는 지점을 찾은 뒤, 거기서 1mm 더 낮춘다.\n8. 현재 Z-axis(Z축) 위치를 Teach & Save 하여 Z Load Pick Position으로 저장한다.\n\n⚠ 주의 — Z-axis(Z축)를 내린 상태에서 X-axis(X축)를 움직이면 파손될 수 있다',
          zhCN:'F-5. Load Multi Picker — Pick Position\n\n对准Reference Tray Pin-hole\n\n1. 在Reference Picker(#6)上安装Teaching Pin,并开启Picker 6 Down Solenoid。\n2. Handler ▸ Map ▸ 选择Load Multi Picker → 移动到X Load Pick Reference Position。\n3. Handler ▸ Map ▸ 选择Load Indexer → 开启B/W·F/W Clamp固定Reference Tray(Load Rail),并将Indexer移动到Multi Picker位置。\n4. 降低Z-axis,确认Teaching Pin接触Reference Tray的位置。\n5. 移动Load Multi Picker的X-axis与Load Indexer,使Teaching Pin与Reference Tray的Pin-hole对齐。\n6. 对齐后,将X-axis位置Teach & Save。(同时也会保存Load Indexer的Multi Picker位置)\n7. 将X-axis位置移动5mm。再次降低Z-axis,找到Pin接触Reference Tray的位置后,再下降1mm。\n8. 将当前Z-axis位置Teach & Save,保存为Z Load Pick Position。\n\n⚠ 注意——在Z-axis下降状态下移动X-axis可能造成损坏',
          zhTW:'F-5. Load Multi Picker — Pick Position\n\n對準Reference Tray Pin-hole\n\n1. 在Reference Picker(#6)上安裝Teaching Pin,並開啟Picker 6 Down Solenoid。\n2. Handler ▸ Map ▸ 選擇Load Multi Picker → 移動到X Load Pick Reference Position。\n3. Handler ▸ Map ▸ 選擇Load Indexer → 開啟B/W·F/W Clamp固定Reference Tray(Load Rail),並將Indexer移動到Multi Picker位置。\n4. 降低Z-axis,確認Teaching Pin接觸Reference Tray的位置。\n5. 移動Load Multi Picker的X-axis與Load Indexer,使Teaching Pin與Reference Tray的Pin-hole對齊。\n6. 對齊後,將X-axis位置Teach & Save。(同時也會儲存Load Indexer的Multi Picker位置)\n7. 將X-axis位置移動5mm。再次降低Z-axis,找到Pin接觸Reference Tray的位置後,再下降1mm。\n8. 將目前Z-axis位置Teach & Save,儲存為Z Load Pick Position。\n\n⚠ 注意——在Z-axis下降狀態下移動X-axis可能造成損壞',
          ja:'F-5. Load Multi Picker — Pick Position\n\nReference Tray Pin-hole位置合わせ\n\n1. Reference Picker(#6)にTeaching Pinを装着し、Picker 6 Down Solenoidをオンにする。\n2. Handler ▸ Map ▸ Load Multi Pickerを選択 → X Load Pick Reference Positionへ移動する。\n3. Handler ▸ Map ▸ Load Indexerを選択 → B/W・F/W ClampをオンにしてReference Tray(Load Rail)を固定し、IndexerをMulti Picker位置へ移動する。\n4. Z-axis(Z軸)を下げ、Teaching PinがReference Trayに接触する位置を確認する。\n5. Load Multi PickerのX-axis(X軸)とLoad Indexerを動かし、Teaching PinがReference TrayのPin-holeと一致するように合わせる。\n6. 一致したらX-axis(X軸)位置をTeach & Saveする。(Load IndexerのMulti Picker位置も一緒に保存される)\n7. X-axis(X軸)位置を5mm移動する。Z-axis(Z軸)位置を再度下げてPinがReference Trayに接触する点を見つけた後、そこからさらに1mm下げる。\n8. 現在のZ-axis(Z軸)位置をTeach & SaveしてZ Load Pick Positionとして保存する。\n\n⚠ 注意 — Z-axis(Z軸)を下げた状態でX-axis(X軸)を動かすと破損する恐れがある'
        }},
        {img:cmImg('F','smtv',8),tx:{
          en:'F-6. Unload Multi Picker — Place Position\n\nAlign with the Reference Tray Pin-hole (offset direction is opposite of Place)\n\n1. Mount the Teaching Pin on Reference Picker (#6) and turn on the Picker 6 Down Solenoid.\n2. Handler ▸ Map ▸ select Unload Multi Picker → move to the X Empty Indexer Place Position.\n3. Handler ▸ Map ▸ select Empty Indexer → turn on B/W·F/W Clamp to secure the Reference Tray (Empty Rail), and move the Indexer to the Multi Picker unit-receiving position.\n4. Lower the Z-axis and confirm the position where the Teaching Pin touches the Reference Tray.\n5. Move the Unload Multi Picker\'s X-axis and the Empty Indexer so the Teaching Pin aligns with the Reference Tray\'s Pin-hole.\n6. Once aligned, Teach & Save the X-axis position.\n7. Move the X-axis position by 5mm. Lower the Z-axis again to find the point where the Pin touches the Reference Tray, then raise it 1mm from there. (Opposite direction from Pick — so it doesn\'t press too hard when placing.)\n8. Teach & Save the current Z-axis position as the Z Empty Indexer Place Position.\n\n⚠ Caution — Moving the X-axis while the Z-axis is lowered can cause damage.',
          ko:'F-6. Unload Multi Picker — Place Position\n\nReference Tray Pin-hole 정렬 (Place 방향 반대)\n\n1. Reference Picker(#6)에 Teaching Pin을 장착하고, Picker 6 Down Solenoid를 켠다.\n2. Handler ▸ Map ▸ Unload Multi Picker 선택 → X Empty Indexer Place Position으로 이동한다.\n3. Handler ▸ Map ▸ Empty Indexer 선택 → B/W·F/W Clamp를 켜서 Reference Tray(Empty Rail)를 고정하고, Indexer를 Multi Picker 유닛 수령 위치로 이동한다.\n4. Z-axis(Z축)를 낮춰 Teaching Pin이 Reference Tray에 닿는 위치를 확인한다.\n5. Unload Multi Picker의 X-axis(X축)와 Empty Indexer를 움직여, Teaching Pin이 Reference Tray의 Pin-hole과 일치하도록 맞춘다.\n6. 일치하면 X-axis(X축) 위치를 Teach & Save 한다.\n7. X-axis(X축) 위치를 5mm 이동한다. Z-axis(Z축) 위치를 다시 낮춰 Pin이 Reference Tray에 닿는 지점을 찾은 뒤, 거기서 1mm 올린다. (Pick과 반대 방향 — 내려놓을 때 너무 세게 누르지 않도록)\n8. 현재 Z-axis(Z축) 위치를 Teach & Save 하여 Z Empty Indexer Place Position으로 저장한다.\n\n⚠ 주의 — Z-axis(Z축)를 내린 상태에서 X-axis(X축)를 움직이면 파손될 수 있다',
          zhCN:'F-6. Unload Multi Picker — Place Position\n\n對準Reference Tray Pin-hole(与Place方向相反)\n\n1. 在Reference Picker(#6)上安装Teaching Pin,并开启Picker 6 Down Solenoid。\n2. Handler ▸ Map ▸ 选择Unload Multi Picker → 移动到X Empty Indexer Place Position。\n3. Handler ▸ Map ▸ 选择Empty Indexer → 开启B/W·F/W Clamp固定Reference Tray(Empty Rail),并将Indexer移动到Multi Picker接收位置。\n4. 降低Z-axis,确认Teaching Pin接触Reference Tray的位置。\n5. 移动Unload Multi Picker的X-axis与Empty Indexer,使Teaching Pin与Reference Tray的Pin-hole对齐。\n6. 对齐后,将X-axis位置Teach & Save。\n7. 将X-axis位置移动5mm。再次降低Z-axis,找到Pin接触Reference Tray的位置后,从该处上升1mm。(与Pick方向相反——放下时避免按压过重)\n8. 将当前Z-axis位置Teach & Save,保存为Z Empty Indexer Place Position。\n\n⚠ 注意——在Z-axis下降状态下移动X-axis可能造成损坏',
          zhTW:'F-6. Unload Multi Picker — Place Position\n\n對準Reference Tray Pin-hole(與Place方向相反)\n\n1. 在Reference Picker(#6)上安裝Teaching Pin,並開啟Picker 6 Down Solenoid。\n2. Handler ▸ Map ▸ 選擇Unload Multi Picker → 移動到X Empty Indexer Place Position。\n3. Handler ▸ Map ▸ 選擇Empty Indexer → 開啟B/W·F/W Clamp固定Reference Tray(Empty Rail),並將Indexer移動到Multi Picker接收位置。\n4. 降低Z-axis,確認Teaching Pin接觸Reference Tray的位置。\n5. 移動Unload Multi Picker的X-axis與Empty Indexer,使Teaching Pin與Reference Tray的Pin-hole對齊。\n6. 對齊後,將X-axis位置Teach & Save。\n7. 將X-axis位置移動5mm。再次降低Z-axis,找到Pin接觸Reference Tray的位置後,從該處上升1mm。(與Pick方向相反——放下時避免按壓過重)\n8. 將目前Z-axis位置Teach & Save,儲存為Z Empty Indexer Place Position。\n\n⚠ 注意——在Z-axis下降狀態下移動X-axis可能造成損壞',
          ja:'F-6. Unload Multi Picker — Place Position\n\nReference Tray Pin-hole位置合わせ(Placeは方向が逆)\n\n1. Reference Picker(#6)にTeaching Pinを装着し、Picker 6 Down Solenoidをオンにする。\n2. Handler ▸ Map ▸ Unload Multi Pickerを選択 → X Empty Indexer Place Positionへ移動する。\n3. Handler ▸ Map ▸ Empty Indexerを選択 → B/W・F/W ClampをオンにしてReference Tray(Empty Rail)を固定し、IndexerをMulti Picker受け取り位置へ移動する。\n4. Z-axis(Z軸)を下げ、Teaching PinがReference Trayに接触する位置を確認する。\n5. Unload Multi PickerのX-axis(X軸)とEmpty Indexerを動かし、Teaching PinがReference TrayのPin-holeと一致するように合わせる。\n6. 一致したらX-axis(X軸)位置をTeach & Saveする。\n7. X-axis(X軸)位置を5mm移動する。Z-axis(Z軸)位置を再度下げてPinがReference Trayに接触する点を見つけた後、そこから1mm上げる。(Pickと反対方向 — 置く際に強く押しすぎないように)\n8. 現在のZ-axis(Z軸)位置をTeach & SaveしてZ Empty Indexer Place Positionとして保存する。\n\n⚠ 注意 — Z-axis(Z軸)を下げた状態でX-axis(X軸)を動かすと破損する恐れがある'
        }},
        {img:cmImg('F','smtv',9),tx:{
          en:'F-7. Aligner — Jig Multi Picker Position\n\nTeaching the relationship with the Jig Multi Picker\n\n1. Mount the Jig on the Aligner.\n2. Mount the Teaching Pin on Reference Picker (#6) and turn on the Picker 6 Down Solenoid.\n3. Handler ▸ Map ▸ select Jig Multi Picker & Aligner → move to the X Align Pick Position & Y Align Multi Picker Position.\n4. Move the X-axis, Y-axis, and Z-axis so the Aligner\'s Pin-hole aligns with the Teaching Pin.\n5. Teach & Save the aligned position.\n6. Move the Teaching Pin to the Aligner\'s flat surface position and lower it until it touches the surface. Once it touches, lower the Z-axis a further 1mm and Teach & Save as the Z Align Pick Position.',
          ko:'F-7. Aligner — Jig Multi Picker Position\n\nJig Multi Picker와의 관계성 Teaching\n\n1. Aligner에 Jig를 설치한다.\n2. Reference Picker(#6)에 Teaching Pin을 장착하고, Picker 6 Down Solenoid를 켠다.\n3. Handler ▸ Map ▸ Jig Multi Picker & Aligner 선택 → X Align Pick Position & Y Align Multi Picker Position으로 이동한다.\n4. X-axis(X축), Y-axis(Y축), Z-axis(Z축) 위치를 움직여 Aligner의 Pin-hole과 Teaching Pin이 일치하도록 맞춘다.\n5. 일치하는 위치를 Teach & Save 한다.\n6. Teaching Pin을 Aligner 평면 위치로 이동시켜, 평면에 닿을 때까지 내린다. 닿으면 Z-axis(Z축) 위치를 1mm 더 낮춰 Z Align Pick Position으로 Teach & Save 한다.',
          zhCN:'F-7. Aligner — Jig Multi Picker Position\n\n与Jig Multi Picker的关系Teaching\n\n1. 在Aligner上安装Jig。\n2. 在Reference Picker(#6)上安装Teaching Pin,并开启Picker 6 Down Solenoid。\n3. Handler ▸ Map ▸ 选择Jig Multi Picker & Aligner → 移动到X Align Pick Position & Y Align Multi Picker Position。\n4. 移动X-axis、Y-axis、Z-axis位置,使Aligner的Pin-hole与Teaching Pin对齐。\n5. 将对齐的位置Teach & Save。\n6. 将Teaching Pin移动到Aligner平面位置,下降直至接触平面。接触后,将Z-axis位置再下降1mm,并Teach & Save为Z Align Pick Position。',
          zhTW:'F-7. Aligner — Jig Multi Picker Position\n\n與Jig Multi Picker的關係Teaching\n\n1. 在Aligner上安裝Jig。\n2. 在Reference Picker(#6)上安裝Teaching Pin,並開啟Picker 6 Down Solenoid。\n3. Handler ▸ Map ▸ 選擇Jig Multi Picker & Aligner → 移動到X Align Pick Position & Y Align Multi Picker Position。\n4. 移動X-axis、Y-axis、Z-axis位置,使Aligner的Pin-hole與Teaching Pin對齊。\n5. 將對齊的位置Teach & Save。\n6. 將Teaching Pin移動到Aligner平面位置,下降直至接觸平面。接觸後,將Z-axis位置再下降1mm,並Teach & Save為Z Align Pick Position。',
          ja:'F-7. Aligner — Jig Multi Picker Position\n\nJig Multi Pickerとの関係性Teaching\n\n1. AlignerにJigを設置する。\n2. Reference Picker(#6)にTeaching Pinを装着し、Picker 6 Down Solenoidをオンにする。\n3. Handler ▸ Map ▸ Jig Multi Picker & Alignerを選択 → X Align Pick Position & Y Align Multi Picker Positionへ移動する。\n4. X-axis(X軸)、Y-axis(Y軸)、Z-axis(Z軸)位置を動かし、AlignerのPin-holeとTeaching Pinが一致するように合わせる。\n5. 一致した位置をTeach & Saveする。\n6. Teaching PinをAligner平面位置へ移動させ、平面に触れるまで下げる。触れたらZ-axis(Z軸)位置をさらに1mm下げ、Z Align Pick PositionとしてTeach & Saveする。'
        }},
        {img:cmImg('F','smtv',10),tx:{
          en:'F-8. Aligner — Load Multi Picker Position\n\nTeaching the relationship with the Load Multi Picker\n\n1. Mount the Jig on the Aligner.\n2. Mount the Teaching Pin on Reference Picker (#6) and turn on the Picker 6 Down Solenoid.\n3. Handler ▸ Map ▸ select Load Multi Picker & Aligner → move to the X Align Place Position & Y Load Multi Picker Position.\n4. Move the X-axis, Y-axis, and Z-axis so the Aligner\'s Pin-hole aligns with the Teaching Pin.\n5. Teach & Save the aligned position.\n6. Move the Teaching Pin to the Aligner\'s flat surface position and lower it until it touches the surface. Once it touches, raise the Z-axis 1mm and Teach & Save as the Z Aligner Place Position.',
          ko:'F-8. Aligner — Load Multi Picker Position\n\nLoad Multi Picker와의 관계성 Teaching\n\n1. Aligner에 Jig를 설치한다.\n2. Reference Picker(#6)에 Teaching Pin을 장착하고, Picker 6 Down Solenoid를 켠다.\n3. Handler ▸ Map ▸ Load Multi Picker & Aligner 선택 → X Align Place Position & Y Load Multi Picker Position으로 이동한다.\n4. X-axis(X축), Y-axis(Y축), Z-axis(Z축) 위치를 움직여 Aligner의 Pin-hole과 Teaching Pin이 일치하도록 맞춘다.\n5. 일치하는 위치를 Teach & Save 한다.\n6. Teaching Pin을 Aligner 평면 위치로 이동시켜, 평면에 닿을 때까지 내린다. 닿으면 Z-axis(Z축) 위치를 1mm 올려 Z Aligner Place Position으로 Teach & Save 한다.',
          zhCN:'F-8. Aligner — Load Multi Picker Position\n\n与Load Multi Picker的关系Teaching\n\n1. 在Aligner上安装Jig。\n2. 在Reference Picker(#6)上安装Teaching Pin,并开启Picker 6 Down Solenoid。\n3. Handler ▸ Map ▸ 选择Load Multi Picker & Aligner → 移动到X Align Place Position & Y Load Multi Picker Position。\n4. 移动X-axis、Y-axis、Z-axis位置,使Aligner的Pin-hole与Teaching Pin对齐。\n5. 将对齐的位置Teach & Save。\n6. 将Teaching Pin移动到Aligner平面位置,下降直至接触平面。接触后,将Z-axis位置上升1mm,并Teach & Save为Z Aligner Place Position。',
          zhTW:'F-8. Aligner — Load Multi Picker Position\n\n與Load Multi Picker的關係Teaching\n\n1. 在Aligner上安裝Jig。\n2. 在Reference Picker(#6)上安裝Teaching Pin,並開啟Picker 6 Down Solenoid。\n3. Handler ▸ Map ▸ 選擇Load Multi Picker & Aligner → 移動到X Align Place Position & Y Load Multi Picker Position。\n4. 移動X-axis、Y-axis、Z-axis位置,使Aligner的Pin-hole與Teaching Pin對齊。\n5. 將對齊的位置Teach & Save。\n6. 將Teaching Pin移動到Aligner平面位置,下降直至接觸平面。接觸後,將Z-axis位置上升1mm,並Teach & Save為Z Aligner Place Position。',
          ja:'F-8. Aligner — Load Multi Picker Position\n\nLoad Multi Pickerとの関係性Teaching\n\n1. AlignerにJigを設置する。\n2. Reference Picker(#6)にTeaching Pinを装着し、Picker 6 Down Solenoidをオンにする。\n3. Handler ▸ Map ▸ Load Multi Picker & Alignerを選択 → X Align Place Position & Y Load Multi Picker Positionへ移動する。\n4. X-axis(X軸)、Y-axis(Y軸)、Z-axis(Z軸)位置を動かし、AlignerのPin-holeとTeaching Pinが一致するように合わせる。\n5. 一致した位置をTeach & Saveする。\n6. Teaching PinをAligner平面位置へ移動させ、平面に触れるまで下げる。触れたらZ-axis(Z軸)位置を1mm上げ、Z Aligner Place PositionとしてTeach & Saveする。'
        }},
        {img:cmImg('F','smtv',11),tx:{
          en:'F-9. Aligner — Adapter at Home\n\nTeaching the X/Y home position\n\n1. Handler ▸ Map ▸ select Align X at Home & Align Y at Home → click Home.\n2. Measure the distance with a ruler.\n3. Enter the measured distance and click Apply.\n\nCheck point — After pushing, confirm the unit seats firmly against the Guide Block; correct with the Align Grip X-axis/Y-axis Offset.',
          ko:'F-9. Aligner — Adapter at Home\n\nX/Y 원점(Home) Teaching\n\n1. Handler ▸ Map ▸ Align X at Home & Align Y at Home 선택 → Home을 클릭한다.\n2. 자(ruler)로 거리를 측정한다.\n3. 측정된 거리를 입력하고 Apply 한다.\n\n확인 포인트 — Push 후 유닛이 Guide Block에 잘 밀착되는지 확인, Align Grip X-axis(X축)·Y-axis(Y축) Offset으로 보정',
          zhCN:'F-9. Aligner — Adapter at Home\n\nX/Y原点(Home)Teaching\n\n1. Handler ▸ Map ▸ 选择Align X at Home & Align Y at Home → 点击Home。\n2. 用尺(ruler)测量距离。\n3. 输入测得的距离并点击Apply。\n\n确认要点——Push后确认Unit是否与Guide Block紧密贴合,以Align Grip X-axis·Y-axis Offset进行校正',
          zhTW:'F-9. Aligner — Adapter at Home\n\nX/Y原點(Home)Teaching\n\n1. Handler ▸ Map ▸ 選擇Align X at Home & Align Y at Home → 點擊Home。\n2. 用尺(ruler)測量距離。\n3. 輸入測得的距離並點擊Apply。\n\n確認要點——Push後確認Unit是否與Guide Block緊密貼合,以Align Grip X-axis·Y-axis Offset進行校正',
          ja:'F-9. Aligner — Adapter at Home\n\nX/Y原点(Home)Teaching\n\n1. Handler ▸ Map ▸ Align X at Home & Align Y at Homeを選択 → Homeをクリックする。\n2. 定規(ruler)で距離を測定する。\n3. 測定した距離を入力しApplyする。\n\n確認ポイント — Push後、UnitがGuide Blockにしっかり密着しているか確認し、Align Grip X-axis(X軸)・Y-axis(Y軸) Offsetで補正する'
        }},
        {img:cmImg('F','smtv',12),tx:{
          en:'F-10. Pedestal — Jig Multi Picker Position\n\nTeaching the relationship with the Jig Multi Picker\n\n1. Install the Pedestal.\n2. Mount the Teaching Pin on Reference Picker (#6) and turn on the Picker 6 Down Solenoid.\n3. Handler ▸ Map ▸ select Jig Multi Picker & Pedestal → move to the X Pedestal Place Position & Loading Position.\n4. Move the X-axis, Y-axis, and Z-axis so the Pedestal\'s Pin-hole aligns with the Teaching Pin.\n5. Teach & Save the aligned position.\n6. Move the Teaching Pin to the Pedestal\'s flat surface position and lower it until it touches the surface. Once it touches, lower the Z-axis a further 1mm and Teach & Save as the Z Jig Place Position.',
          ko:'F-10. Pedestal — Jig Multi Picker Position\n\nJig Multi Picker와의 관계성 Teaching\n\n1. Pedestal을 설치한다.\n2. Reference Picker(#6)에 Teaching Pin을 장착하고, Picker 6 Down Solenoid를 켠다.\n3. Handler ▸ Map ▸ Jig Multi Picker & Pedestal 선택 → X Pedestal Place Position & Loading Position으로 이동한다.\n4. X-axis(X축), Y-axis(Y축), Z-axis(Z축) 위치를 움직여 Pedestal의 Pin-hole과 Teaching Pin이 일치하도록 맞춘다.\n5. 일치하는 위치를 Teach & Save 한다.\n6. Teaching Pin을 Pedestal 평면 위치로 이동시켜, 평면에 닿을 때까지 내린다. 닿으면 Z-axis(Z축) 위치를 1mm 더 낮춰 Z Jig Place Position으로 Teach & Save 한다.',
          zhCN:'F-10. Pedestal — Jig Multi Picker Position\n\n与Jig Multi Picker的关系Teaching\n\n1. 安装Pedestal。\n2. 在Reference Picker(#6)上安装Teaching Pin,并开启Picker 6 Down Solenoid。\n3. Handler ▸ Map ▸ 选择Jig Multi Picker & Pedestal → 移动到X Pedestal Place Position & Loading Position。\n4. 移动X-axis、Y-axis、Z-axis位置,使Pedestal的Pin-hole与Teaching Pin对齐。\n5. 将对齐的位置Teach & Save。\n6. 将Teaching Pin移动到Pedestal平面位置,下降直至接触平面。接触后,将Z-axis位置再下降1mm,并Teach & Save为Z Jig Place Position。',
          zhTW:'F-10. Pedestal — Jig Multi Picker Position\n\n與Jig Multi Picker的關係Teaching\n\n1. 安裝Pedestal。\n2. 在Reference Picker(#6)上安裝Teaching Pin,並開啟Picker 6 Down Solenoid。\n3. Handler ▸ Map ▸ 選擇Jig Multi Picker & Pedestal → 移動到X Pedestal Place Position & Loading Position。\n4. 移動X-axis、Y-axis、Z-axis位置,使Pedestal的Pin-hole與Teaching Pin對齊。\n5. 將對齊的位置Teach & Save。\n6. 將Teaching Pin移動到Pedestal平面位置,下降直至接觸平面。接觸後,將Z-axis位置再下降1mm,並Teach & Save為Z Jig Place Position。',
          ja:'F-10. Pedestal — Jig Multi Picker Position\n\nJig Multi Pickerとの関係性Teaching\n\n1. Pedestalを設置する。\n2. Reference Picker(#6)にTeaching Pinを装着し、Picker 6 Down Solenoidをオンにする。\n3. Handler ▸ Map ▸ Jig Multi Picker & Pedestalを選択 → X Pedestal Place Position & Loading Positionへ移動する。\n4. X-axis(X軸)、Y-axis(Y軸)、Z-axis(Z軸)位置を動かし、PedestalのPin-holeとTeaching Pinが一致するように合わせる。\n5. 一致した位置をTeach & Saveする。\n6. Teaching PinをPedestal平面位置へ移動させ、平面に触れるまで下げる。触れたらZ-axis(Z軸)位置をさらに1mm下げ、Z Jig Place PositionとしてTeach & Saveする。'
        }},
        {img:cmImg('F','smtv',13),tx:{
          en:'F-11. Pedestal — Unload Multi Picker Position\n\nTeaching the relationship with the Unload Multi Picker\n\n1. Install the Pedestal.\n2. Mount the Teaching Pin on Reference Picker (#6) and turn on the Picker 6 Down Solenoid.\n3. Handler ▸ Map ▸ select Unload Multi Picker & Pedestal → move to the X Pedestal Pick Position & Unload Multi Picker Position.\n4. Move the X-axis, Y-axis, and Z-axis so the Pedestal\'s Pin-hole aligns with the Teaching Pin.\n5. Teach & Save the aligned position.\n6. Move the Teaching Pin to the Pedestal\'s flat surface position and lower it until it touches the surface. Once it touches, lower the Z-axis a further 1mm and Teach & Save as the Z Pedestal Pick Position.',
          ko:'F-11. Pedestal — Unload Multi Picker Position\n\nUnload Multi Picker와의 관계성 Teaching\n\n1. Pedestal을 설치한다.\n2. Reference Picker(#6)에 Teaching Pin을 장착하고, Picker 6 Down Solenoid를 켠다.\n3. Handler ▸ Map ▸ Unload Multi Picker & Pedestal 선택 → X Pedestal Pick Position & Unload Multi Picker Position으로 이동한다.\n4. X-axis(X축), Y-axis(Y축), Z-axis(Z축) 위치를 움직여 Pedestal의 Pin-hole과 Teaching Pin이 일치하도록 맞춘다.\n5. 일치하는 위치를 Teach & Save 한다.\n6. Teaching Pin을 Pedestal 평면 위치로 이동시켜, 평면에 닿을 때까지 내린다. 닿으면 Z-axis(Z축) 위치를 1mm 더 낮춰 Z Pedestal Pick Position으로 Teach & Save 한다.',
          zhCN:'F-11. Pedestal — Unload Multi Picker Position\n\n与Unload Multi Picker的关系Teaching\n\n1. 安装Pedestal。\n2. 在Reference Picker(#6)上安装Teaching Pin,并开启Picker 6 Down Solenoid。\n3. Handler ▸ Map ▸ 选择Unload Multi Picker & Pedestal → 移动到X Pedestal Pick Position & Unload Multi Picker Position。\n4. 移动X-axis、Y-axis、Z-axis位置,使Pedestal的Pin-hole与Teaching Pin对齐。\n5. 将对齐的位置Teach & Save。\n6. 将Teaching Pin移动到Pedestal平面位置,下降直至接触平面。接触后,将Z-axis位置再下降1mm,并Teach & Save为Z Pedestal Pick Position。',
          zhTW:'F-11. Pedestal — Unload Multi Picker Position\n\n與Unload Multi Picker的關係Teaching\n\n1. 安裝Pedestal。\n2. 在Reference Picker(#6)上安裝Teaching Pin,並開啟Picker 6 Down Solenoid。\n3. Handler ▸ Map ▸ 選擇Unload Multi Picker & Pedestal → 移動到X Pedestal Pick Position & Unload Multi Picker Position。\n4. 移動X-axis、Y-axis、Z-axis位置,使Pedestal的Pin-hole與Teaching Pin對齊。\n5. 將對齊的位置Teach & Save。\n6. 將Teaching Pin移動到Pedestal平面位置,下降直至接觸平面。接觸後,將Z-axis位置再下降1mm,並Teach & Save為Z Pedestal Pick Position。',
          ja:'F-11. Pedestal — Unload Multi Picker Position\n\nUnload Multi Pickerとの関係性Teaching\n\n1. Pedestalを設置する。\n2. Reference Picker(#6)にTeaching Pinを装着し、Picker 6 Down Solenoidをオンにする。\n3. Handler ▸ Map ▸ Unload Multi Picker & Pedestalを選択 → X Pedestal Pick Position & Unload Multi Picker Positionへ移動する。\n4. X-axis(X軸)、Y-axis(Y軸)、Z-axis(Z軸)位置を動かし、PedestalのPin-holeとTeaching Pinが一致するように合わせる。\n5. 一致した位置をTeach & Saveする。\n6. Teaching PinをPedestal平面位置へ移動させ、平面に触れるまで下げる。触れたらZ-axis(Z軸)位置をさらに1mm下げ、Z Pedestal Pick PositionとしてTeach & Saveする。'
        }},
        {img:cmImg('F','smtv',14),tx:{
          en:'F-12. TTM (Tray Transfer Module)\n\nTeaching for the left/right Cylinder Rails\n\n1. Handler ▸ Map ▸ select Load Indexer 1 or 2 → move to the Rear Tray Position with the Tray clamped.\n2. Handler ▸ Map ▸ select TTM → move the TTM to the X Load Position and lower the TTM Left Cylinder.\n3. Slowly lower the Z-axis and confirm the Left Cylinder\'s X-axis position is centered on the Load Rail.\n4. Teach & Save the current X-axis position as the X Load Position. Teach every X-axis position (per Rail) of the TTM the same way.\n5. Lower the TTM so the gap between the Ball Bushing and Stopper is 1–2mm.\n6. Teach & Save the current Z-axis position as the Z Load Position. Teach every Z-axis position the same way.\n7. Move the Indexer so the Plate edge aligns with the Tray edge.\n8. Teach & Save the current Y-axis position as the Y Rear Tray Position. Teach every Y-axis position of the TTM the same way.\n\n⚠ Caution — Never lower the left and right Cylinders at the same time (risk of damage); each Rail uses a different Cylinder.',
          ko:'F-12. TTM (Tray Transfer Module)\n\n좌/우 Cylinder Rail별 Teaching\n\n1. Handler ▸ Map ▸ Load Indexer 1 또는 2 선택 → Tray를 Clamp한 채로 Rear Tray Position으로 이동한다.\n2. Handler ▸ Map ▸ TTM 선택 → TTM을 X Load Position으로 이동시키고, TTM Left Cylinder를 내린다.\n3. Z-axis(Z축)를 천천히 내리며, Left Cylinder의 X-axis(X축) 위치가 Load Rail 중앙에 위치하는지 확인한다.\n4. 현재 X-axis(X축) 위치를 Teach & Save 하여 X Load Position으로 저장한다. TTM의 모든 X-axis(X축) 위치(Rail별)를 같은 방식으로 Teaching한다.\n5. Ball Bushing과 Stopper 사이 간격이 1~2mm가 되도록 TTM을 내린다.\n6. 현재 Z-axis(Z축) 위치를 Teach & Save 하여 Z Load Position으로 저장한다. 모든 Z-axis(Z축) 위치도 같은 방식으로 Teaching한다.\n7. Indexer를 움직여, Plate 끝과 Tray 끝이 일치하도록 한다.\n8. 현재 Y-axis(Y축) 위치를 Teach & Save 하여 Y Rear Tray Position으로 저장한다. TTM의 모든 Y-axis(Y축) 위치도 같은 방식으로 Teaching한다.\n\n⚠ 주의 — 좌·우 Cylinder 동시 하강 금지(파손 위험), Rail마다 Cylinder가 다름',
          zhCN:'F-12. TTM (Tray Transfer Module)\n\n左右Cylinder Rail各自Teaching\n\n1. Handler ▸ Map ▸ 选择Load Indexer 1或2 → 在Tray保持Clamp的状态下移动到Rear Tray Position。\n2. Handler ▸ Map ▸ 选择TTM → 将TTM移动到X Load Position,并放下TTM Left Cylinder。\n3. 缓慢降低Z-axis,确认Left Cylinder的X-axis位置是否位于Load Rail中央。\n4. 将当前X-axis位置Teach & Save,保存为X Load Position。TTM的所有X-axis位置(按Rail)均以相同方式进行Teaching。\n5. 降低TTM,使Ball Bushing与Stopper之间的间隙达到1~2mm。\n6. 将当前Z-axis位置Teach & Save,保存为Z Load Position。所有Z-axis位置也以相同方式进行Teaching。\n7. 移动Indexer,使Plate边缘与Tray边缘对齐。\n8. 将当前Y-axis位置Teach & Save,保存为Y Rear Tray Position。TTM的所有Y-axis位置也以相同方式进行Teaching。\n\n⚠ 注意——严禁左右Cylinder同时下降(有损坏风险),每个Rail对应的Cylinder不同',
          zhTW:'F-12. TTM (Tray Transfer Module)\n\n左右Cylinder Rail各自Teaching\n\n1. Handler ▸ Map ▸ 選擇Load Indexer 1或2 → 在Tray保持Clamp的狀態下移動到Rear Tray Position。\n2. Handler ▸ Map ▸ 選擇TTM → 將TTM移動到X Load Position,並放下TTM Left Cylinder。\n3. 緩慢降低Z-axis,確認Left Cylinder的X-axis位置是否位於Load Rail中央。\n4. 將目前X-axis位置Teach & Save,儲存為X Load Position。TTM的所有X-axis位置(按Rail)均以相同方式進行Teaching。\n5. 降低TTM,使Ball Bushing與Stopper之間的間隙達到1~2mm。\n6. 將目前Z-axis位置Teach & Save,儲存為Z Load Position。所有Z-axis位置也以相同方式進行Teaching。\n7. 移動Indexer,使Plate邊緣與Tray邊緣對齊。\n8. 將目前Y-axis位置Teach & Save,儲存為Y Rear Tray Position。TTM的所有Y-axis位置也以相同方式進行Teaching。\n\n⚠ 注意——嚴禁左右Cylinder同時下降(有損壞風險),每個Rail對應的Cylinder不同',
          ja:'F-12. TTM (Tray Transfer Module)\n\n左右Cylinder・Railごとのteaching\n\n1. Handler ▸ Map ▸ Load Indexer 1または2を選択 → TrayをClampしたままRear Tray Positionへ移動する。\n2. Handler ▸ Map ▸ TTMを選択 → TTMをX Load Positionへ移動させ、TTM Left Cylinderを下げる。\n3. Z-axis(Z軸)をゆっくり下げながら、Left CylinderのX-axis(X軸)位置がLoad Railの中央に位置するか確認する。\n4. 現在のX-axis(X軸)位置をTeach & SaveしてX Load Positionとして保存する。TTMのすべてのX-axis(X軸)位置(Railごと)を同じ方法でTeachingする。\n5. Ball BushingとStopperの間隔が1~2mmになるようTTMを下げる。\n6. 現在のZ-axis(Z軸)位置をTeach & SaveしてZ Load Positionとして保存する。すべてのZ-axis(Z軸)位置も同じ方法でTeachingする。\n7. Indexerを動かし、Plateの端とTrayの端が一致するようにする。\n8. 現在のY-axis(Y軸)位置をTeach & SaveしてY Rear Tray Positionとして保存する。TTMのすべてのY-axis(Y軸)位置も同じ方法でTeachingする。\n\n⚠ 注意 — 左右のCylinderを同時に下降させないこと(破損の危険)、Railごとにcylinderが異なる'
        }},
        {img:cmImg('F','smtv',15),tx:{
          en:'F-13. MSM (Multi Sorter Module)\n\nGood/Buffer/Reject Rail Teaching\n\n1. Mount the Teaching Pin on the Multi Sorter Left Picker.\n2. Handler ▸ Map ▸ select Indexer (Good1, Good2, Buffer, Reject1, Reject2) → place the Reference Tray on the Rail and clamp it, then move the Indexer to the Multi Sorter position.\n3. Handler ▸ Map ▸ select MSM → move the MSM to the X-axis position to be taught, and turn on the Left Picker Down Solenoid.\n4. Lower the Z-axis so the Teaching Pin touches the Reference Tray, then move the MSM\'s X-axis position and the Indexer\'s Y-axis position so the Pin aligns with the Pin-hole.\n5. Once aligned, Teach & Save the MSM and Indexer Rail positions. Repeat the same way for Good1, Good2, Buffer, Reject1, and Reject2.\n6. Move the Teaching Pin to the Reference Tray\'s flat surface position and lower it until it touches the surface.\n7. If, for example, the contact position is 16mm on the Z-axis, Teach & Save the Z Pick Position as 17mm (contact position +1mm) and the Z Place Position as 15mm (contact position −1mm).\n\n⚠ Caution — The X-axis cannot move while the Z-axis is lowered.',
          ko:'F-13. MSM (Multi Sorter Module)\n\nGood/Buffer/Reject Rail Teaching\n\n1. Multi Sorter Left Picker에 Teaching Pin을 장착한다.\n2. Handler ▸ Map ▸ Indexer(Good1, Good2, Buffer, Reject1, Reject2) 선택 → Reference Tray를 Rail에 놓고 Clamp한 뒤, Indexer를 Multi Sorter 위치로 이동한다.\n3. Handler ▸ Map ▸ MSM 선택 → Teaching할 X-axis(X축) 위치로 MSM을 이동시키고, Left Picker Down Solenoid를 켠다.\n4. Z-axis(Z축)를 낮춰 Teaching Pin이 Reference Tray에 닿게 한 뒤, MSM의 X-axis(X축) 위치와 Indexer의 Y-axis(Y축) 위치를 움직여 Pin과 Pin-hole이 일치하도록 맞춘다.\n5. 일치하면 MSM과 Indexer의 Rail 위치를 Teach & Save 한다. Good1·Good2·Buffer·Reject1·Reject2 모두 같은 방식으로 반복한다.\n6. Teaching Pin 위치를 Reference Tray 평면으로 이동시켜, 평면에 닿을 때까지 내린다.\n7. 접촉 위치가 예를 들어 Z-axis(Z축) 16mm라면, Z Pick Position은 17mm(접촉 위치+1mm), Z Place Position은 15mm(접촉 위치−1mm)로 Teach & Save 한다.\n\n⚠ 주의 — Z-axis(Z축)를 내린 상태에서는 X-axis(X축)가 움직이지 않는다',
          zhCN:'F-13. MSM (Multi Sorter Module)\n\nGood/Buffer/Reject Rail Teaching\n\n1. 在Multi Sorter Left Picker上安装Teaching Pin。\n2. Handler ▸ Map ▸ 选择Indexer(Good1、Good2、Buffer、Reject1、Reject2) → 将Reference Tray放到Rail上并Clamp,然后将Indexer移动到Multi Sorter位置。\n3. Handler ▸ Map ▸ 选择MSM → 将MSM移动到要Teaching的X-axis位置,并开启Left Picker Down Solenoid。\n4. 降低Z-axis,使Teaching Pin接触Reference Tray,然后移动MSM的X-axis位置与Indexer的Y-axis位置,使Pin与Pin-hole对齐。\n5. 对齐后,将MSM与Indexer的Rail位置Teach & Save。Good1·Good2·Buffer·Reject1·Reject2均以相同方式重复。\n6. 将Teaching Pin移动到Reference Tray平面位置,下降直至接触平面。\n7. 若接触位置例如为Z-axis 16mm,则将Z Pick Position设为17mm(接触位置+1mm),Z Place Position设为15mm(接触位置−1mm)并Teach & Save。\n\n⚠ 注意——Z-axis处于下降状态时,X-axis无法移动',
          zhTW:'F-13. MSM (Multi Sorter Module)\n\nGood/Buffer/Reject Rail Teaching\n\n1. 在Multi Sorter Left Picker上安裝Teaching Pin。\n2. Handler ▸ Map ▸ 選擇Indexer(Good1、Good2、Buffer、Reject1、Reject2) → 將Reference Tray放到Rail上並Clamp,然後將Indexer移動到Multi Sorter位置。\n3. Handler ▸ Map ▸ 選擇MSM → 將MSM移動到要Teaching的X-axis位置,並開啟Left Picker Down Solenoid。\n4. 降低Z-axis,使Teaching Pin接觸Reference Tray,然後移動MSM的X-axis位置與Indexer的Y-axis位置,使Pin與Pin-hole對齊。\n5. 對齊後,將MSM與Indexer的Rail位置Teach & Save。Good1·Good2·Buffer·Reject1·Reject2均以相同方式重複。\n6. 將Teaching Pin移動到Reference Tray平面位置,下降直至接觸平面。\n7. 若接觸位置例如為Z-axis 16mm,則將Z Pick Position設為17mm(接觸位置+1mm),Z Place Position設為15mm(接觸位置−1mm)並Teach & Save。\n\n⚠ 注意——Z-axis處於下降狀態時,X-axis無法移動',
          ja:'F-13. MSM (Multi Sorter Module)\n\nGood/Buffer/Reject Rail Teaching\n\n1. Multi Sorter Left PickerにTeaching Pinを装着する。\n2. Handler ▸ Map ▸ Indexer(Good1、Good2、Buffer、Reject1、Reject2)を選択 → Reference TrayをRailに載せてClampした後、IndexerをMulti Sorter位置へ移動する。\n3. Handler ▸ Map ▸ MSMを選択 → TeachingするX-axis(X軸)位置へMSMを移動させ、Left Picker Down Solenoidをオンにする。\n4. Z-axis(Z軸)を下げてTeaching PinがReference Trayに触れるようにした後、MSMのX-axis(X軸)位置とIndexerのY-axis(Y軸)位置を動かし、PinとPin-holeが一致するように合わせる。\n5. 一致したらMSMとIndexerのRail位置をTeach & Saveする。Good1・Good2・Buffer・Reject1・Reject2すべて同じ方法で繰り返す。\n6. Teaching PinをReference Tray平面位置へ移動させ、平面に触れるまで下げる。\n7. 接触位置が例えばZ-axis(Z軸)16mmの場合、Z Pick Positionは17mm(接触位置+1mm)、Z Place Positionは15mm(接触位置−1mm)としてTeach & Saveする。\n\n⚠ 注意 — Z-axis(Z軸)を下げた状態ではX-axis(X軸)は動かない'
        }},
        {img:cmImg('F','smtv',16),tx:{
          en:'F-14. 3D Inspector — X,Y Reference Position\n\nTeaching the Vision coordinate system reference point\n\n1. Install the Pedestal. (The Pin-hole on top of the Pedestal is the reference.)\n2. From the Host PC, remote desktop into the 3D Vision PC. (3D Vision1 PC IP: 10.10.1.11, 3D Vision2 PC IP: 10.10.1.21)\n3. On the 3D Vision PC, run the Vision Program and click Illumination Control → turn on the lighting (2D or 3D).\n4. Move to the X-axis, Y-axis reference position. Use the AF Program to lower the Z-axis position until the image is sharpest.\n5. Right-click the screen to enable Show Image Center Line. Move the 3D Inspector\'s X-axis and Y-axis positions so the image center line aligns with the Pin-hole center.\n6. Teach & Save the current X-axis and Y-axis positions as the Jig X,Y Reference Position.',
          ko:'F-14. 3D Inspector — X,Y 기준 위치\n\nVision 좌표계 기준점 Teaching\n\n1. Pedestal을 설치한다. (Pedestal 상단 Pin-hole이 기준이 된다)\n2. Host PC에서 원격 데스크톱으로 3D Vision PC에 접속한다. (3D Vision1 PC IP: 10.10.1.11, 3D Vision2 PC IP: 10.10.1.21)\n3. 3D Vision PC에서 Vision Program을 실행하고 Illumination Control을 클릭 → 조명(2D 또는 3D)을 켠다.\n4. X-axis(X축), Y-axis(Y축) 기준위치로 이동한다. AF Program을 이용해 이미지가 가장 선명하게 보이도록 Z-axis(Z축) 위치를 낮춘다.\n5. 화면을 우클릭해 Show Image Center Line을 활성화한다. 3D Inspector의 X-axis(X축), Y-axis(Y축) 위치를 움직여 이미지 중심선과 Pin-hole 중심이 일치하도록 한다.\n6. 현재 X-axis(X축), Y-axis(Y축) 위치를 Teach & Save 하여 Jig X,Y Reference Position으로 저장한다.',
          zhCN:'F-14. 3D Inspector — X,Y 基准位置\n\nVision坐标系基准点Teaching\n\n1. 安装Pedestal。(Pedestal顶部的Pin-hole为基准)\n2. 从Host PC通过远程桌面连接到3D Vision PC。(3D Vision1 PC IP:10.10.1.11,3D Vision2 PC IP:10.10.1.21)\n3. 在3D Vision PC上运行Vision Program,并点击Illumination Control → 开启照明(2D或3D)。\n4. 移动到X-axis、Y-axis基准位置。利用AF Program降低Z-axis位置,使图像显示最清晰。\n5. 右键点击画面以启用Show Image Center Line。移动3D Inspector的X-axis、Y-axis位置,使图像中心线与Pin-hole中心对齐。\n6. 将当前X-axis、Y-axis位置Teach & Save,保存为Jig X,Y Reference Position。',
          zhTW:'F-14. 3D Inspector — X,Y 基準位置\n\nVision座標系基準點Teaching\n\n1. 安裝Pedestal。(Pedestal頂部的Pin-hole為基準)\n2. 從Host PC透過遠端桌面連接到3D Vision PC。(3D Vision1 PC IP:10.10.1.11,3D Vision2 PC IP:10.10.1.21)\n3. 在3D Vision PC上執行Vision Program,並點擊Illumination Control → 開啟照明(2D或3D)。\n4. 移動到X-axis、Y-axis基準位置。利用AF Program降低Z-axis位置,使影像顯示最清晰。\n5. 右鍵點擊畫面以啟用Show Image Center Line。移動3D Inspector的X-axis、Y-axis位置,使影像中心線與Pin-hole中心對齊。\n6. 將目前X-axis、Y-axis位置Teach & Save,儲存為Jig X,Y Reference Position。',
          ja:'F-14. 3D Inspector — X,Y 基準位置\n\nVision座標系基準点Teaching\n\n1. Pedestalを設置する。(Pedestal上部のPin-holeが基準になる)\n2. Host PCからリモートデスクトップで3D Vision PCへ接続する。(3D Vision1 PC IP:10.10.1.11、3D Vision2 PC IP:10.10.1.21)\n3. 3D Vision PCでVision Programを実行し、Illumination Controlをクリック → 照明(2Dまたは3D)を点ける。\n4. X-axis(X軸)、Y-axis(Y軸)基準位置へ移動する。AF Programを利用し、画像が最も鮮明に見えるようZ-axis(Z軸)位置を下げる。\n5. 画面を右クリックしてShow Image Center Lineを有効にする。3D InspectorのX-axis(X軸)、Y-axis(Y軸)位置を動かし、画像中心線とPin-hole中心が一致するようにする。\n6. 現在のX-axis(X軸)、Y-axis(Y軸)位置をTeach & SaveしてJig X,Y Reference Positionとして保存する。'
        }},
        {img:cmImg('F','smtv',17),tx:{
          en:'F-15. 2D Inspector — X,Y Reference Position\n\nTeaching the Vision coordinate system reference point\n\n1. Prepare the Reference Tray.\n2. From the Host PC, remote desktop into the 2D Vision PC. (2D Vision PC IP: 10.10.1.31)\n3. Place the Reference Tray on the Good Rail. Handler ▸ Map ▸ select Good Indexer 1 → turn on B/W·F/W Clamp to secure the Reference Tray, and move the Indexer Y-axis to the Top Inspection Position.\n4. Handler ▸ Map ▸ select 2D Inspector → move to the Inspector X-axis Reference Position.\n5. Lower the Z-axis position until the image is sharpest.\n6. Teach & Save the current Z-axis position as the Inspection Z Position.\n7. Right-click the screen to enable Show Image Center Line. Move the 2D Inspector\'s X-axis position and Good Indexer 1\'s Y-axis position so the Reference Tray\'s Pin-hole aligns with the live image\'s crosshair center.\n8. Teach & Save the current 2D Inspector X-axis position as the Inspector X Good Rail Position.\n9. Teach & Save the current Good Indexer 1 Y-axis position as the Top Inspection Position. Teach Good Indexer 2 and Buffer Indexer the same way.',
          ko:'F-15. 2D Inspector — X,Y 기준 위치\n\nVision 좌표계 기준점 Teaching\n\n1. Reference Tray를 준비한다.\n2. Host PC에서 원격 데스크톱으로 2D Vision PC에 접속한다. (2D Vision PC IP: 10.10.1.31)\n3. Reference Tray를 Good Rail에 올린다. Handler ▸ Map ▸ Good Indexer 1 선택 → B/W·F/W Clamp를 켜서 Reference Tray를 고정하고, Indexer Y-axis(Y축)를 Top Inspection Position으로 이동한다.\n4. Handler ▸ Map ▸ 2D Inspector 선택 → Inspector X-axis(X축) Reference Position으로 이동한다.\n5. 이미지가 가장 선명하게 보이도록 Z-axis(Z축) 위치를 낮춘다.\n6. 현재 Z-axis(Z축) 위치를 Teach & Save 하여 Inspection Z Position으로 저장한다.\n7. 화면을 우클릭해 Show Image Center Line을 활성화한다. 2D Inspector의 X-axis(X축) 위치와 Good Indexer 1의 Y-axis(Y축) 위치를 움직여, Reference Tray Pin-hole과 Live 영상 십자선 중심이 일치하도록 한다.\n8. 현재 2D Inspector X-axis(X축) 위치를 Teach & Save 하여 Inspector X Good Rail Position으로 저장한다.\n9. 현재 Good Indexer 1의 Y-axis(Y축) 위치를 Teach & Save 하여 Top Inspection Position으로 저장한다. Good Indexer 2, Buffer Indexer도 같은 방식으로 Teaching한다.',
          zhCN:'F-15. 2D Inspector — X,Y 基准位置\n\nVision坐标系基准点Teaching\n\n1. 准备Reference Tray。\n2. 从Host PC通过远程桌面连接到2D Vision PC。(2D Vision PC IP:10.10.1.31)\n3. 将Reference Tray放到Good Rail上。Handler ▸ Map ▸ 选择Good Indexer 1 → 开启B/W·F/W Clamp固定Reference Tray,并将Indexer Y-axis移动到Top Inspection Position。\n4. Handler ▸ Map ▸ 选择2D Inspector → 移动到Inspector X-axis Reference Position。\n5. 降低Z-axis位置,使图像显示最清晰。\n6. 将当前Z-axis位置Teach & Save,保存为Inspection Z Position。\n7. 右键点击画面以启用Show Image Center Line。移动2D Inspector的X-axis位置与Good Indexer 1的Y-axis位置,使Reference Tray的Pin-hole与Live画面十字线中心对齐。\n8. 将当前2D Inspector X-axis位置Teach & Save,保存为Inspector X Good Rail Position。\n9. 将当前Good Indexer 1的Y-axis位置Teach & Save,保存为Top Inspection Position。Good Indexer 2、Buffer Indexer也以相同方式进行Teaching。',
          zhTW:'F-15. 2D Inspector — X,Y 基準位置\n\nVision座標系基準點Teaching\n\n1. 準備Reference Tray。\n2. 從Host PC透過遠端桌面連接到2D Vision PC。(2D Vision PC IP:10.10.1.31)\n3. 將Reference Tray放到Good Rail上。Handler ▸ Map ▸ 選擇Good Indexer 1 → 開啟B/W·F/W Clamp固定Reference Tray,並將Indexer Y-axis移動到Top Inspection Position。\n4. Handler ▸ Map ▸ 選擇2D Inspector → 移動到Inspector X-axis Reference Position。\n5. 降低Z-axis位置,使影像顯示最清晰。\n6. 將目前Z-axis位置Teach & Save,儲存為Inspection Z Position。\n7. 右鍵點擊畫面以啟用Show Image Center Line。移動2D Inspector的X-axis位置與Good Indexer 1的Y-axis位置,使Reference Tray的Pin-hole與Live畫面十字線中心對齊。\n8. 將目前2D Inspector X-axis位置Teach & Save,儲存為Inspector X Good Rail Position。\n9. 將目前Good Indexer 1的Y-axis位置Teach & Save,儲存為Top Inspection Position。Good Indexer 2、Buffer Indexer也以相同方式進行Teaching。',
          ja:'F-15. 2D Inspector — X,Y 基準位置\n\nVision座標系基準点Teaching\n\n1. Reference Trayを準備する。\n2. Host PCからリモートデスクトップで2D Vision PCへ接続する。(2D Vision PC IP:10.10.1.31)\n3. Reference TrayをGood Railに載せる。Handler ▸ Map ▸ Good Indexer 1を選択 → B/W・F/W ClampをオンにしてReference Trayを固定し、Indexer Y-axis(Y軸)をTop Inspection Positionへ移動する。\n4. Handler ▸ Map ▸ 2D Inspectorを選択 → Inspector X-axis(X軸) Reference Positionへ移動する。\n5. 画像が最も鮮明に見えるようZ-axis(Z軸)位置を下げる。\n6. 現在のZ-axis(Z軸)位置をTeach & SaveしてInspection Z Positionとして保存する。\n7. 画面を右クリックしてShow Image Center Lineを有効にする。2D InspectorのX-axis(X軸)位置とGood Indexer 1のY-axis(Y軸)位置を動かし、Reference TrayのPin-holeとLive映像の十字線中心が一致するようにする。\n8. 現在の2D Inspector X-axis(X軸)位置をTeach & SaveしてInspector X Good Rail Positionとして保存する。\n9. 現在のGood Indexer 1のY-axis(Y軸)位置をTeach & SaveしてTop Inspection Positionとして保存する。Good Indexer 2、Buffer Indexerも同じ方法でTeachingする。'
        }},
        {img:cmImg('F','smtv',18),tx:{
          en:'F-16. LTS — Gray Target Setting\n\nLong Term Stability target setting ①\n\n1. In the Vision Program, Job Open → select the LTS Job file.\n2. 3D(1&2): move the 3D Inspector\'s X-axis position and the Pedestal\'s Y-axis position to the Gray Target position shown in the image. / 2D: move the 2D Inspector\'s X-axis position and the Indexer Y-axis position to the position shown in the image.\n3. 3D(1&2): use the AF Program to move the Z-axis and focus. / 2D: move the Z-axis to focus. Save the current Z-axis position.\n4. Move the Inspector\'s X-axis and Y-axis positions so the Gray Target is centered in the live view, then Teach & Save as the Gray Target Position.',
          ko:'F-16. LTS — Gray Target 세팅\n\nLong Term Stability 타겟 세팅 ①\n\n1. Vision Program에서 Job Open → LTS Job 파일을 선택한다.\n2. 3D(1&2): 3D Inspector의 X-axis(X축) 위치와 Pedestal의 Y-axis(Y축) 위치를 그림에 표시된 Gray Target 위치로 이동한다. / 2D: 2D Inspector의 X-axis(X축) 위치와 Indexer Y-axis(Y축) 위치를 그림에 표시된 위치로 이동한다.\n3. 3D(1&2): AF Program으로 Z-axis(Z축)를 움직여 Focus를 맞춘다. / 2D: Z-axis(Z축)를 움직여 Focus를 맞춘다. 현재 Z-axis(Z축) 위치를 저장한다.\n4. Inspector의 X-axis(X축), Y-axis(Y축) 위치를 움직여 Gray Target이 Live 화면 중심에 오도록 하고, Teach & Save 하여 Gray Target Position으로 저장한다.',
          zhCN:'F-16. LTS — Gray Target 设置\n\nLong Term Stability目标设置①\n\n1. 在Vision Program中Job Open → 选择LTS Job文件。\n2. 3D(1&2):将3D Inspector的X-axis位置与Pedestal的Y-axis位置移动到图中标示的Gray Target位置。/ 2D:将2D Inspector的X-axis位置与Indexer Y-axis位置移动到图中标示的位置。\n3. 3D(1&2):用AF Program移动Z-axis对焦。/ 2D:移动Z-axis对焦。保存当前Z-axis位置。\n4. 移动Inspector的X-axis、Y-axis位置,使Gray Target位于Live画面中心,并Teach & Save,保存为Gray Target Position。',
          zhTW:'F-16. LTS — Gray Target 設定\n\nLong Term Stability目標設定①\n\n1. 在Vision Program中Job Open → 選擇LTS Job檔案。\n2. 3D(1&2):將3D Inspector的X-axis位置與Pedestal的Y-axis位置移動到圖中標示的Gray Target位置。/ 2D:將2D Inspector的X-axis位置與Indexer Y-axis位置移動到圖中標示的位置。\n3. 3D(1&2):用AF Program移動Z-axis對焦。/ 2D:移動Z-axis對焦。儲存目前Z-axis位置。\n4. 移動Inspector的X-axis、Y-axis位置,使Gray Target位於Live畫面中心,並Teach & Save,儲存為Gray Target Position。',
          ja:'F-16. LTS — Gray Target 設定\n\nLong Term Stability ターゲット設定①\n\n1. Vision ProgramでJob Open → LTS Jobファイルを選択する。\n2. 3D(1&2):3D InspectorのX-axis(X軸)位置とPedestalのY-axis(Y軸)位置を、図に示されたGray Target位置へ移動する。/ 2D:2D InspectorのX-axis(X軸)位置とIndexer Y-axis(Y軸)位置を、図に示された位置へ移動する。\n3. 3D(1&2):AF ProgramでZ-axis(Z軸)を動かしFocusを合わせる。/ 2D:Z-axis(Z軸)を動かしFocusを合わせる。現在のZ-axis(Z軸)位置を保存する。\n4. InspectorのX-axis(X軸)、Y-axis(Y軸)位置を動かし、Gray TargetがLive画面中心に来るようにし、Teach & SaveしてGray Target Positionとして保存する。'
        }},
        {img:cmImg('F','smtv',19),tx:{
          en:'F-17. LTS — Matrix Target Setting\n\nLong Term Stability target setting ②\n\n1. 3D(1&2): move the 3D Inspector X-axis position and the Pedestal Y-axis position to the Matrix Target position shown in the image. / 2D: move the 2D Inspector X-axis position and the Indexer Y-axis position to the position shown in the image.\n2. 3D(1&2): use the AF Program to move the Z-axis and focus. / 2D: move the Z-axis to focus. Save the current Z-axis position.\n3. Move the Inspector\'s X-axis and Y-axis positions so the Matrix Target is centered in the live view, then Teach & Save as the Matrix Target Position.',
          ko:'F-17. LTS — Matrix Target 세팅\n\nLong Term Stability 타겟 세팅 ②\n\n1. 3D(1&2): 3D Inspector X-axis(X축) 위치와 Pedestal Y-axis(Y축) 위치를 그림에 표시된 Matrix Target 위치로 이동한다. / 2D: 2D Inspector X-axis(X축) 위치와 Indexer Y-axis(Y축) 위치를 그림에 표시된 위치로 이동한다.\n2. 3D(1&2): AF Program으로 Z-axis(Z축)를 움직여 Focus를 맞춘다. / 2D: Z-axis(Z축)를 움직여 Focus를 맞춘다. 현재 Z-axis(Z축) 위치를 저장한다.\n3. Inspector의 X-axis(X축), Y-axis(Y축) 위치를 움직여 Matrix Target이 Live 화면 중심에 오도록 하고, Teach & Save 하여 Matrix Target Position으로 저장한다.',
          zhCN:'F-17. LTS — Matrix Target 设置\n\nLong Term Stability目标设置②\n\n1. 3D(1&2):将3D Inspector X-axis位置与Pedestal Y-axis位置移动到图中标示的Matrix Target位置。/ 2D:将2D Inspector X-axis位置与Indexer Y-axis位置移动到图中标示的位置。\n2. 3D(1&2):用AF Program移动Z-axis对焦。/ 2D:移动Z-axis对焦。保存当前Z-axis位置。\n3. 移动Inspector的X-axis、Y-axis位置,使Matrix Target位于Live画面中心,并Teach & Save,保存为Matrix Target Position。',
          zhTW:'F-17. LTS — Matrix Target 設定\n\nLong Term Stability目標設定②\n\n1. 3D(1&2):將3D Inspector X-axis位置與Pedestal Y-axis位置移動到圖中標示的Matrix Target位置。/ 2D:將2D Inspector X-axis位置與Indexer Y-axis位置移動到圖中標示的位置。\n2. 3D(1&2):用AF Program移動Z-axis對焦。/ 2D:移動Z-axis對焦。儲存目前Z-axis位置。\n3. 移動Inspector的X-axis、Y-axis位置,使Matrix Target位於Live畫面中心,並Teach & Save,儲存為Matrix Target Position。',
          ja:'F-17. LTS — Matrix Target 設定\n\nLong Term Stability ターゲット設定②\n\n1. 3D(1&2):3D Inspector X-axis(X軸)位置とPedestal Y-axis(Y軸)位置を、図に示されたMatrix Target位置へ移動する。/ 2D:2D Inspector X-axis(X軸)位置とIndexer Y-axis(Y軸)位置を、図に示された位置へ移動する。\n2. 3D(1&2):AF ProgramでZ-axis(Z軸)を動かしFocusを合わせる。/ 2D:Z-axis(Z軸)を動かしFocusを合わせる。現在のZ-axis(Z軸)位置を保存する。\n3. InspectorのX-axis(X軸)、Y-axis(Y軸)位置を動かし、Matrix TargetがLive画面中心に来るようにし、Teach & SaveしてMatrix Target Positionとして保存する。'
        }},
        {img:cmImg('F','smtv',20),tx:{
          en:'F-18. LTS — Step Height Target Setting\n\nLong Term Stability target setting ③ (3D 1&2 only)\n\n1. Move the 3D Inspector X-axis position and the Pedestal Y-axis position to the Step Height Target position shown in the image.\n2. Use the AF Program to move the Z-axis and focus, then save the current 3D Inspector Z-axis position as the Step Height Target Z Auto Focus Reference Value.\n3. Move the Inspector\'s X-axis and Y-axis positions so the Step Height Target is centered in the live view, then Teach & Save.',
          ko:'F-18. LTS — Step Height Target 세팅\n\nLong Term Stability 타겟 세팅 ③ (3D 1&2 전용)\n\n1. 3D Inspector X-axis(X축) 위치와 Pedestal Y-axis(Y축) 위치를 그림에 표시된 Step Height Target 위치로 이동한다.\n2. AF Program으로 Z-axis(Z축)를 움직여 Focus를 맞추고, 현재 3D Inspector Z-axis(Z축) 위치를 Step Height Target Z Auto Focus Reference Value로 저장한다.\n3. Inspector의 X-axis(X축), Y-axis(Y축) 위치를 움직여 Step Height Target이 Live 화면 중심에 오도록 한 뒤, Teach & Save 한다.',
          zhCN:'F-18. LTS — Step Height Target 设置\n\nLong Term Stability目标设置③(仅限3D 1&2)\n\n1. 将3D Inspector X-axis位置与Pedestal Y-axis位置移动到图中标示的Step Height Target位置。\n2. 用AF Program移动Z-axis对焦,并将当前3D Inspector Z-axis位置保存为Step Height Target Z Auto Focus Reference Value。\n3. 移动Inspector的X-axis、Y-axis位置,使Step Height Target位于Live画面中心,然后Teach & Save。',
          zhTW:'F-18. LTS — Step Height Target 設定\n\nLong Term Stability目標設定③(僅限3D 1&2)\n\n1. 將3D Inspector X-axis位置與Pedestal Y-axis位置移動到圖中標示的Step Height Target位置。\n2. 用AF Program移動Z-axis對焦,並將目前3D Inspector Z-axis位置儲存為Step Height Target Z Auto Focus Reference Value。\n3. 移動Inspector的X-axis、Y-axis位置,使Step Height Target位於Live畫面中心,然後Teach & Save。',
          ja:'F-18. LTS — Step Height Target 設定\n\nLong Term Stability ターゲット設定③(3D 1&2専用)\n\n1. 3D Inspector X-axis(X軸)位置とPedestal Y-axis(Y軸)位置を、図に示されたStep Height Target位置へ移動する。\n2. AF ProgramでZ-axis(Z軸)を動かしFocusを合わせ、現在の3D Inspector Z-axis(Z軸)位置をStep Height Target Z Auto Focus Reference Valueとして保存する。\n3. InspectorのX-axis(X軸)、Y-axis(Y軸)位置を動かし、Step Height TargetがLive画面中心に来るようにした後、Teach & Saveする。'
        }}
      ]
    },
    nbga:{
      title:{ko:'F. Handler Teaching',en:'F. Handler Teaching',zhCN:'F. Handler Teaching',zhTW:'F. Handler Teaching',ja:'F. Handler Teaching'},
      slides:[
        {img:cmImg('F','nbga',1),tx:{
          en:'This chapter covers Handler Teaching — the position-teaching sequence for the Elevator, Tray Sorter Module (TSM), Tray Transfer Module (TTM), Multi Sorter, 3D Inspector, and 2D Inspector.',
          ko:'본 챕터에서는 Handler Teaching — Elevator, Tray Sorter Module(TSM), Tray Transfer Module(TTM), Multi Sorter, 3D Inspector, 2D Inspector의 Position Teaching 절차를 다룹니다.',
          zhCN:'本章介绍Handler Teaching——Elevator、Tray Sorter Module(TSM)、Tray Transfer Module(TTM)、Multi Sorter、3D Inspector、2D Inspector的Position Teaching流程。',
          zhTW:'本章介紹Handler Teaching——Elevator、Tray Sorter Module(TSM)、Tray Transfer Module(TTM)、Multi Sorter、3D Inspector、2D Inspector的Position Teaching流程。',
          ja:'本章ではHandler Teaching——Elevator、Tray Sorter Module(TSM)、Tray Transfer Module(TTM)、Multi Sorter、3D Inspector、2D InspectorのPosition Teaching手順を扱います。'
        }},
        {img:cmImg('F','nbga',2),tx:{
          en:'A. Elevator — this section covers the Elevator Z Up Position, Elevator Z One Position, Elevator Z Wait Position, and Indexer Y Front Position.',
          ko:'A. Elevator — Elevator Z Up Position, Elevator Z One Position, Elevator Z Wait Position, Indexer Y Front Position을 다룹니다.',
          zhCN:'A. Elevator——本节介绍Elevator Z Up Position、Elevator Z One Position、Elevator Z Wait Position、Indexer Y Front Position。',
          zhTW:'A. Elevator——本節介紹Elevator Z Up Position、Elevator Z One Position、Elevator Z Wait Position、Indexer Y Front Position。',
          ja:'A. Elevator——本節ではElevator Z Up Position、Elevator Z One Position、Elevator Z Wait Position、Indexer Y Front Positionを扱います。'
        }},
        {img:cmImg('F','nbga',3),tx:{
          en:'F-1. Elevator — Up Position\n\nThe Up Position is the elevator height reached when lifting the tray. Place a tray on the stacker as shown, then teach the Up Position for the Load, Empty, and Good Elevators the same way.',
          ko:'F-1. Elevator — Up Position\n\nUp Position은 Tray를 들어올리는 Elevator의 높이입니다. 그림과 같이 Stacker에 Tray를 올린 뒤, Load·Empty·Good Elevator의 Up Position을 동일한 방식으로 Teaching합니다.',
          zhCN:'F-1. Elevator — Up Position\n\nUp Position是抬起Tray时Elevator到达的高度。如图所示将Tray放在Stacker上,然后以相同方式对Load、Empty、Good Elevator进行Up Position的Teaching。',
          zhTW:'F-1. Elevator — Up Position\n\nUp Position是抬起Tray時Elevator到達的高度。如圖所示將Tray放在Stacker上,然後以相同方式對Load、Empty、Good Elevator進行Up Position的Teaching。',
          ja:'F-1. Elevator — Up Position\n\nUp PositionはTrayを持ち上げる際のElevatorの高さです。図のようにStacker上にTrayを置き、Load・Empty・Good ElevatorのUp Positionを同じ方法でTeachingします。'
        }},
        {img:cmImg('F','nbga',4),tx:{
          en:'Host P/G ▸ Handler ▸ Map ▸ select Elevator. Move the Elevator Z position so the gap between the Stacker and Tray becomes 2mm, as shown. (Spring-type Stackers are taught the same way.)',
          ko:'Host P/G ▸ Handler ▸ Map ▸ Elevator 선택. 그림처럼 Stacker와 Tray 사이 간격이 2mm가 되도록 Elevator Z Position을 이동합니다. (Spring 타입 Stacker도 동일한 방식으로 Teaching)',
          zhCN:'Host P/G ▸ Handler ▸ Map ▸ 选择Elevator。如图移动Elevator Z Position,使Stacker与Tray之间的间隙为2mm。(Spring类型的Stacker也以相同方式进行Teaching)',
          zhTW:'Host P/G ▸ Handler ▸ Map ▸ 選擇Elevator。如圖移動Elevator Z Position,使Stacker與Tray之間的間隙為2mm。(Spring類型的Stacker也以相同方式進行Teaching)',
          ja:'Host P/G ▸ Handler ▸ Map ▸ Elevatorを選択。図のようにStackerとTrayの間隔が2mmになるようElevator Z Positionを移動します。(SpringタイプのStackerも同じ方法でTeaching)'
        }},
        {img:cmImg('F','nbga',5),tx:{
          en:'Teach and save the current position as the Up Position.',
          ko:'현재 위치를 Teach & Save하여 Up Position으로 저장합니다.',
          zhCN:'将当前位置Teach & Save,保存为Up Position。',
          zhTW:'將目前位置Teach & Save,儲存為Up Position。',
          ja:'現在の位置をTeach & SaveしてUp Positionとして保存します。'
        }},
        {img:cmImg('F','nbga',6),tx:{
          en:'For an Air Cylinder-type elevator (Buffer, Reject1, Reject2), move the Z position the same way so the Stacker-Tray gap is 2mm, and confirm the tray does not catch on the stacker while rising.',
          ko:'Air Cylinder 타입 Elevator(Buffer, Reject1, Reject2)의 경우도 동일하게 Stacker-Tray 간격이 2mm가 되도록 Z Position을 이동하고, 상승 동작 중 Tray가 Stacker에 걸리지 않는지 확인합니다.',
          zhCN:'对于Air Cylinder类型的Elevator(Buffer、Reject1、Reject2),同样移动Z Position使Stacker与Tray间隙为2mm,并确认上升过程中Tray不会卡在Stacker上。',
          zhTW:'對於Air Cylinder類型的Elevator(Buffer、Reject1、Reject2),同樣移動Z Position使Stacker與Tray間隙為2mm,並確認上升過程中Tray不會卡在Stacker上。',
          ja:'Air CylinderタイプのElevator(Buffer、Reject1、Reject2)も同様にStacker-Trayの間隔が2mmになるようZ Positionを移動し、上昇動作中にTrayがStackerに引っかからないか確認します。'
        }},
        {img:cmImg('F','nbga',7),tx:{
          en:'Teach and save the current position as the Up Position for this elevator type as well.',
          ko:'이 Elevator 타입도 현재 위치를 Teach & Save하여 Up Position으로 저장합니다.',
          zhCN:'该类型的Elevator同样将当前位置Teach & Save,保存为Up Position。',
          zhTW:'該類型的Elevator同樣將目前位置Teach & Save,儲存為Up Position。',
          ja:'このタイプのElevatorも現在の位置をTeach & SaveしてUp Positionとして保存します。'
        }},
        {img:cmImg('F','nbga',8),tx:{
          en:'Reference images — correct Elevator Z Up Position for a standard Stacker and for a Spring-type Stacker.',
          ko:'참고 이미지 — 일반 Stacker와 Spring 타입 Stacker의 Elevator Z Up Position 예시.',
          zhCN:'参考图片——一般Stacker与Spring类型Stacker的Elevator Z Up Position示例。',
          zhTW:'參考圖片——一般Stacker與Spring類型Stacker的Elevator Z Up Position範例。',
          ja:'参考画像 — 一般StackerとSpringタイプStackerのElevator Z Up Position例。'
        }},
        {img:cmImg('F','nbga',9),tx:{
          en:'A. Elevator (continued) — Elevator Z Up Position, Elevator Z One Position, Elevator Z Wait Position, Indexer Y Front Position.',
          ko:'A. Elevator (계속) — Elevator Z Up Position, Elevator Z One Position, Elevator Z Wait Position, Indexer Y Front Position.',
          zhCN:'A. Elevator(续)——Elevator Z Up Position、Elevator Z One Position、Elevator Z Wait Position、Indexer Y Front Position。',
          zhTW:'A. Elevator(續)——Elevator Z Up Position、Elevator Z One Position、Elevator Z Wait Position、Indexer Y Front Position。',
          ja:'A. Elevator(続き)——Elevator Z Up Position、Elevator Z One Position、Elevator Z Wait Position、Indexer Y Front Position。'
        }},
        {img:cmImg('F','nbga',10),tx:{
          en:'F-2. Elevator — One Position\n\nThe One Position is the elevator height that separates the trays at the bottom. Place two trays on the stacker as shown, then teach the One Position for the Load and Empty Elevators.',
          ko:'F-2. Elevator — One Position\n\nOne Position은 하단에서 Tray를 한 장씩 분리하는 Elevator 높이입니다. 그림처럼 Stacker에 Tray 두 장을 올린 뒤 Load·Empty Elevator의 One Position을 Teaching합니다.',
          zhCN:'F-2. Elevator — One Position\n\nOne Position是在底部将Tray逐张分离的Elevator高度。如图在Stacker上放置两张Tray,然后对Load、Empty Elevator进行One Position的Teaching。',
          zhTW:'F-2. Elevator — One Position\n\nOne Position是在底部將Tray逐張分離的Elevator高度。如圖在Stacker上放置兩張Tray,然後對Load、Empty Elevator進行One Position的Teaching。',
          ja:'F-2. Elevator — One Position\n\nOne Positionは下部でTrayを1枚ずつ分離するElevatorの高さです。図のようにStackerにTrayを2枚置き、Load・Empty ElevatorのOne PositionをTeachingします。'
        }},
        {img:cmImg('F','nbga',11),tx:{
          en:'Host P/G ▸ Handler ▸ Map ▸ select Elevator, move to the Up Position, then unclamp the stacker.',
          ko:'Host P/G ▸ Handler ▸ Map ▸ Elevator 선택 후 Up Position으로 이동하고 Stacker를 Unclamp합니다.',
          zhCN:'Host P/G ▸ Handler ▸ Map ▸ 选择Elevator,移动到Up Position后将Stacker Unclamp。',
          zhTW:'Host P/G ▸ Handler ▸ Map ▸ 選擇Elevator,移動到Up Position後將Stacker Unclamp。',
          ja:'Host P/G ▸ Handler ▸ Map ▸ Elevatorを選択し、Up Positionへ移動してStackerをUnclampします。'
        }},
        {img:cmImg('F','nbga',12),tx:{
          en:'Lower the Z position so the stacker sits between the two trays.',
          ko:'Stacker가 두 Tray 사이에 위치하도록 Z Position을 내립니다.',
          zhCN:'降低Z Position,使Stacker位于两张Tray之间。',
          zhTW:'降低Z Position,使Stacker位於兩張Tray之間。',
          ja:'StackerがTrayとTrayの間に位置するようZ Positionを下げます。'
        }},
        {img:cmImg('F','nbga',13),tx:{
          en:'Push the stacker in as shown so it sits between the trays, then clamp it — make sure all stackers are positioned between the trays.',
          ko:'그림처럼 Stacker를 밀어 넣어 Tray 사이에 위치시키고 Clamp합니다 — 모든 Stacker가 Tray 사이에 위치했는지 확인합니다.',
          zhCN:'如图将Stacker推入,使其位于Tray之间并进行Clamp——确认所有Stacker都位于Tray之间。',
          zhTW:'如圖將Stacker推入,使其位於Tray之間並進行Clamp——確認所有Stacker都位於Tray之間。',
          ja:'図のようにStackerを押し込みTrayの間に位置させてClampします——すべてのStackerがTrayの間に位置しているか確認します。'
        }},
        {img:cmImg('F','nbga',14),tx:{
          en:'Teach and save the current Z position as the One Position.',
          ko:'현재 Z Position을 Teach & Save하여 One Position으로 저장합니다.',
          zhCN:'将当前Z Position进行Teach & Save,保存为One Position。',
          zhTW:'將目前Z Position進行Teach & Save,儲存為One Position。',
          ja:'現在のZ PositionをTeach & SaveしてOne Positionとして保存します。'
        }},
        {img:cmImg('F','nbga',15),tx:{
          en:'GOOD: the stacker sits between the trays without interference. BAD: the stacker interferes with a tray.',
          ko:'GOOD: Stacker가 Tray와 Tray 사이에 위치하여 간섭이 없는 상태. BAD: Stacker가 Tray와 간섭하는 상태.',
          zhCN:'GOOD:Stacker位于Tray与Tray之间,无干涉。BAD:Stacker与Tray发生干涉。',
          zhTW:'GOOD:Stacker位於Tray與Tray之間,無干涉。BAD:Stacker與Tray發生干涉。',
          ja:'GOOD:StackerがTrayとTrayの間に位置し干渉がない状態。BAD:StackerがTrayと干渉している状態。'
        }},
        {img:cmImg('F','nbga',16),tx:{
          en:'A. Elevator (continued) — Elevator Z Up Position, Elevator Z One Position, Elevator Z Wait Position, Indexer Y Front Position.',
          ko:'A. Elevator (계속) — Elevator Z Up Position, Elevator Z One Position, Elevator Z Wait Position, Indexer Y Front Position.',
          zhCN:'A. Elevator(续)——Elevator Z Up Position、Elevator Z One Position、Elevator Z Wait Position、Indexer Y Front Position。',
          zhTW:'A. Elevator(續)——Elevator Z Up Position、Elevator Z One Position、Elevator Z Wait Position、Indexer Y Front Position。',
          ja:'A. Elevator(続き)——Elevator Z Up Position、Elevator Z One Position、Elevator Z Wait Position、Indexer Y Front Position。'
        }},
        {img:cmImg('F','nbga',17),tx:{
          en:'F-3. Elevator — Wait Position\n\nThe Wait Position is where a separated tray is placed on the rail. Teach the Wait Position for the Load, Empty, and Good Elevators the same way.',
          ko:'F-3. Elevator — Wait Position\n\nWait Position은 분리된 Tray가 Rail 위에 놓이는 위치입니다. Load·Empty·Good Elevator의 Wait Position을 동일한 방식으로 Teaching합니다.',
          zhCN:'F-3. Elevator — Wait Position\n\nWait Position是分离后的Tray放置在Rail上的位置。以相同方式对Load、Empty、Good Elevator进行Wait Position的Teaching。',
          zhTW:'F-3. Elevator — Wait Position\n\nWait Position是分離後的Tray放置在Rail上的位置。以相同方式對Load、Empty、Good Elevator進行Wait Position的Teaching。',
          ja:'F-3. Elevator — Wait Position\n\nWait Positionは分離されたTrayがRail上に置かれる位置です。Load・Empty・Good ElevatorのWait Positionを同じ方法でTeachingします。'
        }},
        {img:cmImg('F','nbga',18),tx:{
          en:'Host P/G ▸ Handler ▸ Map ▸ select Elevator ▸ Wait Position. Click Home to initialize the Z position, then teach and save the current Z position (0mm).',
          ko:'Host P/G ▸ Handler ▸ Map ▸ Elevator ▸ Wait Position 선택. Home을 클릭해 Z Position을 초기화한 뒤, 현재 Z Position(0mm)을 Teach & Save합니다.',
          zhCN:'Host P/G ▸ Handler ▸ Map ▸ 选择Elevator ▸ Wait Position。点击Home将Z Position初始化,然后将当前Z Position(0mm)进行Teach & Save。',
          zhTW:'Host P/G ▸ Handler ▸ Map ▸ 選擇Elevator ▸ Wait Position。點擊Home將Z Position初始化,然後將目前Z Position(0mm)進行Teach & Save。',
          ja:'Host P/G ▸ Handler ▸ Map ▸ Elevator ▸ Wait Positionを選択。Homeをクリックして Z Positionを初期化し、現在のZ Position(0mm)をTeach & Saveします。'
        }},
        {img:cmImg('F','nbga',19),tx:{
          en:'Caution: if the Home position is too high, the Elevator may collide when the tray moves. For a motor-driven elevator, correct the sensor/object positions; for an air elevator, adjust the magnetic sensor position.',
          ko:'주의: Home Position이 너무 높으면 Tray 이동 시 Elevator와 충돌할 수 있습니다. Motor 방식은 Sensor와 Object 위치를 보정하고, Air 방식 Elevator는 Magnetic Sensor 위치를 조정합니다.',
          zhCN:'注意:若Home Position过高,Tray移动时可能与Elevator发生碰撞。Motor方式需校正Sensor与Object位置;Air方式的Elevator需调整Magnetic Sensor位置。',
          zhTW:'注意:若Home Position過高,Tray移動時可能與Elevator發生碰撞。Motor方式需校正Sensor與Object位置;Air方式的Elevator需調整Magnetic Sensor位置。',
          ja:'注意:Home Positionが高すぎると、Tray移動時にElevatorと衝突する恐れがあります。Motor方式はSensorとObjectの位置を補正し、Air方式のElevatorはMagnetic Sensorの位置を調整します。'
        }},
        {img:cmImg('F','nbga',20),tx:{
          en:'Reference images — Elevator Home & Wait position, top view and left view.',
          ko:'참고 이미지 — Elevator Home & Wait Position의 상면도·좌측면도.',
          zhCN:'参考图片——Elevator Home & Wait Position的俯视图与左视图。',
          zhTW:'參考圖片——Elevator Home & Wait Position的俯視圖與左視圖。',
          ja:'参考画像 — Elevator Home & Wait Positionの上面図・左側面図。'
        }},
        {img:cmImg('F','nbga',21),tx:{
          en:'A. Elevator (continued) — Elevator Z Up Position, Elevator Z One Position, Elevator Z Wait Position, Indexer Y Front Position.',
          ko:'A. Elevator (계속) — Elevator Z Up Position, Elevator Z One Position, Elevator Z Wait Position, Indexer Y Front Position.',
          zhCN:'A. Elevator(续)——Elevator Z Up Position、Elevator Z One Position、Elevator Z Wait Position、Indexer Y Front Position。',
          zhTW:'A. Elevator(續)——Elevator Z Up Position、Elevator Z One Position、Elevator Z Wait Position、Indexer Y Front Position。',
          ja:'A. Elevator(続き)——Elevator Z Up Position、Elevator Z One Position、Elevator Z Wait Position、Indexer Y Front Position。'
        }},
        {img:cmImg('F','nbga',22),tx:{
          en:'F-4. Elevator — Indexer Y Front Position\n\nThe Front Position is where the Indexer loads or unloads the tray. Place a tray on the rail as shown.',
          ko:'F-4. Elevator — Indexer Y Front Position\n\nFront Position은 Indexer가 Tray를 Load·Unload하는 위치입니다. 그림처럼 Rail 위에 Tray를 올립니다.',
          zhCN:'F-4. Elevator — Indexer Y Front Position\n\nFront Position是Indexer装载·卸载Tray的位置。如图将Tray放在Rail上。',
          zhTW:'F-4. Elevator — Indexer Y Front Position\n\nFront Position是Indexer裝載·卸載Tray的位置。如圖將Tray放在Rail上。',
          ja:'F-4. Elevator — Indexer Y Front Position\n\nFront PositionはIndexerがTrayをLoad・Unloadする位置です。図のようにRail上にTrayを置きます。'
        }},
        {img:cmImg('F','nbga',23),tx:{
          en:'Host P/G ▸ Handler ▸ Map ▸ select Indexer, turn on the B/W Clamp and F/W Clamp to fasten the tray. (F/W Clamp = Forward Finger Clamp, B/W Clamp = Backward Finger Clamp)',
          ko:'Host P/G ▸ Handler ▸ Map ▸ Indexer 선택 후 B/W Clamp와 F/W Clamp를 켜서 Tray를 고정합니다. (F/W Clamp = Forward Finger Clamp, B/W Clamp = Backward Finger Clamp)',
          zhCN:'Host P/G ▸ Handler ▸ Map ▸ 选择Indexer,开启B/W Clamp与F/W Clamp以固定Tray。(F/W Clamp = Forward Finger Clamp,B/W Clamp = Backward Finger Clamp)',
          zhTW:'Host P/G ▸ Handler ▸ Map ▸ 選擇Indexer,開啟B/W Clamp與F/W Clamp以固定Tray。(F/W Clamp = Forward Finger Clamp,B/W Clamp = Backward Finger Clamp)',
          ja:'Host P/G ▸ Handler ▸ Map ▸ Indexerを選択し、B/W ClampとF/W ClampをONにしてTrayを固定します。(F/W Clamp = Forward Finger Clamp、B/W Clamp = Backward Finger Clamp)'
        }},
        {img:cmImg('F','nbga',24),tx:{
          en:'Move the Indexer so the tray aligns with the Tray Guide as shown, then unclamp in the order: F/W Clamp, then B/W Clamp.',
          ko:'그림처럼 Tray가 Tray Guide에 맞도록 Indexer를 이동시킨 뒤, F/W Clamp → B/W Clamp 순서로 Unclamp합니다.',
          zhCN:'如图移动Indexer,使Tray与Tray Guide对齐,然后按F/W Clamp、B/W Clamp的顺序进行Unclamp。',
          zhTW:'如圖移動Indexer,使Tray與Tray Guide對齊,然後按F/W Clamp、B/W Clamp的順序進行Unclamp。',
          ja:'図のようにTrayがTray Guideに合うようIndexerを移動させ、F/W Clamp → B/W Clampの順にUnclampします。'
        }},
        {img:cmImg('F','nbga',25),tx:{
          en:'Unclamp the elevator stacker, then move the Elevator to the Up Position to confirm the tray rises without interference. (Caution: watch for tray damage from the stacker while the elevator rises.)',
          ko:'Elevator Stacker를 Unclamp한 뒤 Elevator를 Up Position으로 이동시켜 Tray가 간섭 없이 상승하는지 확인합니다. (주의: 상승 중 Stacker에 의한 Tray 손상에 유의)',
          zhCN:'将Elevator Stacker进行Unclamp,然后将Elevator移动到Up Position,确认Tray上升过程中无干涉。(注意:上升过程中留意Stacker造成的Tray损伤)',
          zhTW:'將Elevator Stacker進行Unclamp,然後將Elevator移動到Up Position,確認Tray上升過程中無干涉。(注意:上升過程中留意Stacker造成的Tray損傷)',
          ja:'Elevator StackerをUnclampした後、ElevatorをUp Positionへ移動させ、Trayが干渉なく上昇するか確認します。(注意:上昇中のStackerによるTray損傷に注意)'
        }},
        {img:cmImg('F','nbga',26),tx:{
          en:'Teach and save the current Indexer position as the Front Tray Position. Teach every Indexer\'s Front Tray Position the same way.',
          ko:'현재 Indexer 위치를 Teach & Save하여 Front Tray Position으로 저장합니다. 모든 Indexer의 Front Tray Position을 동일한 방식으로 Teaching합니다.',
          zhCN:'将当前Indexer位置进行Teach & Save,保存为Front Tray Position。以相同方式对所有Indexer进行Front Tray Position的Teaching。',
          zhTW:'將目前Indexer位置進行Teach & Save,儲存為Front Tray Position。以相同方式對所有Indexer進行Front Tray Position的Teaching。',
          ja:'現在のIndexer位置をTeach & SaveしてFront Tray Positionとして保存します。すべてのIndexerのFront Tray Positionを同じ方法でTeachingします。'
        }},
        {img:cmImg('F','nbga',27),tx:{
          en:'GOOD / BAD reference images for the Front Position.',
          ko:'Front Position의 GOOD/BAD 참고 이미지.',
          zhCN:'Front Position的GOOD/BAD参考图片。',
          zhTW:'Front Position的GOOD/BAD參考圖片。',
          ja:'Front PositionのGOOD/BAD参考画像。'
        }},
        {img:cmImg('F','nbga',28),tx:{
          en:'Next: B. Tray Sorter Module (TSM) — TSM X/Z Loader Pick/Place, Indexer Y Tray Sorting, TSM X/Z Jig Left Place, TSM X/Z Jig Right Pick.',
          ko:'다음: B. Tray Sorter Module(TSM) — TSM X/Z Loader Pick/Place, Indexer Y Tray Sorting, TSM X/Z Jig Left Place, TSM X/Z Jig Right Pick.',
          zhCN:'接下来:B. Tray Sorter Module(TSM)——TSM X/Z Loader Pick/Place、Indexer Y Tray Sorting、TSM X/Z Jig Left Place、TSM X/Z Jig Right Pick。',
          zhTW:'接下來:B. Tray Sorter Module(TSM)——TSM X/Z Loader Pick/Place、Indexer Y Tray Sorting、TSM X/Z Jig Left Place、TSM X/Z Jig Right Pick。',
          ja:'次へ:B. Tray Sorter Module(TSM)——TSM X/Z Loader Pick/Place、Indexer Y Tray Sorting、TSM X/Z Jig Left Place、TSM X/Z Jig Right Pick。'
        }},
        {img:cmImg('F','nbga',29),tx:{
          en:'B. Tray Sorter Module — TSM X/Z Loader Pick/Place, Indexer Y Tray Sorting, TSM X/Z Jig Left Place, TSM X/Z Jig Right Pick.',
          ko:'B. Tray Sorter Module — TSM X/Z Loader Pick/Place, Indexer Y Tray Sorting, TSM X/Z Jig Left Place, TSM X/Z Jig Right Pick.',
          zhCN:'B. Tray Sorter Module——TSM X/Z Loader Pick/Place、Indexer Y Tray Sorting、TSM X/Z Jig Left Place、TSM X/Z Jig Right Pick。',
          zhTW:'B. Tray Sorter Module——TSM X/Z Loader Pick/Place、Indexer Y Tray Sorting、TSM X/Z Jig Left Place、TSM X/Z Jig Right Pick。',
          ja:'B. Tray Sorter Module——TSM X/Z Loader Pick/Place、Indexer Y Tray Sorting、TSM X/Z Jig Left Place、TSM X/Z Jig Right Pick。'
        }},
        {img:cmImg('F','nbga',30),tx:{
          en:'F-5. Tray Sorter Module — TSM X, Z Loader Pick/Place\n\nThe Loader Pick_Place Position is where the TSM picks or places a tray on the Load Rail, as shown.',
          ko:'F-5. Tray Sorter Module — TSM X, Z Loader Pick/Place\n\nLoader Pick_Place Position은 그림처럼 TSM이 Load Rail에서 Tray를 Pick·Place하는 위치입니다.',
          zhCN:'F-5. Tray Sorter Module — TSM X, Z Loader Pick/Place\n\nLoader Pick_Place Position是如图所示TSM在Load Rail上Pick·Place Tray的位置。',
          zhTW:'F-5. Tray Sorter Module — TSM X, Z Loader Pick/Place\n\nLoader Pick_Place Position是如圖所示TSM在Load Rail上Pick·Place Tray的位置。',
          ja:'F-5. Tray Sorter Module — TSM X, Z Loader Pick/Place\n\nLoader Pick_Place Positionは図のようにTSMがLoad Rail上でTrayをPick・Placeする位置です。'
        }},
        {img:cmImg('F','nbga',31),tx:{
          en:'Host P/G ▸ Handler ▸ Map ▸ select TSM, move to the X Loader Pick_Place Position.',
          ko:'Host P/G ▸ Handler ▸ Map ▸ TSM 선택 후 X Loader Pick_Place Position으로 이동합니다.',
          zhCN:'Host P/G ▸ Handler ▸ Map ▸ 选择TSM,移动到X Loader Pick_Place Position。',
          zhTW:'Host P/G ▸ Handler ▸ Map ▸ 選擇TSM,移動到X Loader Pick_Place Position。',
          ja:'Host P/G ▸ Handler ▸ Map ▸ TSMを選択し、X Loader Pick_Place Positionへ移動します。'
        }},
        {img:cmImg('F','nbga',32),tx:{
          en:'Place the tray on the rail as shown, then turn on the Left Picker Down Sol and Right Picker Down Sol.',
          ko:'그림처럼 Rail에 Tray를 올린 뒤 Left Picker Down Sol과 Right Picker Down Sol을 켭니다.',
          zhCN:'如图将Tray放在Rail上,然后开启Left Picker Down Sol与Right Picker Down Sol。',
          zhTW:'如圖將Tray放在Rail上,然後開啟Left Picker Down Sol與Right Picker Down Sol。',
          ja:'図のようにRailにTrayを置き、Left Picker Down SolとRight Picker Down SolをONにします。'
        }},
        {img:cmImg('F','nbga',33),tx:{
          en:'Lower the Z position to confirm the Left Picker is centered on the Load Rail and the Right Picker on the Empty Rail. If off-center, return to the Z Safety Position and adjust X; once centered, clamp the tray and return to Safety Position to check for rail interference.',
          ko:'Z Position을 내려 Left Picker가 Load Rail 중앙에, Right Picker가 Empty Rail 중앙에 위치하는지 확인합니다. 중앙이 아니면 Z Safety Position으로 복귀 후 X를 조정하고, 중앙에 위치했으면 Tray를 Clamp한 뒤 Safety Position으로 복귀해 Rail과의 간섭을 확인합니다.',
          zhCN:'降低Z Position,确认Left Picker位于Load Rail中央、Right Picker位于Empty Rail中央。若不在中央,返回Z Safety Position调整X;若已居中,将Tray Clamp后返回Safety Position确认与Rail是否干涉。',
          zhTW:'降低Z Position,確認Left Picker位於Load Rail中央、Right Picker位於Empty Rail中央。若不在中央,返回Z Safety Position調整X;若已置中,將Tray Clamp後返回Safety Position確認與Rail是否干涉。',
          ja:'Z Positionを下げ、Left PickerがLoad Rail中央に、Right PickerがEmpty Rail中央に位置しているか確認します。中央でなければZ Safety Positionに戻りXを調整し、中央であればTrayをClampした後Safety Positionに戻りRailとの干渉を確認します。'
        }},
        {img:cmImg('F','nbga',34),tx:{
          en:'Teach and save the TSM X Load Pick_Place Position.',
          ko:'TSM X Load Pick_Place Position을 Teach & Save합니다.',
          zhCN:'将TSM X Load Pick_Place Position进行Teach & Save。',
          zhTW:'將TSM X Load Pick_Place Position進行Teach & Save。',
          ja:'TSM X Load Pick_Place PositionをTeach & Saveします。'
        }},
        {img:cmImg('F','nbga',35),tx:{
          en:'The Z Loader Pick_Place Position is the picker\'s clamp height. Lower the Z position so the gap between the stopper and ball bushing is 1–2mm with the plate and tray overlapping, as shown.',
          ko:'Z Loader Pick_Place Position은 Picker가 Tray를 Clamp하는 높이입니다. 그림처럼 Plate와 Tray가 겹친 상태에서 Stopper와 Ball Bushing 사이 간격이 1~2mm가 되도록 Z Position을 내립니다.',
          zhCN:'Z Loader Pick_Place Position是Picker夹持Tray的高度。如图在Plate与Tray重叠状态下,降低Z Position使Stopper与Ball Bushing之间间隙为1~2mm。',
          zhTW:'Z Loader Pick_Place Position是Picker夾持Tray的高度。如圖在Plate與Tray重疊狀態下,降低Z Position使Stopper與Ball Bushing之間間隙為1~2mm。',
          ja:'Z Loader Pick_Place PositionはPickerがTrayをClampする高さです。図のようにPlateとTrayが重なった状態でStopperとBall Bushingの間隔が1~2mmになるようZ Positionを下げます。'
        }},
        {img:cmImg('F','nbga',36),tx:{
          en:'Teach and save the current Z position as the TSM Z Load Pick_Place Position.',
          ko:'현재 Z Position을 Teach & Save하여 TSM Z Load Pick_Place Position으로 저장합니다.',
          zhCN:'将当前Z Position进行Teach & Save,保存为TSM Z Load Pick_Place Position。',
          zhTW:'將目前Z Position進行Teach & Save,儲存為TSM Z Load Pick_Place Position。',
          ja:'現在のZ PositionをTeach & SaveしてTSM Z Load Pick_Place Positionとして保存します。'
        }},
        {img:cmImg('F','nbga',37),tx:{
          en:'B. Tray Sorter Module — TSM X/Z Loader Pick/Place, Indexer Y Tray Sorting, TSM X/Z Jig Left Place, TSM X/Z Jig Right Pick.',
          ko:'B. Tray Sorter Module — TSM X/Z Loader Pick/Place, Indexer Y Tray Sorting, TSM X/Z Jig Left Place, TSM X/Z Jig Right Pick.',
          zhCN:'B. Tray Sorter Module——TSM X/Z Loader Pick/Place、Indexer Y Tray Sorting、TSM X/Z Jig Left Place、TSM X/Z Jig Right Pick。',
          zhTW:'B. Tray Sorter Module——TSM X/Z Loader Pick/Place、Indexer Y Tray Sorting、TSM X/Z Jig Left Place、TSM X/Z Jig Right Pick。',
          ja:'B. Tray Sorter Module——TSM X/Z Loader Pick/Place、Indexer Y Tray Sorting、TSM X/Z Jig Left Place、TSM X/Z Jig Right Pick。'
        }},
        {img:cmImg('F','nbga',38),tx:{
          en:'F-6. Tray Sorter Module — Indexer Y Tray Sorting\n\nThe Indexer Y Tray Sorting Position sends the tray to the TSM location. Place the tray on the Load Rail as shown.',
          ko:'F-6. Tray Sorter Module — Indexer Y Tray Sorting\n\nIndexer Y Tray Sorting Position은 Tray를 TSM 위치로 보내는 위치입니다. 그림처럼 Load Rail에 Tray를 올립니다.',
          zhCN:'F-6. Tray Sorter Module — Indexer Y Tray Sorting\n\nIndexer Y Tray Sorting Position是将Tray送到TSM位置的位置。如图将Tray放在Load Rail上。',
          zhTW:'F-6. Tray Sorter Module — Indexer Y Tray Sorting\n\nIndexer Y Tray Sorting Position是將Tray送到TSM位置的位置。如圖將Tray放在Load Rail上。',
          ja:'F-6. Tray Sorter Module — Indexer Y Tray Sorting\n\nIndexer Y Tray Sorting PositionはTrayをTSM位置へ送る位置です。図のようにLoad RailにTrayを置きます。'
        }},
        {img:cmImg('F','nbga',39),tx:{
          en:'Host P/G ▸ Handler ▸ Map ▸ select TSM, move to the X and Z Load Pick_Place Positions.',
          ko:'Host P/G ▸ Handler ▸ Map ▸ TSM 선택 후 X, Z Load Pick_Place Position으로 이동합니다.',
          zhCN:'Host P/G ▸ Handler ▸ Map ▸ 选择TSM,移动到X、Z Load Pick_Place Position。',
          zhTW:'Host P/G ▸ Handler ▸ Map ▸ 選擇TSM,移動到X、Z Load Pick_Place Position。',
          ja:'Host P/G ▸ Handler ▸ Map ▸ TSMを選択し、X、Z Load Pick_Place Positionへ移動します。'
        }},
        {img:cmImg('F','nbga',40),tx:{
          en:'Host P/G ▸ Handler ▸ Map ▸ select Load Indexer 1, turn on its B/W Clamp, and move it to the Tray Sorting Position.',
          ko:'Host P/G ▸ Handler ▸ Map ▸ Load Indexer 1 선택 후 B/W Clamp를 켜고 Tray Sorting Position으로 이동시킵니다.',
          zhCN:'Host P/G ▸ Handler ▸ Map ▸ 选择Load Indexer 1,开启其B/W Clamp并移动到Tray Sorting Position。',
          zhTW:'Host P/G ▸ Handler ▸ Map ▸ 選擇Load Indexer 1,開啟其B/W Clamp並移動到Tray Sorting Position。',
          ja:'Host P/G ▸ Handler ▸ Map ▸ Load Indexer 1を選択し、B/W ClampをONにしてTray Sorting Positionへ移動させます。'
        }},
        {img:cmImg('F','nbga',41),tx:{
          en:'Move the indexer so the plate and tray align, as shown.',
          ko:'그림처럼 Plate와 Tray가 맞도록 Indexer를 이동합니다.',
          zhCN:'如图移动Indexer,使Plate与Tray对齐。',
          zhTW:'如圖移動Indexer,使Plate與Tray對齊。',
          ja:'図のようにPlateとTrayが合うようIndexerを移動します。'
        }},
        {img:cmImg('F','nbga',42),tx:{
          en:'Teach and save the Indexer Y Tray Sorting Position. Teach Load Indexer 1, Load Indexer 2, and Empty Indexer the same way.',
          ko:'Indexer Y Tray Sorting Position을 Teach & Save합니다. Load Indexer 1·Load Indexer 2·Empty Indexer 모두 동일한 방식으로 Teaching합니다.',
          zhCN:'将Indexer Y Tray Sorting Position进行Teach & Save。Load Indexer 1、Load Indexer 2、Empty Indexer均以相同方式进行Teaching。',
          zhTW:'將Indexer Y Tray Sorting Position進行Teach & Save。Load Indexer 1、Load Indexer 2、Empty Indexer均以相同方式進行Teaching。',
          ja:'Indexer Y Tray Sorting PositionをTeach & Saveします。Load Indexer 1・Load Indexer 2・Empty Indexerすべて同じ方法でTeachingします。'
        }},
        {img:cmImg('F','nbga',43),tx:{
          en:'B. Tray Sorter Module — TSM X/Z Loader Pick/Place, Indexer Y Tray Sorting, TSM X/Z Jig Left Place, TSM X/Z Jig Right Pick.',
          ko:'B. Tray Sorter Module — TSM X/Z Loader Pick/Place, Indexer Y Tray Sorting, TSM X/Z Jig Left Place, TSM X/Z Jig Right Pick.',
          zhCN:'B. Tray Sorter Module——TSM X/Z Loader Pick/Place、Indexer Y Tray Sorting、TSM X/Z Jig Left Place、TSM X/Z Jig Right Pick。',
          zhTW:'B. Tray Sorter Module——TSM X/Z Loader Pick/Place、Indexer Y Tray Sorting、TSM X/Z Jig Left Place、TSM X/Z Jig Right Pick。',
          ja:'B. Tray Sorter Module——TSM X/Z Loader Pick/Place、Indexer Y Tray Sorting、TSM X/Z Jig Left Place、TSM X/Z Jig Right Pick。'
        }},
        {img:cmImg('F','nbga',44),tx:{
          en:'F-7. Tray Sorter Module — TSM X, Z Jig Left Place\n\nThe TSM X Jig Left Place Position is the X position for placing the tray on the JIG. Place the tray on the rail as shown.',
          ko:'F-7. Tray Sorter Module — TSM X, Z Jig Left Place\n\nTSM X Jig Left Place Position은 Tray를 JIG에 놓는 X 위치입니다. 그림처럼 Rail에 Tray를 올립니다.',
          zhCN:'F-7. Tray Sorter Module — TSM X, Z Jig Left Place\n\nTSM X Jig Left Place Position是将Tray放置到JIG上的X位置。如图将Tray放在Rail上。',
          zhTW:'F-7. Tray Sorter Module — TSM X, Z Jig Left Place\n\nTSM X Jig Left Place Position是將Tray放置到JIG上的X位置。如圖將Tray放在Rail上。',
          ja:'F-7. Tray Sorter Module — TSM X, Z Jig Left Place\n\nTSM X Jig Left Place PositionはTrayをJIGに置くX位置です。図のようにRailにTrayを置きます。'
        }},
        {img:cmImg('F','nbga',45),tx:{
          en:'Host P/G ▸ Handler ▸ Map ▸ select Load Indexer 1, fasten the tray with the B/W and F/W Clamps, move to the Tray Sorter Position, then release both clamps.',
          ko:'Host P/G ▸ Handler ▸ Map ▸ Load Indexer 1 선택 후 B/W Clamp·F/W Clamp로 Tray를 고정하고 Tray Sorter Position으로 이동한 뒤 두 Clamp를 모두 해제합니다.',
          zhCN:'Host P/G ▸ Handler ▸ Map ▸ 选择Load Indexer 1,用B/W Clamp、F/W Clamp固定Tray,移动到Tray Sorter Position后解除两个Clamp。',
          zhTW:'Host P/G ▸ Handler ▸ Map ▸ 選擇Load Indexer 1,用B/W Clamp、F/W Clamp固定Tray,移動到Tray Sorter Position後解除兩個Clamp。',
          ja:'Host P/G ▸ Handler ▸ Map ▸ Load Indexer 1を選択し、B/W Clamp・F/W ClampでTrayを固定してTray Sorter Positionへ移動後、両方のClampを解除します。'
        }},
        {img:cmImg('F','nbga',46),tx:{
          en:'Host P/G ▸ Handler ▸ Map ▸ select TSM, move to the Load Pick_Place Position, and turn on the Left Picker Down Sol.',
          ko:'Host P/G ▸ Handler ▸ Map ▸ TSM 선택 후 Load Pick_Place Position으로 이동하고 Left Picker Down Sol을 켭니다.',
          zhCN:'Host P/G ▸ Handler ▸ Map ▸ 选择TSM,移动到Load Pick_Place Position并开启Left Picker Down Sol。',
          zhTW:'Host P/G ▸ Handler ▸ Map ▸ 選擇TSM,移動到Load Pick_Place Position並開啟Left Picker Down Sol。',
          ja:'Host P/G ▸ Handler ▸ Map ▸ TSMを選択し、Load Pick_Place Positionへ移動してLeft Picker Down SolをONにします。'
        }},
        {img:cmImg('F','nbga',47),tx:{
          en:'Move to the Z Load Pick_Place Position and clamp the Left Picker.',
          ko:'Z Load Pick_Place Position으로 이동한 뒤 Left Picker를 Clamp합니다.',
          zhCN:'移动到Z Load Pick_Place Position后Clamp Left Picker。',
          zhTW:'移動到Z Load Pick_Place Position後Clamp Left Picker。',
          ja:'Z Load Pick_Place Positionへ移動し、Left PickerをClampします。'
        }},
        {img:cmImg('F','nbga',48),tx:{
          en:'Move to the Z Safety Position, then to the X Jig1 Left Place Position.',
          ko:'Z Safety Position으로 이동한 뒤 X Jig1 Left Place Position으로 이동합니다.',
          zhCN:'移动到Z Safety Position后,再移动到X Jig1 Left Place Position。',
          zhTW:'移動到Z Safety Position後,再移動到X Jig1 Left Place Position。',
          ja:'Z Safety Positionへ移動した後、X Jig1 Left Place Positionへ移動します。'
        }},
        {img:cmImg('F','nbga',49),tx:{
          en:'Host P/G ▸ Handler ▸ Map ▸ select JIG1, move to the Tray Loading Position, and confirm all clamps are off.',
          ko:'Host P/G ▸ Handler ▸ Map ▸ JIG1 선택 후 Tray Loading Position으로 이동하고 모든 Clamp가 꺼져 있는지 확인합니다.',
          zhCN:'Host P/G ▸ Handler ▸ Map ▸ 选择JIG1,移动到Tray Loading Position并确认所有Clamp均已关闭。',
          zhTW:'Host P/G ▸ Handler ▸ Map ▸ 選擇JIG1,移動到Tray Loading Position並確認所有Clamp均已關閉。',
          ja:'Host P/G ▸ Handler ▸ Map ▸ JIG1を選択し、Tray Loading Positionへ移動してすべてのClampがOFFになっているか確認します。'
        }},
        {img:cmImg('F','nbga',50),tx:{
          en:'Host P/G ▸ Handler ▸ Map ▸ select TSM, lower the Z position, and place the tray on JIG1 — adjust the TSM X and JIG Y positions so the gap between the JIG pin and tray is 1mm. (Be careful not to damage the structure while lowering.)',
          ko:'Host P/G ▸ Handler ▸ Map ▸ TSM 선택 후 Z Position을 내려 JIG1에 Tray를 올립니다 — JIG Pin과 Tray 사이 간격이 1mm가 되도록 TSM X, JIG Y 위치를 조정합니다. (Z Position을 내릴 때 구조물 손상에 주의)',
          zhCN:'Host P/G ▸ Handler ▸ Map ▸ 选择TSM,降低Z Position将Tray放到JIG1上——调整TSM X、JIG Y位置使JIG Pin与Tray之间间隙为1mm。(降低Z Position时注意不要损坏结构)',
          zhTW:'Host P/G ▸ Handler ▸ Map ▸ 選擇TSM,降低Z Position將Tray放到JIG1上——調整TSM X、JIG Y位置使JIG Pin與Tray之間間隙為1mm。(降低Z Position時注意不要損壞結構)',
          ja:'Host P/G ▸ Handler ▸ Map ▸ TSMを選択し、Z Positionを下げてJIG1にTrayを置きます——JIG PinとTrayの間隔が1mmになるようTSM X、JIG Y位置を調整します。(Z Position降下時に構造物の破損に注意)'
        }},
        {img:cmImg('F','nbga',51),tx:{
          en:'Move the Z position so the gap between the ball bushing and stopper is 1–2mm, as shown.',
          ko:'그림처럼 Ball Bushing과 Stopper 사이 간격이 1~2mm가 되도록 Z Position을 이동합니다.',
          zhCN:'如图移动Z Position,使Ball Bushing与Stopper之间间隙为1~2mm。',
          zhTW:'如圖移動Z Position,使Ball Bushing與Stopper之間間隙為1~2mm。',
          ja:'図のようにBall BushingとStopperの間隔が1~2mmになるようZ Positionを移動します。'
        }},
        {img:cmImg('F','nbga',52),tx:{
          en:'Teach and save the current X position as the X Jig1 Left Place Position. Teach the X Jig2 Left Place Position the same way.',
          ko:'현재 X Position을 Teach & Save하여 X Jig1 Left Place Position으로 저장합니다. X Jig2 Left Place Position도 동일하게 Teaching합니다.',
          zhCN:'将当前X Position进行Teach & Save,保存为X Jig1 Left Place Position。X Jig2 Left Place Position也以相同方式进行Teaching。',
          zhTW:'將目前X Position進行Teach & Save,儲存為X Jig1 Left Place Position。X Jig2 Left Place Position也以相同方式進行Teaching。',
          ja:'現在のX PositionをTeach & SaveしてX Jig1 Left Place Positionとして保存します。X Jig2 Left Place Positionも同様にTeachingします。'
        }},
        {img:cmImg('F','nbga',53),tx:{
          en:'Teach and save the current Z position as the Z Jig1 Place Position. Teach the Z Jig2 Place Position the same way.',
          ko:'현재 Z Position을 Teach & Save하여 Z Jig1 Place Position으로 저장합니다. Z Jig2 Place Position도 동일하게 Teaching합니다.',
          zhCN:'将当前Z Position进行Teach & Save,保存为Z Jig1 Place Position。Z Jig2 Place Position也以相同方式进行Teaching。',
          zhTW:'將目前Z Position進行Teach & Save,儲存為Z Jig1 Place Position。Z Jig2 Place Position也以相同方式進行Teaching。',
          ja:'現在のZ PositionをTeach & SaveしてZ Jig1 Place Positionとして保存します。Z Jig2 Place Positionも同様にTeachingします。'
        }},
        {img:cmImg('F','nbga',54),tx:{
          en:'Host P/G ▸ Handler ▸ Map ▸ select JIG1, teach and save its current Y position as the Tray Loading Position. Teach JIG2\'s Tray Loading Position the same way.',
          ko:'Host P/G ▸ Handler ▸ Map ▸ JIG1 선택 후 현재 Y Position을 Teach & Save하여 Tray Loading Position으로 저장합니다. JIG2도 동일하게 Teaching합니다.',
          zhCN:'Host P/G ▸ Handler ▸ Map ▸ 选择JIG1,将当前Y Position进行Teach & Save,保存为Tray Loading Position。JIG2也以相同方式进行Teaching。',
          zhTW:'Host P/G ▸ Handler ▸ Map ▸ 選擇JIG1,將目前Y Position進行Teach & Save,儲存為Tray Loading Position。JIG2也以相同方式進行Teaching。',
          ja:'Host P/G ▸ Handler ▸ Map ▸ JIG1を選択し、現在のY PositionをTeach & SaveしてTray Loading Positionとして保存します。JIG2も同様にTeachingします。'
        }},
        {img:cmImg('F','nbga',55),tx:{
          en:'B. Tray Sorter Module — TSM X/Z Loader Pick/Place, Indexer Y Tray Sorting, TSM X/Z Jig Left Place, TSM X/Z Jig Right Pick.',
          ko:'B. Tray Sorter Module — TSM X/Z Loader Pick/Place, Indexer Y Tray Sorting, TSM X/Z Jig Left Place, TSM X/Z Jig Right Pick.',
          zhCN:'B. Tray Sorter Module——TSM X/Z Loader Pick/Place、Indexer Y Tray Sorting、TSM X/Z Jig Left Place、TSM X/Z Jig Right Pick。',
          zhTW:'B. Tray Sorter Module——TSM X/Z Loader Pick/Place、Indexer Y Tray Sorting、TSM X/Z Jig Left Place、TSM X/Z Jig Right Pick。',
          ja:'B. Tray Sorter Module——TSM X/Z Loader Pick/Place、Indexer Y Tray Sorting、TSM X/Z Jig Left Place、TSM X/Z Jig Right Pick。'
        }},
        {img:cmImg('F','nbga',56),tx:{
          en:'F-8. Tray Sorter Module — TSM X, Z Jig Right Pick\n\nThe TSM X Jig Right Pick Position is the X position where the Right Picker picks up the tray placed on the JIG. Place the tray on JIG1 as shown.',
          ko:'F-8. Tray Sorter Module — TSM X, Z Jig Right Pick\n\nTSM X Jig Right Pick Position은 JIG에 놓인 Tray를 Right Picker가 집어 올리는 X 위치입니다. 그림처럼 JIG1에 Tray를 올립니다.',
          zhCN:'F-8. Tray Sorter Module — TSM X, Z Jig Right Pick\n\nTSM X Jig Right Pick Position是Right Picker拾取JIG上Tray的X位置。如图将Tray放在JIG1上。',
          zhTW:'F-8. Tray Sorter Module — TSM X, Z Jig Right Pick\n\nTSM X Jig Right Pick Position是Right Picker拾取JIG上Tray的X位置。如圖將Tray放在JIG1上。',
          ja:'F-8. Tray Sorter Module — TSM X, Z Jig Right Pick\n\nTSM X Jig Right PositionはJIGに置かれたTrayをRight Pickerが拾い上げるX位置です。図のようにJIG1にTrayを置きます。'
        }},
        {img:cmImg('F','nbga',57),tx:{
          en:'Host P/G ▸ Handler ▸ Map ▸ select JIG1, turn on its X Clamp and Y Clamp to hold the tray against the JIG pin (Inner Clamp off), then move JIG1 to the Tray Loading Position.',
          ko:'Host P/G ▸ Handler ▸ Map ▸ JIG1 선택 후 X Clamp·Y Clamp를 켜서 Tray를 JIG Pin에 밀착시키고(Inner Clamp는 Off) JIG1을 Tray Loading Position으로 이동합니다.',
          zhCN:'Host P/G ▸ Handler ▸ Map ▸ 选择JIG1,开启X Clamp、Y Clamp使Tray贴紧JIG Pin(Inner Clamp关闭),然后将JIG1移动到Tray Loading Position。',
          zhTW:'Host P/G ▸ Handler ▸ Map ▸ 選擇JIG1,開啟X Clamp、Y Clamp使Tray貼緊JIG Pin(Inner Clamp關閉),然後將JIG1移動到Tray Loading Position。',
          ja:'Host P/G ▸ Handler ▸ Map ▸ JIG1を選択し、X Clamp・Y ClampをONにしてTrayをJIG Pinに密着させ(Inner ClampはOff)、JIG1をTray Loading Positionへ移動します。'
        }},
        {img:cmImg('F','nbga',58),tx:{
          en:'Move to the Tray Loading Position.',
          ko:'Tray Loading Position으로 이동합니다.',
          zhCN:'移动到Tray Loading Position。',
          zhTW:'移動到Tray Loading Position。',
          ja:'Tray Loading Positionへ移動します。'
        }},
        {img:cmImg('F','nbga',59),tx:{
          en:'Host P/G ▸ Handler ▸ Map ▸ select TSM, move to the X Jig1 Right Pick Position, and turn on the Right Picker Down Sol.',
          ko:'Host P/G ▸ Handler ▸ Map ▸ TSM 선택 후 X Jig1 Right Pick Position으로 이동하고 Right Picker Down Sol을 켭니다.',
          zhCN:'Host P/G ▸ Handler ▸ Map ▸ 选择TSM,移动到X Jig1 Right Pick Position并开启Right Picker Down Sol。',
          zhTW:'Host P/G ▸ Handler ▸ Map ▸ 選擇TSM,移動到X Jig1 Right Pick Position並開啟Right Picker Down Sol。',
          ja:'Host P/G ▸ Handler ▸ Map ▸ TSMを選択し、X Jig1 Right Pick Positionへ移動してRight Picker Down SolをONにします。'
        }},
        {img:cmImg('F','nbga',60),tx:{
          en:'Lower the Z position so the tray is in close contact with the jig table guide pin — check the position carefully to avoid a crash.',
          ko:'JIG Table Guide Pin에 Tray가 밀착되도록 Z Position을 내립니다 — 충돌하지 않도록 위치를 주의 깊게 확인합니다.',
          zhCN:'降低Z Position使Tray与JIG Table Guide Pin紧密贴合——请仔细确认位置以避免碰撞。',
          zhTW:'降低Z Position使Tray與JIG Table Guide Pin緊密貼合——請仔細確認位置以避免碰撞。',
          ja:'JIG Table Guide PinにTrayが密着するようZ Positionを下げます——衝突しないよう位置を注意深く確認します。'
        }},
        {img:cmImg('F','nbga',61),tx:{
          en:'Move the Z position so the gap between the ball bushing and stopper is 1–2mm, as shown.',
          ko:'그림처럼 Ball Bushing과 Stopper 사이 간격이 1~2mm가 되도록 Z Position을 이동합니다.',
          zhCN:'如图移动Z Position,使Ball Bushing与Stopper之间间隙为1~2mm。',
          zhTW:'如圖移動Z Position,使Ball Bushing與Stopper之間間隙為1~2mm。',
          ja:'図のようにBall BushingとStopperの間隔が1~2mmになるようZ Positionを移動します。'
        }},
        {img:cmImg('F','nbga',62),tx:{
          en:'Teach and save the current X position as the X Jig1 Right Pick Position. Teach the X Jig2 Right Pick Position the same way.',
          ko:'현재 X Position을 Teach & Save하여 X Jig1 Right Pick Position으로 저장합니다. X Jig2 Right Pick Position도 동일하게 Teaching합니다.',
          zhCN:'将当前X Position进行Teach & Save,保存为X Jig1 Right Pick Position。X Jig2 Right Pick Position也以相同方式进行Teaching。',
          zhTW:'將目前X Position進行Teach & Save,儲存為X Jig1 Right Pick Position。X Jig2 Right Pick Position也以相同方式進行Teaching。',
          ja:'現在のX PositionをTeach & SaveしてX Jig1 Right Pick Positionとして保存します。X Jig2 Right Pick Positionも同様にTeachingします。'
        }},
        {img:cmImg('F','nbga',63),tx:{
          en:'Teach and save the current Z position as the Z Jig1 Pick Position. Teach the Z Jig2 Pick Position the same way.',
          ko:'현재 Z Position을 Teach & Save하여 Z Jig1 Pick Position으로 저장합니다. Z Jig2 Pick Position도 동일하게 Teaching합니다.',
          zhCN:'将当前Z Position进行Teach & Save,保存为Z Jig1 Pick Position。Z Jig2 Pick Position也以相同方式进行Teaching。',
          zhTW:'將目前Z Position進行Teach & Save,儲存為Z Jig1 Pick Position。Z Jig2 Pick Position也以相同方式進行Teaching。',
          ja:'現在のZ PositionをTeach & SaveしてZ Jig1 Pick Positionとして保存します。Z Jig2 Pick Positionも同様にTeachingします。'
        }},
        {img:cmImg('F','nbga',64),tx:{
          en:'This chapter covers Handler Teaching — the position-teaching sequence for the Elevator, Tray Sorter Module (TSM), Tray Transfer Module (TTM), Multi Sorter, 3D Inspector, and 2D Inspector.',
          ko:'본 챕터에서는 Handler Teaching — Elevator, Tray Sorter Module(TSM), Tray Transfer Module(TTM), Multi Sorter, 3D Inspector, 2D Inspector의 Position Teaching 절차를 다룹니다.',
          zhCN:'本章介绍Handler Teaching——Elevator、Tray Sorter Module(TSM)、Tray Transfer Module(TTM)、Multi Sorter、3D Inspector、2D Inspector的Position Teaching流程。',
          zhTW:'本章介紹Handler Teaching——Elevator、Tray Sorter Module(TSM)、Tray Transfer Module(TTM)、Multi Sorter、3D Inspector、2D Inspector的Position Teaching流程。',
          ja:'本章ではHandler Teaching——Elevator、Tray Sorter Module(TSM)、Tray Transfer Module(TTM)、Multi Sorter、3D Inspector、2D InspectorのPosition Teaching手順を扱います。'
        }},
        {img:cmImg('F','nbga',65),tx:{
          en:'C. Tray Transfer Module (TTM) — this section covers the TTM X, Y, Z Position.',
          ko:'C. Tray Transfer Module(TTM) — TTM X, Y, Z Position을 다룹니다.',
          zhCN:'C. Tray Transfer Module(TTM)——本节介绍TTM X, Y, Z Position。',
          zhTW:'C. Tray Transfer Module(TTM)——本節介紹TTM X, Y, Z Position。',
          ja:'C. Tray Transfer Module(TTM)——本節ではTTM X, Y, Z Positionを扱います。'
        }},
        {img:cmImg('F','nbga',66),tx:{
          en:'TTM X Rail Position is the X position for transporting inspected trays to the Good, Buffer, Reject2, and Reject3 rails. Host P/G ▸ Handler ▸ Map ▸ select TTM, move to the X Empty Position.',
          ko:'TTM X Rail Position은 검사 완료된 Tray를 Good·Buffer·Reject2·Reject3 Rail로 이송하는 X 위치입니다. Host P/G ▸ Handler ▸ Map ▸ TTM 선택 후 X Empty Position으로 이동합니다.',
          zhCN:'TTM X Rail Position是将检验完成的Tray搬运到Good、Buffer、Reject2、Reject3 Rail的X位置。Host P/G ▸ Handler ▸ Map ▸ 选择TTM,移动到X Empty Position。',
          zhTW:'TTM X Rail Position是將檢驗完成的Tray搬運到Good、Buffer、Reject2、Reject3 Rail的X位置。Host P/G ▸ Handler ▸ Map ▸ 選擇TTM,移動到X Empty Position。',
          ja:'TTM X Rail Positionは検査済みのTrayをGood・Buffer・Reject2・Reject3 Railへ搬送するX位置です。Host P/G ▸ Handler ▸ Map ▸ TTMを選択し、X Empty Positionへ移動します。'
        }},
        {img:cmImg('F','nbga',67),tx:{
          en:'Place the tray at the rear of the Empty Rail as shown, move the TTM to the center of the rail, then lower the Z-axis to check for interference with the rail.',
          ko:'그림처럼 Empty Rail 후방에 Tray를 놓고 TTM을 Rail 중앙으로 이동시킨 뒤, Z축을 내려 Rail과의 간섭을 확인합니다.',
          zhCN:'如图将Tray放在Empty Rail后方,将TTM移动到Rail中央,然后降低Z轴确认与Rail是否干涉。',
          zhTW:'如圖將Tray放在Empty Rail後方,將TTM移動到Rail中央,然後降低Z軸確認與Rail是否干涉。',
          ja:'図のようにEmpty Rail後方にTrayを置き、TTMをRail中央へ移動させた後、Z軸を下げてRailとの干渉を確認します。'
        }},
        {img:cmImg('F','nbga',68),tx:{
          en:'Teach and save the current X position as the TTM X Empty Position. Teach the Good, Buffer, Reject2, and Reject3 Rail X positions the same way.',
          ko:'현재 X Position을 Teach & Save하여 TTM X Empty Position으로 저장합니다. Good·Buffer·Reject2·Reject3 Rail의 X Position도 동일하게 Teaching합니다.',
          zhCN:'将当前X Position进行Teach & Save,保存为TTM X Empty Position。Good、Buffer、Reject2、Reject3 Rail的X Position也以相同方式进行Teaching。',
          zhTW:'將目前X Position進行Teach & Save,儲存為TTM X Empty Position。Good、Buffer、Reject2、Reject3 Rail的X Position也以相同方式進行Teaching。',
          ja:'現在のX PositionをTeach & SaveしてTTM X Empty Positionとして保存します。Good・Buffer・Reject2・Reject3 RailのX Positionも同様にTeachingします。'
        }},
        {img:cmImg('F','nbga',69),tx:{
          en:'Host P/G ▸ Handler ▸ Map ▸ select Empty Indexer, turn on the B/W Clamp, and move to the Rear Tray Position. (Check for tray interference before proceeding.)',
          ko:'Host P/G ▸ Handler ▸ Map ▸ Empty Indexer 선택 후 B/W Clamp를 켜고 Rear Tray Position으로 이동합니다. (진행 전 Tray 간섭 여부 확인)',
          zhCN:'Host P/G ▸ Handler ▸ Map ▸ 选择Empty Indexer,开启B/W Clamp并移动到Rear Tray Position。(操作前请先确认Tray是否干涉)',
          zhTW:'Host P/G ▸ Handler ▸ Map ▸ 選擇Empty Indexer,開啟B/W Clamp並移動到Rear Tray Position。(操作前請先確認Tray是否干涉)',
          ja:'Host P/G ▸ Handler ▸ Map ▸ Empty Indexerを選択し、B/W ClampをONにしてRear Tray Positionへ移動します。(進行前にTrayの干渉を確認)'
        }},
        {img:cmImg('F','nbga',70),tx:{
          en:'Move the indexer so the plate and tray align, as shown.',
          ko:'그림처럼 Plate와 Tray가 맞도록 Indexer를 이동합니다.',
          zhCN:'如图移动Indexer,使Plate与Tray对齐。',
          zhTW:'如圖移動Indexer,使Plate與Tray對齊。',
          ja:'図のようにPlateとTrayが合うようIndexerを移動します。'
        }},
        {img:cmImg('F','nbga',71),tx:{
          en:'Teach and save the current Y position as the Rear Tray Position. Teach the Good, Buffer, Reject2, and Reject3 Rail the same way.',
          ko:'현재 Y Position을 Teach & Save하여 Rear Tray Position으로 저장합니다. Good·Buffer·Reject2·Reject3 Rail도 동일하게 Teaching합니다.',
          zhCN:'将当前Y Position进行Teach & Save,保存为Rear Tray Position。Good、Buffer、Reject2、Reject3 Rail也以相同方式进行Teaching。',
          zhTW:'將目前Y Position進行Teach & Save,儲存為Rear Tray Position。Good、Buffer、Reject2、Reject3 Rail也以相同方式進行Teaching。',
          ja:'現在のY PositionをTeach & SaveしてRear Tray Positionとして保存します。Good・Buffer・Reject2・Reject3 Railも同様にTeachingします。'
        }},
        {img:cmImg('F','nbga',72),tx:{
          en:'Lower the TTM so the gap between the ball bushing and stopper is 1–2mm, as shown.',
          ko:'그림처럼 Ball Bushing과 Stopper 사이 간격이 1~2mm가 되도록 TTM을 내립니다.',
          zhCN:'如图降低TTM,使Ball Bushing与Stopper之间间隙为1~2mm。',
          zhTW:'如圖降低TTM,使Ball Bushing與Stopper之間間隙為1~2mm。',
          ja:'図のようにBall BushingとStopperの間隔が1~2mmになるようTTMを下げます。'
        }},
        {img:cmImg('F','nbga',73),tx:{
          en:'Teach and save the current Z position as the Z Empty Position. Teach the Good, Buffer, Reject2, and Reject3 Rail Z positions the same way.',
          ko:'현재 Z Position을 Teach & Save하여 Z Empty Position으로 저장합니다. Good·Buffer·Reject2·Reject3 Rail의 Z Position도 동일하게 Teaching합니다.',
          zhCN:'将当前Z Position进行Teach & Save,保存为Z Empty Position。Good、Buffer、Reject2、Reject3 Rail的Z Position也以相同方式进行Teaching。',
          zhTW:'將目前Z Position進行Teach & Save,儲存為Z Empty Position。Good、Buffer、Reject2、Reject3 Rail的Z Position也以相同方式進行Teaching。',
          ja:'現在のZ PositionをTeach & SaveしてZ Empty Positionとして保存します。Good・Buffer・Reject2・Reject3 RailのZ Positionも同様にTeachingします。'
        }},
        {img:cmImg('F','nbga',74),tx:{
          en:'Clamp the tray, then move to the Safety Position to check for interference.',
          ko:'Tray를 Clamp한 뒤 Safety Position으로 이동해 간섭 여부를 확인합니다.',
          zhCN:'Clamp Tray后移动到Safety Position确认是否干涉。',
          zhTW:'Clamp Tray後移動到Safety Position確認是否干涉。',
          ja:'TrayをClampした後、Safety Positionへ移動して干渉の有無を確認します。'
        }},
        {img:cmImg('F','nbga',75),tx:{
          en:'This chapter covers Handler Teaching — the position-teaching sequence for the Elevator, Tray Sorter Module (TSM), Tray Transfer Module (TTM), Multi Sorter, 3D Inspector, and 2D Inspector.',
          ko:'본 챕터에서는 Handler Teaching — Elevator, Tray Sorter Module(TSM), Tray Transfer Module(TTM), Multi Sorter, 3D Inspector, 2D Inspector의 Position Teaching 절차를 다룹니다.',
          zhCN:'本章介绍Handler Teaching——Elevator、Tray Sorter Module(TSM)、Tray Transfer Module(TTM)、Multi Sorter、3D Inspector、2D Inspector的Position Teaching流程。',
          zhTW:'本章介紹Handler Teaching——Elevator、Tray Sorter Module(TSM)、Tray Transfer Module(TTM)、Multi Sorter、3D Inspector、2D Inspector的Position Teaching流程。',
          ja:'本章ではHandler Teaching——Elevator、Tray Sorter Module(TSM)、Tray Transfer Module(TTM)、Multi Sorter、3D Inspector、2D InspectorのPosition Teaching手順を扱います。'
        }},
        {img:cmImg('F','nbga',76),tx:{
          en:'D. Multi Sorter — this section covers the Multi Sorter X, Y, Z Position.',
          ko:'D. Multi Sorter — Multi Sorter X, Y, Z Position을 다룹니다.',
          zhCN:'D. Multi Sorter——本节介绍Multi Sorter X, Y, Z Position。',
          zhTW:'D. Multi Sorter——本節介紹Multi Sorter X, Y, Z Position。',
          ja:'D. Multi Sorter——本節ではMulti Sorter X, Y, Z Positionを扱います。'
        }},
        {img:cmImg('F','nbga',77),tx:{
          en:'The Multi Sorter X Position is used for sorting normal or defective devices — a reference tray and a teaching pin are needed.',
          ko:'Multi Sorter X Position은 정상·불량 소자를 분류하는 위치입니다 — Reference Tray와 Teaching Pin이 필요합니다.',
          zhCN:'Multi Sorter X Position用于分拣正常或不良器件——需要Reference Tray和Teaching Pin。',
          zhTW:'Multi Sorter X Position用於分類正常或不良元件——需要Reference Tray和Teaching Pin。',
          ja:'Multi Sorter X Positionは正常品・不良品を選別する位置です——Reference TrayとTeaching Pinが必要です。'
        }},
        {img:cmImg('F','nbga',78),tx:{
          en:'Attach the teaching pin to the Multi Sorter\'s left picker as shown. Host P/G ▸ Handler ▸ Map ▸ select Indexer, place the reference tray on the rail, clamp it, then move to the Multi Sorter Position.',
          ko:'그림처럼 Multi Sorter의 Left Picker에 Teaching Pin을 부착합니다. Host P/G ▸ Handler ▸ Map ▸ Indexer 선택 후 Reference Tray를 Rail에 올려 Clamp하고 Multi Sorter Position으로 이동합니다.',
          zhCN:'如图将Teaching Pin安装到Multi Sorter的Left Picker上。Host P/G ▸ Handler ▸ Map ▸ 选择Indexer,将Reference Tray放到Rail上并Clamp,然后移动到Multi Sorter Position。',
          zhTW:'如圖將Teaching Pin安裝到Multi Sorter的Left Picker上。Host P/G ▸ Handler ▸ Map ▸ 選擇Indexer,將Reference Tray放到Rail上並Clamp,然後移動到Multi Sorter Position。',
          ja:'図のようにMulti SorterのLeft PickerにTeaching Pinを取り付けます。Host P/G ▸ Handler ▸ Map ▸ Indexerを選択し、Reference TrayをRailに置いてClampし、Multi Sorter Positionへ移動します。'
        }},
        {img:cmImg('F','nbga',79),tx:{
          en:'Host P/G ▸ Handler ▸ Map ▸ select Multi Sorter, move to the X Position to teach, and turn on the Left Picker Down Sol.',
          ko:'Host P/G ▸ Handler ▸ Map ▸ Multi Sorter 선택 후 Teaching할 X Position으로 이동하고 Left Picker Down Sol을 켭니다.',
          zhCN:'Host P/G ▸ Handler ▸ Map ▸ 选择Multi Sorter,移动到要Teaching的X Position并开启Left Picker Down Sol。',
          zhTW:'Host P/G ▸ Handler ▸ Map ▸ 選擇Multi Sorter,移動到要Teaching的X Position並開啟Left Picker Down Sol。',
          ja:'Host P/G ▸ Handler ▸ Map ▸ Multi Sorterを選択し、TeachingするX Positionへ移動してLeft Picker Down SolをONにします。'
        }},
        {img:cmImg('F','nbga',80),tx:{
          en:'Lower the Z-axis until the teaching pin touches the reference tray, then move the Multi Sorter X and Indexer so the pin matches the cross line. (Note: while the Z-axis is lowered, the X-axis does not move.)',
          ko:'Teaching Pin이 Reference Tray에 닿을 때까지 Z축을 내린 뒤, Pin이 십자선(Cross Line)에 맞도록 Multi Sorter X와 Indexer를 이동합니다. (Z축을 내리는 동안 X축은 움직이지 않음)',
          zhCN:'降低Z轴直到Teaching Pin接触Reference Tray,然后移动Multi Sorter X与Indexer使Pin对准十字线(Cross Line)。(降低Z轴期间X轴不会移动)',
          zhTW:'降低Z軸直到Teaching Pin接觸Reference Tray,然後移動Multi Sorter X與Indexer使Pin對準十字線(Cross Line)。(降低Z軸期間X軸不會移動)',
          ja:'Teaching PinがReference Trayに接触するまでZ軸を下げた後、PinがCross Lineに合うようMulti Sorter XとIndexerを移動します。(Z軸降下中はX軸が動きません)'
        }},
        {img:cmImg('F','nbga',81),tx:{
          en:'Teach and save the X, Y position of the rail. Teach the Multi Sorter X and Indexer Y positions of the Good, Buffer, Reject2, and Reject3 Rail the same way.',
          ko:'Rail의 X, Y Position을 Teach & Save합니다. Good·Buffer·Reject2·Reject3 Rail의 Multi Sorter X, Indexer Y Position도 동일하게 Teaching합니다.',
          zhCN:'将Rail的X、Y Position进行Teach & Save。Good、Buffer、Reject2、Reject3 Rail的Multi Sorter X、Indexer Y Position也以相同方式进行Teaching。',
          zhTW:'將Rail的X、Y Position進行Teach & Save。Good、Buffer、Reject2、Reject3 Rail的Multi Sorter X、Indexer Y Position也以相同方式進行Teaching。',
          ja:'RailのX、Y PositionをTeach & Saveします。Good・Buffer・Reject2・Reject3 RailのMulti Sorter X、Indexer Y Positionも同様にTeachingします。'
        }},
        {img:cmImg('F','nbga',82),tx:{
          en:'The teaching pin must apply no pressure to the tray. (E.g., if the current Z position is 11.5mm, the Z Pick Position is 12.5mm and the Z Place Position is 10.5mm.) Teach the Good, Buffer, Reject2, and Reject3 Z positions the same way.',
          ko:'Teaching Pin은 Tray에 압력이 가해지지 않는 위치여야 합니다. (예: 현재 Z Position이 11.5mm이면 Z Pick Position은 12.5mm, Z Place Position은 10.5mm) Good·Buffer·Reject2·Reject3의 Z Position도 동일하게 Teaching합니다.',
          zhCN:'Teaching Pin须处于不对Tray施加压力的位置。(例如:当前Z Position为11.5mm时,Z Pick Position为12.5mm,Z Place Position为10.5mm)Good、Buffer、Reject2、Reject3的Z Position也以相同方式进行Teaching。',
          zhTW:'Teaching Pin須處於不對Tray施加壓力的位置。(例如:目前Z Position為11.5mm時,Z Pick Position為12.5mm,Z Place Position為10.5mm)Good、Buffer、Reject2、Reject3的Z Position也以相同方式進行Teaching。',
          ja:'Teaching PinはTrayに圧力がかからない位置である必要があります。(例:現在のZ Positionが11.5mmの場合、Z Pick Positionは12.5mm、Z Place Positionは10.5mm)Good・Buffer・Reject2・Reject3のZ Positionも同様にTeachingします。'
        }},
        {img:cmImg('F','nbga',83),tx:{
          en:'This chapter covers Handler Teaching — the position-teaching sequence for the Elevator, Tray Sorter Module (TSM), Tray Transfer Module (TTM), Multi Sorter, 3D Inspector, and 2D Inspector.',
          ko:'본 챕터에서는 Handler Teaching — Elevator, Tray Sorter Module(TSM), Tray Transfer Module(TTM), Multi Sorter, 3D Inspector, 2D Inspector의 Position Teaching 절차를 다룹니다.',
          zhCN:'本章介绍Handler Teaching——Elevator、Tray Sorter Module(TSM)、Tray Transfer Module(TTM)、Multi Sorter、3D Inspector、2D Inspector的Position Teaching流程。',
          zhTW:'本章介紹Handler Teaching——Elevator、Tray Sorter Module(TSM)、Tray Transfer Module(TTM)、Multi Sorter、3D Inspector、2D Inspector的Position Teaching流程。',
          ja:'本章ではHandler Teaching——Elevator、Tray Sorter Module(TSM)、Tray Transfer Module(TTM)、Multi Sorter、3D Inspector、2D InspectorのPosition Teaching手順を扱います。'
        }},
        {img:cmImg('F','nbga',84),tx:{
          en:'E. 3D Inspector — this section covers the Inspector X,Y Reference Position, Turret X (Left/Right), and Turret X,Y Reference Offset.',
          ko:'E. 3D Inspector — Inspector X,Y Reference Position, Turret X(Left/Right), Turret X,Y Reference Offset을 다룹니다.',
          zhCN:'E. 3D Inspector——本节介绍Inspector X,Y Reference Position、Turret X(Left/Right)、Turret X,Y Reference Offset。',
          zhTW:'E. 3D Inspector——本節介紹Inspector X,Y Reference Position、Turret X(Left/Right)、Turret X,Y Reference Offset。',
          ja:'E. 3D Inspector——本節ではInspector X,Y Reference Position、Turret X(Left/Right)、Turret X,Y Reference Offsetを扱います。'
        }},
        {img:cmImg('F','nbga',85),tx:{
          en:'This is the X/Y reference-position teaching for the 3D optical system. Place a reference tray on the JIG.',
          ko:'3D 광학계의 X/Y Reference Position Teaching입니다. JIG에 Reference Tray를 올립니다.',
          zhCN:'这是3D光学系统的X/Y Reference Position Teaching。将Reference Tray放在JIG上。',
          zhTW:'這是3D光學系統的X/Y Reference Position Teaching。將Reference Tray放在JIG上。',
          ja:'3D光学系のX/Y Reference Position Teachingです。JIGにReference Trayを置きます。'
        }},
        {img:cmImg('F','nbga',86),tx:{
          en:'Host P/G ▸ Handler ▸ Map ▸ select JIG1, turn on the X Push Sol, Y Push Sol, and Inner Clamp, and confirm the reference tray is in close contact with the jig pin as shown.',
          ko:'Host P/G ▸ Handler ▸ Map ▸ JIG1 선택 후 X Push Sol·Y Push Sol·Inner Clamp를 켜고, 그림처럼 Reference Tray가 JIG Pin에 밀착되었는지 확인합니다.',
          zhCN:'Host P/G ▸ Handler ▸ Map ▸ 选择JIG1,开启X Push Sol、Y Push Sol、Inner Clamp,并如图确认Reference Tray与JIG Pin紧密贴合。',
          zhTW:'Host P/G ▸ Handler ▸ Map ▸ 選擇JIG1,開啟X Push Sol、Y Push Sol、Inner Clamp,並如圖確認Reference Tray與JIG Pin緊密貼合。',
          ja:'Host P/G ▸ Handler ▸ Map ▸ JIG1を選択し、X Push Sol・Y Push Sol・Inner ClampをONにして、図のようにReference TrayがJIG Pinに密着しているか確認します。'
        }},
        {img:cmImg('F','nbga',87),tx:{
          en:'Connect to the 3D Vision PC from the Host PC using a remote desktop program. (3D Vision#1 PC IP: 10.10.1.11, 3D Vision#2 PC IP: 10.10.1.21)',
          ko:'Host PC에서 원격 데스크톱 프로그램으로 3D Vision PC에 접속합니다. (3D Vision#1 PC IP: 10.10.1.11, 3D Vision#2 PC IP: 10.10.1.21)',
          zhCN:'从Host PC使用远程桌面程序连接3D Vision PC。(3D Vision#1 PC IP:10.10.1.11,3D Vision#2 PC IP:10.10.1.21)',
          zhTW:'從Host PC使用遠端桌面程式連接3D Vision PC。(3D Vision#1 PC IP:10.10.1.11,3D Vision#2 PC IP:10.10.1.21)',
          ja:'Host PCからリモートデスクトッププログラムで3D Vision PCに接続します。(3D Vision#1 PC IP:10.10.1.11、3D Vision#2 PC IP:10.10.1.21)'
        }},
        {img:cmImg('F','nbga',88),tx:{
          en:'Run the vision program on the 3D Vision PC and click Illumination Control.',
          ko:'3D Vision PC에서 Vision 프로그램을 실행하고 Illumination Control을 클릭합니다.',
          zhCN:'在3D Vision PC上运行Vision程序并点击Illumination Control。',
          zhTW:'在3D Vision PC上執行Vision程式並點擊Illumination Control。',
          ja:'3D Vision PCでVisionプログラムを実行し、Illumination Controlをクリックします。'
        }},
        {img:cmImg('F','nbga',89),tx:{
          en:'Turn on the light.',
          ko:'조명(Light)을 켭니다.',
          zhCN:'打开照明(Light)。',
          zhTW:'打開照明(Light)。',
          ja:'照明(Light)をONにします。'
        }},
        {img:cmImg('F','nbga',90),tx:{
          en:'Move to the X, Y Reference Position, run the AF Program, and lower the Z position until the image is sharpest.',
          ko:'X, Y Reference Position으로 이동한 뒤 AF Program을 실행하고, 화면이 가장 선명하게 보이도록 Z Position을 내립니다.',
          zhCN:'移动到X、Y Reference Position后运行AF Program,降低Z Position直至画面最清晰。',
          zhTW:'移動到X、Y Reference Position後執行AF Program,降低Z Position直至畫面最清晰。',
          ja:'X、Y Reference Positionへ移動後AF Programを実行し、画像が最も鮮明になるようZ Positionを下げます。'
        }},
        {img:cmImg('F','nbga',91),tx:{
          en:'Right-click the image to enable "Show image center line", then adjust the 3D optical module\'s X and Y position so the center cross line matches the reference tray\'s cross line.',
          ko:'화면을 우클릭하여 "Show image center line" 옵션을 켠 뒤, 3D 광학 모듈의 X, Y 위치를 조정해 Center Cross Line과 Reference Tray의 십자선을 일치시킵니다.',
          zhCN:'右键点击画面启用"Show image center line"选项,然后调整3D光学模块的X、Y位置,使中心十字线与Reference Tray的十字线对齐。',
          zhTW:'右鍵點擊畫面啟用「Show image center line」選項,然後調整3D光學模組的X、Y位置,使中心十字線與Reference Tray的十字線對齊。',
          ja:'画像を右クリックして「Show image center line」オプションをONにし、3D光学モジュールのX、Y位置を調整して中心十字線とReference Trayの十字線を一致させます。'
        }},
        {img:cmImg('F','nbga',92),tx:{
          en:'Teach and save the current X position as the JIG X Reference Position.',
          ko:'현재 X Position을 Teach & Save하여 JIG X Reference Position으로 저장합니다.',
          zhCN:'将当前X Position进行Teach & Save,保存为JIG X Reference Position。',
          zhTW:'將目前X Position進行Teach & Save,儲存為JIG X Reference Position。',
          ja:'現在のX PositionをTeach & SaveしてJIG X Reference Positionとして保存します。'
        }},
        {img:cmImg('F','nbga',93),tx:{
          en:'Teach and save the current Y position as the JIG Y Reference Position.',
          ko:'현재 Y Position을 Teach & Save하여 JIG Y Reference Position으로 저장합니다.',
          zhCN:'将当前Y Position进行Teach & Save,保存为JIG Y Reference Position。',
          zhTW:'將目前Y Position進行Teach & Save,儲存為JIG Y Reference Position。',
          ja:'現在のY PositionをTeach & SaveしてJIG Y Reference Positionとして保存します。'
        }},
        {img:cmImg('F','nbga',94),tx:{
          en:'E. 3D Inspector — this section covers the Inspector X,Y Reference Position, Turret X (Left/Right), and Turret X,Y Reference Offset.',
          ko:'E. 3D Inspector — Inspector X,Y Reference Position, Turret X(Left/Right), Turret X,Y Reference Offset을 다룹니다.',
          zhCN:'E. 3D Inspector——本节介绍Inspector X,Y Reference Position、Turret X(Left/Right)、Turret X,Y Reference Offset。',
          zhTW:'E. 3D Inspector——本節介紹Inspector X,Y Reference Position、Turret X(Left/Right)、Turret X,Y Reference Offset。',
          ja:'E. 3D Inspector——本節ではInspector X,Y Reference Position、Turret X(Left/Right)、Turret X,Y Reference Offsetを扱います。'
        }},
        {img:cmImg('F','nbga',95),tx:{
          en:'Turret X aligns the optical axis of a turret-type 3D optical system. Turret optics have a 1.0x magnification position and a 1.2x/0.8x magnification position (single-optics systems are taught the same way as the 1.0x position).',
          ko:'Turret X는 Turret 타입 3D 광학계의 광축을 정렬하는 위치입니다. Turret 광학계는 1.0x 배율 위치와 1.2x/0.8x 배율 위치를 가지며(Single 광학계는 1.0x 위치와 동일한 방식으로 Teaching), 각각 Teaching합니다.',
          zhCN:'Turret X用于对准Turret型3D光学系统的光轴。Turret光学系统具有1.0x倍率位置与1.2x/0.8x倍率位置(Single光学系统按1.0x位置相同方式进行Teaching)。',
          zhTW:'Turret X用於對準Turret型3D光學系統的光軸。Turret光學系統具有1.0x倍率位置與1.2x/0.8x倍率位置(Single光學系統按1.0x位置相同方式進行Teaching)。',
          ja:'Turret XはTurretタイプ3D光学系の光軸を合わせる位置です。Turret光学系には1.0x倍率位置と1.2x/0.8x倍率位置があり(Single光学系は1.0x位置と同じ方法でTeaching)、それぞれTeachingします。'
        }},
        {img:cmImg('F','nbga',96),tx:{
          en:'Connect to the 3D Vision PC from the Host PC using a remote desktop program. (Same IPs as before.)',
          ko:'Host PC에서 원격 데스크톱 프로그램으로 3D Vision PC에 접속합니다. (앞서와 동일한 IP)',
          zhCN:'从Host PC使用远程桌面程序连接3D Vision PC。(IP与前述相同)',
          zhTW:'從Host PC使用遠端桌面程式連接3D Vision PC。(IP與前述相同)',
          ja:'Host PCからリモートデスクトッププログラムで3D Vision PCに接続します。(IPは前述と同じ)'
        }},
        {img:cmImg('F','nbga',97),tx:{
          en:'Run the vision program, click Illumination Control, and turn on the 3D light.',
          ko:'Vision 프로그램을 실행하고 Illumination Control을 클릭한 뒤 3D Light를 켭니다.',
          zhCN:'运行Vision程序,点击Illumination Control,然后打开3D Light。',
          zhTW:'執行Vision程式,點擊Illumination Control,然後打開3D Light。',
          ja:'Visionプログラムを実行し、Illumination Controlをクリックして3D LightをONにします。'
        }},
        {img:cmImg('F','nbga',98),tx:{
          en:'Host P/G ▸ Handler ▸ Map ▸ select FINS (3D Vision#1) or SINS (3D Vision#2), then move the turret X position until the edge of the 1.0x magnification lens is visible in the image.',
          ko:'Host P/G ▸ Handler ▸ Map ▸ FINS(3D Vision#1) 또는 SINS(3D Vision#2) 선택 후, 1.0x 배율 렌즈의 가장자리가 화면에 보일 때까지 Turret X Position을 이동합니다.',
          zhCN:'Host P/G ▸ Handler ▸ Map ▸ 选择FINS(3D Vision#1)或SINS(3D Vision#2),移动Turret X Position直至1.0x倍率镜头边缘出现在画面中。',
          zhTW:'Host P/G ▸ Handler ▸ Map ▸ 選擇FINS(3D Vision#1)或SINS(3D Vision#2),移動Turret X Position直至1.0x倍率鏡頭邊緣出現在畫面中。',
          ja:'Host P/G ▸ Handler ▸ Map ▸ FINS(3D Vision#1)またはSINS(3D Vision#2)を選択し、1.0x倍率レンズの端が画面に見えるまでTurret X Positionを移動します。'
        }},
        {img:cmImg('F','nbga',99),tx:{
          en:'Starting from where the lens edge appears on one side of the image, move the turret X position until it appears on the opposite side. If the top and bottom views differ, the lens position itself must be adjusted.',
          ko:'렌즈 가장자리가 화면 한쪽에 나타난 지점에서 시작해 반대쪽에 나타날 때까지 Turret X Position을 이동합니다. 상단·하단 View가 다르면 렌즈 위치 자체를 조정해야 합니다.',
          zhCN:'从镜头边缘出现在画面一侧的位置开始,移动Turret X Position直至出现在相反一侧。若上、下View不同,则需直接调整镜头位置。',
          zhTW:'從鏡頭邊緣出現在畫面一側的位置開始,移動Turret X Position直至出現在相反一側。若上、下View不同,則需直接調整鏡頭位置。',
          ja:'レンズの端が画面の片側に現れた位置から始め、反対側に現れるまでTurret X Positionを移動します。上下のViewが異なる場合はレンズ位置自体を調整する必要があります。'
        }},
        {img:cmImg('F','nbga',100),tx:{
          en:'Loosen the ① bolts holding the lens so it can move, then adjust the ② bolts so the top and bottom ③ areas of the right live video match.',
          ko:'렌즈를 고정하는 ①번 볼트를 풀어 움직일 수 있게 한 뒤, ②번 볼트로 우측 Live 영상의 상·하 ③번 영역이 같아지도록 조정합니다.',
          zhCN:'松开固定镜头的①号螺栓使其可移动,然后调整②号螺栓,使右侧Live影像的上下③号区域一致。',
          zhTW:'鬆開固定鏡頭的①號螺栓使其可移動,然後調整②號螺栓,使右側Live影像的上下③號區域一致。',
          ja:'レンズを固定する①のボルトを緩めて動かせるようにし、②のボルトで右側Live映像の上下③の領域が同じになるよう調整します。'
        }},
        {img:cmImg('F','nbga',101),tx:{
          en:'Calculate the move distance and teach it as the middle position and save it. (The middle position is −(move distance/2) if X moved in [+], or +(move distance/2) if it moved in [−].) Teach the 1.2x Turret X Position the same way.',
          ko:'이동 거리를 계산해 중간 위치로 Teaching하여 저장합니다. (X가 [+]로 이동했다면 중간 위치는 −(이동거리/2), [−]로 이동했다면 +(이동거리/2)) 1.2x Turret X Position도 동일하게 Teaching합니다.',
          zhCN:'计算移动距离,将其作为中间位置进行Teaching并保存。(若X向[+]方向移动,中间位置为−(移动距离/2);若向[−]方向移动,则为+(移动距离/2))1.2x Turret X Position也以相同方式进行Teaching。',
          zhTW:'計算移動距離,將其作為中間位置進行Teaching並儲存。(若X向[+]方向移動,中間位置為−(移動距離/2);若向[−]方向移動,則為+(移動距離/2))1.2x Turret X Position也以相同方式進行Teaching。',
          ja:'移動距離を計算し、中間位置としてTeachingして保存します。(Xが[+]方向に移動した場合、中間位置は−(移動距離/2)、[−]方向の場合は+(移動距離/2))1.2x Turret X Positionも同様にTeachingします。'
        }},
        {img:cmImg('F','nbga',102),tx:{
          en:'E. 3D Inspector — this section covers the Inspector X,Y Reference Position, Turret X (Left/Right), and Turret X,Y Reference Offset.',
          ko:'E. 3D Inspector — Inspector X,Y Reference Position, Turret X(Left/Right), Turret X,Y Reference Offset을 다룹니다.',
          zhCN:'E. 3D Inspector——本节介绍Inspector X,Y Reference Position、Turret X(Left/Right)、Turret X,Y Reference Offset。',
          zhTW:'E. 3D Inspector——本節介紹Inspector X,Y Reference Position、Turret X(Left/Right)、Turret X,Y Reference Offset。',
          ja:'E. 3D Inspector——本節ではInspector X,Y Reference Position、Turret X(Left/Right)、Turret X,Y Reference Offsetを扱います。'
        }},
        {img:cmImg('F','nbga',103),tx:{
          en:'Move to the Turret X 1.2x/0.8x Position.',
          ko:'Turret X 1.2x/0.8x Position으로 이동합니다.',
          zhCN:'移动到Turret X 1.2x/0.8x Position。',
          zhTW:'移動到Turret X 1.2x/0.8x Position。',
          ja:'Turret X 1.2x/0.8x Positionへ移動します。'
        }},
        {img:cmImg('F','nbga',104),tx:{
          en:'Calculate the X and Y distances the centerline needs to travel to reach the reference.',
          ko:'중심선이 Reference까지 이동해야 할 X, Y 거리를 계산합니다.',
          zhCN:'计算中心线到达Reference所需移动的X、Y距离。',
          zhTW:'計算中心線到達Reference所需移動的X、Y距離。',
          ja:'中心線がReferenceまで移動すべきX、Y距離を計算します。'
        }},
        {img:cmImg('F','nbga',105),tx:{
          en:'Enter the calculated value into Host P/G ▸ Setup ▸ System Option ▸ Jig Reference Offset.',
          ko:'계산된 값을 Host P/G ▸ Setup ▸ System Option ▸ Jig Reference Offset에 입력합니다.',
          zhCN:'将计算出的值输入到Host P/G ▸ Setup ▸ System Option ▸ Jig Reference Offset中。',
          zhTW:'將計算出的值輸入到Host P/G ▸ Setup ▸ System Option ▸ Jig Reference Offset中。',
          ja:'計算した値をHost P/G ▸ Setup ▸ System Option ▸ Jig Reference Offsetに入力します。'
        }},
        {img:cmImg('F','nbga',106),tx:{
          en:'This chapter covers Handler Teaching — the position-teaching sequence for the Elevator, Tray Sorter Module (TSM), Tray Transfer Module (TTM), Multi Sorter, 3D Inspector, and 2D Inspector.',
          ko:'본 챕터에서는 Handler Teaching — Elevator, Tray Sorter Module(TSM), Tray Transfer Module(TTM), Multi Sorter, 3D Inspector, 2D Inspector의 Position Teaching 절차를 다룹니다.',
          zhCN:'本章介绍Handler Teaching——Elevator、Tray Sorter Module(TSM)、Tray Transfer Module(TTM)、Multi Sorter、3D Inspector、2D Inspector的Position Teaching流程。',
          zhTW:'本章介紹Handler Teaching——Elevator、Tray Sorter Module(TSM)、Tray Transfer Module(TTM)、Multi Sorter、3D Inspector、2D Inspector的Position Teaching流程。',
          ja:'本章ではHandler Teaching——Elevator、Tray Sorter Module(TSM)、Tray Transfer Module(TTM)、Multi Sorter、3D Inspector、2D InspectorのPosition Teaching手順を扱います。'
        }},
        {img:cmImg('F','nbga',107),tx:{
          en:'F. 2D Inspector — this section covers the Inspector X, Y, Z Load Rail.',
          ko:'F. 2D Inspector — Inspector X, Y, Z Load Rail을 다룹니다.',
          zhCN:'F. 2D Inspector——本节介绍Inspector X, Y, Z Load Rail。',
          zhTW:'F. 2D Inspector——本節介紹Inspector X, Y, Z Load Rail。',
          ja:'F. 2D Inspector——本節ではInspector X, Y, Z Load Railを扱います。'
        }},
        {img:cmImg('F','nbga',108),tx:{
          en:'The Inspector X Reference Position matches the camera center with the reference tray\'s cross line. Prepare a reference tray.',
          ko:'Inspector X Reference Position은 Camera 중심과 Reference Tray의 십자선을 일치시키는 위치입니다. Reference Tray를 준비합니다.',
          zhCN:'Inspector X Reference Position是使Camera中心与Reference Tray十字线对齐的位置。请准备Reference Tray。',
          zhTW:'Inspector X Reference Position是使Camera中心與Reference Tray十字線對齊的位置。請準備Reference Tray。',
          ja:'Inspector X Reference PositionはCamera中心とReference Trayの十字線を一致させる位置です。Reference Trayを準備します。'
        }},
        {img:cmImg('F','nbga',109),tx:{
          en:'Place the reference tray on the Load Rail as shown. Host P/G ▸ Handler ▸ Map ▸ select Load Indexer 1, turn on the B/W and F/W Clamps to fasten the tray, then move to the Indexer Y Top Inspection Position.',
          ko:'그림처럼 Reference Tray를 Load Rail에 올립니다. Host P/G ▸ Handler ▸ Map ▸ Load Indexer 1 선택 후 B/W·F/W Clamp를 켜서 Tray를 고정하고 Indexer Y Top Inspection Position으로 이동합니다.',
          zhCN:'如图将Reference Tray放在Load Rail上。Host P/G ▸ Handler ▸ Map ▸ 选择Load Indexer 1,开启B/W、F/W Clamp固定Tray,然后移动到Indexer Y Top Inspection Position。',
          zhTW:'如圖將Reference Tray放在Load Rail上。Host P/G ▸ Handler ▸ Map ▸ 選擇Load Indexer 1,開啟B/W、F/W Clamp固定Tray,然後移動到Indexer Y Top Inspection Position。',
          ja:'図のようにReference TrayをLoad Railに置きます。Host P/G ▸ Handler ▸ Map ▸ Load Indexer 1を選択し、B/W・F/W ClampをONにしてTrayを固定し、Indexer Y Top Inspection Positionへ移動します。'
        }},
        {img:cmImg('F','nbga',110),tx:{
          en:'Host P/G ▸ Handler ▸ Map ▸ select Top 2D Inspector, then move to the Inspector X Reference Position.',
          ko:'Host P/G ▸ Handler ▸ Map ▸ Top 2D Inspector 선택 후 Inspector X Reference Position으로 이동합니다.',
          zhCN:'Host P/G ▸ Handler ▸ Map ▸ 选择Top 2D Inspector,移动到Inspector X Reference Position。',
          zhTW:'Host P/G ▸ Handler ▸ Map ▸ 選擇Top 2D Inspector,移動到Inspector X Reference Position。',
          ja:'Host P/G ▸ Handler ▸ Map ▸ Top 2D Inspectorを選択し、Inspector X Reference Positionへ移動します。'
        }},
        {img:cmImg('F','nbga',111),tx:{
          en:'Lower the Z position until the image is sharpest.',
          ko:'화면이 가장 선명해질 때까지 Z Position을 내립니다.',
          zhCN:'降低Z Position直至画面最清晰。',
          zhTW:'降低Z Position直至畫面最清晰。',
          ja:'画像が最も鮮明になるまでZ Positionを下げます。'
        }},
        {img:cmImg('F','nbga',112),tx:{
          en:'Teach and save the current Z position as the Inspection Z Position.',
          ko:'현재 Z Position을 Teach & Save하여 Inspection Z Position으로 저장합니다.',
          zhCN:'将当前Z Position进行Teach & Save,保存为Inspection Z Position。',
          zhTW:'將目前Z Position進行Teach & Save,儲存為Inspection Z Position。',
          ja:'現在のZ PositionをTeach & SaveしてInspection Z Positionとして保存します。'
        }},
        {img:cmImg('F','nbga',113),tx:{
          en:'Right-click the image to enable the center line, then move the Top 2D Inspector\'s X and Load Indexer 1\'s Y so the reference tray\'s cross line matches the live image\'s center cross line.',
          ko:'화면을 우클릭해 중심선(Center Line)을 켠 뒤, Top 2D Inspector의 X와 Load Indexer 1의 Y를 이동시켜 Reference Tray 십자선과 Live 화면 중심선을 일치시킵니다.',
          zhCN:'右键点击画面启用中心线,然后移动Top 2D Inspector的X与Load Indexer 1的Y,使Reference Tray十字线与Live画面中心线对齐。',
          zhTW:'右鍵點擊畫面啟用中心線,然後移動Top 2D Inspector的X與Load Indexer 1的Y,使Reference Tray十字線與Live畫面中心線對齊。',
          ja:'画像を右クリックして中心線を有効にし、Top 2D InspectorのXとLoad Indexer 1のYを動かして、Reference Trayの十字線とLive画面の中心線を一致させます。'
        }},
        {img:cmImg('F','nbga',114),tx:{
          en:'Teach and save the current X position as the Inspector X Reference Position.',
          ko:'현재 X Position을 Teach & Save하여 Inspector X Reference Position으로 저장합니다.',
          zhCN:'将当前X Position进行Teach & Save,保存为Inspector X Reference Position。',
          zhTW:'將目前X Position進行Teach & Save,儲存為Inspector X Reference Position。',
          ja:'現在のX PositionをTeach & SaveしてInspector X Reference Positionとして保存します。'
        }},
        {img:cmImg('F','nbga',115),tx:{
          en:'Host P/G ▸ Handler ▸ Map ▸ select Load Indexer 1, teach and save the current Y position as the Top Inspection Position; teach Load Indexer 2 the same way, along with the Gray Target and Grid Target X, Y, Z Positions. (Follow the noted precautions when teaching the Y position.)',
          ko:'Host P/G ▸ Handler ▸ Map ▸ Load Indexer 1 선택 후 현재 Y Position을 Teach & Save하여 Top Inspection Position으로 저장합니다. Load Indexer 2, 그리고 Gray Target·Grid Target의 X, Y, Z Position도 동일하게 Teaching합니다. (Y Position Teaching 시 주의사항 준수)',
          zhCN:'Host P/G ▸ Handler ▸ Map ▸ 选择Load Indexer 1,将当前Y Position进行Teach & Save,保存为Top Inspection Position。Load Indexer 2以及Gray Target、Grid Target的X、Y、Z Position也以相同方式进行Teaching。(Teaching Y Position时请遵守相关注意事项)',
          zhTW:'Host P/G ▸ Handler ▸ Map ▸ 選擇Load Indexer 1,將目前Y Position進行Teach & Save,儲存為Top Inspection Position。Load Indexer 2以及Gray Target、Grid Target的X、Y、Z Position也以相同方式進行Teaching。(Teaching Y Position時請遵守相關注意事項)',
          ja:'Host P/G ▸ Handler ▸ Map ▸ Load Indexer 1を選択し、現在のY PositionをTeach & SaveしてTop Inspection Positionとして保存します。Load Indexer 2、およびGray Target・Grid TargetのX、Y、Z Positionも同様にTeachingします。(Y Position Teaching時の注意事項を遵守)'
        }},
        {img:cmImg('F','nbga',116),tx:{
          en:'Next: LTS Target Position — teaching the targets used for Long Term Stability verification.',
          ko:'다음: LTS Target Position — Long Term Stability 검증에 사용하는 Target들의 Teaching을 다룹니다.',
          zhCN:'接下来:LTS Target Position——介绍用于Long Term Stability验证的Target的Teaching。',
          zhTW:'接下來:LTS Target Position——介紹用於Long Term Stability驗證的Target的Teaching。',
          ja:'次へ:LTS Target Position——Long Term Stability検証に使用するTargetのTeachingを扱います。'
        }},
        {img:cmImg('F','nbga',117),tx:{
          en:'LTS Target Position — LTS Job Open, Gray Target Setting, Grid Target Setting, Step Height Target Setting.',
          ko:'LTS Target Position — LTS Job Open, Gray Target Setting, Grid Target Setting, Step Height Target Setting.',
          zhCN:'LTS Target Position——LTS Job Open、Gray Target Setting、Grid Target Setting、Step Height Target Setting。',
          zhTW:'LTS Target Position——LTS Job Open、Gray Target Setting、Grid Target Setting、Step Height Target Setting。',
          ja:'LTS Target Position——LTS Job Open、Gray Target Setting、Grid Target Setting、Step Height Target Setting。'
        }},
        {img:cmImg('F','nbga',118),tx:{
          en:'1.3.2.A LTS Job Open — click Setup ▸ Job Open, then choose the \'LTS\' job file.',
          ko:'1.3.2.A LTS Job Open — Setup ▸ Job Open을 클릭하고 \'LTS\' Job File을 선택합니다.',
          zhCN:'1.3.2.A LTS Job Open——点击Setup ▸ Job Open,选择\'LTS\' Job File。',
          zhTW:'1.3.2.A LTS Job Open——點擊Setup ▸ Job Open,選擇\'LTS\' Job File。',
          ja:'1.3.2.A LTS Job Open——Setup ▸ Job Openをクリックし、\'LTS\' Job Fileを選択します。'
        }},
        {img:cmImg('F','nbga',119),tx:{
          en:'LTS Target Position — LTS Job Open, Gray Target Setting, Grid Target Setting, Step Height Target Setting.',
          ko:'LTS Target Position — LTS Job Open, Gray Target Setting, Grid Target Setting, Step Height Target Setting.',
          zhCN:'LTS Target Position——LTS Job Open、Gray Target Setting、Grid Target Setting、Step Height Target Setting。',
          zhTW:'LTS Target Position——LTS Job Open、Gray Target Setting、Grid Target Setting、Step Height Target Setting。',
          ja:'LTS Target Position——LTS Job Open、Gray Target Setting、Grid Target Setting、Step Height Target Setting。'
        }},
        {img:cmImg('F','nbga',120),tx:{
          en:'Gray Target — move the Jig table (Y-axis) and Vision Module (X-axis) so the Gray Target is centered on the optical module\'s screen. Set the Gray Target X,Y position on each vision map. (FINS: 3D V1, SINS: 3D V2)',
          ko:'Gray Target — Jig Table(Y축)과 Vision Module(X축)을 이동시켜 Gray Target이 광학 모듈 화면 중앙에 오도록 맞춥니다. 각 Vision Map(FINS: 3D V1, SINS: 3D V2)에서 Gray Target X,Y 위치를 설정합니다.',
          zhCN:'Gray Target——移动Jig Table(Y轴)与Vision Module(X轴),使Gray Target位于光学模块画面中央。在各Vision Map(FINS:3D V1,SINS:3D V2)上设置Gray Target X,Y位置。',
          zhTW:'Gray Target——移動Jig Table(Y軸)與Vision Module(X軸),使Gray Target位於光學模組畫面中央。在各Vision Map(FINS:3D V1,SINS:3D V2)上設定Gray Target X,Y位置。',
          ja:'Gray Target——Jig Table(Y軸)とVision Module(X軸)を動かし、Gray Targetが光学モジュール画面中央に来るよう合わせます。各Vision Map(FINS:3D V1、SINS:3D V2)でGray Target X,Y位置を設定します。'
        }},
        {img:cmImg('F','nbga',121),tx:{
          en:'Use the AF program to focus the Z-axis, then save the current position as the Gray Target Z Reference Pos.',
          ko:'AF Program으로 Z축 초점을 맞춘 뒤 현재 위치를 Gray Target Z Reference Pos로 저장합니다.',
          zhCN:'使用AF Program对Z轴进行对焦,然后将当前位置保存为Gray Target Z Reference Pos。',
          zhTW:'使用AF Program對Z軸進行對焦,然後將目前位置儲存為Gray Target Z Reference Pos。',
          ja:'AF ProgramでZ軸のピントを合わせ、現在の位置をGray Target Z Reference Posとして保存します。'
        }},
        {img:cmImg('F','nbga',122),tx:{
          en:'Select the \'3D_Img2\' frame in the Illumination settings window, then right-click the live screen and select \'Show pixel info\'.',
          ko:'Illumination 설정 창에서 \'3D_Img2\' Frame을 선택하고, Live 화면을 우클릭해 \'Show pixel info\'를 선택합니다.',
          zhCN:'在Illumination设置窗口选择\'3D_Img2\' Frame,然后右键点击Live画面选择\'Show pixel info\'。',
          zhTW:'在Illumination設定視窗選擇\'3D_Img2\' Frame,然後右鍵點擊Live畫面選擇\'Show pixel info\'。',
          ja:'Illumination設定ウィンドウで\'3D_Img2\' Frameを選択し、Live画面を右クリックして\'Show pixel info\'を選択します。'
        }},
        {img:cmImg('F','nbga',123),tx:{
          en:'Moving the mouse over the LIVE screen shows the RGB value. If it is above or below 160, use Intensity Control in the 3D lighting settings to correct it to about 160.',
          ko:'LIVE 화면 위에서 마우스를 움직이면 RGB 값을 확인할 수 있습니다. 값이 160보다 높거나 낮으면 3D 조명 설정의 Intensity Control로 보정하여 약 160이 되도록 맞춥니다.',
          zhCN:'在LIVE画面上移动鼠标可查看RGB值。若数值高于或低于160,请在3D照明设置中使用Intensity Control校正,使其约为160。',
          zhTW:'在LIVE畫面上移動滑鼠可查看RGB值。若數值高於或低於160,請在3D照明設定中使用Intensity Control校正,使其約為160。',
          ja:'LIVE画面上でマウスを動かすとRGB値を確認できます。値が160より高いか低い場合は、3D照明設定のIntensity Controlで補正し、約160になるよう調整します。'
        }},
        {img:cmImg('F','nbga',124),tx:{
          en:'Click Utility ▸ Display, apply the Grid Count Setting as shown, set the Illum ROI as shown, then click Apply.',
          ko:'Utility ▸ Display를 클릭하고 그림처럼 Grid Count Setting을 적용, Illum ROI를 설정한 뒤 Apply를 클릭합니다.',
          zhCN:'点击Utility ▸ Display,如图应用Grid Count Setting,设置Illum ROI后点击Apply。',
          zhTW:'點擊Utility ▸ Display,如圖套用Grid Count Setting,設定Illum ROI後點擊Apply。',
          ja:'Utility ▸ Displayをクリックし、図のようにGrid Count Settingを適用、Illum ROIを設定してApplyをクリックします。'
        }},
        {img:cmImg('F','nbga',125),tx:{
          en:'LTS Target Position — LTS Job Open, Gray Target Setting, Grid Target Setting, Step Height Target Setting.',
          ko:'LTS Target Position — LTS Job Open, Gray Target Setting, Grid Target Setting, Step Height Target Setting.',
          zhCN:'LTS Target Position——LTS Job Open、Gray Target Setting、Grid Target Setting、Step Height Target Setting。',
          zhTW:'LTS Target Position——LTS Job Open、Gray Target Setting、Grid Target Setting、Step Height Target Setting。',
          ja:'LTS Target Position——LTS Job Open、Gray Target Setting、Grid Target Setting、Step Height Target Setting。'
        }},
        {img:cmImg('F','nbga',126),tx:{
          en:'Grid Target Setting — move the Jig table (Y-axis) and Vision Module (X-axis) so the Matrix Target is centered on the optical module\'s screen. Set the Grid Target X,Y position on each vision map. (FINS: 3D V1, SINS: 3D V2)',
          ko:'Grid Target Setting — Jig Table(Y축)과 Vision Module(X축)을 이동시켜 Matrix Target이 광학 모듈 화면 중앙에 오도록 맞춥니다. 각 Vision Map(FINS: 3D V1, SINS: 3D V2)에서 Grid Target X,Y 위치를 설정합니다.',
          zhCN:'Grid Target Setting——移动Jig Table(Y轴)与Vision Module(X轴),使Matrix Target位于光学模块画面中央。在各Vision Map(FINS:3D V1,SINS:3D V2)上设置Grid Target X,Y位置。',
          zhTW:'Grid Target Setting——移動Jig Table(Y軸)與Vision Module(X軸),使Matrix Target位於光學模組畫面中央。在各Vision Map(FINS:3D V1,SINS:3D V2)上設定Grid Target X,Y位置。',
          ja:'Grid Target Setting——Jig Table(Y軸)とVision Module(X軸)を動かし、Matrix Targetが光学モジュール画面中央に来るよう合わせます。各Vision Map(FINS:3D V1、SINS:3D V2)でGrid Target X,Y位置を設定します。'
        }},
        {img:cmImg('F','nbga',127),tx:{
          en:'Use the AF program to focus the Z-axis and save the current position as the Grid Target Z Reference Pos, then teach the X and Y positions.',
          ko:'AF Program으로 Z축 초점을 맞춰 현재 위치를 Grid Target Z Reference Pos로 저장하고, X, Y 위치도 Teaching합니다.',
          zhCN:'使用AF Program对Z轴进行对焦,将当前位置保存为Grid Target Z Reference Pos,并对X、Y位置进行Teaching。',
          zhTW:'使用AF Program對Z軸進行對焦,將目前位置儲存為Grid Target Z Reference Pos,並對X、Y位置進行Teaching。',
          ja:'AF ProgramでZ軸のピントを合わせ、現在の位置をGrid Target Z Reference Posとして保存し、X、Y位置もTeachingします。'
        }},
        {img:cmImg('F','nbga',128),tx:{
          en:'Adjust the \'2D_Img1\' value as shown. Set the center position while watching the grid target live image (X,Y), and confirm the target is in focus (Z).',
          ko:'그림처럼 \'2D_Img1\' 값을 조정합니다. Grid Target Live 화면을 보며 중심 위치(X,Y)를 맞추고, 초점이 맞았는지(Z) 확인합니다.',
          zhCN:'如图调整\'2D_Img1\'的值。观察Grid Target Live画面设置中心位置(X,Y),并确认对焦(Z)。',
          zhTW:'如圖調整\'2D_Img1\'的值。觀察Grid Target Live畫面設定中心位置(X,Y),並確認對焦(Z)。',
          ja:'図のように\'2D_Img1\'の値を調整します。Grid Target Live画面を見ながら中心位置(X,Y)を合わせ、ピントが合っているか(Z)確認します。'
        }},
        {img:cmImg('F','nbga',129),tx:{
          en:'LTS Target Position — LTS Job Open, Gray Target Setting, Grid Target Setting, Step Height Target Setting.',
          ko:'LTS Target Position — LTS Job Open, Gray Target Setting, Grid Target Setting, Step Height Target Setting.',
          zhCN:'LTS Target Position——LTS Job Open、Gray Target Setting、Grid Target Setting、Step Height Target Setting。',
          zhTW:'LTS Target Position——LTS Job Open、Gray Target Setting、Grid Target Setting、Step Height Target Setting。',
          ja:'LTS Target Position——LTS Job Open、Gray Target Setting、Grid Target Setting、Step Height Target Setting。'
        }},
        {img:cmImg('F','nbga',130),tx:{
          en:'Step Height Target Setting — move the Jig table (Y-axis) and Vision Module (X-axis) so the Step Height Target is centered on the optical module\'s screen. Set its X,Y position on each vision map. (FINS: 3D V1, SINS: 3D V2)',
          ko:'Step Height Target Setting — Jig Table(Y축)과 Vision Module(X축)을 이동시켜 Step Height Target이 광학 모듈 화면 중앙에 오도록 맞춥니다. 각 Vision Map(FINS: 3D V1, SINS: 3D V2)에서 X,Y 위치를 설정합니다.',
          zhCN:'Step Height Target Setting——移动Jig Table(Y轴)与Vision Module(X轴),使Step Height Target位于光学模块画面中央。在各Vision Map(FINS:3D V1,SINS:3D V2)上设置X,Y位置。',
          zhTW:'Step Height Target Setting——移動Jig Table(Y軸)與Vision Module(X軸),使Step Height Target位於光學模組畫面中央。在各Vision Map(FINS:3D V1,SINS:3D V2)上設定X,Y位置。',
          ja:'Step Height Target Setting——Jig Table(Y軸)とVision Module(X軸)を動かし、Step Height Targetが光学モジュール画面中央に来るよう合わせます。各Vision Map(FINS:3D V1、SINS:3D V2)でX,Y位置を設定します。'
        }},
        {img:cmImg('F','nbga',131),tx:{
          en:'Use the AF program to focus the Z-axis and save the current position as the Step Height Target Z Reference Pos, then teach the X and Y positions.',
          ko:'AF Program으로 Z축 초점을 맞춰 현재 위치를 Step Height Target Z Reference Pos로 저장하고, X, Y 위치도 Teaching합니다.',
          zhCN:'使用AF Program对Z轴进行对焦,将当前位置保存为Step Height Target Z Reference Pos,并对X、Y位置进行Teaching。',
          zhTW:'使用AF Program對Z軸進行對焦,將目前位置儲存為Step Height Target Z Reference Pos,並對X、Y位置進行Teaching。',
          ja:'AF ProgramでZ軸のピントを合わせ、現在の位置をStep Height Target Z Reference Posとして保存し、X、Y位置もTeachingします。'
        }},
        {img:cmImg('F','nbga',132),tx:{
          en:'Open the Illum Control settings window and confirm \'UseMultiZMap\' is set to TRUE (change it from FALSE if needed). Select \'3D_Img1\' and set Intensity to 4–5 so the fringe is clearly visible in the Height Target — it should NOT appear at the Start Pos, but SHOULD appear at the Fringe Pos. Save and close the window when done.',
          ko:'Illum Control 설정 창을 열어 \'UseMultiZMap\'이 TRUE인지 확인합니다(FALSE면 TRUE로 변경). \'3D_Img1\'을 선택하고 Height Target에서 Fringe가 선명히 보이도록 Intensity를 4~5로 설정합니다 — Start Pos.에서는 Fringe가 보이지 않아야 하고, Fringe Pos.에서는 보여야 합니다. 설정 완료 후 저장하고 창을 닫습니다.',
          zhCN:'打开Illum Control设置窗口,确认\'UseMultiZMap\'为TRUE(若为FALSE则改为TRUE)。选择\'3D_Img1\',将Intensity设为4~5,使Fringe在Height Target中清晰可见——Start Pos.不应出现Fringe,Fringe Pos.则应出现。设置完成后保存并关闭窗口。',
          zhTW:'開啟Illum Control設定視窗,確認\'UseMultiZMap\'為TRUE(若為FALSE則改為TRUE)。選擇\'3D_Img1\',將Intensity設為4~5,使Fringe在Height Target中清晰可見——Start Pos.不應出現Fringe,Fringe Pos.則應出現。設定完成後儲存並關閉視窗。',
          ja:'Illum Control設定ウィンドウを開き、\'UseMultiZMap\'がTRUEになっているか確認します(FALSEの場合はTRUEに変更)。\'3D_Img1\'を選択し、Height TargetでFringeがはっきり見えるようIntensityを4~5に設定します——Start Pos.ではFringeが見えず、Fringe Pos.では見える必要があります。設定完了後、保存してウィンドウを閉じます。'
        }}
      ]
    }
  },
  G:{
    smtv:{
      title:{ko:'G. Consumables Inspection/Replacement',en:'G. Consumables Inspection/Replacement',zhCN:'G. Consumables Inspection/Replacement',zhTW:'G. Consumables Inspection/Replacement',ja:'G. Consumables Inspection/Replacement'},
      slides:[
        {img:cmImg('G','smtv',1),tx:{
          ko:'Camera, 조명, Controller, PC Board, Motor, Driver 등 소모품 점검 및 교체를 다룹니다.',
          en:'Covers inspecting and replacing consumables such as the Camera, lighting, Controller, PC Board, Motor, and Driver.',
          zhCN:'涵盖Camera、照明、Controller、PC Board、Motor、Driver等消耗品的检查与更换。',
          zhTW:'涵蓋Camera、照明、Controller、PC Board、Motor、Driver等消耗品的檢查與更換。',
          ja:'Camera、照明、Controller、PC Board、Motor、Driverなど消耗品の点検・交換を扱います。'
        }},
        {img:cmImg('G','smtv',2),tx:{
          en:'Confirming the physical locations of key parts\n\n1. Check the locations of the 3D#1·3D#2 LED Controller, 3D#1·3D#2 PC, Host PC, Macro PC/LED Controller, HUB&KVM, UPS, etc. on the layout drawing.\n2. Before replacing any part, always confirm its exact location and connected cables (power/signal) first.',
          ko:'주요 부품 물리적 위치 확인\n\n1. 3D#1·3D#2 LED Controller, 3D#1·3D#2 PC, Host PC, Macro PC/LED Controller, HUB&KVM, UPS 등 위치를 도면으로 확인.\n2. 교체 전 반드시 해당 부품의 정확한 위치와 연결 Cable(전원/신호)을 먼저 확인한다.',
          zhCN:'确认主要部件的物理位置\n\n1. 通过图纸确认3D#1·3D#2 LED Controller、3D#1·3D#2 PC、Host PC、Macro PC/LED Controller、HUB&KVM、UPS等的位置。\n2. 更换前必须先确认该部件的准确位置及连接的Cable(电源/信号)。',
          zhTW:'確認主要零件的物理位置\n\n1. 透過圖面確認3D#1·3D#2 LED Controller、3D#1·3D#2 PC、Host PC、Macro PC/LED Controller、HUB&KVM、UPS等的位置。\n2. 更換前必須先確認該零件的準確位置及連接的Cable(電源/訊號)。',
          ja:'主要部品の物理的位置を確認\n\n1. 3D#1・3D#2 LED Controller、3D#1・3D#2 PC、Host PC、Macro PC/LED Controller、HUB&KVM、UPSなどの位置を図面で確認する。\n2. 交換前に必ず該当部品の正確な位置と接続Cable(電源/信号)を先に確認する。'
        }},
        {img:cmImg('G','smtv',3),tx:{
          en:'Main/ISO Machine Motion Name\n\n1. Identify the Motor/Driver by the axis name on the Main Machine (Rear/Front View).\n2. Identify by the axis name on the ISO Machine (Rear/Front/Left/Top View). E.g., Elevator Z-axis, Multi-Sorter X-axis/Z-axis, Indexer Y-axis, Picker X-axis/Z-axis, Aligner X-axis/Y-axis, etc.\n3. Before replacement, you must identify the target Motor/Driver by its exact axis name to prevent mis-operation.',
          ko:'Main/ISO Machine Motion Name\n\n1. Motor/Driver는 Main Machine(Rear/Front View)의 축 명칭으로 식별한다.\n2. ISO Machine(Rear/Front/Left/Top View)의 축 명칭으로 식별한다. 예: Elevator Z-axis(Z축), Multi-Sorter X-axis(X축)/Z-axis(Z축), Indexer Y-axis(Y축), Picker X-axis(X축)/Z-axis(Z축), Aligner X-axis(X축)/Y-axis(Y축) 등.\n3. 교체 작업 전 정확한 축 이름으로 대상 Motor/Driver를 특정해야 오조작을 방지할 수 있다.',
          zhCN:'Main/ISO Machine Motion Name\n\n1. 通过Main Machine(Rear/Front View)的轴名称识别Motor/Driver。\n2. 通过ISO Machine(Rear/Front/Left/Top View)的轴名称识别。例如:Elevator Z-axis、Multi-Sorter X-axis/Z-axis、Indexer Y-axis、Picker X-axis/Z-axis、Aligner X-axis/Y-axis等。\n3. 更换作业前必须以准确的轴名称确定目标Motor/Driver,以防止误操作。',
          zhTW:'Main/ISO Machine Motion Name\n\n1. 透過Main Machine(Rear/Front View)的軸名稱識別Motor/Driver。\n2. 透過ISO Machine(Rear/Front/Left/Top View)的軸名稱識別。例如:Elevator Z-axis、Multi-Sorter X-axis/Z-axis、Indexer Y-axis、Picker X-axis/Z-axis、Aligner X-axis/Y-axis等。\n3. 更換作業前必須以準確的軸名稱確定目標Motor/Driver,以防止誤操作。',
          ja:'Main/ISO Machine Motion Name\n\n1. Motor/DriverはMain Machine(Rear/Front View)の軸名称で識別する。\n2. ISO Machine(Rear/Front/Left/Top View)の軸名称で識別する。例:Elevator Z-axis、Multi-Sorter X-axis/Z-axis、Indexer Y-axis、Picker X-axis/Z-axis、Aligner X-axis/Y-axis等。\n3. 交換作業前に正確な軸名称で対象のMotor/Driverを特定しないと誤操作の恐れがある。'
        }},
        {img:cmImg('G','smtv',4),tx:{
          en:'Inspection/cleaning/adjustment/lubrication cycle by Part Name\n\n1. Manage the Inspection, Cleaning, Adjustment, and Lubricant cycles per Part Name on a D/W/M/3M/6M/Y basis.\n2. E.g., LM Guide and Ball Screw: inspect every 3 months, clean monthly, lubricate once a year. Vacuum: inspect every 3 months, clean every 6 months, adjust as needed.',
          ko:'Part Name별 점검·청소·조정·윤활 주기\n\n1. Part Name별로 Inspection(점검)·Cleaning(청소)·Adjustment(조정)·Lubricant(윤활) 주기를 D/W/M/3M/6M/Y 기준으로 관리.\n2. 예: LM Guide·Ball Screw는 3개월 점검·매월 청소·연 1회 윤활 / Vacuum은 3개월 점검·6개월 청소·필요시 조정.',
          zhCN:'按Part Name管理点检·清洁·调整·润滑周期\n\n1. 按Part Name以D/W/M/3M/6M/Y为基准管理Inspection(点检)、Cleaning(清洁)、Adjustment(调整)、Lubricant(润滑)周期。\n2. 例如:LM Guide、Ball Screw为每3个月点检、每月清洁、每年润滑1次;Vacuum为每3个月点检、每6个月清洁、必要时调整。',
          zhTW:'按Part Name管理點檢·清潔·調整·潤滑週期\n\n1. 按Part Name以D/W/M/3M/6M/Y為基準管理Inspection(點檢)、Cleaning(清潔)、Adjustment(調整)、Lubricant(潤滑)週期。\n2. 例如:LM Guide、Ball Screw為每3個月點檢、每月清潔、每年潤滑1次;Vacuum為每3個月點檢、每6個月清潔、必要時調整。',
          ja:'Part Nameごとの点検・清掃・調整・潤滑周期\n\n1. Part Nameごとに Inspection(点検)・Cleaning(清掃)・Adjustment(調整)・Lubricant(潤滑)の周期をD/W/M/3M/6M/Y基準で管理する。\n2. 例:LM Guide・Ball Screwは3ヶ月点検・毎月清掃・年1回潤滑/Vacuumは3ヶ月点検・6ヶ月清掃・必要時調整。'
        }},
        {img:cmImg('G','smtv',5),tx:{
          en:'Based on THK\'s recommended inspection items\n\n1. Robot interior cleaning: open the upper cover and remove foreign matter with a vacuum cleaner. (Period: as needed)\n2. Cable damage care: if the cable skin flakes into powder, apply a small amount of grease between cables; replace if severely damaged.\n3. Installation platform/bracket fastening bolts: check the fastening state one month after installation and re-fasten.\n\nCheck point — Do not mix different kinds of grease',
          ko:'THK 권고 점검 항목 기준\n\n1. Robot 내부 청소: 상부 Cover를 열고 진공청소기로 이물을 제거한다. (주기: 수시로)\n2. Cable 손상 관리: 피복이 가루로 벗겨지면 Cable 사이에 소량 Grease를 도포하고, 심하게 손상되었으면 교체한다.\n3. 설치대/Bracket 체결 Bolt: 설치 1개월 후 체결 상태를 확인하고 재체결한다.\n\n확인 포인트 — 서로 다른 종류의 Grease는 섞지 않는다',
          zhCN:'基于THK推荐的点检项目\n\n1. Robot内部清洁:打开上盖,用真空吸尘器清除异物。(周期:随时)\n2. Cable损伤管理:若外皮粉化脱落,在Cable之间涂抹少量Grease;若损伤严重则更换。\n3. 安装台/Bracket紧固Bolt:安装1个月后确认紧固状态并重新紧固。\n\n确认要点——不同种类的Grease不可混用',
          zhTW:'基於THK建議的點檢項目\n\n1. Robot內部清潔:打開上蓋,用真空吸塵器清除異物。(週期:隨時)\n2. Cable損傷管理:若外皮粉化脫落,在Cable之間塗抹少量Grease;若損傷嚴重則更換。\n3. 安裝台/Bracket緊固Bolt:安裝1個月後確認緊固狀態並重新緊固。\n\n確認要點——不同種類的Grease不可混用',
          ja:'THK推奨点検項目基準\n\n1. Robot内部清掃:上部Coverを開け、掃除機で異物を除去する。(周期:随時)\n2. Cable損傷管理:被覆が粉状に剥がれた場合はCable間に少量のGreaseを塗布し、著しく損傷している場合は交換する。\n3. 設置台/Bracket締結Bolt:設置1ヶ月後に締結状態を確認し、再締結する。\n\n確認ポイント — 異なる種類のGreaseは混ぜない'
        }},
        {img:cmImg('G','smtv',6),tx:{
          en:'Remove the Cover → inject into the LM Block inlet\n\n1. Do not mix different kinds of grease.\n2. Remove the Cover.\n3. Inject grease into the LM Block\'s grease inlet.\n\nCheck point — Dedicated tools — Grease Gun (MG70), Grease (THK AFA-70)',
          ko:'Cover 분리 → LM Block 주입구에 주입\n\n1. 서로 다른 종류의 Grease는 섞지 않는다.\n2. Cover를 분리한다.\n3. LM Block의 Grease 주입구에 Grease를 주입한다.\n\n확인 포인트 — 전용 공구 — Grease Gun(MG70), Grease(THK AFA-70)',
          zhCN:'拆下Cover → 注入LM Block注入口\n\n1. 不同种类的Grease不可混用。\n2. 拆下Cover。\n3. 向LM Block的Grease注入口注入Grease。\n\n确认要点——专用工具——Grease Gun(MG70)、Grease(THK AFA-70)',
          zhTW:'拆下Cover → 注入LM Block注入口\n\n1. 不同種類的Grease不可混用。\n2. 拆下Cover。\n3. 向LM Block的Grease注入口注入Grease。\n\n確認要點——專用工具——Grease Gun(MG70)、Grease(THK AFA-70)',
          ja:'Cover取り外し → LM Block注入口に注入\n\n1. 異なる種類のGreaseは混ぜない。\n2. Coverを取り外す。\n3. LM BlockのGrease注入口にGreaseを注入する。\n\n確認ポイント — 専用工具 — Grease Gun(MG70)、Grease(THK AFA-70)'
        }},
        {img:cmImg('G','smtv',7),tx:{
          en:'12-month cycle, remove foreign matter before injecting\n\n1. Do not mix different kinds of grease.\n2. Always remove dust/foreign matter before injecting.\n3. Inject grease into the Main Vision LM Block\'s grease inlet every 12 months.\n\nCheck point — Dedicated tools — Grease Gun (MG70), Grease (THK AFA-70)',
          ko:'12개월 주기·이물 제거 후 주입\n\n1. 서로 다른 종류의 Grease는 섞지 않는다.\n2. 주입 전 반드시 먼지·이물질을 제거한다.\n3. Main Vision LM Block Grease 주입구에 12개월 주기로 Grease를 주입한다.\n\n확인 포인트 — 전용 공구 — Grease Gun(MG70), Grease(THK AFA-70)',
          zhCN:'12个月周期·清除异物后注入\n\n1. 不同种类的Grease不可混用。\n2. 注入前必须先清除灰尘·异物。\n3. 每12个月向Main Vision LM Block的Grease注入口注入Grease。\n\n确认要点——专用工具——Grease Gun(MG70)、Grease(THK AFA-70)',
          zhTW:'12個月週期·清除異物後注入\n\n1. 不同種類的Grease不可混用。\n2. 注入前必須先清除灰塵·異物。\n3. 每12個月向Main Vision LM Block的Grease注入口注入Grease。\n\n確認要點——專用工具——Grease Gun(MG70)、Grease(THK AFA-70)',
          ja:'12ヶ月周期・異物除去後に注入\n\n1. 異なる種類のGreaseは混ぜない。\n2. 注入前に必ず埃・異物を除去する。\n3. Main Vision LM BlockのGrease注入口に12ヶ月周期でGreaseを注入する。\n\n確認ポイント — 専用工具 — Grease Gun(MG70)、Grease(THK AFA-70)'
        }},
        {img:cmImg('G','smtv',8),tx:{
          en:'Reset/re-verification checklist\n\n1. After replacing the Camera / AF·PZT Controller, you must check the Firmware version and reset Parameters → see Module J (Advanced Troubleshooting).\n2. After replacing the Motor / Driver, recheck the Dial (Step Angle) and speed Parameters → see Module F·J.\n3. After replacement, Vision re-adjustment (Camera angle/Scale) and LTS re-verification are recommended → see Module F\'s LTS Target Setting.',
          ko:'재설정·재검증 체크리스트\n\n1. Camera / AF·PZT Controller 교체 후에는 반드시 Firmware 버전 확인 및 Parameter 재설정이 필요 → Module J(고급 트러블슈팅) 참고.\n2. Motor / Driver 교체 후 Dial(Step Angle)·속도 Parameter 재확인 → Module F·J 참고.\n3. 교체 후 Vision 재조정(Camera angle/Scale) 및 LTS 재검증 권장 → Module F의 LTS Target Setting 참고.',
          zhCN:'重设·再验证检查清单\n\n1. 更换Camera / AF·PZT Controller后,必须确认Firmware版本并重新设定Parameter → 参考Module J(高级故障排查)。\n2. 更换Motor / Driver后,重新确认Dial(Step Angle)·速度Parameter → 参考Module F·J。\n3. 更换后建议进行Vision再调整(Camera angle/Scale)及LTS再验证 → 参考Module F的LTS Target Setting。',
          zhTW:'重設·再驗證檢查清單\n\n1. 更換Camera / AF·PZT Controller後,必須確認Firmware版本並重新設定Parameter → 參考Module J(進階故障排除)。\n2. 更換Motor / Driver後,重新確認Dial(Step Angle)·速度Parameter → 參考Module F·J。\n3. 更換後建議進行Vision再調整(Camera angle/Scale)及LTS再驗證 → 參考Module F的LTS Target Setting。',
          ja:'再設定・再検証チェックリスト\n\n1. Camera / AF・PZT Controller交換後は必ずFirmwareバージョン確認及びParameter再設定が必要 → Module J(高度なトラブルシューティング)参照。\n2. Motor / Driver交換後はDial(Step Angle)・速度Parameterを再確認 → Module F・J参照。\n3. 交換後はVision再調整(Camera angle/Scale)及びLTS再検証を推奨 → Module FのLTS Target Setting参照。'
        }}
      ]
    },
    nbga:{
      title:{ko:'G. Preventive Maintenance',en:'G. Preventive Maintenance',zhCN:'G. Preventive Maintenance',zhTW:'G. Preventive Maintenance',ja:'G. Preventive Maintenance'},
      slides:[
        {img:cmImg('G','nbga',1),tx:{
          en:'Preventive Maintenance Schedule #1 — before/during/after operation checklist. Before operation: check air pressure (0.49MPa) and leaks, check for foreign substances on the Vision Stage Motor Part, check cables for twisting, and check for abnormal noise or vibration during warm-up. During operation: watch for abnormal noise, vibration, heat, or smell. After operation: check for frequent jamming, clean dust from the X&Y Table and Robot Motor, and clean the Jig top surface.',
          ko:'예방 정비 점검표 #1 — 가동 전/중/후 점검 항목. 가동 전: 에어 압력(0.49MPa) 및 누기 확인, Vision Stage Motor Part의 이물질 유무 확인, 케이블 꼬임 확인, 워밍업 중 이상 소음·진동 확인. 가동 중: 이상 소음·진동·발열·냄새 확인. 가동 후: 특정 부위의 잦은 잼(Jam) 발생 확인, X&Y Table 및 Robot Motor 부위 먼지 제거, Jig 상면 청소.',
          zhCN:'预防性维护检查表 #1 — 运行前/中/后检查项目。运行前:检查气压(0.49MPa)及漏气情况、检查 Vision Stage Motor Part 是否有异物、检查线缆是否缠绕、预热时检查异常噪音或振动。运行中:检查异常噪音、振动、发热或异味。运行后:检查特定部位是否频繁卡料(Jam)、清除 X&Y Table 及 Robot Motor 部位的灰尘、清洁 Jig 上表面。',
          zhTW:'預防性維護檢查表 #1 — 運轉前/中/後檢查項目。運轉前:確認氣壓(0.49MPa)及漏氣情形、確認 Vision Stage Motor Part 是否有異物、確認纜線是否扭結、暖機時確認異常噪音或震動。運轉中:確認異常噪音、震動、發熱或異味。運轉後:確認特定部位是否頻繁卡料(Jam)、清除 X&Y Table 及 Robot Motor 部位的灰塵、清潔 Jig 上表面。',
          ja:'予防保全チェックリスト #1 — 稼働前/中/後の点検項目。稼働前:エア圧(0.49MPa)および漏れの確認、Vision Stage Motor Partの異物の有無確認、ケーブルのねじれ確認、ウォームアップ中の異音・振動確認。稼働中:異音・振動・発熱・異臭の確認。稼働後:特定箇所での頻繁なジャム(Jam)発生の確認、X&Y TableおよびRobot Motor部の粉じん除去、Jig上面の清掃。'
        }},
        {img:cmImg('G','nbga',2),tx:{
          en:'Preventive Maintenance Schedule #2 — part-by-part inspection/cleaning/adjustment/lubrication cycle. LM Guide: inspect every 3 months, clean monthly, lubricate yearly. Vacuum: inspect every 3 months, clean every 6 months, adjust when necessary. Ball Screw: inspect every 3 months, clean monthly, lubricate yearly. (D=daily, W=weekly, M=monthly, 3M=every 3 months, 6M=every 6 months, Y=yearly)',
          ko:'예방 정비 점검표 #2 — 부품별 점검/청소/조정/윤활 주기. LM Guide: 점검 3개월, 청소 1개월, 윤활 1년. Vacuum: 점검 3개월, 청소 6개월, 필요시 조정. Ball Screw: 점검 3개월, 청소 1개월, 윤활 1년. (D=매일, W=매주, M=매월, 3M=3개월마다, 6M=6개월마다, Y=매년)',
          zhCN:'预防性维护检查表 #2 — 各部件的检查/清洁/调整/润滑周期。LM Guide:检查每3个月一次,清洁每月一次,润滑每年一次。Vacuum:检查每3个月一次,清洁每6个月一次,必要时调整。Ball Screw:检查每3个月一次,清洁每月一次,润滑每年一次。(D=每日,W=每周,M=每月,3M=每3个月,6M=每6个月,Y=每年)',
          zhTW:'預防性維護檢查表 #2 — 各零件的檢查/清潔/調整/潤滑週期。LM Guide:檢查每3個月一次,清潔每月一次,潤滑每年一次。Vacuum:檢查每3個月一次,清潔每6個月一次,必要時調整。Ball Screw:檢查每3個月一次,清潔每月一次,潤滑每年一次。(D=每日,W=每週,M=每月,3M=每3個月,6M=每6個月,Y=每年)',
          ja:'予防保全チェックリスト #2 — 部品ごとの点検/清掃/調整/給油周期。LM Guide:点検3ヶ月ごと、清掃1ヶ月ごと、給油1年ごと。Vacuum:点検3ヶ月ごと、清掃6ヶ月ごと、必要時調整。Ball Screw:点検3ヶ月ごと、清掃1ヶ月ごと、給油1年ごと。(D=毎日、W=毎週、M=毎月、3M=3ヶ月ごと、6M=6ヶ月ごと、Y=毎年)'
        }},
        {img:cmImg('G','nbga',3),tx:{
          en:'Precautions for grease injection. Ball Screw: apply Shell Alvania grease to the shaft and nipple every 6 months. LM Guide: apply Shell Alvania grease to the LM rail and nipple once a year. Note: never mix different kinds of grease. Robot interior cleaning: remove the upper cover and vacuum out foreign substances frequently. Robot cable: if the outer skin powders off, apply a small amount of grease between cables; replace the cable if damage is severe. Also check that the installation platform and bracket fixing bolts are tightened, re-tightening one month after installation. (Based on inspection items provided by THK.)',
          ko:'그리스 주입 시 주의사항. Ball Screw: Shaft와 Nipple에 Shell Alvania 그리스를 6개월에 1회 주입. LM Guide: LM Rail과 Nipple에 Shell Alvania 그리스를 1년에 1회 주입. 주의: 서로 다른 종류의 그리스를 섞어 사용하지 말 것. Robot 내부 청소: 상부 커버를 분리하고 진공청소기로 이물질을 자주 제거. Robot 케이블: 외피가 가루처럼 벗겨지면 케이블 사이에 그리스를 소량 도포하고, 손상이 심하면 교체. 설치 플랫폼과 브라켓 고정 볼트의 체결 상태도 확인하며, 설치 후 1개월 뒤 재체결. (THK에서 제공한 점검 항목을 기반으로 작성됨)',
          zhCN:'注脂注意事项。Ball Screw:每6个月在Shaft和Nipple处涂抹一次Shell Alvania润滑脂。LM Guide:每年在LM Rail和Nipple处涂抹一次Shell Alvania润滑脂。注意:切勿混用不同种类的润滑脂。机器人内部清洁:拆下上盖,经常用吸尘器清除内部异物。机器人电缆:若外皮出现粉状脱落,可在电缆之间少量涂抹润滑脂;若损伤严重则需更换。此外还需确认安装平台及支架固定螺栓的紧固状态,并在安装1个月后重新紧固一次。(依据THK提供的检查项目编写)',
          zhTW:'注脂注意事項。Ball Screw:每6個月在Shaft與Nipple處塗抹一次Shell Alvania潤滑脂。LM Guide:每年在LM Rail與Nipple處塗抹一次Shell Alvania潤滑脂。注意:切勿混用不同種類的潤滑脂。機器人內部清潔:拆下上蓋,經常用吸塵器清除內部異物。機器人纜線:若外皮出現粉狀剝落,可在纜線之間少量塗抹潤滑脂;若損傷嚴重則需更換。此外也需確認安裝平台及支架固定螺栓的鎖緊狀態,並於安裝1個月後重新鎖緊一次。(依據THK提供的檢查項目編寫)',
          ja:'グリス注入時の注意事項。Ball Screw:Shaft と Nipple に Shell Alvania グリスを6ヶ月に1回注入。LM Guide:LM Rail と Nipple に Shell Alvania グリスを1年に1回注入。注意:異なる種類のグリスを混用しないこと。ロボット内部清掃:上部カバーを外し、掃除機で内部の異物を頻繁に除去する。ロボットケーブル:被覆が粉状に剥がれた場合はケーブルの間に少量のグリスを塗布し、損傷が激しい場合は交換する。また設置プラットフォームおよびブラケット固定ボルトの締結状態を確認し、設置1ヶ月後に増し締めを行う。(THK提供の点検項目に基づき作成)'
        }}
      ]
    }
  },
  I:{
    smtv:{
      title:{ko:'I. Recipe Vision Parameter',en:'I. Recipe Vision Parameter',zhCN:'I. Recipe Vision Parameter',zhTW:'I. Recipe Vision Parameter',ja:'I. Recipe Vision Parameter'},
      slides:[
        {img:cmImg('I','smtv',1),tx:{
          ko:'Gerber File, 조명/Camera/PZT, Alignment, 검사 Parameter 수정을 다룹니다.',
          en:'Covers modifying the Gerber File, lighting/Camera/PZT, Alignment, and inspection Parameters.',
          zhCN:'涵盖Gerber File、照明/Camera/PZT、Alignment、检测Parameter的修改。',
          zhTW:'涵蓋Gerber File、照明/Camera/PZT、Alignment、檢測Parameter的修改。',
          ja:'Gerber File、照明/Camera/PZT、Alignment、検査Parameterの修正を扱います。'
        }},
        {img:cmImg('I','smtv',2),tx:{
          en:'Basic Menu/Tool Bar layout\n\n1. Consists of the Menu Bar (inspection items, debug info, live image, inspection log, inspection result) and tabs for illumination/alignment/3D·2D inspection/Barcode Parameter.\n2. Tool Bar: New Job / Job Open·Save / Login / Img Grab / Inspection / System Config, etc.',
          ko:'Menu/Tool Bar 기본 구성\n\n1. Menu Bar(검사항목·디버그정보·라이브영상·검사로그·검사결과)와 조명/정렬/3D·2D검사/Barcode Parameter 탭으로 구성.\n2. Tool Bar: New Job / Job Open·Save / Login / Img Grab / Inspection / System Config 등.',
          zhCN:'Menu/Tool Bar基本构成\n\n1. 由Menu Bar(检测项目·调试信息·实时影像·检测日志·检测结果)及照明/对准/3D·2D检测/Barcode Parameter标签页构成。\n2. Tool Bar:New Job / Job Open·Save / Login / Img Grab / Inspection / System Config等。',
          zhTW:'Menu/Tool Bar基本構成\n\n1. 由Menu Bar(檢測項目·除錯資訊·即時影像·檢測日誌·檢測結果)及照明/對準/3D·2D檢測/Barcode Parameter標籤頁構成。\n2. Tool Bar:New Job / Job Open·Save / Login / Img Grab / Inspection / System Config等。',
          ja:'Menu/Tool Bar基本構成\n\n1. Menu Bar(検査項目・デバッグ情報・ライブ映像・検査ログ・検査結果)と照明/整列/3D・2D検査/Barcode Parameterタブで構成。\n2. Tool Bar:New Job / Job Open・Save / Login / Img Grab / Inspection / System Config等。'
        }},
        {img:cmImg('I','smtv',3),tx:{
          en:'Bump·Pedestal Scan conditions\n\n1. Set Scan Parameters separately for Bump and Pedestal; illumination can be adjusted per image.\n2. Set Scan step (smaller = more precise/slower), number of 2D images, and Dual switch option.\n3. Noise threshold (recommended 2~4) / Bad pixel threshold (recommended 10) — noise/low-pass filtering based on Fringe visibility.',
          ko:'Bump·Pedestal Scan 조건\n\n1. Bump용/Pedestal용 Scan Parameter를 각각 설정, 이미지별 조명값 조정 가능.\n2. Scan step(작을수록 정밀·느림), 2D 이미지 수, Dual switch 옵션 설정.\n3. Noise threshold(권장 2~4) / Bad pixel threshold(권장 10) — Fringe 시인성 기준 Noise·저역통과필터 처리.',
          zhCN:'Bump·Pedestal Scan条件\n\n1. 分别设置Bump用/Pedestal用的Scan Parameter,可按图像调整照明值。\n2. 设置Scan step(数值越小越精细·越慢)、2D图像数量、Dual switch选项。\n3. Noise threshold(建议2~4)/Bad pixel threshold(建议10)——基于Fringe可视性进行Noise·低通滤波处理。',
          zhTW:'Bump·Pedestal Scan條件\n\n1. 分別設定Bump用/Pedestal用的Scan Parameter,可依圖像調整照明值。\n2. 設定Scan step(數值越小越精細·越慢)、2D圖像數量、Dual switch選項。\n3. Noise threshold(建議2~4)/Bad pixel threshold(建議10)——依Fringe可視性進行Noise·低通濾波處理。',
          ja:'Bump·Pedestal Scan条件\n\n1. Bump用/Pedestal用のScan Parameterをそれぞれ設定し、画像ごとに照明値を調整できる。\n2. Scan step(小さいほど精密・低速)、2D画像数、Dual switchオプションを設定する。\n3. Noise threshold(推奨2~4)/Bad pixel threshold(推奨10)— Fringe視認性基準のNoise・ローパスフィルタ処理。'
        }},
        {img:cmImg('I','smtv',4),tx:{
          en:'Setting the Bump alignment reference\n\n1. Auto-alignment is attempted starting from the 1st image; on failure it proceeds to the next image in sequence. If Threshold offset=-256, that image is excluded from alignment.\n2. If all 2D alignments fail, alignment is performed using the 3D image.\n3. If the expected Bump position from the Gerber differs greatly from the actual position, recheck the Handler Teaching position before increasing the Global search offset.',
          ko:'Bump 정렬 기준 설정\n\n1. 1st 이미지부터 자동 정렬 시도, 실패 시 다음 이미지로 순차 진행. Threshold offset=-256이면 해당 이미지 정렬 제외.\n2. 2D 정렬 전부 실패 시 3D 이미지로 정렬 수행.\n3. Gerber 예상 위치와 실제 Bump 위치가 많이 다르면 Global search offset을 키우기 전에 Handler Teaching 위치부터 재확인.',
          zhCN:'设置Bump对准基准\n\n1. 从第1张图像开始尝试自动对准,失败则依次进入下一张图像。若Threshold offset=-256,则该图像排除在对准之外。\n2. 若2D对准全部失败,则使用3D图像进行对准。\n3. 若Gerber预期位置与实际Bump位置差异较大,应先重新确认Handler Teaching位置,再考虑增大Global search offset。',
          zhTW:'設定Bump對準基準\n\n1. 從第1張影像開始嘗試自動對準,失敗則依序進入下一張影像。若Threshold offset=-256,則該影像排除在對準之外。\n2. 若2D對準全部失敗,則使用3D影像進行對準。\n3. 若Gerber預期位置與實際Bump位置差異較大,應先重新確認Handler Teaching位置,再考慮增大Global search offset。',
          ja:'Bump整列基準の設定\n\n1. 1枚目の画像から自動整列を試み、失敗すると次の画像へ順次進む。Threshold offset=-256の場合、その画像は整列対象から除外される。\n2. 2D整列がすべて失敗した場合は3D画像で整列を行う。\n3. Gerberの予想位置と実際のBump位置が大きく異なる場合は、Global search offsetを大きくする前にHandler Teaching位置から再確認する。'
        }},
        {img:cmImg('I','smtv',5),tx:{
          en:'Z-Map-based height calculation criteria\n\n1. Define the calculation area with Bump Calc. Area / SR Calc. Area / Spec Bump Size.\n2. Weighting is applied based on Z-Map/V-Map pixel visibility; calculation is not possible if the valid pixel count is insufficient.\n3. Compute the top/bottom percentage or pixel-count average via Top/Bottom Percent·Count average (damaged Bumps are handled via recalculation Parameters).',
          ko:'Z-Map 기반 높이 계산 기준\n\n1. Bump Calc. Area / SR Calc. Area / Spec Bump Size로 계산 영역 정의.\n2. Z-Map·V-Map 기반으로 Pixel 시인성에 따른 가중치 적용, 유효 Pixel 수 미달 시 계산 불가.\n3. Top/Bottom Percent·Count average로 상하위 % 또는 Pixel수 평균 산출 (손상 Bump는 재계산 Parameter로 대응).',
          zhCN:'基于Z-Map的高度计算基准\n\n1. 通过Bump Calc. Area / SR Calc. Area / Spec Bump Size定义计算区域。\n2. 基于Z-Map·V-Map,根据Pixel可视性应用权重,有效Pixel数不足时无法计算。\n3. 通过Top/Bottom Percent·Count average计算上下位%或Pixel数平均值(受损Bump通过重新计算Parameter应对)。',
          zhTW:'基於Z-Map的高度計算基準\n\n1. 透過Bump Calc. Area / SR Calc. Area / Spec Bump Size定義計算區域。\n2. 基於Z-Map·V-Map,依Pixel可視性套用權重,有效Pixel數不足時無法計算。\n3. 通過Top/Bottom Percent·Count average計算上下位%或Pixel數平均值(受損Bump以重新計算Parameter因應)。',
          ja:'Z-Mapベースの高さ計算基準\n\n1. Bump Calc. Area / SR Calc. Area / Spec Bump Sizeで計算領域を定義する。\n2. Z-Map・V-Mapに基づきPixel視認性による重み付けを適用し、有効Pixel数が不足すると計算不可。\n3. Top/Bottom Percent·Count averageで上下位%またはPixel数平均を算出する(損傷Bumpは再計算Parameterで対応)。'
        }},
        {img:cmImg('I','smtv',6),tx:{
          en:'Tray/Unit/Pedestal/Aligner dimensions\n\n1. Setup → Save As to create a new Job; enter the Job name and save.\n2. Tray/Unit: enter Pocket Count X·Y, X0/DX, Y0/DY, and Body/Unit dimensions.\n3. Pedestal/Aligner: enter Pocket count, X0·Y0·DY relative to the Pin-hole, Pocket Height, and Adapter Size X·Y.',
          ko:'Tray/Unit/Pedestal/Aligner 치수\n\n1. Setup → Save As로 새 Job 생성, Job name 입력 후 저장.\n2. Tray/Unit: Pocket Count X·Y, X0/DX, Y0/DY, Body/Unit 치수 입력.\n3. Pedestal/Aligner: Pocket count, Pin-hole 기준 X0·Y0·DY, Pocket Height, Adapter Size X·Y 입력.',
          zhCN:'Tray/Unit/Pedestal/Aligner尺寸\n\n1. Setup → Save As创建新Job,输入Job name后保存。\n2. Tray/Unit:输入Pocket Count X·Y、X0/DX、Y0/DY、Body/Unit尺寸。\n3. Pedestal/Aligner:输入Pocket count、以Pin-hole为基准的X0·Y0·DY、Pocket Height、Adapter Size X·Y。',
          zhTW:'Tray/Unit/Pedestal/Aligner尺寸\n\n1. Setup → Save As建立新Job,輸入Job name後儲存。\n2. Tray/Unit:輸入Pocket Count X·Y、X0/DX、Y0/DY、Body/Unit尺寸。\n3. Pedestal/Aligner:輸入Pocket count、以Pin-hole為基準的X0·Y0·DY、Pocket Height、Adapter Size X·Y。',
          ja:'Tray/Unit/Pedestal/Aligner寸法\n\n1. Setup → Save Asで新規Jobを作成し、Job nameを入力して保存する。\n2. Tray/Unit:Pocket Count X·Y、X0/DX、Y0/DY、Body/Unit寸法を入力する。\n3. Pedestal/Aligner:Pocket count、Pin-hole基準のX0·Y0·DY、Pocket Height、Adapter Size X·Yを入力する。'
        }},
        {img:cmImg('I','smtv',7),tx:{
          en:'Path/format/SRO settings\n\n1. Path: C:\\SMTV\\Job\\Gerber (.csv format). Load with Open gerber, then enter Unit information.\n2. Provides Import/Export bump map, SRO selection, Device pose (rotate/flip), per-Die Color Map, and Fine bump number check functions.',
          ko:'경로/포맷/SRO 설정\n\n1. 경로: C:\\SMTV\\Job\\Gerber (.csv 형식). Open gerber로 로드 후 Unit 정보 입력.\n2. Import/Export bump map, SRO 선택, Device pose(회전/반전), Die별 Color Map, Fine bump 번호 확인 기능 제공.',
          zhCN:'路径/格式/SRO设置\n\n1. 路径:C:\\SMTV\\Job\\Gerber(.csv格式)。用Open gerber加载后输入Unit信息。\n2. 提供Import/Export bump map、SRO选择、Device pose(旋转/翻转)、按Die的Color Map、Fine bump编号确认等功能。',
          zhTW:'路徑/格式/SRO設定\n\n1. 路徑:C:\\SMTV\\Job\\Gerber(.csv格式)。用Open gerber載入後輸入Unit資訊。\n2. 提供Import/Export bump map、SRO選擇、Device pose(旋轉/翻轉)、按Die的Color Map、Fine bump編號確認等功能。',
          ja:'パス/フォーマット/SRO設定\n\n1. パス:C:\\SMTV\\Job\\Gerber(.csv形式)。Open gerberで読み込んだ後、Unit情報を入力する。\n2. Import/Export bump map、SRO選択、Device pose(回転/反転)、Dieごとのカラーマップ、Fine bump番号確認機能を提供する。'
        }},
        {img:cmImg('I','smtv',8),tx:{
          en:'Setting inspection criteria per Die·SRO\n\n1. 3D vision: after selecting Die/SRO, set inspection items, criteria (Spec/Range), and Use/Unuse.\n2. 2D vision: set inspection items and criteria in the separate 2D Vision Program.',
          ko:'Die·SRO별 검사기준 설정\n\n1. 3D vision: Die/SRO 선택 후 검사 항목·기준(Spec/Range) 및 Use/Unuse 설정.\n2. 2D vision: 별도 2D Vision Program에서 검사 항목·기준 설정.',
          zhCN:'按Die·SRO设置检测基准\n\n1. 3D vision:选择Die/SRO后,设置检测项目·基准(Spec/Range)及Use/Unuse。\n2. 2D vision:在独立的2D Vision Program中设置检测项目·基准。',
          zhTW:'依Die·SRO設定檢測基準\n\n1. 3D vision:選擇Die/SRO後,設定檢測項目·基準(Spec/Range)及Use/Unuse。\n2. 2D vision:在獨立的2D Vision Program中設定檢測項目·基準。',
          ja:'Die·SROごとの検査基準設定\n\n1. 3D vision:Die/SRO選択後、検査項目・基準(Spec/Range)及びUse/Unuseを設定する。\n2. 2D vision:別途2D Vision Programで検査項目・基準を設定する。'
        }},
        {img:cmImg('I','smtv',9),tx:{
          en:'Focus on the Pedestal Plane → save as the Auto Focus Reference Value\n\n1. Move to the Pedestal Plane position and focus.\n2. Designate the point where Fringe occurs as Make0.\n3. On the Handler page, enter that Vision Z-axis value as the Pedestal Z Auto Focus Reference Value and save.',
          ko:'Pedestal Plane Focus → Auto Focus Reference Value 저장\n\n1. Pedestal Plane 위치로 이동해 Focus를 맞춘다.\n2. Fringe가 발생하는 지점을 Make0으로 지정한다.\n3. Handler 페이지에서 해당 Vision Z-axis(Z축) 값을 Pedestal Z Auto Focus Reference Value로 입력하고 저장한다.',
          zhCN:'Pedestal Plane对焦 → 保存为Auto Focus Reference Value\n\n1. 移动到Pedestal Plane位置并对焦。\n2. 将出现Fringe的位置指定为Make0。\n3. 在Handler页面将该Vision Z-axis值输入为Pedestal Z Auto Focus Reference Value并保存。',
          zhTW:'Pedestal Plane對焦 → 儲存為Auto Focus Reference Value\n\n1. 移動到Pedestal Plane位置並對焦。\n2. 將出現Fringe的位置指定為Make0。\n3. 在Handler頁面將該Vision Z-axis值輸入為Pedestal Z Auto Focus Reference Value並儲存。',
          ja:'Pedestal Planeでフォーカス → Auto Focus Reference Valueとして保存\n\n1. Pedestal Plane位置へ移動しFocusを合わせる。\n2. Fringeが発生する地点をMake0に指定する。\n3. HandlerページでそのVision Z-axis値をPedestal Z Auto Focus Reference Valueとして入力し保存する。'
        }},
        {img:cmImg('I','smtv',10),tx:{
          en:'Inspection Z Position based on the first Pocket on the Good Rail\n\n1. Place the Tray and Unit on the Good Rail.\n2. On the Manual page, select 2D Vision and confirm the Tray is placed correctly.\n3. Left-click twice to move to the first Pocket position.\n4. In the 2D Vision Program, click Illumination to turn on the light.\n5. On the Handler page, select 2D Inspector.\n6. While watching the live image, move the Z-axis to focus, then Teach & Save it as the Inspection Z Position (Recipe).\n\nCheck point — In this example, Z-axis 24mm is the optimal focus position',
          ko:'Good Rail 첫 Pocket 기준 Inspection Z Position\n\n1. Good Rail에 Tray와 Unit을 놓는다.\n2. Manual 페이지에서 2D Vision을 선택하고, Tray가 올바른 위치에 놓였는지 확인한다.\n3. 좌클릭 두 번으로 첫 Pocket 위치로 이동한다.\n4. 2D Vision Program에서 Illumination을 클릭해 조명을 켠다.\n5. Handler 페이지에서 2D Inspector를 선택한다.\n6. Live 영상을 보며 Z-axis(Z축)를 움직여 초점을 맞추고, Teach & Save 하여 Inspection Z Position(Recipe)으로 저장한다.\n\n확인 포인트 — 예시 기준 — Z-axis(Z축) 24mm 위치가 최적 초점',
          zhCN:'以Good Rail第一个Pocket为基准的Inspection Z Position\n\n1. 在Good Rail上放置Tray和Unit。\n2. 在Manual页面选择2D Vision,确认Tray是否放置在正确位置。\n3. 左键点击两次移动到第一个Pocket位置。\n4. 在2D Vision Program中点击Illumination打开照明。\n5. 在Handler页面选择2D Inspector。\n6. 观看Live画面移动Z-axis对焦,然后Teach & Save保存为Inspection Z Position(Recipe)。\n\n确认要点——本例中Z-axis 24mm位置为最佳焦点',
          zhTW:'以Good Rail第一個Pocket為基準的Inspection Z Position\n\n1. 在Good Rail上放置Tray和Unit。\n2. 在Manual頁面選擇2D Vision,確認Tray是否放置在正確位置。\n3. 左鍵點擊兩次移動到第一個Pocket位置。\n4. 在2D Vision Program中點擊Illumination開啟照明。\n5. 在Handler頁面選擇2D Inspector。\n6. 觀看Live畫面移動Z-axis對焦,然後Teach & Save儲存為Inspection Z Position(Recipe)。\n\n確認要點——本例中Z-axis 24mm位置為最佳焦點',
          ja:'Good Railの最初のPocket基準のInspection Z Position\n\n1. Good RailにTrayとUnitを置く。\n2. Manualページで2D Visionを選択し、Trayが正しい位置に置かれているか確認する。\n3. 左クリック2回で最初のPocket位置へ移動する。\n4. 2D Vision ProgramでIlluminationをクリックして照明を点ける。\n5. Handlerページで2D Inspectorを選択する。\n6. Live映像を見ながらZ-axis(Z軸)を動かして焦点を合わせ、Teach & SaveしてInspection Z Position(Recipe)として保存する。\n\n確認ポイント — 例の基準ではZ-axis(Z軸)24mm位置が最適焦点'
        }},
        {img:cmImg('I','smtv',11),tx:{
          en:'Enter Pocket Height·Adapter Size → correct with the Align Grip Offset\n\n1. Enter the measured dimensions (Pocket Height, Adapter Size X[mm], Adapter Size Y[mm]) and Apply·Save.\n2. Place the Unit on the Aligner and click Motion Move Aligner X, Y Push Position. Confirm the Unit is seated firmly. (Correct with Align Grip X, Y Offset; be careful not to push too hard.)\n3. Click Motion Move (Picker X) Aligner Pick Position and Motion Move (Aligner Y) Pick Position to move to the Pick Position.\n4. Run Picker Cylinder Down 1~6 and lower the Picker Z-axis to confirm the Picker X, Y position matches the Unit.\n5. If the Picker is not centered on the Unit, edit the Aligner Pick Position Offset under Setup page ▸ Job Option and Apply·Save. (All Offset values start at 0 for a new Job.)\n6. The Picker Z-axis position can be adjusted as the Z Align Pick Position — it\'s best set so it just lightly presses the Unit.',
          ko:'Pocket Height·Adapter Size 입력 → Align Grip Offset 보정\n\n1. 측정된 치수(Pocket Height, Adapter Size X[mm], Adapter Size Y[mm])를 입력하고 Apply·Save 한다.\n2. Unit을 Aligner에 올리고 Motion Move Aligner X, Y Push Position을 클릭한다. Unit이 잘 밀착되었는지 확인한다. (Align Grip X, Y Offset으로 보정, 너무 세게 밀지 않도록 주의)\n3. Motion Move (Picker X) Aligner Pick Position, Motion Move (Aligner Y) Pick Position을 클릭해 Pick Position으로 이동한다.\n4. Picker Cylinder Down 1~6을 실행하고, Picker Z-axis(Z축)를 낮춰 Picker X, Y 위치가 Unit과 일치하는지 확인한다.\n5. Picker가 Unit 중앙에 있지 않으면 Setup 페이지 ▸ Job Option ▸ Aligner Pick Position Offset을 수정하고 Apply·Save 한다. (초기 Job 설정 시 모든 Offset 값은 0에서 시작)\n6. Picker Z-axis(Z축) 위치는 Z Align Pick Position으로 수정 가능하다 — Unit을 살짝 누르는 정도로 설정하는 것이 좋다.',
          zhCN:'输入Pocket Height·Adapter Size → 用Align Grip Offset校正\n\n1. 输入测得的尺寸(Pocket Height、Adapter Size X[mm]、Adapter Size Y[mm])并Apply·Save。\n2. 将Unit放到Aligner上,点击Motion Move Aligner X, Y Push Position。确认Unit是否贴合良好。(以Align Grip X, Y Offset校正,注意不要推得太用力)\n3. 点击Motion Move (Picker X) Aligner Pick Position、Motion Move (Aligner Y) Pick Position移动到Pick Position。\n4. 执行Picker Cylinder Down 1~6,降低Picker Z-axis确认Picker X、Y位置是否与Unit一致。\n5. 若Picker不在Unit中央,请修改Setup页面 ▸ Job Option ▸ Aligner Pick Position Offset并Apply·Save。(新Job的所有Offset值初始均为0)\n6. Picker Z-axis位置可通过Z Align Pick Position调整——建议设置为轻压Unit的程度。',
          zhTW:'輸入Pocket Height·Adapter Size → 用Align Grip Offset校正\n\n1. 輸入測得的尺寸(Pocket Height、Adapter Size X[mm]、Adapter Size Y[mm])並Apply·Save。\n2. 將Unit放到Aligner上,點擊Motion Move Aligner X, Y Push Position。確認Unit是否貼合良好。(以Align Grip X, Y Offset校正,注意不要推得太用力)\n3. 點擊Motion Move (Picker X) Aligner Pick Position、Motion Move (Aligner Y) Pick Position移動到Pick Position。\n4. 執行Picker Cylinder Down 1~6,降低Picker Z-axis確認Picker X、Y位置是否與Unit一致。\n5. 若Picker不在Unit中央,請修改Setup頁面 ▸ Job Option ▸ Aligner Pick Position Offset並Apply·Save。(新Job的所有Offset值初始均為0)\n6. Picker Z-axis位置可透過Z Align Pick Position調整——建議設定為輕壓Unit的程度。',
          ja:'Pocket Height·Adapter Sizeを入力 → Align Grip Offsetで補正\n\n1. 測定した寸法(Pocket Height、Adapter Size X[mm]、Adapter Size Y[mm])を入力しApply·Saveする。\n2. UnitをAlignerに載せ、Motion Move Aligner X, Y Push Positionをクリックする。Unitがしっかり密着しているか確認する。(Align Grip X, Y Offsetで補正、強く押しすぎないよう注意)\n3. Motion Move (Picker X) Aligner Pick Position、Motion Move (Aligner Y) Pick Positionをクリックし、Pick Positionへ移動する。\n4. Picker Cylinder Down 1~6を実行し、Picker Z-axis(Z軸)を下げてPicker X, Y位置がUnitと一致するか確認する。\n5. PickerがUnit中央にない場合、Setupページ ▸ Job Option ▸ Aligner Pick Position Offsetを修正しApply·Saveする。(新規Job設定時、すべてのOffset値は0から開始)\n6. Picker Z-axis(Z軸)位置はZ Align Pick Positionで修正可能——Unitを軽く押す程度に設定するのがよい。'
        }},
        {img:cmImg('I','smtv',12),tx:{
          en:'Align the Pedestal Place position·check the Cross Line\n\n1. Click Motion Action Do Align to align the Unit.\n2. Click Motion Move Picker Pick 1Cycle Position to pick up the Unit.\n3. Click Motion Move (Picker X) Pedestal Place Position to move.\n4. Click Motion Move Picker Place 1Cycle Position to place the Unit on the Pedestal.\n5. Watch the Vision Program live image to confirm the Unit and Pin don\'t interfere. Move the X, Y position to align the Cross Line with the Unit\'s edge and confirm every Unit matches.\n6. If a Unit is off to one side, adjust the Offset value, recheck the Place Position, then Apply·Save.\n7. The Picker Z-axis position can be adjusted as the Z Align Place Position — it\'s best set so it just lightly presses the Pedestal.',
          ko:'Pedestal Place 위치 정렬·Cross Line 확인\n\n1. Motion Action Do Align을 클릭해 Unit을 정렬한다.\n2. Motion Move Picker Pick 1Cycle Position을 클릭해 Unit을 집는다.\n3. Motion Move (Picker X) Pedestal Place Position을 클릭해 이동한다.\n4. Motion Move Picker Place 1Cycle Position을 클릭해 Pedestal에 Unit을 내려놓는다.\n5. Vision Program Live 영상을 보며 Unit과 Pin이 간섭하지 않는지 확인한다. X, Y 위치를 움직여 Cross Line이 Unit 끝에 정렬되고 모든 Unit이 일치하는지 확인한다.\n6. Unit이 한쪽으로 치우쳤으면 Offset 값을 수정하고 Place Position을 재확인한 뒤 Apply·Save 한다.\n7. Picker Z-axis(Z축) 위치는 Z Align Place Position으로 수정 가능하다 — Pedestal을 살짝 누르는 정도로 설정하는 것이 좋다.',
          zhCN:'對準Pedestal Place位置·確認Cross Line\n\n1. 点击Motion Action Do Align对准Unit。\n2. 点击Motion Move Picker Pick 1Cycle Position拾取Unit。\n3. 点击Motion Move (Picker X) Pedestal Place Position移动。\n4. 点击Motion Move Picker Place 1Cycle Position将Unit放到Pedestal上。\n5. 观看Vision Program的Live画面确认Unit与Pin是否发生干涉。移动X、Y位置使Cross Line与Unit边缘对齐,并确认所有Unit一致。\n6. 若Unit偏向一侧,请修改Offset值并重新确认Place Position后Apply·Save。\n7. Picker Z-axis位置可通过Z Align Place Position调整——建议设置为轻压Pedestal的程度。',
          zhTW:'對準Pedestal Place位置·確認Cross Line\n\n1. 點擊Motion Action Do Align對準Unit。\n2. 點擊Motion Move Picker Pick 1Cycle Position拾取Unit。\n3. 點擊Motion Move (Picker X) Pedestal Place Position移動。\n4. 點擊Motion Move Picker Place 1Cycle Position將Unit放到Pedestal上。\n5. 觀看Vision Program的Live畫面確認Unit與Pin是否發生干涉。移動X、Y位置使Cross Line與Unit邊緣對齊,並確認所有Unit一致。\n6. 若Unit偏向一側,請修改Offset值並重新確認Place Position後Apply·Save。\n7. Picker Z-axis位置可透過Z Align Place Position調整——建議設定為輕壓Pedestal的程度。',
          ja:'Pedestal Place位置整列・Cross Line確認\n\n1. Motion Action Do Alignをクリックして Unitを整列する。\n2. Motion Move Picker Pick 1Cycle Positionをクリックして Unitを掴む。\n3. Motion Move (Picker X) Pedestal Place Positionをクリックして移動する。\n4. Motion Move Picker Place 1Cycle Positionをクリックして PedestalにUnitを置く。\n5. Vision ProgramのLive映像を見ながらUnitとPinが干渉しないか確認する。X, Y位置を動かしCross LineがUnitの端に整列し、すべてのUnitが一致するか確認する。\n6. Unitが片側に寄っている場合はOffset値を修正しPlace Positionを再確認した後Apply·Saveする。\n7. Picker Z-axis(Z軸)位置はZ Align Place Positionで修正可能——Pedestalを軽く押す程度に設定するのがよい。'
        }},
        {img:cmImg('I','smtv',13),tx:{
          en:'Correcting Bump position offset relative to Gerber\n\n1. On the Manual page, click Vision to proceed with C4 Area Positioning.\n2. Double right-click the Pocket number where the Unit is located to move to the C4 area.\n3. In the Vision Program, click Grab then Alignment.\n4. Click Ideal Gerber Bump Circle to check whether the image and Gerber match.\n5. Adjust and save the C4 Offset so the image matches the Gerber. Repeat until they match.\n\nCheck point — C4 Offset must always start at 0 when initially setting up a Job',
          ko:'Gerber 기준 Bump 위치 Offset 보정\n\n1. Manual 페이지에서 Vision을 클릭해 C4 Area Positioning을 진행한다.\n2. Unit이 위치한 Pocket 번호를 더블 우클릭하여 C4 영역으로 이동한다.\n3. Vision Program에서 Grab 후 Alignment를 클릭한다.\n4. Ideal Gerber Bump Circle을 클릭해 이미지와 Gerber가 일치하는지 확인한다.\n5. 이미지와 Gerber가 일치하도록 C4 Offset을 수정하고 저장한다. 일치할 때까지 반복한다.\n\n확인 포인트 — C4 Offset은 초기 Job 셋업 시 반드시 0에서 시작',
          zhCN:'校正相对Gerber的Bump位置Offset\n\n1. 在Manual页面点击Vision,进行C4 Area Positioning。\n2. 双击右键Unit所在的Pocket编号,移动到C4区域。\n3. 在Vision Program中Grab后点击Alignment。\n4. 点击Ideal Gerber Bump Circle确认影像与Gerber是否一致。\n5. 修改并保存C4 Offset使影像与Gerber一致,重复直到一致为止。\n\n确认要点——初始Job设置时C4 Offset必须从0开始',
          zhTW:'校正相對Gerber的Bump位置Offset\n\n1. 在Manual頁面點擊Vision,進行C4 Area Positioning。\n2. 雙擊右鍵Unit所在的Pocket編號,移動到C4區域。\n3. 在Vision Program中Grab後點擊Alignment。\n4. 點擊Ideal Gerber Bump Circle確認影像與Gerber是否一致。\n5. 修改並儲存C4 Offset使影像與Gerber一致,重複直到一致為止。\n\n確認要點——初始Job設定時C4 Offset必須從0開始',
          ja:'Gerber基準のBump位置Offset補正\n\n1. Manualページ でVisionをクリックしC4 Area Positioningを行う。\n2. Unitが位置するPocket番号をダブル右クリックしC4領域へ移動する。\n3. Vision ProgramでGrab後Alignmentをクリックする。\n4. Ideal Gerber Bump Circleをクリックし画像とGerberが一致するか確認する。\n5. 画像とGerberが一致するようC4 Offsetを修正し保存する。一致するまで繰り返す。\n\n確認ポイント — C4 Offsetは初期Job設定時に必ず0から開始する'
        }},
        {img:cmImg('I','smtv',14),tx:{
          en:'Barcode ROI setup·save order\n\n1. Clamp the Tray on the Good rail, then teach the Barcode position (move Barcode center/Vision Z), align it to the crosshair center, and Apply.\n2. In the 2D Vision Program, set the Barcode type, inspection image, and ROI, then verify with an Insp test.\n3. Once all settings are complete, save in the order: Apply → Job save.',
          ko:'Barcode ROI 설정·저장 순서\n\n1. Good rail에 Tray Clamp 후 Barcode 위치 Teaching(Barcode center/Vision Z 이동), 십자선 중심에 정렬 후 Apply.\n2. 2D Vision Program에서 Barcode 타입·검사용 이미지·ROI 설정 후 Insp test로 검증.\n3. 모든 설정 완료 후 Apply → Job save 순서로 저장한다.',
          zhCN:'Barcode ROI设置·保存顺序\n\n1. 在Good rail上Clamp Tray后进行Barcode位置Teaching(移动Barcode center/Vision Z),对准十字线中心后Apply。\n2. 在2D Vision Program中设置Barcode类型·检测用影像·ROI,并用Insp test验证。\n3. 全部设置完成后按Apply → Job save的顺序保存。',
          zhTW:'Barcode ROI設定·儲存順序\n\n1. 在Good rail上Clamp Tray後進行Barcode位置Teaching(移動Barcode center/Vision Z),對準十字線中心後Apply。\n2. 在2D Vision Program中設定Barcode類型·檢測用影像·ROI,並用Insp test驗證。\n3. 全部設定完成後按Apply → Job save的順序儲存。',
          ja:'Barcode ROI設定・保存順序\n\n1. Good railにTrayをClamp後、Barcode位置Teaching(Barcode center/Vision Z移動)を行い、十字線中心に整列させApplyする。\n2. 2D Vision ProgramでBarcodeタイプ・検査用画像・ROIを設定し、Insp testで検証する。\n3. すべての設定完了後、Apply → Job saveの順で保存する。'
        }}
      ]
    },
    nbga:{
      title:{ko:'I. Recipe Vision Parameter',en:'I. Recipe Vision Parameter',zhCN:'I. Recipe Vision Parameter',zhTW:'I. Recipe Vision Parameter',ja:'I. Recipe Vision Parameter'},
      slides:[
        {img:cmImg('I','nbga',1),tx:{
          en:'Software Inspection Parameter — this section covers Illum Control, Align, 2D Barcode & OCR, 2D Inspection, 3D Inspection, and LTS Target.',
          ko:'Software Inspection Parameter — Illum Control, Align, 2D Barcode & OCR, 2D Inspection, 3D Inspection, LTS Target를 다룹니다.',
          zhCN:'Software Inspection Parameter——本节介绍Illum Control、Align、2D Barcode & OCR、2D Inspection、3D Inspection、LTS Target。',
          zhTW:'Software Inspection Parameter——本節介紹Illum Control、Align、2D Barcode & OCR、2D Inspection、3D Inspection、LTS Target。',
          ja:'Software Inspection Parameter——本節ではIllum Control、Align、2D Barcode & OCR、2D Inspection、3D Inspection、LTS Targetを扱います。'
        }},
        {img:cmImg('I','nbga',2),tx:{
          en:'2.1.1. Illum Control — sets Illumination, Camera/PTZ, and Grab parameters. These values are saved to the Job File and sent to the hardware through the Sync Board.',
          ko:'2.1.1. Illum Control — Illumination, Camera/PTZ, Grab Parameter를 설정합니다. 설정값은 Job File에 저장되고 Sync Board를 통해 하드웨어로 전달됩니다.',
          zhCN:'2.1.1. Illum Control——设置Illumination、Camera/PTZ、Grab Parameter。设置值保存到Job File,并通过Sync Board传送到硬件。',
          zhTW:'2.1.1. Illum Control——設定Illumination、Camera/PTZ、Grab Parameter。設定值儲存到Job File,並透過Sync Board傳送到硬體。',
          ja:'2.1.1. Illum Control——Illumination、Camera/PTZ、Grab Parameterを設定します。設定値はJob Fileに保存され、Sync Boardを通してハードウェアに伝達されます。'
        }},
        {img:cmImg('I','nbga',3),tx:{
          en:'Camera property page — Frame Period (time to capture one image, e.g. ~3.1ms at 330fps), Illumination Delay (compensates the timing gap between grab and illumination, typically 0.4–1.0ms), and Exposure Time (how long the camera takes in light).',
          ko:'Camera 속성 — Frame Period(1장 촬영에 걸리는 시간, 예: 330fps면 약 3.1ms), Illumination Delay(Grab과 조명 시점의 오차 보정, 보통 0.4~1.0ms), Exposure Time(카메라가 빛을 받아들이는 시간).',
          zhCN:'Camera属性——Frame Period(拍摄一张图像所需时间,例如330fps约3.1ms)、Illumination Delay(校正Grab与照明时序的偏差,通常0.4~1.0ms)、Exposure Time(相机接收光的时间)。',
          zhTW:'Camera屬性——Frame Period(拍攝一張影像所需時間,例如330fps約3.1ms)、Illumination Delay(校正Grab與照明時序的偏差,通常0.4~1.0ms)、Exposure Time(相機接收光的時間)。',
          ja:'Camera プロパティ——Frame Period(1枚撮影にかかる時間、例:330fpsで約3.1ms)、Illumination Delay(GrabとIlluminationのタイミング差を補正、通常0.4~1.0ms)、Exposure Time(カメラが光を取り込む時間)。'
        }},
        {img:cmImg('I','nbga',4),tx:{
          en:'Partial Image Size — shrinks the grabbed image (from the full 2048×2048px board image) to speed up inspection of small targets. UsePartialImage enables it, PartialImageSizeX/Y set the reduced size, and Partial Frame Period is recalculated automatically.',
          ko:'Partial Image Size — 작은 대상 검사 속도를 높이기 위해 Grab한 이미지(원본 2048×2048px)를 축소합니다. UsePartialImage로 사용 여부를 설정하고, PartialImageSizeX/Y로 축소 크기를 지정하며, Partial Frame Period는 자동으로 재계산됩니다.',
          zhCN:'Partial Image Size——为提高小尺寸目标的检测速度,将Grab图像(原始2048×2048px)缩小。通过UsePartialImage设置是否使用,PartialImageSizeX/Y设置缩小尺寸,Partial Frame Period会自动重新计算。',
          zhTW:'Partial Image Size——為提高小尺寸目標的檢測速度,將Grab影像(原始2048×2048px)縮小。透過UsePartialImage設定是否使用,PartialImageSizeX/Y設定縮小尺寸,Partial Frame Period會自動重新計算。',
          ja:'Partial Image Size——小さい対象の検査速度を上げるため、Grab画像(元は2048×2048px)を縮小します。UsePartialImageで使用有無を設定し、PartialImageSizeX/Yで縮小サイズを指定、Partial Frame Periodは自動的に再計算されます。'
        }},
        {img:cmImg('I','nbga',5),tx:{
          en:'PZT property (1) — Pzt Scan Step (the PZT motor\'s per-move distance, auto-set by wavelength), Pzt Scan Range (max travel, fixed by the PZT product type), ScanRangeHigh/Low (inspection scan range), and their Retry variants (scan range used on re-inspection).',
          ko:'PZT 속성(1) — Pzt Scan Step(PZT Motor의 1회 이동 거리, 파장에 따라 자동 설정), Pzt Scan Range(PZT Motor 최대 이동 거리, PZT 제품 유형에 따라 고정), ScanRangeHigh/Low(검사용 Scan 범위), 그리고 재검사용 Retry 값들.',
          zhCN:'PZT属性(1)——Pzt Scan Step(PZT Motor单次移动距离,依波长自动设定)、Pzt Scan Range(PZT Motor最大移动距离,依PZT产品类型固定)、ScanRangeHigh/Low(检测用Scan范围)及其重新检测用的Retry值。',
          zhTW:'PZT屬性(1)——Pzt Scan Step(PZT Motor單次移動距離,依波長自動設定)、Pzt Scan Range(PZT Motor最大移動距離,依PZT產品類型固定)、ScanRangeHigh/Low(檢測用Scan範圍)及其重新檢測用的Retry值。',
          ja:'PZTプロパティ(1)——Pzt Scan Step(PZT Motorの1回移動距離、波長により自動設定)、Pzt Scan Range(PZT Motorの最大移動距離、PZT製品種別により固定)、ScanRangeHigh/Low(検査用Scan範囲)、および再検査用のRetry値。'
        }},
        {img:cmImg('I','nbga',6),tx:{
          en:'PZT property (2) — Wavelength (inspection wavelength, measurable via Utility ▸ Wavelength Calibration; red light ≈ 630nm), Scan Order (waveform division count), JumpRangeBegin/End (a PZT scan range to skip), and ScaleFactor (motor input scaling, usually 1).',
          ko:'PZT 속성(2) — Wavelength(검사 파장, Utility ▸ Wavelength Calibration으로 측정 가능, 적색광 약 630nm), Scan Order(파형 분할 개수), JumpRangeBegin/End(건너뛸 PZT Scan 구간), ScaleFactor(Motor 입력 계수, 보통 1 사용).',
          zhCN:'PZT属性(2)——Wavelength(检测波长,可通过Utility ▸ Wavelength Calibration测量,红光约630nm)、Scan Order(波形分割数)、JumpRangeBegin/End(要跳过的PZT Scan区间)、ScaleFactor(Motor输入系数,通常使用1)。',
          zhTW:'PZT屬性(2)——Wavelength(檢測波長,可透過Utility ▸ Wavelength Calibration測量,紅光約630nm)、Scan Order(波形分割數)、JumpRangeBegin/End(要跳過的PZT Scan區間)、ScaleFactor(Motor輸入係數,通常使用1)。',
          ja:'PZTプロパティ(2)——Wavelength(検査波長、Utility ▸ Wavelength Calibrationで測定可能、赤色光は約630nm)、Scan Order(波形分割数)、JumpRangeBegin/End(スキップするPZT Scan区間)、ScaleFactor(Motor入力係数、通常1を使用)。'
        }},
        {img:cmImg('I','nbga',7),tx:{
          en:'Frame Count — sets how many 2D/3D images are grabbed. 3D Frame Num (usually 1, or 2 when UseMultiZmap is on), 2D Frame Num, Cuda Delay Frame Num (delays the CUDA calculation by N frames), and Last No Calc Frame Num (excludes the last N frames from the CUDA calculation).',
          ko:'Frame Count — 2D·3D 이미지 획득 장수를 설정합니다. 3D Frame Num(보통 1장, UseMultiZmap 사용 시 2장), 2D Frame Num, Cuda Delay Frame Num(CUDA 연산을 N Frame만큼 지연), Last No Calc Frame Num(마지막 N Frame을 CUDA 연산에서 제외).',
          zhCN:'Frame Count——设置2D、3D图像的采集张数。3D Frame Num(通常1张,UseMultiZmap开启时为2张)、2D Frame Num、Cuda Delay Frame Num(将CUDA运算延迟N帧)、Last No Calc Frame Num(将最后N帧从CUDA运算中排除)。',
          zhTW:'Frame Count——設定2D、3D影像的擷取張數。3D Frame Num(通常1張,UseMultiZmap開啟時為2張)、2D Frame Num、Cuda Delay Frame Num(將CUDA運算延遲N幀)、Last No Calc Frame Num(將最後N幀從CUDA運算中排除)。',
          ja:'Frame Count——2D・3D画像の取得枚数を設定します。3D Frame Num(通常1枚、UseMultiZmap使用時は2枚)、2D Frame Num、Cuda Delay Frame Num(CUDA演算をNフレーム遅延)、Last No Calc Frame Num(最後のNフレームをCUDA演算から除外)。'
        }},
        {img:cmImg('I','nbga',8),tx:{
          en:'WSI Param (1) — NoiseThreshold (fringe signal changes below this are ignored as noise), UseMultiZMap (alternates between two 3D frames when SR and bump data can\'t both be captured well at one light intensity), and CoherentLength (the fringe signal\'s start/end size).',
          ko:'WSI Param(1) — NoiseThreshold(이 값보다 작은 Fringe 신호 변화는 Noise로 간주해 제외), UseMultiZMap(하나의 조명 강도로 SR과 Bump 데이터를 동시에 얻기 어려울 때 3D Frame 2장을 번갈아 획득), CoherentLength(Fringe 신호의 시작·끝 크기).',
          zhCN:'WSI Param(1)——NoiseThreshold(低于此值的Fringe信号变化视为Noise并排除)、UseMultiZMap(当一种光强难以同时获取SR与Bump数据时,交替获取两张3D Frame)、CoherentLength(Fringe信号的起止大小)。',
          zhTW:'WSI Param(1)——NoiseThreshold(低於此值的Fringe訊號變化視為Noise並排除)、UseMultiZMap(當一種光強難以同時獲取SR與Bump資料時,交替獲取兩張3D Frame)、CoherentLength(Fringe訊號的起止大小)。',
          ja:'WSI Param(1)——NoiseThreshold(この値未満のFringe信号変化はNoiseとみなし除外)、UseMultiZMap(一つの照明強度でSRとBumpデータを同時に得にくい場合、3D Frameを2枚交互に取得)、CoherentLength(Fringe信号の開始・終了サイズ)。'
        }},
        {img:cmImg('I','nbga',9),tx:{
          en:'WSI Param (2) — BadPixelThreshold sets the bad-pixel data threshold; IntervalStep and IntervalTime are currently disabled.',
          ko:'WSI Param(2) — BadPixelThreshold는 불량 픽셀 데이터의 임계값을 설정합니다. IntervalStep, IntervalTime은 현재 비활성화되어 있습니다.',
          zhCN:'WSI Param(2)——BadPixelThreshold用于设置不良像素数据的阈值。IntervalStep、IntervalTime目前处于停用状态。',
          zhTW:'WSI Param(2)——BadPixelThreshold用於設定不良像素資料的閾值。IntervalStep、IntervalTime目前處於停用狀態。',
          ja:'WSI Param(2)——BadPixelThresholdは不良ピクセルデータの閾値を設定します。IntervalStep、IntervalTimeは現在無効化されています。'
        }},
        {img:cmImg('I','nbga',10),tx:{
          en:'Grab property — MultiCount (total 3D grab image count, determined by the PZT Scan Range and Scan Step), TimeOut (grab result wait time), and FirstTimeOut (timeout for the first grab); ImageSaved and MultiTimeOut are currently disabled.',
          ko:'Grab 속성 — MultiCount(3D Grab 이미지 총 장수, PZT ScanRange·Scan Step으로 결정), TimeOut(Grab 결과 대기 시간), FirstTimeOut(첫 Grab의 Timeout). ImageSaved, MultiTimeOut은 현재 비활성화.',
          zhCN:'Grab属性——MultiCount(3D Grab图像总张数,由PZT ScanRange与Scan Step决定)、TimeOut(等待Grab结果的时间)、FirstTimeOut(首次Grab的超时时间)。ImageSaved、MultiTimeOut目前处于停用状态。',
          zhTW:'Grab屬性——MultiCount(3D Grab影像總張數,由PZT ScanRange與Scan Step決定)、TimeOut(等待Grab結果的時間)、FirstTimeOut(首次Grab的超時時間)。ImageSaved、MultiTimeOut目前處於停用狀態。',
          ja:'Grabプロパティ——MultiCount(3D Grab画像の総枚数、PZT ScanRangeとScan Stepで決定)、TimeOut(Grab結果の待機時間)、FirstTimeOut(最初のGrabのタイムアウト)。ImageSaved、MultiTimeOutは現在無効化されています。'
        }},
        {img:cmImg('I','nbga',11),tx:{
          en:'Intensity Control (2D) — regulates lighting per channel. Channels C01–C10 control the dome-light (oblique) illumination; C11/C12 control coaxial illumination.',
          ko:'Intensity Control(2D) — 채널별로 조명 강도를 조절합니다. C01~C10 채널은 Dome Light(경사 조명), C11/C12 채널은 동축(Coaxial) 조명을 제어합니다.',
          zhCN:'Intensity Control(2D)——按通道调节照明强度。C01~C10通道控制Dome Light(斜射照明),C11/C12通道控制Coaxial(同轴)照明。',
          zhTW:'Intensity Control(2D)——按通道調節照明強度。C01~C10通道控制Dome Light(斜射照明),C11/C12通道控制Coaxial(同軸)照明。',
          ja:'Intensity Control(2D)——チャンネルごとに照明強度を調整します。C01~C10チャンネルはDome Light(斜方照明)、C11/C12チャンネルはCoaxial(同軸)照明を制御します。'
        }},
        {img:cmImg('I','nbga',12),tx:{
          en:'Oblique illumination lights the side of a bump; coaxial illumination lights its top. A Round Bump has a narrow top (a narrow reflective surface even under coaxial light, so brighter settings are needed), while a Flat Bump has a wide top (reflects well under coaxial light).',
          ko:'Oblique 조명은 Bump 측면을, Coaxial 조명은 Bump 상단을 비춥니다. Round Bump는 상단 면적이 좁아 Coaxial 조명을 써도 반사면이 좁으므로 더 밝은 설정이 필요하고, Flat Bump는 상단이 넓어 Coaxial 조명 시 반사면을 넓게 볼 수 있습니다.',
          zhCN:'Oblique照明照射Bump侧面,Coaxial照明照射Bump顶部。Round Bump顶部面积小,即使使用Coaxial照明反射面也较窄,需要更亮的设置;Flat Bump顶部较宽,使用Coaxial照明时可看到较大的反射面。',
          zhTW:'Oblique照明照射Bump側面,Coaxial照明照射Bump頂部。Round Bump頂部面積小,即使使用Coaxial照明反射面也較窄,需要更亮的設定;Flat Bump頂部較寬,使用Coaxial照明時可看到較大的反射面。',
          ja:'Oblique照明はBumpの側面を、Coaxial照明はBumpの上面を照らします。Round Bumpは上面が狭くCoaxial照明でも反射面が狭いため明るめの設定が必要で、Flat Bumpは上面が広くCoaxial照明で広い反射面が見えます。'
        }},
        {img:cmImg('I','nbga',13),tx:{
          en:'Intensity Control (3D) — in the 3D optical system\'s 2D frame, C01–C03 control oblique lighting; in its 3D (WSI) frame, C01 controls coaxial lighting.',
          ko:'Intensity Control(3D) — 3D 광학계의 2D Frame에서는 C01~C03이 Oblique 조명을, 3D Frame(WSI)에서는 C01이 Coaxial 조명을 제어합니다.',
          zhCN:'Intensity Control(3D)——3D光学系统的2D Frame中C01~C03控制Oblique照明,3D Frame(WSI)中C01控制Coaxial照明。',
          zhTW:'Intensity Control(3D)——3D光學系統的2D Frame中C01~C03控制Oblique照明,3D Frame(WSI)中C01控制Coaxial照明。',
          ja:'Intensity Control(3D)——3D光学系の2D FrameではC01~C03がOblique照明を、3D Frame(WSI)ではC01がCoaxial照明を制御します。'
        }},
        {img:cmImg('I','nbga',14),tx:{
          en:'The same oblique/coaxial lighting principle applies to Round and Flat bumps in the 3D optical system as in the 2D system.',
          ko:'3D 광학계에서도 Round Bump·Flat Bump에 대한 Oblique/Coaxial 조명 원리는 2D 광학계와 동일하게 적용됩니다.',
          zhCN:'3D光学系统中Round Bump、Flat Bump的Oblique/Coaxial照明原理与2D光学系统相同。',
          zhTW:'3D光學系統中Round Bump、Flat Bump的Oblique/Coaxial照明原理與2D光學系統相同。',
          ja:'3D光学系におけるRound Bump・Flat BumpへのOblique/Coaxial照明の原理は2D光学系と同様に適用されます。'
        }},
        {img:cmImg('I','nbga',15),tx:{
          en:'Software Inspection Parameter — this section covers Illum Control, Align, 2D Barcode & OCR, 2D Inspection, 3D Inspection, and LTS Target.',
          ko:'Software Inspection Parameter — Illum Control, Align, 2D Barcode & OCR, 2D Inspection, 3D Inspection, LTS Target를 다룹니다.',
          zhCN:'Software Inspection Parameter——本节介绍Illum Control、Align、2D Barcode & OCR、2D Inspection、3D Inspection、LTS Target。',
          zhTW:'Software Inspection Parameter——本節介紹Illum Control、Align、2D Barcode & OCR、2D Inspection、3D Inspection、LTS Target。',
          ja:'Software Inspection Parameter——本節ではIllum Control、Align、2D Barcode & OCR、2D Inspection、3D Inspection、LTS Targetを扱います。'
        }},
        {img:cmImg('I','nbga',16),tx:{
          en:'2.1.2. Align — sets the parameters for matching the inspected image against the Gerber pattern. It also checks whether a tray pocket is empty, and forms a \'Blob\' wherever the image\'s gray level exceeds a threshold (indicating a product).',
          ko:'2.1.2. Align — 검사 이미지와 Gerber 패턴을 비교하기 위한 Parameter를 설정합니다. Tray Pocket이 비어 있는지도 확인하며, 이미지에서 Gray Level이 일정 기준을 넘는 부분에 \'Blob\'을 형성합니다(Product로 판단).',
          zhCN:'2.1.2. Align——设置用于比较检测图像与Gerber图案的参数。同时确认Tray Pocket是否为空,并在图像中Gray Level超过一定基准的区域形成\'Blob\'(判定为Product)。',
          zhTW:'2.1.2. Align——設定用於比較檢測影像與Gerber圖案的參數。同時確認Tray Pocket是否為空,並在影像中Gray Level超過一定基準的區域形成\'Blob\'(判定為Product)。',
          ja:'2.1.2. Align——検査画像とGerberパターンを比較するためのParameterを設定します。Tray Pocketが空かどうかも確認し、画像内でGray Levelが一定基準を超える部分に\'Blob\'を形成します(Productと判定)。'
        }},
        {img:cmImg('I','nbga',17),tx:{
          en:'Top Bump Image (1) — select which Illum Control frame to use for bump alignment. Choose an image where the bump shape is clearly distinguishable.',
          ko:'Top Bump Image(1) — Bump Alignment에 사용할 Illum Control Frame을 선택합니다. Bump 형상이 뚜렷이 구분되는 이미지를 선택해야 합니다.',
          zhCN:'Top Bump Image(1)——选择用于Bump Alignment的Illum Control Frame。应选择能清楚区分Bump形状的图像。',
          zhTW:'Top Bump Image(1)——選擇用於Bump Alignment的Illum Control Frame。應選擇能清楚區分Bump形狀的影像。',
          ja:'Top Bump Image(1)——Bump Alignmentに使用するIllum Control Frameを選択します。Bump形状がはっきり区別できる画像を選ぶ必要があります。'
        }},
        {img:cmImg('I','nbga',18),tx:{
          en:'Top Bump Image (2) — combine two frame images using +, −, ×, or average when a single image isn\'t enough to distinguish bumps clearly.',
          ko:'Top Bump Image(2) — 이미지 한 장으로 Bump 구분이 어려울 때, 두 Frame 이미지를 +, −, ×, 평균 연산으로 조합해 사용합니다.',
          zhCN:'Top Bump Image(2)——当单张图像难以区分Bump时,可将两张Frame图像以+、−、×、平均等运算方式组合使用。',
          zhTW:'Top Bump Image(2)——當單張影像難以區分Bump時,可將兩張Frame影像以+、−、×、平均等運算方式組合使用。',
          ja:'Top Bump Image(2)——1枚の画像ではBumpの区別が難しい場合、2枚のFrame画像を+、−、×、平均の演算で組み合わせて使用します。'
        }},
        {img:cmImg('I','nbga',19),tx:{
          en:'Top Threshold — the binarization level that separates the bump from the background. Lowering it turns more of the image white. Set it so the bump outline stays smooth while keeping the apparent bump size correct.',
          ko:'Top Threshold — Bump과 배경을 흑백으로 구분하는 이진화 기준값입니다. 값을 낮추면 흰색으로 표시되는 영역이 늘어납니다. Bump 크기를 유지하면서 윤곽선이 매끄럽게 보이도록 설정합니다.',
          zhCN:'Top Threshold——将Bump与背景以黑白方式区分的二值化基准值。数值降低时显示为白色的区域会增加。设置时应在保持Bump尺寸的同时使轮廓保持平滑。',
          zhTW:'Top Threshold——將Bump與背景以黑白方式區分的二值化基準值。數值降低時顯示為白色的區域會增加。設定時應在保持Bump尺寸的同時使輪廓保持平滑。',
          ja:'Top Threshold——BumpとBackgroundを白黒で区別する二値化基準値です。値を下げると白く表示される領域が増えます。Bumpサイズを維持しつつ輪郭が滑らかに見えるよう設定します。'
        }},
        {img:cmImg('I','nbga',20),tx:{
          en:'BoxFilter & Equalization — BoxFilter applies a Gaussian-style blur to reduce noise; Equalization redistributes skewed pixel values for a more even brightness distribution.',
          ko:'BoxFilter & Equalization — BoxFilter는 Gaussian 방식의 Blur를 적용해 Noise를 줄이고, Equalization은 치우친 픽셀 값을 재분배해 밝기 분포를 고르게 만듭니다.',
          zhCN:'BoxFilter & Equalization——BoxFilter采用Gaussian方式的模糊处理以降低Noise,Equalization则重新分配偏斜的像素值,使亮度分布更均匀。',
          zhTW:'BoxFilter & Equalization——BoxFilter採用Gaussian方式的模糊處理以降低Noise,Equalization則重新分配偏斜的像素值,使亮度分佈更均勻。',
          ja:'BoxFilter & Equalization——BoxFilterはGaussian方式のぼかしを適用してNoiseを減らし、Equalizationは偏ったピクセル値を再分配して明るさの分布を均一にします。'
        }},
        {img:cmImg('I','nbga',21),tx:{
          en:'Bump Area — \'Bump Search Size\' sets the C4 area searched for bumps; a Blob is only formed for bumps found inside this area.',
          ko:'Bump Area — \'Bump Search Size\'는 Bump를 탐색할 C4 영역을 설정합니다. 이 영역 내에서만 Bump의 \'Blob\'이 형성됩니다.',
          zhCN:'Bump Area——\'Bump Search Size\'用于设置搜索Bump的C4区域,只有在此区域内才会形成Bump的\'Blob\'。',
          zhTW:'Bump Area——\'Bump Search Size\'用於設定搜尋Bump的C4區域,只有在此區域內才會形成Bump的\'Blob\'。',
          ja:'Bump Area——\'Bump Search Size\'はBumpを探索するC4領域を設定します。この領域内でのみBumpの\'Blob\'が形成されます。'
        }},
        {img:cmImg('I','nbga',22),tx:{
          en:'Each Bump Search Size — the per-bump blob size, applied as [Bump Spec Size + Each Bump Search Size]; it must not extend into a neighboring bump\'s area.',
          ko:'Each Bump Search Size — 개별 Bump를 검사할 Blob 크기이며, [Bump Spec Size + Each Bump Search Size] 값으로 적용됩니다. 주변 다른 Bump 영역을 침범하지 않아야 합니다.',
          zhCN:'Each Bump Search Size——检测单个Bump所用的Blob尺寸,以[Bump Spec Size + Each Bump Search Size]的值套用。不得侵入周围其他Bump的区域。',
          zhTW:'Each Bump Search Size——檢測單一Bump所用的Blob尺寸,以[Bump Spec Size + Each Bump Search Size]的值套用。不得侵入周圍其他Bump的區域。',
          ja:'Each Bump Search Size——個々のBumpを検査するBlobサイズで、[Bump Spec Size + Each Bump Search Size]の値が適用されます。周囲の他のBump領域を侵してはいけません。'
        }},
        {img:cmImg('I','nbga',23),tx:{
          en:'Sampling — matches the Gerber pattern to the actual bump pattern using a set number of sample bumps (Sample Number). More samples improve matching accuracy but slow down sorting, so a balanced value (typically 300–500) is used.',
          ko:'Sampling — 지정한 Bump 개수(Sample Number)만큼 표본을 사용해 Gerber 패턴과 실제 Bump 패턴을 매칭합니다. 표본 수가 많을수록 매칭 정확도는 높아지지만 Sorting 속도가 느려지므로 적절한 값(보통 300~500)을 사용합니다.',
          zhCN:'Sampling——使用指定数量的Bump样本(Sample Number)将Gerber图案与实际Bump图案进行匹配。样本数越多匹配精度越高,但Sorting速度会变慢,因此需使用适当的数值(通常300~500)。',
          zhTW:'Sampling——使用指定數量的Bump樣本(Sample Number)將Gerber圖案與實際Bump圖案進行匹配。樣本數越多匹配精度越高,但Sorting速度會變慢,因此需使用適當的數值(通常300~500)。',
          ja:'Sampling——指定したBump数(Sample Number)分のサンプルを使用してGerberパターンと実際のBumpパターンをマッチングします。サンプル数が多いほどマッチング精度は上がりますがSorting速度が遅くなるため、適切な値(通常300~500)を使用します。'
        }},
        {img:cmImg('I','nbga',24),tx:{
          en:'Empty Pocket Check (1) — if the average intensity inside the Empty Check ROI is below the Empty Check Threshold, the pocket is judged empty. Empty Check Frame selects the image used, and Use Empty Check toggles the feature.',
          ko:'Empty Pocket Check(1) — Empty Check ROI 영역의 평균 Intensity가 Empty Check Threshold보다 낮으면 빈 Pocket으로 판단합니다. Empty Check Frame은 사용할 이미지를 지정하고, Use Empty Check는 기능 사용 여부를 설정합니다.',
          zhCN:'Empty Pocket Check(1)——若Empty Check ROI区域的平均Intensity低于Empty Check Threshold,则判定为空Pocket。Empty Check Frame指定所用图像,Use Empty Check设置是否启用此功能。',
          zhTW:'Empty Pocket Check(1)——若Empty Check ROI區域的平均Intensity低於Empty Check Threshold,則判定為空Pocket。Empty Check Frame指定所用影像,Use Empty Check設定是否啟用此功能。',
          ja:'Empty Pocket Check(1)——Empty Check ROI領域の平均IntensityがEmpty Check Thresholdより低い場合、空のPocketと判定します。Empty Check Frameは使用する画像を指定し、Use Empty Checkは機能の使用有無を設定します。'
        }},
        {img:cmImg('I','nbga',25),tx:{
          en:'Empty Pocket Check (2) — example: Threshold 10 with ROI intensity 67.31 → "Not Empty" (alignment proceeds); Threshold 70 with the same intensity → "Empty" (alignment skipped). Set the threshold by comparing the real empty-pocket and product-pocket intensities.',
          ko:'Empty Pocket Check(2) — 예: Threshold 10, ROI Intensity 67.31 → "Not Empty"(정렬 진행). Threshold 70, 동일 Intensity → "Empty"(정렬 진행 안 함). 실제 빈 Pocket과 Product Pocket의 Intensity를 비교하여 Threshold를 설정합니다.',
          zhCN:'Empty Pocket Check(2)——示例:Threshold为10、ROI Intensity为67.31 → "Not Empty"(继续对位);Threshold为70、相同Intensity → "Empty"(不进行对位)。请比较实际空Pocket与产品Pocket的Intensity来设置Threshold。',
          zhTW:'Empty Pocket Check(2)——範例:Threshold為10、ROI Intensity為67.31 → "Not Empty"(繼續對位);Threshold為70、相同Intensity → "Empty"(不進行對位)。請比較實際空Pocket與產品Pocket的Intensity來設定Threshold。',
          ja:'Empty Pocket Check(2)——例:Threshold 10、ROI Intensity 67.31 → "Not Empty"(アライメント続行)。Threshold 70、同じIntensity → "Empty"(アライメント未実施)。実際の空PocketとProduct PocketのIntensityを比較してThresholdを設定します。'
        }},
        {img:cmImg('I','nbga',26),tx:{
          en:'Blob Pixel Size (1) — sets the min/max pixel size (converted and shown in µm) that qualifies as a \'Blob\'. The minimum size mainly filters out small foreign particles so they aren\'t mistaken for bumps, improving inspection speed.',
          ko:'Blob Pixel Size(1) — \'Blob\'로 인정할 최소·최대 Pixel 크기(µm 단위로 환산 표시)를 설정합니다. 최소 크기는 주로 작은 이물이 Bump로 오인되지 않도록 걸러내며, 검사 속도 향상에도 도움이 됩니다.',
          zhCN:'Blob Pixel Size(1)——设置被判定为\'Blob\'的最小·最大Pixel尺寸(以µm换算显示)。最小尺寸主要用于过滤微小异物,避免被误判为Bump,同时也有助于提升检测速度。',
          zhTW:'Blob Pixel Size(1)——設定被判定為\'Blob\'的最小·最大Pixel尺寸(以µm換算顯示)。最小尺寸主要用於過濾微小異物,避免被誤判為Bump,同時也有助於提升檢測速度。',
          ja:'Blob Pixel Size(1)——\'Blob\'と認識する最小・最大Pixelサイズ(µm換算で表示)を設定します。最小サイズは主に小さな異物がBumpと誤認識されないようフィルタリングし、検査速度の向上にも役立ちます。'
        }},
        {img:cmImg('I','nbga',27),tx:{
          en:'Blob Pixel Size (2) — an incorrectly set Blob Size can exclude even normal bumps from inspection. If unspecified, the default range is 2–2560px; bumps larger than Max Blob Size are excluded, as shown.',
          ko:'Blob Pixel Size(2) — Blob Size를 잘못 설정하면 정상 Bump도 검사에서 제외될 수 있습니다. 별도 지정이 없으면 기본 범위는 2~2560px이며, Max Blob Size보다 큰 Bump는 그림처럼 제외됩니다.',
          zhCN:'Blob Pixel Size(2)——若Blob Size设置不当,正常的Bump也可能被排除在检测之外。若未另行指定,默认范围为2~2560px;如图所示,大于Max Blob Size的Bump会被排除。',
          zhTW:'Blob Pixel Size(2)——若Blob Size設定不當,正常的Bump也可能被排除在檢測之外。若未另行指定,預設範圍為2~2560px;如圖所示,大於Max Blob Size的Bump會被排除。',
          ja:'Blob Pixel Size(2)——Blob Sizeの設定を誤ると、正常なBumpも検査から除外される恐れがあります。特に指定がない場合の既定範囲は2~2560pxで、図のようにMax Blob Sizeより大きいBumpは除外されます。'
        }},
        {img:cmImg('I','nbga',28),tx:{
          en:'Software Inspection Parameter — this section covers Illum Control, Align, 2D Barcode & OCR, 2D Inspection, 3D Inspection, and LTS Target.',
          ko:'Software Inspection Parameter — Illum Control, Align, 2D Barcode & OCR, 2D Inspection, 3D Inspection, LTS Target를 다룹니다.',
          zhCN:'Software Inspection Parameter——本节介绍Illum Control、Align、2D Barcode & OCR、2D Inspection、3D Inspection、LTS Target。',
          zhTW:'Software Inspection Parameter——本節介紹Illum Control、Align、2D Barcode & OCR、2D Inspection、3D Inspection、LTS Target。',
          ja:'Software Inspection Parameter——本節ではIllum Control、Align、2D Barcode & OCR、2D Inspection、3D Inspection、LTS Targetを扱います。'
        }},
        {img:cmImg('I','nbga',29),tx:{
          en:'2.1.3. 2D Barcode & OCR — checks the various barcodes printed on the unit: OCR (character recognition), QR Code, and 2D Matrix.',
          ko:'2.1.3. 2D Barcode & OCR — Unit에 표기된 다양한 Barcode를 확인하는 기능입니다: OCR(문자 인식), QR Code, 2D Matrix.',
          zhCN:'2.1.3. 2D Barcode & OCR——检查Unit上标示的各种Barcode的功能:OCR(字符识别)、QR Code、2D Matrix。',
          zhTW:'2.1.3. 2D Barcode & OCR——檢查Unit上標示的各種Barcode的功能:OCR(文字辨識)、QR Code、2D Matrix。',
          ja:'2.1.3. 2D Barcode & OCR——Unitに表示された各種Barcodeを確認する機能です:OCR(文字認識)、QR Code、2D Matrix。'
        }},
        {img:cmImg('I','nbga',30),tx:{
          en:'Select Image — chooses which frame to use for barcode inspection.',
          ko:'Select Image — Barcode 검사에 사용할 Frame을 선택합니다.',
          zhCN:'Select Image——选择用于Barcode检测的Frame。',
          zhTW:'Select Image——選擇用於Barcode檢測的Frame。',
          ja:'Select Image——Barcode検査に使用するFrameを選択します。'
        }},
        {img:cmImg('I','nbga',31),tx:{
          en:'Compare First Char / Compare Length — compares the barcode result against the Lot name, starting from a given character over a given length (0 = no comparison), to confirm the unit belongs to the current lot.',
          ko:'Compare First Char / Compare Length — Barcode 결과와 Lot 명을 지정한 시작 문자부터 지정한 길이만큼 비교합니다(0이면 비교 안 함). 검사 중인 Unit이 해당 Lot의 제품인지 확인하는 용도입니다.',
          zhCN:'Compare First Char / Compare Length——从指定的起始字符开始,以指定长度比较Barcode结果与Lot名称(为0则不比较),用于确认检测中的Unit是否属于该Lot的产品。',
          zhTW:'Compare First Char / Compare Length——從指定的起始字元開始,以指定長度比較Barcode結果與Lot名稱(為0則不比較),用於確認檢測中的Unit是否屬於該Lot的產品。',
          ja:'Compare First Char / Compare Length——指定した開始文字から指定した長さ分、Barcode結果とLot名を比較します(0の場合は比較なし)。検査中のUnitがそのLotの製品かを確認する用途です。'
        }},
        {img:cmImg('I','nbga',32),tx:{
          en:'2D Matrix (internal engine) — set the Barcode ROI (the box enclosing the 2D matrix) and Search ROI (search area) in the view window. If the Barcode ROI is larger than the Search ROI, inspection is skipped.',
          ko:'2D Matrix(내장 엔진) — View 창에서 Barcode ROI(2D Matrix를 둘러싸는 영역)와 Search ROI(탐색 영역)의 위치·크기를 설정합니다. Barcode ROI가 Search ROI보다 크면 검사가 수행되지 않습니다.',
          zhCN:'2D Matrix(内建引擎)——在View窗口中设置Barcode ROI(包围2D Matrix的区域)与Search ROI(搜索区域)的位置·大小。若Barcode ROI大于Search ROI,则不执行检测。',
          zhTW:'2D Matrix(內建引擎)——在View視窗中設定Barcode ROI(包圍2D Matrix的區域)與Search ROI(搜尋區域)的位置·大小。若Barcode ROI大於Search ROI,則不執行檢測。',
          ja:'2D Matrix(内蔵エンジン)——View画面でBarcode ROI(2D Matrixを囲む領域)とSearch ROI(探索領域)の位置・サイズを設定します。Barcode ROIがSearch ROIより大きい場合、検査は実行されません。'
        }},
        {img:cmImg('I','nbga',33),tx:{
          en:'Under normal settings, clicking the Inspection button outputs the barcode read result.',
          ko:'정상 설정 상태에서 Inspection 버튼을 클릭하면 Barcode 판독 결과가 출력됩니다.',
          zhCN:'在正常设置状态下,点击Inspection按钮即可输出Barcode读取结果。',
          zhTW:'在正常設定狀態下,點擊Inspection按鈕即可輸出Barcode讀取結果。',
          ja:'正常な設定状態でInspectionボタンをクリックすると、Barcode判読結果が出力されます。'
        }},
        {img:cmImg('I','nbga',34),tx:{
          en:'Angle — corrects for barcode rotation; enter the clockwise angle needed to compensate.',
          ko:'Angle — Barcode 회전을 보정하는 값입니다. 시계 방향으로 회전시킬 각도를 입력합니다.',
          zhCN:'Angle——用于校正Barcode旋转角度的参数,输入需要顺时针旋转的角度。',
          zhTW:'Angle——用於校正Barcode旋轉角度的參數,輸入需要順時針旋轉的角度。',
          ja:'Angle——Barcodeの回転を補正するパラメータです。時計回りに回転させる角度を入力します。'
        }},
        {img:cmImg('I','nbga',35),tx:{
          en:'Easy Matrix — a higher-performance 2D matrix reader using the Open Vision Library. It doesn\'t use Barcode ROI, so the Search ROI must fully contain the barcode with some free margin (too tight a fit can prevent recognition).',
          ko:'Easy Matrix — Open Vision Library를 이용한 고성능 2D Matrix 판독 기능입니다. Barcode ROI를 사용하지 않으므로, Search ROI가 Barcode 영역을 여유 있게 포함하도록 설정해야 합니다(너무 딱 맞으면 인식이 안 될 수 있음).',
          zhCN:'Easy Matrix——使用Open Vision Library的高性能2D Matrix读取功能。由于不使用Barcode ROI,需将Search ROI设置为充分包含Barcode区域(设置得过于贴合可能导致无法识别)。',
          zhTW:'Easy Matrix——使用Open Vision Library的高效能2D Matrix讀取功能。由於不使用Barcode ROI,需將Search ROI設定為充分包含Barcode區域(設定得過於貼合可能導致無法辨識)。',
          ja:'Easy Matrix——Open Vision Libraryを利用した高性能な2D Matrix読み取り機能です。Barcode ROIを使用しないため、Search ROIはBarcode領域に余裕を持たせて含める必要があります(ぴったりすぎると認識できないことがあります)。'
        }},
        {img:cmImg('I','nbga',36),tx:{
          en:'Empty Threshold (Easy Matrix) — if the average brightness in the Search ROI is below this threshold, the pocket is judged empty and the barcode check is skipped. Set it by comparing real empty-pocket and product readings.',
          ko:'Empty Threshold(Easy Matrix) — Search ROI의 평균 밝기가 이 값보다 낮으면 빈 Pocket으로 판단해 Barcode 검사를 하지 않습니다. 실제 빈 Pocket과 Product의 밝기를 비교하여 설정합니다.',
          zhCN:'Empty Threshold(Easy Matrix)——若Search ROI的平均亮度低于此值,则判定为空Pocket,不进行Barcode检测。请比较实际空Pocket与产品的亮度来设置。',
          zhTW:'Empty Threshold(Easy Matrix)——若Search ROI的平均亮度低於此值,則判定為空Pocket,不進行Barcode檢測。請比較實際空Pocket與產品的亮度來設定。',
          ja:'Empty Threshold(Easy Matrix)——Search ROIの平均輝度がこの値より低い場合、空のPocketと判定しBarcode検査を行いません。実際の空PocketとProductの輝度を比較して設定します。'
        }},
        {img:cmImg('I','nbga',37),tx:{
          en:'Timeout (Easy Matrix) — caps the inspection time so the program doesn\'t wait indefinitely if a barcode read is delayed by an error.',
          ko:'Timeout(Easy Matrix) — 오류로 판독이 지연될 경우 프로그램이 무한 대기하지 않도록 검사 시간을 제한하는 값입니다.',
          zhCN:'Timeout(Easy Matrix)——限制检测时间的参数,防止因错误导致判读延迟时程序无限等待。',
          zhTW:'Timeout(Easy Matrix)——限制檢測時間的參數,防止因錯誤導致判讀延遲時程式無限等待。',
          ja:'Timeout(Easy Matrix)——エラーで判読が遅延した際にプログラムが無限に待機しないよう、検査時間を制限するパラメータです。'
        }},
        {img:cmImg('I','nbga',38),tx:{
          en:'Under normal settings (Easy Matrix), clicking the Inspection button outputs the barcode read result.',
          ko:'정상 설정 상태(Easy Matrix)에서 Inspection 버튼을 클릭하면 Barcode 판독 결과가 출력됩니다.',
          zhCN:'在正常设置状态下(Easy Matrix),点击Inspection按钮即可输出Barcode读取结果。',
          zhTW:'在正常設定狀態下(Easy Matrix),點擊Inspection按鈕即可輸出Barcode讀取結果。',
          ja:'正常な設定状態(Easy Matrix)でInspectionボタンをクリックすると、Barcode判読結果が出力されます。'
        }},
        {img:cmImg('I','nbga',39),tx:{
          en:'Easy Character — 2D-matrix-style character reading via the Open Vision Library. It also doesn\'t use Barcode ROI, so the Search ROI must be sized to allow for unit movement within the pocket without the characters drifting out of range.',
          ko:'Easy Character — Open Vision Library를 이용한 문자 판독 기능입니다. 역시 Barcode ROI를 사용하지 않으므로, Pocket 내에서 Unit이 조금 움직여도 문자가 범위를 벗어나지 않도록 Search ROI를 적절히 설정해야 합니다.',
          zhCN:'Easy Character——使用Open Vision Library的字符判读功能。同样不使用Barcode ROI,因此需将Search ROI设置得足够大,即使Unit在Pocket内略有移动,字符也不会超出范围。',
          zhTW:'Easy Character——使用Open Vision Library的文字判讀功能。同樣不使用Barcode ROI,因此需將Search ROI設定得足夠大,即使Unit在Pocket內略有移動,文字也不會超出範圍。',
          ja:'Easy Character——Open Vision Libraryを利用した文字判読機能です。こちらもBarcode ROIを使用しないため、Pocket内でUnitが多少動いても文字が範囲外に出ないようSearch ROIを適切に設定する必要があります。'
        }},
        {img:cmImg('I','nbga',40),tx:{
          en:'OCR requires a Font File describing each character\'s shape. Create or edit one in Open eVision Studio — click Load for an existing Font File, or New to start one.',
          ko:'OCR을 위해서는 각 문자 형태가 저장된 Font File이 필요합니다. Open eVision Studio에서 생성·수정할 수 있으며, 기존 Font File이 있으면 Load, 없으면 New로 새로 만듭니다.',
          zhCN:'OCR需要保存各字符形态的Font File。可在Open eVision Studio中创建或修改——已有Font File时点击Load,没有则点击New新建。',
          zhTW:'OCR需要儲存各文字形態的Font File。可在Open eVision Studio中建立或修改——已有Font File時點擊Load,沒有則點擊New新建。',
          ja:'OCRには各文字の形状を保存したFont Fileが必要です。Open eVision Studioで作成・編集でき、既存のFont FileがあればLoad、なければNewで新規作成します。'
        }},
        {img:cmImg('I','nbga',41),tx:{
          en:'After opening or creating the Font File, load a training image: click New Image in the Source Image tab, then right-click and select Load to bring in the image used for font learning.',
          ko:'Font File을 열거나 만든 뒤, 학습용 이미지를 불러옵니다: Source Image 탭에서 New Image를 클릭하고, 우클릭 후 Load로 폰트 학습에 사용할 이미지를 불러옵니다.',
          zhCN:'打开或建立Font File后,载入学习用图像:在Source Image标签中点击New Image,然后右键点击选择Load,载入用于字体学习的图像。',
          zhTW:'開啟或建立Font File後,載入學習用影像:在Source Image標籤中點擊New Image,然後右鍵點擊選擇Load,載入用於字型學習的影像。',
          ja:'Font Fileを開くか作成した後、学習用画像を読み込みます:Source ImageタブでNew Imageをクリックし、右クリックしてLoadを選択、フォント学習に使用する画像を読み込みます。'
        }},
        {img:cmImg('I','nbga',42),tx:{
          en:'After loading the image, adjust the Threshold so characters stand out from the background — use an image with representative brightness. Chars Color sets whether characters are White-on-Black or Black-on-White.',
          ko:'이미지를 불러온 뒤, 문자가 배경과 잘 구분되도록 Threshold를 조정합니다(대표 밝기의 이미지 사용). Chars Color는 문자가 White-on-Black인지 Black-on-White인지 지정합니다.',
          zhCN:'载入图像后,调整Threshold使字符与背景清楚区分(使用代表性亮度的图像)。Chars Color用于指定字符是White-on-Black还是Black-on-White。',
          zhTW:'載入影像後,調整Threshold使文字與背景清楚區分(使用代表性亮度的影像)。Chars Color用於指定文字是White-on-Black還是Black-on-White。',
          ja:'画像を読み込んだ後、文字が背景とはっきり区別できるようThresholdを調整します(代表的な明るさの画像を使用)。Chars Colorは文字がWhite-on-BlackかBlack-on-Whiteかを指定します。'
        }},
        {img:cmImg('I','nbga',43),tx:{
          en:'(Continued) Select Chars Color to match whether the characters are light-on-dark or dark-on-light.',
          ko:'(계속) 문자가 어두운 배경 위 밝은 문자인지, 밝은 배경 위 어두운 문자인지에 맞춰 Chars Color를 선택합니다.',
          zhCN:'(续)根据字符是暗背景亮字或亮背景暗字,选择相应的Chars Color。',
          zhTW:'(續)根據文字是暗背景亮字或亮背景暗字,選擇相應的Chars Color。',
          ja:'(続き)文字が暗い背景に明るい文字か、明るい背景に暗い文字かに合わせてChars Colorを選択します。'
        }},
        {img:cmImg('I','nbga',44),tx:{
          en:'After setting the Threshold, set the character\'s Min/Max Height & Width (typically calibrated on the thinnest character like \'I\'/\'1\' and the thickest like \'D\'/\'8\') and the Noise Area (filters out uneven-pixel noise so it isn\'t read as a character; typically 50–100, or 130+ for noisy images).',
          ko:'Threshold 설정 후, 문자의 Min/Max Height & Width(보통 가장 얇은 문자인 \'I\'/\'1\'과 가장 두꺼운 문자인 \'D\'/\'8\' 기준으로 설정)와 Noise Area(픽셀 분포가 불균일한 이물을 문자로 오인하지 않도록 필터링, 보통 50~100, 화질이 나쁘면 130 이상)를 설정합니다.',
          zhCN:'设置Threshold后,设置字符的Min/Max Height & Width(通常以最细字符\'I\'/\'1\'与最粗字符\'D\'/\'8\'为基准设置)以及Noise Area(过滤像素分布不均的杂讯,避免被误判为字符,通常为50~100,图像质量较差时使用130以上)。',
          zhTW:'設定Threshold後,設定文字的Min/Max Height & Width(通常以最細文字\'I\'/\'1\'與最粗文字\'D\'/\'8\'為基準設定)以及Noise Area(過濾像素分佈不均的雜訊,避免被誤判為文字,通常為50~100,影像品質較差時使用130以上)。',
          ja:'Threshold設定後、文字のMin/Max Height & Width(通常最も細い文字\'I\'/\'1\'と最も太い文字\'D\'/\'8\'を基準に設定)およびNoise Area(ピクセル分布が不均一なノイズが文字と誤認識されないようフィルタリング、通常50~100、画質が悪い場合は130以上)を設定します。'
        }},
        {img:cmImg('I','nbga',45),tx:{
          en:'Character learning — on the Learn tab, classify each character (EOcrClass Light for digits, Upper/Lower for letters), enter its correct value, then click Execute on the Recognition tab to check the result.',
          ko:'문자 학습 — Learn 탭에서 각 문자를 분류하고(숫자는 EOcrClass Light, 대문자는 Upper, 소문자는 Lower), 정답 값을 입력한 뒤 Recognition 탭의 Execute를 클릭해 인식 결과를 확인합니다.',
          zhCN:'字符学习——在Learn标签中对各字符进行分类(数字用EOcrClass Light,大写字母用Upper,小写字母用Lower),输入正确值后,点击Recognition标签的Execute确认识别结果。',
          zhTW:'文字學習——在Learn標籤中對各文字進行分類(數字用EOcrClass Light,大寫字母用Upper,小寫字母用Lower),輸入正確值後,點擊Recognition標籤的Execute確認辨識結果。',
          ja:'文字学習——Learnタブで各文字を分類し(数字はEOcrClass Light、大文字はUpper、小文字はLower)、正解値を入力した後、RecognitionタブのExecuteをクリックして認識結果を確認します。'
        }},
        {img:cmImg('I','nbga',46),tx:{
          en:'Save the learned font using \'Save As\' in the Font File tab (overwrite the existing file or save under a new name) — repeat the learning process for every character 0–9 and A–Z.',
          ko:'Font File 탭의 \'Save As\'로 학습된 폰트를 저장합니다(기존 파일에 덮어쓰거나 새 이름으로 저장). 0~9, A~Z 모든 문자에 대해 위 과정을 반복합니다.',
          zhCN:'在Font File标签中使用\'Save As\'保存已学习的字体(可覆盖既有文件或另存新名称)。需对0~9、A~Z所有字符重复上述学习过程。',
          zhTW:'在Font File標籤中使用\'Save As\'儲存已學習的字型(可覆蓋既有檔案或另存新名稱)。需對0~9、A~Z所有文字重複上述學習過程。',
          ja:'Font Fileタブの\'Save As\'で学習したフォントを保存します(既存ファイルに上書き、または新しい名前で保存)。0~9、A~Zすべての文字についてこの学習過程を繰り返します。'
        }},
        {img:cmImg('I','nbga',47),tx:{
          en:'Font Path selects the Font File location created in Open eVision Studio. Rotating Angle rotates the inspection image counter-clockwise to match a rotated barcode or character.',
          ko:'Font Path는 Open eVision Studio에서 만든 Font File의 위치를 지정합니다. Rotating Angle은 검사 이미지가 회전되어 있을 때 반시계 방향으로 회전시켜 맞추는 기능입니다.',
          zhCN:'Font Path用于指定在Open eVision Studio中建立的Font File位置。Rotating Angle用于在检测图像发生旋转时,以逆时针方向旋转以进行对位。',
          zhTW:'Font Path用於指定在Open eVision Studio中建立的Font File位置。Rotating Angle用於在檢測影像發生旋轉時,以逆時針方向旋轉以進行對位。',
          ja:'Font PathはOpen eVision Studioで作成したFont Fileの場所を指定します。Rotating Angleは検査画像が回転している場合に反時計回りに回転させて合わせる機能です。'
        }},
        {img:cmImg('I','nbga',48),tx:{
          en:'Retry — if no value is detected within the threshold, the Retry Threshold Range shifts by the Retry Threshold Step to re-attempt inspection. If the step is too small relative to the range, retries increase and a timeout may occur.',
          ko:'Retry — 지정된 Threshold 내에서 값이 검출되지 않으면, Retry Threshold Step만큼 Retry Threshold Range를 이동시켜 재검사를 시도합니다. Step이 Range에 비해 너무 작으면 재검사 횟수가 늘어나 Timeout이 발생할 수 있습니다.',
          zhCN:'Retry——若在指定Threshold内未检测到数值,则以Retry Threshold Step移动Retry Threshold Range重新尝试检测。若Step相对Range过小,重试次数增多,可能导致Timeout。',
          zhTW:'Retry——若在指定Threshold內未檢測到數值,則以Retry Threshold Step移動Retry Threshold Range重新嘗試檢測。若Step相對Range過小,重試次數增多,可能導致Timeout。',
          ja:'Retry——指定したThreshold内で値が検出されない場合、Retry Threshold StepぶんRetry Threshold Rangeを移動して再検査を試みます。StepがRangeに対して小さすぎると再検査回数が増え、Timeoutが発生する恐れがあります。'
        }},
        {img:cmImg('I','nbga',49),tx:{
          en:'Software Inspection Parameter — this section covers Illum Control, Align, 2D Barcode & OCR, 2D Inspection, 3D Inspection, and LTS Target.',
          ko:'Software Inspection Parameter — Illum Control, Align, 2D Barcode & OCR, 2D Inspection, 3D Inspection, LTS Target를 다룹니다.',
          zhCN:'Software Inspection Parameter——本节介绍Illum Control、Align、2D Barcode & OCR、2D Inspection、3D Inspection、LTS Target。',
          zhTW:'Software Inspection Parameter——本節介紹Illum Control、Align、2D Barcode & OCR、2D Inspection、3D Inspection、LTS Target。',
          ja:'Software Inspection Parameter——本節ではIllum Control、Align、2D Barcode & OCR、2D Inspection、3D Inspection、LTS Targetを扱います。'
        }},
        {img:cmImg('I','nbga',50),tx:{
          en:'2D Inspection — Missing (1): checks whether a bump exists within the search area. If the detected pixel count is below spec (e.g. fewer than 20px), the bump is judged Missing.',
          ko:'2D Inspection — Missing(1): 탐색 영역 내에 Bump가 존재하는지 확인합니다. 검출된 Pixel 수가 기준치(예: 20px 미만)에 미달하면 \'Missing\'으로 판정합니다.',
          zhCN:'2D Inspection——Missing(1):检查搜索区域内是否存在Bump。若检测到的Pixel数低于基准值(如低于20px),则判定为\'Missing\'。',
          zhTW:'2D Inspection——Missing(1):檢查搜尋區域內是否存在Bump。若檢測到的Pixel數低於基準值(如低於20px),則判定為\'Missing\'。',
          ja:'2D Inspection——Missing(1):探索領域内にBumpが存在するか確認します。検出されたPixel数が基準値(例:20px未満)に満たない場合、\'Missing\'と判定します。'
        }},
        {img:cmImg('I','nbga',51),tx:{
          en:'Missing (2) — Reverse Threshold inverts the threshold when the bump appears dark under the chosen lighting. Search Size sets the pixel range around the aligned bump center used for detection — a below-spec result in that area is judged Missing.',
          ko:'Missing(2) — Reverse Threshold는 조명 설정상 Bump가 어둡게 나타날 때 임계값을 반전시켜 사용합니다. Search Size는 Alignment로 결정된 Bump 중심 기준 탐색 Pixel 범위이며, 이 영역의 검출값이 기준 미달이면 \'Missing\'으로 처리됩니다.',
          zhCN:'Missing(2)——Reverse Threshold用于当Bump在所选照明下显示为暗色时,反转阈值使用。Search Size是以Alignment确定的Bump中心为基准的检测像素范围,若该区域检测值低于基准则判定为\'Missing\'。',
          zhTW:'Missing(2)——Reverse Threshold用於當Bump在所選照明下顯示為暗色時,反轉閾值使用。Search Size是以Alignment確定的Bump中心為基準的檢測像素範圍,若該區域檢測值低於基準則判定為\'Missing\'。',
          ja:'Missing(2)——Reverse Thresholdは照明設定によりBumpが暗く映る場合に閾値を反転させて使用します。Search SizeはAlignmentで決定されたBump中心を基準とする検出Pixel範囲で、この領域の検出値が基準未満であれば\'Missing\'と判定されます。'
        }},
        {img:cmImg('I','nbga',52),tx:{
          en:'Diameter inspection measures bump diameter using three parameter groups — Edge Detect, Point Filter, and Result Correction — based on obliquely-lit images.',
          ko:'Diameter 검사는 Oblique 조명 이미지를 기반으로 Edge Detect·Point Filter·Result Correction 세 가지 Parameter로 Bump 직경을 측정합니다.',
          zhCN:'Diameter检测基于Oblique照明图像,以Edge Detect、Point Filter、Result Correction三种参数测量Bump直径。',
          zhTW:'Diameter檢測基於Oblique照明影像,以Edge Detect、Point Filter、Result Correction三種參數測量Bump直徑。',
          ja:'Diameter検査はOblique照明画像を基に、Edge Detect・Point Filter・Result Correctionの3種類のParameterでBump直径を測定します。'
        }},
        {img:cmImg('I','nbga',53),tx:{
          en:'Edge Outer Length sets how far out from the bump center the Diameter Edge search extends (In-to-Out or Out-to-In). It must not reach into a neighboring bump, or the wrong edge may be detected.',
          ko:'Edge Outer Length는 Bump 중심을 기준으로 Diameter Edge를 탐색할 거리를 설정합니다(In-to-Out 또는 Out-to-In 방향). 주변 Bump 영역을 침범하면 다른 Bump의 Edge를 잘못 검출할 위험이 있습니다.',
          zhCN:'Edge Outer Length设置以Bump中心为基准搜索Diameter Edge的距离(In-to-Out或Out-to-In方向)。若侵入周围Bump区域,可能误检测到其他Bump的Edge。',
          zhTW:'Edge Outer Length設定以Bump中心為基準搜尋Diameter Edge的距離(In-to-Out或Out-to-In方向)。若侵入周圍Bump區域,可能誤檢測到其他Bump的Edge。',
          ja:'Edge Outer LengthはBump中心を基準にDiameter Edgeを探索する距離を設定します(In-to-OutまたはOut-to-In方向)。周囲のBump領域を侵すと、他のBumpのEdgeを誤検出する恐れがあります。'
        }},
        {img:cmImg('I','nbga',54),tx:{
          en:'Edge Count & Direction — the number of points sampled to find the bump edge (commonly 24, i.e. 360°/15°, for a good speed/accuracy balance) and the scan direction (Out-to-In or In-to-Out).',
          ko:'Edge Count & Direction — Bump Edge를 찾기 위해 샘플링할 점의 개수(속도·정확도를 고려해 보통 360°를 15°씩 나눈 24개 사용)와 Scan 방향(Out-to-In 또는 In-to-Out)을 설정합니다.',
          zhCN:'Edge Count & Direction——设置搜索Bump Edge所需的采样点数量(考虑速度与精度,通常使用360°除以15°得到的24个点)以及Scan方向(Out-to-In或In-to-Out)。',
          zhTW:'Edge Count & Direction——設定搜尋Bump Edge所需的取樣點數量(考量速度與精度,通常使用360°除以15°得到的24個點)以及Scan方向(Out-to-In或In-to-Out)。',
          ja:'Edge Count & Direction——Bump Edgeを探索するためのサンプリング点数(速度と精度を考慮し、通常は360°を15°ずつに分けた24点を使用)とScan方向(Out-to-InまたはIn-to-Out)を設定します。'
        }},
        {img:cmImg('I','nbga',55),tx:{
          en:'Intonation — Rising selects the edge at the steepest brightness increase found in an Out-to-In scan; Falling selects it at the steepest decrease found in an In-to-Out scan.',
          ko:'Intonation — Rising는 Out-to-In Scan에서 밝기 변화(미분값)가 가장 크게 증가하는 지점을, Falling은 In-to-Out Scan에서 가장 크게 감소하는 지점을 Edge로 선택합니다.',
          zhCN:'Intonation——Rising在Out-to-In Scan中选取亮度变化(微分值)增幅最大的点作为Edge,Falling则在In-to-Out Scan中选取减幅最大的点。',
          zhTW:'Intonation——Rising在Out-to-In Scan中選取亮度變化(微分值)增幅最大的點作為Edge,Falling則在In-to-Out Scan中選取減幅最大的點。',
          ja:'Intonation——RisingはOut-to-In Scanで輝度変化(微分値)が最も大きく増加する点を、FallingはIn-to-Out Scanで最も大きく減少する点をEdgeとして選択します。'
        }},
        {img:cmImg('I','nbga',56),tx:{
          en:'Threshold (Diameter Edge Detect) — the minimum brightness-change gradient counted as an edge. A low value (e.g. 4) detects more edge points; a high value (e.g. 42) detects fewer. Set it above the noise-level gradient found in the SR area.',
          ko:'Threshold(Diameter Edge Detect) — Edge로 인정할 최소 밝기 변화 기울기입니다. 값이 낮으면(예: 4) 더 많은 Edge Point가 검출되고, 값이 높으면(예: 42) 더 적게 검출됩니다. SR 영역의 Noise 수준 기울기보다 크게 설정합니다.',
          zhCN:'Threshold(Diameter Edge Detect)——判定为Edge所需的最小亮度变化梯度。数值较低时(如4)检测到的Edge Point较多,数值较高时(如42)检测到的较少。应设置为高于SR区域Noise水平的梯度值。',
          zhTW:'Threshold(Diameter Edge Detect)——判定為Edge所需的最小亮度變化梯度。數值較低時(如4)檢測到的Edge Point較多,數值較高時(如42)檢測到的較少。應設定為高於SR區域Noise水準的梯度值。',
          ja:'Threshold(Diameter Edge Detect)——Edgeと認識する最小の輝度変化勾配です。値が低いと(例:4)検出されるEdge Pointが多くなり、値が高いと(例:42)少なくなります。SR領域のNoiseレベルの勾配より大きく設定します。'
        }},
        {img:cmImg('I','nbga',57),tx:{
          en:'Distance Noise Filter — sorts the diameter\'s edge points by length from the center, then discards the lowest and highest length outliers, keeping only the remaining points for the calculation.',
          ko:'Distance Noise Filter — Diameter의 Edge Point를 중심으로부터의 길이 순으로 정렬한 뒤, 가장 짧거나 가장 긴 이상치를 제거하고 남은 Point만 계산에 사용합니다.',
          zhCN:'Distance Noise Filter——将Diameter的Edge Point按距中心的长度排序,去除长度最短与最长的离群点,仅使用剩余的点进行计算。',
          zhTW:'Distance Noise Filter——將Diameter的Edge Point按距中心的長度排序,去除長度最短與最長的離群點,僅使用剩餘的點進行計算。',
          ja:'Distance Noise Filter——Diameterの Edge Pointを中心からの長さ順に並べ替え、最も短い・長い外れ値を除去し、残ったPointのみを計算に使用します。'
        }},
        {img:cmImg('I','nbga',58),tx:{
          en:'Stdev Max — filters out edge points whose "edge-to-center" length falls outside ± Stdev of the mean, so outlier points aren\'t used in the diameter/ellipse fit.',
          ko:'Stdev Max — Edge Point의 "Edge→중심" 길이가 평균의 ±Stdev 범위를 벗어나면 필터링합니다. 이상치 Point가 Diameter·Ellipse 계산에 포함되지 않도록 합니다.',
          zhCN:'Stdev Max——若Edge Point的"Edge→中心"长度超出平均值的±Stdev范围,则予以过滤,避免离群点被计入Diameter、Ellipse的计算。',
          zhTW:'Stdev Max——若Edge Point的「Edge→中心」長度超出平均值的±Stdev範圍,則予以過濾,避免離群點被計入Diameter、Ellipse的計算。',
          ja:'Stdev Max——Edge Pointの「Edge→中心」の長さが平均の±Stdev範囲を外れる場合はフィルタリングし、外れ値がDiameter・Ellipseの計算に含まれないようにします。'
        }},
        {img:cmImg('I','nbga',59),tx:{
          en:'First & Second Setting — prevents wrong results when abnormally small or large bumps appear. Coaxial Illumination alone inspects Small Bumps correctly but can undersize Large Bumps (risk of missing them); adding Sub-Coaxial Illumination inspects Large Bumps correctly but can oversize Small Bumps (risk of missing them) — so both are checked together.',
          ko:'First & Second Setting — 비정상적으로 작거나 큰 Bump가 발생했을 때 오판정을 막습니다. Coaxial Illumination만 쓰면 Small Bump는 정상 검사되지만 Large Bump는 실제보다 작게 측정될 수 있고(미검출 위험), Sub-Coaxial Illumination을 추가하면 Large Bump는 정상 검사되지만 Small Bump가 실제보다 크게 측정될 수 있어(미검출 위험) 두 조건을 함께 확인합니다.',
          zhCN:'First & Second Setting——防止出现异常小或异常大的Bump时产生误判。仅使用Coaxial Illumination时Small Bump检测正常,但Large Bump可能测得比实际小(存在漏检风险);加入Sub-Coaxial Illumination后Large Bump检测正常,但Small Bump可能测得比实际大(存在漏检风险),因此需同时确认两种条件。',
          zhTW:'First & Second Setting——防止出現異常小或異常大的Bump時產生誤判。僅使用Coaxial Illumination時Small Bump檢測正常,但Large Bump可能測得比實際小(存在漏檢風險);加入Sub-Coaxial Illumination後Large Bump檢測正常,但Small Bump可能測得比實際大(存在漏檢風險),因此需同時確認兩種條件。',
          ja:'First & Second Setting——異常に小さい、または大きいBumpが発生した際の誤判定を防ぎます。Coaxial Illuminationのみだと Small Bumpは正常に検査されますが、Large Bumpは実際より小さく測定される恐れ(未検出リスク)があり、Sub-Coaxial Illuminationを加えるとLarge Bumpは正常ですがSmall Bumpが実際より大きく測定される恐れ(未検出リスク)があるため、両方を併用して確認します。'
        }},
        {img:cmImg('I','nbga',60),tx:{
          en:'Applying First/Second to two different images (Oblique only vs. Oblique + Coaxial) gives different diameter results — the diameter reads larger when coaxial light is added.',
          ko:'First/Second를 서로 다른 두 이미지(Oblique 단독 vs. Oblique+Coaxial)에 적용하면 Diameter 결과가 달라집니다 — Coaxial 조명을 추가하면 Diameter가 더 크게 측정됩니다.',
          zhCN:'将First/Second应用于两种不同图像(仅Oblique vs. Oblique+Coaxial)时,Diameter结果会不同——加入Coaxial照明后Diameter测得更大。',
          zhTW:'將First/Second套用於兩種不同影像(僅Oblique vs. Oblique+Coaxial)時,Diameter結果會不同——加入Coaxial照明後Diameter測得更大。',
          ja:'First/Secondを2種類の異なる画像(Obliqueのみ vs. Oblique+Coaxial)に適用すると、Diameter結果が異なります——Coaxial照明を加えるとDiameterはより大きく測定されます。'
        }},
        {img:cmImg('I','nbga',61),tx:{
          en:'Example — for the same bump, the First Parameter (Coaxial only) gives 31.124µm while the Second Parameter (Coaxial + Sub-Coaxial) gives 60.452µm.',
          ko:'예시 — 동일한 Bump에서 First Parameter(Coaxial 단독)는 31.124µm, Second Parameter(Coaxial+Sub-Coaxial)는 60.452µm로 측정됩니다.',
          zhCN:'示例——对同一个Bump,First Parameter(仅Coaxial)测得31.124µm,Second Parameter(Coaxial+Sub-Coaxial)测得60.452µm。',
          zhTW:'範例——對同一個Bump,First Parameter(僅Coaxial)測得31.124µm,Second Parameter(Coaxial+Sub-Coaxial)測得60.452µm。',
          ja:'例——同一のBumpでFirst Parameter(Coaxialのみ)は31.124µm、Second Parameter(Coaxial+Sub-Coaxial)は60.452µmと測定されます。'
        }},
        {img:cmImg('I','nbga',62),tx:{
          en:'To combine the First/Second results, the First Parameter\'s values are sorted by size and their Median Value is used as the reference for the No Check Range. (A median, not an average, is used so a few bad readings don\'t skew the reference.)',
          ko:'First/Second 결과를 조합하기 위해, First Parameter 결과값을 크기순으로 정렬하고 그 Median Value를 No Check Range의 기준으로 사용합니다. (평균이 아닌 중앙값을 쓰는 이유는 이상값이 섞여도 기준이 왜곡되지 않도록 하기 위함)',
          zhCN:'为整合First/Second结果,将First Parameter的结果值按大小排序,并以其Median Value作为No Check Range的基准。(不使用平均值而使用中位数,是为了避免异常值使基准产生偏差)',
          zhTW:'為整合First/Second結果,將First Parameter的結果值按大小排序,並以其Median Value作為No Check Range的基準。(不使用平均值而使用中位數,是為了避免異常值使基準產生偏差)',
          ja:'First/Secondの結果を組み合わせるため、First Parameterの結果値をサイズ順に並べ、そのMedian ValueをNo Check Rangeの基準として使用します。(平均ではなく中央値を使うのは、異常値が混ざっても基準が歪まないようにするためです)'
        }},
        {img:cmImg('I','nbga',63),tx:{
          en:'Final-result selection logic — if only one of First/Second falls inside the No Check Range, the one outside it is used; if both fall inside, the Second value is used; if both fall outside, whichever is farthest from the Median Value is used.',
          ko:'최종 결과 선택 로직 — First/Second 중 하나만 No Check Range 안에 있으면 범위 밖의 값을 사용, 둘 다 범위 안이면 Second 값을 사용, 둘 다 범위 밖이면 Median Value에서 더 먼 값을 최종 결과로 사용합니다.',
          zhCN:'最终结果选择逻辑——若First/Second中只有一个落在No Check Range内,则使用范围外的值;若两者都在范围内,则使用Second值;若两者都在范围外,则使用离Median Value较远的值作为最终结果。',
          zhTW:'最終結果選擇邏輯——若First/Second中只有一個落在No Check Range內,則使用範圍外的值;若兩者都在範圍內,則使用Second值;若兩者都在範圍外,則使用離Median Value較遠的值作為最終結果。',
          ja:'最終結果選択ロジック——First/Secondのうち一方だけがNo Check Range内であれば範囲外の値を使用し、両方とも範囲内であればSecondの値を使用、両方とも範囲外であればMedian Valueからより遠い値を最終結果として使用します。'
        }},
        {img:cmImg('I','nbga',64),tx:{
          en:'Center Distance — checks the gap between the inspection center (e.g. Align Center) and the ellipse center found by edge detection. If it exceeds the Center Distance value (usually half the Diameter Spec), the Diameter result is treated as unreliable and set to 0.',
          ko:'Center Distance — 검사 기준 Center Point(예: Align Center)와 Edge Detection으로 찾은 Ellipse Center 사이의 거리를 확인합니다. Center Distance 값(보통 Diameter Spec의 절반)을 초과하면 Diameter 결과를 신뢰할 수 없다고 보고 0으로 처리합니다.',
          zhCN:'Center Distance——检查检测基准Center Point(如Align Center)与Edge Detection所得Ellipse Center之间的距离。若超过Center Distance值(通常为Diameter Spec的一半),则判定Diameter结果不可靠并处理为0。',
          zhTW:'Center Distance——檢查檢測基準Center Point(如Align Center)與Edge Detection所得Ellipse Center之間的距離。若超過Center Distance值(通常為Diameter Spec的一半),則判定Diameter結果不可靠並處理為0。',
          ja:'Center Distance——検査基準のCenter Point(例:Align Center)とEdge Detectionで求めたEllipse Centerとの距離を確認します。Center Distance値(通常Diameter Specの半分)を超えるとDiameter結果は信頼できないと判断し0として処理します。'
        }},
        {img:cmImg('I','nbga',65),tx:{
          en:'Bridge — detects two or more bumps fused together. Select Image picks the frame; set Threshold so the bump shape stays visible while showing bridge points in darker areas. The spec is typically the Bump Diameter Spec + 20µm (Use Max).',
          ko:'Bridge — 두 개 이상의 Bump가 서로 붙어있는 상태를 검출합니다. Select Image로 사용할 Frame을 지정하고, Bump 형상은 유지하면서 어두운 영역의 연결 지점이 보이도록 Threshold를 설정합니다. Spec은 보통 Bump Diameter Spec + 20µm(Use Max)를 사용합니다.',
          zhCN:'Bridge——检测两个以上Bump相连的情况。以Select Image指定所用Frame,设置Threshold使Bump形状保持可见的同时显示较暗区域的连接点。规格通常使用Bump Diameter Spec + 20µm(Use Max)。',
          zhTW:'Bridge——檢測兩個以上Bump相連的情況。以Select Image指定所用Frame,設定Threshold使Bump形狀保持可見的同時顯示較暗區域的連接點。規格通常使用Bump Diameter Spec + 20µm(Use Max)。',
          ja:'Bridge——2つ以上のBumpが繋がっている状態を検出します。Select Imageで使用するFrameを指定し、Bump形状を保ちつつ暗い領域の接続点が見えるようThresholdを設定します。Specは通常Bump Diameter Spec + 20µm(Use Max)を使用します。'
        }},
        {img:cmImg('I','nbga',66),tx:{
          en:'Bridge Minimum/Maximum Blob Size — sets the pixel-size range counted as a bridge blob. Since a bridge\'s size can\'t be predicted in advance, this range must be generous.',
          ko:'Bridge Minimum/Maximum Blob Size — Bridge Blob로 인정할 Pixel 크기 범위를 설정합니다. Bridge의 크기는 미리 예측할 수 없으므로 충분히 넓은 범위로 설정해야 합니다.',
          zhCN:'Bridge Minimum/Maximum Blob Size——设置被判定为Bridge Blob的Pixel尺寸范围。由于Bridge的大小无法预先预测,该范围须设置得足够宽。',
          zhTW:'Bridge Minimum/Maximum Blob Size——設定被判定為Bridge Blob的Pixel尺寸範圍。由於Bridge的大小無法預先預測,該範圍須設定得足夠寬。',
          ja:'Bridge Minimum/Maximum Blob Size——Bridge Blobと認識するPixelサイズ範囲を設定します。Bridgeのサイズは事前に予測できないため、十分に広い範囲で設定する必要があります。'
        }},
        {img:cmImg('I','nbga',67),tx:{
          en:'SC (Scratch) — a scratched bump shows brighter intensity than a normal bump. Set Threshold (using a Coaxial image) so normal bumps stay invisible while the scratched area appears, and set Search Size so it doesn\'t encroach on neighboring bumps.',
          ko:'SC(Scratch) — 스크래치가 있는 Bump는 정상 Bump보다 밝게 Intensity가 나타납니다. Coaxial 이미지 기준으로 정상 Bump는 보이지 않고 스크래치 영역만 보이도록 Threshold를 설정하며, 주변 Bump를 침범하지 않도록 Search Size를 설정합니다.',
          zhCN:'SC(Scratch)——有划痕的Bump其Intensity会比正常Bump更亮。以Coaxial图像为基准设置Threshold,使正常Bump不可见而只显示划痕区域,并设置Search Size以避免侵入周围的Bump。',
          zhTW:'SC(Scratch)——有刮痕的Bump其Intensity會比正常Bump更亮。以Coaxial影像為基準設定Threshold,使正常Bump不可見而只顯示刮痕區域,並設定Search Size以避免侵入周圍的Bump。',
          ja:'SC(Scratch)——傷のあるBumpは正常なBumpより明るいIntensityで表示されます。Coaxial画像を基準に正常なBumpは見えず傷部分だけが見えるようThresholdを設定し、周囲のBumpを侵さないようSearch Sizeを設定します。'
        }},
        {img:cmImg('I','nbga',68),tx:{
          en:'Compared to a normal bump, an SC (scratch) bump has a smoother surface and so reflects brighter under the same light — adjusting Threshold to reveal that brightness is how a scratch is judged.',
          ko:'정상 Bump보다 SC(Scratch) Bump는 표면이 매끄러워 동일한 조명에서도 더 밝게 반사됩니다. 이 밝기 차이가 드러나도록 Threshold를 조정해 스크래치 여부를 판정합니다.',
          zhCN:'与正常Bump相比,SC(Scratch)Bump表面更光滑,即使在相同照明下也会反射得更亮。通过调整Threshold使这种亮度差异显现出来,以此判定划痕。',
          zhTW:'與正常Bump相比,SC(Scratch)Bump表面更光滑,即使在相同照明下也會反射得更亮。透過調整Threshold使這種亮度差異顯現出來,以此判定刮痕。',
          ja:'正常なBumpと比べSC(Scratch)Bumpは表面が滑らかで、同じ照明でもより明るく反射します。この明るさの違いが現れるようThresholdを調整して傷の有無を判定します。'
        }},
        {img:cmImg('I','nbga',69),tx:{
          en:'FM (Foreign Material) — inspects for foreign matter in the SR area of the C4 zone, using an image combining coaxial and oblique light. Set Threshold to distinguish bumps from foreign matter.',
          ko:'FM(Foreign Material) — C4 영역 SR 부분의 이물질을 검사합니다. Coaxial과 Oblique 조명을 결합한 이미지를 사용하며, Bump와 이물질을 구분할 수 있도록 Threshold를 설정합니다.',
          zhCN:'FM(Foreign Material)——检查C4区域SR部分的异物。使用结合Coaxial与Oblique照明的图像,并设置Threshold以区分Bump与异物。',
          zhTW:'FM(Foreign Material)——檢查C4區域SR部分的異物。使用結合Coaxial與Oblique照明的影像,並設定Threshold以區分Bump與異物。',
          ja:'FM(Foreign Material)——C4領域SR部分の異物を検査します。CoaxialとOblique照明を組み合わせた画像を使用し、BumpとForeign Materialを区別できるようThresholdを設定します。'
        }},
        {img:cmImg('I','nbga',70),tx:{
          en:'Bump Ignore Size — excludes the bump\'s own area from FM inspection. Too large a value risks missing foreign matter close to the bump, so keep it within the Bump Diameter Spec.',
          ko:'Bump Ignore Size — FM 검사에서 Bump 자체 영역을 제외하는 값입니다. 값이 너무 크면 Bump 근처 이물질을 놓칠 위험이 있으므로 Bump Diameter Spec 범위 내에서 설정해야 합니다.',
          zhCN:'Bump Ignore Size——在FM检测中排除Bump本身区域的数值。数值过大会有漏检Bump附近异物的风险,须设置在Bump Diameter Spec范围内。',
          zhTW:'Bump Ignore Size——在FM檢測中排除Bump本身區域的數值。數值過大會有漏檢Bump附近異物的風險,須設定在Bump Diameter Spec範圍內。',
          ja:'Bump Ignore Size——FM検査からBump自体の領域を除外する値です。値が大きすぎるとBump近傍の異物を見逃す恐れがあるため、Bump Diameter Spec範囲内で設定する必要があります。'
        }},
        {img:cmImg('I','nbga',71),tx:{
          en:'FM Minimum/Maximum Blob Size — sets the blob-size range judged as foreign matter. For example at 5.6µm/pixel, setting the minimum to 6px excludes a 5px-sized particle from detection.',
          ko:'FM Minimum/Maximum Blob Size — 이물질로 판정할 Blob 크기 범위입니다. 예를 들어 1 Pixel = 5.6µm일 때 최소 크기를 6 Pixel로 설정하면 5 Pixel 크기의 이물은 검출 대상에서 제외됩니다.',
          zhCN:'FM Minimum/Maximum Blob Size——判定为异物的Blob尺寸范围。例如1 Pixel = 5.6µm时,若将最小尺寸设为6 Pixel,则5 Pixel大小的异物会被排除在检测对象之外。',
          zhTW:'FM Minimum/Maximum Blob Size——判定為異物的Blob尺寸範圍。例如1 Pixel = 5.6µm時,若將最小尺寸設為6 Pixel,則5 Pixel大小的異物會被排除在檢測對象之外。',
          ja:'FM Minimum/Maximum Blob Size——異物と判定するBlobサイズ範囲です。例えば1 Pixel = 5.6µmの場合、最小サイズを6 Pixelに設定すると5 Pixelサイズの異物は検出対象から除外されます。'
        }},
        {img:cmImg('I','nbga',72),tx:{
          en:'FM inspection sequence — the Ignore Bump Size area is excluded from the thresholded image, then any blob larger than the Use Max value in the remaining image is judged Foreign Material.',
          ko:'FM 검사 순서 — Threshold 이미지에서 Ignore Bump Size 영역을 제외한 뒤, 남은 이미지에서 Use Max 값보다 큰 Blob을 Foreign Material로 판정합니다.',
          zhCN:'FM检测流程——从Threshold图像中排除Ignore Bump Size区域后,在剩余图像中将大于Use Max值的Blob判定为Foreign Material。',
          zhTW:'FM檢測流程——從Threshold影像中排除Ignore Bump Size區域後,在剩餘影像中將大於Use Max值的Blob判定為Foreign Material。',
          ja:'FM検査手順——Threshold画像からIgnore Bump Size領域を除外した後、残った画像でUse Max値より大きいBlobをForeign Materialと判定します。'
        }},
        {img:cmImg('I','nbga',73),tx:{
          en:'Top Diameter (Flat Bump) — inspects the top-surface diameter of a Flat Bump. Uses the same parameters and method as Diameter inspection, but with a Coaxial-Illumination image instead.',
          ko:'Top Diameter(Flat Bump) — Flat Bump의 상면 직경을 검사합니다. Parameter와 검사 방식은 Diameter 검사와 동일하지만, 사용하는 이미지는 Coaxial 조명 이미지입니다.',
          zhCN:'Top Diameter(Flat Bump)——检查Flat Bump的顶面直径。参数与检测方式与Diameter检测相同,但所使用的图像为Coaxial照明图像。',
          zhTW:'Top Diameter(Flat Bump)——檢查Flat Bump的頂面直徑。參數與檢測方式與Diameter檢測相同,但所使用的影像為Coaxial照明影像。',
          ja:'Top Diameter(Flat Bump)——Flat Bumpの上面直径を検査します。ParameterとInspection方式はDiameter検査と同じですが、使用する画像はCoaxial照明画像です。'
        }},
        {img:cmImg('I','nbga',74),tx:{
          en:'Redundant — lets a defect on a low-importance bump in the C4 area still Pass as an exception. Requires a Redundant Gerber File to be additionally set in Design Spec.',
          ko:'Redundant — C4 영역에서 중요도가 낮은 Bump는 불량이 발생해도 예외적으로 Pass 처리합니다. Design Spec에 Redundant Gerber File을 추가로 설정해야 사용할 수 있습니다.',
          zhCN:'Redundant——对C4区域中重要度较低的Bump,即使发生不良也可例外判定为Pass。需在Design Spec中额外设置Redundant Gerber File方可使用。',
          zhTW:'Redundant——對C4區域中重要度較低的Bump,即使發生不良也可例外判定為Pass。需在Design Spec中額外設定Redundant Gerber File方可使用。',
          ja:'Redundant——C4領域内で重要度の低いBumpは不良が発生しても例外的にPass扱いとします。Design SpecにRedundant Gerber Fileを追加設定する必要があります。'
        }},
        {img:cmImg('I','nbga',75),tx:{
          en:'Redundant settings — Select Die (per-die settings), Redundant Filtering (on/off, applied to all dies), IgnoreRedundantToReject (skip redundant handling when a normal bump would reject anyway), and Copy All (copy this die\'s settings to another die).',
          ko:'Redundant 설정 — Select Die(Die별 개별 설정), Redundant Filtering(사용 여부, 전체 Die에 공통 적용), IgnoreRedundantToReject(정상 Bump도 Reject 대상이면 Redundant 처리 생략), Copy All(현재 설정을 다른 Die에 복사).',
          zhCN:'Redundant设置——Select Die(按Die个别设置)、Redundant Filtering(是否使用,套用于所有Die)、IgnoreRedundantToReject(即使是正常Bump若为Reject对象则跳过Redundant处理)、Copy All(将目前设置复制到其他Die)。',
          zhTW:'Redundant設定——Select Die(按Die個別設定)、Redundant Filtering(是否使用,套用於所有Die)、IgnoreRedundantToReject(即使是正常Bump若為Reject對象則跳過Redundant處理)、Copy All(將目前設定複製到其他Die)。',
          ja:'Redundant設定——Select Die(Die別個別設定)、Redundant Filtering(使用有無、全Die共通適用)、IgnoreRedundantToReject(正常なBumpでもReject対象ならRedundant処理を省略)、Copy All(現在の設定を他のDieへコピー)。'
        }},
        {img:cmImg('I','nbga',76),tx:{
          en:'Redundant (continued) — choose which inspection items get Redundant handling (unselected items reject normally); set the Diameter Low/High reject spec applied to Redundant Bumps; and choose whether reject judgment is calculated per item (Each) or combined across items (Public).',
          ko:'Redundant(계속) — Redundant를 적용할 검사 항목을 선택(선택 안 하면 정상적으로 Reject 처리), Redundant Bump에 적용할 Diameter Low/High Reject 기준값 설정, Reject 판정을 항목별(Each)로 할지 통합(Public)으로 할지 선택합니다.',
          zhCN:'Redundant(续)——选择要套用Redundant的检测项目(未选择项目将正常判定Reject)、设置套用于Redundant Bump的Diameter Low/High Reject基准值、选择Reject判定是按项目个别计算(Each)还是合并计算(Public)。',
          zhTW:'Redundant(續)——選擇要套用Redundant的檢測項目(未選擇項目將正常判定Reject)、設定套用於Redundant Bump的Diameter Low/High Reject基準值、選擇Reject判定是按項目個別計算(Each)還是合併計算(Public)。',
          ja:'Redundant(続き)——Redundantを適用する検査項目を選択(未選択の項目は通常どおりReject判定)、Redundant Bumpに適用するDiameter Low/High Reject基準値を設定、Reject判定を項目ごと(Each)か合算(Public)かを選択します。'
        }},
        {img:cmImg('I','nbga',77),tx:{
          en:'Redundant reject rule — reject if the defect count exceeds a set Number or Percent. Redundant Reject Distance also rejects the unit if redundant-bump defects cluster too closely together, even if the redundant condition was otherwise satisfied.',
          ko:'Redundant Reject 판정 방식 — 불량 개수가 설정한 Number 또는 Percent를 초과하면 Reject합니다. Redundant Reject Distance는 Redundant 조건을 만족해도 불량 Bump 간 거리가 설정값보다 가까우면 Reject 처리합니다.',
          zhCN:'Redundant Reject判定方式——若不良数量超过设定的Number或Percent,则判定为Reject。Redundant Reject Distance则是即使满足Redundant条件,若不良Bump之间的距离比设定值更近,仍会判定为Reject。',
          zhTW:'Redundant Reject判定方式——若不良數量超過設定的Number或Percent,則判定為Reject。Redundant Reject Distance則是即使滿足Redundant條件,若不良Bump之間的距離比設定值更近,仍會判定為Reject。',
          ja:'Redundant Reject判定方式——不良数が設定したNumberまたはPercentを超えるとRejectします。Redundant Reject Distanceは、Redundant条件を満たしていても不良Bump間の距離が設定値より近い場合にRejectとします。'
        }},
        {img:cmImg('I','nbga',78),tx:{
          en:'Stain FM — detects a different, stained type of foreign material, using its own separate parameter set (same purpose as FM but calculated independently). It uses a relatively dark image (coaxial + quasi-coaxial light) and Reverse Threshold to invert black/white for detection.',
          ko:'Stain FM — 일반 이물질과 다른 얼룩(Stain) 형태의 이물질을 검출하며, FM과 목적은 같지만 별도의 설정값으로 독립적으로 계산됩니다. 비교적 어두운 이미지(Coaxial+Quasi-Coaxial 조명)를 사용하며, Reverse Threshold로 흑백을 반전시켜 검출합니다.',
          zhCN:'Stain FM——检测与一般异物不同的污渍(Stain)型异物,目的与FM相同但使用独立的设置值单独计算。使用较暗的图像(Coaxial+Quasi-Coaxial照明),并以Reverse Threshold反转黑白以进行检测。',
          zhTW:'Stain FM——檢測與一般異物不同的污漬(Stain)型異物,目的與FM相同但使用獨立的設定值單獨計算。使用較暗的影像(Coaxial+Quasi-Coaxial照明),並以Reverse Threshold反轉黑白以進行檢測。',
          ja:'Stain FM——一般的な異物とは異なるシミ(Stain)状の異物を検出し、FMと目的は同じですが別の設定値で独立して計算します。比較的暗い画像(Coaxial+Quasi-Coaxial照明)を使用し、Reverse Thresholdで白黒を反転させて検出します。'
        }},
        {img:cmImg('I','nbga',79),tx:{
          en:'Software Inspection Parameter — this section covers Illum Control, Align, 2D Barcode & OCR, 2D Inspection, 3D Inspection, and LTS Target.',
          ko:'Software Inspection Parameter — Illum Control, Align, 2D Barcode & OCR, 2D Inspection, 3D Inspection, LTS Target를 다룹니다.',
          zhCN:'Software Inspection Parameter——本节介绍Illum Control、Align、2D Barcode & OCR、2D Inspection、3D Inspection、LTS Target。',
          zhTW:'Software Inspection Parameter——本節介紹Illum Control、Align、2D Barcode & OCR、2D Inspection、3D Inspection、LTS Target。',
          ja:'Software Inspection Parameter——本節ではIllum Control、Align、2D Barcode & OCR、2D Inspection、3D Inspection、LTS Targetを扱います。'
        }},
        {img:cmImg('I','nbga',80),tx:{
          en:'3D Inspection — Image Display: one "Image Grab" in 3D Vision returns 8 frames (two 2D images, a 3D frame, Z-Map/Visibility-Map GV images, a Height GV image, a Z-Map image, and a Visibility-Map image). The 2D/3D image counts depend on the Lighting Control setting; the rest are fixed. The Visibility/Z-Map images are built from raw Visibility (signal strength) and Z (height) values; each "GV" version has a correction applied.',
          ko:'3D Inspection — Image Display: 3D Vision에서 한 번 Image Grab하면 8장의 Frame이 생성됩니다(2D Image 2장, 3D Frame, Z Map·Visibility Map GV Image, Height GV Image, Z Map Image, Visibility Map Image). 2D·3D Image 장수는 Lighting Control 설정에 따라 달라지고 나머지는 고정입니다. Visibility·Z Map Image는 원본 Visibility(신호 세기)·Z(높이) 값으로 만들어지며, GV Image는 각각 보정값이 적용된 버전입니다.',
          zhCN:'3D Inspection——Image Display:在3D Vision中执行一次Image Grab会产生8张Frame(2张2D Image、1张3D Frame、Z Map与Visibility Map的GV Image、Height GV Image、Z Map Image、Visibility Map Image)。2D、3D Image的张数依Lighting Control设置而定,其余固定不变。Visibility、Z Map Image由原始Visibility(信号强度)、Z(高度)值生成,各GV Image则是套用了校正值的版本。',
          zhTW:'3D Inspection——Image Display:在3D Vision中執行一次Image Grab會產生8張Frame(2張2D Image、1張3D Frame、Z Map與Visibility Map的GV Image、Height GV Image、Z Map Image、Visibility Map Image)。2D、3D Image的張數依Lighting Control設定而定,其餘固定不變。Visibility、Z Map Image由原始Visibility(訊號強度)、Z(高度)值產生,各GV Image則是套用了校正值的版本。',
          ja:'3D Inspection——Image Display:3D Visionで1回Image Grabすると8枚のFrameが生成されます(2D Image 2枚、3D Frame、Z Map・Visibility MapのGV Image、Height GV Image、Z Map Image、Visibility Map Image)。2D・3D Imageの枚数はLighting Control設定によって変わり、残りは固定です。Visibility・Z Map Imageは元のVisibility(信号強度)・Z(高さ)値から作られ、各GV Imageは補正値を適用したバージョンです。'
        }},
        {img:cmImg('I','nbga',81),tx:{
          en:'Bump parameters overview — set the inspection area/Center Point option; a Visibility-weighting option (New Algorithm only) for outer-pixel Z reliability; a filter by Visibility percentile; a Top/Count filter that drops the highest N pixels then uses a set count; a Min/Max percentile filter around the median; a ± range filter around the mean; and a Weight Factor calculation for the final Z value.',
          ko:'Bump Parameter 개요 — 검사 영역·Center Point 옵션 설정, 외곽 Pixel의 Z값 신뢰도를 위한 Visibility 가중치 옵션(New Algorithm 전용), Visibility 백분위 기준 필터, 상위 N개 Pixel 제외 후 지정 개수만 사용하는 Top/Count 필터, 중앙값 기준 Min/Max % 필터, 평균 기준 ± 범위 필터, 최종 Z값 계산을 위한 Weight Factor로 구성됩니다.',
          zhCN:'Bump Parameter概述——设置检测区域·Center Point选项、用于外围Pixel Z值可靠性的Visibility加权选项(仅New Algorithm)、按Visibility百分位过滤、排除最高N个Pixel后仅使用指定数量的Top/Count过滤、以中位数为基准的Min/Max %过滤、以平均值为基准的±范围过滤,以及计算最终Z值的Weight Factor。',
          zhTW:'Bump Parameter概述——設定檢測區域·Center Point選項、用於外圍Pixel Z值可靠性的Visibility加權選項(僅New Algorithm)、按Visibility百分位過濾、排除最高N個Pixel後僅使用指定數量的Top/Count過濾、以中位數為基準的Min/Max %過濾、以平均值為基準的±範圍過濾,以及計算最終Z值的Weight Factor。',
          ja:'Bump Parameter概要——検査領域・Center Pointオプションの設定、外側PixelのZ値信頼性のためのVisibility重み付けオプション(New Algorithm専用)、Visibilityパーセンタイルによるフィルタ、上位N個のPixelを除外後に指定数のみ使用するTop/Countフィルタ、中央値基準のMin/Max %フィルタ、平均値基準の±範囲フィルタ、最終Z値算出のためのWeight Factorで構成されます。'
        }},
        {img:cmImg('I','nbga',82),tx:{
          en:'Valid Radius Max — sets what percentage of the Bump Spec Radius is used for inspection. A larger value (e.g. 100% vs. 80%) includes more of the bump\'s pixel area, increasing the pixel count used.',
          ko:'Valid Radius Max — Bump Spec Radius 중 검사에 사용할 비율(%)을 설정합니다. 값이 클수록(예: 80%→100%) Bump Pixel 영역이 더 넓게 포함되어 사용되는 Pixel 수가 늘어납니다.',
          zhCN:'Valid Radius Max——设置Bump Spec Radius中用于检测的比例(%)。数值越大(如80%→100%),纳入的Bump Pixel区域越广,使用的Pixel数也随之增加。',
          zhTW:'Valid Radius Max——設定Bump Spec Radius中用於檢測的比例(%)。數值越大(如80%→100%),納入的Bump Pixel區域越廣,使用的Pixel數也隨之增加。',
          ja:'Valid Radius Max——Bump Spec Radiusのうち検査に使用する割合(%)を設定します。値が大きいほど(例:80%→100%)Bump Pixel領域がより広く含まれ、使用されるPixel数が増加します。'
        }},
        {img:cmImg('I','nbga',83),tx:{
          en:'Valid Center Point — chooses how the bump\'s inspection center is found: 2D Blob (from 2D alignment), 2D Blob→3D (refined by Z value), 3D (found directly from Z value), or Gerber→3D (from the Gerber position, refined by Z value).',
          ko:'Valid Center Point — Bump 검사 기준 Center를 찾는 방식을 선택합니다: 2D Blob(2D Alignment 기준), 2D Blob→3D(2D 기준점을 Z값으로 재보정), 3D(Z값만으로 직접 탐색), Gerber→3D(Gerber 위치를 Z값으로 재보정).',
          zhCN:'Valid Center Point——选择寻找Bump检测基准Center的方式:2D Blob(以2D Alignment为准)、2D Blob→3D(以Z值对2D基准点再校正)、3D(仅以Z值直接搜索)、Gerber→3D(以Z值对Gerber位置再校正)。',
          zhTW:'Valid Center Point——選擇尋找Bump檢測基準Center的方式:2D Blob(以2D Alignment為準)、2D Blob→3D(以Z值對2D基準點再校正)、3D(僅以Z值直接搜尋)、Gerber→3D(以Z值對Gerber位置再校正)。',
          ja:'Valid Center Point——Bump検査の基準Centerを求める方式を選択します:2D Blob(2D Alignment基準)、2D Blob→3D(2D基準点をZ値で再補正)、3D(Z値のみで直接探索)、Gerber→3D(Gerber位置をZ値で再補正)。'
        }},
        {img:cmImg('I','nbga',84),tx:{
          en:'Comparing the four Valid Center Point options: 2D Blob / 2D Blob→3D / Gerber→3D land in slightly different but still-valid spots; the 3D-only option can drift to a corner of the bump when abnormal Z-value pixels exist in the ROI — so 2D Blob→3D is the recommended choice.',
          ko:'4가지 Valid Center Point 옵션 비교 — 2D Blob·2D Blob→3D·Gerber→3D는 위치가 조금씩 달라도 모두 Bump 영역 안에 있어 검사 가능합니다. 3D 단독 옵션은 ROI 내 비정상 Z값 Pixel이 있으면 Center가 Bump 모서리로 치우칠 수 있어, 2D Blob→3D 옵션 사용을 권장합니다.',
          zhCN:'4种Valid Center Point选项比较——2D Blob、2D Blob→3D、Gerber→3D的位置虽略有不同,但都位于Bump区域内,可正常检测。仅使用3D选项时,若ROI内存在异常Z值Pixel,Center可能会偏向Bump边角,因此建议使用2D Blob→3D选项。',
          zhTW:'4種Valid Center Point選項比較——2D Blob、2D Blob→3D、Gerber→3D的位置雖略有不同,但都位於Bump區域內,可正常檢測。僅使用3D選項時,若ROI內存在異常Z值Pixel,Center可能會偏向Bump邊角,因此建議使用2D Blob→3D選項。',
          ja:'4つのValid Center Pointオプションの比較——2D Blob・2D Blob→3D・Gerber→3Dは位置が多少異なりますがすべてBump領域内にあり検査可能です。3D単独オプションはROI内に異常なZ値のPixelがあるとCenterがBumpの角へ偏る恐れがあるため、2D Blob→3Dオプションの使用が推奨されます。'
        }},
        {img:cmImg('I','nbga',85),tx:{
          en:'Bump Noise Filter — Top & Count: Top removes the N highest-Z pixels (default 1), then Count sets how many of the remaining pixels (sorted by Z) are actually used for inspection (default 10).',
          ko:'Bump Noise Filter — Top & Count: Top은 Z값이 가장 높은 상위 N개 Pixel을 제거(기본값 1), Count는 남은 Pixel 중 실제 검사에 사용할 개수를 설정합니다(기본값 10).',
          zhCN:'Bump Noise Filter——Top & Count:Top用于去除Z值最高的前N个Pixel(默认值1),Count则设置从剩余Pixel中实际用于检测的数量(默认值10)。',
          zhTW:'Bump Noise Filter——Top & Count:Top用於去除Z值最高的前N個Pixel(預設值1),Count則設定從剩餘Pixel中實際用於檢測的數量(預設值10)。',
          ja:'Bump Noise Filter——Top & Count:TopはZ値が最も高い上位N個のPixelを除去し(既定値1)、Countは残ったPixelのうち実際の検査に使用する数を設定します(既定値10)。'
        }},
        {img:cmImg('I','nbga',86),tx:{
          en:'With Top & Count enabled, the Final Bump Pixel Count always equals the Count value; with it disabled, the Final Bump Pixel Count equals the Initial Bump Pixel Count (no filtering).',
          ko:'Top & Count를 사용하면 Final Bump Pixel Count는 항상 Count 값과 같아집니다. 사용하지 않으면 Final Bump Pixel Count는 필터링 없이 Initial Bump Pixel Count와 동일합니다.',
          zhCN:'使用Top & Count时,Final Bump Pixel Count始终等于Count设定值。不使用时,Final Bump Pixel Count在未经过滤的情况下与Initial Bump Pixel Count相同。',
          zhTW:'使用Top & Count時,Final Bump Pixel Count始終等於Count設定值。不使用時,Final Bump Pixel Count在未經過濾的情況下與Initial Bump Pixel Count相同。',
          ja:'Top & Countを使用するとFinal Bump Pixel Countは常にCount設定値と同じになります。使用しない場合、Final Bump Pixel Countはフィルタリングなしでinitial Bump Pixel Countと同じになります。'
        }},
        {img:cmImg('I','nbga',87),tx:{
          en:'Weight Factor (New Algorithm only, requires ZMap Visibility) — reduces the influence of low-Visibility pixels on the final bump height by weighting each pixel\'s Z value by its Visibility. Pixels below the Low bound get weight 0; pixels above the High bound get full weight (255).',
          ko:'Weight Factor(New Algorithm 전용, ZMap Visibility 체크 필요) — 각 Pixel의 Z값에 Visibility 기반 가중치를 곱해, Visibility가 낮은 Pixel이 최종 Bump 높이에 미치는 영향을 줄입니다. Visibility가 Low 미만이면 가중치 0, High 초과면 가중치 255(최대)를 적용합니다.',
          zhCN:'Weight Factor(仅New Algorithm,需勾选ZMap Visibility)——对各Pixel的Z值乘以基于Visibility的权重,以降低低Visibility Pixel对最终Bump高度的影响。Visibility低于Low时权重为0,高于High时权重为255(最大值)。',
          zhTW:'Weight Factor(僅New Algorithm,需勾選ZMap Visibility)——對各Pixel的Z值乘以基於Visibility的權重,以降低低Visibility Pixel對最終Bump高度的影響。Visibility低於Low時權重為0,高於High時權重為255(最大值)。',
          ja:'Weight Factor(New Algorithm専用、ZMap Visibilityのチェックが必要)——各PixelのZ値にVisibilityに基づく重みを掛け、Visibilityが低いPixelが最終的なBump高さに与える影響を減らします。VisibilityがLow未満なら重み0、High超過なら重み255(最大)を適用します。'
        }},
        {img:cmImg('I','nbga',88),tx:{
          en:'A worked example of the Weight Factor calculation, showing how each pixel\'s Z value, Visibility, and computed weight combine into the final weighted-average height.',
          ko:'Weight Factor 계산 예시 — 각 Pixel의 Z값·Visibility·계산된 가중치가 어떻게 결합되어 최종 가중평균 높이가 산출되는지 보여줍니다.',
          zhCN:'Weight Factor计算示例——展示各Pixel的Z值、Visibility与计算所得权重如何结合,得出最终的加权平均高度。',
          zhTW:'Weight Factor計算範例——展示各Pixel的Z值、Visibility與計算所得權重如何結合,得出最終的加權平均高度。',
          ja:'Weight Factor計算例——各PixelのZ値・Visibility・算出された重みがどのように組み合わさって最終的な加重平均高さになるかを示します。'
        }},
        {img:cmImg('I','nbga',89),tx:{
          en:'DataDiffThreshold (New Algorithm only) — excludes a Round Bump\'s damaged/distorted pixels by sorting Z values and discarding any pixel whose neighboring height difference exceeds the threshold. (Typical normal-bump differences: 0.01–0.03 for Flat Bump, 0.1–1.5 for Round Bump.)',
          ko:'DataDiffThreshold(New Algorithm 전용) — Round Bump의 파손·왜곡된 Pixel을 배제하기 위해 Z값을 정렬한 뒤 인접 Pixel 간 높이 차가 설정값을 초과하면 제외합니다. (정상 Bump 기준 차이값: Flat Bump 0.01~0.03, Round Bump 0.1~1.5)',
          zhCN:'DataDiffThreshold(仅New Algorithm)——为排除Round Bump损坏、变形的Pixel,将Z值排序后,若相邻Pixel间的高度差超过设定值则予以排除。(正常Bump的差值基准:Flat Bump为0.01~0.03,Round Bump为0.1~1.5)',
          zhTW:'DataDiffThreshold(僅New Algorithm)——為排除Round Bump損壞、變形的Pixel,將Z值排序後,若相鄰Pixel間的高度差超過設定值則予以排除。(正常Bump的差值基準:Flat Bump為0.01~0.03,Round Bump為0.1~1.5)',
          ja:'DataDiffThreshold(New Algorithm専用)——Round Bumpの破損・歪んだPixelを除外するため、Z値を並べ替えた後、隣接Pixel間の高さの差が設定値を超えると除外します。(正常なBumpの差の目安:Flat Bumpは0.01~0.03、Round Bumpは0.1~1.5)'
        }},
        {img:cmImg('I','nbga',90),tx:{
          en:'Example — at DataDiffThreshold 3.5, no pixel pair on this Flat Bump exceeds the gap, so every pixel is used; at 0.1, some pairs do exceed it, so those get filtered out before inspection.',
          ko:'예시 — DataDiffThreshold가 3.5일 때는 이 Flat Bump에서 인접 Pixel 차이가 이를 초과하는 경우가 없어 모든 Pixel이 사용됩니다. 0.1일 때는 초과하는 Pixel 쌍이 있어 해당 Pixel이 검사에서 제외됩니다.',
          zhCN:'示例——当DataDiffThreshold为3.5时,此Flat Bump中相邻Pixel差值没有超过该值的情况,因此所有Pixel都会被使用。为0.1时,存在超过该值的Pixel对,这些Pixel会在检测前被过滤掉。',
          zhTW:'範例——當DataDiffThreshold為3.5時,此Flat Bump中相鄰Pixel差值沒有超過該值的情況,因此所有Pixel都會被使用。為0.1時,存在超過該值的Pixel對,這些Pixel會在檢測前被過濾掉。',
          ja:'例——DataDiffThresholdが3.5の場合、このFlat Bumpでは隣接Pixelの差がこれを超えるものがないため全Pixelが使用されます。0.1の場合は超過するPixelのペアがあり、それらは検査前にフィルタリングされます。'
        }},
        {img:cmImg('I','nbga',91),tx:{
          en:'Use Visibility Filtering — keeps only the top N% of bump pixels by Visibility (default 99%). Low-Visibility pixels are considered less reliable and dropped — e.g. at 60%, only the top 60% highest-Visibility pixels are used.',
          ko:'Use Visibility Filtering — Visibility 기준 상위 N%의 Bump Pixel만 사용합니다(기본값 99%). Visibility가 낮은 Pixel은 신뢰도가 낮다고 보고 제외합니다 — 예: 60%로 설정하면 Visibility 상위 60% Pixel만 사용됩니다.',
          zhCN:'Use Visibility Filtering——仅使用Visibility排名前N%的Bump Pixel(默认值99%)。Visibility较低的Pixel被视为可靠性较低而予以排除——例如设为60%时,仅使用Visibility前60%的Pixel。',
          zhTW:'Use Visibility Filtering——僅使用Visibility排名前N%的Bump Pixel(預設值99%)。Visibility較低的Pixel被視為可靠性較低而予以排除——例如設為60%時,僅使用Visibility前60%的Pixel。',
          ja:'Use Visibility Filtering——Visibility基準で上位N%のBump Pixelのみを使用します(既定値99%)。Visibilityが低いPixelは信頼度が低いとみなし除外します——例:60%に設定すると、Visibility上位60%のPixelのみ使用されます。'
        }},
        {img:cmImg('I','nbga',92),tx:{
          en:'Comparing 100% vs. 60% Visibility Filtering shows how the Initial Bump Pixel Count shrinks, though the Final Bump Pixel Count can end up similar since abnormal-Z filtering still applies either way.',
          ko:'Visibility Filtering 100%와 60% 비교 — Initial Bump Pixel Count는 크게 줄어들지만, 비정상 Z값 필터링이 어느 쪽이든 적용되므로 Final Bump Pixel Count는 비슷하게 나올 수 있습니다.',
          zhCN:'比较Visibility Filtering 100%与60%——Initial Bump Pixel Count会明显减少,但由于两者都会套用异常Z值过滤,Final Bump Pixel Count可能相近。',
          zhTW:'比較Visibility Filtering 100%與60%——Initial Bump Pixel Count會明顯減少,但由於兩者都會套用異常Z值過濾,Final Bump Pixel Count可能相近。',
          ja:'Visibility Filtering 100%と60%の比較——Initial Bump Pixel Countは大きく減りますが、どちらの場合も異常なZ値のフィルタリングが適用されるため、Final Bump Pixel Countは近い値になることがあります。'
        }},
        {img:cmImg('I','nbga',93),tx:{
          en:'Valid Ratio — keeps only pixels within a Min%/Max% band around the Z-value Mean. A narrower band (e.g. 60/60 vs. 90/90) uses fewer pixels in the final calculation.',
          ko:'Valid Ratio — Z값 평균(Mean) 기준 Min%~Max% 범위 내 Pixel만 사용합니다. 범위가 좁을수록(예: 90/90→60/60) 최종 계산에 사용되는 Pixel 수가 줄어듭니다.',
          zhCN:'Valid Ratio——仅使用以Z值Mean为基准、位于Min%~Max%范围内的Pixel。范围越窄(如90/90→60/60),最终计算所用的Pixel数越少。',
          zhTW:'Valid Ratio——僅使用以Z值Mean為基準、位於Min%~Max%範圍內的Pixel。範圍越窄(如90/90→60/60),最終計算所用的Pixel數越少。',
          ja:'Valid Ratio——Z値のMeanを基準にMin%~Max%範囲内のPixelのみを使用します。範囲が狭いほど(例:90/90→60/60)最終計算に使用されるPixel数が減ります。'
        }},
        {img:cmImg('I','nbga',94),tx:{
          en:'Low & High (Mean Difference) — filters out pixels whose Z value falls outside (Mean − Low) to (Mean + High). Typical Flat Bump pixels stay within ±1; Round Bump pixels stay within roughly Mean ±5µm depending on Valid Radius Max.',
          ko:'Low & High(Mean Difference) — Z값이 (Mean-Low)~(Mean+High) 범위를 벗어난 Pixel을 필터링합니다. 일반적으로 Flat Bump는 Mean ±1 이내, Round Bump는 Valid Radius Max 설정값에 따라 대략 Mean ±5µm 이내입니다.',
          zhCN:'Low & High(Mean Difference)——过滤Z值超出(Mean-Low)~(Mean+High)范围的Pixel。一般Flat Bump在Mean ±1以内,Round Bump则依Valid Radius Max设定值大致在Mean ±5µm以内。',
          zhTW:'Low & High(Mean Difference)——過濾Z值超出(Mean-Low)~(Mean+High)範圍的Pixel。一般Flat Bump在Mean ±1以內,Round Bump則依Valid Radius Max設定值大致在Mean ±5µm以內。',
          ja:'Low & High(Mean Difference)——Z値が(Mean-Low)~(Mean+High)の範囲を外れたPixelをフィルタリングします。一般的にFlat BumpはMean ±1以内、Round BumpはValid Radius Maxの設定によりおおよそMean ±5µm以内です。'
        }},
        {img:cmImg('I','nbga',95),tx:{
          en:'When New Algorithm is off, Weight Factor parameters aren\'t used for inspection, and if the Bump Noise Filter\'s Top & Count is active, Valid Ratio is forced to 100% regardless of its set value.',
          ko:'New Algorithm을 사용하지 않으면 Weight Factor Parameter는 검사에 사용되지 않고, Bump Noise Filter의 Top & Count가 활성화된 경우 Valid Ratio는 설정값과 무관하게 100%로 적용됩니다.',
          zhCN:'不使用New Algorithm时,Weight Factor参数不会用于检测;若Bump Noise Filter的Top & Count已启用,则Valid Ratio会强制以100%套用,与设定值无关。',
          zhTW:'不使用New Algorithm時,Weight Factor參數不會用於檢測;若Bump Noise Filter的Top & Count已啟用,則Valid Ratio會強制以100%套用,與設定值無關。',
          ja:'New Algorithmを使用しない場合、Weight Factor Parameterは検査に使用されず、Bump Noise FilterのTop & Countが有効な場合、Valid Ratioは設定値に関わらず100%として適用されます。'
        }},
        {img:cmImg('I','nbga',96),tx:{
          en:'SR — SpecDiffmean triggers a re-inspection (even after an initial Pass) when the average height deviation of SR-area pixels exceeds this value — e.g. a setting of 5 means retry when the average deviation exceeds 5µm.',
          ko:'SR — SpecDiffmean은 SR 영역 Pixel의 평균 높이 편차가 이 값을 초과하면(1차 Pass 판정이어도) 재검사를 시도합니다 — 예: 값이 5이면 평균 편차가 5µm를 초과할 때 재검사합니다.',
          zhCN:'SR——SpecDiffmean是当SR区域Pixel的平均高度偏差超过此值时(即使初判为Pass)也会触发再检测——例如设为5,表示平均偏差超过5µm时进行重新检测。',
          zhTW:'SR——SpecDiffmean是當SR區域Pixel的平均高度偏差超過此值時(即使初判為Pass)也會觸發再檢測——例如設為5,表示平均偏差超過5µm時進行重新檢測。',
          ja:'SR——SpecDiffmeanはSR領域PixelのHeight平均偏差がこの値を超えると(初回Pass判定でも)再検査を行います——例:値が5の場合、平均偏差が5µmを超えると再検査します。'
        }},
        {img:cmImg('I','nbga',97),tx:{
          en:'A worked example of how per-pixel SR height differences are averaged into a DiffMean per SR, then combined into a Total DiffMean for the unit, which is compared against SpecDiffmean to decide PASS vs. Retry.',
          ko:'각 Pixel의 SR 높이 편차를 SR 단위의 DiffMean으로 평균낸 뒤, Unit 전체의 Total DiffMean으로 합산하여 SpecDiffmean과 비교해 PASS 또는 재검사를 판정하는 계산 예시입니다.',
          zhCN:'展示各Pixel的SR高度偏差如何平均为每个SR的DiffMean,再合并为整个Unit的Total DiffMean,并与SpecDiffmean比较以判定PASS或Retry的计算示例。',
          zhTW:'展示各Pixel的SR高度偏差如何平均為每個SR的DiffMean,再合併為整個Unit的Total DiffMean,並與SpecDiffmean比較以判定PASS或Retry的計算範例。',
          ja:'各PixelのSR高さ偏差をSR単位のDiffMeanとして平均化し、Unit全体のTotal DiffMeanに合算した後、SpecDiffmeanと比較してPASSか再検査かを判定する計算例です。'
        }},
        {img:cmImg('I','nbga',98),tx:{
          en:'Valid ROI Max — sets the SR inspection area as a multiple of the Bump Spec Diameter. A larger multiplier (e.g. 2.8 vs. 2.0) covers more area and includes more pixels.',
          ko:'Valid ROI Max — SR 검사 영역을 Bump Spec Diameter의 배수로 설정합니다. 배수가 클수록(예: 2.0→2.8) 더 넓은 영역이 포함되어 Pixel 수가 늘어납니다.',
          zhCN:'Valid ROI Max——将SR检测区域设置为Bump Spec Diameter的倍数。倍数越大(如2.0→2.8),涵盖的区域越广,Pixel数也随之增加。',
          zhTW:'Valid ROI Max——將SR檢測區域設定為Bump Spec Diameter的倍數。倍數越大(如2.0→2.8),涵蓋的區域越廣,Pixel數也隨之增加。',
          ja:'Valid ROI Max——SR検査領域をBump Spec Diameterの倍数として設定します。倍率が大きいほど(例:2.0→2.8)より広い範囲が含まれ、Pixel数が増加します。'
        }},
        {img:cmImg('I','nbga',99),tx:{
          en:'A larger Valid ROI Max value increases the final SR pixel count used in the calculation, as shown by the comparison data.',
          ko:'Valid ROI Max 값이 클수록 최종 계산에 사용되는 SR Pixel 수가 늘어남을 비교 데이터로 확인할 수 있습니다.',
          zhCN:'比较数据显示,Valid ROI Max值越大,最终计算所用的SR Pixel数也越多。',
          zhTW:'比較資料顯示,Valid ROI Max值越大,最終計算所用的SR Pixel數也越多。',
          ja:'Valid ROI Maxの値が大きいほど、最終計算に使用されるSR Pixel数が増えることが比較データから確認できます。'
        }},
        {img:cmImg('I','nbga',100),tx:{
          en:'Ignore Radius — excludes the bump\'s own area from the SR region, calculated as Ignore Radius × Bump Spec Radius. Too small a value (e.g. 1.0) can leave bump pixels inside the SR area (skewing the SR height calculation), while a larger value (e.g. 1.8) fully removes the bump.',
          ko:'Ignore Radius — SR 영역에서 Bump 자체 영역을 제외하는 값이며, Ignore Radius × Bump Spec Radius로 계산됩니다. 값이 너무 작으면(예: 1.0) Bump Pixel이 SR 영역에 남아 SR 높이 계산이 왜곡될 수 있고, 값이 크면(예: 1.8) Bump 영역이 완전히 제외됩니다.',
          zhCN:'Ignore Radius——用于从SR区域中排除Bump本身区域的数值,以Ignore Radius × Bump Spec Radius计算。数值过小(如1.0)会使Bump Pixel残留在SR区域内,导致SR高度计算失真;数值较大(如1.8)则可完全排除Bump区域。',
          zhTW:'Ignore Radius——用於從SR區域中排除Bump本身區域的數值,以Ignore Radius × Bump Spec Radius計算。數值過小(如1.0)會使Bump Pixel殘留在SR區域內,導致SR高度計算失真;數值較大(如1.8)則可完全排除Bump區域。',
          ja:'Ignore Radius——SR領域からBump自体の領域を除外する値で、Ignore Radius × Bump Spec Radiusで計算されます。値が小さすぎると(例:1.0)Bump PixelがSR領域内に残りSR高さ計算が歪む恐れがあり、値が大きいと(例:1.8)Bump領域が完全に除外されます。'
        }},
        {img:cmImg('I','nbga',101),tx:{
          en:'A larger Ignore Radius removes more of the bump area, reducing the final SR pixel count used.',
          ko:'Ignore Radius 값이 클수록 제외되는 Bump 영역이 넓어져 최종 SR Pixel 수가 줄어듭니다.',
          zhCN:'Ignore Radius值越大,被排除的Bump区域越广,最终使用的SR Pixel数也随之减少。',
          zhTW:'Ignore Radius值越大,被排除的Bump區域越廣,最終使用的SR Pixel數也隨之減少。',
          ja:'Ignore Radiusの値が大きいほど除外されるBump領域が広くなり、最終的なSR Pixel数が減少します。'
        }},
        {img:cmImg('I','nbga',102),tx:{
          en:'SR Noise Filter — Top & Count: Top removes the N highest-Z pixels (default 1), Count then sets how many of the remainder are used (default 10) — the same principle as the Bump Noise Filter.',
          ko:'SR Noise Filter — Top & Count: Top은 Z값 상위 N개 Pixel을 제거하고(기본값 1), Count는 남은 Pixel 중 사용할 개수를 설정합니다(기본값 10). Bump Noise Filter와 동일한 원리입니다.',
          zhCN:'SR Noise Filter——Top & Count:Top用于去除Z值最高的N个Pixel(默认值1),Count设置从剩余Pixel中实际使用的数量(默认值10)。原理与Bump Noise Filter相同。',
          zhTW:'SR Noise Filter——Top & Count:Top用於去除Z值最高的N個Pixel(預設值1),Count設定從剩餘Pixel中實際使用的數量(預設值10)。原理與Bump Noise Filter相同。',
          ja:'SR Noise Filter——Top & Count:TopはZ値上位N個のPixelを除去し(既定値1)、Countは残ったPixelのうち使用する数を設定します(既定値10)。Bump Noise Filterと同じ原理です。'
        }},
        {img:cmImg('I','nbga',103),tx:{
          en:'SR Valid Ratio — the same concept as the Bump version: only pixels within a Min%/Max% band around the mean Z are used; a narrower band uses fewer pixels.',
          ko:'SR Valid Ratio — Bump과 동일한 개념으로, 평균 Z값 기준 Min%~Max% 범위 내 Pixel만 사용합니다. 범위가 좁을수록 사용 Pixel 수가 줄어듭니다.',
          zhCN:'SR Valid Ratio——与Bump的概念相同,仅使用以平均Z值为基准、位于Min%~Max%范围内的Pixel。范围越窄,使用的Pixel数越少。',
          zhTW:'SR Valid Ratio——與Bump的概念相同,僅使用以平均Z值為基準、位於Min%~Max%範圍內的Pixel。範圍越窄,使用的Pixel數越少。',
          ja:'SR Valid Ratio——Bumpと同じ概念で、平均Z値を基準にMin%~Max%範囲内のPixelのみを使用します。範囲が狭いほど使用Pixel数が減ります。'
        }},
        {img:cmImg('I','nbga',104),tx:{
          en:'SR Low & High (Mean Difference) — filters out SR pixels whose Z value falls outside (Mean − Low) to (Mean + High). Typical SR pixel Z values stay within about ± 5 of the mean.',
          ko:'SR Low & High(Mean Difference) — Z값이 (Mean-Low)~(Mean+High) 범위를 벗어난 SR Pixel을 필터링합니다. 일반적으로 SR Pixel의 Z값은 평균 ±5 이내입니다.',
          zhCN:'SR Low & High(Mean Difference)——过滤Z值超出(Mean-Low)~(Mean+High)范围的SR Pixel。一般SR Pixel的Z值大致在平均值±5以内。',
          zhTW:'SR Low & High(Mean Difference)——過濾Z值超出(Mean-Low)~(Mean+High)範圍的SR Pixel。一般SR Pixel的Z值大致在平均值±5以內。',
          ja:'SR Low & High(Mean Difference)——Z値が(Mean-Low)~(Mean+High)の範囲を外れたSR Pixelをフィルタリングします。一般的にSR PixelのZ値は平均±5以内です。'
        }},
        {img:cmImg('I','nbga',105),tx:{
          en:'SR Fitting — without it, the SR plane is simply the mean of the pixel data. With it enabled, the SR plane is computed via a plane-fitting equation (defined by a point and its normal vector). The difference in result is small, so this option isn\'t mandatory.',
          ko:'SR Fitting — 사용하지 않으면 SR Plane은 Pixel 데이터의 평균값으로 계산됩니다. 사용하면 점과 법선 벡터로 정의되는 평면 방정식(Plane Fitting)으로 SR Plane을 계산합니다. 결과 차이가 크지 않아 필수 사용 Parameter는 아닙니다.',
          zhCN:'SR Fitting——不使用时,SR Plane以Pixel数据的平均值计算。启用后,则以点与法向量定义的平面方程式(Plane Fitting)计算SR Plane。由于结果差异不大,并非必须使用的参数。',
          zhTW:'SR Fitting——不使用時,SR Plane以Pixel資料的平均值計算。啟用後,則以點與法向量定義的平面方程式(Plane Fitting)計算SR Plane。由於結果差異不大,並非必須使用的參數。',
          ja:'SR Fitting——使用しない場合、SR PlaneはPixelデータの平均値で計算されます。使用すると、点と法線ベクトルで定義される平面方程式(Plane Fitting)でSR Planeを計算します。結果の差は大きくないため、必須のParameterではありません。'
        }},
        {img:cmImg('I','nbga',106),tx:{
          en:'Redundant (3D) — the same exception-handling concept as the 2D version: a low-importance bump can still Pass even with a Reject-level result, if flagged Redundant. Requires a Redundant Gerber added to Design Spec.',
          ko:'Redundant(3D) — 2D와 동일한 예외 처리 개념으로, 중요도가 낮은 Bump는 Reject 수준의 결과가 나와도 Redundant로 지정되면 Pass 처리됩니다. Design Spec에 Redundant Gerber를 추가해야 사용 가능합니다.',
          zhCN:'Redundant(3D)——与2D相同的例外处理概念,重要度较低的Bump即使出现Reject级别的结果,只要被指定为Redundant即可判定为Pass。需在Design Spec中新增Redundant Gerber方可使用。',
          zhTW:'Redundant(3D)——與2D相同的例外處理概念,重要度較低的Bump即使出現Reject等級的結果,只要被指定為Redundant即可判定為Pass。需在Design Spec中新增Redundant Gerber方可使用。',
          ja:'Redundant(3D)——2Dと同じ例外処理の概念で、重要度の低いBumpはReject相当の結果が出てもRedundantに指定されていればPass扱いとなります。Design SpecにRedundant Gerberを追加する必要があります。'
        }},
        {img:cmImg('I','nbga',107),tx:{
          en:'Redundant (3D) settings — per-die selection, a global on/off toggle applied to all dies, an option to skip redundant handling when a normal bump would reject anyway, and a Copy-All button to replicate settings across dies.',
          ko:'Redundant(3D) 설정 — Die별 선택, 전체 Die 공통 사용 여부, 정상 Bump도 Reject 대상이면 Redundant 처리를 생략하는 옵션, 설정을 다른 Die로 복사하는 Copy All 버튼으로 구성됩니다.',
          zhCN:'Redundant(3D)设置——包含按Die个别选择、套用于全部Die的整体使用与否、正常Bump若为Reject对象时跳过Redundant处理的选项,以及将设置复制到其他Die的Copy All按钮。',
          zhTW:'Redundant(3D)設定——包含按Die個別選擇、套用於全部Die的整體使用與否、正常Bump若為Reject對象時跳過Redundant處理的選項,以及將設定複製到其他Die的Copy All按鈕。',
          ja:'Redundant(3D)設定——Die別選択、全Die共通の使用有無、正常なBumpでもReject対象ならRedundant処理を省略するオプション、設定を他のDieへ複製するCopy Allボタンで構成されます。'
        }},
        {img:cmImg('I','nbga',108),tx:{
          en:'Choose which inspection items get Redundant handling; set the Height Low/High reject spec applied to Redundant Bumps; and choose whether reject judgment is calculated per item (Each) or combined across items (Public).',
          ko:'Redundant를 적용할 검사 항목을 선택하고, Redundant Bump에 적용할 Height Low/High Reject 기준값을 설정하며, Reject 판정을 항목별(Each)로 할지 통합(Public)으로 할지 선택합니다.',
          zhCN:'选择要套用Redundant的检测项目,设置套用于Redundant Bump的Height Low/High Reject基准值,并选择Reject判定是按项目个别计算(Each)还是合并计算(Public)。',
          zhTW:'選擇要套用Redundant的檢測項目,設定套用於Redundant Bump的Height Low/High Reject基準值,並選擇Reject判定是按項目個別計算(Each)還是合併計算(Public)。',
          ja:'Redundantを適用する検査項目を選択し、Redundant Bumpに適用するHeight Low/High Reject基準値を設定、Reject判定を項目ごと(Each)か合算(Public)かを選択します。'
        }},
        {img:cmImg('I','nbga',109),tx:{
          en:'Redundant reject rule (3D) — reject by count or percentage of defects. Redundant Reject Distance also rejects the unit if redundant-bump defects are too close together, even if the redundant condition was otherwise satisfied.',
          ko:'Redundant Reject 판정 방식(3D) — 불량 개수 또는 비율(%) 기준으로 Reject합니다. Redundant Reject Distance는 Redundant 조건을 만족해도 불량 Bump 간 거리가 가까우면 Reject 처리합니다.',
          zhCN:'Redundant Reject判定方式(3D)——依不良数量或比例(%)判定Reject。Redundant Reject Distance则是即使满足Redundant条件,若不良Bump间距过近仍会判定为Reject。',
          zhTW:'Redundant Reject判定方式(3D)——依不良數量或比例(%)判定Reject。Redundant Reject Distance則是即使滿足Redundant條件,若不良Bump間距過近仍會判定為Reject。',
          ja:'Redundant Reject判定方式(3D)——不良数または比率(%)を基準にRejectします。Redundant Reject Distanceは、Redundant条件を満たしていても不良Bump間の距離が近い場合にRejectとします。'
        }},
        {img:cmImg('I','nbga',110),tx:{
          en:'Gain + Offset — aligns this equipment\'s inspection results with another vendor\'s equipment when there\'s a systematic difference. E.g. add +5 to Offset to correct a −5µm bump-height gap, or apply a Gain of 2 to correct a roughly 2× difference.',
          ko:'Gain + Offset — 자사 설비와 타사 설비의 검사 결과가 다를 때 기준을 맞추는 Parameter입니다. 예1) Bump Height 결과가 -5µm 차이나면 Offset +5를 적용해 보정. 예2) 결과가 약 2배 차이나면 Gain 2를 적용해 보정.',
          zhCN:'Gain + Offset——当自家设备与其他厂商设备的检测结果存在差异时,用于统一基准的参数。例1:若Bump Height结果相差约-5µm,可套用Offset +5进行校正。例2:若结果相差约2倍,可套用Gain 2进行校正。',
          zhTW:'Gain + Offset——當自家設備與其他廠商設備的檢測結果存在差異時,用於統一基準的參數。例1:若Bump Height結果相差約-5µm,可套用Offset +5進行校正。例2:若結果相差約2倍,可套用Gain 2進行校正。',
          ja:'Gain + Offset——自社設備と他社設備の検査結果に差がある場合に基準を合わせるParameterです。例1)Bump Height結果が-5µm差の場合、Offset +5を適用して補正。例2)結果が約2倍差の場合、Gain 2を適用して補正。'
        }},
        {img:cmImg('I','nbga',111),tx:{
          en:'Coplanarity is the flatness of the bump tops; CAW is the warpage of the SR plane; Height Copl is Coplanarity corrected for that CAW warpage. Gain/Offset apply a multiply/add correction per inspection item (Gain cannot be 0).',
          ko:'Coplanarity는 Bump 상단의 평탄도, CAW는 SR Plane의 휨(Warpage), Height Copl은 CAW 휨을 보정한 기준의 Coplanarity를 의미합니다. Gain/Offset은 각 검사 항목에 곱셈/덧셈 방식의 보정을 적용합니다(Gain은 0이 될 수 없음).',
          zhCN:'Coplanarity指Bump顶部的平坦度,CAW指SR Plane的翘曲(Warpage),Height Copl指以CAW翘曲校正后的基准所计算的Coplanarity。Gain/Offset对各检测项目分别套用乘法/加法方式的校正(Gain不可为0)。',
          zhTW:'Coplanarity指Bump頂部的平坦度,CAW指SR Plane的翹曲(Warpage),Height Copl指以CAW翹曲校正後的基準所計算的Coplanarity。Gain/Offset對各檢測項目分別套用乘法/加法方式的校正(Gain不可為0)。',
          ja:'CoplanarityはBump上面の平坦度、CAWはSR Planeの反り(Warpage)、Height CoplはそのCAWの反りを補正した基準でのCoplanarityを意味します。Gain/Offsetは各検査項目に乗算/加算方式の補正を適用します(Gainは0にできません)。'
        }},
        {img:cmImg('I','nbga',112),tx:{
          en:'Height Average Ignore — sets what percentage of pixels (sorted by Z) are used to average the bump height. Default is 99%, since this setting has little practical effect on the result.',
          ko:'Height Average Ignore — Bump 높이 평균 계산에 사용할 Pixel의 비율(%)을 설정합니다. 결과에 큰 영향을 주지 않아 기본값 99%를 그대로 사용합니다.',
          zhCN:'Height Average Ignore——设置用于计算Bump高度平均值的Pixel比例(%)。由于对结果影响不大,通常沿用默认值99%。',
          zhTW:'Height Average Ignore——設定用於計算Bump高度平均值的Pixel比例(%)。由於對結果影響不大,通常沿用預設值99%。',
          ja:'Height Average Ignore——Bump高さの平均計算に使用するPixelの割合(%)を設定します。結果への影響が小さいため既定値の99%をそのまま使用します。'
        }},
        {img:cmImg('I','nbga',113),tx:{
          en:'Error Bump — a bump is flagged as an Error Bump if either its valid-Z pixel count falls below the Valid Count in Bump Pixel minimum, or the summed Visibility weight of its inspected pixels falls below the required sum — both signal unreliable data.',
          ko:'Error Bump — Bump의 유효 Z Pixel 수가 Valid Count in Bump Pixel 최소값에 미달하거나, 검사에 사용된 Pixel의 Visibility 가중합이 요구 기준에 미달하면 Error Bump로 판정합니다. 둘 다 데이터 신뢰도가 낮음을 의미합니다.',
          zhCN:'Error Bump——若Bump有效Z Pixel数低于Valid Count in Bump Pixel的最小值,或检测所用Pixel的Visibility加权总和低于要求基准,则判定为Error Bump。两者都代表数据可靠性不足。',
          zhTW:'Error Bump——若Bump有效Z Pixel數低於Valid Count in Bump Pixel的最小值,或檢測所用Pixel的Visibility加權總和低於要求基準,則判定為Error Bump。兩者都代表資料可靠性不足。',
          ja:'Error Bump——Bumpの有効Z Pixel数がValid Count in Bump Pixelの最小値に満たない場合、または検査に使用したPixelのVisibility加重合計が要求基準に満たない場合、Error Bumpと判定されます。いずれもデータの信頼性が低いことを意味します。'
        }},
        {img:cmImg('I','nbga',114),tx:{
          en:'Error Bump rejects a bump even when its height value looks normal, if the underlying pixel data isn\'t trustworthy — judged by the same two conditions (pixel count and Visibility-weight sum) described previously.',
          ko:'Error Bump는 높이 값이 정상으로 보여도 기반 데이터의 신뢰도가 낮으면 불량 처리합니다 — 앞서 설명한 두 조건(Pixel 수, Visibility 가중합)으로 판정합니다.',
          zhCN:'Error Bump即使高度值看似正常,只要底层数据可靠性不足也会判定为不良——依前述两个条件(Pixel数、Visibility加权总和)进行判定。',
          zhTW:'Error Bump即使高度值看似正常,只要底層資料可靠性不足也會判定為不良——依前述兩個條件(Pixel數、Visibility加權總和)進行判定。',
          ja:'Error Bumpは高さの値が正常に見えても、元データの信頼性が低ければ不良として扱います——前述の2条件(Pixel数、Visibility加重合計)で判定します。'
        }},
        {img:cmImg('I','nbga',115),tx:{
          en:'Damage Bump Recalc — Height Upper/Lower define the height range in which a bump is considered possibly damaged. If the measured height falls in that band, it is re-inspected using only the top X% of its pixel data (by Z value).',
          ko:'Damage Bump Recalc — Height Upper/Lower는 손상 의심 구간을 정의합니다. 측정된 Bump 높이가 이 구간에 해당하면, Z값 기준 상위 X% Pixel 데이터만으로 재검사합니다.',
          zhCN:'Damage Bump Recalc——Height Upper/Lower定义可能损坏的高度区间。若测得的Bump高度落在此区间,则仅使用Z值排序前X%的Pixel数据重新检测。',
          zhTW:'Damage Bump Recalc——Height Upper/Lower定義可能損壞的高度區間。若測得的Bump高度落在此區間,則僅使用Z值排序前X%的Pixel資料重新檢測。',
          ja:'Damage Bump Recalc——Height Upper/Lowerは損傷の疑いがある高さ区間を定義します。測定されたBump高さがこの区間に該当する場合、Z値上位X%のPixelデータのみで再検査します。'
        }},
        {img:cmImg('I','nbga',116),tx:{
          en:'The recalculation re-measures height using pixels from the highest Z value down to the Recalc Top Percent cutoff. If that recalculated value meets the Height Spec, the bump is treated as Pass.',
          ko:'재계산은 Z값이 가장 높은 Pixel부터 Recalc Top Percent 비율까지의 데이터로 높이를 다시 측정합니다. 재계산 결과가 Height Spec을 만족하면 해당 Bump는 Pass로 처리됩니다.',
          zhCN:'重新计算是使用从Z值最高的Pixel到Recalc Top Percent比例范围内的数据重新测量高度。若重新计算的结果满足Height Spec,该Bump即判定为Pass。',
          zhTW:'重新計算是使用從Z值最高的Pixel到Recalc Top Percent比例範圍內的資料重新測量高度。若重新計算的結果滿足Height Spec,該Bump即判定為Pass。',
          ja:'再計算はZ値が最も高いPixelからRecalc Top Percentの割合までのデータで高さを再測定します。再計算の結果がHeight Specを満たせば、そのBumpはPass扱いとなります。'
        }},
        {img:cmImg('I','nbga',117),tx:{
          en:'Next: LTS Target — verifying that the 3D inspection optical system\'s performance stays consistent over time.',
          ko:'다음: LTS Target — 3D 검사 광학계의 성능이 시간에 따라 일정하게 유지되는지 검증하는 항목을 다룹니다.',
          zhCN:'接下来:LTS Target——验证3D检测光学系统的性能是否随时间保持一致。',
          zhTW:'接下來:LTS Target——驗證3D檢測光學系統的效能是否隨時間保持一致。',
          ja:'次へ:LTS Target——3D検査光学系の性能が時間の経過とともに一定に保たれているかを検証する項目を扱います。'
        }},
        {img:cmImg('I','nbga',118),tx:{
          en:'2.1.6. LTS Target — the 3D LTS function checks whether the inspection optical system\'s performance stays consistent over time, mainly using a verified LTS step specimen as the reference target.',
          ko:'2.1.6. LTS Target — 3D LTS 기능은 검사 광학계의 성능이 시간에 따라 일정하게 유지되는지 확인합니다. 주로 검증된 LTS Step Specimen을 기준 Target으로 사용합니다.',
          zhCN:'2.1.6. LTS Target——3D LTS功能用于确认检测光学系统的性能是否随时间保持一致,主要使用经过验证的LTS Step Specimen作为基准Target。',
          zhTW:'2.1.6. LTS Target——3D LTS功能用於確認檢測光學系統的效能是否隨時間保持一致,主要使用經過驗證的LTS Step Specimen作為基準Target。',
          ja:'2.1.6. LTS Target——3D LTS機能は検査光学系の性能が時間の経過とともに一定に保たれているかを確認します。主に検証済みのLTS Step Specimenを基準Targetとして使用します。'
        }},
        {img:cmImg('I','nbga',119),tx:{
          en:'LTS Target parameters — ① the distance between the Top and Bottom ROI, based on the Top ROI; ② the current up/down/left/right coordinates of the Top and Bottom ROI; ③ positions the Bottom ROI relative to the Top ROI.',
          ko:'LTS Target Parameter — ① Top ROI 기준 Bottom ROI까지의 거리, ② Top·Bottom ROI의 현재 상하좌우 좌표, ③ Top ROI 대비 Bottom ROI의 위치 지정.',
          zhCN:'LTS Target Parameter——①以Top ROI为基准到Bottom ROI的距离,②Top、Bottom ROI目前的上下左右座标,③以Top ROI为基准设定Bottom ROI的位置。',
          zhTW:'LTS Target Parameter——①以Top ROI為基準到Bottom ROI的距離,②Top、Bottom ROI目前的上下左右座標,③以Top ROI為基準設定Bottom ROI的位置。',
          ja:'LTS Target Parameter——①Top ROI基準でBottom ROIまでの距離、②Top・Bottom ROIの現在の上下左右座標、③Top ROIを基準にBottom ROIの位置を指定。'
        }}
      ]
    }
  },
  J:{
    smtv:{
      title:{ko:'J. Advanced Troubleshooting / Data Verification',en:'J. Advanced Troubleshooting / Data Verification',zhCN:'J. Advanced Troubleshooting / Data Verification',zhTW:'J. Advanced Troubleshooting / Data Verification',ja:'J. Advanced Troubleshooting / Data Verification'},
      slides:[
        {img:cmImg('J','smtv',1),tx:{
          ko:'HW(PC, Camera, Controller) 설정, 2D/3D 광학 Module Tuning, Data 검증을 다룹니다.',
          en:'Covers HW (PC, Camera, Controller) setup, 2D/3D optical Module Tuning, and Data verification.',
          zhCN:'涵盖HW(PC、Camera、Controller)设置、2D/3D光学Module Tuning、Data验证。',
          zhTW:'涵蓋HW(PC、Camera、Controller)設定、2D/3D光學Module Tuning、Data驗證。',
          ja:'HW(PC、Camera、Controller)設定、2D/3D光学Module Tuning、Data検証を扱います。'
        }},
        {img:cmImg('J','smtv',2),tx:{
          en:'Speed·Parameter per axis\n\n1. In Host P/G ▸ Handler ▸ Motor tab, set the Low/Middle/High 3-stage speed and acceleration/deceleration.\n2. Default speed values differ per equipment/customer — refer to the SMTV default and adjust to the site as needed.\n3. In Handler ▸ Map, individually check and adjust Parameters per module: Elevator/Picker/Aligner/JIG/FINS·SINS/Inspector/Multi Sorter/Indexer, etc.',
          ko:'축별 속도·Parameter\n\n1. Host P/G ▸ Handler ▸ Motor 탭에서 Low/Middle/High 3단계 속도·가감속 설정.\n2. 기본 속도값은 설비/고객사마다 다름 — SMTV 기본값 참고 후 현장에 맞게 조정.\n3. Handler ▸ Map에서 Elevator/Picker/Aligner/JIG/FINS·SINS/Inspector/Multi Sorter/Indexer 등 모듈별 Parameter 개별 확인·조정.',
          zhCN:'按轴设置速度·Parameter\n\n1. 在Host P/G ▸ Handler ▸ Motor标签页设置Low/Middle/High三段速度·加减速。\n2. 默认速度值因设备/客户而异——参考SMTV默认值后依现场情况调整。\n3. 在Handler ▸ Map中逐一确认·调整Elevator/Picker/Aligner/JIG/FINS·SINS/Inspector/Multi Sorter/Indexer等各模块Parameter。',
          zhTW:'依軸設定速度·Parameter\n\n1. 在Host P/G ▸ Handler ▸ Motor標籤頁設定Low/Middle/High三段速度·加減速。\n2. 預設速度值因設備/客戶而異——參考SMTV預設值後依現場情況調整。\n3. 在Handler ▸ Map中逐一確認·調整Elevator/Picker/Aligner/JIG/FINS·SINS/Inspector/Multi Sorter/Indexer等各模組Parameter。',
          ja:'軸別速度·Parameter\n\n1. Host P/G ▸ Handler ▸ MotorタブでLow/Middle/Highの3段階速度・加減速を設定する。\n2. デフォルト速度値は設備/顧客ごとに異なる — SMTVデフォルト値を参考にし現場に合わせて調整する。\n3. Handler ▸ MapでElevator/Picker/Aligner/JIG/FINS・SINS/Inspector/Multi Sorter/Indexerなどモジュールごとのパラメータを個別に確認・調整する。'
        }},
        {img:cmImg('J','smtv',3),tx:{
          en:'Step Motor driving principle·Z-axis Pulse/um calculation\n\n1. CW = rotation speed/angle signal, CCW = forward/reverse signal, drive the Step Motor.\n2. Function Setting Switch (SW1): No.1 (R1/R2) sets the Step Angle, No.2 (2P/1P) sets the pulse input mode, No.3 (OFF/FIL) sets the Command Filter.\n3. Besides the STEP Dial, also set the RUN (drive current) and STOP (standstill current) Dials.\n4. Check the Z-axis Ball Screw Pitch (distance moved per rotation). (E.g., 5mm/rotation)\n5. Dial 9 (before Reducer) → Step Angle 0.018° → needs 20,000 pulses per rotation (=360°/0.018°). Dial 6 (after) → Step Angle 0.072° → needs 5,000 pulses per rotation.\n6. Using the ratio (Ball Screw Pitch : Motor Resolution = 1um : χ), calculate the number of pulses (χ) needed to move 1um.\n7. For Dial 9: χ = 1um×20,000pulse / 5mm(5,000um) = 4pulse/um → with a 10:1 Reducer, 40pulse/um.\n8. For Dial 6: χ = 1um×5,000pulse / 5mm(5,000um) = 1pulse/um → with a 10:1 Reducer, 10pulse/um.',
          ko:'Step Motor 구동 원리·Z-axis(Z축) Pulse/um 계산\n\n1. CW=회전속도·각도 신호, CCW=정/역방향 신호로 Step Motor를 구동한다.\n2. Function Setting Switch(SW1)의 No.1(R1/R2)로 Step Angle을, No.2(2P/1P)로 Pulse 입력 방식을, No.3(OFF/FIL)으로 Command Filter를 설정한다.\n3. STEP Dial 외에 RUN(구동 전류)·STOP(정지 전류) Dial도 함께 설정한다.\n4. Z-axis(Z축) Ball Screw Pitch(1회전당 이동 거리)를 확인한다. (예: 5mm/회전)\n5. Dial 9(Reducer 적용 전) → Step Angle 0.018° → 1회전당 20,000pulse(=360°/0.018°) 필요. Dial 6(적용 후) → Step Angle 0.072° → 1회전당 5,000pulse 필요.\n6. 비례식(Ball Screw Pitch : Motor 분해능 = 1um : χ)으로 1um 이동에 필요한 Pulse수(χ)를 계산한다.\n7. Dial 9 기준: χ = 1um×20,000pulse / 5mm(5,000um) = 4pulse/um → Reducer(10:1) 적용 시 40pulse/um.\n8. Dial 6 기준: χ = 1um×5,000pulse / 5mm(5,000um) = 1pulse/um → Reducer(10:1) 적용 시 10pulse/um.',
          zhCN:'Step Motor驱动原理·Z-axis Pulse/um计算\n\n1. CW=转速·角度信号,CCW=正/反方向信号,驱动Step Motor。\n2. Function Setting Switch(SW1)的No.1(R1/R2)设置Step Angle,No.2(2P/1P)设置Pulse输入方式,No.3(OFF/FIL)设置Command Filter。\n3. 除STEP Dial外,还需一并设置RUN(驱动电流)·STOP(停止电流)Dial。\n4. 确认Z-axis Ball Screw Pitch(每转移动距离)。(例:5mm/转)\n5. Dial 9(应用Reducer前)→ Step Angle 0.018°→ 每转需20,000pulse(=360°/0.018°)。Dial 6(应用后)→ Step Angle 0.072°→ 每转需5,000pulse。\n6. 通过比例式(Ball Screw Pitch : Motor分辨率 = 1um : χ)计算移动1um所需的Pulse数(χ)。\n7. 以Dial 9为准:χ = 1um×20,000pulse / 5mm(5,000um) = 4pulse/um → 应用Reducer(10:1)后为40pulse/um。\n8. 以Dial 6为准:χ = 1um×5,000pulse / 5mm(5,000um) = 1pulse/um → 应用Reducer(10:1)后为10pulse/um。',
          zhTW:'Step Motor驅動原理·Z-axis Pulse/um計算\n\n1. CW=轉速·角度訊號,CCW=正/反方向訊號,驅動Step Motor。\n2. Function Setting Switch(SW1)的No.1(R1/R2)設定Step Angle,No.2(2P/1P)設定Pulse輸入方式,No.3(OFF/FIL)設定Command Filter。\n3. 除STEP Dial外,還需一併設定RUN(驅動電流)·STOP(停止電流)Dial。\n4. 確認Z-axis Ball Screw Pitch(每轉移動距離)。(例:5mm/轉)\n5. Dial 9(套用Reducer前)→ Step Angle 0.018°→ 每轉需20,000pulse(=360°/0.018°)。Dial 6(套用後)→ Step Angle 0.072°→ 每轉需5,000pulse。\n6. 透過比例式(Ball Screw Pitch : Motor解析度 = 1um : χ)計算移動1um所需的Pulse數(χ)。\n7. 以Dial 9為準:χ = 1um×20,000pulse / 5mm(5,000um) = 4pulse/um → 套用Reducer(10:1)後為40pulse/um。\n8. 以Dial 6為準:χ = 1um×5,000pulse / 5mm(5,000um) = 1pulse/um → 套用Reducer(10:1)後為10pulse/um。',
          ja:'Step Motor駆動原理・Z-axis Pulse/um計算\n\n1. CW=回転速度・角度信号、CCW=正/逆方向信号でStep Motorを駆動する。\n2. Function Setting Switch(SW1)のNo.1(R1/R2)でStep Angleを、No.2(2P/1P)でPulse入力方式を、No.3(OFF/FIL)でCommand Filterを設定する。\n3. STEP Dialのほか、RUN(駆動電流)・STOP(停止電流)Dialも併せて設定する。\n4. Z-axis(Z軸) Ball Screw Pitch(1回転あたりの移動距離)を確認する。(例:5mm/回転)\n5. Dial 9(Reducer適用前)→ Step Angle 0.018°→ 1回転あたり20,000pulse(=360°/0.018°)必要。Dial 6(適用後)→ Step Angle 0.072°→ 1回転あたり5,000pulse必要。\n6. 比例式(Ball Screw Pitch:Motor分解能=1um:χ)で1um移動に必要なPulse数(χ)を計算する。\n7. Dial 9基準:χ=1um×20,000pulse / 5mm(5,000um)=4pulse/um → Reducer(10:1)適用時40pulse/um。\n8. Dial 6基準:χ=1um×5,000pulse / 5mm(5,000um)=1pulse/um → Reducer(10:1)適用時10pulse/um。'
        }},
        {img:cmImg('J','smtv',4),tx:{
          en:'Focus maintenance principle\n\n1. Make0 = designates the current Motor position as the reference Focus position — continues acquiring images with the Sensor Camera to maintain the specified distance.\n2. Optical triangulation method, Capture Range ±1500um, Focus Update Rate 2KHz.\n3. Check the wiring differences between new/old versions (Laser Camera Link/Power, Ethernet, RS232, Motor Driver/Limit Sensor Connector).',
          ko:'Focus 유지 원리\n\n1. Make0 = 현재 Motor 위치를 기준 Focus 위치로 지정 — Sensor Camera로 이미지를 계속 획득하며 지정 거리 유지.\n2. 광학 삼각측량 방식, Capture Range ±1500um, Focus Update Rate 2KHz.\n3. 신/구버전 배선 차이 확인(Laser Camera Link/Power, Ethernet, RS232, Motor Driver/Limit Sensor Connector).',
          zhCN:'Focus维持原理\n\n1. Make0 = 将当前Motor位置指定为基准Focus位置——持续用Sensor Camera获取影像以维持指定距离。\n2. 光学三角测量方式,Capture Range ±1500um,Focus Update Rate 2KHz。\n3. 确认新/旧版本的接线差异(Laser Camera Link/Power、Ethernet、RS232、Motor Driver/Limit Sensor Connector)。',
          zhTW:'Focus維持原理\n\n1. Make0 = 將目前Motor位置指定為基準Focus位置——持續用Sensor Camera取得影像以維持指定距離。\n2. 光學三角測量方式,Capture Range ±1500um,Focus Update Rate 2KHz。\n3. 確認新/舊版本的接線差異(Laser Camera Link/Power、Ethernet、RS232、Motor Driver/Limit Sensor Connector)。',
          ja:'Focus維持原理\n\n1. Make0 = 現在のMotor位置を基準Focus位置として指定——Sensor Cameraで画像を取得し続け指定距離を維持する。\n2. 光学三角測量方式、Capture Range ±1500um、Focus Update Rate 2KHz。\n3. 新/旧バージョンの配線の違いを確認する(Laser Camera Link/Power、Ethernet、RS232、Motor Driver/Limit Sensor Connector)。'
        }},
        {img:cmImg('J','smtv',5),tx:{
          en:'iAFCTRL/CLCtrl2 Parameters\n\n1. Check the AF1·AF2(·AF3) Firmware version with iSAFProgram and update if needed.\n2. Via iAFCTRL (Ethernet connection) → CLCtrl2, Read & adjust Camera Parameters such as Trigger Mode·Shutter·Gain·Partial Lines.\n3. AF1·AF2 (and AF3 for the 67M 2D-only unit) should be set to the same values; after changes, save via Register→EEPROM.',
          ko:'iAFCTRL/CLCtrl2 Parameter\n\n1. iSAFProgram으로 AF1·AF2(·AF3) Firmware 버전 확인 후 필요시 업데이트.\n2. iAFCTRL(Ethernet 연결) → CLCtrl2로 Trigger Mode·Shutter·Gain·Partial Lines 등 Camera Parameter Read & 조정.\n3. AF1·AF2(·67M 2D 전용 AF3)는 동일 값으로 설정, 변경 후 Register→EEPROM으로 저장.',
          zhCN:'iAFCTRL/CLCtrl2 Parameter\n\n1. 用iSAFProgram确认AF1·AF2(·AF3)的Firmware版本,必要时更新。\n2. 通过iAFCTRL(Ethernet连接)→CLCtrl2对Trigger Mode·Shutter·Gain·Partial Lines等Camera Parameter进行Read及调整。\n3. AF1·AF2(·仅67M 2D专用的AF3)应设为相同值,变更后通过Register→EEPROM保存。',
          zhTW:'iAFCTRL/CLCtrl2 Parameter\n\n1. 用iSAFProgram確認AF1·AF2(·AF3)的Firmware版本,必要時更新。\n2. 透過iAFCTRL(Ethernet連接)→CLCtrl2對Trigger Mode·Shutter·Gain·Partial Lines等Camera Parameter進行Read及調整。\n3. AF1·AF2(·僅67M 2D專用的AF3)應設為相同值,變更後透過Register→EEPROM儲存。',
          ja:'iAFCTRL/CLCtrl2 Parameter\n\n1. iSAFProgramでAF1·AF2(·AF3)のFirmwareバージョンを確認し、必要に応じて更新する。\n2. iAFCTRL(Ethernet接続)→CLCtrl2でTrigger Mode·Shutter·Gain·Partial LinesなどのCamera ParameterをRead&調整する。\n3. AF1·AF2(・67M 2D専用のAF3)は同一値に設定し、変更後Register→EEPROMで保存する。'
        }},
        {img:cmImg('J','smtv',6),tx:{
          en:'E-754 servo initialization·tuning\n\n1. Connect PC-PZT via USB Mini B → run PIMikroMove → initialize with Auto Zero·Servo On·Home.\n2. Current Position fluctuation of 2~30nm is normal; if it exceeds 100nm, Dynamic Tune is needed.\n3. In the Dynamic Tuner, set the Notch Frequency/Rejection, confirm no vibration via Step Response, then save to EEPROM.',
          ko:'E-754 서보 초기화·튜닝\n\n1. USB Mini B로 PC-PZT 연결 → PIMikroMove 실행 → Auto Zero·Servo On·Home으로 초기화.\n2. Current Position 흔들림 2~30nm는 정상, 100nm 초과 시 Dynamic Tune 필요.\n3. Dynamic Tuner에서 Notch Frequency/Rejection 설정 후 Step Response로 진동 없음 확인, EEPROM 저장.',
          zhCN:'E-754伺服初始化·调谐\n\n1. 用USB Mini B连接PC-PZT → 运行PIMikroMove → 通过Auto Zero·Servo On·Home初始化。\n2. Current Position波动2~30nm为正常,超过100nm则需要Dynamic Tune。\n3. 在Dynamic Tuner中设置Notch Frequency/Rejection,通过Step Response确认无振动,保存至EEPROM。',
          zhTW:'E-754伺服初始化·調諧\n\n1. 用USB Mini B連接PC-PZT → 執行PIMikroMove → 透過Auto Zero·Servo On·Home初始化。\n2. Current Position波動2~30nm為正常,超過100nm則需要Dynamic Tune。\n3. 在Dynamic Tuner中設定Notch Frequency/Rejection,透過Step Response確認無振動,儲存至EEPROM。',
          ja:'E-754サーボ初期化・チューニング\n\n1. USB Mini BでPC-PZTを接続 → PIMikroMoveを実行 → Auto Zero・Servo On・Homeで初期化する。\n2. Current Positionの揺れ2~30nmは正常、100nmを超える場合はDynamic Tuneが必要。\n3. Dynamic TunerでNotch Frequency/Rejectionを設定後、Step Responseで振動がないことを確認し、EEPROMに保存する。'
        }},
        {img:cmImg('J','smtv',7),tx:{
          en:'PID Tuning\n\n1. After Servo On via nFControl, confirm normal operation at each Stage position. (Closed-loop soft-high-limit=300/600 is required; 0 means it won\'t operate.)\n2. PID-Tuning: check the LP-Filter (IIR 200Hz) → find the optimal value while watching the graph, in the order P-term(0.01~0.1)·I-term(~100, don\'t use D-term).\n3. Goal: reach the target quickly, without vibration, without overshoot — once done, Save parameter as default.',
          ko:'PID 튜닝\n\n1. nFControl로 Servo On 후 Stage 위치별 정상 동작 확인 (Closed-loop soft-high-limit=300/600 필수, 0이면 미동작).\n2. PID-Tuning: LP-Filter(IIR 200Hz) 확인 → P-term(0.01~0.1)·I-term(~100, D-term 사용금지) 순으로 그래프 보며 최적값 탐색.\n3. 목표: 빠르게·진동없이·오버슈트없이 도달 — 완료 후 Save parameter as default.',
          zhCN:'PID调谐\n\n1. 通过nFControl执行Servo On后,确认各Stage位置正常动作。(Closed-loop soft-high-limit=300/600为必需,若为0则不动作)\n2. PID-Tuning:确认LP-Filter(IIR 200Hz)→按P-term(0.01~0.1)·I-term(~100,禁止使用D-term)的顺序,边看图表边寻找最佳值。\n3. 目标:快速·无振动·无过冲到达——完成后Save parameter as default。',
          zhTW:'PID調諧\n\n1. 透過nFControl執行Servo On後,確認各Stage位置正常動作。(Closed-loop soft-high-limit=300/600為必需,若為0則不動作)\n2. PID-Tuning:確認LP-Filter(IIR 200Hz)→按P-term(0.01~0.1)·I-term(~100,禁止使用D-term)的順序,邊看圖表邊尋找最佳值。\n3. 目標:快速·無振動·無過衝到達——完成後Save parameter as default。',
          ja:'PIDチューニング\n\n1. nFControlでServo On後、Stage位置ごとに正常動作を確認する。(Closed-loop soft-high-limit=300/600必須、0だと動作しない)\n2. PID-Tuning:LP-Filter(IIR 200Hz)を確認 → P-term(0.01~0.1)・I-term(~100、D-termは使用禁止)の順にグラフを見ながら最適値を探る。\n3. 目標:速く・振動なく・オーバーシュートなく到達——完了後Save parameter as defaultする。'
        }},
        {img:cmImg('J','smtv',8),tx:{
          en:'Board Firmware update and illumination check\n\n1. Program→Verify separately with AVR Studio (2D/3D Board) and Quartus Prime (EPM1270).\n2. Confirm normal control of the Oblique/Coaxial illumination per channel with synctestpgm.\n\n⚠ Caution — Flat Cable red wire = Pin 1 — risk of damage if connected in reverse',
          ko:'Board Firmware 갱신 및 조명 확인\n\n1. AVR Studio(2D/3D Board)와 Quartus Prime(EPM1270)으로 각각 Program→Verify 진행.\n2. synctestpgm으로 Oblique/Coaxial 조명 Channel별 정상 제어 확인.\n\n⚠ 주의 — Flat Cable 빨간선=1번핀 — 반대로 연결 시 손상 위험',
          zhCN:'Board Firmware更新及照明确认\n\n1. 分别用AVR Studio(2D/3D Board)和Quartus Prime(EPM1270)进行Program→Verify。\n2. 用synctestpgm确认Oblique/Coaxial照明各Channel正常控制。\n\n⚠ 注意——Flat Cable红线=1号Pin——反向连接有损坏风险',
          zhTW:'Board Firmware更新及照明確認\n\n1. 分別用AVR Studio(2D/3D Board)和Quartus Prime(EPM1270)進行Program→Verify。\n2. 用synctestpgm確認Oblique/Coaxial照明各Channel正常控制。\n\n⚠ 注意——Flat Cable紅線=1號Pin——反向連接有損壞風險',
          ja:'Board Firmware更新及び照明確認\n\n1. AVR Studio(2D/3D Board)とQuartus Prime(EPM1270)でそれぞれProgram→Verifyを行う。\n2. synctestpgmでOblique/Coaxial照明のChannelごとの正常制御を確認する。\n\n⚠ 注意 — Flat Cableの赤線=1番ピン — 逆に接続すると破損の危険'
        }},
        {img:cmImg('J','smtv',9),tx:{
          en:'iGrab-series Firmware·Channel settings\n\n1. Update Firmware with iGrabXEProgrammer → set Channel (Ch_x4/x8) and Memory (50MB) with iGrabGConfig → Apply/Reboot.\n2. Connect via Xml with iCamCommXE and apply Guru Mode Parameters.\n3. In iGrabXECompact, load Master.XCF and confirm the Live FPS matches spec using the F/G Trigger.',
          ko:'iGrab 계열 Firmware·Channel 설정\n\n1. iGrabXEProgrammer로 Firmware 최신화 → iGrabGConfig로 Channel(Ch_x4/x8) 및 Memory(50MB) 설정 → Apply/Reboot.\n2. iCamCommXE로 Xml 연결, Guru Mode Parameter 적용.\n3. iGrabXECompact에서 Master.XCF 로드, F/G Trigger로 Live FPS가 Spec과 일치하는지 확인.',
          zhCN:'iGrab系列Firmware·Channel设置\n\n1. 用iGrabXEProgrammer更新Firmware → 用iGrabGConfig设置Channel(Ch_x4/x8)及Memory(50MB) → Apply/Reboot。\n2. 用iCamCommXE进行Xml连接,应用Guru Mode Parameter。\n3. 在iGrabXECompact中加载Master.XCF,用F/G Trigger确认Live FPS是否与Spec一致。',
          zhTW:'iGrab系列Firmware·Channel設定\n\n1. 用iGrabXEProgrammer更新Firmware → 用iGrabGConfig設定Channel(Ch_x4/x8)及Memory(50MB) → Apply/Reboot。\n2. 用iCamCommXE進行Xml連接,套用Guru Mode Parameter。\n3. 在iGrabXECompact中載入Master.XCF,用F/G Trigger確認Live FPS是否與Spec一致。',
          ja:'iGrabシリーズFirmware·Channel設定\n\n1. iGrabXEProgrammerでFirmwareを最新化 → iGrabGConfigでChannel(Ch_x4/x8)及びMemory(50MB)を設定 → Apply/Reboot。\n2. iCamCommXEでXml接続し、Guru Mode Parameterを適用する。\n3. iGrabXECompactでMaster.XCFをロードし、F/G TriggerでLive FPSがSpecと一致するか確認する。'
        }},
        {img:cmImg('J','smtv',10),tx:{
          en:'Align the reference line with the Center Cross Mark (Spec: within 10um)\n\n1. Place the Reference Tray on the Good Rail.\n2. In the 2D Vision Program, click Illumination 1st....\n3. Turn on the illumination and adjust the Tray position so the Reference Line is visible.\n4. Right-click the screen to activate the Center Cross Mark.\n5. Zoom in to check the gap between the Reference Line and the Center Cross Mark. (Spec: within 10um)',
          ko:'기준선-Center Cross Mark 정렬 (Spec 10um 이내)\n\n1. Good Rail에 Reference Tray를 올린다.\n2. 2D Vision Program에서 Illumination 1st...를 클릭한다.\n3. 조명을 켜고, 기준선(Reference Line)이 보이도록 Tray 위치를 맞춘다.\n4. 화면을 우클릭해 Center Cross Mark를 활성화한다.\n5. 화면을 확대하여 기준선과 Center Cross Mark 사이 간격을 확인한다. (Spec: 10um 이내)',
          zhCN:'對準基准线与Center Cross Mark(Spec 10um以内)\n\n1. 在Good Rail上放置Reference Tray。\n2. 在2D Vision Program中点击Illumination 1st...。\n3. 打开照明,调整Tray位置使Reference Line可见。\n4. 右键点击画面激活Center Cross Mark。\n5. 放大画面确认Reference Line与Center Cross Mark间的间距。(Spec:10um以内)',
          zhTW:'對準基準線與Center Cross Mark(Spec 10um以內)\n\n1. 在Good Rail上放置Reference Tray。\n2. 在2D Vision Program中點擊Illumination 1st...。\n3. 開啟照明,調整Tray位置使Reference Line可見。\n4. 右鍵點擊畫面啟動Center Cross Mark。\n5. 放大畫面確認Reference Line與Center Cross Mark間的間距。(Spec:10um以內)',
          ja:'基準線とCenter Cross Markの整列(Spec 10um以内)\n\n1. Good RailにReference Trayを載せる。\n2. 2D Vision ProgramでIllumination 1st...をクリックする。\n3. 照明を点け、基準線(Reference Line)が見えるようTray位置を合わせる。\n4. 画面を右クリックしてCenter Cross Markを有効化する。\n5. 画面を拡大し、基準線とCenter Cross Markの間隔を確認する。(Spec:10um以内)'
        }},
        {img:cmImg('J','smtv',11),tx:{
          en:'Illumination Frame ↔ Object top: 11mm\n\n1. For the 2D Camera (12M), ensure the distance from the Illumination Frame to the top of the Object (Unit) is 11mm.\n2. Move the Illumination Frame height with the Z-axis to match.\n3. After adjusting the height, re-adjust the Camera position to where the Unit\'s Focus is correct.',
          ko:'Illumination Frame ↔ Object 상단 11mm\n\n1. 2D Camera(12M) 기준, Illumination Frame에서 Object(Unit) 상단까지 거리가 11mm가 되도록 한다.\n2. Z-axis(Z축)로 Illumination Frame 높이를 움직여 맞춘다.\n3. 높이 조정이 끝나면, Unit의 Focus(초점)가 맞는 위치로 Camera 위치를 다시 조정한다.',
          zhCN:'Illumination Frame与Object上端间距11mm\n\n1. 以2D Camera(12M)为基准,使Illumination Frame到Object(Unit)上端的距离为11mm。\n2. 用Z-axis移动Illumination Frame高度以对准。\n3. 高度调整完成后,重新调整Camera位置至Unit对焦准确的位置。',
          zhTW:'Illumination Frame與Object上端間距11mm\n\n1. 以2D Camera(12M)為基準,使Illumination Frame到Object(Unit)上端的距離為11mm。\n2. 用Z-axis移動Illumination Frame高度以對準。\n3. 高度調整完成後,重新調整Camera位置至Unit對焦準確的位置。',
          ja:'Illumination FrameとObject上端の距離11mm\n\n1. 2D Camera(12M)基準で、Illumination FrameからObject(Unit)上端までの距離が11mmになるようにする。\n2. Z-axis(Z軸)でIllumination Frameの高さを動かして合わせる。\n3. 高さ調整が終わったら、UnitのFocus(焦点)が合う位置にCamera位置を再調整する。'
        }},
        {img:cmImg('J','smtv',12),tx:{
          en:'Re-adjust the Lens-Camera Bolt\n\n1. Loosen the Bolt that secures the Lens and Camera.\n2. Move the Camera and Lens to the position where Focus is correct.\n3. Re-fasten the Bolt so the Camera position doesn\'t shift.\n\nCheck point — Images with the focus skewed up or down are all Bad — it must be exactly right to be Good',
          ko:'Lens-Camera Bolt 재조정\n\n1. Lens와 Camera를 고정하는 Bolt를 푼다.\n2. Camera와 Lens를 Focus(초점)가 맞는 위치로 이동한다.\n3. Camera 위치가 변하지 않도록 Bolt를 다시 체결한다.\n\n확인 포인트 — 위/아래로 초점이 치우친 이미지는 모두 Bad — 정확히 맞아야 Good',
          zhCN:'重新调整Lens-Camera的Bolt\n\n1. 松开固定Lens与Camera的Bolt。\n2. 将Camera与Lens移动到Focus(焦点)对准的位置。\n3. 重新锁紧Bolt,使Camera位置不再变动。\n\n确认要点——焦点上下偏移的影像均为Bad——需精确对准才是Good',
          zhTW:'重新調整Lens-Camera的Bolt\n\n1. 鬆開固定Lens與Camera的Bolt。\n2. 將Camera與Lens移動到Focus(焦點)對準的位置。\n3. 重新鎖緊Bolt,使Camera位置不再變動。\n\n確認要點——焦點上下偏移的影像均為Bad——需精確對準才是Good',
          ja:'Lens-Camera Boltの再調整\n\n1. LensとCameraを固定するBoltを緩める。\n2. CameraとLensをFocus(焦点)が合う位置に移動する。\n3. Camera位置が変わらないようBoltを再度締結する。\n\n確認ポイント — 上下にピントがずれた画像はすべてBad — 正確に合っていればGood'
        }},
        {img:cmImg('J','smtv',13),tx:{
          en:'2D Scale Calibration based on the Grid(Matrix) Target\n\n1. Place the Reference Tray on the Good Rail and move it so the Grid(Matrix) Target center is visible.\n2. Set the position based on 4 points on the Grid(Matrix) Target center.\n3. Run Vision Manager ▸ Calibration & Analysis ▸ V3 2D Scale Calibration.\n4. Adjust the illumination so the Target is displayed, click Calibrate, and check the calculated result.\n5. Click Apply Calibration to save the value.\n6. Open the System file in the config folder to confirm the result was applied correctly.',
          ko:'Grid(Matrix) Target 기준 2D Scale Calibration\n\n1. Good Rail에 Reference Tray를 올리고, Grid(Matrix) Target 중심이 보이도록 Tray 위치를 이동한다.\n2. Grid(Matrix) Target 중심 위 4개 지점을 기준으로 위치를 설정한다.\n3. Vision Manager ▸ Calibration & Analysis ▸ V3 2D Scale Calibration을 실행한다.\n4. 조명값을 조정해 Target이 표시되도록 하고, Calibrate 클릭 후 계산 결과를 확인한다.\n5. Apply Calibration을 클릭해 값을 저장한다.\n6. config 폴더의 System 파일을 열어 결과값이 정상 반영되었는지 확인한다.',
          zhCN:'以Grid(Matrix) Target为基准的2D Scale Calibration\n\n1. 在Good Rail上放置Reference Tray,移动Tray使Grid(Matrix) Target中心可见。\n2. 以Grid(Matrix) Target中心上的4个点为基准设置位置。\n3. 执行Vision Manager ▸ Calibration & Analysis ▸ V3 2D Scale Calibration。\n4. 调整照明值使Target显示,点击Calibrate后确认计算结果。\n5. 点击Apply Calibration保存数值。\n6. 打开config文件夹中的System文件,确认结果是否正常反映。',
          zhTW:'以Grid(Matrix) Target為基準的2D Scale Calibration\n\n1. 在Good Rail上放置Reference Tray,移動Tray使Grid(Matrix) Target中心可見。\n2. 以Grid(Matrix) Target中心上的4個點為基準設定位置。\n3. 執行Vision Manager ▸ Calibration & Analysis ▸ V3 2D Scale Calibration。\n4. 調整照明值使Target顯示,點擊Calibrate後確認計算結果。\n5. 點擊Apply Calibration儲存數值。\n6. 開啟config資料夾中的System檔案,確認結果是否正常反映。',
          ja:'Grid(Matrix) Target基準の2D Scale Calibration\n\n1. Good RailにReference Trayを載せ、Grid(Matrix) Targetの中心が見えるようTray位置を移動する。\n2. Grid(Matrix) Target中心上の4地点を基準に位置を設定する。\n3. Vision Manager ▸ Calibration & Analysis ▸ V3 2D Scale Calibrationを実行する。\n4. 照明値を調整しTargetが表示されるようにし、Calibrateをクリックして計算結果を確認する。\n5. Apply Calibrationをクリックして値を保存する。\n6. configフォルダのSystemファイルを開き、結果が正常に反映されたか確認する。'
        }},
        {img:cmImg('J','smtv',14),tx:{
          en:'Align the reference line with the Center Cross Mark (Pedestal-based, Spec 10um)\n\n1. Install the Pedestal on the Jig Indexer.\n2. In the 3D Vision Program, click Illumination 1st....\n3. Turn on the illumination and adjust the Pedestal position so the reference line is visible.\n4. Right-click the screen to activate the Center Cross Mark.\n5. Zoom in to check the gap between the reference line and the Center Cross Mark. (Spec: within 10um)',
          ko:'기준선-Center Cross Mark 정렬 (Pedestal 기준, Spec 10um)\n\n1. Jig Indexer에 Pedestal을 설치한다.\n2. 3D Vision Program에서 Illumination 1st...를 클릭한다.\n3. 조명을 켜고, 기준선이 보이도록 Pedestal 위치를 맞춘다.\n4. 화면을 우클릭해 Center Cross Mark를 활성화한다.\n5. 화면을 확대하여 기준선과 Center Cross Mark 사이 간격을 확인한다. (Spec: 10um 이내)',
          zhCN:'對準基准线与Center Cross Mark(以Pedestal为基准,Spec 10um)\n\n1. 在Jig Indexer上安装Pedestal。\n2. 在3D Vision Program中点击Illumination 1st...。\n3. 打开照明,调整Pedestal位置使基准线可见。\n4. 右键点击画面激活Center Cross Mark。\n5. 放大画面确认基准线与Center Cross Mark间的间距。(Spec:10um以内)',
          zhTW:'對準基準線與Center Cross Mark(以Pedestal為基準,Spec 10um)\n\n1. 在Jig Indexer上安裝Pedestal。\n2. 在3D Vision Program中點擊Illumination 1st...。\n3. 開啟照明,調整Pedestal位置使基準線可見。\n4. 右鍵點擊畫面啟動Center Cross Mark。\n5. 放大畫面確認基準線與Center Cross Mark間的間距。(Spec:10um以內)',
          ja:'基準線とCenter Cross Markの整列(Pedestal基準、Spec 10um)\n\n1. Jig IndexerにPedestalを設置する。\n2. 3D Vision ProgramでIllumination 1st...をクリックする。\n3. 照明を点け、基準線が見えるようPedestal位置を合わせる。\n4. 画面を右クリックしてCenter Cross Markを有効化する。\n5. 画面を拡大し、基準線とCenter Cross Markの間隔を確認する。(Spec:10um以内)'
        }},
        {img:cmImg('J','smtv',15),tx:{
          en:'Lens-Cube B/S 7.7mm·Illumination Frame-Object 11mm\n\n1. Use a distance of 7.7mm from the Lens to the top of the Cube B/S (Beam Splitter) as the standard.\n2. Use a distance of 11mm from the Illumination Frame to the top of the Object (Unit) as the standard.\n3. Complete the Main Camera Focus first, then adjust the Illumination Frame height.\n4. Camera Focus is adjusted using the Vision Module\'s Z-axis.',
          ko:'Lens-Cube B/S 7.7mm·Illumination Frame-Object 11mm\n\n1. Lens에서 Cube B/S(Beam Splitter) 상단까지 거리 7.7mm를 기준으로 한다.\n2. Illumination Frame에서 Object(Unit) 상단까지 거리 11mm를 기준으로 한다.\n3. Main Camera Focus 작업을 먼저 완료한 뒤, Illumination Frame 높이를 조정한다.\n4. Camera Focus는 Vision Module의 Z-axis(Z축)를 사용해 맞춘다.',
          zhCN:'Lens-Cube B/S 7.7mm·Illumination Frame-Object 11mm\n\n1. 以Lens到Cube B/S(Beam Splitter)上端的距离7.7mm为基准。\n2. 以Illumination Frame到Object(Unit)上端的距离11mm为基准。\n3. 先完成Main Camera Focus作业,再调整Illumination Frame高度。\n4. Camera Focus使用Vision Module的Z-axis进行对准。',
          zhTW:'Lens-Cube B/S 7.7mm·Illumination Frame-Object 11mm\n\n1. 以Lens到Cube B/S(Beam Splitter)上端的距離7.7mm為基準。\n2. 以Illumination Frame到Object(Unit)上端的距離11mm為基準。\n3. 先完成Main Camera Focus作業,再調整Illumination Frame高度。\n4. Camera Focus使用Vision Module的Z-axis進行對準。',
          ja:'Lens-Cube B/S 7.7mm・Illumination Frame-Object 11mm\n\n1. LensからCube B/S(Beam Splitter)上端までの距離7.7mmを基準とする。\n2. Illumination FrameからObject(Unit)上端までの距離11mmを基準とする。\n3. Main Camera Focus作業を先に完了させた後、Illumination Frameの高さを調整する。\n4. Camera FocusはVision ModuleのZ-axis(Z軸)を使って合わせる。'
        }},
        {img:cmImg('J','smtv',16),tx:{
          en:'Align the Laser Point → Calibration → save\n\n1. In the BAOI Program, select AF to switch to tuning mode, disconnect, then connect iAFCTRL via Ethernet (AF1: 192.168.1.11 / AF2: 192.168.1.12). (Cannot be connected simultaneously with Host P/G.)\n2. In Handler ▸ Map ▸ JIG1, place the Unit at the center of the Pedestal, use the X-axis·Y-axis to center the Laser on the Unit Bump, and use the AF Z-axis to focus.\n3. Confirm Laser Camera Live via the Camera Sync connection → click LIVE in Tuning Guide ▸ Align Laser ROI.\n4. Switch the LED Controller to MANUAL mode and set CH1 brightness to maximum, then loosen the Bolt and move the Lens left/right to center the bright area on the screen and re-fasten. (When done: Camera Default Set → APPLY ROI & EXIT, and return the LED Controller to REMOTE mode.)\n5. Move the JIG Table so the Laser is over the Unit SR, then click auto in Tuning Guide ▸ Align Laser Beam.\n6. Adjust the Laser Intensity·Angle&Width·Position with the Bolt. Standard: Angle 0~±0.1, Intensity 180~200, Width 7 or less is Good.\n7. In the AF Program, click Make0 to designate the current position as the Focus position.\n8. In the Calibration window, set Scan Start=-100um/Scan End=100um/Scan Num=20/Scan Step=10um/Scan Delay=100ms, then Scan Start. A rising curve = normal (Fitting); a falling curve = the Laser Camera needs to be rotated 180 degrees.\n9. After Homing, save the settings with Save Param.',
          ko:'Laser Point 정렬 → Calibration → 저장\n\n1. BAOI Program에서 AF를 선택해 튜닝 모드로 전환하고 연결 해제 후, iAFCTRL을 Ethernet(AF1: 192.168.1.11 / AF2: 192.168.1.12)으로 연결한다. (Host P/G와 동시 연결 불가)\n2. Handler ▸ Map ▸ JIG1에서 Unit을 Pedestal 중앙에 놓고, X-axis(X축)·Y-axis(Y축)로 Laser를 Unit Bump 중앙에, AF Z-axis(Z축)로 Focus를 맞춘다.\n3. Camera Sync 연결로 Laser Camera Live 확인 → Tuning Guide ▸ Align Laser ROI에서 LIVE 클릭.\n4. LED Controller를 MANUAL 모드로 전환해 CH1 밝기를 최대로 조정한 뒤, Bolt를 풀고 Lens를 좌우로 움직여 밝은 부분을 화면 중앙에 맞추고 재고정한다. (완료 후 Camera Default Set → APPLY ROI & EXIT, LED Controller는 REMOTE 모드로 복귀)\n5. JIG Table을 이동해 Laser가 Unit SR 위에 오도록 한 뒤, Tuning Guide ▸ Align Laser Beam에서 auto를 클릭한다.\n6. Bolt로 Laser Intensity·Angle&Width·Position을 조정한다. 기준: Angle 0~±0.1, Intensity 180~200, Width 7 이하가 Good.\n7. AF Program에서 Make0을 클릭해 현재 위치를 Focus 위치로 지정한다.\n8. Calibration 창에서 Scan Start=-100um/Scan End=100um/Scan Num=20/Scan Step=10um/Scan Delay=100ms 설정 후 Scan Start. 상승곡선=정상(Fitting), 하강곡선=Laser Camera 180도 회전 필요.\n9. Homing 후 Save Param으로 설정을 저장한다.',
          zhCN:'Laser Point对准 → Calibration → 保存\n\n1. 在BAOI Program中选择AF切换到调谐模式并断开连接,然后将iAFCTRL通过Ethernet(AF1:192.168.1.11 / AF2:192.168.1.12)连接。(不可与Host P/G同时连接)\n2. 在Handler ▸ Map ▸ JIG1中将Unit置于Pedestal中央,用X-axis·Y-axis将Laser对准Unit Bump中心,用AF Z-axis对焦。\n3. 通过Camera Sync连接确认Laser Camera Live → 在Tuning Guide ▸ Align Laser ROI中点击LIVE。\n4. 将LED Controller切换为MANUAL模式,将CH1亮度调至最大,然后松开Bolt左右移动Lens使亮部对准画面中央并重新固定。(完成后Camera Default Set → APPLY ROI & EXIT,LED Controller恢复REMOTE模式)\n5. 移动JIG Table使Laser位于Unit SR上方,然后在Tuning Guide ▸ Align Laser Beam中点击auto。\n6. 用Bolt调整Laser Intensity·Angle&Width·Position。基准:Angle 0~±0.1,Intensity 180~200,Width 7以下为Good。\n7. 在AF Program中点击Make0将当前位置指定为Focus位置。\n8. 在Calibration窗口设置Scan Start=-100um/Scan End=100um/Scan Num=20/Scan Step=10um/Scan Delay=100ms后Scan Start。上升曲线=正常(Fitting),下降曲线=需将Laser Camera旋转180度。\n9. Homing后用Save Param保存设置。',
          zhTW:'Laser Point對準 → Calibration → 儲存\n\n1. 在BAOI Program中選擇AF切換到調諧模式並斷開連接,然後將iAFCTRL透過Ethernet(AF1:192.168.1.11 / AF2:192.168.1.12)連接。(不可與Host P/G同時連接)\n2. 在Handler ▸ Map ▸ JIG1中將Unit置於Pedestal中央,用X-axis·Y-axis將Laser對準Unit Bump中心,用AF Z-axis對焦。\n3. 透過Camera Sync連接確認Laser Camera Live → 在Tuning Guide ▸ Align Laser ROI中點擊LIVE。\n4. 將LED Controller切換為MANUAL模式,將CH1亮度調至最大,然後鬆開Bolt左右移動Lens使亮部對準畫面中央並重新固定。(完成後Camera Default Set → APPLY ROI & EXIT,LED Controller恢復REMOTE模式)\n5. 移動JIG Table使Laser位於Unit SR上方,然後在Tuning Guide ▸ Align Laser Beam中點擊auto。\n6. 用Bolt調整Laser Intensity·Angle&Width·Position。基準:Angle 0~±0.1,Intensity 180~200,Width 7以下為Good。\n7. 在AF Program中點擊Make0將目前位置指定為Focus位置。\n8. 在Calibration視窗設定Scan Start=-100um/Scan End=100um/Scan Num=20/Scan Step=10um/Scan Delay=100ms後Scan Start。上升曲線=正常(Fitting),下降曲線=需將Laser Camera旋轉180度。\n9. Homing後用Save Param儲存設定。',
          ja:'Laser Point整列 → Calibration → 保存\n\n1. BAOI ProgramでAFを選択しチューニングモードに切り替え接続を解除した後、iAFCTRLをEthernet(AF1:192.168.1.11 / AF2:192.168.1.12)で接続する。(Host P/Gとの同時接続不可)\n2. Handler ▸ Map ▸ JIG1でUnitをPedestal中央に置き、X-axis・Y-axisでLaserをUnit Bump中心に、AF Z-axisでFocusを合わせる。\n3. Camera Sync接続でLaser Camera Liveを確認 → Tuning Guide ▸ Align Laser ROIでLIVEをクリックする。\n4. LED ControllerをMANUALモードに切り替えCH1輝度を最大に調整した後、Boltを緩めLensを左右に動かして明るい部分を画面中央に合わせ再固定する。(完了後Camera Default Set → APPLY ROI & EXIT、LED ControllerはREMOTEモードに戻す)\n5. JIG Tableを移動しLaserがUnit SR上に来るようにした後、Tuning Guide ▸ Align Laser Beamでautoをクリックする。\n6. BoltでLaser Intensity・Angle&Width・Positionを調整する。基準:Angle 0~±0.1、Intensity 180~200、Width 7以下がGood。\n7. AF ProgramでMake0をクリックし現在位置をFocus位置に指定する。\n8. Calibrationウィンドウで Scan Start=-100um/Scan End=100um/Scan Num=20/Scan Step=10um/Scan Delay=100msを設定後Scan Startする。上昇曲線=正常(Fitting)、下降曲線=Laser Cameraを180度回転させる必要あり。\n9. Homing後、Save Paramで設定を保存する。'
        }},
        {img:cmImg('J','smtv',17),tx:{
          en:'Adjust flatness based on the Tilt Block (Total Average=0)\n\n1. Right-click at the top of Vision Manager ▸ Tool ▸ run the V1,2 TiltCheck Tool and prepare the Tilt Block.\n2. In the Illum tab, set the illumination channel (CH01~CH03 for 3D); in the Spec tab, set Scan Step=10, Scan Count=30, Block size=256(16x16).\n3. Place the Tilt Block at the center of the Pedestal with the glossy side facing up.\n4. Watching the live image, move the Jig (Y-axis) Table and Vision Module (X-axis) to where the Tilt Block is visible.\n5. Move the Z-axis Motor to the In Focus position and find the focus center with Single Tracking.\n6. Click the Scan button to check the Total Average value. If (+), lower the Z-axis; if (-), raise it — repeat until it reaches 0, then click Make0.\n7. Watching the Boundary Plane Image Map, adjust the optical module back and forth. (Using Bolt+Micrometer; the colors above/below must align to be Good.)\n8. Watching the Raw Image Map, adjust the optical module left and right. (Based on the Range value, using Bolt+Micrometer.)\n9. Perform re-verification scans at least twice more until the final criteria are met (Total Average within ±2, Range within 5).\n\nCheck point — Tolerance criteria — Total Average within ±5, Range within 10',
          ko:'Tilt Block 기준 평탄도 조정 (Total Average=0)\n\n1. Vision Manager 상단 우클릭 ▸ Tool ▸ V1,2 TiltCheck Tool을 실행하고 Tilt Block을 준비한다.\n2. Illum 탭에서 조명 채널(3D는 CH01~CH03) 설정, Spec 탭에서 Scan Step=10, Scan Count=30, Block size=256(16x16)으로 설정한다.\n3. Tilt Block을 Pedestal 중앙에 광택면이 위로 오도록 배치한다.\n4. Live 화면을 보며 Jig(Y-axis(Y축)) Table과 Vision Module(X-axis(X축))을 움직여 Tilt Block이 보이는 위치로 이동한다.\n5. Z-axis(Z축) Motor를 In Focus 위치로 이동하고 Single Tracking으로 초점 중심을 찾는다.\n6. Scan 버튼을 클릭해 Total Average 값을 확인한다. (+)면 Z-axis(Z축)를 내리고 (-)면 올려서 0이 되도록 반복 조정 후 Make0을 클릭한다.\n7. Boundary Plane Image Map을 보며 광학계 모듈을 전후로 조정한다. (Bolt+Micrometer, 상하 색상 정렬되어야 Good)\n8. Raw Image Map을 보며 광학계 모듈을 좌우로 조정한다. (Range 값 기준, Bolt+Micrometer 사용)\n9. 최종 기준(Total Average ±2 이내, Range 5 이내)을 만족할 때까지 2회 이상 재확인 Scan을 수행한다.\n\n확인 포인트 — 여유 기준 — Total Average ±5 이내, Range 10 이내',
          zhCN:'以Tilt Block为基准调整平坦度(Total Average=0)\n\n1. 在Vision Manager顶部右键 ▸ Tool ▸ 执行V1,2 TiltCheck Tool并准备Tilt Block。\n2. 在Illum标签页设置照明通道(3D为CH01~CH03),在Spec标签页设置Scan Step=10、Scan Count=30、Block size=256(16x16)。\n3. 将Tilt Block光泽面朝上放置于Pedestal中央。\n4. 观看Live画面,移动Jig(Y-axis)Table与Vision Module(X-axis)至可看见Tilt Block的位置。\n5. 将Z-axis Motor移至In Focus位置,用Single Tracking寻找对焦中心。\n6. 点击Scan按钮确认Total Average值。若为(+)则降低Z-axis,若为(-)则升高,反复调整至0后点击Make0。\n7. 观看Boundary Plane Image Map,前后调整光学模块。(使用Bolt+Micrometer,上下颜色需对齐才是Good)\n8. 观看Raw Image Map,左右调整光学模块。(以Range值为基准,使用Bolt+Micrometer)\n9. 反复进行2次以上确认Scan,直到满足最终标准(Total Average ±2以内,Range 5以内)。\n\n确认要点——容许标准——Total Average ±5以内,Range 10以内',
          zhTW:'以Tilt Block為基準調整平坦度(Total Average=0)\n\n1. 在Vision Manager頂部右鍵 ▸ Tool ▸ 執行V1,2 TiltCheck Tool並準備Tilt Block。\n2. 在Illum標籤頁設定照明通道(3D為CH01~CH03),在Spec標籤頁設定Scan Step=10、Scan Count=30、Block size=256(16x16)。\n3. 將Tilt Block光澤面朝上放置於Pedestal中央。\n4. 觀看Live畫面,移動Jig(Y-axis)Table與Vision Module(X-axis)至可看見Tilt Block的位置。\n5. 將Z-axis Motor移至In Focus位置,用Single Tracking尋找對焦中心。\n6. 點擊Scan按鈕確認Total Average值。若為(+)則降低Z-axis,若為(-)則升高,反覆調整至0後點擊Make0。\n7. 觀看Boundary Plane Image Map,前後調整光學模組。(使用Bolt+Micrometer,上下顏色需對齊才是Good)\n8. 觀看Raw Image Map,左右調整光學模組。(以Range值為基準,使用Bolt+Micrometer)\n9. 反覆進行2次以上確認Scan,直到滿足最終標準(Total Average ±2以內,Range 5以內)。\n\n確認要點——容許標準——Total Average ±5以內,Range 10以內',
          ja:'Tilt Block基準の平坦度調整(Total Average=0)\n\n1. Vision Manager上部右クリック ▸ Tool ▸ V1,2 TiltCheck Toolを実行しTilt Blockを準備する。\n2. Illumタブで照明チャンネル(3DはCH01~CH03)を設定、Specタブで Scan Step=10、Scan Count=30、Block size=256(16x16)に設定する。\n3. Tilt Blockを光沢面が上になるようPedestal中央に配置する。\n4. Live画面を見ながらJig(Y-axis)TableとVision Module(X-axis)を動かしTilt Blockが見える位置へ移動する。\n5. Z-axis Motorを In Focus位置へ移動しSingle Trackingで焦点中心を探す。\n6. Scanボタンをクリックして Total Average値を確認する。(+)ならZ-axisを下げ、(-)なら上げて0になるよう繰り返し調整後Make0をクリックする。\n7. Boundary Plane Image Mapを見ながら光学系モジュールを前後に調整する。(Bolt+Micrometer使用、上下の色が揃うとGood)\n8. Raw Image Mapを見ながら光学系モジュールを左右に調整する。(Range値基準、Bolt+Micrometer使用)\n9. 最終基準(Total Average ±2以内、Range 5以内)を満たすまで2回以上再確認Scanを行う。\n\n確認ポイント — 余裕基準 — Total Average ±5以内、Range 10以内'
        }},
        {img:cmImg('J','smtv',18),tx:{
          en:'Adjust the aperture based on the Optical Mirror (Intensity 1.6 / RGB 160)\n\n1. Place the Optical Mirror at the center of the Pedestal.\n2. Watching the live image, move the Jig (Y-axis) Table and Vision Module (X-axis) to where the Optical Mirror is visible.\n3. Move the Z-axis Motor to the In Focus position and find the focus center with Single Tracking.\n4. In the Vision Program, run Illumination 1st....\n5. Select the 3D Image Frame and set the Intensity to 1.6.\n6. Right-click the screen ▸ select Show pixel info, then adjust the aperture so the RGB value at the top of the screen is 160.',
          ko:'Optical Mirror 기준 조리개 조정 (Intensity 1.6 / RGB 160)\n\n1. Optical Mirror를 Pedestal 중앙에 놓는다.\n2. Live 화면을 보며 Jig(Y-axis(Y축)) Table과 Vision Module(X-axis(X축))을 움직여 Optical Mirror가 보이는 위치로 이동한다.\n3. Z-axis(Z축) Motor를 In Focus 위치로 이동하고 Single Tracking으로 초점 중심을 찾는다.\n4. Vision Program에서 Illumination 1st...를 실행한다.\n5. 3D Image Frame을 선택하고 Intensity를 1.6으로 설정한다.\n6. 화면 우클릭 ▸ Show pixel info 선택 후, 화면 상단 RGB 값이 160이 되도록 조리개(Aperture)를 조정한다.',
          zhCN:'以Optical Mirror为基准调整光圈(Intensity 1.6 / RGB 160)\n\n1. 将Optical Mirror放置于Pedestal中央。\n2. 观看Live画面,移动Jig(Y-axis)Table与Vision Module(X-axis)至可看见Optical Mirror的位置。\n3. 将Z-axis Motor移至In Focus位置,用Single Tracking寻找对焦中心。\n4. 在Vision Program中执行Illumination 1st...。\n5. 选择3D Image Frame,将Intensity设为1.6。\n6. 右键点击画面 ▸ 选择Show pixel info后,调整光圈(Aperture)使画面顶部RGB值为160。',
          zhTW:'以Optical Mirror為基準調整光圈(Intensity 1.6 / RGB 160)\n\n1. 將Optical Mirror放置於Pedestal中央。\n2. 觀看Live畫面,移動Jig(Y-axis)Table與Vision Module(X-axis)至可看見Optical Mirror的位置。\n3. 將Z-axis Motor移至In Focus位置,用Single Tracking尋找對焦中心。\n4. 在Vision Program中執行Illumination 1st...。\n5. 選擇3D Image Frame,將Intensity設為1.6。\n6. 右鍵點擊畫面 ▸ 選擇Show pixel info後,調整光圈(Aperture)使畫面頂部RGB值為160。',
          ja:'Optical Mirror基準の絞り調整(Intensity 1.6 / RGB 160)\n\n1. Optical MirrorをPedestal中央に置く。\n2. Live画面を見ながらJig(Y-axis)TableとVision Module(X-axis)を動かしOptical Mirrorが見える位置へ移動する。\n3. Z-axis Motorを In Focus位置へ移動しSingle Trackingで焦点中心を探す。\n4. Vision ProgramでIllumination 1st...を実行する。\n5. 3D Image Frameを選択しIntensityを1.6に設定する。\n6. 画面右クリック ▸ Show pixel infoを選択後、画面上部のRGB値が160になるよう絞り(Aperture)を調整する。'
        }},
        {img:cmImg('J','smtv',19),tx:{
          en:'Remove foreign matter from the Reference Mirror\n\n1. Move the Jig Indexer out of the Camera\'s field of view.\n2. In the Vision Program, run Illumination 1st....\n3. Adjust the 3D Image Frame Intensity to Bright and zoom in on the live image — anything that appears sharp at an out-of-focus height is foreign matter.\n4. The Reference Mirror is located as shown in the diagram — open the Cover to check for foreign matter.\n5. Clean the Mirror until no foreign matter is visible. (Be careful of scratches while cleaning.)\n6. After cleaning, close all external Covers on the Reference Mirror Module to prevent dust ingress.',
          ko:'Reference Mirror 이물 제거\n\n1. Jig Indexer를 Camera 시야 밖으로 이동시킨다.\n2. Vision Program에서 Illumination 1st...를 실행한다.\n3. 3D Image Frame Intensity를 Bright로 조정해 Live 화면을 확대하면, 초점 밖 높이에서 선명하게 보이는 것이 이물질이다.\n4. Reference Mirror 위치는 그림과 같다 — Cover를 열어 이물을 확인한다.\n5. 이물이 보이지 않을 때까지 Mirror를 세척한다. (세척 중 Scratch 주의)\n6. 세척 후 먼지 유입 방지를 위해 Reference Mirror Module의 모든 외부 Cover를 닫는다.',
          zhCN:'清除Reference Mirror上的异物\n\n1. 将Jig Indexer移出Camera视野。\n2. 在Vision Program中执行Illumination 1st...。\n3. 将3D Image Frame Intensity调整为Bright并放大Live画面,在离焦高度仍清晰可见的即为异物。\n4. Reference Mirror位置如图所示——打开Cover确认异物。\n5. 清洁Mirror直至看不到异物为止。(清洁时注意Scratch)\n6. 清洁后为防止灰尘进入,关闭Reference Mirror Module的所有外部Cover。',
          zhTW:'清除Reference Mirror上的異物\n\n1. 將Jig Indexer移出Camera視野。\n2. 在Vision Program中執行Illumination 1st...。\n3. 將3D Image Frame Intensity調整為Bright並放大Live畫面,在離焦高度仍清晰可見的即為異物。\n4. Reference Mirror位置如圖所示——開啟Cover確認異物。\n5. 清潔Mirror直至看不到異物為止。(清潔時注意Scratch)\n6. 清潔後為防止灰塵進入,關閉Reference Mirror Module的所有外部Cover。',
          ja:'Reference Mirrorの異物除去\n\n1. Jig IndexerをCamera視野外へ移動させる。\n2. Vision ProgramでIllumination 1st...を実行する。\n3. 3D Image Frame IntensityをBrightに調整しLive画面を拡大すると、ピント外の高さで鮮明に見えるものが異物である。\n4. Reference Mirrorの位置は図の通り——Coverを開けて異物を確認する。\n5. 異物が見えなくなるまでMirrorを清掃する。(清掃中Scratchに注意)\n6. 清掃後、埃の侵入防止のためReference Mirror Moduleのすべての外部Coverを閉じる。'
        }},
        {img:cmImg('J','smtv',20),tx:{
          en:'Secure the Fringe width with the Micrometer, fix the illumination at 1.6us\n\n1. Place the Optical Mirror at the center of the Jig Table.\n2. Watching the live image, move the Jig (Y-axis) Table and Vision Module (X-axis) to where the Optical Mirror is visible.\n3. Move the Z-axis Motor to the In Focus position and find the focus center with Single Tracking.\n4. Adjust the Micrometer on the Reference Mirror Module to find the Fringe (fine stripes). (Check in the live image of the Illum Control window.)\n5. Widen the Fringe with the Mirror Tilt adjustment lever, then fine-tune with the Micrometer to find the brightest state.\n6. Fix the illumination value at 1.6us and close the Illum Control window.',
          ko:'Micrometer로 Fringe 폭 확보·조명값 1.6us 고정\n\n1. Optical Mirror를 Jig Table 중앙에 놓는다.\n2. Live 화면을 보며 Jig(Y-axis(Y축)) Table과 Vision Module(X-axis(X축))을 움직여 Optical Mirror가 보이는 위치로 이동한다.\n3. Z-axis(Z축) Motor를 In Focus 위치로 이동하고 Single Tracking으로 초점 중심을 찾는다.\n4. Reference Mirror Module의 Micrometer를 조정해 Fringe(가는 줄무늬)를 찾는다. (Illum Control 창의 Live 화면에서 확인)\n5. Mirror Tilt 조정 Lever로 Fringe 폭을 넓힌 뒤, Micrometer로 미세조정하여 가장 밝은 상태를 찾는다.\n6. 조명값을 1.6us로 고정하고 Illum Control 창을 닫는다.',
          zhCN:'用Micrometer确保Fringe宽度·照明值固定为1.6us\n\n1. 将Optical Mirror放置于Jig Table中央。\n2. 观看Live画面,移动Jig(Y-axis)Table与Vision Module(X-axis)至可看见Optical Mirror的位置。\n3. 将Z-axis Motor移至In Focus位置,用Single Tracking寻找对焦中心。\n4. 调整Reference Mirror Module的Micrometer寻找Fringe(细条纹)。(在Illum Control窗口的Live画面中确认)\n5. 用Mirror Tilt调整杆扩大Fringe宽度后,用Micrometer微调找到最亮状态。\n6. 将照明值固定为1.6us并关闭Illum Control窗口。',
          zhTW:'用Micrometer確保Fringe寬度·照明值固定為1.6us\n\n1. 將Optical Mirror放置於Jig Table中央。\n2. 觀看Live畫面,移動Jig(Y-axis)Table與Vision Module(X-axis)至可看見Optical Mirror的位置。\n3. 將Z-axis Motor移至In Focus位置,用Single Tracking尋找對焦中心。\n4. 調整Reference Mirror Module的Micrometer尋找Fringe(細條紋)。(在Illum Control視窗的Live畫面中確認)\n5. 用Mirror Tilt調整桿擴大Fringe寬度後,用Micrometer微調找到最亮狀態。\n6. 將照明值固定為1.6us並關閉Illum Control視窗。',
          ja:'Micrometerで Fringe幅を確保・照明値1.6usに固定\n\n1. Optical MirrorをJig Table中央に置く。\n2. Live画面を見ながらJig(Y-axis)TableとVision Module(X-axis)を動かしOptical Mirrorが見える位置へ移動する。\n3. Z-axis Motorを In Focus位置へ移動しSingle Trackingで焦点中心を探す。\n4. Reference Mirror ModuleのMicrometerを調整しFringe(細い縞模様)を探す。(Illum ControlウィンドウのLive画面で確認)\n5. Mirror Tilt調整レバーでFringe幅を広げた後、Micrometerで微調整して最も明るい状態を探す。\n6. 照明値を1.6usに固定しIllum Controlウィンドウを閉じる。'
        }},
        {img:cmImg('J','smtv',21),tx:{
          en:'Apply the Wave Length Calibration result 620~640 (630 recommended)\n\n1. In the Vision Window\'s Utility function, select Wave Length Calibration: 20x and wait for the result.\n2. When the result appears in the center of the Vision Window, close with OK. (Typically 620~640; the closer to 630 the better.)\n3. Confirm the Wave Length value in the Illum Control window matches the measured result, then close the window.',
          ko:'Wave Length Calibration 결과 620~640(630 권장) 반영\n\n1. Vision Window의 Utility 기능에서 Wave Length Calibration : 20x를 선택하고 결과를 기다린다.\n2. Vision Window 중앙에 결과값이 나타나면 OK로 종료한다. (일반적으로 620~640, 630에 가까울수록 Good)\n3. Illum Control 창의 Wave Length 값이 측정 결과와 동일하게 저장되었는지 확인한 뒤 창을 닫는다.',
          zhCN:'反映Wave Length Calibration结果620~640(建议630)\n\n1. 在Vision Window的Utility功能中选择Wave Length Calibration:20x,等待结果。\n2. 结果显示在Vision Window中央后,点击OK结束。(通常为620~640,越接近630越Good)\n3. 确认Illum Control窗口的Wave Length值与测量结果一致后关闭窗口。',
          zhTW:'反映Wave Length Calibration結果620~640(建議630)\n\n1. 在Vision Window的Utility功能中選擇Wave Length Calibration:20x,等待結果。\n2. 結果顯示在Vision Window中央後,點擊OK結束。(通常為620~640,越接近630越Good)\n3. 確認Illum Control視窗的Wave Length值與測量結果一致後關閉視窗。',
          ja:'Wave Length Calibration結果620~640(630推奨)を反映\n\n1. Vision WindowのUtility機能でWave Length Calibration:20xを選択し結果を待つ。\n2. Vision Window中央に結果値が表示されたらOKで終了する。(通常620~640、630に近いほどGood)\n3. Illum ControlウィンドウのWave Length値が測定結果と同じに保存されているか確認しウィンドウを閉じる。'
        }},
        {img:cmImg('J','smtv',22),tx:{
          en:'Zmap Compensation On → rotate 90° three times → calculate the Distortion Map\n\n1. Place the Optical Mirror at the center of the Jig Table.\n2. Watching the live image, move the Jig (Y-axis) Table and Vision Module (X-axis) to where the Optical Mirror is visible, and focus using the Z-axis.\n3. Check the Fringe in the Illum Control window.\n4. In the Vision Window\'s Inspection menu, run Distortion, check Zmap Compensation On, then select Calculate Zmap compensation.\n5. When the "Set optical flat mirror" message appears, confirm readiness and click OK.\n6. During Get ZMap, when the "Rotate mirror 90 degrees" message appears, rotate the Optical Mirror 90° at a time, three times total, always in the same direction.\n7. After Accumulate ZMap completes and the Calculate Distortion Map computation finishes, click OK on the completion message.',
          ko:'Zmap Compensation On → 90도 3회 회전 → Distortion Map 계산\n\n1. Optical Mirror를 Jig Table 중앙에 놓는다.\n2. Live 화면을 보며 Jig(Y-axis(Y축)) Table과 Vision Module(X-axis(X축))을 움직여 Optical Mirror가 보이는 위치로 이동하고, Z-axis(Z축)로 초점을 맞춘다.\n3. Illum Control 창에서 Fringe를 확인한다.\n4. Vision Window의 Inspection 메뉴에서 Distortion을 실행하고, Zmap Compensation On을 체크한 뒤 Calculate Zmap compensation을 선택한다.\n5. Set optical flat mirror 메시지가 뜨면 준비 상태를 확인하고 OK를 클릭한다.\n6. Get ZMap 진행 중 Rotate mirror 90 degrees 메시지가 나오면 Optical Mirror를 90도씩 총 3회, 항상 같은 방향으로 회전시킨다.\n7. Accumulate ZMap 완료 후 Calculate Distortion Map 계산이 끝나면 완료 메시지에서 OK를 클릭한다.',
          zhCN:'Zmap Compensation On → 旋转90度3次 → 计算Distortion Map\n\n1. 将Optical Mirror放置于Jig Table中央。\n2. 观看Live画面,移动Jig(Y-axis)Table与Vision Module(X-axis)至可看见Optical Mirror的位置,并用Z-axis对焦。\n3. 在Illum Control窗口确认Fringe。\n4. 在Vision Window的Inspection菜单中执行Distortion,勾选Zmap Compensation On后选择Calculate Zmap compensation。\n5. 出现Set optical flat mirror讯息时,确认准备状态后点击OK。\n6. Get ZMap过程中出现Rotate mirror 90 degrees讯息时,将Optical Mirror每次旋转90度,共3次,始终朝同一方向旋转。\n7. Accumulate ZMap完成后,Calculate Distortion Map计算结束时,在完成讯息中点击OK。',
          zhTW:'Zmap Compensation On → 旋轉90度3次 → 計算Distortion Map\n\n1. 將Optical Mirror放置於Jig Table中央。\n2. 觀看Live畫面,移動Jig(Y-axis)Table與Vision Module(X-axis)至可看見Optical Mirror的位置,並用Z-axis對焦。\n3. 在Illum Control視窗確認Fringe。\n4. 在Vision Window的Inspection選單中執行Distortion,勾選Zmap Compensation On後選擇Calculate Zmap compensation。\n5. 出現Set optical flat mirror訊息時,確認準備狀態後點擊OK。\n6. Get ZMap過程中出現Rotate mirror 90 degrees訊息時,將Optical Mirror每次旋轉90度,共3次,始終朝同一方向旋轉。\n7. Accumulate ZMap完成後,Calculate Distortion Map計算結束時,在完成訊息中點擊OK。',
          ja:'Zmap Compensation On → 90度3回回転 → Distortion Map計算\n\n1. Optical MirrorをJig Table中央に置く。\n2. Live画面を見ながらJig(Y-axis)TableとVision Module(X-axis)を動かしOptical Mirrorが見える位置へ移動し、Z-axisで焦点を合わせる。\n3. Illum Controlウィンドウで Fringeを確認する。\n4. Vision WindowのInspectionメニューでDistortionを実行し、Zmap Compensation Onにチェックした後Calculate Zmap compensationを選択する。\n5. Set optical flat mirrorメッセージが表示されたら準備状態を確認しOKをクリックする。\n6. Get ZMap進行中にRotate mirror 90 degreesメッセージが出たら、Optical Mirrorを90度ずつ計3回、常に同じ方向へ回転させる。\n7. Accumulate ZMap完了後、Calculate Distortion Mapの計算が終わったら完了メッセージでOKをクリックする。'
        }},
        {img:cmImg('J','smtv',23),tx:{
          en:'2D Scale Calibration based on the Matrix/Grid Target\n\n1. Move the Jig (Y-axis) Table and Vision Module (X-axis) so the Matrix Target is centered in the optical module screen.\n2. Move the optical module\'s Z-axis to focus on the Matrix Target.\n3. Move the X-axis, Y-axis, and Z-axis so the Grid Target appears clearly.\n4. Run Vision Manager ▸ Calibration & Analysis ▸ Vision 2D Scale Calibration.\n5. Adjust the illumination to display the Target, click Calibrate to check the calculated result, and save with Apply Calibration.\n6. Open the System3D file in the config folder to confirm the result was applied correctly.',
          ko:'Matrix/Grid Target 기준 2D Scale Calibration\n\n1. Jig(Y-axis(Y축)) Table과 Vision Module(X-axis(X축))을 움직여 Matrix Target이 광학 모듈 화면 중앙에 오도록 한다.\n2. 광학계 모듈의 Z-axis(Z축)를 움직여 Matrix Target에 초점을 맞춘다.\n3. X-axis(X축), Y-axis(Y축), Z-axis(Z축)를 움직여 Grid Target이 선명하게 보이도록 한다.\n4. Vision Manager ▸ Calibration & Analysis ▸ Vision 2D Scale Calibration을 실행한다.\n5. 조명값을 조정해 Target을 표시하고, Calibrate 클릭 후 계산 결과를 확인, Apply Calibration으로 저장한다.\n6. config 폴더의 System3D 파일을 열어 결과값이 정상 반영되었는지 확인한다.',
          zhCN:'以Matrix/Grid Target为基准的2D Scale Calibration\n\n1. 移动Jig(Y-axis)Table与Vision Module(X-axis)使Matrix Target位于光学模块画面中央。\n2. 移动光学模块的Z-axis对Matrix Target对焦。\n3. 移动X-axis、Y-axis、Z-axis使Grid Target清晰可见。\n4. 执行Vision Manager ▸ Calibration & Analysis ▸ Vision 2D Scale Calibration。\n5. 调整照明值显示Target,点击Calibrate确认计算结果,并用Apply Calibration保存。\n6. 打开config文件夹中的System3D文件,确认结果是否正常反映。',
          zhTW:'以Matrix/Grid Target為基準的2D Scale Calibration\n\n1. 移動Jig(Y-axis)Table與Vision Module(X-axis)使Matrix Target位於光學模組畫面中央。\n2. 移動光學模組的Z-axis對Matrix Target對焦。\n3. 移動X-axis、Y-axis、Z-axis使Grid Target清晰可見。\n4. 執行Vision Manager ▸ Calibration & Analysis ▸ Vision 2D Scale Calibration。\n5. 調整照明值顯示Target,點擊Calibrate確認計算結果,並用Apply Calibration儲存。\n6. 開啟config資料夾中的System3D檔案,確認結果是否正常反映。',
          ja:'Matrix/Grid Target基準の2D Scale Calibration\n\n1. Jig(Y-axis)TableとVision Module(X-axis)を動かしMatrix Targetが光学モジュール画面中央に来るようにする。\n2. 光学系モジュールのZ-axisを動かしMatrix Targetに焦点を合わせる。\n3. X-axis、Y-axis、Z-axisを動かしGrid Targetが鮮明に見えるようにする。\n4. Vision Manager ▸ Calibration & Analysis ▸ Vision 2D Scale Calibrationを実行する。\n5. 照明値を調整しTargetを表示させ、Calibrateをクリックして計算結果を確認し、Apply Calibrationで保存する。\n6. configフォルダのSystem3Dファイルを開き、結果が正常に反映されたか確認する。'
        }}
      ]
    },
    nbga:{
      title:{ko:'J. Advanced Troubleshooting / Data Verification',en:'J. Advanced Troubleshooting / Data Verification',zhCN:'J. Advanced Troubleshooting / Data Verification',zhTW:'J. Advanced Troubleshooting / Data Verification',ja:'J. Advanced Troubleshooting / Data Verification'},
      slides:[
        {img:cmImg('J','nbga',1),tx:{
          en:'H/W Troubleshooting Manual, Version 1.0.1 (last updated 2024-06-26).',
          ko:'H/W Trouble Shooting Manual, Ver 1.0.1 (최종 수정일: 2024-06-26).',
          zhCN:'H/W Trouble Shooting Manual,版本1.0.1(最后更新:2024-06-26)。',
          zhTW:'H/W Trouble Shooting Manual,版本1.0.1(最後更新:2024-06-26)。',
          ja:'H/W Trouble Shooting Manual、バージョン1.0.1(最終更新日:2024-06-26)。'
        }},
        {img:cmImg('J','nbga',2),tx:{
          en:'Revision history — v1.0.0 (2023-12-21): basic structure completed; v1.0.1 (2024-06-26): updated.',
          ko:'개정 이력 — v1.0.0(2023-12-21): 기본 구성 완료, v1.0.1(2024-06-26): 업데이트.',
          zhCN:'修订履历——v1.0.0(2023-12-21):完成基本结构;v1.0.1(2024-06-26):更新。',
          zhTW:'修訂履歷——v1.0.0(2023-12-21):完成基本結構;v1.0.1(2024-06-26):更新。',
          ja:'改訂履歴——v1.0.0(2023-12-21):基本構成完了、v1.0.1(2024-06-26):更新。'
        }},
        {img:cmImg('J','nbga',3),tx:{
          en:'Troubleshooting contents — lists each issue by Group/Part/Module with the section number to reference, and which equipment it applies to (N=NBGA, F=FCB3D, S=SMTV, Q=QPM, C=CSP). Covers: power failure, motor power failure, Auto/Teach mode switching, multimeter power measurement, I/O detection failure, Sentech camera connection issues (CLCtrl/AF program), camera connection failure, grab timeout, handler motion issues, interlock malfunction, and lighting failure.',
          ko:'트러블슈팅 목차 — Group/Part/Module별로 문제 항목과 참고할 절 번호, 해당 설비(N=NBGA, F=FCB3D, S=SMTV, Q=QPM, C=CSP)를 정리한 표입니다. 전원 불량, Motor 전원 불량, Auto/Teach mode 변경, Multi Meter 전원 측정, I/O 감지 불량, Sentech Camera 연결 불량(CLCtrl/AF program), Camera 연결 불량, Grab Time Out, Handler 이동 불량, Interlock 동작 불량, 조명 불량을 다룹니다.',
          zhCN:'故障排除目录——按Group/Part/Module整理各故障项目、参考章节编号及适用设备(N=NBGA、F=FCB3D、S=SMTV、Q=QPM、C=CSP)的表格。涵盖:电源不良、Motor电源不良、Auto/Teach mode切换、Multi Meter电源测量、I/O检测不良、Sentech Camera连接不良(CLCtrl/AF program)、Camera连接不良、Grab Time Out、Handler动作不良、Interlock动作不良、照明不良。',
          zhTW:'故障排除目錄——按Group/Part/Module整理各故障項目、參考章節編號及適用設備(N=NBGA、F=FCB3D、S=SMTV、Q=QPM、C=CSP)的表格。涵蓋:電源不良、Motor電源不良、Auto/Teach mode切換、Multi Meter電源測量、I/O檢測不良、Sentech Camera連接不良(CLCtrl/AF program)、Camera連接不良、Grab Time Out、Handler動作不良、Interlock動作不良、照明不良。',
          ja:'トラブルシューティング目次——Group/Part/Moduleごとに問題項目、参照する節番号、該当設備(N=NBGA、F=FCB3D、S=SMTV、Q=QPM、C=CSP)を整理した表です。電源不良、Motor電源不良、Auto/Teach mode変更、Multi Meter電源測定、I/O検知不良、Sentechカメラ接続不良(CLCtrl/AFプログラム)、カメラ接続不良、Grab Time Out、Handler動作不良、Interlock動作不良、照明不良を扱います。'
        }},
        {img:cmImg('J','nbga',4),tx:{
          en:'1.1.1 Power Failure',
          ko:'1.1.1 전원 불량',
          zhCN:'1.1.1 电源不良',
          zhTW:'1.1.1 電源不良',
          ja:'1.1.1 電源不良'
        }},
        {img:cmImg('J','nbga',5),tx:{
          en:'To supply power to the equipment, check the following: Main breaker On/Off status; breakers inside the electric panel; whether the Utility panel lamp is on (some equipment omits it per customer request); upper door lock/unlock status per Auto/Teach mode; EMS button push/pull status; lower doors closed (needed for the lower fan); UPS On/Off (needed for Host PC power, absent on some equipment); Power Strip On/Off (needed for PC/LED Controller power, absent on some equipment); Main Air supply and that each Air Regulator holds 4–6bar; OP (Operation) panel status; and cable connections/connector pins/cable damage — if a component still has no power after all breakers are on, trace its cable wiring to find the cause.',
          ko:'설비 전원 공급을 위해 확인할 항목: Main 차단기 On/Off 상태, 전장 판넬 내부 차단기 On/Off 상태, Utility panel Lamp On/Off 여부(고객 요청 시 일부 설비는 미장착), Auto/Teach mode에 따른 상부 Door lock/unlock 상태, EMS button push/pull 상태, 하부 Fan 동작을 위한 하부 Door 닫힘 상태, Host PC 전원을 위한 UPS On/Off(일부 설비 미장착), Controller 전원을 위한 Power strip On/Off(일부 설비 미장착), Main Air 공급 여부 및 각 Air Regulator의 4~6bar 압력 유지, OP(Operation) panel 상태, Cable 연결 상태·Connector Pin 쇼트·Cable 손상 여부 — 모든 차단기를 On했음에도 특정 부위에 전원이 안 들어오면 해당 Cable 배선을 역추적하여 원인을 파악합니다.',
          zhCN:'为设备供电需确认的项目:Main断路器On/Off状态、电装面板内部断路器On/Off状态、Utility panel灯是否On/Off(依客户要求部分设备未安装)、依Auto/Teach mode决定的上部Door lock/unlock状态、EMS按钮push/pull状态、下部Fan运作所需的下部Door关闭状态、Host PC电源所需的UPS On/Off(部分设备未安装)、Controller电源所需的Power strip On/Off(部分设备未安装)、Main Air供应及各Air Regulator保持4~6bar压力、OP(Operation)panel状态、Cable连接状态·Connector Pin短路·Cable损伤情况——即使所有断路器均已On,若特定部位仍无电,需回溯该Cable配线以查明原因。',
          zhTW:'為設備供電需確認的項目:Main斷路器On/Off狀態、電裝面板內部斷路器On/Off狀態、Utility panel燈是否On/Off(依客戶要求部分設備未安裝)、依Auto/Teach mode決定的上部Door lock/unlock狀態、EMS按鈕push/pull狀態、下部Fan運作所需的下部Door關閉狀態、Host PC電源所需的UPS On/Off(部分設備未安裝)、Controller電源所需的Power strip On/Off(部分設備未安裝)、Main Air供應及各Air Regulator保持4~6bar壓力、OP(Operation)panel狀態、Cable連接狀態·Connector Pin短路·Cable損傷情況——即使所有斷路器均已On,若特定部位仍無電,需回溯該Cable配線以查明原因。',
          ja:'設備への電源供給のために確認する項目:Main遮断器のOn/Off状態、電装パネル内部の遮断器On/Off状態、Utility panelのLampがOn/Offしているか(顧客要望により一部設備は非搭載)、Auto/Teach modeに応じた上部Door lock/unlock状態、EMSボタンのpush/pull状態、下部Fan動作に必要な下部Doorの閉状態、Host PC電源に必要なUPSのOn/Off(一部設備は非搭載)、Controller電源に必要なPower strip のOn/Off(一部設備は非搭載)、Main Airの供給および各Air Regulatorが4~6barを維持しているか、OP(Operation)panelの状態、Cable接続状態・Connector Pinのショート・Cable損傷の有無——すべての遮断器をOnにしても特定箇所に電源が入らない場合は、該当Cable配線を逆にたどって原因を特定します。'
        }},
        {img:cmImg('J','nbga',6),tx:{
          en:'Turn on the Main breaker on the equipment\'s Main panel, then turn on all breakers inside the electric panel. (Example: Main Sub Electric Panel, Right — Motor Driver, Terminal Block, IO Module)',
          ko:'설비 Main panel의 Main 차단기를 On하고, 전장 판넬 내부 차단기를 모두 On합니다. (예시: Main Sub Electric Panel, Right — Motor Driver, Terminal Block, IO Module)',
          zhCN:'打开设备Main panel的Main断路器,并打开电装面板内所有断路器。(示例:Main Sub Electric Panel, Right——Motor Driver、Terminal Block、IO Module)',
          zhTW:'打開設備Main panel的Main斷路器,並打開電裝面板內所有斷路器。(範例:Main Sub Electric Panel, Right——Motor Driver、Terminal Block、IO Module)',
          ja:'設備のMain panelのMain遮断器をOnにし、電装パネル内部の遮断器をすべてOnにします。(例:Main Sub Electric Panel, Right——Motor Driver、Terminal Block、IO Module)'
        }},
        {img:cmImg('J','nbga',7),tx:{
          en:'Same procedure at the Main Electric Panel (rear) — CP, MC, Noise filter, Terminal block, Earth bar, SMPS/PLC.',
          ko:'Main Electric Panel(Rear)에서도 동일하게 진행합니다 — CP, MC, Noise filter, Terminal block, Earth bar, SMPS/PLC.',
          zhCN:'在Main Electric Panel(Rear)执行相同操作——CP、MC、Noise filter、Terminal block、Earth bar、SMPS/PLC。',
          zhTW:'在Main Electric Panel(Rear)執行相同操作——CP、MC、Noise filter、Terminal block、Earth bar、SMPS/PLC。',
          ja:'Main Electric Panel(Rear)でも同様に行います——CP、MC、Noise filter、Terminal block、Earth bar、SMPS/PLC。'
        }},
        {img:cmImg('J','nbga',8),tx:{
          en:'Same procedure at the ISO Sub Electric Panel (left) — Motor driver, IO/PM module.',
          ko:'ISO Sub Electric Panel(Left)에서도 동일하게 진행합니다 — Motor driver, IO/PM module.',
          zhCN:'在ISO Sub Electric Panel(Left)执行相同操作——Motor driver、IO/PM module。',
          zhTW:'在ISO Sub Electric Panel(Left)執行相同操作——Motor driver、IO/PM module。',
          ja:'ISO Sub Electric Panel(Left)でも同様に行います——Motor driver、IO/PM module。'
        }},
        {img:cmImg('J','nbga',9),tx:{
          en:'The Utility panel lamp should turn on once the CP01 Power Lamp breaker is switched on. (Not included on Intel-spec equipment.)',
          ko:'Utility panel의 Lamp는 CP01 Power Lamp 차단기를 On해야 켜집니다. (Intel향 설비에는 미포함)',
          zhCN:'Utility panel的灯需在CP01 Power Lamp断路器On后才会亮起。(Intel规格设备不包含此灯)',
          zhTW:'Utility panel的燈需在CP01 Power Lamp斷路器On後才會亮起。(Intel規格設備不包含此燈)',
          ja:'Utility panelのLampはCP01 Power Lamp遮断器をOnにすると点灯します。(Intel向け設備には含まれません)'
        }},
        {img:cmImg('J','nbga',10),tx:{
          en:'Auto Mode — motor power is supplied only once all upper doors are closed and locked. If an alarm occurs during automatic operation: (A) press Reset, (B) release the door interlock, (C) open the door and resolve the alarm point, (D) close the door and lock the interlock, (E) press Reset to restore motor power, (F) click Lot Start to resume. Teach Mode — motor power can be supplied even with the upper doors open/unlocked. Auto/Teach mode can also be switched via the Handler program\'s I/O settings.',
          ko:'Auto Mode — 상부 Door가 모두 닫히고 잠겨야 Motor 전원이 공급됩니다. 자동 운전 중 알람 발생 시: (A) Reset 버튼 클릭, (B) Door Interlock 해제, (C) Door를 열고 알람 지점 조치, (D) Door를 닫고 Interlock을 Lock으로 전환, (E) Reset 클릭해 Motor 전원 재공급, (F) Lot Start 클릭해 자동 운전 재개. Teach Mode — 상부 Door를 열고 잠금을 해제한 상태에서도 Motor 전원 공급이 가능합니다. Auto/Teach mode는 Handler 프로그램의 I/O 설정으로도 전환할 수 있습니다.',
          zhCN:'Auto Mode——须待上部Door全部关闭并锁定后才会供应Motor电源。自动运转中发生警报时:(A)点击Reset按钮,(B)解除Door Interlock,(C)打开Door并处理警报点,(D)关闭Door并将Interlock切换为Lock,(E)点击Reset恢复Motor电源,(F)点击Lot Start恢复自动运转。Teach Mode——即使上部Door开启且解锁,也可供应Motor电源。Auto/Teach mode也可透过Handler程序的I/O设置切换。',
          zhTW:'Auto Mode——須待上部Door全部關閉並鎖定後才會供應Motor電源。自動運轉中發生警報時:(A)點擊Reset按鈕,(B)解除Door Interlock,(C)打開Door並處理警報點,(D)關閉Door並將Interlock切換為Lock,(E)點擊Reset恢復Motor電源,(F)點擊Lot Start恢復自動運轉。Teach Mode——即使上部Door開啟且解鎖,也可供應Motor電源。Auto/Teach mode也可透過Handler程式的I/O設定切換。',
          ja:'Auto Mode——上部Doorがすべて閉じて施錠された場合のみMotor電源が供給されます。自動運転中にアラームが発生した場合:(A)Resetボタンを押す、(B)Door Interlockを解除、(C)Doorを開けアラーム箇所を処置、(D)Doorを閉めInterlockをLockに切替、(E)Resetを押しMotor電源を再供給、(F)Lot Startをクリックし自動運転を再開。Teach Mode——上部Doorを開けて施錠を解除した状態でもMotor電源を供給できます。Auto/Teach modeはHandlerプログラムのI/O設定でも切り替え可能です。'
        }},
        {img:cmImg('J','nbga',11),tx:{
          en:'To supply motor power, all EMS buttons on the equipment must be in the pulled-out state; pushing even one cuts motor power. EMS buttons are the emergency motor-power cutoff and their positions vary by equipment.',
          ko:'Motor 전원을 공급하려면 설비에 설치된 모든 EMS button이 Pull 상태여야 합니다. 1개라도 Push되면 Motor 전원이 차단됩니다. EMS button은 비상 시 Motor 전원을 차단하는 용도이며 위치는 설비마다 다를 수 있습니다.',
          zhCN:'要供应Motor电源,设备上安装的所有EMS按钮都必须处于Pull(拉出)状态。只要有一个被Push(按下),Motor电源就会被切断。EMS按钮用于紧急情况下切断Motor电源,位置因设备而异。',
          zhTW:'要供應Motor電源,設備上安裝的所有EMS按鈕都必須處於Pull(拉出)狀態。只要有一個被Push(按下),Motor電源就會被切斷。EMS按鈕用於緊急情況下切斷Motor電源,位置因設備而異。',
          ja:'Motor電源を供給するには、設備に設置されたすべてのEMSボタンがPull状態である必要があります。1つでもPushされるとMotor電源が遮断されます。EMSボタンは非常時にMotor電源を遮断する目的で使用され、位置は設備によって異なります。'
        }},
        {img:cmImg('J','nbga',12),tx:{
          en:'To power the lower-door Fan, all lower doors must be closed. The Main equipment fan and the dust-suppression equipment fan switch on/off independently, and their power is supplied automatically — it cannot be turned on manually.',
          ko:'하부 Door의 Fan에 전원을 공급하려면 하부 Door가 모두 닫혀 있어야 합니다. Main 설비와 제진 설비의 Fan은 각각 독립적으로 On/Off되며, 전원은 자동으로 공급되는 구조라 수동으로 켤 수 없습니다.',
          zhCN:'要为下部Door的Fan供电,下部Door必须全部关闭。Main设备与除振设备的Fan各自独立On/Off,其电源为自动供应结构,无法手动开启。',
          zhTW:'要為下部Door的Fan供電,下部Door必須全部關閉。Main設備與除振設備的Fan各自獨立On/Off,其電源為自動供應結構,無法手動開啟。',
          ja:'下部DoorのFanに電源を供給するには、下部Doorがすべて閉じている必要があります。Main設備と除振設備のFanはそれぞれ独立してOn/Offし、電源は自動供給される構造のため手動でONにはできません。'
        }},
        {img:cmImg('J','nbga',13),tx:{
          en:'If the Fan still doesn\'t run with all lower doors closed, check: the gap between GLS-M1 and GLS-S1 by moving the mechanism as shown (to verify Fan operation), and the cable connection of the magnetic sensor (GLS-S1).',
          ko:'하부 Door를 모두 닫았는데도 Fan이 동작하지 않으면: 그림처럼 기구물을 이동시켜 GLS-M1과 GLS-S1 간 거리를 조절하며 Fan 동작을 확인하고, Magnetic Sensor(GLS-S1)의 Cable 연결 상태를 확인합니다.',
          zhCN:'若下部Door已全部关闭但Fan仍不运转,请:如图移动机构调整GLS-M1与GLS-S1之间的距离以确认Fan动作,并检查Magnetic Sensor(GLS-S1)的Cable连接状态。',
          zhTW:'若下部Door已全部關閉但Fan仍不運轉,請:如圖移動機構調整GLS-M1與GLS-S1之間的距離以確認Fan動作,並檢查Magnetic Sensor(GLS-S1)的Cable連接狀態。',
          ja:'下部Doorをすべて閉じてもFanが動作しない場合:図のように機構を動かしGLS-M1とGLS-S1間の距離を調整しながらFan動作を確認し、Magnetic Sensor(GLS-S1)のCable接続状態を確認します。'
        }},
        {img:cmImg('J','nbga',14),tx:{
          en:'To power the Host PC, the UPS power must be on. During shipping or power-related work, the UPS power must always be turned off. (No UPS on Intel-spec equipment.)',
          ko:'Host PC의 전원을 공급하려면 UPS 전원이 On되어 있어야 합니다. 설비 출하 및 전원 관련 작업 시에는 반드시 UPS 전원을 Off해야 합니다. (Intel향 설비에는 UPS 없음)',
          zhCN:'要为Host PC供电,UPS电源必须处于On状态。设备出货及电源相关作业时,必须务必将UPS电源关闭(Off)。(Intel规格设备无UPS)',
          zhTW:'要為Host PC供電,UPS電源必須處於On狀態。設備出貨及電源相關作業時,必須務必將UPS電源關閉(Off)。(Intel規格設備無UPS)',
          ja:'Host PCに電源を供給するにはUPS電源がOnである必要があります。設備出荷および電源関連作業の際は必ずUPS電源をOffにしてください。(Intel向け設備にはUPSがありません)'
        }},
        {img:cmImg('J','nbga',15),tx:{
          en:'To power controllers such as the PC and LED Controller, the Power Strip must be switched on. (3D#1, 3D#2 / Host, 2D Vision) Power strip location/presence varies somewhat by equipment.',
          ko:'PC나 LED Controller 같은 Controller에 전원을 공급하려면 Power Strip이 켜져 있어야 합니다. (3D#1, 3D#2 / Host, 2D Vision) Power Strip의 위치는 설비마다 일부 다르거나 없을 수 있습니다.',
          zhCN:'要为PC、LED Controller等控制器供电,Power Strip必须开启。(3D#1、3D#2 / Host、2D Vision)Power Strip的位置因设备而异,部分设备可能没有。',
          zhTW:'要為PC、LED Controller等控制器供電,Power Strip必須開啟。(3D#1、3D#2 / Host、2D Vision)Power Strip的位置因設備而異,部分設備可能沒有。',
          ja:'PCやLED Controllerなどのコントローラに電源を供給するにはPower Strip がONになっている必要があります。(3D#1、3D#2 / Host、2D Vision)Power Strip の位置は設備によって多少異なるか、無い場合もあります。'
        }},
        {img:cmImg('J','nbga',16),tx:{
          en:'OP (Operation) panel — once every breaker in the equipment is on, the Power Off lamp should be lit, and the Reset lamp should blink on/off roughly every 500ms. Pressing POWER ON lights that lamp; POWER OFF\'s lamp should then go out. In Teach mode, pressing Reset with all EMS pulled supplies motor power; in Auto mode, pressing Reset supplies motor power only when all EMS are pulled and all upper doors are locked (unlocking an upper door in Auto mode cuts motor power). Button legend: POWER ON = power on IO/sensors & drivers; POWER OFF = power off IO/sensors & drivers; START = start run; STOP = stop run; RESET = power on the motor (while Reset is blinking).',
          ko:'OP(Operation) panel — 설비 내 모든 차단기를 On하면 Power Off Lamp가 켜지고, Reset Lamp는 약 500ms 주기로 점멸합니다. POWER ON을 누르면 해당 Lamp가 켜지고, POWER OFF Lamp는 꺼져야 합니다. Teach mode에서는 모든 EMS가 Pull 상태일 때 Reset을 누르면 Motor 전원이 공급되고, Auto mode에서는 모든 EMS가 Pull 상태이고 상부 Door가 모두 Lock 상태일 때 Reset을 누르면 Motor 전원이 공급됩니다(Auto mode에서 상부 Door를 Unlock하면 Motor 전원 차단). 버튼 설명: POWER ON=IO(센서)·드라이버 전원 켜기, POWER OFF=IO(센서)·드라이버 전원 끄기, START=시작 실행, STOP=중지 실행, RESET=모터 전원 켜기(Reset 점멸 시).',
          zhCN:'OP(Operation)panel——设备内所有断路器On后,Power Off灯会亮起,Reset灯则约以500ms周期闪烁。按下POWER ON该灯亮起,POWER OFF灯应熄灭。Teach mode下,所有EMS处于Pull状态时按Reset即可供应Motor电源;Auto mode下,须所有EMS处于Pull状态且上部Door全部Lock时按Reset才会供应Motor电源(Auto mode下若上部Door变为Unlock,Motor电源将被切断)。按钮说明:POWER ON=开启IO(传感器)·驱动器电源,POWER OFF=关闭IO(传感器)·驱动器电源,START=开始运转,STOP=停止运转,RESET=开启马达电源(Reset闪烁时)。',
          zhTW:'OP(Operation)panel——設備內所有斷路器On後,Power Off燈會亮起,Reset燈則約以500ms週期閃爍。按下POWER ON該燈亮起,POWER OFF燈應熄滅。Teach mode下,所有EMS處於Pull狀態時按Reset即可供應Motor電源;Auto mode下,須所有EMS處於Pull狀態且上部Door全部Lock時按Reset才會供應Motor電源(Auto mode下若上部Door變為Unlock,Motor電源將被切斷)。按鈕說明:POWER ON=開啟IO(感測器)·驅動器電源,POWER OFF=關閉IO(感測器)·驅動器電源,START=開始運轉,STOP=停止運轉,RESET=開啟馬達電源(Reset閃爍時)。',
          ja:'OP(Operation)panel——設備内のすべての遮断器をOnにするとPower Offランプが点灯し、Resetランプは約500ms周期で点滅します。POWER ONを押すとそのランプが点灯し、POWER OFFランプは消灯するはずです。Teach modeではすべてのEMSがPull状態でResetを押すとMotor電源が供給され、Auto modeではすべてのEMSがPull状態かつ上部DoorがすべてLock状態のときにResetを押すとMotor電源が供給されます(Auto modeで上部DoorをUnlockするとMotor電源は遮断されます)。ボタン説明:POWER ON=IO(センサー)・ドライバー電源ON、POWER OFF=IO(センサー)・ドライバー電源OFF、START=開始実行、STOP=停止実行、RESET=モーター電源ON(Reset点滅時)。'
        }},
        {img:cmImg('J','nbga',17),tx:{
          en:'1.1.2 Motor Power Failure',
          ko:'1.1.2 Motor 전원 불량',
          zhCN:'1.1.2 Motor电源不良',
          zhTW:'1.1.2 Motor電源不良',
          ja:'1.1.2 Motor電源不良'
        }},
        {img:cmImg('J','nbga',18),tx:{
          en:'Check the following parts and their status: Breaker power status — CP (Circuit Protector), MCB (Miniature Circuit Breaker), ELB (Earth Leakage Breaker); MCCB/ELCB is typically the main primary breaker (power is on when the blue lever shows red). MC (Magnetic Contactor)/Relay operation — normally the indicator retracts inward when working correctly. Safety PLC/Safety Relay operation — these control the equipment\'s Interlock system (EMS, door lock, light curtain, etc.); a green LED lights when normal (red LED on error). Also check: Light Curtain detection, EMS button released, door closed (if Safety mode is Auto), and the OP panel\'s power-on/Reset state.',
          ko:'아래 부품 및 동작 상태를 확인합니다: 차단기 전원 상태 — CP(Circuit Protector), MCB(Miniature Circuit Breaker), ELB(Earth Leakage Breaker); MCCB·ELCB는 주로 Main 1차 차단기로 사용되며 파란 레버가 적색으로 바뀌면 전원 On 상태. MC(Magnetic Contactor)·Relay 동작 유무 — 정상 동작 시 표시부가 안쪽으로 삽입됨. Safety PLC·Safety Relay 동작 유무 — 설비 Interlock System(EMS, Door Lock, Light Curtain 등)을 제어·모니터링하며 정상 시 녹색 LED 점등(Error 시 적색). 그 외 Light Curtain 감지 여부, EMS 눌림 해제 여부, Safety mode가 Auto일 때 문 닫힘 상태, OP panel의 전원 On 또는 Reset 상태를 확인합니다.',
          zhCN:'请确认以下部件及运作状态:断路器电源状态——CP(Circuit Protector)、MCB(Miniature Circuit Breaker)、ELB(Earth Leakage Breaker);MCCB、ELCB通常作为Main一次断路器使用,蓝色扳杆变红表示电源On状态。MC(Magnetic Contactor)、Relay动作与否——正常动作时指示部会向内缩入。Safety PLC、Safety Relay动作与否——控制并监控设备Interlock System(EMS、Door Lock、Light Curtain等),正常时绿灯亮起(异常时红灯)。此外还需确认Light Curtain检测状态、EMS是否已解除按下、Safety mode为Auto时门是否关闭,以及OP panel的电源On或Reset状态。',
          zhTW:'請確認以下零件及運作狀態:斷路器電源狀態——CP(Circuit Protector)、MCB(Miniature Circuit Breaker)、ELB(Earth Leakage Breaker);MCCB、ELCB通常作為Main一次斷路器使用,藍色扳桿變紅表示電源On狀態。MC(Magnetic Contactor)、Relay動作與否——正常動作時指示部會向內縮入。Safety PLC、Safety Relay動作與否——控制並監控設備Interlock System(EMS、Door Lock、Light Curtain等),正常時綠燈亮起(異常時紅燈)。此外還需確認Light Curtain檢測狀態、EMS是否已解除按下、Safety mode為Auto時門是否關閉,以及OP panel的電源On或Reset狀態。',
          ja:'以下の部品と動作状態を確認します:遮断器の電源状態——CP(Circuit Protector)、MCB(Miniature Circuit Breaker)、ELB(Earth Leakage Breaker);MCCB・ELCBは主にMain一次遮断器として使用され、青いレバーが赤に変わると電源On状態。MC(Magnetic Contactor)・Relayの動作有無——正常動作時は表示部が内側に入り込む。Safety PLC・Safety Relayの動作有無——設備のInterlock System(EMS、Door Lock、Light Curtainなど)を制御・監視し、正常時は緑LEDが点灯(エラー時は赤)。その他Light Curtainの検知有無、EMSの押し込み解除、Safety modeがAutoの場合のドア閉状態、OP panelの電源ONまたはReset状態を確認します。'
        }},
        {img:cmImg('J','nbga',19),tx:{
          en:'1.1.3 Switching Auto/Teach Mode',
          ko:'1.1.3 Auto/Teach mode 변경',
          zhCN:'1.1.3 Auto/Teach mode切换',
          zhTW:'1.1.3 Auto/Teach mode切換',
          ja:'1.1.3 Auto/Teach mode変更'
        }},
        {img:cmImg('J','nbga',20),tx:{
          en:'How to open a door once it has switched to Auto mode: with equipment power on, once the solenoid-equipped key switch is set to Auto mode, all upper doors lock. Remove the interlock manual-operation prevention cover (steel or rubber cap) on top of the door, then use a tool matching the dial shape to switch it to Unlock. (Caution: excessive force may damage it.)',
          ko:'Auto mode로 전환된 뒤 Door를 여는 방법: 설비 전원이 On된 상태에서 솔레노이드 부착형 키 스위치가 Auto mode가 되면 모든 상부 Door가 잠깁니다. Door 상부의 Interlock 수동 조작 방지 커버(스틸마개 또는 고무마개)를 제거한 뒤, 다이얼 모양에 맞는 공구로 Unlock 상태로 변경합니다. (주의: 과도한 힘으로 조작 시 파손될 수 있음)',
          zhCN:'切换为Auto mode后开门的方法:设备电源On的状态下,当带电磁阀的钥匙开关切换为Auto mode时,所有上部Door都会锁定。先拆下Door上部的Interlock手动操作防止盖(钢盖或橡胶盖),再用与拨盘形状相符的工具切换为Unlock状态。(注意:操作力道过大可能导致损坏)',
          zhTW:'切換為Auto mode後開門的方法:設備電源On的狀態下,當帶電磁閥的鑰匙開關切換為Auto mode時,所有上部Door都會鎖定。先拆下Door上部的Interlock手動操作防止蓋(鋼蓋或橡膠蓋),再用與撥盤形狀相符的工具切換為Unlock狀態。(注意:操作力道過大可能導致損壞)',
          ja:'Auto modeに切り替わった後にDoorを開ける方法:設備電源がONの状態でソレノイド付きキースイッチがAuto modeになると、すべての上部Doorがロックされます。Door上部のInterlock手動操作防止カバー(スチール製またはゴム製)を外し、ダイヤル形状に合った工具でUnlock状態に変更します。(注意:過度な力で操作すると破損する恐れがあります)'
        }},
        {img:cmImg('J','nbga',21),tx:{
          en:'After the door opens, remove the switch-terminal protective cover. Shorting N24V to OUT at the switch terminal triggers the solenoid, letting the key turn to Teach mode. On equipment without a solenoid key switch, Teach/Auto mode can be switched from the Host program\'s I/O Map instead.',
          ko:'Door가 열리면 스위치 단자 보호 커버를 제거합니다. 스위치 단자에서 N24V를 OUT에 쇼트시키면 솔레노이드가 동작하며, 그때 키를 돌려 Teach mode로 변경할 수 있습니다. 솔레노이드 부착형 키 스위치가 없는 설비는 Host 프로그램의 I/O Map에서 Teach/Auto mode를 전환할 수 있습니다.',
          zhCN:'Door打开后,拆下开关端子保护盖。将开关端子的N24V与OUT短接即可使电磁阀动作,此时可转动钥匙切换为Teach mode。未配备电磁阀式钥匙开关的设备,可在Host程序的I/O Map中切换Teach/Auto mode。',
          zhTW:'Door打開後,拆下開關端子保護蓋。將開關端子的N24V與OUT短接即可使電磁閥動作,此時可轉動鑰匙切換為Teach mode。未配備電磁閥式鑰匙開關的設備,可在Host程式的I/O Map中切換Teach/Auto mode。',
          ja:'Doorが開いたら、スイッチ端子保護カバーを外します。スイッチ端子でN24VをOUTにショートさせるとソレノイドが動作し、その際にキーを回してTeach modeに変更できます。ソレノイド付きキースイッチが搭載されていない設備は、HostプログラムのI/O MapでTeach/Auto modeを切り替えられます。'
        }},
        {img:cmImg('J','nbga',22),tx:{
          en:'1.1.4 Measuring Power with a Multimeter',
          ko:'1.1.4 Multi Meter를 이용한 전원 측정 방법',
          zhCN:'1.1.4 使用Multi Meter测量电源的方法',
          zhTW:'1.1.4 使用Multi Meter測量電源的方法',
          ja:'1.1.4 Multi Meterを利用した電源測定方法'
        }},
        {img:cmImg('J','nbga',23),tx:{
          en:'This chapter covers voltage measurement and continuity checking with a multimeter. It requires electrical expertise, and carries a shock risk from high voltage or surge — wear protective gear and know the procedure before starting. Precautions: check the tester\'s own battery status first (so it doesn\'t die mid-measurement); continuity-check the test leads on the continuity range first (measuring with a broken lead is very dangerous); and check the leads\' insulation for damage (exposed metal risks electric shock).',
          ko:'이번 챕터에서는 Multi Meter를 사용한 전압 측정 및 단선 여부 확인 방법을 다룹니다. 전기·전장에 대한 전문성과 이해가 필요하며, 고전압이나 서지로 인한 감전 위험이 있으므로 방호 도구를 착용하고 사용법을 숙지한 뒤 시작합니다. 주의사항: 측정 도중 배터리가 꺼지지 않도록 테스터기 배터리 상태를 먼저 확인, 도통 레인지로 테스트 리드를 먼저 도통 체크(단선된 채로 계측하면 매우 위험), 테스트 리드의 피복 손상 여부 확인(금속 부분 노출 시 감전 위험).',
          zhCN:'本章介绍使用Multi Meter进行电压测量及断线确认的方法。需要具备电气·电装方面的专业知识,且存在高压或突波(Surge)导致触电的风险,请先穿戴防护用具并熟悉使用方法后再开始。注意事项:先确认测试器本身的电池状态,避免测量过程中电池耗尽;先以导通挡对测试棒进行导通检查(在断线状态下测量非常危险);检查测试棒的绝缘皮是否损坏(金属部分外露有触电风险)。',
          zhTW:'本章介紹使用Multi Meter進行電壓測量及斷線確認的方法。需要具備電氣·電裝方面的專業知識,且存在高壓或突波(Surge)導致觸電的風險,請先穿戴防護用具並熟悉使用方法後再開始。注意事項:先確認測試器本身的電池狀態,避免測量過程中電池耗盡;先以導通檔對測試棒進行導通檢查(在斷線狀態下測量非常危險);檢查測試棒的絕緣皮是否損壞(金屬部分外露有觸電風險)。',
          ja:'本章ではMulti Meterを使用した電圧測定および断線確認の方法を扱います。電気・電装に関する専門性と理解が必要で、高電圧やサージによる感電の危険があるため、防護具を着用し使用方法を熟知してから開始してください。注意事項:測定中にバッテリーが切れないようテスター本体のバッテリー状態を先に確認、導通レンジでテストリードを先に導通チェック(断線したまま計測するのは非常に危険)、テストリードの被覆の損傷有無を確認(金属部分が露出していると感電の危険)。'
        }},
        {img:cmImg('J','nbga',24),tx:{
          en:'More multimeter precautions: if the test lead\'s exposed metal tip is too long, it risks a short circuit during voltage measurement; and never measure a voltage exceeding the meter\'s rated range.',
          ko:'Multi Meter 사용 시 추가 주의사항: 테스트 리드 앞쪽 금속 부분이 길면 전압 측정 시 단락 사고가 발생할 수 있습니다. 측정기의 측정 허용치 이상의 전원은 측정하지 않습니다.',
          zhCN:'使用Multi Meter的其他注意事项:若测试棒前端外露金属部分过长,电压测量时可能发生短路事故。请勿测量超过测量器额定测量范围的电源。',
          zhTW:'使用Multi Meter的其他注意事項:若測試棒前端外露金屬部分過長,電壓測量時可能發生短路事故。請勿測量超過測量器額定測量範圍的電源。',
          ja:'Multi Meter使用時の追加注意事項:テストリード先端の露出金属部分が長いと、電圧測定時に短絡事故が発生する恐れがあります。測定器の許容測定範囲を超える電源は測定しないでください。'
        }},
        {img:cmImg('J','nbga',25),tx:{
          en:'Reference for wiring types: Single-phase — L (Live), N (Neutral), G (Ground); 3-phase — R/S/T (three-phase lines), N (Neutral). Power connection type varies by equipment, so measure accordingly.',
          ko:'배선 방식 참고: 단상 — L(활성선/Live), N(중성선/Neutral), G(접지선/Ground); 3상 — R/S/T(3상 전선), N(중성선/Neutral). 설비마다 전원 연결 방식이 다르므로 확인 후 측정합니다.',
          zhCN:'配线方式参考:单相——L(活线/Live)、N(中性线/Neutral)、G(接地线/Ground);三相——R/S/T(三相电线)、N(中性线/Neutral)。设备的电源连接方式各异,请先确认再进行测量。',
          zhTW:'配線方式參考:單相——L(火線/Live)、N(中性線/Neutral)、G(接地線/Ground);三相——R/S/T(三相電線)、N(中性線/Neutral)。設備的電源連接方式各異,請先確認再進行測量。',
          ja:'配線方式の参考:単相——L(活性線/Live)、N(中性線/Neutral)、G(接地線/Ground);3相——R/S/T(3相電線)、N(中性線/Neutral)。設備によって電源接続方式が異なるため、確認の上測定します。'
        }},
        {img:cmImg('J','nbga',26),tx:{
          en:'Reference for measuring an MC (Magnetic Contactor)\'s wiring: power can be connected as (A1,A2), (A1,A4), (A2,A3), or (A3,A4); the main contacts connect top-to-bottom, and terminal #4 connects according to NC/NO.',
          ko:'MC(Magnetic Contactor) 배선 측정 참고: 전원은 (A1,A2), (A1,A4), (A2,A3), (A3,A4) 방식으로 연결될 수 있으며, 주접점은 위아래로 연결되고 4번은 NC/NO에 따라 연결됩니다.',
          zhCN:'MC(Magnetic Contactor)接线测量参考:电源可以(A1,A2)、(A1,A4)、(A2,A3)、(A3,A4)的方式连接,主接点上下连接,4号则依NC/NO连接。',
          zhTW:'MC(Magnetic Contactor)接線測量參考:電源可以(A1,A2)、(A1,A4)、(A2,A3)、(A3,A4)的方式連接,主接點上下連接,4號則依NC/NO連接。',
          ja:'MC(Magnetic Contactor)配線測定の参考:電源は(A1,A2)、(A1,A4)、(A2,A3)、(A3,A4)の方式で接続され得ます。主接点は上下に接続され、4番はNC/NOに応じて接続されます。'
        }},
        {img:cmImg('J','nbga',27),tx:{
          en:'How to check SMPS power input/output: check whether it\'s ACV or DCV, set the meter dial accordingly, and measure (e.g. at 220V).',
          ko:'SMPS 전원 입출력 확인 방법: ACV인지 DCV인지 확인 후 다이얼을 맞추고 측정합니다 (예: 220V).',
          zhCN:'确认SMPS电源输入输出的方法:先确认是ACV还是DCV,调整档位后进行测量(例如:220V)。',
          zhTW:'確認SMPS電源輸入輸出的方法:先確認是ACV還是DCV,調整檔位後進行測量(例如:220V)。',
          ja:'SMPS電源の入出力確認方法:ACVかDCVかを確認しダイヤルを合わせて測定します(例:220V)。'
        }},
        {img:cmImg('J','nbga',28),tx:{
          en:'Two DC Fan troubleshooting examples using a multimeter. Example 1 (Fan not running): AC OK, DC OK, MC-operating AC OK → analysis: wrong MC wiring or a bad MC. Example 2 (Fan not running): AC OK through MC, but DC fails at the Fan itself (DC not detected there) → analysis: bad DC Fan, or a bad DC Fan connector/cable.',
          ko:'Multi Meter를 이용한 DC Fan 트러블슈팅 예시 2가지. 예시1(Fan 미동작): AC 측정 O, DC 측정 O, MC 작동 시 AC 측정 O → 분석: MC 배선 오류 또는 MC 불량. 예시2(Fan 미동작): MC까지는 AC 측정 O이나 Fan 자체에서 DC 측정 X → 분석: DC Fan 불량 또는 DC Fan 커넥터/케이블 불량.',
          zhCN:'使用Multi Meter进行DC Fan故障排查的2个示例。示例1(Fan不动作):AC测量O、DC测量O、MC动作时AC测量O→分析:MC接线错误或MC不良。示例2(Fan不动作):到MC为止AC测量O,但Fan本身DC测量X→分析:DC Fan不良,或DC Fan连接器/线缆不良。',
          zhTW:'使用Multi Meter進行DC Fan故障排查的2個範例。範例1(Fan不動作):AC測量O、DC測量O、MC動作時AC測量O→分析:MC接線錯誤或MC不良。範例2(Fan不動作):到MC為止AC測量O,但Fan本身DC測量X→分析:DC Fan不良,或DC Fan連接器/線纜不良。',
          ja:'Multi MeterによるDC Fanトラブルシューティング例2つ。例1(Fan不動作):AC測定O、DC測定O、MC動作時AC測定O→分析:MC配線誤りまたはMC不良。例2(Fan不動作):MCまではAC測定Oだが、Fan自体でDC測定X→分析:DC Fan不良、またはDC Fanコネクタ/ケーブル不良。'
        }},
        {img:cmImg('J','nbga',29),tx:{
          en:'1.2.1 I/O Detection Failure',
          ko:'1.2.1 I/O 감지 불량',
          zhCN:'1.2.1 I/O检测不良',
          zhTW:'1.2.1 I/O檢測不良',
          ja:'1.2.1 I/O検知不良'
        }},
        {img:cmImg('J','nbga',30),tx:{
          en:'Check the sensor\'s power status (connector connection, cable damage, I/O module power), and confirm the sensor triggers correctly for its action — if not, adjust its position (via its mounting bolt or bracket) and re-verify. If the sensor triggers but the Input signal reads inverted, check the connector\'s pin order, or try reversing that sensor\'s NC/NO setting in the Pear program and confirm the signal is now correct.',
          ko:'Sensor의 전원 상태(Connector 연결, Cable 손상 여부, I/O Module 전원 상태)를 확인하고, 동작에 맞게 Sensor가 감지되는지 확인합니다 — 감지되지 않으면 고정 볼트나 브라켓 위치를 조정해 다시 확인합니다. 감지는 되나 Input 신호가 반대로 읽히면 Connector Pin 순서를 확인하거나, Pear 프로그램에서 해당 Sensor의 NC/NO를 반대로 설정한 뒤 정상 신호가 들어오는지 확인합니다.',
          zhCN:'确认Sensor的电源状态(Connector连接、Cable损伤与否、I/O Module电源状态),并确认Sensor是否随动作正常感应——若未感应,调整固定螺栓或支架位置后再次确认。若已感应但Input信号读取相反,请确认Connector的Pin顺序,或在Pear程序中将该Sensor的NC/NO反向设置后确认信号是否恢复正常。',
          zhTW:'確認Sensor的電源狀態(Connector連接、Cable損傷與否、I/O Module電源狀態),並確認Sensor是否隨動作正常感應——若未感應,調整固定螺栓或支架位置後再次確認。若已感應但Input訊號讀取相反,請確認Connector的Pin順序,或在Pear程式中將該Sensor的NC/NO反向設定後確認訊號是否恢復正常。',
          ja:'Sensorの電源状態(Connector接続、Cable損傷有無、I/O Module電源状態)を確認し、動作に応じてSensorが検知されるか確認します——検知されない場合は固定ボルトやブラケット位置を調整して再確認します。検知はされるがInput信号が逆に読み取られる場合は、ConnectorのPin順序を確認するか、Pearプログラムで該当SensorのNC/NOを反転設定し正常な信号が入るか確認します。'
        }},
        {img:cmImg('J','nbga',31),tx:{
          en:'How to check the Input signal via the Host program: run the Host program, go to Handler ▸ I/O, and watch the sensor\'s Input signal while performing the action that should trigger it (examples: Grip Output=On → Input=On; Grip Output=Off → Ungrip Input=On).',
          ko:'Host 프로그램으로 Input 신호 확인하는 방법: Host 프로그램 실행 후 Handler ▸ I/O에 진입해 해당 Sensor의 동작(예1: Grip Output On → Input On, 예2: Grip Output Off → Ungrip Input On)을 수행하며 Input 신호를 확인합니다.',
          zhCN:'透过Host程序确认Input信号的方法:执行Host程序后进入Handler ▸ I/O,执行该Sensor对应的动作(例1:Grip Output On → Input On;例2:Grip Output Off → Ungrip Input On)并确认Input信号。',
          zhTW:'透過Host程式確認Input訊號的方法:執行Host程式後進入Handler ▸ I/O,執行該Sensor對應的動作(例1:Grip Output On → Input On;例2:Grip Output Off → Ungrip Input On)並確認Input訊號。',
          ja:'Hostプログラムで Input信号を確認する方法:Hostプログラムを実行後Handler ▸ I/Oに入り、該当Sensorの動作(例1:Grip Output On → Input On、例2:Grip Output Off → Ungrip Input On)を行いながらInput信号を確認します。'
        }},
        {img:cmImg('J','nbga',32),tx:{
          en:'You can also check the Input signal via the I/O Module LEDs in the electric panel: perform the sensor\'s action and watch for the corresponding LED to light up. (Label numbers and I/O Module numbers differ because labels start at 0 while I/O module numbering starts at 1 — e.g. IN3-07 lights I/O module LED #8, IN3-08 lights LED #9.)',
          ko:'전장 판넬의 I/O Module LED로도 Input 신호를 확인할 수 있습니다: Sensor 동작을 수행하며 해당 LED가 점등되는지 확인합니다. (Label 번호는 0부터, I/O module 번호는 1부터 시작하여 번호가 다르게 표시됩니다 — 예: IN3-07은 I/O module 8번 LED, IN3-08은 9번 LED 점등.)',
          zhCN:'也可透过电装面板的I/O Module LED确认Input信号:执行Sensor动作并确认对应LED是否点亮。(Label编号从0开始、I/O module编号从1开始,因此两者编号不同——例如:IN3-07会点亮I/O module的8号LED,IN3-08会点亮9号LED。)',
          zhTW:'也可透過電裝面板的I/O Module LED確認Input訊號:執行Sensor動作並確認對應LED是否點亮。(Label編號從0開始、I/O module編號從1開始,因此兩者編號不同——例如:IN3-07會點亮I/O module的8號LED,IN3-08會點亮9號LED。)',
          ja:'電装パネルのI/O Module LEDでもInput信号を確認できます:Sensor動作を行いながら該当LEDが点灯するか確認します。(Label番号は0から、I/O module番号は1から始まるため番号が異なります——例:IN3-07はI/O moduleの8番LED、IN3-08は9番LEDが点灯。)'
        }},
        {img:cmImg('J','nbga',33),tx:{
          en:'To test whether a specific Input (e.g. #19) works, you can temporarily move another Input signal pin onto it to check (always restore it afterward). If neither the sensor\'s process nor a direct N24V injection at the socket lights the I/O Module LED, the module itself is likely faulty; if injecting N24V does light it, suspect the Input line wiring or the sensor.',
          ko:'특정 Input(예: 19번)이 정상 동작하는지 확인하려면 다른 Input 신호 Pin을 임시로 옮겨 확인할 수 있습니다(확인 후 반드시 원복). Sensor 동작 프로세스를 수행해도 LED가 점등되지 않고, 해당 Socket에 N24V를 직접 인가해도 LED가 점등되지 않으면 I/O Module 불량을 의심하고, N24V 인가 시 LED가 점등되면 Input Line 배선 또는 Sensor 불량을 의심합니다.',
          zhCN:'若要确认特定Input(如19号)是否正常动作,可暂时移动其他Input信号Pin进行确认(确认后务必复原)。若执行Sensor动作流程后LED不亮,且直接对该Socket施加N24V后LED仍不亮,可怀疑I/O Module不良;若施加N24V后LED点亮,则可怀疑Input Line配线或Sensor不良。',
          zhTW:'若要確認特定Input(如19號)是否正常動作,可暫時移動其他Input訊號Pin進行確認(確認後務必復原)。若執行Sensor動作流程後LED不亮,且直接對該Socket施加N24V後LED仍不亮,可懷疑I/O Module不良;若施加N24V後LED點亮,則可懷疑Input Line配線或Sensor不良。',
          ja:'特定のInput(例:19番)が正常動作するか確認するには、別のInput信号Pinを一時的に移動して確認できます(確認後は必ず元に戻します)。Sensorの動作プロセスを行ってもLEDが点灯せず、該当SocketにN24Vを直接印加してもLEDが点灯しない場合はI/O Moduleの不良を疑い、N24V印加でLEDが点灯する場合はInput Lineの配線またはSensorの不良を疑います。'
        }},
        {img:cmImg('J','nbga',34),tx:{
          en:'1.2.2 Connection Failure (CLCtrl program)',
          ko:'1.2.2 연결 불량(CLCtrl program)',
          zhCN:'1.2.2 连接不良(CLCtrl program)',
          zhTW:'1.2.2 連接不良(CLCtrl program)',
          ja:'1.2.2 接続不良(CLCtrl program)'
        }},
        {img:cmImg('J','nbga',35),tx:{
          en:'Check that the Camera and AF controller are powered on. Then fully power down the Sentech camera and Host PC, wait over 1 minute for it to fully discharge, and reboot/reconnect.',
          ko:'Camera 전원이 On되어 있는지, AF Controller 전원이 On되어 있는지 확인합니다. Sentech Camera와 Host PC의 전원을 해체하고 1분 이상 완전 방전시킨 뒤 재부팅하여 재연결합니다.',
          zhCN:'确认Camera电源是否为On、AF Controller电源是否为On。将Sentech Camera与Host PC断电,完全放电1分钟以上后重新开机并重新连接。',
          zhTW:'確認Camera電源是否為On、AF Controller電源是否為On。將Sentech Camera與Host PC斷電,完全放電1分鐘以上後重新開機並重新連接。',
          ja:'Camera電源がOnになっているか、AF Controller電源がOnになっているか確認します。Sentech CameraとHost PCの電源を落とし、1分以上完全放電させた後、再起動して再接続します。'
        }},
        {img:cmImg('J','nbga',36),tx:{
          en:'In the AF program, select Camera mode and uncheck Camera Sync (to avoid an access conflict). Check that the CL Cable connects the Camera to the AF controller\'s Base port, and check the port connection, connector pin shorts, and cable damage.',
          ko:'AF Program에서 Camera Mode를 선택하고 Camera Sync 체크를 해제합니다(액세스 충돌 방지). CL Cable이 Camera↔AF Controller의 Base 단자에 연결되었는지, Port 연결 상태·Connector Pin 쇼트·Cable 손상 여부를 확인합니다.',
          zhCN:'在AF Program中选择Camera Mode并取消勾选Camera Sync(避免存取冲突)。确认CL Cable是否连接于Camera↔AF Controller的Base端子,并检查Port连接状态·Connector Pin短路·Cable损伤情况。',
          zhTW:'在AF Program中選擇Camera Mode並取消勾選Camera Sync(避免存取衝突)。確認CL Cable是否連接於Camera↔AF Controller的Base端子,並檢查Port連接狀態·Connector Pin短路·Cable損傷情況。',
          ja:'AF ProgramでCamera Modeを選択し、Camera Syncのチェックを外します(アクセス競合防止)。CL CableがCamera↔AF ControllerのBase端子に接続されているか、Port接続状態・Connector Pinのショート・Cable損傷の有無を確認します。'
        }},
        {img:cmImg('J','nbga',37),tx:{
          en:'1.2.3 Connection Failure (AF program)',
          ko:'1.2.3 연결 불량(AF program)',
          zhCN:'1.2.3 连接不良(AF program)',
          zhTW:'1.2.3 連接不良(AF program)',
          ja:'1.2.3 接続不良(AF program)'
        }},
        {img:cmImg('J','nbga',38),tx:{
          en:'Check that the AF controller is powered on, and check the port connection, connector pin shorts, and cable damage.',
          ko:'AF Controller 전원이 On되어 있는지 확인하고, Port 연결 상태·Connector Pin 쇼트·Cable 손상 여부를 확인합니다.',
          zhCN:'确认AF Controller电源是否为On,并检查Port连接状态·Connector Pin短路·Cable损伤情况。',
          zhTW:'確認AF Controller電源是否為On,並檢查Port連接狀態·Connector Pin短路·Cable損傷情況。',
          ja:'AF Controllerの電源がOnになっているか確認し、Port接続状態・Connector Pinのショート・Cable損傷の有無を確認します。'
        }},
        {img:cmImg('J','nbga',39),tx:{
          en:'In the AF program, switch the Main interface to Ethernet, enter the AF controller\'s IP address, and click Connect — if it fails, verify the IP address was entered correctly.',
          ko:'AF Program에서 Main Interface를 Ethernet으로 변경하고, 해당 AF Controller의 IP 주소를 입력한 뒤 Connect합니다 — 연결되지 않으면 IP 주소가 올바르게 입력되었는지 확인합니다.',
          zhCN:'在AF Program中将Main Interface切换为Ethernet,输入该AF Controller的IP位址后点击Connect——若无法连接,请确认IP位址是否输入正确。',
          zhTW:'在AF Program中將Main Interface切換為Ethernet,輸入該AF Controller的IP位址後點擊Connect——若無法連接,請確認IP位址是否輸入正確。',
          ja:'AF ProgramでMain InterfaceをEthernetに変更し、該当AF ControllerのIPアドレスを入力後Connectします——接続できない場合はIPアドレスが正しく入力されているか確認します。'
        }},
        {img:cmImg('J','nbga',40),tx:{
          en:'Check that a LAN cable is connected to the Ethernet port, and check the port connection, connector pin shorts, and cable damage.',
          ko:'Ethernet Port에 LAN Cable이 연결되었는지 확인하고, Port 연결 상태·Connector Pin 쇼트·Cable 손상 여부를 확인합니다.',
          zhCN:'确认LAN Cable是否连接至Ethernet Port,并检查Port连接状态·Connector Pin短路·Cable损伤情况。',
          zhTW:'確認LAN Cable是否連接至Ethernet Port,並檢查Port連接狀態·Connector Pin短路·Cable損傷情況。',
          ja:'Ethernet PortにLAN Cableが接続されているか確認し、Port接続状態・Connector Pinのショート・Cable損傷の有無を確認します。'
        }},
        {img:cmImg('J','nbga',41),tx:{
          en:'Verify the LAN cables between Host PC and each AF controller match their network names (AF01, AF02, AF03) — check by unplugging an AF controller\'s LAN cable and confirming that specific network connection drops. Also check the AF IP settings in the Host PC\'s Network & Internet settings.',
          ko:'Host PC ↔ AF Controller의 LAN Cable이 네트워크 이름(AF01, AF02, AF03)에 맞게 연결되었는지 확인합니다 — AF Controller의 LAN Cable을 뽑아 해당 네트워크 연결이 끊어지는지로 확인 가능합니다. Host PC의 <네트워크 및 인터넷 설정>에서 AF IP 설정도 확인합니다.',
          zhCN:'确认Host PC↔AF Controller的LAN Cable是否依网络名称(AF01、AF02、AF03)正确连接——可透过拔除AF Controller的LAN Cable、确认对应网络连接是否中断来验证。同时在Host PC的〈网络和网际网路设置〉中确认AF IP设置。',
          zhTW:'確認Host PC↔AF Controller的LAN Cable是否依網路名稱(AF01、AF02、AF03)正確連接——可透過拔除AF Controller的LAN Cable、確認對應網路連接是否中斷來驗證。同時在Host PC的〈網路和網際網路設定〉中確認AF IP設定。',
          ja:'Host PC↔AF ControllerのLAN Cableがネットワーク名(AF01、AF02、AF03)通りに接続されているか確認します——AF ControllerのLAN Cableを抜いて該当ネットワーク接続が切れるかで確認できます。Host PCの〈ネットワークとインターネットの設定〉でAF IP設定も確認します。'
        }},
        {img:cmImg('J','nbga',42),tx:{
          en:'In the AF program, switch the Main interface to RS232, select the correct COM port number connected to the AF controller, and Connect. Fully power down and reconnect the Sentech camera + Host PC (discharge over 1 minute) if needed; if it still fails, try moving the connection to a different COM port before connecting.',
          ko:'AF Program에서 Main Interface를 RS232로 변경하고, AF Controller와 연결된 COM Port 번호를 선택 후 Connect합니다. 필요 시 Sentech Camera와 Host PC 전원을 해체하고 1분 이상 완전 방전 후 재부팅하여 재연결합니다 — 그래도 연결되지 않으면 다른 COM Port로 옮겨 Connect를 시도합니다.',
          zhCN:'在AF Program中将Main Interface切换为RS232,选择与AF Controller连接的COM Port编号后Connect。必要时将Sentech Camera与Host PC断电,完全放电1分钟以上后重新开机并重新连接——若仍无法连接,可尝试改接其他COM Port后再Connect。',
          zhTW:'在AF Program中將Main Interface切換為RS232,選擇與AF Controller連接的COM Port編號後Connect。必要時將Sentech Camera與Host PC斷電,完全放電1分鐘以上後重新開機並重新連接——若仍無法連接,可嘗試改接其他COM Port後再Connect。',
          ja:'AF ProgramでMain InterfaceをRS232に変更し、AF Controllerに接続されたCOM Port番号を選択後Connectします。必要に応じてSentech CameraとHost PCの電源を落とし、1分以上完全放電後に再起動して再接続します——それでも接続できない場合は別のCOM Portに繋ぎ替えてConnectを試みます。'
        }},
        {img:cmImg('J','nbga',43),tx:{
          en:'Check that a cable is connected to the AF controller\'s RS-232 port, and check the port connection, cable crossing (verify it isn\'t connected to a different AF controller), connector pin shorts, and cable damage.',
          ko:'AF Controller의 RS-232 Port에 Cable이 연결되었는지 확인하고, Port 연결 상태·Cable Cross 여부(다른 AF Controller와 연결되지 않았는지)·Connector Pin 쇼트·Cable 손상 여부를 확인합니다.',
          zhCN:'确认AF Controller的RS-232 Port是否已连接Cable,并检查Port连接状态·Cable Cross情况(是否误接至其他AF Controller)·Connector Pin短路·Cable损伤情况。',
          zhTW:'確認AF Controller的RS-232 Port是否已連接Cable,並檢查Port連接狀態·Cable Cross情況(是否誤接至其他AF Controller)·Connector Pin短路·Cable損傷情況。',
          ja:'AF ControllerのRS-232 PortにCableが接続されているか確認し、Port接続状態・Cable Cross(別のAF Controllerに接続されていないか)・Connector Pinのショート・Cable損傷の有無を確認します。'
        }},
        {img:cmImg('J','nbga',44),tx:{
          en:'Check that the AF program version is compatible with the Host program — the version can be confirmed on the screen shown when Connect is clicked after running the AF program.',
          ko:'Host Program과 호환되는 AF Program 버전인지 확인합니다 — AF Program 실행 후 Connect 시 표시되는 화면에서 버전을 확인할 수 있습니다.',
          zhCN:'确认AF Program版本是否与Host Program相容——执行AF Program后点击Connect时显示的画面即可确认版本。',
          zhTW:'確認AF Program版本是否與Host Program相容——執行AF Program後點擊Connect時顯示的畫面即可確認版本。',
          ja:'Host Programと互換性のあるAF Programバージョンか確認します——AF Program実行後Connect時に表示される画面でバージョンを確認できます。'
        }},
        {img:cmImg('J','nbga',45),tx:{
          en:'1.2.4 Camera Connection Failure',
          ko:'1.2.4 Camera 연결불량',
          zhCN:'1.2.4 Camera连接不良',
          zhTW:'1.2.4 Camera連接不良',
          ja:'1.2.4 Camera接続不良'
        }},
        {img:cmImg('J','nbga',46),tx:{
          en:'Check that the LED Controller is powered on, check that the Camera is powered on (power/LED indicator position varies by camera spec), and check the cable connections (Power cable, CXP cable, or CL cable).',
          ko:'LED Controller 전원이 켜져 있는지, Camera 전원이 켜져 있는지 확인합니다(Camera 사양에 따라 전원·LED 표시등 위치가 다를 수 있음). Cable 연결 상태(Power Cable, CXP Cable 또는 CL Cable)를 점검합니다.',
          zhCN:'确认LED Controller电源是否开启、Camera电源是否开启(依Camera规格不同,电源·LED指示灯位置可能不同)。检查Cable连接状态(Power Cable、CXP Cable或CL Cable)。',
          zhTW:'確認LED Controller電源是否開啟、Camera電源是否開啟(依Camera規格不同,電源·LED指示燈位置可能不同)。檢查Cable連接狀態(Power Cable、CXP Cable或CL Cable)。',
          ja:'LED Controllerの電源が入っているか、Cameraの電源が入っているか確認します(Camera仕様により電源・LED表示灯の位置が異なる場合があります)。Cable接続状態(Power Cable、CXP Cable、またはCL Cable)を点検します。'
        }},
        {img:cmImg('J','nbga',47),tx:{
          en:'Check the iGrab config program\'s Channel and DMA memory settings (these vary by camera spec). After changing a setting, click Reboot to apply it.',
          ko:'iGrab Config 프로그램의 Channel, DMA Memory 설정을 확인합니다(Camera 사양에 따라 설정값이 다름). 설정 변경 후 Reboot을 클릭해 적용합니다.',
          zhCN:'确认iGrab Config程序的Channel、DMA Memory设置(依Camera规格不同设置值也不同)。变更设置后点击Reboot以套用。',
          zhTW:'確認iGrab Config程式的Channel、DMA Memory設定(依Camera規格不同設定值也不同)。變更設定後點擊Reboot以套用。',
          ja:'iGrab Config プログラムのChannel、DMA Memory設定を確認します(Camera仕様により設定値が異なります)。設定変更後はRebootをクリックして適用します。'
        }},
        {img:cmImg('J','nbga',48),tx:{
          en:'Check that the iGrab board is properly seated (it must be in the blue x16 slot), and check that its F/W and Library version matches the equipment\'s H/W & S/W spec.',
          ko:'iGrab Board의 장착 상태를 점검합니다(파란색 x16 슬롯에 장착되어야 함). iGrab Program의 F/W 및 Library 버전이 설비 사양(H/W·S/W)에 맞게 적용되었는지 확인합니다.',
          zhCN:'检查iGrab Board的安装状态(须安装于蓝色x16插槽)。确认iGrab Program的F/W及Library版本是否符合设备规格(H/W·S/W)。',
          zhTW:'檢查iGrab Board的安裝狀態(須安裝於藍色x16插槽)。確認iGrab Program的F/W及Library版本是否符合設備規格(H/W·S/W)。',
          ja:'iGrab Boardの装着状態を点検します(青色のx16スロットに装着されている必要があります)。iGrab ProgramのF/WおよびLibraryバージョンが設備仕様(H/W・S/W)に適合しているか確認します。'
        }},
        {img:cmImg('J','nbga',49),tx:{
          en:'Check the iGrab comm program settings: run the program, click Connect, and load the camera information.',
          ko:'iGrab Comm 프로그램 설정을 확인합니다 — 프로그램 실행 후 Connect를 클릭해 Camera 정보를 불러오고 연결합니다.',
          zhCN:'确认iGrab Comm程序的设置——执行程序后点击Connect,读取Camera信息并连接。',
          zhTW:'確認iGrab Comm程式的設定——執行程式後點擊Connect,讀取Camera資訊並連接。',
          ja:'iGrab Comm プログラムの設定を確認します——プログラム実行後Connectをクリックし、Cameraの情報を読み込み接続します。'
        }},
        {img:cmImg('J','nbga',50),tx:{
          en:'Detailed iGrab comm program settings — select Guru in the combo box at the bottom of the settings window and configure as shown (AcquisitionControl: TriggerSelector=Exposure Start, TriggerMode=On, TriggerSource=CXPin, TriggerActivation=Rising Edge, ExposureMode=Trigger Width; TransportLayerControl ▸ CoaXPress: CxpLinkConfiguration=CXP6_X4). Once set, click Acquisition Start to run the camera.',
          ko:'iGrab Comm 프로그램 상세 설정 — 설정창 하단 콤보박스를 Guru로 선택 후 그림처럼 설정합니다(AcquisitionControl: TriggerSelector=Exposure Start, TriggerMode=On, TriggerSource=CXPin, TriggerActivation=Rising Edge, ExposureMode=Trigger Width; TransportLayerControl ▸ CoaXPress: CxpLinkConfiguration=CXP6_X4). 설정 완료 후 Acquisition Start를 클릭해 Camera를 동작시킵니다.',
          zhCN:'iGrab Comm程序详细设置——将设置窗口下方的下拉框选为Guru后如图设置(AcquisitionControl:TriggerSelector=Exposure Start、TriggerMode=On、TriggerSource=CXPin、TriggerActivation=Rising Edge、ExposureMode=Trigger Width;TransportLayerControl ▸ CoaXPress:CxpLinkConfiguration=CXP6_X4)。设置完成后点击Acquisition Start使Camera运作。',
          zhTW:'iGrab Comm程式詳細設定——將設定視窗下方的下拉選單選為Guru後如圖設定(AcquisitionControl:TriggerSelector=Exposure Start、TriggerMode=On、TriggerSource=CXPin、TriggerActivation=Rising Edge、ExposureMode=Trigger Width;TransportLayerControl ▸ CoaXPress:CxpLinkConfiguration=CXP6_X4)。設定完成後點擊Acquisition Start使Camera運作。',
          ja:'iGrab Commプログラムの詳細設定——設定ウィンドウ下部のコンボボックスをGuruに選択後、図のように設定します(AcquisitionControl:TriggerSelector=Exposure Start、TriggerMode=On、TriggerSource=CXPin、TriggerActivation=Rising Edge、ExposureMode=Trigger Width;TransportLayerControl ▸ CoaXPress:CxpLinkConfiguration=CXP6_X4)。設定完了後Acquisition Startをクリックしカメラを動作させます。'
        }},
        {img:cmImg('J','nbga',51),tx:{
          en:'1.2.5 Grab Timeout',
          ko:'1.2.5 Grab time out',
          zhCN:'1.2.5 Grab time out',
          zhTW:'1.2.5 Grab time out',
          ja:'1.2.5 Grab time out'
        }},
        {img:cmImg('J','nbga',52),tx:{
          en:'Open Device Manager and check that the Graphic card, Grab board (iGrab board), and Sync board (INTEKPLUS SyncPci) are all recognized correctly.',
          ko:'장치관리자를 열고 Graphic Card, Grab Board(iGrab Board), Sync Board(INTEKPLUS SyncPci)가 정상적으로 인식되는지 확인합니다.',
          zhCN:'打开设备管理器,确认Graphic Card、Grab Board(iGrab Board)、Sync Board(INTEKPLUS SyncPci)是否被正常识别。',
          zhTW:'打開裝置管理員,確認Graphic Card、Grab Board(iGrab Board)、Sync Board(INTEKPLUS SyncPci)是否被正常識別。',
          ja:'デバイスマネージャーを開き、Graphic Card、Grab Board(iGrab Board)、Sync Board(INTEKPLUS SyncPci)が正常に認識されているか確認します。'
        }},
        {img:cmImg('J','nbga',53),tx:{
          en:'Check that the LED Controller is powered on, check that the Camera is powered on (position varies by spec), and check the cable connections (Power cable, CXP cable channel order, CXP cable, or CL cable).',
          ko:'LED Controller 전원이 켜져 있는지, Camera 전원이 켜져 있는지 확인합니다(사양에 따라 위치가 다를 수 있음). Cable 연결 상태(Power Cable, CXP Cable 채널 순서, CXP Cable 또는 CL Cable)를 점검합니다.',
          zhCN:'确认LED Controller电源是否开启、Camera电源是否开启(依规格不同位置可能不同)。检查Cable连接状态(Power Cable、CXP Cable通道顺序、CXP Cable或CL Cable)。',
          zhTW:'確認LED Controller電源是否開啟、Camera電源是否開啟(依規格不同位置可能不同)。檢查Cable連接狀態(Power Cable、CXP Cable通道順序、CXP Cable或CL Cable)。',
          ja:'LED Controllerの電源が入っているか、Cameraの電源が入っているか確認します(仕様により位置が異なる場合があります)。Cable接続状態(Power Cable、CXP Cableのチャンネル順、CXP CableまたはCL Cable)を点検します。'
        }},
        {img:cmImg('J','nbga',54),tx:{
          en:'Open the PC cover and check the Flat cable for damage, and that the Grab board is properly connected to power. (Some Grab board models have their own power cable and power switch.)',
          ko:'PC 커버를 열고 Flat Cable 손상 유무 및 Grab Board에 전원이 연결되어 있는지 확인합니다. (일부 Grab Board는 전원 케이블·전원 스위치가 별도로 있는 모델도 있음)',
          zhCN:'打开PC机盖,确认Flat Cable是否损坏,以及Grab Board是否已连接电源。(部分Grab Board型号具有独立的电源线·电源开关)',
          zhTW:'打開PC機殼,確認Flat Cable是否損壞,以及Grab Board是否已連接電源。(部分Grab Board型號具有獨立的電源線·電源開關)',
          ja:'PCのカバーを開け、Flat Cableの損傷有無、およびGrab Boardに電源が接続されているか確認します。(一部のGrab Boardには専用の電源ケーブル・電源スイッチを持つモデルもあります)'
        }},
        {img:cmImg('J','nbga',55),tx:{
          en:'Run iCamCom: File ▸ Connect ▸ select the Camera ▸ Connect ▸ click Acquisition Start, then close the program.',
          ko:'iCamCom을 실행합니다: File ▸ Connect ▸ Camera 선택 후 Connect ▸ Acquisition Start를 클릭한 뒤 프로그램을 닫습니다.',
          zhCN:'执行iCamCom:File ▸ Connect ▸ 选择Camera后Connect ▸ 点击Acquisition Start后关闭程序。',
          zhTW:'執行iCamCom:File ▸ Connect ▸ 選擇Camera後Connect ▸ 點擊Acquisition Start後關閉程式。',
          ja:'iCamComを実行します:File ▸ Connect ▸ Cameraを選択後Connect ▸ Acquisition Startをクリックした後プログラムを閉じます。'
        }},
        {img:cmImg('J','nbga',56),tx:{
          en:'Run Vision PC ▸ C: drive ▸ Vision ▸ Bin ▸ *.Apple, and check that the Apple settings (camera spec, Frame period, Illumination delay, PZT spec, etc.) are correctly configured.',
          ko:'Vision PC의 C드라이브 ▸ Vision ▸ Bin ▸ *.Apple을 실행합니다. Apple 설정이 Camera 사양·Frame Period·Illumination Delay·PZT 사양 등에 맞게 설정되어 있는지 확인합니다.',
          zhCN:'执行Vision PC的C磁盘机 ▸ Vision ▸ Bin ▸ *.Apple。确认Apple设置是否符合Camera规格·Frame Period·Illumination Delay·PZT规格等。',
          zhTW:'執行Vision PC的C磁碟機 ▸ Vision ▸ Bin ▸ *.Apple。確認Apple設定是否符合Camera規格·Frame Period·Illumination Delay·PZT規格等。',
          ja:'Vision PCのCドライブ ▸ Vision ▸ Bin ▸ *.Appleを実行します。Apple設定がCamera仕様・Frame Period・Illumination Delay・PZT仕様などに合わせて設定されているか確認します。'
        }},
        {img:cmImg('J','nbga',57),tx:{
          en:'A missing Sync board firmware can also cause a Grab fail or Grab timeout — this can be resolved by following the "1.4.1 Lighting Failure – Sync Board F/W Update" procedure in this manual.',
          ko:'Sync Board에 Firmware가 없어도 Grab Fail 또는 Grab Time Out이 발생할 수 있습니다 — 본 문서의 "1.4.1 조명 불량 – Sync Board F/W Update 방법"을 참조해 조치할 수 있습니다.',
          zhCN:'即使Sync Board没有Firmware,也可能发生Grab Fail或Grab Time Out——可参考本文档"1.4.1 照明不良 – Sync Board F/W Update方法"进行处理。',
          zhTW:'即使Sync Board沒有Firmware,也可能發生Grab Fail或Grab Time Out——可參考本文件「1.4.1 照明不良 – Sync Board F/W Update方法」進行處理。',
          ja:'Sync BoardにFirmwareがない場合もGrab FailやGrab Time Outが発生することがあります——本書の「1.4.1 照明不良 – Sync Board F/W Update方法」を参照して対処できます。'
        }},
        {img:cmImg('J','nbga',58),tx:{
          en:'1.3.1 Motion Movement Failure',
          ko:'1.3.1 Motion 이동 불량',
          zhCN:'1.3.1 Motion移动不良',
          zhTW:'1.3.1 Motion移動不良',
          ja:'1.3.1 Motion移動不良'
        }},
        {img:cmImg('J','nbga',59),tx:{
          en:'If a gap appears between the commanded move value and the actual move amount, check the Motor Driver Setting. (Applies only to certain motors: the AF Step Motor is set to dial position 1P, and motors connected to a PM Module are set to 2P.)',
          ko:'이동 명령값과 실제 이동량에 차이가 발생하면 Motor Driver Setting 상태를 확인합니다. (일부 Motor에만 해당되는 내용이며, AF Step Motor는 1P, PM Module과 연결되는 Motor는 2P로 설정)',
          zhCN:'若移动指令值与实际移动量出现差异,请确认Motor Driver Setting状态。(仅适用于部分Motor;AF Step Motor设为1P,与PM Module连接的Motor设为2P)',
          zhTW:'若移動指令值與實際移動量出現差異,請確認Motor Driver Setting狀態。(僅適用於部分Motor;AF Step Motor設為1P,與PM Module連接的Motor設為2P)',
          ja:'移動指令値と実際の移動量に差が生じた場合はMotor Driver Settingの状態を確認します。(一部のMotorのみ該当する内容で、AF Step Motorは1P、PM Moduleに接続されるMotorは2Pに設定)'
        }},
        {img:cmImg('J','nbga',60),tx:{
          en:'The Coupler connects the motor shaft to the screw (rod) to transmit power. Check that the Coupler\'s fixing bolt hasn\'t come loose.',
          ko:'Coupler는 Motor Shaft와 Screw(Rod)를 연결시켜 동력을 전달하는 역할을 합니다. Coupler의 고정 볼트가 느슨해지지 않았는지 확인합니다.',
          zhCN:'Coupler的作用是连接Motor Shaft与Screw(Rod)以传递动力。请确认Coupler的固定螺栓是否松动。',
          zhTW:'Coupler的作用是連接Motor Shaft與Screw(Rod)以傳遞動力。請確認Coupler的固定螺栓是否鬆動。',
          ja:'CouplerはMotor ShaftとScrew(Rod)を連結し動力を伝達する役割を果たします。Couplerの固定ボルトが緩んでいないか確認します。'
        }},
        {img:cmImg('J','nbga',61),tx:{
          en:'Set the Step Dial based on whether a reducer is used, the Ball Screw Pitch, and the fixed AF Pulse value (10 Pulse/µm).',
          ko:'감속기 적용 여부, Ball Screw Pitch, 고정값인 AF Pulse값(10 Pulse/um)을 고려하여 Step Dial을 설정합니다.',
          zhCN:'需考虑是否使用减速机、Ball Screw Pitch,以及固定值AF Pulse值(10 Pulse/um)来设置Step Dial。',
          zhTW:'需考慮是否使用減速機、Ball Screw Pitch,以及固定值AF Pulse值(10 Pulse/um)來設定Step Dial。',
          ja:'減速機の適用有無、Ball Screw Pitch、固定値であるAF Pulse値(10 Pulse/um)を考慮してStep Dialを設定します。'
        }},
        {img:cmImg('J','nbga',62),tx:{
          en:'Worked calculation of the Step Dial: check the Z-axis ball screw pitch (e.g. 5mm per revolution) and the Stepping Motor Driver\'s resolution (Dial 9 → 0.018° step angle → 20,000 pulse/rev; Dial 6 → 0.072° → 5,000 pulse/rev). Using the proportion "ball screw pitch : motor resolution = 1µm : χ", Dial 9 gives χ=4 pulse/µm (40 pulse/µm with a 10:1 reducer applied), and Dial 6 gives χ=1 pulse/µm (10 pulse/µm with the reducer).',
          ko:'Step Dial 계산 예시: Z축 Ball Screw Pitch(예: 1회전당 5mm 이동) 확인, Z축을 구동하는 Stepping Motor Driver의 해상도 확인(Dial 9 → Step Angle 0.018° → 1회전당 20,000pulse; Dial 6 → 0.072° → 5,000pulse). "Ball Screw Pitch : Motor 해상도 = 1um : χ" 비례식으로, Dial 9는 χ=4pulse/um(10:1 감속기 적용 시 40pulse/um), Dial 6은 χ=1pulse/um(감속기 적용 시 10pulse/um)이 됩니다.',
          zhCN:'Step Dial计算示例:确认Z轴Ball Screw Pitch(如每转5mm),确认驱动Z轴的Stepping Motor Driver分辨率(Dial 9→Step Angle 0.018°→每转20,000pulse;Dial 6→0.072°→5,000pulse)。以"Ball Screw Pitch:Motor分辨率=1um:χ"的比例式,Dial 9得χ=4pulse/um(套用10:1减速机后为40pulse/um),Dial 6得χ=1pulse/um(套用减速机后为10pulse/um)。',
          zhTW:'Step Dial計算範例:確認Z軸Ball Screw Pitch(如每轉5mm),確認驅動Z軸的Stepping Motor Driver解析度(Dial 9→Step Angle 0.018°→每轉20,000pulse;Dial 6→0.072°→5,000pulse)。以「Ball Screw Pitch:Motor解析度=1um:χ」的比例式,Dial 9得χ=4pulse/um(套用10:1減速機後為40pulse/um),Dial 6得χ=1pulse/um(套用減速機後為10pulse/um)。',
          ja:'Step Dial計算例:Z軸のBall Screw Pitch(例:1回転あたり5mm移動)を確認、Z軸を駆動するStepping Motor Driverの分解能を確認(Dial 9 → Step Angle 0.018° → 1回転20,000pulse;Dial 6 → 0.072° → 5,000pulse)。「Ball Screw Pitch:Motor分解能=1um:χ」の比例式で、Dial 9はχ=4pulse/um(10:1減速機適用時40pulse/um)、Dial 6はχ=1pulse/um(減速機適用時10pulse/um)となります。'
        }},
        {img:cmImg('J','nbga',63),tx:{
          en:'Check that the Motor Parameter values are set correctly in Host Program ▸ Handler ▸ Motor.',
          ko:'Host Program ▸ Handler ▸ Motor에서 Motor Parameter의 설정값이 알맞게 설정되었는지 확인합니다.',
          zhCN:'在Host Program ▸ Handler ▸ Motor中确认Motor Parameter的设置值是否正确。',
          zhTW:'在Host Program ▸ Handler ▸ Motor中確認Motor Parameter的設定值是否正確。',
          ja:'Host Program ▸ Handler ▸ MotorでMotor Parameterの設定値が正しく設定されているか確認します。'
        }},
        {img:cmImg('J','nbga',64),tx:{
          en:'For movement in only one direction, check that the Pulse value in Motor Parameter (Host Program ▸ Handler ▸ Motor) is set correctly.',
          ko:'한쪽 방향으로만 움직이는 경우, Host Program ▸ Handler ▸ Motor에서 Motor Parameter의 Pulse 값이 알맞게 설정되었는지 확인합니다.',
          zhCN:'若只朝单一方向移动,请在Host Program ▸ Handler ▸ Motor中确认Motor Parameter的Pulse值是否设置正确。',
          zhTW:'若只朝單一方向移動,請在Host Program ▸ Handler ▸ Motor中確認Motor Parameter的Pulse值是否設定正確。',
          ja:'一方向にしか動かない場合、Host Program ▸ Handler ▸ MotorでMotor ParameterのPulse値が正しく設定されているか確認します。'
        }},
        {img:cmImg('J','nbga',65),tx:{
          en:'1.3.2 Interlock Malfunction',
          ko:'1.3.2 Interlock 동작 불량',
          zhCN:'1.3.2 Interlock動作不良',
          zhTW:'1.3.2 Interlock動作不良',
          ja:'1.3.2 Interlock動作不良'
        }},
        {img:cmImg('J','nbga',66),tx:{
          en:'If a door opens during Auto run, or won\'t close even after closing it via I/O in the Host program, check whether the Interlock dial has reverted to Unlock — remove the interlock manual-operation prevention cover (steel or rubber cap) on top of the door, then use a tool matching the dial shape to switch it back to Lock. (Caution: excessive force may damage it.) If the door still won\'t close while the dial shows Lock, check the I/O wiring or the interlock\'s internal wiring (refer to the circuit diagram).',
          ko:'Auto Run 동작 중 문이 열리거나, Host 프로그램에서 I/O로 문을 닫았는데도 문이 열리면 Interlock의 Dial 상태가 Unlock으로 돌아가 있는지 확인합니다 — Door 상부의 Interlock 수동 조작 방지 커버(스틸마개 또는 고무마개)를 제거한 뒤, 다이얼 모양에 맞는 공구로 Lock 상태로 변경합니다(주의: 과도한 힘으로 조작 시 파손될 수 있음). Dial이 Lock 상태임에도 문이 닫히지 않으면 I/O 배선 또는 Interlock 내부 배선을 확인합니다(내부 배선은 회로도 참조).',
          zhCN:'若Auto Run运转中门开启,或在Host程序中透过I/O关门后门仍开启,请确认Interlock的Dial状态是否又回到Unlock——拆下Door上部的Interlock手动操作防止盖(钢盖或橡胶盖)后,用与拨盘形状相符的工具切换为Lock状态(注意:操作力道过大可能导致损坏)。若Dial已为Lock状态但门仍无法关闭,请确认I/O配线或Interlock内部配线(内部配线请参考电路图)。',
          zhTW:'若Auto Run運轉中門開啟,或在Host程式中透過I/O關門後門仍開啟,請確認Interlock的Dial狀態是否又回到Unlock——拆下Door上部的Interlock手動操作防止蓋(鋼蓋或橡膠蓋)後,用與撥盤形狀相符的工具切換為Lock狀態(注意:操作力道過大可能導致損壞)。若Dial已為Lock狀態但門仍無法關閉,請確認I/O配線或Interlock內部配線(內部配線請參考電路圖)。',
          ja:'Auto Run動作中にドアが開いたり、Hostプログラムで I/Oによりドアを閉めても開いてしまう場合は、Interlockのダイヤル状態がUnlockに戻っていないか確認します——Door上部のInterlock手動操作防止カバー(スチール製またはゴム製)を外し、ダイヤル形状に合った工具でLock状態に変更します(注意:過度な力で操作すると破損する恐れがあります)。ダイヤルがLock状態でもドアが閉まらない場合は、I/O配線またはInterlock内部配線を確認します(内部配線は回路図を参照)。'
        }},
        {img:cmImg('J','nbga',67),tx:{
          en:'1.4.1 Lighting Failure',
          ko:'1.4.1 조명 불량',
          zhCN:'1.4.1 照明不良',
          zhTW:'1.4.1 照明不良',
          ja:'1.4.1 照明不良'
        }},
        {img:cmImg('J','nbga',68),tx:{
          en:'When lighting won\'t turn on: check the LED Controller\'s power status, and check it matches the 2D or 3D Vision spec by its label. It may be a faulty Controller, but occasionally the label is correct while the part inside doesn\'t actually match that spec — so check for that too.',
          ko:'조명이 안 켜질 경우: LED Controller의 전원 상태를 확인하고, 2D Vision 또는 3D Vision 사양에 맞는 LED Controller인지 Label로 확인합니다. Controller 자체가 불량일 수도 있지만, 간혹 Label은 맞게 붙어있으나 내부에 해당 사양의 부품이 들어있지 않은 경우도 있으니 함께 확인합니다.',
          zhCN:'当照明无法点亮时:确认LED Controller的电源状态,并透过标签确认其是否为符合2D Vision或3D Vision规格的LED Controller。可能是Controller本身不良,但偶尔也会出现标签正确、但内部零件并非对应规格的情况,请一并确认。',
          zhTW:'當照明無法點亮時:確認LED Controller的電源狀態,並透過標籤確認其是否為符合2D Vision或3D Vision規格的LED Controller。可能是Controller本身不良,但偶爾也會出現標籤正確、但內部零件並非對應規格的情況,請一併確認。',
          ja:'照明が点灯しない場合:LED Controllerの電源状態を確認し、2D Visionまたは3D Vision仕様に合ったLED Controllerかをラベルで確認します。Controller自体の不良の可能性もありますが、まれにラベルは正しく貼られていても内部に該当仕様の部品が入っていない場合もあるため、あわせて確認します。'
        }},
        {img:cmImg('J','nbga',69),tx:{
          en:'For downward-shining (top) lights, you can manually test each channel to check for a lighting fault (3D Vision uses CH1–3, 2D Vision uses CH1–9, 11, 12): turn on the light manually for a channel, place a mirror underneath it, and check that it shines properly.',
          ko:'낙사조명(위에서 아래로 비추는 조명)의 경우 수동 조작(Manual)으로 각 채널별 조명 불량 여부를 확인할 수 있습니다(3D Vision은 1~3CH, 2D Vision은 1~9, 11, 12CH 사용) — 수동으로 조명을 켠 뒤 조명 아래에 거울을 놓고 조명이 잘 나오는지 확인합니다.',
          zhCN:'对于俯照式照明(由上往下照射的照明),可透过手动操作(Manual)确认各通道的照明是否不良(3D Vision使用1~3CH,2D Vision使用1~9、11、12CH)——手动开启照明后,在照明下方放置镜子确认光线是否正常输出。',
          zhTW:'對於俯照式照明(由上往下照射的照明),可透過手動操作(Manual)確認各通道的照明是否不良(3D Vision使用1~3CH,2D Vision使用1~9、11、12CH)——手動開啟照明後,在照明下方放置鏡子確認光線是否正常輸出。',
          ja:'落射照明(上から下を照らす照明)の場合、手動操作(Manual)で各チャンネルごとの照明不良を確認できます(3D Visionは1~3CH、2D Visionは1~9、11、12CHを使用)——手動で照明を点灯させた後、照明の下に鏡を置いて光がきちんと出ているか確認します。'
        }},
        {img:cmImg('J','nbga',70),tx:{
          en:'You can also test the lighting via the Sync Test Program (run it as administrator): Illum Test ▸ OK ▸ check ISIS-CSPW ▸ Sync All Para Download ▸ Open (load the sync file) ▸ Download ▸ click LED On/intel_on and move the scrollbar to check each channel\'s on/off and brightness control. If the light still won\'t turn on after this, update the Sync Board\'s F/W first, then test the lighting again.',
          ko:'Sync Test Program을 실행해 조명 Test를 진행할 수도 있습니다(관리자 권한으로 실행) — Illum Test ▸ OK ▸ ISIS-CSPW 체크 ▸ Sync All Para Download ▸ Open(Sync 파일 불러오기) ▸ Download ▸ LED On/intel_on 클릭 후 스크롤바를 움직이며 채널별 On/Off·광량 조절 여부를 확인합니다. 그래도 조명이 켜지지 않으면 Sync Board의 F/W를 먼저 Update한 후 조명 Test를 다시 진행합니다.',
          zhCN:'也可执行Sync Test Program进行照明测试(以系统管理员权限执行)——Illum Test ▸ OK ▸ 勾选ISIS-CSPW ▸ Sync All Para Download ▸ Open(载入Sync文件) ▸ Download ▸ 点击LED On/intel_on后移动卷轴确认各通道On/Off·亮度调整是否正常。若照明仍未点亮,请先Update Sync Board的F/W,再重新进行照明测试。',
          zhTW:'也可執行Sync Test Program進行照明測試(以系統管理員權限執行)——Illum Test ▸ OK ▸ 勾選ISIS-CSPW ▸ Sync All Para Download ▸ Open(載入Sync檔案) ▸ Download ▸ 點擊LED On/intel_on後移動捲軸確認各通道On/Off·亮度調整是否正常。若照明仍未點亮,請先Update Sync Board的F/W,再重新進行照明測試。',
          ja:'Sync Test Programを実行して照明テストを行うこともできます(管理者権限で実行)——Illum Test ▸ OK ▸ ISIS-CSPWにチェック ▸ Sync All Para Download ▸ Open(Syncファイルを読み込み) ▸ Download ▸ LED On/intel_onをクリックしスクロールバーを動かしながら各チャンネルのOn/Off・光量調整を確認します。それでも照明が点灯しない場合は、先にSync BoardのF/WをUpdateしてから照明テストを再度行います。'
        }},
        {img:cmImg('J','nbga',71),tx:{
          en:'This procedure updates the Sync Board\'s firmware so the LED Controller can control lighting. Download and install AVR Studio 4 and Intel FPGA 17.1.0.590 from the internal file server, and prepare the AVR/FPGA Firmware Downloader and a USB Type-B cable.',
          ko:'LED Controller가 조명을 컨트롤할 수 있도록 Sync Board에 Firmware를 업데이트하는 과정입니다. 사내 파일 서버에서 AVR Studio 4와 Intel FPGA 17.1.0.590을 다운로드하여 설치하고, AVR/FPGA Firmware Downloader와 USB Type B Cable을 준비합니다.',
          zhCN:'这是为使LED Controller能够控制照明,而对Sync Board进行Firmware更新的流程。从内部文件服务器下载并安装AVR Studio 4与Intel FPGA 17.1.0.590,并准备AVR/FPGA Firmware Downloader及USB Type B Cable。',
          zhTW:'這是為使LED Controller能夠控制照明,而對Sync Board進行Firmware更新的流程。從內部檔案伺服器下載並安裝AVR Studio 4與Intel FPGA 17.1.0.590,並準備AVR/FPGA Firmware Downloader及USB Type B Cable。',
          ja:'LED Controllerが照明をコントロールできるようSync BoardにFirmwareをアップデートする手順です。社内ファイルサーバーからAVR Studio 4とIntel FPGA 17.1.0.590をダウンロードしてインストールし、AVR/FPGA Firmware DownloaderとUSB Type B Cableを準備します。'
        }},
        {img:cmImg('J','nbga',72),tx:{
          en:'Photo of the PC with its cover removed, showing the Sync Board\'s mounting location (Vision PC & Sync Board placement).',
          ko:'PC 커버를 탈거한 모습입니다. Sync Board의 설치 위치는 사진과 같습니다(Vision PC & Sync Board 장착 위치).',
          zhCN:'拆下PC机盖后的样子。Sync Board的安装位置如照片所示(Vision PC & Sync Board安装位置)。',
          zhTW:'拆下PC機殼後的樣子。Sync Board的安裝位置如照片所示(Vision PC & Sync Board安裝位置)。',
          ja:'PCのカバーを外した様子です。Sync Boardの設置位置は写真の通りです(Vision PC & Sync Board装着位置)。'
        }},
        {img:cmImg('J','nbga',73),tx:{
          en:'Caution: connect the Flat Cable with its red wire on the left (red marks pin 1). Connect the downloaders only while the PC is powered off — connect the AVR Downloader and FPGA Downloader as shown, then power the PC on.',
          ko:'주의: Flat Cable의 빨간색 선이 왼쪽에 위치하도록 연결합니다(빨간색=1번 핀). Downloader는 PC 전원이 꺼진 상태에서 연결합니다 — 그림처럼 AVR Downloader와 FPGA Downloader를 연결한 뒤 PC 전원을 켭니다.',
          zhCN:'注意:连接Flat Cable时须使红色线位于左侧(红色代表1号Pin)。请在PC电源关闭的状态下连接Downloader——如图连接AVR Downloader与FPGA Downloader后再开启PC电源。',
          zhTW:'注意:連接Flat Cable時須使紅色線位於左側(紅色代表1號Pin)。請在PC電源關閉的狀態下連接Downloader——如圖連接AVR Downloader與FPGA Downloader後再開啟PC電源。',
          ja:'注意:Flat Cableは赤い線が左側に来るよう接続します(赤=1番ピン)。DownloaderはPCの電源が切れた状態で接続します——図のようにAVR DownloaderとFPGA Downloaderを接続した後、PCの電源を入れます。'
        }},
        {img:cmImg('J','nbga',74),tx:{
          en:'Connect the AVR Downloader to the PC via a USB Type-B cable, run AVR Studio 4, and click the AVR button to connect to the Sync Board.',
          ko:'USB Type B Cable로 AVR Downloader와 PC를 연결합니다. AVR Studio 4를 실행하고 AVR 버튼을 클릭해 Sync Board와 연결합니다.',
          zhCN:'使用USB Type B Cable连接AVR Downloader与PC。执行AVR Studio 4,点击AVR按钮与Sync Board连接。',
          zhTW:'使用USB Type B Cable連接AVR Downloader與PC。執行AVR Studio 4,點擊AVR按鈕與Sync Board連接。',
          ja:'USB Type B CableでAVR DownloaderとPCを接続します。AVR Studio 4を実行し、AVRボタンをクリックしてSync Boardと接続します。'
        }},
        {img:cmImg('J','nbga',75),tx:{
          en:'Click […] to load the firmware file to upload (the path must contain only English filenames — download the 2D/3D Vision firmware files from the internal file server). Click [Program] and wait for the matching completion message; do the same with [Verify]; then close AVR Studio 4.',
          ko:'[...]을 클릭해 업로드할 펌웨어 파일을 불러옵니다(해당 경로에는 영문 파일명만 있어야 함 — 사내 파일 서버에서 2D/3D Vision 펌웨어 파일 다운로드). [Program]을 클릭하고 하단에 완료 메시지가 출력되면 완료, [Verify]도 동일하게 진행한 뒤 AVR Studio 4를 종료합니다.',
          zhCN:'点击[...]载入要上传的Firmware档案(该路径下只能有英文档名——从内部文件服务器下载2D/3D Vision的Firmware文件)。点击[Program]并等待底部出现完成讯息即完成,[Verify]也以相同方式进行,之后关闭AVR Studio 4。',
          zhTW:'點擊[...]載入要上傳的Firmware檔案(該路徑下只能有英文檔名——從內部檔案伺服器下載2D/3D Vision的Firmware檔案)。點擊[Program]並等待底部出現完成訊息即完成,[Verify]也以相同方式進行,之後關閉AVR Studio 4。',
          ja:'[...]をクリックしアップロードするFirmwareファイルを読み込みます(そのパスには英字ファイル名のみが入っている必要があります——社内ファイルサーバーから2D/3D Vision用Firmwareファイルをダウンロード)。[Program]をクリックし、下部に完了メッセージが出れば完了、[Verify]も同様に行った後AVR Studio 4を終了します。'
        }},
        {img:cmImg('J','nbga',76),tx:{
          en:'Connect the FPGA Downloader to the PC via a USB Type-B cable, run the Programmer (Quartus Prime 17.1), click [Hardware Setup…] and select USB-Blaster, then click [Auto Detect] to connect to the Sync Board.',
          ko:'USB Type B Cable로 FPGA Downloader와 PC를 연결합니다. Programmer(Quartus Prime 17.1)를 실행하고 [Hardware Setup…]을 클릭해 USB-Blaster를 선택한 뒤, [Auto Detect]를 클릭해 Sync Board와 연결합니다.',
          zhCN:'使用USB Type B Cable连接FPGA Downloader与PC。执行Programmer(Quartus Prime 17.1),点击[Hardware Setup…]选择USB-Blaster,再点击[Auto Detect]与Sync Board连接。',
          zhTW:'使用USB Type B Cable連接FPGA Downloader與PC。執行Programmer(Quartus Prime 17.1),點擊[Hardware Setup…]選擇USB-Blaster,再點擊[Auto Detect]與Sync Board連接。',
          ja:'USB Type B CableでFPGA DownloaderとPCを接続します。Programmer(Quartus Prime 17.1)を実行し、[Hardware Setup…]をクリックしUSB-Blasterを選択後、[Auto Detect]をクリックしてSync Boardと接続します。'
        }},
        {img:cmImg('J','nbga',77),tx:{
          en:'Double-click <none> next to the EPM1270 device to load the firmware file to update (download the 2D/3D Vision firmware files from the internal file server). Confirm EPM1270T144 is activated as shown; select both Program/Configure and Verify for the EPM1270; click [Start] and wait for the update to complete (Progress 100%); then close the Programmer (Quartus Prime 17.1).',
          ko:'EPM1270 Device의 <none>을 더블클릭해 업데이트할 펌웨어 파일을 불러옵니다(사내 파일 서버에서 2D/3D Vision 펌웨어 파일 다운로드). 사진처럼 EPM1270T144가 활성화되었는지 확인하고, EPM1270의 Program/Configure와 Verify를 모두 선택합니다. [Start]를 클릭해 펌웨어 업데이트를 완료(Progress 100%)하고, Programmer(Quartus Prime 17.1)를 종료합니다.',
          zhCN:'双击EPM1270 Device旁的<none>载入要更新的Firmware文件(从内部文件服务器下载2D/3D Vision的Firmware文件)。如照片确认EPM1270T144已启用,并勾选EPM1270的Program/Configure与Verify两项。点击[Start]完成Firmware更新(Progress 100%),然后关闭Programmer(Quartus Prime 17.1)。',
          zhTW:'雙擊EPM1270 Device旁的<none>載入要更新的Firmware檔案(從內部檔案伺服器下載2D/3D Vision的Firmware檔案)。如照片確認EPM1270T144已啟用,並勾選EPM1270的Program/Configure與Verify兩項。點擊[Start]完成Firmware更新(Progress 100%),然後關閉Programmer(Quartus Prime 17.1)。',
          ja:'EPM1270 Deviceの<none>をダブルクリックし更新するFirmwareファイルを読み込みます(社内ファイルサーバーから2D/3D Vision用Firmwareファイルをダウンロード)。写真のようにEPM1270T144が有効になっているか確認し、EPM1270のProgram/ConfigureとVerifyを両方選択します。[Start]をクリックしFirmwareアップデートを完了(Progress 100%)させ、Programmer(Quartus Prime 17.1)を終了します。'
        }},
        {img:cmImg('J','nbga',78),tx:{
          en:'1.4.2 PZT Connection Failure',
          ko:'1.4.2 PZT 연결 불가',
          zhCN:'1.4.2 PZT无法连接',
          zhTW:'1.4.2 PZT無法連接',
          ja:'1.4.2 PZT接続不可'
        }},
        {img:cmImg('J','nbga',79),tx:{
          en:'Check the PZT Controller\'s power and cable connection, and confirm the Vision PC\'s PZT Controller IP setting is configured as specified (shown for both the PI PZT Controller and Nanofaktur PZT Controller).',
          ko:'PZT Controller의 전원과 Cable 연결 상태를 확인하고, Vision PC의 PZT Controller IP 설정이 지정된 대로 되어 있는지 확인합니다(PI PZT Controller, Nanofaktur PZT Controller 모두 해당).',
          zhCN:'确认PZT Controller的电源与Cable连接状态,并确认Vision PC的PZT Controller IP设置是否依规定设置(PI PZT Controller、Nanofaktur PZT Controller皆适用)。',
          zhTW:'確認PZT Controller的電源與Cable連接狀態,並確認Vision PC的PZT Controller IP設定是否依規定設定(PI PZT Controller、Nanofaktur PZT Controller皆適用)。',
          ja:'PZT Controllerの電源とCable接続状態を確認し、Vision PCのPZT Controller IP設定が規定通りになっているか確認します(PI PZT Controller、Nanofaktur PZT Controllerともに該当)。'
        }},
        {img:cmImg('J','nbga',80),tx:{
          en:'Check that the LAN cable is connected to the correct network — verify by plugging/unplugging it and confirming the network connection appears/disappears accordingly (applies to both the PI PZT Controller and Nanofaktur PZT Controller).',
          ko:'LAN Cable이 해당 네트워크에 연결되었는지 확인합니다 — LAN Cable을 연결/해제했을 때 해당 네트워크가 연결/해제되는지로 확인 가능합니다(PI PZT Controller, Nanofaktur PZT Controller 모두 해당).',
          zhCN:'确认LAN Cable是否连接至对应网络——可透过连接/拔除LAN Cable时对应网络是否随之连接/中断来确认(PI PZT Controller、Nanofaktur PZT Controller皆适用)。',
          zhTW:'確認LAN Cable是否連接至對應網路——可透過連接/拔除LAN Cable時對應網路是否隨之連接/中斷來確認(PI PZT Controller、Nanofaktur PZT Controller皆適用)。',
          ja:'LAN Cableが該当ネットワークに接続されているか確認します——LAN Cableを接続/取り外しした際に該当ネットワークが接続/切断されるかで確認できます(PI PZT Controller、Nanofaktur PZT Controllerともに該当)。'
        }},
        {img:cmImg('J','nbga',81),tx:{
          en:'How to configure the PI PZT Controller\'s IP setting: connect the PI PZT Controller to the Vision PC using a Mini-B USB cable.',
          ko:'PI PZT Controller의 IP Setting을 진행하는 방법입니다. Mini B Type USB Cable로 PI PZT Controller와 Vision PC를 연결합니다.',
          zhCN:'PI PZT Controller的IP设置方法。使用Mini B Type USB Cable连接PI PZT Controller与Vision PC。',
          zhTW:'PI PZT Controller的IP設定方法。使用Mini B Type USB Cable連接PI PZT Controller與Vision PC。',
          ja:'PI PZT ControllerのIP Setting手順です。Mini B Type USB CableでPI PZT ControllerとVision PCを接続します。'
        }},
        {img:cmImg('J','nbga',82),tx:{
          en:'Run the PI program, select the correct Controller model, and connect via USB.',
          ko:'PI 프로그램을 실행합니다. 해당 Controller 모델을 선택하고 USB로 Connect합니다.',
          zhCN:'执行PI程序。选择对应的Controller型号后以USB Connect。',
          zhTW:'執行PI程式。選擇對應的Controller型號後以USB Connect。',
          ja:'PIプログラムを実行します。該当するControllerモデルを選択し、USBでConnectします。'
        }},
        {img:cmImg('J','nbga',83),tx:{
          en:'In Tools ▸ Command entry, enter the following in order: "ifs 100 ipstart 0", "ifs 100 ipmask 255.255.255.0", "ifs 100 ipadr 192.168.0.1:50000". Then close the program, power off the PZT Controller for at least 10 minutes, and reboot it.',
          ko:'Tools ▸ Command entry 순서로 다음 명령을 입력합니다: "ifs 100 ipstart 0", "ifs 100 ipmask 255.255.255.0", "ifs 100 ipadr 192.168.0.1:50000". 프로그램 종료 후 PZT Controller의 전원을 10분 이상 끄고 재부팅합니다.',
          zhCN:'依Tools ▸ Command entry顺序输入以下指令:"ifs 100 ipstart 0"、"ifs 100 ipmask 255.255.255.0"、"ifs 100 ipadr 192.168.0.1:50000"。程序结束后将PZT Controller断电10分钟以上后再重新开机。',
          zhTW:'依Tools ▸ Command entry順序輸入以下指令:"ifs 100 ipstart 0"、"ifs 100 ipmask 255.255.255.0"、"ifs 100 ipadr 192.168.0.1:50000"。程式結束後將PZT Controller斷電10分鐘以上後再重新開機。',
          ja:'Tools ▸ Command entryの順に以下のコマンドを入力します:「ifs 100 ipstart 0」「ifs 100 ipmask 255.255.255.0」「ifs 100 ipadr 192.168.0.1:50000」。プログラム終了後、PZT Controllerの電源を10分以上切ってから再起動します。'
        }},
        {img:cmImg('J','nbga',84),tx:{
          en:'Run the program again, confirm the PZT Controller is recognized on the TCP/IP tab, then Connect.',
          ko:'프로그램을 다시 실행합니다. TCP/IP 탭에서 PZT Controller가 인식되는지 확인 후 Connect합니다.',
          zhCN:'重新执行程序。在TCP/IP标签中确认PZT Controller是否被识别,再Connect。',
          zhTW:'重新執行程式。在TCP/IP標籤中確認PZT Controller是否被識別,再Connect。',
          ja:'プログラムを再度実行します。TCP/IPタブでPZT Controllerが認識されるか確認後Connectします。'
        }},
        {img:cmImg('J','nbga',85),tx:{
          en:'How to configure the Nanofaktur PZT Controller\'s IP setting: run nFControl.exe, select Ethernet <TCP/IP> (IP address 192.168.168.168), then click Connect.',
          ko:'Nanofaktur PZT Controller의 IP 설정 방법입니다. nFControl.exe를 실행하고 이더넷 <TCP/IP>를 선택합니다(IP 주소: 192.168.168.168). Connect 버튼을 클릭합니다.',
          zhCN:'Nanofaktur PZT Controller的IP设置方法。执行nFControl.exe,选择Ethernet<TCP/IP>(IP位址:192.168.168.168)。点击Connect按钮。',
          zhTW:'Nanofaktur PZT Controller的IP設定方法。執行nFControl.exe,選擇Ethernet<TCP/IP>(IP位址:192.168.168.168)。點擊Connect按鈕。',
          ja:'Nanofaktur PZT ControllerのIP設定方法です。nFControl.exeを実行し、イーサネット<TCP/IP>を選択します(IPアドレス:192.168.168.168)。Connectボタンをクリックします。'
        }},
        {img:cmImg('J','nbga',86),tx:{
          en:'1.4.3 PZT Vibration',
          ko:'1.4.3 PZT 진동 발생',
          zhCN:'1.4.3 PZT产生振动',
          zhTW:'1.4.3 PZT產生振動',
          ja:'1.4.3 PZT振動発生'
        }},
        {img:cmImg('J','nbga',87),tx:{
          en:'PI PZT — from the top menu, select Tools ▸ Show dynamic tuner.',
          ko:'PI PZT — 상단 메뉴에서 Tools ▸ Show dynamic tuner를 선택합니다.',
          zhCN:'PI PZT——在上方菜单选择Tools ▸ Show dynamic tuner。',
          zhTW:'PI PZT——在上方選單選擇Tools ▸ Show dynamic tuner。',
          ja:'PI PZT——上部メニューでTools ▸ Show dynamic tunerを選択します。'
        }},
        {img:cmImg('J','nbga',88),tx:{
          en:'Uncheck the Servo/Closed Loop checkbox to turn Servo off. Set the Step values: Offset = 0, Amplitude = 10–15% of the Piezo\'s full displacement.',
          ko:'Servo/Closed Loop 체크박스를 해제해 Servo를 Off합니다. Step 값을 다음과 같이 설정합니다: Offset = 0, Amplitude = Piezo 전체 변위의 10~15%.',
          zhCN:'取消勾选Servo/Closed Loop使Servo为Off。设置Step值如下:Offset=0,Amplitude=Piezo总位移的10~15%。',
          zhTW:'取消勾選Servo/Closed Loop使Servo為Off。設定Step值如下:Offset=0,Amplitude=Piezo總位移的10~15%。',
          ja:'Servo/Closed Loopのチェックを外しServoをOffにします。Step値を次のように設定します:Offset=0、AmplitudeはPiezo全体変位の10~15%。'
        }},
        {img:cmImg('J','nbga',89),tx:{
          en:'Check the Cursor 1 value, then right-click the Notch Frequency 1 field and set it to that Cursor 1 value (the Servo-Loop I-Term updates automatically). If prompted to change the CCL Level, type "advanced". Set Notch Rejection 1 to 0.04 or 0.05.',
          ko:'Cursor 1의 값을 확인합니다. Notch Frequency 1 입력란을 우클릭해 Cursor 1 값으로 변경합니다(Servo-Loop I-Term 값도 자동 변경). CCL Level 변경 문구가 나오면 "advanced"를 입력합니다. Notch Rejection 1 값을 0.04 또는 0.05로 설정합니다.',
          zhCN:'确认Cursor 1的值。右键点击Notch Frequency 1输入栏,将其改为Cursor 1的值(Servo-Loop I-Term值也会自动变更)。若出现要求变更CCL Level的提示,请输入"advanced"。将Notch Rejection 1的值设为0.04或0.05。',
          zhTW:'確認Cursor 1的值。右鍵點擊Notch Frequency 1輸入欄,將其改為Cursor 1的值(Servo-Loop I-Term值也會自動變更)。若出現要求變更CCL Level的提示,請輸入"advanced"。將Notch Rejection 1的值設為0.04或0.05。',
          ja:'Cursor 1の値を確認します。Notch Frequency 1の入力欄を右クリックしCursor 1の値に変更します(Servo-Loop I-Termの値も自動変更)。CCL Level変更を求めるメッセージが出たら「advanced」と入力します。Notch Rejection 1の値を0.04または0.05に設定します。'
        }},
        {img:cmImg('J','nbga',90),tx:{
          en:'Click Save as Default (EEPROM) to save the changes.',
          ko:'Save as Default(EEPROM)을 클릭해 변경 사항을 저장합니다.',
          zhCN:'点击Save as Default(EEPROM)以保存变更内容。',
          zhTW:'點擊Save as Default(EEPROM)以儲存變更內容。',
          ja:'Save as Default(EEPROM)をクリックして変更内容を保存します。'
        }},
        {img:cmImg('J','nbga',91),tx:{
          en:'Select Servo/Close Loop and click Step Response to view the graph — confirm the Piezo shows no vibration after reaching the target position. (If the max−min variation after settling exceeds 30nm, re-tune, or inspect the PZT Stage/Controller.) Good tuning: fast rise, no vibration. Poor tuning: slow rise, vibration present, or overshoot.',
          ko:'Servo/Close Loop를 선택하고 Step Response를 클릭해 그래프를 확인합니다 — Piezo가 목표 지점 도달 후 진동이 없는지 확인합니다(목표 지점 도달 후 변화량의 최댓값-최솟값이 30nm를 초과하면 다시 Tune하거나 PZT Stage·PZT Controller를 점검). Tune 양호: 빠른 상승·진동 없음. Tune 불량: 느린 상승·진동 있음·Overshoot 발생.',
          zhCN:'选择Servo/Close Loop并点击Step Response查看图表——确认Piezo到达目标点后是否无振动。(若稳定后变化量的最大值-最小值超过30nm,请重新Tune或检查PZT Stage、PZT Controller。)Tune良好:上升快、无振动。Tune不良:上升慢、有振动、发生Overshoot。',
          zhTW:'選擇Servo/Close Loop並點擊Step Response查看圖表——確認Piezo到達目標點後是否無振動。(若穩定後變化量的最大值-最小值超過30nm,請重新Tune或檢查PZT Stage、PZT Controller。)Tune良好:上升快、無振動。Tune不良:上升慢、有振動、發生Overshoot。',
          ja:'Servo/Close Loopを選択しStep Responseをクリックしてグラフを確認します——Piezoが目標地点到達後に振動がないか確認します(到達後の変化量の最大値-最小値が30nmを超える場合は再Tuneするか、PZT StageまたはPZT Controllerを点検)。Tune良好:速い上昇・振動なし。Tune不良:遅い上昇・振動あり・Overshoot発生。'
        }},
        {img:cmImg('J','nbga',92),tx:{
          en:'With Servo on, check that the Current Value/Position jitter falls within the normal range (±0.015µm from the resting position). Examples compare a normal-range case (small max/min gap, e.g. ~28µm difference) against an abnormal-range case (larger gap, e.g. ~42µm difference).',
          ko:'Servo를 켜고 Current Value/Position의 떨림이 정상 범위(정지 상태 위치 기준 ±0.015um) 안에 들어오는지 확인합니다. 예시로 정상 범위(최댓값-최솟값 차이 약 28um)와 비정상 범위(차이 약 42um)를 비교합니다.',
          zhCN:'开启Servo后,确认Current Value/Position的抖动是否落在正常范围内(以静止位置为基准±0.015um)。示例比较正常范围(最大值-最小值差约28um)与异常范围(差约42um)的情形。',
          zhTW:'開啟Servo後,確認Current Value/Position的抖動是否落在正常範圍內(以靜止位置為基準±0.015um)。範例比較正常範圍(最大值-最小值差約28um)與異常範圍(差約42um)的情形。',
          ja:'Servoを入れ、Current Value/Positionの揺れが正常範囲(静止位置基準±0.015um)に収まっているか確認します。例として正常範囲(最大値-最小値の差約28um)と異常範囲(差約42um)を比較します。'
        }},
        {img:cmImg('J','nbga',93),tx:{
          en:'Nanofaktur PZT — click PID-Tuning.',
          ko:'Nanofaktur PZT — PID-Tuning을 클릭합니다.',
          zhCN:'Nanofaktur PZT——点击PID-Tuning。',
          zhTW:'Nanofaktur PZT——點擊PID-Tuning。',
          ja:'Nanofaktur PZT——PID-Tuningをクリックします。'
        }},
        {img:cmImg('J','nbga',94),tx:{
          en:'Turn Servo off and set LP-Filter to None.',
          ko:'Servo를 Off하고 LP-Filter를 None으로 선택합니다.',
          zhCN:'关闭Servo,并将LP-Filter选为None。',
          zhTW:'關閉Servo,並將LP-Filter選為None。',
          ja:'ServoをOffにし、LP-FilterをNoneに選択します。'
        }},
        {img:cmImg('J','nbga',95),tx:{
          en:'Enter From=0V, Amplitude=3V and click Check. Use the magnifier tool to zoom into the peak, click (x;y), and move the mouse to the peak to read its Freq[Hz] value.',
          ko:'From 0V, Amplitude 3V를 입력하고 Check를 클릭합니다. 돋보기를 사용해 Peak 지점을 확대한 뒤, (x;y)를 클릭하고 마우스를 꼭짓점으로 이동해 Freq[Hz] 수치를 확인합니다.',
          zhCN:'输入From 0V、Amplitude 3V后点击Check。使用放大镜工具放大Peak位置,点击(x;y)并将鼠标移到峰值点确认Freq[Hz]数值。',
          zhTW:'輸入From 0V、Amplitude 3V後點擊Check。使用放大鏡工具放大Peak位置,點擊(x;y)並將滑鼠移到峰值點確認Freq[Hz]數值。',
          ja:'From 0V、Amplitude 3Vを入力しCheckをクリックします。虫眼鏡ツールでPeak地点を拡大し、(x;y)をクリックしてマウスを頂点へ移動しFreq[Hz]の数値を確認します。'
        }},
        {img:cmImg('J','nbga',96),tx:{
          en:'Switch Notch-Filter1 from Disabled to Enabled, enter the Freq[Hz] value just found, and click Check. Repeat this process to find the optimal FFT[dB] value — confirm the peak position shifts as expected (① before vs. ② after).',
          ko:'Notch-Filter1을 Disabled → Enabled로 변경한 뒤 확인한 Freq[Hz] 값을 입력하고 Check를 클릭합니다. 이 작업을 반복해 FFT[dB] 최적값을 찾습니다 — ①과 같은 그래프가 ②처럼 Peak 지점이 변화하는지 확인합니다.',
          zhCN:'将Notch-Filter1由Disabled改为Enabled,输入刚才确认的Freq[Hz]值后点击Check。重复此操作以寻找FFT[dB]最佳值——确认①的图形如②般Peak位置发生变化。',
          zhTW:'將Notch-Filter1由Disabled改為Enabled,輸入剛才確認的Freq[Hz]值後點擊Check。重複此操作以尋找FFT[dB]最佳值——確認①的圖形如②般Peak位置發生變化。',
          ja:'Notch-Filter1をDisabled→Enabledに変更し、確認したFreq[Hz]値を入力してCheckをクリックします。この作業を繰り返しFFT[dB]の最適値を探します——①のグラフが②のようにPeak地点が変化するか確認します。'
        }},
        {img:cmImg('J','nbga',97),tx:{
          en:'Change LP-Filter to IIR and Frequency(Hz) to 200, then click Check. Confirm that once IIR is enabled, the graph\'s amplitude thickness changes as shown (② IIR-None state vs. ① IIR-enabled state).',
          ko:'LP-Filter를 IIR로 변경하고 Frequency(Hz)를 200으로 설정한 뒤 Check를 클릭합니다. IIR 활성화 시 ②(IIR None 상태) 그래프의 진폭 두께가 ①처럼 바뀌었는지 확인합니다.',
          zhCN:'将LP-Filter改为IIR,Frequency(Hz)设为200后点击Check。确认启用IIR后,②(IIR None状态)图形的振幅粗细是否变成①的样子。',
          zhTW:'將LP-Filter改為IIR,Frequency(Hz)設為200後點擊Check。確認啟用IIR後,②(IIR None狀態)圖形的振幅粗細是否變成①的樣子。',
          ja:'LP-FilterをIIRに変更し、Frequency(Hz)を200に設定してCheckをクリックします。IIR有効化時に②(IIR None状態)のグラフの振幅の太さが①のように変わったか確認します。'
        }},
        {img:cmImg('J','nbga',98),tx:{
          en:'Turn Servo ON, set From=0µm / Amplitude=3µm, and click Check.',
          ko:'Servo를 ON하고 From 0[um], Amplitude 3[um]로 설정한 뒤 Check를 클릭합니다.',
          zhCN:'开启Servo,设置From 0[um]、Amplitude 3[um]后点击Check。',
          zhTW:'開啟Servo,設定From 0[um]、Amplitude 3[um]後點擊Check。',
          ja:'ServoをONにし、From 0[um]、Amplitude 3[um]に設定してCheckをクリックします。'
        }},
        {img:cmImg('J','nbga',99),tx:{
          en:'Vary the Amplitude value and observe the graph (examples shown at 50µm and 100µm). The goal of PID tuning is: quick rise, no vibration, no overshoot.',
          ko:'Amplitude 값을 변경하며 그래프를 확인합니다(예시: Amplitude 50[um], 100[um]). PID-Tuning의 목표는 빠른 상승·진동 없음·Overshoot 없음입니다.',
          zhCN:'变更Amplitude值并观察图形(示例:Amplitude 50[um]、100[um])。PID-Tuning的目标为:快速上升、无振动、无Overshoot。',
          zhTW:'變更Amplitude值並觀察圖形(範例:Amplitude 50[um]、100[um])。PID-Tuning的目標為:快速上升、無振動、無Overshoot。',
          ja:'Amplitude値を変更しながらグラフを確認します(例:Amplitude 50[um]、100[um])。PID-Tuningの目標は、素早い上昇・振動なし・Overshootなしです。'
        }},
        {img:cmImg('J','nbga',100),tx:{
          en:'How to set P-term: increase in steps of 0.01 up to a maximum of 0.1 (the recommended value), finding the optimal value within that range. Comparing ①②③, the ③ P-term value gives the best waveform (reduced overshoot in the rising section). Set the optimal P-term before moving on to I-term.',
          ko:'P-term 설정 방법: 0.01씩 증가시켜 최대 0.1(권장값)까지, 그 범위 안에서 값을 변경하며 최적값을 찾습니다. ①②③ 그래프를 비교하면 ③의 P-term 값 그래프가 파형이 양호합니다(상승 구간 Overshoot 감소). P-term 최적값 설정 후 I-term을 진행합니다.',
          zhCN:'P-term设置方法:以0.01为单位递增至最大0.1(建议值),在此范围内变更数值寻找最佳值。比较①②③图形可知③的P-term值波形较佳(上升区间Overshoot减少)。设置P-term最佳值后再进行I-term。',
          zhTW:'P-term設定方法:以0.01為單位遞增至最大0.1(建議值),在此範圍內變更數值尋找最佳值。比較①②③圖形可知③的P-term值波形較佳(上升區間Overshoot減少)。設定P-term最佳值後再進行I-term。',
          ja:'P-termの設定方法:0.01ずつ増加させ最大0.1(推奨値)まで、その範囲内で値を変更しながら最適値を探します。①②③のグラフを比較すると③のP-term値の波形が良好です(上昇区間のOvershoot減少)。P-term最適値設定後、I-termへ進みます。'
        }},
        {img:cmImg('J','nbga',101),tx:{
          en:'How to set I-term: increase in steps of 5–10 up to a maximum of 100 (the recommended value), finding the optimal value within that range. Comparing ①②③, the ③ I-term value gives the best waveform (reduced overshoot and vibration after reaching the target). Caution: do not use D-term (using it caused resonance).',
          ko:'I-term 설정 방법: 5~10씩 증가시켜 최대 100(권장값)까지, 그 범위 안에서 값을 변경하며 최적값을 찾습니다. ①②③ 그래프를 비교하면 ③의 I-term 값 그래프가 파형이 양호합니다(목표 지점 도달 후 Overshoot·진동 감소). 주의: D-term은 사용하지 않습니다(사용 시 공진 발생).',
          zhCN:'I-term设置方法:以5~10为单位递增至最大100(建议值),在此范围内变更数值寻找最佳值。比较①②③图形可知③的I-term值波形较佳(到达目标点后Overshoot、振动减少)。注意:请勿使用D-term(使用时曾发生共振)。',
          zhTW:'I-term設定方法:以5~10為單位遞增至最大100(建議值),在此範圍內變更數值尋找最佳值。比較①②③圖形可知③的I-term值波形較佳(到達目標點後Overshoot、振動減少)。注意:請勿使用D-term(使用時曾發生共振)。',
          ja:'I-termの設定方法:5~10ずつ増加させ最大100(推奨値)まで、その範囲内で値を変更しながら最適値を探します。①②③のグラフを比較すると③のI-term値の波形が良好です(目標地点到達後のOvershoot・振動が減少)。注意:D-termは使用しません(使用時に共振が発生)。'
        }},
        {img:cmImg('J','nbga',102),tx:{
          en:'Once PID-Tuning is complete, click Save parameter as default, then Close.',
          ko:'PID-Tuning이 완료되면 Save parameter as default 하고 Close 합니다.',
          zhCN:'PID-Tuning完成后,点击Save parameter as default,然后Close。',
          zhTW:'PID-Tuning完成後,點擊Save parameter as default,然後Close。',
          ja:'PID-Tuningが完了したらSave parameter as defaultを行い、Closeします。'
        }},
        {img:cmImg('J','nbga',103),tx:{
          en:'Product Verification Progress — this section covers Jig Table Flatness, Illumination Uniformity, 2D ID (Barcode/OCR), Dry Run, MTBI, Accuracy, Repeatability, Reproducibility, Correlation, and Takt Time.',
          ko:'Product Verification Progress — Jig Table Flatness, Illumination Uniformity, 2D ID(Barcode/OCR), Dry Run, MTBI, Accuracy, Repeatability, Reproducibility, Correlation, Takt Time를 다룹니다.',
          zhCN:'Product Verification Progress——本节介绍Jig Table Flatness、Illumination Uniformity、2D ID(Barcode/OCR)、Dry Run、MTBI、Accuracy、Repeatability、Reproducibility、Correlation、Takt Time。',
          zhTW:'Product Verification Progress——本節介紹Jig Table Flatness、Illumination Uniformity、2D ID(Barcode/OCR)、Dry Run、MTBI、Accuracy、Repeatability、Reproducibility、Correlation、Takt Time。',
          ja:'Product Verification Progress——本節ではJig Table Flatness、Illumination Uniformity、2D ID(Barcode/OCR)、Dry Run、MTBI、Accuracy、Repeatability、Reproducibility、Correlation、Takt Timeを扱います。'
        }},
        {img:cmImg('J','nbga',104),tx:{
          en:'2.2.1. Jig Table Flatness – Using a Dial Gauge: measure flatness with a gauge accurate to 1µm. Place it on the surface, zero it at a reference point, then move it across the surface and record the height variation at each designated point.',
          ko:'2.2.1. Jig Table Flatness – Dial Gauge 사용: 1um 단위까지 측정 가능한 Indicator로 평탄도를 측정합니다. Dial Gauge를 측정면에 올려 기준점에서 0으로 맞춘 뒤, 표면을 따라 이동시키며 지정된 지점의 높이 편차를 기록합니다.',
          zhCN:'2.2.1. Jig Table Flatness – 使用Dial Gauge:以可测量至1um的Indicator测量平坦度。将Dial Gauge放在测量面上,于基准点归零后沿表面移动,记录各指定点的高度偏差。',
          zhTW:'2.2.1. Jig Table Flatness – 使用Dial Gauge:以可測量至1um的Indicator測量平坦度。將Dial Gauge放在測量面上,於基準點歸零後沿表面移動,記錄各指定點的高度偏差。',
          ja:'2.2.1. Jig Table Flatness – Dial Gauge使用:1umまで測定可能なIndicatorで平坦度を測定します。Dial Gaugeを測定面に置き、基準点でゼロ合わせした後、表面に沿って移動させながら指定地点の高さ偏差を記録します。'
        }},
        {img:cmImg('J','nbga',105),tx:{
          en:'Jig Flatness Report example — 9 reference points measured (e.g. 7, 6, 21, 9, −9, 15, 23, 0, 21 µm). The maximum difference (Max−Min) across all measured points must not exceed 50µm.',
          ko:'Jig Flatness Report 예시 — 9개 기준점 측정값(예: 7, 6, 21, 9, -9, 15, 23, 0, 21um). 측정값 간 최대-최소 차이는 50um를 초과하면 안 됩니다.',
          zhCN:'Jig Flatness Report示例——9个基准点的测量值(如7、6、21、9、-9、15、23、0、21um)。所有测量值的最大值-最小值差不得超过50um。',
          zhTW:'Jig Flatness Report範例——9個基準點的測量值(如7、6、21、9、-9、15、23、0、21um)。所有測量值的最大值-最小值差不得超過50um。',
          ja:'Jig Flatness Report例——9つの基準点の測定値(例:7、6、21、9、-9、15、23、0、21um)。すべての測定値の最大-最小の差は50umを超えてはいけません。'
        }},
        {img:cmImg('J','nbga',106),tx:{
          en:'2.2.1. Jig Table Flatness – Using an Optical Mirror: place the Optical Mirror on the surface, position the 3D Inspector over it, then use the 3D Vision and AF programs to Single-Track to the height where fringes are visible, and record the AF program\'s Z-axis value at each of the 9 points.',
          ko:'2.2.1. Jig Table Flatness – Optical Mirror 사용: Optical Mirror를 측정면에 올리고 3D Inspector를 그 위에 위치시킨 뒤, 3D Vision·AF Program으로 Fringe가 보이는 높이까지 Single Tracking하여 AF Program에 표시된 Z축 값을 각 9개 지점마다 기록합니다.',
          zhCN:'2.2.1. Jig Table Flatness – 使用Optical Mirror:将Optical Mirror放在测量面上,并将3D Inspector置于其上方,以3D Vision、AF Program进行Single Tracking至Fringe可见的高度,记录AF Program显示的Z轴值,每处共9个点。',
          zhTW:'2.2.1. Jig Table Flatness – 使用Optical Mirror:將Optical Mirror放在測量面上,並將3D Inspector置於其上方,以3D Vision、AF Program進行Single Tracking至Fringe可見的高度,記錄AF Program顯示的Z軸值,每處共9個點。',
          ja:'2.2.1. Jig Table Flatness – Optical Mirror使用:Optical Mirrorを測定面に置き、3D Inspectorをその上に配置した後、3D Vision・AF ProgramでFringeが見える高さまでSingle Trackingし、AF Programに表示されたZ軸値を9箇所それぞれで記録します。'
        }},
        {img:cmImg('J','nbga',107),tx:{
          en:'Optical-Mirror flatness report example — 9 points measured (roughly −11887 to −11895µm). Again, the maximum difference (Max−Min) across all points must not exceed 50µm.',
          ko:'Optical Mirror 방식 평탄도 리포트 예시 — 9개 지점 측정값(약 -11887~-11895um). 이 경우도 측정값 간 최대-최소 차이는 50um를 초과하면 안 됩니다.',
          zhCN:'Optical Mirror方式的平坦度报告示例——9个点的测量值(约-11887~-11895um)。此情况下最大值-最小值差同样不得超过50um。',
          zhTW:'Optical Mirror方式的平坦度報告範例——9個點的測量值(約-11887~-11895um)。此情況下最大值-最小值差同樣不得超過50um。',
          ja:'Optical Mirror方式の平坦度レポート例——9箇所の測定値(約-11887~-11895um)。この場合も最大-最小の差は50umを超えてはいけません。'
        }},
        {img:cmImg('J','nbga',108),tx:{
          en:'Product Verification Progress — this section covers Jig Table Flatness, Illumination Uniformity, 2D ID (Barcode/OCR), Dry Run, MTBI, Accuracy, Repeatability, Reproducibility, Correlation, and Takt Time.',
          ko:'Product Verification Progress — Jig Table Flatness, Illumination Uniformity, 2D ID(Barcode/OCR), Dry Run, MTBI, Accuracy, Repeatability, Reproducibility, Correlation, Takt Time를 다룹니다.',
          zhCN:'Product Verification Progress——本节介绍Jig Table Flatness、Illumination Uniformity、2D ID(Barcode/OCR)、Dry Run、MTBI、Accuracy、Repeatability、Reproducibility、Correlation、Takt Time。',
          zhTW:'Product Verification Progress——本節介紹Jig Table Flatness、Illumination Uniformity、2D ID(Barcode/OCR)、Dry Run、MTBI、Accuracy、Repeatability、Reproducibility、Correlation、Takt Time。',
          ja:'Product Verification Progress——本節ではJig Table Flatness、Illumination Uniformity、2D ID(Barcode/OCR)、Dry Run、MTBI、Accuracy、Repeatability、Reproducibility、Correlation、Takt Timeを扱います。'
        }},
        {img:cmImg('J','nbga',109),tx:{
          en:'2.2.2. Illumination Uniformity – 3D: click Job Open in the Host program\'s main window and select \'LTS\' — a message confirms the Job File is opened. If no LTS job exists yet, create one via Save As (needed because certain parameters must be changed to proceed with LTS).',
          ko:'2.2.2. Illumination Uniformity – 3D: Host Program 메인 화면에서 Job Open을 클릭하고 \'LTS\'를 선택하면 Job File이 열렸다는 메시지가 나타납니다. 기존 LTS Job이 없다면 Save As로 새로 만듭니다(LTS 진행을 위해 일부 Parameter를 변경해야 하므로 필요).',
          zhCN:'2.2.2. Illumination Uniformity – 3D:在Host Program主画面点击Job Open并选择\'LTS\',会出现Job File已开启的提示。若尚无既有的LTS Job,可透过Save As新建(因为进行LTS需变更部分参数)。',
          zhTW:'2.2.2. Illumination Uniformity – 3D:在Host Program主畫面點擊Job Open並選擇\'LTS\',會出現Job File已開啟的提示。若尚無既有的LTS Job,可透過Save As新建(因為進行LTS需變更部分參數)。',
          ja:'2.2.2. Illumination Uniformity – 3D:Host Programのメイン画面でJob Openをクリックし\'LTS\'を選択すると、Job Fileが開かれたことを示すメッセージが表示されます。既存のLTS Jobがない場合はSave Asで新規作成します(LTSを進めるために一部Parameterの変更が必要なため)。'
        }},
        {img:cmImg('J','nbga',110),tx:{
          en:'Measure the Gray Target in the Jig\'s LTS block 30 times: while watching the live image in the Vision program, move the Jig (Y-axis) table and Vision Module (X-axis) to the Gray Target Pos, move the Z-axis motor to the In-Focus position, Single-Track to find the center of focus, and check the live view in the Illum Control window.',
          ko:'Jig의 LTS Block에 있는 \'Gray Target\'을 30회 측정합니다: Vision Program의 Live 화면을 보며 Jig(Y축) Table과 Vision Module(X축)을 Gray Target Pos 위치로 이동, Z축 Motor를 In Focus 위치로 이동 후 Single Tracking으로 초점 중심을 찾고, Vision Program의 Illum Control 창에서 Live 영상을 확인합니다.',
          zhCN:'对Jig的LTS Block内的\'Gray Target\'测量30次:观看Vision Program的Live画面,将Jig(Y轴)Table与Vision Module(X轴)移动到Gray Target Pos位置,将Z轴Motor移至In Focus位置后以Single Tracking寻找对焦中心,并在Vision Program的Illum Control窗口确认Live影像。',
          zhTW:'對Jig的LTS Block內的\'Gray Target\'測量30次:觀看Vision Program的Live畫面,將Jig(Y軸)Table與Vision Module(X軸)移動到Gray Target Pos位置,將Z軸Motor移至In Focus位置後以Single Tracking尋找對焦中心,並在Vision Program的Illum Control視窗確認Live影像。',
          ja:'JigのLTS Blockにある\'Gray Target\'を30回測定します:Vision ProgramのLive画面を見ながらJig(Y軸)TableとVision Module(X軸)をGray Target Pos位置へ移動、Z軸MotorをIn Focus位置へ移動後Single Trackingで焦点中心を探し、Vision ProgramのIllum Controlウィンドウでライブ映像を確認します。'
        }},
        {img:cmImg('J','nbga',111),tx:{
          en:'Select \'3D_Img2\' and adjust the 3D light\'s Intensity (e.g. to 460) so the Gray Target\'s live pixel value reads close to RGB[160,160,160]. After saving, close Illum Control and select Utility ▸ Display Illum LTS from the vision main program\'s top menu.',
          ko:'\'3D_Img2\'를 선택하고, Gray Target의 Live 화면 픽셀값이 RGB[160,160,160]에 가깝도록 3D Light Intensity 값을 조정합니다(예: 460). 저장 후 Illum Control 창을 닫고, Vision Main Program 상단 메뉴의 Utility에서 \'Display Illum LTS\'를 선택합니다.',
          zhCN:'选择\'3D_Img2\',并调整3D Light的Intensity值(例如460),使Gray Target的Live画面像素值接近RGB[160,160,160]。保存后关闭Illum Control窗口,在Vision Main Program上方菜单的Utility中选择\'Display Illum LTS\'。',
          zhTW:'選擇\'3D_Img2\',並調整3D Light的Intensity值(例如460),使Gray Target的Live畫面像素值接近RGB[160,160,160]。儲存後關閉Illum Control視窗,在Vision Main Program上方選單的Utility中選擇\'Display Illum LTS\'。',
          ja:'\'3D_Img2\'を選択し、Gray TargetのLive画面のピクセル値がRGB[160,160,160]に近づくよう3D LightのIntensity値を調整します(例:460)。保存後Illum Controlウィンドウを閉じ、Vision Main Programの上部メニューのUtilityから\'Display Illum LTS\'を選択します。'
        }},
        {img:cmImg('J','nbga',112),tx:{
          en:'Set the ROI to sum the illumination value as shown, click Grab + Insp to run the inspection, and check the results. Once confirmed, click ROI Apply and Grid Apply.',
          ko:'그림처럼 조명값을 합산할 ROI를 설정하고, Grab + Insp 버튼을 클릭해 검사를 진행한 뒤 결과를 확인합니다. 결과 확인 후 ROI Apply와 Grid Apply를 클릭합니다.',
          zhCN:'如图设置用于加总照明值的ROI,点击Grab + Insp进行检测后确认结果。确认结果后点击ROI Apply与Grid Apply。',
          zhTW:'如圖設定用於加總照明值的ROI,點擊Grab + Insp進行檢測後確認結果。確認結果後點擊ROI Apply與Grid Apply。',
          ja:'図のように照明値を合算するROIを設定し、Grab + Inspボタンをクリックして検査を行い結果を確認します。結果確認後、ROI ApplyとGrid Applyをクリックします。'
        }},
        {img:cmImg('J','nbga',113),tx:{
          en:'Press Tray LTS to open the LTS (Long Term Stability) setup window.',
          ko:'\'Tray LTS\'를 눌러 LTS(Long Term Stability) 설정 창을 엽니다.',
          zhCN:'按下\'Tray LTS\'打开LTS(Long Term Stability)设置窗口。',
          zhTW:'按下\'Tray LTS\'開啟LTS(Long Term Stability)設定視窗。',
          ja:'\'Tray LTS\'を押しLTS(Long Term Stability)設定ウィンドウを開きます。'
        }},
        {img:cmImg('J','nbga',114),tx:{
          en:'Check the \'Gray\' checkbox, set the V1 & V2 Reference value to 160, and enter the Repeat Count.',
          ko:'\'Gray\' 체크박스를 선택하고, V1 & V2 Reference 값을 160으로 설정한 뒤 Repeat Count를 입력합니다.',
          zhCN:'勾选\'Gray\'复选框,将V1 & V2 Reference值设为160,并输入Repeat Count。',
          zhTW:'勾選\'Gray\'核取方塊,將V1 & V2 Reference值設為160,並輸入Repeat Count。',
          ja:'\'Gray\'チェックボックスを選択し、V1 & V2 Reference値を160に設定した後、Repeat Countを入力します。'
        }},
        {img:cmImg('J','nbga',115),tx:{
          en:'Click Start to run the inspection; upon completion, a sequence of messages appears and the inspection ends.',
          ko:'\'Start\'를 클릭해 검사를 진행하며, 완료되면 순서대로 메시지가 표시되고 검사가 종료됩니다.',
          zhCN:'点击\'Start\'进行检测,完成后会依序显示讯息并结束检测。',
          zhTW:'點擊\'Start\'進行檢測,完成後會依序顯示訊息並結束檢測。',
          ja:'\'Start\'をクリックして検査を進め、完了すると順にメッセージが表示され検査が終了します。'
        }},
        {img:cmImg('J','nbga',116),tx:{
          en:'Gray Target Report (V1) — the result file is saved under This PC ▸ Local Disk (D:) ▸ LTS ▸ Date. The calculated Score (= {(Mean − Worst) / Mean} × 100%) must not exceed 10.',
          ko:'Gray Target Report(V1) — 결과 파일은 This PC ▸ Local Disk(D:) ▸ LTS ▸ Date 경로에 저장됩니다. 계산된 Score(={(Mean-Worst)/Mean}*100%)는 10을 초과하면 안 됩니다.',
          zhCN:'Gray Target Report(V1)——结果文件保存于This PC ▸ Local Disk(D:) ▸ LTS ▸ Date路径。计算出的Score(={(Mean-Worst)/Mean}*100%)不得超过10。',
          zhTW:'Gray Target Report(V1)——結果檔案儲存於This PC ▸ Local Disk(D:) ▸ LTS ▸ Date路徑。計算出的Score(={(Mean-Worst)/Mean}*100%)不得超過10。',
          ja:'Gray Target Report(V1)——結果ファイルはThis PC ▸ Local Disk(D:) ▸ LTS ▸ Dateのパスに保存されます。算出されたScore(={(Mean-Worst)/Mean}*100%)は10を超えてはいけません。'
        }},
        {img:cmImg('J','nbga',117),tx:{
          en:'2.2.2. Illumination Uniformity – 2D: measure the Gray Target on the reference tray 30 times, the same way — move to the Gray Target Pos while watching the live image, move Z to In-Focus, Single-Track to find the focus center, and check the live view in Illum Control.',
          ko:'2.2.2. Illumination Uniformity – 2D: Reference Tray의 \'Gray Target\'을 동일한 방식으로 30회 측정합니다 — Live 화면을 보며 Gray Target Pos로 이동, Z를 In Focus로 이동 후 Single Tracking으로 초점 중심을 찾고 Illum Control에서 Live 영상을 확인합니다.',
          zhCN:'2.2.2. Illumination Uniformity – 2D:以相同方式对Reference Tray的\'Gray Target\'测量30次——观看Live画面移动至Gray Target Pos,将Z移至In Focus后以Single Tracking寻找对焦中心,并在Illum Control确认Live影像。',
          zhTW:'2.2.2. Illumination Uniformity – 2D:以相同方式對Reference Tray的\'Gray Target\'測量30次——觀看Live畫面移動至Gray Target Pos,將Z移至In Focus後以Single Tracking尋找對焦中心,並在Illum Control確認Live影像。',
          ja:'2.2.2. Illumination Uniformity – 2D:Reference Trayの\'Gray Target\'を同様の方法で30回測定します——Live画面を見ながらGray Target Posへ移動、ZをIn Focusへ移動後Single Trackingで焦点中心を探し、Illum ControlでLive映像を確認します。'
        }},
        {img:cmImg('J','nbga',118),tx:{
          en:'Set the parameters and lighting values as shown, and adjust the 2D camera lens\'s aperture so the RGB value reads 160.',
          ko:'그림처럼 Parameter와 조명값을 설정하고, 2D Camera 렌즈의 Aperture를 조정해 RGB 값이 160이 되도록 맞춥니다.',
          zhCN:'如图设置参数与照明值,并调整2D Camera镜头的Aperture,使RGB值达到160。',
          zhTW:'如圖設定參數與照明值,並調整2D Camera鏡頭的Aperture,使RGB值達到160。',
          ja:'図のようにパラメータと照明値を設定し、2D CameraレンズのApertureを調整してRGB値が160になるよう合わせます。'
        }},
        {img:cmImg('J','nbga',119),tx:{
          en:'Just as with 3D: save, close Illum Control, select Display Illum LTS from Utility, set the summing ROI as shown, click Grab + Insp to inspect and check results, then click ROI Apply and Grid Apply.',
          ko:'3D와 동일하게: 저장 후 Illum Control을 닫고 Utility에서 Display Illum LTS를 선택, 그림처럼 조명값 합산용 ROI 설정 후 Grab + Insp로 검사·결과 확인, ROI Apply와 Grid Apply를 클릭합니다.',
          zhCN:'与3D相同:保存后关闭Illum Control,在Utility中选择Display Illum LTS,如图设置照明值加总用ROI后以Grab + Insp检测并确认结果,点击ROI Apply与Grid Apply。',
          zhTW:'與3D相同:儲存後關閉Illum Control,在Utility中選擇Display Illum LTS,如圖設定照明值加總用ROI後以Grab + Insp檢測並確認結果,點擊ROI Apply與Grid Apply。',
          ja:'3Dと同様に:保存後Illum Controlを閉じUtilityからDisplay Illum LTSを選択、図のように照明値合算用ROIを設定後Grab + Insp で検査・結果確認、ROI ApplyとGrid Applyをクリックします。'
        }},
        {img:cmImg('J','nbga',120),tx:{
          en:'After setting the parameters as shown, click Start to run the inspection; a completion message appears once it finishes.',
          ko:'그림처럼 Parameter 설정 후 \'Start\'를 클릭해 검사를 진행하며, 완료되면 완료 메시지가 표시됩니다.',
          zhCN:'如图设置参数后点击\'Start\'进行检测,完成后会显示完成讯息。',
          zhTW:'如圖設定參數後點擊\'Start\'進行檢測,完成後會顯示完成訊息。',
          ja:'図のようにパラメータ設定後\'Start\'をクリックして検査を進め、完了すると完了メッセージが表示されます。'
        }},
        {img:cmImg('J','nbga',121),tx:{
          en:'Gray Target Report (2D Vision) — the result file is saved under This PC ▸ Local Disk (D:) ▸ LTS ▸ Date. The calculated Score must not exceed 10 (same formula as the 3D case).',
          ko:'Gray Target Report(2D Vision) — 결과 파일은 This PC ▸ Local Disk(D:) ▸ LTS ▸ Date 경로에 저장됩니다. 계산된 Score는 10을 초과하면 안 됩니다(3D와 동일한 계산식).',
          zhCN:'Gray Target Report(2D Vision)——结果文件保存于This PC ▸ Local Disk(D:) ▸ LTS ▸ Date路径。计算出的Score不得超过10(计算公式与3D相同)。',
          zhTW:'Gray Target Report(2D Vision)——結果檔案儲存於This PC ▸ Local Disk(D:) ▸ LTS ▸ Date路徑。計算出的Score不得超過10(計算公式與3D相同)。',
          ja:'Gray Target Report(2D Vision)——結果ファイルはThis PC ▸ Local Disk(D:) ▸ LTS ▸ Dateのパスに保存されます。算出されたScoreは10を超えてはいけません(3Dと同じ計算式)。'
        }},
        {img:cmImg('J','nbga',122),tx:{
          en:'Product Verification Progress — this section covers Jig Table Flatness, Illumination Uniformity, 2D ID (Barcode/OCR), Dry Run, MTBI, Accuracy, Repeatability, Reproducibility, Correlation, and Takt Time.',
          ko:'Product Verification Progress — Jig Table Flatness, Illumination Uniformity, 2D ID(Barcode/OCR), Dry Run, MTBI, Accuracy, Repeatability, Reproducibility, Correlation, Takt Time를 다룹니다.',
          zhCN:'Product Verification Progress——本节介绍Jig Table Flatness、Illumination Uniformity、2D ID(Barcode/OCR)、Dry Run、MTBI、Accuracy、Repeatability、Reproducibility、Correlation、Takt Time。',
          zhTW:'Product Verification Progress——本節介紹Jig Table Flatness、Illumination Uniformity、2D ID(Barcode/OCR)、Dry Run、MTBI、Accuracy、Repeatability、Reproducibility、Correlation、Takt Time。',
          ja:'Product Verification Progress——本節ではJig Table Flatness、Illumination Uniformity、2D ID(Barcode/OCR)、Dry Run、MTBI、Accuracy、Repeatability、Reproducibility、Correlation、Takt Timeを扱います。'
        }},
        {img:cmImg('J','nbga',123),tx:{
          en:'2.2.3. 2D ID (Barcode & OCR): open the Job for a product that carries a 2D ID or barcode. (The C2 product is used as the example.)',
          ko:'2.2.3. 2D ID(Barcode & OCR): 2D ID나 Barcode가 있는 Product의 Job을 엽니다(예시로 C2 Product 사용).',
          zhCN:'2.2.3. 2D ID(Barcode & OCR):打开具有2D ID或Barcode的Product的Job(以C2 Product为例)。',
          zhTW:'2.2.3. 2D ID(Barcode & OCR):開啟具有2D ID或Barcode的Product的Job(以C2 Product為例)。',
          ja:'2.2.3. 2D ID(Barcode & OCR):2D IDまたはBarcodeを持つProductのJobを開きます(例としてC2 Productを使用)。'
        }},
        {img:cmImg('J','nbga',124),tx:{
          en:'Place a full tray on the Load Rail as shown. Clicking \'2D Vision\' makes the indexer clamp the tray — a wrongly-positioned tray risks damage.',
          ko:'그림처럼 Full Tray를 Load Rail에 놓습니다. \'2D Vision\'을 클릭하면 Indexer가 Tray를 Clamp합니다 — Tray가 잘못된 위치에 놓이면 손상 위험이 있습니다.',
          zhCN:'如图将Full Tray放置在Load Rail上。点击\'2D Vision\'后Indexer会Clamp该Tray——若Tray放置位置错误,有损坏风险。',
          zhTW:'如圖將Full Tray放置在Load Rail上。點擊\'2D Vision\'後Indexer會Clamp該Tray——若Tray放置位置錯誤,有損壞風險。',
          ja:'図のようにFull TrayをLoad Railに置きます。\'2D Vision\'をクリックするとIndexerがTrayをClampします——Trayの位置が誤っていると損傷の危険があります。'
        }},
        {img:cmImg('J','nbga',125),tx:{
          en:'Click to move to the target pocket, and set the illumination value so the product is clearly visible.',
          ko:'클릭하여 해당 Pocket으로 이동합니다. Product가 잘 보이도록 조명값을 설정합니다.',
          zhCN:'点击移动至该Pocket。设置照明值使Product清晰可见。',
          zhTW:'點擊移動至該Pocket。設定照明值使Product清晰可見。',
          ja:'クリックして該当Pocketへ移動します。Productがよく見えるよう照明値を設定します。'
        }},
        {img:cmImg('J','nbga',126),tx:{
          en:'Select \'Barcode\' from the vision program\'s bottom menu to open its settings window.',
          ko:'Vision Program 하단 메뉴에서 \'Barcode\'를 선택해 설정 창을 엽니다.',
          zhCN:'在Vision Program下方菜单选择\'Barcode\'以打开设置窗口。',
          zhTW:'在Vision Program下方選單選擇\'Barcode\'以開啟設定視窗。',
          ja:'Vision Programの下部メニューで\'Barcode\'を選択し設定ウィンドウを開きます。'
        }},
        {img:cmImg('J','nbga',127),tx:{
          en:'Set a ROI (Region of Interest) centered on the barcode (Search ROI and Barcode ROI). Click Inspect to run and check the results as shown, then click Apply once confirmed.',
          ko:'Barcode를 중심으로 ROI(Region of Interest)를 설정합니다(Search ROI, Barcode ROI). \'Inspect\' 버튼을 클릭해 검사를 진행하고 결과를 확인한 뒤, \'Apply\'를 클릭합니다.',
          zhCN:'以Barcode为中心设置ROI(Region of Interest)(Search ROI、Barcode ROI)。点击\'Inspect\'按钮进行检测并确认结果后,点击\'Apply\'。',
          zhTW:'以Barcode為中心設定ROI(Region of Interest)(Search ROI、Barcode ROI)。點擊\'Inspect\'按鈕進行檢測並確認結果後,點擊\'Apply\'。',
          ja:'Barcodeを中心にROI(Region of Interest)を設定します(Search ROI、Barcode ROI)。\'Inspect\'ボタンをクリックして検査を行い結果を確認した後、\'Apply\'をクリックします。'
        }},
        {img:cmImg('J','nbga',128),tx:{
          en:'Click Start to run the inspection; an "Inspection Complete" message appears once it finishes.',
          ko:'\'Start\'를 클릭해 검사를 진행하며, 완료되면 \'Inspection Complete\' 메시지가 표시됩니다.',
          zhCN:'点击\'Start\'进行检测,完成后会显示\'Inspection Complete\'讯息。',
          zhTW:'點擊\'Start\'進行檢測,完成後會顯示\'Inspection Complete\'訊息。',
          ja:'\'Start\'をクリックして検査を進め、完了すると\'Inspection Complete\'メッセージが表示されます。'
        }},
        {img:cmImg('J','nbga',129),tx:{
          en:'Barcode report — the result file is saved under This PC ▸ Local Disk (D:) ▸ S_REPORT ▸ Date ▸ Manual. Barcodes on all products must be inspected.',
          ko:'Barcode Report — 결과 파일은 This PC ▸ Local Disk(D:) ▸ S_REPORT ▸ Date ▸ Manual 경로에 저장됩니다. 모든 Product의 Barcode를 검사해야 합니다.',
          zhCN:'Barcode Report——结果文件保存于This PC ▸ Local Disk(D:) ▸ S_REPORT ▸ Date ▸ Manual路径。须对所有Product的Barcode进行检测。',
          zhTW:'Barcode Report——結果檔案儲存於This PC ▸ Local Disk(D:) ▸ S_REPORT ▸ Date ▸ Manual路徑。須對所有Product的Barcode進行檢測。',
          ja:'Barcode Report——結果ファイルはThis PC ▸ Local Disk(D:) ▸ S_REPORT ▸ Date ▸ Manualのパスに保存されます。すべてのProductのBarcodeを検査する必要があります。'
        }},
        {img:cmImg('J','nbga',130),tx:{
          en:'Product Verification Progress — this section covers Jig Table Flatness, Illumination Uniformity, 2D ID (Barcode/OCR), Dry Run, MTBI, Accuracy, Repeatability, Reproducibility, Correlation, and Takt Time.',
          ko:'Product Verification Progress — Jig Table Flatness, Illumination Uniformity, 2D ID(Barcode/OCR), Dry Run, MTBI, Accuracy, Repeatability, Reproducibility, Correlation, Takt Time를 다룹니다.',
          zhCN:'Product Verification Progress——本节介绍Jig Table Flatness、Illumination Uniformity、2D ID(Barcode/OCR)、Dry Run、MTBI、Accuracy、Repeatability、Reproducibility、Correlation、Takt Time。',
          zhTW:'Product Verification Progress——本節介紹Jig Table Flatness、Illumination Uniformity、2D ID(Barcode/OCR)、Dry Run、MTBI、Accuracy、Repeatability、Reproducibility、Correlation、Takt Time。',
          ja:'Product Verification Progress——本節ではJig Table Flatness、Illumination Uniformity、2D ID(Barcode/OCR)、Dry Run、MTBI、Accuracy、Repeatability、Reproducibility、Correlation、Takt Timeを扱います。'
        }},
        {img:cmImg('J','nbga',131),tx:{
          en:'2.2.4. Dry Run — moves the hardware without performing an actual inspection. Tray Available Run Mode uses the check sensor; Probe Available Run Mode uses the optical system.',
          ko:'2.2.4. Dry Run — 실제 검사는 하지 않고 하드웨어만 동작시킵니다. Tray Available Run Mode는 Check Sensor를 사용하고, Probe Available Run Mode는 광학계를 사용합니다.',
          zhCN:'2.2.4. Dry Run——不进行实际检测,仅使硬件动作。Tray Available Run Mode使用Check Sensor,Probe Available Run Mode使用光学系统。',
          zhTW:'2.2.4. Dry Run——不進行實際檢測,僅使硬體動作。Tray Available Run Mode使用Check Sensor,Probe Available Run Mode使用光學系統。',
          ja:'2.2.4. Dry Run——実際の検査は行わずハードウェアのみ動作させます。Tray Available Run ModeはCheck Sensorを使用し、Probe Available Run Modeは光学系を使用します。'
        }},
        {img:cmImg('J','nbga',132),tx:{
          en:'Once the System Option settings are complete, return to the main screen and click Lot Start.',
          ko:'System Option 설정이 완료되면 Main 화면으로 돌아가 \'Lot Start\'를 클릭합니다.',
          zhCN:'System Option设置完成后返回Main画面,点击\'Lot Start\'。',
          zhTW:'System Option設定完成後返回Main畫面,點擊\'Lot Start\'。',
          ja:'System Optionの設定が完了したらMain画面に戻り、\'Lot Start\'をクリックします。'
        }},
        {img:cmImg('J','nbga',133),tx:{
          en:'No alarm should occur over more than 36 hours of continuous run. The log file is saved under This PC ▸ Local Disk (D:) ▸ Log ▸ Mars ▸ Date.',
          ko:'36시간 이상 연속 운전 동안 알람이 발생하지 않아야 합니다. Log 파일은 This PC ▸ Local Disk(D:) ▸ Log ▸ Mars ▸ Date 경로에 저장됩니다.',
          zhCN:'连续运转36小时以上不应发生警报。Log文件保存于This PC ▸ Local Disk(D:) ▸ Log ▸ Mars ▸ Date路径。',
          zhTW:'連續運轉36小時以上不應發生警報。Log檔案儲存於This PC ▸ Local Disk(D:) ▸ Log ▸ Mars ▸ Date路徑。',
          ja:'36時間以上の連続運転中、アラームが発生してはいけません。LogファイルはThis PC ▸ Local Disk(D:) ▸ Log ▸ Mars ▸ Dateのパスに保存されます。'
        }},
        {img:cmImg('J','nbga',134),tx:{
          en:'Click Stop, then click Lot Cancel, to halt the Dry Run.',
          ko:'\'Stop\'을 클릭한 뒤 \'Lot Cancel\'을 클릭하면 Dry Run을 중지할 수 있습니다.',
          zhCN:'点击\'Stop\'后再点击\'Lot Cancel\',即可中止Dry Run。',
          zhTW:'點擊\'Stop\'後再點擊\'Lot Cancel\',即可中止Dry Run。',
          ja:'\'Stop\'をクリックした後\'Lot Cancel\'をクリックするとDry Runを中止できます。'
        }},
        {img:cmImg('J','nbga',135),tx:{
          en:'Product Verification Progress — this section covers Jig Table Flatness, Illumination Uniformity, 2D ID (Barcode/OCR), Dry Run, MTBI, Accuracy, Repeatability, Reproducibility, Correlation, and Takt Time.',
          ko:'Product Verification Progress — Jig Table Flatness, Illumination Uniformity, 2D ID(Barcode/OCR), Dry Run, MTBI, Accuracy, Repeatability, Reproducibility, Correlation, Takt Time를 다룹니다.',
          zhCN:'Product Verification Progress——本节介绍Jig Table Flatness、Illumination Uniformity、2D ID(Barcode/OCR)、Dry Run、MTBI、Accuracy、Repeatability、Reproducibility、Correlation、Takt Time。',
          zhTW:'Product Verification Progress——本節介紹Jig Table Flatness、Illumination Uniformity、2D ID(Barcode/OCR)、Dry Run、MTBI、Accuracy、Repeatability、Reproducibility、Correlation、Takt Time。',
          ja:'Product Verification Progress——本節ではJig Table Flatness、Illumination Uniformity、2D ID(Barcode/OCR)、Dry Run、MTBI、Accuracy、Repeatability、Reproducibility、Correlation、Takt Timeを扱います。'
        }},
        {img:cmImg('J','nbga',136),tx:{
          en:'2.2.5. MTBI = Mean Time Between Interrupt. Tray Available Run Mode uses the check sensor; Probe Available Run Mode uses the optical system.',
          ko:'2.2.5. MTBI = Mean Time Between Interrupt. Tray Available Run Mode는 Check Sensor를 사용하고, Probe Available Run Mode는 광학계를 사용합니다.',
          zhCN:'2.2.5. MTBI = Mean Time Between Interrupt。Tray Available Run Mode使用Check Sensor,Probe Available Run Mode使用光学系统。',
          zhTW:'2.2.5. MTBI = Mean Time Between Interrupt。Tray Available Run Mode使用Check Sensor,Probe Available Run Mode使用光學系統。',
          ja:'2.2.5. MTBI = Mean Time Between Interrupt。Tray Available Run ModeはCheck Sensorを使用し、Probe Available Run Modeは光学系を使用します。'
        }},
        {img:cmImg('J','nbga',137),tx:{
          en:'MTBI setup is checked from the Host program\'s Main screen the same way. (Same MTBI concept as before.)',
          ko:'MTBI 설정은 Host Program의 Main 화면에서도 동일하게 확인할 수 있습니다. (앞선 MTBI 개념과 동일)',
          zhCN:'MTBI设置也可在Host Program的Main画面以相同方式确认。(与前述MTBI概念相同)',
          zhTW:'MTBI設定也可在Host Program的Main畫面以相同方式確認。(與前述MTBI概念相同)',
          ja:'MTBI設定はHost ProgramのMain画面でも同様に確認できます。(前述のMTBI概念と同じ)'
        }},
        {img:cmImg('J','nbga',138),tx:{
          en:'The run must last at least 1 hour. The log file is saved under D:\\Log\\Mars\\Date, and the jam log under D:\\Log\\Log\\Jam_date. The log must show no alarm history.',
          ko:'Run Time은 최소 1시간 이상이어야 합니다. Log 파일은 D:\\Log\\Mars\\Date, Jam Log는 D:\\Log\\Log\\Jam_date 경로에 저장됩니다. Log에 알람 이력이 없어야 합니다.',
          zhCN:'Run Time须至少1小时以上。Log文件保存于D:\\Log\\Mars\\Date,Jam Log保存于D:\\Log\\Log\\Jam_date路径。Log中不得有警报纪录。',
          zhTW:'Run Time須至少1小時以上。Log檔案儲存於D:\\Log\\Mars\\Date,Jam Log儲存於D:\\Log\\Log\\Jam_date路徑。Log中不得有警報紀錄。',
          ja:'Run Timeは最低1時間以上である必要があります。LogファイルはD:\\Log\\Mars\\Date、Jam LogはD:\\Log\\Log\\Jam_dateのパスに保存されます。Logにアラーム履歴があってはいけません。'
        }},
        {img:cmImg('J','nbga',139),tx:{
          en:'Product Verification Progress — this section covers Jig Table Flatness, Illumination Uniformity, 2D ID (Barcode/OCR), Dry Run, MTBI, Accuracy, Repeatability, Reproducibility, Correlation, and Takt Time.',
          ko:'Product Verification Progress — Jig Table Flatness, Illumination Uniformity, 2D ID(Barcode/OCR), Dry Run, MTBI, Accuracy, Repeatability, Reproducibility, Correlation, Takt Time를 다룹니다.',
          zhCN:'Product Verification Progress——本节介绍Jig Table Flatness、Illumination Uniformity、2D ID(Barcode/OCR)、Dry Run、MTBI、Accuracy、Repeatability、Reproducibility、Correlation、Takt Time。',
          zhTW:'Product Verification Progress——本節介紹Jig Table Flatness、Illumination Uniformity、2D ID(Barcode/OCR)、Dry Run、MTBI、Accuracy、Repeatability、Reproducibility、Correlation、Takt Time。',
          ja:'Product Verification Progress——本節ではJig Table Flatness、Illumination Uniformity、2D ID(Barcode/OCR)、Dry Run、MTBI、Accuracy、Repeatability、Reproducibility、Correlation、Takt Timeを扱います。'
        }},
        {img:cmImg('J','nbga',140),tx:{
          en:'2.2.6. Accuracy: click Job Open in the Host program\'s main window and select \'LTS\'. If no LTS job exists, create one via Save As (needed because certain parameters must be changed to proceed with LTS).',
          ko:'2.2.6. Accuracy: Host Program 메인 화면에서 Job Open을 클릭하고 \'LTS\'를 선택합니다. 기존 LTS Job이 없다면 Save As로 새로 만듭니다(LTS 진행을 위해 일부 Parameter 변경 필요).',
          zhCN:'2.2.6. Accuracy:在Host Program主画面点击Job Open并选择\'LTS\'。若尚无既有的LTS Job,可透过Save As新建(因进行LTS需变更部分参数)。',
          zhTW:'2.2.6. Accuracy:在Host Program主畫面點擊Job Open並選擇\'LTS\'。若尚無既有的LTS Job,可透過Save As新建(因進行LTS需變更部分參數)。',
          ja:'2.2.6. Accuracy:Host Programのメイン画面でJob Openをクリックし\'LTS\'を選択します。既存のLTS Jobがない場合はSave Asで新規作成します(LTSを進めるため一部Parameterの変更が必要)。'
        }},
        {img:cmImg('J','nbga',141),tx:{
          en:'Measure each individual height of the Height Target (10µm, 30µm, 50µm) in the Jig\'s LTS block 30 times each: move to the Step Height Target Pos while watching the live image, move Z to In-Focus, Single-Track to find the focus center, and check for the Fringe.',
          ko:'Jig LTS Block의 \'Height Target\' 개별 높이(10um, 30um, 50um)를 각각 30회 측정합니다: Live 화면을 보며 Step Height Target Pos로 이동, Z를 In Focus로 이동 후 Single Tracking으로 초점 중심을 찾고 Fringe를 확인합니다.',
          zhCN:'对Jig LTS Block中\'Height Target\'的各个高度(10um、30um、50um)分别测量30次:观看Live画面移动至Step Height Target Pos,将Z移至In Focus后以Single Tracking寻找对焦中心并确认Fringe。',
          zhTW:'對Jig LTS Block中\'Height Target\'的各個高度(10um、30um、50um)分別測量30次:觀看Live畫面移動至Step Height Target Pos,將Z移至In Focus後以Single Tracking尋找對焦中心並確認Fringe。',
          ja:'Jig LTS Blockの\'Height Target\'の各高さ(10um、30um、50um)をそれぞれ30回測定します:Live画面を見ながらStep Height Target Posへ移動、ZをIn Focusへ移動後Single Trackingで焦点中心を探しFringeを確認します。'
        }},
        {img:cmImg('J','nbga',142),tx:{
          en:'Open Illum Control and confirm \'UseMultiZMap\' is TRUE (change it from FALSE if needed). Select \'3D_Img1\' and set Intensity to 4–5 so the fringe is clearly visible in the Height Target — it should NOT appear at the Start Pos, but SHOULD appear at the Fringe Pos. Save and close when done.',
          ko:'Illum Control을 열어 \'UseMultiZMap\'이 TRUE인지 확인합니다(FALSE면 TRUE로 변경). \'3D_Img1\'을 선택하고 Height Target에서 Fringe가 선명히 보이도록 Intensity를 4~5로 설정합니다 — Start Pos.에서는 보이지 않아야 하고 Fringe Pos.에서는 보여야 합니다. 설정 완료 후 저장하고 닫습니다.',
          zhCN:'打开Illum Control确认\'UseMultiZMap\'为TRUE(若为FALSE则改为TRUE)。选择\'3D_Img1\',将Intensity设为4~5,使Fringe在Height Target中清晰可见——Start Pos.不应出现,Fringe Pos.应出现。设置完成后保存并关闭。',
          zhTW:'開啟Illum Control確認\'UseMultiZMap\'為TRUE(若為FALSE則改為TRUE)。選擇\'3D_Img1\',將Intensity設為4~5,使Fringe在Height Target中清晰可見——Start Pos.不應出現,Fringe Pos.應出現。設定完成後儲存並關閉。',
          ja:'Illum Controlを開き\'UseMultiZMap\'がTRUEか確認します(FALSEならTRUEに変更)。\'3D_Img1\'を選択し、Height TargetでFringeがはっきり見えるようIntensityを4~5に設定します——Start Pos.では見えず、Fringe Pos.では見える必要があります。設定完了後保存して閉じます。'
        }},
        {img:cmImg('J','nbga',143),tx:{
          en:'Select \'3D LTS Target\' from the vision program\'s bottom menu to open its settings window.',
          ko:'Vision Program 하단 메뉴에서 \'3D LTS Target\'을 선택해 설정 창을 엽니다.',
          zhCN:'在Vision Program下方菜单选择\'3D LTS Target\'以打开设置窗口。',
          zhTW:'在Vision Program下方選單選擇\'3D LTS Target\'以開啟設定視窗。',
          ja:'Vision Programの下部メニューで\'3D LTS Target\'を選択し設定ウィンドウを開きます。'
        }},
        {img:cmImg('J','nbga',144),tx:{
          en:'Set a ROI centered on each Step Height, plus one on the surrounding SR plane, as shown (red ROI = Height Target, green ROI = surrounding SR). Once set, click ROI Apply to save the positions.',
          ko:'그림처럼 각 Step Height 중심에 ROI를, 주변 SR 평면에도 ROI를 설정합니다(빨간 ROI=Height Target, 초록 ROI=주변 SR). 설정 완료 후 \'ROI Apply\'를 클릭해 위치를 저장합니다.',
          zhCN:'如图在各Step Height中心设置ROI,并在周围SR平面也设置ROI(红色ROI=Height Target,绿色ROI=周围SR)。设置完成后点击\'ROI Apply\'保存位置。',
          zhTW:'如圖在各Step Height中心設定ROI,並在周圍SR平面也設定ROI(紅色ROI=Height Target,綠色ROI=周圍SR)。設定完成後點擊\'ROI Apply\'儲存位置。',
          ja:'図のように各Step Heightの中心にROIを、周囲のSR平面にもROIを設定します(赤ROI=Height Target、緑ROI=周囲SR)。設定完了後\'ROI Apply\'をクリックし位置を保存します。'
        }},
        {img:cmImg('J','nbga',145),tx:{
          en:'Click Inspect to run the inspection and check the results as shown.',
          ko:'\'Inspect\' 버튼을 클릭해 검사를 진행하고 결과를 확인합니다.',
          zhCN:'点击\'Inspect\'按钮进行检测并确认结果。',
          zhTW:'點擊\'Inspect\'按鈕進行檢測並確認結果。',
          ja:'\'Inspect\'ボタンをクリックして検査を行い、結果を確認します。'
        }},
        {img:cmImg('J','nbga',146),tx:{
          en:'After checking the result, close the settings window and save the Job File.',
          ko:'결과 확인 후, 설정 창을 닫고 Job File을 저장합니다.',
          zhCN:'确认结果后,关闭设置窗口并保存Job File。',
          zhTW:'確認結果後,關閉設定視窗並儲存Job File。',
          ja:'結果確認後、設定ウィンドウを閉じJob Fileを保存します。'
        }},
        {img:cmImg('J','nbga',147),tx:{
          en:'Press Tray LTS to open the LTS window. Check the \'Step Height\' checkbox, set the V1 & V2 Reference value for each Step Height (10, 30, 50), and enter the Repeat Count.',
          ko:'\'Tray LTS\'를 눌러 LTS 창을 엽니다. \'Step Height\' 체크박스를 선택하고, 각 Step Height(10, 30, 50)별 V1 & V2 Reference 값을 설정한 뒤 Repeat Count를 입력합니다.',
          zhCN:'按下\'Tray LTS\'打开LTS窗口。勾选\'Step Height\'复选框,设置各Step Height(10、30、50)的V1 & V2 Reference值后输入Repeat Count。',
          zhTW:'按下\'Tray LTS\'開啟LTS視窗。勾選\'Step Height\'核取方塊,設定各Step Height(10、30、50)的V1 & V2 Reference值後輸入Repeat Count。',
          ja:'\'Tray LTS\'を押しLTSウィンドウを開きます。\'Step Height\'チェックボックスを選択し、各Step Height(10、30、50)ごとのV1 & V2 Reference値を設定した後Repeat Countを入力します。'
        }},
        {img:cmImg('J','nbga',148),tx:{
          en:'Use each Step Height\'s calibration-certificate value as its reference standard (V1 and V2 differ because they apply to different Height Targets). Enter the certified measurement values as the standard and complete the setup.',
          ko:'각 Step Height의 표준값은 기관 검증을 통해 발급받은 인증서 값을 사용합니다(V1과 V2는 서로 다른 Height Target을 적용하므로 값이 다름). 인증서의 측정값을 표준값으로 입력해 설정을 완료합니다.',
          zhCN:'各Step Height的标准值使用经机构验证核发的证书数值(V1与V2因套用不同的Height Target而数值不同)。请输入证书上的测量值作为标准值以完成设置。',
          zhTW:'各Step Height的標準值使用經機構驗證核發的證書數值(V1與V2因套用不同的Height Target而數值不同)。請輸入證書上的測量值作為標準值以完成設定。',
          ja:'各Step Heightの標準値は機関の検証を経て発行された証明書の値を使用します(V1とV2は適用するHeight Targetが異なるため値も異なります)。証明書の測定値を標準値として入力し設定を完了します。'
        }},
        {img:cmImg('J','nbga',149),tx:{
          en:'Click Start to run the inspection; upon completion, a sequence of messages appears and the inspection ends. The result file is saved under This PC ▸ Local Disk (D:) ▸ LTS ▸ Date.',
          ko:'\'Start\'를 클릭해 검사를 진행하며, 완료되면 순서대로 메시지가 표시되고 검사가 종료됩니다. 결과 파일은 This PC ▸ Local Disk(D:) ▸ LTS ▸ Date 경로에 저장됩니다.',
          zhCN:'点击\'Start\'进行检测,完成后会依序显示讯息并结束检测。结果文件保存于This PC ▸ Local Disk(D:) ▸ LTS ▸ Date路径。',
          zhTW:'點擊\'Start\'進行檢測,完成後會依序顯示訊息並結束檢測。結果檔案儲存於This PC ▸ Local Disk(D:) ▸ LTS ▸ Date路徑。',
          ja:'\'Start\'をクリックして検査を進め、完了すると順にメッセージが表示され検査が終了します。結果ファイルはThis PC ▸ Local Disk(D:) ▸ LTS ▸ Dateのパスに保存されます。'
        }},
        {img:cmImg('J','nbga',150),tx:{
          en:'Step Height report — the result reads PASS if under 1µm, or REJECT if 1µm or more (shown for both V1 and V2).',
          ko:'Step Height Report — 결과값이 1um 미만이면 \'PASS\', 1um 이상이면 \'REJECT\'로 기록됩니다(V1, V2 모두 동일하게 판정).',
          zhCN:'Step Height Report——结果值若低于1um则记录为\'PASS\',达到或超过1um则记录为\'REJECT\'(V1、V2均同样判定)。',
          zhTW:'Step Height Report——結果值若低於1um則記錄為\'PASS\',達到或超過1um則記錄為\'REJECT\'(V1、V2均同樣判定)。',
          ja:'Step Height Report——結果値が1um未満なら\'PASS\'、1um以上なら\'REJECT\'として記録されます(V1、V2とも同様に判定)。'
        }},
        {img:cmImg('J','nbga',151),tx:{
          en:'Product Verification Progress — this section covers Jig Table Flatness, Illumination Uniformity, 2D ID (Barcode/OCR), Dry Run, MTBI, Accuracy, Repeatability, Reproducibility, Correlation, and Takt Time.',
          ko:'Product Verification Progress — Jig Table Flatness, Illumination Uniformity, 2D ID(Barcode/OCR), Dry Run, MTBI, Accuracy, Repeatability, Reproducibility, Correlation, Takt Time를 다룹니다.',
          zhCN:'Product Verification Progress——本节介绍Jig Table Flatness、Illumination Uniformity、2D ID(Barcode/OCR)、Dry Run、MTBI、Accuracy、Repeatability、Reproducibility、Correlation、Takt Time。',
          zhTW:'Product Verification Progress——本節介紹Jig Table Flatness、Illumination Uniformity、2D ID(Barcode/OCR)、Dry Run、MTBI、Accuracy、Repeatability、Reproducibility、Correlation、Takt Time。',
          ja:'Product Verification Progress——本節ではJig Table Flatness、Illumination Uniformity、2D ID(Barcode/OCR)、Dry Run、MTBI、Accuracy、Repeatability、Reproducibility、Correlation、Takt Timeを扱います。'
        }},
        {img:cmImg('J','nbga',152),tx:{
          en:'2.2.7. Repeatability – 3D: choose the Job for the product under test (the AMD product is used as the example). Inspect both a severely-warped tray-edge pocket and a pocket at the tray\'s center.',
          ko:'2.2.7. Repeatability – 3D: 검사할 Product의 Job을 선택합니다(예시로 AMD Product 사용). Tray 가장자리 중 변형이 심한 부분과 Tray 중앙의 Product를 검사합니다.',
          zhCN:'2.2.7. Repeatability – 3D:选择要检测的Product的Job(以AMD Product为例)。检测Tray边缘中变形严重的部位及Tray中央的Product。',
          zhTW:'2.2.7. Repeatability – 3D:選擇要檢測的Product的Job(以AMD Product為例)。檢測Tray邊緣中變形嚴重的部位及Tray中央的Product。',
          ja:'2.2.7. Repeatability – 3D:検査するProductのJobを選択します(例としてAMD Productを使用)。Tray端の中で変形が激しい部分とTray中央のProductを検査します。'
        }},
        {img:cmImg('J','nbga',153),tx:{
          en:'Manual ▸ 3D Vision ▸ Inspection Mode ▸ Multi Pocket (select the pockets to inspect) ▸ Static ▸ Option ▸ Repeat Count = 30 ▸ Start. An "Inspection Complete" message appears when it finishes; the result is saved under This PC ▸ Local Disk (D:) ▸ S_REPORT ▸ Date ▸ Manual.',
          ko:'Manual ▸ 3D Vision ▸ Inspection Mode ▸ Multi Pocket(검사할 Pocket 선택) ▸ Static ▸ Option ▸ Repeat Count \'30\' ▸ Start. 완료되면 \'Inspection Complete\' 메시지가 표시되고, 결과 파일은 This PC ▸ Local Disk(D:) ▸ S_REPORT ▸ Date ▸ Manual 경로에 저장됩니다.',
          zhCN:'Manual ▸ 3D Vision ▸ Inspection Mode ▸ Multi Pocket(选择要检测的Pocket) ▸ Static ▸ Option ▸ Repeat Count\'30\' ▸ Start。完成后会显示\'Inspection Complete\'讯息,结果文件保存于This PC ▸ Local Disk(D:) ▸ S_REPORT ▸ Date ▸ Manual路径。',
          zhTW:'Manual ▸ 3D Vision ▸ Inspection Mode ▸ Multi Pocket(選擇要檢測的Pocket) ▸ Static ▸ Option ▸ Repeat Count\'30\' ▸ Start。完成後會顯示\'Inspection Complete\'訊息,結果檔案儲存於This PC ▸ Local Disk(D:) ▸ S_REPORT ▸ Date ▸ Manual路徑。',
          ja:'Manual ▸ 3D Vision ▸ Inspection Mode ▸ Multi Pocket(検査するPocketを選択) ▸ Static ▸ Option ▸ Repeat Count\'30\' ▸ Start。完了すると\'Inspection Complete\'メッセージが表示され、結果ファイルはThis PC ▸ Local Disk(D:) ▸ S_REPORT ▸ Date ▸ Manualのパスに保存されます。'
        }},
        {img:cmImg('J','nbga',154),tx:{
          en:'Pocket 1 Bump Height report — 3Sigma = 3×stdev①, 3Sigma-of-3Sigma = 3×stdev②, Average = average②, Score = 3Sigma-of-3Sigma + Average; PT ratio = 6×stdev①/20×100, PT MAX = the maximum PT ratio. Spec: Score ≤ 1, PT MAX ≤ 20. (Note: the PT ratio formula may vary by customer.)',
          ko:'Pocket 1 Bump Height Report — 3Sigma=3*stdev①, 3Sigma of 3Sigma=3*stdev②, Average=average②, Score=3Sigma of 3Sigma+Average; PT ratio=6*stdev①/20*100, PT MAX=PT ratio 중 최댓값. Spec: Score 1 이하, PT MAX 20 이하. (※ PT ratio 계산 방식은 고객사마다 다를 수 있음)',
          zhCN:'Pocket 1 Bump Height Report——3Sigma=3*stdev①,3Sigma of 3Sigma=3*stdev②,Average=average②,Score=3Sigma of 3Sigma+Average;PT ratio=6*stdev①/20*100,PT MAX=PT ratio中的最大值。规格:Score需1以下,PT MAX需20以下。(※PT ratio计算方式依客户而异)',
          zhTW:'Pocket 1 Bump Height Report——3Sigma=3*stdev①,3Sigma of 3Sigma=3*stdev②,Average=average②,Score=3Sigma of 3Sigma+Average;PT ratio=6*stdev①/20*100,PT MAX=PT ratio中的最大值。規格:Score需1以下,PT MAX需20以下。(※PT ratio計算方式依客戶而異)',
          ja:'Pocket 1 Bump Height Report——3Sigma=3*stdev①、3Sigma of 3Sigma=3*stdev②、Average=average②、Score=3Sigma of 3Sigma+Average;PT ratio=6*stdev①/20*100、PT MAX=PT ratioの最大値。Spec:Score 1以下、PT MAX 20以下。(※PT ratioの計算方式は顧客により異なる場合があります)'
        }},
        {img:cmImg('J','nbga',155),tx:{
          en:'2.2.7. Repeatability – 2D: the same job-selection approach (AMD product; a severely-warped edge pocket and a center pocket).',
          ko:'2.2.7. Repeatability – 2D: 동일한 방식으로 검사할 Product의 Job을 선택합니다(AMD Product, Tray 가장자리 변형 부위와 중앙 Product).',
          zhCN:'2.2.7. Repeatability – 2D:以相同方式选择要检测的Product的Job(AMD Product,Tray边缘变形部位与中央Product)。',
          zhTW:'2.2.7. Repeatability – 2D:以相同方式選擇要檢測的Product的Job(AMD Product,Tray邊緣變形部位與中央Product)。',
          ja:'2.2.7. Repeatability – 2D:同様の方法で検査するProductのJobを選択します(AMD Product、Tray端の変形部位と中央のProduct)。'
        }},
        {img:cmImg('J','nbga',156),tx:{
          en:'Same flow: Manual ▸ 3D Vision ▸ Inspection Mode ▸ Multi Pocket ▸ Static ▸ Option ▸ Repeat Count = 30 ▸ Start; result saved under This PC ▸ Local Disk (D:) ▸ S_REPORT ▸ Date ▸ Manual.',
          ko:'동일한 흐름: Manual ▸ 3D Vision ▸ Inspection Mode ▸ Multi Pocket ▸ Static ▸ Option ▸ Repeat Count \'30\' ▸ Start; 결과는 This PC ▸ Local Disk(D:) ▸ S_REPORT ▸ Date ▸ Manual 경로에 저장됩니다.',
          zhCN:'相同流程:Manual ▸ 3D Vision ▸ Inspection Mode ▸ Multi Pocket ▸ Static ▸ Option ▸ Repeat Count\'30\' ▸ Start;结果保存于This PC ▸ Local Disk(D:) ▸ S_REPORT ▸ Date ▸ Manual路径。',
          zhTW:'相同流程:Manual ▸ 3D Vision ▸ Inspection Mode ▸ Multi Pocket ▸ Static ▸ Option ▸ Repeat Count\'30\' ▸ Start;結果儲存於This PC ▸ Local Disk(D:) ▸ S_REPORT ▸ Date ▸ Manual路徑。',
          ja:'同じ流れ:Manual ▸ 3D Vision ▸ Inspection Mode ▸ Multi Pocket ▸ Static ▸ Option ▸ Repeat Count\'30\' ▸ Start;結果はThis PC ▸ Local Disk(D:) ▸ S_REPORT ▸ Date ▸ Manualのパスに保存されます。'
        }},
        {img:cmImg('J','nbga',157),tx:{
          en:'Pocket 1 Diameter report — PT ratio = 6×stdev①/60×100, PT MAX = the maximum PT ratio. Spec: Score ≤ 1, PT MAX ≤ 20. (Note: the PT ratio formula may vary by customer.)',
          ko:'Pocket 1 Diameter Report — PT ratio=6*stdev①/60*100, PT MAX=PT ratio 중 최댓값. Spec: Score 1 이하, PT MAX 20 이하. (※ PT ratio 계산 방식은 고객사마다 다를 수 있음)',
          zhCN:'Pocket 1 Diameter Report——PT ratio=6*stdev①/60*100,PT MAX=PT ratio中的最大值。规格:Score需1以下,PT MAX需20以下。(※PT ratio计算方式依客户而异)',
          zhTW:'Pocket 1 Diameter Report——PT ratio=6*stdev①/60*100,PT MAX=PT ratio中的最大值。規格:Score需1以下,PT MAX需20以下。(※PT ratio計算方式依客戶而異)',
          ja:'Pocket 1 Diameter Report——PT ratio=6*stdev①/60*100、PT MAX=PT ratioの最大値。Spec:Score 1以下、PT MAX 20以下。(※PT ratioの計算方式は顧客により異なる場合があります)'
        }},
        {img:cmImg('J','nbga',158),tx:{
          en:'Product Verification Progress — this section covers Jig Table Flatness, Illumination Uniformity, 2D ID (Barcode/OCR), Dry Run, MTBI, Accuracy, Repeatability, Reproducibility, Correlation, and Takt Time.',
          ko:'Product Verification Progress — Jig Table Flatness, Illumination Uniformity, 2D ID(Barcode/OCR), Dry Run, MTBI, Accuracy, Repeatability, Reproducibility, Correlation, Takt Time를 다룹니다.',
          zhCN:'Product Verification Progress——本节介绍Jig Table Flatness、Illumination Uniformity、2D ID(Barcode/OCR)、Dry Run、MTBI、Accuracy、Repeatability、Reproducibility、Correlation、Takt Time。',
          zhTW:'Product Verification Progress——本節介紹Jig Table Flatness、Illumination Uniformity、2D ID(Barcode/OCR)、Dry Run、MTBI、Accuracy、Repeatability、Reproducibility、Correlation、Takt Time。',
          ja:'Product Verification Progress——本節ではJig Table Flatness、Illumination Uniformity、2D ID(Barcode/OCR)、Dry Run、MTBI、Accuracy、Repeatability、Reproducibility、Correlation、Takt Timeを扱います。'
        }},
        {img:cmImg('J','nbga',159),tx:{
          en:'2.2.8. Reproducibility – 3D: the same job-selection approach (AMD product; a severely-warped edge pocket and a center pocket). Reproducibility is judged from 6 tests per day over 3 days (18 total).',
          ko:'2.2.8. Reproducibility – 3D: 동일한 방식으로 검사할 Product의 Job을 선택합니다(AMD Product, Tray 가장자리 변형 부위와 중앙 Product). Reproducibility는 하루 6회씩 3일간 진행한 결과(총 18회)로 판정합니다.',
          zhCN:'2.2.8. Reproducibility – 3D:以相同方式选择要检测的Product的Job(AMD Product,Tray边缘变形部位与中央Product)。Reproducibility依每天6次、共3天(总计18次)的结果判定。',
          zhTW:'2.2.8. Reproducibility – 3D:以相同方式選擇要檢測的Product的Job(AMD Product,Tray邊緣變形部位與中央Product)。Reproducibility依每天6次、共3天(總計18次)的結果判定。',
          ja:'2.2.8. Reproducibility – 3D:同様の方法で検査するProductのJobを選択します(AMD Product、Tray端の変形部位と中央のProduct)。Reproducibilityは1日6回×3日間(計18回)の結果で判定します。'
        }},
        {img:cmImg('J','nbga',160),tx:{
          en:'Manual ▸ 3D Vision ▸ Inspection Mode ▸ Multi Pocket ▸ Static ▸ Option ▸ Repeat Count = 6 ▸ Start; an "Inspection Complete" message appears when done, with the result saved under This PC ▸ Local Disk (D:) ▸ S_REPORT ▸ Date ▸ Manual.',
          ko:'Manual ▸ 3D Vision ▸ Inspection Mode ▸ Multi Pocket ▸ Static ▸ Option ▸ Repeat Count \'6\' ▸ Start. 완료되면 \'Inspection Complete\' 메시지가 표시되고, 결과는 This PC ▸ Local Disk(D:) ▸ S_REPORT ▸ Date ▸ Manual 경로에 저장됩니다.',
          zhCN:'Manual ▸ 3D Vision ▸ Inspection Mode ▸ Multi Pocket ▸ Static ▸ Option ▸ Repeat Count\'6\' ▸ Start。完成后会显示\'Inspection Complete\'讯息,结果保存于This PC ▸ Local Disk(D:) ▸ S_REPORT ▸ Date ▸ Manual路径。',
          zhTW:'Manual ▸ 3D Vision ▸ Inspection Mode ▸ Multi Pocket ▸ Static ▸ Option ▸ Repeat Count\'6\' ▸ Start。完成後會顯示\'Inspection Complete\'訊息,結果儲存於This PC ▸ Local Disk(D:) ▸ S_REPORT ▸ Date ▸ Manual路徑。',
          ja:'Manual ▸ 3D Vision ▸ Inspection Mode ▸ Multi Pocket ▸ Static ▸ Option ▸ Repeat Count\'6\' ▸ Start。完了すると\'Inspection Complete\'メッセージが表示され、結果はThis PC ▸ Local Disk(D:) ▸ S_REPORT ▸ Date ▸ Manualのパスに保存されます。'
        }},
        {img:cmImg('J','nbga',161),tx:{
          en:'Pocket 1 Bump Height Reproducibility report — same formula as Repeatability (3Sigma, 3Sigma-of-3Sigma, Average, Score), but PT ratio = 6×stdev①/30×100. Spec: Score ≤ 1, PT MAX ≤ 30.',
          ko:'Pocket 1 Bump Height Reproducibility Report — Repeatability와 동일한 계산식(3Sigma, 3Sigma of 3Sigma, Average, Score)을 사용하되, PT ratio=6*stdev①/30*100. Spec: Score 1 이하, PT MAX 30 이하.',
          zhCN:'Pocket 1 Bump Height Reproducibility Report——采用与Repeatability相同的计算式(3Sigma、3Sigma of 3Sigma、Average、Score),但PT ratio=6*stdev①/30*100。规格:Score需1以下,PT MAX需30以下。',
          zhTW:'Pocket 1 Bump Height Reproducibility Report——採用與Repeatability相同的計算式(3Sigma、3Sigma of 3Sigma、Average、Score),但PT ratio=6*stdev①/30*100。規格:Score需1以下,PT MAX需30以下。',
          ja:'Pocket 1 Bump Height Reproducibility Report——Repeatabilityと同じ計算式(3Sigma、3Sigma of 3Sigma、Average、Score)を使用しますが、PT ratio=6*stdev①/30*100です。Spec:Score 1以下、PT MAX 30以下。'
        }},
        {img:cmImg('J','nbga',162),tx:{
          en:'2.2.8. Reproducibility – 2D: the same job-selection approach (AMD product; a severely-warped edge pocket and a center pocket).',
          ko:'2.2.8. Reproducibility – 2D: 동일한 방식으로 검사할 Product의 Job을 선택합니다(AMD Product, Tray 가장자리 변형 부위와 중앙 Product).',
          zhCN:'2.2.8. Reproducibility – 2D:以相同方式选择要检测的Product的Job(AMD Product,Tray边缘变形部位与中央Product)。',
          zhTW:'2.2.8. Reproducibility – 2D:以相同方式選擇要檢測的Product的Job(AMD Product,Tray邊緣變形部位與中央Product)。',
          ja:'2.2.8. Reproducibility – 2D:同様の方法で検査するProductのJobを選択します(AMD Product、Tray端の変形部位と中央のProduct)。'
        }},
        {img:cmImg('J','nbga',163),tx:{
          en:'Same flow: Manual ▸ 3D Vision ▸ Inspection Mode ▸ Multi Pocket ▸ Static ▸ Option ▸ Repeat Count = 30 ▸ Start; result saved under This PC ▸ Local Disk (D:) ▸ S_REPORT ▸ Date ▸ Manual.',
          ko:'동일한 흐름: Manual ▸ 3D Vision ▸ Inspection Mode ▸ Multi Pocket ▸ Static ▸ Option ▸ Repeat Count \'30\' ▸ Start; 결과는 This PC ▸ Local Disk(D:) ▸ S_REPORT ▸ Date ▸ Manual 경로에 저장됩니다.',
          zhCN:'相同流程:Manual ▸ 3D Vision ▸ Inspection Mode ▸ Multi Pocket ▸ Static ▸ Option ▸ Repeat Count\'30\' ▸ Start;结果保存于This PC ▸ Local Disk(D:) ▸ S_REPORT ▸ Date ▸ Manual路径。',
          zhTW:'相同流程:Manual ▸ 3D Vision ▸ Inspection Mode ▸ Multi Pocket ▸ Static ▸ Option ▸ Repeat Count\'30\' ▸ Start;結果儲存於This PC ▸ Local Disk(D:) ▸ S_REPORT ▸ Date ▸ Manual路徑。',
          ja:'同じ流れ:Manual ▸ 3D Vision ▸ Inspection Mode ▸ Multi Pocket ▸ Static ▸ Option ▸ Repeat Count\'30\' ▸ Start;結果はThis PC ▸ Local Disk(D:) ▸ S_REPORT ▸ Date ▸ Manualのパスに保存されます。'
        }},
        {img:cmImg('J','nbga',164),tx:{
          en:'Pocket 1 Diameter Reproducibility report — PT ratio = 6×stdev①/60×100. Spec: Score ≤ 1, PT MAX ≤ 30.',
          ko:'Pocket 1 Diameter Reproducibility Report — PT ratio=6*stdev①/60*100. Spec: Score 1 이하, PT MAX 30 이하.',
          zhCN:'Pocket 1 Diameter Reproducibility Report——PT ratio=6*stdev①/60*100。规格:Score需1以下,PT MAX需30以下。',
          zhTW:'Pocket 1 Diameter Reproducibility Report——PT ratio=6*stdev①/60*100。規格:Score需1以下,PT MAX需30以下。',
          ja:'Pocket 1 Diameter Reproducibility Report——PT ratio=6*stdev①/60*100。Spec:Score 1以下、PT MAX 30以下。'
        }},
        {img:cmImg('J','nbga',165),tx:{
          en:'Product Verification Progress — this section covers Jig Table Flatness, Illumination Uniformity, 2D ID (Barcode/OCR), Dry Run, MTBI, Accuracy, Repeatability, Reproducibility, Correlation, and Takt Time.',
          ko:'Product Verification Progress — Jig Table Flatness, Illumination Uniformity, 2D ID(Barcode/OCR), Dry Run, MTBI, Accuracy, Repeatability, Reproducibility, Correlation, Takt Time를 다룹니다.',
          zhCN:'Product Verification Progress——本节介绍Jig Table Flatness、Illumination Uniformity、2D ID(Barcode/OCR)、Dry Run、MTBI、Accuracy、Repeatability、Reproducibility、Correlation、Takt Time。',
          zhTW:'Product Verification Progress——本節介紹Jig Table Flatness、Illumination Uniformity、2D ID(Barcode/OCR)、Dry Run、MTBI、Accuracy、Repeatability、Reproducibility、Correlation、Takt Time。',
          ja:'Product Verification Progress——本節ではJig Table Flatness、Illumination Uniformity、2D ID(Barcode/OCR)、Dry Run、MTBI、Accuracy、Repeatability、Reproducibility、Correlation、Takt Timeを扱います。'
        }},
        {img:cmImg('J','nbga',166),tx:{
          en:'2.2.9. Correlation: since no dedicated report is generated for this, Excel\'s scatter-plot function is used instead. When the customer provides standard reference results for a product, correlation is analyzed against them (Standard vs. 3D V1 / 2D / 3D V2). Spec: R² value ≥ 75%.',
          ko:'2.2.9. Correlation: 별도의 검사 Report가 생성되지 않으므로 Excel의 산점도(Scatter Plot) 기능을 사용합니다. 고객사가 특정 Product의 표준(Standard) 결과를 제공한 경우, 이를 기준으로 상관관계 분석을 진행합니다(Standard vs. 3D V1 / 2D / 3D V2). Spec: R² 값 75% 이상.',
          zhCN:'2.2.9. Correlation:由于不会生成专门的检测Report,因此使用Excel的散点图(Scatter Plot)功能。若客户提供某Product的标准(Standard)结果,则以此为基准进行相关性分析(Standard vs. 3D V1 / 2D / 3D V2)。规格:R²值须75%以上。',
          zhTW:'2.2.9. Correlation:由於不會產生專門的檢測Report,因此使用Excel的散佈圖(Scatter Plot)功能。若客戶提供某Product的標準(Standard)結果,則以此為基準進行相關性分析(Standard vs. 3D V1 / 2D / 3D V2)。規格:R²值須75%以上。',
          ja:'2.2.9. Correlation:専用の検査Reportが生成されないため、Excelの散布図(Scatter Plot)機能を使用します。顧客が特定ProductのStandard(標準)結果を提供した場合、それを基準に相関分析を行います(Standard vs. 3D V1 / 2D / 3D V2)。Spec:R²値75%以上。'
        }},
        {img:cmImg('J','nbga',167),tx:{
          en:'When no Standard values are available, the same Excel scatter-plot method is used to run the correlation analysis instead. Spec: R² value ≥ 95%.',
          ko:'Standard 값이 없는 경우에도 동일하게 Excel 산점도 방식으로 상관관계 분석을 진행합니다. Spec: R² 값 95% 이상.',
          zhCN:'即使没有Standard值,也同样以Excel散点图方式进行相关性分析。规格:R²值须95%以上。',
          zhTW:'即使沒有Standard值,也同樣以Excel散佈圖方式進行相關性分析。規格:R²值須95%以上。',
          ja:'Standard値がない場合も同様にExcel散布図方式で相関分析を行います。Spec:R²値95%以上。'
        }},
        {img:cmImg('J','nbga',168),tx:{
          en:'Product Verification Progress — this section covers Jig Table Flatness, Illumination Uniformity, 2D ID (Barcode/OCR), Dry Run, MTBI, Accuracy, Repeatability, Reproducibility, Correlation, and Takt Time.',
          ko:'Product Verification Progress — Jig Table Flatness, Illumination Uniformity, 2D ID(Barcode/OCR), Dry Run, MTBI, Accuracy, Repeatability, Reproducibility, Correlation, Takt Time를 다룹니다.',
          zhCN:'Product Verification Progress——本节介绍Jig Table Flatness、Illumination Uniformity、2D ID(Barcode/OCR)、Dry Run、MTBI、Accuracy、Repeatability、Reproducibility、Correlation、Takt Time。',
          zhTW:'Product Verification Progress——本節介紹Jig Table Flatness、Illumination Uniformity、2D ID(Barcode/OCR)、Dry Run、MTBI、Accuracy、Repeatability、Reproducibility、Correlation、Takt Time。',
          ja:'Product Verification Progress——本節ではJig Table Flatness、Illumination Uniformity、2D ID(Barcode/OCR)、Dry Run、MTBI、Accuracy、Repeatability、Reproducibility、Correlation、Takt Timeを扱います。'
        }},
        {img:cmImg('J','nbga',169),tx:{
          en:'2.2.10. Takt Time: calculate UPH by measuring the Takt Time from the 1st discharged tray through the 10th tray, then averaging the results.',
          ko:'2.2.10. Takt Time: 1번째 Tray 배출부터 10번째 Tray까지 Takt Time을 측정한 뒤 평균값을 계산하여 UPH를 산출합니다.',
          zhCN:'2.2.10. Takt Time:测量从第1个Tray排出到第10个Tray的Takt Time,取平均值后计算UPH。',
          zhTW:'2.2.10. Takt Time:測量從第1個Tray排出到第10個Tray的Takt Time,取平均值後計算UPH。',
          ja:'2.2.10. Takt Time:1枚目のTray排出から10枚目のTrayまでTakt Timeを測定し、平均値を算出してUPHを計算します。'
        }},
        {img:cmImg('J','nbga',170),tx:{
          en:'3. Supplement — Outgoing Report',
          ko:'3. Supplement — Outgoing Report',
          zhCN:'3. Supplement——Outgoing Report',
          zhTW:'3. Supplement——Outgoing Report',
          ja:'3. Supplement——Outgoing Report'
        }},
        {img:cmImg('J','nbga',171),tx:{
          en:'3.1. Outgoing Report — the process of verifying the equipment\'s condition and quality before shipment. The inspection methods and criteria in the outgoing report can vary by customer; it records the various data gathered through the Product Verification Progress process above.',
          ko:'3.1. Outgoing Report — 출하 전 설비의 상태와 품질을 검증하는 과정입니다. Outgoing Report의 내용(검사 방법·기준)은 고객사에 따라 달라질 수 있으며, 앞서 진행한 Product Verification Progress 과정에서 얻은 각종 데이터를 기록합니다.',
          zhCN:'3.1. Outgoing Report——出货前验证设备状态与品质的流程。Outgoing Report的内容(检测方法·基准)可能因客户而异,并记录前述Product Verification Progress流程中所获得的各项数据。',
          zhTW:'3.1. Outgoing Report——出貨前驗證設備狀態與品質的流程。Outgoing Report的內容(檢測方法·基準)可能因客戶而異,並記錄前述Product Verification Progress流程中所獲得的各項資料。',
          ja:'3.1. Outgoing Report——出荷前に設備の状態と品質を検証する工程です。Outgoing Reportの内容(検査方法・基準)は顧客により異なる場合があり、前述のProduct Verification Progress工程で得られた各種データを記録します。'
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
var CM_SPEAK_LABEL={ko:'🔊 읽어주기',en:'🔊 Read Aloud',zhCN:'🔊 朗读',zhTW:'🔊 朗讀',ja:'🔊 読み上げ'};
var CM_STOP_LABEL={ko:'⏹ 정지',en:'⏹ Stop',zhCN:'⏹ 停止',zhTW:'⏹ 停止',ja:'⏹ 停止'};
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
