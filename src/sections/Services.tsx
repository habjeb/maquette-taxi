import type { ReactNode } from "react";
import { ClockIcon, PinIcon, PlaneIcon, RouteIcon, TrainIcon } from "../components/icons";
import { SectionHead } from "../components/SectionHead";
import { site } from "../lib/site";

const SERVICES: { title: string; text: string; icon: ReactNode }[] = [
  {
    title: "Hôpitaux et cliniques",
    text: "Consultation, séance ou sortie. L’heure suit le service de soins, et le point de rendez-vous est noté : hall, accueil ou adresse.",
    icon: <PinIcon />,
  },
  {
    title: "Part-Dieu et Perrache",
    text: "Premier train ou dernier départ. Dépose au plus près du hall, ou attente à la sortie si le quai se fait attendre.",
    icon: <TrainIcon />,
  },
  {
    title: "Lyon-Saint-Exupéry",
    text: "Prise en charge ou dépose aux terminaux. Si le vol avance ou prend du retard, on décale l’heure ensemble.",
    icon: <PlaneIcon />,
  },
  {
    title: "Courses dans la métropole",
    text: `Domicile, rendez-vous, visite. ${site.city} et les communes autour, avec un créneau et une adresse, rien de plus.`,
    icon: <RouteIcon />,
  },
  {
    title: "Au-delà de l’agglomération",
    text: "Vienne, Saint-Étienne, Grenoble, la Savoie : le trajet se confirme au téléphone. Passé 150 km, un accord préalable peut être demandé.",
    icon: <RouteIcon />,
  },
  {
    title: "Tôt, tard, dimanche",
    text: "Joignable toute la semaine. Les départs avant l’aube et ceux de la nuit se réservent à l’avance, pour être là à l’heure dite.",
    icon: <ClockIcon />,
  },
];

export function Services() {
  return (
    <section className="block" id="services">
      <div className="container">
        <SectionHead
          kicker="01 — Trajets"
          title={
            <>
              Hôpital, gare, <em>aéroport</em>.
            </>
          }
          intro="Un seul interlocuteur. Le créneau est confirmé, le prix est dit avant de monter, que la course soit prise en charge ou réglée à bord."
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
