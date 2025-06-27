import { Property } from "@/types/PropertyTypes";
import PropertyCard from "./PropertiyCard";

interface PropertiesContainerProps {
  properties: Property[];
}

export default function PropertiesContainer({
  properties,
}: PropertiesContainerProps) {
  return properties.map((property) => (
    <PropertyCard key={property.id} property={property} />
  ));
}
