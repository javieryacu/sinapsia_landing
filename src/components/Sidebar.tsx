"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Kanban,
  LayoutDashboard,
  Building2,
  Users2,
  CalendarClock,
  Sparkles,
  LogOut,
  Target,
  BookOpen,
} from "lucide-react";

const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Pipeline Comercial", href: "/dashboard/pipeline", icon: Kanban },
  { name: "Empresas", href: "/dashboard/companies", icon: Building2 },
  { name: "Contactos", href: "/dashboard/contacts", icon: Users2 },
  { name: "Actividades & Follow-up", href: "/dashboard/activities", icon: CalendarClock },
  { name: "Equipo & Usuarios", href: "/dashboard/users", icon: Users },
  { name: "Manual / Playbook", href: "/playbook", icon: BookOpen },
];

export function Sidebar({ user }: { user?: { name: string; email: string } }) {
  const pathname = usePathname();

  const handleLogout = async () => {
    await fetch("/api/auth/logout", { method: "POST" });
    window.location.href = "/login";
  };

  return (
    <aside className="w-64 bg-[#09090b] text-white flex flex-col shrink-0 border-r border-neutral-800 h-screen sticky top-0 font-['Hanken_Grotesk',sans-serif]">
      {/* Brand Header */}
      <div className="p-6 border-b border-neutral-800/80">
        <Link href="/dashboard" className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-[#f4b400] flex items-center justify-center text-[#09090b] font-black text-lg">
            S
          </div>
          <div>
            <div className="font-extrabold text-base tracking-tight leading-none text-white">
              SINAPS<span className="text-[#f4b400]">IA</span>
            </div>
            <div className="text-[10px] text-neutral-400 font-medium tracking-wider uppercase mt-1">
              CRM Operativo
            </div>
          </div>
        </Link>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 p-4 space-y-1.5 overflow-y-auto">
        <div className="text-[11px] font-semibold uppercase tracking-wider text-neutral-500 px-3 mb-2">
          Gestión Comercial
        </div>
        {navigation.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center gap-3 px-3.5 py-2.5 rounded-lg text-sm font-medium transition-all ${
                isActive
                  ? "bg-[#f4b400] text-[#09090b] font-bold shadow-sm"
                  : "text-neutral-300 hover:bg-neutral-800/80 hover:text-white"
              }`}
            >
              <Icon className={`w-4 h-4 ${isActive ? "text-[#09090b]" : "text-neutral-400"}`} />
              <span>{item.name}</span>
            </Link>
          );
        })}

        <div className="pt-6">
          <div className="text-[11px] font-semibold uppercase tracking-wider text-neutral-500 px-3 mb-2">
            Metodología
          </div>
          <div className="bg-neutral-900/90 border border-neutral-800 rounded-lg p-3 text-xs text-neutral-300">
            <div className="flex items-center gap-1.5 text-[#f4b400] font-bold mb-1">
              <Target className="w-3.5 h-3.5" />
              <span>Regla N° 1</span>
            </div>
            <p className="text-[11px] text-neutral-400 leading-tight">
              Aprovechamos los sistemas que ya tienen. Desarrollamos lo que les falta.
            </p>
          </div>
        </div>
      </nav>

      {/* User & Logout Footer */}
      <div className="p-4 border-t border-neutral-800/80 bg-neutral-950/40">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5 overflow-hidden">
            <div className="w-8 h-8 rounded-full bg-neutral-800 border border-neutral-700 flex items-center justify-center text-xs font-bold text-white shrink-0">
              {user?.name?.[0] || "U"}
            </div>
            <div className="truncate">
              <div className="text-xs font-bold text-white truncate">{user?.name || "Usuario"}</div>
              <div className="text-[11px] text-neutral-400 truncate">{user?.email || "sinapsia.com.ar"}</div>
            </div>
          </div>
          <button
            onClick={handleLogout}
            title="Cerrar sesión"
            className="p-1.5 text-neutral-400 hover:text-red-400 hover:bg-neutral-800 rounded-md transition-colors"
          >
            <LogOut className="w-4 h-4" />
          </button>
        </div>
      </div>
    </aside>
  );
}
