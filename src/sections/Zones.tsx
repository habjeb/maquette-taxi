import type { CSSProperties } from "react";
import AnimatedContent from "../components/AnimatedContent";
import SpotlightCard from "../components/SpotlightCard";
import { site } from "../lib/site";
import { Section } from "./Section";

const ROUTES = [
  [site.city, "Centre et quartiers"],
  ["Communes voisines", "Courses du quotidien et rendez-vous"],
  ["Gares", "Dépose et prise en charge aux halls"],
  ["Aéroports de la région", "Terminaux, suivi de vol sur demande"],
  ["Longue distance", "Sur devis, prix fixé avant le départ"],
] as const;

const HOURS = [
  ["Lundi – dimanche", "6 h – minuit"],
  ["Tôt le matin", "Sur réservation"],
  ["Nuit", "Sur réservation"],
  ["Jours fériés", "À confirmer"],
] as const;

const cardStyle = { "--spotlight-card-surface": "#15181f" } as CSSProperties;

export function Zones() {
  return (
    <Section
      id="zones"
      kicker="03 — Zone"
      title="Zone et horaires"
      intro={`Basé à ${site.city}. En dehors de ce périmètre, la course se confirme au téléphone, avec un tarif annoncé.`}
    >
      <AnimatedContent
        className="grid items-start gap-3.5 min-[860px]:grid-cols-[1.15fr_0.85fr]"
        distance={24}
        duration={0.7}
        stagger={0.1}
        blur={3}
      >
        <SpotlightCard spotlightColor="#f5c400" intensity={0.2} borderGlow={0.65} grain={0.08} style={cardStyle}>
          <h3 className="m-0 mb-4 text-[1.3rem] font-semibold tracking-tight">Zone desservie</h3>
          <ul className="route m-0 list-none p-0">
            {ROUTES.map(([title, detail]) => (
              <li key={title}>
                <strong className="block">{title}</strong>
                <span className="text-[0.95rem] text-muted">{detail}</span>
              </li>
            ))}
          </ul>
          <p className="mt-4 mb-0 text-muted">Indiquez ici vos aéroports, gares et communes.</p>
        </SpotlightCard>
        <SpotlightCard spotlightColor="#f5c400" intensity={0.2} borderGlow={0.65} grain={0.08} style={cardStyle}>
          <h3 className="m-0 mb-4 text-[1.3rem] font-semibold tracking-tight">Horaires</h3>
          <ul className="m-0 list-none p-0">
            {HOURS.map(([label, value]) => (
              <li key={label} className="flex items-baseline justify-between gap-4 border-b border-white/8 py-3 first:border-t">
                <span className="text-copy">{label}</span>
                <strong className="text-right font-semibold text-amber">{value}</strong>
              </li>
            ))}
          </ul>
          <p className="mt-4 mb-0 text-muted">Une prise en charge avant 6 h se réserve la veille.</p>
        </SpotlightCard>
      </AnimatedContent>
    </Section>
  );
}
