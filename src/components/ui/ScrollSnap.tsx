// src/components/ui/ScrollSnap.tsx

import { ReactNode } from "react";

export function ScrollSnapContainer({ children }: { children: ReactNode }) {
  return <div className="scroll-snap-container">{children}</div>;
}

export function ScrollSnapSection({ children }: { children: ReactNode }) {
  return <section className="scroll-snap-section">{children}</section>;
}