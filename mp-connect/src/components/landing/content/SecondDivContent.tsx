import { Box } from "@mui/material";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import { inline } from "../../../styles";

const IconBox = () => {
  return (
    <Box sx={inline.secondDivSx.iconBox.container}>
      <Box>
        <TaskAltIcon sx={inline.secondDivSx.iconBox.icon} />
      </Box>
      <Box sx={inline.secondDivSx.iconBox.textBox}></Box>
    </Box>
  );
};

export const SecondDivContent = () => {
  return (
    <Box sx={inline.secondDivSx.container}>
      <Box sx={inline.secondDivSx.globeDiv}>
        <Box sx={inline.secondDivSx.globeDiv.imageBox}></Box>
        <Box sx={inline.secondDivSx.globeDiv.textBox}></Box>
      </Box>
      <Box sx={inline.secondDivSx.iconBoxDiv}>
        <Box sx={inline.secondDivSx.iconBoxDiv.rowFlexbox}>
          <IconBox />
          <IconBox />
          <IconBox />
        </Box>
      </Box>
    </Box>
  );
};
