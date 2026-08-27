import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getSession } from "@/lib/auth";

export async function GET() {
  try {
    const session = await getSession();
    if (!session) {
      return NextResponse.json({ error: "No autorizado" }, { status: 401 });
    }

    const [opportunities, totalCompanies, totalContacts] = await Promise.all([
      prisma.opportunity.findMany({
        include: {
          company: { select: { name: true } },
          activities: { take: 1, orderBy: { createdAt: "desc" } },
        },
      }),
      prisma.company.count(),
      prisma.contact.count(),
    ]);

    const stageCounts: Record<string, number> = {
      PROSPECCION: 0,
      CONVERSACION: 0,
      CALIFICACION: 0,
      DIAGNOSTICO: 0,
      PROPUESTA: 0,
      GANADO: 0,
      PERDIDO: 0,
    };

    let pipelineValue = 0;
    let wonValue = 0;

    opportunities.forEach((opp) => {
      if (stageCounts[opp.stage] !== undefined) {
        stageCounts[opp.stage]++;
      }
      if (opp.stage !== "PERDIDO" && opp.stage !== "GANADO" && opp.estimatedValue) {
        pipelineValue += opp.estimatedValue;
      }
      if (opp.stage === "GANADO" && opp.estimatedValue) {
        wonValue += opp.estimatedValue;
      }
    });

    const activeCount = opportunities.filter(
      (o) => o.stage !== "GANADO" && o.stage !== "PERDIDO"
    ).length;

    const winRate =
      stageCounts.GANADO + stageCounts.PERDIDO > 0
        ? Math.round(
            (stageCounts.GANADO / (stageCounts.GANADO + stageCounts.PERDIDO)) * 100
          )
        : 0;

    return NextResponse.json({
      activeCount,
      pipelineValue,
      wonValue,
      winRate,
      totalCompanies,
      totalContacts,
      stageCounts,
      recentOpportunities: opportunities.slice(0, 5),
    });
  } catch (error) {
    console.error("Error fetching stats:", error);
    return NextResponse.json({ error: "Error al calcular métricas" }, { status: 500 });
  }
}
