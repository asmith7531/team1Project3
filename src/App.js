import React, { useState, useEffect } from "react";
import { hot } from "react-hot-loader/root";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./styles/css/materialize.css";
import "./styles/scss/materialize.scss";
import Home from "./screens/Home";
import Login from "./screens/Login";
import SignUp from "./screens/SignUp";
import SchoolSearch from "./screens/SchoolSearch";
import Protected from "./screens/Protected";
import API from "./Utility/API";



function App(props) {


  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");


  const handleSubmit = (event) => {
    event.preventDefault();
    if (username && password) {
      API.login(
        {
        username,
        password
      }
      );
    } else {
      alert("Please input required fields");
    }
  }

  const handleUserChange = e => setUsername(e.target.value);
  const handlePwChange = e => setPassword(e.target.value);


  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={() => <Login
            handleSubmit={handleSubmit}
            userChange={handleUserChange}
            pwChange={handlePwChange}
            username={username}
            password={password}
            />}
            />
          <Route path="/signup" component={SignUp} />
          <Route path="/schoolsearch" component={SchoolSearch} />
          <Route path="/user" component={Protected} />
        </Switch>
      </Router>
    </>
  )
}
;

export default hot(App);
