import { Box } from "@mui/material";
import { landing } from "../../../styles";

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
    <Box sx={landing.footerDivSx.container}>
      <Box sx={landing.footerDivSx.break} />
      <Box sx={landing.footerDivSx.directory}>
        {directory.map((index: any) => {
          return (
            <Box sx={{ mx: "2vw" }} key={index.heading}>
              <Box sx={landing.footerDivSx.title}>{index.heading}</Box>
              {index.subHeading.map((subIndex: any) => {
                return (
                  <Box sx={landing.footerDivSx.text} key={subIndex.title}>
                    <a href={subIndex.url}>{subIndex.title}</a>
                  </Box>
                );
              })}
            </Box>
          );
        })}
      </Box>
      <Box sx={landing.footerDivSx.footer}>
        © 2023 <b>AbbaTek Group Inc.</b> All rights reserved.
      </Box>
    </Box>
  );
};
