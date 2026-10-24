"use client";

import { motion } from "framer-motion";
import Pill from "@/components/ui/Pill";
import ButtonPill from "@/components/ui/ButtonPill";
import {
  IconResponse,
  IconArticle,
  IconBrowser,
  IconAperture,
} from "@/components/ui/icons";
import { AUDIENCES } from "@/lib/data";

const ICONS = {
  response: IconResponse,
  article: IconArticle,
  browser: IconBrowser,
  aperture: IconAperture,
} as const;

const cardSpring = { type: "spring" as const, stiffness: 118, damping: 30, mass: 1 };

/**
 * "Who we work with" — the business types we build for. Uses the same card
 * treatment as the rest of the site so nothing new is introduced visually.
 */
export default function Audience() {
  return (
    <section className="flex w-full items-center justify-center gap-[60px] px-3 py-[50px] md:px-10 md:py-20 lg:py-[100px]">
      <div className="flex w-full max-w-[1440px] flex-col items-start justify-center gap-10 md:gap-[30px] lg:gap-[60px]">
        <div className="flex w-full flex-col items-end justify-center gap-[30px]">
          <div className="flex w-full flex-col items-start justify-center gap-5">
            <div className="flex w-full flex-col items-start justify-start gap-3 md:flex-row md:items-center md:gap-6">
              <Pill>Who we work with</Pill>
              <h2 className="font-display text-[28px] font-normal leading-[34px] tracking-[-1.2px] text-white md:text-[40px] md:leading-[44px] md:tracking-[-1.8px]">
                Built for small and medium businesses
              </h2>
            </div>
            <p className="max-w-[700px] font-body text-[18px] leading-[27px] tracking-[-0.36px] text-white opacity-60">
              If your business takes enquiries, bookings or orders, or your team repeats the
              same admin every day, there is usually something here worth fixing.
            </p>
          </div>
          <ButtonPill href="/contact-us">Tell us about your business</ButtonPill>
        </div>

        <div className="grid w-full grid-cols-1 gap-2.5 md:grid-cols-2 lg:grid-cols-3">
          {AUDIENCES.map((a, i) => {
            const Icon = ICONS[a.icon];
            return (
              <motion.div
                key={a.name}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ ...cardSpring, delay: (i % 3) * 0.06 }}
                className="flex flex-col items-start gap-[25px] rounded-[20px] border border-white-05 bg-[rgba(13,13,13,0.1)] p-5 backdrop-blur-[10px]"
              >
                <span className="flex size-[60px] items-center justify-center rounded-[20px] bg-white-05 p-[9px]">
                  <Icon className="size-[42px] text-brand" />
                </span>
                <div className="flex flex-col items-start gap-1.5">
                  <h3 className="font-display text-[20px] font-normal leading-[26px] tracking-[-0.1px] text-white">
                    {a.name}
                  </h3>
                  <p className="font-body text-[16px] leading-[24px] text-white opacity-60">
                    {a.body}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
