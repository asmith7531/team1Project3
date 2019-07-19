import React, { Component } from "react";
import NavBar from "../components/NavBar";
import M from "materialize-css";

export default class Survey extends Component {
  componentDidMount() {
    M.AutoInit();
  }

  render() {
    return (
        <>
        <NavBar />
        <p>oiwjd woidjq owidjqw odjqowidjqoiwdj q</p>
       </>
    );
  }
}
