import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { CREDITS_INTRO, ASSET_CREDITS } from "@/lib/credits";

export const metadata: Metadata = {
  ...pageMeta({
    title: "Licensed Assets and Image Credits | Aerstack",
    description:
      "Attribution for the licensed images and icons used across the Aerstack website, with links to each original source.",
    path: "/licensed-assets",
  }),
  // Attribution page. Useful to visitors, thin for search, so it stays out of
  // the index while still passing link equity on through its outbound links.
  robots: { index: false, follow: true },
};

/**
 * Standalone attribution page. Framer publishes this one outside the site chrome —
 * no navbar, no footer, no pill background (see SiteChrome) — as a single 819px
 * column: 60px padding, 60px between the intro and the list, 10px between links.
 * The live page is fixed-width and does not reflow on phones; this one does.
 */
export default function LicensedAssetsPage() {
  return (
    <main className="flex w-full flex-col items-start gap-10 p-5 md:gap-[60px] md:p-[60px]">
      <h1 className="max-w-[1320px] font-display text-[28px] font-normal leading-[32px] tracking-[-1.2px] text-white md:text-[40px] md:leading-[44px]">
        {CREDITS_INTRO}
      </h1>

      <ul className="flex w-full list-none flex-col gap-2.5">
        {ASSET_CREDITS.map((href) => (
          <li key={href}>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full break-words font-body text-[16px] leading-[24px] text-white transition-colors hover:text-brand focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand md:text-[18px] md:leading-[27px]"
            >
              {href}
            </a>
          </li>
        ))}
      </ul>
    </main>
  );
}
