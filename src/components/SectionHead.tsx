import type { ReactNode } from "react";

export function SectionHead({
  kicker,
  title,
  intro,
}: {
  kicker: string;
  title: ReactNode;
  intro?: string;
}) {
  return (
    <header className="section-head" data-reveal>
      <p className="label">{kicker}</p>
      <h2 className="display d3">{title}</h2>
      {intro ? <p className="lead">{intro}</p> : null}
    </header>
  );
}
