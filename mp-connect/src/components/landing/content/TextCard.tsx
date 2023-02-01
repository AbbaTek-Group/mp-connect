import { Box } from "@mui/material";
import { TextCardProps } from "../../../types";
import { inline } from "../../../styles";

export const TextCard = ({ id }: TextCardProps) => {
  return (
    <Box
      sx={{
        ...inline.thirdDivSx.container.textCardContainer,
        float: id === "academics" ? "left" : "right",
      }}
    >
      <Box sx={inline.thirdDivSx.textCard.title}>
        {id === "academics"
          ? "Academics & Research Organizations"
          : "Commercial Labs"}
        <Box sx={inline.thirdDivSx.textCard.subTitle}>
          {id === "academics"
            ? "Don't let the details bog you down"
            : "Stop wasting time counting particles"}
          <Box sx={inline.thirdDivSx.textCard.body}>
            {id === "academics"
              ? "Physical characterization of microplastics isn't easy- we get that. Our standalone web application can help you process, analyze and share your microplastics data without worrying about the nuances of microplastics characterization or massive upfront investments. Rest assured that your research is aligned with best practices for microplastics analysis. Even better, pay only for what your project requires! It's as easy as signing up and uploading your raw image files."
              : "Time is money. Manual analysis of particles is laborious, error-prone, and most importantly . . . boring! Stop spending hours under a microscope for a task that can be automated. Our API-based solution can integrate directly into your LIMS, allowing easy, replicable and reliable results."}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
