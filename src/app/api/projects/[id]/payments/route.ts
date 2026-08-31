import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getSession } from "@/lib/auth";

// POST /api/projects/[id]/payments - Add a custom payment milestone
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
    const { concept, amount, milestone = "PERSONALIZADO", percentage, phaseId, dueDate, notes } = body;

    if (!concept || amount === undefined) {
      return NextResponse.json({ error: "Concepto y monto son requeridos" }, { status: 400 });
    }

    const payment = await prisma.payment.create({
      data: {
        projectId,
        phaseId: phaseId || null,
        concept,
        milestone: milestone as any,
        percentage: percentage ? parseInt(percentage) : null,
        amount: parseFloat(amount),
        status: "PENDIENTE",
        dueDate: dueDate ? new Date(dueDate) : null,
        notes: notes || null,
      },
    });

    return NextResponse.json(payment, { status: 201 });
  } catch (error: any) {
    console.error("Error creating payment:", error);
    return NextResponse.json(
      { error: error.message || "Error creating payment" },
      { status: 500 }
    );
  }
}
