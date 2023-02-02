import { Box, Button } from "@mui/material";
import { login } from "../../../../styles";

export const LoginContent = () => {
  return (
    <Box sx={login.loginSx.container}>
      <Box sx={login.loginSx.imgDiv}>Image</Box>
      <Box sx={login.loginSx.formDiv}>
        <Box>
          <Box>Sign Into MPConnect</Box>
          <Box>
            <Box>Email Address</Box>
            <Box>Password</Box>
            <Button>Sign In</Button>
            <Button>Forgot Password</Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
