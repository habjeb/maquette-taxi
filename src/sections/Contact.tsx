import { useEffect, useState, type FormEvent, type ReactNode } from "react";
import { SectionHead } from "../components/SectionHead";
import { WhatsAppIcon } from "../components/icons";
import { buildReservationMessage, site, whatsappUrl } from "../lib/site";

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
          <a href={url} target="_blank" rel="noopener noreferrer">
            Ouvrir WhatsApp
          </a>
          .
        </>
      ),
    });
  }

  return (
    <section className="block" id="contact">
      <div className="container">
        <SectionHead
          kicker="05 — Contact"
          title={
            <>
              Réserver une <em>course</em>
            </>
          }
          intro="Appelez ou écrivez sur WhatsApp. Un message avec le départ, l’arrivée et l’heure suffit."
        />
        <div className="contact-grid">
          <div data-reveal>
            <ol className="steps">
              {STEPS.map(([title, text], index) => (
                <li key={title}>
                  <span className="signal-n">0{index + 1}</span>
                  <div>
                    <strong>{title}</strong>
                    <p>{text}</p>
                  </div>
                </li>
              ))}
            </ol>
            <a className="phone-block" href={`tel:${site.phoneTel}`}>
              <span className="label">Téléphone</span>
              <strong>{site.phoneDisplay}</strong>
            </a>
            <div className="contact-actions">
              <a className="btn btn-solid btn-lg" href={`tel:${site.phoneTel}`}>
                Appeler
              </a>
              <a className="btn btn-glass liquid-glass btn-lg" href={whatsappUrl()} target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon />
                Écrire sur WhatsApp
              </a>
            </div>
          </div>

          <form
            id="reservation"
            className="form-card reservation liquid-glass liquid-glass--strong"
            data-reveal
            onSubmit={onSubmit}
            onInput={onInput}
            noValidate
          >
            <h3>Préparer un message</h3>
            <Field id="nom" label="Nom" maxLength={80} autoComplete="name" placeholder="Votre nom" />
            <div className="form-row">
              <Field id="depart" label="Départ" maxLength={120} autoComplete="off" placeholder="Adresse ou lieu" />
              <Field id="arrivee" label="Arrivée" maxLength={120} autoComplete="off" placeholder="Adresse ou lieu" />
            </div>
            <div className="form-row">
              <Field id="date" label="Date" type="date" />
              <Field id="heure" label="Heure" type="time" />
            </div>
            <div className="field">
              <label htmlFor="note">
                Précision <span style={{ color: "var(--ink-54)" }}>(facultatif)</span>
              </label>
              <textarea
                id="note"
                name="note"
                maxLength={400}
                placeholder="Bagages, siège enfant, numéro de vol…"
                className="input"
              />
            </div>
            <button className="btn btn-solid btn-lg btn-block" type="submit">
              Préparer le message WhatsApp
            </button>
            <p className={`form-status${status?.error ? " is-error" : ""}`} role="status" aria-live="polite">
              {status?.content}
            </p>
            <p className="form-note">Le bouton ouvre WhatsApp avec ces informations. Aucun message n’est enregistré sur un site.</p>
          </form>
        </div>
      </div>
    </section>
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
    <div className="field">
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        name={id}
        type={type}
        required
        maxLength={maxLength}
        autoComplete={autoComplete}
        placeholder={placeholder}
        className="input"
      />
    </div>
  );
}
