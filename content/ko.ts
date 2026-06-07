import type { CVContent } from "./types";
import { logPosts } from "./log";
import { researchProjects } from "./research";

// Korean content. Sourced strictly from CONTENT.md — do not invent or alter.
export const ko: CVContent = {
  locale: "ko",
  nav: {
    home: "CV",
    projects: "프로젝트",
    research: "연구",
    log: "일지",
  },
  hero: {
    kicker: "hyunseok.dev",
    name: "Hyunseok Hong",
    identity: "KAIST 전산학부 학부생. 실제 사용자가 쓰는 제품을 만든다.",
    nowLine: "현재 — Teamplo·MatchA 개발 중",
    location: "대전, 대한민국",
    links: [
      { label: "GitHub", href: "https://github.com/ding-modding", glyph: "external" },
      { label: "contact@hyunseok.dev", href: "mailto:contact@hyunseok.dev", isEmail: true },
      { label: "이력서 PDF", href: "/resume-ko.pdf", glyph: "download" },
    ],
  },
  sectionLabels: {
    experience: "경력 — 배포 로그",
    projects: "프로젝트 — 운영 상태",
    research: "연구 — 디지털 인문학",
    skills: "기술",
    education: "학력",
    awards: "수상 경력",
    openSource: "오픈소스",
    contact: "연락",
  },
  experience: [
    {
      period: "2025.12 — 2026.03",
      role: "Research Intern",
      org: "KIXLAB — KAIST Interaction Lab",
      note: "빠른 영상 시청에 어려움을 겪는 사용자(경계선 지능 등)를 위한 영상 접근성 향상 연구. 영상 속도를 사용자에 맞춰 adaptive하게 편집하는 프로토타입을 직접 설계·구현하고, AI 영상 편집 모델을 실험·튜닝.",
      footnote: "KAIST Interaction Lab (PI: Juho Kim) · 멘토 Seungju Kim",
    },
    {
      period: "2024.08 — present",
      role: "PM & Lead Developer",
      org: "Mad on — Timeschool",
      note: "야간자율학습 관리 웹 플랫폼 Timeschool 개발·운영. 인천진산과학고와 서비스 계약 체결, 3년째 운영. Node.js 백엔드 리드, React/Vite 프론트엔드. 매 학기 사용자 피드백 기반 개선.",
    },
  ],
  log: logPosts,
  research: researchProjects,
  projects: [
    {
      id: "teamplo",
      name: "Teamplo",
      status: "BETA",
      statusNote: "FOUNDER",
      summary:
        "회의록·할 일·캘린더가 막힘없이 맞물리는 팀플 협업 도구. 팀 전체도, 각자 할 일도 한눈에.",
      url: "https://teamplo.com",
      tech: ["Next.js", "PostgreSQL", "Yjs", "CodeMirror 6"],
      logHref: "/log/teamplo-5-weeks",
      detail: {
        problem:
          "팀플 업무는 카카오톡 단톡방에 흩어짐. 회의가 끝나면 업무 분배가 메시지로 올라가지만, 누가 무엇을 맡았는지는 거슬러 올라가야 알 수 있음. 무엇보다 팀의 병목이 한눈에 보이지 않음.",
        built:
          "처음엔 개인 To-do 앱. KAIST·성균관·고려대·POSTECH 재학생 P0 인터뷰 후 팀의 진행이 한눈에 보이는 협업 도구로 피벗. 7주에 v0→v3→v4를 빌드하며 자체 merge 로직을 Yjs CRDT로 교체하고 편집기를 CodeMirror 6로 마이그레이션. 개발 전 과정에 Claude Code 활용.",
      },
    },
    {
      id: "timeschool",
      name: "Timeschool",
      status: "LIVE",
      statusNote: "3년 운영",
      summary: "야간자율학습 관리 플랫폼. 과학고와 계약해 3년째 운영. 창업·리드 개발.",
      url: "https://jinsan.timeschool.kr",
      tech: ["Node.js", "React", "Vite"],
      detail: {
        problem:
          "야간자율학습 관리는 출결·좌석·이동 신청이 종이와 구두로 처리되어 학생과 교사 모두에게 번거로움.",
        built:
          "야간자율학습 관리 웹 플랫폼을 만들어 인천진산과학고와 서비스 계약 체결, 3년째 운영 중. 창업하고 리드 개발 담당.",
      },
    },
    {
      id: "matcha",
      name: "MatchA",
      status: "BETA",
      statusNote: "CORE DEV",
      summary: "단체 일정 관리 — 그룹 캘린더 + 일정 조율. 핵심 개발자.",
      url: "https://matchall.co.kr",
      tech: ["Next.js", "Vercel"],
      logHref: "/log/matcha-4-months",
      detail: {
        problem:
          "여러 모임에 속하면 그룹마다 일정 조율 도구가 흩어짐. 그룹·캘린더를 한곳에서 정리하고 약속을 잡을 방법이 필요함.",
        built:
          "워크스페이스에서 그룹·캘린더를 폴더처럼 정리하고, 시간투표·When2Meet 방식으로 일정을 조율하는 단체 일정 관리 서비스. 핵심 개발자로 참여.",
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
      note: "GPA 3.96 / 4.3 (82학점) · Dean's List (1·2학기)",
    },
    {
      institution: "인천진산과학고등학교",
      period: "2022.03 — 2024.02",
      note: "조기졸업",
    },
  ],
  awards: [
    {
      label: "Competitive Programming",
      entries: [
        { year: "2025", title: "NYPC Code Battle — 상위 4.87%" },
        { year: "2023", title: "한국정보올림피아드(KOI) 은상 — 전국 12위 (고등부)" },
        { year: "2022", title: "한국정보올림피아드(KOI) 동상 (고등부)" },
      ],
    },
    {
      label: "Honors & Scholarships",
      entries: [
        { year: "2024", title: "KAIST 총장상" },
        { year: "2024", title: "KAIST Presidential Fellowship (KPF) — 장학" },
        { year: "2023", title: "ICT 어워드 코리아 — 대상" },
        { year: "2022", title: "창의적 문제해결(CPS) 페스티벌 — 대상" },
        { year: "2023", title: "인천과학전람회 — 수상 (전동킥보드 자세·안정성 딥러닝 연구)" },
      ],
    },
  ],
  openSource: [
    {
      name: "gbrain",
      repoUrl: "https://github.com/garrytan/gbrain",
      stars: "17.8k★",
      contribution:
        "OAuth public-client(PKCE / RFC 7591) 호환성 수정. v0.34.1.0에 머지.",
      prUrl: "https://github.com/garrytan/gbrain/pull/996",
      prLabel: "PR #996",
    },
  ],
  contact: {
    email: "contact@hyunseok.dev",
    github: { label: "github.com/ding-modding", href: "https://github.com/ding-modding" },
    resumeHref: "/resume-ko.pdf",
  },
  footer: "© 2026 Hyunseok Hong · built with Next.js",
  ui: {
    allProjects: "프로젝트 전체 보기",
    problemHeading: "문제",
    builtHeading: "만든 것",
    techHeading: "기술 스택",
    visitLabel: "사이트 방문",
    backHome: "CV로 돌아가기",
    projectsIntro:
      "프로젝트별 문제 정의 · 만든 것 · 기술 스택 · 링크.",
    langToggleLabel: "언어 전환",
    themeToggleLabel: "테마 전환",
    logTitle: "개발 일지",
    logIntro: "제품을 만들며 남긴 날짜별 기록.",
    backLog: "일지",
    devLog: "개발 일지",
    allResearch: "연구 전체 보기",
    researchTitle: "연구",
    researchIntro: "디지털 인문학 연구 — 발표 자료와 결과 분석.",
    backResearch: "연구",
    viewPresentation: "발표 자료",
    viewSource: "소스 (GitHub)",
    methodsHeading: "방법",
  },
};
