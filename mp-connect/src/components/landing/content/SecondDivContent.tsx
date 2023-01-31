import { Box } from "@mui/material";
import { IconBox } from "./IconBox";
import { inline } from "../../../styles";

export const SecondDivContent = () => {
  return (
    <Box sx={inline.secondDivSx.container}>
      <Box sx={inline.secondDivSx.globeDiv}>
        <Box sx={inline.secondDivSx.globeDiv.imageBox}></Box>
        <Box sx={inline.secondDivSx.globeDiv.textBox}>
          <Box sx={inline.secondDivSx.globeDiv.textBox.title}>
            A global <b>solution</b> to a global problem.
          </Box>
          <Box sx={inline.secondDivSx.globeDiv.textBox.body}>
            Our mission is to allow for <b>scalable</b> and <b>comparable </b>
            research and monitoring of microplastics. We do this by applying
            machine learning to automate physical identification,
            characterization and measurement of microplastics particles,
            enabling repeatable <b>results without the expertise</b>.
          </Box>
        </Box>
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
