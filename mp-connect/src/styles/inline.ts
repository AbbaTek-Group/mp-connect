// component inline styling

import { palette } from "./palette";

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
  zIndex: "7",
};

export const navBarSx = {};

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
