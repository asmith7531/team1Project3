import React, { Component } from "react";
import NavBar from "../components/NavBar";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import M from "materialize-css";

export default class Home extends Component {
  componentDidMount() {
    var elem = document.querySelector(".carousel");
    var instance = M.Carousel.init(elem, { duration: 200 });
  }
  render() {
    return (
      <div>
        <NavBar />
        <Carousel />
        <Footer />
      </div>
    );
  }
}
