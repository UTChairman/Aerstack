import type { Metadata } from "next";
import ServicePageTemplate from "@/components/site/ServicePageTemplate";
import StructuredData from "@/components/site/StructuredData";
import { SERVICE_PAGES } from "@/lib/services-data";
import { pageMeta, serviceLd, faqLd, breadcrumbLd } from "@/lib/seo";

const service = SERVICE_PAGES.find((s) => s.slug === "software")!;
const PATH = "/services/software";

export const metadata: Metadata = pageMeta({
  title: "Custom POS and Management Software | Aerstack",
  description: "Custom POS, inventory, staff and reporting systems built around how your business actually works, including multi branch setups.",
  path: PATH,
});

export default function Page() {
  return (
    <>
      <StructuredData
        data={[
          serviceLd({ name: "Management Software", description: service.tagline, path: PATH }),
          faqLd(service.faq),
          breadcrumbLd([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: "Management Software", path: PATH },
          ]),
        ]}
      />
      <ServicePageTemplate s={service} />
    </>
  );
}
