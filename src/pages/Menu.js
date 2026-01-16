import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  IconButton,
  Dialog,
  useMediaQuery,
} from "@mui/material";

import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CloseIcon from "@mui/icons-material/Close";

import { MenuList } from "../data/data";

const Menu = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        py: 4,
      }}
    >
      {MenuList.map((menu, index) => (
        <ImageSliderCard key={index} menu={menu} />
      ))}
    </Box>
  );
};

const ImageSliderCard = ({ menu }) => {
  const [current, setCurrent] = useState(0);
  const [open, setOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width:600px)");

  const total = menu.images.length;

  const next = () => setCurrent((prev) => (prev + 1) % total);
  const prev = () => setCurrent((prev) => (prev - 1 + total) % total);

  let touchStartX = 0;

  const handleTouchStart = (e) => {
    touchStartX = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (diff > 50) next();
    if (diff < -50) prev();
  };

  return (
    <>
      {/* CARD */}
      <Card sx={{ maxWidth: 360, m: 2 }}>
        <Box sx={{ position: "relative" }}>
          <CardMedia
            component="img"
            height="380"
            image={menu.images[current]}
            alt={menu.name}
            onClick={() => setOpen(true)}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            sx={{ cursor: "pointer" }}
          />

          {total > 1 && (
            <>
              <IconButton
                onClick={prev}
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: 8,
                  transform: "translateY(-50%)",
                  bgcolor: "rgba(0,0,0,0.6)",
                  color: "#fff",
                }}
              >
                <ArrowBackIosNewIcon fontSize="small" />
              </IconButton>

              <IconButton
                onClick={next}
                sx={{
                  position: "absolute",
                  top: "50%",
                  right: 8,
                  transform: "translateY(-50%)",
                  bgcolor: "rgba(0,0,0,0.6)",
                  color: "#fff",
                }}
              >
                <ArrowForwardIosIcon fontSize="small" />
              </IconButton>
            </>
          )}
        </Box>

        <CardContent>
          <Typography variant="h6" fontWeight="bold">
            {menu.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {menu.description}
          </Typography>
        </CardContent>
      </Card>

      {/* POPUP */}
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        fullScreen={isMobile}
        maxWidth="md"
      >
        <Box sx={{ position: "relative", bgcolor: "#000" }}>
          <IconButton
            onClick={() => setOpen(false)}
            sx={{ position: "absolute", top: 10, right: 10, color: "#fff", zIndex: 10 }}
          >
            <CloseIcon />
          </IconButton>

          <Box
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            sx={{ position: "relative" }}
          >
            <img
              src={menu.images[current]}
              alt={menu.name}
              style={{
                width: "100%",
                height: isMobile ? "60vh" : "500px",
                objectFit: "contain",
              }}
            />

            {total > 1 && (
              <>
                <IconButton
                  onClick={prev}
                  sx={{
                    position: "absolute",
                    top: "50%",
                    left: 10,
                    transform: "translateY(-50%)",
                    bgcolor: "rgba(0,0,0,0.6)",
                    color: "#fff",
                  }}
                >
                  <ArrowBackIosNewIcon />
                </IconButton>

                <IconButton
                  onClick={next}
                  sx={{
                    position: "absolute",
                    top: "50%",
                    right: 10,
                    transform: "translateY(-50%)",
                    bgcolor: "rgba(0,0,0,0.6)",
                    color: "#fff",
                  }}
                >
                  <ArrowForwardIosIcon />
                </IconButton>
              </>
            )}
          </Box>

          <Box sx={{ p: 3, bgcolor: "#fff" }}>
            <Typography variant="h5" fontWeight="bold">
              {menu.name}
            </Typography>
            <Typography sx={{ mt: 1 }}>
              {menu.description}
            </Typography>
            {/*{<Typography sx={{ mt: 2, fontWeight: "bold", color: "goldenrod" }}>
              Price: ₹{menu.price}
            </Typography>}*/}
          </Box>
        </Box>
      </Dialog>
    </>
  );
};

export default Menu;
