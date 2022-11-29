import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  root: {
    height: "100%",
  },
  main: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, 200px)",
    gridGap: "2rem",
    justifyContent: "center",
  },
  imageContainer: {
    height: "150px",
    width: "150px",
  },
  image: {
    height: "100%",
    width: "100%",
    objectFit: "contain",
  },
  paginationContainer: {
    display: "flex",
    justifyContent: "center",
  },
  pagination: {
    "& .MuiPaginationItem-root": {
      color: "rgba(255, 255, 255, 0.87)",
    },
  },
});
