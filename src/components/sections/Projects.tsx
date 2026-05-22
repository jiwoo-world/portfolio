"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import SectionLayout from "@/components/layout/SectionLayout";
import { type Project } from "@/data/projects";

interface ProjectsProps {
  projects: Project[];
}

export default function Projects({ projects }: ProjectsProps) {
  return (
    <SectionLayout
      id="projects"
      label="프로젝트"
      subtitle="주요 프로젝트의 세부 사항을 확인해보세요"
    >
      <div className="flex flex-col gap-6">
        {projects.map((project, i) => (
          <motion.div
            key={project.slug}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4, ease: "easeOut", delay: i * 0.08 }}
            whileHover={{ y: -3 }}
            className="group rounded-xl border border-divider overflow-hidden hover:border-body/20 hover:shadow-md transition-all duration-300"
          >
            {/* 썸네일 플레이스홀더 */}
            <div className="h-44 bg-surface flex items-center justify-center">
              <span className="text-xs text-muted tracking-widest uppercase">
                Project Thumbnail
              </span>
            </div>

            <div className="p-6 sm:p-8">
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

              {/* 제목 + 요약 */}
              <h3 className="text-lg font-semibold text-body mb-2">
                {project.title}
              </h3>
              <p className="text-sm text-muted leading-relaxed mb-6">
                {project.summary}
              </p>

              {/* 핵심 지표 */}
              <div className="flex flex-wrap gap-6 mb-6">
                {project.metrics.map((m) => (
                  <div key={m.label} className="flex flex-col gap-0.5">
                    <span className="text-xl font-bold text-accent">
                      {m.value}
                    </span>
                    <span className="text-xs text-muted">{m.label}</span>
                  </div>
                ))}
              </div>

              {/* 링크 */}
              <Link
                href={`/projects/${project.slug}`}
                className="inline-flex items-center gap-1 text-sm font-medium text-body hover:text-accent transition-colors group/link"
              >
                자세히 보기
                <ArrowRight
                  size={14}
                  className="group-hover/link:translate-x-0.5 transition-transform"
                />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionLayout>
  );
}
