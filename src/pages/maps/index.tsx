import { useState } from "react";
import { Box, Grid, Typography, Dialog } from "@mui/material";
import { useLoaderData } from "react-router-dom";
import { Map } from "../../interfaces/maps";
import { useStyles } from "./styles";

const Maps = () => {
  const classes = useStyles();
  const maps = useLoaderData() as Map[];
  const [mapIndex, setMapIndex] = useState<number>(0);
  const [open, setOpen] = useState<boolean>(false);
  const filteredMaps = maps.filter(
    (map: Map) => map.displayName !== "Campo de tiro"
  );

  const handleClickOpen = (index: number) => {
    setMapIndex(index);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Grid className={classes.root}>
      {filteredMaps.map((map: Map, index) => (
        <Grid
          className={classes.imageContainer}
          key={map.uuid}
          onClick={() => handleClickOpen(index)}
        >
          <img src={map.splash} className={classes.image} />
          <Box className={classes.nameContainer}>
            <Typography fontSize={23} className={classes.mapName}>
              {map.displayName.toUpperCase()}
            </Typography>
          </Box>
        </Grid>
      ))}
      <Dialog open={open} onClose={handleClose}>
        <Box className={classes.mapDialog}>
          <img
            src={filteredMaps[mapIndex].displayIcon}
            alt={filteredMaps[mapIndex].displayName}
            className={classes.mapPreview}
          />
        </Box>
      </Dialog>
    </Grid>
  );
};

export default Maps;
