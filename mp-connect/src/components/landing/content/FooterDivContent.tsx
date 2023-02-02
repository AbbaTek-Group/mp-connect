import { Box } from "@mui/material";
import { inline } from "../../../styles";

export const FooterDivContent = () => {
  const directory: any = [
    {
      heading: "Company",
      subHeading: [
        { title: "About", url: "https://abbatekgroup.com/about-us/" },
        { title: "Team", url: "https://abbatekgroup.com/our-team/" },
        { title: "Contact Us", url: "https://forms.gle/3whbd5ZFJmFqdYNR9" },
        { title: "News", url: "https://abbatekgroup.com/" },
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
            <Box sx={{ mx: "2vw" }} key={index.heading}>
              <Box sx={inline.footerDivSx.title}>{index.heading}</Box>
              {index.subHeading.map((subIndex: any) => {
                return (
                  <Box sx={inline.footerDivSx.text} key={subIndex.title}>
                    <a href={subIndex.url}>{subIndex.title}</a>
                  </Box>
                );
              })}
            </Box>
          );
        })}
      </Box>
      <Box sx={inline.footerDivSx.footer}>
        © 2023 <b>AbbaTek Group Inc.</b> All rights reserved.
      </Box>
    </Box>
  );
};
