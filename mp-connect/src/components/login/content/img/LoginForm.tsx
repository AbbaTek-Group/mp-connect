import { useState, useEffect, useRef } from "react";
import { Box, Button, TextField } from "@mui/material";
import { loginHandler } from "../../../../handlers";
import { login } from "../../../../styles";
import { LoginProps } from "../../../../types";

export const LoginForm = () => {
  const emailField = useRef<HTMLInputElement>();
  const passwordField = useRef<HTMLInputElement>();

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
              loginHandler({
                email: emailField.current!.value,
                password: passwordField.current!.value,
              } as LoginProps);
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
