import { Box } from "@mui/material";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import { inline } from "../../../styles";
import { IconBoxProps } from "../../../types";

export const IconBox = ({ id }: IconBoxProps) => {
  return (
    <Box sx={inline.secondDivSx.iconBox.container}>
      <Box>
        <TaskAltIcon sx={inline.secondDivSx.iconBox.icon} />
      </Box>
      <Box sx={inline.secondDivSx.iconBox.textBox}>{id}</Box>
    </Box>
  );
};
