"use client";

// React-related imports
import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string;
}

function Input({ error, className = "", ...props }: InputProps) {
  return (
    <div className="w-full">
      <input
        className={`w-full bg-transparent border-0 border-b-2 ${
          error ? "border-red-500" : "border-black"
        } text-black text-lg px-2 py-3 outline-none focus:border-black/60 transition-colors placeholder:text-black/40 ${className}`}
        {...props}
      />
      {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
    </div>
  );
}

export default Input;

