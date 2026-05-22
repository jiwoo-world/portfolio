export type Strength = {
  iconName: string;
  title: string;
  description: string;
  metric: string;
};

export type Profile = {
  name: string;
  nameEn: string;
  role: string;
  tagline: string;
  bio: string[];
  email: string;
  linkedin: string;
  resumeUrl: string;
  strengths: Strength[];
};

export const profile: Profile = {
  name: "이지우",
  nameEn: "Jiwoo Lee",
  role: "퍼포먼스 마케터",
  tagline: "데이터로 성장을 설계하는",
  bio: [
    "5년간 B2C · B2B 브랜드의 디지털 광고를 운영하며 누적 집행 예산 80억 원, 평균 ROAS 340%를 달성했습니다.",
    "단순한 집행을 넘어 퍼널 설계부터 크리에이티브 테스트, 성과 분석까지 전 과정을 직접 주도합니다.",
    "지금은 더 큰 무대에서 데이터 기반 마케팅의 임팩트를 증명하고 싶습니다.",
  ],
  email: "jisoo.kim@example.com",
  linkedin: "https://linkedin.com/in/jisookim-marketer",
  resumeUrl: "/resume.pdf",
  strengths: [
    {
      iconName: "TrendingUp",
      title: "퍼포먼스 광고 운영",
      description: "Google · Meta · Kakao 멀티채널 통합 운영 및 예산 최적화",
      metric: "평균 ROAS 340%",
    },
    {
      iconName: "BarChart2",
      title: "데이터 기반 의사결정",
      description: "GA4 · Amplitude 활용 퍼널 분석 및 A/B 테스트 설계",
      metric: "CAC 42% 절감",
    },
    {
      iconName: "Layers",
      title: "그로스 전략 설계",
      description: "채널 믹스 최적화부터 CRM 자동화까지 풀퍼널 전략 수립",
      metric: "월 신규 유저 +180%",
    },
  ],
};
