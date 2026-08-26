import type { ReactNode } from "react";
import { schedule } from "@/data/schedule";

export const dynamicParams = false;

export function generateStaticParams() {
  return schedule.map(({ day }) => ({ hari: String(day) }));
}

export default function EventDayLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return children;
}
