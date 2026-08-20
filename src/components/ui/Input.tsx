import type { InputHTMLAttributes } from "react";

export function Input({ className = "", ...props }: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={`w-full rounded-md border border-border bg-white px-3 py-2 text-sm text-text-primary outline-none transition placeholder:text-text-secondary focus:border-primary ${className}`}
      {...props}
    />
  );
}
