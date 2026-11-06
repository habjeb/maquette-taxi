import { site, whatsappUrl } from "../lib/site";

const LINKS = [
  ["#services", "Services"],
  ["#chauffeur", "Chauffeur"],
  ["#zones", "Zones"],
  ["#avis", "Avis"],
  ["#contact", "Contact"],
] as const;

export function Footer() {
  return (
    <footer className="border-t border-white/8 bg-ink py-9">
      <div className="mx-auto w-full max-w-[1120px] px-5 sm:px-8">
        <div className="grid gap-5 min-[900px]:grid-cols-[1.3fr_1fr_auto] min-[900px]:items-start">
          <div>
            <p className="m-0 text-xl font-bold tracking-tight">
              Taxi <em className="text-amber not-italic">Pro</em>
            </p>
            <p className="m-0 mt-1.5 text-muted">Chauffeur indépendant à {site.city}.</p>
          </div>
          <nav className="flex flex-wrap gap-x-4 gap-y-2" aria-label="Pied de page">
            {LINKS.map(([href, label]) => (
              <a key={href} className="text-cream" href={href}>
                {label}
              </a>
            ))}
          </nav>
          <div className="grid gap-1.5">
            <a className="text-cream tabular-nums" href={`tel:${site.phoneTel}`}>
              {site.phoneDisplay}
            </a>
            <a className="text-cream" href={whatsappUrl()} target="_blank" rel="noopener noreferrer">
              WhatsApp
            </a>
          </div>
        </div>
        <p className="mt-6 mb-0 text-[0.92rem] text-muted">
          Avant une mise en ligne officielle, compléter la carte professionnelle, le SIRET et l’assurance.
        </p>
        <p className="mt-2.5 mb-0 text-[0.82rem] text-muted">Maquette — Web Commit</p>
      </div>
    </footer>
  );
}
