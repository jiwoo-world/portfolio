import SectionLayout from "@/components/layout/SectionLayout";
import DynamicIcon from "@/components/ui/DynamicIcon";
import { type StackCategory } from "@/data/stacks";

interface StackProps {
  stacks: StackCategory[];
}

export default function Stack({ stacks }: StackProps) {
  return (
    <SectionLayout
      id="stack"
      label="기술 스택"
      subtitle="5년간 다뤄온 광고·분석·데이터 도구"
    >
      <div className="flex flex-col gap-10">
        {stacks.map((category) => (
          <div key={category.category}>
            <p className="text-xs font-semibold tracking-widest uppercase text-muted mb-4 text-center">
              {category.category}
            </p>
            <div className="grid grid-cols-3 sm:grid-cols-5 gap-3">
              {category.items.map((item) => (
                <div
                  key={item.name}
                  className="flex flex-col items-center gap-2 p-3 rounded-lg border border-divider hover:-translate-y-0.5 hover:border-body/20 hover:shadow-sm transition-all duration-200 cursor-default"
                >
                  <DynamicIcon
                    name={item.iconName}
                    size={18}
                    className="text-body"
                  />
                  <span className="text-[11px] text-muted text-center leading-tight">
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionLayout>
  );
}
