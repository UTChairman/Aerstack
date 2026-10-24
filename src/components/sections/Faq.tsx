"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Pill from "@/components/ui/Pill";
import { CaretDown } from "@/components/ui/icons";
import { FAQ_ITEMS, type FaqItem } from "@/lib/faq-data";

export default function Faq({
  eyebrow = "Frequently Asked Questions",
  heading,
  items = FAQ_ITEMS,
}: {
  eyebrow?: string;
  heading?: React.ReactNode;
  items?: FaqItem[];
}) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="flex w-full items-center justify-center gap-[60px] px-3 py-[50px] md:px-10 md:py-20 lg:py-[100px]">
      <div className="flex w-full max-w-[1440px] flex-col items-center justify-center gap-10 md:gap-[60px]">
        <div className="flex flex-col items-center justify-center gap-2.5">
          <Pill>{eyebrow}</Pill>
          <h2 className="max-w-[800px] text-center font-display text-[28px] font-normal leading-[34px] tracking-[-1.2px] text-white md:text-[40px] md:leading-[44px] md:tracking-[-1.8px]">
            {heading ?? (
              <>
                Got Questions?
                <br />
                We&apos;ve Got Answers!
              </>
            )}
          </h2>
        </div>

        <div className="flex w-full max-w-[1000px] flex-col items-center justify-center gap-5">
          {items.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                key={item.q}
                className="flex w-full flex-col items-center justify-start gap-[38px] rounded-[30px] bg-white-05 p-5 backdrop-blur-[5px]"
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
                >
                  <h3 className="font-display text-[16px] font-light leading-[24px] tracking-[-0.32px] text-white">
                    {item.q}
                  </h3>
                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25, ease: [0.44, 0, 0.56, 1] }}
                    className="grid size-[34px] shrink-0 place-items-center rounded-[10px] bg-brand"
                  >
                    <CaretDown className="size-3.5 text-ink" />
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="w-full overflow-hidden"
                    >
                      <p className="font-body text-[16px] leading-[24px] text-white opacity-60">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
