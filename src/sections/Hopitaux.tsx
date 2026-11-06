import { SectorList } from "../components/SectorList";
import { SectionHead } from "../components/SectionHead";
import { HOSPITAL_GROUPS } from "../content/places";

const [hcl, clinics, dialysis, outside] = HOSPITAL_GROUPS;

export function Hopitaux() {
  return (
    <section className="block" id="hopitaux">
      <div className="container">
        <SectionHead
          kicker="05 — Établissements"
          title={
            <>
              Les adresses que je <em>connais</em>.
            </>
          }
          intro="Hôpitaux, cliniques, dialyse et rééducation. Ce n’est pas un annuaire officiel : une autre adresse de soin, à Lyon ou plus loin, se confirme au téléphone."
        />

        <article className="directory liquid-glass liquid-glass--panel" data-reveal>
          <header className="directory-mast">
            <p className="label">{hcl.title}</p>
            <h3 className="directory-city">Les HCL</h3>
            <p>{hcl.text}</p>
          </header>
          <ul className="sector-columns" aria-label={hcl.title}>
            {hcl.places.map((place) => (
              <li key={place}>{place}</li>
            ))}
          </ul>

          <div className="directory-far">
            <header className="directory-far-head">
              <p className="label">Autres adresses</p>
              <h3>
                Cliniques, dialyse, plus <em>loin</em>.
              </h3>
              <p>Maisons de soins de la métropole, séances régulières, et établissements hors métropole quand l’ordonnance envoie plus loin.</p>
            </header>
            <div className="sector-grid sector-grid-care">
              <SectorList title={clinics.title} places={clinics.places} flow />
              <SectorList title={dialysis.title} places={dialysis.places} />
              <SectorList title={outside.title} places={outside.places} />
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
