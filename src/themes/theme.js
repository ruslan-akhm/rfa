import { createMuiTheme } from "@material-ui/core";

export const theme = createMuiTheme({
  typography: {
    fontFamily: '"Roboto"',
    fontSize: 18,
    button: {
      textTransform: "none",
    },
  },
  palette: {
    primary: { main: "#0346F2" },
    secondary: { main: "#F2F5FE" },
    background: { main: "#EBEBF9" },
    lightGray: { main: "#E7E9F0" },
    solidGray: { main: "#11cb5f" },
    green: { main: "#00D555" },
  },
});

//"#8E94A7"
