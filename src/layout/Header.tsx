import { useEffect, useState } from "react";
import { useActiveSection } from "../hooks/useActiveSection";
import { site } from "../lib/site";

const NAV = [
  { href: "#services", id: "services", label: "Services" },
  { href: "#chauffeur", id: "chauffeur", label: "Chauffeur" },
  { href: "#zones", id: "zones", label: "Zones" },
  { href: "#avis", id: "avis", label: "Avis" },
  { href: "#contact", id: "contact", label: "Contact" },
] as const;

const SECTION_IDS = NAV.map((item) => item.id);

export function Header() {
  const [open, setOpen] = useState(false);
  const [stuck, setStuck] = useState(false);
  const active = useActiveSection(SECTION_IDS);

  useEffect(() => {
    document.body.classList.toggle("nav-open", open);
    return () => document.body.classList.remove("nav-open");
  }, [open]);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        setStuck(window.scrollY > 8);
        ticking = false;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 900px)");
    const onChange = (event: MediaQueryListEvent) => {
      if (event.matches) setOpen(false);
    };
    desktop.addEventListener("change", onChange);
    return () => desktop.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        document.getElementById("nav-toggle")?.focus();
      }
    };
    const onClick = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Node)) return;
      if (document.getElementById("nav")?.contains(target)) return;
      if (document.getElementById("nav-toggle")?.contains(target)) return;
      setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("click", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("click", onClick);
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 border-t-[3px] border-amber backdrop-blur-xl ${
        stuck ? "bg-ink/95 shadow-[0_12px_30px_rgba(0,0,0,0.28)]" : "bg-ink/80"
      }`}
    >
      <div className="mx-auto flex min-h-[72px] w-full max-w-[1120px] items-center gap-3 px-5 sm:px-8">
        <a className="inline-flex items-center gap-2.5 text-[1.15rem] font-bold tracking-tight text-cream no-underline" href="#haut">
          <span className="grid size-[38px] place-items-center rounded-[11px] bg-amber text-xl font-bold text-on-amber" aria-hidden="true">
            T
          </span>
          <span>
            Taxi <em className="text-amber not-italic">Pro</em>
          </span>
        </a>

        <nav
          id="nav"
          aria-label="Sections"
          className={`nav-panel max-[899px]:fixed max-[899px]:inset-x-4 max-[899px]:top-[84px] max-[899px]:z-40 max-[899px]:max-h-[calc(100svh-190px)] max-[899px]:overflow-auto max-[899px]:rounded-[18px] max-[899px]:border max-[899px]:border-white/15 max-[899px]:bg-[#141820] max-[899px]:p-2 max-[899px]:shadow-[0_24px_60px_rgba(0,0,0,0.38)] min-[900px]:ml-auto min-[900px]:flex min-[900px]:items-center min-[900px]:gap-0.5 ${
            open
              ? "max-[899px]:visible max-[899px]:translate-y-0 max-[899px]:opacity-100"
              : "max-[899px]:invisible max-[899px]:pointer-events-none max-[899px]:-translate-y-1.5 max-[899px]:opacity-0"
          }`}
        >
          {NAV.map((item) => (
            <a
              key={item.id}
              href={item.href}
              aria-current={active === item.id ? "true" : undefined}
              className={`block rounded-xl px-3 py-3.5 text-[1.08rem] font-medium no-underline min-[900px]:rounded-full min-[900px]:px-3 min-[900px]:py-2 min-[900px]:text-base ${
                active === item.id ? "text-amber" : "text-cream hover:text-amber"
              }`}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          className="ml-auto hidden min-h-11 items-center rounded-full bg-amber px-4 font-bold text-on-amber tabular-nums no-underline min-[900px]:inline-flex"
          href={`tel:${site.phoneTel}`}
        >
          {site.phoneDisplay}
        </a>

        <button
          id="nav-toggle"
          type="button"
          className="grid size-11 place-items-center rounded-xl border border-white/15 min-[900px]:hidden"
          aria-expanded={open}
          aria-controls="nav"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? "Fermer le menu" : "Ouvrir le menu"}</span>
          <span className="bars" data-open={open ? "" : undefined} aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
        </button>
      </div>
    </header>
  );
}
