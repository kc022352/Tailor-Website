import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <>
      <Box 
        sx={{ 
          textAlign:'center', 
          bgcolor:'#1A1A19', 
          color:'white', 
          p:2 
        }}
      >

        {/* ICONS */}
        <Box 
          sx={{ 
            my:2,
            display:"flex",
            alignItems:"center",
            justifyContent:"center",
            gap:2,

            "& svg":{
              cursor:"pointer",
              transition:"all 0.3s"
            },

            "& svg:hover":{
              color:"goldenrod",
              transform:"translateY(-3px)"
            },

            "@media (max-width:600px)":{
              gap:1
            }
          }}
        >
          <InstagramIcon sx={{ fontSize:50 }} />
          <TwitterIcon sx={{ fontSize:50 }} />
          <GitHubIcon sx={{ fontSize:50 }} />
          <YouTubeIcon sx={{ fontSize:50 }} />
        </Box>

        {/* TEXT */}
        <Typography 
          sx={{
            fontSize:"1.1rem",
            "@media (max-width:600px)":{
              fontSize:"0.9rem"
            }
          }}
        >
          All Rights Reseverd © Men's Wear YT
        </Typography>

      </Box>
    </>
  )
}

export default Footer;
