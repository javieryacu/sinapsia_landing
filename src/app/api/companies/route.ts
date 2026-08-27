import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getSession } from "@/lib/auth";

export async function GET() {
  try {
    const session = await getSession();
    if (!session) {
      return NextResponse.json({ error: "No autorizado" }, { status: 401 });
    }

    const companies = await prisma.company.findMany({
      include: {
        contacts: true,
        opportunities: {
          select: { id: true, title: true, stage: true, estimatedValue: true },
        },
      },
      orderBy: { name: "asc" },
    });

    return NextResponse.json(companies);
  } catch (error) {
    console.error("Error fetching companies:", error);
    return NextResponse.json({ error: "Error al obtener empresas" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const session = await getSession();
    if (!session) {
      return NextResponse.json({ error: "No autorizado" }, { status: 401 });
    }

    const body = await request.json();
    const { name, industry, size, location, website, phone, notes } = body;

    if (!name) {
      return NextResponse.json({ error: "El nombre es obligatorio" }, { status: 400 });
    }

    const newCompany = await prisma.company.create({
      data: {
        name,
        industry: industry || null,
        size: size || null,
        location: location || null,
        website: website || null,
        phone: phone || null,
        notes: notes || null,
      },
      include: {
        contacts: true,
        opportunities: true,
      },
    });

    return NextResponse.json(newCompany, { status: 201 });
  } catch (error) {
    console.error("Error creating company:", error);
    return NextResponse.json({ error: "Error al crear empresa" }, { status: 500 });
  }
}
