import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";

export const useStyles = makeStyles((theme: Theme) => {
  return {
    root: {
      display: "flex",
    },
    rootCategory: {
      padding: "3px",
      width: "100%",
    },
    titleContainer: {
      display: "flex",
      justifyContent: "center",
      background: "RGB(84, 218, 169, 0.5)",
      borderBottom: "2px solid #54DAA9",
    },
    imageContainer: {
      display: "flex",
      justifyContent: "center",
      position: "relative",
      marginTop: "6px",
      padding: "10px 0px",
      background: "RGB(148, 142, 138, 0.3)",
      "&:hover": {
        background: "RGB(84, 218, 169, 0.7)",
        cursor: "pointer",
      },
    },
    image: {
      transform: "scale(0.8)",
      [theme.breakpoints.down("xl")]: {
        transform: "scale(0.5)",
      },
      [theme.breakpoints.down("lg")]: {
        transform: "scale(0.4)",
      },
      [theme.breakpoints.down(700)]: {
        transform: "scale(0.5)",
      },
    },
    weaponName: {
      position: "absolute",
      bottom: "5px",
      left: "5px",
      color: "rgba(255, 255, 255, 0.5)",
    },
  };
});
