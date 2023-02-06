import { Box } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import { landing } from "../../../styles";
import { TextCardProps } from "../../../types";

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
        <Box>
          <Box
            sx={{
              "@media (max-width: 480px)": {
                display: "none",
              },
            }}
          >
            Physical characterization of microplastics isn't easy—we get that.
            <br /> Our standalone web application can help you process, analyze,
            and share
            <br /> your microplastics data without worrying about the nuances of
            <br /> microplastics characterization.
          </Box>
          <Box sx={landing.thirdDivSx.textCard.body.bullets}>
            <CheckIcon sx={landing.thirdDivSx.textCard.body.checks} />
            <>Reduce identification and characterization error</>
            <br />
            <CheckIcon sx={landing.thirdDivSx.textCard.body.checks} />
            <>No upfront investment - cost scales with your project</>
            <br />
            <CheckIcon sx={landing.thirdDivSx.textCard.body.checks} />
            <>Ensure alignment with best practices</>
            <br />
            <CheckIcon sx={landing.thirdDivSx.textCard.body.checks} />
            <>Collaborate and share with your research group</>
            <br />
            <CheckIcon sx={landing.thirdDivSx.textCard.body.checks} />
            <>Easily conduct quality control on data</>
          </Box>
        </Box>
      );
    } else {
      return (
        <Box>
          <Box
            sx={{
              "@media (max-width: 480px)": {
                display: "none",
              },
            }}
          >
            Time is money. Manual analysis of particles is laborious,
            error-prone,
            <br />
            and most importantly—boring!
          </Box>
          <Box sx={landing.thirdDivSx.textCard.body.bullets}>
            <CheckIcon sx={landing.thirdDivSx.textCard.body.checks} />
            <>
              Streamline your analytical workflow and increase sample throughput
            </>
            <br />
            <CheckIcon sx={landing.thirdDivSx.textCard.body.checks} />
            <>Ensure repeatable results across lab personnel</>
            <br />
            <CheckIcon sx={landing.thirdDivSx.textCard.body.checks} />
            <>Integrate directly into your LIM system for maximum efficiency</>
            <br />
            <CheckIcon sx={landing.thirdDivSx.textCard.body.checks} />
            <>Reduce strain on lab personnel</>
          </Box>
        </Box>
      );
    }
  };

  return (
    <Box
      sx={{
        ...landing.thirdDivSx.container.textCardContainer,
        float: id === "top" ? "left" : "right",
      }}
    >
      <Box
        sx={{
          ...landing.thirdDivSx.textCard.title,
          width: id === "top" ? "47.75vw" : "24.5vw",
          ml: id === "top" ? "2vw" : "44.5vw",
          "@media (max-width: 480px)": {
            width: id === "top" ? "75.75vw" : "50vw",
            ml: id === "top" ? "3vw" : "33vw",
          },
        }}
      >
        <Box sx={landing.thirdDivSx.textCard.title.text}>{titleText()}</Box>
      </Box>
      <Box sx={landing.thirdDivSx.textCard.subTitle}>
        <Box
          sx={{
            ...landing.thirdDivSx.textCard.subTitle.text,
            ml: id === "top" ? null : "25.7vw",
            "@media (max-width: 480px)": {
              fontSize: "4.5vw",
              ml: id === "top" ? null : "13vw",
            },
          }}
        >
          {subTitleText()}
        </Box>
        <Box sx={landing.thirdDivSx.textCard.body}>
          <Box sx={landing.thirdDivSx.textCard.body.text}>{bodyText()}</Box>
        </Box>
      </Box>
    </Box>
  );
};
