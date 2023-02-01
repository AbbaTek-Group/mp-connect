import { Box } from "@mui/material";
import { inline } from "../../../styles";

export const FooterDivContent = () => {
  const directory: any = [
    {
      heading: "Company",
      subHeading: [
        { title: "About", url: "" },
        { title: "Team", url: "" },
        { title: "Contact Us", url: "" },
        { title: "News", url: "" },
      ],
    },
    {
      heading: "Legal",
      subHeading: [
        { title: "Privacy Policy", url: "" },
        { title: "Terms", url: "" },
      ],
    },
  ];

  return (
    <Box sx={inline.footerDivSx.container}>
      <Box sx={inline.footerDivSx.break} />
      <Box sx={inline.footerDivSx.directory}>
        {directory.map((index: any) => {
          return (
            <Box key={index.title}>
              <Box sx={inline.footerDivSx.title}>{index.heading}</Box>
              {index.subHeading.map((subIndex: any) => {
                return <Box sx={inline.footerDivSx.text}>{subIndex.title}</Box>;
              })}
            </Box>
          );
        })}
      </Box>
      <Box sx={inline.footerDivSx.footer}>
        © 2022 <b>AbbaTek Group Inc.</b> All rights reserved.
      </Box>
    </Box>
  );
};
