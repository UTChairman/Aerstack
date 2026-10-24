import type { Metadata } from "next";
import PageBanner from "@/components/site/PageBanner";
import PageReviewCard from "@/components/ui/PageReviewCard";
import ButtonPill from "@/components/ui/ButtonPill";
import { REVIEWS_LEFT, REVIEWS_RIGHT } from "@/lib/reviews-data";

export const metadata: Metadata = {
  alternates: { canonical: "/review" },
  title: "Reviews | Aerstack",
  description: "What business owners say about working with Aerstack.",
};

export default function ReviewPage() {
  const hasReviews = REVIEWS_LEFT.length + REVIEWS_RIGHT.length > 0;

  return (
    <main className="flex w-full flex-col items-center justify-center">
      <PageBanner>
        What business owners
        <br />
        say about us
      </PageBanner>

      {hasReviews ? (
        /* Two independent columns (masonry), gap 10 */
        <section className="flex w-full flex-col items-center justify-center gap-[30px] px-3 pb-[30px] md:px-10 md:pb-10 lg:pb-[65px]">
          <div className="flex w-full max-w-[1440px] flex-col items-start justify-center gap-2.5 lg:flex-row">
            <div className="flex w-full flex-col gap-2.5">
              {REVIEWS_LEFT.map((r, i) => (
                <PageReviewCard key={r.name} r={r} delay={(i % 2) * 0.06} />
              ))}
            </div>
            <div className="flex w-full flex-col gap-2.5">
              {REVIEWS_RIGHT.map((r, i) => (
                <PageReviewCard key={r.name} r={r} delay={(i % 2) * 0.06} />
              ))}
            </div>
          </div>
        </section>
      ) : (
        /* PLACEHOLDER: shown only while reviews-data.ts is empty. Adding real
           reviews there removes this automatically. */
        <section className="flex w-full flex-col items-center justify-center gap-[30px] px-3 pb-[30px] md:px-10 md:pb-10 lg:pb-[65px]">
          <div className="flex w-full max-w-[700px] flex-col items-center gap-6 rounded-[30px] bg-white-05 px-6 py-12 text-center md:px-10">
            <p className="font-body text-[18px] leading-[27px] text-white opacity-80">
              We are collecting written reviews from the businesses we work with and will
              publish them here shortly.
            </p>
            <p className="font-body text-[16px] leading-[24px] text-white opacity-60">
              If you would like to speak to a client of ours before deciding, ask us and we
              will arrange it.
            </p>
            <ButtonPill href="/contact-us">Tell us about your business</ButtonPill>
          </div>
        </section>
      )}
    </main>
  );
}
