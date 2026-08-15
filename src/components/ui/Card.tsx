import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface CardProps {
  children: ReactNode;
  className?: string;
  hoverable?: boolean;
}

export default function Card({
  children,
  className,
  hoverable = false,
}: CardProps) {
  return (
    <div
      className={cn(
        "bg-white rounded-lg shadow-md overflow-hidden",
        hoverable && "hover:shadow-lg transition-shadow",
        className
      )}
    >
      {children}
    </div>
  );
}
