import { useState } from "react";
import { Box, Grid, Pagination, Typography } from "@mui/material";
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

  const trimString = (str: string, lng: number) => {
    return str.length > lng ? str.substring(0, lng - 3) + "..." : str;
  };

  return (
    <Grid className={classes.root}>
      <Grid className={classes.main}>
        {buddies
          .slice((page - 1) * rowsPerPage, page * rowsPerPage)
          .map((buddie: Buddie) => (
            <Grid key={buddie.uuid} className={classes.imageContainer}>
              <Box className={classes.nameContainer}>
                <Typography fontSize={16} className={classes.buddyName}>
                  {trimString(buddie.displayName, 30)}
                </Typography>
              </Box>
              <Box>
                <img
                  src={buddie.displayIcon}
                  alt={buddie.displayName}
                  className={classes.image}
                />
              </Box>
            </Grid>
          ))}
      </Grid>
      <Grid className={classes.paginationContainer}>
        <Pagination
          count={Math.ceil(buddies.length / rowsPerPage)}
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
