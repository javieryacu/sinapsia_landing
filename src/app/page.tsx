"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import ProcessSection from "@/components/ProcessSection";
import PhilosophySection from "@/components/PhilosophySection";
import ServicesSection from "@/components/ServicesSection";
import VisionSection from "@/components/VisionSection";
import LifecycleSection from "@/components/LifecycleSection";
import FaqSection from "@/components/FaqSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";
import DiagnosticModal from "@/components/DiagnosticModal";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Home() {
  const [isDiagnosticOpen, setIsDiagnosticOpen] = useState(false);

  const handleOpenDiagnostic = () => setIsDiagnosticOpen(true);
  const handleCloseDiagnostic = () => setIsDiagnosticOpen(false);

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col selection:bg-amber-100 selection:text-amber-950 font-sans">
      {/* Top Navbar */}
      <Navbar onOpenDiagnostic={handleOpenDiagnostic} />

      {/* Main Content */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero onOpenDiagnostic={handleOpenDiagnostic} />

        {/* 2. ¿Tu empresa podría funcionar mejor? */}
        <ProblemSection onOpenDiagnostic={handleOpenDiagnostic} />

        {/* 3. Metodología (01 a 05) */}
        <ProcessSection onOpenDiagnostic={handleOpenDiagnostic} />

        {/* 4. Filosofía y Criterio */}
        <PhilosophySection onOpenDiagnostic={handleOpenDiagnostic} />

        {/* 5. ¿Qué podemos hacer por tu empresa? (5 Servicios) */}
        <ServicesSection onOpenDiagnostic={handleOpenDiagnostic} />

        {/* 6. Visión Integral (No reemplazamos... + Fórmula unificada) */}
        <VisionSection onOpenDiagnostic={handleOpenDiagnostic} />

        {/* 7. Acompañamiento Continuo */}
        <LifecycleSection onOpenDiagnostic={handleOpenDiagnostic} />

        {/* 8. Preguntas Frecuentes */}
        <FaqSection />

        {/* 9. CTA Final */}
        <CtaSection onOpenDiagnostic={handleOpenDiagnostic} />
      </main>

      {/* Footer */}
      <Footer onOpenDiagnostic={handleOpenDiagnostic} />

      {/* Interactive Modal */}
      <DiagnosticModal
        isOpen={isDiagnosticOpen}
        onClose={handleCloseDiagnostic}
      />

      {/* Persistent Floating WhatsApp */}
      <FloatingWhatsApp />
    </div>
  );
}
