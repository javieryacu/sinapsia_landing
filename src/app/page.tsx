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
    <div className="min-h-screen bg-white text-gray-900 flex flex-col font-sans">
      {/* Top Navbar */}
      <Navbar onOpenDiagnostic={handleOpenDiagnostic} />

      {/* Main Content */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero onOpenDiagnostic={handleOpenDiagnostic} />

        {/* 2. ¿Tu empresa podría funcionar mejor? */}
        <ProblemSection />

        {/* 3. Primero entendemos tu empresa (01 al 05) */}
        <ProcessSection />

        {/* 4. No todo problema necesita un sistema nuevo */}
        <PhilosophySection />

        {/* 5. ¿Qué podemos hacer por tu empresa? */}
        <ServicesSection />

        {/* 6. No reemplazamos tus sistemas... + Una sola visión */}
        <VisionSection />

        {/* 7. De un problema concreto a una mejora permanente */}
        <LifecycleSection />

        {/* 8. Preguntas frecuentes */}
        <FaqSection />

        {/* 9. Empezá por descubrir qué se puede mejorar */}
        <CtaSection onOpenDiagnostic={handleOpenDiagnostic} />
      </main>

      {/* Footer */}
      <Footer onOpenDiagnostic={handleOpenDiagnostic} />

      {/* Modal para solicitar diagnóstico */}
      <DiagnosticModal
        isOpen={isDiagnosticOpen}
        onClose={handleCloseDiagnostic}
      />

      {/* Botón flotante oficial de WhatsApp */}
      <FloatingWhatsApp />
    </div>
  );
}
