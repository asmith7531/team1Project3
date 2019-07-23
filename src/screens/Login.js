import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import API from "../Utility/API";
import Footer from "../components/Footer";


function Login(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (username && password) {
      API.login({
        username,
        password
      });
      let newUser = {
        username,
        password
      };
      alert(newUser);
      console.log({ username });
    } else {
      alert("Please input required fields");
    }
  }


  useEffect(() => {
    var elem = document.querySelector(".parallax");
    var instance = M.Parallax.init(elem);
  });

  return (
    <>
      <div className="parallax-container">
        <div className="row center section teal white-text">
          <h1 className="">ZigZag</h1>
        </div>
        <div className="container section">
          <div className="row s6 valign-wrapper offset-s3">
            <form onSubmit={handleSubmit} className="col center s6 offset-s3 card-panel ">
              <h3>Sign In</h3>
              <div className="row">
                <div className="input-field col s12">
                  <input
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                    id="userName"
                    type="text"
                    className="validate" />
                  <label for="userName">Username</label>
                  <p>{username}</p>
                </div>
                <div className="input-field col s12">
                  <input
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    id="password"
                    type="password"
                    className="validate" />
                  <label for="password">Password</label>
                  <p>{password}</p>
                </div>
                <a>
                  <Link to="./SignUp">Or Create A New Acount</Link>
                </a>
              </div>
              <input href="/create/user" className="input-field waves-effect waves-light btn" type="submit" value="Enter" />
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


export default Login;