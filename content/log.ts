import type { LogPost } from "./types";

/**
 * Dev-log posts, newest first.
 *
 * Post bodies are authored in Korean and are intentionally language-agnostic:
 * this is a Korean dev log, so the body renders as-is in both KO and EN modes.
 * Only the surrounding /log chrome (headings, labels, dates) is bilingual,
 * via the language-specific content files.
 *
 * To add a post: prepend a new LogPost to this array. The /log list page and
 * the post pages both read from here.
 */
export const logPosts: LogPost[] = [
  {
    slug: "teamplo-5-weeks",
    title: "팀플로 / Teamplo — 개발 일지",
    date: "2026-05-23",
    summary:
      "개인 todo PWA에서 팀 중심 v3, 그리고 v4 캘린더까지 — 6주 개발 일지.",
    meta: "기간: 2026-04-13 → 2026-05-23 · 약 6주",
    phases: [
      {
        heading: "1기 — v0 PWA (4/13~4/17)",
        intro:
          '처음 이름은 BestSimpleTodo. "회의록을 붙여넣으면 할 일이 자동 추출되는 PWA" 컨셉으로 시작.',
        bullets: [
          { date: "4/13", text: "마스터 설계 문서, 첫 엔지니어링 리뷰" },
          {
            date: "4/14",
            text: "v0 스캐폴드(Next.js 16 + Supabase). 하루 만에 DB 스키마·실시간 에디터·회의록 파서·OAuth·대시보드·공유·PWA·디자인 시스템까지",
          },
          {
            date: "4/15",
            text: "접근 권한 모델, 공유 모달, 실시간 충돌 수정, 한글 폰트",
          },
          {
            date: "4/16~17",
            text: "디자인·로고 폴리시. KAIST·성균관·고려대·POSTECH 재학생 P0 인터뷰",
          },
        ],
      },
      {
        heading: "2기 — 전략적 피벗 (4/19~4/20)",
        intro:
          'P0 인터뷰로 방향이 크게 바뀜. "개인 todo 앱" → "팀의 병목을 드러내는 도구"(member-first → team-first).',
        bullets: [
          { text: "제품명 확정: 팀플로 / Teamplo, 도메인 확보" },
          { text: "경쟁 분석, 설계 문서 재편" },
        ],
      },
      {
        heading: "3기 — v3 본 제품 빌드 (4/21~4/27)",
        intro: "가장 밀도 높은 구간. 클린 슬레이트로 v3를 다시 지음.",
        bullets: [
          {
            date: "4/21",
            text: "clean-slate 마이그레이션, 파서 재작성, API·UI·OAuth·실시간 병렬 빌드",
          },
          {
            date: "4/22",
            text: "라이브 디자인 리뷰에서 팀 페이지 스펙 누락 발견 → 복구",
          },
          {
            date: "4/24",
            text: "팀 페이지 리팩터: 개인 대시보드 재설계, 팀 스코프 라우트, E2E 인프라",
          },
          {
            date: "4/25",
            text: "모바일 도그푸드: 직접 폰으로 사용, 피드백 9건을 PR로 반영",
          },
          { date: "4/26~27", text: "초대/나가기, 초대 링크" },
        ],
      },
      {
        heading: "4기 — 인프라 재작성 (4/28~5/1)",
        intro: "",
        bullets: [
          {
            date: "4/28",
            text: "Yjs CRDT 마이그레이션: 직접 만든 merge 로직을 Y.Doc으로 교체",
          },
          {
            date: "4/29",
            text: "CodeMirror 6 에디터 마이그레이션: textarea → CM6 + y-codemirror. 한국어 IME 버그와 긴 사투",
          },
          {
            date: "4/30~5/1",
            text: "마크다운 하이라이트, 클릭 가능한 하이퍼링크, 카카오톡 웹뷰 대응",
          },
          { text: "카카오 봇 연동은 파트너십 심사 전까지 보류" },
        ],
      },
      {
        heading: "5기 — 도그푸드 & v4 (5/11~5/23)",
        intro: "",
        bullets: [
          {
            date: "5/11",
            text: '도그푸드 회고, v4 계획. 핵심 인사이트: 실패 모드는 "리마인더 전달"이 아니라 "팀원 쪽 가시성"',
          },
          { date: "5/12~13", text: "캘린더 뷰 출시" },
          { date: "5/15~16", text: "캘린더·디자인 폴리시" },
          {
            date: "5/19",
            text: "에디터 폰트 합자 비활성화 (`->` `=>`에서 커서 어긋남 수정)",
          },
          {
            date: "5/22",
            text: "네비게이션 지연 버그 수정 — router.refresh()가 도는 동안 화면 이동이 멈추던 문제. 휘발성 데이터를 GET 라우트 핸들러로 옮겨 해결",
          },
          {
            date: "5/23",
            text: "뒤로가기 시 이전 페이지 내용이 잠깐 보이던 문제 수정",
          },
        ],
      },
    ],
    diagram: `v0 PWA ──피벗──▶ 팀플로 v3 ──인프라 교체──▶ 도그푸드 ──▶ v4 캘린더
개인 todo       팀 중심        Yjs + CM6       회고        팀원 가시성`,
    closing: [
      "현재: v4 캘린더 라이브. 다음은 규칙 기반 알림 + 첫 유료 기능. 카카오 봇은 파트너십 심사 대기.",
      "6주 내내 Claude Code로 백엔드·프론트·OAuth·실시간을 병렬로 풀었다.",
    ],
  },
  {
    slug: "matcha-4-months",
    title: "MatchA — 개발 일지",
    date: "2026-05-23",
    summary:
      "워크스페이스 기반 협업 캘린더. 자체 VM에서 Vercel + Supabase 서버리스로 — 4개월 개발 일지.",
    meta: "기간: 2026-01-19 → 2026-05-23 · 약 4개월",
    phases: [
      {
        heading: "1기 — 기반 재시작 (1/19~1/30)",
        intro:
          'Feature-Sliced Design 아키텍처로 클린 슬레이트 재시작("rezero").',
        bullets: [
          { date: "1/19", text: "프로젝트 시작" },
          {
            date: "1/26~27",
            text: "FSD 레이어 구조 도입, 클린 슬레이트 재작성",
          },
          {
            date: "1/30",
            text: "tRPC·Drizzle·인증·DB 스키마 셋업, 로그인/회원가입",
          },
        ],
      },
      {
        heading: "2기 — 워크스페이스 & 캘린더 골격 (2월)",
        intro: "계층형 워크스페이스와 캘린더 트리를 세운 구간.",
        bullets: [
          {
            date: "2/5~9",
            text: "DB 스키마, 캘린더·일정(promise), 소켓 기반 실시간",
          },
          { date: "2/15~16", text: "드래그로 일정 생성, 반복 일정(RRULE)" },
          {
            date: "2/19~23",
            text: "FSD 리팩터, 워크스페이스 사이드바, 그룹·멤버 권한, 초대. 폴더/캘린더 재귀 트리 + 상위 폴더 일정의 하위 전파",
          },
        ],
      },
      {
        heading: "3기 — 일정 조율 & 외부 연동 (3월~4월 초)",
        intro: "",
        bullets: [
          { date: "3월", text: "권한·캐싱, UI/UX 개선" },
          {
            date: "4/7~8",
            text: "When2Meet·시간투표 일정 조율, 게스트 모드(비로그인 참여), Google 캘린더 연동, 모바일/태블릿 인터랙션",
          },
          { date: "4/9", text: "동일 계정 다중 WebSocket 연결 충돌 수정" },
        ],
      },
      {
        heading: "4기 — 자체 배포 (4월 초)",
        intro: "",
        bullets: [
          {
            date: "4/5~6",
            text: "Rocky Linux 배포 스크립트, standalone 빌드. 가비아 VM에 Docker PostgreSQL + 자체 WebSocket 서버 + Better Auth로 운영",
          },
        ],
      },
      {
        heading: "5기 — Vercel + Supabase 마이그레이션 (5/21~5/23)",
        intro:
          "상주 프로세스에 의존하던 자체 VM 구성을 서버리스로 옮기며 실시간·인증 계층을 통째로 재작성.",
        bullets: [
          {
            date: "5/21",
            text: "ESLint flat config 전환, DB를 Supabase 풀러로, 자체 WS 서버 삭제 → Supabase Realtime Broadcast, 백그라운드 작업을 Next 16 after()로",
          },
          {
            date: "5/22",
            text: "Better Auth → Supabase Auth 전면 마이그레이션, Vercel 함수 서울 리전 고정, 게스트 제출 인증 강화, 프로덕션 배포",
          },
          {
            date: "5/23",
            text: "v0.2.0 — Google Calendar OAuth 보안 재작성, refresh token AES-256-GCM 암호화",
          },
          {
            date: "5/23",
            text: "릴리스 직후 정리 — 게스트 조율 뷰에서 비공개 설정인데도 중간 결과가 보이던 버그 수정, 비로그인 게스트 데이터 pg_cron 일일 정리 잡, ESLint 잔여 위반 일괄 정리",
          },
        ],
      },
    ],
    diagram: `워크스페이스 트리 ──▶ 일정 조율 ──▶ 외부 캘린더 ──인프라 이전──▶ Vercel + Supabase
계층형 캘린더       When2Meet    Google 양방향    자체 VM → 서버리스`,
    closing: [
      "현재: Vercel + Supabase로 이전 완료, v0.2.0 배포. 베타 운영 중.",
      "상주 WebSocket 서버와 배포 스크립트에 묶여 있던 구조를 서버리스로 걷어내며, 실시간과 인증을 관리형 서비스 위에 다시 올렸다.",
    ],
  },
];

/** Look up a single post by slug, or undefined if none matches. */
export function getLogPost(slug: string): LogPost | undefined {
  return logPosts.find((post) => post.slug === slug);
}
