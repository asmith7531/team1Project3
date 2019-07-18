import React, { Component } from "react";

export default class Size extends Component {
  render() {
    return (
      <div>
        <p>
          <label>
            <input type="checkbox" />
            <span>{`Small (<2,000)`}</span>
          </label>
        </p>
        <p>
          <label>
            <input type="checkbox" />
            <span>{`Medium (2,000-15,000)`}</span>
          </label>
        </p>
        <p>
          <label>
            <input type="checkbox" />
            <span>{`Large (>15,000)`}</span>
          </label>
        </p>
      </div>
    );
  }
}
