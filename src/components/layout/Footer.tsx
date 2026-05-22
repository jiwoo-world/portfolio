"use client";

import { ArrowUp } from "lucide-react";
import Container from "./Container";
import { profile } from "@/data/profile";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-divider py-8 mt-auto">
      <Container className="flex items-center justify-between">
        <p className="text-sm text-muted">
          <a
            href={`mailto:${profile.email}`}
            className="hover:text-body transition-colors"
          >
            {profile.email}
          </a>
          <span className="mx-3 text-divider">·</span>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-body transition-colors"
          >
            LinkedIn
          </a>
          <span className="mx-3 text-divider">·</span>
          <span>© 2026 {profile.name}</span>
        </p>

        <button
          onClick={scrollToTop}
          className="flex items-center gap-1.5 text-xs text-muted hover:text-body transition-colors group"
          aria-label="페이지 상단으로"
        >
          <ArrowUp size={14} className="group-hover:-translate-y-0.5 transition-transform" />
          <span>Back to top</span>
        </button>
      </Container>
    </footer>
  );
}
