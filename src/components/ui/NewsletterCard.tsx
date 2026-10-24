"use client";

import { useFormspree } from "@/lib/useFormspree";
import { SOCIALS } from "@/lib/social";

/** Newsletter and share card at the foot of each project article. */
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
              key={s.key}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="grid size-8 place-items-center rounded-full text-white transition-colors hover:text-brand"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="size-[18px]">
                <path d={s.path} />
              </svg>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
