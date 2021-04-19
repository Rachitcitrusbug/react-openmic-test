import React, { Suspense, lazy } from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";

const Main = lazy(() => import("./components/Main"));
const User = lazy(() => import("./components/User"));

const App = () => (
  <Router>
    <Suspense fallback="Loading...">
      <Route exact path="/" component={Main} />
      <Route exact path="/user" component={User} />
    </Suspense>
  </Router>
);

export default App;
