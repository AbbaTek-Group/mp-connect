import { Box } from "@mui/material";
import { SecondDivContent } from "./content";
import { landing } from "../../styles";

export const SecondDiv = () => {
  return (
    <Box sx={landing.secondDivSx}>
      <SecondDivContent />
    </Box>
  );
};
