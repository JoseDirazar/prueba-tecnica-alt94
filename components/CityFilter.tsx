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
        className="text-sm font-medium text-gray-700"
      >
        Filtrar por ciudad:
      </label>
      <select
        id="city-filter"
        value={currentCity}
        onChange={(e) => onCityChange(e.target.value)}
        className="px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
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
