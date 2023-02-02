import { Box } from "@mui/material";
import { HeroDivContent } from "./content";
import heroImage from "./content/img/hero.svg";
import { landing } from "../../styles";

export const HeroDiv = () => {
  return (
    <Box sx={{ ...landing.heroDivSx, backgroundImage: `url(${heroImage})` }}>
      <HeroDivContent />
    </Box>
  );
};
