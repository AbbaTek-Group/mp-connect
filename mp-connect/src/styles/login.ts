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
    title: {},
    text: {},
    signInButton: {},
    forgotButton: {},
  },
};
