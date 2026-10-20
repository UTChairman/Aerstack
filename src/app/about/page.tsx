import type { Metadata } from "next";
import Image from "next/image";
import Pill from "@/components/ui/Pill";
import Timeline from "@/components/sections/Timeline";
import Faq from "@/components/sections/Faq";
import Brands from "@/components/sections/Brands";
import HmvAccordion from "@/components/ui/HmvAccordion";
import ValueCloud from "@/components/ui/ValueCloud";

export const metadata: Metadata = {
  alternates: { canonical: "/about" },
  title: "About — Aerstack",
  description:
    "A team that builds automated lead follow-up systems for marketing agencies tired of losing deals to slow response times.",
};

type Person = {
  eyebrow: string;
  heading: string;
  lead: string;
  body: string;
  tags: string[];
  img: string;
  first: string;
  last: string;
};

const PEOPLE: Person[] = [
  {
    eyebrow: "About Founder",
    heading: "Meet The Founder",
    lead: "Abdullah Dilshad is the technical brain behind Aerstack. As a certified n8n automation specialist, Abdullah has built and deployed dozens of automated workflows across CRM systems, AI integrations, and multi-channel communication tools. His obsession is simple — finding where businesses lose money in their processes and building systems that fix it permanently.",
    body: "Before Aerstack, Abdullah spent years deepening his expertise in AI automation, API integrations, and workflow architecture. That hands-on experience is what allows Aerstack to deliver systems that actually work in the real world — not just in theory. When Abdullah is not building automation systems, he is studying the latest developments in AI and finding new ways to apply them to real business problems.",
    tags: ["n8n Certified", "AI Automation Specialist", "Systems Builder"],
    img: "Fp009kglWkEICcmRi8ohingKhfQ.png",
    first: "Abdullah",
    last: "Dilsahd",
  },
  {
    eyebrow: "About Founder",
    heading: "Meet The Co - Founder",
    lead: "Umar Tanvir is the strategy and growth engine at Aerstack. With a sharp understanding of how marketing agencies operate, where their pipelines break, and what agency owners actually care about — Umar bridges the gap between technical solutions and real business outcomes.",
    body: "He is the reason Aerstack speaks the language of agency owners instead of developers. Every offer, every message, and every client conversation is shaped by his instinct for what drives revenue decisions. His focus is on one thing — making sure every agency that works with Aerstack sees a clear, measurable return from day one.",
    tags: ["Growth Strategist", "Agency Operations Expert", "Client Success Lead"],
    img: "jkSwkK2SiRgIRv78OG8xQtvrDXg.png",
    first: "Umar",
    last: "Tanvir",
  },
];

const STEPS = [
  {
    n: "01",
    title: "Discovery Phase",
    body: [
      "We start by auditing your current lead process from the moment a lead arrives to the moment someone actually speaks to them.",
      "We map every lead source, measure your current response time, count how many follow-up touches your team makes, and calculate exactly how much revenue your broken pipeline is costing you every month.",
      "No assumptions. Just numbers.",
    ],
  },
  {
    n: "02",
    title: "System Design",
    body: [
      "Based on the audit, we design a custom automation system built specifically around your lead sources, your CRM, and your sales process.",
      "Every workflow is mapped before a single node is built — so you can see exactly what will happen to every lead before we touch anything in your existing setup.",
    ],
  },
  {
    n: "03",
    title: "Implementation",
    body: [
      "We build and test the entire system in an isolated environment before going anywhere near your live pipeline.",
      "Once everything is tested and working perfectly we deploy it, connect it to your live lead sources, and go live.",
      "Most systems are fully operational within 5 to 14 business days depending on complexity.",
    ],
  },
  {
    n: "04",
    title: "Monitoring and Optimisation",
    body: [
      "Going live is not the finish line. Every system we build is monitored, measured, and improved on an ongoing basis.",
      "You receive a monthly performance report showing leads processed, response times, follow-up completion rates, and booking conversions.",
      "We use that data to refine your sequences, adjust qualification thresholds, and make sure the system keeps improving every single month.",
    ],
  },
];

