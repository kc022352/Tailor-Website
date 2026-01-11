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
import Logo from "../../images/logo1.avif";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  const links = [
    { name: "Home", href: "#home" },
    { name: "Menu", href: "#menu" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  /* ================= MOBILE DRAWER ================= */
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center", py: 3,backgroundColor: "black" }}>
      {/* 🔥 CIRCULAR LOGO (DRAWER) */}
      <Box
        component="img"
        src={Logo}
        alt="logo"
        sx={{
          height: 60,
          width: 60,
          mx: "auto",
          mb: 1,
          borderRadius: "50%",
          objectFit: "cover",
          border: "3px solid goldenrod",
          backgroundColor: "black"
        }}
      />

      <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
        {links.map((link) => (
          <Button
            key={link.name}
            component="a"
            href={link.href}
            sx={{
              color: "goldenrod",
              fontWeight: 700,
              letterSpacing: "1px",
              "&:hover": {
                backgroundColor: "rgba(218,165,32,0.12)",
              },
            }}
          >
            {link.name}
          </Button>
        ))}
      </Box>
    </Box>
  );

  return (
    <>
      <AppBar component="nav" sx={{ bgcolor: "black" }}>
        <Toolbar sx={{ py: 1.3 }}>
          {/* Logo + Brand */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
            {/* 🔥 CIRCULAR LOGO (NAVBAR) */}
            <Box
              component="img"
              src={Logo}
              alt="logo"
              sx={{
                height: { xs: 45, sm: 55 },
                width: { xs: 45, sm: 55 },
                borderRadius: "50%",
                objectFit: "cover",
                border: "2px solid goldenrod"
              }}
            />

            <Typography
              sx={{
                fontWeight: 800,
                fontSize: { xs: "1.1rem", sm: "1.4rem" },
                letterSpacing: "1.2px",
                color: "goldenrod",
                textTransform: "uppercase"
              }}
            >
              Akash Men’s Wear
            </Typography>
          </Box>

          {/* Mobile Burger Menu */}
          <IconButton
            edge="end"
            onClick={handleDrawerToggle}
            sx={{
              ml: "auto",
              display: { sm: "none" },
              backgroundColor: "goldenrod",
              color: "black",
              width: 45,
              height: 45,
              borderRadius: "50%",
              "&:hover": {
                backgroundColor: "#c9a227",
              },
                    
            }
          }
          >


            <MenuIcon />


          </IconButton>

          {/* Desktop Links */}
          <Box
            sx={{
              ml: "auto",
              display: { xs: "none", sm: "flex" },
              gap: 1,
            }}
          >
            {links.map((link) => (
              <Button
                key={link.name}
                component="a"
                href={link.href}
                sx={{
                  color: "white",
                  fontWeight: 600,
                  "&:hover": {
                    color: "goldenrod",
                  },
                }}
              >
                {link.name}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{ display: { xs: "block", sm: "none"}   }}
      >
        {drawer}
      </Drawer>

      <Toolbar /> {/* Spacer */}
    </>
  );
};

export default Navbar;
