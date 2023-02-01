// component inline styling

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
    color: palette.white,
    "&:hover": {
      opacity: "0.84",
    },
  },
};

export const navBarSx = {
  backgroundColor: palette.trueWhite,
  height: "6.6vw",
  width: "100vw",
  boxShadow: "0px 0px 16px rgb(0 0 0 / 0.16)",
  zIndex: "7",
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
    borderRadius: "5px",
    color: palette.black,
    paddingY: "0.25vw",
    width: "7vw",
    boxShadow: "none",
    mr: "1.5vw",
    "&:hover": {
      backgroundColor: palette.trueWhite,
      textShadow: "0px 0px 16px rgb(0 0 0 / 0.16)",
      boxShadow: "none",
    },
  },
  registerButton: {
    fontFamily: font.fontFamily,
    fontWeight: font.fontWeight.bold,
    backgroundColor: palette.mpBlue,
    borderRadius: "5px",
    color: palette.white,
    paddingY: "0.25vw",
    width: "13vw",
    boxShadow: "0px 0px 16px rgb(0 0 0 / 0.16)",
    "&:hover": {
      backgroundColor: palette.slate,
      textShadow: "0px 0px 16px rgb(0 0 0 / 0.16)",
      boxShadow: "none",
    },
  },
};

export const heroDivSx = {
  backgroundColor: palette.parchment,
  height: "47.6vw",
  boxShadow: "0px 0px 16px rgb(0 0 0 / 0.16)",
  zIndex: "5",
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    ml: "7.3vw",
    mr: "7.3vw",
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
  },
  button: {
    fontFamily: font.fontFamily,
    fontWeight: font.fontWeight.bold,
    fontSize: "1.5vw",
    paddingY: "0.1vw",
    paddingX: "1.5vw",
    backgroundColor: palette.mpBlue,
    borderRadius: "5px",
    color: palette.parchment,
    width: "16.5vw",
    boxShadow: "0px 0px 16px rgb(0 0 0 / 0.16)",
    "&:hover": {
      backgroundColor: palette.slate,
      textShadow: "0px 0px 16px rgb(0 0 0 / 0.16)",
      boxShadow: "0px 0px 16px rgb(0 0 0 / 0.16)",
    },
  },
  imageBox: {
    backgroundColor: "white",
    width: "42.3vw",
    height: "100%",
    zIndex: "5",
    hexPattern: {
      width: "42.3vw",
      height: "47.6vw",
      backgroundSize: "42.3vw",
      backgroundRepeat: "repeat-y",
      backgroundPosition: "0vw 0vw",
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
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    ml: "7.3vw",
    mr: "7.3vw",
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
    imageBox: {
      mt: "1.5vw",
      backgroundPosition: "0vw -0.5vw",
      backgroundSize: "100%",
      backgroundRepeat: "no-repeat",
      opacity: "0.4",
      height: "17.6vw",
      width: "23%",
    },
    textBox: {
      height: "90%",
      width: "75.15%",
      title: {
        fontFamily: font.fontFamily,
        fontWeight: font.fontWeight.bold,
        fontSize: "3.8vw",
        color: palette.parchment,
        textShadow: "0px 0px 16px rgb(0 0 0 / 0.16)",
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
    rowFlexbox: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      width: "100%",
      height: "auto",
    },
  },
  iconBox: {
    container: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    icon: {
      color: palette.white,
      fontSize: "7.5vw",
      mb: "2vw",
      filter: "drop-shadow(0px 0px 16px rgb(0 0 0 / 0.08))",
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
      title: {
        fontFamily: font.fontFamily,
        fontWeight: font.fontWeight.bold,
        fontSize: "1.7vw",
        color: palette.mpTeal,
        mt: "3vw",
        textShadow: "0px 0px 16px rgb(0 0 0 / 0.16)",
      },
      body: {
        color: palette.parchment,
        fontFamily: font.fontFamily,
        fontWeight: font.fontWeight.medium,
        fontSize: "1.6vw",
        textAlign: "center",
        mt: "2vw",
        marginX: "2.8vw",
      },
    },
  },
};

export const thirdDivSx = {
  backgroundColor: palette.mpTeal,
  backgroundImage: `linear-gradient(${palette.mpTeal}, ${palette.white})`,
  backgroundSize: "100vw 50vw",
  backgroundPositionY: "75vw",
  backgroundRepeat: "no-repeat",
  height: "100vw",
  zIndex: "3",
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100%",
    ml: "7.3vw",
    mr: "7.3vw",
    textCardContainer: {
      width: "71vw",
      mt: "6vw",
      mb: "2vw",
    },
  },
  topIcon: {
    position: "absolute",
    ml: "49vw",
    mt: "18.25vw",
    transform: "rotate(1deg)",
    color: palette.grey,
    fontSize: "15.5vw",
    filter: "drop-shadow(0px 0px 16px rgb(0 0 0 / 0.04))",
  },
  bottomIcon: {
    position: "absolute",
    ml: "64vw",
    mt: "54vw",
    color: palette.grey,
    fontSize: "15.5vw",
    filter: "drop-shadow(0px 0px 16px rgb(0 0 0 / 0.04))",
  },
  textCard: {
    title: {
      backgroundColor: palette.white,
      borderTopLeftRadius: "5px",
      borderTopRightRadius: "5px",
      mb: "-0.1vw",
      boxShadow: "0px 0px 16px rgb(0 0 0 / 0.16)",
      zIndex: "3",
      text: {
        fontFamily: font.fontFamily,
        fontWeight: font.fontWeight.bold,
        fontSize: "2.66vw",
        color: palette.black,
        mx: "2vw",
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
        fontSize: "1.85vw",
        width: "58vw",
        py: "1vw",
        px: "2vw",
        color: palette.black,
      },
      "b, strong": {
        color: palette.black,
      },
    },
  },
  bottom: {
    mb: "6.5vw",
    mx: "1vw",
    text: {
      fontFamily: font.fontFamily,
      fontWeight: font.fontWeight.bold,
      fontSize: "3.8vw",
      color: palette.black,
      float: "left",
    },
    button: {
      backgroundColor: palette.mpBlue,
      paddingX: "4vw",
      borderRadius: "5px",
      mt: "1vw",
      fontFamily: font.fontFamily,
      fontWeight: font.fontWeight.bold,
      fontSize: "3.5vw",
      color: palette.white,
      float: "right",
      boxShadow: "0px 0px 16px rgb(0 0 0 / 0.08)",
      textShadow: "0px 0px 16px rgb(0 0 0 / 0.08)",
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
  height: "25vw",
  zIndex: "2",
  break: { backgroundColor: palette.grey, height: "1px", width: "100%" },
  container: {
    ml: "7.3vw",
    mr: "7.3vw",
  },
  directory: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  title: {},
  text: {},
  footer: {},
};
