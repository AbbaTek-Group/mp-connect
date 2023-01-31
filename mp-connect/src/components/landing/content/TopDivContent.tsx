import { Box } from "@mui/material";
import { inline } from "../../../styles";
import hexPattern from "./img/hexpattern.png";

export const TopDivContent = () => {
  return (
    <Box sx={inline.topDivSx.container}>
      <Box></Box>
      <Box sx={inline.topDivSx.imageBox}>
        <Box
          sx={{
            ...inline.topDivSx.imageBox.hexPattern,
            backgroundImage: `url(${hexPattern})`,
          }}
        ></Box>
      </Box>
    </Box>
  );
};
