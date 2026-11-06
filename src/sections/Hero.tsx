import { ArrowIcon, ClockIcon, PhoneIcon, WhatsAppIcon } from "../components/icons";
import copy from "../content/copy.json" with { type: "json" };
import { enter } from "../lib/delay";
import { publicAsset, site, whatsappUrl } from "../lib/site";

export function Hero() {
  return (
    <section className="hero" id="haut" aria-labelledby="hero-title">
      <div className="hero-media">
        <img
          className="kenburns"
          src={publicAsset("photos/volvo-berline.webp")}
          alt={copy.imageAlt}
          width={720}
          height={423}
          fetchPriority="high"
        />
      </div>
      <div className="hero-scrim" aria-hidden="true" />
      <div className="hero-center">
        <p className="label hero-kicker" data-enter style={enter(0)}>
          Taxi indépendant · {site.city}
        </p>
        <h1 className="hero-title" id="hero-title" data-enter style={enter(60)}>
          Conventionné
          <br />à <em>{site.city}</em>.
        </h1>
        <div className="hero-ctas" id="hero-ctas" data-enter style={enter(140)}>
          <a className="dial liquid-glass" href={`tel:${site.phoneTel}`}>
            <span className="sr-only">Appeler le </span>
            <span className="dial-num">{site.phoneDisplay}</span>
            <span className="dial-go" aria-hidden="true">
              <ArrowIcon />
            </span>
          </a>
        </div>
        <p className="hero-support" data-enter style={enter(200)}>
          Vingt-cinq ans au volant, berline Volvo. Hôpitaux, Part-Dieu, Perrache, Lyon-Saint-Exupéry. Avec un bon de
          transport en règle, vous n’avancez en général pas les frais.
        </p>
        <a
          className="btn btn-glass liquid-glass hero-cta"
          href={whatsappUrl()}
          target="_blank"
          rel="noopener noreferrer"
          data-enter
          style={enter(260)}
        >
          Écrire sur WhatsApp
          <ArrowIcon className="icon icon-nudge" />
        </a>
      </div>
      <div className="hero-social" data-enter style={enter(320)}>
        <a className="liquid-glass" href={`tel:${site.phoneTel}`} aria-label={`Appeler le ${site.phoneDisplay}`}>
          <PhoneIcon />
        </a>
        <a
          className="liquid-glass"
          href={whatsappUrl()}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Écrire sur WhatsApp"
        >
          <WhatsAppIcon />
        </a>
        <a className="liquid-glass" href="#zones" aria-label="Voir les horaires et la zone">
          <ClockIcon />
        </a>
      </div>
    </section>
  );
}
