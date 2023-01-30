// component inline styling

import { palette } from "./palette";

export const homeSx = {
  divContainer: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "nowrap",
  },
};

export const topDivSx = {
  backgroundColor: palette.parchment,
  width: "100vw",
  height: "100vh",
};

export const secondDivSx = {
  backgroundColor: palette.black,
  backgroundImage: `linear-gradient(${palette.black}, ${palette.slate})`,
  backgroundPositionY: "50vh",
  backgroundRepeat: "no-repeat",
  width: "100vw",
  height: "160vh",
};

export const thirdDivSx = {
  backgroundColor: palette.mpTeal,
  backgroundImage: `linear-gradient(${palette.mpTeal}, ${palette.white})`,
  backgroundSize: "100vw 50vh",
  backgroundPositionY: "150vh",
  backgroundRepeat: "no-repeat",
  width: "100vw",
  height: "200vh",
};

export const bottomDivSx = {
  backgroundColor: palette.white,
  width: "100vw",
  height: "50vh",
};
