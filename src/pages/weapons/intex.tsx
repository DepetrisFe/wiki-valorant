import { useLoaderData } from "react-router-dom";
import { Weapon } from "../../interfaces/weapons";
import { Grid } from "@mui/material";
import { useStyles } from "./styles";

const Weapons = () => {
  const classes = useStyles();
  const weapons = useLoaderData() as Weapon[];

  //groups weapons by category
  const groupByCategory = () => {
    return weapons.reduce(function (r, a) {
      r[a.category] = r[a.category] || [];
      r[a.category].push(a);
      return r;
    }, Object.create(null));
  };

  return (
    <Grid className={classes.root}>
      {weapons.map((weapon: Weapon) => (
        <Grid key={weapon.uuid}>
          <img src={weapon.killStreamIcon} alt={weapon.displayName} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Weapons;
