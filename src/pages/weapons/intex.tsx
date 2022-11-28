import { Link, useLoaderData } from "react-router-dom";
import { Weapon, Categories } from "../../interfaces/weapons";
import { Box, Grid, Typography } from "@mui/material";
import { useStyles } from "./styles";

const Weapons = () => {
  const classes = useStyles();
  const weapons = useLoaderData() as Weapon[];

  //groups weapons by category
  const groupByCategory = weapons.reduce(function (r, a) {
    r[a.category] = r[a.category] || [];
    r[a.category].push(a);
    return r;
  }, Object.create(null));

  //Available categories: Heavy, Rifle, Shotgun, Sidearm, Sniper, SMG, Melee
  const Category = (props: Categories) => {
    const { categoryName } = props;
    return (
      <Grid className={classes.rootCategory}>
        <Box className={classes.titleContainer}>
          <p>{categoryName.toUpperCase()}</p>
        </Box>
        <Box>
          {groupByCategory[`EEquippableCategory::${categoryName}`].map(
            (weapon: Weapon) => (
              <Link key={weapon.uuid} to={`${weapon.uuid}`}>
                <Box className={classes.imageContainer}>
                  <img
                    src={weapon.killStreamIcon}
                    alt={weapon.displayName}
                    className={classes.image}
                  />
                  <Typography className={classes.weaponName} fontSize={15}>
                    {weapon.displayName.toUpperCase()}
                  </Typography>
                </Box>
              </Link>
            )
          )}
        </Box>
      </Grid>
    );
  };

  return (
    <Grid container className={classes.root}>
      <Grid item xs={2}>
        <Category categoryName="Sidearm" />
      </Grid>
      <Grid item xs={3}>
        <Category categoryName="SMG" />
        <Category categoryName="Shotgun" />
      </Grid>
      <Grid item xs={3}>
        <Category categoryName="Rifle" />
        <Category categoryName="Melee" />
      </Grid>
      <Grid item xs={4}>
        <Category categoryName="Sniper" />
        <Category categoryName="Heavy" />
      </Grid>
    </Grid>
  );
};

export default Weapons;
