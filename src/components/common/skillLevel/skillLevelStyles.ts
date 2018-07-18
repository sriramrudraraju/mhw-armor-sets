import { StyleRules } from "@material-ui/core/styles";

import theme from "../../../assets/themes/theme";

const styles: StyleRules<"skillLevel" | "filled" | "empty"> = {
  skillLevel: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around"
  },
  filled: {
    width: "16px",
    height: "16px",
    backgroundColor: theme.palette.secondary.dark,
    boxShadow:
      "0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)",
    borderRadius: "16px"
  },
  empty: {
    width: "16px",
    height: "16px",
    backgroundColor: theme.palette.primary.light,
    boxShadow:
      "0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)",
    borderRadius: "16px"
  }
} as any;

export default styles;
