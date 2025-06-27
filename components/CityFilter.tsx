interface CityFilterProps {
  currentCity: string;
  onCityChange: (city: string) => void;
  availableCities: string[];
}

export default function CityFilter({
  currentCity,
  onCityChange,
  availableCities,
}: CityFilterProps) {
  return (
    <div className="flex flex-col sm:flex-row items-center gap-4 mb-6">
      <label
        htmlFor="city-filter"
        className="text-sm font-medium text-gray-700 dark:text-gray-200"
      >
        Filtrar por ciudad:
      </label>
      <select
        id="city-filter"
        value={currentCity}
        onChange={(e) => onCityChange(e.target.value)}
        className="px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-gray-100 dark:border-gray-700 dark:focus:ring-blue-400 dark:focus:border-blue-400 transition-colors"
      >
        <option value="">Todas las ciudades</option>
        {availableCities.map((city) => (
          <option key={city} value={city}>
            {city}
          </option>
        ))}
      </select>
    </div>
  );
}
