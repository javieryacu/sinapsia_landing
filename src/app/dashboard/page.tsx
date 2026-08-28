"use client";

import { useEffect, useState } from "react";
import { Header } from "@/components/Header";
import Link from "next/link";
import {
  TrendingUp,
  Building2,
  Users,
  ArrowUpRight,
  Kanban,
  CheckCircle2,
  Sparkles,
  Target,
  Cpu,
  Stethoscope,
  Rocket,
  RefreshCw,
} from "lucide-react";

type Stats = {
  activeCount: number;
  pipelineValue: number;
  wonValue: number;
  winRate: number;
  totalCompanies: number;
  totalContacts: number;
  clientsInExecution: number;
  diagnosisConversionRate: number;
  propuestaConversionRate: number;
  stageCounts: Record<string, number>;
  solutionTypeCounts: Record<string, number>;
};

const STAGE_LABELS: Record<string, string> = {
  PROSPECCION:  "Prospección",
  CONVERSACION: "Conversación",
  CALIFICACION: "Calificación",
  DIAGNOSTICO:  "Diagnóstico",
  PROPUESTA:    "Propuesta",
  GANADO:       "Ganado",
  EJECUCION:    "En Ejecución",
  RECURRENTE:   "Cliente Activo",
  PERDIDO:      "Perdido",
};

const STAGE_COLORS: Record<string, string> = {
  PROSPECCION:  "bg-gray-400",
  CONVERSACION: "bg-blue-400",
  CALIFICACION: "bg-indigo-500",
  DIAGNOSTICO:  "bg-[#f4b400]",
  PROPUESTA:    "bg-purple-500",
  GANADO:       "bg-emerald-500",
  EJECUCION:    "bg-teal-500",
  RECURRENTE:   "bg-sky-500",
  PERDIDO:      "bg-red-400",
};

const SOLUTION_LABELS: Record<string, string> = {
  OPTIMIZAR:               "Optimizar",
  AUTOMATIZAR:             "Automatizar",
  INTEGRAR:                "Integrar",
  INTELIGENCIA_ARTIFICIAL: "IA",
  DESARROLLAR:             "Desarrollar",
  COMBINADO:               "Combinado",
};

