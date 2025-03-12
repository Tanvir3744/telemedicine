"use client";
import Image from "next/image";
import assets from "@/assets";
import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";
const HeroSection = () => {
  return (
    <Container sx={{display:"flex", justifyContent:"center"}}>
      <Box>
        <Box
          sx={{
            width: 600,
            marginTop: "80px",
            position: "absolute",
            marginLeft:"-120px"
          }}
        >
          <Image src={assets.svgs.grid} alt="grid_image" />
        </Box>
        <Box sx={{position:"relative", top:"250px", left:"0", bottom:"0", right:"0"}}>
          <Typography sx={{color:"#1e727e"}} variant="h2" fontWeight={600} component="h3">
            Healthier Hearts
          </Typography>
          <Typography sx={{color:"#1e727e"}} variant="h2" fontWeight={600} component="h3">
            Come From
          </Typography>
          <Typography
            variant="h2"
            fontWeight={600}
            color="primary.main"
            component="h3"
          >
            Preventive Care
          </Typography>
          <Typography mt={2} width={650} color="#1e272e" fontWeight={400}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates
            earum veritatis optio aspernatur corporis suscipit, corrupti quas
            fuga distinctio assumenda consectetur. Suscipit, nisi perspiciatis?
            Obcaecati pariatur nihil nulla minima quis soluta rerum magnam.
          </Typography>
        </Box>

        <Box sx={{position:"relative", top:"280px"}}>
          <Button sx={{ padding: "8px" }}>Make Appointment</Button>
          <Button
            variant="outlined"
            sx={{ marginLeft: "10px", padding: "8px" }}
          >
            Contact Us
          </Button>
        </Box>
      </Box>

      {/* hero section right part */}
      <Box
        sx={{
          p: 1,
          flex: 1,
          display: "flex",
          justifyContent: "center",
          position: "relative",
          marginTop:"200px"
        }}
      >
        <Box
          sx={{
            position: "absolute",
            left: "200px",
            top: "-30px",
          }}
        >
          <Image src={assets.svgs.arrow} width={100} height={100} alt="arrow" />
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: 2,
          }}
        >
          <Box mt={4}>
            <Image
              src={assets.images.doctor1}
              width={240}
              height={380}
              alt="doctor1"
            />
          </Box>
          <Box>
            <Image
              src={assets.images.doctor2}
              width={240}
              height={350}
              alt="doctor2"
            />
          </Box>
        </Box>
        <Box
          sx={{
            position: "absolute",
            top: "220px",
            left: "150px",
          }}
        >
          <Image
            src={assets.images.doctor3}
            width={240}
            height={240}
            alt="doctor3"
          />
        </Box>
        <Box
          sx={{
            position: "absolute",
            bottom: "-50px",
            right: 0,
            zIndex: "-1",
          }}
        >
          <Image
            src={assets.images.stethoscope}
            width={180}
            height={180}
            alt="doctor3"
          />
        </Box>
      </Box>
    </Container>
  );
};

export default HeroSection;
