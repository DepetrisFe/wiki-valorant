import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  root: {
    minHeight: "100%",
  },
  abilityImgContainer: {
    padding: "10px",
    width: "90px",
    height: "90px",
  },
  abilityImgContainerSelected: {
    padding: "10px",
    width: "90px",
    height: "90px",
    backgroundColor: "rgb(255, 255, 255, 0.3)",
  },
  abilitiesContainer: {
    display: "flex",
    justifyContent: "center",
  },
  abilitiesDescriptionContainer: {
    border: "2px solid rgb(255, 255, 255, 0.3)",
    padding: "5px",
  },
  abilityImg: {
    height: "100%",
    width: "100%",
    objectFit: "contain",
    cursor: "pointer",
  },
  fullPortraitImg: {
    width: "100%",
    height: "auto",
  },
  roleContainer: {
    display: "flex",
    alignItems: "center",
    padding: "5px 0px",
    backgroundColor: "rgb(255, 255, 255, 0.3)",
  },
  roleIconImg: {
    height: "40px",
    width: "40px",
    margin: "0px 10px",
  },
  fullPortraitContainer: {
    position: "relative",
  },
  agentName: {
    position: "absolute",
    top: "0",
    left: "0",
  },
});
