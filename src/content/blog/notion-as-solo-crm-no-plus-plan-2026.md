---
title: 'How to Use Notion as a Solo CRM (No Plus Plan Needed) — 2026 Setup Guide'
description: 'Notion''s free tier is enough to run a CRM for a one-person business. 30-minute setup for contacts, deals, follow-ups, client notes. No upgrade needed.'
pubDate: 'Jun 16 2026'
heroImage: '../../assets/notion-as-solo-crm-no-plus-plan-2026.webp'
---

Most CRM advice for solopreneurs follows the same playbook: pay for HubSpot Free (which guides you toward paid quickly), buy a $40 Notion template from someone on Gumroad, or build something that looks pretty but breaks the moment you try to actually USE it.

There is a simpler path. **Notion's free tier — the $0 personal plan — already has every database, view, and field type you need to run a working CRM for a one-person business.** No upgrade. No template purchase. About 30 minutes to set up, then it runs forever.

This is the lean, no-fluff setup. The kind that holds up after 6 months because it doesn't try to be everything.

## What this CRM needs to do (and what it doesn't)

A solopreneur CRM has to do four things well:

1. **Remember every person who's reached out** — name, email, where they came from, when you last talked
2. **Track active deals** — what stage each prospect is in, what the next action is
3. **Surface follow-ups** — anyone who's been sitting in "waiting" for too long without a touchpoint
4. **Hold client context** — notes from calls, deliverables, decisions made, things that matter for the next conversation

Anything beyond those four (automated email sequences, lead scoring, integrations with 47 other tools) is what HubSpot and Salesforce charge $50+/month for. Most solopreneurs don't need them in the first 2 years. When you do, you upgrade. Until then, the four above are enough — and Notion handles all four on the free tier.

## The setup, step by step

Sign up at notion.so → pick the free **Personal** plan if asked. Once you're inside Notion, do the following.

### Step 1 — Create the top-level page

In the left sidebar, click **+ Add a page**. Name it `CRM`. That's your root.

Inside the CRM page, you'll build three databases. We'll do them one at a time.

### Step 2 — Build the Contacts database

Inside the CRM page, type `/database` and choose **Database — Full page**. Name it `Contacts`.

Add these columns (properties):

- **Name** — title field, already there
- **Email** — type: Email
- **Phone** — type: Phone
- **Company** — type: Text (or Relation if you want to link to a Companies database later)
- **Source** — type: Select, with options: `Referral`, `Cold inbound`, `LinkedIn`, `Twitter`, `Website`, `Other`
- **First contact** — type: Date
- **Last touch** — type: Date
- **Status** — type: Select, with options: `Lead`, `Active`, `Won`, `Lost`, `Dormant`
- **Tags** — type: Multi-select (for industry/vertical)
- **Notes** — type: Text

That's the contact database. Every person who reaches out gets one row.

### Step 3 — Build the Deals database

Back on the CRM page, add another database. Name it `Deals`.

Properties:

- **Project name** — title
- **Contact** — type: Relation, link to the Contacts database
- **Stage** — type: Select, options: `Inquiry`, `Discovery`, `Proposal`, `Negotiating`, `Won`, `Lost`
- **Value** — type: Number, format: Currency (set to your currency)
- **Expected close date** — type: Date
- **Next action** — type: Text
- **Next action due** — type: Date
- **Probability** — type: Number, format: Percent (your gut estimate)

Then create two views on this database:
- **Pipeline view** (Board, grouped by Stage) — your kanban
- **Follow-ups view** (Table, filtered to Next action due is on or before today, sorted by due date ascending) — your action list every morning

### Step 4 — Build the Interactions log (optional but worth it)

Add a third database. Name it `Interactions`.

Properties:

- **Summary** — title (e.g., "Discovery call — Acme Co")
- **Contact** — type: Relation, link to Contacts
- **Deal** — type: Relation, link to Deals
- **Date** — type: Date
- **Type** — type: Select: `Call`, `Email`, `Meeting`, `Message`, `Note`
- **Notes** — type: Text (this is where you capture what was said and what was decided)

Every meaningful touchpoint gets a row. Cheap to maintain, invaluable when you need to remember what you told Acme about pricing 4 weeks ago.

### Step 5 — Set up the daily view

Go back to the CRM root page. At the top of the page, add a linked view of the Deals database using `/linked database view` → pick Deals → choose Table view → filter: Next action due is "Today" OR "Past." Title this view `Today's actions`.

This becomes the single thing you open every morning. Whatever's there is what gets worked on today. If the list is empty, you spend the morning on outreach or content. Either way, the CRM tells you.

## The 30-minute version that's still enough

If even the above feels like too much, skip the Interactions log and the Companies relation. Build only **Contacts + Deals**, set up the Pipeline kanban view and the Follow-ups view, and call it done. That's 20 minutes. It will still outperform 80% of solopreneur CRM setups (because most solopreneurs have no CRM at all).

## What this setup is NOT for

Notion-as-CRM is a deliberately lightweight tool. It is not the right call when you need:

- **Email open/click tracking** — no native support. Use a dedicated email tool like Mixmax or Streak (both have free tiers) if this matters.
- **Automated email sequences** — Notion can't send emails on a schedule. Use a sequencer like Mailshake or Lemlist when you start doing real outbound.
- **Phone call dialing from the CRM** — not supported. Click-to-call from a separate tool.
- **Advanced reporting / forecasting** — Notion has basic rollups and counts, but if you need pipeline-velocity analysis or cohort revenue forecasting, you've outgrown this setup. Time for a paid CRM tier — HubSpot Sales Hub, Pipedrive, or similar.

For most solopreneurs in months 1-24 of their solo business, the Notion setup above covers 95% of what a paid CRM would.

## The trigger for upgrading off Notion

When to graduate from Notion CRM to a real paid CRM:
- You have 50+ active deals at any time
- You spend more than 1 hour/week manually updating CRM data
- You're hiring even a part-time VA or sales assistant (collaborative editing in Notion is fine but multi-user CRM workflows are smoother elsewhere)
- You need real email sequencing built into the CRM, not bolted on

Until you hit one of those, Notion is the right answer.

## The bigger point

Most solo founders skip CRMs entirely for the first year — then lose track of conversations, miss follow-ups, and let warm leads go cold. The reason isn't laziness. It's that the "real CRM" options (HubSpot, Salesforce, Pipedrive) feel like a heavy committment for a one-person operation, so people just don't start.

Notion solves this by being light enough that you actually use it. Three databases, four views, no monthly cost, no migration risk. Build it in 30 minutes today. The first time you remember a client detail you would have otherwise forgotten — and look professional doing it — the system pays itself back.

---

*Want more single-tool setup guides for solopreneurs? We've also published walkthroughs for [running a ClickUp-based solo PM system](/blog/clickup-for-solo-project-management-2026/) and [automating Friday admin with Make.com](/blog/automate-friday-admin-with-make-com-2026/). Subscribe to the [blog](/blog) for the full library.*
