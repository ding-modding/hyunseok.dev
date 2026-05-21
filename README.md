# hyunseok.dev

Personal CV homepage for Hyunseok Hong — a KAIST Computer Science undergraduate
and builder. The main page (`/`) is a job-seeking CV; `/projects` is the
portfolio.

Built per the specs in `PLAN.md`, `DESIGN.md`, and `CONTENT.md`.

## Stack

- Next.js 16 (App Router) + TypeScript (strict)
- Tailwind CSS v4
- Lightweight custom KO/EN i18n — no library (React context + resolution logic)
- Light/dark theme toggle
- Fonts: Geist + Geist Mono via `next/font`; Cabinet Grotesk (Fontshare CDN);
  Pretendard (jsdelivr CDN)
- Tests: Vitest (unit) + Playwright (E2E smoke)

## Develop

```bash
npm install
npm run dev          # http://localhost:3000
```

## Build & test

```bash
npm run build        # next build — must pass
npm test             # Vitest unit tests
npm run test:e2e     # Playwright E2E smoke (needs a browser, see below)
```

The Playwright config uses the system-installed Chrome (`channel: "chrome"`)
because the bundled Chromium could not be downloaded in the build sandbox.
Once `npx playwright install chromium` succeeds, remove the `channel` line in
`playwright.config.ts` to use the bundled browser.

## Project layout

```
app/            routes — / (CV) and /projects (portfolio), layout, metadata
components/     LanguageProvider, ThemeProvider, toggles, Nav, Footer, Hero,
                Section, StatusRow, LogEntry, ContactEmail, InitScript
content/        types.ts (CVContent schema) + ko.ts / en.ts (locked content)
lib/            i18n.ts (language resolution) + theme.ts + i18n.test.ts
tests/          smoke.spec.ts (Playwright E2E)
public/         static assets — drop resume.pdf here (see public/README.md)
```

## TODO before deploy

- Add `public/resume.pdf` — the site links to `/resume.pdf` but the file is not
  yet present.
- Set up `contact@hyunseok.dev` via Cloudflare Email Routing.
- Add LinkedIn URL to `content/ko.ts` + `content/en.ts` if/when available.
