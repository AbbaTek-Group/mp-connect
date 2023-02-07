import { Box, ThemeProvider } from "@mui/material";
import { LoginContent } from "./content/LoginContent";
import { login, appTheme } from "../../styles";

export const Login = () => {
  return (
    <Box sx={login.loginSx}>
      <ThemeProvider theme={appTheme.loginTheme}>
        <LoginContent />
      </ThemeProvider>
    </Box>
  );
};
