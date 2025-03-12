import { Box, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Image from "next/image";
import DoctorImageRight from "@/assets/images/HowItWorks.png";
import DoctorSearch from "@/assets/svgs/doctorSearch.svg";
import Profile from "@/assets/svgs/profile.svg";
import Schedule from "@/assets/svgs/schedule.svg";
import CareImage from "@/assets/svgs/care-icon.svg";

// stats are defined here to be used in the component and make our codes efficient and clean!
const stats = [
  { value: '180+', label: 'Expert Doctors' },
  { value: '26+', label: 'Expert Services' },
  { value: '10K+', label: 'Happy Patients' },
  { value: '150+', label: 'Best Award Winners' },
];

// icons and texts are defined here to be used in the component and make our codes efficient and clean!
const steps = [
  {
    icon: DoctorSearch,
    title: "Search Doctor",
    description:
      "Dolor sit amet consectetur. Scelerisque in eu mauris volutpat ornare.",
  },
  {
    icon: Profile,
    title: "Check Doctor Profile",
    description:
      "Dolor sit amet consectetur. Scelerisque in eu mauris volutpat ornare.",
  },
  {
    icon: Schedule,
    title: "Schedule Appointment",
    description:
      "Dolor sit amet consectetur. Scelerisque in eu mauris volutpat ornare.",
  },
  {
    icon: CareImage,
    title: "Get Your Solution",
    description:
      "Dolor sit amet consectetur. Scelerisque in eu mauris volutpat ornare.",
  },
];

export default function HowItWorks() {
  return (
    <Container sx={{ py: 6 }}>
      <Typography variant="h6" color="primary" gutterBottom>
        How it Works
      </Typography>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        4 Easy Steps to Get Your Solution
      </Typography>
      <Typography variant="body1" color="textSecondary" sx={{ mb: 4 }}>
        Access to expert physicians and surgeons, advanced technologies and
        top-quality surgery facilities right here.
      </Typography>

      {/* map to show essential data and cards */}
      <Grid container spacing={4}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Box sx={{ position: "relative", height: "100%", width: "100%" }}>
            <Image
              src={DoctorImageRight}
              alt="lady doctor image"
              height={500}
              width={500}
              layout="responsive"
            />
          </Box>
        </Grid>

        {/* right part  */}

        <Grid container size={{ xs: 12, md: 6 }}  >
          {steps.map((step, index) => (
            <Grid key={index} size={{ xs: 12, md: 6 }} alignContent="left">
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "left",
                  textAlign: "left",
                  p: 3,
                  border: "1px solid #e0e0e0",
                  borderRadius: "12px",
                }}
              >
                <Box sx={{height: "100%", width: "100%"}}>
                  <Image
                    src={step.icon}
                    alt="stepIcons"
                    height={50}
                    width={50}
                  />
                </Box>
                <Typography variant="h6" fontWeight={400}>
                  {step.title}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {step.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Grid>

      {/* client status */}
      <Box
        sx={{
          mt: 8,
          py: 4,
          px: 3,
          borderRadius: '16px',
          background: 'linear-gradient(90deg, #007bff, #00d2ff)',
          color: '#fff',
          textAlign: 'center',
        }}
      >
        <Grid container spacing={4} justifyContent="center">
          {stats.map((stat, index) => (
            <Grid key={index} size={{sm: 6, md: 3}}>
              <Typography variant="h4" fontWeight="bold">
                {stat.value}
              </Typography>
              <Typography variant="body1">{stat.label}</Typography>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}
