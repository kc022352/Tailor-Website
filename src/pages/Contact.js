import React, { useState } from "react";
import { Box, Typography, TextField, Button, Paper } from "@mui/material";

export default function Contact() {
  // 1️⃣ Add state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // 2️⃣ Input handle karne ke liye
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 3️⃣ Form submit handle
  const handleSubmit = (e) => {
    e.preventDefault(); // page reload nahi hoga
    console.log("Form submitted:", formData);
    alert("Thank you! We received your message.");
    setFormData({ name: "", email: "", message: "" }); // form reset
  };

  return (


    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "20px 20px",
        backgroundColor: "#f5f5f5",
      }}
    >

         <Paper
        elevation={3}
        sx={{ padding: "20px", maxWidth: "400px", width: "100%", marginBottom: "30px" }}
      >
      <Typography variant="h4" gutterBottom>
        Contact My Website
      </Typography>
      <Typography variant="body1" gutterBottom>
        We would love to hear from you!<br />
        Reach us on WhatsApp or call.
      </Typography>

      {/* Buttons */}
      <Box sx={{ display: "flex", gap: 2, marginBottom: 4 }}>
        {/* <Button variant="outlined" color="primary">
          WhatsApp
        </Button> */}

          <a
          href="https://wa.me/917738195355?text=Hello%20Sir"
          target="_blank"
          rel="noopener noreferrer"  
        >
          <Button variant="outlined" color="success">WhatsApp</Button>
        </a>


        {/* <Button variant="outlined" color="primary">
          Call Us
        </Button> */}

         <a
          href="tel:+917738195355"
          target="_blank"
          rel="noopener noreferrer"  
        >
          <Button variant="outlined" color="warning">Call Us</Button>
        </a>

      </Box>

      </Paper>


      {/* 4️⃣ Add form */}
      <Paper
        elevation={3}
        sx={{ padding: "20px", maxWidth: "400px", width: "100%", marginBottom: "30px" }}
      >
        <form onSubmit={handleSubmit}>
          <TextField
            label="Name"
            name="name"
            variant="outlined"
            fullWidth
            margin="normal"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <TextField
            label="Email"
            name="email"
            variant="outlined"
            fullWidth
            margin="normal"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <TextField
            label="Message"
            name="message"
            variant="outlined"
            fullWidth
            margin="normal"
            multiline
            rows={4}
            value={formData.message}
            onChange={handleChange}
            required
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ marginTop: "10px" }}
          >
            Send Message
          </Button>
        </form>
      </Paper>

      {/* Shop Details */}
      <Box sx={{ textAlign: "center" }}>
        <Typography variant="h6">Akash Men’s Wear</Typography>
        <Typography>Shop Address: Mumbai, Maharashtra</Typography>
        <Typography>Contact Number: +91 773-819-5355</Typography>
        
      </Box>
    </Box>
  );
}
