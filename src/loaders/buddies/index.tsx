export const buddiesLoader = async () => {
  const response = await fetch(
    "https://valorant-api.com/v1/buddies?language=es-ES"
  );
  if (!response.ok) throw new Error("Something went wrong");
  const buddies = await response.json();
  return buddies.data;
};
