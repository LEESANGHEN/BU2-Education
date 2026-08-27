# BU2 교육관리

해외지사 · Agent(협력사) · 고객사 담당자 엔지니어의 본사 방문 설비교육(Level 0~3)을
관리하는 BU2 전용 앱입니다. `BU2 FCBGA Substrate_Branch & Agent Education Curriculum.xlsx`에
정리된 Level 정의·커리큘럼 매트릭스·이수 체크리스트를 기본 데이터로 담고 있습니다.

- 📅 교육 일정 — 대상자별 방문(교육) 일정 타임라인
- 👤 대상자별 이수 현황 — 대상자 정보 + Level 0~3 체크리스트 이수/승인 관리
- 📚 교육 과정 관리 — Level 정의, 커리큘럼 매트릭스(모듈), 평가 기준
- 📋 이력 관리 — Level 승인 이력 / 방문 이력 조회 및 CSV 내보내기

기술 구조는 `BU2-trip` 앱과 동일합니다 (정적 프론트엔드 + Google Apps Script 백엔드 +
Google Sheets 저장소). 배포 방법은 `INSTRUCTIONS.md`를 참고하세요.
