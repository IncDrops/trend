import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type GlitchTitleProps = {
  children: ReactNode;
  className?: string;
};

export default function GlitchTitle({ children, className }: GlitchTitleProps) {
  const text = typeof children === 'string' ? children : '';
  return (
    <h1 className={cn("glitch-title", className)} data-text={text}>
      {children}
    </h1>
  );
}
