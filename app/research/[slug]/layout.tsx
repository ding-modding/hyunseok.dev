import type { Metadata } from "next";
import type { ReactNode } from "react";
import { researchProjects, getResearchProject } from "@/content/research";
import { DEFAULT_LANGUAGE } from "@/lib/i18n";

/** Pre-render a static page for every known research slug. */
export function generateStaticParams() {
  return researchProjects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getResearchProject(slug);

  if (!project) {
    return { title: "Research — Hyunseok Hong" };
  }

  // Metadata is rendered server-side without the client language; resolve to
  // the site default (DEFAULT_LANGUAGE = "ko").
  const title = `${project.title[DEFAULT_LANGUAGE]} — Hyunseok Hong`;
  const description = project.summary[DEFAULT_LANGUAGE];
  return {
    title,
    description,
    alternates: { canonical: `/research/${project.slug}` },
    openGraph: {
      title,
      description,
      url: `https://hyunseok.dev/research/${project.slug}`,
    },
  };
}

export default function ResearchDetailLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
