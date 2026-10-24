"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Pill from "@/components/ui/Pill";

const LOGOS = [
  "yhpIH0GdxLw99gay0FBpfIIM.png",
  "eb5BAUbWpDSbM0QrEZiDqbwVQwM.png",
  "LMLU2SDUt6FEk6RYhSyhUN1T3A.png",
  "AJekJWTMMpjIkNLkfhO2mh041c.png",
  "13io4DirT94ABxHfIqZer9j2G8.png",
  "AFwhon4kAyZHNTAkLIgTyKvTTJg.png",
];

export default function Brands({
  eyebrow = "Brands Collaborations",
  heading = "Brands that trust us",
}: {
  eyebrow?: string;
  heading?: string;
} = {}) {
  const loop = [...LOGOS, ...LOGOS, ...LOGOS];
  return (
    <section className="flex w-full flex-col items-center justify-center gap-[50px] px-5 py-[50px] md:gap-5 md:px-10 md:pb-20 md:pt-[70px] lg:py-[100px]">
      {/* Heading */}
      <div className="flex w-full max-w-[1440px] flex-col items-center justify-center gap-2.5">
        <div className="flex flex-col items-center justify-center gap-2.5">
          <Pill>{eyebrow}</Pill>
          <h2 className="max-w-[800px] text-center font-display text-[28px] font-normal leading-[34px] tracking-[-1.2px] text-white md:text-[40px] md:leading-[44px] md:tracking-[-1.8px]">
            {heading}
          </h2>
        </div>
      </div>

      {/* Logo ticker — 98px tall row of 186x98 cards */}
      <div className="flex w-full max-w-[1440px] items-center justify-center overflow-hidden rounded-[30px] p-2.5">
        <motion.ul
          className="flex w-max list-none flex-row items-center gap-2.5"
          animate={{ x: ["0%", "-33.333%"] }}
          transition={{ duration: 26, ease: "linear", repeat: Infinity }}
        >
          {loop.map((logo, i) => (
            <li key={`${logo}-${i}`}>
              <div className="flex h-[98px] w-[186px] flex-col items-center justify-center gap-[3px] rounded-[30px] bg-white-10 px-7 py-3.5">
                <span className="relative block h-[71px] w-[130px]">
                  <Image
                    src={`/images/${logo}`}
                    alt=""
                    fill
                    sizes="130px"
                    className="object-contain"
                  />
                </span>
              </div>
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
