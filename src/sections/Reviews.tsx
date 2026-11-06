import AnimatedContent from "../components/AnimatedContent";
import { Section } from "./Section";

const REVIEWS = [
  {
    quote: "À l’heure pour un train de 6 h. Voiture propre, trajet calme.",
    name: "Camille R.",
    context: "Gare",
  },
  {
    quote: "Transfert un dimanche matin. Le prix annoncé était le prix payé.",
    name: "Julien M.",
    context: "Aéroport",
  },
  {
    quote: "Sortie et retour réservés ensemble. Rien à gérer en fin de soirée.",
    name: "Nadia B.",
    context: "Soirée",
  },
];

export function Reviews() {
  return (
    <Section
      id="avis"
      kicker="04 — Avis"
      title="Retours de clients"
      intro="Exemples à remplacer par de vrais avis, avec l’accord des personnes."
    >
      <AnimatedContent
        className="grid gap-3.5 md:grid-cols-2 lg:grid-cols-3"
        distance={22}
        duration={0.7}
        stagger={0.08}
        blur={3}
      >
        {REVIEWS.map((review) => (
          <figure key={review.name} className="m-0 flex flex-col gap-4 rounded-[20px] border border-white/8 bg-panel p-5">
            <span className="inline-flex w-max rounded-full bg-amber/16 px-2 py-1 text-[0.72rem] font-bold tracking-[0.08em] text-amber uppercase">
              Exemple
            </span>
            <blockquote className="m-0">
              <p className="m-0 text-[1.08rem] leading-snug">«&nbsp;{review.quote}&nbsp;»</p>
            </blockquote>
            <figcaption className="mt-auto flex items-baseline justify-between gap-3 text-[0.92rem] text-muted">
              <cite className="font-semibold text-cream not-italic">{review.name}</cite>
              <span>{review.context}</span>
            </figcaption>
          </figure>
        ))}
      </AnimatedContent>
    </Section>
  );
}
