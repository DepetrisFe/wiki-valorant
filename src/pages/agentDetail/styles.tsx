import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  root: {
    minHeight: "100%",
  },
  agentDetailContainer: {
    display: "grid",
    padding: "20px",
  },
  agentNameContainer: {
    display: "flex",
    alignItems: "center",
    position: "relative",
    height: "120px",
  },
  descriptionContainer: {
    marginBottom: "10px",
  },
  roleImg: {
    position: "absolute",
    height: "100px",
    width: "100px",
    objectFit: "contain",
    opacity: "0.3",
    top: "0px",
  },
  roleName: {
    position: "absolute",
    top: "25px",
    left: "50px",
  },
  roleDescriptionContainer: {
    padding: "10px",
  },
  agentName: {
    position: "absolute",
    top: "30px",
    left: "45px",
  },
  abilityImgContainer: {
    padding: "10px",
    width: "90px",
    height: "90px",
  },
  abilityDescriptionContainer: {
    padding: "10px",
  },
  abilityImgContainerSelected: {
    padding: "10px",
    width: "90px",
    height: "90px",
    backgroundColor: "rgb(255, 255, 255, 0.3)",
  },
  abilitiesContainer: {
    display: "flex",
    justifyContent: "space-around",
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
    display: "flex",
    alignItems: "center",
    height: "100%",
  },
});
