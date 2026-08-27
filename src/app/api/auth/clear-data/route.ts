import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getSession } from "@/lib/auth";

export async function POST() {
  try {
    const session = await getSession();
    if (!session) {
      return NextResponse.json({ error: "No autorizado" }, { status: 401 });
    }

    // Delete all test data while preserving the current authenticated users
    await prisma.$transaction([
      prisma.activity.deleteMany(),
      prisma.opportunity.deleteMany(),
      prisma.contact.deleteMany(),
      prisma.company.deleteMany(),
    ]);

    return NextResponse.json({
      success: true,
      message: "Todos los datos de prueba han sido eliminados con éxito.",
    });
  } catch (error) {
    console.error("Error clearing test data:", error);
    return NextResponse.json(
      { error: "Error al limpiar los datos de prueba" },
      { status: 500 }
    );
  }
}
