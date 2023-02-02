import { Box, Button } from "@mui/material";
import { TextCard } from "./TextCard";
import { inline } from "../../../styles";

export const ThirdDivContent = () => {
  return (
    <Box sx={inline.thirdDivSx.container}>
      <Box>
        <TextCard id={"top"} />
        <TextCard id={"bottom"} />
      </Box>
      <Box sx={inline.thirdDivSx.bottom}>
        <Box sx={inline.thirdDivSx.bottom.text}>
          Streamline your microplastics analysis.
        </Box>
        <Button sx={inline.thirdDivSx.bottom.button} disableRipple>
          <a href="https://forms.gle/3whbd5ZFJmFqdYNR9">Talk to us today.</a>
        </Button>
      </Box>
    </Box>
  );
};
