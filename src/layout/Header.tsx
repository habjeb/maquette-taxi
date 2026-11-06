import { useEffect, useId, useRef, useState } from "react";
import { CloseIcon, Mark, MenuIcon } from "../components/icons";
import { useActiveSection } from "../hooks/useActiveSection";
import { NAV } from "../lib/nav";
import { site } from "../lib/site";

const SECTION_IDS = ["haut", ...NAV.map((item) => item.id)];

export function Header() {
  const [open, setOpen] = useState(false);
  const [stuck, setStuck] = useState(false);
  const spotted = useActiveSection(SECTION_IDS);
  const active = spotted === "haut" ? null : spotted;
  const closeRef = useRef<HTMLButtonElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const titleId = useId();

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
        setStuck(window.scrollY > 12);
        ticking = false;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 900px)");
    const onChange = () => {
      if (desktop.matches) setOpen(false);
    };
    desktop.addEventListener("change", onChange);
    return () => desktop.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (!open) return undefined;
    const sheet = document.getElementById("menu-sheet");
    const focusable = sheet ? Array.from(sheet.querySelectorAll<HTMLElement>("a, button")) : [];
    closeRef.current?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
        return;
      }
      if (event.key !== "Tab" || focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <header className={`site-header${stuck ? " is-scrolled" : ""}`}>
        <nav className="nav-pill liquid-glass liquid-glass--strong" aria-label="Sections">
          <a className="brand" href="#haut">
            <Mark />
            <span>{site.brand}</span>
          </a>
          <div className="nav-links">
            {NAV.map((item) => (
              <a key={item.id} href={item.href} aria-current={active === item.id ? "true" : undefined}>
                {item.label}
              </a>
            ))}
          </div>
          <div className="nav-actions">
            <a className="btn btn-text nav-phone" href={`tel:${site.phoneTel}`}>
              {site.phoneDisplay}
            </a>
            <a className="btn btn-glass liquid-glass liquid-glass--bright" href="#contact">
              Réserver
            </a>
            <button
              ref={toggleRef}
              type="button"
              className="menu-btn liquid-glass"
              aria-expanded={open}
              aria-controls="menu-sheet"
              onClick={() => setOpen(true)}
            >
              <span className="sr-only">Ouvrir le menu</span>
              <MenuIcon />
            </button>
          </div>
        </nav>
      </header>

      <div
        className={`menu-sheet${open ? " is-open" : ""}`}
        id="menu-sheet"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-hidden={open ? undefined : true}
        inert={open ? undefined : true}
      >
        <div className="menu-sheet-top">
          <a
            className="brand"
            href="#haut"
            onClick={() => setOpen(false)}
          >
            <Mark />
            <span id={titleId}>{site.brand}</span>
          </a>
          <button
            ref={closeRef}
            type="button"
            className="menu-btn liquid-glass"
            onClick={() => {
              setOpen(false);
              toggleRef.current?.focus();
            }}
          >
            <span className="sr-only">Fermer le menu</span>
            <CloseIcon />
          </button>
        </div>
        <nav aria-label="Menu">
          {NAV.map((item) => (
            <a key={item.id} href={item.href} aria-current={active === item.id ? "true" : undefined} onClick={() => setOpen(false)}>
              {item.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)}>
            Contact
          </a>
        </nav>
        <div className="menu-sheet-foot">
          <a className="btn btn-solid btn-lg btn-block" href={`tel:${site.phoneTel}`}>
            Appeler · {site.phoneDisplay}
          </a>
          <a className="btn btn-glass liquid-glass btn-lg btn-block" href="#contact" onClick={() => setOpen(false)}>
            Réserver sur WhatsApp
          </a>
        </div>
      </div>
    </>
  );
}
