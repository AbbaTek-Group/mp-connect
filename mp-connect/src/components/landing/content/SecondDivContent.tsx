import { Box } from "@mui/material";
import { IconBox } from "./IconBox";
import { inline } from "../../../styles";

export const SecondDivContent = () => {
  return (
    <Box sx={inline.secondDivSx.container}>
      <Box sx={inline.secondDivSx.globeDiv}>
        <Box sx={inline.secondDivSx.globeDiv.imageBox}></Box>
        <Box sx={inline.secondDivSx.globeDiv.textBox}></Box>
      </Box>
      <Box sx={inline.secondDivSx.iconBoxDiv}>
        <Box sx={inline.secondDivSx.iconBoxDiv.rowFlexbox}>
          <IconBox id={"check"} />
          <IconBox id={"hourglass"} />
          <IconBox id={"group"} />
        </Box>
      </Box>
    </Box>
  );
};
