import React, { Component } from "react";
import pic1 from "../screens/Home/skyCeiling.jpg";
import pic2 from "../screens/Home/crowdOfStudents.jpg";
import pic3 from "../screens/Home/coolOffice.jpg";
import pic4 from "../screens/Home/selfLearning.jpg";
// import "../main.css";


export default class Carousel extends Component {
  componentDidMount() {
    M.AutoInit();
  }
  
  render() {
    return (
      <>
        <div className="section row center">
          
        <div class="slider">
          <ul class="slides">
            <li>
              <div className="cPic1"></div>
              <div class="caption center-align">
                <h3>Welcome to ZigZag</h3>
                <div class="light grey-text text-lighten-3">
                  <p>We're here to help guide you towards a productive and fulfilling future.</p>
                  <p>Applying to college can be a daunting process. Changing careers can feel like a risky maneuver.</p>
                  <p>With our tools, it just got a little bit easier.</p>
                </div>
              </div>
            </li>
            <li>
              <div className="cPic2"></div>
              <div class="caption left-align">
                <h3>Try our Career Survey</h3>
                <div class="light grey-text text-lighten-3">
                <p>Many of us don't know what wer're doing AND THATS OK. But maybe oure survey can help you start your journey...</p>
                </div>
              </div>
            </li>
            <li>
              <div className="cPic3"></div>
              <div class="caption right-align">
                <h3>Find the perfect School or Job for you</h3>
                <div class="light grey-text text-lighten-3">
                  <p>Already have a grasp on what you want to do? Our site pulls from a variety of databases to help you find the next steps that are best for you</p>
                </div>
              </div>
            </li>
            <li>
              <div className="cPic4"></div>
              <div class="caption center-align">
                <h3>Make a profile!</h3>
                <div class="light grey-text text-lighten-3">
                  <p>Taking a new route in life can be disorienting. Make a profile on ZigZag to store all of the most important information you find during your journey.</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
        </div>
      </>
    );
  }
}


<img src={pic1}></img>

