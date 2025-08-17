import React from "react";

export default function ParallaxImage({ src, alt }) {
  return (
    <div className="absolute inset-0 -z-20 opacity-10">
      <img src={src} alt={alt} className="h-full w-full object-cover" />
    </div>
  );
}
