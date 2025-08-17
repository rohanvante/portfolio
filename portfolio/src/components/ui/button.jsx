import React from "react";

export function Button({ children, variant = "default", size = "md", className = "", ...props }) {
  const base = "inline-flex items-center justify-center font-medium rounded-lg transition";
  const variants = {
    default: "bg-primary text-white hover:bg-primary/90",
    outline: "border border-gray-300 hover:bg-gray-50",
    ghost: "hover:bg-gray-100",
    secondary: "bg-gray-100 hover:bg-gray-200 text-gray-900"
  };
  const sizes = {
    sm: "px-3 py-1 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg"
  };

  return (
    <button
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
