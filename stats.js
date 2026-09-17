/* ═══════════════════════════════════════════
   📊 통계/리포트
   Chart.js는 이 탭을 처음 열 때만 CDN에서 지연 로딩한다(cmLoadScript는
   course-materials.js에 정의된 범용 스크립트 로더를 그대로 재사용).
═══════════════════════════════════════════ */
var STATS_CHART_CDN='https://cdn.jsdelivr.net/npm/chart.js@4.4.0/dist/chart.umd.js';
var _statsCharts={};

function statsMonthlyApplications(months){
  months=months||6;
  var out=[];
  var now=new Date();
  var hasApps=(typeof APPS!=='undefined'&&APPS.list);
  for(var i=months-1;i>=0;i--){
    var d=new Date(now.getFullYear(),now.getMonth()-i,1);
    var ym=d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0');
    var cnt=hasApps?APPS.list.filter(function(a){return (a.submittedAt||'').slice(0,7)===ym;}).length:0;
    out.push({label:(d.getMonth()+1)+'월',ym:ym,count:cnt});
  }
  return out;
}
function statsCountryDist(){
  var byCountry={};
  (S.trainees||[]).forEach(function(t){
    var c=t.country||'기타';
    if(!byCountry[c])byCountry[c]={total:0,approved:0};
    byCountry[c].total++;
    if(currentApprovedLevel(t.id)>=0)byCountry[c].approved++;
  });
  return Object.keys(byCountry).map(function(c){
    var d=byCountry[c];
    return {country:c,total:d.total,approved:d.approved,pct:d.total?Math.round(d.approved/d.total*100):0};
  }).sort(function(a,b){return b.total-a.total;});
}
function statsVisitDuration(){
  var done=(S.visits||[]).filter(function(v){return v.status==='done';});
  if(!done.length)return {avg:0,count:0};
  var totalDays=done.reduce(function(s,v){return s+(daysBetween(v.startDate,v.endDate)+1);},0);
  return {avg:Math.round(totalDays/done.length*10)/10,count:done.length};
}
/* 사전학습 섹션별(설비별) 평균 퀴즈 정답률 — 낮은 순으로 정렬해 보완이 필요한 순서를 바로 보여준다 */
function statsSectionDifficulty(){
  var out=[];
  if(typeof EQUIPMENT_LIST==='undefined'||typeof PLA==='undefined')return out;
  EQUIPMENT_LIST.forEach(function(e){
    var sections=plSectionsFor(e.id);
    sections.forEach(function(sec){
      var correct=0,total=0,n=0;
      PLA.list.forEach(function(r){
        var course=r.courses&&r.courses[e.id];
        var p=course&&course.progress&&course.progress[sec.code];
        if(p&&p.quizTotal){correct+=(p.quizScore||0);total+=(p.quizTotal||0);n++;}
      });
      if(n>0){
        out.push({eq:e.id,eqName:equipmentName(e.id),code:sec.code,title:(sec.title&&sec.title.ko)||sec.code,pct:total?Math.round(correct/total*100):0,n:n});
      }
    });
  });
  return out.sort(function(a,b){return a.pct-b.pct;});
}
function statsThemeColors(){
  var dark=document.documentElement.getAttribute('data-theme')!=='light';
  return {text:dark?'#b0b0b8':'#4a4a64',grid:dark?'rgba(255,255,255,.08)':'rgba(0,0,0,.08)'};
}

