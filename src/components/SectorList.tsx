import { useId } from "react";

export function SectorList({
  title,
  places,
  flow = false,
}: {
  title: string;
  places: readonly string[];
  flow?: boolean;
}) {
  const titleId = useId();
  return (
    <div className={flow ? "sector sector-flow" : "sector"}>
      <h4 id={titleId}>{title}</h4>
      <ul aria-labelledby={titleId}>
        {places.map((place) => (
          <li key={place}>{place}</li>
        ))}
      </ul>
    </div>
  );
}
