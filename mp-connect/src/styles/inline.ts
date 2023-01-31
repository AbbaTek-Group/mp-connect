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
    alignItems: "center",
    height: "100%",
  },
  loginButton: {
    fontFamily: font.fontFamily,
    fontWeight: font.fontWeight.medium,
    backgroundColor: palette.parchment,
    color: palette.black,
    width: "7vw",
    boxShadow: "none",
    mr: "1.5vw",
    "&:hover": {
      opacity: "0.84",
    },
  },
  registerButton: {
    fontFamily: font.fontFamily,
    fontWeight: font.fontWeight.bold,
    backgroundColor: palette.mpBlue,
    color: palette.white,
    width: "13vw",
    boxShadow: "0px 0px 16px rgb(0 0 0 / 0.16)",
    "&:hover": {
      opacity: "0.84",
    },
  },
};

export const topDivSx = {
  backgroundColor: palette.parchment,
  width: "100vw",
  height: "100vh",
  boxShadow: "0px 0px 16px rgb(0 0 0 / 0.16)",
  zIndex: "5",
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
