'use client';

import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
   palette: {
    primary: {
        main: "#1586fd"
    },
    secondary: {
        main: "#666f73"
    }
   },
   components: {
    MuiButton: {
        defaultProps: {
            variant: "contained",
        }, 
    },
    MuiContainer: {
        defaultProps: {
            maxWidth: "lg"
        }
    }
   },
   typography: {
     body1: {
        color: "#OB1134CC"
     }
   }
})