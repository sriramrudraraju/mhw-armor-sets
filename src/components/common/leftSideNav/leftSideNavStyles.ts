import { StyleRules } from "@material-ui/core/styles";

import theme from "../../../assets/themes/theme";

const appStyles: StyleRules<"listItem" | "leftDrawer" | "listIcon"> = {
  leftDrawer: {
    backgroundColor: theme.palette.primary.main
  },
  listItem: {
    color: theme.palette.primary.contrastText
  },
  listIcon: {
    color: theme.palette.primary.contrastText
  }
} as any;

export default appStyles;
