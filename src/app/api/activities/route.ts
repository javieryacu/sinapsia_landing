import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getSession } from "@/lib/auth";

export async function GET() {
  try {
    const session = await getSession();
    if (!session) {
      return NextResponse.json({ error: "No autorizado" }, { status: 401 });
    }

    const activities = await prisma.activity.findMany({
      include: {
        opportunity: {
          select: { id: true, title: true, stage: true, company: { select: { name: true } } },
        },
        user: {
          select: { id: true, name: true, email: true },
        },
      },
      orderBy: { createdAt: "desc" },
      take: 50,
    });

    return NextResponse.json(activities);
  } catch (error) {
    console.error("Error fetching activities:", error);
    return NextResponse.json({ error: "Error al obtener actividades" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const session = await getSession();
    if (!session) {
      return NextResponse.json({ error: "No autorizado" }, { status: 401 });
    }

    const body = await request.json();
    const { opportunityId, type, content, scheduledFor } = body;

    if (!opportunityId || !content) {
      return NextResponse.json({ error: "Oportunidad y Contenido son obligatorios" }, { status: 400 });
    }

    const newActivity = await prisma.activity.create({
      data: {
        opportunityId,
        userId: session.id,
        type: type || "NOTE",
        content,
        scheduledFor: scheduledFor ? new Date(scheduledFor) : null,
      },
      include: {
        user: true,
        opportunity: true,
      },
    });

    return NextResponse.json(newActivity, { status: 201 });
  } catch (error) {
    console.error("Error creating activity:", error);
    return NextResponse.json({ error: "Error al crear actividad" }, { status: 500 });
  }
}
