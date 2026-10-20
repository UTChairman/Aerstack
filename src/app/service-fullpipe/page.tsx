import type { Metadata } from "next";
import ServicePageTemplate from "@/components/site/ServicePageTemplate";
import { SERVICE_PAGES } from "@/lib/services-data";

const service = SERVICE_PAGES.find((s) => s.slug === "service-fullpipe")!;

export const metadata: Metadata = {
  alternates: { canonical: "/service-fullpipe" },
  title: `${service.title} — Aerstack`,
  description: service.tagline,
};

export default function Page() {
  return <ServicePageTemplate s={service} />;
}
