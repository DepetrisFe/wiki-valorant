import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  root: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, 300px)",
    gridGap: "2rem",
    justifyContent: "center",
    paddingTop: "20px",
  },
  imageContainer: {
    position: "relative",
    height: "300px",
    width: "300px",
    margin: "20px 0px",
    transition: "transform 0.5s",
    "&:hover": {
      transform: "scale(1.03)",
    },
  },
  image: {
    height: "100%",
    width: "100%",
    objectFit: "cover",
    cursor: "pointer",
  },
  nameContainer: {
    display: "flex",
    justifyContent: "center",
    position: "absolute",
    bottom: "0",
    left: "0",
    right: "0",
    backgroundColor: "rgb(39, 39, 47, 0.5)",
  },
  mapName: {
    fontFamily: "Impact !important",
  },
  //TODO: hide scroll bars, change to dinamic sizes
  mapDialog: {
    width: "600px",
    height: "600px",
  },
  mapPreview: {
    height: "100%",
    width: "100%",
    objectFit: "contain",
  },
});
