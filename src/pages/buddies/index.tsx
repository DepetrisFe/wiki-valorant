import { useState } from "react";
import { Grid, Pagination } from "@mui/material";
import { useLoaderData } from "react-router-dom";
import { Buddie } from "../../interfaces/buddies";
import { useStyles } from "./styles";

const Buddies = () => {
  const classes = useStyles();
  const buddies = useLoaderData() as Buddie[];
  const [page, setPage] = useState(1);
  const rowsPerPage = 50;

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <Grid className={classes.root}>
      <Grid className={classes.main}>
        {buddies
          .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
          .map((buddie: Buddie) => (
            <Grid key={buddie.uuid} className={classes.imageContainer}>
              <img
                src={buddie.displayIcon}
                alt={buddie.displayName}
                className={classes.image}
              />
            </Grid>
          ))}
      </Grid>
      <Grid className={classes.paginationContainer}>
        <Pagination
          count={Math.floor(buddies.length / rowsPerPage)}
          page={page}
          onChange={handleChange}
          size="large"
          className={classes.pagination}
        />
      </Grid>
    </Grid>
  );
};

export default Buddies;
