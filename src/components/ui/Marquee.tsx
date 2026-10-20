"use client";

import { motion } from "framer-motion";

/** Horizontal infinite ticker — mirrors Framer's Ticker component. */
export default function Marquee({
  text,
  className = "",
  durationSec = 24,
}: {
  text: string;
  className?: string;
  durationSec?: number;
}) {
  const items = Array.from({ length: 6 });
  return (
    <div className={`relative w-full overflow-hidden ${className}`}>
      <motion.div
        className="flex w-max flex-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: durationSec, ease: "linear", repeat: Infinity }}
      >
        {items.map((_, i) => (
          <span
            key={i}
            className="whitespace-nowrap px-8 font-display text-[96px] leading-[1.2] text-white"
          >
            {text}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
