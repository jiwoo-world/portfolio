export type ProjectMetric = {
  label: string;
  value: string;
};

export type ProjectResult = {
  metric: string;
  before: string;
  after: string;
};

export type ProjectOverview = {
  brand: string;
  period: string;
  role: string;
  budget: string;
  channels: string[];
};

export type ProjectDetail = {
  overview: ProjectOverview;
  background: string;
  strategy: string;
  execution: string[];
  results: ProjectResult[];
  learning: string;
};

export type Project = {
  slug: string;
  title: string;
  summary: string;
  tags: string[];
  metrics: ProjectMetric[];
  detail: ProjectDetail;
};

export const projects: Project[] = [
  {
    slug: "ecommerce-roas-optimization",
    title: "이커머스 퍼포먼스 광고 전면 개편",
    summary:
      "연간 30억 규모 광고 예산을 재구조화해 ROAS를 2.1배 개선하고 신규 고객 획득 비용을 절반으로 낮춘 프로젝트.",
    tags: ["Google Ads", "Meta Ads", "GA4", "A/B Test"],
    metrics: [
      { label: "ROAS 개선", value: "+210%" },
      { label: "CAC 절감", value: "-48%" },
      { label: "월 매출 기여", value: "12억+" },
    ],
    detail: {
      overview: {
        brand: "StyleMart (패션 이커머스)",
        period: "2023.06 – 2023.12 (7개월)",
        role: "퍼포먼스 마케팅 리드",
        budget: "연 30억 원",
        channels: ["Google Shopping", "Meta Advantage+", "Kakao Moment"],
      },
      background:
        "기존 캠페인은 브랜드 광고 의존도가 높고 신규 고객 퍼널이 부재했습니다. 시즌 피크(블프·크리스마스)에 CPC가 급등해 수익성이 악화되는 패턴이 반복되었습니다. 광고 소재 다양성 부족과 오디언스 세그멘테이션 미흡이 핵심 원인으로 진단되었습니다.",
      strategy:
        "신규 고객 획득(Acquisition) → 재구매 전환(Retention) → 고가치 고객 육성(LTV)의 3단계 퍼널을 설계했습니다. 채널별 역할을 명확히 분리하고 예산 배분을 성과 기반으로 자동화했습니다.",
      execution: [
        "Google Ads: P-Max 캠페인과 쇼핑 캠페인을 분리 운영해 브랜드/논브랜드 기여도를 명확히 측정",
        "Meta Ads: Advantage+ Shopping Campaign 도입 후 동적 크리에이티브 테스트 주 2회 진행",
        "오디언스: 구매 LTV 상위 20% 기반 Lookalike 오디언스 다층 생성(1%, 3%, 5%)",
        "GA4 + BigQuery 연동으로 실시간 채널 기여도 분석 대시보드 구축",
        "시즌 캠페인 4주 전 예열 콘텐츠 전략으로 CPM 사전 확보",
      ],
      results: [
        { metric: "ROAS", before: "185%", after: "390%" },
        { metric: "CAC", before: "₩28,000", after: "₩14,500" },
        { metric: "신규 고객 수 (월)", before: "4,200명", after: "9,800명" },
        { metric: "광고 기여 매출 (월)", before: "6.2억", after: "12.4억" },
      ],
      learning:
        "오디언스 세그멘테이션과 크리에이티브 테스트의 동시 실행이 성과 개선의 핵심이었습니다. 특히 LTV 기반 Lookalike 오디언스는 단순 픽셀 기반 리타겟팅보다 CPA가 31% 낮았습니다. 다음에는 오프라인 전환 데이터를 연결해 omni-channel attribution 모델을 적용할 것입니다.",
    },
  },
  {
    slug: "app-user-acquisition",
    title: "핀테크 앱 유저 획득 캠페인",
    summary:
      "출시 3개월 만에 MAU 10만 달성 목표를 위한 UA 전략 수립 및 Apple Search Ads · Google UAC 통합 운영.",
    tags: ["Apple Search Ads", "Google UAC", "Amplitude", "ASO"],
    metrics: [
      { label: "MAU 달성", value: "10.2만" },
      { label: "CPI 절감", value: "-35%" },
      { label: "D30 리텐션", value: "41%" },
    ],
    detail: {
      overview: {
        brand: "PocketPay (핀테크 스타트업)",
        period: "2022.09 – 2022.12 (4개월)",
        role: "UA 마케터 (단독 담당)",
        budget: "월 1.5억 원",
        channels: ["Apple Search Ads", "Google UAC", "Meta App Install"],
      },
      background:
        "신규 핀테크 앱으로 브랜드 인지도가 전무한 상태에서 출시 90일 내 MAU 10만 명을 목표로 설정했습니다. 금융 앱 특성상 CPI가 높고 설치 후 가입 전환율이 낮은 업계 특성이 큰 도전 과제였습니다.",
      strategy:
        "ASO 최적화로 오가닉 유입 기반을 먼저 다진 후 유료 UA를 병행했습니다. 가입 완료율이 높은 사용자 프로파일을 분석해 타겟팅 시드 오디언스를 정교하게 설계했습니다.",
      execution: [
        "App Store / Play Store 메타데이터 전면 개편으로 오가닉 키워드 상위 노출 20개 달성",
        "Apple Search Ads: 경쟁사 브랜드 키워드 + 카테고리 키워드 2-tier 구조",
        "Google UAC: 크리에이티브 에셋 A/B 테스트 (영상 15s vs 30s, 정적 vs 동적 배너)",
        "Amplitude로 가입 퍼널 단계별 이탈 지점 특정 후 인앱 온보딩 UX 개선 제안",
        "이벤트 가입(첫 달 이자 우대) 연계 집중 기간 운영으로 CPA 피크 시즌 30% 절감",
      ],
      results: [
        { metric: "MAU", before: "0명 (신규)", after: "102,400명" },
        { metric: "CPI", before: "₩4,200 (업계 평균)", after: "₩2,730" },
        { metric: "가입 전환율", before: "18%", after: "34%" },
        { metric: "D30 리텐션", before: "-", after: "41%" },
      ],
      learning:
        "ASO와 유료 UA를 동시에 최적화하면 유료 CPI뿐 아니라 전체 UA 효율이 극적으로 개선됩니다. 특히 Apple Search Ads는 경쟁사 키워드 집행 시 전환율이 브랜드 키워드의 1.8배였습니다. 향후에는 MMP(AppsFlyer)를 통한 멀티터치 어트리뷰션 고도화를 계획합니다.",
    },
  },
  {
    slug: "b2b-lead-generation",
    title: "SaaS B2B 리드 제네레이션 시스템 구축",
    summary:
      "콘텐츠 마케팅과 LinkedIn Ads를 결합해 MQL 월 300건, 영업 전환율 18%를 달성한 B2B 리드 파이프라인 구축.",
    tags: ["LinkedIn Ads", "HubSpot", "콘텐츠 마케팅", "마케팅 자동화"],
    metrics: [
      { label: "월 MQL", value: "300건+" },
      { label: "영업 전환율", value: "18%" },
      { label: "CPL 절감", value: "-52%" },
    ],
    detail: {
      overview: {
        brand: "DataBridge (HR SaaS)",
        period: "2024.01 – 2024.08 (8개월)",
        role: "B2B 마케팅 매니저",
        budget: "월 3,000만 원",
        channels: ["LinkedIn Ads", "Google 검색광고", "이메일 자동화"],
      },
      background:
        "영업팀이 직접 Cold Call로만 리드를 발굴하던 구조였습니다. 마케팅 팀이 없어 인바운드 파이프라인이 전무했고, 경쟁사 대비 브랜드 인지도가 현저히 낮았습니다. B2B HR SaaS는 의사결정 사이클이 3~6개월로 긴 만큼 육성(Nurturing) 전략이 필수였습니다.",
      strategy:
        "ICP(이상적 고객 프로파일)를 HR 담당자 50~500인 규모 제조·물류 기업으로 특정했습니다. 콘텐츠 → 리드 캡처 → 자동 육성 → 영업 전달의 풀퍼널을 6개월 내 구축하는 것을 목표로 했습니다.",
      execution: [
        "LinkedIn Ads: 직군(HR Manager/Director) + 기업 규모 타겟팅으로 Lead Gen Form 운영",
        "주 2회 HR 인사이트 뉴스레터 발행으로 구독자 3,800명 확보",
        "HubSpot으로 리드 스코어링 모델 구축 (온사이트 행동 + 이메일 인터랙션 가중치)",
        "SQL 기준 충족 리드 자동 CRM 전달 워크플로우로 영업팀 첫 응대 시간 72시간→4시간 단축",
        "고객사 케이스 스터디 3편 제작, 평균 다운로드 1,200건 / 리드 전환율 22%",
      ],
      results: [
        { metric: "월 MQL", before: "12건 (콜드콜)", after: "318건" },
        { metric: "CPL", before: "₩185,000", after: "₩89,000" },
        { metric: "영업 전환율 (MQL→계약)", before: "8%", after: "18%" },
        { metric: "파이프라인 금액 (분기)", before: "2.1억", after: "9.4억" },
      ],
      learning:
        "B2B는 단기 전환보다 ICP 정의의 정확도가 전체 효율을 결정합니다. 초기 3개월은 데이터 수집에 집중하고 리드 스코어링 모델을 지속 개선한 것이 후반기 폭발적 성장의 기반이 되었습니다. 콘텐츠 마케팅의 ROI는 6개월 이후부터 복리로 증가한다는 것을 체감했습니다.",
    },
  },
];
