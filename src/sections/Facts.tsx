import { reveal } from "../lib/delay";

const FACTS = [
  { num: "7", suffix: "j/7", text: "Joignable, dimanche compris" },
  { num: "4", suffix: "", text: "Passagers, et le coffre" },
  { num: "6", suffix: "h", text: "Ouverture habituelle" },
  { num: "0", suffix: "", text: "Surprise sur le tarif annoncé" },
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
