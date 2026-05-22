import SectionLayout from "@/components/layout/SectionLayout";
import { type Experience } from "@/data/experiences";

interface ExperienceProps {
  experiences: Experience[];
}

export default function ExperienceSection({ experiences }: ExperienceProps) {
  return (
    <SectionLayout
      id="experience"
      label="경력"
      subtitle="지금까지 함께한 회사와 만든 성과"
    >
      <div className="flex flex-col divide-y divide-divider">
        {experiences.map((exp, i) => (
          <div
            key={i}
            className="flex flex-col md:flex-row gap-4 md:gap-10 py-10 first:pt-0 last:pb-0"
          >
            {/* 좌측: 기간 */}
            <div className="md:w-32 shrink-0 pt-0.5">
              <span className="text-xs text-muted font-medium leading-relaxed">
                {exp.period}
              </span>
            </div>

            {/* 우측: 내용 */}
            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5 mb-1">
                <h3 className="text-base font-semibold text-body">
                  {exp.company}
                </h3>
                <span className="text-xs text-muted">{exp.companyDesc}</span>
              </div>
              <p className="text-sm text-muted mb-5">{exp.role}</p>

              <ul className="list-none p-0 flex flex-col gap-3.5 mb-5">
                {exp.bullets.map((bullet, j) => (
                  <li
                    key={j}
                    className="relative pl-[14px] text-sm text-body leading-relaxed"
                  >
                    <span className="absolute left-0 top-[8px] w-[3px] h-[3px] rounded-full bg-muted/70 shrink-0" />
                    {bullet}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-1.5">
                {exp.tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-2.5 py-0.5 text-[11px] font-medium rounded-full bg-surface text-muted border border-divider"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionLayout>
  );
}
