import { Property } from "@/types/PropertyTypes";

interface PropertyProps {
  property: Property;
}

export default function PropertyCard({ property }: PropertyProps) {
  return (
    <div className="bg-neutral-800 flex flex-col items-center m-3 rounded-md  gap-y-3 pb-2">
      {/* <Image
      width={300}
      height={200}
      src={property.imagen}
      alt={property.titulo}
      className="bg-gray-400 object-cover rounded-t-md w-full"
    /> */}
      <div className="p-2 w-full">
        <h2 className="font-bold text-xl">{property.titulo}</h2>
        <div className="flex justify-between items-center pt-4 w-full">
          <p className="text-sm">📍 {property.ciudad}</p>
          <p className="items-end">$ {property.precio}</p>
        </div>
      </div>
    </div>
  );
}
