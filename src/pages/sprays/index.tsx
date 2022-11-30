import { Grid } from "@mui/material";
import { useLoaderData } from "react-router-dom";
import { Spray } from "../../interfaces/sprays";

const Sprays = () => {
  const sprays = useLoaderData() as Spray[];

  return (
    <Grid>
      {sprays.map((spray: Spray) => (
        <Grid key={spray.uuid}>
          <p>{spray.displayName}</p>
        </Grid>
      ))}
    </Grid>
  );
};

export default Sprays;
