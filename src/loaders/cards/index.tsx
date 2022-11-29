export const cardsLoader = async () => {
  const response = await fetch(
    "https://valorant-api.com/v1/playercards?language=es-ES"
  );
  if (!response.ok) throw new Error("Something went wrong");
  const cards = await response.json();
  return cards.data;
};
