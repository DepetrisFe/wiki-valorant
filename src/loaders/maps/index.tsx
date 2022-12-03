export const mapsLoader = async () => {
  const response = await fetch(
    "https://valorant-api.com/v1/maps?language=es-ES"
  );
  if (!response.ok) throw new Error("Something went wrong");
  const maps = await response.json();
  return maps.data;
};
