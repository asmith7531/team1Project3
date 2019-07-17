import React, { Component } from "react";
import M from "materialize-css";
export default class Degrees extends Component {
  render() {
    return (
   
        <>
        <div className="input-field col s12">
         <select defaultValue="">
           <option value="" disabled >Choose your Intended Degree</option>
           <option label="1" value="Tw-Year (Associate's">Two-Year (Associate's)</option>
           <option value="2">Four-Year (Bachelor's)</option>
           <option value="3">Certification</option>
         </select>
         <label>Degree</label>
       </div>
       </>
          
    );
  }
}
