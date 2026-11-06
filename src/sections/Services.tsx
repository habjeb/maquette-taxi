import type { ReactNode } from "react";
import { ClockIcon, MoonIcon, PinIcon, PlaneIcon, RouteIcon, TrainIcon } from "../components/icons";
import { SectionHead } from "../components/SectionHead";

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
    <section className="block" id="services">
      <div className="container">
        <SectionHead
          kicker="01 — Services"
          title={
            <>
              Les trajets que je <em>prends</em> en charge.
            </>
          }
          intro="De la course en ville au départ à l’aube pour l’aéroport. Un seul numéro, le mien."
        />
        <div className="card-grid cols-3">
          {SERVICES.map((service) => (
            <article key={service.title} className="service-card liquid-glass liquid-glass--panel" data-reveal>
              <span className="a-icon solo">{service.icon}</span>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
