import { useReducer } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { MuiThemeProvider } from "@material-ui/core";
import { theme } from "./themes/theme";
import Explore from "./pages/Explore";
import Clients from "./pages/Clients";
import Blog from "./pages/Blog";
import NavbarBox from "./components/NavbarBox";

import { UserStateContext, UserDispatchContext } from "./context/Context";
import { initialState, UserReducer } from "./reducers/UserReducer";

function App() {
  const [state, dispatch] = useReducer(UserReducer, initialState);

  return (
    <MuiThemeProvider theme={theme}>
      <BrowserRouter>
        <UserStateContext.Provider value={state}>
          <UserDispatchContext.Provider value={dispatch}>
            <NavbarBox />
            <Switch>
              <Route exact path="/">
                <Redirect to="/explore" />
              </Route>
              <Route path="/explore" component={Explore} />
              <Route path="/clients" component={Clients} />
              <Route path="/blog" component={Blog} />
            </Switch>
          </UserDispatchContext.Provider>
        </UserStateContext.Provider>
      </BrowserRouter>
    </MuiThemeProvider>
  );
}

export default App;
