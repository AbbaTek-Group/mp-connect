import { Box } from "@mui/material";
import { ThirdDivContent } from "./content";
import image from "./content/img/plastic2.svg";
import { inline } from "../../styles";

export const ThirdDiv = () => {
  return (
    <Box sx={inline.thirdDivSx}>
      <Box
        sx={{ ...inline.thirdDivSx.plastic, backgroundImage: `url(${image})` }}
      >
        <Box sx={{ ...inline.thirdDivSx.gradiant }}>
          <ThirdDivContent />
        </Box>
      </Box>
    </Box>
  );
};
