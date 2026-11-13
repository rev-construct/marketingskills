# Local SEO

Use this reference when the audit or request is about a local business: Google Business Profile, the map pack, citations, reviews, or location pages.

Help local customers find the right business and turn searches into qualified calls, bookings, and visits. Diagnose the specific location and search context before prescribing changes.

## Start With the Business Model

Read existing product context at `.agents/product-marketing.md` (or `.claude/product-marketing.md`, including older `product-marketing-context.md` setups). Ask only for missing facts relevant to the request:

- Business type: customers visit a storefront, staff travel to customers, both, or online only.
- Actual operating locations, staffed hours, service coverage, services, and capacity.
- Website and profile URLs; ownership, verification, duplicates, suspensions, or recent moves.
- Desired outcome and available evidence: qualified calls, bookings, visits, profile performance, Search Console, and location-level conversion data.

Use the requested scope. A profile description request needs a description, not a compulsory full audit. Without access, provide a provisional plan and identify the evidence needed; never report invented profile findings.

For profile eligibility, address visibility, duplicates, categories, and current feature availability, read [profile-and-citations.md](local-seo-profile-and-citations.md). An online-only business needs a different SEO plan. A service area is not a collection of extra storefronts.

## Diagnose the Local Search Problem

Keep the two surfaces separate:

| Surface | Inspect | Evidence to retain |
|---|---|---|
| Maps / local pack | Correct profile, query relevance, searcher distance, reputation | Query, observation date, search location, device/context, profile URL |
| Organic website results | Indexation, relevant location/service page, content, internal links | Query, page URL, Search Console data where available |

Google describes local ranking through relevance, distance, and prominence. Distance varies with the searcher's location; a larger declared service area does not establish a nearer physical location. Do not promise a top-three placement or a fixed ranking uplift.

Compare like with like: the same queries, locations, observation method, and time window. A single search from the owner's office is not evidence of visibility throughout a city. Separate branded from non-branded demand and label estimates, observed facts, and hypotheses.

Prioritize the constraint supported by evidence:

1. Wrong, ineligible, duplicate, unverified, or suspended profile: resolve the actual issue before adding promotional content.
2. Customers cannot contact or visit correctly: repair location facts, hours, destination links, and conversion paths.
3. Relevant demand is not represented: improve accurate categories, service information, and useful location pages.
4. Weak trust or discovery: address genuine customer feedback, relevant citations, and earned local mentions.

## Improve the Profile and Citation Record

Use [profile-and-citations.md](local-seo-profile-and-citations.md) for the requested profile or listing work. Produce field-level edits grounded in real business facts, with the existing value, proposed value, reason, and missing verification.

Build a canonical location record for the real-world name, public contact details, customer-facing hours, profile ID, and matching location URL. Keep a private operating address separate when customers do not visit it. Never publish a hidden home address merely to satisfy a citation checklist.

Citation cleanup should resolve conflicting identities and customer-facing information. Prioritize relevant maps, local/chamber, and industry listings customers actually use. Correct existing records and merge true duplicates through supported processes before creating more listings. For a software product directory campaign, use directory-submissions; its launch prerequisites and incentive rules are not a local Google review policy.

## Earn and Respond to Reviews

Ask customers with genuine experiences for honest feedback through a neutral request and the correct location's review link. Do not select only happy customers, buy reviews, offer incentives, require particular wording, or promise removal of criticism. Google's rules differ from other review platforms (see the referrals skill's review programs reference); read the current [Maps review policy](https://support.google.com/contributionpolicy/answer/7400114?hl=en-GB).

Example request: "Thanks for choosing [business]. If you'd like to share your experience, you can leave a review here: [location review link]. We welcome your honest feedback."

Reply specifically and courteously. For a complaint, acknowledge the concern and offer an appropriate private contact path without exposing customer, medical, financial, or job details. Report a policy violation through the platform's process; an unfavorable genuine opinion is not automatically removable.

Track recurring feedback and service improvements alongside review volume and recency. A rating target must not become a staff quota for soliciting specified review content.

## Build Useful Location and Service Pages

Read [location-pages-and-measurement.md](local-seo-pages-and-measurement.md) when building pages, preparing local schema, or measuring results.

Give each real location a useful destination. A service-area page describes verified service coverage; it must not imply an office that does not exist. Publish a city page only when it adds meaningful local information, evidence, or customer utility. Swapping city names in duplicated text does not create that value.

Route implementation details to the relevant existing skill:

- **The rest of this skill (seo-audit):** crawling, indexing, redirects, speed, and technical diagnosis.
- **site-architecture:** location hierarchy, navigation, and internal links.
- **programmatic-seo:** scaling a justified page pattern backed by real data.
- **schema:** markup implementation after choosing accurate, public business facts.
- **ai-seo:** visibility in AI answers when that is part of the request.

## AI Assistants and Local Search

When the request includes visibility in AI answers, check it as its own surface. Ask each engine "best/top [category] near [area]" for the same areas, and log engine, query, location, and date. Never report one engine as "AI": Yext's study of 491,972 shared cases (Feb-Aug 2026) found all four engines named the same #1 business in only 4% of cases, and four different #1 businesses in 48%.

- **Source mix differs by engine.** In the same Yext study, Gemini leaned most on businesses' own sites (41.9% of citations), ChatGPT on directories (40.9%), and Claude on review sites (20.5%). Match the fix to the engine where the business is missing.
- **Review volume and recent pace matter more than star rating.** Insites' study of 10,000 US local businesses found those named by both ChatGPT and Perplexity averaged 133 Google reviews against 11 for those named by neither, and Local Pack presence was its strongest predictor of being recommended. A secondary summary of the Yext and Insites work (@psinke) reports consensus winners with a median of 568 reviews vs 19 and about 12 new reviews a month vs about 2, and the highest-rated business ranking first only 40% of the time. Treat those last figures as unconfirmed until checked against the primary reports. Keep review requests within the Google policy above; pace comes from asking every customer, not from incentives or gating.
- **Have a website with service-level pages.** Seeably (2026; 6,682 businesses across 25 US markets) found 17.5% of businesses with a website were named vs 4.4% without, and 85.6% were never named. More than half of cited pages were third-party lists and articles. For getting onto "best of" lists, see competitors and public-relations.
- **Skip the technical "AI tricks."** Insites found no meaningful link to being recommended for page speed / Core Web Vitals, FAQ schema, or llms.txt (weak at best). Fix these on their own merits, not as an AI visibility tactic.
- **Check the GBP landing page's opening.** One test (@ownyourserp) found an AI local pack pulling the top paragraph of the GBP landing page, not the GBP description. This is a single test; verify on the business's own queries before relying on it.

Yext, Insites, and Seeably all sell into this space, and their findings are correlations, not proof that a tactic causes a mention. Report them as directional, and for the full AI-answers workflow, use ai-seo.

## Return a Decision and an Actionable Artifact

For an audit or plan, return:

1. Business model and the specific location/search surface assessed.
2. Findings with source, date, customer impact, confidence, and missing evidence.
3. Prioritized changes with a responsible owner and a way to verify completion.
4. The requested artifact: field edits, citation cleanup table, review drafts, location-page outline, or measurement plan.
5. Follow-up measures tied to qualified customer actions rather than rankings alone.

For narrow requests, deliver the artifact directly and state only the relevant assumptions. Drafting a plan does not itself authorize profile changes, messages to customers, or directory submissions; follow the user's existing authorization for execution.

## Sources

Check current platform rules when a recommendation depends on them. The references link directly to the relevant Google documentation, including retired Q&A functionality and the distinction between Schema.org validity and Google rich-result eligibility.
