import React, { Component } from "react";
// import pic1 from "../screens/Home/skyCeiling.jpg";
// import pic2 from "../screens/Home/crowdOfStudents.jpg";
// import pic3 from "../screens/Home/coolOffice.jpg";
// import pic4 from "../screens/Home/selfLearning.jpg";
import "../main.css";


export default class Carousel extends Component {
  render() {
    return (
      <>
        <div className="section row center">
          <div className="carousel carousel-slider">
            {/* <div className="carousel-fixed-item center col s12 m10 l8">
              {/* <a className="btn waves-effect white grey-text darken-text-2">
              Back
            </a> */}
            {/* </div> */}
            <div className="cPic1">
              <div className="carousel-item white-text z-depth-5" href="#one!">
                {/* <img src={pic1}></img> */}
                  <h2>1. Welcome to ZigZag</h2>
                  <p>We're here to help guide you towards a productive and fulfilling future.</p>
                  <p>Applying to college can be a daunting process. Changing careers can feel like a risky maneuver.</p>
                  <p>With our tools, it just got a little bit easier.</p>
              </div>
            </div>
            <div className="cPic2">
              <div className="carousel-item  white-text z-depth-5" href="#two!">
                {/* <img src={pic2}></img> */}
                <h2>Try our Career Survey</h2> 
                <p>Many of us don't know what wer're doing AND THATS OK. But maybe oure survey can help you start your journey...</p>
              </div>
            </div>            
            <div className="cPic3">
              <div className="carousel-item white-text z-depth-5" href="#three!">
                {/* <img src={pic3}></img> */}
                <h2>Find the perfect School or Job for you</h2>
                <p>Already have a grasp on what you want to do? Our site pulls from a variety of databases to help you find the next steps that are best for you</p>
              </div>
            </div>
            <div className="cPic4">            
              <div className="carousel-item white-text z-depth-5" href="#four!">
                {/* <img src={pic4}></img> */}
                <h2>Make a profile!</h2>
                <p>Taking a new route in life can be disorienting. Make a profile on ZigZag to store all of the most important information you find during your journey.</p>
              </div>
            </div>            
          </div>
        </div>
      </>
    );
  }
}
