import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class Login extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <form className="col center s12 m5 card-panel primary">
            <div className="row">
              <div className="input-field col s12">
                <input id="userName" type="text" className="validate" />
                <label for="userName">User Name</label>
              </div>
              <div className="input-field col s12">
                <input id="password" type="password" className="validate" />
                <label for="password">Password</label>
              </div>
              <a>
                <Link to="./SignUp">Or Create an Acount</Link>
              </a>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
