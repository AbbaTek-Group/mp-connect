import { Box, Button } from "@mui/material";
import { inline } from "../../../styles";
import logo from "./img/mpconnectlogo.svg";

export const NavBarContent = () => {
  return (
    <Box sx={inline.navBarContentSx.container}>
      <Box>
        <img src={logo} alt={"MPConnect"} style={inline.navBarContentSx.logo} />
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
          <a href="https://abbatekgroup.us12.list-manage.com/subscribe?u=e7a7fdd7e7a0cd0d46a303521&id=7383ff5a34">
            Register
          </a>
        </Button>
      </Box>
    </Box>
  );
};
