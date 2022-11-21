import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  imageContainer: {
    border: "1px solid purple",
    height: "200px",
    width: "200px",
  },
  image: {
    height: "100%",
    width: "100%",
    objectFit: "contain",
  },
});
