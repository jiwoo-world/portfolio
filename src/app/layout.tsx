import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "이지우 | 퍼포먼스 마케터",
  description:
    "데이터로 성장을 설계하는 5년차 퍼포먼스 마케터 이지우의 포트폴리오입니다.",
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
        
        <Script
  src="https://www.googletagmanager.com/gtag/js?id=G-D5LMCSM2LP"
  strategy="afterInteractive"
/>
<Script id="ga4-init" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-D5LMCSM2LP');
  `}
</Script>
      </body>
    </html>
  );
}
