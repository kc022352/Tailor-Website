import React, { useState } from "react";
import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";
import Logo from "../../images/logo1.avif";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center", py: 2 }}>
      <Box
        component="img"
        src={Logo}
        alt="logo"
        sx={{
          height: 110,
          width: "auto",
          objectFit: "contain",
          mx: "auto",
        }}
      />

      <Box sx={{ my: 2 }}>
        <Button component={NavLink} to="/" color="inherit">
          Home
        </Button>
        <Button component={NavLink} to="/menu" color="inherit">
          Menu
        </Button>
        <Button component={NavLink} to="/about" color="inherit">
          About
        </Button>
        <Button component={NavLink} to="/contact" color="inherit">
          Contact
        </Button>
      </Box>
    </Box>
  );

  return (
    <>
      <AppBar component="nav" sx={{ bgcolor: "black" }}>
        <Toolbar sx={{ py: 1.2 }}>
          {/* LEFT LOGO */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
  <Box
    component="img"
    src={Logo}
    alt="logo"
    sx={{
      height: 95,
      width: "auto",
      objectFit: "contain",
      display: "block",
    }}
  />

  <Typography
    variant="h5"
    sx={{
      fontWeight: "bold",
      color: "goldenrod",
      letterSpacing: "1px",
    }}
  >
    Akash Men’s Wear
  </Typography>
</Box>

          {/* MOBILE MENU BUTTON */}
          <IconButton
            color="inherit"
            edge="end"
            sx={{ ml: "auto", display: { sm: "none" } }}
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>

          {/* DESKTOP LINKS */}
          <Box sx={{ ml: "auto", display: { xs: "none", sm: "block" } }}>
            <Button component={NavLink} to="/" sx={{ color: "white" }}>
              Home
            </Button>
            <Button component={NavLink} to="/menu" sx={{ color: "white" }}>
              Menu
            </Button>
            <Button component={NavLink} to="/about" sx={{ color: "white" }}>
              About
            </Button>
            <Button component={NavLink} to="/contact" sx={{ color: "white" }}>
              Contact
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      {/* DRAWER */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{ display: { xs: "block", sm: "none" } }}
      >
        {drawer}
      </Drawer>

      <Toolbar />
    </>
  );
};

export default Navbar;
