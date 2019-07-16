<<<<<<< HEAD
import React from 'react';
import NavBar from 'NavBar';
const Home = () => (
    <>
    <NavBar/>
    <div>
      <Parallax image={<img />} />
      <div className="section white">
        <div className="row container">
          <h2 className="header">Parallax</h2>
          <p className="grey-text text-darken-3 lighten-3">
            Parallax is an effect where the background content or image in this
            case, is moved at a different speed than the foreground content
            while scrolling.
          </p>
        </div>
      </div>
      <Parallax image={<img />} />
    </div>
    </>)
                                        
export default Home
=======
import React from 'react'
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
} from 'react-bootstrap'

const Home = () => (<>
  <Navbar bg="light" expand="lg">
    <Navbar.Brand href="#home">Project Three</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">Link</Nav.Link>
        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-success">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Navbar>
</>)

export default Home
>>>>>>> origin
