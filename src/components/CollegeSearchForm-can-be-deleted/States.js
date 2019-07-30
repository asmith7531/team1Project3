import React, { Component } from "react";

export default class States extends Component {
  render() {
    var states = [
      ["Alabama"],
      ["Alaska"],
      ["American Samoa"],
      ["Arizona"],
      ["Arkansas"],
      ["California"],
      ["Colorado"],
      ["Connecticut"],
      ["Delaware"],
      ["District of Columbia"],
      ["Federated States of Micronesia"],
      ["Florida"],
      ["Georgia"],
      ["Guam"],
      ["Hawaii"],
      ["Idaho"],
      ["Illinois"],
      ["Indiana"],
      ["Iowa"],
      ["Kansas"],
      ["Kentucky"],
      ["Louisiana"],
      ["Maine"],
      ["Marshall Islands"],
      ["Maryland"],
      ["Massachusetts"],
      ["Michigan"],
      ["Minnesota"],
      ["Mississippi"],
      ["Missouri"],
      ["Montana"],
      ["Nebraska"],
      ["Nevada"],
      ["New Hampshire"],
      ["New Jersey"],
      ["New Mexico"],
      ["New York"],
      ["North Carolina"],
      ["North Dakota"],
      ["Northern Mariana Islands"],
      ["Ohio"],
      ["Oklahoma"],
      ["Oregon"],
      ["Palau"],
      ["Pennsylvania"],
      ["Puerto Rico"],
      ["Rhode Island"],
      ["South Carolina"],
      ["South Dakota"],
      ["Tennessee"],
      ["Texas"],
      ["Utah"],
      ["Vermont"],
      ["Virgin Island"],
      ["Virginia"],
      ["Washington"],
      ["West Virginia"],
      ["Wisconsin"],
      ["Wyoming"]
    ];
    var listStates = states.map(function(states, idx) {
      return (
        <option key={states} value={states}>
          {states}
        </option>
      );
    });

    return (
      <div>
        <div className="input-field col s12">
          <select multiple>
            <option value="" disabled selected>
              Choose one or more States:
            </option>
            {listStates}
          </select>
          <label>States</label>
        </div>
      </div>
    );
  }
}
