import React from "react";

export type Section = {
  id: string;
  title: string;
  content: React.ReactNode;
};

export type Module = {
  id: string;
  title: string;
  description: string;
  sections: Section[];
};

export const manualData: Module[] = [
  {
    id: "estrategia",
    title: "00. Estrategia Comercial",
    description: "Define el sistema: qué somos, qué vendemos, a quién, cómo competimos y cuál es nuestra lógica comercial.",
    sections: [
      {
        id: "e-0",
        title: "0. Propósito del documento",
        content: (
          <div className="space-y-4">
            <p>Este documento establece los principios, posicionamiento y modelo comercial de SinapsIA.</p>
            <p>Su objetivo es asegurar que <strong>todas las acciones comerciales de la empresa sigan una misma dirección</strong>, independientemente de quién las ejecute.</p>
            <p className="bg-gray-100 p-4 rounded-md border-l-4 border-[#f4b400]">
              Este documento es estratégico. No contiene guiones de venta detallados ni procedimientos operativos; esos elementos forman parte del <strong>Playbook Comercial SinapsIA</strong>.
            </p>
          </div>
        )
      },
      {
        id: "e-1",
        title: "1. Qué es SinapsIA",
        content: (
          <div className="space-y-4">
            <p>SinapsIA es una empresa tecnológica que ayuda a organizaciones a mejorar su funcionamiento mediante soluciones de software, automatización, integración e inteligencia artificial.</p>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>No partimos de una tecnología determinada.</li>
              <li>Partimos del problema de la empresa.</li>
              <li>Analizamos cómo funciona actualmente, detectamos oportunidades de mejora y creamos la solución tecnológica que realmente necesita.</li>
            </ul>
            <div className="mt-6 bg-[#f4b400]/10 p-5 rounded-lg">
              <h4 className="font-bold text-[#09090b] mb-2">Slogan</h4>
              <p className="text-lg italic text-gray-800">"Creamos la solución tecnológica que tu empresa necesita."</p>
              <h4 className="font-bold text-[#09090b] mt-4 mb-2">Propuesta conceptual</h4>
              <p className="text-lg italic text-gray-800">"Aprovechamos los sistemas que ya tenés. Desarrollamos los que te faltan."</p>
            </div>
          </div>
        )
      },
      {
        id: "e-2",
        title: "2. Qué vendemos realmente",
        content: (
          <div className="space-y-4">
            <p>SinapsIA no vende simplemente software. Tampoco vende inteligencia artificial como producto aislado.</p>
            <p className="text-xl font-bold text-[#09090b] py-2">Vendemos: La resolución de problemas empresariales mediante tecnología.</p>
            <p>Un cliente puede contratar una solución de SinapsIA que consista en:</p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#f4b400]"></span> optimizar un sistema existente</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#f4b400]"></span> modernizar una aplicación</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#f4b400]"></span> automatizar un proceso</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#f4b400]"></span> integrar sistemas</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#f4b400]"></span> incorporar inteligencia artificial</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#f4b400]"></span> desarrollar software nuevo</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#f4b400]"></span> combinar varias de estas alternativas</li>
            </ul>
            <div className="bg-[#09090b] text-white p-4 rounded-md mt-4 text-center font-semibold">
              Por lo tanto: La tecnología es el medio. El problema del cliente es el punto de partida.
            </div>
          </div>
        )
      },
      {
        id: "e-3",
        title: "3. Qué NO somos",
        content: (
          <div className="space-y-6">
            <p>SinapsIA no debe posicionarse como:</p>
            <div className="space-y-4">
              <div className="border-l-2 border-red-500 pl-4">
                <h4 className="font-bold text-gray-900 line-through decoration-red-500">Una fábrica de software genérica</h4>
                <p className="text-sm text-gray-600">No queremos competir exclusivamente por capacidad de desarrollo, horas de programación o precio.</p>
              </div>
              <div className="border-l-2 border-red-500 pl-4">
                <h4 className="font-bold text-gray-900 line-through decoration-red-500">Una agencia de inteligencia artificial</h4>
                <p className="text-sm text-gray-600">No todo problema necesita IA.</p>
              </div>
              <div className="border-l-2 border-red-500 pl-4">
                <h4 className="font-bold text-gray-900 line-through decoration-red-500">Una empresa de automatización que automatiza cualquier cosa</h4>
                <p className="text-sm text-gray-600">Automatizar un proceso incorrecto no genera necesariamente valor.</p>
              </div>
              <div className="border-l-2 border-red-500 pl-4">
                <h4 className="font-bold text-gray-900 line-through decoration-red-500">Una consultora que entrega informes y no implementa</h4>
                <p className="text-sm text-gray-600">SinapsIA analiza, propone y ejecuta.</p>
              </div>
              <div className="border-l-2 border-red-500 pl-4">
                <h4 className="font-bold text-gray-900 line-through decoration-red-500">Un proveedor que intenta reemplazar todo lo existente</h4>
                <p className="text-sm text-gray-600">La primera alternativa siempre debe ser entender y aprovechar la inversión tecnológica que la empresa ya hizo.</p>
              </div>
            </div>
          </div>
        )
      },
      {
        id: "e-4",
        title: "4. Nuestro diferencial",
        content: (
          <div className="space-y-4">
            <p>La diferencia de SinapsIA no está solamente en las tecnologías que utiliza. <strong>Está en el proceso:</strong></p>
            <div className="flex flex-wrap gap-2 items-center text-sm font-bold text-white bg-[#09090b] p-4 rounded-lg justify-center">
              <span>Entender</span> <span className="text-[#f4b400]">→</span>
              <span>Diagnosticar</span> <span className="text-[#f4b400]">→</span>
              <span>Priorizar</span> <span className="text-[#f4b400]">→</span>
              <span>Diseñar</span> <span className="text-[#f4b400]">→</span>
              <span>Implementar</span> <span className="text-[#f4b400]">→</span>
              <span>Evolucionar</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <div className="bg-gray-50 p-4 rounded border border-gray-200">
                <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">Proveedor tradicional empieza:</p>
                <p className="text-gray-800 italic">"¿Qué sistema querés?"</p>
              </div>
              <div className="bg-[#f4b400]/10 p-4 rounded border border-[#f4b400]/30">
                <p className="text-xs text-[#f4b400] font-bold uppercase tracking-wide mb-1">SinapsIA comienza:</p>
                <p className="text-gray-900 font-bold italic">"¿Qué problema necesitás resolver?"</p>
              </div>
            </div>
          </div>
        )
      },
      {
        id: "e-5",
        title: "5. Cliente objetivo",
        content: (
          <div className="space-y-4">
            <p>No limitamos SinapsIA a una industria específica. Podemos trabajar con empresas, comercios, clínicas, estudios profesionales, industrias, organizaciones y otros tipos de negocios.</p>
            <p>Sin embargo, priorizamos organizaciones donde exista una combinación de:</p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 text-sm text-gray-700 bg-gray-50 p-4 rounded-md">
              <li>• procesos manuales</li>
              <li>• información duplicada</li>
              <li>• sistemas desconectados</li>
              <li>• software antiguo o limitado</li>
              <li>• dependencia excesiva de personas</li>
              <li>• tareas repetitivas</li>
              <li>• problemas de seguimiento</li>
              <li>• información dispersa</li>
              <li>• necesidad de integrar herramientas</li>
              <li>• interés en aplicar IA sin claridad de cómo</li>
              <li>• necesidad de desarrollo específico</li>
            </ul>
            <div className="mt-4 p-4 bg-[#09090b] text-white rounded-md text-center">
              <span className="text-[#f4b400] font-bold block mb-1">PRINCIPIO</span>
              No buscamos empresas que "quieran IA". Buscamos empresas que tengan problemas que la tecnología pueda resolver.
            </div>
          </div>
        )
      },
      {
        id: "e-6",
        title: "6. El problema que resolvemos",
        content: (
          <div className="space-y-4">
            <p>Muchas empresas no tienen necesariamente un problema de falta de tecnología. Tienen un problema de: <strong>tecnología mal aprovechada.</strong></p>
            <p>Puede existir:</p>
            <ul className="list-disc pl-5 space-y-1 text-gray-700">
              <li>Demasiado trabajo manual</li>
              <li>Información fragmentada</li>
              <li>Sistemas que no se comunican</li>
              <li>Procesos creados alrededor de Excel</li>
              <li>Herramientas que quedaron pequeñas</li>
              <li>Información que no está disponible a tiempo</li>
              <li>Procesos que dependen de una persona</li>
              <li>Oportunidades de automatización no aprovechadas</li>
            </ul>
            <p className="font-semibold text-[#09090b] mt-4">SinapsIA busca convertir estas situaciones en mejoras concretas.</p>
          </div>
        )
      },
      {
        id: "e-7",
        title: "7. La puerta de entrada comercial",
        content: (
          <div className="space-y-4">
            <p>La principal puerta de entrada será el <strong>Diagnóstico SinapsIA</strong> (Sin costo y sin compromiso).</p>
            <p>El diagnóstico permite conocer:</p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 bg-gray-100 text-xs rounded-full border border-gray-200">Cómo funciona la empresa</span>
              <span className="px-3 py-1 bg-gray-100 text-xs rounded-full border border-gray-200">Qué sistemas utiliza</span>
              <span className="px-3 py-1 bg-gray-100 text-xs rounded-full border border-gray-200">Qué procesos son críticos</span>
              <span className="px-3 py-1 bg-gray-100 text-xs rounded-full border border-gray-200">Dónde existen fricciones</span>
              <span className="px-3 py-1 bg-gray-100 text-xs rounded-full border border-gray-200">Qué tareas consumen tiempo</span>
              <span className="px-3 py-1 bg-gray-100 text-xs rounded-full border border-gray-200">Qué oportunidades existen</span>
              <span className="px-3 py-1 bg-gray-100 text-xs rounded-full border border-gray-200">Qué debería priorizarse</span>
            </div>
            <div className="bg-[#f4b400]/10 p-4 rounded-lg">
              <p className="font-bold text-[#09090b] mb-2">El diagnóstico no es el producto final.</p>
              <p className="text-sm">Es el mecanismo mediante el cual SinapsIA: conoce al cliente, genera valor antes de vender, identifica oportunidades, construye confianza y transforma problemas en proyectos concretos.</p>
            </div>
          </div>
        )
      },
      {
        id: "e-8",
        title: "8. El modelo comercial",
        content: (
          <div className="space-y-6">
            <p>Nuestro modelo tiene dos motores.</p>
            
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <div className="bg-gray-50 px-4 py-2 border-b border-gray-200 font-bold text-gray-800">Motor 1 — Servicios</div>
              <div className="p-4 bg-white">
                <p className="text-sm text-gray-600 mb-2">Generan ingresos y relaciones comerciales.</p>
                <p className="text-sm font-semibold">Diagnóstico → Proyecto → Implementación → Evolución</p>
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <div className="bg-gray-50 px-4 py-2 border-b border-gray-200 font-bold text-gray-800">Motor 2 — Productos</div>
              <div className="p-4 bg-white">
                <p className="text-sm text-gray-600">A medida que encontramos problemas repetidos en diferentes clientes, identificamos oportunidades para convertir soluciones recurrentes en productos, plataformas o servicios estandarizados.</p>
              </div>
            </div>

            <p className="font-bold text-center bg-[#09090b] text-white p-3 rounded-md">
              Los servicios generan caja y conocimiento del mercado. Los productos permiten escalar ese conocimiento.
            </p>
            <p className="text-sm text-center text-gray-600">La estrategia de productos de SinapsIA no se abandona. Se alimenta de los problemas reales encontrados en el mercado.</p>
          </div>
        )
      },
      {
        id: "e-9",
        title: "9. El recorrido del cliente",
        content: (
          <div className="space-y-4">
            <p>El proceso comercial y de desarrollo se estructura en 7 etapas de ventas y un ciclo ágil de delivery:</p>
            <div className="flex flex-col items-center space-y-1 py-4">
              {['1. Prospecto', '2. Contacto (Visita / WhatsApp)', '3. Conversación', '4. Diagnóstico ★', '5. Propuesta (30/40/30)', '6. Ganado ✓ (Inicio de Proyecto)', '7. Desarrollo Ágil & QA Cliente', '8. Pre-Producción & Cobros', '9. Evolución / Post-Venta'].map((step, i, arr) => (
                <React.Fragment key={step}>
                  <div className="bg-white border border-gray-200 shadow-sm px-4 py-2 rounded-md font-medium text-sm w-72 text-center">
                    {step}
                  </div>
                  {i < arr.length - 1 && <div className="text-[#f4b400]">↓</div>}
                </React.Fragment>
              ))}
            </div>
            <p className="text-center font-semibold mt-4">La relación ideal no termina con el primer desarrollo.</p>
            <p className="text-center text-sm text-gray-600">Un cliente evoluciona entregando valor en cada fase y activando nuevos módulos o proyectos en paralelo.</p>
          </div>
        )
      },
      {
        id: "e-10",
        title: "10. Filosofía comercial",
        content: (
          <div className="space-y-4">
            <p>Las ventas de SinapsIA son consultivas. No buscamos convencer al cliente de que necesita una determinada tecnología.</p>
            <div className="bg-gray-50 p-4 rounded-md">
              <p className="font-bold mb-2">Buscamos comprender:</p>
              <p className="text-sm">qué quiere mejorar → por qué → cuánto le afecta → qué alternativas existen → cuál tiene más sentido.</p>
            </div>
            <h4 className="font-bold text-lg mt-4">Principios:</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex gap-2"><span className="text-[#f4b400]">✔</span> Escuchar antes de proponer.</li>
              <li className="flex gap-2"><span className="text-[#f4b400]">✔</span> Preguntar antes de diagnosticar.</li>
              <li className="flex gap-2"><span className="text-[#f4b400]">✔</span> Entender antes de presupuestar.</li>
              <li className="flex gap-2"><span className="text-[#f4b400]">✔</span> Resolver antes que vender tecnología.</li>
              <li className="flex gap-2"><span className="text-[#f4b400]">✔</span> Priorizar impacto antes que complejidad técnica.</li>
              <li className="flex gap-2"><span className="text-[#f4b400]">✔</span> No prometer lo que todavía no entendemos.</li>
            </ul>
          </div>
        )
      },
      {
        id: "e-11",
        title: "11. Regla fundamental",
        content: (
          <div className="space-y-4">
            <div className="bg-red-50 text-red-900 p-4 rounded-md border-l-4 border-red-500 font-bold text-lg">
              Nunca empezamos por la solución. Empezamos por el problema.
            </div>
            <p>Un cliente puede decir: <span className="italic">"Necesito inteligencia artificial."</span> Eso no significa que IA sea necesariamente la solución.</p>
            <p>Primero debemos descubrir:</p>
            <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
              <li>qué quiere lograr;</li>
              <li>cuál es el problema;</li>
              <li>cómo lo resuelve actualmente;</li>
              <li>qué limitaciones tiene;</li>
              <li>qué impacto genera.</li>
            </ul>
            <p className="font-bold text-center p-3 bg-gray-100 rounded">Recién después definimos la tecnología.</p>
          </div>
        )
      },
      {
        id: "e-12",
        title: "12. Cómo debe pensar un comercial SinapsIA",
        content: (
          <div className="space-y-4">
            <div className="border border-gray-200 rounded p-4">
              <p className="text-red-500 font-bold mb-1">✕ NO debe preguntarse:</p>
              <p className="text-gray-600 italic">"¿Qué servicio le puedo vender?"</p>
            </div>
            
            <div className="border border-[#f4b400] bg-[#f4b400]/5 rounded p-4 space-y-3">
              <div>
                <p className="text-[#09090b] font-bold mb-1">✓ SÍ debe preguntarse:</p>
                <p className="text-gray-800 italic">"¿Qué está dificultando hoy el funcionamiento de esta empresa y qué podría hacerse mejor?"</p>
              </div>
              <div className="pl-4 border-l-2 border-[#f4b400]/30">
                <p className="text-xs text-gray-500 uppercase">Después:</p>
                <p className="text-gray-800 italic">"¿Existe una solución tecnológica viable para eso?"</p>
              </div>
              <div className="pl-4 border-l-2 border-[#f4b400]/30">
                <p className="text-xs text-gray-500 uppercase">Y finalmente:</p>
                <p className="text-gray-800 italic">"¿Cuál sería la mejor solución para el cliente?"</p>
              </div>
            </div>
          </div>
        )
      },
      {
        id: "e-13",
        title: "13. Las cinco grandes soluciones SinapsIA",
        content: (
          <div className="space-y-4">
            <p>Todas las oportunidades comerciales deben poder analizarse inicialmente dentro de estas categorías (que pueden combinarse):</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded shadow-sm border border-gray-100">
                <h4 className="font-bold text-[#f4b400]">1. Optimizar</h4>
                <p className="text-sm text-gray-600 mt-1">Mejorar lo que ya existe.</p>
              </div>
              <div className="bg-white p-4 rounded shadow-sm border border-gray-100">
                <h4 className="font-bold text-[#f4b400]">2. Automatizar</h4>
                <p className="text-sm text-gray-600 mt-1">Eliminar trabajo manual repetitivo.</p>
              </div>
              <div className="bg-white p-4 rounded shadow-sm border border-gray-100">
                <h4 className="font-bold text-[#f4b400]">3. Integrar</h4>
                <p className="text-sm text-gray-600 mt-1">Hacer que diferentes sistemas y herramientas trabajen juntos.</p>
              </div>
              <div className="bg-white p-4 rounded shadow-sm border border-gray-100">
                <h4 className="font-bold text-[#f4b400]">4. Inteligencia artificial</h4>
                <p className="text-sm text-gray-600 mt-1">Agregar capacidades de análisis, atención, generación, clasificación o decisión donde exista un caso de uso real.</p>
              </div>
              <div className="bg-white p-4 rounded shadow-sm border border-gray-100 md:col-span-2">
                <h4 className="font-bold text-[#f4b400]">5. Desarrollar</h4>
                <p className="text-sm text-gray-600 mt-1">Crear una solución nueva cuando las existentes no son suficientes.</p>
              </div>
            </div>
          </div>
        )
      },
      {
        id: "e-14",
        title: "14. El valor que buscamos generar",
        content: (
          <div className="space-y-4">
            <p>El resultado esperado de una solución SinapsIA debería relacionarse con uno o varios de estos factores:</p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-green-50 text-green-700 border border-green-200 rounded-full text-sm font-medium">↓ Menos tiempo</span>
              <span className="px-3 py-1 bg-green-50 text-green-700 border border-green-200 rounded-full text-sm font-medium">↓ Menos errores</span>
              <span className="px-3 py-1 bg-green-50 text-green-700 border border-green-200 rounded-full text-sm font-medium">↓ Menos trabajo manual</span>
              <span className="px-3 py-1 bg-green-50 text-green-700 border border-green-200 rounded-full text-sm font-medium">↓ Menos dependencia de personas</span>
              <span className="px-3 py-1 bg-blue-50 text-blue-700 border border-blue-200 rounded-full text-sm font-medium">↑ Mejor información</span>
              <span className="px-3 py-1 bg-blue-50 text-blue-700 border border-blue-200 rounded-full text-sm font-medium">↑ Mejor seguimiento</span>
              <span className="px-3 py-1 bg-blue-50 text-blue-700 border border-blue-200 rounded-full text-sm font-medium">↑ Mayor capacidad operativa</span>
              <span className="px-3 py-1 bg-blue-50 text-blue-700 border border-blue-200 rounded-full text-sm font-medium">↑ Mejor experiencia del cliente</span>
              <span className="px-3 py-1 bg-blue-50 text-blue-700 border border-blue-200 rounded-full text-sm font-medium">↑ Mayor capacidad de crecimiento</span>
            </div>
            <p className="font-bold text-center mt-4">La tecnología debe poder vincularse con un resultado empresarial.</p>
          </div>
        )
      },
      {
        id: "e-15",
        title: "15. Cómo medimos nuestro éxito comercial",
        content: (
          <div className="space-y-4">
            <p>No medimos únicamente cantidad de ventas. Debemos observar el embudo completo:</p>
            <p className="text-sm font-mono bg-gray-100 p-2 rounded text-center overflow-x-auto whitespace-nowrap">
              prospectos → conversaciones → diagnósticos → oportunidades → propuestas → cierres → recurrencia
            </p>
            <p>Y, especialmente:</p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-700">
              <li className="flex gap-2 items-center"><div className="w-1.5 h-1.5 rounded-full bg-gray-400" /> Tasa de conversión a diagnóstico</li>
              <li className="flex gap-2 items-center"><div className="w-1.5 h-1.5 rounded-full bg-gray-400" /> Tasa de conversión de diagnóstico a propuesta</li>
              <li className="flex gap-2 items-center"><div className="w-1.5 h-1.5 rounded-full bg-gray-400" /> Tasa de cierre</li>
              <li className="flex gap-2 items-center"><div className="w-1.5 h-1.5 rounded-full bg-gray-400" /> Ticket promedio</li>
              <li className="flex gap-2 items-center"><div className="w-1.5 h-1.5 rounded-full bg-gray-400" /> Tiempo desde contacto hasta cierre</li>
              <li className="flex gap-2 items-center"><div className="w-1.5 h-1.5 rounded-full bg-gray-400" /> Ingresos recurrentes</li>
              <li className="flex gap-2 items-center"><div className="w-1.5 h-1.5 rounded-full bg-gray-400" /> Cantidad de proyectos por cliente</li>
              <li className="flex gap-2 items-center"><div className="w-1.5 h-1.5 rounded-full bg-gray-400" /> Valor acumulado por cliente</li>
            </ul>
          </div>
        )
      },
      {
        id: "e-16",
        title: "16. Evolución de la estrategia",
        content: (
          <div className="space-y-4">
            <p>La estrategia comercial no debe cambiar por cada nueva tecnología o tendencia. Puede cambiar cuando la evidencia del mercado demuestra que debemos hacerlo.</p>
            <p>Las decisiones estratégicas deben basarse principalmente en:</p>
            <ul className="list-disc pl-5 text-sm text-gray-700">
              <li>conversaciones con clientes</li>
              <li>diagnósticos realizados</li>
              <li>problemas recurrentes</li>
              <li>tasa de conversión</li>
              <li>rentabilidad</li>
              <li>demanda real</li>
              <li>capacidad de implementación</li>
            </ul>
            <p className="bg-[#f4b400]/10 p-3 rounded font-semibold text-center mt-2">El mercado nos indica dónde profundizar. La estrategia define cómo hacerlo.</p>
          </div>
        )
      },
      {
        id: "e-17",
        title: "17. Principio rector",
        content: (
          <div className="space-y-4">
            <p>Todo el sistema comercial SinapsIA puede resumirse así:</p>
            <div className="text-xl font-bold text-center text-[#09090b] p-6 bg-gray-50 rounded-lg border-2 border-dashed border-gray-300">
              Entendemos el problema.<br/>
              Encontramos la oportunidad.<br/>
              Creamos la solución.<br/>
              La implementamos.<br/>
              Y seguimos evolucionándola.
            </div>
          </div>
        )
      }
    ]
  },
  {
    id: "playbook",
    title: "01. Playbook Comercial",
    description: "Define la ejecución: cómo una persona concreta prospecta, conversa, descubre necesidades, consigue el diagnóstico y lleva el negocio hasta el cierre.",
    sections: [
      {
        id: "p-0",
        title: "0. Propósito",
        content: (
          <div className="space-y-4">
            <p>El Playbook Comercial es la guía práctica para cualquier persona que represente comercialmente a SinapsIA.</p>
            <p>Su objetivo es que el equipo pueda encontrar prospectos, iniciar conversaciones, presentar SinapsIA, detectar problemas, conseguir diagnósticos, conducir oportunidades, presentar propuestas, manejar objeciones, hacer seguimiento y cerrar negocios.</p>
            <div className="bg-[#09090b] text-white p-4 rounded text-center">
              El playbook no busca convertir vendedores en técnicos. Busca enseñarles a detectar problemas y conducir conversaciones comerciales de calidad.
            </div>
          </div>
        )
      },
      {
        id: "p-1",
        title: "1. La regla número uno",
        content: (
          <div className="bg-[#f4b400] text-[#09090b] p-6 rounded-lg text-center font-black text-2xl shadow-sm">
            No vendemos tecnología. Descubrimos problemas y creamos soluciones.
          </div>
        )
      },
      {
        id: "p-2",
        title: "2. Qué tenemos que conseguir en cada etapa",
        content: (
          <div className="space-y-4">
            <p>No intentamos cerrar todo en una sola conversación.</p>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded border border-gray-100">
                <span className="font-bold">1. Prospecto</span>
                <span className="text-gray-600">identificar empresas con dolor o cuellos de botella.</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded border border-gray-100">
                <span className="font-bold">2. Contacto</span>
                <span className="text-gray-600">abrir la puerta por visita presencial o WhatsApp.</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded border border-gray-100">
                <span className="font-bold">3. Conversación</span>
                <span className="text-gray-600">escuchar los dolores y validar si existe un problema relevante.</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded border border-gray-100">
                <span className="font-bold">4. Diagnóstico ★</span>
                <span className="text-gray-600">relevar procesos y sistemas para detectar oportunidades concretas.</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded border border-gray-100">
                <span className="font-bold">5. Propuesta</span>
                <span className="text-gray-600">presentar alcance y cotización con cobro 30/40/30.</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded border border-gray-100">
                <span className="font-bold">6. Ganado ✓</span>
                <span className="text-gray-600">cerrar el acuerdo y gatillar el Proyecto Ágil.</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded border border-gray-100">
                <span className="font-bold">7. Desarrollo & QA Cliente</span>
                <span className="text-gray-600">desarrollar en sprints con validación continua del cliente.</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded border border-gray-100">
                <span className="font-bold">8. Evolución / Post-Venta</span>
                <span className="text-gray-600">agregar features o nuevos proyectos paralelos.</span>
              </div>
            </div>
          </div>
        )
      },
      {
        id: "p-3",
        title: "3. Presentación de SinapsIA",
        content: (
          <div className="space-y-4">
            <h4 className="font-bold text-sm uppercase text-gray-500">Presentación principal</h4>
            <div className="bg-white border-l-4 border-[#f4b400] p-4 shadow-sm text-gray-800 italic">
              "En SinapsIA ayudamos a empresas a mejorar sus procesos y sistemas. Primero entendemos cómo trabajan y dónde tienen problemas o tareas que podrían resolverse mejor, y a partir de ahí creamos la solución tecnológica que necesitan. Puede ser optimizar lo que ya tienen, automatizar, integrar sistemas, incorporar IA o desarrollar algo nuevo."
            </div>
            <p className="text-sm text-gray-500 mt-2">Nota: No es necesario memorizar literalmente el texto. El objetivo es transmitir esas ideas.</p>
          </div>
        )
      },
      {
        id: "p-4",
        title: "4. Presentación corta",
        content: (
          <div className="space-y-4">
            <p>Cuando alguien pregunta: <span className="font-bold">"¿A qué te dedicás?"</span></p>
            <div className="bg-white border-l-4 border-gray-800 p-4 shadow-sm text-gray-800 italic">
              "Ayudo a empresas a detectar problemas en sus procesos y sistemas y desarrollamos la solución tecnológica que necesitan. Puede ser automatización, integración, IA, mejora de sistemas o software nuevo."
            </div>
            <div className="bg-red-50 text-red-800 p-3 rounded text-sm font-semibold">
              Después se debe hacer una pausa. No hay que continuar hablando si el interlocutor no lo pidió.
            </div>
          </div>
        )
      },
      {
        id: "p-5",
        title: "5. Cuando preguntan '¿Qué hacen exactamente?'",
        content: (
          <div className="space-y-4">
            <p>Respuesta recomendada:</p>
            <div className="bg-white border-l-4 border-gray-800 p-4 shadow-sm text-gray-800 italic space-y-2">
              <p>"Depende del problema. Por eso primero relevamos cómo trabaja la empresa. A veces conviene mejorar un sistema existente, otras integrar herramientas, automatizar procesos, incorporar IA o desarrollar algo específico."</p>
              <p>"No queremos venderte una tecnología determinada; queremos encontrar qué te conviene resolver."</p>
            </div>
          </div>
        )
      },
      {
        id: "p-6",
        title: "6. Cómo iniciar una conversación (Contacto cálido)",
        content: (
          <div className="space-y-4">
            <p>En contactos conocidos o referidos, la conversación debe ser natural.</p>
            <div className="bg-white border border-gray-200 p-4 rounded shadow-sm text-gray-800 italic">
              "Estoy trabajando con SinapsIA ayudando a empresas a detectar cosas que pueden mejorar o automatizar. ¿Cómo están resolviendo actualmente [proceso]?"
            </div>
            <p className="text-sm font-semibold text-center mt-2">El objetivo no es presentar toda la empresa. Es iniciar una conversación sobre la realidad del cliente.</p>
          </div>
        )
      },
      {
        id: "p-7",
        title: "7. Contacto frío",
        content: (
          <div className="space-y-4">
            <div className="border border-red-200 bg-red-50 p-3 rounded">
              <p className="text-red-700 font-bold mb-1">NO comenzar con:</p>
              <p className="text-sm italic">"Somos líderes en soluciones innovadoras de inteligencia artificial..."</p>
            </div>
            <p>Comenzar con algo específico de la empresa. Ejemplo:</p>
            <div className="bg-white border border-green-200 p-4 rounded shadow-sm text-gray-800 italic">
              "Hola, [nombre]. Soy Javier, de SinapsIA. Estamos ayudando a empresas a detectar procesos que todavía se hacen manualmente o con sistemas que no están bien conectados. Quería consultarte algo puntual: ¿cómo están resolviendo actualmente [proceso específico]?"
            </div>
            <p className="text-sm font-semibold mt-2">La personalización debe ser real. No hay que inventar conocimiento sobre la empresa.</p>
          </div>
        )
      },
      {
        id: "p-8",
        title: "8. El principio 70/30",
        content: (
          <div className="space-y-4">
            <p>Durante una conversación comercial:</p>
            <div className="flex h-12 rounded-lg overflow-hidden font-bold text-white text-center leading-[3rem]">
              <div className="w-[70%] bg-[#09090b]">70% escuchar</div>
              <div className="w-[30%] bg-[#f4b400] text-gray-900">30% hablar</div>
            </div>
            <p className="text-center mt-4 font-semibold">No necesitamos demostrar conocimientos técnicos. Necesitamos comprender la operación. El conocimiento técnico se demuestra después, en la solución.</p>
          </div>
        )
      },
      {
        id: "p-9",
        title: "9. Preguntas de descubrimiento",
        content: (
          <div className="space-y-6">
            <p className="text-sm text-gray-600">Las preguntas deben utilizarse como guía, no como interrogatorio.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded">
                <h4 className="font-bold text-[#f4b400] mb-2">Procesos</h4>
                <ul className="text-sm space-y-1 list-disc pl-4 text-gray-700">
                  <li>¿Cómo hacen actualmente este proceso?</li>
                  <li>¿Cuántas personas intervienen?</li>
                  <li>¿Qué pasos tiene?</li>
                  <li>¿Qué parte se hace manualmente?</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-4 rounded">
                <h4 className="font-bold text-[#f4b400] mb-2">Sistemas</h4>
                <ul className="text-sm space-y-1 list-disc pl-4 text-gray-700">
                  <li>¿Qué sistema utilizan?</li>
                  <li>¿También usan Excel?</li>
                  <li>¿Utilizan WhatsApp u otras herramientas?</li>
                  <li>¿Los sistemas comparten información?</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-4 rounded">
                <h4 className="font-bold text-[#f4b400] mb-2">Problemas</h4>
                <ul className="text-sm space-y-1 list-disc pl-4 text-gray-700">
                  <li>¿Dónde suelen aparecer los problemas?</li>
                  <li>¿Qué tarea les lleva más tiempo?</li>
                  <li>¿Qué hacen varias veces durante el día?</li>
                  <li>¿Qué información tienen que cargar más de una vez?</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-4 rounded">
                <h4 className="font-bold text-[#f4b400] mb-2">Dependencia & Escalabilidad</h4>
                <ul className="text-sm space-y-1 list-disc pl-4 text-gray-700">
                  <li>¿Hay algún proceso que dependa mucho de una persona? ¿Qué pasa si no está?</li>
                  <li>Si el volumen de trabajo aumentara considerablemente, ¿podrían seguir trabajando de la misma manera?</li>
                </ul>
              </div>
            </div>
          </div>
        )
      },
      {
        id: "p-10",
        title: "10. Preguntas especialmente valiosas",
        content: (
          <div className="space-y-4">
            <p>Estas preguntas deberían formar parte de la formación comercial:</p>
            <div className="space-y-3">
              <div className="p-3 bg-white border-l-4 border-[#f4b400] shadow-sm font-medium">¿Qué hacen hoy manualmente que les gustaría que el sistema hiciera por ustedes?</div>
              <div className="p-3 bg-white border-l-4 border-[#f4b400] shadow-sm font-medium">¿Qué parte de la operación sienten que todavía están resolviendo de una forma bastante artesanal?</div>
              <div className="p-3 bg-white border-l-4 border-[#f4b400] shadow-sm font-medium">¿Qué tarea les gustaría eliminar de la operación diaria?</div>
              <div className="p-3 bg-white border-l-4 border-[#f4b400] shadow-sm font-medium">¿Dónde sienten que están perdiendo más tiempo?</div>
              <div className="p-3 bg-white border-l-4 border-[#f4b400] shadow-sm font-medium">¿Qué información cargan más de una vez?</div>
            </div>
          </div>
        )
      },
      {
        id: "p-11",
        title: "11. Cómo detectar una oportunidad",
        content: (
          <div className="space-y-4">
            <p>Cuando un cliente plantea un problema, no saltamos inmediatamente a una solución. Usamos este recorrido:</p>
            <div className="flex flex-wrap gap-2 items-center font-bold text-xs sm:text-sm bg-[#09090b] text-white p-3 rounded justify-center mb-6">
              <span>Problema</span> <span className="text-[#f4b400]">→</span>
              <span>Causa</span> <span className="text-[#f4b400]">→</span>
              <span>Impacto</span> <span className="text-[#f4b400]">→</span>
              <span>Contexto tecnológico</span> <span className="text-[#f4b400]">→</span>
              <span>Alternativa</span>
            </div>
            
            <h4 className="font-bold text-sm uppercase text-gray-500">Ejemplo práctico:</h4>
            <div className="bg-gray-50 p-4 rounded border border-gray-200 space-y-3">
              <p><span className="font-bold text-blue-600">Cliente:</span> "Los vendedores cargan todo en Excel."</p>
              <p><span className="font-bold text-red-600 line-through">NO responder:</span> "Podemos automatizarlo."</p>
              <p><span className="font-bold text-green-600">Preguntar:</span> "¿Por qué necesitan hacerlo en Excel?"</p>
              <p><span className="font-bold text-green-600">Luego:</span> "¿Qué información necesitan gestionar ahí que el sistema no les ofrece?"</p>
              <p><span className="font-bold text-green-600">Y después:</span> "¿Cuánto tiempo les lleva hacerlo?"</p>
              <p className="pt-2 border-t font-semibold text-center mt-2">Así descubrimos el problema real.</p>
            </div>
          </div>
        )
      },
      {
        id: "p-12",
        title: "12. Señales de oportunidad",
        content: (
          <div className="space-y-4">
            <p>Hay que prestar especial atención cuando el cliente menciona:</p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-yellow-50 text-yellow-800 border border-yellow-200 rounded-full text-sm">"Lo hacemos manualmente."</span>
              <span className="px-3 py-1 bg-yellow-50 text-yellow-800 border border-yellow-200 rounded-full text-sm">"Tenemos un Excel para eso."</span>
              <span className="px-3 py-1 bg-yellow-50 text-yellow-800 border border-yellow-200 rounded-full text-sm">"Tenemos que cargarlo dos veces."</span>
              <span className="px-3 py-1 bg-yellow-50 text-yellow-800 border border-yellow-200 rounded-full text-sm">"Tenemos que copiar y pegar."</span>
              <span className="px-3 py-1 bg-yellow-50 text-yellow-800 border border-yellow-200 rounded-full text-sm">"Eso lo hace Juan."</span>
              <span className="px-3 py-1 bg-yellow-50 text-yellow-800 border border-yellow-200 rounded-full text-sm">"Nuestro sistema no permite..."</span>
              <span className="px-3 py-1 bg-yellow-50 text-yellow-800 border border-yellow-200 rounded-full text-sm">"Tenemos un sistema para cada cosa."</span>
              <span className="px-3 py-1 bg-yellow-50 text-yellow-800 border border-yellow-200 rounded-full text-sm">"Los datos están separados."</span>
              <span className="px-3 py-1 bg-yellow-50 text-yellow-800 border border-yellow-200 rounded-full text-sm">"Tenemos muchas consultas iguales."</span>
              <span className="px-3 py-1 bg-yellow-50 text-yellow-800 border border-yellow-200 rounded-full text-sm">"Nuestro sistema es muy viejo."</span>
              <span className="px-3 py-1 bg-yellow-50 text-yellow-800 border border-yellow-200 rounded-full text-sm">"Eso todavía no lo podemos hacer."</span>
            </div>
            <p className="mt-4 font-semibold text-center bg-gray-100 p-2 rounded">Estas frases no significan automáticamente que haya una venta. Son señales para investigar.</p>
          </div>
        )
      },
      {
        id: "p-13",
        title: "13. Cómo determinar la solución",
        content: (
          <div className="space-y-4">
            <p>Una vez comprendido el problema, analizar:</p>
            <div className="space-y-2">
              <div className="flex justify-between items-center p-3 bg-white border border-gray-200 rounded shadow-sm">
                <span>¿Se puede solucionar mejorando lo existente?</span>
                <span className="font-bold text-[#f4b400] text-sm ml-4 text-right">Optimización / Modernización</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-white border border-gray-200 rounded shadow-sm">
                <span>¿Hay trabajo repetitivo?</span>
                <span className="font-bold text-[#f4b400] text-sm ml-4 text-right">Automatización</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-white border border-gray-200 rounded shadow-sm">
                <span>¿Hay sistemas aislados?</span>
                <span className="font-bold text-[#f4b400] text-sm ml-4 text-right">Integración</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-white border border-gray-200 rounded shadow-sm">
                <span>¿Existe una tarea donde el lenguaje, análisis, clasificación o generación puedan aportar valor?</span>
                <span className="font-bold text-[#f4b400] text-sm ml-4 text-right">IA</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-white border border-gray-200 rounded shadow-sm">
                <span>¿No existe una solución adecuada?</span>
                <span className="font-bold text-[#f4b400] text-sm ml-4 text-right">Desarrollo</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-white border border-gray-200 rounded shadow-sm">
                <span>¿Hay más de un problema?</span>
                <span className="font-bold text-[#f4b400] text-sm ml-4 text-right">Combinación</span>
              </div>
            </div>
          </div>
        )
      },
      {
        id: "p-14",
        title: "14. Cuándo ofrecer el diagnóstico",
        content: (
          <div className="space-y-4">
            <p>Cuando exista un problema real y suficiente información para justificar un análisis más profundo.</p>
            <h4 className="font-bold text-sm uppercase text-gray-500">Frase recomendada:</h4>
            <div className="bg-gray-50 p-4 rounded border-l-4 border-[#f4b400] text-gray-800 italic">
              "Por lo que me contás, creo que hay varias cosas que se podrían mejorar, pero no te diría todavía cuál es la solución sin mirar el proceso completo. Podemos hacer un diagnóstico sin costo, revisar cómo trabajan actualmente y decirte concretamente qué convendría mejorar y por dónde empezar."
            </div>
          </div>
        )
      },
      {
        id: "p-15",
        title: "15. Qué es el diagnóstico",
        content: (
          <div className="space-y-4">
            <p>El diagnóstico es un proceso de análisis, no una simple reunión comercial.</p>
            <p>Busca identificar:</p>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-1 text-sm list-disc pl-5 text-gray-700">
              <li>procesos críticos</li>
              <li>sistemas</li>
              <li>herramientas</li>
              <li>problemas</li>
              <li>tareas manuales</li>
              <li>duplicaciones</li>
              <li>dependencias</li>
              <li>integraciones</li>
              <li>oportunidades de automatización</li>
              <li>oportunidades de IA</li>
              <li>necesidades de desarrollo</li>
              <li>prioridades</li>
            </ul>
            <p className="font-bold text-center bg-[#f4b400]/10 p-3 rounded mt-4">El diagnóstico debe terminar con oportunidades concretas y accionables.</p>
          </div>
        )
      },
      {
        id: "p-16",
        title: "16. Qué NO hacer",
        content: (
          <div className="space-y-4">
            <h4 className="font-bold text-red-600 text-lg">Nunca:</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex gap-2 items-start"><span className="text-red-500 font-bold">✕</span> prometer resultados que todavía no fueron analizados;</li>
              <li className="flex gap-2 items-start"><span className="text-red-500 font-bold">✕</span> recomendar IA simplemente porque está de moda;</li>
              <li className="flex gap-2 items-start"><span className="text-red-500 font-bold">✕</span> afirmar que hay que reemplazar un sistema sin evaluar alternativas;</li>
              <li className="flex gap-2 items-start"><span className="text-red-500 font-bold">✕</span> presupuestar sin comprender el alcance;</li>
              <li className="flex gap-2 items-start"><span className="text-red-500 font-bold">✕</span> hablar continuamente de tecnología;</li>
              <li className="flex gap-2 items-start"><span className="text-red-500 font-bold">✕</span> inventar capacidades o casos de éxito;</li>
              <li className="flex gap-2 items-start"><span className="text-red-500 font-bold">✕</span> garantizar ahorros sin tener datos;</li>
              <li className="flex gap-2 items-start"><span className="text-red-500 font-bold">✕</span> convertir cada conversación en una presentación comercial.</li>
            </ul>
          </div>
        )
      },
      {
        id: "p-17",
        title: "17. Cómo manejar 'mandame información'",
        content: (
          <div className="space-y-4">
            <p>No hay que enviar automáticamente una presentación y cerrar la conversación.</p>
            <h4 className="font-bold text-sm uppercase text-gray-500">Respuesta recomendada:</h4>
            <div className="bg-gray-50 p-4 rounded border border-gray-200 text-gray-800 italic">
              "Claro. Te puedo enviar información, pero para no mandarte algo genérico prefiero entender primero qué parte de la operación te interesa mejorar. ¿Qué es lo que hoy más te preocupa?"
            </div>
            <p className="font-bold text-center mt-2 text-[#09090b]">Objetivo: volver a la conversación.</p>
          </div>
        )
      },
      {
        id: "p-18",
        title: "18. Objeciones",
        content: (
          <div className="space-y-6">
            <p>Las objeciones no deben combatirse inmediatamente. <strong>Primero hay que entenderlas.</strong></p>
            
            <div className="space-y-4">
              <div className="bg-white p-3 rounded shadow-sm border border-gray-200">
                <p className="font-bold text-red-600 mb-1">"Ya tenemos un sistema."</p>
                <p className="text-sm italic text-gray-700">"Perfecto. De hecho, nuestro primer enfoque suele ser trabajar sobre lo que ya tienen. ¿Qué cosas sienten que el sistema actual no resuelve bien?"</p>
              </div>
              
              <div className="bg-white p-3 rounded shadow-sm border border-gray-200">
                <p className="font-bold text-red-600 mb-1">"No necesitamos IA."</p>
                <p className="text-sm italic text-gray-700">"No necesariamente necesitan IA. Para nosotros es una herramienta más. Primero vemos si existe algún problema que tenga sentido resolver y después definimos cómo."</p>
              </div>
              
              <div className="bg-white p-3 rounded shadow-sm border border-gray-200">
                <p className="font-bold text-red-600 mb-1">"Es muy caro."</p>
                <p className="text-sm text-gray-600 mb-1">No defender el precio automáticamente. Preguntar:</p>
                <p className="text-sm italic text-gray-700">"¿Comparándolo con qué alternativa?" <br/> o <br/> "¿Qué parte de la propuesta sentís que está fuera de lo esperado?"</p>
              </div>
              
              <div className="bg-white p-3 rounded shadow-sm border border-gray-200">
                <p className="font-bold text-red-600 mb-1">"Lo tenemos que pensar."</p>
                <p className="text-sm italic text-gray-700">"Perfecto. ¿Qué aspecto necesitan evaluar antes de tomar una decisión?"</p>
              </div>
            </div>
            
            <p className="font-bold text-center bg-[#09090b] text-white p-2 rounded">La meta es descubrir la verdadera objeción.</p>
          </div>
        )
      },
      {
        id: "p-19",
        title: "19. El seguimiento",
        content: (
          <div className="space-y-4">
            <p>Nunca hacer seguimiento únicamente diciendo: <span className="italic line-through text-red-500">"Hola, ¿viste la propuesta?"</span></p>
            <p>Cada seguimiento debe agregar contexto. Ejemplo:</p>
            <div className="bg-gray-50 p-4 rounded border-l-4 border-[#f4b400] text-gray-800 italic">
              "Estuve revisando lo que vimos en el diagnóstico y hay un punto que creo que podríamos simplificar todavía más. Quería comentártelo antes de que tomes una decisión."
            </div>
            <p className="font-bold text-center mt-2">El seguimiento debe aportar valor.</p>
          </div>
        )
      },
      {
        id: "p-20",
        title: "20. Regla de oro del Playbook",
        content: (
          <div className="bg-[#09090b] text-white p-8 rounded-xl text-center text-xl font-medium leading-relaxed shadow-lg border border-gray-800">
            "Una buena conversación comercial no es aquella en la que hablamos mucho de SinapsIA. <br/><br/>
            <span className="text-[#f4b400] font-black text-2xl">Es aquella en la que entendemos mucho sobre el cliente.</span>"
          </div>
        )
      },
      {
        id: "p-21",
        title: "21. El proceso completo que todo integrante debe dominar",
        content: (
          <div className="space-y-4">
            <div className="flex flex-col space-y-1 p-6 bg-gray-50 rounded-lg font-medium text-sm border border-gray-200">
              <div className="flex items-center gap-4"><span className="w-6 h-6 rounded-full bg-[#f4b400] text-black flex items-center justify-center font-bold text-xs shrink-0">1</span> Encontrar una empresa</div>
              <div className="ml-3 text-gray-400">↓</div>
              <div className="flex items-center gap-4"><span className="w-6 h-6 rounded-full bg-[#f4b400] text-black flex items-center justify-center font-bold text-xs shrink-0">2</span> Investigarla mínimamente</div>
              <div className="ml-3 text-gray-400">↓</div>
              <div className="flex items-center gap-4"><span className="w-6 h-6 rounded-full bg-[#f4b400] text-black flex items-center justify-center font-bold text-xs shrink-0">3</span> Iniciar una conversación relevante</div>
              <div className="ml-3 text-gray-400">↓</div>
              <div className="flex items-center gap-4"><span className="w-6 h-6 rounded-full bg-[#f4b400] text-black flex items-center justify-center font-bold text-xs shrink-0">4</span> Comprender cómo trabaja</div>
              <div className="ml-3 text-gray-400">↓</div>
              <div className="flex items-center gap-4"><span className="w-6 h-6 rounded-full bg-[#f4b400] text-black flex items-center justify-center font-bold text-xs shrink-0">5</span> Detectar problemas</div>
              <div className="ml-3 text-gray-400">↓</div>
              <div className="flex items-center gap-4"><span className="w-6 h-6 rounded-full bg-[#f4b400] text-black flex items-center justify-center font-bold text-xs shrink-0">6</span> Profundizar en el impacto</div>
              <div className="ml-3 text-gray-400">↓</div>
              <div className="flex items-center gap-4"><span className="w-6 h-6 rounded-full bg-[#f4b400] text-black flex items-center justify-center font-bold text-xs shrink-0">7</span> Identificar si existe una oportunidad</div>
              <div className="ml-3 text-gray-400">↓</div>
              <div className="flex items-center gap-4"><span className="w-6 h-6 rounded-full bg-[#f4b400] text-black flex items-center justify-center font-bold text-xs shrink-0">8</span> Conseguir el diagnóstico</div>
              <div className="ml-3 text-gray-400">↓</div>
              <div className="flex items-center gap-4"><span className="w-6 h-6 rounded-full bg-[#f4b400] text-black flex items-center justify-center font-bold text-xs shrink-0">9</span> Participar en el proceso de diagnóstico</div>
              <div className="ml-3 text-gray-400">↓</div>
              <div className="flex items-center gap-4"><span className="w-6 h-6 rounded-full bg-[#f4b400] text-black flex items-center justify-center font-bold text-xs shrink-0">10</span> Convertir hallazgos en propuesta</div>
              <div className="ml-3 text-gray-400">↓</div>
              <div className="flex items-center gap-4"><span className="w-6 h-6 rounded-full bg-[#f4b400] text-black flex items-center justify-center font-bold text-xs shrink-0">11</span> Dar seguimiento</div>
              <div className="ml-3 text-gray-400">↓</div>
              <div className="flex items-center gap-4"><span className="w-6 h-6 rounded-full bg-[#f4b400] text-black flex items-center justify-center font-bold text-xs shrink-0">12</span> Cerrar</div>
              <div className="ml-3 text-gray-400">↓</div>
              <div className="flex items-center gap-4"><span className="w-6 h-6 rounded-full bg-[#f4b400] text-black flex items-center justify-center font-bold text-xs shrink-0">13</span> Acompañar la implementación</div>
              <div className="ml-3 text-gray-400">↓</div>
              <div className="flex items-center gap-4"><span className="w-6 h-6 rounded-full bg-[#f4b400] text-black flex items-center justify-center font-bold text-xs shrink-0">14</span> Detectar nuevas oportunidades</div>
            </div>
            
            <div className="mt-8 bg-[#f4b400]/10 p-4 rounded-lg">
              <h4 className="font-bold text-[#09090b] mb-2">Nota sobre el uso de los documentos:</h4>
              <p className="text-sm text-gray-700 mb-2">El <strong>00 — Estrategia Comercial</strong> no debería cambiar constantemente. Es el norte.</p>
              <p className="text-sm text-gray-700 mb-2">El <strong>01 — Playbook Comercial</strong> sí debería evolucionar. Después de 20, 50 o 100 conversaciones vamos a descubrir qué funciona, qué objeciones aparecen, qué preguntas generan mejores diagnósticos y qué perfiles de empresa convierten mejor.</p>
              <p className="text-sm text-gray-700 italic">Todavía no se incluyen precios, comisiones, scripts de WhatsApp, campañas de prospección ni el cuestionario completo del diagnóstico dentro de estos documentos para mantener separadas la estrategia de la operación.</p>
            </div>
          </div>
        )
      }
    ]
  },
  {
    id: "diagnostico",
    title: "02. Manual de Diagnóstico",
    description: "Metodología estructurada para analizar cómo funciona una empresa, relevar procesos, detectar oportunidades reales y emitir recomendaciones claras.",
    sections: [
      {
        id: "d-0",
        title: "0. Propósito, Principios y Método",
        content: (
          <div className="space-y-6">
            <p>El <strong>Diagnóstico SinapsIA</strong> es el proceso mediante el cual analizamos cómo funciona actualmente una empresa para identificar oportunidades concretas de mejora mediante tecnología.</p>
            
            <div className="bg-[#f4b400]/10 p-4 rounded-lg border-l-4 border-[#f4b400]">
              <h4 className="font-bold text-[#09090b] mb-1">Pregunta Central del Diagnóstico:</h4>
              <p className="text-base sm:text-lg italic text-gray-900 font-semibold">"¿Dónde puede la tecnología generar una mejora concreta en esta empresa y cuál es la mejor forma de hacerlo?"</p>
            </div>

            <div className="bg-[#09090b] text-white p-4 rounded-md text-center">
              <span className="text-[#f4b400] font-bold block mb-1">PRINCIPIO FUNDAMENTAL</span>
              Primero entendemos cómo funciona la empresa. Después definimos qué solución necesita.
            </div>

            <h4 className="font-bold text-gray-900 text-base">El Método SinapsIA en 6 Etapas:</h4>
            <div className="flex flex-wrap gap-2 items-center font-bold text-xs sm:text-sm bg-gray-100 text-gray-800 p-3 rounded justify-center">
              <span className="bg-white px-2.5 py-1 rounded shadow-xs">1. Preparar</span> <span className="text-[#f4b400]">→</span>
              <span className="bg-white px-2.5 py-1 rounded shadow-xs">2. Relevar</span> <span className="text-[#f4b400]">→</span>
              <span className="bg-white px-2.5 py-1 rounded shadow-xs">3. Comprender</span> <span className="text-[#f4b400]">→</span>
              <span className="bg-white px-2.5 py-1 rounded shadow-xs">4. Detectar Oportunidades</span> <span className="text-[#f4b400]">→</span>
              <span className="bg-white px-2.5 py-1 rounded shadow-xs">5. Priorizar</span> <span className="text-[#f4b400]">→</span>
              <span className="bg-white px-2.5 py-1 rounded shadow-xs">6. Recomendar</span>
            </div>

            <p className="text-xs text-gray-500 text-center">El diagnóstico no tiene que resolver técnicamente todo; tiene que permitir tomar una buena decisión sobre qué hacer a continuación.</p>
          </div>
        )
      },
      {
        id: "d-1",
        title: "1. Etapa 1 — Preparación Previa",
        content: (
          <div className="space-y-4">
            <p>Antes de reunirse con el cliente debemos investigar lo mínimo necesario para llegar con contexto real.</p>
            
            <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-xs">
              <h4 className="font-bold text-[#09090b] mb-2 text-sm uppercase tracking-wide">Checklist de datos a registrar:</h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-700">
                <li>• Nombre de la empresa y actividad</li>
                <li>• Ubicación y sedes/sucursales</li>
                <li>• Cantidad aprox. de empleados</li>
                <li>• Sitio web y redes relevantes</li>
                <li>• Persona de contacto y cargo</li>
                <li>• Motivo por el cual solicita el diagnóstico</li>
                <li>• Origen del contacto (referido, prospección)</li>
                <li>• Información previa conocida</li>
              </ul>
            </div>

            <div className="bg-gray-50 border-l-4 border-gray-800 p-4 rounded text-sm">
              <p className="font-bold text-gray-900 mb-1">Objetivo de la preparación:</p>
              <p className="italic text-gray-700">"Llegar a la reunión sabiendo al menos qué hace la empresa, cómo gana dinero y quién tenemos delante."</p>
            </div>
          </div>
        )
      },
      {
        id: "d-2",
        title: "2. Etapa 2 — Relevamiento (3 Dimensiones Clave)",
        content: (
          <div className="space-y-6">
            <div className="bg-gray-50 p-4 rounded border border-gray-200">
              <p className="text-xs text-gray-500 uppercase tracking-wide font-bold mb-1">Frase de Apertura Recomendada:</p>
              <p className="text-gray-800 italic">"Antes de hablar de soluciones, queremos entender cómo trabajan actualmente, qué sistemas utilizan y qué cosas sienten que podrían funcionar mejor."</p>
            </div>

            {/* Dimension 1 */}
            <div className="border border-gray-200 rounded-lg p-4 bg-white shadow-xs">
              <h4 className="font-bold text-[#09090b] text-base mb-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#f4b400]"></span>
                Dimensión 1: Operación, Procesos y Personas
              </h4>
              <p className="text-sm text-gray-600 mb-3">Relevar cómo se realiza el trabajo diario, los cuellos de botella y las tareas artesanales.</p>
              <ul className="space-y-1.5 text-sm text-gray-700 list-disc pl-5">
                <li><strong>Procesos:</strong> ¿Cuáles son los pasos? ¿Quién interviene? ¿Dónde comienza y termina? ¿Qué parte es manual?</li>
                <li><strong>Trabajo Manual:</strong> ¿Qué tareas repetitivas les consumen más tiempo al día? ¿Qué revisan a mano para evitar errores?</li>
                <li><strong>Dependencia:</strong> ¿Hay procesos o información crítica que solo sabe/controla una sola persona? ¿Qué pasa si falta?</li>
              </ul>
            </div>

            {/* Dimension 2 */}
            <div className="border border-gray-200 rounded-lg p-4 bg-white shadow-xs">
              <h4 className="font-bold text-[#09090b] text-base mb-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#f4b400]"></span>
                Dimensión 2: Tecnología, Datos y Sistemas Desconectados
              </h4>
              <p className="text-sm text-gray-600 mb-3">Identificar el mapa de herramientas actuales y la fricción entre ellas.</p>
              <ul className="space-y-1.5 text-sm text-gray-700 list-disc pl-5">
                <li><strong>Sistemas:</strong> ¿Qué ERP, CRM, software contable, Excel o apps usan? ¿Qué función cumple cada uno?</li>
                <li><strong>Datos:</strong> ¿Dónde está la información? ¿Hay múltiples Excel o bases separadas? ¿Cuesta obtener reportes?</li>
                <li><strong>Desconexión:</strong> ¿Qué datos pasan a mano de un sistema a otro? ¿Con qué frecuencia exportan e importan?</li>
                <li><strong>Sistemas Antiguos:</strong> ¿Qué funciona bien y qué limitaciones tiene? (Evaluar antes de proponer cambios).</li>
              </ul>
            </div>

            {/* Dimension 3 */}
            <div className="border border-gray-200 rounded-lg p-4 bg-white shadow-xs">
              <h4 className="font-bold text-[#09090b] text-base mb-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#f4b400]"></span>
                Dimensión 3: Canales de Atención, IA y Nuevos Desarrollos
              </h4>
              <p className="text-sm text-gray-600 mb-3">Detectar potencial para automatización avanzada, asistentes inteligentes o software a medida.</p>
              <ul className="space-y-1.5 text-sm text-gray-700 list-disc pl-5">
                <li><strong>Atención / WhatsApp:</strong> ¿Cómo reciben consultas? ¿Quién responde? ¿Se pierden chats? ¿Qué pasa fuera de horario?</li>
                <li><strong>IA Aplicada:</strong> ¿Hay tareas donde alguien tenga que leer, resumir, clasificar o redactar información repetitivamente?</li>
                <li><strong>Desarrollo a Medida:</strong> ¿Existen necesidades muy particulares del negocio que ninguna herramienta estándar cubre?</li>
              </ul>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 p-3 rounded text-sm text-yellow-900">
              <strong>Señales de alerta inmediata a anotar:</strong> <em>"Lo hacemos a mano", "Tenemos un Excel para eso", "Copiamos y pegamos", "Eso solo lo hace Juan", "Tenemos que cargarlo dos veces".</em>
            </div>
          </div>
        )
      },
      {
        id: "d-3",
        title: "3. Etapa 3 y 4 — Análisis y Detección de Oportunidades",
        content: (
          <div className="space-y-6">
            <div className="bg-red-50 p-4 rounded border-l-4 border-red-500">
              <h4 className="font-bold text-red-900 mb-1">Regla de Oro:</h4>
              <p className="text-sm text-red-800">No confundir el <strong>Síntoma</strong> con el <strong>Problema</strong>, ni el problema con la <strong>Causa</strong>.</p>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 mb-2">La Cadena de Análisis SinapsIA:</h4>
              <div className="flex flex-wrap gap-2 items-center font-mono text-xs sm:text-sm bg-[#09090b] text-white p-3.5 rounded justify-center">
                <span>Síntoma</span> <span className="text-[#f4b400]">→</span>
                <span>Causa</span> <span className="text-[#f4b400]">→</span>
                <span>Impacto</span> <span className="text-[#f4b400]">→</span>
                <span>Oportunidad</span> <span className="text-[#f4b400]">→</span>
                <span>Solución Posible</span>
              </div>
            </div>

            <div className="bg-gray-50 p-4 rounded border border-gray-200 text-sm space-y-2">
              <p><strong>Ejemplo práctico:</strong></p>
              <p><span className="text-gray-500">Síntoma:</span> "Tenemos muchos errores y demoras en los pedidos."</p>
              <p><span className="text-gray-500">Causa:</span> Los vendedores cargan en una app y administración lo vuelve a pasar a mano al sistema contable.</p>
              <p><span className="text-gray-500">Impacto:</span> 3 horas diarias perdidas, retrasos de entrega y quejas de clientes.</p>
              <p><span className="text-gray-500">Oportunidad:</span> Eliminar la doble carga manual.</p>
              <p><span className="font-bold text-[#09090b]">Solución:</span> Integración automática entre ambos sistemas (sin necesidad de cambiar ninguno).</p>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 mb-2">Las 6 Categorías de Oportunidad:</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 text-xs">
                <div className="bg-white border p-3 rounded"><strong className="text-[#f4b400] block text-sm">1. Optimizar</strong> Mejorar lo que ya funciona.</div>
                <div className="bg-white border p-3 rounded"><strong className="text-[#f4b400] block text-sm">2. Modernizar</strong> Actualizar software limitado.</div>
                <div className="bg-white border p-3 rounded"><strong className="text-[#f4b400] block text-sm">3. Automatizar</strong> Eliminar tareas repetitivas.</div>
                <div className="bg-white border p-3 rounded"><strong className="text-[#f4b400] block text-sm">4. Integrar</strong> Conectar sistemas aislados.</div>
                <div className="bg-white border p-3 rounded"><strong className="text-[#f4b400] block text-sm">5. IA</strong> Análisis, clasificación y atención inteligente.</div>
                <div className="bg-white border p-3 rounded"><strong className="text-[#f4b400] block text-sm">6. Desarrollar</strong> Construir cuando no hay estándar.</div>
              </div>
            </div>
          </div>
        )
      },
      {
        id: "d-4",
        title: "4. Filtros de Decisión Tecnológica",
        content: (
          <div className="space-y-6">
            <p className="text-sm text-gray-700">Guía rápida para determinar qué tipo de tecnología recomendar ante cada oportunidad:</p>
            
            {/* Filter IA */}
            <div className="bg-white border border-gray-200 p-4 rounded-lg shadow-xs">
              <h4 className="font-bold text-gray-900 mb-2 flex items-center justify-between">
                <span>¿Cuándo recomendar Inteligencia Artificial?</span>
                <span className="text-xs bg-[#f4b400]/20 text-gray-900 px-2 py-0.5 rounded font-bold">Filtro IA</span>
              </h4>
              <ul className="text-sm space-y-1 text-gray-700 list-disc pl-5">
                <li>Existe una tarea que involucra comprensión de texto, análisis de patrones, clasificación, síntesis o generación.</li>
                <li>El resultado genera un ahorro o mejora medible en la operación.</li>
                <li><strong>Criterio de descarte:</strong> Si una automatización por reglas tradicional resuelve el problema de forma más simple y barata, <em>no se usa IA</em>.</li>
              </ul>
            </div>

            {/* Filter Development */}
            <div className="bg-white border border-gray-200 p-4 rounded-lg shadow-xs">
              <h4 className="font-bold text-gray-900 mb-2 flex items-center justify-between">
                <span>¿Cuándo recomendar Desarrollo de Software a Medida?</span>
                <span className="text-xs bg-[#f4b400]/20 text-gray-900 px-2 py-0.5 rounded font-bold">Filtro Desarrollo</span>
              </h4>
              <ul className="text-sm space-y-1 text-gray-700 list-disc pl-5">
                <li>El problema no se resuelve optimizando, configurando o integrando lo existente.</li>
                <li>No existe un software en el mercado que se adapte al proceso particular de la empresa.</li>
                <li>Construir la herramienta propia genera una ventaja competitiva u operativa clara.</li>
              </ul>
            </div>

            {/* Filter Replacement vs Modernization */}
            <div className="bg-white border border-gray-200 p-4 rounded-lg shadow-xs">
              <h4 className="font-bold text-gray-900 mb-2 flex items-center justify-between">
                <span>¿Cuándo reemplazar o modernizar un sistema?</span>
                <span className="text-xs bg-[#f4b400]/20 text-gray-900 px-2 py-0.5 rounded font-bold">Filtro Reemplazo</span>
              </h4>
              <p className="text-sm text-gray-700 mb-2">Siempre evaluar la escala de menor a mayor impacto:</p>
              <div className="text-xs font-bold text-center bg-gray-100 p-2 rounded flex justify-center items-center gap-1">
                <span>Mantener</span> → <span>Mejorar</span> → <span>Modernizar</span> → <span>Integrar</span> → <span className="text-red-600">Reemplazar</span>
              </div>
            </div>
          </div>
        )
      },
      {
        id: "d-5",
        title: "5. Etapa 5 y 6 — Priorización y Recomendación",
        content: (
          <div className="space-y-6">
            <p>No todas las oportunidades deben implementarse al mismo tiempo. El valor de SinapsIA es ordenar la hoja de ruta.</p>
            
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-xs">
              <div className="bg-gray-50 px-4 py-2 border-b border-gray-200 font-bold text-gray-800 text-sm">Matriz de Priorización Rápida:</div>
              <div className="divide-y divide-gray-100 text-sm">
                <div className="p-3 flex items-center justify-between">
                  <div>
                    <span className="font-bold text-green-700 bg-green-50 px-2 py-0.5 rounded text-xs mr-2">ALTA</span>
                    <span>Alto impacto en el negocio + Viabilidad técnica razonable</span>
                  </div>
                  <span className="text-xs text-gray-500 font-semibold">Prioridad 1 (Quick Win / Core)</span>
                </div>
                <div className="p-3 flex items-center justify-between">
                  <div>
                    <span className="font-bold text-yellow-700 bg-yellow-50 px-2 py-0.5 rounded text-xs mr-2">MEDIA</span>
                    <span>Impacto interesante pero requiere mayor análisis previo</span>
                  </div>
                  <span className="text-xs text-gray-500 font-semibold">Prioridad 2</span>
                </div>
                <div className="p-3 flex items-center justify-between">
                  <div>
                    <span className="font-bold text-gray-600 bg-gray-100 px-2 py-0.5 rounded text-xs mr-2">BAJA</span>
                    <span>Bajo impacto, alta complejidad o poca urgencia</span>
                  </div>
                  <span className="text-xs text-gray-500 font-semibold">Descartar / Postergar</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-4 rounded border border-gray-200">
              <h4 className="font-bold text-gray-900 mb-2">Cómo estructurar la Recomendación:</h4>
              <p className="text-sm text-gray-700 mb-2">No entregar una lista interminable de problemas. Responder con claridad: <strong>"¿Qué conviene hacer primero y por qué?"</strong></p>
              <ul className="text-xs space-y-1 text-gray-600">
                <li>• <strong>Prioridad 1:</strong> [Acción concreta] — <em>Motivo: alto volumen manual y pérdida de oportunidades.</em></li>
                <li>• <strong>Prioridad 2:</strong> [Acción concreta] — <em>Motivo: duplicación de carga entre sistemas.</em></li>
                <li>• <strong>Prioridad 3:</strong> [Acción concreta] — <em>Motivo: optimización futura.</em></li>
              </ul>
            </div>
          </div>
        )
      },
      {
        id: "d-6",
        title: "6. Informe de Diagnóstico y Cierre Comercial",
        content: (
          <div className="space-y-6">
            <div className="bg-white border border-gray-200 p-4 rounded-lg shadow-xs">
              <h4 className="font-bold text-gray-900 mb-3 text-sm uppercase tracking-wide">Estructura del Informe (Breve y Ejecutivo):</h4>
              <ol className="list-decimal pl-5 space-y-1 text-sm text-gray-700">
                <li><strong>Resumen Ejecutivo:</strong> Breve descripción de la situación actual.</li>
                <li><strong>Situación Actual:</strong> Procesos y sistemas principales relevados.</li>
                <li><strong>Problemas Detectados:</strong> Principales fricciones encontradas.</li>
                <li><strong>Oportunidades:</strong> Mejoras potenciales identificadas.</li>
                <li><strong>Priorización:</strong> Qué conviene abordar primero.</li>
                <li><strong>Recomendación:</strong> Propuesta de hoja de ruta.</li>
                <li><strong>Próxima Etapa:</strong> Si corresponde, propuesta de implementación.</li>
              </ol>
            </div>

            <div className="bg-red-50 text-red-900 p-4 rounded-lg border-l-4 border-red-500 text-sm">
              <h4 className="font-bold mb-1">Límite del Diagnóstico Gratuito:</h4>
              <p className="mb-2">El diagnóstico genera confianza y valor, pero <strong>no debe convertirse en una consultoría técnica gratuita</strong>.</p>
              <p className="italic text-xs">NO entregar: arquitectura detallada, código, especificaciones técnicas exhaustivas ni documentación que permita a terceros implementar la solución sin SinapsIA.</p>
            </div>

            <div className="bg-[#09090b] text-white p-5 rounded-lg text-sm space-y-2">
              <h4 className="font-bold text-[#f4b400] text-base">¿Cuándo se convierte en Propuesta Comercial?</h4>
              <p className="text-gray-300">Cuando el problema es real, el cliente reconoce el impacto, existe capacidad de decisión/presupuesto, urgencia y SinapsIA tiene la solución técnica viable.</p>
            </div>

            <div className="border border-yellow-300 bg-yellow-50 p-4 rounded text-xs text-yellow-900">
              <strong>Señales de Alerta para detenerse:</strong> Si el cliente pide soluciones antes de explicar el problema, si nadie sabe cómo funciona el proceso interno o si la solución técnica no genera valor de negocio medible, se debe profundizar antes de cotizar.
            </div>
          </div>
        )
      }
    ]
  }
];
