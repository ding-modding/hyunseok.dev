import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Projects — Hyunseok Hong",
  description:
    "Portfolio of Hyunseok Hong — Timeschool, Teamplo, and MatchA, each expanded with the problem, what was built, the tech, and links.",
  alternates: { canonical: "/projects" },
  openGraph: {
    title: "Projects — Hyunseok Hong",
    description:
      "Portfolio of Hyunseok Hong — Timeschool, Teamplo, and MatchA, expanded.",
    url: "https://hyunseok.dev/projects",
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
