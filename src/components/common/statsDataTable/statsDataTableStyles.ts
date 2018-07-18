import { StyleRules } from "@material-ui/core/styles";

import theme from "../../../assets/themes/theme";

const styles: StyleRules<"statsDataTable" | "tableCell" | "tablerow"> = {
  statsDataTable: {
    backgroundColor: theme.palette.primary.light
  },
  tableCell: {
    borderBottom: "0px"
  },
  tablerow: {
    height: "0px"
  }
} as any;

export default styles;
