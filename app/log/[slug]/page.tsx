"use client";

import { use } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { useLanguage } from "@/components/LanguageProvider";
import { getLogPost, logBulletDate } from "@/content/log";

/**
 * A single dev-log post. Prose resolves to the active site language; phase
 * sections reuse the deploy-log treatment from the CV.
 */
export default function LogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const { t, lang } = useLanguage();

  const post = getLogPost(slug);
  if (!post) notFound();

  return (
    <div className="wrap fade-in">
      <article className="log-post">
        <header className="log-post-head">
          <h1 className="log-post-title">{post.title[lang]}</h1>
          <p className="log-post-meta">{post.meta[lang]}</p>
        </header>

        {post.phases.map((phase) => (
          <section key={phase.heading.ko} className="log-phase">
            <h2 className="log-phase-heading">{phase.heading[lang]}</h2>
            {phase.intro[lang] && (
              <p className="log-phase-intro">{phase.intro[lang]}</p>
            )}
            <ul className="log-phase-list">
              {phase.bullets.map((bullet) => (
                <li key={bullet.text.ko} className="log-phase-item">
                  {bullet.date && (
                    <span className="log-phase-date">
                      {logBulletDate(bullet.date, lang)}
                    </span>
                  )}
                  <span className="log-phase-text">{bullet.text[lang]}</span>
                </li>
              ))}
            </ul>
          </section>
        ))}

        <pre className="log-diagram" aria-label="flow diagram">
          {post.diagram[lang]}
        </pre>

        <div className="log-post-closing">
          {post.closing.map((line) => (
            <p key={line.ko}>{line[lang]}</p>
          ))}
        </div>
      </article>

      <Link href="/log" className="back-link">
        ← {t.ui.backLog}
      </Link>
    </div>
  );
}
