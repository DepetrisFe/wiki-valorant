import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  root: {
    minHeight: "100%",
  },
  main: {
    display: "flex",
    border: "1px solid red",
  },
  abilitiesContainer: {
    width: "100%",
  },
  abilityContainer: {
    width: "100px",
    height: "100px",
  },
  skillIcon: {
    height: "100%",
    width: "100%",
    objectFit: "contain",
    cursor: "pointer",
  },
  abilityDescription: {
    border: "1px solid red",
  },
  test: {
    display: "flex",
    justifyContent: "space-around",
  },
});
