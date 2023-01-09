import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { Spray } from "../../interfaces/sprays";
import { useStyles } from "./styles";
import { Grid, Pagination } from "@mui/material";

const Sprays = () => {
  const classes = useStyles();
  const sprays = useLoaderData() as Spray[];
  const [page, setPage] = useState(1);
  const isMobile = useMediaQuery({ query: "(max-width: 900px)" });
  const rowsPerPage = 50;

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <Grid className={classes.root}>
      <Grid className={classes.main}>
        {sprays
          .slice((page - 1) * rowsPerPage, page * rowsPerPage)
          .map((spray: Spray) => (
            <Grid key={spray.uuid} className={classes.imageContainer}>
              <img
                src={
                  spray.animationGif ||
                  spray.fullTransparentIcon ||
                  spray.displayIcon
                }
                alt={spray.displayName}
                className={classes.image}
              />
            </Grid>
          ))}
      </Grid>
      <Grid className={classes.paginationContainer}>
        <Pagination
          count={Math.ceil(sprays.length / rowsPerPage)}
          page={page}
          onChange={handleChange}
          size={isMobile ? "small" : "large"}
          className={classes.pagination}
        />
      </Grid>
    </Grid>
  );
};

export default Sprays;
