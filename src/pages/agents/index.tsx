import { useLoaderData } from "react-router-dom";

const Agents = () => {
  const agents = useLoaderData();

  console.log("agents", agents);
  return <div>Agents</div>;
};

export default Agents;
