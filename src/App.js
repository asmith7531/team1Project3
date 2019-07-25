import React, { useState } from "react";
import { hot } from "react-hot-loader/root";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./styles/css/materialize.css";
import "./styles/scss/materialize.scss";
import Home from "./screens/Home";
import Login from "./screens/Login";
import SignUp from "./screens/SignUp";
import SchoolSearch from "./screens/SchoolSearch";
import ProtectedRoute from "./components/ProtectedRoute"
import Profile from "./screens/Profile";



function App(props) {

  const [loggedIn, setLoggedIn] = useState(false);
  const [name, setName] = useState("");

  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={({ history }) => <Login
            setLoggedIn={setLoggedIn}
            setName={setName}
            history={history}
          />}
          />
          <Route path="/signup" component={SignUp} />
          <Route path="/schoolsearch" component={SchoolSearch} />
          <ProtectedRoute path="/profile" loggedIn={loggedIn} name={name} component={() => <Profile
            setLoggedIn={setLoggedIn}
          />} />
        </Switch>
      </Router>
    </>
  )
}
;

export default hot(App);
