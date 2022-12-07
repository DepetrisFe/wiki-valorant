import { Box, Grid, Typography } from "@mui/material";
import { useLoaderData } from "react-router-dom";
import { Map } from "../../interfaces/maps";
import { useStyles } from "./styles";

const Maps = () => {
  const classes = useStyles();
  const maps = useLoaderData() as Map[];

  return (
    <Grid className={classes.root}>
      {maps.map((map: Map) => (
        <Grid className={classes.imageContainer} key={map.uuid}>
          <img src={map.splash} className={classes.image} />
          <Box className={classes.nameContainer}>
            <Typography fontSize={23} className={classes.mapName}>
              {map.displayName.toUpperCase()}
            </Typography>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

export default Maps;
