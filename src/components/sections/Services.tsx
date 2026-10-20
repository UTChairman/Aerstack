import Pill from "@/components/ui/Pill";
import ButtonPill from "@/components/ui/ButtonPill";
import ServiceCard from "@/components/ui/ServiceCard";
import { SERVICES } from "@/lib/data";

export default function Services() {
  return (
    <section className="flex w-full items-center justify-center gap-[60px] px-3 pb-[50px] pt-[120px] md:px-10 md:py-20 lg:pb-[100px] lg:pt-[150px]">
      <div className="flex w-full max-w-[1440px] flex-col items-start justify-center gap-10 md:gap-[30px] lg:gap-[60px]">
        {/* Heading block — column, aligned end, gap 30 */}
        <div className="flex w-full flex-col items-end justify-center gap-[30px]">
          <div className="flex w-full flex-col items-start justify-center gap-5">
            <div className="flex w-full flex-col items-start justify-start gap-3 md:flex-row md:items-center md:gap-6">
              <Pill>Services</Pill>
              <h2 className="font-display text-[28px] font-normal leading-[34px] tracking-[-1.2px] text-white md:text-[40px] md:leading-[44px] md:tracking-[-1.8px]">
                What we are offering
              </h2>
            </div>
          </div>
          <ButtonPill href="/case-studies">See Our Work</ButtonPill>
        </div>

        {/* Cards — 2 equal columns, gap 10 */}
        <div className="grid w-full grid-cols-1 gap-[10px] md:grid-cols-2">
          {SERVICES.map((s) => (
            <ServiceCard key={s.title} s={s} />
          ))}
        </div>
      </div>
    </section>
  );
}
