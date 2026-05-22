import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Container from "@/components/layout/Container";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { projects } from "@/data/projects";

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(props: { params: Promise<{ slug: string }> }) {
  const { slug } = await props.params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.title} | 김지수 포트폴리오`,
    description: project.summary,
  };
}

export default async function ProjectDetailPage(props: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await props.params;
  const idx = projects.findIndex((p) => p.slug === slug);
  if (idx === -1) notFound();

  const project = projects[idx];
  const { detail } = project;
  const prevProject = idx > 0 ? projects[idx - 1] : null;
  const nextProject = idx < projects.length - 1 ? projects[idx + 1] : null;

  return (
    <>
      <Header />
      <main className="flex-1 py-[80px] max-sm:py-14">
        <Container className="max-w-[760px]">
          {/* 뒤로 가기 */}
          <Link
            href="/#projects"
            className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-body transition-colors mb-12 group"
          >
            <ArrowLeft
              size={14}
              className="group-hover:-translate-x-0.5 transition-transform"
            />
            목록으로
          </Link>

          {/* 태그 칩 */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-0.5 text-[11px] font-medium rounded-full border border-divider text-muted"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* 제목 */}
          <h1 className="text-2xl md:text-3xl font-bold text-body mb-3 leading-snug">
            {project.title}
          </h1>
          <p className="text-base text-muted leading-relaxed mb-12">
            {project.summary}
          </p>

          {/* 핵심 지표 요약 */}
          <div className="flex flex-wrap gap-8 p-6 rounded-xl border border-divider bg-surface mb-14">
            {project.metrics.map((m) => (
              <div key={m.label} className="flex flex-col gap-0.5">
                <span className="text-2xl font-bold text-accent">{m.value}</span>
                <span className="text-xs text-muted">{m.label}</span>
              </div>
            ))}
          </div>

          {/* Overview */}
          <DetailSection title="Overview">
            <dl className="flex flex-col divide-y divide-divider">
              {[
                { term: "Brand", desc: detail.overview.brand },
                { term: "Period", desc: detail.overview.period },
                { term: "Role", desc: detail.overview.role },
                { term: "Budget", desc: detail.overview.budget },
                { term: "Channels", desc: detail.overview.channels.join(", ") },
              ].map((item) => (
                <div
                  key={item.term}
                  className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-8 py-3.5 first:pt-0 last:pb-0"
                >
                  <dt className="text-xs font-semibold tracking-widest uppercase text-muted sm:w-24 shrink-0">
                    {item.term}
                  </dt>
                  <dd className="text-sm text-body">{item.desc}</dd>
                </div>
              ))}
            </dl>
          </DetailSection>

          {/* Background */}
          <DetailSection title="Background">
            <p className="text-sm text-body leading-relaxed">
              {detail.background}
            </p>
          </DetailSection>

          {/* Strategy */}
          <DetailSection title="Strategy">
            <p className="text-sm text-body leading-relaxed">
              {detail.strategy}
            </p>
          </DetailSection>

          {/* Execution */}
          <DetailSection title="Execution">
            <ul className="flex flex-col gap-3">
              {detail.execution.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-sm text-body leading-relaxed"
                >
                  <span className="mt-[7px] w-1 h-1 rounded-full bg-muted shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </DetailSection>

          {/* Result */}
          <DetailSection title="Result">
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-divider">
                    <th className="text-left py-2.5 pr-6 text-xs font-semibold tracking-widest uppercase text-muted">
                      지표
                    </th>
                    <th className="text-left py-2.5 pr-6 text-xs font-semibold tracking-widest uppercase text-muted">
                      Before
                    </th>
                    <th className="text-left py-2.5 text-xs font-semibold tracking-widest uppercase text-muted">
                      After
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-divider">
                  {detail.results.map((r, i) => (
                    <tr key={i}>
                      <td className="py-3 pr-6 text-body">{r.metric}</td>
                      <td className="py-3 pr-6 text-muted">{r.before}</td>
                      <td className="py-3 font-semibold text-accent">{r.after}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </DetailSection>

          {/* Learning */}
          <DetailSection title="Learning">
            <p className="text-sm text-body leading-relaxed">{detail.learning}</p>
          </DetailSection>

          {/* 이전/다음 프로젝트 네비게이션 */}
          <div className="mt-20 pt-8 border-t border-divider flex items-center justify-between gap-4">
            <div>
              {prevProject && (
                <Link
                  href={`/projects/${prevProject.slug}`}
                  className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-body transition-colors group"
                >
                  <ArrowLeft
                    size={14}
                    className="group-hover:-translate-x-0.5 transition-transform"
                  />
                  <span>{prevProject.title}</span>
                </Link>
              )}
            </div>
            <div>
              {nextProject && (
                <Link
                  href={`/projects/${nextProject.slug}`}
                  className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-body transition-colors group"
                >
                  <span>{nextProject.title}</span>
                  <ArrowRight
                    size={14}
                    className="group-hover:translate-x-0.5 transition-transform"
                  />
                </Link>
              )}
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}

function DetailSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-12">
      <h2 className="text-xs font-semibold tracking-widest uppercase text-muted mb-5">
        {title}
      </h2>
      {children}
    </div>
  );
}
