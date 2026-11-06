import { Scene } from "./components/Scene";
import { useReveal } from "./hooks/useReveal";
import { CallDock } from "./layout/CallDock";
import { Footer } from "./layout/Footer";
import { Header } from "./layout/Header";
import { Confort } from "./sections/Confort";
import { Contact } from "./sections/Contact";
import { Facts } from "./sections/Facts";
import { Faq } from "./sections/Faq";
import { Hero } from "./sections/Hero";
import { Hopitaux } from "./sections/Hopitaux";
import { Ride } from "./sections/Ride";
import { Services } from "./sections/Services";
import { Statement } from "./sections/Statement";
import { Vsl } from "./sections/Vsl";
import { Zones } from "./sections/Zones";

export default function App() {
  useReveal();

  return (
    <>
      <Scene />
      <a className="skip-link" href="#contenu">
        Aller au contenu
      </a>
      <Header />
      <main id="contenu">
        <Hero />
        <Facts />
        <Statement />
        <Services />
        <Ride />
        <Vsl />
        <Confort />
        <Zones />
        <Hopitaux />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <CallDock />
    </>
  );
}
