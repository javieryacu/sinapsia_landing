import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { hashPassword } from "@/lib/auth";

export async function POST() {
  try {
    let admin = await prisma.user.findUnique({
      where: { email: "admin@sinapsia.com.ar" },
    });

    if (!admin) {
      const hashedPassword = await hashPassword("sinapsia2026");
      admin = await prisma.user.create({
        data: {
          email: "admin@sinapsia.com.ar",
          name: "Javier (Admin)",
          password: hashedPassword,
          role: "ADMIN",
        },
      });
    }

    const companyCount = await prisma.company.count();
    if (companyCount === 0) {
      const comp1 = await prisma.company.create({
        data: {
          name: "Centro Médico Diagnóstico Sur",
          industry: "Salud / Clínicas",
          size: "50-100 empleados",
          location: "Buenos Aires, Argentina",
          website: "https://diagnosticosur.example.com",
          phone: "+54 11 4555-0192",
          notes: "Tienen problemas de coordinación de turnos y carga duplicada entre recepción y el sistema médico.",
          contacts: {
            create: [
              {
                name: "Dr. Marcelo Rossi",
                role: "Director Médico",
                email: "mrossi@diagnosticosur.example.com",
                phone: "+54 9 11 5555-1234",
                isDecisionMaker: true,
              },
              {
                name: "Valeria Gómez",
                role: "Jefa de Administración",
                email: "vgomez@diagnosticosur.example.com",
                phone: "+54 9 11 5555-5678",
                isDecisionMaker: false,
              },
            ],
          },
        },
        include: { contacts: true },
      });

      const comp2 = await prisma.company.create({
        data: {
          name: "Logística & Envíos Federales",
          industry: "Logística y Transporte",
          size: "20-50 empleados",
          location: "Rosario, Santa Fe",
          website: "https://federaleslog.example.com",
          phone: "+54 341 480-1122",
          notes: "Mucho trabajo manual en Excel para asignación de rutas y WhatsApp colapsado de clientes.",
          contacts: {
            create: [
              {
                name: "Gustavo Méndez",
                role: "Gerente de Operaciones",
                email: "gmendez@federaleslog.example.com",
                phone: "+54 9 341 600-4321",
                isDecisionMaker: true,
              },
            ],
          },
        },
        include: { contacts: true },
      });

      const comp3 = await prisma.company.create({
        data: {
          name: "Estudio Bianchi & Asociados",
          industry: "Servicios Profesionales",
          size: "10-20 empleados",
          location: "Córdoba, Argentina",
          website: "https://estudiobianchi.example.com",
          phone: "+54 351 422-9988",
          notes: "Descarga manual de comprobantes de AFIP y carga en software contable antiguo.",
          contacts: {
            create: [
              {
                name: "Cra. Laura Bianchi",
                role: "Socia Fundadora",
                email: "lbianchi@estudiobianchi.example.com",
                phone: "+54 9 351 711-2233",
                isDecisionMaker: true,
              },
            ],
          },
        },
        include: { contacts: true },
      });

      await prisma.opportunity.create({
        data: {
          title: "Automatización de WhatsApp y Sistema de Turnos",
          companyId: comp1.id,
          contactId: comp1.contacts[0].id,
          assignedUserId: admin.id,
          stage: "DIAGNOSTICO",
          priority: "ALTA",
          estimatedValue: 4500,
          summary: "Relevando proceso de recepción y médicos. Alto volumen de mensajes sin responder a tiempo.",
          activities: {
            create: [
              {
                userId: admin.id,
                type: "MEETING",
                content: "Reunión de diagnóstico realizada con Marcelo y Valeria. Detectamos 4 horas diarias de carga manual.",
              },
            ],
          },
        },
      });

      await prisma.opportunity.create({
        data: {
          title: "Integración de Rutas y Bot de Rastreo",
          companyId: comp2.id,
          contactId: comp2.contacts[0].id,
          assignedUserId: admin.id,
          stage: "PROPUESTA",
          priority: "ALTA",
          estimatedValue: 6200,
          summary: "Propuesta de integración entre su sistema de tracking y asistente IA para WhatsApp.",
          activities: {
            create: [
              {
                userId: admin.id,
                type: "NOTE",
                content: "Enviada propuesta técnica económica. En espera de respuesta de directorio este viernes.",
              },
            ],
          },
        },
      });

      await prisma.opportunity.create({
        data: {
          title: "Automatización de Extracción de Comprobantes",
          companyId: comp3.id,
          contactId: comp3.contacts[0].id,
          assignedUserId: admin.id,
          stage: "CONVERSACION",
          priority: "MEDIA",
          estimatedValue: 2800,
          summary: "Primer contacto cálido por recomendación. Interesados en agilizar carga impositiva.",
        },
      });
    }

    return NextResponse.json({
      success: true,
      message: "Base de datos inicializada con éxito",
      adminEmail: "admin@sinapsia.com.ar",
    });
  } catch (error) {
    console.error("Seed error:", error);
    return NextResponse.json(
      { error: "Error al inicializar la base de datos" },
      { status: 500 }
    );
  }
}
