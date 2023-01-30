import { Box, Button } from "@mui/material";
import { inline } from "../../../styles";

export const NavBarContent = () => {
  return (
    <Box sx={inline.navBarContentSx.container}>
      <Box sx={{ ml: "7.3vw" }}>Icon</Box>
      <Box sx={{ mr: "7.3vw" }}>
        <Button
          sx={inline.navBarContentSx.loginButton}
          variant="contained"
          disableRipple
        >
          Login
        </Button>
        <Button
          sx={inline.navBarContentSx.registerButton}
          variant="contained"
          disableRipple
        >
          Register
        </Button>
      </Box>
    </Box>
  );
};
