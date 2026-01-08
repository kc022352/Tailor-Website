import React from "react";
import { Box, Typography, TextField, Button, Paper } from "@mui/material";

export default function Contact() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "40px 20px",
        backgroundColor: "#f5f5f5",
      }}
    >
      <Typography variant="h4" gutterBottom>
        Contact My Website
      </Typography>
      <Typography variant="body1" gutterBottom>
        We would love to hear from you! Reach us on WhatsApp or call.
      </Typography>

      {/* Buttons */}
      <Box sx={{ display: "flex", gap: 2, marginBottom: 4 }}>
        <Button variant="outlined" color="primary">
          WhatsApp
        </Button>
        <Button variant="outlined" color="primary">
          Call Us
        </Button>
      </Box>

      {/* Form */}
      <Paper
        elevation={3}
        sx={{
          padding: "20px",
          maxWidth: "400px",
          width: "100%",
          marginBottom: "30px",
        }}
      >
        <Typography variant="h6" gutterBottom>
          Send Us a Message
        </Typography>
        <TextField
          label="Name"
          variant="outlined"
          fullWidth
          margin="normal"
        />
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          margin="normal"
        />
        <TextField
          label="Message"
          variant="outlined"
          fullWidth
          margin="normal"
          multiline
          rows={4}
        />
        <Button
          variant="contained"
          color="primary"
          fullWidth
          sx={{ marginTop: "10px" }}
        >
          Send Message
        </Button>
      </Paper>

      {/* Shop Details */}
      <Box sx={{ textAlign: "center" }}>
        <Typography variant="h6">Akash Men’s Wear</Typography>
        <Typography>Shop Address: Mumbai, Maharashtra</Typography>
        <Typography>Toll-Free Number: 1800-XXX-XXXX</Typography>
        <Typography>WhatsApp / Call Us for Enquiries</Typography>
      </Box>
    </Box>
  );
}
