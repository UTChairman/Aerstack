"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { SVGProps } from "react";

/* Value-card icons — verbatim duotone paths, rendered in brand orange like the live site */
const Duo = ({ dim, solid, ...p }: SVGProps<SVGSVGElement> & { dim: string; solid?: string }) => (
  <svg viewBox="0 0 256 256" fill="currentColor" {...p}>
    <path d={dim} opacity="0.2" />
    {solid ? <path d={solid} /> : null}
  </svg>
);

const STATS = [
  { n: "2+", label: "Years of Experience" },
  { n: "10+", label: "Successful Projects" },
  { n: "10+", label: "Happy Clients" },
  { n: "15", label: "5 Star Reviews" },
];

const VALUES = [
  {
    title: "Delivered, Not Demoed",
    body: "We finish what we build. Our POS system runs in production across multiple branches of a working restaurant.",
    dim: "M94.81,192,65.36,214.24a8,8,0,0,1-12.81-4.51L40.19,154.1a8,8,0,0,1,1.66-6.86l30.31-36.33C71,134.25,76.7,161.43,94.81,192Zm119.34-44.76-30.31-36.33c1.21,23.34-4.54,50.52-22.65,81.09l29.45,22.24a8,8,0,0,0,12.81-4.51l12.36-55.63A8,8,0,0,0,214.15,147.24Z",
    solid:
      "M128,120a16,16,0,1,0-16-16A16,16,0,0,0,128,120Zm93.85,20.42-12.36,55.63a16,16,0,0,1-25.61,9L152,181.32a123.05,123.05,0,0,1-48,0L72.12,205a16,16,0,0,1-25.61-9L34.15,140.42a16.08,16.08,0,0,1,3.32-13.71l31.83-38.2a115.63,115.63,0,0,1,7.33-25.26c11.79-27.63,31.14-40.51,44.07-46.49a16,16,0,0,1,13.4,0c12.93,6,32.28,18.86,44.07,46.49a115.63,115.63,0,0,1,7.33,25.26l31.83,38.2A16.08,16.08,0,0,1,221.85,140.42Z",
  },
  {
    title: "Built Around You",
    body: "We shape the system around how your business already works instead of making your team adapt to someone else's software.",
    dim: "M152,128a24,24,0,1,1-24-24A24,24,0,0,1,152,128Z",
    solid:
      "M200,152a31.84,31.84,0,0,0-19.53,6.68l-23.11-18A31.65,31.65,0,0,0,160,128c0-.74,0-1.48-.08-2.21l13.23-4.41A32,32,0,1,0,168,104c0,.74,0,1.48.08,2.21l-13.23,4.41A32,32,0,0,0,128,96a32,32,0,1,0,0,64,31.85,31.85,0,0,0,19.53-6.68l23.11,18A31.65,31.65,0,0,0,168,176a32,32,0,1,0,32-24Zm0-64a16,16,0,1,1-16,16A16,16,0,0,1,200,88ZM128,144a16,16,0,1,1,16-16A16,16,0,0,1,128,144Zm72,48a16,16,0,1,1,16-16A16,16,0,0,1,200,192Z",
  },
  {
    title: "Yours To Run",
    body: "You own what we build and you can change the parts you need to change without coming back to us every time.",
    dim: "M160,112a32,32,0,1,1-32-32A32,32,0,0,1,160,112Z",
    solid:
      "M224,40V76a8,8,0,0,1-16,0V48H180a8,8,0,0,1,0-16h36A8,8,0,0,1,224,40Zm-8,132a8,8,0,0,0-8,8v28H180a8,8,0,0,0,0,16h36a8,8,0,0,0,8-8V180A8,8,0,0,0,216,172ZM76,208H48V180a8,8,0,0,0-16,0v36a8,8,0,0,0,8,8H76a8,8,0,0,0,0-16ZM40,84a8,8,0,0,0,8-8V48H76a8,8,0,0,0,0-16H40a8,8,0,0,0-8,8V76A8,8,0,0,0,40,84Z",
  },
];

const TAGS = [
  "Continuous Innovation",
  "Dedicated Support",
  "Positive Client Experiences",
  "Commitment to Excellence",
];

