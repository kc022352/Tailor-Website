import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const About = () => {
  return (
    <Box sx={{ backgroundColor: "#f4f4f4", py: 8 }}>
      <Container maxWidth="md">
        <Box sx={{ background: "#fff", borderRadius: "14px", boxShadow: "0 10px 30px rgba(0,0,0,0.15)", p: { xs: 3, sm: 5 }, textAlign: "center" }}>
          <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>Welcome To My Shop</Typography>
          <Box sx={{ width: "80px", height: "4px", backgroundColor: "#d4af37", borderRadius: "5px", mx: "auto", mb: 3 }} />
          <Typography sx={{ fontSize: "18px", lineHeight: 1.9, color: "#444", textAlign: "justify" }}>
            At Akash Men’s, we bring your style to life with meticulously crafted menswear. From 
            traditional ethnic outfits to modern Indo-Western designs, our collection is tailored 
            to perfection, ensuring comfort, elegance, and a flawless fit. Whether it’s for casual 
            wear, office, or special occasions, we blend quality fabrics with timeless designs to 
            help you make a statement. Visit our store in Mumbai, Maharashtra, and experience 
            personalized tailoring that reflects your unique style.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default About;
