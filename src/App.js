//import logo from './logo.svg';
import { MuiThemeProvider } from "@material-ui/core";
import { theme } from "./themes/theme";
import Mainpage from "./components/mainpage/Mainpage";
import "./App.css";

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <Mainpage />
    </MuiThemeProvider>
  );
}

export default App;
