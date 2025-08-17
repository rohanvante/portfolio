import React from "react";

export default function Footer() {
  return (
    <footer className="py-6 bg-gray-900 text-gray-400 text-sm text-center">
      © {new Date().getFullYear()} Rohan Vante · Built with ❤️ using React & Tailwind
    </footer>
  );
}
