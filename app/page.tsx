"use client";

import Link from "next/link";
import { useLanguage } from "@/components/LanguageProvider";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { StatusRow } from "@/components/StatusRow";
import { LogEntry } from "@/components/LogEntry";
import { ContactEmail } from "@/components/ContactEmail";

/** Main CV page: Hero, Projects, Experience, Skills, Education,
 *  Honors & Awards, Open Source. Contact lives in the shared Footer. */
export default function HomePage() {
  const { t, lang } = useLanguage();

  return (
    <div className="wrap fade-in">
      <Hero />

      {/* Projects — status rows */}
      <Section label={t.sectionLabels.projects} id="projects">
        {t.projects.map((p) => (
          <StatusRow
            key={p.id}
            name={p.name}
            status={p.status}
            statusNote={p.statusNote}
            summary={p.summary}
            href={`/projects#${p.id}`}
          />
        ))}
        <div className="sec-foot">
          <Link href="/projects" className="sec-foot-link">
            {t.ui.allProjects} →
          </Link>
        </div>
      </Section>

      {/* Research — status rows (neutral dot; not a shipped-product status) */}
      <Section label={t.sectionLabels.research} id="research">
        {t.research.map((r) => (
          <Link
            key={r.slug}
            href={`/research/${r.slug}`}
            className="status-row"
          >
            <span className="dot dot-dev" aria-hidden="true" />
            <span className="status-row-main">
              <span className="status-row-head">
                <span className="status-row-name">{r.title[lang]}</span>
                <span className="status-row-label status-dev">
                  {r.label[lang]}
                </span>
              </span>
              <span className="status-row-desc">{r.summary[lang]}</span>
            </span>
            <span className="status-row-arrow" aria-hidden="true">
              →
            </span>
          </Link>
        ))}
        <div className="sec-foot">
          <Link href="/research" className="sec-foot-link">
            {t.ui.allResearch} →
          </Link>
        </div>
      </Section>

      {/* Experience — deploy log */}
      <Section label={t.sectionLabels.experience} id="experience">
        {t.experience.map((e) => (
          <LogEntry
            key={e.period + e.role}
            time={e.period}
            title={e.role}
            org={e.org}
            note={e.note}
            footnote={e.footnote}
          />
        ))}
      </Section>

      {/* Skills */}
      <Section label={t.sectionLabels.skills} id="skills">
        <div className="skills-grid">
          {t.skills.map((group) => (
            <div key={group.label} className="skill-row">
              <span className="skill-label">{group.label}</span>
              <span className="skill-items">{group.items.join(", ")}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* Education */}
      <Section label={t.sectionLabels.education} id="education">
        <div className="edu-list">
          {t.education.map((edu) => (
            <LogEntry
              key={edu.institution}
              time={edu.period}
              title={edu.institution}
              note={edu.note}
            />
          ))}
        </div>
      </Section>

      {/* Honors & Awards — two sub-groups, rendered as a compact list
          (lighter than the deploy log, so credentials don't outweigh work) */}
      <Section label={t.sectionLabels.awards} id="awards">
        {t.awards.map((group) => (
          <div key={group.label} className="award-group">
            <div className="award-group-label">{group.label}</div>
            {group.entries.map((entry) => (
              <div key={entry.title} className="award-line">
                <span className="award-yr">{entry.year}</span>
                <span className="award-title">{entry.title}</span>
              </div>
            ))}
          </div>
        ))}
      </Section>

      {/* Open Source */}
      <Section label={t.sectionLabels.openSource} id="open-source">
        {t.openSource.map((os) => (
          <p key={os.name} className="os-line">
            <b>{os.name}</b>{" "}
            <a
              className="os-link"
              href={os.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              repo
            </a>{" "}
            <span className="os-stars">{os.stars}</span> — {os.contribution}{" "}
            <a
              className="os-link"
              href={os.prUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {os.prLabel} ↗
            </a>
          </p>
        ))}
      </Section>

      {/* Contact */}
      <Section label={t.sectionLabels.contact} id="contact">
        <div className="contact-list">
          <p className="contact-line">
            <span className="label">Email</span>
            <ContactEmail
              user="contact"
              domain="hyunseok.dev"
              className="contact-link"
            />
          </p>
          <p className="contact-line">
            <span className="label">GitHub</span>
            <a
              className="contact-link"
              href={t.contact.github.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.contact.github.label}
            </a>
          </p>
          {t.contact.linkedin && (
            <p className="contact-line">
              <span className="label">LinkedIn</span>
              <a
                className="contact-link"
                href={t.contact.linkedin.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {t.contact.linkedin.label}
              </a>
            </p>
          )}
          <p className="contact-line">
            <span className="label">Résumé</span>
            <a className="contact-link" href={t.contact.resumeHref}>
              {t.contact.resumeHref.replace(/^\//, "")} ↓
            </a>
          </p>
        </div>
      </Section>
    </div>
  );
}
