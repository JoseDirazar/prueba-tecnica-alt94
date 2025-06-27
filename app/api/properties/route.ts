import { prisma } from "@/lib/prismadb";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const city = searchParams.get("city");
    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "5");
    const skip = (page - 1) * limit;

    const whereClause = city
      ? {
          ciudad: city,
        }
      : {};

    const [properties, totalCount] = await Promise.all([
      prisma.property.findMany({
        where: whereClause,
        orderBy: {
          ciudad: "asc",
        },
        skip,
        take: limit,
      }),
      prisma.property.count({
        where: whereClause,
      }),
    ]);

    const totalPages = Math.ceil(totalCount / limit);
    const hasNextPage = page < totalPages;
    const hasPrevPage = page > 1;

    return Response.json({
      properties,
      pagination: {
        currentPage: page,
        totalPages,
        totalCount,
        hasNextPage,
        hasPrevPage,
        limit,
      },
    });
  } catch (error) {
    console.error("Error loading properties:", error);
    return new Response("Error loading properties", { status: 500 });
  }
}
