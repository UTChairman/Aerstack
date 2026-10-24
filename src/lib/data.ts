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
 * Testimonials.
 *
 * Intentionally empty. The previous entries were marketing agency testimonials
 * carried over from the Framer template and their attribution did not match
 * (one quote signed "James R." was labelled "S. Power"), so they have been
 * removed rather than rewritten. Sections that read this array render nothing
 * while it is empty.
 *
 * TODO(client): add real quotes with the customer's name, business and city.
 */
export const REVIEWS: Review[] = [];

/** The /services page shows the same three services with a single icon set. */
export const SERVICES_PAGE_CARDS: Service[] = SERVICES.map((s) => ({
  ...s,
  icon: "response" as const,
}));
