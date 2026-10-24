import type { Metadata } from "next";
import ServicePageTemplate from "@/components/site/ServicePageTemplate";
import StructuredData from "@/components/site/StructuredData";
import { SERVICE_PAGES } from "@/lib/services-data";
import { pageMeta, serviceLd, faqLd, breadcrumbLd } from "@/lib/seo";

const service = SERVICE_PAGES.find((s) => s.slug === "websites")!;
const PATH = "/services/websites";

export const metadata: Metadata = pageMeta({
  title: "Business Websites That Bring In Enquiries | Aerstack",
  description: "Fast, modern, mobile friendly websites for small and medium businesses that turn visitors into calls, bookings and orders.",
  path: PATH,
});

export default function Page() {
  return (
    <>
      <StructuredData
        data={[
          serviceLd({ name: "Websites", description: service.tagline, path: PATH }),
          faqLd(service.faq),
          breadcrumbLd([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: "Websites", path: PATH },
          ]),
        ]}
      />
      <ServicePageTemplate s={service} />
    </>
  );
}
