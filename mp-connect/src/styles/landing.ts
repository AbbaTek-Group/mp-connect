// landing inline styling

import { palette } from "./palette";
import { font } from "./font";

export const homeSx = {
  divContainer: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "nowrap",
  },
};

export const linkBarSx = {
  backgroundColor: palette.black,
  height: "2.5vw",
  width: "100vw",
  boxShadow: "0px 0px 16px rgb(0 0 0 / 0.16)",
  zIndex: "8",
  "@media (max-width: 480px)": {
    display: "none",
  },
};

export const linkBarContentSx = {
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    height: "100%",
    mr: "7.3vw",
  },
  iconButton: {
    a: { color: palette.white },
    icon: {
      mt: "0.35vw",
      fontSize: "1.8vw",
      transition: "none",
      "&:hover": {
        opacity: "0.84",
      },
    },
  },
};

export const navBarSx = {
  backgroundColor: palette.trueWhite,
  height: "6.6vw",
  width: "100vw",
  boxShadow: "0px 0px 16px rgb(0 0 0 / 0.16)",
  zIndex: "7",
  "@media (max-width: 480px)": {
    display: "none",
  },
};

export const navBarContentSx = {
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    height: "100%",
    alignItems: "center",
    ml: "7.3vw",
    mr: "7.3vw",
  },
  logo: {
    width: "13vw",
    height: "auto",
    marginTop: "0.7vw",
  },
  loginButton: {
    fontFamily: font.fontFamily,
    fontWeight: font.fontWeight.medium,
    backgroundColor: palette.parchment,
    fontSize: "1.1vw",
    borderRadius: "5px",
    paddingY: "0.25vw",
    width: "7vw",
    boxShadow: "none",
    mr: "1.5vw",
    a: {
      color: palette.black,
      textDecoration: "none",
    },
    "&:hover": {
      backgroundColor: palette.trueWhite,
      textShadow: "0px 0px 16px rgb(0 0 0 / 0.16)",
      boxShadow: "none",
    },
  },
  registerButton: {
    fontFamily: font.fontFamily,
    fontWeight: font.fontWeight.bold,
    fontSize: "1.1vw",
    backgroundColor: palette.mpBlue,
    borderRadius: "5px",
    paddingY: "0.25vw",
    width: "13vw",
    boxShadow: "0px 0px 16px rgb(0 0 0 / 0.16)",
    a: {
      color: palette.white,
      textDecoration: "none",
    },
    "&:hover": {
      backgroundColor: palette.slate,
      textShadow: "0px 0px 16px rgb(0 0 0 / 0.16)",
      boxShadow: "none",
    },
  },
};

export const heroDivSx = {
  backgroundColor: palette.trueWhite,
  backgroundSize: "100vw 56.25vw",
  backgroundPositionY: "3vw",
  backgroundRepeat: "no-repeat",
  height: "47.6vw",
  boxShadow: "0px 0px 16px rgb(0 0 0 / 0.16)",
  zIndex: "5",
  "@media (max-width: 480px)": {
    backgroundColor: palette.trueWhite,
    backgroundSize: "cover",
    backgroundPositionY: "30vw",
    backgroundPositionX: "0vw",
    height: "180vw",
  },
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    ml: "7.3vw",
    mr: "7.3vw",
    "@media (max-width: 480px)": {
      ml: "none",
      mr: "none",
    },
  },
  textBox: {
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    fontFamily: font.fontFamily,
    fontWeight: font.fontWeight.bold,
    fontSize: "5vw",
    mt: "10.5vw",
    mr: "32vw",
    zIndex: "7",
    "@media (max-width: 480px)": {
      position: "relative",
      textAlign: "center",
      fontWeight: font.fontWeight.extraBold,
      fontSize: "12.5vw",
      lineHeight: "12.5vw",
      mt: "40vw",
      ml: "0vw",
      mr: "0vw",
    },
  },
  button: {
    fontFamily: font.fontFamily,
    fontWeight: font.fontWeight.bold,
    fontSize: "1.5vw",
    paddingY: "0.1vw",
    paddingX: "1.5vw",
    backgroundColor: palette.mpBlue,
    borderRadius: "5px",
    width: "16.5vw",
    boxShadow: "0px 0px 16px rgb(0 0 0 / 0.16)",
    "@media (max-width: 480px)": {
      mt: "5vw",
      fontSize: "9vw",
      width: "auto",
    },
    a: {
      color: palette.parchment,
      textDecoration: "none",
    },
    "&:hover": {
      backgroundColor: palette.slate,
      textShadow: "0px 0px 16px rgb(0 0 0 / 0.16)",
      boxShadow: "0px 0px 16px rgb(0 0 0 / 0.16)",
    },
  },
};

