import React, { Component } from "react";
export default class Degrees extends Component {
  render() {
    return (
      <div>
        <div className="input-field col s12">
          <select
            onChange={e => {
              const value = e.target.value;
              this.props.setCourseValue(value);
            }}
          >
            <option value="" disabled>
              Choose your Intended Degree
            </option>
            <option value="agriculture">Agriculture Related Science</option>
            <option value="architecture">Architect Related</option>
            <option value="biology">Biology or Biomedical Science</option>
            <option value="business management">
              Business, Management, Marketing
            </option>
            <option value="communication">Communication, Journalism</option>
            <option value="computer science">
              Computer Science, Information Technology
            </option>
            <option value="education">Education</option>
            <option value="engineering">Engineering</option>
            <option value="literature">
              Foreign Languages, Literature, Linguistics
            </option>
            <option value="health">Health</option>
            <option value="history">History</option>
            <option value="legal">Legal</option>
            <option value="philosophy">Philosophy</option>
            <option value="physics">Physical Science</option>
            <option value="social science">Social Science</option>
            <option value="virtual Arts">Virtual and Performing Arts.</option>
          </select>
          <label>Degree</label>
        </div>
      </div>
    );
  }
}
