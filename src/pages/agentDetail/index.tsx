import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import { Box, Grid, Typography } from "@mui/material";
import { useStyles } from "./styles";
import { Agent, Ability } from "../../interfaces/agents";

const AgentDetail = () => {
  const classes = useStyles();
  const agentDetail = useLoaderData() as Agent;
  const [skill, setSkill] = useState(0);

  console.log(agentDetail);
  return (
    <Grid container className={classes.root}>
      <Grid item xs={6}>
        <Grid className={classes.abilitiesContainer}>
          {agentDetail.abilities.map((ability: Ability, index) => (
            <Box
              key={ability.displayName}
              className={
                index === skill
                  ? classes.abilityImgContainerSelected
                  : classes.abilityImgContainer
              }
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
        <Box className={classes.abilitiesDescriptionContainer}>
          <Typography fontWeight="bold" fontSize={25}>
            {agentDetail.abilities[skill].displayName.toUpperCase()}
          </Typography>
          <Typography>{agentDetail.abilities[skill].description}</Typography>
        </Box>
        <Box>
          <Box className={classes.roleContainer}>
            <img
              src={agentDetail.role.displayIcon}
              alt={agentDetail.role.displayName}
              className={classes.roleIconImg}
            />
            <Typography fontWeight="bold" fontSize={25}>
              {agentDetail.role.displayName.toUpperCase()}
            </Typography>
          </Box>
          <Typography>{agentDetail.role.description}</Typography>
        </Box>
      </Grid>
      <Grid item xs={6}>
        <Box className={classes.fullPortraitContainer}>
          <img
            src={agentDetail.fullPortrait}
            alt={agentDetail.displayName}
            className={classes.fullPortraitImg}
          />
          <Typography fontWeight="bold" className={classes.agentName}>
            {agentDetail.displayName.toUpperCase()}
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default AgentDetail;
