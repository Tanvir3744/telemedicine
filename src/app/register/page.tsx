"use client";
import {
  Box,
  Button,
  Container,
  Stack,
  /*  TextField, */
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import Image from "next/image";
import RegLogo from "@/assets/svgs/logo.svg";
import Link from "next/link";
import { /* useForm, */ FieldValues } from "react-hook-form";
import { modifyFormData } from "@/utils/modifyFormData";
import { registerPatient } from "@/service/actions/registerPatients";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { storeUserInfo } from "@/service/storeUserInfo";
import { loginPatient } from "@/service/actions/loginPatients";
import CustomForm from "@/shared/ReuseForm/CustomForm";
import CustomInput from "@/shared/ReuseForm/CustomInput";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";



const patientSchema = z.object({
  name: z.string().min(3, "Name is required!"),
  email: z.string().email("Provide a valid email address!"),
  contactNumber: z.string().regex(/^\d{11}$/, "Please provide a valid phone number"),
  address: z.string().min(10, "Please Provide your location!"),
});

// final validation zod schema for patient
const patientValidationZodSchema = z.object({
  password: z.string().regex(/^[A-Z][A-Za-z0-9@#!%&]{7,}$/, "Please Provide a Valid Password"),
  patient: patientSchema,
});



const Register = () => {
  const router = useRouter();
  /* const { register } = useForm(); */

  // handle the form submission
  const handleRegister = async (values: FieldValues) => {
    const data = modifyFormData(values);

    // send data to the server as parameter in the function
    try {
      const response = await registerPatient(data);

      if (response?.data?.id) {
        const result = await loginPatient({
          email: values.patient.email,
          password: values.password,
        });
        console.log("accessToken", response.data.accessToken);

        if (result?.data.accessToken) {
          storeUserInfo({ accessToken: result?.data.accessToken });
          toast.success("Congratulations! You have successfully logged in");
          router.push("/");
        }
      }
      console.log(response?.message, response);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      console.log(err.message);
    }
  };
  return (
    <Container
      sx={{
        width: "700px",
        maxWidth: "100%",
        boxShadow: 1,
        borderRadius: "20px",
        p: 5,
        my: 10,
      }}
    >
      <Stack sx={{ justifyContent: "center", alignItems: "center" }}>
        <Box>
          <Image
            src={RegLogo}
            alt="patient registration logo"
            width={100}
            height={100}
          />
        </Box>
        <Box>
          <Typography fontWeight={600} variant="h3" component="h3">
            Patient Registration
          </Typography>
        </Box>
      </Stack>

      {/* form design */}

      <CustomForm
        onSubmit={handleRegister}
        resolver={zodResolver(patientValidationZodSchema)}
        /* defaultValues={PatientDefaultValues} */
      >
        <Grid container spacing={2}>
          <Grid size={{ md: 12, sm: 12, xs: 12 }} my={3}>
            <CustomInput
              fullWidth
              label="Full Name"
              variant="outlined"
              type="patient.name"
              name="patient.name"
            />
          </Grid>
          <Grid size={{ md: 6, sm: 12, xs: 12 }} my={2}>
            <CustomInput
              fullWidth
              type="email"
              label="Email"
              variant="outlined"
              name="patient.email"
            />
          </Grid>
          <Grid size={{ md: 6, sm: 12, xs: 12 }} my={2}>
            <CustomInput
              fullWidth
              label="Contact Number"
              variant="outlined"
              name="patient.contactNumber"
            />
          </Grid>
          <Grid size={{ md: 6, sm: 12, xs: 12 }} my={2}>
            <CustomInput
              fullWidth
              label="Password"
              variant="outlined"
              type="password"
              name="password"
            />
          </Grid>
          <Grid size={{ md: 6, sm: 12, xs: 12 }} my={2}>
            <CustomInput
              fullWidth
              name="patient.address"
              label="Address"
              variant="outlined"
            />
          </Grid>
          <Button variant="contained" fullWidth type="submit">
            Register
          </Button>
          <Typography sx={{ margin: "0 auto", fontWeight: "400" }}>
            Do you already have and account ?{" "}
            <Link
              style={{ color: "blue", textDecoration: "underline" }}
              href="/login"
            >
              Login
            </Link>
          </Typography>
        </Grid>
      </CustomForm>
    </Container>
  );
};

export default Register;
