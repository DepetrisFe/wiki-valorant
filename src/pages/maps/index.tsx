import { useLoaderData } from "react-router-dom";

const Maps = () => {
  const maps = useLoaderData();
  console.log(maps);
  return <div>Maps</div>;
};

export default Maps;
