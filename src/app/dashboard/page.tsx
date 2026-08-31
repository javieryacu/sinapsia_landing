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
  FolderGit2,
  DollarSign,
  Clock,
  Layers,
} from "lucide-react";

type Stats = {
  activeCount: number;
  pipelineValue: number;
  wonValue: number;
  winRate: number;
  totalCompanies: number;
  totalContacts: number;
  diagnosisConversionRate: number;
  propuestaConversionRate: number;
  stageCounts: Record<string, number>;
  solutionTypeCounts: Record<string, number>;
  totalProjects: number;
  activeProjects: number;
  completedProjects: number;
  totalProjectPortfolioValue: number;
  totalCollected: number;
  totalPendingReceivables: number;
  recentOpportunities: any[];
  recentProjects: any[];
};

const STAGE_LABELS: Record<string, string> = {
  PROSPECTO:    "1. Prospecto",
  CONTACTO:     "2. Contacto",
  CONVERSACION: "3. Conversación",
  DIAGNOSTICO:  "4. Diagnóstico ★",
  PROPUESTA:    "5. Propuesta",
  GANADO:       "6. Ganado ✓",
  PERDIDO:      "Perdido",
};

const STAGE_COLORS: Record<string, string> = {
  PROSPECTO:    "bg-gray-400",
  CONTACTO:     "bg-blue-400",
  CONVERSACION: "bg-indigo-500",
  DIAGNOSTICO:  "bg-[#f4b400]",
  PROPUESTA:    "bg-purple-500",
  GANADO:       "bg-emerald-500",
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

  useEffect(() => {
    fetchStats();
  }, []);

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

  const formatMoney = (val?: number) =>
    new Intl.NumberFormat("es-AR", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(val || 0);

  const num = (n?: number) => (loading ? "..." : String(n ?? 0));
  const pct = (n?: number) => (loading ? "..." : `${n ?? 0}%`);

  return (
    <div className="flex-1 flex flex-col font-['Hanken_Grotesk',sans-serif]">
      <Header
        title="Panel General SinapsIA"
        subtitle="Control unificado de ventas consultivas, desarrollo ágil y cobranzas (30/40/30)"
      />

      <div className="p-4 sm:p-8 space-y-6 sm:space-y-8">
        {/* === SECTION 1: EMBUDO DE VENTAS === */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#f4b400]" />
              <h2 className="text-xs font-black uppercase tracking-wider text-gray-700">
                1. Embudo Comercial de Ventas (Visitas & WhatsApp)
              </h2>
            </div>
            <Link
              href="/dashboard/pipeline"
              className="text-xs font-bold text-gray-500 hover:text-black flex items-center gap-1"
            >
              <span>Ver Pipeline</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            <div className="bg-white p-4 sm:p-5 rounded-2xl border border-gray-200 shadow-xs">
              <div className="flex justify-between items-start">
                <span className="text-[10px] sm:text-xs font-bold text-gray-500 uppercase tracking-wider">
                  Prospectos Activos
                </span>
                <div className="p-2 bg-[#f4b400]/10 rounded-xl text-[#09090b]">
                  <Target className="w-4 h-4 text-[#f4b400]" />
                </div>
              </div>
              <div className="text-2xl sm:text-3xl font-black text-[#09090b] mt-2">
                {num(stats?.activeCount)}
              </div>
              <p className="text-[10px] text-gray-400 mt-1">En negociación</p>
            </div>

            <div className="bg-white p-4 sm:p-5 rounded-2xl border border-gray-200 shadow-xs">
              <div className="flex justify-between items-start">
                <span className="text-[10px] sm:text-xs font-bold text-gray-500 uppercase tracking-wider">
                  Pipeline Value
                </span>
                <div className="p-2 bg-indigo-50 rounded-xl text-indigo-700">
                  <TrendingUp className="w-4 h-4" />
                </div>
              </div>
              <div className="text-2xl sm:text-3xl font-black text-[#09090b] mt-2">
                {loading ? "..." : formatMoney(stats?.pipelineValue)}
              </div>
              <p className="text-[10px] text-gray-400 mt-1">Cotizaciones abiertas</p>
            </div>

            <div className="bg-white p-4 sm:p-5 rounded-2xl border border-gray-200 shadow-xs">
              <div className="flex justify-between items-start">
                <span className="text-[10px] sm:text-xs font-bold text-gray-500 uppercase tracking-wider">
                  Conv. a Diagnóstico
                </span>
                <div className="p-2 bg-amber-50 rounded-xl text-amber-800">
                  <Sparkles className="w-4 h-4" />
                </div>
              </div>
              <div className="text-2xl sm:text-3xl font-black text-amber-800 mt-2">
                {pct(stats?.diagnosisConversionRate)}
              </div>
              <p className="text-[10px] text-gray-400 mt-1">Puerta de entrada SinapsIA</p>
            </div>

            <div className="bg-white p-4 sm:p-5 rounded-2xl border border-gray-200 shadow-xs">
              <div className="flex justify-between items-start">
                <span className="text-[10px] sm:text-xs font-bold text-gray-500 uppercase tracking-wider">
                  Win Rate (Cierre)
                </span>
                <div className="p-2 bg-emerald-50 rounded-xl text-emerald-600">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
              </div>
              <div className="text-2xl sm:text-3xl font-black text-emerald-700 mt-2">
                {pct(stats?.winRate)}
              </div>
              <p className="text-[10px] text-gray-400 mt-1">Ganadas vs Perdidas</p>
            </div>
          </div>
        </div>

        {/* === SECTION 2: PROYECTOS & COBRANZAS === */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-600" />
              <h2 className="text-xs font-black uppercase tracking-wider text-gray-700">
                2. Desarrollo Ágil & Control de Cobros (30% / 40% / 30%)
              </h2>
            </div>
            <Link
              href="/dashboard/projects"
              className="text-xs font-bold text-gray-500 hover:text-black flex items-center gap-1"
            >
              <span>Ver Proyectos</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            <div className="bg-white p-4 sm:p-5 rounded-2xl border border-gray-200 shadow-xs">
              <div className="flex justify-between items-start">
                <span className="text-[10px] sm:text-xs font-bold text-gray-500 uppercase tracking-wider">
                  Proyectos Activos
                </span>
                <div className="p-2 bg-blue-50 rounded-xl text-blue-700">
                  <FolderGit2 className="w-4 h-4" />
                </div>
              </div>
              <div className="text-2xl sm:text-3xl font-black text-blue-900 mt-2">
                {num(stats?.activeProjects)}
              </div>
              <p className="text-[10px] text-gray-400 mt-1">{num(stats?.completedProjects)} completados</p>
            </div>

            <div className="bg-white p-4 sm:p-5 rounded-2xl border border-gray-200 shadow-xs">
              <div className="flex justify-between items-start">
                <span className="text-[10px] sm:text-xs font-bold text-gray-500 uppercase tracking-wider">
                  Cartera Contratada
                </span>
                <div className="p-2 bg-purple-50 rounded-xl text-purple-700">
                  <Layers className="w-4 h-4" />
                </div>
              </div>
              <div className="text-2xl sm:text-3xl font-black text-gray-900 mt-2">
                {loading ? "..." : formatMoney(stats?.totalProjectPortfolioValue)}
              </div>
              <p className="text-[10px] text-gray-400 mt-1">Total de proyectos</p>
            </div>

            <div className="bg-white p-4 sm:p-5 rounded-2xl border border-gray-200 shadow-xs">
              <div className="flex justify-between items-start">
                <span className="text-[10px] sm:text-xs font-bold text-gray-500 uppercase tracking-wider">
                  Cobrado Real
                </span>
                <div className="p-2 bg-emerald-50 rounded-xl text-emerald-700">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
              </div>
              <div className="text-2xl sm:text-3xl font-black text-emerald-700 mt-2">
                {loading ? "..." : formatMoney(stats?.totalCollected)}
              </div>
              <p className="text-[10px] text-emerald-600 font-bold mt-1">Cobrado en cuenta</p>
            </div>

            <div className="bg-white p-4 sm:p-5 rounded-2xl border border-gray-200 shadow-xs">
              <div className="flex justify-between items-start">
                <span className="text-[10px] sm:text-xs font-bold text-gray-500 uppercase tracking-wider">
                  Pendiente por Cobrar
                </span>
                <div className="p-2 bg-amber-50 rounded-xl text-amber-700">
                  <Clock className="w-4 h-4" />
                </div>
              </div>
              <div className="text-2xl sm:text-3xl font-black text-amber-900 mt-2">
                {loading ? "..." : formatMoney(stats?.totalPendingReceivables)}
              </div>
              <p className="text-[10px] text-amber-700 font-bold mt-1">Hitos 30 / 40 / 30</p>
            </div>
          </div>
        </div>

        {/* === SECTION 3: DISTRIBUCIÓN DEL EMBUDO Y SOLUCIONES === */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Funnel distribution */}
          <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-xs space-y-4">
            <h3 className="font-extrabold text-sm text-gray-900 flex items-center justify-between">
              <span>Distribución por Etapa de Ventas</span>
              <span className="text-xs text-gray-400 font-medium">
                Total: {stats?.activeCount ?? 0} activas
              </span>
            </h3>

            <div className="space-y-2.5">
              {Object.entries(STAGE_LABELS).map(([key, label]) => {
                const count = stats?.stageCounts?.[key] ?? 0;
                const total = stats?.activeCount || 1;
                const percentage = Math.round((count / total) * 100);
                const color = STAGE_COLORS[key] || "bg-gray-300";

                return (
                  <div key={key} className="space-y-1">
                    <div className="flex justify-between text-xs font-bold">
                      <span className="text-gray-700">{label}</span>
                      <span className="text-gray-900">
                        {count}{" "}
                        <span className="text-[10px] text-gray-400 font-normal">
                          ({percentage}%)
                        </span>
                      </span>
                    </div>
                    <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all ${color}`}
                        style={{ width: `${Math.min(percentage, 100)}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Solutions & Directory counts */}
          <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-xs space-y-5">
            <div>
              <h3 className="font-extrabold text-sm text-gray-900 mb-3">
                Distribución por Tipo de Solución SinapsIA
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {Object.entries(SOLUTION_LABELS).map(([key, label]) => {
                  const count = stats?.solutionTypeCounts?.[key] ?? 0;
                  return (
                    <div
                      key={key}
                      className="p-3 bg-gray-50 border border-gray-200 rounded-xl text-center"
                    >
                      <span className="text-[10px] font-bold text-gray-500 block uppercase truncate">
                        {label}
                      </span>
                      <span className="text-lg font-black text-gray-900 mt-0.5 block">
                        {count}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="pt-4 border-t border-gray-100 flex justify-between items-center text-xs">
              <div className="flex items-center gap-2">
                <Building2 className="w-4 h-4 text-gray-400" />
                <span className="text-gray-600 font-semibold">
                  Empresas en Directorio: <strong>{num(stats?.totalCompanies)}</strong>
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-gray-400" />
                <span className="text-gray-600 font-semibold">
                  Contactos Registrados: <strong>{num(stats?.totalContacts)}</strong>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
