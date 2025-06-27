export async function fetchPropertiesByCity(
  userCity: string,
  page: number = 1,
  limit: number = 5
) {
  const params = new URLSearchParams();

  if (userCity.length > 0) {
    params.append("city", userCity);
  }

  params.append("page", page.toString());
  params.append("limit", limit.toString());

  const response = await fetch(`/api/properties?${params.toString()}`);
  const result = await response.json();
  return result;
}
