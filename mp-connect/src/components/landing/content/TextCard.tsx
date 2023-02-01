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
          <br />
          Our standalone web application can help you process, analyze and share
          <br /> your microplastics data without worrying about the nuances
          <br /> of microplastics characterization or massive upfront
          <br /> investments. Rest assured that your research is
          <br /> aligned with best practices for microplastics analysis.
          <br /> Even better, pay only for what your project requires!
          <br /> It's as easy as signing up and uploading your raw image files.
        </>
      );
    } else {
      return (
        <>
          Time is money. Manual analysis of particles is laborious,
          <br /> error-prone, and most importantly . . . boring! ,
          <br /> Stop spending hours under a microscope for a task,
          <br /> that can be automated. Our API-based solution
          <br /> can integrate directly into your LIMS, allowing
          <br /> easy, replicable and reliable results.
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
      <Box
        sx={{
          ...inline.thirdDivSx.textCard.title,
          width: id === "top" ? "47.75vw" : "24.5vw",
          ml: id === "top" ? "2vw" : "44.5vw",
        }}
      >
        <Box sx={inline.thirdDivSx.textCard.title.text}>{titleText()}</Box>
      </Box>
      <Box sx={inline.thirdDivSx.textCard.subTitle}>
        <Box
          sx={{
            ...inline.thirdDivSx.textCard.subTitle.text,
            ml: id === "top" ? null : "25.7vw",
          }}
        >
          {subTitleText()}
        </Box>
        <Box sx={inline.thirdDivSx.textCard.body}>
          <Box sx={inline.thirdDivSx.textCard.body.text}>{bodyText()}</Box>
        </Box>
      </Box>
    </Box>
  );
};
