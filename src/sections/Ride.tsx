import { useState } from "react";
import { ClockIcon, PinIcon, TariffIcon } from "../components/icons";
import { publicAsset, site } from "../lib/site";

const PARTS = [
  {
    id: "heure",
    title: "L’heure",
    text: "Départ noté, y compris tôt le matin.",
    icon: ClockIcon,
  },
  {
    id: "trajet",
    title: "Le trajet",
    text: "Adresse, hall ou terminal.",
    icon: PinIcon,
  },
  {
    id: "tarif",
    title: "Le tarif",
    text: "Annoncé avant de monter à bord.",
    icon: TariffIcon,
  },
] as const;

export function Ride() {
  const [focus, setFocus] = useState<(typeof PARTS)[number]["id"] | null>(null);

  return (
    <section className="block" id="course" aria-labelledby="course-title">
      <div className="container ride-grid">
        <div>
          <p className="label" data-reveal>
            Exemple
          </p>
          <h2 className="display d3 stack-title" id="course-title" data-reveal style={{ transitionDelay: "40ms" }}>
            <span>Une course.</span>
            <span>Une heure.</span>
            <em>Un tarif.</em>
          </h2>
          <p className="lead" data-reveal>
            Aéroport, gare ou ville&nbsp;: le créneau est confirmé, le prix est dit avant de partir.
          </p>
          <div className="anatomy" role="group" aria-label="Ce qui est noté avant le départ" data-reveal>
            {PARTS.map((part) => {
              const Icon = part.icon;
              const pressed = focus === part.id;
              return (
                <button
                  key={part.id}
                  type="button"
                  className="anatomy-item"
                  aria-pressed={pressed}
                  onClick={() => setFocus(pressed ? null : part.id)}
                >
                  <span className="a-icon">
                    <Icon />
                  </span>
                  <span>
                    <strong>{part.title}</strong>
                    <span className="a-text">{part.text}</span>
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="ride-stage-wrap" data-reveal>
          <article className="ride liquid-glass liquid-glass--panel" data-focus={focus ?? undefined} aria-label="Exemple de course">
            <div className="ride-visual">
              <img
                src={publicAsset("assets/taxi.svg")}
                width={800}
                height={340}
                alt="Illustration d’un taxi, à remplacer par une photo du véhicule"
              />
            </div>
            <div className="ride-head">
              <span className="ride-avatar" aria-hidden="true">
                <ClockIcon />
              </span>
              <div>
                <b>{site.brand}</b>
                <span>Exemple de course</span>
              </div>
              <span className="ride-time">05:40</span>
            </div>
            <h3 className="ride-subject">
              Aéroport <span aria-hidden="true">→</span> Centre-ville
            </h3>
            <div className="ride-body">
              <div className="ride-part" data-part="heure">
                <span className="label">Départ</span>
                <p>05:40, prise en charge au terminal.</p>
              </div>
              <div className="ride-part" data-part="trajet">
                <span className="label">Trajet</span>
                <p>Deux passagers, bagages en cabine.</p>
              </div>
              <div className="ride-part" data-part="tarif">
                <span className="label">Tarif</span>
                <p>Annoncé avant de monter à bord.</p>
              </div>
            </div>
            <p className="ride-foot">
              <span>Illustration</span>
              <span>Photo du véhicule à remplacer</span>
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
