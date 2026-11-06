import { SectionHead } from "../components/SectionHead";
import copy from "../content/copy.json" with { type: "json" };

export function Faq() {
  return (
    <section className="block" id="faq">
      <div className="container">
        <SectionHead
          kicker="06 — Questions"
          title={
            <>
              Avant d’<em>appeler</em>.
            </>
          }
          intro="Les réponses courtes. Le détail d’un bon ou d’une distance se confirme avec la prescription en main."
        />
        <div className="faq-list">
          {copy.faq.map((item) => (
            <article key={item.q} className="faq-item liquid-glass liquid-glass--panel" data-reveal>
              <h3>{item.q}</h3>
              <p>{item.a}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
