import React, { Component } from "react";
import NavBar from "../../components/NavBar";
import Carousel from "../../components/Carousel";
import Footer from "../../components/Footer";
// import Card from "../components/Card";
import M from "materialize-css";

export default class Home extends Component {
  componentDidMount() {
    M.AutoInit();
  }

  render() {
    return (
      <div>
        <NavBar />
        <div className="s12">
          <Carousel />
        </div>
        <Footer />
      </div>
    );
  }
}