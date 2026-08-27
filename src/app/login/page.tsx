"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Lock, Mail, ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("admin@sinapsia.com.ar");
  const [password, setPassword] = useState("sinapsia2026");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [seedLoading, setSeedLoading] = useState(false);
  const [seedMessage, setSeedMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Error al iniciar sesión");
      }

      router.push("/dashboard");
      router.refresh();
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Error al iniciar sesión");
    } finally {
      setLoading(false);
    }
  };

  const handleSeed = async () => {
    setSeedLoading(true);
    setSeedMessage("");
    try {
      const res = await fetch("/api/auth/seed", { method: "POST" });
      const data = await res.json();
      if (res.ok) {
        setSeedMessage("¡Base de datos inicializada con éxito!");
      }
    } catch {
      // ignore
    } finally {
      setSeedLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#09090b] flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 relative overflow-hidden font-['Hanken_Grotesk',sans-serif]">
      {/* Subtle tech background accents */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#f4b400]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-md space-y-8 relative z-10">
        {/* Brand Header */}
        <div className="text-center">
          <Link href="/" className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#f4b400] text-[#09090b] font-black text-2xl mb-4 shadow-lg shadow-[#f4b400]/20 hover:scale-105 transition-transform">
            S
          </Link>
          <h2 className="text-3xl font-black text-white tracking-tight">
            SINAPS<span className="text-[#f4b400]">IA</span>
          </h2>
          <p className="mt-2 text-sm text-neutral-400">
            Plataforma de Gestión y Seguimiento Comercial
          </p>
        </div>

        {/* Login Card */}
        <div className="bg-neutral-900/90 border border-neutral-800 rounded-2xl p-8 shadow-2xl backdrop-blur-xl">
          <form onSubmit={handleSubmit} className="space-y-5">
            {error && (
              <div className="p-3 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400 text-xs font-medium">
                {error}
              </div>
            )}

            {seedMessage && (
              <div className="p-3 bg-emerald-500/10 border border-emerald-500/30 rounded-lg text-emerald-400 text-xs font-medium flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>{seedMessage}</span>
              </div>
            )}

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-1.5">
                Correo Electrónico
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-neutral-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="usuario@sinapsia.com.ar"
                  className="w-full bg-neutral-950 border border-neutral-800 focus:border-[#f4b400] focus:ring-1 focus:ring-[#f4b400] rounded-lg pl-10 pr-4 py-2.5 text-sm text-white placeholder-neutral-500 outline-none transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-1.5">
                Contraseña
              </label>
              <div className="relative">
                <Lock className="w-4 h-4 text-neutral-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full bg-neutral-950 border border-neutral-800 focus:border-[#f4b400] focus:ring-1 focus:ring-[#f4b400] rounded-lg pl-10 pr-4 py-2.5 text-sm text-white placeholder-neutral-500 outline-none transition-all"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#f4b400] hover:bg-[#e0a400] text-[#09090b] font-extrabold text-sm py-3 rounded-lg flex items-center justify-center gap-2 transition-all transform active:scale-98 cursor-pointer disabled:opacity-50 shadow-md shadow-[#f4b400]/20"
            >
              {loading ? (
                <span>Ingresando...</span>
              ) : (
                <>
                  <span>Ingresar a la Plataforma</span>
                  <ArrowRight className="w-4 h-4 stroke-[3]" />
                </>
              )}
            </button>
          </form>

          {/* Quick Setup helper for initial DB deploy */}
          <div className="mt-6 pt-6 border-t border-neutral-800/80 text-center">
            <button
              type="button"
              onClick={handleSeed}
              disabled={seedLoading}
              className="text-xs text-neutral-400 hover:text-[#f4b400] flex items-center justify-center gap-1.5 mx-auto transition-colors cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>{seedLoading ? "Inicializando..." : "Inicializar datos de prueba en la base"}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
