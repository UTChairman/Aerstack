import ButtonPill from "@/components/ui/ButtonPill";

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] w-full flex-col items-center justify-center gap-8 px-10 py-[160px]">
      <span className="font-display text-[96px] font-normal leading-none tracking-[-4px] text-brand md:text-[156px]">
        404
      </span>
      <h1 className="max-w-[740px] text-center font-display text-[28px] font-normal leading-[34px] tracking-[-1.2px] text-white md:text-[40px] md:leading-[44px] md:tracking-[-1.8px]">
        This page could not be found.
      </h1>
      <ButtonPill href="/">Back to Home</ButtonPill>
    </main>
  );
}
