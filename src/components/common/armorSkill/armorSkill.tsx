import * as React from "react";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

import SkillLevel from "../skillLevel/skillLevel";

import armorSkillStyles from "./armorSkillStyles";

type WithStyleProps = WithStyles<
  "armorSkill" | "paper" | "flexCenter" | "skillName"
>;
interface ArmorSkillProps {
  name: string;
  level: number;
}

type AllProps = ArmorSkillProps & WithStyleProps;

const ArmorSkill: React.SFC<ArmorSkillProps> = (props: AllProps) => {
  const { classes } = props;
  return (
    <div className={classes.armorSkill}>
      <Paper className={classes.paper}>
        <div className={classes.flexCenter}>
          <div style={{ width: "20%" }}>svg</div>
          <div style={{ width: "80%", padding: "4px 0px" }}>
            <Typography variant="body2" className={classes.skillName}>
              {props.name}
            </Typography>
            <SkillLevel level={props.level} total={7} />
          </div>
        </div>
      </Paper>
    </div>
  );
};

export default withStyles(armorSkillStyles)(ArmorSkill);
