"use client";

/** Orange value pills clustered inside a blurred 366px circle, over the big wordmark. */
const VALUES: { label: string; rot: number; x: number }[] = [
  { label: "Customer Support", rot: -8, x: -60 },
  { label: "Passion", rot: 6, x: 70 },
  { label: "Positive Experience", rot: -4, x: -65 },
  { label: "Trustworthiness", rot: 5, x: 107 },
  { label: "Customer Focus", rot: -6, x: -98 },
  { label: "Long-Term Relationships", rot: 3, x: 60 },
  { label: "Innovation", rot: -3, x: -5 },
  { label: "Collaboration", rot: 7, x: 100 },
  { label: "Personalization", rot: -5, x: -53 },
  { label: "Reliability", rot: 4, x: 100 },
  { label: "Quality", rot: 2, x: 2 },
];

function Atom() {
  return (
    <svg viewBox="0 0 256 256" fill="currentColor" className="size-5 shrink-0 text-ink" aria-hidden>
      <path d="M128,88a40,40,0,1,0,40,40A40,40,0,0,0,128,88Zm0,64a24,24,0,1,1,24-24A24,24,0,0,1,128,152Z" />
      <path
        d="M223.3,169.8c-6.9-11.9-17.2-24.2-30-35.9,1.3-1.3,2.6-2.6,3.8-3.9,29.3-30.4,40.4-61.4,29.6-80.1S181.5,26.8,140,38.2c-4,1.1-8,2.4-12,3.9-4-1.5-8-2.8-12-3.9C74.5,26.8,42.1,31.2,31.3,49.9S32.4,99.5,61.7,130c1.2,1.3,2.5,2.6,3.8,3.9-12.8,11.7-23.1,24-30,35.9-10.8,18.7-11,35.9-.2,54.6s43.2,23.1,84.7,11.7c4-1.1,8-2.4,12-3.9,4,1.5,8,2.8,12,3.9,41.5,11.4,73.9,7,84.7-11.7S234.1,188.5,223.3,169.8Z"
        opacity="0.25"
      />
    </svg>
  );
}

export default function ValueCloud() {
  // Pills overlap vertically and spill past the circle edges, which clips them.
  return (
    <div className="relative flex size-[300px] flex-col items-center justify-center overflow-hidden rounded-full backdrop-blur-[8px] md:size-[366px]">
      {VALUES.map((v) => (
        <span
          key={v.label}
          style={{ transform: `translateX(${v.x}px) rotate(${v.rot}deg)` }}
          className="-mt-[10px] inline-flex shrink-0 items-center justify-center gap-1 whitespace-nowrap rounded-[20px] bg-brand px-4 py-2 font-body text-[13px] leading-[20px] text-ink first:mt-0 md:px-5 md:text-[16px] md:leading-[24px]"
        >
          <Atom />
          {v.label}
        </span>
      ))}
    </div>
  );
}
