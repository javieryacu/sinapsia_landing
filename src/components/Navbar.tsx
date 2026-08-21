"use client";

import React, { useState, useEffect } from "react";
import Logo from "./Logo";
import { List, X } from "@phosphor-icons/react";

interface NavbarProps {
  onOpenDiagnostic: () => void;
}

export default function Navbar({ onOpenDiagnostic }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "¿Tu empresa?", href: "#problema" },
    { label: "Metodología", href: "#metodologia" },
    { label: "Criterio", href: "#criterio" },
    { label: "Servicios", href: "#servicios" },
    { label: "Visión", href: "#vision" },
    { label: "Preguntas frecuentes", href: "#faq" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-xs py-3.5"
          : "bg-white py-4 sm:py-5 border-b border-gray-100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a href="#" className="group">
          <Logo variant="header" />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-gray-700 hover:text-gray-950 transition-colors font-['Hanken_Grotesk',sans-serif]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Button */}
        <div className="hidden sm:flex items-center">
          <button
            onClick={onOpenDiagnostic}
            className="px-5 py-2.5 bg-[#f4b400] hover:bg-[#e0a400] text-gray-950 text-sm font-bold rounded-md shadow-xs transition-colors cursor-pointer font-['Hanken_Grotesk',sans-serif]"
          >
            Solicitar diagnóstico
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={onOpenDiagnostic}
            className="px-3.5 py-1.5 bg-[#f4b400] text-gray-950 text-xs font-bold rounded-md sm:hidden"
          >
            Diagnóstico
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-gray-800 hover:bg-gray-100 rounded-md transition"
            aria-label="Abrir menú"
          >
            {mobileMenuOpen ? <X weight="bold" className="w-6 h-6" /> : <List weight="bold" className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-gray-200 shadow-lg px-4 py-6 space-y-4 animate-in slide-in-from-top-2 duration-150">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-semibold text-gray-800 hover:text-[#f4b400] py-2 border-b border-gray-100 transition font-['Hanken_Grotesk',sans-serif]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDiagnostic();
              }}
              className="w-full py-3 bg-[#f4b400] text-gray-950 text-sm font-bold rounded-md shadow-sm"
            >
              Solicitar diagnóstico sin costo
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
