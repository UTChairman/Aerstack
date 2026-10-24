import type { Metadata } from "next";
import PageBanner from "@/components/site/PageBanner";
import CaseStudyRow from "@/components/ui/CaseStudyRow";
import { CASE_STUDIES } from "@/lib/case-studies";

export const metadata: Metadata = {
  alternates: { canonical: "/case-studies" },
  title: "Our work | Aerstack",
  description:
    "Websites, management software and AI workflows we have built for small and medium businesses, including a production POS system for a multi branch restaurant.",
};

export default function CaseStudiesPage() {
  return (
    <main className="flex w-full flex-col items-center justify-center">
      <PageBanner>
        Things we have
        <br />
        built and shipped
      </PageBanner>

      {/* Rows — gap 42, px 40, pb 100 */}
      <section className="flex w-full items-center justify-center px-3 pb-[50px] md:px-10 md:pb-[100px]">
        <div className="flex w-full max-w-[1440px] flex-col items-center justify-center gap-[22px]">
          <div className="flex w-full flex-col items-start justify-start gap-[42px]">
            {CASE_STUDIES.map((cs, i) => (
              <CaseStudyRow key={cs.slug} cs={cs} delay={(i % 2) * 0.05} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
