import SectionLayout from "@/components/layout/SectionLayout";
import { type Profile } from "@/data/profile";

interface AboutProps {
  profile: Profile;
}

type AboutItem = {
  term: string;
  desc: string;
  href?: string;
  isEmail?: boolean;
};

export default function About({ profile }: AboutProps) {
  const items: AboutItem[] = [
    { term: "Name", desc: profile.name },
    { term: "Role", desc: profile.role },
    { term: "Email", desc: profile.email, isEmail: true, href: `mailto:${profile.email}` },
    { term: "LinkedIn", desc: "linkedin.com/in/jisookim-marketer", href: profile.linkedin },
    { term: "Resume", desc: "이력서 다운로드 (PDF)", href: profile.resumeUrl },
  ];

  return (
    <SectionLayout
      id="about"
      label="소개"
      subtitle="데이터로 마케팅 임팩트를 만드는 사람"
      contentMaxWidth="max-w-[700px]"
    >
      <dl className="flex flex-col divide-y divide-divider">
        {items.map((item) => (
          <div
            key={item.term}
            className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-8 py-4 first:pt-0 last:pb-0"
          >
            <dt className="text-xs font-semibold tracking-widest uppercase text-muted sm:w-28 shrink-0">
              {item.term}
            </dt>
            <dd className="text-sm text-body">
              {item.href ? (
                <a
                  href={item.href}
                  target={item.isEmail ? undefined : "_blank"}
                  rel={item.isEmail ? undefined : "noopener noreferrer"}
                  className="hover:text-accent transition-colors underline underline-offset-2 decoration-divider hover:decoration-accent"
                >
                  {item.desc}
                </a>
              ) : (
                item.desc
              )}
            </dd>
          </div>
        ))}
      </dl>
    </SectionLayout>
  );
}
