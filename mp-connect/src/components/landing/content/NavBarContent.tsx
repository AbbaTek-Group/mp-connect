import { Box, Button } from "@mui/material";
import { inline } from "../../../styles";

export const NavBarContent = () => {
  return (
    <Box sx={inline.navBarContentSx.container}>
      <Box>Icon</Box>
      <Box>
        <Button>Login</Button>
        <Button>Register</Button>
      </Box>
    </Box>
  );
};
