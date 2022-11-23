import { Link, useLoaderData } from "react-router-dom";
import { Grid, Typography } from "@mui/material";
import { useStyles } from "./styles";

const Agents = () => {
  const classes = useStyles();
  const agents: any = useLoaderData();

  return (
    <Grid className={classes.root}>
      {agents.map((agent: any) => (
        <Link key={agent.uuid} to={`${agent.uuid}`}>
          <Grid className={classes.imageContainer}>
            <img src={agent.displayIcon} className={classes.image} />
            <Typography variant="h5" className={classes.agentName}>
              {agent.displayName}
            </Typography>
          </Grid>
        </Link>
      ))}
    </Grid>
  );
};

export default Agents;
