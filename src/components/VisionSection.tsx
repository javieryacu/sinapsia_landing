"use client";

import React from "react";
import { motion } from "framer-motion";

export default function VisionSection() {
  const elements = ["Procesos", "Sistemas", "Datos", "Automatización", "IA"];

  return (
    <section id="vision" className="py-20 sm:py-28 bg-[#f9fafb] border-b border-gray-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Una sola visión para toda tu tecnología */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="p-8 sm:p-12 bg-white border border-gray-200 hover:border-gray-300 rounded-md text-center shadow-xs hover:shadow-lg transition-all duration-300"
        >
          <h2 className="text-3xl sm:text-4xl font-black text-gray-950 tracking-tight font-['Hanken_Grotesk',sans-serif] mb-6">
            Una sola visión para toda tu tecnología.
          </h2>

          <p className="text-gray-700 text-base sm:text-lg mb-8">
            En lugar de resolver cada problema por separado, trabajamos sobre el conjunto:
          </p>

          {/* Connected Formula with animated hover pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-8">
            {elements.map((el, i) => (
              <React.Fragment key={el}>
                <span className="px-4 py-2 bg-gray-900 hover:bg-black text-white hover:text-[#f4b400] rounded-md font-bold text-sm sm:text-base font-['Hanken_Grotesk',sans-serif] shadow-xs transition-all duration-200 cursor-default transform hover:scale-105">
                  {el}
                </span>
                {i < elements.length - 1 && (
                  <span className="text-lg font-black text-[#f4b400] select-none">+</span>
                )}
              </React.Fragment>
            ))}
          </div>

          <div className="max-w-2xl mx-auto space-y-2 text-gray-700 text-base sm:text-lg leading-relaxed pt-6 border-t border-gray-100">
            <p>
              Porque una mejora aislada puede resolver un problema.
            </p>
            <p className="font-bold text-gray-950 text-lg sm:text-xl">
              Pero una tecnología bien conectada puede transformar la forma en que funciona una empresa.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
