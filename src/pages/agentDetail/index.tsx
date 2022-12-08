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
      <Grid item xs={6}>
        <Grid className={classes.abilitiesContainer}>
          {agentDetail.abilities.map((ability: Ability, index) => (
            <Box
              key={ability.displayName}
              className={classes.abilityImgContainer}
            >
              <img
                src={ability.displayIcon}
                alt={ability.displayName}
                className={classes.abilityImg}
                onClick={() => setSkill(index)}
              />
            </Box>
          ))}
        </Grid>
        <Box>
          <Typography fontWeight="bold" fontSize={25}>
            {agentDetail.abilities[skill].displayName.toUpperCase()}
          </Typography>
          <Typography>{agentDetail.abilities[skill].description}</Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default AgentDetail;
