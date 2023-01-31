import { Box } from "@mui/material";

export const SecondDivContent = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        ml: "7.3vw",
        mr: "7.3vw",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "pink",
          height: "33vh",
          width: "81vw",
          my: "24.4vh",
        }}
      >
        <Box
          sx={{ backgroundColor: "purple", height: "90%", width: "23%" }}
        ></Box>
        <Box
          sx={{
            backgroundColor: "red",
            height: "90%",
            width: "75.15%",
          }}
        ></Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          backgroundColor: "pink",
          height: "67.7vh",
          width: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "32%",
            height: "67vh",
          }}
        >
          <Box>Icon</Box>
          <Box
            sx={{ width: "100%", height: "65.6%", backgroundColor: "black" }}
          ></Box>
        </Box>
      </Box>
    </Box>
  );
};
