import { useRef } from "react";
import { useScrollBeam } from "../hooks/useScrollBeam";
import { publicAsset } from "../lib/site";

export function Scene() {
  const beamRef = useRef<HTMLDivElement>(null);
  useScrollBeam(beamRef);

  return (
    <div className="scene" aria-hidden="true">
      <div className="scene-aurora" />
      <div className="scene-beam" ref={beamRef} />
      <div
        className="scene-grain"
        style={{ backgroundImage: `url("${publicAsset("assets/grain.png")}")` }}
      />
    </div>
  );
}
