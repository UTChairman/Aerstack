import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Audience from "@/components/sections/Audience";
import Brands from "@/components/sections/Brands";
import Stats from "@/components/sections/Stats";
import CaseStudies from "@/components/sections/CaseStudies";
import Reviews from "@/components/sections/Reviews";
import WhyUs from "@/components/sections/WhyUs";
import Faq from "@/components/sections/Faq";
import StructuredData from "@/components/site/StructuredData";
import { pageMeta, faqLd } from "@/lib/seo";
import { FAQ_ITEMS } from "@/lib/faq-data";

export const metadata: Metadata = pageMeta({
  title: "Aerstack | Digital solutions for businesses",
  description:
    "Aerstack builds websites, custom management software such as POS and inventory, and AI workflows for small and medium businesses.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <StructuredData data={[faqLd(FAQ_ITEMS)]} />
      <main className="flex w-full flex-col items-center justify-center">
        <Hero />
        <Services />
        <Audience />
        <Brands />
        <Stats />
        <CaseStudies />
        <Reviews />
        <WhyUs />
        <Faq />
      </main>
    </>
  );
}
