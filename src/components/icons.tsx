type IconProps = { className?: string };

export function PhoneIcon({ className = "size-[22px]" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M8 3.5h2.8L12 7l-1.8 1a12.5 12.5 0 0 0 5.8 5.8l1-1.8 3.5 1.2v2.8a2 2 0 0 1-2.2 2A14.5 14.5 0 0 1 6 6.7a2 2 0 0 1 2-3.2z" />
    </svg>
  );
}

export function WhatsAppIcon({ className = "size-[22px]" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M8 18.5 5.5 21.5V8.2A3.2 3.2 0 0 1 8.7 5h7.6A3.2 3.2 0 0 1 19.5 8.2v7.1a3.2 3.2 0 0 1-3.2 3.2H8z" />
    </svg>
  );
}

export function PlaneIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-[22px]" fill="currentColor" aria-hidden="true">
      <path d="M21.2 11.1 12.4 9V4.6a1.15 1.15 0 0 0-2.3 0V9L2.8 11.1v1.5l7.3-1.9v4.8l-2 1.2v1.2l3.1-.8 3.1.8v-1.2l-2-1.2v-4.8l7.9 2.1v-1.5z" />
    </svg>
  );
}

export function TrainIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-[22px]" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="6" y="3" width="12" height="13" rx="3" />
      <path d="M6 11h12M8 20l2-3h4l2 3" />
      <circle cx="9" cy="14.2" r="0.8" fill="currentColor" stroke="none" />
      <circle cx="15" cy="14.2" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function RouteIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-[22px]" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="6.5" cy="6.5" r="2.2" fill="currentColor" stroke="none" />
      <circle cx="17.5" cy="17.5" r="2.2" fill="currentColor" stroke="none" />
      <path d="M8.4 8.2c3 .6 4.4 2.4 5 4.4.6 2 2.2 3.4 4.2 3.8" />
    </svg>
  );
}

export function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-[22px]" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 21s6-5.2 6-10a6 6 0 0 0-12 0c0 4.8 6 10 6 10z" />
      <circle cx="12" cy="11" r="1.6" />
    </svg>
  );
}

export function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-[22px]" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M15 4.5A7 7 0 1 0 19.5 14 5.5 5.5 0 0 1 15 4.5z" />
    </svg>
  );
}

export function ClockIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-[22px]" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="8" />
      <path d="M12 8v5l3 2" />
    </svg>
  );
}
