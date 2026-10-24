import Link from "next/link";
import { SOCIALS } from "@/lib/social";
import Contact from "@/components/sections/Contact";
import { Envelope, Phone } from "@/components/ui/icons";

const MENU = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Work", href: "/case-studies" },
  { label: "Review", href: "/review" },
  { label: "Contact", href: "/contact-us" },
];

function PinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 256 256" fill="currentColor" className={className} aria-hidden>
      <path d="M128,64a40,40,0,1,0,40,40A40,40,0,0,0,128,64Zm0,64a24,24,0,1,1,24-24A24,24,0,0,1,128,128Zm0-112a88.1,88.1,0,0,0-88,88c0,31.4,14.51,64.68,42,96.25a254.19,254.19,0,0,0,41.45,38.3,8,8,0,0,0,9.18,0A254.19,254.19,0,0,0,174,200.25c27.45-31.57,42-64.85,42-96.25A88.1,88.1,0,0,0,128,16Zm0,206c-16.53-13-72-60.75-72-118a72,72,0,0,1,144,0C200,161.23,144.53,209,128,222Z" />
    </svg>
  );
}

const CONTACTS = [
  { Icon: Envelope, text: "aerstack@gmail.com", href: "mailto:aerstack@gmail.com" },
  { Icon: Phone, text: "+92 309 9444017", href: "tel:+923099444017" },
  { Icon: PinIcon, text: "We are Fully Remote", href: null },
];

export default function Footer() {
  return (
    <footer className="flex w-full flex-col items-center gap-2.5 px-10 pb-10">
      <Contact />
      <div className="flex w-full max-w-[1440px] flex-col gap-2.5">
        {/* Contact + menu card */}
        <div className="flex flex-col items-start justify-between gap-8 rounded-[30px] bg-white-05 py-5 pl-5 pr-[30px] lg:flex-row">
          {/* Contact rows */}
          <div className="flex w-full flex-col gap-2.5 lg:max-w-[820px]">
            {CONTACTS.map(({ Icon, text, href }) => {
              const inner = (
                <>
                  <Icon className="size-6 shrink-0 text-brand" />
                  <span className="font-body text-[16px] leading-[24px] text-white">{text}</span>
                </>
              );
              return href ? (
                <Link
                  key={text}
                  href={href}
                  className="flex w-full flex-col items-start gap-2.5 rounded-[30px] bg-white-05 px-[30px] py-5 transition-colors hover:bg-white-10"
                >
                  {inner}
                </Link>
              ) : (
                <div
                  key={text}
                  className="flex w-full flex-col items-start gap-2.5 rounded-[30px] bg-white-05 px-[30px] py-5"
                >
                  {inner}
                </div>
              );
            })}
          </div>

          {/* Menu */}
          <nav className="flex shrink-0 flex-col gap-2.5 pt-2">
            <span className="mb-[5px] font-display text-[14px] font-medium leading-[19.6px] text-brand">
              Menu
            </span>
            {MENU.map((m, i) => (
              <Link
                key={m.label}
                href={m.href}
                className={`font-body text-[16px] leading-[24px] transition-colors hover:text-white ${
                  i === 0 ? "text-white" : "text-white-80"
                }`}
              >
                {m.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Follow us card */}
        <div className="flex w-full flex-col items-center justify-center gap-3 rounded-[30px] bg-white-05 py-8">
          <span className="font-display text-[14px] font-medium leading-[19.6px] text-brand">
            Follow us:
          </span>
          <div className="flex items-center gap-2.5">
            {SOCIALS.map((s) => (
              <a
                key={s.key}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="grid size-10 place-items-center rounded-[12px] bg-white-05 text-white transition-colors hover:bg-white-10"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="size-5">
                  <path d={s.path} />
                </svg>
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="mx-auto mt-6 h-px w-full max-w-[1200px] bg-white-10" />
      </div>
    </footer>
  );
}
