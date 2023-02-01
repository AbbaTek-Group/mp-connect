import { Box } from "@mui/material";
import { inline } from "../../../styles";

export const FooterDivContent = () => {
  return (
    <Box sx={inline.footerDivSx.container}>
      <Box sx={inline.footerDivSx.break} />
      <Box>
        <Box></Box>
        <Box></Box>
      </Box>
    </Box>
  );
};