function renderStatsTab(){
  var wrap=document.getElementById('stats_wrap');
  if(!wrap)return;
  wrap.innerHTML='<div class="empty">통계를 불러오는 중입니다...</div>';
  cmLoadScript(STATS_CHART_CDN).then(function(){
    _renderStatsContent(wrap);
  }).catch(function(){
    wrap.innerHTML='<div class="empty">차트 라이브러리를 불러오지 못했습니다. 네트워크 연결을 확인해주세요.</div>';
  });
}
function _renderStatsContent(wrap){
  var months=statsMonthlyApplications(6);
  var countries=statsCountryDist();
  var visitDur=statsVisitDuration();
  var difficulty=statsSectionDifficulty();
  var colors=statsThemeColors();
  Chart.defaults.color=colors.text;
  Chart.defaults.borderColor=colors.grid;
  Chart.defaults.font.size=11;

  wrap.innerHTML=
    '<div class="td-section"><div class="td-sectitle">월별 신청 추이 (최근 6개월)</div>'
      +'<div style="position:relative;height:220px"><canvas id="statsMonthlyChart"></canvas></div>'
    +'</div>'
    +'<div class="td-section"><div class="td-sectitle">국가별 대상자 분포 및 Level 승인율</div>'
      +(countries.length?'<div style="position:relative;height:240px"><canvas id="statsCountryChart"></canvas></div>':'<div class="empty">등록된 대상자가 없습니다.</div>')
    +'</div>'
    +'<div class="td-section"><div class="td-sectitle">교육 방문 소요기간</div>'
      +'<div class="sum-row"><div class="sum-card"><div class="sum-n">'+visitDur.avg+'일</div><div class="sum-l">평균 방문 소요일 (완료 '+visitDur.count+'건 기준)</div></div></div>'
    +'</div>'
    +'<div class="td-section"><div class="td-sectitle">설비별 학습 난이도 (사전학습 정답률이 낮은 순)</div>'
      +(difficulty.length?('<div style="position:relative;height:'+Math.max(160,difficulty.length*30)+'px"><canvas id="statsDifficultyChart"></canvas></div>'):'<div class="empty">사전학습 응시 데이터가 없습니다.</div>')
    +'</div>';

  Object.keys(_statsCharts).forEach(function(k){if(_statsCharts[k])_statsCharts[k].destroy();});
  _statsCharts={};

  _statsCharts.monthly=new Chart(document.getElementById('statsMonthlyChart'),{
    type:'bar',
    data:{labels:months.map(function(m){return m.label;}),datasets:[{label:'신청 건수',data:months.map(function(m){return m.count;}),backgroundColor:'#534AB7',borderRadius:4}]},
    options:{responsive:true,maintainAspectRatio:false,plugins:{legend:{display:false}},scales:{y:{beginAtZero:true,ticks:{precision:0}}}}
  });

  if(countries.length){
    _statsCharts.country=new Chart(document.getElementById('statsCountryChart'),{
      type:'bar',
      data:{
        labels:countries.map(function(c){return c.country;}),
        datasets:[
          {label:'전체 대상자',data:countries.map(function(c){return c.total;}),backgroundColor:'#7F77DD',borderRadius:4,yAxisID:'y'},
          {label:'Level 승인율(%)',data:countries.map(function(c){return c.pct;}),backgroundColor:'#4ade9a',borderRadius:4,yAxisID:'y1'}
        ]
      },
      options:{
        responsive:true,maintainAspectRatio:false,
        scales:{
          y:{beginAtZero:true,ticks:{precision:0}},
          y1:{beginAtZero:true,max:100,position:'right',grid:{drawOnChartArea:false}}
        }
      }
    });
  }

  if(difficulty.length){
    _statsCharts.difficulty=new Chart(document.getElementById('statsDifficultyChart'),{
      type:'bar',
      data:{
        labels:difficulty.map(function(d){return d.eqName+' · '+d.title;}),
        datasets:[{label:'정답률(%)',data:difficulty.map(function(d){return d.pct;}),backgroundColor:difficulty.map(function(d){return d.pct<60?'#e07070':(d.pct<80?'#e0a838':'#4ade9a');}),borderRadius:4}]
      },
      options:{indexAxis:'y',responsive:true,maintainAspectRatio:false,plugins:{legend:{display:false}},scales:{x:{beginAtZero:true,max:100}}}
    });
  }
}
