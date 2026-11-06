import { useEffect, useRef } from "react";
import { publicAsset } from "../lib/site";
import { mountGodRays } from "../webgl/mountGodRays";

export function Scene() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const root = canvas?.parentElement;
    if (!canvas || !root) return undefined;
    try {
      return mountGodRays(canvas);
    } catch (error) {
      root.classList.add("scene--fallback");
      console.error(error);
      return undefined;
    }
  }, []);

  return (
    <div className="scene" aria-hidden="true">
      <canvas ref={canvasRef} className="scene-canvas" />
      <div className="scene-grain" style={{ backgroundImage: `url("${publicAsset("assets/grain.png")}")` }} />
    </div>
  );
}
