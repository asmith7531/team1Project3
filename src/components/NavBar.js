import React from "react";

const Home = () => (
  <>
    <nav>
    <div className="nav-wrapper">
      <a href="#!" className="brand-logo center">WayFarer</a>
      <ul className="left hide-on-med-and-down">
        <li className="active"><a name="dash" href="sass.html">Dashboard</a></li>
        <li className=""><a name="careers" href="sass.html">Discover Careers</a></li>
        <li className=""><a name="personality" href="sass.html">Find Your Passion</a></li>
        <li className=""><a name="colleges" href="badges.html">Explore Colleges</a></li>
        <li className=""><a href="collapsible.html">Scholarships</a></li>
      </ul>
      <ul className="right hide-on-med-and-down"><a><i className="material-icons">account_circle</i>*USERS Name*</a></ul>
    </div> 
  </nav>
  </>
);

export default Home;