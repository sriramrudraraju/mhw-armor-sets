import * as React from "react";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import { observer, inject } from "mobx-react";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Typography from "@material-ui/core/Typography";

import armorListStyles from "./armorListStyles";

import ApplicationStoreType from "../../../stores/applicationStore";

type WithStylesProps = WithStyles<
  "tableBodyText" | "iconSize" | "typography" | "center"
>;
interface MobxProps {
  applicationStore: ApplicationStoreType;
}
interface ArmorListProps {}
interface ArmorListState {}
type AllProps = ArmorListProps &
  ArmorListWithMobxProps &
  MobxProps &
  WithStylesProps;

@observer
class ArmorList extends React.Component<AllProps, ArmorListState> {
  // TODO: armor sets data from api
  // TODO: filter the whole set
  // TODO: then display the sets
  constructor(props: AllProps) {
    super(props);
  }

  // on clicking individual parts only
  // merging partInfo and bonus in the onClick initialization, as wee need those bonus stats
  clickArmorPart(partInfo: any, event: any) {
    // set part info
    this.props.applicationStore.setPartInfo(partInfo);
    // set the rightSideNav mode to armorInfo
    this.props.applicationStore.setRightSideNavMode("armorInfo");
    // open right side drawer
    this.props.applicationStore.toggleRightSideDrawer(true);
    // stop event propagation so that 2 click events wont be trigged on clicking armor icon
    event.stopPropagation();
  }

  render() {
    const { classes, armorSets } = this.props;
    return (
      <div>
        <List>
          {armorSets.map(value => (
            <ListItem key={value.name} button={true} divider={true}>
              <div className={classes.center}>
                <Typography variant="body2" className={classes.typography}>
                  {value.name}
                </Typography>
                <div>
                  {value.pieces.map(piece => (
                    <IconButton
                      key={piece.name}
                      aria-label="Delete"
                      className={classes.iconSize}
                      onClick={this.clickArmorPart.bind(this, {
                        ...piece,
                        bonus: { ...value.bonus }
                      })}
                    >
                      <DeleteIcon />
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
interface ArmorListWithMobxProps {
  armorSets: Array<{ name: string; pieces: Array<any>; bonus?: object }>;
}

const ArmorListWithMobx: React.SFC<ArmorListWithMobxProps> = inject(
  "applicationStore"
)(observer((props: AllProps) => <ArmorList {...props} />));
export default withStyles(armorListStyles)(ArmorListWithMobx);
