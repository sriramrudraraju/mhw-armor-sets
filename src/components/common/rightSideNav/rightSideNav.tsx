import * as React from "react";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import { observer, inject } from "mobx-react";
import Drawer from "@material-ui/core/Drawer";

import ArmorInfo from "../armorInfo/armorInfo";
import BuiltSetSummary from "../builtSetSummary/builtSetSummary";
import DecorationInfo from "../decorationinfo/decorationInfo";

import rightSideNavStyles from "./rightSideNavStyles";

import { ApplicationStoreType } from "../../../stores/applicationStore";

type WithStyleProps = WithStyles<"rightDrawer">;
interface MobxProps {
  applicationStore: ApplicationStoreType;
}
interface RightSideNavProps {}
interface RightSideNavState {}

type AllProps = RightSideNavProps &
  RightSideNavWithMobxProps &
  WithStyleProps &
  MobxProps;

@observer
class RightSideNav extends React.Component<AllProps, RightSideNavState> {
  constructor(props: AllProps) {
    super(props);
    this.toggleDrawer = this.toggleDrawer.bind(this);
  }

  toggleDrawer() {
    // close the right side drawer using mobx
    this.props.applicationStore.toggleRightSideDrawer(false);
    // reset part info
    this.props.applicationStore.setItemId(0);
  }

  render() {
    const { classes } = this.props;
    const {
      rightSideNavMode,
      partInfo,
      decorationInfo
    } = this.props.applicationStore;

    return (
      <div>
        <Drawer
          anchor="right"
          open={this.props.applicationStore.openRightSideDrawer}
          onClose={this.toggleDrawer}
          classes={{ paperAnchorLeft: classes.rightDrawer }}
        >
          {rightSideNavMode === "builtSetSummary" ? <BuiltSetSummary /> : null}
          {rightSideNavMode === "armorInfo" ? (
            <ArmorInfo partInfo={partInfo} />
          ) : null}
          {rightSideNavMode === "decorationInfo" ? (
            <DecorationInfo decorationInfo={decorationInfo} />
          ) : null}
        </Drawer>
      </div>
    );
  }
}

interface RightSideNavWithMobxProps {}

const RightSideNavWithMobx: React.SFC<RightSideNavWithMobxProps> = inject(
  "applicationStore"
)(observer((props: AllProps) => <RightSideNav {...props} />));

export default withStyles(rightSideNavStyles)(RightSideNavWithMobx);
