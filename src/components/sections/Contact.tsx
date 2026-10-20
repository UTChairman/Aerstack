"use client";

import { motion } from "framer-motion";
import { useFormspree } from "@/lib/useFormspree";

const label = "font-sans text-[12px] font-medium leading-[14.4px] text-[#888888]";
const field =
  "w-full rounded-[20px] bg-[rgba(187,187,187,0.15)] p-3 font-sans text-[14px] text-white placeholder:text-[#8a8a8a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand";

export default function Contact() {
  const { status, error, onSubmit } = useFormspree();
  const submitting = status === "submitting";

  return (
    <section className="flex w-full items-center justify-center gap-2.5 px-10 pb-[65px] pt-[100px]">
      <div className="flex w-full max-w-[1440px] flex-col items-center justify-center gap-[30px] rounded-[20px] lg:flex-row">
        {/* Big heading */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ type: "spring", stiffness: 118, damping: 30 }}
          className="flex w-full flex-col items-start justify-center lg:flex-1"
        >
          {/* live: "Message" 90px/63px white, "Us" 156px/109.2px brand */}
          <span className="font-display text-[48px] font-normal leading-[0.7] text-white md:text-[90px] md:leading-[63px]">
            Message
          </span>
          <span className="font-display text-[80px] font-normal leading-[0.7] text-brand md:text-[156px] md:leading-[109.2px]">
            Us
          </span>
        </motion.div>

        {/* Form card */}
        <motion.form
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ type: "spring", stiffness: 118, damping: 30, delay: 0.08 }}
          onSubmit={onSubmit}
          className="flex w-full flex-col items-center justify-center gap-10 rounded-[30px] bg-white-05 px-[30px] py-10 lg:flex-1"
        >
          <div className="flex w-full flex-col gap-4">
            <div className="flex w-full flex-col gap-2">
              <label htmlFor="name" className={label}>
                Name
              </label>
              <input id="name" name="name" type="text" required autoComplete="name" placeholder="Jane Smith" className={field} />
            </div>
            <div className="flex w-full flex-col gap-2">
              <label htmlFor="email" className={label}>
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                placeholder="joewantsanAutomation@gmail.com"
                className={field}
              />
            </div>
            <div className="flex w-full flex-col gap-2">
              <label htmlFor="message" className={label}>
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                placeholder="Write your message"
                className={`${field} resize-y`}
              />
            </div>
          </div>

          <div className="flex w-full flex-col gap-3">
            <button
              type="submit"
              disabled={submitting}
              className="flex w-full items-center justify-center rounded-[10px] bg-brand py-3 font-display text-[16px] font-normal leading-[24px] text-ink-strong transition-opacity duration-200 hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {submitting ? "Sending…" : "Submit"}
            </button>

            <p aria-live="polite" className="min-h-[20px] text-center font-body text-[14px] leading-[20px]">
              {status === "success" && (
                <span className="text-brand">Thanks — your message is on its way.</span>
              )}
              {status === "error" && <span className="text-[#ff6b6b]">{error}</span>}
            </p>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
