import { useRef } from "react";
import { useScrollBeam } from "../hooks/useScrollBeam";
import { publicAsset } from "../lib/site";

export function Scene() {
  const ref = useRef<HTMLDivElement>(null);
  useScrollBeam(ref);

  return (
    <div className="scene" ref={ref} aria-hidden="true">
      <div className="scene-aurora" />
      <div className="scene-beam" />
      <div
        className="scene-grain"
        style={{ backgroundImage: `url("${publicAsset("assets/grain.png")}")` }}
      />
    </div>
  );
}
