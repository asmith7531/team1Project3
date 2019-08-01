import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import API from "../Utility/API";
import M from "materialize-css";
import Background from "../../dist/matt-ragland-02z1I7gv4ao-unsplash.jpg";
import Footer from "../components/Footer";
function SignUp(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const handleSubmit = event => {
    event.preventDefault();
    if (username && password && password === confirm) {
      API.newUser({
        username,
        password
      });
    } else if (username && password && password !== confirm) {
      alert("Your passwords do not match.");
    } else {
      alert("Please input required fields");
    }
  };

  useEffect(() => {
    M.AutoInit();
  });

  return (
    <>
      <div className="parallax-container">
        <nav>
          <div class="nav-wrapper teal white-text">
            <Link to="/" class="brand-logo white-text center">
              ZigZag
            </Link>
          </div>
        </nav>
        <br />
        <br />
        <br />
        <br />
        <br />

        <div className="row center">
          <div className="row valign-wrapper">
            <form
              onSubmit={handleSubmit}
              className="col s8 offset-s2 center card-panel"
            >
              <h3>Register</h3>
              <div className="row">
                <div className="input-field col s12">
                  <input
                    id="first_name"
                    type="text"
                    className="validate"
                    data-length="20"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                  />
                  <label for="first_name">Username</label>
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
                    value={password}
                    onChange={e => setPassword(e.target.value)}
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
                    value={confirm}
                    onChange={e => setConfirm(e.target.value)}
                  />
                  <label for="confirmPassword">Confirm Password</label>
                </div>
              </div>
              <div className="row">
                <input
                  href="/create/user"
                  className="input-field waves-effect waves-light btn"
                  type="submit"
                  value="Submit"
                />
                <a>
                  <Link to="/login">Or Login</Link>
                </a>
              </div>
            </form>
          </div>
        </div>
        <div className="parallax">
          <img src={Background} />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default SignUp;
