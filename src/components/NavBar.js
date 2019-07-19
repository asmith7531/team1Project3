import React from "react";
import { Link } from "react-router-dom";
const Home = () => (
  <>
    <nav className="teal">
      <div className="nav-wrapper">
        <a href="" className="brand-logo center">
          <h4>ZigZag</h4>
        </a>
        <ul className="left hide-on-med-and-down">
          <li className="active">
            <Link to="/">Dashboard</Link>
          </li>
          <li className="">
            <Link to="/careersearch">Discover Careers</Link>
          </li>
          <li className="">
            <Link to="/survey">Find Your Passion</Link>
          </li>
          <li className="">
            <Link to="/schoolsearch">Find Schools</Link>
          </li>
        </ul>
        <ul className="right hide-on-med-and-down">
          <Link to="/login" className="material-icons">
            account_circle
          </Link>
        </ul>
      </div>
    </nav>
  </>
);


export default Home;
