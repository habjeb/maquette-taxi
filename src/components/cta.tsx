import type { ReactNode } from "react";
import StarBorder from "./StarBorder";
import { PhoneIcon, WhatsAppIcon } from "./icons";
import { defaultBookingText, site, whatsappUrl } from "../lib/site";

export function CallButton({ className = "" }: { className?: string }) {
  return (
    <StarBorder
      as="a"
      href={`tel:${site.phoneTel}`}
      color="#fff8dc"
      trailColor="#c89600"
      backgroundColor="#f5c400"
      textColor="#1a1408"
      borderColor="rgba(26, 20, 8, 0.2)"
      radius={16}
      thickness={1.4}
      glow={0.8}
      stars={1}
      duration={7}
      hover="brighten"
      sparkle={false}
      theme="light"
      className={`min-h-16 w-full justify-start gap-3 px-[18px] font-bold sm:w-auto sm:min-w-[220px] ${className}`}
    >
      <PhoneIcon />
      <span className="text-left leading-tight">
        <span className="block text-[0.72rem] font-bold tracking-[0.12em] uppercase">Appeler</span>
        <span className="block text-xl font-bold tracking-tight whitespace-nowrap tabular-nums">{site.phoneDisplay}</span>
      </span>
    </StarBorder>
  );
}

export function WhatsAppButton({
  children,
  text = defaultBookingText,
  className = "",
}: {
  children: ReactNode;
  text?: string;
  className?: string;
}) {
  return (
    <a
      className={`inline-flex min-h-16 w-full items-center justify-start gap-3 rounded-2xl border border-amber/70 px-[18px] font-bold text-cream no-underline hover:bg-amber/10 sm:w-auto sm:min-w-[220px] ${className}`}
      href={whatsappUrl(text)}
      target="_blank"
      rel="noopener noreferrer"
    >
      <WhatsAppIcon className="size-[22px] shrink-0 text-amber" />
      <span>{children}</span>
    </a>
  );
}
