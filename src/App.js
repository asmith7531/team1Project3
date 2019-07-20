import React from "react";
import { hot } from "react-hot-loader/root";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./styles/css/materialize.css";
import "./styles/scss/materialize.scss";
import Home from "./screens/Home";
import Login from "./screens/Login";
import SignUp from "./screens/SignUp";
import SchoolSearch from "./screens/SchoolSearch";
import CareerSearch from "./screens/CareerSearch";
import Survey from "./screens/Survey";

const App = () => (
  <>
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route path="/schoolsearch" component={SchoolSearch} />
        <Route path="/careersearch" component={CareerSearch} />
        <Route path="/survey" component={Survey}/>
      </Switch>
    </Router>
  </>
);

export default hot(App);
