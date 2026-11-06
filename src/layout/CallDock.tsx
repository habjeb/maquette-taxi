import { useEffect, useState } from "react";
import { PhoneIcon, WhatsAppIcon } from "../components/icons";
import { site, whatsappUrl } from "../lib/site";

export function CallDock() {
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    const hero = document.getElementById("hero-ctas");
    const contact = document.getElementById("contact");
    const footer = document.getElementById("pied");
    if (!hero || !contact || !("IntersectionObserver" in window)) return undefined;

    const mobile = window.matchMedia("(max-width: 899px)");
    let heroVisible = false;
    let contactVisible = false;
    let footerVisible = false;
    const sync = () => {
      setHidden(!mobile.matches || heroVisible || contactVisible || footerVisible);
    };
    const watch = (node: Element, assign: (value: boolean) => void, threshold: number) => {
      const observer = new IntersectionObserver(
        (entries) => {
          assign(entries.some((entry) => entry.isIntersecting));
          sync();
        },
        { threshold },
      );
      observer.observe(node);
      return observer;
    };
    const observers = [
      watch(hero, (value) => (heroVisible = value), 0.35),
      watch(contact, (value) => (contactVisible = value), 0.12),
    ];
    if (footer) observers.push(watch(footer, (value) => (footerVisible = value), 0.08));
    mobile.addEventListener("change", sync);
    return () => {
      observers.forEach((observer) => observer.disconnect());
      mobile.removeEventListener("change", sync);
    };
  }, []);

  return (
    <div className={`call-dock liquid-glass liquid-glass--strong${hidden ? " is-hidden" : ""}`}>
      <a className="btn btn-solid" href={`tel:${site.phoneTel}`}>
        <PhoneIcon />
        Appeler · {site.phoneDisplay}
      </a>
      <a className="btn btn-glass liquid-glass icon-btn" href={whatsappUrl()} target="_blank" rel="noopener noreferrer" aria-label="Écrire sur WhatsApp">
        <WhatsAppIcon />
      </a>
    </div>
  );
}
