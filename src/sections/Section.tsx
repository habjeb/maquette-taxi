import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  kicker: string;
  title: string;
  intro?: string;
  children: ReactNode;
};

export function Section({ id, kicker, title, intro, children }: SectionProps) {
  return (
    <section id={id} className="scroll-mt-24 border-t border-white/8 bg-ink py-16 sm:py-24">
      <div className="mx-auto w-full max-w-[1120px] px-5 sm:px-8">
        <header className="mb-7 max-w-xl">
          <p className="m-0 mb-2.5 text-[0.78rem] font-bold tracking-[0.14em] text-amber uppercase">{kicker}</p>
          <h2 className="m-0 text-balance text-[clamp(1.9rem,4vw,2.8rem)] leading-[1.05] font-semibold tracking-[-0.04em]">
            {title}
          </h2>
          {intro ? <p className="mt-3 mb-0 text-pretty text-copy">{intro}</p> : null}
        </header>
        {children}
      </div>
    </section>
  );
}
