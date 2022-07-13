import React from "react";
import { Navbar, NavDropdown, Form, Button, Nav, FormControl, Offcanvas } from "react-bootstrap"
import BootstrapDatePickerComponent from "./BootstrapDatePickerComponent";

function DropDownComponent() {
  return (
    <>
      <div className="position-absolute top-0 start-0 w-25 bg-transparent">
        <Navbar key={false} expand={false} className="px-3 bg-transparent">
          <Navbar.Toggle aria-controls={`offcanvasNavbar`} />
          <Navbar.Offcanvas id={`offcanvasNavbar`} aria-labelledby={`offcanvasNavbarLabel`} placement="start">
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel`}>Offcanvas</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <BootstrapDatePickerComponent></BootstrapDatePickerComponent>
              </Nav>
              <Form className="d-flex">
                <FormControl type="search" placeholder="Search" className="me-2" aria-label="Search" />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Navbar>
      </div>
    </>
  );
}

export default DropDownComponent;
