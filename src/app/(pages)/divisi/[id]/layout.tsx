import type { ReactNode } from "react";
import { divisions } from "@/data/divisions";

export const dynamicParams = false;

export function generateStaticParams() {
  return divisions.map(({ id }) => ({ id }));
}

export default function DivisionDetailLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return children;
}
