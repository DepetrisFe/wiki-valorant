import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  root: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, 400px)",
    gridGap: "2rem",
    justifyContent: "center",
  },
  imageContainer: {
    height: "200px",
    width: "400px",
    transition: "transform 0.5s",
    "&:hover": {
      transform: "scale(1.05)",
    },
  },
  image: {
    height: "100%",
    width: "100%",
    objectFit: "contain",
    cursor: "pointer",
    filter: "drop-shadow(7px -3px 10px #000)",
  },
});
