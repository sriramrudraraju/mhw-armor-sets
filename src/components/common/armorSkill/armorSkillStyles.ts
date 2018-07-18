import { StyleRules } from "@material-ui/core/styles";

import theme from "../../../assets/themes/theme";

const styles: StyleRules<
  "armorSkill" | "paper" | "flexCenter" | "skillName"
> = {
  armorSkill: {},
  paper: {
    backgroundColor: theme.palette.primary.main
  },
  flexCenter: {
    display: "flex",
    justifyContent: "center",
    alignContent: "center"
  },
  skillName: {
    padding: "4px 0px 4px 4px"
  }
} as any;

export default styles;
