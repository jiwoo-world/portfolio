"use client";

import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import Container from "./Container";
import { profile } from "@/data/profile";

const NAV_ITEMS = [
  { label: "About", href: "#about" },
  { label: "Stack", href: "#stack" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
];

const SECTION_IDS = NAV_ITEMS.map((item) => item.href.slice(1));

export default function Header() {
  const [activeSection, setActiveSection] = useState<string>("");
  const [menuOpen, setMenuOpen] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const handleIntersect: IntersectionObserverCallback = (entries) => {
      const visible = entries
        .filter((e) => e.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
      if (visible.length > 0) {
        setActiveSection(visible[0].target.id);
      }
    };

    observerRef.current = new IntersectionObserver(handleIntersect, {
      rootMargin: "-30% 0px -60% 0px",
      threshold: 0,
    });

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observerRef.current?.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const id = href.slice(1);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  const initials = profile.nameEn
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-divider">
      <Container className="flex items-center justify-between h-16">
        {/* 로고 */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="text-sm font-bold tracking-wider text-body hover:text-accent transition-colors"
        >
          {initials}
        </a>

        {/* 데스크탑 네비게이션 */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className={`text-sm transition-colors ${
                activeSection === item.href.slice(1)
                  ? "font-semibold text-body"
                  : "font-normal text-muted hover:text-body"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* 모바일 햄버거 버튼 */}
        <button
          className="md:hidden p-2 -mr-2 text-body"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="메뉴 열기"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </Container>

      {/* 모바일 메뉴 드로어 */}
      {menuOpen && (
        <div className="md:hidden border-t border-divider bg-white">
          <Container className="py-4 flex flex-col gap-1">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`py-2.5 text-sm transition-colors ${
                  activeSection === item.href.slice(1)
                    ? "font-semibold text-body"
                    : "font-normal text-muted"
                }`}
              >
                {item.label}
              </a>
            ))}
          </Container>
        </div>
      )}
    </header>
  );
}
