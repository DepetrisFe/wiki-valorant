import { Grid } from "@mui/material";
import { useStyles } from "./styles";
import Vlogo from "../../assets/V-logo.png";

const Home = () => {
  const classes = useStyles();
  return (
    <Grid className={classes.root}>
      <img src={Vlogo} alt="logo" className={classes.logo} />
    </Grid>
  );
};

export default Home;
