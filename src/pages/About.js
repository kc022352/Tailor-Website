import React from 'react'
import Layout from '../components/Layout/Layout'
import { Box, Typography, Container } from '@mui/material'

const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          backgroundColor: "#f4f4f4",
          py: 8
        }}
      >
        <Container maxWidth="md">
          <Box
            sx={{
              background: "#fff",
              borderRadius: "14px",
              boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
              p: { xs: 3, sm: 5, md: 6 },
              textAlign: "center"
            }}
          >
            <Typography 
              variant="h4" 
              sx={{ 
                fontWeight: "bold",
                mb: 2
              }}
            >
              Welcome To My Shop
            </Typography>

            <Box 
              sx={{
                width: "80px",
                height: "4px",
                backgroundColor: "#d4af37",
                borderRadius: "5px",
                mx: "auto",
                mb: 3
              }}
            />

            <Typography 
              sx={{ 
                fontSize: "18px",
                lineHeight: 1.9,
                color: "#444",
                textAlign: "justify"
              }}
            >
              Welcome to our tailoring services! We provide custom design and stitching for both modern
              and traditional attire. Our team consists of skilled tailors who ensure perfect 
              fit and top-quality craftsmanship in every stitch. Whether it’s for weddings, parties, 
              office, or everyday wear, we pay full attention to your style and comfort. Our goal is 
              not just to sew your clothes, but to create outfits that reflect your personality perfectly.
              At Akash Men’s Wear, we provide premium tailoring services with perfect fitting and 
              high-quality stitching. Whether it’s wedding wear, formal suits, or daily outfits, 
              we design every piece to match your style, comfort, and personality. Our goal is to 
              make you look confident and stylish with perfectly crafted clothing. Experience professional
              tailoring with fine finishing and attention to detail.
            </Typography>

            <br />

            <Typography 
              sx={{ 
                fontSize: "18px",
                lineHeight: 1.9,
                color: "#444",
                textAlign: "justify"
              }}
            >
              We offer professional tailoring services with perfect fitting, premium stitching, and stylish
              finishing. Every outfit is designed with care to match your comfort and style.
              Akash Men’s Wear is dedicated to delivering high-quality custom tailoring services. 
              With years of experience, we understand that perfect fitting makes all the difference.
              From premium fabrics to expert craftsmanship, every stitch is made with precision and care. 
              Customer satisfaction is our first priority, and we believe in providing elegant, comfortable,
              and long-lasting outfits.
            </Typography>
          </Box>
        </Container>
      </Box>
    </Layout>
  )
}

export default About
