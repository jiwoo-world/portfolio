import {
  TrendingUp,
  BarChart2,
  Layers,
  Search,
  Users,
  MessageCircle,
  Globe,
  Smartphone,
  Activity,
  MousePointer,
  Tag,
  PieChart,
  LineChart,
  Database,
  Table,
  Code2,
  FileText,
  Hash,
  GitBranch,
  Layout,
  type LucideProps,
} from "lucide-react";

const ICON_MAP: Record<string, React.ComponentType<LucideProps>> = {
  TrendingUp,
  BarChart2,
  Layers,
  Search,
  Users,
  MessageCircle,
  Globe,
  Smartphone,
  Activity,
  MousePointer,
  Tag,
  PieChart,
  LineChart,
  Database,
  Table,
  Code2,
  FileText,
  Hash,
  GitBranch,
  Layout,
};

interface DynamicIconProps extends LucideProps {
  name: string;
}

export default function DynamicIcon({ name, ...props }: DynamicIconProps) {
  const Icon = ICON_MAP[name];
  if (!Icon) return null;
  return <Icon {...props} />;
}
