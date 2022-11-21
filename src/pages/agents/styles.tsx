import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  root: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, 200px)",
    gridGap: "2rem",
    justifyContent: "center",
  },
  imageContainer: {
    position: "relative",
    height: "200px",
    width: "200px",
    margin: "20px 0px",
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
  agentName: {
    position: "absolute",
    bottom: "-15px",
    left: "5px",
    textShadow: "2px -1px 5px rgba(0,0,0,0.75)",
  },
});
