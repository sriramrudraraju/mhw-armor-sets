import { StyleRules } from "@material-ui/core/styles";

import theme from "../../../assets/themes/theme";

const styles: StyleRules<"builtSetSummary"> = {
  builtSetSummary: {
    width: "250px",
    backgroundColor: theme.palette.primary.light,
    padding: theme.palette.spacing.unit
  }
} as any;

export default styles;
