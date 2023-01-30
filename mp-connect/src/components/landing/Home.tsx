import { Box, ThemeProvider } from "@mui/material";
import { appTheme, inline } from "../../styles";
import {
  LinkBar,
  NavBar,
  TopDiv,
  SecondDiv,
  ThirdDiv,
  BottomDiv,
} from "./index";

export const Home = () => {
  return (
    <Box sx={inline.homeSx.divContainer}>
      <ThemeProvider theme={appTheme}>
        <LinkBar />
        <NavBar />
        <TopDiv />
        <SecondDiv />
        <ThirdDiv />
        <BottomDiv />
      </ThemeProvider>
    </Box>
  );
};
