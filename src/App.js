import { MuiThemeProvider } from "@material-ui/core";
import { theme } from "./themes/theme";
import Explore from "./pages/Explore";
//import "./App.css";

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <Explore />
    </MuiThemeProvider>
  );
}

export default App;
