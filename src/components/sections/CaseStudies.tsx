"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Pill from "@/components/ui/Pill";
import { CASE_STUDIES, type CaseStudy } from "@/lib/case-studies";
import ButtonPill from "@/components/ui/ButtonPill";

const spring = { type: "spring" as const, stiffness: 118, damping: 30, mass: 1 };

// Home shows the first four case studies, alternating across two staggered columns.
const HOME_FOUR = CASE_STUDIES.slice(0, 4);
const LEFT = HOME_FOUR.filter((_, i) => i % 2 === 0);
const RIGHT = HOME_FOUR.filter((_, i) => i % 2 === 1);

function Card({ cs }: { cs: CaseStudy }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 200 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={spring}
      className="w-full"
    >
      <Link
        href={`/case-studies/${cs.slug}`}
        className="group flex w-full flex-col items-center justify-start gap-2.5"
      >
        {/* Cover — square, radius 30 */}
        <div className="relative aspect-square w-full overflow-hidden rounded-[30px]">
          <Image
            src={`/images/${cs.img}`}
            alt={cs.title}
            fill
            sizes="(max-width: 900px) 100vw, 665px"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </div>

        {/* Content box */}
        <div className="flex w-full flex-col items-start justify-center gap-[53px] rounded-[30px] bg-white-05 p-5">
          <div className="flex w-full flex-col items-start justify-center gap-2.5">
            <Pill>Case Study</Pill>
            <h3 className="whitespace-pre-line font-display text-[20px] font-normal leading-[26px] tracking-[-0.1px] text-white">
              {cs.title}
            </h3>
            <p className="whitespace-pre-line font-body text-[16px] leading-[24px] text-white opacity-80">
              {cs.subtitle}
            </p>
          </div>

          <div className="flex w-full flex-row items-center justify-start gap-9">
            {cs.metrics.map((m, i) => (
              <div
                key={m.label}
                className={`flex flex-1 flex-col justify-center gap-2.5 ${
                  i === 1 ? "items-end" : "items-start"
                }`}
              >
                <span className="font-display text-[50px] font-semibold leading-[40px] tracking-[-2.5px] text-brand">
                  {m.value}
                </span>
                <span className="font-body text-[16px] leading-[24px] text-white opacity-80">
                  {m.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export default function CaseStudies() {
  return (
    <section className="flex w-full flex-col items-center justify-center gap-[60px] px-3 py-[50px] md:px-10 md:py-20 lg:pb-[200px] lg:pt-[100px]">
      {/* Heading */}
      <div className="flex w-full max-w-[1440px] flex-col items-center justify-center gap-2.5">
        <div className="flex flex-col items-center justify-center gap-2.5">
          <Pill>Works</Pill>
          <h2 className="max-w-[800px] text-center font-display text-[28px] font-normal leading-[34px] tracking-[-1.2px] text-white md:text-[40px] md:leading-[44px] md:tracking-[-1.8px]">
            Case Studies
          </h2>
        </div>
      </div>

      {/* Staggered 2-column layout — right column offset 150px */}
      <div className="flex w-full max-w-[1440px] flex-col items-start justify-center gap-10 md:flex-row md:gap-5 lg:gap-[30px]">
        <div className="flex w-full flex-col items-center justify-center gap-10 md:max-w-[665px]">
          {LEFT.map((cs) => (
            <Card key={cs.slug} cs={cs} />
          ))}
        </div>
        <div className="flex w-full flex-col items-center justify-center gap-10 md:max-w-[665px] md:pt-[150px]">
          {RIGHT.map((cs) => (
            <Card key={cs.slug} cs={cs} />
          ))}
        </div>
      </div>

      <ButtonPill href="/case-studies">View All Projects</ButtonPill>
    </section>
  );
}
