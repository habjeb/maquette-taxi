import { useEffect, useRef, type RefObject } from "react";

/**
 * Déplace le faisceau en écrivant `transform` sur l’élément lui-même.
 * Une variable CSS héritée, lue seulement dans `transform`, ne se repeint pas dans WebKit.
 */
export function useScrollBeam(beamRef: RefObject<HTMLElement | null>) {
  const frame = useRef(0);
  const listening = useRef(false);

  useEffect(() => {
    const beam = beamRef.current;
    if (!beam) return undefined;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");

    const place = (progress: number, frozen: boolean) => {
      const p = frozen ? 0.35 : Math.min(1, Math.max(0, progress));
      beam.style.setProperty("--beam-p", p.toFixed(4));
      if (frozen) {
        beam.style.transform = "translate3d(12vw, 4vh, 0) rotate(-18deg)";
        return;
      }
      const width = window.innerWidth;
      const height = window.innerHeight;
      const x = (-0.46 + p * 1.05) * width;
      const y = (-0.08 + p * 0.2) * height;
      const angle = -28 + p * 20;
      beam.style.transform = `translate3d(${x.toFixed(1)}px, ${y.toFixed(1)}px, 0) rotate(${angle.toFixed(2)}deg)`;
    };

    const readProgress = () => {
      const scroller = document.scrollingElement ?? document.documentElement;
      const max = scroller.scrollHeight - scroller.clientHeight;
      if (max <= 0) return 0;
      return scroller.scrollTop / max;
    };

    const update = () => {
      frame.current = 0;
      place(readProgress(), false);
    };

    const onScroll = () => {
      if (frame.current) return;
      frame.current = window.requestAnimationFrame(update);
    };

    const start = () => {
      if (listening.current) return;
      listening.current = true;
      update();
      window.addEventListener("scroll", onScroll, { passive: true, capture: true });
      window.addEventListener("resize", onScroll);
    };

    const stop = () => {
      if (!listening.current && frame.current === 0) return;
      listening.current = false;
      window.removeEventListener("scroll", onScroll, { capture: true });
      window.removeEventListener("resize", onScroll);
      if (frame.current) {
        window.cancelAnimationFrame(frame.current);
        frame.current = 0;
      }
    };

    const sync = () => {
      if (reduce.matches) {
        stop();
        place(0.35, true);
        return;
      }
      start();
    };

    sync();
    reduce.addEventListener("change", sync);
    return () => {
      reduce.removeEventListener("change", sync);
      stop();
    };
  }, [beamRef]);
}
