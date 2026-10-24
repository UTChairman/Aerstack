import type { MetadataRoute } from "next";
import { SITE_URL, STATIC_ROUTES } from "@/lib/site";
import { CASE_STUDIES } from "@/lib/case-studies";

/** Pages that earn a higher priority than the 0.6 default. */
const PRIORITY: Record<string, number> = {
  "/": 1,
  "/services": 0.9,
  "/services/websites": 0.9,
  "/services/software": 0.9,
  "/services/automation": 0.9,
  "/case-studies": 0.8,
  "/contact-us": 0.8,
  "/about": 0.7,
  "/review": 0.7,
  "/licensed-assets": 0.2,
};

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const pages = [
    ...STATIC_ROUTES,
    ...CASE_STUDIES.map((cs) => `/case-studies/${cs.slug}`),
  ];

  return pages.map((route) => ({
    url: route === "/" ? `${SITE_URL}/` : `${SITE_URL}${route}`,
    lastModified: now,
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: PRIORITY[route] ?? 0.6,
  }));
}
