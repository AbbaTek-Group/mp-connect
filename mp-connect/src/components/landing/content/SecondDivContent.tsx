import { Box } from "@mui/material";

const IconBox = () => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box>Icon</Box>
      <Box sx={{ width: "95%", height: "65.6%", backgroundColor: "red" }}></Box>
    </Box>
  );
};

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
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
            height: "auto",
          }}
        >
          <IconBox />
          <IconBox />
          <IconBox />
        </Box>
      </Box>
    </Box>
  );
};
