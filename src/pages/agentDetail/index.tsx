import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import { Box, Grid, Typography } from "@mui/material";
import { useStyles } from "./styles";
import { Agent, Ability } from "../../interfaces/agents";

const AgentDetail = () => {
  const classes = useStyles();
  const agentDetail = useLoaderData() as Agent;
  const [skill, setSkill] = useState(0);

  return (
    <Grid container className={classes.root}>
      <Grid item xs={6} className={classes.main}>
        <Grid className={classes.abilitiesContainer}>
          <Grid className={classes.test}>
            {agentDetail.abilities.map((ability: Ability, index) => (
              <Box
                key={ability.displayName}
                className={classes.abilityContainer}
              >
                <img
                  src={ability.displayIcon}
                  alt={ability.displayName}
                  className={classes.skillIcon}
                  onClick={() => setSkill(index)}
                />
              </Box>
            ))}
          </Grid>
          <Box className={classes.abilityDescription}>
            {agentDetail.abilities[skill].description}
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default AgentDetail;
