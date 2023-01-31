import { Box } from "@mui/material";
import { ThirdDivContent } from "./content";
import { inline } from "../../styles";

export const ThirdDiv = () => {
  return (
    <Box sx={inline.thirdDivSx}>
      <ThirdDivContent />
    </Box>
  );
};
