import React from "react";

export function Badge({ children, variant = "default", className = "" }) {
  const base = "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium";
  const variants = {
    default: "bg-primary text-white",
    secondary: "bg-gray-100 text-gray-800",
    outline: "border border-gray-300 text-gray-800"
  };

  return (
    <span className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
}
