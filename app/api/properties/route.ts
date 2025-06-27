import { TProperty } from "@/types/PropertyTypes";
import { promises as fs } from "fs";
import { NextRequest } from "next/server";
import path from "path";

export async function GET(req: NextRequest) {
  try {
    const city = req.nextUrl.searchParams.get("city");
    const filePath = path.join(
      process.cwd(),
      "db",
      "properties_mock_100_clean.json"
    );
    const fileContent = await fs.readFile(filePath, "utf-8");
    const allProperties: TProperty[] = JSON.parse(fileContent);

    let filteredProperties = allProperties;
    if (city) {
      filteredProperties = allProperties.filter(
        (property) => property.ciudad?.toLowerCase() === city.toLowerCase()
      );
    }

    const sortedProperties = filteredProperties.sort((a, b) => {
      if (!a.ciudad || !b.ciudad) return 0;
      return a.ciudad.localeCompare(b.ciudad);
    });

    return Response.json(sortedProperties);
  } catch (error) {
    console.error("Error loading properties:", error);
    return new Response("Error loading properties", { status: 500 });
  }
}
