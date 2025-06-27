import { Property } from "@/types/PropertyTypes";
import Image from "next/image";
import Link from "next/link";

interface PropertyProps {
  property: Property;
}

export default function PropertyCard({ property }: PropertyProps) {
  return (
    <Link href={`/${property.id}`} className="w-full">
      <div className="bg-neutral-800 flex flex-col items-center m-3 rounded-md gap-y-3 pb-2 dark:bg-neutral-900 shadow-md transition-colors">
        <Image
          width={300}
          height={200}
          src={property.imagen}
          alt={property.titulo}
          className="bg-gray-400 object-cover rounded-t-md w-full"
        />
        <div className="p-2 w-full">
          <h2 className="font-bold text-xl text-gray-100 dark:text-white">
            {property.titulo}
          </h2>
          <div className="flex justify-between items-center pt-4 w-full">
            <p className="text-sm text-gray-300 dark:text-gray-300">
              📍 {property.ciudad}
            </p>
            <p className="items-end text-gray-200 dark:text-gray-200">
              $ {property.precio}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
