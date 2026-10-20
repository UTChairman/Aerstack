import type { Metadata } from "next";
import PageBanner from "@/components/site/PageBanner";
import ServiceCard from "@/components/ui/ServiceCard";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import { SERVICES_PAGE_CARDS } from "@/lib/data";

export const metadata: Metadata = {
  alternates: { canonical: "/services" },
  title: "Services — Aerstack",
  description:
    "Instant lead response, AI lead qualification, dead lead reactivation, full pipeline automation, MVP builds and web development.",
};

export default function ServicesPage() {
  return (
    <main className="flex w-full flex-col items-center justify-center">
      <PageBanner>
        Discover
        <br />
        Our Services
      </PageBanner>

      <section className="flex w-full items-center justify-center gap-[60px] px-3 pb-[50px] md:px-10 md:pb-[80px] lg:pb-[100px]">
        <div className="flex w-full max-w-[1440px] flex-col items-center justify-center gap-10 md:max-w-[1000px] md:gap-[60px] lg:max-w-[1440px] lg:gap-2.5">
          <div className="grid w-full grid-cols-1 gap-2.5 lg:grid-cols-2">
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
