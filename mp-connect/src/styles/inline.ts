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
  height: "5vh",
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
  height: "13.9vh",
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
    marginTop: "2vh",
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

export const topDivSx = {
  backgroundColor: palette.parchment,
  width: "100vw",
  height: "100vh",
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
    fontSize: "10.25vh",
    mt: "22vh",
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
      height: "100vh",
      backgroundSize: "42.3vw",
      backgroundRepeat: "repeat-y",
      backgroundPosition: "0vw 0vw",
    },
  },
};

export const secondDivSx = {
  backgroundColor: palette.black,
  backgroundImage: `linear-gradient(${palette.black}, ${palette.slate})`,
  backgroundPositionY: "50vh",
  backgroundRepeat: "no-repeat",
  width: "100vw",
  height: "160vh",
  boxShadow: "0px 0px 16px rgb(0 0 0 / 0.16)",
  zIndex: "4",
  container: {
    ml: "7.3vw",
    mr: "7.3vw",
  },
};

export const thirdDivSx = {
  backgroundColor: palette.mpTeal,
  backgroundImage: `linear-gradient(${palette.mpTeal}, ${palette.white})`,
  backgroundSize: "100vw 50vh",
  backgroundPositionY: "150vh",
  backgroundRepeat: "no-repeat",
  width: "100vw",
  height: "200vh",
  zIndex: "3",
};

export const bottomDivSx = {
  backgroundColor: palette.white,
  width: "100vw",
  height: "50vh",
  zIndex: "2",
};
