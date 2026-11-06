import { useEffect, useRef, type RefObject } from "react";

/** Écrit le transform sur le faisceau lui-même, y compris si les animations système sont réduites. */
export function useScrollBeam(beamRef: RefObject<HTMLElement | null>) {
  const frame = useRef(0);

  useEffect(() => {
    const beam = beamRef.current;
    if (!beam) return undefined;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");

    const place = (progress: number) => {
      const p = Math.min(1, Math.max(0, progress));
      const reduced = reduce.matches;
      beam.style.setProperty("--beam-p", p.toFixed(4));
      beam.dataset.reduced = reduced ? "true" : "false";
      const width = window.innerWidth;
      const height = window.innerHeight;
      const span = reduced ? 0.42 : 0.86;
      const x = (p - 0.5) * width * span;
      const y = (p - 0.5) * height * (reduced ? 0.03 : 0.08);
      const angle = -15 + p * (reduced ? 3 : 8);
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
      place(readProgress());
    };

    const onScroll = () => {
      if (frame.current) return;
      frame.current = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true, capture: true });
    window.addEventListener("resize", onScroll);
    reduce.addEventListener("change", update);

    return () => {
      window.removeEventListener("scroll", onScroll, { capture: true });
      window.removeEventListener("resize", onScroll);
      reduce.removeEventListener("change", update);
      if (frame.current) window.cancelAnimationFrame(frame.current);
    };
  }, [beamRef]);
}
