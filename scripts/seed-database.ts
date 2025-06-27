import { PrismaClient } from "@prisma/client";
import { promises as fs } from "fs";
import path from "path";

const prisma = new PrismaClient();

interface PropertyData {
  id: number;
  titulo: string;
  ciudad: string;
  tipo: string;
  precio: number;
  ambientes: number;
  metros_cuadrados: number;
  imagen: string;
}

async function seedDatabase() {
  try {
    console.log("🌱 Iniciando importación de datos...");

    // Leer el archivo JSON
    const filePath = path.join(
      process.cwd(),
      "db",
      "properties_mock_100_clean.json"
    );
    const fileContent = await fs.readFile(filePath, "utf-8");
    const properties: PropertyData[] = JSON.parse(fileContent);

    console.log(
      `📊 Encontradas ${properties.length} propiedades para importar`
    );

    // Limpiar la base de datos existente
    console.log("🧹 Limpiando base de datos existente...");
    await prisma.property.deleteMany();

    // Preparar los datos para inserción masiva
    const propertiesToInsert = properties.map((property) => ({
      titulo: property.titulo,
      ciudad: property.ciudad,
      tipo: property.tipo,
      precio: property.precio,
      ambientes: property.ambientes,
      metros_cuadrados: property.metros_cuadrados,
      imagen: property.imagen,
    }));

    // Insertar todas las propiedades de una vez
    console.log("📥 Insertando propiedades en la base de datos...");
    await prisma.property.createMany({
      data: propertiesToInsert,
    });

    console.log("✅ Importación completada exitosamente!");

    // Verificar que los datos se insertaron correctamente
    const count = await prisma.property.count();
    console.log(`📈 Total de propiedades en la base de datos: ${count}`);

    // Mostrar algunas estadísticas
    const cities = await prisma.property.groupBy({
      by: ["ciudad"],
      _count: {
        ciudad: true,
      },
    });

    console.log("\n📊 Estadísticas por ciudad:");
    cities.forEach((city) => {
      console.log(`  ${city.ciudad}: ${city._count.ciudad} propiedades`);
    });
  } catch (error) {
    console.error("❌ Error durante la importación:", error);
  } finally {
    await prisma.$disconnect();
  }
}

// Ejecutar el script
seedDatabase();
