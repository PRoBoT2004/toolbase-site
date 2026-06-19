---
title: 'How Indian Solopreneurs Should Take Foreign Client Payments in 2026'
description: 'Stripe vs Razorpay vs Wise for Indian solo founders taking foreign payments. Real fees, GST treatment, and what to actually use at each revenue stage.'
pubDate: 'Jun 16 2026'
heroImage: '../../assets/india-payments-stripe-razorpay-wise-2026.webp'
---

Almost every "how to receive international payments in India" guide was written by a US-based content writer who Googled it. The result is generic advice that ignores GST, glosses over LRS limits, and recommends whichever platform pays the highest affiliate commission. None of it survives contact with an Indian CA.

This is the honest version. Three real options, one recommendation per revenue stage, and the GST conversation nobody else explains.

## The three platforms worth comparing

Solo founders in India taking foreign client payments have three working options in 2026: Wise Business (formerly TransferWise), Razorpay International, and Stripe via the India entity (or Stripe Atlas US LLC for the small subset who genuinely need it).

PayPal exists. It is not on this list on purpose. The withdrawal fee, the FX spread, the dispute system, the seller-disadvantage policies, every part of using PayPal as an Indian freelancer costs you money or stress. Skip it.

## What everyone gets wrong about GST

The single biggest mistake first-time Indian solopreneurs make: assuming foreign clients equal no GST liability. Half-right. The export of services from India is technically zero-rated under GST, but only if you hold an LUT (Letter of Undertaking) filed with the GST department. Without it, you owe 18% GST on every foreign invoice. Get the LUT filed before you start invoicing anyone. Your CA can do it in an afternoon for around ₹2,000.

Equally misunderstood: receiving USD into your Indian bank does NOT automatically count as export of services. You need a FIRC (Foreign Inward Remittance Certificate) for each transaction, or a single annual one covering all receipts. Some platforms generate FIRCs for free. Others charge per certificate. Wise gives them away. Stripe charges for them past a certain volume.

## Quick comparison (mid-2026 directional numbers)

| | Wise Business | Razorpay International | Stripe (India) |
|---|---|---|---|
| Fee per transaction | ~0.5% + small fixed | ~3% all-in | ~4.3% + ₹3 |
| FX spread above mid-market | minimal | moderate | moderate |
| Settlement to INR account | T+1 to T+3 | T+2 to T+5 | T+7 standard |
| FIRC auto-generated | yes, free | yes, free | yes (paid past free tier) |
| Setup time | 1-2 working days | 1-2 working days | 2-3 working days |
| Min monthly fee | none | none | none |
| Best for | low-volume, USD-heavy | mid-volume, mixed | high-volume, recurring |

Always pull current rates from each platform before opening an account. Fee structures update quarterly and 2-3% on the wrong platform compounds into real money fast.

## Wise Business: the default pick under ₹30 lakh revenue

Wise is the cheapest way to receive small-to-medium foreign payments into India today. The fee structure looks more like a bank wire than a payment processor: a tiny percentage plus a flat fee, with FX at the actual mid-market rate. For a $2,000 invoice, you'll lose roughly $12-15 total in fees. Stripe takes $90+ on the same transaction.

The catch is that Wise is not a card processor. You can't drop a "Pay with Card" button on a checkout page. You send an invoice link, the client wires the money, INR lands in your Indian bank account about 48 hours later.

For solo consultants billing 2-10 invoices per month, this matches the actual workflow exactly. For SaaS founders selling self-serve, it doesn't.

