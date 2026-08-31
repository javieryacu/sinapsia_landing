import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getSession } from "@/lib/auth";

// PATCH /api/projects/[id]/phases/[phaseId] - Update a phase
export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string; phaseId: string }> }
) {
  try {
    const session = await getSession();
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { phaseId } = await params;
    const body = await request.json();
    const { title, description, status, order, cost, deliveryDate, closedDate } = body;

    const updateData: any = {};
    if (title !== undefined) updateData.title = title;
    if (description !== undefined) updateData.description = description;
    if (status !== undefined) updateData.status = status;
    if (order !== undefined) updateData.order = parseInt(order);
    if (cost !== undefined) updateData.cost = cost ? parseFloat(cost) : null;
    if (deliveryDate !== undefined) updateData.deliveryDate = deliveryDate ? new Date(deliveryDate) : null;
    if (closedDate !== undefined) updateData.closedDate = closedDate ? new Date(closedDate) : null;

    // If status is moved to LISTO and no closedDate is given, auto set closedDate
    if (status === "LISTO" && !closedDate) {
      updateData.closedDate = new Date();
    }

    const phase = await prisma.projectPhase.update({
      where: { id: phaseId },
      data: updateData,
    });

    return NextResponse.json(phase);
  } catch (error: any) {
    console.error("Error updating phase:", error);
    return NextResponse.json(
      { error: error.message || "Error updating phase" },
      { status: 500 }
    );
  }
}

// DELETE /api/projects/[id]/phases/[phaseId] - Delete a phase
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string; phaseId: string }> }
) {
  try {
    const session = await getSession();
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { phaseId } = await params;

    await prisma.projectPhase.delete({
      where: { id: phaseId },
    });

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("Error deleting phase:", error);
    return NextResponse.json(
      { error: error.message || "Error deleting phase" },
      { status: 500 }
    );
  }
}
