"use client";

import { useFormspree } from "@/lib/useFormspree";

/** Newsletter + share card at the foot of each case-study article. */
const SOCIALS = [
  {
    label: "Facebook",
    d: "M22 12a10 10 0 1 0-11.6 9.9v-7h-2.5V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.2c-1.2 0-1.6.8-1.6 1.6V12h2.7l-.4 2.9h-2.3v7A10 10 0 0 0 22 12Z",
  },
  {
    label: "Instagram",
    d: "M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.8.3 2.2.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.4.4 1 .4 2.2.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 1.8-.4 2.2-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.2-1 .4-2.2.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.8-.3-2.2-.4-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.2-.4-.4-1-.4-2.2-.1-1.3-.1-1.7-.1-4.9s0-3.6.1-4.9c.1-1.2.3-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1-.4 2.2-.4 1.3-.1 1.7-.1 4.8-.1Zm0 5.6a4.2 4.2 0 1 0 0 8.4 4.2 4.2 0 0 0 0-8.4Zm0 6.9a2.7 2.7 0 1 1 0-5.4 2.7 2.7 0 0 1 0 5.4Zm5.3-7a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z",
  },
  {
    label: "LinkedIn",
    d: "M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-.95 1.83-1.95 3.76-1.95 4 0 4.74 2.5 4.74 5.8V21h-4v-5.5c0-1.3 0-3-1.9-3s-2.2 1.44-2.2 2.9V21H9z",
  },
  {
    label: "Twitter",
    d: "M23 4.9c-.8.4-1.7.7-2.6.8 1-.6 1.7-1.5 2-2.6-.9.5-1.9.9-2.9 1.1a4.5 4.5 0 0 0-7.7 4.1A12.8 12.8 0 0 1 2.5 3.6a4.5 4.5 0 0 0 1.4 6 4.4 4.4 0 0 1-2-.6v.1c0 2.2 1.5 4 3.6 4.4a4.5 4.5 0 0 1-2 .1 4.5 4.5 0 0 0 4.2 3.1A9 9 0 0 1 1 18.6a12.7 12.7 0 0 0 6.9 2c8.3 0 12.8-6.9 12.8-12.8v-.6c.9-.6 1.7-1.4 2.3-2.3z",
  },
];

export default function NewsletterCard() {
  const { status, error, onSubmit } = useFormspree();
  const submitting = status === "submitting";

  return (
    <div className="flex w-full flex-col gap-6 rounded-[30px] bg-white-05 p-6 md:p-8">
      <div className="flex flex-col gap-2">
        <h3 className="font-display text-[20px] font-normal leading-[26px] tracking-[-0.1px] text-white">
          Join our newsletter list
        </h3>
        <p className="font-body text-[15px] leading-[24px] text-white opacity-60">
          Sign up to get the most recent blog articles in your email every week.
        </p>
      </div>

      <form onSubmit={onSubmit} className="flex flex-col gap-3 sm:flex-row">
        <input type="hidden" name="_subject" value="Newsletter signup — Aerstack" />
        <input
          type="email"
          name="email"
          required
          autoComplete="email"
          placeholder="name@email.com"
          aria-label="Email address"
          className="h-12 w-full rounded-full bg-white px-5 font-body text-[15px] text-ink-strong placeholder:text-[#9a9a9a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
        />
        <button
          type="submit"
          disabled={submitting}
          className="h-12 shrink-0 rounded-full bg-brand px-8 font-display text-[15px] text-ink-strong transition-opacity duration-200 hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {submitting ? "Sending…" : "Subscribe"}
        </button>
      </form>

      <p aria-live="polite" className="min-h-[20px] font-body text-[14px] leading-[20px]">
        {status === "success" && <span className="text-brand">Thanks — you are subscribed.</span>}
        {status === "error" && <span className="text-[#ff6b6b]">{error}</span>}
      </p>

      <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <span className="font-body text-[11px] font-black uppercase leading-[22px] text-white opacity-80">
          Share this post to the social medias
        </span>
        <div className="flex items-center gap-2 rounded-full bg-white-05 px-5 py-2.5">
          {SOCIALS.map((s) => (
            <a
              key={s.label}
              href="#"
              aria-label={s.label}
              className="grid size-8 place-items-center rounded-full text-white transition-colors hover:text-brand"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="size-[18px]">
                <path d={s.d} />
              </svg>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
