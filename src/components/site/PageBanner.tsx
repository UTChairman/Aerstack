import type { ReactNode } from "react";

/**
 * Shared inner-page title banner — 400px tall, pt-40,
 * h1 Unbounded 50/55, -2.5px, centred, max-width 740.
 */
export default function PageBanner({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-[280px] w-full items-center justify-center gap-2.5 px-5 pt-10 md:h-[400px]">
      <h1 className="max-w-[740px] text-center font-display text-[32px] font-normal leading-[38px] tracking-[-1.6px] text-white md:text-[50px] md:leading-[55px] md:tracking-[-2.5px]">
        {children}
      </h1>
    </div>
  );
}