function Atom({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 256 256" fill="currentColor" className={className} aria-hidden>
      <path d="M128,88a40,40,0,1,0,40,40A40,40,0,0,0,128,88Zm0,64a24,24,0,1,1,24-24A24,24,0,0,1,128,152Z" />
      <path
        d="M223.3,169.8c-6.9-11.9-17.2-24.2-30-35.9,1.3-1.3,2.6-2.6,3.8-3.9,29.3-30.4,40.4-61.4,29.6-80.1S181.5,26.8,140,38.2c-4,1.1-8,2.4-12,3.9-4-1.5-8-2.8-12-3.9C74.5,26.8,42.1,31.2,31.3,49.9S32.4,99.5,61.7,130c1.2,1.3,2.5,2.6,3.8,3.9-12.8,11.7-23.1,24-30,35.9-10.8,18.7-11,35.9-.2,54.6s43.2,23.1,84.7,11.7c4-1.1,8-2.4,12-3.9,4,1.5,8,2.8,12,3.9,41.5,11.4,73.9,7,84.7-11.7S234.1,188.5,223.3,169.8Z"
        opacity="0.25"
      />
    </svg>
  );
}

export default function Stats() {
  return (
    <section
      className="
        relative flex w-full flex-col items-center justify-between overflow-hidden
        gap-[100px] px-3 py-[50px]
        md:h-[120vh] md:gap-0 md:px-5 md:py-20
        lg:gap-[60px] lg:pb-[50px] lg:pt-10
      "
    >
      {/* Background photo */}
      <div className="absolute inset-0 opacity-60" style={{ filter: "contrast(2) grayscale(0.48)" }}>
        <Image
          src="/images/xOz91BrLMifZXksr8HqpgNMqqEc.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>
      {/* Orange radial overlay */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.91]"
        style={{
          backgroundImage:
            "radial-gradient(45.1% 44.7% at 52.6% 42.8%, rgb(245, 131, 39) 0%, rgb(10, 10, 10) 100%)",
        }}
      />

      {/* Stat circles — 187px, overlapping, zig-zag on desktop */}
      <div className="relative flex items-center justify-center gap-2.5 pr-4">
        <div className="grid grid-cols-2 justify-items-center gap-y-4 lg:grid-cols-4 lg:gap-0">
          {STATS.map((s, i) => (
            <div
              key={s.label}
              className={
                i % 2 === 0 ? "lg:w-[170px] lg:translate-y-[70px]" : "lg:w-[170px]"
              }
            >
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ type: "spring", stiffness: 118, damping: 30, delay: i * 0.06 }}
                className="flex size-[150px] flex-col items-center justify-center gap-[3px] rounded-full bg-white-10 p-8 backdrop-blur-[5px] md:size-[187px] md:p-[54px]"
              >
                <span className="whitespace-nowrap font-display text-[40px] font-normal leading-[0.8em] tracking-[-0.05em] text-white">
                  {s.n}
                </span>
                <span className="whitespace-nowrap font-body text-[14px] leading-[22px] text-white-80 md:text-[16px] md:leading-[24px]">
                  {s.label}
                </span>
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      {/* Values + tags */}
      <div className="relative flex w-full max-w-[1440px] flex-col items-start justify-center gap-[23px]">
        <div className="flex w-full flex-col items-center justify-center gap-2.5 md:flex-row">
          {VALUES.map((v) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ type: "spring", stiffness: 118, damping: 30 }}
              className="flex w-full max-w-[460px] flex-col items-center justify-center gap-[25px] rounded-[20px] border border-white-05 bg-[rgba(13,13,13,0.1)] p-5 backdrop-blur-[10px]"
            >
              <span className="flex size-[60px] items-center justify-center rounded-[20px] bg-white-05 p-[9px]">
                <Duo dim={v.dim} solid={v.solid} className="size-[42px] text-brand" />
              </span>
              <div className="flex w-full flex-col items-center justify-center gap-1.5">
                <h3 className="text-center font-display text-[20px] font-normal leading-[26px] tracking-[-0.1px] text-white">
                  {v.title}
                </h3>
                <p className="text-center font-body text-[16px] leading-[24px] text-white opacity-60">
                  {v.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tag pills — gap 8, px 80 on desktop */}
        <div className="flex w-full flex-row flex-wrap items-center justify-center gap-2 md:px-20">
          {TAGS.map((t) => (
            <span
              key={t}
              className="flex items-center justify-center gap-1 rounded-[20px] bg-white-10 px-5 py-2.5 backdrop-blur-[5px]"
            >
              <Atom className="size-5 shrink-0 text-brand" />
              <span className="font-body text-[16px] leading-[24px] text-white">{t}</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
