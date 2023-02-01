import { Box, Button } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import { TextCard } from "./TextCard";
// import micro from "./img/micro.png";
import { inline } from "../../../styles";

export const ThirdDivContent = () => {
  return (
    <Box sx={inline.thirdDivSx.container}>
      <SchoolIcon sx={inline.thirdDivSx.topIcon} />
      <AnalyticsIcon sx={inline.thirdDivSx.bottomIcon} />
      <Box>
        <TextCard id={"top"} />
        <TextCard id={"bottom"} />
      </Box>
      <Box sx={inline.thirdDivSx.bottom}>
        <Box sx={inline.thirdDivSx.bottom.text}>
          Streamline your microplastics analysis.
        </Box>
        <Button
          sx={inline.thirdDivSx.bottom.button}
          onClick={() => console.log("talk to us")}
          disableRipple
        >
          Talk to us today.
        </Button>
      </Box>
    </Box>
  );
};
