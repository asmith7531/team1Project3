import React, { Component } from "react";
import panelone from "../../../dist/geometricPanel.jpg";
import paneltwo from "../../../dist/graduationPanel.jpg"
import panelthree from "../../../dist/workplacePanel.jpg";
import panelfour from "../../../dist/homeofficePanel.jpg";


export default class Carousel extends Component {
  render() {
    return (
      <>
        <div className="section row center">

          <div className="slider">
            <ul className="slides">
              <li>
                <img src={panelone}/> 
                <div className="caption center-align">
                  <h3>Welcome to ZigZag</h3>
                  <h5 className="light grey-text text-lighten-3">We're here to help guide you towards a productive and fulfilling future.</h5>
                </div>
              </li>
              <li>
                <img src={paneltwo}/> 
                <div className="caption left-align">
                  <h3>Try our Career Survey</h3>
                  <h5 className="light grey-text text-lighten-3">Many of us don't know what we want out of our career. But maybe our survey can help you lead you in teh right direction. </h5>
                </div>
              </li>
              <li>
                <img src={panelthree}/> 
                <div className="caption right-align">
                  <h3>Find the perfect School or Job for you</h3>
                  <h5 className="light grey-text text-lighten-3">Do you already have a path in mind? Our site pulls from a variety of databases to help you take the best next steps</h5>
                </div>
              </li>
              <li>
                <img src={panelfour}/> 
                <div className="caption center-align">
                  <h3>Make a profile!!</h3>
                  <h5 className="light grey-text text-lighten-3">Taking a new route in life can be disorienting. Make a profile on ZigZag to store all of the most important information you find during your journey.</h5>
                </div>
              </li>
            </ul>
          </div>

        </div>
      </>
    );
  }
}
