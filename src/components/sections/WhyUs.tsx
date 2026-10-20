"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Pill from "@/components/ui/Pill";

const spring = { type: "spring" as const, stiffness: 118, damping: 30, mass: 1 };

const TAGS: { label: string; rot: number }[] = [
  { label: "Instant Response", rot: -14 },
  { label: "AI Qualification", rot: 8 },
  { label: "Follow-Up Automation", rot: -8 },
  { label: "Lead Scoring", rot: 5 },
  { label: "Auto-Booking", rot: -10 },
  { label: "CRM Integration", rot: 4 },
  { label: "Pipeline Visibility", rot: -4 },
  { label: "SMS Outreach", rot: 7 },
  { label: "Email Sequences", rot: -6 },
  { label: "Reliability", rot: 9 },
  { label: "No Manual Work", rot: -3 },
];

function Atom() {
  return (
    <svg viewBox="0 0 256 256" className="size-5 shrink-0 fill-ink-strong" aria-hidden>
      <path d="M128,88a40,40,0,1,0,40,40A40,40,0,0,0,128,88Zm0,64a24,24,0,1,1,24-24A24,24,0,0,1,128,152Z" />
      <path d="M223.3,169.8c-6.9-11.9-17.2-24.2-30-35.9,1.3-1.3,2.6-2.6,3.8-3.9,29.3-30.4,40.4-61.4,29.6-80.1S181.5,26.8,140,38.2c-4,1.1-8,2.4-12,3.9-4-1.5-8-2.8-12-3.9C74.5,26.8,42.1,31.2,31.3,49.9S32.4,99.5,61.7,130c1.2,1.3,2.5,2.6,3.8,3.9-12.8,11.7-23.1,24-30,35.9-10.8,18.7-11,35.9-.2,54.6s43.2,23.1,84.7,11.7c4-1.1,8-2.4,12-3.9,4,1.5,8,2.8,12,3.9,41.5,11.4,73.9,7,84.7-11.7S234.1,188.5,223.3,169.8Z" opacity="0.25" />
    </svg>
  );
}

export default function WhyUs() {
  return (
    <section className="flex w-full items-center justify-center gap-[60px] px-3 py-[50px] md:px-10 md:py-20 lg:py-[100px]">
      <div className="flex w-full max-w-[1440px] flex-col items-start justify-center gap-10 md:gap-[30px] lg:gap-[60px]">
        {/* Heading */}
        <div className="flex w-full flex-col items-start justify-center gap-5">
          <div className="flex w-full flex-col items-start justify-start gap-3 md:flex-row md:items-center md:gap-6">
            <Pill>Why Us</Pill>
            <h2 className="font-display text-[28px] font-normal leading-[34px] tracking-[-1.2px] text-white md:text-[40px] md:leading-[44px] md:tracking-[-1.8px]">
              Our Specialities
            </h2>
          </div>
          <div className="flex w-full justify-end">
            <p className="max-w-[500px] font-body text-[18px] leading-[27px] tracking-[-0.36px] text-white opacity-60">
              We do one thing exceptionally well. We build automated lead follow-up and
              qualification systems that turn the leads you already have into booked calls.
            </p>
          </div>
        </div>

        {/* Bento */}
        <div className="flex w-full flex-col items-center justify-center gap-2.5">
          {/* Row 1 */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={spring}
            className="flex w-full flex-col items-stretch gap-2.5 md:flex-row"
          >
            {/* 60 seconds card */}
            <div className="relative flex min-h-[460px] flex-[880] flex-col items-start justify-end gap-5 overflow-hidden rounded-[30px] p-[30px]">
              <Image
                src="/images/tpbW8SIi5ra8nVMEwdsyHi8dw.jpg"
                alt=""
                fill
                sizes="(max-width: 1024px) 100vw, 880px"
                className="object-cover"
              />
              <div
                aria-hidden
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    "linear-gradient(243deg, rgba(84, 84, 84, 0) 54.7054%, rgb(10, 10, 10) 100%)",
                }}
              />
              <div className="relative flex flex-col items-start justify-center">
                <span className="font-display text-[64px] font-normal leading-[1.2] text-white md:text-[96px] md:leading-[115.2px]">
                  60
                </span>
                <span className="font-display text-[20px] font-normal uppercase leading-[26px] tracking-[-0.4px] text-white">
                  (Seconds)
                </span>
                <span className="font-display text-[20px] font-normal uppercase leading-[26px] tracking-[-0.4px] text-white">
                  Average Lead Response Time
                </span>
              </div>
              <div className="relative rounded-[20px] py-2.5 pr-2.5 backdrop-blur-[5px]">
                <p className="font-body text-[16px] leading-[24px] text-white opacity-80">
                  Every lead that comes into  your pipeline gets a personalised response  in under
                  60 seconds. Day or night.  Weekend or holiday. The system never  sleeps and never
                  misses.
                </p>
              </div>
            </div>

            {/* 2-3x card */}
            <div className="flex min-h-[460px] flex-[470] flex-col items-center justify-between rounded-[30px] bg-[#1f1d1d] p-[30px]">
              <div className="flex w-full flex-col items-start">
                <span className="font-display text-[64px] font-normal leading-[1.1] text-white md:text-[96px] md:leading-[115.2px]">
                  2-3x
                </span>
                <span className="font-display text-[20px] font-normal uppercase leading-[26px] tracking-[-0.4px] text-white">
                  Increase
                </span>
              </div>
              <p className="w-full font-body text-[16px] leading-[24px] text-white opacity-80">
                Agencies using our automated  follow-up and qualification systems  typically see 2
                to 3 times more booked  discovery calls within the first 60 days  — from the exact
                same lead volume they  were already generating.
              </p>
            </div>
          </motion.div>

          {/* Row 2 */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={spring}
            className="flex w-full flex-col items-stretch gap-2.5 md:flex-row"
          >
            {/* Tag cloud card */}
            <div className="relative flex min-h-[460px] flex-[645] items-center justify-center overflow-hidden rounded-[30px]">
              <Image
                src="/images/QHwiFG8CdFS1wdIHWtWHvAuzLAM.jpg"
                alt=""
                fill
                sizes="(max-width: 1024px) 100vw, 645px"
                className="object-cover"
              />
              {/* Circular tag cloud — pills laid out in centred rows inside a circle */}
              <div className="relative flex size-[366px] flex-col items-center justify-center gap-2 overflow-hidden rounded-full px-3">
                {TAGS.map((t) => (
                  <span
                    key={t.label}
                    style={{ transform: `rotate(${t.rot}deg)` }}
                    className="inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full bg-brand px-3 py-1 font-body text-[14px] leading-[22px] text-ink-strong"
                  >
                    <Atom />
                    {t.label}
                  </span>
                ))}
              </div>
            </div>

            {/* 70% card */}
            <div className="flex min-h-[460px] flex-[695] flex-col items-end justify-between rounded-[30px] bg-brand p-[30px]">
              <div className="flex w-full flex-col items-end">
                <span className="text-right font-display text-[18px] font-normal uppercase leading-[26px] tracking-[-0.4px] text-ink-strong md:text-[20px]">
                  Of leads never get followed up
                </span>
                <span className="font-display text-[64px] font-normal leading-[1.1] text-ink-strong md:text-[96px] md:leading-[115.2px]">
                  70%
                </span>
              </div>
              <p className="w-full font-body text-[16px] leading-[24px] text-ink-strong opacity-90">
                Research shows 70% of leads  are abandoned after just one contact.  Our system
                follows up every single lead  7 times over 14 days automatically —  recovering the
                revenue most agencies  never knew they were losing.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
