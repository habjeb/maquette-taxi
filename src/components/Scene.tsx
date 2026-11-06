import { useEffect, useRef } from "react";
import { publicAsset } from "../lib/site";
import { mountGodRays } from "../webgl/mountGodRays";

export function Scene() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;
    return mountGodRays(canvas);
  }, []);

  return (
    <div className="scene" aria-hidden="true">
      <canvas ref={canvasRef} className="scene-canvas" />
      <div className="scene-grain" style={{ backgroundImage: `url("${publicAsset("assets/grain.png")}")` }} />
    </div>
  );
}
