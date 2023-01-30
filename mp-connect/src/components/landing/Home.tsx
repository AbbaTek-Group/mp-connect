import { Box } from "@mui/material";
import { inline } from "../../styles";
import { BottomDiv, SecondDiv, ThirdDiv, TopDiv } from "./index";

export const Home = () => {
  return (
    <Box sx={inline.homeSx.divContainer}>
      <TopDiv />
      <SecondDiv />
      <ThirdDiv />
      <BottomDiv />
    </Box>
  );
};
