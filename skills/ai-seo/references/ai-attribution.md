# Measuring AI Search Impact Past the Referral Click

## Contents
- Size the opportunity first
- Benchmarks (2026)
- The SERP halo and opt-out tests
- Four layers, setup, evaluation designs, and reporting language

AI answers influence buyers who never click a link. They read a recommendation, then search your brand or type your URL a few days later. Referral reports miss most of that, so "AI sends us almost no traffic" is usually a measurement gap, and the impact sits in other channels.

## Size the opportunity first

Before building any measurement, answer "how big is this for us?" from your own analytics, over the trailing 12 months:

1. **LLM sessions as a percentage of Google organic sessions.** Group the AI referrers (see Setup, step 3) and divide.
2. **Conversion rate by channel**, AI referrals against Google organic, direct, and paid.

Treat the result as a **floor**. ChatGPT's UTM tagging had an outage in early October, which pushed clicks that would have been tagged into Direct, and AI visits without a referrer are always undercounted. Scale AEO effort to the number: a channel at a fraction of a percent of organic that converts well deserves monitoring and fixes to pages that already matter, not a new program that displaces SEO.

## Benchmarks (2026)

Dated, third-party data points for context. Each comes from a different sample, and most are agencies or vendors reporting on their own panels, so use them to sanity-check your own numbers rather than as forecasts. Check the primary reports before quoting any of them externally, since several were relayed through social posts.

| Source | Sample | Finding |
|---|---|---|
| Marie Haynes ("GEO is a distraction", 2026) | 100 sites, 145M sessions | ChatGPT referrals were 0.62% of Google organic sessions; they converted at 13.8% against 3.02%; Google drove 96.5% of conversions |
| IDHL (agency) | 175 sites | AI sessions up 392% year over year, revenue from them up 312% |
| Seer Interactive (agency) | Not stated in our notes | Brands cited in an AI Overview had a 2.07% CTR against 0.94% for brands not cited |
| Semrush (vendor) | A fixed panel of 400 commercial keywords | AI Overviews appeared on 88% of the panel, up from 45.75% earlier |

The first two rows pull in different directions on purpose: AI referrals convert well and are growing quickly, from a base that is still small next to Google. The Semrush figure is for one hand-picked commercial panel, so it says nothing about the share of all queries that show an AI Overview.

## The SERP halo and opt-out tests

Judging AI Overviews by AI referral clicks alone misses the halo: people who see your brand in an overview may click a regular result, or search your name later. Cyrus Shepard ran an opt-out test on his own site, reported by Search Engine Roundtable and Search Engine Land, and found AI-surface impressions had a CTR of about 0.9%, while regular organic clicks fell during the weeks the site was opted out.

Caveats: that is one site, and no volumes were published, so read it as a design to copy, not a result to quote as a rate.

You can use opt-out on and off as a **measurement design** (the interrupted-time-series row below): switch the AI opt-out control on for a set period, then off, and compare organic clicks, branded search, and conversions. The cost is real. While opted out you may lose AI exposure and the clicks that came with it, so run it on a section of the site or for a short window, log other changes in the same period, and decide beforehand what drop would end the test. Do not report AI Overviews as ineffective because AI referral clicks are low.

## Reading the delayed effect

Profound joined more than two million AI conversations with later browsing behavior (Profound, July 2026; observational, US-only, measured site visits rather than purchases). Two findings shape the setup below:

- Only **42%** of the downstream visits after an AI assistant introduced a brand happened within 24 hours. A same-session window misses most of the effect.
- More than **97%** of those visits carried no AI referral parameter, even after ChatGPT made its links easier to click.

SimilarWeb's journey data points the same way: about 9% of post-recommendation visits arrived as visible AI referrals (see [citations-vs-recommendations.md](citations-vs-recommendations.md)). Profound sells AI visibility tracking, so treat its numbers as vendor research, and don't present either study's lift as a forecast for one brand.

## Four layers

Report each layer separately. Rising visibility does not prove rising revenue.

| Layer | What it captures | Where it comes from |
|---|---|---|
| **Exposure** | Mentions, recommendations, prominence, framing, citations | Prompt tracking (see [prompt-portfolio.md](prompt-portfolio.md)) |
| **Immediate behavior** | AI referral sessions, landing pages, engaged sessions | Analytics, with AI referrers grouped (see the **analytics** skill) |
| **Delayed behavior** | Branded search, direct visits, return visits, cross-session conversions | Search Console branded queries, analytics, CRM |
| **Business outcome** | Signups, leads, qualified pipeline, purchases, revenue, retention | CRM and billing |

## Setup

1. **Name the decision.** "Should we keep funding AEO content?" needs a different design from "Did fixing our pricing page change anything?"
2. **Define exposure** by engine, prompt cohort, market, language, and date, so you know what changed and when.
3. **Fix referral capture.** Group known AI referrers (chatgpt.com, perplexity.ai, gemini.google.com, copilot.microsoft.com, claude.ai, and so on) into one channel. Preserve landing page, referrer, and query parameters. Expect it to undercount.
4. **Add delayed windows.** Measure branded search and direct visits to exposed pages over 1-hour, 24-hour, and 7-day windows after a known exposure change.
5. **Ask people.** A "How did you hear about us?" field with an AI option and a "What did you ask?" follow-up, plus tagged sales-call notes, catch journeys analytics can't see.
6. **Join to outcomes** in the CRM without counting the same conversion twice across layers.

## Evaluation designs

Pick the strongest design you can afford, and say which one you used.

| Design | Use when | Confidence |
|---|---|---|
| **Holdout** | You can leave comparable pages, products, or markets untouched | Highest |
| **Matched comparison** | Similar pages or markets exist, but you can't randomize | Medium |
| **Interrupted time series** | One clear intervention date and a long, stable baseline | Medium |
| **Pre/post on a stable cohort** | Nothing better is possible | Low; confounders easily swamp it |
| **Exposure panel or incrementality study** | Budget for a vendor panel | Varies with the panel's method |

List confounders before reading results: campaigns, launches, press, seasonality, pricing changes, and model or retrieval updates.

## Reporting language

Say which of three things you have: an **observation** ("branded search rose 18% after the change"), an **association** ("pages with more AI mentions saw more direct visits"), or a **causal result** ("the holdout pages didn't move; the treated pages did"). Most AEO reporting only supports the first two. Say so.

Respect privacy rules in panel and self-reported data: aggregate small groups and follow your consent and retention policies.

---

*Framework lineage: the four-layer model, attribution windows, and evaluation designs adapted (re-expressed and restructured) from Profound's MIT-licensed ai-search-attribution-planner skill and its "AI mention effect" study (July 2026), credited.*
