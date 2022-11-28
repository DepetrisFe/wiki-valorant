export const weaponsLoader = async () => {
  const response = await fetch(
    "https://valorant-api.com/v1/weapons?language=es-ES"
  );
  if (!response.ok) throw new Error("Something went wrong");
  const weapons = await response.json();
  return weapons.data;
};

export const weaponDetailLoader = async ({ params }: any) => {
  const response = await fetch(
    `https://valorant-api.com/v1/weapons/${params.id}?language=es-ES`
  );
  if (!response.ok) throw new Error("Something went wrong");
  const weaponDetail = await response.json();
  return weaponDetail.data;
};
