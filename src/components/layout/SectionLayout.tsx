"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Container from "./Container";

interface SectionLayoutProps {
  id: string;
  label: string;
  subtitle: string;
  children: React.ReactNode;
  contentMaxWidth?: string;
  className?: string;
}

export default function SectionLayout({
  id,
  label,
  subtitle,
  children,
  contentMaxWidth = "max-w-[900px]",
  className,
}: SectionLayoutProps) {
  return (
    <section
      id={id}
      className={cn("py-[120px] max-sm:py-20", className)}
    >
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {/* 섹션 헤더 블록 — 가운데 정렬 */}
          <div className="text-center mb-16">
            <p className="text-[14px] font-semibold tracking-wide text-accent mb-2">
              {label}
            </p>
            <h2 className="text-[28px] max-sm:text-[22px] font-bold text-body leading-snug">
              {subtitle}
            </h2>
          </div>

          {/* 본문 콘텐츠 */}
          <div className={cn("mx-auto", contentMaxWidth)}>
            {children}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
