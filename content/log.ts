import type { LogPost } from "./types";
import type { Language } from "@/lib/i18n";
import type { LocalizedText } from "./types";

/**
 * Dev-log posts, newest first.
 *
 * Prose fields are bilingual ({ ko, en }) and resolve to the active site
 * language at render time. Structural fields (slug, date, and most bullet
 * dates) are shared so the two languages never drift in shape.
 *
 * To add a post: prepend a new LogPost to this array. The /log list page and
 * the post pages both read from here.
 */
export const logPosts: LogPost[] = [
  {
    slug: "teamplo-5-weeks",
    title: { ko: "팀플로 / Teamplo — 개발 일지", en: "Teamplo — Dev Log" },
    date: "2026-06-23",
    summary: {
      ko: "개인 todo PWA에서 팀 중심 v3, v4 캘린더, 그리고 팀 허브·공유 링크까지 — 10주 개발 일지.",
      en: "From a personal to-do PWA to a team-first v3, a v4 calendar, then a team hub and share links — a 10-week dev log.",
    },
    meta: {
      ko: "기간: 2026-04-13 → 2026-06-23 · 약 10주",
      en: "Span: 2026-04-13 → 2026-06-23 · ~10 weeks",
    },
    phases: [
      {
        heading: {
          ko: "1기 — v0 PWA (4/13~4/17)",
          en: "Phase 1 — v0 PWA (4/13–4/17)",
        },
        intro: {
          ko: '처음 이름은 BestSimpleTodo. "회의록을 붙여넣으면 할 일이 자동 추출되는 PWA" 컨셉으로 시작.',
          en: 'Originally named BestSimpleTodo. Started on one concept: "a PWA that auto-extracts tasks the moment you paste in meeting notes."',
        },
        bullets: [
          {
            date: "4/13",
            text: {
              ko: "마스터 설계 문서, 첫 엔지니어링 리뷰",
              en: "Master design doc, first engineering review",
            },
          },
          {
            date: "4/14",
            text: {
              ko: "v0 스캐폴드(Next.js 16 + Supabase). 하루 만에 DB 스키마·실시간 에디터·회의록 파서·OAuth·대시보드·공유·PWA·디자인 시스템까지",
              en: "v0 scaffold (Next.js 16 + Supabase). In a single day: DB schema, real-time editor, meeting-notes parser, OAuth, dashboard, sharing, PWA, and a design system",
            },
          },
          {
            date: "4/15",
            text: {
              ko: "접근 권한 모델, 공유 모달, 실시간 충돌 수정, 한글 폰트",
              en: "Access-permission model, share modal, real-time conflict fixes, Korean fonts",
            },
          },
          {
            date: "4/16~17",
            text: {
              ko: "디자인·로고 폴리시. KAIST·성균관·고려대·POSTECH 재학생 P0 인터뷰",
              en: "Design and logo polish. P0 interviews with students at KAIST, SKKU, Korea University, and POSTECH",
            },
          },
        ],
      },
      {
        heading: {
          ko: "2기 — 전략적 피벗 (4/19~4/20)",
          en: "Phase 2 — Strategic pivot (4/19–4/20)",
        },
        intro: {
          ko: 'P0 인터뷰로 방향이 크게 바뀜. "개인 todo 앱" → "팀의 병목을 드러내는 도구"(member-first → team-first).',
          en: 'The P0 interviews shifted direction sharply: from "a personal to-do app" to "a tool that surfaces a team\'s bottlenecks" (member-first → team-first).',
        },
        bullets: [
          {
            text: {
              ko: "제품명 확정: 팀플로 / Teamplo, 도메인 확보",
              en: "Product name locked in — Teamplo; domain secured",
            },
          },
          {
            text: {
              ko: "경쟁 분석, 설계 문서 재편",
              en: "Competitive analysis; design docs reorganized",
            },
          },
        ],
      },
      {
        heading: {
          ko: "3기 — v3 본 제품 빌드 (4/21~4/27)",
          en: "Phase 3 — Building the real v3 product (4/21–4/27)",
        },
        intro: {
          ko: "가장 밀도 높은 구간. 클린 슬레이트로 v3를 다시 지음.",
          en: "The densest stretch. Rebuilt v3 from a clean slate.",
        },
        bullets: [
          {
            date: "4/21",
            text: {
              ko: "clean-slate 마이그레이션, 파서 재작성, API·UI·OAuth·실시간 병렬 빌드",
              en: "Clean-slate migration, parser rewrite, parallel build of API, UI, OAuth, and real-time",
            },
          },
          {
            date: "4/22",
            text: {
              ko: "라이브 디자인 리뷰에서 팀 페이지 스펙 누락 발견 → 복구",
              en: "Live design review caught a missing team-page spec → recovered",
            },
          },
          {
            date: "4/24",
            text: {
              ko: "팀 페이지 리팩터: 개인 대시보드 재설계, 팀 스코프 라우트, E2E 인프라",
              en: "Team-page refactor: redesigned personal dashboard, team-scoped routes, E2E infrastructure",
            },
          },
          {
            date: "4/25",
            text: {
              ko: "모바일 도그푸드: 직접 폰으로 사용, 피드백 9건을 PR로 반영",
              en: "Mobile dogfooding: used it on my own phone, turned 9 pieces of feedback into PRs",
            },
          },
          {
            date: "4/26~27",
            text: {
              ko: "초대/나가기, 초대 링크",
              en: "Invite/leave flows, invite links",
            },
          },
        ],
      },
      {
        heading: {
          ko: "4기 — 인프라 재작성 (4/28~5/1)",
          en: "Phase 4 — Infrastructure rewrite (4/28–5/1)",
        },
        intro: { ko: "", en: "" },
        bullets: [
          {
            date: "4/28",
            text: {
              ko: "Yjs CRDT 마이그레이션: 직접 만든 merge 로직을 Y.Doc으로 교체",
              en: "Yjs CRDT migration: replaced hand-rolled merge logic with Y.Doc",
            },
          },
          {
            date: "4/29",
            text: {
              ko: "CodeMirror 6 에디터 마이그레이션: textarea → CM6 + y-codemirror. 한국어 IME 버그와 긴 사투",
              en: "CodeMirror 6 editor migration: textarea → CM6 + y-codemirror. A long fight with Korean IME bugs",
            },
          },
          {
            date: "4/30~5/1",
            text: {
              ko: "마크다운 하이라이트, 클릭 가능한 하이퍼링크, 카카오톡 웹뷰 대응",
              en: "Markdown highlighting, clickable hyperlinks, KakaoTalk web-view support",
            },
          },
          {
            text: {
              ko: "카카오 봇 연동은 파트너십 심사 전까지 보류",
              en: "Kakao bot integration parked until partnership review",
            },
          },
        ],
      },
      {
        heading: {
          ko: "5기 — 도그푸드 & v4 (5/11~6/4)",
          en: "Phase 5 — Dogfooding & v4 (5/11–6/4)",
        },
        intro: { ko: "", en: "" },
        bullets: [
          {
            date: "5/11",
            text: {
              ko: '도그푸드 회고, v4 계획. 핵심 인사이트: 실패 모드는 "리마인더 전달"이 아니라 "팀원 쪽 가시성"',
              en: 'Dogfood retro, v4 plan. Key insight: the failure mode isn\'t "delivering reminders" but "visibility on the teammates\' side"',
            },
          },
          {
            date: "5/12~13",
            text: { ko: "캘린더 뷰 출시", en: "Calendar view shipped" },
          },
          {
            date: "5/15~16",
            text: {
              ko: "캘린더·디자인 폴리시",
              en: "Calendar and design polish",
            },
          },
          {
            date: "5/19",
            text: {
              ko: "에디터 폰트 합자 비활성화 (`->` `=>`에서 커서 어긋남 수정)",
              en: "Disabled editor-font ligatures (fixed cursor drift on `->` and `=>`)",
            },
          },
          {
            date: "5/22",
            text: {
              ko: "네비게이션 지연 버그 수정 — router.refresh()가 도는 동안 화면 이동이 멈추던 문제. 휘발성 데이터를 GET 라우트 핸들러로 옮겨 해결",
              en: "Fixed a navigation-stall bug — screen transitions froze while router.refresh() was running. Solved by moving volatile data into a GET route handler",
            },
          },
          {
            date: "5/23",
            text: {
              ko: "뒤로가기 시 이전 페이지 내용이 잠깐 보이던 문제 수정",
              en: "Fixed stale prior-page content flashing on back-navigation",
            },
          },
          {
            date: "5/24",
            text: {
              ko: "v4 캘린더 Phase 2 드래그 스케줄링 (PR #13). 호버 기기는 행 그립 → 날짜 셀 드롭, 터치는 롱프레스 → DatePickerSheet. 낙관 상태·800ms 슬로우 스피너·2초 TTL 에러 폴백·받침 인식 한국어 날짜 안내까지 단일 훅으로 통합. 단위·E2E 테스트 50건 추가",
              en: "v4 calendar Phase 2 drag-to-schedule (PR #13). Hover devices: row grip → drop on a date cell; touch: long-press → DatePickerSheet. Optimistic state, an 800ms slow-spinner, a 2s-TTL error fallback, and batchim-aware Korean date hints all unified into a single hook. Added 50 unit + E2E tests",
            },
          },
          {
            date: "5/24",
            text: {
              ko: "v3 캘린더를 클라이언트 셸 + GET API로 분리. router.refresh 폴백을 prop catch-up 효과로 교체해 낙관 상태가 refetch 정착까지 유지되도록 정리",
              en: "Split the v3 calendar into a client shell + GET API. Replaced the router.refresh fallback with a prop catch-up effect so optimistic state holds until the refetch settles",
            },
          },
          {
            date: "5/24",
            text: {
              ko: "구조 리팩터 — src/components 평면 33개를 기능별 8 폴더로, 거대 파일 5개를 헬퍼 모듈로 분할. biome 에러·경고 0건, v0 잔재 코드(parser·session·DashboardLive) 제거",
              en: "Structure refactor — flattened 33 files under src/components into 8 feature folders, split 5 giant files into helper modules. Zero biome errors/warnings; removed v0 leftovers (parser, session, DashboardLive)",
            },
          },
          {
            date: "5/28",
            text: {
              ko: "모바일 디자인 폴리시 — /design-review HIGH 8건. 바텀시트·도크 필 safe-area-inset 적용, iOS 포커스 줌 막으려 모바일 입력·셀렉트 16px로 (PR #15)",
              en: "Mobile design polish — 8 HIGH findings from /design-review. Applied safe-area-inset to the bottom sheets and dock pill; bumped mobile inputs/selects to 16px to stop iOS focus-zoom (PR #15)",
            },
          },
          {
            date: "5/28",
            text: {
              ko: "모바일 MEDIUM 후속 — 바텀시트 스와이프 다운 닫기(useSwipeDismiss 훅, 거리 100px·속도 0.5px/ms 임계), 다크모드 도크 필 elevation 복구 (PR #18)",
              en: "Mobile MEDIUM follow-ups — swipe-down-to-dismiss on both bottom sheets (useSwipeDismiss hook, 100px-distance / 0.5px-per-ms-velocity thresholds), restored dark-mode dock-pill elevation (PR #18)",
            },
          },
          {
            date: "6/1",
            text: {
              ko: "v3 에디터·뷰어 팔레트 마이그레이션 — @멘션 칩과 뷰어 체크박스를 앰버로 통일(DESIGN.md amber-only). 모든 표면에서 앰버=배정 신호 일관성 (PR #17)",
              en: "v3 editor/viewer palette migration — unified @-mention chips and viewer checkboxes to amber (DESIGN.md amber-only). Amber = the assignment signal, consistent on every surface (PR #17)",
            },
          },
          {
            date: "6/1",
            text: {
              ko: "태스크 로우 대칭 — 4개 편집 표면 모두에 날짜 피커 노출. /office-hours·eng·design 리뷰로 useDatePicker 훅 시그니처와 오버레이 스택 결정 잠금 (PR #19)",
              en: "Task-row symmetry — exposed the date picker on all 4 edit surfaces. Locked the useDatePicker hook signature and the overlay stack via /office-hours, eng, and design reviews (PR #19)",
            },
          },
          {
            date: "6/3",
            text: {
              ko: '뷰어 단일 줄바꿈을 하드 `<br>`로 렌더(remark-breaks) — 빈 줄 없이 이어 쓴 줄이 한 문단으로 합쳐지던 "엔터가 안 먹던" 버그 수정 (PR #20)',
              en: 'Render single newlines as hard `<br>` in the viewer (remark-breaks) — fixed the "Enter does nothing" bug where lines with no blank line between them merged into one paragraph (PR #20)',
            },
          },
          {
            date: "6/3",
            text: {
              ko: "편집 페이지 데스크톱 할일 레일 접기/펴기 토글 — 폭 확보용 세로 스트립, localStorage 유지, 토글 시 포커스 이전. 레드 테스트 6건 동시 수정 (PR #21)",
              en: "Collapsible 할일 rail on the desktop edit page — a thin vertical strip to reclaim width, persisted to localStorage, focus moves to the replacement control on toggle. Fixed 6 red tests alongside (PR #21)",
            },
          },
          {
            date: "6/4",
            text: {
              ko: "마케팅 홈에 제품 갤러리 — 3개 표면(편집 받아치기·/me 리스트·/me 캘린더)을 조별과제 데모로 정적 목업화. 서버 컴포넌트·클라 JS 0, 라이브 컴포넌트와 클래스 단위로 동기화 (PR #22)",
              en: "Product gallery on the marketing home — three surfaces (editor reply, /me list, /me calendar) recreated as static mockups from a group-project demo. Server components, zero client JS, synced class-for-class with the live components (PR #22)",
            },
          },
        ],
      },
      {
        heading: {
          ko: "6기 — 팀 허브 & 공유 링크 (6/5~6/23)",
          en: "Phase 6 — Team hub & share links (6/5–6/23)",
        },
        intro: {
          ko: "v4 런치패드 라인 — 흩어진 팀 자원을 좌측 레일 하나로 모으고, 팀 바깥 사람도 볼 수 있는 공유 링크까지 열었다.",
          en: "The v4 launchpad line — gathering scattered team resources into a single left rail, then opening it up with share links anyone outside the team can view.",
        },
        bullets: [
          {
            date: "6/5",
            text: {
              ko: "교차팀 캘린더에서 각 팀 캘린더로 바로 가는 범례 링크, Ctrl+Space/Ctrl+Enter로 새 할 일 줄을 넣고 @배정까지 한 흐름으로 (PR #23)",
              en: "Legend links from the cross-team calendar straight into each team's calendar; Ctrl+Space/Ctrl+Enter to drop in a new task line and @-assign in one flow (PR #23)",
            },
          },
          {
            date: "6/9",
            text: {
              ko: "/me 리스트 전면 리디자인 — 세로 팀 네비(전체·개인·팀)로 전환, 모바일은 공용 바텀시트. v4.1 (PR #24)",
              en: "/me list redesign — switched to a vertical team nav (all / personal / teams); a shared bottom sheet on mobile. v4.1 (PR #24)",
            },
          },
          {
            date: "6/18",
            text: {
              ko: "Track A 팀 허브 런치패드 — 좌측 레일에 고정 링크(team_links)·캘린더·페이지 네비, 모바일 드로어, 806px 중앙 정렬 에디터, 링크 CRUD, DnD 재정렬, 링크·할일 실시간 동기화, 게스트 읽기 전용까지. v4.2 (PR #26)",
              en: "Track A team-hub launchpad — pinned links (team_links), calendar, and page nav in a left rail; mobile drawer; an 806px centered editor; link CRUD; drag-to-reorder; realtime link/task sync; read-only for guests. v4.2 (PR #26)",
            },
          },
          {
            date: "6/18",
            text: {
              ko: "Track B 익명 보기 전용 공유 링크 — access_grants + resolveGrant 초크포인트, /view/<slug>/<token>에서 멤버 화면을 그대로 읽기 전용으로 재사용, 실시간 반영·발급·회수. v4.3 (PR #27)",
              en: "Track B anonymous view-only share link — access_grants + a resolveGrant chokepoint, /view/<slug>/<token> reusing the member chrome read-only, live updates, mint/revoke. v4.3 (PR #27)",
            },
          },
          {
            date: "6/23",
            text: {
              ko: "디자인 폴리시 일괄 — 편집↔뷰 스크롤 동기화, 뷰어 체크박스·마감일 정규화, 마감 태그를 레일·캘린더·리스트에서 (D-5, 06/20)로 통일, 날짜 피커 배치 보정. v4.3.1 (PR #29)",
              en: "Design-polish batch — edit↔view scroll sync, normalized viewer checkboxes/due dates, unified the due tag to (D-5, 06/20) across rail, calendar, and list, fixed date-picker placement. v4.3.1 (PR #29)",
            },
          },
          {
            date: "6/23",
            text: {
              ko: "게스트 보기 레일이 created_at이 아니라 멤버가 정한 드래그 순서를 따르도록 수정 — 공유 링크가 출시 후 줄곧 페이지 순서를 잘못 보여주던 버그. v4.3.2 (PR #28)",
              en: "Fixed the guest view rail to follow the members' drag order instead of created_at — the share link had shown the wrong page order since launch. v4.3.2 (PR #28)",
            },
          },
          {
            date: "6/23",
            text: {
              ko: "편집 페이지 폴리시 — 넓은 좌우 거터, 본문 폰트 mono→Pretendard(체크박스는 열 정렬 위해 mono 유지), 보조 동작을 더보기(⋯) 메뉴로, 할 일 행에 우측 날짜 칩 하나로 통일. v4.3.3 (PR #30)",
              en: "Edit-page polish — wider gutters, body font mono→Pretendard (checkboxes stay mono so columns align), secondary actions folded into a 더보기 (⋯) menu, one right-edge date chip per task row. v4.3.3 (PR #30)",
            },
          },
          {
            date: "6/23",
            text: {
              ko: "보기 전용 링크 재확인 — 발급 토큰을 저장해 공유 모달을 다시 열면 같은 링크를 다시 보여줌(멤버 전용). v4.4 (PR #31)",
              en: "Re-showable view-only link — store the issued token so the share modal can show the same link again on reopen (member-only). v4.4 (PR #31)",
            },
          },
        ],
      },
    ],
    diagram: {
      ko: `v0 PWA ──피벗──▶ 팀플로 v3 ──인프라 교체──▶ v4 캘린더 ──▶ 팀 허브·공유 링크
개인 todo       팀 중심        Yjs + CM6       팀원 가시성     런치패드·보기 전용`,
      en: `v0 PWA ──pivot──▶ Teamplo v3 ──infra swap──▶ v4 calendar ──▶ team hub · share links
personal todo     team-first      Yjs + CM6      teammate view    launchpad · view-only`,
    },
    closing: [
      {
        ko: "현재: 팀 허브 런치패드(고정 링크·DnD·실시간)와 익명 보기 전용 공유 링크까지 라이브. 다음은 공유 링크 Phase 2(편집 권한·카카오 포스팅·MCP 쓰기)와 규칙 기반 알림. 카카오 봇은 파트너십 심사 대기.",
        en: "Now: the team-hub launchpad (pinned links, drag-reorder, realtime) and an anonymous view-only share link are live. Next: share-link Phase 2 (edit grants, Kakao posting, MCP write) and rule-based notifications. The Kakao bot is awaiting partnership review.",
      },
      {
        ko: "10주 내내 Claude Code로 백엔드·프론트·OAuth·실시간을 병렬로 풀었다.",
        en: "For all 10 weeks, I worked backend, frontend, OAuth, and real-time in parallel with Claude Code.",
      },
    ],
  },
  {
    slug: "matcha-4-months",
    title: { ko: "MatchA — 개발 일지", en: "MatchA — Dev Log" },
    date: "2026-05-24",
    summary: {
      ko: "워크스페이스 기반 협업 캘린더. 자체 VM에서 Vercel + Supabase 서버리스로 — 4개월 개발 일지.",
      en: "A workspace-based collaborative calendar. From a self-hosted VM to Vercel + Supabase serverless — a 4-month dev log.",
    },
    meta: {
      ko: "기간: 2026-01-19 → 2026-05-24 · 약 4개월",
      en: "Span: 2026-01-19 → 2026-05-24 · ~4 months",
    },
    phases: [
      {
        heading: {
          ko: "1기 — 기반 재시작 (1/19~1/30)",
          en: "Phase 1 — Foundation restart (1/19–1/30)",
        },
        intro: {
          ko: 'Feature-Sliced Design 아키텍처로 클린 슬레이트 재시작("rezero").',
          en: 'Clean-slate restart on a Feature-Sliced Design architecture ("rezero").',
        },
        bullets: [
          {
            date: "1/19",
            text: { ko: "프로젝트 시작", en: "Project kickoff" },
          },
          {
            date: "1/26~27",
            text: {
              ko: "FSD 레이어 구조 도입, 클린 슬레이트 재작성",
              en: "Introduced the FSD layer structure; clean-slate rewrite",
            },
          },
          {
            date: "1/30",
            text: {
              ko: "tRPC·Drizzle·인증·DB 스키마 셋업, 로그인/회원가입",
              en: "tRPC, Drizzle, auth, and DB-schema setup; login/signup",
            },
          },
        ],
      },
      {
        heading: {
          ko: "2기 — 워크스페이스 & 캘린더 골격 (2월)",
          en: "Phase 2 — Workspace & calendar skeleton (February)",
        },
        intro: {
          ko: "계층형 워크스페이스와 캘린더 트리를 세운 구간.",
          en: "The stretch where the hierarchical workspace and calendar tree took shape.",
        },
        bullets: [
          {
            date: "2/5~9",
            text: {
              ko: "DB 스키마, 캘린더·일정(promise), 소켓 기반 실시간",
              en: "DB schema, calendars and events (promises), socket-based real-time",
            },
          },
          {
            date: "2/15~16",
            text: {
              ko: "드래그로 일정 생성, 반복 일정(RRULE)",
              en: "Drag-to-create events, recurring events (RRULE)",
            },
          },
          {
            date: "2/19~23",
            text: {
              ko: "FSD 리팩터, 워크스페이스 사이드바, 그룹·멤버 권한, 초대. 폴더/캘린더 재귀 트리 + 상위 폴더 일정의 하위 전파",
              en: "FSD refactor, workspace sidebar, group/member permissions, invites. Recursive folder/calendar tree + propagation of parent-folder events down to children",
            },
          },
        ],
      },
      {
        heading: {
          ko: "3기 — 일정 조율 & 외부 연동 (3월~4월 초)",
          en: "Phase 3 — Scheduling & external integrations (March–early April)",
        },
        intro: { ko: "", en: "" },
        bullets: [
          {
            date: { ko: "3월", en: "Mar" },
            text: {
              ko: "권한·캐싱, UI/UX 개선",
              en: "Permissions and caching, UI/UX improvements",
            },
          },
          {
            date: "4/7~8",
            text: {
              ko: "When2Meet·시간투표 일정 조율, 게스트 모드(비로그인 참여), Google 캘린더 연동, 모바일/태블릿 인터랙션",
              en: "When2Meet / time-poll scheduling, guest mode (participate without login), Google Calendar integration, mobile/tablet interactions",
            },
          },
          {
            date: "4/9",
            text: {
              ko: "동일 계정 다중 WebSocket 연결 충돌 수정",
              en: "Fixed a conflict from multiple WebSocket connections on the same account",
            },
          },
        ],
      },
      {
        heading: {
          ko: "4기 — 자체 배포 (4월 초)",
          en: "Phase 4 — Self-hosted deployment (early April)",
        },
        intro: { ko: "", en: "" },
        bullets: [
          {
            date: "4/5~6",
            text: {
              ko: "Rocky Linux 배포 스크립트, standalone 빌드. 가비아 VM에 Docker PostgreSQL + 자체 WebSocket 서버 + Better Auth로 운영",
              en: "Rocky Linux deploy scripts, standalone build. Ran on a Gabia VM with Docker PostgreSQL + a self-hosted WebSocket server + Better Auth",
            },
          },
        ],
      },
      {
        heading: {
          ko: "5기 — Vercel + Supabase 마이그레이션 (5/21~5/24)",
          en: "Phase 5 — Vercel + Supabase migration (5/21–5/24)",
        },
        intro: {
          ko: "상주 프로세스에 의존하던 자체 VM 구성을 서버리스로 옮기며 실시간·인증 계층을 통째로 재작성.",
          en: "Moved the long-running-process VM setup to serverless, rewriting the entire real-time and auth layers in the process.",
        },
        bullets: [
          {
            date: "5/21",
            text: {
              ko: "ESLint flat config 전환, DB를 Supabase 풀러로, 자체 WS 서버 삭제 → Supabase Realtime Broadcast, 백그라운드 작업을 Next 16 after()로",
              en: "Switched to ESLint flat config, moved the DB onto the Supabase pooler, deleted the self-hosted WS server → Supabase Realtime Broadcast, moved background work to Next 16 after()",
            },
          },
          {
            date: "5/22",
            text: {
              ko: "Better Auth → Supabase Auth 전면 마이그레이션, Vercel 함수 서울 리전 고정, 게스트 제출 인증 강화, 프로덕션 배포",
              en: "Full Better Auth → Supabase Auth migration, pinned Vercel functions to the Seoul region, hardened guest-submission auth, production deploy",
            },
          },
          {
            date: "5/23",
            text: {
              ko: "v0.2.0 — Google Calendar OAuth 보안 재작성, refresh token AES-256-GCM 암호화",
              en: "v0.2.0 — Google Calendar OAuth security rewrite, refresh tokens encrypted with AES-256-GCM",
            },
          },
          {
            date: "5/23",
            text: {
              ko: "릴리스 직후 정리 — 게스트 조율 뷰에서 비공개 설정인데도 중간 결과가 보이던 버그 수정, 비로그인 게스트 데이터 pg_cron 일일 정리 잡, ESLint 잔여 위반 일괄 정리",
              en: "Post-release cleanup — fixed a bug where the guest coordination view showed interim results even when set to private, added a daily pg_cron job to purge anonymous-guest data, and swept up remaining ESLint violations",
            },
          },
          {
            date: "5/24",
            text: {
              ko: "Google OAuth 앱 검증 통과 — 1차 반려 사유였던 동의 화면 'MatchAll' vs 홈페이지 'MatchA' 표기 불일치를 'MatchA'로 통일해 재제출, 100명 상한 해제 + '확인되지 않은 앱' 경고 해소",
              en: "Passed Google OAuth app verification — resubmitted after unifying the naming mismatch (consent screen 'MatchAll' vs homepage 'MatchA') to 'MatchA', the first-round rejection reason; lifted the 100-user cap and cleared the 'unverified app' warning",
            },
          },
        ],
      },
    ],
    diagram: {
      ko: `워크스페이스 트리 ──▶ 일정 조율 ──▶ 외부 캘린더 ──인프라 이전──▶ Vercel + Supabase
계층형 캘린더       When2Meet    Google 양방향    자체 VM → 서버리스`,
      en: `workspace tree ──▶ scheduling ──▶ external calendars ──infra move──▶ Vercel + Supabase
hierarchical cal   When2Meet     Google two-way      self VM → serverless`,
    },
    closing: [
      {
        ko: "현재: Vercel + Supabase로 이전 완료, v0.2.0 배포. 베타 운영 중.",
        en: "Now: migration to Vercel + Supabase complete, v0.2.0 shipped. Running in beta.",
      },
      {
        ko: "상주 WebSocket 서버와 배포 스크립트에 묶여 있던 구조를 서버리스로 걷어내며, 실시간과 인증을 관리형 서비스 위에 다시 올렸다.",
        en: "By peeling the architecture off the long-running WebSocket server and deploy scripts onto serverless, I rebuilt real-time and auth on top of managed services.",
      },
    ],
  },
];

/** Resolve a possibly-bilingual gutter date to the active language. */
export function logBulletDate(
  date: string | LocalizedText | undefined,
  lang: Language,
): string | undefined {
  if (date == null) return undefined;
  return typeof date === "string" ? date : date[lang];
}

/** Look up a single post by slug, or undefined if none matches. */
export function getLogPost(slug: string): LogPost | undefined {
  return logPosts.find((post) => post.slug === slug);
}
