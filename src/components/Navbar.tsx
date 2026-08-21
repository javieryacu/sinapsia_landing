"use client";

import React, { useState, useEffect } from "react";
import Logo from "./Logo";
import { MessageCircle, Menu, X, ArrowRight, Sparkles } from "lucide-react";

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
    { label: "Preguntas Frecuentes", href: "#faq" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs py-3"
          : "bg-white/80 backdrop-blur-xs py-4 sm:py-5 border-b border-slate-100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="group transition-transform active:scale-98">
          <Logo variant="header" />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs font-bold text-slate-700 hover:text-[#E5A918] transition-colors uppercase tracking-wider"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="https://wa.me/5493794552724?text=Hola%20Sinapsia,%20quisiera%20hacer%20una%20consulta"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-bold text-slate-800 hover:text-emerald-600 hover:bg-slate-50 rounded-xl transition"
            title="Llamar o escribir al 3794 - 552724"
          >
            <MessageCircle className="w-4 h-4 text-emerald-600" />
            <span>3794 - 552724</span>
          </a>

          <button
            onClick={onOpenDiagnostic}
            className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#E5A918] hover:bg-[#d4990d] text-slate-950 text-xs font-extrabold rounded-xl shadow-xs hover:shadow-md transition-all transform hover:-translate-y-0.5 cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Solicitar diagnóstico</span>
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={onOpenDiagnostic}
            className="px-3 py-1.5 bg-[#E5A918] text-slate-950 text-xs font-bold rounded-lg shadow-xs sm:hidden"
          >
            Diagnóstico
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-700 hover:text-slate-950 hover:bg-slate-100 rounded-lg transition"
            aria-label="Abrir menú"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 shadow-xl px-4 py-6 space-y-4 animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-bold text-slate-800 hover:text-[#E5A918] py-1.5 border-b border-slate-50 transition"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="pt-2 space-y-2.5">
            <a
              href="https://wa.me/5493794552724?text=Hola%20Sinapsia,%20quisiera%20hacer%20una%20consulta"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 py-3 bg-slate-100 text-slate-900 text-sm font-bold rounded-xl border border-slate-200"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600" />
              <span>WhatsApp: 3794 - 552724</span>
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDiagnostic();
              }}
              className="w-full inline-flex items-center justify-center gap-2 py-3 bg-[#E5A918] text-slate-950 text-sm font-extrabold rounded-xl shadow-md"
            >
              <Sparkles className="w-4 h-4" />
              <span>Solicitar diagnóstico sin costo</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
