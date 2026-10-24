import type { Metadata } from "next";
import { pageMeta, breadcrumbLd } from "@/lib/seo";
import StructuredData from "@/components/site/StructuredData";
import PageBanner from "@/components/site/PageBanner";
import CaseStudyRow from "@/components/ui/CaseStudyRow";
import { CASE_STUDIES } from "@/lib/case-studies";

export const metadata: Metadata = pageMeta({
  title: "Our Work | Websites, POS Systems and Automations",
  description:
    "Projects we have built and shipped, including a production POS system running across multiple branches of a restaurant.",
  path: "/case-studies",
});

export default function CaseStudiesPage() {
  return (
    <main className="flex w-full flex-col items-center justify-center">
      <PageBanner>
        Things we have
        <br />
        built and shipped
      </PageBanner>

      <StructuredData
        data={[breadcrumbLd([{ name: "Home", path: "/" }, { name: "Our work", path: "/case-studies" }])]}
      />

      {/* Rows — gap 42, px 40, pb 100 */}
      <section className="flex w-full items-center justify-center px-3 pb-[50px] md:px-10 md:pb-[100px]">
        <div className="flex w-full max-w-[1440px] flex-col items-center justify-center gap-[22px]">
          {/* The cards are h3; this keeps the document outline from skipping h2. */}
          <h2 className="sr-only">All projects</h2>
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
