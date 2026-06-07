# Reddit vs Moltbook — Results Analysis

> **Data (current)**: stable-period matched window — **2026-04-01 to 04-14** (after the launch frenzy passed).
> Moltbook posts ~50k (≥50 tokens: 39,151) · Reddit posts 16,506 (7 subreddits: artificial·singularity·LocalLLaMA·offmychest·CasualConversation·CryptoCurrency·ProgrammerHumor).
> **Scope note**: posts only, raw text before the MBC-20 filter. Comments and the full 78-day corpus are not included.
> **History**: the initial analysis used a launch-week (2026-01-27–31) sample, but 85% of it fell on a single day (1/31), so it was not representative and was **re-sampled to the stable April window**. The figures below are April-based; meaningful changes are noted against launch-week.
> **Written**: 2026-06-07 (updated to April data).

---

## §3 Text & language dimension

The three distributions (token count / first-person rate / TTR) hold the same trend in the April data: **Moltbook (AI) posts are longer, and the Reddit (human) sample has many short posts.** That said, the length-corrected vocabulary-diversity gap shrank substantially versus launch-week (§3.4).

### 3.1 Post length — token count (log)

The pattern of Moltbook's distribution skewing right (longer) than Reddit's holds. Moltbook peaks near log 5, while Reddit has a large mass at log 2–3 (short posts). The share of posts with ≥50 tokens is also **Moltbook 78% (39,151 / ~50k) vs Reddit 51% (8,493 / 16,506)** — AI posts are longer and more substantial. It is also notable that Moltbook's ≥50-token share rose 58%→78% versus launch-week, suggesting the early days had many short "Hello Moltbook!"-style greetings and intros while the stable period saw more long discursive posts.

*Caveat*: the Reddit sample mixes in posts with `[removed]`/`[deleted]` bodies or title-only posts, which inflates the low-token mass.

### 3.2 First-person rate

Both cluster strongly at 0, with Moltbook's 0 peak higher (density ≈60) and Reddit spreading a bit more across 0.05–0.15. First-person use ("I/me/my…") is low for both, but **Reddit (humans) is marginally more self-referential**. Moltbook's concentration at 0 appears driven by formulaic/transactional posts with no first person; how this shifts once the MBC-20 filter keeps only the discursive subset needs follow-up.

### 3.3 Vocabulary diversity — Type-Token Ratio (TTR)

Reddit has a large spike at TTR=1.0; Moltbook centers on 0.6–0.8. **Interpretation caution**: TTR=1.0 means every token is unique = mechanically produced by very short posts (title-only / removed). So Reddit's 1.0 spike is not richer vocabulary but a consequence of short posts, and Moltbook's lower TTR is a length-dependent effect of longer posts. TTR alone is confounded by length, so it is reinterpreted with the length-corrected metric in §3.4.

### 3.4 Vocabulary diversity, re-examined — MTLD (length-corrected) ★ key change

**MTLD**, which is nearly length-invariant, was computed on posts with ≥50 tokens.

| Platform | posts in MTLD calc | median | mean |
|---|---|---|---|
| Moltbook | 39,151 | **98.3** | 105.5 |
| Reddit | 8,493 | **87.2** | 93.7 |

**Once length is controlled, Moltbook still has higher vocabulary diversity, but the gap is moderate at about +13% (median 98.3 vs 87.2).** This overturns the surface impression of TTR (where Reddit spiked at 1.0) — Reddit looked higher on TTR only as a length side-effect, and once length is controlled the AI side is actually more diverse.

Crucially, this gap is **sensitive to the sampling period**. In the launch-week sample Moltbook's median was 123.5, +34% over Reddit (92.4); in the stable April window Moltbook drops to 98.3 and the gap **narrows to +13%**. In other words, **the launch-week data overestimated the AI's vocabulary diversity**, and during normal operation the difference from humans is much smaller. (The direction itself is consistent across both periods — "AI ≥ human.") Statistical significance can be confirmed with §8's Mann–Whitney, but since n is large it is more appropriate to read the effect size (median gap).

### 3.5 Sentiment tone — VADER sentiment

**Method**: VADER's (Valence Aware Dictionary and sEntiment Reasoner) **compound** score. VADER is a lexicon- and rule-based analyzer for social media that adds rules for capitalization (emphasis), punctuation, intensifiers, negation, and emoticons on top of a word-sentiment lexicon. Compound normalizes the whole to **−1 (most negative) to +1 (most positive)** (conventionally ≥0.05 positive, ≤−0.05 negative). It was computed per post on cleaned text and averaged per platform.

**Result**: mean compound is **Moltbook 0.313 vs Reddit 0.176**. Both are net positive, but **AI-agent posts are distinctly more positive/friendly in tone** than humans.

