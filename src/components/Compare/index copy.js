import React, { Component } from "react";
// import ReactSpeedometer from "react-d3-speedometer";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
// import CanvasJSReact from "../../public/lib/canvasjs.react";
// var CanvasJSChart = CanvasJSReact.CanvasJSChart;
import PieChart from "react-minimal-pie-chart";
// import InputRange from "react-input-range";
const outerLength = 3;
const innerLength = 2;

const DisplayTable = props => {
  {
    props.compareSchools.map(schools1 => {
      {
        schools1.map(schools => {
          console.log("props.compareSchool.loop");
          console.log(schools["school.name"]);
          return (
            <>
              <h2>hello</h2>
              // return (
              <table>
                <tr>
                  <th id="blank">&nbsp;</th>
                  <th id="co1" headers="blank">
                    test {`${schools["school.name"]}`}
                    {schools["school.name"]}
                  </th>
                </tr>
                <tr>
                  <th id="c1" headers="blank">
                    City and State
                  </th>
                  <td headers="co1 c1">{schools["school.city"]}</td>
                </tr>
                <tr>
                  <th id="c1" headers="blank">
                    URL
                  </th>
                  <td headers="co1 c1">{schools["school.school_url"]}</td>
                </tr>
              </table>
              ;
            </>
          );
        });
      }
    });
  }
};

// let schoolName = "school.name";
const progressBar = {
  width: "70%",
  height: "10%"
};
class Compare extends Component {
  constructor(props) {
    super(props);
    this.state = {
      updated: false;
    }
  }
  // console.log(props);
  if (props.compareSchools.length > 0) {
    console.log(props.compareSchools);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.compareSchools.length !== this.props.compareSchools.length) {
      this.
    }
  }

  //   arr.map( function( row ) {
  //     return row.map( function( cell ) {
  //         return foo( cell );
  //     } );
  // } )

  render() {
    if (props.compareSchools.length > 0) {
      return (
        <div className="container">
          <div className="row">
            <DisplayTable compareSchools={props.compareSchools} />
          </div>
        </div>
      );
    } else {
      return <h3>Loading data</h3>;
    }
  }
};
export default Compare;
