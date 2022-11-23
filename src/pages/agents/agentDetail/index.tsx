import { useLoaderData } from "react-router-dom";
import { Grid } from "@mui/material";
import { useStyles } from "./styles";

const AgentDetail = () => {
  const classes = useStyles();
  const agentDetail: any = useLoaderData();

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
