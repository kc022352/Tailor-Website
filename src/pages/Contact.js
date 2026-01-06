import React from 'react'
import Layout from '../components/Layout/Layout'
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, Container } from '@mui/material'
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';

const Contact = () => {
  return (
    <Layout>

      <Box sx={{ background: "#f4f4f4", py: 6 }}>
        <Container maxWidth="md">

          {/* HEADING SECTION */}
          <Box sx={{ textAlign: "center", mb: 4 }}>
            <Typography variant="h4" sx={{ fontWeight: "bold" }}>
              Contact My Website
            </Typography>

            <Box sx={{
              width: "80px",
              height: "4px",
              backgroundColor: "#d4af37",
              borderRadius: "5px",
              mx: "auto",
              mt: 1,
              mb: 3
            }}/>

            <Typography sx={{ fontSize: "18px", color: "#444", lineHeight: 1.8 }}>
              We would love to hear from you! Whether you have a question, need a custom order,
              or want to discuss your style ideas, feel free to reach out. Our team is always
              ready to assist you and ensure your experience with us is seamless and satisfying.
            </Typography>
          </Box>

          {/* CONTACT CARD */}
          <TableContainer 
            component={Paper} 
            sx={{ 
              borderRadius: "14px",
              boxShadow: "0 10px 25px rgba(0,0,0,0.15)"
            }}
          >
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell 
                    align="center" 
                    sx={{ 
                      bgcolor: "black", 
                      color: "white",
                      fontSize: "18px",
                      fontWeight: "bold"
                    }}
                  >
                    Contact Details
                  </TableCell>
                </TableRow>
              </TableHead>

              <TableBody>

                <TableRow>
                  <TableCell sx={{ fontSize: "17px" }}>
                    <SupportAgentIcon sx={{ color: "red", mr: 1 }}/> 
                    1800-256-256 (Toll-Free)
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell sx={{ fontSize: "17px" }}>
                    <EmailIcon sx={{ color: "skyblue", mr: 1 }}/> 
                    KodamTech@gmail.com
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell sx={{ fontSize: "17px" }}>
                    <CallIcon sx={{ color: "green", mr: 1 }}/> 
                    9833812843
                  </TableCell>
                </TableRow>

              </TableBody>
            </Table>
          </TableContainer>

        </Container>
      </Box>

    </Layout>
  )
}

export default Contact
