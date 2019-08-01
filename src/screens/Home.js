import React, { Component } from "react";
import NavBar from "../components/NavBar";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import M from "materialize-css";
import Background from "../../dist/susan-yin-2JIvboGLeho-unsplash.jpg";
export default class Home extends Component {
  componentDidMount() {
    M.AutoInit();
  }

  render() {
    return (
      <div>
        <NavBar />
        <div className="parallax-container">
          <br />
          <br />
          <br />
          <div className="s12 m10 l8">
            <Carousel />
          </div>
          <div className="container" />
          <div className="parallax">
            <img src={Background} />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
