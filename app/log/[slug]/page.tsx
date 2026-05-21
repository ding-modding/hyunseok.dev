"use client";

import { use } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { useLanguage } from "@/components/LanguageProvider";
import { getLogPost } from "@/content/log";

/**
 * A single dev-log post. The body is Korean and renders as-is in both language
 * modes (intentional — it is a Korean dev log); only the back link is bilingual.
 * Phase sections reuse the deploy-log treatment from the CV.
 */
export default function LogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const { t } = useLanguage();

  const post = getLogPost(slug);
  if (!post) notFound();

  return (
    <div className="wrap fade-in">
      <article className="log-post">
        <header className="log-post-head">
          <h1 className="log-post-title">{post.title}</h1>
          <p className="log-post-meta">{post.meta}</p>
        </header>

        {post.phases.map((phase) => (
          <section key={phase.heading} className="log-phase">
            <h2 className="log-phase-heading">{phase.heading}</h2>
            {phase.intro && (
              <p className="log-phase-intro">{phase.intro}</p>
            )}
            <ul className="log-phase-list">
              {phase.bullets.map((bullet) => (
                <li key={bullet.text} className="log-phase-item">
                  {bullet.date && (
                    <span className="log-phase-date">{bullet.date}</span>
                  )}
                  <span className="log-phase-text">{bullet.text}</span>
                </li>
              ))}
            </ul>
          </section>
        ))}

        <pre className="log-diagram" aria-label="flow diagram">
          {post.diagram}
        </pre>

        <div className="log-post-closing">
          {post.closing.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
      </article>

      <Link href="/log" className="back-link">
        ← {t.ui.backLog}
      </Link>
    </div>
  );
}
