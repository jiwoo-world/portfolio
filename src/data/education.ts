export type Education = {
  period: string;
  school: string;
  degree: string;
  description?: string;
};

export type Certificate = {
  date: string;
  name: string;
  issuer: string;
};

export type EducationData = {
  education: Education[];
  certificates: Certificate[];
};

export const educationData: EducationData = {
  education: [
    {
      period: "2015.03 – 2019.02",
      school: "00대학교",
      degree: "경영학과 학사",
      description:
        "마케팅 전공 심화 과정 이수. 소비자행동론, 브랜드 마케팅, 디지털 미디어 마케팅 수강. 졸업논문: \"SNS 광고 노출 빈도가 구매 의도에 미치는 영향\"",
    },
  ],
  certificates: [
    {
      date: "2023.11",
      name: "Google Analytics 개인 인증 (GAIQ)",
      issuer: "Google",
    },
    {
      date: "2023.08",
      name: "Meta Certified Digital Marketing Associate",
      issuer: "Meta",
    },
    {
      date: "2022.05",
      name: "Google Ads 검색 광고 인증",
      issuer: "Google",
    },
    {
      date: "2021.10",
      name: "네이버 검색광고 마케터 1급",
      issuer: "네이버",
    },
    {
      date: "2021.03",
      name: "SQLD (SQL 개발자 자격증)",
      issuer: "한국데이터산업진흥원",
    },
  ],
};
