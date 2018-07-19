import { StyleRules } from "@material-ui/core/styles";

import theme from "../../../assets/themes/theme";

const Styles: StyleRules<
  "tableBodyText" | "iconSize" | "typography" | "center"
> = {
  tableBodyText: {
    color: theme.palette.primary.dark,
    textAlign: "center"
  },
  iconSize: {
    height: theme.palette.spacing.unit * 5,
    width: theme.palette.spacing.unit * 4,
    marginLeft: theme.palette.spacing.unit * 0.25,
    marginRight: theme.palette.spacing.unit * 0.25
  },
  typography: {
    color: theme.palette.primary.main
  },
  center: {
    display: "flex",
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center"
  }
} as any;

export default Styles;
