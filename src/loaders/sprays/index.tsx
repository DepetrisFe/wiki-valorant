export const spraysLoader = async () => {
  const response = await fetch(
    "https://valorant-api.com/v1/sprays?language=es-ES"
  );
  if (!response.ok) throw new Error("Something went wrong");
  const sprays = await response.json();
  return sprays.data;
};
