import { useState, useEffect, useRef } from "react";
import { Box, Button, TextField } from "@mui/material";
import { login } from "../../../../styles";
import { LoginProps } from "../../../../types";

export const LoginForm = () => {
  const [loginFormData, setLoginFormData] = useState<LoginProps>();
  const emailField = useRef<HTMLInputElement>();
  const passwordField = useRef<HTMLInputElement>();

  useEffect(() => {
    if (loginFormData) {
      console.log(loginFormData);
    }
  }, [loginFormData]);

  return (
    <Box>
      <Box sx={login.loginSx.formDiv.title}>
        Sign Into <b>MP</b>Connect
      </Box>
      <Box sx={login.loginSx.formDiv.form}>
        <Box>Email</Box>
        <TextField id="email" inputRef={emailField} variant="filled" />
        <Box>Password</Box>
        <TextField
          id="password"
          inputRef={passwordField}
          type="password"
          variant="filled"
        />
        <Button
          sx={login.loginSx.formDiv.signInButton}
          onClick={() => {
            if (emailField.current!.value && passwordField.current!.value) {
              setLoginFormData({
                email: emailField.current!.value,
                password: passwordField.current!.value,
              });
            }
          }}
        >
          Sign In
        </Button>
        <Button sx={login.loginSx.formDiv.forgotButton}>Forgot Password</Button>
      </Box>
    </Box>
  );
};
