// src/components/ui/PillLink.tsx

import Link from "next/link";
import { ReactNode } from "react";

interface PillLinkProps {
  href: string;
  children: ReactNode;
  direction?: "left" | "right" | "none";
  variant?: "dark" | "light";
}

export default function PillLink({
  href,
  children,
  direction = "none",
  variant = "light",
}: PillLinkProps) {
  const variantStyles =
    variant === "dark"
      ? "bg-primary-dark text-neutral-light-bg hover:bg-primary-dark-alt"
      : "bg-neutral-light-bg text-primary-dark hover:bg-primary-light-alt";

  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-3 py-2 text-center font-sans text-xs font-semibold transition-colors sm:px-6 sm:py-3 sm:text-sm ${variantStyles}`}
    >
      {direction === "left" && <span>&larr;</span>}
      <span>{children}</span>
      {direction === "right" && <span>&rarr;</span>}
    </Link>
  );
}