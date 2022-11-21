import { useLoaderData } from "react-router-dom";
import { Grid } from "@mui/material";
import { useStyles } from "./styles";

const Agents = () => {
  const classes = useStyles();
  const agents: any = useLoaderData();

  return (
    <Grid className={classes.root}>
      {agents.map((agent: any) => (
        <Grid key={agent.uuid} className={classes.imageContainer}>
          <img src={agent.displayIcon} className={classes.image} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Agents;
