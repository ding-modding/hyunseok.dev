# hyunseok.dev — 구현 플랜

개인 CV 홈페이지. 채용·구직용 CV가 메인, 포트폴리오가 서브.
plan-eng-review 완료 (2026-05-21). 결정 4건 확정.

## 목표

- `hyunseok.dev`에 채용 담당자가 보는 CV 홈페이지 + `/projects` 포트폴리오 서브페이지
- 한/영 토글, 이력서 PDF 다운로드, 연락 채널
- 개인정보 원칙: 페이지엔 도시 단위·전용 이메일만. 전화·상세주소·생년월일 제외.

## 확정된 아키텍처 결정

| # | 결정 | 선택 | 이유 |
|---|------|------|------|
| D2 | i18n | 경량 커스텀 토글 (라이브러리 없음) | 2페이지 고정 콘텐츠엔 next-intl 과조립. `?lang=en` 쿼리로 딥링크 보완 |
| D3 | 연락 채널 | 전용 이메일 + 소셜 (Cloudflare Email Routing) | 도메인이 이미 Cloudflare. 무료, 백엔드 0, 본 받은편지함 숨김 |
| D4 | 테스트 | unit(i18n 로직) + E2E 스모크 | 실제 로직은 언어 결정 함수 하나뿐 |
| D5 | outside voice | skip | 2페이지 정적 사이트, 검증된 기술뿐, 혁신 토큰 0 |

## 기술 스택

- **Next.js (App Router)** + TypeScript (strict)
- **Tailwind CSS**
- **Vercel** 호스팅 (Git 연동 자동 배포, SSL, CDN)
- 폰트: `next/font` (셀프 호스팅, CLS 방지)
- 이미지: `next/image` (`/projects` 스크린샷)
- 테스트: Vitest (unit) + Playwright (E2E 스모크)
- 라이브러리 추가 없음 (i18n 라이브러리 미사용)

## 사이트 구조

```
/                  메인 CV 페이지
  Hero            이름 · 한 줄 정체성 · GitHub/이메일/이력서 PDF
  About
  Experience      Timeschool(Mad on) · KIXLAB
  Projects        Teamplo · MatchA · Timeschool (카드 요약 → /projects 링크)
  Skills          Languages / Frameworks / AI-assisted development
  Education        KAIST
  Honors & Awards  KOI · ICT · 대통령상 · KPF · NYPC · 인천과학전람회
  Open Source      gbrain PR #909 (v0.34.1.0 머지)
  Contact          전용 이메일 + GitHub/LinkedIn
/projects          포트폴리오 서브페이지 — 프로젝트별 상세(문제→해결→기술→링크)
```

## 콘텐츠 모델 (DRY)

```
content/
  types.ts   CVContent 인터페이스 (스키마 1개)
  ko.ts      CVContent 구현 — 한국어
  en.ts      CVContent 구현 — 영어
```

같은 인터페이스를 양 언어가 구현 → 한쪽 텍스트 누락 시 컴파일 에러로 잡힘.

## i18n 설계 (경량 토글)

```
lib/i18n.ts — resolveLanguage()
  우선순위: ?lang= 쿼리(en/ko) > localStorage > navigator.language > 'ko'
  잘못된 값은 무시하고 다음 우선순위로 폴백

components/LanguageProvider.tsx
  React Context로 lang 상태 관리. prop drilling 없음.
  토글 시 localStorage 저장 + document.documentElement.lang 갱신.

FOUC 방지: layout.tsx <head>에 인라인 스크립트로
  페인트 전 초기 언어를 설정 (다크모드 토글과 동일 패턴).
```

## 컴포넌트

`LanguageProvider` · `LanguageToggle` · `Nav` · `Footer` · `Hero` · `Section`
(섹션 래퍼, 메인/projects 공유) · `ProjectCard` (양 페이지 공유) · `ContactEmail`
(이메일을 JS 렌더해 단순 크롤러 차단).

## 연락 채널

- Cloudflare Email Routing으로 `contact@hyunseok.dev`(또는 유사) 전용 주소 생성 → 본 받은편지함으로 포워딩
- 페이지엔 전용 주소 + GitHub/LinkedIn. 이메일은 `ContactEmail`이 클라이언트에서 조립 렌더.

## 이력서 PDF

- `public/resume.pdf` — 사용자가 별도 제작한 PDF를 그대로 배치 (페이지에서 생성하지 않음. 페이지는 의도적으로 정보가 더 적음).

## 테스트

| 대상 | 종류 | 케이스 |
|------|------|--------|
| `lib/i18n.ts` resolveLanguage | Vitest unit | `?lang` 우선 / localStorage 폴백 / navigator 폴백 / 기본값 / 잘못된 값 무시 (~5) |
| 핵심 사용자 흐름 | Playwright E2E 스모크 | 토글 동작 · 새로고침 유지 · `?lang=en` · `/`↔`/projects` 언어 유지 · PDF 링크 존재 · 콘솔 에러 0 |
| 빌드 | 게이트 | `next build` 성공 |

## 배포 (Cloudflare + Vercel)

1. `git init` + GitHub 리포 생성 (현재 git 리포 아님)
2. Vercel 프로젝트를 GitHub 리포에 연결 (push 시 자동 배포)
3. Vercel에 커스텀 도메인 `hyunseok.dev` 추가
4. **Cloudflare DNS: 반드시 "DNS only"(회색 구름).** 주황 구름(프록시 ON)이면 Vercel SSL 인증서 발급이 깨짐
5. apex 도메인은 Cloudflare CNAME flattening 사용
6. Cloudflare Email Routing으로 전용 연락 주소 설정

## NOT in scope (의도적 보류)

- **블로그/Writing 섹션** — 작성한 글이 아직 없음. 향후 `/blog` 자리만 비워둠
- **VibeWalk 프로젝트** — 아이디어 pivot 중, 면접 방어 어려움 → 안정화 후 재추가
- **SGLP 연구** — 검증 불확실 → 제외
- **연락 폼(서버리스+Resend)** — 채용 맥락에서 인프라 과함. 전용 이메일로 대체
- **next-intl / 언어별 라우팅** — 2페이지 사이트엔 과조립
- **페이지에서 PDF 자동 생성** — 페이지와 PDF는 의도적으로 정보량이 다름
- **분석/애널리틱스** — 필요 시 나중에 Vercel Analytics 추가 가능

## What already exists

그린필드. 재사용: 프레임워크 기본 기능(Next.js 라우팅·SSG, Vercel 호스팅·SSL,
Tailwind), 사용자가 별도 보유한 이력서 PDF. 새로 만드는 건 콘텐츠·컴포넌트·i18n 로직뿐.

## 구현 순서

1. Next.js 프로젝트 스캐폴딩 (App Router, TS, Tailwind)
2. 콘텐츠 모델 (`content/types.ts`, `ko.ts`, `en.ts`)
3. i18n 로직 + Provider + 토글 + unit 테스트
4. 메인 페이지 컴포넌트·섹션
5. `/projects` 서브페이지
6. 디자인·반응형·접근성·SEO 메타/OG
7. E2E 스모크 테스트
8. 배포 (GitHub → Vercel → Cloudflare DNS → Email Routing)
