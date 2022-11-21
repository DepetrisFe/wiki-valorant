import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
import { Link, useNavigate, Outlet } from "react-router-dom";
import { useStyles } from "./styles";
import { Grid, Box, IconButton } from "@mui/material";
import image from "../assets/drawer-background.png";
import MenuIcon from "@mui/icons-material/Menu";
import {
  GiMac10,
  GiBowman,
  GiGingerbreadMan,
  GiCardRandom,
  GiModernCity,
  GiSpray,
} from "react-icons/gi";

const Layout = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const { collapseSidebar } = useProSidebar();

  return (
    <Grid className={classes.root}>
      <Sidebar
        className={classes.sidebar}
        collapsedWidth="0px"
        backgroundColor="rgb(39, 39, 47, 0.8)"
        image={image}
      >
        <Box className={classes.logoContainer}>
          <img
            src="https://i.postimg.cc/4xpVmsFS/radianite3521.png"
            alt="randianite logo"
            className={classes.logo}
            onClick={() => {
              navigate("/");
            }}
          />
        </Box>
        <Menu
          renderMenuItemStyles={() => ({
            ".menu-anchor: hover": {
              backgroundColor: "#1f1f24",
            },
          })}
        >
          <MenuItem
            routerLink={<Link to="/agents" />}
            icon={<GiBowman size={27} />}
          >
            Agents
          </MenuItem>
          <MenuItem
            routerLink={<Link to="/buddies" />}
            icon={<GiGingerbreadMan size={27} />}
          >
            Buddies
          </MenuItem>
          <MenuItem
            routerLink={<Link to="/cards" />}
            icon={<GiCardRandom size={27} />}
          >
            Cards
          </MenuItem>
          <MenuItem
            routerLink={<Link to="/maps" />}
            icon={<GiModernCity size={27} />}
          >
            Maps
          </MenuItem>
          <MenuItem
            routerLink={<Link to="/sprays" />}
            icon={<GiSpray size={27} />}
          >
            Sprays
          </MenuItem>
          <MenuItem
            routerLink={<Link to="/weapons" />}
            icon={<GiMac10 size={27} />}
          >
            Weapons
          </MenuItem>
        </Menu>
      </Sidebar>
      <Grid className={classes.main}>
        <Grid className={classes.navbar}>
          <IconButton onClick={() => collapseSidebar()} disableRipple>
            <MenuIcon className={classes.menuIcon} />
          </IconButton>
        </Grid>
        <Grid className={classes.content}>
          <Outlet />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Layout;
