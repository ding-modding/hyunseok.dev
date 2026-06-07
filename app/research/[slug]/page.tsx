"use client";

import { use } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { useLanguage } from "@/components/LanguageProvider";
import { getResearchProject } from "@/content/research";
import { ResearchReport } from "@/components/ResearchReport";

/**
 * A single research project. Header, methods, links, and the report body are
 * bilingual, rendered full in the site design system.
 */
export default function ResearchDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const { t, lang } = useLanguage();

  const project = getResearchProject(slug);
  if (!project) notFound();

  return (
    <div className="wrap fade-in">
      <article className="research-post">
        <header className="research-post-head">
          <div className="research-post-titlerow">
            <h1 className="research-post-title">{project.title[lang]}</h1>
            <span className="research-post-label">{project.label[lang]}</span>
          </div>
          <p className="research-post-question">{project.question[lang]}</p>

          <div className="research-methods">
            <span className="research-methods-label">
              {t.ui.methodsHeading}
            </span>
            <div className="tech-chips">
              {project.methods.map((m) => (
                <span key={m} className="tech-chip">
                  {m}
                </span>
              ))}
            </div>
          </div>

          <div className="detail-links research-post-links">
            <a
              className="detail-link"
              href={project.deckHref}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.ui.viewPresentation} ↗
            </a>
            <a
              className="detail-link"
              href={project.repoHref}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.ui.viewSource} ↗
            </a>
          </div>

          <p className="research-post-meta">{project.reportMeta[lang]}</p>
        </header>

        <ResearchReport markdown={project.report[lang]} />
      </article>

      <Link href="/research" className="back-link">
        ← {t.ui.backResearch}
      </Link>
    </div>
  );
}
