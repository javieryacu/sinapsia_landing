import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getSession } from "@/lib/auth";

// GET /api/projects - List all projects
export async function GET(request: NextRequest) {
  try {
    const session = await getSession();
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const status = searchParams.get("status");
    const companyId = searchParams.get("companyId");
    const search = searchParams.get("search");

    const where: any = {};

    if (status && status !== "ALL") {
      where.status = status;
    }

    if (companyId) {
      where.companyId = companyId;
    }

    if (search) {
      where.OR = [
        { title: { contains: search, mode: "insensitive" } },
        { company: { name: { contains: search, mode: "insensitive" } } },
      ];
    }

    const projects = await prisma.project.findMany({
      where,
      include: {
        company: {
          select: {
            id: true,
            name: true,
            industry: true,
            location: true,
          },
        },
        opportunity: {
          select: {
            id: true,
            title: true,
            stage: true,
            solutionType: true,
          },
        },
        leadDeveloper: {
          select: {
            id: true,
            name: true,
            email: true,
            role: true,
          },
        },
        seller: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
        phases: {
          orderBy: { order: "asc" },
        },
        payments: {
          orderBy: { createdAt: "asc" },
        },
      },
      orderBy: { updatedAt: "desc" },
    });

    return NextResponse.json(projects);
  } catch (error: any) {
    console.error("Error fetching projects:", error);
    return NextResponse.json(
      { error: "Error fetching projects" },
      { status: 500 }
    );
  }
}

// POST /api/projects - Create a new project
export async function POST(request: NextRequest) {
  try {
    const session = await getSession();
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();
    const {
      title,
      companyId,
      opportunityId,
      leadDeveloperId,
      sellerId,
      description,
      totalValue = 0,
      initialPhases = [],
      createStandardPayments = true,
      startDate,
      estimatedEndDate,
    } = body;

    if (!title || !companyId) {
      return NextResponse.json(
        { error: "El título y la empresa son requeridos" },
        { status: 400 }
      );
    }

    const val = parseFloat(totalValue) || 0;

    // Build phases data
    const phasesData = (initialPhases.length > 0
      ? initialPhases
      : [
          { title: "Fase 1: Análisis profundo y arquitectura", order: 1 },
          { title: "Fase 2: Desarrollo del MVP y módulos base", order: 2 },
        ]
    ).map((p: any, idx: number) => ({
      title: p.title || `Fase ${idx + 1}`,
      description: p.description || null,
      order: p.order || idx + 1,
      status: (p.status as any) || "ANALISIS_PROFUNDO",
      isPostSale: false,
    }));

    // Build 30/40/30 standard payments if requested
    const paymentsData = createStandardPayments && val > 0
      ? [
          {
            concept: "Adelanto Inicial (30%)",
            milestone: "ADELANTO_30" as const,
            percentage: 30,
            amount: parseFloat((val * 0.3).toFixed(2)),
            status: "PENDIENTE" as const,
            notes: "Se factura al confirmar el proyecto para iniciar el desarrollo.",
          },
          {
            concept: "Entrega Pre-Producción (40%)",
            milestone: "PRE_PRODUCCION_40" as const,
            percentage: 40,
            amount: parseFloat((val * 0.4).toFixed(2)),
            status: "PENDIENTE" as const,
            notes: "Se factura al entregar las fases funcionales para testing del cliente.",
          },
          {
            concept: "Cierre y Validación Final (30%)",
            milestone: "CIERRE_30" as const,
            percentage: 30,
            amount: parseFloat((val * 0.3).toFixed(2)),
            status: "PENDIENTE" as const,
            notes: "Se factura tras la corrección de errores y aprobación final.",
          },
        ]
      : [];

    const project = await prisma.project.create({
      data: {
        title,
        companyId,
        opportunityId: opportunityId || null,
        leadDeveloperId: leadDeveloperId || null,
        sellerId: sellerId || session.id,
        description: description || null,
        totalValue: val,
        status: "PENDIENTE_INICIO",
        startDate: startDate ? new Date(startDate) : new Date(),
        estimatedEndDate: estimatedEndDate ? new Date(estimatedEndDate) : null,
        phases: {
          create: phasesData,
        },
        payments: {
          create: paymentsData,
        },
      },
      include: {
        company: true,
        opportunity: true,
        leadDeveloper: true,
        seller: true,
        phases: true,
        payments: true,
      },
    });

    // Make sure company is tagged as client
    await prisma.company.update({
      where: { id: companyId },
      data: { isClient: true },
    });

    return NextResponse.json(project, { status: 201 });
  } catch (error: any) {
    console.error("Error creating project:", error);
    return NextResponse.json(
      { error: error.message || "Error creating project" },
      { status: 500 }
    );
  }
}
