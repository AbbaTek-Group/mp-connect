import { Box, ThemeProvider } from "@mui/material";
import { appTheme, inline } from "../../styles";
import { TopDiv, SecondDiv, ThirdDiv, BottomDiv } from "./index";

export const Home = () => {
  return (
    <Box sx={inline.homeSx.divContainer}>
      <ThemeProvider theme={appTheme}>
        <TopDiv />
        <SecondDiv />
        <ThirdDiv />
        <BottomDiv />
      </ThemeProvider>
    </Box>
  );
};
