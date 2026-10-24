import Link from "next/link";
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
  { Icon: Envelope, text: "abdullahdilshad111@gmail.com", href: "mailto:abdullahdilshad111@gmail.com" },
  { Icon: Phone, text: "+92 310 6442188", href: "tel:+923106442188" },
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
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="grid size-10 place-items-center rounded-[12px] bg-white-05 text-white transition-colors hover:bg-white-10"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="size-5">
                <path d="M23 4.9c-.8.4-1.7.7-2.6.8 1-.6 1.7-1.5 2-2.6-.9.5-1.9.9-2.9 1.1a4.5 4.5 0 0 0-7.7 4.1A12.8 12.8 0 0 1 2.5 3.6a4.5 4.5 0 0 0 1.4 6 4.4 4.4 0 0 1-2-.6v.1c0 2.2 1.5 4 3.6 4.4a4.5 4.5 0 0 1-2 .1 4.5 4.5 0 0 0 4.2 3.1A9 9 0 0 1 1 18.6a12.7 12.7 0 0 0 6.9 2c8.3 0 12.8-6.9 12.8-12.8v-.6c.9-.6 1.7-1.4 2.3-2.3z" />
              </svg>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="grid size-10 place-items-center rounded-[12px] bg-white-05 text-white transition-colors hover:bg-white-10"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="size-5">
                <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-.95 1.83-1.95 3.76-1.95 4 0 4.74 2.5 4.74 5.8V21h-4v-5.5c0-1.3 0-3-1.9-3s-2.2 1.44-2.2 2.9V21H9z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="mx-auto mt-6 h-px w-full max-w-[1200px] bg-white-10" />
      </div>
    </footer>
  );
}
