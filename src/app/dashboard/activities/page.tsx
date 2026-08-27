"use client";

import { useEffect, useState } from "react";
import { Header } from "@/components/Header";
import {
  Building2,
  MessageSquare,
  PhoneCall,
  Calendar,
  CheckCircle2,
} from "lucide-react";
import Link from "next/link";

interface Activity {
  id: string;
  type: string;
  content: string;
  createdAt: string;
  opportunity: {
    id: string;
    title: string;
    stage: string;
    company: { name: string };
  };
  user: {
    name: string;
    email: string;
  };
}

export default function ActivitiesPage() {
  const [activities, setActivities] = useState<Activity[]>([]);

  useEffect(() => {
    fetchActivities();
  }, []);

  const fetchActivities = async () => {
    try {
      const res = await fetch("/api/activities");
      if (res.ok) {
        const data = await res.json();
        setActivities(data);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const getIcon = (type: string) => {
    switch (type) {
      case "CALL":
        return <PhoneCall className="w-4 h-4 text-blue-600" />;
      case "MEETING":
        return <Calendar className="w-4 h-4 text-purple-600" />;
      case "TASK":
        return <CheckCircle2 className="w-4 h-4 text-emerald-600" />;
      default:
        return <MessageSquare className="w-4 h-4 text-amber-600" />;
    }
  };

  return (
    <div className="flex-1 flex flex-col min-w-0 font-['Hanken_Grotesk',sans-serif]">
      <Header
        title="Historial de Actividades & Seguimiento"
        subtitle="Registro de llamadas, reuniones de diagnóstico y notas comerciales"
      />

      <div className="p-8 max-w-4xl space-y-6">
        {activities.length === 0 ? (
          <div className="bg-white rounded-xl p-12 border border-gray-200 text-center text-gray-400 text-sm">
            No hay actividades registradas aún. Al mover prospectos o agregar notas en el pipeline, aparecerán aquí.
          </div>
        ) : (
          <div className="space-y-3">
            {activities.map((act) => (
              <div
                key={act.id}
                className="bg-white rounded-xl border border-gray-200 p-5 shadow-xs flex items-start gap-4"
              >
                <div className="p-2.5 bg-gray-50 rounded-lg border border-gray-100 shrink-0">
                  {getIcon(act.type)}
                </div>

                <div className="flex-1 space-y-1.5 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-xs font-bold text-gray-900">
                        {act.user.name}
                      </span>
                      <span className="text-xs text-gray-400">•</span>
                      <Link
                        href="/dashboard/pipeline"
                        className="text-xs font-bold text-gray-700 hover:text-[#f4b400] flex items-center gap-1"
                      >
                        <Building2 className="w-3.5 h-3.5 text-gray-400" />
                        <span>{act.opportunity.company.name}</span>
                        <span className="text-gray-400 font-normal">({act.opportunity.title})</span>
                      </Link>
                    </div>
                    <span className="text-[11px] text-gray-400 shrink-0">
                      {new Date(act.createdAt).toLocaleString("es-AR", {
                        dateStyle: "short",
                        timeStyle: "short",
                      })}
                    </span>
                  </div>

                  <p className="text-sm text-gray-800 leading-relaxed">
                    {act.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
