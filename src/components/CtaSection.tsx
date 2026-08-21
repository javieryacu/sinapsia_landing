"use client";

import React from "react";
import { ArrowRight, MessageCircle, Sparkles, CheckCircle2, ShieldCheck } from "lucide-react";
import Logo from "./Logo";

interface CtaSectionProps {
  onOpenDiagnostic: () => void;
}

export default function CtaSection({ onOpenDiagnostic }: CtaSectionProps) {
  return (
    <section className="py-20 sm:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-slate-950 text-white p-8 sm:p-14 lg:p-16 shadow-2xl overflow-hidden border border-slate-800">
          {/* Subtle golden background mesh */}
          <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-[#E5A918]/15 blur-3xl pointer-events-none rounded-full" />
          <div className="absolute -left-20 -top-20 w-80 h-80 bg-slate-800/40 blur-3xl pointer-events-none rounded-full" />

          <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 border border-slate-700 text-xs font-bold uppercase tracking-wider text-[#E5A918] shadow-inner">
              <Sparkles className="w-4 h-4" />
              <span>Primer Paso Ágil & Efectivo</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white font-['Outfit',sans-serif] leading-tight">
              Empezá por descubrir qué se puede mejorar.
            </h2>

            <p className="text-slate-300 text-base sm:text-lg">
              No necesitás saber qué sistema, automatización o tecnología necesitás.
            </p>

            <div className="p-4 sm:p-5 rounded-2xl bg-slate-900/90 border border-slate-800 text-[#E5A918] font-bold text-base sm:text-xl font-['Outfit',sans-serif]">
              “Nosotros analizamos tu situación y te mostramos dónde existe una oportunidad concreta de mejora.”
            </div>

            <p className="text-slate-400 text-sm sm:text-base">
              Solicitá un diagnóstico inicial sin costo y sin compromiso.
            </p>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={onOpenDiagnostic}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-[#E5A918] hover:bg-[#d4990d] text-slate-950 font-black text-base rounded-xl shadow-lg hover:shadow-2xl transition transform hover:scale-105 active:scale-95 cursor-pointer"
              >
                <span>Solicitar diagnóstico sin costo</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <a
                href="https://wa.me/5493794552724?text=Hola%20Sinapsia!%20Quisiera%20solicitar%20un%20diagn%C3%B3stico%20sin%20costo%20para%20mi%20empresa."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 bg-slate-900 hover:bg-slate-800 text-white font-bold text-base rounded-xl border border-slate-700 transition"
              >
                <MessageCircle className="w-5 h-5 text-emerald-400" />
                <span>Hablar al 3794 - 552724</span>
              </a>
            </div>

            <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 font-medium">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#E5A918]" /> 100% Gratuito
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#E5A918]" /> Sin permanencia
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#E5A918]" /> Respuesta ágil
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
