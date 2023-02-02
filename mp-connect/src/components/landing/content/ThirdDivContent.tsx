import { Box, Button } from "@mui/material";
import { TextCard } from "./TextCard";
import { landing } from "../../../styles";

export const ThirdDivContent = () => {
  return (
    <Box sx={landing.thirdDivSx.container}>
      <Box>
        <TextCard id={"top"} />
        <TextCard id={"bottom"} />
      </Box>
      <Box sx={landing.thirdDivSx.bottom}>
        <Box sx={landing.thirdDivSx.bottom.text}>
          Streamline your microplastics analysis.
        </Box>
        <Button sx={landing.thirdDivSx.bottom.button} disableRipple>
          <a href="https://forms.gle/3whbd5ZFJmFqdYNR9">Talk to us today.</a>
        </Button>
      </Box>
    </Box>
  );
};
