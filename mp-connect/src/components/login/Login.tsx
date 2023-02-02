import { Box, ThemeProvider } from "@mui/material";
import { LoginContent } from "./content/img/LoginContent";
import { login, appTheme } from "../../styles";

export const Login = () => {
  return (
    <Box sx={login.loginSx}>
      <ThemeProvider theme={appTheme}>
        <LoginContent />
      </ThemeProvider>
    </Box>
  );
};
