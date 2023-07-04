import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
// import { useMediaQuery, Theme } from "@mui/material";
import { Divider } from "@mui/material";
import {
  Avatar,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Button,
  Link as Muilink,
} from "@mui/material";
import ForwardToInboxIcon from "@mui/icons-material/ForwardToInbox";
import PeopleIcon from "@mui/icons-material/People";
import avatarthumbnail from "../assets/pictures/AvatarThumnail.jpg";
import CloseIcon from "@mui/icons-material/Close";
import FaceIcon from "@mui/icons-material/Face";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import HealingIcon from "@mui/icons-material/Healing";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link } from "react-router-dom";

export default function MenuAppBar() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [open, setOpen] = useState(false);

  const pageNav = [{
    name : "Student",
    path : "/studentlist",
    icon : <FaceIcon />
  },{
    name : "Subject",
    path : "/subject",
    icon : <MenuBookIcon />
  },{
    name : "Calculate Miss",
    path : "/calculatemiss",
    icon : <HealingIcon />
  },]

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleOpenDrawer = () => {
    setOpen(true);
  };

  const handleCloseDrawer = () => {
    setOpen(false);
  };

  // const isMobile = useMediaQuery((theme:Theme) => theme.breakpoints.down("sm"));
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleOpenDrawer}
          >
            <MenuIcon />
          </IconButton>
          <PeopleIcon />
          <Muilink
            component={Link}
            to="/studentlist"
            underline="none"
            variant="h6"
            sx={{ flexGrow: 1, ml: 2, color: "white" }}
          >
            <Typography variant="body1">Student Checklist System</Typography>
          </Muilink>

          <div>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <Avatar alt="My profile" src={avatarthumbnail} />
            </IconButton>

            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <Link
                to="/profile"
                style={{ textDecoration: "none", color: "black" }}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
              </Link>
              <Link
                to="/"
                style={{ textDecoration: "none", color: "black" }}
              >
                <MenuItem>Log Out</MenuItem>
              </Link>
            </Menu>

          </div>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="left"
        open={open}
        onClose={handleCloseDrawer}
        PaperProps={{
          style: {
            width: 240, // Customize the width of the drawer
          },
        }}
      >
        <List>
          <ListItem button onClick={handleCloseDrawer}>
            <ListItemIcon>
              <CloseIcon />
            </ListItemIcon>
            <ListItemText primary="Close Menu Bar" />
          </ListItem>
          <Divider />
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              mt: 2,
            }}
          >
            <Avatar
              alt="My profile"
              src={avatarthumbnail}
              sx={{
                width: 100,
                height: 100,
              }}
            />
          </Box>

          {pageNav.map((page)=>(
               <Muilink
               component={Link}
               to={page.path}
               underline="none"
               variant="h6"
               sx={{ color: "#000000DE" }}
             >
               <ListItem button sx={{ mt: 2 }}>
                 <ListItemIcon>
                   {page.icon}
                 </ListItemIcon>
                 <ListItemText primary={page.name} />
               </ListItem>
             </Muilink>
          ))}

          <Divider />

          <Muilink
            component={Link}
            to="/"
            sx={{ textDecoration: "none", color: "#000000DE" }}
          >
            <ListItem button sx={{ mt: 2 }}>
              <ListItemIcon>
                <LogoutIcon />
              </ListItemIcon>
              <ListItemText primary="Log out" />
            </ListItem>
          </Muilink>
        </List>
      </Drawer>
    </Box>
  );
}
