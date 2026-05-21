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
    date: "2026-05-19",
    summary:
      "개인 todo PWA에서 팀 중심 v3, 그리고 v4 캘린더까지 — 5주 개발 일지.",
    meta: "기간: 2026-04-13 → 2026-05-19 · 약 5주",
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
        heading: "5기 — 도그푸드 & v4 (5/11~5/19)",
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
        ],
      },
    ],
    diagram: `v0 PWA ──피벗──▶ 팀플로 v3 ──인프라 교체──▶ 도그푸드 ──▶ v4 캘린더
개인 todo       팀 중심        Yjs + CM6       회고        팀원 가시성`,
    closing: [
      "현재: v4 캘린더 라이브. 다음은 규칙 기반 알림 + 첫 유료 기능. 카카오 봇은 파트너십 심사 대기.",
      "5주 내내 Claude Code로 백엔드·프론트·OAuth·실시간을 병렬로 풀었다.",
    ],
  },
];

/** Look up a single post by slug, or undefined if none matches. */
export function getLogPost(slug: string): LogPost | undefined {
  return logPosts.find((post) => post.slug === slug);
}
