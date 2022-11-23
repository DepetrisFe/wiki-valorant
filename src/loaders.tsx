export const agentsLoader = async () => {
  const response = await fetch(
    "https://valorant-api.com/v1/agents?language=es-ES&isPlayableCharacter=true"
  );
  if (!response.ok) throw new Error("Something went wrong");
  const agents = await response.json();
  return agents.data;
};

export const agentDetailLoader = async ({ params }: any) => {
  const response = await fetch(
    `https://valorant-api.com/v1/agents/${params.id}?language=es-ES`
  );
  if (!response.ok) throw new Error("Something went wrong");
  const agentDetail = await response.json();
  return agentDetail.data;
};
