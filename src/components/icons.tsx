import type { ReactNode } from "react";

type IconProps = { className?: string };

function Svg({ className = "icon", children }: IconProps & { children: ReactNode }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      {children}
    </svg>
  );
}

export function Mark({ className = "brand-mark" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="8.2" fill="none" stroke="currentColor" strokeWidth="1.3" />
      <circle cx="12" cy="12" r="2.7" fill="none" stroke="#c6a36a" strokeWidth="1.25" />
    </svg>
  );
}

export function PhoneIcon({ className = "icon" }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M8 3.8h2.4l1 2.8-1.6.9a11 11 0 0 0 5.7 5.7l.9-1.6 2.8 1V16a1.8 1.8 0 0 1-2 1.8A14 14 0 0 1 6.2 5.8 1.8 1.8 0 0 1 8 3.8z" />
    </Svg>
  );
}

export function WhatsAppIcon({ className = "icon" }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M7.2 19.2 5.2 21.4V8.2A2.7 2.7 0 0 1 7.9 5.5h8.2A2.7 2.7 0 0 1 18.8 8.2v6.6a2.7 2.7 0 0 1-2.7 2.7H8.4z" />
    </Svg>
  );
}

export function ArrowIcon({ className = "icon" }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </Svg>
  );
}

export function MenuIcon({ className = "icon" }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M4 7h16" />
      <path d="M4 12h16" />
      <path d="M4 17h16" />
    </Svg>
  );
}

export function CloseIcon({ className = "icon" }: IconProps) {
  return (
    <Svg className={className}>
      <path d="m6 6 12 12" />
      <path d="M18 6 6 18" />
    </Svg>
  );
}

export function ClockIcon({ className = "icon" }: IconProps) {
  return (
    <Svg className={className}>
      <circle cx="12" cy="12" r="8" />
      <path d="M12 8v5l3 2" />
    </Svg>
  );
}

export function PlaneIcon({ className = "icon" }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M3.5 12.5 21 7l-4.2 10.2-4.3-2.2L9 18l.2-4.2z" />
    </Svg>
  );
}

export function TrainIcon({ className = "icon" }: IconProps) {
  return (
    <Svg className={className}>
      <rect x="6" y="3.5" width="12" height="12.5" rx="3" />
      <path d="M6 11h12M8.5 19.5 10.5 16h3l2 3.5" />
    </Svg>
  );
}

export function RouteIcon({ className = "icon" }: IconProps) {
  return (
    <Svg className={className}>
      <circle cx="6.5" cy="6.5" r="2" />
      <circle cx="17.5" cy="17.5" r="2" />
      <path d="M8.3 8c2.6.6 4 2.2 4.6 4 .6 1.8 2 3.1 4.2 3.5" />
    </Svg>
  );
}

export function PinIcon({ className = "icon" }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M12 21s6-5.1 6-10a6 6 0 0 0-12 0c0 4.9 6 10 6 10z" />
      <circle cx="12" cy="11" r="1.6" />
    </Svg>
  );
}

export function TariffIcon({ className = "icon" }: IconProps) {
  return (
    <Svg className={className}>
      <rect x="5" y="6" width="14" height="12" rx="2" />
      <path d="M8.5 10.5h7M8.5 14h4" />
    </Svg>
  );
}

export function MoonIcon({ className = "icon" }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M15.2 4.4A7 7 0 1 0 19.6 14 5.4 5.4 0 0 1 15.2 4.4z" />
    </Svg>
  );
}
