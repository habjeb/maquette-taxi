import AnimatedContent from "../components/AnimatedContent";
import TiltedCard from "../components/TiltedCard";
import { publicAsset, site } from "../lib/site";
import { Section } from "./Section";

const FACTS = ["Carte professionnelle", "4 passagers et coffre", "Espèces et carte bancaire", "Siège enfant sur demande"];

export function Chauffeur() {
  return (
    <Section id="chauffeur" kicker="02 — Le chauffeur" title={site.driver}>
      <AnimatedContent className="grid items-center gap-8 min-[860px]:grid-cols-[0.82fr_1.18fr] min-[860px]:gap-14" distance={28} duration={0.75} blur={3}>
        <div>
          <div className="relative mx-auto w-full max-w-[420px]">
            <div
              className="pointer-events-none absolute inset-x-3 top-4 bottom-0 hidden rounded-[28px] border border-amber/45 min-[860px]:block min-[860px]:translate-x-4 min-[860px]:translate-y-4"
              aria-hidden="true"
            />
            <div className="relative aspect-[4/5]">
              <TiltedCard
                imageSrc={publicAsset("assets/chauffeur.svg")}
                altText="Votre chauffeur — portrait à remplacer"
                containerWidth="100%"
                containerHeight="100%"
                imageWidth="100%"
                imageHeight="100%"
                rotateAmplitude={8}
                scaleOnHover={1.03}
                showTooltip={false}
                gyroscope={false}
                flipOnClick={false}
                floating={false}
                radius={28}
                glare={0.32}
                glareColor="#f5c400"
                shadow={0.45}
                parallax={0.55}
                intro
                style={{ position: "absolute", inset: 0 }}
              />
            </div>
          </div>
          <p className="mx-auto mt-3 mb-0 max-w-[420px] text-sm text-muted">Photo à remplacer</p>
        </div>
        <div>
          <p className="mt-0 mb-3 text-copy">
            Indépendant, installé à {site.city}. C’est moi qui décroche, qui confirme le créneau et qui conduis.
          </p>
          <p className="mt-0 mb-3 text-copy">
            Les départs tôt se préparent&nbsp;: train, avion, rendez-vous. Je connais les accès qui comptent quand le matin
            est chargé.
          </p>
          <p className="mt-0 mb-0 text-copy">
            Véhicule récent, habitacle propre, conduite posée. Vous savez qui vient vous chercher.
          </p>
          <ul className="mt-5 mb-0 grid list-none gap-2.5 p-0 sm:grid-cols-2">
            {FACTS.map((fact) => (
              <li key={fact} className="rounded-[14px] border border-white/8 bg-white/2 px-3.5 py-3">
                {fact}
              </li>
            ))}
          </ul>
        </div>
      </AnimatedContent>
    </Section>
  );
}
