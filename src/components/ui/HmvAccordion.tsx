"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CaretDown } from "@/components/ui/icons";
import { HMV_ITEMS } from "@/lib/hmv-data";

/**
 * "Our History / Mission / Vision" accordion.
 * Item: 74px collapsed, bg white/10, radius 30, padding 20, gap 10 between.
 */
export default function HmvAccordion() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="flex w-full flex-col items-center justify-center gap-2.5">
      {HMV_ITEMS.map((item, i) => {
        const isOpen = open === i;
        return (
          <div
            key={item.serial}
            className="flex w-full flex-col items-center justify-start gap-[38px] rounded-[30px] bg-white-10 p-5"
          >
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
            >
              <span className="flex items-center gap-2.5 pr-2.5">
                <span className="font-display text-[16px] font-light leading-[24px] tracking-[-0.32px] text-white">
                  {item.serial}
                </span>
                <span className="font-display text-[16px] font-light leading-[24px] tracking-[-0.32px] text-white">
                  {item.title}
                </span>
              </span>
              <motion.span
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.25, ease: [0.44, 0, 0.56, 1] }}
                className="grid size-[34px] shrink-0 place-items-center rounded-[10px] bg-white-15"
              >
                <CaretDown className="size-3.5 text-white" />
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
                  <p className="whitespace-pre-line font-body text-[16px] leading-[24px] text-white opacity-60">
                    {item.body}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
