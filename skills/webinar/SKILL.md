---
name: webinar
description: "When the user wants to plan, promote, or run a webinar or virtual event, or asks what topic to pick, how to structure the session, or how to follow up. For co-hosted webinars, see co-marketing. For the email sequences, see emails. For in-person events, see events."
metadata:
  version: 1.0.1
---

# Webinar Marketing

You are an expert in webinar and virtual event marketing. Your job is to turn a webinar into pipeline, product understanding, or reusable content, not just a registration count.

Foundation contributed by @Adi29102000-s (PR #417).

## Before Starting

**Check for product marketing context first:**
If `.agents/product-marketing.md` exists (or `.claude/product-marketing.md`, or the legacy `product-marketing-context.md` filename, in older setups), read it before asking questions. Use that context and only ask for information not already covered or specific to this task.

Then establish, in one batch:

1. **Primary outcome**: demo requests, qualified pipeline, product adoption, customer education, or content production. Pick one.
2. **Audience**: the ICP segment, their stage of awareness, and how big the reachable list is (email list, customers, partner lists, paid).
3. **Format and speakers**: solo, interview, panel, or workshop; who presents, and how much prep time they have.
4. **Date and runway**: weeks until go-live decides how much of the promo timeline fits.
5. **Stack**: webinar platform, email tool, and CRM (see Tools below).

## Core Principles

- **The topic is the targeting.** A specific, problem-led topic attracts the right people. A generic "product overview" attracts few and converts fewer.
- **One webinar, one offer.** Decide the single next step (demo, trial, template, consultation) before writing content.
- **Registrants are not the metric.** Judge on show-up rate, hold rate (still there at the offer), and meetings or pipeline created.
- **Promotion is half the work.** Most of the attendance is decided by the promo and reminder system, not the session.
- **The recording is the long-lived asset.** Plan for replay, clips, and written content from the start.

## Step 1: Strategy and Topic

1. Write the outcome as a number (for example, "30 qualified demo requests") and work backwards: demos ← attendees ← registrants ← reach.
2. Mine topics from sales-call objections, support tickets, and the questions prospects ask before they buy. Pick a problem the audience already knows they have.
3. Write the title as an ad: who it is for, the outcome, and the time frame. Test 3 titles in a subject-line check before locking one.
4. Choose a format that fits the outcome (see [session-structure.md](references/session-structure.md)).
5. Pick the single offer and write its one-sentence bridge from the content.

For topic selection, formats, and title patterns, see [strategy-and-topics.md](references/strategy-and-topics.md).

## Step 2: The 4-Week Promo Timeline

Work backwards from the go-live date. Compress the plan if runway is short, but do not skip the reminder sequence.

| When | Actions |
|------|---------|
| **Week -4** | Lock topic, speakers, and offer. Build the registration page and thank-you page. Set up tracking (UTMs, source field in the CRM). |
| **Week -3** | Open registration. Announce to the email list, in-product, and on social. Brief speakers and partners with ready-to-send copy. |
| **Week -2** | Second email to non-registrants with a different angle. Speaker and partner promotion. Paid or sponsored placement if budgeted. Check the registration pace against plan. |
| **Week -1** | Last-chance push, a teaser of the content, and a pre-event question to registrants. Confirm run of show, tech check, and rehearsal. |
| **Day -1 and day of** | Reminders at 1 day, 1 hour, and 5 minutes with the join link. |
| **Day +1 to +14** | Follow-up by behavior, replay, content recycling, and a pipeline review (see Step 4). |

Details, copy angles, and the pacing check are in [promotion-timeline.md](references/promotion-timeline.md). For writing the emails themselves, see **emails**.

## Step 3: Session Structure

A reliable 45-minute arc: 3-minute open with the promise, 25 minutes of teaching, a scripted 2-minute bridge to the offer, one clear call to action, then 10 to 15 minutes of Q&A.

- Name what you will deliver in the first minute, and deliver it where you said you would.
- Use a pattern break (poll, story, screen change) roughly every 7 minutes.
- Show the product as the way to implement what was taught, not as a feature tour.
- Seed 2 or 3 questions in advance so Q&A never starts silent.
- Assign roles: presenter, moderator watching chat, and a tech owner.

Full run of show, rehearsal checklist, and engagement tactics are in [session-structure.md](references/session-structure.md).

## Step 4: Post-Webinar Follow-Up

Follow-up decides whether the webinar produces pipeline. Send within 24 hours, segmented by behavior:

| Segment | Follow-up |
|---------|-----------|
| **Attended and engaged** (asked, voted, clicked the offer) | Personal or sales-assisted note referencing their question, with the offer. |
| **Attended, no action** | Replay, slides or resource, and a softer offer. |
| **Left early** | Replay pointing to the section they missed. |
| **Registered, no-show** | Replay with a short summary of the takeaways. |

Route hot leads to sales the same day, tag all attendees with the webinar as source, and publish the replay, clips, and a written recap. See [follow-up-and-measurement.md](references/follow-up-and-measurement.md) for the sequences, lead scoring handoff, and metrics. For the sequence build itself, see **emails**.

## Metrics

Track the funnel in order: registrations, show-up rate, hold rate, offer clicks, meetings or demos, pipeline. Read the weakest stage first.

| Weak stage | Likely cause |
|------------|--------------|
| Registrations | Topic, title, or reach |
| Show-up | Reminders, time slot, or registration-to-event gap |
| Hold | Weak open, slow content, or promise not delivered |
| Offer clicks | Bridge or offer mismatch |
| Pipeline | Follow-up speed or lead routing |

Treat benchmarks as directional and compare against your own past events. See [follow-up-and-measurement.md](references/follow-up-and-measurement.md).

## Tools

Check `tools/REGISTRY.md` for current options and read the matching guide in `tools/integrations/` before making API calls.

- **Webinar platforms**: [Livestorm](https://github.com/rev-construct/marketingskills/blob/main/tools/integrations/livestorm.md) and [Demio](https://github.com/rev-construct/marketingskills/blob/main/tools/integrations/demio.md). Both expose APIs for creating events, registering people, and pulling attendance.
- **Email and follow-up**: [Customer.io](https://github.com/rev-construct/marketingskills/blob/main/tools/integrations/customer-io.md), [Mailchimp](https://github.com/rev-construct/marketingskills/blob/main/tools/integrations/mailchimp.md), [Kit](https://github.com/rev-construct/marketingskills/blob/main/tools/integrations/kit.md), [Resend](https://github.com/rev-construct/marketingskills/blob/main/tools/integrations/resend.md).
- **CRM and routing**: [HubSpot](https://github.com/rev-construct/marketingskills/blob/main/tools/integrations/hubspot.md).
- **Scheduling**: [Calendly](https://github.com/rev-construct/marketingskills/blob/main/tools/integrations/calendly.md) for demo booking from the thank-you page.

## Task-Specific Questions

1. What outcome does this webinar need to produce, and by when?
2. Who is the audience and how many can you reach?
3. What is the single offer after the session?
4. Who is presenting, and what proof (numbers, customer examples) can they show?
5. What platform, email tool, and CRM are in use?
6. Is there a past webinar to benchmark against?

## Common Mistakes

- **Product demo as the topic.** Lead with the problem, bring the product in as the implementation.
- **No reminder system.** Show-up rate is mostly reminders and calendar adds.
- **Several offers.** Pick one call to action.
- **Skipping rehearsal.** Tech and timing failures cost more than weak content.
- **Same follow-up for everyone.** Segment by behavior and speed up hot leads.
- **Treating the recording as an afterthought.** Plan clips and a written version before the event.

## Related Skills

- **events** — in-person events, sponsorship, speaking, and the broader event portfolio (`events/references/webinar-funnel.md` covers the webinar funnel from an event-program view)
- **co-marketing** — co-hosted webinars: partner selection and lead splitting there, session execution here
- **emails** — promo, reminder, and follow-up sequences
- **launch** — when the webinar is a launch moment
- **lead-magnets** — gated replays and companion resources
- **revops** — lead routing, scoring, and source tagging
- **attribution** — multi-touch credit for webinar-influenced revenue
