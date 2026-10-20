export type PageReview = {
  quote: string;
  name: string;
  role: string;
  avatar?: string;
};

/** Left column of the /review page (verbatim from the live site) */
export const REVIEWS_LEFT: PageReview[] = [
  {
    quote:
      "I was skeptical at first honestly. I had tried other tools before and nothing really stuck. But Aerstack kept it simple — they connected my lead form, built the follow-up sequence, and within the first two weeks I had leads replying to messages I did not even send myself. First time my pipeline felt like it was actually working.",
    name: "James R.",
    role: "Owner, Social Media Marketing Agency · UK",
    avatar: "K6cUNifhQFa6qEX3kqNwfqMkiY.jpg",
  },
  {
    quote:
      "Genuinely one of the best decisions I made for my agency this year. My sales rep was spending most of his day on leads that were never going to buy. The qualification system Aerstack built filters all of that out before it ever reaches him. His close rate has gone up significantly and he is actually enjoying his calls again.",
    name: "David M.",
    role: "Director, Lead Generation Agency · Canada",
    avatar: "Wu3jIIXne7CD8oB2WuVqxx1Wfk.jpg",
  },
  {
    quote:
      "As a solo founder I was always choosing between doing client work and following up on new leads. I could never do both properly. Aerstack solved that completely. The system handles all the follow-up while I focus on delivery. I signed three new clients last month without manually chasing a single lead. That has never happened before in two years of running my agency.",
    name: "S. Thompson",
    role: "Solo SMMA Founder · UK",
    avatar: "LsJGvkbYbF1y4ifkFrjeNfRfzYM.jpg",
  },
  {
    quote:
      "What I appreciate most is that Aerstack understood our business before building anything. They audited our lead process first, showed us exactly where we were losing people, and then built a system specifically around our setup. Not a generic template. An actual solution for how we work.",
    name: "Benjamin D.",
    role: "Founder, Full Service Agency · USA",
    avatar: "dUseUtuxWZALl1W4o3xjq8KWc.jpg",
  },
];

/** Right column of the /review page */
export const REVIEWS_RIGHT: PageReview[] = [
  {
    quote:
      "What got me was the response time. I knew slow follow-up was a problem but I did not realise how bad it was until Aerstack showed me the numbers. We were averaging 11 hours to reply to new leads. After the system went live it dropped to under a minute. We booked more calls in the first month than the two months before it combined.",
    name: "Sarah K.",
    role: "Founder, PPC Agency · USA",
  },
  {
    quote:
      "I had over 900 old leads sitting in my CRM that I had completely given up on. Aerstack ran a reactivation campaign and I got 28 replies in the first week. Ended up booking 19 calls from a list I thought was completely dead. Zero ad spend. Straightforward process. Solid results.",
    name: "Ryan M.",
    role: "Agency Founder · Australia",
  },
  {
    quote:
      "The setup was faster than I expected and the team kept me updated throughout the whole process. No technical headaches on my end at all. The system just works. Leads come in, they get contacted immediately, the ones that are serious book calls directly into my calendar. Simple as that.",
    name: "Christopher A.",
    role: "Digital Agency Owner · UAE",
    avatar: "F8ur4MxzltB6kcNMHbY8uVKQbg.jpg",
  },
  {
    quote:
      "Three months in and the system is still improving. Every month Aerstack sends a performance report and adjusts the sequences based on what is working. It is not a one-time setup and goodbye situation. They actually stay involved and keep optimising. That ongoing support is what makes the retainer worth it.",
    name: "William T.",
    role: "Agency Owner · New Zealand",
  },
];
