import { Box } from "@mui/material";
import { SecondDivContent } from "./content";
import { inline } from "../../styles";

export const SecondDiv = () => {
  return (
    <Box sx={inline.secondDivSx}>
      <SecondDivContent />
    </Box>
  );
};
