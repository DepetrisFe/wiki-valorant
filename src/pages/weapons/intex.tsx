import { useLoaderData } from "react-router-dom";

const Weapons = () => {
  const weapons: any = useLoaderData();
  console.log("weapons", weapons);

  return <div>Weapons</div>;
};

export default Weapons;
