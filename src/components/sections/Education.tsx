import SectionLayout from "@/components/layout/SectionLayout";
import { type EducationData } from "@/data/education";

interface EducationProps {
  educationData: EducationData;
}

export default function EducationSection({ educationData }: EducationProps) {
  const { education, certificates } = educationData;

  return (
    <SectionLayout
      id="education"
      label="학력 · 자격증"
      subtitle="꾸준히 쌓아온 학습과 검증된 역량"
    >
      <div className="flex flex-col gap-12">
        {/* 학력 */}
        <div className="flex flex-col gap-6">
          {education.map((edu, i) => (
            <div key={i} className="flex flex-col sm:flex-row gap-2 sm:gap-10">
              <span className="text-xs text-muted font-medium sm:w-32 shrink-0 pt-0.5">
                {edu.period}
              </span>
              <div className="flex-1">
                <h3 className="text-base font-semibold text-body">
                  {edu.school}
                </h3>
                <p className="text-sm text-muted mb-2">{edu.degree}</p>
                {edu.description && (
                  <p className="text-sm text-muted leading-relaxed">
                    {edu.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* 구분선 */}
        <div className="border-t border-divider" />

        {/* 자격증 */}
        <div>
          <p className="text-xs font-semibold tracking-[0.12em] uppercase text-muted mb-6 text-center">
            Certificates
          </p>
          <ul className="flex flex-col divide-y divide-divider">
            {certificates.map((cert, i) => (
              <li
                key={i}
                className="flex flex-col sm:flex-row sm:items-center gap-y-0.5 py-4 first:pt-0 last:pb-0"
              >
                <span className="text-xs text-muted font-medium sm:w-24 shrink-0">
                  {cert.date}
                </span>
                <span className="text-sm text-body flex-1 sm:pr-8">
                  {cert.name}
                </span>
                <span className="text-xs text-muted sm:text-right sm:min-w-[80px]">
                  {cert.issuer}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </SectionLayout>
  );
}
