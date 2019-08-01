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
              <h2>1. Welcome to ZigZag. This is your first panel</h2>
              <p>Here</p>
            </div>
            <div className="carousel-item indigo white-text" href="#two!">
              <h2>2. Survey, This is your second panel</h2>
              <p className="white-text">Many of us don't knbow what wer're doing AND THATS OK. But maybe oure survey can help you out. </p>
            </div>
            <div
              className="carousel-item amber darken-4 white-text"
              href="#three!">
              <h2>3. CareerSearch, This is your third panel</h2>
              <p className="white-text">Already have a grasp on what you want to do? Our site pulls from a variety of databases to help you find the next steps that are best for you</p>
            </div>
            <div className="carousel-item blue white-text" href="#four!">
              <h2>4. Make a profile! This is your fourth panel</h2>
              <p className="white-text">Taking a new route in life can be disorienting. Make a profile on ZigZag to store all of the most important information you find during your journey.</p>
            </div>
          </div>
        </div>
      </>
    );
  }
}
