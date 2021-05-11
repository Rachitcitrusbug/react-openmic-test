import React, { Suspense, lazy } from "react";
import { Provider } from "react-redux";
import { Route, BrowserRouter as Router } from "react-router-dom";
import store from "./redux/store";

const Main = lazy(() => import("./components/Main"));
const User = lazy(() => import("./components/User"));
const Post = lazy(() => import("./components/PostMic/GuidePostMic"));
const PostStep1 = lazy(() => import("./components/PostMic/StepOne"));
const PostStep2 = lazy(() => import("./components/PostMic/StepTwo"));
const PostStep3 = lazy(() => import("./components/PostMic/StepThree"));
const PostStep4 = lazy(() => import("./components/PostMic/StepFour"));
const PostStep5 = lazy(() => import("./components/PostMic/StepFive"));
const PostStep6 = lazy(() => import("./components/PostMic/StepSix"));

const App = () => (
  <Provider store={store}>
    <Router>
      <Suspense fallback="Loading...">
        <Route exact path="/" component={Main} />
        <Route exact path="/user" component={User} />
        <Route exact path="/post" component={Post} />
        <Route exact path="/post/1" component={PostStep1} />
        <Route exact path="/post/2" component={PostStep2} />
        <Route exact path="/post/3" component={PostStep3} />
        <Route exact path="/post/4" component={PostStep4} />
        <Route exact path="/post/5" component={PostStep5} />
        <Route exact path="/post/6" component={PostStep6} />
      </Suspense>
    </Router>
  </Provider>
);

export default App;
