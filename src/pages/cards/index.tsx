import { Grid, Typography, Pagination } from "@mui/material";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Card } from "../../interfaces/cards";
import { useStyles } from "./styles";

const Cards = () => {
  const classes = useStyles();
  const cards = useLoaderData() as Card[];
  const [page, setPage] = useState(1);
  const rowsPerPage = 50;

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <Grid className={classes.root}>
      <Grid className={classes.main}>
        {cards
          .slice((page - 1) * rowsPerPage, page * rowsPerPage)
          .map((card: Card) => (
            <Grid key={card.uuid} className={classes.imageContainer}>
              <img
                src={card.displayIcon}
                alt={card.displayName}
                className={classes.image}
              />
              {/* <Typography>{card.displayName}</Typography> */}
            </Grid>
          ))}
      </Grid>
      <Grid className={classes.paginationContainer}>
        <Pagination
          count={Math.ceil(cards.length / rowsPerPage)}
          page={page}
          onChange={handleChange}
          size="large"
          className={classes.pagination}
        />
      </Grid>
    </Grid>
  );
};

export default Cards;
