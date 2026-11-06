import { useEffect, useRef, type RefObject } from "react";

/** Lie un rayon lumineux à la progression du scroll via `--beam-p` (0 → 1). */
export function useScrollBeam(ref: RefObject<HTMLElement | null>) {
  const frame = useRef(0);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = (progress: number) => {
      node.style.setProperty("--beam-p", progress.toFixed(4));
    };

    if (reduce.matches) {
      apply(0.4);
      return undefined;
    }

    const update = () => {
      frame.current = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const progress = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
      apply(progress);
    };
    const onScroll = () => {
      if (frame.current) return;
      frame.current = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    const onReduce = () => {
      if (reduce.matches) apply(0.4);
      else update();
    };
    reduce.addEventListener("change", onReduce);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      reduce.removeEventListener("change", onReduce);
      if (frame.current) window.cancelAnimationFrame(frame.current);
    };
  }, [ref]);
}
