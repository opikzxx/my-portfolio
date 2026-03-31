import { cn } from "@/lib/utils";
import { HTMLAttributes, forwardRef } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "hover";
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, children, variant = "default", ...props }, ref) => {
    const variants = {
      default: "border border-[#383838] bg-[#2a2a2b]",
      hover:
        "border border-[#383838] bg-[#2a2a2b] hover:border-[#f0b429]/30 transition-colors",
    };

    return (
      <div
        ref={ref}
        className={cn("rounded-2xl", variants[variant], className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";
