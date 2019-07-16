import React from "react";
import { Container, Col, Form } from "react-bootstrap";
import CourseForm from "../components/CourseForm";
import Navigation from "../components/Navigation";
import StateForm from "../components/StatesForm";
import SubmitButton from "../components/SubmitButton";

const Home = () => (
  <>
    <Navigation />
    <Form.Group as={Col} md="4" controlId="formGridState">
      <CourseForm />
      <StateForm />
      <SubmitButton />
    </Form.Group>
  </>
);

export default Home;
