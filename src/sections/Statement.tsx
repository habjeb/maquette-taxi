import { reveal } from "../lib/delay";
import { site } from "../lib/site";

export function Statement() {
  return (
    <section className="statement" aria-label="Promesse">
      <div className="container">
        <h2 className="display d2" data-reveal>
          Vous savez qui conduit.
          <br />
          Vous savez <em>combien.</em>
        </h2>
        <p className="statement-sign" data-reveal style={reveal(120)}>
          {site.driver}, {site.city}
        </p>
      </div>
    </section>
  );
}
