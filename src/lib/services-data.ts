// The three core services. Each page owns its headings, facts, steps and FAQ.
export type FaqItem = { q: string; a: string };
export type ServiceStep = { n: string; title: string; body: string[] };
export type ServicePlan = { name: string; price: string; features: string[] };
export type ServicePage = {
  slug: string; title: string; tagline: string; heroCta: string;
  benefitsHeading: string; what: string[]; benefits: string[];
  detailsHeading: string; factsIntro: string; facts: string[];
  worksHeading: string; steps: ServiceStep[];
  /** Pricing is optional. A page with no plans simply does not show the section. */
  pricingHeading?: string; pricingCta?: string; pricingToggle?: string[]; plans?: ServicePlan[];
  faqHeading: string; faq: FaqItem[];
};

export const SERVICE_PAGES: ServicePage[] = [
  {
    slug: "websites",
    title: "Websites",
    tagline:
      "Fast, modern, mobile friendly websites that turn visitors into calls, bookings and orders.",
    heroCta: "BOOK A FREE CONSULTATION",
    benefitsHeading: "What we build",
    what: [
      "Most business websites are slow, awkward on a phone, and give the visitor no obvious next step. People leave and call someone else instead.",
      "We build sites that load quickly, read clearly on any screen, and make the next step obvious, whether that is calling you, booking a table, requesting a quote or placing an order.",
      "You also get a site you can update yourself. Changing a price, a menu or your opening hours should not require a developer.",
    ],
    benefits: [
      "Mobile Friendly",
      "Fast Loading",
      "Built For Enquiries",
      "Search Friendly",
      "Easy To Update",
      "One Clear Next Step",
    ],
    detailsHeading: "Why a slow website quietly costs you work",
    factsIntro: "Plainly, this is what we keep seeing.",
    facts: [
      "Most visitors arrive on a phone. If the site is hard to read or tap, they leave before they ever find out what you offer.",
      "A site with no clear next step gets browsed and forgotten. A site with one obvious action gets enquiries.",
      "When opening hours, prices or menus are out of date, people assume the business is too.",
      "The things search engines reward, speed and a site that works on mobile, are the same things your customers want.",
    ],
    worksHeading: "How we build it",
    steps: [
      {
        n: "01",
        title: "Understand the business",
        body: [
          "We start with what you actually need the site to do. Take bookings, bring in quote requests, show a menu, sell online, or simply make you easy to find and easy to trust.",
          "That decides the structure. Everything else follows from it.",
        ],
      },
      {
        n: "02",
        title: "Design around the next step",
        body: [
          "We lay out each page so the visitor always knows what to do next, and so the information people actually ask about is never more than a tap away.",
          "You see the design before anything is built.",
        ],
      },
      {
        n: "03",
        title: "Build and test",
        body: [
          "We build the site, connect your forms, booking tool or ordering system, and test it on real phones, tablets and desktops rather than just resizing a browser.",
        ],
      },
      {
        n: "04",
        title: "Launch and hand over",
        body: [
          "We put it live, connect it to your domain, and show you how to update the parts you will want to change yourself.",
          "If something needs adjusting after launch, we handle it.",
        ],
      },
    ],
    // TODO(client): no pricing supplied for Websites. Add plans here to show the
    // pricing section, or leave it out and keep driving people to a consultation.
    faqHeading: "Common questions",
    faq: [
      {
        q: "How long does a website take?",
        a: "It depends on the number of pages and whether we are connecting ordering or booking tools. A straightforward business site is usually a matter of weeks rather than months. We give you a date before we start and we keep to it.",
      },
      {
        q: "Can I update the site myself?",
        a: "Yes. The parts you will want to change often, such as prices, menus, opening hours, photos and text, are all editable by you. We show you how at handover. You will not need to come back to us for routine changes.",
      },
      {
        q: "Do you work with my existing brand?",
        a: "Yes. If you already have a logo, colours and fonts, we build around them. If you do not, we keep the design clean and simple so it still looks considered.",
      },
      {
        q: "Will it work properly on phones?",
        a: "That is the starting point rather than an afterthought. Most of your visitors are on a phone, so we design for that screen first and then scale up to tablet and desktop.",
      },
      {
        q: "Can you take online orders or bookings?",
        a: "Yes. We can connect ordering, table booking, appointment booking or payment tools, or build the flow directly into the site depending on what suits the business.",
      },
      {
        q: "What about hosting and the domain?",
        a: "We can set both up for you, or work with what you already have. Either way you own the domain and the accounts, not us.",
      },
      {
        q: "What happens after launch?",
        a: "We stay available. If something breaks or needs changing we sort it. If you want ongoing changes and additions we can arrange that separately.",
      },
    ],
  },

  {
    slug: "software",
    title: "Management Software",
    tagline:
      "Custom POS, inventory, staff and reporting systems built around how your business actually works.",
    heroCta: "TELL US ABOUT YOUR BUSINESS",
    benefitsHeading: "What we build",
    what: [
      "Off the shelf software makes you change how you work to suit the tool. You end up with features you never use, and the one thing you actually need is missing.",
      "We build the system around your process instead. Point of sale, inventory, staff, suppliers, branches and reporting, with only the parts you need and the wording your team already uses.",
      "We have built and delivered a production POS system for a restaurant running multiple branches, covering ordering, stock and reporting across all of them.",
    ],
    benefits: [
      "Point Of Sale",
      "Inventory Tracking",
      "Staff Management",
      "Multi Branch",
      "Clear Reporting",
      "Built Around You",
    ],
    detailsHeading: "Where businesses lose time and money",
    factsIntro: "Plainly, this is what we keep seeing.",
    facts: [
      "Stock counted by hand and typed into a spreadsheet is out of date the moment someone makes a sale.",
      "When each branch keeps its own records, nobody can see the whole business without spending a day pulling it together.",
      "Staff hours, shifts and wages tracked on paper are slow to work out and easy to get wrong.",
      "If you cannot see what sold, what is running low and what it cost you, every decision is a guess.",
    ],
    worksHeading: "How we build it",
    steps: [
      {
        n: "01",
        title: "Map how you work now",
        body: [
          "We sit with the people who will use the system and follow the real process, including the parts handled on paper, in a group chat or in someone's head.",
          "What we build has to match that, not an idealised version of it.",
        ],
      },
      {
        n: "02",
        title: "Design the system",
        body: [
          "We lay out the screens your team will use every day and keep them quick. A till screen used a hundred times a shift has to be fast and hard to get wrong.",
          "You review it before we build.",
        ],
      },
      {
        n: "03",
        title: "Build and trial",
        body: [
          "We build the system and trial it with real data before it goes anywhere near live service, so problems surface in a quiet moment rather than a busy one.",
        ],
      },
      {
        n: "04",
        title: "Roll out and support",
        body: [
          "We train your team, go live, and stay close during the first weeks while everyone settles in.",
          "If you add a branch or change how something works, the system can change with you.",
        ],
      },
    ],
    // TODO(client): no pricing supplied for Management Software. These builds
    // vary a lot by scope, so the page currently sends people to a consultation.
    faqHeading: "Common questions",
    faq: [
      {
        q: "Is this built from scratch or an existing product?",
        a: "Built for you. We reuse the solid parts we have built before, which keeps the cost and the timeline down, but the system is shaped around your process rather than you being shaped around it.",
      },
      {
        q: "Can it handle more than one branch?",
        a: "Yes. We have built exactly that: a production POS system running across multiple branches of one restaurant, with shared reporting across all of them.",
      },
      {
        q: "What if we already use something?",
        a: "Tell us what it is and what it does well. Sometimes the answer is to connect to it rather than replace it. We will say so if that is the better option.",
      },
      {
        q: "Will it work if the internet goes down?",
        a: "That depends on what the system does. For anything used at a till we discuss this up front and design for it, because a sale cannot wait for a connection to come back.",
      },
      {
        q: "How long does it take?",
        a: "Longer than a website and it depends entirely on scope. After the first conversation we can give you a realistic range rather than a number designed to win the job.",
      },
      {
        q: "Do you train our staff?",
        a: "Yes. We train the people who will use it daily and stay available during the first weeks while it beds in. A system nobody understands is a system nobody uses.",
      },
      {
        q: "Who owns the system?",
        a: "You do. It is built for your business and it stays yours.",
      },
    ],
  },

  {
    slug: "automation",
    title: "AI Workflows",
    tagline:
      "Automations that save you time, from instant replies on WhatsApp to appointment reminders, booking confirmations and follow up.",
    heroCta: "BOOK A FREE CONSULTATION",
    benefitsHeading: "What we automate",
    what: [
      "Every business has work that repeats. Answering the same question on WhatsApp, confirming a booking, reminding someone about an appointment, chasing an enquiry nobody got back to.",
      "It is not difficult work. It just never stops, and it is usually the first thing to slip when the day gets busy.",
      "We build automations that handle it, so enquiries get answered straight away, appointments get confirmed and reminded, and nothing quietly falls through.",
    ],
    benefits: [
      "Instant Replies",
      "WhatsApp And Email",
      "Appointment Reminders",
      "Booking Confirmations",
      "Enquiry Follow Up",
      "Less Admin",
    ],
    detailsHeading: "Where the time actually goes",
    factsIntro: "Plainly, this is what we keep seeing.",
    facts: [
      "People expect an answer quickly. An enquiry that sits until tomorrow has often already gone somewhere else.",
      "Most enquiries ask the same handful of questions, and someone answers them by hand every single time.",
      "No shows are usually forgetfulness rather than a change of mind. A reminder at the right time prevents most of them.",
      "Enquiries that nobody followed up on are the cheapest work available, and they are the first thing a busy week loses.",
    ],
    worksHeading: "How it works once it is live",
    steps: [
      {
        n: "01",
        title: "Find the repetitive work",
        body: [
          "We look at where enquiries arrive, what your team answers over and over, and what gets forgotten when things get busy.",
          "We start with whichever one costs you the most time.",
        ],
      },
      {
        n: "02",
        title: "Design the workflow",
        body: [
          "We map exactly what happens to a message or a booking, from arrival to answer, and what should reach a person rather than being handled automatically.",
          "You see it written out before anything is connected.",
        ],
      },
      {
        n: "03",
        title: "Build and test",
        body: [
          "We build it and test it end to end on a copy of your setup, so nothing touches real customers while it is being checked.",
        ],
      },
      {
        n: "04",
        title: "Go live and improve",
        body: [
          "We switch it on and watch what real messages do to it. Wording gets tightened, edge cases get handled, timings get adjusted.",
          "You get a monthly summary of what it handled.",
        ],
      },
    ],
    pricingHeading: "Pricing",
    pricingCta: "GET STARTED",
    pricingToggle: ["Monthly", "Yearly", "Save 20% on yearly subscription"],
    // NOTE(client): these are the figures that were already on the site for the
    // lead automation packages. The service is now broader, so please confirm
    // they still reflect what you want to charge.
    plans: [
      {
        name: "Starter Plan 600$ setup",
        price: "200",
        features: [
          "One enquiry source connected",
          "Automatic reply in under 60 seconds",
          "Email replies",
          "Enquiries logged in one place",
          "Notification to your team",
          "Monthly summary",
          "Live in 5 to 7 days",
        ],
      },
      {
        name: "Pro Plan 1000$ setup",
        price: "300",
        features: [
          "Multiple enquiry sources connected",
          "Automatic reply by email and WhatsApp or SMS",
          "Full follow up sequence",
          "Appointment reminders and booking confirmations",
          "Automatic booking for ready customers",
          "Connected to the tools you already use",
          "Notifications with a summary of each enquiry",
          "Monthly call to tighten it up",
        ],
      },
    ],
    faqHeading: "Common questions",
    faq: [
      {
        q: "Will customers know they are talking to an automation?",
        a: "We write the replies in your voice and keep them honest. The aim is a fast, useful answer rather than pretending to be a person. Anything that needs a human reaches one.",
      },
      {
        q: "Which channels can you cover?",
        a: "WhatsApp, email, SMS, your website forms and your social media enquiries. If customers reach you somewhere else, ask us, it can usually be connected.",
      },
      {
        q: "Do I need technical knowledge?",
        a: "No. We build, test and deploy it. At handover you get a short guide covering what it does and who to contact if you need something changed.",
      },
      {
        q: "What tools do you connect to?",
        a: "Booking and calendar tools, messaging platforms, email, spreadsheets and most common business systems. If you use something unusual, ask, it is usually possible.",
      },
      {
        q: "How quickly can it be live?",
        a: "A single workflow is usually live within a week. Something covering several channels takes a little longer. We build and test on a copy first, so your existing setup keeps running untouched.",
      },
      {
        q: "What if it gets something wrong?",
        a: "We watch it closely in the first weeks and tighten the wording and the rules. Anything the automation is unsure of gets passed to a person rather than guessed at.",
      },
      {
        q: "Can we start small?",
        a: "Yes, and we usually recommend it. Pick the one task that wastes the most time, automate that, and see what it gives back before going further.",
      },
    ],
  },
];
