"use client";

import PropertiesContainer from "@/components/PropertiesContainer";
import Pagination from "@/components/Pagination";
import CityFilter from "@/components/CityFilter";
import { useGetProperties } from "@/hooks/useGetProperties";
import Loading from "@/components/Loading";
import Error from "@/components/Error";

export default function Home() {
  const {
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
  } = useGetProperties();

  if (loading) return <Loading />;

  if (error) return <Error error={error} />;

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-4xl font-bold">Alt94 Propiedades</h1>

      <main className="flex flex-col gap-[32px] w-full items-center">
        {availableCities.length > 0 && (
          <CityFilter
            currentCity={userCity}
            onCityChange={filterByCity}
            availableCities={availableCities}
          />
        )}

        <div className="w-full items-center sm:items-center sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <PropertiesContainer properties={properties} />
        </div>

        {pagination && (
          <Pagination
            currentPage={currentPage}
            totalPages={pagination.totalPages}
            hasNextPage={pagination.hasNextPage}
            hasPrevPage={pagination.hasPrevPage}
            onPageChange={goToPage}
            onNextPage={nextPage}
            onPrevPage={prevPage}
          />
        )}
      </main>
    </div>
  );
}
