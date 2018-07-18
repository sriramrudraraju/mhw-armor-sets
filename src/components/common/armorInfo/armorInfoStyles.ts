import { StyleRules } from "@material-ui/core/styles";

import theme from "../../../assets/themes/theme";

const styles: StyleRules<"armorInfo" | "button"> = {
  armorInfo: {
    width: "250px",
    padding: theme.palette.spacing.unit,
    backgroundColor: theme.palette.primary.light
  },
  button: {
    marginTop: theme.palette.spacing.unit,
    marginBottom: theme.palette.spacing.unit
  }
} as any;

export default styles;
