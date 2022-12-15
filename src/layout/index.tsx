import { useState } from "react";
import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
import { Link, useNavigate, Outlet } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { useStyles } from "./styles";
import {
  Grid,
  Box,
  IconButton,
  Typography,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
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
import Drawer from "@mui/material/Drawer";

const Layout = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const { collapseSidebar } = useProSidebar();
  const [openMobileMenu, setOpenMobileMenu] = useState<boolean>(false);
  const isMobile = useMediaQuery({ query: "(max-width: 900px)" });

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

  const toggleMobileDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setOpenMobileMenu(open);
    };

  return (
    <Grid className={classes.root}>
      {!isMobile && (
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
      )}
      {isMobile && (
        <Drawer
          anchor="top"
          open={openMobileMenu}
          onClose={toggleMobileDrawer(false)}
        >
          <Box
            sx={{ background: "rgb(39, 39, 47)" }}
            role="presentation"
            onClick={toggleMobileDrawer(false)}
            onKeyDown={toggleMobileDrawer(false)}
          >
            <List>
              {menuOptions.map((item) => (
                <ListItem
                  key={item.id}
                  component={Link}
                  to={item.path}
                  disablePadding
                >
                  <ListItemButton>
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.label} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>
      )}
      <Grid className={classes.main}>
        <Grid className={classes.navbar}>
          <IconButton
            onClick={
              isMobile ? () => setOpenMobileMenu(true) : () => collapseSidebar()
            }
            disableRipple
          >
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
