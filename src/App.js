import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { MuiThemeProvider } from "@material-ui/core";
import { theme } from "./themes/theme";
import Explore from "./pages/Explore";
import Clients from "./pages/Clients";
import Blog from "./pages/Blog";
import NavbarBox from "./components/explore/NavbarBox";
import { useEffect } from "react";
//import "./App.css";

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <BrowserRouter>
        <NavbarBox />

        <Switch>
          <Route exact path="/">
            <Redirect to="/explore" />
          </Route>
          <Route path="/explore" component={Explore} />
          <Route path="/clients" component={Clients} />
          <Route path="/blog" component={Blog} />
          {/* <Explore /> */}
        </Switch>
      </BrowserRouter>
    </MuiThemeProvider>
  );
}

export default App;
