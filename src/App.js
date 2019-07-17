import React from "react";
import { hot } from "react-hot-loader/root";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./screens/Home";
import Login from "./screens/Login";
import SignUp from "./screens/SignUp";
import "./styles/css/materialize.css";
import "./styles/scss/materialize.scss";

const App = () => (
  <>
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
      </Switch>
    </Router>
  </>
);

export default hot(App);
