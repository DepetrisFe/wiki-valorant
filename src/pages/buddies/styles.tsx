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
  nameContainer: {
    backgroundColor: "rgb(39, 39, 47, 0.7)",
    padding: "0px 2px 15px 2px",
    maxHeight: "100%",
  },
  buddyName: {
    height: "100%",
    writingMode: "vertical-lr",
    transform: "rotate(-180deg)",
  },
  imageContainer: {
    display: "flex",
    backgroundColor: "rgb(39, 39, 47, 0.3)",
    height: "280px",
    width: "220px",
  },
  image: {
    height: "100%",
    width: "100%",
    objectFit: "contain",
    filter: "drop-shadow(0px -3px 10px #000)",
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
