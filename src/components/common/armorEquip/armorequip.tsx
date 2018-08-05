import * as React from "react";
import Button from "@material-ui/core/Button";
import { withStyles, WithStyles } from "@material-ui/core/styles";

import armorEquipStyles from "./armorEquipStyles";

type WithStylesProps = WithStyles<
  "armorEquip" | "armorButton" | "decorationButton"
>;
interface ArmorEquipProps {
  selectedPiece: any;
  clickedInfo: (param: any) => void;
}
type AllProps = ArmorEquipProps & WithStylesProps;

const ArmorEquip: React.SFC<AllProps> = (props: AllProps) => {
  const { classes, selectedPiece } = props;
  console.log("selected piece", selectedPiece);
  return (
    <div className={classes.armorEquip}>
      <Button
        variant="raised"
        className={classes.armorButton}
        onClick={props.clickedInfo.bind(props, selectedPiece)}
      >
        {selectedPiece.name}
      </Button>
      {selectedPiece.slots && selectedPiece.slots.length > 0 ? (
        <div style={{ display: "flex", flexDirection: "column" }}>
          {selectedPiece.slots.map((slot: any, i: number) => {
            return (
              <Button
                key={i}
                variant="raised"
                className={classes.decorationButton}
              >
                Deco
              </Button>
            );
          })}
        </div>
      ) : null}
    </div>
  );
};

export default withStyles(armorEquipStyles)(ArmorEquip);
