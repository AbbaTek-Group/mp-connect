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
    padding: "5vw",
  },
  imgDiv: {
    height: "100%",
    backgroundSize: "41vw",
    backgroundRepeat: "no-repeat",
  },
  formDiv: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: palette.white,
    borderRadius: "5px",
    boxShadow: "0px 0px 16px rgb(0 0 0 / 0.16)",
    ml: "2.14vw",
    width: "30vw",
    padding: "4.3vw",
    title: {
      fontFamily: font.fontFamily,
      fontWeight: font.fontWeight.bold,
      color: palette.black,
      fontSize: "2.25vw",
      mb: "1.25vw",
      "b, strong": {
        color: palette.mpTeal,
      },
    },
    form: {
      fontFamily: font.fontFamily,
      fontWeight: font.fontWeight.medium,
      color: palette.black,
      fontSize: "1.25vw",
      display: "flex",
      flexDirection: "column",
    },
    signInButton: {
      fontFamily: font.fontFamily,
      fontWeight: font.fontWeight.bold,
      fontSize: "1.25vw",
      backgroundColor: palette.mpTeal,
      borderRadius: "5px",
      paddingY: "1vw",
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
      backgroundColor: palette.trueWhite,
      color: palette.slate,
      fontSize: "1.1vw",
      ml: "15vw",
      mt: "1vw",
      width: "50%",
      borderRadius: "5px",
      paddingY: "0.25vw",
      boxShadow: "none",
      "&:hover": {
        backgroundColor: palette.trueWhite,
        textShadow: "0px 0px 16px rgb(0 0 0 / 0.16)",
        boxShadow: "none",
      },
    },
  },
};
