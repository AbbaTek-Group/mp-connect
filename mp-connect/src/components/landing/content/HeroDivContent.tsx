import { Box, Button } from "@mui/material";
import { landing } from "../../../styles";

export const HeroDivContent = () => {
  return (
    <Box sx={landing.heroDivSx.container}>
      <Box sx={landing.heroDivSx.textBox}>
        <Box sx={{ marginBottom: "-1.5vw" }}>Cost Effective,</Box>
        <Box sx={{ marginBottom: "-1.5vw" }}>Reliable</Box>
        <Box>Microplastics Analysis.</Box>
        <Button sx={landing.heroDivSx.button} variant="contained" disableRipple>
          <a href="https://calendly.com/abbatekgroup/30min?month=2023-02">
            Schedule A Meeting
          </a>
        </Button>
      </Box>
    </Box>
  );
};
