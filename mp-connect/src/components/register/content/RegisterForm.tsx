import { useRef } from "react";
import { Box, Button, TextField } from "@mui/material";

export const RegisterForm = () => {
  const emailField = useRef<HTMLInputElement>();
  const passwordField = useRef<HTMLInputElement>();

  return (
    <Box>
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
        <Button>Register</Button>
      </Box>
    </Box>
  );
};
