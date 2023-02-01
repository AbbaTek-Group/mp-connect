import { Box } from "@mui/material";
import { TextCardProps } from "../../../types";
import { inline } from "../../../styles";

export const TextCard = ({ id }: TextCardProps) => {
  const titleText = () => {
    if (id === "top") {
      return <>Academics & Research Organizations</>;
    } else {
      return <>Commercial Labs</>;
    }
  };

  const subTitleText = () => {
    if (id === "top") {
      return (
        <>
          Don't let the details <b>bog you down</b>
        </>
      );
    } else {
      return (
        <>
          Stop wasting time <b>counting particles</b>
        </>
      );
    }
  };

  const bodyText = () => {
    if (id === "top") {
      return (
        <>
          Physical characterization of microplastics isn't easy -
          <b> we get that. </b>
          Our standalone web application can help you process, analyze and share
          your microplastics data without worrying about the nuances of
          microplastics characterization or massive upfront investments. Rest
          assured that your research is aligned with best practices for
          microplastics analysis. Even better, pay only for what your project
          requires! It's as easy as signing up and uploading your raw image
          files.
        </>
      );
    } else {
      return (
        <>
          Time is money. Manual analysis of particles is laborious, error-prone,
          and most importantly . . . boring! Stop spending hours under a
          microscope for a task that can be automated. Our API-based solution
          can integrate directly into your LIMS, allowing easy, replicable and
          reliable results.
        </>
      );
    }
  };

  return (
    <Box
      sx={{
        ...inline.thirdDivSx.container.textCardContainer,
        float: id === "top" ? "left" : "right",
      }}
    >
      <Box sx={inline.thirdDivSx.textCard.title}>
        <Box sx={inline.thirdDivSx.textCard.title.text}>{titleText()}</Box>
        <Box sx={inline.thirdDivSx.textCard.subTitle}>
          <Box sx={inline.thirdDivSx.textCard.subTitle.text}>
            {subTitleText()}
          </Box>
          <Box sx={inline.thirdDivSx.textCard.body}>
            <Box sx={inline.thirdDivSx.textCard.body.text}>{bodyText()}</Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
