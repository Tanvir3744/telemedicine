/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import {
  Box,
  Button,
  Container,
  /* FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField, */
  Stack,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import Image from "next/image";
import RegLogo from "@/assets/svgs/logo.svg";
/* import { useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material"; */
/* import { useForm,  FieldValues } from "react-hook-form"; */
import { FieldValues } from "react-hook-form";
import Link from "next/link";
import { loginPatient } from "@/service/actions/loginPatients";
import { storeUserInfo } from "@/service/storeUserInfo";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import CustomForm from "@/shared/ReuseForm/CustomForm";
import CustomInput from "@/shared/ReuseForm/CustomInput";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

export type ILogin = {
  email: string;
  password: string;
};

const zodLoginValidation = z.object({
  email: z.string().email("email is required!"),
  password: z.string().min(6, "Password must be at least 6 character long"),
});
const Login = () => {
  const router = useRouter();
  const [error, setError] = useState("");
  /* const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => setShowPassword((show) => !show); */

  

  const handleLogin = async (values: FieldValues) => {
    try {
      const response = await loginPatient(values);

      if (response?.data?.accessToken) {
        storeUserInfo({ accessToken: response?.data.accessToken });
        toast.success("Congratulations! You have successfully logged in");
        router.push("/");
      } else {
      /*   console.log(response); */
        setError(response.message);
      }
    } catch (err : any) {
      console.log(err.message);
    }
  };
  console.log(error, "login page line number 49")
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
          <Typography fontWeight={600} variant="h3" component="h3" my={2}>
            Login HealthCare Portal
          </Typography>
        </Box>
        {
          error && (<Box sx={{ backgroundColor: "red", color: "white", paddingLeft: 10 , paddingRight:10}}>
          <Typography fontWeight={600} variant="h6" component="h6" my={2}>
            {error}
          </Typography>
        </Box>)
        }

        {/* {error && (
          <Box sx={{ backgroundColor: "red" }}>
            <Typography fontWeight={600} variant="h6" component="h6" my={2}>
              {error}
            </Typography>
          </Box>
        )} */}
      </Stack>

      {/* form design */}
      <CustomForm
        onSubmit={handleLogin}
        resolver={zodResolver(zodLoginValidation)}
        defaultValues={{ email: "", password: "" }}
      >
        <Grid container spacing={2} my={2}>
          <Grid size={{ md: 6, sm: 12, xs: 12 }} my={2}>
            <CustomInput
              fullWidth
              name="email"
              label="Email"
              variant="outlined"
            />
          </Grid>
          <Grid size={{ md: 6, sm: 12, xs: 12 }} my={2}>
            <CustomInput
              fullWidth
              name="password"
              label="Password"
              variant="outlined"
              type="password"
            />
          </Grid>
          <Button variant="contained" fullWidth type="submit">
            LogIn
          </Button>
          <Typography sx={{ margin: "0 auto", fontWeight: "400" }}>
            Don&apos;t t have an account ?{" "}
            <Link
              style={{ color: "blue", textDecoration: "underline" }}
              href="/register"
            >
              {" "}
              Create an account
            </Link>
          </Typography>
        </Grid>
      </CustomForm>
    </Container>
  );
};

export default Login;
