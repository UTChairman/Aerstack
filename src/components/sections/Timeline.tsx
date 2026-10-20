"use client";

import { motion } from "framer-motion";
import Pill from "@/components/ui/Pill";

export type Step = { n: string; title: string; body: string[] };

function StepRow({ s, last }: { s: Step; last: boolean }) {
  return (
    <div className="flex w-full flex-row items-stretch justify-center gap-6 pt-[10px] md:gap-12 md:pt-[226px]">
      {/* Left rail — ghosted number + connector line. Live drops both on Phone and
          runs the cards full width there. */}
      <div className="hidden w-[60px] shrink-0 flex-col items-center gap-5 self-stretch pt-5 md:flex md:w-[100px]">
        <span
          className="font-display text-[40px] font-normal uppercase leading-[46.2px] tracking-[-1px] opacity-15 md:text-[66px]"
          style={{ color: "rgba(255, 221, 0, 0.43)" }}
          aria-hidden
        >
          {s.n}
        </span>
        {/* The card sets the row height; the connector just fills what is left of the
            rail, so it varies per step (live: 487/415/439 on /about, 295 on service pages). */}
        {!last && (
          <div className="-mb-[6px] w-[3px] flex-1 self-center bg-white-05 md:-mb-[216px]" />
        )}
      </div>

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, y: 200 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ type: "spring", stiffness: 118, damping: 30, mass: 1 }}
        className="flex w-full max-w-[600px] flex-col items-center justify-center gap-4"
      >
        <div className="flex w-full flex-col items-center justify-center gap-2.5 rounded-[30px] bg-white-05 px-5 pb-[30px] pt-5 md:px-[30px]">
          <div className="flex w-full flex-col items-start justify-center gap-[11px]">
            {/* STEP nn pill */}
            <span className="inline-flex items-center justify-center gap-0.5 rounded-[39px] bg-white-05 px-3 py-[3px]">
              <span className="font-body text-[11px] font-black uppercase leading-[22px] text-brand">
                Step
              </span>
              <span className="font-body text-[11px] font-black uppercase leading-[22px] text-brand">
                {s.n}
              </span>
            </span>
            <h3 className="font-display text-[18px] font-normal leading-[25.2px] tracking-[-0.1px] text-white md:text-[20px] md:leading-[26px]">
              {s.title}
            </h3>
          </div>

          <div className="flex w-full flex-col gap-5">
            {s.body.map((para) => (
              <p
                key={para}
                className="font-body text-[16px] leading-[24px] text-white opacity-60"
              >
                {para}
              </p>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function Timeline({
  eyebrow = "How We Work",
  heading,
  steps,
}: {
  eyebrow?: string;
  heading: string;
  steps: Step[];
}) {
  return (
    <section className="flex w-full flex-col items-center justify-center gap-[60px] px-[50px] py-[100px]">
      <div className="flex flex-col items-center justify-center gap-2.5">
        <Pill>{eyebrow}</Pill>
        <h2 className="max-w-[800px] text-center font-display text-[28px] font-normal leading-[34px] tracking-[-1.2px] text-white md:text-[40px] md:leading-[44px] md:tracking-[-1.8px]">
          {heading}
        </h2>
      </div>

      <div className="flex w-full max-w-[1340px] flex-col items-center justify-center">
        {steps.map((s, i) => (
          <StepRow key={s.n} s={s} last={i === steps.length - 1} />
        ))}
      </div>
    </section>
  );
}
