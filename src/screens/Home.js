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
        <div>
          <p> THIS BRANCH EXISTS AS A SAVE FILE IN CASE I BREAK ANYTHING WHEN I PULL DOWN FROM MASTER RIGHT NOW 11:25am Aug 14.2019. First master pull since Aug 3. </p>
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