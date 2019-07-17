import React, { Component } from "react";
import NavBar from "../components/NavBar";
import M from "materialize-css";
import Degrees from "../components/Degrees";
export default class SchoolSearch extends Component {
  componentDidMount() {
    M.AutoInit()
  }
  render() {
    return (
      <>
        <NavBar />
        <div className="container s8">
           
        <ul class="collapsible ">
          <li>
            <div class="collapsible-header">
              <i class="material-icons">school</i>Programs and Degrees
            </div>
            <div class="collapsible-body">
              <Degrees />
            </div>
          </li>
          <li>
            <div class="collapsible-header">
              <i class="material-icons">place</i>Location
            </div>
            <div class="collapsible-body">
              <span>Lorem ipsum dolor sit amet.</span>
            </div>
          </li>
          <li>
            <div class="collapsible-header">
              <i class="material-icons">whatshot</i>Size
            </div>
            <div class="collapsible-body">
              <span>Lorem ipsum dolor sit amet.</span>
            </div>
          </li>
          <li>
            <div class="collapsible-header">
              <i class="material-icons">whatshot</i>Name
            </div>
            <div class="collapsible-body">
              <span>Lorem ipsum dolor sit amet.</span>
            </div>
          </li>
          <li>
            <div class="collapsible-header">
              <i class="material-icons">whatshot</i>Advanced
            </div>
            <div class="collapsible-body">
              <span>Lorem ipsum dolor sit amet.</span>
            </div>
          </li>
        </ul>
        
        </div>
      </>
    );
  }
}
