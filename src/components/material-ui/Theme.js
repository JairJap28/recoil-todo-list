import createMuiTheme from "@material-ui/core/styles/createMuiTheme";

const theme = createMuiTheme({
  palette: {
    primary: {
      contrastText: "#fff",
      main: "#0d7bdb"
    }
  },
  border: {
    title: {
      main: "#f7d21b"
    }
  }
});

export default theme;
