# Design System — hyunseok.dev

Created by /design-consultation on 2026-05-21.

## Product Context
- **What this is:** Personal CV homepage for Hyunseok Hong, a KAIST Computer Science undergraduate and builder. Main page is a job-seeking CV; `/projects` holds the portfolio.
- **Who it's for:** Recruiters and hiring managers, both Korean and international.
- **Space/industry:** Developer personal sites / online CV.
- **Project type:** Personal site (CV + portfolio).
- **The one memorable thing:** "A builder who ships real products that real people use." Every design decision serves this.

## Aesthetic Direction
- **Direction:** Engineered minimal.
- **Decoration level:** minimal — hairline borders, no textures, no blobs, no gradients.
- **Mood:** Precise, calm, confident. Typography and whitespace do the work; personality comes from the "shipping status" motif, not ornament.
- **Reference sites:** leerob.com, paco.me (restraint, typography-led). brittanychiang.com is a deliberate counter-example — avoid the templated dark-navy two-column dev-portfolio look.

## Typography
- **Display/Hero:** Cabinet Grotesk — geometric, confident grotesk. Large and sparing.
- **Body:** Geist — clean neutral sans; quietly signals the Vercel toolchain the site is built on.
- **UI/Labels:** Geist.
- **Data/Status/Dates:** Geist Mono — workhorse for status labels, timestamps, the deploy/award logs.
- **Korean:** Pretendard — pairs cleanly with Latin grotesks, seamless bilingual switching.
- **Loading:** Prefer `next/font` self-hosting for Geist + Geist Mono. Cabinet Grotesk via Fontshare CDN; Pretendard via jsdelivr CDN. No FOUC — preload display + body.
- **Scale:** hero `clamp(46px, 9vw, 76px)` / section head ~30px / item head ~19px / body 16–19px / small 14.5px / mono labels 11–13px. Display tracking −0.02em.

## Color
- **Approach:** Restrained — near-monochrome plus ONE accent. Light is the default; dark via toggle.
- **Light (default):** bg `#FAFAF8`, surface `#FFFFFF`, border `#E6E6E2`, text `#16181B`, muted `#6B6F76`, faint `#9A9DA3`.
- **Dark:** bg `#0B0C0E`, surface `#15171A`, border `#25282C`, text `#E8E9EB`, muted `#8A8E96`, faint `#5C6068`.
- **Accent (operational green):** light `#0F9D4F` / dark `#3BE37A`. Used ONLY on `LIVE` status. Scarcity is the point — exactly one green dot on the site (Timeschool).
- **Amber (BETA status):** light `#B0791C` / dark `#E0A23B`.
- **IN DEV status:** neutral faint, no color.
- **Semantic:** success reuses accent green; warning reuses amber; error `#C0392B` / dark `#E5675B` (rare).
- **Dark mode:** full surface redesign, accent slightly brightened. Contrast AA minimum.

## Spacing
- **Base unit:** 8px.
- **Density:** comfortable.
- **Scale:** 2xs 2 · xs 4 · sm 8 · md 16 · lg 24 · xl 32 · 2xl 48 · 3xl 64 · 4xl 88.

## Layout
- **Approach:** Single focused column, grid-disciplined.
- **Grid:** one column, max content width ~680px; side padding 28px (mobile) to auto (desktop).
- **First viewport** reads as a poster: large name, one-line identity, current-status line, mono links.
- **Border radius:** subtle — sm 6px, md 8px. Favor hairline borders over filled cards.

## Signature Components
- **Status row (Projects):** NOT a card grid. `dot · name · mono status label · description · arrow`, hairline divider between rows. Status taxonomy:
  - `LIVE` — green dot. Genuinely operating. Timeschool only.
  - `BETA` — amber dot. Deployed and usable, pre-commercial. Teamplo.
  - `IN DEV` — neutral dot. Demo stage. MatchA.
- **Deploy log (Experience + Awards):** mono timestamp in a left gutter, content on the right, hairline dividers.
  - Awards uses two labeled sub-groups, each rendered in log style: **Competitive Programming** and **Honors & Scholarships**.
- **Language toggle + theme toggle:** mono, minimal, in a quiet top bar.
- **LIVE dot:** soft 2.6s pulse. The one moment of motion that carries meaning.

## Motion
- **Approach:** minimal-functional.
- **Easing:** enter `ease-out`, exit `ease-in`, move `ease-in-out`.
- **Duration:** micro 50–100ms · short 150–250ms · medium 250–400ms.
- Subtle fade/translate on section entry. Language and theme toggles are instant.

## Decisions Log
| Date | Decision | Rationale |
|------|----------|-----------|
| 2026-05-21 | Initial design system | /design-consultation. Engineered-minimal + shipping-status motif. Light default + dark toggle. Cabinet Grotesk / Geist / Geist Mono / Pretendard. Status taxonomy LIVE/BETA/IN DEV; green reserved for genuinely-live. Researched leerob.com, paco.me, brittanychiang.com. |
