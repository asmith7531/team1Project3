import React from 'react';
import { hot } from 'react-hot-loader/root';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './screens/Home';


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
