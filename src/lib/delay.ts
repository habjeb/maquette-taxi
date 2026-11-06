import type { CSSProperties } from "react";

export function enter(ms: number): CSSProperties {
  return { "--ed": `${ms}ms` } as CSSProperties;
}

export function reveal(ms: number): CSSProperties {
  return { "--rd": `${ms}ms` } as CSSProperties;
}
