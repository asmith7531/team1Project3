import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Login extends Component {
  render() {
    return (
      <>
        <div className="row center">
          <h1 className="">ZigZag</h1>
        </div>
        <div className="container">
          <div className="row s6 valign-wrapper offset-s3">
            <form className="col center s6 offset-s3 card-panel ">
              <h3>Sign In</h3>
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
                  <Link to="./SignUp">Or Create A New Acount</Link>
                </a>
              </div>
            </form>
          </div>
        </div>
      </>
    );
  }
}