export const secondDivSx = {
  backgroundColor: palette.black,
  backgroundImage: `linear-gradient(${palette.black}, ${palette.slate})`,
  backgroundPositionY: "22.5vw",
  backgroundRepeat: "no-repeat",
  height: "76.16vw",
  boxShadow: "0px 0px 16px rgb(0 0 0 / 0.16)",
  zIndex: "4",
  "@media (max-width: 480px)": {
    backgroundPositionY: "15.5vw",
    height: "400vw",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    ml: "7.3vw",
    mr: "7.3vw",
    "@media (max-width: 480px)": {
      ml: "0vw",
      mr: "0vw",
    },
  },
  globeDiv: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: "16vw",
    width: "81vw",
    mt: "12vw",
    mb: "10vw",
    "@media (max-width: 480px)": {
      ml: "0vw",
      mr: "0vw",
      mt: "8.5vw",
      height: "auto",
      width: "81vw",
      flexDirection: "column",
      justifyContent: "center",
    },
    imageBox: {
      mt: "1.5vw",
      backgroundPosition: "0vw -0.5vw",
      backgroundSize: "100%",
      backgroundRepeat: "no-repeat",
      opacity: "0.4",
      height: "17.6vw",
      width: "23%",
      "@media (max-width: 480px)": {
        height: "40vw",
        width: "40vw",
        mb: "7vw",
        backgroundPosition: "0vw",
        backgroundSize: "cover",
      },
    },
    textBox: {
      height: "90%",
      width: "75.15%",
      "@media (max-width: 480px)": {
        height: "100%",
        width: "100%",
      },
      title: {
        fontFamily: font.fontFamily,
        fontWeight: font.fontWeight.bold,
        fontSize: "3.8vw",
        color: palette.parchment,
        textShadow: "0px 0px 16px rgb(0 0 0 / 0.16)",
        "@media (max-width: 480px)": {
          fontSize: "9vw",
          textAlign: "center",
        },
        "b, strong": {
          color: palette.mpTeal,
        },
      },
      body: {
        fontFamily: font.fontFamily,
        fontWeight: font.fontWeight.medium,
        fontSize: "1.9vw",
        color: palette.parchment,
        mr: "9vw",
        "@media (max-width: 480px)": {
          mr: "none",
          textAlign: "center",
          fontSize: "5vw",
          width: "100%",
          mt: "6vw",
        },
        "b, strong": {
          color: palette.mpTeal,
        },
      },
    },
  },
  iconBoxDiv: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    height: "33.3vw",
    width: "100%",
    "@media (max-width: 480px)": {
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      width: "81%",
      height: "100%",
    },
    rowFlexbox: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      width: "100%",
      height: "auto",
      "@media (max-width: 480px)": {
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        mt: "5.5vw",
      },
    },
  },
  iconBox: {
    container: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      "@media (max-width: 480px)": {
        mb: "7vw",
      },
    },
    icon: {
      color: palette.white,
      fontSize: "7.5vw",
      mb: "2vw",
      filter: "drop-shadow(0px 0px 16px rgb(0 0 0 / 0.08))",
      "@media (max-width: 480px)": {
        fontSize: "13.5vw",
        my: "5vw",
      },
    },
    textBox: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      width: "95%",
      height: "65.6%",
      backgroundColor: palette.black,
      borderRadius: "5px",
      boxShadow: "0px 0px 16px rgb(0 0 0 / 0.16)",
      "@media (max-width: 480px)": {
        width: "100%",
        height: "100%",
      },
      title: {
        fontFamily: font.fontFamily,
        fontWeight: font.fontWeight.bold,
        fontSize: "1.7vw",
        color: palette.mpTeal,
        mt: "3vw",
        textShadow: "0px 0px 16px rgb(0 0 0 / 0.16)",
        "@media (max-width: 480px)": {
          fontSize: "7.5vw",
          mt: "6vw",
          mb: "3vw",
        },
      },
      body: {
        color: palette.parchment,
        fontFamily: font.fontFamily,
        fontWeight: font.fontWeight.medium,
        fontSize: "1.6vw",
        textAlign: "center",
        mt: "2vw",
        marginX: "2.8vw",
        "@media (max-width: 480px)": {
          fontSize: "5.5vw",
          marginX: "none",
          mt: "none",
          mb: "5vw",
        },
      },
    },
  },
};

