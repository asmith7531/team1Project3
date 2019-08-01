import React from "react";
import { Link } from "react-router-dom";
export default function Card() {
  return (
    <div class="container center">
      <h4 className="white-text">
        Find your passion by taking our pathfinder survey.
      </h4>
      <a class="waves-effect waves-light btn">
        Discover Your Passion
        <Link className="white-text" to="/survey">
          Find Your Passion
        </Link>
      </a>
    </div>
  );
}