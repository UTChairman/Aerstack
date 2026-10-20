import Link from "next/link";
import { cn } from "@/lib/cn";
import type { ReactNode } from "react";

/** Orange eyebrow pill — dark surface pill, Satoshi 900, 11px uppercase, brand text. */
export function Eyebrow({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full bg-surface px-3.5 py-1.5 font-body text-[11px] font-black uppercase leading-none tracking-wide text-brand",
        className,
      )}
    >
      {children}
    </span>
  );
}

/** Small diagonal arrow (↗) used in buttons/links. */
export function ArrowUpRight({ className }: { className?: string }) {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className={className} aria-hidden>
      <path d="M3.5 8.5 8.5 3.5M4.5 3.5h4v4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** Section heading — Unbounded 400, 40px/44px, -1.8px. */
export function SectionHeading({
  children,
  className,
  as: Tag = "h2",
}: {
  children: ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3";
}) {
  return (
    <Tag
      className={cn(
        "font-display text-[40px] font-normal leading-[44px] tracking-[-1.8px] text-white",
        className,
      )}
    >
      {children}
    </Tag>
  );
}

/** Primary pill button — orange fill, dark uppercase Unbounded 13px, diagonal arrow. */
export function ButtonPrimary({
  href,
  children,
  className,
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex h-12 items-center gap-3 rounded-full bg-brand pl-6 pr-3 font-display text-[13px] uppercase leading-none tracking-tight text-ink transition-transform duration-200 hover:scale-[1.03] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white active:scale-[0.98]",
        className,
      )}
    >
      {children}
      <span className="grid size-6 place-items-center text-ink transition-transform duration-200 group-hover:translate-x-0.5">
        <ArrowUpRight />
      </span>
    </Link>
  );
}

/** Secondary/ghost pill button — white-alpha fill. */
export function ButtonGhost({
  href,
  children,
  className,
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex h-11 items-center justify-center rounded-[10px] bg-white-10 px-6 font-display text-[13px] uppercase leading-[19.5px] tracking-tight text-white transition-colors duration-200 hover:bg-white-15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand active:scale-[0.98]",
        className,
      )}
    >
      {children}
    </Link>
  );
}

/** "LEARN MORE" text link — Unbounded 12px uppercase. */
export function LearnMore({ href = "#" }: { href?: string }) {
  return (
    <Link
      href={href}
      className="group inline-flex items-center gap-1.5 font-display text-[12px] uppercase leading-[24px] tracking-[-0.1px] text-white transition-colors hover:text-brand"
    >
      Learn More
      <span aria-hidden className="transition-transform duration-200 group-hover:translate-x-0.5">
        →
      </span>
    </Link>
  );
}

/** Standard section shell with centered max-width container. */
export function Section({
  children,
  className,
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={cn("px-5 py-20 md:py-28", className)}>
      <div className="mx-auto w-full max-w-[1200px]">{children}</div>
    </section>
  );
}
