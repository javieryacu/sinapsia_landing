"use client";

import React, { useState, useEffect } from "react";
import Logo from "./Logo";
import { List, X, ArrowRight, Lightning } from "@phosphor-icons/react";

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
    { label: "Preguntas", href: "#faq" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-[#f8f9fa]/95 backdrop-blur-md border-b border-gray-200/80 shadow-sm py-3"
          : "bg-[#f8f9fa]/80 backdrop-blur-sm py-4 sm:py-5 border-b border-gray-100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="group transition-transform active:scale-95">
          <Logo variant="header" />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[13px] font-bold text-[#09090b] hover:text-[#f4b400] transition-colors uppercase tracking-widest font-['Hanken_Grotesk',sans-serif]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onOpenDiagnostic}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#f4b400] hover:bg-[#d9a000] text-black text-[13px] font-bold rounded-sm shadow-sm hover:shadow transition-all font-['Hanken_Grotesk',sans-serif] uppercase tracking-wider cursor-pointer"
          >
            <Lightning weight="fill" className="w-3.5 h-3.5" />
            <span>Solicitar diagnóstico</span>
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={onOpenDiagnostic}
            className="px-4 py-2 bg-[#f4b400] text-black text-xs font-bold uppercase tracking-wider rounded-sm shadow-sm sm:hidden"
          >
            Diagnóstico
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-black hover:bg-gray-200 rounded-sm transition"
            aria-label="Abrir menú"
          >
            {mobileMenuOpen ? <X weight="bold" className="w-6 h-6" /> : <List weight="bold" className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#f8f9fa] border-b border-gray-200 shadow-xl px-4 py-6 space-y-4 animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-bold text-[#09090b] hover:text-[#f4b400] py-2 border-b border-gray-200 transition uppercase tracking-wider font-['Hanken_Grotesk',sans-serif]"
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
              className="w-full inline-flex items-center justify-center gap-2 py-3.5 bg-[#f4b400] text-black text-sm font-bold uppercase tracking-wider rounded-sm shadow-sm"
            >
              <Lightning weight="fill" className="w-4 h-4" />
              <span>Solicitar diagnóstico sin costo</span>
              <ArrowRight weight="bold" className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
