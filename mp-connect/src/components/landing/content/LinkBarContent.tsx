import { Box, IconButton } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import { linkBarContentSx } from "../../../styles/inline";

export const LinkBarContent = () => {
  return (
    <Box sx={linkBarContentSx.container}>
      <IconButton
        sx={linkBarContentSx.iconButton}
        onClick={() => console.log("linkedin")}
        disableRipple
      >
        <LinkedInIcon />
      </IconButton>
    </Box>
  );
};
