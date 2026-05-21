# hyunseok.dev

Personal CV homepage for Hyunseok Hong — a KAIST Computer Science undergraduate
and builder. The main page is a job-seeking CV; `/projects` is the portfolio.

## Stack
- Next.js (App Router) + TypeScript (strict)
- Tailwind CSS
- Vercel hosting; domain `hyunseok.dev` on Cloudflare DNS
- Bilingual KR/EN via a lightweight custom toggle (no i18n library)

## Design System
Always read `docs/DESIGN.md` before any visual or UI decision. All fonts, colors,
spacing, and aesthetic direction are defined there. Do not deviate without
explicit user approval. In QA, flag any code that does not match it.

## Plan
`docs/PLAN.md` holds the implementation plan and architecture decisions from the
engineering review.

## Content rules
- Page shows city-level location and a dedicated email only. No phone, no street
  address, no birth date — on the page or in the linked PDF.
- Project status labels must be honest: `LIVE` only for genuinely operating
  products (Timeschool), `BETA` for deployed-but-pre-commercial (Teamplo, MatchA).
- Awards: high-school and university only — middle-school competition results
  are excluded. Workflow skills name recognizable tools only.

## Testing
- Unit: Vitest — `lib/i18n.ts` language resolution.
- E2E smoke: Playwright — language toggle, theme, `?lang=en`, nav, PDF link.
- Build gate: `next build` must pass.
