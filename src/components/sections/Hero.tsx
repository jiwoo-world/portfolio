"use client";

import { motion } from "framer-motion";
import Container from "@/components/layout/Container";
import DynamicIcon from "@/components/ui/DynamicIcon";
import { type Profile } from "@/data/profile";

interface HeroProps {
  profile: Profile;
}

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut", delay },
});

export default function Hero({ profile }: HeroProps) {
  return (
    <section className="min-h-[90vh] flex items-center py-20 max-sm:py-16">
      <Container>
        {/* 전체 중앙 정렬 래퍼 */}
        <div className="mx-auto max-w-[720px] flex flex-col items-center text-center">

          {/* 1) 메인 타이틀 */}
          <motion.h1
            {...fadeUp(0)}
            className="text-[48px] max-sm:text-[32px] font-bold text-body leading-[1.4] mb-8"
          >
            안녕하세요,
            <br />
            {profile.tagline}
            <br />
            {profile.role}{" "}
            <span className="text-accent">{profile.name}</span>입니다.
          </motion.h1>

          {/* 2) 자기소개 */}
          <motion.div
            {...fadeUp(0.1)}
            className="flex flex-col gap-2 mb-16"
          >
            {profile.bio.map((line, i) => (
              <p
                key={i}
                className="text-[16px] text-muted leading-[1.7]"
              >
                {line}
              </p>
            ))}
          </motion.div>

          {/* 3) 강점 3카드 */}
          <motion.div
            {...fadeUp(0.2)}
            className="w-full grid grid-cols-1 sm:grid-cols-3 gap-4"
          >
            {profile.strengths.map((strength, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -2 }}
                className="flex flex-col items-center text-center gap-3 bg-white border border-divider rounded-xl p-6 hover:border-accent hover:shadow-md transition-all duration-200 cursor-default"
              >
                {/* 아이콘 */}
                <div className="text-body">
                  <DynamicIcon name={strength.iconName} size={22} />
                </div>

                {/* 제목 */}
                <h3 className="text-sm font-semibold text-body">
                  {strength.title}
                </h3>

                {/* 설명 */}
                <p className="text-xs text-muted leading-relaxed">
                  {strength.description}
                </p>

                {/* 수치 */}
                <p className="text-sm font-semibold text-accent mt-auto">
                  {strength.metric}
                </p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </Container>
    </section>
  );
}
