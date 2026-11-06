import type { CSSProperties, ReactNode } from "react";
import AnimatedContent from "../components/AnimatedContent";
import SpotlightCard from "../components/SpotlightCard";
import { ClockIcon, MoonIcon, PinIcon, PlaneIcon, RouteIcon, TrainIcon } from "../components/icons";
import { Section } from "./Section";

const SERVICES: { title: string; text: string; icon: ReactNode }[] = [
  {
    title: "Transfert aéroport",
    text: "Prise en charge ou dépose aux terminaux. Suivi de vol possible si l’avion avance ou prend du retard. Aide aux bagages.",
    icon: <PlaneIcon />,
  },
  {
    title: "Gares",
    text: "Premier train ou dernier départ. Dépose au plus près du hall, ou attente à la sortie avec votre nom.",
    icon: <TrainIcon />,
  },
  {
    title: "Longue distance",
    text: "Rendez-vous hors de la ville, retour de soirée, trajet régional. Le prix est fixé avant de monter à bord.",
    icon: <RouteIcon />,
  },
  {
    title: "Courses en ville",
    text: "Rendez-vous, courses du quotidien, visites et rendez-vous médicaux. Un créneau, une adresse.",
    icon: <PinIcon />,
  },
  {
    title: "Soirées et événements",
    text: "Dîner, spectacle, cérémonie. La sortie et le retour se réservent ensemble, l’heure de reprise est notée.",
    icon: <MoonIcon />,
  },
  {
    title: "Mise à disposition",
    text: "Demi-journée ou journée pour un déplacement professionnel ou une visite. L’horaire est bloqué, l’itinéraire reste souple.",
    icon: <ClockIcon />,
  },
];

export function Services() {
  return (
    <Section
      id="services"
      kicker="01 — Services"
      title="Les trajets que je prends en charge."
      intro="De la course en ville au départ à l’aube pour l’aéroport. Un seul numéro, le mien."
    >
      <AnimatedContent
        className="grid gap-3.5 sm:grid-cols-2 lg:grid-cols-3"
        distance={24}
        duration={0.7}
        blur={4}
        stagger={0.07}
        threshold={0.12}
      >
        {SERVICES.map((service) => (
          <SpotlightCard
            key={service.title}
            className="h-full"
            spotlightColor="#f5c400"
            intensity={0.28}
            spotlightSize={260}
            softness={0.78}
            borderGlow={0.8}
            grain={0.12}
            style={{ "--spotlight-card-surface": "#15181f" } as CSSProperties}
          >
            <span className="mb-4 grid size-11 place-items-center rounded-xl bg-amber/12 text-amber">{service.icon}</span>
            <h3 className="m-0 mb-2 text-[1.22rem] font-semibold tracking-tight">{service.title}</h3>
            <p className="m-0 text-copy">{service.text}</p>
          </SpotlightCard>
        ))}
      </AnimatedContent>
    </Section>
  );
}
