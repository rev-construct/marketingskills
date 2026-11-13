# B2B Paid Playbook

Cross-platform operating rules for B2B paid acquisition — where sales cycles run 2–24 months, in-platform conversions mislead, and lead *quality* matters more than lead cost. Use this alongside the platform playbooks ([Meta decision system](meta-decision-system.md), [LinkedIn](linkedin-b2b-playbook.md), [Google Search](google-search-playbook.md), [ABM](abm-playbook.md)).

## Contents

- Audiences by Lifecycle Stage (past the funnel)
- Budget by stage
- Leading vs. lagging signals
- Unit economics: breakeven CPL and CPC
- Kill rules
- The optimize-to-quality trap (and the offline conversion loop)
- Lead quality scoring (Urgency / Budget / Fit)
- The scaling quadrant
- Measurement maturity check
- Channel selection

## Audiences by Lifecycle Stage (past the funnel)

TOFU/MOFU/BOFU stops at the conversion. B2B revenue doesn't: open deals, lost deals, product users, and customers are all reachable with ads, because each is a list in your CRM or product data that syncs to LinkedIn, Meta, and Google. Plan paid media around those segments. The stage names follow the CRM lifecycle used in the **revops** skill, and the awareness column uses Schwartz's awareness levels, as in **ad-creative**.

| Audience (CRM segment) | Job | Buyer awareness | Typical offers | KPIs |
|---|---|---|---|---|
| **Out-of-market** (target accounts, no open record) | Be remembered when the need arises | Unaware / Problem-aware | Educational content, a clear point of view | Reach and frequency in the target list, branded search lift |
| **In-market** (high-intent visitors, leads, MQLs) | Turn existing demand into opportunities | Solution / Product-aware | Demos, trials, pricing and comparison pages | Cost per opportunity, pipeline per dollar |
| **Open pipeline** (SQLs and open opportunities) | Help deals already in motion close | Product-aware | Case studies, proof for each stakeholder, events | Win rate and cycle length vs. a holdout |
| **Product users** (free and trial accounts) | Activation: reach the first value moment, then pay | Product-aware | Guided setup, use-case content, upgrade offers | Activation rate, trial-to-paid |
| **Closed-lost and recycled** | Re-engage when timing or circumstances change | Most aware | What's new since they looked, a fresh trial | Reopened opportunities |
| **Customers** | Retention, expansion, and referral | Most aware | New features, adjacent use cases, referral asks | Expansion revenue, net revenue retention |

