import React, { lazy, Suspense, useState, useEffect } from "react";
import { Route, Switch, Router } from "react-router-dom";
import { createBrowserHistory } from "history";

import Progress from "./components/Progress";
import Header from "./components/Header";

const MarketingLazy = lazy(() => import("./components/MarketingApp"));
const AuthLazy = lazy(() => import("./components/AuthApp"));
const DashboardLazy = lazy(() => import("./components/DashBoardApp"));

const history = createBrowserHistory();
const App = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    if (isSignedIn) {
      history.push("/dashboard");
    } else {
      history.push("/");
    }
  }, [isSignedIn]);

  return (
    <Router history={history}>
      <div>
        <Header onSignOut={() => setIsSignedIn(false)} signedIn={isSignedIn} />
        <Suspense fallback={<Progress />}>
          <Switch>
            <Route path="/auth">
              <AuthLazy onSignIn={() => setIsSignedIn(true)} />
            </Route>
            <Route path="/dashboard" component={DashboardLazy} />
            <Route path="/" component={MarketingLazy} />
          </Switch>
        </Suspense>
      </div>
    </Router>
  );
};

export default App;
