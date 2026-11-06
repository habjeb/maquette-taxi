import { SectionHead } from "../components/SectionHead";
import { publicAsset, site } from "../lib/site";

const FACTS = [
  "Vingt-cinq ans de métier",
  "Aide pour monter et s’installer",
  "Conduite posée, limitations respectées",
  "Le même interlocuteur, de l’appel à l’arrivée",
];

export function Confort() {
  return (
    <section className="block" id="confort">
      <div className="container">
        <SectionHead
          kicker="03 — Véhicule"
          title={
            <>
              Une Volvo, et le <em>calme</em>.
            </>
          }
          intro={`Berline gris métallisé, habitacle silencieux, place pour s’asseoir sans se plier. Le confort compte quand le trajet suit un soin.`}
        />
        <div className="split">
          <figure className="portrait-shell liquid-glass liquid-glass--panel" data-reveal>
            <div className="vehicle-frame">
              <img
                src={publicAsset("photos/volvo-berline.webp")}
                width={720}
                height={423}
                alt="Berline Volvo de service, profil gris métallisé contre un mur de pierre claire."
                loading="lazy"
              />
            </div>
            <figcaption className="portrait-note">Véhicule de service · berline Volvo</figcaption>
          </figure>
          <div data-reveal>
            <div className="prose">
              <p>
                Vingt-cinq ans que je fais ce métier, à {site.city}. Il n’y a pas de standard : la personne qui décroche
                est celle qui conduit.
              </p>
              <p>
                J’arrive à l’heure notée. Si le service de soins déborde, on se prévient. Le trajet se fait au calme — je
                parle si vous le souhaitez, je me tais si vous préférez.
              </p>
              <p>
                Pour une personne à mobilité réduite, j’aide à l’accès au véhicule et à l’installation. Je ne porte pas
                et je ne brancarde pas : ce cadre-là relève d’une ambulance.
              </p>
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
