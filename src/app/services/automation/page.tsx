import type { Metadata } from "next";
import ServicePageTemplate from "@/components/site/ServicePageTemplate";
import StructuredData from "@/components/site/StructuredData";
import { SERVICE_PAGES } from "@/lib/services-data";
import { pageMeta, serviceLd, faqLd, breadcrumbLd } from "@/lib/seo";

const service = SERVICE_PAGES.find((s) => s.slug === "automation")!;
const PATH = "/services/automation";

export const metadata: Metadata = pageMeta({
  title: "AI Workflows and Business Automation | Aerstack",
  description: "Automations that save time: instant replies on WhatsApp, appointment reminders, booking confirmations and enquiry follow up.",
  path: PATH,
});

export default function Page() {
  return (
    <>
      <StructuredData
        data={[
          serviceLd({ name: "AI Workflows", description: service.tagline, path: PATH }),
          faqLd(service.faq),
          breadcrumbLd([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: "AI Workflows", path: PATH },
          ]),
        ]}
      />
      <ServicePageTemplate s={service} />
    </>
  );
}
