import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getSession } from "@/lib/auth";

// POST /api/projects/[id]/phases - Add a new phase or post-sale feature
export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await getSession();
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { id: projectId } = await params;
    const body = await request.json();
    const { title, description, isPostSale = false, cost, createPayment = false } = body;

    if (!title) {
      return NextResponse.json({ error: "El título de la fase es requerido" }, { status: 400 });
    }

    // Count existing phases to get the order
    const count = await prisma.projectPhase.count({
      where: { projectId, isPostSale: !!isPostSale },
    });

    const phaseCost = cost ? parseFloat(cost) : null;

    const phase = await prisma.projectPhase.create({
      data: {
        projectId,
        title,
        description: description || null,
        order: count + 1,
        status: "ANALISIS_PROFUNDO",
        isPostSale: !!isPostSale,
        cost: phaseCost,
        startDate: new Date(),
      },
    });

    // If it's a post-sale feature and cost is provided, create the 100% payment milestone automatically if requested
    if (isPostSale && phaseCost && createPayment) {
      await prisma.payment.create({
        data: {
          projectId,
          phaseId: phase.id,
          concept: `Feature Post-Venta: ${title}`,
          milestone: "FEATURE_EXTRA",
          percentage: 100,
          amount: phaseCost,
          status: "PENDIENTE",
          notes: "Cobro al 100% contra entrega de la funcionalidad.",
        },
      });
    }

    return NextResponse.json(phase, { status: 201 });
  } catch (error: any) {
    console.error("Error creating phase:", error);
    return NextResponse.json(
      { error: error.message || "Error creating phase" },
      { status: 500 }
    );
  }
}
