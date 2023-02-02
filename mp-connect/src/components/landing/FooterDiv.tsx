import { Box } from "@mui/material";
import { FooterDivContent } from "./content";
import { landing } from "../../styles";

export const FooterDiv = () => {
  return (
    <Box sx={landing.footerDivSx}>
      <FooterDivContent />
    </Box>
  );
};
