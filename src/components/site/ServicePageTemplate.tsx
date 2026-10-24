import Image from "next/image";
import Pill from "@/components/ui/Pill";
import ButtonPill from "@/components/ui/ButtonPill";
import Timeline from "@/components/sections/Timeline";
import Pricing from "@/components/sections/Pricing";
import Faq from "@/components/sections/Faq";
import type { ServicePage } from "@/lib/services-data";

export default function ServicePageTemplate({ s }: { s: ServicePage }) {
  return (
    <main className="flex w-full flex-col items-center justify-center">
      {/* Hero */}
      <div className="flex w-full flex-col items-center justify-center gap-8 px-5 pb-10 pt-[120px] md:px-10 md:pt-[140px]">
        <h1 className="max-w-[900px] text-center font-display text-[32px] font-normal leading-[38px] tracking-[-1.6px] text-white md:text-[50px] md:leading-[55px] md:tracking-[-2.5px]">
          {s.title}
        </h1>
        <p className="max-w-[760px] text-center font-body text-[18px] leading-[27px] tracking-[-0.36px] text-white opacity-80">
          {s.tagline}
        </p>
        <ButtonPill href="/contact-us">{s.heroCta}</ButtonPill>
      </div>

      {/* Cover image */}
      <div className="w-full px-3 pb-[50px] md:px-10 md:pb-[60px]">
        <div className="relative mx-auto aspect-[1360/648] w-full max-w-[1360px] overflow-hidden rounded-[30px]">
          <Image
            src="/images/XLt6XSIBVeu8zJJxt8DZelCJBUk.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
      </div>

      {/* Benefits */}
      <section className="flex w-full items-center justify-center px-3 py-[50px] md:px-10 md:py-20">
        <div className="flex w-full max-w-[1440px] flex-col gap-10 md:gap-[50px]">
          <div className="flex flex-col items-start gap-2.5">
            <Pill>Benefits</Pill>
            <h2 className="font-display text-[28px] font-normal leading-[30.8px] tracking-[-1.2px] text-white lg:text-[40px] lg:leading-[44px] lg:tracking-[-1.8px]">
              {s.benefitsHeading}
            </h2>
          </div>

          <div className="flex flex-col gap-5">
            {s.what.map((line) => (
              <p
                key={line}
                className="font-body text-[22px] leading-[30.8px] text-white opacity-80 md:text-[26px] md:leading-[36.4px] lg:text-[30px] lg:leading-[39px]"
              >
                {line}
              </p>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-2.5 lg:grid-cols-2">
            {s.benefits.map((b, i) => (
              <div key={b} className="flex items-center gap-3 rounded-[20px] bg-white-05 p-6">
                <span className="font-display text-[14px] font-normal leading-[21px] text-brand md:text-[16px] md:leading-[24px]">
                  {String(i + 1).padStart(2, "0")}.
                </span>
                <span className="font-display text-[14px] font-normal leading-[21px] text-white md:text-[16px] md:leading-[24px]">
                  {b}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service details — facts */}
      <section className="flex w-full items-center justify-center px-3 py-[50px] md:px-10 md:py-20">
        <div className="flex w-full max-w-[1440px] flex-col gap-10">
          <div className="flex flex-col items-start gap-2.5">
            <Pill>Service Details</Pill>
            <h2 className="font-display text-[28px] font-normal leading-[30.8px] tracking-[-1.2px] text-white lg:text-[40px] lg:leading-[44px] lg:tracking-[-1.8px]">
              {s.detailsHeading}
            </h2>
            <p className="font-body text-[16px] leading-[24px] text-brand">{s.factsIntro}</p>
          </div>
          <ul className="flex list-none flex-col gap-2.5">
            {s.facts.map((f) => (
              <li
                key={f}
                className="rounded-[20px] bg-white-05 p-6 font-body text-[16px] leading-[24px] text-white opacity-80"
              >
                {f}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Timeline heading={s.worksHeading} steps={s.steps} />

      {/* Only services with published plans show a pricing section. */}
      {s.plans && s.plans.length > 0 && (
        <Pricing
          heading={s.pricingHeading ?? "Pricing"}
          cta={s.pricingCta ?? "GET STARTED"}
          toggle={s.pricingToggle ?? []}
          plans={s.plans}
        />
      )}

      <Faq heading={s.faqHeading} items={s.faq} />
    </main>
  );
}
