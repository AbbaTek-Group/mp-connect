import { Box, Button } from "@mui/material";
// import { login } from "../../../../styles";
import graphic from "../img/graphic.png";

export const LoginContent = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        width: "85.4vw",
        mt: "6.5vw",
      }}
    >
      <Box sx={{ width: "100%", height: "33.95vw" }}>
        <Box
          sx={{
            backgroundImage: `url(${graphic})`,
            height: "100%",
            backgroundSize: "100%",
          }}
        />
      </Box>
      <Box sx={{ width: "100%", height: "33.95vw" }}>
        <Box sx={{ backgroundColor: "pink", height: "100%", ml: "6.14vw" }}>
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
