import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { InitScript } from "@/components/InitScript";
import { LanguageProvider } from "@/components/LanguageProvider";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { DEFAULT_LANGUAGE } from "@/lib/i18n";

// Geist + Geist Mono self-hosted via next/font (no CLS).
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL = "https://hyunseok.dev";
const TITLE = "Hyunseok Hong — KAIST CS undergraduate & builder";
const DESCRIPTION =
  "Personal CV of Hyunseok Hong, a KAIST Computer Science undergraduate who builds products that real people use — Timeschool, Teamplo, MatchA.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  applicationName: "hyunseok.dev",
  authors: [{ name: "Hyunseok Hong" }],
  keywords: [
    "Hyunseok Hong",
    "KAIST",
    "Computer Science",
    "software engineer",
    "CV",
    "portfolio",
    "Timeschool",
    "Teamplo",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    siteName: "hyunseok.dev",
    title: TITLE,
    description: DESCRIPTION,
    url: SITE_URL,
    locale: "ko_KR",
    alternateLocale: ["en_US"],
  },
  twitter: {
    card: "summary",
    title: TITLE,
    description: DESCRIPTION,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // lang/data-theme are set pre-paint by InitScript; defaults here keep
    // server and first client render consistent.
    <html
      lang={DEFAULT_LANGUAGE}
      data-theme="light"
      className={`${geistSans.variable} ${geistMono.variable} h-full`}
      suppressHydrationWarning
    >
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link
          rel="preconnect"
          href="https://cdn.jsdelivr.net"
          crossOrigin="anonymous"
        />
        <InitScript />
      </head>
      <body>
        <ThemeProvider>
          <LanguageProvider>
            <div className="page-shell">
              <Nav />
              <main>{children}</main>
              <Footer />
            </div>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
