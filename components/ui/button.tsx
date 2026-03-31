import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      children,
      variant = "primary",
      size = "md",
      isLoading,
      disabled,
      icon,
      iconPosition = "left",
      ...props
    },
    ref
  ) => {
    const variants = {
      primary: "bg-[#f0b429] text-black hover:bg-[#e0a820]",
      secondary: "bg-[#2a2a2b] text-white hover:bg-[#3a3a3b]",
      outline:
        "border border-[#383838] text-[#888] hover:text-white hover:border-[#f0b429]",
    };

    const sizes = {
      sm: "px-3 py-1.5 text-xs",
      md: "px-6 py-3 text-sm",
      lg: "px-8 py-4 text-base",
    };

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={cn(
          "rounded-xl font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center gap-2",
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        {isLoading ? (
          "Loading..."
        ) : (
          <>
            {icon && iconPosition === "left" && icon}
            {children}
            {icon && iconPosition === "right" && icon}
          </>
        )}
      </button>
    );
  }
);

Button.displayName = "Button";
