import { Box, Button } from "@mui/material";
import { inline } from "../../../styles";
import hexPattern from "./img/hexpattern.png";

export const TopDivContent = () => {
  return (
    <Box sx={inline.topDivSx.container}>
      <Box sx={inline.topDivSx.textBox}>
        <Box sx={{ marginBottom: "-1.5vw" }}>Cost Effective,</Box>
        <Box sx={{ marginBottom: "-1.5vw" }}>Reliable</Box>
        <Box>Microplastics Analysis.</Box>
        <Button
          sx={inline.topDivSx.button}
          onClick={() => {
            console.log("Schedule A Meeting");
          }}
          variant="contained"
          disableRipple
        >
          Schedule A Meeting
        </Button>
      </Box>
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
