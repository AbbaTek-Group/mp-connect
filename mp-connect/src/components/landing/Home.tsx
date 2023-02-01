import { Box, ThemeProvider } from "@mui/material";
import { appTheme, inline } from "../../styles";
import {
  LinkBar,
  NavBar,
  HeroDiv,
  SecondDiv,
  ThirdDiv,
  FooterDiv,
} from "./index";

export const Home = () => {
  return (
    <Box sx={inline.homeSx.divContainer}>
      <ThemeProvider theme={appTheme}>
        <LinkBar />
        <NavBar />
        <HeroDiv />
        <SecondDiv />
        <ThirdDiv />
        <FooterDiv />
      </ThemeProvider>
    </Box>
  );
};
