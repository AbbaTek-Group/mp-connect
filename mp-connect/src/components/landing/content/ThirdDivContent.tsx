import { Box, Button } from "@mui/material";
import { TextCard } from "./TextCard";
// import micro from "./img/micro.png";
// import { inline } from "../../../styles";

export const ThirdDivContent = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%",
        ml: "7.3vw",
        mr: "7.3vw",
      }}
    >
      <Box>
        <TextCard id={"academics"} />
        <TextCard id={"labs"} />
      </Box>
      <Box>
        <Box>Streamline your microplastics analysis.</Box>
        <Button>Talk to us today.</Button>
      </Box>
    </Box>
  );
};