function Atom({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 256 256" fill="currentColor" className={className} aria-hidden>
      <path d="M128,88a40,40,0,1,0,40,40A40,40,0,0,0,128,88Zm0,64a24,24,0,1,1,24-24A24,24,0,0,1,128,152Z" />
      <path
        d="M223.3,169.8c-6.9-11.9-17.2-24.2-30-35.9,1.3-1.3,2.6-2.6,3.8-3.9,29.3-30.4,40.4-61.4,29.6-80.1S181.5,26.8,140,38.2c-4,1.1-8,2.4-12,3.9-4-1.5-8-2.8-12-3.9C74.5,26.8,42.1,31.2,31.3,49.9S32.4,99.5,61.7,130c1.2,1.3,2.5,2.6,3.8,3.9-12.8,11.7-23.1,24-30,35.9-10.8,18.7-11,35.9-.2,54.6s43.2,23.1,84.7,11.7c4-1.1,8-2.4,12-3.9,4,1.5,8,2.8,12,3.9,41.5,11.4,73.9,7,84.7-11.7S234.1,188.5,223.3,169.8Z"
        opacity="0.25"
      />
    </svg>
  );
}

/** Shared section heading: pill + h2 on one row, left aligned. */
function SectionHead({ eyebrow, heading }: { eyebrow: string; heading: string }) {
  return (
    <div className="flex w-full flex-col items-start justify-start gap-3 md:flex-row md:items-center md:gap-6">
      <Pill>{eyebrow}</Pill>
      <h2 className="font-display text-[28px] font-normal leading-[34px] tracking-[-1.2px] text-white md:text-[40px] md:leading-[44px] md:tracking-[-1.8px]">
        {heading}
      </h2>
    </div>
  );
}

