import * as React from "react";
import { observer, inject } from "mobx-react";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/Inbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import { withRouter, RouteComponentProps } from "react-router";
import { withStyles, WithStyles } from "@material-ui/core/styles";

import ApplicationStoreType from "../../../stores/applicationStore";

import leftSideNavStyles from "./leftSideNavStyles";

// props injected by material ui
type WithStylesProps = WithStyles<"listItem" | "leftDrawer" | "listIcon">;
// props injected by mobx
interface MobxProps {
  applicationStore: ApplicationStoreType;
}
// props passed to this component from parent
interface LeftSideNavProps {}
interface LeftSideNavState {}
// All props that are needed for this component which passed by parent or HOC injection
type AllProps = LeftSideNavProps &
  LeftSideNavWithMobxProps &
  MobxProps &
  RouteComponentProps<any, any> &
  WithStylesProps;

@observer
class LeftSideNav extends React.Component<AllProps, LeftSideNavState> {
  constructor(props: AllProps) {
    super(props);
    this.toggleDrawer = this.toggleDrawer.bind(this);
  }

  toggleDrawer() {
    // close the left side nav using mobx
    this.props.applicationStore.toggleLeftSideNav(false);
  }

  clickNavItem(value: string) {
    // go to route
    this.props.history.push(value);
    // close side nave
    this.toggleDrawer();
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Drawer
          open={this.props.applicationStore.openLeftSideNav}
          onClose={this.toggleDrawer}
          classes={{ paperAnchorLeft: classes.leftDrawer }}
        >
          <List component="nav">
            <span onClick={this.clickNavItem.bind(this, "/")}>
              <ListItem button={true} className={classes.listItem}>
                <ListItemIcon>
                  <InboxIcon className={classes.listIcon} />
                </ListItemIcon>
                <ListItemText primary="Home" />
              </ListItem>
            </span>
            <span onClick={this.clickNavItem.bind(this, "/decorations")}>
              <ListItem button={true}>
                <ListItemIcon>
                  <DraftsIcon className={classes.listIcon} />
                </ListItemIcon>
                <ListItemText primary="Decorations" />
              </ListItem>
            </span>
            <span onClick={this.clickNavItem.bind(this, "/armors")}>
              <ListItem button={true}>
                <ListItemIcon>
                  <DraftsIcon className={classes.listIcon} />
                </ListItemIcon>
                <ListItemText primary="Armors" />
              </ListItem>
            </span>
          </List>
        </Drawer>
      </div>
    );
  }
}

// props that are passed to LeftSideNavWithMobx
interface LeftSideNavWithMobxProps {}

const LeftSideNavWithMobx: React.SFC<
  LeftSideNavWithMobxProps & RouteComponentProps<any, any>
> = inject("applicationStore")(
  observer((props: AllProps) => <LeftSideNav {...props} />)
);

// ignore the typescript error. something wrong in withStyles types.
export default withRouter(withStyles(leftSideNavStyles)(LeftSideNavWithMobx));

/**
 * Understanding above typescript typings
 *
 * lets start with complier perspective
 * withRouter(withStyles(leftSideNavStyles)(LeftSideNavWithMobx)) is exposed externally.. so this will be executed.
 * the first thing that will start executing will be LeftSideNavWithMobx
 *
 *
 * LeftSideNavMobx Hoc:
 * its HOC that injects mobx props to <LeftSideNav> so it should have MobxProps
 * and here its adding its props to baseComponent using {...props}. so <LeftSideNav> should also have LeftSideNavWithMobxProps.
 *
 * since <LeftSideNav> is using this.props.match which will be injected by withRouter in later steps anyway. but at this level
 * assume <LeftSideNav> should get this.props.match externally and it doesnt have to be from withRouter. As we know its because of WithRouter we use RouteComponent<any, any>
 * so LeftSideNavWithMobx will be of type SFC<LeftSideNavWithMobxProps & RouteComponent<any, Any>>
 *
 * inject('applicationStore') is the HOC part that injects mobx props
 * observer() is a function that returns element
 *
 *
 * withStyles() Hoc:
 * injects WithStylesProps to <LeftSideNav> so it should have WithStyleProps
 *
 *
 * withRouter() Hoc:
 * injects RouteComponent<any, any> props to <LeftSideNav>
 *
 *
 * So finally <LeftSideNav> will have LeftSideNavProps & LeftSideNavWithMobxProps & MobxProps & RouteComponentProps<any, any> & WithStylesProps as its props.
 */
