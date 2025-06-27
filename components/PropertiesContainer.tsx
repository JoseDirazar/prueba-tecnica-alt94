import { TProperty } from "@/types/PropertyTypes";
import PropertyCard from "./PropertiyCard";

interface PropertiesContainerProps {
  properties: TProperty[];
}

export default function PropertiesContainer({
  properties,
}: PropertiesContainerProps) {
  return properties.map((property) => (
    <PropertyCard key={property.id} property={property} />
  ));
}
