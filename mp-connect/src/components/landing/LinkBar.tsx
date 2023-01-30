import { Box } from "@mui/material";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Slide from "@mui/material/Slide";
import { inline } from "../../styles";

interface Props {
  window?: () => Window;
  children: React.ReactElement;
}

function HideOnScroll(props: Props) {
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
      <Box sx={inline.linkBarSx}></Box>
    </HideOnScroll>
  );
};
