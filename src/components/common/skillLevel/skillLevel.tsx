import * as React from "react";
import { withStyles, WithStyles } from "@material-ui/core/styles";

import skillLevelStyles from "./skillLevelStyles";

type WithStylesProps = WithStyles<"skillLevel" | "filled" | "empty">;
interface SkillLevelProps {
  level: number;
  total: number;
}

type AllProps = SkillLevelProps & WithStylesProps;

const SkillLevel: React.SFC<AllProps> = (props: AllProps) => {
  // function to create array of length props.total
  const createArray = (n: number) => {
    const array: Array<number> = [];
    for (let i = 0; i < n; i++) {
      array.push(i);
    }
    return array;
  };

  const { classes } = props;
  return (
    <div className={classes.skillLevel}>
      {createArray(props.total).map(i => {
        if (i < props.level) {
          return <div key={i} className={classes.filled} />;
        } else {
          return <div key={i} className={classes.empty} />;
        }
      })}
    </div>
  );
};

export default withStyles(skillLevelStyles)(SkillLevel);
