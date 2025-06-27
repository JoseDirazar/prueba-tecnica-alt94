import { PrismaClient } from "@prisma/client";
import { promises as fs } from "fs";
import path from "path";

const prisma = new PrismaClient();

async function dumpDatabase() {
  try {
    console.log("📤 Iniciando dump de la base de datos...");

    // Obtener todas las propiedades de la base de datos
    const properties = await prisma.property.findMany({
      orderBy: {
        id: "asc",
      },
    });

    console.log(
      `📊 Encontradas ${properties.length} propiedades en la base de datos`
    );

    // Crear el directorio de dumps si no existe
    const dumpDir = path.join(process.cwd(), "db", "dumps");
    await fs.mkdir(dumpDir, { recursive: true });

    // Generar nombre de archivo con timestamp
    const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
    const fileName = `properties_dump_${timestamp}.json`;
    const filePath = path.join(dumpDir, fileName);

    // Escribir el archivo JSON
    await fs.writeFile(filePath, JSON.stringify(properties, null, 2), "utf-8");

    console.log(`✅ Dump completado exitosamente!`);
    console.log(`📁 Archivo guardado en: ${filePath}`);

    // Mostrar estadísticas
    const cities = await prisma.property.groupBy({
      by: ["ciudad"],
      _count: {
        ciudad: true,
      },
    });

    console.log("\n📊 Estadísticas del dump:");
    cities.forEach((city) => {
      console.log(`  ${city.ciudad}: ${city._count.ciudad} propiedades`);
    });

    // Mostrar información del archivo
    const stats = await fs.stat(filePath);
    const fileSizeInKB = (stats.size / 1024).toFixed(2);
    console.log(`\n📏 Tamaño del archivo: ${fileSizeInKB} KB`);
  } catch (error) {
    console.error("❌ Error durante el dump:", error);
  } finally {
    await prisma.$disconnect();
  }
}

// Ejecutar el script
dumpDatabase();
