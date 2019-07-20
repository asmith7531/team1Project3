import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import M from "materialize-css";


function SignUp(props) {
  const [username, setUsername] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Submitting Name ${username}`)
}

  useEffect(() => {
    M.AutoInit();
  });

  return (
    <>
      <nav>
        <div class="nav-wrapper">
          <Link to="/" class="brand-logo center">
            ZigZag
            </Link>
        </div>
      </nav>
      <div class="parallax-container">
        <div class="parallax">
          <img src="https://images.unsplash.com/photo-1563299967-4e70dbae7eb0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
        </div>
      </div>
      <div className="container ">
        <div className="row valign-wrapper">
          <form onSubmit={handleSubmit} className="col s8 offset-s2 center card-panel">
            <h3>Sign Up</h3>
            <div className="row">
              <div className="input-field col s6">
                <input
                  id="first_name"
                  type="text"
                  className="validate"
                  data-length="20"
                  value={username}
                  onChange={e => setUsername(e.target.value)}
                />
                <label for="first_name">First Name</label>
                <p>{username}</p>
              </div>
              <div className="input-field col s6">
                <input
                  id="last_name"
                  type="text"
                  className="validate"
                  data-length="20"
                />
                <label for="last_name">Last Name</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input
                  id="email"
                  type="email"
                  className="validate"
                  data-length="50"
                />
                <label for="email">Email</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field offset-s3 col s6">
                <input
                  id="password"
                  type="password"
                  className="validate"
                  data-length="15"
                />
                <label for="password">Password</label>
              </div>
            </div>
            <div className="row ">
              <div className="input-field offset-s3 col s6">
                <input
                  id="confirmPassword"
                  type="password"
                  className="validate"
                  data-length="15"
                />
                <label for="confirmPassword">Confirm Password</label>
              </div>
            </div>
            <input className="input-field waves-effect waves-light btn" type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </>
  );

}

export default SignUp;