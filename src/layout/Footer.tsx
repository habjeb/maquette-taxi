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
              Chauffeur conventionné indépendant à {site.city}. <em>Vingt-cinq ans, une Volvo, un tarif dit avant le départ.</em>
            </p>
          </div>
          <div className="footer-cols">
            <div className="footer-col">
              <h3>Trajets</h3>
              <ul>
                <li>
                  <a href="#services">Gares et aéroport</a>
                </li>
                <li>
                  <a href="#vsl">Bon de transport</a>
                </li>
                <li>
                  <a href="#confort">Berline Volvo</a>
                </li>
                <li>
                  <a href="#hopitaux">Hôpitaux et cliniques</a>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h3>La page</h3>
              <ul>
                {NAV.map((item) => (
                  <li key={item.id}>
                    <a href={item.href}>{item.label}</a>
                  </li>
                ))}
                <li>
                  <a href="#faq">Questions</a>
                </li>
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
                  <a href="#zones">Zone et horaires</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <p className="ghost-wordmark" aria-hidden="true">
          {site.brand}
        </p>
        <div className="footer-bottom">
          <p>
            Maquette : nom commercial, téléphone, adresse, SIRET et assurance seront ceux du chauffeur. Le formulaire
            n’enregistre rien.
          </p>
          <p>Maquette — Web Commit</p>
        </div>
      </div>
    </footer>
  );
}
