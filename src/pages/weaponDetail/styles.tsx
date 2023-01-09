import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";

export const useStyles = makeStyles((theme: Theme) => {
  return {
    root: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, 400px)",
      gridGap: "2rem",
      justifyContent: "center",
      paddingTop: "3rem",
      [theme.breakpoints.down(600)]: {
        gridTemplateColumns: "none",
      },
    },
    imageContainer: {
      height: "200px",
      width: "400px",
      transition: "transform 0.5s",
      "&:hover": {
        transform: "scale(1.05)",
      },
      [theme.breakpoints.down(600)]: {
        height: "200px",
        width: "100%",
      },
    },
    image: {
      height: "100%",
      width: "100%",
      objectFit: "contain",
      cursor: "pointer",
      filter: "drop-shadow(7px -3px 10px #000)",
    },
  };
});
