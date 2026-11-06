import { SectionHead } from "../components/SectionHead";

const REVIEWS = [
  {
    quote: "À l’heure pour un train de 6 h. Voiture propre, trajet calme.",
    name: "Camille R.",
    context: "Gare",
  },
  {
    quote: "Transfert un dimanche matin. Le prix annoncé était le prix payé.",
    name: "Julien M.",
    context: "Aéroport",
  },
  {
    quote: "Sortie et retour réservés ensemble. Rien à gérer en fin de soirée.",
    name: "Nadia B.",
    context: "Soirée",
  },
];

export function Reviews() {
  return (
    <section className="block" id="avis">
      <div className="container">
        <SectionHead
          kicker="04 — Avis"
          title={
            <>
              Retours de <em>clients</em>
            </>
          }
          intro="Exemples à remplacer par de vrais avis, avec l’accord des personnes."
        />
        <div className="card-grid cols-3">
          {REVIEWS.map((review) => (
            <figure key={review.name} className="review-card liquid-glass liquid-glass--panel" data-reveal>
              <span className="label">Exemple</span>
              <blockquote>
                <p>«&nbsp;{review.quote}&nbsp;»</p>
              </blockquote>
              <figcaption>
                <cite>{review.name}</cite>
                <span>{review.context}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
