import React, { Component } from "react";
import NavBar from "../components/NavBar";
import M from "materialize-css";
import Degrees from "../components/CollegeSearchForm/Degrees";
import States from "../components/CollegeSearchForm/States";
import Size from "../components/CollegeSearchForm/Size";
import Name from "../components/CollegeSearchForm/Name";

export default class CareerSearch extends Component {
  componentDidMount() {
    M.AutoInit();
  }
  render() {
    return (
      <div className="">
        <NavBar />
        <div className="container center-align">
          <div className="row">
            <h3>Find Scholarships - this is incomplete</h3>
            <h5 className="white-text" />
          </div>
          {/* <div className="col s12 m6 l6"> */}
          <form className="">
            <div className="">
              <ul className="collapsible">
                <li>
                  <div className="collapsible-header">
                    <i className="material-icons">school</i>Programs and Degrees
                  </div>
                  <div className="collapsible-body">
                    <Degrees />
                  </div>
                </li>
                <li>
                  <div className="collapsible-header">
                    <i className="material-icons">place</i>Location
                  </div>
                  <div className="collapsible-body">
                    <States />
                  </div>
                </li>
                <li>
                  <div className="collapsible-header">
                    <i className="material-icons">group</i>Size
                  </div>
                  <div className="collapsible-body">
                    <Size />
                  </div>
                </li>
                <li>
                  <div className="collapsible-header">
                    <i className="material-icons">location_city</i>Name
                  </div>
                  <div className="collapsible-body">
                    <Name />
                  </div>
                </li>
                <li>
                  <div className="collapsible-header">
                    <i className="material-icons">settings</i>Advanced
                  </div>
                  <div className="collapsible-body">
                    <span>
                      Going to hold off on this for now. IDK what the api query
                      parameters will be.
                    </span>
                  </div>
                </li>
              </ul>
              <button
                className="btn waves-effect amber accent waves-light"
                type="submit"
                name="action"
              >
                Search
                <i className="material-icons right">search</i>
              </button>
            </div>
          </form>
          {/* </div> */}
        </div>
      </div>
    );
  }
}
