// One shared schema for all bilingual site content.
// Both content/ko.ts and content/en.ts implement CVContent, so a missing
// field in either language surfaces as a TypeScript compile error.

export type ProjectStatus = "LIVE" | "BETA" | "IN DEV";

export interface NavContent {
  /** Label for the home / CV route. */
  home: string;
  /** Label for the /projects route. */
  projects: string;
  /** Label for the /research route. */
  research: string;
  /** Label for the /log route. */
  log: string;
}

export interface HeroLink {
  /** Visible label, e.g. "GitHub" or "Résumé PDF". */
  label: string;
  /** Destination URL or path. */
  href: string;
  /** Optional trailing glyph: external "↗" or download "↓". */
  glyph?: "external" | "download";
  /** Mark email links so they can be assembled client-side. */
  isEmail?: boolean;
}

export interface Hero {
  /** Mono kicker above the name. */
  kicker: string;
  name: string;
  /** One-line identity statement. */
  identity: string;
  /** Current-status line shown next to the live dot. */
  nowLine: string;
  location: string;
  links: HeroLink[];
}

export interface ExperienceEntry {
  /** Mono timestamp shown in the left gutter. */
  period: string;
  role: string;
  org: string;
  /** Body description of the work. */
  note: string;
  /** Optional smaller footnote (PI, mentor, etc.). */
  footnote?: string;
}

export interface ProjectEntry {
  /** Stable id used for anchors and routing between pages. */
  id: string;
  name: string;
  status: ProjectStatus;
  /** Mono qualifier shown beside the status, e.g. "FOUNDER" or "3Y". */
  statusNote: string;
  /** Short description for the status row on the main page. */
  summary: string;
  /** External product URL. */
  url: string;
  /** Tech stack chips. */
  tech: string[];
  /** Optional link to a dev-log post under /log. */
  logHref?: string;
  /** Expanded detail for the /projects subpage. */
  detail: {
    problem: string;
    built: string;
  };
}

/**
 * A research project. Unlike ProjectEntry (shipped products with a live
 * status), research has a venue, a method list, a presentation deck, and a
 * long-form report. The report body is Korean markdown rendered as-is; the
 * surrounding chrome is bilingual.
 */
export interface ResearchProject {
  /** URL slug under /research (shared across languages). */
  slug: string;
  /** Project title, e.g. "Reddit vs Moltbook" (usually language-neutral). */
  title: LocalizedText;
  /** ISO date (YYYY-MM-DD) for sorting and display (shared). */
  date: string;
  /** Short mono label shown beside the title, e.g. "Independent research · 2026". */
  label: LocalizedText;
  /** One-line summary for the /research list and the CV section row. */
  summary: LocalizedText;
  /** The research question / framing, shown as the detail-page intro. */
  question: LocalizedText;
  /** Method/technique chips (language-neutral terms). */
  methods: string[];
  /** Path to the standalone presentation deck (static HTML under /public). */
  deckHref: string;
  /** Source repository URL. */
  repoHref: string;
  /** Meta line under the report title (data window, date). */
  reportMeta: LocalizedText;
  /** Markdown report body per language, rendered full on the detail page. */
  report: LocalizedText;
}

export interface SkillGroup {
  /** Group label, e.g. "Languages". */
  label: string;
  items: string[];
}

export interface EducationEntry {
  institution: string;
  period: string;
  /** Optional extra line: GPA, credits, honors, or graduation note. */
  note?: string;
}

export interface AwardEntry {
  /** Mono year/timestamp in the left gutter. */
  year: string;
  /** Award title and placement. */
  title: string;
}

export interface AwardGroup {
  label: string;
  entries: AwardEntry[];
}

export interface OpenSourceEntry {
  /** Project / repo name. */
  name: string;
  /** Repo URL. */
  repoUrl: string;
  /** Star count display string, e.g. "17.8k★". */
  stars: string;
  /** Description of the contribution. */
  contribution: string;
  /** Link to the merged PR. */
  prUrl: string;
  /** PR label, e.g. "PR #996". */
  prLabel: string;
}

export interface Contact {
  email: string;
  github: { label: string; href: string };
  /** LinkedIn is optional — omit entirely if no URL exists. */
  linkedin?: { label: string; href: string };
  resumeHref: string;
}

