import React from 'react';
import { hot } from 'react-hot-loader/root';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './screens/Home';
import "./styles/css/materialize.css"
import "./styles/scss/materialize.scss"

const App = () => (
    <>
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
            </Switch>
        </Router>
    </>
)

export default hot(App);
