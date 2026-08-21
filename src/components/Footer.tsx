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
    <footer className="bg-white border-t border-gray-200 pt-20 pb-12 text-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-gray-200">
          
          {/* Brand Logo & Info */}
          <div className="md:col-span-8 space-y-6">
            <div className="p-8 bg-[#f8f9fa] border border-gray-200 rounded-sm max-w-md">
              <Logo variant="full" showContact={true} />
            </div>
            <p className="text-sm text-gray-600 max-w-sm leading-relaxed">
              Optimizamos sistemas existentes, conectamos herramientas, automatizamos procesos,
              incorporamos inteligencia artificial y desarrollamos soluciones a medida.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-black uppercase tracking-widest text-[#09090b] font-['Hanken_Grotesk',sans-serif]">
              Navegación
            </h4>
            <ul className="space-y-3 text-sm font-medium text-gray-600">
              <li>
                <a href="#problema" className="hover:text-[#09090b] transition-colors">
                  ¿Tu empresa podría funcionar mejor?
                </a>
              </li>
              <li>
                <a href="#metodologia" className="hover:text-[#09090b] transition-colors">
                  Metodología
                </a>
              </li>
              <li>
                <a href="#criterio" className="hover:text-[#09090b] transition-colors">
                  Criterio y Pragmatismo
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-[#09090b] transition-colors">
                  Servicios y Capacidades
                </a>
              </li>
              <li>
                <a href="#vision" className="hover:text-[#09090b] transition-colors">
                  Visión para tu tecnología
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#09090b] transition-colors">
                  Preguntas frecuentes
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-sm text-gray-500">
          <div className="font-medium">
            © {new Date().getFullYear()} <strong className="text-[#09090b] font-['Hanken_Grotesk',sans-serif]">SINAPSIA</strong>. Todos los derechos reservados.
          </div>

          <div className="flex items-center gap-6">
            <span className="hidden sm:inline">Software · IA · Automatización</span>
            <button
              onClick={scrollToTop}
              className="flex items-center justify-center p-2 rounded-sm bg-[#f8f9fa] border border-gray-200 hover:border-gray-400 text-[#09090b] transition"
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
