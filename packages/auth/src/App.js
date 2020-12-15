import React from "react";
import { Switch, Route, Router } from "react-router-dom";
import { StylesProvider } from "@material-ui/core/styles";
import SignIn from "./components/Signin";
import SignUp from "./components/Signup";

const App = ({ history, onAuthChange }) => {
  return (
    <div>
      <StylesProvider>
        <Router history={history}>
          <Switch>
            <Route path="/auth/signin">
              <SignIn onAuthChange={onAuthChange} />
            </Route>
            <Route path="/auth/signup">
              <SignUp onAuthChange={onAuthChange} />
            </Route>
          </Switch>
        </Router>
      </StylesProvider>
    </div>
  );
};

export default App;
