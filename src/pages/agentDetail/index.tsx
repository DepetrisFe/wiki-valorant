import { useLoaderData } from "react-router-dom";
import { Grid } from "@mui/material";
import { useStyles } from "./styles";
import { Agent } from "../../interfaces/agents";

const AgentDetail = () => {
  const classes = useStyles();
  const agentDetail = useLoaderData() as Agent;

  return (
    <Grid>
      <img
        src={agentDetail.fullPortrait}
        alt={agentDetail.displayName}
        className={classes.mainImg}
      />
    </Grid>
  );
};

export default AgentDetail;
