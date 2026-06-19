---
title: 'Automate Your Solo Friday Admin with Make.com: 7 Scenarios (Free Tier-Friendly)'
description: '7 Make.com scenarios for solopreneur Friday admin, invoicing, follow-ups, content, metrics. Two run on the free tier; the full set fits under $9/month.'
pubDate: 'Jun 15 2026'
heroImage: '../../assets/automate-friday-admin-with-make-com-2026.webp'
---

Friday afternoon for most solopreneurs looks the same. You finish your last meeting, look at your calendar, and realize you have 90 minutes of "admin" to clear before the weekend. Logging the week's Stripe payments. Sending invoice reminders. Replying to two emails that should have been sent on Tuesday. Drafting a status note to a client. Updating your CRM with one new lead you forgot to file.

It adds up to roughly 4 hours a week for me when I do it manually. That's a quarter of a working day. Every week. For the rest of your operating life.

This article is the playbook I built to give that quarter-day back. **Seven Make.com scenarios** that handle the recurring admin work of a one-person business, designed to fit comfortably under the **$9/month Core plan**, and two of them run perfectly on the **free tier** if you want to test the approach at zero cost first.

You can build all of these yourself in under an hour. The full credit-cost math is included so you know exactly what each scenario consumes.

[Sign up free at Make.com →](https://www.make.com/en/register?pc=toolbase)

## Why Make.com for solo admin specifically

Make is a workflow automation platform. You build scenarios on a visual canvas: a trigger (something happens), then a series of modules (do this, then this, then this), and the platform runs them silently in the background on your behalf. There's a generous free tier (1,000 credits/month, 2 active scenarios) and a $9/month Core plan that lifts both limits.

For solo admin work specifically, three things make Make a good fit:

1. **Triggers cover most common solo apps natively**, Stripe, Calendly, Gmail, Google Sheets, Notion, Slack, ClickUp, Airtable, RSS feeds, webhooks. You almost never need to write code.
2. **Visual canvas makes it easy to see what's happening**, when something breaks, you can see which step misfired in seconds.
3. **The credit-pricing model is generous for simple scenarios**, a typical Friday-admin automation costs 5–8 credits per run, which lets you run dozens of scenarios per month without coming close to the Core plan's 10,000-credit ceiling.

If you've never used Make before, the [free tier signup](https://www.make.com/en/register?pc=toolbase) takes about 2 minutes and you can build your first scenario in 10. Worth doing before you read further, the rest of this article assumes you've at least seen the canvas.

![A typical solo Friday admin desk, the recurring tax this article is built to eliminate.](../../assets/friday-admin-makecom-hero.webp)

## How to read the scenarios below

Each scenario includes:

- **The job to be done**, what the automation accomplishes
- **The modules**, the chain of steps from trigger to output
- **Credit cost per run**, measured on my actual instances
- **Runs per month**, typical solo usage
- **Monthly credit footprint**, total impact on your plan
- **Free-tier ready?**, yes if it fits within Make's 1,000-credit / 2-active-scenario free tier

Credit estimates are conservative, real usage may be 10–20% lower because filters don't always fire. If you want to verify, Make's scenario detail page shows the credit consumption for every run.

## Scenario 1: New Stripe payment → bookkeeping row + invoice file

**The job:** Every time a client pays an invoice via Stripe, automatically write the payment to a Google Sheet (your "money in" log) and rename the PDF invoice to a consistent format in Google Drive.

**Modules:**
1. **Trigger:** Stripe → New successful charge
2. **Google Sheets** → Add a row (date, client name, amount, invoice ID)
3. **Google Drive** → Search for invoice file matching invoice ID
4. **Google Drive** → Rename file to `Paid-YYYY-MM-DD-ClientName-Amount.pdf`

**Credit cost per run:** ~4 credits
**Runs per month:** ~12–20 (depends on your invoicing cadence)
**Monthly credit footprint:** 50–80 credits
**Free-tier ready?** Yes

**Why it matters:** You stop hunting for "did Acme pay yet?" in three places. The Google Sheet is your one source of truth, updated within seconds of every payment. Your bookkeeper or your future self will thank you.

## Scenario 2: Calendly booking → kickoff folder + welcome email + ClickUp task

**The job:** When a new client books a kickoff call via Calendly, automatically: create a project folder in Google Drive with subfolders, send them a personalized welcome email with prep questions, and create a kickoff-prep task for me in ClickUp.

**Modules:**
1. **Trigger:** Calendly → New booking (filtered to your "Kickoff call" event type)
2. **Google Drive** → Create folder named after client
3. **Google Drive** → Create 3 subfolders inside: `01-Brief`, `02-Deliverables`, `03-Invoices`
4. **Gmail** → Send a templated email to the booker with your prep questions
5. **ClickUp** → Create a task in your "Onboarding" list titled "Prep for {Client Name} kickoff"

**Credit cost per run:** ~7 credits
**Runs per month:** ~4–8
**Monthly credit footprint:** 30–60 credits
**Free-tier ready?** Yes

**Why it matters:** Every kickoff you've ever done has the same 5-step prep ritual. This automation eats that ritual entirely. You go from "got a booking, now I have to remember 5 things" to "got a booking, the system already handled the 5 things, I just show up to the call."

## Scenario 3: Friday recap email to yourself

**The job:** Every Friday at 5pm, automatically pull the week's tasks marked "Done" from ClickUp (or Notion), the week's Stripe revenue, and any new email subscribers, then email the summary to yourself for end-of-week reflection.

**Modules:**
1. **Trigger:** Make → Schedule (every Friday 17:00)
2. **ClickUp** → Get tasks where Status = Done AND Date Closed = This Week
3. **Stripe** → List charges where date range = past 7 days
4. **Mailchimp** (or ConvertKit) → Get new subscribers in past 7 days
5. **Tools → Text Aggregator** → Compile a clean summary
6. **Gmail** → Send "Week of {date}, Recap" to yourself

**Credit cost per run:** ~6 credits
**Runs per month:** 4 (weekly)
**Monthly credit footprint:** 24 credits
**Free-tier ready?** Yes

**Why it matters:** Most solopreneurs end the week with a vague "yeah, that was a busy one" feeling. This automation forces a concrete weekly reflection moment without requiring discipline from you. Over 12 weeks of recaps, you start to see patterns: which days are most productive, which clients eat the most time, what your real weekly cadence looks like.

## Scenario 4: Invoice older than 14 days → polite follow-up email

**The job:** Every Monday, automatically check your Stripe (or invoicing tool) for unpaid invoices older than 14 days. For each one, send a friendly, professional follow-up email to the client referencing the invoice number.

**Modules:**
1. **Trigger:** Make → Schedule (every Monday 09:00)
2. **Stripe** → List unpaid invoices where created_date < (today − 14 days)
3. **Iterator** → Loop through each unpaid invoice
4. **Filter** → Only continue if status ≠ "void"
5. **Gmail** → Send templated follow-up email with invoice link

**Credit cost per run:** ~8–12 credits (depends on how many overdue invoices)
**Runs per month:** 4 (weekly)
**Monthly credit footprint:** 40–60 credits
**Free-tier ready?** Yes (just enough, leaves headroom for the other two)

**Why it matters:** Chasing late payments is the worst part of solo work, awkward, time-consuming, easy to put off. The automation does the awkward part for you using a warm, professional template, and you stay focused on the actual work. The template I use:

> *Subject: Quick check on invoice #{invoice-number}*
>
> *Hi {first-name}, just a friendly nudge that invoice #{number} from {date} is sitting unpaid. No rush, just wanted to make sure it didn't slip through your inbox. Here's the link again: {invoice-link}. Let me know if anything needs adjusting on the format.*
>
> *Thanks!*

## Scenario 5: New email subscriber → CRM contact + tag

**The job:** When someone joins your email list via Mailchimp/ConvertKit/Beehiiv, automatically: create a contact in your CRM (or a Notion database), tag them by where they joined from, and trigger a personalized welcome sequence if they joined from a specific page.

**Modules:**
1. **Trigger:** Mailchimp / ConvertKit / Beehiiv → New subscriber
2. **Filter** → Source page = "/lead-magnet-name"
3. **Notion** (or HubSpot, Pipedrive, etc.) → Create page in "Contacts" database with name, email, source, date
4. **Mailchimp** → Add tag based on source
5. **Optional Gmail** → Send personalized welcome if source = "high-intent page"

**Credit cost per run:** ~4 credits
**Runs per month:** depends on your lead flow, anywhere from 10–200
**Monthly credit footprint:** 40–800 credits
**Free-tier ready?** Yes if your subscriber flow is under ~150/month; otherwise sits comfortably on Core

**Why it matters:** Your CRM stays current without you ever thinking about it. Every audience-building moment downstream (segmenting, personal outreach, looking up who someone is when they reply to a newsletter) is unblocked.

## Scenario 6: RSS feed → AI summary → email digest

**The job:** Pull articles from your favorite industry RSS feeds daily, have an AI module summarize each, and email yourself a concise digest. Cuts your "stay up to date" reading time from an hour to 5 minutes.

**Modules:**
1. **Trigger:** Make → Schedule (daily 07:00)
2. **RSS** → Retrieve articles from past 24 hours across your chosen feeds (e.g. Stratechery, The Verge, your industry niche feeds)
3. **Filter** → Only continue if title contains relevant keywords (optional, helps cut noise)
4. **OpenAI / Anthropic** → Summarize each article in 2 sentences
5. **Tools → Text Aggregator** → Compile all summaries into one digest
6. **Gmail** → Send the digest to yourself

**Credit cost per run:** ~10–15 credits (AI modules consume more)
**Runs per month:** 30 (daily), but you can drop to weekdays-only (22 runs) to save credits
**Monthly credit footprint:** 220–450 credits
**Free-tier ready?** Daily: no. Weekdays-only: yes if you skip a few other scenarios.

**Why it matters:** Doom-scrolling industry news is one of the biggest hidden time sinks for solo operators. This scenario gives you the headlines + the key point in one daily digest delivered to your inbox, without you ever opening Twitter, Hacker News, or your feed reader.

## Scenario 7: Daily yesterday-metrics roll-up

**The job:** Every morning, pull yesterday's key metrics from Google Analytics, Stripe, and your email platform, and email yourself a one-page dashboard so you start the day with awareness of where the business stands.

**Modules:**
1. **Trigger:** Make → Schedule (daily 08:00)
2. **Google Analytics 4** → Get yesterday's sessions, top 3 source/medium combos
3. **Stripe** → Sum yesterday's charges
4. **Mailchimp / ConvertKit** → Get yesterday's new subscribers + open rate of any sent campaign
5. **Tools → Text Aggregator** → Format into a clean text email
6. **Gmail** → Send "Yesterday: {date}" to yourself

**Credit cost per run:** ~7 credits
**Runs per month:** 30
**Monthly credit footprint:** ~210 credits
**Free-tier ready?** Borderline, fits if you keep this and Scenario 3 (Friday recap) as your only two active scenarios

**Why it matters:** You stop having to "check the dashboards", they come to you. Most days the answer is "business is fine, nothing to do." When something IS off, you see it in the morning instead of three days later.

![Seven scenarios → one quiet Friday afternoon back.](../../assets/friday-admin-makecom-scenarios.webp)

## The total monthly credit math

If you run **all seven scenarios** at typical solo volume:

| Scenario | Monthly credits |
|---|---|
| 1. Stripe payment logging | 50–80 |
| 2. Calendly kickoff onboarding | 30–60 |
| 3. Friday recap email | 24 |
| 4. Invoice follow-ups | 40–60 |
| 5. New subscriber routing | 40–800 (varies) |
| 6. RSS daily digest | 220–450 |
| 7. Daily metrics roll-up | ~210 |
| **Total (typical)** | **~600–1,700** |

At typical solo volume (smaller subscriber flow, daily digest enabled), you're looking at **roughly 1,000–1,500 credits per month**. The free tier provides 1,000 credits, so 2-3 of these will fit there indefinitely. Once you add the rest, you'll want **Core at $9/month**, which gives 10,000 credits, leaves you with massive headroom for the next 5-10 scenarios you'll inevitably want to build.

## What to start with on the free tier

If you're just starting, build these two first on the free tier:

1. **Scenario 1 (Stripe → bookkeeping)**, high-leverage, very low credit cost, runs you'll feel immediately
2. **Scenario 3 (Friday recap email)**, low credit cost, weekly cadence, deeply rewarding to receive

Run them for two weeks. If they feel good, [upgrade to Core](https://www.make.com/en/register?pc=toolbase) and build the other five in an afternoon. The $9/month pays itself back the first time you don't have to chase a late invoice.

## A few things I wish I'd known when I started

**1. Use scenario templates as starting points.** Make has a library of 100+ pre-built scenarios. Search for "Stripe Google Sheets" or "Calendly Slack", find the closest match, clone it, swap in your apps and credentials. Saves ~30 minutes per scenario.

**2. Always add a "test" path before going live.** When you build a new scenario, add a Filter early that only proceeds if a flag in your trigger data is set to "test." Run a few test cases first, confirm the output looks right, then remove the filter.

**3. Set up email alerts for failed runs.** In each scenario's settings, enable the "Notify me of failures" toggle. That way if something breaks (an API key expires, a service goes down), you get an email instead of silently missing runs for three weeks.

**4. Build during a quiet hour, not Friday.** It's tempting to build automations on the same Friday afternoon you're trying to escape from. Don't, your judgment is tired by then. Build them Tuesday morning when you're sharpest, ship them by Wednesday, and let them run that Friday.

## The bigger point

Friday admin isn't a productivity problem. It's a recurring system problem. Each task is small individually, but together they form a recurring tax on every working week of your solo career.

You can pay that tax in 4 hours of your time every week forever, or you can pay it once, in 60 minutes of building these scenarios, and then never again.

**Start free:** [Make.com →](https://www.make.com/en/register?pc=toolbase). Build scenarios 1 and 3 in your first hour. Let them run for two weeks. If they earn your trust (they will), upgrade to Core and finish the playbook.

---

*Want more practical automation playbooks like this? Next up: how I built a complete client-onboarding system in Notion + Make for under $15/month. Subscribe to the [blog](/blog) so you don't miss it.*

*This post contains affiliate links. We only recommend tools we'd use ourselves, Make.com is what I run my own operations on (see the [full Make.com vs Zapier cost breakdown](/blog/make-vs-zapier-for-solopreneur-automation-2026/) for why).*
