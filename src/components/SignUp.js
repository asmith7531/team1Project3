import React, { Component } from "react";

export default class SignUp extends Component {
  render() {
    return (
      <div>
        <div className="container ">
          <div className="row valign-wrapper">
            <form className="col s12">
              <h3>Sign Up</h3>

              <div className="row">
                <div className="input-field col s6">
                  <input
                    id="first_name"
                    type="text"
                    className="validate"
                    data-length="20"
                  />
                  <label for="first_name">First Name</label>
                </div>
                <div className="input-field col s6">
                  <input
                    id="last_name"
                    type="text"
                    className="validate"
                    data-length="20"
                  />
                  <label for="last_name">Last Name</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <input
                    id="email"
                    type="email"
                    className="validate"
                    data-length="50"
                  />
                  <label for="email">Email</label>
                </div>
              </div>
              <div className="row ">
                <div className="input-field offset-s3 col s6">
                  <input
                    id="password"
                    type="password"
                    className="validate   "
                    data-length="15"
                  />
                  <label for="password">Password</label>
                </div>
              </div>
              <div className="row ">
                <div className="input-field offset-s3 col s6">
                  <input
                    id="confirmPassword"
                    type="password"
                    className="validate"
                    data-length="15"
                  />
                  <label for="confirmPassword">Confirm Password</label>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
