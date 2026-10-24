import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";
import { SOCIAL_URLS } from "@/lib/social";

export const SITE_NAME = "Aerstack";
export const OG_IMAGE = "/images/og-image.png";
/** Real pixel size of OG_IMAGE. Declaring the wrong size makes crawlers refetch. */
export const OG_W = 1176;
export const OG_H = 633;

/**
 * Builds a complete Metadata object for a page.
 *
 * Next merges `title` and `description` with the root layout, but a page level
 * `openGraph` or `twitter` object REPLACES the layout's entirely. Writing them
 * by hand per page is how og:image silently goes missing, so every page goes
 * through here and always gets a full set.
 */
export function pageMeta({
  title,
  description,
  path,
  image = OG_IMAGE,
  type = "website",
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: "website" | "article";
}): Metadata {
  const url = path === "/" ? SITE_URL : `${SITE_URL}${path}`;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type,
      url,
      siteName: SITE_NAME,
      title,
      description,
      images: [{ url: image, width: OG_W, height: OG_H, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

/** Renders a JSON-LD block. Next allows this in a server component. */
export function jsonLd(data: Record<string, unknown>) {
  return {
    __html: JSON.stringify(data).replace(/</g, "\\u003c"),
  };
}

export const ORGANISATION = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organisation`,
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/favicon-aerstack.png`,
  image: `${SITE_URL}${OG_IMAGE}`,
  description:
    "Aerstack builds websites, management software and AI workflows for small and medium businesses.",
  email: "abdullahdilshad111@gmail.com",
  telephone: "+92 310 6442188",
  founder: [
    { "@type": "Person", name: "Abdullah Dilshad" },
    { "@type": "Person", name: "Umar Tanvir" },
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "sales",
      email: "abdullahdilshad111@gmail.com",
      telephone: "+92 310 6442188",
      availableLanguage: ["English"],
    },
  ],
  sameAs: SOCIAL_URLS,
};

export const WEBSITE = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: SITE_NAME,
  publisher: { "@id": `${SITE_URL}/#organisation` },
};

/** Service schema for one of the three core services. */
export function serviceLd({
  name,
  description,
  path,
}: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: `${SITE_URL}${path}`,
    provider: { "@id": `${SITE_URL}/#organisation` },
    areaServed: "Worldwide",
    audience: {
      "@type": "BusinessAudience",
      name: "Small and medium businesses",
    },
  };
}

export function faqLd(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((i) => ({
      "@type": "Question",
      name: i.q,
      acceptedAnswer: { "@type": "Answer", text: i.a },
    })),
  };
}

export function breadcrumbLd(trail: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((t, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: t.name,
      item: `${SITE_URL}${t.path}`,
    })),
  };
}

export function caseStudyLd({
  title,
  description,
  path,
  image,
}: {
  title: string;
  description: string;
  path: string;
  image: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title.slice(0, 110),
    description,
    url: `${SITE_URL}${path}`,
    image: `${SITE_URL}/images/${image}`,
    author: { "@id": `${SITE_URL}/#organisation` },
    publisher: { "@id": `${SITE_URL}/#organisation` },
    isPartOf: { "@id": `${SITE_URL}/#website` },
  };
}
