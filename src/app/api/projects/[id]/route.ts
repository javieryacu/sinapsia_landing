import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getSession } from "@/lib/auth";

// GET /api/projects/[id]
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await getSession();
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { id } = await params;

    const project = await prisma.project.findUnique({
      where: { id },
      include: {
        company: {
          include: {
            contacts: true,
          },
        },
        opportunity: {
          include: {
            activities: {
              orderBy: { createdAt: "desc" },
              take: 10,
            },
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
          orderBy: [
            { isPostSale: "asc" },
            { order: "asc" },
          ],
        },
        payments: {
          orderBy: { createdAt: "asc" },
        },
      },
    });

    if (!project) {
      return NextResponse.json({ error: "Project not found" }, { status: 404 });
    }

    return NextResponse.json(project);
  } catch (error: any) {
    console.error("Error fetching project:", error);
    return NextResponse.json(
      { error: "Error fetching project" },
      { status: 500 }
    );
  }
}

// PATCH /api/projects/[id] - Update project details or status
export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await getSession();
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { id } = await params;
    const body = await request.json();
    const {
      title,
      description,
      status,
      leadDeveloperId,
      sellerId,
      totalValue,
      startDate,
      estimatedEndDate,
    } = body;

    const updateData: any = {};

    if (title !== undefined) updateData.title = title;
    if (description !== undefined) updateData.description = description;
    if (status !== undefined) updateData.status = status;
    if (leadDeveloperId !== undefined) updateData.leadDeveloperId = leadDeveloperId || null;
    if (sellerId !== undefined) updateData.sellerId = sellerId || null;
    if (totalValue !== undefined) updateData.totalValue = parseFloat(totalValue) || 0;
    if (startDate !== undefined) updateData.startDate = startDate ? new Date(startDate) : null;
    if (estimatedEndDate !== undefined) updateData.estimatedEndDate = estimatedEndDate ? new Date(estimatedEndDate) : null;

    const project = await prisma.project.update({
      where: { id },
      data: updateData,
      include: {
        company: true,
        opportunity: true,
        leadDeveloper: true,
        seller: true,
        phases: true,
        payments: true,
      },
    });

    return NextResponse.json(project);
  } catch (error: any) {
    console.error("Error updating project:", error);
    return NextResponse.json(
      { error: error.message || "Error updating project" },
      { status: 500 }
    );
  }
}

// DELETE /api/projects/[id]
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await getSession();
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { id } = await params;

    await prisma.project.delete({
      where: { id },
    });

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("Error deleting project:", error);
    return NextResponse.json(
      { error: error.message || "Error deleting project" },
      { status: 500 }
    );
  }
}