export default function DashboardPage() {
  const [stats, setStats] = useState<Stats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => { fetchStats(); }, []);

  const fetchStats = async () => {
    try {
      const res = await fetch("/api/dashboard/stats");
      if (res.ok) setStats(await res.json());
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const formatMoney = (val: number) =>
    new Intl.NumberFormat("es-AR", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(val);

  const num = (n?: number) => (loading ? "..." : String(n ?? 0));
  const pct = (n?: number) => (loading ? "..." : `${n ?? 0}%`);

  return (
    <div className="flex-1 flex flex-col font-['Hanken_Grotesk',sans-serif]">
      <Header
        title="Panel General"
        subtitle="Métricas según el Playbook Comercial SinapsIA"
      />

      <div className="p-4 sm:p-8 space-y-6 sm:space-y-8">

        {/* === KPIs Row 1: Embudo activo === */}
        <div>
          <h2 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">Embudo Comercial Activo</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">

            {/* Oportunidades activas */}
            <div className="bg-white rounded-xl p-5 border border-gray-200 shadow-xs">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-gray-500">Prospectos Activos</p>
                  <h3 className="text-3xl font-black text-gray-900 mt-1">{num(stats?.activeCount)}</h3>
                </div>
                <div className="p-2.5 bg-amber-50 rounded-lg text-[#f4b400]">
                  <Kanban className="w-5 h-5" />
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-3">En gestión comercial</p>
            </div>

            {/* Valor en pipeline */}
            <div className="bg-white rounded-xl p-5 border border-gray-200 shadow-xs">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-gray-500">Valor en Pipeline</p>
                  <h3 className="text-2xl font-black text-gray-900 mt-1">
                    {loading ? "..." : formatMoney(stats?.pipelineValue ?? 0)}
                  </h3>
                </div>
                <div className="p-2.5 bg-blue-50 rounded-lg text-blue-600">
                  <TrendingUp className="w-5 h-5" />
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-3">En negociación activa</p>
            </div>

            {/* Diagnósticos en curso — la puerta de entrada */}
            <div className="bg-white rounded-xl p-5 border border-[#f4b400]/40 shadow-xs">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-amber-700">Diagnósticos</p>
                  <h3 className="text-3xl font-black text-gray-900 mt-1">{num(stats?.stageCounts?.DIAGNOSTICO)}</h3>
                </div>
                <div className="p-2.5 bg-[#f4b400]/10 rounded-lg text-[#f4b400]">
                  <Stethoscope className="w-5 h-5" />
                </div>
              </div>
              <p className="text-xs text-amber-700 font-medium mt-3">Puerta de entrada clave</p>
            </div>

            {/* Win Rate */}
            <div className="bg-white rounded-xl p-5 border border-gray-200 shadow-xs">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-gray-500">Tasa de Cierre</p>
                  <h3 className="text-3xl font-black text-gray-900 mt-1">{pct(stats?.winRate)}</h3>
                </div>
                <div className="p-2.5 bg-emerald-50 rounded-lg text-emerald-600">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-3">
                {loading ? "" : `${stats?.stageCounts?.GANADO ?? 0} ganados vs ${stats?.stageCounts?.PERDIDO ?? 0} perdidos`}
              </p>
            </div>
          </div>
        </div>

        {/* === KPIs Row 2: Clientes activos (post-cierre) === */}
        <div>
          <h2 className="text-xs font-bold uppercase tracking-widest text-emerald-500 mb-3">Clientes Activos & Recurrencia</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">

            <div className="bg-white rounded-xl p-5 border border-emerald-200 shadow-xs">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-emerald-700">En Ejecución</p>
                  <h3 className="text-3xl font-black text-gray-900 mt-1">{num(stats?.stageCounts?.EJECUCION)}</h3>
                </div>
                <div className="p-2.5 bg-teal-50 rounded-lg text-teal-600">
                  <Rocket className="w-5 h-5" />
                </div>
              </div>
              <p className="text-xs text-emerald-600 font-medium mt-3">Implementación en curso</p>
            </div>

            <div className="bg-white rounded-xl p-5 border border-sky-200 shadow-xs">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-sky-700">Clientes Recurrentes</p>
                  <h3 className="text-3xl font-black text-gray-900 mt-1">{num(stats?.stageCounts?.RECURRENTE)}</h3>
                </div>
                <div className="p-2.5 bg-sky-50 rounded-lg text-sky-600">
                  <RefreshCw className="w-5 h-5" />
                </div>
              </div>
              <p className="text-xs text-sky-600 font-medium mt-3">Relación continua activa</p>
            </div>

            <div className="bg-white rounded-xl p-5 border border-gray-200 shadow-xs">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-gray-500">Ingresos Cerrados</p>
                  <h3 className="text-2xl font-black text-gray-900 mt-1">
                    {loading ? "..." : formatMoney(stats?.wonValue ?? 0)}
                  </h3>
                </div>
                <div className="p-2.5 bg-emerald-50 rounded-lg text-emerald-600">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-3">Proyectos ganados</p>
            </div>

            <div className="bg-white rounded-xl p-5 border border-gray-200 shadow-xs">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-gray-500">Directorio B2B</p>
                  <h3 className="text-3xl font-black text-gray-900 mt-1">{num(stats?.totalCompanies)}</h3>
                </div>
                <div className="p-2.5 bg-gray-100 rounded-lg text-gray-600">
                  <Building2 className="w-5 h-5" />
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-3">{num(stats?.totalContacts)} contactos registrados</p>
            </div>
          </div>
        </div>

        {/* === Tasas de conversión (Playbook §15) + Embudo === */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* Embudo por etapas */}
          <div className="lg:col-span-2 bg-white rounded-xl border border-gray-200 p-6 shadow-xs">
            <div className="flex justify-between items-center mb-5">
              <div>
                <h3 className="font-bold text-gray-900">Distribución del Embudo Comercial</h3>
                <p className="text-xs text-gray-500 mt-0.5">Todas las etapas según Playbook</p>
              </div>
              <Link href="/dashboard/pipeline" className="text-xs font-bold text-[#09090b] hover:text-[#f4b400] flex items-center gap-1">
                <span>Ver Tablero</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="space-y-3">
              {Object.entries(STAGE_LABELS).map(([key, label]) => {
                const count = stats?.stageCounts?.[key] ?? 0;
                const total = Math.max(1, Object.values(stats?.stageCounts ?? {}).reduce((a, b) => a + b, 0));
                const pct = Math.min(100, Math.round((count / total) * 100));
                return (
                  <div key={key} className="space-y-1">
                    <div className="flex justify-between text-xs font-semibold">
                      <span className="text-gray-700">{label}</span>
                      <span className="text-gray-900 font-bold">{count}</span>
                    </div>
                    <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all duration-500 ${STAGE_COLORS[key]}`}
                        style={{ width: `${Math.max(count > 0 ? 4 : 0, pct)}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Tasas de conversión + Tipo de solución */}
          <div className="space-y-4">
            {/* Tasas de conversión — Playbook §15 */}
            <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-xs space-y-4">
              <div className="flex items-center gap-2">
                <Target className="w-4 h-4 text-[#f4b400]" />
                <h3 className="font-bold text-gray-900 text-sm">Tasas de Conversión</h3>
              </div>

              <div className="space-y-3 text-sm">
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-gray-600">Prospecto → Diagnóstico</span>
                    <span className="font-black text-[#f4b400]">{pct(stats?.diagnosisConversionRate)}</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full">
                    <div className="h-2 bg-[#f4b400] rounded-full" style={{ width: `${stats?.diagnosisConversionRate ?? 0}%` }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-gray-600">Diagnóstico → Propuesta</span>
                    <span className="font-black text-purple-600">{pct(stats?.propuestaConversionRate)}</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full">
                    <div className="h-2 bg-purple-500 rounded-full" style={{ width: `${stats?.propuestaConversionRate ?? 0}%` }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-gray-600">Tasa de Cierre</span>
                    <span className="font-black text-emerald-600">{pct(stats?.winRate)}</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full">
                    <div className="h-2 bg-emerald-500 rounded-full" style={{ width: `${stats?.winRate ?? 0}%` }} />
                  </div>
                </div>
              </div>
            </div>

            {/* Tipo de solución dominante */}
            <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-xs">
              <div className="flex items-center gap-2 mb-3">
                <Cpu className="w-4 h-4 text-gray-500" />
                <h3 className="font-bold text-gray-900 text-sm">Tipo de Solución</h3>
              </div>
              {stats && Object.keys(stats.solutionTypeCounts || {}).length > 0 ? (
                <div className="space-y-2">
                  {Object.entries(stats.solutionTypeCounts).sort((a, b) => b[1] - a[1]).map(([key, count]) => (
                    <div key={key} className="flex justify-between text-xs">
                      <span className="text-gray-700">{SOLUTION_LABELS[key] || key}</span>
                      <span className="font-bold text-gray-900">{count}</span>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-xs text-gray-400 italic">Sin datos aún. Se completará al registrar oportunidades con tipo de solución.</p>
              )}
            </div>

            {/* Acción recomendada */}
            <div className="bg-[#f4b400]/10 border border-[#f4b400]/30 rounded-xl p-4">
              <div className="flex items-center gap-2 text-[#09090b] font-bold text-xs mb-1.5">
                <Sparkles className="w-4 h-4 text-[#f4b400]" />
                Acción Recomendada
              </div>
              <p className="text-xs text-gray-700 leading-relaxed">
                {(stats?.stageCounts?.DIAGNOSTICO ?? 0) > 0
                  ? `Hay ${stats?.stageCounts?.DIAGNOSTICO} diagnóstico${stats?.stageCounts?.DIAGNOSTICO === 1 ? "" : "s"} en curso. Priorizá convertirlos en Propuestas.`
                  : (stats?.stageCounts?.CALIFICACION ?? 0) > 0
                  ? `Hay ${stats?.stageCounts?.CALIFICACION} prospecto${stats?.stageCounts?.CALIFICACION === 1 ? "" : "s"} en Calificación. Buscá conseguir el Diagnóstico.`
                  : "Registrá nuevas oportunidades en el Pipeline para comenzar el proceso comercial."}
              </p>
              <Link
                href="/dashboard/pipeline"
                className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-[#09090b] hover:text-[#f4b400] transition-colors"
              >
                <span>Ir al Pipeline</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Directorio */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link href="/dashboard/companies" className="bg-white rounded-xl border border-gray-200 p-5 shadow-xs hover:border-[#f4b400] transition-colors flex items-center justify-between group">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-gray-100 rounded-lg group-hover:bg-[#f4b400]/10 transition-colors">
                <Building2 className="w-5 h-5 text-gray-700" />
              </div>
              <div>
                <p className="text-xs text-gray-500 font-bold uppercase">Empresas</p>
                <p className="text-xl font-black text-gray-900">{num(stats?.totalCompanies)}</p>
              </div>
            </div>
            <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-[#f4b400]" />
          </Link>
          <Link href="/dashboard/contacts" className="bg-white rounded-xl border border-gray-200 p-5 shadow-xs hover:border-[#f4b400] transition-colors flex items-center justify-between group">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-gray-100 rounded-lg group-hover:bg-[#f4b400]/10 transition-colors">
                <Users className="w-5 h-5 text-gray-700" />
              </div>
              <div>
                <p className="text-xs text-gray-500 font-bold uppercase">Contactos</p>
                <p className="text-xl font-black text-gray-900">{num(stats?.totalContacts)}</p>
              </div>
            </div>
            <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-[#f4b400]" />
          </Link>
        </div>

      </div>
    </div>
  );
}
