export async function fetchPropertiesByCity(userCity: string) {
  const response = await fetch(
    `/api/properties${userCity.length > 0 ? "?state=" + userCity : ""}`
  );
  const result = await response.json();
  return result;
}
