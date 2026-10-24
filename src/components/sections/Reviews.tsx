"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import ButtonPill from "@/components/ui/ButtonPill";
import { REVIEWS, type Review } from "@/lib/data";

function Stars({ className = "" }: { className?: string }) {
  return (
    <span className={`flex items-center gap-[3px] text-brand ${className}`} aria-label="5 out of 5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="11" height="10" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
          <path d="M10 1.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L10 15.9 4.8 18.6l1-5.8L1.5 8.7l5.9-.9L10 1.5Z" />
        </svg>
      ))}
    </span>
  );
}

function QuoteMark() {
  return (
    <svg viewBox="0 0 55 55" className="size-[55px] fill-white opacity-30" aria-hidden>
      <path d="M 8.459 14.419 C 11.674 10.934 16.539 9.167 22.919 9.167 L 25.211 9.167 L 25.211 15.627 L 23.366 15.996 C 20.226 16.624 18.042 17.859 16.874 19.672 C 16.264 20.648 15.918 21.766 15.87 22.917 L 22.917 22.917 C 24.182 22.917 25.208 23.943 25.208 25.208 L 25.208 41.25 C 25.208 43.778 23.153 45.833 20.625 45.833 L 6.875 45.833 C 5.609 45.833 4.583 44.807 4.583 43.542 L 4.583 32.083 L 4.59 25.394 C 4.57 25.14 4.134 19.112 8.459 14.419 Z M 45.836 45.833 L 32.086 45.833 C 30.82 45.833 29.794 44.807 29.794 43.542 L 29.794 32.083 L 29.799 25.394 C 29.778 25.14 29.343 19.112 33.667 14.419 C 36.882 10.934 41.747 9.167 48.127 9.167 L 50.419 9.167 L 50.419 15.627 L 48.574 15.996 C 45.434 16.624 43.25 17.859 42.082 19.672 C 41.472 20.648 41.126 21.766 41.078 22.917 L 48.125 22.917 C 49.39 22.917 50.417 23.943 50.417 25.208 L 50.417 41.25 C 50.417 43.778 48.362 45.833 45.833 45.833 Z" />
    </svg>
  );
}

/** Card: 610 wide, gap 17, p 20, bg rgba(13,13,13,.1), radius 20, blur 5 */
function ReviewItem({ r }: { r: Review }) {
  return (
    <li className="flex w-full flex-col items-start justify-center gap-[17px] rounded-[20px] bg-[rgba(13,13,13,0.1)] p-5 backdrop-blur-[5px]">
      <div className="flex w-full flex-col items-center justify-center gap-2.5">
        <div className="flex w-full items-center justify-between">
          <Stars />
        </div>
        {/* quote mark overlays the top-left; text is full width with pt-[30px] */}
        <div className="relative flex w-full items-center justify-center gap-2.5 pt-[30px]">
          <span className="pointer-events-none absolute -left-2.5 top-0">
            <QuoteMark />
          </span>
          <p className="w-full whitespace-pre-line font-body text-[18px] font-normal leading-[27px] tracking-[-0.36px] text-white opacity-80">
            {r.quote}
          </p>
        </div>
      </div>

      <div className="flex w-full flex-col items-center justify-center gap-2.5">
        <div className="h-px w-full bg-white-10" />
        <div className="flex w-full flex-row items-center justify-start gap-2.5">
          <span className="flex size-[52px] shrink-0 items-center justify-center rounded-[20px] bg-[rgba(51,66,50,0.05)] p-1">
            <span className="relative block size-11 overflow-hidden rounded-[17px]">
              <Image src={`/images/${r.avatar}`} alt={r.name} fill sizes="44px" className="object-cover" />
            </span>
          </span>
          <div className="flex flex-col justify-center">
            <h5 className="font-display text-[14px] font-medium leading-[19.6px] text-white">
              {r.name}
            </h5>
            <span className="font-body text-[11px] uppercase leading-[22px] text-white opacity-80">
              {r.role}
            </span>
          </div>
        </div>
      </div>
    </li>
  );
}

export default function Reviews() {
  // Nothing to show until real customer quotes are added to REVIEWS, and an
  // empty scrolling column would read as a broken section.
  if (REVIEWS.length === 0) return null;

  const loop = [...REVIEWS, ...REVIEWS];
  return (
    <section className="relative flex w-full items-center justify-center gap-[60px] overflow-hidden md:pt-10 lg:pt-0">
      <div className="relative flex w-full max-w-[1440px] flex-col items-center justify-start gap-[30px] pb-[50px] md:gap-[60px] md:pb-20 lg:pb-[100px]">
        {/* Orange blurred blob */}
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-[-107px] h-[148px] w-[589px] max-w-full -translate-x-1/2 rounded-[210px] bg-brand"
          style={{ filter: "blur(67px)" }}
        />

        {/* Giant TESTIMONIAL wordmark — fit-to-width */}
        <svg
          aria-hidden
          viewBox="0 0 566 81"
          preserveAspectRatio="xMidYMid meet"
          className="pointer-events-none w-full select-none opacity-[0.23]"
        >
          <text
            x="283"
            y="63"
            textAnchor="middle"
            fill="#ffffff"
            className="font-display"
            style={{ fontSize: "67.374px", fontWeight: 400 }}
          >
            TESTIMONIAL
          </text>
        </svg>

        {/* Scrolling column — 630x805 wrapper, 610 track, gap 10 */}
        <div className="relative h-[560px] w-full max-w-[630px] overflow-hidden p-2.5 md:h-[700px] lg:h-[805px]">
          <motion.ul
            className="flex list-none flex-col items-center gap-2.5"
            animate={{ y: ["0%", "-50%"] }}
            transition={{ duration: 40, ease: "linear", repeat: Infinity }}
          >
            {loop.map((r, i) => (
              <ReviewItem key={`${r.name}-${i}`} r={r} />
            ))}
          </motion.ul>
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 bottom-0 h-[90px]"
            style={{ backgroundImage: "linear-gradient(0deg, #0a0a0a 0%, rgba(0,0,0,0) 100%)" }}
          />
        </div>

        <ButtonPill href="/review">View All Reviews</ButtonPill>
      </div>
    </section>
  );
}
