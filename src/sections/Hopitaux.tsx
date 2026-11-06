import { Chips } from "../components/Chips";
import { SectionHead } from "../components/SectionHead";
import { HOSPITAL_GROUPS } from "../content/places";

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
        <div className="card-grid">
          {HOSPITAL_GROUPS.map((group) => (
            <article key={group.title} className="zone-card liquid-glass liquid-glass--panel" data-reveal>
              <h3>{group.title}</h3>
              <p className="zone-note">{group.text}</p>
              <Chips items={group.places} label={group.title} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
