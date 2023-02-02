import { Box } from "@mui/material";
import { IconBox } from "./IconBox";
import { landing } from "../../../styles";
import globe from "./img/globe.png";

export const SecondDivContent = () => {
  return (
    <Box sx={landing.secondDivSx.container}>
      <Box sx={landing.secondDivSx.globeDiv}>
        <Box
          sx={{
            ...landing.secondDivSx.globeDiv.imageBox,
            backgroundImage: `url(${globe})`,
          }}
        ></Box>
        <Box sx={landing.secondDivSx.globeDiv.textBox}>
          <Box sx={landing.secondDivSx.globeDiv.textBox.title}>
            A global <b>solution</b> to a global problem.
          </Box>
          <Box sx={landing.secondDivSx.globeDiv.textBox.body}>
            Our mission is to allow for <b>scalable</b> and <b>comparable </b>
            research and monitoring of microplastics. We do this by applying
            machine learning to automate physical identification,
            characterization and measurement of microplastics particles,
            enabling repeatable <b>results without the expertise</b>.
          </Box>
        </Box>
      </Box>
      <Box sx={landing.secondDivSx.iconBoxDiv}>
        <Box sx={landing.secondDivSx.iconBoxDiv.rowFlexbox}>
          <IconBox id={"check"} />
          <IconBox id={"hourglass"} />
          <IconBox id={"group"} />
        </Box>
      </Box>
    </Box>
  );
};
