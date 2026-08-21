"use client";

import React from "react";
import Logo from "./Logo";
import { ArrowUp } from "@phosphor-icons/react";

interface FooterProps {
  onOpenDiagnostic: () => void;
}

export default function Footer({ onOpenDiagnostic }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-white border-t border-gray-200 pt-16 pb-12 text-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-gray-200">
          
          {/* Brand Logo & Vehicle graphic */}
          <div className="md:col-span-8 space-y-4">
            <div className="p-6 sm:p-8 bg-[#f9fafb] border border-gray-200 rounded-md max-w-md">
              <Logo variant="full" showContact={true} />
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-900 font-['Hanken_Grotesk',sans-serif]">
              Navegación
            </h4>
            <ul className="space-y-2.5 text-sm font-medium text-gray-600">
              <li>
                <a href="#problema" className="hover:text-gray-950 transition-colors">
                  ¿Tu empresa podría funcionar mejor?
                </a>
              </li>
              <li>
                <a href="#metodologia" className="hover:text-gray-950 transition-colors">
                  Primero entendemos tu empresa
                </a>
              </li>
              <li>
                <a href="#criterio" className="hover:text-gray-950 transition-colors">
                  No todo problema necesita un sistema nuevo
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-gray-950 transition-colors">
                  ¿Qué podemos hacer por tu empresa?
                </a>
              </li>
              <li>
                <a href="#vision" className="hover:text-gray-950 transition-colors">
                  Una sola visión para toda tu tecnología
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-gray-950 transition-colors">
                  Preguntas frecuentes
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <div>
            © {new Date().getFullYear()} <strong className="text-gray-900 font-['Hanken_Grotesk',sans-serif]">SINAPSIA</strong>. Todos los derechos reservados.
          </div>

          <div className="flex items-center gap-4">
            <span>Software · IA · Automatización</span>
            <button
              onClick={scrollToTop}
              className="flex items-center justify-center p-2 rounded-md bg-[#f9fafb] border border-gray-200 hover:bg-gray-100 text-gray-800 transition cursor-pointer"
              aria-label="Volver arriba"
            >
              <ArrowUp weight="bold" className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
