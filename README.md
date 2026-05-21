# hyunseok.dev

Personal CV homepage for Hyunseok Hong — KAIST Computer Science undergraduate
and builder. The main page is a job-seeking CV; `/projects` is the portfolio.
Bilingual (KO/EN), light/dark.

**Live:** [hyunseok.dev](https://hyunseok.dev)

## Stack

- Next.js 16 (App Router) + TypeScript (strict)
- Tailwind CSS v4
- Bilingual KO/EN — lightweight custom toggle, no i18n library
- Light/dark theme
- Vercel hosting; domain on Cloudflare DNS

## Develop

```bash
npm install
npm run dev          # http://localhost:3000
```

## Build & test

```bash
npm run build        # next build
npm test             # Vitest unit tests
npm run test:e2e     # Playwright E2E smoke
```

## Layout

```
app/         routes — / (CV), /projects (portfolio), layout, metadata
components/  providers, toggles, Nav, Footer, Hero, Section, StatusRow, LogEntry
content/     types.ts (CVContent schema) + ko.ts / en.ts
lib/         i18n.ts (language resolution) + theme.ts
tests/       Playwright E2E smoke
docs/        DESIGN.md (design system) · PLAN.md (architecture)
```