function PersonBlock({ p }: { p: Person }) {
  return (
    <section className="flex w-full items-center justify-center gap-2.5 px-5 py-[60px] md:px-10 md:py-[100px]">
      <div className="flex w-full max-w-[1440px] flex-col items-center justify-center gap-10 md:gap-[60px]">
        <SectionHead eyebrow={p.eyebrow} heading={p.heading} />

        <p className="w-full font-body text-[20px] leading-[30px] tracking-[-0.8px] text-white-50 md:text-[30px] md:leading-[39px] md:tracking-[-1.2px]">
          {p.lead}
        </p>

        <div className="flex w-full flex-col items-center justify-center gap-10 md:flex-row md:items-start md:gap-[61px]">
          {/* Portrait: orange dome behind, grayscale cutout, name overlay.
              Framer pins the wrapper to 589px tall at every breakpoint; only the
              width changes — 417px at Desktop-Wide, flexible below it. */}
          <div className="relative h-[589px] w-full md:flex-1 lg:w-[417px] lg:flex-none">
            <div className="relative size-full">
              <div
                aria-hidden
                className="absolute inset-x-0 bottom-0 h-[78%] rounded-t-[200px] bg-brand"
              />
              <Image
                src={`/images/${p.img}`}
                alt={`${p.first} ${p.last}`}
                fill
                sizes="(max-width: 1199px) 100vw, 417px"
                className="relative z-10 object-contain grayscale"
              />
              <div
                aria-hidden
                className="absolute inset-x-[-6%] bottom-0 z-20 h-[38%]"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(84, 84, 84, 0) 0%, rgb(10, 10, 10) 67.175%)",
                }}
              />
              <div className="absolute inset-x-0 bottom-0 z-30 flex flex-col">
                <span className="font-display text-[34px] font-semibold leading-[28px] tracking-[-1.7px] text-brand md:text-[50px] md:leading-[40px] md:tracking-[-2.5px]">
                  {p.first}
                </span>
                <span className="font-display text-[34px] font-semibold leading-[28px] tracking-[-1.7px] text-[#fffbf7] md:text-[50px] md:leading-[40px] md:tracking-[-2.5px]">
                  {p.last}
                </span>
              </div>
            </div>
          </div>

          {/* Copy + tags — the 146px vertical padding is kept at every breakpoint */}
          <div className="flex w-full max-w-[600px] flex-col items-center justify-center gap-8 py-[146px] md:gap-10">
            <p className="w-full font-body text-[16px] leading-[24px] text-white opacity-80">
              {p.body}
            </p>
            <div className="flex w-full flex-row flex-wrap items-center justify-start gap-2.5">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="flex items-center justify-center gap-1 rounded-[20px] bg-white-10 px-5 py-2.5 backdrop-blur-[5px]"
                >
                  <Atom className="size-5 shrink-0 text-brand" />
                  <span className="font-body text-[16px] leading-[24px] text-white">{t}</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function AboutPage() {
  return (
    <main className="flex w-full flex-col items-center justify-center">
      {/* Hero banner — image behind, heading pinned to the bottom */}
      <div className="relative flex h-[420px] w-full items-end justify-center gap-2.5 px-5 py-10 md:h-[800px] md:pb-[60px]">
        <div className="absolute inset-x-5 bottom-[70px] top-[60px] overflow-hidden rounded-[30px] md:inset-x-10 md:bottom-[40px] md:top-[90px]">
          <Image
            src="/images/oxuRg8FbESc0Cw7B8qGzTfvqJI.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div
            aria-hidden
            className="absolute inset-0 opacity-75"
            style={{
              backgroundImage:
                "linear-gradient(rgba(191, 51, 19, 0) 19.9801%, rgb(10, 10, 10) 73%)",
            }}
          />
        </div>

        <h1 className="relative z-10 max-w-[740px] text-center font-display text-[30px] font-normal leading-[36px] tracking-[-1.5px] text-white md:text-[50px] md:leading-[55px] md:tracking-[-2.5px]">
          Hey There! Welcome to <span className="text-brand">Aerstack.</span>
        </h1>
      </div>

      {/* Who we are — copy left, History/Mission/Vision accordion right */}
      <section className="flex w-full items-center justify-center gap-[60px] px-5 py-[60px] md:px-10 md:py-[100px]">
        <div className="flex w-full max-w-[1440px] flex-col items-center justify-center gap-10 md:gap-[60px]">
          <SectionHead eyebrow="Who We Are" heading="About our Company" />

          <div className="flex w-full flex-col items-start justify-center gap-10 md:flex-row md:gap-[60px]">
            <div className="flex w-full flex-col gap-8 md:max-w-[650px]">
              <p className="font-body text-[20px] leading-[30px] tracking-[-0.8px] text-white-50 md:text-[30px] md:leading-[39px] md:tracking-[-1.2px]">
                Let&apos;s get acquainted! A team that builds automated lead follow-up systems for{" "}
                <span className="text-white">marketing agencies</span> who are tired of losing deals
                to slow response times and manual follow-up. We are not a big agency. We do not do
                everything. We do one thing — and we do it{" "}
                <span className="text-brand">exceptionally well.</span>
              </p>
              <p className="font-body text-[20px] leading-[30px] tracking-[-0.8px] text-white-50 md:text-[30px] md:leading-[39px] md:tracking-[-1.2px]">
                While you focus on running your agency, our systems make sure every lead gets{" "}
                <span className="text-[#f2f2f2]">contacted, followed up, qualified, and booked</span>
                . Automatically. Around the clock. No leads lost. No deals left on the table. No
                manual chasing.{" "}
                <span className="text-brand">
                  Just a pipeline that works the way it always should have.
                </span>
              </p>
            </div>

            <div className="w-full md:max-w-[650px]">
              <HmvAccordion />
            </div>
          </div>
        </div>
      </section>

      <Brands eyebrow="Brands" heading="Brands we have worked with" />

      {PEOPLE.map((p) => (
        <PersonBlock key={p.first} p={p} />
      ))}

      {/* Big wordmark with the value cloud over it */}
      <section className="relative flex w-full flex-col items-center justify-center gap-5 px-5 pb-[60px] pt-[100px] md:px-10 md:pb-[100px] md:pt-[200px]">
        <svg
          aria-hidden
          viewBox="0 0 566 118"
          preserveAspectRatio="xMidYMid meet"
          className="pointer-events-none w-full select-none"
        >
          <text
            x="283"
            y="92"
            textAnchor="middle"
            fill="#ffffff"
            className="font-display"
            style={{ fontSize: "104px", fontWeight: 400, letterSpacing: "-5px" }}
          >
            Aerstack
            <tspan fill="#e8443c">.</tspan>
          </text>
        </svg>

        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <ValueCloud />
        </div>
      </section>

      <Timeline heading="Our 4 Stage Process" steps={STEPS} />
      <Faq />
    </main>
  );
}
