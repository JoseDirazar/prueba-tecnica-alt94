import { prisma } from "@/lib/prismadb";
import { NextRequest } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ propertyId: string }> }
) {
  try {
    const paramsResult = await params;
    const propertyId = parseInt(paramsResult.propertyId);
    if (isNaN(propertyId)) {
      return new Response("Invalid property ID", { status: 400 });
    }

    // Buscar la propiedad por ID
    const property = await prisma.property.findUnique({
      where: { id: propertyId },
    });
    if (!property) {
      return new Response("Property not found", { status: 404 });
    }

    // Buscar 2 propiedades similares en precio (excluyendo la actual)
    const similarProperties = await prisma.property.findMany({
      where: {
        id: { not: propertyId },
        precio: {
          gte: Number(property.precio) * 0.9,
          lte: Number(property.precio) * 1.1,
        },
      },
      take: 2,
    });

    return Response.json({ property, recommendations: similarProperties });
  } catch (error) {
    console.error("Error loading property detail:", error);
    return new Response("Error loading property detail", { status: 500 });
  }
}
