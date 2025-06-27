export function getUserCity() {
  let location = "";
  navigator.geolocation.getCurrentPosition(
    async (position) => {
      const { latitude, longitude } = position.coords;

      const res = await fetch(
        `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
      );
      const data = await res.json();

      const city =
        data.address.city ||
        data.address.region ||
        data.address.county ||
        "Provincia no encontrada";

      location = city;
    },
    (error) => {
      console.error("Error al obtener ubicación:", error.message);
    }
  );

  return location;
}
