import React, { Component } from "react";
export default class Carousel extends Component {
  render() {
    return (
      <>
        <div className="section row center">
          <div className="carousel carousel-slider">
            <div className="carousel-fixed-item center col s12 m10 l8" />
            <div className="carousel-item amber white-text" href="#one!">
              <h1>Welcome to ZigZag</h1>
              <h4 className="white-text">
                We're here to help guide you towards a productive and fulfilling
                future.
              </h4>
            </div>
            <div className="carousel-item indigo white-text" href="#two!">
              <h1>Try our Career Survey</h1>
              <h4 className="white-text">
                Many of us don't know what wer're doing AND THATS OK. But maybe
                our survey can help you start your journey...
              </h4>
            </div>
            <div
              className="carousel-item amber darken-4 white-text"
              href="#three!"
            >
              <h1>Find the perfect school or job for you</h1>
              <h4 className="white-text">
                Already have a grasp on what you want to do? Our site pulls from
                a variety of databases to help you find the next steps that are
                best for you
              </h4>
            </div>
            <div className="carousel-item blue white-text" href="#four!">
              <h1>Make a profile!</h1>
              <h4 className="white-text">
                Taking a new route in life can be disorienting. Make a profile
                on ZigZag to store all of the most important information you
                find during your journey.
              </h4>
            </div>
          </div>
        </div>
      </>
    );
  }
}
