import * as React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { withStyles, WithStyles } from "@material-ui/core/styles";

import Header from "../common/header/header";
import LeftSideNav from "../common/leftSideNav/leftSideNav";
import RightSideNav from "../common/rightSideNav/rightSideNav";
import Home from "../home/home";
import Decorations from "../decorations/decorations";
import Armor from "../armor/armor";

import AppStyles from "./appStyles";

type WithStylesProps = WithStyles<"app">;
interface Props {}
interface State {}

class App extends React.Component<Props & WithStylesProps, State> {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.app}>
        <CssBaseline />
        <Router>
          <div>
            <LeftSideNav />
            <RightSideNav />
            <Header />
            <Switch>
              <Route exact={true} path="/" component={Home} />
              <Route path="/decorations" component={Decorations} />
              <Route path="/armors" component={Armor} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default withStyles(AppStyles)(App);
