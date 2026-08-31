import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getSession } from "@/lib/auth";

export async function GET() {
  try {
    const session = await getSession();
    if (!session) return NextResponse.json({ error: "No autorizado" }, { status: 401 });

    const [opportunities, totalCompanies, totalContacts, projects, payments] = await Promise.all([
      prisma.opportunity.findMany({
        include: {
          company: { select: { name: true } },
          activities: { take: 1, orderBy: { createdAt: "desc" } },
          project: { select: { id: true, status: true, totalValue: true } },
        },
        orderBy: { createdAt: "asc" },
      }),
      prisma.company.count(),
      prisma.contact.count(),
      prisma.project.findMany({
        include: {
          company: { select: { name: true } },
          phases: true,
          payments: true,
        },
      }),
      prisma.payment.findMany(),
    ]);

    const stageCounts: Record<string, number> = {
      PROSPECTO: 0,
      CONTACTO: 0,
      CONVERSACION: 0,
      DIAGNOSTICO: 0,
      PROPUESTA: 0,
      GANADO: 0,
      PERDIDO: 0,
    };

    const solutionTypeCounts: Record<string, number> = {};
    let pipelineValue = 0;
    let wonValue = 0;

    opportunities.forEach((opp) => {
      if (stageCounts[opp.stage] !== undefined) {
        stageCounts[opp.stage]++;
      } else {
        // Fallback for legacy stage keys if any
        if (opp.stage === ("PROSPECCION" as any)) stageCounts.PROSPECTO++;
        else if (opp.stage === ("CALIFICACION" as any)) stageCounts.CONVERSACION++;
        else if (opp.stage === ("EJECUCION" as any) || opp.stage === ("RECURRENTE" as any)) stageCounts.GANADO++;
      }

      // Pipeline value: stages before GANADO/PERDIDO
      const openStages = ["PROSPECTO", "CONTACTO", "CONVERSACION", "DIAGNOSTICO", "PROPUESTA", "PROSPECCION", "CALIFICACION"];
      if (openStages.includes(opp.stage) && opp.estimatedValue) {
        pipelineValue += opp.estimatedValue;
      }
      if (opp.stage === "GANADO" && opp.estimatedValue) {
        wonValue += opp.estimatedValue;
      }

      // Count by solution type
      if (opp.solutionType) {
        solutionTypeCounts[opp.solutionType] = (solutionTypeCounts[opp.solutionType] || 0) + 1;
      }
    });

    const activeCount = opportunities.filter((o) =>
      ["PROSPECTO", "CONTACTO", "CONVERSACION", "DIAGNOSTICO", "PROPUESTA", "PROSPECCION", "CALIFICACION"].includes(o.stage)
    ).length;

    // Win rate (closed = GANADO vs PERDIDO)
    const totalClosed = stageCounts.GANADO + stageCounts.PERDIDO;
    const winRate = totalClosed > 0 ? Math.round((stageCounts.GANADO / totalClosed) * 100) : 0;

    // Conversion: Funnel to Diagnosis
    const totalProspects = opportunities.length;
    const reachedDiagnosis = opportunities.filter((o) =>
      ["DIAGNOSTICO", "PROPUESTA", "GANADO"].includes(o.stage)
    ).length;
    const diagnosisConversionRate = totalProspects > 0 ? Math.round((reachedDiagnosis / totalProspects) * 100) : 0;

    // Conversion: Diagnosis to Proposal
    const reachedPropuesta = opportunities.filter((o) =>
      ["PROPUESTA", "GANADO"].includes(o.stage)
    ).length;
    const propuestaConversionRate = reachedDiagnosis > 0 ? Math.round((reachedPropuesta / reachedDiagnosis) * 100) : 0;

    // Project & Billing stats
    const totalProjects = projects.length;
    const activeProjects = projects.filter((p) =>
      ["PENDIENTE_INICIO", "EN_DESARROLLO", "PRE_PRODUCCION"].includes(p.status)
    ).length;
    const completedProjects = projects.filter((p) => p.status === "COMPLETADO").length;

    let totalProjectPortfolioValue = 0;
    projects.forEach((p) => {
      totalProjectPortfolioValue += p.totalValue || 0;
    });

    let totalCollected = 0;
    let totalPendingReceivables = 0;
    let totalBilled = 0;

    payments.forEach((pay) => {
      if (pay.status === "COBRADO") {
        totalCollected += pay.amount;
      } else if (pay.status === "FACTURADO") {
        totalBilled += pay.amount;
        totalPendingReceivables += pay.amount;
      } else {
        totalPendingReceivables += pay.amount;
      }
    });

    return NextResponse.json({
      activeCount,
      pipelineValue,
      wonValue,
      winRate,
      totalCompanies,
      totalContacts,
      stageCounts,
      solutionTypeCounts,
      diagnosisConversionRate,
      propuestaConversionRate,
      // Project metrics
      totalProjects,
      activeProjects,
      completedProjects,
      totalProjectPortfolioValue,
      totalCollected,
      totalPendingReceivables,
      totalBilled,
      recentOpportunities: opportunities.slice(-5).reverse(),
      recentProjects: projects.slice(-4).reverse(),
    });
  } catch (error) {
    console.error("Error fetching stats:", error);
    return NextResponse.json({ error: "Error al calcular métricas" }, { status: 500 });
  }
}
