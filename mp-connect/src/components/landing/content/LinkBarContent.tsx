import { Box, IconButton } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { linkBarContentSx } from "../../../styles/landing";

export const LinkBarContent = () => {
  return (
    <Box sx={linkBarContentSx.container}>
      <IconButton sx={linkBarContentSx.iconButton} disableRipple>
        <a href="https://www.linkedin.com/company/abbatek/">
          <LinkedInIcon sx={linkBarContentSx.iconButton.icon} />
        </a>
      </IconButton>
    </Box>
  );
};
