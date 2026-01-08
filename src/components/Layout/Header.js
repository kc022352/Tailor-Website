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

  /* ================= MOBILE DRAWER ================= */
  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        textAlign: "center",
        py: 3,
      }}
    >
      <Box
        component="img"
        src={Logo}
        alt="logo"
        sx={{
          height: 90,
          mx: "auto",
          mb: 2,
        }}
      />

      <Typography
        sx={{
          fontWeight: 700,
          fontSize: "1.2rem",
          mb: 2,
          color: "black",
        }}
      >
        Akash Men’s Wear
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 1.5,
        }}
      >
        {["Home", "Menu", "About", "Contact"].map((item) => (
          <Button
            key={item}
            component={NavLink}
            to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
            sx={{
              color: "black",
              fontWeight: 600,
            }}
          >
            {item}
          </Button>
        ))}
      </Box>
    </Box>
  );

  return (
    <>
      <AppBar component="nav" sx={{ bgcolor: "black" }}>
        <Toolbar sx={{ py: 1.3 }}>
          {/* ================= LOGO + BRAND ================= */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1.5,           // 🔥 space control
            }}
          >
            <Box
              component="img"
              src={Logo}
              alt="logo"
              sx={{
                height: { xs: 45, sm: 55 }, // mobile / desktop
              }}
            />

            <Typography
              sx={{
                fontWeight: 800,
                fontSize: { xs: "1.1rem", sm: "1.4rem" },
                letterSpacing: "1.2px",
                color: "goldenrod",
                textTransform: "uppercase",
              }}
            >
              Akash Men’s Wear
            </Typography>
          </Box>

          {/* ================= MOBILE MENU ICON ================= */}
          <IconButton
            color="inherit"
            edge="end"
            sx={{ ml: "auto", display: { sm: "none" } }}
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>

          {/* ================= DESKTOP MENU ================= */}
          <Box sx={{ ml: "auto", display: { xs: "none", sm: "flex" }, gap: 1 }}>
            {["Home", "Menu", "About", "Contact"].map((item) => (
              <Button
                key={item}
                component={NavLink}
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                sx={{
                  color: "white",
                  fontWeight: 600,
                  "&.active": {
                    color: "goldenrod",
                  },
                }}
              >
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>

      {/* ================= DRAWER ================= */}
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
