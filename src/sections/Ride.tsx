import { useState } from "react";
import { ClockIcon, PinIcon, TariffIcon } from "../components/icons";
import { publicAsset, site } from "../lib/site";

const PARTS = [
  {
    id: "heure",
    title: "L’heure",
    text: "Celle du service de soins, ou celle du train.",
    icon: ClockIcon,
  },
  {
    id: "trajet",
    title: "Le lieu",
    text: "Hall, domicile ou terminal, écrit avant.",
    icon: PinIcon,
  },
  {
    id: "tarif",
    title: "Le tarif",
    text: "Annoncé avant de monter, bon compris.",
    icon: TariffIcon,
  },
] as const;

export function Ride() {
  const [focus, setFocus] = useState<(typeof PARTS)[number]["id"] | null>(null);

  return (
    <section className="block" id="exemple" aria-labelledby="exemple-title">
      <div className="container ride-grid">
        <div>
          <p className="label" data-reveal>
            Exemple
          </p>
          <h2 className="display d3 stack-title" id="exemple-title" data-reveal style={{ transitionDelay: "40ms" }}>
            <span>Tout est dit</span>
            <em>avant.</em>
          </h2>
          <p className="lead" data-reveal>
            Sortie de soins, gare ou aéroport : rien ne se décide une fois la portière fermée.
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
                src={publicAsset("photos/volvo-berline.webp")}
                width={720}
                height={423}
                alt="Volvo gris métallisé vue de profil, utilisée pour la course."
                loading="lazy"
              />
            </div>
            <div className="ride-head">
              <span className="ride-avatar" aria-hidden="true">
                <ClockIcon />
              </span>
              <div>
                <b>{site.brand}</b>
                <span>Sortie de soins</span>
              </div>
              <span className="ride-time">09:10</span>
            </div>
            <h3 className="ride-subject">
              Croix-Rousse <span aria-hidden="true">→</span> domicile
            </h3>
            <div className="ride-body">
              <div className="ride-part" data-part="heure">
                <span className="label">Départ</span>
                <p>09:10, hall de l’hôpital de la Croix-Rousse.</p>
              </div>
              <div className="ride-part" data-part="trajet">
                <span className="label">Trajet</span>
                <p>Retour à domicile, un passager.</p>
              </div>
              <div className="ride-part" data-part="tarif">
                <span className="label">Tarif</span>
                <p>Annoncé avant de monter. Bon en règle : facture à l’Assurance Maladie.</p>
              </div>
            </div>
            <p className="ride-foot">
              <span>Berline Volvo</span>
              <span>Véhicule de service</span>
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
