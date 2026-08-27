import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getSession } from "@/lib/auth";

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await getSession();
    if (!session) {
      return NextResponse.json({ error: "No autorizado" }, { status: 401 });
    }

    const { id } = await params;
    const body = await request.json();

    const updated = await prisma.opportunity.update({
      where: { id },
      data: {
        ...(body.stage && { stage: body.stage }),
        ...(body.priority && { priority: body.priority }),
        ...(body.title && { title: body.title }),
        ...(body.estimatedValue !== undefined && { estimatedValue: body.estimatedValue ? parseFloat(body.estimatedValue) : null }),
        ...(body.summary !== undefined && { summary: body.summary }),
        ...(body.lostReason !== undefined && { lostReason: body.lostReason }),
        ...(body.contactId !== undefined && { contactId: body.contactId || null }),
      },
      include: {
        company: true,
        contact: true,
        assignedUser: true,
        activities: {
          orderBy: { createdAt: "desc" },
        },
      },
    });

    return NextResponse.json(updated);
  } catch (error) {
    console.error("Error updating opportunity:", error);
    return NextResponse.json({ error: "Error al actualizar oportunidad" }, { status: 500 });
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await getSession();
    if (!session) {
      return NextResponse.json({ error: "No autorizado" }, { status: 401 });
    }

    const { id } = await params;
    await prisma.opportunity.delete({
      where: { id },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error deleting opportunity:", error);
    return NextResponse.json({ error: "Error al eliminar oportunidad" }, { status: 500 });
  }
}
