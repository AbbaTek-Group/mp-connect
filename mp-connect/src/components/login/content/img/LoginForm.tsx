import { Box, Button, TextField } from "@mui/material";
import { login } from "../../../../styles";

export const LoginForm = () => {
  return (
    <Box>
      <Box sx={login.loginSx.formDiv.title}>
        Sign Into <b>MP</b>Connect
      </Box>
      <Box sx={login.loginSx.formDiv.form}>
        <Box>Email</Box>
        <TextField id="email" variant="filled" />
        <Box>Password</Box>
        <TextField id="password" type="password" variant="filled" />
        <Button sx={login.loginSx.formDiv.signInButton}>Sign In</Button>
        <Button sx={login.loginSx.formDiv.forgotButton}>Forgot Password</Button>
      </Box>
    </Box>
  );
};
