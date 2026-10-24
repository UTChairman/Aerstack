import Image from "next/image";
import type { Review } from "@/lib/data";

export function QuoteMark() {
  return (
    <svg viewBox="0 0 55 55" className="size-[55px] shrink-0 fill-white opacity-30" aria-hidden>
      <path d="M 8.459 14.419 C 11.674 10.934 16.539 9.167 22.919 9.167 L 25.211 9.167 L 25.211 15.627 L 23.366 15.996 C 20.226 16.624 18.042 17.859 16.874 19.672 C 16.264 20.648 15.918 21.766 15.87 22.917 L 22.917 22.917 C 24.182 22.917 25.208 23.943 25.208 25.208 L 25.208 41.25 C 25.208 43.778 23.153 45.833 20.625 45.833 L 6.875 45.833 C 5.609 45.833 4.583 44.807 4.583 43.542 L 4.583 32.083 L 4.59 25.394 C 4.57 25.14 4.134 19.112 8.459 14.419 Z M 45.836 45.833 L 32.086 45.833 C 30.82 45.833 29.794 44.807 29.794 43.542 L 29.794 32.083 L 29.799 25.394 C 29.778 25.14 29.343 19.112 33.667 14.419 C 36.882 10.934 41.747 9.167 48.127 9.167 L 50.419 9.167 L 50.419 15.627 L 48.574 15.996 C 45.434 16.624 43.25 17.859 42.082 19.672 C 41.472 20.648 41.126 21.766 41.078 22.917 L 48.125 22.917 C 49.39 22.917 50.417 23.943 50.417 25.208 L 50.417 41.25 C 50.417 43.778 48.362 45.833 45.833 45.833 Z" />
    </svg>
  );
}

export default function ReviewCard({ r }: { r: Review }) {
  return (
    <li className="flex w-full flex-col items-start justify-between gap-[17px] rounded-[20px] bg-[rgba(13,13,13,0.1)] p-5 backdrop-blur-[5px]">
      <div className="flex w-full flex-row items-start justify-center gap-2.5 pt-[30px]">
        <QuoteMark />
        <p className="flex-1 font-body text-[18px] font-normal leading-[27px] tracking-[-0.36px] text-white opacity-80">
          {r.quote}
        </p>
      </div>
      <div className="flex w-full flex-col items-center justify-center gap-2.5">
        <div className="h-px w-full bg-white-10" />
        <div className="flex w-full flex-row items-center justify-start gap-2.5">
          <span className="flex size-[52px] shrink-0 items-center justify-center rounded-[20px] bg-[rgba(51,66,50,0.05)] p-1">
            <span className="relative block size-11 overflow-hidden rounded-[17px]">
              <Image src={`/images/${r.avatar}`} alt={r.name} fill sizes="44px" className="object-cover" />
            </span>
          </span>
          <div className="flex flex-col justify-center">
            <h3 className="font-display text-[14px] font-medium leading-[19.6px] text-white">
              {r.name}
            </h3>
            <span className="font-body text-[11px] uppercase leading-[22px] text-white opacity-80">
              {r.role}
            </span>
          </div>
        </div>
      </div>
    </li>
  );
}
