import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "김지수 | 퍼포먼스 마케터",
  description:
    "데이터로 성장을 설계하는 5년차 퍼포먼스 마케터 김지수의 포트폴리오입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-white text-body">
        {children}
      </body>
    </html>
  );
}
