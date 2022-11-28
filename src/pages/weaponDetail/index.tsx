import { useLoaderData } from "react-router-dom";
import { Weapon } from "../../interfaces/weapons";
import { Grid, Typography } from "@mui/material";
import { Skin } from "../../interfaces/weapons";
import { useStyles } from "./styles";

const WeaponDetail = () => {
  const classes = useStyles();
  const weaponDetail = useLoaderData() as Weapon;

  return (
    <Grid className={classes.root}>
      {weaponDetail.skins.map((skin: Skin) => (
        <Grid key={skin.uuid} className={classes.imageContainer}>
          <img
            src={skin.chromas[0].fullRender}
            alt={skin.displayName}
            className={classes.image}
          />
          {/* <Typography variant="h5">{skin.displayName}</Typography> */}
        </Grid>
      ))}
    </Grid>
  );
};

export default WeaponDetail;
