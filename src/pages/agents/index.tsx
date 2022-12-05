import { Link, useLoaderData } from "react-router-dom";
import { Agent } from "../../interfaces/agents";
import Frame from "../../assets/frame.png";
import { useStyles } from "./styles";
import { Grid, Typography } from "@mui/material";

const Agents = () => {
  const classes = useStyles();
  const agents = useLoaderData() as Agent[];

  return (
    <Grid className={classes.root}>
      {agents.map((agent: Agent) => (
        <Link key={agent.uuid} to={`${agent.uuid}`}>
          <Grid className={classes.imageContainer}>
            <img src={Frame} alt="agent frame" className={classes.frame} />
            <img src={agent.displayIcon} className={classes.image} />
            <Typography variant="h5" className={classes.agentName}>
              {agent.displayName.toUpperCase()}
            </Typography>
          </Grid>
        </Link>
      ))}
    </Grid>
  );
};

export default Agents;
