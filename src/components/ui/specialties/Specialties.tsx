import { Box, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";

type Specialty = {
  icon: string; // Path or URL to the icon
  title: string; // Name or title of the specialty
};

type SpecialtiesResponse = {
  data: Specialty[];
};

const fetchSpecialties = async (): Promise<SpecialtiesResponse> => {
  const response = await fetch("http://localhost:5000/api/v1/specialties", {
    next: { revalidate: 30 },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch specialties");
  }

  return response.json(); // The return type is already defined
};

const Specialties = async () => {
  const specialties = await fetchSpecialties();

  return (
    <Container>
      <Box sx={{ marginTop: "50px", textAlign: "center" }}>
        <Box sx={{ textAlign: "start" }}>
          <Typography variant="h4" component="h4" fontWeight={600}>
            Explore Treatments across specialties
          </Typography>
          <Typography
            color="#1e727e"
            component="p"
            fontSize={18}
            fontWeight={400}
          >
            Find experienced doctors across all specialties
          </Typography>
        </Box>
      </Box>
      <Stack direction="row" gap={4} mt={5}>
        {specialties.data.map((specialty) => (
          <Box
            key={specialty.title}
            sx={{
              flex: 1,
              width: "150px",
              backgroundColor: "rgba(245, 245, 245, 1)",
              borderRadius: "10px",
              textAlign: "center",
              padding: "40px 10px", 
              "& img": {
                width: "50px",
                height: "50px",
                margin: "0 auto"
              }, 
              "&:hover": {
                border: "1px solid blue",
                padding: "40px 10px ",
                borderRadius: "10px",
                transition: ".6s linear"
              }
            }}
          >
            <Image
              height={100}
              width={100}
              src={specialty.icon}
              alt={`${specialty.title} icon`}
            />
            <Box>
              <Typography fontWeight={600}  fontSize={18} component="p">{specialty.title}</Typography>
            </Box>
          </Box>
        ))}
      </Stack>
    </Container>
  );
};

export default Specialties;
