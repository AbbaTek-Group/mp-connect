import { Box, useScrollTrigger, Slide } from "@mui/material";
import { LinkBarContent } from "./content";
import { landing } from "../../styles";
import { NavScrollFxProps } from "../../types";

function HideOnScroll(props: NavScrollFxProps) {
  // hides link bar upon scroll

  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export const LinkBar = ({ props }: any) => {
  return (
    <HideOnScroll {...props}>
      <Box sx={landing.linkBarSx}>
        <LinkBarContent />
      </Box>
    </HideOnScroll>
  );
};
