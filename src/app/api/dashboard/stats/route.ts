import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getSession } from "@/lib/auth";

export async function GET() {
  try {
    const session = await getSession();
    if (!session) return NextResponse.json({ error: "No autorizado" }, { status: 401 });

    const [opportunities, totalCompanies, totalContacts] = await Promise.all([
      prisma.opportunity.findMany({
        include: {
          company: { select: { name: true } },
          activities: { take: 1, orderBy: { createdAt: "desc" } },
        },
        orderBy: { createdAt: "asc" },
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
      EJECUCION: 0,
      RECURRENTE: 0,
      PERDIDO: 0,
    };

    const solutionTypeCounts: Record<string, number> = {};
    let pipelineValue = 0;
    let wonValue = 0;
    let clientsInExecution = 0;

    opportunities.forEach((opp) => {
      if (stageCounts[opp.stage] !== undefined) stageCounts[opp.stage]++;

      // Pipeline value: stages before GANADO
      const closedStages = ["GANADO", "EJECUCION", "RECURRENTE", "PERDIDO"];
      if (!closedStages.includes(opp.stage) && opp.estimatedValue) {
        pipelineValue += opp.estimatedValue;
      }
      if (opp.stage === "GANADO" && opp.estimatedValue) wonValue += opp.estimatedValue;
      if (opp.stage === "EJECUCION" || opp.stage === "RECURRENTE") clientsInExecution++;

      // Count by solution type
      if (opp.solutionType) {
        solutionTypeCounts[opp.solutionType] = (solutionTypeCounts[opp.solutionType] || 0) + 1;
      }
    });

    const activeCount = opportunities.filter(
      (o) => !["GANADO", "EJECUCION", "RECURRENTE", "PERDIDO"].includes(o.stage)
    ).length;

    // Win rate (closed = GANADO vs PERDIDO)
    const totalClosed = stageCounts.GANADO + stageCounts.PERDIDO;
    const winRate = totalClosed > 0 ? Math.round((stageCounts.GANADO / totalClosed) * 100) : 0;

    // Conversion: Prospección → Diagnóstico rate
    const totalProspects = opportunities.length;
    const reachedDiagnosis = opportunities.filter((o) =>
      ["DIAGNOSTICO", "PROPUESTA", "GANADO", "EJECUCION", "RECURRENTE"].includes(o.stage)
    ).length;
    const diagnosisConversionRate = totalProspects > 0 ? Math.round((reachedDiagnosis / totalProspects) * 100) : 0;

    // Conversion: Diagnóstico → Propuesta
    const reachedPropuesta = opportunities.filter((o) =>
      ["PROPUESTA", "GANADO", "EJECUCION", "RECURRENTE"].includes(o.stage)
    ).length;
    const propuestaConversionRate = reachedDiagnosis > 0 ? Math.round((reachedPropuesta / reachedDiagnosis) * 100) : 0;

    return NextResponse.json({
      activeCount,
      pipelineValue,
      wonValue,
      winRate,
      totalCompanies,
      totalContacts,
      stageCounts,
      solutionTypeCounts,
      clientsInExecution,
      diagnosisConversionRate,
      propuestaConversionRate,
      recentOpportunities: opportunities.slice(-5).reverse(),
    });
  } catch (error) {
    console.error("Error fetching stats:", error);
    return NextResponse.json({ error: "Error al calcular métricas" }, { status: 500 });
  }
}
