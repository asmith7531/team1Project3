import React, { Component } from "react";
import M from "materialize-css";
import Degrees from "../components/CollegeSearchForm/Degrees";
import States from "../components/CollegeSearchForm/States";
import Size from "../components/CollegeSearchForm/Size";
import Name from "../components/CollegeSearchForm/Name";
import API from "../Utility/API";
import SearchResult from "../components/Results/index";
import JobSearchResults from "../components/Jobs/index";
import Compare from "../components/Compare/index";

export default class SchoolSearch extends Component {
  componentDidMount() {
    M.AutoInit();
  }

  // class FlavorForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "NJ",
      course: "computer science",
      school_info: [],
      job_search: [],
      compareSchools: [],
      error: "",
      message: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleCourseChange = this.handleCourseChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.setStateValue = this.setStateValue.bind(this);
    this.setCourseValue = this.setCourseValue.bind(this);
    this.handleCompare = this.handleCompare.bind(this);
    this.addCollege = this.addCollege.bind(this);
  }

  addCollege(e) {
    createCollege({
      name: e.target.value,
      UserId: this.props.id
    })
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleCourseChange(event) {
    // event.preventDefault();
    this.setState({ course: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    alert(
      "Your favorite State and course is: " +
        this.state.value +
        " - c   :" +
        this.state.course
    );
    API.getCollegeInfo(this.state.value)
      .then(res => {
        console.log(res.data.results[0]["school.name"]);
        if (res.data.items === "error") {
          throw new Error(res.data.results);
        } else {
          let results = res.data.results;
          this.setState({ school_info: results, error: "" });
        }
      })
      .catch(err => this.setState({ error: err.items }));
    API.getJobMarket(this.state.course, this.state.value)
      .then(res => {
        console.log("JOB: " + res.data.Jobs[0]["JobTitle"]);
        if (res.data.Jobs === "error") {
          throw new Error(res.data.Jobs);
        } else {
          let jobResult = res.data.Jobs;
          this.setState({ job_search: jobResult, error: "" });
        }
      })
      .catch(err => this.setState({ error: err.items }));
  }

  setStateValue(value) {
    this.setState({
      ...this.state,
      value
    });
  }

  setCourseValue(value) {
    this.setState({
      ...this.state,
      course: value
    });
  }
  handleCompare(school_id) {
    // event.preventDefault();
    console.log(this.state.school_info);
    console.log("school_id: " + school_id);
    let compareSchools = this.state.school_info.filter(
      school => school.id === school_id
    );
    // compareSchools = compareSchools[0];
    // this.state.compareSchools.push(compareSchools);
    this.setState({
      compareSchools: [...this.state.compareSchools, compareSchools],
      error: ""
    });
    console.log("compare schools: " + JSON.stringify(compareSchools));
  }

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <div className="">
            <div className="container center-align">
              <div className="row">
                <h3>Find Schools</h3>
                <h5 className="white-text">Find your perfect classroom.</h5>
              </div>
              {/* <div className="col s12 m6 l6"> */}
              <form className="">
                <div className="">
                  <ul className="collapsible">
                    <li>
                      <div className="collapsible-header">
                        <i className="material-icons">school</i>Programs and
                        Degrees
                      </div>
                      <div className="collapsible-body">
                        <Degrees setCourseValue={this.setCourseValue} />
                        {/* <Degrees /> */}
                      </div>
                    </li>
                    <li>
                      <div className="collapsible-header">
                        <i className="material-icons">place</i>Location
                      </div>
                      <div className="collapsible-body">
                        <States setStateValue={this.setStateValue} />
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
                          Going to hold off on this for now. IDK what the api
                          query parameters will be.
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
                  {/* <input type="submit" value="Search" /> */}
                </div>
              </form>
              {/* </div> */}
            </div>
          </div>
        </form>
        <SearchResult
          school_info={this.state.school_info}
          handleCompare={this.handleCompare}
        />
        <JobSearchResults job_info={this.state.job_search} />
        <Compare compareSchools={this.state.compareSchools} />
      </>
    );
  }
}