Open a Wise Business account at [wise.com/business](https://wise.com/business). Verification is fully online, takes 1-2 working days, and costs about ₹4,000 one-time. There's no monthly fee after that.

## Razorpay International: the middle option

Razorpay International gives you the smoothest checkout experience of the three and supports card payments from international clients. The fee is bundled at roughly 3% all-in, which sits between Wise and Stripe.

Where Razorpay wins: Indian KYC is built in, the dashboard speaks Indian English, and their support team understands GST and TDS implications without you explaining basic Indian tax law to them first. Settlement to your INR bank account is T+2, faster than Stripe.

Where it loses: the all-in 3% is significantly more than Wise's 0.5% on larger transactions. On a $5,000 invoice, you pay $150 to Razorpay vs about $30 to Wise. That difference is two hours of your billed time.

Right fit: you sell digital products or SaaS to international customers and need a real checkout flow, not invoice-based billing.

## Stripe: only worth it past a certain volume

Stripe via the India entity works, but the international transaction fee is the highest of the three at 4.3% plus ₹3 per transaction. It only earns its keep when you have either:

1. Recurring subscription revenue, where Stripe's billing engine saves you significant developer time, OR
2. Customer-facing checkout where Stripe's conversion rate (industry-leading by roughly 10-15% over alternatives) outweighs the fee gap.

Avoid Stripe Atlas (US LLC) unless your CA explicitly recommends it. Yes, it gives you a US bank account and avoids Indian payment friction. It also creates US tax filing obligations, makes Indian tax treatment murky, and adds ₹40,000-80,000/year in compliance cost. For most solo founders billing under ₹50 lakh/year from India, the Indian Stripe entity is simpler.

## What to actually use, by revenue stage

**Under ₹10 lakh/year of foreign revenue:** Wise Business. Single platform, lowest fees, simplest GST trail. This covers most freelancers in their first two years.

**₹10-50 lakh/year, invoice-based consulting:** still Wise Business. The fee savings vs Razorpay add up to real money at this volume.

**₹10-50 lakh/year, with self-serve checkout (SaaS or digital products):** Razorpay International. The checkout flow plus Indian-native tax support outweighs the 2.5% fee gap.

**₹50 lakh+/year with recurring revenue and a dev resource:** Stripe via India entity. Subscription billing, dunning, dispute handling, these become worth the fee at scale.

## The conversation to have with your CA before opening any account

Three questions you need answered in writing (email is fine) BEFORE picking a platform:

1. "Have you filed the LUT for this financial year?" Without it, every foreign invoice owes 18% GST you'll have to reclaim later.
2. "How will FIRCs be reconciled at year-end?" Your CA needs to map every foreign receipt to an Indian invoice for the export-of-services claim.
3. "What's our TDS exposure?" Some foreign clients withhold US tax (W-8BEN territory). Your CA needs to credit it against your Indian liability or you pay twice.

If your current CA hasn't worked with export-of-services clients before, find one who has. The wrong CA can cost you 20-30% of your foreign revenue in incorrectly-classified GST and missed deductions. This is the most expensive small mistake you can make as an Indian solopreneur.

## Common mistakes worth avoiding

Mixing personal and business accounts. Open a separate current account specifically for foreign receipts. Your CA will need clean trails come March.

Picking the platform with the prettiest dashboard. UX matters less than fee structure at solo-founder volumes. You'll log in twice a month at best.

Assuming PayPal "works." It works in the sense that money arrives. It costs you 4-7% all-in, the FX is brutal, and disputes go against the seller by default.

Filing GST returns without categorizing foreign revenue separately. Indian GST treats foreign vs domestic differently. Wrong classification triggers audit flags that take weeks to resolve.

## The pattern that matters

Choosing how to receive foreign payments is one of those quiet decisions that compounds over years. Pick well and you keep an extra 2-4% of every invoice for the next decade. Pick badly and you spend hours each quarter cleaning up reconciliation issues with your CA. For most Indian solo founders starting out, Wise Business is the right answer. Upgrade only when you have a specific reason, never because Stripe looks cooler.

---

*If you're sorting out the rest of your money workflow, the [Freelance Rate Calculator](/tools/freelance-rate-calculator/) helps you price work in any currency. More India-specific solopreneur guides on [the blog](/blog).*
