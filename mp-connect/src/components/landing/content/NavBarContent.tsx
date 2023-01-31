import { Box, Button } from "@mui/material";
import { inline } from "../../../styles";

export const NavBarContent = () => {
  return (
    <Box sx={inline.navBarContentSx.container}>
      <Box>
        <img
          src={"/mpconnectlogo.svg"}
          alt={"MPConnect"}
          style={inline.navBarContentSx.logo}
        />
      </Box>
      <Box>
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
