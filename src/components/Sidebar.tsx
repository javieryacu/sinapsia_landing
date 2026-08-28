"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Kanban,
  LayoutDashboard,
  Building2,
  Users2,
  CalendarClock,
  LogOut,
  Target,
  BookOpen,
  Users,
  Menu,
  X,
} from "lucide-react";

const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Pipeline Comercial", href: "/dashboard/pipeline", icon: Kanban },
  { name: "Empresas", href: "/dashboard/companies", icon: Building2 },
  { name: "Contactos", href: "/dashboard/contacts", icon: Users2 },
  { name: "Actividades & Follow-up", href: "/dashboard/activities", icon: CalendarClock },
  { name: "Equipo & Usuarios", href: "/dashboard/users", icon: Users },
  { name: "Manual / Playbook", href: "/dashboard/playbook", icon: BookOpen },
];

export function Sidebar({ user }: { user?: { name: string; email: string } }) {
  const pathname = usePathname();
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const handleLogout = async () => {
    await fetch("/api/auth/logout", { method: "POST" });
    window.location.href = "/login";
  };

  const navContent = (
    <div className="flex flex-col h-full bg-[#09090b] text-white">
      {/* Brand Header */}
      <div className="p-5 border-b border-neutral-800/80 flex items-center justify-between">
        <Link
          href="/dashboard"
          onClick={() => setIsMobileOpen(false)}
          className="flex items-center gap-2.5"
        >
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
        <button
          onClick={() => setIsMobileOpen(false)}
          className="md:hidden p-1 text-neutral-400 hover:text-white"
        >
          <X className="w-5 h-5" />
        </button>
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
              onClick={() => setIsMobileOpen(false)}
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

        <div className="pt-4">
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
            className="p-1.5 text-neutral-400 hover:text-red-400 hover:bg-neutral-800 rounded-md transition-colors cursor-pointer"
          >
            <LogOut className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile Top Navbar with Hamburger */}
      <div className="md:hidden bg-[#09090b] text-white p-3.5 px-4 flex items-center justify-between sticky top-0 z-30 border-b border-neutral-800 shrink-0">
        <Link href="/dashboard" className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-[#f4b400] flex items-center justify-center text-[#09090b] font-black text-sm">
            S
          </div>
          <span className="font-extrabold text-sm tracking-tight">
            SINAPS<span className="text-[#f4b400]">IA</span> CRM
          </span>
        </Link>
        <button
          onClick={() => setIsMobileOpen(true)}
          className="p-2 text-neutral-300 hover:text-white rounded-lg cursor-pointer"
        >
          <Menu className="w-5 h-5" />
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      {isMobileOpen && (
        <div className="fixed inset-0 z-50 md:hidden bg-black/60 backdrop-blur-xs flex">
          <div className="w-72 max-w-[80vw] h-full shadow-2xl">
            {navContent}
          </div>
          <div className="flex-1" onClick={() => setIsMobileOpen(false)} />
        </div>
      )}

      {/* Desktop Permanent Sidebar */}
      <aside className="hidden md:flex w-64 shrink-0 border-r border-neutral-800 h-screen sticky top-0">
        {navContent}
      </aside>
    </>
  );
}