*Caveat*: VADER is English-lexicon-based and weak on long posts, context, and sarcasm. It is safer to read the relative difference between the two platforms than absolute values. Moltbook's higher positivity may relate to the share of greeting/intro/promotional posts or the "Claude-family" tone in §7.

---

## §4 Network & conversation-structure dimension

Conversation structure was compared as a reply tree (a post→comment directed graph).

**Structure (shape/depth)**:

- **Moltbook = flat star**: the visualization clearly shows comments attaching radially around a single post in a star shape, with mean_depth ≈ 1.04. That is, agents comment directly on posts but **comments rarely converse with each other (nesting)** — broadcast-style.
- **Reddit = deeper nesting**: mean_depth ≈ 1.79, with the tree continuing through several levels. People reply to replies, forming **many-party conversation**.

The comment-depth distribution makes it clearer:

| Comment depth | Reddit | Moltbook |
|---|---|---|
| depth 1 (direct on post) | 53.0% | **87.4%** |
| depth 2 | 20.6% | 10.9% |
| depth 3 | 11.0% | 1.2% |
| depth 4 | 6.2% | 0.2% |
| depth 5+ | **9.2%** | 0.2% |

**87% of Moltbook comments are depth-1, attached directly to the post**, and depth 3+ is just 1.6% — essentially no nesting. Reddit, by contrast, has only 53% at depth 1 and **26% at depth 3+**, with depth 5+ reaching 9.2% — deep multi-level conversation is common. The maximum depth of the largest thread is also Reddit 10 vs Moltbook 6, so human conversation runs deeper (in the tree visualization too, Moltbook is a wide fan under the root while Reddit extends far downward).

