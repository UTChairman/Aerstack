import type { Metadata } from "next";
import PageBanner from "@/components/site/PageBanner";
import PageReviewCard from "@/components/ui/PageReviewCard";
import { REVIEWS_LEFT, REVIEWS_RIGHT } from "@/lib/reviews-data";

export const metadata: Metadata = {
  alternates: { canonical: "/review" },
  title: "Reviews — Aerstack",
  description: "What agency owners say about working with Aerstack.",
};

export default function ReviewPage() {
  return (
    <main className="flex w-full flex-col items-center justify-center">
      <PageBanner>
        Check Our Works With
        <br />
        Real Results
      </PageBanner>

      {/* Two independent columns (masonry), gap 10 */}
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
    </main>
  );
}
