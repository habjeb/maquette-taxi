import { reveal } from "../lib/delay";

const FACTS = [
  { num: "25", suffix: "ans", text: "De métier, le même chauffeur" },
  { num: "7", suffix: "j/7", text: "Joignable, dimanche compris" },
  { num: "Volvo", suffix: "", text: "Berline, pour le confort du trajet" },
  { num: "1", suffix: "tarif", text: "Annoncé avant de monter à bord" },
] as const;

export function Facts() {
  return (
    <section className="facts" aria-label="Repères">
      <div className="container facts-grid">
        {FACTS.map((fact, index) => (
          <div className="fact" key={fact.text} data-reveal style={reveal(index * 70)}>
            <p className="fact-num">
              {fact.num}
              {fact.suffix ? <small>{fact.suffix}</small> : null}
            </p>
            <p>{fact.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
