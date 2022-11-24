export const weaponsLoader = async () => {
  const response = await fetch(
    "https://valorant-api.com/v1/weapons?language=es-ES"
  );
  if (!response.ok) throw new Error("Something went wrong");
  const weapons = await response.json();
  return weapons.data;
};
