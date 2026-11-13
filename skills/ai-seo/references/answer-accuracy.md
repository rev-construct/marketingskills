# Answer Accuracy: Auditing What AI Says About You

## Contents
- When to run it
- Check the claim next to your link
- The claim ledger
- Brand page set
- Fix the source first
- Report

Visibility counts whether you appear. Accuracy checks what the answer says once you do. A brand can show up in every answer and still be described with last year's pricing, a missing integration, or a limitation it fixed months ago.

Much of an answer is commentary the user never asked for. Profound's analysis of 50,000 responses (Profound, June 2026) found about 47% of response content was unsolicited editorial material: comparisons, rankings, caveats, and recommendations. That editorial layer is where wrong claims about you tend to live.

Profound sells AI visibility tracking, so treat its figures as vendor research. Other trackers that capture answer text for this kind of audit include Ahrefs Brand Radar, Semrush's AI toolkit, Peec AI, Otterly, and ZipTie.

## When to run it

- An assistant states a wrong price, plan limit, feature, or compatibility claim
- Sales hears prospects repeat something false that "ChatGPT said"
- After a repositioning, pricing change, rebrand, or product retirement
- Quarterly for any brand with a regulated, safety, or pricing-sensitive product

## Check the claim next to your link

Being linked does not mean being quoted correctly. An arXiv audit of Google AI Overviews checked 98,020 claims across 7,583 overviews against the pages they cited (arXiv 2605.14021, with a WashU summary, 2026). Findings:

- About **11%** of claims were not supported by the cited page. That is an upper bound; the generous estimate is about **5.3%**. State it as a 5.3-11% range, because the audit could not collect Reddit and YouTube pages, so claims citing them could not be fully checked.
- Only **41.9%** of overviews were fully supported by their cited sources.
- Source credibility did not predict accuracy: authoritative sources were not reliably quoted more faithfully.

So when an AI Overview links to you, **read the sentence next to your link**, not just whether the link is there. Log a wrong or unsupported sentence as a claim in the ledger below, with your cited page as the evidence. An unsupported claim next to your link is also a reason to state the fact more plainly on that page.

## The claim ledger

Capture answers first, then log one row per claim. Record the engine, model or surface, locale, prompt, and capture date for every answer, since a claim you can't reproduce is hard to fix.

| Field | What goes in it |
|---|---|
| Engine and date | ChatGPT (search on), Gemini, AI Overviews, Perplexity, Copilot, Claude; capture date |
| Prompt | Exact wording, plus which prompt family it belongs to (see [prompt-portfolio.md](prompt-portfolio.md)) |
| Claim | The sentence as the model wrote it |
| Claim type | Price, availability, compatibility, feature, limitation, comparison, ranking, recommendation, caveat, sentiment |
| Verdict | One of the seven below |
| Evidence | The current source that confirms or contradicts it |
| Likely source | The page the claim probably came from: your page, docs, a feed, a profile, a third-party article, a forum thread, or unknown |
| Severity | Critical, high, medium, or low |
| Owner | Who fixes the source |

Extract every claim that could change a buying decision, including the ones the user didn't ask about. A question about pricing that comes back with an unprompted "but it lacks SSO" is two claims.

### Seven verdicts

1. **Accurate and current**
2. **Accurate but incomplete**: true, but missing the fact that matters (the free plan exists, but the answer omits its limits)
3. **Ambiguous**: could be read as true or false
4. **Stale**: was true, isn't now
5. **False**
6. **Subjective framing**: an opinion stated as fact ("best for small teams," "hard to set up")
7. **Unverifiable**: no current source either way

Check first-party facts against your own current product material, and claims about the outside world against reliable independent sources. Your preferred marketing wording is not evidence.

### Severity

| Level | Examples |
|---|---|
| **Critical** | Safety, legal, eligibility, price, availability, or compatibility errors that could cause a bad purchase or real harm |
| **High** | False comparisons, invented limitations, stale product facts in high-value prompt families |
| **Medium** | Incomplete or slanted framing that could plausibly change a decision |
| **Low** | Tone and wording that don't change the decision |

Weight severity by exposure too: a medium error that appears in every run of your top commercial prompt outranks a high error in one obscure prompt.

## Brand page set

A few pages carry most of what engines say about you. Keep these accurate, dated, and consistent with each other: **About, pricing, product, support or docs, and comparison pages.**

SE Ranking (a vendor; its AI Overviews on branded searches study, with follow-up posts on X) found that homepages were 71.1% of brand URLs in the organic top 10 but only 36.8% of the brand pages cited in AI Overviews, and that a brand's own site was 33.8% of AI Overview citations on brand SERPs against 17% of the top 10. In other words, the pages Google ranks for your name are not the pages AI Overviews pull facts from.

Audit flow: **pull the cited URLs first** (for your brand prompts and brand searches), then compare them with your rankings. Any cited page that is thin, stale, or not on the list above is where wrong claims are likely to start.

## Fix the source first

The answer is downstream of what the model retrieved or learned. Rewriting your homepage copy rarely fixes a claim that comes from a stale third-party review.

1. **Trace it.** Search the claim's wording, check which sources the engine cited for that answer, and look for the page where the wrong fact lives.
2. **Fix your own sources.** State the correct fact plainly on the page that should own it, with a date: pricing page, docs, changelog, comparison page, help center. Remove or redirect the outdated page. Update feeds and structured data that carry the same fact.
3. **Fix your profiles.** G2, Capterra, app marketplaces, Crunchbase, LinkedIn, and partner directories often hold the stale version.
4. **Ask third parties for factual corrections only.** Send the publisher the correct fact and a source. Don't ask them to remove legitimate criticism.
5. **Retest** the same prompts after a set observation window (4–8 weeks is a reasonable starting point), with a few controlled variants. Report movement over time; one clean run proves nothing.

Never promise that a source fix will change the answer. Models retrain and re-retrieve on their own schedules.

**Off limits:** fabricated corrections, editing Wikipedia about yourself, astroturfed forum posts, and pressuring publishers to pull fair criticism. These break platform rules, and models are getting better at discounting them.

## Report

1. Accuracy rate across the cohort, the riskiest narrative, and the main source problem
2. The claim ledger
3. Owned-source fixes, each with the exact fact and the page that should state it
4. Third-party correction requests, factual and sourced
5. The retest plan and date
6. Unknowns

This audit pairs with the positioning work in [positioning-and-consensus.md](positioning-and-consensus.md): accuracy fixes wrong facts, positioning fixes the wrong story. The AI-accuracy audit loop in **marketing-loops** can schedule it.

---

*Framework lineage: claim ledger, verdict set, and severity scale adapted (re-expressed and restructured) from Profound's MIT-licensed ai-answer-accuracy-auditor skill and its "Parrot Problem" research (June 2026), credited.*
