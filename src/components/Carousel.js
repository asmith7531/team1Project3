import React, { Component } from "react";
import Panel1 from "./FavCareer";
export default class Carousel extends Component {
  render() {
    return (
      <>
        <div className="section row center">
          <div className="carousel carousel-slider">
            <div className="carousel-fixed-item center col s12 m10 l8">
              {/* <a className="btn waves-effect white grey-text darken-text-2">
              Back
            </a> */}
            </div>
            <div className="carousel-item amber white-text" href="#one!">
              <Panel1 />
            </div>
            <div className="carousel-item indigo white-text" href="#two!">
              <h2>Second Panel</h2>
              <p className="white-text">This is your second panel</p>
            </div>
            <div
              className="carousel-item amber darken-4 white-text"
              href="#three!"
            >
              <h2>Third Panel</h2>
              <p className="white-text">This is your third panel</p>
            </div>
            <div className="carousel-item blue white-text" href="#four!">
              <h2>Fourth Panel</h2>
              <p className="white-text">This is your fourth panel</p>
            </div>
          </div>
        </div>
      </>
    );
  }
}
