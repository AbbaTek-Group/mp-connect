import { AppBar, Toolbar } from "@mui/material";
import { inline } from "../../styles";

export const NavBar = () => {
  return (
    <AppBar position="sticky" sx={inline.navBarSx}>
      <Toolbar></Toolbar>
    </AppBar>
  );
};
