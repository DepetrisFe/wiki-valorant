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
  frame: {
    position: "absolute",
    height: "100%",
    width: "100%",
  },
  image: {
    position: "absolute",
    zIndex: "1",
    height: "94%",
    width: "94%",
    top: "0",
    right: "0",
    bottom: "0",
    left: "0",
    margin: "auto",
    objectFit: "contain",
    cursor: "pointer",
    // filter: "drop-shadow(7px -3px 10px #000)",
  },
  agentName: {
    position: "absolute",
    zIndex: "1",
    bottom: "10px",
    left: "15px",
    color: "rgba(255, 255, 255)",
    fontFamily: "Impact !important",
    filter: "drop-shadow(7px -3px 10px #000)",
  },
});
