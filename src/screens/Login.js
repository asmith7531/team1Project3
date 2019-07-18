import React, { Component } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
export default class Login extends Component {
  componentDidMount() {
    var elem = document.querySelector(".parallax");
    var instance = M.Parallax.init(elem);
  }
  render() {
    return (
      <>
        <div className="parallax-container">
          <div className="row center section teal white-text">
            <h1 className="">ZigZag</h1>
          </div>
          <div className="container section">
            <div className="row s6 valign-wrapper offset-s3">
              <form className="col center s6 offset-s3 card-panel ">
                <h3>Sign In</h3>
                <div className="row">
                  <div className="input-field col s12">
                    <input id="userName" type="text" className="validate" />
                    <label for="userName">User Name</label>
                  </div>
                  <div className="input-field col s12">
                    <input id="password" type="password" className="validate" />
                    <label for="password">Password</label>
                  </div>
                  <a>
                    <Link to="./SignUp">Or Create A New Acount</Link>
                  </a>
                </div>
              </form>
            </div>
          </div>
          <div className="parallax">
            <img src="https://images.unsplash.com/photo-1502990313206-7f37a9514bea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
          </div>
        </div>
        <Footer />
      </>
    );
  }
}
