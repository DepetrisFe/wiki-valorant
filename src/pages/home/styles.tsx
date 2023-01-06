import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";

export const useStyles = makeStyles((theme: Theme) => {
  return {
    root: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100%",
      [theme.breakpoints.down("md")]: {
        height: "80vh",
      },
    },
    logo: {
      width: "25vw",
      opacity: "0.2",
    },
  };
});
