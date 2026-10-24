import type { Metadata } from "next";
import ServicePageTemplate from "@/components/site/ServicePageTemplate";
import { SERVICE_PAGES } from "@/lib/services-data";

const service = SERVICE_PAGES.find((s) => s.slug === "websites")!;

export const metadata: Metadata = {
  alternates: { canonical: "/services/websites" },
  title: "Websites | Aerstack",
  description: "Fast, modern, mobile friendly websites for small and medium businesses that turn visitors into calls, bookings and orders.",
};

export default function Page() {
  return <ServicePageTemplate s={service} />;
}
