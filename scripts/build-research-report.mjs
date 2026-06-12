// Regenerates content/researchReport.ts from the bilingual markdown sources in
// content/research-src/. Drops the leading H1 (the page header shows the title)
// and injects the per-section figures (each as its own image-only paragraph, so
// ResearchReport promotes it to a captioned <figure>). The figure alt text is the
// caption; paths use the dark variant — the renderer swaps to `.light.png` in
// light theme.
//
// Run:  node scripts/build-research-report.mjs
import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const srcDir = join(root, "content", "research-src");
const outFile = join(root, "content", "researchReport.ts");

const FIG_BASE = "/research/reddit-vs-moltbook/figures";

// heading line (exact, trimmed) -> [[caption, filename], ...]
const FIGURES = {
  en: {
    "## §3 Text & language dimension": [
      ["§3 Post length · first-person rate · TTR distributions", "fig_linguistic.png"],
      ["§3 Vocabulary diversity (MTLD) · sentiment (VADER) distributions", "fig_lexical.png"],
    ],
    "## §4 Network & conversation-structure dimension": [
      ["§4 Comment-depth distribution — Reddit vs Moltbook", "fig_reply_depth.png"],
      ["§4 Reply-tree structure — flat star vs deep nesting", "fig_reply_tree.png"],
    ],
    "## §5 Time & behavior dimension (circadian) — ✅ hypothesis confirmed": [
      ["§5 24-hour posting rhythm (circadian)", "fig_circadian.png"],
    ],
    "## §6 Community & author-activity dimension": [
      ["§6 Per-author activity distribution", "fig_author_activity.png"],
    ],
    "## §7 Agent provenance (Moltbook-specific) — which LLM drives them": [
      ["§7 Agent driving-model provenance", "fig_provenance.png"],
    ],
    "## §8 Summary statistics — table & distribution tests": [
      ["§8 5-axis normalized comparison (radar)", "fig_radar.png"],
    ],
  },
  ko: {
    "## §3 텍스트·언어 차원": [
      ["§3 게시물 길이 · 1인칭 비율 · 어휘 다양도(TTR) 분포", "fig_linguistic.png"],
      ["§3 어휘 다양도(MTLD) · 감정(VADER) 분포", "fig_lexical.png"],
    ],
    "## §4 네트워크·대화 구조 차원": [
      ["§4 댓글 깊이 분포 — Reddit vs Moltbook", "fig_reply_depth.png"],
      ["§4 reply tree 구조 — 평평한 star vs 깊은 중첩", "fig_reply_tree.png"],
    ],
    "## §5 시간·행동 차원 (circadian) — ✅ 가설 확인": [
      ["§5 24시간 게시 리듬 (circadian)", "fig_circadian.png"],
    ],
    "## §6 커뮤니티·작성자 활동 차원": [
      ["§6 작성자당 활동량 분포", "fig_author_activity.png"],
    ],
    "## §7 Agent provenance (Moltbook 특화) — 어떤 LLM으로 구동되나": [
      ["§7 에이전트 구동 모델 provenance", "fig_provenance.png"],
    ],
    "## §8 종합 통계 — 요약표 & 분포 검정": [
      ["§8 5축 정규화 비교 (radar)", "fig_radar.png"],
    ],
  },
};

function build(lang) {
  const raw = readFileSync(join(srcDir, `reddit-vs-moltbook.${lang}.md`), "utf8");
  // Drop the leading H1 ("# ...") and any blank lines after it.
  const body = raw.replace(/\r\n/g, "\n").replace(/^#\s+.*\n+/, "");

  const figs = FIGURES[lang];
  const seen = new Set();
  const out = [];
  for (const line of body.split("\n")) {
    out.push(line);
    const hit = figs[line.trim()];
    if (hit) {
      seen.add(line.trim());
      for (const [caption, file] of hit) {
        out.push("");
        out.push(`![${caption}](${FIG_BASE}/${file})`);
      }
    }
  }

  // Fail loudly if an expected section heading wasn't found (typo / renamed).
  for (const heading of Object.keys(figs)) {
    if (!seen.has(heading)) {
      throw new Error(`[${lang}] figure heading not found in source: ${heading}`);
    }
  }

  return out.join("\n").replace(/\n+$/, "\n");
}

const ko = build("ko");
const en = build("en");

const banner =
  "// GENERATED from content/research-src/reddit-vs-moltbook.{ko,en}.md\n" +
  "// Bilingual Korean/English research report bodies, rendered via react-markdown\n" +
  "// on /research/[slug]. Leading H1 dropped (page header shows the title);\n" +
  "// figures injected per section (each its own paragraph), theme variant\n" +
  "// resolved at render. Do not hand-edit — edit the .md sources and re-run\n" +
  "// `node scripts/build-research-report.mjs`.\n\n";

const file =
  banner +
  `export const REDDIT_VS_MOLTBOOK_REPORT_KO =\n${JSON.stringify(ko)};\n\n` +
  `export const REDDIT_VS_MOLTBOOK_REPORT_EN =\n${JSON.stringify(en)};\n`;

writeFileSync(outFile, file, "utf8");
console.log(`wrote ${outFile}  (ko ${ko.length} chars, en ${en.length} chars)`);
