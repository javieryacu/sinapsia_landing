"use client";

import React from "react";
import Logo from "./Logo";
import { MessageCircle, Globe, Mail, ArrowUp } from "lucide-react";

interface FooterProps {
  onOpenDiagnostic: () => void;
}

export default function Footer({ onOpenDiagnostic }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-white border-t border-slate-200 pt-16 pb-12 text-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-200">
          {/* Brand Vehicle Mockup Replica */}
          <div className="md:col-span-6 space-y-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200/90 shadow-xs max-w-md">
              <Logo variant="full" showContact={true} />
            </div>
            <p className="text-xs text-slate-500 max-w-sm leading-relaxed">
              Optimizamos sistemas existentes, conectamos herramientas, automatizamos procesos,
              incorporamos inteligencia artificial y desarrollamos soluciones a medida.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-slate-950 font-['Outfit',sans-serif]">
              Navegación
            </h4>
            <ul className="space-y-2 text-xs font-semibold text-slate-600">
              <li>
                <a href="#problema" className="hover:text-[#E5A918] transition-colors">
                  ¿Tu empresa podría funcionar mejor?
                </a>
              </li>
              <li>
                <a href="#metodologia" className="hover:text-[#E5A918] transition-colors">
                  Metodología (01 Relevamos a 05 Evolucionamos)
                </a>
              </li>
              <li>
                <a href="#criterio" className="hover:text-[#E5A918] transition-colors">
                  Criterio y Pragmatismo
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-[#E5A918] transition-colors">
                  Servicios y Capacidades
                </a>
              </li>
              <li>
                <a href="#vision" className="hover:text-[#E5A918] transition-colors">
                  Una sola visión para tu tecnología
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#E5A918] transition-colors">
                  Preguntas frecuentes
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Direct Box */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-black uppercase tracking-wider text-slate-950 font-['Outfit',sans-serif]">
              Contacto Directo
            </h4>
            <div className="space-y-2.5 text-xs">
              <a
                href="https://wa.me/5493794552724?text=Hola%20Sinapsia,%20quisiera%20solicitar%20un%20diagn%C3%B3stico"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-800 hover:text-[#E5A918] font-bold transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>+54 9 3794-552724</span>
              </a>

              <a
                href="https://sinapsia.com.ar"
                className="flex items-center gap-2 text-slate-800 hover:text-[#E5A918] font-bold transition-colors"
              >
                <Globe className="w-4 h-4 text-slate-700" />
                <span>sinapsia.com.ar</span>
              </a>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenDiagnostic}
                className="w-full px-4 py-2.5 bg-[#E5A918] hover:bg-[#d4990d] text-slate-950 font-extrabold text-xs rounded-xl shadow-xs transition cursor-pointer"
              >
                Solicitar diagnóstico sin costo
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} <strong>SINAPSIA</strong>. Todos los derechos reservados.
          </div>

          <div className="flex items-center gap-4">
            <span>Software · IA · Automatización</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 transition"
              aria-label="Volver arriba"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
