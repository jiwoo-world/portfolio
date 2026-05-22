export type Experience = {
  period: string;
  company: string;
  companyDesc: string;
  role: string;
  bullets: string[];
  tools: string[];
};

export const experiences: Experience[] = [
  {
    period: "2023.01 – 현재",
    company: "StyleMart",
    companyDesc: "패션 이커머스, 연 매출 1,200억",
    role: "퍼포먼스 마케팅 리드",
    bullets: [
      "연간 30억 규모 디지털 광고 예산 전담 운영 (Google · Meta · Kakao 멀티채널)",
      "ROAS 185% → 390% 개선, 월 광고 기여 매출 12억+ 달성",
      "퍼포먼스 마케팅팀 신설 후 주니어 마케터 2명 온보딩 및 멘토링",
      "GA4 · BigQuery 기반 실시간 성과 대시보드 구축으로 리포팅 시간 주 8시간 절감",
      "시즌 캠페인(블프·설·크리스마스) 전략 수립 및 집행, 평균 목표 대비 +34% 초과 달성",
    ],
    tools: ["Google Ads", "Meta Ads", "Kakao Moment", "GA4", "BigQuery", "Looker Studio", "Tableau"],
  },
  {
    period: "2021.03 – 2022.12",
    company: "PocketPay",
    companyDesc: "핀테크 스타트업 (시리즈 A)",
    role: "그로스 마케터",
    bullets: [
      "앱 출시 3개월 만에 MAU 10.2만 달성 (목표 10만) — UA 전략 단독 수립·집행",
      "Apple Search Ads · Google UAC 통합 운영으로 CPI ₩4,200 → ₩2,730 달성",
      "Amplitude 퍼널 분석으로 가입 전환율 18% → 34% 개선 기여",
      "ASO 프로젝트 주도: App Store 상위 노출 키워드 4개 → 20개 확대",
      "D30 리텐션 41% 달성 (핀테크 앱 업계 평균 22% 대비 +19%p)",
    ],
    tools: ["Apple Search Ads", "Google UAC", "Meta App Install", "Amplitude", "AppsFlyer", "GTM"],
  },
  {
    period: "2019.07 – 2021.02",
    company: "Lemon Digital",
    companyDesc: "디지털 마케팅 에이전시",
    role: "디지털 마케터 (AE)",
    bullets: [
      "소비재·뷰티·식음료 7개 브랜드 광고 계정 운영 및 월별 성과 리포팅",
      "Google 검색·디스플레이 광고 CTR 평균 22% 개선, 클라이언트 재계약률 85% 유지",
      "사내 최초 자동화 리포팅 시스템 구축 (Spreadsheets + Data Studio)으로 월 20시간 절감",
      "네이버 검색광고·GFA 운영 자격 취득 후 사내 교육 세션 3회 진행",
      "시니어 마케터와 함께 연간 캠페인 기획서 작성 및 클라이언트 프레젠테이션 참여 20회+",
    ],
    tools: ["Google Ads", "Naver 검색광고", "Naver GFA", "GA", "Looker Studio", "Meta Ads"],
  },
];
