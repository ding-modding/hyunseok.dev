"use client";

import Link from "next/link";
import { useLanguage } from "@/components/LanguageProvider";
import type { ProjectStatus } from "@/content/types";

/** Dot/label modifier for the status taxonomy (DESIGN.md). */
function statusMod(status: ProjectStatus): string {
  if (status === "LIVE") return "live";
  if (status === "BETA") return "beta";
  return "dev";
}

/** Portfolio subpage: each project expanded — problem, what was built,
 *  tech stack, and links. */
export default function ProjectsPage() {
  const { t } = useLanguage();

  return (
    <div className="wrap fade-in">
      <section className="page-intro">
        <h1>{t.nav.projects}</h1>
        <p>{t.ui.projectsIntro}</p>
      </section>

      {t.projects.map((p) => {
        const mod = statusMod(p.status);
        const label = p.statusNote
          ? `${p.status} · ${p.statusNote}`
          : p.status;
        return (
          <section key={p.id} id={p.id} className="project-detail">
            <div className="project-detail-head">
              <h2 className="project-detail-name">{p.name}</h2>
              <span className={`project-detail-status status-${mod}`}>
                <span className={`dot dot-${mod}`} aria-hidden="true" />
                {label}
              </span>
            </div>
            <p className="project-detail-url">{p.url.replace(/^https?:\/\//, "")}</p>

            <div className="detail-block">
              <div className="detail-block-label">{t.ui.problemHeading}</div>
              <p className="detail-block-body">{p.detail.problem}</p>
            </div>

            <div className="detail-block">
              <div className="detail-block-label">{t.ui.builtHeading}</div>
              <p className="detail-block-body">{p.detail.built}</p>
            </div>

            <div className="detail-block">
              <div className="detail-block-label">{t.ui.techHeading}</div>
              <div className="tech-chips">
                {p.tech.map((tech) => (
                  <span key={tech} className="tech-chip">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="detail-links">
              <a
                className="detail-link"
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {t.ui.visitLabel} ↗
              </a>
              {p.logHref && (
                <Link className="detail-link" href={p.logHref}>
                  {t.ui.devLog} →
                </Link>
              )}
            </div>
          </section>
        );
      })}

      <Link href="/" className="back-link">
        ← {t.ui.backHome}
      </Link>
    </div>
  );
}
