import { useEffect, useState } from "react";

import { Property } from "@/types/PropertyTypes";
import { fetchPropertiesByCity } from "@/utils/fetch-properties";
import { getUserCity } from "@/utils/get-user-location";
import { PaginationInfo } from "@/types/PaginationTypes";

export function useGetProperties() {
  const [properties, setProperties] = useState<Property[]>([]);
  const [pagination, setPagination] = useState<PaginationInfo | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [userCity, setUserCity] = useState("");
  const [availableCities, setAvailableCities] = useState<string[]>([]);

  async function fetchProperties(page: number = 1, city?: string) {
    try {
      setLoading(true);
      setError(null);

      const cityToUse = city || userCity;
      const response = await fetchPropertiesByCity(cityToUse, page);

      if (response?.properties?.length > 0) {
        setProperties(response.properties);
        setPagination(response.pagination);
        setCurrentPage(page);
      } else {
        setProperties([]);
        setPagination(null);
        if (page === 1) {
          setError("No se encontraron propiedades.");
        }
      }
    } catch (error) {
      console.error(error);
      setError(
        "Error al cargar las propiedades. Por favor, inténtalo de nuevo."
      );
    } finally {
      setLoading(false);
    }
  }

  async function fetchAvailableCities() {
    try {
      const response = await fetch("/api/properties?limit=100");
      const data = await response.json();

      if (data.properties) {
        const cities = [
          ...new Set(data.properties.map((prop: Property) => prop.ciudad)),
        ] as string[];
        setAvailableCities(cities.sort());
      }
    } catch (error) {
      console.error("Error fetching available cities:", error);
    }
  }

  async function goToPage(page: number) {
    if (page >= 1 && pagination && page <= pagination.totalPages) {
      await fetchProperties(page, userCity);
    }
  }

  async function nextPage() {
    if (pagination?.hasNextPage) {
      await goToPage(currentPage + 1);
    }
  }

  async function prevPage() {
    if (pagination?.hasPrevPage) {
      await goToPage(currentPage - 1);
    }
  }

  async function filterByCity(city: string) {
    setUserCity(city);
    await fetchProperties(1, city);
  }

  useEffect(() => {
    const initializeProperties = async () => {
      const city = getUserCity();
      setUserCity(city);
      await Promise.all([fetchProperties(1, city), fetchAvailableCities()]);
    };

    initializeProperties();
  }, []);

  return {
    properties,
    pagination,
    loading,
    error,
    currentPage,
    userCity,
    availableCities,
    goToPage,
    nextPage,
    prevPage,
    filterByCity,
    refetch: () => fetchProperties(currentPage, userCity),
  };
}
