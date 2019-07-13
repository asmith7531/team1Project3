import React from "react";
import Landing from "./components/pages/Landing";
import "./App.css";
import "semantic-ui-css/semantic.min.css";
import Login from "./components/pages/Login";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Route exact path="/" component={Landing} />
      <Route exact path="/login" component={Login} />
    </Router>
  );
}

export default App;