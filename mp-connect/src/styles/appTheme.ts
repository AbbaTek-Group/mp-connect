// MUI theme / hard component modifications

import { createTheme } from "@mui/material";
import { palette } from "./palette";

export const appTheme = createTheme({
  palette: {
    primary: {
      main: palette.white,
    },
    secondary: {
      main: palette.black,
    },
  },
  components: {},
});
