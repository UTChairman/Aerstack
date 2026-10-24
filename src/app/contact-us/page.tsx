import type { Metadata } from "next";
import { pageMeta, breadcrumbLd } from "@/lib/seo";
import StructuredData from "@/components/site/StructuredData";
import CalEmbed from "@/components/ui/CalEmbed";

export const metadata: Metadata = pageMeta({
  title: "Contact Aerstack | Book a Free Consultation",
  description:
    "Book a free consultation with Aerstack. Tell us about your business and we will come back with a clear scope before any work starts.",
  path: "/contact-us",
});

const CAL_LINK = "muhammad-abdullah-dilshad-yg8v2k/30min";

export default function ContactPage() {
  return (
    <main className="flex w-full flex-col items-center justify-center">
      <StructuredData
        data={[breadcrumbLd([{ name: "Home", path: "/" }, { name: "Contact", path: "/contact-us" }])]}
      />

      {/* Banner — measured live: 270 / 270 / 360 tall, 40px top pad, heading always 2 lines */}
      <div className="flex h-[270px] w-full items-center justify-center gap-2.5 px-5 pt-10 md:px-0 lg:h-[360px]">
        <h1 className="max-w-[350px] text-center font-display text-[27px] font-normal leading-[29.7px] tracking-[-1.35px] text-brand md:max-w-[490px] md:text-[40px] md:leading-[44px] md:tracking-[-2px] lg:max-w-[740px] lg:text-[50px] lg:leading-[55px] lg:tracking-[-2.5px]">
          Book a free
          <br />
          consultation
        </h1>
      </div>

      {/* Cal.com inline scheduler. Live pins the slot to 758 / 694 / 706 and lets the
          widget scroll inside it rather than growing the page, so the frame fills it. */}
      <section className="flex w-full items-center justify-center px-[10px] md:px-[55px] lg:px-0">
        <div className="h-[758px] w-full max-w-[1194px] overflow-hidden rounded-[20px] md:h-[694px] lg:h-[706px]">
          <CalEmbed link={CAL_LINK} />
        </div>
      </section>

      {/* "OR !" — a fit-to-width mark: live renders it at a constant 10% of the
          viewport, i.e. a 5vw type size, inside a 97 / 178 / 86 tall slot. */}
      <div className="flex h-[97px] w-full items-center justify-center md:h-[178px] lg:h-[86px]">
        <p className="text-center font-sans text-[5vw] font-bold leading-none text-white">
          OR !
        </p>
      </div>
    </main>
  );
}
