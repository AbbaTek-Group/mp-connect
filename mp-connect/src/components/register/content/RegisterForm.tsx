import { useState, useRef } from "react";
import { Box, Button, TextField } from "@mui/material";
import { RegisterProps } from "../../../types";

export const RegisterForm = () => {
  const [formMessage, setFormMessage] = useState<undefined | string>();

  const emailField = useRef<HTMLInputElement>();
  const passwordField = useRef<HTMLInputElement>();
  const confirmPasswordField = useRef<HTMLInputElement>();

  const onRegisterClick = (user: RegisterProps) => {
    console.log(user);
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      {formMessage}
      <Box>
        <Box>Email</Box>
        <TextField id="email" inputRef={emailField} variant="filled" />
        <Box>Password</Box>
        <TextField
          id="password"
          inputRef={passwordField}
          type="password"
          variant="filled"
        />
        <Box>Confirm Password</Box>
        <TextField
          id="confirm"
          inputRef={confirmPasswordField}
          type="password"
          variant="filled"
        />
        <Box>
          <Button
            onClick={() => {
              if (emailField.current!.value && passwordField.current!.value) {
                if (
                  passwordField.current!.value ===
                  confirmPasswordField.current!.value
                ) {
                  onRegisterClick({
                    email: emailField.current!.value,
                    password: passwordField.current!.value,
                  } as RegisterProps);
                } else {
                  setFormMessage("Passwords do not match");
                }
              } else {
                setFormMessage("Please enter a valid email address & password");
              }
            }}
          >
            Register
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
