import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
import { Link, useNavigate, Outlet } from "react-router-dom";
import { useStyles } from "./styles";
import { Grid, Box, IconButton, Typography } from "@mui/material";
import image from "../assets/drawer-background.png";
import MenuIcon from "@mui/icons-material/Menu";
import { MenuOption } from "../interfaces/layout";
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

  const menuOptions: MenuOption[] = [
    { id: 1, path: "/agents", icon: <GiBowman size={27} />, label: "Agents" },
    {
      id: 2,
      path: "/buddies",
      icon: <GiGingerbreadMan size={27} />,
      label: "Buddies",
    },
    { id: 3, path: "/cards", icon: <GiCardRandom size={27} />, label: "Cards" },
    { id: 4, path: "/maps", icon: <GiModernCity size={27} />, label: "Maps" },
    { id: 5, path: "/sprays", icon: <GiSpray size={27} />, label: "Sprays" },
    { id: 6, path: "/weapons", icon: <GiMac10 size={27} />, label: "Weapons" },
  ];

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
          {menuOptions.map((item) => (
            <MenuItem
              routerLink={<Link to={item.path} />}
              icon={item.icon}
              key={item.id}
            >
              <Typography fontSize={18}>{item.label}</Typography>
            </MenuItem>
          ))}
        </Menu>
      </Sidebar>
      <Grid className={classes.main}>
        <Grid className={classes.navbar}>
          <IconButton onClick={() => collapseSidebar()} disableRipple>
            <MenuIcon className={classes.menuIcon} />
          </IconButton>
        </Grid>
        <Grid className={classes.contentRoot}>
          <Grid className={classes.content}>
            <Outlet />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Layout;
