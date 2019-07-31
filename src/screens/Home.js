import React, { Component } from "react";
import NavBar from "../components/NavBar";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import Card from "../components/Card";
import M from "materialize-css";

export default class Home extends Component {
  componentDidMount() {
    var elem = document.querySelector(".carousel");
    var instance = M.Carousel.init(elem, { duration: 100 });
  }

  render() {
    return (
      <div>
        <NavBar />
        <div className="s12 m10 l8">
          <Carousel />
        </div>
        <div className="container">
          <Card className="left" />
          <Card className="left" />
          <Card className="left" />
        </div>
        <Footer />
      </div>
    );
  }
}