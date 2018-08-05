import { StyleRules } from "@material-ui/core/styles";

import theme from "../../../assets/themes/theme";

const styles: StyleRules<"armorEquip" | "armorButton" | "decorationButton"> = {
  armorEquip: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: theme.palette.spacing.unit * 0.5
  },
  armorButton: {
    width: "100%",
    height: theme.palette.spacing.unit * 6,
    margin: theme.palette.spacing.unit * 0.25,
    minHeight: theme.palette.spacing.unit * 4,
    lineHeight: "0px"
  },
  decorationButton: {
    width: "45vw",
    margin: theme.palette.spacing.unit * 0.25,
    minHeight: theme.palette.spacing.unit * 2.75,
    lineHeight: "0px"
  }
} as any;

export default styles;
