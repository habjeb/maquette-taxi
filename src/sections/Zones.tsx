import { SectionHead } from "../components/SectionHead";
import { site } from "../lib/site";

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

export function Zones() {
  return (
    <section className="block" id="zones">
      <div className="container">
        <SectionHead
          kicker="03 — Zone"
          title={
            <>
              Zone et <em>horaires</em>
            </>
          }
          intro={`Basé à ${site.city}. En dehors de ce périmètre, la course se confirme au téléphone, avec un tarif annoncé.`}
        />
        <div className="zone-grid">
          <article className="zone-card liquid-glass liquid-glass--panel" data-reveal>
            <h3>Zone desservie</h3>
            <ul>
              {ROUTES.map(([title, detail], index) => (
                <li className="signal" key={title}>
                  <span className="signal-n">{index + 1}</span>
                  <div>
                    <strong>{title}</strong>
                    <span>{detail}</span>
                  </div>
                </li>
              ))}
            </ul>
            <p className="zone-note">Indiquez ici vos aéroports, gares et communes.</p>
          </article>
          <article className="zone-card liquid-glass liquid-glass--panel" data-reveal>
            <h3>Horaires</h3>
            <ul className="hours">
              {HOURS.map(([label, value]) => (
                <li key={label}>
                  <span>{label}</span>
                  <b>{value}</b>
                </li>
              ))}
            </ul>
            <p className="zone-note">Une prise en charge avant 6 h se réserve la veille.</p>
          </article>
        </div>
      </div>
    </section>
  );
}
