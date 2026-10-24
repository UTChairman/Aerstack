export type IconKey = "response" | "article" | "browser" | "aperture";

export type Service = {
  title: string;
  body: string;
  href: string;
  icon: IconKey;
};

/** The three core services. Everything else on the site leads with these. */
export const SERVICES: Service[] = [
  {
    title: "Websites",
    icon: "browser",
    href: "/services/websites",
    body: "Fast, modern, mobile friendly websites that turn visitors into calls, bookings and orders. Built to load quickly, rank on Google and work properly on every screen, with content you can edit yourself.",
  },
  {
    title: "Management Software",
    icon: "article",
    href: "/services/software",
    body: "Custom POS, inventory, staff and reporting systems built around how your business actually works. One place to take orders, track stock, manage your team and see what is really happening across every branch.",
  },
  {
    title: "AI Workflows",
    icon: "response",
    href: "/services/automation",
    body: "Automations that save you time. Instant replies to customer enquiries on WhatsApp, appointment reminders, booking confirmations, follow up on new enquiries and the repetitive admin that eats your week.",
  },
];

/** Business types we build for. Used by the "Who we work with" section. */
export type Audience = { name: string; body: string; icon: IconKey };

export const AUDIENCES: Audience[] = [
  {
    name: "Restaurants and cafes",
    icon: "aperture",
    body: "Ordering, menus, branches, stock and staff in one system, plus a site that takes bookings.",
  },
  {
    name: "Clinics and practices",
    icon: "response",
    body: "Appointment booking, reminders that cut no shows, and patient enquiries answered the moment they arrive.",
  },
  {
    name: "Retail and wholesale",
    icon: "browser",
    body: "Point of sale, inventory across locations, and reporting that tells you what is actually selling.",
  },
  {
    name: "Service businesses",
    icon: "article",
    body: "Quote requests, job scheduling and customer follow up handled without anyone chasing it manually.",
  },
  {
    name: "Agencies and studios",
    icon: "response",
    body: "Client enquiry handling, onboarding and reporting automated so your team stays on billable work.",
  },
  {
    name: "Anyone with a manual process",
    icon: "aperture",
    body: "If your team repeats the same task every day, it can usually be built once and run on its own.",
  },
];

export type Metric = { value: string; label: string };

/** Shape of a project card. The projects themselves live in lib/case-studies.ts. */
export type CaseStudy = {
  slug: string;
  img: string;
  title: string;
  subtitle: string;
  metrics: [Metric, Metric];
};

export type Review = { quote: string; name: string; role: string; avatar: string };

/**
 * Testimonials shown on the home page.
 *
 * Each quote used to end with its own signature while the `name` field said
 * something different, so the card showed two different people for one quote.
 * The signature has been removed from the quote text (the card already renders
 * the name and role underneath) and the name now follows the signature, which
 * matches the same people on the /review page.
 */
export const REVIEWS: Review[] = [
  {
    quote:
      "Before Aerstack, I was losing leads every single day just because I was too busy to reply fast enough. Within the first week of their system going live, I had calls booking automatically while I was out doing client work. Honestly did not think it would work this well this fast.",
    name: "James R.",
    role: "Owner, Social Media Marketing Agency · UK",
    avatar: "Y9KmJAQ4w53hsc4jJojfokLZ7D8.jpg",
  },
  {
    quote:
      "We had over 800 old leads sitting untouched in our CRM. Aerstack ran a reactivation campaign and we got 31 booked calls in under 3 weeks from people we had completely given up on. Zero ad spend. The ROI was immediate and the whole thing ran without us doing anything manually.",
    name: "Sarah K.",
    role: "Founder, PPC & Paid Ads Agency · USA",
    avatar: "6uPQSjDGRQZxLCvtvV5va15J1hs.jpg",
  },
  {
    quote:
      "Our sales rep was spending most of his time on leads that were never going to buy. Since Aerstack set up the qualification system, every call he gets on is with someone who has budget, needs help now, and is actually the decision maker. His close rate has nearly tripled in 60 days.",
    name: "David M.",
    role: "Director, Lead Generation Agency · Canada",
    avatar: "kGoQcTIw1fAqbj2U9kOtJrmNE.jpg",
  },
];

/** The /services page shows the same three services with a single icon set. */
export const SERVICES_PAGE_CARDS: Service[] = SERVICES.map((s) => ({
  ...s,
  icon: "response" as const,
}));
