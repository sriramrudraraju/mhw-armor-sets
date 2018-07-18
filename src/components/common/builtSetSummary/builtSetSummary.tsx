import * as React from "react";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

import ArmorSkill from "../armorSkill/armorSkill";

import builtSetSummaryStyles from "./builtSetSummaryStyles";

type WithStylesProps = WithStyles<"builtSetSummary">;
interface BuiltSetSummaryProps {}
type AllProps = BuiltSetSummaryProps & WithStylesProps;

const BuiltSetSummary: React.SFC<AllProps> = (props: AllProps) => {
  const { classes } = props;
  return (
    <div className={classes.builtSetSummary}>
      <Typography variant="body2">Skills</Typography>
      <ArmorSkill name="Attack" level={3} />
      <ArmorSkill name="Defence" level={5} />
      <ArmorSkill name="Recovery Up" level={2} />
      <ArmorSkill name="Recovery Speed" level={1} />
      <ArmorSkill name="Defence" level={5} />
      <ArmorSkill name="Defence" level={5} />
      <ArmorSkill name="Defence" level={5} />
      <ArmorSkill name="Defence" level={5} />
      <br />
      <Typography variant="body2">Bonus</Typography>
      <ArmorSkill name="Attack" level={3} />
      <ArmorSkill name="Defence" level={5} />
    </div>
  );
};

export default withStyles(builtSetSummaryStyles)(BuiltSetSummary);
