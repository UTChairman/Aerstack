"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUp,
  IconResponse,
  IconArticle,
  IconBrowser,
  IconAperture,
} from "@/components/ui/icons";
import type { Service } from "@/lib/data";

const ICONS = {
  response: IconResponse,
  article: IconArticle,
  browser: IconBrowser,
  aperture: IconAperture,
} as const;

const cardSpring = { type: "spring" as const, stiffness: 118, damping: 30, mass: 1 };

export default function ServiceCard({ s }: { s: Service }) {
  const Icon = ICONS[s.icon];
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={cardSpring}
    >
      <Link
        href={s.href}
        className="group flex h-[374px] flex-col items-start justify-between overflow-hidden rounded-[30px] bg-[#1f1d1d] p-5 transition-colors duration-300 hover:bg-[#262322]"
      >
        <div className="flex w-full flex-col items-start gap-[17px]">
          <span className="flex size-14 items-center justify-center rounded-[20px] bg-white-05 p-2.5">
            <Icon className="size-9 text-brand" />
          </span>
          <h3 className="font-display text-[20px] font-normal leading-[26px] tracking-[-0.1px] text-white">
            {s.title}
          </h3>
        </div>

        <div className="flex w-full max-w-[600px] flex-1 flex-col justify-end opacity-60">
          <p className="whitespace-pre-line font-body text-[16px] font-normal leading-[24px] text-white">
            {s.body}
          </p>
        </div>

        <div className="flex items-center gap-2.5 pt-5">
          <span className="font-display text-[12px] uppercase leading-[24px] tracking-[-0.1px] text-white">
            Learn More
          </span>
          <span className="grid size-7 place-items-center rounded-full border border-white-10 transition-all duration-300 group-hover:border-brand group-hover:bg-brand">
            <ArrowUp className="size-3 rotate-45 text-white transition-colors duration-300 group-hover:text-ink" />
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
