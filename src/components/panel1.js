import React from "react";
import { Link } from "react-router-dom";
export default function Card() {
  return (
    <div class="container center">
      <h4 className="white-text">
        If you are not sure what you want to be when you grow up, try taking the
        survey to find fields of potential interest specific to you.
      </h4>
      <Link className="white-text" to="/survey">
        <a class="waves-effect waves-light btn">Get Started Here!</a>
      </Link>
    </div>
  );
}
