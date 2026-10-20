export type IconKey = "response" | "article" | "browser" | "aperture";

export type Service = {
  title: string;
  body: string;
  href: string;
  icon: IconKey;
};

export const SERVICES: Service[] = [
  {
    title: "Instant Lead Response",
    icon: "response",
    href: "/service-ilr",
    body: "Every new lead gets a personalised  response in under 60 seconds — automatically,  24/7, from any lead source. No manual work.  No missed leads.",
  },
  {
    title: "AI Lead Qualification",
    icon: "article",
    href: "/service-alq",
    body: "Our AI scores every lead on budget,  authority, timeline and need. Your sales team  only talks to people who are ready to buy.",
  },
  {
    title: "Dead Lead Reactivation",
    icon: "browser",
    href: "/service-dlr",
    body: "Got a graveyard of old leads your clients gave up on? We run an AI-powered reactivation campaign on that dead list. Every cold contact gets a personalised, human-sounding outreach across email and SMS. Dormant leads turn into booked calls — one time fee, pure profit.",
  },
  {
    title: "Full Pipeline Automation",
    icon: "aperture",
    href: "/service-fullpipe",
    body: "Every system combined into one  complete sales machine. Leads come in, get  followed up, get qualified, and book calls —  all without your team lifting a finger.",
  },
  {
    title: "Idea to MVP",
    icon: "response",
    href: "/service-mvp",
    body: "Got an idea but no product? We take it from concept to a real, working MVP — designed, built, and launched in weeks. Your users get something they can actually use, and you get proof, traction, and a product you fully own.",
  },
  {
    title: "Web Development",
    icon: "response",
    href: "/service-webdev",
    body: "Fast, modern, conversion-focused websites and web apps. Built to load in a blink, rank on Google, and work flawlessly on every device — turning visitors into booked calls, with a CMS you can edit yourself.",
  },
];

export type Metric = { value: string; label: string };
export type CaseStudy = {
  slug: string;
  img: string;
  title: string;
  subtitle: string;
  metrics: [Metric, Metric];
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "content-writing-for-video-grapher",
    img: "jNK8t6af4Fs03rTOadGzMRmweqo.jpg",
    title: "How a UK SMMA Doubled Their  Booked Calls in 30 Days",
    subtitle:
      "How Aerstack fixed a broken follow-up system  and recovered £18,000 in lost pipeline value",
    metrics: [
      { value: "2x", label: "Booked discovery calls" },
      { value: "7", label: "Follow-up touches per lead" },
    ],
  },
  {
    slug: "seo-success",
    img: "kowsLNxnpQclOQJjDCjUkZkX0yw.jpg",
    title: "AI Qualifier That Cut Wasted  Sales Time by 60%",
    subtitle: "How Razor Sharp Barbershop Grew its Clientele with Digital Marketing",
    metrics: [
      { value: "60%", label: "Reduction in time spent on unqualified leads" },
      { value: "85%", label: "Of sales team time now spent on genuinely qualified leads" },
    ],
  },
  {
    slug: "transforming-barber-buzz",
    img: "kovQoNz6Ql3YnNkQjQhEVqzuBI.png",
    title: "Dead Lead Reactivation for a  Dubai PPC Agency",
    subtitle: "How 1,200 untouched leads turned into  47 booked calls with zero ad spend",
    metrics: [
      { value: "47", label: "Booked discovery calls from the reactivated list" },
      { value: "$21000", label: "Total pipeline value generated from dormant contacts" },
    ],
  },
  {
    slug: "seo-solution-for-tech-haven",
    img: "mr7pSKURwMO4ZrsBLvHCtibCc.jpg",
    title: "Full Pipeline Fix for a  Small US Marketing Agency",
    subtitle:
      "Discover how Tech Haven skyrocketed its online sales by 40% with Digital Impact's tailored SEO strategy!",
    metrics: [
      { value: "$2,400", label: "Additional monthly recurring revenue per client closed" },
      { value: "12.5x", label: "Booked calls per month" },
    ],
  },
];

export type Review = { quote: string; name: string; role: string; avatar: string };

export const REVIEWS: Review[] = [
  {
    quote:
      "Before Aerstack, I was losing leads every single day just because I was too busy to reply fast enough. Within the first week of their system going live, I had calls booking automatically while I was out doing client work. Honestly did not think it would work this well this fast. — James R. Owner, Social Media Marketing Agency",
    name: "S. Power",
    role: "Owner, Social Media Marketing Agency · UK",
    avatar: "Y9KmJAQ4w53hsc4jJojfokLZ7D8.jpg",
  },
  {
    quote:
      "We had over 800 old leads sitting untouched in our CRM. Aerstack ran a reactivation campaign and we got 31 booked calls in under 3 weeks from people we had completely given up on. Zero ad spend. The ROI was immediate and the whole thing ran without us doing anything manually. — Sarah K. Founder, PPC & Paid Ads Agency",
    name: "Mark Chen",
    role: "Founder, PPC Agency · USA",
    avatar: "6uPQSjDGRQZxLCvtvV5va15J1hs.jpg",
  },
  {
    quote:
      "Our sales rep was spending most of his time on leads that were never going to buy. Since Aerstack set up the qualification system, every call he gets on is with someone who has budget, needs help now, and is actually the decision maker. His close rate has nearly tripled in 60 days. — David M. Director, Lead Generation Agency",
    name: "Michael Johnson",
    role: "Director, Lead Gen Agency · Canada",
    avatar: "kGoQcTIw1fAqbj2U9kOtJrmNE.jpg",
  },
];

/**
 * The /services page shows the same six services but with its own icon set
 * (all use the circle icon) and slightly different copy for Dead Lead Reactivation.
 */
export const SERVICES_PAGE_CARDS: Service[] = SERVICES.map((s) =>
  s.title === "Dead Lead Reactivation"
    ? {
        ...s,
        icon: "response" as const,
        body: "Got a graveyard of old leads your clients gave up on? We run an AI-powered reactivation campaign on that dead list. Every cold contact gets a personalised outreach across email and SMS — dormant leads turn into booked calls.",
      }
    : { ...s, icon: "response" as const },
);
