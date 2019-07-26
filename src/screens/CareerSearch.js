import React, { Component } from "react";
import NavBar from "../components/NavBar";
import M from "materialize-css";
// import API from "../Utility/API";
import Indeed from "indeed-scrapper";
export default class CareerSearch extends Component {
  // class FlavorForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      queryOptions: {
        host: "www.indeed.com",
        query: "Software",
        city: "Seattle, WA",
        radius: "25",
        level: "entry_level",
        jobType: "fulltime",
        maxAge: "7",
        sort: "date",
        limit: 100
      }
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.setStateValue = this.setStateQuery.bind(this);
    Indeed.query(queryOptions).then(res => {
      console.log(res); // An array of Job objects
    });
  }

  handleChange(event) {
    this.setState({ query: event.target.queryOptions.query });
  }

  handleSubmit(event) {
    event.preventDefault();
    alert("Your query is: " + this.state.queryOptions.query);

    API.Indeed(this.state.queryOptions)
      .then(res => {
        // console.log(res.data.results);
        if (res.data.items === "error") {
          throw new Error(res.data.results);
        } else {
          let results = res.data.results;
          this.setState({ school_info: results, error: "" });
        }
      })
      .catch(err => this.setState({ error: err.items }));
  }

  componentDidMount() {
    M.AutoInit();
  }
  render() {
    return (
      <div className="">
        <NavBar />
        <div className="container center-align">
          <div className="row">
            <h3>Find Careers - this is incomplete</h3>
            <h5 className="white-text">Find your perfect career.</h5>
          </div>
          <div class="row card-panel">
            <form onSubmit={this.handleSubmit} class="col s12">
              <div class="row">
                <div class="input-field col s6">
                  <input
                    id="query"
                    type="text"
                    onChange={this.handleChange}
                    class="validate"
                  />
                  <label for="query">Search</label>
                </div>
                <div class="input-field col s6">
                  <input id="city" type="text" class="validate" />
                  <label for="city">City</label>
                </div>
              </div>
              <button
                className="btn waves-effect amber accent waves-light"
                type="submit"
                name="action"
              >
                Search
                <i className="material-icons right">search</i>
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
