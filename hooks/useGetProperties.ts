import { useEffect } from "react";

import { TProperty } from "@/types/PropertyTypes";
import { fetchPropertiesByCity } from "@/utils/fetch-properties";
import { getUserCity } from "@/utils/get-user-location";
import { useState } from "react";

export function useGetProperties() {
  const [properties, setProperties] = useState<TProperty[]>([]);

  async function fetchProperties() {
    try {
      const userCity = getUserCity();
      const response = await fetchPropertiesByCity(userCity);
      if (response?.length > 0) {
        setProperties(response);
      } else {
        alert("No properties found.");
      }
    } catch (error) {
      console.error(error);
      alert("Error fetching properties. Please try again.");
    }
  }

  useEffect(() => {
    fetchProperties();
  }, []);

  return {
    properties,
  };
}
