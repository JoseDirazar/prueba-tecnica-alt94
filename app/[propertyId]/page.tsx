import PropertyCard from "@/components/PropertiyCard";
import { Property } from "@/types/PropertyTypes";
import { getPropertyDetail } from "@/utils/get-property-details";
import Link from "next/link";

export default async function PropertyDetailPage({
  params,
}: {
  params: Promise<{ propertyId: string }>;
}) {
  const paramsResult = await params;
  const { property, recommendations } = await getPropertyDetail(
    paramsResult.propertyId
  );

  return (
    <div className="max-w-2xl mx-auto p-4">
      <Link href="/" className="text-blue-500 hover:underline">
        ← Volver
      </Link>
      <h1 className="text-3xl font-bold my-4">Detalles de la Propiedad</h1>
      <PropertyCard property={property} />
      <h2 className="text-2xl font-semibold mt-8 mb-4">
        Propiedades de valor similar
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {recommendations.map((rec: Property) => (
          <PropertyCard key={rec.id} property={rec} />
        ))}
      </div>
    </div>
  );
}
