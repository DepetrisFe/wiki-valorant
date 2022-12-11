import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  root: {
    position: "relative",
    minHeight: "100%",
    paddingBottom: "60px",
  },
  main: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, 200px)",
    gridGap: "2rem",
    justifyContent: "center",
  },
  imageContainer: {
    display: "flex",
    height: "400px",
    width: "190px",
  },
  image: {
    height: "100%",
    width: "100%",
    objectFit: "contain",
  },
  cardNameContainer: {
    backgroundColor: "rgb(39, 39, 47, 0.7)",
    padding: "0px 2px 15px 2px",
  },
  cardName: {
    height: "100%",
    writingMode: "vertical-lr",
    transform: "rotate(-180deg)",
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