/** A string rendered in whichever site language is active. */
export interface LocalizedText {
  ko: string;
  en: string;
}

/** One dated bullet within a log post phase. */
export interface LogBullet {
  /**
   * Optional mono date prefix in the gutter. Usually a language-neutral token
   * like "4/13" (a plain string); use a LocalizedText only when the label
   * itself differs by language (e.g. "3월" / "Mar").
   */
  date?: string | LocalizedText;
  /** Bullet text. */
  text: LocalizedText;
}

/** One phase (dated section) of a log post. */
export interface LogPhase {
  /** Bold phase heading. */
  heading: LocalizedText;
  /** Short intro line under the heading (may be empty in both languages). */
  intro: LocalizedText;
  /** Dated bullet list. */
  bullets: LogBullet[];
}

/**
 * A dated dev-log post. Prose fields are bilingual (LocalizedText) and render
 * in the active site language; structural fields (slug, date) are shared.
 */
export interface LogPost {
  /** URL slug under /log (shared across languages). */
  slug: string;
  /** Post title. */
  title: LocalizedText;
  /** ISO date (YYYY-MM-DD), used for sorting and display (shared). */
  date: string;
  /** One-line summary shown on the /log list page. */
  summary: LocalizedText;
  /** Meta line shown under the title on the post page. */
  meta: LocalizedText;
  /** Ordered phase sections. */
  phases: LogPhase[];
  /** ASCII flow diagram rendered in a monospace block. */
  diagram: LocalizedText;
  /** Plain closing paragraphs after the diagram. */
  closing: LocalizedText[];
}

export interface SectionLabels {
  experience: string;
  projects: string;
  research: string;
  skills: string;
  education: string;
  awards: string;
  openSource: string;
  contact: string;
}

export interface UIStrings {
  /** "View all projects" style link from the main page to /projects. */
  allProjects: string;
  /** Heading for the problem block on the /projects page. */
  problemHeading: string;
  /** Heading for the "what was built" block on the /projects page. */
  builtHeading: string;
  /** Heading for the tech block on the /projects page. */
  techHeading: string;
  /** Label for the visit-product link. */
  visitLabel: string;
  /** Back-to-home link label on the /projects page. */
  backHome: string;
  /** Intro line at the top of the /projects page. */
  projectsIntro: string;
  /** Accessible label for the language toggle. */
  langToggleLabel: string;
  /** Accessible label for the theme toggle. */
  themeToggleLabel: string;
  /** Heading at the top of the /log list page. */
  logTitle: string;
  /** Intro line at the top of the /log list page. */
  logIntro: string;
  /** Back-to-log-list link label on a /log post page. */
  backLog: string;
  /** Label for the dev-log link on a /projects entry. */
  devLog: string;
  /** "View all research" link from the CV section to /research. */
  allResearch: string;
  /** Heading at the top of the /research list page. */
  researchTitle: string;
  /** Intro line at the top of the /research list page. */
  researchIntro: string;
  /** Back-to-research-list link label on a /research detail page. */
  backResearch: string;
  /** Label for the presentation-deck link. */
  viewPresentation: string;
  /** Label for the source-repository link. */
  viewSource: string;
  /** Heading for the methods/technique chips on a /research detail page. */
  methodsHeading: string;
}

export interface CVContent {
  /** BCP-47 language code for this content set. */
  locale: "ko" | "en";
  nav: NavContent;
  hero: Hero;
  sectionLabels: SectionLabels;
  experience: ExperienceEntry[];
  projects: ProjectEntry[];
  /**
   * Research projects, newest first. A single shared array (content/research.ts);
   * chrome is bilingual, the report body is Korean markdown.
   */
  research: ResearchProject[];
  /**
   * Dev-log posts, newest first. A single shared array (content/log.ts) whose
   * prose fields are bilingual and resolve to the active language at render.
   */
  log: LogPost[];
  skills: SkillGroup[];
  education: EducationEntry[];
  awards: AwardGroup[];
  openSource: OpenSourceEntry[];
  contact: Contact;
  footer: string;
  ui: UIStrings;
}
