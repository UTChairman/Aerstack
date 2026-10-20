"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Pill from "@/components/ui/Pill";
import ButtonPill from "@/components/ui/ButtonPill";
import type { ServicePlan } from "@/lib/services-data";

function Check() {
  return (
    <svg viewBox="0 0 256 256" fill="currentColor" className="mt-1 size-4 shrink-0 text-brand" aria-hidden>
      <path d="M232,128a104,104,0,1,1-104-104A104.11,104.11,0,0,1,232,128Zm-40.53-31.53a8,8,0,0,0-11.31,0L112,164.69,75.31,128a8,8,0,0,0-11.31,11.31l42.34,42.35a8,8,0,0,0,11.32,0l74.34-74.35A8,8,0,0,0,191.47,96.47Z" />
    </svg>
  );
}

export default function Pricing({
  heading,
  cta,
  toggle,
  plans,
}: {
  heading: string;
  cta: string;
  toggle: string[];
  plans: ServicePlan[];
}) {
  const [yearly, setYearly] = useState(false);
  const hasToggle = toggle.some((t) => /yearly/i.test(t));
  const saveNote = toggle.find((t) => /save/i.test(t));

  return (
    <section className="flex w-full items-center justify-center px-3 py-[50px] md:px-10 md:py-20 lg:py-[100px]">
      <div className="flex w-full max-w-[1000px] flex-col items-center justify-center gap-10 md:gap-[60px]">
        <div className="flex flex-col items-center justify-center gap-2.5">
          <Pill>Pricing</Pill>
          <h2 className="max-w-[800px] text-center font-display text-[28px] font-normal leading-[34px] tracking-[-1.2px] text-white md:text-[40px] md:leading-[44px] md:tracking-[-1.8px]">
            {heading}
          </h2>
        </div>

        {hasToggle && (
          <div className="flex flex-col items-center gap-3">
            <div className="flex items-center gap-1 rounded-full bg-white-05 p-1">
              {["Monthly", "Yearly"].map((label) => {
                const active = (label === "Yearly") === yearly;
                return (
                  <button
                    key={label}
                    type="button"
                    onClick={() => setYearly(label === "Yearly")}
                    className={`rounded-full px-5 py-2 font-body text-[14px] transition-colors duration-200 ${
                      active ? "bg-brand text-ink-strong" : "text-white hover:bg-white-05"
                    }`}
                  >
                    {label}
                  </button>
                );
              })}
            </div>
            {saveNote && (
              <span className="font-body text-[13px] text-white opacity-60">{saveNote}</span>
            )}
          </div>
        )}

        {plans.length > 0 ? (
          <div className="grid w-full grid-cols-1 gap-2.5 md:grid-cols-2">
            {plans.map((p, i) => {
              const monthly = Number(String(p.price).replace(/[^\d]/g, "")) || 0;
              const shown = yearly ? Math.round(monthly * 12 * 0.8) : monthly;
              return (
                <motion.div
                  key={p.name}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ type: "spring", stiffness: 118, damping: 30, delay: i * 0.06 }}
                  className="flex flex-col gap-6 rounded-[30px] bg-white-05 p-6 backdrop-blur-[5px] md:p-8"
                >
                  <h4 className="font-display text-[18px] font-normal leading-[26px] tracking-[-0.1px] text-white">
                    {p.name}
                  </h4>
                  {monthly > 0 && (
                    <div className="flex items-end gap-1">
                      <span className="font-display text-[44px] font-normal leading-[1] tracking-[-2px] text-brand">
                        {shown}
                      </span>
                      <span className="pb-1 font-body text-[14px] text-white opacity-60">
                        {yearly ? "/year" : "/month"}
                      </span>
                    </div>
                  )}
                  <ul className="flex list-none flex-col gap-2.5">
                    {p.features.map((f) => (
                      <li key={f} className="flex gap-2.5 font-body text-[15px] leading-[24px] text-white opacity-80">
                        <Check />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto pt-2">
                    <ButtonPill href="/contact-us">{cta || "Get Started"}</ButtonPill>
                  </div>
                </motion.div>
              );
            })}
          </div>
        ) : (
          cta && <ButtonPill href="/contact-us">{cta}</ButtonPill>
        )}
      </div>
    </section>
  );
}
