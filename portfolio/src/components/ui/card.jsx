import React from "react";

export function Card({ children, className = "" }) {
  return (
    <div className={`rounded-xl border bg-white shadow-sm ${className}`}>
      {children}
    </div>
  );
}

export function CardHeader({ children, className = "" }) {
  return <div className={`px-4 py-2 border-b ${className}`}>{children}</div>;
}

export function CardTitle({ children, className = "" }) {
  return <h3 className={`font-semibold text-lg ${className}`}>{children}</h3>;
}

export function CardContent({ children, className = "" }) {
  return <div className={`px-4 py-3 ${className}`}>{children}</div>;
}
