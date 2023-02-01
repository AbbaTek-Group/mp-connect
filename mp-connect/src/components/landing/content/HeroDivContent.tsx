import { Box, Button } from "@mui/material";
import { inline } from "../../../styles";
import hexPattern from "./img/hexpattern.png";

export const HeroDivContent = () => {
  return (
    <Box sx={inline.heroDivSx.container}>
      <Box sx={inline.heroDivSx.textBox}>
        <Box sx={{ marginBottom: "-1.5vw" }}>Cost Effective,</Box>
        <Box sx={{ marginBottom: "-1.5vw" }}>Reliable</Box>
        <Box>Microplastics Analysis.</Box>
        <Button
          sx={inline.heroDivSx.button}
          onClick={() => {
            console.log("Schedule A Meeting");
          }}
          variant="contained"
          disableRipple
        >
          Schedule A Meeting
        </Button>
      </Box>
      <Box sx={inline.heroDivSx.imageBox}>
        <Box
          sx={{
            ...inline.heroDivSx.imageBox.hexPattern,
            backgroundImage: `url(${hexPattern})`,
          }}
        ></Box>
      </Box>
    </Box>
  );
};
