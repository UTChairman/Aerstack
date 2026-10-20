import { cn } from "@/lib/cn";
import type { ReactNode } from "react";

/**
 * Eyebrow pill — exact: bg white/10, radius 39px, padding 3px 12px, gap 7px,
 * text Satoshi 900 11px/22px uppercase, brand colour.
 */
export default function Pill({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center justify-center gap-[7px] rounded-[39px] bg-white-10 px-3 py-[3px]",
        className,
      )}
    >
      <span className="text-center font-body text-[11px] font-black uppercase leading-[22px] text-brand">
        {children}
      </span>
    </span>
  );
}
