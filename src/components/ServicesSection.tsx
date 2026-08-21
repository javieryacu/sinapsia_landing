"use client";

import React from "react";

const SERVICES = [
  {
    title: "Optimización de sistemas",
    desc: "Mejoramos aplicaciones existentes, actualizamos componentes y extendemos la capacidad de sistemas que todavía son útiles para tu operación.",
  },
  {
    title: "Automatización de procesos",
    desc: "Eliminamos tareas repetitivas y convertimos procesos manuales en flujos automáticos.",
  },
  {
    title: "Integración de sistemas",
    desc: "Conectamos las herramientas que utilizás para evitar duplicación de información y permitir que los datos fluyan entre ellas.",
  },
  {
    title: "Inteligencia artificial",
    desc: "Incorporamos IA donde pueda aportar una mejora concreta en productividad, atención, análisis o gestión.",
  },
  {
    title: "Desarrollo de software",
    desc: "Cuando lo que necesitás no existe o los sistemas actuales no alcanzan, desarrollamos una solución a medida.",
  },
];

export default function ServicesSection() {
  return (
    <section id="servicios" className="py-20 sm:py-28 bg-white border-b border-gray-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-950 tracking-tight font-['Hanken_Grotesk',sans-serif]">
            ¿Qué podemos hacer por tu empresa?
          </h2>
        </div>

        {/* 5 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((srv) => (
            <div
              key={srv.title}
              className="p-8 bg-[#f9fafb] border border-gray-200 rounded-md flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-bold text-gray-950 mb-3 font-['Hanken_Grotesk',sans-serif]">
                  {srv.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  {srv.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
