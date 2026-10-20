import Link from "next/link";
import { cn } from "@/lib/cn";
import { ArrowUp } from "@/components/ui/icons";
import type { ReactNode } from "react";

/**
 * Primary CTA — exact match to the live site:
 * a[rounded 30px, h50, overflow hidden] > [orange label px-30] + [orange 50x50 icon, ArrowUp rotated 45°]
 */
export default function ButtonPill({
  href,
  children,
  className,
  variant = "brand",
}: {
  href: string;
  children: ReactNode;
  className?: string;
  variant?: "brand" | "light";
}) {
  const isBrand = variant === "brand";
  const bg = isBrand ? "bg-brand" : "bg-white";
  const fg = isBrand ? "text-ink" : "text-ink-strong";
  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex h-[50px] max-w-full items-center gap-0 overflow-hidden rounded-[30px] transition-opacity duration-200 hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white",
        className,
      )}
    >
      <span className={cn("flex h-full items-center gap-2.5 px-[30px]", bg)}>
        <span
          className={cn(
            "whitespace-nowrap font-display text-[13px] font-normal uppercase leading-[19.5px]",
            fg,
          )}
        >
          {children}
        </span>
      </span>
      <span className={cn("grid size-[50px] shrink-0 place-items-center", bg)}>
        <ArrowUp
          className={cn(
            "h-[23px] w-[20px] rotate-45 transition-transform duration-300 group-hover:translate-x-0.5",
            fg,
          )}
        />
      </span>
    </Link>
  );
}
