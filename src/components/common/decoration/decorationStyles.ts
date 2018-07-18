import { StyleRules } from "@material-ui/core/styles";

import theme from "../../../assets/themes/theme";

const styles: StyleRules<"decoration" | "typography"> = {
  decoration: {
    display: "flex",
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center"
  },
  typography: {
    color: theme.palette.primary.main
  }
} as any;

export default styles;
