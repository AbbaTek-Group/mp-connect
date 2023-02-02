import { Box } from "@mui/material";
import { HeroDivContent } from "./content";
import heroImage from "./content/img/hero.svg";
import { inline } from "../../styles";

export const HeroDiv = () => {
  return (
    <Box sx={{ ...inline.heroDivSx, backgroundImage: `url(${heroImage})` }}>
      <HeroDivContent />
    </Box>
  );
};
