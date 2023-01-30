import { cloneElement } from "react";
import { Box, useScrollTrigger } from "@mui/material";
import { NavBarContent } from "./content";
import { inline } from "../../styles";
import { NavScrollFxProps } from "../../types";

function ScrollFx(props: NavScrollFxProps) {
  // sticks nav bar upon scroll

  const { children, window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 30,
    target: window ? window() : undefined,
  });

  return cloneElement(children, {
    elevation: trigger ? 4 : 0,
    position: trigger ? "fixed" : "sticky",
  });
}

export const NavBar = ({ props }: any) => {
  return (
    <ScrollFx {...props}>
      <Box sx={inline.navBarSx}>
        <NavBarContent />
      </Box>
    </ScrollFx>
  );
};
