"use client";
import Grid from "@mui/material/Grid2";
import Box from "@mui/material/Box";
import { Container, Typography } from "@mui/material";
import Image from "next/image";
import assets from "@/assets";
import Girl from "@/assets/images/girl.png";

const servicesData = [
  {
    imageSrc: assets.svgs.award,
    title: "Award Winning Service",
    description:
      "Duas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui offici",
  },
  {
    imageSrc: assets.svgs.care,
    title: "Best Quality Pregnancy Care",
    description:
      "Duas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui offici",
  },
  {
    imageSrc: assets.svgs.equipment,
    title: "Complete Medical Equipments",
    description:
      "Duas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui offici",
  },
  {
    imageSrc: assets.svgs.call,
    title: "Dedicated Emergency Care",
    description:
      "Duas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui offici",
  },
];

const whyUs = () => {
  return (
    <Container>
      <Box sx={{ textAlign: "center" }}>
        <Typography variant="h4" component="h4" color="primary.main">
          {" "}
          Why Us
        </Typography>
        <Typography variant="h2" component="h2">
          Why Choose Us
        </Typography>
      </Box>

      <Grid container spacing={2} sx={{ marginTop: "20px" }}>
        <Grid size={6}>
          <Box sx={{ display: "flex", backgroundColor: "rgba(245,245,245,1)", padding:"16px", alignItems: "center", borderRadius:"20px 10px 100px 20px" }}>
            <Box sx={{ backgroundColor:"white", padding: "10px", borderRadius: "20%",marginRight: "10px" }}>
              <Image width={70}  src={servicesData[0].imageSrc} alt="award_image" />
            </Box>
            <Box>
            <Typography fontWeight={600} fontSize="23px">{servicesData[0].title}</Typography>
              <Typography color="text.secondary">
                {servicesData[0].description}
              </Typography>
            </Box>
          </Box>
          <Box sx={{ display: "flex", backgroundColor: "rgba(245,245,245,1)", marginTop: "15px" , padding:"16px", alignItems: "center",  borderRadius: "20px 100px 10px 20px"}}>
            <Box sx={{ backgroundColor:"white", padding: "10px", borderRadius: "20%",marginRight: "10px" }}>
              <Image width={70}  src={servicesData[1].imageSrc} alt="award_image" />
            </Box>
            <Box>
            <Typography fontWeight={600} fontSize="23px">{servicesData[1].title}</Typography>
              <Typography color="text.secondary">
                {servicesData[0].description}
              </Typography>
            </Box>
          </Box>
          <Box sx={{ display: "flex", backgroundColor: "rgba(245,245,245,1)", marginTop: "15px", padding:"16px", alignItems: "center", borderRadius:"20px 10px 100px 20px"  }}>
            <Box sx={{ backgroundColor:"white", padding: "10px", borderRadius: "20%",marginRight: "10px" }}>
              <Image width={70}  src={servicesData[0].imageSrc} alt="award_image" />
            </Box>
            <Box>
            <Typography fontWeight={600} fontSize="23px">{servicesData[2].title}</Typography>
              <Typography color="text.secondary">
                {servicesData[2].description}
              </Typography>
            </Box>
          </Box>
          <Box sx={{ display: "flex", backgroundColor: "rgba(245,245,245,1)", marginTop :"15px", padding:"16px", alignItems: "center", borderRadius: "20px 100px 10px 20px" }}>
            <Box sx={{ backgroundColor:"white", padding: "10px", borderRadius: "20%",marginRight: "10px" }}>
              <Image width={70}  src={servicesData[0].imageSrc} alt="award_image" />
            </Box>
            <Box>
              <Typography fontWeight={600} fontSize="23px">{servicesData[3].title}</Typography>
              <Typography color="text.secondary">
                {servicesData[3].description}
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid size={6}>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Image src={Girl} width={400} alt="why_choose us" />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default whyUs;
