import type { CVContent } from "./types";
import { logPosts } from "./log";

// English content. Sourced strictly from CONTENT.md — do not invent or alter.
export const en: CVContent = {
  locale: "en",
  nav: {
    home: "CV",
    projects: "Projects",
    log: "Log",
  },
  hero: {
    kicker: "hyunseok.dev",
    name: "Hyunseok Hong",
    identity: "KAIST CS undergraduate. I build products people actually use.",
    nowLine: "Now — building Teamplo & MatchA",
    location: "Daejeon, South Korea",
    links: [
      { label: "GitHub", href: "https://github.com/ding-modding", glyph: "external" },
      { label: "contact@hyunseok.dev", href: "mailto:contact@hyunseok.dev", isEmail: true },
      { label: "Résumé PDF", href: "/resume.pdf", glyph: "download" },
    ],
  },
  sectionLabels: {
    experience: "Experience — deploy log",
    projects: "Projects — live status",
    skills: "Skills",
    education: "Education",
    awards: "Honors & Awards",
    openSource: "Open source",
    contact: "Contact",
  },
  experience: [
    {
      period: "2025.12 — 2026.03",
      role: "Research Intern",
      org: "KIXLAB — KAIST Interaction Lab",
      note: "Researched video accessibility for viewers who struggle with fast-paced content (e.g. borderline intellectual functioning). Designed and built a prototype that adaptively edits video pacing per viewer; experimented with and fine-tuned AI video-editing models.",
      footnote: "KAIST Interaction Lab (PI: Juho Kim) · mentored by Seungju Kim",
    },
    {
      period: "2024.08 — present",
      role: "PM & Lead Developer",
      org: "Mad on — Timeschool",
      note: "Built and operate Timeschool, a night-study management web platform. Signed a service contract with Incheon Jinsan Science High School; running 3 years. Led the Node.js backend and contributed the React/Vite frontend; iterated each semester on user feedback.",
    },
  ],
  log: logPosts,
  projects: [
    {
      id: "teamplo",
      name: "Teamplo",
      status: "BETA",
      statusNote: "FOUNDER",
      summary: "A leader-run team dashboard for university group projects.",
      url: "https://teamplo.com",
      tech: ["Next.js", "PostgreSQL", "Yjs", "CodeMirror 6"],
      logHref: "/log/teamplo-5-weeks",
      detail: {
        problem:
          "Task assignments for a university team project scatter across a KakaoTalk group chat. Knowing who owns what means scrolling back through messages — and the leader, especially, cannot see the team's bottleneck at a glance.",
        built:
          "It started as a personal to-do app, but after P0 interviews with students at KAIST, SKKU, Korea University, and POSTECH it pivoted to a leader-first tool for unblocking the team. Built v0→v3→v4 in 5 weeks — replaced a hand-rolled merge with Yjs CRDT and migrated the editor to CodeMirror 6. Built throughout with Claude Code.",
      },
    },
    {
      id: "timeschool",
      name: "Timeschool",
      status: "LIVE",
      statusNote: "3Y",
      summary:
        "Night-study management platform. Running 3 years under a school contract. Founder and lead developer.",
      url: "https://jinsan.timeschool.kr",
      tech: ["Node.js", "React", "Vite"],
      detail: {
        problem:
          "Managing supervised night study meant handling attendance, seating, and movement requests on paper and by word of mouth — tedious for both students and teachers.",
        built:
          "Built a night-study management platform, signed a service contract with Incheon Jinsan Science High School, and have run it for three years. Founder and lead developer.",
      },
    },
    {
      id: "matcha",
      name: "MatchA",
      status: "BETA",
      statusNote: "CORE DEV",
      summary: "Group calendar and scheduling coordination. Core developer.",
      url: "https://matchall.co.kr",
      tech: ["Next.js", "Vercel"],
      detail: {
        problem:
          "Belonging to several groups means scheduling tools fragment across each one. You need a single place to organize groups and calendars and to lock in plans together.",
        built:
          "A workspace for group scheduling that organizes groups and calendars like folders, with time-voting and When2Meet-style coordination. Joined as a core developer.",
      },
    },
  ],
  skills: [
    {
      label: "Languages",
      items: ["C", "C++", "C#", "Python", "Java", "TypeScript", "JavaScript", "HTML/CSS"],
    },
    {
      label: "Frameworks",
      items: ["React", "Next.js", "Node.js", "Tailwind CSS", "PyTorch"],
    },
    {
      label: "Workflow",
      items: ["AI-assisted development (Claude Code, Codex)"],
    },
  ],
  education: [
    {
      institution: "KAIST, School of Computing",
      period: "2024.02 — present",
      note: "GPA 3.96 / 4.3 (82 credits) · Dean's List (1st & 2nd semester)",
    },
    {
      institution: "Incheon Jinsan Science High School",
      period: "2022.03 — 2024.02",
      note: "Early graduation",
    },
  ],
  awards: [
    {
      label: "Competitive Programming",
      entries: [
        { year: "2025", title: "NYPC Code Battle — top 4.87%" },
        {
          year: "2023",
          title: "Korean Olympiad in Informatics (KOI), Silver — 12th nationally (high-school division)",
        },
        {
          year: "2022",
          title: "Korean Olympiad in Informatics (KOI), Bronze (high-school division)",
        },
      ],
    },
    {
      label: "Honors & Scholarships",
      entries: [
        { year: "2024", title: "KAIST President's Award" },
        { year: "2024", title: "KAIST Presidential Fellowship (KPF) — scholarship" },
        { year: "2023", title: "ICT Award Korea — Grand Prize" },
        { year: "2022", title: "CPS (Creative Problem Solving) Festival — Grand Prize" },
        {
          year: "2023",
          title: "Incheon Science Exhibition — award (e-scooter posture/stability deep-learning study)",
        },
      ],
    },
  ],
  openSource: [
    {
      name: "gbrain",
      repoUrl: "https://github.com/garrytan/gbrain",
      stars: "17.8k★",
      contribution:
        "OAuth public-client (PKCE / RFC 7591) compatibility fix. Merged in v0.34.1.0.",
      prUrl: "https://github.com/garrytan/gbrain/pull/996",
      prLabel: "PR #996",
    },
  ],
  contact: {
    email: "contact@hyunseok.dev",
    github: { label: "github.com/ding-modding", href: "https://github.com/ding-modding" },
    resumeHref: "/resume.pdf",
  },
  footer: "© 2026 Hyunseok Hong · built with Next.js",
  ui: {
    allProjects: "View all projects",
    problemHeading: "Problem",
    builtHeading: "What was built",
    techHeading: "Tech",
    visitLabel: "Visit site",
    backHome: "Back to CV",
    projectsIntro:
      "Each project, expanded — the problem, what was built, the tech, and links.",
    langToggleLabel: "Toggle language",
    themeToggleLabel: "Toggle theme",
    logTitle: "Dev Log",
    logIntro: "Dated notes from building products.",
    backLog: "Log",
    devLog: "Dev log",
  },
};
