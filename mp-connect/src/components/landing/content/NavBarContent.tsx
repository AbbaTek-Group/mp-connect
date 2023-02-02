import { Box, Button } from "@mui/material";
import { landing } from "../../../styles";
import logo from "./img/mpconnectlogo.svg";

export const NavBarContent = () => {
  return (
    <Box sx={landing.navBarContentSx.container}>
      <Box>
        <img
          src={logo}
          alt={"MPConnect"}
          style={landing.navBarContentSx.logo}
        />
      </Box>
      <Box>
        <Button
          sx={landing.navBarContentSx.loginButton}
          variant="contained"
          disableRipple
        >
          Login
        </Button>
        <Button
          sx={landing.navBarContentSx.registerButton}
          variant="contained"
          disableRipple
        >
          <a href="https://abbatekgroup.us12.list-manage.com/subscribe?u=e7a7fdd7e7a0cd0d46a303521&id=7383ff5a34">
            Register
          </a>
        </Button>
      </Box>
    </Box>
  );
};
