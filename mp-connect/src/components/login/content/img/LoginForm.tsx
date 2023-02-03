import { Box, Button } from "@mui/material";
import { login } from "../../../../styles";

export const LoginForm = () => {
  return (
    <Box>
      <Box sx={login.loginSx.formDiv.title}>
        Sign Into <b>MP</b>Connect
      </Box>
      <Box sx={login.loginSx.formDiv.form}>Email Password</Box>
      <Button sx={login.loginSx.formDiv.signInButton}>Sign In</Button>
      <Button sx={login.loginSx.formDiv.forgotButton}>Forgot Password</Button>
    </Box>
  );
};