export const thirdDivSx = {
  backgroundColor: palette.mpTeal,
  zIndex: "3",
  plastic: {
    backgroundRepeat: "repeat-y",
    backgroundSize: "100vw",
  },
  gradiant: {
    backgroundImage: `linear-gradient(transparent, ${palette.white})`,
    height: "100vw",
    backgroundSize: "100vw 50vw",
    backgroundPositionY: "50vw",
    backgroundRepeat: "no-repeat",
    "@media (max-width: 480px)": {
      backgroundSize: "cover",
      height: "205vw",
    },
  },
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100%",
    ml: "7.3vw",
    mr: "7.3vw",
    "@media (max-width: 480px)": {
      justifyContent: "center",
      alignItems: "center",
      mt: "0vw",
      ml: "0vw",
      mr: "0vw",
    },
    textCardContainer: {
      width: "71vw",
      mt: "6vw",
      mb: "2vw",
      "@media (max-width: 480px)": {
        width: "96%",
        my: "8vw",
        ml: "2vw",
        mr: "2vw",
      },
    },
  },
  textCard: {
    title: {
      backgroundColor: palette.white,
      borderTopLeftRadius: "5px",
      borderTopRightRadius: "5px",
      mb: "-0.1vw",
      boxShadow: "0px 0px 16px rgb(0 0 0 / 0.16)",
      zIndex: "3",
      "@media (max-width: 480px)": {},
      text: {
        fontFamily: font.fontFamily,
        fontWeight: font.fontWeight.bold,
        fontSize: "2.66vw",
        color: palette.black,
        mx: "2vw",
        "@media (max-width: 480px)": {
          fontSize: "6vw",
        },
      },
    },
    subTitle: {
      backgroundColor: palette.trueWhite,
      paddingTop: "2vw",
      paddingBottom: "4.75vw",
      paddingX: "5.25vw",
      borderRadius: "5px",
      boxShadow: "0px 0px 16px rgb(0 0 0 / 0.16)",
      zIndex: "4",
      text: {
        fontFamily: font.fontFamily,
        fontWeight: font.fontWeight.bold,
        fontSize: "2.2vw",
        color: palette.black,
        "@media (max-width: 480px)": {
          fontSize: "4.5vw",
        },
      },
      "b, strong": {
        color: palette.mpTeal,
      },
    },
    body: {
      backgroundColor: palette.white,
      borderRadius: "5px",
      boxShadow: "0px 0px 16px rgb(0 0 0 / 0.16)",
      zIndex: "5",
      text: {
        fontFamily: font.fontFamily,
        fontWeight: font.fontWeight.medium,
        fontSize: "1.75vw",
        width: "58vw",
        py: "1vw",
        px: "2vw",
        color: palette.black,
        "@media (max-width: 480px)": {
          width: "90%",
        },
      },
      bullets: {
        fontSize: "1.7vw",
        ml: "4vw",
        mt: "1vw",
        "@media (max-width: 480px)": {
          fontSize: "4.2vw",
          ml: "2vw",
          width: "100%",
        },
      },
      checks: {
        fontSize: "1.85vw",
        color: palette.slate,
        mb: "-0.35vw",
        mr: "0.5vw",
        "@media (max-width: 480px)": {
          fontSize: "4.5vw",
        },
      },
      "b, strong": {
        color: palette.black,
      },
    },
  },
  bottom: {
    mb: "6.5vw",
    mx: "1vw",
    "@media (max-width: 480px)": {
      mx: "2vw",
      mb: "none",
    },
    text: {
      mt: "4vw",
      fontFamily: font.fontFamily,
      fontWeight: font.fontWeight.bold,
      fontSize: "3.8vw",
      color: palette.black,
      float: "left",
      "@media (max-width: 480px)": {
        fontSize: "5.5vw",
        float: "none",
      },
    },
    button: {
      backgroundColor: palette.mpBlue,
      paddingX: "4vw",
      borderRadius: "5px",
      mt: "1vw",
      fontFamily: font.fontFamily,
      fontWeight: font.fontWeight.bold,
      fontSize: "3.5vw",
      float: "right",
      boxShadow: "0px 0px 16px rgb(0 0 0 / 0.08)",
      textShadow: "0px 0px 16px rgb(0 0 0 / 0.08)",
      "@media (max-width: 480px)": {
        fontSize: "7vw",
      },
      a: {
        color: palette.white,
        textDecoration: "none",
      },
      "&:hover": {
        backgroundColor: palette.slate,
        textShadow: "0px 0px 16px rgb(0 0 0 / 0.08)",
        boxShadow: "none",
      },
    },
  },
};

export const footerDivSx = {
  backgroundColor: palette.white,
  height: "27vw",
  zIndex: "2",
  break: { backgroundColor: palette.grey, height: "1px", width: "100%" },
  "@media (max-width: 480px)": {
    height: "50vw",
  },
  container: {
    ml: "7.3vw",
    mr: "7.3vw",
  },
  directory: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    mt: "5vw",
    mr: "1.5vw",
  },
  title: {
    fontFamily: font.fontFamily,
    fontWeight: font.fontWeight.bold,
    color: palette.black,
    fontSize: "1.5vw",
    mb: "1vw",
    "@media (max-width: 480px)": {
      fontSize: "3.5vw",
    },
  },
  text: {
    fontFamily: font.fontFamily,
    fontWeight: font.fontWeight.medium,
    fontSize: "1.35vw",
    "@media (max-width: 480px)": {
      fontSize: "2.5vw",
    },
    a: {
      color: palette.slate,
      textDecoration: "none",
    },
  },
  footer: {
    fontFamily: font.fontFamily,
    fontWeight: font.fontWeight.bold,
    color: palette.slate,
    mt: "9.7vw",
    fontSize: "1.25vw",
    "@media (max-width: 480px)": {
      fontSize: "2vw",
    },
    textAlign: "center",
    "b, strong": {
      color: palette.mpTeal,
    },
  },
};
