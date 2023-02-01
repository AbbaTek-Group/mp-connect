import { Box } from "@mui/material";
import { FooterDivContent } from "./content";
import { inline } from "../../styles";

export const FooterDiv = () => {
  return (
    <Box sx={inline.footerDivSx}>
      <FooterDivContent />
    </Box>
  );
};
