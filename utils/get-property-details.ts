export async function getPropertyDetail(propertyId: string) {
  const res = await fetch(
    `${process.env.FRONTEND_URL}/api/properties/${propertyId}`
  );
  if (!res.ok) throw new Error("No se pudo cargar la propiedad");
  return res.json();
}
