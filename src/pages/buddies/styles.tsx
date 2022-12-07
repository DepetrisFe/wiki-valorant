import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  root: {
    position: "relative",
    minHeight: "100%",
    paddingBottom: "60px",
  },
  main: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, 220px)",
    gridGap: "2rem",
    justifyContent: "center",
    paddingTop: "30px",
  },
  imageContainer: {
    height: "220px",
    width: "220px",
    padding: "10px 0px",
  },
  image: {
    height: "100%",
    width: "100%",
    objectFit: "contain",
    filter: "drop-shadow(7px -3px 10px #000)",
  },
  paginationContainer: {
    position: "absolute",
    display: "flex",
    justifyContent: "center",
    width: "100%",
    bottom: "10px",
  },
  pagination: {
    "& .MuiPaginationItem-root": {
      color: "rgba(255, 255, 255, 0.87)",
    },
  },
});
