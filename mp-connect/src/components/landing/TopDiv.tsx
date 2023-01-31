import { Box } from "@mui/material";
import { TopDivContent } from "./content";
import { inline } from "../../styles";

export const TopDiv = () => {
  return (
    <Box sx={inline.topDivSx}>
      <TopDivContent />
    </Box>
  );
};
