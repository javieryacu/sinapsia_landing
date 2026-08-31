import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getSession } from "@/lib/auth";

export async function GET() {
  try {
    const session = await getSession();
    if (!session) return NextResponse.json({ error: "No autorizado" }, { status: 401 });

    const opportunities = await prisma.opportunity.findMany({
      include: {
        company: { select: { id: true, name: true, industry: true, location: true } },
        contact: { select: { id: true, name: true, role: true, email: true, phone: true, isDecisionMaker: true } },
        assignedUser: { select: { id: true, name: true, email: true } },
        activities: { orderBy: { createdAt: "desc" }, take: 5 },
        project: { select: { id: true, status: true, totalValue: true } },
      },
      orderBy: { updatedAt: "desc" },
    });

    return NextResponse.json(opportunities);
  } catch (error) {
    console.error("Error fetching opportunities:", error);
    return NextResponse.json({ error: "Error al obtener oportunidades" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const session = await getSession();
    if (!session) return NextResponse.json({ error: "No autorizado" }, { status: 401 });

    const body = await request.json();
    const { title, companyId, contactId, stage, priority, estimatedValue, summary, problemDescription, solutionType } = body;

    if (!title || !companyId) {
      return NextResponse.json({ error: "Título y Empresa son obligatorios" }, { status: 400 });
    }

    const newOpp = await prisma.opportunity.create({
      data: {
        title,
        companyId,
        contactId: contactId || null,
        assignedUserId: session.id,
        stage: stage || "PROSPECTO",
        priority: priority || "MEDIA",
        estimatedValue: estimatedValue ? parseFloat(estimatedValue) : null,
        summary: summary || null,
        problemDescription: problemDescription || null,
        solutionType: solutionType || null,
      },
      include: { company: true, contact: true, assignedUser: true, project: true },
    });

    return NextResponse.json(newOpp, { status: 201 });
  } catch (error) {
    console.error("Error creating opportunity:", error);
    return NextResponse.json({ error: "Error al crear oportunidad" }, { status: 500 });
  }
}
