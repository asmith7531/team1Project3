import React from "react";

// let schoolName = "school.name";

const JobSearchResults = props => {
  // console.log(props);
  return props.job_info.length === 0 ? (
    <div className="card" />
  ) : (
    <div className="container">
      <div className="row">
        {props.job_info.map(job_inf => {
          return (
            <div className="col s4 m4 l6" id="jobs">
              <div className="card-panel teal">
                <p>
                  <span className="white-text" style={{ alignItems: "center" }}>
                    Job title : {job_inf["JobTitle"]}
                  </span>
                  <br />
                  <span className="white-text" style={{ alignItems: "center" }}>
                    Company : {job_inf["Company"]}
                  </span>
                  <br />
                  <span className="white-text" style={{ alignItems: "center" }}>
                    Posted on : {job_inf["AccquisitionDate"]}
                  </span>
                  <br />
                  <span className="white-text" style={{ alignItems: "center" }}>
                    <a
                      className="white-text"
                      target="_blank"
                      href={job_inf["URL"]}
                    >
                      More Info
                    </a>
                  </span>
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default JobSearchResults;
