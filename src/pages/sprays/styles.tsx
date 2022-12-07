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
    height: "200px",
    width: "200px",
  },
  image: {
    height: "100%",
    width: "100%",
    objectFit: "contain",
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
