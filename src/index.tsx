import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import { Provider } from "mobx-react";
import * as React from "react";
import * as ReactDOM from "react-dom";

import App from "./components/app/app";

import ApplicationStore, {
  ApplicationStoreType
} from "./stores/applicationStore";
import SelectedArmorSetStore, {
  SelectedArmorSetStoreType
} from "./stores/selectedArmorSetsStore";

import theme from "./assets/themes/theme";
import "./index.css";

const applicationStore: ApplicationStoreType = new ApplicationStore();
const selectedArmorSetStore: SelectedArmorSetStoreType = new SelectedArmorSetStore();

ReactDOM.render(
  <MuiThemeProvider theme={createMuiTheme(theme)}>
    <Provider
      applicationStore={applicationStore}
      selectedArmorSetStore={selectedArmorSetStore}
    >
      <App />
    </Provider>
  </MuiThemeProvider>,
  document.getElementById("root") as HTMLElement
);
