import React, { Component } from "react";

export default class Name extends Component {
  render() {
    return (
      <div>
        <div class="input-field col s6">
          <input id="schoolName" type="text" class="validate" />
          <label for="school_name">Name</label>
        </div>
      </div>
    );
  }
}
