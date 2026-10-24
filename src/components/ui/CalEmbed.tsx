"use client";

/**
 * Cal.com inline booking embed.
 * The parent section owns the height (live pins it to 758 / 694 / 706 per
 * breakpoint), so the frame just fills whatever slot it is given and lets Cal's
 * own UI scroll inside it — which is how the live page behaves.
 */
export default function CalEmbed({ link }: { link: string }) {
  const src = `https://cal.com/${link}?embed=true&theme=dark&layout=month_view`;
  return (
    <iframe
      src={src}
      title="Book a free consultation"
      loading="lazy"
      className="size-full rounded-[20px] border-0 bg-transparent"
      allow="camera; microphone; fullscreen; clipboard-write"
    />
  );
}
