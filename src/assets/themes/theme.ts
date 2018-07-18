import red from "@material-ui/core/colors/red";

export default {
  palette: {
    background: {
      default: "#fafafa",
      paper: "#fff"
    },
    contrastThreshold: 3,
    error: red,
    primary: {
      contrastText: "#fff",
      dark: "#000000",
      light: "#484848",
      main: "#212121"
    },
    secondary: {
      contrastText: "#fff",
      dark: "#870000",
      light: "#f9683a",
      main: "#bf360c"
    },
    spacing: {
      unit: 8
    },
    text: {
      disabled: "rgba(255, 255, 255, 0.38)",
      hint: "rgba(255, 255, 255, 0.38)",
      primary: "rgba(255, 255, 255, 0.87)",
      secondary: "rgba(255, 255, 255, 0.54)"
    }
  },
  tonalOffset: 0.2,
  type: "light",
  typography: {
    fontFamily: "Roboto",
    fontSize: "1em"
  }
};
