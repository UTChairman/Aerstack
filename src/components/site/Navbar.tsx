"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/cn";

const LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/case-studies" },
  { label: "Reviews", href: "/review" },
  { label: "Contact", href: "/contact-us" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed inset-x-0 top-0 z-10 h-[74px]">
      <nav className="relative flex h-[74px] w-full items-center justify-between overflow-hidden px-10 py-2.5 backdrop-blur-[5px]">
        {/* Logo — 152x44 */}
        <Link href="/" aria-label="Aerstack home" className="block h-11 w-[152px] shrink-0">
          <Image
            src="/images/w3HJ5z6jIbuVODNRrmm2cec7Ow.png"
            alt="Aerstack"
            width={152}
            height={44}
            priority
            className="h-11 w-[152px] object-contain"
          />
        </Link>

        {/* Desktop link pill */}
        <div
          className="hidden h-[60px] items-center justify-end rounded-[160px] bg-[#0d0d0d] p-2.5 backdrop-blur-[5px] lg:flex"
          style={{ boxShadow: "rgba(0, 0, 0, 0.32) 0px -9px 22px 0px" }}
        >
          {LINKS.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                className={cn(
                  "flex h-10 items-center justify-center gap-2.5 rounded-[30px] px-5 font-display text-[12px] uppercase leading-[24px] tracking-[-0.1px] transition-colors duration-200",
                  active ? "bg-white-10 text-brand" : "text-white hover:bg-white-05",
                  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand",
                )}
              >
                {l.label}
              </Link>
            );
          })}
        </div>

        {/* Right spacer (matches live 144x43 slot) */}
        <div className="hidden h-[43px] w-[144px] shrink-0 lg:block" />

        {/* Mobile trigger */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="grid size-11 place-items-center rounded-[10px] bg-white-10 transition-colors duration-200 hover:bg-white-15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand lg:hidden"
        >
          <span className="flex flex-col items-center justify-center gap-[5px]">
            <motion.span
              animate={open ? { rotate: 45, y: 3.5 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.28, ease: [0.44, 0, 0.56, 1] }}
              className="block h-[1.5px] w-4 bg-white"
            />
            <motion.span
              animate={open ? { rotate: -45, y: -3.5 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.28, ease: [0.44, 0, 0.56, 1] }}
              className="block h-[1.5px] w-4 bg-white"
            />
          </span>
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="absolute right-5 top-[70px] w-56 rounded-2xl border border-white-10 bg-[#0d0d0d]/95 p-2 backdrop-blur-xl lg:hidden"
          >
            {LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "block rounded-lg px-4 py-2.5 font-display text-[12px] uppercase tracking-[-0.1px] transition-colors",
                  pathname === l.href ? "text-brand" : "text-white hover:bg-white-05",
                )}
              >
                {l.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
