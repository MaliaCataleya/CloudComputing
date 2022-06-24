import React from "react";
import { Navbar, Container, Offcanvas, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';

function DropDownComponent() {
  return (
    <>
  {[false].map((expand) => (
    <Navbar key={false} bg="light" className="mb-3">
      <Container fluid>
        <Navbar.Brand href="#">Navbar Offcanvas</Navbar.Brand>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-false-${false}`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-false-${false}`}
          aria-labelledby={`offcanvasNavbarLabel-false-${false}`}
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-false-${false}`}>
              Offcanvas
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action2">Link</Nav.Link>
              <NavDropdown
                title="Dropdown"
                id={`offcanvasNavbarDropdown-false-${false}`}
              >
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  ))}
</>
  );
}

export default DropDownComponent;