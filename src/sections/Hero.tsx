import CountUp from "../components/CountUp";
import ShinyText from "../components/ShinyText";
import SplitText from "../components/SplitText";
import { CallButton, WhatsAppButton } from "../components/cta";
import { publicAsset, site } from "../lib/site";

const PILLS = ["7j/7", "Carte et espèces", "Siège enfant sur demande"];

const STATS = [
  { to: 7, suffix: "j/7", label: "Joignable" },
  { to: 4, suffix: "", label: "Passagers et coffre" },
  { to: 6, suffix: " h", label: "Ouverture habituelle" },
] as const;

export function Hero() {
  return (
    <section id="haut" className="relative scroll-mt-24 pt-7 pb-16 min-[960px]:flex min-[960px]:min-h-[calc(100svh-75px)] min-[960px]:items-center min-[960px]:py-14">
      <div className="mx-auto grid w-full max-w-[1120px] gap-8 px-5 sm:px-8 min-[960px]:grid-cols-[1.05fr_0.95fr] min-[960px]:items-center min-[960px]:gap-12">
        <div className="min-w-0">
          <p className="m-0 inline-flex items-center gap-2.5 text-[0.95rem] font-semibold text-amber">
            <span className="dot" aria-hidden="true" />
            <ShinyText color="#f5c400" shineColor="#fff6cf" speed={3.2} shineWidth={42} softness={0.85} glow={0.18}>
              Chauffeur indépendant · {site.city}
            </ShinyText>
          </p>
          <h1 className="mt-3.5 mb-0 text-[clamp(2.55rem,8vw,5.15rem)] leading-[0.95] font-semibold tracking-[-0.055em]">
            <span className="sr-only">À l’heure. Tarif annoncé.</span>
            <span aria-hidden="true" className="block">
              <SplitText
                text="À l’heure."
                tag="span"
                className="block w-full"
                textAlign="left"
                effect="blur"
                trigger="load"
                splitType="chars"
                delay={28}
                duration={0.9}
              />
              <SplitText
                text="Tarif annoncé."
                tag="span"
                className="block w-full"
                textAlign="left"
                effect="blur"
                trigger="load"
                splitType="chars"
                delay={22}
                duration={0.95}
              />
            </span>
          </h1>
          <p className="mt-4 mb-0 max-w-xl text-pretty text-lg text-copy">
            Aéroport, gare, ville ou longue distance&nbsp;: vous joignez directement votre chauffeur. L’heure est
            confirmée, le prix est dit avant de partir.
          </p>
          <div id="hero-ctas" className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <CallButton />
            <WhatsAppButton>Réserver sur WhatsApp</WhatsAppButton>
          </div>
          <ul className="mt-4 mb-0 flex list-none flex-wrap gap-2 p-0">
            {PILLS.map((pill) => (
              <li key={pill} className="rounded-full border border-white/15 px-2.5 py-1 text-sm text-muted">
                {pill}
              </li>
            ))}
          </ul>
          <ul className="mt-6 mb-0 grid max-w-lg list-none grid-cols-3 gap-3 border-t border-white/10 p-0 pt-4">
            {STATS.map((stat) => (
              <li key={stat.label}>
                <p className="m-0 text-[1.45rem] leading-none font-semibold tracking-tight text-amber tabular-nums">
                  <CountUp to={stat.to} duration={1.05} trigger="load" />
                  {stat.suffix}
                </p>
                <p className="mt-1.5 mb-0 text-sm text-muted">{stat.label}</p>
              </li>
            ))}
          </ul>
        </div>

        <aside className="min-w-0 rounded-[28px] border border-white/14 bg-linear-to-b from-[#1b1f28] to-[#12141a] p-5 shadow-[0_24px_60px_rgba(0,0,0,0.38)]" aria-label="Exemple de course">
          <div className="flex items-center justify-between gap-2">
            <span className="inline-flex rounded-full bg-amber/16 px-2 py-1 text-[0.72rem] font-bold tracking-[0.08em] text-amber uppercase">
              Exemple
            </span>
            <span className="text-muted">Illustration</span>
          </div>
          <div className="mt-2 rounded-[18px] bg-[radial-gradient(140px_40px_at_50%_88%,rgba(245,196,0,0.22),transparent_70%),linear-gradient(180deg,rgba(255,255,255,0.03),transparent)] px-1 pt-1.5">
            <img
              src={publicAsset("assets/taxi.svg")}
              width={640}
              height={260}
              alt="Illustration d’un taxi, à remplacer par une photo du véhicule"
            />
          </div>
          <p className="mt-2 mb-0 text-[0.82rem] text-muted">Photo du véhicule à remplacer</p>
          <p className="mt-4 mb-0 text-[0.78rem] font-bold tracking-[0.1em] text-amber uppercase">Transfert aéroport</p>
          <p className="mt-1 mb-0 text-[clamp(1.45rem,2.4vw,1.9rem)] leading-none font-bold tracking-[-0.04em]">
            Aéroport <span aria-hidden="true">→</span> Centre-ville
          </p>
          <dl className="mt-3.5 mb-0 grid grid-cols-3 gap-2">
            <div className="rounded-xl bg-black/28 px-2.5 py-2.5">
              <dt className="text-xs text-muted">Départ</dt>
              <dd className="m-0 mt-0.5 font-semibold tabular-nums">05:40</dd>
            </div>
            <div className="rounded-xl bg-black/28 px-2.5 py-2.5">
              <dt className="text-xs text-muted">Passagers</dt>
              <dd className="m-0 mt-0.5 font-semibold tabular-nums">2</dd>
            </div>
            <div className="rounded-xl bg-black/28 px-2.5 py-2.5">
              <dt className="text-xs text-muted">Tarif</dt>
              <dd className="m-0 mt-0.5 font-semibold">Annoncé</dd>
            </div>
          </dl>
        </aside>
      </div>
    </section>
  );
}
