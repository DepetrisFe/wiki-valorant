import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";

export const useStyles = makeStyles((theme: Theme) => {
  return {
    root: {
      minHeight: "100%",
    },
    agentDetailContainer: {
      display: "grid",
      padding: "20px",
      [theme.breakpoints.down(900)]: {
        padding: "0px",
      },
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
      [theme.breakpoints.down(650)]: {
        width: "20%",
        height: "20%",
      },
    },
    abilityImgContainerSelected: {
      padding: "10px",
      width: "90px",
      height: "90px",
      backgroundColor: "rgb(255, 255, 255, 0.3)",
      [theme.breakpoints.down(650)]: {
        width: "20%",
        height: "20%",
      },
    },
    abilityDescriptionContainer: {
      padding: "10px",
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
    agentImageContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      position: "relative",
      [theme.breakpoints.down("lg")]: {
        height: "70vh",
      },
    },
    backgroundImg: {
      position: "absolute",
      height: "100%",
      width: "100%",
      objectFit: "cover",
      opacity: "0.3",
    },
    fullPortraitImg: {
      position: "absolute",
      height: "90%",
      width: "90%",
      objectFit: "cover",
      filter: "drop-shadow(7px -3px 10px #000)",
      [theme.breakpoints.down("lg")]: {
        height: "70vh",
      },
    },
  };
});
