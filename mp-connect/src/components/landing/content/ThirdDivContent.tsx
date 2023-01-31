import { Box, Button } from "@mui/material";
import { TextCard } from "./TextCard";
// import micro from "./img/micro.png";
// import { inline } from "../../../styles";

export const ThirdDivContent = () => {
  return (
    <Box>
      <Box>
        <TextCard />
        <TextCard />
      </Box>
      <Box>
        <Box>Streamline your microplastics analysis.</Box>
        <Button>Talk to us today.</Button>
      </Box>
    </Box>
  );
};
