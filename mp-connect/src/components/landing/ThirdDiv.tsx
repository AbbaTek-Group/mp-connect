import { Box } from "@mui/material";
import { ThirdDivContent } from "./content";
import image from "./content/img/plastic2.svg";
import { landing } from "../../styles";

export const ThirdDiv = () => {
  return (
    <Box sx={landing.thirdDivSx}>
      <Box
        sx={{ ...landing.thirdDivSx.plastic, backgroundImage: `url(${image})` }}
      >
        <Box sx={{ ...landing.thirdDivSx.gradiant }}>
          <ThirdDivContent />
        </Box>
      </Box>
    </Box>
  );
};
