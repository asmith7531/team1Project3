import React from "react";
// import ReactSpeedometer from "react-d3-speedometer";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
// import CanvasJSReact from "../../public/lib/canvasjs.react";
// var CanvasJSChart = CanvasJSReact.CanvasJSChart;
import PieChart from "react-minimal-pie-chart";
// import InputRange from "react-input-range";

// let schoolName = "school.name";
const progressBar = {
  width: "70%",
  height: "10%"
};
const SearchResult = props => {
  console.log(props);
  console.log(props.handleCompare);
  return props.school_info.length === 0 ? (
    <div className="card" />
  ) : (
    <div className="container">
      <div className="row">
        <ul className="tabs">
          <li className="tab col s3">
            <a className="active" href="#schoolInfo">
              College Details
            </a>
          </li>
          <li className="tab col s3">
            <a href="#jobs">Job Market</a>
          </li>
          <li className="tab col s3">
            <a href="#possibilities">Possibilities</a>
          </li>
        </ul>
        {props.school_info.map(school_inf => {
          return (
            <div className="col s4 m4 l12" id="schoolInfo">

              <div className="card">
                <div className="card-image waves-effect waves-block waves-light">
                  <button
                    className="btn waves-effect amber accent waves-light left"
                    school_id={school_inf["id"]}
                    type="submit"
                    // name="action"
                    onClick={event => props.handleCompare(school_inf["id"])}
                    // onClick={props.handleCompare}
                  >
                    Compare
                    <i className="material-icons right">compare</i>
                  </button>
                  <img
                    className="activator"
                    width={500}
                    height={300}
                    mode="fit"
                    src="https://image.flaticon.com/icons/svg/195/195496.svg"
                  />
                </div>
                <div className="card-content">
                  <span className="card-title activator grey-text text-darken-4">
                    {school_inf["school.name"]}, {school_inf["school.city"]}
                    {", "}
                    {school_inf["school.state"]}
                    <i
                      className="material-icons right"
                      style={{ fontSize: "50px" }}
                    >
                      add_circle_outline
                    </i>
                  </span>
                  <p>
                    <div
                      style={{
                        width: "25%",
                        display: "inline-block",
                        paddingRight: "50px",
                        alignItems: "center"
                      }}
                    >
                      <CircularProgressbar
                        value={school_inf["latest.cost.avg_net_price.overall"]}
                        maxValue={100000}
                        text={
                          "$ " + school_inf["latest.cost.avg_net_price.overall"]
                        }
                      />
                      <p>
                        <span> Average Annual Cost </span>
                      </p>
                    </div>
                    <div
                      style={{
                        width: "25%",
                        display: "inline-block",
                        paddingRight: "50px",
                        alignItems: "center"
                      }}
                    >
                      <CircularProgressbar
                        value={
                          school_inf[
                            "latest.completion.rate_suppressed.overall"
                          ]
                        }
                        maxValue={1}
                        text={`${school_inf[
                          "latest.completion.rate_suppressed.overall"
                        ].toFixed(2) * 100}%`}
                      />
                      <p>
                        <span> Average Graduation Rate </span>
                      </p>
                    </div>
                    <div
                      style={{
                        width: "25%",
                        display: "inline-block",
                        paddingRight: "50px",
                        alignItems: "center"
                      }}
                    >
                      <CircularProgressbar
                        value={
                          school_inf[
                            "latest.earnings.10_yrs_after_entry.median"
                          ]
                        }
                        maxValue={100000}
                        text={
                          "$ " +
                          school_inf[
                            "latest.earnings.10_yrs_after_entry.median"
                          ]
                        }
                      />
                      <p>
                        <span>Salary After Attending </span>
                      </p>
                    </div>
                    <div
                      style={{
                        width: "25%",
                        display: "inline-block",
                        paddingRight: "50px",
                        alignItems: "center"
                      }}
                    >
                      <PieChart
                        data={[
                          {
                            title: "White",
                            value:
                              school_inf[
                                "latest.student.demographics.race_ethnicity.white"
                              ] * 100,
                            color: "#3e98c7"
                          },
                          {
                            title: "Black",
                            value:
                              school_inf[
                                "latest.student.demographics.race_ethnicity.black"
                              ] * 100,
                            color: "#8fe3b1"
                          },
                          {
                            title: "Hispanic",
                            value:
                              school_inf[
                                "latest.student.demographics.race_ethnicity.hispanic"
                              ] * 100,
                            color: "#ddb2eb"
                          },
                          {
                            title: "Asian",
                            value:
                              school_inf[
                                "latest.student.demographics.race_ethnicity.asian"
                              ] * 100,
                            color: "#f0e2ad"
                          }
                        ]}
                      />

                      <p style={{ display: "inline-block" }}>
                        <span
                          style={{
                            width: "10",
                            height: "10",
                            borderRadius: 100 / 2,
                            color: "white",
                            fontSize: "14px",
                            paddingRight: "3 px",
                            backgroundColor: "#3e98c7"
                          }}
                        >
                          White{" "}
                        </span>
                        <span
                          style={{
                            width: "10",
                            height: "10",
                            borderRadius: 100 / 2,
                            color: "black",
                            fontSize: "14px",
                            paddingRight: "3 px",
                            backgroundColor: "#8fe3b1"
                          }}
                        >
                          Black{" "}
                        </span>
                        <span
                          style={{
                            width: "10",
                            height: "10",
                            borderRadius: 100 / 2,
                            color: "black",
                            fontSize: "14px",
                            paddingRight: "3 px",
                            backgroundColor: "#ddb2eb"
                          }}
                        >
                          Hispanic{" "}
                        </span>
                        <span
                          style={{
                            width: "10",
                            height: "10",
                            borderRadius: 100 / 2,
                            color: "black",
                            fontSize: "14px",
                            paddingRight: "3 px",
                            backgroundColor: "#f0e2ad"
                          }}
                        >
                          Asian{" "}
                        </span>
                      </p>
                    </div>

                    {/* <a href="#">This is a link</a> */}
                  </p>
                </div>
                <div className="card-reveal">
                  <span className="card-title grey-text text-darken-4">
                    <i className="material-icons right">close</i>
                  </span>
                  {/* <p>
                    Here is some more information about this product that is
                    only revealed once clicked on.
                  </p> */}
                  <div>
                    <p>
                      <img
                        width={60}
                        height={60}
                        mode="fit"
                        src="https://www.nicepng.com/png/detail/110-1101607_prospective-student-icon-team-icon.png"
                      />

                      <span style={{ fontSize: "20px" }}>
                        {" "}
                        Student Body : {school_inf["latest.student.size"]}{" "}
                        Students
                      </span>
                    </p>
                    <p>
                      <img
                        width={60}
                        height={60}
                        mode="fit"
                        src="https://cdn-images-1.medium.com/max/1200/1*fOocZgUHjalamEQy3buONw.jpeg"
                      />
                      <span style={{ fontSize: "20px" }}>
                        {" "}
                        Tution(In-state) : ${" "}
                        {school_inf["latest.cost.tuition.in_state"]}{" "}
                      </span>
                      <br />
                      <span style={{ fontSize: "20px", marginLeft: "65px" }}>
                        {"          "}
                        Tution(Out-state) : ${" "}
                        {school_inf["latest.cost.tuition.out_of_state"]}{" "}
                      </span>
                    </p>
                    <p>
                      <img
                        width={60}
                        height={60}
                        mode="fit"
                        src="https://www.felician.edu/sites/default/files/federal-state-aid-icon-52.jpg"
                      />

                      <span style={{ fontSize: "20px" }}>
                        {" "}
                        Typical Total Debt After Graduation : ${" "}
                        {
                          school_inf[
                            "latest.aid.median_debt.completers.overall"
                          ]
                        }{" "}
                      </span>
                    </p>
                    {/* <p>
                      <img
                        width={60}
                        height={60}
                        mode="fit"
                        src="https://www.felician.edu/sites/default/files/federal-state-aid-icon-52.jpg"
                      />

                      <span style={{ fontSize: "20px" }}>
                        {" "}
                        Typical Total Debt After Graduation : ${" "}
                        {
                          school_inf[
                            "latest.aid.median_debt.completers.overall"
                          ]
                        }{" "}
                      </span>
                    </p> */}
                    <p>
                      <img
                        width={60}
                        height={60}
                        mode="fit"
                        src="https://www.thrivecu.org/wp-content/uploads/2019/03/calculator-flat-icon-vector-20883411.jpg"
                      />

                      <span style={{ fontSize: "20px" }}>
                        {" "}
                        Typical Monthly Loan Payment : ${" "}
                        {
                          school_inf[
                            "latest.aid.median_debt.completers.monthly_payments"
                          ]
                            .toString()
                            .split(".")[0]
                        }
                        {"  /mo"}
                      </span>
                    </p>
                    <p>
                      <img
                        width={60}
                        height={60}
                        mode="fit"
                        src="https://discoverheritage.ca/wp-content/uploads/2014/03/icon_admissionRequirements.jpg"
                      />

                      <span style={{ fontSize: "20px" }}>
                        {" "}
                        SAT/ACT Scores : {" Critical Reading :"}
                      </span>
                      <span style={{ fontSize: "40px", paddingRight: "20px" }}>
                        {
                          school_inf[
                            "latest.admissions.sat_scores.25th_percentile.math"
                          ]
                        }
                      </span>
                      <i
                        className="material-icons"
                        style={{ fontSize: "50px" }}
                      >
                        swap_horiz
                      </i>
                      <span style={{ fontSize: "40px", paddingLeft: "20px" }}>
                        {
                          school_inf[
                            "latest.admissions.sat_scores.75th_percentile.math"
                          ]
                        }
                      </span>
                      <br />

                      <span style={{ fontSize: "20px", marginLeft: "315px" }}>
                        {" "}
                        {" Math :"}
                      </span>
                      <span style={{ fontSize: "40px", paddingRight: "20px" }}>
                        {
                          school_inf[
                            "latest.admissions.sat_scores.25th_percentile.math"
                          ]
                        }
                      </span>
                      <i
                        className="material-icons"
                        style={{ fontSize: "50px" }}
                      >
                        swap_horiz
                      </i>
                      <span style={{ fontSize: "40px", paddingLeft: "20px" }}>
                        {
                          school_inf[
                            "latest.admissions.sat_scores.75th_percentile.math"
                          ]
                        }
                      </span>
                    </p>
                    <p />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default SearchResult;
