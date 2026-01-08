import React, { useState } from "react";
import { AppBar, Box, Drawer, IconButton, Toolbar, Typography, Button } from "@mui/material";
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

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center", py: 3 }}>
      <Box component="img" src={Logo} alt="logo" sx={{ height: 90, mx: "auto", mb: 2 }} />
      <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
        {links.map(link => (
          <Button key={link.name} component="a" href={link.href} sx={{ color: "black", fontWeight: 600 }}>
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
            <Box component="img" src={Logo} alt="logo" sx={{ height: { xs: 45, sm: 55 } }} />
            <Typography sx={{ fontWeight: 800, fontSize: { xs: "1.1rem", sm: "1.4rem" }, letterSpacing: "1.2px", color: "goldenrod", textTransform: "uppercase" }}>
              Akash Men’s Wear
            </Typography>
          </Box>

          {/* Mobile Menu Icon */}
          <IconButton color="inherit" edge="end" sx={{ ml: "auto", display: { sm: "none" } }} onClick={handleDrawerToggle}>
            <MenuIcon />
          </IconButton>

          {/* Desktop Links */}
          <Box sx={{ ml: "auto", display: { xs: "none", sm: "flex" }, gap: 1 }}>
            {links.map(link => (
              <Button key={link.name} component="a" href={link.href} sx={{ color: "white", fontWeight: 600 }}>
                {link.name}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer anchor="right" open={mobileOpen} onClose={handleDrawerToggle} sx={{ display: { xs: "block", sm: "none" } }}>
        {drawer}
      </Drawer>

      <Toolbar /> {/* Spacer */}
    </>
  );
};

export default Navbar;
