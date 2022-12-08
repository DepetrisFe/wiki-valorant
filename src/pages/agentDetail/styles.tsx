import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  root: {
    minHeight: "100%",
  },
  abilityImgContainer: {
    padding: "10px",
    width: "100px",
    height: "100px",
  },
  abilitiesContainer: {
    display: "flex",
    justifyContent: "center",
  },
  abilityImg: {
    height: "100%",
    width: "100%",
    objectFit: "contain",
    cursor: "pointer",
  },
});
