import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Research — Hyunseok Hong",
  description:
    "Digital-humanities research by Hyunseok Hong — presentation decks and results analysis.",
  alternates: { canonical: "/research" },
  openGraph: {
    title: "Research — Hyunseok Hong",
    description:
      "Digital-humanities research by Hyunseok Hong — presentation decks and results analysis.",
    url: "https://hyunseok.dev/research",
  },
};

export default function ResearchLayout({ children }: { children: ReactNode }) {
  return children;
}
