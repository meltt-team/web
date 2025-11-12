"use client";

// React-related imports
import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary";
}

function Button({
  children,
  onClick,
  disabled,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  const variantClasses = {
    primary: "bg-primary text-primary-foreground hover:bg-primary/90 text-base md:text-lg",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 text-base md:text-lg",
  };

  return (
    <button
      className={`cursor-pointer flex h-14 md:h-16 w-full items-center justify-center gap-2 rounded-full font-inter font-bold px-5 transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${variantClasses[variant]} ${className}`}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
