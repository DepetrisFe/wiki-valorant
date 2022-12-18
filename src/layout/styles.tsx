import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  root: {
    display: "flex",
  },
  main: {
    width: "100%",
  },
  contentRoot: {
    position: "relative",
    height: "calc(100% - 60px)",
  },
  content: {
    position: "absolute",
    overflowY: "scroll",
    padding: "10px",
    top: "0px",
    left: "0px",
    bottom: "0px",
    right: "0px",
  },
  mobileContent: {
    padding: "10px",
  },
  sidebar: {
    height: "100vh",
    borderRight: "none !important",
  },
  navbar: {
    display: "flex",
    alignItems: "center",
    height: "60px",
    padding: "0px 20px",
    backgroundColor: "rgb(39, 39, 47)",
  },
  logoContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "60px",
  },
  logo: {
    width: "240px",
    cursor: "pointer",
  },
  menuIcon: {
    transform: "scale(1.3)",
    color: "rgba(255, 255, 255, 0.87)",
  },
  mobileMenuItem: {
    color: "rgba(255, 255, 255, 0.87)",
  },
  mobileMenuIcon: {
    color: "rgba(255, 255, 255, 0.87) !important",
  },
});
