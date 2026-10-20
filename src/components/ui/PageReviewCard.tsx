"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { PageReview } from "@/lib/reviews-data";

function Stars() {
  return (
    <span className="flex items-center gap-1 text-brand" aria-label="5 out of 5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="12" height="11" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
          <path d="M10 1.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L10 15.9 4.8 18.6l1-5.8L1.5 8.7l5.9-.9L10 1.5Z" />
        </svg>
      ))}
    </span>
  );
}

/** /review page card — 675 wide, bg white/5, radius 20, p 20, gap 21, blur 5 */
export default function PageReviewCard({ r, delay = 0 }: { r: PageReview; delay?: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ type: "spring", stiffness: 118, damping: 30, mass: 1, delay }}
      className="flex w-full flex-col items-start justify-center gap-[21px] rounded-[20px] bg-white-05 p-5 backdrop-blur-[5px]"
    >
      <Stars />

      <p className="font-body text-[18px] font-normal leading-[27px] tracking-[-0.36px] text-white opacity-90">
        {r.quote}
      </p>

      <div className="flex w-full flex-row items-center gap-2.5">
        {r.avatar && (
          <span className="flex size-[52px] shrink-0 items-center justify-center rounded-[20px] bg-[rgba(51,66,50,0.05)] p-1">
            <span className="relative block size-11 overflow-hidden rounded-[17px]">
              <Image src={`/images/${r.avatar}`} alt={r.name} fill sizes="44px" className="object-cover" />
            </span>
          </span>
        )}
        <div className="flex flex-col justify-center">
          <h5 className="font-display text-[14px] font-medium leading-[19.6px] text-white">
            {r.name}
          </h5>
          <span className="font-body text-[11px] font-black uppercase leading-[22px] text-white opacity-80">
            {r.role}
          </span>
        </div>
      </div>
    </motion.article>
  );
}
