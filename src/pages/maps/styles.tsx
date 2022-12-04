import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  root: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, 300px)",
    gridGap: "2rem",
    justifyContent: "center",
  },
  imageContainer: {
    position: "relative",
    height: "200px",
    width: "300px",
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
  },
});
