"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import ButtonPill from "@/components/ui/ButtonPill";

// Framer "spring-physics 212 85 1"
const spring = { type: "spring" as const, stiffness: 212, damping: 85, mass: 1 };

const TICKER = "Websites. Management Software. AI Workflows.";

export default function Hero() {
  return (
    <section className="relative isolate flex w-full flex-col items-center justify-center gap-[31px] pt-[180px]">
      {/* Background gradient — 855px tall, anchored to section bottom */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-[855px] w-full overflow-hidden"
        style={{
          backgroundImage:
            "linear-gradient(rgba(191, 51, 19, 0) 16.354%, rgb(245, 131, 39) 77.3549%)",
        }}
      />

      {/* Heading content — gap 32, px 40 */}
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ...spring, delay: 0.4 }}
        className="relative z-20 flex w-full flex-col items-center justify-center gap-8 px-10"
      >
        <div className="flex w-full flex-col items-center justify-center gap-5">
          {/* Headline — flex wrap row, maxW 820, gap 10 */}
          <h1 className="flex max-w-[820px] flex-row flex-wrap items-center justify-center gap-[10px] text-center font-display text-[40px] font-normal leading-[0.92] tracking-[-1.6px] text-white sm:text-[54px] md:text-[70px] md:leading-[63px] md:tracking-[-3px]">
            <span className="max-w-[740px]">Digital</span>

            {/* Highlighted word — orange box rotated +3deg, text counter-rotated -3deg */}
            <span className="inline-flex rotate-[3deg] items-center justify-center bg-brand">
              <span className="inline-block -rotate-[3deg] px-1 text-ink-strong">solutions</span>
            </span>

            <span className="max-w-[740px]">for</span>

            {/* Megaphone — 73px orange circle, icon rotated -16deg */}
            <span className="inline-flex size-[48px] shrink-0 items-center justify-center overflow-hidden rounded-[180px] bg-brand md:size-[73px]">
              <Image
                src="/images/b4IW2nPWxHJ6UTAoq3A4u5d56ps.png"
                alt=""
                width={73}
                height={73}
                className="size-full -rotate-[16deg] object-contain"
              />
            </span>

            <span className="max-w-[740px]">businesses.</span>
          </h1>

          {/* Subhead — Satoshi 18/27, -0.36px, white 80%, maxW 600 */}
          <p className="max-w-[600px] text-center font-body text-[18px] font-normal leading-[27px] tracking-[-0.36px] text-white-80">
            We build websites, management software and AI workflows for small and medium
            businesses. One team for the site people find you through, the system that runs
            your day, and the automations that take the repetitive work off your team.
          </p>
        </div>

        <ButtonPill href="/contact-us">Contact Us</ButtonPill>
      </motion.div>

      {/* Image band — 678px, contrast/grayscale filter */}
      <motion.div
        initial={{ opacity: 0, y: 170 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ...spring, delay: 0.2 }}
        className="relative z-10 h-[241px] w-full md:h-[441px] lg:h-[678px]"
        style={{ filter: "contrast(1.23) grayscale(0.14)" }}
      >
        {/* Ticker — behind image, starts 196px into the band, 320px tall */}
        <div className="pointer-events-none absolute inset-x-0 top-[29%] z-0 flex h-[320px] items-center overflow-hidden p-2.5">
          <motion.div
            className="flex w-max flex-nowrap items-center gap-[50px]"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 28, ease: "linear", repeat: Infinity }}
          >
            {Array.from({ length: 4 }).map((_, i) => (
              <span
                key={i}
                className="whitespace-nowrap font-display text-[48px] leading-[1.2] text-white md:text-[96px]"
              >
                {TICKER}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Businessmen cutout — object-contain (renders ~708px wide, centered) */}
        <Image
          src="/images/bxq0A8Hhwin15ojgBCOBsiw7rw.png"
          alt="Aerstack team"
          fill
          priority
          sizes="100vw"
          className="relative z-10 object-contain"
        />

        {/* Bottom fade */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-[182px] overflow-hidden"
          style={{
            backgroundImage:
              "linear-gradient(rgba(84, 84, 84, 0) 41.6399%, rgb(10, 10, 10) 100%)",
          }}
        />
      </motion.div>

      {/* Floating glass badge — 368x162, overhangs bottom by 70px */}
      <div className="absolute bottom-[-70px] left-1/2 z-30 flex w-[368px] max-w-[calc(100%-32px)] -translate-x-1/2 flex-col items-start justify-center gap-2.5 overflow-hidden rounded-[40px] border border-white-15 bg-white-05 p-5 backdrop-blur-[5px]">
        <p className="font-display text-[20px] font-normal uppercase leading-[26px] tracking-[-0.4px] text-white">
          A Digital Solutions Company.
        </p>
        <div className="h-px w-full bg-white-10" />
        {/* What we do. This previously held a stock avatar stack and a star
            rating, neither of which could be substantiated, so it now states
            the three services instead. */}
        <ul className="flex w-full list-none flex-col gap-1.5">
          {["Websites", "Management software", "AI workflows"].map((s) => (
            <li key={s} className="flex items-center gap-2.5">
              <span aria-hidden className="size-1.5 shrink-0 rounded-full bg-brand" />
              <span className="font-body text-[14px] leading-[20px] text-white-80">{s}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
