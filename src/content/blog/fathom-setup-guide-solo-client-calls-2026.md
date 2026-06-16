---
title: 'How to Set Up Fathom for Solo Client Calls (Free Tier Walkthrough, 2026)'
description: 'The complete setup guide for using Fathom to capture every solo client call — recordings, transcripts, AI summaries, action items. Covers the free tier limits honestly, the workarounds, and when (if ever) you actually need to upgrade.'
pubDate: 'Jun 16 2026'
heroImage: '../../assets/fathom-setup-guide-solo-client-calls-2026.webp'
---

Most solopreneurs end every client call the same way: scribbling action items into a Notion doc while the other person is still on the line, hoping they remembered everything that was decided, then writing a recap email an hour later that maps loosely to what actually happened. It's lossy, slow, and quietly wastes 30-60 minutes per meeting.

**Fathom is the AI meeting capture tool that fixes this for solo operators specifically** — and its free tier is genuinely one of the best free tiers in software today. This is the complete setup walkthrough: every step, every limit, and what to actually do once it's running.

## What Fathom does in 30 seconds

Fathom is a small assistant that silently joins your video calls (Zoom, Google Meet, Microsoft Teams), records the meeting with full transcription, and produces an AI-generated summary with action items within ~90 seconds of the call ending. The summary lands in your email automatically.

You stop taking notes during meetings. You stop writing recap emails after. Both happen automatically.

## The pricing reality (June 2026)

**Free tier — $0/month.** Includes:
- Unlimited meeting recordings
- Unlimited transcripts in 25 languages
- Unlimited storage (forever)
- Instant basic call summaries
- Cross-platform: works on Zoom, Google Meet, Microsoft Teams

The **one real limit** on the free tier: AI-generated advanced summaries + AI action item extraction + CRM integration are capped at **5 meetings per month.** After the 5th call, recordings + basic summaries continue, but the auto-extracted action items and richer AI features stop until next month.

**Premium — $20/month (or $16/month billed annually).** Removes all the AI limits and adds:
- Unlimited AI summaries + action items
- Conversational meeting assistant ("ask Fathom about your last 10 calls")
- Advanced summary customization
- Integration with Slack, Notion, HubSpot, etc.

For most solopreneurs, the free tier covers actual usage. We'll explain the workaround for the 5-meeting AI cap below.

## Setup walkthrough (10 minutes total)

### Step 1 — Create your account

Go to [fathom.ai](https://fathom.ai) → click **Sign up free**. Sign up with your business email (the same one connected to your video conferencing platforms). The signup auto-detects your calendar provider and asks to connect.

### Step 2 — Connect your calendar

Fathom needs read access to your calendar so it knows which meetings to join.

- If you use **Google Calendar**: click "Connect Google Calendar" → sign in → grant read access.
- If you use **Microsoft Outlook**: click "Connect Outlook" → sign in.

Fathom is read-only on your calendar. It cannot create, edit, or delete events. It only watches.

### Step 3 — Pick your meeting platforms

Fathom asks which video platforms you use. Tick whichever apply:

- Zoom
- Google Meet
- Microsoft Teams

Each one you tick requires a brief permission grant. For Zoom this means installing the "Fathom for Zoom" app from the Zoom Marketplace. For Google Meet and Teams, it works via the calendar connection (no separate app required).

### Step 4 — Set the auto-join preferences

This is the most important configuration step. Fathom can either:
- **Auto-join every meeting** on your calendar that has a video link
- **Auto-join only meetings you explicitly mark**
- **Never auto-join — only join when you click a button**

For solopreneurs, the right setting is usually: **auto-join all external meetings, don't auto-join internal meetings** (if you have any internal meetings at all as a solo operator — which usually you don't).

If you want maximum control, set it to "ask me before each meeting" so you can opt out of any specific call.

### Step 5 — Set the recap email destination

Fathom sends the post-call summary by email. Default destination is the email you signed up with. If you want it sent to a different inbox (for example, an organized "client notes" inbox), change it in Settings → Notifications.

For solopreneurs, we recommend keeping summaries flowing to your main inbox and using Gmail filters to auto-label them as "Fathom" so they're easy to search later.

### Step 6 — Test with one call

