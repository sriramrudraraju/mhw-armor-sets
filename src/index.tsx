import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import { Provider } from "mobx-react";
import * as React from "react";
import * as ReactDOM from "react-dom";

import App from "./components/app/app";

import ApplicationStore, {
  ApplicationStoreType
} from "./stores/applicationStore";

import theme from "./assets/themes/theme";
import "./index.css";

const applicationStore: ApplicationStoreType = new ApplicationStore();

ReactDOM.render(
  <MuiThemeProvider theme={createMuiTheme(theme)}>
    <Provider applicationStore={applicationStore}>
      <App />
    </Provider>
  </MuiThemeProvider>,
  document.getElementById("root") as HTMLElement
);
