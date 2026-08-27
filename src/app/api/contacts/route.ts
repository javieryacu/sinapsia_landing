import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getSession } from "@/lib/auth";

export async function GET() {
  try {
    const session = await getSession();
    if (!session) {
      return NextResponse.json({ error: "No autorizado" }, { status: 401 });
    }

    const contacts = await prisma.contact.findMany({
      include: {
        company: {
          select: { id: true, name: true, industry: true },
        },
      },
      orderBy: { name: "asc" },
    });

    return NextResponse.json(contacts);
  } catch (error) {
    console.error("Error fetching contacts:", error);
    return NextResponse.json({ error: "Error al obtener contactos" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const session = await getSession();
    if (!session) {
      return NextResponse.json({ error: "No autorizado" }, { status: 401 });
    }

    const body = await request.json();
    const { companyId, name, email, phone, role, isDecisionMaker } = body;

    if (!name || !companyId) {
      return NextResponse.json({ error: "Nombre y Empresa son obligatorios" }, { status: 400 });
    }

    const newContact = await prisma.contact.create({
      data: {
        companyId,
        name,
        email: email || null,
        phone: phone || null,
        role: role || null,
        isDecisionMaker: !!isDecisionMaker,
      },
      include: { company: true },
    });

    return NextResponse.json(newContact, { status: 201 });
  } catch (error) {
    console.error("Error creating contact:", error);
    return NextResponse.json({ error: "Error al crear contacto" }, { status: 500 });
  }
}