Schedule a 2-minute test call with yourself (open Google Meet, create a meeting, invite yourself). Add it to your calendar with a video link. Fathom should join the meeting automatically.

Talk for 60 seconds (say a few sentences about a fake project), end the call. Within ~90 seconds, the summary email lands in your inbox with the transcript + summary.

If that worked, the setup is complete. You're now capturing every meeting going forward.

## Daily workflow once it's running

The honest workflow is: **almost nothing.** That's the point.

Before each client call, you do nothing — Fathom joins automatically. During the call, you take no notes — focus on the conversation. After the call:

1. Fathom emails you a summary within ~90 seconds (subject line will be something like "Meeting Summary: [Client Name] - [Date]")
2. You skim the summary while the call is still fresh — verify nothing got missed
3. Copy any action items into your task system (we wrote a [ClickUp solo setup](/blog/clickup-for-solo-project-management-2026/) if you need one)
4. Forward the summary email to the client as your recap — they get a perfect record of what was decided

That's the entire workflow. Maybe 4 minutes per meeting instead of 30-45.

## Handling the 5-meeting AI cap

On the free tier, after your 5th meeting of the month, AI-generated action items stop being auto-extracted. The recording and basic transcript continue indefinitely — you don't lose anything, you just have to do the action-item extraction manually for meetings 6+.

For most solopreneurs taking 4-10 client calls per month, this matters. Three pragmatic workarounds:

**1. Prioritize the AI slots.** Use AI summaries on your highest-stakes meetings (kickoff calls, strategic check-ins, sales conversations). For routine standups or quick syncs, the basic summary is enough — you don't need full AI action-item extraction.

**2. Run the transcript through ChatGPT or Claude.** For overage meetings, copy the transcript Fathom captured (still available even at the AI cap) and paste into ChatGPT or Claude with a prompt like: *"Extract action items from this meeting transcript, group by owner."* Gives you 90% of what the paid Fathom feature does, manually, in 30 seconds. We covered the [ChatGPT vs Claude trade-off for this kind of work](/blog/chatgpt-vs-claude-for-writing-2026/) in a separate article.

**3. Upgrade if it's regularly painful.** If you're consistently above 10 meetings/month and the manual workaround is eating real time, the $20/month Premium upgrade pays for itself in 1-2 saved hours. But don't pre-upgrade — wait until you've felt the friction at least twice.

## When the free tier stops being enough

Honest upgrade triggers:

- You're regularly above 10 client meetings per month → Premium pays back fast
- You want CRM auto-sync (deal context tied to call records) → needs Premium
- You want the conversational "ask Fathom about my last 5 calls" feature → needs Premium
- Your team grows beyond just you (even one collaborator) → needs Team tier ($19/user/mo, 2-user minimum)

Until any of those land, free tier covers the actual work.

## Common pitfalls and how to avoid them

**Pitfall 1: Forgetting to tell the client you're recording.**
Always disclose at the start of the call. Simple: *"Heads up — I have an AI note-taker on this call so I don't have to scribble while we talk. Cool with you?"* Almost everyone says yes. The 1% who say no — turn it off for that specific meeting (Fathom has a "stop recording" button in-call).

**Pitfall 2: Treating the recap email as the final source of truth without reviewing.**
Fathom's AI is good but not perfect. Important commitments and dollar amounts especially should be eyeballed before you forward the recap to a client. 30 seconds of verification prevents an embarrassing correction email later.

**Pitfall 3: Letting the recordings pile up unread.**
The point of the summary is to ACT on what was said. If you collect 50 summaries without reading them, you're back to where you started. Schedule a 10-minute end-of-day pass to skim the day's summaries and convert action items into tasks.

## The bigger point

Most solopreneurs lose time at three points around every client meeting: **before** (prep), **during** (note-taking that breaks focus), and **after** (writing the recap email). Fathom eliminates the "during" and "after" losses entirely for $0/month on the free tier.

Set it up once in 10 minutes. The first time you finish a call and a perfect summary lands in your inbox 90 seconds later — and you forward it to the client as your "official recap" without doing any actual writing — the value is obvious.

---

*Next up: how to combine Fathom + ClickUp + Notion into a single client-operations system. Subscribe to the [blog](/blog) so you don't miss it.*
