import { useEffect, useState, type FormEvent, type ReactNode } from "react";
import AnimatedContent from "../components/AnimatedContent";
import { WhatsAppButton } from "../components/cta";
import { buildReservationMessage, site, whatsappUrl } from "../lib/site";
import { Section } from "./Section";

const STEPS = [
  ["Vous appelez ou vous écrivez", "Téléphone ou WhatsApp, comme vous préférez."],
  ["Je confirme l’heure et le tarif", "Le prix est dit avant le départ, pas à l’arrivée."],
  ["Je suis au point de rendez-vous", "Adresse, hall ou terminal\u202f: le lieu est noté."],
] as const;

export function Contact() {
  const [validated, setValidated] = useState(false);
  const [status, setStatus] = useState<{ error: boolean; content: ReactNode } | null>(null);

  useEffect(() => {
    const dateInput = document.querySelector<HTMLInputElement>("#date");
    if (!dateInput) return;
    const now = new Date();
    const local = new Date(now.getTime() - now.getTimezoneOffset() * 60000);
    dateInput.min = local.toISOString().slice(0, 10);
  }, []);

  function onInput(event: FormEvent<HTMLFormElement>) {
    if (!validated) return;
    const field = event.target;
    if (field instanceof HTMLInputElement || field instanceof HTMLTextAreaElement) {
      field.setAttribute("aria-invalid", String(!field.checkValidity()));
    }
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setValidated(true);
    form.querySelectorAll("input, textarea").forEach((field) => {
      if (field instanceof HTMLInputElement || field instanceof HTMLTextAreaElement) {
        if (!field.willValidate) return;
        field.setAttribute("aria-invalid", String(!field.checkValidity()));
      }
    });

    if (!form.checkValidity()) {
      setStatus({ error: true, content: "Indiquez le nom, le départ, l’arrivée, la date et l’heure." });
      const invalid = form.querySelector(":invalid");
      if (invalid instanceof HTMLElement) invalid.focus();
      return;
    }

    const url = whatsappUrl(buildReservationMessage(new FormData(form)));
    const popup = window.open(url, "_blank");
    if (popup) {
      popup.opener = null;
      setStatus({ error: false, content: "WhatsApp s’ouvre avec votre message. Il reste à l’envoyer." });
      return;
    }

    setStatus({
      error: false,
      content: (
        <>
          Le navigateur a bloqué la fenêtre.{" "}
          <a className="text-amber" href={url} target="_blank" rel="noopener noreferrer">
            Ouvrir WhatsApp
          </a>
          .
        </>
      ),
    });
  }

  return (
    <Section
      id="contact"
      kicker="05 — Contact"
      title="Réserver une course"
      intro="Appelez ou écrivez sur WhatsApp. Un message avec le départ, l’arrivée et l’heure suffit."
    >
      <AnimatedContent className="grid items-start gap-8 min-[900px]:grid-cols-[0.9fr_1.1fr] min-[900px]:gap-9" distance={24} duration={0.7}>
        <div>
          <ol className="mt-2 mb-6 grid list-none gap-3.5 p-0">
            {STEPS.map(([title, text], index) => (
              <li key={title} className="grid grid-cols-[auto_1fr] items-start gap-3">
                <span className="grid size-8 place-items-center rounded-full bg-amber font-bold text-on-amber">{index + 1}</span>
                <div>
                  <strong>{title}</strong>
                  <p className="mt-0.5 mb-0 text-[0.95rem] text-muted">{text}</p>
                </div>
              </li>
            ))}
          </ol>
          <a className="mb-3 flex flex-col text-inherit no-underline" href={`tel:${site.phoneTel}`}>
            <span className="text-sm text-muted">Téléphone</span>
            <strong className="text-[clamp(1.7rem,4vw,2.4rem)] leading-none font-semibold tracking-tight text-amber whitespace-nowrap tabular-nums">
              {site.phoneDisplay}
            </strong>
          </a>
          <WhatsAppButton className="sm:w-full">Écrire sur WhatsApp</WhatsAppButton>
        </div>

        <form id="reservation" className="reservation grid gap-3.5 rounded-3xl border border-white/8 bg-panel p-5" onSubmit={onSubmit} onInput={onInput} noValidate>
          <h3 className="m-0 text-[1.3rem] font-semibold tracking-tight">Préparer un message</h3>
          <Field id="nom" label="Nom" maxLength={80} autoComplete="name" placeholder="Votre nom" />
          <div className="grid gap-3.5 sm:grid-cols-2">
            <Field id="depart" label="Départ" maxLength={120} autoComplete="off" placeholder="Adresse ou lieu" />
            <Field id="arrivee" label="Arrivée" maxLength={120} autoComplete="off" placeholder="Adresse ou lieu" />
          </div>
          <div className="grid gap-3.5 sm:grid-cols-2">
            <Field id="date" label="Date" type="date" />
            <Field id="heure" label="Heure" type="time" />
          </div>
          <div className="grid gap-1.5">
            <label htmlFor="note">
              Précision <span className="text-muted">(facultatif)</span>
            </label>
            <textarea
              id="note"
              name="note"
              maxLength={400}
              placeholder="Bagages, siège enfant, numéro de vol…"
              className="min-h-[110px] w-full resize-y rounded-xl border border-white/15 bg-[#0e1014] px-3.5 py-3.5 text-cream caret-amber placeholder:text-[#b7b1a4]"
            />
          </div>
          <button className="inline-flex min-h-16 w-full items-center justify-center rounded-2xl bg-amber px-4 font-bold text-on-amber hover:bg-[#ffd84a]" type="submit">
            Préparer le message WhatsApp
          </button>
          <p
            id="form-status"
            className={`m-0 min-h-[1.4em] text-[0.95rem] ${status?.error ? "text-danger" : "text-copy"}`}
            role="status"
            aria-live="polite"
          >
            {status?.content}
          </p>
          <p className="m-0 text-sm text-muted">
            Le bouton ouvre WhatsApp avec ces informations. Aucun message n’est enregistré sur un site.
          </p>
        </form>
      </AnimatedContent>
    </Section>
  );
}

function Field({
  id,
  label,
  type = "text",
  maxLength,
  autoComplete,
  placeholder,
}: {
  id: string;
  label: string;
  type?: string;
  maxLength?: number;
  autoComplete?: string;
  placeholder?: string;
}) {
  return (
    <div className="grid gap-1.5">
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        name={id}
        type={type}
        required
        maxLength={maxLength}
        autoComplete={autoComplete}
        placeholder={placeholder}
        className="w-full rounded-xl border border-white/15 bg-[#0e1014] px-3.5 py-3.5 text-cream caret-amber placeholder:text-[#b7b1a4]"
      />
    </div>
  );
}
