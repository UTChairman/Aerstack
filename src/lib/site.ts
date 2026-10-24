/** Canonical origin. Override per-environment with NEXT_PUBLIC_SITE_URL on Vercel. */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://www.aerstack.com";

/** Static routes. Project detail pages are appended from data. */
export const STATIC_ROUTES = [
  "/",
  "/about",
  "/services",
  "/services/websites",
  "/services/software",
  "/services/automation",
  "/case-studies",
  "/review",
  "/contact-us",
  "/licensed-assets",
] as const;
