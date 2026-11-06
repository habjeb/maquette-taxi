/** Fichier de `public/`, préfixé par la base Vite (`/maquette-taxi/` sur GitHub Pages). */
export function publicAsset(path: string) {
  const normalized = path.replace(/^\//, "");
  return `${import.meta.env.BASE_URL}${normalized}`;
}

/** Nom, téléphone et WhatsApp restent des placeholders. La ville est Lyon. */
export const site = {
  brand: "Taxi Pro",
  driver: "Votre chauffeur",
  city: "Lyon",
  phoneDisplay: "06 00 00 00 00",
  phoneTel: "+33600000000",
  whatsapp: "33600000000",
} as const;

export const defaultBookingText = "Bonjour, je souhaite réserver un taxi conventionné à Lyon.";

export function whatsappUrl(text?: string) {
  const base = `https://wa.me/${site.whatsapp}`;
  if (!text) return base;
  return `${base}?text=${encodeURIComponent(text)}`;
}

export function buildReservationMessage(data: FormData) {
  const dateValue = String(data.get("date") || "");
  let dateLabel = dateValue;
  if (/^\d{4}-\d{2}-\d{2}$/.test(dateValue)) {
    const [year, month, day] = dateValue.split("-");
    dateLabel = `${day}/${month}/${year}`;
  }

  const lines = [
    defaultBookingText,
    `Nom : ${String(data.get("nom") || "").trim()}`,
    `Départ : ${String(data.get("depart") || "").trim()}`,
    `Arrivée : ${String(data.get("arrivee") || "").trim()}`,
    `Date : ${dateLabel}`,
    `Heure : ${String(data.get("heure") || "").trim()}`,
  ];
  const note = String(data.get("note") || "").trim();
  if (note) lines.push(`Précision : ${note}`);
  return lines.join("\n");
}
