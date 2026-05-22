export type StackItem = {
  name: string;
  iconName: string;
};

export type StackCategory = {
  category: string;
  items: StackItem[];
};

export const stacks: StackCategory[] = [
  {
    category: "Ads",
    items: [
      { name: "Google Ads", iconName: "Search" },
      { name: "Meta Ads", iconName: "Users" },
      { name: "Kakao Moment", iconName: "MessageCircle" },
      { name: "Naver GFA", iconName: "Globe" },
      { name: "Apple Search Ads", iconName: "Smartphone" },
    ],
  },
  {
    category: "Analytics",
    items: [
      { name: "GA4", iconName: "BarChart2" },
      { name: "Amplitude", iconName: "TrendingUp" },
      { name: "Mixpanel", iconName: "Activity" },
      { name: "Hotjar", iconName: "MousePointer" },
      { name: "GTM", iconName: "Tag" },
    ],
  },
  {
    category: "Data",
    items: [
      { name: "Tableau", iconName: "PieChart" },
      { name: "Looker Studio", iconName: "LineChart" },
      { name: "BigQuery", iconName: "Database" },
      { name: "Spreadsheets", iconName: "Table" },
      { name: "SQL", iconName: "Code2" },
    ],
  },
  {
    category: "Collab",
    items: [
      { name: "Notion", iconName: "FileText" },
      { name: "Slack", iconName: "Hash" },
      { name: "Jira", iconName: "GitBranch" },
      { name: "Figma", iconName: "Layers" },
      { name: "Miro", iconName: "Layout" },
    ],
  },
];
