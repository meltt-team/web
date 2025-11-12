"use client";

// React-related imports
import { InputHTMLAttributes, ReactNode } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  icon?: ReactNode;
}

function Input({ error, icon, className = "", ...props }: InputProps) {
  return (
    <div className="w-full">
      <div className="relative w-full">
        <input
          className={`w-full bg-transparent border ${
            error ? "border-error" : "border-border"
          } rounded-full text-foreground text-base px-4 py-3 ${
            icon ? "pr-12" : ""
          } outline-none focus:border-primary/60 transition-colors placeholder:text-muted-foreground ${className}`}
          {...props}
        />
        {icon && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center bg-muted/50">
            {icon}
          </div>
        )}
      </div>
      {error && <p className="mt-2 text-sm text-error">{error}</p>}
    </div>
  );
}

export default Input;

