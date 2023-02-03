import { Box } from "@mui/material";
import { LoginForm } from "./LoginForm";
import { login } from "../../../../styles";
import graphic from "../img/graphic.png";

export const LoginContent = () => {
  return (
    <Box sx={login.loginSx.container}>
      <Box sx={{ width: "100%" }}>
        <Box
          sx={{
            ...login.loginSx.imgDiv,
            backgroundImage: `url(${graphic})`,
          }}
        />
      </Box>
      <Box sx={{ width: "100%" }}>
        <Box sx={login.loginSx.formDiv}>
          <LoginForm />
        </Box>
      </Box>
    </Box>
  );
};
