import { Grid, Typography, Pagination, Box } from "@mui/material";
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
            <Box key={card.uuid} className={classes.imageContainer}>
              <Box className={classes.cardNameContainer}>
                <Typography fontSize={17} className={classes.cardName}>
                  {card.displayName}
                </Typography>
              </Box>
              <img
                src={card.largeArt}
                alt={card.displayName}
                className={classes.image}
              />
            </Box>
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
