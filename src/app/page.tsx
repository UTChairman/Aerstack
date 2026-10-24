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

export const metadata: Metadata = { alternates: { canonical: "/" } };

export default function HomePage() {
  return (
    <>
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
