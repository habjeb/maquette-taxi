import Aurora from "./components/Aurora";
import { usePrefersReducedMotion } from "./hooks/usePrefersReducedMotion";
import { CallDock } from "./layout/CallDock";
import { Footer } from "./layout/Footer";
import { Header } from "./layout/Header";
import { Chauffeur } from "./sections/Chauffeur";
import { Contact } from "./sections/Contact";
import { Hero } from "./sections/Hero";
import { Reviews } from "./sections/Reviews";
import { Services } from "./sections/Services";
import { Zones } from "./sections/Zones";

export default function App() {
  const reduced = usePrefersReducedMotion();

  return (
    <>
      <a className="skip" href="#contenu">
        Aller au contenu
      </a>
      <div className="pointer-events-none fixed inset-x-0 top-0 z-0 h-[min(82vh,860px)]" aria-hidden="true">
        <Aurora
          colorStops={["#5c3b09", "#f5c400", "#8d5a12"]}
          amplitude={0.72}
          blend={0.55}
          speed={0.32}
          height={0.62}
          scale={1.05}
          glow={0.48}
          brightness={0.9}
          layers={2}
          opacity={1}
          mouseInteraction={!reduced}
          intro={!reduced}
          paused={reduced}
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(9,10,12,0.15),transparent_42%,#090a0c)]" />
      </div>
      <div className="relative z-10">
        <Header />
        <main id="contenu">
          <Hero />
          <Services />
          <Chauffeur />
          <Zones />
          <Reviews />
          <Contact />
        </main>
        <Footer />
      </div>
      <CallDock />
    </>
  );
}
