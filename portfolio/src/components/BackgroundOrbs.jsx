import React from "react";

export default function BackgroundOrbs() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute h-64 w-64 bg-primary/20 rounded-full blur-3xl top-10 left-10 animate-pulse"></div>
      <div className="absolute h-72 w-72 bg-primary/30 rounded-full blur-3xl bottom-10 right-20 animate-pulse"></div>
    </div>
  );
}
