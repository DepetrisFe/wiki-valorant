import { Grid, Typography } from "@mui/material";
import { useLoaderData } from "react-router-dom";
import { Card } from "../../interfaces/cards";
import { useStyles } from "./styles";

const Cards = () => {
  const classes = useStyles();
  const cards = useLoaderData() as Card[];

  return (
    <Grid className={classes.root}>
      {cards.map((card: Card) => (
        <Grid key={card.uuid}>
          <img src={card.displayIcon} alt={card.displayName} />
          <Typography>{card.displayName}</Typography>
        </Grid>
      ))}
    </Grid>
  );
};

export default Cards;
