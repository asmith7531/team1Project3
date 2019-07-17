import React, { Component } from "react";

export default class SignUp extends Component {
  render() {
    return (
      <div className="card-panel">
        <div className="row">
          <form className="col s12">
            <div className="row">
              <div className="input-field col s6">
                <input id="input_text" type="text" data-length="10" />
                <label for="input_text"> First Name</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s6">
                <input id="input_text" type="text" data-length="10" />
                <label for="input_text"> Last Name</label>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
