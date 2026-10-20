"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Pill from "@/components/ui/Pill";
import type { CaseStudy } from "@/lib/case-studies";

const spring = { type: "spring" as const, stiffness: 118, damping: 30, mass: 1 };

/**
 * /case-studies row.
 * Desktop-Wide: 404×404 cover + copy panel side by side, gap 10, panel space-between.
 * Tablet and Phone: the row stacks, the panel centres its blocks 53px apart and
 * gains a "LEARN MORE" affordance that the desktop layout does not show. The
 * metrics sit side by side everywhere except Phone, where they stack.
 */
export default function CaseStudyRow({ cs, delay = 0 }: { cs: CaseStudy; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ ...spring, delay }}
      className="w-full"
    >
      <Link
        href={`/case-studies/${cs.slug}`}
        className="group flex w-full flex-col items-stretch justify-start gap-2.5 lg:flex-row lg:items-center"
      >
        {/* Cover */}
        <div className="relative aspect-square w-full shrink-0 overflow-hidden rounded-[30px] lg:size-[404px]">
          <Image
            src={`/images/${cs.img}`}
            alt={cs.title}
            fill
            sizes="(max-width: 1199px) 100vw, 404px"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </div>

        {/* Content panel */}
        <div className="flex w-full flex-col items-start justify-center gap-[53px] rounded-[30px] bg-white-05 p-5 lg:h-[404px] lg:justify-between lg:gap-0">
          <div className="flex w-full flex-col items-start justify-center gap-2.5">
            <Pill>Case Study</Pill>
            <h3 className="whitespace-pre-line font-display text-[18px] font-normal leading-[25.2px] tracking-[-0.1px] text-white md:text-[20px] md:leading-[28px] lg:leading-[26px]">
              {cs.title}
            </h3>
            <p className="whitespace-pre-line font-body text-[18px] leading-[25.2px] text-white opacity-80 md:text-[20px] md:leading-[28px] lg:text-[16px] lg:leading-[24px]">
              {cs.subtitle}
            </p>
          </div>

          {/* Metrics — stacked on Phone, side by side from Tablet up. Gap 36 either way. */}
          <div className="flex w-full flex-col items-start justify-start gap-9 md:flex-row">
            {cs.metrics.map((m) => (
              <div key={m.label} className="flex flex-col justify-center gap-2.5 md:flex-1">
                <span className="font-display text-[45px] font-semibold leading-[36px] tracking-[-2.25px] text-brand md:text-[46px] md:leading-[36.8px] lg:text-[50px] lg:leading-[40px] lg:tracking-[-2.5px]">
                  {m.value}
                </span>
                <span className="font-body text-[16px] leading-[24px] text-white opacity-80">
                  {m.label}
                </span>
              </div>
            ))}
          </div>

          {/* Only rendered below Desktop-Wide, where the cover no longer sits alongside */}
          <div className="flex w-full items-center justify-between lg:hidden">
            <span className="font-body text-[12px] font-normal uppercase leading-[24px] tracking-[-0.1px] text-white">
              Learn More
            </span>
            <span
              aria-hidden
              className="grid size-7 shrink-0 place-items-center rounded-[8px] border border-white-15 text-white transition-colors group-hover:border-brand group-hover:text-brand"
            >
              <svg viewBox="0 0 16 16" fill="none" className="size-3">
                <path
                  d="M4 12 12 4M6 4h6v6"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
