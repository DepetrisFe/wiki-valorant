import { useLoaderData } from "react-router-dom";
import { Weapon } from "../../interfaces/weapons";
import { Grid } from "@mui/material";

const Weapons = () => {
  const weapons = useLoaderData() as Weapon[];

  return (
    <Grid>
      {weapons.map((weapon: Weapon) => (
        <Grid key={weapon.uuid}>
          <p>{weapon.displayName}</p>
        </Grid>
      ))}
    </Grid>
  );
};

export default Weapons;
