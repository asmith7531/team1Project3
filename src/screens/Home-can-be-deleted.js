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

const Home = () => (
  <>
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">Project Three</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
    <Form.Group as={Col} md="4" controlId="formGridState">
      <Form.Label>Choose a Program/Course</Form.Label>
      <Form.Control as="select">
        <option>Choose...</option>
        <option value="agriculture">
          Agriculture, Agriculture Operations, and Related Sciences
        </option>

        <option value="architecture">Architecture and Related Services</option>

        <option value="ethnic_cultural_gender">
          Area, Ethnic, Cultural, Gender, and Group Studies
        </option>

        <option value="biological">Biological and Biomedical Sciences</option>

        <option value="business_marketing">
          Business, Management, Marketing, and Related Support Services
        </option>

        <option value="communication">
          Communication, Journalism, and Related Programs
        </option>

        <option value="communications_technology">
          Communications Technologies/Technicians and Support Services
        </option>

        <option value="computer">
          Computer and Information Sciences and Support Services
        </option>

        <option value="construction">Construction Trades</option>

        <option value="education">Education</option>

        <option value="engineering">Engineering</option>

        <option value="engineering_technology">
          Engineering Technologies and Engineering-Related Fields
        </option>

        <option value="english">English Language and Literature/Letters</option>

        <option value="family_consumer_science">
          Family and Consumer Sciences/Human Sciences
        </option>

        <option value="language">
          Foreign Languages, Literatures, and Linguistics
        </option>

        <option value="health">Health Professions and Related Programs</option>

        <option value="history">History</option>

        <option value="security_law_enforcement">
          Homeland Security, Law Enforcement, Firefighting and Related
          Protective Services
        </option>

        <option value="legal">Legal Professions and Studies</option>

        <option value="humanities">
          Liberal Arts and Sciences, General Studies and Humanities
        </option>

        <option value="library">Library Science</option>

        <option value="mathematics">Mathematics and Statistics</option>

        <option value="mechanic_repair_technology">
          Mechanic and Repair Technologies/Technicians
        </option>

        <option value="military">
          Military Technologies and Applied Sciences
        </option>

        <option value="multidiscipline">Multi/Interdisciplinary Studies</option>

        <option value="resources">Natural Resources and Conservation</option>

        <option value="parks_recreation_fitness">
          Parks, Recreation, Leisure, and Fitness Studies
        </option>

        <option value="personal_culinary">
          Personal and Culinary Services
        </option>

        <option value="philosophy_religious">
          Philosophy and Religious Studies
        </option>

        <option value="physical_science">Physical Sciences</option>

        <option value="precision_production">Precision Production</option>

        <option value="psychology">Psychology</option>

        <option value="public_administration_social_service">
          Public Administration and Social Service Professions
        </option>

        <option value="science_technology">
          Science Technologies/Technicians
        </option>

        <option value="social_science">Social Sciences</option>

        <option value="theology_religious_vocation">
          Theology and Religious Vocations
        </option>

        <option value="transportation">
          Transportation and Materials Moving
        </option>

        <option value="visual_performing">Visual and Performing Arts</option>
      </Form.Control>
      <Form.Label>Select a State</Form.Label>
      <Form.Control as="select">
        <option>Choose...</option>
        <option value="AL">Alabama</option>
        <option value="AK">Alaska</option>
        <option value="AS">American Samoa</option>
        <option value="AZ">Arizona</option>
        <option value="AR">Arkansas</option>
        <option value="CA">California</option>
        <option value="CO">Colorado</option>
        <option value="CT">Connecticut</option>
        <option value="DE">Delaware</option>
        <option value="DC">District of Columbia</option>
        <option value="FM">Federated States of Micronesia</option>
        <option value="FL">Florida</option>
        <option value="GA">Georgia</option>
        <option value="GU">Guam</option>
        <option value="HI">Hawaii</option>
        <option value="ID">Idaho</option>
        <option value="IL">Illinois</option>
        <option value="IN">Indiana</option>
        <option value="IA">Iowa</option>
        <option value="KS">Kansas</option>
        <option value="KY">Kentucky</option>
        <option value="LA">Louisiana</option>
        <option value="ME">Maine</option>
        <option value="MD">Maryland</option>
        <option value="MA">Massachusetts</option>
        <option value="MI">Michigan</option>
        <option value="MN">Minnesota</option>
        <option value="MS">Mississippi</option>
        <option value="MO">Missouri</option>
        <option value="MT">Montana</option>
        <option value="NE">Nebraska</option>
        <option value="NV">Nevada</option>
        <option value="NH">New Hampshire</option>
        <option value="NJ">New Jersey</option>
        <option value="NM">New Mexico</option>
        <option value="NY">New York</option>
        <option value="NC">North Carolina</option>
        <option value="ND">North Dakota</option>
        <option value="MH"> Marshall Islands</option>
        <option value="MP">Northern Mariana Islands</option>
        <option value="OH">Ohio</option>
        <option value="OK">Oklahoma</option>
        <option value="OR">Oregon</option>
        <option value="PW">Palau</option>
        <option value="PA">Pennsylvania</option>
        <option value="PR">Puerto Rico</option>
        <option value="RI">Rhode Island</option>
        <option value="SC">South Carolina</option>
        <option value="SD">South Dakota</option>
        <option value="TN">Tennessee</option>
        <option value="TX">Texas</option>
        <option value="UT">Utah</option>
        <option value="VT">Vermont</option>
        <option value="VI">Virgin Islands</option>
        <option value="VA">Virginia</option>
        <option value="WA">Washington</option>
        <option value="WV">West Virginia</option>
        <option value="WI">Wisconsin</option>
        <option value="WY">Wyoming</option>
      </Form.Control>
    </Form.Group>
    <Button variant="primary" size="lg" active>
      Find Your School and Path
    </Button>
  </>
);

export default Home;
