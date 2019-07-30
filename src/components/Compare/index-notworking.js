import React from "react";
// import ReactSpeedometer from "react-d3-speedometer";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
// import CanvasJSReact from "../../public/lib/canvasjs.react";
// var CanvasJSChart = CanvasJSReact.CanvasJSChart;
import PieChart from "react-minimal-pie-chart";
// import InputRange from "react-input-range";
let school_name = [];
let school_city = [];
let avg_annual_cost = [];
let avg_grad_rate = [];
let salary_after = [];
let student_body = [];
let tution_instate = [];
let tution_outstate = [];
let debt_after_grad = [];
let monthly_payment = [];
let sat_reading_min = [];
let sat_reading_max = [];
let sat_math_min = [];
let sat_math_max = [];

// let schoolName = "school.name";
const progressBar = {
  width: "70%",
  height: "10%"
};
const Compare = props => {
  // console.log(props);
  if (props.compareSchools.length > 0) {
    console.log(props.compareSchools);
    {
      props.compareSchools.map(school1 => {
        school_name.push(school1[0]["school.name"]);
        school_city.push(school1[0]["school.city"]);
        avg_annual_cost.push(school1[0]["latest.cost.avg_net_price.overall"]);
        avg_grad_rate.push(
          school1[0]["latest.completion.rate_suppressed.overall"]
        );
        salary_after.push(
          school1[0]["latest.earnings.10_yrs_after_entry.median"]
        );
        student_body.push(school1[0]["latest.student.size"]);
        tution_instate.push(school1[0]["latest.cost.tuition.in_state"]);
        tution_outstate.push(school1[0]["latest.cost.tuition.out_of_state"]);
        debt_after_grad.push(
          school1[0]["latest.aid.median_debt.completers.overall"]
        );
        monthly_payment.push(
          school1[0]["latest.aid.median_debt.completers.monthly_payments"]
        );
        sat_reading_min.push(
          school1[0][
            "latest.admissions.sat_scores.25th_percentile.critical_reading"
          ]
        );
        sat_reading_max.push(
          school1[0][
            "latest.admissions.sat_scores.75th_percentile.critical_reading"
          ]
        );
        sat_math_min.push(
          school1[0]["latest.admissions.sat_scores.25th_percentile.math"]
        );
        sat_math_max.push(
          school1[0]["latest.admissions.sat_scores.75th_percentile.math"]
        );

        console.log("School1:   " + JSON.stringify(school1[0]["school.name"]));
        console.log("SchoolName_Arry : " + school_name);
      });
    }
    console.log("SchoolName_Arry : " + school_name);

    console.log("School City Array : " + school_city);
    console.log("avg_annual: " + avg_annual_cost);
    console.log("avg_Grad: " + avg_grad_rate);
    console.log("salary: " + salary_after);
    console.log("studentBody : " + student_body);
    console.log("SAT Math Min" + sat_math_min);
    console.log("SAT reading max " + sat_reading_max);
  // }

  if (school_name.length > 0) {
        return (

    <div className="container">
      <div className="row">
      <table>
                <tr>
                  <th id="blank">&nbsp;</th>
                  {{ for (let i = 0; i < school_name.length; i++ ) {
                    <th id="co1" headers="blank">{school_name[i]}</th>
                    </tr>
                  }}
                //   {school_name.map(schoolName => { return(
                //     <th id="co1" headers="blank">{schoolName}</th>)
                //   })}
                //   </tr>
                //   <tr>
                //   <th id="c1" headers="blank">
                //     City and State
                //   </th>
                //   {school_city.map(schoolCity => { return
                //   <td headers="co1 c1">{schoolCity}</td>
                // })}
                </tr>
                </table>
        </div>
      </div>
    );
    //   </div>
    // </div>
  }  else {
    return <h3>Loading data</h3>;
  }
  // if (props.compareSchools.length > 0) {
  //   return (
  //     <div className="container">
  //       <div className="row">
  //         {props.compareSchools[0].map(schools => {
  //           // console.log("props.compareSchool.loop");
  //           // console.log(schools["school.name"]);
  //           return (
  //             <table>
  //               <tr>
  //                 <th id="blank">&nbsp;</th>
  //                 <th id="co1" headers="blank">
  //                   {schools["school.name"]}
  //                 </th>
  //               </tr>
  //               <tr>
  //                 <th id="c1" headers="blank">
  //                   City and State
  //                 </th>
  //                 <td headers="co1 c1">{schools["school.city"]}</td>
  //               </tr>
  //               <tr>
  //                 <th id="c1" headers="blank">
  //                   URL
  //                 </th>
  //                 <td headers="co1 c1">{schools["school.school_url"]}</td>
  //               </tr>
  //             </table>
  //           );
  //         })}
  //       </div>
  //     </div>
  //   );
  // } else {
  //   return <h3>Loading data</h3>;
  // }
  // console.log("School City Array : " + school_city);
  // console.log("avg_annual: " + avg_annual_cost);
  // console.log("avg_Grad: " + avg_grad_rate);
  // console.log("salary: " + salary_after);
  // console.log("studentBody : " + student_body);
  // console.log("SAT Math Min" + sat_math_min);
  // console.log("SAT reading max " + sat_reading_max);
};
export default Compare;
