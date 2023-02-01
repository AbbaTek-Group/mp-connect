import { Box } from "@mui/material";
import { HeroDivContent } from "./content";
import { inline } from "../../styles";

export const HeroDiv = () => {
  return (
    <Box sx={inline.heroDivSx}>
      <HeroDivContent />
    </Box>
  );
};
