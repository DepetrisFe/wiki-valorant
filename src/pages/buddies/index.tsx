import { Grid } from "@mui/material";
import { useLoaderData } from "react-router-dom";
import { Buddie } from "../../interfaces/buddies";

const Buddies = () => {
  const buddies = useLoaderData() as Buddie[];

  return (
    <Grid>
      {buddies.map((buddie: Buddie) => (
        <Grid key={buddie.uuid}>
          <p>{buddie.displayName}</p>
        </Grid>
      ))}
    </Grid>
  );
};

export default Buddies;
