import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getSession } from "@/lib/auth";

// PATCH /api/projects/[id]/payments/[paymentId] - Update a payment milestone
export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string; paymentId: string }> }
) {
  try {
    const session = await getSession();
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { paymentId } = await params;
    const body = await request.json();
    const { concept, amount, status, dueDate, paidDate, notes } = body;

    const updateData: any = {};
    if (concept !== undefined) updateData.concept = concept;
    if (amount !== undefined) updateData.amount = parseFloat(amount);
    if (status !== undefined) {
      updateData.status = status;
      if (status === "COBRADO" && !paidDate) {
        updateData.paidDate = new Date();
      }
    }
    if (dueDate !== undefined) updateData.dueDate = dueDate ? new Date(dueDate) : null;
    if (paidDate !== undefined) updateData.paidDate = paidDate ? new Date(paidDate) : null;
    if (notes !== undefined) updateData.notes = notes;

    const payment = await prisma.payment.update({
      where: { id: paymentId },
      data: updateData,
    });

    return NextResponse.json(payment);
  } catch (error: any) {
    console.error("Error updating payment:", error);
    return NextResponse.json(
      { error: error.message || "Error updating payment" },
      { status: 500 }
    );
  }
}

// DELETE /api/projects/[id]/payments/[paymentId] - Delete a payment
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string; paymentId: string }> }
) {
  try {
    const session = await getSession();
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { paymentId } = await params;

    await prisma.payment.delete({
      where: { id: paymentId },
    });

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("Error deleting payment:", error);
    return NextResponse.json(
      { error: error.message || "Error deleting payment" },
      { status: 500 }
    );
  }
}
