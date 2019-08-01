import React from "react";
import { Link } from "react-router-dom";
const Home = () => (
  <>
    <nav className="teal">
      <div className="nav-wrapper">
        <a href="" className="brand-logo center">
          <h4 className="white-text">ZigZag</h4>
        </a>
        <ul className="left hide-on-med-and-down">
          <li className="active">
            <Link className="white-text" to="/">
              Dashboard
            </Link>
          </li>
          <li className="">
            <Link className="white-text" to="/careersearch">
              Discover Careers
            </Link>
          </li>
          <li className="">
            <Link className="white-text" to="/survey">
              Find Your Passion
            </Link>
          </li>
          <li className="">
            <Link className="white-text" to="/schoolsearch">
              Find Schools
            </Link>
          </li>
        </ul>
        <ul className="right hide-on-med-and-down">
          <Link className="white-text" to="/login" className="material-icons">
            account_circle
          </Link>
        </ul>
      </div>
    </nav>
  </>
);

export default Home;