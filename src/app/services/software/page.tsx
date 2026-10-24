import type { Metadata } from "next";
import ServicePageTemplate from "@/components/site/ServicePageTemplate";
import { SERVICE_PAGES } from "@/lib/services-data";

const service = SERVICE_PAGES.find((s) => s.slug === "software")!;

export const metadata: Metadata = {
  alternates: { canonical: "/services/software" },
  title: "Management Software | Aerstack",
  description: "Custom POS, inventory, staff and reporting systems built around how your business actually works, including multi branch setups.",
};

export default function Page() {
  return <ServicePageTemplate s={service} />;
}
