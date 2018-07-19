import { StyleRules } from "@material-ui/core/styles";

import * as svg from "./MH3-Icons-armor-weps.png";

const styles: StyleRules<"head" | "chest" | "gloves" | "waist" | "legs"> = {
  head: {
    width: "40px",
    height: "40px",
    background: `url(${svg}) -3px -341px`
  },
  chest: {
    width: "40px",
    height: "40px",
    background: `url(${svg}) -40px -341px`
  },
  gloves: {
    width: "40px",
    height: "40px",
    background: `url(${svg}) -78px -341px`
  },
  waist: {
    width: "40px",
    height: "40px",
    background: `url(${svg}) -117px -341px`
  },
  legs: {
    width: "40px",
    height: "40px",
    background: `url(${svg}) -155px -341px`
  }
} as any;

export default styles;
