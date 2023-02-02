import { Box, Button } from "@mui/material";
import { login } from "../../../../styles";
import graphic from "../img/graphic.png";

export const LoginContent = () => {
  return (
    <Box sx={login.loginSx.container}>
      <Box sx={login.loginSx.imgDiv.div}>
        <Box
          sx={{
            ...login.loginSx.imgDiv,
            backgroundImage: `url(${graphic})`,
          }}
        />
      </Box>
      <Box sx={login.loginSx.formDiv.div}>
        <Box sx={login.loginSx.formDiv}>
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