**Why most B2B budgets need patience at the top:** most buyers aren't in the market at any given moment. Prof. John Dawes's 95:5 rule (Ehrenberg-Bass Institute, with LinkedIn's B2B Institute) estimates roughly 5% of business buyers are in market in a given quarter. He offers it as a mental model, so estimate your own share from how often buyers in your category actually switch or buy. Out-of-market spend is building memory for later, and it pays back over quarters, not weeks.

**Start where the audience is warm and small.** Customers, open pipeline, closed-lost, and product users are lists you already own: cheap to reach, easy to measure, and quick to show results. Prove the system there, then widen to in-market and out-of-market reach, where audiences are larger, costs are higher, and payback is slower.

## Budget by stage

| Audience | Relative budget | Expect results in | Main constraint |
|---|---|---|---|
| Out-of-market | Largest | Quarters (memory, then branded demand) | Needs a distinct point of view and consistent presence |
| In-market | Medium | Weeks | Competitive auctions, high cost per click |
| Open pipeline | Small | In step with the sales cycle | Needs a clean CRM sync |
| Product users | Small | Weeks | Needs product event data |
| Closed-lost and recycled | Small | One to two months | Needs accurate loss reasons and dates |
| Customers | Small | One to two months | Small audiences fatigue quickly |

Weight by motion: product-led teams put more into in-market and product users; sales-led teams with a small, known market put more into out-of-market reach and open pipeline. The audience producing the most *pipeline* doesn't automatically deserve the most *budget*. Fund where pipeline share exceeds budget share and the audience isn't yet saturated, and confirm with a holdout before scaling (see the **attribution** skill on incrementality tests).

## Leading vs. lagging signals

You can't optimize on closed-won when deals close in 6 months. Split every stage's metrics:

- **Leading** (moves in <1 month — optimize on these): CTR, engagement, CPL, cost per qualified lead, accounts reached
- **Lagging** (moves in >1 month — the truth, reviewed monthly/quarterly): pipe-to-spend, influenced revenue, time-to-close, expansion revenue

The leading metric must demonstrably correlate with the lagging one — a proxy metric worth optimizing is measurable, moveable, not an average, and hard to game. If CPL falls while pipeline doesn't move, the proxy broke; fix the proxy, not the ads.

## Unit economics: breakeven CPL and CPC

Derive targets from deal math, not platform benchmarks:

- **Breakeven CPL** = average deal size × lead-to-close rate. ($3,000 ACV × 10% close = $300 CPL.)
- **Breakeven CPC** = target CPL × landing page conversion rate. ($300 CPL × 5% LP conversion = $15 CPC.)

Set the actual target below breakeven by your required margin. Every kill rule and scaling decision keys off this number.

## Kill rules

Two hard rules that remove emotion from pausing decisions:

- **Non-performer rule** (new ads, any time): pause once an ad has spent **2–3× target CPL with zero conversions**. Target CPL $300 → kill at $600–900 spent, no conversions.
- **Maintenance rule** (ads past ~7–14 days): pause when an ad's CPL runs **1.5–2× over target**. Target $300 → kill at $450–600 CPL.

These aren't statistically rigorous — they're repeatable, cheap to apply, and better than deciding by mood. Never pause a producer without a replacement staged (see the swap rules in the [Meta decision system](meta-decision-system.md)).

## The optimize-to-quality trap (and the offline conversion loop)

Smart bidding optimizes toward whatever you call a "conversion." Feed it raw form-fills and it will buy you cheap junk form-fills — CPL improves while pipeline dies. The fix, in order:

1. **Close the offline conversion loop.** Push CRM stage changes (MQL → SQL → opportunity → closed-won) back to the ad platforms — GCLID + offline import on Google, CAPI lifecycle events on Meta, conversion API on LinkedIn. This is the single highest-impact move in a B2B ad account: the algorithm starts buying pipeline instead of form-fills.
2. **Value conversions differently.** A demo request is not an ebook download.
3. **Until offline data flows, keep a human reading lead quality weekly** — job titles and companies, not just CPL.

Reconcile platform-reported conversions against the CRM monthly. When they disagree, **the CRM wins**.

## Lead quality scoring (Urgency / Budget / Fit)

The platform can't see lead quality — score it yourself and rank ads by it:

- **Urgency** (0–3): 0 browsing → 3 burning need with timeline
- **Budget** (0–3): 0 none/no authority → 3 approved and ready
- **Fit** (0–3): 0 not ICP → 3 perfect ICP

Whoever runs the sales calls scores each lead (max 9) and logs it against the originating ad. After ~20 scored calls, **rank ads by average quality score, not CPL or CTR** — the ad with the best CPL is regularly the one producing 3/9 leads. Scale the high-score ads; kill variations whose average drops below ~5.

## The scaling quadrant

Route scaling tactics by your actual constraint:

| | Low effort | High effort |
|---|---|---|
| **High budget** | **Audiences** — bigger audiences, more segments, more frequency | **Geography** — new countries/regions (localization work) |
| **Low budget** | **Ads** — new creative, angles, formats | **Objectives & bids** — change objective or bid strategy to buy cheaper |

- Have budget but no time → work the top row (audiences, then geo).
- Need scale but capped on budget → work the bottom row (better creative and cheaper bidding free up money).

## Measurement maturity check

Before scaling spend, score yourself 1–3 on each: blended pipeline dashboard; per-channel dashboard; conversion tracking (1 = none, 2 = pixel only, 3 = offline conversions flowing); web analytics; a documented, agreed attribution process. Under ~6/15, fix visibility before adding budget — you're flying blind and every optimization is a guess. Fix the lowest score first.

## Channel selection

Five channel families: paid social, paid search, **paid review listings** (G2, Capterra, Software Advice — often skipped, high intent), programmatic (display, audio, CTV, native), and sponsorships (newsletters, podcasts, events, creators). Evaluate on four axes: can you actually target your ICP; media cost (CPC/CPM); reach at your targeting; platform policy for your industry.

Before committing to a new channel, **run a ~$100 test campaign** to learn its real CPC/CPM for your targeting — platform estimates and published benchmarks are consistently wrong for specific ICPs.

---

*Framework lineage: the leading vs. lagging signals, scaling quadrant, measurement maturity check, and channel selection sections are inspired by practitioner playbooks, including Ivan Falco's ads-skills. Benchmarks and thresholds are practitioner-reported starting points — always recalibrate against your own account's first 30 days.*
