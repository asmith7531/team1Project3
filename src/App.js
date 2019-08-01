import React, { useState, useEffect } from "react";
import { hot } from "react-hot-loader/root";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./styles/css/materialize.css";
import "./styles/scss/materialize.scss";
import Home from "./screens/Home/Home";
import Login from "./screens/Login";
import SignUp from "./screens/SignUp";
import SchoolSearch from "./screens/SchoolSearch";
import CareerSearch from "./screens/CareerSearch";
import Survey from "./screens/Survey/Survey";
import Profile from "./screens/Profile/Profile";
import ProtectedRoute from "./components/ProtectedRoute"


function App(props) {
  const [id, setId] = useState("")
  const [loggedIn, setLoggedIn] = useState(false);
  const [name, setName] = useState("");
  const [userSince, setUserSince] = useState("");
  const [articles, setArticles] = useState([]);

  console.log(articles);
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={({ history }) => <Login
            setLoggedIn={setLoggedIn}
            setUserSince={setUserSince}
            setName={setName}
            setId={setId}
            history={history}
          />}
          />
          <Route path="/signup" component={SignUp} />
          <Route path="/schoolsearch" component={SchoolSearch} />
          <Route path="/careersearch" component={CareerSearch} />
          <Route path="/survey" component={Survey} />
          <ProtectedRoute path="/profile" loggedIn={loggedIn} name={name} component={() => <Profile
            setLoggedIn={setLoggedIn}
            userSince={userSince}
            setArticles={setArticles}
            name={name}
            id={id}
            articles={articles}
          />} />
        </Switch>
      </Router>
    </>
  )
};

export default hot(App);