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
        <Box sx={inline.secondDivSx.iconBox.textBox.title}>
          {id === "check"
            ? "Easy To Use"
            : id === "hourglass"
            ? "Save Time & Money"
            : "Seamless Collaboration"}
        </Box>
        <Box sx={inline.secondDivSx.iconBox.textBox.body}>
          {id === "check"
            ? "We understand the complexities of microplastic analysis so you don't have to."
            : id === "hourglass"
            ? "Particle analysis no longer requires backbreaking hours under a microscope with our automated workflows and A.I. algorithms. "
            : "Get rid of messy spreadsheets and file sharing. Our solution integrates into your existing workflows. "}
        </Box>
      </Box>
    </Box>
  );
};
