import * as React from "react";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import { observer, inject } from "mobx-react";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Typography from "@material-ui/core/Typography";

import ArmorWepIcons from "../armor-wep-icons/armor-wep-icons";

import armorListStyles from "./armorListStyles";

import ApplicationStoreType from "../../../stores/applicationStore";
import {
  ArmorSetType,
  ArmorPieceType,
  ArmorType
} from "../../../types/armorTypes";

type WithStylesProps = WithStyles<
  "tableBodyText" | "iconSize" | "typography" | "center"
>;
interface MobxProps {
  applicationStore: ApplicationStoreType;
}
interface ArmorListProps {}
type AllProps = ArmorListProps &
  ArmorListWithoutMobxProps &
  MobxProps &
  WithStylesProps;

@observer
class ArmorList extends React.Component<AllProps, never> {
  // TODO: armor sets data from api
  // TODO: filter the whole set
  // TODO: then display the sets
  constructor(props: AllProps) {
    super(props);
  }

  // on clicking individual parts only
  // merging partInfo and bonus in the onClick initialization, as wee need those bonus stats
  clickArmorPart(partInfo: ArmorType, event: any) {
    // set part info
    this.props.applicationStore.setPartInfo(partInfo);
    // set the rightSideNav mode to armorInfo
    this.props.applicationStore.setRightSideNavMode("armorInfo");
    // open right side drawer
    this.props.applicationStore.toggleRightSideDrawer(true);
    // stop event propagation so that 2 click events wont be trigged on clicking armor icon
    event.stopPropagation();
  }

  getArmorIcon(name: ArmorPieceType) {
    return <ArmorWepIcons icon={name} />;
  }

  render() {
    const { classes, armorSets } = this.props;
    return (
      <div>
        <List>
          {armorSets.map((value: ArmorSetType) => (
            <ListItem key={value.name} button={true} divider={true}>
              <div className={classes.center}>
                <Typography variant="body2" className={classes.typography}>
                  {value.name}
                </Typography>
                <div>
                  {value.pieces.map((piece: ArmorType) => (
                    <IconButton
                      key={piece.name}
                      aria-label="Delete"
                      className={classes.iconSize}
                      onClick={this.clickArmorPart.bind(this, {
                        ...piece
                      })}
                    >
                      {this.getArmorIcon(piece.type)}
                    </IconButton>
                  ))}
                </div>
              </div>
            </ListItem>
          ))}
        </List>
      </div>
    );
  }
}

// props that are passed to ArmorListWithMobx
interface ArmorListWithoutMobxProps {
  armorSets: Array<ArmorSetType>;
}

const ArmorListWithMobx: React.SFC<ArmorListWithoutMobxProps> = inject(
  "applicationStore"
)(observer((props: AllProps) => <ArmorList {...props} />));

export default withStyles(armorListStyles)(ArmorListWithMobx);
