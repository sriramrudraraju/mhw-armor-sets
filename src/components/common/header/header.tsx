import * as React from "react";
import { observer, inject } from "mobx-react";
import { withRouter, RouteComponentProps } from "react-router";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import DeleteIcon from "@material-ui/icons/Delete";

import { ApplicationStoreType } from "../../../stores/applicationStore";

interface MobxProps {
  applicationStore: ApplicationStoreType;
}
interface HeaderProps {}
interface State {}
type AllProps = HeaderProps &
  HeaderWithMobxProps &
  MobxProps &
  RouteComponentProps<any, any>;

class Header extends React.Component<AllProps, State> {
  constructor(props: AllProps) {
    super(props);
    this.openLeftSideNav = this.openLeftSideNav.bind(this);

    this.openRightSideNav = this.openRightSideNav.bind(this);
    this.title = this.title.bind(this);
  }

  openLeftSideNav() {
    // open the left side nav
    this.props.applicationStore.toggleLeftSideNav(true);
  }

  openRightSideNav() {
    // set openSideNav mode to builtSetSummary
    this.props.applicationStore.setRightSideNavMode("builtSetSummary");
    // open right side drawer
    this.props.applicationStore.toggleRightSideDrawer(true);
  }

  title() {
    const route = this.props.location.pathname;
    let title = "MHW";
    switch (route) {
      case "/": {
        title = "Build";
        break;
      }
      case "/armors": {
        title = "Armors";
        break;
      }
      case "/decorations": {
        title = "Decorations";
        break;
      }
      default: {
        title = "MHW";
        break;
      }
    }
    return title;
  }

  render() {
    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <span onClick={this.openLeftSideNav}>
              <IconButton color="inherit" aria-label="Menu">
                <MenuIcon />
              </IconButton>
            </span>
            <Typography variant="title" color="inherit">
              {this.title()}
            </Typography>

            <div style={{ marginLeft: "auto", backgroundColor: "gray" }}>
              <IconButton aria-label="Delete" onClick={this.openRightSideNav}>
                <DeleteIcon />
              </IconButton>
              <IconButton aria-label="Delete" disabled={true} color="primary">
                <DeleteIcon />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

interface HeaderWithMobxProps {}
const HeaderWithMobx: React.SFC<
  HeaderWithMobxProps & RouteComponentProps<any, any>
> = inject("applicationStore")(observer(props => <Header {...props} />));

export default withRouter(HeaderWithMobx);
