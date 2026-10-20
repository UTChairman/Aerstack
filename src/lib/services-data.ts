// Generated from the live site. Each service page has its own headings, facts,
// steps, pricing and FAQ — do not share these across services.
export type FaqItem = { q: string; a: string };
export type ServiceStep = { n: string; title: string; body: string[] };
export type ServicePlan = { name: string; price: string; features: string[] };
export type ServicePage = {
  slug: string; title: string; tagline: string; heroCta: string;
  benefitsHeading: string; what: string[]; benefits: string[];
  detailsHeading: string; factsIntro: string; facts: string[];
  worksHeading: string; steps: ServiceStep[];
  pricingHeading: string; pricingCta: string; pricingToggle: string[]; plans: ServicePlan[];
  faqHeading: string; faq: FaqItem[];
};

export const SERVICE_PAGES: ServicePage[] = [
  {
    "slug": "service-ilr",
    "title": "Instant Lead Response System",
    "tagline": "78% of buyers go with the first company that responds. The average marketing agency takes 24 to 72 hours. We get you there in under 60 seconds.",
    "heroCta": "GET A FREE DEMO",
    "benefitsHeading": "What Is the Instant Lead Response System?",
    "what": [
      "The Instant Lead Response System connects to every place a lead can find your agency and fires a personalised response to every single enquiry in under 60 seconds.",
      "No manual work. No delays. No missed opportunities because someone was busy.",
      "The moment a lead raises their hand — the system is already talking to them. Personally. Instantly. Every time."
    ],
    "benefits": [
      "Instant Response",
      "No Missed Leads",
      "Multi-Channel Follow-Up",
      "AI Personalisation",
      "Automatic Qualification",
      "More Booked Calls"
    ],
    "detailsHeading": "Why Agencies Are Losing Deals They Should Be Closing",
    "factsIntro": "Not opinions. Documented facts.",
    "facts": [
      "Responding within 5 minutes makes you 21x more likely to close that lead. Most agencies respond in 24 to 72 hours.",
      "Only 27% of leads ever get contacted at all. For every 10 leads you generate, 7 hear nothing back from you.",
      "80% of sales close after 5 or more follow-up touches. The average agency stops at 2.",
      "Your leads are not going to a better competitor. They are going to a faster one."
    ],
    "worksHeading": "Here Is What Happens After We Go Live",
    "steps": [
      {
        "n": "01",
        "title": "Discovery Phase",
        "body": [
          "Seconds 1 to 60 Lead arrives. System fires. They receive a personalised AI-written response before they have even closed their browser tab."
        ]
      },
      {
        "n": "02",
        "title": "Strategy Development",
        "body": [
          "Days 1 to 14 If they do not reply they enter a 7-touch automated sequence across email and SMS. Nothing manual. Nothing missed."
        ]
      },
      {
        "n": "03",
        "title": "Implementation and Execution",
        "body": [
          "Behind the Scenes Every lead is quietly scored on budget, authority, timeline and need. Serious buyers go to your calendar. Everyone else goes to nurture."
        ]
      },
      {
        "n": "04",
        "title": "Monitoring and Optimization",
        "body": [
          "All of It Logged Every interaction updated in your CRM automatically. Your pipeline stays clean without anyone lifting a finger."
        ]
      }
    ],
    "pricingHeading": "Profitable Pricing Plans",
    "pricingCta": "GET STARTED",
    "pricingToggle": [
      "Monthly",
      "Yearly",
      "Save 20% on yearly subscription"
    ],
    "plans": [
      {
        "name": "Starter Plan 600$ - Setup",
        "price": "200",
        "features": [
          "1 lead source connection",
          "60-second automated response",
          "Email first response only",
          "Basic CRM contact logging",
          "Sales rep notification",
          "Monthly performance report",
          "Live in 5 to 7 days"
        ]
      },
      {
        "name": "Pro Plan - 1000$ setup",
        "price": "300",
        "features": [
          "Multiple lead source connections",
          "60-second response via email and SMS",
          "Full 7-touch follow-up sequence",
          "AI lead qualification and scoring",
          "Auto-booking for qualified leads",
          "Full CRM integration",
          "Sales rep notifications with lead summary",
          "Monthly optimisation call"
        ]
      }
    ],
    "faqHeading": "Add Service Related FAQs Here",
    "faq": [
      {
        "q": "How long does it take to set up the system?",
        "a": "Most systems are live within 5 to 7 business days for the Starter package and 10 to 14 days for the Full Pipeline system. We build and test everything in an isolated environment before touching your live setup — so there is zero disruption to your existing process during the build."
      },
      {
        "q": "What lead sources can you connect to?",
        "a": "We connect to virtually any lead source you are using — Facebook Lead Ads, Instagram, Google Ads, website contact forms, Typeform, WhatsApp, GoHighLevel, HubSpot, and more. If you use something not on this list just ask us. If it has an API or a webhook we can almost certainly connect it."
      },
      {
        "q": "Will the automated messages sound robotic?",
        "a": "No. Every message is written by AI using the lead's own details — their name, what they enquired about, where they came from, and how long it has been since they first reached out. To your lead it reads like you sat down and wrote it personally. We also review and refine every message template before going live to make sure it matches your agency's tone and voice."
      },
      {
        "q": "What happens when a lead replies?",
        "a": "The moment a lead replies the automated sequence stops immediately. You and your sales rep receive an instant notification with the lead's full details, their reply, and a direct link to their CRM record. From that point the conversation is handled by your team. The system never continues automating someone who has already engaged."
      },
      {
        "q": "Do I need to change my existing tools?",
        "a": "Almost never. We work with the tools you already have — your existing CRM, your email provider, your calendar tool. We wire them together rather than replace them. The only time we recommend switching a tool is if what you are currently using genuinely cannot support the automation — and we will always tell you upfront if that is the case."
      },
      {
        "q": "How do you handle leads that are not ready to buy yet?",
        "a": "Unqualified leads and leads that do not respond after the full sequence are not deleted or ignored. They get tagged automatically in your CRM and placed into a long-term nurture sequence. Every 30 days the system re-evaluates them and sends a soft check-in message. When their situation changes and they are ready — your system is already there waiting for them."
      },
      {
        "q": "What support do I get after the system goes live?",
        "a": "Your monthly retainer covers ongoing monitoring, technical support, message optimisation, and a monthly performance report sent directly to you. If anything breaks we fix it immediately. If something is underperforming we adjust it. You also get a direct line to our team via WhatsApp for any questions or quick changes. We stay involved — this is not a set it and forget it arrangement."
      }
    ]
  },
  {
    "slug": "service-alq",
    "title": "AI Lead Qualification System",
    "tagline": "Your sales team is spending 60% of their time on leads that will never buy. We fix that by filtering every single lead automatically before it ever reaches them.",
    "heroCta": "GET A FREE DEMO",
    "benefitsHeading": "AI Lead Qualification System",
    "what": [
      "The AI Lead Qualification System sits between your incoming leads and your sales team — automatically filtering every lead before it reaches anyone on your team.",
      "Every lead gets scored 1 to 10 based on budget, authority, timeline and need. High scorers go straight to your calendar.",
      "Low scorers go to nurture automatically. Your team only talks to buyers. Never tyre-kickers. Never time-wasters."
    ],
    "benefits": [
      "AI Lead Scoring",
      "Instant Routing",
      "Zero Wasted Calls",
      "Smart Nurture Sequences",
      "Full CRM Integration",
      "Higher Close Rates"
    ],
    "detailsHeading": "Why Agencies Are Wasting Their Best Sales Resource",
    "factsIntro": "Not opinions. Documented facts.",
    "facts": [
      "Sales reps spend only 34% of their time actually selling. The rest is wasted on admin and leads that were never going to buy.",
      "67% of lost sales happen because leads were never properly qualified. Most agencies have zero filter before a call gets booked.",
      "One unqualified lead costs your agency $150 to $400 in wasted time. 50 bad leads per month equals $7,500 in wasted resources.",
      "Qualified pipelines close at 2 to 3 times the rate of unqualified ones. Same leads. Better filter. Double the revenue."
    ],
    "worksHeading": "Here Is Exactly What Happens the Moment a Lead Enters the Qualification System",
    "steps": [
      {
        "n": "01",
        "title": "Lead Arrives",
        "body": [
          "System captures their details instantly from any lead source. Qualification begins automatically."
        ]
      },
      {
        "n": "02",
        "title": "Qualification Questions Sent",
        "body": [
          "Lead receives a short conversational set of questions via email and SMS. Budget. Authority. Timeline. Need."
        ]
      },
      {
        "n": "03",
        "title": "OpenAI Analyses the Responses",
        "body": [
          "Every answer is scored in real time. Context. Intent. Urgency. Score assigned from 1 to 10."
        ]
      },
      {
        "n": "04",
        "title": "Lead Gets Scored and Routed",
        "body": [
          "Score 8 to 10 — Booked into your calendar immediately. Score below 7 — Enters nurture sequence automatically. Your team only sees the hot ones."
        ]
      }
    ],
    "pricingHeading": "Profitable Pricing Plans",
    "pricingCta": "GET STARTED",
    "pricingToggle": [
      "Monthly",
      "Yearly",
      "Save 20% on yearly subscription"
    ],
    "plans": [
      {
        "name": "Starter Plan 700$ - Setup",
        "price": "300",
        "features": [
          "AI qualification question sequence",
          "OpenAI lead scoring 1 to 10",
          "Basic routing to calendar",
          "CRM score logging",
          "Monthly performance report",
          "Live in 7 to 10 days"
        ]
      },
      {
        "name": "Pro Plan - 1100$ setup",
        "price": "350",
        "features": [
          "Everything in Starter",
          "Full BATN framework scoring",
          "Smart nurture sequences",
          "AI lead qualification and scoring",
          "Auto-booking for qualified leads",
          "Full CRM integration",
          "Sales rep qualification summary",
          "Live in 7 to 10 days"
        ]
      }
    ],
    "faqHeading": "Add Service Related FAQs Here",
    "faq": [
      {
        "q": "How long does it take to set up the system?",
        "a": "Most systems are live within 5 to 7 business days for the Starter package and 10 to 14 days for the Full Pipeline system. We build and test everything in an isolated environment before touching your live setup — so there is zero disruption to your existing process during the build."
      },
      {
        "q": "What lead sources can you connect to?",
        "a": "We connect to virtually any lead source you are using — Facebook Lead Ads, Instagram, Google Ads, website contact forms, Typeform, WhatsApp, GoHighLevel, HubSpot, and more. If you use something not on this list just ask us. If it has an API or a webhook we can almost certainly connect it."
      },
      {
        "q": "Will the automated messages sound robotic?",
        "a": "No. Every message is written by AI using the lead's own details — their name, what they enquired about, where they came from, and how long it has been since they first reached out. To your lead it reads like you sat down and wrote it personally. We also review and refine every message template before going live to make sure it matches your agency's tone and voice."
      },
      {
        "q": "What happens when a lead replies?",
        "a": "The moment a lead replies the automated sequence stops immediately. You and your sales rep receive an instant notification with the lead's full details, their reply, and a direct link to their CRM record. From that point the conversation is handled by your team. The system never continues automating someone who has already engaged."
      },
      {
        "q": "Do I need to change my existing tools?",
        "a": "Almost never. We work with the tools you already have — your existing CRM, your email provider, your calendar tool. We wire them together rather than replace them. The only time we recommend switching a tool is if what you are currently using genuinely cannot support the automation — and we will always tell you upfront if that is the case."
      },
      {
        "q": "How do you handle leads that are not ready to buy yet?",
        "a": "Unqualified leads and leads that do not respond after the full sequence are not deleted or ignored. They get tagged automatically in your CRM and placed into a long-term nurture sequence. Every 30 days the system re-evaluates them and sends a soft check-in message. When their situation changes and they are ready — your system is already there waiting for them."
      },
      {
        "q": "What support do I get after the system goes live?",
        "a": "Your monthly retainer covers ongoing monitoring, technical support, message optimisation, and a monthly performance report sent directly to you. If anything breaks we fix it immediately. If something is underperforming we adjust it. You also get a direct line to our team via WhatsApp for any questions or quick changes. We stay involved — this is not a set it and forget it arrangement."
      }
    ]
  },
  {
    "slug": "service-dlr",
    "title": "Dead Lead Reactivation Campaign",
    "tagline": "You already paid for these leads. They raised their hand. They were interested. Then nobody followed up properly and they went cold. We bring them back.",
    "heroCta": "GET A FREE DEMO",
    "benefitsHeading": "What Is the Dead Lead Reactivation Campaign?",
    "what": [
      "The Dead Lead Reactivation Campaign is a done-for-you outreach system that takes every old, untouched lead sitting in your CRM or spreadsheet and runs a personalised 7-day reactivation campaign across email and SMS.",
      "No new ads. No new budget. No new leads needed.",
      "Just the leads you already have — finally getting the follow-up they should have received the first time."
    ],
    "benefits": [
      "Zero Ad Spend",
      "AI Personalisation",
      "7-Day Campaign",
      "Auto-Booking",
      "Full CRM Cleanup",
      "Immediate Revenue"
    ],
    "detailsHeading": "Why Your Old Leads Are Not Actually Dead",
    "factsIntro": "Not opinions. Documented facts.",
    "facts": [
      "The average agency has 500 to 5,000 untouched leads sitting in their CRM right now. Leads that came in. Got one email. And were never contacted again. Not because they were bad leads. Because nobody had a system to follow through.",
      "Most of your cold leads did not go cold because they lost interest. They went cold because you stopped reaching out after one or two attempts. The timing simply was not right yet.",
      "For an agency with 1,000 old leads that is 30 to 80 new sales conversations. At zero additional ad spend. From a list you had already written off.",
      "The leads on your old list already know who you are.They just need the right message at the right time."
    ],
    "worksHeading": "Here Is Exactly What Happens When We Run Your Reactivation Campaign",
    "steps": [
      {
        "n": "01",
        "title": "We Import Your Lead List",
        "body": [
          "You send us your old lead list from your CRM or spreadsheet. We clean it, segment it by age and lead source, and prepare it for the campaign."
        ]
      },
      {
        "n": "02",
        "title": "AI Writes Every Message",
        "body": [
          "OpenAI generates personalised reactivation messages for every lead using their name, what they originally enquired about, and how long it has been since they first reached out. Every message feels individually written. Nothing generic."
        ]
      },
      {
        "n": "03",
        "title": "Campaign Runs for 7 Days",
        "body": [
          "Day 1 — Personalised reactivation email Day 2 — SMS follow-up Day 4 — Value email Day 6 — Direct booking ask Day 7 — Final friendly message Every touch is timed perfectly. Everything runs automatically."
        ]
      },
      {
        "n": "04",
        "title": "Leads Routed and Reported",
        "body": [
          "Leads that respond and show genuine interest are automatically routed to your booking calendar. Unresponsive leads are tagged and archived in your CRM cleanly. You receive a full campaign performance report on Day 8."
        ]
      }
    ],
    "pricingHeading": "Profitable Pricing Plans",
    "pricingCta": "GET STARTED",
    "pricingToggle": [
      "Monthly",
      "Yearly",
      "Save 20% on yearly subscription"
    ],
    "plans": [
      {
        "name": "Starter - Flat Fee Upto 500 Leads",
        "price": "700",
        "features": [
          "Full lead list import and cleaning",
          "AI-personalised messages per lead",
          "7-day email and SMS campaign",
          "Auto-booking for interested leads",
          "Campaign live in 3 to 5 days",
          "Live in 7 to 10 days"
        ]
      },
      {
        "name": "Pro Plan - Flat Fee 500 - 2000 Leads",
        "price": "1100",
        "features": [
          "Everything in Starter",
          "Multiple lead segments",
          "Segment-specific messaging",
          "Priority campaign launch",
          "Campaign live in 3 to 5 days"
        ]
      }
    ],
    "faqHeading": "Add Service Related FAQs Here",
    "faq": [
      {
        "q": "How long does it take to set up the system?",
        "a": "Most systems are live within 5 to 7 business days for the Starter package and 10 to 14 days for the Full Pipeline system. We build and test everything in an isolated environment before touching your live setup — so there is zero disruption to your existing process during the build."
      },
      {
        "q": "What lead sources can you connect to?",
        "a": "We connect to virtually any lead source you are using — Facebook Lead Ads, Instagram, Google Ads, website contact forms, Typeform, WhatsApp, GoHighLevel, HubSpot, and more. If you use something not on this list just ask us. If it has an API or a webhook we can almost certainly connect it."
      },
      {
        "q": "Will the automated messages sound robotic?",
        "a": "No. Every message is written by AI using the lead's own details — their name, what they enquired about, where they came from, and how long it has been since they first reached out. To your lead it reads like you sat down and wrote it personally. We also review and refine every message template before going live to make sure it matches your agency's tone and voice."
      },
      {
        "q": "What happens when a lead replies?",
        "a": "The moment a lead replies the automated sequence stops immediately. You and your sales rep receive an instant notification with the lead's full details, their reply, and a direct link to their CRM record. From that point the conversation is handled by your team. The system never continues automating someone who has already engaged."
      },
      {
        "q": "Do I need to change my existing tools?",
        "a": "Almost never. We work with the tools you already have — your existing CRM, your email provider, your calendar tool. We wire them together rather than replace them. The only time we recommend switching a tool is if what you are currently using genuinely cannot support the automation — and we will always tell you upfront if that is the case."
      },
      {
        "q": "How do you handle leads that are not ready to buy yet?",
        "a": "Unqualified leads and leads that do not respond after the full sequence are not deleted or ignored. They get tagged automatically in your CRM and placed into a long-term nurture sequence. Every 30 days the system re-evaluates them and sends a soft check-in message. When their situation changes and they are ready — your system is already there waiting for them."
      },
      {
        "q": "What support do I get after the system goes live?",
        "a": "Your monthly retainer covers ongoing monitoring, technical support, message optimisation, and a monthly performance report sent directly to you. If anything breaks we fix it immediately. If something is underperforming we adjust it. You also get a direct line to our team via WhatsApp for any questions or quick changes. We stay involved — this is not a set it and forget it arrangement."
      }
    ]
  },
  {
    "slug": "service-fullpipe",
    "title": "Full Pipeline Automation System",
    "tagline": "Every system we offer. Combined into one. Leads come in, get responded to, followed up, qualified, and booked automatically. Your team shows up for the calls. Nothing else.",
    "heroCta": "GET A FREE DEMO",
    "benefitsHeading": "What Is the Dead Lead What Is the Full Pipeline Automation System?",
    "what": [
      "The Full Pipeline Automation System is every Aerstack service wired together into one complete, fully automated sales pipeline. Instant response.",
      "7-touch follow-up. AI qualification. Auto-booking. CRM sync. Weekly reporting.",
      "All of it running simultaneously. All of it running automatically. All of it working while you focus on delivering for your clients."
    ],
    "benefits": [
      "Instant Response",
      "7-Touch Follow-Up",
      "AI Qualification",
      "Auto-Booking",
      "Full CRM Cleanup",
      "Weekly Reports"
    ],
    "detailsHeading": "Your Pipeline Has 5 Broken Points. This Fixes All of Them.",
    "factsIntro": "Not opinions. Documented facts.",
    "facts": [
      "78% of buyers go with the first agency that responds. Your average response time is probably 6 to 18 hours. Theirs is 60 seconds after this system goes live.",
      "80% of deals close after 5 or more follow-up touches. Most agencies stop at 2. This system follows up 7 times automatically. Nothing slips.",
      "65% of sales rep time is wasted on unqualified leads. AI qualification filters every lead before it reaches your team. They only talk to buyers.",
      "Agencies with automated pipelines close 2 to 3 times more deals from the same lead volume. No extra ad spend. No extra staff. Just a pipeline that finally works."
    ],
    "worksHeading": "Here Is Exactly What Happens After We Install the System",
    "steps": [
      {
        "n": "01",
        "title": "Lead Arrives",
        "body": [
          "New lead comes in from any source. System fires a personalised response in under 60 seconds automatically."
        ]
      },
      {
        "n": "02",
        "title": "Follow-Up Runs Automatically",
        "body": [
          "Lead enters a 14-day 7-touch sequence across email and SMS. Every message personalised. Sequence stops the moment they reply."
        ]
      },
      {
        "n": "03",
        "title": "AI Qualifies and Routes",
        "body": [
          "Every lead scored on budget, authority, timeline and need. High scorers auto-book into your calendar. Low scorers enter nurture automatically."
        ]
      },
      {
        "n": "04",
        "title": "Everything Logged and Reported",
        "body": [
          "Every interaction updated in your CRM in real time. Weekly performance report lands in your inbox every Monday. Full visibility. Zero manual work."
        ]
      }
    ],
    "pricingHeading": "Profitable Pricing Plans",
    "pricingCta": "GET STARTED",
    "pricingToggle": [
      "Monthly",
      "Yearly",
      "Save 20% on yearly subscription"
    ],
    "plans": [
      {
        "name": "Starter - $1500 Setup",
        "price": "500",
        "features": [
          "Instant lead response system",
          "7-touch follow-up sequence",
          "Email and SMS delivery",
          "Basic CRM integration",
          "Sales rep notifications",
          "Live in 10 to 14 days",
          "Live in 7 to 10 days"
        ]
      },
      {
        "name": "Pro Plan - 2000$ Setup",
        "price": "600",
        "features": [
          "Everything in Starter",
          "AI lead qualification and scoring",
          "Auto-booking for qualified leads",
          "Full CRM setup and integration",
          "Dead leads reactivation included",
          "Live in 10 to 14 days"
        ]
      }
    ],
    "faqHeading": "Add Service Related FAQs Here",
    "faq": [
      {
        "q": "How long does it take to set up the system?",
        "a": "Most systems are live within 5 to 7 business days for the Starter package and 10 to 14 days for the Full Pipeline system. We build and test everything in an isolated environment before touching your live setup — so there is zero disruption to your existing process during the build."
      },
      {
        "q": "What lead sources can you connect to?",
        "a": "We connect to virtually any lead source you are using — Facebook Lead Ads, Instagram, Google Ads, website contact forms, Typeform, WhatsApp, GoHighLevel, HubSpot, and more. If you use something not on this list just ask us. If it has an API or a webhook we can almost certainly connect it."
      },
      {
        "q": "Will the automated messages sound robotic?",
        "a": "No. Every message is written by AI using the lead's own details — their name, what they enquired about, where they came from, and how long it has been since they first reached out. To your lead it reads like you sat down and wrote it personally. We also review and refine every message template before going live to make sure it matches your agency's tone and voice."
      },
      {
        "q": "What happens when a lead replies?",
        "a": "The moment a lead replies the automated sequence stops immediately. You and your sales rep receive an instant notification with the lead's full details, their reply, and a direct link to their CRM record. From that point the conversation is handled by your team. The system never continues automating someone who has already engaged."
      },
      {
        "q": "Do I need to change my existing tools?",
        "a": "Almost never. We work with the tools you already have — your existing CRM, your email provider, your calendar tool. We wire them together rather than replace them. The only time we recommend switching a tool is if what you are currently using genuinely cannot support the automation — and we will always tell you upfront if that is the case."
      },
      {
        "q": "How do you handle leads that are not ready to buy yet?",
        "a": "Unqualified leads and leads that do not respond after the full sequence are not deleted or ignored. They get tagged automatically in your CRM and placed into a long-term nurture sequence. Every 30 days the system re-evaluates them and sends a soft check-in message. When their situation changes and they are ready — your system is already there waiting for them."
      },
      {
        "q": "What support do I get after the system goes live?",
        "a": "Your monthly retainer covers ongoing monitoring, technical support, message optimisation, and a monthly performance report sent directly to you. If anything breaks we fix it immediately. If something is underperforming we adjust it. You also get a direct line to our team via WhatsApp for any questions or quick changes. We stay involved — this is not a set it and forget it arrangement."
      }
    ]
  },
  {
    "slug": "service-mvp",
    "title": "Idea to MVP Development",
    "tagline": "Most ideas die in a slide deck. We turn yours into a real, working product your users can actually use — designed, built, and launched in weeks, not months.",
    "heroCta": "GET A FREE DEMO",
    "benefitsHeading": "What Is the Idea to MVP Service?",
    "what": [
      "The Idea to MVP service takes your concept from a rough idea to a real, working product — scoped, designed, built, and shipped by one team.",
      "No bloated feature lists. No six-month timelines. No agency runaround.",
      "We build the smallest version of your product that proves the idea and gets it in front of real users — fast."
    ],
    "benefits": [
      "Rapid Scoping",
      "Product & UX Design",
      "Full-Stack Build",
      "Built to Scale",
      "Real Users, Fast",
      "AI & Automation Ready"
    ],
    "detailsHeading": "Why Most Ideas Never Become Real Products",
    "factsIntro": "Not opinions. Documented facts.",
    "facts": [
      "90% of startups fail — and spending months building the wrong product is one of the biggest reasons. An MVP is how you find out before you have spent everything.",
      "Teams that launch an MVP and iterate reach product-market fit far faster than those that build in stealth for a year before showing anyone.",
      "The average custom software project runs months over schedule. A focused MVP ships in weeks because it builds only what matters.",
      "Investors fund traction, not ideas. A working product with real users beats the best pitch deck every single time."
    ],
    "worksHeading": "How We Turn Your Idea Into a Real Product",
    "steps": [
      {
        "n": "01",
        "title": "Scope & Define",
        "body": [
          "Week 1 We map your idea down to the core features that prove it, and lock a clear, prioritised build plan. You know exactly what ships."
        ]
      },
      {
        "n": "02",
        "title": "Design the Product",
        "body": [
          "Week 1 to 2 We design the real screens and the core user flow. You approve exactly how it looks and works before we build anything."
        ]
      },
      {
        "n": "03",
        "title": "Build the MVP",
        "body": [
          "Week 2 to 6 Frontend, backend, database, integrations — built on production-ready foundations, with preview links at every stage."
        ]
      },
      {
        "n": "04",
        "title": "Launch & Hand Over",
        "body": [
          "Launch Week We deploy your MVP, get it live, and hand over a product you fully own — documented and ready for real users."
        ]
      }
    ],
    "pricingHeading": "Priced Around Your Idea",
    "pricingCta": "BOOK A FREE SCOPING CALL",
    "pricingToggle": [],
    "plans": [],
    "faqHeading": "Idea to MVP — Questions Answered",
    "faq": [
      {
        "q": "How long does it take to build an MVP?",
        "a": "Most MVPs go from kickoff to launch in 4 to 8 weeks, depending on complexity. We keep timelines short on purpose — the whole point of an MVP is to get a real product in front of users fast. In your scoping call we give you a concrete timeline before you commit to anything."
      },
      {
        "q": "What exactly do I get at the end?",
        "a": "A real, working product — deployed and live — that your users can actually use, not a prototype or a clickable mockup. You get the full codebase, the design files, and documentation. You own all of it outright, with no lock-in."
      },
      {
        "q": "I only have an idea — is that enough to start?",
        "a": "Yes. Most of our clients come to us with an idea and a problem, not a spec. Our first job is to turn that into a clear, buildable plan during the scoping phase. You do not need wireframes, documents, or any technical knowledge to get started."
      },
      {
        "q": "Can you build AI features into my product?",
        "a": "Absolutely — it is one of our specialities. We regularly build AI-powered features, automated workflows, and smart integrations into MVPs. If AI genuinely makes your product better or saves your users time, we wire it in from the start rather than bolting it on later."
      },
      {
        "q": "What happens after launch if the idea takes off?",
        "a": "That is the best-case scenario, and we build for it. Because we work on production-ready foundations, your MVP is a base you grow on, not something you throw away. We can keep building new features with you, or hand everything over cleanly if you take it in-house."
      },
      {
        "q": "Do I own the code and the product?",
        "a": "Completely. Everything we build is yours — the code, the design, the accounts, the infrastructure. We hand it all over documented at the end. You are never dependent on us to keep your product running or to move it elsewhere."
      },
      {
        "q": "How does pricing work if there are no fixed packages?",
        "a": "Because every idea is different, we price each MVP individually based on scope. After a short scoping call we send you a clear, fixed proposal — one price, no hourly surprises. You know exactly what you are paying and exactly what you are getting before any work starts."
      }
    ]
  },
  {
    "slug": "service-webdev",
    "title": "Web Development",
    "tagline": "Your website is the first thing a prospect judges you on. We build fast, modern, conversion-focused sites and web apps that load in a blink, rank on Google, and turn visitors into booked calls.",
    "heroCta": "GET A FREE DEMO",
    "benefitsHeading": "What Is the Web Development Service?",
    "what": [
      "The Web Development service builds you a fast, modern, conversion-focused website or web app — designed, built, and launched by one team.",
      "No slow, bloated templates. No ‘it looks fine on my screen’. No developer who disappears after launch.",
      "Just a site that loads instantly, works flawlessly on every device, and is built to turn visitors into customers."
    ],
    "benefits": [
      "Conversion-Focused Design",
      "Built for Speed",
      "Fully Responsive",
      "SEO-Ready Foundations",
      "CMS & Easy Editing",
      "Web Apps & Dashboards"
    ],
    "detailsHeading": "Why Your Website Is Costing You Customers",
    "factsIntro": "Not opinions. Documented facts.",
    "facts": [
      "A one-second delay in load time can cut conversions by around 7%. Most business websites take far longer than that to load.",
      "You have about 50 milliseconds to make a first impression online. Visitors judge your credibility on design before they read a single word.",
      "Around 60% of all web traffic is mobile. A site that is not flawless on a phone is losing the majority of its audience.",
      "Websites that load in under two seconds see dramatically lower bounce rates than those that take five or more. Speed directly drives revenue."
    ],
    "worksHeading": "How We Design and Build Your Site",
    "steps": [
      {
        "n": "01",
        "title": "Discovery & Strategy",
        "body": [
          "Week 1 We learn your business, audience, and goals, then map the pages, structure, and conversion flow before any design begins."
        ]
      },
      {
        "n": "02",
        "title": "Design",
        "body": [
          "Week 1 to 2 We design every page around your brand and your goals. You review and approve the full look and feel before we build a thing."
        ]
      },
      {
        "n": "03",
        "title": "Development",
        "body": [
          "Week 2 to 5 We build your site fast, responsive, and SEO-ready — with a CMS so you can edit it yourself and the integrations your business needs."
        ]
      },
      {
        "n": "04",
        "title": "Launch & Support",
        "body": [
          "Launch Week We deploy your site, connect your domain, test everything, and hand it over live — with ongoing support whenever you need it."
        ]
      }
    ],
    "pricingHeading": "Priced Around Your Project",
    "pricingCta": "",
    "pricingToggle": [],
    "plans": [],
    "faqHeading": "Web Development — Questions Answered",
    "faq": [
      {
        "q": "How long does it take to build a website?",
        "a": "A focused marketing site typically takes 2 to 4 weeks, while larger sites and web apps take longer depending on scope. We give you a concrete timeline in your first call — and because one team handles design and development, there is no waiting around between stages."
      },
      {
        "q": "Will I be able to edit the site myself?",
        "a": "Yes. We build on a clean content management system so your team can update text, images, blog posts, and whole pages without touching code or waiting on us. We also walk you through exactly how to use it before handover."
      },
      {
        "q": "Can you build more than just a marketing website?",
        "a": "Definitely. Alongside marketing sites we build web apps, client portals, booking systems, dashboards, and other interactive, data-driven products — complete with authentication, databases, and the integrations your business depends on."
      },
      {
        "q": "Will my site be fast and good for SEO?",
        "a": "Both are built in from the start. We optimise images, write clean code, use modern hosting, and structure your site the way search engines expect — fast load times, proper meta data, and semantic markup — so you launch on a technically sound, ranking-ready foundation."
      },
      {
        "q": "Do you connect the site to my other tools?",
        "a": "Yes — it is one of our specialities. We connect your site to your CRM, calendar, email platform, and payment tools so leads route instantly, bookings sync automatically, and the right workflow fires the moment someone converts. Your website becomes part of your system."
      },
      {
        "q": "What happens after the site launches?",
        "a": "We offer ongoing support, updates, and improvements so your site stays fast, secure, and current. When you need a new page, a change, or a new feature, you work with a team that already knows your site inside out rather than starting over with someone new."
      },
      {
        "q": "How does pricing work?",
        "a": "Because every project is different, we price each one individually based on scope. After a short call we send you a clear, fixed proposal — one price, no hourly surprises — so you know exactly what you are getting and what it costs before any work begins."
      }
    ]
  }
];
