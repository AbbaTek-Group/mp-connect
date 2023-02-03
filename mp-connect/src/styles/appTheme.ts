// MUI theme / hard component modifications

import { createTheme } from "@mui/material";
import { palette } from "./palette";
import { font } from "./font";

export const landingTheme = createTheme({
  palette: {
    primary: {
      main: palette.white,
    },
    secondary: {
      main: palette.black,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          letterSpacing: "0",
          padding: "0",
        },
      },
    },
  },
});

export const loginTheme = createTheme({
  palette: {
    primary: {
      main: palette.white,
    },
    secondary: {
      main: palette.black,
    },
  },
  components: {
    MuiFilledInput: {
      styleOverrides: {
        root: {
          fontFamily: font.fontFamily,
          fontWeight: font.fontWeight.medium,
          marginBottom: "1.66vw",
          borderRadius: "5px",
          paddingY: "1vw",
          input: {
            backgroundColor: palette.trueWhite,
            fontFamily: font.fontFamily,
            fontWeight: font.fontWeight.medium,
            borderRadius: "5px",
            paddingY: "1vw",
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          letterSpacing: "0",
          padding: "0",
        },
      },
    },
  },
});
