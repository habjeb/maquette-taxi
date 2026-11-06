import { Chips } from "../components/Chips";
import { SectionHead } from "../components/SectionHead";
import { METRO, REGION } from "../content/places";
import { publicAsset, site } from "../lib/site";

const HOURS = [
  ["Lundi – dimanche", "Joignable"],
  ["Journée", "Soins, gares, ville"],
  ["Tôt le matin", "Sur réservation"],
  ["Nuit", "Sur réservation"],
] as const;

export function Zones() {
  return (
    <section className="block" id="zones">
      <div className="container">
        <SectionHead
          kicker="04 — Territoire"
          title={
            <>
              {site.city}, et plus <em>loin</em>.
            </>
          }
          intro="La métropole est le quotidien : domicile, service de soins, gare. Plus loin, le trajet se réserve, avec un tarif annoncé et, passé 150 km, l’accord préalable lorsqu’il est exigé."
        />
        <div className="territory" data-reveal>
          <figure className="shot shot-aerial liquid-glass liquid-glass--panel">
            <img
              src={publicAsset("photos/lyon-aerien.webp")}
              width={1400}
              height={784}
              alt="Vue aérienne de Lyon : toits de tuiles, Saône et Rhône sous un ciel nuageux."
              loading="lazy"
            />
            <figcaption>Lyon, entre les deux fleuves.</figcaption>
          </figure>
          <figure className="shot shot-street liquid-glass liquid-glass--panel">
            <img
              src={publicAsset("photos/lyon-rue.webp")}
              width={933}
              height={1400}
              alt="Rue lyonnaise en contre-plongée, façades anciennes et colline d’immeubles au soleil."
              loading="lazy"
            />
            <figcaption>Courses en ville, vers la colline.</figcaption>
          </figure>
        </div>
        <div className="zone-grid">
          <article className="zone-card liquid-glass liquid-glass--panel" data-reveal>
            <h3>Métropole</h3>
            <p className="zone-note">
              {site.city} et les communes que je parcours pour un rendez-vous, une séance ou un retour à domicile.
            </p>
            <Chips items={METRO} label="Communes de la métropole" />
          </article>
          <article className="zone-card liquid-glass liquid-glass--panel" data-reveal>
            <h3>Région et longue distance</h3>
            <p className="zone-note">
              Ces trajets se confirment à l’avance. Le prix est dit avant le départ, qu’il soit pris en charge ou non.
            </p>
            <Chips items={REGION} label="Villes de la région et au-delà" />
          </article>
        </div>
        <article className="zone-card hours-card liquid-glass liquid-glass--panel" data-reveal>
          <h3>Horaires</h3>
          <ul className="hours spread">
            {HOURS.map(([label, value]) => (
              <li key={label}>
                <span>{label}</span>
                <b>{value}</b>
              </li>
            ))}
          </ul>
          <p className="zone-note">Un départ avant l’aube se réserve la veille. Les jours fériés, un message suffit pour confirmer.</p>
        </article>
      </div>
    </section>
  );
}
