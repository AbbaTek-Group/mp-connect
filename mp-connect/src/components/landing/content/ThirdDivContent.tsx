import { Box, Button } from "@mui/material";
import BubbleChartIcon from "@mui/icons-material/BubbleChart";
import InsightsIcon from "@mui/icons-material/Insights";
import { TextCard } from "./TextCard";
// import micro from "./img/micro.png";
import { inline } from "../../../styles";

export const ThirdDivContent = () => {
  return (
    <Box sx={inline.thirdDivSx.container}>
      <BubbleChartIcon />
      <InsightsIcon />
      <Box>
        <TextCard id={"top"} />
        <TextCard id={"bottom"} />
      </Box>
      <Box>
        <Box>Streamline your microplastics analysis.</Box>
        <Button>Talk to us today.</Button>
      </Box>
    </Box>
  );
};
