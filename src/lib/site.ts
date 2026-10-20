/** Canonical origin. Override per-environment with NEXT_PUBLIC_SITE_URL on Vercel. */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://www.aerstack.com";

/** Static routes, mirroring the live sitemap. Case-study details are appended from data. */
export const STATIC_ROUTES = [
  "/",
  "/about",
  "/services",
  "/case-studies",
  "/review",
  "/contact-us",
  "/licensed-assets",
  "/service-ilr",
  "/service-webdev",
  "/service-mvp",
  "/service-alq",
  "/service-dlr",
  "/service-fullpipe",
] as const;
