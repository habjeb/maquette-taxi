import { useEffect, useState } from "react";
import { PhoneIcon } from "../components/icons";
import { site } from "../lib/site";

export function CallDock() {
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    const hero = document.getElementById("hero-ctas");
    const contact = document.getElementById("contact");
    if (!hero || !contact || !("IntersectionObserver" in window)) return undefined;

    const mobile = window.matchMedia("(max-width: 899px)");
    let heroVisible = false;
    let contactVisible = false;
    const sync = () => {
      setHidden(!mobile.matches || heroVisible || contactVisible);
    };
    const contactObserver = new IntersectionObserver(
      (entries) => {
        contactVisible = entries.some((entry) => entry.isIntersecting);
        sync();
      },
      { threshold: 0.12 },
    );
    const heroObserver = new IntersectionObserver(
      (entries) => {
        heroVisible = entries.some((entry) => entry.isIntersecting);
        sync();
      },
      { threshold: 0.4 },
    );
    heroObserver.observe(hero);
    contactObserver.observe(contact);
    mobile.addEventListener("change", sync);
    return () => {
      heroObserver.disconnect();
      contactObserver.disconnect();
      mobile.removeEventListener("change", sync);
    };
  }, []);

  return (
    <a
      className={`call-dock fixed z-[45] right-4 bottom-[calc(14px+env(safe-area-inset-bottom))] left-4 flex min-h-14 items-center justify-center gap-2.5 rounded-full bg-amber px-4 font-bold text-on-amber no-underline shadow-[0_14px_32px_rgba(0,0,0,0.4)] min-[900px]:hidden ${
        hidden ? "pointer-events-none translate-y-[140%] opacity-0" : ""
      }`}
      href={`tel:${site.phoneTel}`}
    >
      <PhoneIcon className="size-5" />
      <span>Appeler · {site.phoneDisplay}</span>
    </a>
  );
}