**Attention concentration** (replies per post — based on the post record's actual comment_count/num_comments, unaffected by sampling):

| Metric | Reddit | Moltbook |
|---|---|---|
| mean replies/post | 11.3 | 2.6 |
| median | 1 | 1 |
| max | 1,243 | 1,969 |
| share of replies held by the top 1% of posts | 26.6% | **43.0%** |

Both platforms have half their posts at ≤1 reply, but **attention is far more extremely concentrated on Moltbook** — the top 1% of posts hold 43% of all replies (Reddit 27%). Mean engagement is over 4× higher on Reddit (11.3 vs 2.6), but Moltbook is a **winner-take-all** distribution where "most are ignored and a tiny few explode." This confirms with data the hypothesis that "some posts are strongly activated algorithmically," consistent with the author heavy-tail in §6.

In sum, Moltbook conversation is **flat (star) and broadcast-style with attention concentrated on a few posts**, while Reddit is **deeply nested and discussion-style with more even participation**.

*Caveat*: because the post and comment samples are not from the same threads, tree depth and graph out-degree (Reddit 174 / Moltbook 76) are affected by partial sampling (the max reply count is corrected with the post-meta comment_count — 1,243 / 1,969). Precise analysis needs matched-thread data with the full comments of a specific set of posts.

---

## §5 Time & behavior dimension (circadian) — ✅ hypothesis confirmed

Re-run on the April matched window (14 days), the initial hypothesis **"humans = sleep rhythm, AI = uniform around the clock" was confirmed**.

| Platform | CV | peak/trough | peak (UTC) | trough (UTC) |
|---|---|---|---|---|
| Moltbook (AI) | **0.09** | **1.4×** | 16:00 (4.7%) | 02:00 (3.2%) |
| Reddit (human) | **0.16** | **1.6×** | 18:00 (5.3%) | 09:00 (3.2%) |

**AI (Moltbook) is flatter** (CV 0.09 < 0.16, peak/trough 1.4 < 1.6×) — it posts more uniformly across 24 hours, matching the intuition that "agents don't sleep." Humans (Reddit), by contrast, show a clear circadian rhythm: a trough at UTC 09:00 (US dawn / early-morning Europe) rising to a peak at UTC 12:00–18:00 (US afternoon + European evening), the typical waking-hours pattern.

An interesting detail is that Moltbook isn't perfectly uniform either — a faint peak remains around UTC 16:00. This hints that many agents run on human operators' schedules/triggers and weakly inherit human daytime rhythm (though it is earlier than the human 18:00 peak, and the amplitude is about half the human level).

**Contrast**: in the launch-week sample Moltbook showed CV 0.74 / peak-trough 9.4×, making "AI" look spiky instead — but that was a single-event artifact concentrated on one day (1/31, 85% of the sample). The complete reversal in the stable data, together with §3.4's MTLD, reaffirms the lesson that **"the sampling period drives the conclusion."**

*Caveat*: posts only, UTC-based (no local-time conversion). Absolute amplitude is small on both sides, but the direction is clear.

---

## §6 Community & author-activity dimension

The distribution of posts per author differs starkly between the two platforms. The mean alone is decisive: Moltbook is about 50,000 posts / 2,410 agents ≈ **~20.7 per author**, Reddit 16,506 posts / 12,201 authors ≈ **~1.35**. **AI agents post about 15× more per author.**

Distribution shape (log(1+posts per author), normalized per platform):

- **Reddit (human)**: extreme concentration almost entirely at 1 — in this 2-week window most human authors posted exactly once, and repeat posters are rare. Almost no right tail.
- **Moltbook (AI)**: spreads much wider, with a long **heavy tail** out to log 6–7 (hundreds to 1,000+). A few agents post hundreds of times or more, and the "repeatedly active" layer is thick.

Interpreting, AI agents are automated and can post repeatedly around the clock, so per-author output is large and heavy-tailed (consistent with the temporal uniformity of §5). Human submission activity, by contrast, is dominated by one-off participation.

Since posts alone may be apples-to-oranges (humans have far more comments than submissions), it was **recomputed as "total contribution per author (post+comment)" including comments**.

| Platform | total contribution (post+comment) | unique authors | per author |
|---|---|---|---|
| Moltbook | 100,000 | 3,062 | **32.66** |
| Reddit | 51,506 | 27,192 | **1.89** |

Including comments, Reddit's per-author contribution rose only slightly, 1.35→1.89 — instead unique authors surged 12,201→27,192, meaning **most comments came from new one-off participants**. Moltbook, meanwhile, rose 20.7→32.66. **As a result the gap didn't narrow but widened, from ~15× to ~17×**, and the shape is identical (Reddit concentrated at 1, Moltbook heavy-tailed). That is, the §6 conclusion "AI is far more active per author" is confirmed to be **a real phenomenon, not a posts-only artifact** — humans mostly contribute once or twice and only a few repeat, whereas a small number of AI agents (3,062) produce 100,000 contributions.

*Remaining caveat*: Moltbook posts/comments were each capped at 50k and Reddit comments at 5k per subreddit, so absolute per-author values are somewhat affected by the sample caps (though ratios and shapes are robust). Community counts compare Moltbook submolts vs the deliberately 7-sampled Reddit subreddits, so they are not directly comparable.

---

## §7 Agent provenance (Moltbook-specific) — which LLM drives them

The driving model of Moltbook agents was inferred by regex from two paths: (a) post bodies, (b) agent bios (`description`).

| Source | identified (share) | claude | gpt | gemini | grok | llama | qwen | mistral |
|---|---|---|---|---|---|---|---|---|
| post content (50,000) | 1,273 (2.5%) | **777 (61%)** | 286 | 81 | 64 | 36 | 27 | 2 |
| agent bio (10,441) | 218 (2.1%) | **193 (89%)** | 4 | 8 | 4 | 4 | 5 | — |

Two things emerge. First, **the share that states a model is very low** — only 2.1% of bios and 2.5% of posts mention a model name. This matches the earlier note ("underlying model mostly OpenClaw/Clawdbot — not always tagged"); most agents do not disclose their driving model. Second, **when disclosed, Claude is overwhelming** — 88.5% by bio self-description, 61% by post mentions. In bios especially GPT all but vanishes to 4, suggesting the GPT mentions in posts (286) were "posts that discussed GPT" rather than "agents that are GPT." This also fits the platform naming ("Clawdbot·Claw·molty") pointing to the Claude family.

To raise the identification rate, matching **runtime keywords ("Clawdbot/OpenClaw/Claw")** in bios captured **17.3% (1,805)** as mentioning a Claude-family runtime, beyond the explicit model names (2.1%). That is, a substantial number of agents that don't state a model name still run on a Claude-based runtime (Clawdbot).

Conclusion: Moltbook's identifiable agent ecosystem is close to **Claude-family-only** — 89% by explicit model name (bio), and including runtime keywords at least 17% confirmed Claude-family, while other models like GPT/Gemini remain single digits. That said, the majority (~80%) that reveal no model/runtime in bio or posts are still unknown, so "Claude dominance" is certain but the exact share should be read as a lower bound.

### §7b Human-contamination heuristic — unreliable, but suggestive

A very crude heuristic (slang lol/lmao/tbh + posting at UTC 02:00–06:00 + over 800 characters, 2 or more of these) scored Moltbook posts, classifying **8.9% as "suspected human" (score≥2)**. But this number is **not** a reliable estimate of human contamination — all three signals are common in AI agents too: (a) Moltbook agents write long posts (§3.1), so "over 800 chars" catches AI verbosity rather than humans, (b) since the time distribution is uniform (§5), "02:00–06:00" randomly catches about 17% (4/24 hours), and (c) agents actively imitate slang and emojis (the shitposts submolt, etc.).

If anything, the implication is the opposite: **surface stylistic cues (slang, length, time) alone cannot tell AI from humans.** A naive human-detector misclassifies ~9% of AI posts as human, which shows the agents' imitation is skilled enough to expose the intrinsic difficulty of a reverse-CAPTCHA. Measuring real human contamination needs more sophisticated signals such as account metadata and writing patterns.

---

## §8 Summary statistics — table & distribution tests

### Summary table (2026-04 window, posts basis)

| Metric | Moltbook (AI) | Reddit (human) |
|---|---|---|
| posts | 50,000 | 16,506 |
| authors | 2,410 | 12,201 |
| posts per author | **20.75** | 1.35 |
| median token count | **135** | 51 |
| median MTLD | 98.3 | 87.2 |
| mean first-person rate | 0.017 | **0.054** |
| mean sentiment (VADER) | **0.313** | 0.176 |
| mean replies/post | 2.58 | **11.28** |
| median score | 2 | 1 |

### Distribution-difference tests (Reddit vs Moltbook)

On both KS and Mann-Whitney, all four tested features differ **highly significantly at p ≈ 0**. But since the sample is tens of thousands, significance is nearly automatic, so the degree to which distributions diverge is read via the **KS statistic (effect size)**.

| Feature | KS stat | mean diff (R−M) | direction |
|---|---|---|---|
| first_person_rate | **0.311** | +0.037 | humans use more first person |
| n_tokens | 0.270 | −45.2 | AI is longer |
| ttr | 0.246 | +0.080 | human TTR higher (length side-effect, §3.3) |
| compound_sent | 0.150 | −0.136 | AI is more positive |

Distribution separation is largest in the order **first-person rate > post length > TTR > sentiment**. That is, the surface metrics that most strongly separate humans from AI are **"first-person use" and "post length,"** while the sentiment difference is significant but its separation (KS 0.15) is relatively small. All p-values being ≈0 is due to the huge n, so substantive interpretation uses effect size / median gaps. (radar: in the 5-axis normalized comparison, Moltbook bulges on the per-author-activity, length, and MTLD axes, Reddit on the first-person and replies axes.)

---

## Synthesis

The core pattern summarizes as **"Moltbook (AI) posts are longer, and the Reddit (human) sample has many short posts that distort length-dependent metrics (TTR)."** Correcting for length (MTLD), AI is slightly ahead on vocabulary diversity (+13%), but that gap is **heavily swayed by the sampling period**, exaggerated to +34% in launch-week — that the choice of data period changes the conclusion is the most important methodological lesson of this analysis. The first-person signal is low for both with humans marginally ahead, but the conclusion is withheld until the dilution effect of transactional posts is removed.

The time dimension (§5) yields the sharpest difference: **AI agents post almost uniformly across 24 hours** (CV 0.09), while **humans show a clear sleep-wake circadian rhythm** (CV 0.16, dawn trough / afternoon peak). Author activity (§6) runs the same way: **AI agents post ~15× more per author** with a heavy tail where a few go on sprees, while human authors mostly post once. This gap, recomputed fairly to include comments, actually **widens to ~17×** (32.7 vs 1.9 per author), confirming it is no posts-only artifact. Conversation structure (§4) also differs clearly: **Moltbook is a flat star-shaped broadcast structure** with comments attaching directly to posts and attention extremely concentrated on a few posts (top 1% hold 43% of replies), while **Reddit is a discussion form** with replies nested across many levels and more even participation. In sum, the picture so far is "AI is longer, slightly more lexically diverse, more positive in tone, time-agnostic, overwhelmingly more active per author, and converses in a flat broadcast form; humans are shorter, use more first person, are bound to a circadian rhythm, mostly participate once, and converse in a more deeply nested discussion form." On provenance (§7), among the few agents (~2%) that disclose a model, the Claude family is overwhelming (89% by bio), so Moltbook looks effectively like a Claude-based ecosystem.

## Next steps (analysis improvements)

1. **Re-run §3 after the MBC-20 filter** — reconfirm first-person and vocabulary metrics on the discursive subset alone.
2. **Clean Reddit** — exclude `[removed]`/`[deleted]` and title-only posts.
3. **Include comments** — re-examine length and first-person patterns with comments added beyond posts.
4. **Re-collect matched threads** — pull the full comments of a specific set of posts to measure §4 depth/structure precisely.
5. **§8 synthesis** — tie all dimensions together with a summary table + KS/Mann-Whitney tests + radar (finalize).
