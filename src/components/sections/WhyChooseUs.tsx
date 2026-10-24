"use client";

import { motion } from "framer-motion";
import Pill from "@/components/ui/Pill";
import type { SVGProps } from "react";

const Duo = ({ dim, solid, ...p }: SVGProps<SVGSVGElement> & { dim: string; solid?: string }) => (
  <svg viewBox="0 0 256 256" fill="currentColor" {...p}>
    <path d={dim} opacity="0.2" />
    {solid ? <path d={solid} /> : null}
  </svg>
);

/* Icons extracted verbatim from the live /services page */
const ITEMS = [
  {
    title: "Delivered, Not Demoed",
    body: "Our POS system runs in production across multiple branches of a working restaurant. We finish what we start.",
    dim: "M94.81,192,65.36,214.24a8,8,0,0,1-12.81-4.51L40.19,154.1a8,8,0,0,1,1.66-6.86l30.31-36.33C71,134.25,76.7,161.43,94.81,192Zm119.34-44.76-30.31-36.33c1.21,23.34-4.54,50.52-22.65,81.09l29.45,22.24a8,8,0,0,0,12.81-4.51l12.36-55.63A8,8,0,0,0,214.15,147.24Z",
    solid:
      "M128,120a16,16,0,1,0-16-16A16,16,0,0,0,128,120Zm93.85,20.42-12.36,55.63a16,16,0,0,1-25.61,9L152,181.32a123.05,123.05,0,0,1-48,0L72.12,205a16,16,0,0,1-25.61-9L34.15,140.42a16.08,16.08,0,0,1,3.32-13.71l31.83-38.2a115.63,115.63,0,0,1,7.33-25.26c11.79-27.63,31.14-40.51,44.07-46.49a16,16,0,0,1,13.4,0c12.93,6,32.28,18.86,44.07,46.49a115.63,115.63,0,0,1,7.33,25.26l31.83,38.2A16.08,16.08,0,0,1,221.85,140.42Z",
  },
  {
    title: "Tailored Solutions",
    body: "We build around how your business already works rather than making your team adapt to someone else's software.",
    dim: "M152,128a24,24,0,1,1-24-24A24,24,0,0,1,152,128Z",
    solid:
      "M200,152a31.84,31.84,0,0,0-19.53,6.68l-23.11-18A31.65,31.65,0,0,0,160,128c0-.74,0-1.48-.08-2.21l13.23-4.41A32,32,0,1,0,168,104c0,.74,0,1.48.08,2.21l-13.23,4.41A32,32,0,0,0,128,96a32,32,0,1,0,0,64,31.85,31.85,0,0,0,19.53-6.68l23.11,18A31.65,31.65,0,0,0,168,176a32,32,0,1,0,32-24Zm0-64a16,16,0,1,1-16,16A16,16,0,0,1,200,88ZM128,144a16,16,0,1,1,16-16A16,16,0,0,1,128,144Zm72,48a16,16,0,1,1,16-16A16,16,0,0,1,200,192Z",
  },
  {
    title: "Yours To Run",
    body: "You own what we build, and the parts you need to change regularly are yours to change without calling us.",
    dim: "M160,112a32,32,0,1,1-32-32A32,32,0,0,1,160,112Z",
    solid:
      "M224,40V76a8,8,0,0,1-16,0V48H180a8,8,0,0,1,0-16h36A8,8,0,0,1,224,40Zm-8,132a8,8,0,0,0-8,8v28H180a8,8,0,0,0,0,16h36a8,8,0,0,0,8-8V180A8,8,0,0,0,216,172ZM76,208H48V180a8,8,0,0,0-16,0v36a8,8,0,0,0,8,8H76a8,8,0,0,0,0-16ZM40,84a8,8,0,0,0,8-8V48H76a8,8,0,0,0,0-16H40a8,8,0,0,0-8,8V76A8,8,0,0,0,40,84Z",
  },
  {
    title: "Transparent Communication",
    body: "You get a clear scope and a realistic timeline before any work starts, and we tell you if you do not need something.",
    dim: "M232,152v64a8,8,0,0,1-8,8H160a72,72,0,0,1-67.9-48H96a72,72,0,0,0,72-72h0a71.83,71.83,0,0,0-4.07-23.88h0A72,72,0,0,1,232,152Z",
    solid:
      "M169.57,72.59A80,80,0,0,0,16,104v64a16,16,0,0,0,16,16H86.67A80.15,80.15,0,0,0,160,232h64a16,16,0,0,0,16-16V152A80,80,0,0,0,169.57,72.59ZM32,104a64,64,0,1,1,64,64H32ZM224,216H160a64.14,64.14,0,0,1-55.68-32.43A79.93,79.93,0,0,0,174.7,89.71,64,64,0,0,1,224,152Z",
  },
  {
    title: "Dedicated Support",
    body: "We stay close through the first weeks after launch, when the real edge cases turn up, and we are reachable after that.",
    dim: "M16,152H48v56H16a8,8,0,0,1-8-8V160A8,8,0,0,1,16,152ZM192.54,40A39.12,39.12,0,0,0,156,64a39.12,39.12,0,0,0-36.54-24C97.67,40,80,58.31,80,80c0,14.56,7,27.71,16.73,40H140a20,20,0,0,1,0,40h4l37.78-8.68C203.82,135.07,232,109.23,232,80,232,58.31,214.33,40,192.54,40Z",
  },
  {
    title: "Expertise Across Industries",
    body: "Our team has extensive experience working across various industries.",
    dim: "M210.26,210.26c-17.23,17.23-68-5.63-113.46-51.06S28.51,63,45.74,45.74s68,5.63,113.46,51.06S227.49,193,210.26,210.26Z",
    solid:
      "M222.37,158.46l-47.11-21.11-.13-.06a16,16,0,0,0-15.17,1.4,8.12,8.12,0,0,0-.75.56L134.87,160c-15.42-7.49-31.34-23.29-38.83-38.51l20.78-24.71c.2-.24.39-.49.57-.75a16,16,0,0,0,1.32-15.06l0-.12L97.54,33.64a16,16,0,0,0-16.62-9.52A56.26,56.26,0,0,0,32,80c0,79.4,64.6,144,144,144a56.26,56.26,0,0,0,55.88-48.92A16,16,0,0,0,222.37,158.46Z",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="flex w-full items-center justify-center gap-[60px] px-3 py-[50px] md:px-10 md:py-[80px] lg:py-[100px]">
      <div className="flex w-full max-w-[1440px] flex-col items-center justify-center gap-10 md:max-w-[1000px] md:gap-[60px] lg:max-w-[1440px]">
        <div className="flex flex-col items-center justify-center gap-2.5">
          <Pill>Why Choose Us</Pill>
          <h2 className="max-w-[800px] text-center font-display text-[28px] font-normal leading-[34px] tracking-[-1.2px] text-white md:text-[40px] md:leading-[44px] md:tracking-[-1.8px]">
            Why we are your best choice
          </h2>
        </div>

        <div className="grid w-full grid-cols-1 gap-2.5 md:grid-cols-2 md:gap-[3px] lg:grid-cols-3 lg:gap-2.5">
          {ITEMS.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ type: "spring", stiffness: 118, damping: 30, delay: (i % 3) * 0.06 }}
              className="flex flex-col items-center justify-center gap-[25px] rounded-[20px] border border-white-05 bg-[rgba(13,13,13,0.1)] p-5 backdrop-blur-[10px]"
            >
              <span className="flex size-[60px] items-center justify-center rounded-[20px] bg-white-05 p-[9px]">
                <Duo dim={it.dim} solid={it.solid} className="size-[42px] text-brand" />
              </span>
              <div className="flex flex-col items-center justify-center gap-1.5">
                <h3 className="text-center font-display text-[20px] font-normal leading-[26px] tracking-[-0.1px] text-white">
                  {it.title}
                </h3>
                <p className="text-center font-body text-[16px] leading-[24px] text-white opacity-60">
                  {it.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
