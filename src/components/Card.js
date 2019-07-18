import React from "react";

export default function Card(position) {
  return (
    <div className="row">
      <div className={`pill ${position} +"col s12 m6 l3"`}>
        <div className="card ">
          <div className="card-content black-text">
            <h2 className="card-title black-text">
              This App could be more Doper
            </h2>
            <hr />
            <h4 className="black-text">Card Component</h4>
            <p className="flow-text black-text">
              ***Some info from the users account***
            </p>
          </div>
          <div className="card-action">
            <a href="#">This is a link</a>
            <a href="#">This is a link</a>
          </div>
        </div>
      </div>
    </div>
  );
}
