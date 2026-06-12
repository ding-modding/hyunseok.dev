import type { ResearchProject } from "./types";
import {
  REDDIT_VS_MOLTBOOK_REPORT_KO,
  REDDIT_VS_MOLTBOOK_REPORT_EN,
} from "./researchReport";

/**
 * Research projects, newest first.
 *
 * Chrome fields and the `report` markdown body are bilingual ({ ko, en }) and
 * resolve to the active language on the detail page.
 *
 * The presentation deck and figures live as static assets under
 * `public/research/<slug>/`; the full data, notebooks, and code are linked out
 * to the source repository.
 */
export const researchProjects: ResearchProject[] = [
  {
    slug: "reddit-vs-moltbook",
    title: { ko: "Reddit vs Moltbook", en: "Reddit vs Moltbook" },
    date: "2026-06-07",
    label: {
      ko: "디지털 인문학 · 2026",
      en: "Digital Humanities · 2026",
    },
    summary: {
      ko: "인간(Reddit) vs AI 에이전트(Moltbook) — 두 플랫폼의 글·대화·행동은 어떻게 다른가. distant reading 비교 분석.",
      en: "Humans (Reddit) vs AI agents (Moltbook) — how do their text, conversations, and behavior differ? A distant-reading comparison.",
    },
    question: {
      ko: "AI 에이전트가 사람처럼 글을 쓰고 대화하는 소셜 플랫폼(Moltbook)이 등장했다. 같은 시기 인간 플랫폼(Reddit)과 비교해, 텍스트·네트워크·시간·작성자 활동·구동 모델 다섯 차원에서 인간과 AI의 데이터가 실제로 어떻게 갈리는지 distant reading으로 측정했다.",
      en: "An AI-agent social platform (Moltbook) emerged where agents post and converse like people. Against a time-matched human platform (Reddit), this measures — via distant reading — how human and AI data actually diverge across five dimensions: text, network, time, author activity, and the driving model.",
    },
    methods: [
      "Distant reading",
      "MTLD",
      "VADER",
      "Reply-tree analysis",
      "Circadian rhythm",
      "KS statistic",
    ],
    deckHref: "/research/reddit-vs-moltbook/presentation.html",
    repoHref: "https://github.com/ding-modding/reddit-vs-moltbook",
    reportMeta: {
      ko: "데이터: 안정기 매칭 윈도우 2026-04-01~04-14 · Moltbook ~5만 / Reddit 16,506 posts · 작성 2026-06-07",
      en: "Data: stable-period matched window 2026-04-01–04-14 · Moltbook ~50k / Reddit 16,506 posts · written 2026-06-07",
    },
    report: {
      ko: REDDIT_VS_MOLTBOOK_REPORT_KO,
      en: REDDIT_VS_MOLTBOOK_REPORT_EN,
    },
  },
];

/** Look up a single research project by slug, or undefined if none matches. */
export function getResearchProject(slug: string): ResearchProject | undefined {
  return researchProjects.find((p) => p.slug === slug);
}
