import * as React from "react";
import Button from "@material-ui/core/Button";
import { withStyles, WithStyles } from "@material-ui/core/styles";

import armorEquipStyles from "./armorEquipStyles";

type WithStylesProps = WithStyles<
  "armorEquip" | "armorButton" | "decorationButton"
>;
interface ArmorEquipProps {}
type AllProps = ArmorEquipProps & WithStylesProps;

const ArmorEquip: React.SFC<AllProps> = (props: AllProps) => {
  const { classes } = props;
  return (
    <div className={classes.armorEquip}>
      <div>
        <Button variant="raised" className={classes.armorButton}>
          Armor
        </Button>
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Button variant="raised" className={classes.decorationButton}>
          Deco
        </Button>
        <Button variant="raised" className={classes.decorationButton}>
          deco
        </Button>
        <Button variant="raised" className={classes.decorationButton}>
          deco
        </Button>
      </div>
    </div>
  );
};

export default withStyles(armorEquipStyles)(ArmorEquip);
