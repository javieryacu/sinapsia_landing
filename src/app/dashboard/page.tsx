"use client";

import { useEffect, useState } from "react";
import { Header } from "@/components/Header";
import Link from "next/link";
import {
  TrendingUp,
  Stethoscope,
  Building2,
  Users,
  ArrowUpRight,
  Kanban,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

type Stats = {
  activeCount: number;
  pipelineValue: number;
  wonValue: number;
  winRate: number;
  totalCompanies: number;
  totalContacts: number;
  stageCounts: Record<string, number>;
  recentOpportunities: Array<{
    id: string;
    title: string;
    stage: string;
    priority: string;
    estimatedValue: number | null;
    company: { name: string };
  }>;
};

const STAGE_LABELS: Record<string, string> = {
  PROSPECCION: "Prospección",
  CONVERSACION: "Conversación",
  CALIFICACION: "Calificación",
  DIAGNOSTICO: "Diagnóstico",
  PROPUESTA: "Propuesta",
  GANADO: "Ganado",
  PERDIDO: "Perdido",
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
      if (res.ok) {
        const data = await res.json();
        setStats(data);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const formatMoney = (val: number) => {
    return new Intl.NumberFormat("es-AR", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(val);
  };

  return (
    <div className="flex-1 flex flex-col font-['Hanken_Grotesk',sans-serif]">
      <Header
        title="Panel General"
        subtitle="Resumen de rendimiento y embudo comercial de SinapsIA"
        onNewAction={async () => {
          if (confirm("¿Estás seguro de que querés borrar todos los datos de prueba (empresas, prospectos y contactos)? Los usuarios registrados no se borrarán.")) {
            setLoading(true);
            try {
              const res = await fetch("/api/auth/clear-data", { method: "POST" });
              if (res.ok) {
                alert("Datos de prueba eliminados.");
                fetchStats();
              }
            } catch (err) {
              console.error(err);
            } finally {
              setLoading(false);
            }
          }
        }}
        newActionLabel="Limpiar Datos de Prueba"
      />

      <div className="p-8 space-y-8">
        {/* KPI Metrics Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* Active Deals */}
          <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-xs relative overflow-hidden">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-gray-500">
                  Oportunidades Activas
                </p>
                <h3 className="text-3xl font-black text-gray-900 mt-2">
                  {loading ? "..." : stats?.activeCount ?? 0}
                </h3>
              </div>
              <div className="p-2.5 bg-amber-50 rounded-lg text-[#f4b400]">
                <Kanban className="w-5 h-5" />
              </div>
            </div>
            <div className="mt-4 flex items-center gap-1 text-xs text-gray-600 font-medium">
              <span>Pipeline en gestión</span>
            </div>
          </div>

          {/* Pipeline Value */}
          <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-xs relative overflow-hidden">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-gray-500">
                  Valor en Pipeline
                </p>
                <h3 className="text-3xl font-black text-gray-900 mt-2">
                  {loading ? "..." : formatMoney(stats?.pipelineValue ?? 0)}
                </h3>
              </div>
              <div className="p-2.5 bg-blue-50 rounded-lg text-blue-600">
                <TrendingUp className="w-5 h-5" />
              </div>
            </div>
            <div className="mt-4 flex items-center gap-1 text-xs text-blue-700 font-medium">
              <span>Proyectos en negociación</span>
            </div>
          </div>

          {/* Diagnósticos en curso */}
          <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-xs relative overflow-hidden">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-gray-500">
                  Diagnósticos en Curso
                </p>
                <h3 className="text-3xl font-black text-gray-900 mt-2">
                  {loading ? "..." : stats?.stageCounts?.DIAGNOSTICO ?? 0}
                </h3>
              </div>
              <div className="p-2.5 bg-purple-50 rounded-lg text-purple-600">
                <Stethoscope className="w-5 h-5" />
              </div>
            </div>
            <div className="mt-4 flex items-center gap-1 text-xs text-purple-700 font-medium">
              <span>Puerta de entrada principal</span>
            </div>
          </div>

          {/* Cierres Ganados */}
          <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-xs relative overflow-hidden">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-gray-500">
                  Cierres Ganados
                </p>
                <h3 className="text-3xl font-black text-gray-900 mt-2">
                  {loading ? "..." : formatMoney(stats?.wonValue ?? 0)}
                </h3>
              </div>
              <div className="p-2.5 bg-emerald-50 rounded-lg text-emerald-600">
                <CheckCircle2 className="w-5 h-5" />
              </div>
            </div>
            <div className="mt-4 flex items-center gap-1 text-xs text-emerald-700 font-medium">
              <span>Tasa de éxito: {stats?.winRate ?? 0}%</span>
            </div>
          </div>
        </div>

        {/* Embudo y Progresión Comercial SinapsIA */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Pipeline Stage Breakdown */}
          <div className="lg:col-span-2 bg-white rounded-xl border border-gray-200 p-6 shadow-xs">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h3 className="font-bold text-gray-900 text-lg">Distribución por Etapas del Embudo</h3>
                <p className="text-xs text-gray-500 mt-0.5">Seguimiento según el Playbook Comercial</p>
              </div>
              <Link
                href="/dashboard/pipeline"
                className="text-xs font-bold text-[#09090b] hover:text-[#f4b400] flex items-center gap-1 transition-colors"
              >
                <span>Ver Tablero Kanban</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="space-y-4">
              {Object.entries(STAGE_LABELS).map(([key, label]) => {
                const count = stats?.stageCounts?.[key] ?? 0;
                const total = stats?.activeCount || 1;
                const pct = Math.min(100, Math.round((count / total) * 100));

                return (
                  <div key={key} className="space-y-1.5">
                    <div className="flex justify-between text-xs font-semibold">
                      <span className="text-gray-700">{label}</span>
                      <span className="text-gray-900 font-bold">{count} {count === 1 ? "prospecto" : "prospectos"}</span>
                    </div>
                    <div className="h-2.5 w-full bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all duration-500 ${
                          key === "DIAGNOSTICO"
                            ? "bg-[#f4b400]"
                            : key === "PROPUESTA"
                            ? "bg-blue-600"
                            : key === "GANADO"
                            ? "bg-emerald-500"
                            : "bg-gray-400"
                        }`}
                        style={{ width: `${Math.max(4, pct)}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Quick Stats / Accounts summary */}
          <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-xs flex flex-col justify-between">
            <div>
              <h3 className="font-bold text-gray-900 text-lg mb-1">Directorio B2B</h3>
              <p className="text-xs text-gray-500 mb-6">Base de cuentas y decisores</p>

              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl border border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-white rounded-lg border border-gray-200 text-gray-700">
                      <Building2 className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold uppercase text-gray-500">Empresas</div>
                      <div className="text-lg font-black text-gray-900">{stats?.totalCompanies ?? 0}</div>
                    </div>
                  </div>
                  <Link
                    href="/dashboard/companies"
                    className="text-xs font-bold text-[#09090b] hover:text-[#f4b400]"
                  >
                    Ver todas →
                  </Link>
                </div>

                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl border border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-white rounded-lg border border-gray-200 text-gray-700">
                      <Users className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold uppercase text-gray-500">Contactos</div>
                      <div className="text-lg font-black text-gray-900">{stats?.totalContacts ?? 0}</div>
                    </div>
                  </div>
                  <Link
                    href="/dashboard/contacts"
                    className="text-xs font-bold text-[#09090b] hover:text-[#f4b400]"
                  >
                    Ver todos →
                  </Link>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-gray-100 bg-[#f4b400]/10 p-4 rounded-xl">
              <div className="flex items-center gap-2 text-[#09090b] font-bold text-xs mb-1">
                <Sparkles className="w-4 h-4 text-[#f4b400]" />
                <span>Acción Recomendada</span>
              </div>
              <p className="text-xs text-gray-700 leading-relaxed">
                Priorizá los seguimientos en fase de <strong>Diagnóstico</strong> para convertirlos rápidamente en Propuestas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
