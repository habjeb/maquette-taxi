import { Mark } from "../components/icons";
import { NAV } from "../lib/nav";
import { site, whatsappUrl } from "../lib/site";

export function Footer() {
  return (
    <footer className="site-footer" id="pied">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <a className="brand" href="#haut">
              <Mark />
              <span>{site.brand}</span>
            </a>
            <p className="small">
              Chauffeur indépendant à {site.city}. <em>Un numéro, une heure, un tarif dit avant le départ.</em>
            </p>
          </div>
          <div className="footer-cols">
            <div className="footer-col">
              <h3>Trajets</h3>
              <ul>
                <li>
                  <a href="#services">Aéroport</a>
                </li>
                <li>
                  <a href="#services">Gares</a>
                </li>
                <li>
                  <a href="#services">Ville et soirées</a>
                </li>
                <li>
                  <a href="#course">Exemple de course</a>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h3>Le chauffeur</h3>
              <ul>
                {NAV.map((item) => (
                  <li key={item.id}>
                    <a href={item.href}>{item.label}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="footer-col">
              <h3>Réserver</h3>
              <ul>
                <li>
                  <a href={`tel:${site.phoneTel}`}>{site.phoneDisplay}</a>
                </li>
                <li>
                  <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer">
                    WhatsApp
                  </a>
                </li>
                <li>
                  <a href="#contact">Préparer un message</a>
                </li>
                <li>
                  <a href="#zones">Horaires</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <p className="ghost-wordmark" aria-hidden="true">
          {site.brand}
        </p>
        <div className="footer-bottom">
          <p>Avant une mise en ligne officielle, compléter la carte professionnelle, le SIRET et l’assurance.</p>
          <p>Maquette — Web Commit</p>
        </div>
      </div>
    </footer>
  );
}
