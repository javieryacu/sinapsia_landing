"use client";

import React from "react";
import { motion } from "framer-motion";

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

        {/* 5 Services Grid with hover effects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((srv, idx) => (
            <motion.div
              key={srv.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="group p-8 bg-[#f9fafb] hover:bg-white border border-gray-200 hover:border-[#f4b400] rounded-md shadow-xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-8 h-1 bg-gray-300 group-hover:w-14 group-hover:bg-[#f4b400] transition-all duration-300 mb-6 rounded-full" />
                <h3 className="text-xl font-bold text-gray-950 group-hover:text-gray-950 mb-3 font-['Hanken_Grotesk',sans-serif] transition-colors">
                  {srv.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  {srv.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
