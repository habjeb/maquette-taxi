import { ArrowIcon, ClockIcon, PhoneIcon, WhatsAppIcon } from "../components/icons";
import { enter } from "../lib/delay";
import { publicAsset, site, whatsappUrl } from "../lib/site";

export function Hero() {
  return (
    <section className="hero" id="haut" aria-labelledby="hero-title">
      <div className="hero-media" aria-hidden="true">
        <img
          className="kenburns"
          src={publicAsset("assets/silk.svg")}
          alt=""
          width={1600}
          height={1024}
        />
      </div>
      <div className="hero-scrim" aria-hidden="true" />
      <div className="hero-center">
        <h1 className="hero-title" id="hero-title" data-enter style={enter(0)}>
          À l’heure.
          <br />
          Tarif <em>annoncé</em>.
        </h1>
        <div className="hero-ctas" id="hero-ctas" data-enter style={enter(80)}>
          <a className="dial liquid-glass" href={`tel:${site.phoneTel}`}>
            <span className="sr-only">Appeler le </span>
            <span className="dial-num">{site.phoneDisplay}</span>
            <span className="dial-go" aria-hidden="true">
              <ArrowIcon />
            </span>
          </a>
        </div>
        <p className="hero-support" data-enter style={enter(140)}>
          Chauffeur indépendant à {site.city}. Un appel, une heure, un prix dit avant de partir.
        </p>
        <a
          className="btn btn-glass liquid-glass hero-cta"
          href={whatsappUrl()}
          target="_blank"
          rel="noopener noreferrer"
          data-enter
          style={enter(200)}
        >
          Écrire sur WhatsApp
          <ArrowIcon className="icon icon-nudge" />
        </a>
      </div>
      <div className="hero-social" data-enter style={enter(260)}>
        <a className="liquid-glass" href={`tel:${site.phoneTel}`} aria-label={`Appeler le ${site.phoneDisplay}`}>
          <PhoneIcon />
        </a>
        <a className="liquid-glass" href={whatsappUrl()} target="_blank" rel="noopener noreferrer" aria-label="Écrire sur WhatsApp">
          <WhatsAppIcon />
        </a>
        <a className="liquid-glass" href="#zones" aria-label="Voir les horaires">
          <ClockIcon />
        </a>
      </div>
    </section>
  );
}
