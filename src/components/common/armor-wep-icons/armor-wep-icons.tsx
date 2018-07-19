import * as React from "react";
import { withStyles, WithStyles } from "@material-ui/core/styles";

import armorWepIconsStyles from "./armor-wep-icons-styles";

type WithStylesProps = WithStyles<
  "head" | "chest" | "gloves" | "waist" | "legs"
>;
interface ArmorWepIconsProps {
  icon: "head" | "chest" | "gloves" | "waist" | "legs";
}
type AllProps = ArmorWepIconsProps & WithStylesProps;
const ArmorWepIcons: React.SFC<AllProps> = (props: AllProps) => {
  const { classes } = props;
  switch (props.icon) {
    case "head":
      return <div className={classes.head} />;
    case "chest":
      return <div className={classes.chest} />;
    case "gloves":
      return <div className={classes.gloves} />;
    case "waist":
      return <div className={classes.waist} />;
    case "legs":
      return <div className={classes.legs} />;
    default:
      return <div>Icon</div>;
  }
};

export default withStyles(armorWepIconsStyles)(ArmorWepIcons);
