import React from "react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b shadow-sm">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <a href="#home" className="font-bold text-lg">RV.</a>
        <nav className="hidden md:flex gap-6 text-sm">
          {["About","Skills","Experience","Projects","Education","Contact"].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-primary">
              {item}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
