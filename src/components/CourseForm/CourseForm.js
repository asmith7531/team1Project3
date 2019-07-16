import React from "react";
import {
  Container,
  Col,
  Row,
  Navbar,
  Nav,
  FormControl,
  Button,
  NavDropdown,
  Form
} from "react-bootstrap";

const CourseForm = () => (
  <>
    <Form.Label>Choose a Program/Course</Form.Label>
    <Form.Control as="select">
      <option>Choose...</option>
      <option value="agriculture">
        Agriculture, Agriculture Operations, and Related Sciences
      </option>

      <option value="agriculture">Agriculture Related Science</option>
      <option value="architect">Architect Related</option>
      <option value="biology">Biology or Biomedical Science</option>
      <option value="business management">
        Business, Management, Marketing
      </option>
      <option value="communication">Communication, Journalism</option>
      <option value="computer ccience">
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

      <option value="visual_performing">Visual and Performing Arts</option>
    </Form.Control>
  </>
);
export default CourseForm;
