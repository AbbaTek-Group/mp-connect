// login inline styling

import { palette } from "./palette";
import { font } from "./font";

export const loginSx = {
  width: "100vw",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    width: "85.4vw",
    mt: "6.5vw",
  },
  imgDiv: {
    height: "100%",
    backgroundSize: "100%",
  },
  formDiv: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: palette.white,
    borderRadius: "5px",
    boxShadow: "0px 0px 16px rgb(0 0 0 / 0.16)",
    height: "23.75vw",
    ml: "6.14vw",
    padding: "4.3vw",
    title: {
      fontFamily: font.fontFamily,
      fontWeight: font.fontWeight.bold,
      color: palette.black,
      fontSize: "2.25vw",
      "b, strong": {
        color: palette.mpTeal,
      },
    },
    form: {
      fontFamily: font.fontFamily,
      fontWeight: font.fontWeight.medium,
      color: palette.black,
      fontSize: "1.25vw",
    },
    signInButton: {
      fontFamily: font.fontFamily,
      fontWeight: font.fontWeight.bold,
      fontSize: "1.1vw",
      backgroundColor: palette.mpBlue,
      borderRadius: "5px",
      paddingY: "0.25vw",
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
    forgotButton: {
      fontFamily: font.fontFamily,
      fontWeight: font.fontWeight.medium,
      backgroundColor: palette.parchment,
      fontSize: "1.1vw",
      borderRadius: "5px",
      color: palette.black,
      paddingY: "0.25vw",
      boxShadow: "none",
      mr: "1.5vw",
      "&:hover": {
        backgroundColor: palette.trueWhite,
        textShadow: "0px 0px 16px rgb(0 0 0 / 0.16)",
        boxShadow: "none",
      },
    },
  },
};
