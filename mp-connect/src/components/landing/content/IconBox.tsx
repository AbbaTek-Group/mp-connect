import { Box } from "@mui/material";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import MoreTimeIcon from "@mui/icons-material/MoreTime";
import GroupWorkIcon from "@mui/icons-material/GroupWork";
import { inline } from "../../../styles";
import { IconBoxProps } from "../../../types";

export const IconBox = ({ id }: IconBoxProps) => {
  // renders icon & text conditionally according to id

  return (
    <Box sx={inline.secondDivSx.iconBox.container}>
      <Box>
        {id === "check" ? (
          <TaskAltIcon sx={inline.secondDivSx.iconBox.icon} />
        ) : id === "hourglass" ? (
          <MoreTimeIcon sx={inline.secondDivSx.iconBox.icon} />
        ) : (
          <GroupWorkIcon sx={inline.secondDivSx.iconBox.icon} />
        )}
      </Box>
      <Box sx={inline.secondDivSx.iconBox.textBox}>
        {id === "check"
          ? "checkdasdasd"
          : id === "hourglass"
          ? "hourglasszzzz"
          : "groupygroupy"}
      </Box>
    </Box>
  );
};
