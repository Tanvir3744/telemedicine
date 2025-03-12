import {
  Box,
  Typography,
  Container,
  CardActions,
  Button,
  CardContent,
  Card,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { DoctorType } from "@/shared/interface/doctor.interface";
import Image from "next/image";

const Doctors = async () => {
  const response = await fetch(
    "http://localhost:5000/api/v1/doctor?page-1&limit=3"
  );
  const { data: doctors } = await response.json();
  console.log(doctors);
  console.log(doctors.map((doctor: DoctorType) => doctor.name));
  return (
    <Box
      sx={{
        my: 10,
        py: 30,
        backgroundColor: "rgba(20,20,20, 0.1)",
        clipPath: "polygon(0 0, 100% 25%, 100% 100%, 0 75%)",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          marginTop: "50px",
        }}
      >
        <Typography mb={2} component="h1" variant="h4" fontWeight={700}>
          Our Top Rated Doctors
        </Typography>
        <Typography
          component="p"
          fontSize={18}
          fontWeight={400}
          color="#1e727e"
        >
          Access to expert physicians and surgeons, advanced technologies
        </Typography>
        <Typography
          component="p"
          fontSize={18}
          fontWeight={400}
          color="#1e727e"
        >
          and top-quality surgery facilities right here.
        </Typography>
      </Box>
      <Container sx={{ flexGrow: 1, marginTop: "50px" }}>
        <Grid container spacing={4}>
          {doctors?.map((doctor: DoctorType) => (
            <Grid key={doctor.id} size={4}>
              <Card>
                <Box
                  sx={{
                    width: "100%",
                    height: 300,
                    "& img": {
                      width: "100%",
                      height: "100%",
                      overflow: "hidden",
                      objectFit: "cover",
                    },
                  }}
                >
                  <Image
                    src={doctor.profilePhoto}
                    alt="doctor"
                    width={500}
                    height={100}
                  />
                </Box>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {doctor.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {doctor.qualification}, {doctor.designation}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" mt={1}>
                    <LocationOnIcon /> {doctor.address}
                  </Typography>
                </CardContent>
                <CardActions
                  sx={{
                    justifyContent: "space-between",
                    px: 2,
                    paddingBottom: "20px",
                  }}
                >
                  <Button>Book Now</Button>
                  <Button variant="outlined">View Profile</Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Box sx={{ textAlign: "center", mt: 5 }}>
          <Button variant="outlined">View All</Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Doctors;
