import { useReveal } from "./hooks/useReveal";
import { CallDock } from "./layout/CallDock";
import { Footer } from "./layout/Footer";
import { Header } from "./layout/Header";
import { Chauffeur } from "./sections/Chauffeur";
import { Contact } from "./sections/Contact";
import { Facts } from "./sections/Facts";
import { Hero } from "./sections/Hero";
import { Reviews } from "./sections/Reviews";
import { Ride } from "./sections/Ride";
import { Services } from "./sections/Services";
import { Statement } from "./sections/Statement";
import { Zones } from "./sections/Zones";

export default function App() {
  useReveal();

  return (
    <>
      <a className="skip-link" href="#contenu">
        Aller au contenu
      </a>
      <Header />
      <main id="contenu">
        <Hero />
        <Facts />
        <Statement />
        <Ride />
        <Services />
        <Chauffeur />
        <Zones />
        <Reviews />
        <Contact />
      </main>
      <Footer />
      <CallDock />
    </>
  );
}
