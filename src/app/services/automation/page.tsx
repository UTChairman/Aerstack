import type { Metadata } from "next";
import ServicePageTemplate from "@/components/site/ServicePageTemplate";
import { SERVICE_PAGES } from "@/lib/services-data";

const service = SERVICE_PAGES.find((s) => s.slug === "automation")!;

export const metadata: Metadata = {
  alternates: { canonical: "/services/automation" },
  title: "AI Workflows | Aerstack",
  description: "Automations that save time: instant replies on WhatsApp, appointment reminders, booking confirmations and enquiry follow up.",
};

export default function Page() {
  return <ServicePageTemplate s={service} />;
}
