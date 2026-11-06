import { SectionHead } from "../components/SectionHead";
import { publicAsset, site } from "../lib/site";

const FACTS = ["Carte professionnelle", "4 passagers et coffre", "Espèces et carte bancaire", "Siège enfant sur demande"];

export function Chauffeur() {
  return (
    <section className="block" id="chauffeur">
      <div className="container">
        <SectionHead kicker="02 — Le chauffeur" title={site.driver} />
        <div className="split">
          <div className="portrait-shell liquid-glass liquid-glass--panel" data-reveal>
            <div className="portrait-frame">
              <img
                src={publicAsset("assets/chauffeur.svg")}
                width={800}
                height={1000}
                alt={`${site.driver} — portrait à remplacer`}
              />
            </div>
            <p className="portrait-note">Photo à remplacer</p>
          </div>
          <div data-reveal>
            <div className="prose">
              <p>Indépendant, installé à {site.city}. C’est moi qui décroche, qui confirme le créneau et qui conduis.</p>
              <p>
                Les départs tôt se préparent&nbsp;: train, avion, rendez-vous. Je connais les accès qui comptent quand le matin
                est chargé.
              </p>
              <p>Véhicule récent, habitacle propre, conduite posée. Vous savez qui vient vous chercher.</p>
            </div>
            <ul className="fact-list">
              {FACTS.map((fact) => (
                <li key={fact}>{fact}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
