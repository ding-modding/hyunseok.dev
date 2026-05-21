# Site Content — hyunseok.dev (locked)

The exact bilingual content for the site. Build `content/ko.ts` and `content/en.ts`
from this, both implementing one shared `CVContent` type in `content/types.ts`.

TBD items are marked — leave a sensible placeholder and the build report flags them.

## Profile / Hero

| field | KO | EN |
|---|---|---|
| name | Hyunseok Hong | Hyunseok Hong |
| identity | KAIST 전산학부 학부생. 실제 사용자가 쓰는 제품을 만듭니다. | KAIST CS undergraduate. I build products that real people use. |
| now line | 현재 — Teamplo·MatchA 개발 중 | Now — building Teamplo & MatchA |
| location | 대전, 대한민국 | Daejeon, South Korea |

Links: GitHub `https://github.com/ding-modding` · Email `contact@hyunseok.dev`
(set up later via Cloudflare Email Routing) · Résumé PDF `/resume.pdf`
(TBD — user drops the file into `public/`). LinkedIn: TBD — omit if no URL.

## About

- **KO:** KAIST 전산학부 재학 중입니다. 정보올림피아드 경시로 시작했지만, 지금 관심은 실제 사용자가 쓰는 제품을 만드는 데 있습니다. 고등학교 때 만든 Timeschool은 학교와 계약을 맺고 3년째 운영 중입니다. 이 경험에서 HCI에 관심이 생겨 KIXLAB 연구 인턴으로 이어졌습니다.
- **EN:** I am a Computer Science undergraduate at KAIST. I came up through competitive programming, but what I care about now is building products people actually use. Timeschool, which I built in high school, has run under a school contract for three years. That experience pulled me toward HCI and led to a research internship at KIXLAB.

## Experience (deploy log — newest first)

### 1. KIXLAB — Research Intern · 2025.12 – 2026.03
- org KO: KIXLAB — KAIST Interaction Lab · org EN: KIXLAB — KAIST Interaction Lab
- KO: 빠른 영상 시청에 어려움을 겪는 사용자(경계선 지능 등)를 위한 영상 접근성 향상 연구. 영상 속도를 사용자에 맞춰 adaptive하게 편집하는 프로토타입을 직접 설계·구현하고, AI 영상 편집 모델을 실험·튜닝.
- EN: Researched video accessibility for viewers who struggle with fast-paced content (e.g. borderline intellectual functioning). Designed and built a prototype that adaptively edits video pacing per viewer; experimented with and fine-tuned AI video-editing models.
- footnote KO: KAIST Interaction Lab (PI: Juho Kim) · 멘토 Seungju Kim
- footnote EN: KAIST Interaction Lab (PI: Juho Kim) · mentored by Seungju Kim

### 2. Mad on — Timeschool · PM & Lead Developer · 2024.08 – present
- KO: 야간자율학습 관리 웹 플랫폼 Timeschool 개발·운영. 인천진산과학고와 서비스 계약 체결, 3년째 운영. Node.js 백엔드 리드, React/Vite 프론트엔드. 매 학기 사용자 피드백 기반 개선.
- EN: Built and operate Timeschool, a night-study management web platform. Signed a service contract with Incheon Jinsan Science High School; running 3 years. Led the Node.js backend and contributed the React/Vite frontend; iterated each semester on user feedback.

## Projects (status rows)

### Teamplo — status: BETA · founder · teamplo.com
- KO: 단톡방의 팀플 업무 분배를 개인 To-do 대시보드로. 카카오톡 단톡방에 흩어지는 업무를 각자의 '오늘 할 일'로 정리. 카카오 봇 + 웹.
- EN: Turns a group-chat meeting into a personal to-do list. Captures the task assignments that flow through a Korean university team's KakaoTalk chat and surfaces each person's slice as a private dashboard. Kakao bot + web.
- tech: Next.js, Vercel, Postgres

### Timeschool — status: LIVE · 3년 운영 · jinsan.timeschool.kr
- KO: 야간자율학습 관리 플랫폼. 과학고와 계약해 3년째 운영. 창업·리드 개발.
- EN: Night-study management platform, contracted to a science high school and running 3 years. Founder and lead developer.
- tech: Node.js, React, Vite

### MatchA — status: IN DEV · core developer · matchall.co.kr
- KO: 단체 일정 관리. 워크스페이스에서 그룹·캘린더를 폴더처럼 정리하고, 시간투표·When2Meet으로 일정을 조율.
- EN: Group scheduling. A workspace that organizes groups and calendars like folders, with time-voting and When2Meet-style coordination.
- tech: React, Next.js (TBD — confirm with user)

The `/projects` subpage expands each project: problem → what was built → tech → links.

## Skills

- Languages: C, C++, C#, Python, Java, TypeScript, JavaScript, HTML/CSS
- Frameworks: React, Next.js, Node.js, Tailwind CSS, PyTorch
- Workflow: AI-assisted development (Claude Code, Codex)

## Education

- **KAIST, School of Computing** · 2024.02 – present · GPA 3.96 / 4.3 (82 credits) · Dean's List
- **Incheon Jinsan Science High School** · early graduation · 2022.03 – 2024.02

## Honors & Awards (two groups, each a timestamped log)

### Group A — Competitive Programming
- 2023 — Korean Olympiad in Informatics (KOI), Silver — national 12th (40th, high-school division)
- 2022 — Korean Olympiad in Informatics (KOI), Bronze (39th, high-school division)
- 2025 — NYPC Code Battle — top 4.87%

### Group B — Honors & Scholarships
- 2024 — KAIST President's Award
- 2024 — KAIST Presidential Fellowship (KPF) — scholarship
- 2023 — ICT Award Korea — Grand Prize
- 2022 — CPS (Creative Problem Solving) Festival — Grand Prize
- Incheon Science Exhibition — award (e-scooter posture/stability deep-learning study)

## Open Source

- **gbrain** (`github.com/garrytan/gbrain`, 17.8k★) — OAuth public-client (PKCE / RFC 7591) compatibility fix. Merged in v0.34.1.0. Link to PR #996 (`https://github.com/garrytan/gbrain/pull/996`), NOT #909 (which still shows "Open").

## Contact

- Email: `contact@hyunseok.dev`  ·  GitHub: `github.com/ding-modding`  ·  Résumé PDF: `/resume.pdf`
- LinkedIn: TBD (omit if no URL)
- Footer: © 2026 Hyunseok Hong · built with Next.js
