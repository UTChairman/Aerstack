import type { Metadata } from "next";
import PageBanner from "@/components/site/PageBanner";
import ServiceCard from "@/components/ui/ServiceCard";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import StructuredData from "@/components/site/StructuredData";
import { SERVICES_PAGE_CARDS } from "@/lib/data";
import { pageMeta, breadcrumbLd } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Services | Websites, Software and AI Workflows",
  description:
    "Three services for small and medium businesses: websites that bring in enquiries, custom POS and management software, and AI workflows that cut admin.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <main className="flex w-full flex-col items-center justify-center">
      <StructuredData
        data={[breadcrumbLd([{ name: "Home", path: "/" }, { name: "Services", path: "/services" }])]}
      />
      <PageBanner>
        Three ways we
        <br />
        help businesses
      </PageBanner>

      <section className="flex w-full items-center justify-center gap-[60px] px-3 pb-[50px] md:px-10 md:pb-[80px] lg:pb-[100px]">
        <div className="flex w-full max-w-[1440px] flex-col items-center justify-center gap-10 md:max-w-[1000px] md:gap-[60px] lg:max-w-[1440px] lg:gap-2.5">
          {/* The cards are h3; this keeps the document outline from skipping h2. */}
          <h2 className="sr-only">Our services</h2>
          <div className="grid w-full grid-cols-1 gap-2.5 md:grid-cols-3">
            {SERVICES_PAGE_CARDS.map((s) => (
              <ServiceCard key={s.title} s={s} />
            ))}
          </div>
        </div>
      </section>

      <WhyChooseUs />
    </main>
  );
}
