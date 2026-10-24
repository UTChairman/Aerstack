import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import Pill from "@/components/ui/Pill";
import ButtonPill from "@/components/ui/ButtonPill";
import CaseStudyRow from "@/components/ui/CaseStudyRow";
import NewsletterCard from "@/components/ui/NewsletterCard";
import { CASE_STUDIES } from "@/lib/case-studies";

export function generateStaticParams() {
  return CASE_STUDIES.map((cs) => ({ slug: cs.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const cs = CASE_STUDIES.find((c) => c.slug === slug);
  return {
    title: cs ? `${cs.detail.title} | Aerstack` : "Our work | Aerstack",
    description: cs?.detail.subtitle,
    alternates: { canonical: `/case-studies/${slug}` },
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cs = CASE_STUDIES.find((c) => c.slug === slug);
  if (!cs) notFound();

  const others = CASE_STUDIES.filter((c) => c.slug !== slug).slice(0, 3);

  return (
    <main className="flex w-full flex-col items-center justify-center">
      {/* Hero — title panel (left) + square cover (right) */}
      <section className="flex w-full items-center justify-center px-3 pb-5 pt-[100px] md:px-10">
        <div className="flex w-full max-w-[1440px] flex-col items-stretch gap-2.5 md:flex-row">
          <div className="flex flex-1 flex-col items-start justify-end gap-4 rounded-[30px] bg-white-05 p-5 md:min-h-[325px] md:p-[30px] lg:min-h-[640px]">
            <Pill>{cs.detail.eyebrow}</Pill>
            <h1 className="font-display text-[30px] font-normal leading-[38px] tracking-[-1.5px] text-white md:text-[44px] md:leading-[52px] md:tracking-[-2px]">
              {cs.detail.title}
            </h1>
          </div>
          <div className="relative aspect-square w-full shrink-0 overflow-hidden rounded-[30px] md:size-[325px] lg:size-[640px]">
            <Image
              src={`/images/${cs.img}`}
              alt={cs.detail.title}
              fill
              priority
              sizes="(max-width: 809px) 100vw, (max-width: 1199px) 325px, 640px"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Subtitle bar */}
      <section className="flex w-full items-center justify-center px-3 pt-2.5 md:px-10">
        <div className="flex w-full max-w-[1440px] items-center justify-center rounded-[30px] bg-white-05 px-6 py-12 md:py-[60px]">
          <p className="max-w-[720px] text-center font-body text-[18px] leading-[30px] text-white md:text-[20px] md:leading-[34px]">
            {cs.detail.subtitle}
          </p>
        </div>
      </section>

      {/* Body sections */}
      <section className="flex w-full items-center justify-center px-5 py-[60px] md:py-[80px]">
        <div className="flex w-full max-w-[800px] flex-col gap-12">
          {cs.detail.sections.map((s) => (
            <article key={s.heading} className="flex flex-col gap-4">
              <h2 className="font-display text-[28px] font-normal leading-[36px] tracking-[-1.2px] text-white opacity-90 md:text-[36px] md:leading-[44px] md:tracking-[-1.6px]">
                {s.heading}
              </h2>
              {s.paras.map((p) => (
                <p
                  key={p.slice(0, 40)}
                  className="font-body text-[16px] leading-[26px] text-white opacity-60"
                >
                  {p}
                </p>
              ))}
            </article>
          ))}

          <NewsletterCard />
        </div>
      </section>

      {/* Gallery — full-width images from the case study */}
      {cs.gallery.length > 0 && (
        <section className="flex w-full flex-col items-center gap-2.5 p-[10px]">
          {cs.gallery.map((img) => (
            <div
              key={img}
              className="relative aspect-[4/3] w-full max-w-[1420px] overflow-hidden rounded-[30px]"
            >
              <Image
                src={`/images/${img}`}
                alt=""
                fill
                sizes="100vw"
                className="object-cover"
              />
            </div>
          ))}
        </section>
      )}

      {/* Video */}
      {cs.videoId && (
        <section className="flex w-full items-center justify-center p-[10px]">
          <div className="w-full max-w-[1420px] overflow-hidden rounded-[30px]">
            <iframe
              src={`https://www.youtube.com/embed/${cs.videoId}`}
              title="Case study video"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="aspect-video w-full border-0"
            />
          </div>
        </section>
      )}

      {/* Other projects */}
      <section className="flex w-full items-center justify-center px-3 pb-[60px] md:px-10 md:pb-[100px]">
        <div className="flex w-full max-w-[1440px] flex-col gap-[30px]">
          <div className="flex flex-col items-start justify-between gap-5 md:flex-row md:items-end">
            <div className="flex flex-col items-start gap-2.5">
              <Pill>Other Projects</Pill>
              <h2 className="font-display text-[28px] font-normal leading-[34px] tracking-[-1.2px] text-white md:text-[40px] md:leading-[44px] md:tracking-[-1.8px]">
                Other Case Studies
              </h2>
            </div>
            <ButtonPill href="/case-studies">All Projects</ButtonPill>
          </div>

          <div className="flex flex-col gap-[42px]">
            {others.map((o) => (
              <CaseStudyRow key={o.slug} cs={o} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
